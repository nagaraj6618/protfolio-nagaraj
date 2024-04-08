import React, { useEffect, useState } from 'react';
import Style from './Home.module.scss';
import me from '../../img/2-removebg-preview.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import resumePDF from "../../img/nagara-resume.pdf"
import AboutComponent from '../about/AboutComponent'
import ClockComponent from '../ClockComponent/ClockComponent';
import Contact from '../Contact/Contact';
import CertificateGallery from '../Certificate/Certificate';

export default function Home() {
   const [loaded, setLoaded] = useState(false);

   useEffect(() => {
      setLoaded(true);
   }, []);

   return (
      <React.Fragment>
         <div ></div>
         <Box
            component={'main'}
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems={'center'}
            justifyContent={'center'}
            minHeight={'calc(100vh - 175px)'}
            className={loaded ? Style.fadeIn : ''}
         >
            <Box
               id='user-image'
               className={classNames(Style.avatar, Style.shadowed)}
               alt={'image of developer'}
               style={{ background: info.gradient }}
               component={'img'}
               src={me}
               width={{ xs: '35vh', md: '30vh' }}
               height={{ xs: '35vh', md: '30vh' }}
               borderRadius={'50%'}
               p={'0.2rem'}
               mb={{ xs: '1rem', sm: 0 }}
               mr={{ xs: 0, md: '1.2rem' }}
            />
            <Box>
               <h1>
                  Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
               </h1>
               <h2>I'm {info.position}.</h2>
               <Box component={'ul'} p={'0.8rem'}>
                  {info.miniBio.map((bio, index) => (
                     <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
                  ))}
               </Box>
               <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
                  <ClockComponent />
                  {info.socials.map((social, index) => (
                     <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                  ))}
                  <a target="_blank" aria-label="Resume"
                     rel="noopener noreferrer" href={resumePDF} download="Nagaraj Resume">
                     <i className='fa fa-download' aria-hidden="true" />
                  </a>
               </Box>
            </Box>
         </Box>

         <AboutComponent />
         <CertificateGallery />
         <Contact />
      </React.Fragment>
   )
}
