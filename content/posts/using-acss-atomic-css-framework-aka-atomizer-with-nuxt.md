---
title: Using ACSS atomic CSS framework (aka Atomizer) with Nuxt
---

[ACSS](https://acss.io) is a nice little Atomic CSS framework. In contrast to alternatives like [Tailwind](https://tailwindcss.com), it generates atomic classes from the actual class instances. This allows to 1. keep the number of generated classes at a minimum, and 2. to pass arbitrary values to the classes (which would normally lead to a big class explosion). Under the hood it uses a tool called [Atomizer](https://github.com/acss-io/atomizer) to generate these classes. This article describes how to use ACSS in a Nuxt app using the [nuxt-atomizer](https://github.com/dword-design/nuxt-atomizer) module.

<!--more-->

## Using the nuxt-atomizer module

Basic usage of the module does not require configuration. We can just add it to our module list. Let's install the module by running `npm install nuxt-atomizer`. Then we add it to our `nuxt.config.js`:

```js
export default {
  modules: [
    'nuxt-atomizer',
  },
}
```

The great thing about Nuxt modules is that they can abstract away a lot of logic. The whole class generation takes place inside the module, so that we can start adding classes right away 🚀.

Let's create a template and add atomic classes:

```html
<template>
  <div class="P(2rem) Bgc(#fafafa) C(#111) Bd Bdw(2px) Bdc(#ccc) Bdrs(.5rem) Ff(ss)">
    Hey there, I'm styled with ACSS! 🙌
  </div>
</template>
```

That's it, the result is shown below. Feel free to experiment with the CodeSandbox. Also, check out the docs for further configuration.

<iframe src="https://codesandbox.io/embed/demo-nuxt-atomizer-k8cky?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  style="width:100%; height:500px; border-right:1px solid #000; border-radius: 4px; overflow:hidden;"
  title="demo-nuxt-atomizer"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Conclusion

This article showed how to use ACSS in a Nuxt app. I hope it's of some use for you! If you like the module, feel free to leave a star at [star at GitHub](https://github.com/dword-design/nuxt-atomizer) 🌟. Thanks for reading!
