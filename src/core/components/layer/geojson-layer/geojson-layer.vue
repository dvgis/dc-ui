<template></template>

<script>
import comp from '../../../mixins/comp'
import layer from '../../../mixins/layer'

export default {
  name: 'DcGeoJsonLayer',
  minixs: [comp, layer],
  props: {
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    initComponent() {
      this.$dcComp = new DC.DcGeojsonLayer(this.id, this.url)
      this.$dcComp.attr = this.attr
    }
  }
}
</script>
