import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function Header() {
  return (
    <AnimatedSection>
      <div className="card p-8 sm:p-10">
        <div className="flex flex-col-reverse sm:flex-row items-start gap-8 ">
          {/* Left: Text content */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="badge">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </span>
              <span className="badge">📍 Olongapo, Philippines</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05] mb-2">
                Joshua Tumbocon
              </h1>
              <p style={{ color: 'var(--text-secondary)' }} className="text-lg font-medium">
                Full Stack Developer
              </p>
            </div>

            {/* Description */}
            <p style={{ color: 'var(--text-secondary)' }} className="text-base leading-relaxed max-w-lg">
              I build reliable, scalable web applications. Focused on clean code, performance, and meaningful products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="mailto:tumboconjoshua26@gmail.com"
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-[#ff4500] hover:text-white transition-colors duration-200"
              >
                Schedule a Call
              </a>
              <a
                href="/files/Tumbocon Joshua.pdf"
                download
                style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-transparent hover:border-white/20 hover:text-white transition-colors duration-200"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative w-40 h-40 sm:w-60 sm:h-60 shrink-0 rounded-2xl overflow-hidden"
               style={{ border: '1px solid var(--border)' }}>
            <Image
              src="/pictures/joshua.jpg"
              alt="Joshua Tumbocon"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
