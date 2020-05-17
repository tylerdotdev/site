import React, { useState, useEffect } from "react"
import ReactPageScroller from "react-page-scroller"
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

const IndexPage = () => {
  const [blockScroll, setBlockScroll] = useState(false)

  useEffect(() => {
    console.log(blockScroll)
  }, [blockScroll])

  return (
    <Layout>
      <SEO title="tylerDOTdev" />
      <>
        <ReactPageScroller
          animationTimer={600}
          containerWidth="100vw"
          containerHeight="100vh"
          blockScrollUp={blockScroll}
          blockScrollDown={blockScroll}
        >
          <Header />
          <Services setBlockScroll={setBlockScroll} />
          <Contact />
        </ReactPageScroller>
      </>
    </Layout>
  )
}

export default IndexPage
