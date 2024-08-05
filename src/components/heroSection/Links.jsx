import {motion} from "framer-motion";
import {useState} from "react";
import LinkedInIcon from "../../assets/SocialIcons/LinkedInIcon.jsx";
import GithubIcon from "../../assets/SocialIcons/GithubIcon.jsx";
import MailIcon from "../../assets/SocialIcons/MailIcon.jsx";

export default function Links(){
    const [hovered, setHovered] = useState(false);
    
    const socials = {
        'LinkedIn': {
            icon: LinkedInIcon,
            webLink: 'https://www.linkedin.com/in/maciejbudzich/'
        },
        'Github': {
            icon: GithubIcon,
            webLink: 'https://github.com/Makibu'
        },
        'Mail': {
            icon: MailIcon,
            webLink: 'bumaciej@gmail.com'
        },
        'Resume': {
            webLink: 'https://drive.google.com/file/d/1ZS4yOKa-t_2HHxE0z6Z-1R3whAvBpNnd/view',
        }
    }
    
    return (
        <div
            className={'flex gap-3 py-8 flex-wrap justify-start'}>
            {Object.entries(socials).map(([platform, {icon, webLink}]) => {
                    const IconComponent = icon
                    return (
                        <a key={platform} href={platform !== 'Mail' ? webLink : `mailto:${webLink}`}
                           className={'inline-block'} target={'_blank'}>
                            <motion.div initial={{backgroundColor: '#333639', color: 'white', scale: 1}}
                                        whileHover={{backgroundColor: 'white', color: 'black', scale: 1.1}}
                                        className={'px-6 py-2 justify-center items-center flex rounded-full gap-1'}
                                        onHoverStart={() => setHovered(platform)}
                                        onHoverEnd={() => setHovered(null)}
                            >
                                {IconComponent && <IconComponent txt={hovered === platform} size="20px"/>}
                                <span>{platform}</span>
                            </motion.div>
                        </a>
                    )
                }
            )}
        </div>
    )
}