import projectsData from './projectsData.js'
import './MyWork.css'
import ProjectCard from './ProjectCard/ProjectCard.jsx'

const MyWork = () => {
    return <>
        <div id="my-work">
            <h2>My Work</h2>
            <div id="projects-container">
                {projectsData.map( (project, index) => (
                    <ProjectCard {...project} key={'project-' + index} />
                ))}
            </div>
        </div>
    </>
}

export default MyWork
