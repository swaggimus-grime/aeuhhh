import React from 'react'
import timage from '../../res/tim.jpg';
import { InfoContainer, InfoContents, Row, IHeader, Text, Col1, IDesc, IImg, Col2 } from './styles'

const Info = ({id, imgStart, darkText, lightText, header, description}) => {
  return (
    <InfoContainer id={id}>
        <InfoContents>
            <Row imgStart={imgStart}>
                <Col1>
                    <Text>
                        <IHeader lightText={lightText}>{header}</IHeader>
                        <IDesc darkText={darkText}>{description}</IDesc>
                    </Text>
                </Col1>
                <Col2>
                    <IImg src={timage}/>
                </Col2>
            </Row>
        </InfoContents>
    </InfoContainer>
  )
}

export default Info