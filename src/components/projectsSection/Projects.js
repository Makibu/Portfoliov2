import PokimoniImg from "../../assets/ProjectImages/pokimoni.png";
import AutoSQLImg from "../../assets/ProjectImages/autosql.png";
import StradeanImg from "../../assets/ProjectImages/stradean.png";
import AlmexImg from "../../assets/ProjectImages/almex.png";
import GamesImg from "../../assets/ProjectImages/games.png";

export const PROJECTS = [
    {
        name: 'Pokimoni',
        description: 'A browser game focused on opening Pokémon-style packs, earning coins, and collecting cards with varying rarity.',
        img: PokimoniImg,
        githubLink: 'https://github.com/Makibu/Pokimoni',
        webLink: 'https://pokimoni.vercel.app/',
        stack: ['Next', 'TypeScript', 'Tailwind', 'Supabase', "Vercel", "ShadCn"],
    },
    {
        name: 'AutoSQL',
        description: 'A driving school website built for a private client in Poznań.',
        img: AutoSQLImg,
        webLink: 'https://autosql.pl/',
        stack: ['Next', 'TypeScript', 'Tailwind', 'Supabase', "ShadCn"],
    },
    {
        name: 'Stradean',
        description: 'A frontend-only software company showcase created as a hobby project.',
        img: StradeanImg,
        githubLink: 'https://github.com/Makibu/stradean',
        webLink: 'https://stradean.com/',
        stack: ['Next', 'Tailwind', 'FramerMotion', "Vercel", "ShadCn"],
    },
    {
        name: 'Almex',
        description: 'A showcase landing page for a company specializing in garage doors and shutters.',
        img: AlmexImg,
        webLink: 'https://almex.net.pl/',
        stack: ['React', 'Tailwind', 'Router'],
    },
    {
        name: 'Visual Memory Games',
        description: 'A collection of simple web-based memory and reaction games.',
        img: GamesImg,
        githubLink: 'https://github.com/Makibu/VisualMemoryGames',
        webLink: 'https://visualmemorygames.netlify.app/',
        stack: ['React', 'Tailwind', 'Router'],
    }
]