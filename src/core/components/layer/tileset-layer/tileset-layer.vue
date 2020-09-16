<template>
  <i class="dc-tileset-layer" :id="id" style="display: none !important;">
    <slot></slot>
  </i>
</template>

<script>
import layer from '../../../mixins/layer'

export default {
  name: 'DcTilesetLayer',
  mixins: [layer],
  methods: {
    initComponent() {
      if (!this.$dcReady) {
        return
      }
      this.$dcComp = new DC.TilesetLayer(this.id)
      this.$dcComp.attr = this.attr
      this.$dcComp.show = this.show
      this.$children.forEach(component => {
        component.$emit('on-layer-ready', this.$dcComp)
      })
    }
  }
}
</script>
