<script>
import { map } from '@dword-design/functions'

export default {
  functional: true,
  props: {
    value: {},
  },
  render: context => (
    <div {...context.data} class="columns is-multiline">
      {context.props.value
        |> map(project => (
          <div class="column is-one-third">
            <article class="card is-hover-shadow" style={{ height: '100%' }}>
              {project.imageUrl && (
                <header class="card-image">
                  <figure class="image is-3by2">
                    <img aria-hidden="true" src={project.imageUrl} />
                  </figure>
                </header>
              )}
              <section class="card-content is-size-7">
                <h3 class="title is-5">
                  <a
                    class="stretched-link has-text-dark"
                    href={project.projectUrl}
                    target="_blank"
                  >
                    {project.title}
                  </a>
                </h3>
                <div class="content" domPropsInnerHTML={project.description} />
              </section>
            </article>
          </div>
        ))}
    </div>
  ),
}
</script>
