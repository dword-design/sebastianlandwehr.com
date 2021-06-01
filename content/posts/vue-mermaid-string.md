---
title: Generating Beautiful Flowchart Diagrams With Mermaid and Vue/Nuxt
---

Hey folks, today I want to show you how to generate flowchart diagrams in a Vue or Nuxt application using [vue-mermaid-string](https://github.com/dword-design/vue-mermaid-string) and [nuxt-mermaid-string](https://github.com/dword-design/nuxt-mermaid-string). They both help integrating the wonderful [Mermaid library](https://mermaid-js.github.io/) into your Vue-based projects.

## Setup

Alright, let's stick to Vue for now and see later how it works for Nuxt. First install the component via NPM or Yarn:

There are several ways to add the component to your project. The quickest solution is via CDN like this:

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/mermaid/dist/mermaid.min.js"></script>
<script src="https://unpkg.com/vue-mermaid-string"></script>
```

Note that you also need to add `mermaid` itself.

Alternatively, install it via a package manager:

```bash
# npm
$ npm install vue-mermaid-string

# Yarn
$ yarn add vue-mermaid-string
```

And register the component. You can do it locally:

```js
<script>
import VueMermaidString from 'vue-mermaid-string'

export default {
  components: {
    VueMermaidString,
  },
}
</script>
```

Globally:

```js
import Vue from 'vue'
import VueMermaidString from 'vue-mermaid-string'

Vue.component('VueMermaidString', VueMermaidString)
```

Or as a plugin:

```js
import Vue from 'vue'
import VueMermaidString from 'vue-mermaid-string'

Vue.use(VueMermaidString)
```

## Let's Draw some serious stuff

Alright, now let's start drawing a diagram! Since probably most of the readers are JavaScript fans, we create a little tech tree for demonstration purposes 😊.

Here is the code needed to display the diagram. We are also adding [endent](https://github.com/indentjs/endent) to make life easier with multi-line strings.

```html
<template>
  <div id="app">
    <vue-mermaid-string :value="diagram" />
  </div>
</template>
```

```js
<script>
import VueMermaidString from "vue-mermaid-string";
import endent from "endent";

export default {
  computed: {
    diagram: () => endent`
      graph TD
        DateTime[Date and time]

        JavaScript --> Frameworks
        JavaScript --> DateTime
        JavaScript --> 3D
        Frameworks --> Vue.js
        Frameworks --> React
        DateTime --> Moment.js
        DateTime --> date-fns
        3D --> Three.js
        3D --> Babylon.js
    `,
  },
  components: {
    VueMermaidString,
  },
};
</script>
```

This results in the following diagram:

![Diagram with JavaScript frameworks (Vue.js, React), DateTime libraries (Moment.js, date-fns), and 3D libraries (Three.js, Babylon.js)](/blog/vue-mermaid-string/normal.png)

Great! You can also edit the diagram string (for example the node labels), and it updates the generated one accordingly.

As a next step we can change the colors for each library type. I've used [Paletton](https://www.paletton.com/#uid=73+1p0k2O++00++00++7n++be+Z) to generate a tetradic color scheme and applied the colors to the corresponding nodes. The result looks like this:

<p>
  <iframe src="https://codesandbox.io/embed/demo-vue-mermaid-string-e2sp4?codemirror=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"
    style="width:100%; height:500px; border-right:1px solid #000; border-radius: 4px; overflow:hidden;"
    title="demo-vue-mermaid-string"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  >
  </iframe>
</p>

## Usage with Nuxt

If you are a Nuxt user, it is often more convenient to add a module to your project and then have everything available right away. There is [nuxt-mermaid-string](https://github.com/dword-design/nuxt-mermaid-string), which basically wraps the vue component.

Simply install it via `npm install nuxt-mermaid-string` or `yarn add nuxt-mermaid-string`.

Then add it to your `nuxt.config.js` like this:

```js
export default {
  modules: ['nuxt-mermaid-string'],
}
```

And there we go. The rest works like with plain Vue!

## Conclusion

In this article we had a look at diagram generation in Vue apps. I hope you liked it and it's of some use for you!

You help me know if people like the packages by leaving a GitHub star at [vue-mermaid-string](https://github.com/dword-design/vue-mermaid-string) and/or [nuxt-mermaid-string](https://github.com/dword-design/vue-mermaid-string) 🌟.
