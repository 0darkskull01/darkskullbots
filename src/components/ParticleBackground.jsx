import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const PARTICLE_COUNT = 60;
    const CONNECTION_DIST = 130;
    const mouse = { x: null, y: null, radius: 160 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle colors: mix of cyan, purple, and white
    const COLORS = [
      { r: 0, g: 229, b: 255 },   // cyan
      { r: 176, g: 38, b: 255 },  // purple
      { r: 0, g: 229, b: 255 },   // cyan (more weight)
      { r: 57, g: 255, b: 20 },   // green accent (rare)
      { r: 200, g: 200, b: 230 }, // near-white
    ];

    class Particle {
      constructor() {
        this.reset(true);
      }
      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -5;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 0.5;
        const c = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.r = c.r; this.g = c.g; this.b = c.b;
        this.alpha = Math.random() * 0.4 + 0.2;
        // Subtle pulse
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.01 + Math.random() * 0.015;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;

        if (this.x < -10 || this.x > width + 10) this.vx = -this.vx;
        if (this.y < -10 || this.y > height + 10) this.vy = -this.vy;

        // Mouse attraction (subtle)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius && dist > 0) {
            const force = (mouse.radius - dist) / mouse.radius * 0.015;
            this.vx += (dx / dist) * force;
            this.vy += (dy / dist) * force;
            // Limit speed
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (speed > 1.2) { this.vx = (this.vx / speed) * 1.2; this.vy = (this.vy / speed) * 1.2; }
          }
        }
      }

      draw() {
        const pulseAlpha = this.alpha * (0.85 + 0.15 * Math.sin(this.pulse));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${pulseAlpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections first (below particles)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            let alpha = (1 - dist / CONNECTION_DIST) * 0.12;

            // Intensify near mouse
            if (mouse.x !== null && mouse.y !== null) {
              const mx = (particles[i].x + particles[j].x) / 2 - mouse.x;
              const my = (particles[i].y + particles[j].y) / 2 - mouse.y;
              const md = Math.sqrt(mx * mx + my * my);
              if (md < mouse.radius) {
                alpha *= (1 + (1 - md / mouse.radius) * 2.5);
              }
            }

            // Gradient line between the two particles' colors
            const grad = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            grad.addColorStop(0, `rgba(${particles[i].r}, ${particles[i].g}, ${particles[i].b}, ${alpha})`);
            grad.addColorStop(1, `rgba(${particles[j].r}, ${particles[j].g}, ${particles[j].b}, ${alpha})`);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => { p.update(); p.draw(); });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -8,
        pointerEvents: 'none',
      }}
    />
  );
}
