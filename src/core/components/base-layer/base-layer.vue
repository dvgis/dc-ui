<template>
  <i
    class="base-layer"
    :data-type="layerType"
    style="display: none !important;"
  ></i>
</template>

<script>
import comp from '../../mixins/comp'

export default {
  name: 'DcBaseLayer',
  mixins: [comp],
  props: {
    layerType: {
      type: String,
      required: true
    },
    options: [Object, Array],
    iconUrl: String,
    title: String
  },
  methods: {
    initComponent() {
      if (!this.$dcReady) {
        return
      }
      this.$dcComp = []
      if (this.options && Array.isArray(this.options)) {
        this.options.forEach(item => {
          this.$dcComp.push(
            DC.ImageryLayerFactory.createImageryLayer(this.layerType, item)
          )
        })
      } else {
        this.$dcComp.push(
          DC.ImageryLayerFactory.createImageryLayer(
            this.layerType,
            this.options || {}
          )
        )
      }
    },
    _addToViewer() {
      this.$viewer &&
        this.$viewer.addBaseLayer(this.$dcComp, {
          name: this.title,
          iconUrl: this.iconUrl
        })
    }
  },
  mounted() {
    this.$on('on-viewer-ready', this.onViewerReady)
  },
  destroyed() {}
}
</script>
