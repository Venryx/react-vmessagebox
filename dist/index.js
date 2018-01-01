(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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

	var _reactModal = __webpack_require__(7);

	var _reactModal2 = _interopRequireDefault(_reactModal);

	var _reactRedux = __webpack_require__(32);

	var _reactVcomponents = __webpack_require__(62);

	var _Action3 = __webpack_require__(63);

	var _Action4 = _interopRequireDefault(_Action3);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

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
	            store.dispatch(new ACTMessageBoxShow(null));
	        }
	    }]);

	    return BoxController;
	}();

	var lastBoxID = -1;
	var boxUIs = {};
	function ShowMessageBox_Base(o) {
	    o.boxID = ++lastBoxID;
	    // store ui in extra storage, kuz it gets ruined when put in Redux store
	    boxUIs[o.boxID] = o.ui;
	    delete o.ui;
	    store.dispatch(new ACTMessageBoxShow(o));
	    return new BoxController(o, o.boxID);
	}
	//export function ShowMessageBox(options: Partial<MessageBoxOptions>) {
	function ShowMessageBox(options) {
	    var o = E(new MessageBoxOptions(), options);
	    o.ui = function () {
	        return _react2.default.createElement("div", null, o.titleUI ? o.titleUI() : _react2.default.createElement("div", { style: { fontSize: "18px", fontWeight: "bold", whiteSpace: "pre" } }, o.title), o.messageUI ? o.messageUI() : _react2.default.createElement("p", { style: { marginTop: 15, whiteSpace: "pre" } }, o.message), o.okButton && _react2.default.createElement(_reactVcomponents.Button, { text: "OK", enabled: o.okButtonClickable, onClick: function onClick() {
	                if (o.onOK && o.onOK() === false) return;
	                boxController.Close();
	            } }), o.cancelButton && _react2.default.createElement(_reactVcomponents.Button, { text: "Cancel", ml: o.okButton ? 10 : 0, onClick: function onClick() {
	                if (o.onCancel && o.onCancel() === false) return;
	                boxController.Close();
	            } }));
	    };
	    var boxController = ShowMessageBox_Base(o);
	    return boxController;
	}
	(0, _reactVextensions.AddGlobalStyle)("\n.ReactModal__Overlay { z-index: 1; }\n");
	var styles = {
	    overlay: { position: "fixed", left: 0, right: 0, top: 0, bottom: 0, backgroundColor: "rgba(0,0,0,.5)" },
	    container: {
	        position: "absolute", overflow: "auto",
	        //top: "40px", left: "40px", right: "40px", bottom: "40px",
	        left: "50%", right: "initial", top: "50%", bottom: "initial", transform: "translate(-50%, -50%)",
	        background: "rgba(0,0,0,.75)", border: "1px solid #555", WebkitOverflowScrolling: "touch", borderRadius: "4px", outline: "none", padding: "20px"
	    }
	};

	var MessageBoxState = exports.MessageBoxState = function MessageBoxState() {
	    _classCallCheck(this, MessageBoxState);
	};

	function MessageBoxReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new MessageBoxState();
	    var action = arguments[1];

	    if (action.type == "ACTMessageBoxShow") return Object.assign({}, state, { openOptions: action.payload });
	    if (action.type == "ACTMessageBoxUpdate") return Object.assign({}, state, { openOptions: Object.assign({}, state.openOptions, { updateInnerUI: action.payload.updateInnerUI }) });
	    return state;
	}
	var MessageBoxUI = function (_BaseComponent) {
	    _inherits(MessageBoxUI, _BaseComponent);

	    function MessageBoxUI() {
	        _classCallCheck(this, MessageBoxUI);

	        return _possibleConstructorReturn(this, (MessageBoxUI.__proto__ || Object.getPrototypeOf(MessageBoxUI)).apply(this, arguments));
	    }

	    _createClass(MessageBoxUI, [{
	        key: "render",
	        value: function render() {
	            var options = this.props.options;

	            if (options == null) return _react2.default.createElement("div", null);
	            var updateInnerUI = true; // options["updateInnerUI"] != false;
	            options["updateInnerUI"] = false; // have it only happen once
	            var boxID = options.boxID,
	                title = options.title,
	                onCancel = options.onCancel,
	                overlayStyle = options.overlayStyle,
	                containerStyle = options.containerStyle;

	            var ui = boxUIs[boxID];
	            var innerUI = updateInnerUI ? ui() : this.lastInnerUIResult;
	            this.lastInnerUIResult = innerUI;
	            return _react2.default.createElement(_reactModal2.default, { isOpen: true, contentLabel: title || "", style: { overlay: E(styles.overlay, overlayStyle), content: E(styles.container, containerStyle) }, shouldCloseOnOverlayClick: options.cancelOnOverlayClick, onRequestClose: function onRequestClose() {
	                    if (onCancel && onCancel() === false) return;
	                    store.dispatch(new ACTMessageBoxShow(null));
	                } }, innerUI);
	        }
	    }]);

	    return MessageBoxUI;
	}(_reactVextensions.BaseComponent);
	exports.MessageBoxUI = MessageBoxUI = __decorate([(0, _reactRedux.connect)(function (state) {
	    return {
	        options: store.getState().messageBox.openOptions
	    };
	})], MessageBoxUI);
	exports.MessageBoxUI = MessageBoxUI;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(5), __webpack_require__(6));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
			var a = (typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
			for (var i in a) {
				((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
			}
		}
	})(undefined, function (__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "http://localhost:8080/";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				module.exports = __webpack_require__(1);

				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _General = __webpack_require__(2);

				Object.keys(_General).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _General[key];
						}
					});
				});

				var _BaseComponent = __webpack_require__(8);

				Object.keys(_BaseComponent).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _BaseComponent[key];
						}
					});
				});

				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.basePropFullKeys = exports.ShallowCompare = undefined;
				exports.E = E;
				exports.ToJSON = ToJSON;
				exports.FromJSON = FromJSON;
				exports.RemoveDuplicates = RemoveDuplicates;
				exports.FindDOM = FindDOM;
				exports.FindReact = FindReact;
				exports.GetInnerComp = GetInnerComp;
				exports.BasicStyles = BasicStyles;
				exports.ApplyBasicStyles = ApplyBasicStyles;
				exports.SimpleShouldUpdate = SimpleShouldUpdate;
				exports.SimpleShouldUpdate_Overridable = SimpleShouldUpdate_Overridable;
				exports.Instant = Instant;
				exports.ShallowEquals = ShallowEquals;
				exports.ShallowChanged = ShallowChanged;
				exports.AddGlobalElement = AddGlobalElement;
				exports.AddGlobalStyle = AddGlobalStyle;
				exports.HasSealedProps = HasSealedProps;
				exports.Sealed = Sealed;

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactDom = __webpack_require__(4);

				var _reactDom2 = _interopRequireDefault(_reactDom);

				var _shallowCompare = __webpack_require__(5);

				var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

				var _classnames = __webpack_require__(7);

				var _classnames2 = _interopRequireDefault(_classnames);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				exports.ShallowCompare = _shallowCompare2.default;

				function G(entries) {
					Object.assign(window, entries);
				}
				G({ E: E });
				function E(e1, e2, e3, e4, e5, e6, e7, e8) {
					var result = {};
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var extend = _step.value;

							result.Extend(extend);
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					return result;
					//return StyleSheet.create(result);
				}
				function ToJSON(obj) {
					return JSON.stringify(obj);
				}
				function FromJSON(json) {
					return JSON.parse(json);
				}
				function RemoveDuplicates(items) {
					var result = [];
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var item = _step2.value;

							if (result.indexOf(item) == -1) {
								result.push(item);
							}
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}

					return result;
				}
				//var ReactInstanceMap = require("react/lib/ReactInstanceMap");
				G({ ShallowCompare: _shallowCompare2.default });
				G({ React: _react2.default, Text: Text });
				function FindDOM(comp) {
					return _reactDom2.default.findDOMNode(comp);
				}
				;
				G({ FindDOM: FindDOM });
				/*declare var $;
	   export function FindDOM_(comp) { return $(FindDOM(comp)) as JQuery; };
	   G({FindDOM_});*/
				function FindReact(dom) {
					for (var key in dom) {
						if (key.startsWith("__reactInternalInstance$")) {
							var compInternals = dom[key]._currentElement;
							var compWrapper = compInternals._owner;
							var comp = compWrapper._instance;
							//return comp as React.Component<any, any>;
							return comp;
						}
					}return null;
				}
				G({ FindReact: FindReact });
				// needed for wrapper-components that don't provide way of accessing inner-component
				function GetInnerComp(wrapperComp) {
					return FindReact(FindDOM(wrapperComp));
				}
				G({ GetInnerComp: GetInnerComp });
				var basePropFullKeys = exports.basePropFullKeys = {
					m: "margin", ml: "marginLeft", mr: "marginRight", mt: "marginTop", mb: "marginBottom",
					mlr: null, mtb: null,
					p: "padding", pl: "paddingLeft", pr: "paddingRight", pt: "paddingTop", pb: "paddingBottom",
					plr: null, ptb: null,
					sel: null,
					ct: null,
					tabLabel: null, active: null,
					page: null, match: null,
					firebase: null
				};
				function RemoveBasePropKeys(restObj) {
					for (var key in basePropFullKeys) {
						delete restObj[key];
					}
				}
				function BasicStyles(props) {
					var result = {};
					for (var key in props) {
						if (basePropFullKeys[key] != null) {
							var fullKey = basePropFullKeys[key];
							result[fullKey] = props[key];
						} else if (key == "mlr") {
							result.marginLeft = props[key];
							result.marginRight = props[key];
						} else if (key == "mtb") {
							result.marginTop = props[key];
							result.marginBottom = props[key];
						} else if (key == "plr") {
							result.paddingLeft = props[key];
							result.paddingRight = props[key];
						} else if (key == "ptb") {
							result.paddingTop = props[key];
							result.paddingBottom = props[key];
						}
					}
					return result;
				}
				function ApplyBasicStyles(target) {
					var oldRender = target.prototype.render;
					target.prototype.render = function () {
						var result = oldRender.call(this);
						var props = this.props;
						var className = (0, _classnames2.default)({ selectable: props.sel, clickThrough: props.ct }, result.props.className);
						if (className) {
							result.props.className = className;
						}
						result.props.style = E(BasicStyles(props), result.props.style);
						RemoveBasePropKeys(result.props);
						return result;
					};
				}
				/*export function ApplyBasicStyles(target: React.ComponentClass<any>, funcName: string) {
	       let oldRender = target.prototype.render;
	       target.prototype.render = function() {
	           let result = oldRender.call(this) as JSX.Element;
	           result.props.style = E(BasicStyles(result.props), result.props.style);
	           RemoveBasePropKeys(result.props);
	           return result;
	       }
	   }*/
				function SimpleShouldUpdate(target) {
					target.prototype.shouldComponentUpdate = function (newProps, newState) {
						/*if (ShallowCompare(this, newProps, newState))
	         Log("Changed: " + this.props.Props().Where(a=>a.value !== newProps[a.name]).Select(a=>a.name) + ";" + g.ToJSON(this.props) + ";" + g.ToJSON(newProps));*/
						return (0, _shallowCompare2.default)(this, newProps, newState);
					};
				}
				//export function SimpleShouldUpdate_Overridable(target: Component<{shouldUpdate: (newProps: React.Props<any>, newState: any)=>boolean}, {}>) {
				function SimpleShouldUpdate_Overridable(target) {
					target.prototype.shouldComponentUpdate = function (newProps, newState) {
						var shouldUpdate = newProps.shouldUpdate;

						if (typeof shouldUpdate == "boolean") return shouldUpdate;
						if (typeof shouldUpdate == "function") return shouldUpdate(newProps, newState);
						return (0, _shallowCompare2.default)(this, newProps, newState);
					};
				}
				// for PostRender() func
				function Instant(target, name) {
					target[name].instant = true;
				}
				function ShallowEquals(objA, objB) {
					if (objA === objB) return true;
					var keysA = Object.keys(objA || {});
					var keysB = Object.keys(objB || {});
					if (keysA.length !== keysB.length) return false;
					// Test for A's keys different from B.
					var hasOwn = Object.prototype.hasOwnProperty;
					for (var i = 0; i < keysA.length; i++) {
						if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
							return false;
						}
						var valA = objA[keysA[i]];
						var valB = objB[keysA[i]];
						if (valA !== valB) return false;
					}
					return true;
				}
				G({ ShallowChanged: ShallowChanged });
				function ShallowChanged(objA, objB) {
					for (var _len = arguments.length, propsToCompareMoreDeeply = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
						propsToCompareMoreDeeply[_key - 2] = arguments[_key];
					}

					if (propsToCompareMoreDeeply.length) {
						if (ShallowChanged(objA.Excluding.apply(objA, propsToCompareMoreDeeply), objB.Excluding.apply(objB, propsToCompareMoreDeeply))) {
							return true;
						}
						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {
							for (var _iterator3 = propsToCompareMoreDeeply[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var key = _step3.value;

								// for "children", shallow-compare at two levels deeper
								if (key == "children") {
									var _iteratorNormalCompletion4 = true;
									var _didIteratorError4 = false;
									var _iteratorError4 = undefined;

									try {
										for (var _iterator4 = (objA.children || {}).VKeys().concat((objB.children || {}).VKeys())[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
											var childKey = _step4.value;

											if (ShallowChanged(objA.children[childKey], objB.children[childKey])) return true;
										}
									} catch (err) {
										_didIteratorError4 = true;
										_iteratorError4 = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion4 && _iterator4.return) {
												_iterator4.return();
											}
										} finally {
											if (_didIteratorError4) {
												throw _iteratorError4;
											}
										}
									}
								} else {
									if (ShallowChanged(objA[key], objB[key])) return true;
								}
							}
						} catch (err) {
							_didIteratorError3 = true;
							_iteratorError3 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion3 && _iterator3.return) {
									_iterator3.return();
								}
							} finally {
								if (_didIteratorError3) {
									throw _iteratorError3;
								}
							}
						}

						return false;
					}
					return !ShallowEquals(objA, objB);
				}
				//require("./GlobalStyles");
				var loaded = false;
				function AddGlobalElement(html) {
					/*$(()=> {
	        $(html).appendTo("#hidden_early");
	    });*/
					var proceed = function proceed() {
						loaded = true;
						var nodeType = html.trim().substring(1, html.trim().IndexOfAny(" ", ">"));
						var element = document.createElement(nodeType);
						document.querySelector("#hidden_early").appendChild(element);
						element.outerHTML = html;
					};
					if (loaded) proceed();else window.addEventListener("load", proceed);
				}
				;
				function AddGlobalStyle(str) {
					AddGlobalElement("\n<style>\n" + str + "\n</style>\n\t");
				}
				;
				/*AddGlobalStyle(`
	   *:not(.ignoreBaseCSS) {
	       color: rgba(255,255,255,.7);
	   }
	   `);*/
				/** Tunnels into Radium wrapper-class, and retrieves the original class, letting you access its static props. */
				/*export function PreRadium<T>(typeGetterFunc: ()=>T, setFunc: Function): T {
	       WaitXThenRun(0, ()=> {
	           debugger;
	           let type = typeGetterFunc() as any;
	           setFunc(type.DecoratedComponent);
	       });
	       return {} as any;
	   }*/
				/*export function PreRadium<T>(_: T, wrapperClass: Function): T {
	       return (wrapperClass as any).DecoratedComponent;
	   }*/
				/*export function GetErrorMessagesUnderElement(element: HTMLElement) {
	       return $(element).find(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
	       return element.querySelector(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
	   }*/
				function HasSealedProps(target) {
					var oldConstructor = target.constructor;
					target.constructor = function () {
						for (var key in target["prototype"]) {
							var method = target["prototype"][key];
							if (method.sealed && this[key] != method) {
								throw new Error("Cannot override sealed method \"" + key + "\".");
							}
						}
						return oldConstructor.apply(this, arguments);
					};
				}
				function Sealed(target, key) {
					target[key].sealed = true;
				}

				/***/
			},
			/* 3 */
			/***/function (module, exports) {

				module.exports = __webpack_require__(5);

				/***/
			},
			/* 4 */
			/***/function (module, exports) {

				module.exports = __webpack_require__(6);

				/***/
			},
			/* 5 */
			/***/function (module, exports, __webpack_require__) {

				/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */

				'use strict';

				var shallowEqual = __webpack_require__(6);

				/**
	    * Does a shallow comparison for props and state.
	    * See ReactComponentWithPureRenderMixin
	    * See also https://facebook.github.io/react/docs/shallow-compare.html
	    */
				function shallowCompare(instance, nextProps, nextState) {
					return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
				}

				module.exports = shallowCompare;

				/***/
			},
			/* 6 */
			/***/function (module, exports) {

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * @typechecks
	    * 
	    */

				/*eslint-disable no-self-compare */

				'use strict';

				var hasOwnProperty = Object.prototype.hasOwnProperty;

				/**
	    * inlined Object.is polyfill to avoid requiring consumers ship their own
	    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	    */
				function is(x, y) {
					// SameValue algorithm
					if (x === y) {
						// Steps 1-5, 7-10
						// Steps 6.b-6.e: +0 != -0
						// Added the nonzero y check to make Flow happy, but it is redundant
						return x !== 0 || y !== 0 || 1 / x === 1 / y;
					} else {
						// Step 6.a: NaN == NaN
						return x !== x && y !== y;
					}
				}

				/**
	    * Performs equality by iterating through keys on an object and returning false
	    * when any key has values which are not strictly equal between the arguments.
	    * Returns true when the values of all keys are strictly equal.
	    */
				function shallowEqual(objA, objB) {
					if (is(objA, objB)) {
						return true;
					}

					if ((typeof objA === 'undefined' ? 'undefined' : _typeof2(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof2(objB)) !== 'object' || objB === null) {
						return false;
					}

					var keysA = Object.keys(objA);
					var keysB = Object.keys(objB);

					if (keysA.length !== keysB.length) {
						return false;
					}

					// Test for A's keys different from B.
					for (var i = 0; i < keysA.length; i++) {
						if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
							return false;
						}
					}

					return true;
				}

				module.exports = shallowEqual;

				/***/
			},
			/* 7 */
			/***/function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
	                                                                    Copyright (c) 2016 Jed Watson.
	                                                                    Licensed under the MIT License (MIT), see
	                                                                    http://jedwatson.github.io/classnames
	                                                                    */
				/* global define */

				(function () {
					'use strict';

					var hasOwn = {}.hasOwnProperty;

					function classNames() {
						var classes = [];

						for (var i = 0; i < arguments.length; i++) {
							var arg = arguments[i];
							if (!arg) continue;

							var argType = typeof arg === 'undefined' ? 'undefined' : _typeof2(arg);

							if (argType === 'string' || argType === 'number') {
								classes.push(arg);
							} else if (Array.isArray(arg)) {
								classes.push(classNames.apply(null, arg));
							} else if (argType === 'object') {
								for (var key in arg) {
									if (hasOwn.call(arg, key) && arg[key]) {
										classes.push(key);
									}
								}
							}
						}

						return classes.join(' ');
					}

					if (typeof module !== 'undefined' && module.exports) {
						module.exports = classNames;
					} else if (true) {
						// register as 'classnames', consistent with npm package name
						!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
							return classNames;
						}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
					} else {
						window.classNames = classNames;
					}
				})();

				/***/
			},
			/* 8 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.BaseComponent = exports.RenderSource = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactAutobind = __webpack_require__(9);

				var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

				var _General = __webpack_require__(2);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
					var c = arguments.length,
					    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
					    d;
					if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
						if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
					}return c > 3 && r && Object.defineProperty(target, key, r), r;
				};
				var RenderSource = exports.RenderSource = undefined;
				(function (RenderSource) {
					RenderSource[RenderSource["Mount"] = 0] = "Mount";
					RenderSource[RenderSource["PropChange"] = 1] = "PropChange";
					RenderSource[RenderSource["SetState"] = 2] = "SetState";
					RenderSource[RenderSource["Update"] = 3] = "Update";
				})(RenderSource || (exports.RenderSource = RenderSource = {}));
				var BaseComponent = BaseComponent_1 = function (_Component) {
					_inherits(BaseComponent, _Component);

					function BaseComponent(props) {
						_classCallCheck(this, BaseComponent);

						// helper for debugging
						var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

						_this.GetPropsChanged_lastProps = {};
						_this.GetStateChanged_lastState = {};
						_this.changeListeners = [];
						_this.autoRemoveChangeListeners = true;
						_this.mounted = false;
						(0, _reactAutobind2.default)(_this);
						// if had @Radium decorator, then "this" is actually an instance of a class-specific "RadiumEnhancer" derived-class
						//		so reach in to original class, and set up auto-binding for its prototype members as well
						if (_this.constructor.name == "RadiumEnhancer") (0, _reactAutobind2.default)(Object.getPrototypeOf(_this));
						//this.state = this.state || this.defaultState || {} as any;
						_this.state = _this.constructor["defaultState"] || {};
						// if using PreRender, wrap render func
						if (_this.PreRender != BaseComponent_1.prototype.PreRender) {
							var oldRender = _this.render;
							_this.render = function () {
								this.PreRender();
								return oldRender.apply(this, arguments);
							};
						}
						// you know what, let's just always wrap the render() method, in this project; solves the annoying firebase-gobbling-errors issue
						/*let oldRender = this.render;
	     this.render = function() {
	         try {
	             this.PreRender();
	             return oldRender.apply(this, arguments);
	         } catch (ex) {
	             debugger;
	             throw ex;
	         }
	     };*/
						return _this;
					}
					//timers = [] as Timer[];


					_createClass(BaseComponent, [{
						key: "GetPropsChanged",
						value: function GetPropsChanged() {
							var _this2 = this;

							var keys = (0, _General.RemoveDuplicates)(Object.keys(this.props).concat(Object.keys(this.GetPropsChanged_lastProps)));
							var result = keys.filter(function (key) {
								return !Object.is(_this2.props[key], _this2.GetPropsChanged_lastProps[key]);
							});
							this.GetPropsChanged_lastProps = Object.assign({}, this.props);
							return result;
						}
					}, {
						key: "GetPropsChanged_Data",
						value: function GetPropsChanged_Data() {
							var _this3 = this;

							return (0, _General.ToJSON)(this.GetPropsChanged().reduce(function (result, key) {
								return result[key] = _this3.props[key], result;
							}, {}));
						}
					}, {
						key: "GetStateChanged",
						value: function GetStateChanged() {
							var _this4 = this;

							var keys = (0, _General.RemoveDuplicates)(Object.keys(this.state).concat(Object.keys(this.GetStateChanged_lastState)));
							var result = keys.filter(function (key) {
								return !Object.is(_this4.state[key], _this4.GetStateChanged_lastState[key]);
							});
							this.GetStateChanged_lastState = Object.assign({}, this.state);
							return result;
						}
					}, {
						key: "GetStateChanged_Data",
						value: function GetStateChanged_Data() {
							var _this5 = this;

							return (0, _General.ToJSON)(this.GetStateChanged().reduce(function (result, key) {
								return result[key] = _this5.state[key], result;
							}, {}));
						}
					}, {
						key: "forceUpdate",
						value: function forceUpdate(_) {
							//throw new Error("Do not call this. Call Update() instead.");
						}
					}, {
						key: "Update",
						value: function Update(postUpdate) {
							//if (!this.Mounted) return;
							this.lastRender_source = RenderSource.Update;
							//this.forceUpdate(postUpdate);
							_react.Component.prototype.forceUpdate.call(this, postUpdate);
						}
					}, {
						key: "Clear",
						value: function Clear(postClear) {
							var oldRender = this.render;
							this.render = function () {
								var _this6 = this;

								this.render = oldRender;
								//WaitXThenRun(0, this.Update);
								setTimeout(function () {
									return _this6.Update();
								});
								return _react2.default.createElement("div", null);
							};
							postClear();
						}
					}, {
						key: "ClearThenUpdate",
						value: function ClearThenUpdate() {
							var _this7 = this;

							//this.Clear(this.Update);
							this.Clear(function () {
								return _this7.Update();
							});
						}
						/** Shortcut for "()=>(this.forceUpdate(), this.ComponentWillMountOrReceiveProps(props))". */

					}, {
						key: "UpdateAndReceive",
						value: function UpdateAndReceive(props) {
							var _this8 = this,
							    _arguments = arguments;

							return function () {
								//if (!this.Mounted) return;
								//this.forceUpdate();
								_react.Component.prototype.forceUpdate.apply(_this8, _arguments);
								if (_this8.autoRemoveChangeListeners) _this8.RemoveChangeListeners();
								_this8.ComponentWillMountOrReceiveProps(props);
							};
						}
						//setState(_: ()=>"Do not call this. Call SetState() instead.") {
						/*setState() {
	         throw new Error("Do not call this. Call SetState() instead.");
	     }*/

					}, {
						key: "setState",
						value: function setState() {
							return null;
						}
					}, {
						key: "SetState",
						value: function SetState(newState, callback) {
							var _this9 = this;

							var cancelIfStateSame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
							var deepCompare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

							if (cancelIfStateSame) {
								// we only care about new-state's keys -- setState() leaves unmentioned keys untouched
								var oldState_forNewStateKeys = Object.keys(newState).reduce(function (result, key) {
									return result[key] = _this9.state[key], result;
								}, {});
								if (deepCompare) {
									if ((0, _General.ToJSON)(newState) == (0, _General.ToJSON)(oldState_forNewStateKeys)) return [];
								} else {
									//if (ShallowEquals(newState, oldState_forNewStateKeys)) return [];
									// use a looser comparison (we want a missing prop to be equivalent to null and undefined)
									var same = true;
									var _iteratorNormalCompletion = true;
									var _didIteratorError = false;
									var _iteratorError = undefined;

									try {
										for (var _iterator = (0, _General.RemoveDuplicates)(Object.keys(this.state).concat(Object.keys(newState)))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
											var key = _step.value;

											var valA = this.state[key];
											var valB = newState[key];
											if (valA == null && valB == null) continue;
											if (valA !== valB) {
												same = false;
												break;
											}
										}
									} catch (err) {
										_didIteratorError = true;
										_iteratorError = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion && _iterator.return) {
												_iterator.return();
											}
										} finally {
											if (_didIteratorError) {
												throw _iteratorError;
											}
										}
									}

									if (same) return [];
								}
							}
							this.lastRender_source = RenderSource.SetState;
							//this.setState(newState as S, callback);
							_react.Component.prototype.setState.apply(this, arguments);
						}
					}, {
						key: "AddChangeListeners",
						value: function AddChangeListeners(host) {
							if (host == null) return; // maybe temp
							/*host.extraMethods = funcs;
	      for (let func of funcs)
	          this.changeListeners.push({host: host, func: func});*/

							for (var _len = arguments.length, funcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
								funcs[_key - 1] = arguments[_key];
							}

							var _iteratorNormalCompletion2 = true;
							var _didIteratorError2 = false;
							var _iteratorError2 = undefined;

							try {
								for (var _iterator2 = funcs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
									var func = _step2.value;

									if (typeof func == "string") func = func.Func(this.Update);
									// if actual function, add it (else, ignore entry--it must have been a failed conditional)
									if (func instanceof Function) {
										//if (!host.HasExtraMethod(func)) {
										host.extraMethod = func;
										this.changeListeners.push({ host: host, func: func });
									}
								}
							} catch (err) {
								_didIteratorError2 = true;
								_iteratorError2 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion2 && _iterator2.return) {
										_iterator2.return();
									}
								} finally {
									if (_didIteratorError2) {
										throw _iteratorError2;
									}
								}
							}
						}
					}, {
						key: "RemoveChangeListeners",
						value: function RemoveChangeListeners() {
							//this.changeListeners = this.changeListeners || []; // temp fix for odd "is null" issue
							var _iteratorNormalCompletion3 = true;
							var _didIteratorError3 = false;
							var _iteratorError3 = undefined;

							try {
								for (var _iterator3 = this.changeListeners[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
									var changeListener = _step3.value;

									changeListener.host.removeExtraMethod = changeListener.func;
								}
							} catch (err) {
								_didIteratorError3 = true;
								_iteratorError3 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion3 && _iterator3.return) {
										_iterator3.return();
									}
								} finally {
									if (_didIteratorError3) {
										throw _iteratorError3;
									}
								}
							}

							this.changeListeners = [];
						}
					}, {
						key: "RemoveChangeListenersFor",
						value: function RemoveChangeListenersFor(host) {
							var changeListenersToRemove = this.changeListeners.filter(function (a) {
								return a.host == host;
							});
							var _iteratorNormalCompletion4 = true;
							var _didIteratorError4 = false;
							var _iteratorError4 = undefined;

							try {
								for (var _iterator4 = changeListenersToRemove[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
									var listener = _step4.value;

									listener.host.removeExtraMethod = listener.func;
									this.changeListeners.splice(this.changeListeners.indexOf(listener), 1);
								}
							} catch (err) {
								_didIteratorError4 = true;
								_iteratorError4 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion4 && _iterator4.return) {
										_iterator4.return();
									}
								} finally {
									if (_didIteratorError4) {
										throw _iteratorError4;
									}
								}
							}
						}
					}, {
						key: "ComponentWillMount",
						value: function ComponentWillMount() {}
					}, {
						key: "ComponentWillMountOrReceiveProps",
						value: function ComponentWillMountOrReceiveProps(newProps, forMount) {}
					}, {
						key: "componentWillMount",
						value: function componentWillMount() {
							if (this.autoRemoveChangeListeners) this.RemoveChangeListeners();
							this.ComponentWillMount();
							this.ComponentWillMountOrReceiveProps(this.props, true);
							this.lastRender_source = RenderSource.Mount;
						}
					}, {
						key: "ComponentDidMount",
						value: function ComponentDidMount() {}
					}, {
						key: "ComponentDidMountOrUpdate",
						value: function ComponentDidMountOrUpdate(lastProps, lastState) {}
					}, {
						key: "componentDidMount",
						value: function componentDidMount() {
							this.ComponentDidMount.apply(this, arguments);
							this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
							this.ComponentDidMountOrUpdate_lastProps = this.props;
							this.ComponentDidMountOrUpdate_lastState = this.state;
							/*let {Ref} = this.props;
	      if (Ref) Ref(this);*/
							this.mounted = true;
							this.CallPostRender();
						}
					}, {
						key: "ComponentWillUnmount",
						value: function ComponentWillUnmount() {}
					}, {
						key: "componentWillUnmount",
						value: function componentWillUnmount() {
							this.ComponentWillUnmount();
							/*for (let timer of this.timers) {
	          timer.Stop();
	      }
	      this.timers = [];*/
							/*let {Ref} = this.props;
	      if (Ref) Ref(null);*/
							this.mounted = false;
						}
					}, {
						key: "ComponentWillReceiveProps",
						value: function ComponentWillReceiveProps(newProps) {}
					}, {
						key: "componentWillReceiveProps",
						value: function componentWillReceiveProps(newProps) {
							if (this.autoRemoveChangeListeners) this.RemoveChangeListeners();
							this.ComponentWillReceiveProps(newProps);
							this.ComponentWillMountOrReceiveProps(newProps, false);
							this.lastRender_source = RenderSource.PropChange;
						}
					}, {
						key: "ComponentDidUpdate",
						value: function ComponentDidUpdate() {}
					}, {
						key: "componentDidUpdate",
						value: function componentDidUpdate() {
							this.ComponentDidUpdate.apply(this, arguments);
							this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
							this.ComponentDidMountOrUpdate_lastProps = this.props;
							this.ComponentDidMountOrUpdate_lastState = this.state;
							this.CallPostRender();
						}
					}, {
						key: "CallPostRender",
						value: function CallPostRender() {
							var _this10 = this;

							if (this.PostRender == BaseComponent_1.prototype.PostRender) return;
							var renderSource = this.lastRender_source;
							var ownPostRender = this.PostRender;
							// can be different, for wrapped components (apparently they copy the inner type's PostRender as their own PostRender -- except as a new function, for some reason)
							var prototypePostRender = this.constructor.prototype.PostRender;
							if (ownPostRender.instant || prototypePostRender.instant) {
								this.PostRender(renderSource);
							} else {
								/*if (QuickIncrement("PostRenderLog") <= 1)
	           Log("Calling PostRender for: " + this.constructor.name + ";" + V.GetStackTraceStr());*/
								//Log("Calling PostRender for: " + this.constructor.name);
								setTimeout(function () {
									return window.requestAnimationFrame(function () {
										//WaitXThenRun(0, ()=>g.requestIdleCallback(()=> {
										if (!_this10.mounted) return;
										_this10.PostRender(renderSource);
									});
								});
								/*WaitXThenRun(0, ()=> {
	           this.PostRender();
	       });*/
							}
						}
					}, {
						key: "PreRender",
						value: function PreRender() {}
					}, {
						key: "PostRender",
						value: function PostRender(source) {}
					}, {
						key: "DOM",
						get: function get() {
							return this.mounted ? (0, _General.FindDOM)(this) : null;
						}
						//get DOM_() { return this.mounted ? $(this.DOM) : null; }
						// needed for wrapper-components that don't provide way of accessing inner-component
						//get InnerComp() { return FindReact(this.DOM); }
						// make all these optional, so fits Component type definition/shape

					}, {
						key: "FlattenedChildren",
						get: function get() {
							var children = children instanceof Array ? this.props.children : [this.props.children];
							return _react2.default.Children.map(children.filter(function (a) {
								return a;
							}), function (a) {
								return a;
							});
						}
					}]);

					return BaseComponent;
				}(_react.Component);
				__decorate([_General.Sealed], BaseComponent.prototype, "componentWillMount", null);
				__decorate([_General.Sealed], BaseComponent.prototype, "componentDidMount", null);
				__decorate([_General.Sealed], BaseComponent.prototype, "componentWillUnmount", null);
				__decorate([_General.Sealed], BaseComponent.prototype, "componentWillReceiveProps", null);
				__decorate([_General.Sealed], BaseComponent.prototype, "componentDidUpdate", null);
				exports.BaseComponent = BaseComponent = BaseComponent_1 = __decorate([_General.HasSealedProps], BaseComponent);
				exports.BaseComponent = BaseComponent;

				var BaseComponent_1;
				//G({Component2: Component, BaseComponent: Component});

				/***/
			},
			/* 9 */
			/***/function (module, exports, __webpack_require__) {

				module.exports = __webpack_require__(10);

				/***/
			},
			/* 10 */
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, '__esModule', {
					value: true
				});
				exports['default'] = autoBind;
				var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

				var toBind = [];

				function autoBind(context) {
					if (context === undefined) {
						console.error('Autobind error: No context provided.');
						return;
					}

					var objPrototype = Object.getPrototypeOf(context);

					if (arguments.length > 1) {
						// If a list of methods to bind is provided, use it.
						toBind = Array.prototype.slice.call(arguments, 1);
					} else {
						// If no list of methods to bind is provided, bind all available methods in class.
						toBind = Object.getOwnPropertyNames(objPrototype);
					}

					toBind.forEach(function (method) {
						var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

						if (descriptor === undefined) {
							console.warn('Autobind: "' + method + '" method not found in class.');
							return;
						}

						// Return if it's special case function or if not a function at all
						if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
							return;
						}

						Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
					});
				}

				/**
	   * From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
	   * Return a descriptor removing the value and returning a getter
	   * The getter will return a .bind version of the function
	   * and memoize the result against a symbol on the instance
	   */
				function boundMethod(objPrototype, method, descriptor) {
					var fn = descriptor.value;

					return {
						configurable: true,
						get: function get() {
							if (this === objPrototype || this.hasOwnProperty(method)) {
								return fn;
							}

							var boundFn = fn.bind(this);
							Object.defineProperty(this, method, {
								value: boundFn,
								configurable: true,
								writable: true
							});
							return boundFn;
						}
					};
				}
				module.exports = exports['default'];

				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(53)(module)))

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("react-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var React = __webpack_require__(5);
	var ReactDOM = __webpack_require__(6);
	var DOMFactories = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);
	var ExecutionEnvironment = __webpack_require__(20);
	var ModalPortal = React.createFactory(__webpack_require__(21));
	var ariaAppHider = __webpack_require__(29);
	var refCount = __webpack_require__(30);
	var elementClass = __webpack_require__(31);
	var renderSubtreeIntoContainer = __webpack_require__(6).unstable_renderSubtreeIntoContainer;
	var Assign = __webpack_require__(25);
	var createReactClass = __webpack_require__(26);

	var SafeHTMLElement = ExecutionEnvironment.canUseDOM ? window.HTMLElement : {};
	var AppElement = ExecutionEnvironment.canUseDOM ? document.body : {appendChild: function() {}};

	function getParentElement(parentSelector) {
	  return parentSelector();
	}

	var Modal = createReactClass({

	  displayName: 'Modal',
	  statics: {
	    setAppElement: function(element) {
	        AppElement = ariaAppHider.setElement(element);
	    },
	    injectCSS: function() {
	      "production" !== process.env.NODE_ENV
	        && console.warn('React-Modal: injectCSS has been deprecated ' +
	                        'and no longer has any effect. It will be removed in a later version');
	    }
	  },

	  propTypes: {
	    isOpen: PropTypes.bool.isRequired,
	    style: PropTypes.shape({
	      content: PropTypes.object,
	      overlay: PropTypes.object
	    }),
	    portalClassName: PropTypes.string,
	    bodyOpenClassName: PropTypes.string,
	    appElement: PropTypes.instanceOf(SafeHTMLElement),
	    onAfterOpen: PropTypes.func,
	    onRequestClose: PropTypes.func,
	    closeTimeoutMS: PropTypes.number,
	    ariaHideApp: PropTypes.bool,
	    shouldCloseOnOverlayClick: PropTypes.bool,
	    parentSelector: PropTypes.func,
	    role: PropTypes.string,
	    contentLabel: PropTypes.string.isRequired
	  },

	  getDefaultProps: function () {
	    return {
	      isOpen: false,
	      portalClassName: 'ReactModalPortal',
	      bodyOpenClassName: 'ReactModal__Body--open',
	      ariaHideApp: true,
	      closeTimeoutMS: 0,
	      shouldCloseOnOverlayClick: true,
	      parentSelector: function () { return document.body; }
	    };
	  },

	  componentDidMount: function() {
	    this.node = document.createElement('div');
	    this.node.className = this.props.portalClassName;

	    if (this.props.isOpen) refCount.add(this);

	    var parent = getParentElement(this.props.parentSelector);
	    parent.appendChild(this.node);
	    this.renderPortal(this.props);
	  },

	  componentWillUpdate: function(newProps) {
	    if(newProps.portalClassName !== this.props.portalClassName) {
	      this.node.className = newProps.portalClassName;
	    }
	  },

	  componentWillReceiveProps: function(newProps) {
	    if (newProps.isOpen) refCount.add(this);
	    if (!newProps.isOpen) refCount.remove(this);
	    var currentParent = getParentElement(this.props.parentSelector);
	    var newParent = getParentElement(newProps.parentSelector);

	    if(newParent !== currentParent) {
	      currentParent.removeChild(this.node);
	      newParent.appendChild(this.node);
	    }

	    this.renderPortal(newProps);
	  },

	  componentWillUnmount: function() {
	    if (!this.node) return;

	    refCount.remove(this);

	    if (this.props.ariaHideApp) {
	      ariaAppHider.show(this.props.appElement);
	    }

	    var state = this.portal.state;
	    var now = Date.now();
	    var closesAt = state.isOpen && this.props.closeTimeoutMS
	      && (state.closesAt
	        || now + this.props.closeTimeoutMS);

	    if (closesAt) {
	      if (!state.beforeClose) {
	        this.portal.closeWithTimeout();
	      }

	      var that = this;
	      setTimeout(function() { that.removePortal(); }, closesAt - now);
	    } else {
	      this.removePortal();
	    }
	  },

	  removePortal: function() {
	    ReactDOM.unmountComponentAtNode(this.node);
	    var parent = getParentElement(this.props.parentSelector);
	    parent.removeChild(this.node);

	    if (refCount.count() === 0) {
	      elementClass(document.body).remove(this.props.bodyOpenClassName);
	    }
	  },

	  renderPortal: function(props) {
	    if (props.isOpen || refCount.count() > 0) {
	      elementClass(document.body).add(this.props.bodyOpenClassName);
	    } else {
	      elementClass(document.body).remove(this.props.bodyOpenClassName);
	    }

	    if (props.ariaHideApp) {
	      ariaAppHider.toggle(props.isOpen, props.appElement);
	    }

	    this.portal = renderSubtreeIntoContainer(this, ModalPortal(Assign({}, props, {defaultStyles: Modal.defaultStyles})), this.node);
	  },

	  render: function () {
	    return DOMFactories.noscript();
	  }
	});

	Modal.defaultStyles = {
	  overlay: {
	    position        : 'fixed',
	    top             : 0,
	    left            : 0,
	    right           : 0,
	    bottom          : 0,
	    backgroundColor : 'rgba(255, 255, 255, 0.75)'
	  },
	  content: {
	    position                : 'absolute',
	    top                     : '40px',
	    left                    : '40px',
	    right                   : '40px',
	    bottom                  : '40px',
	    border                  : '1px solid #ccc',
	    background              : '#fff',
	    overflow                : 'auto',
	    WebkitOverflowScrolling : 'touch',
	    borderRadius            : '4px',
	    outline                 : 'none',
	    padding                 : '20px'
	  }
	}

	module.exports = Modal

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

	'use strict';

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function(f) {
	  if (true) {
	    module.exports = f(__webpack_require__(5));
	    /* global define */
	  } else if (typeof define === 'function' && define.amd) {
	    define(['react'], f);
	  } else {
	    var g;
	    if (typeof window !== 'undefined') {
	      g = window;
	    } else if (typeof global !== 'undefined') {
	      g = global;
	    } else if (typeof self !== 'undefined') {
	      g = self;
	    } else {
	      g = this;
	    }

	    if (typeof g.React === 'undefined') {
	      throw Error('React module should be required before ReactDOMFactories');
	    }

	    g.ReactDOMFactories = f(g.React);
	  }
	})(function(React) {
	  /**
	   * Create a factory that creates HTML tag elements.
	   */
	  function createDOMFactory(type) {
	    var factory = React.createElement.bind(null, type);
	    // Expose the type on the factory and the prototype so that it can be
	    // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	    // This should not be named `constructor` since this may not be the function
	    // that created the element, and it may not even be a constructor.
	    factory.type = type;
	    return factory;
	  };

	  /**
	   * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	   */
	  var ReactDOMFactories = {
	    a: createDOMFactory('a'),
	    abbr: createDOMFactory('abbr'),
	    address: createDOMFactory('address'),
	    area: createDOMFactory('area'),
	    article: createDOMFactory('article'),
	    aside: createDOMFactory('aside'),
	    audio: createDOMFactory('audio'),
	    b: createDOMFactory('b'),
	    base: createDOMFactory('base'),
	    bdi: createDOMFactory('bdi'),
	    bdo: createDOMFactory('bdo'),
	    big: createDOMFactory('big'),
	    blockquote: createDOMFactory('blockquote'),
	    body: createDOMFactory('body'),
	    br: createDOMFactory('br'),
	    button: createDOMFactory('button'),
	    canvas: createDOMFactory('canvas'),
	    caption: createDOMFactory('caption'),
	    cite: createDOMFactory('cite'),
	    code: createDOMFactory('code'),
	    col: createDOMFactory('col'),
	    colgroup: createDOMFactory('colgroup'),
	    data: createDOMFactory('data'),
	    datalist: createDOMFactory('datalist'),
	    dd: createDOMFactory('dd'),
	    del: createDOMFactory('del'),
	    details: createDOMFactory('details'),
	    dfn: createDOMFactory('dfn'),
	    dialog: createDOMFactory('dialog'),
	    div: createDOMFactory('div'),
	    dl: createDOMFactory('dl'),
	    dt: createDOMFactory('dt'),
	    em: createDOMFactory('em'),
	    embed: createDOMFactory('embed'),
	    fieldset: createDOMFactory('fieldset'),
	    figcaption: createDOMFactory('figcaption'),
	    figure: createDOMFactory('figure'),
	    footer: createDOMFactory('footer'),
	    form: createDOMFactory('form'),
	    h1: createDOMFactory('h1'),
	    h2: createDOMFactory('h2'),
	    h3: createDOMFactory('h3'),
	    h4: createDOMFactory('h4'),
	    h5: createDOMFactory('h5'),
	    h6: createDOMFactory('h6'),
	    head: createDOMFactory('head'),
	    header: createDOMFactory('header'),
	    hgroup: createDOMFactory('hgroup'),
	    hr: createDOMFactory('hr'),
	    html: createDOMFactory('html'),
	    i: createDOMFactory('i'),
	    iframe: createDOMFactory('iframe'),
	    img: createDOMFactory('img'),
	    input: createDOMFactory('input'),
	    ins: createDOMFactory('ins'),
	    kbd: createDOMFactory('kbd'),
	    keygen: createDOMFactory('keygen'),
	    label: createDOMFactory('label'),
	    legend: createDOMFactory('legend'),
	    li: createDOMFactory('li'),
	    link: createDOMFactory('link'),
	    main: createDOMFactory('main'),
	    map: createDOMFactory('map'),
	    mark: createDOMFactory('mark'),
	    menu: createDOMFactory('menu'),
	    menuitem: createDOMFactory('menuitem'),
	    meta: createDOMFactory('meta'),
	    meter: createDOMFactory('meter'),
	    nav: createDOMFactory('nav'),
	    noscript: createDOMFactory('noscript'),
	    object: createDOMFactory('object'),
	    ol: createDOMFactory('ol'),
	    optgroup: createDOMFactory('optgroup'),
	    option: createDOMFactory('option'),
	    output: createDOMFactory('output'),
	    p: createDOMFactory('p'),
	    param: createDOMFactory('param'),
	    picture: createDOMFactory('picture'),
	    pre: createDOMFactory('pre'),
	    progress: createDOMFactory('progress'),
	    q: createDOMFactory('q'),
	    rp: createDOMFactory('rp'),
	    rt: createDOMFactory('rt'),
	    ruby: createDOMFactory('ruby'),
	    s: createDOMFactory('s'),
	    samp: createDOMFactory('samp'),
	    script: createDOMFactory('script'),
	    section: createDOMFactory('section'),
	    select: createDOMFactory('select'),
	    small: createDOMFactory('small'),
	    source: createDOMFactory('source'),
	    span: createDOMFactory('span'),
	    strong: createDOMFactory('strong'),
	    style: createDOMFactory('style'),
	    sub: createDOMFactory('sub'),
	    summary: createDOMFactory('summary'),
	    sup: createDOMFactory('sup'),
	    table: createDOMFactory('table'),
	    tbody: createDOMFactory('tbody'),
	    td: createDOMFactory('td'),
	    textarea: createDOMFactory('textarea'),
	    tfoot: createDOMFactory('tfoot'),
	    th: createDOMFactory('th'),
	    thead: createDOMFactory('thead'),
	    time: createDOMFactory('time'),
	    title: createDOMFactory('title'),
	    tr: createDOMFactory('tr'),
	    track: createDOMFactory('track'),
	    u: createDOMFactory('u'),
	    ul: createDOMFactory('ul'),
	    var: createDOMFactory('var'),
	    video: createDOMFactory('video'),
	    wbr: createDOMFactory('wbr'),

	    // SVG
	    circle: createDOMFactory('circle'),
	    clipPath: createDOMFactory('clipPath'),
	    defs: createDOMFactory('defs'),
	    ellipse: createDOMFactory('ellipse'),
	    g: createDOMFactory('g'),
	    image: createDOMFactory('image'),
	    line: createDOMFactory('line'),
	    linearGradient: createDOMFactory('linearGradient'),
	    mask: createDOMFactory('mask'),
	    path: createDOMFactory('path'),
	    pattern: createDOMFactory('pattern'),
	    polygon: createDOMFactory('polygon'),
	    polyline: createDOMFactory('polyline'),
	    radialGradient: createDOMFactory('radialGradient'),
	    rect: createDOMFactory('rect'),
	    stop: createDOMFactory('stop'),
	    svg: createDOMFactory('svg'),
	    text: createDOMFactory('text'),
	    tspan: createDOMFactory('tspan'),
	  };

	  // due to wrapper and conditionals at the top, this will either become
	  // `module.exports ReactDOMFactories` if that is available,
	  // otherwise it will be defined via `define(['react'], ReactDOMFactories)`
	  // if that is available,
	  // otherwise it will be defined as global variable.
	  return ReactDOMFactories;
	});



/***/ }),
/* 11 */
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
	  module.exports = __webpack_require__(12)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(19)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(13);
	var invariant = __webpack_require__(14);
	var warning = __webpack_require__(15);
	var assign = __webpack_require__(16);

	var ReactPropTypesSecret = __webpack_require__(17);
	var checkPropTypes = __webpack_require__(18);

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
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
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
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
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
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
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
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
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
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(13);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
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

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(14);
	  var warning = __webpack_require__(15);
	  var ReactPropTypesSecret = __webpack_require__(17);
	  var loggedTypeFailures = {};
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
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(13);
	var invariant = __webpack_require__(14);
	var ReactPropTypesSecret = __webpack_require__(17);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	var DOMFactories = __webpack_require__(10);
	var focusManager = __webpack_require__(22);
	var scopeTab = __webpack_require__(24);
	var Assign = __webpack_require__(25);
	var createReactClass = __webpack_require__(26);

	var div = DOMFactories.div;

	// so that our CSS is statically analyzable
	var CLASS_NAMES = {
	  overlay: 'ReactModal__Overlay',
	  content: 'ReactModal__Content'
	};

	var ModalPortal = module.exports = createReactClass({

	  displayName: 'ModalPortal',
	  shouldClose: null,

	  getDefaultProps: function() {
	    return {
	      style: {
	        overlay: {},
	        content: {}
	      }
	    };
	  },

	  getInitialState: function() {
	    return {
	      afterOpen: false,
	      beforeClose: false
	    };
	  },

	  componentDidMount: function() {
	    // Focus needs to be set when mounting and already open
	    if (this.props.isOpen) {
	      this.setFocusAfterRender(true);
	      this.open();
	    }
	  },

	  componentWillUnmount: function() {
	    clearTimeout(this.closeTimer);
	  },

	  componentWillReceiveProps: function(newProps) {
	    // Focus only needs to be set once when the modal is being opened
	    if (!this.props.isOpen && newProps.isOpen) {
	      this.setFocusAfterRender(true);
	      this.open();
	    } else if (this.props.isOpen && !newProps.isOpen) {
	      this.close();
	    }
	  },

	  componentDidUpdate: function () {
	    if (this.focusAfterRender) {
	      this.focusContent();
	      this.setFocusAfterRender(false);
	    }
	  },

	  setFocusAfterRender: function (focus) {
	    this.focusAfterRender = focus;
	  },

	  afterClose: function () {
	    focusManager.returnFocus();
	    focusManager.teardownScopedFocus();
	  },

	  open: function () {
	    if (this.state.afterOpen && this.state.beforeClose) {
	      clearTimeout(this.closeTimer);
	      this.setState({ beforeClose: false });
	    } else {
	      focusManager.setupScopedFocus(this.node);
	      focusManager.markForFocusLater();
	      this.setState({isOpen: true}, function() {
	        this.setState({afterOpen: true});

	        if (this.props.isOpen && this.props.onAfterOpen) {
	          this.props.onAfterOpen();
	        }
	      }.bind(this));
	    }
	  },

	  close: function() {
	    if (this.props.closeTimeoutMS > 0)
	      this.closeWithTimeout();
	    else
	      this.closeWithoutTimeout();
	  },

	  focusContent: function() {
	    // Don't steal focus from inner elements
	    if (!this.contentHasFocus()) {
	      this.refs.content.focus();
	    }
	  },

	  closeWithTimeout: function() {
	    var closesAt = Date.now() + this.props.closeTimeoutMS;
	    this.setState({beforeClose: true, closesAt: closesAt}, function() {
	      this.closeTimer = setTimeout(this.closeWithoutTimeout, this.state.closesAt - Date.now());
	    }.bind(this));
	  },

	  closeWithoutTimeout: function() {
	    this.setState({
	      beforeClose: false,
	      isOpen: false,
	      afterOpen: false,
	      closesAt: null
	    }, this.afterClose);
	  },

	  handleKeyDown: function(event) {
	    if (event.keyCode == 9 /*tab*/) scopeTab(this.refs.content, event);
	    if (event.keyCode == 27 /*esc*/) {
	      event.preventDefault();
	      this.requestClose(event);
	    }
	  },

	  handleOverlayOnClick: function (event) {
	    if (this.shouldClose === null) {
	      this.shouldClose = true;
	    }

	    if (this.shouldClose && this.props.shouldCloseOnOverlayClick) {
	      if (this.ownerHandlesClose())
	        this.requestClose(event);
	      else
	        this.focusContent();
	    }
	    this.shouldClose = null;
	  },

	  handleContentOnClick: function () {
	    this.shouldClose = false;
	  },

	  requestClose: function(event) {
	    if (this.ownerHandlesClose())
	      this.props.onRequestClose(event);
	  },

	  ownerHandlesClose: function() {
	    return this.props.onRequestClose;
	  },

	  shouldBeClosed: function() {
	    return !this.state.isOpen && !this.state.beforeClose;
	  },

	  contentHasFocus: function() {
	    return document.activeElement === this.refs.content || this.refs.content.contains(document.activeElement);
	  },

	  buildClassName: function(which, additional) {
	    var classNames = (typeof additional === 'object') ? additional : {
	      base: CLASS_NAMES[which],
	      afterOpen: CLASS_NAMES[which] + "--after-open",
	      beforeClose: CLASS_NAMES[which] + "--before-close"
	    };
	    var className = classNames.base;
	    if (this.state.afterOpen) { className += " " + classNames.afterOpen; }
	    if (this.state.beforeClose) { className += " " + classNames.beforeClose; }
	    return (typeof additional === 'string' && additional) ? [className, additional].join(" ") : className;
	  },

	  render: function() {
	    var contentStyles = (this.props.className) ? {} : this.props.defaultStyles.content;
	    var overlayStyles = (this.props.overlayClassName) ? {} : this.props.defaultStyles.overlay;

	    return this.shouldBeClosed() ? div() : (
	      div({
	        ref: "overlay",
	        className: this.buildClassName('overlay', this.props.overlayClassName),
	        style: Assign({}, overlayStyles, this.props.style.overlay || {}),
	        onClick: this.handleOverlayOnClick
	      },
	        div({
	          ref: "content",
	          style: Assign({}, contentStyles, this.props.style.content || {}),
	          className: this.buildClassName('content', this.props.className),
	          tabIndex: "-1",
	          onKeyDown: this.handleKeyDown,
	          onClick: this.handleContentOnClick,
	          role: this.props.role,
	          "aria-label": this.props.contentLabel
	        },
	          this.props.children
	        )
	      )
	    );
	  }
	});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var findTabbable = __webpack_require__(23);
	var focusLaterElements = [];
	var modalElement = null;
	var needToFocus = false;

	function handleBlur(event) {
	  needToFocus = true;
	}

	function handleFocus(event) {
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
	    setTimeout(function() {
	      if (modalElement.contains(document.activeElement))
	        return;
	      var el = (findTabbable(modalElement)[0] || modalElement);
	      el.focus();
	    }, 0);
	  }
	}

	exports.markForFocusLater = function() {
	  focusLaterElements.push(document.activeElement);
	};

	exports.returnFocus = function() {
	  var toFocus = null;
	  try {
	    toFocus = focusLaterElements.pop();
	    toFocus.focus();
	    return;
	  }
	  catch (e) {
	    console.warn('You tried to return focus to '+toFocus+' but it is not in the DOM anymore');
	  }
	};

	exports.setupScopedFocus = function(element) {
	  modalElement = element;

	  if (window.addEventListener) {
	    window.addEventListener('blur', handleBlur, false);
	    document.addEventListener('focus', handleFocus, true);
	  } else {
	    window.attachEvent('onBlur', handleBlur);
	    document.attachEvent('onFocus', handleFocus);
	  }
	};

	exports.teardownScopedFocus = function() {
	  modalElement = null;

	  if (window.addEventListener) {
	    window.removeEventListener('blur', handleBlur);
	    document.removeEventListener('focus', handleFocus);
	  } else {
	    window.detachEvent('onBlur', handleBlur);
	    document.detachEvent('onFocus', handleFocus);
	  }
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

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

	function focusable(element, isTabIndexNotNaN) {
	  var nodeName = element.nodeName.toLowerCase();
	  return (/input|select|textarea|button|object/.test(nodeName) ?
	    !element.disabled :
	    "a" === nodeName ?
	      element.href || isTabIndexNotNaN :
	      isTabIndexNotNaN) && visible(element);
	}

	function hidden(el) {
	  return (el.offsetWidth <= 0 && el.offsetHeight <= 0) ||
	    el.style.display === 'none';
	}

	function visible(element) {
	  while (element) {
	    if (element === document.body) break;
	    if (hidden(element)) return false;
	    element = element.parentNode;
	  }
	  return true;
	}

	function tabbable(element) {
	  var tabIndex = element.getAttribute('tabindex');
	  if (tabIndex === null) tabIndex = undefined;
	  var isTabIndexNaN = isNaN(tabIndex);
	  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
	}

	function findTabbableDescendants(element) {
	  return [].slice.call(element.querySelectorAll('*'), 0).filter(function(el) {
	    return tabbable(el);
	  });
	}

	module.exports = findTabbableDescendants;



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var findTabbable = __webpack_require__(23);

	module.exports = function(node, event) {
	  var tabbable = findTabbable(node);
	  if (!tabbable.length) {
	      event.preventDefault();
	      return;
	  }
	  var finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
	  var leavingFinalTabbable = (
	    finalTabbable === document.activeElement ||
	    // handle immediate shift+tab after opening with mouse
	    node === document.activeElement
	  );
	  if (!leavingFinalTabbable) return;
	  event.preventDefault();
	  var target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
	  target.focus();
	};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;

	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = assign;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var React = __webpack_require__(5);
	var factory = __webpack_require__(27);

	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}

	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;

	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(16);

	var emptyObject = __webpack_require__(28);
	var _invariant = __webpack_require__(14);

	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(15);
	}

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}

	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */

	  var injectedMixins = [];

	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',

	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',

	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',

	    // ==== Definition methods ====

	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',

	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',

	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',

	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',

	    // ==== Delegate methods ====

	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',

	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',

	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',

	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',

	    // ==== Advanced methods ====

	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };

	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };

	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }

	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;

	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }

	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }

	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;

	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }

	      return;
	    }

	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );

	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;

	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }

	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }

	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }

	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);

	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;

	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];

	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );

	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }

	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }

	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );

	      var isInherited = name in Constructor;
	      _invariant(
	        !isInherited,
	        'ReactClass: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be ' +
	          'due to a mixin.',
	        name
	      );
	      Constructor[name] = property;
	    }
	  }

	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );

	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }

	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }

	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }

	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }

	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }

	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }

	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };

	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };

	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },

	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };

	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );

	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }

	  return createClass;
	}

	module.exports = factory;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	var _element = typeof document !== 'undefined' ? document.body : null;

	function setElement(element) {
	  if (typeof element === 'string') {
	    var el = document.querySelectorAll(element);
	    element = 'length' in el ? el[0] : el;
	  }
	  _element = element || _element;
	  return _element;
	}

	function hide(appElement) {
	  validateElement(appElement);
	  (appElement || _element).setAttribute('aria-hidden', 'true');
	}

	function show(appElement) {
	  validateElement(appElement);
	  (appElement || _element).removeAttribute('aria-hidden');
	}

	function toggle(shouldHide, appElement) {
	  if (shouldHide)
	    hide(appElement);
	  else
	    show(appElement);
	}

	function validateElement(appElement) {
	  if (!appElement && !_element)
	    throw new Error('react-modal: You must set an element with `Modal.setAppElement(el)` to make this accessible');
	}

	function resetForTesting() {
	  _element = document.body;
	}

	exports.toggle = toggle;
	exports.setElement = setElement;
	exports.show = show;
	exports.hide = hide;
	exports.resetForTesting = resetForTesting;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	var modals = [];

	module.exports = {
	  add: function (element) {
	    if (modals.indexOf(element) === -1) {
	      modals.push(element);
	    }
	  },
	  remove: function (element) {
	    var index = modals.indexOf(element);
	    if (index === -1) {
	      return;
	    }
	    modals.splice(index, 1);
	  },
	  count: function () {
	    return modals.length;
	  }
	};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = function(opts) {
	  return new ElementClass(opts)
	}

	function indexOf(arr, prop) {
	  if (arr.indexOf) return arr.indexOf(prop)
	  for (var i = 0, len = arr.length; i < len; i++)
	    if (arr[i] === prop) return i
	  return -1
	}

	function ElementClass(opts) {
	  if (!(this instanceof ElementClass)) return new ElementClass(opts)
	  var self = this
	  if (!opts) opts = {}

	  // similar doing instanceof HTMLElement but works in IE8
	  if (opts.nodeType) opts = {el: opts}

	  this.opts = opts
	  this.el = opts.el || document.body
	  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
	}

	ElementClass.prototype.add = function(className) {
	  var el = this.el
	  if (!el) return
	  if (el.className === "") return el.className = className
	  var classes = el.className.split(' ')
	  if (indexOf(classes, className) > -1) return classes
	  classes.push(className)
	  el.className = classes.join(' ')
	  return classes
	}

	ElementClass.prototype.remove = function(className) {
	  var el = this.el
	  if (!el) return
	  if (el.className === "") return
	  var classes = el.className.split(' ')
	  var idx = indexOf(classes, className)
	  if (idx > -1) classes.splice(idx, 1)
	  el.className = classes.join(' ')
	  return classes
	}

	ElementClass.prototype.has = function(className) {
	  var el = this.el
	  if (!el) return
	  var classes = el.className.split(' ')
	  return indexOf(classes, className) > -1
	}

	ElementClass.prototype.toggle = function(className) {
	  var el = this.el
	  if (!el) return
	  if (this.has(className)) this.remove(className)
	  else this.add(className)
	}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(33);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(36);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(5);

	var _storeShape = __webpack_require__(34);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(5);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(5);

	var _storeShape = __webpack_require__(34);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(37);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(38);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(35);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(41);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(60);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(61);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(39);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(40);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(55);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(57);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(58);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(59);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(56);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(41);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(51);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(42),
	    getPrototype = __webpack_require__(48),
	    isObjectLike = __webpack_require__(50);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(43),
	    getRawTag = __webpack_require__(46),
	    objectToString = __webpack_require__(47);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(44);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(45);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(43);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(49);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(52);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(54);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(64)(module)))

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(40);

	var _isPlainObject = __webpack_require__(41);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(56);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(59);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof3(exports)) === 'object' && ( false ? 'undefined' : _typeof3(module)) === 'object') module.exports = factory(__webpack_require__(5), __webpack_require__(6));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
			var a = (typeof exports === 'undefined' ? 'undefined' : _typeof3(exports)) === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
			for (var i in a) {
				((typeof exports === 'undefined' ? 'undefined' : _typeof3(exports)) === 'object' ? exports : root)[i] = a[i];
			}
		}
	})(undefined, function (__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__) {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "http://localhost:8080/";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				module.exports = __webpack_require__(1);

				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _Div = __webpack_require__(2);

				Object.keys(_Div).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _Div[key];
						}
					});
				});

				var _Button = __webpack_require__(7);

				Object.keys(_Button).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _Button[key];
						}
					});
				});

				var _CheckBox = __webpack_require__(33);

				Object.keys(_CheckBox).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _CheckBox[key];
						}
					});
				});

				var _Column = __webpack_require__(35);

				Object.keys(_Column).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _Column[key];
						}
					});
				});

				var _DropDown = __webpack_require__(36);

				Object.keys(_DropDown).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _DropDown[key];
						}
					});
				});

				var _Row = __webpack_require__(34);

				Object.keys(_Row).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _Row[key];
						}
					});
				});

				var _Select = __webpack_require__(38);

				Object.keys(_Select).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _Select[key];
						}
					});
				});

				var _Spinner = __webpack_require__(39);

				Object.keys(_Spinner).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _Spinner[key];
						}
					});
				});

				var _Switch = __webpack_require__(40);

				Object.keys(_Switch).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _Switch[key];
						}
					});
				});

				var _TextArea = __webpack_require__(41);

				Object.keys(_TextArea).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _TextArea[key];
						}
					});
				});

				var _TextInput = __webpack_require__(52);

				Object.keys(_TextInput).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _TextInput[key];
						}
					});
				});

				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.Div = exports.Pre = exports.Span = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
				};

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactVextensions = __webpack_require__(4);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof3(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}

				var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
					var c = arguments.length,
					    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
					    d;
					if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
						if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
					}return c > 3 && r && Object.defineProperty(target, key, r), r;
				};
				var __rest = undefined && undefined.__rest || function (s, e) {
					var t = {};
					for (var p in s) {
						if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
					}if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
						if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
					}return t;
				};

				function Global(target) {
					Object.assign(window, _defineProperty({}, target.name, target));
				}
				var Span = function (_BaseComponent) {
					_inherits(Span, _BaseComponent);

					function Span() {
						_classCallCheck(this, Span);

						return _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).apply(this, arguments));
					}

					_createClass(Span, [{
						key: "render",
						value: function render() {
							var _a = this.props,
							    pre = _a.pre,
							    style = _a.style,
							    rest = __rest(_a, ["pre", "style"]);
							return _react2.default.createElement("span", Object.assign({}, rest, { style: E(style, pre && { whiteSpace: "pre" }) }));
						}
					}]);

					return Span;
				}(_reactVextensions.BaseComponent);
				exports.Span = Span = __decorate([Global,
				//@SimpleShouldUpdate_Overridable // we can't make these "pure", as their children may need updating

				_reactVextensions.ApplyBasicStyles], Span);
				exports.Span = Span;

				var Pre = function (_BaseComponent2) {
					_inherits(Pre, _BaseComponent2);

					function Pre() {
						_classCallCheck(this, Pre);

						return _possibleConstructorReturn(this, (Pre.__proto__ || Object.getPrototypeOf(Pre)).apply(this, arguments));
					}

					_createClass(Pre, [{
						key: "render",
						value: function render() {
							var _a = this.props,
							    allowWrap = _a.allowWrap,
							    style = _a.style,
							    children = _a.children,
							    rest = __rest(_a, ["allowWrap", "style", "children"]);
							return _react2.default.createElement("span", Object.assign({}, rest, { style: E({ whiteSpace: allowWrap ? "pre-wrap" : "pre" }, style) }), children);
						}
					}]);

					return Pre;
				}(_reactVextensions.BaseComponent);
				exports.Pre = Pre = __decorate([Global, _reactVextensions.ApplyBasicStyles], Pre);
				exports.Pre = Pre;

				var Div = function (_BaseComponent3) {
					_inherits(Div, _BaseComponent3);

					function Div() {
						_classCallCheck(this, Div);

						return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).apply(this, arguments));
					}

					_createClass(Div, [{
						key: "shouldComponentUpdate",
						value: function shouldComponentUpdate(nextProps, nextState) {
							var shouldUpdate = this.props.shouldUpdate;

							return shouldUpdate ? shouldUpdate(nextProps, nextState) : true;
							//return (shouldUpdate && shouldUpdate(nextProps, nextState)) || ShallowCompare(this, nextProps, nextState);
						}
					}, {
						key: "render",
						value: function render() {
							var _a = this.props,
							    shouldUpdate = _a.shouldUpdate,
							    style = _a.style,
							    rest = __rest(_a, ["shouldUpdate", "style"]);
							return _react2.default.createElement("div", Object.assign({}, rest, { style: style }));
						}
					}]);

					return Div;
				}(_reactVextensions.BaseComponent);
				exports.Div = Div = __decorate([Global, _reactVextensions.ApplyBasicStyles], Div);
				exports.Div = Div;

				/***/
			},
			/* 3 */
			/***/function (module, exports) {

				module.exports = __webpack_require__(5);

				/***/
			},
			/* 4 */
			/***/function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /* WEBPACK VAR INJECTION */(function (module) {
					'use strict';

					var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
						return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
					} : function (obj) {
						return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
					};

					(function webpackUniversalModuleDefinition(root, factory) {
						if ((false ? 'undefined' : _typeof2(exports)) === 'object' && (false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(3), __webpack_require__(6));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
							var a = (typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
							for (var i in a) {
								((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
							}
						}
					})(undefined, function (__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
						return (/******/function (modules) {
								// webpackBootstrap
								/******/ // The module cache
								/******/var installedModules = {};

								/******/ // The require function
								/******/function __webpack_require__(moduleId) {

									/******/ // Check if module is in cache
									/******/if (installedModules[moduleId])
										/******/return installedModules[moduleId].exports;

									/******/ // Create a new module (and put it into the cache)
									/******/var module = installedModules[moduleId] = {
										/******/exports: {},
										/******/id: moduleId,
										/******/loaded: false
										/******/ };

									/******/ // Execute the module function
									/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

									/******/ // Flag the module as loaded
									/******/module.loaded = true;

									/******/ // Return the exports of the module
									/******/return module.exports;
									/******/
								}

								/******/ // expose the modules object (__webpack_modules__)
								/******/__webpack_require__.m = modules;

								/******/ // expose the module cache
								/******/__webpack_require__.c = installedModules;

								/******/ // __webpack_public_path__
								/******/__webpack_require__.p = "http://localhost:8080/";

								/******/ // Load entry module and return exports
								/******/return __webpack_require__(0);
								/******/
							}(
							/************************************************************************/
							/******/[
							/* 0 */
							/***/function (module, exports, __webpack_require__) {

								module.exports = __webpack_require__(1);

								/***/
							},
							/* 1 */
							/***/function (module, exports, __webpack_require__) {

								"use strict";

								Object.defineProperty(exports, "__esModule", {
									value: true
								});

								var _General = __webpack_require__(2);

								Object.keys(_General).forEach(function (key) {
									if (key === "default" || key === "__esModule") return;
									Object.defineProperty(exports, key, {
										enumerable: true,
										get: function get() {
											return _General[key];
										}
									});
								});

								var _BaseComponent = __webpack_require__(8);

								Object.keys(_BaseComponent).forEach(function (key) {
									if (key === "default" || key === "__esModule") return;
									Object.defineProperty(exports, key, {
										enumerable: true,
										get: function get() {
											return _BaseComponent[key];
										}
									});
								});

								/***/
							},
							/* 2 */
							/***/function (module, exports, __webpack_require__) {

								"use strict";

								Object.defineProperty(exports, "__esModule", {
									value: true
								});
								exports.basePropFullKeys = exports.ShallowCompare = undefined;
								exports.E = E;
								exports.ToJSON = ToJSON;
								exports.FromJSON = FromJSON;
								exports.RemoveDuplicates = RemoveDuplicates;
								exports.FindDOM = FindDOM;
								exports.FindReact = FindReact;
								exports.GetInnerComp = GetInnerComp;
								exports.BasicStyles = BasicStyles;
								exports.ApplyBasicStyles = ApplyBasicStyles;
								exports.SimpleShouldUpdate = SimpleShouldUpdate;
								exports.SimpleShouldUpdate_Overridable = SimpleShouldUpdate_Overridable;
								exports.Instant = Instant;
								exports.ShallowEquals = ShallowEquals;
								exports.ShallowChanged = ShallowChanged;
								exports.AddGlobalElement = AddGlobalElement;
								exports.AddGlobalStyle = AddGlobalStyle;
								exports.HasSealedProps = HasSealedProps;
								exports.Sealed = Sealed;

								var _react = __webpack_require__(3);

								var _react2 = _interopRequireDefault(_react);

								var _reactDom = __webpack_require__(4);

								var _reactDom2 = _interopRequireDefault(_reactDom);

								var _shallowCompare = __webpack_require__(5);

								var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

								var _classnames = __webpack_require__(7);

								var _classnames2 = _interopRequireDefault(_classnames);

								function _interopRequireDefault(obj) {
									return obj && obj.__esModule ? obj : { default: obj };
								}

								exports.ShallowCompare = _shallowCompare2.default;

								function G(entries) {
									Object.assign(window, entries);
								}
								G({ E: E });
								function E(e1, e2, e3, e4, e5, e6, e7, e8) {
									var result = {};
									var _iteratorNormalCompletion = true;
									var _didIteratorError = false;
									var _iteratorError = undefined;

									try {
										for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
											var extend = _step.value;

											result.Extend(extend);
										}
									} catch (err) {
										_didIteratorError = true;
										_iteratorError = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion && _iterator.return) {
												_iterator.return();
											}
										} finally {
											if (_didIteratorError) {
												throw _iteratorError;
											}
										}
									}

									return result;
									//return StyleSheet.create(result);
								}
								function ToJSON(obj) {
									return JSON.stringify(obj);
								}
								function FromJSON(json) {
									return JSON.parse(json);
								}
								function RemoveDuplicates(items) {
									var result = [];
									var _iteratorNormalCompletion2 = true;
									var _didIteratorError2 = false;
									var _iteratorError2 = undefined;

									try {
										for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
											var item = _step2.value;

											if (result.indexOf(item) == -1) {
												result.push(item);
											}
										}
									} catch (err) {
										_didIteratorError2 = true;
										_iteratorError2 = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion2 && _iterator2.return) {
												_iterator2.return();
											}
										} finally {
											if (_didIteratorError2) {
												throw _iteratorError2;
											}
										}
									}

									return result;
								}
								//var ReactInstanceMap = require("react/lib/ReactInstanceMap");
								G({ ShallowCompare: _shallowCompare2.default });
								G({ React: _react2.default, Text: Text });
								function FindDOM(comp) {
									return _reactDom2.default.findDOMNode(comp);
								}
								;
								G({ FindDOM: FindDOM });
								/*declare var $;
	       export function FindDOM_(comp) { return $(FindDOM(comp)) as JQuery; };
	       G({FindDOM_});*/
								function FindReact(dom) {
									for (var key in dom) {
										if (key.startsWith("__reactInternalInstance$")) {
											var compInternals = dom[key]._currentElement;
											var compWrapper = compInternals._owner;
											var comp = compWrapper._instance;
											//return comp as React.Component<any, any>;
											return comp;
										}
									}return null;
								}
								G({ FindReact: FindReact });
								// needed for wrapper-components that don't provide way of accessing inner-component
								function GetInnerComp(wrapperComp) {
									return FindReact(FindDOM(wrapperComp));
								}
								G({ GetInnerComp: GetInnerComp });
								var basePropFullKeys = exports.basePropFullKeys = {
									m: "margin", ml: "marginLeft", mr: "marginRight", mt: "marginTop", mb: "marginBottom",
									mlr: null, mtb: null,
									p: "padding", pl: "paddingLeft", pr: "paddingRight", pt: "paddingTop", pb: "paddingBottom",
									plr: null, ptb: null,
									sel: null,
									ct: null,
									tabLabel: null, active: null,
									page: null, match: null,
									firebase: null
								};
								function RemoveBasePropKeys(restObj) {
									for (var key in basePropFullKeys) {
										delete restObj[key];
									}
								}
								function BasicStyles(props) {
									var result = {};
									for (var key in props) {
										if (basePropFullKeys[key] != null) {
											var fullKey = basePropFullKeys[key];
											result[fullKey] = props[key];
										} else if (key == "mlr") {
											result.marginLeft = props[key];
											result.marginRight = props[key];
										} else if (key == "mtb") {
											result.marginTop = props[key];
											result.marginBottom = props[key];
										} else if (key == "plr") {
											result.paddingLeft = props[key];
											result.paddingRight = props[key];
										} else if (key == "ptb") {
											result.paddingTop = props[key];
											result.paddingBottom = props[key];
										}
									}
									return result;
								}
								function ApplyBasicStyles(target) {
									var oldRender = target.prototype.render;
									target.prototype.render = function () {
										var result = oldRender.call(this);
										var props = this.props;
										var className = (0, _classnames2.default)({ selectable: props.sel, clickThrough: props.ct }, result.props.className);
										if (className) {
											result.props.className = className;
										}
										result.props.style = E(BasicStyles(props), result.props.style);
										RemoveBasePropKeys(result.props);
										return result;
									};
								}
								/*export function ApplyBasicStyles(target: React.ComponentClass<any>, funcName: string) {
	           let oldRender = target.prototype.render;
	           target.prototype.render = function() {
	               let result = oldRender.call(this) as JSX.Element;
	               result.props.style = E(BasicStyles(result.props), result.props.style);
	               RemoveBasePropKeys(result.props);
	               return result;
	           }
	       }*/
								function SimpleShouldUpdate(target) {
									target.prototype.shouldComponentUpdate = function (newProps, newState) {
										/*if (ShallowCompare(this, newProps, newState))
	             Log("Changed: " + this.props.Props().Where(a=>a.value !== newProps[a.name]).Select(a=>a.name) + ";" + g.ToJSON(this.props) + ";" + g.ToJSON(newProps));*/
										return (0, _shallowCompare2.default)(this, newProps, newState);
									};
								}
								//export function SimpleShouldUpdate_Overridable(target: Component<{shouldUpdate: (newProps: React.Props<any>, newState: any)=>boolean}, {}>) {
								function SimpleShouldUpdate_Overridable(target) {
									target.prototype.shouldComponentUpdate = function (newProps, newState) {
										var shouldUpdate = newProps.shouldUpdate;

										if (typeof shouldUpdate == "boolean") return shouldUpdate;
										if (typeof shouldUpdate == "function") return shouldUpdate(newProps, newState);
										return (0, _shallowCompare2.default)(this, newProps, newState);
									};
								}
								// for PostRender() func
								function Instant(target, name) {
									target[name].instant = true;
								}
								function ShallowEquals(objA, objB) {
									if (objA === objB) return true;
									var keysA = Object.keys(objA || {});
									var keysB = Object.keys(objB || {});
									if (keysA.length !== keysB.length) return false;
									// Test for A's keys different from B.
									var hasOwn = Object.prototype.hasOwnProperty;
									for (var i = 0; i < keysA.length; i++) {
										if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
											return false;
										}
										var valA = objA[keysA[i]];
										var valB = objB[keysA[i]];
										if (valA !== valB) return false;
									}
									return true;
								}
								G({ ShallowChanged: ShallowChanged });
								function ShallowChanged(objA, objB) {
									for (var _len = arguments.length, propsToCompareMoreDeeply = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
										propsToCompareMoreDeeply[_key - 2] = arguments[_key];
									}

									if (propsToCompareMoreDeeply.length) {
										if (ShallowChanged(objA.Excluding.apply(objA, propsToCompareMoreDeeply), objB.Excluding.apply(objB, propsToCompareMoreDeeply))) {
											return true;
										}
										var _iteratorNormalCompletion3 = true;
										var _didIteratorError3 = false;
										var _iteratorError3 = undefined;

										try {
											for (var _iterator3 = propsToCompareMoreDeeply[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
												var key = _step3.value;

												// for "children", shallow-compare at two levels deeper
												if (key == "children") {
													var _iteratorNormalCompletion4 = true;
													var _didIteratorError4 = false;
													var _iteratorError4 = undefined;

													try {
														for (var _iterator4 = (objA.children || {}).VKeys().concat((objB.children || {}).VKeys())[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
															var childKey = _step4.value;

															if (ShallowChanged(objA.children[childKey], objB.children[childKey])) return true;
														}
													} catch (err) {
														_didIteratorError4 = true;
														_iteratorError4 = err;
													} finally {
														try {
															if (!_iteratorNormalCompletion4 && _iterator4.return) {
																_iterator4.return();
															}
														} finally {
															if (_didIteratorError4) {
																throw _iteratorError4;
															}
														}
													}
												} else {
													if (ShallowChanged(objA[key], objB[key])) return true;
												}
											}
										} catch (err) {
											_didIteratorError3 = true;
											_iteratorError3 = err;
										} finally {
											try {
												if (!_iteratorNormalCompletion3 && _iterator3.return) {
													_iterator3.return();
												}
											} finally {
												if (_didIteratorError3) {
													throw _iteratorError3;
												}
											}
										}

										return false;
									}
									return !ShallowEquals(objA, objB);
								}
								//require("./GlobalStyles");
								var loaded = false;
								function AddGlobalElement(html) {
									/*$(()=> {
	            $(html).appendTo("#hidden_early");
	        });*/
									var proceed = function proceed() {
										loaded = true;
										var nodeType = html.trim().substring(1, html.trim().IndexOfAny(" ", ">"));
										var element = document.createElement(nodeType);
										document.querySelector("#hidden_early").appendChild(element);
										element.outerHTML = html;
									};
									if (loaded) proceed();else window.addEventListener("load", proceed);
								}
								;
								function AddGlobalStyle(str) {
									AddGlobalElement("\n<style>\n" + str + "\n</style>\n\t");
								}
								;
								/*AddGlobalStyle(`
	       *:not(.ignoreBaseCSS) {
	           color: rgba(255,255,255,.7);
	       }
	       `);*/
								/** Tunnels into Radium wrapper-class, and retrieves the original class, letting you access its static props. */
								/*export function PreRadium<T>(typeGetterFunc: ()=>T, setFunc: Function): T {
	           WaitXThenRun(0, ()=> {
	               debugger;
	               let type = typeGetterFunc() as any;
	               setFunc(type.DecoratedComponent);
	           });
	           return {} as any;
	       }*/
								/*export function PreRadium<T>(_: T, wrapperClass: Function): T {
	           return (wrapperClass as any).DecoratedComponent;
	       }*/
								/*export function GetErrorMessagesUnderElement(element: HTMLElement) {
	           return $(element).find(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
	           return element.querySelector(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
	       }*/
								function HasSealedProps(target) {
									var oldConstructor = target.constructor;
									target.constructor = function () {
										for (var key in target["prototype"]) {
											var method = target["prototype"][key];
											if (method.sealed && this[key] != method) {
												throw new Error("Cannot override sealed method \"" + key + "\".");
											}
										}
										return oldConstructor.apply(this, arguments);
									};
								}
								function Sealed(target, key) {
									target[key].sealed = true;
								}

								/***/
							},
							/* 3 */
							/***/function (module, exports) {

								module.exports = __webpack_require__(3);

								/***/
							},
							/* 4 */
							/***/function (module, exports) {

								module.exports = __webpack_require__(6);

								/***/
							},
							/* 5 */
							/***/function (module, exports, __webpack_require__) {

								/**
	        * Copyright 2013-present, Facebook, Inc.
	        * All rights reserved.
	        *
	        * This source code is licensed under the BSD-style license found in the
	        * LICENSE file in the root directory of this source tree. An additional grant
	        * of patent rights can be found in the PATENTS file in the same directory.
	        *
	        */

								'use strict';

								var shallowEqual = __webpack_require__(6);

								/**
	        * Does a shallow comparison for props and state.
	        * See ReactComponentWithPureRenderMixin
	        * See also https://facebook.github.io/react/docs/shallow-compare.html
	        */
								function shallowCompare(instance, nextProps, nextState) {
									return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
								}

								module.exports = shallowCompare;

								/***/
							},
							/* 6 */
							/***/function (module, exports) {

								/**
	        * Copyright (c) 2013-present, Facebook, Inc.
	        * All rights reserved.
	        *
	        * This source code is licensed under the BSD-style license found in the
	        * LICENSE file in the root directory of this source tree. An additional grant
	        * of patent rights can be found in the PATENTS file in the same directory.
	        *
	        * @typechecks
	        * 
	        */

								/*eslint-disable no-self-compare */

								'use strict';

								var hasOwnProperty = Object.prototype.hasOwnProperty;

								/**
	        * inlined Object.is polyfill to avoid requiring consumers ship their own
	        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	        */
								function is(x, y) {
									// SameValue algorithm
									if (x === y) {
										// Steps 1-5, 7-10
										// Steps 6.b-6.e: +0 != -0
										// Added the nonzero y check to make Flow happy, but it is redundant
										return x !== 0 || y !== 0 || 1 / x === 1 / y;
									} else {
										// Step 6.a: NaN == NaN
										return x !== x && y !== y;
									}
								}

								/**
	        * Performs equality by iterating through keys on an object and returning false
	        * when any key has values which are not strictly equal between the arguments.
	        * Returns true when the values of all keys are strictly equal.
	        */
								function shallowEqual(objA, objB) {
									if (is(objA, objB)) {
										return true;
									}

									if ((typeof objA === 'undefined' ? 'undefined' : _typeof2(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof2(objB)) !== 'object' || objB === null) {
										return false;
									}

									var keysA = Object.keys(objA);
									var keysB = Object.keys(objB);

									if (keysA.length !== keysB.length) {
										return false;
									}

									// Test for A's keys different from B.
									for (var i = 0; i < keysA.length; i++) {
										if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
											return false;
										}
									}

									return true;
								}

								module.exports = shallowEqual;

								/***/
							},
							/* 7 */
							/***/function (module, exports, __webpack_require__) {

								var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
	                                                                        Copyright (c) 2016 Jed Watson.
	                                                                        Licensed under the MIT License (MIT), see
	                                                                        http://jedwatson.github.io/classnames
	                                                                        */
								/* global define */

								(function () {
									'use strict';

									var hasOwn = {}.hasOwnProperty;

									function classNames() {
										var classes = [];

										for (var i = 0; i < arguments.length; i++) {
											var arg = arguments[i];
											if (!arg) continue;

											var argType = typeof arg === 'undefined' ? 'undefined' : _typeof2(arg);

											if (argType === 'string' || argType === 'number') {
												classes.push(arg);
											} else if (Array.isArray(arg)) {
												classes.push(classNames.apply(null, arg));
											} else if (argType === 'object') {
												for (var key in arg) {
													if (hasOwn.call(arg, key) && arg[key]) {
														classes.push(key);
													}
												}
											}
										}

										return classes.join(' ');
									}

									if (typeof module !== 'undefined' && module.exports) {
										module.exports = classNames;
									} else if (true) {
										// register as 'classnames', consistent with npm package name
										!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
											return classNames;
										}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
									} else {
										window.classNames = classNames;
									}
								})();

								/***/
							},
							/* 8 */
							/***/function (module, exports, __webpack_require__) {

								"use strict";

								Object.defineProperty(exports, "__esModule", {
									value: true
								});
								exports.BaseComponent = exports.RenderSource = undefined;

								var _createClass = function () {
									function defineProperties(target, props) {
										for (var i = 0; i < props.length; i++) {
											var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
										}
									}return function (Constructor, protoProps, staticProps) {
										if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
									};
								}();

								var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
									return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
								} : function (obj) {
									return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
								};

								var _react = __webpack_require__(3);

								var _react2 = _interopRequireDefault(_react);

								var _reactAutobind = __webpack_require__(9);

								var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

								var _General = __webpack_require__(2);

								function _interopRequireDefault(obj) {
									return obj && obj.__esModule ? obj : { default: obj };
								}

								function _classCallCheck(instance, Constructor) {
									if (!(instance instanceof Constructor)) {
										throw new TypeError("Cannot call a class as a function");
									}
								}

								function _possibleConstructorReturn(self, call) {
									if (!self) {
										throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
								}

								function _inherits(subClass, superClass) {
									if (typeof superClass !== "function" && superClass !== null) {
										throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
									}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
								}

								var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
									var c = arguments.length,
									    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
									    d;
									if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
										if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
									}return c > 3 && r && Object.defineProperty(target, key, r), r;
								};
								var RenderSource = exports.RenderSource = undefined;
								(function (RenderSource) {
									RenderSource[RenderSource["Mount"] = 0] = "Mount";
									RenderSource[RenderSource["PropChange"] = 1] = "PropChange";
									RenderSource[RenderSource["SetState"] = 2] = "SetState";
									RenderSource[RenderSource["Update"] = 3] = "Update";
								})(RenderSource || (exports.RenderSource = RenderSource = {}));
								var BaseComponent = BaseComponent_1 = function (_Component) {
									_inherits(BaseComponent, _Component);

									function BaseComponent(props) {
										_classCallCheck(this, BaseComponent);

										// helper for debugging
										var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

										_this.GetPropsChanged_lastProps = {};
										_this.GetStateChanged_lastState = {};
										_this.changeListeners = [];
										_this.autoRemoveChangeListeners = true;
										_this.mounted = false;
										(0, _reactAutobind2.default)(_this);
										// if had @Radium decorator, then "this" is actually an instance of a class-specific "RadiumEnhancer" derived-class
										//		so reach in to original class, and set up auto-binding for its prototype members as well
										if (_this.constructor.name == "RadiumEnhancer") (0, _reactAutobind2.default)(Object.getPrototypeOf(_this));
										//this.state = this.state || this.defaultState || {} as any;
										_this.state = _this.constructor["defaultState"] || {};
										// if using PreRender, wrap render func
										if (_this.PreRender != BaseComponent_1.prototype.PreRender) {
											var oldRender = _this.render;
											_this.render = function () {
												this.PreRender();
												return oldRender.apply(this, arguments);
											};
										}
										// you know what, let's just always wrap the render() method, in this project; solves the annoying firebase-gobbling-errors issue
										/*let oldRender = this.render;
	         this.render = function() {
	             try {
	                 this.PreRender();
	                 return oldRender.apply(this, arguments);
	             } catch (ex) {
	                 debugger;
	                 throw ex;
	             }
	         };*/
										return _this;
									}
									//timers = [] as Timer[];


									_createClass(BaseComponent, [{
										key: "GetPropsChanged",
										value: function GetPropsChanged() {
											var _this2 = this;

											var keys = (0, _General.RemoveDuplicates)(Object.keys(this.props).concat(Object.keys(this.GetPropsChanged_lastProps)));
											var result = keys.filter(function (key) {
												return !Object.is(_this2.props[key], _this2.GetPropsChanged_lastProps[key]);
											});
											this.GetPropsChanged_lastProps = Object.assign({}, this.props);
											return result;
										}
									}, {
										key: "GetPropsChanged_Data",
										value: function GetPropsChanged_Data() {
											var _this3 = this;

											return (0, _General.ToJSON)(this.GetPropsChanged().reduce(function (result, key) {
												return result[key] = _this3.props[key], result;
											}, {}));
										}
									}, {
										key: "GetStateChanged",
										value: function GetStateChanged() {
											var _this4 = this;

											var keys = (0, _General.RemoveDuplicates)(Object.keys(this.state).concat(Object.keys(this.GetStateChanged_lastState)));
											var result = keys.filter(function (key) {
												return !Object.is(_this4.state[key], _this4.GetStateChanged_lastState[key]);
											});
											this.GetStateChanged_lastState = Object.assign({}, this.state);
											return result;
										}
									}, {
										key: "GetStateChanged_Data",
										value: function GetStateChanged_Data() {
											var _this5 = this;

											return (0, _General.ToJSON)(this.GetStateChanged().reduce(function (result, key) {
												return result[key] = _this5.state[key], result;
											}, {}));
										}
									}, {
										key: "forceUpdate",
										value: function forceUpdate(_) {
											//throw new Error("Do not call this. Call Update() instead.");
										}
									}, {
										key: "Update",
										value: function Update(postUpdate) {
											//if (!this.Mounted) return;
											this.lastRender_source = RenderSource.Update;
											//this.forceUpdate(postUpdate);
											_react.Component.prototype.forceUpdate.call(this, postUpdate);
										}
									}, {
										key: "Clear",
										value: function Clear(postClear) {
											var oldRender = this.render;
											this.render = function () {
												var _this6 = this;

												this.render = oldRender;
												//WaitXThenRun(0, this.Update);
												setTimeout(function () {
													return _this6.Update();
												});
												return _react2.default.createElement("div", null);
											};
											postClear();
										}
									}, {
										key: "ClearThenUpdate",
										value: function ClearThenUpdate() {
											var _this7 = this;

											//this.Clear(this.Update);
											this.Clear(function () {
												return _this7.Update();
											});
										}
										/** Shortcut for "()=>(this.forceUpdate(), this.ComponentWillMountOrReceiveProps(props))". */

									}, {
										key: "UpdateAndReceive",
										value: function UpdateAndReceive(props) {
											var _this8 = this,
											    _arguments = arguments;

											return function () {
												//if (!this.Mounted) return;
												//this.forceUpdate();
												_react.Component.prototype.forceUpdate.apply(_this8, _arguments);
												if (_this8.autoRemoveChangeListeners) _this8.RemoveChangeListeners();
												_this8.ComponentWillMountOrReceiveProps(props);
											};
										}
										//setState(_: ()=>"Do not call this. Call SetState() instead.") {
										/*setState() {
	             throw new Error("Do not call this. Call SetState() instead.");
	         }*/

									}, {
										key: "setState",
										value: function setState() {
											return null;
										}
									}, {
										key: "SetState",
										value: function SetState(newState, callback) {
											var _this9 = this;

											var cancelIfStateSame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
											var deepCompare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

											if (cancelIfStateSame) {
												// we only care about new-state's keys -- setState() leaves unmentioned keys untouched
												var oldState_forNewStateKeys = Object.keys(newState).reduce(function (result, key) {
													return result[key] = _this9.state[key], result;
												}, {});
												if (deepCompare) {
													if ((0, _General.ToJSON)(newState) == (0, _General.ToJSON)(oldState_forNewStateKeys)) return [];
												} else {
													//if (ShallowEquals(newState, oldState_forNewStateKeys)) return [];
													// use a looser comparison (we want a missing prop to be equivalent to null and undefined)
													var same = true;
													var _iteratorNormalCompletion = true;
													var _didIteratorError = false;
													var _iteratorError = undefined;

													try {
														for (var _iterator = (0, _General.RemoveDuplicates)(Object.keys(this.state).concat(Object.keys(newState)))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
															var key = _step.value;

															var valA = this.state[key];
															var valB = newState[key];
															if (valA == null && valB == null) continue;
															if (valA !== valB) {
																same = false;
																break;
															}
														}
													} catch (err) {
														_didIteratorError = true;
														_iteratorError = err;
													} finally {
														try {
															if (!_iteratorNormalCompletion && _iterator.return) {
																_iterator.return();
															}
														} finally {
															if (_didIteratorError) {
																throw _iteratorError;
															}
														}
													}

													if (same) return [];
												}
											}
											this.lastRender_source = RenderSource.SetState;
											//this.setState(newState as S, callback);
											_react.Component.prototype.setState.apply(this, arguments);
										}
									}, {
										key: "AddChangeListeners",
										value: function AddChangeListeners(host) {
											if (host == null) return; // maybe temp
											/*host.extraMethods = funcs;
	          for (let func of funcs)
	              this.changeListeners.push({host: host, func: func});*/

											for (var _len = arguments.length, funcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
												funcs[_key - 1] = arguments[_key];
											}

											var _iteratorNormalCompletion2 = true;
											var _didIteratorError2 = false;
											var _iteratorError2 = undefined;

											try {
												for (var _iterator2 = funcs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
													var func = _step2.value;

													if (typeof func == "string") func = func.Func(this.Update);
													// if actual function, add it (else, ignore entry--it must have been a failed conditional)
													if (func instanceof Function) {
														//if (!host.HasExtraMethod(func)) {
														host.extraMethod = func;
														this.changeListeners.push({ host: host, func: func });
													}
												}
											} catch (err) {
												_didIteratorError2 = true;
												_iteratorError2 = err;
											} finally {
												try {
													if (!_iteratorNormalCompletion2 && _iterator2.return) {
														_iterator2.return();
													}
												} finally {
													if (_didIteratorError2) {
														throw _iteratorError2;
													}
												}
											}
										}
									}, {
										key: "RemoveChangeListeners",
										value: function RemoveChangeListeners() {
											//this.changeListeners = this.changeListeners || []; // temp fix for odd "is null" issue
											var _iteratorNormalCompletion3 = true;
											var _didIteratorError3 = false;
											var _iteratorError3 = undefined;

											try {
												for (var _iterator3 = this.changeListeners[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
													var changeListener = _step3.value;

													changeListener.host.removeExtraMethod = changeListener.func;
												}
											} catch (err) {
												_didIteratorError3 = true;
												_iteratorError3 = err;
											} finally {
												try {
													if (!_iteratorNormalCompletion3 && _iterator3.return) {
														_iterator3.return();
													}
												} finally {
													if (_didIteratorError3) {
														throw _iteratorError3;
													}
												}
											}

											this.changeListeners = [];
										}
									}, {
										key: "RemoveChangeListenersFor",
										value: function RemoveChangeListenersFor(host) {
											var changeListenersToRemove = this.changeListeners.filter(function (a) {
												return a.host == host;
											});
											var _iteratorNormalCompletion4 = true;
											var _didIteratorError4 = false;
											var _iteratorError4 = undefined;

											try {
												for (var _iterator4 = changeListenersToRemove[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
													var listener = _step4.value;

													listener.host.removeExtraMethod = listener.func;
													this.changeListeners.splice(this.changeListeners.indexOf(listener), 1);
												}
											} catch (err) {
												_didIteratorError4 = true;
												_iteratorError4 = err;
											} finally {
												try {
													if (!_iteratorNormalCompletion4 && _iterator4.return) {
														_iterator4.return();
													}
												} finally {
													if (_didIteratorError4) {
														throw _iteratorError4;
													}
												}
											}
										}
									}, {
										key: "ComponentWillMount",
										value: function ComponentWillMount() {}
									}, {
										key: "ComponentWillMountOrReceiveProps",
										value: function ComponentWillMountOrReceiveProps(newProps, forMount) {}
									}, {
										key: "componentWillMount",
										value: function componentWillMount() {
											if (this.autoRemoveChangeListeners) this.RemoveChangeListeners();
											this.ComponentWillMount();
											this.ComponentWillMountOrReceiveProps(this.props, true);
											this.lastRender_source = RenderSource.Mount;
										}
									}, {
										key: "ComponentDidMount",
										value: function ComponentDidMount() {}
									}, {
										key: "ComponentDidMountOrUpdate",
										value: function ComponentDidMountOrUpdate(lastProps, lastState) {}
									}, {
										key: "componentDidMount",
										value: function componentDidMount() {
											this.ComponentDidMount.apply(this, arguments);
											this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
											this.ComponentDidMountOrUpdate_lastProps = this.props;
											this.ComponentDidMountOrUpdate_lastState = this.state;
											/*let {Ref} = this.props;
	          if (Ref) Ref(this);*/
											this.mounted = true;
											this.CallPostRender();
										}
									}, {
										key: "ComponentWillUnmount",
										value: function ComponentWillUnmount() {}
									}, {
										key: "componentWillUnmount",
										value: function componentWillUnmount() {
											this.ComponentWillUnmount();
											/*for (let timer of this.timers) {
	              timer.Stop();
	          }
	          this.timers = [];*/
											/*let {Ref} = this.props;
	          if (Ref) Ref(null);*/
											this.mounted = false;
										}
									}, {
										key: "ComponentWillReceiveProps",
										value: function ComponentWillReceiveProps(newProps) {}
									}, {
										key: "componentWillReceiveProps",
										value: function componentWillReceiveProps(newProps) {
											if (this.autoRemoveChangeListeners) this.RemoveChangeListeners();
											this.ComponentWillReceiveProps(newProps);
											this.ComponentWillMountOrReceiveProps(newProps, false);
											this.lastRender_source = RenderSource.PropChange;
										}
									}, {
										key: "ComponentDidUpdate",
										value: function ComponentDidUpdate() {}
									}, {
										key: "componentDidUpdate",
										value: function componentDidUpdate() {
											this.ComponentDidUpdate.apply(this, arguments);
											this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
											this.ComponentDidMountOrUpdate_lastProps = this.props;
											this.ComponentDidMountOrUpdate_lastState = this.state;
											this.CallPostRender();
										}
									}, {
										key: "CallPostRender",
										value: function CallPostRender() {
											var _this10 = this;

											if (this.PostRender == BaseComponent_1.prototype.PostRender) return;
											var renderSource = this.lastRender_source;
											var ownPostRender = this.PostRender;
											// can be different, for wrapped components (apparently they copy the inner type's PostRender as their own PostRender -- except as a new function, for some reason)
											var prototypePostRender = this.constructor.prototype.PostRender;
											if (ownPostRender.instant || prototypePostRender.instant) {
												this.PostRender(renderSource);
											} else {
												/*if (QuickIncrement("PostRenderLog") <= 1)
	               Log("Calling PostRender for: " + this.constructor.name + ";" + V.GetStackTraceStr());*/
												//Log("Calling PostRender for: " + this.constructor.name);
												setTimeout(function () {
													return window.requestAnimationFrame(function () {
														//WaitXThenRun(0, ()=>g.requestIdleCallback(()=> {
														if (!_this10.mounted) return;
														_this10.PostRender(renderSource);
													});
												});
												/*WaitXThenRun(0, ()=> {
	               this.PostRender();
	           });*/
											}
										}
									}, {
										key: "PreRender",
										value: function PreRender() {}
									}, {
										key: "PostRender",
										value: function PostRender(source) {}
									}, {
										key: "DOM",
										get: function get() {
											return this.mounted ? (0, _General.FindDOM)(this) : null;
										}
										//get DOM_() { return this.mounted ? $(this.DOM) : null; }
										// needed for wrapper-components that don't provide way of accessing inner-component
										//get InnerComp() { return FindReact(this.DOM); }
										// make all these optional, so fits Component type definition/shape

									}, {
										key: "FlattenedChildren",
										get: function get() {
											var children = children instanceof Array ? this.props.children : [this.props.children];
											return _react2.default.Children.map(children.filter(function (a) {
												return a;
											}), function (a) {
												return a;
											});
										}
									}]);

									return BaseComponent;
								}(_react.Component);
								__decorate([_General.Sealed], BaseComponent.prototype, "componentWillMount", null);
								__decorate([_General.Sealed], BaseComponent.prototype, "componentDidMount", null);
								__decorate([_General.Sealed], BaseComponent.prototype, "componentWillUnmount", null);
								__decorate([_General.Sealed], BaseComponent.prototype, "componentWillReceiveProps", null);
								__decorate([_General.Sealed], BaseComponent.prototype, "componentDidUpdate", null);
								exports.BaseComponent = BaseComponent = BaseComponent_1 = __decorate([_General.HasSealedProps], BaseComponent);
								exports.BaseComponent = BaseComponent;

								var BaseComponent_1;
								//G({Component2: Component, BaseComponent: Component});

								/***/
							},
							/* 9 */
							/***/function (module, exports, __webpack_require__) {

								module.exports = __webpack_require__(10);

								/***/
							},
							/* 10 */
							/***/function (module, exports) {

								'use strict';

								Object.defineProperty(exports, '__esModule', {
									value: true
								});
								exports['default'] = autoBind;
								var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

								var toBind = [];

								function autoBind(context) {
									if (context === undefined) {
										console.error('Autobind error: No context provided.');
										return;
									}

									var objPrototype = Object.getPrototypeOf(context);

									if (arguments.length > 1) {
										// If a list of methods to bind is provided, use it.
										toBind = Array.prototype.slice.call(arguments, 1);
									} else {
										// If no list of methods to bind is provided, bind all available methods in class.
										toBind = Object.getOwnPropertyNames(objPrototype);
									}

									toBind.forEach(function (method) {
										var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

										if (descriptor === undefined) {
											console.warn('Autobind: "' + method + '" method not found in class.');
											return;
										}

										// Return if it's special case function or if not a function at all
										if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
											return;
										}

										Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
									});
								}

								/**
	       * From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
	       * Return a descriptor removing the value and returning a getter
	       * The getter will return a .bind version of the function
	       * and memoize the result against a symbol on the instance
	       */
								function boundMethod(objPrototype, method, descriptor) {
									var fn = descriptor.value;

									return {
										configurable: true,
										get: function get() {
											if (this === objPrototype || this.hasOwnProperty(method)) {
												return fn;
											}

											var boundFn = fn.bind(this);
											Object.defineProperty(this, method, {
												value: boundFn,
												configurable: true,
												writable: true
											});
											return boundFn;
										}
									};
								}
								module.exports = exports['default'];

								/***/
							}
							/******/])
						);
					});
					;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(5)(module));

				/***/
			},
			/* 5 */
			/***/function (module, exports) {

				module.exports = function (module) {
					if (!module.webpackPolyfill) {
						module.deprecate = function () {};
						module.paths = [];
						// module.parent = undefined by default
						module.children = [];
						module.webpackPolyfill = 1;
					}
					return module;
				};

				/***/
			},
			/* 6 */
			/***/function (module, exports) {

				module.exports = __webpack_require__(6);

				/***/
			},
			/* 7 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.Button = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
				};

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactVextensions = __webpack_require__(4);

				var _CSSPropertyOperations = __webpack_require__(8);

				var _General = __webpack_require__(32);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof3(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
					var c = arguments.length,
					    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
					    d;
					if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
						if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
					}return c > 3 && r && Object.defineProperty(target, key, r), r;
				};
				var __rest = undefined && undefined.__rest || function (s, e) {
					var t = {};
					for (var p in s) {
						if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
					}if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
						if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
					}return t;
				};

				var styles = {
					root: {
						//display: "inline-block",
						display: "inline-flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "rgba(90,100,110,.6)",
						backgroundRepeat: "no-repeat",
						borderRadius: 5,
						border: "1px solid rgba(210,210,230,.12)",
						color: "#AAA",
						/*fontFamily: "fancyFontSemibold, Trebuchet MS, Tahoma, sans-serif",*/
						fontSize: 14, textAlign: "center",
						cursor: "pointer",
						":hover": {
							//backgroundColor: "rgba(0,0,0,.7)"
							backgroundColor: "rgba(90,100,110,.8)"
						}
					},
					root_opacityHover: {
						opacity: .6,
						":hover": {
							opacity: 1
						}
					},
					root_hasCheckbox: { paddingTop: 4, verticalAlign: 1 },
					root_disabled: {
						opacity: .5, cursor: "default"
					},
					checkbox: { marginLeft: -6 }
				};
				/*AddGlobalStyle(`
	   .Button:hover { background-color: rgba(90,100,110,.8) !important; }
	   `);*/
				var pseudoSelectorStyleKeys = {};
				//@Radium
				var Button = function (_BaseComponent) {
					_inherits(Button, _BaseComponent);

					function Button() {
						_classCallCheck(this, Button);

						return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
					}

					_createClass(Button, [{
						key: "render",
						value: function render() {
							var _a = this.props,
							    enabled = _a.enabled,
							    text = _a.text,
							    title = _a.title,
							    className = _a.className,
							    style = _a.style,
							    size = _a.size,
							    width = _a.width,
							    height = _a.height,
							    iconSize = _a.iconSize,
							    iconPath = _a.iconPath,
							    useOpacityForHover = _a.useOpacityForHover,
							    hasCheckbox = _a.hasCheckbox,
							    checked = _a.checked,
							    checkboxStyle = _a.checkboxStyle,
							    checkboxLabelStyle = _a.checkboxLabelStyle,
							    onCheckedChanged = _a.onCheckedChanged,
							    onLeftClick = _a.onLeftClick,
							    children = _a.children,
							    rest = __rest(_a, ["enabled", "text", "title", "className", "style", "size", "width", "height", "iconSize", "iconPath", "useOpacityForHover", "hasCheckbox", "checked", "checkboxStyle", "checkboxLabelStyle", "onCheckedChanged", "onLeftClick", "children"]);
							width = width || size;
							height = height || size;
							var padding = "5px 15px";
							if (height) {
								var baseHeight = 20;
								var heightDifPerSide = (height - baseHeight) / 2;
								padding = heightDifPerSide + "px 15px";
							}
							var finalStyle = E(styles.root, useOpacityForHover && styles.root_opacityHover, { padding: padding }, (width || height) && {
								padding: 0, width: width, height: height,
								backgroundPosition: (width - iconSize) / 2 + "px " + (height - iconSize) / 2 + "px",
								backgroundSize: iconSize
							}, iconPath && { backgroundImage: "url(" + iconPath + ")" }, hasCheckbox && styles.root_hasCheckbox, !enabled && styles.root_disabled, style);
							// experimental pseudo-selector-capable styling system
							var pseudoSelectors = [":hover"];
							var currentPseudoSelectorStyleKeys = [];
							if (enabled) {
								var _iteratorNormalCompletion = true;
								var _didIteratorError = false;
								var _iteratorError = undefined;

								try {
									for (var _iterator = pseudoSelectors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
										var selector = _step.value;

										if (finalStyle[selector] == null) continue;
										var styleText = (0, _CSSPropertyOperations.createMarkupForStyles)(finalStyle[selector]);
										var styleKey = (0, _General.ToJSON)(selector + "---" + styleText); // get a unique identifier for this particular pseudo-style
										styleKey = styleKey.replace(/[^a-zA-Z0-9-]/g, ""); // make sure key is a valid class-name
										currentPseudoSelectorStyleKeys.push(styleKey);
										// if <style> element for the given style-composite has not been created yet, create it 
										if (pseudoSelectorStyleKeys[styleKey] == null) {
											pseudoSelectorStyleKeys[styleKey] = true;
											(0, _reactVextensions.AddGlobalStyle)("\n\t\t\t.Button." + styleKey + selector + " {\n\t\t\t\t" + styleText.replace(/([^ ]+?);/g, "$1 !important;") + "\n\t\t\t}\n\t\t\t\t\t\t\t");
										}
									}
								} catch (err) {
									_didIteratorError = true;
									_iteratorError = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion && _iterator.return) {
											_iterator.return();
										}
									} finally {
										if (_didIteratorError) {
											throw _iteratorError;
										}
									}
								}
							}
							return _react2.default.createElement("div", Object.assign({}, rest, { title: title, onClick: this.OnClick, className: "Button " + currentPseudoSelectorStyleKeys.join(" ") + " " + (className || ""), style: finalStyle }), hasCheckbox ? _react2.default.createElement("span", { style: { verticalAlign: 4 } }, text) : text, children);
						}
					}, {
						key: "OnClick",
						value: function OnClick(e) {
							var _props = this.props,
							    enabled = _props.enabled,
							    onClick = _props.onClick,
							    onLeftClick = _props.onLeftClick,
							    onDirectClick = _props.onDirectClick;

							if (!enabled) return;
							if (onDirectClick && (e.target == e.currentTarget || e.target.parentElement == e.currentTarget)) onDirectClick(e);
							if (onClick) onClick(e);
							if (onLeftClick && e.button == 0) onLeftClick(e);
						}
					}]);

					return Button;
				}(_reactVextensions.BaseComponent);
				Button.defaultProps = { enabled: true };
				exports.Button = Button = __decorate([_reactVextensions.ApplyBasicStyles], Button);
				exports.Button = Button;

				/***/
			},
			/* 8 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */

					'use strict';

					var CSSProperty = __webpack_require__(10);
					var ExecutionEnvironment = __webpack_require__(11);
					var ReactInstrumentation = __webpack_require__(12);

					var camelizeStyleName = __webpack_require__(26);
					var dangerousStyleValue = __webpack_require__(28);
					var hyphenateStyleName = __webpack_require__(29);
					var memoizeStringOnly = __webpack_require__(31);
					var warning = __webpack_require__(15);

					var processStyleName = memoizeStringOnly(function (styleName) {
						return hyphenateStyleName(styleName);
					});

					var hasShorthandPropertyBug = false;
					var styleFloatAccessor = 'cssFloat';
					if (ExecutionEnvironment.canUseDOM) {
						var tempStyle = document.createElement('div').style;
						try {
							// IE8 throws "Invalid argument." if resetting shorthand style properties.
							tempStyle.font = '';
						} catch (e) {
							hasShorthandPropertyBug = true;
						}
						// IE8 only supports accessing cssFloat (standard) as styleFloat
						if (document.documentElement.style.cssFloat === undefined) {
							styleFloatAccessor = 'styleFloat';
						}
					}

					if (process.env.NODE_ENV !== 'production') {
						// 'msTransform' is correct, but the other prefixes should be capitalized
						var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

						// style values shouldn't contain a semicolon
						var badStyleValueWithSemicolonPattern = /;\s*$/;

						var warnedStyleNames = {};
						var warnedStyleValues = {};
						var warnedForNaNValue = false;

						var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
							if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
								return;
							}

							warnedStyleNames[name] = true;
							process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
						};

						var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
							if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
								return;
							}

							warnedStyleNames[name] = true;
							process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
						};

						var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
							if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
								return;
							}

							warnedStyleValues[value] = true;
							process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
						};

						var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
							if (warnedForNaNValue) {
								return;
							}

							warnedForNaNValue = true;
							process.env.NODE_ENV !== 'production' ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
						};

						var checkRenderMessage = function checkRenderMessage(owner) {
							if (owner) {
								var name = owner.getName();
								if (name) {
									return ' Check the render method of `' + name + '`.';
								}
							}
							return '';
						};

						/**
	      * @param {string} name
	      * @param {*} value
	      * @param {ReactDOMComponent} component
	      */
						var warnValidStyle = function warnValidStyle(name, value, component) {
							var owner;
							if (component) {
								owner = component._currentElement._owner;
							}
							if (name.indexOf('-') > -1) {
								warnHyphenatedStyleName(name, owner);
							} else if (badVendoredStyleNamePattern.test(name)) {
								warnBadVendoredStyleName(name, owner);
							} else if (badStyleValueWithSemicolonPattern.test(value)) {
								warnStyleValueWithSemicolon(name, value, owner);
							}

							if (typeof value === 'number' && isNaN(value)) {
								warnStyleValueIsNaN(name, value, owner);
							}
						};
					}

					/**
	     * Operations for dealing with CSS properties.
	     */
					var CSSPropertyOperations = {

						/**
	      * Serializes a mapping of style properties for use as inline styles:
	      *
	      *   > createMarkupForStyles({width: '200px', height: 0})
	      *   "width:200px;height:0;"
	      *
	      * Undefined values are ignored so that declarative programming is easier.
	      * The result should be HTML-escaped before insertion into the DOM.
	      *
	      * @param {object} styles
	      * @param {ReactDOMComponent} component
	      * @return {?string}
	      */
						createMarkupForStyles: function createMarkupForStyles(styles, component) {
							var serialized = '';
							for (var styleName in styles) {
								if (!styles.hasOwnProperty(styleName)) {
									continue;
								}
								var styleValue = styles[styleName];
								if (process.env.NODE_ENV !== 'production') {
									warnValidStyle(styleName, styleValue, component);
								}
								if (styleValue != null) {
									serialized += processStyleName(styleName) + ':';
									serialized += dangerousStyleValue(styleName, styleValue, component) + ';';
								}
							}
							return serialized || null;
						},

						/**
	      * Sets the value for multiple styles on a node.  If a value is specified as
	      * '' (empty string), the corresponding style property will be unset.
	      *
	      * @param {DOMElement} node
	      * @param {object} styles
	      * @param {ReactDOMComponent} component
	      */
						setValueForStyles: function setValueForStyles(node, styles, component) {
							if (process.env.NODE_ENV !== 'production') {
								ReactInstrumentation.debugTool.onHostOperation({
									instanceID: component._debugID,
									type: 'update styles',
									payload: styles
								});
							}

							var style = node.style;
							for (var styleName in styles) {
								if (!styles.hasOwnProperty(styleName)) {
									continue;
								}
								if (process.env.NODE_ENV !== 'production') {
									warnValidStyle(styleName, styles[styleName], component);
								}
								var styleValue = dangerousStyleValue(styleName, styles[styleName], component);
								if (styleName === 'float' || styleName === 'cssFloat') {
									styleName = styleFloatAccessor;
								}
								if (styleValue) {
									style[styleName] = styleValue;
								} else {
									var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
									if (expansion) {
										// Shorthand property that IE8 won't like unsetting, so unset each
										// component to placate it
										for (var individualStyleName in expansion) {
											style[individualStyleName] = '';
										}
									} else {
										style[styleName] = '';
									}
								}
							}
						}

					};

					module.exports = CSSPropertyOperations;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 9 */
			/***/function (module, exports) {

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
				function defaultClearTimeout() {
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
				})();
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
					} catch (e) {
						try {
							// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
							return cachedSetTimeout.call(null, fun, 0);
						} catch (e) {
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
					} catch (e) {
						try {
							// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
							return cachedClearTimeout.call(null, marker);
						} catch (e) {
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
					while (len) {
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

				process.binding = function (name) {
					throw new Error('process.binding is not supported');
				};

				process.cwd = function () {
					return '/';
				};
				process.chdir = function (dir) {
					throw new Error('process.chdir is not supported');
				};
				process.umask = function () {
					return 0;
				};

				/***/
			},
			/* 10 */
			/***/function (module, exports) {

				/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */

				'use strict';

				/**
	    * CSS properties which accept numbers but are not in units of "px".
	    */

				var isUnitlessNumber = {
					animationIterationCount: true,
					borderImageOutset: true,
					borderImageSlice: true,
					borderImageWidth: true,
					boxFlex: true,
					boxFlexGroup: true,
					boxOrdinalGroup: true,
					columnCount: true,
					flex: true,
					flexGrow: true,
					flexPositive: true,
					flexShrink: true,
					flexNegative: true,
					flexOrder: true,
					gridRow: true,
					gridColumn: true,
					fontWeight: true,
					lineClamp: true,
					lineHeight: true,
					opacity: true,
					order: true,
					orphans: true,
					tabSize: true,
					widows: true,
					zIndex: true,
					zoom: true,

					// SVG-related properties
					fillOpacity: true,
					floodOpacity: true,
					stopOpacity: true,
					strokeDasharray: true,
					strokeDashoffset: true,
					strokeMiterlimit: true,
					strokeOpacity: true,
					strokeWidth: true
				};

				/**
	    * @param {string} prefix vendor-specific prefix, eg: Webkit
	    * @param {string} key style name, eg: transitionDuration
	    * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	    * WebkitTransitionDuration
	    */
				function prefixKey(prefix, key) {
					return prefix + key.charAt(0).toUpperCase() + key.substring(1);
				}

				/**
	    * Support style names that may come passed in prefixed by adding permutations
	    * of vendor prefixes.
	    */
				var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

				// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
				// infinite loop, because it iterates over the newly added props too.
				Object.keys(isUnitlessNumber).forEach(function (prop) {
					prefixes.forEach(function (prefix) {
						isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
					});
				});

				/**
	    * Most style properties can be unset by doing .style[prop] = '' but IE8
	    * doesn't like doing that with shorthand properties so for the properties that
	    * IE8 breaks on, which are listed here, we instead unset each of the
	    * individual properties. See http://bugs.jquery.com/ticket/12385.
	    * The 4-value 'clock' properties like margin, padding, border-width seem to
	    * behave without any problems. Curiously, list-style works too without any
	    * special prodding.
	    */
				var shorthandPropertyExpansions = {
					background: {
						backgroundAttachment: true,
						backgroundColor: true,
						backgroundImage: true,
						backgroundPositionX: true,
						backgroundPositionY: true,
						backgroundRepeat: true
					},
					backgroundPosition: {
						backgroundPositionX: true,
						backgroundPositionY: true
					},
					border: {
						borderWidth: true,
						borderStyle: true,
						borderColor: true
					},
					borderBottom: {
						borderBottomWidth: true,
						borderBottomStyle: true,
						borderBottomColor: true
					},
					borderLeft: {
						borderLeftWidth: true,
						borderLeftStyle: true,
						borderLeftColor: true
					},
					borderRight: {
						borderRightWidth: true,
						borderRightStyle: true,
						borderRightColor: true
					},
					borderTop: {
						borderTopWidth: true,
						borderTopStyle: true,
						borderTopColor: true
					},
					font: {
						fontStyle: true,
						fontVariant: true,
						fontWeight: true,
						fontSize: true,
						lineHeight: true,
						fontFamily: true
					},
					outline: {
						outlineWidth: true,
						outlineStyle: true,
						outlineColor: true
					}
				};

				var CSSProperty = {
					isUnitlessNumber: isUnitlessNumber,
					shorthandPropertyExpansions: shorthandPropertyExpansions
				};

				module.exports = CSSProperty;

				/***/
			},
			/* 11 */
			/***/function (module, exports) {

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */

				'use strict';

				var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

				/**
	    * Simple, lightweight module assisting with the detection and context of
	    * Worker. Helps avoid circular dependencies and allows code to reason about
	    * whether or not they are in a Worker, even if they never include the main
	    * `ReactWorker` dependency.
	    */
				var ExecutionEnvironment = {

					canUseDOM: canUseDOM,

					canUseWorkers: typeof Worker !== 'undefined',

					canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

					canUseViewport: canUseDOM && !!window.screen,

					isInWorker: !canUseDOM // For now, this is true - might change in the future.

				};

				module.exports = ExecutionEnvironment;

				/***/
			},
			/* 12 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2016-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    */

					'use strict';

					// Trust the developer to only use ReactInstrumentation with a __DEV__ check

					var debugTool = null;

					if (process.env.NODE_ENV !== 'production') {
						var ReactDebugTool = __webpack_require__(13);
						debugTool = ReactDebugTool;
					}

					module.exports = { debugTool: debugTool };
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 13 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2016-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    */

					'use strict';

					var ReactInvalidSetStateWarningHook = __webpack_require__(14);
					var ReactHostOperationHistoryHook = __webpack_require__(17);
					var ReactComponentTreeHook = __webpack_require__(18);
					var ExecutionEnvironment = __webpack_require__(11);

					var performanceNow = __webpack_require__(24);
					var warning = __webpack_require__(15);

					var hooks = [];
					var didHookThrowForEvent = {};

					function callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
						try {
							fn.call(context, arg1, arg2, arg3, arg4, arg5);
						} catch (e) {
							process.env.NODE_ENV !== 'production' ? warning(didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : void 0;
							didHookThrowForEvent[event] = true;
						}
					}

					function emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
						for (var i = 0; i < hooks.length; i++) {
							var hook = hooks[i];
							var fn = hook[event];
							if (fn) {
								callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
							}
						}
					}

					var _isProfiling = false;
					var flushHistory = [];
					var lifeCycleTimerStack = [];
					var currentFlushNesting = 0;
					var currentFlushMeasurements = [];
					var currentFlushStartTime = 0;
					var currentTimerDebugID = null;
					var currentTimerStartTime = 0;
					var currentTimerNestedFlushDuration = 0;
					var currentTimerType = null;

					var lifeCycleTimerHasWarned = false;

					function clearHistory() {
						ReactComponentTreeHook.purgeUnmountedComponents();
						ReactHostOperationHistoryHook.clearHistory();
					}

					function getTreeSnapshot(registeredIDs) {
						return registeredIDs.reduce(function (tree, id) {
							var ownerID = ReactComponentTreeHook.getOwnerID(id);
							var parentID = ReactComponentTreeHook.getParentID(id);
							tree[id] = {
								displayName: ReactComponentTreeHook.getDisplayName(id),
								text: ReactComponentTreeHook.getText(id),
								updateCount: ReactComponentTreeHook.getUpdateCount(id),
								childIDs: ReactComponentTreeHook.getChildIDs(id),
								// Text nodes don't have owners but this is close enough.
								ownerID: ownerID || parentID && ReactComponentTreeHook.getOwnerID(parentID) || 0,
								parentID: parentID
							};
							return tree;
						}, {});
					}

					function resetMeasurements() {
						var previousStartTime = currentFlushStartTime;
						var previousMeasurements = currentFlushMeasurements;
						var previousOperations = ReactHostOperationHistoryHook.getHistory();

						if (currentFlushNesting === 0) {
							currentFlushStartTime = 0;
							currentFlushMeasurements = [];
							clearHistory();
							return;
						}

						if (previousMeasurements.length || previousOperations.length) {
							var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
							flushHistory.push({
								duration: performanceNow() - previousStartTime,
								measurements: previousMeasurements || [],
								operations: previousOperations || [],
								treeSnapshot: getTreeSnapshot(registeredIDs)
							});
						}

						clearHistory();
						currentFlushStartTime = performanceNow();
						currentFlushMeasurements = [];
					}

					function checkDebugID(debugID) {
						var allowRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

						if (allowRoot && debugID === 0) {
							return;
						}
						if (!debugID) {
							process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDebugTool: debugID may not be empty.') : void 0;
						}
					}

					function beginLifeCycleTimer(debugID, timerType) {
						if (currentFlushNesting === 0) {
							return;
						}
						if (currentTimerType && !lifeCycleTimerHasWarned) {
							process.env.NODE_ENV !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
							lifeCycleTimerHasWarned = true;
						}
						currentTimerStartTime = performanceNow();
						currentTimerNestedFlushDuration = 0;
						currentTimerDebugID = debugID;
						currentTimerType = timerType;
					}

					function endLifeCycleTimer(debugID, timerType) {
						if (currentFlushNesting === 0) {
							return;
						}
						if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
							process.env.NODE_ENV !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
							lifeCycleTimerHasWarned = true;
						}
						if (_isProfiling) {
							currentFlushMeasurements.push({
								timerType: timerType,
								instanceID: debugID,
								duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
							});
						}
						currentTimerStartTime = 0;
						currentTimerNestedFlushDuration = 0;
						currentTimerDebugID = null;
						currentTimerType = null;
					}

					function pauseCurrentLifeCycleTimer() {
						var currentTimer = {
							startTime: currentTimerStartTime,
							nestedFlushStartTime: performanceNow(),
							debugID: currentTimerDebugID,
							timerType: currentTimerType
						};
						lifeCycleTimerStack.push(currentTimer);
						currentTimerStartTime = 0;
						currentTimerNestedFlushDuration = 0;
						currentTimerDebugID = null;
						currentTimerType = null;
					}

					function resumeCurrentLifeCycleTimer() {
						var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop(),
						    startTime = _lifeCycleTimerStack$.startTime,
						    nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime,
						    debugID = _lifeCycleTimerStack$.debugID,
						    timerType = _lifeCycleTimerStack$.timerType;

						var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
						currentTimerStartTime = startTime;
						currentTimerNestedFlushDuration += nestedFlushDuration;
						currentTimerDebugID = debugID;
						currentTimerType = timerType;
					}

					var lastMarkTimeStamp = 0;
					var canUsePerformanceMeasure =
					// $FlowFixMe https://github.com/facebook/flow/issues/2345
					typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

					function shouldMark(debugID) {
						if (!_isProfiling || !canUsePerformanceMeasure) {
							return false;
						}
						var element = ReactComponentTreeHook.getElement(debugID);
						if (element == null || (typeof element === 'undefined' ? 'undefined' : _typeof3(element)) !== 'object') {
							return false;
						}
						var isHostElement = typeof element.type === 'string';
						if (isHostElement) {
							return false;
						}
						return true;
					}

					function markBegin(debugID, markType) {
						if (!shouldMark(debugID)) {
							return;
						}

						var markName = debugID + '::' + markType;
						lastMarkTimeStamp = performanceNow();
						performance.mark(markName);
					}

					function markEnd(debugID, markType) {
						if (!shouldMark(debugID)) {
							return;
						}

						var markName = debugID + '::' + markType;
						var displayName = ReactComponentTreeHook.getDisplayName(debugID) || 'Unknown';

						// Chrome has an issue of dropping markers recorded too fast:
						// https://bugs.chromium.org/p/chromium/issues/detail?id=640652
						// To work around this, we will not report very small measurements.
						// I determined the magic number by tweaking it back and forth.
						// 0.05ms was enough to prevent the issue, but I set it to 0.1ms to be safe.
						// When the bug is fixed, we can `measure()` unconditionally if we want to.
						var timeStamp = performanceNow();
						if (timeStamp - lastMarkTimeStamp > 0.1) {
							var measurementName = displayName + ' [' + markType + ']';
							performance.measure(measurementName, markName);
						}

						performance.clearMarks(markName);
						performance.clearMeasures(measurementName);
					}

					var ReactDebugTool = {
						addHook: function addHook(hook) {
							hooks.push(hook);
						},
						removeHook: function removeHook(hook) {
							for (var i = 0; i < hooks.length; i++) {
								if (hooks[i] === hook) {
									hooks.splice(i, 1);
									i--;
								}
							}
						},
						isProfiling: function isProfiling() {
							return _isProfiling;
						},
						beginProfiling: function beginProfiling() {
							if (_isProfiling) {
								return;
							}

							_isProfiling = true;
							flushHistory.length = 0;
							resetMeasurements();
							ReactDebugTool.addHook(ReactHostOperationHistoryHook);
						},
						endProfiling: function endProfiling() {
							if (!_isProfiling) {
								return;
							}

							_isProfiling = false;
							resetMeasurements();
							ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
						},
						getFlushHistory: function getFlushHistory() {
							return flushHistory;
						},
						onBeginFlush: function onBeginFlush() {
							currentFlushNesting++;
							resetMeasurements();
							pauseCurrentLifeCycleTimer();
							emitEvent('onBeginFlush');
						},
						onEndFlush: function onEndFlush() {
							resetMeasurements();
							currentFlushNesting--;
							resumeCurrentLifeCycleTimer();
							emitEvent('onEndFlush');
						},
						onBeginLifeCycleTimer: function onBeginLifeCycleTimer(debugID, timerType) {
							checkDebugID(debugID);
							emitEvent('onBeginLifeCycleTimer', debugID, timerType);
							markBegin(debugID, timerType);
							beginLifeCycleTimer(debugID, timerType);
						},
						onEndLifeCycleTimer: function onEndLifeCycleTimer(debugID, timerType) {
							checkDebugID(debugID);
							endLifeCycleTimer(debugID, timerType);
							markEnd(debugID, timerType);
							emitEvent('onEndLifeCycleTimer', debugID, timerType);
						},
						onBeginProcessingChildContext: function onBeginProcessingChildContext() {
							emitEvent('onBeginProcessingChildContext');
						},
						onEndProcessingChildContext: function onEndProcessingChildContext() {
							emitEvent('onEndProcessingChildContext');
						},
						onHostOperation: function onHostOperation(operation) {
							checkDebugID(operation.instanceID);
							emitEvent('onHostOperation', operation);
						},
						onSetState: function onSetState() {
							emitEvent('onSetState');
						},
						onSetChildren: function onSetChildren(debugID, childDebugIDs) {
							checkDebugID(debugID);
							childDebugIDs.forEach(checkDebugID);
							emitEvent('onSetChildren', debugID, childDebugIDs);
						},
						onBeforeMountComponent: function onBeforeMountComponent(debugID, element, parentDebugID) {
							checkDebugID(debugID);
							checkDebugID(parentDebugID, true);
							emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
							markBegin(debugID, 'mount');
						},
						onMountComponent: function onMountComponent(debugID) {
							checkDebugID(debugID);
							markEnd(debugID, 'mount');
							emitEvent('onMountComponent', debugID);
						},
						onBeforeUpdateComponent: function onBeforeUpdateComponent(debugID, element) {
							checkDebugID(debugID);
							emitEvent('onBeforeUpdateComponent', debugID, element);
							markBegin(debugID, 'update');
						},
						onUpdateComponent: function onUpdateComponent(debugID) {
							checkDebugID(debugID);
							markEnd(debugID, 'update');
							emitEvent('onUpdateComponent', debugID);
						},
						onBeforeUnmountComponent: function onBeforeUnmountComponent(debugID) {
							checkDebugID(debugID);
							emitEvent('onBeforeUnmountComponent', debugID);
							markBegin(debugID, 'unmount');
						},
						onUnmountComponent: function onUnmountComponent(debugID) {
							checkDebugID(debugID);
							markEnd(debugID, 'unmount');
							emitEvent('onUnmountComponent', debugID);
						},
						onTestEvent: function onTestEvent() {
							emitEvent('onTestEvent');
						}
					};

					// TODO remove these when RN/www gets updated
					ReactDebugTool.addDevtool = ReactDebugTool.addHook;
					ReactDebugTool.removeDevtool = ReactDebugTool.removeHook;

					ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
					ReactDebugTool.addHook(ReactComponentTreeHook);
					var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
					if (/[?&]react_perf\b/.test(url)) {
						ReactDebugTool.beginProfiling();
					}

					module.exports = ReactDebugTool;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 14 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2016-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    */

					'use strict';

					var warning = __webpack_require__(15);

					if (process.env.NODE_ENV !== 'production') {
						var processingChildContext = false;

						var warnInvalidSetState = function warnInvalidSetState() {
							process.env.NODE_ENV !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
						};
					}

					var ReactInvalidSetStateWarningHook = {
						onBeginProcessingChildContext: function onBeginProcessingChildContext() {
							processingChildContext = true;
						},
						onEndProcessingChildContext: function onEndProcessingChildContext() {
							processingChildContext = false;
						},
						onSetState: function onSetState() {
							warnInvalidSetState();
						}
					};

					module.exports = ReactInvalidSetStateWarningHook;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 15 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2014-2015, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */

					'use strict';

					var emptyFunction = __webpack_require__(16);

					/**
	     * Similar to invariant but only logs a warning if the condition is not met.
	     * This can be used to log issues in development environments in critical
	     * paths. Removing the logging code for production environments will keep the
	     * same logic and follow the same code paths.
	     */

					var warning = emptyFunction;

					if (process.env.NODE_ENV !== 'production') {
						(function () {
							var printWarning = function printWarning(format) {
								for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
									args[_key - 1] = arguments[_key];
								}

								var argIndex = 0;
								var message = 'Warning: ' + format.replace(/%s/g, function () {
									return args[argIndex++];
								});
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

							warning = function warning(condition, format) {
								if (format === undefined) {
									throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
								}

								if (format.indexOf('Failed Composite propType: ') === 0) {
									return; // Ignore CompositeComponent proptype check.
								}

								if (!condition) {
									for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
										args[_key2 - 2] = arguments[_key2];
									}

									printWarning.apply(undefined, [format].concat(args));
								}
							};
						})();
					}

					module.exports = warning;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 16 */
			/***/function (module, exports) {

				"use strict";

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    */

				function makeEmptyFunction(arg) {
					return function () {
						return arg;
					};
				}

				/**
	    * This function accepts and discards inputs; it has no side effects. This is
	    * primarily useful idiomatically for overridable function endpoints which
	    * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	    */
				var emptyFunction = function emptyFunction() {};

				emptyFunction.thatReturns = makeEmptyFunction;
				emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
				emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
				emptyFunction.thatReturnsNull = makeEmptyFunction(null);
				emptyFunction.thatReturnsThis = function () {
					return this;
				};
				emptyFunction.thatReturnsArgument = function (arg) {
					return arg;
				};

				module.exports = emptyFunction;

				/***/
			},
			/* 17 */
			/***/function (module, exports) {

				/**
	    * Copyright 2016-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    */

				'use strict';

				var history = [];

				var ReactHostOperationHistoryHook = {
					onHostOperation: function onHostOperation(operation) {
						history.push(operation);
					},
					clearHistory: function clearHistory() {
						if (ReactHostOperationHistoryHook._preventClearing) {
							// Should only be used for tests.
							return;
						}

						history = [];
					},
					getHistory: function getHistory() {
						return history;
					}
				};

				module.exports = ReactHostOperationHistoryHook;

				/***/
			},
			/* 18 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2016-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    */

					'use strict';

					var _prodInvariant = __webpack_require__(19);

					var ReactCurrentOwner = __webpack_require__(20);

					var invariant = __webpack_require__(21);
					var warning = __webpack_require__(22);

					function isNative(fn) {
						// Based on isNative() from Lodash
						var funcToString = Function.prototype.toString;
						var hasOwnProperty = Object.prototype.hasOwnProperty;
						var reIsNative = RegExp('^' + funcToString
						// Take an example native function source for comparison
						.call(hasOwnProperty)
						// Strip regex characters so we can use it for regex
						.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
						// Remove hasOwnProperty from the template to make it generic
						.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
						try {
							var source = funcToString.call(fn);
							return reIsNative.test(source);
						} catch (err) {
							return false;
						}
					}

					var canUseCollections =
					// Array.from
					typeof Array.from === 'function' &&
					// Map
					typeof Map === 'function' && isNative(Map) &&
					// Map.prototype.keys
					Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
					// Set
					typeof Set === 'function' && isNative(Set) &&
					// Set.prototype.keys
					Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

					var setItem;
					var getItem;
					var removeItem;
					var getItemIDs;
					var addRoot;
					var removeRoot;
					var getRootIDs;

					if (canUseCollections) {
						var itemMap = new Map();
						var rootIDSet = new Set();

						setItem = function setItem(id, item) {
							itemMap.set(id, item);
						};
						getItem = function getItem(id) {
							return itemMap.get(id);
						};
						removeItem = function removeItem(id) {
							itemMap['delete'](id);
						};
						getItemIDs = function getItemIDs() {
							return Array.from(itemMap.keys());
						};

						addRoot = function addRoot(id) {
							rootIDSet.add(id);
						};
						removeRoot = function removeRoot(id) {
							rootIDSet['delete'](id);
						};
						getRootIDs = function getRootIDs() {
							return Array.from(rootIDSet.keys());
						};
					} else {
						var itemByKey = {};
						var rootByKey = {};

						// Use non-numeric keys to prevent V8 performance issues:
						// https://github.com/facebook/react/pull/7232
						var getKeyFromID = function getKeyFromID(id) {
							return '.' + id;
						};
						var getIDFromKey = function getIDFromKey(key) {
							return parseInt(key.substr(1), 10);
						};

						setItem = function setItem(id, item) {
							var key = getKeyFromID(id);
							itemByKey[key] = item;
						};
						getItem = function getItem(id) {
							var key = getKeyFromID(id);
							return itemByKey[key];
						};
						removeItem = function removeItem(id) {
							var key = getKeyFromID(id);
							delete itemByKey[key];
						};
						getItemIDs = function getItemIDs() {
							return Object.keys(itemByKey).map(getIDFromKey);
						};

						addRoot = function addRoot(id) {
							var key = getKeyFromID(id);
							rootByKey[key] = true;
						};
						removeRoot = function removeRoot(id) {
							var key = getKeyFromID(id);
							delete rootByKey[key];
						};
						getRootIDs = function getRootIDs() {
							return Object.keys(rootByKey).map(getIDFromKey);
						};
					}

					var unmountedIDs = [];

					function purgeDeep(id) {
						var item = getItem(id);
						if (item) {
							var childIDs = item.childIDs;

							removeItem(id);
							childIDs.forEach(purgeDeep);
						}
					}

					function describeComponentFrame(name, source, ownerName) {
						return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
					}

					function _getDisplayName(element) {
						if (element == null) {
							return '#empty';
						} else if (typeof element === 'string' || typeof element === 'number') {
							return '#text';
						} else if (typeof element.type === 'string') {
							return element.type;
						} else {
							return element.type.displayName || element.type.name || 'Unknown';
						}
					}

					function describeID(id) {
						var name = ReactComponentTreeHook.getDisplayName(id);
						var element = ReactComponentTreeHook.getElement(id);
						var ownerID = ReactComponentTreeHook.getOwnerID(id);
						var ownerName;
						if (ownerID) {
							ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
						}
						process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
						return describeComponentFrame(name, element && element._source, ownerName);
					}

					var ReactComponentTreeHook = {
						onSetChildren: function onSetChildren(id, nextChildIDs) {
							var item = getItem(id);
							!item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
							item.childIDs = nextChildIDs;

							for (var i = 0; i < nextChildIDs.length; i++) {
								var nextChildID = nextChildIDs[i];
								var nextChild = getItem(nextChildID);
								!nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
								!(nextChild.childIDs != null || _typeof3(nextChild.element) !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
								!nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
								if (nextChild.parentID == null) {
									nextChild.parentID = id;
									// TODO: This shouldn't be necessary but mounting a new root during in
									// componentWillMount currently causes not-yet-mounted components to
									// be purged from our tree data so their parent id is missing.
								}
								!(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
							}
						},
						onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
							var item = {
								element: element,
								parentID: parentID,
								text: null,
								childIDs: [],
								isMounted: false,
								updateCount: 0
							};
							setItem(id, item);
						},
						onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
							var item = getItem(id);
							if (!item || !item.isMounted) {
								// We may end up here as a result of setState() in componentWillUnmount().
								// In this case, ignore the element.
								return;
							}
							item.element = element;
						},
						onMountComponent: function onMountComponent(id) {
							var item = getItem(id);
							!item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
							item.isMounted = true;
							var isRoot = item.parentID === 0;
							if (isRoot) {
								addRoot(id);
							}
						},
						onUpdateComponent: function onUpdateComponent(id) {
							var item = getItem(id);
							if (!item || !item.isMounted) {
								// We may end up here as a result of setState() in componentWillUnmount().
								// In this case, ignore the element.
								return;
							}
							item.updateCount++;
						},
						onUnmountComponent: function onUnmountComponent(id) {
							var item = getItem(id);
							if (item) {
								// We need to check if it exists.
								// `item` might not exist if it is inside an error boundary, and a sibling
								// error boundary child threw while mounting. Then this instance never
								// got a chance to mount, but it still gets an unmounting event during
								// the error boundary cleanup.
								item.isMounted = false;
								var isRoot = item.parentID === 0;
								if (isRoot) {
									removeRoot(id);
								}
							}
							unmountedIDs.push(id);
						},
						purgeUnmountedComponents: function purgeUnmountedComponents() {
							if (ReactComponentTreeHook._preventPurging) {
								// Should only be used for testing.
								return;
							}

							for (var i = 0; i < unmountedIDs.length; i++) {
								var id = unmountedIDs[i];
								purgeDeep(id);
							}
							unmountedIDs.length = 0;
						},
						isMounted: function isMounted(id) {
							var item = getItem(id);
							return item ? item.isMounted : false;
						},
						getCurrentStackAddendum: function getCurrentStackAddendum(topElement) {
							var info = '';
							if (topElement) {
								var name = _getDisplayName(topElement);
								var owner = topElement._owner;
								info += describeComponentFrame(name, topElement._source, owner && owner.getName());
							}

							var currentOwner = ReactCurrentOwner.current;
							var id = currentOwner && currentOwner._debugID;

							info += ReactComponentTreeHook.getStackAddendumByID(id);
							return info;
						},
						getStackAddendumByID: function getStackAddendumByID(id) {
							var info = '';
							while (id) {
								info += describeID(id);
								id = ReactComponentTreeHook.getParentID(id);
							}
							return info;
						},
						getChildIDs: function getChildIDs(id) {
							var item = getItem(id);
							return item ? item.childIDs : [];
						},
						getDisplayName: function getDisplayName(id) {
							var element = ReactComponentTreeHook.getElement(id);
							if (!element) {
								return null;
							}
							return _getDisplayName(element);
						},
						getElement: function getElement(id) {
							var item = getItem(id);
							return item ? item.element : null;
						},
						getOwnerID: function getOwnerID(id) {
							var element = ReactComponentTreeHook.getElement(id);
							if (!element || !element._owner) {
								return null;
							}
							return element._owner._debugID;
						},
						getParentID: function getParentID(id) {
							var item = getItem(id);
							return item ? item.parentID : null;
						},
						getSource: function getSource(id) {
							var item = getItem(id);
							var element = item ? item.element : null;
							var source = element != null ? element._source : null;
							return source;
						},
						getText: function getText(id) {
							var element = ReactComponentTreeHook.getElement(id);
							if (typeof element === 'string') {
								return element;
							} else if (typeof element === 'number') {
								return '' + element;
							} else {
								return null;
							}
						},
						getUpdateCount: function getUpdateCount(id) {
							var item = getItem(id);
							return item ? item.updateCount : 0;
						},

						getRootIDs: getRootIDs,
						getRegisteredIDs: getItemIDs
					};

					module.exports = ReactComponentTreeHook;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 19 */
			/***/function (module, exports) {

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    */
				'use strict';

				/**
	    * WARNING: DO NOT manually require this module.
	    * This is a replacement for `invariant(...)` used by the error code system
	    * and will _only_ be required by the corresponding babel pass.
	    * It always throws.
	    */

				function reactProdInvariant(code) {
					var argCount = arguments.length - 1;

					var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

					for (var argIdx = 0; argIdx < argCount; argIdx++) {
						message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
					}

					message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

					var error = new Error(message);
					error.name = 'Invariant Violation';
					error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

					throw error;
				}

				module.exports = reactProdInvariant;

				/***/
			},
			/* 20 */
			/***/function (module, exports) {

				/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    */

				'use strict';

				/**
	    * Keeps track of the current owner.
	    *
	    * The current owner is the component who should own any components that are
	    * currently being constructed.
	    */

				var ReactCurrentOwner = {

					/**
	     * @internal
	     * @type {ReactComponent}
	     */
					current: null

				};

				module.exports = ReactCurrentOwner;

				/***/
			},
			/* 21 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */

					'use strict';

					/**
	     * Use invariant() to assert state which your program assumes to be true.
	     *
	     * Provide sprintf-style format (only %s is supported) and arguments
	     * to provide information about what broke and what you were
	     * expecting.
	     *
	     * The invariant message will be stripped in production, but the invariant
	     * will remain to ensure logic does not differ in production.
	     */

					var validateFormat = function validateFormat(format) {};

					if (process.env.NODE_ENV !== 'production') {
						validateFormat = function validateFormat(format) {
							if (format === undefined) {
								throw new Error('invariant requires an error message argument');
							}
						};
					}

					function invariant(condition, format, a, b, c, d, e, f) {
						validateFormat(format);

						if (!condition) {
							var error;
							if (format === undefined) {
								error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
							} else {
								var args = [a, b, c, d, e, f];
								var argIndex = 0;
								error = new Error(format.replace(/%s/g, function () {
									return args[argIndex++];
								}));
								error.name = 'Invariant Violation';
							}

							error.framesToPop = 1; // we don't care about invariant's own frame
							throw error;
						}
					}

					module.exports = invariant;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 22 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2014-2015, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */

					'use strict';

					var emptyFunction = __webpack_require__(23);

					/**
	     * Similar to invariant but only logs a warning if the condition is not met.
	     * This can be used to log issues in development environments in critical
	     * paths. Removing the logging code for production environments will keep the
	     * same logic and follow the same code paths.
	     */

					var warning = emptyFunction;

					if (process.env.NODE_ENV !== 'production') {
						(function () {
							var printWarning = function printWarning(format) {
								for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
									args[_key - 1] = arguments[_key];
								}

								var argIndex = 0;
								var message = 'Warning: ' + format.replace(/%s/g, function () {
									return args[argIndex++];
								});
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

							warning = function warning(condition, format) {
								if (format === undefined) {
									throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
								}

								if (format.indexOf('Failed Composite propType: ') === 0) {
									return; // Ignore CompositeComponent proptype check.
								}

								if (!condition) {
									for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
										args[_key2 - 2] = arguments[_key2];
									}

									printWarning.apply(undefined, [format].concat(args));
								}
							};
						})();
					}

					module.exports = warning;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 23 */
			/***/function (module, exports) {

				"use strict";

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    */

				function makeEmptyFunction(arg) {
					return function () {
						return arg;
					};
				}

				/**
	    * This function accepts and discards inputs; it has no side effects. This is
	    * primarily useful idiomatically for overridable function endpoints which
	    * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	    */
				var emptyFunction = function emptyFunction() {};

				emptyFunction.thatReturns = makeEmptyFunction;
				emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
				emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
				emptyFunction.thatReturnsNull = makeEmptyFunction(null);
				emptyFunction.thatReturnsThis = function () {
					return this;
				};
				emptyFunction.thatReturnsArgument = function (arg) {
					return arg;
				};

				module.exports = emptyFunction;

				/***/
			},
			/* 24 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * @typechecks
	    */

				var performance = __webpack_require__(25);

				var performanceNow;

				/**
	    * Detect if we can use `window.performance.now()` and gracefully fallback to
	    * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	    * because of Facebook's testing infrastructure.
	    */
				if (performance.now) {
					performanceNow = function performanceNow() {
						return performance.now();
					};
				} else {
					performanceNow = function performanceNow() {
						return Date.now();
					};
				}

				module.exports = performanceNow;

				/***/
			},
			/* 25 */
			/***/function (module, exports, __webpack_require__) {

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * @typechecks
	    */

				'use strict';

				var ExecutionEnvironment = __webpack_require__(11);

				var performance;

				if (ExecutionEnvironment.canUseDOM) {
					performance = window.performance || window.msPerformance || window.webkitPerformance;
				}

				module.exports = performance || {};

				/***/
			},
			/* 26 */
			/***/function (module, exports, __webpack_require__) {

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * @typechecks
	    */

				'use strict';

				var camelize = __webpack_require__(27);

				var msPattern = /^-ms-/;

				/**
	    * Camelcases a hyphenated CSS property name, for example:
	    *
	    *   > camelizeStyleName('background-color')
	    *   < "backgroundColor"
	    *   > camelizeStyleName('-moz-transition')
	    *   < "MozTransition"
	    *   > camelizeStyleName('-ms-transition')
	    *   < "msTransition"
	    *
	    * As Andi Smith suggests
	    * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	    * is converted to lowercase `ms`.
	    *
	    * @param {string} string
	    * @return {string}
	    */
				function camelizeStyleName(string) {
					return camelize(string.replace(msPattern, 'ms-'));
				}

				module.exports = camelizeStyleName;

				/***/
			},
			/* 27 */
			/***/function (module, exports) {

				"use strict";

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * @typechecks
	    */

				var _hyphenPattern = /-(.)/g;

				/**
	    * Camelcases a hyphenated string, for example:
	    *
	    *   > camelize('background-color')
	    *   < "backgroundColor"
	    *
	    * @param {string} string
	    * @return {string}
	    */
				function camelize(string) {
					return string.replace(_hyphenPattern, function (_, character) {
						return character.toUpperCase();
					});
				}

				module.exports = camelize;

				/***/
			},
			/* 28 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */

					'use strict';

					var CSSProperty = __webpack_require__(10);
					var warning = __webpack_require__(15);

					var isUnitlessNumber = CSSProperty.isUnitlessNumber;
					var styleWarnings = {};

					/**
	     * Convert a value into the proper css writable value. The style name `name`
	     * should be logical (no hyphens), as specified
	     * in `CSSProperty.isUnitlessNumber`.
	     *
	     * @param {string} name CSS property name such as `topMargin`.
	     * @param {*} value CSS property value such as `10px`.
	     * @param {ReactDOMComponent} component
	     * @return {string} Normalized style value with dimensions applied.
	     */
					function dangerousStyleValue(name, value, component) {
						// Note that we've removed escapeTextForBrowser() calls here since the
						// whole string will be escaped when the attribute is injected into
						// the markup. If you provide unsafe user data here they can inject
						// arbitrary CSS which may be problematic (I couldn't repro this):
						// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
						// http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
						// This is not an XSS hole but instead a potential CSS injection issue
						// which has lead to a greater discussion about how we're going to
						// trust URLs moving forward. See #2115901

						var isEmpty = value == null || typeof value === 'boolean' || value === '';
						if (isEmpty) {
							return '';
						}

						var isNonNumeric = isNaN(value);
						if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
							return '' + value; // cast to string
						}

						if (typeof value === 'string') {
							if (process.env.NODE_ENV !== 'production') {
								// Allow '0' to pass through without warning. 0 is already special and
								// doesn't require units, so we don't need to warn about it.
								if (component && value !== '0') {
									var owner = component._currentElement._owner;
									var ownerName = owner ? owner.getName() : null;
									if (ownerName && !styleWarnings[ownerName]) {
										styleWarnings[ownerName] = {};
									}
									var warned = false;
									if (ownerName) {
										var warnings = styleWarnings[ownerName];
										warned = warnings[name];
										if (!warned) {
											warnings[name] = true;
										}
									}
									if (!warned) {
										process.env.NODE_ENV !== 'production' ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
									}
								}
							}
							value = value.trim();
						}
						return value + 'px';
					}

					module.exports = dangerousStyleValue;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 29 */
			/***/function (module, exports, __webpack_require__) {

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * @typechecks
	    */

				'use strict';

				var hyphenate = __webpack_require__(30);

				var msPattern = /^ms-/;

				/**
	    * Hyphenates a camelcased CSS property name, for example:
	    *
	    *   > hyphenateStyleName('backgroundColor')
	    *   < "background-color"
	    *   > hyphenateStyleName('MozTransition')
	    *   < "-moz-transition"
	    *   > hyphenateStyleName('msTransition')
	    *   < "-ms-transition"
	    *
	    * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	    * is converted to `-ms-`.
	    *
	    * @param {string} string
	    * @return {string}
	    */
				function hyphenateStyleName(string) {
					return hyphenate(string).replace(msPattern, '-ms-');
				}

				module.exports = hyphenateStyleName;

				/***/
			},
			/* 30 */
			/***/function (module, exports) {

				'use strict';

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * @typechecks
	    */

				var _uppercasePattern = /([A-Z])/g;

				/**
	    * Hyphenates a camelcased string, for example:
	    *
	    *   > hyphenate('backgroundColor')
	    *   < "background-color"
	    *
	    * For CSS style names, use `hyphenateStyleName` instead which works properly
	    * with all vendor prefixes, including `ms`.
	    *
	    * @param {string} string
	    * @return {string}
	    */
				function hyphenate(string) {
					return string.replace(_uppercasePattern, '-$1').toLowerCase();
				}

				module.exports = hyphenate;

				/***/
			},
			/* 31 */
			/***/function (module, exports) {

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    * @typechecks static-only
	    */

				'use strict';

				/**
	    * Memoizes the return value of a function that accepts one string argument.
	    */

				function memoizeStringOnly(callback) {
					var cache = {};
					return function (string) {
						if (!cache.hasOwnProperty(string)) {
							cache[string] = callback.call(this, string);
						}
						return cache[string];
					};
				}

				module.exports = memoizeStringOnly;

				/***/
			},
			/* 32 */
			/***/function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.E = E;
				exports.ToJSON = ToJSON;
				exports.FromJSON = FromJSON;
				exports.RemoveDuplicates = RemoveDuplicates;
				exports.Assert = Assert;
				exports.AssertWarn = AssertWarn;
				function E(e1, e2, e3, e4, e5, e6, e7, e8) {
					var result = {};
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var extend = _step.value;

							result.Extend(extend);
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					return result;
					//return StyleSheet.create(result);
				}
				function ToJSON(obj) {
					return JSON.stringify(obj);
				}
				function FromJSON(json) {
					return JSON.parse(json);
				}
				function RemoveDuplicates(items) {
					var result = [];
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var item = _step2.value;

							if (result.indexOf(item) == -1) {
								result.push(item);
							}
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}

					return result;
				}
				function Assert(condition, messageOrMessageFunc) {
					if (condition) return;
					var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
					//console.log(`Assert failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);
					console.error("Assert failed) " + message);
					debugger;
					throw new Error("Assert failed) " + message);
				}
				function AssertWarn(condition, messageOrMessageFunc) {
					if (condition) return;
					var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
					console.warn("Assert-warn failed) " + message + "\n\nStackTrace)"); // ${GetStackTraceStr()}`);
				}

				/***/
			},
			/* 33 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.CheckBox = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
				};

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactVextensions = __webpack_require__(4);

				var _Row = __webpack_require__(34);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof3(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
					var c = arguments.length,
					    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
					    d;
					if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
						if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
					}return c > 3 && r && Object.defineProperty(target, key, r), r;
				};

				var CheckBox = CheckBox_1 = function (_BaseComponent) {
					_inherits(CheckBox, _BaseComponent);

					function CheckBox(props) {
						_classCallCheck(this, CheckBox);

						var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

						_this.id = ++CheckBox_1.lastID;
						return _this;
					}

					_createClass(CheckBox, [{
						key: "render",
						value: function render() {
							var _this2 = this;

							var _props = this.props,
							    text = _props.text,
							    title = _props.title,
							    checked = _props.checked,
							    enabled = _props.enabled,
							    style = _props.style,
							    labelStyle = _props.labelStyle,
							    internalChanging = _props.internalChanging,
							    _onChange = _props.onChange;
							var editedValue = this.state.editedValue;

							return _react2.default.createElement(_Row.Row, { style: E({ position: "relative" }, style) }, _react2.default.createElement("input", { ref: function ref(c) {
									return _this2.input = c;
								}, id: "checkBox_" + this.id, type: "checkbox", checked: checked, onChange: function onChange(e) {
									return _onChange && _onChange(_this2.input.checked, e);
								} }), _react2.default.createElement("label", { htmlFor: "checkBox_" + this.id, title: title, style: E({ marginLeft: 3 }, labelStyle) }, _react2.default.createElement("span", null), text));
						}
					}, {
						key: "PostRender",
						value: function PostRender() {
							var indeterminate = this.props.indeterminate;

							this.input.indeterminate = indeterminate;
						}
					}, {
						key: "Checked",
						get: function get() {
							return this.input.checked;
						}
					}]);

					return CheckBox;
				}(_reactVextensions.BaseComponent);
				CheckBox.lastID = -1;
				exports.CheckBox = CheckBox = CheckBox_1 = __decorate([_reactVextensions.ApplyBasicStyles], CheckBox);
				exports.CheckBox = CheckBox;

				var CheckBox_1;
				/*export class CheckBox_Auto extends BaseComponent<
	           {text?, title?, style?, labelStyle?,
	               path: ()=>any, onChange?: (val: boolean)=>void}, {}> {
	       ComponentWillMountOrReceiveProps(props) {
	           var {path} = props;
	           let {node, key: propName} = path();
	           this.AddChangeListeners(node,
	               (propName + "_PostSet").Func(this.Update),
	           );
	       }
	   
	       render() {
	           var {path, onChange, ...rest} = this.props;
	           let {node, key: propName} = path();
	           return (
	               <CheckBox {...rest} checked={node[propName]}
	                   onChange={val=> {
	                       node.a(propName).set = val;
	                       if (onChange) onChange(val);
	                   }}/>
	           );
	       }
	   }*/

				/***/
			},
			/* 34 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.RowLR = exports.Row = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
				};

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactVextensions = __webpack_require__(4);

				var _General = __webpack_require__(32);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof3(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
					var c = arguments.length,
					    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
					    d;
					if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
						if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
					}return c > 3 && r && Object.defineProperty(target, key, r), r;
				};
				var __rest = undefined && undefined.__rest || function (s, e) {
					var t = {};
					for (var p in s) {
						if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
					}if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
						if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
					}return t;
				};

				/*export class Row extends BaseComponent<any, any> {
	       render() {
	           var {style, height, children, ...otherProps} = this.props;
	           height = height != null ? height : (style||{}).height;
	           return (
	               <div {...otherProps} style={E(BasicStyles(this.props), style,
	                       //height != null ? {height} : {flex: 1})}>
	                       height != null && {height})}>
	                   {children}
	               </div>
	           );
	       }
	   }
	   @ApplyBasicStyles
	   export class RowLR extends BaseComponent<{height?, className?, rowStyle?, leftStyle?, rightStyle?}, {}> {
	       render() {
	           var {height, className, rowStyle, leftStyle, rightStyle, children} = this.props;
	           Assert((children as any).length == 2, "Row child-count must be 2. (one for left-side, one for right-side)");
	           return (
	               <div className={"row3 clear " + (className || "")} style={E(height != null && {height}, rowStyle)}>
	                   <div style={E({float: "left", width: "50%"}, leftStyle)}>
	                       {children[0]}
	                   </div>
	                   <div style={E({float: "right", width: "50%"}, rightStyle)}>
	                       {children[1]}
	                   </div>
	               </div>
	           );
	       }
	   }*/
				var Row = function (_BaseComponent) {
					_inherits(Row, _BaseComponent);

					function Row() {
						_classCallCheck(this, Row);

						return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
					}

					_createClass(Row, [{
						key: "render",
						value: function render() {
							var _a = this.props,
							    style = _a.style,
							    rest = __rest(_a, ["style"]);
							return _react2.default.createElement("div", Object.assign({}, rest, { style: E({ display: "flex", alignItems: "center" }, style) }));
						}
					}]);

					return Row;
				}(_reactVextensions.BaseComponent);
				exports.Row = Row = __decorate([_reactVextensions.ApplyBasicStyles], Row);
				exports.Row = Row;

				var RowLR = function (_BaseComponent2) {
					_inherits(RowLR, _BaseComponent2);

					function RowLR() {
						_classCallCheck(this, RowLR);

						return _possibleConstructorReturn(this, (RowLR.__proto__ || Object.getPrototypeOf(RowLR)).apply(this, arguments));
					}

					_createClass(RowLR, [{
						key: "render",
						value: function render() {
							var _a = this.props,
							    splitAt = _a.splitAt,
							    height = _a.height,
							    className = _a.className,
							    style = _a.style,
							    leftStyle = _a.leftStyle,
							    rightStyle = _a.rightStyle,
							    children = _a.children,
							    rest = __rest(_a, ["splitAt", "height", "className", "style", "leftStyle", "rightStyle", "children"]);
							(0, _General.Assert)(children.length == 2, "Row child-count must be 2. (one for left-side, one for right-side)");
							return _react2.default.createElement("div", Object.assign({}, rest, { style: E({ display: "flex", flexShrink: 0 }, style) }), _react2.default.createElement("div", { style: E({ display: "flex", alignItems: "center" }, { width: typeof splitAt == "string" ? splitAt + "%" : splitAt }, leftStyle) }, children[0]), _react2.default.createElement("div", { style: E({ display: "flex", alignItems: "center" }, { width: typeof splitAt == "string" ? 100 - parseInt(splitAt.slice(0, -1)) + "%" : "calc(100% - " + splitAt + "px)" }, rightStyle) }, children[1]));
						}
					}]);

					return RowLR;
				}(_reactVextensions.BaseComponent);
				RowLR.defaultProps = { splitAt: "50%" };
				exports.RowLR = RowLR = __decorate([_reactVextensions.ApplyBasicStyles], RowLR);
				exports.RowLR = RowLR;

				/***/
			},
			/* 35 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.Column = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
				};

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactVextensions = __webpack_require__(4);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof3(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
					var c = arguments.length,
					    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
					    d;
					if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
						if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
					}return c > 3 && r && Object.defineProperty(target, key, r), r;
				};
				var __rest = undefined && undefined.__rest || function (s, e) {
					var t = {};
					for (var p in s) {
						if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
					}if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
						if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
					}return t;
				};

				var Column = function (_BaseComponent) {
					_inherits(Column, _BaseComponent);

					function Column() {
						_classCallCheck(this, Column);

						return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
					}

					_createClass(Column, [{
						key: "render",
						value: function render() {
							var _a = this.props,
							    style = _a.style,
							    rest = __rest(_a, ["style"]);
							return _react2.default.createElement("div", Object.assign({}, rest, { style: E({ display: "flex", flexDirection: "column", flexShrink: 0 }, style) }));
						}
					}]);

					return Column;
				}(_reactVextensions.BaseComponent);
				exports.Column = Column = __decorate([_reactVextensions.ApplyBasicStyles], Column);
				exports.Column = Column;

				/***/
			},
			/* 36 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.DropDownContent = exports.DropDownTrigger = exports.DropDown = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactVextensions = __webpack_require__(4);

				var _classnames = __webpack_require__(37);

				var _classnames2 = _interopRequireDefault(_classnames);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof3(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var __rest = undefined && undefined.__rest || function (s, e) {
					var t = {};
					for (var p in s) {
						if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
					}if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
						if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
					}return t;
				};

				(0, _reactVextensions.AddGlobalStyle)("\n.dropdown {\n    display: inline-block;\n}\n.dropdown__content {\n    display: none;\n    position: absolute;\n}\n.dropdown--active > .dropdown__content {\n    display: block;\n}\n/*\n.dropdown__content > * { pointer-events: auto; }\n.dropdown__content { pointer-events: none; }\n*/\n");

				var DropDown = exports.DropDown = function (_BaseComponent) {
					_inherits(DropDown, _BaseComponent);

					_createClass(DropDown, [{
						key: "ComponentDidMount",
						value: function ComponentDidMount() {
							window.addEventListener("click", this._onWindowClick);
							window.addEventListener("touchstart", this._onWindowClick);
						}
					}, {
						key: "ComponentWillUnmount",
						value: function ComponentWillUnmount() {
							window.removeEventListener("click", this._onWindowClick);
							window.removeEventListener("touchstart", this._onWindowClick);
						}
					}]);

					function DropDown(props) {
						_classCallCheck(this, DropDown);

						var _this = _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this, props));

						_this.state = {
							active: false
						};
						_this._onWindowClick = _this._onWindowClick.bind(_this);
						_this._onToggleClick = _this._onToggleClick.bind(_this);
						return _this;
					}

					_createClass(DropDown, [{
						key: "isActive",
						value: function isActive() {
							return this.props.active != null ? this.props.active : this.state.active;
						}
					}, {
						key: "hide",
						value: function hide() {
							var _this2 = this;

							this.SetState({
								active: false
							}, function () {
								if (_this2.props.onHide) {
									_this2.props.onHide();
								}
							});
						}
					}, {
						key: "show",
						value: function show() {
							var _this3 = this;

							this.SetState({
								active: true
							}, function () {
								if (_this3.props.onShow) {
									_this3.props.onShow();
								}
							});
						}
					}, {
						key: "_onWindowClick",
						value: function _onWindowClick(event) {
							var dropdownElement = (0, _reactVextensions.FindDOM)(this);
							if (event.target !== dropdownElement && !dropdownElement.contains(event.target) && this.isActive()) {
								this.hide();
							}
						}
					}, {
						key: "_onToggleClick",
						value: function _onToggleClick(event) {
							event.preventDefault();
							if (this.isActive()) {
								this.hide();
							} else {
								this.show();
							}
						}
					}, {
						key: "render",
						value: function render() {
							var _this4 = this,
							    _arguments = arguments;

							var _props = this.props,
							    children = _props.children,
							    className = _props.className;
							// create component classes

							var active = this.isActive();
							// stick callback on trigger element
							var boundChildren = _react2.default.Children.map(children, function (child) {
								if (child.type === DropDownTrigger) {
									var originalOnClick = child.props.onClick;
									child = (0, _react.cloneElement)(child, {
										ref: "trigger",
										onClick: function onClick(event) {
											_this4._onToggleClick(event);
											if (originalOnClick) {
												originalOnClick.apply(child, _arguments);
											}
										}
									});
								}
								return child;
							});
							var cleanProps = Object.assign({}, this.props);
							delete cleanProps.active;
							delete cleanProps.onShow;
							delete cleanProps.onHide;
							return _react2.default.createElement("div", Object.assign({}, cleanProps, { className: (0, _classnames2.default)("dropdown", { "dropdown--active": active }, className) }), boundChildren);
						}
					}]);

					return DropDown;
				}(_reactVextensions.BaseComponent);

				var DropDownTrigger = exports.DropDownTrigger = function (_BaseComponent2) {
					_inherits(DropDownTrigger, _BaseComponent2);

					function DropDownTrigger() {
						_classCallCheck(this, DropDownTrigger);

						return _possibleConstructorReturn(this, (DropDownTrigger.__proto__ || Object.getPrototypeOf(DropDownTrigger)).apply(this, arguments));
					}

					_createClass(DropDownTrigger, [{
						key: "render",
						value: function render() {
							var _a = this.props,
							    children = _a.children,
							    className = _a.className,
							    rest = __rest(_a, ["children", "className"]);
							return _react2.default.createElement("div", Object.assign({}, rest, { className: (0, _classnames2.default)("dropdown__trigger", className) }), children);
						}
					}]);

					return DropDownTrigger;
				}(_reactVextensions.BaseComponent);

				var DropDownContent = exports.DropDownContent = function (_BaseComponent3) {
					_inherits(DropDownContent, _BaseComponent3);

					function DropDownContent() {
						_classCallCheck(this, DropDownContent);

						return _possibleConstructorReturn(this, (DropDownContent.__proto__ || Object.getPrototypeOf(DropDownContent)).apply(this, arguments));
					}

					_createClass(DropDownContent, [{
						key: "render",
						value: function render() {
							var _a = this.props,
							    children = _a.children,
							    className = _a.className,
							    style = _a.style,
							    rest = __rest(_a, ["children", "className", "style"]);
							return _react2.default.createElement("div", Object.assign({}, rest, { className: (0, _classnames2.default)("dropdown__content", className), style: E({ padding: 10, background: "rgba(0,0,0,.7)", borderRadius: "0 0 0 5px" }, style) }), children);
						}
					}]);

					return DropDownContent;
				}(_reactVextensions.BaseComponent);

				/***/
			},
			/* 37 */
			/***/function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
	                                                                    Copyright (c) 2016 Jed Watson.
	                                                                    Licensed under the MIT License (MIT), see
	                                                                    http://jedwatson.github.io/classnames
	                                                                    */
				/* global define */

				(function () {
					'use strict';

					var hasOwn = {}.hasOwnProperty;

					function classNames() {
						var classes = [];

						for (var i = 0; i < arguments.length; i++) {
							var arg = arguments[i];
							if (!arg) continue;

							var argType = typeof arg === 'undefined' ? 'undefined' : _typeof3(arg);

							if (argType === 'string' || argType === 'number') {
								classes.push(arg);
							} else if (Array.isArray(arg)) {
								classes.push(classNames.apply(null, arg));
							} else if (argType === 'object') {
								for (var key in arg) {
									if (hasOwn.call(arg, key) && arg[key]) {
										classes.push(key);
									}
								}
							}
						}

						return classes.join(' ');
					}

					if (typeof module !== 'undefined' && module.exports) {
						module.exports = classNames;
					} else if (true) {
						// register as 'classnames', consistent with npm package name
						!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
							return classNames;
						}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
					} else {
						window.classNames = classNames;
					}
				})();

				/***/
			},
			/* 38 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.ButtonBar_OptionUI = exports.Dropdown_OptionUI = exports.Select = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactVextensions = __webpack_require__(4);

				var _General = __webpack_require__(32);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof3(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				/*export class Option {
	       constructor(name, value, style?) {
	           this.name = name;
	           this.value = value;
	           this.style = style;
	       }
	       name;
	       value;
	       style;
	   }*/
				var Select = exports.Select = function (_BaseComponent) {
					_inherits(Select, _BaseComponent);

					function Select() {
						_classCallCheck(this, Select);

						return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
					}

					_createClass(Select, [{
						key: "GetIndexOfOption",
						value: function GetIndexOfOption(option) {
							return this.OptionsList.indexOf(option);
						}
					}, {
						key: "GetIndexOfValue",
						value: function GetIndexOfValue(value) {
							var compareBy = this.props.compareBy;

							var options = this.OptionsList;
							return options.findIndex(function (option) {
								if (compareBy == "name") return option.name === value;
								if (compareBy == "value") return option.value === value;
								return option.value == null ? value == null : option.value.toString() === value.toString();
							});
						}
						//GetIndexForValue(value) { return this.FlattenedChildren.FindIndex(a=>a.props.value == value); }

					}, {
						key: "GetSelectedOption",
						value: function GetSelectedOption() {
							(0, _General.Assert)(this.props.displayType == "dropdown");
							var selectedIndex = (0, _reactVextensions.FindDOM)(this.refs.root).selectedIndex;
							return this.OptionsList[selectedIndex];
						}
					}, {
						key: "GetSelectedValue",
						value: function GetSelectedValue() {
							return this.GetSelectedOption().value;
						}
					}, {
						key: "render",
						value: function render() {
							var _this2 = this;

							var _props = this.props,
							    displayType = _props.displayType,
							    value = _props.value,
							    verifyValue = _props.verifyValue,
							    enabled = _props.enabled,
							    className = _props.className,
							    title = _props.title,
							    style = _props.style,
							    childStyle = _props.childStyle,
							    _onChange = _props.onChange;

							var options = this.OptionsList;
							(0, _General.Assert)((0, _General.RemoveDuplicates)(options.map(function (a) {
								return a.name;
							})).length == options.length, function () {
								var optionsWithNonUniqueNames = options.filter(function (a) {
									return options.filter(function (b) {
										return b.name == a.name;
									}).length > 1;
								});
								return "Select options must have unique names. (shared: " + optionsWithNonUniqueNames.map(function (a) {
									return a.name;
								}).join(", ") + ")";
							});
							var valueValid = this.GetIndexOfValue(value) != -1;
							// if there are no options yet, or value provided is null, don't require match, since this may be a pre-data render
							if (options.length && value != null && verifyValue) {
								(0, _General.AssertWarn)(valueValid, "Select's value must match one of the options. @options(" + options.map(function (a) {
									return a.name + ":" + a.value;
								}).join(", ") + ") @value(" + value + ")");
							}
							/*var newChildren = this.FlattenedChildren.map((child: any, index)=> {
	          //return React.cloneElement(child, {key: index, index: index});
	          return <Option key={index} index={index} style={child.props.style}>{child.props.children}</Option>;
	      });*/
							if (displayType == "dropdown") {
								return _react2.default.createElement("select", { ref: "root", disabled: enabled == false, value: "value" + this.GetIndexOfValue(value), className: className, title: title, style: E({ color: "#000" }, style), onChange: function onChange(e) {
										return _onChange(_this2.GetSelectedValue());
									} }, options.map(function (option, index) {
									return _react2.default.createElement(Dropdown_OptionUI, { key: option.name, index: index, style: E(childStyle, option.style) }, option.name);
								}));
							}
							return _react2.default.createElement("div", { style: E({}, style) }, options.map(function (option, index) {
								return _react2.default.createElement(ButtonBar_OptionUI, { key: option.name, first: index == 0, last: index == options.length - 1, selected: option.value === value, style: E(childStyle, option.style), onSelect: function onSelect(e) {
										return _onChange(option.value);
									} }, option.name);
							}));
						}
					}, {
						key: "OptionsList",
						get: function get() {
							var options_raw = this.props.options;

							var result = [];
							if (options_raw instanceof Array) {
								var _iteratorNormalCompletion = true;
								var _didIteratorError = false;
								var _iteratorError = undefined;

								try {
									for (var _iterator = options_raw[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
										var option_raw = _step.value;

										if (option_raw && option_raw instanceof Object && "name" in option_raw && "value" in option_raw) {
											result.push(option_raw);
										} else {
											result.push({ name: option_raw["name"] || option_raw.toString(), value: option_raw });
										}
									}
								} catch (err) {
									_didIteratorError = true;
									_iteratorError = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion && _iterator.return) {
											_iterator.return();
										}
									} finally {
										if (_didIteratorError) {
											throw _iteratorError;
										}
									}
								}
							} /*else if (IsConstructor(options_raw)) {
	          Assert(options_raw.prototype instanceof Enum, "Class provided must derive from class 'Enum'.");
	          result = (options_raw as any).options;
	        }*/
							else {
									var optionsMap = options_raw;
									var _iteratorNormalCompletion2 = true;
									var _didIteratorError2 = false;
									var _iteratorError2 = undefined;

									try {
										for (var _iterator2 = optionsMap.Props()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
											var _step2$value = _step2.value,
											    name = _step2$value.name,
											    value = _step2$value.value;

											//result.push(new Option(name, value));
											result.push({ name: name, value: value });
										}
									} catch (err) {
										_didIteratorError2 = true;
										_iteratorError2 = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion2 && _iterator2.return) {
												_iterator2.return();
											}
										} finally {
											if (_didIteratorError2) {
												throw _iteratorError2;
											}
										}
									}
								}
							return result;
						}
					}]);

					return Select;
				}(_reactVextensions.BaseComponent);

				Select.defaultProps = {
					displayType: "dropdown",
					compareBy: "value",
					verifyValue: true
				};

				var Dropdown_OptionUI = exports.Dropdown_OptionUI = function (_BaseComponent2) {
					_inherits(Dropdown_OptionUI, _BaseComponent2);

					function Dropdown_OptionUI() {
						_classCallCheck(this, Dropdown_OptionUI);

						return _possibleConstructorReturn(this, (Dropdown_OptionUI.__proto__ || Object.getPrototypeOf(Dropdown_OptionUI)).apply(this, arguments));
					}

					_createClass(Dropdown_OptionUI, [{
						key: "render",
						value: function render() {
							var _props2 = this.props,
							    index = _props2.index,
							    style = _props2.style,
							    children = _props2.children;

							return _react2.default.createElement("option", { value: "value" + index, style: E({ color: "#000" }, style) }, children);
						}
					}]);

					return Dropdown_OptionUI;
				}(_reactVextensions.BaseComponent);

				var ButtonBar_OptionUI = exports.ButtonBar_OptionUI = function (_BaseComponent3) {
					_inherits(ButtonBar_OptionUI, _BaseComponent3);

					function ButtonBar_OptionUI() {
						_classCallCheck(this, ButtonBar_OptionUI);

						return _possibleConstructorReturn(this, (ButtonBar_OptionUI.__proto__ || Object.getPrototypeOf(ButtonBar_OptionUI)).apply(this, arguments));
					}

					_createClass(ButtonBar_OptionUI, [{
						key: "render",
						value: function render() {
							var _this5 = this;

							var _props3 = this.props,
							    first = _props3.first,
							    last = _props3.last,
							    selected = _props3.selected,
							    style = _props3.style,
							    children = _props3.children,
							    onSelect = _props3.onSelect;
							var hovered = this.state.hovered;

							return _react2.default.createElement("div", { className: "ButtonBar_OptionUI", onMouseEnter: function onMouseEnter() {
									return _this5.SetState({ hovered: true });
								}, onMouseLeave: function onMouseLeave() {
									return _this5.SetState({ hovered: false });
								}, style: E({ display: "inline-block", background: "rgba(255,255,255,.3)", padding: "5px 12px", cursor: "pointer" }, hovered && { background: "rgba(255,255,255,.5)" }, first && { borderRadius: "4px 0 0 4px" }, !first && { border: "solid #222", borderWidth: "0 0 0 1px" }, last && { borderRadius: "0 4px 4px 0" }, first && last && { borderRadius: "4px" }, selected && { background: "rgba(255,255,255,.5)" }, style), onClick: onSelect }, children);
						}
					}]);

					return ButtonBar_OptionUI;
				}(_reactVextensions.BaseComponent);
				/*export class Select_Auto extends BaseComponent<
	           {options: {name: string, value, style?}[] | string[] | (new()=>Enum) | {[s: string]: any},
	               displayType?: "dropdown" | "button bar",
	               compareBy?: "name" | "value" | "value toString",
	               className?, title?, style?, childStyle?,
	               path: ()=>any, onChange?: (val)=>void}, {}> {
	       ComponentWillMountOrReceiveProps(props) {
	           var {path} = props;
	           let {node, key: propName} = path();
	           this.AddChangeListeners(node,
	               (propName + "_PostSet").Func(this.Update),
	           );
	       }
	   
	       render() {
	           var {path, onChange, ...rest} = this.props;
	           let {node, key: propName} = path();
	           return (
	               <Select {...rest} value={node[propName]} onChange={val=> {
	                   node.a(propName).set = val;
	                   if (onChange) onChange(val);
	               }}/>
	           );
	       }
	   }*/

				/***/
			},
			/* 39 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.Spinner = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactVextensions = __webpack_require__(4);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof3(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var Spinner = exports.Spinner = function (_BaseComponent) {
					_inherits(Spinner, _BaseComponent);

					function Spinner() {
						_classCallCheck(this, Spinner);

						return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
					}

					_createClass(Spinner, [{
						key: "render",
						value: function render() {
							var _props = this.props,
							    step = _props.step,
							    min = _props.min,
							    max = _props.max,
							    value = _props.value,
							    enabled = _props.enabled,
							    title = _props.title,
							    style = _props.style,
							    onChange = _props.onChange,
							    onFocus = _props.onFocus;

							return _react2.default.createElement("input", { ref: "root", type: "number", step: step, min: min, max: max, value: value, disabled: !enabled, title: title, style: E({ color: "#000" }, style), onChange: this.OnChange, onFocus: onFocus });
						}
					}, {
						key: "OnChange",
						value: function OnChange(e) {
							var onChange = this.props.onChange;

							this.value = this.refs.root.value;
							if (onChange) onChange(parseFloat(this.value), e);
						}
					}]);

					return Spinner;
				}(_reactVextensions.BaseComponent);

				Spinner.defaultProps = { step: 1, min: 0, max: Number.MAX_SAFE_INTEGER, value: 0, enabled: true };
				/*export class Spinner_Auto extends BaseComponent
	           <{step?, min?, max?, enabled?, title?, style?, onFocus?,
	               path: ()=>any, onChange?: (val: number)=>void}, {}> {
	       static defaultProps = {step: 1, min: 0, max: Number.MAX_SAFE_INTEGER};
	   
	       ComponentWillMountOrReceiveProps(props) {
	           var {path} = props;
	           let {node, key: propName} = path();
	           this.AddChangeListeners(node,
	               (propName + "_PostSet").Func(this.Update),
	           );
	       }
	   
	       render() {
	           var {path, onChange, ...rest} = this.props;
	           let {node, key: propName} = path();
	           return (
	               <Spinner {...rest} value={node[propName]} onChange={val=> {
	                   node.a(propName).set = val;
	                   if (onChange) onChange(val);
	               }}/>
	           );
	       }
	   }*/

				/***/
			},
			/* 40 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.Switch = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _reactVextensions = __webpack_require__(4);

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof3(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var Switch = exports.Switch = function (_BaseComponent) {
					_inherits(Switch, _BaseComponent);

					function Switch() {
						_classCallCheck(this, Switch);

						return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
					}

					_createClass(Switch, [{
						key: "render",
						value: function render() {
							var _props = this.props,
							    preferLater = _props.preferLater,
							    children = _props.children;

							var existentChildren = children.filter(function (a) {
								return !!a;
							});
							return preferLater ? existentChildren[existentChildren.length - 1] : existentChildren[0];
						}
					}]);

					return Switch;
				}(_reactVextensions.BaseComponent);

				Switch.defaultProps = { preferLater: true };

				/***/
			},
			/* 41 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.TextArea_AutoSize = exports.TextArea = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactVextensions = __webpack_require__(4);

				var _reactTextareaAutosize = __webpack_require__(42);

				var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof3(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var __rest = undefined && undefined.__rest || function (s, e) {
					var t = {};
					for (var p in s) {
						if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
					}if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
						if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
					}return t;
				};

				var styles = {
					root: {
						margin: 0,
						/*border: "1px solid #A9A9A9",*/
						padding: "3 5",
						border: "none",
						//background: "url(/Main/Packages/Images/Tiling/Menu/Menu.png)",
						//color: "#888",
						cursor: "text",
						resize: "none",
						display: "inline-block",
						boxSizing: "border-box",
						whiteSpace: "pre",
						wordWrap: "normal",
						width: "100%"
					},
					root_disabled: {
						/*background: "white",*/
						opacity: .7,
						cursor: "default"
					}
				};

				var TextArea = exports.TextArea = function (_BaseComponent) {
					_inherits(TextArea, _BaseComponent);

					function TextArea() {
						_classCallCheck(this, TextArea);

						return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
					}

					_createClass(TextArea, [{
						key: "render",
						value: function render() {
							var _this2 = this;

							var _a = this.props,
							    value = _a.value,
							    defaultValue = _a.defaultValue,
							    editable = _a.editable,
							    className = _a.className,
							    style = _a.style,
							    _onChange = _a.onChange,
							    delayChangeTillDefocus = _a.delayChangeTillDefocus,
							    rest = __rest(_a, ["value", "defaultValue", "editable", "className", "style", "onChange", "delayChangeTillDefocus"]);var editedValue = this.state.editedValue;
							// if defaultValue is not specified, assume we're using value; then, if we see value is null, set to "" instead, so it clears any stale content

							if (defaultValue === undefined && value == null) value = "";
							return _react2.default.createElement("textarea", Object.assign({}, rest, { ref: "root", readOnly: !editable, className: "simpleText selectable " + className, style: E(styles.root, style), value: editedValue != null ? editedValue : value, defaultValue: defaultValue, onChange: function onChange(e) {
									var newVal = e.target.value;
									if (delayChangeTillDefocus) {
										_this2.SetState({ editedValue: newVal });
									} else {
										_onChange(newVal, e);
										_this2.SetState({ editedValue: null });
									}
								}, onBlur: function onBlur(e) {
									var newVal = e.target["value"];
									if (delayChangeTillDefocus && _onChange) {
										_onChange(newVal, e);
										_this2.SetState({ editedValue: null });
									}
								} }));
						}
					}]);

					return TextArea;
				}(_reactVextensions.BaseComponent);

				TextArea.defaultProps = {
					editable: true
				};

				var TextArea_AutoSize = exports.TextArea_AutoSize = function (_BaseComponent2) {
					_inherits(TextArea_AutoSize, _BaseComponent2);

					function TextArea_AutoSize() {
						_classCallCheck(this, TextArea_AutoSize);

						return _possibleConstructorReturn(this, (TextArea_AutoSize.__proto__ || Object.getPrototypeOf(TextArea_AutoSize)).apply(this, arguments));
					}

					_createClass(TextArea_AutoSize, [{
						key: "render",
						value: function render() {
							var _this4 = this;

							var _a = this.props,
							    enabled = _a.enabled,
							    style = _a.style,
							    _onChange2 = _a.onChange,
							    rest = __rest(_a, ["enabled", "style", "onChange"]);
							return _react2.default.createElement(_reactTextareaAutosize2.default, Object.assign({}, rest, { ref: "root", disabled: enabled == false, style: E({ resize: "none" }, style), onChange: function onChange(e) {
									return _onChange2(_this4.refs.root.value);
								} }));
						}
					}]);

					return TextArea_AutoSize;
				}(_reactVextensions.BaseComponent);

				/***/
			},
			/* 42 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					'use strict';

					function _interopDefault(ex) {
						return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof3(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
					}

					var React = _interopDefault(__webpack_require__(3));
					var PropTypes = _interopDefault(__webpack_require__(43));

					function _extends() {
						_extends = Object.assign || function (target) {
							for (var i = 1; i < arguments.length; i++) {
								var source = arguments[i];

								for (var key in source) {
									if (Object.prototype.hasOwnProperty.call(source, key)) {
										target[key] = source[key];
									}
								}
							}

							return target;
						};

						return _extends.apply(this, arguments);
					}

					function _inheritsLoose(subClass, superClass) {
						subClass.prototype = Object.create(superClass.prototype);
						subClass.prototype.constructor = subClass;
						subClass.__proto__ = superClass;
					}

					function _objectWithoutProperties(source, excluded) {
						if (source == null) return {};
						var target = {};
						var sourceKeys = Object.keys(source);
						var key, i;

						for (i = 0; i < sourceKeys.length; i++) {
							key = sourceKeys[i];
							if (excluded.indexOf(key) >= 0) continue;
							target[key] = source[key];
						}

						if (Object.getOwnPropertySymbols) {
							var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

							for (i = 0; i < sourceSymbolKeys.length; i++) {
								key = sourceSymbolKeys[i];
								if (excluded.indexOf(key) >= 0) continue;
								if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
								target[key] = source[key];
							}
						}

						return target;
					}

					var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

					var isIE = isBrowser ? !!document.documentElement.currentStyle : false;
					var hiddenTextarea = isBrowser && document.createElement('textarea');
					var HIDDEN_TEXTAREA_STYLE = {
						'min-height': '0',
						'max-height': 'none',
						height: '0',
						visibility: 'hidden',
						overflow: 'hidden',
						position: 'absolute',
						'z-index': '-1000',
						top: '0',
						right: '0'
					};
					var SIZING_STYLE = ['letter-spacing', 'line-height', 'font-family', 'font-weight', 'font-size', 'font-style', 'tab-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'box-sizing'];
					var computedStyleCache = {};
					function calculateNodeHeight(uiTextNode, uid, useCache, minRows, maxRows) {
						if (useCache === void 0) {
							useCache = false;
						}

						if (minRows === void 0) {
							minRows = null;
						}

						if (maxRows === void 0) {
							maxRows = null;
						}

						if (hiddenTextarea.parentNode === null) {
							document.body.appendChild(hiddenTextarea);
						} // Copy all CSS properties that have an impact on the height of the content in
						// the textbox


						var nodeStyling = calculateNodeStyling(uiTextNode, uid, useCache);

						if (nodeStyling === null) {
							return null;
						}

						var paddingSize = nodeStyling.paddingSize,
						    borderSize = nodeStyling.borderSize,
						    boxSizing = nodeStyling.boxSizing,
						    sizingStyle = nodeStyling.sizingStyle; // Need to have the overflow attribute to hide the scrollbar otherwise
						// text-lines will not calculated properly as the shadow will technically be
						// narrower for content

						Object.keys(sizingStyle).forEach(function (key) {
							hiddenTextarea.style[key] = sizingStyle[key];
						});
						Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {
							hiddenTextarea.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
						});
						hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || 'x';
						var minHeight = -Infinity;
						var maxHeight = Infinity;
						var height = hiddenTextarea.scrollHeight;

						if (boxSizing === 'border-box') {
							// border-box: add border, since height = content + padding + border
							height = height + borderSize;
						} else if (boxSizing === 'content-box') {
							// remove padding, since height = content
							height = height - paddingSize;
						} // measure height of a textarea with a single row


						hiddenTextarea.value = 'x';
						var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

						if (minRows !== null || maxRows !== null) {
							if (minRows !== null) {
								minHeight = singleRowHeight * minRows;

								if (boxSizing === 'border-box') {
									minHeight = minHeight + paddingSize + borderSize;
								}

								height = Math.max(minHeight, height);
							}

							if (maxRows !== null) {
								maxHeight = singleRowHeight * maxRows;

								if (boxSizing === 'border-box') {
									maxHeight = maxHeight + paddingSize + borderSize;
								}

								height = Math.min(maxHeight, height);
							}
						}

						var rowCount = Math.floor(height / singleRowHeight);
						return {
							height: height,
							minHeight: minHeight,
							maxHeight: maxHeight,
							rowCount: rowCount
						};
					}

					function calculateNodeStyling(node, uid, useCache) {
						if (useCache === void 0) {
							useCache = false;
						}

						if (useCache && computedStyleCache[uid]) {
							return computedStyleCache[uid];
						}

						var style = window.getComputedStyle(node);

						if (style === null) {
							return null;
						}

						var sizingStyle = SIZING_STYLE.reduce(function (obj, name) {
							obj[name] = style.getPropertyValue(name);
							return obj;
						}, {});
						var boxSizing = sizingStyle['box-sizing']; // IE (Edge has already correct behaviour) returns content width as computed width
						// so we need to add manually padding and border widths

						if (isIE && boxSizing === 'border-box') {
							sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(style['border-right-width']) + parseFloat(style['border-left-width']) + parseFloat(style['padding-right']) + parseFloat(style['padding-left']) + 'px';
						}

						var paddingSize = parseFloat(sizingStyle['padding-bottom']) + parseFloat(sizingStyle['padding-top']);
						var borderSize = parseFloat(sizingStyle['border-bottom-width']) + parseFloat(sizingStyle['border-top-width']);
						var nodeInfo = {
							sizingStyle: sizingStyle,
							paddingSize: paddingSize,
							borderSize: borderSize,
							boxSizing: boxSizing
						};

						if (useCache) {
							computedStyleCache[uid] = nodeInfo;
						}

						return nodeInfo;
					}

					var purgeCache = function purgeCache(uid) {
						return delete computedStyleCache[uid];
					};

					function autoInc(seed) {
						if (seed === void 0) {
							seed = 0;
						}

						return function () {
							return ++seed;
						};
					}

					var uid = autoInc();

					/**
	     * <TextareaAutosize />
	     */
					var noop = function noop() {}; // IE11 has a problem with eval source maps, can be reproduced with:
					// eval('"use strict"; var onNextFrame = window.cancelAnimationFrame; onNextFrame(4);')
					// so we bind window as context in dev modes


					var _ref = isBrowser && window.requestAnimationFrame ? process.env.NODE_ENV !== 'development' ? [window.requestAnimationFrame, window.cancelAnimationFrame] : [window.requestAnimationFrame.bind(window), window.cancelAnimationFrame.bind(window)] : [setTimeout, clearTimeout];
					var onNextFrame = _ref[0];
					var clearNextFrameAction = _ref[1];

					var TextareaAutosize =
					/*#__PURE__*/
					function (_React$Component) {
						_inheritsLoose(TextareaAutosize, _React$Component);

						function TextareaAutosize(props) {
							var _this;

							_this = _React$Component.call(this, props) || this;
							_this._resizeLock = false;

							_this._onRootDOMNode = function (node) {
								_this._rootDOMNode = node;

								if (_this.props.inputRef) {
									_this.props.inputRef(node);
								}
							};

							_this._onChange = function (event) {
								if (!_this._controlled) {
									_this._resizeComponent();
								}

								_this.props.onChange(event);
							};

							_this._resizeComponent = function (callback) {
								if (callback === void 0) {
									callback = noop;
								}

								if (typeof _this._rootDOMNode === 'undefined') {
									callback();
									return;
								}

								var nodeHeight = calculateNodeHeight(_this._rootDOMNode, _this._uid, _this.props.useCacheForDOMMeasurements, _this.props.minRows, _this.props.maxRows);

								if (nodeHeight === null) {
									callback();
									return;
								}

								var height = nodeHeight.height,
								    minHeight = nodeHeight.minHeight,
								    maxHeight = nodeHeight.maxHeight,
								    rowCount = nodeHeight.rowCount;
								_this.rowCount = rowCount;

								if (_this.state.height !== height || _this.state.minHeight !== minHeight || _this.state.maxHeight !== maxHeight) {
									_this.setState({
										height: height,
										minHeight: minHeight,
										maxHeight: maxHeight
									}, callback);

									return;
								}

								callback();
							};

							_this.state = {
								height: props.style && props.style.height || 0,
								minHeight: -Infinity,
								maxHeight: Infinity
							};
							_this._uid = uid();
							_this._controlled = typeof props.value === 'string';
							return _this;
						}

						var _proto = TextareaAutosize.prototype;

						_proto.render = function render() {
							var _props = this.props,
							    _minRows = _props.minRows,
							    _maxRows = _props.maxRows,
							    _onHeightChange = _props.onHeightChange,
							    _useCacheForDOMMeasurements = _props.useCacheForDOMMeasurements,
							    _inputRef = _props.inputRef,
							    props = _objectWithoutProperties(_props, ["minRows", "maxRows", "onHeightChange", "useCacheForDOMMeasurements", "inputRef"]);
							props.style = _extends({}, props.style, {
								height: this.state.height
							});
							var maxHeight = Math.max(props.style.maxHeight || Infinity, this.state.maxHeight);

							if (maxHeight < this.state.height) {
								props.style.overflow = 'hidden';
							}

							return React.createElement("textarea", _extends({}, props, {
								onChange: this._onChange,
								ref: this._onRootDOMNode
							}));
						};

						_proto.componentDidMount = function componentDidMount() {
							var _this2 = this;

							this._resizeComponent(); // Working around Firefox bug which runs resize listeners even when other JS is running at the same moment
							// causing competing rerenders (due to setState in the listener) in React.
							// More can be found here - facebook/react#6324


							this._resizeListener = function () {
								if (_this2._resizeLock) {
									return;
								}

								_this2._resizeLock = true;

								_this2._resizeComponent(function () {
									return _this2._resizeLock = false;
								});
							};

							window.addEventListener('resize', this._resizeListener);
						};

						_proto.componentWillReceiveProps = function componentWillReceiveProps() {
							var _this3 = this;

							this._clearNextFrame();

							this._onNextFrameActionId = onNextFrame(function () {
								return _this3._resizeComponent();
							});
						};

						_proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
							if (this.state.height !== prevState.height) {
								this.props.onHeightChange(this.state.height, this);
							}
						};

						_proto.componentWillUnmount = function componentWillUnmount() {
							this._clearNextFrame();

							window.removeEventListener('resize', this._resizeListener);
							purgeCache(this._uid);
						};

						_proto._clearNextFrame = function _clearNextFrame() {
							clearNextFrameAction(this._onNextFrameActionId);
						};

						return TextareaAutosize;
					}(React.Component);

					TextareaAutosize.propTypes = {
						value: PropTypes.string,
						onChange: PropTypes.func,
						onHeightChange: PropTypes.func,
						useCacheForDOMMeasurements: PropTypes.bool,
						minRows: PropTypes.number,
						maxRows: PropTypes.number,
						inputRef: PropTypes.func
					};
					TextareaAutosize.defaultProps = {
						onChange: noop,
						onHeightChange: noop,
						useCacheForDOMMeasurements: false
					};

					module.exports = TextareaAutosize;

					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 43 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    *
	    * This source code is licensed under the MIT license found in the
	    * LICENSE file in the root directory of this source tree.
	    */

					if (process.env.NODE_ENV !== 'production') {
						var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

						var isValidElement = function isValidElement(object) {
							return (typeof object === 'undefined' ? 'undefined' : _typeof3(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
						};

						// By explicitly using `prop-types` you are opting into new development behavior.
						// http://fb.me/prop-types-in-prod
						var throwOnDirectAccess = true;
						module.exports = __webpack_require__(44)(isValidElement, throwOnDirectAccess);
					} else {
						// By explicitly using `prop-types` you are opting into new production behavior.
						// http://fb.me/prop-types-in-prod
						module.exports = __webpack_require__(51)();
					}

					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 44 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    *
	    * This source code is licensed under the MIT license found in the
	    * LICENSE file in the root directory of this source tree.
	    */

					'use strict';

					var emptyFunction = __webpack_require__(45);
					var invariant = __webpack_require__(46);
					var warning = __webpack_require__(47);
					var assign = __webpack_require__(48);

					var ReactPropTypesSecret = __webpack_require__(49);
					var checkPropTypes = __webpack_require__(50);

					module.exports = function (isValidElement, throwOnDirectAccess) {
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
							exact: createStrictShapeTypeChecker
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
										invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
									} else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
										// Old behavior for people using React.PropTypes
										var cacheKey = componentName + ':' + propName;
										if (!manualPropTypeCallCache[cacheKey] &&
										// Avoid spamming the console because they are often not actionable except for lib authors
										manualPropTypeWarningCount < 3) {
											warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
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
							return createChainableTypeChecker(emptyFunction.thatReturnsNull);
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
								process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
								return emptyFunction.thatReturnsNull;
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
								process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
								return emptyFunction.thatReturnsNull;
							}

							for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
								var checker = arrayOfTypeCheckers[i];
								if (typeof checker !== 'function') {
									warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
									return emptyFunction.thatReturnsNull;
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
										return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
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
							switch (typeof propValue === 'undefined' ? 'undefined' : _typeof3(propValue)) {
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
							var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof3(propValue);
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

					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 45 */
			/***/function (module, exports) {

				"use strict";

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    *
	    * This source code is licensed under the MIT license found in the
	    * LICENSE file in the root directory of this source tree.
	    *
	    * 
	    */

				function makeEmptyFunction(arg) {
					return function () {
						return arg;
					};
				}

				/**
	    * This function accepts and discards inputs; it has no side effects. This is
	    * primarily useful idiomatically for overridable function endpoints which
	    * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	    */
				var emptyFunction = function emptyFunction() {};

				emptyFunction.thatReturns = makeEmptyFunction;
				emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
				emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
				emptyFunction.thatReturnsNull = makeEmptyFunction(null);
				emptyFunction.thatReturnsThis = function () {
					return this;
				};
				emptyFunction.thatReturnsArgument = function (arg) {
					return arg;
				};

				module.exports = emptyFunction;

				/***/
			},
			/* 46 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    *
	    * This source code is licensed under the MIT license found in the
	    * LICENSE file in the root directory of this source tree.
	    *
	    */

					'use strict';

					/**
	     * Use invariant() to assert state which your program assumes to be true.
	     *
	     * Provide sprintf-style format (only %s is supported) and arguments
	     * to provide information about what broke and what you were
	     * expecting.
	     *
	     * The invariant message will be stripped in production, but the invariant
	     * will remain to ensure logic does not differ in production.
	     */

					var validateFormat = function validateFormat(format) {};

					if (process.env.NODE_ENV !== 'production') {
						validateFormat = function validateFormat(format) {
							if (format === undefined) {
								throw new Error('invariant requires an error message argument');
							}
						};
					}

					function invariant(condition, format, a, b, c, d, e, f) {
						validateFormat(format);

						if (!condition) {
							var error;
							if (format === undefined) {
								error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
							} else {
								var args = [a, b, c, d, e, f];
								var argIndex = 0;
								error = new Error(format.replace(/%s/g, function () {
									return args[argIndex++];
								}));
								error.name = 'Invariant Violation';
							}

							error.framesToPop = 1; // we don't care about invariant's own frame
							throw error;
						}
					}

					module.exports = invariant;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 47 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright (c) 2014-present, Facebook, Inc.
	    *
	    * This source code is licensed under the MIT license found in the
	    * LICENSE file in the root directory of this source tree.
	    *
	    */

					'use strict';

					var emptyFunction = __webpack_require__(45);

					/**
	     * Similar to invariant but only logs a warning if the condition is not met.
	     * This can be used to log issues in development environments in critical
	     * paths. Removing the logging code for production environments will keep the
	     * same logic and follow the same code paths.
	     */

					var warning = emptyFunction;

					if (process.env.NODE_ENV !== 'production') {
						var printWarning = function printWarning(format) {
							for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
								args[_key - 1] = arguments[_key];
							}

							var argIndex = 0;
							var message = 'Warning: ' + format.replace(/%s/g, function () {
								return args[argIndex++];
							});
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

						warning = function warning(condition, format) {
							if (format === undefined) {
								throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
							}

							if (format.indexOf('Failed Composite propType: ') === 0) {
								return; // Ignore CompositeComponent proptype check.
							}

							if (!condition) {
								for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
									args[_key2 - 2] = arguments[_key2];
								}

								printWarning.apply(undefined, [format].concat(args));
							}
						};
					}

					module.exports = warning;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 48 */
			/***/function (module, exports) {

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
						var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
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
						if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
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

				/***/
			},
			/* 49 */
			/***/function (module, exports) {

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    *
	    * This source code is licensed under the MIT license found in the
	    * LICENSE file in the root directory of this source tree.
	    */

				'use strict';

				var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

				module.exports = ReactPropTypesSecret;

				/***/
			},
			/* 50 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    *
	    * This source code is licensed under the MIT license found in the
	    * LICENSE file in the root directory of this source tree.
	    */

					'use strict';

					if (process.env.NODE_ENV !== 'production') {
						var invariant = __webpack_require__(46);
						var warning = __webpack_require__(47);
						var ReactPropTypesSecret = __webpack_require__(49);
						var loggedTypeFailures = {};
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
										invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof3(typeSpecs[typeSpecName]));
										error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
									} catch (ex) {
										error = ex;
									}
									warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof3(error));
									if (error instanceof Error && !(error.message in loggedTypeFailures)) {
										// Only monitor this failure once because there tends to be a lot of the
										// same error.
										loggedTypeFailures[error.message] = true;

										var stack = getStack ? getStack() : '';

										warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
									}
								}
							}
						}
					}

					module.exports = checkPropTypes;

					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(9));

				/***/
			},
			/* 51 */
			/***/function (module, exports, __webpack_require__) {

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    *
	    * This source code is licensed under the MIT license found in the
	    * LICENSE file in the root directory of this source tree.
	    */

				'use strict';

				var emptyFunction = __webpack_require__(45);
				var invariant = __webpack_require__(46);
				var ReactPropTypesSecret = __webpack_require__(49);

				module.exports = function () {
					function shim(props, propName, componentName, location, propFullName, secret) {
						if (secret === ReactPropTypesSecret) {
							// It is still safe when called from React.
							return;
						}
						invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
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

				/***/
			},
			/* 52 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.TextInput = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
				};

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactVextensions = __webpack_require__(4);

				var _keycode = __webpack_require__(53);

				var keycode = _interopRequireWildcard(_keycode);

				function _interopRequireWildcard(obj) {
					if (obj && obj.__esModule) {
						return obj;
					} else {
						var newObj = {};if (obj != null) {
							for (var key in obj) {
								if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
							}
						}newObj.default = obj;return newObj;
					}
				}

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof3(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
					var c = arguments.length,
					    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
					    d;
					if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
						if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
					}return c > 3 && r && Object.defineProperty(target, key, r), r;
				};
				var __rest = undefined && undefined.__rest || function (s, e) {
					var t = {};
					for (var p in s) {
						if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
					}if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
						if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
					}return t;
				};

				var TextInput = function (_BaseComponent) {
					_inherits(TextInput, _BaseComponent);

					function TextInput() {
						_classCallCheck(this, TextInput);

						return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
					}

					_createClass(TextInput, [{
						key: "render",

						/*ComponentWillReceiveProps(props) {
	         // if value changing, and "delayChangeTillDefocus" is not enabled
	         if (!props.delayChangeTillDefocus && props.value != this.props.value) {
	             this.SetState({editedValue: null});
	         }
	     }*/
						value: function render() {
							var _this2 = this;

							var _a = this.props,
							    value = _a.value,
							    enabled = _a.enabled,
							    _onChange = _a.onChange,
							    _onKeyDown = _a.onKeyDown,
							    delayChangeTillDefocus = _a.delayChangeTillDefocus,
							    useEscape = _a.useEscape,
							    style = _a.style,
							    rest = __rest(_a, ["value", "enabled", "onChange", "onKeyDown", "delayChangeTillDefocus", "useEscape", "style"]);var editedValue = this.state.editedValue;

							return _react2.default.createElement("input", Object.assign({}, rest, { ref: "root", disabled: enabled == false, style: E({ color: "black" }, style), value: editedValue != null ? editedValue : value || "", onChange: function onChange(e) {
									var newVal = e.target.value;
									if (delayChangeTillDefocus) {
										_this2.SetState({ editedValue: newVal });
									} else {
										_onChange(newVal, e);
										_this2.SetState({ editedValue: null });
									}
								}, onBlur: function onBlur(e) {
									var newVal = e.target["value"];
									if (delayChangeTillDefocus && _onChange) {
										_onChange(newVal, e);
										_this2.SetState({ editedValue: null });
									}
								}, onKeyDown: function onKeyDown(e) {
									if (useEscape && e.keyCode == keycode.codes.esc) return void _this2.SetState({ editedValue: null });
									if (_onKeyDown) return _onKeyDown(e);
								} }));
						}
					}, {
						key: "GetValue",
						value: function GetValue() {
							return this.refs.root.value;
						}
					}]);

					return TextInput;
				}(_reactVextensions.BaseComponent);
				TextInput.defaultProps = { type: "text" };
				exports.TextInput = TextInput = __decorate([_reactVextensions.ApplyBasicStyles], TextInput);
				exports.TextInput = TextInput;
				/*export class TextInput_Auto extends BaseComponent<
	           {style?, delayChangeTillDefocus?,
	               path: ()=>any, onChange?: (val: string)=>void}, {}> {
	       ComponentWillMountOrReceiveProps(props) {
	           var {path} = props;
	           let {node, key: propName} = path();
	           this.AddChangeListeners(node,
	               (propName + "_PostSet").Func(this.Update),
	           );
	       }
	   
	       render() {
	           var {path, onChange, ...rest} = this.props;
	           let {node, key: propName} = path();
	           return (
	               <TextInput {...rest} value={node[propName]} onChange={val=> {
	                   node.a(propName).set = val;
	                   if (onChange) onChange(val);
	               }}/>
	           );
	       }
	   }*/

				/***/
			},
			/* 53 */
			/***/function (module, exports) {

				// Source: http://jsfiddle.net/vWx8V/
				// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

				/**
	    * Conenience method returns corresponding value for given keyName or keyCode.
	    *
	    * @param {Mixed} keyCode {Number} or keyName {String}
	    * @return {Mixed}
	    * @api public
	    */

				exports = module.exports = function (searchInput) {
					// Keyboard Events
					if (searchInput && 'object' === (typeof searchInput === 'undefined' ? 'undefined' : _typeof3(searchInput))) {
						var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
						if (hasKeyCode) searchInput = hasKeyCode;
					}

					// Numbers
					if ('number' === typeof searchInput) return names[searchInput];

					// Everything else (cast to string)
					var search = String(searchInput);

					// check codes
					var foundNamedKey = codes[search.toLowerCase()];
					if (foundNamedKey) return foundNamedKey;

					// check aliases
					var foundNamedKey = aliases[search.toLowerCase()];
					if (foundNamedKey) return foundNamedKey;

					// weird character?
					if (search.length === 1) return search.charCodeAt(0);

					return undefined;
				};

				/**
	    * Get by name
	    *
	    *   exports.code['enter'] // => 13
	    */

				var codes = exports.code = exports.codes = {
					'backspace': 8,
					'tab': 9,
					'enter': 13,
					'shift': 16,
					'ctrl': 17,
					'alt': 18,
					'pause/break': 19,
					'caps lock': 20,
					'esc': 27,
					'space': 32,
					'page up': 33,
					'page down': 34,
					'end': 35,
					'home': 36,
					'left': 37,
					'up': 38,
					'right': 39,
					'down': 40,
					'insert': 45,
					'delete': 46,
					'command': 91,
					'left command': 91,
					'right command': 93,
					'numpad *': 106,
					'numpad +': 107,
					'numpad -': 109,
					'numpad .': 110,
					'numpad /': 111,
					'num lock': 144,
					'scroll lock': 145,
					'my computer': 182,
					'my calculator': 183,
					';': 186,
					'=': 187,
					',': 188,
					'-': 189,
					'.': 190,
					'/': 191,
					'`': 192,
					'[': 219,
					'\\': 220,
					']': 221,
					"'": 222

					// Helper aliases

				};var aliases = exports.aliases = {
					'windows': 91,
					'⇧': 16,
					'⌥': 18,
					'⌃': 17,
					'⌘': 91,
					'ctl': 17,
					'control': 17,
					'option': 18,
					'pause': 19,
					'break': 19,
					'caps': 20,
					'return': 13,
					'escape': 27,
					'spc': 32,
					'pgup': 33,
					'pgdn': 34,
					'ins': 45,
					'del': 46,
					'cmd': 91

					/*!
	     * Programatically add the following
	     */

					// lower case chars
				};for (i = 97; i < 123; i++) {
					codes[String.fromCharCode(i)] = i - 32;
				} // numbers
				for (var i = 48; i < 58; i++) {
					codes[i - 48] = i;
				} // function keys
				for (i = 1; i < 13; i++) {
					codes['f' + i] = i + 111;
				} // numpad keys
				for (i = 0; i < 10; i++) {
					codes['numpad ' + i] = i + 96;
				} /**
	      * Get by code
	      *
	      *   exports.name[13] // => 'Enter'
	      */

				var names = exports.names = exports.title = {}; // title for backward compat

				// Create reverse mapping
				for (i in codes) {
					names[codes[i]] = i;
				} // Add aliases
				for (var alias in aliases) {
					codes[alias] = aliases[alias];
				}

				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(53)(module)))

/***/ }),
/* 63 */
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

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ })
/******/ ])
});
;