import React from 'react'

const TitleCardSection = () => {
	return (
		<section className="bg-white border-b py-8">
			<div className="container mx-auto flex flex-wrap pt-4 pb-12">
				<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Relieve Your Pain</h1>
			<div className="w-full mb-4">	
				<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
			</div>
				<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
					<a href="#" className="flex flex-wrap no-underline hover:no-underline">
						<p className="w-full text-gray-600 text-xs md:text-sm px-6">Don't Do Extra</p>
						<div className="w-full font-bold text-xl text-gray-800 px-6">Do You Have Pay More?</div>
						<p className="text-gray-800 text-base px-6 mb-5">
							Leverage your existing website, social media and chat apps to improve your customer's experience and hence increase sales.
						</p>
					</a>
				</div>
			</div>

				<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
					<a href="#" className="flex flex-wrap no-underline hover:no-underline">
						<p className="w-full text-gray-600 text-xs md:text-sm px-6">We Fix Problems</p>
						<div className="w-full font-bold text-xl text-gray-800 px-6">What is your biggest Pain Point?</div>
						<p className="text-gray-800 text-base px-6 mb-5">
							We build precisely what you need to fix a very specific problem you have, relieving you of clunky software.
						</p>
					</a>
				</div>
			</div>

				<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
					<a href="#" className="flex flex-wrap no-underline hover:no-underline">
						<p className="w-full text-gray-600 text-xs md:text-sm px-6">We Build Together</p>
						<div className="w-full font-bold text-xl text-gray-800 px-6">We bring out the best strategies.</div>
						<p className="text-gray-800 text-base px-6 mb-5">
							You help us build the software by testing it's effectiveness in fixing your business problems.
						</p>
					</a>
				</div>
			</div>

			</div>
		</section>
	)
}

export default TitleCardSection
