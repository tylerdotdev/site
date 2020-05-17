import React from "react"
import styled from "styled-components"

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  width: 220px;
  height: 50px;
  top: 55%;
  border: 1px solid #2c2f3c;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(44, 47, 60, 0.4),
    inset 0 0 10px rgba(44, 47, 60, 0.4);
`

const BtnText = styled.span`
  font-family: Orbitron;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;

  text-align: center;
  letter-spacing: 0.25em;

  color: rgba(255, 255, 255, 0.73);
  text-shadow: 1px 0 10px rgba(255, 255, 255, 0.2);
`

const ContactBtn = () => {
  return (
    <Container>
      <BtnText>CONTACT ME</BtnText>
    </Container>
  )
}

export default ContactBtn
