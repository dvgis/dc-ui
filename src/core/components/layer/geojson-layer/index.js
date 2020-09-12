/**
 * @Author: Caven
 * @Date: 2020-09-12 23:07:35
 */

import GeoJsonLayer from './geojson-layer'

/* istanbul ignore next */
GeoJsonLayer.install = function(Vue) {
  Vue.component(GeoJsonLayer.name, GeoJsonLayer)
}

export default GeoJsonLayer
