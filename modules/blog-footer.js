const blogFooter =
  "**If you like what I'm doing, follow me on [Twitter](https://twitter.com/seblandwehr) or check out my [website](https://sebastianlandwehr.com). Also consider donating at [Buy Me a Coffee](https://www.buymeacoffee.com/dword), [PayPal](https://www.paypal.com/paypalme/SebastianLandwehr) or [Patreon](https://www.patreon.com/dworddesign). Thank you so much! ❤️**";

export default (options, nuxt) =>
  nuxt.hook(
    'content:file:beforeParse',
    ({ file }) => (file.body += `\n${blogFooter}`),
  );
