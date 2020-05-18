import React from "react"
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
