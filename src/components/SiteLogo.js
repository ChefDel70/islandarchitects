import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

const SiteLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const SiteLogoImage = styled.img`
  max-width: 100%;
`

const SiteLogoDisplay = styled.div`
  width: 200px;
  padding: 16px;
  margin: 16px;
`

const SiteLogo = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpLogo {
        edges {
          node {
            url {
              source_url
            }
          }
        }
      }
    }
  `} render={props => (
    <SiteLogoWrapper>
      <SiteLogoDisplay>
       <SiteLogoImage src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="Logo"/>
      </SiteLogoDisplay>
    </SiteLogoWrapper>
  )} />
);

export default SiteLogo
