import React from "react"
import PropTypes from "prop-types"


const Layout = ({ children }) => (
  <div>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
