<script>
import { en as legalNotice } from '@dword-design/legal-notice'

export default {
  head: {
    title: 'Legal Notice',
  },
  render: () => (
    <main class="section">
      <div class="container is-content">
        <div class="content" domPropsInnerHTML={legalNotice} />
        <div class="content">
          <h3>Credits</h3>
          Xing icon by{' '}
          <a href="https://www.svgrepo.com/svg/50992/xing-logo">svgrepo.com</a>
        </div>
      </div>
    </main>
  ),
}
</script>
