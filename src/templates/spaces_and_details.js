import React from 'react'
import Layout from '../components/layout'
import SecondaryMenu from '../components/SecondaryMenu'
import Details from '../components/Details'

export default ({pageContext}) => (
  <Layout>
    <SecondaryMenu />
    <h2>Spaces & Details</h2>
    <h3>click on thumbnails for photos and details</h3>
    <Details />
  </Layout>
);
