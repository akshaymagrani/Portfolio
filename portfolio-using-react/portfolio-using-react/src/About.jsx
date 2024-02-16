function About(props) {
    // var tablinks = document.getElementsByClassName('tab-links');
    // var tabcontents = document.getElementsByClassName('tab-contents');

    // function opentab(tabname) {
    //     for (tablink of tablinks) {
    //         tablink.classList.remove("active-link");
    //     }
    //     for (tabcontent of tabcontents) {
    //         tabcontent.classList.remove("active-tab");
    //     }
    //     event.currentTarget.classList.add("active-link");
    //     document.getElementById(tabname).classList.add("active-tab");
    // }
    return (
        <div id="about" className={`animate-in fade-in duration-1000 ${props.theme ? 'theme__light' : 'theme__dark'}`}>
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="./src/assets/an illustration of an innovative entrepreneur man .jpg" alt="image" className="about-me-img" />
                    </div>
                    <div className="about-col-2">
                        <h2 className="sub-title py-4 highlight">About Me</h2>
                        <p className="max-w-96">
                            As a dedicated and detail-oriented Front-End Web Developer, I am passionate about 
                            <span>crafting immersive and intuitive user experiences</span> 
                            through innovative and visually appealing web applications. With a foundation in HTML, CSS, and JavaScript,
                            I specialize in leveraging modern frameworks like React to bring designs to life.
                        </p>

                        <div className="tab-titles">
                            <h3 className="tab-links active-link" /* onClick={opentab('skills')}*/>Skills</h3>
                            <h3 className="tab-links" /* onClick={opentab('experience')}*/>Experience</h3>
                            <h3 className="tab-links" /* onClick={opentab('education')}*/>Education</h3>
                        </div>
                        <div className="tab-contents active-tab" id="skills">
                            <ul>
                                <li><span>UI/UX</span><br />Developing Web/App interfaces</li>
                                <li><span>Web Development</span><br />Web App Development</li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="experience">
                            <ul>
                                <li><span>2018 - Current</span><br />KLT Automotive and Tubular Products Ltd | Development Engineer</li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="education">
                            <ul>
                                <li><span>2023 - 2026</span><br />B.Sc Computer Science</li>
                                <li><span>2013 - 2017</span><br />B.E Mechanical Engineering</li>
                                <li><span>2011 - 2013</span><br />Higher Secondary</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;