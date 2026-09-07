function op(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Xc = { exports: {} }, Ti = {};
var xm;
function yy() {
  if (xm) return Ti;
  xm = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(o, f, h) {
    var p = null;
    if (h !== void 0 && (p = "" + h), f.key !== void 0 && (p = "" + f.key), "key" in f) {
      h = {};
      for (var y in f)
        y !== "key" && (h[y] = f[y]);
    } else h = f;
    return f = h.ref, {
      $$typeof: l,
      type: o,
      key: p,
      ref: f !== void 0 ? f : null,
      props: h
    };
  }
  return Ti.Fragment = c, Ti.jsx = s, Ti.jsxs = s, Ti;
}
var bm;
function xy() {
  return bm || (bm = 1, Xc.exports = yy()), Xc.exports;
}
var u = xy(), Gc = { exports: {} }, _e = {};
var jm;
function by() {
  if (jm) return _e;
  jm = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), x = /* @__PURE__ */ Symbol.for("react.activity"), w = Symbol.iterator;
  function D(N) {
    return N === null || typeof N != "object" ? null : (N = w && N[w] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var V = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, X = Object.assign, G = {};
  function H(N, q, ee) {
    this.props = N, this.context = q, this.refs = G, this.updater = ee || V;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(N, q) {
    if (typeof N != "object" && typeof N != "function" && N != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, N, q, "setState");
  }, H.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function B() {
  }
  B.prototype = H.prototype;
  function Z(N, q, ee) {
    this.props = N, this.context = q, this.refs = G, this.updater = ee || V;
  }
  var ne = Z.prototype = new B();
  ne.constructor = Z, X(ne, H.prototype), ne.isPureReactComponent = !0;
  var le = Array.isArray;
  function F() {
  }
  var P = { H: null, A: null, T: null, S: null }, O = Object.prototype.hasOwnProperty;
  function I(N, q, ee) {
    var ie = ee.ref;
    return {
      $$typeof: l,
      type: N,
      key: q,
      ref: ie !== void 0 ? ie : null,
      props: ee
    };
  }
  function oe(N, q) {
    return I(N.type, q, N.props);
  }
  function ae(N) {
    return typeof N == "object" && N !== null && N.$$typeof === l;
  }
  function ue(N) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(ee) {
      return q[ee];
    });
  }
  var de = /\/+/g;
  function xe(N, q) {
    return typeof N == "object" && N !== null && N.key != null ? ue("" + N.key) : q.toString(36);
  }
  function Me(N) {
    switch (N.status) {
      case "fulfilled":
        return N.value;
      case "rejected":
        throw N.reason;
      default:
        switch (typeof N.status == "string" ? N.then(F, F) : (N.status = "pending", N.then(
          function(q) {
            N.status === "pending" && (N.status = "fulfilled", N.value = q);
          },
          function(q) {
            N.status === "pending" && (N.status = "rejected", N.reason = q);
          }
        )), N.status) {
          case "fulfilled":
            return N.value;
          case "rejected":
            throw N.reason;
        }
    }
    throw N;
  }
  function k(N, q, ee, ie, ve) {
    var E = typeof N;
    (E === "undefined" || E === "boolean") && (N = null);
    var te = !1;
    if (N === null) te = !0;
    else
      switch (E) {
        case "bigint":
        case "string":
        case "number":
          te = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case l:
            case c:
              te = !0;
              break;
            case S:
              return te = N._init, k(
                te(N._payload),
                q,
                ee,
                ie,
                ve
              );
          }
      }
    if (te)
      return ve = ve(N), te = ie === "" ? "." + xe(N, 0) : ie, le(ve) ? (ee = "", te != null && (ee = te.replace(de, "$&/") + "/"), k(ve, q, ee, "", function(L) {
        return L;
      })) : ve != null && (ae(ve) && (ve = oe(
        ve,
        ee + (ve.key == null || N && N.key === ve.key ? "" : ("" + ve.key).replace(
          de,
          "$&/"
        ) + "/") + te
      )), q.push(ve)), 1;
    te = 0;
    var j = ie === "" ? "." : ie + ":";
    if (le(N))
      for (var A = 0; A < N.length; A++)
        ie = N[A], E = j + xe(ie, A), te += k(
          ie,
          q,
          ee,
          E,
          ve
        );
    else if (A = D(N), typeof A == "function")
      for (N = A.call(N), A = 0; !(ie = N.next()).done; )
        ie = ie.value, E = j + xe(ie, A++), te += k(
          ie,
          q,
          ee,
          E,
          ve
        );
    else if (E === "object") {
      if (typeof N.then == "function")
        return k(
          Me(N),
          q,
          ee,
          ie,
          ve
        );
      throw q = String(N), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return te;
  }
  function J(N, q, ee) {
    if (N == null) return N;
    var ie = [], ve = 0;
    return k(N, ie, "", "", function(E) {
      return q.call(ee, E, ve++);
    }), ie;
  }
  function se(N) {
    if (N._status === -1) {
      var q = N._result;
      q = q(), q.then(
        function(ee) {
          (N._status === 0 || N._status === -1) && (N._status = 1, N._result = ee);
        },
        function(ee) {
          (N._status === 0 || N._status === -1) && (N._status = 2, N._result = ee);
        }
      ), N._status === -1 && (N._status = 0, N._result = q);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var pe = typeof reportError == "function" ? reportError : function(N) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof N == "object" && N !== null && typeof N.message == "string" ? String(N.message) : String(N),
        error: N
      });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", N);
      return;
    }
    console.error(N);
  }, ge = {
    map: J,
    forEach: function(N, q, ee) {
      J(
        N,
        function() {
          q.apply(this, arguments);
        },
        ee
      );
    },
    count: function(N) {
      var q = 0;
      return J(N, function() {
        q++;
      }), q;
    },
    toArray: function(N) {
      return J(N, function(q) {
        return q;
      }) || [];
    },
    only: function(N) {
      if (!ae(N))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return N;
    }
  };
  return _e.Activity = x, _e.Children = ge, _e.Component = H, _e.Fragment = s, _e.Profiler = f, _e.PureComponent = Z, _e.StrictMode = o, _e.Suspense = m, _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, _e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(N) {
      return P.H.useMemoCache(N);
    }
  }, _e.cache = function(N) {
    return function() {
      return N.apply(null, arguments);
    };
  }, _e.cacheSignal = function() {
    return null;
  }, _e.cloneElement = function(N, q, ee) {
    if (N == null)
      throw Error(
        "The argument must be a React element, but you passed " + N + "."
      );
    var ie = X({}, N.props), ve = N.key;
    if (q != null)
      for (E in q.key !== void 0 && (ve = "" + q.key), q)
        !O.call(q, E) || E === "key" || E === "__self" || E === "__source" || E === "ref" && q.ref === void 0 || (ie[E] = q[E]);
    var E = arguments.length - 2;
    if (E === 1) ie.children = ee;
    else if (1 < E) {
      for (var te = Array(E), j = 0; j < E; j++)
        te[j] = arguments[j + 2];
      ie.children = te;
    }
    return I(N.type, ve, ie);
  }, _e.createContext = function(N) {
    return N = {
      $$typeof: p,
      _currentValue: N,
      _currentValue2: N,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, N.Provider = N, N.Consumer = {
      $$typeof: h,
      _context: N
    }, N;
  }, _e.createElement = function(N, q, ee) {
    var ie, ve = {}, E = null;
    if (q != null)
      for (ie in q.key !== void 0 && (E = "" + q.key), q)
        O.call(q, ie) && ie !== "key" && ie !== "__self" && ie !== "__source" && (ve[ie] = q[ie]);
    var te = arguments.length - 2;
    if (te === 1) ve.children = ee;
    else if (1 < te) {
      for (var j = Array(te), A = 0; A < te; A++)
        j[A] = arguments[A + 2];
      ve.children = j;
    }
    if (N && N.defaultProps)
      for (ie in te = N.defaultProps, te)
        ve[ie] === void 0 && (ve[ie] = te[ie]);
    return I(N, E, ve);
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(N) {
    return { $$typeof: y, render: N };
  }, _e.isValidElement = ae, _e.lazy = function(N) {
    return {
      $$typeof: S,
      _payload: { _status: -1, _result: N },
      _init: se
    };
  }, _e.memo = function(N, q) {
    return {
      $$typeof: v,
      type: N,
      compare: q === void 0 ? null : q
    };
  }, _e.startTransition = function(N) {
    var q = P.T, ee = {};
    P.T = ee;
    try {
      var ie = N(), ve = P.S;
      ve !== null && ve(ee, ie), typeof ie == "object" && ie !== null && typeof ie.then == "function" && ie.then(F, pe);
    } catch (E) {
      pe(E);
    } finally {
      q !== null && ee.types !== null && (q.types = ee.types), P.T = q;
    }
  }, _e.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, _e.use = function(N) {
    return P.H.use(N);
  }, _e.useActionState = function(N, q, ee) {
    return P.H.useActionState(N, q, ee);
  }, _e.useCallback = function(N, q) {
    return P.H.useCallback(N, q);
  }, _e.useContext = function(N) {
    return P.H.useContext(N);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(N, q) {
    return P.H.useDeferredValue(N, q);
  }, _e.useEffect = function(N, q) {
    return P.H.useEffect(N, q);
  }, _e.useEffectEvent = function(N) {
    return P.H.useEffectEvent(N);
  }, _e.useId = function() {
    return P.H.useId();
  }, _e.useImperativeHandle = function(N, q, ee) {
    return P.H.useImperativeHandle(N, q, ee);
  }, _e.useInsertionEffect = function(N, q) {
    return P.H.useInsertionEffect(N, q);
  }, _e.useLayoutEffect = function(N, q) {
    return P.H.useLayoutEffect(N, q);
  }, _e.useMemo = function(N, q) {
    return P.H.useMemo(N, q);
  }, _e.useOptimistic = function(N, q) {
    return P.H.useOptimistic(N, q);
  }, _e.useReducer = function(N, q, ee) {
    return P.H.useReducer(N, q, ee);
  }, _e.useRef = function(N) {
    return P.H.useRef(N);
  }, _e.useState = function(N) {
    return P.H.useState(N);
  }, _e.useSyncExternalStore = function(N, q, ee) {
    return P.H.useSyncExternalStore(
      N,
      q,
      ee
    );
  }, _e.useTransition = function() {
    return P.H.useTransition();
  }, _e.version = "19.2.8", _e;
}
var Sm;
function mo() {
  return Sm || (Sm = 1, Gc.exports = by()), Gc.exports;
}
var b = mo();
const tt = /* @__PURE__ */ op(b);
var Zc = { exports: {} }, Di = {}, Qc = { exports: {} }, Vc = {};
var Cm;
function jy() {
  return Cm || (Cm = 1, (function(l) {
    function c(k, J) {
      var se = k.length;
      k.push(J);
      e: for (; 0 < se; ) {
        var pe = se - 1 >>> 1, ge = k[pe];
        if (0 < f(ge, J))
          k[pe] = J, k[se] = ge, se = pe;
        else break e;
      }
    }
    function s(k) {
      return k.length === 0 ? null : k[0];
    }
    function o(k) {
      if (k.length === 0) return null;
      var J = k[0], se = k.pop();
      if (se !== J) {
        k[0] = se;
        e: for (var pe = 0, ge = k.length, N = ge >>> 1; pe < N; ) {
          var q = 2 * (pe + 1) - 1, ee = k[q], ie = q + 1, ve = k[ie];
          if (0 > f(ee, se))
            ie < ge && 0 > f(ve, ee) ? (k[pe] = ve, k[ie] = se, pe = ie) : (k[pe] = ee, k[q] = se, pe = q);
          else if (ie < ge && 0 > f(ve, se))
            k[pe] = ve, k[ie] = se, pe = ie;
          else break e;
        }
      }
      return J;
    }
    function f(k, J) {
      var se = k.sortIndex - J.sortIndex;
      return se !== 0 ? se : k.id - J.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      l.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, y = p.now();
      l.unstable_now = function() {
        return p.now() - y;
      };
    }
    var m = [], v = [], S = 1, x = null, w = 3, D = !1, V = !1, X = !1, G = !1, H = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
    function ne(k) {
      for (var J = s(v); J !== null; ) {
        if (J.callback === null) o(v);
        else if (J.startTime <= k)
          o(v), J.sortIndex = J.expirationTime, c(m, J);
        else break;
        J = s(v);
      }
    }
    function le(k) {
      if (X = !1, ne(k), !V)
        if (s(m) !== null)
          V = !0, F || (F = !0, ue());
        else {
          var J = s(v);
          J !== null && Me(le, J.startTime - k);
        }
    }
    var F = !1, P = -1, O = 5, I = -1;
    function oe() {
      return G ? !0 : !(l.unstable_now() - I < O);
    }
    function ae() {
      if (G = !1, F) {
        var k = l.unstable_now();
        I = k;
        var J = !0;
        try {
          e: {
            V = !1, X && (X = !1, B(P), P = -1), D = !0;
            var se = w;
            try {
              t: {
                for (ne(k), x = s(m); x !== null && !(x.expirationTime > k && oe()); ) {
                  var pe = x.callback;
                  if (typeof pe == "function") {
                    x.callback = null, w = x.priorityLevel;
                    var ge = pe(
                      x.expirationTime <= k
                    );
                    if (k = l.unstable_now(), typeof ge == "function") {
                      x.callback = ge, ne(k), J = !0;
                      break t;
                    }
                    x === s(m) && o(m), ne(k);
                  } else o(m);
                  x = s(m);
                }
                if (x !== null) J = !0;
                else {
                  var N = s(v);
                  N !== null && Me(
                    le,
                    N.startTime - k
                  ), J = !1;
                }
              }
              break e;
            } finally {
              x = null, w = se, D = !1;
            }
            J = void 0;
          }
        } finally {
          J ? ue() : F = !1;
        }
      }
    }
    var ue;
    if (typeof Z == "function")
      ue = function() {
        Z(ae);
      };
    else if (typeof MessageChannel < "u") {
      var de = new MessageChannel(), xe = de.port2;
      de.port1.onmessage = ae, ue = function() {
        xe.postMessage(null);
      };
    } else
      ue = function() {
        H(ae, 0);
      };
    function Me(k, J) {
      P = H(function() {
        k(l.unstable_now());
      }, J);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, l.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : O = 0 < k ? Math.floor(1e3 / k) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, l.unstable_next = function(k) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = w;
      }
      var se = w;
      w = J;
      try {
        return k();
      } finally {
        w = se;
      }
    }, l.unstable_requestPaint = function() {
      G = !0;
    }, l.unstable_runWithPriority = function(k, J) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var se = w;
      w = k;
      try {
        return J();
      } finally {
        w = se;
      }
    }, l.unstable_scheduleCallback = function(k, J, se) {
      var pe = l.unstable_now();
      switch (typeof se == "object" && se !== null ? (se = se.delay, se = typeof se == "number" && 0 < se ? pe + se : pe) : se = pe, k) {
        case 1:
          var ge = -1;
          break;
        case 2:
          ge = 250;
          break;
        case 5:
          ge = 1073741823;
          break;
        case 4:
          ge = 1e4;
          break;
        default:
          ge = 5e3;
      }
      return ge = se + ge, k = {
        id: S++,
        callback: J,
        priorityLevel: k,
        startTime: se,
        expirationTime: ge,
        sortIndex: -1
      }, se > pe ? (k.sortIndex = se, c(v, k), s(m) === null && k === s(v) && (X ? (B(P), P = -1) : X = !0, Me(le, se - pe))) : (k.sortIndex = ge, c(m, k), V || D || (V = !0, F || (F = !0, ue()))), k;
    }, l.unstable_shouldYield = oe, l.unstable_wrapCallback = function(k) {
      var J = w;
      return function() {
        var se = w;
        w = J;
        try {
          return k.apply(this, arguments);
        } finally {
          w = se;
        }
      };
    };
  })(Vc)), Vc;
}
var Nm;
function Sy() {
  return Nm || (Nm = 1, Qc.exports = jy()), Qc.exports;
}
var Kc = { exports: {} }, Tt = {};
var wm;
function Cy() {
  if (wm) return Tt;
  wm = 1;
  var l = mo();
  function c(m) {
    var v = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        v += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + m + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var o = {
    d: {
      f: s,
      r: function() {
        throw Error(c(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, f = /* @__PURE__ */ Symbol.for("react.portal");
  function h(m, v, S) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: x == null ? null : "" + x,
      children: m,
      containerInfo: v,
      implementation: S
    };
  }
  var p = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(m, v) {
    if (m === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Tt.createPortal = function(m, v) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(c(299));
    return h(m, v, null, S);
  }, Tt.flushSync = function(m) {
    var v = p.T, S = o.p;
    try {
      if (p.T = null, o.p = 2, m) return m();
    } finally {
      p.T = v, o.p = S, o.d.f();
    }
  }, Tt.preconnect = function(m, v) {
    typeof m == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, o.d.C(m, v));
  }, Tt.prefetchDNS = function(m) {
    typeof m == "string" && o.d.D(m);
  }, Tt.preinit = function(m, v) {
    if (typeof m == "string" && v && typeof v.as == "string") {
      var S = v.as, x = y(S, v.crossOrigin), w = typeof v.integrity == "string" ? v.integrity : void 0, D = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      S === "style" ? o.d.S(
        m,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: x,
          integrity: w,
          fetchPriority: D
        }
      ) : S === "script" && o.d.X(m, {
        crossOrigin: x,
        integrity: w,
        fetchPriority: D,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, Tt.preinitModule = function(m, v) {
    if (typeof m == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var S = y(
            v.as,
            v.crossOrigin
          );
          o.d.M(m, {
            crossOrigin: S,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && o.d.M(m);
  }, Tt.preload = function(m, v) {
    if (typeof m == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var S = v.as, x = y(S, v.crossOrigin);
      o.d.L(m, S, {
        crossOrigin: x,
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
  }, Tt.preloadModule = function(m, v) {
    if (typeof m == "string")
      if (v) {
        var S = y(v.as, v.crossOrigin);
        o.d.m(m, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: S,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else o.d.m(m);
  }, Tt.requestFormReset = function(m) {
    o.d.r(m);
  }, Tt.unstable_batchedUpdates = function(m, v) {
    return m(v);
  }, Tt.useFormState = function(m, v, S) {
    return p.H.useFormState(m, v, S);
  }, Tt.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, Tt.version = "19.2.8", Tt;
}
var _m;
function dp() {
  if (_m) return Kc.exports;
  _m = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (c) {
        console.error(c);
      }
  }
  return l(), Kc.exports = Cy(), Kc.exports;
}
var Em;
function Ny() {
  if (Em) return Di;
  Em = 1;
  var l = Sy(), c = mo(), s = dp();
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
  function p(e) {
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
  function m(e) {
    if (h(e) !== e)
      throw Error(o(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var r = i.alternate;
      if (r === null) {
        if (a = i.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (i.child === r.child) {
        for (r = i.child; r; ) {
          if (r === n) return m(i), e;
          if (r === a) return m(i), t;
          r = r.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== a.return) n = i, a = r;
      else {
        for (var d = !1, g = i.child; g; ) {
          if (g === n) {
            d = !0, n = i, a = r;
            break;
          }
          if (g === a) {
            d = !0, a = i, n = r;
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = r.child; g; ) {
            if (g === n) {
              d = !0, n = r, a = i;
              break;
            }
            if (g === a) {
              d = !0, a = r, n = i;
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(o(189));
        }
      }
      if (n.alternate !== a) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function S(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = S(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var x = Object.assign, w = /* @__PURE__ */ Symbol.for("react.element"), D = /* @__PURE__ */ Symbol.for("react.transitional.element"), V = /* @__PURE__ */ Symbol.for("react.portal"), X = /* @__PURE__ */ Symbol.for("react.fragment"), G = /* @__PURE__ */ Symbol.for("react.strict_mode"), H = /* @__PURE__ */ Symbol.for("react.profiler"), B = /* @__PURE__ */ Symbol.for("react.consumer"), Z = /* @__PURE__ */ Symbol.for("react.context"), ne = /* @__PURE__ */ Symbol.for("react.forward_ref"), le = /* @__PURE__ */ Symbol.for("react.suspense"), F = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), I = /* @__PURE__ */ Symbol.for("react.activity"), oe = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ae = Symbol.iterator;
  function ue(e) {
    return e === null || typeof e != "object" ? null : (e = ae && e[ae] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var de = /* @__PURE__ */ Symbol.for("react.client.reference");
  function xe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === de ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case X:
        return "Fragment";
      case H:
        return "Profiler";
      case G:
        return "StrictMode";
      case le:
        return "Suspense";
      case F:
        return "SuspenseList";
      case I:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case V:
          return "Portal";
        case Z:
          return e.displayName || "Context";
        case B:
          return (e._context.displayName || "Context") + ".Consumer";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case P:
          return t = e.displayName || null, t !== null ? t : xe(e.type) || "Memo";
        case O:
          t = e._payload, e = e._init;
          try {
            return xe(e(t));
          } catch {
          }
      }
    return null;
  }
  var Me = Array.isArray, k = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pe = [], ge = -1;
  function N(e) {
    return { current: e };
  }
  function q(e) {
    0 > ge || (e.current = pe[ge], pe[ge] = null, ge--);
  }
  function ee(e, t) {
    ge++, pe[ge] = e.current, e.current = t;
  }
  var ie = N(null), ve = N(null), E = N(null), te = N(null);
  function j(e, t) {
    switch (ee(E, t), ee(ve, e), ee(ie, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Xh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Xh(t), e = Gh(t, e);
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
    q(ie), ee(ie, e);
  }
  function A() {
    q(ie), q(ve), q(E);
  }
  function L(e) {
    e.memoizedState !== null && ee(te, e);
    var t = ie.current, n = Gh(t, e.type);
    t !== n && (ee(ve, e), ee(ie, n));
  }
  function re(e) {
    ve.current === e && (q(ie), q(ve)), te.current === e && (q(te), wi._currentValue = se);
  }
  var fe, Fe;
  function Ce(e) {
    if (fe === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        fe = t && t[1] || "", Fe = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + fe + e + Fe;
  }
  var Ie = !1;
  function W(e, t) {
    if (!e || Ie) return "";
    Ie = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (Y) {
                  var U = Y;
                }
                Reflect.construct(e, [], $);
              } else {
                try {
                  $.call();
                } catch (Y) {
                  U = Y;
                }
                e.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Y) {
                U = Y;
              }
              ($ = e()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (Y) {
            if (Y && U && typeof Y.stack == "string")
              return [Y.stack, U.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      i && i.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = a.DetermineComponentFrameRoot(), d = r[0], g = r[1];
      if (d && g) {
        var C = d.split(`
`), R = g.split(`
`);
        for (i = a = 0; a < C.length && !C[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; i < R.length && !R[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (a === C.length || i === R.length)
          for (a = C.length - 1, i = R.length - 1; 1 <= a && 0 <= i && C[a] !== R[i]; )
            i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (C[a] !== R[i]) {
            if (a !== 1 || i !== 1)
              do
                if (a--, i--, 0 > i || C[a] !== R[i]) {
                  var Q = `
` + C[a].replace(" at new ", " at ");
                  return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), Q;
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      Ie = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Ce(n) : "";
  }
  function Se(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ce(e.type);
      case 16:
        return Ce("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ce("Suspense Fallback") : Ce("Suspense");
      case 19:
        return Ce("SuspenseList");
      case 0:
      case 15:
        return W(e.type, !1);
      case 11:
        return W(e.type.render, !1);
      case 1:
        return W(e.type, !0);
      case 31:
        return Ce("Activity");
      default:
        return "";
    }
  }
  function Ee(e) {
    try {
      var t = "", n = null;
      do
        t += Se(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ne = Object.prototype.hasOwnProperty, Ge = l.unstable_scheduleCallback, nt = l.unstable_cancelCallback, ce = l.unstable_shouldYield, Pe = l.unstable_requestPaint, et = l.unstable_now, Qa = l.unstable_getCurrentPriorityLevel, T = l.unstable_ImmediatePriority, be = l.unstable_UserBlockingPriority, Be = l.unstable_NormalPriority, it = l.unstable_LowPriority, zn = l.unstable_IdlePriority, Pt = l.log, Vi = l.unstable_setDisableYieldValue, ba = null, Dt = null;
  function en(e) {
    if (typeof Pt == "function" && Vi(e), Dt && typeof Dt.setStrictMode == "function")
      try {
        Dt.setStrictMode(ba, e);
      } catch {
      }
  }
  var Et = Math.clz32 ? Math.clz32 : Mu, Au = Math.log, Ki = Math.LN2;
  function Mu(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Au(e) / Ki | 0) | 0;
  }
  var Va = 256, Ka = 262144, st = 4194304;
  function ut(e) {
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
  function gt(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0, r = e.suspendedLanes, d = e.pingedLanes;
    e = e.warmLanes;
    var g = a & 134217727;
    return g !== 0 ? (a = g & ~r, a !== 0 ? i = ut(a) : (d &= g, d !== 0 ? i = ut(d) : n || (n = g & ~e, n !== 0 && (i = ut(n))))) : (g = a & ~r, g !== 0 ? i = ut(g) : d !== 0 ? i = ut(d) : n || (n = a & ~e, n !== 0 && (i = ut(n)))), i === 0 ? 0 : t !== 0 && t !== i && (t & r) === 0 && (r = i & -i, n = t & -t, r >= n || r === 32 && (n & 4194048) !== 0) ? t : i;
  }
  function kt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ut(e, t) {
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
  function zt() {
    var e = st;
    return st <<= 1, (st & 62914560) === 0 && (st = 4194304), e;
  }
  function Ht(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function tn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function mt(e, t, n, a, i, r) {
    var d = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var g = e.entanglements, C = e.expirationTimes, R = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var Q = 31 - Et(n), $ = 1 << Q;
      g[Q] = 0, C[Q] = -1;
      var U = R[Q];
      if (U !== null)
        for (R[Q] = null, Q = 0; Q < U.length; Q++) {
          var Y = U[Q];
          Y !== null && (Y.lane &= -536870913);
        }
      n &= ~$;
    }
    a !== 0 && vn(e, a, 0), r !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(d & ~t));
  }
  function vn(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Et(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Qt(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Et(n), i = 1 << a;
      i & t | e[a] & t && (e[a] |= t), n &= ~i;
    }
  }
  function nn(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Tn(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Tn(e) {
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
  function Dn(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function gn() {
    var e = J.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : fm(e.type));
  }
  function Jn(e, t) {
    var n = J.p;
    try {
      return J.p = e, t();
    } finally {
      J.p = n;
    }
  }
  var an = Math.random().toString(36).slice(2), St = "__reactFiber$" + an, Bt = "__reactProps$" + an, $a = "__reactContainer$" + an, Ru = "__reactEvents$" + an, uv = "__reactListeners$" + an, rv = "__reactHandles$" + an, zo = "__reactResources$" + an, ql = "__reactMarker$" + an;
  function Ou(e) {
    delete e[St], delete e[Bt], delete e[Ru], delete e[uv], delete e[rv];
  }
  function Ja(e) {
    var t = e[St];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[$a] || n[St]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Wh(e); e !== null; ) {
            if (n = e[St]) return n;
            e = Wh(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Wa(e) {
    if (e = e[St] || e[$a]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Yl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Fa(e) {
    var t = e[zo];
    return t || (t = e[zo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function yt(e) {
    e[ql] = !0;
  }
  var To = /* @__PURE__ */ new Set(), Do = {};
  function ja(e, t) {
    Ia(e, t), Ia(e + "Capture", t);
  }
  function Ia(e, t) {
    for (Do[e] = t, e = 0; e < t.length; e++)
      To.add(t[e]);
  }
  var cv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ao = {}, Mo = {};
  function ov(e) {
    return Ne.call(Mo, e) ? !0 : Ne.call(Ao, e) ? !1 : cv.test(e) ? Mo[e] = !0 : (Ao[e] = !0, !1);
  }
  function $i(e, t, n) {
    if (ov(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Ji(e, t, n) {
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
  function An(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  function ln(e) {
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
  function Ro(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function dv(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var i = a.get, r = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(d) {
          n = "" + d, r.call(this, d);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(d) {
          n = "" + d;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function ku(e) {
    if (!e._valueTracker) {
      var t = Ro(e) ? "checked" : "value";
      e._valueTracker = dv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Oo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Ro(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Wi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var fv = /[\n"\\]/g;
  function sn(e) {
    return e.replace(
      fv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Uu(e, t, n, a, i, r, d, g) {
    e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ln(t)) : e.value !== "" + ln(t) && (e.value = "" + ln(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Hu(e, d, ln(t)) : n != null ? Hu(e, d, ln(n)) : a != null && e.removeAttribute("value"), i == null && r != null && (e.defaultChecked = !!r), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + ln(g) : e.removeAttribute("name");
  }
  function ko(e, t, n, a, i, r, d, g) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || n != null) {
      if (!(r !== "submit" && r !== "reset" || t != null)) {
        ku(e);
        return;
      }
      n = n != null ? "" + ln(n) : "", t = t != null ? "" + ln(t) : n, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = g ? e.checked : !!a, e.defaultChecked = !!a, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d), ku(e);
  }
  function Hu(e, t, n) {
    t === "number" && Wi(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Pa(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ln(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Uo(e, t, n) {
    if (t != null && (t = "" + ln(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + ln(n) : "";
  }
  function Ho(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(o(92));
        if (Me(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = ln(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), ku(e);
  }
  function el(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var hv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Bo(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || hv.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Lo(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && n[i] !== a && Bo(e, i, a);
    } else
      for (var r in t)
        t.hasOwnProperty(r) && Bo(e, r, t[r]);
  }
  function Bu(e) {
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
  var mv = /* @__PURE__ */ new Map([
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
  ]), pv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fi(e) {
    return pv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Mn() {
  }
  var Lu = null;
  function qu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var tl = null, nl = null;
  function qo(e) {
    var t = Wa(e);
    if (t && (e = t.stateNode)) {
      var n = e[Bt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Uu(
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
              'input[name="' + sn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[Bt] || null;
                if (!i) throw Error(o(90));
                Uu(
                  a,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              a = n[t], a.form === e.form && Oo(a);
          }
          break e;
        case "textarea":
          Uo(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Pa(e, !!n.multiple, t, !1);
      }
    }
  }
  var Yu = !1;
  function Yo(e, t, n) {
    if (Yu) return e(t, n);
    Yu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Yu = !1, (tl !== null || nl !== null) && (Bs(), tl && (t = tl, e = nl, nl = tl = null, qo(t), e)))
        for (t = 0; t < e.length; t++) qo(e[t]);
    }
  }
  function Xl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[Bt] || null;
    if (a === null) return null;
    n = a[t];
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
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
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
  var Rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xu = !1;
  if (Rn)
    try {
      var Gl = {};
      Object.defineProperty(Gl, "passive", {
        get: function() {
          Xu = !0;
        }
      }), window.addEventListener("test", Gl, Gl), window.removeEventListener("test", Gl, Gl);
    } catch {
      Xu = !1;
    }
  var Wn = null, Gu = null, Ii = null;
  function Xo() {
    if (Ii) return Ii;
    var e, t = Gu, n = t.length, a, i = "value" in Wn ? Wn.value : Wn.textContent, r = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var d = n - e;
    for (a = 1; a <= d && t[n - a] === i[r - a]; a++) ;
    return Ii = i.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Pi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function es() {
    return !0;
  }
  function Go() {
    return !1;
  }
  function Lt(e) {
    function t(n, a, i, r, d) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = r, this.target = d, this.currentTarget = null;
      for (var g in e)
        e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(r) : r[g]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? es : Go, this.isPropagationStopped = Go, this;
    }
    return x(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = es);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = es);
      },
      persist: function() {
      },
      isPersistent: es
    }), t;
  }
  var Sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ts = Lt(Sa), Zl = x({}, Sa, { view: 0, detail: 0 }), vv = Lt(Zl), Zu, Qu, Ql, ns = x({}, Zl, {
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
    getModifierState: Ku,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ql && (Ql && e.type === "mousemove" ? (Zu = e.screenX - Ql.screenX, Qu = e.screenY - Ql.screenY) : Qu = Zu = 0, Ql = e), Zu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Qu;
    }
  }), Zo = Lt(ns), gv = x({}, ns, { dataTransfer: 0 }), yv = Lt(gv), xv = x({}, Zl, { relatedTarget: 0 }), Vu = Lt(xv), bv = x({}, Sa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jv = Lt(bv), Sv = x({}, Sa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Cv = Lt(Sv), Nv = x({}, Sa, { data: 0 }), Qo = Lt(Nv), wv = {
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
  }, _v = {
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
  }, Ev = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function zv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ev[e]) ? !!t[e] : !1;
  }
  function Ku() {
    return zv;
  }
  var Tv = x({}, Zl, {
    key: function(e) {
      if (e.key) {
        var t = wv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Pi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _v[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ku,
    charCode: function(e) {
      return e.type === "keypress" ? Pi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Pi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Dv = Lt(Tv), Av = x({}, ns, {
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
  }), Vo = Lt(Av), Mv = x({}, Zl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ku
  }), Rv = Lt(Mv), Ov = x({}, Sa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), kv = Lt(Ov), Uv = x({}, ns, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Hv = Lt(Uv), Bv = x({}, Sa, {
    newState: 0,
    oldState: 0
  }), Lv = Lt(Bv), qv = [9, 13, 27, 32], $u = Rn && "CompositionEvent" in window, Vl = null;
  Rn && "documentMode" in document && (Vl = document.documentMode);
  var Yv = Rn && "TextEvent" in window && !Vl, Ko = Rn && (!$u || Vl && 8 < Vl && 11 >= Vl), $o = " ", Jo = !1;
  function Wo(e, t) {
    switch (e) {
      case "keyup":
        return qv.indexOf(t.keyCode) !== -1;
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
  function Fo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var al = !1;
  function Xv(e, t) {
    switch (e) {
      case "compositionend":
        return Fo(t);
      case "keypress":
        return t.which !== 32 ? null : (Jo = !0, $o);
      case "textInput":
        return e = t.data, e === $o && Jo ? null : e;
      default:
        return null;
    }
  }
  function Gv(e, t) {
    if (al)
      return e === "compositionend" || !$u && Wo(e, t) ? (e = Xo(), Ii = Gu = Wn = null, al = !1, e) : null;
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
        return Ko && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Zv = {
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
  function Io(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Zv[e.type] : t === "textarea";
  }
  function Po(e, t, n, a) {
    tl ? nl ? nl.push(a) : nl = [a] : tl = a, t = Qs(t, "onChange"), 0 < t.length && (n = new ts(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Kl = null, $l = null;
  function Qv(e) {
    Uh(e, 0);
  }
  function as(e) {
    var t = Yl(e);
    if (Oo(t)) return e;
  }
  function ed(e, t) {
    if (e === "change") return t;
  }
  var td = !1;
  if (Rn) {
    var Ju;
    if (Rn) {
      var Wu = "oninput" in document;
      if (!Wu) {
        var nd = document.createElement("div");
        nd.setAttribute("oninput", "return;"), Wu = typeof nd.oninput == "function";
      }
      Ju = Wu;
    } else Ju = !1;
    td = Ju && (!document.documentMode || 9 < document.documentMode);
  }
  function ad() {
    Kl && (Kl.detachEvent("onpropertychange", ld), $l = Kl = null);
  }
  function ld(e) {
    if (e.propertyName === "value" && as($l)) {
      var t = [];
      Po(
        t,
        $l,
        e,
        qu(e)
      ), Yo(Qv, t);
    }
  }
  function Vv(e, t, n) {
    e === "focusin" ? (ad(), Kl = t, $l = n, Kl.attachEvent("onpropertychange", ld)) : e === "focusout" && ad();
  }
  function Kv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return as($l);
  }
  function $v(e, t) {
    if (e === "click") return as(t);
  }
  function Jv(e, t) {
    if (e === "input" || e === "change")
      return as(t);
  }
  function Wv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Vt = typeof Object.is == "function" ? Object.is : Wv;
  function Jl(e, t) {
    if (Vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!Ne.call(t, i) || !Vt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function id(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function sd(e, t) {
    var n = id(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = e + n.textContent.length, e <= t && a >= t)
          return { node: n, offset: t - e };
        e = a;
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
      n = id(n);
    }
  }
  function ud(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ud(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function rd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Wi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Wi(e.document);
    }
    return t;
  }
  function Fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Fv = Rn && "documentMode" in document && 11 >= document.documentMode, ll = null, Iu = null, Wl = null, Pu = !1;
  function cd(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Pu || ll == null || ll !== Wi(a) || (a = ll, "selectionStart" in a && Fu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Wl && Jl(Wl, a) || (Wl = a, a = Qs(Iu, "onSelect"), 0 < a.length && (t = new ts(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = ll)));
  }
  function Ca(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var il = {
    animationend: Ca("Animation", "AnimationEnd"),
    animationiteration: Ca("Animation", "AnimationIteration"),
    animationstart: Ca("Animation", "AnimationStart"),
    transitionrun: Ca("Transition", "TransitionRun"),
    transitionstart: Ca("Transition", "TransitionStart"),
    transitioncancel: Ca("Transition", "TransitionCancel"),
    transitionend: Ca("Transition", "TransitionEnd")
  }, er = {}, od = {};
  Rn && (od = document.createElement("div").style, "AnimationEvent" in window || (delete il.animationend.animation, delete il.animationiteration.animation, delete il.animationstart.animation), "TransitionEvent" in window || delete il.transitionend.transition);
  function Na(e) {
    if (er[e]) return er[e];
    if (!il[e]) return e;
    var t = il[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in od)
        return er[e] = t[n];
    return e;
  }
  var dd = Na("animationend"), fd = Na("animationiteration"), hd = Na("animationstart"), Iv = Na("transitionrun"), Pv = Na("transitionstart"), eg = Na("transitioncancel"), md = Na("transitionend"), pd = /* @__PURE__ */ new Map(), tr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  tr.push("scrollEnd");
  function yn(e, t) {
    pd.set(e, t), ja(t, [e]);
  }
  var ls = typeof reportError == "function" ? reportError : function(e) {
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
  }, un = [], sl = 0, nr = 0;
  function is() {
    for (var e = sl, t = nr = sl = 0; t < e; ) {
      var n = un[t];
      un[t++] = null;
      var a = un[t];
      un[t++] = null;
      var i = un[t];
      un[t++] = null;
      var r = un[t];
      if (un[t++] = null, a !== null && i !== null) {
        var d = a.pending;
        d === null ? i.next = i : (i.next = d.next, d.next = i), a.pending = i;
      }
      r !== 0 && vd(n, i, r);
    }
  }
  function ss(e, t, n, a) {
    un[sl++] = e, un[sl++] = t, un[sl++] = n, un[sl++] = a, nr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function ar(e, t, n, a) {
    return ss(e, t, n, a), us(e);
  }
  function wa(e, t) {
    return ss(e, null, null, t), us(e);
  }
  function vd(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, r = e.return; r !== null; )
      r.childLanes |= n, a = r.alternate, a !== null && (a.childLanes |= n), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (i = !0)), e = r, r = r.return;
    return e.tag === 3 ? (r = e.stateNode, i && t !== null && (i = 31 - Et(n), e = r.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = n | 536870912), r) : null;
  }
  function us(e) {
    if (50 < yi)
      throw yi = 0, fc = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ul = {};
  function tg(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kt(e, t, n, a) {
    return new tg(e, t, n, a);
  }
  function lr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function On(e, t) {
    var n = e.alternate;
    return n === null ? (n = Kt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function gd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function rs(e, t, n, a, i, r) {
    var d = 0;
    if (a = e, typeof e == "function") lr(e) && (d = 1);
    else if (typeof e == "string")
      d = sy(
        e,
        n,
        ie.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case I:
          return e = Kt(31, n, t, i), e.elementType = I, e.lanes = r, e;
        case X:
          return _a(n.children, i, r, t);
        case G:
          d = 8, i |= 24;
          break;
        case H:
          return e = Kt(12, n, t, i | 2), e.elementType = H, e.lanes = r, e;
        case le:
          return e = Kt(13, n, t, i), e.elementType = le, e.lanes = r, e;
        case F:
          return e = Kt(19, n, t, i), e.elementType = F, e.lanes = r, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Z:
                d = 10;
                break e;
              case B:
                d = 9;
                break e;
              case ne:
                d = 11;
                break e;
              case P:
                d = 14;
                break e;
              case O:
                d = 16, a = null;
                break e;
            }
          d = 29, n = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Kt(d, n, t, i), t.elementType = e, t.type = a, t.lanes = r, t;
  }
  function _a(e, t, n, a) {
    return e = Kt(7, e, a, t), e.lanes = n, e;
  }
  function ir(e, t, n) {
    return e = Kt(6, e, null, t), e.lanes = n, e;
  }
  function yd(e) {
    var t = Kt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function sr(e, t, n) {
    return t = Kt(
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
  var xd = /* @__PURE__ */ new WeakMap();
  function rn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = xd.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Ee(t)
      }, xd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ee(t)
    };
  }
  var rl = [], cl = 0, cs = null, Fl = 0, cn = [], on = 0, Fn = null, Cn = 1, Nn = "";
  function kn(e, t) {
    rl[cl++] = Fl, rl[cl++] = cs, cs = e, Fl = t;
  }
  function bd(e, t, n) {
    cn[on++] = Cn, cn[on++] = Nn, cn[on++] = Fn, Fn = e;
    var a = Cn;
    e = Nn;
    var i = 32 - Et(a) - 1;
    a &= ~(1 << i), n += 1;
    var r = 32 - Et(t) + i;
    if (30 < r) {
      var d = i - i % 5;
      r = (a & (1 << d) - 1).toString(32), a >>= d, i -= d, Cn = 1 << 32 - Et(t) + i | n << i | a, Nn = r + e;
    } else
      Cn = 1 << r | n << i | a, Nn = e;
  }
  function ur(e) {
    e.return !== null && (kn(e, 1), bd(e, 1, 0));
  }
  function rr(e) {
    for (; e === cs; )
      cs = rl[--cl], rl[cl] = null, Fl = rl[--cl], rl[cl] = null;
    for (; e === Fn; )
      Fn = cn[--on], cn[on] = null, Nn = cn[--on], cn[on] = null, Cn = cn[--on], cn[on] = null;
  }
  function jd(e, t) {
    cn[on++] = Cn, cn[on++] = Nn, cn[on++] = Fn, Cn = t.id, Nn = t.overflow, Fn = e;
  }
  var Ct = null, $e = null, ke = !1, In = null, dn = !1, cr = Error(o(519));
  function Pn(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Il(rn(t, e)), cr;
  }
  function Sd(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[St] = e, t[Bt] = a, n) {
      case "dialog":
        Ae("cancel", t), Ae("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ae("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < bi.length; n++)
          Ae(bi[n], t);
        break;
      case "source":
        Ae("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ae("error", t), Ae("load", t);
        break;
      case "details":
        Ae("toggle", t);
        break;
      case "input":
        Ae("invalid", t), ko(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        Ae("invalid", t);
        break;
      case "textarea":
        Ae("invalid", t), Ho(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || qh(t.textContent, n) ? (a.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), a.onScroll != null && Ae("scroll", t), a.onScrollEnd != null && Ae("scrollend", t), a.onClick != null && (t.onclick = Mn), t = !0) : t = !1, t || Pn(e, !0);
  }
  function Cd(e) {
    for (Ct = e.return; Ct; )
      switch (Ct.tag) {
        case 5:
        case 31:
        case 13:
          dn = !1;
          return;
        case 27:
        case 3:
          dn = !0;
          return;
        default:
          Ct = Ct.return;
      }
  }
  function ol(e) {
    if (e !== Ct) return !1;
    if (!ke) return Cd(e), ke = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Ec(e.type, e.memoizedProps)), n = !n), n && $e && Pn(e), Cd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      $e = Jh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      $e = Jh(e);
    } else
      t === 27 ? (t = $e, ha(e.type) ? (e = Mc, Mc = null, $e = e) : $e = t) : $e = Ct ? hn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ea() {
    $e = Ct = null, ke = !1;
  }
  function or() {
    var e = In;
    return e !== null && (Gt === null ? Gt = e : Gt.push.apply(
      Gt,
      e
    ), In = null), e;
  }
  function Il(e) {
    In === null ? In = [e] : In.push(e);
  }
  var dr = N(null), za = null, Un = null;
  function ea(e, t, n) {
    ee(dr, t._currentValue), t._currentValue = n;
  }
  function Hn(e) {
    e._currentValue = dr.current, q(dr);
  }
  function fr(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function hr(e, t, n, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var r = i.dependencies;
      if (r !== null) {
        var d = i.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var g = r;
          r = i;
          for (var C = 0; C < t.length; C++)
            if (g.context === t[C]) {
              r.lanes |= n, g = r.alternate, g !== null && (g.lanes |= n), fr(
                r.return,
                n,
                e
              ), a || (d = null);
              break e;
            }
          r = g.next;
        }
      } else if (i.tag === 18) {
        if (d = i.return, d === null) throw Error(o(341));
        d.lanes |= n, r = d.alternate, r !== null && (r.lanes |= n), fr(d, n, e), d = null;
      } else d = i.child;
      if (d !== null) d.return = i;
      else
        for (d = i; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (i = d.sibling, i !== null) {
            i.return = d.return, d = i;
            break;
          }
          d = d.return;
        }
      i = d;
    }
  }
  function dl(e, t, n, a) {
    e = null;
    for (var i = t, r = !1; i !== null; ) {
      if (!r) {
        if ((i.flags & 524288) !== 0) r = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var d = i.alternate;
        if (d === null) throw Error(o(387));
        if (d = d.memoizedProps, d !== null) {
          var g = i.type;
          Vt(i.pendingProps.value, d.value) || (e !== null ? e.push(g) : e = [g]);
        }
      } else if (i === te.current) {
        if (d = i.alternate, d === null) throw Error(o(387));
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(wi) : e = [wi]);
      }
      i = i.return;
    }
    e !== null && hr(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function os(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Vt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ta(e) {
    za = e, Un = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Nt(e) {
    return Nd(za, e);
  }
  function ds(e, t) {
    return za === null && Ta(e), Nd(e, t);
  }
  function Nd(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Un === null) {
      if (e === null) throw Error(o(308));
      Un = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Un = Un.next = t;
    return n;
  }
  var ng = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, ag = l.unstable_scheduleCallback, lg = l.unstable_NormalPriority, ot = {
    $$typeof: Z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mr() {
    return {
      controller: new ng(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Pl(e) {
    e.refCount--, e.refCount === 0 && ag(lg, function() {
      e.controller.abort();
    });
  }
  var ei = null, pr = 0, fl = 0, hl = null;
  function ig(e, t) {
    if (ei === null) {
      var n = ei = [];
      pr = 0, fl = yc(), hl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return pr++, t.then(wd, wd), t;
  }
  function wd() {
    if (--pr === 0 && ei !== null) {
      hl !== null && (hl.status = "fulfilled");
      var e = ei;
      ei = null, fl = 0, hl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function sg(e, t) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(i) {
        n.push(i);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var i = 0; i < n.length; i++) (0, n[i])(t);
      },
      function(i) {
        for (a.status = "rejected", a.reason = i, i = 0; i < n.length; i++)
          (0, n[i])(void 0);
      }
    ), a;
  }
  var _d = k.S;
  k.S = function(e, t) {
    oh = et(), typeof t == "object" && t !== null && typeof t.then == "function" && ig(e, t), _d !== null && _d(e, t);
  };
  var Da = N(null);
  function vr() {
    var e = Da.current;
    return e !== null ? e : Ke.pooledCache;
  }
  function fs(e, t) {
    t === null ? ee(Da, Da.current) : ee(Da, t.pool);
  }
  function Ed() {
    var e = vr();
    return e === null ? null : { parent: ot._currentValue, pool: e };
  }
  var ml = Error(o(460)), gr = Error(o(474)), hs = Error(o(542)), ms = { then: function() {
  } };
  function zd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Td(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Mn, Mn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Ad(e), e;
      default:
        if (typeof t.status == "string") t.then(Mn, Mn);
        else {
          if (e = Ke, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var i = t;
                i.status = "fulfilled", i.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var i = t;
                i.status = "rejected", i.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Ad(e), e;
        }
        throw Ma = t, ml;
    }
  }
  function Aa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ma = n, ml) : n;
    }
  }
  var Ma = null;
  function Dd() {
    if (Ma === null) throw Error(o(459));
    var e = Ma;
    return Ma = null, e;
  }
  function Ad(e) {
    if (e === ml || e === hs)
      throw Error(o(483));
  }
  var pl = null, ti = 0;
  function ps(e) {
    var t = ti;
    return ti += 1, pl === null && (pl = []), Td(pl, e, t);
  }
  function ni(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function vs(e, t) {
    throw t.$$typeof === w ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Md(e) {
    function t(z, _) {
      if (e) {
        var M = z.deletions;
        M === null ? (z.deletions = [_], z.flags |= 16) : M.push(_);
      }
    }
    function n(z, _) {
      if (!e) return null;
      for (; _ !== null; )
        t(z, _), _ = _.sibling;
      return null;
    }
    function a(z) {
      for (var _ = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? _.set(z.key, z) : _.set(z.index, z), z = z.sibling;
      return _;
    }
    function i(z, _) {
      return z = On(z, _), z.index = 0, z.sibling = null, z;
    }
    function r(z, _, M) {
      return z.index = M, e ? (M = z.alternate, M !== null ? (M = M.index, M < _ ? (z.flags |= 67108866, _) : M) : (z.flags |= 67108866, _)) : (z.flags |= 1048576, _);
    }
    function d(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z;
    }
    function g(z, _, M, K) {
      return _ === null || _.tag !== 6 ? (_ = ir(M, z.mode, K), _.return = z, _) : (_ = i(_, M), _.return = z, _);
    }
    function C(z, _, M, K) {
      var ye = M.type;
      return ye === X ? Q(
        z,
        _,
        M.props.children,
        K,
        M.key
      ) : _ !== null && (_.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === O && Aa(ye) === _.type) ? (_ = i(_, M.props), ni(_, M), _.return = z, _) : (_ = rs(
        M.type,
        M.key,
        M.props,
        null,
        z.mode,
        K
      ), ni(_, M), _.return = z, _);
    }
    function R(z, _, M, K) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== M.containerInfo || _.stateNode.implementation !== M.implementation ? (_ = sr(M, z.mode, K), _.return = z, _) : (_ = i(_, M.children || []), _.return = z, _);
    }
    function Q(z, _, M, K, ye) {
      return _ === null || _.tag !== 7 ? (_ = _a(
        M,
        z.mode,
        K,
        ye
      ), _.return = z, _) : (_ = i(_, M), _.return = z, _);
    }
    function $(z, _, M) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return _ = ir(
          "" + _,
          z.mode,
          M
        ), _.return = z, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case D:
            return M = rs(
              _.type,
              _.key,
              _.props,
              null,
              z.mode,
              M
            ), ni(M, _), M.return = z, M;
          case V:
            return _ = sr(
              _,
              z.mode,
              M
            ), _.return = z, _;
          case O:
            return _ = Aa(_), $(z, _, M);
        }
        if (Me(_) || ue(_))
          return _ = _a(
            _,
            z.mode,
            M,
            null
          ), _.return = z, _;
        if (typeof _.then == "function")
          return $(z, ps(_), M);
        if (_.$$typeof === Z)
          return $(
            z,
            ds(z, _),
            M
          );
        vs(z, _);
      }
      return null;
    }
    function U(z, _, M, K) {
      var ye = _ !== null ? _.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return ye !== null ? null : g(z, _, "" + M, K);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case D:
            return M.key === ye ? C(z, _, M, K) : null;
          case V:
            return M.key === ye ? R(z, _, M, K) : null;
          case O:
            return M = Aa(M), U(z, _, M, K);
        }
        if (Me(M) || ue(M))
          return ye !== null ? null : Q(z, _, M, K, null);
        if (typeof M.then == "function")
          return U(
            z,
            _,
            ps(M),
            K
          );
        if (M.$$typeof === Z)
          return U(
            z,
            _,
            ds(z, M),
            K
          );
        vs(z, M);
      }
      return null;
    }
    function Y(z, _, M, K, ye) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return z = z.get(M) || null, g(_, z, "" + K, ye);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case D:
            return z = z.get(
              K.key === null ? M : K.key
            ) || null, C(_, z, K, ye);
          case V:
            return z = z.get(
              K.key === null ? M : K.key
            ) || null, R(_, z, K, ye);
          case O:
            return K = Aa(K), Y(
              z,
              _,
              M,
              K,
              ye
            );
        }
        if (Me(K) || ue(K))
          return z = z.get(M) || null, Q(_, z, K, ye, null);
        if (typeof K.then == "function")
          return Y(
            z,
            _,
            M,
            ps(K),
            ye
          );
        if (K.$$typeof === Z)
          return Y(
            z,
            _,
            M,
            ds(_, K),
            ye
          );
        vs(_, K);
      }
      return null;
    }
    function he(z, _, M, K) {
      for (var ye = null, Ue = null, me = _, Te = _ = 0, Oe = null; me !== null && Te < M.length; Te++) {
        me.index > Te ? (Oe = me, me = null) : Oe = me.sibling;
        var He = U(
          z,
          me,
          M[Te],
          K
        );
        if (He === null) {
          me === null && (me = Oe);
          break;
        }
        e && me && He.alternate === null && t(z, me), _ = r(He, _, Te), Ue === null ? ye = He : Ue.sibling = He, Ue = He, me = Oe;
      }
      if (Te === M.length)
        return n(z, me), ke && kn(z, Te), ye;
      if (me === null) {
        for (; Te < M.length; Te++)
          me = $(z, M[Te], K), me !== null && (_ = r(
            me,
            _,
            Te
          ), Ue === null ? ye = me : Ue.sibling = me, Ue = me);
        return ke && kn(z, Te), ye;
      }
      for (me = a(me); Te < M.length; Te++)
        Oe = Y(
          me,
          z,
          Te,
          M[Te],
          K
        ), Oe !== null && (e && Oe.alternate !== null && me.delete(
          Oe.key === null ? Te : Oe.key
        ), _ = r(
          Oe,
          _,
          Te
        ), Ue === null ? ye = Oe : Ue.sibling = Oe, Ue = Oe);
      return e && me.forEach(function(ya) {
        return t(z, ya);
      }), ke && kn(z, Te), ye;
    }
    function je(z, _, M, K) {
      if (M == null) throw Error(o(151));
      for (var ye = null, Ue = null, me = _, Te = _ = 0, Oe = null, He = M.next(); me !== null && !He.done; Te++, He = M.next()) {
        me.index > Te ? (Oe = me, me = null) : Oe = me.sibling;
        var ya = U(z, me, He.value, K);
        if (ya === null) {
          me === null && (me = Oe);
          break;
        }
        e && me && ya.alternate === null && t(z, me), _ = r(ya, _, Te), Ue === null ? ye = ya : Ue.sibling = ya, Ue = ya, me = Oe;
      }
      if (He.done)
        return n(z, me), ke && kn(z, Te), ye;
      if (me === null) {
        for (; !He.done; Te++, He = M.next())
          He = $(z, He.value, K), He !== null && (_ = r(He, _, Te), Ue === null ? ye = He : Ue.sibling = He, Ue = He);
        return ke && kn(z, Te), ye;
      }
      for (me = a(me); !He.done; Te++, He = M.next())
        He = Y(me, z, Te, He.value, K), He !== null && (e && He.alternate !== null && me.delete(He.key === null ? Te : He.key), _ = r(He, _, Te), Ue === null ? ye = He : Ue.sibling = He, Ue = He);
      return e && me.forEach(function(gy) {
        return t(z, gy);
      }), ke && kn(z, Te), ye;
    }
    function Ve(z, _, M, K) {
      if (typeof M == "object" && M !== null && M.type === X && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case D:
            e: {
              for (var ye = M.key; _ !== null; ) {
                if (_.key === ye) {
                  if (ye = M.type, ye === X) {
                    if (_.tag === 7) {
                      n(
                        z,
                        _.sibling
                      ), K = i(
                        _,
                        M.props.children
                      ), K.return = z, z = K;
                      break e;
                    }
                  } else if (_.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === O && Aa(ye) === _.type) {
                    n(
                      z,
                      _.sibling
                    ), K = i(_, M.props), ni(K, M), K.return = z, z = K;
                    break e;
                  }
                  n(z, _);
                  break;
                } else t(z, _);
                _ = _.sibling;
              }
              M.type === X ? (K = _a(
                M.props.children,
                z.mode,
                K,
                M.key
              ), K.return = z, z = K) : (K = rs(
                M.type,
                M.key,
                M.props,
                null,
                z.mode,
                K
              ), ni(K, M), K.return = z, z = K);
            }
            return d(z);
          case V:
            e: {
              for (ye = M.key; _ !== null; ) {
                if (_.key === ye)
                  if (_.tag === 4 && _.stateNode.containerInfo === M.containerInfo && _.stateNode.implementation === M.implementation) {
                    n(
                      z,
                      _.sibling
                    ), K = i(_, M.children || []), K.return = z, z = K;
                    break e;
                  } else {
                    n(z, _);
                    break;
                  }
                else t(z, _);
                _ = _.sibling;
              }
              K = sr(M, z.mode, K), K.return = z, z = K;
            }
            return d(z);
          case O:
            return M = Aa(M), Ve(
              z,
              _,
              M,
              K
            );
        }
        if (Me(M))
          return he(
            z,
            _,
            M,
            K
          );
        if (ue(M)) {
          if (ye = ue(M), typeof ye != "function") throw Error(o(150));
          return M = ye.call(M), je(
            z,
            _,
            M,
            K
          );
        }
        if (typeof M.then == "function")
          return Ve(
            z,
            _,
            ps(M),
            K
          );
        if (M.$$typeof === Z)
          return Ve(
            z,
            _,
            ds(z, M),
            K
          );
        vs(z, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, _ !== null && _.tag === 6 ? (n(z, _.sibling), K = i(_, M), K.return = z, z = K) : (n(z, _), K = ir(M, z.mode, K), K.return = z, z = K), d(z)) : n(z, _);
    }
    return function(z, _, M, K) {
      try {
        ti = 0;
        var ye = Ve(
          z,
          _,
          M,
          K
        );
        return pl = null, ye;
      } catch (me) {
        if (me === ml || me === hs) throw me;
        var Ue = Kt(29, me, null, z.mode);
        return Ue.lanes = K, Ue.return = z, Ue;
      }
    };
  }
  var Ra = Md(!0), Rd = Md(!1), ta = !1;
  function yr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function xr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function na(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function aa(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Le & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = us(e), vd(e, null, n), t;
    }
    return ss(e, a, t, n), us(e);
  }
  function ai(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Qt(e, n);
    }
  }
  function br(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var i = null, r = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          r === null ? i = r = d : r = r.next = d, n = n.next;
        } while (n !== null);
        r === null ? i = r = t : r = r.next = t;
      } else i = r = t;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: r,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var jr = !1;
  function li() {
    if (jr) {
      var e = hl;
      if (e !== null) throw e;
    }
  }
  function ii(e, t, n, a) {
    jr = !1;
    var i = e.updateQueue;
    ta = !1;
    var r = i.firstBaseUpdate, d = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var C = g, R = C.next;
      C.next = null, d === null ? r = R : d.next = R, d = C;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, g = Q.lastBaseUpdate, g !== d && (g === null ? Q.firstBaseUpdate = R : g.next = R, Q.lastBaseUpdate = C));
    }
    if (r !== null) {
      var $ = i.baseState;
      d = 0, Q = R = C = null, g = r;
      do {
        var U = g.lane & -536870913, Y = U !== g.lane;
        if (Y ? (Re & U) === U : (a & U) === U) {
          U !== 0 && U === fl && (jr = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var he = e, je = g;
            U = t;
            var Ve = n;
            switch (je.tag) {
              case 1:
                if (he = je.payload, typeof he == "function") {
                  $ = he.call(Ve, $, U);
                  break e;
                }
                $ = he;
                break e;
              case 3:
                he.flags = he.flags & -65537 | 128;
              case 0:
                if (he = je.payload, U = typeof he == "function" ? he.call(Ve, $, U) : he, U == null) break e;
                $ = x({}, $, U);
                break e;
              case 2:
                ta = !0;
            }
          }
          U = g.callback, U !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = i.callbacks, Y === null ? i.callbacks = [U] : Y.push(U));
        } else
          Y = {
            lane: U,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, Q === null ? (R = Q = Y, C = $) : Q = Q.next = Y, d |= U;
        if (g = g.next, g === null) {
          if (g = i.shared.pending, g === null)
            break;
          Y = g, g = Y.next, Y.next = null, i.lastBaseUpdate = Y, i.shared.pending = null;
        }
      } while (!0);
      Q === null && (C = $), i.baseState = C, i.firstBaseUpdate = R, i.lastBaseUpdate = Q, r === null && (i.shared.lanes = 0), ra |= d, e.lanes = d, e.memoizedState = $;
    }
  }
  function Od(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function kd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Od(n[e], t);
  }
  var vl = N(null), gs = N(0);
  function Ud(e, t) {
    e = Vn, ee(gs, e), ee(vl, t), Vn = e | t.baseLanes;
  }
  function Sr() {
    ee(gs, Vn), ee(vl, vl.current);
  }
  function Cr() {
    Vn = gs.current, q(vl), q(gs);
  }
  var $t = N(null), fn = null;
  function la(e) {
    var t = e.alternate;
    ee(rt, rt.current & 1), ee($t, e), fn === null && (t === null || vl.current !== null || t.memoizedState !== null) && (fn = e);
  }
  function Nr(e) {
    ee(rt, rt.current), ee($t, e), fn === null && (fn = e);
  }
  function Hd(e) {
    e.tag === 22 ? (ee(rt, rt.current), ee($t, e), fn === null && (fn = e)) : ia();
  }
  function ia() {
    ee(rt, rt.current), ee($t, $t.current);
  }
  function Jt(e) {
    q($t), fn === e && (fn = null), q(rt);
  }
  var rt = N(0);
  function ys(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Dc(n) || Ac(n)))
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
  var Bn = 0, ze = null, Ze = null, dt = null, xs = !1, gl = !1, Oa = !1, bs = 0, si = 0, yl = null, ug = 0;
  function at() {
    throw Error(o(321));
  }
  function wr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Vt(e[n], t[n])) return !1;
    return !0;
  }
  function _r(e, t, n, a, i, r) {
    return Bn = r, ze = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, k.H = e === null || e.memoizedState === null ? jf : Yr, Oa = !1, r = n(a, i), Oa = !1, gl && (r = Ld(
      t,
      n,
      a,
      i
    )), Bd(e), r;
  }
  function Bd(e) {
    k.H = ci;
    var t = Ze !== null && Ze.next !== null;
    if (Bn = 0, dt = Ze = ze = null, xs = !1, si = 0, yl = null, t) throw Error(o(300));
    e === null || ft || (e = e.dependencies, e !== null && os(e) && (ft = !0));
  }
  function Ld(e, t, n, a) {
    ze = e;
    var i = 0;
    do {
      if (gl && (yl = null), si = 0, gl = !1, 25 <= i) throw Error(o(301));
      if (i += 1, dt = Ze = null, e.updateQueue != null) {
        var r = e.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      k.H = Sf, r = t(n, a);
    } while (gl);
    return r;
  }
  function rg() {
    var e = k.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ui(t) : t, e = e.useState()[0], (Ze !== null ? Ze.memoizedState : null) !== e && (ze.flags |= 1024), t;
  }
  function Er() {
    var e = bs !== 0;
    return bs = 0, e;
  }
  function zr(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Tr(e) {
    if (xs) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      xs = !1;
    }
    Bn = 0, dt = Ze = ze = null, gl = !1, si = bs = 0, yl = null;
  }
  function At() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return dt === null ? ze.memoizedState = dt = e : dt = dt.next = e, dt;
  }
  function ct() {
    if (Ze === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ze.next;
    var t = dt === null ? ze.memoizedState : dt.next;
    if (t !== null)
      dt = t, Ze = e;
    else {
      if (e === null)
        throw ze.alternate === null ? Error(o(467)) : Error(o(310));
      Ze = e, e = {
        memoizedState: Ze.memoizedState,
        baseState: Ze.baseState,
        baseQueue: Ze.baseQueue,
        queue: Ze.queue,
        next: null
      }, dt === null ? ze.memoizedState = dt = e : dt = dt.next = e;
    }
    return dt;
  }
  function js() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ui(e) {
    var t = si;
    return si += 1, yl === null && (yl = []), e = Td(yl, e, t), t = ze, (dt === null ? t.memoizedState : dt.next) === null && (t = t.alternate, k.H = t === null || t.memoizedState === null ? jf : Yr), e;
  }
  function Ss(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ui(e);
      if (e.$$typeof === Z) return Nt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Dr(e) {
    var t = null, n = ze.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = ze.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = js(), ze.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = oe;
    return t.index++, n;
  }
  function Ln(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Cs(e) {
    var t = ct();
    return Ar(t, Ze, e);
  }
  function Ar(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = n;
    var i = e.baseQueue, r = a.pending;
    if (r !== null) {
      if (i !== null) {
        var d = i.next;
        i.next = r.next, r.next = d;
      }
      t.baseQueue = i = r, a.pending = null;
    }
    if (r = e.baseState, i === null) e.memoizedState = r;
    else {
      t = i.next;
      var g = d = null, C = null, R = t, Q = !1;
      do {
        var $ = R.lane & -536870913;
        if ($ !== R.lane ? (Re & $) === $ : (Bn & $) === $) {
          var U = R.revertLane;
          if (U === 0)
            C !== null && (C = C.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), $ === fl && (Q = !0);
          else if ((Bn & U) === U) {
            R = R.next, U === fl && (Q = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: R.revertLane,
              gesture: null,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, C === null ? (g = C = $, d = r) : C = C.next = $, ze.lanes |= U, ra |= U;
          $ = R.action, Oa && n(r, $), r = R.hasEagerState ? R.eagerState : n(r, $);
        } else
          U = {
            lane: $,
            revertLane: R.revertLane,
            gesture: R.gesture,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, C === null ? (g = C = U, d = r) : C = C.next = U, ze.lanes |= $, ra |= $;
        R = R.next;
      } while (R !== null && R !== t);
      if (C === null ? d = r : C.next = g, !Vt(r, e.memoizedState) && (ft = !0, Q && (n = hl, n !== null)))
        throw n;
      e.memoizedState = r, e.baseState = d, e.baseQueue = C, a.lastRenderedState = r;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Mr(e) {
    var t = ct(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, i = n.pending, r = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var d = i = i.next;
      do
        r = e(r, d.action), d = d.next;
      while (d !== i);
      Vt(r, t.memoizedState) || (ft = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), n.lastRenderedState = r;
    }
    return [r, a];
  }
  function qd(e, t, n) {
    var a = ze, i = ct(), r = ke;
    if (r) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var d = !Vt(
      (Ze || i).memoizedState,
      n
    );
    if (d && (i.memoizedState = n, ft = !0), i = i.queue, kr(Gd.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || d || dt !== null && dt.memoizedState.tag & 1) {
      if (a.flags |= 2048, xl(
        9,
        { destroy: void 0 },
        Xd.bind(
          null,
          a,
          i,
          n,
          t
        ),
        null
      ), Ke === null) throw Error(o(349));
      r || (Bn & 127) !== 0 || Yd(a, t, n);
    }
    return n;
  }
  function Yd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ze.updateQueue, t === null ? (t = js(), ze.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Xd(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Zd(t) && Qd(e);
  }
  function Gd(e, t, n) {
    return n(function() {
      Zd(t) && Qd(e);
    });
  }
  function Zd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Vt(e, n);
    } catch {
      return !0;
    }
  }
  function Qd(e) {
    var t = wa(e, 2);
    t !== null && Zt(t, e, 2);
  }
  function Rr(e) {
    var t = At();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Oa) {
        en(!0);
        try {
          n();
        } finally {
          en(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ln,
      lastRenderedState: e
    }, t;
  }
  function Vd(e, t, n, a) {
    return e.baseState = n, Ar(
      e,
      Ze,
      typeof a == "function" ? a : Ln
    );
  }
  function cg(e, t, n, a, i) {
    if (_s(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var r = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(d) {
          r.listeners.push(d);
        }
      };
      k.T !== null ? n(!0) : r.isTransition = !1, a(r), n = t.pending, n === null ? (r.next = t.pending = r, Kd(t, r)) : (r.next = n.next, t.pending = n.next = r);
    }
  }
  function Kd(e, t) {
    var n = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var r = k.T, d = {};
      k.T = d;
      try {
        var g = n(i, a), C = k.S;
        C !== null && C(d, g), $d(e, t, g);
      } catch (R) {
        Or(e, t, R);
      } finally {
        r !== null && d.types !== null && (r.types = d.types), k.T = r;
      }
    } else
      try {
        r = n(i, a), $d(e, t, r);
      } catch (R) {
        Or(e, t, R);
      }
  }
  function $d(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Jd(e, t, a);
      },
      function(a) {
        return Or(e, t, a);
      }
    ) : Jd(e, t, n);
  }
  function Jd(e, t, n) {
    t.status = "fulfilled", t.value = n, Wd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Kd(e, n)));
  }
  function Or(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, Wd(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Wd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Fd(e, t) {
    return t;
  }
  function Id(e, t) {
    if (ke) {
      var n = Ke.formState;
      if (n !== null) {
        e: {
          var a = ze;
          if (ke) {
            if ($e) {
              t: {
                for (var i = $e, r = dn; i.nodeType !== 8; ) {
                  if (!r) {
                    i = null;
                    break t;
                  }
                  if (i = hn(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                r = i.data, i = r === "F!" || r === "F" ? i : null;
              }
              if (i) {
                $e = hn(
                  i.nextSibling
                ), a = i.data === "F!";
                break e;
              }
            }
            Pn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = At(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fd,
      lastRenderedState: t
    }, n.queue = a, n = yf.bind(
      null,
      ze,
      a
    ), a.dispatch = n, a = Rr(!1), r = qr.bind(
      null,
      ze,
      !1,
      a.queue
    ), a = At(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, n = cg.bind(
      null,
      ze,
      i,
      r,
      n
    ), i.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function Pd(e) {
    var t = ct();
    return ef(t, Ze, e);
  }
  function ef(e, t, n) {
    if (t = Ar(
      e,
      t,
      Fd
    )[0], e = Cs(Ln)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ui(t);
      } catch (d) {
        throw d === ml ? hs : d;
      }
    else a = t;
    t = ct();
    var i = t.queue, r = i.dispatch;
    return n !== t.memoizedState && (ze.flags |= 2048, xl(
      9,
      { destroy: void 0 },
      og.bind(null, i, n),
      null
    )), [a, r, e];
  }
  function og(e, t) {
    e.action = t;
  }
  function tf(e) {
    var t = ct(), n = Ze;
    if (n !== null)
      return ef(t, n, e);
    ct(), t = t.memoizedState, n = ct();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function xl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = ze.updateQueue, t === null && (t = js(), ze.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function nf() {
    return ct().memoizedState;
  }
  function Ns(e, t, n, a) {
    var i = At();
    ze.flags |= e, i.memoizedState = xl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function ws(e, t, n, a) {
    var i = ct();
    a = a === void 0 ? null : a;
    var r = i.memoizedState.inst;
    Ze !== null && a !== null && wr(a, Ze.memoizedState.deps) ? i.memoizedState = xl(t, r, n, a) : (ze.flags |= e, i.memoizedState = xl(
      1 | t,
      r,
      n,
      a
    ));
  }
  function af(e, t) {
    Ns(8390656, 8, e, t);
  }
  function kr(e, t) {
    ws(2048, 8, e, t);
  }
  function dg(e) {
    ze.flags |= 4;
    var t = ze.updateQueue;
    if (t === null)
      t = js(), ze.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function lf(e) {
    var t = ct().memoizedState;
    return dg({ ref: t, nextImpl: e }), function() {
      if ((Le & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function sf(e, t) {
    return ws(4, 2, e, t);
  }
  function uf(e, t) {
    return ws(4, 4, e, t);
  }
  function rf(e, t) {
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
  function cf(e, t, n) {
    n = n != null ? n.concat([e]) : null, ws(4, 4, rf.bind(null, t, e), n);
  }
  function Ur() {
  }
  function of(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && wr(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function df(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && wr(t, a[1]))
      return a[0];
    if (a = e(), Oa) {
      en(!0);
      try {
        e();
      } finally {
        en(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Hr(e, t, n) {
    return n === void 0 || (Bn & 1073741824) !== 0 && (Re & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = fh(), ze.lanes |= e, ra |= e, n);
  }
  function ff(e, t, n, a) {
    return Vt(n, t) ? n : vl.current !== null ? (e = Hr(e, n, a), Vt(e, t) || (ft = !0), e) : (Bn & 42) === 0 || (Bn & 1073741824) !== 0 && (Re & 261930) === 0 ? (ft = !0, e.memoizedState = n) : (e = fh(), ze.lanes |= e, ra |= e, t);
  }
  function hf(e, t, n, a, i) {
    var r = J.p;
    J.p = r !== 0 && 8 > r ? r : 8;
    var d = k.T, g = {};
    k.T = g, qr(e, !1, t, n);
    try {
      var C = i(), R = k.S;
      if (R !== null && R(g, C), C !== null && typeof C == "object" && typeof C.then == "function") {
        var Q = sg(
          C,
          a
        );
        ri(
          e,
          t,
          Q,
          It(e)
        );
      } else
        ri(
          e,
          t,
          a,
          It(e)
        );
    } catch ($) {
      ri(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: $ },
        It()
      );
    } finally {
      J.p = r, d !== null && g.types !== null && (d.types = g.types), k.T = d;
    }
  }
  function fg() {
  }
  function Br(e, t, n, a) {
    if (e.tag !== 5) throw Error(o(476));
    var i = mf(e).queue;
    hf(
      e,
      i,
      t,
      se,
      n === null ? fg : function() {
        return pf(e), n(a);
      }
    );
  }
  function mf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: se,
      baseState: se,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ln,
        lastRenderedState: se
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
        lastRenderedReducer: Ln,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function pf(e) {
    var t = mf(e);
    t.next === null && (t = e.alternate.memoizedState), ri(
      e,
      t.next.queue,
      {},
      It()
    );
  }
  function Lr() {
    return Nt(wi);
  }
  function vf() {
    return ct().memoizedState;
  }
  function gf() {
    return ct().memoizedState;
  }
  function hg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = It();
          e = na(n);
          var a = aa(t, e, n);
          a !== null && (Zt(a, t, n), ai(a, t, n)), t = { cache: mr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function mg(e, t, n) {
    var a = It();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _s(e) ? xf(t, n) : (n = ar(e, t, n, a), n !== null && (Zt(n, e, a), bf(n, t, a)));
  }
  function yf(e, t, n) {
    var a = It();
    ri(e, t, n, a);
  }
  function ri(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (_s(e)) xf(t, i);
    else {
      var r = e.alternate;
      if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null))
        try {
          var d = t.lastRenderedState, g = r(d, n);
          if (i.hasEagerState = !0, i.eagerState = g, Vt(g, d))
            return ss(e, t, i, 0), Ke === null && is(), !1;
        } catch {
        }
      if (n = ar(e, t, i, a), n !== null)
        return Zt(n, e, a), bf(n, t, a), !0;
    }
    return !1;
  }
  function qr(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: yc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _s(e)) {
      if (t) throw Error(o(479));
    } else
      t = ar(
        e,
        n,
        a,
        2
      ), t !== null && Zt(t, e, 2);
  }
  function _s(e) {
    var t = e.alternate;
    return e === ze || t !== null && t === ze;
  }
  function xf(e, t) {
    gl = xs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function bf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Qt(e, n);
    }
  }
  var ci = {
    readContext: Nt,
    use: Ss,
    useCallback: at,
    useContext: at,
    useEffect: at,
    useImperativeHandle: at,
    useLayoutEffect: at,
    useInsertionEffect: at,
    useMemo: at,
    useReducer: at,
    useRef: at,
    useState: at,
    useDebugValue: at,
    useDeferredValue: at,
    useTransition: at,
    useSyncExternalStore: at,
    useId: at,
    useHostTransitionStatus: at,
    useFormState: at,
    useActionState: at,
    useOptimistic: at,
    useMemoCache: at,
    useCacheRefresh: at
  };
  ci.useEffectEvent = at;
  var jf = {
    readContext: Nt,
    use: Ss,
    useCallback: function(e, t) {
      return At().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Nt,
    useEffect: af,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Ns(
        4194308,
        4,
        rf.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Ns(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ns(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = At();
      t = t === void 0 ? null : t;
      var a = e();
      if (Oa) {
        en(!0);
        try {
          e();
        } finally {
          en(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = At();
      if (n !== void 0) {
        var i = n(t);
        if (Oa) {
          en(!0);
          try {
            n(t);
          } finally {
            en(!1);
          }
        }
      } else i = t;
      return a.memoizedState = a.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, a.queue = e, e = e.dispatch = mg.bind(
        null,
        ze,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = At();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Rr(e);
      var t = e.queue, n = yf.bind(null, ze, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Ur,
    useDeferredValue: function(e, t) {
      var n = At();
      return Hr(n, e, t);
    },
    useTransition: function() {
      var e = Rr(!1);
      return e = hf.bind(
        null,
        ze,
        e.queue,
        !0,
        !1
      ), At().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = ze, i = At();
      if (ke) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), Ke === null)
          throw Error(o(349));
        (Re & 127) !== 0 || Yd(a, t, n);
      }
      i.memoizedState = n;
      var r = { value: n, getSnapshot: t };
      return i.queue = r, af(Gd.bind(null, a, r, e), [
        e
      ]), a.flags |= 2048, xl(
        9,
        { destroy: void 0 },
        Xd.bind(
          null,
          a,
          r,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = At(), t = Ke.identifierPrefix;
      if (ke) {
        var n = Nn, a = Cn;
        n = (a & ~(1 << 32 - Et(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = bs++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = ug++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Lr,
    useFormState: Id,
    useActionState: Id,
    useOptimistic: function(e) {
      var t = At();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = qr.bind(
        null,
        ze,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Dr,
    useCacheRefresh: function() {
      return At().memoizedState = hg.bind(
        null,
        ze
      );
    },
    useEffectEvent: function(e) {
      var t = At(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Le & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Yr = {
    readContext: Nt,
    use: Ss,
    useCallback: of,
    useContext: Nt,
    useEffect: kr,
    useImperativeHandle: cf,
    useInsertionEffect: sf,
    useLayoutEffect: uf,
    useMemo: df,
    useReducer: Cs,
    useRef: nf,
    useState: function() {
      return Cs(Ln);
    },
    useDebugValue: Ur,
    useDeferredValue: function(e, t) {
      var n = ct();
      return ff(
        n,
        Ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Cs(Ln)[0], t = ct().memoizedState;
      return [
        typeof e == "boolean" ? e : ui(e),
        t
      ];
    },
    useSyncExternalStore: qd,
    useId: vf,
    useHostTransitionStatus: Lr,
    useFormState: Pd,
    useActionState: Pd,
    useOptimistic: function(e, t) {
      var n = ct();
      return Vd(n, Ze, e, t);
    },
    useMemoCache: Dr,
    useCacheRefresh: gf
  };
  Yr.useEffectEvent = lf;
  var Sf = {
    readContext: Nt,
    use: Ss,
    useCallback: of,
    useContext: Nt,
    useEffect: kr,
    useImperativeHandle: cf,
    useInsertionEffect: sf,
    useLayoutEffect: uf,
    useMemo: df,
    useReducer: Mr,
    useRef: nf,
    useState: function() {
      return Mr(Ln);
    },
    useDebugValue: Ur,
    useDeferredValue: function(e, t) {
      var n = ct();
      return Ze === null ? Hr(n, e, t) : ff(
        n,
        Ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Mr(Ln)[0], t = ct().memoizedState;
      return [
        typeof e == "boolean" ? e : ui(e),
        t
      ];
    },
    useSyncExternalStore: qd,
    useId: vf,
    useHostTransitionStatus: Lr,
    useFormState: tf,
    useActionState: tf,
    useOptimistic: function(e, t) {
      var n = ct();
      return Ze !== null ? Vd(n, Ze, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Dr,
    useCacheRefresh: gf
  };
  Sf.useEffectEvent = lf;
  function Xr(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : x({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Gr = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = It(), i = na(a);
      i.payload = t, n != null && (i.callback = n), t = aa(e, i, a), t !== null && (Zt(t, e, a), ai(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = It(), i = na(a);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = aa(e, i, a), t !== null && (Zt(t, e, a), ai(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = It(), a = na(n);
      a.tag = 2, t != null && (a.callback = t), t = aa(e, a, n), t !== null && (Zt(t, e, n), ai(t, e, n));
    }
  };
  function Cf(e, t, n, a, i, r, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, r, d) : t.prototype && t.prototype.isPureReactComponent ? !Jl(n, a) || !Jl(i, r) : !0;
  }
  function Nf(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Gr.enqueueReplaceState(t, t.state, null);
  }
  function ka(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = x({}, n));
      for (var i in e)
        n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  function wf(e) {
    ls(e);
  }
  function _f(e) {
    console.error(e);
  }
  function Ef(e) {
    ls(e);
  }
  function Es(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function zf(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function Zr(e, t, n) {
    return n = na(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Es(e, t);
    }, n;
  }
  function Tf(e) {
    return e = na(e), e.tag = 3, e;
  }
  function Df(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var r = a.value;
      e.payload = function() {
        return i(r);
      }, e.callback = function() {
        zf(t, n, a);
      };
    }
    var d = n.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
      zf(t, n, a), typeof i != "function" && (ca === null ? ca = /* @__PURE__ */ new Set([this]) : ca.add(this));
      var g = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function pg(e, t, n, a, i) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && dl(
        t,
        n,
        i,
        !0
      ), n = $t.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return fn === null ? Ls() : n.alternate === null && lt === 0 && (lt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === ms ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), pc(e, a, i)), !1;
          case 22:
            return n.flags |= 65536, a === ms ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), pc(e, a, i)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return pc(e, a, i), Ls(), !1;
    }
    if (ke)
      return t = $t.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== cr && (e = Error(o(422), { cause: a }), Il(rn(e, n)))) : (a !== cr && (t = Error(o(423), {
        cause: a
      }), Il(
        rn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = rn(a, n), i = Zr(
        e.stateNode,
        a,
        i
      ), br(e, i), lt !== 4 && (lt = 2)), !1;
    var r = Error(o(520), { cause: a });
    if (r = rn(r, n), gi === null ? gi = [r] : gi.push(r), lt !== 4 && (lt = 2), t === null) return !0;
    a = rn(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Zr(n.stateNode, a, e), br(n, e), !1;
        case 1:
          if (t = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (ca === null || !ca.has(r))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = Tf(i), Df(
              i,
              e,
              n,
              a
            ), br(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Qr = Error(o(461)), ft = !1;
  function wt(e, t, n, a) {
    t.child = e === null ? Rd(t, null, n, a) : Ra(
      t,
      e.child,
      n,
      a
    );
  }
  function Af(e, t, n, a, i) {
    n = n.render;
    var r = t.ref;
    if ("ref" in a) {
      var d = {};
      for (var g in a)
        g !== "ref" && (d[g] = a[g]);
    } else d = a;
    return Ta(t), a = _r(
      e,
      t,
      n,
      d,
      r,
      i
    ), g = Er(), e !== null && !ft ? (zr(e, t, i), qn(e, t, i)) : (ke && g && ur(t), t.flags |= 1, wt(e, t, a, i), t.child);
  }
  function Mf(e, t, n, a, i) {
    if (e === null) {
      var r = n.type;
      return typeof r == "function" && !lr(r) && r.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = r, Rf(
        e,
        t,
        r,
        a,
        i
      )) : (e = rs(
        n.type,
        null,
        a,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (r = e.child, !Pr(e, i)) {
      var d = r.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Jl, n(d, a) && e.ref === t.ref)
        return qn(e, t, i);
    }
    return t.flags |= 1, e = On(r, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Rf(e, t, n, a, i) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (Jl(r, a) && e.ref === t.ref)
        if (ft = !1, t.pendingProps = a = r, Pr(e, i))
          (e.flags & 131072) !== 0 && (ft = !0);
        else
          return t.lanes = e.lanes, qn(e, t, i);
    }
    return Vr(
      e,
      t,
      n,
      a,
      i
    );
  }
  function Of(e, t, n, a) {
    var i = a.children, r = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, i = 0; a !== null; )
            i = i | a.lanes | a.childLanes, a = a.sibling;
          a = i & ~r;
        } else a = 0, t.child = null;
        return kf(
          e,
          t,
          r,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && fs(
          t,
          r !== null ? r.cachePool : null
        ), r !== null ? Ud(t, r) : Sr(), Hd(t);
      else
        return a = t.lanes = 536870912, kf(
          e,
          t,
          r !== null ? r.baseLanes | n : n,
          n,
          a
        );
    } else
      r !== null ? (fs(t, r.cachePool), Ud(t, r), ia(), t.memoizedState = null) : (e !== null && fs(t, null), Sr(), ia());
    return wt(e, t, i, n), t.child;
  }
  function oi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function kf(e, t, n, a, i) {
    var r = vr();
    return r = r === null ? null : { parent: ot._currentValue, pool: r }, t.memoizedState = {
      baseLanes: n,
      cachePool: r
    }, e !== null && fs(t, null), Sr(), Hd(t), e !== null && dl(e, t, a, !0), t.childLanes = i, null;
  }
  function zs(e, t) {
    return t = Ds(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Uf(e, t, n) {
    return Ra(t, e.child, null, n), e = zs(t, t.pendingProps), e.flags |= 2, Jt(t), t.memoizedState = null, e;
  }
  function vg(e, t, n) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ke) {
        if (a.mode === "hidden")
          return e = zs(t, a), t.lanes = 536870912, oi(null, e);
        if (Nr(t), (e = $e) ? (e = $h(
          e,
          dn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Fn !== null ? { id: Cn, overflow: Nn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = yd(e), n.return = t, t.child = n, Ct = t, $e = null)) : e = null, e === null) throw Pn(t);
        return t.lanes = 536870912, null;
      }
      return zs(t, a);
    }
    var r = e.memoizedState;
    if (r !== null) {
      var d = r.dehydrated;
      if (Nr(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = Uf(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (ft || dl(e, t, n, !1), i = (n & e.childLanes) !== 0, ft || i) {
        if (a = Ke, a !== null && (d = nn(a, n), d !== 0 && d !== r.retryLane))
          throw r.retryLane = d, wa(e, d), Zt(a, e, d), Qr;
        Ls(), t = Uf(
          e,
          t,
          n
        );
      } else
        e = r.treeContext, $e = hn(d.nextSibling), Ct = t, ke = !0, In = null, dn = !1, e !== null && jd(t, e), t = zs(t, a), t.flags |= 4096;
      return t;
    }
    return e = On(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ts(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Vr(e, t, n, a, i) {
    return Ta(t), n = _r(
      e,
      t,
      n,
      a,
      void 0,
      i
    ), a = Er(), e !== null && !ft ? (zr(e, t, i), qn(e, t, i)) : (ke && a && ur(t), t.flags |= 1, wt(e, t, n, i), t.child);
  }
  function Hf(e, t, n, a, i, r) {
    return Ta(t), t.updateQueue = null, n = Ld(
      t,
      a,
      n,
      i
    ), Bd(e), a = Er(), e !== null && !ft ? (zr(e, t, r), qn(e, t, r)) : (ke && a && ur(t), t.flags |= 1, wt(e, t, n, r), t.child);
  }
  function Bf(e, t, n, a, i) {
    if (Ta(t), t.stateNode === null) {
      var r = ul, d = n.contextType;
      typeof d == "object" && d !== null && (r = Nt(d)), r = new n(a, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Gr, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = a, r.state = t.memoizedState, r.refs = {}, yr(t), d = n.contextType, r.context = typeof d == "object" && d !== null ? Nt(d) : ul, r.state = t.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (Xr(
        t,
        n,
        d,
        a
      ), r.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (d = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), d !== r.state && Gr.enqueueReplaceState(r, r.state, null), ii(t, a, r, i), li(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      r = t.stateNode;
      var g = t.memoizedProps, C = ka(n, g);
      r.props = C;
      var R = r.context, Q = n.contextType;
      d = ul, typeof Q == "object" && Q !== null && (d = Nt(Q));
      var $ = n.getDerivedStateFromProps;
      Q = typeof $ == "function" || typeof r.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, Q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || R !== d) && Nf(
        t,
        r,
        a,
        d
      ), ta = !1;
      var U = t.memoizedState;
      r.state = U, ii(t, a, r, i), li(), R = t.memoizedState, g || U !== R || ta ? (typeof $ == "function" && (Xr(
        t,
        n,
        $,
        a
      ), R = t.memoizedState), (C = ta || Cf(
        t,
        n,
        C,
        a,
        U,
        R,
        d
      )) ? (Q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = R), r.props = a, r.state = R, r.context = d, a = C) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      r = t.stateNode, xr(e, t), d = t.memoizedProps, Q = ka(n, d), r.props = Q, $ = t.pendingProps, U = r.context, R = n.contextType, C = ul, typeof R == "object" && R !== null && (C = Nt(R)), g = n.getDerivedStateFromProps, (R = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (d !== $ || U !== C) && Nf(
        t,
        r,
        a,
        C
      ), ta = !1, U = t.memoizedState, r.state = U, ii(t, a, r, i), li();
      var Y = t.memoizedState;
      d !== $ || U !== Y || ta || e !== null && e.dependencies !== null && os(e.dependencies) ? (typeof g == "function" && (Xr(
        t,
        n,
        g,
        a
      ), Y = t.memoizedState), (Q = ta || Cf(
        t,
        n,
        Q,
        a,
        U,
        Y,
        C
      ) || e !== null && e.dependencies !== null && os(e.dependencies)) ? (R || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(a, Y, C), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        a,
        Y,
        C
      )), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = Y), r.props = a, r.state = Y, r.context = C, a = Q) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return r = a, Ts(e, t), a = (t.flags & 128) !== 0, r || a ? (r = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && a ? (t.child = Ra(
      t,
      e.child,
      null,
      i
    ), t.child = Ra(
      t,
      null,
      n,
      i
    )) : wt(e, t, n, i), t.memoizedState = r.state, e = t.child) : e = qn(
      e,
      t,
      i
    ), e;
  }
  function Lf(e, t, n, a) {
    return Ea(), t.flags |= 256, wt(e, t, n, a), t.child;
  }
  var Kr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $r(e) {
    return { baseLanes: e, cachePool: Ed() };
  }
  function Jr(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Ft), e;
  }
  function qf(e, t, n) {
    var a = t.pendingProps, i = !1, r = (t.flags & 128) !== 0, d;
    if ((d = r) || (d = e !== null && e.memoizedState === null ? !1 : (rt.current & 2) !== 0), d && (i = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ke) {
        if (i ? la(t) : ia(), (e = $e) ? (e = $h(
          e,
          dn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Fn !== null ? { id: Cn, overflow: Nn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = yd(e), n.return = t, t.child = n, Ct = t, $e = null)) : e = null, e === null) throw Pn(t);
        return Ac(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var g = a.children;
      return a = a.fallback, i ? (ia(), i = t.mode, g = Ds(
        { mode: "hidden", children: g },
        i
      ), a = _a(
        a,
        i,
        n,
        null
      ), g.return = t, a.return = t, g.sibling = a, t.child = g, a = t.child, a.memoizedState = $r(n), a.childLanes = Jr(
        e,
        d,
        n
      ), t.memoizedState = Kr, oi(null, a)) : (la(t), Wr(t, g));
    }
    var C = e.memoizedState;
    if (C !== null && (g = C.dehydrated, g !== null)) {
      if (r)
        t.flags & 256 ? (la(t), t.flags &= -257, t = Fr(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (ia(), t.child = e.child, t.flags |= 128, t = null) : (ia(), g = a.fallback, i = t.mode, a = Ds(
          { mode: "visible", children: a.children },
          i
        ), g = _a(
          g,
          i,
          n,
          null
        ), g.flags |= 2, a.return = t, g.return = t, a.sibling = g, t.child = a, Ra(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = $r(n), a.childLanes = Jr(
          e,
          d,
          n
        ), t.memoizedState = Kr, t = oi(null, a));
      else if (la(t), Ac(g)) {
        if (d = g.nextSibling && g.nextSibling.dataset, d) var R = d.dgst;
        d = R, a = Error(o(419)), a.stack = "", a.digest = d, Il({ value: a, source: null, stack: null }), t = Fr(
          e,
          t,
          n
        );
      } else if (ft || dl(e, t, n, !1), d = (n & e.childLanes) !== 0, ft || d) {
        if (d = Ke, d !== null && (a = nn(d, n), a !== 0 && a !== C.retryLane))
          throw C.retryLane = a, wa(e, a), Zt(d, e, a), Qr;
        Dc(g) || Ls(), t = Fr(
          e,
          t,
          n
        );
      } else
        Dc(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = C.treeContext, $e = hn(
          g.nextSibling
        ), Ct = t, ke = !0, In = null, dn = !1, e !== null && jd(t, e), t = Wr(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (ia(), g = a.fallback, i = t.mode, C = e.child, R = C.sibling, a = On(C, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = C.subtreeFlags & 65011712, R !== null ? g = On(
      R,
      g
    ) : (g = _a(
      g,
      i,
      n,
      null
    ), g.flags |= 2), g.return = t, a.return = t, a.sibling = g, t.child = a, oi(null, a), a = t.child, g = e.child.memoizedState, g === null ? g = $r(n) : (i = g.cachePool, i !== null ? (C = ot._currentValue, i = i.parent !== C ? { parent: C, pool: C } : i) : i = Ed(), g = {
      baseLanes: g.baseLanes | n,
      cachePool: i
    }), a.memoizedState = g, a.childLanes = Jr(
      e,
      d,
      n
    ), t.memoizedState = Kr, oi(e.child, a)) : (la(t), n = e.child, e = n.sibling, n = On(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [e], t.flags |= 16) : d.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Wr(e, t) {
    return t = Ds(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ds(e, t) {
    return e = Kt(22, e, null, t), e.lanes = 0, e;
  }
  function Fr(e, t, n) {
    return Ra(t, e.child, null, n), e = Wr(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Yf(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), fr(e.return, t, n);
  }
  function Ir(e, t, n, a, i, r) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: i,
      treeForkCount: r
    } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = a, d.tail = n, d.tailMode = i, d.treeForkCount = r);
  }
  function Xf(e, t, n) {
    var a = t.pendingProps, i = a.revealOrder, r = a.tail;
    a = a.children;
    var d = rt.current, g = (d & 2) !== 0;
    if (g ? (d = d & 1 | 2, t.flags |= 128) : d &= 1, ee(rt, d), wt(e, t, a, n), a = ke ? Fl : 0, !g && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Yf(e, n, t);
        else if (e.tag === 19)
          Yf(e, n, t);
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
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          e = n.alternate, e !== null && ys(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ir(
          t,
          !1,
          i,
          n,
          r,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && ys(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Ir(
          t,
          !0,
          n,
          null,
          r,
          a
        );
        break;
      case "together":
        Ir(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function qn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ra |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (dl(
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
      for (e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = On(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Pr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && os(e)));
  }
  function gg(e, t, n) {
    switch (t.tag) {
      case 3:
        j(t, t.stateNode.containerInfo), ea(t, ot, e.memoizedState.cache), Ea();
        break;
      case 27:
      case 5:
        L(t);
        break;
      case 4:
        j(t, t.stateNode.containerInfo);
        break;
      case 10:
        ea(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Nr(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (la(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? qf(e, t, n) : (la(t), e = qn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        la(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (dl(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), i) {
          if (a)
            return Xf(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ee(rt, rt.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Of(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        ea(t, ot, e.memoizedState.cache);
    }
    return qn(e, t, n);
  }
  function Gf(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ft = !0;
      else {
        if (!Pr(e, n) && (t.flags & 128) === 0)
          return ft = !1, gg(
            e,
            t,
            n
          );
        ft = (e.flags & 131072) !== 0;
      }
    else
      ft = !1, ke && (t.flags & 1048576) !== 0 && bd(t, Fl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Aa(t.elementType), t.type = e, typeof e == "function")
            lr(e) ? (a = ka(e, a), t.tag = 1, t = Bf(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = Vr(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === ne) {
                t.tag = 11, t = Af(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (i === P) {
                t.tag = 14, t = Mf(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = xe(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Vr(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, i = ka(
          a,
          t.pendingProps
        ), Bf(
          e,
          t,
          a,
          i,
          n
        );
      case 3:
        e: {
          if (j(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          a = t.pendingProps;
          var r = t.memoizedState;
          i = r.element, xr(e, t), ii(t, a, null, n);
          var d = t.memoizedState;
          if (a = d.cache, ea(t, ot, a), a !== r.cache && hr(
            t,
            [ot],
            n,
            !0
          ), li(), a = d.element, r.isDehydrated)
            if (r = {
              element: a,
              isDehydrated: !1,
              cache: d.cache
            }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
              t = Lf(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== i) {
              i = rn(
                Error(o(424)),
                t
              ), Il(i), t = Lf(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, $e = hn(e.firstChild), Ct = t, ke = !0, In = null, dn = !0, n = Rd(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ea(), a === i) {
              t = qn(
                e,
                t,
                n
              );
              break e;
            }
            wt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ts(e, t), e === null ? (n = em(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : ke || (n = t.type, e = t.pendingProps, a = Vs(
          E.current
        ).createElement(n), a[St] = t, a[Bt] = e, _t(a, n, e), yt(a), t.stateNode = a) : t.memoizedState = em(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return L(t), e === null && ke && (a = t.stateNode = Fh(
          t.type,
          t.pendingProps,
          E.current
        ), Ct = t, dn = !0, i = $e, ha(t.type) ? (Mc = i, $e = hn(a.firstChild)) : $e = i), wt(
          e,
          t,
          t.pendingProps.children,
          n
        ), Ts(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ke && ((i = a = $e) && (a = Kg(
          a,
          t.type,
          t.pendingProps,
          dn
        ), a !== null ? (t.stateNode = a, Ct = t, $e = hn(a.firstChild), dn = !1, i = !0) : i = !1), i || Pn(t)), L(t), i = t.type, r = t.pendingProps, d = e !== null ? e.memoizedProps : null, a = r.children, Ec(i, r) ? a = null : d !== null && Ec(i, d) && (t.flags |= 32), t.memoizedState !== null && (i = _r(
          e,
          t,
          rg,
          null,
          null,
          n
        ), wi._currentValue = i), Ts(e, t), wt(e, t, a, n), t.child;
      case 6:
        return e === null && ke && ((e = n = $e) && (n = $g(
          n,
          t.pendingProps,
          dn
        ), n !== null ? (t.stateNode = n, Ct = t, $e = null, e = !0) : e = !1), e || Pn(t)), null;
      case 13:
        return qf(e, t, n);
      case 4:
        return j(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Ra(
          t,
          null,
          a,
          n
        ) : wt(e, t, a, n), t.child;
      case 11:
        return Af(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return wt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return wt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return wt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return a = t.pendingProps, ea(t, t.type, a.value), wt(e, t, a.children, n), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, Ta(t), i = Nt(i), a = a(i), t.flags |= 1, wt(e, t, a, n), t.child;
      case 14:
        return Mf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Rf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Xf(e, t, n);
      case 31:
        return vg(e, t, n);
      case 22:
        return Of(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ta(t), a = Nt(ot), e === null ? (i = vr(), i === null && (i = Ke, r = mr(), i.pooledCache = r, r.refCount++, r !== null && (i.pooledCacheLanes |= n), i = r), t.memoizedState = { parent: a, cache: i }, yr(t), ea(t, ot, i)) : ((e.lanes & n) !== 0 && (xr(e, t), ii(t, null, null, n), li()), i = e.memoizedState, r = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), ea(t, ot, a)) : (a = r.cache, ea(t, ot, a), a !== i.cache && hr(
          t,
          [ot],
          n,
          !0
        ))), wt(
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
  function Yn(e) {
    e.flags |= 4;
  }
  function ec(e, t, n, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (vh()) e.flags |= 8192;
        else
          throw Ma = ms, gr;
    } else e.flags &= -16777217;
  }
  function Zf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !im(t))
      if (vh()) e.flags |= 8192;
      else
        throw Ma = ms, gr;
  }
  function As(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? zt() : 536870912, e.lanes |= t, Cl |= t);
  }
  function di(e, t) {
    if (!ke)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function yg(e, t, n) {
    var a = t.pendingProps;
    switch (rr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Je(t), null;
      case 1:
        return Je(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Hn(ot), A(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ol(t) ? Yn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, or())), Je(t), null;
      case 26:
        var i = t.type, r = t.memoizedState;
        return e === null ? (Yn(t), r !== null ? (Je(t), Zf(t, r)) : (Je(t), ec(
          t,
          i,
          null,
          a,
          n
        ))) : r ? r !== e.memoizedState ? (Yn(t), Je(t), Zf(t, r)) : (Je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Yn(t), Je(t), ec(
          t,
          i,
          e,
          a,
          n
        )), null;
      case 27:
        if (re(t), n = E.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Yn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Je(t), null;
          }
          e = ie.current, ol(t) ? Sd(t) : (e = Fh(i, a, n), t.stateNode = e, Yn(t));
        }
        return Je(t), null;
      case 5:
        if (re(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Yn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Je(t), null;
          }
          if (r = ie.current, ol(t))
            Sd(t);
          else {
            var d = Vs(
              E.current
            );
            switch (r) {
              case 1:
                r = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                r = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    r = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    r = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    r = d.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof a.is == "string" ? d.createElement("select", {
                      is: a.is
                    }) : d.createElement("select"), a.multiple ? r.multiple = !0 : a.size && (r.size = a.size);
                    break;
                  default:
                    r = typeof a.is == "string" ? d.createElement(i, { is: a.is }) : d.createElement(i);
                }
            }
            r[St] = t, r[Bt] = a;
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                r.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t)
                  break e;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            t.stateNode = r;
            e: switch (_t(r, i, a), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && Yn(t);
          }
        }
        return Je(t), ec(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Yn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = E.current, ol(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, i = Ct, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[St] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || qh(e.nodeValue, n)), e || Pn(t, !0);
          } else
            e = Vs(e).createTextNode(
              a
            ), e[St] = t, t.stateNode = e;
        }
        return Je(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = ol(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[St] = t;
            } else
              Ea(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), e = !1;
          } else
            n = or(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Jt(t), t) : (Jt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Je(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = ol(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(o(317));
              i[St] = t;
            } else
              Ea(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), i = !1;
          } else
            i = or(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Jt(t), t) : (Jt(t), null);
        }
        return Jt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), r = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (r = a.memoizedState.cachePool.pool), r !== i && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), As(t, t.updateQueue), Je(t), null);
      case 4:
        return A(), e === null && Sc(t.stateNode.containerInfo), Je(t), null;
      case 10:
        return Hn(t.type), Je(t), null;
      case 19:
        if (q(rt), a = t.memoizedState, a === null) return Je(t), null;
        if (i = (t.flags & 128) !== 0, r = a.rendering, r === null)
          if (i) di(a, !1);
          else {
            if (lt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (r = ys(e), r !== null) {
                  for (t.flags |= 128, di(a, !1), e = r.updateQueue, t.updateQueue = e, As(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    gd(n, e), n = n.sibling;
                  return ee(
                    rt,
                    rt.current & 1 | 2
                  ), ke && kn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && et() > Us && (t.flags |= 128, i = !0, di(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = ys(r), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, As(t, e), di(a, !0), a.tail === null && a.tailMode === "hidden" && !r.alternate && !ke)
                return Je(t), null;
            } else
              2 * et() - a.renderingStartTime > Us && n !== 536870912 && (t.flags |= 128, i = !0, di(a, !1), t.lanes = 4194304);
          a.isBackwards ? (r.sibling = t.child, t.child = r) : (e = a.last, e !== null ? e.sibling = r : t.child = r, a.last = r);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = et(), e.sibling = null, n = rt.current, ee(
          rt,
          i ? n & 1 | 2 : n & 1
        ), ke && kn(t, a.treeForkCount), e) : (Je(t), null);
      case 22:
      case 23:
        return Jt(t), Cr(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), n = t.updateQueue, n !== null && As(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && q(Da), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Hn(ot), Je(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function xg(e, t) {
    switch (rr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Hn(ot), A(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return re(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Jt(t), t.alternate === null)
            throw Error(o(340));
          Ea();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Jt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Ea();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return q(rt), null;
      case 4:
        return A(), null;
      case 10:
        return Hn(t.type), null;
      case 22:
      case 23:
        return Jt(t), Cr(), e !== null && q(Da), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Hn(ot), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qf(e, t) {
    switch (rr(t), t.tag) {
      case 3:
        Hn(ot), A();
        break;
      case 26:
      case 27:
      case 5:
        re(t);
        break;
      case 4:
        A();
        break;
      case 31:
        t.memoizedState !== null && Jt(t);
        break;
      case 13:
        Jt(t);
        break;
      case 19:
        q(rt);
        break;
      case 10:
        Hn(t.type);
        break;
      case 22:
      case 23:
        Jt(t), Cr(), e !== null && q(Da);
        break;
      case 24:
        Hn(ot);
    }
  }
  function fi(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var r = n.create, d = n.inst;
            a = r(), d.destroy = a;
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (g) {
      Xe(t, t.return, g);
    }
  }
  function sa(e, t, n) {
    try {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var r = i.next;
        a = r;
        do {
          if ((a.tag & e) === e) {
            var d = a.inst, g = d.destroy;
            if (g !== void 0) {
              d.destroy = void 0, i = t;
              var C = n, R = g;
              try {
                R();
              } catch (Q) {
                Xe(
                  i,
                  C,
                  Q
                );
              }
            }
          }
          a = a.next;
        } while (a !== r);
      }
    } catch (Q) {
      Xe(t, t.return, Q);
    }
  }
  function Vf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        kd(t, n);
      } catch (a) {
        Xe(e, e.return, a);
      }
    }
  }
  function Kf(e, t, n) {
    n.props = ka(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Xe(e, t, a);
    }
  }
  function hi(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(a) : n.current = a;
      }
    } catch (i) {
      Xe(e, t, i);
    }
  }
  function wn(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          Xe(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Xe(e, t, i);
        }
      else n.current = null;
  }
  function $f(e) {
    var t = e.type, n = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (i) {
      Xe(e, e.return, i);
    }
  }
  function tc(e, t, n) {
    try {
      var a = e.stateNode;
      Yg(a, e.type, n, t), a[Bt] = t;
    } catch (i) {
      Xe(e, e.return, i);
    }
  }
  function Jf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ha(e.type) || e.tag === 4;
  }
  function nc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Jf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ha(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ac(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Mn));
    else if (a !== 4 && (a === 27 && ha(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (ac(e, t, n), e = e.sibling; e !== null; )
        ac(e, t, n), e = e.sibling;
  }
  function Ms(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && ha(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Ms(e, t, n), e = e.sibling; e !== null; )
        Ms(e, t, n), e = e.sibling;
  }
  function Wf(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      _t(t, a, n), t[St] = e, t[Bt] = n;
    } catch (r) {
      Xe(e, e.return, r);
    }
  }
  var Xn = !1, ht = !1, lc = !1, Ff = typeof WeakSet == "function" ? WeakSet : Set, xt = null;
  function bg(e, t) {
    if (e = e.containerInfo, wc = Ps, e = rd(e), Fu(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var i = a.anchorOffset, r = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, r.nodeType;
            } catch {
              n = null;
              break e;
            }
            var d = 0, g = -1, C = -1, R = 0, Q = 0, $ = e, U = null;
            t: for (; ; ) {
              for (var Y; $ !== n || i !== 0 && $.nodeType !== 3 || (g = d + i), $ !== r || a !== 0 && $.nodeType !== 3 || (C = d + a), $.nodeType === 3 && (d += $.nodeValue.length), (Y = $.firstChild) !== null; )
                U = $, $ = Y;
              for (; ; ) {
                if ($ === e) break t;
                if (U === n && ++R === i && (g = d), U === r && ++Q === a && (C = d), (Y = $.nextSibling) !== null) break;
                $ = U, U = $.parentNode;
              }
              $ = Y;
            }
            n = g === -1 || C === -1 ? null : { start: g, end: C };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (_c = { focusedElem: e, selectionRange: n }, Ps = !1, xt = t; xt !== null; )
      if (t = xt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, xt = e;
      else
        for (; xt !== null; ) {
          switch (t = xt, r = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  i = e[n], i.ref.impl = i.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && r !== null) {
                e = void 0, n = t, i = r.memoizedProps, r = r.memoizedState, a = n.stateNode;
                try {
                  var he = ka(
                    n.type,
                    i
                  );
                  e = a.getSnapshotBeforeUpdate(
                    he,
                    r
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (je) {
                  Xe(
                    n,
                    n.return,
                    je
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Tc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Tc(e);
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
            e.return = t.return, xt = e;
            break;
          }
          xt = t.return;
        }
  }
  function If(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Zn(e, n), a & 4 && fi(5, n);
        break;
      case 1:
        if (Zn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (d) {
              Xe(n, n.return, d);
            }
          else {
            var i = ka(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                i,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (d) {
              Xe(
                n,
                n.return,
                d
              );
            }
          }
        a & 64 && Vf(n), a & 512 && hi(n, n.return);
        break;
      case 3:
        if (Zn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
            kd(e, t);
          } catch (d) {
            Xe(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Wf(n);
      case 26:
      case 5:
        Zn(e, n), t === null && a & 4 && $f(n), a & 512 && hi(n, n.return);
        break;
      case 12:
        Zn(e, n);
        break;
      case 31:
        Zn(e, n), a & 4 && th(e, n);
        break;
      case 13:
        Zn(e, n), a & 4 && nh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Tg.bind(
          null,
          n
        ), Jg(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || Xn, !a) {
          t = t !== null && t.memoizedState !== null || ht, i = Xn;
          var r = ht;
          Xn = a, (ht = t) && !r ? Qn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Zn(e, n), Xn = i, ht = r;
        }
        break;
      case 30:
        break;
      default:
        Zn(e, n);
    }
  }
  function Pf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ou(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var We = null, qt = !1;
  function Gn(e, t, n) {
    for (n = n.child; n !== null; )
      eh(e, t, n), n = n.sibling;
  }
  function eh(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(ba, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        ht || wn(n, t), Gn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        ht || wn(n, t);
        var a = We, i = qt;
        ha(n.type) && (We = n.stateNode, qt = !1), Gn(
          e,
          t,
          n
        ), Si(n.stateNode), We = a, qt = i;
        break;
      case 5:
        ht || wn(n, t);
      case 6:
        if (a = We, i = qt, We = null, Gn(
          e,
          t,
          n
        ), We = a, qt = i, We !== null)
          if (qt)
            try {
              (We.nodeType === 9 ? We.body : We.nodeName === "HTML" ? We.ownerDocument.body : We).removeChild(n.stateNode);
            } catch (r) {
              Xe(
                n,
                t,
                r
              );
            }
          else
            try {
              We.removeChild(n.stateNode);
            } catch (r) {
              Xe(
                n,
                t,
                r
              );
            }
        break;
      case 18:
        We !== null && (qt ? (e = We, Vh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Al(e)) : Vh(We, n.stateNode));
        break;
      case 4:
        a = We, i = qt, We = n.stateNode.containerInfo, qt = !0, Gn(
          e,
          t,
          n
        ), We = a, qt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        sa(2, n, t), ht || sa(4, n, t), Gn(
          e,
          t,
          n
        );
        break;
      case 1:
        ht || (wn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Kf(
          n,
          t,
          a
        )), Gn(
          e,
          t,
          n
        );
        break;
      case 21:
        Gn(
          e,
          t,
          n
        );
        break;
      case 22:
        ht = (a = ht) || n.memoizedState !== null, Gn(
          e,
          t,
          n
        ), ht = a;
        break;
      default:
        Gn(
          e,
          t,
          n
        );
    }
  }
  function th(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Al(e);
      } catch (n) {
        Xe(t, t.return, n);
      }
    }
  }
  function nh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Al(e);
      } catch (n) {
        Xe(t, t.return, n);
      }
  }
  function jg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Ff()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Ff()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Rs(e, t) {
    var n = jg(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var i = Dg.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function Yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a], r = e, d = t, g = d;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (ha(g.type)) {
                We = g.stateNode, qt = !1;
                break e;
              }
              break;
            case 5:
              We = g.stateNode, qt = !1;
              break e;
            case 3:
            case 4:
              We = g.stateNode.containerInfo, qt = !0;
              break e;
          }
          g = g.return;
        }
        if (We === null) throw Error(o(160));
        eh(r, d, i), We = null, qt = !1, r = i.alternate, r !== null && (r.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        ah(t, e), t = t.sibling;
  }
  var xn = null;
  function ah(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Yt(t, e), Xt(e), a & 4 && (sa(3, e, e.return), fi(3, e), sa(5, e, e.return));
        break;
      case 1:
        Yt(t, e), Xt(e), a & 512 && (ht || n === null || wn(n, n.return)), a & 64 && Xn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var i = xn;
        if (Yt(t, e), Xt(e), a & 512 && (ht || n === null || wn(n, n.return)), a & 4) {
          var r = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      r = i.getElementsByTagName("title")[0], (!r || r[ql] || r[St] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = i.createElement(a), i.head.insertBefore(
                        r,
                        i.querySelector("head > title")
                      )), _t(r, a, n), r[St] = e, yt(r), a = r;
                      break e;
                    case "link":
                      var d = am(
                        "link",
                        "href",
                        i
                      ).get(a + (n.href || ""));
                      if (d) {
                        for (var g = 0; g < d.length; g++)
                          if (r = d[g], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      r = i.createElement(a), _t(r, a, n), i.head.appendChild(r);
                      break;
                    case "meta":
                      if (d = am(
                        "meta",
                        "content",
                        i
                      ).get(a + (n.content || ""))) {
                        for (g = 0; g < d.length; g++)
                          if (r = d[g], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      r = i.createElement(a), _t(r, a, n), i.head.appendChild(r);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  r[St] = e, yt(r), a = r;
                }
                e.stateNode = a;
              } else
                lm(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = nm(
                i,
                a,
                e.memoizedProps
              );
          else
            r !== a ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, a === null ? lm(
              i,
              e.type,
              e.stateNode
            ) : nm(
              i,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && tc(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Yt(t, e), Xt(e), a & 512 && (ht || n === null || wn(n, n.return)), n !== null && a & 4 && tc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Yt(t, e), Xt(e), a & 512 && (ht || n === null || wn(n, n.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            el(i, "");
          } catch (he) {
            Xe(e, e.return, he);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, tc(
          e,
          i,
          n !== null ? n.memoizedProps : i
        )), a & 1024 && (lc = !0);
        break;
      case 6:
        if (Yt(t, e), Xt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (he) {
            Xe(e, e.return, he);
          }
        }
        break;
      case 3:
        if (Js = null, i = xn, xn = Ks(t.containerInfo), Yt(t, e), xn = i, Xt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Al(t.containerInfo);
          } catch (he) {
            Xe(e, e.return, he);
          }
        lc && (lc = !1, lh(e));
        break;
      case 4:
        a = xn, xn = Ks(
          e.stateNode.containerInfo
        ), Yt(t, e), Xt(e), xn = a;
        break;
      case 12:
        Yt(t, e), Xt(e);
        break;
      case 31:
        Yt(t, e), Xt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Rs(e, a)));
        break;
      case 13:
        Yt(t, e), Xt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ks = et()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Rs(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var C = n !== null && n.memoizedState !== null, R = Xn, Q = ht;
        if (Xn = R || i, ht = Q || C, Yt(t, e), ht = Q, Xn = R, Xt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || C || Xn || ht || Ua(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                C = n = t;
                try {
                  if (r = C.stateNode, i)
                    d = r.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    g = C.stateNode;
                    var $ = C.memoizedProps.style, U = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    g.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (he) {
                  Xe(C, C.return, he);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                C = t;
                try {
                  C.stateNode.nodeValue = i ? "" : C.memoizedProps;
                } catch (he) {
                  Xe(C, C.return, he);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                C = t;
                try {
                  var Y = C.stateNode;
                  i ? Kh(Y, !0) : Kh(C.stateNode, !1);
                } catch (he) {
                  Xe(C, C.return, he);
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
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Rs(e, n))));
        break;
      case 19:
        Yt(t, e), Xt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Rs(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Yt(t, e), Xt(e);
    }
  }
  function Xt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Jf(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode, r = nc(e);
            Ms(e, r, i);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (el(d, ""), n.flags &= -33);
            var g = nc(e);
            Ms(e, g, d);
            break;
          case 3:
          case 4:
            var C = n.stateNode.containerInfo, R = nc(e);
            ac(
              e,
              R,
              C
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (Q) {
        Xe(e, e.return, Q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function lh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        lh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Zn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        If(e, t.alternate, t), t = t.sibling;
  }
  function Ua(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          sa(4, t, t.return), Ua(t);
          break;
        case 1:
          wn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Kf(
            t,
            t.return,
            n
          ), Ua(t);
          break;
        case 27:
          Si(t.stateNode);
        case 26:
        case 5:
          wn(t, t.return), Ua(t);
          break;
        case 22:
          t.memoizedState === null && Ua(t);
          break;
        case 30:
          Ua(t);
          break;
        default:
          Ua(t);
      }
      e = e.sibling;
    }
  }
  function Qn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, i = e, r = t, d = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Qn(
            i,
            r,
            n
          ), fi(4, r);
          break;
        case 1:
          if (Qn(
            i,
            r,
            n
          ), a = r, i = a.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (R) {
              Xe(a, a.return, R);
            }
          if (a = r, i = a.updateQueue, i !== null) {
            var g = a.stateNode;
            try {
              var C = i.shared.hiddenCallbacks;
              if (C !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < C.length; i++)
                  Od(C[i], g);
            } catch (R) {
              Xe(a, a.return, R);
            }
          }
          n && d & 64 && Vf(r), hi(r, r.return);
          break;
        case 27:
          Wf(r);
        case 26:
        case 5:
          Qn(
            i,
            r,
            n
          ), n && a === null && d & 4 && $f(r), hi(r, r.return);
          break;
        case 12:
          Qn(
            i,
            r,
            n
          );
          break;
        case 31:
          Qn(
            i,
            r,
            n
          ), n && d & 4 && th(i, r);
          break;
        case 13:
          Qn(
            i,
            r,
            n
          ), n && d & 4 && nh(i, r);
          break;
        case 22:
          r.memoizedState === null && Qn(
            i,
            r,
            n
          ), hi(r, r.return);
          break;
        case 30:
          break;
        default:
          Qn(
            i,
            r,
            n
          );
      }
      t = t.sibling;
    }
  }
  function ic(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Pl(n));
  }
  function sc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Pl(e));
  }
  function bn(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ih(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function ih(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        bn(
          e,
          t,
          n,
          a
        ), i & 2048 && fi(9, t);
        break;
      case 1:
        bn(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        bn(
          e,
          t,
          n,
          a
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Pl(e)));
        break;
      case 12:
        if (i & 2048) {
          bn(
            e,
            t,
            n,
            a
          ), e = t.stateNode;
          try {
            var r = t.memoizedProps, d = r.id, g = r.onPostCommit;
            typeof g == "function" && g(
              d,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (C) {
            Xe(t, t.return, C);
          }
        } else
          bn(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        bn(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        bn(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        r = t.stateNode, d = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? bn(
          e,
          t,
          n,
          a
        ) : mi(e, t) : r._visibility & 2 ? bn(
          e,
          t,
          n,
          a
        ) : (r._visibility |= 2, bl(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && ic(d, t);
        break;
      case 24:
        bn(
          e,
          t,
          n,
          a
        ), i & 2048 && sc(t.alternate, t);
        break;
      default:
        bn(
          e,
          t,
          n,
          a
        );
    }
  }
  function bl(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var r = e, d = t, g = n, C = a, R = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          bl(
            r,
            d,
            g,
            C,
            i
          ), fi(8, d);
          break;
        case 23:
          break;
        case 22:
          var Q = d.stateNode;
          d.memoizedState !== null ? Q._visibility & 2 ? bl(
            r,
            d,
            g,
            C,
            i
          ) : mi(
            r,
            d
          ) : (Q._visibility |= 2, bl(
            r,
            d,
            g,
            C,
            i
          )), i && R & 2048 && ic(
            d.alternate,
            d
          );
          break;
        case 24:
          bl(
            r,
            d,
            g,
            C,
            i
          ), i && R & 2048 && sc(d.alternate, d);
          break;
        default:
          bl(
            r,
            d,
            g,
            C,
            i
          );
      }
      t = t.sibling;
    }
  }
  function mi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            mi(n, a), i & 2048 && ic(
              a.alternate,
              a
            );
            break;
          case 24:
            mi(n, a), i & 2048 && sc(a.alternate, a);
            break;
          default:
            mi(n, a);
        }
        t = t.sibling;
      }
  }
  var pi = 8192;
  function jl(e, t, n) {
    if (e.subtreeFlags & pi)
      for (e = e.child; e !== null; )
        sh(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function sh(e, t, n) {
    switch (e.tag) {
      case 26:
        jl(
          e,
          t,
          n
        ), e.flags & pi && e.memoizedState !== null && uy(
          n,
          xn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        jl(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = xn;
        xn = Ks(e.stateNode.containerInfo), jl(
          e,
          t,
          n
        ), xn = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = pi, pi = 16777216, jl(
          e,
          t,
          n
        ), pi = a) : jl(
          e,
          t,
          n
        ));
        break;
      default:
        jl(
          e,
          t,
          n
        );
    }
  }
  function uh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function vi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          xt = a, ch(
            a,
            e
          );
        }
      uh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        rh(e), e = e.sibling;
  }
  function rh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        vi(e), e.flags & 2048 && sa(9, e, e.return);
        break;
      case 3:
        vi(e);
        break;
      case 12:
        vi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Os(e)) : vi(e);
        break;
      default:
        vi(e);
    }
  }
  function Os(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          xt = a, ch(
            a,
            e
          );
        }
      uh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          sa(8, t, t.return), Os(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Os(t));
          break;
        default:
          Os(t);
      }
      e = e.sibling;
    }
  }
  function ch(e, t) {
    for (; xt !== null; ) {
      var n = xt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          sa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Pl(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, xt = a;
      else
        e: for (n = e; xt !== null; ) {
          a = xt;
          var i = a.sibling, r = a.return;
          if (Pf(a), a === n) {
            xt = null;
            break e;
          }
          if (i !== null) {
            i.return = r, xt = i;
            break e;
          }
          xt = r;
        }
    }
  }
  var Sg = {
    getCacheForType: function(e) {
      var t = Nt(ot), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Nt(ot).controller.signal;
    }
  }, Cg = typeof WeakMap == "function" ? WeakMap : Map, Le = 0, Ke = null, De = null, Re = 0, Ye = 0, Wt = null, ua = !1, Sl = !1, uc = !1, Vn = 0, lt = 0, ra = 0, Ha = 0, rc = 0, Ft = 0, Cl = 0, gi = null, Gt = null, cc = !1, ks = 0, oh = 0, Us = 1 / 0, Hs = null, ca = null, pt = 0, oa = null, Nl = null, Kn = 0, oc = 0, dc = null, dh = null, yi = 0, fc = null;
  function It() {
    return (Le & 2) !== 0 && Re !== 0 ? Re & -Re : k.T !== null ? yc() : gn();
  }
  function fh() {
    if (Ft === 0)
      if ((Re & 536870912) === 0 || ke) {
        var e = Ka;
        Ka <<= 1, (Ka & 3932160) === 0 && (Ka = 262144), Ft = e;
      } else Ft = 536870912;
    return e = $t.current, e !== null && (e.flags |= 32), Ft;
  }
  function Zt(e, t, n) {
    (e === Ke && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) && (wl(e, 0), da(
      e,
      Re,
      Ft,
      !1
    )), tn(e, n), ((Le & 2) === 0 || e !== Ke) && (e === Ke && ((Le & 2) === 0 && (Ha |= n), lt === 4 && da(
      e,
      Re,
      Ft,
      !1
    )), _n(e));
  }
  function hh(e, t, n) {
    if ((Le & 6) !== 0) throw Error(o(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || kt(e, t), i = a ? _g(e, t) : mc(e, t, !0), r = a;
    do {
      if (i === 0) {
        Sl && !a && da(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, r && !Ng(n)) {
          i = mc(e, t, !1), r = !1;
          continue;
        }
        if (i === 2) {
          if (r = t, e.errorRecoveryDisabledLanes & r)
            var d = 0;
          else
            d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
          if (d !== 0) {
            t = d;
            e: {
              var g = e;
              i = gi;
              var C = g.current.memoizedState.isDehydrated;
              if (C && (wl(g, d).flags |= 256), d = mc(
                g,
                d,
                !1
              ), d !== 2) {
                if (uc && !C) {
                  g.errorRecoveryDisabledLanes |= r, Ha |= r, i = 4;
                  break e;
                }
                r = Gt, Gt = i, r !== null && (Gt === null ? Gt = r : Gt.push.apply(
                  Gt,
                  r
                ));
              }
              i = d;
            }
            if (r = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          wl(e, 0), da(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, r = i, r) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              da(
                a,
                t,
                Ft,
                !ua
              );
              break e;
            case 2:
              Gt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (i = ks + 300 - et(), 10 < i)) {
            if (da(
              a,
              t,
              Ft,
              !ua
            ), gt(a, 0, !0) !== 0) break e;
            Kn = t, a.timeoutHandle = Zh(
              mh.bind(
                null,
                a,
                n,
                Gt,
                Hs,
                cc,
                t,
                Ft,
                Ha,
                Cl,
                ua,
                r,
                "Throttled",
                -0,
                0
              ),
              i
            );
            break e;
          }
          mh(
            a,
            n,
            Gt,
            Hs,
            cc,
            t,
            Ft,
            Ha,
            Cl,
            ua,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    _n(e);
  }
  function mh(e, t, n, a, i, r, d, g, C, R, Q, $, U, Y) {
    if (e.timeoutHandle = -1, $ = t.subtreeFlags, $ & 8192 || ($ & 16785408) === 16785408) {
      $ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Mn
      }, sh(
        t,
        r,
        $
      );
      var he = (r & 62914560) === r ? ks - et() : (r & 4194048) === r ? oh - et() : 0;
      if (he = ry(
        $,
        he
      ), he !== null) {
        Kn = r, e.cancelPendingCommit = he(
          Sh.bind(
            null,
            e,
            t,
            r,
            n,
            a,
            i,
            d,
            g,
            C,
            Q,
            $,
            null,
            U,
            Y
          )
        ), da(e, r, d, !R);
        return;
      }
    }
    Sh(
      e,
      t,
      r,
      n,
      a,
      i,
      d,
      g,
      C
    );
  }
  function Ng(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var i = n[a], r = i.getSnapshot;
          i = i.value;
          try {
            if (!Vt(r(), i)) return !1;
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
  function da(e, t, n, a) {
    t &= ~rc, t &= ~Ha, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var r = 31 - Et(i), d = 1 << r;
      a[r] = -1, i &= ~d;
    }
    n !== 0 && vn(e, n, t);
  }
  function Bs() {
    return (Le & 6) === 0 ? (xi(0), !1) : !0;
  }
  function hc() {
    if (De !== null) {
      if (Ye === 0)
        var e = De.return;
      else
        e = De, Un = za = null, Tr(e), pl = null, ti = 0, e = De;
      for (; e !== null; )
        Qf(e.alternate, e), e = e.return;
      De = null;
    }
  }
  function wl(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Zg(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Kn = 0, hc(), Ke = e, De = n = On(e.current, null), Re = t, Ye = 0, Wt = null, ua = !1, Sl = kt(e, t), uc = !1, Cl = Ft = rc = Ha = ra = lt = 0, Gt = gi = null, cc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Et(a), r = 1 << i;
        t |= e[i], a &= ~r;
      }
    return Vn = t, is(), n;
  }
  function ph(e, t) {
    ze = null, k.H = ci, t === ml || t === hs ? (t = Dd(), Ye = 3) : t === gr ? (t = Dd(), Ye = 4) : Ye = t === Qr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Wt = t, De === null && (lt = 1, Es(
      e,
      rn(t, e.current)
    ));
  }
  function vh() {
    var e = $t.current;
    return e === null ? !0 : (Re & 4194048) === Re ? fn === null : (Re & 62914560) === Re || (Re & 536870912) !== 0 ? e === fn : !1;
  }
  function gh() {
    var e = k.H;
    return k.H = ci, e === null ? ci : e;
  }
  function yh() {
    var e = k.A;
    return k.A = Sg, e;
  }
  function Ls() {
    lt = 4, ua || (Re & 4194048) !== Re && $t.current !== null || (Sl = !0), (ra & 134217727) === 0 && (Ha & 134217727) === 0 || Ke === null || da(
      Ke,
      Re,
      Ft,
      !1
    );
  }
  function mc(e, t, n) {
    var a = Le;
    Le |= 2;
    var i = gh(), r = yh();
    (Ke !== e || Re !== t) && (Hs = null, wl(e, t)), t = !1;
    var d = lt;
    e: do
      try {
        if (Ye !== 0 && De !== null) {
          var g = De, C = Wt;
          switch (Ye) {
            case 8:
              hc(), d = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              $t.current === null && (t = !0);
              var R = Ye;
              if (Ye = 0, Wt = null, _l(e, g, C, R), n && Sl) {
                d = 0;
                break e;
              }
              break;
            default:
              R = Ye, Ye = 0, Wt = null, _l(e, g, C, R);
          }
        }
        wg(), d = lt;
        break;
      } catch (Q) {
        ph(e, Q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Un = za = null, Le = a, k.H = i, k.A = r, De === null && (Ke = null, Re = 0, is()), d;
  }
  function wg() {
    for (; De !== null; ) xh(De);
  }
  function _g(e, t) {
    var n = Le;
    Le |= 2;
    var a = gh(), i = yh();
    Ke !== e || Re !== t ? (Hs = null, Us = et() + 500, wl(e, t)) : Sl = kt(
      e,
      t
    );
    e: do
      try {
        if (Ye !== 0 && De !== null) {
          t = De;
          var r = Wt;
          t: switch (Ye) {
            case 1:
              Ye = 0, Wt = null, _l(e, t, r, 1);
              break;
            case 2:
            case 9:
              if (zd(r)) {
                Ye = 0, Wt = null, bh(t);
                break;
              }
              t = function() {
                Ye !== 2 && Ye !== 9 || Ke !== e || (Ye = 7), _n(e);
              }, r.then(t, t);
              break e;
            case 3:
              Ye = 7;
              break e;
            case 4:
              Ye = 5;
              break e;
            case 7:
              zd(r) ? (Ye = 0, Wt = null, bh(t)) : (Ye = 0, Wt = null, _l(e, t, r, 7));
              break;
            case 5:
              var d = null;
              switch (De.tag) {
                case 26:
                  d = De.memoizedState;
                case 5:
                case 27:
                  var g = De;
                  if (d ? im(d) : g.stateNode.complete) {
                    Ye = 0, Wt = null;
                    var C = g.sibling;
                    if (C !== null) De = C;
                    else {
                      var R = g.return;
                      R !== null ? (De = R, qs(R)) : De = null;
                    }
                    break t;
                  }
              }
              Ye = 0, Wt = null, _l(e, t, r, 5);
              break;
            case 6:
              Ye = 0, Wt = null, _l(e, t, r, 6);
              break;
            case 8:
              hc(), lt = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Eg();
        break;
      } catch (Q) {
        ph(e, Q);
      }
    while (!0);
    return Un = za = null, k.H = a, k.A = i, Le = n, De !== null ? 0 : (Ke = null, Re = 0, is(), lt);
  }
  function Eg() {
    for (; De !== null && !ce(); )
      xh(De);
  }
  function xh(e) {
    var t = Gf(e.alternate, e, Vn);
    e.memoizedProps = e.pendingProps, t === null ? qs(e) : De = t;
  }
  function bh(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Hf(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Re
        );
        break;
      case 11:
        t = Hf(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Re
        );
        break;
      case 5:
        Tr(t);
      default:
        Qf(n, t), t = De = gd(t, Vn), t = Gf(n, t, Vn);
    }
    e.memoizedProps = e.pendingProps, t === null ? qs(e) : De = t;
  }
  function _l(e, t, n, a) {
    Un = za = null, Tr(t), pl = null, ti = 0;
    var i = t.return;
    try {
      if (pg(
        e,
        i,
        t,
        n,
        Re
      )) {
        lt = 1, Es(
          e,
          rn(n, e.current)
        ), De = null;
        return;
      }
    } catch (r) {
      if (i !== null) throw De = i, r;
      lt = 1, Es(
        e,
        rn(n, e.current)
      ), De = null;
      return;
    }
    t.flags & 32768 ? (ke || a === 1 ? e = !0 : Sl || (Re & 536870912) !== 0 ? e = !1 : (ua = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = $t.current, a !== null && a.tag === 13 && (a.flags |= 16384))), jh(t, e)) : qs(t);
  }
  function qs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        jh(
          t,
          ua
        );
        return;
      }
      e = t.return;
      var n = yg(
        t.alternate,
        t,
        Vn
      );
      if (n !== null) {
        De = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    lt === 0 && (lt = 5);
  }
  function jh(e, t) {
    do {
      var n = xg(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, De = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        De = e;
        return;
      }
      De = e = n;
    } while (e !== null);
    lt = 6, De = null;
  }
  function Sh(e, t, n, a, i, r, d, g, C) {
    e.cancelPendingCommit = null;
    do
      Ys();
    while (pt !== 0);
    if ((Le & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (r = t.lanes | t.childLanes, r |= nr, mt(
        e,
        n,
        r,
        d,
        g,
        C
      ), e === Ke && (De = Ke = null, Re = 0), Nl = t, oa = e, Kn = n, oc = r, dc = i, dh = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ag(Be, function() {
        return Eh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = k.T, k.T = null, i = J.p, J.p = 2, d = Le, Le |= 4;
        try {
          bg(e, t, n);
        } finally {
          Le = d, J.p = i, k.T = a;
        }
      }
      pt = 1, Ch(), Nh(), wh();
    }
  }
  function Ch() {
    if (pt === 1) {
      pt = 0;
      var e = oa, t = Nl, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = k.T, k.T = null;
        var a = J.p;
        J.p = 2;
        var i = Le;
        Le |= 4;
        try {
          ah(t, e);
          var r = _c, d = rd(e.containerInfo), g = r.focusedElem, C = r.selectionRange;
          if (d !== g && g && g.ownerDocument && ud(
            g.ownerDocument.documentElement,
            g
          )) {
            if (C !== null && Fu(g)) {
              var R = C.start, Q = C.end;
              if (Q === void 0 && (Q = R), "selectionStart" in g)
                g.selectionStart = R, g.selectionEnd = Math.min(
                  Q,
                  g.value.length
                );
              else {
                var $ = g.ownerDocument || document, U = $ && $.defaultView || window;
                if (U.getSelection) {
                  var Y = U.getSelection(), he = g.textContent.length, je = Math.min(C.start, he), Ve = C.end === void 0 ? je : Math.min(C.end, he);
                  !Y.extend && je > Ve && (d = Ve, Ve = je, je = d);
                  var z = sd(
                    g,
                    je
                  ), _ = sd(
                    g,
                    Ve
                  );
                  if (z && _ && (Y.rangeCount !== 1 || Y.anchorNode !== z.node || Y.anchorOffset !== z.offset || Y.focusNode !== _.node || Y.focusOffset !== _.offset)) {
                    var M = $.createRange();
                    M.setStart(z.node, z.offset), Y.removeAllRanges(), je > Ve ? (Y.addRange(M), Y.extend(_.node, _.offset)) : (M.setEnd(_.node, _.offset), Y.addRange(M));
                  }
                }
              }
            }
            for ($ = [], Y = g; Y = Y.parentNode; )
              Y.nodeType === 1 && $.push({
                element: Y,
                left: Y.scrollLeft,
                top: Y.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < $.length; g++) {
              var K = $[g];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Ps = !!wc, _c = wc = null;
        } finally {
          Le = i, J.p = a, k.T = n;
        }
      }
      e.current = t, pt = 2;
    }
  }
  function Nh() {
    if (pt === 2) {
      pt = 0;
      var e = oa, t = Nl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = k.T, k.T = null;
        var a = J.p;
        J.p = 2;
        var i = Le;
        Le |= 4;
        try {
          If(e, t.alternate, t);
        } finally {
          Le = i, J.p = a, k.T = n;
        }
      }
      pt = 3;
    }
  }
  function wh() {
    if (pt === 4 || pt === 3) {
      pt = 0, Pe();
      var e = oa, t = Nl, n = Kn, a = dh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? pt = 5 : (pt = 0, Nl = oa = null, _h(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (ca = null), Dn(n), t = t.stateNode, Dt && typeof Dt.onCommitFiberRoot == "function")
        try {
          Dt.onCommitFiberRoot(
            ba,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = k.T, i = J.p, J.p = 2, k.T = null;
        try {
          for (var r = e.onRecoverableError, d = 0; d < a.length; d++) {
            var g = a[d];
            r(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          k.T = t, J.p = i;
        }
      }
      (Kn & 3) !== 0 && Ys(), _n(e), i = e.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? e === fc ? yi++ : (yi = 0, fc = e) : yi = 0, xi(0);
    }
  }
  function _h(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Pl(t)));
  }
  function Ys() {
    return Ch(), Nh(), wh(), Eh();
  }
  function Eh() {
    if (pt !== 5) return !1;
    var e = oa, t = oc;
    oc = 0;
    var n = Dn(Kn), a = k.T, i = J.p;
    try {
      J.p = 32 > n ? 32 : n, k.T = null, n = dc, dc = null;
      var r = oa, d = Kn;
      if (pt = 0, Nl = oa = null, Kn = 0, (Le & 6) !== 0) throw Error(o(331));
      var g = Le;
      if (Le |= 4, rh(r.current), ih(
        r,
        r.current,
        d,
        n
      ), Le = g, xi(0, !1), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        try {
          Dt.onPostCommitFiberRoot(ba, r);
        } catch {
        }
      return !0;
    } finally {
      J.p = i, k.T = a, _h(e, t);
    }
  }
  function zh(e, t, n) {
    t = rn(n, t), t = Zr(e.stateNode, t, 2), e = aa(e, t, 2), e !== null && (tn(e, 2), _n(e));
  }
  function Xe(e, t, n) {
    if (e.tag === 3)
      zh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          zh(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ca === null || !ca.has(a))) {
            e = rn(n, e), n = Tf(2), a = aa(t, n, 2), a !== null && (Df(
              n,
              a,
              t,
              e
            ), tn(a, 2), _n(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function pc(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Cg();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(n) || (uc = !0, i.add(n), e = zg.bind(null, e, t, n), t.then(e, e));
  }
  function zg(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ke === e && (Re & n) === n && (lt === 4 || lt === 3 && (Re & 62914560) === Re && 300 > et() - ks ? (Le & 2) === 0 && wl(e, 0) : rc |= n, Cl === Re && (Cl = 0)), _n(e);
  }
  function Th(e, t) {
    t === 0 && (t = zt()), e = wa(e, t), e !== null && (tn(e, t), _n(e));
  }
  function Tg(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Th(e, n);
  }
  function Dg(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), Th(e, n);
  }
  function Ag(e, t) {
    return Ge(e, t);
  }
  var Xs = null, El = null, vc = !1, Gs = !1, gc = !1, fa = 0;
  function _n(e) {
    e !== El && e.next === null && (El === null ? Xs = El = e : El = El.next = e), Gs = !0, vc || (vc = !0, Rg());
  }
  function xi(e, t) {
    if (!gc && Gs) {
      gc = !0;
      do
        for (var n = !1, a = Xs; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var r = 0;
            else {
              var d = a.suspendedLanes, g = a.pingedLanes;
              r = (1 << 31 - Et(42 | e) + 1) - 1, r &= i & ~(d & ~g), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (n = !0, Rh(a, r));
          } else
            r = Re, r = gt(
              a,
              a === Ke ? r : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (r & 3) === 0 || kt(a, r) || (n = !0, Rh(a, r));
          a = a.next;
        }
      while (n);
      gc = !1;
    }
  }
  function Mg() {
    Dh();
  }
  function Dh() {
    Gs = vc = !1;
    var e = 0;
    fa !== 0 && Gg() && (e = fa);
    for (var t = et(), n = null, a = Xs; a !== null; ) {
      var i = a.next, r = Ah(a, t);
      r === 0 ? (a.next = null, n === null ? Xs = i : n.next = i, i === null && (El = n)) : (n = a, (e !== 0 || (r & 3) !== 0) && (Gs = !0)), a = i;
    }
    pt !== 0 && pt !== 5 || xi(e), fa !== 0 && (fa = 0);
  }
  function Ah(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
      var d = 31 - Et(r), g = 1 << d, C = i[d];
      C === -1 ? ((g & n) === 0 || (g & a) !== 0) && (i[d] = Ut(g, t)) : C <= t && (e.expiredLanes |= g), r &= ~g;
    }
    if (t = Ke, n = Re, n = gt(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && nt(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || kt(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && nt(a), Dn(n)) {
        case 2:
        case 8:
          n = be;
          break;
        case 32:
          n = Be;
          break;
        case 268435456:
          n = zn;
          break;
        default:
          n = Be;
      }
      return a = Mh.bind(null, e), n = Ge(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && nt(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Mh(e, t) {
    if (pt !== 0 && pt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Ys() && e.callbackNode !== n)
      return null;
    var a = Re;
    return a = gt(
      e,
      e === Ke ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (hh(e, a, t), Ah(e, et()), e.callbackNode != null && e.callbackNode === n ? Mh.bind(null, e) : null);
  }
  function Rh(e, t) {
    if (Ys()) return null;
    hh(e, t, !0);
  }
  function Rg() {
    Qg(function() {
      (Le & 6) !== 0 ? Ge(
        T,
        Mg
      ) : Dh();
    });
  }
  function yc() {
    if (fa === 0) {
      var e = fl;
      e === 0 && (e = Va, Va <<= 1, (Va & 261888) === 0 && (Va = 256)), fa = e;
    }
    return fa;
  }
  function Oh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Fi("" + e);
  }
  function kh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Og(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var r = Oh(
        (i[Bt] || null).action
      ), d = a.submitter;
      d && (t = (t = d[Bt] || null) ? Oh(t.formAction) : d.getAttribute("formAction"), t !== null && (r = t, d = null));
      var g = new ts(
        "action",
        "action",
        null,
        a,
        i
      );
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (fa !== 0) {
                  var C = d ? kh(i, d) : new FormData(i);
                  Br(
                    n,
                    {
                      pending: !0,
                      data: C,
                      method: i.method,
                      action: r
                    },
                    null,
                    C
                  );
                }
              } else
                typeof r == "function" && (g.preventDefault(), C = d ? kh(i, d) : new FormData(i), Br(
                  n,
                  {
                    pending: !0,
                    data: C,
                    method: i.method,
                    action: r
                  },
                  r,
                  C
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var xc = 0; xc < tr.length; xc++) {
    var bc = tr[xc], kg = bc.toLowerCase(), Ug = bc[0].toUpperCase() + bc.slice(1);
    yn(
      kg,
      "on" + Ug
    );
  }
  yn(dd, "onAnimationEnd"), yn(fd, "onAnimationIteration"), yn(hd, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(Iv, "onTransitionRun"), yn(Pv, "onTransitionStart"), yn(eg, "onTransitionCancel"), yn(md, "onTransitionEnd"), Ia("onMouseEnter", ["mouseout", "mouseover"]), Ia("onMouseLeave", ["mouseout", "mouseover"]), Ia("onPointerEnter", ["pointerout", "pointerover"]), Ia("onPointerLeave", ["pointerout", "pointerover"]), ja(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ja(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ja("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ja(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ja(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ja(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var bi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Hg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bi)
  );
  function Uh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], i = a.event;
      a = a.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var d = a.length - 1; 0 <= d; d--) {
            var g = a[d], C = g.instance, R = g.currentTarget;
            if (g = g.listener, C !== r && i.isPropagationStopped())
              break e;
            r = g, i.currentTarget = R;
            try {
              r(i);
            } catch (Q) {
              ls(Q);
            }
            i.currentTarget = null, r = C;
          }
        else
          for (d = 0; d < a.length; d++) {
            if (g = a[d], C = g.instance, R = g.currentTarget, g = g.listener, C !== r && i.isPropagationStopped())
              break e;
            r = g, i.currentTarget = R;
            try {
              r(i);
            } catch (Q) {
              ls(Q);
            }
            i.currentTarget = null, r = C;
          }
      }
    }
  }
  function Ae(e, t) {
    var n = t[Ru];
    n === void 0 && (n = t[Ru] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Hh(t, e, 2, !1), n.add(a));
  }
  function jc(e, t, n) {
    var a = 0;
    t && (a |= 4), Hh(
      n,
      e,
      a,
      t
    );
  }
  var Zs = "_reactListening" + Math.random().toString(36).slice(2);
  function Sc(e) {
    if (!e[Zs]) {
      e[Zs] = !0, To.forEach(function(n) {
        n !== "selectionchange" && (Hg.has(n) || jc(n, !1, e), jc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Zs] || (t[Zs] = !0, jc("selectionchange", !1, t));
    }
  }
  function Hh(e, t, n, a) {
    switch (fm(t)) {
      case 2:
        var i = dy;
        break;
      case 8:
        i = fy;
        break;
      default:
        i = Hc;
    }
    n = i.bind(
      null,
      t,
      n,
      e
    ), i = void 0, !Xu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
    }) : e.addEventListener(t, n, !1);
  }
  function Cc(e, t, n, a, i) {
    var r = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var d = a.tag;
        if (d === 3 || d === 4) {
          var g = a.stateNode.containerInfo;
          if (g === i) break;
          if (d === 4)
            for (d = a.return; d !== null; ) {
              var C = d.tag;
              if ((C === 3 || C === 4) && d.stateNode.containerInfo === i)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (d = Ja(g), d === null) return;
            if (C = d.tag, C === 5 || C === 6 || C === 26 || C === 27) {
              a = r = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        a = a.return;
      }
    Yo(function() {
      var R = r, Q = qu(n), $ = [];
      e: {
        var U = pd.get(e);
        if (U !== void 0) {
          var Y = ts, he = e;
          switch (e) {
            case "keypress":
              if (Pi(n) === 0) break e;
            case "keydown":
            case "keyup":
              Y = Dv;
              break;
            case "focusin":
              he = "focus", Y = Vu;
              break;
            case "focusout":
              he = "blur", Y = Vu;
              break;
            case "beforeblur":
            case "afterblur":
              Y = Vu;
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
              Y = Zo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = yv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = Rv;
              break;
            case dd:
            case fd:
            case hd:
              Y = jv;
              break;
            case md:
              Y = kv;
              break;
            case "scroll":
            case "scrollend":
              Y = vv;
              break;
            case "wheel":
              Y = Hv;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = Cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = Vo;
              break;
            case "toggle":
            case "beforetoggle":
              Y = Lv;
          }
          var je = (t & 4) !== 0, Ve = !je && (e === "scroll" || e === "scrollend"), z = je ? U !== null ? U + "Capture" : null : U;
          je = [];
          for (var _ = R, M; _ !== null; ) {
            var K = _;
            if (M = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || M === null || z === null || (K = Xl(_, z), K != null && je.push(
              ji(_, K, M)
            )), Ve) break;
            _ = _.return;
          }
          0 < je.length && (U = new Y(
            U,
            he,
            null,
            n,
            Q
          ), $.push({ event: U, listeners: je }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", U && n !== Lu && (he = n.relatedTarget || n.fromElement) && (Ja(he) || he[$a]))
            break e;
          if ((Y || U) && (U = Q.window === Q ? Q : (U = Q.ownerDocument) ? U.defaultView || U.parentWindow : window, Y ? (he = n.relatedTarget || n.toElement, Y = R, he = he ? Ja(he) : null, he !== null && (Ve = h(he), je = he.tag, he !== Ve || je !== 5 && je !== 27 && je !== 6) && (he = null)) : (Y = null, he = R), Y !== he)) {
            if (je = Zo, K = "onMouseLeave", z = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (je = Vo, K = "onPointerLeave", z = "onPointerEnter", _ = "pointer"), Ve = Y == null ? U : Yl(Y), M = he == null ? U : Yl(he), U = new je(
              K,
              _ + "leave",
              Y,
              n,
              Q
            ), U.target = Ve, U.relatedTarget = M, K = null, Ja(Q) === R && (je = new je(
              z,
              _ + "enter",
              he,
              n,
              Q
            ), je.target = M, je.relatedTarget = Ve, K = je), Ve = K, Y && he)
              t: {
                for (je = Bg, z = Y, _ = he, M = 0, K = z; K; K = je(K))
                  M++;
                K = 0;
                for (var ye = _; ye; ye = je(ye))
                  K++;
                for (; 0 < M - K; )
                  z = je(z), M--;
                for (; 0 < K - M; )
                  _ = je(_), K--;
                for (; M--; ) {
                  if (z === _ || _ !== null && z === _.alternate) {
                    je = z;
                    break t;
                  }
                  z = je(z), _ = je(_);
                }
                je = null;
              }
            else je = null;
            Y !== null && Bh(
              $,
              U,
              Y,
              je,
              !1
            ), he !== null && Ve !== null && Bh(
              $,
              Ve,
              he,
              je,
              !0
            );
          }
        }
        e: {
          if (U = R ? Yl(R) : window, Y = U.nodeName && U.nodeName.toLowerCase(), Y === "select" || Y === "input" && U.type === "file")
            var Ue = ed;
          else if (Io(U))
            if (td)
              Ue = Jv;
            else {
              Ue = Kv;
              var me = Vv;
            }
          else
            Y = U.nodeName, !Y || Y.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? R && Bu(R.elementType) && (Ue = ed) : Ue = $v;
          if (Ue && (Ue = Ue(e, R))) {
            Po(
              $,
              Ue,
              n,
              Q
            );
            break e;
          }
          me && me(e, U, R), e === "focusout" && R && U.type === "number" && R.memoizedProps.value != null && Hu(U, "number", U.value);
        }
        switch (me = R ? Yl(R) : window, e) {
          case "focusin":
            (Io(me) || me.contentEditable === "true") && (ll = me, Iu = R, Wl = null);
            break;
          case "focusout":
            Wl = Iu = ll = null;
            break;
          case "mousedown":
            Pu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pu = !1, cd($, n, Q);
            break;
          case "selectionchange":
            if (Fv) break;
          case "keydown":
          case "keyup":
            cd($, n, Q);
        }
        var Te;
        if ($u)
          e: {
            switch (e) {
              case "compositionstart":
                var Oe = "onCompositionStart";
                break e;
              case "compositionend":
                Oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Oe = "onCompositionUpdate";
                break e;
            }
            Oe = void 0;
          }
        else
          al ? Wo(e, n) && (Oe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Oe = "onCompositionStart");
        Oe && (Ko && n.locale !== "ko" && (al || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && al && (Te = Xo()) : (Wn = Q, Gu = "value" in Wn ? Wn.value : Wn.textContent, al = !0)), me = Qs(R, Oe), 0 < me.length && (Oe = new Qo(
          Oe,
          e,
          null,
          n,
          Q
        ), $.push({ event: Oe, listeners: me }), Te ? Oe.data = Te : (Te = Fo(n), Te !== null && (Oe.data = Te)))), (Te = Yv ? Xv(e, n) : Gv(e, n)) && (Oe = Qs(R, "onBeforeInput"), 0 < Oe.length && (me = new Qo(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          Q
        ), $.push({
          event: me,
          listeners: Oe
        }), me.data = Te)), Og(
          $,
          e,
          R,
          n,
          Q
        );
      }
      Uh($, t);
    });
  }
  function ji(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Qs(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var i = e, r = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || r === null || (i = Xl(e, n), i != null && a.unshift(
        ji(e, i, r)
      ), i = Xl(e, t), i != null && a.push(
        ji(e, i, r)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function Bg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Bh(e, t, n, a, i) {
    for (var r = t._reactName, d = []; n !== null && n !== a; ) {
      var g = n, C = g.alternate, R = g.stateNode;
      if (g = g.tag, C !== null && C === a) break;
      g !== 5 && g !== 26 && g !== 27 || R === null || (C = R, i ? (R = Xl(n, r), R != null && d.unshift(
        ji(n, R, C)
      )) : i || (R = Xl(n, r), R != null && d.push(
        ji(n, R, C)
      ))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Lg = /\r\n?/g, qg = /\u0000|\uFFFD/g;
  function Lh(e) {
    return (typeof e == "string" ? e : "" + e).replace(Lg, `
`).replace(qg, "");
  }
  function qh(e, t) {
    return t = Lh(t), Lh(e) === t;
  }
  function Qe(e, t, n, a, i, r) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || el(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && el(e, "" + a);
        break;
      case "className":
        Ji(e, "class", a);
        break;
      case "tabIndex":
        Ji(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ji(e, n, a);
        break;
      case "style":
        Lo(e, a, r);
        break;
      case "data":
        if (t !== "object") {
          Ji(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Fi("" + a), e.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (n === "formAction" ? (t !== "input" && Qe(e, t, "name", i.name, i, null), Qe(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), Qe(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), Qe(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (Qe(e, t, "encType", i.encType, i, null), Qe(e, t, "method", i.method, i, null), Qe(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Fi("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = Mn);
        break;
      case "onScroll":
        a != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Ae("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (n = a.__html, n != null) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Fi("" + a), e.setAttributeNS(
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
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
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
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
        break;
      case "popover":
        Ae("beforetoggle", e), Ae("toggle", e), $i(e, "popover", a);
        break;
      case "xlinkActuate":
        An(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        An(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        An(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        An(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        An(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        An(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        An(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        An(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        An(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        $i(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = mv.get(n) || n, $i(e, n, a));
    }
  }
  function Nc(e, t, n, a, i, r) {
    switch (n) {
      case "style":
        Lo(e, a, r);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (n = a.__html, n != null) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? el(e, a) : (typeof a == "number" || typeof a == "bigint") && el(e, "" + a);
        break;
      case "onScroll":
        a != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Ae("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Mn);
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
        if (!Do.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), r = e[Bt] || null, r = r != null ? r[n] : null, typeof r == "function" && e.removeEventListener(t, r, i), typeof a == "function")) {
              typeof r != "function" && r !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, i);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : $i(e, n, a);
          }
    }
  }
  function _t(e, t, n) {
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
        Ae("error", e), Ae("load", e);
        var a = !1, i = !1, r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var d = n[r];
            if (d != null)
              switch (r) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Qe(e, t, r, d, n, null);
              }
          }
        i && Qe(e, t, "srcSet", n.srcSet, n, null), a && Qe(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ae("invalid", e);
        var g = r = d = i = null, C = null, R = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var Q = n[a];
            if (Q != null)
              switch (a) {
                case "name":
                  i = Q;
                  break;
                case "type":
                  d = Q;
                  break;
                case "checked":
                  C = Q;
                  break;
                case "defaultChecked":
                  R = Q;
                  break;
                case "value":
                  r = Q;
                  break;
                case "defaultValue":
                  g = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Qe(e, t, a, Q, n, null);
              }
          }
        ko(
          e,
          r,
          g,
          C,
          R,
          d,
          i,
          !1
        );
        return;
      case "select":
        Ae("invalid", e), a = d = r = null;
        for (i in n)
          if (n.hasOwnProperty(i) && (g = n[i], g != null))
            switch (i) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                a = g;
              default:
                Qe(e, t, i, g, n, null);
            }
        t = r, n = d, e.multiple = !!a, t != null ? Pa(e, !!a, t, !1) : n != null && Pa(e, !!a, n, !0);
        return;
      case "textarea":
        Ae("invalid", e), r = i = a = null;
        for (d in n)
          if (n.hasOwnProperty(d) && (g = n[d], g != null))
            switch (d) {
              case "value":
                a = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(o(91));
                break;
              default:
                Qe(e, t, d, g, n, null);
            }
        Ho(e, a, i, r);
        return;
      case "option":
        for (C in n)
          n.hasOwnProperty(C) && (a = n[C], a != null) && (C === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Qe(e, t, C, a, n, null));
        return;
      case "dialog":
        Ae("beforetoggle", e), Ae("toggle", e), Ae("cancel", e), Ae("close", e);
        break;
      case "iframe":
      case "object":
        Ae("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < bi.length; a++)
          Ae(bi[a], e);
        break;
      case "image":
        Ae("error", e), Ae("load", e);
        break;
      case "details":
        Ae("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ae("error", e), Ae("load", e);
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
        for (R in n)
          if (n.hasOwnProperty(R) && (a = n[R], a != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Qe(e, t, R, a, n, null);
            }
        return;
      default:
        if (Bu(t)) {
          for (Q in n)
            n.hasOwnProperty(Q) && (a = n[Q], a !== void 0 && Nc(
              e,
              t,
              Q,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && (a = n[g], a != null && Qe(e, t, g, a, n, null));
  }
  function Yg(e, t, n, a) {
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
        var i = null, r = null, d = null, g = null, C = null, R = null, Q = null;
        for (Y in n) {
          var $ = n[Y];
          if (n.hasOwnProperty(Y) && $ != null)
            switch (Y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = $;
              default:
                a.hasOwnProperty(Y) || Qe(e, t, Y, null, a, $);
            }
        }
        for (var U in a) {
          var Y = a[U];
          if ($ = n[U], a.hasOwnProperty(U) && (Y != null || $ != null))
            switch (U) {
              case "type":
                r = Y;
                break;
              case "name":
                i = Y;
                break;
              case "checked":
                R = Y;
                break;
              case "defaultChecked":
                Q = Y;
                break;
              case "value":
                d = Y;
                break;
              case "defaultValue":
                g = Y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null)
                  throw Error(o(137, t));
                break;
              default:
                Y !== $ && Qe(
                  e,
                  t,
                  U,
                  Y,
                  a,
                  $
                );
            }
        }
        Uu(
          e,
          d,
          g,
          C,
          R,
          Q,
          r,
          i
        );
        return;
      case "select":
        Y = d = g = U = null;
        for (r in n)
          if (C = n[r], n.hasOwnProperty(r) && C != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                Y = C;
              default:
                a.hasOwnProperty(r) || Qe(
                  e,
                  t,
                  r,
                  null,
                  a,
                  C
                );
            }
        for (i in a)
          if (r = a[i], C = n[i], a.hasOwnProperty(i) && (r != null || C != null))
            switch (i) {
              case "value":
                U = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                d = r;
              default:
                r !== C && Qe(
                  e,
                  t,
                  i,
                  r,
                  a,
                  C
                );
            }
        t = g, n = d, a = Y, U != null ? Pa(e, !!n, U, !1) : !!a != !!n && (t != null ? Pa(e, !!n, t, !0) : Pa(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        Y = U = null;
        for (g in n)
          if (i = n[g], n.hasOwnProperty(g) && i != null && !a.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Qe(e, t, g, null, a, i);
            }
        for (d in a)
          if (i = a[d], r = n[d], a.hasOwnProperty(d) && (i != null || r != null))
            switch (d) {
              case "value":
                U = i;
                break;
              case "defaultValue":
                Y = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(o(91));
                break;
              default:
                i !== r && Qe(e, t, d, i, a, r);
            }
        Uo(e, U, Y);
        return;
      case "option":
        for (var he in n)
          U = n[he], n.hasOwnProperty(he) && U != null && !a.hasOwnProperty(he) && (he === "selected" ? e.selected = !1 : Qe(
            e,
            t,
            he,
            null,
            a,
            U
          ));
        for (C in a)
          U = a[C], Y = n[C], a.hasOwnProperty(C) && U !== Y && (U != null || Y != null) && (C === "selected" ? e.selected = U && typeof U != "function" && typeof U != "symbol" : Qe(
            e,
            t,
            C,
            U,
            a,
            Y
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
        for (var je in n)
          U = n[je], n.hasOwnProperty(je) && U != null && !a.hasOwnProperty(je) && Qe(e, t, je, null, a, U);
        for (R in a)
          if (U = a[R], Y = n[R], a.hasOwnProperty(R) && U !== Y && (U != null || Y != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(o(137, t));
                break;
              default:
                Qe(
                  e,
                  t,
                  R,
                  U,
                  a,
                  Y
                );
            }
        return;
      default:
        if (Bu(t)) {
          for (var Ve in n)
            U = n[Ve], n.hasOwnProperty(Ve) && U !== void 0 && !a.hasOwnProperty(Ve) && Nc(
              e,
              t,
              Ve,
              void 0,
              a,
              U
            );
          for (Q in a)
            U = a[Q], Y = n[Q], !a.hasOwnProperty(Q) || U === Y || U === void 0 && Y === void 0 || Nc(
              e,
              t,
              Q,
              U,
              a,
              Y
            );
          return;
        }
    }
    for (var z in n)
      U = n[z], n.hasOwnProperty(z) && U != null && !a.hasOwnProperty(z) && Qe(e, t, z, null, a, U);
    for ($ in a)
      U = a[$], Y = n[$], !a.hasOwnProperty($) || U === Y || U == null && Y == null || Qe(e, t, $, U, a, Y);
  }
  function Yh(e) {
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
  function Xg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var i = n[a], r = i.transferSize, d = i.initiatorType, g = i.duration;
        if (r && g && Yh(d)) {
          for (d = 0, g = i.responseEnd, a += 1; a < n.length; a++) {
            var C = n[a], R = C.startTime;
            if (R > g) break;
            var Q = C.transferSize, $ = C.initiatorType;
            Q && Yh($) && (C = C.responseEnd, d += Q * (C < g ? 1 : (g - R) / (C - R)));
          }
          if (--a, t += 8 * (r + d) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var wc = null, _c = null;
  function Vs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Xh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gh(e, t) {
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
  function Ec(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var zc = null;
  function Gg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === zc ? !1 : (zc = e, !0) : (zc = null, !1);
  }
  var Zh = typeof setTimeout == "function" ? setTimeout : void 0, Zg = typeof clearTimeout == "function" ? clearTimeout : void 0, Qh = typeof Promise == "function" ? Promise : void 0, Qg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qh < "u" ? function(e) {
    return Qh.resolve(null).then(e).catch(Vg);
  } : Zh;
  function Vg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ha(e) {
    return e === "head";
  }
  function Vh(e, t) {
    var n = t, a = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(i), Al(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          Si(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Si(n);
          for (var r = n.firstChild; r; ) {
            var d = r.nextSibling, g = r.nodeName;
            r[ql] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && r.rel.toLowerCase() === "stylesheet" || n.removeChild(r), r = d;
          }
        } else
          n === "body" && Si(e.ownerDocument.body);
      n = i;
    } while (n);
    Al(t);
  }
  function Kh(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = a;
    } while (n);
  }
  function Tc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Tc(n), Ou(n);
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
  function Kg(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[ql])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (r = e.getAttribute("rel"), r === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (r !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (r = e.getAttribute("src"), (r !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && r && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var r = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === r)
          return e;
      } else return e;
      if (e = hn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function $g(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = hn(e.nextSibling), e === null)) return null;
    return e;
  }
  function $h(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = hn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Dc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ac(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Jg(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function hn(e) {
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
  var Mc = null;
  function Jh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return hn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Wh(e) {
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
  function Fh(e, t, n) {
    switch (t = Vs(n), e) {
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
  function Si(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ou(e);
  }
  var mn = /* @__PURE__ */ new Map(), Ih = /* @__PURE__ */ new Set();
  function Ks(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var $n = J.d;
  J.d = {
    f: Wg,
    r: Fg,
    D: Ig,
    C: Pg,
    L: ey,
    m: ty,
    X: ay,
    S: ny,
    M: ly
  };
  function Wg() {
    var e = $n.f(), t = Bs();
    return e || t;
  }
  function Fg(e) {
    var t = Wa(e);
    t !== null && t.tag === 5 && t.type === "form" ? pf(t) : $n.r(e);
  }
  var zl = typeof document > "u" ? null : document;
  function Ph(e, t, n) {
    var a = zl;
    if (a && typeof t == "string" && t) {
      var i = sn(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), Ih.has(i) || (Ih.add(i), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), _t(t, "link", e), yt(t), a.head.appendChild(t)));
    }
  }
  function Ig(e) {
    $n.D(e), Ph("dns-prefetch", e, null);
  }
  function Pg(e, t) {
    $n.C(e, t), Ph("preconnect", e, t);
  }
  function ey(e, t, n) {
    $n.L(e, t, n);
    var a = zl;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + sn(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + sn(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + sn(
        n.imageSizes
      ) + '"]')) : i += '[href="' + sn(e) + '"]';
      var r = i;
      switch (t) {
        case "style":
          r = Tl(e);
          break;
        case "script":
          r = Dl(e);
      }
      mn.has(r) || (e = x(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), mn.set(r, e), a.querySelector(i) !== null || t === "style" && a.querySelector(Ci(r)) || t === "script" && a.querySelector(Ni(r)) || (t = a.createElement("link"), _t(t, "link", e), yt(t), a.head.appendChild(t)));
    }
  }
  function ty(e, t) {
    $n.m(e, t);
    var n = zl;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + sn(a) + '"][href="' + sn(e) + '"]', r = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Dl(e);
      }
      if (!mn.has(r) && (e = x({ rel: "modulepreload", href: e }, t), mn.set(r, e), n.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ni(r)))
              return;
        }
        a = n.createElement("link"), _t(a, "link", e), yt(a), n.head.appendChild(a);
      }
    }
  }
  function ny(e, t, n) {
    $n.S(e, t, n);
    var a = zl;
    if (a && e) {
      var i = Fa(a).hoistableStyles, r = Tl(e);
      t = t || "default";
      var d = i.get(r);
      if (!d) {
        var g = { loading: 0, preload: null };
        if (d = a.querySelector(
          Ci(r)
        ))
          g.loading = 5;
        else {
          e = x(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = mn.get(r)) && Rc(e, n);
          var C = d = a.createElement("link");
          yt(C), _t(C, "link", e), C._p = new Promise(function(R, Q) {
            C.onload = R, C.onerror = Q;
          }), C.addEventListener("load", function() {
            g.loading |= 1;
          }), C.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, $s(d, t, a);
        }
        d = {
          type: "stylesheet",
          instance: d,
          count: 1,
          state: g
        }, i.set(r, d);
      }
    }
  }
  function ay(e, t) {
    $n.X(e, t);
    var n = zl;
    if (n && e) {
      var a = Fa(n).hoistableScripts, i = Dl(e), r = a.get(i);
      r || (r = n.querySelector(Ni(i)), r || (e = x({ src: e, async: !0 }, t), (t = mn.get(i)) && Oc(e, t), r = n.createElement("script"), yt(r), _t(r, "link", e), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, a.set(i, r));
    }
  }
  function ly(e, t) {
    $n.M(e, t);
    var n = zl;
    if (n && e) {
      var a = Fa(n).hoistableScripts, i = Dl(e), r = a.get(i);
      r || (r = n.querySelector(Ni(i)), r || (e = x({ src: e, async: !0, type: "module" }, t), (t = mn.get(i)) && Oc(e, t), r = n.createElement("script"), yt(r), _t(r, "link", e), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, a.set(i, r));
    }
  }
  function em(e, t, n, a) {
    var i = (i = E.current) ? Ks(i) : null;
    if (!i) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Tl(n.href), n = Fa(
          i
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Tl(n.href);
          var r = Fa(
            i
          ).hoistableStyles, d = r.get(e);
          if (d || (i = i.ownerDocument || i, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(e, d), (r = i.querySelector(
            Ci(e)
          )) && !r._p && (d.instance = r, d.state.loading = 5), mn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, mn.set(e, n), r || iy(
            i,
            e,
            n,
            d.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return d;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Dl(n), n = Fa(
          i
        ).hoistableScripts, a = n.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function Tl(e) {
    return 'href="' + sn(e) + '"';
  }
  function Ci(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function tm(e) {
    return x({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function iy(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), _t(t, "link", n), yt(t), e.head.appendChild(t));
  }
  function Dl(e) {
    return '[src="' + sn(e) + '"]';
  }
  function Ni(e) {
    return "script[async]" + e;
  }
  function nm(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + sn(n.href) + '"]'
          );
          if (a)
            return t.instance = a, yt(a), a;
          var i = x({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), yt(a), _t(a, "style", i), $s(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          i = Tl(n.href);
          var r = e.querySelector(
            Ci(i)
          );
          if (r)
            return t.state.loading |= 4, t.instance = r, yt(r), r;
          a = tm(n), (i = mn.get(i)) && Rc(a, i), r = (e.ownerDocument || e).createElement("link"), yt(r);
          var d = r;
          return d._p = new Promise(function(g, C) {
            d.onload = g, d.onerror = C;
          }), _t(r, "link", a), t.state.loading |= 4, $s(r, n.precedence, e), t.instance = r;
        case "script":
          return r = Dl(n.src), (i = e.querySelector(
            Ni(r)
          )) ? (t.instance = i, yt(i), i) : (a = n, (i = mn.get(r)) && (a = x({}, n), Oc(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), yt(i), _t(i, "link", a), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, $s(a, n.precedence, e));
    return t.instance;
  }
  function $s(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, r = i, d = 0; d < a.length; d++) {
      var g = a[d];
      if (g.dataset.precedence === t) r = g;
      else if (r !== i) break;
    }
    r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Rc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Oc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Js = null;
  function am(e, t, n) {
    if (Js === null) {
      var a = /* @__PURE__ */ new Map(), i = Js = /* @__PURE__ */ new Map();
      i.set(n, a);
    } else
      i = Js, a = i.get(n), a || (a = /* @__PURE__ */ new Map(), i.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var r = n[i];
      if (!(r[ql] || r[St] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = r.getAttribute(t) || "";
        d = e + d;
        var g = a.get(d);
        g ? g.push(r) : a.set(d, [r]);
      }
    }
    return a;
  }
  function lm(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function sy(e, t, n) {
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
  function im(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function uy(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var i = Tl(a.href), r = t.querySelector(
          Ci(i)
        );
        if (r) {
          t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ws.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = r, yt(r);
          return;
        }
        r = t.ownerDocument || t, a = tm(a), (i = mn.get(i)) && Rc(a, i), r = r.createElement("link"), yt(r);
        var d = r;
        d._p = new Promise(function(g, C) {
          d.onload = g, d.onerror = C;
        }), _t(r, "link", a), n.instance = r;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Ws.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var kc = 0;
  function ry(e, t) {
    return e.stylesheets && e.count === 0 && Is(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Is(e, e.stylesheets), e.unsuspend) {
          var r = e.unsuspend;
          e.unsuspend = null, r();
        }
      }, 6e4 + t);
      0 < e.imgBytes && kc === 0 && (kc = 62500 * Xg());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Is(e, e.stylesheets), e.unsuspend)) {
            var r = e.unsuspend;
            e.unsuspend = null, r();
          }
        },
        (e.imgBytes > kc ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(i);
      };
    } : null;
  }
  function Ws() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Is(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Fs = null;
  function Is(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Fs = /* @__PURE__ */ new Map(), t.forEach(cy, e), Fs = null, Ws.call(e));
  }
  function cy(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Fs.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Fs.set(e, n);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < i.length; r++) {
          var d = i[r];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), a = d);
        }
        a && n.set(null, a);
      }
      i = t.instance, d = i.getAttribute("data-precedence"), r = n.get(d) || a, r === a && n.set(null, i), n.set(d, i), this.count++, a = Ws.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), r ? r.parentNode.insertBefore(i, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var wi = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: se,
    _currentValue2: se,
    _threadCount: 0
  };
  function oy(e, t, n, a, i, r, d, g, C) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ht(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ht(0), this.hiddenUpdates = Ht(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = r, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = C, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function sm(e, t, n, a, i, r, d, g, C, R, Q, $) {
    return e = new oy(
      e,
      t,
      n,
      d,
      C,
      R,
      Q,
      $,
      g
    ), t = 1, r === !0 && (t |= 24), r = Kt(3, null, null, t), e.current = r, r.stateNode = e, t = mr(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, yr(r), e;
  }
  function um(e) {
    return e ? (e = ul, e) : ul;
  }
  function rm(e, t, n, a, i, r) {
    i = um(i), a.context === null ? a.context = i : a.pendingContext = i, a = na(t), a.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (a.callback = r), n = aa(e, a, t), n !== null && (Zt(n, e, t), ai(n, e, t));
  }
  function cm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Uc(e, t) {
    cm(e, t), (e = e.alternate) && cm(e, t);
  }
  function om(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = wa(e, 67108864);
      t !== null && Zt(t, e, 67108864), Uc(e, 67108864);
    }
  }
  function dm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = It();
      t = Tn(t);
      var n = wa(e, t);
      n !== null && Zt(n, e, t), Uc(e, t);
    }
  }
  var Ps = !0;
  function dy(e, t, n, a) {
    var i = k.T;
    k.T = null;
    var r = J.p;
    try {
      J.p = 2, Hc(e, t, n, a);
    } finally {
      J.p = r, k.T = i;
    }
  }
  function fy(e, t, n, a) {
    var i = k.T;
    k.T = null;
    var r = J.p;
    try {
      J.p = 8, Hc(e, t, n, a);
    } finally {
      J.p = r, k.T = i;
    }
  }
  function Hc(e, t, n, a) {
    if (Ps) {
      var i = Bc(a);
      if (i === null)
        Cc(
          e,
          t,
          a,
          eu,
          n
        ), hm(e, a);
      else if (my(
        i,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (hm(e, a), t & 4 && -1 < hy.indexOf(e)) {
        for (; i !== null; ) {
          var r = Wa(i);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var d = ut(r.pendingLanes);
                  if (d !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var C = 1 << 31 - Et(d);
                      g.entanglements[1] |= C, d &= ~C;
                    }
                    _n(r), (Le & 6) === 0 && (Us = et() + 500, xi(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = wa(r, 2), g !== null && Zt(g, r, 2), Bs(), Uc(r, 2);
            }
          if (r = Bc(a), r === null && Cc(
            e,
            t,
            a,
            eu,
            n
          ), r === i) break;
          i = r;
        }
        i !== null && a.stopPropagation();
      } else
        Cc(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function Bc(e) {
    return e = qu(e), Lc(e);
  }
  var eu = null;
  function Lc(e) {
    if (eu = null, e = Ja(e), e !== null) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = p(t), e !== null) return e;
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
    return eu = e, null;
  }
  function fm(e) {
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
        switch (Qa()) {
          case T:
            return 2;
          case be:
            return 8;
          case Be:
          case it:
            return 32;
          case zn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qc = !1, ma = null, pa = null, va = null, _i = /* @__PURE__ */ new Map(), Ei = /* @__PURE__ */ new Map(), ga = [], hy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function hm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ma = null;
        break;
      case "dragenter":
      case "dragleave":
        pa = null;
        break;
      case "mouseover":
      case "mouseout":
        va = null;
        break;
      case "pointerover":
      case "pointerout":
        _i.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ei.delete(t.pointerId);
    }
  }
  function zi(e, t, n, a, i, r) {
    return e === null || e.nativeEvent !== r ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: r,
      targetContainers: [i]
    }, t !== null && (t = Wa(t), t !== null && om(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function my(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return ma = zi(
          ma,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "dragenter":
        return pa = zi(
          pa,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "mouseover":
        return va = zi(
          va,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "pointerover":
        var r = i.pointerId;
        return _i.set(
          r,
          zi(
            _i.get(r) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return r = i.pointerId, Ei.set(
          r,
          zi(
            Ei.get(r) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
    }
    return !1;
  }
  function mm(e) {
    var t = Ja(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, Jn(e.priority, function() {
              dm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = y(n), t !== null) {
            e.blockedOn = t, Jn(e.priority, function() {
              dm(n);
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
  function tu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Bc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Lu = a, n.target.dispatchEvent(a), Lu = null;
      } else
        return t = Wa(n), t !== null && om(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function pm(e, t, n) {
    tu(e) && n.delete(t);
  }
  function py() {
    qc = !1, ma !== null && tu(ma) && (ma = null), pa !== null && tu(pa) && (pa = null), va !== null && tu(va) && (va = null), _i.forEach(pm), Ei.forEach(pm);
  }
  function nu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, qc || (qc = !0, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      py
    )));
  }
  var au = null;
  function vm(e) {
    au !== e && (au = e, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      function() {
        au === e && (au = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (Lc(a || n) === null)
              continue;
            break;
          }
          var r = Wa(n);
          r !== null && (e.splice(t, 3), t -= 3, Br(
            r,
            {
              pending: !0,
              data: i,
              method: n.method,
              action: a
            },
            a,
            i
          ));
        }
      }
    ));
  }
  function Al(e) {
    function t(C) {
      return nu(C, e);
    }
    ma !== null && nu(ma, e), pa !== null && nu(pa, e), va !== null && nu(va, e), _i.forEach(t), Ei.forEach(t);
    for (var n = 0; n < ga.length; n++) {
      var a = ga[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ga.length && (n = ga[0], n.blockedOn === null); )
      mm(n), n.blockedOn === null && ga.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var i = n[a], r = n[a + 1], d = i[Bt] || null;
        if (typeof r == "function")
          d || vm(n);
        else if (d) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (i = r, d = r[Bt] || null)
              g = d.formAction;
            else if (Lc(i) !== null) continue;
          } else g = d.action;
          typeof g == "function" ? n[a + 1] = g : (n.splice(a, 3), a -= 3), vm(n);
        }
      }
  }
  function gm() {
    function e(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(d) {
            return i = d;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      i !== null && (i(), i = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, i = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
      };
    }
  }
  function Yc(e) {
    this._internalRoot = e;
  }
  lu.prototype.render = Yc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var n = t.current, a = It();
    rm(n, a, e, t, null, null);
  }, lu.prototype.unmount = Yc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      rm(e.current, 2, null, e, null, null), Bs(), t[$a] = null;
    }
  };
  function lu(e) {
    this._internalRoot = e;
  }
  lu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = gn();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ga.length && t !== 0 && t < ga[n].priority; n++) ;
      ga.splice(n, 0, e), n === 0 && mm(e);
    }
  };
  var ym = c.version;
  if (ym !== "19.2.8")
    throw Error(
      o(
        527,
        ym,
        "19.2.8"
      )
    );
  J.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = v(t), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var vy = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!iu.isDisabled && iu.supportsFiber)
      try {
        ba = iu.inject(
          vy
        ), Dt = iu;
      } catch {
      }
  }
  return Di.createRoot = function(e, t) {
    if (!f(e)) throw Error(o(299));
    var n = !1, a = "", i = wf, r = _f, d = Ef;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = sm(
      e,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      i,
      r,
      d,
      gm
    ), e[$a] = t.current, Sc(e), new Yc(t);
  }, Di.hydrateRoot = function(e, t, n) {
    if (!f(e)) throw Error(o(299));
    var a = !1, i = "", r = wf, d = _f, g = Ef, C = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.formState !== void 0 && (C = n.formState)), t = sm(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      i,
      C,
      r,
      d,
      g,
      gm
    ), t.context = um(null), n = t.current, a = It(), a = Tn(a), i = na(a), i.callback = null, aa(n, i, a), n = a, t.current.lanes = n, tn(t, n), _n(t), e[$a] = t.current, Sc(e), new lu(t);
  }, Di.version = "19.2.8", Di;
}
var zm;
function wy() {
  if (zm) return Zc.exports;
  zm = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (c) {
        console.error(c);
      }
  }
  return l(), Zc.exports = Ny(), Zc.exports;
}
var _y = wy();
const fp = (...l) => l.filter((c, s, o) => !!c && c.trim() !== "" && o.indexOf(c) === s).join(" ").trim();
const Ey = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const zy = (l) => l.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (c, s, o) => o ? o.toUpperCase() : s.toLowerCase()
);
const Tm = (l) => {
  const c = zy(l);
  return c.charAt(0).toUpperCase() + c.slice(1);
};
var Ty = {
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
const Dy = (l) => {
  for (const c in l)
    if (c.startsWith("aria-") || c === "role" || c === "title")
      return !0;
  return !1;
};
const Ay = b.forwardRef(
  ({
    color: l = "currentColor",
    size: c = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: o,
    className: f = "",
    children: h,
    iconNode: p,
    ...y
  }, m) => b.createElement(
    "svg",
    {
      ref: m,
      ...Ty,
      width: c,
      height: c,
      stroke: l,
      strokeWidth: o ? Number(s) * 24 / Number(c) : s,
      className: fp("lucide", f),
      ...!h && !Dy(y) && { "aria-hidden": "true" },
      ...y
    },
    [
      ...p.map(([v, S]) => b.createElement(v, S)),
      ...Array.isArray(h) ? h : [h]
    ]
  )
);
const we = (l, c) => {
  const s = b.forwardRef(
    ({ className: o, ...f }, h) => b.createElement(Ay, {
      ref: h,
      iconNode: c,
      className: fp(
        `lucide-${Ey(Tm(l))}`,
        `lucide-${l}`,
        o
      ),
      ...f
    })
  );
  return s.displayName = Tm(l), s;
};
const My = [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
], Ml = we("archive", My);
const Ry = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], hp = we("arrow-down", Ry);
const Oy = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], mp = we("arrow-up", Oy);
const ky = [
  ["path", { d: "M16 14v2.2l1.6 1", key: "fo4ql5" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
], $c = we("calendar-clock", ky);
const Uy = [
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
], Hy = we("calendar-days", Uy);
const By = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], qa = we("check", By);
const Ly = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Yi = we("chevron-down", Ly);
const qy = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], pp = we("chevron-right", qy);
const Yy = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], vp = we("copy", Yy);
const Xy = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], Gy = we("external-link", Xy);
const Zy = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], gp = we("eye", Zy);
const Qy = [
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
], yp = we("eye-off", Qy);
const Vy = [
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
], Ky = we("file-text", Vy);
const $y = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], Jy = we("folder", $y);
const Wy = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Fy = we("grip-vertical", Wy);
const Iy = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], xp = we("history", Iy);
const Py = [
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }],
  ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
], bp = we("image-plus", Py);
const e0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Jc = we("image", e0);
const t0 = [
  ["path", { d: "M5 3v14", key: "9nsxs2" }],
  ["path", { d: "M12 3v8", key: "1h2ygw" }],
  ["path", { d: "M19 3v18", key: "1sk56x" }]
], pu = we("kanban", t0);
const n0 = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
], Nu = we("link-2", n0);
const a0 = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
], po = we("list-checks", a0);
const l0 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], kl = we("loader-circle", l0);
const i0 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
], s0 = we("maximize-2", i0);
const u0 = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], vo = we("message-square", u0);
const r0 = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], c0 = we("minimize-2", r0);
const o0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
], d0 = we("panel-left-close", o0);
const f0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
], h0 = we("panel-left-open", f0);
const m0 = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], vu = we("paperclip", m0);
const p0 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], Za = we("pencil", p0);
const v0 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Rl = we("play", v0);
const g0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Mt = we("plus", g0);
const y0 = [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
], x0 = we("power", y0);
const b0 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], j0 = we("refresh-cw", b0);
const S0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], jp = we("rotate-ccw", S0);
const C0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }]
], go = we("rows-3", C0);
const N0 = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], w0 = we("save", N0);
const _0 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Sp = we("search", _0);
const E0 = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], z0 = we("settings-2", E0);
const T0 = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], D0 = we("sliders-horizontal", T0);
const A0 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], Dm = we("star", A0);
const M0 = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
], R0 = we("tag", M0);
const O0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Rt = we("trash-2", O0);
const k0 = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], U0 = we("user-round", k0);
const H0 = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], Ri = we("workflow", H0);
const B0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ya = we("x", B0);
var La = dp();
function L0() {
  for (var l = arguments.length, c = new Array(l), s = 0; s < l; s++)
    c[s] = arguments[s];
  return b.useMemo(
    () => (o) => {
      c.forEach((f) => f(o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    c
  );
}
const wu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Hl(l) {
  const c = Object.prototype.toString.call(l);
  return c === "[object Window]" || // In Electron context the Window object serializes to [object global]
  c === "[object global]";
}
function yo(l) {
  return "nodeType" in l;
}
function Ot(l) {
  var c, s;
  return l ? Hl(l) ? l : yo(l) && (c = (s = l.ownerDocument) == null ? void 0 : s.defaultView) != null ? c : window : window;
}
function xo(l) {
  const {
    Document: c
  } = Ot(l);
  return l instanceof c;
}
function Xi(l) {
  return Hl(l) ? !1 : l instanceof Ot(l).HTMLElement;
}
function Cp(l) {
  return l instanceof Ot(l).SVGElement;
}
function Bl(l) {
  return l ? Hl(l) ? l.document : yo(l) ? xo(l) ? l : Xi(l) || Cp(l) ? l.ownerDocument : document : document : document;
}
const jn = wu ? b.useLayoutEffect : b.useEffect;
function _u(l) {
  const c = b.useRef(l);
  return jn(() => {
    c.current = l;
  }), b.useCallback(function() {
    for (var s = arguments.length, o = new Array(s), f = 0; f < s; f++)
      o[f] = arguments[f];
    return c.current == null ? void 0 : c.current(...o);
  }, []);
}
function q0() {
  const l = b.useRef(null), c = b.useCallback((o, f) => {
    l.current = setInterval(o, f);
  }, []), s = b.useCallback(() => {
    l.current !== null && (clearInterval(l.current), l.current = null);
  }, []);
  return [c, s];
}
function Bi(l, c) {
  c === void 0 && (c = [l]);
  const s = b.useRef(l);
  return jn(() => {
    s.current !== l && (s.current = l);
  }, c), s;
}
function Gi(l, c) {
  const s = b.useRef();
  return b.useMemo(
    () => {
      const o = l(s.current);
      return s.current = o, o;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...c]
  );
}
function gu(l) {
  const c = _u(l), s = b.useRef(null), o = b.useCallback(
    (f) => {
      f !== s.current && c?.(f, s.current), s.current = f;
    },
    //eslint-disable-next-line
    []
  );
  return [s, o];
}
function yu(l) {
  const c = b.useRef();
  return b.useEffect(() => {
    c.current = l;
  }, [l]), c.current;
}
let Wc = {};
function Zi(l, c) {
  return b.useMemo(() => {
    if (c)
      return c;
    const s = Wc[l] == null ? 0 : Wc[l] + 1;
    return Wc[l] = s, l + "-" + s;
  }, [l, c]);
}
function Np(l) {
  return function(c) {
    for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++)
      o[f - 1] = arguments[f];
    return o.reduce((h, p) => {
      const y = Object.entries(p);
      for (const [m, v] of y) {
        const S = h[m];
        S != null && (h[m] = S + l * v);
      }
      return h;
    }, {
      ...c
    });
  };
}
const Ol = /* @__PURE__ */ Np(1), xu = /* @__PURE__ */ Np(-1);
function Y0(l) {
  return "clientX" in l && "clientY" in l;
}
function Eu(l) {
  if (!l)
    return !1;
  const {
    KeyboardEvent: c
  } = Ot(l.target);
  return c && l instanceof c;
}
function X0(l) {
  if (!l)
    return !1;
  const {
    TouchEvent: c
  } = Ot(l.target);
  return c && l instanceof c;
}
function bu(l) {
  if (X0(l)) {
    if (l.touches && l.touches.length) {
      const {
        clientX: c,
        clientY: s
      } = l.touches[0];
      return {
        x: c,
        y: s
      };
    } else if (l.changedTouches && l.changedTouches.length) {
      const {
        clientX: c,
        clientY: s
      } = l.changedTouches[0];
      return {
        x: c,
        y: s
      };
    }
  }
  return Y0(l) ? {
    x: l.clientX,
    y: l.clientY
  } : null;
}
const En = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(l) {
      if (!l)
        return;
      const {
        x: c,
        y: s
      } = l;
      return "translate3d(" + (c ? Math.round(c) : 0) + "px, " + (s ? Math.round(s) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(l) {
      if (!l)
        return;
      const {
        scaleX: c,
        scaleY: s
      } = l;
      return "scaleX(" + c + ") scaleY(" + s + ")";
    }
  },
  Transform: {
    toString(l) {
      if (l)
        return [En.Translate.toString(l), En.Scale.toString(l)].join(" ");
    }
  },
  Transition: {
    toString(l) {
      let {
        property: c,
        duration: s,
        easing: o
      } = l;
      return c + " " + s + "ms " + o;
    }
  }
}), Am = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function G0(l) {
  return l.matches(Am) ? l : l.querySelector(Am);
}
const Z0 = {
  display: "none"
};
function Q0(l) {
  let {
    id: c,
    value: s
  } = l;
  return tt.createElement("div", {
    id: c,
    style: Z0
  }, s);
}
function V0(l) {
  let {
    id: c,
    announcement: s,
    ariaLiveType: o = "assertive"
  } = l;
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
  return tt.createElement("div", {
    id: c,
    style: f,
    role: "status",
    "aria-live": o,
    "aria-atomic": !0
  }, s);
}
function K0() {
  const [l, c] = b.useState("");
  return {
    announce: b.useCallback((o) => {
      o != null && c(o);
    }, []),
    announcement: l
  };
}
const wp = /* @__PURE__ */ b.createContext(null);
function $0(l) {
  const c = b.useContext(wp);
  b.useEffect(() => {
    if (!c)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return c(l);
  }, [l, c]);
}
function J0() {
  const [l] = b.useState(() => /* @__PURE__ */ new Set()), c = b.useCallback((o) => (l.add(o), () => l.delete(o)), [l]);
  return [b.useCallback((o) => {
    let {
      type: f,
      event: h
    } = o;
    l.forEach((p) => {
      var y;
      return (y = p[f]) == null ? void 0 : y.call(p, h);
    });
  }, [l]), c];
}
const W0 = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, F0 = {
  onDragStart(l) {
    let {
      active: c
    } = l;
    return "Picked up draggable item " + c.id + ".";
  },
  onDragOver(l) {
    let {
      active: c,
      over: s
    } = l;
    return s ? "Draggable item " + c.id + " was moved over droppable area " + s.id + "." : "Draggable item " + c.id + " is no longer over a droppable area.";
  },
  onDragEnd(l) {
    let {
      active: c,
      over: s
    } = l;
    return s ? "Draggable item " + c.id + " was dropped over droppable area " + s.id : "Draggable item " + c.id + " was dropped.";
  },
  onDragCancel(l) {
    let {
      active: c
    } = l;
    return "Dragging was cancelled. Draggable item " + c.id + " was dropped.";
  }
};
function I0(l) {
  let {
    announcements: c = F0,
    container: s,
    hiddenTextDescribedById: o,
    screenReaderInstructions: f = W0
  } = l;
  const {
    announce: h,
    announcement: p
  } = K0(), y = Zi("DndLiveRegion"), [m, v] = b.useState(!1);
  if (b.useEffect(() => {
    v(!0);
  }, []), $0(b.useMemo(() => ({
    onDragStart(x) {
      let {
        active: w
      } = x;
      h(c.onDragStart({
        active: w
      }));
    },
    onDragMove(x) {
      let {
        active: w,
        over: D
      } = x;
      c.onDragMove && h(c.onDragMove({
        active: w,
        over: D
      }));
    },
    onDragOver(x) {
      let {
        active: w,
        over: D
      } = x;
      h(c.onDragOver({
        active: w,
        over: D
      }));
    },
    onDragEnd(x) {
      let {
        active: w,
        over: D
      } = x;
      h(c.onDragEnd({
        active: w,
        over: D
      }));
    },
    onDragCancel(x) {
      let {
        active: w,
        over: D
      } = x;
      h(c.onDragCancel({
        active: w,
        over: D
      }));
    }
  }), [h, c])), !m)
    return null;
  const S = tt.createElement(tt.Fragment, null, tt.createElement(Q0, {
    id: o,
    value: f.draggable
  }), tt.createElement(V0, {
    id: y,
    announcement: p
  }));
  return s ? La.createPortal(S, s) : S;
}
var vt;
(function(l) {
  l.DragStart = "dragStart", l.DragMove = "dragMove", l.DragEnd = "dragEnd", l.DragCancel = "dragCancel", l.DragOver = "dragOver", l.RegisterDroppable = "registerDroppable", l.SetDroppableDisabled = "setDroppableDisabled", l.UnregisterDroppable = "unregisterDroppable";
})(vt || (vt = {}));
function ju() {
}
function Mm(l, c) {
  return b.useMemo(
    () => ({
      sensor: l,
      options: c ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, c]
  );
}
function P0() {
  for (var l = arguments.length, c = new Array(l), s = 0; s < l; s++)
    c[s] = arguments[s];
  return b.useMemo(
    () => [...c].filter((o) => o != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...c]
  );
}
const Sn = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function _p(l, c) {
  return Math.sqrt(Math.pow(l.x - c.x, 2) + Math.pow(l.y - c.y, 2));
}
function ex(l, c) {
  const s = bu(l);
  if (!s)
    return "0 0";
  const o = {
    x: (s.x - c.left) / c.width * 100,
    y: (s.y - c.top) / c.height * 100
  };
  return o.x + "% " + o.y + "%";
}
function Ep(l, c) {
  let {
    data: {
      value: s
    }
  } = l, {
    data: {
      value: o
    }
  } = c;
  return s - o;
}
function tx(l, c) {
  let {
    data: {
      value: s
    }
  } = l, {
    data: {
      value: o
    }
  } = c;
  return o - s;
}
function io(l) {
  let {
    left: c,
    top: s,
    height: o,
    width: f
  } = l;
  return [{
    x: c,
    y: s
  }, {
    x: c + f,
    y: s
  }, {
    x: c,
    y: s + o
  }, {
    x: c + f,
    y: s + o
  }];
}
function nx(l, c) {
  if (!l || l.length === 0)
    return null;
  const [s] = l;
  return s[c];
}
const ax = (l) => {
  let {
    collisionRect: c,
    droppableRects: s,
    droppableContainers: o
  } = l;
  const f = io(c), h = [];
  for (const p of o) {
    const {
      id: y
    } = p, m = s.get(y);
    if (m) {
      const v = io(m), S = f.reduce((w, D, V) => w + _p(v[V], D), 0), x = Number((S / 4).toFixed(4));
      h.push({
        id: y,
        data: {
          droppableContainer: p,
          value: x
        }
      });
    }
  }
  return h.sort(Ep);
};
function lx(l, c) {
  const s = Math.max(c.top, l.top), o = Math.max(c.left, l.left), f = Math.min(c.left + c.width, l.left + l.width), h = Math.min(c.top + c.height, l.top + l.height), p = f - o, y = h - s;
  if (o < f && s < h) {
    const m = c.width * c.height, v = l.width * l.height, S = p * y, x = S / (m + v - S);
    return Number(x.toFixed(4));
  }
  return 0;
}
const ix = (l) => {
  let {
    collisionRect: c,
    droppableRects: s,
    droppableContainers: o
  } = l;
  const f = [];
  for (const h of o) {
    const {
      id: p
    } = h, y = s.get(p);
    if (y) {
      const m = lx(y, c);
      m > 0 && f.push({
        id: p,
        data: {
          droppableContainer: h,
          value: m
        }
      });
    }
  }
  return f.sort(tx);
};
function sx(l, c) {
  const {
    top: s,
    left: o,
    bottom: f,
    right: h
  } = c;
  return s <= l.y && l.y <= f && o <= l.x && l.x <= h;
}
const ux = (l) => {
  let {
    droppableContainers: c,
    droppableRects: s,
    pointerCoordinates: o
  } = l;
  if (!o)
    return [];
  const f = [];
  for (const h of c) {
    const {
      id: p
    } = h, y = s.get(p);
    if (y && sx(o, y)) {
      const v = io(y).reduce((x, w) => x + _p(o, w), 0), S = Number((v / 4).toFixed(4));
      f.push({
        id: p,
        data: {
          droppableContainer: h,
          value: S
        }
      });
    }
  }
  return f.sort(Ep);
};
function rx(l, c, s) {
  return {
    ...l,
    scaleX: c && s ? c.width / s.width : 1,
    scaleY: c && s ? c.height / s.height : 1
  };
}
function zp(l, c) {
  return l && c ? {
    x: l.left - c.left,
    y: l.top - c.top
  } : Sn;
}
function cx(l) {
  return function(s) {
    for (var o = arguments.length, f = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++)
      f[h - 1] = arguments[h];
    return f.reduce((p, y) => ({
      ...p,
      top: p.top + l * y.y,
      bottom: p.bottom + l * y.y,
      left: p.left + l * y.x,
      right: p.right + l * y.x
    }), {
      ...s
    });
  };
}
const ox = /* @__PURE__ */ cx(1);
function Tp(l) {
  if (l.startsWith("matrix3d(")) {
    const c = l.slice(9, -1).split(/, /);
    return {
      x: +c[12],
      y: +c[13],
      scaleX: +c[0],
      scaleY: +c[5]
    };
  } else if (l.startsWith("matrix(")) {
    const c = l.slice(7, -1).split(/, /);
    return {
      x: +c[4],
      y: +c[5],
      scaleX: +c[0],
      scaleY: +c[3]
    };
  }
  return null;
}
function dx(l, c, s) {
  const o = Tp(c);
  if (!o)
    return l;
  const {
    scaleX: f,
    scaleY: h,
    x: p,
    y
  } = o, m = l.left - p - (1 - f) * parseFloat(s), v = l.top - y - (1 - h) * parseFloat(s.slice(s.indexOf(" ") + 1)), S = f ? l.width / f : l.width, x = h ? l.height / h : l.height;
  return {
    width: S,
    height: x,
    top: v,
    right: m + S,
    bottom: v + x,
    left: m
  };
}
const fx = {
  ignoreTransform: !1
};
function Ll(l, c) {
  c === void 0 && (c = fx);
  let s = l.getBoundingClientRect();
  if (c.ignoreTransform) {
    const {
      transform: v,
      transformOrigin: S
    } = Ot(l).getComputedStyle(l);
    v && (s = dx(s, v, S));
  }
  const {
    top: o,
    left: f,
    width: h,
    height: p,
    bottom: y,
    right: m
  } = s;
  return {
    top: o,
    left: f,
    width: h,
    height: p,
    bottom: y,
    right: m
  };
}
function Rm(l) {
  return Ll(l, {
    ignoreTransform: !0
  });
}
function hx(l) {
  const c = l.innerWidth, s = l.innerHeight;
  return {
    top: 0,
    left: 0,
    right: c,
    bottom: s,
    width: c,
    height: s
  };
}
function mx(l, c) {
  return c === void 0 && (c = Ot(l).getComputedStyle(l)), c.position === "fixed";
}
function px(l, c) {
  c === void 0 && (c = Ot(l).getComputedStyle(l));
  const s = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((f) => {
    const h = c[f];
    return typeof h == "string" ? s.test(h) : !1;
  });
}
function bo(l, c) {
  const s = [];
  function o(f) {
    if (c != null && s.length >= c || !f)
      return s;
    if (xo(f) && f.scrollingElement != null && !s.includes(f.scrollingElement))
      return s.push(f.scrollingElement), s;
    if (!Xi(f) || Cp(f) || s.includes(f))
      return s;
    const h = Ot(l).getComputedStyle(f);
    return f !== l && px(f, h) && s.push(f), mx(f, h) ? s : o(f.parentNode);
  }
  return l ? o(l) : s;
}
function Dp(l) {
  const [c] = bo(l, 1);
  return c ?? null;
}
function Fc(l) {
  return !wu || !l ? null : Hl(l) ? l : yo(l) ? xo(l) || l === Bl(l).scrollingElement ? window : Xi(l) ? l : null : null;
}
function Ap(l) {
  return Hl(l) ? l.scrollX : l.scrollLeft;
}
function Mp(l) {
  return Hl(l) ? l.scrollY : l.scrollTop;
}
function so(l) {
  return {
    x: Ap(l),
    y: Mp(l)
  };
}
var jt;
(function(l) {
  l[l.Forward = 1] = "Forward", l[l.Backward = -1] = "Backward";
})(jt || (jt = {}));
function Rp(l) {
  return !wu || !l ? !1 : l === document.scrollingElement;
}
function Op(l) {
  const c = {
    x: 0,
    y: 0
  }, s = Rp(l) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: l.clientHeight,
    width: l.clientWidth
  }, o = {
    x: l.scrollWidth - s.width,
    y: l.scrollHeight - s.height
  }, f = l.scrollTop <= c.y, h = l.scrollLeft <= c.x, p = l.scrollTop >= o.y, y = l.scrollLeft >= o.x;
  return {
    isTop: f,
    isLeft: h,
    isBottom: p,
    isRight: y,
    maxScroll: o,
    minScroll: c
  };
}
const vx = {
  x: 0.2,
  y: 0.2
};
function gx(l, c, s, o, f) {
  let {
    top: h,
    left: p,
    right: y,
    bottom: m
  } = s;
  o === void 0 && (o = 10), f === void 0 && (f = vx);
  const {
    isTop: v,
    isBottom: S,
    isLeft: x,
    isRight: w
  } = Op(l), D = {
    x: 0,
    y: 0
  }, V = {
    x: 0,
    y: 0
  }, X = {
    height: c.height * f.y,
    width: c.width * f.x
  };
  return !v && h <= c.top + X.height ? (D.y = jt.Backward, V.y = o * Math.abs((c.top + X.height - h) / X.height)) : !S && m >= c.bottom - X.height && (D.y = jt.Forward, V.y = o * Math.abs((c.bottom - X.height - m) / X.height)), !w && y >= c.right - X.width ? (D.x = jt.Forward, V.x = o * Math.abs((c.right - X.width - y) / X.width)) : !x && p <= c.left + X.width && (D.x = jt.Backward, V.x = o * Math.abs((c.left + X.width - p) / X.width)), {
    direction: D,
    speed: V
  };
}
function yx(l) {
  if (l === document.scrollingElement) {
    const {
      innerWidth: h,
      innerHeight: p
    } = window;
    return {
      top: 0,
      left: 0,
      right: h,
      bottom: p,
      width: h,
      height: p
    };
  }
  const {
    top: c,
    left: s,
    right: o,
    bottom: f
  } = l.getBoundingClientRect();
  return {
    top: c,
    left: s,
    right: o,
    bottom: f,
    width: l.clientWidth,
    height: l.clientHeight
  };
}
function kp(l) {
  return l.reduce((c, s) => Ol(c, so(s)), Sn);
}
function xx(l) {
  return l.reduce((c, s) => c + Ap(s), 0);
}
function bx(l) {
  return l.reduce((c, s) => c + Mp(s), 0);
}
function Up(l, c) {
  if (c === void 0 && (c = Ll), !l)
    return;
  const {
    top: s,
    left: o,
    bottom: f,
    right: h
  } = c(l);
  Dp(l) && (f <= 0 || h <= 0 || s >= window.innerHeight || o >= window.innerWidth) && l.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const jx = [["x", ["left", "right"], xx], ["y", ["top", "bottom"], bx]];
class jo {
  constructor(c, s) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const o = bo(s), f = kp(o);
    this.rect = {
      ...c
    }, this.width = c.width, this.height = c.height;
    for (const [h, p, y] of jx)
      for (const m of p)
        Object.defineProperty(this, m, {
          get: () => {
            const v = y(o), S = f[h] - v;
            return this.rect[m] + S;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Oi {
  constructor(c) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((s) => {
        var o;
        return (o = this.target) == null ? void 0 : o.removeEventListener(...s);
      });
    }, this.target = c;
  }
  add(c, s, o) {
    var f;
    (f = this.target) == null || f.addEventListener(c, s, o), this.listeners.push([c, s, o]);
  }
}
function Sx(l) {
  const {
    EventTarget: c
  } = Ot(l);
  return l instanceof c ? l : Bl(l);
}
function Ic(l, c) {
  const s = Math.abs(l.x), o = Math.abs(l.y);
  return typeof c == "number" ? Math.sqrt(s ** 2 + o ** 2) > c : "x" in c && "y" in c ? s > c.x && o > c.y : "x" in c ? s > c.x : "y" in c ? o > c.y : !1;
}
var pn;
(function(l) {
  l.Click = "click", l.DragStart = "dragstart", l.Keydown = "keydown", l.ContextMenu = "contextmenu", l.Resize = "resize", l.SelectionChange = "selectionchange", l.VisibilityChange = "visibilitychange";
})(pn || (pn = {}));
function Om(l) {
  l.preventDefault();
}
function Cx(l) {
  l.stopPropagation();
}
var qe;
(function(l) {
  l.Space = "Space", l.Down = "ArrowDown", l.Right = "ArrowRight", l.Left = "ArrowLeft", l.Up = "ArrowUp", l.Esc = "Escape", l.Enter = "Enter", l.Tab = "Tab";
})(qe || (qe = {}));
const Hp = {
  start: [qe.Space, qe.Enter],
  cancel: [qe.Esc],
  end: [qe.Space, qe.Enter, qe.Tab]
}, Nx = (l, c) => {
  let {
    currentCoordinates: s
  } = c;
  switch (l.code) {
    case qe.Right:
      return {
        ...s,
        x: s.x + 25
      };
    case qe.Left:
      return {
        ...s,
        x: s.x - 25
      };
    case qe.Down:
      return {
        ...s,
        y: s.y + 25
      };
    case qe.Up:
      return {
        ...s,
        y: s.y - 25
      };
  }
};
class Bp {
  constructor(c) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = c;
    const {
      event: {
        target: s
      }
    } = c;
    this.props = c, this.listeners = new Oi(Bl(s)), this.windowListeners = new Oi(Ot(s)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(pn.Resize, this.handleCancel), this.windowListeners.add(pn.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(pn.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: c,
      onStart: s
    } = this.props, o = c.node.current;
    o && Up(o), s(Sn);
  }
  handleKeyDown(c) {
    if (Eu(c)) {
      const {
        active: s,
        context: o,
        options: f
      } = this.props, {
        keyboardCodes: h = Hp,
        coordinateGetter: p = Nx,
        scrollBehavior: y = "smooth"
      } = f, {
        code: m
      } = c;
      if (h.end.includes(m)) {
        this.handleEnd(c);
        return;
      }
      if (h.cancel.includes(m)) {
        this.handleCancel(c);
        return;
      }
      const {
        collisionRect: v
      } = o.current, S = v ? {
        x: v.left,
        y: v.top
      } : Sn;
      this.referenceCoordinates || (this.referenceCoordinates = S);
      const x = p(c, {
        active: s,
        context: o.current,
        currentCoordinates: S
      });
      if (x) {
        const w = xu(x, S), D = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: V
        } = o.current;
        for (const X of V) {
          const G = c.code, {
            isTop: H,
            isRight: B,
            isLeft: Z,
            isBottom: ne,
            maxScroll: le,
            minScroll: F
          } = Op(X), P = yx(X), O = {
            x: Math.min(G === qe.Right ? P.right - P.width / 2 : P.right, Math.max(G === qe.Right ? P.left : P.left + P.width / 2, x.x)),
            y: Math.min(G === qe.Down ? P.bottom - P.height / 2 : P.bottom, Math.max(G === qe.Down ? P.top : P.top + P.height / 2, x.y))
          }, I = G === qe.Right && !B || G === qe.Left && !Z, oe = G === qe.Down && !ne || G === qe.Up && !H;
          if (I && O.x !== x.x) {
            const ae = X.scrollLeft + w.x, ue = G === qe.Right && ae <= le.x || G === qe.Left && ae >= F.x;
            if (ue && !w.y) {
              X.scrollTo({
                left: ae,
                behavior: y
              });
              return;
            }
            ue ? D.x = X.scrollLeft - ae : D.x = G === qe.Right ? X.scrollLeft - le.x : X.scrollLeft - F.x, D.x && X.scrollBy({
              left: -D.x,
              behavior: y
            });
            break;
          } else if (oe && O.y !== x.y) {
            const ae = X.scrollTop + w.y, ue = G === qe.Down && ae <= le.y || G === qe.Up && ae >= F.y;
            if (ue && !w.x) {
              X.scrollTo({
                top: ae,
                behavior: y
              });
              return;
            }
            ue ? D.y = X.scrollTop - ae : D.y = G === qe.Down ? X.scrollTop - le.y : X.scrollTop - F.y, D.y && X.scrollBy({
              top: -D.y,
              behavior: y
            });
            break;
          }
        }
        this.handleMove(c, Ol(xu(x, this.referenceCoordinates), D));
      }
    }
  }
  handleMove(c, s) {
    const {
      onMove: o
    } = this.props;
    c.preventDefault(), o(s);
  }
  handleEnd(c) {
    const {
      onEnd: s
    } = this.props;
    c.preventDefault(), this.detach(), s();
  }
  handleCancel(c) {
    const {
      onCancel: s
    } = this.props;
    c.preventDefault(), this.detach(), s();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
Bp.activators = [{
  eventName: "onKeyDown",
  handler: (l, c, s) => {
    let {
      keyboardCodes: o = Hp,
      onActivation: f
    } = c, {
      active: h
    } = s;
    const {
      code: p
    } = l.nativeEvent;
    if (o.start.includes(p)) {
      const y = h.activatorNode.current;
      return y && l.target !== y ? !1 : (l.preventDefault(), f?.({
        event: l.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function km(l) {
  return !!(l && "distance" in l);
}
function Um(l) {
  return !!(l && "delay" in l);
}
class So {
  constructor(c, s, o) {
    var f;
    o === void 0 && (o = Sx(c.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = c, this.events = s;
    const {
      event: h
    } = c, {
      target: p
    } = h;
    this.props = c, this.events = s, this.document = Bl(p), this.documentListeners = new Oi(this.document), this.listeners = new Oi(o), this.windowListeners = new Oi(Ot(p)), this.initialCoordinates = (f = bu(h)) != null ? f : Sn, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: c,
      props: {
        options: {
          activationConstraint: s,
          bypassActivationConstraint: o
        }
      }
    } = this;
    if (this.listeners.add(c.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(c.end.name, this.handleEnd), c.cancel && this.listeners.add(c.cancel.name, this.handleCancel), this.windowListeners.add(pn.Resize, this.handleCancel), this.windowListeners.add(pn.DragStart, Om), this.windowListeners.add(pn.VisibilityChange, this.handleCancel), this.windowListeners.add(pn.ContextMenu, Om), this.documentListeners.add(pn.Keydown, this.handleKeydown), s) {
      if (o != null && o({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Um(s)) {
        this.timeoutId = setTimeout(this.handleStart, s.delay), this.handlePending(s);
        return;
      }
      if (km(s)) {
        this.handlePending(s);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(c, s) {
    const {
      active: o,
      onPending: f
    } = this.props;
    f(o, c, this.initialCoordinates, s);
  }
  handleStart() {
    const {
      initialCoordinates: c
    } = this, {
      onStart: s
    } = this.props;
    c && (this.activated = !0, this.documentListeners.add(pn.Click, Cx, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(pn.SelectionChange, this.removeTextSelection), s(c));
  }
  handleMove(c) {
    var s;
    const {
      activated: o,
      initialCoordinates: f,
      props: h
    } = this, {
      onMove: p,
      options: {
        activationConstraint: y
      }
    } = h;
    if (!f)
      return;
    const m = (s = bu(c)) != null ? s : Sn, v = xu(f, m);
    if (!o && y) {
      if (km(y)) {
        if (y.tolerance != null && Ic(v, y.tolerance))
          return this.handleCancel();
        if (Ic(v, y.distance))
          return this.handleStart();
      }
      if (Um(y) && Ic(v, y.tolerance))
        return this.handleCancel();
      this.handlePending(y, v);
      return;
    }
    c.cancelable && c.preventDefault(), p(m);
  }
  handleEnd() {
    const {
      onAbort: c,
      onEnd: s
    } = this.props;
    this.detach(), this.activated || c(this.props.active), s();
  }
  handleCancel() {
    const {
      onAbort: c,
      onCancel: s
    } = this.props;
    this.detach(), this.activated || c(this.props.active), s();
  }
  handleKeydown(c) {
    c.code === qe.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var c;
    (c = this.document.getSelection()) == null || c.removeAllRanges();
  }
}
const wx = {
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
class Lp extends So {
  constructor(c) {
    const {
      event: s
    } = c, o = Bl(s.target);
    super(c, wx, o);
  }
}
Lp.activators = [{
  eventName: "onPointerDown",
  handler: (l, c) => {
    let {
      nativeEvent: s
    } = l, {
      onActivation: o
    } = c;
    return !s.isPrimary || s.button !== 0 ? !1 : (o?.({
      event: s
    }), !0);
  }
}];
const _x = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var uo;
(function(l) {
  l[l.RightClick = 2] = "RightClick";
})(uo || (uo = {}));
class qp extends So {
  constructor(c) {
    super(c, _x, Bl(c.event.target));
  }
}
qp.activators = [{
  eventName: "onMouseDown",
  handler: (l, c) => {
    let {
      nativeEvent: s
    } = l, {
      onActivation: o
    } = c;
    return s.button === uo.RightClick ? !1 : (o?.({
      event: s
    }), !0);
  }
}];
const Pc = {
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
class Yp extends So {
  constructor(c) {
    super(c, Pc);
  }
  static setup() {
    return window.addEventListener(Pc.move.name, c, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Pc.move.name, c);
    };
    function c() {
    }
  }
}
Yp.activators = [{
  eventName: "onTouchStart",
  handler: (l, c) => {
    let {
      nativeEvent: s
    } = l, {
      onActivation: o
    } = c;
    const {
      touches: f
    } = s;
    return f.length > 1 ? !1 : (o?.({
      event: s
    }), !0);
  }
}];
var ki;
(function(l) {
  l[l.Pointer = 0] = "Pointer", l[l.DraggableRect = 1] = "DraggableRect";
})(ki || (ki = {}));
var Su;
(function(l) {
  l[l.TreeOrder = 0] = "TreeOrder", l[l.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Su || (Su = {}));
function Ex(l) {
  let {
    acceleration: c,
    activator: s = ki.Pointer,
    canScroll: o,
    draggingRect: f,
    enabled: h,
    interval: p = 5,
    order: y = Su.TreeOrder,
    pointerCoordinates: m,
    scrollableAncestors: v,
    scrollableAncestorRects: S,
    delta: x,
    threshold: w
  } = l;
  const D = Tx({
    delta: x,
    disabled: !h
  }), [V, X] = q0(), G = b.useRef({
    x: 0,
    y: 0
  }), H = b.useRef({
    x: 0,
    y: 0
  }), B = b.useMemo(() => {
    switch (s) {
      case ki.Pointer:
        return m ? {
          top: m.y,
          bottom: m.y,
          left: m.x,
          right: m.x
        } : null;
      case ki.DraggableRect:
        return f;
    }
  }, [s, f, m]), Z = b.useRef(null), ne = b.useCallback(() => {
    const F = Z.current;
    if (!F)
      return;
    const P = G.current.x * H.current.x, O = G.current.y * H.current.y;
    F.scrollBy(P, O);
  }, []), le = b.useMemo(() => y === Su.TreeOrder ? [...v].reverse() : v, [y, v]);
  b.useEffect(
    () => {
      if (!h || !v.length || !B) {
        X();
        return;
      }
      for (const F of le) {
        if (o?.(F) === !1)
          continue;
        const P = v.indexOf(F), O = S[P];
        if (!O)
          continue;
        const {
          direction: I,
          speed: oe
        } = gx(F, O, B, c, w);
        for (const ae of ["x", "y"])
          D[ae][I[ae]] || (oe[ae] = 0, I[ae] = 0);
        if (oe.x > 0 || oe.y > 0) {
          X(), Z.current = F, V(ne, p), G.current = oe, H.current = I;
          return;
        }
      }
      G.current = {
        x: 0,
        y: 0
      }, H.current = {
        x: 0,
        y: 0
      }, X();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      c,
      ne,
      o,
      X,
      h,
      p,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(B),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(D),
      V,
      v,
      le,
      S,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(w)
    ]
  );
}
const zx = {
  x: {
    [jt.Backward]: !1,
    [jt.Forward]: !1
  },
  y: {
    [jt.Backward]: !1,
    [jt.Forward]: !1
  }
};
function Tx(l) {
  let {
    delta: c,
    disabled: s
  } = l;
  const o = yu(c);
  return Gi((f) => {
    if (s || !o || !f)
      return zx;
    const h = {
      x: Math.sign(c.x - o.x),
      y: Math.sign(c.y - o.y)
    };
    return {
      x: {
        [jt.Backward]: f.x[jt.Backward] || h.x === -1,
        [jt.Forward]: f.x[jt.Forward] || h.x === 1
      },
      y: {
        [jt.Backward]: f.y[jt.Backward] || h.y === -1,
        [jt.Forward]: f.y[jt.Forward] || h.y === 1
      }
    };
  }, [s, c, o]);
}
function Dx(l, c) {
  const s = c != null ? l.get(c) : void 0, o = s ? s.node.current : null;
  return Gi((f) => {
    var h;
    return c == null ? null : (h = o ?? f) != null ? h : null;
  }, [o, c]);
}
function Ax(l, c) {
  return b.useMemo(() => l.reduce((s, o) => {
    const {
      sensor: f
    } = o, h = f.activators.map((p) => ({
      eventName: p.eventName,
      handler: c(p.handler, o)
    }));
    return [...s, ...h];
  }, []), [l, c]);
}
var Li;
(function(l) {
  l[l.Always = 0] = "Always", l[l.BeforeDragging = 1] = "BeforeDragging", l[l.WhileDragging = 2] = "WhileDragging";
})(Li || (Li = {}));
var ro;
(function(l) {
  l.Optimized = "optimized";
})(ro || (ro = {}));
const Hm = /* @__PURE__ */ new Map();
function Mx(l, c) {
  let {
    dragging: s,
    dependencies: o,
    config: f
  } = c;
  const [h, p] = b.useState(null), {
    frequency: y,
    measure: m,
    strategy: v
  } = f, S = b.useRef(l), x = G(), w = Bi(x), D = b.useCallback(function(H) {
    H === void 0 && (H = []), !w.current && p((B) => B === null ? H : B.concat(H.filter((Z) => !B.includes(Z))));
  }, [w]), V = b.useRef(null), X = Gi((H) => {
    if (x && !s)
      return Hm;
    if (!H || H === Hm || S.current !== l || h != null) {
      const B = /* @__PURE__ */ new Map();
      for (let Z of l) {
        if (!Z)
          continue;
        if (h && h.length > 0 && !h.includes(Z.id) && Z.rect.current) {
          B.set(Z.id, Z.rect.current);
          continue;
        }
        const ne = Z.node.current, le = ne ? new jo(m(ne), ne) : null;
        Z.rect.current = le, le && B.set(Z.id, le);
      }
      return B;
    }
    return H;
  }, [l, h, s, x, m]);
  return b.useEffect(() => {
    S.current = l;
  }, [l]), b.useEffect(
    () => {
      x || D();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, x]
  ), b.useEffect(
    () => {
      h && h.length > 0 && p(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(h)]
  ), b.useEffect(
    () => {
      x || typeof y != "number" || V.current !== null || (V.current = setTimeout(() => {
        D(), V.current = null;
      }, y));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y, x, D, ...o]
  ), {
    droppableRects: X,
    measureDroppableContainers: D,
    measuringScheduled: h != null
  };
  function G() {
    switch (v) {
      case Li.Always:
        return !1;
      case Li.BeforeDragging:
        return s;
      default:
        return !s;
    }
  }
}
function Co(l, c) {
  return Gi((s) => l ? s || (typeof c == "function" ? c(l) : l) : null, [c, l]);
}
function Rx(l, c) {
  return Co(l, c);
}
function Ox(l) {
  let {
    callback: c,
    disabled: s
  } = l;
  const o = _u(c), f = b.useMemo(() => {
    if (s || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: h
    } = window;
    return new h(o);
  }, [o, s]);
  return b.useEffect(() => () => f?.disconnect(), [f]), f;
}
function zu(l) {
  let {
    callback: c,
    disabled: s
  } = l;
  const o = _u(c), f = b.useMemo(
    () => {
      if (s || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: h
      } = window;
      return new h(o);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s]
  );
  return b.useEffect(() => () => f?.disconnect(), [f]), f;
}
function kx(l) {
  return new jo(Ll(l), l);
}
function Bm(l, c, s) {
  c === void 0 && (c = kx);
  const [o, f] = b.useState(null);
  function h() {
    f((m) => {
      if (!l)
        return null;
      if (l.isConnected === !1) {
        var v;
        return (v = m ?? s) != null ? v : null;
      }
      const S = c(l);
      return JSON.stringify(m) === JSON.stringify(S) ? m : S;
    });
  }
  const p = Ox({
    callback(m) {
      if (l)
        for (const v of m) {
          const {
            type: S,
            target: x
          } = v;
          if (S === "childList" && x instanceof HTMLElement && x.contains(l)) {
            h();
            break;
          }
        }
    }
  }), y = zu({
    callback: h
  });
  return jn(() => {
    h(), l ? (y?.observe(l), p?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (y?.disconnect(), p?.disconnect());
  }, [l]), o;
}
function Ux(l) {
  const c = Co(l);
  return zp(l, c);
}
const Lm = [];
function Hx(l) {
  const c = b.useRef(l), s = Gi((o) => l ? o && o !== Lm && l && c.current && l.parentNode === c.current.parentNode ? o : bo(l) : Lm, [l]);
  return b.useEffect(() => {
    c.current = l;
  }, [l]), s;
}
function Bx(l) {
  const [c, s] = b.useState(null), o = b.useRef(l), f = b.useCallback((h) => {
    const p = Fc(h.target);
    p && s((y) => y ? (y.set(p, so(p)), new Map(y)) : null);
  }, []);
  return b.useEffect(() => {
    const h = o.current;
    if (l !== h) {
      p(h);
      const y = l.map((m) => {
        const v = Fc(m);
        return v ? (v.addEventListener("scroll", f, {
          passive: !0
        }), [v, so(v)]) : null;
      }).filter((m) => m != null);
      s(y.length ? new Map(y) : null), o.current = l;
    }
    return () => {
      p(l), p(h);
    };
    function p(y) {
      y.forEach((m) => {
        const v = Fc(m);
        v?.removeEventListener("scroll", f);
      });
    }
  }, [f, l]), b.useMemo(() => l.length ? c ? Array.from(c.values()).reduce((h, p) => Ol(h, p), Sn) : kp(l) : Sn, [l, c]);
}
function qm(l, c) {
  c === void 0 && (c = []);
  const s = b.useRef(null);
  return b.useEffect(
    () => {
      s.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    c
  ), b.useEffect(() => {
    const o = l !== Sn;
    o && !s.current && (s.current = l), !o && s.current && (s.current = null);
  }, [l]), s.current ? xu(l, s.current) : Sn;
}
function Lx(l) {
  b.useEffect(
    () => {
      if (!wu)
        return;
      const c = l.map((s) => {
        let {
          sensor: o
        } = s;
        return o.setup == null ? void 0 : o.setup();
      });
      return () => {
        for (const s of c)
          s?.();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    l.map((c) => {
      let {
        sensor: s
      } = c;
      return s;
    })
  );
}
function qx(l, c) {
  return b.useMemo(() => l.reduce((s, o) => {
    let {
      eventName: f,
      handler: h
    } = o;
    return s[f] = (p) => {
      h(p, c);
    }, s;
  }, {}), [l, c]);
}
function Xp(l) {
  return b.useMemo(() => l ? hx(l) : null, [l]);
}
const Ym = [];
function Yx(l, c) {
  c === void 0 && (c = Ll);
  const [s] = l, o = Xp(s ? Ot(s) : null), [f, h] = b.useState(Ym);
  function p() {
    h(() => l.length ? l.map((m) => Rp(m) ? o : new jo(c(m), m)) : Ym);
  }
  const y = zu({
    callback: p
  });
  return jn(() => {
    y?.disconnect(), p(), l.forEach((m) => y?.observe(m));
  }, [l]), f;
}
function Gp(l) {
  if (!l)
    return null;
  if (l.children.length > 1)
    return l;
  const c = l.children[0];
  return Xi(c) ? c : l;
}
function Xx(l) {
  let {
    measure: c
  } = l;
  const [s, o] = b.useState(null), f = b.useCallback((v) => {
    for (const {
      target: S
    } of v)
      if (Xi(S)) {
        o((x) => {
          const w = c(S);
          return x ? {
            ...x,
            width: w.width,
            height: w.height
          } : w;
        });
        break;
      }
  }, [c]), h = zu({
    callback: f
  }), p = b.useCallback((v) => {
    const S = Gp(v);
    h?.disconnect(), S && h?.observe(S), o(S ? c(S) : null);
  }, [c, h]), [y, m] = gu(p);
  return b.useMemo(() => ({
    nodeRef: y,
    rect: s,
    setRef: m
  }), [s, y, m]);
}
const Gx = [{
  sensor: Lp,
  options: {}
}, {
  sensor: Bp,
  options: {}
}], Zx = {
  current: {}
}, fu = {
  draggable: {
    measure: Rm
  },
  droppable: {
    measure: Rm,
    strategy: Li.WhileDragging,
    frequency: ro.Optimized
  },
  dragOverlay: {
    measure: Ll
  }
};
class Ui extends Map {
  get(c) {
    var s;
    return c != null && (s = super.get(c)) != null ? s : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((c) => {
      let {
        disabled: s
      } = c;
      return !s;
    });
  }
  getNodeFor(c) {
    var s, o;
    return (s = (o = this.get(c)) == null ? void 0 : o.node.current) != null ? s : void 0;
  }
}
const Qx = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Ui(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: ju
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: fu,
  measureDroppableContainers: ju,
  windowRect: null,
  measuringScheduled: !1
}, Zp = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: ju,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: ju
}, Qi = /* @__PURE__ */ b.createContext(Zp), Qp = /* @__PURE__ */ b.createContext(Qx);
function Vx() {
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
      containers: new Ui()
    }
  };
}
function Kx(l, c) {
  switch (c.type) {
    case vt.DragStart:
      return {
        ...l,
        draggable: {
          ...l.draggable,
          initialCoordinates: c.initialCoordinates,
          active: c.active
        }
      };
    case vt.DragMove:
      return l.draggable.active == null ? l : {
        ...l,
        draggable: {
          ...l.draggable,
          translate: {
            x: c.coordinates.x - l.draggable.initialCoordinates.x,
            y: c.coordinates.y - l.draggable.initialCoordinates.y
          }
        }
      };
    case vt.DragEnd:
    case vt.DragCancel:
      return {
        ...l,
        draggable: {
          ...l.draggable,
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
    case vt.RegisterDroppable: {
      const {
        element: s
      } = c, {
        id: o
      } = s, f = new Ui(l.droppable.containers);
      return f.set(o, s), {
        ...l,
        droppable: {
          ...l.droppable,
          containers: f
        }
      };
    }
    case vt.SetDroppableDisabled: {
      const {
        id: s,
        key: o,
        disabled: f
      } = c, h = l.droppable.containers.get(s);
      if (!h || o !== h.key)
        return l;
      const p = new Ui(l.droppable.containers);
      return p.set(s, {
        ...h,
        disabled: f
      }), {
        ...l,
        droppable: {
          ...l.droppable,
          containers: p
        }
      };
    }
    case vt.UnregisterDroppable: {
      const {
        id: s,
        key: o
      } = c, f = l.droppable.containers.get(s);
      if (!f || o !== f.key)
        return l;
      const h = new Ui(l.droppable.containers);
      return h.delete(s), {
        ...l,
        droppable: {
          ...l.droppable,
          containers: h
        }
      };
    }
    default:
      return l;
  }
}
function $x(l) {
  let {
    disabled: c
  } = l;
  const {
    active: s,
    activatorEvent: o,
    draggableNodes: f
  } = b.useContext(Qi), h = yu(o), p = yu(s?.id);
  return b.useEffect(() => {
    if (!c && !o && h && p != null) {
      if (!Eu(h) || document.activeElement === h.target)
        return;
      const y = f.get(p);
      if (!y)
        return;
      const {
        activatorNode: m,
        node: v
      } = y;
      if (!m.current && !v.current)
        return;
      requestAnimationFrame(() => {
        for (const S of [m.current, v.current]) {
          if (!S)
            continue;
          const x = G0(S);
          if (x) {
            x.focus();
            break;
          }
        }
      });
    }
  }, [o, c, f, p, h]), null;
}
function Vp(l, c) {
  let {
    transform: s,
    ...o
  } = c;
  return l != null && l.length ? l.reduce((f, h) => h({
    transform: f,
    ...o
  }), s) : s;
}
function Jx(l) {
  return b.useMemo(
    () => ({
      draggable: {
        ...fu.draggable,
        ...l?.draggable
      },
      droppable: {
        ...fu.droppable,
        ...l?.droppable
      },
      dragOverlay: {
        ...fu.dragOverlay,
        ...l?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l?.draggable, l?.droppable, l?.dragOverlay]
  );
}
function Wx(l) {
  let {
    activeNode: c,
    measure: s,
    initialRect: o,
    config: f = !0
  } = l;
  const h = b.useRef(!1), {
    x: p,
    y
  } = typeof f == "boolean" ? {
    x: f,
    y: f
  } : f;
  jn(() => {
    if (!p && !y || !c) {
      h.current = !1;
      return;
    }
    if (h.current || !o)
      return;
    const v = c?.node.current;
    if (!v || v.isConnected === !1)
      return;
    const S = s(v), x = zp(S, o);
    if (p || (x.x = 0), y || (x.y = 0), h.current = !0, Math.abs(x.x) > 0 || Math.abs(x.y) > 0) {
      const w = Dp(v);
      w && w.scrollBy({
        top: x.y,
        left: x.x
      });
    }
  }, [c, p, y, o, s]);
}
const Tu = /* @__PURE__ */ b.createContext({
  ...Sn,
  scaleX: 1,
  scaleY: 1
});
var xa;
(function(l) {
  l[l.Uninitialized = 0] = "Uninitialized", l[l.Initializing = 1] = "Initializing", l[l.Initialized = 2] = "Initialized";
})(xa || (xa = {}));
const Fx = /* @__PURE__ */ b.memo(function(c) {
  var s, o, f, h;
  let {
    id: p,
    accessibility: y,
    autoScroll: m = !0,
    children: v,
    sensors: S = Gx,
    collisionDetection: x = ix,
    measuring: w,
    modifiers: D,
    ...V
  } = c;
  const X = b.useReducer(Kx, void 0, Vx), [G, H] = X, [B, Z] = J0(), [ne, le] = b.useState(xa.Uninitialized), F = ne === xa.Initialized, {
    draggable: {
      active: P,
      nodes: O,
      translate: I
    },
    droppable: {
      containers: oe
    }
  } = G, ae = P != null ? O.get(P) : null, ue = b.useRef({
    initial: null,
    translated: null
  }), de = b.useMemo(() => {
    var st;
    return P != null ? {
      id: P,
      // It's possible for the active node to unmount while dragging
      data: (st = ae?.data) != null ? st : Zx,
      rect: ue
    } : null;
  }, [P, ae]), xe = b.useRef(null), [Me, k] = b.useState(null), [J, se] = b.useState(null), pe = Bi(V, Object.values(V)), ge = Zi("DndDescribedBy", p), N = b.useMemo(() => oe.getEnabled(), [oe]), q = Jx(w), {
    droppableRects: ee,
    measureDroppableContainers: ie,
    measuringScheduled: ve
  } = Mx(N, {
    dragging: F,
    dependencies: [I.x, I.y],
    config: q.droppable
  }), E = Dx(O, P), te = b.useMemo(() => J ? bu(J) : null, [J]), j = Ka(), A = Rx(E, q.draggable.measure);
  Wx({
    activeNode: P != null ? O.get(P) : null,
    config: j.layoutShiftCompensation,
    initialRect: A,
    measure: q.draggable.measure
  });
  const L = Bm(E, q.draggable.measure, A), re = Bm(E ? E.parentElement : null), fe = b.useRef({
    activatorEvent: null,
    active: null,
    activeNode: E,
    collisionRect: null,
    collisions: null,
    droppableRects: ee,
    draggableNodes: O,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: oe,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Fe = oe.getNodeFor((s = fe.current.over) == null ? void 0 : s.id), Ce = Xx({
    measure: q.dragOverlay.measure
  }), Ie = (o = Ce.nodeRef.current) != null ? o : E, W = F ? (f = Ce.rect) != null ? f : L : null, Se = !!(Ce.nodeRef.current && Ce.rect), Ee = Ux(Se ? null : L), Ne = Xp(Ie ? Ot(Ie) : null), Ge = Hx(F ? Fe ?? E : null), nt = Yx(Ge), ce = Vp(D, {
    transform: {
      x: I.x - Ee.x,
      y: I.y - Ee.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: J,
    active: de,
    activeNodeRect: L,
    containerNodeRect: re,
    draggingNodeRect: W,
    over: fe.current.over,
    overlayNodeRect: Ce.rect,
    scrollableAncestors: Ge,
    scrollableAncestorRects: nt,
    windowRect: Ne
  }), Pe = te ? Ol(te, I) : null, et = Bx(Ge), Qa = qm(et), T = qm(et, [L]), be = Ol(ce, Qa), Be = W ? ox(W, ce) : null, it = de && Be ? x({
    active: de,
    collisionRect: Be,
    droppableRects: ee,
    droppableContainers: N,
    pointerCoordinates: Pe
  }) : null, zn = nx(it, "id"), [Pt, Vi] = b.useState(null), ba = Se ? ce : Ol(ce, T), Dt = rx(ba, (h = Pt?.rect) != null ? h : null, L), en = b.useRef(null), Et = b.useCallback(
    (st, ut) => {
      let {
        sensor: gt,
        options: kt
      } = ut;
      if (xe.current == null)
        return;
      const Ut = O.get(xe.current);
      if (!Ut)
        return;
      const zt = st.nativeEvent, Ht = new gt({
        active: xe.current,
        activeNode: Ut,
        event: zt,
        options: kt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: fe,
        onAbort(mt) {
          if (!O.get(mt))
            return;
          const {
            onDragAbort: Qt
          } = pe.current, nn = {
            id: mt
          };
          Qt?.(nn), B({
            type: "onDragAbort",
            event: nn
          });
        },
        onPending(mt, vn, Qt, nn) {
          if (!O.get(mt))
            return;
          const {
            onDragPending: Dn
          } = pe.current, gn = {
            id: mt,
            constraint: vn,
            initialCoordinates: Qt,
            offset: nn
          };
          Dn?.(gn), B({
            type: "onDragPending",
            event: gn
          });
        },
        onStart(mt) {
          const vn = xe.current;
          if (vn == null)
            return;
          const Qt = O.get(vn);
          if (!Qt)
            return;
          const {
            onDragStart: nn
          } = pe.current, Tn = {
            activatorEvent: zt,
            active: {
              id: vn,
              data: Qt.data,
              rect: ue
            }
          };
          La.unstable_batchedUpdates(() => {
            nn?.(Tn), le(xa.Initializing), H({
              type: vt.DragStart,
              initialCoordinates: mt,
              active: vn
            }), B({
              type: "onDragStart",
              event: Tn
            }), k(en.current), se(zt);
          });
        },
        onMove(mt) {
          H({
            type: vt.DragMove,
            coordinates: mt
          });
        },
        onEnd: tn(vt.DragEnd),
        onCancel: tn(vt.DragCancel)
      });
      en.current = Ht;
      function tn(mt) {
        return async function() {
          const {
            active: Qt,
            collisions: nn,
            over: Tn,
            scrollAdjustedTranslate: Dn
          } = fe.current;
          let gn = null;
          if (Qt && Dn) {
            const {
              cancelDrop: Jn
            } = pe.current;
            gn = {
              activatorEvent: zt,
              active: Qt,
              collisions: nn,
              delta: Dn,
              over: Tn
            }, mt === vt.DragEnd && typeof Jn == "function" && await Promise.resolve(Jn(gn)) && (mt = vt.DragCancel);
          }
          xe.current = null, La.unstable_batchedUpdates(() => {
            H({
              type: mt
            }), le(xa.Uninitialized), Vi(null), k(null), se(null), en.current = null;
            const Jn = mt === vt.DragEnd ? "onDragEnd" : "onDragCancel";
            if (gn) {
              const an = pe.current[Jn];
              an?.(gn), B({
                type: Jn,
                event: gn
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [O]
  ), Au = b.useCallback((st, ut) => (gt, kt) => {
    const Ut = gt.nativeEvent, zt = O.get(kt);
    if (
      // Another sensor is already instantiating
      xe.current !== null || // No active draggable
      !zt || // Event has already been captured
      Ut.dndKit || Ut.defaultPrevented
    )
      return;
    const Ht = {
      active: zt
    };
    st(gt, ut.options, Ht) === !0 && (Ut.dndKit = {
      capturedBy: ut.sensor
    }, xe.current = kt, Et(gt, ut));
  }, [O, Et]), Ki = Ax(S, Au);
  Lx(S), jn(() => {
    L && ne === xa.Initializing && le(xa.Initialized);
  }, [L, ne]), b.useEffect(
    () => {
      const {
        onDragMove: st
      } = pe.current, {
        active: ut,
        activatorEvent: gt,
        collisions: kt,
        over: Ut
      } = fe.current;
      if (!ut || !gt)
        return;
      const zt = {
        active: ut,
        activatorEvent: gt,
        collisions: kt,
        delta: {
          x: be.x,
          y: be.y
        },
        over: Ut
      };
      La.unstable_batchedUpdates(() => {
        st?.(zt), B({
          type: "onDragMove",
          event: zt
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [be.x, be.y]
  ), b.useEffect(
    () => {
      const {
        active: st,
        activatorEvent: ut,
        collisions: gt,
        droppableContainers: kt,
        scrollAdjustedTranslate: Ut
      } = fe.current;
      if (!st || xe.current == null || !ut || !Ut)
        return;
      const {
        onDragOver: zt
      } = pe.current, Ht = kt.get(zn), tn = Ht && Ht.rect.current ? {
        id: Ht.id,
        rect: Ht.rect.current,
        data: Ht.data,
        disabled: Ht.disabled
      } : null, mt = {
        active: st,
        activatorEvent: ut,
        collisions: gt,
        delta: {
          x: Ut.x,
          y: Ut.y
        },
        over: tn
      };
      La.unstable_batchedUpdates(() => {
        Vi(tn), zt?.(mt), B({
          type: "onDragOver",
          event: mt
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [zn]
  ), jn(() => {
    fe.current = {
      activatorEvent: J,
      active: de,
      activeNode: E,
      collisionRect: Be,
      collisions: it,
      droppableRects: ee,
      draggableNodes: O,
      draggingNode: Ie,
      draggingNodeRect: W,
      droppableContainers: oe,
      over: Pt,
      scrollableAncestors: Ge,
      scrollAdjustedTranslate: be
    }, ue.current = {
      initial: W,
      translated: Be
    };
  }, [de, E, it, Be, O, Ie, W, ee, oe, Pt, Ge, be]), Ex({
    ...j,
    delta: I,
    draggingRect: Be,
    pointerCoordinates: Pe,
    scrollableAncestors: Ge,
    scrollableAncestorRects: nt
  });
  const Mu = b.useMemo(() => ({
    active: de,
    activeNode: E,
    activeNodeRect: L,
    activatorEvent: J,
    collisions: it,
    containerNodeRect: re,
    dragOverlay: Ce,
    draggableNodes: O,
    droppableContainers: oe,
    droppableRects: ee,
    over: Pt,
    measureDroppableContainers: ie,
    scrollableAncestors: Ge,
    scrollableAncestorRects: nt,
    measuringConfiguration: q,
    measuringScheduled: ve,
    windowRect: Ne
  }), [de, E, L, J, it, re, Ce, O, oe, ee, Pt, ie, Ge, nt, q, ve, Ne]), Va = b.useMemo(() => ({
    activatorEvent: J,
    activators: Ki,
    active: de,
    activeNodeRect: L,
    ariaDescribedById: {
      draggable: ge
    },
    dispatch: H,
    draggableNodes: O,
    over: Pt,
    measureDroppableContainers: ie
  }), [J, Ki, de, L, H, ge, O, Pt, ie]);
  return tt.createElement(wp.Provider, {
    value: Z
  }, tt.createElement(Qi.Provider, {
    value: Va
  }, tt.createElement(Qp.Provider, {
    value: Mu
  }, tt.createElement(Tu.Provider, {
    value: Dt
  }, v)), tt.createElement($x, {
    disabled: y?.restoreFocus === !1
  })), tt.createElement(I0, {
    ...y,
    hiddenTextDescribedById: ge
  }));
  function Ka() {
    const st = Me?.autoScrollEnabled === !1, ut = typeof m == "object" ? m.enabled === !1 : m === !1, gt = F && !st && !ut;
    return typeof m == "object" ? {
      ...m,
      enabled: gt
    } : {
      enabled: gt
    };
  }
}), Ix = /* @__PURE__ */ b.createContext(null), Xm = "button", Px = "Draggable";
function Kp(l) {
  let {
    id: c,
    data: s,
    disabled: o = !1,
    attributes: f
  } = l;
  const h = Zi(Px), {
    activators: p,
    activatorEvent: y,
    active: m,
    activeNodeRect: v,
    ariaDescribedById: S,
    draggableNodes: x,
    over: w
  } = b.useContext(Qi), {
    role: D = Xm,
    roleDescription: V = "draggable",
    tabIndex: X = 0
  } = f ?? {}, G = m?.id === c, H = b.useContext(G ? Tu : Ix), [B, Z] = gu(), [ne, le] = gu(), F = qx(p, c), P = Bi(s);
  jn(
    () => (x.set(c, {
      id: c,
      key: h,
      node: B,
      activatorNode: ne,
      data: P
    }), () => {
      const I = x.get(c);
      I && I.key === h && x.delete(c);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x, c]
  );
  const O = b.useMemo(() => ({
    role: D,
    tabIndex: X,
    "aria-disabled": o,
    "aria-pressed": G && D === Xm ? !0 : void 0,
    "aria-roledescription": V,
    "aria-describedby": S.draggable
  }), [o, D, X, G, V, S.draggable]);
  return {
    active: m,
    activatorEvent: y,
    activeNodeRect: v,
    attributes: O,
    isDragging: G,
    listeners: o ? void 0 : F,
    node: B,
    over: w,
    setNodeRef: Z,
    setActivatorNodeRef: le,
    transform: H
  };
}
function $p() {
  return b.useContext(Qp);
}
const eb = "Droppable", tb = {
  timeout: 25
};
function No(l) {
  let {
    data: c,
    disabled: s = !1,
    id: o,
    resizeObserverConfig: f
  } = l;
  const h = Zi(eb), {
    active: p,
    dispatch: y,
    over: m,
    measureDroppableContainers: v
  } = b.useContext(Qi), S = b.useRef({
    disabled: s
  }), x = b.useRef(!1), w = b.useRef(null), D = b.useRef(null), {
    disabled: V,
    updateMeasurementsFor: X,
    timeout: G
  } = {
    ...tb,
    ...f
  }, H = Bi(X ?? o), B = b.useCallback(
    () => {
      if (!x.current) {
        x.current = !0;
        return;
      }
      D.current != null && clearTimeout(D.current), D.current = setTimeout(() => {
        v(Array.isArray(H.current) ? H.current : [H.current]), D.current = null;
      }, G);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [G]
  ), Z = zu({
    callback: B,
    disabled: V || !p
  }), ne = b.useCallback((O, I) => {
    Z && (I && (Z.unobserve(I), x.current = !1), O && Z.observe(O));
  }, [Z]), [le, F] = gu(ne), P = Bi(c);
  return b.useEffect(() => {
    !Z || !le.current || (Z.disconnect(), x.current = !1, Z.observe(le.current));
  }, [le, Z]), b.useEffect(
    () => (y({
      type: vt.RegisterDroppable,
      element: {
        id: o,
        key: h,
        disabled: s,
        node: le,
        rect: w,
        data: P
      }
    }), () => y({
      type: vt.UnregisterDroppable,
      key: h,
      id: o
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o]
  ), b.useEffect(() => {
    s !== S.current.disabled && (y({
      type: vt.SetDroppableDisabled,
      id: o,
      key: h,
      disabled: s
    }), S.current.disabled = s);
  }, [o, h, s, y]), {
    active: p,
    rect: w,
    isOver: m?.id === o,
    node: le,
    over: m,
    setNodeRef: F
  };
}
function nb(l) {
  let {
    animation: c,
    children: s
  } = l;
  const [o, f] = b.useState(null), [h, p] = b.useState(null), y = yu(s);
  return !s && !o && y && f(y), jn(() => {
    if (!h)
      return;
    const m = o?.key, v = o?.props.id;
    if (m == null || v == null) {
      f(null);
      return;
    }
    Promise.resolve(c(v, h)).then(() => {
      f(null);
    });
  }, [c, o, h]), tt.createElement(tt.Fragment, null, s, o ? b.cloneElement(o, {
    ref: p
  }) : null);
}
const ab = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function lb(l) {
  let {
    children: c
  } = l;
  return tt.createElement(Qi.Provider, {
    value: Zp
  }, tt.createElement(Tu.Provider, {
    value: ab
  }, c));
}
const ib = {
  position: "fixed",
  touchAction: "none"
}, sb = (l) => Eu(l) ? "transform 250ms ease" : void 0, ub = /* @__PURE__ */ b.forwardRef((l, c) => {
  let {
    as: s,
    activatorEvent: o,
    adjustScale: f,
    children: h,
    className: p,
    rect: y,
    style: m,
    transform: v,
    transition: S = sb
  } = l;
  if (!y)
    return null;
  const x = f ? v : {
    ...v,
    scaleX: 1,
    scaleY: 1
  }, w = {
    ...ib,
    width: y.width,
    height: y.height,
    top: y.top,
    left: y.left,
    transform: En.Transform.toString(x),
    transformOrigin: f && o ? ex(o, y) : void 0,
    transition: typeof S == "function" ? S(o) : S,
    ...m
  };
  return tt.createElement(s, {
    className: p,
    style: w,
    ref: c
  }, h);
}), rb = (l) => (c) => {
  let {
    active: s,
    dragOverlay: o
  } = c;
  const f = {}, {
    styles: h,
    className: p
  } = l;
  if (h != null && h.active)
    for (const [y, m] of Object.entries(h.active))
      m !== void 0 && (f[y] = s.node.style.getPropertyValue(y), s.node.style.setProperty(y, m));
  if (h != null && h.dragOverlay)
    for (const [y, m] of Object.entries(h.dragOverlay))
      m !== void 0 && o.node.style.setProperty(y, m);
  return p != null && p.active && s.node.classList.add(p.active), p != null && p.dragOverlay && o.node.classList.add(p.dragOverlay), function() {
    for (const [m, v] of Object.entries(f))
      s.node.style.setProperty(m, v);
    p != null && p.active && s.node.classList.remove(p.active);
  };
}, cb = (l) => {
  let {
    transform: {
      initial: c,
      final: s
    }
  } = l;
  return [{
    transform: En.Transform.toString(c)
  }, {
    transform: En.Transform.toString(s)
  }];
}, ob = {
  duration: 250,
  easing: "ease",
  keyframes: cb,
  sideEffects: /* @__PURE__ */ rb({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function db(l) {
  let {
    config: c,
    draggableNodes: s,
    droppableContainers: o,
    measuringConfiguration: f
  } = l;
  return _u((h, p) => {
    if (c === null)
      return;
    const y = s.get(h);
    if (!y)
      return;
    const m = y.node.current;
    if (!m)
      return;
    const v = Gp(p);
    if (!v)
      return;
    const {
      transform: S
    } = Ot(p).getComputedStyle(p), x = Tp(S);
    if (!x)
      return;
    const w = typeof c == "function" ? c : fb(c);
    return Up(m, f.draggable.measure), w({
      active: {
        id: h,
        data: y.data,
        node: m,
        rect: f.draggable.measure(m)
      },
      draggableNodes: s,
      dragOverlay: {
        node: p,
        rect: f.dragOverlay.measure(v)
      },
      droppableContainers: o,
      measuringConfiguration: f,
      transform: x
    });
  });
}
function fb(l) {
  const {
    duration: c,
    easing: s,
    sideEffects: o,
    keyframes: f
  } = {
    ...ob,
    ...l
  };
  return (h) => {
    let {
      active: p,
      dragOverlay: y,
      transform: m,
      ...v
    } = h;
    if (!c)
      return;
    const S = {
      x: y.rect.left - p.rect.left,
      y: y.rect.top - p.rect.top
    }, x = {
      scaleX: m.scaleX !== 1 ? p.rect.width * m.scaleX / y.rect.width : 1,
      scaleY: m.scaleY !== 1 ? p.rect.height * m.scaleY / y.rect.height : 1
    }, w = {
      x: m.x - S.x,
      y: m.y - S.y,
      ...x
    }, D = f({
      ...v,
      active: p,
      dragOverlay: y,
      transform: {
        initial: m,
        final: w
      }
    }), [V] = D, X = D[D.length - 1];
    if (JSON.stringify(V) === JSON.stringify(X))
      return;
    const G = o?.({
      active: p,
      dragOverlay: y,
      ...v
    }), H = y.node.animate(D, {
      duration: c,
      easing: s,
      fill: "forwards"
    });
    return new Promise((B) => {
      H.onfinish = () => {
        G?.(), B();
      };
    });
  };
}
let Gm = 0;
function hb(l) {
  return b.useMemo(() => {
    if (l != null)
      return Gm++, Gm;
  }, [l]);
}
const mb = /* @__PURE__ */ tt.memo((l) => {
  let {
    adjustScale: c = !1,
    children: s,
    dropAnimation: o,
    style: f,
    transition: h,
    modifiers: p,
    wrapperElement: y = "div",
    className: m,
    zIndex: v = 999
  } = l;
  const {
    activatorEvent: S,
    active: x,
    activeNodeRect: w,
    containerNodeRect: D,
    draggableNodes: V,
    droppableContainers: X,
    dragOverlay: G,
    over: H,
    measuringConfiguration: B,
    scrollableAncestors: Z,
    scrollableAncestorRects: ne,
    windowRect: le
  } = $p(), F = b.useContext(Tu), P = hb(x?.id), O = Vp(p, {
    activatorEvent: S,
    active: x,
    activeNodeRect: w,
    containerNodeRect: D,
    draggingNodeRect: G.rect,
    over: H,
    overlayNodeRect: G.rect,
    scrollableAncestors: Z,
    scrollableAncestorRects: ne,
    transform: F,
    windowRect: le
  }), I = Co(w), oe = db({
    config: o,
    draggableNodes: V,
    droppableContainers: X,
    measuringConfiguration: B
  }), ae = I ? G.setRef : void 0;
  return tt.createElement(lb, null, tt.createElement(nb, {
    animation: oe
  }, x && P ? tt.createElement(ub, {
    key: P,
    id: x.id,
    ref: ae,
    as: y,
    activatorEvent: S,
    adjustScale: c,
    className: m,
    transition: h,
    rect: I,
    style: {
      zIndex: v,
      ...f
    },
    transform: O
  }, s) : null));
});
function wo(l, c, s) {
  const o = l.slice();
  return o.splice(s < 0 ? o.length + s : s, 0, o.splice(c, 1)[0]), o;
}
function pb(l, c) {
  return l.reduce((s, o, f) => {
    const h = c.get(o);
    return h && (s[f] = h), s;
  }, Array(l.length));
}
function su(l) {
  return l !== null && l >= 0;
}
function vb(l, c) {
  if (l === c)
    return !0;
  if (l.length !== c.length)
    return !1;
  for (let s = 0; s < l.length; s++)
    if (l[s] !== c[s])
      return !1;
  return !0;
}
function gb(l) {
  return typeof l == "boolean" ? {
    draggable: l,
    droppable: l
  } : l;
}
const uu = {
  scaleX: 1,
  scaleY: 1
}, Zm = (l) => {
  var c;
  let {
    rects: s,
    activeNodeRect: o,
    activeIndex: f,
    overIndex: h,
    index: p
  } = l;
  const y = (c = s[f]) != null ? c : o;
  if (!y)
    return null;
  const m = yb(s, p, f);
  if (p === f) {
    const v = s[h];
    return v ? {
      x: f < h ? v.left + v.width - (y.left + y.width) : v.left - y.left,
      y: 0,
      ...uu
    } : null;
  }
  return p > f && p <= h ? {
    x: -y.width - m,
    y: 0,
    ...uu
  } : p < f && p >= h ? {
    x: y.width + m,
    y: 0,
    ...uu
  } : {
    x: 0,
    y: 0,
    ...uu
  };
};
function yb(l, c, s) {
  const o = l[c], f = l[c - 1], h = l[c + 1];
  return !o || !f && !h ? 0 : s < c ? f ? o.left - (f.left + f.width) : h.left - (o.left + o.width) : h ? h.left - (o.left + o.width) : o.left - (f.left + f.width);
}
const Jp = (l) => {
  let {
    rects: c,
    activeIndex: s,
    overIndex: o,
    index: f
  } = l;
  const h = wo(c, o, s), p = c[f], y = h[f];
  return !y || !p ? null : {
    x: y.left - p.left,
    y: y.top - p.top,
    scaleX: y.width / p.width,
    scaleY: y.height / p.height
  };
}, Wp = "Sortable", Fp = /* @__PURE__ */ tt.createContext({
  activeIndex: -1,
  containerId: Wp,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Jp,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Qm(l) {
  let {
    children: c,
    id: s,
    items: o,
    strategy: f = Jp,
    disabled: h = !1
  } = l;
  const {
    active: p,
    dragOverlay: y,
    droppableRects: m,
    over: v,
    measureDroppableContainers: S
  } = $p(), x = Zi(Wp, s), w = y.rect !== null, D = b.useMemo(() => o.map((F) => typeof F == "object" && "id" in F ? F.id : F), [o]), V = p != null, X = p ? D.indexOf(p.id) : -1, G = v ? D.indexOf(v.id) : -1, H = b.useRef(D), B = !vb(D, H.current), Z = G !== -1 && X === -1 || B, ne = gb(h);
  jn(() => {
    B && V && S(D);
  }, [B, D, V, S]), b.useEffect(() => {
    H.current = D;
  }, [D]);
  const le = b.useMemo(
    () => ({
      activeIndex: X,
      containerId: x,
      disabled: ne,
      disableTransforms: Z,
      items: D,
      overIndex: G,
      useDragOverlay: w,
      sortedRects: pb(D, m),
      strategy: f
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [X, x, ne.draggable, ne.droppable, Z, D, G, m, w, f]
  );
  return tt.createElement(Fp.Provider, {
    value: le
  }, c);
}
const xb = (l) => {
  let {
    id: c,
    items: s,
    activeIndex: o,
    overIndex: f
  } = l;
  return wo(s, o, f).indexOf(c);
}, bb = (l) => {
  let {
    containerId: c,
    isSorting: s,
    wasDragging: o,
    index: f,
    items: h,
    newIndex: p,
    previousItems: y,
    previousContainerId: m,
    transition: v
  } = l;
  return !v || !o || y !== h && f === p ? !1 : s ? !0 : p !== f && c === m;
}, jb = {
  duration: 200,
  easing: "ease"
}, Ip = "transform", Sb = /* @__PURE__ */ En.Transition.toString({
  property: Ip,
  duration: 0,
  easing: "linear"
}), Cb = {
  roleDescription: "sortable"
};
function Nb(l) {
  let {
    disabled: c,
    index: s,
    node: o,
    rect: f
  } = l;
  const [h, p] = b.useState(null), y = b.useRef(s);
  return jn(() => {
    if (!c && s !== y.current && o.current) {
      const m = f.current;
      if (m) {
        const v = Ll(o.current, {
          ignoreTransform: !0
        }), S = {
          x: m.left - v.left,
          y: m.top - v.top,
          scaleX: m.width / v.width,
          scaleY: m.height / v.height
        };
        (S.x || S.y) && p(S);
      }
    }
    s !== y.current && (y.current = s);
  }, [c, s, o, f]), b.useEffect(() => {
    h && p(null);
  }, [h]), h;
}
function _o(l) {
  let {
    animateLayoutChanges: c = bb,
    attributes: s,
    disabled: o,
    data: f,
    getNewIndex: h = xb,
    id: p,
    strategy: y,
    resizeObserverConfig: m,
    transition: v = jb
  } = l;
  const {
    items: S,
    containerId: x,
    activeIndex: w,
    disabled: D,
    disableTransforms: V,
    sortedRects: X,
    overIndex: G,
    useDragOverlay: H,
    strategy: B
  } = b.useContext(Fp), Z = wb(o, D), ne = S.indexOf(p), le = b.useMemo(() => ({
    sortable: {
      containerId: x,
      index: ne,
      items: S
    },
    ...f
  }), [x, f, ne, S]), F = b.useMemo(() => S.slice(S.indexOf(p)), [S, p]), {
    rect: P,
    node: O,
    isOver: I,
    setNodeRef: oe
  } = No({
    id: p,
    data: le,
    disabled: Z.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: F,
      ...m
    }
  }), {
    active: ae,
    activatorEvent: ue,
    activeNodeRect: de,
    attributes: xe,
    setNodeRef: Me,
    listeners: k,
    isDragging: J,
    over: se,
    setActivatorNodeRef: pe,
    transform: ge
  } = Kp({
    id: p,
    data: le,
    attributes: {
      ...Cb,
      ...s
    },
    disabled: Z.draggable
  }), N = L0(oe, Me), q = !!ae, ee = q && !V && su(w) && su(G), ie = !H && J, ve = ie && ee ? ge : null, te = ee ? ve ?? (y ?? B)({
    rects: X,
    activeNodeRect: de,
    activeIndex: w,
    overIndex: G,
    index: ne
  }) : null, j = su(w) && su(G) ? h({
    id: p,
    items: S,
    activeIndex: w,
    overIndex: G
  }) : ne, A = ae?.id, L = b.useRef({
    activeId: A,
    items: S,
    newIndex: j,
    containerId: x
  }), re = S !== L.current.items, fe = c({
    active: ae,
    containerId: x,
    isDragging: J,
    isSorting: q,
    id: p,
    index: ne,
    items: S,
    newIndex: L.current.newIndex,
    previousItems: L.current.items,
    previousContainerId: L.current.containerId,
    transition: v,
    wasDragging: L.current.activeId != null
  }), Fe = Nb({
    disabled: !fe,
    index: ne,
    node: O,
    rect: P
  });
  return b.useEffect(() => {
    q && L.current.newIndex !== j && (L.current.newIndex = j), x !== L.current.containerId && (L.current.containerId = x), S !== L.current.items && (L.current.items = S);
  }, [q, j, x, S]), b.useEffect(() => {
    if (A === L.current.activeId)
      return;
    if (A != null && L.current.activeId == null) {
      L.current.activeId = A;
      return;
    }
    const Ie = setTimeout(() => {
      L.current.activeId = A;
    }, 50);
    return () => clearTimeout(Ie);
  }, [A]), {
    active: ae,
    activeIndex: w,
    attributes: xe,
    data: le,
    rect: P,
    index: ne,
    newIndex: j,
    items: S,
    isOver: I,
    isSorting: q,
    isDragging: J,
    listeners: k,
    node: O,
    overIndex: G,
    over: se,
    setNodeRef: N,
    setActivatorNodeRef: pe,
    setDroppableNodeRef: oe,
    setDraggableNodeRef: Me,
    transform: Fe ?? te,
    transition: Ce()
  };
  function Ce() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Fe || // Or to prevent items jumping to back to their "new" position when items change
      re && L.current.newIndex === ne
    )
      return Sb;
    if (!(ie && !Eu(ue) || !v) && (q || fe))
      return En.Transition.toString({
        ...v,
        property: Ip
      });
  }
}
function wb(l, c) {
  var s, o;
  return typeof l == "boolean" ? {
    draggable: l,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (s = l?.draggable) != null ? s : c.draggable,
    droppable: (o = l?.droppable) != null ? o : c.droppable
  };
}
qe.Down, qe.Right, qe.Up, qe.Left;
function Pp({
  src: l,
  alt: c = "",
  fill: s,
  unoptimized: o,
  sizes: f,
  ...h
}) {
  return /* @__PURE__ */ u.jsx(
    "img",
    {
      src: l,
      alt: c,
      ...h,
      style: s ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%"
      } : void 0
    }
  );
}
const co = (l) => l.name, ev = ({
  fileName: l,
  mimeType: c
}) => c?.startsWith("image/") ? "image" : c?.startsWith("video/") ? "video" : /\.(png|jpe?g|gif|webp)$/i.test(l) ? "image" : "file";
async function Vm(l) {
  if (!l) throw new Error("No media URL");
  const c = await fetch(l, { credentials: "same-origin" });
  if (!c.ok) throw new Error("Media unavailable");
  return c.blob();
}
const Km = {
  downloadTaskAttachmentThumbnail: (l, c) => Vm(c.thumbnail_url),
  downloadTaskAttachment: async (l, c) => ({ blob: await Vm(c.download_url) })
}, Ai = /* @__PURE__ */ new Map();
let Ba = null;
function _b(l, c) {
  return typeof IntersectionObserver > "u" ? (c(), () => {
  }) : (Ba || (Ba = new IntersectionObserver(
    (s) => {
      s.forEach((o) => {
        if (!o.isIntersecting) return;
        const f = Ai.get(o.target);
        f && (Ai.delete(o.target), Ba?.unobserve(o.target), f());
      });
    },
    {
      rootMargin: "900px 700px",
      threshold: 0.01
    }
  )), Ai.set(l, c), Ba.observe(l), () => {
    Ai.delete(l), Ba?.unobserve(l), Ai.size === 0 && (Ba?.disconnect(), Ba = null);
  });
}
function Eb({
  taskId: l,
  attachment: c
}) {
  const [s, o] = b.useState(null), [f, h] = b.useState(!1), [p, y] = b.useState(!1), m = ev({
    fileName: c.file_name,
    mimeType: c.mime_type
  }) === "video", v = c.id, S = c.thumbnail_url, x = c.download_url, w = c.file_name;
  return b.useEffect(() => {
    let D = !0, V = null;
    return Km.downloadTaskAttachmentThumbnail(l, {
      id: v,
      thumbnail_url: S
    }).then((X) => ({ blob: X, original: !1 })).catch(async () => {
      const { blob: X } = await Km.downloadTaskAttachment(l, {
        id: v,
        download_url: x,
        file_name: w
      });
      return { blob: X, original: !0 };
    }).then(({ blob: X, original: G }) => {
      D && (V = URL.createObjectURL(X), h(G), o(V));
    }).catch(() => {
      D && y(!0);
    }), () => {
      D = !1, V && URL.revokeObjectURL(V);
    };
  }, [v, x, w, l, S]), /* @__PURE__ */ u.jsx("div", { className: "absolute inset-0 overflow-hidden bg-[var(--surface-secondary)]", children: s ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    m && f ? /* @__PURE__ */ u.jsx(
      "video",
      {
        src: s,
        muted: !0,
        playsInline: !0,
        preload: "metadata",
        className: "h-full w-full object-cover"
      }
    ) : /* @__PURE__ */ u.jsx(
      Pp,
      {
        src: s,
        alt: "",
        fill: !0,
        unoptimized: !0,
        sizes: "272px",
        className: "object-cover",
        draggable: !1
      }
    ),
    m ? /* @__PURE__ */ u.jsx("span", { className: "app-surface-elevated pointer-events-none absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border-subtle)]", children: /* @__PURE__ */ u.jsx(Rl, { size: 13, className: "translate-x-px" }) }) : null
  ] }) : /* @__PURE__ */ u.jsx("span", { className: "app-text-muted absolute inset-0 flex items-center justify-center", children: p ? /* @__PURE__ */ u.jsx(bp, { size: 20 }) : /* @__PURE__ */ u.jsx(kl, { size: 18, className: "animate-spin" }) }) });
}
function zb({
  taskId: l,
  attachment: c
}) {
  const s = b.useRef(null), [o, f] = b.useState(!1);
  return b.useEffect(() => {
    const h = s.current;
    if (!(!h || o))
      return _b(h, () => f(!0));
  }, [o]), /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: s,
      className: "absolute inset-0 overflow-hidden bg-[var(--surface-secondary)]",
      children: o ? /* @__PURE__ */ u.jsx(
        Eb,
        {
          taskId: l,
          attachment: c
        },
        c.id
      ) : null
    }
  );
}
function tv({
  taskId: l,
  cover: c,
  className: s = ""
}) {
  const o = b.useMemo(
    () => c.comment?.attachments.find((h) => {
      const p = ev({
        fileName: h.file_name,
        mimeType: h.mime_type
      });
      return p === "image" || p === "video";
    }),
    [c.comment?.attachments]
  ), f = c.kind === "attachment" ? c.attachment : o;
  if (f)
    return /* @__PURE__ */ u.jsx(
      "div",
      {
        className: `relative overflow-hidden bg-[var(--surface-secondary)] ${s}`,
        children: /* @__PURE__ */ u.jsx(zb, { taskId: l, attachment: f })
      }
    );
  if (c.kind === "checklist" && c.checklist) {
    const { completed: h, items: p, total: y } = c.checklist;
    if (y <= 0 || p.length === 0) return null;
    const m = Math.round(h / y * 100);
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        className: `app-surface-muted flex flex-col justify-center overflow-hidden p-2 ${s}`,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ u.jsx("div", { className: "h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[var(--surface-secondary)]", children: /* @__PURE__ */ u.jsx(
              "div",
              {
                className: "h-full rounded-full bg-emerald-500 transition-[width]",
                style: { width: `${m}%` }
              }
            ) }),
            /* @__PURE__ */ u.jsxs("span", { className: "app-text-muted shrink-0 text-[9px] tabular-nums", children: [
              h,
              "/",
              y
            ] })
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "mt-1.5 space-y-0.5 overflow-hidden", children: p.map((v) => /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: "flex min-w-0 items-center gap-1.5 text-[10px] leading-3.5",
              children: [
                /* @__PURE__ */ u.jsx(
                  "span",
                  {
                    className: `flex h-3 w-3 shrink-0 items-center justify-center rounded-sm border ${v.is_completed ? "border-emerald-500 bg-emerald-500 text-white" : "border-[var(--border-strong)]"}`,
                    children: v.is_completed ? /* @__PURE__ */ u.jsx(qa, { size: 8 }) : null
                  }
                ),
                /* @__PURE__ */ u.jsx(
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
  if (c.kind === "comment" && c.comment)
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        className: `app-surface-muted flex flex-col justify-center overflow-hidden p-3 ${s}`,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-[var(--foreground)]", children: [
            /* @__PURE__ */ u.jsx(vo, { size: 14, className: "shrink-0 text-sky-400" }),
            /* @__PURE__ */ u.jsx("span", { className: "truncate", children: co(c.comment.author) })
          ] }),
          /* @__PURE__ */ u.jsx("p", { className: "app-text-wrap mt-2 line-clamp-3 text-xs leading-4 text-[var(--foreground)]", children: c.comment.text || "Комментарий с вложением" })
        ]
      }
    );
  if (c.kind === "external_link" && c.external_link) {
    let h = c.external_link.url;
    try {
      h = new URL(c.external_link.url).hostname;
    } catch {
    }
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        className: `app-surface-muted flex flex-col justify-center overflow-hidden p-3 ${s}`,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-[var(--foreground)]", children: [
            /* @__PURE__ */ u.jsx(Gy, { size: 14, className: "shrink-0 text-cyan-400" }),
            /* @__PURE__ */ u.jsx("span", { className: "truncate", children: c.external_link.title || h })
          ] }),
          /* @__PURE__ */ u.jsx("p", { className: "app-text-muted mt-2 truncate text-[10px]", children: h }),
          /* @__PURE__ */ u.jsx("p", { className: "app-text-muted mt-1 line-clamp-2 break-all text-[10px]", children: c.external_link.url })
        ]
      }
    );
  }
  return c.kind === "linked_object" && c.linked_object ? /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: `app-surface-muted flex flex-col justify-center overflow-hidden p-3 ${s}`,
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 text-[10px] font-medium uppercase text-sky-400", children: [
          /* @__PURE__ */ u.jsx(Nu, { size: 13, className: "shrink-0" }),
          /* @__PURE__ */ u.jsx("span", { className: "truncate", children: c.linked_object.kind_display })
        ] }),
        /* @__PURE__ */ u.jsx("p", { className: "mt-2 truncate text-xs font-semibold text-[var(--foreground)]", children: c.linked_object.title }),
        c.linked_object.description ? /* @__PURE__ */ u.jsx("p", { className: "app-text-muted mt-1 line-clamp-2 text-[10px] leading-4", children: c.linked_object.description }) : null
      ]
    }
  ) : /* @__PURE__ */ u.jsx(
    "div",
    {
      className: `app-surface-muted flex items-center justify-center ${s}`,
      children: /* @__PURE__ */ u.jsx(Ky, { size: 20, className: "app-text-muted" })
    }
  );
}
const Tb = (l) => l.name, Db = (l) => (/* @__PURE__ */ new Date(l + "T00:00:00")).toLocaleDateString("ru-RU"), Ab = "app-text-muted mt-1 block max-h-8 w-full max-w-[13rem] overflow-hidden whitespace-normal break-all text-xs leading-4";
function Mb({ description: l }) {
  return /* @__PURE__ */ u.jsx(
    "p",
    {
      className: Ab,
      style: { overflowWrap: "anywhere", wordBreak: "break-all" },
      children: l
    }
  );
}
const qi = [
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
], $m = Object.fromEntries(
  qi.map((l) => [l.value, l])
);
function Rb(l) {
  if (!l) return null;
  const c = String(l).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!c) return null;
  const s = Number(c[1]), o = Number(c[2]), f = Number(c[3]);
  if (!Number.isFinite(s) || !Number.isFinite(o) || !Number.isFinite(f))
    return null;
  const h = new Date(s, o - 1, f);
  return h.setHours(0, 0, 0, 0), h.getTime();
}
function Ob(l, c = "app-badge") {
  if (!l.due_date || l.completed_at) return c;
  const s = Rb(l.due_date);
  if (s === null) return c;
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const f = o.getTime();
  return s < f ? "app-feedback-danger" : s === f ? "app-feedback-warning" : c;
}
const kb = b.memo(function({
  task: c,
  onOpen: s,
  currentUserId: o,
  claiming: f,
  onClaim: h,
  completing: p,
  onComplete: y,
  menuOpen: m,
  onToggleTaskMenu: v,
  attributes: S,
  listeners: x,
  setNodeRef: w,
  style: D,
  isDragging: V = !1,
  onPointerEnter: X,
  onPointerLeave: G,
  onPointerDownCapture: H,
  onPointerUpCapture: B,
  onPointerCancelCapture: Z
}) {
  const ne = $m[c.priority] ?? $m.medium, le = Ob(c), F = (!c.assignee || !c.assignee.is_active) && !c.completed_at, P = c.assignee?.id === o && !c.completed_at;
  return /* @__PURE__ */ u.jsxs(
    "article",
    {
      ref: w,
      style: D,
      className: `tasks-task-card app-surface-elevated cursor-grab select-none rounded-xl border border-[var(--border-subtle)] p-3 shadow-sm transition active:cursor-grabbing ${V ? "opacity-30" : "hover:border-[var(--border-strong)]"}`,
      title: "Перетащите задачу в нужную колонку",
      onClick: () => s(c),
      onPointerEnter: X,
      onPointerLeave: G,
      onPointerDownCapture: H,
      onPointerUpCapture: B,
      onPointerCancelCapture: Z,
      ...S,
      ...x,
      children: [
        c.cover ? /* @__PURE__ */ u.jsx(
          tv,
          {
            taskId: c.id,
            cover: c.cover,
            className: "-mx-3 -mt-3 mb-3 aspect-[16/7] max-h-32 w-[calc(100%+1.5rem)] rounded-t-[11px] border-b border-[var(--border-subtle)]"
          }
        ) : null,
        /* @__PURE__ */ u.jsxs("div", { className: "mb-2 min-w-0 overflow-hidden whitespace-normal text-left", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex min-w-0 items-start gap-2", children: [
            /* @__PURE__ */ u.jsxs("span", { className: "app-badge shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-semibold", children: [
              "#",
              c.id
            ] }),
            /* @__PURE__ */ u.jsx(
              "h3",
              {
                className: "line-clamp-4 min-w-0 flex-1 break-words text-sm font-semibold leading-5 text-[var(--foreground)]",
                title: c.title,
                children: c.title
              }
            ),
            /* @__PURE__ */ u.jsx(
              "div",
              {
                className: "relative shrink-0",
                onPointerDown: (O) => O.stopPropagation(),
                onClick: (O) => O.stopPropagation(),
                children: /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (O) => v(c.id, O.currentTarget),
                    className: "app-icon-button flex h-7 w-7 items-center justify-center rounded-md",
                    title: "Действия",
                    "aria-label": "Действия с задачей",
                    "aria-expanded": m,
                    "aria-haspopup": "menu",
                    children: /* @__PURE__ */ u.jsx(
                      Yi,
                      {
                        size: 14,
                        className: `transition-transform ${m ? "" : "-rotate-90"}`
                      }
                    )
                  }
                )
              }
            )
          ] }),
          c.description ? /* @__PURE__ */ u.jsx(Mb, { description: c.description }) : null,
          /* @__PURE__ */ u.jsx("div", { className: "mt-1 flex justify-end", children: /* @__PURE__ */ u.jsxs(
            "span",
            {
              className: `whitespace-nowrap text-right text-[11px] font-medium ${ne.textClassName}`,
              children: [
                ne.urgencyLabel,
                " срочность"
              ]
            }
          ) })
        ] }),
        c.labels && c.labels.length > 0 ? /* @__PURE__ */ u.jsx("div", { className: "mb-2 flex flex-wrap gap-1.5", children: c.labels.map((O) => /* @__PURE__ */ u.jsx(
          "span",
          {
            className: "inline-flex max-w-full items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-white",
            style: { backgroundColor: O.color || "#38bdf8" },
            children: O.name
          },
          O.id
        )) }) : null,
        /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          F ? /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              onPointerDown: (O) => O.stopPropagation(),
              onClick: (O) => {
                O.stopPropagation(), h(c);
              },
              disabled: f,
              className: "app-action-primary inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full disabled:cursor-wait disabled:opacity-60",
              title: "Взять задачу в работу",
              "aria-label": `Взять задачу в работу ${c.title}`,
              children: f ? /* @__PURE__ */ u.jsx(kl, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ u.jsx(Rl, { size: 14 })
            }
          ) : null,
          P ? /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              onPointerDown: (O) => O.stopPropagation(),
              onClick: (O) => {
                O.stopPropagation(), y(c);
              },
              disabled: p,
              className: "app-action-success inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full disabled:cursor-wait disabled:opacity-60",
              title: "Завершить задачу",
              "aria-label": `Завершить задачу ${c.title}`,
              children: p ? /* @__PURE__ */ u.jsx(kl, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ u.jsx(qa, { size: 14, strokeWidth: 2.5 })
            }
          ) : null,
          c.assignee ? /* @__PURE__ */ u.jsxs("span", { className: "app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px]", children: [
            /* @__PURE__ */ u.jsx(U0, { size: 11 }),
            Tb(c.assignee)
          ] }) : null,
          c.due_date ? /* @__PURE__ */ u.jsxs(
            "span",
            {
              className: `${le} inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px]`,
              children: [
                /* @__PURE__ */ u.jsx(Hy, { size: 11 }),
                Db(c.due_date)
              ]
            }
          ) : null,
          (c.checklist_total || 0) > 0 ? /* @__PURE__ */ u.jsxs("span", { className: "app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px]", children: [
            /* @__PURE__ */ u.jsx(po, { size: 11 }),
            c.checklist_completed || 0,
            "/",
            c.checklist_total
          ] }) : null,
          (c.attachments_count || 0) > 0 ? /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              onPointerDown: (O) => O.stopPropagation(),
              onClick: (O) => {
                O.stopPropagation(), s(c, "attachments");
              },
              className: "app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] transition hover:border-[var(--border-strong)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]",
              title: "Открыть вложения задачи",
              "aria-label": `Открыть вложения задачи: ${c.attachments_count}`,
              children: [
                /* @__PURE__ */ u.jsx(vu, { size: 11 }),
                c.attachments_count
              ]
            }
          ) : null,
          (c.linked_objects_count || c.linked_messages_count || 0) > 0 ? /* @__PURE__ */ u.jsxs("span", { className: "app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px]", children: [
            /* @__PURE__ */ u.jsx(Nu, { size: 11 }),
            c.linked_objects_count || c.linked_messages_count
          ] }) : null,
          (c.comments_count || 0) > 0 ? /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              onPointerDown: (O) => O.stopPropagation(),
              onClick: (O) => {
                O.stopPropagation(), s(c, "comments");
              },
              className: "app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] transition hover:border-[var(--border-strong)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]",
              title: "Открыть комментарии задачи",
              "aria-label": `Открыть комментарии задачи: ${c.comments_count}`,
              children: [
                /* @__PURE__ */ u.jsx(vo, { size: 11 }),
                c.comments_count
              ]
            }
          ) : null
        ] })
      ]
    }
  );
});
function Ub({
  task: l,
  onBindingChange: c,
  onDraggingChange: s
}) {
  const { attributes: o, listeners: f, setNodeRef: h, isDragging: p } = Kp({
    id: `task-${l.id}`,
    data: { type: "task", taskId: l.id }
  }), y = b.useMemo(
    () => ({
      attributes: o,
      listeners: f,
      setNodeRef: h,
      isDragging: p
    }),
    [o, p, f, h]
  );
  return b.useLayoutEffect(() => (c(y), () => c(null)), [y, c]), b.useEffect(() => {
    s(p);
  }, [p, s]), null;
}
const nv = b.memo(function(c) {
  const { setNodeRef: s, isOver: o } = No({
    id: `${c.isOverlay ? "overlay" : "card"}-target-${c.task.id}`,
    disabled: c.isOverlay,
    data: {
      acceptsTasks: !0,
      columnId: c.task.column,
      rowId: c.task.row,
      before: c.task.id
    }
  }), [f, h] = b.useState(!1), [p, y] = b.useState(
    null
  ), m = b.useRef(!1), v = b.useRef(!1), S = b.useRef(!1), x = b.useCallback((w) => {
    S.current = w, !w && !m.current && h(!1);
  }, []);
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    f ? /* @__PURE__ */ u.jsx(
      Ub,
      {
        task: c.task,
        onBindingChange: y,
        onDraggingChange: x
      }
    ) : null,
    /* @__PURE__ */ u.jsx(
      kb,
      {
        ...c,
        ...p || {},
        setNodeRef: (w) => {
          s(w), p?.setNodeRef?.(w);
        },
        style: o ? { borderTop: "3px solid var(--accent-primary)" } : void 0,
        onPointerEnter: () => {
          m.current = !0, h(!0);
        },
        onPointerLeave: () => {
          m.current = !1, !v.current && !S.current && h(!1);
        },
        onPointerDownCapture: () => {
          v.current = !0, f || La.flushSync(() => h(!0));
        },
        onPointerUpCapture: () => {
          v.current = !1, !m.current && !S.current && h(!1);
        },
        onPointerCancelCapture: () => {
          v.current = !1, !m.current && !S.current && h(!1);
        }
      },
      `task-card-content-${c.task.id}`
    )
  ] });
});
function Hb({
  title: l,
  priority: c,
  saving: s,
  columnName: o,
  onTitleChange: f,
  onPriorityChange: h,
  onSubmit: p,
  onCancel: y
}) {
  return /* @__PURE__ */ u.jsxs(
    "form",
    {
      onSubmit: (m) => {
        m.preventDefault(), p();
      },
      onPointerDown: (m) => m.stopPropagation(),
      className: "app-surface-elevated rounded-xl border border-[var(--accent-primary)] p-2 shadow-sm",
      children: [
        /* @__PURE__ */ u.jsx(
          "input",
          {
            autoFocus: !0,
            value: l,
            onChange: (m) => f(m.target.value),
            onKeyDown: (m) => {
              m.key === "Escape" && (m.preventDefault(), y());
            },
            disabled: s,
            maxLength: 255,
            className: "app-input w-full rounded-lg px-3 py-2 text-sm",
            placeholder: "Название задачи",
            "aria-label": `Название новой задачи в колонке ${o}`
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: "mt-2 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ u.jsx(
            "div",
            {
              className: "flex items-center gap-1",
              role: "group",
              "aria-label": "Приоритет новой задачи",
              children: qi.map((m) => {
                const v = m.value === c;
                return /* @__PURE__ */ u.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => h(m.value),
                    disabled: s,
                    className: `flex h-6 min-w-6 items-center overflow-hidden rounded-full transition-all duration-200 ease-out disabled:opacity-50 ${v ? `max-w-28 px-2 shadow-sm ${m.selectedClassName}` : "w-6 max-w-6 justify-center px-0 hover:bg-[var(--surface-tertiary)]"}`,
                    title: `Приоритет: ${m.label}`,
                    "aria-label": `Приоритет: ${m.label}`,
                    "aria-pressed": v,
                    children: [
                      v ? null : /* @__PURE__ */ u.jsx(
                        "span",
                        {
                          className: `h-3 w-3 shrink-0 rounded-full ${m.dotClassName}`,
                          "aria-hidden": "true"
                        }
                      ),
                      v ? /* @__PURE__ */ u.jsx("span", { className: "whitespace-nowrap text-[10px] font-semibold leading-none text-white", children: m.label }) : null
                    ]
                  },
                  m.value
                );
              })
            }
          ),
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "button",
                onClick: y,
                disabled: s,
                className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg disabled:opacity-50",
                title: "Отмена",
                "aria-label": "Отменить создание задачи",
                children: /* @__PURE__ */ u.jsx(Ya, { size: 14 })
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "submit",
                disabled: s || !l.trim(),
                className: "app-action-primary flex h-8 w-8 items-center justify-center rounded-lg disabled:opacity-50",
                title: "Создать задачу",
                "aria-label": "Создать задачу",
                children: s ? /* @__PURE__ */ u.jsx(kl, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ u.jsx(qa, { size: 15 })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Xa = {
  draggedItem: 20,
  columnMenu: 60,
  pagePopover: 90
};
function Bb({
  anchorRef: l,
  menuRef: c,
  menuWidth: s = 176,
  widthClassName: o = "w-44",
  zIndex: f = Xa.pagePopover,
  children: h
}) {
  const [p, y] = b.useState(null);
  return b.useEffect(() => {
    const m = () => {
      const v = l.current;
      if (!v) return;
      const S = v.getBoundingClientRect(), x = window.innerWidth, w = window.innerHeight, D = 8, V = 6, X = w - S.bottom - D - V, G = S.top - D - V, H = X >= 96 || X >= G, B = Math.min(
        Math.max(D, S.right - s),
        Math.max(D, x - s - D)
      );
      y(
        H ? {
          left: B,
          top: S.bottom + V,
          maxHeight: Math.max(72, X)
        } : {
          left: B,
          bottom: w - S.top + V,
          maxHeight: Math.max(72, G)
        }
      );
    };
    return m(), window.addEventListener("resize", m), window.addEventListener("scroll", m, !0), () => {
      window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0);
    };
  }, [l, s]), !p || typeof document > "u" ? null : La.createPortal(
    /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: c,
        role: "menu",
        className: `app-menu fixed ${o} overflow-y-auto overscroll-contain rounded-lg p-1.5 shadow-xl`,
        style: {
          left: p.left,
          top: p.top,
          bottom: p.bottom,
          maxHeight: p.maxHeight,
          zIndex: f
        },
        children: h
      }
    ),
    document.body
  );
}
function av({
  tasks: l,
  onOpenTask: c,
  onEditTask: s,
  onDeleteTask: o,
  currentUserId: f,
  claimingTaskId: h,
  onClaimTask: p,
  completingTaskId: y,
  onCompleteTask: m,
  openMenuTaskId: v,
  onToggleTaskMenu: S,
  quickTaskComposer: x
}) {
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    x,
    l.length > 0 ? l.map((w) => /* @__PURE__ */ u.jsx(
      nv,
      {
        task: w,
        onOpen: c,
        onEdit: s,
        onDelete: o,
        currentUserId: f,
        claiming: h === w.id,
        onClaim: p,
        completing: y === w.id,
        onComplete: m,
        menuOpen: v === w.id,
        onToggleTaskMenu: S
      },
      w.id
    )) : x ? null : /* @__PURE__ */ u.jsx("div", { className: "app-surface rounded-xl border border-dashed border-[var(--border-subtle)] px-3 py-5 text-center", children: /* @__PURE__ */ u.jsx("p", { className: "app-text-muted text-xs", children: "Нет задач" }) })
  ] });
}
function Lb({
  column: l,
  tasks: c,
  displayTasksCount: s,
  onCreateTask: o,
  onOpenTask: f,
  onEditTask: h,
  onDeleteTask: p,
  currentUserId: y,
  claimingTaskId: m,
  onClaimTask: v,
  completingTaskId: S,
  onCompleteTask: x,
  openMenuTaskId: w,
  onToggleTaskMenu: D,
  columnMenuOpen: V,
  columnMenuRef: X,
  onToggleColumnMenu: G,
  onEditColumn: H,
  onDeleteColumn: B,
  onCreateSubcolumn: Z,
  onCreateRow: ne,
  onColumnMount: le,
  contentVisible: F = !0,
  onToggleContentVisibility: P,
  linkedColumnHighlight: O = !1,
  synchronizedColumnDrag: I = !1,
  fillAvailableHeight: oe = !1,
  quickTaskComposer: ae
}) {
  const {
    attributes: ue,
    listeners: de,
    setActivatorNodeRef: xe,
    setNodeRef: Me,
    transform: k,
    transition: J,
    isDragging: se,
    isOver: pe
  } = _o({
    id: `column-${l.id}`,
    data: {
      type: "column",
      columnId: l.id,
      rowId: null,
      acceptsTasks: !0
    }
  }), ge = {
    transform: En.Transform.toString(k),
    transition: J,
    zIndex: se ? Xa.draggedItem : V ? Xa.columnMenu : void 0
  }, N = b.useCallback(
    (ee) => {
      Me(ee), le(l.id, ee);
    },
    [l.id, le, Me]
  ), q = O || pe && !I ? "border-[var(--accent-primary)]" : "border-[var(--border-subtle)]";
  return /* @__PURE__ */ u.jsxs(
    "section",
    {
      ref: N,
      style: ge,
      className: `flex ${F ? "tasks-mobile-lane-viewport min-h-[28rem]" : ""} w-[18rem] min-w-[18rem] flex-col transition xl:max-h-none ${oe ? "xl:min-h-full" : ""} ${se ? "opacity-70" : ""}`,
      children: [
        /* @__PURE__ */ u.jsx(
          "div",
          {
            className: `tasks-board-column-header-sticky ${F ? "" : "tasks-board-column-header-sticky-standalone"}`,
            children: /* @__PURE__ */ u.jsxs(
              "div",
              {
                className: `tasks-board-column-header app-surface flex min-h-16 items-center justify-between gap-3 rounded-xl px-3 py-3 transition ${q} ${se ? "shadow-xl" : ""}`,
                children: [
                  /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      ref: xe,
                      className: "min-w-0 flex-1 cursor-grab overflow-hidden active:cursor-grabbing",
                      title: "Перетащите, чтобы изменить порядок колонок",
                      ...ue,
                      ...de,
                      children: [
                        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ u.jsx(
                            "span",
                            {
                              className: "h-2.5 w-2.5 shrink-0 rounded-full",
                              style: { backgroundColor: l.color || "#38bdf8" }
                            }
                          ),
                          /* @__PURE__ */ u.jsx("h2", { className: "min-w-0 truncate text-sm font-semibold text-[var(--foreground)]", children: l.name })
                        ] }),
                        /* @__PURE__ */ u.jsxs("p", { className: "app-text-muted mt-0.5 text-xs", children: [
                          s ?? c.length,
                          " задач"
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ u.jsxs("div", { className: "flex shrink-0 items-center gap-1", children: [
                    /* @__PURE__ */ u.jsx(
                      "button",
                      {
                        type: "button",
                        onPointerDown: (ee) => ee.stopPropagation(),
                        onClick: (ee) => {
                          ee.stopPropagation(), P?.();
                        },
                        className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                        title: F ? "Скрыть содержимое колонки" : "Показать содержимое колонки",
                        "aria-label": F ? `Скрыть содержимое колонки ${l.name}` : `Показать содержимое колонки ${l.name}`,
                        "aria-pressed": !F,
                        children: F ? /* @__PURE__ */ u.jsx(gp, { size: 15 }) : /* @__PURE__ */ u.jsx(yp, { size: 15 })
                      }
                    ),
                    /* @__PURE__ */ u.jsx(
                      "button",
                      {
                        type: "button",
                        onPointerDown: (ee) => ee.stopPropagation(),
                        onClick: (ee) => {
                          ee.stopPropagation(), o(l.id, null);
                        },
                        className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                        title: "Создать задачу",
                        "aria-label": "Создать задачу",
                        children: /* @__PURE__ */ u.jsx(Mt, { size: 16 })
                      }
                    ),
                    /* @__PURE__ */ u.jsxs(
                      "div",
                      {
                        ref: V ? X : null,
                        className: "relative",
                        onPointerDown: (ee) => ee.stopPropagation(),
                        onClick: (ee) => ee.stopPropagation(),
                        children: [
                          /* @__PURE__ */ u.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: G,
                              className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                              title: "Действия с колонкой",
                              "aria-label": `Действия с колонкой ${l.name}`,
                              "aria-expanded": V,
                              "aria-haspopup": "menu",
                              children: /* @__PURE__ */ u.jsx(
                                Yi,
                                {
                                  size: 14,
                                  className: `transition-transform ${V ? "" : "-rotate-90"}`
                                }
                              )
                            }
                          ),
                          V ? /* @__PURE__ */ u.jsxs("div", { className: "app-menu absolute right-0 top-full z-30 mt-2 w-44 rounded-lg p-1.5", children: [
                            l.parent ? null : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                              /* @__PURE__ */ u.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => Z(l),
                                  className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                                  children: [
                                    /* @__PURE__ */ u.jsx(Mt, { size: 14, className: "app-text-muted" }),
                                    "Добавить подколонку"
                                  ]
                                }
                              ),
                              /* @__PURE__ */ u.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => ne?.(l),
                                  className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                                  children: [
                                    /* @__PURE__ */ u.jsx(go, { size: 14, className: "app-text-muted" }),
                                    "Добавить дорожку"
                                  ]
                                }
                              )
                            ] }),
                            /* @__PURE__ */ u.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => H(l),
                                className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                                children: [
                                  /* @__PURE__ */ u.jsx(Za, { size: 14, className: "app-text-muted" }),
                                  "Редактировать"
                                ]
                              }
                            ),
                            /* @__PURE__ */ u.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => B(l),
                                className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[var(--danger-foreground)] transition hover:bg-[var(--danger-soft)]",
                                children: [
                                  /* @__PURE__ */ u.jsx(Rt, { size: 14 }),
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
        F ? /* @__PURE__ */ u.jsx(
          "div",
          {
            className: `tasks-mobile-lane-scroll tasks-column-scroll mt-2 min-h-0 flex-1 space-y-2 overflow-y-auto rounded-xl border bg-[var(--surface-primary)] p-3 transition xl:mt-0 xl:flex-none xl:overflow-visible ${q}`,
            children: /* @__PURE__ */ u.jsx(
              av,
              {
                tasks: c,
                onOpenTask: f,
                onEditTask: h,
                onDeleteTask: p,
                currentUserId: y,
                claimingTaskId: m,
                onClaimTask: v,
                completingTaskId: S,
                onCompleteTask: x,
                openMenuTaskId: w,
                onToggleTaskMenu: D,
                quickTaskComposer: ae
              }
            )
          }
        ) : null
      ]
    }
  );
}
function qb({
  column: l,
  tasksCount: c,
  sortable: s,
  onCreateTask: o,
  columnMenuOpen: f,
  columnMenuRef: h,
  onToggleColumnMenu: p,
  onEditColumn: y,
  onDeleteColumn: m,
  onColumnMount: v,
  linkedColumnHighlight: S,
  synchronizedColumnDrag: x
}) {
  const {
    attributes: w,
    listeners: D,
    setActivatorNodeRef: V,
    setNodeRef: X,
    transform: G,
    transition: H,
    isDragging: B,
    isOver: Z
  } = _o({
    id: `column-${l.id}`,
    data: {
      type: "column",
      columnId: l.id,
      acceptsTasks: !0
    },
    disabled: !s
  }), ne = b.useCallback(
    (F) => {
      X(F), s && v(l.id, F);
    },
    [l.id, v, X, s]
  ), le = S || Z && !x ? "border-[var(--accent-primary)]" : "border-[var(--border-subtle)]";
  return /* @__PURE__ */ u.jsx(
    "section",
    {
      ref: ne,
      style: {
        transform: s && x && G ? En.Transform.toString({ ...G, y: 0 }) : void 0,
        transition: s && x ? H : void 0,
        zIndex: B ? Xa.draggedItem : f ? Xa.columnMenu : void 0
      },
      className: `flex w-full min-w-0 flex-col transition ${B ? "opacity-70" : ""}`,
      children: /* @__PURE__ */ u.jsxs(
        "div",
        {
          className: `tasks-board-subcolumn-header flex min-h-16 items-center justify-between gap-3 rounded-xl border bg-[var(--surface-primary)] px-3 py-3 shadow-sm transition ${le} ${B ? "shadow-xl" : ""}`,
          children: [
            /* @__PURE__ */ u.jsxs(
              "div",
              {
                ref: V,
                className: `min-w-0 flex-1 overflow-hidden ${s ? "cursor-grab active:cursor-grabbing" : ""}`,
                title: s ? "Перетащите, чтобы изменить порядок подколонок" : void 0,
                ...s ? w : {},
                ...s ? D : {},
                children: [
                  /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ u.jsx(
                      "span",
                      {
                        className: "h-2.5 w-2.5 shrink-0 rounded-full",
                        style: { backgroundColor: l.color || "#38bdf8" }
                      }
                    ),
                    /* @__PURE__ */ u.jsx("h2", { className: "min-w-0 truncate text-sm font-semibold text-[var(--foreground)]", children: l.name })
                  ] }),
                  /* @__PURE__ */ u.jsxs("p", { className: "app-text-muted mt-0.5 text-xs", children: [
                    c,
                    " задач"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ u.jsxs("div", { className: "flex shrink-0 items-center gap-1", children: [
              /* @__PURE__ */ u.jsx(
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
                  children: /* @__PURE__ */ u.jsx(Mt, { size: 16 })
                }
              ),
              s ? /* @__PURE__ */ u.jsxs(
                "div",
                {
                  ref: f ? h : null,
                  className: "relative",
                  onPointerDown: (F) => F.stopPropagation(),
                  onClick: (F) => F.stopPropagation(),
                  children: [
                    /* @__PURE__ */ u.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: p,
                        className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                        title: "Действия с подколонкой",
                        "aria-label": `Действия с подколонкой ${l.name}`,
                        "aria-expanded": f,
                        "aria-haspopup": "menu",
                        children: /* @__PURE__ */ u.jsx(
                          Yi,
                          {
                            size: 14,
                            className: `transition-transform ${f ? "" : "-rotate-90"}`
                          }
                        )
                      }
                    ),
                    f ? /* @__PURE__ */ u.jsxs("div", { className: "app-menu absolute right-0 top-full z-30 mt-2 w-44 rounded-lg p-1.5", children: [
                      /* @__PURE__ */ u.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => y(l),
                          className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                          children: [
                            /* @__PURE__ */ u.jsx(Za, { size: 14, className: "app-text-muted" }),
                            "Редактировать"
                          ]
                        }
                      ),
                      /* @__PURE__ */ u.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => m(l),
                          className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[var(--danger-foreground)] transition hover:bg-[var(--danger-soft)]",
                          children: [
                            /* @__PURE__ */ u.jsx(Rt, { size: 14 }),
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
function Yb({
  column: l,
  rowId: c,
  linkedColumnHighlight: s,
  synchronizedColumnDrag: o,
  fillAvailableHeight: f,
  embeddedInMobileLane: h = !1,
  ...p
}) {
  const { setNodeRef: y, isOver: m } = No({
    id: `task-zone-${l.id}-row-${c ?? "base"}`,
    data: {
      type: "task-zone",
      columnId: l.id,
      rowId: c,
      acceptsTasks: !0
    }
  }), v = s || m && !o ? "border-[var(--accent-primary)]" : "border-[var(--border-subtle)]";
  return /* @__PURE__ */ u.jsx(
    "section",
    {
      ref: y,
      className: `flex w-full min-w-0 flex-col transition ${h ? "" : `tasks-mobile-lane-viewport ${c ? "min-h-0" : "min-h-[28rem]"}`} xl:w-full ${f ? "xl:min-h-full" : ""}`,
      children: /* @__PURE__ */ u.jsx(
        "div",
        {
          className: `${h ? "" : "tasks-mobile-lane-scroll overflow-y-auto xl:flex-none"} tasks-column-scroll min-h-0 flex-1 space-y-2 rounded-xl border bg-[var(--surface-primary)] p-3 transition xl:overflow-visible ${v}`,
          children: /* @__PURE__ */ u.jsx(av, { ...p })
        }
      )
    }
  );
}
function Xb({
  column: l,
  tasksCount: c,
  children: s,
  onCreateTask: o,
  onCreateSubcolumn: f,
  onCreateRow: h,
  onEditColumn: p,
  onDeleteColumn: y,
  columnMenuOpen: m,
  menuLayerOpen: v,
  columnMenuRef: S,
  onToggleColumnMenu: x,
  onColumnMount: w,
  contentVisible: D,
  onToggleContentVisibility: V,
  subcolumnHeaders: X,
  subcolumnGridTemplate: G
}) {
  const {
    attributes: H,
    listeners: B,
    setActivatorNodeRef: Z,
    setNodeRef: ne,
    transform: le,
    transition: F,
    isDragging: P
  } = _o({
    id: `column-${l.id}`,
    data: { type: "column", columnId: l.id, acceptsTasks: !1 }
  }), O = b.useCallback(
    (I) => {
      ne(I), w(l.id, I);
    },
    [l.id, w, ne]
  );
  return /* @__PURE__ */ u.jsxs(
    "section",
    {
      ref: O,
      style: {
        transform: En.Transform.toString(le),
        transition: F,
        zIndex: P ? Xa.draggedItem : v ? Xa.columnMenu : void 0
      },
      className: `tasks-board-column-group flex min-w-max flex-col ${P ? "opacity-70" : ""}`,
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "tasks-board-group-header-sticky", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "tasks-board-column-header app-surface flex min-h-16 items-center justify-between gap-3 rounded-xl px-3 py-3", children: [
            /* @__PURE__ */ u.jsxs(
              "div",
              {
                ref: Z,
                className: "min-w-0 flex-1 cursor-grab active:cursor-grabbing",
                title: "Перетащите, чтобы изменить порядок колонок",
                ...H,
                ...B,
                children: [
                  /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ u.jsx(
                      "span",
                      {
                        className: "h-2.5 w-2.5 shrink-0 rounded-full",
                        style: { backgroundColor: l.color || "#38bdf8" }
                      }
                    ),
                    /* @__PURE__ */ u.jsx("h2", { className: "min-w-0 truncate text-sm font-semibold text-[var(--foreground)]", children: l.name })
                  ] }),
                  /* @__PURE__ */ u.jsxs("p", { className: "app-text-muted mt-0.5 text-xs", children: [
                    c,
                    " задач"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ u.jsxs("div", { className: "flex shrink-0 items-center gap-1", children: [
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  onPointerDown: (I) => I.stopPropagation(),
                  onClick: (I) => {
                    I.stopPropagation(), V();
                  },
                  className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                  title: D ? "Скрыть содержимое колонки" : "Показать содержимое колонки",
                  "aria-label": D ? `Скрыть содержимое колонки ${l.name}` : `Показать содержимое колонки ${l.name}`,
                  "aria-pressed": !D,
                  children: D ? /* @__PURE__ */ u.jsx(gp, { size: 15 }) : /* @__PURE__ */ u.jsx(yp, { size: 15 })
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  onPointerDown: (I) => I.stopPropagation(),
                  onClick: (I) => {
                    I.stopPropagation(), o();
                  },
                  className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                  title: "Создать задачу",
                  "aria-label": "Создать задачу",
                  children: /* @__PURE__ */ u.jsx(Mt, { size: 16 })
                }
              ),
              /* @__PURE__ */ u.jsxs(
                "div",
                {
                  ref: m ? S : null,
                  className: "relative",
                  onPointerDown: (I) => I.stopPropagation(),
                  onClick: (I) => I.stopPropagation(),
                  children: [
                    /* @__PURE__ */ u.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: x,
                        className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                        title: "Действия с колонкой",
                        "aria-label": `Действия с колонкой ${l.name}`,
                        "aria-expanded": m,
                        "aria-haspopup": "menu",
                        children: /* @__PURE__ */ u.jsx(
                          Yi,
                          {
                            size: 14,
                            className: `transition-transform ${m ? "" : "-rotate-90"}`
                          }
                        )
                      }
                    ),
                    m ? /* @__PURE__ */ u.jsxs("div", { className: "app-menu absolute right-0 top-full z-30 mt-2 w-48 rounded-lg p-1.5", children: [
                      /* @__PURE__ */ u.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: f,
                          className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                          children: [
                            /* @__PURE__ */ u.jsx(Mt, { size: 14, className: "app-text-muted" }),
                            "Добавить подколонку"
                          ]
                        }
                      ),
                      /* @__PURE__ */ u.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: h,
                          className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                          children: [
                            /* @__PURE__ */ u.jsx(go, { size: 14, className: "app-text-muted" }),
                            "Добавить дорожку"
                          ]
                        }
                      ),
                      /* @__PURE__ */ u.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => p(l),
                          className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]",
                          children: [
                            /* @__PURE__ */ u.jsx(Za, { size: 14, className: "app-text-muted" }),
                            "Редактировать"
                          ]
                        }
                      ),
                      /* @__PURE__ */ u.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => y(l),
                          className: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[var(--danger-foreground)] transition hover:bg-[var(--danger-soft)]",
                          children: [
                            /* @__PURE__ */ u.jsx(Rt, { size: 14 }),
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
          D ? /* @__PURE__ */ u.jsx("div", { className: "tasks-board-subcolumn-header-surface relative mt-2 w-max min-w-full rounded-t-xl border border-b-0 border-[var(--border-subtle)] bg-[var(--surface-secondary)] p-2", children: /* @__PURE__ */ u.jsx(
            "div",
            {
              className: "tasks-board-subcolumn-header-row grid w-max min-w-0 gap-2",
              style: { gridTemplateColumns: G },
              children: X
            }
          ) }) : null
        ] }),
        D ? /* @__PURE__ */ u.jsx("div", { className: "tasks-board-column-content flex w-auto min-w-max flex-col gap-2 rounded-b-xl border border-t-0 border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-2 pb-2", children: s }) : null
      ]
    }
  );
}
function Gb({
  row: l,
  children: c,
  gridTemplateColumns: s,
  onCreateTask: o,
  onEdit: f,
  onDelete: h,
  expanded: p,
  onToggle: y,
  hasFollowingSection: m
}) {
  return /* @__PURE__ */ u.jsxs(
    "section",
    {
      className: `tasks-board-content-section min-w-0 ${m ? "tasks-board-content-section-continuous" : ""}`,
      children: [
        /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: `tasks-board-lane-header flex items-center justify-between gap-3 px-1 ${p ? "mb-2 xl:mb-0 xl:pb-2" : ""}`,
            children: [
              /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  onClick: y,
                  className: "flex min-w-0 flex-1 items-center gap-2 rounded-lg py-1 text-left",
                  "aria-expanded": p,
                  children: [
                    /* @__PURE__ */ u.jsx(
                      pp,
                      {
                        size: 14,
                        className: `app-text-muted shrink-0 transition-transform ${p ? "rotate-90" : ""}`
                      }
                    ),
                    /* @__PURE__ */ u.jsx(
                      "span",
                      {
                        className: "h-2 w-2 shrink-0 rounded-full",
                        style: { backgroundColor: l.color || "#64748b" }
                      }
                    ),
                    /* @__PURE__ */ u.jsx("h3", { className: "truncate text-xs font-semibold text-[var(--foreground)]", children: l.name }),
                    /* @__PURE__ */ u.jsx("span", { className: "app-badge rounded-full px-1.5 py-0.5 text-[10px] font-semibold", children: l.tasks_count || 0 })
                  ]
                }
              ),
              /* @__PURE__ */ u.jsxs("div", { className: "flex shrink-0 items-center gap-1", children: [
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: o,
                    className: "app-icon-button flex h-7 w-7 items-center justify-center rounded-lg",
                    title: "Создать задачу в дорожке",
                    "aria-label": `Создать задачу в дорожке ${l.name}`,
                    children: /* @__PURE__ */ u.jsx(Mt, { size: 14 })
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: f,
                    className: "app-icon-button flex h-7 w-7 items-center justify-center rounded-lg",
                    title: "Редактировать дорожку",
                    "aria-label": `Редактировать дорожку ${l.name}`,
                    children: /* @__PURE__ */ u.jsx(Za, { size: 14 })
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: h,
                    className: "app-icon-button flex h-7 w-7 items-center justify-center rounded-lg text-[var(--danger-foreground)]",
                    title: "Удалить дорожку",
                    "aria-label": `Удалить дорожку ${l.name}`,
                    children: /* @__PURE__ */ u.jsx(Rt, { size: 14 })
                  }
                )
              ] })
            ]
          }
        ),
        p ? /* @__PURE__ */ u.jsx(
          "div",
          {
            className: "grid w-max min-w-0 gap-2",
            style: { gridTemplateColumns: s },
            children: c
          }
        ) : null
      ]
    }
  );
}
function Zb({
  collapsible: l,
  tasksCount: c,
  headers: s,
  children: o,
  gridTemplateColumns: f,
  expanded: h,
  onToggle: p,
  hasFollowingSection: y
}) {
  return /* @__PURE__ */ u.jsxs(
    "section",
    {
      className: `tasks-board-content-section min-w-0 ${y ? "tasks-board-content-section-continuous" : ""}`,
      children: [
        s ? /* @__PURE__ */ u.jsx(
          "div",
          {
            className: "grid w-max min-w-0 gap-2",
            style: { gridTemplateColumns: f },
            children: s
          }
        ) : null,
        l ? /* @__PURE__ */ u.jsxs(
          "button",
          {
            type: "button",
            onClick: p,
            className: `tasks-board-lane-header flex w-full items-center gap-2 rounded-lg px-1 py-1 text-left ${s ? "mt-2" : ""} ${h ? "mb-2 xl:mb-0 xl:pb-2" : ""}`,
            "aria-expanded": h,
            children: [
              /* @__PURE__ */ u.jsx(
                pp,
                {
                  size: 14,
                  className: `app-text-muted shrink-0 transition-transform ${h ? "rotate-90" : ""}`
                }
              ),
              /* @__PURE__ */ u.jsx("span", { className: "text-xs font-semibold text-[var(--foreground)]", children: "Без дорожки" }),
              /* @__PURE__ */ u.jsx("span", { className: "app-badge rounded-full px-1.5 py-0.5 text-[10px] font-semibold", children: c })
            ]
          }
        ) : null,
        !l || h ? /* @__PURE__ */ u.jsx(
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
function Qb({
  onClick: l,
  viewportHeight: c
}) {
  const s = c > 0 ? Math.max(320, c - 12) : 448;
  return /* @__PURE__ */ u.jsxs(
    "button",
    {
      type: "button",
      onClick: l,
      style: { "--tasks-add-column-height": `${s}px` },
      className: "group flex h-16 min-h-16 min-w-[18rem] self-start items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--border-subtle)] bg-[var(--surface-muted)] px-4 text-center transition hover:border-[var(--accent-primary)] hover:bg-[var(--surface-elevated)] xl:sticky xl:top-0 xl:h-[var(--tasks-add-column-height)] xl:flex-col xl:gap-0 xl:p-4",
      children: [
        /* @__PURE__ */ u.jsx("span", { className: "app-selected flex h-9 w-9 items-center justify-center rounded-xl transition group-hover:scale-105 xl:mb-3 xl:h-10 xl:w-10", children: /* @__PURE__ */ u.jsx(Mt, { size: 18 }) }),
        /* @__PURE__ */ u.jsx("span", { className: "text-sm font-semibold text-[var(--foreground)]", children: "Добавить колонку" })
      ]
    }
  );
}
function Vb({
  board: l,
  desktopWideMode: c,
  loading: s
}) {
  const o = b.useRef(null), f = b.useRef(null), [h, p] = b.useState(0), y = b.useCallback(() => {
    const x = f.current, w = o.current;
    !x || !w || (x.frameId = null, w.scrollLeft = x.scrollLeft - (x.currentX - x.startX), w.scrollTop = x.scrollTop - (x.currentY - x.startY));
  }, []), m = b.useCallback(
    (x) => {
      if (x.button !== 1) return;
      const w = o.current;
      w && (x.preventDefault(), x.stopPropagation(), f.current = {
        pointerId: x.pointerId,
        startX: x.clientX,
        startY: x.clientY,
        currentX: x.clientX,
        currentY: x.clientY,
        scrollLeft: w.scrollLeft,
        scrollTop: w.scrollTop,
        frameId: null
      }, w.setPointerCapture(x.pointerId), w.classList.add("cursor-grabbing", "select-none"));
    },
    []
  ), v = b.useCallback(
    (x) => {
      const w = f.current;
      !w || w.pointerId !== x.pointerId || (x.preventDefault(), x.stopPropagation(), w.currentX = x.clientX, w.currentY = x.clientY, w.frameId === null && (w.frameId = window.requestAnimationFrame(y)));
    },
    [y]
  ), S = b.useCallback(
    (x) => {
      const w = f.current, D = o.current;
      !w || w.pointerId !== x.pointerId || (x.preventDefault(), x.stopPropagation(), w.currentX = x.clientX, w.currentY = x.clientY, w.frameId !== null && (window.cancelAnimationFrame(w.frameId), w.frameId = null), y(), f.current = null, D?.classList.remove("cursor-grabbing", "select-none"), D?.hasPointerCapture(x.pointerId) && D.releasePointerCapture(x.pointerId));
    },
    [y]
  );
  return b.useEffect(() => {
    const x = o.current;
    if (!x || s) return;
    let w = null;
    const D = () => {
      const ne = x.querySelectorAll(
        ".tasks-mobile-lane-viewport"
      );
      if (window.matchMedia("(min-width: 80rem)").matches) {
        ne.forEach(
          (de) => de.style.removeProperty("--tasks-mobile-lane-height")
        );
        return;
      }
      const le = window.visualViewport, F = le?.offsetTop || 0, P = F + (le?.height || window.innerHeight), I = document.querySelector(".app-header")?.getBoundingClientRect(), ae = (!!(I && I.top > F + (P - F) / 2 && I.bottom >= P - 2) ? I?.top : P) || P, ue = 12;
      ne.forEach((de) => {
        const xe = de.getBoundingClientRect().top, Me = de.closest(".tasks-board-column-group") ? 9 : 0, J = `${Math.max(
          160,
          Math.floor(
            ae - xe - ue - Me
          )
        )}px`;
        de.style.getPropertyValue("--tasks-mobile-lane-height") !== J && de.style.setProperty("--tasks-mobile-lane-height", J);
      });
    }, V = () => {
      const ne = x.clientHeight;
      p(
        (le) => le === ne ? le : ne
      );
    }, X = () => {
      w = null, Array.from(
        x.querySelectorAll(".tasks-board-column-group"),
        (le) => {
          const F = le.querySelector(
            ".tasks-board-column-content"
          ), P = le.querySelector(
            ".tasks-board-group-header-sticky"
          ), O = F && P ? F.getBoundingClientRect().bottom <= P.getBoundingClientRect().bottom + 1 : !1;
          return { group: le, value: O ? "true" : "false" };
        }
      ).forEach(({ group: le, value: F }) => {
        le.dataset.contentBottomReached !== F && (le.dataset.contentBottomReached = F);
      });
    }, G = () => {
      w === null && (w = window.requestAnimationFrame(X));
    }, H = () => {
      D(), V(), G();
    };
    D(), V(), X(), x.addEventListener("scroll", G, {
      passive: !0
    }), window.addEventListener("resize", H, { passive: !0 }), window.visualViewport?.addEventListener("resize", H, {
      passive: !0
    }), window.visualViewport?.addEventListener("scroll", H, {
      passive: !0
    });
    const B = new ResizeObserver(H);
    B.observe(x), x.parentElement && B.observe(x.parentElement), x.querySelectorAll(".tasks-board-column-content").forEach((ne) => {
      B.observe(ne);
    });
    const Z = new MutationObserver(H);
    return Z.observe(x, { childList: !0, subtree: !0 }), () => {
      x.removeEventListener("scroll", G), window.removeEventListener("resize", H), window.visualViewport?.removeEventListener("resize", H), window.visualViewport?.removeEventListener("scroll", H), B.disconnect(), Z.disconnect(), w !== null && window.cancelAnimationFrame(w);
    };
  }, [l, c, s]), b.useEffect(
    () => () => {
      const x = f.current;
      x?.frameId !== null && x?.frameId !== void 0 && window.cancelAnimationFrame(x.frameId), o.current?.classList.remove(
        "cursor-grabbing",
        "select-none"
      ), f.current = null;
    },
    []
  ), {
    boardScrollRef: o,
    finishBoardPan: S,
    moveBoardPan: v,
    startBoardPan: m,
    viewportHeight: h
  };
}
function hu(l, c) {
  return l.position - c.position || l.id - c.id;
}
const ru = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3
};
function Kb(l, c) {
  const s = ru[l.priority] ?? ru.medium, o = ru[c.priority] ?? ru.medium;
  return s - o || hu(l, c);
}
function mu(l, c) {
  return `${l}:${c ?? "base"}`;
}
function $b(l, c, s) {
  const o = (l || []).filter((S) => !S.is_archived), f = o.filter((S) => !S.parent).sort(hu), h = /* @__PURE__ */ new Map();
  for (const S of o) {
    if (!S.parent) continue;
    const x = h.get(S.parent) || [];
    x.push(S), h.set(S.parent, x);
  }
  for (const S of h.values())
    S.sort(hu);
  const p = /* @__PURE__ */ new Map();
  for (const S of c || []) {
    const x = p.get(S.column) || [];
    x.push(S), p.set(S.column, x);
  }
  for (const S of p.values())
    S.sort(hu);
  const y = f.flatMap((S) => {
    const x = h.get(S.id) || [];
    return x.length > 0 ? x : [S];
  }), m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  for (const S of o) v.set(S.id, 0);
  for (const S of s || []) {
    const x = mu(S.column, S.row || null), w = m.get(x) || [];
    w.push(S), m.set(x, w), v.set(S.column, (v.get(S.column) || 0) + 1);
  }
  for (const S of m.values())
    S.sort(Kb);
  for (const S of f) {
    const x = h.get(S.id) || [];
    x.length !== 0 && v.set(
      S.id,
      (v.get(S.id) || 0) + x.reduce(
        (w, D) => w + (v.get(D.id) || 0),
        0
      )
    );
  }
  return {
    activeColumns: o,
    topLevelColumns: f,
    subcolumnsByParent: h,
    rowsByColumn: p,
    leafColumns: y,
    columnCounts: v,
    tasksByPlacement: m
  };
}
function Jb({
  state: l,
  query: c,
  busy: s,
  api: o,
  run: f,
  reload: h,
  open: p,
  dialog: y
}) {
  const [m, v] = b.useState(!1), [S, x] = b.useState([]), [w, D] = b.useState(null), [V, X] = b.useState(
    null
  ), [G, H] = b.useState(""), [B, Z] = b.useState("medium"), [ne, le] = b.useState(null), [F, P] = b.useState(null), [O, I] = b.useState(null), oe = b.useRef(null), ae = b.useRef(null);
  b.useEffect(() => {
    const W = (Ee) => {
      !ae.current?.contains(Ee.target) && !oe.current?.contains(Ee.target) && I(null);
    }, Se = (Ee) => {
      Ee.key === "Escape" && (I(null), v(!1));
    };
    return document.addEventListener("pointerdown", W), document.addEventListener("keydown", Se), () => {
      document.removeEventListener("pointerdown", W), document.removeEventListener("keydown", Se);
    };
  }, []);
  const ue = l.tasks.find((W) => W.id === O), de = b.useRef(null), xe = b.useRef(/* @__PURE__ */ new Map()), {
    boardScrollRef: Me,
    startBoardPan: k,
    moveBoardPan: J,
    finishBoardPan: se,
    viewportHeight: pe
  } = Vb({
    board: l.board,
    desktopWideMode: m,
    loading: !1
  }), ge = $b(
    l.columns,
    l.rows,
    l.tasks.filter(
      (W) => (W.title + " " + W.description).toLowerCase().includes(c.toLowerCase())
    )
  );
  b.useEffect(() => {
    try {
      x(
        JSON.parse(
          localStorage.getItem(`nb-view-${l.me.id}-${l.board.id}`) || "[]"
        )
      );
    } catch {
      x([]);
    }
    X(null);
  }, [l.board.id, l.me.id]);
  function N(W) {
    x((Se) => {
      const Ee = Se.includes(W) ? Se.filter((Ne) => Ne !== W) : [...Se, W];
      return localStorage.setItem(
        `nb-view-${l.me.id}-${l.board.id}`,
        JSON.stringify(Ee)
      ), Ee;
    });
  }
  b.useEffect(() => {
    const W = (Se) => {
      de.current && !de.current.contains(Se.target) && D(null);
    };
    return document.addEventListener("pointerdown", W), () => document.removeEventListener("pointerdown", W);
  }, []);
  const q = b.useCallback((W, Se) => {
    Se ? xe.current.set(W, Se) : xe.current.delete(W);
  }, []);
  function ee(W) {
    const Se = Me.current, Ee = xe.current.get(W);
    Se && Ee && Se.scrollTo({
      left: Math.max(
        0,
        Se.scrollLeft + Ee.getBoundingClientRect().left - Se.getBoundingClientRect().left - 12
      ),
      behavior: "smooth"
    });
  }
  function ie(W, Se = null) {
    X({ column: W, row: Se }), H(""), Z("medium"), D(null);
  }
  async function ve() {
    !V || !G.trim() || await f(async () => {
      await o("tasks/", "POST", {
        board: l.board.id,
        column: V.column,
        row: V.row,
        title: G.trim(),
        priority: B,
        position: (l.tasks.length + 1) * 1e3
      }), H(""), await h();
    });
  }
  function E(W, Se) {
    return V?.column === W && V.row === Se ? /* @__PURE__ */ u.jsx(
      Hb,
      {
        title: G,
        priority: B,
        saving: s,
        columnName: l.columns.find((Ee) => Ee.id === W)?.name || "",
        onTitleChange: H,
        onPriorityChange: Z,
        onSubmit: () => {
          ve();
        },
        onCancel: () => X(null)
      }
    ) : null;
  }
  async function te(W, Se) {
    await o(`tasks/${W.id}/`, "PATCH", Se), await h();
  }
  const j = {
    onOpenTask: p,
    onEditTask: p,
    onDeleteTask: (W) => y({ kind: "delete-task", data: { id: W.id } }),
    currentUserId: l.me.id,
    claimingTaskId: s ? ne?.id ?? null : null,
    onClaimTask: (W) => {
      f(() => te(W, { assignee_id: l.me.id }));
    },
    completingTaskId: null,
    onCompleteTask: (W) => {
      f(async () => {
        const Se = ge.leafColumns.find(
          (Ee) => Ee.is_done || l.columns.find((Ne) => Ne.id === Ee.parent)?.is_done
        );
        if (!Se) throw new Error("Сначала отметьте финальную колонку.");
        await te(W, { column: Se.id, row: null });
      });
    },
    openMenuTaskId: O,
    onToggleTaskMenu: (W, Se) => {
      oe.current = Se, I(O === W ? null : W);
    }
  }, A = P0(
    Mm(qp, { activationConstraint: { distance: 7 } }),
    Mm(Yp, {
      activationConstraint: { delay: 220, tolerance: 8 }
    })
  ), L = (W) => {
    const Se = W.active.data.current?.type === "task", Ee = l.columns.find(
      (ce) => ce.id === W.active.data.current?.columnId
    ), Ne = {
      ...W,
      droppableContainers: W.droppableContainers.filter(
        (ce) => Se ? !!ce.data.current?.acceptsTasks : ce.data.current?.type === "column" && l.columns.find((Pe) => Pe.id === ce.data.current?.columnId)?.parent === Ee?.parent
      )
    }, Ge = ux(Ne), nt = Ge.filter(
      (ce) => String(ce.id).startsWith("card-target-") && Number(String(ce.id).replace("card-target-", "")) !== W.active.data.current?.taskId
    );
    return nt.length ? nt : Ge.length ? Ge : ax(Ne);
  };
  function re(W) {
    if (le(null), P(null), !W.over || s) return;
    const Se = W.active.data.current?.type;
    if (Se === "task") {
      const Ee = l.tasks.find((Ge) => Ge.id === W.active.data.current?.taskId), Ne = W.over.data.current;
      Ee && Ne?.acceptsTasks && Ne.before !== Ee.id && f(async () => {
        await o(`tasks/${Ee.id}/move/`, "POST", {
          column: Ne.columnId,
          row: Ne.rowId ?? null,
          before: Ne.before ?? null
        }), await h();
      });
    } else if (Se === "column" && l.can_manage) {
      const Ee = l.columns.find(
        (ce) => ce.id === W.active.data.current?.columnId
      );
      if (!Ee) return;
      const Ne = l.columns.filter((ce) => ce.parent === Ee.parent).sort((ce, Pe) => ce.position - Pe.position || ce.id - Pe.id), Ge = Ne.findIndex((ce) => ce.id === Ee.id), nt = Ne.findIndex((ce) => ce.id === W.over?.data.current?.columnId);
      if (nt < 0 || Ge === nt) return;
      f(async () => {
        await o(`boards/${l.board.id}/reorder-columns/`, "POST", {
          parent: Ee.parent,
          ids: wo(Ne, Ge, nt).map((ce) => ce.id)
        }), await h();
      });
    }
  }
  const fe = (W) => {
    D(null), y({ kind: "edit-column", data: { ...W } });
  }, Fe = (W) => {
    D(null), y({ kind: "delete-column", data: { id: W.id } });
  }, Ce = (W) => {
    D(null), y({ kind: "column", data: { parent: W } });
  }, Ie = (W) => {
    D(null), y({ kind: "row", data: { column: W } });
  };
  return /* @__PURE__ */ u.jsxs("div", { className: `canvas-shell ${m ? "canvas-wide" : ""}`, children: [
    /* @__PURE__ */ u.jsxs("div", { className: "column-navigation", children: [
      /* @__PURE__ */ u.jsx(
        "button",
        {
          onClick: () => Me.current?.scrollTo({ left: 0, behavior: "smooth" }),
          children: "Все колонки"
        }
      ),
      ge.topLevelColumns.map((W) => /* @__PURE__ */ u.jsxs("button", { onClick: () => ee(W.id), children: [
        /* @__PURE__ */ u.jsx("span", { className: "dot", style: { background: W.color } }),
        W.name
      ] }, W.id)),
      /* @__PURE__ */ u.jsx("span", { className: "grow" }),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          onClick: () => v(!m),
          title: m ? "Обычный вид" : "Развернуть доску",
          children: m ? /* @__PURE__ */ u.jsx(c0, { size: 16 }) : /* @__PURE__ */ u.jsx(s0, { size: 16 })
        }
      )
    ] }),
    ue && /* @__PURE__ */ u.jsxs(
      Bb,
      {
        anchorRef: oe,
        menuRef: ae,
        menuWidth: 215,
        widthClassName: "w-56",
        zIndex: 90,
        children: [
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: "menu-action",
              onClick: () => {
                p(ue), I(null);
              },
              children: [
                /* @__PURE__ */ u.jsx(Za, { size: 15 }),
                "Открыть карточку"
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: "menu-action",
              onClick: () => {
                f(async () => {
                  const W = await o(
                    `tasks/${ue.id}/duplicate/`,
                    "POST"
                  );
                  I(null), await h(), p(W);
                });
              },
              children: [
                /* @__PURE__ */ u.jsx(vp, { size: 15 }),
                "Создать копию"
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: "menu-action",
              onClick: () => {
                j.onCompleteTask(ue), I(null);
              },
              children: [
                /* @__PURE__ */ u.jsx(qa, { size: 15 }),
                "Завершить"
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: "menu-action",
              onClick: () => {
                f(async () => {
                  await te(ue, { is_archived: !0 }), I(null);
                });
              },
              children: [
                /* @__PURE__ */ u.jsx(Ml, { size: 15 }),
                "В архив"
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: "menu-action danger",
              onClick: () => {
                I(null), y({ kind: "delete-task", data: { id: ue.id } });
              },
              children: [
                /* @__PURE__ */ u.jsx(Rt, { size: 15 }),
                "Удалить"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      Fx,
      {
        sensors: A,
        collisionDetection: L,
        onDragStart: (W) => {
          W.active.data.current?.type === "task" ? le(
            l.tasks.find((Se) => Se.id === W.active.data.current?.taskId) || null
          ) : P(W.active.data.current?.columnId ?? null), D(null);
        },
        onDragCancel: () => {
          le(null), P(null);
        },
        onDragEnd: re,
        children: [
          /* @__PURE__ */ u.jsx(
            Qm,
            {
              items: ge.topLevelColumns.map((W) => `column-${W.id}`),
              strategy: Zm,
              children: /* @__PURE__ */ u.jsx(
                "div",
                {
                  ref: Me,
                  onPointerDownCapture: k,
                  onPointerMoveCapture: J,
                  onPointerUpCapture: se,
                  onPointerCancelCapture: se,
                  onLostPointerCapture: se,
                  onAuxClick: (W) => {
                    W.button === 1 && W.preventDefault();
                  },
                  className: "tasks-board-scroll min-w-0 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-3 xl:overflow-auto",
                  children: /* @__PURE__ */ u.jsxs("div", { className: "flex w-auto min-w-max items-stretch gap-3 xl:min-h-full", children: [
                    ge.topLevelColumns.map((W) => {
                      const Se = ge.subcolumnsByParent.get(W.id) || [], Ee = ge.rowsByColumn.get(W.id) || [], Ne = Se.length ? Se : [W], Ge = `repeat(${Ne.length}, 18rem)`;
                      if (!Se.length && !Ee.length)
                        return /* @__PURE__ */ u.jsx(
                          Lb,
                          {
                            ...j,
                            column: W,
                            tasks: ge.tasksByPlacement.get(
                              mu(W.id, null)
                            ) || [],
                            onCreateTask: ie,
                            columnMenuOpen: w === W.id && l.can_manage,
                            columnMenuRef: de,
                            onToggleColumnMenu: () => D(w === W.id ? null : W.id),
                            onEditColumn: fe,
                            onDeleteColumn: Fe,
                            onCreateSubcolumn: (ce) => Ce(ce.id),
                            onCreateRow: (ce) => Ie(ce.id),
                            onColumnMount: q,
                            contentVisible: !S.includes(`c${W.id}`),
                            onToggleContentVisibility: () => N(`c${W.id}`),
                            synchronizedColumnDrag: F !== null,
                            linkedColumnHighlight: F === W.id,
                            fillAvailableHeight: m,
                            quickTaskComposer: E(W.id, null)
                          },
                          W.id
                        );
                      const nt = (ce, Pe) => /* @__PURE__ */ u.jsx(
                        Yb,
                        {
                          ...j,
                          column: ce,
                          rowId: Pe,
                          tasks: ge.tasksByPlacement.get(
                            mu(ce.id, Pe)
                          ) || [],
                          linkedColumnHighlight: F === ce.id,
                          synchronizedColumnDrag: F !== null,
                          fillAvailableHeight: m && Pe === null,
                          quickTaskComposer: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                            E(ce.id, Pe),
                            /* @__PURE__ */ u.jsx(
                              "button",
                              {
                                className: "add-card",
                                onClick: () => ie(ce.id, Pe),
                                children: "+ Добавить карточку"
                              }
                            )
                          ] })
                        },
                        `${ce.id}:${Pe}`
                      );
                      return /* @__PURE__ */ u.jsxs(
                        Xb,
                        {
                          column: W,
                          tasksCount: ge.columnCounts.get(W.id) || 0,
                          onCreateTask: () => ie(Ne[0].id),
                          onCreateSubcolumn: () => Ce(W.id),
                          onCreateRow: () => Ie(W.id),
                          onEditColumn: fe,
                          onDeleteColumn: Fe,
                          columnMenuOpen: w === W.id && l.can_manage,
                          menuLayerOpen: Ne.some((ce) => ce.id === w) || W.id === w,
                          columnMenuRef: de,
                          onToggleColumnMenu: () => D(w === W.id ? null : W.id),
                          onColumnMount: q,
                          contentVisible: !S.includes(`c${W.id}`),
                          onToggleContentVisibility: () => N(`c${W.id}`),
                          subcolumnGridTemplate: Ge,
                          subcolumnHeaders: /* @__PURE__ */ u.jsx(
                            Qm,
                            {
                              items: Ne.map((ce) => `column-${ce.id}`),
                              strategy: Zm,
                              children: Ne.map((ce) => /* @__PURE__ */ u.jsx(
                                qb,
                                {
                                  column: ce,
                                  tasksCount: ge.columnCounts.get(ce.id) || 0,
                                  sortable: !!ce.parent,
                                  onCreateTask: () => ie(ce.id),
                                  columnMenuOpen: w === ce.id && !!ce.parent && l.can_manage,
                                  columnMenuRef: de,
                                  onToggleColumnMenu: () => D(w === ce.id ? null : ce.id),
                                  onEditColumn: fe,
                                  onDeleteColumn: Fe,
                                  onColumnMount: q,
                                  linkedColumnHighlight: F === ce.id,
                                  synchronizedColumnDrag: F !== null
                                },
                                ce.id
                              ))
                            }
                          ),
                          children: [
                            /* @__PURE__ */ u.jsx(
                              Zb,
                              {
                                collapsible: Ee.length > 0,
                                tasksCount: Ne.reduce(
                                  (ce, Pe) => ce + (ge.tasksByPlacement.get(
                                    mu(Pe.id, null)
                                  )?.length || 0),
                                  0
                                ),
                                gridTemplateColumns: Ge,
                                expanded: !S.includes(`b${W.id}`),
                                onToggle: () => N(`b${W.id}`),
                                hasFollowingSection: Ee.length > 0,
                                children: Ne.map((ce) => nt(ce, null))
                              }
                            ),
                            Ee.map((ce, Pe) => /* @__PURE__ */ u.jsx(
                              Gb,
                              {
                                row: {
                                  ...ce,
                                  tasks_count: l.tasks.filter((et) => et.row === ce.id).length
                                },
                                gridTemplateColumns: Ge,
                                onCreateTask: () => ie(Ne[0].id, ce.id),
                                onEdit: () => y({ kind: "edit-row", data: { ...ce } }),
                                onDelete: () => y({ kind: "delete-row", data: { id: ce.id } }),
                                expanded: !S.includes(`r${ce.id}`),
                                onToggle: () => N(`r${ce.id}`),
                                hasFollowingSection: Pe < Ee.length - 1,
                                children: Ne.map((et) => nt(et, ce.id))
                              },
                              ce.id
                            ))
                          ]
                        },
                        W.id
                      );
                    }),
                    l.can_manage && /* @__PURE__ */ u.jsx(
                      Qb,
                      {
                        onClick: () => y({ kind: "column" }),
                        viewportHeight: pe
                      }
                    )
                  ] })
                }
              )
            }
          ),
          /* @__PURE__ */ u.jsx(mb, { children: ne && /* @__PURE__ */ u.jsx("div", { style: { width: 280, pointerEvents: "none" }, children: /* @__PURE__ */ u.jsx(
            nv,
            {
              isOverlay: !0,
              task: ne,
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
    /* @__PURE__ */ u.jsx("div", { className: "pan-hint", children: "Зажмите колёсико мыши, чтобы перемещаться по доске · Заголовки колонок можно перетаскивать · Карточки сгруппированы по срочности" })
  ] });
}
const Wb = (l) => l || null, Fb = {
  sm: "h-10 w-10",
  md: "h-10 w-10",
  lg: "h-16 w-16"
};
function Ib(l) {
  return Array.from(l.trim()).filter(
    (s) => /[\p{L}\p{N}]/u.test(s)
  ).slice(0, 2).join("").toUpperCase() || "Д";
}
function Eo({
  name: l,
  src: c,
  size: s = "sm",
  className: o = ""
}) {
  const f = Wb(c);
  return /* @__PURE__ */ u.jsx(
    "span",
    {
      className: `app-avatar-fallback flex shrink-0 items-center justify-center overflow-hidden rounded-full ${Fb[s]} ${o}`,
      "aria-hidden": "true",
      children: f ? /* @__PURE__ */ u.jsx(
        Pp,
        {
          src: f,
          alt: "",
          width: 64,
          height: 64,
          unoptimized: !0,
          className: "h-full w-full object-cover"
        }
      ) : /* @__PURE__ */ u.jsx(
        "span",
        {
          className: `${s === "lg" ? "text-lg" : "text-xs"} font-semibold`,
          children: Ib(l)
        }
      )
    }
  );
}
var oo = function(l, c) {
  return oo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
    s.__proto__ = o;
  } || function(s, o) {
    for (var f in o) Object.prototype.hasOwnProperty.call(o, f) && (s[f] = o[f]);
  }, oo(l, c);
};
function Pb(l, c) {
  if (typeof c != "function" && c !== null)
    throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
  oo(l, c);
  function s() {
    this.constructor = l;
  }
  l.prototype = c === null ? Object.create(c) : (s.prototype = c.prototype, new s());
}
var bt = function() {
  return bt = Object.assign || function(c) {
    for (var s, o = 1, f = arguments.length; o < f; o++) {
      s = arguments[o];
      for (var h in s) Object.prototype.hasOwnProperty.call(s, h) && (c[h] = s[h]);
    }
    return c;
  }, bt.apply(this, arguments);
};
var eo, Jm;
function e1() {
  if (Jm) return eo;
  Jm = 1;
  var l = !1, c, s, o, f, h, p, y, m, v, S, x, w, D, V, X;
  function G() {
    if (!l) {
      l = !0;
      var B = navigator.userAgent, Z = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(B), ne = /(Mac OS X)|(Windows)|(Linux)/.exec(B);
      if (w = /\b(iPhone|iP[ao]d)/.exec(B), D = /\b(iP[ao]d)/.exec(B), S = /Android/i.exec(B), V = /FBAN\/\w+;/i.exec(B), X = /Mobile/i.exec(B), x = !!/Win64/.exec(B), Z) {
        c = Z[1] ? parseFloat(Z[1]) : Z[5] ? parseFloat(Z[5]) : NaN, c && document && document.documentMode && (c = document.documentMode);
        var le = /(?:Trident\/(\d+.\d+))/.exec(B);
        p = le ? parseFloat(le[1]) + 4 : c, s = Z[2] ? parseFloat(Z[2]) : NaN, o = Z[3] ? parseFloat(Z[3]) : NaN, f = Z[4] ? parseFloat(Z[4]) : NaN, f ? (Z = /(?:Chrome\/(\d+\.\d+))/.exec(B), h = Z && Z[1] ? parseFloat(Z[1]) : NaN) : h = NaN;
      } else
        c = s = o = h = f = NaN;
      if (ne) {
        if (ne[1]) {
          var F = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(B);
          y = F ? parseFloat(F[1].replace("_", ".")) : !0;
        } else
          y = !1;
        m = !!ne[2], v = !!ne[3];
      } else
        y = m = v = !1;
    }
  }
  var H = {
    /**
     *  Check if the UA is Internet Explorer.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    ie: function() {
      return G() || c;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return G() || p > c;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return H.ie() && x;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return G() || s;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return G() || o;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return G() || f;
    },
    /**
     *  For Push
     *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
     */
    safari: function() {
      return H.webkit();
    },
    /**
     *  Check if the UA is a Chrome browser.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    chrome: function() {
      return G() || h;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return G() || m;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return G() || y;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return G() || v;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return G() || w;
    },
    mobile: function() {
      return G() || w || D || S || X;
    },
    nativeApp: function() {
      return G() || V;
    },
    android: function() {
      return G() || S;
    },
    ipad: function() {
      return G() || D;
    }
  };
  return eo = H, eo;
}
var to, Wm;
function t1() {
  if (Wm) return to;
  Wm = 1;
  var l = !!(typeof window < "u" && window.document && window.document.createElement), c = {
    canUseDOM: l,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: l && !!(window.addEventListener || window.attachEvent),
    canUseViewport: l && !!window.screen,
    isInWorker: !l
    // For now, this is true - might change in the future.
  };
  return to = c, to;
}
var no, Fm;
function n1() {
  if (Fm) return no;
  Fm = 1;
  var l = t1(), c;
  l.canUseDOM && (c = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature("", "") !== !0);
  function s(o, f) {
    if (!l.canUseDOM || f && !("addEventListener" in document))
      return !1;
    var h = "on" + o, p = h in document;
    if (!p) {
      var y = document.createElement("div");
      y.setAttribute(h, "return;"), p = typeof y[h] == "function";
    }
    return !p && c && o === "wheel" && (p = document.implementation.hasFeature("Events.wheel", "3.0")), p;
  }
  return no = s, no;
}
var ao, Im;
function a1() {
  if (Im) return ao;
  Im = 1;
  var l = e1(), c = n1(), s = 10, o = 40, f = 800;
  function h(p) {
    var y = 0, m = 0, v = 0, S = 0;
    return "detail" in p && (m = p.detail), "wheelDelta" in p && (m = -p.wheelDelta / 120), "wheelDeltaY" in p && (m = -p.wheelDeltaY / 120), "wheelDeltaX" in p && (y = -p.wheelDeltaX / 120), "axis" in p && p.axis === p.HORIZONTAL_AXIS && (y = m, m = 0), v = y * s, S = m * s, "deltaY" in p && (S = p.deltaY), "deltaX" in p && (v = p.deltaX), (v || S) && p.deltaMode && (p.deltaMode == 1 ? (v *= o, S *= o) : (v *= f, S *= f)), v && !y && (y = v < 1 ? -1 : 1), S && !m && (m = S < 1 ? -1 : 1), {
      spinX: y,
      spinY: m,
      pixelX: v,
      pixelY: S
    };
  }
  return h.getEventType = function() {
    return l.firefox() ? "DOMMouseScroll" : c("wheel") ? "wheel" : "mousewheel";
  }, ao = h, ao;
}
var lo, Pm;
function l1() {
  return Pm || (Pm = 1, lo = a1()), lo;
}
var i1 = l1();
const s1 = /* @__PURE__ */ op(i1);
function u1(l, c, s, o, f, h) {
  h === void 0 && (h = 0);
  var p = Ul(l, c, h), y = p.width, m = p.height, v = Math.min(y, s), S = Math.min(m, o);
  return v > S * f ? {
    width: S * f,
    height: S
  } : {
    width: v,
    height: v / f
  };
}
function r1(l) {
  return l.width > l.height ? l.width / l.naturalWidth : l.height / l.naturalHeight;
}
function Mi(l, c, s, o, f) {
  f === void 0 && (f = 0);
  var h = Ul(c.width, c.height, f), p = h.width, y = h.height;
  return {
    x: ep(l.x, p, s.width, o),
    y: ep(l.y, y, s.height, o)
  };
}
function ep(l, c, s, o) {
  var f = Math.abs(c * o / 2 - s / 2);
  return Du(l, -f, f);
}
function tp(l, c) {
  return Math.sqrt(Math.pow(l.y - c.y, 2) + Math.pow(l.x - c.x, 2));
}
function np(l, c) {
  return Math.atan2(c.y - l.y, c.x - l.x) * 180 / Math.PI;
}
function c1(l, c, s, o, f, h, p) {
  h === void 0 && (h = 0), p === void 0 && (p = !0);
  var y = p ? o1 : d1, m = Ul(c.width, c.height, h), v = Ul(c.naturalWidth, c.naturalHeight, h), S = {
    x: y(100, ((m.width - s.width / f) / 2 - l.x / f) / m.width * 100),
    y: y(100, ((m.height - s.height / f) / 2 - l.y / f) / m.height * 100),
    width: y(100, s.width / m.width * 100 / f),
    height: y(100, s.height / m.height * 100 / f)
  }, x = Math.round(y(v.width, S.width * v.width / 100)), w = Math.round(y(v.height, S.height * v.height / 100)), D = v.width >= v.height * o, V = D ? {
    width: Math.round(w * o),
    height: w
  } : {
    width: x,
    height: Math.round(x / o)
  }, X = bt(bt({}, V), {
    x: Math.round(y(v.width - V.width, S.x * v.width / 100)),
    y: Math.round(y(v.height - V.height, S.y * v.height / 100))
  });
  return {
    croppedAreaPercentages: S,
    croppedAreaPixels: X
  };
}
function o1(l, c) {
  return Math.min(l, Math.max(0, c));
}
function d1(l, c) {
  return c;
}
function f1(l, c, s, o, f, h) {
  var p = Ul(c.width, c.height, s), y = Du(o.width / p.width * (100 / l.width), f, h), m = {
    x: y * p.width / 2 - o.width / 2 - p.width * y * (l.x / 100),
    y: y * p.height / 2 - o.height / 2 - p.height * y * (l.y / 100)
  };
  return {
    crop: m,
    zoom: y
  };
}
function h1(l, c, s) {
  var o = r1(c);
  return s.height > s.width ? s.height / (l.height * o) : s.width / (l.width * o);
}
function m1(l, c, s, o, f, h) {
  s === void 0 && (s = 0);
  var p = Ul(c.naturalWidth, c.naturalHeight, s), y = Du(h1(l, c, o), f, h), m = o.height > o.width ? o.height / l.height : o.width / l.width, v = {
    x: ((p.width - l.width) / 2 - l.x) * m,
    y: ((p.height - l.height) / 2 - l.y) * m
  };
  return {
    crop: v,
    zoom: y
  };
}
function ap(l, c) {
  return {
    x: (c.x + l.x) / 2,
    y: (c.y + l.y) / 2
  };
}
function p1(l) {
  return l * Math.PI / 180;
}
function Ul(l, c, s) {
  var o = p1(s);
  return {
    width: Math.abs(Math.cos(o) * l) + Math.abs(Math.sin(o) * c),
    height: Math.abs(Math.sin(o) * l) + Math.abs(Math.cos(o) * c)
  };
}
function Du(l, c, s) {
  return Math.min(Math.max(l, c), s);
}
function cu() {
  for (var l = [], c = 0; c < arguments.length; c++)
    l[c] = arguments[c];
  return l.filter(function(s) {
    return typeof s == "string" && s.length > 0;
  }).join(" ").trim();
}
var v1 = `.reactEasyCrop_Container {
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
`, g1 = 1, y1 = 3, x1 = 1, b1 = (
  /** @class */
  (function(l) {
    Pb(c, l);
    function c() {
      var s = l !== null && l.apply(this, arguments) || this;
      return s.cropperRef = b.createRef(), s.imageRef = b.createRef(), s.videoRef = b.createRef(), s.containerPosition = {
        x: 0,
        y: 0
      }, s.containerRef = null, s.styleRef = null, s.containerRect = null, s.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }, s.dragStartPosition = {
        x: 0,
        y: 0
      }, s.dragStartCrop = {
        x: 0,
        y: 0
      }, s.gestureZoomStart = 0, s.gestureRotationStart = 0, s.isTouching = !1, s.lastPinchDistance = 0, s.lastPinchRotation = 0, s.rafDragTimeout = null, s.rafPinchTimeout = null, s.wheelTimer = null, s.currentDoc = typeof document < "u" ? document : null, s.currentWindow = typeof window < "u" ? window : null, s.resizeObserver = null, s.previousCropSize = null, s.isInitialized = !1, s.state = {
        cropSize: null,
        hasWheelJustStarted: !1,
        mediaObjectFit: void 0
      }, s.initResizeObserver = function() {
        if (!(typeof window.ResizeObserver > "u" || !s.containerRef)) {
          var o = !0;
          s.resizeObserver = new window.ResizeObserver(function(f) {
            if (o) {
              o = !1;
              return;
            }
            s.computeSizes();
          }), s.resizeObserver.observe(s.containerRef);
        }
      }, s.preventZoomSafari = function(o) {
        return o.preventDefault();
      }, s.cleanEvents = function() {
        s.currentDoc && (s.currentDoc.removeEventListener("mousemove", s.onMouseMove), s.currentDoc.removeEventListener("mouseup", s.onDragStopped), s.currentDoc.removeEventListener("touchmove", s.onTouchMove), s.currentDoc.removeEventListener("touchend", s.onDragStopped), s.currentDoc.removeEventListener("gesturechange", s.onGestureChange), s.currentDoc.removeEventListener("gestureend", s.onGestureEnd), s.currentDoc.removeEventListener("scroll", s.onScroll));
      }, s.clearScrollEvent = function() {
        s.containerRef && s.containerRef.removeEventListener("wheel", s.onWheel), s.wheelTimer && clearTimeout(s.wheelTimer);
      }, s.onMediaLoad = function() {
        var o = s.computeSizes();
        o && (s.previousCropSize = o, s.emitCropData(), s.setInitialCrop(o), s.isInitialized = !0), s.props.onMediaLoaded && s.props.onMediaLoaded(s.mediaSize);
      }, s.setInitialCrop = function(o) {
        if (s.props.initialCroppedAreaPercentages) {
          var f = f1(s.props.initialCroppedAreaPercentages, s.mediaSize, s.props.rotation, o, s.props.minZoom, s.props.maxZoom), h = f.crop, p = f.zoom;
          s.props.onCropChange(h), s.props.onZoomChange && s.props.onZoomChange(p);
        } else if (s.props.initialCroppedAreaPixels) {
          var y = m1(s.props.initialCroppedAreaPixels, s.mediaSize, s.props.rotation, o, s.props.minZoom, s.props.maxZoom), h = y.crop, p = y.zoom;
          s.props.onCropChange(h), s.props.onZoomChange && s.props.onZoomChange(p);
        }
      }, s.computeSizes = function() {
        var o, f, h, p, y, m, v = s.imageRef.current || s.videoRef.current;
        if (v && s.containerRef) {
          s.containerRect = s.containerRef.getBoundingClientRect(), s.saveContainerPosition();
          var S = s.containerRect.width / s.containerRect.height, x = ((o = s.imageRef.current) === null || o === void 0 ? void 0 : o.naturalWidth) || ((f = s.videoRef.current) === null || f === void 0 ? void 0 : f.videoWidth) || 0, w = ((h = s.imageRef.current) === null || h === void 0 ? void 0 : h.naturalHeight) || ((p = s.videoRef.current) === null || p === void 0 ? void 0 : p.videoHeight) || 0, D = v.offsetWidth < x || v.offsetHeight < w, V = x / w, X = void 0;
          if (D)
            switch (s.state.mediaObjectFit) {
              default:
              case "contain":
                X = S > V ? {
                  width: s.containerRect.height * V,
                  height: s.containerRect.height
                } : {
                  width: s.containerRect.width,
                  height: s.containerRect.width / V
                };
                break;
              case "horizontal-cover":
                X = {
                  width: s.containerRect.width,
                  height: s.containerRect.width / V
                };
                break;
              case "vertical-cover":
                X = {
                  width: s.containerRect.height * V,
                  height: s.containerRect.height
                };
                break;
            }
          else
            X = {
              width: v.offsetWidth,
              height: v.offsetHeight
            };
          s.mediaSize = bt(bt({}, X), {
            naturalWidth: x,
            naturalHeight: w
          }), s.props.setMediaSize && s.props.setMediaSize(s.mediaSize);
          var G = s.props.cropSize ? s.props.cropSize : u1(s.mediaSize.width, s.mediaSize.height, s.containerRect.width, s.containerRect.height, s.props.aspect, s.props.rotation);
          return (((y = s.state.cropSize) === null || y === void 0 ? void 0 : y.height) !== G.height || ((m = s.state.cropSize) === null || m === void 0 ? void 0 : m.width) !== G.width) && s.props.onCropSizeChange && s.props.onCropSizeChange(G), s.setState({
            cropSize: G
          }, s.recomputeCropPosition), s.props.setCropSize && s.props.setCropSize(G), G;
        }
      }, s.saveContainerPosition = function() {
        if (s.containerRef) {
          var o = s.containerRef.getBoundingClientRect();
          s.containerPosition = {
            x: o.left,
            y: o.top
          };
        }
      }, s.onMouseDown = function(o) {
        s.currentDoc && (o.preventDefault(), s.currentDoc.addEventListener("mousemove", s.onMouseMove), s.currentDoc.addEventListener("mouseup", s.onDragStopped), s.saveContainerPosition(), s.onDragStart(c.getMousePoint(o)));
      }, s.onMouseMove = function(o) {
        return s.onDrag(c.getMousePoint(o));
      }, s.onScroll = function(o) {
        s.currentDoc && (o.preventDefault(), s.saveContainerPosition());
      }, s.onTouchStart = function(o) {
        s.currentDoc && (s.isTouching = !0, !(s.props.onTouchRequest && !s.props.onTouchRequest(o)) && (s.currentDoc.addEventListener("touchmove", s.onTouchMove, {
          passive: !1
        }), s.currentDoc.addEventListener("touchend", s.onDragStopped), s.saveContainerPosition(), o.touches.length === 2 ? s.onPinchStart(o) : o.touches.length === 1 && s.onDragStart(c.getTouchPoint(o.touches[0]))));
      }, s.onTouchMove = function(o) {
        o.preventDefault(), o.touches.length === 2 ? s.onPinchMove(o) : o.touches.length === 1 && s.onDrag(c.getTouchPoint(o.touches[0]));
      }, s.onGestureStart = function(o) {
        s.currentDoc && (o.preventDefault(), s.currentDoc.addEventListener("gesturechange", s.onGestureChange), s.currentDoc.addEventListener("gestureend", s.onGestureEnd), s.gestureZoomStart = s.props.zoom, s.gestureRotationStart = s.props.rotation);
      }, s.onGestureChange = function(o) {
        if (o.preventDefault(), !s.isTouching) {
          var f = c.getMousePoint(o), h = s.gestureZoomStart - 1 + o.scale;
          if (s.setNewZoom(h, f, {
            shouldUpdatePosition: !0
          }), s.props.onRotationChange) {
            var p = s.gestureRotationStart + o.rotation;
            s.props.onRotationChange(p);
          }
        }
      }, s.onGestureEnd = function(o) {
        s.cleanEvents();
      }, s.onDragStart = function(o) {
        var f, h, p = o.x, y = o.y;
        s.dragStartPosition = {
          x: p,
          y
        }, s.dragStartCrop = bt({}, s.props.crop), (h = (f = s.props).onInteractionStart) === null || h === void 0 || h.call(f);
      }, s.onDrag = function(o) {
        var f = o.x, h = o.y;
        s.currentWindow && (s.rafDragTimeout && s.currentWindow.cancelAnimationFrame(s.rafDragTimeout), s.rafDragTimeout = s.currentWindow.requestAnimationFrame(function() {
          if (s.state.cropSize && !(f === void 0 || h === void 0)) {
            var p = f - s.dragStartPosition.x, y = h - s.dragStartPosition.y, m = {
              x: s.dragStartCrop.x + p,
              y: s.dragStartCrop.y + y
            }, v = s.props.restrictPosition ? Mi(m, s.mediaSize, s.state.cropSize, s.props.zoom, s.props.rotation) : m;
            s.props.onCropChange(v);
          }
        }));
      }, s.onDragStopped = function() {
        var o, f;
        s.isTouching = !1, s.cleanEvents(), s.emitCropData(), (f = (o = s.props).onInteractionEnd) === null || f === void 0 || f.call(o);
      }, s.onWheel = function(o) {
        if (s.currentWindow && !(s.props.onWheelRequest && !s.props.onWheelRequest(o))) {
          o.preventDefault();
          var f = c.getMousePoint(o), h = s1(o).pixelY, p = s.props.zoom - h * s.props.zoomSpeed / 200;
          s.setNewZoom(p, f, {
            shouldUpdatePosition: !0
          }), s.state.hasWheelJustStarted || s.setState({
            hasWheelJustStarted: !0
          }, function() {
            var y, m;
            return (m = (y = s.props).onInteractionStart) === null || m === void 0 ? void 0 : m.call(y);
          }), s.wheelTimer && clearTimeout(s.wheelTimer), s.wheelTimer = s.currentWindow.setTimeout(function() {
            return s.setState({
              hasWheelJustStarted: !1
            }, function() {
              var y, m;
              return (m = (y = s.props).onInteractionEnd) === null || m === void 0 ? void 0 : m.call(y);
            });
          }, 250);
        }
      }, s.getPointOnContainer = function(o, f) {
        var h = o.x, p = o.y;
        if (!s.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: s.containerRect.width / 2 - (h - f.x),
          y: s.containerRect.height / 2 - (p - f.y)
        };
      }, s.getPointOnMedia = function(o) {
        var f = o.x, h = o.y, p = s.props, y = p.crop, m = p.zoom;
        return {
          x: (f + y.x) / m,
          y: (h + y.y) / m
        };
      }, s.setNewZoom = function(o, f, h) {
        var p = h === void 0 ? {} : h, y = p.shouldUpdatePosition, m = y === void 0 ? !0 : y;
        if (!(!s.state.cropSize || !s.props.onZoomChange)) {
          var v = Du(o, s.props.minZoom, s.props.maxZoom);
          if (m) {
            var S = s.getPointOnContainer(f, s.containerPosition), x = s.getPointOnMedia(S), w = {
              x: x.x * v - S.x,
              y: x.y * v - S.y
            }, D = s.props.restrictPosition ? Mi(w, s.mediaSize, s.state.cropSize, v, s.props.rotation) : w;
            s.props.onCropChange(D);
          }
          s.props.onZoomChange(v);
        }
      }, s.getCropData = function() {
        if (!s.state.cropSize)
          return null;
        var o = s.props.restrictPosition ? Mi(s.props.crop, s.mediaSize, s.state.cropSize, s.props.zoom, s.props.rotation) : s.props.crop;
        return c1(o, s.mediaSize, s.state.cropSize, s.getAspect(), s.props.zoom, s.props.rotation, s.props.restrictPosition);
      }, s.emitCropData = function() {
        var o = s.getCropData();
        if (o) {
          var f = o.croppedAreaPercentages, h = o.croppedAreaPixels;
          s.props.onCropComplete && s.props.onCropComplete(f, h), s.props.onCropAreaChange && s.props.onCropAreaChange(f, h);
        }
      }, s.emitCropAreaChange = function() {
        var o = s.getCropData();
        if (o) {
          var f = o.croppedAreaPercentages, h = o.croppedAreaPixels;
          s.props.onCropAreaChange && s.props.onCropAreaChange(f, h);
        }
      }, s.recomputeCropPosition = function() {
        var o, f;
        if (s.state.cropSize) {
          var h = s.props.crop;
          if (s.isInitialized && (!((o = s.previousCropSize) === null || o === void 0) && o.width) && (!((f = s.previousCropSize) === null || f === void 0) && f.height)) {
            var p = Math.abs(s.previousCropSize.width - s.state.cropSize.width) > 1e-6 || Math.abs(s.previousCropSize.height - s.state.cropSize.height) > 1e-6;
            if (p) {
              var y = s.state.cropSize.width / s.previousCropSize.width, m = s.state.cropSize.height / s.previousCropSize.height;
              h = {
                x: s.props.crop.x * y,
                y: s.props.crop.y * m
              };
            }
          }
          var v = s.props.restrictPosition ? Mi(h, s.mediaSize, s.state.cropSize, s.props.zoom, s.props.rotation) : h;
          s.previousCropSize = s.state.cropSize, s.props.onCropChange(v), s.emitCropData();
        }
      }, s.onKeyDown = function(o) {
        var f, h, p = s.props, y = p.crop, m = p.onCropChange, v = p.keyboardStep, S = p.zoom, x = p.rotation, w = v;
        if (s.state.cropSize) {
          o.shiftKey && (w *= 0.2);
          var D = bt({}, y);
          switch (o.key) {
            case "ArrowUp":
              D.y -= w, o.preventDefault();
              break;
            case "ArrowDown":
              D.y += w, o.preventDefault();
              break;
            case "ArrowLeft":
              D.x -= w, o.preventDefault();
              break;
            case "ArrowRight":
              D.x += w, o.preventDefault();
              break;
            default:
              return;
          }
          s.props.restrictPosition && (D = Mi(D, s.mediaSize, s.state.cropSize, S, x)), o.repeat || (h = (f = s.props).onInteractionStart) === null || h === void 0 || h.call(f), m(D);
        }
      }, s.onKeyUp = function(o) {
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
        s.emitCropData(), (h = (f = s.props).onInteractionEnd) === null || h === void 0 || h.call(f);
      }, s;
    }
    return c.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = v1, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, c.prototype.componentWillUnmount = function() {
      var s, o;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (s = this.resizeObserver) === null || s === void 0 || s.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((o = this.styleRef.parentNode) === null || o === void 0 || o.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, c.prototype.componentDidUpdate = function(s) {
      var o, f, h, p, y, m, v, S, x;
      s.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : s.aspect !== this.props.aspect ? this.computeSizes() : s.objectFit !== this.props.objectFit ? this.computeSizes() : s.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((o = s.cropSize) === null || o === void 0 ? void 0 : o.height) !== ((f = this.props.cropSize) === null || f === void 0 ? void 0 : f.height) || ((h = s.cropSize) === null || h === void 0 ? void 0 : h.width) !== ((p = this.props.cropSize) === null || p === void 0 ? void 0 : p.width) ? this.computeSizes() : (((y = s.crop) === null || y === void 0 ? void 0 : y.x) !== ((m = this.props.crop) === null || m === void 0 ? void 0 : m.x) || ((v = s.crop) === null || v === void 0 ? void 0 : v.y) !== ((S = this.props.crop) === null || S === void 0 ? void 0 : S.y)) && this.emitCropAreaChange(), s.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), s.video !== this.props.video && ((x = this.videoRef.current) === null || x === void 0 || x.load());
      var w = this.getObjectFit();
      w !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: w
      }, this.computeSizes);
    }, c.prototype.getAspect = function() {
      var s = this.props, o = s.cropSize, f = s.aspect;
      return o ? o.width / o.height : f;
    }, c.prototype.getObjectFit = function() {
      var s, o, f, h;
      if (this.props.objectFit === "cover") {
        var p = this.imageRef.current || this.videoRef.current;
        if (p && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var y = this.containerRect.width / this.containerRect.height, m = ((s = this.imageRef.current) === null || s === void 0 ? void 0 : s.naturalWidth) || ((o = this.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, v = ((f = this.imageRef.current) === null || f === void 0 ? void 0 : f.naturalHeight) || ((h = this.videoRef.current) === null || h === void 0 ? void 0 : h.videoHeight) || 0, S = m / v;
          return S < y ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, c.prototype.onPinchStart = function(s) {
      var o = c.getTouchPoint(s.touches[0]), f = c.getTouchPoint(s.touches[1]);
      this.lastPinchDistance = tp(o, f), this.lastPinchRotation = np(o, f), this.onDragStart(ap(o, f));
    }, c.prototype.onPinchMove = function(s) {
      var o = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var f = c.getTouchPoint(s.touches[0]), h = c.getTouchPoint(s.touches[1]), p = ap(f, h);
        this.onDrag(p), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var y = tp(f, h), m = o.props.zoom * (y / o.lastPinchDistance);
          o.setNewZoom(m, p, {
            shouldUpdatePosition: !1
          }), o.lastPinchDistance = y;
          var v = np(f, h), S = o.props.rotation + (v - o.lastPinchRotation);
          o.props.onRotationChange && o.props.onRotationChange(S), o.lastPinchRotation = v;
        });
      }
    }, c.prototype.render = function() {
      var s = this, o, f = this.props, h = f.image, p = f.video, y = f.mediaProps, m = f.cropperProps, v = f.transform, S = f.crop, x = S.x, w = S.y, D = f.rotation, V = f.zoom, X = f.cropShape, G = f.showGrid, H = f.roundCropAreaPixels, B = f.style, Z = B.containerStyle, ne = B.cropAreaStyle, le = B.mediaStyle, F = f.classes, P = F.containerClassName, O = F.cropAreaClassName, I = F.mediaClassName, oe = (o = this.state.mediaObjectFit) !== null && o !== void 0 ? o : this.getObjectFit();
      return b.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(ue) {
          return s.containerRef = ue;
        },
        "data-testid": "container",
        style: Z,
        className: cu("reactEasyCrop_Container", P)
      }, h ? b.createElement("img", bt({
        alt: "",
        className: cu("reactEasyCrop_Image", oe === "contain" && "reactEasyCrop_Contain", oe === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", oe === "vertical-cover" && "reactEasyCrop_Cover_Vertical", I)
      }, y, {
        src: h,
        ref: this.imageRef,
        style: bt(bt({}, le), {
          transform: v || "translate(".concat(x, "px, ").concat(w, "px) rotate(").concat(D, "deg) scale(").concat(V, ")")
        }),
        onLoad: this.onMediaLoad
      })) : p && b.createElement("video", bt({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: cu("reactEasyCrop_Video", oe === "contain" && "reactEasyCrop_Contain", oe === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", oe === "vertical-cover" && "reactEasyCrop_Cover_Vertical", I)
      }, y, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: bt(bt({}, le), {
          transform: v || "translate(".concat(x, "px, ").concat(w, "px) rotate(").concat(D, "deg) scale(").concat(V, ")")
        }),
        controls: !1
      }), (Array.isArray(p) ? p : [{
        src: p
      }]).map(function(ae) {
        return b.createElement("source", bt({
          key: ae.src
        }, ae));
      })), this.state.cropSize && b.createElement("div", bt({
        ref: this.cropperRef,
        style: bt(bt({}, ne), {
          width: H ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: H ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: cu("reactEasyCrop_CropArea", X === "round" && "reactEasyCrop_CropAreaRound", G && "reactEasyCrop_CropAreaGrid", O)
      }, m)));
    }, c.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: y1,
      minZoom: g1,
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
      keyboardStep: x1
    }, c.getMousePoint = function(s) {
      return {
        x: Number(s.clientX),
        y: Number(s.clientY)
      };
    }, c.getTouchPoint = function(s) {
      return {
        x: Number(s.clientX),
        y: Number(s.clientY)
      };
    }, c;
  })(b.Component)
);
function j1({
  children: l,
  onClose: c
}) {
  return b.useEffect(() => {
    const s = (o) => {
      o.key === "Escape" && (o.stopImmediatePropagation(), c());
    };
    return document.addEventListener("keydown", s, !0), () => document.removeEventListener("keydown", s, !0);
  }, [c]), /* @__PURE__ */ u.jsx("div", { className: "modal-backdrop", style: { zIndex: 150 }, children: /* @__PURE__ */ u.jsx(
    "section",
    {
      role: "dialog",
      "aria-label": "Кадрирование аватара",
      className: "modal",
      style: { padding: 0, overflow: "hidden" },
      children: l
    }
  ) });
}
function S1({
  onCropComplete: l,
  onCancel: c,
  initialImage: s,
  mode: o = "profile",
  title: f
}) {
  const [h, p] = b.useState({ x: 0, y: 0 }), [y, m] = b.useState(1), [v, S] = b.useState(null), x = o === "profile", w = x ? { width: 240, height: 320 } : { width: 260, height: 260 }, D = b.useCallback(
    (X, G) => {
      S(G);
    },
    []
  ), V = b.useCallback(async () => {
    if (!v) return;
    const X = new Image();
    X.src = s, await new Promise((Z) => {
      X.onload = Z;
    });
    const G = document.createElement("canvas"), H = G.getContext("2d");
    if (!H) return;
    G.width = v.width, G.height = v.height, H.drawImage(
      X,
      v.x,
      v.y,
      v.width,
      v.height,
      0,
      0,
      v.width,
      v.height
    );
    const B = G.toDataURL("image/jpeg", 0.9);
    l(B);
  }, [v, s, l]);
  return /* @__PURE__ */ u.jsxs(
    j1,
    {
      isOpen: !0,
      onClose: c,
      noHeader: !0,
      noPadding: !0,
      size: "lg",
      stackLevel: 1,
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "app-divider border-b px-6 py-4", children: [
          /* @__PURE__ */ u.jsx("h3", { className: "text-lg font-semibold text-[var(--foreground)]", children: f || (x ? "Настройка фото профиля" : "Настройка аватара") }),
          /* @__PURE__ */ u.jsx("p", { className: "app-text-muted mt-1 text-sm", children: x ? "Разместите лицо в центре овала. Фото будет использоваться для распознавания." : "Выберите область изображения, которая будет видна в круглом аватаре." })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "app-surface-muted relative h-96", children: [
          /* @__PURE__ */ u.jsx(
            b1,
            {
              image: s,
              crop: h,
              zoom: y,
              aspect: x ? 3 / 4 : 1,
              cropSize: w,
              cropShape: x ? "rect" : "round",
              showGrid: !1,
              onCropChange: p,
              onZoomChange: m,
              onCropComplete: D,
              objectFit: "contain",
              restrictPosition: !1
            }
          ),
          x ? /* @__PURE__ */ u.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ u.jsxs(
            "svg",
            {
              width: w.width,
              height: w.height,
              viewBox: "0 0 240 320",
              children: [
                /* @__PURE__ */ u.jsx(
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
                /* @__PURE__ */ u.jsx(
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
                /* @__PURE__ */ u.jsx(
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
        /* @__PURE__ */ u.jsxs("div", { className: "app-divider border-t px-6 py-4", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ u.jsx(
              "svg",
              {
                className: "app-text-muted h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ u.jsx(
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
            /* @__PURE__ */ u.jsx(
              "input",
              {
                type: "range",
                min: 1,
                max: 3,
                step: 0.1,
                value: y,
                onChange: (X) => m(Number(X.target.value)),
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ u.jsx(
              "svg",
              {
                className: "app-text-muted h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ u.jsx(
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
          /* @__PURE__ */ u.jsx("p", { className: "app-text-muted mt-2 text-center text-xs", children: "Используйте ползунок для масштабирования" })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "app-divider border-t px-6 py-4", children: /* @__PURE__ */ u.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              onClick: c,
              className: "app-action-secondary flex-1 rounded-lg px-4 py-3 text-sm font-semibold",
              children: "Отмена"
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              onClick: V,
              className: "app-action-primary flex-1 rounded-lg px-4 py-3 text-sm font-semibold",
              children: "Применить"
            }
          )
        ] }) })
      ]
    }
  );
}
function C1({
  board: l,
  api: c,
  run: s,
  busy: o,
  saved: f,
  close: h
}) {
  const [p, y] = b.useState(l?.name || ""), [m, v] = b.useState(l?.description || ""), [S, x] = b.useState(l?.access_scope || "private"), [w, D] = b.useState((l?.members || []).join(", ")), [V, X] = b.useState(null), [G, H] = b.useState(null), [B, Z] = b.useState(!1), [ne, le] = b.useState(l?.id || null), [F, P] = b.useState([]), [O, I] = b.useState("");
  b.useEffect(() => {
    let ae = !0;
    const ue = setTimeout(() => {
      c(`boards/people/?q=${encodeURIComponent(O)}`).then((de) => {
        ae && P(de);
      }).catch(() => {
      });
    }, 200);
    return () => {
      ae = !1, clearTimeout(ue);
    };
  }, [c, O]);
  async function oe(ae) {
    ae.preventDefault(), await s(async () => {
      const ue = w.trim() ? w.split(",").map((xe) => Number(xe.trim())) : [];
      if (ue.some((xe) => !Number.isInteger(xe) || xe <= 0))
        throw new Error("Укажите ID участников через запятую.");
      let de = await c(
        ne ? `boards/${ne}/` : "boards/",
        ne ? "PATCH" : "POST",
        {
          name: p,
          description: m,
          access_scope: S,
          members: ue,
          ...l ? {
            is_archived: new FormData(ae.currentTarget).get(
              "is_archived"
            ) === "on"
          } : {}
        }
      );
      if (le(de.id), G) {
        const xe = await fetch(G), Me = new FormData();
        Me.append("file", await xe.blob(), "avatar.jpg"), de = await c(`boards/${de.id}/avatar/`, "POST", Me);
      } else B && l?.avatar && (de = await c(`boards/${de.id}/avatar/`, "DELETE"));
      await f(de), h();
    });
  }
  return /* @__PURE__ */ u.jsxs("div", { className: "modal-backdrop", children: [
    /* @__PURE__ */ u.jsxs(
      "section",
      {
        className: "modal",
        role: "dialog",
        "aria-label": l ? "Редактировать доску" : "Новая доска",
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "modal-header", children: [
            /* @__PURE__ */ u.jsx("h2", { children: l ? "Редактировать доску" : "Новая доска" }),
            /* @__PURE__ */ u.jsx("button", { onClick: h, "aria-label": "Закрыть", children: /* @__PURE__ */ u.jsx(Ya, { size: 20 }) })
          ] }),
          /* @__PURE__ */ u.jsxs("form", { className: "form", onSubmit: oe, children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("span", { className: "app-text-muted mb-2 block text-xs font-medium", children: "Аватар доски" }),
              /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ u.jsx(
                  Eo,
                  {
                    name: p || "Доска",
                    src: G || (B ? null : l?.avatar),
                    size: "lg"
                  }
                ),
                /* @__PURE__ */ u.jsxs("label", { className: "app-action-secondary inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium", children: [
                  /* @__PURE__ */ u.jsx(bp, { size: 15 }),
                  G || l?.avatar ? "Заменить" : "Загрузить",
                  /* @__PURE__ */ u.jsx(
                    "input",
                    {
                      type: "file",
                      accept: "image/*",
                      className: "hidden",
                      onChange: (ae) => {
                        const ue = ae.target.files?.[0];
                        if (ue)
                          if (ue.size > 5 * 1024 * 1024)
                            s(async () => {
                              throw new Error("Выберите изображение до 5 МБ.");
                            });
                          else {
                            const de = new FileReader();
                            de.onload = () => X(String(de.result)), de.readAsDataURL(ue);
                          }
                        ae.target.value = "";
                      }
                    }
                  )
                ] }),
                (G || l?.avatar) && /* @__PURE__ */ u.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "danger",
                    onClick: () => {
                      H(null), Z(!0);
                    },
                    children: [
                      /* @__PURE__ */ u.jsx(Rt, { size: 15 }),
                      "Удалить"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ u.jsxs("label", { children: [
              "Название доски",
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  value: p,
                  onChange: (ae) => y(ae.target.value),
                  required: !0,
                  maxLength: 255
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("label", { children: [
              "Описание",
              /* @__PURE__ */ u.jsx(
                "textarea",
                {
                  value: m,
                  onChange: (ae) => v(ae.target.value),
                  rows: 3
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("span", { className: "app-text-muted mb-2 block text-xs font-medium", children: "Доступ" }),
              /* @__PURE__ */ u.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
                ["private", "Для себя"],
                ["restricted", "Выборочно"],
                ["all", "Для всех"]
              ].map(([ae, ue]) => /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: S === ae ? "primary" : "secondary",
                  onClick: () => x(ae),
                  children: ue
                },
                ae
              )) })
            ] }),
            S === "restricted" && /* @__PURE__ */ u.jsxs("fieldset", { children: [
              /* @__PURE__ */ u.jsx("legend", { children: "Участники доски" }),
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  value: O,
                  onChange: (ae) => I(ae.target.value),
                  placeholder: "Поиск по логину",
                  "aria-label": "Найти участника"
                }
              ),
              /* @__PURE__ */ u.jsx("div", { className: "people-picker", children: F.map((ae) => {
                const ue = w.split(",").map((de) => Number(de.trim())).filter(Boolean);
                return /* @__PURE__ */ u.jsxs("label", { className: "choice-row", children: [
                  /* @__PURE__ */ u.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: ue.includes(ae.id),
                      onChange: () => D(
                        (ue.includes(ae.id) ? ue.filter((de) => de !== ae.id) : [...ue, ae.id]).join(", ")
                      )
                    }
                  ),
                  ae.name
                ] }, ae.id);
              }) }),
              /* @__PURE__ */ u.jsxs("small", { className: "muted", children: [
                "Выбрано: ",
                w.split(",").filter((ae) => ae.trim()).length
              ] })
            ] }),
            l && /* @__PURE__ */ u.jsxs("label", { className: "choice-row", children: [
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  type: "checkbox",
                  name: "is_archived",
                  defaultChecked: l.is_archived
                }
              ),
              "Убрать доску в архив"
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "flex justify-end gap-2", children: [
              /* @__PURE__ */ u.jsx("button", { type: "button", className: "secondary", onClick: h, children: "Отмена" }),
              /* @__PURE__ */ u.jsx("button", { className: "primary", disabled: o || !p.trim(), children: l ? "Сохранить" : "Создать" })
            ] })
          ] })
        ]
      }
    ),
    V && /* @__PURE__ */ u.jsx(
      S1,
      {
        initialImage: V,
        mode: "avatar",
        title: "Аватар доски",
        onCancel: () => X(null),
        onCropComplete: (ae) => {
          H(ae), Z(!1), X(null);
        }
      }
    )
  ] });
}
function Hi({
  isOpen: l = !0,
  onClose: c,
  title: s,
  children: o,
  size: f,
  closeOnClickOutside: h = !1
}) {
  const p = b.useRef(null), y = b.useRef(c);
  return y.current = c, b.useEffect(() => {
    if (!l) return;
    const m = document.activeElement, v = p.current;
    v?.querySelector("[autofocus],input,textarea,button")?.focus();
    const S = (x) => {
      if (x.key === "Escape" && (x.stopPropagation(), y.current()), x.key === "Tab" && v) {
        const w = [
          ...v.querySelectorAll(
            'button:not(:disabled),input:not(:disabled),textarea:not(:disabled),select:not(:disabled),a[href],[tabindex="0"]'
          )
        ].filter((X) => X.getClientRects().length), D = w[0], V = w.at(-1);
        x.shiftKey && document.activeElement === D ? (x.preventDefault(), V?.focus()) : !x.shiftKey && document.activeElement === V && (x.preventDefault(), D?.focus());
      }
    };
    return v?.addEventListener("keydown", S), () => {
      v?.removeEventListener("keydown", S), m?.focus();
    };
  }, [l]), l ? /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "modal-backdrop",
      onMouseDown: (m) => {
        h && m.target === m.currentTarget && c();
      },
      children: /* @__PURE__ */ u.jsxs(
        "section",
        {
          ref: p,
          className: `modal ${f === "xl" ? "modal-wide" : ""}`,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": s,
          children: [
            /* @__PURE__ */ u.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ u.jsx("h2", { children: s }),
              /* @__PURE__ */ u.jsx("button", { onClick: c, "aria-label": "Закрыть", children: /* @__PURE__ */ u.jsx(Ya, { size: 20 }) })
            ] }),
            o
          ]
        }
      )
    }
  ) : null;
}
function fo(l) {
  const c = (l || []).filter((o) => !o.is_archived);
  return c.filter((o) => !o.parent).sort(
    (o, f) => o.position - f.position || o.id - f.id
  ).flatMap((o) => {
    const f = c.filter((h) => h.parent === o.id).sort(
      (h, p) => h.position - p.position || h.id - p.id
    );
    return f.length > 0 ? f : [o];
  });
}
function lv(l, c) {
  if (!l.parent) return l.name;
  const s = (c || []).find((o) => o.id === l.parent);
  return s ? `${s.name} / ${l.name}` : l.name;
}
const N1 = [
  ["details", "Описание", po],
  ["attachments", "Файлы", vu],
  ["links", "Ссылки", Nu],
  ["comments", "Обсуждение", vo],
  ["history", "История", xp]
];
function w1({
  task: l,
  state: c,
  api: s,
  reload: o,
  run: f,
  busy: h,
  close: p,
  remove: y,
  open: m,
  initialTab: v
}) {
  const [S, x] = b.useState(v || "details"), [w, D] = b.useState(l.title), [V, X] = b.useState(l.description), [G, H] = b.useState(l.column), [B, Z] = b.useState(l.row), [ne, le] = b.useState(l.priority), [F, P] = b.useState(l.due_date || ""), [O, I] = b.useState(l.assignee?.id || ""), [oe, ae] = b.useState(l.labels.map((T) => T.id)), [ue, de] = b.useState(
    l.participants.map((T) => T.id)
  ), [xe, Me] = b.useState([]), [k, J] = b.useState([]), [se, pe] = b.useState([]), [ge, N] = b.useState([]), [q, ee] = b.useState([]), [ie, ve] = b.useState([]), [E, te] = b.useState(null), [j, A] = b.useState(""), [L, re] = b.useState(!1), fe = `tasks/${l.id}/`, Fe = c.columns.find((T) => T.id === G), Ce = c.board.is_archived || l.is_archived, Ie = w !== l.title || V !== l.description || G !== l.column || B !== l.row || ne !== l.priority || F !== (l.due_date || "") || O !== (l.assignee?.id || "") || JSON.stringify(oe) !== JSON.stringify(l.labels.map((T) => T.id)) || JSON.stringify(ue) !== JSON.stringify(l.participants.map((T) => T.id));
  function W() {
    (!Ie || window.confirm("Закрыть карточку без сохранения изменений?")) && p();
  }
  async function Se() {
    const [T, be, Be, it, zn, Pt] = await Promise.all([
      s(fe + "checklist/"),
      s(fe + "comments/"),
      s(fe + "attachments/"),
      s(fe + "links/"),
      s(fe + "history/"),
      s(
        `automations/buttons/?task=${l.id}`
      )
    ]);
    Me(T), J(be), pe(Be), N(it), ee(zn), ve(Pt), re(!0);
  }
  b.useEffect(() => {
    f(Se);
  }, [l.id]);
  async function Ee() {
    const T = await s(fe);
    D(T.title), X(T.description), H(T.column), Z(T.row), le(T.priority), P(T.due_date || ""), I(T.assignee?.id || ""), ae(T.labels.map((be) => be.id)), de(T.participants.map((be) => be.id));
  }
  async function Ne(T, be, Be) {
    await s(T, be, Be), Ie || await Ee(), await Se(), await o();
  }
  async function Ge(T) {
    T?.preventDefault(), await f(async () => {
      await s(fe, "PATCH", {
        title: w,
        description: V,
        column: G,
        row: B,
        priority: ne,
        due_date: F || null,
        assignee_id: O || null,
        label_ids: oe,
        participant_ids: ue
      }), await o(), await Se(), await Ee(), A("Изменения сохранены");
    });
  }
  async function nt(T, be) {
    T.preventDefault();
    const Be = T.currentTarget, it = Object.fromEntries(new FormData(Be));
    await f(async () => {
      await Ne(
        fe + be + "/",
        "POST",
        be === "checklist" ? { ...it, position: (xe.length + 1) * 1e3 } : it
      ), Be.reset();
    });
  }
  const ce = (T, be) => {
    f(() => Ne(fe + "cover/", "PUT", { kind: T, id: be }));
  }, Pe = (T, be) => T.includes(be) ? T.filter((Be) => Be !== be) : [...T, be];
  async function et(T, be) {
    xe[T + be] && await f(async () => {
      const it = [...xe];
      [it[T], it[T + be]] = [
        it[T + be],
        it[T]
      ], await s(fe + "reorder-checklist/", "POST", {
        ids: it.map((zn) => zn.id)
      }), await Se();
    });
  }
  const Qa = () => {
    f(async () => {
      await s(fe, "PATCH", { is_archived: !l.is_archived }), await o(), p();
    });
  };
  return /* @__PURE__ */ u.jsx(Hi, { title: `Карточка #${l.id}`, onClose: W, size: "xl", children: /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: "task-dialog",
      onKeyDown: (T) => {
        (T.ctrlKey || T.metaKey) && T.key === "Enter" && !Ce && (T.preventDefault(), Ge());
      },
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "task-dialog-actions", children: [
          /* @__PURE__ */ u.jsx("span", { className: `task-status ${l.completed_at ? "done" : ""}`, children: l.is_archived ? "В архиве" : l.completed_at ? "Завершена" : "В работе" }),
          /* @__PURE__ */ u.jsx("span", { className: "grow" }),
          !Ce && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsxs(
              "button",
              {
                className: "secondary",
                disabled: h,
                onClick: () => {
                  f(async () => {
                    const T = await s(
                      fe + "duplicate/",
                      "POST"
                    );
                    await o(), m(T);
                  });
                },
                children: [
                  /* @__PURE__ */ u.jsx(vp, { size: 14 }),
                  "Копия"
                ]
              }
            ),
            /* @__PURE__ */ u.jsxs(
              "button",
              {
                className: "secondary",
                disabled: h || Ie,
                title: Ie ? "Сначала сохраните изменения" : void 0,
                onClick: Qa,
                children: [
                  /* @__PURE__ */ u.jsx(Ml, { size: 14 }),
                  "В архив"
                ]
              }
            )
          ] }),
          l.is_archived && !c.board.is_archived && /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: "secondary",
              disabled: h || Ie,
              title: Ie ? "Сначала сохраните изменения" : void 0,
              onClick: Qa,
              children: [
                /* @__PURE__ */ u.jsx(jp, { size: 14 }),
                "Восстановить"
              ]
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "icon-danger",
              title: "Удалить карточку",
              onClick: y,
              disabled: c.board.is_archived,
              children: /* @__PURE__ */ u.jsx(Rt, { size: 16 })
            }
          )
        ] }),
        l.cover && /* @__PURE__ */ u.jsxs("div", { className: "editor-cover", children: [
          /* @__PURE__ */ u.jsx(
            tv,
            {
              taskId: l.id,
              cover: l.cover,
              className: "h-40 w-full rounded-xl"
            }
          ),
          !Ce && /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "secondary",
              onClick: () => {
                f(() => Ne(fe + "cover/", "DELETE"));
              },
              children: "Убрать обложку"
            }
          )
        ] }),
        /* @__PURE__ */ u.jsx("form", { id: "task-fields", onSubmit: Ge, className: "task-title-form", children: /* @__PURE__ */ u.jsx(
          "input",
          {
            "aria-label": "Название карточки",
            value: w,
            required: !0,
            maxLength: 255,
            onChange: (T) => {
              D(T.target.value), A("");
            },
            disabled: Ce,
            className: "task-title-input"
          }
        ) }),
        /* @__PURE__ */ u.jsxs("div", { className: "task-dialog-grid", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "task-content", children: [
            /* @__PURE__ */ u.jsx("div", { className: "detail-tabs", children: N1.map(([T, be, Be]) => /* @__PURE__ */ u.jsxs(
              "button",
              {
                className: S === T ? "active" : "",
                onClick: () => x(T),
                children: [
                  /* @__PURE__ */ u.jsx(Be, { size: 15 }),
                  be,
                  T === "comments" && k.length > 0 ? ` · ${k.length}` : T === "attachments" && se.length > 0 ? ` · ${se.length}` : ""
                ]
              },
              T
            )) }),
            !L && /* @__PURE__ */ u.jsx("p", { className: "muted", children: "Загружаем содержимое…" }),
            S === "details" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsxs("label", { className: "form", children: [
                "Описание",
                /* @__PURE__ */ u.jsx(
                  "textarea",
                  {
                    "aria-label": "Описание карточки",
                    value: V,
                    rows: 5,
                    onChange: (T) => X(T.target.value),
                    disabled: Ce,
                    placeholder: "Контекст, результат и всё, что поможет выполнить задачу"
                  }
                )
              ] }),
              /* @__PURE__ */ u.jsxs("div", { className: "section-heading", children: [
                /* @__PURE__ */ u.jsxs("h3", { children: [
                  /* @__PURE__ */ u.jsx(po, { size: 17 }),
                  "Чек-лист",
                  " ",
                  /* @__PURE__ */ u.jsxs("small", { children: [
                    xe.filter((T) => T.is_completed).length,
                    "/",
                    xe.length
                  ] })
                ] }),
                xe.length > 0 && !Ce && /* @__PURE__ */ u.jsxs(
                  "button",
                  {
                    className: "text-action",
                    onClick: () => ce("checklist"),
                    children: [
                      /* @__PURE__ */ u.jsx(Jc, { size: 14 }),
                      "На обложку"
                    ]
                  }
                )
              ] }),
              xe.length > 0 && /* @__PURE__ */ u.jsx(
                "progress",
                {
                  className: "checklist-progress",
                  max: xe.length,
                  value: xe.filter((T) => T.is_completed).length
                }
              ),
              /* @__PURE__ */ u.jsx("div", { className: "checklist-items", children: xe.map((T, be) => /* @__PURE__ */ u.jsxs("div", { className: "checklist-row", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "aria-label": `Выполнено: ${T.title}`,
                    checked: T.is_completed,
                    disabled: Ce || h,
                    onChange: (Be) => {
                      f(
                        () => Ne(fe + "checklist/", "PATCH", {
                          id: T.id,
                          is_completed: Be.target.checked
                        })
                      );
                    }
                  }
                ),
                E?.kind === "checklist" && E.id === T.id ? /* @__PURE__ */ u.jsxs(
                  "form",
                  {
                    className: "inline-edit",
                    onSubmit: (Be) => {
                      Be.preventDefault(), f(async () => {
                        await Ne(fe + "checklist/", "PATCH", {
                          id: T.id,
                          title: E.text
                        }), te(null);
                      });
                    },
                    children: [
                      /* @__PURE__ */ u.jsx(
                        "input",
                        {
                          "aria-label": "Название пункта",
                          value: E.text,
                          maxLength: 500,
                          onChange: (Be) => te({ ...E, text: Be.target.value })
                        }
                      ),
                      /* @__PURE__ */ u.jsx("button", { disabled: h, children: /* @__PURE__ */ u.jsx(qa, { size: 15 }) })
                    ]
                  }
                ) : /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    className: `checklist-title ${T.is_completed ? "completed" : ""}`,
                    onClick: () => !Ce && te({
                      kind: "checklist",
                      id: T.id,
                      text: T.title
                    }),
                    children: T.title
                  }
                ),
                !Ce && /* @__PURE__ */ u.jsxs("span", { className: "row-actions", children: [
                  /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      title: "Пункт выше",
                      disabled: be === 0 || h,
                      onClick: () => {
                        et(be, -1);
                      },
                      children: /* @__PURE__ */ u.jsx(mp, { size: 13 })
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      title: "Пункт ниже",
                      disabled: be === xe.length - 1 || h,
                      onClick: () => {
                        et(be, 1);
                      },
                      children: /* @__PURE__ */ u.jsx(hp, { size: 13 })
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      title: "Удалить пункт",
                      onClick: () => {
                        f(
                          () => Ne(fe + "checklist/", "DELETE", {
                            id: T.id
                          })
                        );
                      },
                      children: /* @__PURE__ */ u.jsx(Rt, { size: 13 })
                    }
                  )
                ] })
              ] }, T.id)) }),
              !Ce && /* @__PURE__ */ u.jsxs(
                "form",
                {
                  className: "inline-add",
                  onSubmit: (T) => {
                    nt(T, "checklist");
                  },
                  children: [
                    /* @__PURE__ */ u.jsx(
                      "input",
                      {
                        name: "title",
                        placeholder: "Добавить пункт…",
                        "aria-label": "Новый пункт чек-листа",
                        required: !0,
                        maxLength: 500
                      }
                    ),
                    /* @__PURE__ */ u.jsx("button", { className: "secondary", disabled: h, children: "Добавить" })
                  ]
                }
              )
            ] }),
            S === "attachments" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx("p", { className: "muted section-note", children: "Файлы хранятся в Django storage. Скачать их могут участники доски." }),
              se.map((T) => /* @__PURE__ */ u.jsxs("div", { className: "resource-row", children: [
                /* @__PURE__ */ u.jsx(vu, { size: 18 }),
                /* @__PURE__ */ u.jsxs(
                  "a",
                  {
                    href: T.url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "grow",
                    children: [
                      T.name,
                      /* @__PURE__ */ u.jsxs("small", { children: [
                        Math.ceil(T.size / 1024),
                        " КБ"
                      ] })
                    ]
                  }
                ),
                !Ce && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      title: "Файл на обложку",
                      onClick: () => ce("attachment", T.id),
                      children: /* @__PURE__ */ u.jsx(Jc, { size: 16 })
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      title: "Удалить файл",
                      onClick: () => {
                        f(
                          () => Ne(fe + "attachments/", "DELETE", {
                            id: T.id
                          })
                        );
                      },
                      children: /* @__PURE__ */ u.jsx(Rt, { size: 15 })
                    }
                  )
                ] })
              ] }, T.id)),
              !Ce && /* @__PURE__ */ u.jsxs("label", { className: "upload-zone", children: [
                /* @__PURE__ */ u.jsx(vu, { size: 25 }),
                /* @__PURE__ */ u.jsx("strong", { children: "Добавить файлы" }),
                /* @__PURE__ */ u.jsx("span", { children: "Можно выбрать несколько сразу" }),
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "file",
                    multiple: !0,
                    disabled: h,
                    onChange: (T) => {
                      const be = Array.from(T.target.files || []);
                      T.target.value = "", f(async () => {
                        try {
                          for (const Be of be) {
                            const it = new FormData();
                            it.append("file", Be), await s(fe + "attachments/", "POST", it);
                          }
                        } finally {
                          await Se(), await o();
                        }
                      });
                    }
                  }
                )
              ] }),
              !se.length && Ce && /* @__PURE__ */ u.jsx("p", { className: "muted", children: "Файлов пока нет." })
            ] }),
            S === "links" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx("p", { className: "muted section-note", children: "Материалы, документы и страницы, связанные с задачей." }),
              ge.map((T) => /* @__PURE__ */ u.jsxs("div", { className: "resource-row", children: [
                /* @__PURE__ */ u.jsx(Nu, { size: 18 }),
                /* @__PURE__ */ u.jsxs(
                  "a",
                  {
                    className: "grow",
                    href: T.url,
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                      T.title || T.url,
                      /* @__PURE__ */ u.jsx("small", { children: T.url })
                    ]
                  }
                ),
                !Ce && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      title: "Ссылку на обложку",
                      onClick: () => ce("external_link", T.id),
                      children: /* @__PURE__ */ u.jsx(Jc, { size: 16 })
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      title: "Удалить ссылку",
                      onClick: () => {
                        f(
                          () => Ne(fe + "links/", "DELETE", { id: T.id })
                        );
                      },
                      children: /* @__PURE__ */ u.jsx(Rt, { size: 15 })
                    }
                  )
                ] })
              ] }, T.id)),
              !Ce && /* @__PURE__ */ u.jsxs(
                "form",
                {
                  className: "form inset-form",
                  onSubmit: (T) => {
                    nt(T, "links");
                  },
                  children: [
                    /* @__PURE__ */ u.jsx(
                      "input",
                      {
                        name: "title",
                        "aria-label": "Название ссылки",
                        placeholder: "Название ссылки",
                        maxLength: 255
                      }
                    ),
                    /* @__PURE__ */ u.jsx(
                      "input",
                      {
                        name: "url",
                        type: "url",
                        "aria-label": "Адрес ссылки",
                        required: !0,
                        placeholder: "https://…",
                        maxLength: 2048
                      }
                    ),
                    /* @__PURE__ */ u.jsx("button", { className: "secondary", disabled: h, children: "Добавить ссылку" })
                  ]
                }
              )
            ] }),
            S === "comments" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              k.map((T) => /* @__PURE__ */ u.jsxs("article", { className: "comment-block", children: [
                /* @__PURE__ */ u.jsxs("div", { children: [
                  /* @__PURE__ */ u.jsx("strong", { children: T.author.name }),
                  /* @__PURE__ */ u.jsx("time", { children: new Date(T.created_at).toLocaleString("ru") })
                ] }),
                E?.kind === "comment" && E.id === T.id ? /* @__PURE__ */ u.jsxs(
                  "form",
                  {
                    className: "form",
                    onSubmit: (be) => {
                      be.preventDefault(), f(async () => {
                        await Ne(fe + "comments/", "PATCH", {
                          id: T.id,
                          text: E.text
                        }), te(null);
                      });
                    },
                    children: [
                      /* @__PURE__ */ u.jsx(
                        "textarea",
                        {
                          "aria-label": "Изменить комментарий",
                          value: E.text,
                          onChange: (be) => te({ ...E, text: be.target.value }),
                          required: !0,
                          maxLength: 1e4
                        }
                      ),
                      /* @__PURE__ */ u.jsx("button", { className: "secondary", disabled: h, children: "Сохранить комментарий" })
                    ]
                  }
                ) : /* @__PURE__ */ u.jsx("p", { children: T.text }),
                !Ce && /* @__PURE__ */ u.jsxs("div", { className: "comment-actions", children: [
                  /* @__PURE__ */ u.jsx("button", { onClick: () => ce("comment", T.id), children: "На обложку" }),
                  (c.me.id === T.author.id || c.can_manage) && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                    /* @__PURE__ */ u.jsx(
                      "button",
                      {
                        onClick: () => te({
                          kind: "comment",
                          id: T.id,
                          text: T.text
                        }),
                        children: "Изменить"
                      }
                    ),
                    /* @__PURE__ */ u.jsx(
                      "button",
                      {
                        onClick: () => {
                          f(
                            () => Ne(fe + "comments/", "DELETE", {
                              id: T.id
                            })
                          );
                        },
                        children: "Удалить"
                      }
                    )
                  ] })
                ] })
              ] }, T.id)),
              !Ce && /* @__PURE__ */ u.jsxs(
                "form",
                {
                  className: "form",
                  onSubmit: (T) => {
                    nt(T, "comments");
                  },
                  children: [
                    /* @__PURE__ */ u.jsx(
                      "textarea",
                      {
                        name: "text",
                        placeholder: "Напишите комментарий…",
                        "aria-label": "Новый комментарий",
                        required: !0,
                        maxLength: 1e4,
                        rows: 3
                      }
                    ),
                    /* @__PURE__ */ u.jsx("button", { className: "primary", disabled: h, children: "Отправить" })
                  ]
                }
              ),
              !k.length && Ce && /* @__PURE__ */ u.jsx("p", { className: "muted", children: "Комментариев пока нет." })
            ] }),
            S === "history" && /* @__PURE__ */ u.jsxs("div", { className: "history-list", children: [
              q.map((T) => /* @__PURE__ */ u.jsxs("div", { children: [
                /* @__PURE__ */ u.jsx("span", { className: "history-dot" }),
                /* @__PURE__ */ u.jsxs("div", { children: [
                  /* @__PURE__ */ u.jsx("strong", { children: T.actor?.name || "Автоматизация" }),
                  " ",
                  T.label.toLocaleLowerCase(),
                  T.action === "moved" && /* @__PURE__ */ u.jsxs("p", { className: "muted", children: [
                    c.columns.find(
                      (be) => be.id === T.metadata.from_column_id
                    )?.name || "…",
                    " ",
                    "→",
                    " ",
                    c.columns.find(
                      (be) => be.id === T.metadata.to_column_id
                    )?.name || "…"
                  ] }),
                  Array.isArray(T.metadata.fields) && T.metadata.fields.length > 0 && /* @__PURE__ */ u.jsx("p", { className: "muted", children: T.metadata.fields.map(
                    (be) => ({
                      title: "название",
                      description: "описание",
                      assignee_id: "исполнитель",
                      priority: "приоритет",
                      due_date: "срок",
                      label_ids: "метки",
                      participant_ids: "участники",
                      row_id: "дорожка"
                    })[String(be)] || String(be)
                  ).join(", ") }),
                  typeof T.metadata.title == "string" && /* @__PURE__ */ u.jsx("p", { children: T.metadata.title }),
                  /* @__PURE__ */ u.jsx("time", { children: new Date(T.created_at).toLocaleString("ru") })
                ] })
              ] }, T.id)),
              !q.length && /* @__PURE__ */ u.jsx("p", { className: "muted", children: "История появится после первого изменения." })
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("aside", { className: "task-properties", children: [
            /* @__PURE__ */ u.jsxs("label", { children: [
              "Колонка",
              /* @__PURE__ */ u.jsx(
                "select",
                {
                  value: G,
                  disabled: Ce,
                  onChange: (T) => {
                    H(Number(T.target.value)), Z(null);
                  },
                  children: fo(c.columns).map((T) => /* @__PURE__ */ u.jsx("option", { value: T.id, children: lv(T, c.columns) }, T.id))
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("label", { children: [
              "Дорожка",
              /* @__PURE__ */ u.jsxs(
                "select",
                {
                  value: B ?? "",
                  disabled: Ce,
                  onChange: (T) => Z(T.target.value ? Number(T.target.value) : null),
                  children: [
                    /* @__PURE__ */ u.jsx("option", { value: "", children: "Без дорожки" }),
                    c.rows.filter((T) => T.column === (Fe?.parent || G)).map((T) => /* @__PURE__ */ u.jsx("option", { value: T.id, children: T.name }, T.id))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("label", { children: [
              "Приоритет",
              /* @__PURE__ */ u.jsx(
                "select",
                {
                  value: ne,
                  disabled: Ce,
                  onChange: (T) => le(T.target.value),
                  children: qi.map((T) => /* @__PURE__ */ u.jsx("option", { value: T.value, children: T.label }, T.value))
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("label", { children: [
              "Срок",
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  type: "date",
                  value: F,
                  disabled: Ce,
                  onChange: (T) => P(T.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("label", { children: [
              "Исполнитель",
              /* @__PURE__ */ u.jsxs(
                "select",
                {
                  value: O,
                  disabled: Ce,
                  onChange: (T) => I(T.target.value ? Number(T.target.value) : ""),
                  children: [
                    /* @__PURE__ */ u.jsx("option", { value: "", children: "Не назначен" }),
                    c.users.map((T) => /* @__PURE__ */ u.jsx("option", { value: T.id, children: T.name }, T.id))
                  ]
                }
              )
            ] }),
            !Ce && O !== c.me.id && /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "text-action",
                onClick: () => I(c.me.id),
                children: "Назначить себя"
              }
            ),
            /* @__PURE__ */ u.jsxs("fieldset", { children: [
              /* @__PURE__ */ u.jsx("legend", { children: "Метки" }),
              c.labels.map((T) => /* @__PURE__ */ u.jsxs("label", { className: "choice-row", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: oe.includes(T.id),
                    disabled: Ce,
                    onChange: () => ae(Pe(oe, T.id))
                  }
                ),
                /* @__PURE__ */ u.jsx("span", { className: "dot", style: { background: T.color } }),
                T.name
              ] }, T.id)),
              !c.labels.length && /* @__PURE__ */ u.jsx("span", { className: "muted", children: "Нет меток на доске" })
            ] }),
            /* @__PURE__ */ u.jsxs("fieldset", { children: [
              /* @__PURE__ */ u.jsx("legend", { children: "Участники" }),
              c.users.map((T) => /* @__PURE__ */ u.jsxs("label", { className: "choice-row", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: ue.includes(T.id),
                    disabled: Ce,
                    onChange: () => de(Pe(ue, T.id))
                  }
                ),
                T.name
              ] }, T.id))
            ] }),
            !Ce && ie.length > 0 && /* @__PURE__ */ u.jsxs("fieldset", { children: [
              /* @__PURE__ */ u.jsx("legend", { children: "Действия" }),
              ie.map((T) => /* @__PURE__ */ u.jsxs(
                "button",
                {
                  className: "secondary",
                  disabled: h || Ie,
                  title: Ie ? "Сначала сохраните карточку" : T.name,
                  onClick: () => {
                    f(async () => {
                      const be = await s(
                        `automations/${T.id}/run/`,
                        "POST",
                        { task: l.id }
                      );
                      if (await Se(), await o(), be.status !== "success")
                        throw new Error(
                          be.error || "Действие не выполнено"
                        );
                      await Ee(), A("Действие выполнено");
                    });
                  },
                  children: [
                    /* @__PURE__ */ u.jsx(Rl, { size: 14 }),
                    T.name
                  ]
                },
                T.id
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "task-save-bar", children: [
          /* @__PURE__ */ u.jsx("span", { role: "status", children: Ie ? "Есть несохранённые изменения" : j || "Все изменения сохранены" }),
          /* @__PURE__ */ u.jsx("button", { className: "secondary", onClick: W, children: "Закрыть" }),
          !Ce && /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: "primary",
              type: "submit",
              form: "task-fields",
              disabled: h || !w.trim(),
              children: [
                /* @__PURE__ */ u.jsx(w0, { size: 16 }),
                "Сохранить"
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
function _1({
  boards: l,
  groups: c,
  selected: s,
  select: o,
  create: f,
  editGroup: h,
  api: p,
  reload: y,
  run: m
}) {
  const [v, S] = b.useState(""), [x, w] = b.useState("all"), [D, V] = b.useState(!1), [X, G] = b.useState("name"), [H, B] = b.useState(() => window.innerWidth <= 800), [Z, ne] = b.useState([]);
  function le(O) {
    o(O), window.innerWidth <= 800 && B(!0);
  }
  const F = l.filter(
    (O) => O.is_archived === D && O.name.toLocaleLowerCase().includes(v.toLocaleLowerCase()) && (x === "all" || x === "starred" && O.is_pinned || typeof x == "number" && c.find((I) => I.id === x)?.boards.includes(O.id))
  ).sort(
    (O, I) => Number(I.is_pinned) - Number(O.is_pinned) || (X === "newest" ? I.created_at.localeCompare(O.created_at) : X === "updated" ? I.updated_at.localeCompare(O.updated_at) : O.name.localeCompare(I.name))
  ), P = (O, I) => {
    m(async () => {
      await p(`groups/${I.id}/`, "PATCH", {
        boards: [.../* @__PURE__ */ new Set([...I.boards, O])]
      }), await y();
    });
  };
  return /* @__PURE__ */ u.jsxs("aside", { className: `nb-sidebar ${H ? "sidebar-collapsed" : ""}`, children: [
    /* @__PURE__ */ u.jsxs("div", { className: "nb-brand", children: [
      /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(pu, { size: 22 }) }),
      !H && /* @__PURE__ */ u.jsxs("div", { children: [
        "Nadein Board",
        /* @__PURE__ */ u.jsx("small", { children: "Рабочее пространство" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        className: "sidebar-collapse",
        title: H ? "Показать доски" : "Свернуть навигацию",
        onClick: () => B(!H),
        children: H ? /* @__PURE__ */ u.jsx(h0, { size: 19 }) : /* @__PURE__ */ u.jsx(d0, { size: 19 })
      }
    ),
    !H && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsxs("button", { className: "primary", onClick: f, children: [
        /* @__PURE__ */ u.jsx(Mt, { size: 16 }),
        "Создать доску"
      ] }),
      /* @__PURE__ */ u.jsxs("label", { className: "search navigator-search", children: [
        /* @__PURE__ */ u.jsx(Sp, { size: 15 }),
        /* @__PURE__ */ u.jsx(
          "input",
          {
            placeholder: "Найти доску",
            value: v,
            onChange: (O) => S(O.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "navigator-scroll", children: [
        /* @__PURE__ */ u.jsxs(
          "button",
          {
            className: `nav-filter ${x === "all" ? "selected" : ""}`,
            onClick: () => w("all"),
            children: [
              /* @__PURE__ */ u.jsx(pu, { size: 16 }),
              "Все доски",
              /* @__PURE__ */ u.jsx("span", { children: l.filter((O) => !O.is_archived).length })
            ]
          }
        ),
        /* @__PURE__ */ u.jsxs(
          "button",
          {
            className: `nav-filter ${x === "starred" ? "selected" : ""}`,
            onClick: () => w("starred"),
            children: [
              /* @__PURE__ */ u.jsx(Dm, { size: 16 }),
              "Избранное"
            ]
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: "sidebar-label", children: [
          "ГРУППЫ",
          /* @__PURE__ */ u.jsx("button", { title: "Создать группу", onClick: () => h(), children: /* @__PURE__ */ u.jsx(Mt, { size: 15 }) })
        ] }),
        c.map((O) => /* @__PURE__ */ u.jsxs(
          "div",
          {
            onDragOver: (I) => I.preventDefault(),
            onDrop: (I) => {
              I.preventDefault();
              const oe = Number(I.dataTransfer.getData("text/board-id"));
              l.some((ae) => ae.id === oe) && P(oe, O);
            },
            children: [
              /* @__PURE__ */ u.jsxs("div", { className: "group-heading", children: [
                /* @__PURE__ */ u.jsxs(
                  "button",
                  {
                    onClick: () => {
                      w(O.id), ne(
                        (I) => I.includes(O.id) ? I.filter((oe) => oe !== O.id) : [...I, O.id]
                      );
                    },
                    children: [
                      /* @__PURE__ */ u.jsx(
                        Yi,
                        {
                          size: 13,
                          style: {
                            transform: Z.includes(O.id) ? "rotate(-90deg)" : void 0
                          }
                        }
                      ),
                      /* @__PURE__ */ u.jsx(Jy, { size: 15, color: O.color }),
                      O.name,
                      /* @__PURE__ */ u.jsx("small", { children: O.boards.length })
                    ]
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    title: `Настройки группы ${O.name}`,
                    onClick: () => h(O),
                    children: /* @__PURE__ */ u.jsx(Za, { size: 12 })
                  }
                )
              ] }),
              !Z.includes(O.id) && l.filter(
                (I) => O.boards.includes(I.id) && I.is_archived === D
              ).map((I) => /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "group-board",
                  onClick: () => le(I),
                  children: I.name
                },
                I.id
              ))
            ]
          },
          O.id
        )),
        /* @__PURE__ */ u.jsxs("div", { className: "sidebar-label", children: [
          D ? "АРХИВ ДОСОК" : "ДОСКИ",
          /* @__PURE__ */ u.jsxs(
            "select",
            {
              "aria-label": "Порядок досок",
              value: X,
              onChange: (O) => G(O.target.value),
              children: [
                /* @__PURE__ */ u.jsx("option", { value: "name", children: "А—Я" }),
                /* @__PURE__ */ u.jsx("option", { value: "newest", children: "Новые" }),
                /* @__PURE__ */ u.jsx("option", { value: "updated", children: "Обновлённые" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ u.jsx("nav", { children: F.map((O) => /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: `nav-board ${O.id === s ? "active" : ""}`,
            draggable: !0,
            onDragStart: (I) => I.dataTransfer.setData("text/board-id", String(O.id)),
            children: [
              /* @__PURE__ */ u.jsxs("button", { onClick: () => le(O), children: [
                /* @__PURE__ */ u.jsx(Eo, { name: O.name, src: O.avatar, size: "sm" }),
                /* @__PURE__ */ u.jsx("span", { children: O.name })
              ] }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  title: O.is_pinned ? "Убрать из избранного" : "В избранное",
                  className: O.is_pinned ? "pinned" : "",
                  onClick: () => {
                    m(async () => {
                      await p(`boards/${O.id}/pin/`, "POST", {
                        is_pinned: !O.is_pinned
                      }), await y();
                    });
                  },
                  children: /* @__PURE__ */ u.jsx(
                    Dm,
                    {
                      size: 14,
                      fill: O.is_pinned ? "currentColor" : "none"
                    }
                  )
                }
              )
            ]
          },
          O.id
        )) }),
        !F.length && /* @__PURE__ */ u.jsx("p", { className: "muted p-3 text-sm", children: "Здесь пока нет досок" })
      ] }),
      /* @__PURE__ */ u.jsxs(
        "button",
        {
          className: `nav-filter ${D ? "selected" : ""}`,
          onClick: () => V(!D),
          children: [
            /* @__PURE__ */ u.jsx(Ml, { size: 16 }),
            D ? "К активным доскам" : "Архив досок"
          ]
        }
      ),
      /* @__PURE__ */ u.jsx("p", { className: "navigator-tip", children: "Перетащите доску в группу, чтобы добавить её туда." })
    ] })
  ] });
}
const lp = /* @__PURE__ */ new Set([
  "is_empty",
  "not_empty",
  "is_today",
  "is_past",
  "is_future"
]), ip = /* @__PURE__ */ new Set([
  "completed",
  "has_attachments",
  "checklist_complete"
]), E1 = /* @__PURE__ */ new Set(["assignee_id", "creator_id", "participant_ids"]), sp = /* @__PURE__ */ new Set([
  "board_id",
  "column_id",
  "assignee_id",
  "creator_id",
  "participant_ids",
  "label_ids"
]);
let up = 0;
function Ga(l) {
  return up += 1, `${l}-${up}`;
}
function iv() {
  return {
    id: Ga("condition"),
    field: "column_id",
    operator: "eq",
    value: ""
  };
}
function Cu() {
  return { id: Ga("group"), conditions: [iv()] };
}
function sv() {
  return { id: Ga("action"), type: "move", target: "final" };
}
function rp(l) {
  return {
    id: null,
    name: "",
    description: "",
    kind: "event",
    trigger: "task_created",
    groups: [Cu()],
    actions: [sv()],
    appliesToAllBoards: !1,
    boardIds: l ? [l] : [],
    isActive: !0,
    stopOnError: !0,
    scheduleMode: "task_due_date",
    daysBefore: "0",
    scheduleTime: "09:00",
    fixedAt: ""
  };
}
function ho(l) {
  return "children" in l;
}
function cp(l) {
  if (ho(l)) return null;
  const c = l.value;
  return {
    id: Ga("condition"),
    field: l.field,
    operator: l.operator,
    value: Array.isArray(c) ? c.join(",") : String(c ?? "")
  };
}
function z1(l) {
  if (!ho(l)) {
    const o = cp(l);
    return o ? [{ id: Ga("group"), conditions: [o] }] : [Cu()];
  }
  const s = (l.operator === "or" ? l.children : [l]).map((o) => {
    const f = ho(o) && o.operator === "and" ? o.children : [o];
    return {
      id: Ga("group"),
      conditions: f.map(cp).filter(Boolean)
    };
  }).filter((o) => o.conditions.length > 0);
  return s.length ? s : [Cu()];
}
function T1(l) {
  if (!l) return "";
  const c = new Date(l);
  if (Number.isNaN(c.getTime())) return l.slice(0, 16);
  const s = c.getTimezoneOffset() * 6e4;
  return new Date(c.getTime() - s).toISOString().slice(0, 16);
}
function D1(l) {
  return {
    id: l.id,
    name: l.name,
    description: l.description || "",
    kind: l.kind,
    trigger: l.trigger,
    groups: z1(l.conditions),
    actions: l.actions.map((c) => ({
      ...c,
      id: Ga("action")
    })),
    appliesToAllBoards: l.applies_to_all_boards,
    boardIds: l.boards || [],
    isActive: l.is_active,
    stopOnError: l.stop_on_error,
    scheduleMode: l.schedule_config?.mode || "task_due_date",
    daysBefore: String(l.schedule_config?.days_before ?? 0),
    scheduleTime: l.schedule_config?.time || "09:00",
    fixedAt: T1(l.schedule_config?.at)
  };
}
function ou(l, c) {
  const s = String(l?.message || c), o = s.indexOf("{");
  if (o < 0) return s;
  try {
    const f = JSON.parse(s.slice(o)), h = f.detail || f.error || Object.values(f)[0];
    if (Array.isArray(h)) return String(h[0] || c);
    if (typeof h == "string") return h;
  } catch {
    return s;
  }
  return s;
}
function A1({
  api: l,
  isOpen: c,
  onClose: s,
  currentBoard: o,
  boards: f,
  employees: h,
  labels: p,
  onChanged: y
}) {
  const m = b.useMemo(
    () => ({
      getTaskAutomationCatalog: () => l("automations/catalog/"),
      getTaskAutomations: (j) => l("automations/"),
      createTaskAutomation: (j) => l("automations/", "POST", j),
      updateTaskAutomation: (j, A) => l(`automations/${j}/`, "PATCH", A),
      deleteTaskAutomation: (j) => l(`automations/${j}/`, "DELETE")
    }),
    [l]
  ), [v, S] = b.useState(null), [x, w] = b.useState(null), [D, V] = b.useState([]), [X, G] = b.useState("event"), [H, B] = b.useState(
    () => rp(o?.id)
  ), [Z, ne] = b.useState(!1), [le, F] = b.useState(!1), [P, O] = b.useState(!1), [I, oe] = b.useState(null), ae = b.useCallback(async () => {
    F(!0), oe(null);
    try {
      const [j, A] = await Promise.all([
        m.getTaskAutomationCatalog(),
        m.getTaskAutomations({ ordering: "position,id" })
      ]);
      w(j), V(Array.isArray(A) ? A : []);
    } catch (j) {
      oe(ou(j, "Не удалось загрузить автоматизации"));
    } finally {
      F(!1);
    }
  }, [m]);
  b.useEffect(() => {
    c && ae();
  }, [c, ae]);
  const ue = b.useMemo(
    () => D.filter((j) => j.kind === X),
    [X, D]
  ), de = b.useMemo(
    () => o?.columns?.filter((j) => !j.is_archived) || [],
    [o?.columns]
  ), xe = (j = X) => {
    const A = rp(o?.id);
    A.kind = j, A.trigger = j === "button" ? "manual" : j === "schedule" ? "date_reached" : "task_created", B(A), ne(!0), oe(null);
  }, Me = (j) => {
    G(j), B((A) => ({
      ...A,
      kind: j,
      trigger: j === "button" ? "manual" : j === "schedule" ? "date_reached" : A.trigger === "manual" || A.trigger === "date_reached" ? "task_created" : A.trigger
    }));
  }, k = (j) => {
    B(D1(j)), ne(!0), oe(null);
  }, J = (j, A, L) => {
    B((re) => ({
      ...re,
      groups: re.groups.map(
        (fe) => fe.id === j ? {
          ...fe,
          conditions: fe.conditions.map(
            (Fe) => Fe.id === A ? { ...Fe, ...L } : Fe
          )
        } : fe
      )
    }));
  }, se = (j, A) => {
    B((L) => ({
      ...L,
      groups: L.groups.map(
        (re) => re.id === j ? {
          ...re,
          conditions: re.conditions.filter(
            (fe) => fe.id !== A
          )
        } : re
      ).filter((re) => re.conditions.length > 0)
    }));
  }, pe = (j, A) => {
    B((L) => ({
      ...L,
      actions: L.actions.map(
        (re) => re.id === j ? { ...re, ...A } : re
      )
    }));
  }, ge = (j) => lp.has(j.operator) ? null : ip.has(j.field) ? j.value === "true" : j.operator === "in" || j.operator === "not_in" ? j.value.split(",").map((A) => A.trim()).filter(Boolean).map(
    (A) => sp.has(j.field) ? Number(A) : A
  ) : sp.has(j.field) && j.value !== "" ? Number(j.value) : j.value, N = () => {
    const j = H.groups.map((A) => ({
      operator: "and",
      children: A.conditions.map((L) => ({
        field: L.field,
        operator: L.operator,
        value: ge(L)
      }))
    })).filter((A) => A.children.length > 0);
    return j.length === 0 ? { operator: "and", children: [] } : j.length === 1 ? j[0] : { operator: "or", children: j };
  }, q = () => H.actions.map((j) => {
    const A = { ...j };
    return delete A.id, A.type === "add_checklist" && typeof A.text == "string" && (A.items = A.text.split(`
`).map((L) => L.trim()).filter(Boolean), delete A.text), A;
  }), ee = async () => {
    if (!(!H.name.trim() || H.actions.length === 0)) {
      if (!H.appliesToAllBoards && H.boardIds.length === 0) {
        oe(
          "Выберите хотя бы одну доску или включите применение ко всем доскам."
        );
        return;
      }
      O(!0), oe(null);
      try {
        const j = {
          name: H.name.trim(),
          description: H.description.trim(),
          kind: H.kind,
          trigger: H.kind === "button" ? "manual" : H.kind === "schedule" ? "date_reached" : H.trigger,
          conditions: N(),
          actions: q(),
          schedule_config: H.kind === "schedule" ? H.scheduleMode === "task_due_date" ? {
            mode: "task_due_date",
            days_before: Number(H.daysBefore || 0),
            time: H.scheduleTime
          } : {
            mode: "fixed_datetime",
            at: H.fixedAt ? new Date(H.fixedAt).toISOString() : ""
          } : {},
          applies_to_all_boards: H.appliesToAllBoards,
          boards: H.appliesToAllBoards ? [] : H.boardIds,
          is_active: H.isActive,
          stop_on_error: H.stopOnError,
          position: H.id ? D.find((A) => A.id === H.id)?.position || 0 : D.length
        };
        H.id ? await m.updateTaskAutomation(H.id, j) : await m.createTaskAutomation(
          j
        ), ne(!1), await ae(), y?.();
      } catch (j) {
        oe(ou(j, "Не удалось сохранить автоматизацию"));
      } finally {
        O(!1);
      }
    }
  }, ie = async (j) => {
    O(!0), oe(null);
    try {
      await m.updateTaskAutomation(j.id, {
        is_active: !j.is_active
      }), await ae();
    } catch (A) {
      oe(
        ou(
          A,
          "Не удалось изменить состояние автоматизации"
        )
      );
    } finally {
      O(!1);
    }
  }, ve = async (j) => {
    if (window.confirm(`Удалить автоматизацию «${j.name}»?`)) {
      O(!0), oe(null);
      try {
        await m.deleteTaskAutomation(j.id), await ae(), y?.();
      } catch (A) {
        oe(ou(A, "Не удалось удалить автоматизацию"));
      } finally {
        O(!1);
      }
    }
  }, E = (j, A) => {
    if (lp.has(A.operator)) return null;
    const L = {
      value: A.value,
      onChange: (re) => J(j.id, A.id, { value: re.target.value }),
      className: "app-input min-w-0 rounded-lg px-2.5 py-2 text-xs"
    };
    return ip.has(A.field) ? /* @__PURE__ */ u.jsxs("select", { ...L, children: [
      /* @__PURE__ */ u.jsx("option", { value: "true", children: "Да" }),
      /* @__PURE__ */ u.jsx("option", { value: "false", children: "Нет" })
    ] }) : A.field === "board_id" ? /* @__PURE__ */ u.jsxs("select", { ...L, children: [
      /* @__PURE__ */ u.jsx("option", { value: "", children: "Выберите доску" }),
      f.map((re) => /* @__PURE__ */ u.jsx("option", { value: re.id, children: re.name }, re.id))
    ] }) : A.field === "column_id" ? /* @__PURE__ */ u.jsxs("select", { ...L, children: [
      /* @__PURE__ */ u.jsx("option", { value: "", children: "Выберите колонку" }),
      de.map((re) => /* @__PURE__ */ u.jsx("option", { value: re.id, children: re.name }, re.id))
    ] }) : E1.has(A.field) ? /* @__PURE__ */ u.jsxs("select", { ...L, children: [
      /* @__PURE__ */ u.jsx("option", { value: "", children: "Выберите сотрудника" }),
      h.map((re) => /* @__PURE__ */ u.jsx("option", { value: re.id, children: co(re) }, re.id))
    ] }) : A.field === "label_ids" ? /* @__PURE__ */ u.jsxs("select", { ...L, children: [
      /* @__PURE__ */ u.jsx("option", { value: "", children: "Выберите метку" }),
      p.map((re) => /* @__PURE__ */ u.jsx("option", { value: re.id, children: re.name }, re.id))
    ] }) : A.field === "priority" ? /* @__PURE__ */ u.jsx("select", { ...L, children: Object.entries(x?.priorities || {}).map(([re, fe]) => /* @__PURE__ */ u.jsx("option", { value: re, children: fe }, re)) }) : /* @__PURE__ */ u.jsx(
      "input",
      {
        ...L,
        type: A.field === "due_date" ? "date" : "text",
        placeholder: A.operator === "in" || A.operator === "not_in" ? "Значения через запятую" : "Значение"
      }
    );
  }, te = (j) => {
    const A = "app-input min-w-0 rounded-lg px-2.5 py-2 text-xs";
    return j.type === "move" ? /* @__PURE__ */ u.jsxs("div", { className: "grid min-w-0 gap-2 sm:grid-cols-2", children: [
      /* @__PURE__ */ u.jsxs(
        "select",
        {
          value: j.target || "final",
          onChange: (L) => pe(j.id, {
            target: L.target.value
          }),
          className: A,
          children: [
            /* @__PURE__ */ u.jsx("option", { value: "final", children: "В финальную колонку" }),
            /* @__PURE__ */ u.jsx("option", { value: "first", children: "В первую колонку" }),
            /* @__PURE__ */ u.jsx("option", { value: "column", children: "В выбранную колонку" }),
            /* @__PURE__ */ u.jsx("option", { value: "column_name", children: "В колонку по названию" })
          ]
        }
      ),
      j.target === "column" ? /* @__PURE__ */ u.jsxs(
        "select",
        {
          value: j.column_id || "",
          onChange: (L) => pe(j.id, {
            column_id: Number(L.target.value)
          }),
          className: A,
          children: [
            /* @__PURE__ */ u.jsx("option", { value: "", children: "Выберите колонку" }),
            de.map((L) => /* @__PURE__ */ u.jsx("option", { value: L.id, children: L.name }, L.id))
          ]
        }
      ) : j.target === "column_name" ? /* @__PURE__ */ u.jsx(
        "input",
        {
          value: j.column_name || "",
          onChange: (L) => pe(j.id, { column_name: L.target.value }),
          className: A,
          placeholder: "Название колонки"
        }
      ) : null
    ] }) : ["set_assignee", "add_participant", "remove_participant"].includes(
      j.type
    ) ? /* @__PURE__ */ u.jsxs(
      "select",
      {
        value: j.user_id ?? "",
        onChange: (L) => pe(j.id, {
          user_id: L.target.value ? Number(L.target.value) : null
        }),
        className: A,
        children: [
          /* @__PURE__ */ u.jsx("option", { value: "", children: j.type === "set_assignee" ? "Снять исполнителя" : "Выберите сотрудника" }),
          h.map((L) => /* @__PURE__ */ u.jsx("option", { value: L.id, children: co(L) }, L.id))
        ]
      }
    ) : ["add_label", "remove_label"].includes(j.type) ? /* @__PURE__ */ u.jsxs(
      "select",
      {
        value: j.label_id || "",
        onChange: (L) => pe(j.id, { label_id: Number(L.target.value) }),
        className: A,
        children: [
          /* @__PURE__ */ u.jsx("option", { value: "", children: "Выберите метку" }),
          p.map((L) => /* @__PURE__ */ u.jsx("option", { value: L.id, children: L.name }, L.id))
        ]
      }
    ) : j.type === "set_priority" ? /* @__PURE__ */ u.jsx(
      "select",
      {
        value: j.priority || "normal",
        onChange: (L) => pe(j.id, {
          priority: L.target.value
        }),
        className: A,
        children: Object.entries(x?.priorities || {}).map(([L, re]) => /* @__PURE__ */ u.jsx("option", { value: L, children: re }, L))
      }
    ) : j.type === "set_due_date" ? /* @__PURE__ */ u.jsxs("div", { className: "grid gap-2 sm:grid-cols-2", children: [
      /* @__PURE__ */ u.jsxs(
        "select",
        {
          value: j.mode || "clear",
          onChange: (L) => pe(j.id, {
            mode: L.target.value
          }),
          className: A,
          children: [
            /* @__PURE__ */ u.jsx("option", { value: "clear", children: "Убрать срок" }),
            /* @__PURE__ */ u.jsx("option", { value: "fixed", children: "Установить дату" }),
            /* @__PURE__ */ u.jsx("option", { value: "relative", children: "Сместить от текущей даты" })
          ]
        }
      ),
      j.mode === "fixed" ? /* @__PURE__ */ u.jsx(
        "input",
        {
          type: "date",
          value: j.date || "",
          onChange: (L) => pe(j.id, { date: L.target.value }),
          className: A
        }
      ) : null,
      j.mode === "relative" ? /* @__PURE__ */ u.jsx(
        "input",
        {
          type: "number",
          value: j.days ?? 0,
          onChange: (L) => pe(j.id, { days: Number(L.target.value) }),
          className: A,
          "aria-label": "Смещение в днях"
        }
      ) : null
    ] }) : j.type === "add_comment" ? /* @__PURE__ */ u.jsx(
      "textarea",
      {
        value: j.text || "",
        onChange: (L) => pe(j.id, { text: L.target.value }),
        className: `${A} w-full`,
        rows: 2,
        placeholder: "Текст системного комментария"
      }
    ) : j.type === "add_checklist" ? /* @__PURE__ */ u.jsx(
      "textarea",
      {
        value: j.text || j.items?.join(`
`) || "",
        onChange: (L) => pe(j.id, { text: L.target.value }),
        className: `${A} w-full`,
        rows: 3,
        placeholder: "Один пункт на строку"
      }
    ) : /* @__PURE__ */ u.jsx("p", { className: "app-text-muted text-xs", children: "Дополнительные параметры не требуются." });
  };
  return /* @__PURE__ */ u.jsx(
    Hi,
    {
      isOpen: c,
      onClose: s,
      title: "Автоматизация задач",
      size: "xl",
      closeOnClickOutside: !0,
      children: /* @__PURE__ */ u.jsxs("div", { className: "space-y-4", children: [
        v && /* @__PURE__ */ u.jsxs("div", { className: "inset-form", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "section-heading", children: [
            /* @__PURE__ */ u.jsxs("h3", { children: [
              "Журнал: ",
              v.name
            ] }),
            /* @__PURE__ */ u.jsx("button", { onClick: () => S(null), title: "Закрыть журнал", children: /* @__PURE__ */ u.jsx(Ya, { size: 16 }) })
          ] }),
          v.runs.map((j) => /* @__PURE__ */ u.jsxs("details", { className: "resource-row block", children: [
            /* @__PURE__ */ u.jsxs("summary", { children: [
              new Date(j.started_at).toLocaleString("ru"),
              " · #",
              j.task,
              " ·",
              " ",
              {
                success: "Выполнено",
                failed: "Ошибка",
                partial: "Частично",
                skipped: "Пропущено",
                running: "Выполняется"
              }[j.status]
            ] }),
            j.error && /* @__PURE__ */ u.jsx("p", { className: "danger", children: j.error }),
            j.actions_log.map((A, L) => /* @__PURE__ */ u.jsx("p", { className: "muted", children: String(A.result || A.error || A.type) }, L))
          ] }, j.id)),
          !v.runs.length && /* @__PURE__ */ u.jsx("p", { className: "muted", children: "Запусков пока нет." })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex flex-wrap gap-1.5", children: [
            ["event", "События", Ri],
            ["schedule", "Сроки", $c],
            ["button", "Кнопки", Rl]
          ].map(([j, A, L]) => /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                G(j), Z && H.id === null && Me(j);
              },
              className: `app-pill inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${X === j ? "app-selected ring-1 ring-[var(--accent-primary)]" : ""}`,
              "aria-pressed": X === j,
              children: [
                /* @__PURE__ */ u.jsx(L, { size: 14 }),
                A,
                /* @__PURE__ */ u.jsx("span", { className: "app-badge rounded-full px-1.5 py-0.5 text-[10px]", children: D.filter((re) => re.kind === j).length })
              ]
            },
            j
          )) }),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              onClick: () => xe(),
              className: "app-action-primary inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium",
              children: [
                /* @__PURE__ */ u.jsx(Mt, { size: 15 }),
                "Создать"
              ]
            }
          )
        ] }),
        I ? /* @__PURE__ */ u.jsx("div", { className: "app-feedback-danger rounded-xl px-3 py-2 text-sm", children: I }) : null,
        le ? /* @__PURE__ */ u.jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ u.jsx(kl, { size: 24, className: "mx-auto animate-spin text-sky-500" }) }) : Z ? /* @__PURE__ */ u.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("h3", { className: "text-base font-semibold text-[var(--foreground)]", children: H.id ? "Редактирование" : "Новая автоматизация" }),
              /* @__PURE__ */ u.jsx("p", { className: "app-text-muted text-xs", children: "Правила действуют на ваших досках. Область применения задаётся отдельно." })
            ] }),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "button",
                onClick: () => ne(!1),
                className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                title: "Закрыть редактор",
                children: /* @__PURE__ */ u.jsx(Ya, { size: 15 })
              }
            )
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ u.jsx("span", { className: "app-text-muted mb-1.5 block text-xs", children: "Тип автоматизации" }),
              /* @__PURE__ */ u.jsx("div", { className: "grid grid-cols-3 gap-2 rounded-xl border border-[var(--border-subtle)] p-1", children: [
                ["event", "Событие", Ri],
                ["schedule", "Срок", $c],
                ["button", "Кнопка", Rl]
              ].map(([j, A, L]) => /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => Me(j),
                  className: `inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-2 text-sm font-medium transition ${H.kind === j ? "app-selected text-[var(--accent-primary-strong)]" : "app-action-ghost"}`,
                  "aria-pressed": H.kind === j,
                  children: [
                    /* @__PURE__ */ u.jsx(L, { size: 15 }),
                    A
                  ]
                },
                j
              )) })
            ] }),
            /* @__PURE__ */ u.jsxs("label", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ u.jsx("span", { className: "app-text-muted mb-1 block text-xs", children: "Название" }),
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  value: H.name,
                  onChange: (j) => B((A) => ({
                    ...A,
                    name: j.target.value
                  })),
                  className: "app-input w-full rounded-xl px-3 py-2 text-sm",
                  autoFocus: !0
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("label", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ u.jsx("span", { className: "app-text-muted mb-1 block text-xs", children: "Описание" }),
              /* @__PURE__ */ u.jsx(
                "textarea",
                {
                  value: H.description,
                  onChange: (j) => B((A) => ({
                    ...A,
                    description: j.target.value
                  })),
                  className: "app-input w-full rounded-xl px-3 py-2 text-sm",
                  rows: 2
                }
              )
            ] }),
            H.kind === "event" ? /* @__PURE__ */ u.jsxs("label", { children: [
              /* @__PURE__ */ u.jsx("span", { className: "app-text-muted mb-1 block text-xs", children: "Когда" }),
              /* @__PURE__ */ u.jsx(
                "select",
                {
                  value: H.trigger,
                  onChange: (j) => B((A) => ({
                    ...A,
                    trigger: j.target.value
                  })),
                  className: "app-input w-full rounded-xl px-3 py-2 text-sm",
                  children: Object.entries(x?.event_triggers || {}).map(
                    ([j, A]) => /* @__PURE__ */ u.jsx("option", { value: j, children: A }, j)
                  )
                }
              )
            ] }) : null,
            H.kind === "schedule" ? /* @__PURE__ */ u.jsxs("div", { className: "grid gap-2 sm:col-span-2 sm:grid-cols-3", children: [
              /* @__PURE__ */ u.jsxs("label", { children: [
                /* @__PURE__ */ u.jsx("span", { className: "app-text-muted mb-1 block text-xs", children: "Тип срока" }),
                /* @__PURE__ */ u.jsxs(
                  "select",
                  {
                    value: H.scheduleMode,
                    onChange: (j) => B((A) => ({
                      ...A,
                      scheduleMode: j.target.value
                    })),
                    className: "app-input w-full rounded-xl px-3 py-2 text-sm",
                    children: [
                      /* @__PURE__ */ u.jsx("option", { value: "task_due_date", children: "От срока задачи" }),
                      /* @__PURE__ */ u.jsx("option", { value: "fixed_datetime", children: "Определённая дата" })
                    ]
                  }
                )
              ] }),
              H.scheduleMode === "task_due_date" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                /* @__PURE__ */ u.jsxs("label", { children: [
                  /* @__PURE__ */ u.jsx("span", { className: "app-text-muted mb-1 block text-xs", children: "За сколько дней" }),
                  /* @__PURE__ */ u.jsx(
                    "input",
                    {
                      type: "number",
                      min: "0",
                      value: H.daysBefore,
                      onChange: (j) => B((A) => ({
                        ...A,
                        daysBefore: j.target.value
                      })),
                      className: "app-input w-full rounded-xl px-3 py-2 text-sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ u.jsxs("label", { children: [
                  /* @__PURE__ */ u.jsx("span", { className: "app-text-muted mb-1 block text-xs", children: "Время" }),
                  /* @__PURE__ */ u.jsx(
                    "input",
                    {
                      type: "time",
                      value: H.scheduleTime,
                      onChange: (j) => B((A) => ({
                        ...A,
                        scheduleTime: j.target.value
                      })),
                      className: "app-input w-full rounded-xl px-3 py-2 text-sm"
                    }
                  )
                ] })
              ] }) : /* @__PURE__ */ u.jsxs("label", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ u.jsx("span", { className: "app-text-muted mb-1 block text-xs", children: "Дата и время" }),
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "datetime-local",
                    value: H.fixedAt,
                    onChange: (j) => B((A) => ({
                      ...A,
                      fixedAt: j.target.value
                    })),
                    className: "app-input w-full rounded-xl px-3 py-2 text-sm"
                  }
                )
              ] })
            ] }) : null
          ] }),
          /* @__PURE__ */ u.jsxs("section", { className: "rounded-xl border border-[var(--border-subtle)] p-3", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "mb-3 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ u.jsxs("div", { children: [
                /* @__PURE__ */ u.jsx("h4", { className: "text-sm font-semibold", children: "Область применения" }),
                /* @__PURE__ */ u.jsx("p", { className: "app-text-muted text-xs", children: "По умолчанию используется открытая доска." })
              ] }),
              /* @__PURE__ */ u.jsxs("label", { className: "inline-flex items-center gap-2 text-xs", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: H.appliesToAllBoards,
                    onChange: (j) => B((A) => ({
                      ...A,
                      appliesToAllBoards: j.target.checked
                    })),
                    className: "accent-sky-500"
                  }
                ),
                "Все мои доски"
              ] })
            ] }),
            H.appliesToAllBoards ? null : /* @__PURE__ */ u.jsx("div", { className: "flex max-h-28 flex-wrap gap-2 overflow-y-auto", children: f.map((j) => {
              const A = H.boardIds.includes(j.id);
              return /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => B((L) => ({
                    ...L,
                    boardIds: A ? L.boardIds.filter((re) => re !== j.id) : [...L.boardIds, j.id]
                  })),
                  className: `app-pill inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ${A ? "app-selected" : ""}`,
                  children: [
                    A ? /* @__PURE__ */ u.jsx(qa, { size: 12 }) : null,
                    j.name
                  ]
                },
                j.id
              );
            }) })
          ] }),
          /* @__PURE__ */ u.jsxs("section", { className: "space-y-3 rounded-xl border border-[var(--border-subtle)] p-3", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("h4", { className: "text-sm font-semibold", children: "Если" }),
              /* @__PURE__ */ u.jsx("p", { className: "app-text-muted text-xs", children: "Условия внутри блока объединяются через И, блоки между собой через ИЛИ. Пустые условия означают запуск для любой задачи." })
            ] }),
            H.groups.map((j, A) => /* @__PURE__ */ u.jsxs("div", { className: "space-y-2", children: [
              A > 0 ? /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ u.jsx("span", { className: "h-px flex-1 bg-[var(--border-subtle)]" }),
                /* @__PURE__ */ u.jsx("span", { className: "app-badge rounded-full px-2 py-0.5 text-[10px] font-semibold", children: "ИЛИ" }),
                /* @__PURE__ */ u.jsx("span", { className: "h-px flex-1 bg-[var(--border-subtle)]" })
              ] }) : null,
              j.conditions.map((L, re) => /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: "app-surface-muted grid gap-2 rounded-xl border border-[var(--border-subtle)] p-2 sm:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)_auto] sm:items-center",
                  children: [
                    /* @__PURE__ */ u.jsx("span", { className: "app-text-muted text-[10px] font-semibold", children: re > 0 ? "И" : "ЕСЛИ" }),
                    /* @__PURE__ */ u.jsx(
                      "select",
                      {
                        value: L.field,
                        onChange: (fe) => J(j.id, L.id, {
                          field: fe.target.value,
                          value: ""
                        }),
                        className: "app-input min-w-0 rounded-lg px-2.5 py-2 text-xs",
                        children: Object.entries(x?.condition_fields || {}).map(
                          ([fe, Fe]) => /* @__PURE__ */ u.jsx("option", { value: fe, children: Fe }, fe)
                        )
                      }
                    ),
                    /* @__PURE__ */ u.jsx(
                      "select",
                      {
                        value: L.operator,
                        onChange: (fe) => J(j.id, L.id, {
                          operator: fe.target.value
                        }),
                        className: "app-input min-w-0 rounded-lg px-2.5 py-2 text-xs",
                        children: Object.entries(x?.condition_operators || {}).map(
                          ([fe, Fe]) => /* @__PURE__ */ u.jsx("option", { value: fe, children: Fe }, fe)
                        )
                      }
                    ),
                    E(j, L) || /* @__PURE__ */ u.jsx("span", {}),
                    /* @__PURE__ */ u.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => se(j.id, L.id),
                        className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg text-[var(--danger-foreground)]",
                        title: "Удалить условие",
                        children: /* @__PURE__ */ u.jsx(Rt, { size: 13 })
                      }
                    )
                  ]
                },
                L.id
              )),
              /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => B((L) => ({
                    ...L,
                    groups: L.groups.map(
                      (re) => re.id === j.id ? {
                        ...re,
                        conditions: [
                          ...re.conditions,
                          iv()
                        ]
                      } : re
                    )
                  })),
                  className: "app-action-ghost inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs",
                  children: [
                    /* @__PURE__ */ u.jsx(Mt, { size: 13 }),
                    "Условие И"
                  ]
                }
              )
            ] }, j.id)),
            /* @__PURE__ */ u.jsxs(
              "button",
              {
                type: "button",
                onClick: () => B((j) => ({
                  ...j,
                  groups: [...j.groups, Cu()]
                })),
                className: "app-action-secondary inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs",
                children: [
                  /* @__PURE__ */ u.jsx(Mt, { size: 13 }),
                  "Группа ИЛИ"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ u.jsxs("section", { className: "space-y-3 rounded-xl border border-[var(--border-subtle)] p-3", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("h4", { className: "text-sm font-semibold", children: "То" }),
              /* @__PURE__ */ u.jsx("p", { className: "app-text-muted text-xs", children: "Действия выполняются сверху вниз." })
            ] }),
            H.actions.map((j, A) => /* @__PURE__ */ u.jsx(
              "div",
              {
                className: "app-surface-muted rounded-xl border border-[var(--border-subtle)] p-3",
                children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ u.jsx(
                    Fy,
                    {
                      size: 15,
                      className: "app-text-muted mt-2 shrink-0"
                    }
                  ),
                  /* @__PURE__ */ u.jsx("span", { className: "app-badge mt-1.5 rounded-full px-2 py-0.5 text-[10px]", children: A + 1 }),
                  /* @__PURE__ */ u.jsxs("div", { className: "min-w-0 flex-1 space-y-2", children: [
                    /* @__PURE__ */ u.jsx(
                      "select",
                      {
                        value: j.type,
                        onChange: (L) => pe(j.id, { type: L.target.value }),
                        className: "app-input w-full rounded-lg px-2.5 py-2 text-xs",
                        children: Object.entries(x?.action_types || {}).map(
                          ([L, re]) => /* @__PURE__ */ u.jsx("option", { value: L, children: re }, L)
                        )
                      }
                    ),
                    te(j)
                  ] }),
                  /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => B((L) => ({
                        ...L,
                        actions: L.actions.filter(
                          (re) => re.id !== j.id
                        )
                      })),
                      className: "app-icon-button flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[var(--danger-foreground)]",
                      title: "Удалить действие",
                      children: /* @__PURE__ */ u.jsx(Rt, { size: 13 })
                    }
                  )
                ] })
              },
              j.id
            )),
            /* @__PURE__ */ u.jsxs(
              "button",
              {
                type: "button",
                onClick: () => B((j) => ({
                  ...j,
                  actions: [...j.actions, sv()]
                })),
                className: "app-action-secondary inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs",
                children: [
                  /* @__PURE__ */ u.jsx(Mt, { size: 13 }),
                  "Добавить действие"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-3", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ u.jsxs("label", { className: "inline-flex items-center gap-2 text-xs", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: H.isActive,
                    onChange: (j) => B((A) => ({
                      ...A,
                      isActive: j.target.checked
                    })),
                    className: "accent-sky-500"
                  }
                ),
                "Активна"
              ] }),
              /* @__PURE__ */ u.jsxs("label", { className: "inline-flex items-center gap-2 text-xs", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: H.stopOnError,
                    onChange: (j) => B((A) => ({
                      ...A,
                      stopOnError: j.target.checked
                    })),
                    className: "accent-sky-500"
                  }
                ),
                "Остановить при ошибке"
              ] })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => ne(!1),
                  className: "app-action-secondary rounded-lg px-3 py-2 text-sm",
                  children: "Отмена"
                }
              ),
              /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    ee();
                  },
                  disabled: P || !H.name.trim() || H.actions.length === 0,
                  className: "app-action-primary inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium disabled:opacity-50",
                  children: [
                    P ? /* @__PURE__ */ u.jsx(kl, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ u.jsx(qa, { size: 14 }),
                    "Сохранить"
                  ]
                }
              )
            ] })
          ] })
        ] }) : ue.length ? /* @__PURE__ */ u.jsx("div", { className: "space-y-2", children: ue.map((j) => /* @__PURE__ */ u.jsxs(
          "article",
          {
            className: "app-surface-muted flex items-center gap-3 rounded-xl border border-[var(--border-subtle)] p-3",
            children: [
              /* @__PURE__ */ u.jsx(
                "span",
                {
                  className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${j.is_active ? "app-selected" : "app-badge"}`,
                  children: j.kind === "schedule" ? /* @__PURE__ */ u.jsx($c, { size: 16 }) : j.kind === "button" ? /* @__PURE__ */ u.jsx(Rl, { size: 16 }) : /* @__PURE__ */ u.jsx(Ri, { size: 16 })
                }
              ),
              /* @__PURE__ */ u.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ u.jsx("h3", { className: "truncate text-sm font-semibold text-[var(--foreground)]", children: j.name }),
                /* @__PURE__ */ u.jsxs("p", { className: "app-text-muted mt-0.5 truncate text-xs", children: [
                  j.applies_to_all_boards ? "Все мои доски" : `${j.boards.length} досок`,
                  " ",
                  "· ",
                  j.actions.length,
                  " действий",
                  j.last_run_at ? ` · запускалась ${new Date(j.last_run_at).toLocaleString("ru-RU")}` : ""
                ] })
              ] }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    ie(j);
                  },
                  disabled: P,
                  className: `app-icon-button flex h-8 w-8 items-center justify-center rounded-lg ${j.is_active ? "text-emerald-500" : "app-text-muted"}`,
                  title: j.is_active ? "Отключить" : "Включить",
                  children: /* @__PURE__ */ u.jsx(x0, { size: 14 })
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                  title: "Журнал запусков",
                  onClick: () => {
                    l(
                      `automations/${j.id}/runs/`
                    ).then(
                      (A) => S({ name: j.name, runs: A })
                    ).catch((A) => oe(String(A)));
                  },
                  children: /* @__PURE__ */ u.jsx(xp, { size: 14 })
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => k(j),
                  className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg",
                  title: "Редактировать",
                  children: /* @__PURE__ */ u.jsx(Za, { size: 14 })
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    ve(j);
                  },
                  disabled: P,
                  className: "app-icon-button flex h-8 w-8 items-center justify-center rounded-lg text-[var(--danger-foreground)]",
                  title: "Удалить",
                  children: /* @__PURE__ */ u.jsx(Rt, { size: 14 })
                }
              )
            ]
          },
          j.id
        )) }) : /* @__PURE__ */ u.jsxs("div", { className: "app-surface-muted rounded-xl border border-dashed border-[var(--border-subtle)] px-4 py-10 text-center", children: [
          /* @__PURE__ */ u.jsx(Ri, { size: 24, className: "app-text-muted mx-auto mb-2" }),
          /* @__PURE__ */ u.jsx("p", { className: "text-sm font-medium", children: "Автоматизаций пока нет" }),
          /* @__PURE__ */ u.jsx("p", { className: "app-text-muted mt-1 text-xs", children: "Создайте правило для событий, сроков или ручную кнопку." })
        ] })
      ] })
    }
  );
}
function M1(l, c, s, o, f = /* @__PURE__ */ new Date()) {
  const h = `${f.getFullYear()}-${String(f.getMonth() + 1).padStart(2, "0")}-${String(f.getDate()).padStart(2, "0")}`;
  return l.filter(
    (p) => !p.is_archived && `${p.id} ${p.title} ${p.description} ${p.labels.map((y) => y.name).join(" ")}`.toLocaleLowerCase().includes(c.toLocaleLowerCase()) && (!s.priority || p.priority === s.priority) && (!s.assignee || (s.assignee === "none" ? !p.assignee : p.assignee?.id === (s.assignee === "me" ? o : Number(s.assignee)))) && (!s.label || p.labels.some((y) => y.id === Number(s.label))) && (!s.status || (s.status === "done" ? !!p.completed_at : !p.completed_at)) && (!s.due || (s.due === "none" ? !p.due_date : s.due === "today" ? p.due_date === h : !!p.due_date && p.due_date < h && !p.completed_at))
  );
}
function R1({ apiBase: l, csrfToken: c }) {
  const [s, o] = b.useState([]), [f, h] = b.useState([]), [p, y] = b.useState(null), [m, v] = b.useState(null), [S, x] = b.useState(""), [w, D] = b.useState(!1), [V, X] = b.useState(null), [G, H] = b.useState(), [B, Z] = b.useState(null), [ne, le] = b.useState(!1), [F, P] = b.useState(""), [O, I] = b.useState("board"), [oe, ae] = b.useState(""), [ue, de] = b.useState({
    priority: "",
    assignee: "",
    label: "",
    due: "",
    status: ""
  }), xe = b.useRef(p);
  xe.current = p;
  const Me = b.useRef(m);
  Me.current = m;
  const k = b.useCallback(
    async (E, te = "GET", j) => {
      const A = j instanceof FormData, L = await fetch(l.replace(/\/?$/, "/") + E, {
        method: te,
        credentials: "same-origin",
        headers: {
          "X-CSRFToken": c,
          ...A ? {} : { "Content-Type": "application/json" }
        },
        body: j === void 0 ? void 0 : A ? j : JSON.stringify(j)
      });
      if (!L.ok) {
        let re = "";
        try {
          const fe = await L.json();
          re = typeof fe.detail == "string" ? fe.detail : JSON.stringify(fe);
        } catch {
          re = L.statusText;
        }
        throw new Error(
          L.status === 403 ? "Нет доступа. Проверьте вход в аккаунт и права на доску." : re || "Не удалось сохранить изменения"
        );
      }
      return L.status === 204 ? void 0 : L.json();
    },
    [l, c]
  ), J = b.useCallback(
    async (E = xe.current) => {
      const [te, j] = await Promise.all([
        k("boards/"),
        k("groups/")
      ]);
      if (o(te), h(j), E && te.some((A) => A.id === E)) {
        const A = await k(`boards/${E}/state/`);
        xe.current === E && v(A);
      } else {
        const A = te.find((L) => !L.is_archived)?.id ?? te[0]?.id ?? null;
        y(A), v(null);
      }
      ae(
        (/* @__PURE__ */ new Date()).toLocaleTimeString("ru", {
          hour: "2-digit",
          minute: "2-digit"
        })
      );
    },
    [k]
  ), se = b.useCallback(async (E) => {
    x(""), D(!0);
    try {
      await E();
    } catch (te) {
      x(te instanceof Error ? te.message : String(te));
    } finally {
      D(!1);
    }
  }, []);
  b.useEffect(() => {
    se(() => J());
  }, [se, J]), b.useEffect(() => {
    let E = !0;
    return p && k(`boards/${p}/state/`).then((te) => {
      E && v(te);
    }).catch((te) => {
      E && x(String(te));
    }), () => {
      E = !1;
    };
  }, [p, k]), b.useEffect(() => {
    if (w || V || B) return;
    const E = setInterval(() => {
      document.visibilityState === "visible" && J().catch(() => {
      });
    }, 2e4);
    return () => clearInterval(E);
  }, [J, w, V, B]);
  function pe(E) {
    v(null), y(E.id), X(null), I("board"), P(""), de({ priority: "", assignee: "", label: "", due: "", status: "" });
  }
  function ge(E, te) {
    X(E), H(te);
  }
  const N = async (E, te, j) => {
    await k(E, te, j), await J();
  };
  async function q(E) {
    E.preventDefault();
    const te = Object.fromEntries(new FormData(E.currentTarget)), j = B;
    await se(async () => {
      if (["column", "edit-column"].includes(j.kind)) {
        const A = {
          name: te.name,
          color: te.color,
          is_done: te.is_done === "on"
        };
        await N(
          j.kind === "column" ? "columns/" : `columns/${j.data?.id}/`,
          j.kind === "column" ? "POST" : "PATCH",
          j.kind === "column" ? {
            ...A,
            board: p,
            parent: j.data?.parent ?? null,
            position: (m?.columns.length || 0) * 1e3
          } : A
        );
      }
      if (["row", "edit-row"].includes(j.kind) && await N(
        j.kind === "row" ? "rows/" : `rows/${j.data?.id}/`,
        j.kind === "row" ? "POST" : "PATCH",
        {
          name: te.name,
          color: te.color,
          ...j.kind === "row" ? {
            column: j.data?.column,
            position: (m?.rows.length || 0) * 1e3
          } : {}
        }
      ), j.kind === "delete-row" && await N(`rows/${j.data?.id}/`, "DELETE"), j.kind === "delete-column" && await N(`columns/${j.data?.id}/`, "DELETE"), j.kind === "delete-task" && (await N(`tasks/${j.data?.id}/`, "DELETE"), X(null)), j.kind === "group") {
        const A = {
          name: te.name,
          color: te.color,
          boards: new FormData(E.currentTarget).getAll("boards").map(Number)
        };
        await N(
          j.data?.id ? `groups/${j.data.id}/` : "groups/",
          j.data?.id ? "PATCH" : "POST",
          A
        );
      }
      if (j.kind === "task") {
        const A = await k("tasks/", "POST", {
          board: p,
          column: Number(te.column),
          row: null,
          title: te.name,
          description: te.description,
          priority: te.priority,
          due_date: te.due_date || null,
          assignee_id: te.assignee ? Number(te.assignee) : null,
          position: (m?.tasks.length || 0) * 1e3
        });
        await J(), ge(A);
      }
      Z(null);
    });
  }
  const ee = m ? M1(m.tasks, F, ue, m.me.id) : [], ie = m?.tasks.filter((E) => E.is_archived) || [], ve = {
    column: "Новая колонка",
    "edit-column": "Настройки колонки",
    row: "Новая дорожка",
    "edit-row": "Настройки дорожки",
    "delete-row": "Удалить дорожку?",
    "delete-column": "Удалить колонку?",
    "delete-task": "Удалить карточку?",
    task: "Новая карточка",
    group: B?.data?.id ? "Настройки группы" : "Новая группа"
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "nb-shell", children: [
    /* @__PURE__ */ u.jsx(
      _1,
      {
        boards: s,
        groups: f,
        selected: p,
        select: pe,
        create: () => Z({ kind: "board" }),
        editGroup: (E) => Z({ kind: "group", data: E ? { ...E } : void 0 }),
        api: k,
        reload: J,
        run: se
      }
    ),
    /* @__PURE__ */ u.jsxs("main", { className: "nb-main", children: [
      /* @__PURE__ */ u.jsxs("header", { children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsxs("span", { className: "eyebrow", children: [
            "МОИ ЗАДАЧИ /",
            " ",
            m?.board.access_scope === "private" ? "ЛИЧНАЯ ДОСКА" : "ОБЩАЯ ДОСКА"
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
            m && /* @__PURE__ */ u.jsx(
              Eo,
              {
                name: m.board.name,
                src: m.board.avatar,
                size: "lg"
              }
            ),
            /* @__PURE__ */ u.jsx("h1", { children: m?.board.name || "Ваши доски" }),
            m?.board.is_archived && /* @__PURE__ */ u.jsx("span", { className: "task-status", children: "Архив" })
          ] }),
          /* @__PURE__ */ u.jsx("p", { children: m?.board.description || "Всё необходимое для совместной работы над задачами." })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "header-actions", children: [
          m?.can_manage && /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: "secondary",
              title: "Настройки доски",
              onClick: () => Z({ kind: "edit-board" }),
              children: [
                /* @__PURE__ */ u.jsx(z0, { size: 16 }),
                /* @__PURE__ */ u.jsx("span", { children: "Настройки" })
              ]
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "secondary",
              title: "Обновить доску",
              disabled: w,
              onClick: () => {
                se(() => J());
              },
              children: /* @__PURE__ */ u.jsx(j0, { size: 16, className: w ? "animate-spin" : "" })
            }
          ),
          m && !m.board.is_archived && /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: "primary",
              disabled: !fo(m.columns).length,
              onClick: () => Z({ kind: "task" }),
              children: [
                /* @__PURE__ */ u.jsx(Mt, { size: 16 }),
                "Карточка"
              ]
            }
          )
        ] })
      ] }),
      S && /* @__PURE__ */ u.jsxs("div", { role: "alert", className: "error global-error", children: [
        S,
        /* @__PURE__ */ u.jsx("button", { onClick: () => x(""), "aria-label": "Закрыть ошибку", children: /* @__PURE__ */ u.jsx(Ya, { size: 16 }) })
      ] }),
      m ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsxs("div", { className: "toolbar", children: [
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: `view-tab ${O === "board" ? "selected" : ""}`,
              onClick: () => I("board"),
              children: [
                /* @__PURE__ */ u.jsx(pu, { size: 16 }),
                "Доска",
                /* @__PURE__ */ u.jsx("span", { children: m.tasks.filter((E) => !E.is_archived).length })
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: `view-tab ${O === "archive" ? "selected" : ""}`,
              onClick: () => I("archive"),
              children: [
                /* @__PURE__ */ u.jsx(Ml, { size: 16 }),
                "Архив",
                /* @__PURE__ */ u.jsx("span", { children: ie.length })
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs("label", { className: "search", children: [
            /* @__PURE__ */ u.jsx(Sp, { size: 16 }),
            /* @__PURE__ */ u.jsx(
              "input",
              {
                placeholder: "Найти карточку…",
                value: F,
                onChange: (E) => P(E.target.value)
              }
            ),
            F && /* @__PURE__ */ u.jsx("button", { title: "Очистить поиск", onClick: () => P(""), children: /* @__PURE__ */ u.jsx(Ya, { size: 13 }) })
          ] }),
          /* @__PURE__ */ u.jsx("span", { className: "grow" }),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: `secondary ${ne ? "selected" : ""}`,
              onClick: () => le(!ne),
              children: [
                /* @__PURE__ */ u.jsx(D0, { size: 15 }),
                "Фильтры",
                Object.values(ue).filter(Boolean).length ? ` · ${Object.values(ue).filter(Boolean).length}` : ""
              ]
            }
          ),
          m.can_manage && !m.board.is_archived && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsxs(
              "button",
              {
                className: "secondary",
                onClick: () => Z({ kind: "labels" }),
                children: [
                  /* @__PURE__ */ u.jsx(R0, { size: 15 }),
                  "Метки"
                ]
              }
            ),
            /* @__PURE__ */ u.jsxs(
              "button",
              {
                className: "secondary",
                onClick: () => Z({ kind: "structure" }),
                children: [
                  /* @__PURE__ */ u.jsx(go, { size: 15 }),
                  "Структура"
                ]
              }
            ),
            /* @__PURE__ */ u.jsxs(
              "button",
              {
                className: "secondary",
                onClick: () => Z({ kind: "automations" }),
                children: [
                  /* @__PURE__ */ u.jsx(Ri, { size: 15 }),
                  "Автоматизации"
                ]
              }
            )
          ] })
        ] }),
        ne && /* @__PURE__ */ u.jsxs("div", { className: "filter-bar", children: [
          /* @__PURE__ */ u.jsxs(
            "select",
            {
              "aria-label": "Фильтр по исполнителю",
              value: ue.assignee,
              onChange: (E) => de({ ...ue, assignee: E.target.value }),
              children: [
                /* @__PURE__ */ u.jsx("option", { value: "", children: "Все исполнители" }),
                /* @__PURE__ */ u.jsx("option", { value: "me", children: "Мои задачи" }),
                /* @__PURE__ */ u.jsx("option", { value: "none", children: "Без исполнителя" }),
                m.users.map((E) => /* @__PURE__ */ u.jsx("option", { value: E.id, children: E.name }, E.id))
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs(
            "select",
            {
              "aria-label": "Фильтр по приоритету",
              value: ue.priority,
              onChange: (E) => de({ ...ue, priority: E.target.value }),
              children: [
                /* @__PURE__ */ u.jsx("option", { value: "", children: "Любой приоритет" }),
                qi.map((E) => /* @__PURE__ */ u.jsx("option", { value: E.value, children: E.label }, E.value))
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs(
            "select",
            {
              "aria-label": "Фильтр по метке",
              value: ue.label,
              onChange: (E) => de({ ...ue, label: E.target.value }),
              children: [
                /* @__PURE__ */ u.jsx("option", { value: "", children: "Все метки" }),
                m.labels.map((E) => /* @__PURE__ */ u.jsx("option", { value: E.id, children: E.name }, E.id))
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs(
            "select",
            {
              "aria-label": "Фильтр по сроку",
              value: ue.due,
              onChange: (E) => de({ ...ue, due: E.target.value }),
              children: [
                /* @__PURE__ */ u.jsx("option", { value: "", children: "Любой срок" }),
                /* @__PURE__ */ u.jsx("option", { value: "overdue", children: "Просрочены" }),
                /* @__PURE__ */ u.jsx("option", { value: "today", children: "Сегодня" }),
                /* @__PURE__ */ u.jsx("option", { value: "none", children: "Без срока" })
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs(
            "select",
            {
              "aria-label": "Фильтр по статусу",
              value: ue.status,
              onChange: (E) => de({ ...ue, status: E.target.value }),
              children: [
                /* @__PURE__ */ u.jsx("option", { value: "", children: "Все статусы" }),
                /* @__PURE__ */ u.jsx("option", { value: "open", children: "В работе" }),
                /* @__PURE__ */ u.jsx("option", { value: "done", children: "Завершены" })
              ]
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "text-action",
              onClick: () => de({
                priority: "",
                assignee: "",
                label: "",
                due: "",
                status: ""
              }),
              children: "Сбросить"
            }
          )
        ] }),
        m.board.is_archived ? /* @__PURE__ */ u.jsxs("div", { className: "empty", children: [
          /* @__PURE__ */ u.jsx(Ml, { size: 38 }),
          /* @__PURE__ */ u.jsx("h2", { children: "Доска в архиве" }),
          /* @__PURE__ */ u.jsx("p", { children: "Карточки и файлы сохранены. Восстановите доску, чтобы продолжить работу." }),
          m.can_manage && /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: "primary",
              onClick: () => {
                se(
                  () => N(`boards/${p}/`, "PATCH", {
                    is_archived: !1
                  })
                );
              },
              children: [
                /* @__PURE__ */ u.jsx(jp, { size: 15 }),
                "Восстановить доску"
              ]
            }
          )
        ] }) : O === "archive" ? /* @__PURE__ */ u.jsxs("div", { className: "archive-list", children: [
          ie.filter(
            (E) => (E.title + " " + E.description).toLowerCase().includes(F.toLowerCase())
          ).map((E) => /* @__PURE__ */ u.jsxs("div", { className: "resource-row", children: [
            /* @__PURE__ */ u.jsxs("button", { className: "grow", onClick: () => ge(E), children: [
              "#",
              E.id,
              " · ",
              E.title
            ] }),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "secondary",
                onClick: () => {
                  se(
                    () => N(`tasks/${E.id}/`, "PATCH", {
                      is_archived: !1
                    })
                  );
                },
                children: "Восстановить"
              }
            )
          ] }, E.id)),
          !ie.length && /* @__PURE__ */ u.jsxs("div", { className: "empty", children: [
            /* @__PURE__ */ u.jsx(Ml, { size: 32 }),
            /* @__PURE__ */ u.jsx("h2", { children: "Архив пуст" }),
            /* @__PURE__ */ u.jsx("p", { children: "Убирайте сюда карточки, которые пока не нужны на доске." })
          ] })
        ] }) : /* @__PURE__ */ u.jsx(
          Jb,
          {
            state: { ...m, tasks: ee },
            query: "",
            busy: w,
            api: k,
            run: se,
            reload: J,
            open: ge,
            dialog: Z
          }
        ),
        /* @__PURE__ */ u.jsxs("footer", { children: [
          /* @__PURE__ */ u.jsxs("span", { children: [
            ee.length,
            " карточек ·",
            " ",
            ee.filter((E) => E.completed_at).length,
            " завершено"
          ] }),
          /* @__PURE__ */ u.jsxs("span", { children: [
            "Обновлено ",
            oe,
            " · Синхронизация каждые 20 секунд"
          ] })
        ] })
      ] }) : /* @__PURE__ */ u.jsxs("div", { className: "empty", children: [
        /* @__PURE__ */ u.jsx(pu, { size: 42 }),
        /* @__PURE__ */ u.jsx("h2", { children: p ? "Загружаем доску…" : "Место для ваших идей" }),
        !p && /* @__PURE__ */ u.jsx(
          "button",
          {
            className: "primary",
            onClick: () => Z({ kind: "board" }),
            children: "Создать первую доску"
          }
        )
      ] })
    ] }),
    B && ["board", "edit-board"].includes(B.kind) && /* @__PURE__ */ u.jsx(
      C1,
      {
        board: B.kind === "edit-board" ? m?.board : void 0,
        api: k,
        run: se,
        busy: w,
        saved: async (E) => {
          y(E.id), xe.current = E.id, await J(E.id);
        },
        close: () => Z(null)
      }
    ),
    B?.kind === "automations" && m && /* @__PURE__ */ u.jsx(
      A1,
      {
        isOpen: !0,
        onClose: () => Z(null),
        api: k,
        currentBoard: { ...m.board, columns: m.columns },
        boards: s.filter((E) => E.can_manage && !E.is_archived),
        employees: m.users,
        labels: m.labels,
        onChanged: () => {
          J();
        }
      }
    ),
    B?.kind === "labels" && m && /* @__PURE__ */ u.jsxs(Hi, { title: "Метки доски", onClose: () => Z(null), children: [
      /* @__PURE__ */ u.jsx("p", { className: "muted section-note", children: "Метки доступны только на этой доске." }),
      m.labels.map((E) => /* @__PURE__ */ u.jsxs(
        "form",
        {
          className: "inline-add",
          onSubmit: (te) => {
            te.preventDefault();
            const j = Object.fromEntries(new FormData(te.currentTarget));
            se(() => N(`labels/${E.id}/`, "PATCH", j));
          },
          children: [
            /* @__PURE__ */ u.jsx(
              "input",
              {
                name: "color",
                type: "color",
                defaultValue: E.color,
                "aria-label": `Цвет ${E.name}`
              }
            ),
            /* @__PURE__ */ u.jsx(
              "input",
              {
                name: "name",
                defaultValue: E.name,
                required: !0,
                maxLength: 80,
                "aria-label": "Название метки"
              }
            ),
            /* @__PURE__ */ u.jsx("button", { className: "secondary", disabled: w, children: "Сохранить" }),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "button",
                title: "Удалить метку",
                onClick: () => {
                  se(() => N(`labels/${E.id}/`, "DELETE"));
                },
                children: /* @__PURE__ */ u.jsx(Rt, { size: 15 })
              }
            )
          ]
        },
        E.id
      )),
      /* @__PURE__ */ u.jsxs(
        "form",
        {
          className: "inline-add",
          onSubmit: (E) => {
            E.preventDefault();
            const te = E.currentTarget, j = Object.fromEntries(new FormData(te));
            se(async () => {
              await N("labels/", "POST", { ...j, board: p }), te.reset();
            });
          },
          children: [
            /* @__PURE__ */ u.jsx(
              "input",
              {
                type: "color",
                name: "color",
                defaultValue: "#6366f1",
                "aria-label": "Цвет новой метки"
              }
            ),
            /* @__PURE__ */ u.jsx(
              "input",
              {
                name: "name",
                placeholder: "Новая метка",
                required: !0,
                maxLength: 80
              }
            ),
            /* @__PURE__ */ u.jsx("button", { className: "primary", disabled: w, children: "Добавить" })
          ]
        }
      )
    ] }),
    B?.kind === "structure" && m && /* @__PURE__ */ u.jsxs(
      Hi,
      {
        title: "Колонки и дорожки",
        onClose: () => Z(null),
        size: "xl",
        children: [
          /* @__PURE__ */ u.jsx("p", { className: "muted section-note", children: "Колонки можно перемещать за заголовок на доске. Здесь доступны настройки и порядок дорожек." }),
          m.columns.filter((E) => !E.parent).map((E) => /* @__PURE__ */ u.jsxs("div", { className: "structure-group", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "section-heading", children: [
              /* @__PURE__ */ u.jsxs("h3", { children: [
                /* @__PURE__ */ u.jsx("span", { className: "dot", style: { background: E.color } }),
                E.name,
                E.is_done ? " · Финальная" : ""
              ] }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "secondary",
                  onClick: () => Z({ kind: "edit-column", data: { ...E } }),
                  children: "Настройки"
                }
              )
            ] }),
            m.columns.filter((te) => te.parent === E.id).map((te) => /* @__PURE__ */ u.jsxs("div", { className: "resource-row", children: [
              /* @__PURE__ */ u.jsxs("span", { className: "grow", children: [
                "↳ ",
                te.name
              ] }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  onClick: () => Z({ kind: "edit-column", data: { ...te } }),
                  children: "Изменить"
                }
              )
            ] }, te.id)),
            m.rows.filter((te) => te.column === E.id).map((te, j, A) => /* @__PURE__ */ u.jsxs("div", { className: "resource-row", children: [
              /* @__PURE__ */ u.jsxs("span", { className: "grow", children: [
                "Дорожка: ",
                te.name
              ] }),
              [-1, 1].map((L) => /* @__PURE__ */ u.jsx(
                "button",
                {
                  title: L < 0 ? "Дорожка выше" : "Дорожка ниже",
                  disabled: !A[j + L] || w,
                  onClick: () => {
                    se(async () => {
                      const re = [...A];
                      [re[j], re[j + L]] = [
                        re[j + L],
                        re[j]
                      ], await N(
                        `boards/${p}/reorder-rows/`,
                        "POST",
                        { column: E.id, ids: re.map((fe) => fe.id) }
                      );
                    });
                  },
                  children: L < 0 ? /* @__PURE__ */ u.jsx(mp, { size: 15 }) : /* @__PURE__ */ u.jsx(hp, { size: 15 })
                },
                L
              )),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  onClick: () => Z({ kind: "edit-row", data: { ...te } }),
                  children: "Изменить"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  title: "Удалить дорожку",
                  onClick: () => Z({ kind: "delete-row", data: { id: te.id } }),
                  children: /* @__PURE__ */ u.jsx(Rt, { size: 15 })
                }
              )
            ] }, te.id)),
            /* @__PURE__ */ u.jsxs("div", { className: "flex gap-2 mt-3", children: [
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "text-action",
                  onClick: () => Z({ kind: "column", data: { parent: E.id } }),
                  children: "+ Подколонка"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "text-action",
                  onClick: () => Z({ kind: "row", data: { column: E.id } }),
                  children: "+ Дорожка"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "text-action danger",
                  onClick: () => Z({ kind: "delete-column", data: { id: E.id } }),
                  children: "Удалить колонку"
                }
              )
            ] })
          ] }, E.id)),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: "primary",
              onClick: () => Z({ kind: "column" }),
              children: [
                /* @__PURE__ */ u.jsx(Mt, { size: 16 }),
                "Колонка"
              ]
            }
          )
        ]
      }
    ),
    B && ve[B.kind] && /* @__PURE__ */ u.jsx(Hi, { title: ve[B.kind], onClose: () => Z(null), children: /* @__PURE__ */ u.jsxs("form", { className: "form", onSubmit: q, children: [
      B.kind.startsWith("delete") ? /* @__PURE__ */ u.jsx("p", { children: B.kind === "delete-row" ? "Карточки останутся в колонке без дорожки." : B.kind === "delete-column" ? "Колонку с карточками удалить нельзя. Сначала переместите их." : "Карточка, файлы и история будут удалены без возможности восстановления." }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsxs("label", { children: [
          "Название",
          /* @__PURE__ */ u.jsx(
            "input",
            {
              name: "name",
              required: !0,
              autoFocus: !0,
              maxLength: B.kind === "task" ? 255 : 120,
              defaultValue: String(B.data?.name || "")
            }
          )
        ] }),
        B.kind !== "task" && /* @__PURE__ */ u.jsxs("label", { children: [
          "Цвет",
          /* @__PURE__ */ u.jsx(
            "input",
            {
              name: "color",
              type: "color",
              defaultValue: String(B.data?.color || "#6366f1")
            }
          )
        ] }),
        B.kind.includes("column") && /* @__PURE__ */ u.jsxs("label", { className: "choice-row", children: [
          /* @__PURE__ */ u.jsx(
            "input",
            {
              name: "is_done",
              type: "checkbox",
              defaultChecked: !!B.data?.is_done
            }
          ),
          "Финальная колонка: задачи завершены"
        ] }),
        B.kind === "group" && /* @__PURE__ */ u.jsxs("fieldset", { children: [
          /* @__PURE__ */ u.jsx("legend", { children: "Доски в группе" }),
          s.filter((E) => !E.is_archived).map((E) => /* @__PURE__ */ u.jsxs("label", { className: "choice-row", children: [
            /* @__PURE__ */ u.jsx(
              "input",
              {
                name: "boards",
                type: "checkbox",
                value: E.id,
                defaultChecked: (B.data?.boards || []).includes(E.id)
              }
            ),
            E.name
          ] }, E.id))
        ] }),
        B.kind === "task" && m && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsxs("label", { children: [
            "Описание",
            /* @__PURE__ */ u.jsx("textarea", { name: "description", rows: 3 })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "form-grid", children: [
            /* @__PURE__ */ u.jsxs("label", { children: [
              "Колонка",
              /* @__PURE__ */ u.jsx(
                "select",
                {
                  name: "column",
                  defaultValue: B.data?.column,
                  children: fo(m.columns).map((E) => /* @__PURE__ */ u.jsx("option", { value: E.id, children: lv(E, m.columns) }, E.id))
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("label", { children: [
              "Приоритет",
              /* @__PURE__ */ u.jsx("select", { name: "priority", defaultValue: "medium", children: qi.map((E) => /* @__PURE__ */ u.jsx("option", { value: E.value, children: E.label }, E.value)) })
            ] }),
            /* @__PURE__ */ u.jsxs("label", { children: [
              "Срок",
              /* @__PURE__ */ u.jsx("input", { name: "due_date", type: "date" })
            ] }),
            /* @__PURE__ */ u.jsxs("label", { children: [
              "Исполнитель",
              /* @__PURE__ */ u.jsxs("select", { name: "assignee", children: [
                /* @__PURE__ */ u.jsx("option", { value: "", children: "Не назначен" }),
                m.users.map((E) => /* @__PURE__ */ u.jsx("option", { value: E.id, children: E.name }, E.id))
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex justify-end gap-2", children: [
        B.kind === "group" && !!B.data?.id && /* @__PURE__ */ u.jsx(
          "button",
          {
            type: "button",
            className: "danger",
            onClick: () => {
              se(async () => {
                await N(`groups/${B.data?.id}/`, "DELETE"), Z(null);
              });
            },
            children: "Удалить группу"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "button",
          {
            type: "button",
            className: "secondary",
            onClick: () => Z(null),
            children: "Отмена"
          }
        ),
        /* @__PURE__ */ u.jsx("button", { className: "primary", disabled: w, children: B.kind.startsWith("delete") ? "Удалить" : "Сохранить" })
      ] })
    ] }) }),
    V && m && !B && /* @__PURE__ */ u.jsx(
      w1,
      {
        task: m.tasks.find((E) => E.id === V.id) || V,
        state: m,
        api: k,
        run: se,
        reload: J,
        busy: w,
        close: () => X(null),
        remove: () => Z({ kind: "delete-task", data: { id: V.id } }),
        open: ge,
        initialTab: G
      },
      V.id
    )
  ] });
}
function O1(l, c) {
  const s = _y.createRoot(l);
  return s.render(/* @__PURE__ */ u.jsx(R1, { ...c })), () => s.unmount();
}
const du = document.getElementById("nadein-board");
du && O1(du, {
  apiBase: du.dataset.apiBase || "/board/api/",
  csrfToken: du.dataset.csrfToken || ""
});
export {
  R1 as NadeinBoard,
  O1 as mountBoard
};
