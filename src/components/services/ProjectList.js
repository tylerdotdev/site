import React, { useEffect } from "react"
import styled from "styled-components"
import Project from "./Project"

const Container = styled.div`
  height: 465px;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien sem. Etiam at purus molestie, interdum elit et, feugiat urna. Curabitur consequat semper lectus.",
    type: "twitch",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien sem. Etiam at purus molestie, interdum elit et, feugiat urna. Curabitur consequat semper lectus.",
    type: "",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien sem. Etiam at purus molestie, interdum elit et, feugiat urna. Curabitur consequat semper lectus.",
    type: "web",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien sem. Etiam at purus molestie, interdum elit et, feugiat urna. Curabitur consequat semper lectus.",
    type: "",
  },
  {
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien sem. Etiam at purus molestie, interdum elit et, feugiat urna. Curabitur consequat semper lectus.",
    type: "custom",
  },
  {
    title: "Project 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien sem. Etiam at purus molestie, interdum elit et, feugiat urna. Curabitur consequat semper lectus.",
    type: "",
  },
]

const ProjectList = ({ setRefs }) => {
  const refs = projects.reduce((acc, value) => {
    acc[value.type] = React.createRef()
    return acc
  }, {})

  useEffect(() => {
    setRefs(refs)
  }, [setRefs])

  return (
    <Container id="project-list">
      {projects.map((project, i) => {
        return <Project key={i} ref={refs[project.type]} project={project} />
      })}
    </Container>
  )
}

export default ProjectList
