'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import addEventlistener from 'rc-util/lib/Dom/addEventlistener';

function getOffset(element) {
  // const elementRect = element.getBoundingClientRect();
  // console.log(elementRect);
}

var Affix = function (_React$Component) {
  _inherits(Affix, _React$Component);

  function Affix(props) {
    _classCallCheck(this, Affix);

    var _this = _possibleConstructorReturn(this, (Affix.__proto__ || Object.getPrototypeOf(Affix)).call(this, props));

    _this.state = {
      affixStype: null
    };
    return _this;
  }

  _createClass(Affix, [{
    key: 'updatePosition',
    value: function updatePosition(e) {
      // 处理位置
      var _props = this.props,
          offsetBottom = _props.offsetBottom,
          offsetTop = _props.offsetTop,
          target = _props.target,
          onChange = _props.onChange;

      getOffset(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          offsetBottom = _props2.offsetBottom,
          offsetTop = _props2.offsetTop,
          target = _props2.target,
          onChange = _props2.onChange,
          children = _props2.children;

      var classes = (0, _classnames2.default)('react-affix');
      this.updatePosition();
      return _react2.default.createElement(
        'div',
        {
          className: classes,
          style: this.state.affixStyle },
        children
      );
    }
  }]);

  return Affix;
}(_react2.default.Component);

exports.default = Affix;


Affix.propTypes = {
  offBottom: _propTypes2.default.number,
  offsetTop: _propTypes2.default.number,
  target: _propTypes2.default.func,
  onChange: _propTypes2.default.func
};

Affix.defaultProps = {
  offsetBottom: 0,
  offsetTop: 0,
  target: function target() {
    return window;
  }
};