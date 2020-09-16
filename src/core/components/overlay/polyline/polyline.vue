<template>
  <i
    class="dc-polyline"
    :data-count="overlays.length"
    style="display: none !important;"
  ></i>
</template>

<script>
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcPolyline',
  mixins: [overlay],
  props: {
    positionKey: {
      type: String,
      default: function() {
        return 'coords'
      }
    }
  },
  methods: {
    initComponent() {
      if (!this.$dcReady) {
        return
      }
      this.$dcComp = []
      if (Array.isArray(this.overlays)) {
        this.overlays.forEach(overlay => {
          let positions = undefined
          let polyline = undefined
          if (this.positionKey && this.positionKey) {
            positions = overlay[this.positionKey]
            if (positions) {
              polyline = new DC.Polyline(positions)
            }
            this.$dcComp.push(polyline)
          }
        })
        this._mountOverlays && this._mountOverlays()
      }
    }
  }
}
</script>
