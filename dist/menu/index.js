'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('./menu.jsx');

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = require('./menuItem.jsx');

var _menuItem2 = _interopRequireDefault(_menuItem);

var _subMenu = require('./subMenu.jsx');

var _subMenu2 = _interopRequireDefault(_subMenu);

require('./style/style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_menu2.default.Item = _menuItem2.default;
_menu2.default.SubMenu = _subMenu2.default;

exports.default = _menu2.default;