export default function () {
  this.addPlugin({ src: require.resolve('./plugin.client') })
  this.addPlugin(require.resolve('./plugin'))
}
