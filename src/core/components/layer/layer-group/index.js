/**
 * @Author: Caven
 * @Date: 2020-09-12 21:28:52
 */

import DcLayerGroup from './layer-group'

/* istanbul ignore next */
DcLayerGroup.install = function(Vue) {
  Vue.component(DcLayerGroup.name, DcLayerGroup)
}

export default DcLayerGroup
