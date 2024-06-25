import AboutMe from './AboutMe/AboutMe'
import Hero from './Hero/Hero'
import './Main.css'
import MyWork from './MyWork/MyWork'
import Skills from './Skills/Skills'

const Main = () => {
    return <>
        <main>
            <Hero />
            <Skills />
            <MyWork />
            <AboutMe />
        </main>
    </>
}

export default Main
