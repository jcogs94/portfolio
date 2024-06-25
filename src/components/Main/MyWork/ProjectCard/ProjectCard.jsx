import './ProjectCard.css'

const ProjectCard = ({ img, name, description, liveLink, githubLink }) => {
    return <>
        <div className="project-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <div>
                <button><a href={githubLink}>GitHub</a></button>
            </div>
        </div>
    </>
}

export default ProjectCard
