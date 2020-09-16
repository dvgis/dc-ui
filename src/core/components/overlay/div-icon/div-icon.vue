<template>
  <i
    class="dc-div-icon"
    :data-count="overlays.length"
    style="display: none !important;"
  ></i>
</template>

<script>
import overlay from '../../../mixins/overlay'
import { Util } from '@/core/utils'

export default {
  name: 'DcDivIcon',
  mixins: [overlay],
  props: {
    contentKey: {
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
        let divIcon = undefined
        this.overlays.forEach(overlay => {
          position = Util.createPosition(overlay, this.positionKey)
          if (position && this.contentKey) {
            divIcon = new DC.DivIcon(position, overlay[this.contentKey])
          }
          this.$dcComp.push(divIcon)
        })
        this._mountOverlays && this._mountOverlays()
      }
    }
  }
}
</script>
