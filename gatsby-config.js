const path = require("path")

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "src/pages",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          pages: require.resolve("./src/layouts/index.tsx"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    "gatsby-plugin-preload-fonts",
  ],
}
