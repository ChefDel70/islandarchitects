// import React from 'react'
// import {graphql, StaticQuery} from 'gatsby'
//
// const DesignTeam = () => {
//   return (
//     <StaticQuery
//       query={graphql`
//           {
//             allWordpressPage(filter: {title: {eq: "Design Team"}}) {
//               edges {
//                 node {
//                   id
//                   title
//                   content
//                 }
//               }
//             }
//           }
//         `}
//
//       render={props => (
//           <div>
//               <h1>{props.allWordpressPage.edges[0].node.title}</h1>
//           </div>
//       )}
//     />
//   )
// }
//
// export default DesignTeam
