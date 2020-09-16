<template>
  <i
    class="dc-label"
    :data-count="overlays.length"
    style="display: none !important;"
  ></i>
</template>

<script>
import { Util } from '../../../utils'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcLabel',
  mixins: [overlay],
  props: {
    textKey: {
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
        let label = undefined
        this.overlays.forEach(overlay => {
          position = Util.createPosition(overlay, this.positionKey)
          if (position && this.textKey) {
            label = new DC.Label(position, overlay[this.textKey])
          }
          this.$dcComp.push(label)
        })
        this._mountOverlays && this._mountOverlays()
      }
    }
  }
}
</script>
