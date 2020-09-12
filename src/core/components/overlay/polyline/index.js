/**
 * @Author: Caven
 * @Date: 2020-09-12 23:56:08
 */

import Polyline from './polyline'

/* istanbul ignore next */
Polyline.install = function(Vue) {
  Vue.component(Polyline.name, Polyline)
}

export default Polyline
