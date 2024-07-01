import AboutMe from './AboutMe/AboutMe'
import Hero from './Hero/Hero'
import './Main.css'
import MyWork from './MyWork/MyWork'
import Skills from './Skills/Skills'

const Main = () => {
    return <>
        <main>
            <Hero />
            <AboutMe />
            <Skills />
            <MyWork />
        </main>
    </>
}

export default Main
