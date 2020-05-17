import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Services from "../components/services"
import Contact from "../components/contact"

const Container = styled.div`
  width: 100%;
  padding: 0 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="tylerDOTdev" />
    <Container>
      <Header />
      <Services />
      <Contact />
    </Container>
  </Layout>
)

export default IndexPage
