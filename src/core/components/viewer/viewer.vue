<template>
  <div :id="viewerId" class="viewer-container">
    <slot></slot>
  </div>
</template>

<script>
import events from '../../mixins/events'
export default {
  name: 'DcViewer',
  minixs: [events],
  props: {
    viewerId: {
      type: String,
      default: 'viewer-container',
      required: true
    },
    config: {
      type: Object,
      default: function() {
        return {}
      }
    },
    options: {
      type: Object,
      default: function() {
        return {}
      }
    },
    enableTooltip: {
      type: Boolean,
      default: false
    },
    enableCompass: {
      type: Boolean,
      default: false
    },
    enableLocationBar: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    options: {
      handler(newVal, oldVal) {
        this.$dcComp && this.$dcComp.setOptions(newVal)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    initViewer() {
      DC.ready(() => {
        this.$dcComp = new DC.Viewer(this.viewerId, this.config)
        this.$dcComp.setOptions(this.options)
        this.$dcComp.tooltip.enable = this.enableTooltip
        this.$dcComp.compass.enable = this.enableCompass
        this.$dcComp.locationBar.enable = this.enableLocationBar
        this.registerEvents()
        this.$children.forEach(component => {
          component.$emit('on-viewer-ready', this.$dcComp)
        })
        this.$emit('on-viewer-created', this.$dcComp)
      })
    }
  },
  mounted() {
    this.initViewer()
  }
}
</script>
