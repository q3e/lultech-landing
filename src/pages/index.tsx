import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
			<section className="hero is-fullheight has-background-white">
				<h1>Home is under maintenance</h1>
				<div className="hero-body">
					<div className="container">
						<p className="is-uppercase is-size-1">Please check back later</p>
					</div>
				</div>
			</section>
		<Link to="/about">about</Link>
  </Layout>
)

export default IndexPage
