/**
 * @Author: Caven
 * @Date: 2020-09-12 21:28:52
 */

import VectorLayer from './vector-layer'

/* istanbul ignore next */
VectorLayer.install = function(Vue) {
  Vue.component(VectorLayer.name, VectorLayer)
}

export default VectorLayer
