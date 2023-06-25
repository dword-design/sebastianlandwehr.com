import { delay } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginNuxt from '@dword-design/tester-plugin-nuxt'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'

export default tester(
  {
    async init() {
      await this.page.goto('http://localhost:3000')
      await this.page.setViewport({
        height: 875,
        width: 1400,
      })

      const privacyPolicyButton = await this.page.waitForFunction(() =>
        [...document.querySelectorAll('.modal button')].find(
          el => el.innerText === 'privacy policy',
        ),
      )
      await delay(150)
      expect(await this.page.screenshot()).toMatchImageSnapshot(this)
      await privacyPolicyButton.click()
      await delay(150)
      expect(await this.page.screenshot()).toMatchImageSnapshot(this)
      await this.page.mouse.click(10, 10)
      await delay(150)
      expect(await this.page.screenshot()).toMatchImageSnapshot(this)

      const acceptAllCookiesButton = await this.page.waitForXPath(
        "//button/span[text()='Accept all cookies']/..",
      )
      await acceptAllCookiesButton.click()
      await this.page.waitForNavigation()
      await this.page.setViewport({
        height: 5100,
        width: 1400,
      })

      const card = await this.page.waitForSelector('.card')
      await card.hover()
      await delay(500)
      expect(
        await this.page.screenshot({ fullPage: true }),
      ).toMatchImageSnapshot(this)
    },
  },
  [testerPluginNuxt(), testerPluginPuppeteer()],
)
