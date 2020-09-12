/**
 * @Author: Caven
 * @Date: 2020-09-12 19:36:13
 */

export default {
  props: {
    events: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    registerEvents() {
      if (this.events && this.events.length) {
        this.events.forEach(item => {
          if (this.$dcComp && this.$dcComp.on) {
            this.$dcComp.on(
              item,
              e => {
                switch (item) {
                  case DC.MouseEventType.CLICK:
                    this.$emit('on-click', e)
                    break
                  case DC.MouseEventType.RIGHT_CLICK:
                    this.$emit('on-right-click', e)
                    break
                  case DC.MouseEventType.DB_CLICK:
                    this.$emit('on-db-click', e)
                    break
                  case DC.MouseEventType.MOUSE_MOVE:
                    this.$emit('on-mouse-move', e)
                    break
                  case DC.MouseEventType.WHEEL:
                    this.$emit('on-wheel', e)
                    break
                  case DC.MouseEventType.MOUSE_OVER:
                    this.$emit('on-mouse-over', e)
                    break
                  case DC.MouseEventType.MOUSE_OUT:
                    this.$emit('on-mouse-out', e)
                    break
                  case DC.MouseEventType.CAMERA_MOVE_END:
                    this.$emit('on-camera-move-end', e)
                    break
                  case DC.MouseEventType.CAMERA_CHANGED:
                    this.$emit('on-camera-changed', e)
                    break
                  case DC.MouseEventType.PRE_UPDATE:
                    this.$emit('on-pre-update', e)
                    break
                  case DC.MouseEventType.POST_UPDATE:
                    this.$emit('on-post-update', e)
                    break
                  case DC.MouseEventType.PRE_RENDER:
                    this.$emit('on-pre-render', e)
                    break
                  case DC.MouseEventType.POST_RENDER:
                    this.$emit('on-post-render', e)
                    break
                  case DC.MouseEventType.MORPH_COMPLETE:
                    this.$emit('on-morph-complete', e)
                    break
                  default:
                    break
                }
              },
              this
            )
          }
        })
      }
    }
  }
}
