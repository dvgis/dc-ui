/**
 * @Author: Caven
 * @Date: 2020-09-12 22:09:53
 */

import BaseLayer from './base-layer'

/* istanbul ignore next */
BaseLayer.install = function(Vue) {
  Vue.component(BaseLayer.name, BaseLayer)
}

export default BaseLayer
