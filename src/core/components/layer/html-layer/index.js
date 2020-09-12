/**
 * @Author: Caven
 * @Date: 2020-09-12 23:17:28
 */

import HtmlLayer from './html-layer'

/* istanbul ignore next */
HtmlLayer.install = function(Vue) {
  Vue.component(HtmlLayer.name, HtmlLayer)
}

export default HtmlLayer
