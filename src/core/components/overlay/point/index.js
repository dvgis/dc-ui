/**
 * @Author: Caven
 * @Date: 2020-09-12 23:45:46
 */

import Point from './point'

/* istanbul ignore next */
Point.install = function(Vue) {
  Vue.component(Point.name, Point)
}

export default Point
