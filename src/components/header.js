import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  
  <header className="header">
    <div className="header__logo-container">
      <img src='../images/logo.png' alt="milesstone tour and travel" />
    </div>
    <ul className="header__navigation">
      <li>
        <Link to="/home">Home</Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
