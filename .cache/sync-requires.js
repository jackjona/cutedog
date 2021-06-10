const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jacksonjohnson/Documents/Website/Cute Dog/cutedog-v3/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-theme-gallery-src-pages-index-tsx": hot(preferDefault(require("/Users/jacksonjohnson/Documents/Website/Cute Dog/cutedog-v3/node_modules/gatsby-theme-gallery/src/pages/index.tsx"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/jacksonjohnson/Documents/Website/Cute Dog/cutedog-v3/src/pages/404.tsx")))
}

