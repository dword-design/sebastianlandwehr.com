<script>
import { endent } from '@dword-design/functions'

import { appName } from '@/model/variables'

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
      if (this.honeypot) {
        this.error = 'Look like you are a bot. You have filled out the legendary honeypot field!'
        return
      }
      this.isLoading = true
      await this.$mail.send({
        from: 'info@sebastianlandwehr.com',
        replyTo: this.email,
        subject: `${appName} Message`,
        text: endent`
          From: ${this.email}

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
  mounted() {
    this.myEmail = 'info@sebastianlandwehr.com'
  },
  render() {
    return (
      <div class="container">
        <div class="columns is-centered">
          <form class="column is-two-thirds" v-on:submit_prevent={this.submit}>
            <h2 class="title">Any questions?</h2>
            <div class="content is-size-5">
              <p>I'll happily answer your questions and take your feedback!</p>
              <p>
                Write to{' '}
                {this.myEmail ? (
                  <a href={`mailto:${this.myEmail}`}>{this.myEmail}</a>
                ) : (
                  '[email protected]'
                )}
                , or fill out the form below:
              </p>
            </div>
            <b-field label="Email">
              <b-input required type="email" v-model={this.email} />
            </b-field>
            <label>
              <span>Name</span>
              <input type="text" v-model={this.honeypot} style="display: none" />
            </label>
            <b-field label="Message">
              <b-input
                required
                rows="8"
                type="textarea"
                v-model={this.message}
              />
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
