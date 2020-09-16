<template>
  <div :id="viewerId" class="viewer-container">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
import events from '../../mixins/events'

export default {
  name: 'DcViewer',
  mixins: [events],
  props: {
    viewerId: {
      type: String,
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
    broadcast(component) {
      let _this = this
      if (component.$children && component.$children.length > 0) {
        component.$children.forEach(item => {
          item.$emit('on-dc-ready')
          _this.broadcast(item)
        })
      }
    },
    initViewer() {
      DC.ready(() => {
        this.broadcast(this)
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
