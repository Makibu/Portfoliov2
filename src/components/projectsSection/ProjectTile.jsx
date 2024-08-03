import {motion} from "framer-motion";
import TechTile from "../techsSection/TechTile.jsx";

export default function ProjectTile({title, webLink, githubLink, description, stack}){
    return (
        <motion.div initial={{backgroundColor: '#333639'}}
                    whileHover={{backgroundColor: '#4d4d4d', transition: {type: 'tween'}, color: '#c1c1c1'}}
                    className={'aspect-square rounded-xl p-3 flex flex-col text-gray-400 relative'}>
            <span className={'text-white font-bold text-xl'}>{title}</span>
            <div className={'flex flex-col leading-4 mb-5'}>
                <a href={webLink} target={'_blank'} className={'underline'}>Go to site!</a>
                {githubLink ? <a href={githubLink} target={'_blank'} className={'underline'}>Check GitHub</a> :
                    <span className={'text-transparent select-none'}>t</span>}
            </div>
            <span className={'leading-4'}>{description}</span>
            <div className={'flex gap-2 absolute bottom-0'}>
                {stack.map(e => (
                    <TechTile title={e} key={e} small/>
                ))}
            </div>
        </motion.div>
    )
}