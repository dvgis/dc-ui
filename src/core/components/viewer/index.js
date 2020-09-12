/**
 * @Author: Caven
 * @Date: 2020-09-12 19:01:11
 */

import Viewer from './viewer'

/* istanbul ignore next */
Viewer.install = function(Vue) {
  Vue.component(Viewer.name, Viewer)
}

export default Viewer
