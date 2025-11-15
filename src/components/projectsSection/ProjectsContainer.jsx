import ProjectTile from "./ProjectTile.jsx";
import {PROJECTS} from "./Projects.js";

export default function ProjectsContainer(){
    return (
        <div className={'border-b-[0.2px] border-b-gray-500 pb-6'}>
            <div className={'text-white text-2xl font-bold mt-5 mb-2'}>Projects</div>
            <div className={'grid grid-cols-1 gap-12'}>
                {PROJECTS.map((project, index) => (
                    <ProjectTile key={index} {...project}/>
                ))}
            </div>
        </div>
    )
}