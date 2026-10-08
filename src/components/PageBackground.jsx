export default function PageBackground() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40">
            <img src="/img/optimized/background-1600.webp" srcSet="/img/optimized/background-768.webp 768w, /img/optimized/background-1600.webp 1600w" sizes="100vw" width="2048" height="2048" alt="" fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/[0.32] via-drago-bg/85 to-drago-bg" />
        </div>
    );
}
