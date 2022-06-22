import React from "react";
import play from '../sound'
import {FaBars} from 'react-icons/fa';
import {Nav, NavContainer, TextLogo, NavMenu, NavItem, NavLinks, MobileIcon} from './styles';

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
                        <NavLinks onClick={play} to='about'>AEUHHH</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={play} to='/'>AEUHHH</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={play} to='/'>AEUHHH</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={play} to='/'>AEUHHH</NavLinks>
                    </NavItem>
                </NavMenu> 
            </NavContainer>
        </Nav>
    );
}