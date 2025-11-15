export default function Vercel({txt, size}){
    return (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Vercel--Streamline-Simple-Icons" height={size} width={size}>
            <desc>
                Vercel Streamline Icon: https://streamlinehq.com
            </desc>
            <title>Vercel</title>
            <path d="M24 22.525H0l12 -21.05 12 21.05z" fill={txt ? "#000000" : "#8b8b8b"} strokeWidth="1"></path>
        </svg>
    )
}