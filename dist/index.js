"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Draggable", {
  enumerable: true,
  get: function get() {
    return _Draggable.default;
  }
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: function get() {
    return _Container.default;
  }
});
Object.defineProperty(exports, "BoardContainer", {
  enumerable: true,
  get: function get() {
    return _BoardContainer.default;
  }
});
Object.defineProperty(exports, "Lane", {
  enumerable: true,
  get: function get() {
    return _Lane.default;
  }
});
Object.defineProperty(exports, "components", {
  enumerable: true,
  get: function get() {
    return _components.default;
  }
});
Object.defineProperty(exports, "locales", {
  enumerable: true,
  get: function get() {
    return _locales.default;
  }
});
Object.defineProperty(exports, "widgets", {
  enumerable: true,
  get: function get() {
    return _widgets.default;
  }
});
Object.defineProperty(exports, "createTranslate", {
  enumerable: true,
  get: function get() {
    return _createTranslate.default;
  }
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Draggable = _interopRequireDefault(require("./dnd/Draggable"));

var _Container = _interopRequireDefault(require("./dnd/Container"));

var _BoardContainer = _interopRequireDefault(require("./controllers/BoardContainer"));

var _Board = _interopRequireDefault(require("./controllers/Board"));

var _Lane = _interopRequireDefault(require("./controllers/Lane"));

var _deprecationWarnings = _interopRequireDefault(require("./helpers/deprecationWarnings"));

var _components = _interopRequireDefault(require("./components"));

var _locales = _interopRequireDefault(require("./locales"));

var _widgets = _interopRequireDefault(require("./widgets"));

var _createTranslate = _interopRequireDefault(require("./helpers/createTranslate"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const DEFAULT_LANG = 'en';

var _default = (_ref) => {
  let components = _ref.components,
      _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? DEFAULT_LANG : _ref$lang,
      otherProps = (0, _objectWithoutProperties2.default)(_ref, ["components", "lang"]);
  (0, _deprecationWarnings.default)(otherProps);
  const translate = (0, _createTranslate.default)(_locales.default[lang].translation);
  return /*#__PURE__*/_react.default.createElement(_Board.default, (0, _extends2.default)({
    t: translate,
    components: _objectSpread(_objectSpread({}, _components.default), components)
  }, otherProps));
};

exports.default = _default;