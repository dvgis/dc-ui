<template></template>

<script>
import comp from '../../../mixins/comp'
import layer from '../../../mixins/layer'

export default {
  name: 'DcVectorLayer',
  mixins: [comp, layer],
  methods: {
    initComponent() {
      this.$dcComp = new DC.HtmlLayer(this.id)
      this.$dcComp.attr = this.attr
      this.$dcComp.show = this.show
      this.$children.forEach(component => {
        component.$emit('on-layer-ready', this.$dcComp)
      })
    }
  }
}
</script>
