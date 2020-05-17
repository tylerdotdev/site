import React from "react"
import styled from "styled-components"
import Checkbox from "./Checkbox"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const Section = styled.h4`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.25em;

  color: rgba(255, 255, 255, 0.87);
`

const ServiceSelection = () => {
  return (
    <Container>
      <Section>SERVICE INQUIRIES</Section>
      <Checkbox label="Twitch Platform Integration" />
      <Checkbox label="Full-Stack Web Dev" />
      <Checkbox label="Custom Software Solutions" />
    </Container>
  )
}

export default ServiceSelection
