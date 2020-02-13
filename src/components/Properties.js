import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'

const Properties = () => {
  return (
    <StaticQuery

      query={graphql`
        {
          allWordpressWpHomeprops {
            edges {
              node {
                slug
                featured_media {
                  source_url
                  id
                }
                title
              }
            }
          }
        }

      `}

      render={ data => data.allWordpressWpHomeprops.edges.map( ({ node }) => (
        <div key={ node.featured_media.id }>
          <Link to={`/homes-properties/${node.slug}`}>
            <img src={ node.featured_media.source_url } alt="Thumbnails" />
          </Link>
          <h3>{ node.title } </h3>
        </div>
      ))}
    />
  )
}

export default Properties
