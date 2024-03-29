import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <StaticImage src="../images/profile.jpg" alt="A picture of an alien that kind of looks like me"
    </Layout>
  )
}

export const Head = () => (
    <>
    <title>About Me</title>
    <meta name="description" content="Who I am" />
  </>)

export default AboutPage