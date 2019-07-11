module.exports = {
  siteMetadata: {
    title: `Lultech`,
    description: `We help turn clunky old websites into an optimized, well-oiled, money making machine for small businesses.`,
		author: `@lultech`,
		features: [
			{
				title: `Blazing-fast wesbites`,
				description: `Increase customer retention by reducing the time it takes them to access information in your website`,
			},
			{
				title: `PWAs`,
				description: `Convert your websites into instant apps and let your users access them like they do apps, even when offline`,
			},
			{
				title: `Chatbots`,
				description: `Let our intelligent little robots engage your customers saving you valuable time to focus on your business`,
			},
		],
		pricing: [
			{
				type: `Basic`,
				features: [`3 page Website`, `Email Contact`, `Backend`],
				price: `5,000 KES`
			},
			{
				type: `Pro`,
				features: [`Basic plus:`, `Offline app`, `Chatbot`],
				price: `10,000 KES`
			},
			{
				type: `Custom`,
				features: [`WhatsApp integration`, `Messenger Integration`, `Payments Integration`, `...much more`],
				price: `Let's talk`
			}
		]
  },
  plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lultech site landing page`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lultech-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
