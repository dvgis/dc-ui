/**
 * @Author: Caven
 * @Date: 2020-09-12 21:28:52
 */

import DcVectorLayer from './vector-layer'

/* istanbul ignore next */
DcVectorLayer.install = function(Vue) {
  Vue.component(DcVectorLayer.name, DcVectorLayer)
}

export default DcVectorLayer
