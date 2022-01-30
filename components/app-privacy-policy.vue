<script>
import getPrivacyPolicy from '@dword-design/get-privacy-policy'

export default {
  functional: true,
  render: () => (
    <div
      class="content"
      domPropsInnerHTML={getPrivacyPolicy('en', { contact: true })}
    />
  ),
}
</script>
