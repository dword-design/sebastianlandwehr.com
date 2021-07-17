---
title: Creating an RSS Feed from Nuxt Content with Full Body Html Code
---

There is already [an official doc article](https://content.nuxtjs.org/integrations/#nuxtjsfeed) about how to create an RSS feed from Nuxt Content. But it only adds the excerpt as the actual content. Most feed readers allow the reader to read the **whole article** right in the app without a context switch. This article will present a way to add the whole document to the RSS feed by adding a simple **drop-in module**.

<!--more-->

## The problem with HTML code outside the nuxt-content component

Nuxt Content is a great static CMS that makes it incredibly easy to setup a performant Markdown-based blog without the need to add loads of third party services.

The heart of the system is the `nuxt-content` component. This component gets the Markdown document that should be rendered, and then applies big magic to make a beautiful blog page out of it 😊.

```html
<template>
  <nuxt-content :document="post" />
</template>
```

So far so good. As long as you use Nuxt Content for rendering, there's not much to think about. But as soon as you want to access and work with the **actual generated HTML code**, you won't find any field in the documents containing the raw HTML code.

Reason is that the component internally generates a **JSON object**, which is then turned into VDOM nodes. So it's made for being rendered by Vue.js. There is no native way of letting the Markdown pipeline run somewhere else and working with the HTML code. But this is what we need, since we want to put the article text with markup inside our RSS feed!

## Use nuxt-content-body-html to abstract it out

I built [nuxt-content-body-html](https://github.com/dword-design/nuxt-content-body-html), which basically adds a `bodyHtml` field to all markdown documents. It reproduces the Nuxt Content Markdown pipeline to generate it and also uses the Remark and Rehype plugins from the module config, so it outputs the same HTML as the component. The good thing is, we can just drop it in and abstracts away the logic of generating the HTML code, so that we can concentrate on the feed creation.

Let's install the module by running `npm install nuxt-content-body-html`. Then we add it to our `nuxt.config.js`:

```js
export default {
  modules: [
    'nuxt-content-body-html',
    '@nuxt/content',
  },
}
```

Great! To test, you can check `post.bodyHtml` on a blog page and it should contain the HTML code.

Now we can adjust the feed creation to actually use the field. You have probably used a way similar to [the Nuxt Content docs](https://content.nuxtjs.org/integrations/#nuxtjsfeed) to setup your feed. Here is a reduced example of a single RSS feed configuration:

```js
export default {
  modules: [
    'nuxt-content-body-html',
    '@nuxt/content',
    '@nuxtjs/feed',
  ],
  feed: [
    {
      create: async feed => {
        const $content = require('@nuxt/content').$content
        feed.options = {
          title: 'My Blog',
          link: 'https://me.com/blog',
          description: "It's all about programming!",
        }

        const posts = await $content('posts')
          .sortBy('createdAt', 'desc')
          .fetch()
        posts.forEach(post => {
          const url = `https://me.com/blog/${post.slug}`
          feed.addItem({
            author: post.authors,
            content: post.bodyHtml,
            date: new Date(post.createdAt),
            description: post.description,
            id: url,
            link: url,
            title: post.title,
          })
        })
      },
      path: '/feed',
      type: 'rss2',
    },
  ],
}
```

That's it, now you should have a feed with full HTML content! I recommend [Inoreader](https://inoreader.com) to test it, you can reload the articles with the little reload button and you should then see changes. Below you can see an example of an article shown in Inoreader:

![Article in Inoreader](/blog/creating-an-rss-feed-from-nuxt-content-with-full-body-html-code/post.jpg)

## Bonus tip: Add a teaser image at the very top

Feed readers can not only display the contents of an article, they often also show the first image as a teaser image in the article list. That's a great thing for readers to get a first impression of the article's content! Simply add an image at the very top and you're good to go. Adjust the feed creation like so:

```js
// images at static/blog/<slug>/banner.png

posts.forEach(post => {
  const url = `https://me.com/blog/${post.slug}`
  feed.addItem({
    // ...
    content: `
      <p>
        <img src="https://me.com/blog/${post.slug}/teaser.png">
      </p>
      ${post.bodyHtml}
    `,
  })
})
```

Here is the result in Inoreader:

![Article in Inoreader](/blog/creating-an-rss-feed-from-nuxt-content-with-full-body-html-code/post-with-image.jpg)

And the resulting teaser view:

![Teaser view in Inoreader](/blog/creating-an-rss-feed-from-nuxt-content-with-full-body-html-code/teaser-view.jpg)

## Conclusion

This article was about RSS feeds with Nuxt Content containing full HTML. [nuxt-content-body-html](https://github.com/dword-design/nuxt-content-body-html) is a quick and easy solution to add a `bodyHtml` field to documents that can be used in the feed creation function. I hope it's of some use for you! If you like it, feel free to leave a star at [star at GitHub](https://github.com/dword-design/nuxt-content-body-html) 🌟. Thanks for reading!
