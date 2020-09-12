/**
 * @Author: Caven
 * @Date: 2020-09-12 23:53:32
 */

import DcBillboard from './billboard'

/* istanbul ignore next */
DcBillboard.install = function(Vue) {
  Vue.component(DcBillboard.name, DcBillboard)
}

export default DcBillboard
