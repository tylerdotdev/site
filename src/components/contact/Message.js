import React from "react"
import styled from "styled-components"
import SubmitBtn from "./SubmitBtn"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
`

const Label = styled.h4`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.25em;

  color: rgba(255, 255, 255, 0.87);
`

const Text = styled.textarea`
  width: 540px;
  background: transparent;
  border: none;
  resize: none;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: rgba(255, 255, 255, 0.87);

  mix-blend-mode: normal;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.37);
  }
`

const Message = () => {
  return (
    <Container>
      <Label>MESSAGE</Label>
      <Text for="contact" placeholder="Your Message" />
      <SubmitBtn />
    </Container>
  )
}

export default Message
