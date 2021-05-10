---
title: '@nuxt/content: How to Keep createdAt and updatedAt Valid After Cloning'
---

I recently tried out [@nuxt/content](https://github.com/nuxt/content), a Git-based CMS for Nuxt projects. And I really like it! It allows me to write markdown files and host them right in my existing project.

One thing I noticed when deploying the project to my server was that the `createdAt` and `updatedAt` fields were always reset and didn't reflect the actual dates. The reason for this is that Git does not keep file metadata. This means that the timestamps that `@nuxt/content` relies on are of no use.

## Git to the Rescue!

One way to fix this is not to use the file stats, but instead use the Git history for this. Special thanks to [Andrew Kreuzer](http://andrewkreuzer.ca) for the initial idea. We check the history for each file and take the earliest commit date as `createdAt` and the latest as `updatedAt`.

Requirement for this is that Git is installed on the build system and that the history is actually checked out. There will be problems if a shallow clone is made on CI, in this case the cloning has to be configured accordingly.

## Using the nuxt-content-git Module to Make Things Easy

I created the Nuxt module [nuxt-content-git](https://github.com/dword-design/nuxt-content-git) to make the setup plug-and-play. You probably do not want to reinvent the wheel in each project.

Install the module with `npm install nuxt-content-git` and add it to your `nuxt.config.js` like this:

```js
export default {
  modules: [
    'nuxt-content-git',
    '@nuxt/content',
  ],
}
```

Note that it is important to add it **before** `@nuxt/content`, so `@nuxt/content` knows about the hooks that our helper module installs.

**And that was basically it! The rest works behind the scenes. Your dates should be up to *date* 😊.**

---

Let me know if you like this module and leave a [star at GitHub](https://github.com/dword-design/nuxt-content-git) 🌟.
