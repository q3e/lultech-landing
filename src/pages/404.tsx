import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import notFoundillustration from "../images/not-found-illustration.svg"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
			<div>
				<img
				src={notFoundillustration}
				className="block mx-auto w-1/2"
				alt="Ghost getting abducted by aliens"
				/>
				<h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
					Looks like you are are lost...
				</h2>
			</div>
	</Layout>
)

export default NotFoundPage
