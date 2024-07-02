import aboutMeImg from './aboutMeImg.jpg'
import resume from '../../../assets/resume.pdf'
import './AboutMe.css'

const AboutMe = () => {
    return <>
        <div id="about-me">
            <img src={aboutMeImg} alt="jon cogswell" />
            <div id='about-me-content'>
                <h2>About Me</h2>
                <p>As a dedicated Full Stack Software Engineer, I leverage my unique background in law enforcement to bring exceptional attention to detail and a collaborative mindset to every project. My past experiences have honed my ability to work under pressure, ensuring precision and reliability in all tasks. Passionate about learning and solving problems, I am excited to use these skills, along with my solid foundational knowledge of JavaScript and Python, to innovate and develop highly functional applications that drive meaningful impact and efficiency.</p>
                <a href={resume} target='_blank'><button id='download-resume'>View My Resume</button></a>
            </div>
        </div>
    </>
}

export default AboutMe
