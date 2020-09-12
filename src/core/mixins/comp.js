/**
 * @Author: Caven
 * @Date: 2020-09-12 20:02:52
 */

export default {
  methods: {
    registerComponent() {
      this.initComponent && this.initComponent()
    },
    onViewerReady(viewer) {
      this.$viewer = viewer
      this._addToViewer && this._addToViewer(viewer)
    },
    onLayerGroupReady(layerGroup) {
      this.$layerGroup = layerGroup
      this._addToLayerGroup && this._addToLayerGroup()
    },
    onLayerReady(layer) {
      this.$layer = layer
      this._addToLayer && this._addToLayer()
    }
  }
}
