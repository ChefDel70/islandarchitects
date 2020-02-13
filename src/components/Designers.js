import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

const Designers = () => {
  return (
    <StaticQuery

      query={graphql`
        {
          allWordpressPage(filter: {title: {eq: "Design Team"}}) {
            design_team_header: nodes {
              title
              acf {
                design_team_text
              }
            }
          }
          allWordpressWpDesigners {
            designers: nodes {
                acf {
                  designer_title
                  design_team_text
                }
                title
                featured_media {
                  source_url
                  slug
                }
              }
          }
        }
      `}

      // render={props => props.allWordpressWpDesigners.edges.map(designer => (
      //   <div key={designer.node.featured_media.id}>
      //     <h3>{designer.node.title}</h3>
      //     <img src={designer.node.featured_media.source_url} alt="Thumbnails" />
      //   </div>
      // ))}

      render = { ({ allWordpressPage, allWordpressWpDesigners }) => {
          const header = allWordpressPage.design_team_header[0]
          const designers = allWordpressWpDesigners.designers

          return (
            <div>
                <h1>{ header.title }</h1>
                <p>{header.acf.design_team_text}</p>
                { designers.map( designer => (
                  <div key={ designer.featured_media.id }>
                    <h3>{ designer.title }</h3>
                    <h5>{ designer.acf.designer_title } </h5>
                    <img src={ designer.featured_media.source_url } alt="Thumbnails" />
                    <p>{ designer.acf.design_team_text }</p>
                  </div>
                ))}
            </div>
          )
      }}
    />
  )
}

export default Designers
