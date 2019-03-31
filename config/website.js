const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Andre Ribau | ribauandre.com', // Navigation and Site Title
  siteTitleAlt: 'Andre Ribau', // Alternative Site title for SEO
  siteTitleShort: 'Andre Ribau', // short_name for manifest
  siteHeadline: 'SRE/SE with a passion for all things tech.', // Headline for schema.org JSONLD
  siteUrl: 'http://ribauandre.com/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.jpg', // Used for SEO and manifest
  siteDescription: 'Andre Ribau Personal Website',
  author: 'LekoArts', // Author for schema.org JSONLD

  // Manifest and Progress color
  themeColor: tailwind.colors.grey,
  backgroundColor: tailwind.colors.white,
}
