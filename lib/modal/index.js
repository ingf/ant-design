'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _rcUtil = require('rc-util');

function noop() {}

var mousePosition = undefined;
var mousePositionEventBinded = undefined;

exports['default'] = _react2['default'].createClass({
  displayName: 'index',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-modal',
      onOk: noop,
      onCancel: noop
    };
  },

  getInitialState: function getInitialState() {
    return {
      confirmLoading: false,
      visible: this.props.visible
    };
  },

  handleCancel: function handleCancel() {
    this.props.onCancel();
    this.setState({
      visible: false
    });
  },

  handleOk: function handleOk() {
    this.setState({
      confirmLoading: true
    });
    this.props.onOk();
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      var newState = {
        visible: nextProps.visible
      };
      // 隐藏后去除按钮 loading 效果
      if (!nextProps.visible) {
        newState.confirmLoading = false;
      }
      this.setState(newState);
    }
  },

  componentDidMount: function componentDidMount() {
    if (mousePositionEventBinded) {
      return;
    }
    // 只有点击事件支持从鼠标位置动画展开
    _rcUtil.Dom.addEventListener(document.body, 'click', function onDocumentMousemove(e) {
      mousePosition = {
        x: e.pageX,
        y: e.pageY
      };
      // 20ms 内发生过点击事件，则从点击位置动画展示
      // 否则直接 zoom 展示
      // 这样可以兼容非点击方式展开
      setTimeout(function () {
        return mousePosition = null;
      }, 20);
    });
    mousePositionEventBinded = true;
  },

  render: function render() {
    var loadingClass = this.state.confirmLoading ? ' ant-btn-loading' : '';
    var props = this.props;
    var defaultFooter = [_react2['default'].createElement(
      'button',
      { key: 'cancel', type: 'button', className: 'ant-btn ant-btn-lg', onClick: this.handleCancel },
      '取 消'
    ), _react2['default'].createElement(
      'button',
      { key: 'confirm',
        type: 'button',
        className: 'ant-btn ant-btn-primary ant-btn-lg' + loadingClass,
        onClick: this.handleOk },
      '确 定'
    )];
    var footer = props.footer || defaultFooter;
    var visible = this.state.visible;
    return _react2['default'].createElement(_rcDialog2['default'], _extends({ transitionName: 'zoom', onClose: this.handleCancel,
      maskAnimation: 'fade', width: '500', footer: footer }, props, {
      visible: visible, mousePosition: mousePosition }));
  }
});
module.exports = exports['default'];