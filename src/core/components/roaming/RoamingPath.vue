<template>
  <i class="dc-roaming-path" :id="id" style="display: none !important;"> </i>
</template>

<script>
import comp from '../../mixins/comp'

export default {
  name: 'DcRoamingPath',
  mixins: [comp],
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    initComponent() {
      if (!DC.Initialized || DC.RoamingPath) {
        return
      }
      this.$dcComp = new DC.RoamingPath(this.id)
    },
    _addToController() {}
  },
  mounted() {
    this.$on('on-roaming-controller-ready', this.onViewerReady)
  }
}
</script>
