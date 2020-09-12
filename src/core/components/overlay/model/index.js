/**
 * @Author: Caven
 * @Date: 2020-09-13 00:01:26
 */

import Model from './model'

/* istanbul ignore next */
Model.install = function(Vue) {
  Vue.component(Model.name, Model)
}

export default Model
