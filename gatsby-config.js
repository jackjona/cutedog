module.exports = {
  siteMetadata: {
    title: "Cute Dog Photos",
    description: "A Website With Cute Dog Photos",
    author: "Jack Jona",
    social: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/jackjona123/",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/jackjona123",
      },
      {
        name: "GitHub",
        url: "https://github.com/jackjona123",
      },
    ],
  },
  plugins: [
    "gatsby-theme-gallery",
    // {
    //   resolve: "gatsby-theme-gallery",
    //   options: {
    //     basePath: "/gallery",
    //   },
    // },
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
  ],
};
