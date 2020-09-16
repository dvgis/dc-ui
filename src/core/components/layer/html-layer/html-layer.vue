<template>
  <i class="dc-html-layer" :id="id" style="display: none !important;">
    <slot></slot
  ></i>
</template>

<script>
import layer from '../../../mixins/layer'

export default {
  name: 'DcHtmlLayer',
  mixins: [layer],
  methods: {
    initComponent() {
      if (!this.$dcReady) {
        return
      }
      this.$dcComp = new DC.HtmlLayer(this.id)
      this.$dcComp.attr = this.attr
      this.$dcComp.show = this.show
      this.$children.forEach(component => {
        component.$emit('on-layer-ready', this.$dcComp)
      })
    }
  }
}
</script>
