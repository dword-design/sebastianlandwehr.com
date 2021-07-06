---
title: Using Modernizr with Nuxt.js to Detect Browser Features
---

[Modernizr](https://github.com/Modernizr/Modernizr) is a package that detects browser features and makes them queriable via JavaScript and CSS. This is very handy to find out which CSS properties are supported, for example. The approach is much more flexible and stable than using browser vendor and version for this. I wrote a module that allows to use Modernizr with Nuxt.js.

<!--more-->

## Using Modernizr with Nuxt.js

Modernizr uses a plugin-based architecture, and you have to build the package yourself, depending on the features you need to detect – at least if you are not using Nuxt.js! I have created the [nuxt-modernizr](https://github.com/dword-design/nuxt-modernizr) module that makes it easy to add Modernizr to your Nuxt.js app. You pass the features as module options, and the module creates a Modernizr build and places it in the `.nuxt` folder. Here is how to configure it:

First, install the module via `npm install nuxt-modernizr` or `yarn add nuxt-modernizr`.

Then, in your `nuxt.config.js`, add the module and pass the options that should be passed to Modernizr:

```js
export default {
  modules: [
    ['nuxt-modernizr', {
      'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
      options: ['setClasses'],
    }],
  ],
}
```

Check out the [Modernizr documentation](https://modernizr.com/docs/) for details.

Now we can use the `Modernizr` variable and the generated CSS classes on the HTML root element to check for browser features. My all-time favorite among browser features is CSS scrollbars, because the support is pretty different between browsers and depending on if they are available, you can adjust container sizes and style them or not.

```js
if (Modernizr.cssscrollbar) {
  // CSS scrollbar support
}
```

```css
html.cssscrollbar {
  /* CSS scrollbar support */
}
```

## Final Thoughts

That was already it! Usage is pretty simple. Let me know if you find it useful or if there are any things that you are missing. Also, if you find it useful, leave a [GitHub star on the repository](https://github.com/dword-design/nuxt-modernizr).
