/**
 * @Author: Caven
 * @Date: 2020-09-12 23:20:57
 */

import events from './events'
import comp from './comp'
import { Util } from '../utils'

export default {
  mixins: [events, comp],
  props: {
    overlays: {
      type: Array,
      required: true
    },
    positionKey: {
      type: [String, Array],
      default: function() {
        return ['lng', 'lat', 'alt', 'heading', 'pitch', 'roll']
      }
    },
    idKey: String,
    attrKey: {
      type: Array,
      default: function() {
        return ['id']
      }
    },
    styleCondition: Object,
    visibleCondition: Object,
    sizeCondition: Object,
    rotateCondition: Object
  },
  watch: {
    idKe: {
      handler(newVal, oldVal) {
        this._setId()
      },
      immediate: true
    },
    overlays: {
      handler(newVal, oldVal) {
        if (this.$dcComp && this.$dcComp.length) {
          this._removeFromLayer()
        }
        this.initComponent()
        this._addToLayer()
      },
      immediate: true,
      deep: true
    },
    attrKey: {
      handler(newVal, oldVal) {
        this._setAttr()
      },
      immediate: true,
      deep: true
    },
    styleCondition: {
      handler(newVal, oldVal) {
        this._setStyle()
      },
      immediate: true,
      deep: true
    },
    sizeCondition: {
      handler(newVal, oldVal) {
        this._setSize()
      },
      immediate: true,
      deep: true
    },
    visibleCondition: {
      handler(newVal, oldVal) {
        this._setVisible()
      },
      immediate: true,
      deep: true
    },
    rotateCondition: {
      handler(newVal, oldVal) {
        this._setRotateAmount()
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    /**
     * Mounts overlay
     * @private
     */
    _mountOverlays() {
      this.registerEvents()
      this.overlays.forEach((overlay, index) => {
        let temp = this.$dcComp[index]
        if (temp) {
          //Sets id
          this.idKey && (temp.id = overlay[this.idKey])
          //Sets attr
          if (!Util.isEmptyObject(this.attrKey)) {
            temp.attr = Util.createOverlayAttr(overlay, this.attrKey)
          }
          //Sets style
          if (!Util.isEmptyObject(this.styleCondition)) {
            temp.setStyle(
              Util.getConditionValue(overlay, this.styleCondition, {})
            )
          }
          //Sets visible
          if (!Util.isEmptyObject(this.visibleCondition)) {
            temp.show = Util.getConditionValue(
              overlay,
              this.visibleCondition,
              true
            )
          }
          //Sets size
          if (!Util.isEmptyObject(this.sizeCondition)) {
            temp.size = Util.getConditionValue(overlay, this.sizeCondition, [
              32,
              32
            ])
          }
          // Sets rotate
          if (!Util.isEmptyObject(this.rotateCondition)) {
            temp.rotateAmount = Util.getConditionValue(
              overlay,
              this.rotateCondition,
              0
            )
          }
        }
      })
    },
    /**
     * Sets overlays id
     * @private
     */
    _setId() {
      if (this.$dcComp && this.overlays && this.idKey) {
        this.overlays.forEach((overlay, index) => {
          this.$dcComp[index] && (this.$dcComp[index].id = overlay[this.idKey])
        })
      }
    },
    /**
     * Sets overlays attr
     * @private
     */
    _setAttr() {
      if (this.$dcComp && this.overlays && !Util.isEmptyObject(this.attrKey)) {
        this.overlays.forEach((overlay, index) => {
          let attr = Util.createOverlayAttr(overlay, this.attrKey)
          this.$dcComp[index] && (this.$dcComp[index].attr = attr)
        })
      }
    },
    /**
     * Sets overlays style
     * @private
     */
    _setStyle() {
      if (
        this.$dcComp &&
        this.overlays &&
        !Util.isEmptyObject(this.styleCondition)
      ) {
        this.overlays.forEach((overlay, index) => {
          let style = Util.getConditionValue(overlay, this.styleCondition, {})
          this.$dcComp[index] && this.$dcComp[index].setStyle(style)
        })
      }
    },
    /**
     * Sets overlays visible
     * @private
     */
    _setVisible() {
      if (
        this.$dcComp &&
        this.overlays &&
        !Util.isEmptyObject(this.visibleCondition)
      ) {
        this.overlays.forEach((overlay, index) => {
          let visible = Util.getConditionValue(
            overlay,
            this.visibleCondition,
            true
          )
          this.$dcComp[index] && (this.$dcComp[index].show = !!visible)
        })
      }
    },
    /**
     * Sets overlays size, Only useful for Billboard
     * @private
     */
    _setSize() {
      if (
        this.$dcComp &&
        this.overlays &&
        !Util.isEmptyObject(this.sizeCondition)
      ) {
        this.overlays.forEach((overlay, index) => {
          let size = Util.getConditionValue(overlay, this.sizeCondition, [
            32,
            32
          ])
          this.$dcComp[index] && (this.$dcComp[index].size = size)
        })
      }
    },
    /**
     * Sets overlays rotateAmount, Only useful for Model and Circle
     * @private
     */
    _setRotateAmount() {
      if (
        this.$dcComp &&
        this.overlays &&
        !Util.isEmptyObject(this.rotateCondition)
      ) {
        this.overlays.forEach((overlay, index) => {
          let rotate = Util.getConditionValue(overlay, this.rotateCondition, 0)
          this.$dcComp[index] && (this.$dcComp[index].rotateAmount = +rotate)
        })
      }
    },
    /**
     *
     * @private
     */
    _addToLayer() {
      this.$layer &&
        this.$layer.addOverlays(this.$dcComp.filter(item => !!item))
    },
    /**
     *
     * @private
     */
    _removeFromLayer() {
      if (this.$dcComp && this.$layer) {
        this.$dcComp.forEach(item => {
          item && this.$layer.removeOverlay(item)
        })
      }
      this.$dcComp = []
    }
  },
  mounted() {
    this.$on('on-layer-ready', this.onLayerReady)
  },
  destroyed() {
    this._removeFromLayer()
  }
}
