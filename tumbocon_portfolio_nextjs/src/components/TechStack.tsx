import { techStackData } from '@/data/techStack';
import AnimatedSection from './AnimatedSection';

export default function TechStack() {
  return (
    <AnimatedSection>
      <div className="card p-6 sm:p-8 flex flex-col gap-6">
        <div className="section-label">Tech Stack</div>
        
        <div className="flex flex-col gap-8">
          {techStackData.map((category, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h3
                style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}
                className="text-xs font-bold tracking-widest uppercase pb-2"
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)',
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium hover:text-white transition-colors duration-150 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
