// Import main css
import '~/assets/style/style.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// Import image url builder
import urlForImage from './utils/urlForImage'

// Import Bootstrap Components
import {
  NavbarPlugin,
  CardPlugin,
  VBScrollspyPlugin,
  ListGroupPlugin,
  ModalPlugin,
  ButtonPlugin
} from 'bootstrap-vue'

import VueSimpleMarkdown from 'vue-simple-markdown'
import '../cloudinary.js'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(NavbarPlugin)
  Vue.use(CardPlugin)
  Vue.use(VBScrollspyPlugin)
  Vue.use(ListGroupPlugin)
  Vue.use(ModalPlugin)
  Vue.use(ButtonPlugin)

  Vue.use(VueSimpleMarkdown)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage
}
