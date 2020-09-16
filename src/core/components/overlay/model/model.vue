<template>
  <i
    class="dc-model"
    :data-count="overlays.length"
    style="display: none !important;"
  ></i>
</template>

<script>
import { Util } from '../../../utils'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcModel',
  mixins: [overlay],
  props: {
    urlKey: {
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
        let model = undefined
        this.overlays.forEach(overlay => {
          position = Util.createPosition(overlay, this.positionKey)
          if (position && this.urlKey) {
            model = new DC.Model(position, overlay[this.urlKey])
          }
          this.$dcComp.push(model)
        })
        this._mountOverlays && this._mountOverlays()
      }
    }
  }
}
</script>
