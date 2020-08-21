<script>
import Logo from '@/assets/logo.svg'
import { appName } from '@/model/variables'

export default {
  functional: true,
  render: context => (
    <b-navbar
      {...context.data}
      class="has-shadow is-spaced"
      wrapper-class="container"
    >
      <b-navbar-item
        aria-label={appName}
        class="is-size-5"
        slot="brand"
        tag="nuxt-server-link"
        to={{ name: 'index' }}
      >
        <Logo aria-hidden="true" style={{ width: '22rem' }} />
      </b-navbar-item>
      <b-navbar-item slot="end" tag="div">
        <app-accounts />
      </b-navbar-item>
    </b-navbar>
  ),
}
</script>
