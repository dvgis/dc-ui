<template></template>

<script>
import events from '../../../mixins/events'
import comp from '../../../mixins/comp'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcTileset',
  mixins: [events, comp, overlay],
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
    },
    height(newVal, oldVal) {
      this.$dcComp && this.$dcComp.setHeight(this.height)
    }
  },
  methods: {
    initComponent() {
      this.$dcComp = new DC.Polyline(this.positions)
      this.position && this.$dcComp.setPosition(this.position)
      this.height && this.$dcComp.setHeight(this.height)
    }
  }
}
</script>
