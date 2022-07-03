import styled from "styled-components";
import {Link} from 'react-router-dom';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

`;

export const Background = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const HeroOverlay = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const H1 = styled.h1`
    color: white;
    font-size: 48px;
    text-align: center;
`;

export const HeroImg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const SendBtn = styled(Link)`
    border-radius: 50px;
    background-image: var(--timage);
    white-space: nowrap;
    color: white;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    display: flex;
    padding: 20px 30px;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s all ease-in-out;
        background: white;
        color: black;
    }
`;