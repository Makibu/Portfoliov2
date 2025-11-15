import TechTile from "../techsSection/TechTile.jsx";

export default function ProjectTile({name, description, img, webLink, githubLink, stack = []}){
    return (
        <div className={'rounded-xl flex flex-col text-gray-400 relative overflow-hidden bg-[#303336]'}>
            <img className={'w-full aspect-[2/1]'} src={img} alt={'Project image'}/>
            <div className={'px-5 py-3 flex flex-col relative'}>
                <span className={'text-white text-xl font-semibold'}>{name}</span>
                <span className={'leading-4 mt-4 w-[75%]'}>{description}</span>
                <div className={'flex flex-col leading-4 right-5 absolute top-14 text-right gap-1'}>
                    <a href={webLink} target={'_blank'} className={'underline'}>Visit site!</a>
                    {githubLink && <a href={githubLink} target={'_blank'} className={'underline'}>Check GitHub</a>}
                </div>
                <div className={'flex gap-2 absolute top-2 right-5'}>
                    {stack.map(e => (
                        <TechTile title={e} key={e} small/>
                    ))}
                </div>
            </div>
        </div>
    )
}