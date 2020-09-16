<template>
  <i
    class="dc-polygon"
    :data-count="overlays.length"
    style="display: none !important;"
  ></i>
</template>

<script>
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcPolygon',
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
        let positions = undefined
        let polygon = undefined
        this.overlays.forEach(overlay => {
          positions = overlay[this.positionKey]
          if (positions) {
            polygon = new DC.Polygon(positions)
          }
          this.$dcComp.push(polygon)
        })
        this._mountOverlays && this._mountOverlays()
      }
    }
  }
}
</script>
