/**
 * @Author: Caven
 * @Date: 2020-09-13 00:24:07
 */

import Circle from './circle'

/* istanbul ignore next */
Circle.install = function(Vue) {
  Vue.component(Circle.name, Circle)
}

export default Circle
