import TileThumbnail from "./TileThumbnail";

const ProjectTile = ({title, description, href ,src ,alt ,badges}) => (
    <div className="pb-4 grid grid-cols-6 gap-4">
        <TileThumbnail src={src} alt={alt}/>
        <div className="col-span-4">
            <a href={href}>
                <h2 className="pb-4 text-2xl font-bold leading-snug text-isabelline-100 hover:text-rosequartz-400">{ title }</h2>
            </a>
            <p className="pb-4 text-lg text-paledogwood-300">
                {description}
            </p>
            <div className="flex flex-row">
                {badges}
            </div>
        </div>
    </div>
);
export default ProjectTile;