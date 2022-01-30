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
      </div>
    </main>
  ),
}
</script>
