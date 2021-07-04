<script>
import text from '@/assets/data-privacy.html'

export default {
  head: {
    title: 'Data Privacy',
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
