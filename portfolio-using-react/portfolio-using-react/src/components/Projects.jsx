import formDesktop from '../assets/multi-step-form-destop.jpg';
import worldDestop from '../assets/gael-gaborel-orbisterrae-G_MCcG2YqPQ-unsplash.jpg';
import socialDesktop from '../assets/alexander-shatov-mr4JG4SYOF8-unsplash.jpg';

function Projects(props) {
    return (
        <div id="projects" className={`animate-in fade-in duration-1000 ${props.theme ? 'theme__light' : 'theme__dark'}`}>
            <div className="container">
                <h2 className="sub-title py-4 highlight">My Works</h2>
                <div className="work-list">
                    <div className="work sm-max-w-[350px]">
                        <img src={formDesktop} alt="image1" />
                        <div className="layer">
                            <h3 className="mt-4 text-lg font-semibold">Multi-Step Form</h3>
                            <p className="description">
                                A responsive multi-step form using HTML, CSS, JavaScript, React and Tailwind CSS for enhanced data collection.
                            </p>
                            <a href="https://web-dev-i-multi-step-form-using-react.vercel.app/" title="link-icon"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div className="work sm-max-w-[350px]">
                        <img src={worldDestop} alt="image3" />
                        <div className="layer">
                            <h3 className="mt-4 text-lg font-semibold">Countries around the world</h3>
                            <p className="description">
                                A responsive web page using API, HTML, CSS and JavaScript to display information about countries.
                                Utilized external APIs for real-time data.
                            </p>
                            <a href="https://web-dev-a-rest-countries-api-with-color-theme-switcher.vercel.app/" title="link-icon"><i
                                className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div className="work sm-max-w-[350px]">
                        <img src={socialDesktop} alt="image1" />
                        <div className="layer">
                            <h3 className="mt-4 text-lg font-semibold">Social Media Tracker</h3>
                            <p className="description">
                                Visually appealing and responsive landing page using HTML, CSS and JavaScript.
                            </p>
                            <a href="https://web-dev-social-media-dashboard-theme-change-etesjobyo.now.sh/" title="link-icon"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;