import resume from '../../assets/resume.pdf'
import './Navbar.css'

const Navbar = () => {
    return <>
        <nav>
            <a href="main"><h1>Jon Cogswell</h1></a>
            <div id="nav-links">
                <a className='hidden-on-mobile' href='#skills'>Skills</a>
                <a className='hidden-on-mobile' href='#my-work'>My Work</a>
                <a className='hidden-on-mobile' href='#about-me'>About Me</a>
                <a className='hidden-on-mobile' href='#contact-me'>Contact Me</a>
                <a href={resume} target='_blank'><button id='view-resume-button'>View My Resume</button></a>
            </div>
        </nav>
    </>
}

export default Navbar
