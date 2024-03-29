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
    sceneMode: {
      type: Number,
      default: 3
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
    },
    enableHawkeyeMap: {
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
      if (!DC.Initialized || !DC.Viewer) {
        return
      }
      this.$dcComp = new DC.Viewer(this.viewerId, {
        ...this.config,
        sceneMode: this.sceneMode
      })
      this.$dcComp.setOptions(this.options)
      this.$dcComp.tooltip.enable = this.enableTooltip
      this.$dcComp.compass.enable = this.enableCompass
      this.$dcComp.locationBar.enable = this.enableLocationBar
      this.$dcComp.hawkeyeMap.enable = this.enableHawkeyeMap
      this.registerEvents()
      this.$children.forEach(component => {
        component.$emit('on-viewer-ready', this.$dcComp)
      })
      this.$emit('on-viewer-created', this.$dcComp)
    }
  },
  created() {
    DC && DC.ready()
  },
  mounted() {
    this.initViewer()
  }
}
</script>
