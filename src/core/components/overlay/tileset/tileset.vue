<template></template>

<script>
import comp from '../../../mixins/comp'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcPolyline',
  minixs: [comp, overlay],
  props: {
    position: [String, Array, Object],
    height: Number
  },
  watch: {
    position: {
      handler(newVal, oldVal) {
        this.$dcComp && this.$dcComp.setPosition(newVal)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    initComponent() {
      this.$dcComp = new DC.Polyline(this.positions)
    }
  }
}
</script>
