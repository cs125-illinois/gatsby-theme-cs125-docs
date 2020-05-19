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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: process.env.npm_package_name,
        short_name: process.env.npm_package_name,
        start_url: "/",
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-env-variables",
      options: {
        whitelist: ["npm_package_name", "npm_package_version", "npm_package_description"],
      },
    },
  ],
}
