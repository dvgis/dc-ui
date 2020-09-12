/**
 * @Author: Caven
 * @Date: 2020-09-12 22:20:22
 */

import DcTilesetLayer from './tileset-layer'

/* istanbul ignore next */
DcTilesetLayer.install = function(Vue) {
  Vue.component(DcTilesetLayer.name, DcTilesetLayer)
}

export default DcTilesetLayer
