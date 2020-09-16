<template>
  <i
    class="dc-billboard"
    :data-count="overlays.length"
    style="display: none !important;"
  ></i>
</template>

<script>
import { Util } from '../../../utils'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcBillboard',
  mixins: [overlay],
  props: {
    iconKey: {
      type: String,
      required: true
    }
  },
  methods: {
    _setSize() {},
    initComponent() {
      if (!this.$dcReady) {
        return false
      }
      this.$dcComp = []
      if (Array.isArray(this.overlays)) {
        let position = undefined
        let billboard = undefined
        this.overlays.forEach(overlay => {
          position = Util.createPosition(overlay, this.positionKey)
          if (position && this.iconKey) {
            billboard = new DC.Billboard(position, overlay[this.iconKey])
          }
          this.$dcComp.push(billboard)
        })
        this._mountOverlays && this._mountOverlays()
      }
    }
  }
}
</script>
