import self from "../img/2-removebg-preview.png"
import mock1 from "../img/mock2.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock2.png"
import mock4 from "../img/mock2.png"
import mock5 from "../img/mock2.png"
import react1 from "../img/certificate/React-Basic-HR.png"
import react2 from "../img/certificate/Frontend-developer-React-HR.jpg"
import node from "../img/certificate/Node-Basic-HR.png"
import css from "../img/certificate/CSS-Basic-HR.png"
import seintern from "../img/certificate/Software-Engineer-Intern-HR.png"
import java from "../img/certificate/java-basic-certificate.jpg"
import sql from "../img/certificate/SQL -GL.jpg"
import AI from "../img/certificate/AI-GL.jpg"
import express from "../img/certificate/ExpressJS-GL.jpg"
import git from "../img/certificate/GIT-HR.jpg"
import react3 from "../img/certificate/ReactJS-Tutorial-GL.jpg"
import java2 from "../img/certificate/JAVA-BASIC-IN.jpg"
import java3 from "../img/certificate/JAVA-for-beginners-IN.jpg"
import mongodbBasic from "../img/certificate/MongoDB-Atlas-ICT.jpg"
import mongodbAtlas from "../img/certificate/MongoDB-Atlas-Basic-ICT.jpg"
import codeDebugging from "../img/certificate/CODE-DEBUGGING-SSE.jpg"
import cppworkshop from "../img/certificate/C++-Cybernaut.jpg"
import internship from "../img/certificate/Internship-IN.jpg"
import inplant from "../img/certificate/Inplant-FABHOST.jpg"
import ibmhack from "../img/certificate/Hackathon-IBM.jpg"
import jpmorgan from "../img/certificate/Cybersecurity-virtual-Experience-program-Forage.jpg"
import courseraNodejs from "../img/certificate/Coursera-nodejs.jpg"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    
    firstName: "Nagaraj",
    lastName: "S",
    initials: "NS", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
      
        {
            emoji: "🥇",
            text: "Gold Badge in Java on HackerRank"
        },
        {
            emoji: '🤵🏻',
            text: 'Secretary ,Intelligent System - Tech Society'
        },
        {
            emoji: "👨🏻‍💻",
            text: "Proficient in MERN Stack"
        },
        {
            emoji: '😄',
            text: 'That\'s a great mindset to have'
        },
       
        {
            emoji: "📧",
            text: "nagaraj516700@gmail.com"
        },
        
    ],
    socials: [
     
        {
            link: "https://www.instagram.com/nagaraj_0618?igsh=YnBmeDRtMGQ5ZjZ1",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/nagaraj6618",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/nagaraj6618/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    
        


    ],
    bio: `👋 Hello! I'm Nagaraj S., Passionate Secretary at Saveetha Engineering College's Intelligent Systems in Tech Society. 🎓 I'm adept in Full Stack Development and Arduino projects, dedicated to fostering innovation and collaboration. 💡 I thrive on orchestrating workshops, hackathons, and community outreach to inspire enthusiasts and advance technology.`,
    bio1:`🏅 I hold a gold badge in Java on Hackerrank and have completed Java and React certifications on Hackerrank. Additionally, I've completed certifications in Java, JavaScript, MongoDB, Node.js, and Express through Great Learning. I've also obtained a certification in MongoDB NoSQL on the MongoDB platform. Moreover, I successfully completed a C++ workshop at Cybernaut with a 97% project completion rate.`,
    bio2:`💼 Let's innovate together! You should hire me!`,
    skills:
        {
            proficientWith: [
            { name: 'MERN Stack', level: 190 },
            { name: 'React', level: 180 },
            { name: 'Node js', level: 170 },
            { name: 'Express js', level: 195 },
            { name: 'Javascript', level: 175 },
            { name: 'Java programming', level: 190 },
            { name: 'OOP`s', level: 195 },
            { name: 'git', level: 185 },
            { name: 'github', level: 185 },
            { name: 'html', level: 185 },
            { name: 'css', level: 170 },
            
        ],
            exposedTo: ['MongoDb', 'Arduino']
        }
    ,
    hobbies: [
        {
            label: 'Coding',
            emoji: '👨🏻‍💻'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Tour App",
            live: "https://github.com/nagaraj6618/tour-app.git", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/nagaraj6618/tour-app.git", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "#",
            source: "#",
            image: mock2
        },
        {
            title: "Project 3",
            live: "#",
            source: "#",
            image: mock3
        },
        {
            title: "Project 4",
            live: "#",
            source: "#",
            image: mock4
        },
        {
            title: "Project 5",
            live: "#",
            source: "#",
            image: mock5
        }
    ],
    completetionCerificate:[
        {
            companyName:"Coursera",
            certifacteName:"Node js & Express js",
            image:courseraNodejs,
            description:"Developing Back-End Apps with Node.js and Express"
        },
        {
            companyName:"CybernautJPMorgan Chase & Co.",
            certifacteName:"Cybersecurity.",
            image:jpmorgan,
            description:"Virtual Experience Program."
        },
        {
            companyName:"Cybernaut.",
            certifacteName:"C++ Workshop.",
            image:cppworkshop,
            description:"Achieved 97% Project Completion."
        },

        {
            companyName:"Great Learning",
            certifacteName:"Express Js",
            image:express,
            description:"Understanding of Express.js framework for web applications"
        },
        {
            companyName:"Great Learning",
            certifacteName:"React Js",
            image:react3,
            description:"Proficiency in building dynamic user interfaces using React.js"
        },
        {
            companyName:"Great Learning",
            certifacteName:"GIT",
            image:git,
            description:"Version control system for managing source code"
        },
        {
            companyName:"Great Learning",
            certifacteName:"SQL",
            image:sql,
            description:"Understanding of SQL for database management"
        },
        {
            companyName:"Great Learning",
            certifacteName:"AI",
            image:AI,
            description:"Knowledge of Artificial Intelligence principles and applications"
        },
        {
            companyName:"Infosys",
            certifacteName:"Java",
            image:java2,
            description:"Proficiency in Java programming language"
        },
        {
            companyName:"Infosys",
            certifacteName:"Java",
            image:java3,
            description:"Proficiency in Java programming language"
        },
        {
            companyName:"MongoDB",
            certifacteName:"Atlas Basic",
            image:mongodbAtlas,
            description:"Understanding of MongoDB Atlas for cloud database management"
        },
        {
            companyName:"MongoDB",
            certifacteName:"MongoDB Basic",
            image:mongodbBasic,
            description:"Basic knowledge of MongoDB for NoSQL database management"
        },
    ],
   
    awardsCertificate:[
       
        {
            companyName:"Hackerrank",
            certifacteName:"React js",
            image:react1,
            description:"Understanding of React.js for building interactive user interfaces"
        },
        {
            companyName:"Hackerrank",
            certifacteName:"Node js",
            image:node,
            description:"Proficiency in server-side JavaScript using Node.js"
        },
       
        {
            companyName:"Hackerrank",
            certifacteName:"Java",
            image:java,
            description:"Completed Java basics"
        },
        {
            companyName:"Hackerrank",
            certifacteName:"CSS",
            image:css,
            description:"Understanding of Cascading Style Sheets (CSS) fundamentals"
        },
        {
            companyName:"Hackerrank",
            certifacteName:"React Js",
            image:react2,
            description:"Completed React.js course for Frontend Developer role"
        },
        {
            companyName:"Hackerrank",
            certifacteName:"Intern",
            image:seintern,
            description:"Completed Software Engineer Internship"
        },
        {
            companyName:"Saveetha School Of Engineering",
            certifacteName:"Code Debugging",
            image:codeDebugging,
            description:"Proficiency in debugging code and resolving issues"
        },
        {
            companyName:"IBM",
            certifacteName:"IBM Hackathon",
            image:ibmhack,
            description:"Participation in IBM Hackathon event"
        },
    ],
    internshipCertificate:[
        {
            companyName:"Connect Infosystem",
            certifacteName:"Web Development",
            image:internship,
            description:""
        },
        {
            companyName:"Fabhost",
            certifacteName:"Web Development",
            image:inplant,
            description:""
        },
    ]
    

}