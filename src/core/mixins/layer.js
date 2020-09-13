/**
 * @Author: Caven
 * @Date: 2020-09-12 21:59:32
 */

export default {
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
      this.$dcComp && (this.$dcComp.show = newVal)
    }
  },
  methods: {
    _addToViewer() {
      this.$viewer && this.$viewer.addLayer(this.$dcComp)
    },
    _addToLayerGroup() {
      this.$layerGroup && this.$layerGroup.addLayer(this.$dcComp)
    }
  },
  mounted() {
    this.$on('on-layer-group-ready', this.onLayerGroupReady)
  },
  destroyed() {
    this.$viewer && this.$viewer.removeLayer(this.$dcComp)
    this.$layerGroup && this.$layerGroup.removeLayer(this.$dcComp)
  }
}
