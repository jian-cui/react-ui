'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _sider = require('./sider');

var _sider2 = _interopRequireDefault(_sider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_layout2.default.Sider = _sider2.default;

exports.default = _layout2.default;