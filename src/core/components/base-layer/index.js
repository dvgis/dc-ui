/**
 * @Author: Caven
 * @Date: 2020-09-12 22:09:53
 */

import DcBaseLayer from './base-layer'

/* istanbul ignore next */
DcBaseLayer.install = function(Vue) {
  Vue.component(DcBaseLayer.name, DcBaseLayer)
}

export default DcBaseLayer
