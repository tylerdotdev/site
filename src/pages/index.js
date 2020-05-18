import React from "react"
import { scroller } from "react-scroll"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Services from "../components/services"
import Contact from "../components/contact"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => {
  const handleClick = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

  return (
    <Layout>
      <SEO title="tylerDOTdev" />
      <Container>
        <Header handleClick={handleClick} />
        <Services />
        <Contact name="contact" />
      </Container>
    </Layout>
  )
}

export default IndexPage
