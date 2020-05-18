import React from "react"
import styled from "styled-components"
import Project from "./Project"

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map((project, i) => {
        return <Project key={i} project={project} />
      })}
    </>
  )
}

export default ProjectList
