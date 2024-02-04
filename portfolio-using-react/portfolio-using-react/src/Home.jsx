import transition from "./transition"
function Home() {
    // var sidemenu = document.getElementById("sidemenu");

    // function openmenu() {
    //     sidemenu.style.right = "0";
    // }
    // function closemenu() {
    //     sidemenu.style.right = "-200px";
    // }

    return (
        <div id="header">
            <div className="container">
                <div className="header-text">
                    <p>Front-End Web Developer</p>
                    <p className="font-extralight">Hi, I am</p>
                    <h1 className="name">
                        <span className="text-wrap name">Akshaykumar Magrani</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default transition(Home);