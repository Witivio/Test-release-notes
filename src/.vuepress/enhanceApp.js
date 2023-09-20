/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import Overview from './theme/components/overview'
import Teams from './theme/components/teams'
import Comments from './theme/components/comments'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component("Overview", Overview)
  Vue.component("Teams", Teams)
  Vue.component("Comments", Comments)
}
