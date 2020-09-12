/**
 * @Author: Caven
 * @Date: 2020-09-12 23:56:08
 */

import DcPolyline from './polyline'

/* istanbul ignore next */
DcPolyline.install = function(Vue) {
  Vue.component(DcPolyline.name, DcPolyline)
}

export default DcPolyline
