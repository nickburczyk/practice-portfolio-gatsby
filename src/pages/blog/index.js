import * as React from 'react'
import Layout from '../../components/Layout/layout'
import { graphql } from 'gatsby'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  const posts = data?.allMdx?.nodes

  return (
    <Layout pageTitle="My Blog Posts">
      {posts?.map(post => (
        <article>
          <h4 key={post.id}>
            {post?.frontmatter?.title} - &nbsp;
            {post?.frontmatter?.date}
          </h4>
          <p>
            {post?.excerpt}
          </p>
        </article>
      ))}
    </Layout>
  )
}

const query = graphql`
  query GetBlogPosts {
    allMdx (sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          title
          date(fromNow: true)
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage