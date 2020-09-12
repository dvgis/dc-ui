/**
 * @Author: Caven
 * @Date: 2020-09-12 21:28:52
 */

import LayerGroup from './layer-group'

/* istanbul ignore next */
LayerGroup.install = function(Vue) {
  Vue.component(LayerGroup.name, LayerGroup)
}

export default LayerGroup
