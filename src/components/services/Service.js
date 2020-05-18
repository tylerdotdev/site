import React from "react"
import { useSpring, animated } from "react-spring"
import { Link } from "react-scroll"
import styled from "styled-components"

const Container = styled.div`
  width: 500px;
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

const Number = styled.div`
  cursor: pointer;
  margin-right: 15px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  letter-spacing: 3px;
  text-transform: uppercase;

  color: ${props => (props.active ? "#0abdc6" : "rgba(255, 255, 255, 0.37)")};

  transform: rotate(-90deg);
`

const Title = styled.span`
  margin-top: 5px;

  font-family: Orbitron;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;

  color: ${props => (props.active ? "#0abdc6" : "rgba(255, 255, 255, 0.37)")};

  cursor: pointer;
`

const Description = styled.span`
  margin-top: 20px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;

  display: flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.87);
  display: ${props => (props.active ? "block" : "none")};
`

const Service = ({ service, updateServices }) => {
  const contentProps = useSpring({
    opacity: service.active ? 1 : 0,
    height: service.active ? 100 : 0,
  })

  return (
    <Container>
      <Number active={service.active}>{service.number}</Number>
      <div>
        <Title active={service.active}>
          <Link
            onClick={() => updateServices(service)}
            to={service.type}
            smooth={true}
            duration={500}
            containerId="project-list"
          >
            {service.title}
          </Link>
        </Title>
        <animated.div style={contentProps}>
          <Description active={service.active}>
            {service.description}
          </Description>
        </animated.div>
      </div>
    </Container>
  )
}

export default Service
