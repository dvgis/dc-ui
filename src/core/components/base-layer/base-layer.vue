<template></template>
<script>
import comp from '../../mixins/comp'

export default {
  name: 'DcBaseLayer',
  minixs: [comp],
  props: {
    layerType: {
      type: String
    },
    options: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  methods: {
    initComponent() {
      this.$dcComp = DC.ImageryLayerFactory.createImageryLayer(
        this.layerType,
        this.options
      )
    },
    _addToViewer() {
      this.$viewer && this.$viewer.addBaseLayer(this.$dcComp)
    }
  },
  mounted() {
    this.registerComponent()
    this.$on('on-viewer-ready', this.onViewerReady)
  },
  destroyed(){}
}
</script>
