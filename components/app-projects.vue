<template>
  <div class="columns is-multiline">
    <div
      v-for="project in value"
      :key="project.title"
      class="column is-one-third"
    >
      <article class="card is-scale-on-hover" :style="{ height: '100%' }">
        <header v-if="project.imageUrl" class="card-image">
          <figure class="image is-3by2">
            <img aria-hidden="true" :src="project.imageUrl" />
          </figure>
        </header>
        <section class="card-content is-size-7">
          <h3 class="title is-5">
            <a
              class="is-stretched has-text-dark"
              :href="project.projectUrl"
              target="_blank"
            >
              {{ project.title }}
            </a>
          </h3>
          <div class="content" v-html="project.description" />
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {},
  },
}
</script>
