// export default function Resume() {
//    return (
        // <div className="pt-[90px]">
        //     <h1 className="text-3xl">Akshaykumar Magrani</h1>
        //     Email: akshaymagrani1@gmail.com | Phone No.: (+91) 8830743477 | LinkedIn: @akshay-magrani | Location:
        //     Palghar | Portfolio: akshay-magrani
        //     <h2>Projects:</h2>
        //     • Multi-Step-Form:
        //     Developed a responsive multi-step form using HTML, CSS, JavaScript, React, and Tailwind CSS.
        //     Successfully implemented a user-friendly form for enhanced data collection.
        //     • Responsive Landing Page:
        //     Created a visually appealing and responsive landing page using HTML, CSS, and JavaScript.
        //     Applied the latest design trends for an engaging user experience.
        //     • Social Media Dashboard Theme Changer:
        //     Built a social media dashboard with a toggle button to switch between light and dark modes.
        //     Implemented dynamic styling using HTML, CSS, and JavaScript.
        //     • Countries around the World:
        //     Developed a responsive web page using API, HTML, CSS, and JavaScript to display information about
        //     countries.
        //     Utilized external APIs for real-time data.
        //     <h2>Skills:</h2>
        //     • Languages: HTML, CSS, JavaScript.
        //     • Frameworks: React JS.
        //     • CSS Frameworks: Tailwind CSS, Bootstrap
        //     • Version Control: Git and GitHub.
        //     <h2>Education:</h2>
        //     B.Sc. in Computer Science | Mumbai University 2023 – 2026
        //     B.E in Mechanical Engineering | Mumbai University 2013 – 2017
        //     • Secured an aggregate of 6.66 CGPA.
        //     H.S.C | Sonopant Dandekar College, Palghar | 2011 – 2013
        //     • Secured 85.3%. Ranked 1st in college.
        //     <h2>Work Experience:</h2>
        //     Development Engineer KLT Automotive and Tubular Products Ltd. | 5 years
        //     • Implemented a Part Status Dashboard in Excel for the Press Shop team to forecast part requirements for
        //     2 days in advance resulting in 80% efficiency in tracking the status of parts. This streamlined the existing
        //     process and reduced errors.
        //     • Managed project timelines and schedules to ensure projects were completed within specified deadlines.
        //     • Implemented 5S in the Development department with quarterly reviews to maintain established
        //     standards.
        //     • Conducted data analysis and created reports to help team and management make informed decisions.
        //     • Communicated project updates and collaborated with cross-functional teams to ensure success in 6
        //     Mahindra chassis development projects.
        //     • Trained 2 new hires on project procedures.
        //     • Consistently received positive feedback from team members and management.
        // </div>
//    )
// }

const resumeData = {
    name: "Akshaykumar Magrani",
    email: "akshaymagrani1@gmail.com",
    phone: "(+91) 8830743477",
    linkedIn: "@akshay-magrani",
    location: "Palghar",
    portfolio: "akshay-magrani",
    projects: [
        {
            title: "Multi-Step-Form",
            description: "Developed a responsive multi-step form using HTML, CSS, JavaScript, React, and Tailwind CSS. Successfully implemented a user-friendly form for enhanced data collection."
        },
        // More projects...
    ],
    skills: [
        "HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Bootstrap", "Git and GitHub"
    ],
    education: [
        {
            degree: "B.Sc. in Computer Science",
            institution: "Mumbai University",
            years: "2023 – 2026"
        },
        {
            degree: "B.E in Mechanical Engineering",
            institution: "Mumbai University",
            years: "2013 – 2017",
            notes: "Secured an aggregate of 6.66 CGPA."
        },
        // More education...
    ],
    experience: [
        {
            title: "Development Engineer",
            company: "KLT Automotive and Tubular Products Ltd.",
            years: "5 years",
            responsibilities: [
                "Implemented a Part Status Dashboard in Excel for the Press Shop team to forecast part requirements for 2 days in advance resulting in 80% efficiency in tracking the status of parts. This streamlined the existing process and reduced errors.",
                // More responsibilities...
            ]
        },
    ]
};

export default function Resume() {
    return (
        <div className="pt-[90px]">
            <h1 className="text-3xl">{resumeData.name}</h1>
            <address>
                Email: {resumeData.email} | Phone No.: {resumeData.phone} | LinkedIn: {resumeData.linkedIn} | Location: {resumeData.location} | Portfolio: {resumeData.portfolio}
            </address>
            <section>
                <h2>Projects:</h2>
                <ul>
                    {resumeData.projects.map((project, index) => (
                        <li key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Skills:</h2>
                <ul>
                    {resumeData.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Education:</h2>
                {resumeData.education.map((edu, index) => (
                    <div key={index}>
                        <h3>{edu.degree}</h3>
                        <p>{edu.institution} | {edu.years}</p>
                        {edu.notes && <p>{edu.notes}</p>}
                    </div>
                ))}
            </section>
            <section>
                <h2>Work Experience:</h2>
                {resumeData.experience.map((job, index) => (
                    <div key={index}>
                        <h3>{job.title} at {job.company} | {job.years}</h3>
                        <ul>
                            {job.responsibilities.map((resp, index) => (
                                <li key={index}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
}