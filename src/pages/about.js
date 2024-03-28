import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => (
    <>
    <title>About Me</title>
    <meta name="description" content="Who I am" />
  </>)

export default AboutPage