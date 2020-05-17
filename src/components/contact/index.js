import React from "react"
import styled from "styled-components"
import Social from "../header/social"
import Input from "./Input"
import ServiceSelection from "./ServiceSelection"
import Message from "./Message"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Header = styled.h2`
  margin-bottom: 20px;
  margin-left: 5px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.38);

  mix-blend-mode: normal;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Info = styled.h4`
  margin: 50px 5px;
  width: 300px;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.25em;

  color: rgba(255, 255, 255, 0.87);
`

const FollowMe = styled.h4`
  margin-top: 20px;
  margin-left: 5px;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.25em;

  color: rgba(255, 255, 255, 0.37);
`

const Socials = styled.div`
  width: 160px;
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Form = styled.div`
  width: 50%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Contact = () => {
  return (
    <Container>
      <Header>GET IN CONTACT</Header>
      <Wrapper>
        <InfoContainer>
          <Info>Blurb about contact turnaround time etc.</Info>
          <FollowMe>FOLLOW ME</FollowMe>
          <Socials>
            <Social
              link="https://www.twitter.com/tylerdotdev/"
              icon="twitter"
            />
            <Social
              link="https://www.instagram.com/tylerdotdev/"
              icon="instagram"
            />
            <Social link="https://www.twitch.tv/tylerdotdev/" icon="twitch" />
            <Social link="https://www.github.com/tylerdotdev/" icon="github" />
          </Socials>
        </InfoContainer>

        <Form>
          <Input label="Name" />
          <Input label="Email" />
          <ServiceSelection />
          <Message />
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Contact
