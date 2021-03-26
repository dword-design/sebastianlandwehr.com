<script>
import text from '@/assets/data-privacy.html'

export default {
  head: {
    title: 'Data Privacy',
  },
  render: () => (
    <main class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-9">
            <div class="content" domPropsInnerHTML={text} />
          </div>
        </div>
      </div>
    </main>
  ),
}
</script>
