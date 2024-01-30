import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div id="header">
            <div className="container">
                <nav>
                    <img src="./logo.png" alt="logo" className="logo" title="logo" />
                    <ul id="sidemenu">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Portfolio</a></li>
                        <li><a href="#contactMe">Contact</a></li>
                        <li><a href="https://1drv.ms/w/s!AmYHJtACmlBbik6nvntNLDwePjXa?e=Num1Df" className="btn btn2" target="_blank">Download CV</a></li>
                        <i className="fas fa-times" onClick="closemenu()"></i>
                    </ul>
                    <i className="fas fa-bars" onClick="openmenu()"></i>
                </nav>
                <div className="header-text">
                    <p>Front-End Web Developer</p>
                    <p className="font-extralight">Hi, I am</p>
                    <h1 className="container1">
                        <span className="typed">Akshaykumar Magrani</span>
                    </h1>
                    <p>from Mumbai, India.</p>
                </div>
            </div>
        </div>
    )
}