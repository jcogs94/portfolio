import './ProjectCard.css'

const ProjectCard = ({ img, name, description, liveLink, githubLink }) => {
    return <>
        <div className="project-card">
            <h3>{name}</h3>
            <p><em>{description}</em></p>
            <div className='project-card-link-container'>
                <a href={liveLink}><button className='project-link'>Live Site</button></a>
                <a href={githubLink}><button className='project-link'>GitHub</button></a>
            </div>
        </div>
    </>
}

export default ProjectCard
