<template>
  <i class="dc-layer-group" :id="id" style="display: none !important;">
    <slot></slot
  ></i>
</template>

<script>
import comp from '../../../mixins/comp'

export default {
  name: 'DcLayerGroup',
  mixins: [comp],
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
  watch: {
    show(newVal, oldVal) {
      this.$dcComp && (this.$dcComp.show = newVal)
    }
  },
  methods: {
    initComponent() {
      if (!this.$dcReady) {
        return
      }
      this.$dcComp = new DC.LayerGroup(this.id)
      this.$dcComp.show = this.show
      this.$children.forEach(component => {
        component.$emit('on-layer-group-ready', this.$dcComp)
      })
    },
    _addToViewer() {
      this.$viewer && this.$viewer.addLayerGroup(this.$dcComp)
    }
  },
  mounted() {
    this.$on('on-viewer-ready', this.onViewerReady)
  },
  destroyed() {
    this.$viewer && this.$viewer.removeLayerGroup(this.$dcComp)
  }
}
</script>
