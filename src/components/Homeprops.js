import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

const Homeprops = () => {
  return (
    <StaticQuery

      query={graphql`
        {
          allWordpressAcfHomeprops {
            edges {
              node {
                id
                acf {
                  homeprops_gallery {
                    id
                    slug
                    source_url
                  }
                }
              }
            }
          }
        }
      `}

      render={props => props.allWordpressAcfHomeprops.edges.map(properties => (
        <div key={properties.node.id}>
          <img src={properties.node.acf.homeprops_gallery.source_url} alt="Thumbnails" />
        </div>
      ))}
    />
  )
}

export default Homeprops
