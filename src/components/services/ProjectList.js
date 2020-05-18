import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Project from "./Project"

const Container = styled.div`
  height: 465px;
  padding: 20px 50px;
  padding-bottom: 320px;
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

function getRefs() {
  const refs = projects.reduce((acc, value) => {
    acc[value.type] = React.createRef()
    return acc
  }, {})

  return refs
}

function debounce(fn, threshold) {
  var timeout
  return function () {
    clearTimeout(timeout)
    var args = arguments
    var _this = this
    timeout = setTimeout(function () {
      fn.apply(_this, args)
    }, threshold || 100)
  }
}

const ProjectList = ({
  setBlockScroll,
  services,
  setServices,
  updatingServices,
}) => {
  const [refs, setRefs] = useState(getRefs())
  const [serviceType, setServiceType] = useState({})

  useEffect(() => {
    setServiceType({
      pos: refs.twitch.current.getBoundingClientRect.top,
      type: "twitch",
    })
  }, [])

  const mouseEnter = e => {
    e.preventDefault()
    setBlockScroll(true)
  }

  const mouseLeave = e => {
    e.preventDefault()
    setBlockScroll(false)
  }

  const scrollHandler = e => {
    if (!updatingServices) {
      debounce(setRefs(getRefs()), 20)

      const twitch = refs.twitch.current.getBoundingClientRect().top
      const web = refs.web.current.getBoundingClientRect().top
      const custom = refs.custom.current.getBoundingClientRect().top
      const container = containerRef.current.getBoundingClientRect().top + 20

      if (
        (twitch >= container || twitch < container - 20) &&
        web > container &&
        custom > container
      ) {
        setServiceType({
          ...serviceType,
          type: "twitch",
        })
      } else if (web <= container && custom > container) {
        setServiceType({
          ...serviceType,
          type: "web",
        })
      } else if (custom <= container) {
        setServiceType({
          ...serviceType,
          type: "custom",
        })
      }

      switch (serviceType.type) {
        case "twitch":
          setServices({
            twitch: {
              ...services.twitch,
              active: true,
            },
            web: {
              ...services.web,
              active: false,
            },
            custom: {
              ...services.custom,
              active: false,
            },
          })
          break
        case "web":
          setServices({
            twitch: {
              ...services.twitch,
              active: false,
            },
            web: {
              ...services.web,
              active: true,
            },
            custom: {
              ...services.custom,
              active: false,
            },
          })
          break
        case "custom":
          setServices({
            twitch: {
              ...services.twitch,
              active: false,
            },
            web: {
              ...services.web,
              active: false,
            },
            custom: {
              ...services.custom,
              active: true,
            },
          })
          break
        default:
          break
      }
    }
  }

  const containerRef = React.createRef()
  return (
    <Container
      ref={containerRef}
      id="project-list"
      onScroll={scrollHandler}
      onMouseEnter={e => mouseEnter(e)}
      onMouseLeave={e => mouseLeave(e)}
    >
      {projects.map((project, i) => {
        return <Project key={i} ref={refs[project.type]} project={project} />
      })}
    </Container>
  )
}

export default ProjectList
