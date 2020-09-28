<template>
  <i class="dc-geojson-layer" :id="id" style="display: none !important;"> </i>
</template>

<script>
import layer from '../../../mixins/layer'

export default {
  name: 'DcGeoJsonLayer',
  mixins: [layer],
  props: {
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    initComponent() {
      if (!this.$dcReady || !DC.GeoJsonLayer) {
        return
      }
      this.$dcComp = new DC.GeoJsonLayer(this.id, this.url)
      this.$dcComp.attr = this.attr
    }
  }
}
</script>
