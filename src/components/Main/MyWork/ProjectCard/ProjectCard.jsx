import './ProjectCard.css'

const ProjectCard = ({ img, name, date, description, liveLink, githubLink }) => {
    return <>
        <div className="project-card">
            <h3>{name} - {date}</h3>
            <img src={img} alt={name} />
            <p><em>{description}</em></p>
            <div className='project-card-link-container'>
                <a href={liveLink}><button className='project-link'>Live Site</button></a>
                <a href={githubLink}><button className='project-link'>GitHub</button></a>
            </div>
        </div>
    </>
}

export default ProjectCard
