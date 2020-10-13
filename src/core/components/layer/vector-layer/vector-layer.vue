<template>
  <i class="dc-vector-layer" :id="id" style="display: none !important;">
    <slot></slot>
  </i>
</template>

<script>
import layer from '../../../mixins/layer'

export default {
  name: 'DcVectorLayer',
  mixins: [layer],
  methods: {
    initComponent() {
      if (!DC.Initialized || !DC.VectorLayer) {
        return
      }
      this.$dcComp = new DC.VectorLayer(this.id)
      this.$dcComp.attr = this.attr
      this.$dcComp.show = this.show
      this.$children.forEach(component => {
        component.$emit('on-layer-ready', this.$dcComp)
      })
    }
  }
}
</script>
