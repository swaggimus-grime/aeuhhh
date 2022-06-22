import styled from "styled-components";

export const InfoContainer = styled.div`
    color: white;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoContents = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    z-index: 1;
    height: 860px;
    width: 100%;
    justify-content: center;
`;

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
`;

export const IHeader = styled.header`
    display: flex;
    text-align: center;
    font-size: 30px;
`;

export const IImg = styled.img`
    display: flex;
    width: 500px;
    height: 500px;
`;