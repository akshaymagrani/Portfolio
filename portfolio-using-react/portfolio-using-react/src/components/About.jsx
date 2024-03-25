import { useState } from "react";

function About(props) {
    const [tab, changeTab] = useState('skills');

    function opentab(tabname) {
        changeTab(currentTabName => tabname);
        console.log(tab); 
    }
    return (
        <>
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
                            <span> crafting immersive and intuitive user experiences </span> 
                            through innovative and visually appealing web applications. With a foundation in HTML, CSS, and JavaScript,
                            I specialize in leveraging modern frameworks like React to bring designs to life.
                        </p>
                            <div className="tab-titles my-8">
                                <h3 className={`tab-links ${tab == 'skills' ? 'active-link' : ''}`} onClick={() => opentab('skills')}>Skills</h3>
                                <h3 className={`tab-links ${tab == 'experience' ? 'active-link' : ''}`} onClick={() => opentab('experience')}>Experience</h3>
                                <h3 className={`tab-links ${tab == 'education' ? 'active-link' : ''}`} onClick={() => opentab('education')}>Education</h3>
                            </div>
                            {
                                tab == 'skills' && <div className="tab-contents" id="skills">
                                    <ul>
                                        <li><span className="font-semibold">Programming Languages</span> − HTML5, CSS3, Python, JavaScript, SQL</li>
                                        <li><span className="font-semibold">Frameworks/Libraries</span> − React JS, SASS, Tailwind CSS</li>
                                        <li><span className="font-semibold">Developer Tools </span> − Linux, Git, GitHub, VSCode</li>
                                        <li><span className="font-semibold">Databases </span> - MySQL</li>
                                        {/* <li><span className="font-semibold">Other Skills </span> − Data Structures and Algorithms, OOP, Computer Fundamentals</li>
                                <li><span className="font-semibold">Languages </span> - French – A1, German – A1</li> */}
                                    </ul>
                                </div>
                            }
                            {
                                tab == 'experience' && <div className="tab-contents" id="experience">
                                    <ul>
                                        <li><span>2018 - Current</span><br /><span className="font-semibold">KLT Automotive and Tubular Products Ltd </span>| Development Engineer</li>
                                        <li><span>
                                            <li>Led 2 key projects and assisted in 4 other projects while managing timelines and meeting deadlines within budgetary limits.</li>
                                            <li>Assessed vendors to confirm business and labor practices aligned with company standards.</li>
                                            <li>Conducted feasibility research prior to beginning new projects.</li>
                                            <li>Defined project scopes and schedules.</li>
                                        </span></li>
                                    </ul>
                                </div>
                            }
                            {
                                tab == 'education' && <div className="tab-contents" id="education">
                                    <ul>
                                        <li><span>2023 - 2026</span><br />B.Sc Computer Science</li>
                                        <li><span>2013 - 2017</span><br />B.E Mechanical Engineering</li>
                                        <li><span>2011 - 2013</span><br />Higher Secondary</li>
                                    </ul>
                                </div>
                            }
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default About;