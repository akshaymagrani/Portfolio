import transition from "./transition"
function Home(props) {
    console.log(props.theme);
    

    return (
        <div id="header" className={`${props.theme ? 'theme__light' : 'theme__dark'}`}>
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

export default Home;