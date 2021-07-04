---
title: How to Access Nuxt.js Page Data in Route Meta Fields
---

Hey folks, this article is about accessing page data in route objects. It's a use case I have frequently stumbled upon, for example when generating sitemaps.

<!--more-->

Nuxt pages allow you to define structural data like the [meta](https://github.com/nuxt/nuxt.js/issues/1687) property or the [auth property from @nuxtjs/auth](https://auth.nuxtjs.org/guide/middleware) (note that they should not be confused with [meta tags](https://nuxtjs.org/docs/2.x/features/meta-tags-seo)). It would be great to be able to access them elsewhere. The route object can be accessed at quite a lot of places:

- `context.route` in `asyncData`
- `this.$route.meta` in components
- `this.extendRoutes` in modules
- `context.route` in Middlewares

I did some testing and found out that the only possibility to access page data outside pages is in `asyncData` and middlewares, as discussed in [this issue](https://github.com/nuxt/nuxt.js/issues/1687). All other places do not work and have empty `meta` objects. Also, the case discussed in the linked issue adds a `meta` property in the route object itself, not in the `matched` array, as it is in vue-router (see the [example from vue-router](https://router.vuejs.org/guide/advanced/meta.html)).

Alright, that's the current state. Now, how can we fix it and add page data to route objects?

## nuxt-route-meta

I wrote the [nuxt-route-meta](https://github.com/dword-design/nuxt-route-meta) module that does it by parsing the page components at build time and adding the data to the routes via `this.extendRoutes`. It's a zero config module, so you can just add it to your `nuxt.config.js` and it works out of the box.

First, install it via `npm install nuxt-route-meta`.

Then add it to your `nuxt.config.js`:

```js
// nuxt.config.js

export default {
  modules: ['nuxt-route-meta'],
}
```

Now let's create a page with some data like so:

```js
// pages/index.vue

export default {
  auth: true,
  meta: {
    theme: 'light',
  },
}
```

We are already done with the configuration! Let's go through the cases discussed above:

**asyncData**:

```js
// pages/index.vue

export default {
  auth: true,
  meta: {
    theme: 'light',
  },
  asyncData({ route }) {
    // route.matched[0].meta.auth = true
    // route.matched[0].meta.theme = 'light'
  }
}
```

**this.$route.meta**:

```js
// pages/index.vue

export default {
  auth: true,
  meta: {
    theme: 'light',
  },
  mouted() {
    // this.$route.meta.auth = true
    // this.$route.meta.theme = 'light'
  },
}
```

**this.extendRoutes**:

```js
// modules/module.js

export default function () {
  this.extendRoutes(routes =>
    routes.forEach(route => {
      // route.meta.auth = true
      // route.meta.theme = 'light'
    })
  )
}
```

**Middlewares**:
```js
// middleware/middleware.js

export default ({ route }) => {
  // route.matched[0].meta.auth = true
  // route.matched[0].meta.theme = 'light'
}
```

As we can see, we can access the page data everywhere now! That's it already on how to use the module.

## Generating a Sitemap with Non-Auth Routes

A common use case of accessing page data is sitemap generation, especially conditionally adding entries to the sitemap. We will now configure `@nuxtjs/sitemap` to only add non-auth routes. So let's add the sitemap module via `npm install @nuxtjs/sitemap` and add it to our config:

```js
// nuxt.config.js

export default {
  modules: [
    'nuxt-route-meta',
    '@nuxtjs/sitemap',
  ],
}
```

Filtering the routes is easy now because we only have to check the meta property:

```js
// nuxt.config.js

export default {
  modules: [
    'nuxt-route-meta'
  ],
  ['@nuxtjs/sitemap', {
    filter: ({ routes }) =>
      routes
        .filter(route => [false, 'guest'].includes(route.meta.auth)),
  }],
}
```

And that's it, if you check `/sitemap.xml`, you should only see non-auth routes!

## Further Thoughts

That was an introduction to [nuxt-route-meta](https://github.com/dword-design/nuxt-route-meta). I hope it's of some use for you! If you like it, feel free to leave a star at [star at GitHub](https://github.com/dword-design/nuxt-route-meta) 🌟. Also, the module probably needs some more work, so in case you need something or there is a bug, [file an issue](https://github.com/dword-design/nuxt-route-meta/issues). Thanks for reading!
