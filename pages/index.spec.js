import nuxtConfig from '@dword-design/base-config-app/dist/nuxt.config'
import tester from '@dword-design/tester'
import testerPluginNuxt from '@dword-design/tester-plugin-nuxt'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import { delay } from '@dword-design/functions'

export default tester(
  {
    async init() {
      await this.page.goto('http://localhost:3000')
      await this.page.setViewport({
        height: 875,
        width: 1400,
      })
      expect(await this.page.screenshot()).toMatchImageSnapshot(this)

      const dataPrivacyButton = await this.page.waitForXPath("//h2[text()='Cookie Settings']/..//button/span[normalize-space(text())='data privacy']/..")
      await dataPrivacyButton.click()
      await delay(300)
      expect(await this.page.screenshot()).toMatchImageSnapshot(this)

      await this.page.mouse.click(10, 10)
      await delay(300)
      expect(await this.page.screenshot()).toMatchImageSnapshot(this)

      const acceptAllCookiesButton = await this.page.waitForXPath("//button/span[text()='Accept all cookies']/..")
      await acceptAllCookiesButton.click()
      await this.page.waitForNavigation()

      await this.page.setViewport({
        height: 5100,
        width: 1400,
      })

      expect(await this.page.screenshot({ fullPage: true })).toMatchImageSnapshot(this)
    },
  },
  [testerPluginNuxt(nuxtConfig), testerPluginPuppeteer()]
)
