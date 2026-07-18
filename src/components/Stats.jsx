import React, { useEffect, useRef, useState } from 'react';
import { Bot, Server, Zap, Globe } from 'lucide-react';

const STATS = [
  { icon: Bot, value: 50, suffix: '+', label: 'Bots Simultáneos', color: 'var(--color-primary)' },
  { icon: Server, value: 7, suffix: '', label: 'Módulos de Automatización', color: 'var(--color-secondary)' },
  { icon: Zap, value: 2, suffix: 'min', label: 'Tiempo de Despliegue', color: 'var(--color-accent)' },
  { icon: Globe, value: 999, suffix: '+', label: 'Servidores Compatibles', color: 'var(--color-primary)' },
];

function useCountUp(target, duration = 1500, started = false) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return current;
}

function StatItem({ icon: Icon, value, suffix, label, color, started }) {
  const displayed = useCountUp(value, 1400, started);
  const isSpecial = suffix === 'min'; // "<2min" special case

  return (
    <div className="stat-item">
      <div
        className="stat-icon-wrapper"
        style={{
          background: `color-mix(in srgb, ${color} 12%, transparent)`,
          border: `1px solid color-mix(in srgb, ${color} 25%, transparent)`,
          color,
        }}
      >
        <Icon size={22} />
      </div>
      <span className="stat-value" style={{ color }}>
        {isSpecial ? `<${displayed}min` : `${displayed}${suffix}`}
      </span>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ padding: '4rem 0', position: 'relative' }}>
      <div className="container">
        <div className="stats-bar" ref={ref}>
          <div className="stats-grid">
            {STATS.map((stat, idx) => (
              <StatItem key={idx} {...stat} started={started} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
