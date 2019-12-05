import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Particles from "react-particles-js"
import config from "../../particlesjs-config"

const Header = styled.div`
  background: #1e1e1e;
  height: 100vh;
`

const Title = styled.span`
  position: absolute;
  top: 50%;
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

const SubText = styled.span`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  color: #ccc;
  font-family: Orbitron;
  font-size: 1em;
  letter-spacing: 0.2em;

  @media (max-width: 870px) {
    font-size: 0.7em;
  }
`

const StyledParticles = styled(Particles)`
  height: 100%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header>
      <Title>tylerDOTdev</Title>
      <SubText>Under Construction...</SubText>
      <StyledParticles params={config} />
    </Header>
  </Layout>
)

export default IndexPage
