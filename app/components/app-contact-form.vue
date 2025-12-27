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

<script setup lang="ts">
import endent from 'endent';

import { appName } from '@@/model/variables';

const {
  vueApp: {
    config: {
      globalProperties: { $buefy },
    },
  },
} = useNuxtApp();

const mail = useMail();
const email = ref('');
const error = ref('');
const honeypot = useTemplateRef('honeypot');
const isLoading = ref(false);
const message = ref('');
const myEmail = ref('');

const submit = async () => {
  try {
    honeypot.value!.validate(); // TODO: Honeypot is mounted
    isLoading.value = true;

    await mail.send({
      from: 'info@sebastianlandwehr.com',
      replyTo: email.value,
      subject: `${appName} Message`,
      text: endent`
        From: ${email.value}

        ${message.value}
      `,
    });

    $buefy.toast.open('Your message has been sent successfully.');
    email.value = '';
    message.value = '';
    error.value = '';
  } catch (_error) {
    error.value = _error instanceof Error ? _error.message : String(_error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => (myEmail.value = 'info@sebastianlandwehr.com'));
</script>
