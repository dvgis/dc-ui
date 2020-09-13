/**
 * @Author: Caven
 * @Date: 2020-09-12 23:20:57
 */

export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: true
    },
    attr: {
      type: Object,
      default: function() {
        return {}
      }
    },
    style: {
      type: Object,
      default: function() {
        return {}
      }
    },
    label: String,
    labelStyle: Object
  },
  watch: {
    id(newVal, oldVal) {
      this.$dcComp && (this.$dcComp.id = newVal)
    },
    show(newVal, oldVal) {
      this.$dcComp && (this.$dcComp.show = newVal)
    },
    attr: {
      handler(newVal, oldVal) {
        this.$dcComp && (this.$dcComp.attr = newVal)
      },
      immediate: true,
      deep: true
    },
    style: {
      handler(newVal, oldVal) {
        this.$dcComp && this.$dcComp.setStyle(newVal)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    _mountOverlay() {
      this.$dcComp.show = this.show
      this.$dcComp.attr = this.attr
      this.id && (this.$dcComp.id = this.id)
      this.label && this.$dcComp.setLabel(this.label, this.labelStyle)
      this.$dcComp.setStyle(this.style)
    },
    _addToLayer() {
      this.$layer && this.$layer.addOverlay(this.$dcComp)
    }
  },
  mounted() {
    this.$on('on-layer-ready', this.onLayerReady)
  },
  destroyed() {
    this.$layer && this.$layer.removeOverlay(this.$dcComp)
  }
}
