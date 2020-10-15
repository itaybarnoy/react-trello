"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = require("../../styles/Base");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class Tag extends _react.Component {
  render() {
    const _this$props = this.props,
          title = _this$props.title,
          color = _this$props.color,
          bgcolor = _this$props.bgcolor,
          tagStyle = _this$props.tagStyle,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["title", "color", "bgcolor", "tagStyle"]);

    const style = _objectSpread({
      color: color || 'white',
      backgroundColor: bgcolor || 'orange'
    }, tagStyle);

    return /*#__PURE__*/_react.default.createElement(_Base.TagSpan, (0, _extends2.default)({
      style: style
    }, otherProps), title);
  }

}

Tag.propTypes = {
  title: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  bgcolor: _propTypes.default.string,
  tagStyle: _propTypes.default.object
};
var _default = Tag;
exports.default = _default;