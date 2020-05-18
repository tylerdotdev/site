import React, { useState } from "react"
import styled from "styled-components"
import Service from "./Service"
import ProjectList from "./ProjectList"

const twitch = {
  title: "Twitch Platform Integration",
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

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 300px;
  scroll-snap-align: center;
  scroll-snap-stop: always;

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

const Services = ({ setBlockScroll }) => {
  const [services, setServices] = useState({ twitch, web, custom })
  const [updatingServices, setUpdatingServices] = useState(false)

  const updateServices = service => {
    setUpdatingServices(true)
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

    setTimeout(() => setUpdatingServices(false), 1000)
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
        <ProjectList
          setBlockScroll={setBlockScroll}
          setServices={setServices}
          services={services}
          updatingServices={updatingServices}
        />
      </Row>
    </Container>
  )
}

export default Services
