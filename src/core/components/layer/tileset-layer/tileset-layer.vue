<template></template>

<script>
import comp from '../../../mixins/comp'
import layer from '../../../mixins/layer'

export default {
  name: 'DcTilesetLayer',
  minixs: [comp, layer],
  methods: {
    initComponent() {
      this.$dcComp = new DC.TilesetLayer(this.id)
      this.$dcComp.attr = this.attr
      this.$children.forEach(component => {
        component.$emit('on-layer-ready', this.$dcComp)
      })
    }
  }
}
</script>
