import React, { useState } from "react"
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
`

const IndexPage = () => {
  const [page, setPage] = useState(null)

  const handleScroll = num => {
    setPage(num)
  }

  return (
    <Layout>
      <SEO title="tylerDOTdev" />
      <ReactPageScroller
        animationTimer={700}
        pageOnChange={handleScroll}
        customPageNumber={page}
      >
        <Header handleScroll={handleScroll} />
        <Services />
        <Contact />
      </ReactPageScroller>
    </Layout>
  )
}

export default IndexPage
