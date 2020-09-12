/**
 * @Author: Caven
 * @Date: 2020-09-13 01:16:57
 */

import Label from './label'

/* istanbul ignore next */
Label.install = function(Vue) {
  Vue.component(Label.name, Label)
}

export default Label
