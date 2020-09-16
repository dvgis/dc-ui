<template>
  <i
    class="dc-point"
    :data-count="overlays.length"
    style="display: none !important;"
  ></i>
</template>
<script>
import { Util } from '../../../utils'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcPoint',
  mixins: [overlay],
  methods: {
    initComponent() {
      if (!this.$dcReady) {
        return
      }
      this.$dcComp = []
      if (Array.isArray(this.overlays)) {
        let position = undefined
        let point = undefined
        this.overlays.forEach(overlay => {
          position = Util.createPosition(overlay, this.positionKey)
          if (position) {
            point = new DC.Point(position)
          }
          this.$dcComp.push(point)
        })
        this._mountOverlays && this._mountOverlays()
      }
    }
  }
}
</script>
