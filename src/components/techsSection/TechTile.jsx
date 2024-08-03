import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function TechTile({title, small = false}){
    const [Component, setComponent] = useState(null);
    const [hovered, setHovered] = useState(false);
    
    useEffect(() => {
        const loadComponent = async () => {
            try{
                // Adjust the file extension to `.js` if `.jsx` causes issues
                const {default: DynamicComponent} = await import(`../../assets/TechIcons/${title}.jsx`);
                setComponent(() => DynamicComponent);
            }catch (error){
                console.error(`Error loading component ${title}:`, error);
                setComponent(null);
            }
        };
        
        loadComponent();
    }, [title]);
    
    return (
        <motion.div
            initial={{backgroundColor: small ? '' : '#333639'}}
            whileHover={{
                scale: small ? 1 : 1.05,
                backgroundColor: small ? '' : '#212121',
                transition: {duration: 0.2, type: 'tween'}
            }}
            
            className={`${small ? 'w-12 h-12' : `aspect-[4/3]`} text-white rounded-md relative flex justify-center items-center pb-3`}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            {Component ? <Component txt={small ? true : hovered} size={small ? '20px' : '32px'}/> :
                <span>Loading...</span>}
            <span className={`absolute ${small ? 'text-[10px] bottom-1' : ' bottom-2'}`}>{title}</span>
        </motion.div>
    );
}
