import React from "react"
import styled from "styled-components"

const Link = styled.a`
  text-decoration: none;
  color: #ddd;

  :hover {
    color: white;
  }
`

const Social = ({ link, icon }) => (
  <div>
    <Link href={link} rel="noopener noreferrer" target="_blank">
      <i className={`fab fa-${icon} fa-lg`}></i>
    </Link>
  </div>
)

export default Social
