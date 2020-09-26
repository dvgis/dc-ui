/**
 * @Author: Caven
 * @Date: 2020-09-24 18:56:35
 */

import Terrain from './terrain'

/* istanbul ignore next */
Terrain.install = function(Vue) {
  Vue.component(Terrain.name, Terrain)
}

export default Terrain
