import OrDialog from './Dialog.vue';
import { createApp, h, ref } from 'vue';

export const openDialog = (options) => {
  const {title, content, ok, cancel} = options
  const visible = ref(true)
  const div = document.createElement('div')
  document.body.appendChild(div)

  const closeDialog = () => {
    app.unmount(div)
    div.remove()
  }

  const app = createApp({
    render() {
      return h(
        OrDialog,
        {
          visible,
          "onUpdate:visible": (newVal) => {
            if (newVal === false) {
              closeDialog()
            }
          },
          ok, cancel
        },
        {
          title,
          'default': content
        }
      )
    }
  })
  app.mount(div)
}