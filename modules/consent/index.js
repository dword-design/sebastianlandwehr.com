import { endent, join, keys, map } from '@dword-design/functions'
import P from 'path'

export default function (options) {
  options = { services: [], ...options }
  this.addTemplate({
    fileName: P.join('consent', 'options.js'),
    options,
    src: require.resolve('./options.js.template'),
  })

  const serviceNames = options.services |> keys
  for (const serviceName of serviceNames) {
    this.addTemplate({
      fileName: P.join('consent', 'services', `${serviceName}.js`),
      src: require.resolve(`./services/${serviceName}`),
    })
  }
  this.addTemplate({
    fileName: P.join('consent', 'services', 'index.js'),
    options: endent`
      ${
        serviceNames
        |> map(
          (serviceName, index) =>
            `import service${index} from './${serviceName}'`
        )
        |> join('\n')
      }

      export default {
        ${
          serviceNames
          |> map((serviceName, index) => `'${serviceName}': service${index},`)
          |> join('\n')
        }
      }

    `,
    src: require.resolve('./services/index.js.template'),
  })
  this.addPlugin({
    fileName: P.join('consent', 'plugin.client.js'),
    options,
    src: require.resolve('./plugin.client'),
  })
  this.addPlugin({
    fileName: P.join('consent', 'plugin.js'),
    src: require.resolve('./plugin'),
  })
}
