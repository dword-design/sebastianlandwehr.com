---
title: Image Snapshot Testing with Mocha
---

## What Is Snapshot Testing?

Snapshot testing is a testing mechanism that for long has seemed to be exclusive to [Jest](https://github.com/facebook/jest). The main idea is to generate expected values into a separate file and to compare the actual tested values with these saved values. It is also possible to update snapshots by passing an environment variable. This testing approach is great for complex data like large strings, DOM content, or images.

## Snapshot Testing with Jest

Snapshot testing itself is a [built-in feature](https://jestjs.io/docs/en/snapshot-testing) of Jest, and when searching specifically for image snapshots, you'll quickly find [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot), which does great work comparing and updating image snapshots. It also provides convenience features like a base64 diff output, which allows us to view the diff from a CI environment (since the diff image file cannot be saved or viewed).

## What About Mocha?

While this is all great, what if I'm not using Jest for whatever reason? What if I'm using Mocha? 

For simple snapshot testing, there are some options. For Chai users, there is [mocha-chai-snapshot](https://github.com/monojitb02/mocha-chai-snapshot). For expect users, there is [expect-mocha-snapshot](https://github.com/blogfoster/expect-mocha-snapshot). It basically wraps the jest snapshot logic by injecting an artificial testing context. Big credit to [Alexander Beletsky](https://github.com/alexbeletsky) here!

What was still missing was a package that ports image snapshot testing to Mocha. Since I'm currently using expect as an assertion library, I focused on finding a solution for this one.

I started to fiddle around with jest-image-snapshot in combination with expect-mocha-snapshot, and it turned out to be way easier than expected to make it Mocha compatible. I put it into its own NPM package, called [expect-mocha-image-snapshot](https://github.com/dword-design/expect-mocha-image-snapshot). Usage is pretty similar to Jest, you only have to pass the testing context via `this`. Here is a quick code sample:

```js
import expect from 'expect'
import { toMatchImageSnapshot } from 'expect-mocha-image-snapshot'

expect.extend({ toMatchImageSnapshot })

it('works', async function () {
  ...
  const screenshot = await puppeteer.screenshot()
  expect(screenshot).toMatchImageSnapshot(this)
});
```

You can have a look at the code in case you are interested in how it works. It is pretty straight-forward.

## Conclusion

That was my guide to image snapshot testing with Mocha. If you like [expect-mocha-image-snapshot](https://github.com/dword-design/expect-mocha-image-snapshot), you can support me by putting a star on GitHub. Also, let me know what you think about it.
