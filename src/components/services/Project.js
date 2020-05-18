import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 498px;
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

function useCombinedRefs(...refs) {
  const targetRef = React.useRef()

  React.useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return

      if (typeof ref === "function") {
        ref(targetRef.current)
      } else {
        ref.current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}

const Project = React.forwardRef(({ project }, ref) => {
  const innerRef = React.useRef(null)
  const combinedRef = useCombinedRefs(ref, innerRef)

  return (
    <div name={project.type} ref={combinedRef}>
      <Container id={project.type}>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
      </Container>
    </div>
  )
})

export default Project
