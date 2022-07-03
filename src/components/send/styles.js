import styled from "styled-components";
import {Link} from "react-router-dom";

export const SendContainer = styled.div`
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SendArea = styled.form`
    border-color: white;
    border-width: 5px;
    border-style: solid;
    padding: 5px;
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-image: var(--timage);
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const SendHeader = styled.h1`
    color: white;
    font-size: 1.5rem;
`;

export const SendInput = styled.input`
    width: 300px;
    border-radius: 10px;
    height: 40px;
    border-style: none;
    text-indent: 5px;
`;

export const SendBtn = styled.button`
    width: 60px;
    height: 40px;
    border-radius: 20px;
    background-image: var(--timage);
    color: white;
    transition: 0.2s all ease-in-out;

    &:hover {
        color: black;
        background: white;
        transition: 0.2s all ease-in-out;
    }
`;

export const HomeBtn = styled(Link)`
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