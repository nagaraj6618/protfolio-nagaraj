import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material"; // Import Drawer and related components from Material-UI
import { Menu as MenuIcon } from '@mui/icons-material'; // Import MenuIcon from Material-UI
import { info } from '../info/Info';
const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Project',
        to: '/project',
        active: 'project'
    },
    {
        name: 'Contact',
        to: '/contact',
        active: 'contact'
    },
    {
        name: 'Certificate',
        to: '/certificate',
        active: 'certficate'
    },
    {
        name: 'Message',
        to: '/message',
        active: '/message'
    },
    {
        name: 'Admin',
        to: '/admin/login',
        active: 'admin pannel'
    }
];


export default function Navbar({ darkMode, handleClick }) {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
    const [openDrawer, setOpenDrawer] = useState(false); // State to control the drawer
  
    
    return (
        <Box component={'nav'} width={'100%'} >
            <Box component={'ul'} display={{ xs: 'none', md: 'flex' }} justifyContent={'center'} alignItems={'center'} gap={{ xs: '2rem', md: '4rem' }} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active} sx={{ borderImageSource: info.gradient }}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </Box>

            {/* Mobile Navbar */}
            <Box display={{ xs: 'flex', md: 'none' }} justifyContent={"flex-start"} >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={() => setOpenDrawer(true)}
                >
                    <MenuIcon />
                    
                    
              
                </IconButton>
            </Box>

            {/* Drawer for mobile */}
            <Drawer
              
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {links.map((link, index) => (
                        <ListItem button key={index} component={Link} to={link.to} onClick={() => { setActive(link.active); setOpenDrawer(false); }}>
                            <ListItemText primary={link.name} />
                        </ListItem>

                    ))}
                   <ListItem  onClick={() => {  setOpenDrawer(false); }}> <ListItemText primary={`Theme`} onClick={handleClick} /><Toggler darkMode={darkMode} handleClick={handleClick} /></ListItem> 
                </List>
            </Drawer>
        </Box>
    );
}
