<template>
  <b-modal :active="$consent.isOpened" :can-cancel="false" :width="640">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h2>Cookie Settings</h2>
          <p>
            By accepting cookies, you help me to improve your browsing
            experience, to measure traffic, and to understand user behavior and
            needs.
          </p>
          <p>
            See the
            <b-button class="is-link" @click="openDataPrivacy">
              data privacy
            </b-button>
            for details.
          </p>
          <hr />
          <form @submit.prevent="submit">
            <b-field
              message="These cookies are needed to keep the website running."
            >
              <b-switch :value="true" disabled>Essential cookies</b-switch>
            </b-field>
            <b-field
              message="These cookies are needed to collect anonymous user statistics."
            >
              <b-switch v-model="editedSettings.statistics"
                >Statistics cookies</b-switch
              >
            </b-field>
            <div class="buttons is-right">
              <b-button name="save" native-type="submit"
                >Save settings</b-button
              >
              <b-button name="accept-all" native-type="submit" type="is-primary"
                >Accept all cookies</b-button
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  computed: {
    isOpened() {
      return this.$consent.isOpened
    },
  },
  data: () => ({
    editedSettings: {},
  }),
  methods: {
    openDataPrivacy() {
      return this.$buefy.modal.open({
        component: 'b-card-modal',
        parent: this,
        props: { inner: 'app-data-privacy' },
      })
    },
    submit($event) {
      if ($event.submitter.name === 'accept-all') {
        this.$set(this.editedSettings, 'statistics', true)
      }

      return (this.$consent.settings = this.editedSettings)
    },
  },
  mounted() {
    if (Object.keys(this.$consent.settings).length === 0) {
      this.$consent.open()
    }
  },
  watch: {
    isOpened: {
      handler() {
        if (this.isOpened) {
          this.editedSettings = { statistics: false, ...this.$consent.settings }
        }
      },
      immediate: true,
    },
  },
}
</script>
