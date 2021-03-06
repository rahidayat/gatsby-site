// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/rahid/project-rahid/gatsby-site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/rahid/project-rahid/gatsby-site/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/rahid/project-rahid/gatsby-site/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/rahid/project-rahid/gatsby-site/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/home/rahid/project-rahid/gatsby-site/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/rahid/project-rahid/gatsby-site/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/home/rahid/project-rahid/gatsby-site/.cache/json/layout-index.json"),
  "404.json": require("/home/rahid/project-rahid/gatsby-site/.cache/json/404.json"),
  "layout-index.json": require("/home/rahid/project-rahid/gatsby-site/.cache/json/layout-index.json"),
  "index.json": require("/home/rahid/project-rahid/gatsby-site/.cache/json/index.json"),
  "layout-index.json": require("/home/rahid/project-rahid/gatsby-site/.cache/json/layout-index.json"),
  "page-2.json": require("/home/rahid/project-rahid/gatsby-site/.cache/json/page-2.json"),
  "layout-index.json": require("/home/rahid/project-rahid/gatsby-site/.cache/json/layout-index.json"),
  "404-html.json": require("/home/rahid/project-rahid/gatsby-site/.cache/json/404-html.json")
}

exports.layouts = {
  "index": preferDefault(require("/home/rahid/project-rahid/gatsby-site/.cache/layouts/index.js"))
}