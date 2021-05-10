export default function (options) {
  this.nuxt.hook('content:file:beforeParse', file => {
    file.data += `\n${options.text}`
  })
}
