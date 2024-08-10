import chefsChoice from './img/chefsChoice.jpg'
import utiliSuite from './img/utiliSuite.jpg'
import instrumentManagement from './img/instrumentManagement.jpg'
import todo from './img/todo.jpg'
import cruddyCash from './img/cruddyCash.jpg'
import qwixx from './img/qwixx.jpg'

const projectsData = [
    {
        img: chefsChoice,
        name: "Chef's Choice",
        date: "July 2024",
        description: "A recipe website for viewing and adding recipes using a Django back end and React front end.",
        skills: ["Django", "React", "PostgreSQL"],
        liveLink: "http://chefs-choice.joncogswell.com/",
        githubLink: "https://github.com/jcogs94/chefs-choice"
    },
    {
        img: utiliSuite,
        name: "UtiliSuite",
        date: "June 2024",
        description: "A suite of utility tools all in one application, using a Spring Boot back end and React front end.",
        skills: ["Java", "Spring Boot", "React", "MySQL"],
        liveLink: "http://utilisuite.joncogswell.com/",
        githubLink: "https://github.com/jcogs94/utiliSuite.git"
    },
    {
        img: instrumentManagement,
        name: "Instrument Rental Management",
        date: "June 2024",
        description: "An organization and management tool for tracking instrument rentals. I worked as the Lead Front-End Developer for this team project.",
        skills: ["Python", "Django", "React", "PostgreSQL"],
        liveLink: "http://instruments.joncogswell.com/",
        githubLink: "https://github.com/jcogs94/unit4-front-end.git"
    },
    {
        img: todo,
        name: "ToDo or Not ToDo",
        date: "May 2024",
        description: "A full stack MERN application for managing ToDo tasks. For this group project I worked as the Front-End Manager and Lead Developer.",
        skills: ["React", "Express.js", "API", "RESTful Routing", "MongoDB"],
        liveLink: "http://todo-app.joncogswell.com/",
        githubLink: "https://github.com/jcogs94/todo-or-not-todo-frontend.git"
    },
    {
        img: cruddyCash,
        name: "CRUDdy Cash",
        date: "May 2024",
        description: "Personal budgeting application with full CRUD capabilities, utilizing user authentication and mobile-focused development.",
        skills: ["Express.js", "MongoDB", "Mongoose", "EJS"],
        liveLink: "http://cruddy-cash.joncogswell.com/",
        githubLink: "https://github.com/jcogs94/cruddy-cash.git"
    },
    {
        img: qwixx,
        name: "Qwixx",
        date: "April 2024",
        description: "Based on the dice game produced by GameWright, this app allows users to play the game without pen and paper.",
        skills: ["HTML", "CSS", "JavaScript"],
        liveLink: "http://qwixx.joncogswell.com/",
        githubLink: "https://github.com/jcogs94/qwixx.git"
    },
]

export default projectsData
