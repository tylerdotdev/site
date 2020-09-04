import React from "react"
import styled from "styled-components"
import Social from "./social"

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const Info = styled.div`
  /* height: 270px; */
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

  @media (max-width: 768px) {
    font-size: 2.8em;
  }

  @media (max-width: 500px) {
    font-size: 2em;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    margin-bottom: 35px;
  }
`

// const Down = styled.div`
//   position: absolute;
//   top: 73%;
//   width: 100px;
//   cursor: pointer;
//   opacity: 0.9;

//   animation: pulse 2.5s infinite;

//   @keyframes pulse {
//     0% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(30px);
//     }
//     100% {
//       transform: translateY(0);
//     }
//   }
// `

const Header = () => (
  <Container>
    <Info>
      <Title>tylerDOTdev</Title>
      <Email>tylerdotdev@gmail.com</Email>
      {/* <ContactBtn handleScroll={handleScroll}>CONTACT</ContactBtn> */}

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
    {/* 
    <Down onClick={() => handleScroll(1)}>
      <Arrow />
    </Down> */}
  </Container>
)

export default Header
