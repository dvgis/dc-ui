/**
 * @Author: Caven
 * @Date: 2020-09-12 23:57:06
 */

import DcPolygon from './polygon'

/* istanbul ignore next */
DcPolygon.install = function(Vue) {
  Vue.component(DcPolygon.name, DcPolygon)
}

export default DcPolygon
