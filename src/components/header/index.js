import React from "react"
import styled from "styled-components"
import Social from "./social"
import ContactBtn from "./ContactBtn"

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`

const Info = styled.div`
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`

const Title = styled.span`
  color: #0abdc6;
  font-family: Orbitron;
  font-size: 3.4em;
  letter-spacing: 0.1em;
  margin-bottom: 40px;
`

const Socials = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
`

const Email = styled.span`
  font-family: Orbitron;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;

  text-align: center;
  letter-spacing: 0.25em;

  color: rgba(255, 255, 255, 0.87);

  margin-bottom: 50px;
`

const Header = ({ handleScroll }) => (
  <Container>
    <Info>
      <Title>tylerDOTdev</Title>
      <Email>tylerdotdev@gmail.com</Email>
      <ContactBtn handleScroll={handleScroll}>CONTACT</ContactBtn>

      <Socials>
        <Social link="https://www.twitter.com/tylerdotdev/" icon="twitter" />
        <Social
          link="https://www.instagram.com/tylerdotdev/"
          icon="instagram"
        />
        <Social link="https://www.twitch.tv/tylerdotdev/" icon="twitch" />
        <Social link="https://www.github.com/tylerdotdev/" icon="github" />
      </Socials>
    </Info>
  </Container>
)

export default Header
