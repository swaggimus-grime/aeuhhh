import React from 'react'
import timage from '../../res/tim.jpg';
import { InfoContainer, InfoContents, Row, IHeader, IImg } from './styles'

const Info = ({title, text}) => {
  return (
    <InfoContainer>
        <InfoContents>
            <Row>
                <IImg src={timage} />
                <IHeader>{title}</IHeader>
                <p>{text}</p>
                <q>Aeuhhh</q>
                <p>- Tim Allen</p>
            </Row>
        </InfoContents>
    </InfoContainer>
  )
}

export default Info