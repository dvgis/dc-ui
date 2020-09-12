/**
 * @Author: Caven
 * @Date: 2020-09-13 01:19:56
 */

import Tileset from './tileset'

/* istanbul ignore next */
Tileset.install = function(Vue) {
  Vue.component(Tileset.name, Tileset)
}

export default Tileset
