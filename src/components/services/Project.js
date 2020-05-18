import React from "react"
import styled from "styled-components"
import External from "../icons/External"

const Container = styled.div`
  width: 498px;
  min-height: 135px;
  padding: 20px;
  margin-top: 10px;
  background: #2c2f3c;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  :hover {
    background: #151720;
    border: 1px solid #0abdc6;
    box-sizing: border-box;
    border-radius: 2px;
    transform: scale(1.2);
  }
`

const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.87);
`

const Description = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;

  display: flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.87);
`

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Project = ({ project }) => {
  return (
    <Container id={project.type}>
      <a style={{ textDecoration: "none" }} href={project.link} target="_blank">
        <Head>
          <Title>{project.title}</Title>
          <External />
        </Head>
        <Description>{project.description}</Description>
      </a>
    </Container>
  )
}

export default Project
