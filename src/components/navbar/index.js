import React from "react";
import play from '../sound'
import {FaBars} from 'react-icons/fa';
import {Nav, NavContainer, TextLogo, NavMenu, NavItem, NavLink, MobileIcon} from './styles';

export default function Navbar({toggle}) {
    const toggleAndPlay = () => {toggle(); play();}
    return (
        <Nav>
            <NavContainer>
                <TextLogo onClick={play} to='/'>AEUHHH</TextLogo>
                <MobileIcon onClick={toggleAndPlay}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink onClick={play} to='hero' spy={true} smooth={true} offset={-100} duration={500}>AEUHHH</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={play} to='aeuhhh1' spy={true} smooth={true} offset={0} duration={500}>AEUHHH</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={play} to='aeuhhh2' spy={true} smooth={true} offset={0} duration={500}>AEUHHH</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={play} to='aeuhhh3' spy={true} smooth={true} offset={0} duration={500}>AEUHHH</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={play} to='staff' spy={true} smooth={true} offset={-150} duration={500}>AEUHHH</NavLink>
                    </NavItem>
                </NavMenu> 
            </NavContainer>
        </Nav>
    );
}