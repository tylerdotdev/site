import React from "react"
import styled from "styled-components"
import Twitter from "../icons/Twitter"
import Insta from "../icons/Insta"
import Twitch from "../icons/Twitch"
import GitHub from "../icons/GitHub"

const Link = styled.a`
  text-decoration: none;
  color: #ddd;

  :hover {
    color: white;
  }
`

const getIcon = icon => {
  switch (icon) {
    case "twitter":
      return <Twitter fill="#FFF" />
    case "instagram":
      return <Insta fill="#FFF" />
    case "twitch":
      return <Twitch fill="#FFF" />
    case "github":
      return <GitHub fill="#FFF" />
  }
}

const Social = ({ link, icon }) => (
  <div>
    <Link href={link} rel="noopener noreferrer" target="_blank">
      {getIcon(icon)}
    </Link>
  </div>
)

export default Social
