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
    _mountEvent(component, type) {
      let callback = undefined
      switch (type) {
        case DC.MouseEventType.CLICK:
          callback = e => {
            this.$emit('on-click', e)
          }
          break
        case DC.MouseEventType.RIGHT_CLICK:
          callback = e => {
            this.$emit('on-right-click', e)
          }
          break
        case DC.MouseEventType.DB_CLICK:
          callback = e => {
            this.$emit('on-db-click', e)
          }
          break
        case DC.MouseEventType.MOUSE_MOVE:
          callback = e => {
            this.$emit('on-mouse-move', e)
          }
          break
        case DC.MouseEventType.WHEEL:
          callback = e => {
            this.$emit('on-wheel', e)
          }
          break
        case DC.MouseEventType.MOUSE_OVER:
          callback = e => {
            this.$emit('on-mouse-over', e)
          }
          break
        case DC.MouseEventType.MOUSE_OUT:
          callback = e => {
            this.$emit('on-mouse-out', e)
          }
          break
        case DC.MouseEventType.CAMERA_MOVE_END:
          callback = e => {
            this.$emit('on-camera-move-end', e)
          }
          break
        case DC.MouseEventType.CAMERA_CHANGED:
          callback = e => {
            this.$emit('on-camera-changed', e)
          }
          break
        case DC.MouseEventType.PRE_UPDATE:
          callback = e => {
            this.$emit('on-pre-update', e)
          }
          break
        case DC.MouseEventType.POST_UPDATE:
          callback = e => {
            this.$emit('on-post-update', e)
          }
          break
        case DC.MouseEventType.PRE_RENDER:
          callback = e => {
            this.$emit('on-pre-render', e)
          }
          break
        case DC.MouseEventType.POST_RENDER:
          callback = e => {
            this.$emit('on-post-render', e)
          }
          break
        case DC.MouseEventType.MORPH_COMPLETE:
          callback = e => {
            this.$emit('on-morph-complete', e)
          }
          break
        default:
          break
      }
      callback &&
        component &&
        component.on &&
        component.on(type, callback, this)
    },
    registerEvents() {
      if (this.events && this.events.length) {
        this.events.forEach(type => {
          if (Array.isArray(this.$dcComp)) {
            this.$dcComp.forEach(item => {
              this._mountEvent(item, type)
            })
          } else {
            this._mountEvent(this.$dcComp, type)
          }
        })
      }
    }
  }
}
