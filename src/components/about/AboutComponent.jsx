import React from 'react'
import { info } from '../../info/Info'
import userImg from '../../img/IMG4-1.png'
import './About.css'
const AboutComponent = () => {
   return (
      <div className='about-container'>
         <div className='about-area'>
            <div className='about-me' >About Me</div>
            <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Who Am I?</span>
            <div className='about-content'>{info.bio}</div>
            <div className='about-content'>{info.bio1}</div>
            <div className='about-content'>{info.bio2}</div>
         </div>
         <div className='image-container'>
            
            <img src={userImg} className='user-image' alt='user'></img>
            
            <ul className='skills-container'>
    <span className='skills-name' style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Skills</span>
    {info.skills.proficientWith.map((skill, index) => (
        <li key={index} className='fade-in'>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-level">
                <div className="skill-level-bar" style={{ width: `${skill.level}px` }}></div>
                {/* <span className="level-label">{skill.level}</span> */}
            </div>
        </li>
    ))}
</ul>

            
         </div>
      </div>
   )
}

export default AboutComponent