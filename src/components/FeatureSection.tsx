import React from 'react'

import fastLoadingWebsite from '../images/fast-loading-website.svg'
import instantAppWebsite from '../images/instant-app-website.svg'
import chatbotsEngageUser from '../images/chatbots-engage-user.svg'

type Props = {
	data: {
		title: string
		description: string,
		features: Array<Feature>,
	},
}

type Feature = {
	title: string,
	description: string,
	img: string,
}

const img = [fastLoadingWebsite, instantAppWebsite, chatbotsEngageUser]

const FeatureSection = ({ data  }: Props) => {
	return (
		<section className="bg-white border-b py-8">
			<div className="container max-w-5xl mx-auto m-8">
				<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">A modern stack</h1>
				<div className="w-full mb-4">	
					<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
				</div>
				{
					data.features.map((feature:Feature, index: number) => {
						return index % 2 !== 0 ?
							<div className="flex flex-wrap my-4" key={index}>
								<div className="w-5/6 sm:w-1/2 p-6">
									<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">{feature.title}</h3>
									<p className="text-gray-600 mb-8">{feature.description}</p><br /><br />
								</div>
								<div className="w-full sm:w-1/2 p-6">
									<div className="w-full sm:h-64 mx-auto">
										<img src={img[index]} />
									</div>
								</div>
							</div>
							:
							<div className="flex flex-wrap my-4" key={index}>	
								<div className="w-full sm:w-1/2 p-6 mt-6">
									<div className="w-5/6 sm:h-64 mx-auto">
										<img src={img[index]} />
									</div>
								</div>
								<div className="w-full sm:w-1/2 p-6 mt-6">
									<div className="align-middle">
										<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">{feature.title}</h3>
										<p className="text-gray-600 mb-8">{feature.description}</p><br /><br />
									</div>
								</div>
							</div>
					})
				}
			</div>
		</section>
	)
}

export default FeatureSection
