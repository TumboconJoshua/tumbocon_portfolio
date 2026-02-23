import { experienceData } from '@/data/experience';
import AnimatedSection from './AnimatedSection';

export default function ExperienceTimeline() {
  return (
    <AnimatedSection>
      <div className="card p-6 sm:p-8">
        <div className="section-label">Experience</div>

        <div className="flex flex-col">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 py-5 group"
              style={{ borderBottom: index < experienceData.length - 1 ? '1px solid var(--border)' : 'none' }}
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-white group-hover:text-[#ff4500] transition-colors duration-200">
                  {exp.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
                  {exp.company}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                <span
                  style={{ color: 'var(--text-muted)' }}
                  className="text-xs font-medium tabular-nums"
                >
                  {exp.date}
                </span>
                <span className="badge" style={{ fontSize: '0.6rem' }}>
                  {exp.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
