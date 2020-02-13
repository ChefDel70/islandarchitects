import React from 'react'
import Layout from '../components/layout'
import SecondaryMenu from '../components/SecondaryMenu'
import Homeprops from '../components/Homeprops'

export default ({pageContext}) => (
  <Layout>
    <SecondaryMenu />
    <h1>Property Page</h1>
    <Homeprops />
  </Layout>
);
