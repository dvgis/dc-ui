<template></template>

<script>
import events from '../../../mixins/events'
import comp from '../../../mixins/comp'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcModel',
  mixins: [events, comp, overlay],
  props: {
    position: {
      type: [String, Array, Object],
      required: true
    },
    modelUrl: {
      type: String,
      required: true
    },
    rotateAmount: Number
  },
  watch: {
    position: {
      handler(newVal, oldVal) {
        this.$dcComp && (this.$dcComp.position = newVal)
      },
      immediate: true,
      deep: true
    },
    modelUrl(newVal, oldVal) {
      this.$dcComp && (this.$dcComp.modelUrl = newVal)
    },
    rotateAmount(newVal, oldVal) {
      this.$dcComp && (this.$dcComp.rotateAmount = newVal)
    }
  },
  methods: {
    initComponent() {
      this.$dcComp = new DC.Model(this.position, this.modelUrl)
      this.$dcComp.rotateAmount = this.rotateAmount || 0
      this._mountOverlay && this._mountOverlay()
    }
  }
}
</script>
