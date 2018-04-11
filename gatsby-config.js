module.exports = {
  siteMetadata: {
    title: `Scott Wiggins | Blog`,
    author: `Scott Wiggins`
  },
  plugins: [
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    }
  ]
}