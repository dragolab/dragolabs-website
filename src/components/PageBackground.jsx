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
            currentX += (mouseX - currentX) * 0.06;
            currentY += (mouseY - currentY) * 0.06;

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
        <>
            {/* Deep ambient background canvas behind main (z-0) */}
            <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#040609]">
                {/* Ambient Background Glow Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-drago-accent/20 via-drago-accent/5 to-transparent blur-[120px] opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-cyan-500/15 via-drago-accent/5 to-transparent blur-[140px] opacity-40 animate-pulse" style={{ animationDuration: '12s' }} />
                <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vw] rounded-full bg-gradient-to-tr from-drago-accent/15 via-blue-600/5 to-transparent blur-[130px] opacity-50" />

                {/* High-tech micro-dot grid pattern */}
                <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

                {/* Subtle linear horizon vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
            </div>

            {/* Mouse-following soft ambient spotlight OVERLAY (z-20 pointer-events-none) */}
            {/* This ensures the cursor shadow is completely visible on top of all sections without blocking clicks */}
            <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
                <div
                    ref={glowRef}
                    className="hidden md:block absolute top-0 left-0 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(0,140,210,0.2)_0%,rgba(56,189,248,0.07)_38%,transparent_70%)] blur-2xl will-change-transform pointer-events-none"
                    style={{ transform: 'translate3d(50vw, 50vh, 0) translate(-50%, -50%)' }}
                />
            </div>
        </>
    );
}
