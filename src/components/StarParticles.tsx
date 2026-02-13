import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface StarParticlesProps {
  mouseX: number;
  mouseY: number;
}

export function StarParticles({ mouseX, mouseY }: StarParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const mousePositionRef = useRef({ x: mouseX, y: mouseY });

  // Update mouse position ref without triggering re-render
  useEffect(() => {
    mousePositionRef.current = { x: mouseX, y: mouseY };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = 400;
    particlesRef.current = Array.from({ length: particleCount }, () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      return {
        x,
        y,
        originalX: x,
        originalY: y,
        size: Math.random() * 2 + 0.5,
        speedX: -(Math.random() * 0.3 + 0.1), // Move from right to left
        speedY: Math.random() * 0.4 + 0.2, // Move from top to bottom
        opacity: Math.random() * 0.5 + 0.3,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Natural drift movement (right to left, top to bottom)
        particle.originalX += particle.speedX;
        particle.originalY += particle.speedY;

        // Wrap around screen edges
        if (particle.originalX < 0) {
          particle.originalX = canvas.width;
        }
        if (particle.originalY > canvas.height) {
          particle.originalY = 0;
        }

        // Calculate distance from mouse
        const dx = mousePositionRef.current.x - particle.originalX;
        const dy = mousePositionRef.current.y - particle.originalY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150; // Mouse influence radius

        // If mouse is close, push particle away
        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          particle.x = particle.originalX - Math.cos(angle) * force * 30;
          particle.y = particle.originalY - Math.sin(angle) * force * 30;
        } else {
          // Return to floating position smoothly
          particle.x += (particle.originalX - particle.x) * 0.1;
          particle.y += (particle.originalY - particle.y) * 0.1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
}