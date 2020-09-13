<template></template>

<script>
import events from '../../../mixins/events'
import comp from '../../../mixins/comp'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcPoint',
  mixins: [events, comp, overlay],
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
