import P from 'path'

export default function (options) {
  this.addTemplate({
    fileName: P.join('gdpr', 'options.js'),
    options,
    src: require.resolve('./options.js.template'),
  })
  this.addPlugin({
    fileName: P.join('gdpr', 'plugin.client.js'),
    src: require.resolve('./plugin.client'),
  })
}
