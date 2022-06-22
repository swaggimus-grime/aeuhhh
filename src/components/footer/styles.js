import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.div`
    padding: 80px 60px;
    background-image: var(--timage);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;
`;

export const FLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;

