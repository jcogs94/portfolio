import './ProjectCard.css'

const ProjectCard = ({ img, name, date, description, skills, liveLink, githubLink }) => {
    return <>
        <div className="project-card">
            <h3>{name} - {date}</h3>
            <img src={img} alt={name} />
            <p><em>{description}</em></p>
            <p><b>Skills Used: </b>{
                skills.map( (skill, index) => {
                    if (index + 1 === skills.length) {
                        return skill
                    } else {
                        return skill + ", "
                    }
                })
            }</p>
            <div className='project-card-link-container'>
                <a href={liveLink}><button className='project-link'>Live Site</button></a>
                <a href={githubLink}><button className='project-link'>GitHub</button></a>
            </div>
        </div>
    </>
}

export default ProjectCard
