import {motion} from "framer-motion";

export default function Name(){
    const text = "Maciej";
    
    const containerVariants = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {staggerChildren: 0.2}},
    };
    
    const letterVariants = {
        hidden: {opacity: 0, y: -50},
        show: {opacity: 1, y: 0, transition: {duration: 0.8}},
        
    };
    
    return (
        <div className={'text-white text-3xl md:text-[45px] font-[700] flex flex-col'}>
            <div className={'flex flex-row'}>
                <span>Hey, I'm</span>
                <motion.div variants={containerVariants} initial={'hidden'} animate={'show'}
                            className="flex justify-center items-center mx-3">
                    {text.split('').map((char, index) => (
                        <motion.span className={'text-outline text-transparent'} key={index}
                                     variants={letterVariants}>{char}</motion.span>
                    ))}
                </motion.div>
            </div>
            <span className={'mt-4 gradient text-transparent'}>Front-End React Developer</span>
        </div>
    )
}