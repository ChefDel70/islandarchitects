import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
// import styled from 'styled-components';

const HeroImage = () => (
    <StaticQuery

    query={graphql`
        {
          allWordpressPage(filter: {title: {eq: "Home"}}) {
            edges {
              node {
                acf {
                  hero_image {
                    source_url
                  }
                  hero_title
                  hero_paragraph
                }
              }
            }
          }
        }
      `}

    render = { props => {
      const homePage = props.allWordpressPage.edges[0].node.acf

      const { hero_image, hero_title, hero_paragraph } = homePage

      return (
        <div>
          <div>
            <img src={ hero_image.source_url } alt="Hero"/>
          </div>
          <div>
            { hero_title }
          </div>
          <div>
            { hero_paragraph }
          </div>
        </div>
      )
    }}
  />
);

export default HeroImage
