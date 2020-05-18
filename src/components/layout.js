import React from "react"
import PropTypes from "prop-types"

import Particles from "react-particles-js"
import config from "../../particlesjs-config"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
          fontFamily: "Orbitron",
        }}
      >
        <Particles
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            zIndex: -1,
          }}
          params={config}
        />
        <main>{children}</main>
        <form
          method="POST"
          name="contact"
          action="/"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          hidden
        >
          <input name="name" type="text" />
          <input name="email" type="text" />
          <input name="twitch" type="checkbox" />
          <input name="web" type="checkbox" />
          <input name="custom" type="checkbox" />
          <textarea name="message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
