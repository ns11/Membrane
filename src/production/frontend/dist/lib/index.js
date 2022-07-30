/** @format */
// Copyright 2022 Elijah Bodden
// Use of this source code is governed by an MIT-style
// license that can be found in the LICENSE file or at
// https://opensource.org/licenses/MIT.
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CONFIG = {};
var allICEServers = [{
  urls: "stun:stun.1.google.com:19302"
}, {
  urls: "turn:openrelay.metered.ca:80",
  username: "openrelayproject",
  credential: "openrelayproject"
}];
var STUNOnly = [{
  urls: "stun:stun.1.google.com:19302"
}];
/*
	! NB !
	Do not, under any circumstances, and at penalty of network integrity, modify the following: 
		- rtc\Icepresets\binaryType
		- communication\specHiddenAliasAttributes\*
		- constants\radix36Charset
		- rtc\communication\hiddenAlias
*/

var defaultConfig = {
  rtc: {
    ICEpresets: {
      iceServers: [{
        urls: "stun:stun.1.google.com:19302"
      }, {
        urls: "turn:openrelay.metered.ca:80",
        username: "openrelayproject",
        credential: "openrelayproject"
      }],
      iceCandidatePoolSize: 255
    },
    ICEGatheringMaxLatency: 10000,
    defaultChannelLabel: "channel",
    channelOptions: {
      negotiated: true,
      id: 0,
      ordered: true
    },
    channelID: undefined,
    binaryType: "arraybuffer"
  },
  communication: {
    defaultUnknownPublicAlias: undefined,
    basicPropogationInterval: 100,
    publicAlias: "",
    specHiddenAliasAttributes: {
      len: 9
    },
    hiddenAlias: Math.random().toString(36).slice(2, 11),
    packageArgs: {
      consumable: {
        required: ["raw"],
        optional: []
      },
      gossip: {
        required: ["type", "block"],
        optional: ["!*"]
      },
      mapFetch: {
        required: [],
        optional: []
      },
      mapReturn: {
        required: ["map"],
        optional: []
      },
      routeImperative: {
        required: ["SDP", "sender", "destination", "routeID"],
        optional: ["desiredPermissions", "!*"]
      },
      invokerIntroduction: {
        required: ["hiddenAlias", "isOriented"],
        optional: ["publicAlias"]
      },
      reciprocalAlignment: {
        required: ["hiddenAlias"],
        optional: ["publicAlias", "map"]
      },
      routeInaccessible: {
        required: ["routeID", "pointOfFailure", "destination"],
        optional: ["!"]
      },
      routeRejected: {
        required: ["destination", "routeID"],
        optional: ["!*"]
      },
      routeAccepted: {
        required: ["SDP", "destination", "routeID"],
        optional: ["!*"]
      },
      permissionEscalationRequest: {
        required: ["level"],
        optional: ["!*"]
      },
      permissionEscalationResponse: {
        required: ["status"],
        optional: ["!*"]
      },
      forcefulDeauth: {
        required: [],
        optional: ["!*"]
      }
    },
    allowNonStandardParsers: false,
    mapImportTimeout: 10000,
    moderateMapInstabilityTolerance: true,
    arbitraryPeerRouteTimeout: 100000000,
    routeAcceptHeuristic: function () {
      var _routeAcceptHeuristic = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pkg) {
        var _hiddenAliasLookup$pk, accepted;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(pkg.desiredPermissions === "advanced")) {
                  _context.next = 12;
                  break;
                }

                eventStream.log("system", "Peer authentication requested by ".concat(CONFIG.UI.renderUnfamiliarPublicAliases ? (_hiddenAliasLookup$pk = hiddenAliasLookup[pkg.sender]) !== null && _hiddenAliasLookup$pk !== void 0 ? _hiddenAliasLookup$pk : pkg.sender : pkg.sender), "transient", ["align-center", "system-message-card-route-pending", "message-card-slim"], pkg.sender);
                accepted = true;
                _context.prev = 3;
                _context.next = 6;
                return eventHandler.acquireExpectedDispatch("authenticationAuthorized|".concat(pkg.sender), CONFIG.communication.arbitraryPeerRouteTimeout);

              case 6:
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);
                accepted = false;

              case 11:
                return _context.abrupt("return", accepted);

              case 12:
                return _context.abrupt("return", true);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 8]]);
      }));

      function routeAcceptHeuristic(_x) {
        return _routeAcceptHeuristic.apply(this, arguments);
      }

      return routeAcceptHeuristic;
    }()
  },
  constants: {
    defaultPropagationIterMod: 1,
    radix36Charset: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    defaultEventHandlingMechanismTimeout: 100000,
    violationWeightPenalties: {
      pointOfRouteFailure: 10,
      acquaintedInitAttempt: 10,
      invalidMessage: 15,
      invalidAliasInRoutingMap: 20,
      failedGossip: 25,
      genericUncaughtError: 35,
      initSequenceError: 100,
      invalidSDP: 100
    },
    configLoadFunction: function () {
      var _configLoadFunction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _JSON$parse, _window$localStorage$, _window$localStorage$2, _window$localStorage$3;

        var _document$querySelect2;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                window.addEventListener("DOMContentLoaded", function () {
                  return eventHandler.dispatch("DOMFunctional");
                });
                _context3.next = 3;
                return eventHandler.acquireExpectedDispatch("DOMFunctional");

              case 3:
                _context3.next = 5;
                return fillDefaults();

              case 5:
                if (!(!((_JSON$parse = JSON.parse((_window$localStorage$ = window.localStorage.config) !== null && _window$localStorage$ !== void 0 ? _window$localStorage$ : "{}")) !== null && _JSON$parse !== void 0 && _JSON$parse["communication.publicAlias"]) || !JSON.parse((_window$localStorage$2 = window.localStorage.config) !== null && _window$localStorage$2 !== void 0 ? _window$localStorage$2 : "{}").rememberMe)) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 8;
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  var _document$querySelect;

                  var contentDisabler, selectedHiddenAlias;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          effectiveFirstVisit = true;
                          contentDisabler = document.createElement("iframe");
                          contentDisabler.style.position = "absolute";
                          contentDisabler.style.left = contentDisabler.style.right = contentDisabler.style.top = contentDisabler.style.bottom = "0px";
                          contentDisabler.style.width = contentDisabler.style.height = "100%";
                          contentDisabler.style.border = "0px";
                          contentDisabler.style.zIndex = 100000;
                          document.querySelector("#init-blur-wrapper").style.visibility = "visible";
                          document.querySelector("#init-blur-wrapper").style.filter = "blur(3px) saturate(90%) brightness(90%)";
                          document.body.appendChild(contentDisabler);
                          _context2.next = 12;
                          return hiddenAliasPromptMenu();

                        case 12:
                          selectedHiddenAlias = _context2.sent;

                          (_document$querySelect = document.querySelector("#init-blur-wrapper")).replaceWith.apply(_document$querySelect, _toConsumableArray(document.querySelector("#init-blur-wrapper").childNodes));

                          document.body.removeChild(contentDisabler);
                          exportToLS("communication.publicAlias", selectedHiddenAlias);

                        case 16:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }))();

              case 8:
                _context3.next = 11;
                break;

              case 10:
                (_document$querySelect2 = document.querySelector("#init-blur-wrapper")).replaceWith.apply(_document$querySelect2, _toConsumableArray(document.querySelector("#init-blur-wrapper").childNodes));

              case 11:
                return _context3.abrupt("return", JSON.parse((_window$localStorage$3 = window.localStorage.config) !== null && _window$localStorage$3 !== void 0 ? _window$localStorage$3 : "{}"));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function configLoadFunction() {
        return _configLoadFunction.apply(this, arguments);
      }

      return configLoadFunction;
    }()
  },
  serverLink: {
    initBindURL: "ws://".concat(window.location.hostname, ":8777/bind?originatingSDP=*"),
    reconnectURL: "ws://".concat(window.location.hostname, "/reconnect"),
    reconnectInterval: 5000
  },
  UI: {
    renderUnfamiliarPublicAliases: true
  }
};
var effectiveFirstVisit = false;
var livePeers = {};
var authPeers = [];
var serverHardRestart;
var pubAliasLookup = {};
var hiddenAliasLookup = {};
var pubAliasUnparser = {};
var publicAliasTallies = {};
var initialReferenceLedger = {};
var HTMLEscape = document.createElement("textarea");
HTMLEscape.setAttribute("style", "visibility : hidden; left -10000px; position: fixed;");
var eventHandler;
var networkMap;
var gossipTransport;
var topologyTransport;
var routingTableTransport;

function addAuthPeer(peer) {
  if (typeof peer != "string") return;
  authPeers.push(peer);
  eventHandler.dispatch("authPeersUpdated", ["addition", peer]);
}

function deleteAuthPeer(peer) {
  if (authPeers.indexOf(peer) == -1) return;
  authPeers.splice(authPeers.indexOf(peer), 1);
  eventHandler.dispatch("authPeersUpdated", ["deletion", peer]);
}

function onAuthPeersUpdated(_x2) {
  return _onAuthPeersUpdated.apply(this, arguments);
}

function _onAuthPeersUpdated() {
  _onAuthPeersUpdated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53(callback) {
    return _regeneratorRuntime().wrap(function _callee53$(_context54) {
      while (1) {
        switch (_context54.prev = _context54.next) {
          case 0:
            eventHandler.onReceipt("authPeersUpdated", callback);

          case 1:
          case "end":
            return _context54.stop();
        }
      }
    }, _callee53);
  }));
  return _onAuthPeersUpdated.apply(this, arguments);
}

function deauthPeer(_x3, _x4) {
  return _deauthPeer.apply(this, arguments);
}

function _deauthPeer() {
  _deauthPeer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee54(peer, isPredicator) {
    return _regeneratorRuntime().wrap(function _callee54$(_context55) {
      while (1) {
        switch (_context55.prev = _context55.next) {
          case 0:
            if (authPeers.includes(peer)) {
              _context55.next = 2;
              break;
            }

            return _context55.abrupt("return");

          case 2:
            if (isPredicator) {
              livePeers[peer].transport.channel.standardSend("forcefulDeauth");
              deleteAuthPeer(peer);
            } else {
              deleteAuthPeer(peer);
              obviatePeerError(peer);
            }

          case 3:
          case "end":
            return _context55.stop();
        }
      }
    }, _callee54);
  }));
  return _deauthPeer.apply(this, arguments);
}

function loadConfig(_x5, _x6) {
  return _loadConfig.apply(this, arguments);
}

function _loadConfig() {
  _loadConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee55(defaultConfig, provisionFunction) {
    var provided, loadableConfig, i, referenceChain, deepestProperty, defaultPrefParent;
    return _regeneratorRuntime().wrap(function _callee55$(_context56) {
      while (1) {
        switch (_context56.prev = _context56.next) {
          case 0:
            checkForTypeErrors([{
              defaultConfig: defaultConfig
            }, {
              provisionFunction: provisionFunction
            }], [["object"], ["function", "undefined"]]);

            if (provisionFunction) {
              _context56.next = 4;
              break;
            }

            CONFIG = defaultConfig;
            return _context56.abrupt("return");

          case 4:
            if (!(provisionFunction.constructor.name === "AsyncFunction")) {
              _context56.next = 10;
              break;
            }

            _context56.next = 7;
            return provisionFunction();

          case 7:
            _context56.t0 = _context56.sent;
            _context56.next = 11;
            break;

          case 10:
            _context56.t0 = provisionFunction();

          case 11:
            provided = _context56.t0;
            checkForTypeErrors([{
              provided: provided
            }], [["object"]]);
            loadableConfig = defaultConfig;

            for (i in provided) {
              referenceChain = i.split(".");
              deepestProperty = referenceChain.slice(-1);
              defaultPrefParent = referenceChain.slice(0, -1).reduce(function (previous, current) {
                return previous[current];
              }, loadableConfig);

              if (_typeof(defaultPrefParent[deepestProperty]) === _typeof(provided[i])) {
                defaultPrefParent[deepestProperty] = provided[i];
              }
            }

            CONFIG = loadableConfig;

          case 16:
          case "end":
            return _context56.stop();
        }
      }
    }, _callee55);
  }));
  return _loadConfig.apply(this, arguments);
}

WebSocket.prototype.crudeSend = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(type, typeArgs) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            checkForTypeErrors([{
              type: type
            }, {
              typeArgs: typeArgs
            }], [["string"], ["object", "undefined"]]);
            _context4.t0 = type;
            _context4.next = _context4.t0 === "heartbeat" ? 4 : _context4.t0 === "reportNode" ? 6 : _context4.t0 === "returnSDP" ? 9 : _context4.t0 === "ignoreSDPRequest" ? 12 : 15;
            break;

          case 4:
            this.send(JSON.stringify(["heartbeat"]));
            return _context4.abrupt("break", 16);

          case 6:
            checkForTypeErrors([{
              "typeArgs.nodeID": typeArgs.nodeID
            }], [["string"]]);
            this.send(JSON.stringify(["reportNode", typeArgs.nodeID]));
            return _context4.abrupt("break", 16);

          case 9:
            checkForTypeErrors([{
              "typeArgs.SDP": typeArgs.SDP
            }, {
              "typeArgs.reciprocalID": typeArgs.reciprocalID
            }], [["string"], ["string"]]);
            this.send(JSON.stringify(["returnSDP", typeArgs.SDP, typeArgs.reciprocalID]));
            return _context4.abrupt("break", 16);

          case 12:
            checkForTypeErrors([{
              "typeArgs.reciprocalID": typeArgs.reciprocalID
            }], [["string"]]);
            this.send(JSON.stringify(["ignoreSDPRequest", typeArgs.reciprocalID]));
            return _context4.abrupt("break", 16);

          case 15:
            throw new Error("unable to communicate websocket message of type \"".concat(type, "\": no specified bundling method matches the criterion."));

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();

RTCDataChannel.prototype.standardSend = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(type, messageParams) {
    var packaged;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            checkForTypeErrors([{
              type: type
            }, {
              messageParams: messageParams
            }], [["string"], ["object", "undefined"]]);
            packaged = JSON.stringify(messageParams ? [type, messageParams] : [type]);
            this.send(CONFIG.rtc.binaryType === "arrayBuffer" ? new TextEncoder().encode(packaged) : packaged);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function (_x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}();

var eventHandlingMechanism = /*#__PURE__*/function () {
  function eventHandlingMechanism() {
    _classCallCheck(this, eventHandlingMechanism);

    this.handlerFrame = {};
    this.dispatchWatchers = {};
  }

  _createClass(eventHandlingMechanism, [{
    key: "onReceipt",
    value: function onReceipt(signalIdentifier, callback) {
      if (!(signalIdentifier in this.handlerFrame)) {
        this.handlerFrame[signalIdentifier] = [];
      }

      this.handlerFrame[signalIdentifier].push(callback);
    }
  }, {
    key: "dispatch",
    value: function dispatch(signalIdentifier, externalDetail) {
      var _this = this;

      if (this.handlerFrame[signalIdentifier]) {
        this.handlerFrame[signalIdentifier].forEach(function (method) {
          method(signalIdentifier, externalDetail, _this.handlerFrame[signalIdentifier]);
        });
      }

      if (this.dispatchWatchers[signalIdentifier]) {
        this.dispatchWatchers[signalIdentifier].forEach(function (watcher) {
          watcher.resolve({
            signalIdentifier: signalIdentifier,
            externalDetail: externalDetail
          });
        });
        delete this.dispatchWatchers[signalIdentifier];
      }
    }
  }, {
    key: "forceReject",
    value: function forceReject(signalIdentifier, reason) {
      if (this.dispatchWatchers[signalIdentifier]) {
        this.dispatchWatchers[signalIdentifier].forEach(function (watcher) {
          watcher.reject(reason);
        });
        delete this.dispatchWatchers[signalIdentifier];
      }
    }
  }, {
    key: "acquireExpectedDispatch",
    value: function () {
      var _acquireExpectedDispatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(dispatchIdentifier, timeout) {
        var rejectGeneratedPromise, resolveGeneratedPromise, index;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.dispatchWatchers[dispatchIdentifier] = this.dispatchWatchers[dispatchIdentifier] ? this.dispatchWatchers[dispatchIdentifier] : [];
                index = this.dispatchWatchers[dispatchIdentifier].push({
                  promise: new Promise(function (resolve, reject) {
                    var _ref7, _CONFIG2, _CONFIG2$constants;

                    var hasResolved = false;
                    var hasRejected = false;

                    resolveGeneratedPromise = /*#__PURE__*/function () {
                      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolution) {
                        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                if (!hasRejected) {
                                  _context6.next = 2;
                                  break;
                                }

                                return _context6.abrupt("return");

                              case 2:
                                resolve(resolution);
                                hasResolved = true;

                              case 4:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6);
                      }));

                      return function resolveGeneratedPromise(_x13) {
                        return _ref4.apply(this, arguments);
                      };
                    }();

                    rejectGeneratedPromise = /*#__PURE__*/function () {
                      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(rejection) {
                        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                if (!hasResolved) {
                                  _context7.next = 2;
                                  break;
                                }

                                return _context7.abrupt("return");

                              case 2:
                                reject(rejection);
                                hasRejected = true;

                              case 4:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7);
                      }));

                      return function rejectGeneratedPromise(_x14) {
                        return _ref5.apply(this, arguments);
                      };
                    }();

                    setTimeout(function () {
                      var _ref6, _CONFIG, _CONFIG$constants;

                      if (!hasResolved) reject("Dispatch listener promise for the identifier ".concat(dispatchIdentifier, " timed out after ").concat((_ref6 = timeout !== null && timeout !== void 0 ? timeout : (_CONFIG = CONFIG) === null || _CONFIG === void 0 ? void 0 : (_CONFIG$constants = _CONFIG.constants) === null || _CONFIG$constants === void 0 ? void 0 : _CONFIG$constants.defaultEventHandlingMechanismTimeout) !== null && _ref6 !== void 0 ? _ref6 : 100000, "ms"));
                    }, (_ref7 = timeout !== null && timeout !== void 0 ? timeout : (_CONFIG2 = CONFIG) === null || _CONFIG2 === void 0 ? void 0 : (_CONFIG2$constants = _CONFIG2.constants) === null || _CONFIG2$constants === void 0 ? void 0 : _CONFIG2$constants.defaultEventHandlingMechanismTimeout) !== null && _ref7 !== void 0 ? _ref7 : 100000);
                  }),
                  reject: rejectGeneratedPromise,
                  resolve: resolveGeneratedPromise
                }) - 1;
                _context8.next = 4;
                return this.dispatchWatchers[dispatchIdentifier][index].promise;

              case 4:
                return _context8.abrupt("return", _context8.sent);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function acquireExpectedDispatch(_x11, _x12) {
        return _acquireExpectedDispatch.apply(this, arguments);
      }

      return acquireExpectedDispatch;
    }()
  }, {
    key: "flushExpectedDispatches",
    value: function () {
      var _flushExpectedDispatches = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var i, j;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                for (i in this.dispatchWatchers) {
                  for (j = 0; j < this.dispatchWatchers[i].length; j++) {
                    this.dispatchWatchers[i][j].resolve({
                      signalIdentifier: i,
                      externalDetail: "flushed"
                    });
                  }

                  delete this.dispatchWatchers[i];
                }

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function flushExpectedDispatches() {
        return _flushExpectedDispatches.apply(this, arguments);
      }

      return flushExpectedDispatches;
    }()
  }]);

  return eventHandlingMechanism;
}();

eventHandler = new eventHandlingMechanism();

var AbstractMap = /*#__PURE__*/function () {
  function AbstractMap() {
    _classCallCheck(this, AbstractMap);

    this.adjacencyList = {};
    this.nodes = {};
    this.export = undefined;
    this.distances = undefined;
    this.previous = undefined;
    this.computationRefreshed = false;
    this.exportRefreshed = false;
  }

  _createClass(AbstractMap, [{
    key: "onUpdate",
    value: function () {
      var _onUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(callback) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                eventHandler.onReceipt("abstractMapUpdate", callback);

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function onUpdate(_x15) {
        return _onUpdate.apply(this, arguments);
      }

      return onUpdate;
    }()
  }, {
    key: "triggerUpdate",
    value: function () {
      var _triggerUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(method, relevantInformation) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                eventHandler.dispatch("abstractMapUpdate", [method, relevantInformation]);

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function triggerUpdate(_x16, _x17) {
        return _triggerUpdate.apply(this, arguments);
      }

      return triggerUpdate;
    }()
  }, {
    key: "importList",
    value: function () {
      var _importList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(raw, provider) {
        var _this2 = this;

        var mappedList, _loop, i;

        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                checkForTypeErrors([{
                  raw: raw
                }, {
                  provider: provider
                }], [["string"], ["string"]]);
                mappedList = JSON.parse(raw);

                if (Array.isArray(mappedList)) {
                  _context12.next = 5;
                  break;
                }

                throw new TypeError("the provided JSON-parsed object (".concat(raw, " raw) is not an array"));

              case 5:
                Object.keys(mappedList[0]).reduce(function (expendedKeys, currentKey) {
                  expendedKeys.push(currentKey);

                  try {
                    verifyHiddenAlias(mappedList[0][currentKey][0]);
                    addAlias(mappedList[0][currentKey][2], mappedList[0][currentKey][0]);

                    _this2.addNode(mappedList[0][currentKey][0], mappedList[0][currentKey][1]);
                  } catch (error) {
                    if (CONFIG.communication.moderateMapInstabilityTolerance) {
                      shiftNodeWeight(provider, CONFIG.constants.violationWeightPenalties.invalidAliasInRoutingMap);

                      _this2.removeNode(mappedList[0][currentKey][0]);

                      deleteAlias(mappedList[0][currentKey][0]);
                      delete mappedList[0][currentKey];
                      return;
                    } else {
                      expendedKeys.forEach(function (key) {
                        _this2.removeNode(key);

                        deleteAlias(key);
                      });
                      throw new Error("sumarily terminating map import: provided key ".concat(currentKey, " could not be admitted because ").concat(error));
                    }
                  }

                  return expendedKeys;
                }, []);

                _loop = function _loop(i) {
                  mappedList[1][i].forEach(function (subKey) {
                    var _mappedList$, _mappedList$$subKey, _mappedList$2, _mappedList$2$i;

                    if (!((_mappedList$ = mappedList[0]) !== null && _mappedList$ !== void 0 && (_mappedList$$subKey = _mappedList$[subKey]) !== null && _mappedList$$subKey !== void 0 && _mappedList$$subKey[0] && (_mappedList$2 = mappedList[0]) !== null && _mappedList$2 !== void 0 && (_mappedList$2$i = _mappedList$2[i]) !== null && _mappedList$2$i !== void 0 && _mappedList$2$i[0])) return;

                    _this2.addEdge(mappedList[0][i][0], mappedList[0][subKey][0]);
                  });
                };

                for (i in mappedList[1]) {
                  _loop(i);
                }

                _context12.next = 14;
                break;

              case 10:
                _context12.prev = 10;
                _context12.t0 = _context12["catch"](0);
                if (livePeers[provider]) peerConnection.prototype.close(livePeers[provider]);
                return _context12.abrupt("return");

              case 14:
                eventHandler.dispatch("mapImportSuccessful");
                this.export = raw;
                this.exportRefreshed = true;

              case 17:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 10]]);
      }));

      function importList(_x18, _x19) {
        return _importList.apply(this, arguments);
      }

      return importList;
    }()
  }, {
    key: "addEdge",
    value: function addEdge(i, j) {
      checkForTypeErrors([{
        i: i
      }, {
        j: j
      }], [["string", "number"], ["string", "number"]]);
      var nodePresences = [Object.keys(this.nodes).includes(i), Object.keys(this.nodes).includes(j)];
      if (!(nodePresences[0] && nodePresences[1])) throw new Error("Unable to create a representative edge between the nodes aliased ".concat(i, " and ").concat(j, " as ").concat(nodePresences[0] ^ nodePresences[1] ? 'there exists no node "' + [i, j][nodePresences.indexOf(false)] + '"' : "neither may be found", " within the present networkMap"));
      this.adjacencyList[i][j] = this.nodes[j];
      this.adjacencyList[j][i] = this.nodes[i];
      this.triggerUpdate("addEdge", [i, j]);
      this.exportRefreshed = false;
    }
  }, {
    key: "addNode",
    value: function addNode(key, weight) {
      checkForTypeErrors([{
        key: key
      }, {
        weight: weight
      }], [["string", "number"], ["undefined", "number"]]);
      this.adjacencyList[key] = {};
      this.setweight(key, weight !== null && weight !== void 0 ? weight : 1);
      this.triggerUpdate("addNode", key);
      this.exportRefreshed = false;
    }
  }, {
    key: "removeNode",
    value: function removeNode(key) {
      try {
        checkForTypeErrors([{
          key: key
        }], [["string", "number"]]);
      } catch (_unused2) {
        return;
      }

      if (!(this.nodes[key] || this.adjacencyList[key])) return;
      delete this.nodes[key];
      delete this.adjacencyList[key];
      this.triggerUpdate("removeNode", key);
      this.exportRefreshed = false;
    }
  }, {
    key: "removeEdge",
    value: function removeEdge(i, j) {
      var _this$adjacencyList$i, _this$adjacencyList$j, _this$adjacencyList$i2, _this$adjacencyList$j2;

      try {
        checkForTypeErrors([{
          i: i
        }, {
          j: j
        }], [["string", "number"], ["string", "number"]]);
      } catch (error) {
        return;
      }

      if (!((_this$adjacencyList$i = this.adjacencyList[i]) !== null && _this$adjacencyList$i !== void 0 && _this$adjacencyList$i[j] || (_this$adjacencyList$j = this.adjacencyList[j]) !== null && _this$adjacencyList$j !== void 0 && _this$adjacencyList$j[i])) {
        return;
      }

      (_this$adjacencyList$i2 = this.adjacencyList[i]) === null || _this$adjacencyList$i2 === void 0 ? true : delete _this$adjacencyList$i2[j];
      (_this$adjacencyList$j2 = this.adjacencyList[j]) === null || _this$adjacencyList$j2 === void 0 ? true : delete _this$adjacencyList$j2[i];
      this.triggerUpdate("removeEdge", [i, j]);
      this.exportRefreshed = false;
    }
  }, {
    key: "exportList",
    value: function () {
      var _exportList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var temporaryNodeMap, persistentNodeMap, mapped, iters, alias, shorthand, key, subkeys, subKey;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                temporaryNodeMap = {};
                persistentNodeMap = {};
                mapped = {};
                iters = 0;

                for (alias in this.nodes) {
                  shorthand = iters.toString(36);
                  persistentNodeMap[shorthand] = alias === CONFIG.communication.hiddenAlias ? [alias, this.nodes[alias].weight, CONFIG.communication.publicAlias] : [alias, this.nodes[alias].weight, initialReferenceLedger[alias]];
                  mapped[shorthand] = this.adjacencyList[alias];
                  temporaryNodeMap[alias] = iters.toString(36);
                  iters++;
                }

                for (key in mapped) {
                  subkeys = [];

                  for (subKey in mapped[key]) {
                    subkeys.push(temporaryNodeMap[subKey]);
                  }

                  mapped[key] = subkeys;
                }

                this.export = JSON.stringify([persistentNodeMap, mapped]);
                this.exportRefreshed = true;
                return _context13.abrupt("return", this.export);

              case 9:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function exportList() {
        return _exportList.apply(this, arguments);
      }

      return exportList;
    }()
  }, {
    key: "optionalExport",
    value: function () {
      var _optionalExport = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var elected;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (this.exportRefreshed) {
                  _context14.next = 6;
                  break;
                }

                _context14.next = 3;
                return this.exportList();

              case 3:
                _context14.t0 = _context14.sent;
                _context14.next = 7;
                break;

              case 6:
                _context14.t0 = this.export;

              case 7:
                elected = _context14.t0;
                return _context14.abrupt("return", elected ? elected : "none");

              case 9:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function optionalExport() {
        return _optionalExport.apply(this, arguments);
      }

      return optionalExport;
    }()
  }, {
    key: "precomputeRoutes",
    value: function () {
      var _precomputeRoutes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(source) {
        var _this3 = this;

        var dist, prev, queue, current;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                checkForTypeErrors([{
                  source: source
                }], [["string", "number"]]);

                if (Object.keys(this.nodes).includes(source)) {
                  _context15.next = 3;
                  break;
                }

                throw new Error("Requested source node (".concat(source, ") is not present within AbstractMap.__instance__.nodes"));

              case 3:
                dist = {};
                prev = {};
                queue = new crudeQueue();
                dist[source] = 0;
                Object.keys(this.adjacencyList).forEach(function (node) {
                  if (node !== source) {
                    prev[node] = undefined;
                    dist[node] = Infinity;
                  }

                  queue.add(node, dist[node]);
                });

                while (Object.keys(queue.queue) != "") {
                  current = queue.extractMin();
                  Object.keys(this.adjacencyList[current]).forEach(function (neighbor) {
                    if (!queue.cachedPriorities[neighbor]) return;
                    var alt = dist[current] + _this3.nodes[neighbor].weight;

                    if (alt < dist[neighbor] && dist[current] != Infinity) {
                      dist[neighbor] = alt;
                      prev[neighbor] = current;
                      queue.modifyPriority(neighbor, alt);
                    }
                  });
                }

                this.distances = dist;
                this.previous = prev;
                this.computationRefreshed = true;

              case 12:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function precomputeRoutes(_x20) {
        return _precomputeRoutes.apply(this, arguments);
      }

      return precomputeRoutes;
    }()
  }, {
    key: "findNextHop",
    value: function () {
      var _findNextHop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(currentNode, endNode) {
        var node, lastNode;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                checkForTypeErrors([{
                  currentNode: currentNode
                }, {
                  endNode: endNode
                }], [["string", "number"], ["string", "number"]]);
                _context16.next = 3;
                return this.precomputeRoutes(currentNode);

              case 3:
                if (Object.keys(this.nodes).includes(currentNode) && Object.keys(this.nodes).includes(endNode)) {
                  _context16.next = 5;
                  break;
                }

                throw new Error("The requested route <".concat(currentNode, " -> ").concat(endNode, "> is not possible in the current map (one of both of these members does not exist)."));

              case 5:
                node = endNode;
                lastNode = undefined;

              case 7:
                if (!(node != currentNode)) {
                  _context16.next = 14;
                  break;
                }

                lastNode = node;

                if (!(this.distances[node] == Infinity)) {
                  _context16.next = 11;
                  break;
                }

                throw new Error("The requested route <".concat(currentNode, " -> ").concat(endNode, "> is not possible in the current map (there exists no path between intermediary node ").concat(node, " and the current node)."));

              case 11:
                node = this.previous[node];
                _context16.next = 7;
                break;

              case 14:
                return _context16.abrupt("return", lastNode);

              case 15:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function findNextHop(_x21, _x22) {
        return _findNextHop.apply(this, arguments);
      }

      return findNextHop;
    }()
  }, {
    key: "reload",
    value: function () {
      var _reload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                this.adjacencyList = {};
                this.nodes = {};
                this.export = undefined;
                this.distances = undefined;
                this.previous = undefined;
                this.computationRefreshed = false;
                this.exportRefreshed = false;
                this.triggerUpdate("totalWipe");

              case 8:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function reload() {
        return _reload.apply(this, arguments);
      }

      return reload;
    }()
  }, {
    key: "setweight",
    value: function () {
      var _setweight = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(key, weight) {
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this.nodes[key] = {
                  weight: weight
                };

              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function setweight(_x23, _x24) {
        return _setweight.apply(this, arguments);
      }

      return setweight;
    }()
  }]);

  return AbstractMap;
}();

networkMap = new AbstractMap();
networkMap.onUpdate(function (_sig, externalDetail) {
  if (Object.keys(livePeers).length != 1 || externalDetail[0] != "addNode") return;
  setTimeout(function () {
    peerConnection.prototype.stabilizeLink().catch(function () {});
  }, 500);
});

var crudeQueue = /*#__PURE__*/function () {
  function crudeQueue() {
    _classCallCheck(this, crudeQueue);

    this.cachedPriorities = {};
    this.queue = {};
  }

  _createClass(crudeQueue, [{
    key: "add",
    value: function add(item, priority) {
      checkForTypeErrors([{
        item: item
      }, {
        priority: priority
      }], [["number", "string"], ["number"]]);
      this.cachedPriorities[item] = priority;

      if (!this.queue[priority]) {
        this.queue[priority] = [];
      }

      this.queue[priority].push(item);
    }
  }, {
    key: "extractMin",
    value: function extractMin() {
      if (Object.keys(this.queue) == "") throw new Error("unable to extract key of minimum priority, queue is empty");
      var index = Math.min.apply(Math, _toConsumableArray(Object.keys(this.queue)));
      var extracted = this.queue[index].pop();
      delete this.cachedPriorities[extracted];
      if (this.queue[index] == "") delete this.queue[index];
      return extracted;
    }
  }, {
    key: "modifyPriority",
    value: function modifyPriority(item, newPriority) {
      checkForTypeErrors([{
        item: item
      }, {
        newPriority: newPriority
      }, {
        "this.queue[oldPriority]": this.queue[this.cachedPriorities[item]]
      }], [["number", "string"], ["number"], ["object"]]);
      this.queue[this.cachedPriorities[item]].splice(this.queue[this.cachedPriorities[item]].indexOf(item), 1);
      if (this.queue[this.cachedPriorities[item]] == "") delete this.queue[this.cachedPriorities[item]];
      this.add(item, newPriority);
    }
  }]);

  return crudeQueue;
}();

function addLivePeer(_x25, _x26) {
  return _addLivePeer.apply(this, arguments);
}

function _addLivePeer() {
  _addLivePeer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee56(ref, value) {
    return _regeneratorRuntime().wrap(function _callee56$(_context57) {
      while (1) {
        switch (_context57.prev = _context57.next) {
          case 0:
            livePeers[ref] = value;
            eventHandler.dispatch("livePeersUpdated");

          case 2:
          case "end":
            return _context57.stop();
        }
      }
    }, _callee56);
  }));
  return _addLivePeer.apply(this, arguments);
}

function onLivePeersUpdated(_x27) {
  return _onLivePeersUpdated.apply(this, arguments);
}

function _onLivePeersUpdated() {
  _onLivePeersUpdated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee57(callback) {
    return _regeneratorRuntime().wrap(function _callee57$(_context58) {
      while (1) {
        switch (_context58.prev = _context58.next) {
          case 0:
            eventHandler.onReceipt("livePeersUpdated", callback);

          case 1:
          case "end":
            return _context58.stop();
        }
      }
    }, _callee57);
  }));
  return _onLivePeersUpdated.apply(this, arguments);
}

function deleteLivePeer(_x28) {
  return _deleteLivePeer.apply(this, arguments);
}

function _deleteLivePeer() {
  _deleteLivePeer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee58(ref) {
    return _regeneratorRuntime().wrap(function _callee58$(_context59) {
      while (1) {
        switch (_context59.prev = _context59.next) {
          case 0:
            delete livePeers[ref];
            if (authPeers.includes(ref)) deleteAuthPeer(ref);
            eventHandler.dispatch("livePeersUpdated");

          case 3:
          case "end":
            return _context59.stop();
        }
      }
    }, _callee58);
  }));
  return _deleteLivePeer.apply(this, arguments);
}

var peerConnection = /*#__PURE__*/function () {
  function peerConnection(permissions) {
    var _this4 = this;

    _classCallCheck(this, peerConnection);

    _defineProperty(this, "initializationMethods", {
      invokerIntroduction: function () {
        var _invokerIntroduction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(message) {
          var providedMap;
          return _regeneratorRuntime().wrap(function _callee19$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  _context19.prev = 0;
                  checkForTypeErrors([{
                    message: message
                  }, {
                    "message.hiddenAlias": message.hiddenAlias
                  }, {
                    "message.publicAlias": message.publicAlias
                  }, {
                    "message.isOriented": message.isOriented
                  }], [["object"], ["string"], ["string"], ["boolean"]]);

                  if (!Object.keys(livePeers).includes(message.hiddenAlias)) {
                    _context19.next = 4;
                    break;
                  }

                  throw new Error("a route has already been secured to the desired destination");

                case 4:
                  _context19.next = 11;
                  break;

                case 6:
                  _context19.prev = 6;
                  _context19.t0 = _context19["catch"](0);
                  if (typeof message.hiddenAlias === "string") obviatePeerError(message.hiddenAlias);
                  peerConnection.prototype.close(_this4);
                  return _context19.abrupt("return");

                case 11:
                  addAlias(message.publicAlias, message.hiddenAlias);
                  addLivePeer(message.hiddenAlias, _this4);
                  if (_this4.isAuth) addAuthPeer(message.hiddenAlias);
                  topologyTransport.addGossip({
                    constituentHiddenAliases: [CONFIG.communication.hiddenAlias, message.hiddenAlias],
                    correspondingPublicAliases: [CONFIG.communication.publicAlias, message.publicAlias],
                    mode: "addLink"
                  });
                  _this4.acquainted = true;

                  if (message.isOriented) {
                    _context19.next = 22;
                    break;
                  }

                  _context19.next = 19;
                  return networkMap.optionalExport();

                case 19:
                  _context19.t1 = _context19.sent;
                  _context19.next = 23;
                  break;

                case 22:
                  _context19.t1 = false;

                case 23:
                  providedMap = _context19.t1;

                  _this4.transport.channel.standardSend("reciprocalAlignment", {
                    publicAlias: CONFIG.communication.publicAlias,
                    hiddenAlias: CONFIG.communication.hiddenAlias,
                    map: providedMap
                  });

                  _this4.peerData = {
                    hiddenAlias: message.hiddenAlias
                  };

                case 26:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee19, null, [[0, 6]]);
        }));

        function invokerIntroduction(_x29) {
          return _invokerIntroduction.apply(this, arguments);
        }

        return invokerIntroduction;
      }(),
      reciprocalAlignment: function () {
        var _reciprocalAlignment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(message) {
          var mapInterval;
          return _regeneratorRuntime().wrap(function _callee20$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  _context20.prev = 0;
                  checkForTypeErrors([{
                    message: message
                  }, {
                    "message.hiddenAlias": message.hiddenAlias
                  }, {
                    "message.publicAlias": message.publicAlias
                  }], [["object"], ["string"], ["string"], ["boolean"]]);

                  if (!Object.keys(livePeers).includes(message.hiddenAlias)) {
                    _context20.next = 4;
                    break;
                  }

                  throw new Error("a route has already been secured to the desired destination");

                case 4:
                  _context20.next = 11;
                  break;

                case 6:
                  _context20.prev = 6;
                  _context20.t0 = _context20["catch"](0);
                  if (typeof message.hiddenAlias === "string") obviatePeerError(message.hiddenAlias);
                  peerConnection.prototype.close(_this4);
                  return _context20.abrupt("return");

                case 11:
                  addAlias(message.publicAlias, message.hiddenAlias);
                  addLivePeer(message.hiddenAlias, _this4);
                  if (_this4.isAuth) addAuthPeer(message.hiddenAlias);

                  if (!(Object.keys(networkMap.nodes) == "")) {
                    _context20.next = 21;
                    break;
                  }

                  if (message.map) {
                    _context20.next = 20;
                    break;
                  }

                  mapInterval = setTimeout(function () {
                    if (networkMap) clearInterval(mapInterval);

                    _this4.transport.channel.standardSend("mapFetch");

                    eventHandler.acquireExpectedDispatch("networkMapRecieved".concat(_this4.internalUID), 10000).catch(function () {});
                  }, 1000);
                  return _context20.abrupt("return");

                case 20:
                  if (message.map !== "none") {
                    networkMap.importList(message.map, message.hiddenAlias);
                  }

                case 21:
                  _this4.acquainted = true;
                  _this4.peerData = {
                    hiddenAlias: message.hiddenAlias
                  };

                case 23:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee20, null, [[0, 6]]);
        }));

        function reciprocalAlignment(_x30) {
          return _reciprocalAlignment.apply(this, arguments);
        }

        return reciprocalAlignment;
      }()
    });

    checkForTypeErrors([{
      permissions: permissions
    }], [["string", "undefined"]]);
    this.closed = false;
    this.acquainted = false;
    this.voluntary = true;
    this.peerData = {
      hiddenAlias: undefined
    };
    this.permissions = permissions !== null && permissions !== void 0 ? permissions : "standard";
    this.isAuth = permissions == "advanced";
    this.internalUID = "UID : ".concat(Math.random().toString(36).slice(2, 11));

    this.transport = function () {
      var buffer = {};
      buffer.connection = new RTCPeerConnection(CONFIG.rtc.ICEpresets);
      buffer.channel = buffer.connection.createDataChannel(CONFIG.rtc.defaultChannelLabel, CONFIG.rtc.channelOptions);
      buffer.channel.binaryType = CONFIG.rtc.binaryType;

      buffer.channel.onclose = function () {
        if (this.closed) return;
        peerConnection.prototype.close(this);
      }.bind(_this4);

      buffer.channel.onopen = function () {
        this.announcePeer();

        if (this.voluntary) {
          this.transport.channel.standardSend("invokerIntroduction", {
            hiddenAlias: CONFIG.communication.hiddenAlias,
            isOriented: Object.keys(networkMap.nodes) != "",
            publicAlias: CONFIG.communication.publicAlias
          });
          if (Object.keys(networkMap.nodes) == "") primeForMapImport(this.internalUID);
        }
      }.bind(_this4);

      buffer.channel.onmessage = /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(event) {
          var _this5 = this;

          return _regeneratorRuntime().wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  peerConnection.prototype.handleMessage.bind(this)(event.data).catch(function (error) {
                    if (_this5.peerData.hiddenAlias) {
                      shiftNodeWeight(_this5.peerData.hiddenAlias, CONFIG.constants.genericUncaughtError);
                    }

                    throw error;
                  });

                case 1:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21, this);
        }));

        return function (_x31) {
          return _ref8.apply(this, arguments);
        };
      }().bind(_this4);

      return buffer;
    }();
  }

  _createClass(peerConnection, [{
    key: "onpeer",
    value: function () {
      var _onpeer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(cb) {
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                eventHandler.onReceipt("peerEstablished | ".concat(this.internalUID), cb);

              case 1:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function onpeer(_x32) {
        return _onpeer.apply(this, arguments);
      }

      return onpeer;
    }()
  }, {
    key: "announcePeer",
    value: function () {
      var _announcePeer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                eventHandler.dispatch("peerEstablished | ".concat(this.internalUID));

              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function announcePeer() {
        return _announcePeer.apply(this, arguments);
      }

      return announcePeer;
    }()
  }, {
    key: "onConsumableAuth",
    value: function () {
      var _onConsumableAuth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(cb) {
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                eventHandler.onReceipt("consumableAuth | ".concat(this.internalUID), cb);

              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function onConsumableAuth(_x33) {
        return _onConsumableAuth.apply(this, arguments);
      }

      return onConsumableAuth;
    }()
  }, {
    key: "dispatchConsumableAuth",
    value: function () {
      var _dispatchConsumableAuth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(consumableRaw) {
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                eventHandler.dispatch("consumableAuth | ".concat(this.internalUID), escapeHTML(consumableRaw));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function dispatchConsumableAuth(_x34) {
        return _dispatchConsumableAuth.apply(this, arguments);
      }

      return dispatchConsumableAuth;
    }()
  }, {
    key: "makeOffer",
    value: function () {
      var _makeOffer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
        var concurrentICEDifferentiator;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                if (!(this.transport.connection.remoteDescription || this.transport.connection.localDescription)) {
                  _context27.next = 2;
                  break;
                }

                throw new Error("This connection has already begun another ICE exchange sequence, and is, therefore, unable to generate a new local description.");

              case 2:
                _context27.t0 = this.transport.connection;
                _context27.next = 5;
                return this.transport.connection.createOffer();

              case 5:
                _context27.t1 = _context27.sent;
                _context27.next = 8;
                return _context27.t0.setLocalDescription.call(_context27.t0, _context27.t1);

              case 8:
                concurrentICEDifferentiator = Math.floor(Math.random() * 1000);

                this.transport.connection.onicecandidate = /*#__PURE__*/function () {
                  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(_ref9) {
                    var candidate;
                    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                      while (1) {
                        switch (_context26.prev = _context26.next) {
                          case 0:
                            candidate = _ref9.candidate;

                            if (!candidate) {
                              _context26.next = 3;
                              break;
                            }

                            return _context26.abrupt("return");

                          case 3:
                            eventHandler.dispatch("exhaustedICECandidates | ".concat(concurrentICEDifferentiator));

                          case 4:
                          case "end":
                            return _context26.stop();
                        }
                      }
                    }, _callee26);
                  }));

                  return function (_x35) {
                    return _ref10.apply(this, arguments);
                  };
                }();

                _context27.next = 12;
                return eventHandler.acquireExpectedDispatch("exhaustedICECandidates | ".concat(concurrentICEDifferentiator), CONFIG.rtc.ICEGatheringMaxLatency);

              case 12:
                return _context27.abrupt("return", this.transport.connection.localDescription);

              case 13:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function makeOffer() {
        return _makeOffer.apply(this, arguments);
      }

      return makeOffer;
    }()
  }, {
    key: "receiveOffer",
    value: function () {
      var _receiveOffer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(SDP) {
        var concurrentICEDifferentiator;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                checkForTypeErrors([{
                  SDP: SDP
                }], [["object"]]);

                if (!(this.transport.connection.remoteDescription || this.transport.connection.localDescription)) {
                  _context29.next = 3;
                  break;
                }

                throw new Error("This connection has already begun another ICE exchange sequence, and is, therefore, unable to generate a new remote description.");

              case 3:
                this.voluntary = false;
                _context29.next = 6;
                return this.transport.connection.setRemoteDescription(SDP);

              case 6:
                _context29.t0 = this.transport.connection;
                _context29.next = 9;
                return this.transport.connection.createAnswer();

              case 9:
                _context29.t1 = _context29.sent;
                _context29.next = 12;
                return _context29.t0.setLocalDescription.call(_context29.t0, _context29.t1);

              case 12:
                concurrentICEDifferentiator = Math.floor(Math.random() * 1000);

                this.transport.connection.onicecandidate = /*#__PURE__*/function () {
                  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(_ref11) {
                    var candidate;
                    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                      while (1) {
                        switch (_context28.prev = _context28.next) {
                          case 0:
                            candidate = _ref11.candidate;

                            if (!candidate) {
                              _context28.next = 3;
                              break;
                            }

                            return _context28.abrupt("return");

                          case 3:
                            eventHandler.dispatch("exhaustedICECandidates | ".concat(concurrentICEDifferentiator));

                          case 4:
                          case "end":
                            return _context28.stop();
                        }
                      }
                    }, _callee28);
                  }));

                  return function (_x37) {
                    return _ref12.apply(this, arguments);
                  };
                }();

                _context29.next = 16;
                return eventHandler.acquireExpectedDispatch("exhaustedICECandidates | ".concat(concurrentICEDifferentiator), CONFIG.rtc.ICEGatheringMaxLatency);

              case 16:
                return _context29.abrupt("return", this.transport.connection.localDescription);

              case 17:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function receiveOffer(_x36) {
        return _receiveOffer.apply(this, arguments);
      }

      return receiveOffer;
    }()
  }, {
    key: "receiveAnswer",
    value: function () {
      var _receiveAnswer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(SDP) {
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (typeof SDP === "string") SDP = JSON.parse(SDP);
                checkForTypeErrors([{
                  SDP: SDP
                }], [["object"]]);

                if (!this.transport.connection.remoteDescription) {
                  _context30.next = 4;
                  break;
                }

                throw new Error("This connection already holds a remote description, and therefore, cannot overwrite it with a new external description.");

              case 4:
                this.transport.connection.setRemoteDescription(SDP);

              case 5:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function receiveAnswer(_x38) {
        return _receiveAnswer.apply(this, arguments);
      }

      return receiveAnswer;
    }()
  }, {
    key: "requestPermissionEscalation",
    value: function () {
      var _requestPermissionEscalation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(level) {
        var _this6 = this;

        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                this.transport.channel.standardSend("permissionEscalationRequest", {
                  level: level !== null && level !== void 0 ? level : "advanced"
                });
                eventHandler.acquireExpectedDispatch("permissionEscalationResponse|".concat(this.internalUID), CONFIG.communication.arbitraryPeerRouteTimeout).then(function (value) {
                  if (value.externalDetail.status) {
                    _this6.permissions = level !== null && level !== void 0 ? level : "advanced";
                    if (_this6.permissions === "advanced" && !authPeers.includes(_this6.peerData.hiddenAlias)) addAuthPeer(_this6.peerData.hiddenAlias);
                    indicateRouteAccepted(_this6.peerData.hiddenAlias);
                  } else {
                    announceAuthRejected(_this6.peerData.hiddenAlias);
                    obviatePeerError(_this6.peerData.hiddenAlias);
                  }
                }, function () {
                  announceAuthRejected(_this6.peerData.hiddenAlias);
                  obviatePeerError(_this6.peerData.hiddenAlias);
                });

              case 2:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function requestPermissionEscalation(_x39) {
        return _requestPermissionEscalation.apply(this, arguments);
      }

      return requestPermissionEscalation;
    }()
  }, {
    key: "makeDefiniteRoute",
    value: function () {
      var _makeDefiniteRoute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(destination, desiredPermissions) {
        var _result$externalDetai;

        var generatedChannel, SDP, routeID, result;
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                if (!Object.keys(livePeers).includes(destination)) {
                  _context32.next = 2;
                  break;
                }

                throw new Error("Direct route already exists to requested node ".concat(destination));

              case 2:
                generatedChannel = new peerConnection();
                _context32.t0 = JSON;
                _context32.next = 6;
                return generatedChannel.makeOffer();

              case 6:
                _context32.t1 = _context32.sent;
                SDP = _context32.t0.stringify.call(_context32.t0, _context32.t1);
                routeID = Math.random().toString().slice(2, 12);
                _context32.prev = 9;
                _context32.next = 12;
                return detatchedRoute(destination, "routeImperative", {
                  SDP: SDP,
                  sender: CONFIG.communication.hiddenAlias,
                  destination: destination,
                  desiredPermissions: desiredPermissions,
                  routeID: routeID
                });

              case 12:
                _context32.next = 14;
                return Promise.race(["routeInaccessible", "routeAccepted", "routeRejected"].map(function (outcome) {
                  return eventHandler.acquireExpectedDispatch("".concat(outcome, "|").concat(routeID), CONFIG.communication.arbitraryPeerRouteTimeout);
                }));

              case 14:
                result = _context32.sent;
                _context32.next = 20;
                break;

              case 17:
                _context32.prev = 17;
                _context32.t2 = _context32["catch"](9);
                result = {
                  signalIdentifier: "routeInaccessible"
                };

              case 20:
                _context32.t3 = result.signalIdentifier.split("|")[0];
                _context32.next = _context32.t3 === "routeInaccessible" ? 23 : _context32.t3 === "routeRejected" ? 27 : _context32.t3 === "routeAccepted" ? 31 : 41;
                break;

              case 23:
                peerConnection.prototype.close(generatedChannel);
                if (desiredPermissions == "advanced") announceAuthRejected(destination);

                if ((_result$externalDetai = result.externalDetail) !== null && _result$externalDetai !== void 0 && _result$externalDetai.pointOfFailure) {
                  shiftNodeWeight(result.externalDetail.pointOfFailure, CONFIG.constants.violationWeightPenalties.pointOfRouteFailure);
                }

                return _context32.abrupt("break", 41);

              case 27:
                peerConnection.prototype.close(generatedChannel);
                if (desiredPermissions == "advanced") announceAuthRejected(destination);
                obviatePeerError(destination);
                return _context32.abrupt("break", 41);

              case 31:
                _context32.prev = 31;
                generatedChannel.receiveAnswer(result.externalDetail.SDP);
                _context32.next = 39;
                break;

              case 35:
                _context32.prev = 35;
                _context32.t4 = _context32["catch"](31);
                obviatePeerError(destination);
                return _context32.abrupt("return");

              case 39:
                if (desiredPermissions === "advanced") {
                  addAuthPeer(destination);
                }

                indicateRouteAccepted(destination);

              case 41:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, null, [[9, 17], [31, 35]]);
      }));

      function makeDefiniteRoute(_x40, _x41) {
        return _makeDefiniteRoute.apply(this, arguments);
      }

      return makeDefiniteRoute;
    }()
  }, {
    key: "comprehendProspectiveRoute",
    value: function () {
      var _comprehendProspectiveRoute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(routePackage) {
        var connection, SDP;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                connection = new peerConnection(routePackage.desiredPermissions);
                _context33.prev = 1;
                _context33.next = 4;
                return connection.receiveOffer(JSON.parse(routePackage.SDP));

              case 4:
                SDP = _context33.sent;
                _context33.next = 12;
                break;

              case 7:
                _context33.prev = 7;
                _context33.t0 = _context33["catch"](1);

                if (routePackage.sender) {
                  shiftNodeWeight(routePackage.sender, CONFIG.constants.violationWeightPenalties.invalidSDP);
                }

                this.rejectProspectiveRoute(routePackage, connection);
                return _context33.abrupt("return");

              case 12:
                if (!(CONFIG.communication.routeAcceptHeuristic.constructor.name === "AsyncFunction")) {
                  _context33.next = 18;
                  break;
                }

                _context33.next = 15;
                return CONFIG.communication.routeAcceptHeuristic(routePackage);

              case 15:
                _context33.t1 = _context33.sent;
                _context33.next = 19;
                break;

              case 18:
                _context33.t1 = CONFIG.communication.routeAcceptHeuristic(routePackage);

              case 19:
                if (!_context33.t1) {
                  _context33.next = 23;
                  break;
                }

                this.acceptProspectiveRoute(routePackage, SDP, connection);
                _context33.next = 24;
                break;

              case 23:
                this.rejectProspectiveRoute(routePackage, connection);

              case 24:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this, [[1, 7]]);
      }));

      function comprehendProspectiveRoute(_x42) {
        return _comprehendProspectiveRoute.apply(this, arguments);
      }

      return comprehendProspectiveRoute;
    }()
  }, {
    key: "rejectProspectiveRoute",
    value: function () {
      var _rejectProspectiveRoute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(routePackage, allocatedChannel) {
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                allocatedChannel.transport.connection.close();
                detatchedRoute(routePackage.sender, "routeRejected", {
                  destination: routePackage.sender,
                  routeID: routePackage.routeID
                }).catch(function () {});

              case 2:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34);
      }));

      function rejectProspectiveRoute(_x43, _x44) {
        return _rejectProspectiveRoute.apply(this, arguments);
      }

      return rejectProspectiveRoute;
    }()
  }, {
    key: "acceptProspectiveRoute",
    value: function () {
      var _acceptProspectiveRoute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(routePackage, SDP, allocatedChannel) {
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                eventHandler.acquireExpectedDispatch("peerEstablished | ".concat(allocatedChannel.internalUID), 1000).then(function () {
                  indicateRouteAccepted(routePackage.sender);
                }, function () {
                  obviatePeerError(routePackage.sender);
                  allocatedChannel.transport.connection.close();
                });
                _context35.next = 3;
                return detatchedRoute(routePackage.sender, "routeAccepted", {
                  SDP: SDP,
                  destination: routePackage.sender,
                  routeID: routePackage.routeID
                });

              case 3:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35);
      }));

      function acceptProspectiveRoute(_x45, _x46, _x47) {
        return _acceptProspectiveRoute.apply(this, arguments);
      }

      return acceptProspectiveRoute;
    }()
  }, {
    key: "handleMessage",
    value: function () {
      var _handleMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(message) {
        var _this$peerData$hidden,
            _this$peerData,
            _this$peerData2,
            _this7 = this;

        var parsed, _parsed$1$level;

        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                parsed = JSON.parse(CONFIG.rtc.binaryType === "arrayBuffer" ? new TextDecoder().decode(message) : message);
                checkForTypeErrors([{
                  parsed: parsed
                }], [["object"]]);
                _context36.next = 4;
                return peerConnection.prototype.weaklyValidateMessage(parsed);

              case 4:
                _context36.t0 = !_context36.sent;

                if (_context36.t0) {
                  _context36.next = 7;
                  break;
                }

                _context36.t0 = !authPeers.includes((_this$peerData$hidden = (_this$peerData = this.peerData) === null || _this$peerData === void 0 ? void 0 : _this$peerData.hiddenAlias) !== null && _this$peerData$hidden !== void 0 ? _this$peerData$hidden : Math.random().toString()) && parsed[0] === "consumable";

              case 7:
                if (!_context36.t0) {
                  _context36.next = 10;
                  break;
                }

                if (this.peerData.peer) {
                  shiftNodeWeight(this.peerData.peer, CONFIG.constants.violationWeightPenalties.invalidMessage);
                }

                return _context36.abrupt("return");

              case 10:
                _context36.t1 = parsed[0];
                _context36.next = _context36.t1 === "consumable" ? 13 : _context36.t1 === "gossip" ? 17 : _context36.t1 === "mapFetch" ? 20 : _context36.t1 === "mapReturn" ? 27 : _context36.t1 === "routeImperative" ? 32 : _context36.t1 === "routeInaccessible" ? 49 : _context36.t1 === "routeRejected" ? 60 : _context36.t1 === "routeAccepted" ? 71 : _context36.t1 === "permissionEscalationRequest" ? 82 : _context36.t1 === "permissionEscalationResponse" ? 100 : _context36.t1 === "invokerIntroduction" ? 102 : _context36.t1 === "reciprocalAlignment" ? 107 : _context36.t1 === "forcefulDeauth" ? 112 : 114;
                break;

              case 13:
                if ((_this$peerData2 = this.peerData) !== null && _this$peerData2 !== void 0 && _this$peerData2.hiddenAlias) {
                  _context36.next = 15;
                  break;
                }

                return _context36.abrupt("return");

              case 15:
                this.dispatchConsumableAuth(escapeHTML(parsed[1].raw));
                return _context36.abrupt("break", 116);

              case 17:
                gossipTransport.consumeGossip(parsed[1]);

                if (this.peerData.peer) {
                  shiftNodeWeight(this.peerData.peer, CONFIG.constants.violationWeightPenalties.failedGossip);
                }

                return _context36.abrupt("break", 116);

              case 20:
                _context36.t2 = this.transport.channel;
                _context36.next = 23;
                return networkMap.optionalExport();

              case 23:
                _context36.t3 = _context36.sent;
                _context36.t4 = {
                  map: _context36.t3
                };

                _context36.t2.standardSend.call(_context36.t2, "mapReturn", _context36.t4);

                return _context36.abrupt("break", 116);

              case 27:
                if (!(parsed[1].map === "none" || eventHandler.dispatchWatchers["networkMapRecieved".concat(this.internalUID)].length < 1)) {
                  _context36.next = 29;
                  break;
                }

                return _context36.abrupt("return");

              case 29:
                eventHandler.dispatch("networkMapRecieved".concat(this.internalUID));
                networkMap.importList(parsed[1], this.peerData.hiddenAlias);
                return _context36.abrupt("break", 116);

              case 32:
                if (!(parsed[1].destination == CONFIG.communication.hiddenAlias)) {
                  _context36.next = 35;
                  break;
                }

                this.comprehendProspectiveRoute(parsed[1]);
                return _context36.abrupt("return");

              case 35:
                _context36.prev = 35;
                detatchedRoute(parsed[1].destination, "routeImperative", parsed[1]);
                _context36.next = 48;
                break;

              case 39:
                _context36.prev = 39;
                _context36.t5 = _context36["catch"](35);
                _context36.prev = 41;
                detatchedRoute(parsed[1].sender, "routeInaccessible", {
                  routeID: parsed[1].routeID,
                  pointOfFailure: CONFIG.communication.hiddenAlias,
                  destination: parsed[1].sender
                });
                _context36.next = 48;
                break;

              case 45:
                _context36.prev = 45;
                _context36.t6 = _context36["catch"](41);
                return _context36.abrupt("return");

              case 48:
                return _context36.abrupt("break", 116);

              case 49:
                if (!(parsed[1].destination == CONFIG.communication.hiddenAlias)) {
                  _context36.next = 52;
                  break;
                }

                eventHandler.dispatch("routeInaccessible|".concat(parsed[1].routeID), parsed[1]);
                return _context36.abrupt("return");

              case 52:
                _context36.prev = 52;
                detatchedRoute(parsed[1].destination, "routeInaccessible", parsed[1]);
                _context36.next = 59;
                break;

              case 56:
                _context36.prev = 56;
                _context36.t7 = _context36["catch"](52);
                return _context36.abrupt("return");

              case 59:
                return _context36.abrupt("break", 116);

              case 60:
                if (!(parsed[1].destination == CONFIG.communication.hiddenAlias)) {
                  _context36.next = 63;
                  break;
                }

                eventHandler.dispatch("routeRejected|".concat(parsed[1].routeID), parsed[1]);
                return _context36.abrupt("return");

              case 63:
                _context36.prev = 63;
                detatchedRoute(parsed[1].destination, "routeRejected", parsed[1]);
                _context36.next = 70;
                break;

              case 67:
                _context36.prev = 67;
                _context36.t8 = _context36["catch"](63);
                return _context36.abrupt("return");

              case 70:
                return _context36.abrupt("break", 116);

              case 71:
                if (!(parsed[1].destination == CONFIG.communication.hiddenAlias)) {
                  _context36.next = 74;
                  break;
                }

                eventHandler.dispatch("routeAccepted|".concat(parsed[1].routeID), parsed[1]);
                return _context36.abrupt("return");

              case 74:
                _context36.prev = 74;
                detatchedRoute(parsed[1].destination, "routeAccepted", parsed[1]);
                _context36.next = 81;
                break;

              case 78:
                _context36.prev = 78;
                _context36.t9 = _context36["catch"](74);
                return _context36.abrupt("return");

              case 81:
                return _context36.abrupt("break", 116);

              case 82:
                if (this.peerData.hiddenAlias) {
                  _context36.next = 84;
                  break;
                }

                return _context36.abrupt("return");

              case 84:
                if (!(CONFIG.communication.routeAcceptHeuristic.constructor.name === "AsyncFunction")) {
                  _context36.next = 90;
                  break;
                }

                _context36.next = 87;
                return CONFIG.communication.routeAcceptHeuristic({
                  sender: this.peerData.hiddenAlias,
                  desiredPermissions: parsed[1].level
                });

              case 87:
                _context36.t10 = _context36.sent;
                _context36.next = 91;
                break;

              case 90:
                _context36.t10 = CONFIG.communication.routeAcceptHeuristic({
                  sender: this.peerData.hiddenAlias,
                  desiredPermissions: parsed[1].level
                });

              case 91:
                if (!_context36.t10) {
                  _context36.next = 98;
                  break;
                }

                this.transport.channel.standardSend("permissionEscalationResponse", {
                  status: true
                });
                this.permissions = (_parsed$1$level = parsed[1].level) !== null && _parsed$1$level !== void 0 ? _parsed$1$level : "advanced";
                if (this.permissions === "advanced" && !authPeers.includes(this.peerData.hiddenAlias)) addAuthPeer(this.peerData.hiddenAlias);
                indicateRouteAccepted(this.peerData.hiddenAlias);
                _context36.next = 99;
                break;

              case 98:
                this.transport.channel.standardSend("permissionEscalationResponse", {
                  status: false
                });

              case 99:
                return _context36.abrupt("break", 116);

              case 100:
                eventHandler.dispatch("permissionEscalationResponse|".concat(this.internalUID), {
                  status: parsed[1].status
                });
                return _context36.abrupt("break", 116);

              case 102:
                if (!this.acquainted) {
                  _context36.next = 105;
                  break;
                }

                if (this.peerData.peer) {
                  shiftNodeWeight(this.peerData.peer, CONFIG.constants.violationWeightPenalties.acquaintedInitAttempt);
                }

                return _context36.abrupt("return");

              case 105:
                this.initializationMethods.invokerIntroduction(parsed[1]).catch(function (error) {
                  if (_this7.peerData.peer || typeof parsed[1].hiddenAlias === "string") {
                    obviatePeerError(_this7.peerData.peer || parsed[1].hiddenAlias);
                    shiftNodeWeight(_this7.peerData.peer, CONFIG.constants.violationWeightPenalties.initSequenceError);
                  }

                  peerConnection.prototype.close(_this7);
                });
                return _context36.abrupt("break", 116);

              case 107:
                if (!this.acquainted) {
                  _context36.next = 110;
                  break;
                }

                if (this.peerData.peer) {
                  shiftNodeWeight(this.peerData.peer, CONFIG.constants.violationWeightPenalties.acquaintedInitAttempt);
                }

                return _context36.abrupt("return");

              case 110:
                this.initializationMethods.reciprocalAlignment(parsed[1]).catch(function (error) {
                  if (_this7.peerData.peer || typeof parsed[1].hiddenAlias === "string") {
                    obviatePeerError(_this7.peerData.peer || parsed[1].hiddenAlias);
                    shiftNodeWeight(_this7.peerData.peer, CONFIG.constants.violationWeightPenalties.initSequenceError);
                  }

                  peerConnection.prototype.close(_this7);
                });
                return _context36.abrupt("break", 116);

              case 112:
                deauthPeer(this.peerData.hiddenAlias, false);
                return _context36.abrupt("break", 116);

              case 114:
                nonstandardParserDrain.apply(void 0, _toConsumableArray(parsed));
                return _context36.abrupt("return");

              case 116:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this, [[35, 39], [41, 45], [52, 56], [63, 67], [74, 78]]);
      }));

      function handleMessage(_x48) {
        return _handleMessage.apply(this, arguments);
      }

      return handleMessage;
    }()
  }, {
    key: "weaklyValidateMessage",
    value: function () {
      var _weaklyValidateMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(message, overrideAllowNonstandardParsers) {
        var _message$;

        var observedIncludedArgs, _iterator, _step, arg;

        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _context37.prev = 0;
                checkForTypeErrors([{
                  message: message
                }, {
                  "message[0]": message[0]
                }, {
                  "message[1]": message[1]
                }], [["object"], ["string", "number"], ["undefined", "object"]]);
                _context37.next = 7;
                break;

              case 4:
                _context37.prev = 4;
                _context37.t0 = _context37["catch"](0);
                return _context37.abrupt("return", false);

              case 7:
                if (Object.keys(CONFIG.communication.packageArgs).includes(message[0])) {
                  _context37.next = 9;
                  break;
                }

                return _context37.abrupt("return", !!(overrideAllowNonstandardParsers !== null && overrideAllowNonstandardParsers !== void 0 ? overrideAllowNonstandardParsers : CONFIG.communication.allowNonStandardParsers));

              case 9:
                observedIncludedArgs = Object.keys((_message$ = message[1]) !== null && _message$ !== void 0 ? _message$ : {});
                _iterator = _createForOfIteratorHelper(CONFIG.communication.packageArgs[message[0]].required);
                _context37.prev = 11;

                _iterator.s();

              case 13:
                if ((_step = _iterator.n()).done) {
                  _context37.next = 20;
                  break;
                }

                arg = _step.value;

                if (observedIncludedArgs.includes(arg)) {
                  _context37.next = 17;
                  break;
                }

                return _context37.abrupt("return", false);

              case 17:
                observedIncludedArgs.splice(observedIncludedArgs.indexOf(arg), 1);

              case 18:
                _context37.next = 13;
                break;

              case 20:
                _context37.next = 25;
                break;

              case 22:
                _context37.prev = 22;
                _context37.t1 = _context37["catch"](11);

                _iterator.e(_context37.t1);

              case 25:
                _context37.prev = 25;

                _iterator.f();

                return _context37.finish(25);

              case 28:
                if (CONFIG.communication.packageArgs[message[0]].optional.includes("!*")) {
                  _context37.next = 30;
                  break;
                }

                return _context37.abrupt("return", true);

              case 30:
                if (!(observedIncludedArgs.filter(function (arg) {
                  return !CONFIG.communication.packageArgs[message[0]].optional.includes(arg) && arg != "!*";
                }) == "")) {
                  _context37.next = 32;
                  break;
                }

                return _context37.abrupt("return", true);

              case 32:
                return _context37.abrupt("return", false);

              case 33:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, null, [[0, 4], [11, 22, 25, 28]]);
      }));

      function weaklyValidateMessage(_x49, _x50) {
        return _weaklyValidateMessage.apply(this, arguments);
      }

      return weaklyValidateMessage;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(peer, avoidFlounder) {
        var _peer$transport, _peer$transport$conne;

        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                checkForTypeErrors([{
                  peer: peer
                }], [["object"]]);

                if (peer.peerData) {
                  _context38.next = 3;
                  break;
                }

                return _context38.abrupt("return");

              case 3:
                if (!peer.peerData.hiddenAlias) {
                  _context38.next = 9;
                  break;
                }

                obviatePeerError(peer.peerData.hiddenAlias);
                topologyTransport.addGossip({
                  constituentHiddenAliases: [peer.peerData.hiddenAlias, CONFIG.communication.hiddenAlias],
                  mode: "removeLink"
                });
                if (authPeers.includes(peer.peerData.hiddenAlias)) deleteAuthPeer(peer.peerData.hiddenAlias);
                _context38.next = 9;
                return deleteAlias(peer.peerData.hiddenAlias);

              case 9:
                if (((_peer$transport = peer.transport) === null || _peer$transport === void 0 ? void 0 : (_peer$transport$conne = _peer$transport.connection) === null || _peer$transport$conne === void 0 ? void 0 : _peer$transport$conne.signalingState) !== "closed") {
                  peer.closed = true;
                  peer.transport.connection.close();
                }

                deleteLivePeer(peer.peerData.hiddenAlias);
                peerConnection.prototype.stabilizeLink();
                if (Object.keys(livePeers) == "" && !avoidFlounder) flounder();

              case 13:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38);
      }));

      function close(_x51, _x52) {
        return _close.apply(this, arguments);
      }

      return close;
    }()
  }, {
    key: "stabilizeLink",
    value: function () {
      var _stabilizeLink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
        var invertedDistances, target;
        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                if (!(Object.keys(livePeers).length !== 1)) {
                  _context39.next = 2;
                  break;
                }

                return _context39.abrupt("return");

              case 2:
                _context39.next = 4;
                return networkMap.precomputeRoutes(CONFIG.communication.hiddenAlias);

              case 4:
                invertedDistances = Object.keys(networkMap.distances).reduce(function (previous, key) {
                  if (previous[networkMap.distances[key]]) {
                    previous[networkMap.distances[key]].push(key);
                  } else {
                    previous[networkMap.distances[key]] = [key];
                  }

                  return previous;
                }, {});
                target = invertedDistances[Math.max.apply(Math, _toConsumableArray(Object.keys(invertedDistances)))][0];

                if (!Object.keys(livePeers).includes(target)) {
                  _context39.next = 8;
                  break;
                }

                return _context39.abrupt("return");

              case 8:
                peerConnection.prototype.makeDefiniteRoute(target);

              case 9:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39);
      }));

      function stabilizeLink() {
        return _stabilizeLink.apply(this, arguments);
      }

      return stabilizeLink;
    }()
  }, {
    key: "negotiateAgnosticAuthConnection",
    value: function () {
      var _negotiateAgnosticAuthConnection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(target) {
        return _regeneratorRuntime().wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                if (!authPeers.includes(target)) {
                  _context40.next = 2;
                  break;
                }

                return _context40.abrupt("return");

              case 2:
                if (!livePeers[target]) {
                  _context40.next = 5;
                  break;
                }

                livePeers[target].requestPermissionEscalation();
                return _context40.abrupt("return");

              case 5:
                peerConnection.prototype.makeDefiniteRoute(target, "advanced");

              case 6:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40);
      }));

      function negotiateAgnosticAuthConnection(_x53) {
        return _negotiateAgnosticAuthConnection.apply(this, arguments);
      }

      return negotiateAgnosticAuthConnection;
    }()
  }]);

  return peerConnection;
}();

function flounder() {
  return _flounder.apply(this, arguments);
}

function _flounder() {
  _flounder = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
    return _regeneratorRuntime().wrap(function _callee59$(_context60) {
      while (1) {
        switch (_context60.prev = _context60.next) {
          case 0:
            networkMap.reload();
            serverHardRestart();

          case 2:
          case "end":
            return _context60.stop();
        }
      }
    }, _callee59);
  }));
  return _flounder.apply(this, arguments);
}

var GossipTransport = /*#__PURE__*/function () {
  function GossipTransport() {
    var _this8 = this;

    _classCallCheck(this, GossipTransport);

    _defineProperty(this, "pulseIteration", 0);

    _defineProperty(this, "propogationPulse", setInterval(function () {
      for (var modulo in _this8.intervals) {
        if (_this8.pulseIterations % (modulo != "null" ? parseInt(modulo) : Infinity) === 0) {
          _this8.intervals[modulo].forEach(function (type) {
            _this8.pushToPropogationStack(type);
          });
        }
      }

      if (Object.keys[livePeers] == "") return;

      _this8.propogationStack.forEach(function (type, index) {
        _this8.propogateAll(type);

        _this8.propogationStack.splice(index, 1);
      });

      ++_this8.pulseIterations;
    }, CONFIG.communication.basicPropogationInterval));

    this.types = {};
    this.propogationStack = [];
    this.intervals = {};
    this.knownFacts = {};
    this.pulseIterations = 0;
    this.parsers = {
      default: function () {
        var _default2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(block, type, constantArgs, preliminaryVerification, canExclude) {
          var _preliminaryVerificat;

          var committable, unknown, _iterator2, _step2, _loop2, data, _ret;

          return _regeneratorRuntime().wrap(function _callee41$(_context42) {
            while (1) {
              switch (_context42.prev = _context42.next) {
                case 0:
                  preliminaryVerification = (_preliminaryVerificat = preliminaryVerification) !== null && _preliminaryVerificat !== void 0 ? _preliminaryVerificat : function () {};
                  constantArgs = constantArgs ? constantArgs : Object.keys(block[0]);
                  if (!constantArgs.includes("type")) constantArgs.push("type");
                  block.type = type;
                  committable = [];
                  unknown = [];
                  if (!_this8.knownFacts[type]) _this8.knownFacts[type] = [];
                  _iterator2 = _createForOfIteratorHelper(block);
                  _context42.prev = 8;
                  _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                    var component;
                    return _regeneratorRuntime().wrap(function _loop2$(_context41) {
                      while (1) {
                        switch (_context41.prev = _context41.next) {
                          case 0:
                            component = _step2.value;
                            data = {};
                            _context41.prev = 2;

                            if (!(preliminaryVerification.constructor.name === "AsyncFunction")) {
                              _context41.next = 8;
                              break;
                            }

                            _context41.next = 6;
                            return preliminaryVerification(component);

                          case 6:
                            _context41.next = 9;
                            break;

                          case 8:
                            preliminaryVerification(component);

                          case 9:
                            _context41.next = 14;
                            break;

                          case 11:
                            _context41.prev = 11;
                            _context41.t0 = _context41["catch"](2);
                            return _context41.abrupt("return", "continue");

                          case 14:
                            Object.keys(component).filter(function (key) {
                              return constantArgs.includes(key);
                            }).forEach(function (key) {
                              return data[key] = component[key];
                            });

                            if (!_this8.knownFacts[type].includes(JSON.stringify(data)) && Object.keys(data).length > 0) {
                              if (!_this8.types[type]) _this8.addType(type);
                              committable.push(data);
                              unknown.push(component);

                              _this8.types[type].buffer.push(component);

                              _this8.knownFacts[type].push(JSON.stringify(data));
                            }

                          case 16:
                          case "end":
                            return _context41.stop();
                        }
                      }
                    }, _loop2, null, [[2, 11]]);
                  });

                  _iterator2.s();

                case 11:
                  if ((_step2 = _iterator2.n()).done) {
                    _context42.next = 18;
                    break;
                  }

                  return _context42.delegateYield(_loop2(), "t0", 13);

                case 13:
                  _ret = _context42.t0;

                  if (!(_ret === "continue")) {
                    _context42.next = 16;
                    break;
                  }

                  return _context42.abrupt("continue", 16);

                case 16:
                  _context42.next = 11;
                  break;

                case 18:
                  _context42.next = 23;
                  break;

                case 20:
                  _context42.prev = 20;
                  _context42.t1 = _context42["catch"](8);

                  _iterator2.e(_context42.t1);

                case 23:
                  _context42.prev = 23;

                  _iterator2.f();

                  return _context42.finish(23);

                case 26:
                  return _context42.abrupt("return", [committable, unknown]);

                case 27:
                case "end":
                  return _context42.stop();
              }
            }
          }, _callee41, null, [[8, 20, 23, 26]]);
        }));

        function _default(_x54, _x55, _x56, _x57, _x58) {
          return _default2.apply(this, arguments);
        }

        return _default;
      }()
    };
  }

  _createClass(GossipTransport, [{
    key: "pushToPropogationStack",
    value: function () {
      var _pushToPropogationStack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(type) {
        var _this$types$type, _this$types$type$buff;

        return _regeneratorRuntime().wrap(function _callee42$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                checkForTypeErrors([{
                  type: type
                }], [["string"]]);

                if (((_this$types$type = this.types[type]) === null || _this$types$type === void 0 ? void 0 : (_this$types$type$buff = _this$types$type.buffer) === null || _this$types$type$buff === void 0 ? void 0 : _this$types$type$buff.length) > 0 && !this.propogationStack.includes(type)) {
                  this.propogationStack.push(type);
                }

              case 2:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee42, this);
      }));

      function pushToPropogationStack(_x59) {
        return _pushToPropogationStack.apply(this, arguments);
      }

      return pushToPropogationStack;
    }()
  }, {
    key: "addType",
    value: function addType(type, iterModulo) {
      var _iterModulo;

      checkForTypeErrors([{
        type: type
      }, {
        iterModulo: iterModulo
      }], [["string"], ["number", "undefined"]]);
      iterModulo = (_iterModulo = iterModulo) !== null && _iterModulo !== void 0 ? _iterModulo : CONFIG.constants.defaultPropagationIterMod;
      if (this.types[type]) throw new Error("cannot satisfy attempt to redefine type ".concat(type));
      var triggerFunctions = {
        addGossip: /*#__PURE__*/function () {
          var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(gossip) {
            return _regeneratorRuntime().wrap(function _callee43$(_context44) {
              while (1) {
                switch (_context44.prev = _context44.next) {
                  case 0:
                    _context44.next = 2;
                    return this.parsers[type]([gossip]);

                  case 2:
                  case "end":
                    return _context44.stop();
                }
              }
            }, _callee43, this);
          }));

          return function (_x60) {
            return _ref13.apply(this, arguments);
          };
        }().bind(this),
        remove: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
          var i;
          return _regeneratorRuntime().wrap(function _callee44$(_context45) {
            while (1) {
              switch (_context45.prev = _context45.next) {
                case 0:
                  for (i in triggerFunctions) {
                    triggerFunctions[i] = undefined;
                  }

                  delete this.types[type];
                  this.intervals = this.intervals[iterModulo].splice(this.intervals[iterModulo].indexOf(type), 1);
                  if (this.interval[iterModulo] == "") delete this.intervals[iterModulo];

                case 4:
                case "end":
                  return _context45.stop();
              }
            }
          }, _callee44, this);
        })).bind(this)
      };
      if (!this.intervals[iterModulo]) this.intervals[iterModulo] = [];
      this.intervals[iterModulo].push(type);
      this.types[type] = {
        endpoints: false,
        buffer: []
      };
      return triggerFunctions;
    }
  }, {
    key: "addParser",
    value: function () {
      var _addParser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48(type, useDefault, parserCallback, constantArgs, preliminaryVerification) {
        var pre;
        return _regeneratorRuntime().wrap(function _callee48$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                checkForTypeErrors([{
                  type: type
                }, {
                  useDefault: useDefault
                }, {
                  parserCallback: parserCallback
                }, {
                  constantArgs: constantArgs
                }, {
                  preliminaryVerification: preliminaryVerification
                }], [["string", "number"], ["boolean"], ["function"], ["object"], ["function", "undefined"]]);
                pre = useDefault ? this.parsers.default : /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
                  return _regeneratorRuntime().wrap(function _callee45$(_context46) {
                    while (1) {
                      switch (_context46.prev = _context46.next) {
                        case 0:
                          return _context46.abrupt("return", []);

                        case 1:
                        case "end":
                          return _context46.stop();
                      }
                    }
                  }, _callee45);
                }));

                this.parsers[type] = /*#__PURE__*/function () {
                  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47(block) {
                    var defaultOutput;
                    return _regeneratorRuntime().wrap(function _callee47$(_context48) {
                      while (1) {
                        switch (_context48.prev = _context48.next) {
                          case 0:
                            try {
                              checkForTypeErrors([{
                                block: block
                              }], [["object"]]);
                            } catch (_unused10) {
                              block = {};
                            }

                            _context48.prev = 1;
                            _context48.next = 4;
                            return pre(block, type, constantArgs, preliminaryVerification);

                          case 4:
                            defaultOutput = _context48.sent;
                            _context48.next = 7;
                            return (parserCallback !== null && parserCallback !== void 0 ? parserCallback : /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
                              return _regeneratorRuntime().wrap(function _callee46$(_context47) {
                                while (1) {
                                  switch (_context47.prev = _context47.next) {
                                    case 0:
                                    case "end":
                                      return _context47.stop();
                                  }
                                }
                              }, _callee46);
                            }))).apply(void 0, [block].concat(_toConsumableArray(defaultOutput)));

                          case 7:
                            return _context48.abrupt("return", _context48.sent);

                          case 10:
                            _context48.prev = 10;
                            _context48.t0 = _context48["catch"](1);
                            return _context48.abrupt("return");

                          case 13:
                          case "end":
                            return _context48.stop();
                        }
                      }
                    }, _callee47, null, [[1, 10]]);
                  }));

                  return function (_x66) {
                    return _ref16.apply(this, arguments);
                  };
                }();

                this.parsers[type].constantArgs = constantArgs;

              case 4:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee48, this);
      }));

      function addParser(_x61, _x62, _x63, _x64, _x65) {
        return _addParser.apply(this, arguments);
      }

      return addParser;
    }()
  }, {
    key: "removeParser",
    value: function () {
      var _removeParser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49(type) {
        return _regeneratorRuntime().wrap(function _callee49$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                checkForTypeErrors([{
                  type: type
                }], [["string", "number"]]);
                delete this.parsers[type];

              case 2:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee49, this);
      }));

      function removeParser(_x67) {
        return _removeParser.apply(this, arguments);
      }

      return removeParser;
    }()
  }, {
    key: "propogateAll",
    value: function () {
      var _propogateAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50(type) {
        var _this9 = this;

        var approxByteLen, chunks, i, _loop3, channel, _ret2, _channel;

        return _regeneratorRuntime().wrap(function _callee50$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                checkForTypeErrors([{
                  type: type
                }, {
                  block: this.types[type].buffer
                }], [["string", "number"], ["object"]]);

                if (Array.isArray(this.types[type].buffer)) {
                  _context51.next = 3;
                  break;
                }

                throw new TypeError("".concat(type, "'s buffer object is not of subtype array as required"));

              case 3:
                if (!(this.types[type].buffer == "")) {
                  _context51.next = 5;
                  break;
                }

                return _context51.abrupt("return");

              case 5:
                approxByteLen = new TextEncoder().encode(this.types[type].buffer).length;

                if (!(approxByteLen > 16384)) {
                  _context51.next = 20;
                  break;
                }

                chunks = [];

                for (i = 0; i < Math.ceil(approxByteLen / 16384); i++) {
                  chunks.push(this.types[type].buffer.slice(Math.ceil(this.types[type].buffer.length * 16384 / approxByteLen * i), Math.floor(this.types[type].buffer.length * 16384 / approxByteLen * (i + 1)) + 1));
                  chunks = chunks.filter(function (chunk) {
                    return chunk != "";
                  });
                }

                _loop3 = function _loop3(channel) {
                  if (!Object.keys(livePeers).includes(channel)) return "continue";
                  chunks.forEach(function (chunk) {
                    _this9.sendGossipPackage({
                      type: type,
                      block: chunk
                    }, channel);
                  });
                };

                _context51.t0 = _regeneratorRuntime().keys(this.types[type].endpoints || livePeers);

              case 11:
                if ((_context51.t1 = _context51.t0()).done) {
                  _context51.next = 18;
                  break;
                }

                channel = _context51.t1.value;
                _ret2 = _loop3(channel);

                if (!(_ret2 === "continue")) {
                  _context51.next = 16;
                  break;
                }

                return _context51.abrupt("continue", 11);

              case 16:
                _context51.next = 11;
                break;

              case 18:
                this.types[type].buffer = [];
                return _context51.abrupt("return");

              case 20:
                _context51.t2 = _regeneratorRuntime().keys(this.types[type].endpoints || livePeers);

              case 21:
                if ((_context51.t3 = _context51.t2()).done) {
                  _context51.next = 28;
                  break;
                }

                _channel = _context51.t3.value;

                if (Object.keys(livePeers).includes(_channel)) {
                  _context51.next = 25;
                  break;
                }

                return _context51.abrupt("continue", 21);

              case 25:
                this.sendGossipPackage({
                  type: type,
                  block: this.types[type].buffer
                }, _channel);
                _context51.next = 21;
                break;

              case 28:
                this.types[type].buffer = [];

              case 29:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee50, this);
      }));

      function propogateAll(_x68) {
        return _propogateAll.apply(this, arguments);
      }

      return propogateAll;
    }()
  }, {
    key: "sendGossipPackage",
    value: function () {
      var _sendGossipPackage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51(pkg, channel) {
        return _regeneratorRuntime().wrap(function _callee51$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                checkForTypeErrors([{
                  pkg: pkg
                }, {
                  channel: channel
                }], [["object"], ["string"]]);

                if (livePeers[channel]) {
                  _context52.next = 3;
                  break;
                }

                throw new Error("unable to access requested gossip endpoint ".concat(channel, ": no peer exists with this alias"));

              case 3:
                livePeers[channel].transport.channel.standardSend("gossip", pkg);

              case 4:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee51);
      }));

      function sendGossipPackage(_x69, _x70) {
        return _sendGossipPackage.apply(this, arguments);
      }

      return sendGossipPackage;
    }()
  }, {
    key: "consumeGossip",
    value: function () {
      var _consumeGossip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52(gossip) {
        return _regeneratorRuntime().wrap(function _callee52$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                checkForTypeErrors([{
                  gossip: gossip
                }], [["object"]]);

                if (this.parsers[gossip.type]) {
                  this.parsers[gossip.type](gossip.block);
                } else {
                  this.parsers.default(gossip.block, gossip.type);
                }

              case 2:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee52, this);
      }));

      function consumeGossip(_x71) {
        return _consumeGossip.apply(this, arguments);
      }

      return consumeGossip;
    }()
  }]);

  return GossipTransport;
}();

function detatchedRoute(_x72) {
  return _detatchedRoute.apply(this, arguments);
}

function _detatchedRoute() {
  _detatchedRoute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee60(destination) {
    var _livePeers$nextHop$tr;

    var nextHop,
        _len,
        content,
        _key,
        _args61 = arguments;

    return _regeneratorRuntime().wrap(function _callee60$(_context61) {
      while (1) {
        switch (_context61.prev = _context61.next) {
          case 0:
            _context61.prev = 0;
            _context61.next = 3;
            return networkMap.findNextHop(CONFIG.communication.hiddenAlias, destination);

          case 3:
            nextHop = _context61.sent;
            _context61.next = 9;
            break;

          case 6:
            _context61.prev = 6;
            _context61.t0 = _context61["catch"](0);
            return _context61.abrupt("return");

          case 9:
            for (_len = _args61.length, content = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              content[_key - 1] = _args61[_key];
            }

            (_livePeers$nextHop$tr = livePeers[nextHop].transport.channel).standardSend.apply(_livePeers$nextHop$tr, content);

          case 11:
          case "end":
            return _context61.stop();
        }
      }
    }, _callee60, null, [[0, 6]]);
  }));
  return _detatchedRoute.apply(this, arguments);
}

function primeForMapImport(_x73) {
  return _primeForMapImport.apply(this, arguments);
}

function _primeForMapImport() {
  _primeForMapImport = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee61(UID) {
    return _regeneratorRuntime().wrap(function _callee61$(_context62) {
      while (1) {
        switch (_context62.prev = _context62.next) {
          case 0:
            checkForTypeErrors([{
              UID: UID
            }], [["number", "string"]]);
            eventHandler.acquireExpectedDispatch("networkMapRecieved".concat(UID), CONFIG.communication.mapImportTimeout).catch(function () {});

          case 2:
          case "end":
            return _context62.stop();
        }
      }
    }, _callee61);
  }));
  return _primeForMapImport.apply(this, arguments);
}

function escapeHTML(data) {
  HTMLEscape.textContent = data;
  return HTMLEscape.innerHTML;
}

function parsePublicAlias(alias, hidden) {
  var _ref18, _ref19, _alias;

  alias = (_ref18 = (_ref19 = (_alias = alias) !== null && _alias !== void 0 ? _alias : CONFIG.communication.defaultUnknownPublicAlias) !== null && _ref19 !== void 0 ? _ref19 : hidden) !== null && _ref18 !== void 0 ? _ref18 : "Anonymous";
  var escaped = escapeHTML(alias);
  publicAliasTallies[escaped] = typeof publicAliasTallies[escaped] == "number" ? ++publicAliasTallies[escaped] : 0;
  return publicAliasTallies[escaped] === 0 ? escaped : "".concat(escaped, " (").concat(publicAliasTallies[escaped], ")");
}

function verifyHiddenAlias(hidden) {
  if (typeof hidden !== "string" || hidden.length != CONFIG.communication.specHiddenAliasAttributes.len || hidden.split("").filter(function (char) {
    return !CONFIG.constants.radix36Charset.includes(char);
  }) != "") throw new Error("Provided hidden alias does not conform to the delineated formatting restrictions. (".concat(typeof hidden !== "string", ", ").concat(hidden.length != CONFIG.communication.specHiddenAliasAttributes.len, ", ").concat(hidden.split("").filter(function (char) {
    return !CONFIG.constants.radix36Charset.includes(char);
  }), " on ").concat(hidden, ")"));
}

function addAlias(pub, hidden) {
  var _pub;

  if (hiddenAliasLookup[hidden]) return;
  pub = (_pub = pub) !== null && _pub !== void 0 ? _pub : undefined;
  checkForTypeErrors([{
    pub: pub
  }], [["string", "undefined"]]);
  verifyHiddenAlias(hidden);
  var parsedPub = parsePublicAlias(pub, hidden);
  pubAliasLookup[parsedPub] = hidden;
  initialReferenceLedger[hidden] = pub;
  hiddenAliasLookup[hidden] = parsedPub;
  pubAliasUnparser[parsedPub] = pub;
}

function deleteAlias(_x74) {
  return _deleteAlias.apply(this, arguments);
}

function _deleteAlias() {
  _deleteAlias = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee62(hidden) {
    var parsedPub;
    return _regeneratorRuntime().wrap(function _callee62$(_context63) {
      while (1) {
        switch (_context63.prev = _context63.next) {
          case 0:
            _context63.prev = 0;
            verifyHiddenAlias(hidden);
            _context63.next = 7;
            break;

          case 4:
            _context63.prev = 4;
            _context63.t0 = _context63["catch"](0);
            return _context63.abrupt("return");

          case 7:
            delete initialReferenceLedger[hidden];
            parsedPub = hiddenAliasLookup[hidden];
            delete hiddenAliasLookup[hidden];
            --publicAliasTallies[parsedPub];
            delete pubAliasLookup[parsedPub];
            delete pubAliasUnparser[parsedPub];

          case 13:
          case "end":
            return _context63.stop();
        }
      }
    }, _callee62, null, [[0, 4]]);
  }));
  return _deleteAlias.apply(this, arguments);
}

function makeServerLink(_x75) {
  return _makeServerLink.apply(this, arguments);
}

function _makeServerLink() {
  _makeServerLink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee65(isReconnect) {
    var instanceSDPFailures, unparsedAddress, server, linkPeer, offer, alertError, addressComponents;
    return _regeneratorRuntime().wrap(function _callee65$(_context66) {
      while (1) {
        switch (_context66.prev = _context66.next) {
          case 0:
            instanceSDPFailures = 0;

            if (isReconnect) {
              _context66.next = 20;
              break;
            }

            linkPeer = new peerConnection();
            _context66.prev = 3;
            _context66.next = 6;
            return linkPeer.makeOffer();

          case 6:
            offer = _context66.sent;
            _context66.next = 13;
            break;

          case 9:
            _context66.prev = 9;
            _context66.t0 = _context66["catch"](3);
            alertError = new Error("Error: ".concat(_context66.t0, " in offer process with basic timeout set to ").concat(CONFIG.rtc.ICEGatheringMaxLatency));
            publicError(alertError.message, alertError.stack);

          case 13:
            unparsedAddress = CONFIG.serverLink.initBindURL;
            addressComponents = unparsedAddress.split("*");

            if (!(addressComponents[1] === undefined)) {
              _context66.next = 17;
              break;
            }

            throw new Error("no viable SDP insertion point in the provided server URL : ".concat(unparsedAddress));

          case 17:
            server = new WebSocket([addressComponents[0], encodeURIComponent(btoa(JSON.stringify(offer))), addressComponents[1]].join(""));
            _context66.next = 22;
            break;

          case 20:
            unparsedAddress = CONFIG.serverLink.reconnectURL;
            server = new WebSocket(unparsedAddress);

          case 22:
            server.onclose = function () {
              if (server.intentionalClose) return;
              setTimeout(function () {
                makeServerLink(livePeers != "");
              }, CONFIG.serverLink.reconnectInterval);
            };

            server.onmessage = /*#__PURE__*/function () {
              var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee63(event) {
                var message, _error, error, connection, SDP;

                return _regeneratorRuntime().wrap(function _callee63$(_context64) {
                  while (1) {
                    switch (_context64.prev = _context64.next) {
                      case 0:
                        server.crudeSend("heartbeat");
                        message = JSON.parse(event.data);
                        _context64.t0 = message[0];
                        _context64.next = _context64.t0 === "heartbeat" ? 5 : _context64.t0 === "provideSDP" ? 6 : _context64.t0 === "ERROR" ? 20 : _context64.t0 === "requestSDP" ? 23 : 37;
                        break;

                      case 5:
                        return _context64.abrupt("return");

                      case 6:
                        if (!(message[1] === "unresolved")) {
                          _context64.next = 9;
                          break;
                        }

                        peerConnection.prototype.close(linkPeer, true);
                        return _context64.abrupt("return");

                      case 9:
                        _context64.prev = 9;
                        _context64.next = 12;
                        return linkPeer.receiveAnswer(message[1]);

                      case 12:
                        _context64.next = 19;
                        break;

                      case 14:
                        _context64.prev = 14;
                        _context64.t1 = _context64["catch"](9);
                        ++instanceSDPFailures;

                        if (instanceSDPFailures >= 3) {
                          _error = new Error("Experieneced three consequent violations of SDP formatting protocol; ceasing attempt loop.");
                          publicError(_error.stack);
                        }

                        server.crudeSend("reportNode", {
                          nodeID: message[3]
                        });

                      case 19:
                        return _context64.abrupt("break", 37);

                      case 20:
                        error = new Error("The specified routing server experienced an unidentified internal error in the process of connection : ".concat(unparsedAddress));
                        publicError(error, error.stack);
                        return _context64.abrupt("break", 37);

                      case 23:
                        connection = new peerConnection();
                        _context64.prev = 24;
                        _context64.next = 27;
                        return connection.receiveOffer(JSON.parse(atob(message[1])));

                      case 27:
                        SDP = _context64.sent;
                        _context64.next = 35;
                        break;

                      case 30:
                        _context64.prev = 30;
                        _context64.t2 = _context64["catch"](24);
                        connection.transport.connection.close();
                        server.crudeSend("ignoreSDPRequest", {
                          reciprocalID: message[2]
                        });
                        return _context64.abrupt("return");

                      case 35:
                        server.crudeSend("returnSDP", {
                          SDP: JSON.stringify(SDP),
                          reciprocalID: message[2]
                        });
                        return _context64.abrupt("break", 37);

                      case 37:
                      case "end":
                        return _context64.stop();
                    }
                  }
                }, _callee63, null, [[9, 14], [24, 30]]);
              }));

              return function (_x86) {
                return _ref20.apply(this, arguments);
              };
            }();

            return _context66.abrupt("return", serverHardRestart = /*#__PURE__*/function () {
              var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
                return _regeneratorRuntime().wrap(function _callee64$(_context65) {
                  while (1) {
                    switch (_context65.prev = _context65.next) {
                      case 0:
                        server.intentionalClose = true;
                        server.close();
                        _context65.next = 4;
                        return makeServerLink();

                      case 4:
                      case "end":
                        return _context65.stop();
                    }
                  }
                }, _callee64);
              }));

              return function serverHardRestart() {
                return _ref21.apply(this, arguments);
              };
            }());

          case 25:
          case "end":
            return _context66.stop();
        }
      }
    }, _callee65, null, [[3, 9]]);
  }));
  return _makeServerLink.apply(this, arguments);
}

function init() {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee70() {
    return _regeneratorRuntime().wrap(function _callee70$(_context71) {
      while (1) {
        switch (_context71.prev = _context71.next) {
          case 0:
            _context71.next = 2;
            return loadConfig(defaultConfig, defaultConfig.constants.configLoadFunction);

          case 2:
            eventHandler.dispatch("configLoaded");
            _context71.next = 5;
            return makeServerLink();

          case 5:
            gossipTransport = new GossipTransport();
            topologyTransport = gossipTransport.addType("topology");
            routingTableTransport = gossipTransport.addType("weight", 100);
            gossipTransport.addParser("topology", true, /*#__PURE__*/function () {
              var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee66(_, committable) {
                var removeNegated;
                return _regeneratorRuntime().wrap(function _callee66$(_context67) {
                  while (1) {
                    switch (_context67.prev = _context67.next) {
                      case 0:
                        removeNegated = function removeNegated(negated) {
                          var inverseIndex = gossipTransport.knownFacts[negated.type] ? gossipTransport.knownFacts[negated.type].indexOf(JSON.stringify(negated)) : -1;

                          if (inverseIndex !== -1) {
                            gossipTransport.knownFacts[negated.type].splice(inverseIndex, 1);
                          }
                        };

                        committable.forEach(function (modification) {
                          var negated = JSON.parse(JSON.stringify(modification));

                          switch (modification.mode) {
                            case "addLink":
                              negated.mode = "removeLink";

                              try {
                                modification.constituentHiddenAliases.forEach(function (alias, index) {
                                  if (!Object.keys(networkMap.nodes).includes(alias)) {
                                    if (!hiddenAliasLookup[alias]) addAlias(modification.correspondingPublicAliases[index], alias);
                                    networkMap.addNode(alias);
                                  }
                                });
                              } catch (_unused14) {
                                return;
                              }

                              removeNegated(negated);
                              networkMap.addEdge(modification.constituentHiddenAliases[0], modification.constituentHiddenAliases[1]);
                              break;

                            case "removeLink":
                              negated.mode = "addLink";
                              removeNegated(negated);
                              networkMap.removeEdge(modification.constituentHiddenAliases[0], modification.constituentHiddenAliases[1]);
                              modification.constituentHiddenAliases.forEach(function (alias) {
                                var _networkMap$adjacency;

                                if (!networkMap.adjacencyList[alias]) {
                                  return;
                                }

                                if (Object.keys((_networkMap$adjacency = networkMap.adjacencyList[alias]) !== null && _networkMap$adjacency !== void 0 ? _networkMap$adjacency : {}) == "") {
                                  networkMap.removeNode(alias);
                                  deleteAlias(alias);
                                }
                              });
                              break;
                          }
                        });

                      case 2:
                      case "end":
                        return _context67.stop();
                    }
                  }
                }, _callee66);
              }));

              return function (_x87, _x88) {
                return _ref22.apply(this, arguments);
              };
            }(), ["constituentHiddenAliases", "correspondingPublicAliases", "mode"], /*#__PURE__*/function () {
              var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee67(component) {
                var _component$constituen, _component$correspond;

                var originalOrder;
                return _regeneratorRuntime().wrap(function _callee67$(_context68) {
                  while (1) {
                    switch (_context68.prev = _context68.next) {
                      case 0:
                        if (!(component.mode !== "addLink" && component.mode !== "removeLink")) {
                          _context68.next = 2;
                          break;
                        }

                        throw new Error("No mode \"".concat(component.mode, " has been defined by the current parser"));

                      case 2:
                        if (((_component$constituen = component.constituentHiddenAliases) === null || _component$constituen === void 0 ? void 0 : _component$constituen.length) === 2 && (component.mode === "addLink" ? ((_component$correspond = component.correspondingPublicAliases) === null || _component$correspond === void 0 ? void 0 : _component$correspond.length) === 2 : true)) {
                          _context68.next = 4;
                          break;
                        }

                        throw new Error("Component does not contain the necessary parity or form of constituentHiddenAliases and correspondingPublicAliases for its mode (".concat(component.mode, ")"));

                      case 4:
                        if (component.mode === "addLink") {
                          originalOrder = component.constituentHiddenAliases + "";
                          component.constituentHiddenAliases = component.constituentHiddenAliases.sort();

                          if (originalOrder != component.constituentHiddenAliases + "") {
                            component.correspondingPublicAliases.reverse();
                          }
                        }

                      case 5:
                      case "end":
                        return _context68.stop();
                    }
                  }
                }, _callee67);
              }));

              return function (_x89) {
                return _ref23.apply(this, arguments);
              };
            }(), ["correspondingPublicAliases"]);
            gossipTransport.addParser("weight", true, /*#__PURE__*/function () {
              var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee68(_, committable) {
                return _regeneratorRuntime().wrap(function _callee68$(_context69) {
                  while (1) {
                    switch (_context69.prev = _context69.next) {
                      case 0:
                        committable.forEach(function (modification) {
                          if (networkMap.nodes[modification.alias]) networkMap.setweight(modification.alias, networkMap.nodes[modification.alias].weight + modification.weightModification);
                        });

                      case 1:
                      case "end":
                        return _context69.stop();
                    }
                  }
                }, _callee68);
              }));

              return function (_x90, _x91) {
                return _ref24.apply(this, arguments);
              };
            }(), ["alias", "weightModification", "occurenceID"], /*#__PURE__*/function () {
              var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee69(component) {
                return _regeneratorRuntime().wrap(function _callee69$(_context70) {
                  while (1) {
                    switch (_context70.prev = _context70.next) {
                      case 0:
                        checkForTypeErrors([{
                          "modification.alias": component.alias
                        }, {
                          "modification.weightModification": component.weightModification
                        }, {
                          "modification.occurenceID": component.occurenceID
                        }], [["string"], ["number"], ["string"]]);

                      case 1:
                      case "end":
                        return _context70.stop();
                    }
                  }
                }, _callee69);
              }));

              return function (_x92) {
                return _ref25.apply(this, arguments);
              };
            }());

          case 10:
          case "end":
            return _context71.stop();
        }
      }
    }, _callee70);
  }));
  return _init.apply(this, arguments);
}

function checkForTypeErrors(requiredArgs, expectedTypes) {
  var mistyped = requiredArgs.filter(function (argumentObj, index) {
    return expectedTypes[index] ? !expectedTypes[index].includes(_typeof(Object.values(argumentObj)[0])) : false;
  });

  if (mistyped != "") {
    throw new TypeError("expected the argument \"".concat(Object.keys(mistyped[0])[0], "\" to be of one of the following types: ").concat(expectedTypes[requiredArgs.map(function (obj) {
      return Object.keys(obj)[0];
    }).indexOf(Object.keys(mistyped[0])[0])].reduce(function (previous, current, index, array) {
      return previous + current + (array.length > 1 && index !== array.length - 1 ? index === array.length - 2 ? " or " : ", " : "");
    }, ""), "; got ").concat(_typeof(Object.values(mistyped[0])[0])));
  }
}

init();

function shiftNodeWeight(_x76, _x77) {
  return _shiftNodeWeight.apply(this, arguments);
}

function _shiftNodeWeight() {
  _shiftNodeWeight = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee71(alias, weightModification) {
    return _regeneratorRuntime().wrap(function _callee71$(_context72) {
      while (1) {
        switch (_context72.prev = _context72.next) {
          case 0:
            routingTableTransport.addGossip({
              alias: alias,
              weightModification: weightModification,
              occurenceID: Math.random().toString().slice(2, 12)
            });

          case 1:
          case "end":
            return _context72.stop();
        }
      }
    }, _callee71);
  }));
  return _shiftNodeWeight.apply(this, arguments);
}

function announceAuthRejected(_x78) {
  return _announceAuthRejected.apply(this, arguments);
}

function _announceAuthRejected() {
  _announceAuthRejected = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee72(destination) {
    return _regeneratorRuntime().wrap(function _callee72$(_context73) {
      while (1) {
        switch (_context73.prev = _context73.next) {
          case 0:
            eventHandler.dispatch("authPeerRejected", destination);

          case 1:
          case "end":
            return _context73.stop();
        }
      }
    }, _callee72);
  }));
  return _announceAuthRejected.apply(this, arguments);
}

function onAuthRejected(_x79) {
  return _onAuthRejected.apply(this, arguments);
}

function _onAuthRejected() {
  _onAuthRejected = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee73(callback) {
    return _regeneratorRuntime().wrap(function _callee73$(_context74) {
      while (1) {
        switch (_context74.prev = _context74.next) {
          case 0:
            eventHandler.onReceipt("authPeerRejected", callback);

          case 1:
          case "end":
            return _context74.stop();
        }
      }
    }, _callee73);
  }));
  return _onAuthRejected.apply(this, arguments);
}

function publicError(_x80, _x81) {
  return _publicError.apply(this, arguments);
}

function _publicError() {
  _publicError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee74(message, stack) {
    return _regeneratorRuntime().wrap(function _callee74$(_context75) {
      while (1) {
        switch (_context75.prev = _context75.next) {
          case 0:
            eventHandler.dispatch("fatalError", [message, stack]);

          case 1:
          case "end":
            return _context75.stop();
        }
      }
    }, _callee74);
  }));
  return _publicError.apply(this, arguments);
}

function onPublicError(_x82) {
  return _onPublicError.apply(this, arguments);
}

function _onPublicError() {
  _onPublicError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee75(callback) {
    return _regeneratorRuntime().wrap(function _callee75$(_context76) {
      while (1) {
        switch (_context76.prev = _context76.next) {
          case 0:
            eventHandler.onReceipt("fatalError", callback);

          case 1:
          case "end":
            return _context76.stop();
        }
      }
    }, _callee75);
  }));
  return _onPublicError.apply(this, arguments);
}

function nonstandardParserDrain(_x83, _x84) {
  return _nonstandardParserDrain.apply(this, arguments);
}

function _nonstandardParserDrain() {
  _nonstandardParserDrain = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee76(type, args) {
    return _regeneratorRuntime().wrap(function _callee76$(_context77) {
      while (1) {
        switch (_context77.prev = _context77.next) {
          case 0:
          case "end":
            return _context77.stop();
        }
      }
    }, _callee76);
  }));
  return _nonstandardParserDrain.apply(this, arguments);
}

function indicateRouteAccepted(node) {
  blinkStatus("success", node);
}

function obviatePeerError(_x85) {
  return _obviatePeerError.apply(this, arguments);
}

function _obviatePeerError() {
  _obviatePeerError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee77(node) {
    return _regeneratorRuntime().wrap(function _callee77$(_context78) {
      while (1) {
        switch (_context78.prev = _context78.next) {
          case 0:
            blinkStatus("error", node);

          case 1:
          case "end":
            return _context78.stop();
        }
      }
    }, _callee77);
  }));
  return _obviatePeerError.apply(this, arguments);
}