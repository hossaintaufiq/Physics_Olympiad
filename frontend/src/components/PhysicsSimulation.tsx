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

    // Particle pool optimized for white canvas
    const particleCount = Math.min(45, Math.floor(width / 26));
    const particles: Particle[] = [];
    const colors = ['#2563eb', '#0284c7', '#d97706', '#059669', '#7c3aed'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.3,
      });
    }

    let nucleusAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital paths on light background
      const centerX = width * 0.82;
      const centerY = height * 0.45;

      nucleusAngle += 0.007;

      const orbitalRadii = [80, 130, 180];
      orbitalRadii.forEach((r, idx) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(nucleusAngle * (idx % 2 === 0 ? 1 : -0.7) + idx * 1.05);

        ctx.beginPath();
        ctx.ellipse(0, 0, r, r * 0.45, 0, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 0 ? 'rgba(37, 99, 235, 0.12)' : idx === 1 ? 'rgba(217, 119, 6, 0.1)' : 'rgba(124, 58, 237, 0.08)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Electron on orbit
        const eAngle = nucleusAngle * (2 + idx * 0.8);
        const ex = Math.cos(eAngle) * r;
        const ey = Math.sin(eAngle) * (r * 0.45);

        ctx.beginPath();
        ctx.arc(ex, ey, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = idx === 0 ? '#2563eb' : idx === 1 ? '#d97706' : '#7c3aed';
        ctx.fill();
        ctx.restore();
      });

      // Update and connect free floating particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouse.isHovering) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180 && dist > 20) {
            const force = (180 - dist) / 180 * 0.035;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${(1 - dist / 100) * 0.09})`;
            ctx.lineWidth = 0.8;
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
      className="absolute inset-0 w-full h-full pointer-events-auto opacity-70"
      aria-hidden="true"
    />
  );
};
