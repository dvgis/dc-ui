/**
 * @Author: Caven
 * @Date: 2020-09-12 23:07:35
 */

import DcGeoJsonLayer from './geojson-layer'

/* istanbul ignore next */
DcGeoJsonLayer.install = function(Vue) {
  Vue.component(DcGeoJsonLayer.name, DcGeoJsonLayer)
}

export default DcGeoJsonLayer
