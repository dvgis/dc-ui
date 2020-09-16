/**
 * @Author: Caven
 * @Date: 2020-09-16 18:25:50
 */

import CzmlLayer from './czml-layer'

/* istanbul ignore next */
CzmlLayer.install = function(Vue) {
  Vue.component(CzmlLayer.name, CzmlLayer)
}

export default CzmlLayer
