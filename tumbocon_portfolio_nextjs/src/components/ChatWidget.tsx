"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Message = {
  role: "user" | "assistant" | "error";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Joshua's AI Assistant. Ask me anything about his experience, projects, or tech stack!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let assistantResponseMessage = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        assistantResponseMessage += chunk;
        
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = assistantResponseMessage;
          return newMessages;
        });
      }
    } catch (error: any) {
      console.error(error);
      const errorMessage = error.message || "Sorry, I encountered an error connecting to the server.";
      setMessages((prev) => [...prev, { role: "error", content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-[#2563EB] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${isOpen ? "rotate-90 scale-90 opacity-0 pointer-events-none" : "rotate-0 scale-100 opacity-100"}`}
          aria-label="Open AI Chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#18181B] rounded-full animate-pulse"></span>
        </button>

        {/* Chat Window */}
        <div
          className={`absolute bottom-0 right-0 w-[calc(100vw-3rem)] sm:w-[380px] h-[550px] max-h-[85vh] flex flex-col bg-white/70 dark:bg-[#18181B]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right ${
            isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-50 opacity-0 pointer-events-none"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-black/5 dark:border-white/10 shrink-0 bg-white/40 dark:bg-black/20 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2563EB]/10 text-[#2563EB] dark:bg-[#3B82F6]/20 dark:text-[#3B82F6]">
                <Bot className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white font-[family-name:var(--font-archivo)]">Joshua-GPT</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <p className="text-[0.65rem] text-gray-500 font-medium uppercase tracking-wider">Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full text-gray-500 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}
              >
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === "user" ? "bg-gray-200 dark:bg-zinc-700 text-gray-600 dark:text-white" : msg.role === "error" ? "bg-red-100 text-red-500" : "bg-[#2563EB] text-white"}`}>
                  {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-3 rounded-[1.25rem] text-sm leading-relaxed ${msg.role === "user" ? "bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-100 rounded-tr-sm" : msg.role === "error" ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/50" : "bg-[#2563EB] text-white rounded-tl-sm shadow-md"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 max-w-[85%]">
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#2563EB] text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-4 rounded-[1.25rem] text-sm bg-[#2563EB] text-white rounded-tl-sm shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-black/5 dark:border-white/10 shrink-0 bg-white/40 dark:bg-black/20 rounded-b-2xl">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me about my experience..."
                disabled={isLoading}
                className="flex-1 bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 focus:border-[#2563EB] dark:focus:border-[#3B82F6] rounded-full px-4 py-2.5 text-sm outline-none transition-all disabled:opacity-50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-sm"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#2563EB] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1D4ED8] hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <Send className="w-4 h-4 -ml-0.5 mt-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
