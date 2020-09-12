<template></template>

<script>
import comp from '../../../mixins/comp'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcDivIcon',
  minixs: [comp, overlay],
  props: {
    position: {
      type: [String, Array, Object],
      required: true
    },
    content: {
      type: [String, Object],
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
    content(newVal, oldVal) {
      this.$dcComp && (this.$dcComp.content = newVal)
    }
  },
  methods: {
    initComponent() {
      this.$dcComp = new DC.DivIcon(this.position, this.content)
      this._mountOverlay && this._mountOverlay()
    }
  }
}
</script>
