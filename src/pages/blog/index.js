import * as React from 'react'
import Layout from '../../components/Layout/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Seo from '../../components/seo'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC }}) {
        nodes {
          frontmatter {
            title
            date(fromNow: true)
            slug
          }
          id
          excerpt
        }
      }
    }
  `)
  const posts = data?.allMdx?.nodes

  return (
    <Layout pageTitle="My Blog Posts">
      {posts?.map(post => (
        <article>
          <h2>
            <Link to={`/blog/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </Link>
          </h2>
          <p>
            {post?.excerpt}
          </p>
        </article>
      ))}
    </Layout>
  )
}

// TODO: Make this query work as a page query
// const query = graphql`
//   query {
//     allMdx {
//       nodes {
//         frontmatter {
//           title
//           date(fromNow: true)
//         }
//         id
//         excerpt
//       }
//     }
//   }
// `

export const Head = () => 
  <Seo title="My Blog Posts" />

export default BlogPage