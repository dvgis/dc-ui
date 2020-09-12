/**
 * @Author: Caven
 * @Date: 2020-09-12 23:53:32
 */

import Billboard from './billboard'

/* istanbul ignore next */
Billboard.install = function(Vue) {
  Vue.component(Billboard.name, Billboard)
}

export default Billboard
