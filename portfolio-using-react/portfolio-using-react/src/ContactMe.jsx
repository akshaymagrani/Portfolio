// import { Form } from 'react-router-dom';

export default function ContactMe() {
    return (
        <div id="contactMe">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h2 className="sub-title">Contact Me</h2>
                        <p>
                            <i className="fas fa-paper-plane"></i>akshaymagrani1@gmail.com
                        </p>
                        <p>
                            <i className="fas fa-phone-square-alt"></i>+91 8830743477
                        </p>
                        <div className="social-icons">
                            <a href="" title="icons"><i className="fab fa-twitter-square"></i></a>
                            <a href="https://www.linkedin.com/in/akshay-magrani" title="icons"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/akshaymagrani" title="icons"><i className="fab fa-github"></i></a>
                        </div>
                        <a href="https://1drv.ms/w/s!AmYHJtACmlBbik6nvntNLDwePjXa?e=Num1Df" className="btn btn2" target="_blank">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form action="https://formsubmit.co/akshaymagrani1@gmail.com">
                            <input type="text" name="Name" placeholder="Your Name" required autocomplete="name" />
                            <input type="email" name="email" placeholder="Your Email" required autocomplete="email" />
                            <textarea type="text" name="Name" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn2" title="Submit Button">Submit</button>
                        </form>
                    </div>
                    </div>
            </div>
            <div className="copyright">
                <p>Copyright @akshaymagrani</p>
            </div>
        </div>
    )
}