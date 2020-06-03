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
  text-align: center;
`

const BLM = styled.p`
  width: 60%;
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
      <BLM>
        This country was built on the idea of freedom and equality. Both of
        these things are constantly threatened for the black community. The
        abuse of black <i>HUMAN BEINGS</i> from police that are supposed to{" "}
        <i>SERVE AND PROTECT</i> is inexcusable and disgusting. It's time for us
        to <i>actually</i> step up and bring about long overdue change. Now is
        our time to fight for justice and equality. Black lives matter.
      </BLM>
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
