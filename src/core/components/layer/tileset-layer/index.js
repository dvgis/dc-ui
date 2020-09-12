/**
 * @Author: Caven
 * @Date: 2020-09-12 22:20:22
 */

import TilesetLayer from './tileset-layer'

/* istanbul ignore next */
TilesetLayer.install = function(Vue) {
  Vue.component(TilesetLayer.name, TilesetLayer)
}

export default TilesetLayer
