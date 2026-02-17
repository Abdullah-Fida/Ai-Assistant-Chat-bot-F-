import { useEffect, useRef, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  opacity: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  wanderAngle: number;
  wanderSpeed: number;
  color: string;
}

interface StarParticlesProps {
  mouseX: number;
  mouseY: number;
}

const STAR_COLORS = [
  '255, 255, 255',     // white
  '200, 220, 255',     // cool blue-white
  '255, 240, 220',     // warm white
  '180, 200, 255',     // blue
  '16, 185, 129',      // emerald accent
  '79, 70, 229',       // indigo accent
];

export function StarParticles({ mouseX, mouseY }: StarParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const frameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  // Update mouse position ref without triggering re-render
  useEffect(() => {
    mouseRef.current = { x: mouseX, y: mouseY };
  }, [mouseX, mouseY]);

  const createStars = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 1000), 1500);
    const stars: Star[] = [];

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const sizeRand = Math.random();
      // Most stars are tiny, a few are bigger
      const size = sizeRand > 0.97 ? Math.random() * 3 + 2 : sizeRand > 0.85 ? Math.random() * 1.5 + 1 : Math.random() * 1 + 0.3;
      const opacity = sizeRand > 0.9 ? Math.random() * 0.6 + 0.4 : Math.random() * 0.4 + 0.1;

      stars.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        size,
        baseSize: size,
        opacity,
        baseOpacity: opacity,
        twinkleSpeed: Math.random() * 0.03 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        wanderAngle: Math.random() * Math.PI * 2,
        wanderSpeed: Math.random() * 0.002 + 0.001,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      });
    }
    return stars;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      starsRef.current = createStars(width, height);
    };

    resize();
    window.addEventListener('resize', resize);

    const REPEL_RADIUS = 180;
    const REPEL_STRENGTH = 80;
    const RETURN_SPEED = 0.04;
    const FRICTION = 0.92;

    const animate = () => {
      timeRef.current += 1;
      const time = timeRef.current;

      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Reset shadow state once
      ctx.shadowBlur = 0;

      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i];

        // Random wandering — slowly change direction
        star.wanderAngle += (Math.random() - 0.5) * 0.1;
        star.baseX += Math.cos(star.wanderAngle) * star.wanderSpeed * 0.5;
        star.baseY += Math.sin(star.wanderAngle) * star.wanderSpeed * 0.5;

        // Wrap around edges
        if (star.baseX < -10) star.baseX = width + 10;
        if (star.baseX > width + 10) star.baseX = -10;
        if (star.baseY < -10) star.baseY = height + 10;
        if (star.baseY > height + 10) star.baseY = -10;

        // Mouse repulsion
        const dx = star.x - mx;
        const dy = star.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS);
          const forceCubed = force * force * force; // Cubic falloff for more dramatic effect
          const angle = Math.atan2(dy, dx);
          star.vx += Math.cos(angle) * forceCubed * REPEL_STRENGTH * 0.15;
          star.vy += Math.sin(angle) * forceCubed * REPEL_STRENGTH * 0.15;
        }

        // Spring back to base position
        star.vx += (star.baseX - star.x) * RETURN_SPEED;
        star.vy += (star.baseY - star.y) * RETURN_SPEED;

        // Apply friction
        star.vx *= FRICTION;
        star.vy *= FRICTION;

        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const currentOpacity = star.baseOpacity * (0.5 + 0.5 * twinkle);
        const currentSize = star.baseSize * (0.8 + 0.2 * twinkle);

        // Glow when being repelled (stars glow brighter when disturbed)
        const distFromBase = Math.sqrt(
          (star.x - star.baseX) ** 2 + (star.y - star.baseY) ** 2
        );
        const disturbance = Math.min(distFromBase / 40, 1);
        const glowOpacity = currentOpacity + disturbance * 0.4;

        // Draw star glow (only for larger/brighter stars to save performance)
        if (star.baseSize > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, currentSize * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color}, ${glowOpacity * 0.08})`;
          ctx.fill();
        }

        // Draw star core
        ctx.beginPath();
        ctx.arc(star.x, star.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${glowOpacity})`;
        ctx.fill();

        // Draw cross-shaped sparkle for bright stars
        if (star.baseSize > 2 && twinkle > 0.3) {
          const sparkleLen = currentSize * 3 * twinkle;
          ctx.strokeStyle = `rgba(${star.color}, ${glowOpacity * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - sparkleLen, star.y);
          ctx.lineTo(star.x + sparkleLen, star.y);
          ctx.moveTo(star.x, star.y - sparkleLen);
          ctx.lineTo(star.x, star.y + sparkleLen);
          ctx.stroke();
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [createStars]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, transform: 'translateZ(0)' }}
    />
  );
}