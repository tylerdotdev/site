import React, { useState } from "react"
import styled from "styled-components"
import Social from "../header/social"
import Input from "./Input"
import ServiceSelection from "./ServiceSelection"
import Message from "./Message"
import SubmitBtn from "./SubmitBtn"

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

  @media (max-width: 500px) {
    padding: 0 80px;
    align-items: center;
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

  @media (max-width: 500px) {
    margin-left: 0;
  }
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

  @media (max-width: 500px) {
    display: none;
  }
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

  @media (max-width: 500px) {
    width: 250px;
  }
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
  const [fields, setFields] = useState({
    name: "",
    email: "",
    services: "",
    message: "",
  })

  const handleSubmit = e => {
    e.preventDefault()
    alert(
      `${fields.name}, ${fields.email},${fields.services},${fields.message},`
    )
    const form = e.target.current
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...fields,
      }),
    })
      .then(() => alert("Message sent!"))
      .catch(error => alert(error))

    setFields({
      name: "",
      email: "",
      services: "",
      message: "",
    })
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
            Design by{" "}
            <Annie
              href="https://www.behance.net/aannieyeund4c7"
              target="_blank"
            >
              Annie Yeung
            </Annie>
          </Info>
        </InfoContainer>

        <Form>
          <form
            method="POST"
            name="contact"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="bot-field" />
            <input
              type="hidden"
              name="form-name"
              value="contact"
              onSubmit={handleSubmit}
            />
            <Input
              name="name"
              label="Name"
              field={fields.name}
              fields={fields}
              setFields={setFields}
            />
            <Input
              name="email"
              label="Email"
              field={fields.email}
              fields={fields}
              setFields={setFields}
            />
            <ServiceSelection field={fields.services} setFields={setFields} />
            <Message
              fields={fields}
              field={fields.message}
              setFields={setFields}
            />
            <SubmitBtn />
          </form>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Contact
