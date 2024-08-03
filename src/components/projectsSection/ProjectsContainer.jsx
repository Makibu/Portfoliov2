import ProjectTile from "./ProjectTile.jsx";
import {PROJECTS} from "./Projects.js";

export default function ProjectsContainer(){
    return (
        <div className={'border-b-[0.2px] border-b-gray-500 pb-6'}>
            <div className={'text-white text-2xl font-bold mt-5 mb-2'}>Projects</div>
            <div className={'grid grid-cols-1 md:grid-cols-2'}>
                {Object.entries(PROJECTS).map(([title, props]) => (
                    <ProjectTile key={title} title={title} webLink={props.webLink} githubLink={props.githubLink}
                                 description={props.description} stack={props.stack}/>
                ))}
            </div>
        </div>
    )
}