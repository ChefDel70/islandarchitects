import React from "react"
import PropTypes from "prop-types"
import MainMenu from "./MainMenu";


const Layout = ({ children }) => (
  <div>
    <MainMenu />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
