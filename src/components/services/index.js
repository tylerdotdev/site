import React, { useState } from "react"
import styled from "styled-components"
import { animated as a, useSpring } from "react-spring"
import Service from "./Service"
import ProjectList from "./ProjectList"
import projectData from "../../projects"

const twitch = {
  title: "Twitch Platform Integration",
  description:
    "Elevate your stream with Twitch integrated extensions, bots, physical devices, and more.",
  number: "01",
  active: true,
  type: "twitch",
}
const web = {
  title: "Full-Stack Web Dev",
  description:
    "Whether you need a simple site or a full-blown web app, you're covered with over 5 years of experience building responsive, mobile friendly products.",
  number: "02",
  active: false,
  type: "web",
}
const custom = {
  title: "Custom Software Solutions",
  description: "Native desktop apps, IoT devices, and more.",
  number: "03",
  active: false,
  type: "custom",
}

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 300px;

  @media (max-width: 1780px) {
    padding: 0 200px;
  }

  @media (max-width: 1550px) {
    padding: 0 100px;
  }
`

const Header = styled.h2`
  margin-bottom: 20px;
  margin-left: 5px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.38);

  mix-blend-mode: normal;
`

const ServiceList = styled.div``

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const Projects = styled.div`
  height: 465px;
  margin-top: 10px;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Services = () => {
  const [services, setServices] = useState({ twitch, web, custom })

  const updateServices = service => {
    switch (service.number) {
      case "01":
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
      case "02":
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
      case "03":
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

  const config = {
    duration: 400,
  }

  const twitchAnim = useSpring({
    config,
    opacity: services.twitch.active ? 1 : 0,
    // transform: services.twitch.active ? "scaleY(1)" : "scaleY(0)",
  })
  const webAnim = useSpring({
    config,
    opacity: services.web.active ? 1 : 0,
    // transform: services.web.active ? "scaleY(1)" : "scaleY(0)",
  })
  const customAnim = useSpring({
    config,
    opacity: services.custom.active ? 1 : 0,
    // transform: services.custom.active ? "scaleY(1)" : "scaleY(0)",
  })

  return (
    <Container>
      <Header>SERVICES</Header>

      <Row>
        <ServiceList>
          <Service updateServices={updateServices} service={services.twitch} />
          <Service updateServices={updateServices} service={services.web} />
          <Service updateServices={updateServices} service={services.custom} />
        </ServiceList>
        {services.twitch.active ? (
          <a.div style={twitchAnim}>
            <Projects>
              <ProjectList projects={projectData.twitch} />
            </Projects>
          </a.div>
        ) : null}

        {services.web.active ? (
          <a.div style={webAnim}>
            <Projects>
              <ProjectList projects={projectData.web} />
            </Projects>
          </a.div>
        ) : null}

        {services.custom.active ? (
          <a.div style={customAnim}>
            <Projects>
              <ProjectList projects={projectData.custom} />
            </Projects>
          </a.div>
        ) : null}
      </Row>
    </Container>
  )
}

export default Services
