import { useEffect, useRef } from 'react';

export default function ClickSpark({
    sparkColor = '#00E5FF',
    sparkSize = 10,
    sparkRadius = 24,
    sparkCount = 8,
    duration = 450,
}) {
    const canvasRef = useRef(null);
    const sparksRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleClick = (e) => {
            // Check for reduced motion
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

            const x = e.clientX;
            const y = e.clientY;
            const now = performance.now();

            const newSparks = [];
            for (let i = 0; i < sparkCount; i++) {
                const angle = (2 * Math.PI * i) / sparkCount + (Math.random() - 0.5) * 0.4;
                newSparks.push({
                    x,
                    y,
                    angle,
                    startTime: now,
                });
            }

            sparksRef.current.push(...newSparks);
        };

        window.addEventListener('pointerdown', handleClick, { passive: true });

        const render = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const activeSparks = [];

            for (let i = 0; i < sparksRef.current.length; i++) {
                const spark = sparksRef.current[i];
                const elapsed = time - spark.startTime;
                const progress = elapsed / duration;

                if (progress < 1) {
                    activeSparks.push(spark);

                    // Ease out cubic
                    const ease = 1 - Math.pow(1 - progress, 3);
                    const currentDistance = ease * sparkRadius;
                    const length = sparkSize * (1 - progress);

                    const startX = spark.x + Math.cos(spark.angle) * currentDistance;
                    const startY = spark.y + Math.sin(spark.angle) * currentDistance;
                    const endX = startX + Math.cos(spark.angle) * length;
                    const endY = startY + Math.sin(spark.angle) * length;

                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(startX, startY);
                    ctx.lineTo(endX, endY);
                    ctx.strokeStyle = sparkColor;
                    ctx.lineWidth = 1.5;
                    ctx.lineCap = 'round';
                    ctx.globalAlpha = Math.max(0, 1 - progress);
                    ctx.stroke();
                    ctx.restore();
                }
            }

            sparksRef.current = activeSparks;
            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('pointerdown', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999]"
            aria-hidden="true"
        />
    );
}
