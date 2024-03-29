import styled from "styled-components";
import {Link as RLink} from 'react-router-dom'
import {Link as SLink} from 'react-scroll'

export const Nav = styled.nav`
    width: 100%;
    height: 80px;
    background-image: var(--timage);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    font-size: 1rem;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const TextLogo = styled(RLink)`
    background-image: var(--timage);
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(SLink)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: .2s all ease-in-out;

    &.active {
        border-bottom: 3px solid #ffffff;
    }

    &:hover {
        border-bottom: 3px solid #ffffff;
    }
`;