import skillData from './skillData.js'
import './Skills.css'

const Skills = () => {
    const keys = Object.keys(skillData)
    
    return <>
        <div id="skills">
            <h1>Skills</h1>
            <div id='skill-group-container'>
                {keys.map( (key) => (
                    <div className='skill-group' key={key} >
                        <h3 className='skill-group-name'>{key}</h3>
                        <ul className='skill-group-list'>
                            {skillData[key].map( (skill, index) => (
                                <li className='skill' key={(key + '-' + index)}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default Skills
