<script>
import { endent } from '@dword-design/functions'
import MdiSend from '@mdi/svg/svg/send.svg'

import { appName } from '@/model/variables.js'

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
        this.$refs.honeypot.validate()
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
        this.email = ''
        this.message = ''
        this.error = ''
      } catch (error) {
        this.error = error.message
      } finally {
        this.isLoading = false
      }
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
            <div class="content">
              <p>
                I'll happily answer your questions and take your feedback!
                <br />
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
            <vue-honeypot ref="honeypot" />
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
              <button
                class="button is-primary"
                loading={this.isLoading}
                type="submit"
              >
                <MdiSend class="icon" />
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  },
}
</script>
