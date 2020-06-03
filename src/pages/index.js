import React, { useState } from "react"
import styled from "styled-components"
import ReactPageScroller from "react-page-scroller"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Services from "../components/services"
import Contact from "../components/contact"

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  color: white;
`

const Link = styled.a`
  text-decoration: none;
`

const IndexPage = () => {
  const [page, setPage] = useState(null)

  const handleScroll = num => {
    setPage(num)
  }

  return (
    <Container>
      <h1>#BlackLivesMatter</h1>
      <p>
        Find out how you can help{" "}
        <Link href="https://blacklivesmatters.carrd.co/">here</Link>.
      </p>
    </Container>
    // <Layout>
    //   <SEO title="tylerDOTdev" />
    //   <ReactPageScroller
    //     animationTimer={700}
    //     pageOnChange={handleScroll}
    //     customPageNumber={page}
    //   >
    //     <Header handleScroll={handleScroll} />
    //     <Services />
    //     <Contact />
    //   </ReactPageScroller>
    // </Layout>
  )
}

export default IndexPage
