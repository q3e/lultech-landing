import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AboutPage = () => (
  <Layout>
    <SEO title="About two"/>
    <h1>About Page</h1>
    <p>Lultech builds chatbots for small businesses</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage
