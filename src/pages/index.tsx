import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
			<section className="hero is-fullheight has-background-white">
				<h1>Homeh</h1>
				<div className="hero-body">
					<div className="container">
						<p className="is-uppercase is-size-1">Lultech + gatsby</p>
					</div>
				</div>
			</section>
		<Link to="/about">Go to about page</Link>
  </Layout>
)

export default IndexPage
