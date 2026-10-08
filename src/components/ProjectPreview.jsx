export default function ProjectPreview({ project, sizes, className = '' }) {
    return (
        <div className={`relative flex items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#141c20] p-2.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_16px_40px_rgba(0,0,0,0.28)] ${className}`}>
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
