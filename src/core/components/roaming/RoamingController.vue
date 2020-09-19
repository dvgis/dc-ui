<template>
  <i class="dc-roaming-controller" style="display: none !important;">
    <slot></slot
  ></i>
</template>

<script>
import comp from '../../mixins/comp'

export default {
  name: 'DcRoamingController',
  mixins: [comp],
  props: {
    startTIme: {
      type: Date,
      required: true
    },
    endTIme: Date,
    duration: Number,
    state: String,
    viewMode: String,
    viewOption: Object
  },
  watch: {
    endTIme: {
      handler(newVal, oldVal) {
        this._setTimeRange(newVal)
      },
      immediate: true,
      deep: true
    },
    duration(newVal, oldVal) {
      this._setTimeDuration(newVal)
    },
    state(newVal, oldVal) {
      this._setState(newVal)
    }
  },
  methods: {
    /**
     * Sets time range
     * @param endTime
     * @private
     */
    _setTimeRange(endTime) {
      this.$dcComp && this.$dcComp.setTimeRange(this.startTIme, endTime)
    },
    /**
     * Sets time duration
     * @param duration
     * @private
     */
    _setTimeDuration(duration) {
      this.$dcComp && this.$dcComp.setTimeDuration(this.startTIme, duration)
    },
    /**
     * Sets state
     * @param state
     * @private
     */
    _setState(state) {
      if (!this.$dcComp) {
        return
      }
      if (state === DC.State.PLAY) {
        this.$dcComp.play && this.$dcComp.play()
      } else if (state === DC.State.PAUSE) {
        this.$dcComp.pause && this.$dcComp.pause()
      } else if (state === DC.State.RESTORE) {
        this.$dcComp.restore && this.$dcComp.restore()
      }
    },
    initComponent() {
      if (!this.$dcReady) {
        return
      }
      this.$dcComp = new DC.RoamingController(this.$viewer)
      this.$children.forEach(component => {
        component.$emit('on-roaming-controller-ready', this.$dcComp)
      })
    }
  },
  mounted() {
    this.$on('on-viewer-ready', this.onViewerReady)
  }
}
</script>
