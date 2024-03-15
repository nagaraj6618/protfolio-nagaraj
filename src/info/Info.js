import self from "../img/IMAGES-1.png"
import mock1 from "../img/mock2.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock2.png"
import mock4 from "../img/mock2.png"
import mock5 from "../img/mock2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    
    firstName: "Nagaraj",
    lastName: "S",
    initials: "NS", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
      
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
    
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: `👋 Hello! I'm Nagaraj S., Passionate Secretary at Saveetha Engineering College's Intelligent Systems in Tech Society. 🎓 I'm adept in Full Stack Development and Arduino projects, dedicated to fostering innovation and collaboration. 💡 I thrive on orchestrating workshops, hackathons, and community outreach to inspire enthusiasts and advance technology.`,
    bio1:`🏅 I hold a gold badge in Java on Hackerrank and have completed Java and React certifications on Hackerrank. Additionally, I've completed certifications in Java, JavaScript, MongoDB, Node.js, and Express through Great Learning. I've also obtained a certification in MongoDB NoSQL on the MongoDB platform. Moreover, I successfully completed a C++ workshop at Cybernaut with a 97% project completion rate.`,
    bio2:`💼 Let's innovate together! You should hire me!`,
    skills:
        {
            proficientWith: [{ name: 'Javascript', level: 162 },
            { name: 'React', level: 170 },
            { name: 'Node js', level: 175 },
            { name: 'Express js', level: 165 },
            { name: 'Java programming', level: 161 },
            { name: 'OOP`s', level: 171 },
            { name: 'git', level: 185 },
            { name: 'github', level: 180 },
            { name: 'html', level: 190 },
            { name: 'css', level: 188 }],
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
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
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
    cerificate:[
        {
            companyName:"Hackerrank",
            certifacteName:"React Js",
            image:mock2,
            description:"sjcscdsdcdsc"
        },
        {
            companyName:"Hackerrank",
            certifacteName:"React Js",
            image:mock2,
            description:"sjcscdsdcdsc"
        },
        {
            companyName:"Hackerrank",
            certifacteName:"React Js",
            image:mock2,
            description:"sjcscdsdcdsc"
        },
        {
            companyName:"Hackerrank",
            certifacteName:"React Js",
            image:mock2,
            description:"sjcscdsdcdsc"
        },
]
}