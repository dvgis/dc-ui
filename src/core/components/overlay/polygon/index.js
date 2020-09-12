/**
 * @Author: Caven
 * @Date: 2020-09-12 23:57:06
 */

import Polygon from './polygon'

/* istanbul ignore next */
Polygon.install = function(Vue) {
  Vue.component(Polygon.name, Polygon)
}

export default Polygon
