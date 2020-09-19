/**
 * @Author: Caven
 * @Date: 2020-09-12 21:59:32
 */

import comp from './comp'

export default {
  mixins: [comp],
  props: {
    id: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: true
    },
    attr: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  watch: {
    show(newVal, oldVal) {
      this._setVisible(newVal)
    },
    attr(newVal, oldVal) {
      this._setAttr(newVal)
    }
  },
  methods: {
    _setVisible(visible) {
      this.$dcComp && (this.$dcComp.show = visible)
    },
    _setAttr(attr) {
      this.$dcComp && (this.$dcComp.attr = attr)
    },
    _addToViewer() {
      this.$viewer && this.$viewer.addLayer(this.$dcComp)
    },
    _addToLayerGroup() {
      this.$layerGroup && this.$layerGroup.addLayer(this.$dcComp)
    }
  },
  mounted() {
    this.$on('on-viewer-ready', this.onViewerReady)
    this.$on('on-layer-group-ready', this.onLayerGroupReady)
  },
  destroyed() {
    this.$viewer && this.$viewer.removeLayer(this.$dcComp)
    this.$layerGroup && this.$layerGroup.removeLayer(this.$dcComp)
  }
}
