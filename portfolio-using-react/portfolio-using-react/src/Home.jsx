function Home(props) {
    return (
        <div id="header" className={`animate-in fade-in-25 animate-out duration-1000 flex ${props.theme ? 'theme__light' : 'theme__dark'}`}>
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