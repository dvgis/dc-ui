<template>
  <i
    class="terrain"
    :data-type="terrainType"
    style="display: none !important;"
  ></i>
</template>

<script>
import comp from '../../mixins/comp'

export default {
  name: 'DcTerrain',
  mixins: [comp],
  props: {
    terrainType: {
      type: String,
      required: true
    },
    options: Object
  },
  methods: {
    initComponent() {
      if (!this.$dcReady || !DC.TerrainFactory) {
        return
      }
      this.$dcComp = DC.TerrainFactory.createTerrain(
        this.terrainType,
        this.options || {}
      )
    },
    _addToViewer() {
      this.$viewer && this.$viewer.addTerrain(this.$dcComp)
    }
  },
  mounted() {
    this.$on('on-viewer-ready', this.onViewerReady)
  },
  destroyed() {}
}
</script>
