export default function Home() {
    return (
        <div id="header">
            <div className="container">
                <nav>
                    <img src="./logo.png" alt="logo" className="logo" title="logo" />
                    <ul id="sidemenu">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="https://1drv.ms/w/s!AmYHJtACmlBbik6nvntNLDwePjXa?e=Num1Df" className="btn btn2" target="_blank">Download CV</a></li>
                        <i className="fas fa-times" onClick="closemenu()"></i>
                    </ul>
                    <i className="fas fa-bars" onClick="openmenu()"></i>
                </nav>
                <div className="header-text">
                    <p>Front-End Web Developer</p>
                    <h1>Hi, I am
                        <div className="container1">
                            <span className="typed">Akshaykumar Magrani</span>
                        </div>
                        from Mumbai, India.</h1>
                </div>
            </div>
        </div>
    )
}