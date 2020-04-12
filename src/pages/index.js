import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"

const Header = styled.div`
  height: 100vh;
`

const Title = styled.span`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  color: #0abdc6;
  font-family: Orbitron;
  font-size: 2.5em;
  letter-spacing: 0.2em;

  @media (max-width: 870px) {
    font-size: 1.5em;
  }
`

const Socials = styled.div`
  position: absolute;
  width: 300px;
  top: 52%;
  left: 42%;
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
  top: 57%;
  left: 50%;
  transform: translateX(-50%);
  color: #ccc;
  font-size: 1em;
  letter-spacing: 0.2em;

  @media (max-width: 870px) {
    font-size: 0.7em;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header>
      <Title>tylerDOTdev</Title>
      <Socials>
        <Social link="https://www.twitter.com/tylerdotdev/" icon="twitter" />
        <Social
          link="https://www.instagram.com/tylerdotdev/"
          icon="instagram"
        />
        <Social link="https://www.twitch.tv/tylerdotdev/" icon="twitch" />
        <Social link="https://www.github.com/tylerdotdev/" icon="github" />
      </Socials>
      <Email>tylerdotdev@gmail.com</Email>
    </Header>
  </Layout>
)

export default IndexPage
