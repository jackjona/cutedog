import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#000000`,
    }}
  >
    <div
      style={{
        background: `rgb(238,174,202)`,
        background: `radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(170,148,233,1) 100%)`,
        margin: `0 auto 2px`,
        padding: `7rem 1.5rem`,
      }}
    >
      <center>
        <h1 style={{ margin: 0, color: `white` }}>
          {siteTitle}
        </h1>
      <br></br>
      <br></br>
      <h4><a href="/"> Return Home</a></h4>
      </center>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
