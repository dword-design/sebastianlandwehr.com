import { getNuxtConfig } from '@dword-design/base-config-nuxt'
import { property } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginNuxt from '@dword-design/tester-plugin-nuxt'
import axios from 'axios'
import pretty from 'pretty'

export default tester(
  {
    async init() {
      expect(
        axios.get('http://localhost:3000/sitemap.xml')
          |> await
          |> property('data')
          |> pretty
      ).toMatchSnapshot(this)
    },
  },
  [testerPluginNuxt(getNuxtConfig())]
)
