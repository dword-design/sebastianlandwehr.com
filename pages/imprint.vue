<script>
import text from '@/assets/imprint.html'

export default {
  head: {
    title: 'Imprint',
  },
  render: () => (
    <main class="section">
      <div class="container is-content">
        <div class="content" domPropsInnerHTML={text} />
      </div>
    </main>
  ),
}
</script>
