<template></template>

<script>
import comp from '../../../mixins/comp'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcPoint',
  minixs: [comp, overlay],
  props: {
    position: {
      type: [String, Array, Object],
      required: true
    }
  },
  watch: {
    position: {
      handler(newVal, oldVal) {
        this.$dcComp && (this.$dcComp.position = newVal)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    initComponent() {
      this.$dcComp = new DC.Point(this.position)
      this._mountOverlay && this._mountOverlay()
    }
  }
}
</script>
