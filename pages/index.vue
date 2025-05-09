<template>
  <main>
    <section class="section is-bordered">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="content pb-6-tablet">
              <p>
                I'm Sebastian Landwehr, a freelance web developer from Bonn in
                Germany.
              </p>
              <p>
                My passion is all about JavaScript, especially related to
                client-side development. Most projects I'm developing are based
                on Vue.js and Nuxt.js, which allows me to use the whole tech
                stack from server to client. I'm also heavily into open source
                development and I'm contributing lots of packages in the NPM
                world.
              </p>
              <p>
                When I'm developing apps, I prefer to use Firebase as a BaaS.
              </p>
              <p>
                Besides programming, I'm writing songs, playing guitar and
                singing at concerts or karaoke sessions. I'm also into deep
                discussions, philosophy, psychology, and good movies.
              </p>
            </div>
          </div>
          <div class="column">
            <figure
              class="image mx-auto h-20rem-mobile"
              :style="{ maxWidth: '24rem' }"
            >
              <img
                alt="Portrait"
                class="is-rounded has-shadow-circle"
                :src="portraitUrl"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <app-libraries />
      </div>
    </section>
    <section class="section is-medium has-background-light">
      <div class="container">
        <h2 class="title">Websites and Web Apps</h2>
        <app-projects class="mb-6" :value="websitesAndWebApps" />

        <h2 class="title">Open-Source Libraries</h2>
        <app-projects :value="openSourceLibraries" />
        <p class="has-text-centered mb-6 is-size-5">
          <span class="icon-text">
            <b-icon aria-hidden="true" icon="mdi-arrow-right-bold" />
            <a href="https://github.com/dword-design" target="_blank">
              Find more libraries on GitHub
            </a>
          </span>
        </p>

        <h2 class="title">Individual Projects</h2>
        <app-projects :value="individualProjects" />
      </div>
    </section>
    <section class="section is-medium">
      <app-contact-form />
    </section>
  </main>
</template>

<script>
import portraitUrl from '@/assets/portrait.jpg';
import individualProjects from '@/model/individual-projects.js';
import openSourceLibraries from '@/model/open-source-libraries.js';
import websitesAndWebApps from '@/model/websites-and-web-apps.js';

export default {
  computed: {
    individualProjects: () => individualProjects,
    openSourceLibraries: () => openSourceLibraries,
    portraitUrl: () => portraitUrl,
    websitesAndWebApps: () => websitesAndWebApps,
  },
};
</script>
