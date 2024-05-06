import self from "../img/2-removebg-preview.png"
import mock1 from "../img/tour.png"
import mock2 from "../img/weather.png"
import mock3 from "../img/mock2.png"
import mock4 from "../img/Todo.png"

import Portfolio from "../img/portfolio.png"
import calc from '../img/calc.png'
import book from '../img/book.png'
import stopwatch from "../img/stopwatch.png"
import ageCalc from "../img/age-calc.png"
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
import courseraReactjs from "../img/certificate/react-coursera.jpg"
import courseraHtmlCssJs from "../img/certificate/html-css-js-coursera.jpg"
import rwr from '../img/certificate/rwr.jpg';
import lcu from '../img/certificate/LCU.jpg'
import quizApp from '../img/quiz-app.png'
import examSlotBook from '../img/exam-slot-book.png'
import teachnookProject from '../img/certificate/teachnook-project-completion_page.jpg'
import teachnookCourse from '../img/certificate/teachnook-web-development-course_page.jpg'
import btCar from '../img/bt-car.jpeg'
import bionicDog from '../img/wavego-dog.jpg'
import waterLevelManagement from '../img/water-management-level.jpg'
import shoppingCart from '../img/shopping-cart.png'
import companyAssessmentPost from '../img/post-assessment.png'
import thirdEye from '../img/third-eye.png'

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
            live: "https://tour-app-frontend-pi.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/nagaraj6618/tour-app.git", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Exam Booking System",
            live: "https://learner-two.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/nagaraj6618/learner-fe", // this should be a link to the **repository** of the project, where the code is hosted.
            image: examSlotBook
        },
        {
            title: "Login,Register & Post",
            live: "https://company-website-pi.vercel.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/nagaraj6618/company-assessment.git", // this should be a link to the **repository** of the project, where the code is hosted.
            image: companyAssessmentPost
        },
        {
            title: "Quiz App",
            live: "https://quiz-app-nu-dusky.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/nagaraj6618/quiz-app", // this should be a link to the **repository** of the project, where the code is hosted.
            image: quizApp
        },
        {
            title: "Weather",
            live: "https://weather-app-react-steel-sigma.vercel.app/",
            source: "https://github.com/nagaraj6618/weather-app-react",
            image: mock2
        },
        {
            title: "Player",
            live: "#",
            source: "https://github.com/nagaraj6618/player.git",
            image: mock3
        },
        {
            title: "Todo List",
            live: "https://todo-app-sigma-three-45.vercel.app/",
            source: "https://github.com/nagaraj6618/todo-fe.git",
            image: mock4
        },
        {
            title: "Portfolio ",
            live: "https://portfolio-nagaraj.vercel.app/",
            source: "https://github.com/nagaraj6618/portfolio.git",
            image: Portfolio
        },
        {
            title: "Age Calculator",
            live: "https://age-calculator-react-app.vercel.app/",
            source: "https://github.com/nagaraj6618/age-calculator-react-app.git",
            image: ageCalc
        },
        {
            title: "Book Review - Backend",
            live: "#",
            source: "https://github.com/nagaraj6618/expressBookReviews.git",
            image: book
        },
        {
            title: "Shopping Cart",
            live: "https://shoppingcart-six-zeta.vercel.app/",
            source: "https://github.com/nagaraj6618/shoppingCart-fe.git",
            image: shoppingCart
        },
        {
            title: "Calculator",
            live: "https://calculator-snowy-six.vercel.app/",
            source: "https://github.com/nagaraj6618/calculator.git",
            image: calc
        },
        {
            title: "Stopwatch",
            live: "https://stopwatch-react-app-delta.vercel.app/",
            source: "https://github.com/nagaraj6618/stopwatch-react-app.git",
            image: stopwatch
        },
        {
            title: "ThirdEye Technologies",
            live: "https://thirdeye-technologies.vercel.app/",
            source: "https://github.com/nagaraj6618/thirdeye-tech.git",
            image: thirdEye
        },
        {
            title: "Mobile controlled Car",
            live: "#",
            source: "https://github.com/arduino-projects-organization/bt-car-arduino.git",
            image: btCar
        },
       
        {
            title: "Water Level Management - IOT",
            live: "#",
            source: "https://github.com/arduino-projects-organization/water-level-monitor-arduino.git",
            image: waterLevelManagement
        },
        {
            title: "Bionic Dog",
            live: "#",
            source: "https://www.waveshare.com/wavego.htm",
            image: bionicDog
        },
    ],
    completetionCerificate:[
        {
            companyName:"Coursera",
            certifacteName:"Node js & Express js",
            image:courseraNodejs,
            description:"Developing Back-End Apps with Node.js and Express"
        },
        {
            companyName:"Coursera",
            certifacteName:"React js",
            image:courseraReactjs,
            description:"Developing front-end Apps with React.js"
        },
        {
            companyName:"Coursera",
            certifacteName:"Html,CSS and JS",
            image:courseraHtmlCssJs,
            description:"HTML,CSS and JS for Web developers"
        },
        {
            companyName:"Teachnook",
            certifacteName:"Web Development",
            image:teachnookCourse,
            description:"Virtual Internship Program."
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
            companyName:"Madras Institute of Technology",
            certifacteName:"Rapid Web Race",
            image:rwr,
            description:"2nd Place In Rapid Web Race"
        },
        {
            companyName:"Madras Institute of Technology",
            certifacteName:"LCU",
            image:lcu,
            description:"2nd Place In Learn Code Unleash"
        },
       
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
            companyName:"Teachnook",
            certifacteName:"Web Development",
            image:teachnookProject,
            description:"Achieved 100% Project Completion."
        },
        {
            companyName:"Connect Infosystem",
            certifacteName:"Web Development",
            image:internship,
            description:"Developed company website"
        },
        {
            companyName:"Fabhost",
            certifacteName:"Web Development",
            image:inplant,
            description:"Learned the UI tools and backend framework"
        },
    ]
    

}