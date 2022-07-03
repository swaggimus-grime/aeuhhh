import React from 'react';
import { HeroContainer, Background, HeroImg, H1, HeroOverlay, SendBtn } from './styles';
import timage from '../../res/tim.jpg';

const Hero = () => {
    return (
        <HeroContainer id='hero'>
            <Background>
                <HeroImg src={timage} alt='bg'/>
            </Background>
            <HeroOverlay>
                <H1>AEUHHH</H1>
                <SendBtn to={'./send'}>Send Aeuhhh</SendBtn>
            </HeroOverlay>
        </HeroContainer>
    );
}

export default Hero