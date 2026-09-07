function km(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Mo = { exports: {} }, xi = {};
var tm;
function Zg() {
  if (tm) return xi;
  tm = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function u(o, f, h) {
    var m = null;
    if (h !== void 0 && (m = "" + h), f.key !== void 0 && (m = "" + f.key), "key" in f) {
      h = {};
      for (var y in f)
        y !== "key" && (h[y] = f[y]);
    } else h = f;
    return f = h.ref, {
      $$typeof: i,
      type: o,
      key: m,
      ref: f !== void 0 ? f : null,
      props: h
    };
  }
  return xi.Fragment = r, xi.jsx = u, xi.jsxs = u, xi;
}
var nm;
function Qg() {
  return nm || (nm = 1, Mo.exports = Zg()), Mo.exports;
}
var d = Qg(), Ro = { exports: {} }, fe = {};
var lm;
function Vg() {
  if (lm) return fe;
  lm = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), m = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), x = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), z = Symbol.iterator;
  function R(E) {
    return E === null || typeof E != "object" ? null : (E = z && E[z] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var Z = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, q = Object.assign, A = {};
  function Q(E, B, K) {
    this.props = E, this.context = B, this.refs = A, this.updater = K || Z;
  }
  Q.prototype.isReactComponent = {}, Q.prototype.setState = function(E, B) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, B, "setState");
  }, Q.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function V() {
  }
  V.prototype = Q.prototype;
  function G(E, B, K) {
    this.props = E, this.context = B, this.refs = A, this.updater = K || Z;
  }
  var W = G.prototype = new V();
  W.constructor = G, q(W, Q.prototype), W.isPureReactComponent = !0;
  var O = Array.isArray;
  function _() {
  }
  var M = { H: null, A: null, T: null, S: null }, L = Object.prototype.hasOwnProperty;
  function F(E, B, K) {
    var I = K.ref;
    return {
      $$typeof: i,
      type: E,
      key: B,
      ref: I !== void 0 ? I : null,
      props: K
    };
  }
  function ae(E, B) {
    return F(E.type, B, E.props);
  }
  function ie(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function we(E) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(K) {
      return B[K];
    });
  }
  var Ne = /\/+/g;
  function ke(E, B) {
    return typeof E == "object" && E !== null && E.key != null ? we("" + E.key) : B.toString(36);
  }
  function ze(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(_, _) : (E.status = "pending", E.then(
          function(B) {
            E.status === "pending" && (E.status = "fulfilled", E.value = B);
          },
          function(B) {
            E.status === "pending" && (E.status = "rejected", E.reason = B);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function H(E, B, K, I, oe) {
    var ue = typeof E;
    (ue === "undefined" || ue === "boolean") && (E = null);
    var pe = !1;
    if (E === null) pe = !0;
    else
      switch (ue) {
        case "bigint":
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case r:
              pe = !0;
              break;
            case x:
              return pe = E._init, H(
                pe(E._payload),
                B,
                K,
                I,
                oe
              );
          }
      }
    if (pe)
      return oe = oe(E), pe = I === "" ? "." + ke(E, 0) : I, O(oe) ? (K = "", pe != null && (K = pe.replace(Ne, "$&/") + "/"), H(oe, B, K, "", function(ge) {
        return ge;
      })) : oe != null && (ie(oe) && (oe = ae(
        oe,
        K + (oe.key == null || E && E.key === oe.key ? "" : ("" + oe.key).replace(
          Ne,
          "$&/"
        ) + "/") + pe
      )), B.push(oe)), 1;
    pe = 0;
    var Oe = I === "" ? "." : I + ":";
    if (O(E))
      for (var je = 0; je < E.length; je++)
        I = E[je], ue = Oe + ke(I, je), pe += H(
          I,
          B,
          K,
          ue,
          oe
        );
    else if (je = R(E), typeof je == "function")
      for (E = je.call(E), je = 0; !(I = E.next()).done; )
        I = I.value, ue = Oe + ke(I, je++), pe += H(
          I,
          B,
          K,
          ue,
          oe
        );
    else if (ue === "object") {
      if (typeof E.then == "function")
        return H(
          ze(E),
          B,
          K,
          I,
          oe
        );
      throw B = String(E), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return pe;
  }
  function $(E, B, K) {
    if (E == null) return E;
    var I = [], oe = 0;
    return H(E, I, "", "", function(ue) {
      return B.call(K, ue, oe++);
    }), I;
  }
  function te(E) {
    if (E._status === -1) {
      var B = E._result;
      B = B(), B.then(
        function(K) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = K);
        },
        function(K) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = K);
        }
      ), E._status === -1 && (E._status = 0, E._result = B);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var se = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  }, ve = {
    map: $,
    forEach: function(E, B, K) {
      $(
        E,
        function() {
          B.apply(this, arguments);
        },
        K
      );
    },
    count: function(E) {
      var B = 0;
      return $(E, function() {
        B++;
      }), B;
    },
    toArray: function(E) {
      return $(E, function(B) {
        return B;
      }) || [];
    },
    only: function(E) {
      if (!ie(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return fe.Activity = b, fe.Children = ve, fe.Component = Q, fe.Fragment = u, fe.Profiler = f, fe.PureComponent = G, fe.StrictMode = o, fe.Suspense = g, fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M, fe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return M.H.useMemoCache(E);
    }
  }, fe.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, fe.cacheSignal = function() {
    return null;
  }, fe.cloneElement = function(E, B, K) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var I = q({}, E.props), oe = E.key;
    if (B != null)
      for (ue in B.key !== void 0 && (oe = "" + B.key), B)
        !L.call(B, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && B.ref === void 0 || (I[ue] = B[ue]);
    var ue = arguments.length - 2;
    if (ue === 1) I.children = K;
    else if (1 < ue) {
      for (var pe = Array(ue), Oe = 0; Oe < ue; Oe++)
        pe[Oe] = arguments[Oe + 2];
      I.children = pe;
    }
    return F(E.type, oe, I);
  }, fe.createContext = function(E) {
    return E = {
      $$typeof: m,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: h,
      _context: E
    }, E;
  }, fe.createElement = function(E, B, K) {
    var I, oe = {}, ue = null;
    if (B != null)
      for (I in B.key !== void 0 && (ue = "" + B.key), B)
        L.call(B, I) && I !== "key" && I !== "__self" && I !== "__source" && (oe[I] = B[I]);
    var pe = arguments.length - 2;
    if (pe === 1) oe.children = K;
    else if (1 < pe) {
      for (var Oe = Array(pe), je = 0; je < pe; je++)
        Oe[je] = arguments[je + 2];
      oe.children = Oe;
    }
    if (E && E.defaultProps)
      for (I in pe = E.defaultProps, pe)
        oe[I] === void 0 && (oe[I] = pe[I]);
    return F(E, ue, oe);
  }, fe.createRef = function() {
    return { current: null };
  }, fe.forwardRef = function(E) {
    return { $$typeof: y, render: E };
  }, fe.isValidElement = ie, fe.lazy = function(E) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: E },
      _init: te
    };
  }, fe.memo = function(E, B) {
    return {
      $$typeof: v,
      type: E,
      compare: B === void 0 ? null : B
    };
  }, fe.startTransition = function(E) {
    var B = M.T, K = {};
    M.T = K;
    try {
      var I = E(), oe = M.S;
      oe !== null && oe(K, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(_, se);
    } catch (ue) {
      se(ue);
    } finally {
      B !== null && K.types !== null && (B.types = K.types), M.T = B;
    }
  }, fe.unstable_useCacheRefresh = function() {
    return M.H.useCacheRefresh();
  }, fe.use = function(E) {
    return M.H.use(E);
  }, fe.useActionState = function(E, B, K) {
    return M.H.useActionState(E, B, K);
  }, fe.useCallback = function(E, B) {
    return M.H.useCallback(E, B);
  }, fe.useContext = function(E) {
    return M.H.useContext(E);
  }, fe.useDebugValue = function() {
  }, fe.useDeferredValue = function(E, B) {
    return M.H.useDeferredValue(E, B);
  }, fe.useEffect = function(E, B) {
    return M.H.useEffect(E, B);
  }, fe.useEffectEvent = function(E) {
    return M.H.useEffectEvent(E);
  }, fe.useId = function() {
    return M.H.useId();
  }, fe.useImperativeHandle = function(E, B, K) {
    return M.H.useImperativeHandle(E, B, K);
  }, fe.useInsertionEffect = function(E, B) {
    return M.H.useInsertionEffect(E, B);
  }, fe.useLayoutEffect = function(E, B) {
    return M.H.useLayoutEffect(E, B);
  }, fe.useMemo = function(E, B) {
    return M.H.useMemo(E, B);
  }, fe.useOptimistic = function(E, B) {
    return M.H.useOptimistic(E, B);
  }, fe.useReducer = function(E, B, K) {
    return M.H.useReducer(E, B, K);
  }, fe.useRef = function(E) {
    return M.H.useRef(E);
  }, fe.useState = function(E) {
    return M.H.useState(E);
  }, fe.useSyncExternalStore = function(E, B, K) {
    return M.H.useSyncExternalStore(
      E,
      B,
      K
    );
  }, fe.useTransition = function() {
    return M.H.useTransition();
  }, fe.version = "19.2.8", fe;
}
var am;
function es() {
  return am || (am = 1, Ro.exports = Vg()), Ro.exports;
}
var C = es();
const Qe = /* @__PURE__ */ km(C);
var Oo = { exports: {} }, Si = {}, Uo = { exports: {} }, Ho = {};
var im;
function Kg() {
  return im || (im = 1, (function(i) {
    function r(H, $) {
      var te = H.length;
      H.push($);
      e: for (; 0 < te; ) {
        var se = te - 1 >>> 1, ve = H[se];
        if (0 < f(ve, $))
          H[se] = $, H[te] = ve, te = se;
        else break e;
      }
    }
    function u(H) {
      return H.length === 0 ? null : H[0];
    }
    function o(H) {
      if (H.length === 0) return null;
      var $ = H[0], te = H.pop();
      if (te !== $) {
        H[0] = te;
        e: for (var se = 0, ve = H.length, E = ve >>> 1; se < E; ) {
          var B = 2 * (se + 1) - 1, K = H[B], I = B + 1, oe = H[I];
          if (0 > f(K, te))
            I < ve && 0 > f(oe, K) ? (H[se] = oe, H[I] = te, se = I) : (H[se] = K, H[B] = te, se = B);
          else if (I < ve && 0 > f(oe, te))
            H[se] = oe, H[I] = te, se = I;
          else break e;
        }
      }
      return $;
    }
    function f(H, $) {
      var te = H.sortIndex - $.sortIndex;
      return te !== 0 ? te : H.id - $.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var m = Date, y = m.now();
      i.unstable_now = function() {
        return m.now() - y;
      };
    }
    var g = [], v = [], x = 1, b = null, z = 3, R = !1, Z = !1, q = !1, A = !1, Q = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    function W(H) {
      for (var $ = u(v); $ !== null; ) {
        if ($.callback === null) o(v);
        else if ($.startTime <= H)
          o(v), $.sortIndex = $.expirationTime, r(g, $);
        else break;
        $ = u(v);
      }
    }
    function O(H) {
      if (q = !1, W(H), !Z)
        if (u(g) !== null)
          Z = !0, _ || (_ = !0, we());
        else {
          var $ = u(v);
          $ !== null && ze(O, $.startTime - H);
        }
    }
    var _ = !1, M = -1, L = 5, F = -1;
    function ae() {
      return A ? !0 : !(i.unstable_now() - F < L);
    }
    function ie() {
      if (A = !1, _) {
        var H = i.unstable_now();
        F = H;
        var $ = !0;
        try {
          e: {
            Z = !1, q && (q = !1, V(M), M = -1), R = !0;
            var te = z;
            try {
              t: {
                for (W(H), b = u(g); b !== null && !(b.expirationTime > H && ae()); ) {
                  var se = b.callback;
                  if (typeof se == "function") {
                    b.callback = null, z = b.priorityLevel;
                    var ve = se(
                      b.expirationTime <= H
                    );
                    if (H = i.unstable_now(), typeof ve == "function") {
                      b.callback = ve, W(H), $ = !0;
                      break t;
                    }
                    b === u(g) && o(g), W(H);
                  } else o(g);
                  b = u(g);
                }
                if (b !== null) $ = !0;
                else {
                  var E = u(v);
                  E !== null && ze(
                    O,
                    E.startTime - H
                  ), $ = !1;
                }
              }
              break e;
            } finally {
              b = null, z = te, R = !1;
            }
            $ = void 0;
          }
        } finally {
          $ ? we() : _ = !1;
        }
      }
    }
    var we;
    if (typeof G == "function")
      we = function() {
        G(ie);
      };
    else if (typeof MessageChannel < "u") {
      var Ne = new MessageChannel(), ke = Ne.port2;
      Ne.port1.onmessage = ie, we = function() {
        ke.postMessage(null);
      };
    } else
      we = function() {
        Q(ie, 0);
      };
    function ze(H, $) {
      M = Q(function() {
        H(i.unstable_now());
      }, $);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, i.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : L = 0 < H ? Math.floor(1e3 / H) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, i.unstable_next = function(H) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = z;
      }
      var te = z;
      z = $;
      try {
        return H();
      } finally {
        z = te;
      }
    }, i.unstable_requestPaint = function() {
      A = !0;
    }, i.unstable_runWithPriority = function(H, $) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var te = z;
      z = H;
      try {
        return $();
      } finally {
        z = te;
      }
    }, i.unstable_scheduleCallback = function(H, $, te) {
      var se = i.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? se + te : se) : te = se, H) {
        case 1:
          var ve = -1;
          break;
        case 2:
          ve = 250;
          break;
        case 5:
          ve = 1073741823;
          break;
        case 4:
          ve = 1e4;
          break;
        default:
          ve = 5e3;
      }
      return ve = te + ve, H = {
        id: x++,
        callback: $,
        priorityLevel: H,
        startTime: te,
        expirationTime: ve,
        sortIndex: -1
      }, te > se ? (H.sortIndex = te, r(v, H), u(g) === null && H === u(v) && (q ? (V(M), M = -1) : q = !0, ze(O, te - se))) : (H.sortIndex = ve, r(g, H), Z || R || (Z = !0, _ || (_ = !0, we()))), H;
    }, i.unstable_shouldYield = ae, i.unstable_wrapCallback = function(H) {
      var $ = z;
      return function() {
        var te = z;
        z = $;
        try {
          return H.apply(this, arguments);
        } finally {
          z = te;
        }
      };
    };
  })(Ho)), Ho;
}
var um;
function Jg() {
  return um || (um = 1, Uo.exports = Kg()), Uo.exports;
}
var Bo = { exports: {} }, xt = {};
var cm;
function $g() {
  if (cm) return xt;
  cm = 1;
  var i = es();
  function r(g) {
    var v = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        v += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + g + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var o = {
    d: {
      f: u,
      r: function() {
        throw Error(r(522));
      },
      D: u,
      C: u,
      L: u,
      m: u,
      X: u,
      S: u,
      M: u
    },
    p: 0,
    findDOMNode: null
  }, f = /* @__PURE__ */ Symbol.for("react.portal");
  function h(g, v, x) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: v,
      implementation: x
    };
  }
  var m = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(g, v) {
    if (g === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, xt.createPortal = function(g, v) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(r(299));
    return h(g, v, null, x);
  }, xt.flushSync = function(g) {
    var v = m.T, x = o.p;
    try {
      if (m.T = null, o.p = 2, g) return g();
    } finally {
      m.T = v, o.p = x, o.d.f();
    }
  }, xt.preconnect = function(g, v) {
    typeof g == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, o.d.C(g, v));
  }, xt.prefetchDNS = function(g) {
    typeof g == "string" && o.d.D(g);
  }, xt.preinit = function(g, v) {
    if (typeof g == "string" && v && typeof v.as == "string") {
      var x = v.as, b = y(x, v.crossOrigin), z = typeof v.integrity == "string" ? v.integrity : void 0, R = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      x === "style" ? o.d.S(
        g,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: b,
          integrity: z,
          fetchPriority: R
        }
      ) : x === "script" && o.d.X(g, {
        crossOrigin: b,
        integrity: z,
        fetchPriority: R,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, xt.preinitModule = function(g, v) {
    if (typeof g == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var x = y(
            v.as,
            v.crossOrigin
          );
          o.d.M(g, {
            crossOrigin: x,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && o.d.M(g);
  }, xt.preload = function(g, v) {
    if (typeof g == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var x = v.as, b = y(x, v.crossOrigin);
      o.d.L(g, x, {
        crossOrigin: b,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, xt.preloadModule = function(g, v) {
    if (typeof g == "string")
      if (v) {
        var x = y(v.as, v.crossOrigin);
        o.d.m(g, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: x,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else o.d.m(g);
  }, xt.requestFormReset = function(g) {
    o.d.r(g);
  }, xt.unstable_batchedUpdates = function(g, v) {
    return g(v);
  }, xt.useFormState = function(g, v, x) {
    return m.H.useFormState(g, v, x);
  }, xt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, xt.version = "19.2.8", xt;
}
var rm;
function qm() {
  if (rm) return Bo.exports;
  rm = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), Bo.exports = $g(), Bo.exports;
}
var om;
function Wg() {
  if (om) return Si;
  om = 1;
  var i = Jg(), r = es(), u = qm();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function h(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function m(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (h(e) !== e)
      throw Error(o(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var c = a.alternate;
      if (c === null) {
        if (l = a.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (a.child === c.child) {
        for (c = a.child; c; ) {
          if (c === n) return g(a), e;
          if (c === l) return g(a), t;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== l.return) n = a, l = c;
      else {
        for (var s = !1, p = a.child; p; ) {
          if (p === n) {
            s = !0, n = a, l = c;
            break;
          }
          if (p === l) {
            s = !0, l = a, n = c;
            break;
          }
          p = p.sibling;
        }
        if (!s) {
          for (p = c.child; p; ) {
            if (p === n) {
              s = !0, n = c, l = a;
              break;
            }
            if (p === l) {
              s = !0, l = c, n = a;
              break;
            }
            p = p.sibling;
          }
          if (!s) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function x(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = x(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, z = /* @__PURE__ */ Symbol.for("react.element"), R = /* @__PURE__ */ Symbol.for("react.transitional.element"), Z = /* @__PURE__ */ Symbol.for("react.portal"), q = /* @__PURE__ */ Symbol.for("react.fragment"), A = /* @__PURE__ */ Symbol.for("react.strict_mode"), Q = /* @__PURE__ */ Symbol.for("react.profiler"), V = /* @__PURE__ */ Symbol.for("react.consumer"), G = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), O = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.suspense_list"), M = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), F = /* @__PURE__ */ Symbol.for("react.activity"), ae = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ie = Symbol.iterator;
  function we(e) {
    return e === null || typeof e != "object" ? null : (e = ie && e[ie] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ne = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ke(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ne ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case q:
        return "Fragment";
      case Q:
        return "Profiler";
      case A:
        return "StrictMode";
      case O:
        return "Suspense";
      case _:
        return "SuspenseList";
      case F:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Z:
          return "Portal";
        case G:
          return e.displayName || "Context";
        case V:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case M:
          return t = e.displayName || null, t !== null ? t : ke(e.type) || "Memo";
        case L:
          t = e._payload, e = e._init;
          try {
            return ke(e(t));
          } catch {
          }
      }
    return null;
  }
  var ze = Array.isArray, H = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, se = [], ve = -1;
  function E(e) {
    return { current: e };
  }
  function B(e) {
    0 > ve || (e.current = se[ve], se[ve] = null, ve--);
  }
  function K(e, t) {
    ve++, se[ve] = e.current, e.current = t;
  }
  var I = E(null), oe = E(null), ue = E(null), pe = E(null);
  function Oe(e, t) {
    switch (K(ue, t), K(oe, e), K(I, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? wh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = wh(t), e = zh(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    B(I), K(I, e);
  }
  function je() {
    B(I), B(oe), B(ue);
  }
  function ge(e) {
    e.memoizedState !== null && K(pe, e);
    var t = I.current, n = zh(t, e.type);
    t !== n && (K(oe, e), K(I, n));
  }
  function J(e) {
    oe.current === e && (B(I), B(oe)), pe.current === e && (B(pe), vi._currentValue = te);
  }
  var ce, ye;
  function me(e) {
    if (ce === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ce = t && t[1] || "", ye = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ce + e + ye;
  }
  var Ve = !1;
  function Ze(e, t) {
    if (!e || Ve) return "";
    Ve = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (U) {
                  var D = U;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (U) {
                  D = U;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                D = U;
              }
              (X = e()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (U) {
            if (U && D && typeof U.stack == "string")
              return [U.stack, D.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = l.DetermineComponentFrameRoot(), s = c[0], p = c[1];
      if (s && p) {
        var S = s.split(`
`), T = p.split(`
`);
        for (a = l = 0; l < S.length && !S[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; a < T.length && !T[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (l === S.length || a === T.length)
          for (l = S.length - 1, a = T.length - 1; 1 <= l && 0 <= a && S[l] !== T[a]; )
            a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (S[l] !== T[a]) {
            if (l !== 1 || a !== 1)
              do
                if (l--, a--, 0 > a || S[l] !== T[a]) {
                  var k = `
` + S[l].replace(" at new ", " at ");
                  return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), k;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      Ve = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? me(n) : "";
  }
  function ne(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return me(e.type);
      case 16:
        return me("Lazy");
      case 13:
        return e.child !== t && t !== null ? me("Suspense Fallback") : me("Suspense");
      case 19:
        return me("SuspenseList");
      case 0:
      case 15:
        return Ze(e.type, !1);
      case 11:
        return Ze(e.type.render, !1);
      case 1:
        return Ze(e.type, !0);
      case 31:
        return me("Activity");
      default:
        return "";
    }
  }
  function lt(e) {
    try {
      var t = "", n = null;
      do
        t += ne(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var an = Object.prototype.hasOwnProperty, Xt = i.unstable_scheduleCallback, Xn = i.unstable_cancelCallback, Ol = i.unstable_shouldYield, Ri = i.unstable_requestPaint, gt = i.unstable_now, bc = i.unstable_getCurrentPriorityLevel, Oi = i.unstable_ImmediatePriority, xn = i.unstable_UserBlockingPriority, un = i.unstable_NormalPriority, ml = i.unstable_LowPriority, Aa = i.unstable_IdlePriority, mn = i.log, Ui = i.unstable_setDisableYieldValue, pl = null, St = null;
  function Gt(e) {
    if (typeof mn == "function" && Ui(e), St && typeof St.setStrictMode == "function")
      try {
        St.setStrictMode(pl, e);
      } catch {
      }
  }
  var yt = Math.clz32 ? Math.clz32 : Sc, xc = Math.log, Hi = Math.LN2;
  function Sc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (xc(e) / Hi | 0) | 0;
  }
  var Ul = 256, Hl = 262144, $e = 4194304;
  function We(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ct(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, c = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var p = l & 134217727;
    return p !== 0 ? (l = p & ~c, l !== 0 ? a = We(l) : (s &= p, s !== 0 ? a = We(s) : n || (n = p & ~e, n !== 0 && (a = We(n))))) : (p = l & ~c, p !== 0 ? a = We(p) : s !== 0 ? a = We(s) : n || (n = l & ~e, n !== 0 && (a = We(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & c) === 0 && (c = a & -a, n = t & -t, c >= n || c === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function wt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function zt(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bt() {
    var e = $e;
    return $e <<= 1, ($e & 62914560) === 0 && ($e = 4194304), e;
  }
  function jt(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Zt(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function at(e, t, n, l, a, c) {
    var s = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var p = e.entanglements, S = e.expirationTimes, T = e.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var k = 31 - yt(n), X = 1 << k;
      p[k] = 0, S[k] = -1;
      var D = T[k];
      if (D !== null)
        for (T[k] = null, k = 0; k < D.length; k++) {
          var U = D[k];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~X;
    }
    l !== 0 && cn(e, l, 0), c !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(s & ~t));
  }
  function cn(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - yt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function Ot(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - yt(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function Qt(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Sn(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Sn(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Cn(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function rn() {
    var e = $.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Jh(e.type));
  }
  function Gn(e, t) {
    var n = $.p;
    try {
      return $.p = e, t();
    } finally {
      $.p = n;
    }
  }
  var Vt = Math.random().toString(36).slice(2), dt = "__reactFiber$" + Vt, Nt = "__reactProps$" + Vt, Bl = "__reactContainer$" + Vt, Cc = "__reactEvents$" + Vt, Rp = "__reactListeners$" + Vt, Op = "__reactHandles$" + Vt, ss = "__reactResources$" + Vt, _a = "__reactMarker$" + Vt;
  function Ec(e) {
    delete e[dt], delete e[Nt], delete e[Cc], delete e[Rp], delete e[Op];
  }
  function Ll(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Bl] || n[dt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Mh(e); e !== null; ) {
            if (n = e[dt]) return n;
            e = Mh(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function kl(e) {
    if (e = e[dt] || e[Bl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ma(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ql(e) {
    var t = e[ss];
    return t || (t = e[ss] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function rt(e) {
    e[_a] = !0;
  }
  var fs = /* @__PURE__ */ new Set(), ds = {};
  function vl(e, t) {
    Yl(e, t), Yl(e + "Capture", t);
  }
  function Yl(e, t) {
    for (ds[e] = t, e = 0; e < t.length; e++)
      fs.add(t[e]);
  }
  var Up = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), hs = {}, ms = {};
  function Hp(e) {
    return an.call(ms, e) ? !0 : an.call(hs, e) ? !1 : Up.test(e) ? ms[e] = !0 : (hs[e] = !0, !1);
  }
  function Bi(e, t, n) {
    if (Hp(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Li(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function En(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function Kt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ps(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Bp(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var a = l.get, c = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(s) {
          n = "" + s, c.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(s) {
          n = "" + s;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function wc(e) {
    if (!e._valueTracker) {
      var t = ps(e) ? "checked" : "value";
      e._valueTracker = Bp(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function vs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = ps(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ki(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Lp = /[\n"\\]/g;
  function Jt(e) {
    return e.replace(
      Lp,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function zc(e, t, n, l, a, c, s, p) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Kt(t)) : e.value !== "" + Kt(t) && (e.value = "" + Kt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? jc(e, s, Kt(t)) : n != null ? jc(e, s, Kt(n)) : l != null && e.removeAttribute("value"), a == null && c != null && (e.defaultChecked = !!c), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.name = "" + Kt(p) : e.removeAttribute("name");
  }
  function gs(e, t, n, l, a, c, s, p) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || n != null) {
      if (!(c !== "submit" && c !== "reset" || t != null)) {
        wc(e);
        return;
      }
      n = n != null ? "" + Kt(n) : "", t = t != null ? "" + Kt(t) : n, p || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = p ? e.checked : !!l, e.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), wc(e);
  }
  function jc(e, t, n) {
    t === "number" && ki(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Xl(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++)
        t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Kt(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ys(e, t, n) {
    if (t != null && (t = "" + Kt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Kt(n) : "";
  }
  function bs(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(o(92));
        if (ze(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = Kt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), wc(e);
  }
  function Gl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var kp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function xs(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || kp.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Ss(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && xs(e, a, l);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && xs(e, c, t[c]);
  }
  function Nc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var qp = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Yp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qi(e) {
    return Yp.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function wn() {
  }
  var Tc = null;
  function Dc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Zl = null, Ql = null;
  function Cs(e) {
    var t = kl(e);
    if (t && (e = t.stateNode)) {
      var n = e[Nt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (zc(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[Nt] || null;
                if (!a) throw Error(o(90));
                zc(
                  l,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && vs(l);
          }
          break e;
        case "textarea":
          ys(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Xl(e, !!n.multiple, t, !1);
      }
    }
  }
  var Ac = !1;
  function Es(e, t, n) {
    if (Ac) return e(t, n);
    Ac = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Ac = !1, (Zl !== null || Ql !== null) && (Nu(), Zl && (t = Zl, e = Ql, Ql = Zl = null, Cs(t), e)))
        for (t = 0; t < e.length; t++) Cs(e[t]);
    }
  }
  function Ra(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Nt] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        o(231, t, typeof n)
      );
    return n;
  }
  var zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _c = !1;
  if (zn)
    try {
      var Oa = {};
      Object.defineProperty(Oa, "passive", {
        get: function() {
          _c = !0;
        }
      }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa);
    } catch {
      _c = !1;
    }
  var Zn = null, Mc = null, Yi = null;
  function ws() {
    if (Yi) return Yi;
    var e, t = Mc, n = t.length, l, a = "value" in Zn ? Zn.value : Zn.textContent, c = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var s = n - e;
    for (l = 1; l <= s && t[n - l] === a[c - l]; l++) ;
    return Yi = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Xi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Gi() {
    return !0;
  }
  function zs() {
    return !1;
  }
  function Tt(e) {
    function t(n, l, a, c, s) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = c, this.target = s, this.currentTarget = null;
      for (var p in e)
        e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(c) : c[p]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Gi : zs, this.isPropagationStopped = zs, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Gi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Gi);
      },
      persist: function() {
      },
      isPersistent: Gi
    }), t;
  }
  var gl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Zi = Tt(gl), Ua = b({}, gl, { view: 0, detail: 0 }), Xp = Tt(Ua), Rc, Oc, Ha, Qi = b({}, Ua, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Hc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ha && (Ha && e.type === "mousemove" ? (Rc = e.screenX - Ha.screenX, Oc = e.screenY - Ha.screenY) : Oc = Rc = 0, Ha = e), Rc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Oc;
    }
  }), js = Tt(Qi), Gp = b({}, Qi, { dataTransfer: 0 }), Zp = Tt(Gp), Qp = b({}, Ua, { relatedTarget: 0 }), Uc = Tt(Qp), Vp = b({}, gl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Kp = Tt(Vp), Jp = b({}, gl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), $p = Tt(Jp), Wp = b({}, gl, { data: 0 }), Ns = Tt(Wp), Fp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ip = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Pp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ev(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Pp[e]) ? !!t[e] : !1;
  }
  function Hc() {
    return ev;
  }
  var tv = b({}, Ua, {
    key: function(e) {
      if (e.key) {
        var t = Fp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Xi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ip[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hc,
    charCode: function(e) {
      return e.type === "keypress" ? Xi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), nv = Tt(tv), lv = b({}, Qi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ts = Tt(lv), av = b({}, Ua, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hc
  }), iv = Tt(av), uv = b({}, gl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), cv = Tt(uv), rv = b({}, Qi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ov = Tt(rv), sv = b({}, gl, {
    newState: 0,
    oldState: 0
  }), fv = Tt(sv), dv = [9, 13, 27, 32], Bc = zn && "CompositionEvent" in window, Ba = null;
  zn && "documentMode" in document && (Ba = document.documentMode);
  var hv = zn && "TextEvent" in window && !Ba, Ds = zn && (!Bc || Ba && 8 < Ba && 11 >= Ba), As = " ", _s = !1;
  function Ms(e, t) {
    switch (e) {
      case "keyup":
        return dv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Rs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Vl = !1;
  function mv(e, t) {
    switch (e) {
      case "compositionend":
        return Rs(t);
      case "keypress":
        return t.which !== 32 ? null : (_s = !0, As);
      case "textInput":
        return e = t.data, e === As && _s ? null : e;
      default:
        return null;
    }
  }
  function pv(e, t) {
    if (Vl)
      return e === "compositionend" || !Bc && Ms(e, t) ? (e = ws(), Yi = Mc = Zn = null, Vl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ds && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var vv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Os(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vv[e.type] : t === "textarea";
  }
  function Us(e, t, n, l) {
    Zl ? Ql ? Ql.push(l) : Ql = [l] : Zl = l, t = Ou(t, "onChange"), 0 < t.length && (n = new Zi(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var La = null, ka = null;
  function gv(e) {
    yh(e, 0);
  }
  function Vi(e) {
    var t = Ma(e);
    if (vs(t)) return e;
  }
  function Hs(e, t) {
    if (e === "change") return t;
  }
  var Bs = !1;
  if (zn) {
    var Lc;
    if (zn) {
      var kc = "oninput" in document;
      if (!kc) {
        var Ls = document.createElement("div");
        Ls.setAttribute("oninput", "return;"), kc = typeof Ls.oninput == "function";
      }
      Lc = kc;
    } else Lc = !1;
    Bs = Lc && (!document.documentMode || 9 < document.documentMode);
  }
  function ks() {
    La && (La.detachEvent("onpropertychange", qs), ka = La = null);
  }
  function qs(e) {
    if (e.propertyName === "value" && Vi(ka)) {
      var t = [];
      Us(
        t,
        ka,
        e,
        Dc(e)
      ), Es(gv, t);
    }
  }
  function yv(e, t, n) {
    e === "focusin" ? (ks(), La = t, ka = n, La.attachEvent("onpropertychange", qs)) : e === "focusout" && ks();
  }
  function bv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Vi(ka);
  }
  function xv(e, t) {
    if (e === "click") return Vi(t);
  }
  function Sv(e, t) {
    if (e === "input" || e === "change")
      return Vi(t);
  }
  function Cv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ut = typeof Object.is == "function" ? Object.is : Cv;
  function qa(e, t) {
    if (Ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!an.call(t, a) || !Ut(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function Ys(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xs(e, t) {
    var n = Ys(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ys(n);
    }
  }
  function Gs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zs(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ki(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ki(e.document);
    }
    return t;
  }
  function qc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Ev = zn && "documentMode" in document && 11 >= document.documentMode, Kl = null, Yc = null, Ya = null, Xc = !1;
  function Qs(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xc || Kl == null || Kl !== ki(l) || (l = Kl, "selectionStart" in l && qc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ya && qa(Ya, l) || (Ya = l, l = Ou(Yc, "onSelect"), 0 < l.length && (t = new Zi(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = Kl)));
  }
  function yl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jl = {
    animationend: yl("Animation", "AnimationEnd"),
    animationiteration: yl("Animation", "AnimationIteration"),
    animationstart: yl("Animation", "AnimationStart"),
    transitionrun: yl("Transition", "TransitionRun"),
    transitionstart: yl("Transition", "TransitionStart"),
    transitioncancel: yl("Transition", "TransitionCancel"),
    transitionend: yl("Transition", "TransitionEnd")
  }, Gc = {}, Vs = {};
  zn && (Vs = document.createElement("div").style, "AnimationEvent" in window || (delete Jl.animationend.animation, delete Jl.animationiteration.animation, delete Jl.animationstart.animation), "TransitionEvent" in window || delete Jl.transitionend.transition);
  function bl(e) {
    if (Gc[e]) return Gc[e];
    if (!Jl[e]) return e;
    var t = Jl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Vs)
        return Gc[e] = t[n];
    return e;
  }
  var Ks = bl("animationend"), Js = bl("animationiteration"), $s = bl("animationstart"), wv = bl("transitionrun"), zv = bl("transitionstart"), jv = bl("transitioncancel"), Ws = bl("transitionend"), Fs = /* @__PURE__ */ new Map(), Zc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Zc.push("scrollEnd");
  function on(e, t) {
    Fs.set(e, t), vl(t, [e]);
  }
  var Ki = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, $t = [], $l = 0, Qc = 0;
  function Ji() {
    for (var e = $l, t = Qc = $l = 0; t < e; ) {
      var n = $t[t];
      $t[t++] = null;
      var l = $t[t];
      $t[t++] = null;
      var a = $t[t];
      $t[t++] = null;
      var c = $t[t];
      if ($t[t++] = null, l !== null && a !== null) {
        var s = l.pending;
        s === null ? a.next = a : (a.next = s.next, s.next = a), l.pending = a;
      }
      c !== 0 && Is(n, a, c);
    }
  }
  function $i(e, t, n, l) {
    $t[$l++] = e, $t[$l++] = t, $t[$l++] = n, $t[$l++] = l, Qc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Vc(e, t, n, l) {
    return $i(e, t, n, l), Wi(e);
  }
  function xl(e, t) {
    return $i(e, null, null, t), Wi(e);
  }
  function Is(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, c = e.return; c !== null; )
      c.childLanes |= n, l = c.alternate, l !== null && (l.childLanes |= n), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (a = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, a && t !== null && (a = 31 - yt(n), e = c.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), c) : null;
  }
  function Wi(e) {
    if (50 < oi)
      throw oi = 0, to = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Wl = {};
  function Nv(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, n, l) {
    return new Nv(e, t, n, l);
  }
  function Kc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function jn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ht(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Ps(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Fi(e, t, n, l, a, c) {
    var s = 0;
    if (l = e, typeof e == "function") Kc(e) && (s = 1);
    else if (typeof e == "string")
      s = Mg(
        e,
        n,
        I.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case F:
          return e = Ht(31, n, t, a), e.elementType = F, e.lanes = c, e;
        case q:
          return Sl(n.children, a, c, t);
        case A:
          s = 8, a |= 24;
          break;
        case Q:
          return e = Ht(12, n, t, a | 2), e.elementType = Q, e.lanes = c, e;
        case O:
          return e = Ht(13, n, t, a), e.elementType = O, e.lanes = c, e;
        case _:
          return e = Ht(19, n, t, a), e.elementType = _, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case G:
                s = 10;
                break e;
              case V:
                s = 9;
                break e;
              case W:
                s = 11;
                break e;
              case M:
                s = 14;
                break e;
              case L:
                s = 16, l = null;
                break e;
            }
          s = 29, n = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ht(s, n, t, a), t.elementType = e, t.type = l, t.lanes = c, t;
  }
  function Sl(e, t, n, l) {
    return e = Ht(7, e, l, t), e.lanes = n, e;
  }
  function Jc(e, t, n) {
    return e = Ht(6, e, null, t), e.lanes = n, e;
  }
  function ef(e) {
    var t = Ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function $c(e, t, n) {
    return t = Ht(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var tf = /* @__PURE__ */ new WeakMap();
  function Wt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = tf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: lt(t)
      }, tf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: lt(t)
    };
  }
  var Fl = [], Il = 0, Ii = null, Xa = 0, Ft = [], It = 0, Qn = null, pn = 1, vn = "";
  function Nn(e, t) {
    Fl[Il++] = Xa, Fl[Il++] = Ii, Ii = e, Xa = t;
  }
  function nf(e, t, n) {
    Ft[It++] = pn, Ft[It++] = vn, Ft[It++] = Qn, Qn = e;
    var l = pn;
    e = vn;
    var a = 32 - yt(l) - 1;
    l &= ~(1 << a), n += 1;
    var c = 32 - yt(t) + a;
    if (30 < c) {
      var s = a - a % 5;
      c = (l & (1 << s) - 1).toString(32), l >>= s, a -= s, pn = 1 << 32 - yt(t) + a | n << a | l, vn = c + e;
    } else
      pn = 1 << c | n << a | l, vn = e;
  }
  function Wc(e) {
    e.return !== null && (Nn(e, 1), nf(e, 1, 0));
  }
  function Fc(e) {
    for (; e === Ii; )
      Ii = Fl[--Il], Fl[Il] = null, Xa = Fl[--Il], Fl[Il] = null;
    for (; e === Qn; )
      Qn = Ft[--It], Ft[It] = null, vn = Ft[--It], Ft[It] = null, pn = Ft[--It], Ft[It] = null;
  }
  function lf(e, t) {
    Ft[It++] = pn, Ft[It++] = vn, Ft[It++] = Qn, pn = t.id, vn = t.overflow, Qn = e;
  }
  var ht = null, Ye = null, Ee = !1, Vn = null, Pt = !1, Ic = Error(o(519));
  function Kn(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ga(Wt(t, e)), Ic;
  }
  function af(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[dt] = e, t[Nt] = l, n) {
      case "dialog":
        xe("cancel", t), xe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        xe("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < fi.length; n++)
          xe(fi[n], t);
        break;
      case "source":
        xe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        xe("error", t), xe("load", t);
        break;
      case "details":
        xe("toggle", t);
        break;
      case "input":
        xe("invalid", t), gs(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        xe("invalid", t);
        break;
      case "textarea":
        xe("invalid", t), bs(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Ch(t.textContent, n) ? (l.popover != null && (xe("beforetoggle", t), xe("toggle", t)), l.onScroll != null && xe("scroll", t), l.onScrollEnd != null && xe("scrollend", t), l.onClick != null && (t.onclick = wn), t = !0) : t = !1, t || Kn(e, !0);
  }
  function uf(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
        case 5:
        case 31:
        case 13:
          Pt = !1;
          return;
        case 27:
        case 3:
          Pt = !0;
          return;
        default:
          ht = ht.return;
      }
  }
  function Pl(e) {
    if (e !== ht) return !1;
    if (!Ee) return uf(e), Ee = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || go(e.type, e.memoizedProps)), n = !n), n && Ye && Kn(e), uf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Ye = _h(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Ye = _h(e);
    } else
      t === 27 ? (t = Ye, cl(e.type) ? (e = Co, Co = null, Ye = e) : Ye = t) : Ye = ht ? tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Cl() {
    Ye = ht = null, Ee = !1;
  }
  function Pc() {
    var e = Vn;
    return e !== null && (Mt === null ? Mt = e : Mt.push.apply(
      Mt,
      e
    ), Vn = null), e;
  }
  function Ga(e) {
    Vn === null ? Vn = [e] : Vn.push(e);
  }
  var er = E(null), El = null, Tn = null;
  function Jn(e, t, n) {
    K(er, t._currentValue), t._currentValue = n;
  }
  function Dn(e) {
    e._currentValue = er.current, B(er);
  }
  function tr(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function nr(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var c = a.dependencies;
      if (c !== null) {
        var s = a.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var p = c;
          c = a;
          for (var S = 0; S < t.length; S++)
            if (p.context === t[S]) {
              c.lanes |= n, p = c.alternate, p !== null && (p.lanes |= n), tr(
                c.return,
                n,
                e
              ), l || (s = null);
              break e;
            }
          c = p.next;
        }
      } else if (a.tag === 18) {
        if (s = a.return, s === null) throw Error(o(341));
        s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), tr(s, n, e), s = null;
      } else s = a.child;
      if (s !== null) s.return = a;
      else
        for (s = a; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (a = s.sibling, a !== null) {
            a.return = s.return, s = a;
            break;
          }
          s = s.return;
        }
      a = s;
    }
  }
  function ea(e, t, n, l) {
    e = null;
    for (var a = t, c = !1; a !== null; ) {
      if (!c) {
        if ((a.flags & 524288) !== 0) c = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var s = a.alternate;
        if (s === null) throw Error(o(387));
        if (s = s.memoizedProps, s !== null) {
          var p = a.type;
          Ut(a.pendingProps.value, s.value) || (e !== null ? e.push(p) : e = [p]);
        }
      } else if (a === pe.current) {
        if (s = a.alternate, s === null) throw Error(o(387));
        s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(vi) : e = [vi]);
      }
      a = a.return;
    }
    e !== null && nr(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function Pi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ut(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function wl(e) {
    El = e, Tn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function mt(e) {
    return cf(El, e);
  }
  function eu(e, t) {
    return El === null && wl(e), cf(e, t);
  }
  function cf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Tn === null) {
      if (e === null) throw Error(o(308));
      Tn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Tn = Tn.next = t;
    return n;
  }
  var Tv = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, Dv = i.unstable_scheduleCallback, Av = i.unstable_NormalPriority, Pe = {
    $$typeof: G,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function lr() {
    return {
      controller: new Tv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Za(e) {
    e.refCount--, e.refCount === 0 && Dv(Av, function() {
      e.controller.abort();
    });
  }
  var Qa = null, ar = 0, ta = 0, na = null;
  function _v(e, t) {
    if (Qa === null) {
      var n = Qa = [];
      ar = 0, ta = co(), na = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return ar++, t.then(rf, rf), t;
  }
  function rf() {
    if (--ar === 0 && Qa !== null) {
      na !== null && (na.status = "fulfilled");
      var e = Qa;
      Qa = null, ta = 0, na = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Mv(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        n.push(a);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var a = 0; a < n.length; a++) (0, n[a])(t);
      },
      function(a) {
        for (l.status = "rejected", l.reason = a, a = 0; a < n.length; a++)
          (0, n[a])(void 0);
      }
    ), l;
  }
  var of = H.S;
  H.S = function(e, t) {
    Vd = gt(), typeof t == "object" && t !== null && typeof t.then == "function" && _v(e, t), of !== null && of(e, t);
  };
  var zl = E(null);
  function ir() {
    var e = zl.current;
    return e !== null ? e : Le.pooledCache;
  }
  function tu(e, t) {
    t === null ? K(zl, zl.current) : K(zl, t.pool);
  }
  function sf() {
    var e = ir();
    return e === null ? null : { parent: Pe._currentValue, pool: e };
  }
  var la = Error(o(460)), ur = Error(o(474)), nu = Error(o(542)), lu = { then: function() {
  } };
  function ff(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function df(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(wn, wn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, mf(e), e;
      default:
        if (typeof t.status == "string") t.then(wn, wn);
        else {
          if (e = Le, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, mf(e), e;
        }
        throw Nl = t, la;
    }
  }
  function jl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Nl = n, la) : n;
    }
  }
  var Nl = null;
  function hf() {
    if (Nl === null) throw Error(o(459));
    var e = Nl;
    return Nl = null, e;
  }
  function mf(e) {
    if (e === la || e === nu)
      throw Error(o(483));
  }
  var aa = null, Va = 0;
  function au(e) {
    var t = Va;
    return Va += 1, aa === null && (aa = []), df(aa, e, t);
  }
  function Ka(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function iu(e, t) {
    throw t.$$typeof === z ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function pf(e) {
    function t(j, w) {
      if (e) {
        var N = j.deletions;
        N === null ? (j.deletions = [w], j.flags |= 16) : N.push(w);
      }
    }
    function n(j, w) {
      if (!e) return null;
      for (; w !== null; )
        t(j, w), w = w.sibling;
      return null;
    }
    function l(j) {
      for (var w = /* @__PURE__ */ new Map(); j !== null; )
        j.key !== null ? w.set(j.key, j) : w.set(j.index, j), j = j.sibling;
      return w;
    }
    function a(j, w) {
      return j = jn(j, w), j.index = 0, j.sibling = null, j;
    }
    function c(j, w, N) {
      return j.index = N, e ? (N = j.alternate, N !== null ? (N = N.index, N < w ? (j.flags |= 67108866, w) : N) : (j.flags |= 67108866, w)) : (j.flags |= 1048576, w);
    }
    function s(j) {
      return e && j.alternate === null && (j.flags |= 67108866), j;
    }
    function p(j, w, N, Y) {
      return w === null || w.tag !== 6 ? (w = Jc(N, j.mode, Y), w.return = j, w) : (w = a(w, N), w.return = j, w);
    }
    function S(j, w, N, Y) {
      var le = N.type;
      return le === q ? k(
        j,
        w,
        N.props.children,
        Y,
        N.key
      ) : w !== null && (w.elementType === le || typeof le == "object" && le !== null && le.$$typeof === L && jl(le) === w.type) ? (w = a(w, N.props), Ka(w, N), w.return = j, w) : (w = Fi(
        N.type,
        N.key,
        N.props,
        null,
        j.mode,
        Y
      ), Ka(w, N), w.return = j, w);
    }
    function T(j, w, N, Y) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== N.containerInfo || w.stateNode.implementation !== N.implementation ? (w = $c(N, j.mode, Y), w.return = j, w) : (w = a(w, N.children || []), w.return = j, w);
    }
    function k(j, w, N, Y, le) {
      return w === null || w.tag !== 7 ? (w = Sl(
        N,
        j.mode,
        Y,
        le
      ), w.return = j, w) : (w = a(w, N), w.return = j, w);
    }
    function X(j, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return w = Jc(
          "" + w,
          j.mode,
          N
        ), w.return = j, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case R:
            return N = Fi(
              w.type,
              w.key,
              w.props,
              null,
              j.mode,
              N
            ), Ka(N, w), N.return = j, N;
          case Z:
            return w = $c(
              w,
              j.mode,
              N
            ), w.return = j, w;
          case L:
            return w = jl(w), X(j, w, N);
        }
        if (ze(w) || we(w))
          return w = Sl(
            w,
            j.mode,
            N,
            null
          ), w.return = j, w;
        if (typeof w.then == "function")
          return X(j, au(w), N);
        if (w.$$typeof === G)
          return X(
            j,
            eu(j, w),
            N
          );
        iu(j, w);
      }
      return null;
    }
    function D(j, w, N, Y) {
      var le = w !== null ? w.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return le !== null ? null : p(j, w, "" + N, Y);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case R:
            return N.key === le ? S(j, w, N, Y) : null;
          case Z:
            return N.key === le ? T(j, w, N, Y) : null;
          case L:
            return N = jl(N), D(j, w, N, Y);
        }
        if (ze(N) || we(N))
          return le !== null ? null : k(j, w, N, Y, null);
        if (typeof N.then == "function")
          return D(
            j,
            w,
            au(N),
            Y
          );
        if (N.$$typeof === G)
          return D(
            j,
            w,
            eu(j, N),
            Y
          );
        iu(j, N);
      }
      return null;
    }
    function U(j, w, N, Y, le) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
        return j = j.get(N) || null, p(w, j, "" + Y, le);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case R:
            return j = j.get(
              Y.key === null ? N : Y.key
            ) || null, S(w, j, Y, le);
          case Z:
            return j = j.get(
              Y.key === null ? N : Y.key
            ) || null, T(w, j, Y, le);
          case L:
            return Y = jl(Y), U(
              j,
              w,
              N,
              Y,
              le
            );
        }
        if (ze(Y) || we(Y))
          return j = j.get(N) || null, k(w, j, Y, le, null);
        if (typeof Y.then == "function")
          return U(
            j,
            w,
            N,
            au(Y),
            le
          );
        if (Y.$$typeof === G)
          return U(
            j,
            w,
            N,
            eu(w, Y),
            le
          );
        iu(w, Y);
      }
      return null;
    }
    function P(j, w, N, Y) {
      for (var le = null, Te = null, ee = w, he = w = 0, Ce = null; ee !== null && he < N.length; he++) {
        ee.index > he ? (Ce = ee, ee = null) : Ce = ee.sibling;
        var De = D(
          j,
          ee,
          N[he],
          Y
        );
        if (De === null) {
          ee === null && (ee = Ce);
          break;
        }
        e && ee && De.alternate === null && t(j, ee), w = c(De, w, he), Te === null ? le = De : Te.sibling = De, Te = De, ee = Ce;
      }
      if (he === N.length)
        return n(j, ee), Ee && Nn(j, he), le;
      if (ee === null) {
        for (; he < N.length; he++)
          ee = X(j, N[he], Y), ee !== null && (w = c(
            ee,
            w,
            he
          ), Te === null ? le = ee : Te.sibling = ee, Te = ee);
        return Ee && Nn(j, he), le;
      }
      for (ee = l(ee); he < N.length; he++)
        Ce = U(
          ee,
          j,
          he,
          N[he],
          Y
        ), Ce !== null && (e && Ce.alternate !== null && ee.delete(
          Ce.key === null ? he : Ce.key
        ), w = c(
          Ce,
          w,
          he
        ), Te === null ? le = Ce : Te.sibling = Ce, Te = Ce);
      return e && ee.forEach(function(dl) {
        return t(j, dl);
      }), Ee && Nn(j, he), le;
    }
    function re(j, w, N, Y) {
      if (N == null) throw Error(o(151));
      for (var le = null, Te = null, ee = w, he = w = 0, Ce = null, De = N.next(); ee !== null && !De.done; he++, De = N.next()) {
        ee.index > he ? (Ce = ee, ee = null) : Ce = ee.sibling;
        var dl = D(j, ee, De.value, Y);
        if (dl === null) {
          ee === null && (ee = Ce);
          break;
        }
        e && ee && dl.alternate === null && t(j, ee), w = c(dl, w, he), Te === null ? le = dl : Te.sibling = dl, Te = dl, ee = Ce;
      }
      if (De.done)
        return n(j, ee), Ee && Nn(j, he), le;
      if (ee === null) {
        for (; !De.done; he++, De = N.next())
          De = X(j, De.value, Y), De !== null && (w = c(De, w, he), Te === null ? le = De : Te.sibling = De, Te = De);
        return Ee && Nn(j, he), le;
      }
      for (ee = l(ee); !De.done; he++, De = N.next())
        De = U(ee, j, he, De.value, Y), De !== null && (e && De.alternate !== null && ee.delete(De.key === null ? he : De.key), w = c(De, w, he), Te === null ? le = De : Te.sibling = De, Te = De);
      return e && ee.forEach(function(Gg) {
        return t(j, Gg);
      }), Ee && Nn(j, he), le;
    }
    function Be(j, w, N, Y) {
      if (typeof N == "object" && N !== null && N.type === q && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case R:
            e: {
              for (var le = N.key; w !== null; ) {
                if (w.key === le) {
                  if (le = N.type, le === q) {
                    if (w.tag === 7) {
                      n(
                        j,
                        w.sibling
                      ), Y = a(
                        w,
                        N.props.children
                      ), Y.return = j, j = Y;
                      break e;
                    }
                  } else if (w.elementType === le || typeof le == "object" && le !== null && le.$$typeof === L && jl(le) === w.type) {
                    n(
                      j,
                      w.sibling
                    ), Y = a(w, N.props), Ka(Y, N), Y.return = j, j = Y;
                    break e;
                  }
                  n(j, w);
                  break;
                } else t(j, w);
                w = w.sibling;
              }
              N.type === q ? (Y = Sl(
                N.props.children,
                j.mode,
                Y,
                N.key
              ), Y.return = j, j = Y) : (Y = Fi(
                N.type,
                N.key,
                N.props,
                null,
                j.mode,
                Y
              ), Ka(Y, N), Y.return = j, j = Y);
            }
            return s(j);
          case Z:
            e: {
              for (le = N.key; w !== null; ) {
                if (w.key === le)
                  if (w.tag === 4 && w.stateNode.containerInfo === N.containerInfo && w.stateNode.implementation === N.implementation) {
                    n(
                      j,
                      w.sibling
                    ), Y = a(w, N.children || []), Y.return = j, j = Y;
                    break e;
                  } else {
                    n(j, w);
                    break;
                  }
                else t(j, w);
                w = w.sibling;
              }
              Y = $c(N, j.mode, Y), Y.return = j, j = Y;
            }
            return s(j);
          case L:
            return N = jl(N), Be(
              j,
              w,
              N,
              Y
            );
        }
        if (ze(N))
          return P(
            j,
            w,
            N,
            Y
          );
        if (we(N)) {
          if (le = we(N), typeof le != "function") throw Error(o(150));
          return N = le.call(N), re(
            j,
            w,
            N,
            Y
          );
        }
        if (typeof N.then == "function")
          return Be(
            j,
            w,
            au(N),
            Y
          );
        if (N.$$typeof === G)
          return Be(
            j,
            w,
            eu(j, N),
            Y
          );
        iu(j, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, w !== null && w.tag === 6 ? (n(j, w.sibling), Y = a(w, N), Y.return = j, j = Y) : (n(j, w), Y = Jc(N, j.mode, Y), Y.return = j, j = Y), s(j)) : n(j, w);
    }
    return function(j, w, N, Y) {
      try {
        Va = 0;
        var le = Be(
          j,
          w,
          N,
          Y
        );
        return aa = null, le;
      } catch (ee) {
        if (ee === la || ee === nu) throw ee;
        var Te = Ht(29, ee, null, j.mode);
        return Te.lanes = Y, Te.return = j, Te;
      }
    };
  }
  var Tl = pf(!0), vf = pf(!1), $n = !1;
  function cr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function rr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Wn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Fn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ae & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = Wi(e), Is(e, null, n), t;
    }
    return $i(e, l, t, n), Wi(e);
  }
  function Ja(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Ot(e, n);
    }
  }
  function or(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var a = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          c === null ? a = c = s : c = c.next = s, n = n.next;
        } while (n !== null);
        c === null ? a = c = t : c = c.next = t;
      } else a = c = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var sr = !1;
  function $a() {
    if (sr) {
      var e = na;
      if (e !== null) throw e;
    }
  }
  function Wa(e, t, n, l) {
    sr = !1;
    var a = e.updateQueue;
    $n = !1;
    var c = a.firstBaseUpdate, s = a.lastBaseUpdate, p = a.shared.pending;
    if (p !== null) {
      a.shared.pending = null;
      var S = p, T = S.next;
      S.next = null, s === null ? c = T : s.next = T, s = S;
      var k = e.alternate;
      k !== null && (k = k.updateQueue, p = k.lastBaseUpdate, p !== s && (p === null ? k.firstBaseUpdate = T : p.next = T, k.lastBaseUpdate = S));
    }
    if (c !== null) {
      var X = a.baseState;
      s = 0, k = T = S = null, p = c;
      do {
        var D = p.lane & -536870913, U = D !== p.lane;
        if (U ? (Se & D) === D : (l & D) === D) {
          D !== 0 && D === ta && (sr = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          e: {
            var P = e, re = p;
            D = t;
            var Be = n;
            switch (re.tag) {
              case 1:
                if (P = re.payload, typeof P == "function") {
                  X = P.call(Be, X, D);
                  break e;
                }
                X = P;
                break e;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = re.payload, D = typeof P == "function" ? P.call(Be, X, D) : P, D == null) break e;
                X = b({}, X, D);
                break e;
              case 2:
                $n = !0;
            }
          }
          D = p.callback, D !== null && (e.flags |= 64, U && (e.flags |= 8192), U = a.callbacks, U === null ? a.callbacks = [D] : U.push(D));
        } else
          U = {
            lane: D,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, k === null ? (T = k = U, S = X) : k = k.next = U, s |= D;
        if (p = p.next, p === null) {
          if (p = a.shared.pending, p === null)
            break;
          U = p, p = U.next, U.next = null, a.lastBaseUpdate = U, a.shared.pending = null;
        }
      } while (!0);
      k === null && (S = X), a.baseState = S, a.firstBaseUpdate = T, a.lastBaseUpdate = k, c === null && (a.shared.lanes = 0), nl |= s, e.lanes = s, e.memoizedState = X;
    }
  }
  function gf(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function yf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        gf(n[e], t);
  }
  var ia = E(null), uu = E(0);
  function bf(e, t) {
    e = Ln, K(uu, e), K(ia, t), Ln = e | t.baseLanes;
  }
  function fr() {
    K(uu, Ln), K(ia, ia.current);
  }
  function dr() {
    Ln = uu.current, B(ia), B(uu);
  }
  var Bt = E(null), en = null;
  function In(e) {
    var t = e.alternate;
    K(Fe, Fe.current & 1), K(Bt, e), en === null && (t === null || ia.current !== null || t.memoizedState !== null) && (en = e);
  }
  function hr(e) {
    K(Fe, Fe.current), K(Bt, e), en === null && (en = e);
  }
  function xf(e) {
    e.tag === 22 ? (K(Fe, Fe.current), K(Bt, e), en === null && (en = e)) : Pn();
  }
  function Pn() {
    K(Fe, Fe.current), K(Bt, Bt.current);
  }
  function Lt(e) {
    B(Bt), en === e && (en = null), B(Fe);
  }
  var Fe = E(0);
  function cu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || xo(n) || So(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var An = 0, de = null, Ue = null, et = null, ru = !1, ua = !1, Dl = !1, ou = 0, Fa = 0, ca = null, Rv = 0;
  function Ke() {
    throw Error(o(321));
  }
  function mr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ut(e[n], t[n])) return !1;
    return !0;
  }
  function pr(e, t, n, l, a, c) {
    return An = c, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e === null || e.memoizedState === null ? ld : Ar, Dl = !1, c = n(l, a), Dl = !1, ua && (c = Cf(
      t,
      n,
      l,
      a
    )), Sf(e), c;
  }
  function Sf(e) {
    H.H = ei;
    var t = Ue !== null && Ue.next !== null;
    if (An = 0, et = Ue = de = null, ru = !1, Fa = 0, ca = null, t) throw Error(o(300));
    e === null || tt || (e = e.dependencies, e !== null && Pi(e) && (tt = !0));
  }
  function Cf(e, t, n, l) {
    de = e;
    var a = 0;
    do {
      if (ua && (ca = null), Fa = 0, ua = !1, 25 <= a) throw Error(o(301));
      if (a += 1, et = Ue = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      H.H = ad, c = t(n, l);
    } while (ua);
    return c;
  }
  function Ov() {
    var e = H.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ia(t) : t, e = e.useState()[0], (Ue !== null ? Ue.memoizedState : null) !== e && (de.flags |= 1024), t;
  }
  function vr() {
    var e = ou !== 0;
    return ou = 0, e;
  }
  function gr(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function yr(e) {
    if (ru) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ru = !1;
    }
    An = 0, et = Ue = de = null, ua = !1, Fa = ou = 0, ca = null;
  }
  function Ct() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return et === null ? de.memoizedState = et = e : et = et.next = e, et;
  }
  function Ie() {
    if (Ue === null) {
      var e = de.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = et === null ? de.memoizedState : et.next;
    if (t !== null)
      et = t, Ue = e;
    else {
      if (e === null)
        throw de.alternate === null ? Error(o(467)) : Error(o(310));
      Ue = e, e = {
        memoizedState: Ue.memoizedState,
        baseState: Ue.baseState,
        baseQueue: Ue.baseQueue,
        queue: Ue.queue,
        next: null
      }, et === null ? de.memoizedState = et = e : et = et.next = e;
    }
    return et;
  }
  function su() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ia(e) {
    var t = Fa;
    return Fa += 1, ca === null && (ca = []), e = df(ca, e, t), t = de, (et === null ? t.memoizedState : et.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? ld : Ar), e;
  }
  function fu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ia(e);
      if (e.$$typeof === G) return mt(e);
    }
    throw Error(o(438, String(e)));
  }
  function br(e) {
    var t = null, n = de.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = de.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = su(), de.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = ae;
    return t.index++, n;
  }
  function _n(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function du(e) {
    var t = Ie();
    return xr(t, Ue, e);
  }
  function xr(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = n;
    var a = e.baseQueue, c = l.pending;
    if (c !== null) {
      if (a !== null) {
        var s = a.next;
        a.next = c.next, c.next = s;
      }
      t.baseQueue = a = c, l.pending = null;
    }
    if (c = e.baseState, a === null) e.memoizedState = c;
    else {
      t = a.next;
      var p = s = null, S = null, T = t, k = !1;
      do {
        var X = T.lane & -536870913;
        if (X !== T.lane ? (Se & X) === X : (An & X) === X) {
          var D = T.revertLane;
          if (D === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }), X === ta && (k = !0);
          else if ((An & D) === D) {
            T = T.next, D === ta && (k = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }, S === null ? (p = S = X, s = c) : S = S.next = X, de.lanes |= D, nl |= D;
          X = T.action, Dl && n(c, X), c = T.hasEagerState ? T.eagerState : n(c, X);
        } else
          D = {
            lane: X,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, S === null ? (p = S = D, s = c) : S = S.next = D, de.lanes |= X, nl |= X;
        T = T.next;
      } while (T !== null && T !== t);
      if (S === null ? s = c : S.next = p, !Ut(c, e.memoizedState) && (tt = !0, k && (n = na, n !== null)))
        throw n;
      e.memoizedState = c, e.baseState = s, e.baseQueue = S, l.lastRenderedState = c;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Sr(e) {
    var t = Ie(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, c = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var s = a = a.next;
      do
        c = e(c, s.action), s = s.next;
      while (s !== a);
      Ut(c, t.memoizedState) || (tt = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, l];
  }
  function Ef(e, t, n) {
    var l = de, a = Ie(), c = Ee;
    if (c) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var s = !Ut(
      (Ue || a).memoizedState,
      n
    );
    if (s && (a.memoizedState = n, tt = !0), a = a.queue, wr(jf.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || s || et !== null && et.memoizedState.tag & 1) {
      if (l.flags |= 2048, ra(
        9,
        { destroy: void 0 },
        zf.bind(
          null,
          l,
          a,
          n,
          t
        ),
        null
      ), Le === null) throw Error(o(349));
      c || (An & 127) !== 0 || wf(l, t, n);
    }
    return n;
  }
  function wf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = de.updateQueue, t === null ? (t = su(), de.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function zf(e, t, n, l) {
    t.value = n, t.getSnapshot = l, Nf(t) && Tf(e);
  }
  function jf(e, t, n) {
    return n(function() {
      Nf(t) && Tf(e);
    });
  }
  function Nf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ut(e, n);
    } catch {
      return !0;
    }
  }
  function Tf(e) {
    var t = xl(e, 2);
    t !== null && Rt(t, e, 2);
  }
  function Cr(e) {
    var t = Ct();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Dl) {
        Gt(!0);
        try {
          n();
        } finally {
          Gt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _n,
      lastRenderedState: e
    }, t;
  }
  function Df(e, t, n, l) {
    return e.baseState = n, xr(
      e,
      Ue,
      typeof l == "function" ? l : _n
    );
  }
  function Uv(e, t, n, l, a) {
    if (pu(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var c = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          c.listeners.push(s);
        }
      };
      H.T !== null ? n(!0) : c.isTransition = !1, l(c), n = t.pending, n === null ? (c.next = t.pending = c, Af(t, c)) : (c.next = n.next, t.pending = n.next = c);
    }
  }
  function Af(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var c = H.T, s = {};
      H.T = s;
      try {
        var p = n(a, l), S = H.S;
        S !== null && S(s, p), _f(e, t, p);
      } catch (T) {
        Er(e, t, T);
      } finally {
        c !== null && s.types !== null && (c.types = s.types), H.T = c;
      }
    } else
      try {
        c = n(a, l), _f(e, t, c);
      } catch (T) {
        Er(e, t, T);
      }
  }
  function _f(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Mf(e, t, l);
      },
      function(l) {
        return Er(e, t, l);
      }
    ) : Mf(e, t, n);
  }
  function Mf(e, t, n) {
    t.status = "fulfilled", t.value = n, Rf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Af(e, n)));
  }
  function Er(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Rf(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Rf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Of(e, t) {
    return t;
  }
  function Uf(e, t) {
    if (Ee) {
      var n = Le.formState;
      if (n !== null) {
        e: {
          var l = de;
          if (Ee) {
            if (Ye) {
              t: {
                for (var a = Ye, c = Pt; a.nodeType !== 8; ) {
                  if (!c) {
                    a = null;
                    break t;
                  }
                  if (a = tn(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                c = a.data, a = c === "F!" || c === "F" ? a : null;
              }
              if (a) {
                Ye = tn(
                  a.nextSibling
                ), l = a.data === "F!";
                break e;
              }
            }
            Kn(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = Ct(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Of,
      lastRenderedState: t
    }, n.queue = l, n = ed.bind(
      null,
      de,
      l
    ), l.dispatch = n, l = Cr(!1), c = Dr.bind(
      null,
      de,
      !1,
      l.queue
    ), l = Ct(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = Uv.bind(
      null,
      de,
      a,
      c,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Hf(e) {
    var t = Ie();
    return Bf(t, Ue, e);
  }
  function Bf(e, t, n) {
    if (t = xr(
      e,
      t,
      Of
    )[0], e = du(_n)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Ia(t);
      } catch (s) {
        throw s === la ? nu : s;
      }
    else l = t;
    t = Ie();
    var a = t.queue, c = a.dispatch;
    return n !== t.memoizedState && (de.flags |= 2048, ra(
      9,
      { destroy: void 0 },
      Hv.bind(null, a, n),
      null
    )), [l, c, e];
  }
  function Hv(e, t) {
    e.action = t;
  }
  function Lf(e) {
    var t = Ie(), n = Ue;
    if (n !== null)
      return Bf(t, n, e);
    Ie(), t = t.memoizedState, n = Ie();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function ra(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = de.updateQueue, t === null && (t = su(), de.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function kf() {
    return Ie().memoizedState;
  }
  function hu(e, t, n, l) {
    var a = Ct();
    de.flags |= e, a.memoizedState = ra(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function mu(e, t, n, l) {
    var a = Ie();
    l = l === void 0 ? null : l;
    var c = a.memoizedState.inst;
    Ue !== null && l !== null && mr(l, Ue.memoizedState.deps) ? a.memoizedState = ra(t, c, n, l) : (de.flags |= e, a.memoizedState = ra(
      1 | t,
      c,
      n,
      l
    ));
  }
  function qf(e, t) {
    hu(8390656, 8, e, t);
  }
  function wr(e, t) {
    mu(2048, 8, e, t);
  }
  function Bv(e) {
    de.flags |= 4;
    var t = de.updateQueue;
    if (t === null)
      t = su(), de.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Yf(e) {
    var t = Ie().memoizedState;
    return Bv({ ref: t, nextImpl: e }), function() {
      if ((Ae & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Xf(e, t) {
    return mu(4, 2, e, t);
  }
  function Gf(e, t) {
    return mu(4, 4, e, t);
  }
  function Zf(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Qf(e, t, n) {
    n = n != null ? n.concat([e]) : null, mu(4, 4, Zf.bind(null, t, e), n);
  }
  function zr() {
  }
  function Vf(e, t) {
    var n = Ie();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && mr(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function Kf(e, t) {
    var n = Ie();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && mr(t, l[1]))
      return l[0];
    if (l = e(), Dl) {
      Gt(!0);
      try {
        e();
      } finally {
        Gt(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function jr(e, t, n) {
    return n === void 0 || (An & 1073741824) !== 0 && (Se & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Jd(), de.lanes |= e, nl |= e, n);
  }
  function Jf(e, t, n, l) {
    return Ut(n, t) ? n : ia.current !== null ? (e = jr(e, n, l), Ut(e, t) || (tt = !0), e) : (An & 42) === 0 || (An & 1073741824) !== 0 && (Se & 261930) === 0 ? (tt = !0, e.memoizedState = n) : (e = Jd(), de.lanes |= e, nl |= e, t);
  }
  function $f(e, t, n, l, a) {
    var c = $.p;
    $.p = c !== 0 && 8 > c ? c : 8;
    var s = H.T, p = {};
    H.T = p, Dr(e, !1, t, n);
    try {
      var S = a(), T = H.S;
      if (T !== null && T(p, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var k = Mv(
          S,
          l
        );
        Pa(
          e,
          t,
          k,
          Yt(e)
        );
      } else
        Pa(
          e,
          t,
          l,
          Yt(e)
        );
    } catch (X) {
      Pa(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: X },
        Yt()
      );
    } finally {
      $.p = c, s !== null && p.types !== null && (s.types = p.types), H.T = s;
    }
  }
  function Lv() {
  }
  function Nr(e, t, n, l) {
    if (e.tag !== 5) throw Error(o(476));
    var a = Wf(e).queue;
    $f(
      e,
      a,
      t,
      te,
      n === null ? Lv : function() {
        return Ff(e), n(l);
      }
    );
  }
  function Wf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: te,
      baseState: te,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _n,
        lastRenderedState: te
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _n,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Ff(e) {
    var t = Wf(e);
    t.next === null && (t = e.alternate.memoizedState), Pa(
      e,
      t.next.queue,
      {},
      Yt()
    );
  }
  function Tr() {
    return mt(vi);
  }
  function If() {
    return Ie().memoizedState;
  }
  function Pf() {
    return Ie().memoizedState;
  }
  function kv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Yt();
          e = Wn(n);
          var l = Fn(t, e, n);
          l !== null && (Rt(l, t, n), Ja(l, t, n)), t = { cache: lr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function qv(e, t, n) {
    var l = Yt();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, pu(e) ? td(t, n) : (n = Vc(e, t, n, l), n !== null && (Rt(n, e, l), nd(n, t, l)));
  }
  function ed(e, t, n) {
    var l = Yt();
    Pa(e, t, n, l);
  }
  function Pa(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (pu(e)) td(t, a);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var s = t.lastRenderedState, p = c(s, n);
          if (a.hasEagerState = !0, a.eagerState = p, Ut(p, s))
            return $i(e, t, a, 0), Le === null && Ji(), !1;
        } catch {
        }
      if (n = Vc(e, t, a, l), n !== null)
        return Rt(n, e, l), nd(n, t, l), !0;
    }
    return !1;
  }
  function Dr(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: co(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, pu(e)) {
      if (t) throw Error(o(479));
    } else
      t = Vc(
        e,
        n,
        l,
        2
      ), t !== null && Rt(t, e, 2);
  }
  function pu(e) {
    var t = e.alternate;
    return e === de || t !== null && t === de;
  }
  function td(e, t) {
    ua = ru = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function nd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Ot(e, n);
    }
  }
  var ei = {
    readContext: mt,
    use: fu,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useLayoutEffect: Ke,
    useInsertionEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    useHostTransitionStatus: Ke,
    useFormState: Ke,
    useActionState: Ke,
    useOptimistic: Ke,
    useMemoCache: Ke,
    useCacheRefresh: Ke
  };
  ei.useEffectEvent = Ke;
  var ld = {
    readContext: mt,
    use: fu,
    useCallback: function(e, t) {
      return Ct().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: mt,
    useEffect: qf,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, hu(
        4194308,
        4,
        Zf.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return hu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      hu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Ct();
      t = t === void 0 ? null : t;
      var l = e();
      if (Dl) {
        Gt(!0);
        try {
          e();
        } finally {
          Gt(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = Ct();
      if (n !== void 0) {
        var a = n(t);
        if (Dl) {
          Gt(!0);
          try {
            n(t);
          } finally {
            Gt(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = qv.bind(
        null,
        de,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ct();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Cr(e);
      var t = e.queue, n = ed.bind(null, de, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: zr,
    useDeferredValue: function(e, t) {
      var n = Ct();
      return jr(n, e, t);
    },
    useTransition: function() {
      var e = Cr(!1);
      return e = $f.bind(
        null,
        de,
        e.queue,
        !0,
        !1
      ), Ct().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = de, a = Ct();
      if (Ee) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), Le === null)
          throw Error(o(349));
        (Se & 127) !== 0 || wf(l, t, n);
      }
      a.memoizedState = n;
      var c = { value: n, getSnapshot: t };
      return a.queue = c, qf(jf.bind(null, l, c, e), [
        e
      ]), l.flags |= 2048, ra(
        9,
        { destroy: void 0 },
        zf.bind(
          null,
          l,
          c,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = Ct(), t = Le.identifierPrefix;
      if (Ee) {
        var n = vn, l = pn;
        n = (l & ~(1 << 32 - yt(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = ou++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Rv++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Tr,
    useFormState: Uf,
    useActionState: Uf,
    useOptimistic: function(e) {
      var t = Ct();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Dr.bind(
        null,
        de,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: br,
    useCacheRefresh: function() {
      return Ct().memoizedState = kv.bind(
        null,
        de
      );
    },
    useEffectEvent: function(e) {
      var t = Ct(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ae & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Ar = {
    readContext: mt,
    use: fu,
    useCallback: Vf,
    useContext: mt,
    useEffect: wr,
    useImperativeHandle: Qf,
    useInsertionEffect: Xf,
    useLayoutEffect: Gf,
    useMemo: Kf,
    useReducer: du,
    useRef: kf,
    useState: function() {
      return du(_n);
    },
    useDebugValue: zr,
    useDeferredValue: function(e, t) {
      var n = Ie();
      return Jf(
        n,
        Ue.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = du(_n)[0], t = Ie().memoizedState;
      return [
        typeof e == "boolean" ? e : Ia(e),
        t
      ];
    },
    useSyncExternalStore: Ef,
    useId: If,
    useHostTransitionStatus: Tr,
    useFormState: Hf,
    useActionState: Hf,
    useOptimistic: function(e, t) {
      var n = Ie();
      return Df(n, Ue, e, t);
    },
    useMemoCache: br,
    useCacheRefresh: Pf
  };
  Ar.useEffectEvent = Yf;
  var ad = {
    readContext: mt,
    use: fu,
    useCallback: Vf,
    useContext: mt,
    useEffect: wr,
    useImperativeHandle: Qf,
    useInsertionEffect: Xf,
    useLayoutEffect: Gf,
    useMemo: Kf,
    useReducer: Sr,
    useRef: kf,
    useState: function() {
      return Sr(_n);
    },
    useDebugValue: zr,
    useDeferredValue: function(e, t) {
      var n = Ie();
      return Ue === null ? jr(n, e, t) : Jf(
        n,
        Ue.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Sr(_n)[0], t = Ie().memoizedState;
      return [
        typeof e == "boolean" ? e : Ia(e),
        t
      ];
    },
    useSyncExternalStore: Ef,
    useId: If,
    useHostTransitionStatus: Tr,
    useFormState: Lf,
    useActionState: Lf,
    useOptimistic: function(e, t) {
      var n = Ie();
      return Ue !== null ? Df(n, Ue, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: br,
    useCacheRefresh: Pf
  };
  ad.useEffectEvent = Yf;
  function _r(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Mr = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = Yt(), a = Wn(l);
      a.payload = t, n != null && (a.callback = n), t = Fn(e, a, l), t !== null && (Rt(t, e, l), Ja(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = Yt(), a = Wn(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Fn(e, a, l), t !== null && (Rt(t, e, l), Ja(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Yt(), l = Wn(n);
      l.tag = 2, t != null && (l.callback = t), t = Fn(e, l, n), t !== null && (Rt(t, e, n), Ja(t, e, n));
    }
  };
  function id(e, t, n, l, a, c, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, c, s) : t.prototype && t.prototype.isPureReactComponent ? !qa(n, l) || !qa(a, c) : !0;
  }
  function ud(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Mr.enqueueReplaceState(t, t.state, null);
  }
  function Al(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = b({}, n));
      for (var a in e)
        n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function cd(e) {
    Ki(e);
  }
  function rd(e) {
    console.error(e);
  }
  function od(e) {
    Ki(e);
  }
  function vu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function sd(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Rr(e, t, n) {
    return n = Wn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      vu(e, t);
    }, n;
  }
  function fd(e) {
    return e = Wn(e), e.tag = 3, e;
  }
  function dd(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var c = l.value;
      e.payload = function() {
        return a(c);
      }, e.callback = function() {
        sd(t, n, l);
      };
    }
    var s = n.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      sd(t, n, l), typeof a != "function" && (ll === null ? ll = /* @__PURE__ */ new Set([this]) : ll.add(this));
      var p = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function Yv(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && ea(
        t,
        n,
        a,
        !0
      ), n = Bt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return en === null ? Tu() : n.alternate === null && Je === 0 && (Je = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === lu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), ao(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === lu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), ao(e, l, a)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return ao(e, l, a), Tu(), !1;
    }
    if (Ee)
      return t = Bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== Ic && (e = Error(o(422), { cause: l }), Ga(Wt(e, n)))) : (l !== Ic && (t = Error(o(423), {
        cause: l
      }), Ga(
        Wt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = Wt(l, n), a = Rr(
        e.stateNode,
        l,
        a
      ), or(e, a), Je !== 4 && (Je = 2)), !1;
    var c = Error(o(520), { cause: l });
    if (c = Wt(c, n), ri === null ? ri = [c] : ri.push(c), Je !== 4 && (Je = 2), t === null) return !0;
    l = Wt(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Rr(n.stateNode, l, e), or(n, e), !1;
        case 1:
          if (t = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (ll === null || !ll.has(c))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = fd(a), dd(
              a,
              e,
              n,
              l
            ), or(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Or = Error(o(461)), tt = !1;
  function pt(e, t, n, l) {
    t.child = e === null ? vf(t, null, n, l) : Tl(
      t,
      e.child,
      n,
      l
    );
  }
  function hd(e, t, n, l, a) {
    n = n.render;
    var c = t.ref;
    if ("ref" in l) {
      var s = {};
      for (var p in l)
        p !== "ref" && (s[p] = l[p]);
    } else s = l;
    return wl(t), l = pr(
      e,
      t,
      n,
      s,
      c,
      a
    ), p = vr(), e !== null && !tt ? (gr(e, t, a), Mn(e, t, a)) : (Ee && p && Wc(t), t.flags |= 1, pt(e, t, l, a), t.child);
  }
  function md(e, t, n, l, a) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !Kc(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = c, pd(
        e,
        t,
        c,
        l,
        a
      )) : (e = Fi(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !Xr(e, a)) {
      var s = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : qa, n(s, l) && e.ref === t.ref)
        return Mn(e, t, a);
    }
    return t.flags |= 1, e = jn(c, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function pd(e, t, n, l, a) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (qa(c, l) && e.ref === t.ref)
        if (tt = !1, t.pendingProps = l = c, Xr(e, a))
          (e.flags & 131072) !== 0 && (tt = !0);
        else
          return t.lanes = e.lanes, Mn(e, t, a);
    }
    return Ur(
      e,
      t,
      n,
      l,
      a
    );
  }
  function vd(e, t, n, l) {
    var a = l.children, c = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, a = 0; l !== null; )
            a = a | l.lanes | l.childLanes, l = l.sibling;
          l = a & ~c;
        } else l = 0, t.child = null;
        return gd(
          e,
          t,
          c,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && tu(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? bf(t, c) : fr(), xf(t);
      else
        return l = t.lanes = 536870912, gd(
          e,
          t,
          c !== null ? c.baseLanes | n : n,
          n,
          l
        );
    } else
      c !== null ? (tu(t, c.cachePool), bf(t, c), Pn(), t.memoizedState = null) : (e !== null && tu(t, null), fr(), Pn());
    return pt(e, t, a, n), t.child;
  }
  function ti(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function gd(e, t, n, l, a) {
    var c = ir();
    return c = c === null ? null : { parent: Pe._currentValue, pool: c }, t.memoizedState = {
      baseLanes: n,
      cachePool: c
    }, e !== null && tu(t, null), fr(), xf(t), e !== null && ea(e, t, l, !0), t.childLanes = a, null;
  }
  function gu(e, t) {
    return t = bu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function yd(e, t, n) {
    return Tl(t, e.child, null, n), e = gu(t, t.pendingProps), e.flags |= 2, Lt(t), t.memoizedState = null, e;
  }
  function Xv(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ee) {
        if (l.mode === "hidden")
          return e = gu(t, l), t.lanes = 536870912, ti(null, e);
        if (hr(t), (e = Ye) ? (e = Ah(
          e,
          Pt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Qn !== null ? { id: pn, overflow: vn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = ef(e), n.return = t, t.child = n, ht = t, Ye = null)) : e = null, e === null) throw Kn(t);
        return t.lanes = 536870912, null;
      }
      return gu(t, l);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var s = c.dehydrated;
      if (hr(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = yd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (tt || ea(e, t, n, !1), a = (n & e.childLanes) !== 0, tt || a) {
        if (l = Le, l !== null && (s = Qt(l, n), s !== 0 && s !== c.retryLane))
          throw c.retryLane = s, xl(e, s), Rt(l, e, s), Or;
        Tu(), t = yd(
          e,
          t,
          n
        );
      } else
        e = c.treeContext, Ye = tn(s.nextSibling), ht = t, Ee = !0, Vn = null, Pt = !1, e !== null && lf(t, e), t = gu(t, l), t.flags |= 4096;
      return t;
    }
    return e = jn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function yu(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Ur(e, t, n, l, a) {
    return wl(t), n = pr(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = vr(), e !== null && !tt ? (gr(e, t, a), Mn(e, t, a)) : (Ee && l && Wc(t), t.flags |= 1, pt(e, t, n, a), t.child);
  }
  function bd(e, t, n, l, a, c) {
    return wl(t), t.updateQueue = null, n = Cf(
      t,
      l,
      n,
      a
    ), Sf(e), l = vr(), e !== null && !tt ? (gr(e, t, c), Mn(e, t, c)) : (Ee && l && Wc(t), t.flags |= 1, pt(e, t, n, c), t.child);
  }
  function xd(e, t, n, l, a) {
    if (wl(t), t.stateNode === null) {
      var c = Wl, s = n.contextType;
      typeof s == "object" && s !== null && (c = mt(s)), c = new n(l, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Mr, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = l, c.state = t.memoizedState, c.refs = {}, cr(t), s = n.contextType, c.context = typeof s == "object" && s !== null ? mt(s) : Wl, c.state = t.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (_r(
        t,
        n,
        s,
        l
      ), c.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (s = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), s !== c.state && Mr.enqueueReplaceState(c, c.state, null), Wa(t, l, c, a), $a(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      c = t.stateNode;
      var p = t.memoizedProps, S = Al(n, p);
      c.props = S;
      var T = c.context, k = n.contextType;
      s = Wl, typeof k == "object" && k !== null && (s = mt(k));
      var X = n.getDerivedStateFromProps;
      k = typeof X == "function" || typeof c.getSnapshotBeforeUpdate == "function", p = t.pendingProps !== p, k || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p || T !== s) && ud(
        t,
        c,
        l,
        s
      ), $n = !1;
      var D = t.memoizedState;
      c.state = D, Wa(t, l, c, a), $a(), T = t.memoizedState, p || D !== T || $n ? (typeof X == "function" && (_r(
        t,
        n,
        X,
        l
      ), T = t.memoizedState), (S = $n || id(
        t,
        n,
        S,
        l,
        D,
        T,
        s
      )) ? (k || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = T), c.props = l, c.state = T, c.context = s, l = S) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      c = t.stateNode, rr(e, t), s = t.memoizedProps, k = Al(n, s), c.props = k, X = t.pendingProps, D = c.context, T = n.contextType, S = Wl, typeof T == "object" && T !== null && (S = mt(T)), p = n.getDerivedStateFromProps, (T = typeof p == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (s !== X || D !== S) && ud(
        t,
        c,
        l,
        S
      ), $n = !1, D = t.memoizedState, c.state = D, Wa(t, l, c, a), $a();
      var U = t.memoizedState;
      s !== X || D !== U || $n || e !== null && e.dependencies !== null && Pi(e.dependencies) ? (typeof p == "function" && (_r(
        t,
        n,
        p,
        l
      ), U = t.memoizedState), (k = $n || id(
        t,
        n,
        k,
        l,
        D,
        U,
        S
      ) || e !== null && e.dependencies !== null && Pi(e.dependencies)) ? (T || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, U, S), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        l,
        U,
        S
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || s === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = U), c.props = l, c.state = U, c.context = S, l = k) : (typeof c.componentDidUpdate != "function" || s === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return c = l, yu(e, t), l = (t.flags & 128) !== 0, c || l ? (c = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && l ? (t.child = Tl(
      t,
      e.child,
      null,
      a
    ), t.child = Tl(
      t,
      null,
      n,
      a
    )) : pt(e, t, n, a), t.memoizedState = c.state, e = t.child) : e = Mn(
      e,
      t,
      a
    ), e;
  }
  function Sd(e, t, n, l) {
    return Cl(), t.flags |= 256, pt(e, t, n, l), t.child;
  }
  var Hr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Br(e) {
    return { baseLanes: e, cachePool: sf() };
  }
  function Lr(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= qt), e;
  }
  function Cd(e, t, n) {
    var l = t.pendingProps, a = !1, c = (t.flags & 128) !== 0, s;
    if ((s = c) || (s = e !== null && e.memoizedState === null ? !1 : (Fe.current & 2) !== 0), s && (a = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ee) {
        if (a ? In(t) : Pn(), (e = Ye) ? (e = Ah(
          e,
          Pt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Qn !== null ? { id: pn, overflow: vn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = ef(e), n.return = t, t.child = n, ht = t, Ye = null)) : e = null, e === null) throw Kn(t);
        return So(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var p = l.children;
      return l = l.fallback, a ? (Pn(), a = t.mode, p = bu(
        { mode: "hidden", children: p },
        a
      ), l = Sl(
        l,
        a,
        n,
        null
      ), p.return = t, l.return = t, p.sibling = l, t.child = p, l = t.child, l.memoizedState = Br(n), l.childLanes = Lr(
        e,
        s,
        n
      ), t.memoizedState = Hr, ti(null, l)) : (In(t), kr(t, p));
    }
    var S = e.memoizedState;
    if (S !== null && (p = S.dehydrated, p !== null)) {
      if (c)
        t.flags & 256 ? (In(t), t.flags &= -257, t = qr(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Pn(), t.child = e.child, t.flags |= 128, t = null) : (Pn(), p = l.fallback, a = t.mode, l = bu(
          { mode: "visible", children: l.children },
          a
        ), p = Sl(
          p,
          a,
          n,
          null
        ), p.flags |= 2, l.return = t, p.return = t, l.sibling = p, t.child = l, Tl(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = Br(n), l.childLanes = Lr(
          e,
          s,
          n
        ), t.memoizedState = Hr, t = ti(null, l));
      else if (In(t), So(p)) {
        if (s = p.nextSibling && p.nextSibling.dataset, s) var T = s.dgst;
        s = T, l = Error(o(419)), l.stack = "", l.digest = s, Ga({ value: l, source: null, stack: null }), t = qr(
          e,
          t,
          n
        );
      } else if (tt || ea(e, t, n, !1), s = (n & e.childLanes) !== 0, tt || s) {
        if (s = Le, s !== null && (l = Qt(s, n), l !== 0 && l !== S.retryLane))
          throw S.retryLane = l, xl(e, l), Rt(s, e, l), Or;
        xo(p) || Tu(), t = qr(
          e,
          t,
          n
        );
      } else
        xo(p) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Ye = tn(
          p.nextSibling
        ), ht = t, Ee = !0, Vn = null, Pt = !1, e !== null && lf(t, e), t = kr(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Pn(), p = l.fallback, a = t.mode, S = e.child, T = S.sibling, l = jn(S, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = S.subtreeFlags & 65011712, T !== null ? p = jn(
      T,
      p
    ) : (p = Sl(
      p,
      a,
      n,
      null
    ), p.flags |= 2), p.return = t, l.return = t, l.sibling = p, t.child = l, ti(null, l), l = t.child, p = e.child.memoizedState, p === null ? p = Br(n) : (a = p.cachePool, a !== null ? (S = Pe._currentValue, a = a.parent !== S ? { parent: S, pool: S } : a) : a = sf(), p = {
      baseLanes: p.baseLanes | n,
      cachePool: a
    }), l.memoizedState = p, l.childLanes = Lr(
      e,
      s,
      n
    ), t.memoizedState = Hr, ti(e.child, l)) : (In(t), n = e.child, e = n.sibling, n = jn(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function kr(e, t) {
    return t = bu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function bu(e, t) {
    return e = Ht(22, e, null, t), e.lanes = 0, e;
  }
  function qr(e, t, n) {
    return Tl(t, e.child, null, n), e = kr(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ed(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), tr(e.return, t, n);
  }
  function Yr(e, t, n, l, a, c) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: a,
      treeForkCount: c
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = n, s.tailMode = a, s.treeForkCount = c);
  }
  function wd(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, c = l.tail;
    l = l.children;
    var s = Fe.current, p = (s & 2) !== 0;
    if (p ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, K(Fe, s), pt(e, t, l, n), l = Ee ? Xa : 0, !p && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Ed(e, n, t);
        else if (e.tag === 19)
          Ed(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; )
          e = n.alternate, e !== null && cu(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Yr(
          t,
          !1,
          a,
          n,
          c,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && cu(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        Yr(
          t,
          !0,
          n,
          null,
          c,
          l
        );
        break;
      case "together":
        Yr(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Mn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), nl |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (ea(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = jn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = jn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Xr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Pi(e)));
  }
  function Gv(e, t, n) {
    switch (t.tag) {
      case 3:
        Oe(t, t.stateNode.containerInfo), Jn(t, Pe, e.memoizedState.cache), Cl();
        break;
      case 27:
      case 5:
        ge(t);
        break;
      case 4:
        Oe(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, hr(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (In(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Cd(e, t, n) : (In(t), e = Mn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        In(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (ea(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), a) {
          if (l)
            return wd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), K(Fe, Fe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, vd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Jn(t, Pe, e.memoizedState.cache);
    }
    return Mn(e, t, n);
  }
  function zd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        tt = !0;
      else {
        if (!Xr(e, n) && (t.flags & 128) === 0)
          return tt = !1, Gv(
            e,
            t,
            n
          );
        tt = (e.flags & 131072) !== 0;
      }
    else
      tt = !1, Ee && (t.flags & 1048576) !== 0 && nf(t, Xa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = jl(t.elementType), t.type = e, typeof e == "function")
            Kc(e) ? (l = Al(e, l), t.tag = 1, t = xd(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = Ur(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === W) {
                t.tag = 11, t = hd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === M) {
                t.tag = 14, t = md(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = ke(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Ur(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, a = Al(
          l,
          t.pendingProps
        ), xd(
          e,
          t,
          l,
          a,
          n
        );
      case 3:
        e: {
          if (Oe(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var c = t.memoizedState;
          a = c.element, rr(e, t), Wa(t, l, null, n);
          var s = t.memoizedState;
          if (l = s.cache, Jn(t, Pe, l), l !== c.cache && nr(
            t,
            [Pe],
            n,
            !0
          ), $a(), l = s.element, c.isDehydrated)
            if (c = {
              element: l,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = Sd(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== a) {
              a = Wt(
                Error(o(424)),
                t
              ), Ga(a), t = Sd(
                e,
                t,
                l,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ye = tn(e.firstChild), ht = t, Ee = !0, Vn = null, Pt = !0, n = vf(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Cl(), l === a) {
              t = Mn(
                e,
                t,
                n
              );
              break e;
            }
            pt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return yu(e, t), e === null ? (n = Hh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ee || (n = t.type, e = t.pendingProps, l = Uu(
          ue.current
        ).createElement(n), l[dt] = t, l[Nt] = e, vt(l, n, e), rt(l), t.stateNode = l) : t.memoizedState = Hh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ge(t), e === null && Ee && (l = t.stateNode = Rh(
          t.type,
          t.pendingProps,
          ue.current
        ), ht = t, Pt = !0, a = Ye, cl(t.type) ? (Co = a, Ye = tn(l.firstChild)) : Ye = a), pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), yu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ee && ((a = l = Ye) && (l = bg(
          l,
          t.type,
          t.pendingProps,
          Pt
        ), l !== null ? (t.stateNode = l, ht = t, Ye = tn(l.firstChild), Pt = !1, a = !0) : a = !1), a || Kn(t)), ge(t), a = t.type, c = t.pendingProps, s = e !== null ? e.memoizedProps : null, l = c.children, go(a, c) ? l = null : s !== null && go(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = pr(
          e,
          t,
          Ov,
          null,
          null,
          n
        ), vi._currentValue = a), yu(e, t), pt(e, t, l, n), t.child;
      case 6:
        return e === null && Ee && ((e = n = Ye) && (n = xg(
          n,
          t.pendingProps,
          Pt
        ), n !== null ? (t.stateNode = n, ht = t, Ye = null, e = !0) : e = !1), e || Kn(t)), null;
      case 13:
        return Cd(e, t, n);
      case 4:
        return Oe(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = Tl(
          t,
          null,
          l,
          n
        ) : pt(e, t, l, n), t.child;
      case 11:
        return hd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return pt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, Jn(t, t.type, l.value), pt(e, t, l.children, n), t.child;
      case 9:
        return a = t.type._context, l = t.pendingProps.children, wl(t), a = mt(a), l = l(a), t.flags |= 1, pt(e, t, l, n), t.child;
      case 14:
        return md(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return pd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return wd(e, t, n);
      case 31:
        return Xv(e, t, n);
      case 22:
        return vd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return wl(t), l = mt(Pe), e === null ? (a = ir(), a === null && (a = Le, c = lr(), a.pooledCache = c, c.refCount++, c !== null && (a.pooledCacheLanes |= n), a = c), t.memoizedState = { parent: l, cache: a }, cr(t), Jn(t, Pe, a)) : ((e.lanes & n) !== 0 && (rr(e, t), Wa(t, null, null, n), $a()), a = e.memoizedState, c = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Jn(t, Pe, l)) : (l = c.cache, Jn(t, Pe, l), l !== a.cache && nr(
          t,
          [Pe],
          n,
          !0
        ))), pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Rn(e) {
    e.flags |= 4;
  }
  function Gr(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Id()) e.flags |= 8192;
        else
          throw Nl = lu, ur;
    } else e.flags &= -16777217;
  }
  function jd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Yh(t))
      if (Id()) e.flags |= 8192;
      else
        throw Nl = lu, ur;
  }
  function xu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? bt() : 536870912, e.lanes |= t, da |= t);
  }
  function ni(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags & 65011712, l |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags, l |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function Zv(e, t, n) {
    var l = t.pendingProps;
    switch (Fc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Xe(t), null;
      case 1:
        return Xe(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Dn(Pe), je(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Pl(t) ? Rn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Pc())), Xe(t), null;
      case 26:
        var a = t.type, c = t.memoizedState;
        return e === null ? (Rn(t), c !== null ? (Xe(t), jd(t, c)) : (Xe(t), Gr(
          t,
          a,
          null,
          l,
          n
        ))) : c ? c !== e.memoizedState ? (Rn(t), Xe(t), jd(t, c)) : (Xe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Rn(t), Xe(t), Gr(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (J(t), n = ue.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Rn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Xe(t), null;
          }
          e = I.current, Pl(t) ? af(t) : (e = Rh(a, l, n), t.stateNode = e, Rn(t));
        }
        return Xe(t), null;
      case 5:
        if (J(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Rn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Xe(t), null;
          }
          if (c = I.current, Pl(t))
            af(t);
          else {
            var s = Uu(
              ue.current
            );
            switch (c) {
              case 1:
                c = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                c = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    c = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    c = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    c = s.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(
                      c.firstChild
                    );
                    break;
                  case "select":
                    c = typeof l.is == "string" ? s.createElement("select", {
                      is: l.is
                    }) : s.createElement("select"), l.multiple ? c.multiple = !0 : l.size && (c.size = l.size);
                    break;
                  default:
                    c = typeof l.is == "string" ? s.createElement(a, { is: l.is }) : s.createElement(a);
                }
            }
            c[dt] = t, c[Nt] = l;
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                c.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === t) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === t)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            t.stateNode = c;
            e: switch (vt(c, a, l), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Rn(t);
          }
        }
        return Xe(t), Gr(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Rn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = ue.current, Pl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = ht, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[dt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Ch(e.nodeValue, n)), e || Kn(t, !0);
          } else
            e = Uu(e).createTextNode(
              l
            ), e[dt] = t, t.stateNode = e;
        }
        return Xe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Pl(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[dt] = t;
            } else
              Cl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Xe(t), e = !1;
          } else
            n = Pc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Lt(t), t) : (Lt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Xe(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Pl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[dt] = t;
            } else
              Cl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Xe(t), a = !1;
          } else
            a = Pc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Lt(t), t) : (Lt(t), null);
        }
        return Lt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), c = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool), c !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), xu(t, t.updateQueue), Xe(t), null);
      case 4:
        return je(), e === null && fo(t.stateNode.containerInfo), Xe(t), null;
      case 10:
        return Dn(t.type), Xe(t), null;
      case 19:
        if (B(Fe), l = t.memoizedState, l === null) return Xe(t), null;
        if (a = (t.flags & 128) !== 0, c = l.rendering, c === null)
          if (a) ni(l, !1);
          else {
            if (Je !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = cu(e), c !== null) {
                  for (t.flags |= 128, ni(l, !1), e = c.updateQueue, t.updateQueue = e, xu(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Ps(n, e), n = n.sibling;
                  return K(
                    Fe,
                    Fe.current & 1 | 2
                  ), Ee && Nn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && gt() > zu && (t.flags |= 128, a = !0, ni(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = cu(c), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, xu(t, e), ni(l, !0), l.tail === null && l.tailMode === "hidden" && !c.alternate && !Ee)
                return Xe(t), null;
            } else
              2 * gt() - l.renderingStartTime > zu && n !== 536870912 && (t.flags |= 128, a = !0, ni(l, !1), t.lanes = 4194304);
          l.isBackwards ? (c.sibling = t.child, t.child = c) : (e = l.last, e !== null ? e.sibling = c : t.child = c, l.last = c);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = gt(), e.sibling = null, n = Fe.current, K(
          Fe,
          a ? n & 1 | 2 : n & 1
        ), Ee && Nn(t, l.treeForkCount), e) : (Xe(t), null);
      case 22:
      case 23:
        return Lt(t), dr(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t), n = t.updateQueue, n !== null && xu(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && B(zl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Dn(Pe), Xe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Qv(e, t) {
    switch (Fc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Dn(Pe), je(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return J(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Lt(t), t.alternate === null)
            throw Error(o(340));
          Cl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Lt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Cl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return B(Fe), null;
      case 4:
        return je(), null;
      case 10:
        return Dn(t.type), null;
      case 22:
      case 23:
        return Lt(t), dr(), e !== null && B(zl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Dn(Pe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Nd(e, t) {
    switch (Fc(t), t.tag) {
      case 3:
        Dn(Pe), je();
        break;
      case 26:
      case 27:
      case 5:
        J(t);
        break;
      case 4:
        je();
        break;
      case 31:
        t.memoizedState !== null && Lt(t);
        break;
      case 13:
        Lt(t);
        break;
      case 19:
        B(Fe);
        break;
      case 10:
        Dn(t.type);
        break;
      case 22:
      case 23:
        Lt(t), dr(), e !== null && B(zl);
        break;
      case 24:
        Dn(Pe);
    }
  }
  function li(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var a = l.next;
        n = a;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var c = n.create, s = n.inst;
            l = c(), s.destroy = l;
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (p) {
      Re(t, t.return, p);
    }
  }
  function el(e, t, n) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var c = a.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            var s = l.inst, p = s.destroy;
            if (p !== void 0) {
              s.destroy = void 0, a = t;
              var S = n, T = p;
              try {
                T();
              } catch (k) {
                Re(
                  a,
                  S,
                  k
                );
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (k) {
      Re(t, t.return, k);
    }
  }
  function Td(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        yf(t, n);
      } catch (l) {
        Re(e, e.return, l);
      }
    }
  }
  function Dd(e, t, n) {
    n.props = Al(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Re(e, t, l);
    }
  }
  function ai(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (a) {
      Re(e, t, a);
    }
  }
  function gn(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (a) {
          Re(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (a) {
          Re(e, t, a);
        }
      else n.current = null;
  }
  function Ad(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (a) {
      Re(e, e.return, a);
    }
  }
  function Zr(e, t, n) {
    try {
      var l = e.stateNode;
      hg(l, e.type, n, t), l[Nt] = t;
    } catch (a) {
      Re(e, e.return, a);
    }
  }
  function _d(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && cl(e.type) || e.tag === 4;
  }
  function Qr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || _d(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && cl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Vr(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = wn));
    else if (l !== 4 && (l === 27 && cl(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Vr(e, t, n), e = e.sibling; e !== null; )
        Vr(e, t, n), e = e.sibling;
  }
  function Su(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && cl(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Su(e, t, n), e = e.sibling; e !== null; )
        Su(e, t, n), e = e.sibling;
  }
  function Md(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      vt(t, l, n), t[dt] = e, t[Nt] = n;
    } catch (c) {
      Re(e, e.return, c);
    }
  }
  var On = !1, nt = !1, Kr = !1, Rd = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function Vv(e, t) {
    if (e = e.containerInfo, po = Xu, e = Zs(e), qc(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var a = l.anchorOffset, c = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break e;
            }
            var s = 0, p = -1, S = -1, T = 0, k = 0, X = e, D = null;
            t: for (; ; ) {
              for (var U; X !== n || a !== 0 && X.nodeType !== 3 || (p = s + a), X !== c || l !== 0 && X.nodeType !== 3 || (S = s + l), X.nodeType === 3 && (s += X.nodeValue.length), (U = X.firstChild) !== null; )
                D = X, X = U;
              for (; ; ) {
                if (X === e) break t;
                if (D === n && ++T === a && (p = s), D === c && ++k === l && (S = s), (U = X.nextSibling) !== null) break;
                X = D, D = X.parentNode;
              }
              X = U;
            }
            n = p === -1 || S === -1 ? null : { start: p, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (vo = { focusedElem: e, selectionRange: n }, Xu = !1, ot = t; ot !== null; )
      if (t = ot, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ot = e;
      else
        for (; ot !== null; ) {
          switch (t = ot, c = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  a = e[n], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                e = void 0, n = t, a = c.memoizedProps, c = c.memoizedState, l = n.stateNode;
                try {
                  var P = Al(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    P,
                    c
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (re) {
                  Re(
                    n,
                    n.return,
                    re
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  bo(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bo(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ot = e;
            break;
          }
          ot = t.return;
        }
  }
  function Od(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Hn(e, n), l & 4 && li(5, n);
        break;
      case 1:
        if (Hn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              Re(n, n.return, s);
            }
          else {
            var a = Al(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                a,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (s) {
              Re(
                n,
                n.return,
                s
              );
            }
          }
        l & 64 && Td(n), l & 512 && ai(n, n.return);
        break;
      case 3:
        if (Hn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            yf(e, t);
          } catch (s) {
            Re(n, n.return, s);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Md(n);
      case 26:
      case 5:
        Hn(e, n), t === null && l & 4 && Ad(n), l & 512 && ai(n, n.return);
        break;
      case 12:
        Hn(e, n);
        break;
      case 31:
        Hn(e, n), l & 4 && Bd(e, n);
        break;
      case 13:
        Hn(e, n), l & 4 && Ld(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = tg.bind(
          null,
          n
        ), Sg(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || On, !l) {
          t = t !== null && t.memoizedState !== null || nt, a = On;
          var c = nt;
          On = l, (nt = t) && !c ? Bn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Hn(e, n), On = a, nt = c;
        }
        break;
      case 30:
        break;
      default:
        Hn(e, n);
    }
  }
  function Ud(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ud(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ec(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ge = null, Dt = !1;
  function Un(e, t, n) {
    for (n = n.child; n !== null; )
      Hd(e, t, n), n = n.sibling;
  }
  function Hd(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(pl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        nt || gn(n, t), Un(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        nt || gn(n, t);
        var l = Ge, a = Dt;
        cl(n.type) && (Ge = n.stateNode, Dt = !1), Un(
          e,
          t,
          n
        ), hi(n.stateNode), Ge = l, Dt = a;
        break;
      case 5:
        nt || gn(n, t);
      case 6:
        if (l = Ge, a = Dt, Ge = null, Un(
          e,
          t,
          n
        ), Ge = l, Dt = a, Ge !== null)
          if (Dt)
            try {
              (Ge.nodeType === 9 ? Ge.body : Ge.nodeName === "HTML" ? Ge.ownerDocument.body : Ge).removeChild(n.stateNode);
            } catch (c) {
              Re(
                n,
                t,
                c
              );
            }
          else
            try {
              Ge.removeChild(n.stateNode);
            } catch (c) {
              Re(
                n,
                t,
                c
              );
            }
        break;
      case 18:
        Ge !== null && (Dt ? (e = Ge, Th(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), xa(e)) : Th(Ge, n.stateNode));
        break;
      case 4:
        l = Ge, a = Dt, Ge = n.stateNode.containerInfo, Dt = !0, Un(
          e,
          t,
          n
        ), Ge = l, Dt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        el(2, n, t), nt || el(4, n, t), Un(
          e,
          t,
          n
        );
        break;
      case 1:
        nt || (gn(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && Dd(
          n,
          t,
          l
        )), Un(
          e,
          t,
          n
        );
        break;
      case 21:
        Un(
          e,
          t,
          n
        );
        break;
      case 22:
        nt = (l = nt) || n.memoizedState !== null, Un(
          e,
          t,
          n
        ), nt = l;
        break;
      default:
        Un(
          e,
          t,
          n
        );
    }
  }
  function Bd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        xa(e);
      } catch (n) {
        Re(t, t.return, n);
      }
    }
  }
  function Ld(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        xa(e);
      } catch (n) {
        Re(t, t.return, n);
      }
  }
  function Kv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Rd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Rd()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Cu(e, t) {
    var n = Kv(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = ng.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function At(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], c = e, s = t, p = s;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (cl(p.type)) {
                Ge = p.stateNode, Dt = !1;
                break e;
              }
              break;
            case 5:
              Ge = p.stateNode, Dt = !1;
              break e;
            case 3:
            case 4:
              Ge = p.stateNode.containerInfo, Dt = !0;
              break e;
          }
          p = p.return;
        }
        if (Ge === null) throw Error(o(160));
        Hd(c, s, a), Ge = null, Dt = !1, c = a.alternate, c !== null && (c.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        kd(t, e), t = t.sibling;
  }
  var sn = null;
  function kd(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        At(t, e), _t(e), l & 4 && (el(3, e, e.return), li(3, e), el(5, e, e.return));
        break;
      case 1:
        At(t, e), _t(e), l & 512 && (nt || n === null || gn(n, n.return)), l & 64 && On && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = sn;
        if (At(t, e), _t(e), l & 512 && (nt || n === null || gn(n, n.return)), l & 4) {
          var c = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      c = a.getElementsByTagName("title")[0], (!c || c[_a] || c[dt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = a.createElement(l), a.head.insertBefore(
                        c,
                        a.querySelector("head > title")
                      )), vt(c, l, n), c[dt] = e, rt(c), l = c;
                      break e;
                    case "link":
                      var s = kh(
                        "link",
                        "href",
                        a
                      ).get(l + (n.href || ""));
                      if (s) {
                        for (var p = 0; p < s.length; p++)
                          if (c = s[p], c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            s.splice(p, 1);
                            break t;
                          }
                      }
                      c = a.createElement(l), vt(c, l, n), a.head.appendChild(c);
                      break;
                    case "meta":
                      if (s = kh(
                        "meta",
                        "content",
                        a
                      ).get(l + (n.content || ""))) {
                        for (p = 0; p < s.length; p++)
                          if (c = s[p], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            s.splice(p, 1);
                            break t;
                          }
                      }
                      c = a.createElement(l), vt(c, l, n), a.head.appendChild(c);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  c[dt] = e, rt(c), l = c;
                }
                e.stateNode = l;
              } else
                qh(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Lh(
                a,
                l,
                e.memoizedProps
              );
          else
            c !== l ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, l === null ? qh(
              a,
              e.type,
              e.stateNode
            ) : Lh(
              a,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && Zr(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        At(t, e), _t(e), l & 512 && (nt || n === null || gn(n, n.return)), n !== null && l & 4 && Zr(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (At(t, e), _t(e), l & 512 && (nt || n === null || gn(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            Gl(a, "");
          } catch (P) {
            Re(e, e.return, P);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, Zr(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (Kr = !0);
        break;
      case 6:
        if (At(t, e), _t(e), l & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (P) {
            Re(e, e.return, P);
          }
        }
        break;
      case 3:
        if (Lu = null, a = sn, sn = Hu(t.containerInfo), At(t, e), sn = a, _t(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            xa(t.containerInfo);
          } catch (P) {
            Re(e, e.return, P);
          }
        Kr && (Kr = !1, qd(e));
        break;
      case 4:
        l = sn, sn = Hu(
          e.stateNode.containerInfo
        ), At(t, e), _t(e), sn = l;
        break;
      case 12:
        At(t, e), _t(e);
        break;
      case 31:
        At(t, e), _t(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Cu(e, l)));
        break;
      case 13:
        At(t, e), _t(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (wu = gt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Cu(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null, T = On, k = nt;
        if (On = T || a, nt = k || S, At(t, e), nt = k, On = T, _t(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || S || On || nt || _l(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t;
                try {
                  if (c = S.stateNode, a)
                    s = c.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    p = S.stateNode;
                    var X = S.memoizedProps.style, D = X != null && X.hasOwnProperty("display") ? X.display : null;
                    p.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (P) {
                  Re(S, S.return, P);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = a ? "" : S.memoizedProps;
                } catch (P) {
                  Re(S, S.return, P);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                S = t;
                try {
                  var U = S.stateNode;
                  a ? Dh(U, !0) : Dh(S.stateNode, !1);
                } catch (P) {
                  Re(S, S.return, P);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, Cu(e, n))));
        break;
      case 19:
        At(t, e), _t(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Cu(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        At(t, e), _t(e);
    }
  }
  function _t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (_d(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, c = Qr(e);
            Su(e, c, a);
            break;
          case 5:
            var s = n.stateNode;
            n.flags & 32 && (Gl(s, ""), n.flags &= -33);
            var p = Qr(e);
            Su(e, p, s);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo, T = Qr(e);
            Vr(
              e,
              T,
              S
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (k) {
        Re(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function qd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        qd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Hn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Od(e, t.alternate, t), t = t.sibling;
  }
  function _l(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          el(4, t, t.return), _l(t);
          break;
        case 1:
          gn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Dd(
            t,
            t.return,
            n
          ), _l(t);
          break;
        case 27:
          hi(t.stateNode);
        case 26:
        case 5:
          gn(t, t.return), _l(t);
          break;
        case 22:
          t.memoizedState === null && _l(t);
          break;
        case 30:
          _l(t);
          break;
        default:
          _l(t);
      }
      e = e.sibling;
    }
  }
  function Bn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, c = t, s = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Bn(
            a,
            c,
            n
          ), li(4, c);
          break;
        case 1:
          if (Bn(
            a,
            c,
            n
          ), l = c, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (T) {
              Re(l, l.return, T);
            }
          if (l = c, a = l.updateQueue, a !== null) {
            var p = l.stateNode;
            try {
              var S = a.shared.hiddenCallbacks;
              if (S !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < S.length; a++)
                  gf(S[a], p);
            } catch (T) {
              Re(l, l.return, T);
            }
          }
          n && s & 64 && Td(c), ai(c, c.return);
          break;
        case 27:
          Md(c);
        case 26:
        case 5:
          Bn(
            a,
            c,
            n
          ), n && l === null && s & 4 && Ad(c), ai(c, c.return);
          break;
        case 12:
          Bn(
            a,
            c,
            n
          );
          break;
        case 31:
          Bn(
            a,
            c,
            n
          ), n && s & 4 && Bd(a, c);
          break;
        case 13:
          Bn(
            a,
            c,
            n
          ), n && s & 4 && Ld(a, c);
          break;
        case 22:
          c.memoizedState === null && Bn(
            a,
            c,
            n
          ), ai(c, c.return);
          break;
        case 30:
          break;
        default:
          Bn(
            a,
            c,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Jr(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Za(n));
  }
  function $r(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Za(e));
  }
  function fn(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Yd(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function Yd(e, t, n, l) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        fn(
          e,
          t,
          n,
          l
        ), a & 2048 && li(9, t);
        break;
      case 1:
        fn(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        fn(
          e,
          t,
          n,
          l
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Za(e)));
        break;
      case 12:
        if (a & 2048) {
          fn(
            e,
            t,
            n,
            l
          ), e = t.stateNode;
          try {
            var c = t.memoizedProps, s = c.id, p = c.onPostCommit;
            typeof p == "function" && p(
              s,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (S) {
            Re(t, t.return, S);
          }
        } else
          fn(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        fn(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        fn(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, s = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? fn(
          e,
          t,
          n,
          l
        ) : ii(e, t) : c._visibility & 2 ? fn(
          e,
          t,
          n,
          l
        ) : (c._visibility |= 2, oa(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Jr(s, t);
        break;
      case 24:
        fn(
          e,
          t,
          n,
          l
        ), a & 2048 && $r(t.alternate, t);
        break;
      default:
        fn(
          e,
          t,
          n,
          l
        );
    }
  }
  function oa(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var c = e, s = t, p = n, S = l, T = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          oa(
            c,
            s,
            p,
            S,
            a
          ), li(8, s);
          break;
        case 23:
          break;
        case 22:
          var k = s.stateNode;
          s.memoizedState !== null ? k._visibility & 2 ? oa(
            c,
            s,
            p,
            S,
            a
          ) : ii(
            c,
            s
          ) : (k._visibility |= 2, oa(
            c,
            s,
            p,
            S,
            a
          )), a && T & 2048 && Jr(
            s.alternate,
            s
          );
          break;
        case 24:
          oa(
            c,
            s,
            p,
            S,
            a
          ), a && T & 2048 && $r(s.alternate, s);
          break;
        default:
          oa(
            c,
            s,
            p,
            S,
            a
          );
      }
      t = t.sibling;
    }
  }
  function ii(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            ii(n, l), a & 2048 && Jr(
              l.alternate,
              l
            );
            break;
          case 24:
            ii(n, l), a & 2048 && $r(l.alternate, l);
            break;
          default:
            ii(n, l);
        }
        t = t.sibling;
      }
  }
  var ui = 8192;
  function sa(e, t, n) {
    if (e.subtreeFlags & ui)
      for (e = e.child; e !== null; )
        Xd(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Xd(e, t, n) {
    switch (e.tag) {
      case 26:
        sa(
          e,
          t,
          n
        ), e.flags & ui && e.memoizedState !== null && Rg(
          n,
          sn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        sa(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = sn;
        sn = Hu(e.stateNode.containerInfo), sa(
          e,
          t,
          n
        ), sn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = ui, ui = 16777216, sa(
          e,
          t,
          n
        ), ui = l) : sa(
          e,
          t,
          n
        ));
        break;
      default:
        sa(
          e,
          t,
          n
        );
    }
  }
  function Gd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ci(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ot = l, Qd(
            l,
            e
          );
        }
      Gd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Zd(e), e = e.sibling;
  }
  function Zd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ci(e), e.flags & 2048 && el(9, e, e.return);
        break;
      case 3:
        ci(e);
        break;
      case 12:
        ci(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Eu(e)) : ci(e);
        break;
      default:
        ci(e);
    }
  }
  function Eu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ot = l, Qd(
            l,
            e
          );
        }
      Gd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          el(8, t, t.return), Eu(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Eu(t));
          break;
        default:
          Eu(t);
      }
      e = e.sibling;
    }
  }
  function Qd(e, t) {
    for (; ot !== null; ) {
      var n = ot;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          el(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Za(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, ot = l;
      else
        e: for (n = e; ot !== null; ) {
          l = ot;
          var a = l.sibling, c = l.return;
          if (Ud(l), l === n) {
            ot = null;
            break e;
          }
          if (a !== null) {
            a.return = c, ot = a;
            break e;
          }
          ot = c;
        }
    }
  }
  var Jv = {
    getCacheForType: function(e) {
      var t = mt(Pe), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return mt(Pe).controller.signal;
    }
  }, $v = typeof WeakMap == "function" ? WeakMap : Map, Ae = 0, Le = null, be = null, Se = 0, Me = 0, kt = null, tl = !1, fa = !1, Wr = !1, Ln = 0, Je = 0, nl = 0, Ml = 0, Fr = 0, qt = 0, da = 0, ri = null, Mt = null, Ir = !1, wu = 0, Vd = 0, zu = 1 / 0, ju = null, ll = null, it = 0, al = null, ha = null, kn = 0, Pr = 0, eo = null, Kd = null, oi = 0, to = null;
  function Yt() {
    return (Ae & 2) !== 0 && Se !== 0 ? Se & -Se : H.T !== null ? co() : rn();
  }
  function Jd() {
    if (qt === 0)
      if ((Se & 536870912) === 0 || Ee) {
        var e = Hl;
        Hl <<= 1, (Hl & 3932160) === 0 && (Hl = 262144), qt = e;
      } else qt = 536870912;
    return e = Bt.current, e !== null && (e.flags |= 32), qt;
  }
  function Rt(e, t, n) {
    (e === Le && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null) && (ma(e, 0), il(
      e,
      Se,
      qt,
      !1
    )), Zt(e, n), ((Ae & 2) === 0 || e !== Le) && (e === Le && ((Ae & 2) === 0 && (Ml |= n), Je === 4 && il(
      e,
      Se,
      qt,
      !1
    )), yn(e));
  }
  function $d(e, t, n) {
    if ((Ae & 6) !== 0) throw Error(o(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || wt(e, t), a = l ? Iv(e, t) : lo(e, t, !0), c = l;
    do {
      if (a === 0) {
        fa && !l && il(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, c && !Wv(n)) {
          a = lo(e, t, !1), c = !1;
          continue;
        }
        if (a === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var s = 0;
          else
            s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            t = s;
            e: {
              var p = e;
              a = ri;
              var S = p.current.memoizedState.isDehydrated;
              if (S && (ma(p, s).flags |= 256), s = lo(
                p,
                s,
                !1
              ), s !== 2) {
                if (Wr && !S) {
                  p.errorRecoveryDisabledLanes |= c, Ml |= c, a = 4;
                  break e;
                }
                c = Mt, Mt = a, c !== null && (Mt === null ? Mt = c : Mt.push.apply(
                  Mt,
                  c
                ));
              }
              a = s;
            }
            if (c = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          ma(e, 0), il(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, c = a, c) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              il(
                l,
                t,
                qt,
                !tl
              );
              break e;
            case 2:
              Mt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (a = wu + 300 - gt(), 10 < a)) {
            if (il(
              l,
              t,
              qt,
              !tl
            ), ct(l, 0, !0) !== 0) break e;
            kn = t, l.timeoutHandle = jh(
              Wd.bind(
                null,
                l,
                n,
                Mt,
                ju,
                Ir,
                t,
                qt,
                Ml,
                da,
                tl,
                c,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          Wd(
            l,
            n,
            Mt,
            ju,
            Ir,
            t,
            qt,
            Ml,
            da,
            tl,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    yn(e);
  }
  function Wd(e, t, n, l, a, c, s, p, S, T, k, X, D, U) {
    if (e.timeoutHandle = -1, X = t.subtreeFlags, X & 8192 || (X & 16785408) === 16785408) {
      X = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: wn
      }, Xd(
        t,
        c,
        X
      );
      var P = (c & 62914560) === c ? wu - gt() : (c & 4194048) === c ? Vd - gt() : 0;
      if (P = Og(
        X,
        P
      ), P !== null) {
        kn = c, e.cancelPendingCommit = P(
          ah.bind(
            null,
            e,
            t,
            c,
            n,
            l,
            a,
            s,
            p,
            S,
            k,
            X,
            null,
            D,
            U
          )
        ), il(e, c, s, !T);
        return;
      }
    }
    ah(
      e,
      t,
      c,
      n,
      l,
      a,
      s,
      p,
      S
    );
  }
  function Wv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var a = n[l], c = a.getSnapshot;
          a = a.value;
          try {
            if (!Ut(c(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function il(e, t, n, l) {
    t &= ~Fr, t &= ~Ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var c = 31 - yt(a), s = 1 << c;
      l[c] = -1, a &= ~s;
    }
    n !== 0 && cn(e, n, t);
  }
  function Nu() {
    return (Ae & 6) === 0 ? (si(0), !1) : !0;
  }
  function no() {
    if (be !== null) {
      if (Me === 0)
        var e = be.return;
      else
        e = be, Tn = El = null, yr(e), aa = null, Va = 0, e = be;
      for (; e !== null; )
        Nd(e.alternate, e), e = e.return;
      be = null;
    }
  }
  function ma(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, vg(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), kn = 0, no(), Le = e, be = n = jn(e.current, null), Se = t, Me = 0, kt = null, tl = !1, fa = wt(e, t), Wr = !1, da = qt = Fr = Ml = nl = Je = 0, Mt = ri = null, Ir = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - yt(l), c = 1 << a;
        t |= e[a], l &= ~c;
      }
    return Ln = t, Ji(), n;
  }
  function Fd(e, t) {
    de = null, H.H = ei, t === la || t === nu ? (t = hf(), Me = 3) : t === ur ? (t = hf(), Me = 4) : Me = t === Or ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, kt = t, be === null && (Je = 1, vu(
      e,
      Wt(t, e.current)
    ));
  }
  function Id() {
    var e = Bt.current;
    return e === null ? !0 : (Se & 4194048) === Se ? en === null : (Se & 62914560) === Se || (Se & 536870912) !== 0 ? e === en : !1;
  }
  function Pd() {
    var e = H.H;
    return H.H = ei, e === null ? ei : e;
  }
  function eh() {
    var e = H.A;
    return H.A = Jv, e;
  }
  function Tu() {
    Je = 4, tl || (Se & 4194048) !== Se && Bt.current !== null || (fa = !0), (nl & 134217727) === 0 && (Ml & 134217727) === 0 || Le === null || il(
      Le,
      Se,
      qt,
      !1
    );
  }
  function lo(e, t, n) {
    var l = Ae;
    Ae |= 2;
    var a = Pd(), c = eh();
    (Le !== e || Se !== t) && (ju = null, ma(e, t)), t = !1;
    var s = Je;
    e: do
      try {
        if (Me !== 0 && be !== null) {
          var p = be, S = kt;
          switch (Me) {
            case 8:
              no(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Bt.current === null && (t = !0);
              var T = Me;
              if (Me = 0, kt = null, pa(e, p, S, T), n && fa) {
                s = 0;
                break e;
              }
              break;
            default:
              T = Me, Me = 0, kt = null, pa(e, p, S, T);
          }
        }
        Fv(), s = Je;
        break;
      } catch (k) {
        Fd(e, k);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Tn = El = null, Ae = l, H.H = a, H.A = c, be === null && (Le = null, Se = 0, Ji()), s;
  }
  function Fv() {
    for (; be !== null; ) th(be);
  }
  function Iv(e, t) {
    var n = Ae;
    Ae |= 2;
    var l = Pd(), a = eh();
    Le !== e || Se !== t ? (ju = null, zu = gt() + 500, ma(e, t)) : fa = wt(
      e,
      t
    );
    e: do
      try {
        if (Me !== 0 && be !== null) {
          t = be;
          var c = kt;
          t: switch (Me) {
            case 1:
              Me = 0, kt = null, pa(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (ff(c)) {
                Me = 0, kt = null, nh(t);
                break;
              }
              t = function() {
                Me !== 2 && Me !== 9 || Le !== e || (Me = 7), yn(e);
              }, c.then(t, t);
              break e;
            case 3:
              Me = 7;
              break e;
            case 4:
              Me = 5;
              break e;
            case 7:
              ff(c) ? (Me = 0, kt = null, nh(t)) : (Me = 0, kt = null, pa(e, t, c, 7));
              break;
            case 5:
              var s = null;
              switch (be.tag) {
                case 26:
                  s = be.memoizedState;
                case 5:
                case 27:
                  var p = be;
                  if (s ? Yh(s) : p.stateNode.complete) {
                    Me = 0, kt = null;
                    var S = p.sibling;
                    if (S !== null) be = S;
                    else {
                      var T = p.return;
                      T !== null ? (be = T, Du(T)) : be = null;
                    }
                    break t;
                  }
              }
              Me = 0, kt = null, pa(e, t, c, 5);
              break;
            case 6:
              Me = 0, kt = null, pa(e, t, c, 6);
              break;
            case 8:
              no(), Je = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Pv();
        break;
      } catch (k) {
        Fd(e, k);
      }
    while (!0);
    return Tn = El = null, H.H = l, H.A = a, Ae = n, be !== null ? 0 : (Le = null, Se = 0, Ji(), Je);
  }
  function Pv() {
    for (; be !== null && !Ol(); )
      th(be);
  }
  function th(e) {
    var t = zd(e.alternate, e, Ln);
    e.memoizedProps = e.pendingProps, t === null ? Du(e) : be = t;
  }
  function nh(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = bd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Se
        );
        break;
      case 11:
        t = bd(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Se
        );
        break;
      case 5:
        yr(t);
      default:
        Nd(n, t), t = be = Ps(t, Ln), t = zd(n, t, Ln);
    }
    e.memoizedProps = e.pendingProps, t === null ? Du(e) : be = t;
  }
  function pa(e, t, n, l) {
    Tn = El = null, yr(t), aa = null, Va = 0;
    var a = t.return;
    try {
      if (Yv(
        e,
        a,
        t,
        n,
        Se
      )) {
        Je = 1, vu(
          e,
          Wt(n, e.current)
        ), be = null;
        return;
      }
    } catch (c) {
      if (a !== null) throw be = a, c;
      Je = 1, vu(
        e,
        Wt(n, e.current)
      ), be = null;
      return;
    }
    t.flags & 32768 ? (Ee || l === 1 ? e = !0 : fa || (Se & 536870912) !== 0 ? e = !1 : (tl = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Bt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), lh(t, e)) : Du(t);
  }
  function Du(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        lh(
          t,
          tl
        );
        return;
      }
      e = t.return;
      var n = Zv(
        t.alternate,
        t,
        Ln
      );
      if (n !== null) {
        be = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    Je === 0 && (Je = 5);
  }
  function lh(e, t) {
    do {
      var n = Qv(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, be = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        be = e;
        return;
      }
      be = e = n;
    } while (e !== null);
    Je = 6, be = null;
  }
  function ah(e, t, n, l, a, c, s, p, S) {
    e.cancelPendingCommit = null;
    do
      Au();
    while (it !== 0);
    if ((Ae & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (c = t.lanes | t.childLanes, c |= Qc, at(
        e,
        n,
        c,
        s,
        p,
        S
      ), e === Le && (be = Le = null, Se = 0), ha = t, al = e, kn = n, Pr = c, eo = a, Kd = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, lg(un, function() {
        return oh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = H.T, H.T = null, a = $.p, $.p = 2, s = Ae, Ae |= 4;
        try {
          Vv(e, t, n);
        } finally {
          Ae = s, $.p = a, H.T = l;
        }
      }
      it = 1, ih(), uh(), ch();
    }
  }
  function ih() {
    if (it === 1) {
      it = 0;
      var e = al, t = ha, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = H.T, H.T = null;
        var l = $.p;
        $.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          kd(t, e);
          var c = vo, s = Zs(e.containerInfo), p = c.focusedElem, S = c.selectionRange;
          if (s !== p && p && p.ownerDocument && Gs(
            p.ownerDocument.documentElement,
            p
          )) {
            if (S !== null && qc(p)) {
              var T = S.start, k = S.end;
              if (k === void 0 && (k = T), "selectionStart" in p)
                p.selectionStart = T, p.selectionEnd = Math.min(
                  k,
                  p.value.length
                );
              else {
                var X = p.ownerDocument || document, D = X && X.defaultView || window;
                if (D.getSelection) {
                  var U = D.getSelection(), P = p.textContent.length, re = Math.min(S.start, P), Be = S.end === void 0 ? re : Math.min(S.end, P);
                  !U.extend && re > Be && (s = Be, Be = re, re = s);
                  var j = Xs(
                    p,
                    re
                  ), w = Xs(
                    p,
                    Be
                  );
                  if (j && w && (U.rangeCount !== 1 || U.anchorNode !== j.node || U.anchorOffset !== j.offset || U.focusNode !== w.node || U.focusOffset !== w.offset)) {
                    var N = X.createRange();
                    N.setStart(j.node, j.offset), U.removeAllRanges(), re > Be ? (U.addRange(N), U.extend(w.node, w.offset)) : (N.setEnd(w.node, w.offset), U.addRange(N));
                  }
                }
              }
            }
            for (X = [], U = p; U = U.parentNode; )
              U.nodeType === 1 && X.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < X.length; p++) {
              var Y = X[p];
              Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
            }
          }
          Xu = !!po, vo = po = null;
        } finally {
          Ae = a, $.p = l, H.T = n;
        }
      }
      e.current = t, it = 2;
    }
  }
  function uh() {
    if (it === 2) {
      it = 0;
      var e = al, t = ha, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = H.T, H.T = null;
        var l = $.p;
        $.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          Od(e, t.alternate, t);
        } finally {
          Ae = a, $.p = l, H.T = n;
        }
      }
      it = 3;
    }
  }
  function ch() {
    if (it === 4 || it === 3) {
      it = 0, Ri();
      var e = al, t = ha, n = kn, l = Kd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? it = 5 : (it = 0, ha = al = null, rh(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (ll = null), Cn(n), t = t.stateNode, St && typeof St.onCommitFiberRoot == "function")
        try {
          St.onCommitFiberRoot(
            pl,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = H.T, a = $.p, $.p = 2, H.T = null;
        try {
          for (var c = e.onRecoverableError, s = 0; s < l.length; s++) {
            var p = l[s];
            c(p.value, {
              componentStack: p.stack
            });
          }
        } finally {
          H.T = t, $.p = a;
        }
      }
      (kn & 3) !== 0 && Au(), yn(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === to ? oi++ : (oi = 0, to = e) : oi = 0, si(0);
    }
  }
  function rh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Za(t)));
  }
  function Au() {
    return ih(), uh(), ch(), oh();
  }
  function oh() {
    if (it !== 5) return !1;
    var e = al, t = Pr;
    Pr = 0;
    var n = Cn(kn), l = H.T, a = $.p;
    try {
      $.p = 32 > n ? 32 : n, H.T = null, n = eo, eo = null;
      var c = al, s = kn;
      if (it = 0, ha = al = null, kn = 0, (Ae & 6) !== 0) throw Error(o(331));
      var p = Ae;
      if (Ae |= 4, Zd(c.current), Yd(
        c,
        c.current,
        s,
        n
      ), Ae = p, si(0, !1), St && typeof St.onPostCommitFiberRoot == "function")
        try {
          St.onPostCommitFiberRoot(pl, c);
        } catch {
        }
      return !0;
    } finally {
      $.p = a, H.T = l, rh(e, t);
    }
  }
  function sh(e, t, n) {
    t = Wt(n, t), t = Rr(e.stateNode, t, 2), e = Fn(e, t, 2), e !== null && (Zt(e, 2), yn(e));
  }
  function Re(e, t, n) {
    if (e.tag === 3)
      sh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          sh(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ll === null || !ll.has(l))) {
            e = Wt(n, e), n = fd(2), l = Fn(t, n, 2), l !== null && (dd(
              n,
              l,
              t,
              e
            ), Zt(l, 2), yn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function ao(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new $v();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (Wr = !0, a.add(n), e = eg.bind(null, e, t, n), t.then(e, e));
  }
  function eg(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Le === e && (Se & n) === n && (Je === 4 || Je === 3 && (Se & 62914560) === Se && 300 > gt() - wu ? (Ae & 2) === 0 && ma(e, 0) : Fr |= n, da === Se && (da = 0)), yn(e);
  }
  function fh(e, t) {
    t === 0 && (t = bt()), e = xl(e, t), e !== null && (Zt(e, t), yn(e));
  }
  function tg(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), fh(e, n);
  }
  function ng(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), fh(e, n);
  }
  function lg(e, t) {
    return Xt(e, t);
  }
  var _u = null, va = null, io = !1, Mu = !1, uo = !1, ul = 0;
  function yn(e) {
    e !== va && e.next === null && (va === null ? _u = va = e : va = va.next = e), Mu = !0, io || (io = !0, ig());
  }
  function si(e, t) {
    if (!uo && Mu) {
      uo = !0;
      do
        for (var n = !1, l = _u; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var c = 0;
            else {
              var s = l.suspendedLanes, p = l.pingedLanes;
              c = (1 << 31 - yt(42 | e) + 1) - 1, c &= a & ~(s & ~p), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (n = !0, ph(l, c));
          } else
            c = Se, c = ct(
              l,
              l === Le ? c : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (c & 3) === 0 || wt(l, c) || (n = !0, ph(l, c));
          l = l.next;
        }
      while (n);
      uo = !1;
    }
  }
  function ag() {
    dh();
  }
  function dh() {
    Mu = io = !1;
    var e = 0;
    ul !== 0 && pg() && (e = ul);
    for (var t = gt(), n = null, l = _u; l !== null; ) {
      var a = l.next, c = hh(l, t);
      c === 0 ? (l.next = null, n === null ? _u = a : n.next = a, a === null && (va = n)) : (n = l, (e !== 0 || (c & 3) !== 0) && (Mu = !0)), l = a;
    }
    it !== 0 && it !== 5 || si(e), ul !== 0 && (ul = 0);
  }
  function hh(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var s = 31 - yt(c), p = 1 << s, S = a[s];
      S === -1 ? ((p & n) === 0 || (p & l) !== 0) && (a[s] = zt(p, t)) : S <= t && (e.expiredLanes |= p), c &= ~p;
    }
    if (t = Le, n = Se, n = ct(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Xn(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || wt(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Xn(l), Cn(n)) {
        case 2:
        case 8:
          n = xn;
          break;
        case 32:
          n = un;
          break;
        case 268435456:
          n = Aa;
          break;
        default:
          n = un;
      }
      return l = mh.bind(null, e), n = Xt(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Xn(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function mh(e, t) {
    if (it !== 0 && it !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Au() && e.callbackNode !== n)
      return null;
    var l = Se;
    return l = ct(
      e,
      e === Le ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : ($d(e, l, t), hh(e, gt()), e.callbackNode != null && e.callbackNode === n ? mh.bind(null, e) : null);
  }
  function ph(e, t) {
    if (Au()) return null;
    $d(e, t, !0);
  }
  function ig() {
    gg(function() {
      (Ae & 6) !== 0 ? Xt(
        Oi,
        ag
      ) : dh();
    });
  }
  function co() {
    if (ul === 0) {
      var e = ta;
      e === 0 && (e = Ul, Ul <<= 1, (Ul & 261888) === 0 && (Ul = 256)), ul = e;
    }
    return ul;
  }
  function vh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : qi("" + e);
  }
  function gh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function ug(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var c = vh(
        (a[Nt] || null).action
      ), s = l.submitter;
      s && (t = (t = s[Nt] || null) ? vh(t.formAction) : s.getAttribute("formAction"), t !== null && (c = t, s = null));
      var p = new Zi(
        "action",
        "action",
        null,
        l,
        a
      );
      e.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (ul !== 0) {
                  var S = s ? gh(a, s) : new FormData(a);
                  Nr(
                    n,
                    {
                      pending: !0,
                      data: S,
                      method: a.method,
                      action: c
                    },
                    null,
                    S
                  );
                }
              } else
                typeof c == "function" && (p.preventDefault(), S = s ? gh(a, s) : new FormData(a), Nr(
                  n,
                  {
                    pending: !0,
                    data: S,
                    method: a.method,
                    action: c
                  },
                  c,
                  S
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var ro = 0; ro < Zc.length; ro++) {
    var oo = Zc[ro], cg = oo.toLowerCase(), rg = oo[0].toUpperCase() + oo.slice(1);
    on(
      cg,
      "on" + rg
    );
  }
  on(Ks, "onAnimationEnd"), on(Js, "onAnimationIteration"), on($s, "onAnimationStart"), on("dblclick", "onDoubleClick"), on("focusin", "onFocus"), on("focusout", "onBlur"), on(wv, "onTransitionRun"), on(zv, "onTransitionStart"), on(jv, "onTransitionCancel"), on(Ws, "onTransitionEnd"), Yl("onMouseEnter", ["mouseout", "mouseover"]), Yl("onMouseLeave", ["mouseout", "mouseover"]), Yl("onPointerEnter", ["pointerout", "pointerover"]), Yl("onPointerLeave", ["pointerout", "pointerover"]), vl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), vl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), vl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), vl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), vl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), vl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var fi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), og = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi)
  );
  function yh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], a = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var s = l.length - 1; 0 <= s; s--) {
            var p = l[s], S = p.instance, T = p.currentTarget;
            if (p = p.listener, S !== c && a.isPropagationStopped())
              break e;
            c = p, a.currentTarget = T;
            try {
              c(a);
            } catch (k) {
              Ki(k);
            }
            a.currentTarget = null, c = S;
          }
        else
          for (s = 0; s < l.length; s++) {
            if (p = l[s], S = p.instance, T = p.currentTarget, p = p.listener, S !== c && a.isPropagationStopped())
              break e;
            c = p, a.currentTarget = T;
            try {
              c(a);
            } catch (k) {
              Ki(k);
            }
            a.currentTarget = null, c = S;
          }
      }
    }
  }
  function xe(e, t) {
    var n = t[Cc];
    n === void 0 && (n = t[Cc] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (bh(t, e, 2, !1), n.add(l));
  }
  function so(e, t, n) {
    var l = 0;
    t && (l |= 4), bh(
      n,
      e,
      l,
      t
    );
  }
  var Ru = "_reactListening" + Math.random().toString(36).slice(2);
  function fo(e) {
    if (!e[Ru]) {
      e[Ru] = !0, fs.forEach(function(n) {
        n !== "selectionchange" && (og.has(n) || so(n, !1, e), so(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ru] || (t[Ru] = !0, so("selectionchange", !1, t));
    }
  }
  function bh(e, t, n, l) {
    switch (Jh(t)) {
      case 2:
        var a = Bg;
        break;
      case 8:
        a = Lg;
        break;
      default:
        a = No;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !_c || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function ho(e, t, n, l, a) {
    var c = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var s = l.tag;
        if (s === 3 || s === 4) {
          var p = l.stateNode.containerInfo;
          if (p === a) break;
          if (s === 4)
            for (s = l.return; s !== null; ) {
              var S = s.tag;
              if ((S === 3 || S === 4) && s.stateNode.containerInfo === a)
                return;
              s = s.return;
            }
          for (; p !== null; ) {
            if (s = Ll(p), s === null) return;
            if (S = s.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              l = c = s;
              continue e;
            }
            p = p.parentNode;
          }
        }
        l = l.return;
      }
    Es(function() {
      var T = c, k = Dc(n), X = [];
      e: {
        var D = Fs.get(e);
        if (D !== void 0) {
          var U = Zi, P = e;
          switch (e) {
            case "keypress":
              if (Xi(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = nv;
              break;
            case "focusin":
              P = "focus", U = Uc;
              break;
            case "focusout":
              P = "blur", U = Uc;
              break;
            case "beforeblur":
            case "afterblur":
              U = Uc;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = js;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Zp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = iv;
              break;
            case Ks:
            case Js:
            case $s:
              U = Kp;
              break;
            case Ws:
              U = cv;
              break;
            case "scroll":
            case "scrollend":
              U = Xp;
              break;
            case "wheel":
              U = ov;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = $p;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Ts;
              break;
            case "toggle":
            case "beforetoggle":
              U = fv;
          }
          var re = (t & 4) !== 0, Be = !re && (e === "scroll" || e === "scrollend"), j = re ? D !== null ? D + "Capture" : null : D;
          re = [];
          for (var w = T, N; w !== null; ) {
            var Y = w;
            if (N = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || N === null || j === null || (Y = Ra(w, j), Y != null && re.push(
              di(w, Y, N)
            )), Be) break;
            w = w.return;
          }
          0 < re.length && (D = new U(
            D,
            P,
            null,
            n,
            k
          ), X.push({ event: D, listeners: re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (D = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", D && n !== Tc && (P = n.relatedTarget || n.fromElement) && (Ll(P) || P[Bl]))
            break e;
          if ((U || D) && (D = k.window === k ? k : (D = k.ownerDocument) ? D.defaultView || D.parentWindow : window, U ? (P = n.relatedTarget || n.toElement, U = T, P = P ? Ll(P) : null, P !== null && (Be = h(P), re = P.tag, P !== Be || re !== 5 && re !== 27 && re !== 6) && (P = null)) : (U = null, P = T), U !== P)) {
            if (re = js, Y = "onMouseLeave", j = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (re = Ts, Y = "onPointerLeave", j = "onPointerEnter", w = "pointer"), Be = U == null ? D : Ma(U), N = P == null ? D : Ma(P), D = new re(
              Y,
              w + "leave",
              U,
              n,
              k
            ), D.target = Be, D.relatedTarget = N, Y = null, Ll(k) === T && (re = new re(
              j,
              w + "enter",
              P,
              n,
              k
            ), re.target = N, re.relatedTarget = Be, Y = re), Be = Y, U && P)
              t: {
                for (re = sg, j = U, w = P, N = 0, Y = j; Y; Y = re(Y))
                  N++;
                Y = 0;
                for (var le = w; le; le = re(le))
                  Y++;
                for (; 0 < N - Y; )
                  j = re(j), N--;
                for (; 0 < Y - N; )
                  w = re(w), Y--;
                for (; N--; ) {
                  if (j === w || w !== null && j === w.alternate) {
                    re = j;
                    break t;
                  }
                  j = re(j), w = re(w);
                }
                re = null;
              }
            else re = null;
            U !== null && xh(
              X,
              D,
              U,
              re,
              !1
            ), P !== null && Be !== null && xh(
              X,
              Be,
              P,
              re,
              !0
            );
          }
        }
        e: {
          if (D = T ? Ma(T) : window, U = D.nodeName && D.nodeName.toLowerCase(), U === "select" || U === "input" && D.type === "file")
            var Te = Hs;
          else if (Os(D))
            if (Bs)
              Te = Sv;
            else {
              Te = bv;
              var ee = yv;
            }
          else
            U = D.nodeName, !U || U.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? T && Nc(T.elementType) && (Te = Hs) : Te = xv;
          if (Te && (Te = Te(e, T))) {
            Us(
              X,
              Te,
              n,
              k
            );
            break e;
          }
          ee && ee(e, D, T), e === "focusout" && T && D.type === "number" && T.memoizedProps.value != null && jc(D, "number", D.value);
        }
        switch (ee = T ? Ma(T) : window, e) {
          case "focusin":
            (Os(ee) || ee.contentEditable === "true") && (Kl = ee, Yc = T, Ya = null);
            break;
          case "focusout":
            Ya = Yc = Kl = null;
            break;
          case "mousedown":
            Xc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xc = !1, Qs(X, n, k);
            break;
          case "selectionchange":
            if (Ev) break;
          case "keydown":
          case "keyup":
            Qs(X, n, k);
        }
        var he;
        if (Bc)
          e: {
            switch (e) {
              case "compositionstart":
                var Ce = "onCompositionStart";
                break e;
              case "compositionend":
                Ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ce = "onCompositionUpdate";
                break e;
            }
            Ce = void 0;
          }
        else
          Vl ? Ms(e, n) && (Ce = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (Ds && n.locale !== "ko" && (Vl || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Vl && (he = ws()) : (Zn = k, Mc = "value" in Zn ? Zn.value : Zn.textContent, Vl = !0)), ee = Ou(T, Ce), 0 < ee.length && (Ce = new Ns(
          Ce,
          e,
          null,
          n,
          k
        ), X.push({ event: Ce, listeners: ee }), he ? Ce.data = he : (he = Rs(n), he !== null && (Ce.data = he)))), (he = hv ? mv(e, n) : pv(e, n)) && (Ce = Ou(T, "onBeforeInput"), 0 < Ce.length && (ee = new Ns(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          k
        ), X.push({
          event: ee,
          listeners: Ce
        }), ee.data = he)), ug(
          X,
          e,
          T,
          n,
          k
        );
      }
      yh(X, t);
    });
  }
  function di(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Ou(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, c = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || c === null || (a = Ra(e, n), a != null && l.unshift(
        di(e, a, c)
      ), a = Ra(e, t), a != null && l.push(
        di(e, a, c)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function sg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xh(e, t, n, l, a) {
    for (var c = t._reactName, s = []; n !== null && n !== l; ) {
      var p = n, S = p.alternate, T = p.stateNode;
      if (p = p.tag, S !== null && S === l) break;
      p !== 5 && p !== 26 && p !== 27 || T === null || (S = T, a ? (T = Ra(n, c), T != null && s.unshift(
        di(n, T, S)
      )) : a || (T = Ra(n, c), T != null && s.push(
        di(n, T, S)
      ))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var fg = /\r\n?/g, dg = /\u0000|\uFFFD/g;
  function Sh(e) {
    return (typeof e == "string" ? e : "" + e).replace(fg, `
`).replace(dg, "");
  }
  function Ch(e, t) {
    return t = Sh(t), Sh(e) === t;
  }
  function He(e, t, n, l, a, c) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Gl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Gl(e, "" + l);
        break;
      case "className":
        Li(e, "class", l);
        break;
      case "tabIndex":
        Li(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Li(e, n, l);
        break;
      case "style":
        Ss(e, l, c);
        break;
      case "data":
        if (t !== "object") {
          Li(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = qi("" + l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (n === "formAction" ? (t !== "input" && He(e, t, "name", a.name, a, null), He(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), He(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), He(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (He(e, t, "encType", a.encType, a, null), He(e, t, "method", a.method, a, null), He(e, t, "target", a.target, a, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = qi("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = wn);
        break;
      case "onScroll":
        l != null && xe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && xe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = qi("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        xe("beforetoggle", e), xe("toggle", e), Bi(e, "popover", l);
        break;
      case "xlinkActuate":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Bi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = qp.get(n) || n, Bi(e, n, l));
    }
  }
  function mo(e, t, n, l, a, c) {
    switch (n) {
      case "style":
        Ss(e, l, c);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Gl(e, l) : (typeof l == "number" || typeof l == "bigint") && Gl(e, "" + l);
        break;
      case "onScroll":
        l != null && xe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && xe("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = wn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ds.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), c = e[Nt] || null, c = c != null ? c[n] : null, typeof c == "function" && e.removeEventListener(t, c, a), typeof l == "function")) {
              typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : Bi(e, n, l);
          }
    }
  }
  function vt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        xe("error", e), xe("load", e);
        var l = !1, a = !1, c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var s = n[c];
            if (s != null)
              switch (c) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  He(e, t, c, s, n, null);
              }
          }
        a && He(e, t, "srcSet", n.srcSet, n, null), l && He(e, t, "src", n.src, n, null);
        return;
      case "input":
        xe("invalid", e);
        var p = c = s = a = null, S = null, T = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var k = n[l];
            if (k != null)
              switch (l) {
                case "name":
                  a = k;
                  break;
                case "type":
                  s = k;
                  break;
                case "checked":
                  S = k;
                  break;
                case "defaultChecked":
                  T = k;
                  break;
                case "value":
                  c = k;
                  break;
                case "defaultValue":
                  p = k;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null)
                    throw Error(o(137, t));
                  break;
                default:
                  He(e, t, l, k, n, null);
              }
          }
        gs(
          e,
          c,
          p,
          S,
          T,
          s,
          a,
          !1
        );
        return;
      case "select":
        xe("invalid", e), l = s = c = null;
        for (a in n)
          if (n.hasOwnProperty(a) && (p = n[a], p != null))
            switch (a) {
              case "value":
                c = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "multiple":
                l = p;
              default:
                He(e, t, a, p, n, null);
            }
        t = c, n = s, e.multiple = !!l, t != null ? Xl(e, !!l, t, !1) : n != null && Xl(e, !!l, n, !0);
        return;
      case "textarea":
        xe("invalid", e), c = a = l = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (p = n[s], p != null))
            switch (s) {
              case "value":
                l = p;
                break;
              case "defaultValue":
                a = p;
                break;
              case "children":
                c = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(o(91));
                break;
              default:
                He(e, t, s, p, n, null);
            }
        bs(e, l, a, c);
        return;
      case "option":
        for (S in n)
          n.hasOwnProperty(S) && (l = n[S], l != null) && (S === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : He(e, t, S, l, n, null));
        return;
      case "dialog":
        xe("beforetoggle", e), xe("toggle", e), xe("cancel", e), xe("close", e);
        break;
      case "iframe":
      case "object":
        xe("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < fi.length; l++)
          xe(fi[l], e);
        break;
      case "image":
        xe("error", e), xe("load", e);
        break;
      case "details":
        xe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        xe("error", e), xe("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (T in n)
          if (n.hasOwnProperty(T) && (l = n[T], l != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                He(e, t, T, l, n, null);
            }
        return;
      default:
        if (Nc(t)) {
          for (k in n)
            n.hasOwnProperty(k) && (l = n[k], l !== void 0 && mo(
              e,
              t,
              k,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (p in n)
      n.hasOwnProperty(p) && (l = n[p], l != null && He(e, t, p, l, n, null));
  }
  function hg(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, c = null, s = null, p = null, S = null, T = null, k = null;
        for (U in n) {
          var X = n[U];
          if (n.hasOwnProperty(U) && X != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = X;
              default:
                l.hasOwnProperty(U) || He(e, t, U, null, l, X);
            }
        }
        for (var D in l) {
          var U = l[D];
          if (X = n[D], l.hasOwnProperty(D) && (U != null || X != null))
            switch (D) {
              case "type":
                c = U;
                break;
              case "name":
                a = U;
                break;
              case "checked":
                T = U;
                break;
              case "defaultChecked":
                k = U;
                break;
              case "value":
                s = U;
                break;
              case "defaultValue":
                p = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(o(137, t));
                break;
              default:
                U !== X && He(
                  e,
                  t,
                  D,
                  U,
                  l,
                  X
                );
            }
        }
        zc(
          e,
          s,
          p,
          S,
          T,
          k,
          c,
          a
        );
        return;
      case "select":
        U = s = p = D = null;
        for (c in n)
          if (S = n[c], n.hasOwnProperty(c) && S != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                U = S;
              default:
                l.hasOwnProperty(c) || He(
                  e,
                  t,
                  c,
                  null,
                  l,
                  S
                );
            }
        for (a in l)
          if (c = l[a], S = n[a], l.hasOwnProperty(a) && (c != null || S != null))
            switch (a) {
              case "value":
                D = c;
                break;
              case "defaultValue":
                p = c;
                break;
              case "multiple":
                s = c;
              default:
                c !== S && He(
                  e,
                  t,
                  a,
                  c,
                  l,
                  S
                );
            }
        t = p, n = s, l = U, D != null ? Xl(e, !!n, D, !1) : !!l != !!n && (t != null ? Xl(e, !!n, t, !0) : Xl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        U = D = null;
        for (p in n)
          if (a = n[p], n.hasOwnProperty(p) && a != null && !l.hasOwnProperty(p))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                He(e, t, p, null, l, a);
            }
        for (s in l)
          if (a = l[s], c = n[s], l.hasOwnProperty(s) && (a != null || c != null))
            switch (s) {
              case "value":
                D = a;
                break;
              case "defaultValue":
                U = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(o(91));
                break;
              default:
                a !== c && He(e, t, s, a, l, c);
            }
        ys(e, D, U);
        return;
      case "option":
        for (var P in n)
          D = n[P], n.hasOwnProperty(P) && D != null && !l.hasOwnProperty(P) && (P === "selected" ? e.selected = !1 : He(
            e,
            t,
            P,
            null,
            l,
            D
          ));
        for (S in l)
          D = l[S], U = n[S], l.hasOwnProperty(S) && D !== U && (D != null || U != null) && (S === "selected" ? e.selected = D && typeof D != "function" && typeof D != "symbol" : He(
            e,
            t,
            S,
            D,
            l,
            U
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var re in n)
          D = n[re], n.hasOwnProperty(re) && D != null && !l.hasOwnProperty(re) && He(e, t, re, null, l, D);
        for (T in l)
          if (D = l[T], U = n[T], l.hasOwnProperty(T) && D !== U && (D != null || U != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(o(137, t));
                break;
              default:
                He(
                  e,
                  t,
                  T,
                  D,
                  l,
                  U
                );
            }
        return;
      default:
        if (Nc(t)) {
          for (var Be in n)
            D = n[Be], n.hasOwnProperty(Be) && D !== void 0 && !l.hasOwnProperty(Be) && mo(
              e,
              t,
              Be,
              void 0,
              l,
              D
            );
          for (k in l)
            D = l[k], U = n[k], !l.hasOwnProperty(k) || D === U || D === void 0 && U === void 0 || mo(
              e,
              t,
              k,
              D,
              l,
              U
            );
          return;
        }
    }
    for (var j in n)
      D = n[j], n.hasOwnProperty(j) && D != null && !l.hasOwnProperty(j) && He(e, t, j, null, l, D);
    for (X in l)
      D = l[X], U = n[X], !l.hasOwnProperty(X) || D === U || D == null && U == null || He(e, t, X, D, l, U);
  }
  function Eh(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function mg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], c = a.transferSize, s = a.initiatorType, p = a.duration;
        if (c && p && Eh(s)) {
          for (s = 0, p = a.responseEnd, l += 1; l < n.length; l++) {
            var S = n[l], T = S.startTime;
            if (T > p) break;
            var k = S.transferSize, X = S.initiatorType;
            k && Eh(X) && (S = S.responseEnd, s += k * (S < p ? 1 : (p - T) / (S - T)));
          }
          if (--l, t += 8 * (c + s) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var po = null, vo = null;
  function Uu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function wh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function go(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var yo = null;
  function pg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === yo ? !1 : (yo = e, !0) : (yo = null, !1);
  }
  var jh = typeof setTimeout == "function" ? setTimeout : void 0, vg = typeof clearTimeout == "function" ? clearTimeout : void 0, Nh = typeof Promise == "function" ? Promise : void 0, gg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nh < "u" ? function(e) {
    return Nh.resolve(null).then(e).catch(yg);
  } : jh;
  function yg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function cl(e) {
    return e === "head";
  }
  function Th(e, t) {
    var n = t, l = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8)
        if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(a), xa(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          hi(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, hi(n);
          for (var c = n.firstChild; c; ) {
            var s = c.nextSibling, p = c.nodeName;
            c[_a] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && c.rel.toLowerCase() === "stylesheet" || n.removeChild(c), c = s;
          }
        } else
          n === "body" && hi(e.ownerDocument.body);
      n = a;
    } while (n);
    xa(t);
  }
  function Dh(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = l;
    } while (n);
  }
  function bo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          bo(n), Ec(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function bg(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[_a])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (c !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (c = e.getAttribute("src"), (c !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === c)
          return e;
      } else return e;
      if (e = tn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function xg(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = tn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ah(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = tn(e.nextSibling), e === null)) return null;
    return e;
  }
  function xo(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function So(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Sg(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function tn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Co = null;
  function _h(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return tn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Mh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Rh(e, t, n) {
    switch (t = Uu(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function hi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ec(e);
  }
  var nn = /* @__PURE__ */ new Map(), Oh = /* @__PURE__ */ new Set();
  function Hu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var qn = $.d;
  $.d = {
    f: Cg,
    r: Eg,
    D: wg,
    C: zg,
    L: jg,
    m: Ng,
    X: Dg,
    S: Tg,
    M: Ag
  };
  function Cg() {
    var e = qn.f(), t = Nu();
    return e || t;
  }
  function Eg(e) {
    var t = kl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Ff(t) : qn.r(e);
  }
  var ga = typeof document > "u" ? null : document;
  function Uh(e, t, n) {
    var l = ga;
    if (l && typeof t == "string" && t) {
      var a = Jt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Oh.has(a) || (Oh.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), vt(t, "link", e), rt(t), l.head.appendChild(t)));
    }
  }
  function wg(e) {
    qn.D(e), Uh("dns-prefetch", e, null);
  }
  function zg(e, t) {
    qn.C(e, t), Uh("preconnect", e, t);
  }
  function jg(e, t, n) {
    qn.L(e, t, n);
    var l = ga;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + Jt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + Jt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + Jt(
        n.imageSizes
      ) + '"]')) : a += '[href="' + Jt(e) + '"]';
      var c = a;
      switch (t) {
        case "style":
          c = ya(e);
          break;
        case "script":
          c = ba(e);
      }
      nn.has(c) || (e = b(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), nn.set(c, e), l.querySelector(a) !== null || t === "style" && l.querySelector(mi(c)) || t === "script" && l.querySelector(pi(c)) || (t = l.createElement("link"), vt(t, "link", e), rt(t), l.head.appendChild(t)));
    }
  }
  function Ng(e, t) {
    qn.m(e, t);
    var n = ga;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Jt(l) + '"][href="' + Jt(e) + '"]', c = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = ba(e);
      }
      if (!nn.has(c) && (e = b({ rel: "modulepreload", href: e }, t), nn.set(c, e), n.querySelector(a) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(pi(c)))
              return;
        }
        l = n.createElement("link"), vt(l, "link", e), rt(l), n.head.appendChild(l);
      }
    }
  }
  function Tg(e, t, n) {
    qn.S(e, t, n);
    var l = ga;
    if (l && e) {
      var a = ql(l).hoistableStyles, c = ya(e);
      t = t || "default";
      var s = a.get(c);
      if (!s) {
        var p = { loading: 0, preload: null };
        if (s = l.querySelector(
          mi(c)
        ))
          p.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = nn.get(c)) && Eo(e, n);
          var S = s = l.createElement("link");
          rt(S), vt(S, "link", e), S._p = new Promise(function(T, k) {
            S.onload = T, S.onerror = k;
          }), S.addEventListener("load", function() {
            p.loading |= 1;
          }), S.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, Bu(s, t, l);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: p
        }, a.set(c, s);
      }
    }
  }
  function Dg(e, t) {
    qn.X(e, t);
    var n = ga;
    if (n && e) {
      var l = ql(n).hoistableScripts, a = ba(e), c = l.get(a);
      c || (c = n.querySelector(pi(a)), c || (e = b({ src: e, async: !0 }, t), (t = nn.get(a)) && wo(e, t), c = n.createElement("script"), rt(c), vt(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(a, c));
    }
  }
  function Ag(e, t) {
    qn.M(e, t);
    var n = ga;
    if (n && e) {
      var l = ql(n).hoistableScripts, a = ba(e), c = l.get(a);
      c || (c = n.querySelector(pi(a)), c || (e = b({ src: e, async: !0, type: "module" }, t), (t = nn.get(a)) && wo(e, t), c = n.createElement("script"), rt(c), vt(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(a, c));
    }
  }
  function Hh(e, t, n, l) {
    var a = (a = ue.current) ? Hu(a) : null;
    if (!a) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = ya(n.href), n = ql(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = ya(n.href);
          var c = ql(
            a
          ).hoistableStyles, s = c.get(e);
          if (s || (a = a.ownerDocument || a, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, s), (c = a.querySelector(
            mi(e)
          )) && !c._p && (s.instance = c, s.state.loading = 5), nn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, nn.set(e, n), c || _g(
            a,
            e,
            n,
            s.state
          ))), t && l === null)
            throw Error(o(528, ""));
          return s;
        }
        if (t && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ba(n), n = ql(
          a
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function ya(e) {
    return 'href="' + Jt(e) + '"';
  }
  function mi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Bh(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function _g(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), vt(t, "link", n), rt(t), e.head.appendChild(t));
  }
  function ba(e) {
    return '[src="' + Jt(e) + '"]';
  }
  function pi(e) {
    return "script[async]" + e;
  }
  function Lh(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Jt(n.href) + '"]'
          );
          if (l)
            return t.instance = l, rt(l), l;
          var a = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), rt(l), vt(l, "style", a), Bu(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = ya(n.href);
          var c = e.querySelector(
            mi(a)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, rt(c), c;
          l = Bh(n), (a = nn.get(a)) && Eo(l, a), c = (e.ownerDocument || e).createElement("link"), rt(c);
          var s = c;
          return s._p = new Promise(function(p, S) {
            s.onload = p, s.onerror = S;
          }), vt(c, "link", l), t.state.loading |= 4, Bu(c, n.precedence, e), t.instance = c;
        case "script":
          return c = ba(n.src), (a = e.querySelector(
            pi(c)
          )) ? (t.instance = a, rt(a), a) : (l = n, (a = nn.get(c)) && (l = b({}, n), wo(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), rt(a), vt(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Bu(l, n.precedence, e));
    return t.instance;
  }
  function Bu(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, c = a, s = 0; s < l.length; s++) {
      var p = l[s];
      if (p.dataset.precedence === t) c = p;
      else if (c !== a) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Eo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function wo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Lu = null;
  function kh(e, t, n) {
    if (Lu === null) {
      var l = /* @__PURE__ */ new Map(), a = Lu = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = Lu, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var c = n[a];
      if (!(c[_a] || c[dt] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = c.getAttribute(t) || "";
        s = e + s;
        var p = l.get(s);
        p ? p.push(c) : l.set(s, [c]);
      }
    }
    return l;
  }
  function qh(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Mg(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Yh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Rg(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = ya(l.href), c = t.querySelector(
          mi(a)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ku.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = c, rt(c);
          return;
        }
        c = t.ownerDocument || t, l = Bh(l), (a = nn.get(a)) && Eo(l, a), c = c.createElement("link"), rt(c);
        var s = c;
        s._p = new Promise(function(p, S) {
          s.onload = p, s.onerror = S;
        }), vt(c, "link", l), n.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = ku.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var zo = 0;
  function Og(e, t) {
    return e.stylesheets && e.count === 0 && Yu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Yu(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && zo === 0 && (zo = 62500 * mg());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Yu(e, e.stylesheets), e.unsuspend)) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        },
        (e.imgBytes > zo ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function ku() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Yu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var qu = null;
  function Yu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, qu = /* @__PURE__ */ new Map(), t.forEach(Ug, e), qu = null, ku.call(e));
  }
  function Ug(e, t) {
    if (!(t.state.loading & 4)) {
      var n = qu.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), qu.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < a.length; c++) {
          var s = a[c];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (n.set(s.dataset.precedence, s), l = s);
        }
        l && n.set(null, l);
      }
      a = t.instance, s = a.getAttribute("data-precedence"), c = n.get(s) || l, c === l && n.set(null, a), n.set(s, a), this.count++, l = ku.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), c ? c.parentNode.insertBefore(a, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var vi = {
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: te,
    _currentValue2: te,
    _threadCount: 0
  };
  function Hg(e, t, n, l, a, c, s, p, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = jt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jt(0), this.hiddenUpdates = jt(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = c, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Xh(e, t, n, l, a, c, s, p, S, T, k, X) {
    return e = new Hg(
      e,
      t,
      n,
      s,
      S,
      T,
      k,
      X,
      p
    ), t = 1, c === !0 && (t |= 24), c = Ht(3, null, null, t), e.current = c, c.stateNode = e, t = lr(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, cr(c), e;
  }
  function Gh(e) {
    return e ? (e = Wl, e) : Wl;
  }
  function Zh(e, t, n, l, a, c) {
    a = Gh(a), l.context === null ? l.context = a : l.pendingContext = a, l = Wn(t), l.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (l.callback = c), n = Fn(e, l, t), n !== null && (Rt(n, e, t), Ja(n, e, t));
  }
  function Qh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function jo(e, t) {
    Qh(e, t), (e = e.alternate) && Qh(e, t);
  }
  function Vh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xl(e, 67108864);
      t !== null && Rt(t, e, 67108864), jo(e, 67108864);
    }
  }
  function Kh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = Sn(t);
      var n = xl(e, t);
      n !== null && Rt(n, e, t), jo(e, t);
    }
  }
  var Xu = !0;
  function Bg(e, t, n, l) {
    var a = H.T;
    H.T = null;
    var c = $.p;
    try {
      $.p = 2, No(e, t, n, l);
    } finally {
      $.p = c, H.T = a;
    }
  }
  function Lg(e, t, n, l) {
    var a = H.T;
    H.T = null;
    var c = $.p;
    try {
      $.p = 8, No(e, t, n, l);
    } finally {
      $.p = c, H.T = a;
    }
  }
  function No(e, t, n, l) {
    if (Xu) {
      var a = To(l);
      if (a === null)
        ho(
          e,
          t,
          l,
          Gu,
          n
        ), $h(e, l);
      else if (qg(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if ($h(e, l), t & 4 && -1 < kg.indexOf(e)) {
        for (; a !== null; ) {
          var c = kl(a);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var s = We(c.pendingLanes);
                  if (s !== 0) {
                    var p = c;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; s; ) {
                      var S = 1 << 31 - yt(s);
                      p.entanglements[1] |= S, s &= ~S;
                    }
                    yn(c), (Ae & 6) === 0 && (zu = gt() + 500, si(0));
                  }
                }
                break;
              case 31:
              case 13:
                p = xl(c, 2), p !== null && Rt(p, c, 2), Nu(), jo(c, 2);
            }
          if (c = To(l), c === null && ho(
            e,
            t,
            l,
            Gu,
            n
          ), c === a) break;
          a = c;
        }
        a !== null && l.stopPropagation();
      } else
        ho(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function To(e) {
    return e = Dc(e), Do(e);
  }
  var Gu = null;
  function Do(e) {
    if (Gu = null, e = Ll(e), e !== null) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = y(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Gu = e, null;
  }
  function Jh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (bc()) {
          case Oi:
            return 2;
          case xn:
            return 8;
          case un:
          case ml:
            return 32;
          case Aa:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ao = !1, rl = null, ol = null, sl = null, gi = /* @__PURE__ */ new Map(), yi = /* @__PURE__ */ new Map(), fl = [], kg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function $h(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        rl = null;
        break;
      case "dragenter":
      case "dragleave":
        ol = null;
        break;
      case "mouseover":
      case "mouseout":
        sl = null;
        break;
      case "pointerover":
      case "pointerout":
        gi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yi.delete(t.pointerId);
    }
  }
  function bi(e, t, n, l, a, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: c,
      targetContainers: [a]
    }, t !== null && (t = kl(t), t !== null && Vh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function qg(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return rl = bi(
          rl,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return ol = bi(
          ol,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return sl = bi(
          sl,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "pointerover":
        var c = a.pointerId;
        return gi.set(
          c,
          bi(
            gi.get(c) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
      case "gotpointercapture":
        return c = a.pointerId, yi.set(
          c,
          bi(
            yi.get(c) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
    }
    return !1;
  }
  function Wh(e) {
    var t = Ll(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = m(n), t !== null) {
            e.blockedOn = t, Gn(e.priority, function() {
              Kh(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = y(n), t !== null) {
            e.blockedOn = t, Gn(e.priority, function() {
              Kh(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Zu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = To(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Tc = l, n.target.dispatchEvent(l), Tc = null;
      } else
        return t = kl(n), t !== null && Vh(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Fh(e, t, n) {
    Zu(e) && n.delete(t);
  }
  function Yg() {
    Ao = !1, rl !== null && Zu(rl) && (rl = null), ol !== null && Zu(ol) && (ol = null), sl !== null && Zu(sl) && (sl = null), gi.forEach(Fh), yi.forEach(Fh);
  }
  function Qu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ao || (Ao = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      Yg
    )));
  }
  var Vu = null;
  function Ih(e) {
    Vu !== e && (Vu = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Vu === e && (Vu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (Do(l || n) === null)
              continue;
            break;
          }
          var c = kl(n);
          c !== null && (e.splice(t, 3), t -= 3, Nr(
            c,
            {
              pending: !0,
              data: a,
              method: n.method,
              action: l
            },
            l,
            a
          ));
        }
      }
    ));
  }
  function xa(e) {
    function t(S) {
      return Qu(S, e);
    }
    rl !== null && Qu(rl, e), ol !== null && Qu(ol, e), sl !== null && Qu(sl, e), gi.forEach(t), yi.forEach(t);
    for (var n = 0; n < fl.length; n++) {
      var l = fl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < fl.length && (n = fl[0], n.blockedOn === null); )
      Wh(n), n.blockedOn === null && fl.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], c = n[l + 1], s = a[Nt] || null;
        if (typeof c == "function")
          s || Ih(n);
        else if (s) {
          var p = null;
          if (c && c.hasAttribute("formAction")) {
            if (a = c, s = c[Nt] || null)
              p = s.formAction;
            else if (Do(a) !== null) continue;
          } else p = s.action;
          typeof p == "function" ? n[l + 1] = p : (n.splice(l, 3), l -= 3), Ih(n);
        }
      }
  }
  function Ph() {
    function e(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
        handler: function() {
          return new Promise(function(s) {
            return a = s;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      a !== null && (a(), a = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, {
          state: c.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, a = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
      };
    }
  }
  function _o(e) {
    this._internalRoot = e;
  }
  Ku.prototype.render = _o.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var n = t.current, l = Yt();
    Zh(n, l, e, t, null, null);
  }, Ku.prototype.unmount = _o.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Zh(e.current, 2, null, e, null, null), Nu(), t[Bl] = null;
    }
  };
  function Ku(e) {
    this._internalRoot = e;
  }
  Ku.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = rn();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < fl.length && t !== 0 && t < fl[n].priority; n++) ;
      fl.splice(n, 0, e), n === 0 && Wh(e);
    }
  };
  var em = r.version;
  if (em !== "19.2.8")
    throw Error(
      o(
        527,
        em,
        "19.2.8"
      )
    );
  $.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = v(t), e = e !== null ? x(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Xg = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ju.isDisabled && Ju.supportsFiber)
      try {
        pl = Ju.inject(
          Xg
        ), St = Ju;
      } catch {
      }
  }
  return Si.createRoot = function(e, t) {
    if (!f(e)) throw Error(o(299));
    var n = !1, l = "", a = cd, c = rd, s = od;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Xh(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      a,
      c,
      s,
      Ph
    ), e[Bl] = t.current, fo(e), new _o(t);
  }, Si.hydrateRoot = function(e, t, n) {
    if (!f(e)) throw Error(o(299));
    var l = !1, a = "", c = cd, s = rd, p = od, S = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (p = n.onRecoverableError), n.formState !== void 0 && (S = n.formState)), t = Xh(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      S,
      c,
      s,
      p,
      Ph
    ), t.context = Gh(null), n = t.current, l = Yt(), l = Sn(l), a = Wn(l), a.callback = null, Fn(n, a, l), n = l, t.current.lanes = n, Zt(t, n), yn(t), e[Bl] = t.current, fo(e), new Ku(t);
  }, Si.version = "19.2.8", Si;
}
var sm;
function Fg() {
  if (sm) return Oo.exports;
  sm = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), Oo.exports = Wg(), Oo.exports;
}
var Ig = Fg();
const Ym = (...i) => i.filter((r, u, o) => !!r && r.trim() !== "" && o.indexOf(r) === u).join(" ").trim();
const Pg = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const e0 = (i) => i.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, u, o) => o ? o.toUpperCase() : u.toLowerCase()
);
const fm = (i) => {
  const r = e0(i);
  return r.charAt(0).toUpperCase() + r.slice(1);
};
var t0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const n0 = (i) => {
  for (const r in i)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
  return !1;
};
const l0 = C.forwardRef(
  ({
    color: i = "currentColor",
    size: r = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: o,
    className: f = "",
    children: h,
    iconNode: m,
    ...y
  }, g) => C.createElement(
    "svg",
    {
      ref: g,
      ...t0,
      width: r,
      height: r,
      stroke: i,
      strokeWidth: o ? Number(u) * 24 / Number(r) : u,
      className: Ym("lucide", f),
      ...!h && !n0(y) && { "aria-hidden": "true" },
      ...y
    },
    [
      ...m.map(([v, x]) => C.createElement(v, x)),
      ...Array.isArray(h) ? h : [h]
    ]
  )
);
const qe = (i, r) => {
  const u = C.forwardRef(
    ({ className: o, ...f }, h) => C.createElement(l0, {
      ref: h,
      iconNode: r,
      className: Ym(
        `lucide-${Pg(fm(i))}`,
        `lucide-${i}`,
        o
      ),
      ...f
    })
  );
  return u.displayName = fm(i), u;
};
const a0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], i0 = qe("arrow-right", a0);
const u0 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
], c0 = qe("calendar-days", u0);
const r0 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], sc = qe("check", r0);
const o0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], fc = qe("chevron-down", o0);
const s0 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Xm = qe("chevron-right", s0);
const f0 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], d0 = qe("external-link", f0);
const h0 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Gm = qe("eye", h0);
const m0 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], Zm = qe("eye-off", m0);
const p0 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], v0 = qe("file-text", p0);
const g0 = [
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }],
  ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
], Qm = qe("image-plus", g0);
const y0 = [
  ["path", { d: "M5 3v14", key: "9nsxs2" }],
  ["path", { d: "M12 3v8", key: "1h2ygw" }],
  ["path", { d: "M19 3v18", key: "1sk56x" }]
], Lo = qe("kanban", y0);
const b0 = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
], Vm = qe("link-2", b0);
const x0 = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
], S0 = qe("list-checks", x0);
const C0 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], lc = qe("loader-circle", C0);
const E0 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
], w0 = qe("maximize-2", E0);
const z0 = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], ts = qe("message-square", z0);
const j0 = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], N0 = qe("minimize-2", j0);
const T0 = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], Km = qe("paperclip", T0);
const D0 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], dc = qe("pencil", D0);
const A0 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Jm = qe("play", A0);
const _0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Yn = qe("plus", _0);
const M0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }]
], $m = qe("rows-3", M0);
const R0 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], O0 = qe("search", R0);
const U0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], ja = qe("trash-2", U0);
const H0 = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], B0 = qe("user-round", H0);
const L0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ea = qe("x", L0);
function k0(i) {
  const r = (i || []).filter((o) => !o.is_archived);
  return r.filter((o) => !o.parent).sort(
    (o, f) => o.position - f.position || o.id - f.id
  ).flatMap((o) => {
    const f = r.filter((h) => h.parent === o.id).sort(
      (h, m) => h.position - m.position || h.id - m.id
    );
    return f.length > 0 ? f : [o];
  });
}
function q0(i, r) {
  if (!i.parent) return i.name;
  const u = (r || []).find((o) => o.id === i.parent);
  return u ? `${u.name} / ${i.name}` : i.name;
}
var Sa = qm();
function Y0() {
  for (var i = arguments.length, r = new Array(i), u = 0; u < i; u++)
    r[u] = arguments[u];
  return C.useMemo(
    () => (o) => {
      r.forEach((f) => f(o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
}
const hc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Na(i) {
  const r = Object.prototype.toString.call(i);
  return r === "[object Window]" || // In Electron context the Window object serializes to [object global]
  r === "[object global]";
}
function ns(i) {
  return "nodeType" in i;
}
function Et(i) {
  var r, u;
  return i ? Na(i) ? i : ns(i) && (r = (u = i.ownerDocument) == null ? void 0 : u.defaultView) != null ? r : window : window;
}
function ls(i) {
  const {
    Document: r
  } = Et(i);
  return i instanceof r;
}
function Di(i) {
  return Na(i) ? !1 : i instanceof Et(i).HTMLElement;
}
function Wm(i) {
  return i instanceof Et(i).SVGElement;
}
function Ta(i) {
  return i ? Na(i) ? i.document : ns(i) ? ls(i) ? i : Di(i) || Wm(i) ? i.ownerDocument : document : document : document;
}
const dn = hc ? C.useLayoutEffect : C.useEffect;
function mc(i) {
  const r = C.useRef(i);
  return dn(() => {
    r.current = i;
  }), C.useCallback(function() {
    for (var u = arguments.length, o = new Array(u), f = 0; f < u; f++)
      o[f] = arguments[f];
    return r.current == null ? void 0 : r.current(...o);
  }, []);
}
function X0() {
  const i = C.useRef(null), r = C.useCallback((o, f) => {
    i.current = setInterval(o, f);
  }, []), u = C.useCallback(() => {
    i.current !== null && (clearInterval(i.current), i.current = null);
  }, []);
  return [r, u];
}
function Ni(i, r) {
  r === void 0 && (r = [i]);
  const u = C.useRef(i);
  return dn(() => {
    u.current !== i && (u.current = i);
  }, r), u;
}
function Ai(i, r) {
  const u = C.useRef();
  return C.useMemo(
    () => {
      const o = i(u.current);
      return u.current = o, o;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...r]
  );
}
function ac(i) {
  const r = mc(i), u = C.useRef(null), o = C.useCallback(
    (f) => {
      f !== u.current && r?.(f, u.current), u.current = f;
    },
    //eslint-disable-next-line
    []
  );
  return [u, o];
}
function ic(i) {
  const r = C.useRef();
  return C.useEffect(() => {
    r.current = i;
  }, [i]), r.current;
}
let ko = {};
function _i(i, r) {
  return C.useMemo(() => {
    if (r)
      return r;
    const u = ko[i] == null ? 0 : ko[i] + 1;
    return ko[i] = u, i + "-" + u;
  }, [i, r]);
}
function Fm(i) {
  return function(r) {
    for (var u = arguments.length, o = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
      o[f - 1] = arguments[f];
    return o.reduce((h, m) => {
      const y = Object.entries(m);
      for (const [g, v] of y) {
        const x = h[g];
        x != null && (h[g] = x + i * v);
      }
      return h;
    }, {
      ...r
    });
  };
}
const Ca = /* @__PURE__ */ Fm(1), uc = /* @__PURE__ */ Fm(-1);
function G0(i) {
  return "clientX" in i && "clientY" in i;
}
function pc(i) {
  if (!i)
    return !1;
  const {
    KeyboardEvent: r
  } = Et(i.target);
  return r && i instanceof r;
}
function Z0(i) {
  if (!i)
    return !1;
  const {
    TouchEvent: r
  } = Et(i.target);
  return r && i instanceof r;
}
function cc(i) {
  if (Z0(i)) {
    if (i.touches && i.touches.length) {
      const {
        clientX: r,
        clientY: u
      } = i.touches[0];
      return {
        x: r,
        y: u
      };
    } else if (i.changedTouches && i.changedTouches.length) {
      const {
        clientX: r,
        clientY: u
      } = i.changedTouches[0];
      return {
        x: r,
        y: u
      };
    }
  }
  return G0(i) ? {
    x: i.clientX,
    y: i.clientY
  } : null;
}
const bn = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(i) {
      if (!i)
        return;
      const {
        x: r,
        y: u
      } = i;
      return "translate3d(" + (r ? Math.round(r) : 0) + "px, " + (u ? Math.round(u) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(i) {
      if (!i)
        return;
      const {
        scaleX: r,
        scaleY: u
      } = i;
      return "scaleX(" + r + ") scaleY(" + u + ")";
    }
  },
  Transform: {
    toString(i) {
      if (i)
        return [bn.Translate.toString(i), bn.Scale.toString(i)].join(" ");
    }
  },
  Transition: {
    toString(i) {
      let {
        property: r,
        duration: u,
        easing: o
      } = i;
      return r + " " + u + "ms " + o;
    }
  }
}), dm = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Q0(i) {
  return i.matches(dm) ? i : i.querySelector(dm);
}
const V0 = {
  display: "none"
};
function K0(i) {
  let {
    id: r,
    value: u
  } = i;
  return Qe.createElement("div", {
    id: r,
    style: V0
  }, u);
}
function J0(i) {
  let {
    id: r,
    announcement: u,
    ariaLiveType: o = "assertive"
  } = i;
  const f = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return Qe.createElement("div", {
    id: r,
    style: f,
    role: "status",
    "aria-live": o,
    "aria-atomic": !0
  }, u);
}
function $0() {
  const [i, r] = C.useState("");
  return {
    announce: C.useCallback((o) => {
      o != null && r(o);
    }, []),
    announcement: i
  };
}
const Im = /* @__PURE__ */ C.createContext(null);
function W0(i) {
  const r = C.useContext(Im);
  C.useEffect(() => {
    if (!r)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return r(i);
  }, [i, r]);
}
function F0() {
  const [i] = C.useState(() => /* @__PURE__ */ new Set()), r = C.useCallback((o) => (i.add(o), () => i.delete(o)), [i]);
  return [C.useCallback((o) => {
    let {
      type: f,
      event: h
    } = o;
    i.forEach((m) => {
      var y;
      return (y = m[f]) == null ? void 0 : y.call(m, h);
    });
  }, [i]), r];
}
const I0 = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, P0 = {
  onDragStart(i) {
    let {
      active: r
    } = i;
    return "Picked up draggable item " + r.id + ".";
  },
  onDragOver(i) {
    let {
      active: r,
      over: u
    } = i;
    return u ? "Draggable item " + r.id + " was moved over droppable area " + u.id + "." : "Draggable item " + r.id + " is no longer over a droppable area.";
  },
  onDragEnd(i) {
    let {
      active: r,
      over: u
    } = i;
    return u ? "Draggable item " + r.id + " was dropped over droppable area " + u.id : "Draggable item " + r.id + " was dropped.";
  },
  onDragCancel(i) {
    let {
      active: r
    } = i;
    return "Dragging was cancelled. Draggable item " + r.id + " was dropped.";
  }
};
function ey(i) {
  let {
    announcements: r = P0,
    container: u,
    hiddenTextDescribedById: o,
    screenReaderInstructions: f = I0
  } = i;
  const {
    announce: h,
    announcement: m
  } = $0(), y = _i("DndLiveRegion"), [g, v] = C.useState(!1);
  if (C.useEffect(() => {
    v(!0);
  }, []), W0(C.useMemo(() => ({
    onDragStart(b) {
      let {
        active: z
      } = b;
      h(r.onDragStart({
        active: z
      }));
    },
    onDragMove(b) {
      let {
        active: z,
        over: R
      } = b;
      r.onDragMove && h(r.onDragMove({
        active: z,
        over: R
      }));
    },
    onDragOver(b) {
      let {
        active: z,
        over: R
      } = b;
      h(r.onDragOver({
        active: z,
        over: R
      }));
    },
    onDragEnd(b) {
      let {
        active: z,
        over: R
      } = b;
      h(r.onDragEnd({
        active: z,
        over: R
      }));
    },
    onDragCancel(b) {
      let {
        active: z,
        over: R
      } = b;
      h(r.onDragCancel({
        active: z,
        over: R
      }));
    }
  }), [h, r])), !g)
    return null;
  const x = Qe.createElement(Qe.Fragment, null, Qe.createElement(K0, {
    id: o,
    value: f.draggable
  }), Qe.createElement(J0, {
    id: y,
    announcement: m
  }));
  return u ? Sa.createPortal(x, u) : x;
}
var ut;
(function(i) {
  i.DragStart = "dragStart", i.DragMove = "dragMove", i.DragEnd = "dragEnd", i.DragCancel = "dragCancel", i.DragOver = "dragOver", i.RegisterDroppable = "registerDroppable", i.SetDroppableDisabled = "setDroppableDisabled", i.UnregisterDroppable = "unregisterDroppable";
})(ut || (ut = {}));
function rc() {
}
function hm(i, r) {
  return C.useMemo(
    () => ({
      sensor: i,
      options: r ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i, r]
  );
}
function ty() {
  for (var i = arguments.length, r = new Array(i), u = 0; u < i; u++)
    r[u] = arguments[u];
  return C.useMemo(
    () => [...r].filter((o) => o != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...r]
  );
}
const hn = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Pm(i, r) {
  return Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2));
}
function ny(i, r) {
  const u = cc(i);
  if (!u)
    return "0 0";
  const o = {
    x: (u.x - r.left) / r.width * 100,
    y: (u.y - r.top) / r.height * 100
  };
  return o.x + "% " + o.y + "%";
}
function ep(i, r) {
  let {
    data: {
      value: u
    }
  } = i, {
    data: {
      value: o
    }
  } = r;
  return u - o;
}
function ly(i, r) {
  let {
    data: {
      value: u
    }
  } = i, {
    data: {
      value: o
    }
  } = r;
  return o - u;
}
function Jo(i) {
  let {
    left: r,
    top: u,
    height: o,
    width: f
  } = i;
  return [{
    x: r,
    y: u
  }, {
    x: r + f,
    y: u
  }, {
    x: r,
    y: u + o
  }, {
    x: r + f,
    y: u + o
  }];
}
function ay(i, r) {
  if (!i || i.length === 0)
    return null;
  const [u] = i;
  return u[r];
}
const iy = (i) => {
  let {
    collisionRect: r,
    droppableRects: u,
    droppableContainers: o
  } = i;
  const f = Jo(r), h = [];
  for (const m of o) {
    const {
      id: y
    } = m, g = u.get(y);
    if (g) {
      const v = Jo(g), x = f.reduce((z, R, Z) => z + Pm(v[Z], R), 0), b = Number((x / 4).toFixed(4));
      h.push({
        id: y,
        data: {
          droppableContainer: m,
          value: b
        }
      });
    }
  }
  return h.sort(ep);
};
function uy(i, r) {
  const u = Math.max(r.top, i.top), o = Math.max(r.left, i.left), f = Math.min(r.left + r.width, i.left + i.width), h = Math.min(r.top + r.height, i.top + i.height), m = f - o, y = h - u;
  if (o < f && u < h) {
    const g = r.width * r.height, v = i.width * i.height, x = m * y, b = x / (g + v - x);
    return Number(b.toFixed(4));
  }
  return 0;
}
const cy = (i) => {
  let {
    collisionRect: r,
    droppableRects: u,
    droppableContainers: o
  } = i;
  const f = [];
  for (const h of o) {
    const {
      id: m
    } = h, y = u.get(m);
    if (y) {
      const g = uy(y, r);
      g > 0 && f.push({
        id: m,
        data: {
          droppableContainer: h,
          value: g
        }
      });
    }
  }
  return f.sort(ly);
};
function ry(i, r) {
  const {
    top: u,
    left: o,
    bottom: f,
    right: h
  } = r;
  return u <= i.y && i.y <= f && o <= i.x && i.x <= h;
}
const oy = (i) => {
  let {
    droppableContainers: r,
    droppableRects: u,
    pointerCoordinates: o
  } = i;
  if (!o)
    return [];
  const f = [];
  for (const h of r) {
    const {
      id: m
    } = h, y = u.get(m);
    if (y && ry(o, y)) {
      const v = Jo(y).reduce((b, z) => b + Pm(o, z), 0), x = Number((v / 4).toFixed(4));
      f.push({
        id: m,
        data: {
          droppableContainer: h,
          value: x
        }
      });
    }
  }
  return f.sort(ep);
};
function sy(i, r, u) {
  return {
    ...i,
    scaleX: r && u ? r.width / u.width : 1,
    scaleY: r && u ? r.height / u.height : 1
  };
}
function tp(i, r) {
  return i && r ? {
    x: i.left - r.left,
    y: i.top - r.top
  } : hn;
}
function fy(i) {
  return function(u) {
    for (var o = arguments.length, f = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++)
      f[h - 1] = arguments[h];
    return f.reduce((m, y) => ({
      ...m,
      top: m.top + i * y.y,
      bottom: m.bottom + i * y.y,
      left: m.left + i * y.x,
      right: m.right + i * y.x
    }), {
      ...u
    });
  };
}
const dy = /* @__PURE__ */ fy(1);
function np(i) {
  if (i.startsWith("matrix3d(")) {
    const r = i.slice(9, -1).split(/, /);
    return {
      x: +r[12],
      y: +r[13],
      scaleX: +r[0],
      scaleY: +r[5]
    };
  } else if (i.startsWith("matrix(")) {
    const r = i.slice(7, -1).split(/, /);
    return {
      x: +r[4],
      y: +r[5],
      scaleX: +r[0],
      scaleY: +r[3]
    };
  }
  return null;
}
function hy(i, r, u) {
  const o = np(r);
  if (!o)
    return i;
  const {
    scaleX: f,
    scaleY: h,
    x: m,
    y
  } = o, g = i.left - m - (1 - f) * parseFloat(u), v = i.top - y - (1 - h) * parseFloat(u.slice(u.indexOf(" ") + 1)), x = f ? i.width / f : i.width, b = h ? i.height / h : i.height;
  return {
    width: x,
    height: b,
    top: v,
    right: g + x,
    bottom: v + b,
    left: g
  };
}
const my = {
  ignoreTransform: !1
};
function Da(i, r) {
  r === void 0 && (r = my);
  let u = i.getBoundingClientRect();
  if (r.ignoreTransform) {
    const {
      transform: v,
      transformOrigin: x
    } = Et(i).getComputedStyle(i);
    v && (u = hy(u, v, x));
  }
  const {
    top: o,
    left: f,
    width: h,
    height: m,
    bottom: y,
    right: g
  } = u;
  return {
    top: o,
    left: f,
    width: h,
    height: m,
    bottom: y,
    right: g
  };
}
function mm(i) {
  return Da(i, {
    ignoreTransform: !0
  });
}
function py(i) {
  const r = i.innerWidth, u = i.innerHeight;
  return {
    top: 0,
    left: 0,
    right: r,
    bottom: u,
    width: r,
    height: u
  };
}
function vy(i, r) {
  return r === void 0 && (r = Et(i).getComputedStyle(i)), r.position === "fixed";
}
function gy(i, r) {
  r === void 0 && (r = Et(i).getComputedStyle(i));
  const u = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((f) => {
    const h = r[f];
    return typeof h == "string" ? u.test(h) : !1;
  });
}
function as(i, r) {
  const u = [];
  function o(f) {
    if (r != null && u.length >= r || !f)
      return u;
    if (ls(f) && f.scrollingElement != null && !u.includes(f.scrollingElement))
      return u.push(f.scrollingElement), u;
    if (!Di(f) || Wm(f) || u.includes(f))
      return u;
    const h = Et(i).getComputedStyle(f);
    return f !== i && gy(f, h) && u.push(f), vy(f, h) ? u : o(f.parentNode);
  }
  return i ? o(i) : u;
}
function lp(i) {
  const [r] = as(i, 1);
  return r ?? null;
}
function qo(i) {
  return !hc || !i ? null : Na(i) ? i : ns(i) ? ls(i) || i === Ta(i).scrollingElement ? window : Di(i) ? i : null : null;
}
function ap(i) {
  return Na(i) ? i.scrollX : i.scrollLeft;
}
function ip(i) {
  return Na(i) ? i.scrollY : i.scrollTop;
}
function $o(i) {
  return {
    x: ap(i),
    y: ip(i)
  };
}
var ft;
(function(i) {
  i[i.Forward = 1] = "Forward", i[i.Backward = -1] = "Backward";
})(ft || (ft = {}));
function up(i) {
  return !hc || !i ? !1 : i === document.scrollingElement;
}
function cp(i) {
  const r = {
    x: 0,
    y: 0
  }, u = up(i) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: i.clientHeight,
    width: i.clientWidth
  }, o = {
    x: i.scrollWidth - u.width,
    y: i.scrollHeight - u.height
  }, f = i.scrollTop <= r.y, h = i.scrollLeft <= r.x, m = i.scrollTop >= o.y, y = i.scrollLeft >= o.x;
  return {
    isTop: f,
    isLeft: h,
    isBottom: m,
    isRight: y,
    maxScroll: o,
    minScroll: r
  };
}
const yy = {
  x: 0.2,
  y: 0.2
};
function by(i, r, u, o, f) {
  let {
    top: h,
    left: m,
    right: y,
    bottom: g
  } = u;
  o === void 0 && (o = 10), f === void 0 && (f = yy);
  const {
    isTop: v,
    isBottom: x,
    isLeft: b,
    isRight: z
  } = cp(i), R = {
    x: 0,
    y: 0
  }, Z = {
    x: 0,
    y: 0
  }, q = {
    height: r.height * f.y,
    width: r.width * f.x
  };
  return !v && h <= r.top + q.height ? (R.y = ft.Backward, Z.y = o * Math.abs((r.top + q.height - h) / q.height)) : !x && g >= r.bottom - q.height && (R.y = ft.Forward, Z.y = o * Math.abs((r.bottom - q.height - g) / q.height)), !z && y >= r.right - q.width ? (R.x = ft.Forward, Z.x = o * Math.abs((r.right - q.width - y) / q.width)) : !b && m <= r.left + q.width && (R.x = ft.Backward, Z.x = o * Math.abs((r.left + q.width - m) / q.width)), {
    direction: R,
    speed: Z
  };
}
function xy(i) {
  if (i === document.scrollingElement) {
    const {
      innerWidth: h,
      innerHeight: m
    } = window;
    return {
      top: 0,
      left: 0,
      right: h,
      bottom: m,
      width: h,
      height: m
    };
  }
  const {
    top: r,
    left: u,
    right: o,
    bottom: f
  } = i.getBoundingClientRect();
  return {
    top: r,
    left: u,
    right: o,
    bottom: f,
    width: i.clientWidth,
    height: i.clientHeight
  };
}
function rp(i) {
  return i.reduce((r, u) => Ca(r, $o(u)), hn);
}
function Sy(i) {
  return i.reduce((r, u) => r + ap(u), 0);
}
function Cy(i) {
  return i.reduce((r, u) => r + ip(u), 0);
}
function op(i, r) {
  if (r === void 0 && (r = Da), !i)
    return;
  const {
    top: u,
    left: o,
    bottom: f,
    right: h
  } = r(i);
  lp(i) && (f <= 0 || h <= 0 || u >= window.innerHeight || o >= window.innerWidth) && i.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Ey = [["x", ["left", "right"], Sy], ["y", ["top", "bottom"], Cy]];
class is {
  constructor(r, u) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const o = as(u), f = rp(o);
    this.rect = {
      ...r
    }, this.width = r.width, this.height = r.height;
    for (const [h, m, y] of Ey)
      for (const g of m)
        Object.defineProperty(this, g, {
          get: () => {
            const v = y(o), x = f[h] - v;
            return this.rect[g] + x;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class wi {
  constructor(r) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((u) => {
        var o;
        return (o = this.target) == null ? void 0 : o.removeEventListener(...u);
      });
    }, this.target = r;
  }
  add(r, u, o) {
    var f;
    (f = this.target) == null || f.addEventListener(r, u, o), this.listeners.push([r, u, o]);
  }
}
function wy(i) {
  const {
    EventTarget: r
  } = Et(i);
  return i instanceof r ? i : Ta(i);
}
function Yo(i, r) {
  const u = Math.abs(i.x), o = Math.abs(i.y);
  return typeof r == "number" ? Math.sqrt(u ** 2 + o ** 2) > r : "x" in r && "y" in r ? u > r.x && o > r.y : "x" in r ? u > r.x : "y" in r ? o > r.y : !1;
}
var ln;
(function(i) {
  i.Click = "click", i.DragStart = "dragstart", i.Keydown = "keydown", i.ContextMenu = "contextmenu", i.Resize = "resize", i.SelectionChange = "selectionchange", i.VisibilityChange = "visibilitychange";
})(ln || (ln = {}));
function pm(i) {
  i.preventDefault();
}
function zy(i) {
  i.stopPropagation();
}
var _e;
(function(i) {
  i.Space = "Space", i.Down = "ArrowDown", i.Right = "ArrowRight", i.Left = "ArrowLeft", i.Up = "ArrowUp", i.Esc = "Escape", i.Enter = "Enter", i.Tab = "Tab";
})(_e || (_e = {}));
const sp = {
  start: [_e.Space, _e.Enter],
  cancel: [_e.Esc],
  end: [_e.Space, _e.Enter, _e.Tab]
}, jy = (i, r) => {
  let {
    currentCoordinates: u
  } = r;
  switch (i.code) {
    case _e.Right:
      return {
        ...u,
        x: u.x + 25
      };
    case _e.Left:
      return {
        ...u,
        x: u.x - 25
      };
    case _e.Down:
      return {
        ...u,
        y: u.y + 25
      };
    case _e.Up:
      return {
        ...u,
        y: u.y - 25
      };
  }
};
class fp {
  constructor(r) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = r;
    const {
      event: {
        target: u
      }
    } = r;
    this.props = r, this.listeners = new wi(Ta(u)), this.windowListeners = new wi(Et(u)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(ln.Resize, this.handleCancel), this.windowListeners.add(ln.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(ln.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: r,
      onStart: u
    } = this.props, o = r.node.current;
    o && op(o), u(hn);
  }
  handleKeyDown(r) {
    if (pc(r)) {
      const {
        active: u,
        context: o,
        options: f
      } = this.props, {
        keyboardCodes: h = sp,
        coordinateGetter: m = jy,
        scrollBehavior: y = "smooth"
      } = f, {
        code: g
      } = r;
      if (h.end.includes(g)) {
        this.handleEnd(r);
        return;
      }
      if (h.cancel.includes(g)) {
        this.handleCancel(r);
        return;
      }
      const {
        collisionRect: v
      } = o.current, x = v ? {
        x: v.left,
        y: v.top
      } : hn;
      this.referenceCoordinates || (this.referenceCoordinates = x);
      const b = m(r, {
        active: u,
        context: o.current,
        currentCoordinates: x
      });
      if (b) {
        const z = uc(b, x), R = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: Z
        } = o.current;
        for (const q of Z) {
          const A = r.code, {
            isTop: Q,
            isRight: V,
            isLeft: G,
            isBottom: W,
            maxScroll: O,
            minScroll: _
          } = cp(q), M = xy(q), L = {
            x: Math.min(A === _e.Right ? M.right - M.width / 2 : M.right, Math.max(A === _e.Right ? M.left : M.left + M.width / 2, b.x)),
            y: Math.min(A === _e.Down ? M.bottom - M.height / 2 : M.bottom, Math.max(A === _e.Down ? M.top : M.top + M.height / 2, b.y))
          }, F = A === _e.Right && !V || A === _e.Left && !G, ae = A === _e.Down && !W || A === _e.Up && !Q;
          if (F && L.x !== b.x) {
            const ie = q.scrollLeft + z.x, we = A === _e.Right && ie <= O.x || A === _e.Left && ie >= _.x;
            if (we && !z.y) {
              q.scrollTo({
                left: ie,
                behavior: y
              });
              return;
            }
            we ? R.x = q.scrollLeft - ie : R.x = A === _e.Right ? q.scrollLeft - O.x : q.scrollLeft - _.x, R.x && q.scrollBy({
              left: -R.x,
              behavior: y
            });
            break;
          } else if (ae && L.y !== b.y) {
            const ie = q.scrollTop + z.y, we = A === _e.Down && ie <= O.y || A === _e.Up && ie >= _.y;
            if (we && !z.x) {
              q.scrollTo({
                top: ie,
                behavior: y
              });
              return;
            }
            we ? R.y = q.scrollTop - ie : R.y = A === _e.Down ? q.scrollTop - O.y : q.scrollTop - _.y, R.y && q.scrollBy({
              top: -R.y,
              behavior: y
            });
            break;
          }
        }
        this.handleMove(r, Ca(uc(b, this.referenceCoordinates), R));
      }
    }
  }
  handleMove(r, u) {
    const {
      onMove: o
    } = this.props;
    r.preventDefault(), o(u);
  }
  handleEnd(r) {
    const {
      onEnd: u
    } = this.props;
    r.preventDefault(), this.detach(), u();
  }
  handleCancel(r) {
    const {
      onCancel: u
    } = this.props;
    r.preventDefault(), this.detach(), u();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
fp.activators = [{
  eventName: "onKeyDown",
  handler: (i, r, u) => {
    let {
      keyboardCodes: o = sp,
      onActivation: f
    } = r, {
      active: h
    } = u;
    const {
      code: m
    } = i.nativeEvent;
    if (o.start.includes(m)) {
      const y = h.activatorNode.current;
      return y && i.target !== y ? !1 : (i.preventDefault(), f?.({
        event: i.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function vm(i) {
  return !!(i && "distance" in i);
}
function gm(i) {
  return !!(i && "delay" in i);
}
class us {
  constructor(r, u, o) {
    var f;
    o === void 0 && (o = wy(r.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = r, this.events = u;
    const {
      event: h
    } = r, {
      target: m
    } = h;
    this.props = r, this.events = u, this.document = Ta(m), this.documentListeners = new wi(this.document), this.listeners = new wi(o), this.windowListeners = new wi(Et(m)), this.initialCoordinates = (f = cc(h)) != null ? f : hn, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: r,
      props: {
        options: {
          activationConstraint: u,
          bypassActivationConstraint: o
        }
      }
    } = this;
    if (this.listeners.add(r.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(r.end.name, this.handleEnd), r.cancel && this.listeners.add(r.cancel.name, this.handleCancel), this.windowListeners.add(ln.Resize, this.handleCancel), this.windowListeners.add(ln.DragStart, pm), this.windowListeners.add(ln.VisibilityChange, this.handleCancel), this.windowListeners.add(ln.ContextMenu, pm), this.documentListeners.add(ln.Keydown, this.handleKeydown), u) {
      if (o != null && o({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (gm(u)) {
        this.timeoutId = setTimeout(this.handleStart, u.delay), this.handlePending(u);
        return;
      }
      if (vm(u)) {
        this.handlePending(u);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(r, u) {
    const {
      active: o,
      onPending: f
    } = this.props;
    f(o, r, this.initialCoordinates, u);
  }
  handleStart() {
    const {
      initialCoordinates: r
    } = this, {
      onStart: u
    } = this.props;
    r && (this.activated = !0, this.documentListeners.add(ln.Click, zy, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(ln.SelectionChange, this.removeTextSelection), u(r));
  }
  handleMove(r) {
    var u;
    const {
      activated: o,
      initialCoordinates: f,
      props: h
    } = this, {
      onMove: m,
      options: {
        activationConstraint: y
      }
    } = h;
    if (!f)
      return;
    const g = (u = cc(r)) != null ? u : hn, v = uc(f, g);
    if (!o && y) {
      if (vm(y)) {
        if (y.tolerance != null && Yo(v, y.tolerance))
          return this.handleCancel();
        if (Yo(v, y.distance))
          return this.handleStart();
      }
      if (gm(y) && Yo(v, y.tolerance))
        return this.handleCancel();
      this.handlePending(y, v);
      return;
    }
    r.cancelable && r.preventDefault(), m(g);
  }
  handleEnd() {
    const {
      onAbort: r,
      onEnd: u
    } = this.props;
    this.detach(), this.activated || r(this.props.active), u();
  }
  handleCancel() {
    const {
      onAbort: r,
      onCancel: u
    } = this.props;
    this.detach(), this.activated || r(this.props.active), u();
  }
  handleKeydown(r) {
    r.code === _e.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var r;
    (r = this.document.getSelection()) == null || r.removeAllRanges();
  }
}
const Ny = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class dp extends us {
  constructor(r) {
    const {
      event: u
    } = r, o = Ta(u.target);
    super(r, Ny, o);
  }
}
dp.activators = [{
  eventName: "onPointerDown",
  handler: (i, r) => {
    let {
      nativeEvent: u
    } = i, {
      onActivation: o
    } = r;
    return !u.isPrimary || u.button !== 0 ? !1 : (o?.({
      event: u
    }), !0);
  }
}];
const Ty = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Wo;
(function(i) {
  i[i.RightClick = 2] = "RightClick";
})(Wo || (Wo = {}));
class hp extends us {
  constructor(r) {
    super(r, Ty, Ta(r.event.target));
  }
}
hp.activators = [{
  eventName: "onMouseDown",
  handler: (i, r) => {
    let {
      nativeEvent: u
    } = i, {
      onActivation: o
    } = r;
    return u.button === Wo.RightClick ? !1 : (o?.({
      event: u
    }), !0);
  }
}];
const Xo = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class mp extends us {
  constructor(r) {
    super(r, Xo);
  }
  static setup() {
    return window.addEventListener(Xo.move.name, r, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Xo.move.name, r);
    };
    function r() {
    }
  }
}
mp.activators = [{
  eventName: "onTouchStart",
  handler: (i, r) => {
    let {
      nativeEvent: u
    } = i, {
      onActivation: o
    } = r;
    const {
      touches: f
    } = u;
    return f.length > 1 ? !1 : (o?.({
      event: u
    }), !0);
  }
}];
var zi;
(function(i) {
  i[i.Pointer = 0] = "Pointer", i[i.DraggableRect = 1] = "DraggableRect";
})(zi || (zi = {}));
var oc;
(function(i) {
  i[i.TreeOrder = 0] = "TreeOrder", i[i.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(oc || (oc = {}));
function Dy(i) {
  let {
    acceleration: r,
    activator: u = zi.Pointer,
    canScroll: o,
    draggingRect: f,
    enabled: h,
    interval: m = 5,
    order: y = oc.TreeOrder,
    pointerCoordinates: g,
    scrollableAncestors: v,
    scrollableAncestorRects: x,
    delta: b,
    threshold: z
  } = i;
  const R = _y({
    delta: b,
    disabled: !h
  }), [Z, q] = X0(), A = C.useRef({
    x: 0,
    y: 0
  }), Q = C.useRef({
    x: 0,
    y: 0
  }), V = C.useMemo(() => {
    switch (u) {
      case zi.Pointer:
        return g ? {
          top: g.y,
          bottom: g.y,
          left: g.x,
          right: g.x
        } : null;
      case zi.DraggableRect:
        return f;
    }
  }, [u, f, g]), G = C.useRef(null), W = C.useCallback(() => {
    const _ = G.current;
    if (!_)
      return;
    const M = A.current.x * Q.current.x, L = A.current.y * Q.current.y;
    _.scrollBy(M, L);
  }, []), O = C.useMemo(() => y === oc.TreeOrder ? [...v].reverse() : v, [y, v]);
  C.useEffect(
    () => {
      if (!h || !v.length || !V) {
        q();
        return;
      }
      for (const _ of O) {
        if (o?.(_) === !1)
          continue;
        const M = v.indexOf(_), L = x[M];
        if (!L)
          continue;
        const {
          direction: F,
          speed: ae
        } = by(_, L, V, r, z);
        for (const ie of ["x", "y"])
          R[ie][F[ie]] || (ae[ie] = 0, F[ie] = 0);
        if (ae.x > 0 || ae.y > 0) {
          q(), G.current = _, Z(W, m), A.current = ae, Q.current = F;
          return;
        }
      }
      A.current = {
        x: 0,
        y: 0
      }, Q.current = {
        x: 0,
        y: 0
      }, q();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      r,
      W,
      o,
      q,
      h,
      m,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(V),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(R),
      Z,
      v,
      O,
      x,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(z)
    ]
  );
}
const Ay = {
  x: {
    [ft.Backward]: !1,
    [ft.Forward]: !1
  },
  y: {
    [ft.Backward]: !1,
    [ft.Forward]: !1
  }
};
function _y(i) {
  let {
    delta: r,
    disabled: u
  } = i;
  const o = ic(r);
  return Ai((f) => {
    if (u || !o || !f)
      return Ay;
    const h = {
      x: Math.sign(r.x - o.x),
      y: Math.sign(r.y - o.y)
    };
    return {
      x: {
        [ft.Backward]: f.x[ft.Backward] || h.x === -1,
        [ft.Forward]: f.x[ft.Forward] || h.x === 1
      },
      y: {
        [ft.Backward]: f.y[ft.Backward] || h.y === -1,
        [ft.Forward]: f.y[ft.Forward] || h.y === 1
      }
    };
  }, [u, r, o]);
}
function My(i, r) {
  const u = r != null ? i.get(r) : void 0, o = u ? u.node.current : null;
  return Ai((f) => {
    var h;
    return r == null ? null : (h = o ?? f) != null ? h : null;
  }, [o, r]);
}
function Ry(i, r) {
  return C.useMemo(() => i.reduce((u, o) => {
    const {
      sensor: f
    } = o, h = f.activators.map((m) => ({
      eventName: m.eventName,
      handler: r(m.handler, o)
    }));
    return [...u, ...h];
  }, []), [i, r]);
}
var Ti;
(function(i) {
  i[i.Always = 0] = "Always", i[i.BeforeDragging = 1] = "BeforeDragging", i[i.WhileDragging = 2] = "WhileDragging";
})(Ti || (Ti = {}));
var Fo;
(function(i) {
  i.Optimized = "optimized";
})(Fo || (Fo = {}));
const ym = /* @__PURE__ */ new Map();
function Oy(i, r) {
  let {
    dragging: u,
    dependencies: o,
    config: f
  } = r;
  const [h, m] = C.useState(null), {
    frequency: y,
    measure: g,
    strategy: v
  } = f, x = C.useRef(i), b = A(), z = Ni(b), R = C.useCallback(function(Q) {
    Q === void 0 && (Q = []), !z.current && m((V) => V === null ? Q : V.concat(Q.filter((G) => !V.includes(G))));
  }, [z]), Z = C.useRef(null), q = Ai((Q) => {
    if (b && !u)
      return ym;
    if (!Q || Q === ym || x.current !== i || h != null) {
      const V = /* @__PURE__ */ new Map();
      for (let G of i) {
        if (!G)
          continue;
        if (h && h.length > 0 && !h.includes(G.id) && G.rect.current) {
          V.set(G.id, G.rect.current);
          continue;
        }
        const W = G.node.current, O = W ? new is(g(W), W) : null;
        G.rect.current = O, O && V.set(G.id, O);
      }
      return V;
    }
    return Q;
  }, [i, h, u, b, g]);
  return C.useEffect(() => {
    x.current = i;
  }, [i]), C.useEffect(
    () => {
      b || R();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, b]
  ), C.useEffect(
    () => {
      h && h.length > 0 && m(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(h)]
  ), C.useEffect(
    () => {
      b || typeof y != "number" || Z.current !== null || (Z.current = setTimeout(() => {
        R(), Z.current = null;
      }, y));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y, b, R, ...o]
  ), {
    droppableRects: q,
    measureDroppableContainers: R,
    measuringScheduled: h != null
  };
  function A() {
    switch (v) {
      case Ti.Always:
        return !1;
      case Ti.BeforeDragging:
        return u;
      default:
        return !u;
    }
  }
}
function cs(i, r) {
  return Ai((u) => i ? u || (typeof r == "function" ? r(i) : i) : null, [r, i]);
}
function Uy(i, r) {
  return cs(i, r);
}
function Hy(i) {
  let {
    callback: r,
    disabled: u
  } = i;
  const o = mc(r), f = C.useMemo(() => {
    if (u || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: h
    } = window;
    return new h(o);
  }, [o, u]);
  return C.useEffect(() => () => f?.disconnect(), [f]), f;
}
function vc(i) {
  let {
    callback: r,
    disabled: u
  } = i;
  const o = mc(r), f = C.useMemo(
    () => {
      if (u || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: h
      } = window;
      return new h(o);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u]
  );
  return C.useEffect(() => () => f?.disconnect(), [f]), f;
}
function By(i) {
  return new is(Da(i), i);
}
function bm(i, r, u) {
  r === void 0 && (r = By);
  const [o, f] = C.useState(null);
  function h() {
    f((g) => {
      if (!i)
        return null;
      if (i.isConnected === !1) {
        var v;
        return (v = g ?? u) != null ? v : null;
      }
      const x = r(i);
      return JSON.stringify(g) === JSON.stringify(x) ? g : x;
    });
  }
  const m = Hy({
    callback(g) {
      if (i)
        for (const v of g) {
          const {
            type: x,
            target: b
          } = v;
          if (x === "childList" && b instanceof HTMLElement && b.contains(i)) {
            h();
            break;
          }
        }
    }
  }), y = vc({
    callback: h
  });
  return dn(() => {
    h(), i ? (y?.observe(i), m?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (y?.disconnect(), m?.disconnect());
  }, [i]), o;
}
function Ly(i) {
  const r = cs(i);
  return tp(i, r);
}
const xm = [];
function ky(i) {
  const r = C.useRef(i), u = Ai((o) => i ? o && o !== xm && i && r.current && i.parentNode === r.current.parentNode ? o : as(i) : xm, [i]);
  return C.useEffect(() => {
    r.current = i;
  }, [i]), u;
}
function qy(i) {
  const [r, u] = C.useState(null), o = C.useRef(i), f = C.useCallback((h) => {
    const m = qo(h.target);
    m && u((y) => y ? (y.set(m, $o(m)), new Map(y)) : null);
  }, []);
  return C.useEffect(() => {
    const h = o.current;
    if (i !== h) {
      m(h);
      const y = i.map((g) => {
        const v = qo(g);
        return v ? (v.addEventListener("scroll", f, {
          passive: !0
        }), [v, $o(v)]) : null;
      }).filter((g) => g != null);
      u(y.length ? new Map(y) : null), o.current = i;
    }
    return () => {
      m(i), m(h);
    };
    function m(y) {
      y.forEach((g) => {
        const v = qo(g);
        v?.removeEventListener("scroll", f);
      });
    }
  }, [f, i]), C.useMemo(() => i.length ? r ? Array.from(r.values()).reduce((h, m) => Ca(h, m), hn) : rp(i) : hn, [i, r]);
}
function Sm(i, r) {
  r === void 0 && (r = []);
  const u = C.useRef(null);
  return C.useEffect(
    () => {
      u.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  ), C.useEffect(() => {
    const o = i !== hn;
    o && !u.current && (u.current = i), !o && u.current && (u.current = null);
  }, [i]), u.current ? uc(i, u.current) : hn;
}
function Yy(i) {
  C.useEffect(
    () => {
      if (!hc)
        return;
      const r = i.map((u) => {
        let {
          sensor: o
        } = u;
        return o.setup == null ? void 0 : o.setup();
      });
      return () => {
        for (const u of r)
          u?.();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    i.map((r) => {
      let {
        sensor: u
      } = r;
      return u;
    })
  );
}
function Xy(i, r) {
  return C.useMemo(() => i.reduce((u, o) => {
    let {
      eventName: f,
      handler: h
    } = o;
    return u[f] = (m) => {
      h(m, r);
    }, u;
  }, {}), [i, r]);
}
function pp(i) {
  return C.useMemo(() => i ? py(i) : null, [i]);
}
const Cm = [];
function Gy(i, r) {
  r === void 0 && (r = Da);
  const [u] = i, o = pp(u ? Et(u) : null), [f, h] = C.useState(Cm);
  function m() {
    h(() => i.length ? i.map((g) => up(g) ? o : new is(r(g), g)) : Cm);
  }
  const y = vc({
    callback: m
  });
  return dn(() => {
    y?.disconnect(), m(), i.forEach((g) => y?.observe(g));
  }, [i]), f;
}
function vp(i) {
  if (!i)
    return null;
  if (i.children.length > 1)
    return i;
  const r = i.children[0];
  return Di(r) ? r : i;
}
function Zy(i) {
  let {
    measure: r
  } = i;
  const [u, o] = C.useState(null), f = C.useCallback((v) => {
    for (const {
      target: x
    } of v)
      if (Di(x)) {
        o((b) => {
          const z = r(x);
          return b ? {
            ...b,
            width: z.width,
            height: z.height
          } : z;
        });
        break;
      }
  }, [r]), h = vc({
    callback: f
  }), m = C.useCallback((v) => {
    const x = vp(v);
    h?.disconnect(), x && h?.observe(x), o(x ? r(x) : null);
  }, [r, h]), [y, g] = ac(m);
  return C.useMemo(() => ({
    nodeRef: y,
    rect: u,
    setRef: g
  }), [u, y, g]);
}
const Qy = [{
  sensor: dp,
  options: {}
}, {
  sensor: fp,
  options: {}
}], Vy = {
  current: {}
}, ec = {
  draggable: {
    measure: mm
  },
  droppable: {
    measure: mm,
    strategy: Ti.WhileDragging,
    frequency: Fo.Optimized
  },
  dragOverlay: {
    measure: Da
  }
};
class ji extends Map {
  get(r) {
    var u;
    return r != null && (u = super.get(r)) != null ? u : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((r) => {
      let {
        disabled: u
      } = r;
      return !u;
    });
  }
  getNodeFor(r) {
    var u, o;
    return (u = (o = this.get(r)) == null ? void 0 : o.node.current) != null ? u : void 0;
  }
}
const Ky = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new ji(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: rc
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: ec,
  measureDroppableContainers: rc,
  windowRect: null,
  measuringScheduled: !1
}, gp = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: rc,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: rc
}, Mi = /* @__PURE__ */ C.createContext(gp), yp = /* @__PURE__ */ C.createContext(Ky);
function Jy() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new ji()
    }
  };
}
function $y(i, r) {
  switch (r.type) {
    case ut.DragStart:
      return {
        ...i,
        draggable: {
          ...i.draggable,
          initialCoordinates: r.initialCoordinates,
          active: r.active
        }
      };
    case ut.DragMove:
      return i.draggable.active == null ? i : {
        ...i,
        draggable: {
          ...i.draggable,
          translate: {
            x: r.coordinates.x - i.draggable.initialCoordinates.x,
            y: r.coordinates.y - i.draggable.initialCoordinates.y
          }
        }
      };
    case ut.DragEnd:
    case ut.DragCancel:
      return {
        ...i,
        draggable: {
          ...i.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case ut.RegisterDroppable: {
      const {
        element: u
      } = r, {
        id: o
      } = u, f = new ji(i.droppable.containers);
      return f.set(o, u), {
        ...i,
        droppable: {
          ...i.droppable,
          containers: f
        }
      };
    }
    case ut.SetDroppableDisabled: {
      const {
        id: u,
        key: o,
        disabled: f
      } = r, h = i.droppable.containers.get(u);
      if (!h || o !== h.key)
        return i;
      const m = new ji(i.droppable.containers);
      return m.set(u, {
        ...h,
        disabled: f
      }), {
        ...i,
        droppable: {
          ...i.droppable,
          containers: m
        }
      };
    }
    case ut.UnregisterDroppable: {
      const {
        id: u,
        key: o
      } = r, f = i.droppable.containers.get(u);
      if (!f || o !== f.key)
        return i;
      const h = new ji(i.droppable.containers);
      return h.delete(u), {
        ...i,
        droppable: {
          ...i.droppable,
          containers: h
        }
      };
    }
    default:
      return i;
  }
}
function Wy(i) {
  let {
    disabled: r
  } = i;
  const {
    active: u,
    activatorEvent: o,
    draggableNodes: f
  } = C.useContext(Mi), h = ic(o), m = ic(u?.id);
  return C.useEffect(() => {
    if (!r && !o && h && m != null) {
      if (!pc(h) || document.activeElement === h.target)
        return;
      const y = f.get(m);
      if (!y)
        return;
      const {
        activatorNode: g,
        node: v
      } = y;
      if (!g.current && !v.current)
        return;
      requestAnimationFrame(() => {
        for (const x of [g.current, v.current]) {
          if (!x)
            continue;
          const b = Q0(x);
          if (b) {
            b.focus();
            break;
          }
        }
      });
    }
  }, [o, r, f, m, h]), null;
}
function bp(i, r) {
  let {
    transform: u,
    ...o
  } = r;
  return i != null && i.length ? i.reduce((f, h) => h({
    transform: f,
    ...o
  }), u) : u;
}
function Fy(i) {
  return C.useMemo(
    () => ({
      draggable: {
        ...ec.draggable,
        ...i?.draggable
      },
      droppable: {
        ...ec.droppable,
        ...i?.droppable
      },
      dragOverlay: {
        ...ec.dragOverlay,
        ...i?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i?.draggable, i?.droppable, i?.dragOverlay]
  );
}
function Iy(i) {
  let {
    activeNode: r,
    measure: u,
    initialRect: o,
    config: f = !0
  } = i;
  const h = C.useRef(!1), {
    x: m,
    y
  } = typeof f == "boolean" ? {
    x: f,
    y: f
  } : f;
  dn(() => {
    if (!m && !y || !r) {
      h.current = !1;
      return;
    }
    if (h.current || !o)
      return;
    const v = r?.node.current;
    if (!v || v.isConnected === !1)
      return;
    const x = u(v), b = tp(x, o);
    if (m || (b.x = 0), y || (b.y = 0), h.current = !0, Math.abs(b.x) > 0 || Math.abs(b.y) > 0) {
      const z = lp(v);
      z && z.scrollBy({
        top: b.y,
        left: b.x
      });
    }
  }, [r, m, y, o, u]);
}
const gc = /* @__PURE__ */ C.createContext({
  ...hn,
  scaleX: 1,
  scaleY: 1
});
var hl;
(function(i) {
  i[i.Uninitialized = 0] = "Uninitialized", i[i.Initializing = 1] = "Initializing", i[i.Initialized = 2] = "Initialized";
})(hl || (hl = {}));
const Py = /* @__PURE__ */ C.memo(function(r) {
  var u, o, f, h;
  let {
    id: m,
    accessibility: y,
    autoScroll: g = !0,
    children: v,
    sensors: x = Qy,
    collisionDetection: b = cy,
    measuring: z,
    modifiers: R,
    ...Z
  } = r;
  const q = C.useReducer($y, void 0, Jy), [A, Q] = q, [V, G] = F0(), [W, O] = C.useState(hl.Uninitialized), _ = W === hl.Initialized, {
    draggable: {
      active: M,
      nodes: L,
      translate: F
    },
    droppable: {
      containers: ae
    }
  } = A, ie = M != null ? L.get(M) : null, we = C.useRef({
    initial: null,
    translated: null
  }), Ne = C.useMemo(() => {
    var $e;
    return M != null ? {
      id: M,
      // It's possible for the active node to unmount while dragging
      data: ($e = ie?.data) != null ? $e : Vy,
      rect: we
    } : null;
  }, [M, ie]), ke = C.useRef(null), [ze, H] = C.useState(null), [$, te] = C.useState(null), se = Ni(Z, Object.values(Z)), ve = _i("DndDescribedBy", m), E = C.useMemo(() => ae.getEnabled(), [ae]), B = Fy(z), {
    droppableRects: K,
    measureDroppableContainers: I,
    measuringScheduled: oe
  } = Oy(E, {
    dragging: _,
    dependencies: [F.x, F.y],
    config: B.droppable
  }), ue = My(L, M), pe = C.useMemo(() => $ ? cc($) : null, [$]), Oe = Hl(), je = Uy(ue, B.draggable.measure);
  Iy({
    activeNode: M != null ? L.get(M) : null,
    config: Oe.layoutShiftCompensation,
    initialRect: je,
    measure: B.draggable.measure
  });
  const ge = bm(ue, B.draggable.measure, je), J = bm(ue ? ue.parentElement : null), ce = C.useRef({
    activatorEvent: null,
    active: null,
    activeNode: ue,
    collisionRect: null,
    collisions: null,
    droppableRects: K,
    draggableNodes: L,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: ae,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), ye = ae.getNodeFor((u = ce.current.over) == null ? void 0 : u.id), me = Zy({
    measure: B.dragOverlay.measure
  }), Ve = (o = me.nodeRef.current) != null ? o : ue, Ze = _ ? (f = me.rect) != null ? f : ge : null, ne = !!(me.nodeRef.current && me.rect), lt = Ly(ne ? null : ge), an = pp(Ve ? Et(Ve) : null), Xt = ky(_ ? ye ?? ue : null), Xn = Gy(Xt), Ol = bp(R, {
    transform: {
      x: F.x - lt.x,
      y: F.y - lt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: $,
    active: Ne,
    activeNodeRect: ge,
    containerNodeRect: J,
    draggingNodeRect: Ze,
    over: ce.current.over,
    overlayNodeRect: me.rect,
    scrollableAncestors: Xt,
    scrollableAncestorRects: Xn,
    windowRect: an
  }), Ri = pe ? Ca(pe, F) : null, gt = qy(Xt), bc = Sm(gt), Oi = Sm(gt, [ge]), xn = Ca(Ol, bc), un = Ze ? dy(Ze, Ol) : null, ml = Ne && un ? b({
    active: Ne,
    collisionRect: un,
    droppableRects: K,
    droppableContainers: E,
    pointerCoordinates: Ri
  }) : null, Aa = ay(ml, "id"), [mn, Ui] = C.useState(null), pl = ne ? Ol : Ca(Ol, Oi), St = sy(pl, (h = mn?.rect) != null ? h : null, ge), Gt = C.useRef(null), yt = C.useCallback(
    ($e, We) => {
      let {
        sensor: ct,
        options: wt
      } = We;
      if (ke.current == null)
        return;
      const zt = L.get(ke.current);
      if (!zt)
        return;
      const bt = $e.nativeEvent, jt = new ct({
        active: ke.current,
        activeNode: zt,
        event: bt,
        options: wt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ce,
        onAbort(at) {
          if (!L.get(at))
            return;
          const {
            onDragAbort: Ot
          } = se.current, Qt = {
            id: at
          };
          Ot?.(Qt), V({
            type: "onDragAbort",
            event: Qt
          });
        },
        onPending(at, cn, Ot, Qt) {
          if (!L.get(at))
            return;
          const {
            onDragPending: Cn
          } = se.current, rn = {
            id: at,
            constraint: cn,
            initialCoordinates: Ot,
            offset: Qt
          };
          Cn?.(rn), V({
            type: "onDragPending",
            event: rn
          });
        },
        onStart(at) {
          const cn = ke.current;
          if (cn == null)
            return;
          const Ot = L.get(cn);
          if (!Ot)
            return;
          const {
            onDragStart: Qt
          } = se.current, Sn = {
            activatorEvent: bt,
            active: {
              id: cn,
              data: Ot.data,
              rect: we
            }
          };
          Sa.unstable_batchedUpdates(() => {
            Qt?.(Sn), O(hl.Initializing), Q({
              type: ut.DragStart,
              initialCoordinates: at,
              active: cn
            }), V({
              type: "onDragStart",
              event: Sn
            }), H(Gt.current), te(bt);
          });
        },
        onMove(at) {
          Q({
            type: ut.DragMove,
            coordinates: at
          });
        },
        onEnd: Zt(ut.DragEnd),
        onCancel: Zt(ut.DragCancel)
      });
      Gt.current = jt;
      function Zt(at) {
        return async function() {
          const {
            active: Ot,
            collisions: Qt,
            over: Sn,
            scrollAdjustedTranslate: Cn
          } = ce.current;
          let rn = null;
          if (Ot && Cn) {
            const {
              cancelDrop: Gn
            } = se.current;
            rn = {
              activatorEvent: bt,
              active: Ot,
              collisions: Qt,
              delta: Cn,
              over: Sn
            }, at === ut.DragEnd && typeof Gn == "function" && await Promise.resolve(Gn(rn)) && (at = ut.DragCancel);
          }
          ke.current = null, Sa.unstable_batchedUpdates(() => {
            Q({
              type: at
            }), O(hl.Uninitialized), Ui(null), H(null), te(null), Gt.current = null;
            const Gn = at === ut.DragEnd ? "onDragEnd" : "onDragCancel";
            if (rn) {
              const Vt = se.current[Gn];
              Vt?.(rn), V({
                type: Gn,
                event: rn
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [L]
  ), xc = C.useCallback(($e, We) => (ct, wt) => {
    const zt = ct.nativeEvent, bt = L.get(wt);
    if (
      // Another sensor is already instantiating
      ke.current !== null || // No active draggable
      !bt || // Event has already been captured
      zt.dndKit || zt.defaultPrevented
    )
      return;
    const jt = {
      active: bt
    };
    $e(ct, We.options, jt) === !0 && (zt.dndKit = {
      capturedBy: We.sensor
    }, ke.current = wt, yt(ct, We));
  }, [L, yt]), Hi = Ry(x, xc);
  Yy(x), dn(() => {
    ge && W === hl.Initializing && O(hl.Initialized);
  }, [ge, W]), C.useEffect(
    () => {
      const {
        onDragMove: $e
      } = se.current, {
        active: We,
        activatorEvent: ct,
        collisions: wt,
        over: zt
      } = ce.current;
      if (!We || !ct)
        return;
      const bt = {
        active: We,
        activatorEvent: ct,
        collisions: wt,
        delta: {
          x: xn.x,
          y: xn.y
        },
        over: zt
      };
      Sa.unstable_batchedUpdates(() => {
        $e?.(bt), V({
          type: "onDragMove",
          event: bt
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [xn.x, xn.y]
  ), C.useEffect(
    () => {
      const {
        active: $e,
        activatorEvent: We,
        collisions: ct,
        droppableContainers: wt,
        scrollAdjustedTranslate: zt
      } = ce.current;
      if (!$e || ke.current == null || !We || !zt)
        return;
      const {
        onDragOver: bt
      } = se.current, jt = wt.get(Aa), Zt = jt && jt.rect.current ? {
        id: jt.id,
        rect: jt.rect.current,
        data: jt.data,
        disabled: jt.disabled
      } : null, at = {
        active: $e,
        activatorEvent: We,
        collisions: ct,
        delta: {
          x: zt.x,
          y: zt.y
        },
        over: Zt
      };
      Sa.unstable_batchedUpdates(() => {
        Ui(Zt), bt?.(at), V({
          type: "onDragOver",
          event: at
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Aa]
  ), dn(() => {
    ce.current = {
      activatorEvent: $,
      active: Ne,
      activeNode: ue,
      collisionRect: un,
      collisions: ml,
      droppableRects: K,
      draggableNodes: L,
      draggingNode: Ve,
      draggingNodeRect: Ze,
      droppableContainers: ae,
      over: mn,
      scrollableAncestors: Xt,
      scrollAdjustedTranslate: xn
    }, we.current = {
      initial: Ze,
      translated: un
    };
  }, [Ne, ue, ml, un, L, Ve, Ze, K, ae, mn, Xt, xn]), Dy({
    ...Oe,
    delta: F,
    draggingRect: un,
    pointerCoordinates: Ri,
    scrollableAncestors: Xt,
    scrollableAncestorRects: Xn
  });
  const Sc = C.useMemo(() => ({
    active: Ne,
    activeNode: ue,
    activeNodeRect: ge,
    activatorEvent: $,
    collisions: ml,
    containerNodeRect: J,
    dragOverlay: me,
    draggableNodes: L,
    droppableContainers: ae,
    droppableRects: K,
    over: mn,
    measureDroppableContainers: I,
    scrollableAncestors: Xt,
    scrollableAncestorRects: Xn,
    measuringConfiguration: B,
    measuringScheduled: oe,
    windowRect: an
  }), [Ne, ue, ge, $, ml, J, me, L, ae, K, mn, I, Xt, Xn, B, oe, an]), Ul = C.useMemo(() => ({
    activatorEvent: $,
    activators: Hi,
    active: Ne,
    activeNodeRect: ge,
    ariaDescribedById: {
      draggable: ve
    },
    dispatch: Q,
    draggableNodes: L,
    over: mn,
    measureDroppableContainers: I
  }), [$, Hi, Ne, ge, Q, ve, L, mn, I]);
  return Qe.createElement(Im.Provider, {
    value: G
  }, Qe.createElement(Mi.Provider, {
    value: Ul
  }, Qe.createElement(yp.Provider, {
    value: Sc
  }, Qe.createElement(gc.Provider, {
    value: St
  }, v)), Qe.createElement(Wy, {
    disabled: y?.restoreFocus === !1
  })), Qe.createElement(ey, {
    ...y,
    hiddenTextDescribedById: ve
  }));
  function Hl() {
    const $e = ze?.autoScrollEnabled === !1, We = typeof g == "object" ? g.enabled === !1 : g === !1, ct = _ && !$e && !We;
    return typeof g == "object" ? {
      ...g,
      enabled: ct
    } : {
      enabled: ct
    };
  }
}), eb = /* @__PURE__ */ C.createContext(null), Em = "button", tb = "Draggable";
function xp(i) {
  let {
    id: r,
    data: u,
    disabled: o = !1,
    attributes: f
  } = i;
  const h = _i(tb), {
    activators: m,
    activatorEvent: y,
    active: g,
    activeNodeRect: v,
    ariaDescribedById: x,
    draggableNodes: b,
    over: z
  } = C.useContext(Mi), {
    role: R = Em,
    roleDescription: Z = "draggable",
    tabIndex: q = 0
  } = f ?? {}, A = g?.id === r, Q = C.useContext(A ? gc : eb), [V, G] = ac(), [W, O] = ac(), _ = Xy(m, r), M = Ni(u);
  dn(
    () => (b.set(r, {
      id: r,
      key: h,
      node: V,
      activatorNode: W,
      data: M
    }), () => {
      const F = b.get(r);
      F && F.key === h && b.delete(r);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [b, r]
  );
  const L = C.useMemo(() => ({
    role: R,
    tabIndex: q,
    "aria-disabled": o,
    "aria-pressed": A && R === Em ? !0 : void 0,
    "aria-roledescription": Z,
    "aria-describedby": x.draggable
  }), [o, R, q, A, Z, x.draggable]);
  return {
    active: g,
    activatorEvent: y,
    activeNodeRect: v,
    attributes: L,
    isDragging: A,
    listeners: o ? void 0 : _,
    node: V,
    over: z,
    setNodeRef: G,
    setActivatorNodeRef: O,
    transform: Q
  };
}
function Sp() {
  return C.useContext(yp);
}
const nb = "Droppable", lb = {
  timeout: 25
};
function Cp(i) {
  let {
    data: r,
    disabled: u = !1,
    id: o,
    resizeObserverConfig: f
  } = i;
  const h = _i(nb), {
    active: m,
    dispatch: y,
    over: g,
    measureDroppableContainers: v
  } = C.useContext(Mi), x = C.useRef({
    disabled: u
  }), b = C.useRef(!1), z = C.useRef(null), R = C.useRef(null), {
    disabled: Z,
    updateMeasurementsFor: q,
    timeout: A
  } = {
    ...lb,
    ...f
  }, Q = Ni(q ?? o), V = C.useCallback(
    () => {
      if (!b.current) {
        b.current = !0;
        return;
      }
      R.current != null && clearTimeout(R.current), R.current = setTimeout(() => {
        v(Array.isArray(Q.current) ? Q.current : [Q.current]), R.current = null;
      }, A);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [A]
  ), G = vc({
    callback: V,
    disabled: Z || !m
  }), W = C.useCallback((L, F) => {
    G && (F && (G.unobserve(F), b.current = !1), L && G.observe(L));
  }, [G]), [O, _] = ac(W), M = Ni(r);
  return C.useEffect(() => {
    !G || !O.current || (G.disconnect(), b.current = !1, G.observe(O.current));
  }, [O, G]), C.useEffect(
    () => (y({
      type: ut.RegisterDroppable,
      element: {
        id: o,
        key: h,
        disabled: u,
        node: O,
        rect: z,
        data: M
      }
    }), () => y({
      type: ut.UnregisterDroppable,
      key: h,
      id: o
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o]
  ), C.useEffect(() => {
    u !== x.current.disabled && (y({
      type: ut.SetDroppableDisabled,
      id: o,
      key: h,
      disabled: u
    }), x.current.disabled = u);
  }, [o, h, u, y]), {
    active: m,
    rect: z,
    isOver: g?.id === o,
    node: O,
    over: g,
    setNodeRef: _
  };
}
function ab(i) {
  let {
    animation: r,
    children: u
  } = i;
  const [o, f] = C.useState(null), [h, m] = C.useState(null), y = ic(u);
  return !u && !o && y && f(y), dn(() => {
    if (!h)
      return;
    const g = o?.key, v = o?.props.id;
    if (g == null || v == null) {
      f(null);
      return;
    }
    Promise.resolve(r(v, h)).then(() => {
      f(null);
    });
  }, [r, o, h]), Qe.createElement(Qe.Fragment, null, u, o ? C.cloneElement(o, {
    ref: m
  }) : null);
}
const ib = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function ub(i) {
  let {
    children: r
  } = i;
  return Qe.createElement(Mi.Provider, {
    value: gp
  }, Qe.createElement(gc.Provider, {
    value: ib
  }, r));
}
const cb = {
  position: "fixed",
  touchAction: "none"
}, rb = (i) => pc(i) ? "transform 250ms ease" : void 0, ob = /* @__PURE__ */ C.forwardRef((i, r) => {
  let {
    as: u,
    activatorEvent: o,
    adjustScale: f,
    children: h,
    className: m,
    rect: y,
    style: g,
    transform: v,
    transition: x = rb
  } = i;
  if (!y)
    return null;
  const b = f ? v : {
    ...v,
    scaleX: 1,
    scaleY: 1
  }, z = {
    ...cb,
    width: y.width,
    height: y.height,
    top: y.top,
    left: y.left,
    transform: bn.Transform.toString(b),
    transformOrigin: f && o ? ny(o, y) : void 0,
    transition: typeof x == "function" ? x(o) : x,
    ...g
  };
  return Qe.createElement(u, {
    className: m,
    style: z,
    ref: r
  }, h);
}), sb = (i) => (r) => {
  let {
    active: u,
    dragOverlay: o
  } = r;
  const f = {}, {
    styles: h,
    className: m
  } = i;
  if (h != null && h.active)
    for (const [y, g] of Object.entries(h.active))
      g !== void 0 && (f[y] = u.node.style.getPropertyValue(y), u.node.style.setProperty(y, g));
  if (h != null && h.dragOverlay)
    for (const [y, g] of Object.entries(h.dragOverlay))
      g !== void 0 && o.node.style.setProperty(y, g);
  return m != null && m.active && u.node.classList.add(m.active), m != null && m.dragOverlay && o.node.classList.add(m.dragOverlay), function() {
    for (const [g, v] of Object.entries(f))
      u.node.style.setProperty(g, v);
    m != null && m.active && u.node.classList.remove(m.active);
  };
}, fb = (i) => {
  let {
    transform: {
      initial: r,
      final: u
    }
  } = i;
  return [{
    transform: bn.Transform.toString(r)
  }, {
    transform: bn.Transform.toString(u)
  }];
}, db = {
  duration: 250,
  easing: "ease",
  keyframes: fb,
  sideEffects: /* @__PURE__ */ sb({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function hb(i) {
  let {
    config: r,
    draggableNodes: u,
    droppableContainers: o,
    measuringConfiguration: f
  } = i;
  return mc((h, m) => {
    if (r === null)
      return;
    const y = u.get(h);
    if (!y)
      return;
    const g = y.node.current;
    if (!g)
      return;
    const v = vp(m);
    if (!v)
      return;
    const {
      transform: x
    } = Et(m).getComputedStyle(m), b = np(x);
    if (!b)
      return;
    const z = typeof r == "function" ? r : mb(r);
    return op(g, f.draggable.measure), z({
      active: {
        id: h,
        data: y.data,
        node: g,
        rect: f.draggable.measure(g)
      },
      draggableNodes: u,
      dragOverlay: {
        node: m,
        rect: f.dragOverlay.measure(v)
      },
      droppableContainers: o,
      measuringConfiguration: f,
      transform: b
    });
  });
}
function mb(i) {
  const {
    duration: r,
    easing: u,
    sideEffects: o,
    keyframes: f
  } = {
    ...db,
    ...i
  };
  return (h) => {
    let {
      active: m,
      dragOverlay: y,
      transform: g,
      ...v
    } = h;
    if (!r)
      return;
    const x = {
      x: y.rect.left - m.rect.left,
      y: y.rect.top - m.rect.top
    }, b = {
      scaleX: g.scaleX !== 1 ? m.rect.width * g.scaleX / y.rect.width : 1,
      scaleY: g.scaleY !== 1 ? m.rect.height * g.scaleY / y.rect.height : 1
    }, z = {
      x: g.x - x.x,
      y: g.y - x.y,
      ...b
    }, R = f({
      ...v,
      active: m,
      dragOverlay: y,
      transform: {
        initial: g,
        final: z
      }
    }), [Z] = R, q = R[R.length - 1];
    if (JSON.stringify(Z) === JSON.stringify(q))
      return;
    const A = o?.({
      active: m,
      dragOverlay: y,
      ...v
    }), Q = y.node.animate(R, {
      duration: r,
      easing: u,
      fill: "forwards"
    });
    return new Promise((V) => {
      Q.onfinish = () => {
        A?.(), V();
      };
    });
  };
}
let wm = 0;
function pb(i) {
  return C.useMemo(() => {
    if (i != null)
      return wm++, wm;
  }, [i]);
}
const vb = /* @__PURE__ */ Qe.memo((i) => {
  let {
    adjustScale: r = !1,
    children: u,
    dropAnimation: o,
    style: f,
    transition: h,
    modifiers: m,
    wrapperElement: y = "div",
    className: g,
    zIndex: v = 999
  } = i;
  const {
    activatorEvent: x,
    active: b,
    activeNodeRect: z,
    containerNodeRect: R,
    draggableNodes: Z,
    droppableContainers: q,
    dragOverlay: A,
    over: Q,
    measuringConfiguration: V,
    scrollableAncestors: G,
    scrollableAncestorRects: W,
    windowRect: O
  } = Sp(), _ = C.useContext(gc), M = pb(b?.id), L = bp(m, {
    activatorEvent: x,
    active: b,
    activeNodeRect: z,
    containerNodeRect: R,
    draggingNodeRect: A.rect,
    over: Q,
    overlayNodeRect: A.rect,
    scrollableAncestors: G,
    scrollableAncestorRects: W,
    transform: _,
    windowRect: O
  }), F = cs(z), ae = hb({
    config: o,
    draggableNodes: Z,
    droppableContainers: q,
    measuringConfiguration: V
  }), ie = F ? A.setRef : void 0;
  return Qe.createElement(ub, null, Qe.createElement(ab, {
    animation: ae
  }, b && M ? Qe.createElement(ob, {
    key: M,
    id: b.id,
    ref: ie,
    as: y,
    activatorEvent: x,
    adjustScale: r,
    className: g,
    transition: h,
    rect: F,
    style: {
      zIndex: v,
      ...f
    },
    transform: L
  }, u) : null));
});
function rs(i, r, u) {
  const o = i.slice();
  return o.splice(u < 0 ? o.length + u : u, 0, o.splice(r, 1)[0]), o;
}
function gb(i, r) {
  return i.reduce((u, o, f) => {
    const h = r.get(o);
    return h && (u[f] = h), u;
  }, Array(i.length));
}
function $u(i) {
  return i !== null && i >= 0;
}
function yb(i, r) {
  if (i === r)
    return !0;
  if (i.length !== r.length)
    return !1;
  for (let u = 0; u < i.length; u++)
    if (i[u] !== r[u])
      return !1;
  return !0;
}
function bb(i) {
  return typeof i == "boolean" ? {
    draggable: i,
    droppable: i
  } : i;
}
const Wu = {
  scaleX: 1,
  scaleY: 1
}, zm = (i) => {
  var r;
  let {
    rects: u,
    activeNodeRect: o,
    activeIndex: f,
    overIndex: h,
    index: m
  } = i;
  const y = (r = u[f]) != null ? r : o;
  if (!y)
    return null;
  const g = xb(u, m, f);
  if (m === f) {
    const v = u[h];
    return v ? {
      x: f < h ? v.left + v.width - (y.left + y.width) : v.left - y.left,
      y: 0,
      ...Wu
    } : null;
  }
  return m > f && m <= h ? {
    x: -y.width - g,
    y: 0,
    ...Wu
  } : m < f && m >= h ? {
    x: y.width + g,
    y: 0,
    ...Wu
  } : {
    x: 0,
    y: 0,
    ...Wu
  };
};
function xb(i, r, u) {
  const o = i[r], f = i[r - 1], h = i[r + 1];
  return !o || !f && !h ? 0 : u < r ? f ? o.left - (f.left + f.width) : h.left - (o.left + o.width) : h ? h.left - (o.left + o.width) : o.left - (f.left + f.width);
}
const Ep = (i) => {
  let {
    rects: r,
    activeIndex: u,
    overIndex: o,
    index: f
  } = i;
  const h = rs(r, o, u), m = r[f], y = h[f];
  return !y || !m ? null : {
    x: y.left - m.left,
    y: y.top - m.top,
    scaleX: y.width / m.width,
    scaleY: y.height / m.height
  };
}, wp = "Sortable", zp = /* @__PURE__ */ Qe.createContext({
  activeIndex: -1,
  containerId: wp,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Ep,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function jm(i) {
  let {
    children: r,
    id: u,
    items: o,
    strategy: f = Ep,
    disabled: h = !1
  } = i;
  const {
    active: m,
    dragOverlay: y,
    droppableRects: g,
    over: v,
    measureDroppableContainers: x
  } = Sp(), b = _i(wp, u), z = y.rect !== null, R = C.useMemo(() => o.map((_) => typeof _ == "object" && "id" in _ ? _.id : _), [o]), Z = m != null, q = m ? R.indexOf(m.id) : -1, A = v ? R.indexOf(v.id) : -1, Q = C.useRef(R), V = !yb(R, Q.current), G = A !== -1 && q === -1 || V, W = bb(h);
  dn(() => {
    V && Z && x(R);
  }, [V, R, Z, x]), C.useEffect(() => {
    Q.current = R;
  }, [R]);
  const O = C.useMemo(
    () => ({
      activeIndex: q,
      containerId: b,
      disabled: W,
      disableTransforms: G,
      items: R,
      overIndex: A,
      useDragOverlay: z,
      sortedRects: gb(R, g),
      strategy: f
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [q, b, W.draggable, W.droppable, G, R, A, g, z, f]
  );
  return Qe.createElement(zp.Provider, {
    value: O
  }, r);
}
const Sb = (i) => {
  let {
    id: r,
    items: u,
    activeIndex: o,
    overIndex: f
  } = i;
  return rs(u, o, f).indexOf(r);
}, Cb = (i) => {
  let {
    containerId: r,
    isSorting: u,
    wasDragging: o,
    index: f,
    items: h,
    newIndex: m,
    previousItems: y,
    previousContainerId: g,
    transition: v
  } = i;
  return !v || !o || y !== h && f === m ? !1 : u ? !0 : m !== f && r === g;
}, Eb = {
  duration: 200,
  easing: "ease"
}, jp = "transform", wb = /* @__PURE__ */ bn.Transition.toString({
  property: jp,
  duration: 0,
  easing: "linear"
}), zb = {
  roleDescription: "sortable"
};
function jb(i) {
  let {
    disabled: r,
    index: u,
    node: o,
    rect: f
  } = i;
  const [h, m] = C.useState(null), y = C.useRef(u);
  return dn(() => {
    if (!r && u !== y.current && o.current) {
      const g = f.current;
      if (g) {
        const v = Da(o.current, {
          ignoreTransform: !0
        }), x = {
          x: g.left - v.left,
          y: g.top - v.top,
          scaleX: g.width / v.width,
          scaleY: g.height / v.height
        };
        (x.x || x.y) && m(x);
      }
    }
    u !== y.current && (y.current = u);
  }, [r, u, o, f]), C.useEffect(() => {
    h && m(null);
  }, [h]), h;
}
function os(i) {
  let {
    animateLayoutChanges: r = Cb,
    attributes: u,
    disabled: o,
    data: f,
    getNewIndex: h = Sb,
    id: m,
    strategy: y,
    resizeObserverConfig: g,
    transition: v = Eb
  } = i;
  const {
    items: x,
    containerId: b,
    activeIndex: z,
    disabled: R,
    disableTransforms: Z,
    sortedRects: q,
    overIndex: A,
    useDragOverlay: Q,
    strategy: V
  } = C.useContext(zp), G = Nb(o, R), W = x.indexOf(m), O = C.useMemo(() => ({
    sortable: {
      containerId: b,
      index: W,
      items: x
    },
    ...f
  }), [b, f, W, x]), _ = C.useMemo(() => x.slice(x.indexOf(m)), [x, m]), {
    rect: M,
    node: L,
    isOver: F,
    setNodeRef: ae
  } = Cp({
    id: m,
    data: O,
    disabled: G.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: _,
      ...g
    }
  }), {
    active: ie,
    activatorEvent: we,
    activeNodeRect: Ne,
    attributes: ke,
    setNodeRef: ze,
    listeners: H,
    isDragging: $,
    over: te,
    setActivatorNodeRef: se,
    transform: ve
  } = xp({
    id: m,
    data: O,
    attributes: {
      ...zb,
      ...u
    },
    disabled: G.draggable
  }), E = Y0(ae, ze), B = !!ie, K = B && !Z && $u(z) && $u(A), I = !Q && $, oe = I && K ? ve : null, pe = K ? oe ?? (y ?? V)({
    rects: q,
    activeNodeRect: Ne,
    activeIndex: z,
    overIndex: A,
    index: W
  }) : null, Oe = $u(z) && $u(A) ? h({
    id: m,
    items: x,
    activeIndex: z,
    overIndex: A
  }) : W, je = ie?.id, ge = C.useRef({
    activeId: je,
    items: x,
    newIndex: Oe,
    containerId: b
  }), J = x !== ge.current.items, ce = r({
    active: ie,
    containerId: b,
    isDragging: $,
    isSorting: B,
    id: m,
    index: W,
    items: x,
    newIndex: ge.current.newIndex,
    previousItems: ge.current.items,
    previousContainerId: ge.current.containerId,
    transition: v,
    wasDragging: ge.current.activeId != null
  }), ye = jb({
    disabled: !ce,
    index: W,
    node: L,
    rect: M
  });
  return C.useEffect(() => {
    B && ge.current.newIndex !== Oe && (ge.current.newIndex = Oe), b !== ge.current.containerId && (ge.current.containerId = b), x !== ge.current.items && (ge.current.items = x);
  }, [B, Oe, b, x]), C.useEffect(() => {
    if (je === ge.current.activeId)
      return;
    if (je != null && ge.current.activeId == null) {
      ge.current.activeId = je;
      return;
    }
    const Ve = setTimeout(() => {
      ge.current.activeId = je;
    }, 50);
    return () => clearTimeout(Ve);
  }, [je]), {
    active: ie,
    activeIndex: z,
    attributes: ke,
    data: O,
    rect: M,
    index: W,
    newIndex: Oe,
    items: x,
    isOver: F,
    isSorting: B,
    isDragging: $,
    listeners: H,
    node: L,
    overIndex: A,
    over: te,
    setNodeRef: E,
    setActivatorNodeRef: se,
    setDroppableNodeRef: ae,
    setDraggableNodeRef: ze,
    transform: ye ?? pe,
    transition: me()
  };
  function me() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      ye || // Or to prevent items jumping to back to their "new" position when items change
      J && ge.current.newIndex === W
    )
      return wb;
    if (!(I && !pc(we) || !v) && (B || ce))
      return bn.Transition.toString({
        ...v,
        property: jp
      });
  }
}
function Nb(i, r) {
  var u, o;
  return typeof i == "boolean" ? {
    draggable: i,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (u = i?.draggable) != null ? u : r.draggable,
    droppable: (o = i?.droppable) != null ? o : r.droppable
  };
}
_e.Down, _e.Right, _e.Up, _e.Left;
function Np({
  src: i,
  alt: r = "",
  fill: u,
  unoptimized: o,
  sizes: f,
  ...h
}) {
  return /* @__PURE__ */ d.jsx(
    "img",
    {
      src: i,
      alt: r,
      ...h,
      style: u ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%"
      } : void 0
    }
  );
}
const Tb = (i) => i.name, Tp = ({
  fileName: i,
  mimeType: r
}) => r?.startsWith("image/") ? "image" : r?.startsWith("video/") ? "video" : /\.(png|jpe?g|gif|webp)$/i.test(i) ? "image" : "file";
async function Nm(i) {
  if (!i) throw new Error("No media URL");
  const r = await fetch(i, { credentials: "same-origin" });
  if (!r.ok) throw new Error("Media unavailable");
  return r.blob();
}
const Tm = {
  downloadTaskAttachmentThumbnail: (i, r) => Nm(r.thumbnail_url),
  downloadTaskAttachment: async (i, r) => ({ blob: await Nm(r.download_url) })
}, Ci = /* @__PURE__ */ new Map();
let Rl = null;
function Db(i, r) {
  return typeof IntersectionObserver > "u" ? (r(), () => {
  }) : (Rl || (Rl = new IntersectionObserver(
    (u) => {
      u.forEach((o) => {
        if (!o.isIntersecting) return;
        const f = Ci.get(o.target);
        f && (Ci.delete(o.target), Rl?.unobserve(o.target), f());
      });
    },
    {
      rootMargin: "900px 700px",
      threshold: 0.01
    }
  )), Ci.set(i, r), Rl.observe(i), () => {
    Ci.delete(i), Rl?.unobserve(i), Ci.size === 0 && (Rl?.disconnect(), Rl = null);
  });
}
function Ab({
  taskId: i,
  attachment: r
}) {
  const [u, o] = C.useState(null), [f, h] = C.useState(!1), [m, y] = C.useState(!1), g = Tp({
    fileName: r.file_name,
    mimeType: r.mime_type
  }) === "video", v = r.id, x = r.thumbnail_url, b = r.download_url, z = r.file_name;
  return C.useEffect(() => {
    let R = !0, Z = null;
    return Tm.downloadTaskAttachmentThumbnail(i, {
      id: v,
      thumbnail_url: x
    }).then((q) => ({ blob: q, original: !1 })).catch(async () => {
      const { blob: q } = await Tm.downloadTaskAttachment(i, {
        id: v,
        download_url: b,
        file_name: z
      });
      return { blob: q, original: !0 };
    }).then(({ blob: q, original: A }) => {
      R && (Z = URL.createObjectURL(q), h(A), o(Z));
    }).catch(() => {
      R && y(!0);
    }), () => {
      R = !1, Z && URL.revokeObjectURL(Z);
    };
  }, [v, b, z, i, x]), /* @__PURE__ */ d.jsx("div", { className: "absolute inset-0 overflow-hidden bg-[var(--surface-secondary)]", children: u ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    g && f ? /* @__PURE__ */ d.jsx(
      "video",
      {
        src: u,
        muted: !0,
        playsInline: !0,
        preload: "metadata",
        className: "h-full w-full object-cover"
      }
    ) : /* @__PURE__ */ d.jsx(
      Np,
      {
        src: u,
        alt: "",
        fill: !0,
        unoptimized: !0,
        sizes: "272px",
        className: "object-cover",
        draggable: !1
      }
    ),
    g ? /* @__PURE__ */ d.jsx("span", { className: "app-surface-elevated pointer-events-none absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border-subtle)]", children: /* @__PURE__ */ d.jsx(Jm, { size: 13, className: "translate-x-px" }) }) : null
  ] }) : /* @__PURE__ */ d.jsx("span", { className: "app-text-muted absolute inset-0 flex items-center justify-center", children: m ? /* @__PURE__ */ d.jsx(Qm, { size: 20 }) : /* @__PURE__ */ d.jsx(lc, { size: 18, className: "animate-spin" }) }) });
}
function _b({
  taskId: i,
  attachment: r
}) {
  const u = C.useRef(null), [o, f] = C.useState(!1);
  return C.useEffect(() => {
    const h = u.current;
    if (!(!h || o))
      return Db(h, () => f(!0));
  }, [o]), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: u,
      className: "absolute inset-0 overflow-hidden bg-[var(--surface-secondary)]",
      children: o ? /* @__PURE__ */ d.jsx(
        Ab,
        {
          taskId: i,
          attachment: r
        },
        r.id
      ) : null
    }
  );
}
function Mb({
  taskId: i,
  cover: r,
  className: u = ""
}) {
  const o = C.useMemo(
    () => r.comment?.attachments.find((h) => {
      const m = Tp({
        fileName: h.file_name,
        mimeType: h.mime_type
      });
      return m === "image" || m === "video";
    }),
    [r.comment?.attachments]
  ), f = r.kind === "attachment" ? r.attachment : o;
  if (f)
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        className: `relative overflow-hidden bg-[var(--surface-secondary)] ${u}`,
        children: /* @__PURE__ */ d.jsx(_b, { taskId: i, attachment: f })
      }
    );
  if (r.kind === "checklist" && r.checklist) {
    const { completed: h, items: m, total: y } = r.checklist;
    if (y <= 0 || m.length === 0) return null;
    const g = Math.round(h / y * 100);
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: `app-surface-muted flex flex-col justify-center overflow-hidden p-2 ${u}`,
        children: [
          /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ d.jsx("div", { className: "h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[var(--surface-secondary)]", children: /* @__PURE__ */ d.jsx(
              "div",
              {
                className: "h-full rounded-full bg-emerald-500 transition-[width]",
                style: { width: `${g}%` }
              }
            ) }),
            /* @__PURE__ */ d.jsxs("span", { className: "app-text-muted shrink-0 text-[9px] tabular-nums", children: [
              h,
              "/",
              y
            ] })
          ] }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-1.5 space-y-0.5 overflow-hidden", children: m.map((v) => /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: "flex min-w-0 items-center gap-1.5 text-[10px] leading-3.5",
              children: [
                /* @__PURE__ */ d.jsx(
                  "span",
                  {
                    className: `flex h-3 w-3 shrink-0 items-center justify-center rounded-sm border ${v.is_completed ? "border-emerald-500 bg-emerald-500 text-white" : "border-[var(--border-strong)]"}`,
                    children: v.is_completed ? /* @__PURE__ */ d.jsx(sc, { size: 8 }) : null
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  "span",
                  {
                    className: `truncate ${v.is_completed ? "app-text-muted line-through" : "text-[var(--foreground)]"}`,
                    children: v.title
                  }
                )
              ]
            },
            v.id
          )) })
        ]
      }
    );
  }
  if (r.kind === "comment" && r.comment)
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: `app-surface-muted flex flex-col justify-center overflow-hidden p-3 ${u}`,
        children: [
          /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-[var(--foreground)]", children: [
            /* @__PURE__ */ d.jsx(ts, { size: 14, className: "shrink-0 text-sky-400" }),
            /* @__PURE__ */ d.jsx("span", { className: "truncate", children: Tb(r.comment.author) })
          ] }),
          /* @__PURE__ */ d.jsx("p", { className: "app-text-wrap mt-2 line-clamp-3 text-xs leading-4 text-[var(--foreground)]", children: r.comment.text || "Комментарий с вложением" })
        ]
      }
    );
  if (r.kind === "external_link" && r.external_link) {
    let h = r.external_link.url;
    try {
      h = new URL(r.external_link.url).hostname;
    } catch {
    }
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: `app-surface-muted flex flex-col justify-center overflow-hidden p-3 ${u}`,
        children: [
          /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-[var(--foreground)]", children: [
            /* @__PURE__ */ d.jsx(d0, { size: 14, className: "shrink-0 text-cyan-400" }),
            /* @__PURE__ */ d.jsx("span", { className: "truncate", children: r.external_link.title || h })
          ] }),
          /* @__PURE__ */ d.jsx("p", { className: "app-text-muted mt-2 truncate text-[10px]", children: h }),
          /* @__PURE__ */ d.jsx("p", { className: "app-text-muted mt-1 line-clamp-2 break-all text-[10px]", children: r.external_link.url })
        ]
      }
    );
  }
  return r.kind === "linked_object" && r.linked_object ? /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `app-surface-muted flex flex-col justify-center overflow-hidden p-3 ${u}`,
      children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2 text-[10px] font-medium uppercase text-sky-400", children: [
          /* @__PURE__ */ d.jsx(Vm, { size: 13, className: "shrink-0" }),
          /* @__PURE__ */ d.jsx("span", { className: "truncate", children: r.linked_object.kind_display })
        ] }),
        /* @__PURE__ */ d.jsx("p", { className: "mt-2 truncate text-xs font-semibold text-[var(--foreground)]", children: r.linked_object.title }),
        r.linked_object.description ? /* @__PURE__ */ d.jsx("p", { className: "app-text-muted mt-1 line-clamp-2 text-[10px] leading-4", children: r.linked_object.description }) : null
      ]
    }
  ) : /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `app-surface-muted flex items-center justify-center ${u}`,
      children: /* @__PURE__ */ d.jsx(v0, { size: 20, className: "app-text-muted" })
    }
  );
}
const Rb = (i) => i.name, Ob = (i) => (/* @__PURE__ */ new Date(i + "T00:00:00")).toLocaleDateString("ru-RU"), Ub = "app-text-muted mt-1 block max-h-8 w-full max-w-[13rem] overflow-hidden whitespace-normal break-all text-xs leading-4";
function Hb({ description: i }) {
  return /* @__PURE__ */ d.jsx(
    "p",
    {
      className: Ub,
      style: { overflowWrap: "anywhere", wordBreak: "break-all" },
      children: i
    }
  );
}
const Dp = [
  {
    value: "low",
    label: "Низкий",
    urgencyLabel: "Низкая",
    className: "app-badge",
    textClassName: "app-text-muted",
    dotClassName: "bg-slate-400",
    selectedClassName: "bg-slate-500"
  },
  {
    value: "medium",
    label: "Средний",
    urgencyLabel: "Средняя",
    className: "app-selected",
    textClassName: "text-[var(--accent-primary-strong)]",
    dotClassName: "bg-sky-500",
    selectedClassName: "bg-sky-500"
  },
  {
    value: "high",
    label: "Высокий",
    urgencyLabel: "Высокая",
    className: "app-feedback-warning",
    textClassName: "text-[var(--warning-foreground)]",
    dotClassName: "bg-amber-500",
    selectedClassName: "bg-amber-500"
  },
  {
    value: "critical",
    label: "Критический",
    urgencyLabel: "Критическая",
    className: "app-feedback-danger",
    textClassName: "text-[var(--danger-foreground)]",
    dotClassName: "bg-red-500",
    selectedClassName: "bg-red-500"
  }
], Dm = Object.fromEntries(
  Dp.map((i) => [i.value, i])
);
function Bb(i) {
  if (!i) return null;
  const r = String(i).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!r) return null;
  const u = Number(r[1]), o = Number(r[2]), f = Number(r[3]);
  if (!Number.isFinite(u) || !Number.isFinite(o) || !Number.isFinite(f))
    return null;
  const h = new Date(u, o - 1, f);
  return h.setHours(0, 0, 0, 0), h.getTime();
}
function Lb(i, r = "app-badge") {
  if (!i.due_date || i.completed_at) return r;
  const u = Bb(i.due_date);
  if (u === null) return r;
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const f = o.getTime();
  return u < f ? "app-feedback-danger" : u === f ? "app-feedback-warning" : r;
}
const kb = C.memo(function({
  task: r,
  onOpen: u,
  currentUserId: o,
  claiming: f,
  onClaim: h,
  completing: m,
  onComplete: y,
  menuOpen: g,
  onToggleTaskMenu: v,
  attributes: x,
  listeners: b,
  setNodeRef: z,
  style: R,
  isDragging: Z = !1,
  onPointerEnter: q,
  onPointerLeave: A,
  onPointerDownCapture: Q,
  onPointerUpCapture: V,
  onPointerCancelCapture: G
}) {
  const W = Dm[r.priority] ?? Dm.medium, O = Lb(r), _ = (!r.assignee || !r.assignee.is_active) && !r.completed_at, M = r.assignee?.id === o && !r.completed_at;
  return /* @__PURE__ */ d.jsxs(
    "article",
    {
      ref: z,
      style: R,
      className: `tasks-task-card app-surface-elevated cursor-grab select-none rounded-xl border border-[var(--border-subtle)] p-3 shadow-sm transition active:cursor-grabbing ${Z ? "opacity-30" : "hover:border-[var(--border-strong)]"}`,
      title: "Перетащите задачу в нужную колонку",
      onClick: () => u(r),
      onPointerEnter: q,
      onPointerLeave: A,
      onPointerDownCapture: Q,
      onPointerUpCapture: V,
      onPointerCancelCapture: G,
      ...x,
      ...b,
      children: [
        r.cover ? /* @__PURE__ */ d.jsx(
          Mb,
          {
            taskId: r.id,
            cover: r.cover,
            className: "-mx-3 -mt-3 mb-3 aspect-[16/7] max-h-32 w-[calc(100%+1.5rem)] rounded-t-[11px] border-b border-[var(--border-subtle)]"
          }
        ) : null,
        /* @__PURE__ */ d.jsxs("div", { className: "mb-2 min-w-0 overflow-hidden whitespace-normal text-left", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "flex min-w-0 items-start gap-2", children: [
            /* @__PURE__ */ d.jsxs("span", { className: "app-badge shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-semibold", children: [
              "#",
              r.id
            ] }),
            /* @__PURE__ */ d.jsx(
              "h3",
              {
                className: "line-clamp-4 min-w-0 flex-1 break-words text-sm font-semibold leading-5 text-[var(--foreground)]",
                title: r.title,
                children: r.title
              }
            ),
            /* @__PURE__ */ d.jsx(
              "div",
              {
                className: "relative shrink-0",
                onPointerDown: (L) => L.stopPropagation(),
                onClick: (L) => L.stopPropagation(),
                children: /* @__PURE__ */ d.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (L) => v(r.id, L.currentTarget),
                    className: "app-icon-button flex h-7 w-7 items-center justify-center rounded-md",
                    title: "Действия",
                    "aria-label": "Действия с задачей",
                    "aria-expanded": g,
                    "aria-haspopup": "menu",
                    children: /* @__PURE__ */ d.jsx(
                      fc,
                      {
                        size: 14,
                        className: `transition-transform ${g ? "" : "-rotate-90"}`
                      }
                    )
                  }
                )
              }
            )
          ] }),
          r.description ? /* @__PURE__ */ d.jsx(Hb, { description: r.description }) : null,
          /* @__PURE__ */ d.jsx("div", { className: "mt-1 flex justify-end", children: /* @__PURE__ */ d.jsxs(
            "span",
            {
              className: `whitespace-nowrap text-right text-[11px] font-medium ${W.textClassName}`,
              children: [
                W.urgencyLabel,
                " срочность"
              ]
            }
          ) })
        ] }),
        r.labels && r.labels.length > 0 ? /* @__PURE__ */ d.jsx("div", { className: "mb-2 flex flex-wrap gap-1.5", children: r.labels.map((L) => /* @__PURE__ */ d.jsx(
          "span",
          {
            className: "inline-flex max-w-full items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-white",
            style: { backgroundColor: L.color || "#38bdf8" },
            children: L.name
          },
          L.id
        )) }) : null,
        /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          _ ? /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              onPointerDown: (L) => L.stopPropagation(),
              onClick: (L) => {
                L.stopPropagation(), h(r);
              },
              disabled: f,
              className: "app-action-primary inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full disabled:cursor-wait disabled:opacity-60",
              title: "Взять задачу в работу",
              "aria-label": `Взять задачу в работу ${r.title}`,
              children: f ? /* @__PURE__ */ d.jsx(lc, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ d.jsx(Jm, { size: 14 })
            }
          ) : null,
          M ? /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              onPointerDown: (L) => L.stopPropagation(),
              onClick: (L) => {
                L.stopPropagation(), y(r);
              },
              disabled: m,
              className: "app-action-success inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full disabled:cursor-wait disabled:opacity-60",
              title: "Завершить задачу",
              "aria-label": `Завершить задачу ${r.title}`,
              children: m ? /* @__PURE__ */ d.jsx(lc, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ d.jsx(sc, { size: 14, strokeWidth: 2.5 })
            }
          ) : null,
          r.assignee ? /* @__PURE__ */ d.jsxs("span", { className: "app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px]", children: [
            /* @__PURE__ */ d.jsx(B0, { size: 11 }),
            Rb(r.assignee)
          ] }) : null,
          r.due_date ? /* @__PURE__ */ d.jsxs(
            "span",
            {
              className: `${O} inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px]`,
              children: [
                /* @__PURE__ */ d.jsx(c0, { size: 11 }),
                Ob(r.due_date)
              ]
            }
          ) : null,
          (r.checklist_total || 0) > 0 ? /* @__PURE__ */ d.jsxs("span", { className: "app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px]", children: [
            /* @__PURE__ */ d.jsx(S0, { size: 11 }),
            r.checklist_completed || 0,
            "/",
            r.checklist_total
          ] }) : null,
          (r.attachments_count || 0) > 0 ? /* @__PURE__ */ d.jsxs(
            "button",
            {
              type: "button",
              onPointerDown: (L) => L.stopPropagation(),
              onClick: (L) => {
                L.stopPropagation(), u(r, "attachments");
              },
              className: "app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] transition hover:border-[var(--border-strong)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]",
              title: "Открыть вложения задачи",
              "aria-label": `Открыть вложения задачи: ${r.attachments_count}`,
              children: [
                /* @__PURE__ */ d.jsx(Km, { size: 11 }),
                r.attachments_count
              ]
            }
          ) : null,
          (r.linked_objects_count || r.linked_messages_count || 0) > 0 ? /* @__PURE__ */ d.jsxs("span", { className: "app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px]", children: [
            /* @__PURE__ */ d.jsx(Vm, { size: 11 }),
            r.linked_objects_count || r.linked_messages_count
          ] }) : null,
          (r.comments_count || 0) > 0 ? /* @__PURE__ */ d.jsxs(
            "button",
            {
              type: "button",
              onPointerDown: (L) => L.stopPropagation(),
              onClick: (L) => {
                L.stopPropagation(), u(r, "comments");
              },
              className: "app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] transition hover:border-[var(--border-strong)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]",
              title: "Открыть комментарии задачи",
              "aria-label": `Открыть комментарии задачи: ${r.comments_count}`,
              children: [
                /* @__PURE__ */ d.jsx(ts, { size: 11 }),
                r.comments_count
              ]
            }
          ) : null
        ] })
      ]
    }
  );
});
function qb({
  task: i,
  onBindingChange: r,
  onDraggingChange: u
}) {
  const { attributes: o, listeners: f, setNodeRef: h, isDragging: m } = xp({
    id: `task-${i.id}`,
    data: { type: "task", taskId: i.id }
  }), y = C.useMemo(
    () => ({
      attributes: o,
      listeners: f,
      setNodeRef: h,
      isDragging: m
    }),
    [o, m, f, h]
  );
  return C.useLayoutEffect(() => (r(y), () => r(null)), [y, r]), C.useEffect(() => {
    u(m);
  }, [m, u]), null;
}
const Ap = C.memo(function(r) {
  const [u, o] = C.useState(!1), [f, h] = C.useState(
    null
  ), m = C.useRef(!1), y = C.useRef(!1), g = C.useRef(!1), v = C.useCallback((x) => {
    g.current = x, !x && !m.current && o(!1);
  }, []);
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    u ? /* @__PURE__ */ d.jsx(
      qb,
      {
        task: r.task,
        onBindingChange: h,
        onDraggingChange: v
      }
    ) : null,
    /* @__PURE__ */ d.jsx(
      kb,
      {
        ...r,
        ...f || {},
        onPointerEnter: () => {
          m.current = !0, o(!0);
        },
        onPointerLeave: () => {
          m.current = !1, !y.current && !g.current && o(!1);
        },
        onPointerDownCapture: () => {
          y.current = !0, u || Sa.flushSync(() => o(!0));
        },
        onPointerUpCapture: () => {
          y.current = !1, !m.current && !g.current && o(!1);
        },
        onPointerCancelCapture: () => {
          y.current = !1, !m.current && !g.current && o(!1);
        }
      },
      `task-card-content-${r.task.id}`
    )
  ] });
});
function Yb({
  title: i,
  priority: r,
  saving: u,
  columnName: o,
  onTitleChange: f,
  onPriorityChange: h,
  onSubmit: m,
  onCancel: y
}) {
  return /* @__PURE__ */ d.jsxs(
    "form",
    {
      onSubmit: (g) => {
        g.preventDefault(), m();
      },
      onPointerDown: (g) => g.stopPropagation(),
      className: "app-surface-elevated rounded-xl border border-[var(--accent-primary)] p-2 shadow-sm",
      children: [
        /* @__PURE__ */ d.jsx(
          "input",
          {
            autoFocus: !0,
            value: i,
            onChange: (g) => f(g.target.value),
            onKeyDown: (g) => {
              g.key === "Escape" && (g.preventDefault(), y());
            },
            disabled: u,
            maxLength: 255,
            className: "app-input w-full rounded-lg px-3 py-2 text-sm",
            placeholder: "Название задачи",
            "aria-label": `Название новой задачи в колонке ${o}`
          }
        ),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ d.jsx(
            "div",
            {
              className: "flex items-center gap-1",
              role: "group",
              "aria-label": "Приоритет новой задачи",
              children: Dp.map((g) => {
                const v = g.value === r;
                return /* @__PURE__ */ d.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => h(g.value),
                    disabled: u,
                    className: `flex h-6 min-w-6 items-center overflow-hidden rounded-full transition-all duration-200 ease-out disabled:opacity-50 ${v ? `max-w-28 px-2 shadow-sm ${g.selectedClassName}` : "w-6 max-w-6 justify-center px-0 hover:bg-[var(--surface-tertiary)]"}`,
                    title: `Приоритет: ${g.label}`,
                    "aria-label": `Приоритет: ${g.label}`,
                    "aria-pressed": v,
                    children: [
                      v ? null : /* @__PURE__ */ d.jsx(
                        "span",
                        {
                          className: `h-3 w-3 shrink-0 rounded-full ${g.dotClassName}`,
                          "aria-hidden": "true"
                        }
                      ),
                      v ? /* @__PURE__ */ d.jsx("span", { className: "whitespace-nowrap text-[10px] font-semibold leading-none text-white", children: g.label }) : null
                    ]
                  },
                  g.value
                );
              })
            }
          ),
          /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ d.jsx(
              "button",
              {
                type: "button",
                onClick: y,
                disabled: u,
                className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg disabled:opacity-50",
                title: "Отмена",
                "aria-label": "Отменить создание задачи",
                children: /* @__PURE__ */ d.jsx(Ea, { size: 14 })
              }
            ),
            /* @__PURE__ */ d.jsx(
              "button",
              {
                type: "submit",
                disabled: u || !i.trim(),
                className: "app-action-primary flex h-8 w-8 items-center justify-center rounded-lg disabled:opacity-50",
                title: "Создать задачу",
                "aria-label": "Создать задачу",
                children: u ? /* @__PURE__ */ d.jsx(lc, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ d.jsx(sc, { size: 15 })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const wa = {
  draggedItem: 20,
  columnMenu: 60
};
function _p({
  tasks: i,
  onOpenTask: r,
  onEditTask: u,
  onDeleteTask: o,
  currentUserId: f,
  claimingTaskId: h,
  onClaimTask: m,
  completingTaskId: y,
  onCompleteTask: g,
  openMenuTaskId: v,
  onToggleTaskMenu: x,
  quickTaskComposer: b
}) {
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    b,
    i.length > 0 ? i.map((z) => /* @__PURE__ */ d.jsx(
      Ap,
      {
        task: z,
        onOpen: r,
        onEdit: u,
        onDelete: o,
        currentUserId: f,
        claiming: h === z.id,
        onClaim: m,
        completing: y === z.id,
        onComplete: g,
        menuOpen: v === z.id,
        onToggleTaskMenu: x
      },
      z.id
    )) : b ? null : /* @__PURE__ */ d.jsx("div", { className: "app-surface rounded-xl border border-dashed border-[var(--border-subtle)] px-3 py-5 text-center", children: /* @__PURE__ */ d.jsx("p", { className: "app-text-muted text-xs", children: "Нет задач" }) })
  ] });
}
function Xb({
  column: i,
  tasks: r,
  displayTasksCount: u,
  onCreateTask: o,
  onOpenTask: f,
  onEditTask: h,
  onDeleteTask: m,
  currentUserId: y,
  claimingTaskId: g,
  onClaimTask: v,
  completingTaskId: x,
  onCompleteTask: b,
  openMenuTaskId: z,
  onToggleTaskMenu: R,
  columnMenuOpen: Z,
  columnMenuRef: q,
  onToggleColumnMenu: A,
  onEditColumn: Q,
  onDeleteColumn: V,
  onCreateSubcolumn: G,
  onCreateRow: W,
  onColumnMount: O,
  contentVisible: _ = !0,
  onToggleContentVisibility: M,
  linkedColumnHighlight: L = !1,
  synchronizedColumnDrag: F = !1,
  fillAvailableHeight: ae = !1,
  quickTaskComposer: ie
}) {
  const {
    attributes: we,
    listeners: Ne,
    setActivatorNodeRef: ke,
    setNodeRef: ze,
    transform: H,
    transition: $,
    isDragging: te,
    isOver: se
  } = os({
    id: `column-${i.id}`,
    data: {
      type: "column",
      columnId: i.id,
      rowId: null,
      acceptsTasks: !0
    }
  }), ve = {
    transform: bn.Transform.toString(H),
    transition: $,
    zIndex: te ? wa.draggedItem : Z ? wa.columnMenu : void 0
  }, E = C.useCallback(
    (K) => {
      ze(K), O(i.id, K);
    },
    [i.id, O, ze]
  ), B = L || se && !F ? "border-[var(--accent-primary)]" : "border-[var(--border-subtle)]";
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      ref: E,
      style: ve,
      className: `flex ${_ ? "tasks-mobile-lane-viewport min-h-[28rem]" : ""} w-[18rem] min-w-[18rem] flex-col transition xl:max-h-none ${ae ? "xl:min-h-full" : ""} ${te ? "opacity-70" : ""}`,
      children: [
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: `tasks-board-column-header-sticky ${_ ? "" : "tasks-board-column-header-sticky-standalone"}`,
            children: /* @__PURE__ */ d.jsxs(
              "div",
              {
                className: `tasks-board-column-header app-surface flex min-h-16 items-center justify-between gap-3 rounded-xl px-3 py-3 transition ${B} ${te ? "shadow-xl" : ""}`,
                children: [
                  /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      ref: ke,
                      className: "min-w-0 flex-1 cursor-grab overflow-hidden active:cursor-grabbing",
                      title: "Перетащите, чтобы изменить порядок колонок",
                      ...we,
                      ...Ne,
                      children: [
                        /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ d.jsx(
                            "span",
                            {
                              className: "h-2.5 w-2.5 shrink-0 rounded-full",
                              style: { backgroundColor: i.color || "#38bdf8" }
                            }
                          ),
                          /* @__PURE__ */ d.jsx("h2", { className: "min-w-0 truncate text-sm font-semibold text-[var(--foreground)]", children: i.name })
                        ] }),
                        /* @__PURE__ */ d.jsxs("p", { className: "app-text-muted mt-0.5 text-xs", children: [
                          u ?? r.length,
                          " задач"
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ d.jsxs("div", { className: "flex shrink-0 items-center gap-1", children: [
                    /* @__PURE__ */ d.jsx(
                      "button",
                      {
                        type: "button",
                        onPointerDown: (K) => K.stopPropagation(),
                        onClick: (K) => {
                          K.stopPropagation(), M?.();
                        },
                        className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                        title: _ ? "Скрыть содержимое колонки" : "Показать содержимое колонки",
                        "aria-label": _ ? `Скрыть содержимое колонки ${i.name}` : `Показать содержимое колонки ${i.name}`,
                        "aria-pressed": !_,
                        children: _ ? /* @__PURE__ */ d.jsx(Gm, { size: 15 }) : /* @__PURE__ */ d.jsx(Zm, { size: 15 })
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "button",
                      {
                        type: "button",
                        onPointerDown: (K) => K.stopPropagation(),
                        onClick: (K) => {
                          K.stopPropagation(), o(i.id, null);
                        },
                        className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                        title: "Создать задачу",
                        "aria-label": "Создать задачу",
                        children: /* @__PURE__ */ d.jsx(Yn, { size: 16 })
                      }
                    ),
                    /* @__PURE__ */ d.jsxs(
                      "div",
                      {
                        ref: Z ? q : null,
                        className: "relative",
                        onPointerDown: (K) => K.stopPropagation(),
                        onClick: (K) => K.stopPropagation(),
                        children: [
                          /* @__PURE__ */ d.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: A,
                              className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                              title: "Действия с колонкой",
                              "aria-label": `Действия с колонкой ${i.name}`,
                              "aria-expanded": Z,
                              "aria-haspopup": "menu",
                              children: /* @__PURE__ */ d.jsx(
                                fc,
                                {
                                  size: 14,
                                  className: `transition-transform ${Z ? "" : "-rotate-90"}`
                                }
                              )
                            }
                          ),
                          Z ? /* @__PURE__ */ d.jsxs("div", { className: "app-menu absolute right-0 top-full z-30 mt-2 w-44 rounded-lg p-1.5", children: [
                            i.parent ? null : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                              /* @__PURE__ */ d.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => G(i),
                                  className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                                  children: [
                                    /* @__PURE__ */ d.jsx(Yn, { size: 14, className: "app-text-muted" }),
                                    "Добавить подколонку"
                                  ]
                                }
                              ),
                              /* @__PURE__ */ d.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => W?.(i),
                                  className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                                  children: [
                                    /* @__PURE__ */ d.jsx($m, { size: 14, className: "app-text-muted" }),
                                    "Добавить дорожку"
                                  ]
                                }
                              )
                            ] }),
                            /* @__PURE__ */ d.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => Q(i),
                                className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                                children: [
                                  /* @__PURE__ */ d.jsx(dc, { size: 14, className: "app-text-muted" }),
                                  "Редактировать"
                                ]
                              }
                            ),
                            /* @__PURE__ */ d.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => V(i),
                                className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[var(--danger-foreground)] transition hover:bg-[var(--danger-soft)]",
                                children: [
                                  /* @__PURE__ */ d.jsx(ja, { size: 14 }),
                                  "Удалить"
                                ]
                              }
                            )
                          ] }) : null
                        ]
                      }
                    )
                  ] })
                ]
              }
            )
          }
        ),
        _ ? /* @__PURE__ */ d.jsx(
          "div",
          {
            className: `tasks-mobile-lane-scroll tasks-column-scroll mt-2 min-h-0 flex-1 space-y-2 overflow-y-auto rounded-xl border bg-[var(--surface-primary)] p-3 transition xl:mt-0 xl:flex-none xl:overflow-visible ${B}`,
            children: /* @__PURE__ */ d.jsx(
              _p,
              {
                tasks: r,
                onOpenTask: f,
                onEditTask: h,
                onDeleteTask: m,
                currentUserId: y,
                claimingTaskId: g,
                onClaimTask: v,
                completingTaskId: x,
                onCompleteTask: b,
                openMenuTaskId: z,
                onToggleTaskMenu: R,
                quickTaskComposer: ie
              }
            )
          }
        ) : null
      ]
    }
  );
}
function Gb({
  column: i,
  tasksCount: r,
  sortable: u,
  onCreateTask: o,
  columnMenuOpen: f,
  columnMenuRef: h,
  onToggleColumnMenu: m,
  onEditColumn: y,
  onDeleteColumn: g,
  onColumnMount: v,
  linkedColumnHighlight: x,
  synchronizedColumnDrag: b
}) {
  const {
    attributes: z,
    listeners: R,
    setActivatorNodeRef: Z,
    setNodeRef: q,
    transform: A,
    transition: Q,
    isDragging: V,
    isOver: G
  } = os({
    id: `column-${i.id}`,
    data: {
      type: "column",
      columnId: i.id,
      acceptsTasks: !0
    },
    disabled: !u
  }), W = C.useCallback(
    (_) => {
      q(_), u && v(i.id, _);
    },
    [i.id, v, q, u]
  ), O = x || G && !b ? "border-[var(--accent-primary)]" : "border-[var(--border-subtle)]";
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      ref: W,
      style: {
        transform: u && b && A ? bn.Transform.toString({ ...A, y: 0 }) : void 0,
        transition: u && b ? Q : void 0,
        zIndex: V ? wa.draggedItem : f ? wa.columnMenu : void 0
      },
      className: `flex w-full min-w-0 flex-col transition ${V ? "opacity-70" : ""}`,
      children: /* @__PURE__ */ d.jsxs(
        "div",
        {
          className: `tasks-board-subcolumn-header flex min-h-16 items-center justify-between gap-3 rounded-xl border bg-[var(--surface-primary)] px-3 py-3 shadow-sm transition ${O} ${V ? "shadow-xl" : ""}`,
          children: [
            /* @__PURE__ */ d.jsxs(
              "div",
              {
                ref: Z,
                className: `min-w-0 flex-1 overflow-hidden ${u ? "cursor-grab active:cursor-grabbing" : ""}`,
                title: u ? "Перетащите, чтобы изменить порядок подколонок" : void 0,
                ...u ? z : {},
                ...u ? R : {},
                children: [
                  /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ d.jsx(
                      "span",
                      {
                        className: "h-2.5 w-2.5 shrink-0 rounded-full",
                        style: { backgroundColor: i.color || "#38bdf8" }
                      }
                    ),
                    /* @__PURE__ */ d.jsx("h2", { className: "min-w-0 truncate text-sm font-semibold text-[var(--foreground)]", children: i.name })
                  ] }),
                  /* @__PURE__ */ d.jsxs("p", { className: "app-text-muted mt-0.5 text-xs", children: [
                    r,
                    " задач"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ d.jsxs("div", { className: "flex shrink-0 items-center gap-1", children: [
              /* @__PURE__ */ d.jsx(
                "button",
                {
                  type: "button",
                  onPointerDown: (_) => _.stopPropagation(),
                  onClick: (_) => {
                    _.stopPropagation(), o();
                  },
                  className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                  title: "Создать задачу",
                  "aria-label": "Создать задачу",
                  children: /* @__PURE__ */ d.jsx(Yn, { size: 16 })
                }
              ),
              u ? /* @__PURE__ */ d.jsxs(
                "div",
                {
                  ref: f ? h : null,
                  className: "relative",
                  onPointerDown: (_) => _.stopPropagation(),
                  onClick: (_) => _.stopPropagation(),
                  children: [
                    /* @__PURE__ */ d.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: m,
                        className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                        title: "Действия с подколонкой",
                        "aria-label": `Действия с подколонкой ${i.name}`,
                        "aria-expanded": f,
                        "aria-haspopup": "menu",
                        children: /* @__PURE__ */ d.jsx(
                          fc,
                          {
                            size: 14,
                            className: `transition-transform ${f ? "" : "-rotate-90"}`
                          }
                        )
                      }
                    ),
                    f ? /* @__PURE__ */ d.jsxs("div", { className: "app-menu absolute right-0 top-full z-30 mt-2 w-44 rounded-lg p-1.5", children: [
                      /* @__PURE__ */ d.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => y(i),
                          className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                          children: [
                            /* @__PURE__ */ d.jsx(dc, { size: 14, className: "app-text-muted" }),
                            "Редактировать"
                          ]
                        }
                      ),
                      /* @__PURE__ */ d.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => g(i),
                          className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[var(--danger-foreground)] transition hover:bg-[var(--danger-soft)]",
                          children: [
                            /* @__PURE__ */ d.jsx(ja, { size: 14 }),
                            "Удалить"
                          ]
                        }
                      )
                    ] }) : null
                  ]
                }
              ) : null
            ] })
          ]
        }
      )
    }
  );
}
function Zb({
  column: i,
  rowId: r,
  linkedColumnHighlight: u,
  synchronizedColumnDrag: o,
  fillAvailableHeight: f,
  embeddedInMobileLane: h = !1,
  ...m
}) {
  const { setNodeRef: y, isOver: g } = Cp({
    id: `task-zone-${i.id}-row-${r ?? "base"}`,
    data: {
      type: "task-zone",
      columnId: i.id,
      rowId: r,
      acceptsTasks: !0
    }
  }), v = u || g && !o ? "border-[var(--accent-primary)]" : "border-[var(--border-subtle)]";
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      ref: y,
      className: `flex w-full min-w-0 flex-col transition ${h ? "" : `tasks-mobile-lane-viewport ${r ? "min-h-0" : "min-h-[28rem]"}`} xl:w-full ${f ? "xl:min-h-full" : ""}`,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          className: `${h ? "" : "tasks-mobile-lane-scroll overflow-y-auto xl:flex-none"} tasks-column-scroll min-h-0 flex-1 space-y-2 rounded-xl border bg-[var(--surface-primary)] p-3 transition xl:overflow-visible ${v}`,
          children: /* @__PURE__ */ d.jsx(_p, { ...m })
        }
      )
    }
  );
}
function Qb({
  column: i,
  tasksCount: r,
  children: u,
  onCreateTask: o,
  onCreateSubcolumn: f,
  onCreateRow: h,
  onEditColumn: m,
  onDeleteColumn: y,
  columnMenuOpen: g,
  menuLayerOpen: v,
  columnMenuRef: x,
  onToggleColumnMenu: b,
  onColumnMount: z,
  contentVisible: R,
  onToggleContentVisibility: Z,
  subcolumnHeaders: q,
  subcolumnGridTemplate: A
}) {
  const {
    attributes: Q,
    listeners: V,
    setActivatorNodeRef: G,
    setNodeRef: W,
    transform: O,
    transition: _,
    isDragging: M
  } = os({
    id: `column-${i.id}`,
    data: { type: "column", columnId: i.id, acceptsTasks: !1 }
  }), L = C.useCallback(
    (F) => {
      W(F), z(i.id, F);
    },
    [i.id, z, W]
  );
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      ref: L,
      style: {
        transform: bn.Transform.toString(O),
        transition: _,
        zIndex: M ? wa.draggedItem : v ? wa.columnMenu : void 0
      },
      className: `tasks-board-column-group flex min-w-max flex-col ${M ? "opacity-70" : ""}`,
      children: [
        /* @__PURE__ */ d.jsxs("div", { className: "tasks-board-group-header-sticky", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "tasks-board-column-header app-surface flex min-h-16 items-center justify-between gap-3 rounded-xl px-3 py-3", children: [
            /* @__PURE__ */ d.jsxs(
              "div",
              {
                ref: G,
                className: "min-w-0 flex-1 cursor-grab active:cursor-grabbing",
                title: "Перетащите, чтобы изменить порядок колонок",
                ...Q,
                ...V,
                children: [
                  /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ d.jsx(
                      "span",
                      {
                        className: "h-2.5 w-2.5 shrink-0 rounded-full",
                        style: { backgroundColor: i.color || "#38bdf8" }
                      }
                    ),
                    /* @__PURE__ */ d.jsx("h2", { className: "min-w-0 truncate text-sm font-semibold text-[var(--foreground)]", children: i.name })
                  ] }),
                  /* @__PURE__ */ d.jsxs("p", { className: "app-text-muted mt-0.5 text-xs", children: [
                    r,
                    " задач"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ d.jsxs("div", { className: "flex shrink-0 items-center gap-1", children: [
              /* @__PURE__ */ d.jsx(
                "button",
                {
                  type: "button",
                  onPointerDown: (F) => F.stopPropagation(),
                  onClick: (F) => {
                    F.stopPropagation(), Z();
                  },
                  className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                  title: R ? "Скрыть содержимое колонки" : "Показать содержимое колонки",
                  "aria-label": R ? `Скрыть содержимое колонки ${i.name}` : `Показать содержимое колонки ${i.name}`,
                  "aria-pressed": !R,
                  children: R ? /* @__PURE__ */ d.jsx(Gm, { size: 15 }) : /* @__PURE__ */ d.jsx(Zm, { size: 15 })
                }
              ),
              /* @__PURE__ */ d.jsx(
                "button",
                {
                  type: "button",
                  onPointerDown: (F) => F.stopPropagation(),
                  onClick: (F) => {
                    F.stopPropagation(), o();
                  },
                  className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                  title: "Создать задачу",
                  "aria-label": "Создать задачу",
                  children: /* @__PURE__ */ d.jsx(Yn, { size: 16 })
                }
              ),
              /* @__PURE__ */ d.jsxs(
                "div",
                {
                  ref: g ? x : null,
                  className: "relative",
                  onPointerDown: (F) => F.stopPropagation(),
                  onClick: (F) => F.stopPropagation(),
                  children: [
                    /* @__PURE__ */ d.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: b,
                        className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                        title: "Действия с колонкой",
                        "aria-label": `Действия с колонкой ${i.name}`,
                        "aria-expanded": g,
                        "aria-haspopup": "menu",
                        children: /* @__PURE__ */ d.jsx(
                          fc,
                          {
                            size: 14,
                            className: `transition-transform ${g ? "" : "-rotate-90"}`
                          }
                        )
                      }
                    ),
                    g ? /* @__PURE__ */ d.jsxs("div", { className: "app-menu absolute right-0 top-full z-30 mt-2 w-48 rounded-lg p-1.5", children: [
                      /* @__PURE__ */ d.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: f,
                          className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                          children: [
                            /* @__PURE__ */ d.jsx(Yn, { size: 14, className: "app-text-muted" }),
                            "Добавить подколонку"
                          ]
                        }
                      ),
                      /* @__PURE__ */ d.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: h,
                          className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                          children: [
                            /* @__PURE__ */ d.jsx($m, { size: 14, className: "app-text-muted" }),
                            "Добавить дорожку"
                          ]
                        }
                      ),
                      /* @__PURE__ */ d.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => m(i),
                          className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                          children: [
                            /* @__PURE__ */ d.jsx(dc, { size: 14, className: "app-text-muted" }),
                            "Редактировать"
                          ]
                        }
                      ),
                      /* @__PURE__ */ d.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => y(i),
                          className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[var(--danger-foreground)] transition hover:bg-[var(--danger-soft)]",
                          children: [
                            /* @__PURE__ */ d.jsx(ja, { size: 14 }),
                            "Удалить"
                          ]
                        }
                      )
                    ] }) : null
                  ]
                }
              )
            ] })
          ] }),
          R ? /* @__PURE__ */ d.jsx("div", { className: "tasks-board-subcolumn-header-surface relative mt-2 w-max min-w-full rounded-t-xl border border-b-0 border-[var(--border-subtle)] bg-[var(--surface-secondary)] p-2", children: /* @__PURE__ */ d.jsx(
            "div",
            {
              className: "tasks-board-subcolumn-header-row grid w-max min-w-0 gap-2",
              style: { gridTemplateColumns: A },
              children: q
            }
          ) }) : null
        ] }),
        R ? /* @__PURE__ */ d.jsx("div", { className: "tasks-board-column-content flex w-auto min-w-max flex-col gap-2 rounded-b-xl border border-t-0 border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-2 pb-2", children: u }) : null
      ]
    }
  );
}
function Vb({
  row: i,
  children: r,
  gridTemplateColumns: u,
  onCreateTask: o,
  onEdit: f,
  onDelete: h,
  expanded: m,
  onToggle: y,
  hasFollowingSection: g
}) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      className: `tasks-board-content-section min-w-0 ${g ? "tasks-board-content-section-continuous" : ""}`,
      children: [
        /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: `tasks-board-lane-header flex items-center justify-between gap-3 px-1 ${m ? "mb-2 xl:mb-0 xl:pb-2" : ""}`,
            children: [
              /* @__PURE__ */ d.jsxs(
                "button",
                {
                  type: "button",
                  onClick: y,
                  className: "flex min-w-0 flex-1 items-center gap-2 rounded-lg py-1 text-left",
                  "aria-expanded": m,
                  children: [
                    /* @__PURE__ */ d.jsx(
                      Xm,
                      {
                        size: 14,
                        className: `app-text-muted shrink-0 transition-transform ${m ? "rotate-90" : ""}`
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "span",
                      {
                        className: "h-2 w-2 shrink-0 rounded-full",
                        style: { backgroundColor: i.color || "#64748b" }
                      }
                    ),
                    /* @__PURE__ */ d.jsx("h3", { className: "truncate text-xs font-semibold text-[var(--foreground)]", children: i.name }),
                    /* @__PURE__ */ d.jsx("span", { className: "app-badge rounded-full px-1.5 py-0.5 text-[10px] font-semibold", children: i.tasks_count || 0 })
                  ]
                }
              ),
              /* @__PURE__ */ d.jsxs("div", { className: "flex shrink-0 items-center gap-1", children: [
                /* @__PURE__ */ d.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: o,
                    className: "app-icon-button flex h-7 w-7 items-center justify-center rounded-lg",
                    title: "Создать задачу в дорожке",
                    "aria-label": `Создать задачу в дорожке ${i.name}`,
                    children: /* @__PURE__ */ d.jsx(Yn, { size: 14 })
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: f,
                    className: "app-icon-button flex h-7 w-7 items-center justify-center rounded-lg",
                    title: "Редактировать дорожку",
                    "aria-label": `Редактировать дорожку ${i.name}`,
                    children: /* @__PURE__ */ d.jsx(dc, { size: 14 })
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: h,
                    className: "app-icon-button flex h-7 w-7 items-center justify-center rounded-lg text-[var(--danger-foreground)]",
                    title: "Удалить дорожку",
                    "aria-label": `Удалить дорожку ${i.name}`,
                    children: /* @__PURE__ */ d.jsx(ja, { size: 14 })
                  }
                )
              ] })
            ]
          }
        ),
        m ? /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "grid w-max min-w-0 gap-2",
            style: { gridTemplateColumns: u },
            children: r
          }
        ) : null
      ]
    }
  );
}
function Kb({
  collapsible: i,
  tasksCount: r,
  headers: u,
  children: o,
  gridTemplateColumns: f,
  expanded: h,
  onToggle: m,
  hasFollowingSection: y
}) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      className: `tasks-board-content-section min-w-0 ${y ? "tasks-board-content-section-continuous" : ""}`,
      children: [
        u ? /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "grid w-max min-w-0 gap-2",
            style: { gridTemplateColumns: f },
            children: u
          }
        ) : null,
        i ? /* @__PURE__ */ d.jsxs(
          "button",
          {
            type: "button",
            onClick: m,
            className: `tasks-board-lane-header flex w-full items-center gap-2 rounded-lg px-1 py-1 text-left ${u ? "mt-2" : ""} ${h ? "mb-2 xl:mb-0 xl:pb-2" : ""}`,
            "aria-expanded": h,
            children: [
              /* @__PURE__ */ d.jsx(
                Xm,
                {
                  size: 14,
                  className: `app-text-muted shrink-0 transition-transform ${h ? "rotate-90" : ""}`
                }
              ),
              /* @__PURE__ */ d.jsx("span", { className: "text-xs font-semibold text-[var(--foreground)]", children: "Без дорожки" }),
              /* @__PURE__ */ d.jsx("span", { className: "app-badge rounded-full px-1.5 py-0.5 text-[10px] font-semibold", children: r })
            ]
          }
        ) : null,
        !i || h ? /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "grid w-max min-w-0 gap-2",
            style: { gridTemplateColumns: f },
            children: o
          }
        ) : null
      ]
    }
  );
}
function Jb({
  onClick: i,
  viewportHeight: r
}) {
  const u = r > 0 ? Math.max(320, r - 12) : 448;
  return /* @__PURE__ */ d.jsxs(
    "button",
    {
      type: "button",
      onClick: i,
      style: { "--tasks-add-column-height": `${u}px` },
      className: "group flex h-16 min-h-16 min-w-[18rem] self-start items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--border-subtle)] bg-[var(--surface-muted)] px-4 text-center transition hover:border-[var(--accent-primary)] hover:bg-[var(--surface-elevated)] xl:sticky xl:top-0 xl:h-[var(--tasks-add-column-height)] xl:flex-col xl:gap-0 xl:p-4",
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "app-selected flex h-9 w-9 items-center justify-center rounded-xl transition group-hover:scale-105 xl:mb-3 xl:h-10 xl:w-10", children: /* @__PURE__ */ d.jsx(Yn, { size: 18 }) }),
        /* @__PURE__ */ d.jsx("span", { className: "text-sm font-semibold text-[var(--foreground)]", children: "Добавить колонку" })
      ]
    }
  );
}
function $b({
  board: i,
  desktopWideMode: r,
  loading: u
}) {
  const o = C.useRef(null), f = C.useRef(null), [h, m] = C.useState(0), y = C.useCallback(() => {
    const b = f.current, z = o.current;
    !b || !z || (b.frameId = null, z.scrollLeft = b.scrollLeft - (b.currentX - b.startX), z.scrollTop = b.scrollTop - (b.currentY - b.startY));
  }, []), g = C.useCallback(
    (b) => {
      if (b.button !== 1) return;
      const z = o.current;
      z && (b.preventDefault(), b.stopPropagation(), f.current = {
        pointerId: b.pointerId,
        startX: b.clientX,
        startY: b.clientY,
        currentX: b.clientX,
        currentY: b.clientY,
        scrollLeft: z.scrollLeft,
        scrollTop: z.scrollTop,
        frameId: null
      }, z.setPointerCapture(b.pointerId), z.classList.add("cursor-grabbing", "select-none"));
    },
    []
  ), v = C.useCallback(
    (b) => {
      const z = f.current;
      !z || z.pointerId !== b.pointerId || (b.preventDefault(), b.stopPropagation(), z.currentX = b.clientX, z.currentY = b.clientY, z.frameId === null && (z.frameId = window.requestAnimationFrame(y)));
    },
    [y]
  ), x = C.useCallback(
    (b) => {
      const z = f.current, R = o.current;
      !z || z.pointerId !== b.pointerId || (b.preventDefault(), b.stopPropagation(), z.currentX = b.clientX, z.currentY = b.clientY, z.frameId !== null && (window.cancelAnimationFrame(z.frameId), z.frameId = null), y(), f.current = null, R?.classList.remove("cursor-grabbing", "select-none"), R?.hasPointerCapture(b.pointerId) && R.releasePointerCapture(b.pointerId));
    },
    [y]
  );
  return C.useEffect(() => {
    const b = o.current;
    if (!b || u) return;
    let z = null;
    const R = () => {
      const W = b.querySelectorAll(
        ".tasks-mobile-lane-viewport"
      );
      if (window.matchMedia("(min-width: 80rem)").matches) {
        W.forEach(
          (Ne) => Ne.style.removeProperty("--tasks-mobile-lane-height")
        );
        return;
      }
      const O = window.visualViewport, _ = O?.offsetTop || 0, M = _ + (O?.height || window.innerHeight), F = document.querySelector(".app-header")?.getBoundingClientRect(), ie = (!!(F && F.top > _ + (M - _) / 2 && F.bottom >= M - 2) ? F?.top : M) || M, we = 12;
      W.forEach((Ne) => {
        const ke = Ne.getBoundingClientRect().top, ze = Ne.closest(".tasks-board-column-group") ? 9 : 0, $ = `${Math.max(
          160,
          Math.floor(
            ie - ke - we - ze
          )
        )}px`;
        Ne.style.getPropertyValue("--tasks-mobile-lane-height") !== $ && Ne.style.setProperty("--tasks-mobile-lane-height", $);
      });
    }, Z = () => {
      const W = b.clientHeight;
      m(
        (O) => O === W ? O : W
      );
    }, q = () => {
      z = null, Array.from(
        b.querySelectorAll(".tasks-board-column-group"),
        (O) => {
          const _ = O.querySelector(
            ".tasks-board-column-content"
          ), M = O.querySelector(
            ".tasks-board-group-header-sticky"
          ), L = _ && M ? _.getBoundingClientRect().bottom <= M.getBoundingClientRect().bottom + 1 : !1;
          return { group: O, value: L ? "true" : "false" };
        }
      ).forEach(({ group: O, value: _ }) => {
        O.dataset.contentBottomReached !== _ && (O.dataset.contentBottomReached = _);
      });
    }, A = () => {
      z === null && (z = window.requestAnimationFrame(q));
    }, Q = () => {
      R(), Z(), A();
    };
    R(), Z(), q(), b.addEventListener("scroll", A, {
      passive: !0
    }), window.addEventListener("resize", Q, { passive: !0 }), window.visualViewport?.addEventListener("resize", Q, {
      passive: !0
    }), window.visualViewport?.addEventListener("scroll", Q, {
      passive: !0
    });
    const V = new ResizeObserver(Q);
    V.observe(b), b.parentElement && V.observe(b.parentElement), b.querySelectorAll(".tasks-board-column-content").forEach((W) => {
      V.observe(W);
    });
    const G = new MutationObserver(Q);
    return G.observe(b, { childList: !0, subtree: !0 }), () => {
      b.removeEventListener("scroll", A), window.removeEventListener("resize", Q), window.visualViewport?.removeEventListener("resize", Q), window.visualViewport?.removeEventListener("scroll", Q), V.disconnect(), G.disconnect(), z !== null && window.cancelAnimationFrame(z);
    };
  }, [i, r, u]), C.useEffect(
    () => () => {
      const b = f.current;
      b?.frameId !== null && b?.frameId !== void 0 && window.cancelAnimationFrame(b.frameId), o.current?.classList.remove(
        "cursor-grabbing",
        "select-none"
      ), f.current = null;
    },
    []
  ), {
    boardScrollRef: o,
    finishBoardPan: x,
    moveBoardPan: v,
    startBoardPan: g,
    viewportHeight: h
  };
}
function tc(i, r) {
  return i.position - r.position || i.id - r.id;
}
const Fu = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3
};
function Wb(i, r) {
  const u = Fu[i.priority] ?? Fu.medium, o = Fu[r.priority] ?? Fu.medium;
  return u - o || tc(i, r);
}
function nc(i, r) {
  return `${i}:${r ?? "base"}`;
}
function Fb(i, r, u) {
  const o = (i || []).filter((x) => !x.is_archived), f = o.filter((x) => !x.parent).sort(tc), h = /* @__PURE__ */ new Map();
  for (const x of o) {
    if (!x.parent) continue;
    const b = h.get(x.parent) || [];
    b.push(x), h.set(x.parent, b);
  }
  for (const x of h.values())
    x.sort(tc);
  const m = /* @__PURE__ */ new Map();
  for (const x of r || []) {
    const b = m.get(x.column) || [];
    b.push(x), m.set(x.column, b);
  }
  for (const x of m.values())
    x.sort(tc);
  const y = f.flatMap((x) => {
    const b = h.get(x.id) || [];
    return b.length > 0 ? b : [x];
  }), g = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  for (const x of o) v.set(x.id, 0);
  for (const x of u || []) {
    const b = nc(x.column, x.row || null), z = g.get(b) || [];
    z.push(x), g.set(b, z), v.set(x.column, (v.get(x.column) || 0) + 1);
  }
  for (const x of g.values())
    x.sort(Wb);
  for (const x of f) {
    const b = h.get(x.id) || [];
    b.length !== 0 && v.set(
      x.id,
      (v.get(x.id) || 0) + b.reduce(
        (z, R) => z + (v.get(R.id) || 0),
        0
      )
    );
  }
  return {
    activeColumns: o,
    topLevelColumns: f,
    subcolumnsByParent: h,
    rowsByColumn: m,
    leafColumns: y,
    columnCounts: v,
    tasksByPlacement: g
  };
}
function Ib({
  state: i,
  query: r,
  busy: u,
  api: o,
  run: f,
  reload: h,
  open: m,
  dialog: y
}) {
  const [g, v] = C.useState(!1), [x, b] = C.useState([]), [z, R] = C.useState(null), [Z, q] = C.useState(
    null
  ), [A, Q] = C.useState(""), [V, G] = C.useState("medium"), [W, O] = C.useState(null), [_, M] = C.useState(null), L = C.useRef(null), F = C.useRef(/* @__PURE__ */ new Map()), {
    boardScrollRef: ae,
    startBoardPan: ie,
    moveBoardPan: we,
    finishBoardPan: Ne,
    viewportHeight: ke
  } = $b({
    board: i.board,
    desktopWideMode: g,
    loading: !1
  }), ze = Fb(
    i.columns,
    i.rows,
    i.tasks.filter(
      (J) => (J.title + " " + J.description).toLowerCase().includes(r.toLowerCase())
    )
  );
  C.useEffect(() => {
    try {
      b(
        JSON.parse(
          localStorage.getItem(`nb-view-${i.me.id}-${i.board.id}`) || "[]"
        )
      );
    } catch {
      b([]);
    }
    q(null);
  }, [i.board.id, i.me.id]);
  function H(J) {
    b((ce) => {
      const ye = ce.includes(J) ? ce.filter((me) => me !== J) : [...ce, J];
      return localStorage.setItem(
        `nb-view-${i.me.id}-${i.board.id}`,
        JSON.stringify(ye)
      ), ye;
    });
  }
  C.useEffect(() => {
    const J = (ce) => {
      L.current && !L.current.contains(ce.target) && R(null);
    };
    return document.addEventListener("pointerdown", J), () => document.removeEventListener("pointerdown", J);
  }, []);
  const $ = C.useCallback((J, ce) => {
    ce ? F.current.set(J, ce) : F.current.delete(J);
  }, []);
  function te(J) {
    const ce = ae.current, ye = F.current.get(J);
    ce && ye && ce.scrollTo({
      left: Math.max(
        0,
        ce.scrollLeft + ye.getBoundingClientRect().left - ce.getBoundingClientRect().left - 12
      ),
      behavior: "smooth"
    });
  }
  function se(J, ce = null) {
    q({ column: J, row: ce }), Q(""), G("medium"), R(null);
  }
  async function ve() {
    !Z || !A.trim() || await f(async () => {
      await o("tasks/", "POST", {
        board: i.board.id,
        column: Z.column,
        row: Z.row,
        title: A.trim(),
        priority: V,
        position: (i.tasks.length + 1) * 1e3
      }), Q(""), await h();
    });
  }
  function E(J, ce) {
    return Z?.column === J && Z.row === ce ? /* @__PURE__ */ d.jsx(
      Yb,
      {
        title: A,
        priority: V,
        saving: u,
        columnName: i.columns.find((ye) => ye.id === J)?.name || "",
        onTitleChange: Q,
        onPriorityChange: G,
        onSubmit: () => {
          ve();
        },
        onCancel: () => q(null)
      }
    ) : null;
  }
  async function B(J, ce) {
    await o(`tasks/${J.id}/`, "PATCH", ce), await h();
  }
  const K = {
    onOpenTask: m,
    onEditTask: m,
    onDeleteTask: (J) => y({ kind: "delete-task", data: { id: J.id } }),
    currentUserId: i.me.id,
    claimingTaskId: u ? W?.id ?? null : null,
    onClaimTask: (J) => {
      f(() => B(J, { assignee_id: i.me.id }));
    },
    completingTaskId: null,
    onCompleteTask: (J) => {
      f(async () => {
        const ce = ze.leafColumns.find((ye) => ye.is_done);
        if (!ce) throw new Error("Сначала отметьте финальную колонку.");
        await B(J, { column: ce.id, row: null });
      });
    },
    openMenuTaskId: null,
    onToggleTaskMenu: (J) => {
      const ce = i.tasks.find((ye) => ye.id === J);
      ce && m(ce);
    }
  }, I = ty(
    hm(hp, { activationConstraint: { distance: 7 } }),
    hm(mp, {
      activationConstraint: { delay: 220, tolerance: 8 }
    })
  ), oe = (J) => {
    const ce = J.active.data.current?.type === "task", ye = i.columns.find(
      (Ze) => Ze.id === J.active.data.current?.columnId
    ), me = {
      ...J,
      droppableContainers: J.droppableContainers.filter(
        (Ze) => ce ? !!Ze.data.current?.acceptsTasks : Ze.data.current?.type === "column" && i.columns.find((ne) => ne.id === Ze.data.current?.columnId)?.parent === ye?.parent
      )
    }, Ve = oy(me);
    return Ve.length ? Ve : iy(me);
  };
  function ue(J) {
    if (O(null), M(null), !J.over || u) return;
    const ce = J.active.data.current?.type;
    if (ce === "task") {
      const ye = i.tasks.find((Ve) => Ve.id === J.active.data.current?.taskId), me = J.over.data.current;
      ye && me?.acceptsTasks && f(async () => {
        await o(`tasks/${ye.id}/move/`, "POST", {
          column: me.columnId,
          row: me.rowId ?? null
        }), await h();
      });
    } else if (ce === "column" && i.can_manage) {
      const ye = i.columns.find(
        (ne) => ne.id === J.active.data.current?.columnId
      );
      if (!ye) return;
      const me = i.columns.filter((ne) => ne.parent === ye.parent).sort((ne, lt) => ne.position - lt.position || ne.id - lt.id), Ve = me.findIndex((ne) => ne.id === ye.id), Ze = me.findIndex((ne) => ne.id === J.over?.data.current?.columnId);
      if (Ze < 0 || Ve === Ze) return;
      f(async () => {
        await o(`boards/${i.board.id}/reorder-columns/`, "POST", {
          parent: ye.parent,
          ids: rs(me, Ve, Ze).map((ne) => ne.id)
        }), await h();
      });
    }
  }
  const pe = (J) => {
    R(null), y({ kind: "edit-column", data: { ...J } });
  }, Oe = (J) => {
    R(null), y({ kind: "delete-column", data: { id: J.id } });
  }, je = (J) => {
    R(null), y({ kind: "column", data: { parent: J } });
  }, ge = (J) => {
    R(null), y({ kind: "row", data: { column: J } });
  };
  return /* @__PURE__ */ d.jsxs("div", { className: `canvas-shell ${g ? "canvas-wide" : ""}`, children: [
    /* @__PURE__ */ d.jsxs("div", { className: "column-navigation", children: [
      /* @__PURE__ */ d.jsx(
        "button",
        {
          onClick: () => ae.current?.scrollTo({ left: 0, behavior: "smooth" }),
          children: "Все колонки"
        }
      ),
      ze.topLevelColumns.map((J) => /* @__PURE__ */ d.jsxs("button", { onClick: () => te(J.id), children: [
        /* @__PURE__ */ d.jsx("span", { className: "dot", style: { background: J.color } }),
        J.name
      ] }, J.id)),
      /* @__PURE__ */ d.jsx("span", { className: "grow" }),
      /* @__PURE__ */ d.jsx(
        "button",
        {
          onClick: () => v(!g),
          title: g ? "Обычный вид" : "Развернуть доску",
          children: g ? /* @__PURE__ */ d.jsx(N0, { size: 16 }) : /* @__PURE__ */ d.jsx(w0, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs(
      Py,
      {
        sensors: I,
        collisionDetection: oe,
        onDragStart: (J) => {
          J.active.data.current?.type === "task" ? O(
            i.tasks.find((ce) => ce.id === J.active.data.current?.taskId) || null
          ) : M(J.active.data.current?.columnId ?? null), R(null);
        },
        onDragCancel: () => {
          O(null), M(null);
        },
        onDragEnd: ue,
        children: [
          /* @__PURE__ */ d.jsx(
            jm,
            {
              items: ze.topLevelColumns.map((J) => `column-${J.id}`),
              strategy: zm,
              children: /* @__PURE__ */ d.jsx(
                "div",
                {
                  ref: ae,
                  onPointerDownCapture: ie,
                  onPointerMoveCapture: we,
                  onPointerUpCapture: Ne,
                  onPointerCancelCapture: Ne,
                  onLostPointerCapture: Ne,
                  onAuxClick: (J) => {
                    J.button === 1 && J.preventDefault();
                  },
                  className: "tasks-board-scroll min-w-0 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-3 xl:overflow-auto",
                  children: /* @__PURE__ */ d.jsxs("div", { className: "flex w-auto min-w-max items-stretch gap-3 xl:min-h-full", children: [
                    ze.topLevelColumns.map((J) => {
                      const ce = ze.subcolumnsByParent.get(J.id) || [], ye = ze.rowsByColumn.get(J.id) || [], me = ce.length ? ce : [J], Ve = `repeat(${me.length}, 18rem)`;
                      if (!ce.length && !ye.length)
                        return /* @__PURE__ */ d.jsx(
                          Xb,
                          {
                            ...K,
                            column: J,
                            tasks: ze.tasksByPlacement.get(
                              nc(J.id, null)
                            ) || [],
                            onCreateTask: se,
                            columnMenuOpen: z === J.id && i.can_manage,
                            columnMenuRef: L,
                            onToggleColumnMenu: () => R(z === J.id ? null : J.id),
                            onEditColumn: pe,
                            onDeleteColumn: Oe,
                            onCreateSubcolumn: (ne) => je(ne.id),
                            onCreateRow: (ne) => ge(ne.id),
                            onColumnMount: $,
                            contentVisible: !x.includes(`c${J.id}`),
                            onToggleContentVisibility: () => H(`c${J.id}`),
                            synchronizedColumnDrag: _ !== null,
                            linkedColumnHighlight: _ === J.id,
                            fillAvailableHeight: g,
                            quickTaskComposer: E(J.id, null)
                          },
                          J.id
                        );
                      const Ze = (ne, lt) => /* @__PURE__ */ d.jsx(
                        Zb,
                        {
                          ...K,
                          column: ne,
                          rowId: lt,
                          tasks: ze.tasksByPlacement.get(
                            nc(ne.id, lt)
                          ) || [],
                          linkedColumnHighlight: _ === ne.id,
                          synchronizedColumnDrag: _ !== null,
                          fillAvailableHeight: g && lt === null,
                          quickTaskComposer: /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                            E(ne.id, lt),
                            /* @__PURE__ */ d.jsx(
                              "button",
                              {
                                className: "add-card",
                                onClick: () => se(ne.id, lt),
                                children: "+ Добавить карточку"
                              }
                            )
                          ] })
                        },
                        `${ne.id}:${lt}`
                      );
                      return /* @__PURE__ */ d.jsxs(
                        Qb,
                        {
                          column: J,
                          tasksCount: ze.columnCounts.get(J.id) || 0,
                          onCreateTask: () => se(me[0].id),
                          onCreateSubcolumn: () => je(J.id),
                          onCreateRow: () => ge(J.id),
                          onEditColumn: pe,
                          onDeleteColumn: Oe,
                          columnMenuOpen: z === J.id && i.can_manage,
                          menuLayerOpen: me.some((ne) => ne.id === z) || J.id === z,
                          columnMenuRef: L,
                          onToggleColumnMenu: () => R(z === J.id ? null : J.id),
                          onColumnMount: $,
                          contentVisible: !x.includes(`c${J.id}`),
                          onToggleContentVisibility: () => H(`c${J.id}`),
                          subcolumnGridTemplate: Ve,
                          subcolumnHeaders: /* @__PURE__ */ d.jsx(
                            jm,
                            {
                              items: me.map((ne) => `column-${ne.id}`),
                              strategy: zm,
                              children: me.map((ne) => /* @__PURE__ */ d.jsx(
                                Gb,
                                {
                                  column: ne,
                                  tasksCount: ze.columnCounts.get(ne.id) || 0,
                                  sortable: !!ne.parent,
                                  onCreateTask: () => se(ne.id),
                                  columnMenuOpen: z === ne.id && !!ne.parent && i.can_manage,
                                  columnMenuRef: L,
                                  onToggleColumnMenu: () => R(z === ne.id ? null : ne.id),
                                  onEditColumn: pe,
                                  onDeleteColumn: Oe,
                                  onColumnMount: $,
                                  linkedColumnHighlight: _ === ne.id,
                                  synchronizedColumnDrag: _ !== null
                                },
                                ne.id
                              ))
                            }
                          ),
                          children: [
                            /* @__PURE__ */ d.jsx(
                              Kb,
                              {
                                collapsible: ye.length > 0,
                                tasksCount: me.reduce(
                                  (ne, lt) => ne + (ze.tasksByPlacement.get(
                                    nc(lt.id, null)
                                  )?.length || 0),
                                  0
                                ),
                                gridTemplateColumns: Ve,
                                expanded: !x.includes(`b${J.id}`),
                                onToggle: () => H(`b${J.id}`),
                                hasFollowingSection: ye.length > 0,
                                children: me.map((ne) => Ze(ne, null))
                              }
                            ),
                            ye.map((ne, lt) => /* @__PURE__ */ d.jsx(
                              Vb,
                              {
                                row: {
                                  ...ne,
                                  tasks_count: i.tasks.filter((an) => an.row === ne.id).length
                                },
                                gridTemplateColumns: Ve,
                                onCreateTask: () => se(me[0].id, ne.id),
                                onEdit: () => y({ kind: "edit-row", data: { ...ne } }),
                                onDelete: () => y({ kind: "delete-row", data: { id: ne.id } }),
                                expanded: !x.includes(`r${ne.id}`),
                                onToggle: () => H(`r${ne.id}`),
                                hasFollowingSection: lt < ye.length - 1,
                                children: me.map((an) => Ze(an, ne.id))
                              },
                              ne.id
                            ))
                          ]
                        },
                        J.id
                      );
                    }),
                    i.can_manage && /* @__PURE__ */ d.jsx(
                      Jb,
                      {
                        onClick: () => y({ kind: "column" }),
                        viewportHeight: ke
                      }
                    )
                  ] })
                }
              )
            }
          ),
          /* @__PURE__ */ d.jsx(vb, { children: W && /* @__PURE__ */ d.jsx("div", { style: { width: 280, pointerEvents: "none" }, children: /* @__PURE__ */ d.jsx(
            Ap,
            {
              task: W,
              onOpen: () => {
              },
              onEdit: () => {
              },
              onDelete: () => {
              },
              claiming: !1,
              completing: !1,
              onClaim: () => {
              },
              onComplete: () => {
              },
              menuOpen: !1,
              onToggleTaskMenu: () => {
              }
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ d.jsx("div", { className: "pan-hint", children: "Зажмите колёсико мыши, чтобы перемещаться по доске · Заголовки колонок можно перетаскивать" })
  ] });
}
const Pb = (i) => i || null, e1 = {
  sm: "h-10 w-10",
  md: "h-10 w-10",
  lg: "h-16 w-16"
};
function t1(i) {
  return Array.from(i.trim()).filter(
    (u) => /[\p{L}\p{N}]/u.test(u)
  ).slice(0, 2).join("").toUpperCase() || "Д";
}
function Io({
  name: i,
  src: r,
  size: u = "sm",
  className: o = ""
}) {
  const f = Pb(r);
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      className: `app-avatar-fallback flex shrink-0 items-center justify-center overflow-hidden rounded-full ${e1[u]} ${o}`,
      "aria-hidden": "true",
      children: f ? /* @__PURE__ */ d.jsx(
        Np,
        {
          src: f,
          alt: "",
          width: 64,
          height: 64,
          unoptimized: !0,
          className: "h-full w-full object-cover"
        }
      ) : /* @__PURE__ */ d.jsx(
        "span",
        {
          className: `${u === "lg" ? "text-lg" : "text-xs"} font-semibold`,
          children: t1(i)
        }
      )
    }
  );
}
var Po = function(i, r) {
  return Po = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, o) {
    u.__proto__ = o;
  } || function(u, o) {
    for (var f in o) Object.prototype.hasOwnProperty.call(o, f) && (u[f] = o[f]);
  }, Po(i, r);
};
function n1(i, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Po(i, r);
  function u() {
    this.constructor = i;
  }
  i.prototype = r === null ? Object.create(r) : (u.prototype = r.prototype, new u());
}
var st = function() {
  return st = Object.assign || function(r) {
    for (var u, o = 1, f = arguments.length; o < f; o++) {
      u = arguments[o];
      for (var h in u) Object.prototype.hasOwnProperty.call(u, h) && (r[h] = u[h]);
    }
    return r;
  }, st.apply(this, arguments);
};
var Go, Am;
function l1() {
  if (Am) return Go;
  Am = 1;
  var i = !1, r, u, o, f, h, m, y, g, v, x, b, z, R, Z, q;
  function A() {
    if (!i) {
      i = !0;
      var V = navigator.userAgent, G = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(V), W = /(Mac OS X)|(Windows)|(Linux)/.exec(V);
      if (z = /\b(iPhone|iP[ao]d)/.exec(V), R = /\b(iP[ao]d)/.exec(V), x = /Android/i.exec(V), Z = /FBAN\/\w+;/i.exec(V), q = /Mobile/i.exec(V), b = !!/Win64/.exec(V), G) {
        r = G[1] ? parseFloat(G[1]) : G[5] ? parseFloat(G[5]) : NaN, r && document && document.documentMode && (r = document.documentMode);
        var O = /(?:Trident\/(\d+.\d+))/.exec(V);
        m = O ? parseFloat(O[1]) + 4 : r, u = G[2] ? parseFloat(G[2]) : NaN, o = G[3] ? parseFloat(G[3]) : NaN, f = G[4] ? parseFloat(G[4]) : NaN, f ? (G = /(?:Chrome\/(\d+\.\d+))/.exec(V), h = G && G[1] ? parseFloat(G[1]) : NaN) : h = NaN;
      } else
        r = u = o = h = f = NaN;
      if (W) {
        if (W[1]) {
          var _ = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(V);
          y = _ ? parseFloat(_[1].replace("_", ".")) : !0;
        } else
          y = !1;
        g = !!W[2], v = !!W[3];
      } else
        y = g = v = !1;
    }
  }
  var Q = {
    /**
     *  Check if the UA is Internet Explorer.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    ie: function() {
      return A() || r;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return A() || m > r;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return Q.ie() && b;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return A() || u;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return A() || o;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return A() || f;
    },
    /**
     *  For Push
     *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
     */
    safari: function() {
      return Q.webkit();
    },
    /**
     *  Check if the UA is a Chrome browser.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    chrome: function() {
      return A() || h;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return A() || g;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return A() || y;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return A() || v;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return A() || z;
    },
    mobile: function() {
      return A() || z || R || x || q;
    },
    nativeApp: function() {
      return A() || Z;
    },
    android: function() {
      return A() || x;
    },
    ipad: function() {
      return A() || R;
    }
  };
  return Go = Q, Go;
}
var Zo, _m;
function a1() {
  if (_m) return Zo;
  _m = 1;
  var i = !!(typeof window < "u" && window.document && window.document.createElement), r = {
    canUseDOM: i,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: i && !!(window.addEventListener || window.attachEvent),
    canUseViewport: i && !!window.screen,
    isInWorker: !i
    // For now, this is true - might change in the future.
  };
  return Zo = r, Zo;
}
var Qo, Mm;
function i1() {
  if (Mm) return Qo;
  Mm = 1;
  var i = a1(), r;
  i.canUseDOM && (r = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature("", "") !== !0);
  function u(o, f) {
    if (!i.canUseDOM || f && !("addEventListener" in document))
      return !1;
    var h = "on" + o, m = h in document;
    if (!m) {
      var y = document.createElement("div");
      y.setAttribute(h, "return;"), m = typeof y[h] == "function";
    }
    return !m && r && o === "wheel" && (m = document.implementation.hasFeature("Events.wheel", "3.0")), m;
  }
  return Qo = u, Qo;
}
var Vo, Rm;
function u1() {
  if (Rm) return Vo;
  Rm = 1;
  var i = l1(), r = i1(), u = 10, o = 40, f = 800;
  function h(m) {
    var y = 0, g = 0, v = 0, x = 0;
    return "detail" in m && (g = m.detail), "wheelDelta" in m && (g = -m.wheelDelta / 120), "wheelDeltaY" in m && (g = -m.wheelDeltaY / 120), "wheelDeltaX" in m && (y = -m.wheelDeltaX / 120), "axis" in m && m.axis === m.HORIZONTAL_AXIS && (y = g, g = 0), v = y * u, x = g * u, "deltaY" in m && (x = m.deltaY), "deltaX" in m && (v = m.deltaX), (v || x) && m.deltaMode && (m.deltaMode == 1 ? (v *= o, x *= o) : (v *= f, x *= f)), v && !y && (y = v < 1 ? -1 : 1), x && !g && (g = x < 1 ? -1 : 1), {
      spinX: y,
      spinY: g,
      pixelX: v,
      pixelY: x
    };
  }
  return h.getEventType = function() {
    return i.firefox() ? "DOMMouseScroll" : r("wheel") ? "wheel" : "mousewheel";
  }, Vo = h, Vo;
}
var Ko, Om;
function c1() {
  return Om || (Om = 1, Ko = u1()), Ko;
}
var r1 = c1();
const o1 = /* @__PURE__ */ km(r1);
function s1(i, r, u, o, f, h) {
  h === void 0 && (h = 0);
  var m = za(i, r, h), y = m.width, g = m.height, v = Math.min(y, u), x = Math.min(g, o);
  return v > x * f ? {
    width: x * f,
    height: x
  } : {
    width: v,
    height: v / f
  };
}
function f1(i) {
  return i.width > i.height ? i.width / i.naturalWidth : i.height / i.naturalHeight;
}
function Ei(i, r, u, o, f) {
  f === void 0 && (f = 0);
  var h = za(r.width, r.height, f), m = h.width, y = h.height;
  return {
    x: Um(i.x, m, u.width, o),
    y: Um(i.y, y, u.height, o)
  };
}
function Um(i, r, u, o) {
  var f = Math.abs(r * o / 2 - u / 2);
  return yc(i, -f, f);
}
function Hm(i, r) {
  return Math.sqrt(Math.pow(i.y - r.y, 2) + Math.pow(i.x - r.x, 2));
}
function Bm(i, r) {
  return Math.atan2(r.y - i.y, r.x - i.x) * 180 / Math.PI;
}
function d1(i, r, u, o, f, h, m) {
  h === void 0 && (h = 0), m === void 0 && (m = !0);
  var y = m ? h1 : m1, g = za(r.width, r.height, h), v = za(r.naturalWidth, r.naturalHeight, h), x = {
    x: y(100, ((g.width - u.width / f) / 2 - i.x / f) / g.width * 100),
    y: y(100, ((g.height - u.height / f) / 2 - i.y / f) / g.height * 100),
    width: y(100, u.width / g.width * 100 / f),
    height: y(100, u.height / g.height * 100 / f)
  }, b = Math.round(y(v.width, x.width * v.width / 100)), z = Math.round(y(v.height, x.height * v.height / 100)), R = v.width >= v.height * o, Z = R ? {
    width: Math.round(z * o),
    height: z
  } : {
    width: b,
    height: Math.round(b / o)
  }, q = st(st({}, Z), {
    x: Math.round(y(v.width - Z.width, x.x * v.width / 100)),
    y: Math.round(y(v.height - Z.height, x.y * v.height / 100))
  });
  return {
    croppedAreaPercentages: x,
    croppedAreaPixels: q
  };
}
function h1(i, r) {
  return Math.min(i, Math.max(0, r));
}
function m1(i, r) {
  return r;
}
function p1(i, r, u, o, f, h) {
  var m = za(r.width, r.height, u), y = yc(o.width / m.width * (100 / i.width), f, h), g = {
    x: y * m.width / 2 - o.width / 2 - m.width * y * (i.x / 100),
    y: y * m.height / 2 - o.height / 2 - m.height * y * (i.y / 100)
  };
  return {
    crop: g,
    zoom: y
  };
}
function v1(i, r, u) {
  var o = f1(r);
  return u.height > u.width ? u.height / (i.height * o) : u.width / (i.width * o);
}
function g1(i, r, u, o, f, h) {
  u === void 0 && (u = 0);
  var m = za(r.naturalWidth, r.naturalHeight, u), y = yc(v1(i, r, o), f, h), g = o.height > o.width ? o.height / i.height : o.width / i.width, v = {
    x: ((m.width - i.width) / 2 - i.x) * g,
    y: ((m.height - i.height) / 2 - i.y) * g
  };
  return {
    crop: v,
    zoom: y
  };
}
function Lm(i, r) {
  return {
    x: (r.x + i.x) / 2,
    y: (r.y + i.y) / 2
  };
}
function y1(i) {
  return i * Math.PI / 180;
}
function za(i, r, u) {
  var o = y1(u);
  return {
    width: Math.abs(Math.cos(o) * i) + Math.abs(Math.sin(o) * r),
    height: Math.abs(Math.sin(o) * i) + Math.abs(Math.cos(o) * r)
  };
}
function yc(i, r, u) {
  return Math.min(Math.max(i, r), u);
}
function Iu() {
  for (var i = [], r = 0; r < arguments.length; r++)
    i[r] = arguments[r];
  return i.filter(function(u) {
    return typeof u == "string" && u.length > 0;
  }).join(" ").trim();
}
var b1 = `.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`, x1 = 1, S1 = 3, C1 = 1, E1 = (
  /** @class */
  (function(i) {
    n1(r, i);
    function r() {
      var u = i !== null && i.apply(this, arguments) || this;
      return u.cropperRef = C.createRef(), u.imageRef = C.createRef(), u.videoRef = C.createRef(), u.containerPosition = {
        x: 0,
        y: 0
      }, u.containerRef = null, u.styleRef = null, u.containerRect = null, u.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }, u.dragStartPosition = {
        x: 0,
        y: 0
      }, u.dragStartCrop = {
        x: 0,
        y: 0
      }, u.gestureZoomStart = 0, u.gestureRotationStart = 0, u.isTouching = !1, u.lastPinchDistance = 0, u.lastPinchRotation = 0, u.rafDragTimeout = null, u.rafPinchTimeout = null, u.wheelTimer = null, u.currentDoc = typeof document < "u" ? document : null, u.currentWindow = typeof window < "u" ? window : null, u.resizeObserver = null, u.previousCropSize = null, u.isInitialized = !1, u.state = {
        cropSize: null,
        hasWheelJustStarted: !1,
        mediaObjectFit: void 0
      }, u.initResizeObserver = function() {
        if (!(typeof window.ResizeObserver > "u" || !u.containerRef)) {
          var o = !0;
          u.resizeObserver = new window.ResizeObserver(function(f) {
            if (o) {
              o = !1;
              return;
            }
            u.computeSizes();
          }), u.resizeObserver.observe(u.containerRef);
        }
      }, u.preventZoomSafari = function(o) {
        return o.preventDefault();
      }, u.cleanEvents = function() {
        u.currentDoc && (u.currentDoc.removeEventListener("mousemove", u.onMouseMove), u.currentDoc.removeEventListener("mouseup", u.onDragStopped), u.currentDoc.removeEventListener("touchmove", u.onTouchMove), u.currentDoc.removeEventListener("touchend", u.onDragStopped), u.currentDoc.removeEventListener("gesturechange", u.onGestureChange), u.currentDoc.removeEventListener("gestureend", u.onGestureEnd), u.currentDoc.removeEventListener("scroll", u.onScroll));
      }, u.clearScrollEvent = function() {
        u.containerRef && u.containerRef.removeEventListener("wheel", u.onWheel), u.wheelTimer && clearTimeout(u.wheelTimer);
      }, u.onMediaLoad = function() {
        var o = u.computeSizes();
        o && (u.previousCropSize = o, u.emitCropData(), u.setInitialCrop(o), u.isInitialized = !0), u.props.onMediaLoaded && u.props.onMediaLoaded(u.mediaSize);
      }, u.setInitialCrop = function(o) {
        if (u.props.initialCroppedAreaPercentages) {
          var f = p1(u.props.initialCroppedAreaPercentages, u.mediaSize, u.props.rotation, o, u.props.minZoom, u.props.maxZoom), h = f.crop, m = f.zoom;
          u.props.onCropChange(h), u.props.onZoomChange && u.props.onZoomChange(m);
        } else if (u.props.initialCroppedAreaPixels) {
          var y = g1(u.props.initialCroppedAreaPixels, u.mediaSize, u.props.rotation, o, u.props.minZoom, u.props.maxZoom), h = y.crop, m = y.zoom;
          u.props.onCropChange(h), u.props.onZoomChange && u.props.onZoomChange(m);
        }
      }, u.computeSizes = function() {
        var o, f, h, m, y, g, v = u.imageRef.current || u.videoRef.current;
        if (v && u.containerRef) {
          u.containerRect = u.containerRef.getBoundingClientRect(), u.saveContainerPosition();
          var x = u.containerRect.width / u.containerRect.height, b = ((o = u.imageRef.current) === null || o === void 0 ? void 0 : o.naturalWidth) || ((f = u.videoRef.current) === null || f === void 0 ? void 0 : f.videoWidth) || 0, z = ((h = u.imageRef.current) === null || h === void 0 ? void 0 : h.naturalHeight) || ((m = u.videoRef.current) === null || m === void 0 ? void 0 : m.videoHeight) || 0, R = v.offsetWidth < b || v.offsetHeight < z, Z = b / z, q = void 0;
          if (R)
            switch (u.state.mediaObjectFit) {
              default:
              case "contain":
                q = x > Z ? {
                  width: u.containerRect.height * Z,
                  height: u.containerRect.height
                } : {
                  width: u.containerRect.width,
                  height: u.containerRect.width / Z
                };
                break;
              case "horizontal-cover":
                q = {
                  width: u.containerRect.width,
                  height: u.containerRect.width / Z
                };
                break;
              case "vertical-cover":
                q = {
                  width: u.containerRect.height * Z,
                  height: u.containerRect.height
                };
                break;
            }
          else
            q = {
              width: v.offsetWidth,
              height: v.offsetHeight
            };
          u.mediaSize = st(st({}, q), {
            naturalWidth: b,
            naturalHeight: z
          }), u.props.setMediaSize && u.props.setMediaSize(u.mediaSize);
          var A = u.props.cropSize ? u.props.cropSize : s1(u.mediaSize.width, u.mediaSize.height, u.containerRect.width, u.containerRect.height, u.props.aspect, u.props.rotation);
          return (((y = u.state.cropSize) === null || y === void 0 ? void 0 : y.height) !== A.height || ((g = u.state.cropSize) === null || g === void 0 ? void 0 : g.width) !== A.width) && u.props.onCropSizeChange && u.props.onCropSizeChange(A), u.setState({
            cropSize: A
          }, u.recomputeCropPosition), u.props.setCropSize && u.props.setCropSize(A), A;
        }
      }, u.saveContainerPosition = function() {
        if (u.containerRef) {
          var o = u.containerRef.getBoundingClientRect();
          u.containerPosition = {
            x: o.left,
            y: o.top
          };
        }
      }, u.onMouseDown = function(o) {
        u.currentDoc && (o.preventDefault(), u.currentDoc.addEventListener("mousemove", u.onMouseMove), u.currentDoc.addEventListener("mouseup", u.onDragStopped), u.saveContainerPosition(), u.onDragStart(r.getMousePoint(o)));
      }, u.onMouseMove = function(o) {
        return u.onDrag(r.getMousePoint(o));
      }, u.onScroll = function(o) {
        u.currentDoc && (o.preventDefault(), u.saveContainerPosition());
      }, u.onTouchStart = function(o) {
        u.currentDoc && (u.isTouching = !0, !(u.props.onTouchRequest && !u.props.onTouchRequest(o)) && (u.currentDoc.addEventListener("touchmove", u.onTouchMove, {
          passive: !1
        }), u.currentDoc.addEventListener("touchend", u.onDragStopped), u.saveContainerPosition(), o.touches.length === 2 ? u.onPinchStart(o) : o.touches.length === 1 && u.onDragStart(r.getTouchPoint(o.touches[0]))));
      }, u.onTouchMove = function(o) {
        o.preventDefault(), o.touches.length === 2 ? u.onPinchMove(o) : o.touches.length === 1 && u.onDrag(r.getTouchPoint(o.touches[0]));
      }, u.onGestureStart = function(o) {
        u.currentDoc && (o.preventDefault(), u.currentDoc.addEventListener("gesturechange", u.onGestureChange), u.currentDoc.addEventListener("gestureend", u.onGestureEnd), u.gestureZoomStart = u.props.zoom, u.gestureRotationStart = u.props.rotation);
      }, u.onGestureChange = function(o) {
        if (o.preventDefault(), !u.isTouching) {
          var f = r.getMousePoint(o), h = u.gestureZoomStart - 1 + o.scale;
          if (u.setNewZoom(h, f, {
            shouldUpdatePosition: !0
          }), u.props.onRotationChange) {
            var m = u.gestureRotationStart + o.rotation;
            u.props.onRotationChange(m);
          }
        }
      }, u.onGestureEnd = function(o) {
        u.cleanEvents();
      }, u.onDragStart = function(o) {
        var f, h, m = o.x, y = o.y;
        u.dragStartPosition = {
          x: m,
          y
        }, u.dragStartCrop = st({}, u.props.crop), (h = (f = u.props).onInteractionStart) === null || h === void 0 || h.call(f);
      }, u.onDrag = function(o) {
        var f = o.x, h = o.y;
        u.currentWindow && (u.rafDragTimeout && u.currentWindow.cancelAnimationFrame(u.rafDragTimeout), u.rafDragTimeout = u.currentWindow.requestAnimationFrame(function() {
          if (u.state.cropSize && !(f === void 0 || h === void 0)) {
            var m = f - u.dragStartPosition.x, y = h - u.dragStartPosition.y, g = {
              x: u.dragStartCrop.x + m,
              y: u.dragStartCrop.y + y
            }, v = u.props.restrictPosition ? Ei(g, u.mediaSize, u.state.cropSize, u.props.zoom, u.props.rotation) : g;
            u.props.onCropChange(v);
          }
        }));
      }, u.onDragStopped = function() {
        var o, f;
        u.isTouching = !1, u.cleanEvents(), u.emitCropData(), (f = (o = u.props).onInteractionEnd) === null || f === void 0 || f.call(o);
      }, u.onWheel = function(o) {
        if (u.currentWindow && !(u.props.onWheelRequest && !u.props.onWheelRequest(o))) {
          o.preventDefault();
          var f = r.getMousePoint(o), h = o1(o).pixelY, m = u.props.zoom - h * u.props.zoomSpeed / 200;
          u.setNewZoom(m, f, {
            shouldUpdatePosition: !0
          }), u.state.hasWheelJustStarted || u.setState({
            hasWheelJustStarted: !0
          }, function() {
            var y, g;
            return (g = (y = u.props).onInteractionStart) === null || g === void 0 ? void 0 : g.call(y);
          }), u.wheelTimer && clearTimeout(u.wheelTimer), u.wheelTimer = u.currentWindow.setTimeout(function() {
            return u.setState({
              hasWheelJustStarted: !1
            }, function() {
              var y, g;
              return (g = (y = u.props).onInteractionEnd) === null || g === void 0 ? void 0 : g.call(y);
            });
          }, 250);
        }
      }, u.getPointOnContainer = function(o, f) {
        var h = o.x, m = o.y;
        if (!u.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: u.containerRect.width / 2 - (h - f.x),
          y: u.containerRect.height / 2 - (m - f.y)
        };
      }, u.getPointOnMedia = function(o) {
        var f = o.x, h = o.y, m = u.props, y = m.crop, g = m.zoom;
        return {
          x: (f + y.x) / g,
          y: (h + y.y) / g
        };
      }, u.setNewZoom = function(o, f, h) {
        var m = h === void 0 ? {} : h, y = m.shouldUpdatePosition, g = y === void 0 ? !0 : y;
        if (!(!u.state.cropSize || !u.props.onZoomChange)) {
          var v = yc(o, u.props.minZoom, u.props.maxZoom);
          if (g) {
            var x = u.getPointOnContainer(f, u.containerPosition), b = u.getPointOnMedia(x), z = {
              x: b.x * v - x.x,
              y: b.y * v - x.y
            }, R = u.props.restrictPosition ? Ei(z, u.mediaSize, u.state.cropSize, v, u.props.rotation) : z;
            u.props.onCropChange(R);
          }
          u.props.onZoomChange(v);
        }
      }, u.getCropData = function() {
        if (!u.state.cropSize)
          return null;
        var o = u.props.restrictPosition ? Ei(u.props.crop, u.mediaSize, u.state.cropSize, u.props.zoom, u.props.rotation) : u.props.crop;
        return d1(o, u.mediaSize, u.state.cropSize, u.getAspect(), u.props.zoom, u.props.rotation, u.props.restrictPosition);
      }, u.emitCropData = function() {
        var o = u.getCropData();
        if (o) {
          var f = o.croppedAreaPercentages, h = o.croppedAreaPixels;
          u.props.onCropComplete && u.props.onCropComplete(f, h), u.props.onCropAreaChange && u.props.onCropAreaChange(f, h);
        }
      }, u.emitCropAreaChange = function() {
        var o = u.getCropData();
        if (o) {
          var f = o.croppedAreaPercentages, h = o.croppedAreaPixels;
          u.props.onCropAreaChange && u.props.onCropAreaChange(f, h);
        }
      }, u.recomputeCropPosition = function() {
        var o, f;
        if (u.state.cropSize) {
          var h = u.props.crop;
          if (u.isInitialized && (!((o = u.previousCropSize) === null || o === void 0) && o.width) && (!((f = u.previousCropSize) === null || f === void 0) && f.height)) {
            var m = Math.abs(u.previousCropSize.width - u.state.cropSize.width) > 1e-6 || Math.abs(u.previousCropSize.height - u.state.cropSize.height) > 1e-6;
            if (m) {
              var y = u.state.cropSize.width / u.previousCropSize.width, g = u.state.cropSize.height / u.previousCropSize.height;
              h = {
                x: u.props.crop.x * y,
                y: u.props.crop.y * g
              };
            }
          }
          var v = u.props.restrictPosition ? Ei(h, u.mediaSize, u.state.cropSize, u.props.zoom, u.props.rotation) : h;
          u.previousCropSize = u.state.cropSize, u.props.onCropChange(v), u.emitCropData();
        }
      }, u.onKeyDown = function(o) {
        var f, h, m = u.props, y = m.crop, g = m.onCropChange, v = m.keyboardStep, x = m.zoom, b = m.rotation, z = v;
        if (u.state.cropSize) {
          o.shiftKey && (z *= 0.2);
          var R = st({}, y);
          switch (o.key) {
            case "ArrowUp":
              R.y -= z, o.preventDefault();
              break;
            case "ArrowDown":
              R.y += z, o.preventDefault();
              break;
            case "ArrowLeft":
              R.x -= z, o.preventDefault();
              break;
            case "ArrowRight":
              R.x += z, o.preventDefault();
              break;
            default:
              return;
          }
          u.props.restrictPosition && (R = Ei(R, u.mediaSize, u.state.cropSize, x, b)), o.repeat || (h = (f = u.props).onInteractionStart) === null || h === void 0 || h.call(f), g(R);
        }
      }, u.onKeyUp = function(o) {
        var f, h;
        switch (o.key) {
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
            o.preventDefault();
            break;
          default:
            return;
        }
        u.emitCropData(), (h = (f = u.props).onInteractionEnd) === null || h === void 0 || h.call(f);
      }, u;
    }
    return r.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = b1, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, r.prototype.componentWillUnmount = function() {
      var u, o;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (u = this.resizeObserver) === null || u === void 0 || u.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((o = this.styleRef.parentNode) === null || o === void 0 || o.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, r.prototype.componentDidUpdate = function(u) {
      var o, f, h, m, y, g, v, x, b;
      u.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : u.aspect !== this.props.aspect ? this.computeSizes() : u.objectFit !== this.props.objectFit ? this.computeSizes() : u.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((o = u.cropSize) === null || o === void 0 ? void 0 : o.height) !== ((f = this.props.cropSize) === null || f === void 0 ? void 0 : f.height) || ((h = u.cropSize) === null || h === void 0 ? void 0 : h.width) !== ((m = this.props.cropSize) === null || m === void 0 ? void 0 : m.width) ? this.computeSizes() : (((y = u.crop) === null || y === void 0 ? void 0 : y.x) !== ((g = this.props.crop) === null || g === void 0 ? void 0 : g.x) || ((v = u.crop) === null || v === void 0 ? void 0 : v.y) !== ((x = this.props.crop) === null || x === void 0 ? void 0 : x.y)) && this.emitCropAreaChange(), u.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), u.video !== this.props.video && ((b = this.videoRef.current) === null || b === void 0 || b.load());
      var z = this.getObjectFit();
      z !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: z
      }, this.computeSizes);
    }, r.prototype.getAspect = function() {
      var u = this.props, o = u.cropSize, f = u.aspect;
      return o ? o.width / o.height : f;
    }, r.prototype.getObjectFit = function() {
      var u, o, f, h;
      if (this.props.objectFit === "cover") {
        var m = this.imageRef.current || this.videoRef.current;
        if (m && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var y = this.containerRect.width / this.containerRect.height, g = ((u = this.imageRef.current) === null || u === void 0 ? void 0 : u.naturalWidth) || ((o = this.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, v = ((f = this.imageRef.current) === null || f === void 0 ? void 0 : f.naturalHeight) || ((h = this.videoRef.current) === null || h === void 0 ? void 0 : h.videoHeight) || 0, x = g / v;
          return x < y ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, r.prototype.onPinchStart = function(u) {
      var o = r.getTouchPoint(u.touches[0]), f = r.getTouchPoint(u.touches[1]);
      this.lastPinchDistance = Hm(o, f), this.lastPinchRotation = Bm(o, f), this.onDragStart(Lm(o, f));
    }, r.prototype.onPinchMove = function(u) {
      var o = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var f = r.getTouchPoint(u.touches[0]), h = r.getTouchPoint(u.touches[1]), m = Lm(f, h);
        this.onDrag(m), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var y = Hm(f, h), g = o.props.zoom * (y / o.lastPinchDistance);
          o.setNewZoom(g, m, {
            shouldUpdatePosition: !1
          }), o.lastPinchDistance = y;
          var v = Bm(f, h), x = o.props.rotation + (v - o.lastPinchRotation);
          o.props.onRotationChange && o.props.onRotationChange(x), o.lastPinchRotation = v;
        });
      }
    }, r.prototype.render = function() {
      var u = this, o, f = this.props, h = f.image, m = f.video, y = f.mediaProps, g = f.cropperProps, v = f.transform, x = f.crop, b = x.x, z = x.y, R = f.rotation, Z = f.zoom, q = f.cropShape, A = f.showGrid, Q = f.roundCropAreaPixels, V = f.style, G = V.containerStyle, W = V.cropAreaStyle, O = V.mediaStyle, _ = f.classes, M = _.containerClassName, L = _.cropAreaClassName, F = _.mediaClassName, ae = (o = this.state.mediaObjectFit) !== null && o !== void 0 ? o : this.getObjectFit();
      return C.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(we) {
          return u.containerRef = we;
        },
        "data-testid": "container",
        style: G,
        className: Iu("reactEasyCrop_Container", M)
      }, h ? C.createElement("img", st({
        alt: "",
        className: Iu("reactEasyCrop_Image", ae === "contain" && "reactEasyCrop_Contain", ae === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", ae === "vertical-cover" && "reactEasyCrop_Cover_Vertical", F)
      }, y, {
        src: h,
        ref: this.imageRef,
        style: st(st({}, O), {
          transform: v || "translate(".concat(b, "px, ").concat(z, "px) rotate(").concat(R, "deg) scale(").concat(Z, ")")
        }),
        onLoad: this.onMediaLoad
      })) : m && C.createElement("video", st({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: Iu("reactEasyCrop_Video", ae === "contain" && "reactEasyCrop_Contain", ae === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", ae === "vertical-cover" && "reactEasyCrop_Cover_Vertical", F)
      }, y, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: st(st({}, O), {
          transform: v || "translate(".concat(b, "px, ").concat(z, "px) rotate(").concat(R, "deg) scale(").concat(Z, ")")
        }),
        controls: !1
      }), (Array.isArray(m) ? m : [{
        src: m
      }]).map(function(ie) {
        return C.createElement("source", st({
          key: ie.src
        }, ie));
      })), this.state.cropSize && C.createElement("div", st({
        ref: this.cropperRef,
        style: st(st({}, W), {
          width: Q ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: Q ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: Iu("reactEasyCrop_CropArea", q === "round" && "reactEasyCrop_CropAreaRound", A && "reactEasyCrop_CropAreaGrid", L)
      }, g)));
    }, r.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: S1,
      minZoom: x1,
      cropShape: "rect",
      objectFit: "contain",
      showGrid: !0,
      style: {},
      classes: {},
      mediaProps: {},
      cropperProps: {},
      zoomSpeed: 1,
      restrictPosition: !0,
      zoomWithScroll: !0,
      keyboardStep: C1
    }, r.getMousePoint = function(u) {
      return {
        x: Number(u.clientX),
        y: Number(u.clientY)
      };
    }, r.getTouchPoint = function(u) {
      return {
        x: Number(u.clientX),
        y: Number(u.clientY)
      };
    }, r;
  })(C.Component)
);
function w1({
  children: i,
  onClose: r
}) {
  return C.useEffect(() => {
    const u = (o) => {
      o.key === "Escape" && (o.stopImmediatePropagation(), r());
    };
    return document.addEventListener("keydown", u, !0), () => document.removeEventListener("keydown", u, !0);
  }, [r]), /* @__PURE__ */ d.jsx("div", { className: "modal-backdrop", style: { zIndex: 150 }, children: /* @__PURE__ */ d.jsx(
    "section",
    {
      role: "dialog",
      "aria-label": "Кадрирование аватара",
      className: "modal",
      style: { padding: 0, overflow: "hidden" },
      children: i
    }
  ) });
}
function z1({
  onCropComplete: i,
  onCancel: r,
  initialImage: u,
  mode: o = "profile",
  title: f
}) {
  const [h, m] = C.useState({ x: 0, y: 0 }), [y, g] = C.useState(1), [v, x] = C.useState(null), b = o === "profile", z = b ? { width: 240, height: 320 } : { width: 260, height: 260 }, R = C.useCallback(
    (q, A) => {
      x(A);
    },
    []
  ), Z = C.useCallback(async () => {
    if (!v) return;
    const q = new Image();
    q.src = u, await new Promise((G) => {
      q.onload = G;
    });
    const A = document.createElement("canvas"), Q = A.getContext("2d");
    if (!Q) return;
    A.width = v.width, A.height = v.height, Q.drawImage(
      q,
      v.x,
      v.y,
      v.width,
      v.height,
      0,
      0,
      v.width,
      v.height
    );
    const V = A.toDataURL("image/jpeg", 0.9);
    i(V);
  }, [v, u, i]);
  return /* @__PURE__ */ d.jsxs(
    w1,
    {
      isOpen: !0,
      onClose: r,
      noHeader: !0,
      noPadding: !0,
      size: "lg",
      stackLevel: 1,
      children: [
        /* @__PURE__ */ d.jsxs("div", { className: "app-divider border-b px-6 py-4", children: [
          /* @__PURE__ */ d.jsx("h3", { className: "text-lg font-semibold text-[var(--foreground)]", children: f || (b ? "Настройка фото профиля" : "Настройка аватара") }),
          /* @__PURE__ */ d.jsx("p", { className: "app-text-muted mt-1 text-sm", children: b ? "Разместите лицо в центре овала. Фото будет использоваться для распознавания." : "Выберите область изображения, которая будет видна в круглом аватаре." })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "app-surface-muted relative h-96", children: [
          /* @__PURE__ */ d.jsx(
            E1,
            {
              image: u,
              crop: h,
              zoom: y,
              aspect: b ? 3 / 4 : 1,
              cropSize: z,
              cropShape: b ? "rect" : "round",
              showGrid: !1,
              onCropChange: m,
              onZoomChange: g,
              onCropComplete: R,
              objectFit: "contain",
              restrictPosition: !1
            }
          ),
          b ? /* @__PURE__ */ d.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ d.jsxs(
            "svg",
            {
              width: z.width,
              height: z.height,
              viewBox: "0 0 240 320",
              children: [
                /* @__PURE__ */ d.jsx(
                  "ellipse",
                  {
                    cx: "120",
                    cy: "100",
                    rx: "84",
                    ry: "100",
                    fill: "none",
                    stroke: "#38bdf8",
                    strokeWidth: "4",
                    strokeDasharray: "8,8",
                    opacity: "0.5"
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  "path",
                  {
                    d: "M 90 180 L 85 220 L 155 220 L 150 180",
                    fill: "none",
                    stroke: "#38bdf8",
                    strokeWidth: "4",
                    strokeDasharray: "8,8",
                    opacity: "0.5"
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  "path",
                  {
                    d: "M 85 220 Q 50 240 30 280 L 30 320 M 155 220 Q 190 240 210 280 L 210 320",
                    fill: "none",
                    stroke: "#38bdf8",
                    strokeWidth: "4",
                    strokeDasharray: "8,8",
                    opacity: "0.5"
                  }
                )
              ]
            }
          ) }) : null
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "app-divider border-t px-6 py-4", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ d.jsx(
              "svg",
              {
                className: "app-text-muted h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ d.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                  }
                )
              }
            ),
            /* @__PURE__ */ d.jsx(
              "input",
              {
                type: "range",
                min: 1,
                max: 3,
                step: 0.1,
                value: y,
                onChange: (q) => g(Number(q.target.value)),
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ d.jsx(
              "svg",
              {
                className: "app-text-muted h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ d.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ d.jsx("p", { className: "app-text-muted mt-2 text-center text-xs", children: "Используйте ползунок для масштабирования" })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "app-divider border-t px-6 py-4", children: /* @__PURE__ */ d.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              onClick: r,
              className: "app-action-secondary flex-1 rounded-lg px-4 py-3 text-sm font-semibold",
              children: "Отмена"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              onClick: Z,
              className: "app-action-primary flex-1 rounded-lg px-4 py-3 text-sm font-semibold",
              children: "Применить"
            }
          )
        ] }) })
      ]
    }
  );
}
function j1({
  board: i,
  api: r,
  run: u,
  busy: o,
  saved: f,
  close: h
}) {
  const [m, y] = C.useState(i?.name || ""), [g, v] = C.useState(i?.description || ""), [x, b] = C.useState(i?.access_scope || "private"), [z, R] = C.useState((i?.members || []).join(", ")), [Z, q] = C.useState(null), [A, Q] = C.useState(null), [V, G] = C.useState(!1), [W, O] = C.useState(i?.id || null);
  async function _(M) {
    M.preventDefault(), await u(async () => {
      const L = z.trim() ? z.split(",").map((ae) => Number(ae.trim())) : [];
      if (L.some((ae) => !Number.isInteger(ae) || ae <= 0))
        throw new Error("Укажите ID участников через запятую.");
      let F = await r(
        W ? `boards/${W}/` : "boards/",
        W ? "PATCH" : "POST",
        { name: m, description: g, access_scope: x, members: L }
      );
      if (O(F.id), A) {
        const ae = await fetch(A), ie = new FormData();
        ie.append("file", await ae.blob(), "avatar.jpg"), F = await r(`boards/${F.id}/avatar/`, "POST", ie);
      } else V && i?.avatar && (F = await r(`boards/${F.id}/avatar/`, "DELETE"));
      await f(F), h();
    });
  }
  return /* @__PURE__ */ d.jsxs("div", { className: "modal-backdrop", children: [
    /* @__PURE__ */ d.jsxs(
      "section",
      {
        className: "modal",
        role: "dialog",
        "aria-label": i ? "Редактировать доску" : "Новая доска",
        children: [
          /* @__PURE__ */ d.jsxs("div", { className: "modal-header", children: [
            /* @__PURE__ */ d.jsx("h2", { children: i ? "Редактировать доску" : "Новая доска" }),
            /* @__PURE__ */ d.jsx("button", { onClick: h, "aria-label": "Закрыть", children: /* @__PURE__ */ d.jsx(Ea, { size: 20 }) })
          ] }),
          /* @__PURE__ */ d.jsxs("form", { className: "form", onSubmit: _, children: [
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx("span", { className: "app-text-muted mb-2 block text-xs font-medium", children: "Аватар доски" }),
              /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ d.jsx(
                  Io,
                  {
                    name: m || "Доска",
                    src: A || (V ? null : i?.avatar),
                    size: "lg"
                  }
                ),
                /* @__PURE__ */ d.jsxs("label", { className: "app-action-secondary inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium", children: [
                  /* @__PURE__ */ d.jsx(Qm, { size: 15 }),
                  A || i?.avatar ? "Заменить" : "Загрузить",
                  /* @__PURE__ */ d.jsx(
                    "input",
                    {
                      type: "file",
                      accept: "image/*",
                      className: "hidden",
                      onChange: (M) => {
                        const L = M.target.files?.[0];
                        if (L)
                          if (L.size > 5 * 1024 * 1024)
                            u(async () => {
                              throw new Error("Выберите изображение до 5 МБ.");
                            });
                          else {
                            const F = new FileReader();
                            F.onload = () => q(String(F.result)), F.readAsDataURL(L);
                          }
                        M.target.value = "";
                      }
                    }
                  )
                ] }),
                (A || i?.avatar) && /* @__PURE__ */ d.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "danger",
                    onClick: () => {
                      Q(null), G(!0);
                    },
                    children: [
                      /* @__PURE__ */ d.jsx(ja, { size: 15 }),
                      "Удалить"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ d.jsxs("label", { children: [
              "Название доски",
              /* @__PURE__ */ d.jsx(
                "input",
                {
                  value: m,
                  onChange: (M) => y(M.target.value),
                  required: !0,
                  maxLength: 255
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("label", { children: [
              "Описание",
              /* @__PURE__ */ d.jsx(
                "textarea",
                {
                  value: g,
                  onChange: (M) => v(M.target.value),
                  rows: 3
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx("span", { className: "app-text-muted mb-2 block text-xs font-medium", children: "Доступ" }),
              /* @__PURE__ */ d.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
                ["private", "Для себя"],
                ["restricted", "Выборочно"],
                ["all", "Для всех"]
              ].map(([M, L]) => /* @__PURE__ */ d.jsx(
                "button",
                {
                  type: "button",
                  className: x === M ? "primary" : "secondary",
                  onClick: () => b(M),
                  children: L
                },
                M
              )) })
            ] }),
            x === "restricted" && /* @__PURE__ */ d.jsxs("label", { children: [
              "ID участников Django через запятую",
              /* @__PURE__ */ d.jsx(
                "input",
                {
                  value: z,
                  onChange: (M) => R(M.target.value),
                  placeholder: "2, 3"
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { className: "flex justify-end gap-2", children: [
              /* @__PURE__ */ d.jsx("button", { type: "button", className: "secondary", onClick: h, children: "Отмена" }),
              /* @__PURE__ */ d.jsx("button", { className: "primary", disabled: o || !m.trim(), children: i ? "Сохранить" : "Создать" })
            ] })
          ] })
        ]
      }
    ),
    Z && /* @__PURE__ */ d.jsx(
      z1,
      {
        initialImage: Z,
        mode: "avatar",
        title: "Аватар доски",
        onCancel: () => q(null),
        onCropComplete: (M) => {
          Q(M), G(!1), q(null);
        }
      }
    )
  ] });
}
function N1({ apiBase: i, csrfToken: r }) {
  const [u, o] = C.useState([]), [f, h] = C.useState(null), [m, y] = C.useState(null), [g, v] = C.useState(""), [x, b] = C.useState(!1), [z, R] = C.useState(""), [Z, q] = C.useState(null), [A, Q] = C.useState(null);
  async function V(_, M = "GET", L) {
    const F = L instanceof FormData, ae = await fetch(i.replace(/\/?$/, "/") + _, {
      method: M,
      credentials: "same-origin",
      headers: {
        "X-CSRFToken": r,
        ...F ? {} : { "Content-Type": "application/json" }
      },
      body: L === void 0 ? void 0 : F ? L : JSON.stringify(L)
    });
    if (!ae.ok) {
      const ie = await ae.text();
      throw ae.status === 403 ? new Error(
        "Нет доступа. Проверьте вход в аккаунт и права на доску."
      ) : new Error(ie.slice(0, 500));
    }
    return ae.status === 204 ? void 0 : ae.json();
  }
  async function G(_ = f) {
    const M = await V("boards/");
    o(M), _ && M.some((L) => L.id === _) ? y(await V(`boards/${_}/state/`)) : (h(M[0]?.id ?? null), y(null));
  }
  async function W(_) {
    v(""), b(!0);
    try {
      await _();
    } catch (M) {
      v(M instanceof Error ? M.message : String(M));
    } finally {
      b(!1);
    }
  }
  C.useEffect(() => {
    W(() => G());
  }, []), C.useEffect(() => {
    let _ = !0;
    return f && V(`boards/${f}/state/`).then((M) => {
      _ && y(M);
    }).catch((M) => {
      _ && v(String(M));
    }), () => {
      _ = !1;
    };
  }, [f]);
  async function O(_) {
    _.preventDefault();
    const M = Object.fromEntries(new FormData(_.currentTarget)), L = A;
    await W(async () => {
      if (L.kind === "board") {
        const F = await V("boards/", "POST", {
          name: M.name,
          description: M.description,
          access_scope: "private"
        });
        h(F.id), await G(F.id);
      }
      L.kind === "column" && (await V("columns/", "POST", {
        board: f,
        name: M.name,
        color: M.color,
        parent: L.data?.parent ?? null,
        is_done: M.is_done === "on",
        position: (m?.columns.length ?? 0) * 1e3
      }), await G()), L.kind === "edit-column" && (await V(`columns/${L.data?.id}/`, "PATCH", {
        name: M.name,
        color: M.color,
        is_done: M.is_done === "on"
      }), await G()), L.kind === "edit-row" && (await V(`rows/${L.data?.id}/`, "PATCH", { name: M.name }), await G()), L.kind === "delete-row" && (await V(`rows/${L.data?.id}/`, "DELETE"), await G()), L.kind === "row" && (await V("rows/", "POST", {
        column: L.data?.column,
        name: M.name,
        color: "#e2e8f0",
        position: (m?.rows.length ?? 0) * 1e3
      }), await G()), L.kind === "label" && (await V("labels/", "POST", {
        board: f,
        name: M.name,
        color: M.color
      }), await G()), L.kind === "task" && (await V("tasks/", "POST", {
        board: f,
        column: L.data?.column,
        row: L.data?.row ?? null,
        title: M.name,
        description: M.description,
        position: (m?.tasks.length ?? 0) * 1e3
      }), await G()), L.kind === "delete-task" && (await V(`tasks/${L.data?.id}/`, "DELETE"), q(null), await G()), L.kind === "delete-column" && (await V(`columns/${L.data?.id}/`, "DELETE"), await G()), Q(null);
    });
  }
  return /* @__PURE__ */ d.jsxs("div", { className: "nb-shell", children: [
    /* @__PURE__ */ d.jsxs("aside", { className: "nb-sidebar", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "nb-brand", children: [
        /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx(Lo, { size: 23 }) }),
        /* @__PURE__ */ d.jsxs("div", { children: [
          "Nadein Board",
          /* @__PURE__ */ d.jsx("small", { children: "Рабочее пространство" })
        ] })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "sidebar-label", children: [
        "МОИ ДОСКИ",
        " ",
        /* @__PURE__ */ d.jsx(
          "button",
          {
            "aria-label": "Создать доску",
            onClick: () => Q({ kind: "board" }),
            children: /* @__PURE__ */ d.jsx(Yn, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ d.jsx("nav", { children: u.map((_) => /* @__PURE__ */ d.jsxs(
        "button",
        {
          className: _.id === f ? "active" : "",
          onClick: () => {
            y(null), h(_.id), q(null);
          },
          children: [
            /* @__PURE__ */ d.jsx(Io, { name: _.name, src: _.avatar, size: "sm" }),
            /* @__PURE__ */ d.jsx("span", { children: _.name }),
            _.id === f && /* @__PURE__ */ d.jsx(i0, { size: 15 })
          ]
        },
        _.id
      )) }),
      /* @__PURE__ */ d.jsxs("div", { className: "sidebar-bottom", children: [
        /* @__PURE__ */ d.jsx("div", { className: "avatar", children: m?.me.name.slice(0, 2).toUpperCase() || "NB" }),
        /* @__PURE__ */ d.jsxs("div", { children: [
          m?.me.name || "Мои задачи",
          /* @__PURE__ */ d.jsx("small", { children: "Личное пространство" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("main", { className: "nb-main", children: [
      /* @__PURE__ */ d.jsxs("header", { children: [
        /* @__PURE__ */ d.jsxs("div", { children: [
          /* @__PURE__ */ d.jsx("span", { className: "eyebrow", children: "РАБОЧЕЕ ПРОСТРАНСТВО / ДОСКА" }),
          /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-3", children: [
            m && /* @__PURE__ */ d.jsx(
              Io,
              {
                name: m.board.name,
                src: m.board.avatar,
                size: "lg"
              }
            ),
            /* @__PURE__ */ d.jsx("h1", { children: m?.board.name || "Ваши доски" })
          ] }),
          /* @__PURE__ */ d.jsx("p", { children: m?.board.description || "Организуйте задачи, обсуждайте детали и двигайтесь вперёд." })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "flex gap-2", children: [
          m?.can_manage && /* @__PURE__ */ d.jsx(
            "button",
            {
              className: "secondary",
              onClick: () => Q({ kind: "edit-board" }),
              children: "Настройки доски"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "button",
            {
              className: "secondary",
              onClick: () => {
                W(() => G());
              },
              disabled: x,
              children: "Обновить"
            }
          )
        ] })
      ] }),
      g && /* @__PURE__ */ d.jsxs("div", { role: "alert", className: "error", children: [
        g,
        /* @__PURE__ */ d.jsx("button", { onClick: () => v(""), "aria-label": "Закрыть ошибку", children: /* @__PURE__ */ d.jsx(Ea, { size: 16 }) })
      ] }),
      m ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsxs("div", { className: "toolbar", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "view-tab", children: [
            /* @__PURE__ */ d.jsx(Lo, { size: 17 }),
            " Доска ",
            /* @__PURE__ */ d.jsx("span", { children: m.tasks.length })
          ] }),
          /* @__PURE__ */ d.jsxs("label", { className: "search", children: [
            /* @__PURE__ */ d.jsx(O0, { size: 16 }),
            /* @__PURE__ */ d.jsx(
              "input",
              {
                placeholder: "Найти карточку…",
                value: z,
                onChange: (_) => R(_.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ d.jsx("span", { className: "grow" }),
          m.can_manage && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
            /* @__PURE__ */ d.jsx(
              "button",
              {
                className: "secondary",
                onClick: () => Q({ kind: "label" }),
                children: "Метки"
              }
            ),
            /* @__PURE__ */ d.jsxs(
              "button",
              {
                className: "primary",
                onClick: () => Q({ kind: "column" }),
                children: [
                  /* @__PURE__ */ d.jsx(Yn, { size: 16 }),
                  " Колонка"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d.jsx(
          Ib,
          {
            state: m,
            query: z,
            busy: x,
            api: V,
            run: W,
            reload: G,
            open: q,
            dialog: Q
          }
        ),
        /* @__PURE__ */ d.jsxs("footer", { children: [
          /* @__PURE__ */ d.jsxs("span", { children: [
            m.tasks.filter((_) => _.completed_at).length,
            " задач завершено"
          ] }),
          /* @__PURE__ */ d.jsx("span", { children: "Изменения сохраняются автоматически после действий" })
        ] })
      ] }) : /* @__PURE__ */ d.jsxs("div", { className: "empty", children: [
        /* @__PURE__ */ d.jsx(Lo, { size: 42 }),
        /* @__PURE__ */ d.jsx("h2", { children: f ? "Загружаем доску…" : "Место для ваших идей" }),
        !f && /* @__PURE__ */ d.jsx(
          "button",
          {
            className: "primary",
            onClick: () => Q({ kind: "board" }),
            children: "Создать первую доску"
          }
        )
      ] })
    ] }),
    A && ["board", "edit-board"].includes(A.kind) && /* @__PURE__ */ d.jsx(
      j1,
      {
        board: A.kind === "edit-board" ? m?.board : void 0,
        api: V,
        run: W,
        busy: x,
        saved: async (_) => {
          h(_.id), await G(_.id);
        },
        close: () => Q(null)
      }
    ),
    A && !["board", "edit-board"].includes(A.kind) && /* @__PURE__ */ d.jsx(
      Mp,
      {
        title: {
          board: "Новая доска",
          column: "Новая колонка",
          "edit-column": "Настройки колонки",
          row: "Новая дорожка",
          "edit-row": "Изменить дорожку",
          "delete-row": "Удалить дорожку?",
          label: "Новая метка",
          task: "Новая карточка",
          "delete-task": "Удалить карточку?",
          "delete-column": "Удалить колонку?"
        }[A.kind],
        close: () => Q(null),
        children: /* @__PURE__ */ d.jsxs("form", { onSubmit: O, className: "form", children: [
          A.kind.startsWith("delete") ? /* @__PURE__ */ d.jsx("p", { children: "Это действие нельзя отменить. Колонку с задачами удалить нельзя." }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
            /* @__PURE__ */ d.jsxs("label", { children: [
              "Название",
              /* @__PURE__ */ d.jsx(
                "input",
                {
                  name: "name",
                  required: !0,
                  maxLength: A.kind === "label" ? 80 : A.kind.includes("column") || A.kind === "row" ? 120 : 255,
                  defaultValue: String(A.data?.name || ""),
                  autoFocus: !0
                }
              )
            ] }),
            ["board", "task"].includes(A.kind) && /* @__PURE__ */ d.jsxs("label", { children: [
              "Описание",
              /* @__PURE__ */ d.jsx("textarea", { name: "description", rows: 3 })
            ] }),
            ["column", "edit-column", "label"].includes(A.kind) && /* @__PURE__ */ d.jsxs("label", { children: [
              "Цвет",
              /* @__PURE__ */ d.jsx(
                "input",
                {
                  name: "color",
                  type: "color",
                  defaultValue: String(A.data?.color || "#3b82f6")
                }
              )
            ] }),
            A.kind.includes("column") && !A.kind.startsWith("delete") && /* @__PURE__ */ d.jsxs("label", { className: "inline", children: [
              /* @__PURE__ */ d.jsx(
                "input",
                {
                  name: "is_done",
                  type: "checkbox",
                  defaultChecked: !!A.data?.is_done
                }
              ),
              " ",
              "Задачи в этой колонке завершены"
            ] })
          ] }),
          /* @__PURE__ */ d.jsx("button", { className: "primary", disabled: x, children: x ? "Сохраняем…" : A.kind.startsWith("delete") ? "Удалить" : "Сохранить" })
        ] })
      }
    ),
    Z && m && !A && /* @__PURE__ */ d.jsx(
      T1,
      {
        task: m.tasks.find((_) => _.id === Z.id) || Z,
        state: m,
        api: V,
        run: W,
        reload: G,
        busy: x,
        close: () => q(null),
        remove: () => Q({ kind: "delete-task", data: { id: Z.id } })
      },
      Z.id
    )
  ] });
}
function Mp({
  title: i,
  close: r,
  children: u
}) {
  return C.useEffect(() => {
    const o = (f) => {
      f.key === "Escape" && r();
    };
    return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [r]), /* @__PURE__ */ d.jsx(
    "div",
    {
      className: "modal-backdrop",
      onClick: (o) => {
        o.target === o.currentTarget && r();
      },
      children: /* @__PURE__ */ d.jsxs(
        "section",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": i,
          className: "modal",
          children: [
            /* @__PURE__ */ d.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ d.jsx("h2", { children: i }),
              /* @__PURE__ */ d.jsx("button", { onClick: r, "aria-label": "Закрыть", children: /* @__PURE__ */ d.jsx(Ea, { size: 20 }) })
            ] }),
            u
          ]
        }
      )
    }
  );
}
function T1({
  task: i,
  state: r,
  api: u,
  run: o,
  reload: f,
  busy: h,
  close: m,
  remove: y
}) {
  const [g, v] = C.useState([]), [x, b] = C.useState([]), [z, R] = C.useState([]), [Z, q] = C.useState(i.column), A = `tasks/${i.id}/`;
  async function Q() {
    const [O, _, M] = await Promise.all([
      u(A + "checklist/"),
      u(A + "comments/"),
      u(A + "attachments/")
    ]);
    v(O), b(_), R(M);
  }
  C.useEffect(() => {
    o(Q);
  }, []);
  const V = r.columns.find((O) => O.id === Z);
  async function G(O) {
    O.preventDefault();
    const _ = new FormData(O.currentTarget);
    o(async () => {
      await u(A, "PATCH", {
        title: _.get("title"),
        description: _.get("description"),
        column: Number(_.get("column")),
        row: _.get("row") ? Number(_.get("row")) : null,
        priority: _.get("priority"),
        due_date: _.get("due_date") || null,
        assignee_id: _.get("assignee") ? Number(_.get("assignee")) : null,
        label_ids: _.getAll("labels").map(Number)
      }), await f(), m();
    });
  }
  async function W(O, _) {
    O.preventDefault();
    const M = O.currentTarget, L = Object.fromEntries(new FormData(M));
    o(async () => {
      await u(A + _ + "/", "POST", L), M.reset(), await Q(), await f();
    });
  }
  return /* @__PURE__ */ d.jsxs(Mp, { title: `Карточка #${i.id}`, close: m, children: [
    /* @__PURE__ */ d.jsxs("form", { className: "form", onSubmit: G, children: [
      /* @__PURE__ */ d.jsxs("label", { children: [
        "Название",
        /* @__PURE__ */ d.jsx(
          "input",
          {
            name: "title",
            defaultValue: i.title,
            required: !0,
            maxLength: 255
          }
        )
      ] }),
      /* @__PURE__ */ d.jsxs("label", { children: [
        "Описание",
        /* @__PURE__ */ d.jsx(
          "textarea",
          {
            name: "description",
            defaultValue: i.description,
            rows: 4
          }
        )
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ d.jsxs("label", { children: [
          "Колонка",
          /* @__PURE__ */ d.jsx(
            "select",
            {
              name: "column",
              value: Z,
              onChange: (O) => q(Number(O.target.value)),
              children: k0(r.columns).map((O) => /* @__PURE__ */ d.jsx("option", { value: O.id, children: q0(O, r.columns) }, O.id))
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("label", { children: [
          "Дорожка",
          /* @__PURE__ */ d.jsxs(
            "select",
            {
              name: "row",
              defaultValue: Z === i.column ? i.row ?? "" : "",
              children: [
                /* @__PURE__ */ d.jsx("option", { value: "", children: "Без дорожки" }),
                r.rows.filter((O) => O.column === (V.parent || Z)).map((O) => /* @__PURE__ */ d.jsx("option", { value: O.id, children: O.name }, O.id))
              ]
            },
            Z
          )
        ] }),
        /* @__PURE__ */ d.jsxs("label", { children: [
          "Срочность",
          /* @__PURE__ */ d.jsxs("select", { name: "priority", defaultValue: i.priority, children: [
            /* @__PURE__ */ d.jsx("option", { value: "low", children: "Низкая" }),
            /* @__PURE__ */ d.jsx("option", { value: "medium", children: "Средняя" }),
            /* @__PURE__ */ d.jsx("option", { value: "high", children: "Высокая" }),
            /* @__PURE__ */ d.jsx("option", { value: "critical", children: "Критическая" })
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("label", { children: [
          "Срок",
          /* @__PURE__ */ d.jsx(
            "input",
            {
              name: "due_date",
              type: "date",
              defaultValue: i.due_date || ""
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("label", { children: [
          "Исполнитель",
          /* @__PURE__ */ d.jsxs("select", { name: "assignee", defaultValue: i.assignee?.id || "", children: [
            /* @__PURE__ */ d.jsx("option", { value: "", children: "Не назначен" }),
            r.users.map((O) => /* @__PURE__ */ d.jsx("option", { value: O.id, children: O.name }, O.id))
          ] })
        ] })
      ] }),
      r.labels.length > 0 && /* @__PURE__ */ d.jsxs("fieldset", { children: [
        /* @__PURE__ */ d.jsx("legend", { children: "Метки" }),
        /* @__PURE__ */ d.jsx("div", { className: "label-list", children: r.labels.map((O) => /* @__PURE__ */ d.jsxs("label", { className: "inline", children: [
          /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "checkbox",
              name: "labels",
              value: O.id,
              defaultChecked: i.labels.some((_) => _.id === O.id)
            }
          ),
          /* @__PURE__ */ d.jsx("span", { className: "dot", style: { background: O.color } }),
          O.name
        ] }, O.id)) })
      ] }),
      /* @__PURE__ */ d.jsx("button", { className: "primary", disabled: h, children: "Сохранить карточку" })
    ] }),
    i.cover && /* @__PURE__ */ d.jsxs("div", { className: "cover-actions", children: [
      /* @__PURE__ */ d.jsxs("span", { children: [
        "Обложка: ",
        i.cover.kind
      ] }),
      /* @__PURE__ */ d.jsx(
        "button",
        {
          onClick: () => {
            o(async () => {
              await u(A + "cover/", "DELETE"), await f();
            });
          },
          children: "Убрать обложку"
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "resource", children: [
      /* @__PURE__ */ d.jsxs("h3", { children: [
        /* @__PURE__ */ d.jsx(sc, { size: 17 }),
        " Чек-лист"
      ] }),
      g.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "cover-actions", children: /* @__PURE__ */ d.jsx(
        "button",
        {
          className: i.cover?.kind === "checklist" ? "selected" : "",
          onClick: () => {
            o(async () => {
              await u(A + "cover/", "PUT", { kind: "checklist" }), await f();
            });
          },
          children: "Сделать обложкой"
        }
      ) }),
      g.map((O) => /* @__PURE__ */ d.jsxs("div", { className: "check-row", children: [
        /* @__PURE__ */ d.jsxs("label", { className: "inline", children: [
          /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "checkbox",
              checked: O.is_completed,
              disabled: h,
              onChange: () => {
                o(async () => {
                  await u(A + "checklist/", "PATCH", {
                    id: O.id,
                    is_completed: !O.is_completed
                  }), await Q(), await f();
                });
              }
            }
          ),
          /* @__PURE__ */ d.jsx(
            "span",
            {
              style: {
                textDecoration: O.is_completed ? "line-through" : "none"
              },
              children: O.title
            }
          )
        ] }),
        /* @__PURE__ */ d.jsx(
          "button",
          {
            "aria-label": `Удалить пункт ${O.title}`,
            onClick: () => {
              o(async () => {
                await u(A + "checklist/", "DELETE", { id: O.id }), await Q(), await f();
              });
            },
            children: /* @__PURE__ */ d.jsx(Ea, { size: 14 })
          }
        )
      ] }, O.id)),
      /* @__PURE__ */ d.jsxs("form", { className: "inline", onSubmit: (O) => {
        W(O, "checklist");
      }, children: [
        /* @__PURE__ */ d.jsx(
          "input",
          {
            name: "title",
            placeholder: "Новый пункт",
            required: !0,
            maxLength: 500
          }
        ),
        /* @__PURE__ */ d.jsx("button", { className: "secondary", disabled: h, children: "Добавить" })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "resource", children: [
      /* @__PURE__ */ d.jsxs("h3", { children: [
        /* @__PURE__ */ d.jsx(Km, { size: 17 }),
        " Вложения"
      ] }),
      z.map((O) => /* @__PURE__ */ d.jsxs("p", { children: [
        /* @__PURE__ */ d.jsx("a", { href: O.url, children: O.name }),
        " ",
        /* @__PURE__ */ d.jsx(
          "button",
          {
            className: "secondary",
            onClick: () => {
              o(async () => {
                await u(A + "cover/", "PUT", {
                  kind: "attachment",
                  id: O.id
                }), await f();
              });
            },
            children: "На обложку"
          }
        ),
        " ",
        /* @__PURE__ */ d.jsxs("small", { children: [
          "(",
          Math.ceil(O.size / 1024),
          " КБ)"
        ] }),
        /* @__PURE__ */ d.jsx(
          "button",
          {
            "aria-label": `Удалить файл ${O.name}`,
            onClick: () => {
              o(async () => {
                await u(A + "attachments/", "DELETE", { id: O.id }), await Q(), await f();
              });
            },
            children: /* @__PURE__ */ d.jsx(Ea, { size: 14 })
          }
        )
      ] }, O.id)),
      /* @__PURE__ */ d.jsxs("label", { className: "upload", children: [
        "Прикрепить файл (до 10 МБ)",
        /* @__PURE__ */ d.jsx(
          "input",
          {
            type: "file",
            disabled: h,
            onChange: (O) => {
              const _ = O.target.files?.[0];
              if (_) {
                const M = new FormData();
                M.append("file", _), o(async () => {
                  await u(A + "attachments/", "POST", M), await Q(), await f();
                });
              }
              O.target.value = "";
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "resource", children: [
      /* @__PURE__ */ d.jsxs("h3", { children: [
        /* @__PURE__ */ d.jsx(ts, { size: 17 }),
        " Обсуждение"
      ] }),
      x.map((O) => /* @__PURE__ */ d.jsxs("div", { className: "comment", children: [
        /* @__PURE__ */ d.jsx("strong", { children: O.author.name }),
        /* @__PURE__ */ d.jsx("small", { children: new Date(O.created_at).toLocaleString("ru-RU") }),
        /* @__PURE__ */ d.jsx("p", { children: O.text }),
        /* @__PURE__ */ d.jsx(
          "button",
          {
            className: "secondary",
            onClick: () => {
              o(async () => {
                await u(A + "cover/", "PUT", {
                  kind: "comment",
                  id: O.id
                }), await f();
              });
            },
            children: "На обложку"
          }
        ),
        (O.author.id === r.me.id || r.can_manage) && /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => {
              o(async () => {
                await u(A + "comments/", "DELETE", { id: O.id }), await Q(), await f();
              });
            },
            children: "Удалить"
          }
        )
      ] }, O.id)),
      /* @__PURE__ */ d.jsxs("form", { className: "form", onSubmit: (O) => {
        W(O, "comments");
      }, children: [
        /* @__PURE__ */ d.jsx(
          "textarea",
          {
            name: "text",
            placeholder: "Напишите комментарий…",
            required: !0,
            maxLength: 1e4
          }
        ),
        /* @__PURE__ */ d.jsx("button", { className: "secondary", disabled: h, children: "Отправить комментарий" })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("button", { className: "danger", onClick: y, children: [
      /* @__PURE__ */ d.jsx(ja, { size: 16 }),
      " Удалить карточку"
    ] })
  ] });
}
function D1(i, r) {
  const u = Ig.createRoot(i);
  return u.render(/* @__PURE__ */ d.jsx(N1, { ...r })), () => u.unmount();
}
const Pu = document.getElementById("nadein-board");
Pu && D1(Pu, {
  apiBase: Pu.dataset.apiBase || "/board/api/",
  csrfToken: Pu.dataset.csrfToken || ""
});
export {
  N1 as NadeinBoard,
  D1 as mountBoard
};
