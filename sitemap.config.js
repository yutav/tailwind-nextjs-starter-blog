const isProd = process.env.NODE_ENV == 'production'

module.exports = {
  siteUrl: 'https://',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './public/',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [], // クローリングしたくないパスがある場合はここに指定します
      },
    ],
  },
}
