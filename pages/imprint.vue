<script>
import text from '@/assets/imprint.html'

export default {
  head: {
    title: 'Imprint',
  },
  render: () => (
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-9">
            <div class="content" domPropsInnerHTML={text} />
          </div>
        </div>
      </div>
    </section>
  ),
}
</script>
