const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true })
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        // const pageTemplate = path.resolve("./src/templates/page.js")
        // const homesAndPropertiesTemplate = path.resolve("./src/templates/homes_and_properties.js")
        // const spacesAndDetailsTemplate = path.resolve("./src/templates/spaces_and_details.js")
        // const designTeamTemplate = path.resolve("./src/templates/design_team.js")
        // const onTheBoardsTemplate = path.resolve("./src/templates/on_the_boards.js")
        //
        // let functionWithCase = (template) => {
        //     switch (template) {
        //       case 'page.php':
        //           return pageTemplate;
        //           break;
        //       case 'homes_and_properties.php':
        //           return homesAndPropertiesTemplate;
        //           break;
        //       case 'spaces_and_details.php':
        //           return spacesAndDetailsTemplate;
        //           break;
        //       case 'design_team.php':
        //           return designTeamTemplate;
        //           break;
        //       case 'on_the_boards.php':
        //           return onTheBoardsTemplate;
        //           break;
        //       default:
        //           return pageTemplate;
        //     }
        //   };

        let customTemplate = (template) => {
          const absolutePath =
            path.resolve(template.replace(/^(.+)\..+$/, "./src/templates/$1.js"))
          return ( absolutePath == path.resolve() ) ?
                  path.resolve("./src/templates/page.js") : absolutePath
        }

        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.

          const node = edge.node
          const { slug, template } = node


          createPage({
            path: `/${slug}/`,
            component: slash(customTemplate(template)),
            context: node,
          })
        })
      })
      // ==== END PAGES ====

      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====

      // === POST GENERATION
      .then(() => {
        graphql(
          `
            {
              allWordpressWpHomeprops {
                edges {
                  node {
                    slug
                    status
                    title
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const homesAndPropertiesTemplate = path.resolve("./src/templates/properties.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpHomeprops.edges, edge => {
            createPage({
              path: `/homes-properties/${edge.node.slug}/`,
              component: slash(homesAndPropertiesTemplate),
              context: edge.node,
            })
          })
        })
      })

      .then(() => {
        graphql(
          `
            {
              allWordpressWpSpacedetails {
                edges {
                  node {
                    slug
                    status
                    title
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const spacesAndDetailsTemplate = path.resolve("./src/templates/spacedetails.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpSpacedetails.edges, edge => {
            createPage({
              path: `/spaces-details/${edge.node.slug}/`,
              component: slash(spacesAndDetailsTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
    // ==== END POSTS ====
  })
}
