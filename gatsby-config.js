module.exports = {
  siteMetadata: {
    title: `Lultech`,
    description: `We build and Secure Web Apps.`,
		author: `@lultech`,
		features: [
			{
				title: `Build apps with the bleeding edge of Javascript`,
				description: `Blazing-fast secure Javascript apps built on the JAMStack using ReactJS, graphpQL and Typescript`,
			},
			{
				title: `Take Security Very Seriously`,
				description: `We do a thorough security vulnerability analysis against OWASP attack vectors`,
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
				features: [`Basic plus:`, `Offline app`],
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
