<template></template>

<script>
import comp from '../../mixins/comp'

export default {
  name: 'DcBaseLayer',
  mixins: [comp],
  props: {
    layerType: {
      type: String,
      required: true
    },
    options: [Object, Array],
    iconUrl: String,
    title: String
  },
  methods: {
    initComponent() {
      this.$dcComp = []
      if (this.options && Array.isArray(this.options)) {
        this.options.forEach(item => {
          this.$dcComp.push(
            DC.ImageryLayerFactory.createImageryLayer(this.layerType, item)
          )
        })
      } else {
        this.$dcComp.push(
          DC.ImageryLayerFactory.createImageryLayer(
            this.layerType,
            this.options || {}
          )
        )
      }
    },
    _addToViewer() {
      this.$viewer &&
        this.$viewer.addBaseLayer(this.$dcComp, {
          name: this.title,
          iconUrl: this.iconUrl
        })
    }
  },
  destroyed() {}
}
</script>
