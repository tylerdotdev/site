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

const Insta = () => {
  return (
    <SVG
      width="25"
      height="25"
      viewBox="0 0 612 501"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="nonzero">
        <path d="M363.273 0H148.728C66.719 0 0 66.719 0 148.728v214.544C0 445.281 66.719 512 148.728 512h214.544C445.281 512 512 445.281 512 363.273V148.728C512 66.719 445.281 0 363.273 0zM472 363.272C472 423.225 423.225 472 363.273 472H148.728C88.775 472 40 423.225 40 363.273V148.728C40 88.775 88.775 40 148.728 40h214.544C423.225 40 472 88.775 472 148.728v214.544z" />
        <path d="M256 118c-76.094 0-138 61.906-138 138s61.906 138 138 138 138-61.906 138-138-61.906-138-138-138zm0 236c-54.037 0-98-43.963-98-98s43.963-98 98-98 98 43.963 98 98-43.963 98-98 98z" />
        <circle cx="396" cy="116" r="20" />
      </g>
    </SVG>
  )
}

export default Insta
