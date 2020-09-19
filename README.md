# DC-UI

<p>
<img src="https://img.shields.io/badge/license-MIT-blue"/>
<img src="https://img.shields.io/github/package-json/v/dvgis/dc-ui?color=orange&logo=github" />
<img src="https://img.shields.io/npm/dw/@dvgis/dc-ui?logo=npm"/>
</p>

[**🇨🇳 中文**](./README_zh.md) | [**🇬🇧English**](./README.md)

> DC-UI is a component library based on vue2.x and DC-SDK.

> [Home Page](http://dc.dvgis.cn)

```warningH
Tips：This SDK is JS+GIS framework package. Developers need to have some front-end technology and GIS related technology
```

## Installation

> CDN

```html
<!-- Vue  -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!--Basic Package-->
<script src="libs/dc-sdk/dc.base.min.js"></script>
<!--Core Package-->
<script src="libs/dc-sdk/dc.core.min.js"></script>
<!--UI Package-->
<script src="libs/dc-ui/dc.ui.min.js"></script>
<!--Main Style Sheet -->
<link href="libs/dc-sdk/dc.core.min.css" rel="stylesheet" type="text/css" />
```

> NPM / YARN

```shell
   yarn add @dvgis/dc-sdk
   npm install @dvgis/dc-sdk
```

```js
import Vue from 'vue'
import DC from  'dvgis/dc-sdk/dist/dc.base.min' //Basic Package
import DcCore from 'dvgis/dc-sdk/dist/dc.core.min' //Core Package
import DcUI from 'dvgis/dc-ui/dist/dc.ui.min' //Core Package
import 'dvgis/dc-sdk/dist/dc.core.min.css' // Main Style Sheet
```

## Setting

> Vue

```js
// vue.config.js

const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@dvgis'

module.exports = {
  // other settings
  chainWebpack: config => {
    config.resolve.alias.set('dvgis', path.resolve(__dirname, dvgisDist))
    config.plugin('copy').use(CopywebpackPlugin, [
      [
        {
          from: path.join(dvgisDist, 'dc-sdk/dist/resources'),
          to: 'libs/dc-sdk/resources'
        }
      ]
    ])
  }
}
```

## Start

```js
DC.use(DcCore)
Vue.use(DcUI)
```

## Documentation

[DC Api](https://resource.dvgis.cn/dc-api)

[Cesium Api](https://cesium.com/docs/cesiumjs-ref-doc/)

## Demo

|  ![picture](http://dc.dvgis.cn/examples/images/info/start.png) | ![picture](http://dc.dvgis.cn/examples/images/info/coord.png) | ![picture](http://dc.dvgis.cn/examples/images/baselayer/tencent.png) | ![picture](http://dc.dvgis.cn/examples/images/baselayer/tdt.png) |
|  :-----------------------------------------------------------: | :-----------------------------------------------------------: | :------------------------------------------------------------------: | :--------------------------------------------------------------: |
|  ![picture](http://dc.dvgis.cn/examples/images/baselayer/amap.png) | ![picture](http://dc.dvgis.cn/examples/images/baselayer/baidu.png) | ![picture](http://dc.dvgis.cn/examples/images/layer/vector.png)  |  ![picture](http://dc.dvgis.cn/examples/images/layer/cluster.png)      |
|  ![picture](http://dc.dvgis.cn/examples/images/layer/geojson.png) | ![picture](http://dc.dvgis.cn/examples/images/layer/tileset.png) | ![picture](http://dc.dvgis.cn/examples/images/layer/html.png) |   ![picture](http://dc.dvgis.cn/examples/images/overlay/point_icon.png)   |
|  ![picture](http://dc.dvgis.cn/examples/images/overlay/point_base.png) | ![picture](http://dc.dvgis.cn/examples/images/overlay/circle.png) | ![picture](http://dc.dvgis.cn/examples/images/overlay/polyline_material.png) | ![picture](http://dc.dvgis.cn/examples/images/overlay/polygon_height.png) |

[More>>](http://dc.dvgis.cn/#/examples)

## Copyright statement

```warning
1. The framework is a basic platform, completely open source, which can be modified and reconstructed by any individual or institution without our authorization.
2. A series of targeted plug-ins and tools will be added later, and an appropriate amount of open source.
3. Free and permanent use by any person or institution subject to the following conditions:
  1) complete package reference;
  2) reserve this copyright information in the console output
We reserve the right of final interpretation of this copyright information.
```

## Thanks
