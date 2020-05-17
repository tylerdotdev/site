import React, { useState } from "react"
import styled from "styled-components"
import Service from "./Service"
import ProjectList from "./ProjectList"

const twitch = {
  title: "Twitch Platform Integrations",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien sem. Etiam at purus molestie, interdum elit et, feugiat urna. Curabitur consequat semper lectus.",
  number: "01",
  active: true,
  type: "twitch",
}
const web = {
  title: "Full-Stack Web Dev",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien sem. Etiam at purus molestie, interdum elit et, feugiat urna. Curabitur consequat semper lectus.",
  number: "02",
  active: false,
  type: "web",
}
const custom = {
  title: "Custom Software Solutions",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien sem. Etiam at purus molestie, interdum elit et, feugiat urna. Curabitur consequat semper lectus.",
  number: "03",
  active: false,
  type: "custom",
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 300px;
`

const Header = styled.h2`
  margin-bottom: 20px;
  margin-left: 5px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.38);

  mix-blend-mode: normal;
`

const ServiceList = styled.div``

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const Services = () => {
  const [services, setServices] = useState({ twitch, web, custom })
  const [refs, setRefs] = useState(null)

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

    refs[service.type].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <Container>
      <Header>SERVICES</Header>

      <Row>
        <ServiceList>
          <Service updateServices={updateServices} service={services.twitch} />
          <Service updateServices={updateServices} service={services.web} />
          <Service updateServices={updateServices} service={services.custom} />
        </ServiceList>
        <ProjectList setRefs={setRefs} />
      </Row>
    </Container>
  )
}

export default Services
