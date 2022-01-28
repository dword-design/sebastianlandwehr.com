import P from 'path'

export default function (options) {
  options = { services: {}, ...options }
  if (options.services.googleAnalytics !== undefined) {
    options.services.googleAnalytics = {
      id: process.env.GOOGLE_ANALYTICS_ID,
      ...options.services.googleAnalytics,
    }
  }
  this.addTemplate({
    fileName: P.join('consent', 'options.js'),
    options,
    src: require.resolve('./options.js.template'),
  })
  this.addPlugin({
    fileName: P.join('consent', 'plugin.js'),
    src: require.resolve('./plugin'),
  })
}
