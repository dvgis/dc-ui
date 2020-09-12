<template></template>
<script>
import comp from '../../../mixins/comp'

export default {
  name: 'DcLayerGroup',
  minixs: [comp],
  props: {
    id: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    initComponent() {
      this.$dcComp = new DC.LayerGroup(this.id)
      this.$children.forEach(component => {
        component.$emit('on-layer-group-ready', this.$dcComp)
      })
    },
    addToViewer() {
      this.$viewer && this.$viewer.addLayerGroup(this.$dcComp)
    }
  },
  mounted() {
    this.registerComponent()
    this.$on('on-viewer-ready', this.onViewerReady)
  },
  destroyed(){
    this.$viewer && this.$viewer.removeLayerGroup(this.$dcComp)
  }
}
</script>
