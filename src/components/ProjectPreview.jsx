export default function ProjectPreview({ project, sizes, className = '' }) {
    return (
        <div className={`flex items-center justify-center overflow-hidden ${className}`}>
            <img
                src={project.image}
                srcSet={project.imageSet}
                sizes={sizes}
                width={project.width}
                height={project.height}
                loading="lazy"
                decoding="async"
                alt={`Anteprima del progetto ${project.title}`}
                className="block h-auto max-h-full w-auto max-w-full rounded-[clamp(0.5rem,1.4vw,1.25rem)] object-contain"
            />
        </div>
    );
}
