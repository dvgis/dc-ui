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
    idKey: {
      handler(newVal, oldVal) {
        this._setId(newVal)
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
        this._setAttr(newVal)
      },
      immediate: true,
      deep: true
    },
    styleCondition: {
      handler(newVal, oldVal) {
        this._setStyle(newVal)
      },
      immediate: true,
      deep: true
    },
    sizeCondition: {
      handler(newVal, oldVal) {
        this._setSize(newVal)
      },
      immediate: true,
      deep: true
    },
    visibleCondition: {
      handler(newVal, oldVal) {
        this._setVisible(newVal)
      },
      immediate: true,
      deep: true
    },
    rotateCondition: {
      handler(newVal, oldVal) {
        this._setRotateAmount(newVal)
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
     * @param idKey
     * @private
     */
    _setId(idKey) {
      if (this.$dcComp && this.overlays && idKey) {
        this.overlays.forEach((overlay, index) => {
          this.$dcComp[index] && (this.$dcComp[index].id = overlay[idKey])
        })
      }
    },
    /**
     * Sets overlays attr
     * @param attrKey
     * @private
     */
    _setAttr(attrKey) {
      if (this.$dcComp && this.overlays && !Util.isEmptyObject(attrKey)) {
        this.overlays.forEach((overlay, index) => {
          let attr = Util.createOverlayAttr(overlay, attrKey)
          this.$dcComp[index] && (this.$dcComp[index].attr = attr)
        })
      }
    },
    /**
     * Sets overlays style
     * @param styleCondition
     * @private
     */
    _setStyle(styleCondition) {
      if (
        this.$dcComp &&
        this.overlays &&
        !Util.isEmptyObject(styleCondition)
      ) {
        this.overlays.forEach((overlay, index) => {
          let style = Util.getConditionValue(overlay, styleCondition, {})
          this.$dcComp[index] && this.$dcComp[index].setStyle(style)
        })
      }
    },
    /**
     * Sets overlays visible
     * @param visibleCondition
     * @private
     */
    _setVisible(visibleCondition) {
      if (
        this.$dcComp &&
        this.overlays &&
        !Util.isEmptyObject(visibleCondition)
      ) {
        this.overlays.forEach((overlay, index) => {
          let visible = Util.getConditionValue(overlay, visibleCondition, true)
          this.$dcComp[index] && (this.$dcComp[index].show = !!visible)
        })
      }
    },
    /**
     * Sets overlays size, Only useful for Billboard
     * @param sizeCondition
     * @private
     */
    _setSize(sizeCondition) {
      if (this.$dcComp && this.overlays && !Util.isEmptyObject(sizeCondition)) {
        this.overlays.forEach((overlay, index) => {
          let size = Util.getConditionValue(overlay, sizeCondition, [32, 32])
          this.$dcComp[index] && (this.$dcComp[index].size = size)
        })
      }
    },
    /**
     * Sets overlays rotateAmount, Only useful for Model and Circle
     * @param rotateCondition
     * @private
     */
    _setRotateAmount(rotateCondition) {
      if (
        this.$dcComp &&
        this.overlays &&
        !Util.isEmptyObject(rotateCondition)
      ) {
        this.overlays.forEach((overlay, index) => {
          let rotate = Util.getConditionValue(overlay, rotateCondition, 0)
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
