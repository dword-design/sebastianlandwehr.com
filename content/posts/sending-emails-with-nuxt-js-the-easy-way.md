---
title: Sending Emails with Nuxt.js the Easy Way
---

## Introduction

When I started to work with Nuxt.js, I frequently had the problem that I wanted so send emails via a contact form. While there are third party services to do that, I thought: Why not use the existing server infrastructure that comes with Nuxt.js?

That is why I wrote [nuxt-mail](https://www.npmjs.com/package/nuxt-mail), a Nuxt.js module that adds a `/mail/send` route to the server and injects a `$mail` variable that wraps the API call.

## Usage

You start by installing the module and [@nuxtjs/axios](https://www.npmjs.com/package/@nuxtjs/axios) via `npm install nuxt-mail @nuxtjs/axios` or `yarn add nuxt-mail @nuxtjs/axios`.

`@nuxtjs/axios` is important here because it allows the module to do the REST call.

Then you add `@nuxtjs/axios` and `nuxt-mail` to your `nuxt.config.js` file. We also have to pass the SMPT settings that should internally be used by `nodemailer`:

```js
export default {
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      smtp: {
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: 'username',
          pass: 'password'
        },
      },
    }],
  ],
}
```
Note that you probably should pass the credentials or the whole config via environment variables (e.g. via [dotenv](https://www.npmjs.com/package/dotenv)). Also note that you can only use the module in universal mode. It will not work if you are using `nuxt generate` or are using `spa` mode because the server middleware does not exist.

And there we go! Now we can implement ourselves a contact form page and send emails:

```html
<template>
  <form>
    <label for="email">Your email address:</label>
    <input id="email" type="email" v-model="email" />
    <label for="message">Message:</label>
    <textarea id="message" v-model="message" />
    <button type="submit" @click.prevent="send">
      Send email
    </button>
  </form>
</template>
```

In the `<script>` section we basically call `this.$mail.send()`:

```js
<script>
export default {
  data: () => ({
    email: '',
    message: '',
  }),
  methods: {
    send() {
      this.$mail.send({
        from: this.email,
        subject: 'Contact form message',
        text: this.message,
        to: 'me@gmail.com',
      })
    }
  }
}
</script>
```

When you hit the `Send` button now, you should receive an email into your inbox!

That's basically it, I hope that this is of use for some of you.

## Final Thoughts

You can use the module to easily setup email sending capabilities. If you plan to build a bigger SaaS that sends a lot of emails, an async solution that does the sending via a cronjob or via server-side hooks is probably a better idea. But for a first-off solution, it should work fine.
