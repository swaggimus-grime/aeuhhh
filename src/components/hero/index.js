import React from 'react';
import { HeroContainer, Background, HeroImg, H1, P, HeroOverlay } from './styles';
import timage from '../../res/tim.jpg';

const Hero = () => {
    return (
        <HeroContainer id='hero'>
            <Background>
                <HeroImg src={timage} alt='bg'/>
            </Background>
            <HeroOverlay>
                <H1>AEUHHH</H1>
            </HeroOverlay>
        </HeroContainer>
    );
}

export default Hero