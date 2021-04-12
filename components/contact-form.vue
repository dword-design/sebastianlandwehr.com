<script>
import { endent } from '@dword-design/functions'

import { appName } from '@/model/variables'

export default {
  data: () => ({
    email: '',
    error: '',
    isLoading: false,
    message: '',
  }),
  methods: {
    async submit() {
      try {
        await this.$recaptcha.getResponse()
      } catch (error) {
        this.error = 'You have to fill in the captcha.'

        return
      }
      this.isLoading = true
      await this.$mail.send({
        from: this.email,
        subject: `${appName} Nachricht`,
        text: endent`
          Von: ${this.email}

          ${this.message}
        `,
      })
      this.$buefy.toast.open('Your message has been sent successfully.')
      this.isLoading = false
      this.email = ''
      this.message = ''
      this.error = ''
    },
  },
  render() {
    return (
      <div class="container">
        <div class="columns is-centered">
          <form class="column is-two-thirds" v-on:submit_prevent={this.submit}>
            <h2 class="title">Any questions?</h2>
            <div class="content is-size-5">
              <p>I'll happily answer your questions and take your feedback!</p>
            </div>
            <b-field label="Email">
              <b-input required type="email" v-model={this.email} />
            </b-field>
            <b-field label="Message">
              <b-input
                required
                rows="8"
                type="textarea"
                v-model={this.message}
              />
            </b-field>
            <b-field>
              <recaptcha />
            </b-field>
            {!!this.error && (
              <b-field>
                <b-notification type="is-danger">{this.error}</b-notification>
              </b-field>
            )}
            <div class="buttons">
              <b-button
                loading={this.isLoading}
                native-type="submit"
                type="is-inverted"
              >
                Send
              </b-button>
            </div>
          </form>
        </div>
      </div>
    )
  },
}
</script>
