import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

const icons_prefix = "http://islandarchitects.local/wp-content/uploads/2019/12/island-site-social-media_"

const SiteIconWrapper = styled.div`
  display: flex;
`

const SiteIconInner = styled.div`
  max-width: 25px;
  height: 100%;
  width: 25px;
  display: flex;
`

const SiteIconItem = styled.a`
  display: block
`

const SiteIcons = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Social Menu"}}) {
        edges {
          node {
            items {
              url
              object_slug
              title
              }
            }
          }
        }
      }
  `}

  render={props => (
    <SiteIconWrapper>
      <SiteIconInner>
      {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <SiteIconItem>
          <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">
          <img src={`${icons_prefix}${item.title}.png`} alt="icons" />
          </a>
        </SiteIconItem>
      ))}
      </SiteIconInner>
    </SiteIconWrapper>
  )} />
);

export default SiteIcons
