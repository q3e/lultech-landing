import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About Page</h1>
    <p>Lultech builds chatbots for small businesses</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage
