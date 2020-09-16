<template>
  <i class="dc-czml-layer" :id="id" style="display: none !important;"> </i>
</template>

<script>
import layer from '../../../mixins/layer'

export default {
  name: 'DcCzmlLayer',
  mixins: [layer],
  props: {
    url: {
      type: String,
      required: true
    },
    options: Object
  },
  methods: {
    initComponent() {
      if (!this.$dcReady) {
        return
      }
      this.$dcComp = new DC.CzmlLayer(this.id, this.url, this.options)
      this.$dcComp.attr = this.attr
    }
  }
}
</script>
