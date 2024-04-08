import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import AboutComponent from './AboutComponent';
import './About.css'

export default function About() {
    const firstName = info.firstName

    // function aboutMeText() {
    //     return <>
    //         <p><span style={{color: info.baseColor}}>{firstName}{info.lastName} $</span> cat
    //             About{firstName} </p>
    //         <p><span style={{color: info.baseColor}}>About{firstName} <span
    //             className={Style.green}>(main)</span> $ </span>
    //             {info.bio}
    //         </p>
    //     </>;
    // }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName} $</span> cd Skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>Skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency.name}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'0.1rem'} >
            <AboutComponent/>
            {/* <Terminal text={aboutMeText()}/> */}
            <Terminal  text={skillsText()}/>
            <Terminal text={miscText()}/>
            {/* <div className="testimonial">
                <div>Testimonials</div>
                <p>"Working with Nagaraj was an amazing experience. Their attention to detail and commitment to quality really made a difference."</p>
                <cite>- Nagappan G, HOD of CSE department in Saveetha Engineering College, during Levita 2021 Graduation Day as a technical team member</cite>
            </div> */}

        </Box>
    )
}