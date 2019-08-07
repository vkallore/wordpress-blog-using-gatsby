let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const wordPressBaseUrl = process.env.WORDPRESS_BASE_URL
const wordPressProtocol = process.env.WORDPRESS_PROTOCOL

module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress Blog`,
    description: `Static WordPress blog using Gatsby.js & GraphQL.`,
    author: `@vkallore`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // Your WordPress source.
        baseUrl: wordPressBaseUrl,
        protocol: wordPressProtocol,
        // Only fetches posts, tags and categories from the baseUrl.
        includedRoutes: ["**/posts", "**/tags", "**/categories"],
        // Not using ACF so putting it off.
        useACF: false,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
      },
    },
    {
      resolve: "gatsby-wpgraphql-inline-images",
      options: {
        wordPressUrl: wordPressBaseUrl,
        uploadsUrl: `${wordPressProtocol}:://${wordPressBaseUrl}wp-content/uploads/`,
        processPostTypes: ["Page", "Post", "CustomPost"],
        graphqlTypeName: "WPGraphQL",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
