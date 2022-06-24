import React from 'react';
import timage from '../../res/tim.jpg';
import { StaffContainer, StaffArea, StaffCard, StaffH1, StaffPFP, StaffName, StaffTitle } from './styles';

const Staff = () => {
  return (
    <StaffContainer id='staff'>
        <StaffH1>Aeuhhh</StaffH1>
        <StaffArea>
            <StaffCard>
                <StaffPFP src={timage}/>
                <StaffName>Aeuhhh Aeuhhh</StaffName>
                <StaffTitle>Aeuhhh CEO</StaffTitle>
            </StaffCard>
            <StaffCard>
                <StaffPFP src={timage}/>
                <StaffName>Aeuhhh Aeuhhh</StaffName>
                <StaffTitle>VP of Aeuhhh</StaffTitle>
            </StaffCard>
            <StaffCard>
                <StaffPFP src={timage}/>
                <StaffName>Aeuhhh Aeuhhh</StaffName>
                <StaffTitle>Aeuhhh Director</StaffTitle>
            </StaffCard>
        </StaffArea>
    </StaffContainer>
  )
}

export default Staff;