<template></template>

<script>
import events from '../../../mixins/events'
import comp from '../../../mixins/comp'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcBillboard',
  mixins: [events, comp, overlay],
  props: {
    position: {
      type: [String, Array, Object],
      required: true
    },
    radius: {
      type: Number,
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
    },
    radius(newVal, oldVal) {
      this.$dcComp && (this.$dcComp.radius = newVal)
    }
  },
  methods: {
    initComponent() {
      this.$dcComp = new DC.Circle(this.position, this.radius)
      this._mountOverlay && this._mountOverlay()
    }
  }
}
</script>
