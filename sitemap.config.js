module.exports = {
  siteUrl: process.env.BASE_URL,
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
  additionalSitemaps: [process.env.BASE_URL + 'server-sitemap.xml'],
}
