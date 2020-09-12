<template></template>

<script>
import comp from '../../../mixins/comp'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcPolygon',
  minixs: [comp, overlay],
  props: {
    positions: {
      type: [String, Array],
      required: true
    }
  },
  watch: {
    positions: {
      handler(newVal, oldVal) {
        this.$dcComp && (this.$dcComp.positions = newVal)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    initComponent() {
      this.$dcComp = new DC.Polygon(this.positions)
      this._mountOverlay && this._mountOverlay()
    }
  }
}
</script>
