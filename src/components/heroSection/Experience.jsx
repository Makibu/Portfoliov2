export default function Experience(){
    return (
        <div className={'text-gray-400 text-sm border-b-[0.2px] border-b-gray-500 pb-6 flex flex-col gap-6'}>
            <div className={'flex flex-col gap-4 md:gap-1'}>
                <span className={'text-lg text-gray-100 font-bold'}>Experience</span>
                <div className={'flex flex-col md:flex-row'}>
                    <span><b>Freelance</b> | Front-End React Developer |&nbsp;</span>
                    <span>08.2023 - Present</span>
                </div>
                <div className={'flex flex-col md:flex-row'}>
                    <span><b>Quay</b> | Web Content Specialist |&nbsp;</span>
                    <span>11.2022 - 12.2022 (Practice Work)</span>
                </div>
                <div className={'flex flex-col md:flex-row'}>
                    <span><b>Quay</b> | IT Specialist |&nbsp;</span>
                    <span>04.2022 - 05.2022 (Practice Work)</span>
                </div>
            </div>
            <div className={'flex flex-col'}>
                <span className={'text-lg text-gray-100 mt-4 font-bold'}>Certificates</span>
                <span><b>IT Technician</b></span>
                <span className={'mt-4'}><b>Qualifications:</b> INF.02</span>
                <span><b>Description:</b> Certified in Computer Systems Administration, including the management and maintenance of computer systems, peripheral devices, and local area networks (LANs).</span>
                <span className={'mt-4'}><b>Qualifications:</b> INF.03</span>
                <span><b>Description:</b>  Certified in Web and Application Development, with expertise in creating and administering websites, web applications, and databases</span>
            
            </div>
        </div>
    )
}