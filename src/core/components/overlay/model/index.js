/**
 * @Author: Caven
 * @Date: 2020-09-13 00:01:26
 */

import DcModel from './model'

/* istanbul ignore next */
DcModel.install = function(Vue) {
  Vue.component(DcModel.name, DcModel)
}

export default DcModel
