<script>
import text from '@/assets/data-privacy.html'

export default {
  auth: false,
  head: {
    title: 'Data Privacy',
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
