import React, { useState, useEffect } from "react"
import ReactPageScroller from "react-page-scroller"
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
  overflow: hidden;
`

const IndexPage = () => {
  const [blockScroll, setBlockScroll] = useState(false)

  return (
    <Layout>
      <SEO title="tylerDOTdev" />
      <Container>
        <ReactPageScroller
          animationTimer={700}
          blockScrollUp={blockScroll}
          blockScrollDown={blockScroll}
        >
          <Header />
          <Services setBlockScroll={setBlockScroll} />
          <Contact />
        </ReactPageScroller>
      </Container>
    </Layout>
  )
}

export default IndexPage
