import React from 'react'
import Layout from '../components/layout'
import SecondaryMenu from '../components/SecondaryMenu'
import Properties from '../components/Properties'

export default ({pageContext}) => (
  <Layout>
    <SecondaryMenu />
    <h1>Homes & Properties</h1>
    <h3>click on thumbnails for photos and details</h3>
    <Properties />
  </Layout>
);
