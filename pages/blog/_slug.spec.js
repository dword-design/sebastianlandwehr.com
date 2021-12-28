import nuxtConfig from '@dword-design/base-config-nuxt/dist/nuxt.config'
import tester from '@dword-design/tester'
import testerPluginNuxt from '@dword-design/tester-plugin-nuxt'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'

export default tester(
  {
    async init() {
      await this.page.goto(
        'http://localhost:3000/blog/sending-emails-with-nuxt-js-the-easy-way'
      )
      await this.page.setViewport({
        height: 1,
        width: 1400,
      })
      expect(
        await this.page.screenshot({ fullPage: true })
      ).toMatchImageSnapshot(this)
    },
  },
  [testerPluginNuxt(nuxtConfig), testerPluginPuppeteer()]
)
