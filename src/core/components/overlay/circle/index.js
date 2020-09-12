/**
 * @Author: Caven
 * @Date: 2020-09-13 00:24:07
 */

import DcCircle from './circle'

/* istanbul ignore next */
DcCircle.install = function(Vue) {
  Vue.component(DcCircle.name, DcCircle)
}

export default DcCircle
