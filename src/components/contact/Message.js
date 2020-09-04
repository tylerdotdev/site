import React from "react"
import styled from "styled-components"

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

  @media (max-width: 500px) {
    width: 250px;
  }
`

const Message = ({ fields, field, setFields }) => {
  const handleChange = e => {
    e.preventDefault()

    setFields({
      ...fields,
      message: e.target.value,
    })
  }

  return (
    <Container>
      <Label>MESSAGE</Label>
      <Text
        name="message"
        value={field}
        placeholder="Your Message"
        onChange={handleChange}
      />
    </Container>
  )
}

export default Message
