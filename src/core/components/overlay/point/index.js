/**
 * @Author: Caven
 * @Date: 2020-09-12 23:45:46
 */

import DcPoint from './point'

/* istanbul ignore next */
DcPoint.install = function(Vue) {
  Vue.component(DcPoint.name, DcPoint)
}

export default DcPoint
