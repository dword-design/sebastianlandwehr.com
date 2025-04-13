<template>
  <div class="container">
    <div class="columns is-centered">
      <form class="column is-two-thirds" @submit.prevent="submit">
        <h2 class="title">Any questions?</h2>
        <div class="content">
          <p>
            I'll happily answer your questions and take your feedback!
            <br />
            Write to{{ ' ' }}
            <a v-if="myEmail" :href="`mailto:${myEmail}`">{{ myEmail }}</a>
            <template v-else>[email protected]</template>, or fill out the form
            below:
          </p>
        </div>
        <b-field label="Email">
          <b-input v-model="email" required type="email" />
        </b-field>
        <vue-honeypot ref="honeypot" />
        <b-field label="Message">
          <b-input v-model="message" required rows="8" type="textarea" />
        </b-field>
        <b-field v-if="error">
          <b-notification type="is-danger">{{ error }}</b-notification>
        </b-field>
        <div class="buttons">
          <b-button
            icon-left="mdi-send"
            :loading="isLoading"
            native-type="submit"
            type="is-primary"
          >
            Send
          </b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { endent } from '@dword-design/functions';

import { appName } from '@/model/variables.js';

export default {
  data: () => ({
    email: '',
    error: '',
    honeypot: '',
    isLoading: false,
    message: '',
    myEmail: '',
  }),
  methods: {
    async submit() {
      try {
        this.$refs.honeypot.validate();
        this.isLoading = true;

        await this.$mail.send({
          from: 'info@sebastianlandwehr.com',
          replyTo: this.email,
          subject: `${appName} Message`,
          text: endent`
            From: ${this.email}

            ${this.message}
          `,
        });

        this.$buefy.toast.open('Your message has been sent successfully.');
        this.email = '';
        this.message = '';
        this.error = '';
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.myEmail = 'info@sebastianlandwehr.com';
  },
};
</script>
