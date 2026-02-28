<template>
  <div class="columns is-multiline">
    <div
      v-for="project in value"
      :key="project.title"
      class="column is-one-third"
    >
      <article
        :class="[
          'card',
          'is-scale-on-hover',
          { 'is-disabled': project.isArchived },
        ]"
        :style="{ height: '100%' }"
      >
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
              rel="noopener"
              target="_blank"
            >
              {{ project.title }}
            </a>
            {{ ' ' }}
            <b-tag v-if="project.isArchived" size="is-small" type="is-warning"
              >Archived</b-tag
            >
          </h3>
          <!-- eslint-disable vue/no-v-html -->
          <div
            :class="['content', $style.projectContent]"
            v-html="project.description"
          />
          <!-- eslint-enable -->
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ value: Project[] }>();
</script>

<style lang="scss" module>
.project-content a {
  position: relative;
  z-index: 2;
}
</style>
