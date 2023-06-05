import { delay } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginNuxt from '@dword-design/tester-plugin-nuxt'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'

export default tester(
  {
    async init() {
      await this.page.goto('http://localhost:3000/blog')
      await this.page.setViewport({
        height: 1,
        width: 1400,
      })

      const acceptAllCookiesButton = await this.page.waitForXPath(
        "//button/span[text()='Accept all cookies']/..",
      )
      await acceptAllCookiesButton.click()
      await delay(500)

      const screenshot = await this.page.screenshot({ fullPage: true })
      expect(screenshot).toMatchImageSnapshot(this)
    },
  },
  [testerPluginNuxt(), testerPluginPuppeteer()],
)
