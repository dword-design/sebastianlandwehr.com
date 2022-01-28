import nuxtConfig from '@dword-design/base-config-nuxt/dist/nuxt.config'
import { property, replace } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginNuxt from '@dword-design/tester-plugin-nuxt'
import axios from 'axios'
import pretty from 'pretty'

export default tester(
  {
    async init() {
      expect(
        axios.get('http://localhost:3000/feed')
          |> await
          |> property('data')
          |> pretty
          |> replace(
            /<lastBuildDate>.*?<\/lastBuildDate>/g,
            '<lastBuildDate>Foo</lastBuildDate>'
          )
      ).toMatchSnapshot(this)
    },
  },
  [testerPluginNuxt(nuxtConfig)]
)
