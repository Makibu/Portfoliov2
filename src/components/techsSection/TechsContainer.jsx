import {TECHS} from "./Techs.js";
import TechTile from "./TechTile.jsx";

export default function TechsContainer(){
    return (
        <div className={'border-b-[0.2px] border-b-gray-500 pb-6'}>
            <div className={'text-white text-2xl font-bold mt-5 mb-2'}>Techs</div>
            <div className={'w-full text-center text-gray-300 text-xl mb-3'}>Primary</div>
            <div className={'grid grid-cols-2 md:grid-cols-3 gap-3'}>
                {TECHS.map(e => (
                    <TechTile key={e} title={e}/>
                ))}
            </div>
        </div>
    )
}