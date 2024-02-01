export default function Nav() {
    return (
        <nav className='fixed top-0 mix-blend-difference flex justify-between w-full'>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 3.75317L21.5509 20.2501H2.44922L12.0001 3.75317ZM5.05089 18.7501H18.9492L12.0001 6.74697L5.05089 18.7501Z" className="fill-[#ff004f]" />
            </svg>
            <ul id="sidemenu">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Portfolio</a></li>
                <li><a href="#contactMe">Contact</a></li>
                <li><a href="https://1drv.ms/w/s!AmYHJtACmlBbik6nvntNLDwePjXa?e=Num1Df" className="btn btn2" target="_blank">Download CV</a></li>
                <i className="fas fa-times"  /*onClick={closemenu()}*/></i>
            </ul>
            <i className="fas fa-bars" /* onClick={openmenu()}*/></i>
        </nav>
    )
}