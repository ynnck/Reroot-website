import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      position: "fixed",
      width: "90vw",
      marginLeft: "5vw",
      backgroundColor: "white",
    }}
  >
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid lightgrey",
        justifyContent: "space-between",
        alignItems: "baseline",
        height: "calc(10px + 9vmin)",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: `none`,
            fontSize: "calc(10px + 7vmin)",
            marginLeft: "2vmin",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          fontSize: "calc(10px + 1vmin)",
        }}
      >
        <li>
          <a
            href="#about"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "2vmin",
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "2vmin",
            }}
          >
            Contact
          </a>
        </li>
      </ul>
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
