import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'

const Details = () => {
  return (
    <StaticQuery

      query={graphql`
        {
          allWordpressWpSpacedetails {
            edges {
              node {
                title
                slug
                featured_media {
                  source_url
                  id
                }
              }
            }
          }
        }
      `}

      render={ data => data.allWordpressWpSpacedetails.edges.map( ({ node }) => (
        <div key={node.featured_media.id}>
          <Link to={`/spaces-details/${node.slug}`}>
            <img src={node.featured_media.source_url} alt="Thumbnails" />
          </Link>
          <h3>{node.title}</h3>
        </div>
      ))}
    />
  )
}

export default Details
