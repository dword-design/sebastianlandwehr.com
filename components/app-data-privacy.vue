<script>
import text from '@/assets/data-privacy.html'

export default {
  computed: {
    text: () => text,
  },
  functional: true,
  render: () => <div class="content" domPropsInnerHTML={text} />,
}
</script>
