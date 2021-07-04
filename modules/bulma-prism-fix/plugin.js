import Prism from 'prismjs'
import customClass from 'prismjs/plugins/custom-class/prism-custom-class'

customClass.name = 'customClass'
Prism.plugins[customClass.name].map({
  number: 'prism-number',
  tag: 'prism-tag',
})
