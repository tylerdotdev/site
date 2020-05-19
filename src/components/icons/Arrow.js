import React from "react"
import styled from "styled-components"

const SVG = styled.svg`
  transform: scale(0.6);
  fill: #0abdc6;
`

const Arrow = () => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201.611 201.611">
      <path d="M100.809 155.39L0 51.596l5.536-5.375 95.273 98.096 95.276-98.096 5.526 5.375z" />
    </SVG>
  )
}

export default Arrow
