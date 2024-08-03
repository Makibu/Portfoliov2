export default function FramerMotion({txt, size}){
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             x="0px" y="0px"
             viewBox="0 0 64 64" width={size} height={size} xmlSpace="preserve">
            <g>
                <path fill={txt ? '#67DBFF' : '#8b8b8b'} d="M32,21.3h21.7V0h-43v0.2L32,21.3z"/>
                <path fill={txt ? '#01A3FF' : '#8b8b8b'} d="M32,21.3H10.3v21.3h43v-0.2L32,21.3L32,21.3z"/>
                <path fill={txt ? '#0162FF' : '#8b8b8b'} d="M10.3,42.5h21.5V64L10.3,42.5z"/>
            </g>
        </svg>
    
    )
}