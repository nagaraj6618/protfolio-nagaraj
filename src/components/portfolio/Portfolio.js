import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Grid } from "@mui/material";
import { info } from "../../info/Info";
import './portfolio.css'
export default function Portfolio() {
    return (
        // <Box>
        //     <Grid container display={'flex'} justifyContent={'center'}>
        //         {info.portfolio.map((project, index) => (
        //            <Grid item xs={12} md={6} key={index}>
        //               <div className='stopwatch-image'> <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
        //               </div>
        //            </Grid>
        //         ))}
        //     </Grid>
        // </Box>
        <div>
            <Grid container display={'flex'} justifyContent={'center'}>
            {info.portfolio.map((project, index) => (
                
                    <div  key={index}> <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                    </div>
               
            ))}
            </Grid>
        </div>
    );
};