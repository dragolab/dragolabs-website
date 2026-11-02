import { useEffect, useRef } from 'react';

export default function PageBackground() {
    const glowRef = useRef(null);

    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let currentX = mouseX;
        let currentY = mouseY;
        let animationFrameId;

        const handlePointerMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('pointermove', handlePointerMove, { passive: true });

        const animate = () => {
            // Smooth lerp follow
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;

            glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#040609]">
            {/* Ambient Background Glow Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-drago-accent/20 via-drago-accent/5 to-transparent blur-[120px] opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-cyan-500/15 via-drago-accent/5 to-transparent blur-[140px] opacity-40 animate-pulse" style={{ animationDuration: '12s' }} />
            <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vw] rounded-full bg-gradient-to-tr from-drago-accent/15 via-blue-600/5 to-transparent blur-[130px] opacity-50" />

            {/* Mouse-following soft ambient spotlight */}
            <div
                ref={glowRef}
                className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,115,160,0.18)_0%,rgba(0,229,255,0.06)_35%,transparent_70%)] blur-2xl will-change-transform"
                style={{ transform: 'translate3d(50vw, 50vh, 0) translate(-50%, -50%)' }}
            />

            {/* High-tech micro-dot grid pattern */}
            <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

            {/* Subtle linear horizon vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>
    );
}
