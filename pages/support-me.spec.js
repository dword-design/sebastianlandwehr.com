import nuxtConfig from '@dword-design/base-config-app/dist/nuxt.config'
import tester from '@dword-design/tester'
import testerPluginNuxt from '@dword-design/tester-plugin-nuxt'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'

export default tester(
  {
    async init() {
      await this.page.goto('http://localhost:3000/support-me')
      await this.page.setViewport({
        height: 1,
        width: 1400,
      })

      const screenshot = await this.page.screenshot({ fullPage: true })
      expect(screenshot).toMatchImageSnapshot(this)
    },
  },
  [testerPluginNuxt(nuxtConfig), testerPluginPuppeteer()]
)
