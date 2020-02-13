import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'

const HomeBlocks = () => {
  return (
    <StaticQuery query={graphql`
        {
          allWordpressPage(filter: {title: {ne: "Home"}}) {
            edges {
              node {
                id
                title
                slug
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `}

      render={props => (
        <div>
          {props.allWordpressPage.edges.map(sections => (
            <div key={sections.node.id}>
              <h2>{sections.node.title.replace("&#038;", "&")}</h2>
              <Link to={sections.node.slug}>
                <img src={sections.node.featured_media.source_url} alt="Page Links"/>
              </Link>
            </div>
          ))}
        </div>
      )}
    />
  )
}


export default HomeBlocks
