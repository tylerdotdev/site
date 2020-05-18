import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

const Container = styled.div`
  cursor: pointer;
  width: 220px;
  height: 50px;
  border: 1px solid #2c2f3c;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(44, 47, 60, 0.4),
    inset 0 0 10px rgba(44, 47, 60, 0.4);

  color: rgba(255, 255, 255, 0.73);
  text-shadow: 1px 0 10px rgba(255, 255, 255, 0.2);

  :hover {
    color: #0abdc6;
    text-shadow: 1px 0 10px rgba(10, 189, 198, 0.2);
    border: 1px solid #0abdc6;
    box-shadow: 0px 0px 10px rgba(10, 189, 198, 0.4),
      inset 0 0 10px rgba(10, 189, 198, 0.4);
  }
`

const BtnText = styled.span`
  font-family: Orbitron;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;

  text-align: center;
  letter-spacing: 0.25em;
`

const ContactBtn = ({ handleScroll }) => {
  return (
    <Container onClick={() => handleScroll(2)}>
      <Link
        onClick={() => handleScroll(2)}
        to="contact"
        smooth={true}
        duration={500}
        containerId="contact"
      >
        <BtnText>CONTACT ME</BtnText>
      </Link>
    </Container>
  )
}

export default ContactBtn
