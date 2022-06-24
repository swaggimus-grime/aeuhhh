import styled from "styled-components";

export const StaffContainer = styled.div`
    height: 800px;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const StaffArea = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 50px;
    padding: 0 50px;
    max-width: 1000px;
`;



export const StaffCard = styled.div`
    display: grid;
    align-items: center;
    border-radius: 10px;
    max-height: 400px;
    padding: 30px;
    background-image: var(--timage);
    background-size: 500px 500px;
    background-repeat: no-repeat;
    transition: 0.2s all ease-in-out;
`;

export const StaffPFP = styled.img`
    height: 200px;
    width: 200px;
`;

export const StaffH1 = styled.h1`
    font-size: 3rem;
    color: white;
    text-align: center;
`;

export const StaffName = styled.h2`
    font-size: 2rem;
    color: white;
    text-align: center;
    margin-bottom: 12px;
`;

export const StaffTitle = styled.h3`
    font-size: 1.5rem;
    color: white;
    text-align: center;
`;