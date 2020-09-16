/**
 * @Author: Caven
 * @Date: 2020-09-12 20:02:52
 */

const VAR_REGEX = /\${(.*?)}/g

class Util {
  /**
   *
   * @param obj
   * @returns {boolean}
   */
  static isEmptyObject(obj = {}) {
    return !obj || Object.keys(obj).length === 0
  }
  /**
   *
   * @param str
   * @returns {*}
   */
  static execFun(str) {
    return new Function('return ' + str)()
  }

  /**
   *
   * @param obj
   * @param strVal
   * @returns {string}
   */
  static evaluateVariableString(obj, strVal) {
    let result = strVal
    let match = VAR_REGEX.exec(result)
    while (match !== null) {
      let placeholder = match[0]
      let variableName = match[1]
      let value = obj[variableName] ?? ''
      result = result.replace(placeholder, value)
      match = VAR_REGEX.exec(result)
    }
    return result
  }
  /**
   *
   * @param overlay
   * @param positionKey
   * @returns {DC.Position}
   */
  static createPosition(overlay, positionKey) {
    let position = undefined
    if (!positionKey) {
      return position
    }
    if (typeof positionKey === 'string') {
      positionKey = [positionKey]
    }
    let len = positionKey.length || 0
    if (len === 1) {
      let value = overlay[positionKey[0]]
      if (value && typeof value === 'string') {
        position = DC.Position.fromString(value)
      } else if (value && Array.isArray(value)) {
        position = DC.Position.fromArray(value)
      } else if (value && value instanceof DC.Position) {
        position = value
      }
    } else if (len > 1) {
      let lng = +overlay[positionKey[0]] || 0
      let lat = +overlay[positionKey[1]] || 0
      let alt = +overlay[positionKey[2]] || 0
      let heading = +overlay[positionKey[3]] || 0
      let pitch = +overlay[positionKey[4]] || 0
      let roll = +overlay[positionKey[5]] || 0
      position = new DC.Position(lng, lat, alt, heading, pitch, roll)
    }
    return position
  }

  /**
   *
   * @param overlay
   * @param attrKey
   * @returns {{}}
   */
  static createOverlayAttr(overlay, attrKey) {
    let attr = {}
    if (Array.isArray(attrKey)) {
      attrKey.forEach(item => {
        Object(overlay).hasOwnProperty(item) && (attr[item] = overlay[item])
      })
    }
    return attr
  }

  /**
   *
   * @param overlay
   * @param condition
   * @param defaultValue
   * @returns {*}
   */
  static getConditionValue(overlay, condition, defaultValue) {
    let result = defaultValue
    if (!overlay || !condition) {
      return result
    }
    let keys = Object.keys(condition) || []
    if (keys.length) {
      let matchedKey = undefined
      keys.forEach(key => {
        if (
          key !== 'default' &&
          this.execFun(this.evaluateVariableString(overlay, key))
        ) {
          matchedKey = key
        }
      })
      if (matchedKey) {
        result = condition[matchedKey]
      } else {
        result = condition['default']
      }
    }
    return result
  }
}

export default Util
