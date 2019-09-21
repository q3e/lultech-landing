module.exports = {
  pathPrefix: `/lultech-landing-html5up/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: `Lultech`,
    description: `We build secure web apps and attack them`,
    author: `@lultech`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "lultech site landing page",
        short_name: "lultech-landing",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "standalone",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
  ],
}
