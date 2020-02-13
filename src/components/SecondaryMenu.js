import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';
import SiteLogo from './SiteLogo';
import SiteIcons from './SiteIcons';

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: white;
`

const MenuItem = styled(Link)`
  color: black;
  display: block;
  padding: 8px 16px;
`

const MainMenuInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  width: 900px;
  height: 100%;
`

const SecondaryMenu = () => (
  <StaticQuery

    query={graphql`
        {
          allWordpressWpApiMenusMenusItems(filter: {
            name: {
              eq: "Main Menu"
            }
          }) {
            edges {
              node {
                name
                items {
                  title
                  object_slug
                }
              }
            }
          }
        }
      `}

      render={props => (
        <MainMenuWrapper>
          <SiteLogo />
            <MainMenuInner>
              {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                <MenuItem to={`/${item.object_slug}`} key={item.title}>
                  {item.title.replace("&#038;", "&")}
                </MenuItem>
              ))}
            </MainMenuInner>
            <SiteIcons />
        </MainMenuWrapper>
      )}
    />

);

export default SecondaryMenu;
