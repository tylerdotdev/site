import React from "react"
import styled from "styled-components"

const SVG = styled.svg`
  transform: scale(0.8);
`

const GitHub = () => {
  return (
    <SVG width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity=".37"
        d="M18.334 18.133H2.466V2.267H10.4V0H2.467A2.266 2.266 0 00.2 2.267v15.866A2.266 2.266 0 002.467 20.4h15.867a2.273 2.273 0 002.266-2.267V10.2h-2.267v7.933zM12.667 0v2.267h4.068l-11.14 11.14 1.598 1.598 11.14-11.14v4.068H20.6V0h-7.933z"
        fill="#F2F2F2"
      />
    </SVG>
  )
}

export default GitHub
