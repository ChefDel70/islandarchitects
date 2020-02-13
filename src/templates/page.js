import React from 'react'
import Layout from '../components/layout'
import MainMenu from '../components/MainMenu'
import SiteLogo from '../components/SiteLogo'
import HeroImage from '../components/HeroImage'
import HomeBlocks from '../components/HomeBlocks'

export default ({pageContext}) => (
  <Layout>
    <MainMenu />
    <SiteLogo />
    <HeroImage />
    <HomeBlocks />
  </Layout>
);
