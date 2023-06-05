<template>
  <main>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-two-fifths">
            <figure class="image is-one-thirdby3">
              <img alt="Portrait" src={imageUrl} />
            </figure>
          </div>
          <div class="column">
            <div class="content">
              <h1>Support me</h1>
              <p>Hey there! 🙌</p>
              <p>
                Already big hands for you that you have clicked on the
                "Support me" link in the navigation bar! This basically means
                that you think about supporting a developer contributing to
                the open-source community. So thanks already for this!
              </p>
              <p>
                My main goal when working on software packages is to
                open-source it in some way in the future. Sometimes it takes a
                lot of time and concept, but in the end this is the goal.
                Firstly, because making them available to others makes them
                better in the end. Secondly, I'm using a lot of open-source
                packages for my end-user projects, so I kind of believe in
                this ecosystem ❤️.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section has-background-light">
      <div class="container is-content">
        <div class="content">
          <h2>What I'm doing</h2>
          <p>
            Besides putting the packages online, I am very keen on
            actively&nbsp;
            <em>maintaining</em>&nbsp;them over time. There are a lot of great
            tools available for free, but a lot are outdated, which is a pity.
            So one of my principles is to have all packages continuously
            integrated and automatically tested. Also, I'm using&nbsp;
            <a
              href="https://www.whitesourcesoftware.com/free-developer-tools/renovate/"
              target="_blank"
            >
              Renovate
            </a>
            &nbsp;to keep dependencies up-to-date.
          </p>
          <p>
            As you can imagine this takes a lot of time and also resources! ⚙️
          </p>
          <p>
            <strong>By donating, you help me …</strong>
          </p>
          <ol>
            <li>Ensure future quality of my published projects</li>
            <li>Open-source more of my projects (there are a lot!)</li>
            <li>
              Have more time for my blog. I want to share knowledge with the
              community 🤝.
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container is-content">
        <div class="content mb-4">
          <h2>What you can do 🍻</h2>
          <p>
            There are various ways to support me. Any help is apprechiated, so
            worries thinking about which amount is appropriate.
          </p>
        </div>
        <ul class="mb-6">
          {donationPlatforms
            |> map(platform => {
              platform = { imageMaxWidth: '13rem', ...platform }

              return (
                <li class="columns is-vcentered is-variable is-0-mobile has-border-bottom">
                  <span class="column" style="max-width: 13rem">
                    <a
                      class="is-block mx-auto"
                      href={platform.url}
                      style={`max-width: ${platform.imageMaxWidth}`}
                      target="_blank"
                    >
                      <img
                        alt={platform.title}
                        class="is-block"
                        src={platform.imageUrl}
                      />
                    </a>
                  </span>
                  <span class="column">{platform.description}</span>
                </li>
              )
            })}
        </ul>
        <p class="is-size-5 has-text-centered">
          Thanks a lot for your support!
          <br />I also want to thank the supporters who donated already ❤️.
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useMeta } from '#imports'
import imageUrl from '@/assets/support-me.jpg'
import donationPlatforms from '@/model/donation-platforms.js'

useMeta({ title: 'Support me' })
</script>
