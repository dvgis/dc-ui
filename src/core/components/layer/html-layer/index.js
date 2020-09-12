/**
 * @Author: Caven
 * @Date: 2020-09-12 23:17:28
 */

import DcHtmlLayer from './html-layer'

/* istanbul ignore next */
DcHtmlLayer.install = function(Vue) {
  Vue.component(DcHtmlLayer.name, DcHtmlLayer)
}

export default DcHtmlLayer
