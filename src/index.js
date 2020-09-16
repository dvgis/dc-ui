/**
 * @Author: Caven
 * @Date: 2020-09-13 00:46:38
 */

import Viewer from './core/components/viewer'
import BaseLayer from './core/components/base-layer'
import LayerGroup from './core/components/layer/layer-group'
import VectorLayer from './core/components/layer/vector-layer'
import HtmlLayer from './core/components/layer/html-layer'
import GeoJsonLayer from './core/components/layer/geojson-layer'
import TilesetLayer from './core/components/layer/tileset-layer'
import Point from './core/components/overlay/point'
import Billboard from './core/components/overlay/billboard'
import Polyline from './core/components/overlay/polyline'
import Polygon from './core/components/overlay/polygon'
import DivIcon from './core/components/overlay/div-icon'
import Circle from './core/components/overlay/circle'
import Label from './core/components/overlay/label'
import Model from './core/components/overlay/model'
import Tileset from './core/components/overlay/tileset'

const components = [
  Viewer,
  BaseLayer,
  LayerGroup,
  VectorLayer,
  HtmlLayer,
  GeoJsonLayer,
  TilesetLayer,
  Point,
  Billboard,
  Polyline,
  Polygon,
  DivIcon,
  Circle,
  Label,
  Model,
  Tileset
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: __VERSION__,
  compile_time: __TIME__,
  install,
  Viewer,
  BaseLayer,
  LayerGroup,
  VectorLayer,
  HtmlLayer,
  GeoJsonLayer,
  TilesetLayer,
  Point,
  Billboard,
  Polyline,
  Polygon,
  DivIcon,
  Circle,
  Label,
  Model,
  Tileset
}
