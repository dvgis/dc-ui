/**
 * @Author: Caven
 * @Date: 2020-09-12 19:01:11
 */

import DcViewer from './viewer'

/* istanbul ignore next */
DcViewer.install = function(Vue) {
  Vue.component(DcViewer.name, DcViewer)
}

export default DcViewer
