import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

const HeroImage = () => (
  <StaticQuery

    query={graphql`
        {
          allWordpressPage {
            edges {
              node {
                acf {
                  hero_image {
                    source_url
                  }
                }
              }
            }
          }
        }
      `}

    render={props => (
      <div>
        <img src={props.allWordpressPage.edges[3].node.acf.hero_image.source_url} alt="Hero Image"/>
      </div>

    )}
  />
);

export default HeroImage
