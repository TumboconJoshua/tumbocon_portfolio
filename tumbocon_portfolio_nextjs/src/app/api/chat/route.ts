import { GoogleGenerativeAI } from "@google/generative-ai";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { techStackData } from "@/data/techStack";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const systemPrompt = `You are a helpful and polite AI assistant that represents Joshua Tumbocon, a Full Stack Developer. 
Your goal is to answer questions strictly about his background, experience, projects, and tech stack based on the provided context.
If asked about something unrelated, politely decline and steer the conversation back to his professional profile.
Do not invent or hallucinate facts. Maintain a professional, positive, and concise tone.

Here is Joshua's specific context:
CONTACT INFO: Email Joshua at tumboconjoshua26@gmail.com for work inquiries or collaboration.
SCHEDULING: If they want to schedule a meeting, provide this link to book a time: [https://calendly.com/tumboconjoshua26/30min] (You can update this URL later with your actual Calendly link).
EXPERIENCE: ${JSON.stringify(experienceData)}
PROJECTS: ${JSON.stringify(projectsData)}
TECH STACK: ${JSON.stringify(techStackData)}
`;

// Simple In-Memory Rate Limiter (Note: In a true multi-server environment like Vercel, this is per-instance, but it still heavily prevents bot spam)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute window
const MAX_REQUESTS = 5; // allow 5 messages per minute per IP

export async function POST(req: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return new Response("GEMINI_API_KEY is not configured.", { status: 500 });
    }

    // Rate Limiting Logic
    const ip = req.headers.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();
    const clientData = rateLimitMap.get(ip);

    if (clientData) {
      if (now > clientData.resetTime) {
        // Reset window
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      } else {
        clientData.count++;
        if (clientData.count > MAX_REQUESTS) {
          return new Response("Rate limit exceeded. Please wait a minute before chatting again.", { status: 429 });
        }
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }

    // Memory leak protection
    if (rateLimitMap.size > 1000) {
      rateLimitMap.clear();
    }

    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemma-3-27b-it" });

    // Format history for Gemini SDK
    const formattedHistory = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    const lastMessage = messages[messages.length - 1].content;

    // Inject system prompt explicitly as the first instruction
    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: systemPrompt }] },
        { role: "model", parts: [{ text: "Understood. I will answer purely based on Joshua's context." }] },
        ...formattedHistory,
      ],
    });

    const result = await chat.sendMessageStream(lastMessage);

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            if (chunkText) {
              controller.enqueue(encoder.encode(chunkText));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response("Error processing your request.", { status: 500 });
  }
}
