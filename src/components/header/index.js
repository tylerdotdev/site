import React from "react"
import styled from "styled-components"
import Social from "./social"
import ContactBtn from "./ContactBtn"

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.span`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  color: #0abdc6;
  font-family: Orbitron;
  font-size: 3.4em;
  letter-spacing: 0.1em;

  @media (max-width: 870px) {
    font-size: 1.5em;
  }
`

const Socials = styled.div`
  position: absolute;
  width: 190px;
  top: 64%;
  left: calc(50% - 190px / 2);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 870px) {
    left: 25%;
    width: 200px;
  }
`

const Email = styled.span`
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translateX(-50%);
  font-family: Orbitron;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.25em;

  color: rgba(255, 255, 255, 0.87);

  @media (max-width: 870px) {
    font-size: 0.7em;
  }
`

const Header = () => (
  <Container>
    <Title>tylerDOTdev</Title>
    <Email>tylerdotdev@gmail.com</Email>
    <Socials>
      <Social link="https://www.twitter.com/tylerdotdev/" icon="twitter" />
      <Social link="https://www.instagram.com/tylerdotdev/" icon="instagram" />
      <Social link="https://www.twitch.tv/tylerdotdev/" icon="twitch" />
      <Social link="https://www.github.com/tylerdotdev/" icon="github" />
    </Socials>
    <ContactBtn>CONTACT</ContactBtn>
  </Container>
)

export default Header
