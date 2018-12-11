(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-vextensions"), require("react"), require("react-dom"), require("react-redux"), require("react-vcomponents"));
	else if(typeof define === 'function' && define.amd)
		define(["react-vextensions", "react", "react-dom", "react-redux", "react-vcomponents"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react-vextensions"), require("react"), require("react-dom"), require("react-redux"), require("react-vcomponents")) : factory(root["react-vextensions"], root["react"], root["react-dom"], root["react-redux"], root["react-vcomponents"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _VMessageBox = __webpack_require__(2);

	Object.keys(_VMessageBox).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _VMessageBox[key];
	    }
	  });
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MessageBoxUI = exports.MessageBoxState = exports.BoxController = exports.ACTMessageBoxUpdate = exports.ACTMessageBoxShow = exports.MessageBoxOptions = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.ShowMessageBox_Base = ShowMessageBox_Base;
	exports.ShowMessageBox = ShowMessageBox;
	exports.MessageBoxReducer = MessageBoxReducer;

	var _reactVextensions = __webpack_require__(3);

	var _reactModal = __webpack_require__(4);

	var _reactModal2 = _interopRequireDefault(_reactModal);

	var _reactRedux = __webpack_require__(25);

	var _reactVcomponents = __webpack_require__(26);

	var _Action3 = __webpack_require__(27);

	var _Action4 = _interopRequireDefault(_Action3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};

	var React = __webpack_require__(6);

	var MessageBoxOptions = exports.MessageBoxOptions = function MessageBoxOptions() {
	    _classCallCheck(this, MessageBoxOptions);

	    this.okButton = true;
	    this.okButtonClickable = true;
	    this.cancelButton = false;
	    this.cancelOnOverlayClick = false;
	};

	var ACTMessageBoxShow = exports.ACTMessageBoxShow = function (_Action) {
	    _inherits(ACTMessageBoxShow, _Action);

	    function ACTMessageBoxShow() {
	        _classCallCheck(this, ACTMessageBoxShow);

	        return _possibleConstructorReturn(this, (ACTMessageBoxShow.__proto__ || Object.getPrototypeOf(ACTMessageBoxShow)).apply(this, arguments));
	    }

	    return ACTMessageBoxShow;
	}(_Action4.default);

	var ACTMessageBoxUpdate = exports.ACTMessageBoxUpdate = function (_Action2) {
	    _inherits(ACTMessageBoxUpdate, _Action2);

	    function ACTMessageBoxUpdate() {
	        _classCallCheck(this, ACTMessageBoxUpdate);

	        return _possibleConstructorReturn(this, (ACTMessageBoxUpdate.__proto__ || Object.getPrototypeOf(ACTMessageBoxUpdate)).apply(this, arguments));
	    }

	    return ACTMessageBoxUpdate;
	}(_Action4.default);

	var BoxController = exports.BoxController = function () {
	    function BoxController(options, boxID) {
	        _classCallCheck(this, BoxController);

	        this.options = options;
	        this.boxID = boxID;
	    }

	    _createClass(BoxController, [{
	        key: "UpdateUI",
	        value: function UpdateUI() {
	            var updateInnerUI = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            store.dispatch(new ACTMessageBoxUpdate({ boxID: this.boxID, updateInnerUI: updateInnerUI }));
	        }
	    }, {
	        key: "Close",
	        value: function Close() {
	            store.dispatch(new ACTMessageBoxShow({ boxID: null }));
	        }
	    }]);

	    return BoxController;
	}();

	var lastBoxID = -1;
	var boxInfo = {};
	function ShowMessageBox_Base(options) {
	    var boxID = ++lastBoxID;
	    var controller = new BoxController(options, boxID);
	    // store options in extra storage, because ui-functions in it get ruined when put in Redux store
	    boxInfo[boxID] = { id: boxID, options: options, controller: controller };
	    store.dispatch(new ACTMessageBoxShow({ boxID: boxID }));
	    return controller;
	}
	//export function ShowMessageBox(options: Partial<MessageBoxOptions>) {
	function ShowMessageBox(options) {
	    var options_final = E(new MessageBoxOptions(), options);
	    var boxController = ShowMessageBox_Base(options_final);
	    return boxController;
	}

	var MessageBoxState = exports.MessageBoxState = function MessageBoxState() {
	    _classCallCheck(this, MessageBoxState);
	};

	function MessageBoxReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new MessageBoxState();
	    var action = arguments[1];

	    if (action.type == "ACTMessageBoxShow") return Object.assign({}, state, { openBoxID: action.payload.boxID });
	    if (action.type == "ACTMessageBoxUpdate") return Object.assign({}, state, { updateCallCount: (state.updateCallCount | 0) + 1 });
	    return state;
	}
	(0, _reactVextensions.AddGlobalStyle)("\n.ReactModal__Overlay { z-index: 1; }\n");
	var styles = {
	    overlay: {
	        position: "fixed", left: -1000, right: -1000, top: -1000, bottom: -1000,
	        display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,.5)"
	    },
	    container: {
	        overflow: "auto",
	        //top: "40px", left: "40px", right: "40px", bottom: "40px",
	        //left: "50%", right: "initial", top: "50%", bottom: "initial", transform: "translate(-50%, -50%)",
	        position: "relative", left: "initial", right: "initial", top: "initial", bottom: "initial",
	        background: "rgba(0,0,0,.75)", border: "1px solid #555", WebkitOverflowScrolling: "touch", borderRadius: "4px", outline: "none", padding: 0
	    },
	    title: {
	        padding: "5px 10px", background: "rgba(0,0,0,1)", cursor: "move", fontSize: "17px", fontWeight: "bold", whiteSpace: "pre",
	        border: "solid rgba(255,255,255,.1)", borderWidth: "0 0 1px 0"
	    },
	    message: { padding: "10px 20px", whiteSpace: "pre" },
	    buttonBar: { marginLeft: 20, marginBottom: 20, marginRight: 20 }
	};
	var MessageBoxUI = function (_BaseComponent) {
	    _inherits(MessageBoxUI, _BaseComponent);

	    function MessageBoxUI() {
	        _classCallCheck(this, MessageBoxUI);

	        return _possibleConstructorReturn(this, (MessageBoxUI.__proto__ || Object.getPrototypeOf(MessageBoxUI)).apply(this, arguments));
	    }

	    _createClass(MessageBoxUI, [{
	        key: "ComponentWillReceiveProps",
	        value: function ComponentWillReceiveProps(props) {
	            // if open-box-id changing, clear dialog position/offset
	            if (props.openBoxID != this.props.openBoxID) {
	                this.SetState({ offset: { x: 0, y: 0 } });
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this4 = this;

	            var openBoxID = this.props.openBoxID;

	            if (openBoxID == null) return React.createElement("div", null);
	            var info = boxInfo[openBoxID]; // get orig-options rather than options-in-store, because in-store version gets messed up
	            var o = info.options,
	                controller = info.controller;
	            var offset = this.state.offset;

	            return React.createElement(_reactModal2.default, { isOpen: true, contentLabel: "", ariaHideApp: false, style: {
	                    overlay: E(styles.overlay, o.overlayStyle),
	                    content: E(styles.container, { marginLeft: offset.x * 2, marginTop: offset.y * 2 }, // apply offset*2, because container's flex-based centering considers margins part of the size
	                    o.containerStyle)
	                }, shouldCloseOnOverlayClick: o.cancelOnOverlayClick, onRequestClose: function onRequestClose() {
	                    if (o.onCancel && o.onCancel() === false) return;
	                    store.dispatch(new ACTMessageBoxShow({ boxID: null }));
	                } }, o.title != null && React.createElement("div", { style: E(styles.title, o.titleStyle), onMouseDown: function onMouseDown(e) {
	                    _this4.moveBar_drag_origOffset = offset;
	                    _this4.moveBar_drag_mouseDownPos = { x: e.pageX, y: e.pageY };
	                    document.addEventListener("mousemove", _this4.moveBar_drag_mouseMoveListener = function (e) {
	                        if (_this4.moveBar_drag_mouseDownPos == null) return;
	                        var diffFromDragPoint = { x: e.pageX - _this4.moveBar_drag_mouseDownPos.x, y: e.pageY - _this4.moveBar_drag_mouseDownPos.y };
	                        _this4.SetState({ offset: { x: _this4.moveBar_drag_origOffset.x + diffFromDragPoint.x, y: _this4.moveBar_drag_origOffset.y + diffFromDragPoint.y } });
	                    });
	                    document.addEventListener("mouseup", _this4.moveBar_drag_mouseUpListener = function (e) {
	                        _this4.moveBar_drag_origOffset = null;
	                        _this4.moveBar_drag_mouseDownPos = null;
	                        document.removeEventListener("mousemove", _this4.moveBar_drag_mouseMoveListener);
	                        _this4.moveBar_drag_mouseMoveListener = null;
	                        document.removeEventListener("mouseup", _this4.moveBar_drag_mouseUpListener);
	                        _this4.moveBar_drag_mouseUpListener = null;
	                    });
	                } }, typeof o.title == "string" ? o.title : o.title()), o.message != null && React.createElement("div", { style: E(styles.message, o.messageStyle) }, typeof o.message == "string" ? o.message : o.message()), (o.okButton || o.cancelButton) && React.createElement("div", { style: E(styles.buttonBar, o.buttonBarStyle) }, o.okButton && React.createElement(_reactVcomponents.Button, { text: "OK", enabled: o.okButtonClickable, onClick: function onClick() {
	                    if (o.onOK && o.onOK() === false) return;
	                    controller.Close();
	                } }), o.cancelButton && React.createElement(_reactVcomponents.Button, { text: "Cancel", ml: o.okButton ? 10 : 0, onClick: function onClick() {
	                    if (o.onCancel && o.onCancel() === false) return;
	                    controller.Close();
	                } })));
	        }
	    }]);

	    return MessageBoxUI;
	}(_reactVextensions.BaseComponent);
	MessageBoxUI.defaultState = { offset: { x: 0, y: 0 } };
	exports.MessageBoxUI = MessageBoxUI = __decorate([(0, _reactRedux.connect)(function (state) {
	    return {
	        openBoxID: store.getState().messageBox.openBoxID,
	        updateCallCount: store.getState().messageBox.updateCallCount
	    };
	})], MessageBoxUI);
	exports.MessageBoxUI = MessageBoxUI;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react-vextensions");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Modal = __webpack_require__(5);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Modal2.default;
	module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bodyOpenClassName = exports.portalClassName = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _ModalPortal = __webpack_require__(15);

	var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

	var _ariaAppHider = __webpack_require__(19);

	var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

	var _safeHTMLElement = __webpack_require__(21);

	var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

	var _reactLifecyclesCompat = __webpack_require__(24);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var portalClassName = exports.portalClassName = "ReactModalPortal";
	var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

	var isReact16 = _reactDom2.default.createPortal !== undefined;

	var getCreatePortal = function getCreatePortal() {
	  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
	};

	function getParentElement(parentSelector) {
	  return parentSelector();
	}

	var Modal = function (_Component) {
	  _inherits(Modal, _Component);

	  function Modal() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Modal);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
	      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
	      var parent = getParentElement(_this.props.parentSelector);
	      parent.removeChild(_this.node);
	    }, _this.portalRef = function (ref) {
	      _this.portal = ref;
	    }, _this.renderPortal = function (props) {
	      var createPortal = getCreatePortal();
	      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
	      _this.portalRef(portal);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Modal, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      if (!_safeHTMLElement.canUseDOM) return;

	      if (!isReact16) {
	        this.node = document.createElement("div");
	      }
	      this.node.className = this.props.portalClassName;

	      var parent = getParentElement(this.props.parentSelector);
	      parent.appendChild(this.node);

	      !isReact16 && this.renderPortal(this.props);
	    }
	  }, {
	    key: "getSnapshotBeforeUpdate",
	    value: function getSnapshotBeforeUpdate(prevProps) {
	      var prevParent = getParentElement(prevProps.parentSelector);
	      var nextParent = getParentElement(this.props.parentSelector);
	      return { prevParent: prevParent, nextParent: nextParent };
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps, _, snapshot) {
	      if (!_safeHTMLElement.canUseDOM) return;
	      var _props = this.props,
	          isOpen = _props.isOpen,
	          portalClassName = _props.portalClassName;


	      if (prevProps.portalClassName !== portalClassName) {
	        this.node.className = portalClassName;
	      }

	      var prevParent = snapshot.prevParent,
	          nextParent = snapshot.nextParent;

	      if (nextParent !== prevParent) {
	        prevParent.removeChild(this.node);
	        nextParent.appendChild(this.node);
	      }

	      // Stop unnecessary renders if modal is remaining closed
	      if (!prevProps.isOpen && !isOpen) return;

	      !isReact16 && this.renderPortal(this.props);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

	      var state = this.portal.state;
	      var now = Date.now();
	      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

	      if (closesAt) {
	        if (!state.beforeClose) {
	          this.portal.closeWithTimeout();
	        }

	        setTimeout(this.removePortal, closesAt - now);
	      } else {
	        this.removePortal();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      if (!_safeHTMLElement.canUseDOM || !isReact16) {
	        return null;
	      }

	      if (!this.node && isReact16) {
	        this.node = document.createElement("div");
	      }

	      var createPortal = getCreatePortal();
	      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
	        ref: this.portalRef,
	        defaultStyles: Modal.defaultStyles
	      }, this.props)), this.node);
	    }
	  }], [{
	    key: "setAppElement",
	    value: function setAppElement(element) {
	      ariaAppHider.setElement(element);
	    }

	    /* eslint-disable react/no-unused-prop-types */

	    /* eslint-enable react/no-unused-prop-types */

	  }]);

	  return Modal;
	}(_react.Component);

	Modal.propTypes = {
	  isOpen: _propTypes2.default.bool.isRequired,
	  style: _propTypes2.default.shape({
	    content: _propTypes2.default.object,
	    overlay: _propTypes2.default.object
	  }),
	  portalClassName: _propTypes2.default.string,
	  bodyOpenClassName: _propTypes2.default.string,
	  htmlOpenClassName: _propTypes2.default.string,
	  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	    base: _propTypes2.default.string.isRequired,
	    afterOpen: _propTypes2.default.string.isRequired,
	    beforeClose: _propTypes2.default.string.isRequired
	  })]),
	  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	    base: _propTypes2.default.string.isRequired,
	    afterOpen: _propTypes2.default.string.isRequired,
	    beforeClose: _propTypes2.default.string.isRequired
	  })]),
	  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
	  onAfterOpen: _propTypes2.default.func,
	  onRequestClose: _propTypes2.default.func,
	  closeTimeoutMS: _propTypes2.default.number,
	  ariaHideApp: _propTypes2.default.bool,
	  shouldFocusAfterRender: _propTypes2.default.bool,
	  shouldCloseOnOverlayClick: _propTypes2.default.bool,
	  shouldReturnFocusAfterClose: _propTypes2.default.bool,
	  parentSelector: _propTypes2.default.func,
	  aria: _propTypes2.default.object,
	  data: _propTypes2.default.object,
	  role: _propTypes2.default.string,
	  contentLabel: _propTypes2.default.string,
	  shouldCloseOnEsc: _propTypes2.default.bool,
	  overlayRef: _propTypes2.default.func,
	  contentRef: _propTypes2.default.func
	};
	Modal.defaultProps = {
	  isOpen: false,
	  portalClassName: portalClassName,
	  bodyOpenClassName: bodyOpenClassName,
	  role: "dialog",
	  ariaHideApp: true,
	  closeTimeoutMS: 0,
	  shouldFocusAfterRender: true,
	  shouldCloseOnEsc: true,
	  shouldCloseOnOverlayClick: true,
	  shouldReturnFocusAfterClose: true,
	  parentSelector: function parentSelector() {
	    return document.body;
	  }
	};
	Modal.defaultStyles = {
	  overlay: {
	    position: "fixed",
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    backgroundColor: "rgba(255, 255, 255, 0.75)"
	  },
	  content: {
	    position: "absolute",
	    top: "40px",
	    left: "40px",
	    right: "40px",
	    bottom: "40px",
	    border: "1px solid #ccc",
	    background: "#fff",
	    overflow: "auto",
	    WebkitOverflowScrolling: "touch",
	    borderRadius: "4px",
	    outline: "none",
	    padding: "20px"
	  }
	};


	(0, _reactLifecyclesCompat.polyfill)(Modal);

	exports.default = Modal;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("react-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(10)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(14)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var assign = __webpack_require__(11);

	var ReactPropTypesSecret = __webpack_require__(12);
	var checkPropTypes = __webpack_require__(13);

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(12);
	  var loggedTypeFailures = {};

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          )

	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(12);

	function emptyFunction() {}

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _focusManager = __webpack_require__(16);

	var focusManager = _interopRequireWildcard(_focusManager);

	var _scopeTab = __webpack_require__(18);

	var _scopeTab2 = _interopRequireDefault(_scopeTab);

	var _ariaAppHider = __webpack_require__(19);

	var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

	var _classList = __webpack_require__(23);

	var classList = _interopRequireWildcard(_classList);

	var _safeHTMLElement = __webpack_require__(21);

	var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// so that our CSS is statically analyzable
	var CLASS_NAMES = {
	  overlay: "ReactModal__Overlay",
	  content: "ReactModal__Content"
	};

	var TAB_KEY = 9;
	var ESC_KEY = 27;

	var ariaHiddenInstances = 0;

	var ModalPortal = function (_Component) {
	  _inherits(ModalPortal, _Component);

	  function ModalPortal(props) {
	    _classCallCheck(this, ModalPortal);

	    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

	    _this.setOverlayRef = function (overlay) {
	      _this.overlay = overlay;
	      _this.props.overlayRef && _this.props.overlayRef(overlay);
	    };

	    _this.setContentRef = function (content) {
	      _this.content = content;
	      _this.props.contentRef && _this.props.contentRef(content);
	    };

	    _this.afterClose = function () {
	      var _this$props = _this.props,
	          appElement = _this$props.appElement,
	          ariaHideApp = _this$props.ariaHideApp,
	          htmlOpenClassName = _this$props.htmlOpenClassName,
	          bodyOpenClassName = _this$props.bodyOpenClassName;

	      // Remove classes.

	      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);

	      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

	      // Reset aria-hidden attribute if all modals have been removed
	      if (ariaHideApp && ariaHiddenInstances > 0) {
	        ariaHiddenInstances -= 1;

	        if (ariaHiddenInstances === 0) {
	          ariaAppHider.show(appElement);
	        }
	      }

	      if (_this.props.shouldFocusAfterRender) {
	        if (_this.props.shouldReturnFocusAfterClose) {
	          focusManager.returnFocus();
	          focusManager.teardownScopedFocus();
	        } else {
	          focusManager.popWithoutFocus();
	        }
	      }
	    };

	    _this.open = function () {
	      _this.beforeOpen();
	      if (_this.state.afterOpen && _this.state.beforeClose) {
	        clearTimeout(_this.closeTimer);
	        _this.setState({ beforeClose: false });
	      } else {
	        if (_this.props.shouldFocusAfterRender) {
	          focusManager.setupScopedFocus(_this.node);
	          focusManager.markForFocusLater();
	        }

	        _this.setState({ isOpen: true }, function () {
	          _this.setState({ afterOpen: true });

	          if (_this.props.isOpen && _this.props.onAfterOpen) {
	            _this.props.onAfterOpen();
	          }
	        });
	      }
	    };

	    _this.close = function () {
	      if (_this.props.closeTimeoutMS > 0) {
	        _this.closeWithTimeout();
	      } else {
	        _this.closeWithoutTimeout();
	      }
	    };

	    _this.focusContent = function () {
	      return _this.content && !_this.contentHasFocus() && _this.content.focus();
	    };

	    _this.closeWithTimeout = function () {
	      var closesAt = Date.now() + _this.props.closeTimeoutMS;
	      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
	        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
	      });
	    };

	    _this.closeWithoutTimeout = function () {
	      _this.setState({
	        beforeClose: false,
	        isOpen: false,
	        afterOpen: false,
	        closesAt: null
	      }, _this.afterClose);
	    };

	    _this.handleKeyDown = function (event) {
	      if (event.keyCode === TAB_KEY) {
	        (0, _scopeTab2.default)(_this.content, event);
	      }

	      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
	        event.stopPropagation();
	        _this.requestClose(event);
	      }
	    };

	    _this.handleOverlayOnClick = function (event) {
	      if (_this.shouldClose === null) {
	        _this.shouldClose = true;
	      }

	      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
	        if (_this.ownerHandlesClose()) {
	          _this.requestClose(event);
	        } else {
	          _this.focusContent();
	        }
	      }
	      _this.shouldClose = null;
	    };

	    _this.handleContentOnMouseUp = function () {
	      _this.shouldClose = false;
	    };

	    _this.handleOverlayOnMouseDown = function (event) {
	      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
	        event.preventDefault();
	      }
	    };

	    _this.handleContentOnClick = function () {
	      _this.shouldClose = false;
	    };

	    _this.handleContentOnMouseDown = function () {
	      _this.shouldClose = false;
	    };

	    _this.requestClose = function (event) {
	      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
	    };

	    _this.ownerHandlesClose = function () {
	      return _this.props.onRequestClose;
	    };

	    _this.shouldBeClosed = function () {
	      return !_this.state.isOpen && !_this.state.beforeClose;
	    };

	    _this.contentHasFocus = function () {
	      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
	    };

	    _this.buildClassName = function (which, additional) {
	      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
	        base: CLASS_NAMES[which],
	        afterOpen: CLASS_NAMES[which] + "--after-open",
	        beforeClose: CLASS_NAMES[which] + "--before-close"
	      };
	      var className = classNames.base;
	      if (_this.state.afterOpen) {
	        className = className + " " + classNames.afterOpen;
	      }
	      if (_this.state.beforeClose) {
	        className = className + " " + classNames.beforeClose;
	      }
	      return typeof additional === "string" && additional ? className + " " + additional : className;
	    };

	    _this.attributesFromObject = function (prefix, items) {
	      return Object.keys(items).reduce(function (acc, name) {
	        acc[prefix + "-" + name] = items[name];
	        return acc;
	      }, {});
	    };

	    _this.state = {
	      afterOpen: false,
	      beforeClose: false
	    };

	    _this.shouldClose = null;
	    _this.moveFromContentToOverlay = null;
	    return _this;
	  }

	  _createClass(ModalPortal, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      if (this.props.isOpen) {
	        this.open();
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (process.env.NODE_ENV !== "production") {
	        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
	          // eslint-disable-next-line no-console
	          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
	        }
	        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
	          // eslint-disable-next-line no-console
	          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
	        }
	      }

	      if (this.props.isOpen && !prevProps.isOpen) {
	        this.open();
	      } else if (!this.props.isOpen && prevProps.isOpen) {
	        this.close();
	      }

	      // Focus only needs to be set once when the modal is being opened
	      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
	        this.focusContent();
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.afterClose();
	      clearTimeout(this.closeTimer);
	    }
	  }, {
	    key: "beforeOpen",
	    value: function beforeOpen() {
	      var _props = this.props,
	          appElement = _props.appElement,
	          ariaHideApp = _props.ariaHideApp,
	          htmlOpenClassName = _props.htmlOpenClassName,
	          bodyOpenClassName = _props.bodyOpenClassName;

	      // Add classes.

	      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);

	      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

	      if (ariaHideApp) {
	        ariaHiddenInstances += 1;
	        ariaAppHider.hide(appElement);
	      }
	    }

	    // Don't steal focus from inner elements

	  }, {
	    key: "render",
	    value: function render() {
	      var _props2 = this.props,
	          className = _props2.className,
	          overlayClassName = _props2.overlayClassName,
	          defaultStyles = _props2.defaultStyles;

	      var contentStyles = className ? {} : defaultStyles.content;
	      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

	      return this.shouldBeClosed() ? null : _react2.default.createElement(
	        "div",
	        {
	          ref: this.setOverlayRef,
	          className: this.buildClassName("overlay", overlayClassName),
	          style: _extends({}, overlayStyles, this.props.style.overlay),
	          onClick: this.handleOverlayOnClick,
	          onMouseDown: this.handleOverlayOnMouseDown
	        },
	        _react2.default.createElement(
	          "div",
	          _extends({
	            ref: this.setContentRef,
	            style: _extends({}, contentStyles, this.props.style.content),
	            className: this.buildClassName("content", className),
	            tabIndex: "-1",
	            onKeyDown: this.handleKeyDown,
	            onMouseDown: this.handleContentOnMouseDown,
	            onMouseUp: this.handleContentOnMouseUp,
	            onClick: this.handleContentOnClick,
	            role: this.props.role,
	            "aria-label": this.props.contentLabel
	          }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {
	            "data-testid": this.props.testId
	          }),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return ModalPortal;
	}(_react.Component);

	ModalPortal.defaultProps = {
	  style: {
	    overlay: {},
	    content: {}
	  },
	  defaultStyles: {}
	};
	ModalPortal.propTypes = {
	  isOpen: _propTypes2.default.bool.isRequired,
	  defaultStyles: _propTypes2.default.shape({
	    content: _propTypes2.default.object,
	    overlay: _propTypes2.default.object
	  }),
	  style: _propTypes2.default.shape({
	    content: _propTypes2.default.object,
	    overlay: _propTypes2.default.object
	  }),
	  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	  bodyOpenClassName: _propTypes2.default.string,
	  htmlOpenClassName: _propTypes2.default.string,
	  ariaHideApp: _propTypes2.default.bool,
	  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
	  onAfterOpen: _propTypes2.default.func,
	  onRequestClose: _propTypes2.default.func,
	  closeTimeoutMS: _propTypes2.default.number,
	  shouldFocusAfterRender: _propTypes2.default.bool,
	  shouldCloseOnOverlayClick: _propTypes2.default.bool,
	  shouldReturnFocusAfterClose: _propTypes2.default.bool,
	  role: _propTypes2.default.string,
	  contentLabel: _propTypes2.default.string,
	  aria: _propTypes2.default.object,
	  data: _propTypes2.default.object,
	  children: _propTypes2.default.node,
	  shouldCloseOnEsc: _propTypes2.default.bool,
	  overlayRef: _propTypes2.default.func,
	  contentRef: _propTypes2.default.func,
	  testId: _propTypes2.default.string
	};
	exports.default = ModalPortal;
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleBlur = handleBlur;
	exports.handleFocus = handleFocus;
	exports.markForFocusLater = markForFocusLater;
	exports.returnFocus = returnFocus;
	exports.popWithoutFocus = popWithoutFocus;
	exports.setupScopedFocus = setupScopedFocus;
	exports.teardownScopedFocus = teardownScopedFocus;

	var _tabbable = __webpack_require__(17);

	var _tabbable2 = _interopRequireDefault(_tabbable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var focusLaterElements = [];
	var modalElement = null;
	var needToFocus = false;

	function handleBlur() {
	  needToFocus = true;
	}

	function handleFocus() {
	  if (needToFocus) {
	    needToFocus = false;
	    if (!modalElement) {
	      return;
	    }
	    // need to see how jQuery shims document.on('focusin') so we don't need the
	    // setTimeout, firefox doesn't support focusin, if it did, we could focus
	    // the element outside of a setTimeout. Side-effect of this implementation
	    // is that the document.body gets focus, and then we focus our element right
	    // after, seems fine.
	    setTimeout(function () {
	      if (modalElement.contains(document.activeElement)) {
	        return;
	      }
	      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
	      el.focus();
	    }, 0);
	  }
	}

	function markForFocusLater() {
	  focusLaterElements.push(document.activeElement);
	}

	/* eslint-disable no-console */
	function returnFocus() {
	  var toFocus = null;
	  try {
	    if (focusLaterElements.length !== 0) {
	      toFocus = focusLaterElements.pop();
	      toFocus.focus();
	    }
	    return;
	  } catch (e) {
	    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
	  }
	}
	/* eslint-enable no-console */

	function popWithoutFocus() {
	  focusLaterElements.length > 0 && focusLaterElements.pop();
	}

	function setupScopedFocus(element) {
	  modalElement = element;

	  if (window.addEventListener) {
	    window.addEventListener("blur", handleBlur, false);
	    document.addEventListener("focus", handleFocus, true);
	  } else {
	    window.attachEvent("onBlur", handleBlur);
	    document.attachEvent("onFocus", handleFocus);
	  }
	}

	function teardownScopedFocus() {
	  modalElement = null;

	  if (window.addEventListener) {
	    window.removeEventListener("blur", handleBlur);
	    document.removeEventListener("focus", handleFocus);
	  } else {
	    window.detachEvent("onBlur", handleBlur);
	    document.detachEvent("onFocus", handleFocus);
	  }
	}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = findTabbableDescendants;
	/*!
	 * Adapted from jQuery UI core
	 *
	 * http://jqueryui.com
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/category/ui-core/
	 */

	var tabbableNode = /input|select|textarea|button|object/;

	function hidesContents(element) {
	  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

	  // If the node is empty, this is good enough
	  if (zeroSize && !element.innerHTML) return true;

	  // Otherwise we need to check some styles
	  var style = window.getComputedStyle(element);
	  return zeroSize ? style.getPropertyValue("overflow") !== "visible" : style.getPropertyValue("display") == "none";
	}

	function visible(element) {
	  var parentElement = element;
	  while (parentElement) {
	    if (parentElement === document.body) break;
	    if (hidesContents(parentElement)) return false;
	    parentElement = parentElement.parentNode;
	  }
	  return true;
	}

	function focusable(element, isTabIndexNotNaN) {
	  var nodeName = element.nodeName.toLowerCase();
	  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
	  return res && visible(element);
	}

	function tabbable(element) {
	  var tabIndex = element.getAttribute("tabindex");
	  if (tabIndex === null) tabIndex = undefined;
	  var isTabIndexNaN = isNaN(tabIndex);
	  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
	}

	function findTabbableDescendants(element) {
	  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
	}
	module.exports = exports["default"];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = scopeTab;

	var _tabbable = __webpack_require__(17);

	var _tabbable2 = _interopRequireDefault(_tabbable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function scopeTab(node, event) {
	  var tabbable = (0, _tabbable2.default)(node);

	  if (!tabbable.length) {
	    // Do nothing, since there are no elements that can receive focus.
	    event.preventDefault();
	    return;
	  }

	  var shiftKey = event.shiftKey;
	  var head = tabbable[0];
	  var tail = tabbable[tabbable.length - 1];

	  // proceed with default browser behavior on tab.
	  // Focus on last element on shift + tab.
	  if (node === document.activeElement) {
	    if (!shiftKey) return;
	    target = tail;
	  }

	  var target;
	  if (tail === document.activeElement && !shiftKey) {
	    target = head;
	  }

	  if (head === document.activeElement && shiftKey) {
	    target = tail;
	  }

	  if (target) {
	    event.preventDefault();
	    target.focus();
	    return;
	  }

	  // Safari radio issue.
	  //
	  // Safari does not move the focus to the radio button,
	  // so we need to force it to really walk through all elements.
	  //
	  // This is very error prone, since we are trying to guess
	  // if it is a safari browser from the first occurence between
	  // chrome or safari.
	  //
	  // The chrome user agent contains the first ocurrence
	  // as the 'chrome/version' and later the 'safari/version'.
	  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
	  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

	  // If we are not in safari desktop, let the browser control
	  // the focus
	  if (!isSafariDesktop) return;

	  var x = tabbable.indexOf(document.activeElement);

	  if (x > -1) {
	    x += shiftKey ? -1 : 1;
	  }

	  // If the tabbable element does not exist,
	  // focus head/tail based on shiftKey
	  if (typeof tabbable[x] === "undefined") {
	    event.preventDefault();
	    target = shiftKey ? tail : head;
	    target.focus();
	    return;
	  }

	  event.preventDefault();

	  tabbable[x].focus();
	}
	module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.assertNodeList = assertNodeList;
	exports.setElement = setElement;
	exports.validateElement = validateElement;
	exports.hide = hide;
	exports.show = show;
	exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
	exports.resetForTesting = resetForTesting;

	var _warning = __webpack_require__(20);

	var _warning2 = _interopRequireDefault(_warning);

	var _safeHTMLElement = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var globalElement = null;

	function assertNodeList(nodeList, selector) {
	  if (!nodeList || !nodeList.length) {
	    throw new Error("react-modal: No elements were found for selector " + selector + ".");
	  }
	}

	function setElement(element) {
	  var useElement = element;
	  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
	    var el = document.querySelectorAll(useElement);
	    assertNodeList(el, useElement);
	    useElement = "length" in el ? el[0] : el;
	  }
	  globalElement = useElement || globalElement;
	  return globalElement;
	}

	function validateElement(appElement) {
	  if (!appElement && !globalElement) {
	    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

	    return false;
	  }

	  return true;
	}

	function hide(appElement) {
	  if (validateElement(appElement)) {
	    (appElement || globalElement).setAttribute("aria-hidden", "true");
	  }
	}

	function show(appElement) {
	  if (validateElement(appElement)) {
	    (appElement || globalElement).removeAttribute("aria-hidden");
	  }
	}

	function documentNotReadyOrSSRTesting() {
	  globalElement = null;
	}

	function resetForTesting() {
	  globalElement = null;
	}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.canUseDOM = undefined;

	var _exenv = __webpack_require__(22);

	var _exenv2 = _interopRequireDefault(_exenv);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EE = _exenv2.default;

	var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

	var canUseDOM = exports.canUseDOM = EE.canUseDOM;

	exports.default = SafeHTMLElement;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */

	(function () {
		'use strict';

		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen

		};

		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}

	}());


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dumpClassLists = dumpClassLists;
	var htmlClassList = {};
	var docBodyClassList = {};

	function dumpClassLists() {
	  if (process.env.NODE_ENV !== "production") {
	    var classes = document.getElementsByTagName("html")[0].className;
	    var buffer = "Show tracked classes:\n\n";

	    buffer += "<html /> (" + classes + "):\n";
	    for (var x in htmlClassList) {
	      buffer += "  " + x + " " + htmlClassList[x] + "\n";
	    }

	    classes = document.body.className;

	    // eslint-disable-next-line max-len
	    buffer += "\n\ndoc.body (" + classes + "):\n";
	    for (var _x in docBodyClassList) {
	      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
	    }

	    buffer += "\n";

	    // eslint-disable-next-line no-console
	    console.log(buffer);
	  }
	}

	/**
	 * Track the number of reference of a class.
	 * @param {object} poll The poll to receive the reference.
	 * @param {string} className The class name.
	 * @return {string}
	 */
	var incrementReference = function incrementReference(poll, className) {
	  if (!poll[className]) {
	    poll[className] = 0;
	  }
	  poll[className] += 1;
	  return className;
	};

	/**
	 * Drop the reference of a class.
	 * @param {object} poll The poll to receive the reference.
	 * @param {string} className The class name.
	 * @return {string}
	 */
	var decrementReference = function decrementReference(poll, className) {
	  if (poll[className]) {
	    poll[className] -= 1;
	  }
	  return className;
	};

	/**
	 * Track a class and add to the given class list.
	 * @param {Object} classListRef A class list of an element.
	 * @param {Object} poll         The poll to be used.
	 * @param {Array}  classes      The list of classes to be tracked.
	 */
	var trackClass = function trackClass(classListRef, poll, classes) {
	  classes.forEach(function (className) {
	    incrementReference(poll, className);
	    classListRef.add(className);
	  });
	};

	/**
	 * Untrack a class and remove from the given class list if the reference
	 * reaches 0.
	 * @param {Object} classListRef A class list of an element.
	 * @param {Object} poll         The poll to be used.
	 * @param {Array}  classes      The list of classes to be untracked.
	 */
	var untrackClass = function untrackClass(classListRef, poll, classes) {
	  classes.forEach(function (className) {
	    decrementReference(poll, className);
	    poll[className] === 0 && classListRef.remove(className);
	  });
	};

	/**
	 * Public inferface to add classes to the document.body.
	 * @param {string} bodyClass The class string to be added.
	 *                           It may contain more then one class
	 *                           with ' ' as separator.
	 */
	var add = exports.add = function add(element, classString) {
	  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
	};

	/**
	 * Public inferface to remove classes from the document.body.
	 * @param {string} bodyClass The class string to be added.
	 *                           It may contain more then one class
	 *                           with ' ' as separator.
	 */
	var remove = exports.remove = function remove(element, classString) {
	  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	function componentWillMount() {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}

	function componentWillReceiveProps(nextProps) {
	  // Call this.constructor.gDSFP to support sub-classes.
	  // Use the setState() updater to ensure state isn't stale in certain edge cases.
	  function updater(prevState) {
	    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
	    return state !== null && state !== undefined ? state : null;
	  }
	  // Binding "this" is important for shallow renderer support.
	  this.setState(updater.bind(this));
	}

	function componentWillUpdate(nextProps, nextState) {
	  try {
	    var prevProps = this.props;
	    var prevState = this.state;
	    this.props = nextProps;
	    this.state = nextState;
	    this.__reactInternalSnapshotFlag = true;
	    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
	      prevProps,
	      prevState
	    );
	  } finally {
	    this.props = prevProps;
	    this.state = prevState;
	  }
	}

	// React may warn about cWM/cWRP/cWU methods being deprecated.
	// Add a flag to suppress these warnings for this special case.
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;

	function polyfill(Component) {
	  var prototype = Component.prototype;

	  if (!prototype || !prototype.isReactComponent) {
	    throw new Error('Can only polyfill class components');
	  }

	  if (
	    typeof Component.getDerivedStateFromProps !== 'function' &&
	    typeof prototype.getSnapshotBeforeUpdate !== 'function'
	  ) {
	    return Component;
	  }

	  // If new component APIs are defined, "unsafe" lifecycles won't be called.
	  // Error if any of these lifecycles are present,
	  // Because they would work differently between older and newer (16.3+) versions of React.
	  var foundWillMountName = null;
	  var foundWillReceivePropsName = null;
	  var foundWillUpdateName = null;
	  if (typeof prototype.componentWillMount === 'function') {
	    foundWillMountName = 'componentWillMount';
	  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
	    foundWillMountName = 'UNSAFE_componentWillMount';
	  }
	  if (typeof prototype.componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'componentWillReceiveProps';
	  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	  }
	  if (typeof prototype.componentWillUpdate === 'function') {
	    foundWillUpdateName = 'componentWillUpdate';
	  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
	    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	  }
	  if (
	    foundWillMountName !== null ||
	    foundWillReceivePropsName !== null ||
	    foundWillUpdateName !== null
	  ) {
	    var componentName = Component.displayName || Component.name;
	    var newApiName =
	      typeof Component.getDerivedStateFromProps === 'function'
	        ? 'getDerivedStateFromProps()'
	        : 'getSnapshotBeforeUpdate()';

	    throw Error(
	      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
	        componentName +
	        ' uses ' +
	        newApiName +
	        ' but also contains the following legacy lifecycles:' +
	        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
	        (foundWillReceivePropsName !== null
	          ? '\n  ' + foundWillReceivePropsName
	          : '') +
	        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
	        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
	        'https://fb.me/react-async-component-lifecycle-hooks'
	    );
	  }

	  // React <= 16.2 does not support static getDerivedStateFromProps.
	  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
	  // Newer versions of React will ignore these lifecycles if gDSFP exists.
	  if (typeof Component.getDerivedStateFromProps === 'function') {
	    prototype.componentWillMount = componentWillMount;
	    prototype.componentWillReceiveProps = componentWillReceiveProps;
	  }

	  // React <= 16.2 does not support getSnapshotBeforeUpdate.
	  // As a workaround, use cWU to invoke the new lifecycle.
	  // Newer versions of React will ignore that lifecycle if gSBU exists.
	  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
	    if (typeof prototype.componentDidUpdate !== 'function') {
	      throw new Error(
	        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
	      );
	    }

	    prototype.componentWillUpdate = componentWillUpdate;

	    var componentDidUpdate = prototype.componentDidUpdate;

	    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
	      prevProps,
	      prevState,
	      maybeSnapshot
	    ) {
	      // 16.3+ will not execute our will-update method;
	      // It will pass a snapshot value to did-update though.
	      // Older versions will require our polyfilled will-update value.
	      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
	      // Because for <= 15.x versions this might be a "prevContext" object.
	      // We also can't just check "__reactInternalSnapshot",
	      // Because get-snapshot might return a falsy value.
	      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
	      var snapshot = this.__reactInternalSnapshotFlag
	        ? this.__reactInternalSnapshot
	        : maybeSnapshot;

	      componentDidUpdate.call(this, prevProps, prevState, snapshot);
	    };
	  }

	  return Component;
	}

	exports.polyfill = polyfill;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = require("react-redux");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = require("react-vcomponents");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Action = function Action(payload) {
	    _classCallCheck(this, Action);

	    this.type = this.constructor.name;
	    this.payload = payload;
	    //this.Extend(payload);
	    Object.setPrototypeOf(this, Object.getPrototypeOf({}));
	};
	/*Object.prototype._AddFunction("Is", Action.prototype.Is);
	Object.prototype._AddFunction("IsAny", Action.prototype.IsAny);*/
	/*export function IsACT<Props>(action, actionType: new(..._)=>Action<Props>): action is Props {
	    return action.type == actionType.name;
	    //return action instanceof actionType; // alternative
	}*/
	/*export function IsACT<T, Props>(action: Action<T>, actionType: new(..._)=>Action<Props>): action is Props {
	    return this.type == actionType.name;
	    //return this instanceof actionType; // alternative
	}*/


	exports.default = Action;

/***/ })
/******/ ])
});
;