import styled from "styled-components";

export const InfoContainer = styled.div`
    color: white;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoContents = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    justify-content: center;
    max-width: 1100px;
    padding: 0 24px;
    margin-left: auto;
    margin-right: auto;
`;

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col2' 'col1'` : `'col1' 'col2'`};
    }
`;

export const Col1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Col2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const Text = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const IHeader = styled.header`
    line-height: 1.1;
    font-size: 48px;
    margin-bottom: 24px;
    font-weight: 600;
    color: ${({lightText}) => lightText ? '#f7f8fa' : '#07080a'};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const IDesc = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => darkText ? '#07080a' : '#f7f8fa'};
`;



export const IImg = styled.img`
    display: flex;
    max-width: 500px;
    width: 100%;
    height: 500px;
    margin: 0 0 10px 0;
    padding-right: 0;
`;