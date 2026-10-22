'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  orbitRadius?: number;
  orbitAngle?: number;
  orbitSpeed?: number;
}

export const PhysicsSimulation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates for gravitational interaction
    const mouse = { x: -1000, y: -1000, isHovering: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Generate quantum/celestial particles
    const particleCount = Math.min(50, Math.floor(width / 22));
    const particles: Particle[] = [];
    const colors = ['#38bdf8', '#818cf8', '#f59e0b', '#34d399', '#c084fc'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    // Atomic orbital nucleus at center
    let nucleusAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint center atomic orbital orbits
      const centerX = width * 0.78;
      const centerY = height * 0.45;

      nucleusAngle += 0.008;

      // Draw electron orbital ellipses
      const orbitalRadii = [80, 130, 180];
      orbitalRadii.forEach((r, idx) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(nucleusAngle * (idx % 2 === 0 ? 1 : -0.7) + idx * 1.05);

        ctx.beginPath();
        ctx.ellipse(0, 0, r, r * 0.45, 0, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 0 ? 'rgba(56, 189, 248, 0.15)' : idx === 1 ? 'rgba(245, 158, 11, 0.12)' : 'rgba(168, 85, 247, 0.12)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Draw electron on orbit
        const eAngle = nucleusAngle * (2 + idx * 0.8);
        const ex = Math.cos(eAngle) * r;
        const ey = Math.sin(eAngle) * (r * 0.45);

        ctx.beginPath();
        ctx.arc(ex, ey, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = idx === 0 ? '#38bdf8' : idx === 1 ? '#f59e0b' : '#c084fc';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      // Update and connect free floating particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gravitational pull towards mouse if hovering
        if (mouse.isHovering) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180 && dist > 20) {
            const force = (180 - dist) / 180 * 0.04;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // Apply friction
        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;

        // Bounce or wrap edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();

        // Connect nearby particles (gravitational force field lines)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / 110) * 0.15})`;
            ctx.lineWidth = 0.8;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto opacity-75"
      aria-hidden="true"
    />
  );
};
