export default function ProjectPreview({ project, sizes, className = '' }) {
    return (
        <div className={`relative flex items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/15 bg-[#081820] p-2.5 shadow-[inset_0_0_0_1px_rgba(0,115,160,0.12),0_16px_40px_rgba(0,0,0,0.28)] ${className}`}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,115,160,0.18),transparent_72%)]" />
            <img
                src={project.image}
                srcSet={project.imageSet}
                sizes={sizes}
                width={project.width}
                height={project.height}
                loading="lazy"
                decoding="async"
                alt={`Anteprima del progetto ${project.title}`}
                className="relative block h-auto max-h-full w-auto max-w-full rounded-[0.8rem] border border-white/10 object-contain shadow-[0_10px_32px_rgba(0,0,0,0.5)]"
            />
        </div>
    );
}
