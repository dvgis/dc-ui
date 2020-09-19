/**
 * @Author: Caven
 * @Date: 2020-09-12 20:02:52
 */

export default {
  methods: {
    onDcReady() {
      this.$dcReady = true
    },
    onViewerReady(viewer) {
      this.$viewer = viewer
      this.initComponent && this.initComponent()
      this._addToViewer && this._addToViewer()
    },
    onLayerGroupReady(layerGroup) {
      this.$layerGroup = layerGroup
      this.initComponent && this.initComponent()
      this._addToLayerGroup && this._addToLayerGroup()
    },
    onLayerReady(layer) {
      this.$layer = layer
      this.initComponent && this.initComponent()
      this._addToLayer && this._addToLayer()
    },
    onRoamingControllerReady(controller) {
      this.$controller = controller
      this.initComponent && this.initComponent()
      this._addToController && this._addToController()
    }
  },
  mounted() {
    this.$on('on-dc-ready', this.onDcReady)
  }
}
