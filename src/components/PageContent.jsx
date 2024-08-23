import Online from "./heroSection/Online.jsx";
import Name from "./heroSection/Name.jsx";
import Links from "./heroSection/Links.jsx";
import Experience from "./heroSection/Experience.jsx";
import ProjectsContainer from "./projectsSection/ProjectsContainer.jsx";
import TechsContainer from "./techsSection/TechsContainer.jsx";

export default function PageContent(){
    return (
        <div className={'px-6 w-full flex justify-center pb-32'}>
            <div className={'w-full max-w-[550px] pt-10 md:pt-20'}>
                <Online/>
                <Name/>
                <Links/>
                <Experience/>
                <ProjectsContainer/>
                <TechsContainer/>
            </div>
            <span className={'text-sm text-gray-300 absolute bottom-14'}>Maciej Budzich 2024</span>
        </div>
    )
}