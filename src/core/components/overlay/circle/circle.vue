<template>
  <i
    class="dc-circle"
    :data-count="overlays.length"
    style="display: none !important;"
  ></i>
</template>

<script>
import overlay from '../../../mixins/overlay'
import { Util } from '@/core/utils'

export default {
  name: 'DcCircle',
  mixins: [overlay],
  props: {
    radiusKey: {
      type: String,
      required: true
    }
  },
  methods: {
    initComponent() {
      if (!this.$dcReady) {
        return
      }
      this.$dcComp = []
      if (Array.isArray(this.overlays)) {
        let position = undefined
        let circle = undefined
        this.overlays.forEach(overlay => {
          position = Util.createPosition(overlay, this.positionKey)
          if (position && this.radiusKey) {
            circle = new DC.Circle(position, +overlay[this.radiusKey] || 0)
          }
          this.$dcComp.push(circle)
        })
        this._mountOverlays && this._mountOverlays()
      }
    }
  }
}
</script>
