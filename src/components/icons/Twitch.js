import React from "react"
import styled from "styled-components"

const SVG = styled.svg`
  fill: rgba(255, 255, 255, 0.7);

  :hover {
    fill: #0abdc6;
    transform: scale(1.2);
  }

  @media (max-width: 500px) {
    width: 20px;
  }
`

const Twitch = () => {
  return (
    <SVG
      width="25"
      height="25"
      viewBox="0 0 612 501"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="nonzero">
        <path d="M.8 89.067v356.138h122.645V512h66.966l66.858-66.816h100.374L491.488 311.68V0H34.229L.8 89.067zM78.837 44.48H446.88v244.885l-78.08 77.91H246.112l-66.859 66.709v-66.71H78.837V44.48z" />
        <path d="M201.547 133.59h44.586v133.546h-44.586zM324.17 133.59h44.609v133.546H324.17z" />
      </g>
    </SVG>
  )
}

export default Twitch
