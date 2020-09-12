<template></template>

<script>
import comp from '../../../mixins/comp'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcBillboard',
  minixs: [comp, overlay],
  props: {
    position: {
      type: [String, Array, Object],
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Array,
      default: function() {
        return [32, 32]
      }
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
    icon(newVal, oldVal) {
      this.$dcComp && (this.$dcComp.icon = newVal)
    },
    size: {
      handler(newVal, oldVal) {
        this.$dcComp && (this.$dcComp.size = newVal)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    initComponent() {
      this.$dcComp = new DC.Billboard(this.position, this.icon)
      this.$dcComp.size = this.size
      this._mountOverlay && this._mountOverlay()
    }
  }
}
</script>
