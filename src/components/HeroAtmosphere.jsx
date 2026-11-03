import { useEffect, useRef } from 'react';

/**
 * HeroAtmosphere
 * Elegant, lightweight ambient background with drifting aurora gradients
 * and interactive celestial stardust / constellation particles.
 * Auto-pauses on scroll out of viewport to preserve 100% device performance.
 */
export default function HeroAtmosphere() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let animationFrameId;
        let isVisible = true;
        let width = (canvas.width = container.clientWidth);
        let height = (canvas.height = container.clientHeight);
        let dpr = Math.min(window.devicePixelRatio || 1, 2);

        const handleResize = () => {
            if (!container || !canvas) return;
            width = container.clientWidth;
            height = container.clientHeight;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Mouse tracking relative to Hero section
        let mouseX = -9999;
        let mouseY = -9999;

        const handlePointerMove = (e) => {
            const rect = container.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handlePointerLeave = () => {
            mouseX = -9999;
            mouseY = -9999;
        };

        window.addEventListener('pointermove', handlePointerMove, { passive: true });
        document.addEventListener('mouseleave', handlePointerLeave);

        // Particle configuration
        const PARTICLE_COUNT = Math.min(Math.floor((width * height) / 28000), 45);
        const particles = [];
        const colors = [
            'rgba(0, 229, 255, ',   // Drago neon cyan
            'rgba(56, 189, 248, ',   // Sky blue
            'rgba(147, 197, 253, ',  // Soft ice
            'rgba(255, 255, 255, ',  // Pure white stardust
        ];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35 - 0.08, // gentle upward drift
                radius: Math.random() * 1.5 + 0.8,
                baseAlpha: Math.random() * 0.45 + 0.25,
                colorPrefix: colors[Math.floor(Math.random() * colors.length)],
                pulseSpeed: Math.random() * 0.02 + 0.01,
                pulseOffset: Math.random() * Math.PI * 2,
            });
        }

        // IntersectionObserver: stop RAF when Hero is outside viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible && !animationFrameId) {
                    render(performance.now());
                }
            },
            { threshold: 0.05 }
        );
        observer.observe(container);

        let lastTime = performance.now();

        const render = (currentTime) => {
            if (!isVisible) {
                animationFrameId = null;
                return;
            }

            const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
            lastTime = currentTime;

            ctx.clearRect(0, 0, width, height);

            // Update & Draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Natural gentle float
                p.x += p.vx * 60 * dt;
                p.y += p.vy * 60 * dt;

                // Subtle mouse reaction
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 130 && dist > 0) {
                    const force = (130 - dist) / 130;
                    p.x += (dx / dist) * force * 1.8;
                    p.y += (dy / dist) * force * 1.8;
                }

                // Screen edge wrap
                if (p.x < -10) p.x = width + 10;
                else if (p.x > width + 10) p.x = -10;
                if (p.y < -10) p.y = height + 10;
                else if (p.y > height + 10) p.y = -10;

                // Pulsing shimmer
                const alpha = p.baseAlpha + Math.sin(currentTime * 0.002 * p.pulseSpeed * 50 + p.pulseOffset) * 0.18;
                const safeAlpha = Math.max(0.08, Math.min(1, alpha));

                // Draw glowing stardust particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `${p.colorPrefix}${safeAlpha})`;
                ctx.shadowColor = '#00E5FF';
                ctx.shadowBlur = p.radius > 1.4 ? 6 : 0;
                ctx.fill();

                // Draw constellation links between nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const ldx = p.x - p2.x;
                    const ldy = p.y - p2.y;
                    const ldist = Math.sqrt(ldx * ldx + ldy * ldy);

                    if (ldist < 100) {
                        const linkAlpha = (1 - ldist / 100) * 0.12 * safeAlpha;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 229, 255, ${linkAlpha})`;
                        ctx.lineWidth = 0.75;
                        ctx.shadowBlur = 0;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('mouseleave', handlePointerLeave);
            observer.disconnect();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
            {/* Luminous Floating Aurora Orbs (GPU keyframe accelerated) */}
            <div className="absolute top-[-12%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1500px] h-[70vh] bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(0,140,210,0.24),transparent_70%)] animate-pulse pointer-events-none" style={{ animationDuration: '7s' }} />
            
            {/* Drifting secondary azure/indigo glow */}
            <div
                className="absolute top-[10%] left-[15%] w-[45vw] max-w-[650px] h-[45vw] max-h-[650px] rounded-full bg-gradient-to-br from-cyan-500/12 via-blue-600/5 to-transparent blur-[120px] pointer-events-none animate-pulse"
                style={{ animationDuration: '11s' }}
            />
            <div
                className="absolute top-[15%] right-[10%] w-[42vw] max-w-[620px] h-[42vw] max-h-[620px] rounded-full bg-gradient-to-bl from-drago-accent/14 via-indigo-600/6 to-transparent blur-[130px] pointer-events-none animate-pulse"
                style={{ animationDuration: '9s' }}
            />

            {/* Micro-dot matrix grid overlay */}
            <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:26px_26px] pointer-events-none" />

            {/* Celestial Stardust & Constellation Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
        </div>
    );
}
