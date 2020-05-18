import React from "react"
import styled from "styled-components"
import Social from "../header/social"
import Input from "./Input"
import ServiceSelection from "./ServiceSelection"
import Message from "./Message"

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 300px;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  @media (max-width: 1780px) {
    padding: 0 200px;
  }

  @media (max-width: 1550px) {
    padding: 0 100px;
  }
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

const Form = styled.form`
  width: 50%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Annie = styled.a`
  color: #0abdc6;
  text-decoration: none;
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Container id="contact" name="contact">
      <Header>GET IN CONTACT</Header>
      <Wrapper>
        <InfoContainer>
          <Info>Messages are typically responded to within 24 hours.</Info>
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

          <Info>
            Designed by{" "}
            <Annie
              href="https://www.behance.net/aannieyeund4c7"
              target="_blank"
            >
              Annie Yeung
            </Annie>
          </Info>
        </InfoContainer>

        <Form
          method="POST"
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
            onSubmit={handleSubmit}
          />
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
