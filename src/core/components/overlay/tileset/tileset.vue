<template>
  <i
    class="dc-tileset"
    :data-count="overlays.length"
    style="display: none !important;"
  ></i>
</template>

<script>
import { Util } from '../../../utils'
import overlay from '../../../mixins/overlay'

export default {
  name: 'DcTileset',
  mixins: [overlay],
  props: {
    urlKey: {
      type: String,
      required: true
    },
    options:Object,
    scaleCondition: Object,
    heightCondition: Object
  },
  methods: {
    initComponent() {
      if (!this.$dcReady) {
        return
      }
      this.$dcComp = []
      if (Array.isArray(this.overlays)) {
        let tileset = undefined
        let position = undefined
        let scale = 1
        let height = 0
        this.overlays.forEach(overlay => {
          if (this.urlKey) {
            tileset = new DC.Tileset(overlay[this.urlKey],this.options)
          }
          if (this.positionKey) {
            position = Util.createPosition(overlay, this.positionKey)
            if (position && !!position.lng && !!position.lat) {
              tileset.setPosition(position)
            }
          }
          if (this.scaleCondition) {
            scale = Util.getConditionValue(overlay, this.scaleCondition, 1)
            scale !== 1 && tileset.setScale(scale)
          }
          if (this.heightCondition) {
            height = Util.getConditionValue(overlay, this.heightCondition, 0)
            !!height && tileset.setHeight(height)
          }
          this.$dcComp.push(tileset)
        })
        this._mountOverlays && this._mountOverlays()
      }
    }
  }
}
</script>
