import {TECHS} from "./Techs.js";
import TechTile from "./TechTile.jsx";

export default function TechsContainer(){
    const {Main, Secondary} = TECHS
    
    return (
        <div className={'border-b-[0.2px] border-b-gray-500 pb-6'}>
            <div className={'text-white text-2xl font-bold mt-5 mb-2'}>Techs</div>
            <div className={'w-full text-center text-gray-300 text-xl mb-3'}>Primary</div>
            <div className={'grid grid-cols-2 md:grid-cols-3 gap-3'}>
                {Main.map(e => (
                    <TechTile key={e} title={e}/>
                ))}
            </div>
            <div className={'w-full text-center text-white text-xl mt-10 mb-3'}>Secondary</div>
            <div className={'grid grid-cols-2 md:grid-cols-3 gap-3'}>
                {Secondary.map(e => (
                    <TechTile key={e} title={e}/>
                ))}
            </div>
        </div>
    )
}