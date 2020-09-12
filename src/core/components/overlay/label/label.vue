<template></template>

<script>
import comp from '../../../mixins/comp'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcModel',
  minixs: [comp, overlay],
  props: {
    position: {
      type: [String, Array, Object],
      required: true
    },
    text: {
      type: String,
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
    text(newVal, oldVal) {
      this.$dcComp && (this.$dcComp.text = newVal)
    }
  },
  methods: {
    initComponent() {
      this.$dcComp = new DC.Model(this.position, this.text)
      this._mountOverlay && this._mountOverlay()
    }
  }
}
</script>
