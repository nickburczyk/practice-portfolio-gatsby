import * as React from 'react'
import Layout from '../components/Layout/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map(node => (
          <li>{node.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query GetBlogPosts {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
        sourceInstanceName
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage