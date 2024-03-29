import React from 'react';
import Layout from '../components/Layout/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage 
          src="../images/piano-wall.jpg" 
          alt="a wall that looks loosely inspired by a piano keyboard but with warm wood tones"
          placeholder='blur'
        />
    </Layout>
  )
}

export const Head = () => <Seo title="Home"/>

export default IndexPage