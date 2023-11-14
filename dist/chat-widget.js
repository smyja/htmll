import $, { createContext as tr, useContext as nr, useLayoutEffect as zi, useEffect as $a, useState as Be, useId as Ui, forwardRef as Ie, useRef as Wi, Children as Sa, cloneElement as ki, createElement as xn } from "react";
import { createPortal as qi } from "react-dom";
function Vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ft = { exports: {} }, He = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tn;
function Hi() {
  if (Tn)
    return He;
  Tn = 1;
  var e = $, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, f, u) {
    var l, p = {}, v = null, b = null;
    u !== void 0 && (v = "" + u), f.key !== void 0 && (v = "" + f.key), f.ref !== void 0 && (b = f.ref);
    for (l in f)
      n.call(f, l) && !a.hasOwnProperty(l) && (p[l] = f[l]);
    if (c && c.defaultProps)
      for (l in f = c.defaultProps, f)
        p[l] === void 0 && (p[l] = f[l]);
    return { $$typeof: r, type: c, key: v, ref: b, props: p, _owner: o.current };
  }
  return He.Fragment = t, He.jsx = s, He.jsxs = s, He;
}
var Ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function Yi() {
  return Cn || (Cn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = $, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), d = Symbol.iterator, y = "@@iterator";
    function O(i) {
      if (i === null || typeof i != "object")
        return null;
      var h = d && i[d] || i[y];
      return typeof h == "function" ? h : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(i) {
      {
        for (var h = arguments.length, E = new Array(h > 1 ? h - 1 : 0), C = 1; C < h; C++)
          E[C - 1] = arguments[C];
        j("error", i, E);
      }
    }
    function j(i, h, E) {
      {
        var C = S.ReactDebugCurrentFrame, q = C.getStackAddendum();
        q !== "" && (h += "%s", E = E.concat([q]));
        var Y = E.map(function(U) {
          return String(U);
        });
        Y.unshift("Warning: " + h), Function.prototype.apply.call(console[i], console, Y);
      }
    }
    var R = !1, g = !1, k = !1, ie = !1, fe = !1, le;
    le = Symbol.for("react.module.reference");
    function _e(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === a || fe || i === o || i === u || i === l || ie || i === b || R || g || k || typeof i == "object" && i !== null && (i.$$typeof === v || i.$$typeof === p || i.$$typeof === s || i.$$typeof === c || i.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === le || i.getModuleId !== void 0));
    }
    function de(i, h, E) {
      var C = i.displayName;
      if (C)
        return C;
      var q = h.displayName || h.name || "";
      return q !== "" ? E + "(" + q + ")" : E;
    }
    function me(i) {
      return i.displayName || "Context";
    }
    function J(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            var h = i;
            return me(h) + ".Consumer";
          case s:
            var E = i;
            return me(E._context) + ".Provider";
          case f:
            return de(i, i.render, "ForwardRef");
          case p:
            var C = i.displayName || null;
            return C !== null ? C : J(i.type) || "Memo";
          case v: {
            var q = i, Y = q._payload, U = q._init;
            try {
              return J(U(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, ue = 0, te, ce, ye, Q, _, P, A;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function T() {
      {
        if (ue === 0) {
          te = console.log, ce = console.info, ye = console.warn, Q = console.error, _ = console.group, P = console.groupCollapsed, A = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        ue++;
      }
    }
    function B() {
      {
        if (ue--, ue === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, i, {
              value: te
            }),
            info: K({}, i, {
              value: ce
            }),
            warn: K({}, i, {
              value: ye
            }),
            error: K({}, i, {
              value: Q
            }),
            group: K({}, i, {
              value: _
            }),
            groupCollapsed: K({}, i, {
              value: P
            }),
            groupEnd: K({}, i, {
              value: A
            })
          });
        }
        ue < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = S.ReactCurrentDispatcher, D;
    function F(i, h, E) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (q) {
            var C = q.stack.trim().match(/\n( *(at )?)/);
            D = C && C[1] || "";
          }
        return `
` + D + i;
      }
    }
    var L = !1, M;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      M = new se();
    }
    function w(i, h) {
      if (!i || L)
        return "";
      {
        var E = M.get(i);
        if (E !== void 0)
          return E;
      }
      var C;
      L = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = N.current, N.current = null, T();
      try {
        if (h) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (xe) {
              C = xe;
            }
            Reflect.construct(i, [], U);
          } else {
            try {
              U.call();
            } catch (xe) {
              C = xe;
            }
            i.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xe) {
            C = xe;
          }
          i();
        }
      } catch (xe) {
        if (xe && C && typeof xe.stack == "string") {
          for (var z = xe.stack.split(`
`), pe = C.stack.split(`
`), ee = z.length - 1, ne = pe.length - 1; ee >= 1 && ne >= 0 && z[ee] !== pe[ne]; )
            ne--;
          for (; ee >= 1 && ne >= 0; ee--, ne--)
            if (z[ee] !== pe[ne]) {
              if (ee !== 1 || ne !== 1)
                do
                  if (ee--, ne--, ne < 0 || z[ee] !== pe[ne]) {
                    var he = `
` + z[ee].replace(" at new ", " at ");
                    return i.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", i.displayName)), typeof i == "function" && M.set(i, he), he;
                  }
                while (ee >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        L = !1, N.current = Y, B(), Error.prepareStackTrace = q;
      }
      var Ue = i ? i.displayName || i.name : "", jn = Ue ? F(Ue) : "";
      return typeof i == "function" && M.set(i, jn), jn;
    }
    function ve(i, h, E) {
      return w(i, !1);
    }
    function De(i) {
      var h = i.prototype;
      return !!(h && h.isReactComponent);
    }
    function Fe(i, h, E) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return w(i, De(i));
      if (typeof i == "string")
        return F(i);
      switch (i) {
        case u:
          return F("Suspense");
        case l:
          return F("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case f:
            return ve(i.render);
          case p:
            return Fe(i.type, h, E);
          case v: {
            var C = i, q = C._payload, Y = C._init;
            try {
              return Fe(Y(q), h, E);
            } catch {
            }
          }
        }
      return "";
    }
    var lr = Object.prototype.hasOwnProperty, vn = {}, _n = S.ReactDebugCurrentFrame;
    function cr(i) {
      if (i) {
        var h = i._owner, E = Fe(i.type, i._source, h ? h.type : null);
        _n.setExtraStackFrame(E);
      } else
        _n.setExtraStackFrame(null);
    }
    function bi(i, h, E, C, q) {
      {
        var Y = Function.call.bind(lr);
        for (var U in i)
          if (Y(i, U)) {
            var z = void 0;
            try {
              if (typeof i[U] != "function") {
                var pe = Error((C || "React class") + ": " + E + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pe.name = "Invariant Violation", pe;
              }
              z = i[U](h, U, C, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              z = ee;
            }
            z && !(z instanceof Error) && (cr(q), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", E, U, typeof z), cr(null)), z instanceof Error && !(z.message in vn) && (vn[z.message] = !0, cr(q), x("Failed %s type: %s", E, z.message), cr(null));
          }
      }
    }
    var Oi = Array.isArray;
    function dt(i) {
      return Oi(i);
    }
    function Pi(i) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, E = h && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return E;
      }
    }
    function wi(i) {
      try {
        return hn(i), !1;
      } catch {
        return !0;
      }
    }
    function hn(i) {
      return "" + i;
    }
    function gn(i) {
      if (wi(i))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pi(i)), hn(i);
    }
    var Ve = S.ReactCurrentOwner, Ei = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, bn, On, mt;
    mt = {};
    function $i(i) {
      if (lr.call(i, "ref")) {
        var h = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Si(i) {
      if (lr.call(i, "key")) {
        var h = Object.getOwnPropertyDescriptor(i, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function Ri(i, h) {
      if (typeof i.ref == "string" && Ve.current && h && Ve.current.stateNode !== h) {
        var E = J(Ve.current.type);
        mt[E] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(Ve.current.type), i.ref), mt[E] = !0);
      }
    }
    function ji(i, h) {
      {
        var E = function() {
          bn || (bn = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        E.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function xi(i, h) {
      {
        var E = function() {
          On || (On = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        E.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Ti = function(i, h, E, C, q, Y, U) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: i,
        key: h,
        ref: E,
        props: U,
        // Record the component responsible for creating this element.
        _owner: Y
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function Ci(i, h, E, C, q) {
      {
        var Y, U = {}, z = null, pe = null;
        E !== void 0 && (gn(E), z = "" + E), Si(h) && (gn(h.key), z = "" + h.key), $i(h) && (pe = h.ref, Ri(h, q));
        for (Y in h)
          lr.call(h, Y) && !Ei.hasOwnProperty(Y) && (U[Y] = h[Y]);
        if (i && i.defaultProps) {
          var ee = i.defaultProps;
          for (Y in ee)
            U[Y] === void 0 && (U[Y] = ee[Y]);
        }
        if (z || pe) {
          var ne = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          z && ji(U, ne), pe && xi(U, ne);
        }
        return Ti(i, z, pe, q, C, Ve.current, U);
      }
    }
    var yt = S.ReactCurrentOwner, Pn = S.ReactDebugCurrentFrame;
    function ze(i) {
      if (i) {
        var h = i._owner, E = Fe(i.type, i._source, h ? h.type : null);
        Pn.setExtraStackFrame(E);
      } else
        Pn.setExtraStackFrame(null);
    }
    var vt;
    vt = !1;
    function _t(i) {
      return typeof i == "object" && i !== null && i.$$typeof === r;
    }
    function wn() {
      {
        if (yt.current) {
          var i = J(yt.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Ni(i) {
      {
        if (i !== void 0) {
          var h = i.fileName.replace(/^.*[\\\/]/, ""), E = i.lineNumber;
          return `

Check your code at ` + h + ":" + E + ".";
        }
        return "";
      }
    }
    var En = {};
    function Ai(i) {
      {
        var h = wn();
        if (!h) {
          var E = typeof i == "string" ? i : i.displayName || i.name;
          E && (h = `

Check the top-level render call using <` + E + ">.");
        }
        return h;
      }
    }
    function $n(i, h) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var E = Ai(h);
        if (En[E])
          return;
        En[E] = !0;
        var C = "";
        i && i._owner && i._owner !== yt.current && (C = " It was passed a child from " + J(i._owner.type) + "."), ze(i), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, C), ze(null);
      }
    }
    function Sn(i, h) {
      {
        if (typeof i != "object")
          return;
        if (dt(i))
          for (var E = 0; E < i.length; E++) {
            var C = i[E];
            _t(C) && $n(C, h);
          }
        else if (_t(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var q = O(i);
          if (typeof q == "function" && q !== i.entries)
            for (var Y = q.call(i), U; !(U = Y.next()).done; )
              _t(U.value) && $n(U.value, h);
        }
      }
    }
    function Ii(i) {
      {
        var h = i.type;
        if (h == null || typeof h == "string")
          return;
        var E;
        if (typeof h == "function")
          E = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === p))
          E = h.propTypes;
        else
          return;
        if (E) {
          var C = J(h);
          bi(E, i.props, "prop", C, i);
        } else if (h.PropTypes !== void 0 && !vt) {
          vt = !0;
          var q = J(h);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Di(i) {
      {
        for (var h = Object.keys(i.props), E = 0; E < h.length; E++) {
          var C = h[E];
          if (C !== "children" && C !== "key") {
            ze(i), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), ze(null);
            break;
          }
        }
        i.ref !== null && (ze(i), x("Invalid attribute `ref` supplied to `React.Fragment`."), ze(null));
      }
    }
    function Rn(i, h, E, C, q, Y) {
      {
        var U = _e(i);
        if (!U) {
          var z = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = Ni(q);
          pe ? z += pe : z += wn();
          var ee;
          i === null ? ee = "null" : dt(i) ? ee = "array" : i !== void 0 && i.$$typeof === r ? (ee = "<" + (J(i.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof i, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, z);
        }
        var ne = Ci(i, h, E, q, Y);
        if (ne == null)
          return ne;
        if (U) {
          var he = h.children;
          if (he !== void 0)
            if (C)
              if (dt(he)) {
                for (var Ue = 0; Ue < he.length; Ue++)
                  Sn(he[Ue], i);
                Object.freeze && Object.freeze(he);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Sn(he, i);
        }
        return i === n ? Di(ne) : Ii(ne), ne;
      }
    }
    function Fi(i, h, E) {
      return Rn(i, h, E, !0);
    }
    function Mi(i, h, E) {
      return Rn(i, h, E, !1);
    }
    var Bi = Mi, Li = Fi;
    Ye.Fragment = n, Ye.jsx = Bi, Ye.jsxs = Li;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? Ft.exports = Hi() : Ft.exports = Yi();
var X = Ft.exports;
function Ht(e) {
  return Object.keys(e);
}
function Gi(e) {
  return e.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`);
}
function ht(e) {
  return `calc(${e} * var(--mantine-scale))`;
}
function Ji(e, { shouldScale: r = !1 } = {}) {
  function t(n) {
    if (n === 0 || n === "0")
      return "0";
    if (typeof n == "number") {
      const o = `${n / 16}${e}`;
      return r ? ht(o) : o;
    }
    if (typeof n == "string") {
      if (n.startsWith("calc(") || n.startsWith("var("))
        return n;
      if (n.includes(" "))
        return n.split(" ").map((a) => t(a)).join(" ");
      if (n.includes(e))
        return r ? ht(n) : n;
      const o = n.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const a = `${Number(o) / 16}${e}`;
        return r ? ht(a) : a;
      }
    }
    return n;
  }
  return t;
}
const re = Ji("rem", { shouldScale: !0 });
function Yt(e) {
  return Object.keys(e).reduce((r, t) => (e[t] !== void 0 && (r[t] = e[t]), r), {});
}
function Ra(e) {
  return typeof e == "number" ? !0 : typeof e == "string" ? e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "" ? !0 : /[0-9]/.test(e.trim().replace("-", "")[0]) : !1;
}
function Ki(e) {
  const r = tr(null);
  return [({ children: o, value: a }) => /* @__PURE__ */ $.createElement(r.Provider, { value: a }, o), () => {
    const o = nr(r);
    if (o === null)
      throw new Error(e);
    return o;
  }];
}
function Xi(e = null) {
  const r = tr(e);
  return [({ children: o, value: a }) => /* @__PURE__ */ $.createElement(r.Provider, { value: a }, o), () => nr(r)];
}
const Zi = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function Qi(e) {
  return Zi[e];
}
function we(e, r = "size", t = !0) {
  if (e !== void 0)
    return Ra(e) ? t ? re(e) : e : `var(--${r}-${e})`;
}
function Kr(e) {
  return we(e, "mantine-spacing");
}
function Xr(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : we(e, "mantine-radius");
}
function Ae(e) {
  return we(e, "mantine-font-size");
}
function el(e) {
  return we(e, "mantine-line-height", !1);
}
function rl(e) {
  if (e)
    return we(e, "mantine-shadow", !1);
}
function ja(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = ja(e[r])) && (n && (n += " "), n += t);
    else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Le() {
  for (var e, r, t = 0, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = ja(e)) && (n && (n += " "), n += r);
  return n;
}
const tl = {};
function nl(e) {
  const r = {};
  return e.forEach((t) => {
    Object.entries(t).forEach(([n, o]) => {
      r[n] ? r[n] = Le(r[n], o) : r[n] = o;
    });
  }), r;
}
function Gt({ theme: e, classNames: r, props: t, stylesCtx: n }) {
  const a = (Array.isArray(r) ? r : [r]).map(
    (s) => typeof s == "function" ? s(e, t, n) : s || tl
  );
  return nl(a);
}
var ol = Object.defineProperty, Nn = Object.getOwnPropertySymbols, al = Object.prototype.hasOwnProperty, sl = Object.prototype.propertyIsEnumerable, An = (e, r, t) => r in e ? ol(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, fr = (e, r) => {
  for (var t in r || (r = {}))
    al.call(r, t) && An(e, t, r[t]);
  if (Nn)
    for (var t of Nn(r))
      sl.call(r, t) && An(e, t, r[t]);
  return e;
};
function Mt({ theme: e, styles: r, props: t, stylesCtx: n }) {
  return (Array.isArray(r) ? r : [r]).reduce((a, s) => typeof s == "function" ? fr(fr({}, a), s(e, t, n)) : fr(fr({}, a), s), {});
}
function il(e, r) {
  return typeof e.primaryShade == "number" ? e.primaryShade : r === "dark" ? e.primaryShade.dark : e.primaryShade.light;
}
function xa({
  color: e,
  theme: r,
  colorScheme: t
}) {
  if (typeof e != "string")
    throw new Error(`[@mantine/core] Failed to parse color. Instead got ${typeof e}`);
  if (e === "white" || e === "black")
    return {
      color: e,
      value: e === "white" ? r.white : r.black,
      shade: void 0,
      isThemeColor: !1,
      variable: `--mantine-color-${e}`
    };
  const [n, o] = e.split("."), a = o ? Number(o) : void 0, s = n in r.colors;
  return s ? {
    color: n,
    value: a !== void 0 ? r.colors[n][a] : r.colors[n][il(r, t || "light")],
    shade: a,
    isThemeColor: s,
    variable: o ? `--mantine-color-${n}-${a}` : `--mantine-color-${n}-filled`
  } : {
    color: e,
    value: e,
    isThemeColor: s,
    shade: a,
    variable: void 0
  };
}
function Qe(e, r) {
  const t = xa({ color: e || r.primaryColor, theme: r });
  return t.variable ? `var(${t.variable})` : e;
}
function ll(e, r) {
  const t = {
    from: (e == null ? void 0 : e.from) || r.defaultGradient.from,
    to: (e == null ? void 0 : e.to) || r.defaultGradient.to,
    deg: (e == null ? void 0 : e.deg) || r.defaultGradient.deg || 0
  }, n = Qe(t.from, r), o = Qe(t.to, r);
  return `linear-gradient(${t.deg}deg, ${n} 0%, ${o} 100%)`;
}
const cl = tr(null);
function Jt() {
  const e = nr(cl);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
const fl = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function ul({ theme: e, options: r, unstyled: t }) {
  return Le(
    (r == null ? void 0 : r.focusable) && !t && (e.focusClassName || fl[e.focusRing]),
    (r == null ? void 0 : r.active) && !t && e.activeClassName
  );
}
function pl({
  themeName: e,
  classNamesPrefix: r,
  selector: t
}) {
  return e.map((n) => `${r}-${n}-${t}`);
}
function dl({
  themeName: e,
  theme: r,
  selector: t,
  props: n,
  stylesCtx: o
}) {
  return e.map(
    (a) => {
      var s, c;
      return (c = Gt({
        theme: r,
        classNames: (s = r.components[a]) == null ? void 0 : s.classNames,
        props: n,
        stylesCtx: o
      })) == null ? void 0 : c[t];
    }
  );
}
function ml({
  options: e,
  classes: r,
  selector: t,
  unstyled: n
}) {
  return e != null && e.variant && !n ? r[`${t}--${e.variant}`] : void 0;
}
function yl({ rootSelector: e, selector: r, className: t }) {
  return e === r ? t : void 0;
}
function vl({ selector: e, classes: r, unstyled: t }) {
  return t ? void 0 : r[e];
}
function _l({
  selector: e,
  stylesCtx: r,
  theme: t,
  classNames: n,
  props: o
}) {
  return Gt({ theme: t, classNames: n, props: o, stylesCtx: r })[e];
}
function hl({
  selector: e,
  stylesCtx: r,
  options: t,
  props: n,
  theme: o
}) {
  return Gt({
    theme: o,
    classNames: t == null ? void 0 : t.classNames,
    props: (t == null ? void 0 : t.props) || n,
    stylesCtx: r
  })[e];
}
function gl({
  theme: e,
  options: r,
  themeName: t,
  selector: n,
  classNamesPrefix: o,
  classNames: a,
  classes: s,
  unstyled: c,
  className: f,
  rootSelector: u,
  props: l,
  stylesCtx: p
}) {
  return Le(
    ul({ theme: e, options: r, unstyled: c }),
    dl({ theme: e, themeName: t, selector: n, props: l, stylesCtx: p }),
    ml({ options: r, classes: s, selector: n, unstyled: c }),
    _l({ selector: n, stylesCtx: p, theme: e, classNames: a, props: l }),
    hl({ selector: n, stylesCtx: p, options: r, props: l, theme: e }),
    yl({ rootSelector: u, selector: n, className: f }),
    vl({ selector: n, classes: s, unstyled: c }),
    pl({ themeName: t, classNamesPrefix: o, selector: n }),
    r == null ? void 0 : r.className
  );
}
var bl = Object.defineProperty, In = Object.getOwnPropertySymbols, Ol = Object.prototype.hasOwnProperty, Pl = Object.prototype.propertyIsEnumerable, Dn = (e, r, t) => r in e ? bl(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Fn = (e, r) => {
  for (var t in r || (r = {}))
    Ol.call(r, t) && Dn(e, t, r[t]);
  if (In)
    for (var t of In(r))
      Pl.call(r, t) && Dn(e, t, r[t]);
  return e;
};
function wl({
  theme: e,
  themeName: r,
  props: t,
  stylesCtx: n,
  selector: o
}) {
  return r.map(
    (a) => {
      var s;
      return Mt({
        theme: e,
        styles: (s = e.components[a]) == null ? void 0 : s.styles,
        props: t,
        stylesCtx: n
      })[o];
    }
  ).reduce((a, s) => Fn(Fn({}, a), s), {});
}
var El = Object.defineProperty, Mn = Object.getOwnPropertySymbols, $l = Object.prototype.hasOwnProperty, Sl = Object.prototype.propertyIsEnumerable, Bn = (e, r, t) => r in e ? El(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Ln = (e, r) => {
  for (var t in r || (r = {}))
    $l.call(r, t) && Bn(e, t, r[t]);
  if (Mn)
    for (var t of Mn(r))
      Sl.call(r, t) && Bn(e, t, r[t]);
  return e;
};
function Bt({ style: e, theme: r }) {
  return Array.isArray(e) ? [...e].reduce(
    (t, n) => Ln(Ln({}, t), Bt({ style: n, theme: r })),
    {}
  ) : typeof e == "function" ? e(r) : e ?? {};
}
var Rl = Object.defineProperty, zn = Object.getOwnPropertySymbols, jl = Object.prototype.hasOwnProperty, xl = Object.prototype.propertyIsEnumerable, Un = (e, r, t) => r in e ? Rl(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Wn = (e, r) => {
  for (var t in r || (r = {}))
    jl.call(r, t) && Un(e, t, r[t]);
  if (zn)
    for (var t of zn(r))
      xl.call(r, t) && Un(e, t, r[t]);
  return e;
};
function Tl(e) {
  return e.reduce((r, t) => (t && Object.keys(t).forEach((n) => {
    r[n] = Wn(Wn({}, r[n]), Yt(t[n]));
  }), r), {});
}
function Cl({
  vars: e,
  varsResolver: r,
  theme: t,
  props: n,
  stylesCtx: o,
  selector: a,
  themeName: s
}) {
  var c;
  return (c = Tl([
    r == null ? void 0 : r(t, n, o),
    ...s.map((f) => {
      var u, l, p;
      return (p = (l = (u = t.components) == null ? void 0 : u[f]) == null ? void 0 : l.vars) == null ? void 0 : p.call(l, t, n, o);
    }),
    e == null ? void 0 : e(t, n, o)
  ])) == null ? void 0 : c[a];
}
var Nl = Object.defineProperty, kn = Object.getOwnPropertySymbols, Al = Object.prototype.hasOwnProperty, Il = Object.prototype.propertyIsEnumerable, qn = (e, r, t) => r in e ? Nl(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, We = (e, r) => {
  for (var t in r || (r = {}))
    Al.call(r, t) && qn(e, t, r[t]);
  if (kn)
    for (var t of kn(r))
      Il.call(r, t) && qn(e, t, r[t]);
  return e;
};
function Dl({
  theme: e,
  themeName: r,
  selector: t,
  options: n,
  props: o,
  stylesCtx: a,
  rootSelector: s,
  styles: c,
  style: f,
  vars: u,
  varsResolver: l
}) {
  return We(We(We(We(We(We({}, wl({ theme: e, themeName: r, props: o, stylesCtx: a, selector: t })), Mt({ theme: e, styles: c, props: o, stylesCtx: a })[t]), Mt({ theme: e, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: a })[t]), Cl({ theme: e, props: o, stylesCtx: a, vars: u, varsResolver: l, selector: t, themeName: r })), s === t ? Bt({ style: f, theme: e }) : null), Bt({ style: n == null ? void 0 : n.style, theme: e }));
}
const Fl = tr(null);
function Ta() {
  const e = nr(Fl);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function Ml() {
  return Ta().classNamesPrefix;
}
function Bl() {
  return Ta().getStyleNonce;
}
function ae({
  name: e,
  classes: r,
  props: t,
  stylesCtx: n,
  className: o,
  style: a,
  rootSelector: s = "root",
  unstyled: c,
  classNames: f,
  styles: u,
  vars: l,
  varsResolver: p
}) {
  const v = Jt(), b = Ml(), d = (Array.isArray(e) ? e : [e]).filter((y) => y);
  return (y, O) => ({
    className: gl({
      theme: v,
      options: O,
      themeName: d,
      selector: y,
      classNamesPrefix: b,
      classNames: f,
      classes: r,
      unstyled: c,
      className: o,
      rootSelector: s,
      props: t,
      stylesCtx: n
    }),
    style: Dl({
      theme: v,
      themeName: d,
      selector: y,
      options: O,
      props: t,
      stylesCtx: n,
      rootSelector: s,
      styles: u,
      style: a,
      vars: l,
      varsResolver: p
    })
  });
}
const Ca = typeof document < "u" ? zi : $a;
function Ll() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
const zl = $["useId".toString()] || (() => {
});
function Ul() {
  const e = zl();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Wl(e) {
  const r = Ul(), [t, n] = Be(r);
  return Ca(() => {
    n(Ll());
  }, []), typeof e == "string" ? e : typeof window > "u" ? r : t;
}
function kl(e, r) {
  typeof e == "function" ? e(r) : typeof e == "object" && e !== null && "current" in e && (e.current = r);
}
var ql = Object.defineProperty, Vn = Object.getOwnPropertySymbols, Vl = Object.prototype.hasOwnProperty, Hl = Object.prototype.propertyIsEnumerable, Hn = (e, r, t) => r in e ? ql(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, gt = (e, r) => {
  for (var t in r || (r = {}))
    Vl.call(r, t) && Hn(e, t, r[t]);
  if (Vn)
    for (var t of Vn(r))
      Hl.call(r, t) && Hn(e, t, r[t]);
  return e;
};
function G(e, r, t) {
  var n;
  const o = Jt(), a = (n = o.components[e]) == null ? void 0 : n.defaultProps, s = typeof a == "function" ? a(o) : a;
  return gt(gt(gt({}, r), s), Yt(t));
}
function Yn(e) {
  return Ht(e).reduce(
    (r, t) => e[t] !== void 0 ? `${r}${Gi(t)}:${e[t]};` : r,
    ""
  ).trim();
}
function Yl({ selector: e, styles: r, media: t }) {
  const n = r ? Yn(r) : "", o = Array.isArray(t) ? t.map((a) => `@media${a.query}{${e}{${Yn(a.styles)}}}`) : [];
  return `${n ? `${e}{${n}}` : ""}${o.join("")}`.trim();
}
function Gl({ selector: e, styles: r, media: t }) {
  const n = Bl();
  return /* @__PURE__ */ $.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: { __html: Yl({ selector: e, styles: r, media: t }) }
    }
  );
}
function Jl() {
  return `__m__-${Ui().replace(/:/g, "")}`;
}
var Kl = Object.defineProperty, Gn = Object.getOwnPropertySymbols, Xl = Object.prototype.hasOwnProperty, Zl = Object.prototype.propertyIsEnumerable, Jn = (e, r, t) => r in e ? Kl(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Xe = (e, r) => {
  for (var t in r || (r = {}))
    Xl.call(r, t) && Jn(e, t, r[t]);
  if (Gn)
    for (var t of Gn(r))
      Zl.call(r, t) && Jn(e, t, r[t]);
  return e;
};
function Lt(e, r) {
  return Array.isArray(e) ? [...e].reduce(
    (t, n) => Xe(Xe({}, t), Lt(n, r)),
    {}
  ) : typeof e == "function" ? e(r) : e ?? {};
}
function Ql({
  theme: e,
  style: r,
  vars: t,
  styleProps: n
}) {
  const o = Lt(r, e), a = Lt(t, e);
  return Xe(Xe(Xe({}, o), a), n);
}
var ec = Object.defineProperty, Kn = Object.getOwnPropertySymbols, rc = Object.prototype.hasOwnProperty, tc = Object.prototype.propertyIsEnumerable, Xn = (e, r, t) => r in e ? ec(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Zn = (e, r) => {
  for (var t in r || (r = {}))
    rc.call(r, t) && Xn(e, t, r[t]);
  if (Kn)
    for (var t of Kn(r))
      tc.call(r, t) && Xn(e, t, r[t]);
  return e;
};
function Na(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function nc(e) {
  return Object.keys(e).reduce((r, t) => {
    const n = e[t];
    return n === void 0 || n === "" || n === !1 || n === null || (r[Na(t)] = e[t]), r;
  }, {});
}
function Aa(e) {
  return e ? typeof e == "string" ? { [Na(e)]: !0 } : Array.isArray(e) ? [...e].reduce(
    (r, t) => Zn(Zn({}, r), Aa(t)),
    {}
  ) : nc(e) : null;
}
var Qn = Object.getOwnPropertySymbols, oc = Object.prototype.hasOwnProperty, ac = Object.prototype.propertyIsEnumerable, sc = (e, r) => {
  var t = {};
  for (var n in e)
    oc.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Qn)
    for (var n of Qn(e))
      r.indexOf(n) < 0 && ac.call(e, n) && (t[n] = e[n]);
  return t;
};
function Kt(e) {
  const r = e, {
    m: t,
    mx: n,
    my: o,
    mt: a,
    mb: s,
    ml: c,
    mr: f,
    p: u,
    px: l,
    py: p,
    pt: v,
    pb: b,
    pl: d,
    pr: y,
    bg: O,
    c: S,
    opacity: x,
    ff: j,
    fz: R,
    fw: g,
    lts: k,
    ta: ie,
    lh: fe,
    fs: le,
    tt: _e,
    td: de,
    w: me,
    miw: J,
    maw: K,
    h: ue,
    mih: te,
    mah: ce,
    bgsz: ye,
    bgp: Q,
    bgr: _,
    bga: P,
    pos: A,
    top: I,
    left: T,
    bottom: B,
    right: N,
    inset: D,
    display: F,
    hiddenFrom: L,
    visibleFrom: M,
    lightHidden: se,
    darkHidden: w
  } = r, ve = sc(r, [
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "bg",
    "c",
    "opacity",
    "ff",
    "fz",
    "fw",
    "lts",
    "ta",
    "lh",
    "fs",
    "tt",
    "td",
    "w",
    "miw",
    "maw",
    "h",
    "mih",
    "mah",
    "bgsz",
    "bgp",
    "bgr",
    "bga",
    "pos",
    "top",
    "left",
    "bottom",
    "right",
    "inset",
    "display",
    "hiddenFrom",
    "visibleFrom",
    "lightHidden",
    "darkHidden"
  ]);
  return { styleProps: Yt({
    m: t,
    mx: n,
    my: o,
    mt: a,
    mb: s,
    ml: c,
    mr: f,
    p: u,
    px: l,
    py: p,
    pt: v,
    pb: b,
    pl: d,
    pr: y,
    bg: O,
    c: S,
    opacity: x,
    ff: j,
    fz: R,
    fw: g,
    lts: k,
    ta: ie,
    lh: fe,
    fs: le,
    tt: _e,
    td: de,
    w: me,
    miw: J,
    maw: K,
    h: ue,
    mih: te,
    mah: ce,
    bgsz: ye,
    bgp: Q,
    bgr: _,
    bga: P,
    pos: A,
    top: I,
    left: T,
    bottom: B,
    right: N,
    inset: D,
    display: F,
    hiddenFrom: L,
    visibleFrom: M,
    lightHidden: se,
    darkHidden: w
  }), rest: ve };
}
function ic(e, r) {
  const t = xa({ color: e, theme: r });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.variable ? `var(${t.variable})` : t.color;
}
function lc(e, r) {
  return typeof e == "string" && e in r.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "number" || typeof e == "string" ? re(e) : e;
}
function cc(e, r) {
  if (typeof e == "number")
    return re(e);
  if (typeof e == "string") {
    const t = e.replace("-", "");
    if (!(t in r.spacing))
      return re(e);
    const n = `--mantine-spacing-${t}`;
    return e.startsWith("-") ? `calc(var(${n}) * -1)` : `var(${n})`;
  }
  return e;
}
function fc(e) {
  return e;
}
function uc(e) {
  return typeof e == "number" ? re(e) : e;
}
function pc(e, r) {
  return typeof e == "string" && e in r.fontSizes ? `var(--mantine-line-height-${e})` : e;
}
const bt = {
  color: ic,
  fontSize: lc,
  spacing: cc,
  identity: fc,
  size: uc,
  lineHeight: pc
};
var dc = Object.defineProperty, mc = Object.defineProperties, yc = Object.getOwnPropertyDescriptors, gr = Object.getOwnPropertySymbols, Ia = Object.prototype.hasOwnProperty, Da = Object.prototype.propertyIsEnumerable, eo = (e, r, t) => r in e ? dc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, vc = (e, r) => {
  for (var t in r || (r = {}))
    Ia.call(r, t) && eo(e, t, r[t]);
  if (gr)
    for (var t of gr(r))
      Da.call(r, t) && eo(e, t, r[t]);
  return e;
}, _c = (e, r) => mc(e, yc(r)), hc = (e, r) => {
  var t = {};
  for (var n in e)
    Ia.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && gr)
    for (var n of gr(e))
      r.indexOf(n) < 0 && Da.call(e, n) && (t[n] = e[n]);
  return t;
};
function ro(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function gc(e) {
  var r = e, {
    media: t
  } = r, n = hc(r, [
    "media"
  ]);
  const a = Object.keys(t).sort((s, c) => Number(ro(s)) - Number(ro(c))).map((s) => ({ query: s, styles: t[s] }));
  return _c(vc({}, n), { media: a });
}
var bc = Object.defineProperty, Oc = Object.defineProperties, Pc = Object.getOwnPropertyDescriptors, to = Object.getOwnPropertySymbols, wc = Object.prototype.hasOwnProperty, Ec = Object.prototype.propertyIsEnumerable, no = (e, r, t) => r in e ? bc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, $c = (e, r) => {
  for (var t in r || (r = {}))
    wc.call(r, t) && no(e, t, r[t]);
  if (to)
    for (var t of to(r))
      Ec.call(r, t) && no(e, t, r[t]);
  return e;
}, Sc = (e, r) => Oc(e, Pc(r));
function Rc(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.keys(e);
  return !(r.length === 1 && r[0] === "base");
}
function jc(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function xc(e) {
  return typeof e == "object" && e !== null ? Ht(e).filter((r) => r !== "base") : [];
}
function Tc(e, r) {
  return typeof e == "object" && e !== null && r in e ? e[r] : e;
}
function Cc({
  styleProps: e,
  data: r,
  theme: t
}) {
  return gc(
    Ht(e).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return n;
        const a = r[o], s = Array.isArray(a.property) ? a.property : [a.property], c = jc(e[o]);
        if (!Rc(e[o]))
          return s.forEach((u) => {
            n.inlineStyles[u] = bt[a.type](c, t);
          }), n;
        n.hasResponsiveStyles = !0;
        const f = xc(e[o]);
        return s.forEach((u) => {
          c && (n.styles[u] = bt[a.type](c, t)), f.forEach((l) => {
            const p = `(min-width: ${t.breakpoints[l]})`;
            n.media[p] = Sc($c({}, n.media[p]), {
              [u]: bt[a.type](
                Tc(e[o], l),
                t
              )
            });
          });
        }), n;
      },
      {
        hasResponsiveStyles: !1,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}
const Nc = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
  my: { type: "spacing", property: ["marginTop", "marginBottom"] },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
  py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
  bg: { type: "color", property: "background" },
  c: { type: "color", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "identity", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" }
};
var Ac = Object.defineProperty, br = Object.getOwnPropertySymbols, Fa = Object.prototype.hasOwnProperty, Ma = Object.prototype.propertyIsEnumerable, oo = (e, r, t) => r in e ? Ac(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Ot = (e, r) => {
  for (var t in r || (r = {}))
    Fa.call(r, t) && oo(e, t, r[t]);
  if (br)
    for (var t of br(r))
      Ma.call(r, t) && oo(e, t, r[t]);
  return e;
}, Ic = (e, r) => {
  var t = {};
  for (var n in e)
    Fa.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && br)
    for (var n of br(e))
      r.indexOf(n) < 0 && Ma.call(e, n) && (t[n] = e[n]);
  return t;
};
const Ba = Ie(
  (e, r) => {
    var t = e, {
      component: n,
      style: o,
      __vars: a,
      className: s,
      variant: c,
      mod: f,
      size: u,
      hiddenFrom: l,
      visibleFrom: p,
      lightHidden: v,
      darkHidden: b,
      renderRoot: d
    } = t, y = Ic(t, [
      "component",
      "style",
      "__vars",
      "className",
      "variant",
      "mod",
      "size",
      "hiddenFrom",
      "visibleFrom",
      "lightHidden",
      "darkHidden",
      "renderRoot"
    ]);
    const O = Jt(), S = n || "div", { styleProps: x, rest: j } = Kt(y), R = Jl(), g = Cc({
      styleProps: x,
      theme: O,
      data: Nc
    }), k = Ot(Ot({
      ref: r,
      style: Ql({
        theme: O,
        style: o,
        vars: a,
        styleProps: g.inlineStyles
      }),
      className: Le(s, {
        [R]: g.hasResponsiveStyles,
        "mantine-light-hidden": v,
        "mantine-dark-hidden": b,
        [`mantine-hidden-from-${l}`]: l,
        [`mantine-visible-from-${p}`]: p
      }),
      "data-variant": c,
      "data-size": Ra(u) ? void 0 : u || void 0
    }, Aa(f)), j);
    return /* @__PURE__ */ $.createElement($.Fragment, null, g.hasResponsiveStyles && /* @__PURE__ */ $.createElement(
      Gl,
      {
        selector: `.${R}`,
        styles: g.styles,
        media: g.media
      }
    ), typeof d == "function" ? d(k) : /* @__PURE__ */ $.createElement(S, Ot({}, k)));
  }
);
Ba.displayName = "@mantine/core/Box";
const Z = Ba;
function La(e) {
  return e;
}
function be(e) {
  const r = Ie(e);
  return r.extend = La, r;
}
function Re(e) {
  const r = Ie(e);
  return r.extend = La, r;
}
var Dc = { root: "m-87cf2631" };
const za = Dc;
var Fc = Object.defineProperty, Mc = Object.defineProperties, Bc = Object.getOwnPropertyDescriptors, Or = Object.getOwnPropertySymbols, Ua = Object.prototype.hasOwnProperty, Wa = Object.prototype.propertyIsEnumerable, ao = (e, r, t) => r in e ? Fc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, so = (e, r) => {
  for (var t in r || (r = {}))
    Ua.call(r, t) && ao(e, t, r[t]);
  if (Or)
    for (var t of Or(r))
      Wa.call(r, t) && ao(e, t, r[t]);
  return e;
}, Lc = (e, r) => Mc(e, Bc(r)), zc = (e, r) => {
  var t = {};
  for (var n in e)
    Ua.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Or)
    for (var n of Or(e))
      r.indexOf(n) < 0 && Wa.call(e, n) && (t[n] = e[n]);
  return t;
};
const Uc = {
  __staticSelector: "UnstyledButton"
}, Xt = Re(
  (e, r) => {
    const t = G("UnstyledButton", Uc, e), n = t, {
      className: o,
      component: a = "button",
      __staticSelector: s,
      unstyled: c,
      classNames: f,
      styles: u,
      style: l
    } = n, p = zc(n, [
      "className",
      "component",
      "__staticSelector",
      "unstyled",
      "classNames",
      "styles",
      "style"
    ]), v = ae({
      name: s,
      props: t,
      classes: za,
      className: o,
      style: l,
      classNames: f,
      styles: u,
      unstyled: c
    });
    return /* @__PURE__ */ $.createElement(
      Z,
      so(Lc(so({}, v("root", { focusable: !0 })), {
        component: a,
        ref: r,
        type: a === "button" ? "button" : void 0
      }), p)
    );
  }
);
Xt.classes = za;
Xt.displayName = "@mantine/core/UnstyledButton";
var Wc = { root: "m-1b7284a3" };
const ka = Wc;
var kc = Object.defineProperty, qc = Object.defineProperties, Vc = Object.getOwnPropertyDescriptors, Pr = Object.getOwnPropertySymbols, qa = Object.prototype.hasOwnProperty, Va = Object.prototype.propertyIsEnumerable, io = (e, r, t) => r in e ? kc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, lo = (e, r) => {
  for (var t in r || (r = {}))
    qa.call(r, t) && io(e, t, r[t]);
  if (Pr)
    for (var t of Pr(r))
      Va.call(r, t) && io(e, t, r[t]);
  return e;
}, Hc = (e, r) => qc(e, Vc(r)), Yc = (e, r) => {
  var t = {};
  for (var n in e)
    qa.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Pr)
    for (var n of Pr(e))
      r.indexOf(n) < 0 && Va.call(e, n) && (t[n] = e[n]);
  return t;
};
const Gc = {}, Jc = (e, { radius: r, shadow: t }) => ({
  root: {
    "--paper-radius": r === void 0 ? void 0 : Xr(r),
    "--paper-shadow": rl(t)
  }
}), or = Re((e, r) => {
  const t = G("Paper", Gc, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: c,
    unstyled: f,
    withBorder: u,
    vars: l,
    radius: p,
    shadow: v,
    variant: b
  } = n, d = Yc(n, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "withBorder",
    "vars",
    "radius",
    "shadow",
    "variant"
  ]), y = ae({
    name: "Paper",
    props: t,
    classes: ka,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    vars: l,
    varsResolver: Jc
  });
  return /* @__PURE__ */ $.createElement(
    Z,
    lo(Hc(lo({
      ref: r,
      mod: { "data-with-border": u }
    }, y("root")), {
      variant: b
    }), d)
  );
});
or.classes = ka;
or.displayName = "@mantine/core/Paper";
var co = Object.getOwnPropertySymbols, Kc = Object.prototype.hasOwnProperty, Xc = Object.prototype.propertyIsEnumerable, Zc = (e, r) => {
  var t = {};
  for (var n in e)
    Kc.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && co)
    for (var n of co(e))
      r.indexOf(n) < 0 && Xc.call(e, n) && (t[n] = e[n]);
  return t;
};
function Qc(e) {
  const r = document.createElement("div");
  return r.setAttribute("data-portal", "true"), typeof e.className == "string" && r.classList.add(...e.className.split(" ")), typeof e.style == "object" && Object.assign(r.style, e.style), typeof e.id == "string" && r.setAttribute("id", e.id), r;
}
const ef = {}, Ha = Ie((e, r) => {
  const t = G("Portal", ef, e), { children: n, target: o } = t, a = Zc(t, ["children", "target"]), [s, c] = Be(!1), f = Wi(null);
  return Ca(() => (c(!0), f.current = o ? typeof o == "string" ? document.querySelector(o) : o : Qc(a), kl(r, f.current), !o && f.current && document.body.appendChild(f.current), () => {
    !o && f.current && document.body.removeChild(f.current);
  }), [o]), !s || !f.current ? null : qi(/* @__PURE__ */ $.createElement($.Fragment, null, n), f.current);
});
Ha.displayName = "@mantine/core/Portal";
var rf = Object.defineProperty, wr = Object.getOwnPropertySymbols, Ya = Object.prototype.hasOwnProperty, Ga = Object.prototype.propertyIsEnumerable, fo = (e, r, t) => r in e ? rf(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, tf = (e, r) => {
  for (var t in r || (r = {}))
    Ya.call(r, t) && fo(e, t, r[t]);
  if (wr)
    for (var t of wr(r))
      Ga.call(r, t) && fo(e, t, r[t]);
  return e;
}, nf = (e, r) => {
  var t = {};
  for (var n in e)
    Ya.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && wr)
    for (var n of wr(e))
      r.indexOf(n) < 0 && Ga.call(e, n) && (t[n] = e[n]);
  return t;
};
function Ja(e) {
  var r = e, { withinPortal: t = !0, children: n } = r, o = nf(r, ["withinPortal", "children"]);
  return t ? /* @__PURE__ */ $.createElement(Ha, tf({}, o), n) : /* @__PURE__ */ $.createElement($.Fragment, null, n);
}
Ja.displayName = "@mantine/core/OptionalPortal";
var of = { root: "m-8d3f4000", loader: "m-302b9fb1", group: "m-1a0f1b21" };
const Zr = of;
var af = Object.defineProperty, sf = Object.defineProperties, lf = Object.getOwnPropertyDescriptors, Er = Object.getOwnPropertySymbols, Ka = Object.prototype.hasOwnProperty, Xa = Object.prototype.propertyIsEnumerable, uo = (e, r, t) => r in e ? af(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, po = (e, r) => {
  for (var t in r || (r = {}))
    Ka.call(r, t) && uo(e, t, r[t]);
  if (Er)
    for (var t of Er(r))
      Xa.call(r, t) && uo(e, t, r[t]);
  return e;
}, cf = (e, r) => sf(e, lf(r)), ff = (e, r) => {
  var t = {};
  for (var n in e)
    Ka.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Er)
    for (var n of Er(e))
      r.indexOf(n) < 0 && Xa.call(e, n) && (t[n] = e[n]);
  return t;
};
const mo = {
  orientation: "horizontal"
}, uf = (e, { borderWidth: r }) => ({
  group: { "--ai-border-width": re(r) }
}), Zt = be((e, r) => {
  const t = G("ActionIconGroup", mo, e), n = G("ActionIconGroup", mo, e), {
    className: o,
    style: a,
    classNames: s,
    styles: c,
    unstyled: f,
    orientation: u,
    vars: l,
    borderWidth: p,
    variant: v
  } = n, b = ff(n, [
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "orientation",
    "vars",
    "borderWidth",
    "variant"
  ]), d = ae({
    name: "ActionIconGroup",
    props: t,
    classes: Zr,
    className: o,
    style: a,
    classNames: s,
    styles: c,
    unstyled: f,
    vars: l,
    varsResolver: uf,
    rootSelector: "group"
  });
  return /* @__PURE__ */ $.createElement(
    Z,
    po(cf(po({}, d("group")), {
      ref: r,
      variant: v,
      mod: { "data-orientation": u },
      role: "group"
    }), b)
  );
});
Zt.classes = Zr;
Zt.displayName = "@mantine/core/ActionIconGroup";
var pf = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const Pe = pf;
var df = Object.defineProperty, mf = Object.defineProperties, yf = Object.getOwnPropertyDescriptors, $r = Object.getOwnPropertySymbols, Za = Object.prototype.hasOwnProperty, Qa = Object.prototype.propertyIsEnumerable, yo = (e, r, t) => r in e ? df(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, vf = (e, r) => {
  for (var t in r || (r = {}))
    Za.call(r, t) && yo(e, t, r[t]);
  if ($r)
    for (var t of $r(r))
      Qa.call(r, t) && yo(e, t, r[t]);
  return e;
}, _f = (e, r) => mf(e, yf(r)), hf = (e, r) => {
  var t = {};
  for (var n in e)
    Za.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && $r)
    for (var n of $r(e))
      r.indexOf(n) < 0 && Qa.call(e, n) && (t[n] = e[n]);
  return t;
};
const gf = Ie((e, r) => {
  var t = e, { className: n } = t, o = hf(t, ["className"]);
  return /* @__PURE__ */ $.createElement(Z, _f(vf({ component: "span", className: Le(Pe.barsLoader, n) }, o), { ref: r }), /* @__PURE__ */ $.createElement("span", { className: Pe.bar }), /* @__PURE__ */ $.createElement("span", { className: Pe.bar }), /* @__PURE__ */ $.createElement("span", { className: Pe.bar }));
});
var bf = Object.defineProperty, Of = Object.defineProperties, Pf = Object.getOwnPropertyDescriptors, Sr = Object.getOwnPropertySymbols, es = Object.prototype.hasOwnProperty, rs = Object.prototype.propertyIsEnumerable, vo = (e, r, t) => r in e ? bf(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, wf = (e, r) => {
  for (var t in r || (r = {}))
    es.call(r, t) && vo(e, t, r[t]);
  if (Sr)
    for (var t of Sr(r))
      rs.call(r, t) && vo(e, t, r[t]);
  return e;
}, Ef = (e, r) => Of(e, Pf(r)), $f = (e, r) => {
  var t = {};
  for (var n in e)
    es.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Sr)
    for (var n of Sr(e))
      r.indexOf(n) < 0 && rs.call(e, n) && (t[n] = e[n]);
  return t;
};
const Sf = Ie((e, r) => {
  var t = e, { className: n } = t, o = $f(t, ["className"]);
  return /* @__PURE__ */ $.createElement(Z, Ef(wf({ component: "span", className: Le(Pe.ovalLoader, n) }, o), { ref: r }));
});
var Rf = Object.defineProperty, jf = Object.defineProperties, xf = Object.getOwnPropertyDescriptors, Rr = Object.getOwnPropertySymbols, ts = Object.prototype.hasOwnProperty, ns = Object.prototype.propertyIsEnumerable, _o = (e, r, t) => r in e ? Rf(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Tf = (e, r) => {
  for (var t in r || (r = {}))
    ts.call(r, t) && _o(e, t, r[t]);
  if (Rr)
    for (var t of Rr(r))
      ns.call(r, t) && _o(e, t, r[t]);
  return e;
}, Cf = (e, r) => jf(e, xf(r)), Nf = (e, r) => {
  var t = {};
  for (var n in e)
    ts.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Rr)
    for (var n of Rr(e))
      r.indexOf(n) < 0 && ns.call(e, n) && (t[n] = e[n]);
  return t;
};
const Af = Ie((e, r) => {
  var t = e, { className: n } = t, o = Nf(t, ["className"]);
  return /* @__PURE__ */ $.createElement(Z, Cf(Tf({ component: "span", className: Le(Pe.dotsLoader, n) }, o), { ref: r }), /* @__PURE__ */ $.createElement("span", { className: Pe.dot }), /* @__PURE__ */ $.createElement("span", { className: Pe.dot }), /* @__PURE__ */ $.createElement("span", { className: Pe.dot }));
});
var If = Object.defineProperty, Df = Object.defineProperties, Ff = Object.getOwnPropertyDescriptors, jr = Object.getOwnPropertySymbols, os = Object.prototype.hasOwnProperty, as = Object.prototype.propertyIsEnumerable, ho = (e, r, t) => r in e ? If(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, ur = (e, r) => {
  for (var t in r || (r = {}))
    os.call(r, t) && ho(e, t, r[t]);
  if (jr)
    for (var t of jr(r))
      as.call(r, t) && ho(e, t, r[t]);
  return e;
}, go = (e, r) => Df(e, Ff(r)), Mf = (e, r) => {
  var t = {};
  for (var n in e)
    os.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && jr)
    for (var n of jr(e))
      r.indexOf(n) < 0 && as.call(e, n) && (t[n] = e[n]);
  return t;
};
const Bf = {
  bars: gf,
  oval: Sf,
  dots: Af
}, Lf = {
  loaders: Bf,
  type: "oval"
}, zf = (e, { size: r, color: t }) => ({
  root: {
    "--loader-size": we(r, "loader-size"),
    "--loader-color": t ? Qe(t, e) : void 0
  }
}), Qt = be((e, r) => {
  const t = G("Loader", Lf, e), n = t, {
    size: o,
    color: a,
    type: s,
    vars: c,
    className: f,
    style: u,
    classNames: l,
    styles: p,
    unstyled: v,
    loaders: b,
    variant: d,
    children: y
  } = n, O = Mf(n, [
    "size",
    "color",
    "type",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "loaders",
    "variant",
    "children"
  ]), S = ae({
    name: "Loader",
    props: t,
    classes: Pe,
    className: f,
    style: u,
    classNames: l,
    styles: p,
    unstyled: v,
    vars: c,
    varsResolver: zf
  });
  return y ? /* @__PURE__ */ $.createElement(Z, ur(go(ur({}, S("root")), { ref: r }), O), y) : /* @__PURE__ */ $.createElement(
    Z,
    ur(go(ur({}, S("root")), {
      ref: r,
      component: b[s],
      variant: d,
      size: o
    }), O)
  );
});
Qt.classes = Pe;
Qt.displayName = "@mantine/core/Loader";
var Uf = Object.defineProperty, Wf = Object.defineProperties, kf = Object.getOwnPropertyDescriptors, xr = Object.getOwnPropertySymbols, ss = Object.prototype.hasOwnProperty, is = Object.prototype.propertyIsEnumerable, bo = (e, r, t) => r in e ? Uf(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, pr = (e, r) => {
  for (var t in r || (r = {}))
    ss.call(r, t) && bo(e, t, r[t]);
  if (xr)
    for (var t of xr(r))
      is.call(r, t) && bo(e, t, r[t]);
  return e;
}, Oo = (e, r) => Wf(e, kf(r)), qf = (e, r) => {
  var t = {};
  for (var n in e)
    ss.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && xr)
    for (var n of xr(e))
      r.indexOf(n) < 0 && is.call(e, n) && (t[n] = e[n]);
  return t;
};
const Vf = {}, Hf = (e, { size: r, radius: t, variant: n, gradient: o, color: a }) => {
  const s = e.variantColorResolver({
    color: a || e.primaryColor,
    theme: e,
    gradient: o,
    variant: n || "filled"
  });
  return {
    root: {
      "--ai-size": we(r, "ai-size"),
      "--ai-radius": t === void 0 ? void 0 : Xr(t),
      "--ai-bg": a || n ? s.background : void 0,
      "--ai-hover": a || n ? s.hover : void 0,
      "--ai-hover-color": a || n ? s.hoverColor : void 0,
      "--ai-color": a || n ? s.color : void 0,
      "--ai-bd": a || n ? s.border : void 0
    }
  };
}, ar = Re((e, r) => {
  const t = G("ActionIcon", Vf, e), n = t, {
    className: o,
    unstyled: a,
    variant: s,
    classNames: c,
    styles: f,
    style: u,
    loading: l,
    loaderProps: p,
    size: v,
    color: b,
    radius: d,
    __staticSelector: y,
    gradient: O,
    vars: S,
    children: x,
    disabled: j,
    "data-disabled": R
  } = n, g = qf(n, [
    "className",
    "unstyled",
    "variant",
    "classNames",
    "styles",
    "style",
    "loading",
    "loaderProps",
    "size",
    "color",
    "radius",
    "__staticSelector",
    "gradient",
    "vars",
    "children",
    "disabled",
    "data-disabled"
  ]), k = ae({
    name: ["ActionIcon", y],
    props: t,
    className: o,
    style: u,
    classes: Zr,
    classNames: c,
    styles: f,
    unstyled: a,
    vars: S,
    varsResolver: Hf
  });
  return /* @__PURE__ */ $.createElement(
    Xt,
    Oo(pr(pr({}, k("root", { active: !j && !l && !R })), g), {
      unstyled: a,
      variant: s,
      size: v,
      disabled: j || l,
      ref: r,
      mod: { loading: l, disabled: j || R }
    }),
    l ? /* @__PURE__ */ $.createElement(
      Qt,
      pr(Oo(pr({}, k("loader")), {
        color: "var(--ai-color)",
        size: "calc(var(--ai-size) * 0.55)"
      }), p)
    ) : x
  );
});
ar.classes = Zr;
ar.displayName = "@mantine/core/ActionIcon";
ar.Group = Zt;
function Yf(e) {
  return Sa.toArray(e).filter(Boolean);
}
var Gf = { root: "m-4081bf90" };
const ls = Gf;
var Jf = Object.defineProperty, Kf = Object.defineProperties, Xf = Object.getOwnPropertyDescriptors, Tr = Object.getOwnPropertySymbols, cs = Object.prototype.hasOwnProperty, fs = Object.prototype.propertyIsEnumerable, Po = (e, r, t) => r in e ? Jf(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, wo = (e, r) => {
  for (var t in r || (r = {}))
    cs.call(r, t) && Po(e, t, r[t]);
  if (Tr)
    for (var t of Tr(r))
      fs.call(r, t) && Po(e, t, r[t]);
  return e;
}, Zf = (e, r) => Kf(e, Xf(r)), Qf = (e, r) => {
  var t = {};
  for (var n in e)
    cs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Tr)
    for (var n of Tr(e))
      r.indexOf(n) < 0 && fs.call(e, n) && (t[n] = e[n]);
  return t;
};
const eu = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, ru = (e, { grow: r, preventGrowOverflow: t, gap: n, align: o, justify: a, wrap: s }, { childWidth: c }) => ({
  root: {
    "--group-child-width": r && t ? c : void 0,
    "--group-gap": Kr(n),
    "--group-align": o,
    "--group-justify": a,
    "--group-wrap": s
  }
}), Cr = be((e, r) => {
  const t = G("Group", eu, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: c,
    unstyled: f,
    children: u,
    gap: l,
    align: p,
    justify: v,
    wrap: b,
    grow: d,
    preventGrowOverflow: y,
    vars: O,
    variant: S,
    __size: x
  } = n, j = Qf(n, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "children",
    "gap",
    "align",
    "justify",
    "wrap",
    "grow",
    "preventGrowOverflow",
    "vars",
    "variant",
    "__size"
  ]), R = Yf(u), g = R.length, k = Kr(l ?? "md"), fe = { childWidth: `calc(${100 / g}% - (${k} - ${k} / ${g}))` }, le = ae({
    name: "Group",
    props: t,
    stylesCtx: fe,
    className: a,
    style: s,
    classes: ls,
    classNames: o,
    styles: c,
    unstyled: f,
    vars: O,
    varsResolver: ru
  });
  return /* @__PURE__ */ $.createElement(
    Z,
    wo(Zf(wo({}, le("root")), {
      ref: r,
      variant: S,
      mod: { grow: d },
      size: x
    }), j),
    R
  );
});
Cr.classes = ls;
Cr.displayName = "@mantine/core/Group";
const [tu, Qr] = Xi({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var nu = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const Oe = nu;
var ou = Object.defineProperty, au = Object.defineProperties, su = Object.getOwnPropertyDescriptors, Nr = Object.getOwnPropertySymbols, us = Object.prototype.hasOwnProperty, ps = Object.prototype.propertyIsEnumerable, Eo = (e, r, t) => r in e ? ou(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Pt = (e, r) => {
  for (var t in r || (r = {}))
    us.call(r, t) && Eo(e, t, r[t]);
  if (Nr)
    for (var t of Nr(r))
      ps.call(r, t) && Eo(e, t, r[t]);
  return e;
}, $o = (e, r) => au(e, su(r)), iu = (e, r) => {
  var t = {};
  for (var n in e)
    us.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Nr)
    for (var n of Nr(e))
      r.indexOf(n) < 0 && ps.call(e, n) && (t[n] = e[n]);
  return t;
};
const So = {
  labelElement: "label"
}, lu = (e, { size: r }) => ({
  label: {
    "--input-label-size": Ae(r),
    "--input-asterisk-color": void 0
  }
}), et = be((e, r) => {
  const t = G("InputLabel", So, e), n = G("InputLabel", So, t), {
    classNames: o,
    className: a,
    style: s,
    styles: c,
    unstyled: f,
    vars: u,
    labelElement: l,
    size: p,
    required: v,
    htmlFor: b,
    onMouseDown: d,
    children: y,
    __staticSelector: O,
    variant: S
  } = n, x = iu(n, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "labelElement",
    "size",
    "required",
    "htmlFor",
    "onMouseDown",
    "children",
    "__staticSelector",
    "variant"
  ]), j = ae({
    name: ["InputWrapper", O],
    props: t,
    classes: Oe,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    rootSelector: "label",
    vars: u,
    varsResolver: lu
  }), R = Qr(), g = (R == null ? void 0 : R.getStyles) || j;
  return /* @__PURE__ */ $.createElement(
    Z,
    Pt($o(Pt({}, g("label")), {
      component: l,
      variant: S,
      size: p,
      ref: r,
      htmlFor: l === "label" ? b : void 0,
      mod: { required: v },
      onMouseDown: (k) => {
        d == null || d(k), !k.defaultPrevented && k.detail > 1 && k.preventDefault();
      }
    }), x),
    y,
    v && /* @__PURE__ */ $.createElement("span", $o(Pt({}, g("required")), { "aria-hidden": !0 }), " *")
  );
});
et.classes = Oe;
et.displayName = "@mantine/core/InputLabel";
var cu = Object.defineProperty, Ar = Object.getOwnPropertySymbols, ds = Object.prototype.hasOwnProperty, ms = Object.prototype.propertyIsEnumerable, Ro = (e, r, t) => r in e ? cu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, jo = (e, r) => {
  for (var t in r || (r = {}))
    ds.call(r, t) && Ro(e, t, r[t]);
  if (Ar)
    for (var t of Ar(r))
      ms.call(r, t) && Ro(e, t, r[t]);
  return e;
}, fu = (e, r) => {
  var t = {};
  for (var n in e)
    ds.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Ar)
    for (var n of Ar(e))
      r.indexOf(n) < 0 && ms.call(e, n) && (t[n] = e[n]);
  return t;
};
const uu = {}, pu = (e, { size: r }) => ({
  error: {
    "--input-error-size": r === void 0 ? void 0 : `calc(${Ae(r)} - ${re(2)})`
  }
}), rt = be((e, r) => {
  const t = G("InputError", uu, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: c,
    unstyled: f,
    vars: u,
    size: l,
    __staticSelector: p,
    __inheritStyles: v = !0,
    variant: b
  } = n, d = fu(n, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "__staticSelector",
    "__inheritStyles",
    "variant"
  ]), y = ae({
    name: ["InputWrapper", p],
    props: t,
    classes: Oe,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    rootSelector: "error",
    vars: u,
    varsResolver: pu
  }), O = Qr(), S = v && (O == null ? void 0 : O.getStyles) || y;
  return /* @__PURE__ */ $.createElement(
    Z,
    jo(jo({
      component: "p",
      ref: r,
      variant: b,
      size: l
    }, S("error")), d)
  );
});
rt.classes = Oe;
rt.displayName = "@mantine/core/InputError";
var du = Object.defineProperty, Ir = Object.getOwnPropertySymbols, ys = Object.prototype.hasOwnProperty, vs = Object.prototype.propertyIsEnumerable, xo = (e, r, t) => r in e ? du(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, To = (e, r) => {
  for (var t in r || (r = {}))
    ys.call(r, t) && xo(e, t, r[t]);
  if (Ir)
    for (var t of Ir(r))
      vs.call(r, t) && xo(e, t, r[t]);
  return e;
}, mu = (e, r) => {
  var t = {};
  for (var n in e)
    ys.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Ir)
    for (var n of Ir(e))
      r.indexOf(n) < 0 && vs.call(e, n) && (t[n] = e[n]);
  return t;
};
const Co = {}, yu = (e, { size: r }) => ({
  description: {
    "--input-description-size": r === void 0 ? void 0 : `calc(${Ae(r)} - ${re(2)})`
  }
}), tt = be((e, r) => {
  const t = G("InputDescription", Co, e), n = G("InputDescription", Co, t), {
    classNames: o,
    className: a,
    style: s,
    styles: c,
    unstyled: f,
    vars: u,
    size: l,
    __staticSelector: p,
    __inheritStyles: v = !0,
    variant: b
  } = n, d = mu(n, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "__staticSelector",
    "__inheritStyles",
    "variant"
  ]), y = Qr(), O = ae({
    name: ["InputWrapper", p],
    props: t,
    classes: Oe,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    rootSelector: "description",
    vars: u,
    varsResolver: yu
  }), S = v && (y == null ? void 0 : y.getStyles) || O;
  return /* @__PURE__ */ $.createElement(
    Z,
    To(To({
      component: "p",
      ref: r,
      variant: b,
      size: l
    }, S("description")), d)
  );
});
tt.classes = Oe;
tt.displayName = "@mantine/core/InputDescription";
var vu = Object.defineProperty, _u = Object.defineProperties, hu = Object.getOwnPropertyDescriptors, Dr = Object.getOwnPropertySymbols, _s = Object.prototype.hasOwnProperty, hs = Object.prototype.propertyIsEnumerable, No = (e, r, t) => r in e ? vu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Ao = (e, r) => {
  for (var t in r || (r = {}))
    _s.call(r, t) && No(e, t, r[t]);
  if (Dr)
    for (var t of Dr(r))
      hs.call(r, t) && No(e, t, r[t]);
  return e;
}, gu = (e, r) => _u(e, hu(r)), bu = (e, r) => {
  var t = {};
  for (var n in e)
    _s.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Dr)
    for (var n of Dr(e))
      r.indexOf(n) < 0 && hs.call(e, n) && (t[n] = e[n]);
  return t;
};
const Io = {}, en = be((e, r) => {
  const t = G("InputPlaceholder", Io, e), n = G("InputPlaceholder", Io, t), {
    classNames: o,
    className: a,
    style: s,
    styles: c,
    unstyled: f,
    vars: u,
    __staticSelector: l,
    variant: p,
    error: v
  } = n, b = bu(n, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "__staticSelector",
    "variant",
    "error"
  ]), d = ae({
    name: ["InputPlaceholder", l],
    props: t,
    classes: Oe,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ $.createElement(
    Z,
    Ao(gu(Ao({}, d("placeholder")), {
      mod: { error: !!v },
      component: "span",
      variant: p,
      ref: r
    }), b)
  );
});
en.classes = Oe;
en.displayName = "@mantine/core/InputPlaceholder";
function Ou(e, { hasDescription: r, hasError: t }) {
  const n = e.findIndex((f) => f === "input"), o = e[n - 1], a = e[n + 1];
  return { offsetBottom: r && a === "description" || t && a === "error", offsetTop: r && o === "description" || t && o === "error" };
}
var Pu = Object.defineProperty, wu = Object.defineProperties, Eu = Object.getOwnPropertyDescriptors, Fr = Object.getOwnPropertySymbols, gs = Object.prototype.hasOwnProperty, bs = Object.prototype.propertyIsEnumerable, Do = (e, r, t) => r in e ? Pu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Te = (e, r) => {
  for (var t in r || (r = {}))
    gs.call(r, t) && Do(e, t, r[t]);
  if (Fr)
    for (var t of Fr(r))
      bs.call(r, t) && Do(e, t, r[t]);
  return e;
}, Fo = (e, r) => wu(e, Eu(r)), $u = (e, r) => {
  var t = {};
  for (var n in e)
    gs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Fr)
    for (var n of Fr(e))
      r.indexOf(n) < 0 && bs.call(e, n) && (t[n] = e[n]);
  return t;
};
const Su = {
  labelElement: "label",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, Ru = (e, { size: r }) => ({
  label: {
    "--input-label-size": Ae(r),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": r === void 0 ? void 0 : `calc(${Ae(r)} - ${re(2)})`
  },
  description: {
    "--input-description-size": r === void 0 ? void 0 : `calc(${Ae(r)} - ${re(2)})`
  }
}), rn = be((e, r) => {
  const t = G("InputWrapper", Su, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: c,
    unstyled: f,
    vars: u,
    size: l,
    variant: p,
    __staticSelector: v,
    inputContainer: b,
    inputWrapperOrder: d,
    label: y,
    error: O,
    description: S,
    labelProps: x,
    descriptionProps: j,
    errorProps: R,
    labelElement: g,
    children: k,
    withAsterisk: ie,
    id: fe,
    required: le,
    __stylesApiProps: _e
  } = n, de = $u(n, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "variant",
    "__staticSelector",
    "inputContainer",
    "inputWrapperOrder",
    "label",
    "error",
    "description",
    "labelProps",
    "descriptionProps",
    "errorProps",
    "labelElement",
    "children",
    "withAsterisk",
    "id",
    "required",
    "__stylesApiProps"
  ]), me = ae({
    name: ["InputWrapper", v],
    props: _e || t,
    classes: Oe,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    vars: u,
    varsResolver: Ru
  }), J = {
    size: l,
    variant: p,
    __staticSelector: v
  }, K = Wl(fe), ue = typeof ie == "boolean" ? ie : le, te = (R == null ? void 0 : R.id) || `${K}-error`, ce = (j == null ? void 0 : j.id) || `${K}-description`, ye = K, Q = !!O && typeof O != "boolean", _ = !!S, P = `${Q ? te : ""} ${_ ? ce : ""}`, A = P.trim().length > 0 ? P.trim() : void 0, I = (x == null ? void 0 : x.id) || `${K}-label`, T = y && /* @__PURE__ */ $.createElement(
    et,
    Te(Te({
      key: "label",
      labelElement: g,
      id: I,
      htmlFor: ye,
      required: ue
    }, J), x),
    y
  ), B = _ && /* @__PURE__ */ $.createElement(
    tt,
    Fo(Te(Te({
      key: "description"
    }, j), J), {
      size: (j == null ? void 0 : j.size) || J.size,
      id: (j == null ? void 0 : j.id) || ce
    }),
    S
  ), N = /* @__PURE__ */ $.createElement($.Fragment, { key: "input" }, b(k)), D = Q && /* @__PURE__ */ $.createElement(
    rt,
    Fo(Te(Te({}, R), J), {
      size: (R == null ? void 0 : R.size) || J.size,
      key: "error",
      id: (R == null ? void 0 : R.id) || te
    }),
    O
  ), F = d.map((L) => {
    switch (L) {
      case "label":
        return T;
      case "input":
        return N;
      case "description":
        return B;
      case "error":
        return D;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ $.createElement(
    tu,
    {
      value: Te({
        getStyles: me,
        describedBy: A,
        inputId: ye,
        labelId: I
      }, Ou(d, { hasDescription: _, hasError: Q }))
    },
    /* @__PURE__ */ $.createElement(Z, Te(Te({ ref: r, variant: p, size: l }, me("root")), de), F)
  );
});
rn.classes = Oe;
rn.displayName = "@mantine/core/InputWrapper";
var ju = Object.defineProperty, xu = Object.defineProperties, Tu = Object.getOwnPropertyDescriptors, Mr = Object.getOwnPropertySymbols, Os = Object.prototype.hasOwnProperty, Ps = Object.prototype.propertyIsEnumerable, Mo = (e, r, t) => r in e ? ju(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, $e = (e, r) => {
  for (var t in r || (r = {}))
    Os.call(r, t) && Mo(e, t, r[t]);
  if (Mr)
    for (var t of Mr(r))
      Ps.call(r, t) && Mo(e, t, r[t]);
  return e;
}, dr = (e, r) => xu(e, Tu(r)), Cu = (e, r) => {
  var t = {};
  for (var n in e)
    Os.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Mr)
    for (var n of Mr(e))
      r.indexOf(n) < 0 && Ps.call(e, n) && (t[n] = e[n]);
  return t;
};
const Nu = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, Au = (e, r, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": we(r.size, "input-height"),
    "--input-fz": Ae(r.size),
    "--input-radius": r.radius === void 0 ? void 0 : Xr(r.radius),
    "--input-left-section-width": r.leftSectionWidth !== void 0 ? re(r.leftSectionWidth) : void 0,
    "--input-right-section-width": r.rightSectionWidth !== void 0 ? re(r.rightSectionWidth) : void 0,
    "--input-padding-y": r.multiline ? we(r.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": r.leftSectionPointerEvents,
    "--input-right-section-pointer-events": r.rightSectionPointerEvents
  }
}), Ee = Re((e, r) => {
  const t = G("Input", Nu, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: c,
    unstyled: f,
    required: u,
    __staticSelector: l,
    __stylesApiProps: p,
    size: v,
    wrapperProps: b,
    error: d,
    disabled: y,
    leftSection: O,
    leftSectionProps: S,
    leftSectionWidth: x,
    rightSection: j,
    rightSectionProps: R,
    rightSectionWidth: g,
    rightSectionPointerEvents: k,
    leftSectionPointerEvents: ie,
    variant: fe,
    vars: le,
    pointer: _e,
    multiline: de,
    radius: me,
    id: J,
    withAria: K,
    withErrorStyles: ue
  } = n, te = Cu(n, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "required",
    "__staticSelector",
    "__stylesApiProps",
    "size",
    "wrapperProps",
    "error",
    "disabled",
    "leftSection",
    "leftSectionProps",
    "leftSectionWidth",
    "rightSection",
    "rightSectionProps",
    "rightSectionWidth",
    "rightSectionPointerEvents",
    "leftSectionPointerEvents",
    "variant",
    "vars",
    "pointer",
    "multiline",
    "radius",
    "id",
    "withAria",
    "withErrorStyles"
  ]), { styleProps: ce, rest: ye } = Kt(te), Q = Qr(), _ = { offsetBottom: Q == null ? void 0 : Q.offsetBottom, offsetTop: Q == null ? void 0 : Q.offsetTop }, P = ae({
    name: ["Input", l],
    props: p || t,
    classes: Oe,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    stylesCtx: _,
    rootSelector: "wrapper",
    vars: le,
    varsResolver: Au
  }), A = K ? {
    required: u,
    disabled: y,
    "aria-invalid": !!d,
    "aria-describedby": Q == null ? void 0 : Q.describedBy,
    id: (Q == null ? void 0 : Q.inputId) || J
  } : {};
  return /* @__PURE__ */ $.createElement(
    Z,
    dr($e($e($e({}, P("wrapper")), ce), b), {
      mod: {
        error: !!d && ue,
        pointer: _e,
        disabled: y,
        multiline: de,
        "data-with-right-section": !!j,
        "data-with-left-section": !!O
      },
      variant: fe,
      size: v
    }),
    O && /* @__PURE__ */ $.createElement(
      "div",
      $e(dr($e({}, S), {
        "data-position": "left"
      }), P("section", {
        className: S == null ? void 0 : S.className,
        style: S == null ? void 0 : S.style
      })),
      O
    ),
    /* @__PURE__ */ $.createElement(
      Z,
      $e(dr($e($e({
        component: "input"
      }, ye), A), {
        ref: r,
        required: u,
        mod: { disabled: y, error: !!d && ue },
        variant: fe
      }), P("input"))
    ),
    j && /* @__PURE__ */ $.createElement(
      "div",
      $e(dr($e({}, R), {
        "data-position": "right"
      }), P("section", {
        className: R == null ? void 0 : R.className,
        style: R == null ? void 0 : R.style
      })),
      j
    )
  );
});
Ee.classes = Oe;
Ee.Wrapper = rn;
Ee.Label = et;
Ee.Error = rt;
Ee.Description = tt;
Ee.Placeholder = en;
Ee.displayName = "@mantine/core/Input";
var Iu = Object.defineProperty, Du = Object.defineProperties, Fu = Object.getOwnPropertyDescriptors, Br = Object.getOwnPropertySymbols, ws = Object.prototype.hasOwnProperty, Es = Object.prototype.propertyIsEnumerable, Bo = (e, r, t) => r in e ? Iu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, mr = (e, r) => {
  for (var t in r || (r = {}))
    ws.call(r, t) && Bo(e, t, r[t]);
  if (Br)
    for (var t of Br(r))
      Es.call(r, t) && Bo(e, t, r[t]);
  return e;
}, Mu = (e, r) => Du(e, Fu(r)), Bu = (e, r) => {
  var t = {};
  for (var n in e)
    ws.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Br)
    for (var n of Br(e))
      r.indexOf(n) < 0 && Es.call(e, n) && (t[n] = e[n]);
  return t;
};
function Lu(e, r, t) {
  const n = G(e, r, t), o = n, {
    label: a,
    description: s,
    error: c,
    required: f,
    classNames: u,
    styles: l,
    className: p,
    unstyled: v,
    __staticSelector: b,
    __stylesApiProps: d,
    errorProps: y,
    labelProps: O,
    descriptionProps: S,
    wrapperProps: x,
    id: j,
    size: R,
    style: g,
    inputContainer: k,
    inputWrapperOrder: ie,
    withAsterisk: fe,
    variant: le,
    vars: _e
  } = o, de = Bu(o, [
    "label",
    "description",
    "error",
    "required",
    "classNames",
    "styles",
    "className",
    "unstyled",
    "__staticSelector",
    "__stylesApiProps",
    "errorProps",
    "labelProps",
    "descriptionProps",
    "wrapperProps",
    "id",
    "size",
    "style",
    "inputContainer",
    "inputWrapperOrder",
    "withAsterisk",
    "variant",
    "vars"
  ]), { styleProps: me, rest: J } = Kt(de), K = mr({
    label: a,
    description: s,
    error: c,
    required: f,
    classNames: u,
    className: p,
    __staticSelector: b,
    __stylesApiProps: d || n,
    errorProps: y,
    labelProps: O,
    descriptionProps: S,
    unstyled: v,
    styles: l,
    size: R,
    style: g,
    inputContainer: k,
    inputWrapperOrder: ie,
    withAsterisk: fe,
    variant: le,
    id: j
  }, x);
  return Mu(mr({}, J), {
    classNames: u,
    styles: l,
    unstyled: v,
    wrapperProps: mr(mr({}, K), me),
    inputProps: {
      required: f,
      classNames: u,
      styles: l,
      unstyled: v,
      size: R,
      __staticSelector: b,
      __stylesApiProps: d || n,
      error: c,
      variant: le,
      id: j
    }
  });
}
var zu = Object.defineProperty, Uu = Object.defineProperties, Wu = Object.getOwnPropertyDescriptors, Lr = Object.getOwnPropertySymbols, $s = Object.prototype.hasOwnProperty, Ss = Object.prototype.propertyIsEnumerable, Lo = (e, r, t) => r in e ? zu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Ze = (e, r) => {
  for (var t in r || (r = {}))
    $s.call(r, t) && Lo(e, t, r[t]);
  if (Lr)
    for (var t of Lr(r))
      Ss.call(r, t) && Lo(e, t, r[t]);
  return e;
}, ku = (e, r) => Uu(e, Wu(r)), qu = (e, r) => {
  var t = {};
  for (var n in e)
    $s.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Lr)
    for (var n of Lr(e))
      r.indexOf(n) < 0 && Ss.call(e, n) && (t[n] = e[n]);
  return t;
};
const Vu = {
  __staticSelector: "InputBase",
  withAria: !0
}, nt = Re((e, r) => {
  const t = Lu("InputBase", Vu, e), { inputProps: n, wrapperProps: o } = t, a = qu(t, ["inputProps", "wrapperProps"]);
  return /* @__PURE__ */ $.createElement(Ee.Wrapper, Ze({}, o), /* @__PURE__ */ $.createElement(Ee, ku(Ze(Ze({}, n), a), { ref: r })));
});
nt.classes = Ze(Ze({}, Ee.classes), Ee.Wrapper.classes);
nt.displayName = "@mantine/core/InputBase";
var Hu = { root: "m-7f854edf" };
const Rs = Hu;
var Yu = Object.defineProperty, Gu = Object.defineProperties, Ju = Object.getOwnPropertyDescriptors, zr = Object.getOwnPropertySymbols, js = Object.prototype.hasOwnProperty, xs = Object.prototype.propertyIsEnumerable, zo = (e, r, t) => r in e ? Yu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, wt = (e, r) => {
  for (var t in r || (r = {}))
    js.call(r, t) && zo(e, t, r[t]);
  if (zr)
    for (var t of zr(r))
      xs.call(r, t) && zo(e, t, r[t]);
  return e;
}, Ku = (e, r) => Gu(e, Ju(r)), Xu = (e, r) => {
  var t = {};
  for (var n in e)
    js.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && zr)
    for (var n of zr(e))
      r.indexOf(n) < 0 && xs.call(e, n) && (t[n] = e[n]);
  return t;
};
const Zu = {
  position: { bottom: 0, right: 0 },
  zIndex: Qi("modal"),
  withinPortal: !0
}, Qu = (e, { zIndex: r, position: t }) => ({
  root: {
    "--affix-z-index": r == null ? void 0 : r.toString(),
    "--affix-top": re(t == null ? void 0 : t.top),
    "--affix-left": re(t == null ? void 0 : t.left),
    "--affix-bottom": re(t == null ? void 0 : t.bottom),
    "--affix-right": re(t == null ? void 0 : t.right)
  }
}), tn = be((e, r) => {
  const t = G("Affix", Zu, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: c,
    unstyled: f,
    vars: u,
    portalProps: l,
    zIndex: p,
    withinPortal: v,
    position: b
  } = n, d = Xu(n, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "portalProps",
    "zIndex",
    "withinPortal",
    "position"
  ]), y = ae({
    name: "Affix",
    classes: Rs,
    props: t,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    vars: u,
    varsResolver: Qu
  });
  return /* @__PURE__ */ $.createElement(Ja, Ku(wt({}, l), { withinPortal: v }), /* @__PURE__ */ $.createElement(Z, wt(wt({ ref: r }, y("root")), d)));
});
tn.classes = Rs;
tn.displayName = "@mantine/core/Affix";
var ep = { root: "m-b6d8b162" };
const Ts = ep;
var rp = Object.defineProperty, tp = Object.defineProperties, np = Object.getOwnPropertyDescriptors, Ur = Object.getOwnPropertySymbols, Cs = Object.prototype.hasOwnProperty, Ns = Object.prototype.propertyIsEnumerable, Uo = (e, r, t) => r in e ? rp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Wo = (e, r) => {
  for (var t in r || (r = {}))
    Cs.call(r, t) && Uo(e, t, r[t]);
  if (Ur)
    for (var t of Ur(r))
      Ns.call(r, t) && Uo(e, t, r[t]);
  return e;
}, op = (e, r) => tp(e, np(r)), ap = (e, r) => {
  var t = {};
  for (var n in e)
    Cs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Ur)
    for (var n of Ur(e))
      r.indexOf(n) < 0 && Ns.call(e, n) && (t[n] = e[n]);
  return t;
};
function sp(e) {
  if (e === "start")
    return "start";
  if (e === "end" || e)
    return "end";
}
const ip = {
  inherit: !1
}, lp = (e, { variant: r, lineClamp: t, gradient: n, size: o, color: a }) => ({
  root: {
    "--text-fz": Ae(o),
    "--text-lh": el(o),
    "--text-gradient": r === "gradient" ? ll(n, e) : void 0,
    "--text-line-clamp": typeof t == "number" ? t.toString() : void 0,
    "--text-color": a ? Qe(a, e) : void 0
  }
}), er = Re((e, r) => {
  const t = G("Text", ip, e), n = t, {
    lineClamp: o,
    truncate: a,
    inline: s,
    inherit: c,
    gradient: f,
    span: u,
    __staticSelector: l,
    vars: p,
    className: v,
    style: b,
    classNames: d,
    styles: y,
    unstyled: O,
    variant: S,
    mod: x,
    size: j
  } = n, R = ap(n, [
    "lineClamp",
    "truncate",
    "inline",
    "inherit",
    "gradient",
    "span",
    "__staticSelector",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "variant",
    "mod",
    "size"
  ]), g = ae({
    name: ["Text", l],
    props: t,
    classes: Ts,
    className: v,
    style: b,
    classNames: d,
    styles: y,
    unstyled: O,
    vars: p,
    varsResolver: lp
  });
  return /* @__PURE__ */ $.createElement(
    Z,
    Wo(op(Wo({}, g("root", { focusable: !0 })), {
      ref: r,
      component: u ? "span" : "p",
      variant: S,
      mod: [
        {
          "data-truncate": sp(a),
          "data-line-clamp": typeof o == "number",
          "data-inline": s,
          "data-inherit": c
        },
        x
      ],
      size: j
    }), R)
  );
});
er.classes = Ts;
er.displayName = "@mantine/core/Text";
const As = tr(null), cp = As.Provider;
function fp() {
  return { withinGroup: !!nr(As) };
}
var up = { root: "m-f85678b6", image: "m-11f8ac07", placeholder: "m-104cd71f", group: "m-11def92b" };
const ot = up;
var pp = Object.defineProperty, Wr = Object.getOwnPropertySymbols, Is = Object.prototype.hasOwnProperty, Ds = Object.prototype.propertyIsEnumerable, ko = (e, r, t) => r in e ? pp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, qo = (e, r) => {
  for (var t in r || (r = {}))
    Is.call(r, t) && ko(e, t, r[t]);
  if (Wr)
    for (var t of Wr(r))
      Ds.call(r, t) && ko(e, t, r[t]);
  return e;
}, dp = (e, r) => {
  var t = {};
  for (var n in e)
    Is.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Wr)
    for (var n of Wr(e))
      r.indexOf(n) < 0 && Ds.call(e, n) && (t[n] = e[n]);
  return t;
};
const mp = {}, yp = (e, { spacing: r }) => ({
  group: {
    "--ag-spacing": Kr(r)
  }
}), nn = be((e, r) => {
  const t = G("AvatarGroup", mp, e), n = t, { classNames: o, className: a, style: s, styles: c, unstyled: f, vars: u, spacing: l } = n, p = dp(n, ["classNames", "className", "style", "styles", "unstyled", "vars", "spacing"]), v = ae({
    name: "AvatarGroup",
    classes: ot,
    props: t,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    vars: u,
    varsResolver: yp,
    rootSelector: "group"
  });
  return /* @__PURE__ */ $.createElement(cp, { value: !0 }, /* @__PURE__ */ $.createElement(Z, qo(qo({ ref: r }, v("group")), p)));
});
nn.classes = ot;
nn.displayName = "@mantine/core/AvatarGroup";
var vp = Object.defineProperty, _p = Object.defineProperties, hp = Object.getOwnPropertyDescriptors, Vo = Object.getOwnPropertySymbols, gp = Object.prototype.hasOwnProperty, bp = Object.prototype.propertyIsEnumerable, Ho = (e, r, t) => r in e ? vp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Op = (e, r) => {
  for (var t in r || (r = {}))
    gp.call(r, t) && Ho(e, t, r[t]);
  if (Vo)
    for (var t of Vo(r))
      bp.call(r, t) && Ho(e, t, r[t]);
  return e;
}, Pp = (e, r) => _p(e, hp(r));
function wp(e) {
  return /* @__PURE__ */ $.createElement(
    "svg",
    Pp(Op({}, e), {
      "data-avatar-placeholder-icon": !0,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }),
    /* @__PURE__ */ $.createElement(
      "path",
      {
        d: "M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}
var Ep = Object.defineProperty, $p = Object.defineProperties, Sp = Object.getOwnPropertyDescriptors, kr = Object.getOwnPropertySymbols, Fs = Object.prototype.hasOwnProperty, Ms = Object.prototype.propertyIsEnumerable, Yo = (e, r, t) => r in e ? Ep(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Ge = (e, r) => {
  for (var t in r || (r = {}))
    Fs.call(r, t) && Yo(e, t, r[t]);
  if (kr)
    for (var t of kr(r))
      Ms.call(r, t) && Yo(e, t, r[t]);
  return e;
}, Et = (e, r) => $p(e, Sp(r)), Rp = (e, r) => {
  var t = {};
  for (var n in e)
    Fs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && kr)
    for (var n of kr(e))
      r.indexOf(n) < 0 && Ms.call(e, n) && (t[n] = e[n]);
  return t;
};
const jp = {}, xp = (e, { size: r, radius: t, variant: n, gradient: o, color: a }) => {
  const s = e.variantColorResolver({
    color: a || "gray",
    theme: e,
    gradient: o,
    variant: n || "light"
  });
  return {
    root: {
      "--avatar-size": we(r, "avatar-size"),
      "--avatar-radius": t === void 0 ? void 0 : Xr(t),
      "--avatar-bg": a || n ? s.background : void 0,
      "--avatar-color": a || n ? s.color : void 0,
      "--avatar-bd": a || n ? s.border : void 0
    }
  };
}, at = Re((e, r) => {
  const t = G("Avatar", jp, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: c,
    unstyled: f,
    vars: u,
    src: l,
    alt: p,
    radius: v,
    color: b,
    gradient: d,
    imageProps: y,
    children: O
  } = n, S = Rp(n, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "src",
    "alt",
    "radius",
    "color",
    "gradient",
    "imageProps",
    "children"
  ]), x = fp(), [j, R] = Be(!l), g = ae({
    name: "Avatar",
    props: t,
    classes: ot,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    vars: u,
    varsResolver: xp
  });
  return $a(() => R(!l), [l]), /* @__PURE__ */ $.createElement(Z, Ge(Et(Ge({}, g("root")), { mod: { "within-group": x.withinGroup }, ref: r }), S), j ? /* @__PURE__ */ $.createElement("span", Et(Ge({}, g("placeholder")), { title: p }), O || /* @__PURE__ */ $.createElement(wp, null)) : /* @__PURE__ */ $.createElement(
    "img",
    Et(Ge(Ge({}, y), g("image")), {
      src: l,
      alt: p,
      onError: (k) => {
        var ie;
        R(!0), (ie = y == null ? void 0 : y.onError) == null || ie.call(y, k);
      }
    })
  ));
});
at.classes = ot;
at.displayName = "@mantine/core/Avatar";
at.Group = nn;
const [Tp, Cp] = Ki(
  "Card component was not found in tree"
);
var Np = { root: "m-e615b15f", section: "m-599a2148" };
const on = Np;
var Ap = Object.defineProperty, qr = Object.getOwnPropertySymbols, Bs = Object.prototype.hasOwnProperty, Ls = Object.prototype.propertyIsEnumerable, Go = (e, r, t) => r in e ? Ap(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Jo = (e, r) => {
  for (var t in r || (r = {}))
    Bs.call(r, t) && Go(e, t, r[t]);
  if (qr)
    for (var t of qr(r))
      Ls.call(r, t) && Go(e, t, r[t]);
  return e;
}, Ip = (e, r) => {
  var t = {};
  for (var n in e)
    Bs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && qr)
    for (var n of qr(e))
      r.indexOf(n) < 0 && Ls.call(e, n) && (t[n] = e[n]);
  return t;
};
const Dp = {}, st = Re((e, r) => {
  const n = G("CardSection", Dp, e), { classNames: o, className: a, style: s, styles: c, vars: f, withBorder: u, inheritPadding: l } = n, p = Ip(n, ["classNames", "className", "style", "styles", "vars", "withBorder", "inheritPadding"]), v = Cp();
  return /* @__PURE__ */ $.createElement(
    Z,
    Jo(Jo({
      ref: r,
      mod: { "with-border": u, "inherit-padding": l }
    }, v.getStyles("section", { className: a, style: s, styles: c, classNames: o })), p)
  );
});
st.classes = on;
st.displayName = "@mantine/core/CardSection";
var Fp = Object.defineProperty, Vr = Object.getOwnPropertySymbols, zs = Object.prototype.hasOwnProperty, Us = Object.prototype.propertyIsEnumerable, Ko = (e, r, t) => r in e ? Fp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Xo = (e, r) => {
  for (var t in r || (r = {}))
    zs.call(r, t) && Ko(e, t, r[t]);
  if (Vr)
    for (var t of Vr(r))
      Us.call(r, t) && Ko(e, t, r[t]);
  return e;
}, Mp = (e, r) => {
  var t = {};
  for (var n in e)
    zs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Vr)
    for (var n of Vr(e))
      r.indexOf(n) < 0 && Us.call(e, n) && (t[n] = e[n]);
  return t;
};
const Bp = {}, Lp = (e, { padding: r }) => ({
  root: {
    "--card-padding": Kr(r)
  }
}), it = Re((e, r) => {
  const t = G("Card", Bp, e), n = t, { classNames: o, className: a, style: s, styles: c, unstyled: f, vars: u, children: l, padding: p } = n, v = Mp(n, ["classNames", "className", "style", "styles", "unstyled", "vars", "children", "padding"]), b = ae({
    name: "Card",
    props: t,
    classes: on,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    vars: u,
    varsResolver: Lp
  }), d = Sa.toArray(l), y = d.map((O, S) => typeof O == "object" && O && "type" in O && O.type === st ? ki(O, {
    "data-first-section": S === 0 || void 0,
    "data-last-section": S === d.length - 1 || void 0
  }) : O);
  return /* @__PURE__ */ $.createElement(Tp, { value: { getStyles: b } }, /* @__PURE__ */ $.createElement(or, Xo(Xo({ ref: r, unstyled: f }, b("root")), v), y));
});
it.classes = on;
it.displayName = "@mantine/core/Card";
it.Section = st;
var zp = { root: "m-4451eb3a" };
const Ws = zp;
var Up = Object.defineProperty, Hr = Object.getOwnPropertySymbols, ks = Object.prototype.hasOwnProperty, qs = Object.prototype.propertyIsEnumerable, Zo = (e, r, t) => r in e ? Up(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Qo = (e, r) => {
  for (var t in r || (r = {}))
    ks.call(r, t) && Zo(e, t, r[t]);
  if (Hr)
    for (var t of Hr(r))
      qs.call(r, t) && Zo(e, t, r[t]);
  return e;
}, Wp = (e, r) => {
  var t = {};
  for (var n in e)
    ks.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Hr)
    for (var n of Hr(e))
      r.indexOf(n) < 0 && qs.call(e, n) && (t[n] = e[n]);
  return t;
};
const kp = {}, an = Re((e, r) => {
  const t = G("Center", kp, e), n = t, { classNames: o, className: a, style: s, styles: c, unstyled: f, vars: u, inline: l } = n, p = Wp(n, ["classNames", "className", "style", "styles", "unstyled", "vars", "inline"]), v = ae({
    name: "Center",
    props: t,
    classes: Ws,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    vars: u
  });
  return /* @__PURE__ */ $.createElement(Z, Qo(Qo({ ref: r, mod: { inline: l } }, v("root")), p));
});
an.classes = Ws;
an.displayName = "@mantine/core/Center";
var qp = { root: "m-3eebeb36", label: "m-9e365f20" };
const Vs = qp;
var Vp = Object.defineProperty, Hp = Object.defineProperties, Yp = Object.getOwnPropertyDescriptors, Yr = Object.getOwnPropertySymbols, Hs = Object.prototype.hasOwnProperty, Ys = Object.prototype.propertyIsEnumerable, ea = (e, r, t) => r in e ? Vp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, $t = (e, r) => {
  for (var t in r || (r = {}))
    Hs.call(r, t) && ea(e, t, r[t]);
  if (Yr)
    for (var t of Yr(r))
      Ys.call(r, t) && ea(e, t, r[t]);
  return e;
}, Gp = (e, r) => Hp(e, Yp(r)), Jp = (e, r) => {
  var t = {};
  for (var n in e)
    Hs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Yr)
    for (var n of Yr(e))
      r.indexOf(n) < 0 && Ys.call(e, n) && (t[n] = e[n]);
  return t;
};
const Kp = {
  orientation: "horizontal"
}, Xp = (e, { color: r, variant: t, size: n }) => ({
  root: {
    "--divider-color": r ? Qe(r, e) : void 0,
    "--divider-border-style": t,
    "--divider-size": we(n, "divider-size")
  }
}), sn = be((e, r) => {
  const t = G("Divider", Kp, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: c,
    unstyled: f,
    vars: u,
    color: l,
    orientation: p,
    label: v,
    labelPosition: b
  } = n, d = Jp(n, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "orientation",
    "label",
    "labelPosition"
  ]), y = ae({
    name: "Divider",
    classes: Vs,
    props: t,
    className: a,
    style: s,
    classNames: o,
    styles: c,
    unstyled: f,
    vars: u,
    varsResolver: Xp
  });
  return /* @__PURE__ */ $.createElement(
    Z,
    Gp($t($t({
      ref: r,
      mod: { orientation: p, "with-label": !!v }
    }, y("root")), d), {
      role: "separator"
    }),
    v && /* @__PURE__ */ $.createElement(Z, $t({ component: "span", mod: { position: b } }, y("label")), v)
  );
});
sn.classes = Vs;
sn.displayName = "@mantine/core/Divider";
var Zp = Object.defineProperty, Qp = Object.defineProperties, ed = Object.getOwnPropertyDescriptors, ra = Object.getOwnPropertySymbols, rd = Object.prototype.hasOwnProperty, td = Object.prototype.propertyIsEnumerable, ta = (e, r, t) => r in e ? Zp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, nd = (e, r) => {
  for (var t in r || (r = {}))
    rd.call(r, t) && ta(e, t, r[t]);
  if (ra)
    for (var t of ra(r))
      td.call(r, t) && ta(e, t, r[t]);
  return e;
}, od = (e, r) => Qp(e, ed(r));
const ad = {}, ln = be((e, r) => {
  const t = G("TextInput", ad, e);
  return /* @__PURE__ */ $.createElement(nt, od(nd({ component: "input", ref: r }, t), { __staticSelector: "TextInput" }));
});
ln.classes = nt.classes;
ln.displayName = "@mantine/core/TextInput";
var zt = { exports: {} }, yr = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var na;
function sd() {
  if (na)
    return V;
  na = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function j(g) {
    if (typeof g == "object" && g !== null) {
      var k = g.$$typeof;
      switch (k) {
        case r:
          switch (g = g.type, g) {
            case f:
            case u:
            case n:
            case a:
            case o:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case l:
                case d:
                case b:
                case s:
                  return g;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  function R(g) {
    return j(g) === u;
  }
  return V.AsyncMode = f, V.ConcurrentMode = u, V.ContextConsumer = c, V.ContextProvider = s, V.Element = r, V.ForwardRef = l, V.Fragment = n, V.Lazy = d, V.Memo = b, V.Portal = t, V.Profiler = a, V.StrictMode = o, V.Suspense = p, V.isAsyncMode = function(g) {
    return R(g) || j(g) === f;
  }, V.isConcurrentMode = R, V.isContextConsumer = function(g) {
    return j(g) === c;
  }, V.isContextProvider = function(g) {
    return j(g) === s;
  }, V.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === r;
  }, V.isForwardRef = function(g) {
    return j(g) === l;
  }, V.isFragment = function(g) {
    return j(g) === n;
  }, V.isLazy = function(g) {
    return j(g) === d;
  }, V.isMemo = function(g) {
    return j(g) === b;
  }, V.isPortal = function(g) {
    return j(g) === t;
  }, V.isProfiler = function(g) {
    return j(g) === a;
  }, V.isStrictMode = function(g) {
    return j(g) === o;
  }, V.isSuspense = function(g) {
    return j(g) === p;
  }, V.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === a || g === o || g === p || g === v || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === b || g.$$typeof === s || g.$$typeof === c || g.$$typeof === l || g.$$typeof === O || g.$$typeof === S || g.$$typeof === x || g.$$typeof === y);
  }, V.typeOf = j, V;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oa;
function id() {
  return oa || (oa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function j(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === u || w === a || w === o || w === p || w === v || typeof w == "object" && w !== null && (w.$$typeof === d || w.$$typeof === b || w.$$typeof === s || w.$$typeof === c || w.$$typeof === l || w.$$typeof === O || w.$$typeof === S || w.$$typeof === x || w.$$typeof === y);
    }
    function R(w) {
      if (typeof w == "object" && w !== null) {
        var ve = w.$$typeof;
        switch (ve) {
          case r:
            var De = w.type;
            switch (De) {
              case f:
              case u:
              case n:
              case a:
              case o:
              case p:
                return De;
              default:
                var Fe = De && De.$$typeof;
                switch (Fe) {
                  case c:
                  case l:
                  case d:
                  case b:
                  case s:
                    return Fe;
                  default:
                    return ve;
                }
            }
          case t:
            return ve;
        }
      }
    }
    var g = f, k = u, ie = c, fe = s, le = r, _e = l, de = n, me = d, J = b, K = t, ue = a, te = o, ce = p, ye = !1;
    function Q(w) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(w) || R(w) === f;
    }
    function _(w) {
      return R(w) === u;
    }
    function P(w) {
      return R(w) === c;
    }
    function A(w) {
      return R(w) === s;
    }
    function I(w) {
      return typeof w == "object" && w !== null && w.$$typeof === r;
    }
    function T(w) {
      return R(w) === l;
    }
    function B(w) {
      return R(w) === n;
    }
    function N(w) {
      return R(w) === d;
    }
    function D(w) {
      return R(w) === b;
    }
    function F(w) {
      return R(w) === t;
    }
    function L(w) {
      return R(w) === a;
    }
    function M(w) {
      return R(w) === o;
    }
    function se(w) {
      return R(w) === p;
    }
    H.AsyncMode = g, H.ConcurrentMode = k, H.ContextConsumer = ie, H.ContextProvider = fe, H.Element = le, H.ForwardRef = _e, H.Fragment = de, H.Lazy = me, H.Memo = J, H.Portal = K, H.Profiler = ue, H.StrictMode = te, H.Suspense = ce, H.isAsyncMode = Q, H.isConcurrentMode = _, H.isContextConsumer = P, H.isContextProvider = A, H.isElement = I, H.isForwardRef = T, H.isFragment = B, H.isLazy = N, H.isMemo = D, H.isPortal = F, H.isProfiler = L, H.isStrictMode = M, H.isSuspense = se, H.isValidElementType = j, H.typeOf = R;
  }()), H;
}
var aa;
function Gs() {
  return aa || (aa = 1, process.env.NODE_ENV === "production" ? yr.exports = sd() : yr.exports = id()), yr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var St, sa;
function ld() {
  if (sa)
    return St;
  sa = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var f = Object.getOwnPropertyNames(s).map(function(l) {
        return s[l];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        u[l] = l;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return St = o() ? Object.assign : function(a, s) {
    for (var c, f = n(a), u, l = 1; l < arguments.length; l++) {
      c = Object(arguments[l]);
      for (var p in c)
        r.call(c, p) && (f[p] = c[p]);
      if (e) {
        u = e(c);
        for (var v = 0; v < u.length; v++)
          t.call(c, u[v]) && (f[u[v]] = c[u[v]]);
      }
    }
    return f;
  }, St;
}
var Rt, ia;
function cn() {
  if (ia)
    return Rt;
  ia = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Rt = e, Rt;
}
var jt, la;
function Js() {
  return la || (la = 1, jt = Function.call.bind(Object.prototype.hasOwnProperty)), jt;
}
var xt, ca;
function cd() {
  if (ca)
    return xt;
  ca = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = cn(), t = {}, n = Js();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, c, f, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in a)
        if (n(a, l)) {
          var p;
          try {
            if (typeof a[l] != "function") {
              var v = Error(
                (f || "React class") + ": " + c + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            p = a[l](s, l, f, c, null, r);
          } catch (d) {
            p = d;
          }
          if (p && !(p instanceof Error) && e(
            (f || "React class") + ": type specification of " + c + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + c + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, xt = o, xt;
}
var Tt, fa;
function fd() {
  if (fa)
    return Tt;
  fa = 1;
  var e = Gs(), r = ld(), t = cn(), n = Js(), o = cd(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var f = "Warning: " + c;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Tt = function(c, f) {
    var u = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function p(_) {
      var P = _ && (u && _[u] || _[l]);
      if (typeof P == "function")
        return P;
    }
    var v = "<<anonymous>>", b = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: x(),
      arrayOf: j,
      element: R(),
      elementType: g(),
      instanceOf: k,
      node: _e(),
      objectOf: fe,
      oneOf: ie,
      oneOfType: le,
      shape: me,
      exact: J
    };
    function d(_, P) {
      return _ === P ? _ !== 0 || 1 / _ === 1 / P : _ !== _ && P !== P;
    }
    function y(_, P) {
      this.message = _, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function O(_) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, A = 0;
      function I(B, N, D, F, L, M, se) {
        if (F = F || v, M = M || D, se !== t) {
          if (f) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = F + ":" + D;
            !P[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[ve] = !0, A++);
          }
        }
        return N[D] == null ? B ? N[D] === null ? new y("The " + L + " `" + M + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new y("The " + L + " `" + M + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : _(N, D, F, L, M);
      }
      var T = I.bind(null, !1);
      return T.isRequired = I.bind(null, !0), T;
    }
    function S(_) {
      function P(A, I, T, B, N, D) {
        var F = A[I], L = te(F);
        if (L !== _) {
          var M = ce(F);
          return new y(
            "Invalid " + B + " `" + N + "` of type " + ("`" + M + "` supplied to `" + T + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return O(P);
    }
    function x() {
      return O(s);
    }
    function j(_) {
      function P(A, I, T, B, N) {
        if (typeof _ != "function")
          return new y("Property `" + N + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var D = A[I];
        if (!Array.isArray(D)) {
          var F = te(D);
          return new y("Invalid " + B + " `" + N + "` of type " + ("`" + F + "` supplied to `" + T + "`, expected an array."));
        }
        for (var L = 0; L < D.length; L++) {
          var M = _(D, L, T, B, N + "[" + L + "]", t);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return O(P);
    }
    function R() {
      function _(P, A, I, T, B) {
        var N = P[A];
        if (!c(N)) {
          var D = te(N);
          return new y("Invalid " + T + " `" + B + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(_);
    }
    function g() {
      function _(P, A, I, T, B) {
        var N = P[A];
        if (!e.isValidElementType(N)) {
          var D = te(N);
          return new y("Invalid " + T + " `" + B + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(_);
    }
    function k(_) {
      function P(A, I, T, B, N) {
        if (!(A[I] instanceof _)) {
          var D = _.name || v, F = Q(A[I]);
          return new y("Invalid " + B + " `" + N + "` of type " + ("`" + F + "` supplied to `" + T + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return O(P);
    }
    function ie(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function P(A, I, T, B, N) {
        for (var D = A[I], F = 0; F < _.length; F++)
          if (d(D, _[F]))
            return null;
        var L = JSON.stringify(_, function(se, w) {
          var ve = ce(w);
          return ve === "symbol" ? String(w) : w;
        });
        return new y("Invalid " + B + " `" + N + "` of value `" + String(D) + "` " + ("supplied to `" + T + "`, expected one of " + L + "."));
      }
      return O(P);
    }
    function fe(_) {
      function P(A, I, T, B, N) {
        if (typeof _ != "function")
          return new y("Property `" + N + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var D = A[I], F = te(D);
        if (F !== "object")
          return new y("Invalid " + B + " `" + N + "` of type " + ("`" + F + "` supplied to `" + T + "`, expected an object."));
        for (var L in D)
          if (n(D, L)) {
            var M = _(D, L, T, B, N + "." + L, t);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return O(P);
    }
    function le(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var P = 0; P < _.length; P++) {
        var A = _[P];
        if (typeof A != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ye(A) + " at index " + P + "."
          ), s;
      }
      function I(T, B, N, D, F) {
        for (var L = [], M = 0; M < _.length; M++) {
          var se = _[M], w = se(T, B, N, D, F, t);
          if (w == null)
            return null;
          w.data && n(w.data, "expectedType") && L.push(w.data.expectedType);
        }
        var ve = L.length > 0 ? ", expected one of type [" + L.join(", ") + "]" : "";
        return new y("Invalid " + D + " `" + F + "` supplied to " + ("`" + N + "`" + ve + "."));
      }
      return O(I);
    }
    function _e() {
      function _(P, A, I, T, B) {
        return K(P[A]) ? null : new y("Invalid " + T + " `" + B + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return O(_);
    }
    function de(_, P, A, I, T) {
      return new y(
        (_ || "React class") + ": " + P + " type `" + A + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function me(_) {
      function P(A, I, T, B, N) {
        var D = A[I], F = te(D);
        if (F !== "object")
          return new y("Invalid " + B + " `" + N + "` of type `" + F + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var L in _) {
          var M = _[L];
          if (typeof M != "function")
            return de(T, B, N, L, ce(M));
          var se = M(D, L, T, B, N + "." + L, t);
          if (se)
            return se;
        }
        return null;
      }
      return O(P);
    }
    function J(_) {
      function P(A, I, T, B, N) {
        var D = A[I], F = te(D);
        if (F !== "object")
          return new y("Invalid " + B + " `" + N + "` of type `" + F + "` " + ("supplied to `" + T + "`, expected `object`."));
        var L = r({}, A[I], _);
        for (var M in L) {
          var se = _[M];
          if (n(_, M) && typeof se != "function")
            return de(T, B, N, M, ce(se));
          if (!se)
            return new y(
              "Invalid " + B + " `" + N + "` key `" + M + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(A[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var w = se(D, M, T, B, N + "." + M, t);
          if (w)
            return w;
        }
        return null;
      }
      return O(P);
    }
    function K(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(K);
          if (_ === null || c(_))
            return !0;
          var P = p(_);
          if (P) {
            var A = P.call(_), I;
            if (P !== _.entries) {
              for (; !(I = A.next()).done; )
                if (!K(I.value))
                  return !1;
            } else
              for (; !(I = A.next()).done; ) {
                var T = I.value;
                if (T && !K(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(_, P) {
      return _ === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function te(_) {
      var P = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : ue(P, _) ? "symbol" : P;
    }
    function ce(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var P = te(_);
      if (P === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function ye(_) {
      var P = ce(_);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function Q(_) {
      return !_.constructor || !_.constructor.name ? v : _.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, Tt;
}
var Ct, ua;
function ud() {
  if (ua)
    return Ct;
  ua = 1;
  var e = cn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Ct = function() {
    function n(s, c, f, u, l, p) {
      if (p !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return a.PropTypes = a, a;
  }, Ct;
}
if (process.env.NODE_ENV !== "production") {
  var pd = Gs(), dd = !0;
  zt.exports = fd()(pd.isElement, dd);
} else
  zt.exports = ud()();
var md = zt.exports;
const Me = /* @__PURE__ */ Vi(md);
var yd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, vd = Object.defineProperty, _d = Object.defineProperties, hd = Object.getOwnPropertyDescriptors, Gr = Object.getOwnPropertySymbols, Ks = Object.prototype.hasOwnProperty, Xs = Object.prototype.propertyIsEnumerable, pa = (e, r, t) => r in e ? vd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, da = (e, r) => {
  for (var t in r || (r = {}))
    Ks.call(r, t) && pa(e, t, r[t]);
  if (Gr)
    for (var t of Gr(r))
      Xs.call(r, t) && pa(e, t, r[t]);
  return e;
}, gd = (e, r) => _d(e, hd(r)), bd = (e, r) => {
  var t = {};
  for (var n in e)
    Ks.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Gr)
    for (var n of Gr(e))
      r.indexOf(n) < 0 && Xs.call(e, n) && (t[n] = e[n]);
  return t;
}, Zs = (e, r, t) => {
  const n = Ie(
    (o, a) => {
      var s = o, { color: c = "currentColor", size: f = 24, stroke: u = 2, children: l } = s, p = bd(s, ["color", "size", "stroke", "children"]);
      return xn(
        "svg",
        da(gd(da({
          ref: a
        }, yd), {
          width: f,
          height: f,
          stroke: c,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), p),
        [...t.map(([v, b]) => xn(v, b)), ...l || []]
      );
    }
  );
  return n.propTypes = {
    color: Me.string,
    size: Me.oneOfType([Me.string, Me.number]),
    stroke: Me.oneOfType([Me.string, Me.number])
  }, n.displayName = `${r}`, n;
}, Od = Zs("arrow-right", "IconArrowRight", [
  ["path", { d: "M5 12l14 0", key: "svg-0" }],
  ["path", { d: "M13 18l6 -6", key: "svg-1" }],
  ["path", { d: "M13 6l6 6", key: "svg-2" }]
]), Pd = Zs("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]);
const wd = "_chatwidth_1aicy_1", Ed = "_cinput_1aicy_13", $d = "_chatMessagesContainer_1aicy_18", Sd = "_userMessage_1aicy_23", Rd = "_botMessage_1aicy_30", Je = {
  chatwidth: wd,
  cinput: Ed,
  chatMessagesContainer: $d,
  userMessage: Sd,
  botMessage: Rd
};
function Qs(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: jd } = Object.prototype, { getPrototypeOf: fn } = Object, lt = ((e) => (r) => {
  const t = jd.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), je = (e) => (e = e.toLowerCase(), (r) => lt(r) === e), ct = (e) => (r) => typeof r === e, { isArray: qe } = Array, rr = ct("undefined");
function xd(e) {
  return e !== null && !rr(e) && e.constructor !== null && !rr(e.constructor) && ge(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ei = je("ArrayBuffer");
function Td(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && ei(e.buffer), r;
}
const Cd = ct("string"), ge = ct("function"), ri = ct("number"), ft = (e) => e !== null && typeof e == "object", Nd = (e) => e === !0 || e === !1, vr = (e) => {
  if (lt(e) !== "object")
    return !1;
  const r = fn(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ad = je("Date"), Id = je("File"), Dd = je("Blob"), Fd = je("FileList"), Md = (e) => ft(e) && ge(e.pipe), Bd = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || ge(e.append) && ((r = lt(e)) === "formdata" || // detect form-data instance
  r === "object" && ge(e.toString) && e.toString() === "[object FormData]"));
}, Ld = je("URLSearchParams"), zd = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function sr(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), qe(e))
    for (n = 0, o = e.length; n < o; n++)
      r.call(null, e[n], n, e);
  else {
    const a = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let c;
    for (n = 0; n < s; n++)
      c = a[n], r.call(null, e[c], c, e);
  }
}
function ti(e, r) {
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length, o;
  for (; n-- > 0; )
    if (o = t[n], r === o.toLowerCase())
      return o;
  return null;
}
const ni = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), oi = (e) => !rr(e) && e !== ni;
function Ut() {
  const { caseless: e } = oi(this) && this || {}, r = {}, t = (n, o) => {
    const a = e && ti(r, o) || o;
    vr(r[a]) && vr(n) ? r[a] = Ut(r[a], n) : vr(n) ? r[a] = Ut({}, n) : qe(n) ? r[a] = n.slice() : r[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && sr(arguments[n], t);
  return r;
}
const Ud = (e, r, t, { allOwnKeys: n } = {}) => (sr(r, (o, a) => {
  t && ge(o) ? e[a] = Qs(o, t) : e[a] = o;
}, { allOwnKeys: n }), e), Wd = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), kd = (e, r, t, n) => {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, qd = (e, r, t, n) => {
  let o, a, s;
  const c = {};
  if (r = r || {}, e == null)
    return r;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!n || n(s, e, r)) && !c[s] && (r[s] = e[s], c[s] = !0);
    e = t !== !1 && fn(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, Vd = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const n = e.indexOf(r, t);
  return n !== -1 && n === t;
}, Hd = (e) => {
  if (!e)
    return null;
  if (qe(e))
    return e;
  let r = e.length;
  if (!ri(r))
    return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, Yd = ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && fn(Uint8Array)), Gd = (e, r) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    r.call(e, a[0], a[1]);
  }
}, Jd = (e, r) => {
  let t;
  const n = [];
  for (; (t = e.exec(r)) !== null; )
    n.push(t);
  return n;
}, Kd = je("HTMLFormElement"), Xd = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, o) {
    return n.toUpperCase() + o;
  }
), ma = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), Zd = je("RegExp"), ai = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), n = {};
  sr(t, (o, a) => {
    let s;
    (s = r(o, a, e)) !== !1 && (n[a] = s || o);
  }), Object.defineProperties(e, n);
}, Qd = (e) => {
  ai(e, (r, t) => {
    if (ge(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = e[t];
    if (ge(n)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, em = (e, r) => {
  const t = {}, n = (o) => {
    o.forEach((a) => {
      t[a] = !0;
    });
  };
  return qe(e) ? n(e) : n(String(e).split(r)), t;
}, rm = () => {
}, tm = (e, r) => (e = +e, Number.isFinite(e) ? e : r), Nt = "abcdefghijklmnopqrstuvwxyz", ya = "0123456789", si = {
  DIGIT: ya,
  ALPHA: Nt,
  ALPHA_DIGIT: Nt + Nt.toUpperCase() + ya
}, nm = (e = 16, r = si.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = r;
  for (; e--; )
    t += r[Math.random() * n | 0];
  return t;
};
function om(e) {
  return !!(e && ge(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const am = (e) => {
  const r = new Array(10), t = (n, o) => {
    if (ft(n)) {
      if (r.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        r[o] = n;
        const a = qe(n) ? [] : {};
        return sr(n, (s, c) => {
          const f = t(s, o + 1);
          !rr(f) && (a[c] = f);
        }), r[o] = void 0, a;
      }
    }
    return n;
  };
  return t(e, 0);
}, sm = je("AsyncFunction"), im = (e) => e && (ft(e) || ge(e)) && ge(e.then) && ge(e.catch), m = {
  isArray: qe,
  isArrayBuffer: ei,
  isBuffer: xd,
  isFormData: Bd,
  isArrayBufferView: Td,
  isString: Cd,
  isNumber: ri,
  isBoolean: Nd,
  isObject: ft,
  isPlainObject: vr,
  isUndefined: rr,
  isDate: Ad,
  isFile: Id,
  isBlob: Dd,
  isRegExp: Zd,
  isFunction: ge,
  isStream: Md,
  isURLSearchParams: Ld,
  isTypedArray: Yd,
  isFileList: Fd,
  forEach: sr,
  merge: Ut,
  extend: Ud,
  trim: zd,
  stripBOM: Wd,
  inherits: kd,
  toFlatObject: qd,
  kindOf: lt,
  kindOfTest: je,
  endsWith: Vd,
  toArray: Hd,
  forEachEntry: Gd,
  matchAll: Jd,
  isHTMLForm: Kd,
  hasOwnProperty: ma,
  hasOwnProp: ma,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ai,
  freezeMethods: Qd,
  toObjectSet: em,
  toCamelCase: Xd,
  noop: rm,
  toFiniteNumber: tm,
  findKey: ti,
  global: ni,
  isContextDefined: oi,
  ALPHABET: si,
  generateString: nm,
  isSpecCompliantForm: om,
  toJSONObject: am,
  isAsyncFn: sm,
  isThenable: im
};
function W(e, r, t, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), n && (this.request = n), o && (this.response = o);
}
m.inherits(W, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: m.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ii = W.prototype, li = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  li[e] = { value: e };
});
Object.defineProperties(W, li);
Object.defineProperty(ii, "isAxiosError", { value: !0 });
W.from = (e, r, t, n, o, a) => {
  const s = Object.create(ii);
  return m.toFlatObject(e, s, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), W.call(s, e.message, r, t, n, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const lm = null;
function Wt(e) {
  return m.isPlainObject(e) || m.isArray(e);
}
function ci(e) {
  return m.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function va(e, r, t) {
  return e ? e.concat(r).map(function(o, a) {
    return o = ci(o), !t && a ? "[" + o + "]" : o;
  }).join(t ? "." : "") : r;
}
function cm(e) {
  return m.isArray(e) && !e.some(Wt);
}
const fm = m.toFlatObject(m, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function ut(e, r, t) {
  if (!m.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), t = m.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, O) {
    return !m.isUndefined(O[y]);
  });
  const n = t.metaTokens, o = t.visitor || l, a = t.dots, s = t.indexes, f = (t.Blob || typeof Blob < "u" && Blob) && m.isSpecCompliantForm(r);
  if (!m.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null)
      return "";
    if (m.isDate(d))
      return d.toISOString();
    if (!f && m.isBlob(d))
      throw new W("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(d) || m.isTypedArray(d) ? f && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, y, O) {
    let S = d;
    if (d && !O && typeof d == "object") {
      if (m.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), d = JSON.stringify(d);
      else if (m.isArray(d) && cm(d) || (m.isFileList(d) || m.endsWith(y, "[]")) && (S = m.toArray(d)))
        return y = ci(y), S.forEach(function(j, R) {
          !(m.isUndefined(j) || j === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? va([y], R, a) : s === null ? y : y + "[]",
            u(j)
          );
        }), !1;
    }
    return Wt(d) ? !0 : (r.append(va(O, y, a), u(d)), !1);
  }
  const p = [], v = Object.assign(fm, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Wt
  });
  function b(d, y) {
    if (!m.isUndefined(d)) {
      if (p.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      p.push(d), m.forEach(d, function(S, x) {
        (!(m.isUndefined(S) || S === null) && o.call(
          r,
          S,
          m.isString(x) ? x.trim() : x,
          y,
          v
        )) === !0 && b(S, y ? y.concat(x) : [x]);
      }), p.pop();
    }
  }
  if (!m.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), r;
}
function _a(e) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return r[n];
  });
}
function un(e, r) {
  this._pairs = [], e && ut(e, this, r);
}
const fi = un.prototype;
fi.append = function(r, t) {
  this._pairs.push([r, t]);
};
fi.toString = function(r) {
  const t = r ? function(n) {
    return r.call(this, n, _a);
  } : _a;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function um(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ui(e, r, t) {
  if (!r)
    return e;
  const n = t && t.encode || um, o = t && t.serialize;
  let a;
  if (o ? a = o(r, t) : a = m.isURLSearchParams(r) ? r.toString() : new un(r, t).toString(n), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class pm {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(r, t, n) {
    return this.handlers.push({
      fulfilled: r,
      rejected: t,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(r) {
    m.forEach(this.handlers, function(n) {
      n !== null && r(n);
    });
  }
}
const ha = pm, pi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, dm = typeof URLSearchParams < "u" ? URLSearchParams : un, mm = typeof FormData < "u" ? FormData : null, ym = typeof Blob < "u" ? Blob : null, vm = {
  isBrowser: !0,
  classes: {
    URLSearchParams: dm,
    FormData: mm,
    Blob: ym
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, di = typeof window < "u" && typeof document < "u", _m = ((e) => di && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), hm = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), gm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: di,
  hasStandardBrowserEnv: _m,
  hasStandardBrowserWebWorkerEnv: hm
}, Symbol.toStringTag, { value: "Module" })), Se = {
  ...gm,
  ...vm
};
function bm(e, r) {
  return ut(e, new Se.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, o, a) {
      return Se.isNode && m.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function Om(e) {
  return m.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Pm(e) {
  const r = {}, t = Object.keys(e);
  let n;
  const o = t.length;
  let a;
  for (n = 0; n < o; n++)
    a = t[n], r[a] = e[a];
  return r;
}
function mi(e) {
  function r(t, n, o, a) {
    let s = t[a++];
    const c = Number.isFinite(+s), f = a >= t.length;
    return s = !s && m.isArray(o) ? o.length : s, f ? (m.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !c) : ((!o[s] || !m.isObject(o[s])) && (o[s] = []), r(t, n, o[s], a) && m.isArray(o[s]) && (o[s] = Pm(o[s])), !c);
  }
  if (m.isFormData(e) && m.isFunction(e.entries)) {
    const t = {};
    return m.forEachEntry(e, (n, o) => {
      r(Om(n), o, t, 0);
    }), t;
  }
  return null;
}
function wm(e, r, t) {
  if (m.isString(e))
    try {
      return (r || JSON.parse)(e), m.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(e);
}
const pn = {
  transitional: pi,
  adapter: ["xhr", "http"],
  transformRequest: [function(r, t) {
    const n = t.getContentType() || "", o = n.indexOf("application/json") > -1, a = m.isObject(r);
    if (a && m.isHTMLForm(r) && (r = new FormData(r)), m.isFormData(r))
      return o && o ? JSON.stringify(mi(r)) : r;
    if (m.isArrayBuffer(r) || m.isBuffer(r) || m.isStream(r) || m.isFile(r) || m.isBlob(r))
      return r;
    if (m.isArrayBufferView(r))
      return r.buffer;
    if (m.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let c;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return bm(r, this.formSerializer).toString();
      if ((c = m.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ut(
          c ? { "files[]": r } : r,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || o ? (t.setContentType("application/json", !1), wm(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || pn.transitional, n = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (r && m.isString(r) && (n && !this.responseType || o)) {
      const s = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(r);
      } catch (c) {
        if (s)
          throw c.name === "SyntaxError" ? W.from(c, W.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return r;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Se.classes.FormData,
    Blob: Se.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  pn.headers[e] = {};
});
const dn = pn, Em = m.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), $m = (e) => {
  const r = {};
  let t, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!t || r[t] && Em[t]) && (t === "set-cookie" ? r[t] ? r[t].push(n) : r[t] = [n] : r[t] = r[t] ? r[t] + ", " + n : n);
  }), r;
}, ga = Symbol("internals");
function Ke(e) {
  return e && String(e).trim().toLowerCase();
}
function _r(e) {
  return e === !1 || e == null ? e : m.isArray(e) ? e.map(_r) : String(e);
}
function Sm(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(e); )
    r[n[1]] = n[2];
  return r;
}
const Rm = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function At(e, r, t, n, o) {
  if (m.isFunction(n))
    return n.call(this, r, t);
  if (o && (r = t), !!m.isString(r)) {
    if (m.isString(n))
      return r.indexOf(n) !== -1;
    if (m.isRegExp(n))
      return n.test(r);
  }
}
function jm(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function xm(e, r) {
  const t = m.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + t, {
      value: function(o, a, s) {
        return this[n].call(this, r, o, a, s);
      },
      configurable: !0
    });
  });
}
class pt {
  constructor(r) {
    r && this.set(r);
  }
  set(r, t, n) {
    const o = this;
    function a(c, f, u) {
      const l = Ke(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = m.findKey(o, l);
      (!p || o[p] === void 0 || u === !0 || u === void 0 && o[p] !== !1) && (o[p || f] = _r(c));
    }
    const s = (c, f) => m.forEach(c, (u, l) => a(u, l, f));
    return m.isPlainObject(r) || r instanceof this.constructor ? s(r, t) : m.isString(r) && (r = r.trim()) && !Rm(r) ? s($m(r), t) : r != null && a(t, r, n), this;
  }
  get(r, t) {
    if (r = Ke(r), r) {
      const n = m.findKey(this, r);
      if (n) {
        const o = this[n];
        if (!t)
          return o;
        if (t === !0)
          return Sm(o);
        if (m.isFunction(t))
          return t.call(this, o, n);
        if (m.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, t) {
    if (r = Ke(r), r) {
      const n = m.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!t || At(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let o = !1;
    function a(s) {
      if (s = Ke(s), s) {
        const c = m.findKey(n, s);
        c && (!t || At(n, n[c], c, t)) && (delete n[c], o = !0);
      }
    }
    return m.isArray(r) ? r.forEach(a) : a(r), o;
  }
  clear(r) {
    const t = Object.keys(this);
    let n = t.length, o = !1;
    for (; n--; ) {
      const a = t[n];
      (!r || At(this, this[a], a, r, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(r) {
    const t = this, n = {};
    return m.forEach(this, (o, a) => {
      const s = m.findKey(n, a);
      if (s) {
        t[s] = _r(o), delete t[a];
        return;
      }
      const c = r ? jm(a) : String(a).trim();
      c !== a && delete t[a], t[c] = _r(o), n[c] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const t = /* @__PURE__ */ Object.create(null);
    return m.forEach(this, (n, o) => {
      n != null && n !== !1 && (t[o] = r && m.isArray(n) ? n.join(", ") : n);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, t]) => r + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...t) {
    const n = new this(r);
    return t.forEach((o) => n.set(o)), n;
  }
  static accessor(r) {
    const n = (this[ga] = this[ga] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const c = Ke(s);
      n[c] || (xm(o, s), n[c] = !0);
    }
    return m.isArray(r) ? r.forEach(a) : a(r), this;
  }
}
pt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.reduceDescriptors(pt.prototype, ({ value: e }, r) => {
  let t = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(n) {
      this[t] = n;
    }
  };
});
m.freezeMethods(pt);
const Ce = pt;
function It(e, r) {
  const t = this || dn, n = r || t, o = Ce.from(n.headers);
  let a = n.data;
  return m.forEach(e, function(c) {
    a = c.call(t, a, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), a;
}
function yi(e) {
  return !!(e && e.__CANCEL__);
}
function ir(e, r, t) {
  W.call(this, e ?? "canceled", W.ERR_CANCELED, r, t), this.name = "CanceledError";
}
m.inherits(ir, W, {
  __CANCEL__: !0
});
function Tm(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? e(t) : r(new W(
    "Request failed with status code " + t.status,
    [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const Cm = Se.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(t, n, o, a, s, c) {
        const f = [];
        f.push(t + "=" + encodeURIComponent(n)), m.isNumber(o) && f.push("expires=" + new Date(o).toGMTString()), m.isString(a) && f.push("path=" + a), m.isString(s) && f.push("domain=" + s), c === !0 && f.push("secure"), document.cookie = f.join("; ");
      },
      read: function(t) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(t) {
        this.write(t, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Nm(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Am(e, r) {
  return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function vi(e, r) {
  return e && !Nm(r) ? Am(e, r) : r;
}
const Im = Se.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const r = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
    let n;
    function o(a) {
      let s = a;
      return r && (t.setAttribute("href", s), s = t.href), t.setAttribute("href", s), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      };
    }
    return n = o(window.location.href), function(s) {
      const c = m.isString(s) ? o(s) : s;
      return c.protocol === n.protocol && c.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Dm(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function Fm(e, r) {
  e = e || 10;
  const t = new Array(e), n = new Array(e);
  let o = 0, a = 0, s;
  return r = r !== void 0 ? r : 1e3, function(f) {
    const u = Date.now(), l = n[a];
    s || (s = u), t[o] = f, n[o] = u;
    let p = a, v = 0;
    for (; p !== o; )
      v += t[p++], p = p % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), u - s < r)
      return;
    const b = l && u - l;
    return b ? Math.round(v * 1e3 / b) : void 0;
  };
}
function ba(e, r) {
  let t = 0;
  const n = Fm(50, 250);
  return (o) => {
    const a = o.loaded, s = o.lengthComputable ? o.total : void 0, c = a - t, f = n(c), u = a <= s;
    t = a;
    const l = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: c,
      rate: f || void 0,
      estimated: f && s && u ? (s - a) / f : void 0,
      event: o
    };
    l[r ? "download" : "upload"] = !0, e(l);
  };
}
const Mm = typeof XMLHttpRequest < "u", Bm = Mm && function(e) {
  return new Promise(function(t, n) {
    let o = e.data;
    const a = Ce.from(e.headers).normalize(), s = e.responseType;
    let c;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    let u;
    if (m.isFormData(o)) {
      if (Se.hasStandardBrowserEnv || Se.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((u = a.getContentType()) !== !1) {
        const [d, ...y] = u ? u.split(";").map((O) => O.trim()).filter(Boolean) : [];
        a.setContentType([d || "multipart/form-data", ...y].join("; "));
      }
    }
    let l = new XMLHttpRequest();
    if (e.auth) {
      const d = e.auth.username || "", y = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(d + ":" + y));
    }
    const p = vi(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), ui(p, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function v() {
      if (!l)
        return;
      const d = Ce.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), O = {
        data: !s || s === "text" || s === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: d,
        config: e,
        request: l
      };
      Tm(function(x) {
        t(x), f();
      }, function(x) {
        n(x), f();
      }, O), l = null;
    }
    if ("onloadend" in l ? l.onloadend = v : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, l.onabort = function() {
      l && (n(new W("Request aborted", W.ECONNABORTED, e, l)), l = null);
    }, l.onerror = function() {
      n(new W("Network Error", W.ERR_NETWORK, e, l)), l = null;
    }, l.ontimeout = function() {
      let y = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const O = e.transitional || pi;
      e.timeoutErrorMessage && (y = e.timeoutErrorMessage), n(new W(
        y,
        O.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
        e,
        l
      )), l = null;
    }, Se.hasStandardBrowserEnv) {
      const d = Im(p) && e.xsrfCookieName && Cm.read(e.xsrfCookieName);
      d && a.set(e.xsrfHeaderName, d);
    }
    o === void 0 && a.setContentType(null), "setRequestHeader" in l && m.forEach(a.toJSON(), function(y, O) {
      l.setRequestHeader(O, y);
    }), m.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), s && s !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", ba(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", ba(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (d) => {
      l && (n(!d || d.type ? new ir(null, e, l) : d), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const b = Dm(p);
    if (b && Se.protocols.indexOf(b) === -1) {
      n(new W("Unsupported protocol " + b + ":", W.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(o || null);
  });
}, kt = {
  http: lm,
  xhr: Bm
};
m.forEach(kt, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const Oa = (e) => `- ${e}`, Lm = (e) => m.isFunction(e) || e === null || e === !1, _i = {
  getAdapter: (e) => {
    e = m.isArray(e) ? e : [e];
    const { length: r } = e;
    let t, n;
    const o = {};
    for (let a = 0; a < r; a++) {
      t = e[a];
      let s;
      if (n = t, !Lm(t) && (n = kt[(s = String(t)).toLowerCase()], n === void 0))
        throw new W(`Unknown adapter '${s}'`);
      if (n)
        break;
      o[s || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(o).map(
        ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = r ? a.length > 1 ? `since :
` + a.map(Oa).join(`
`) : " " + Oa(a[0]) : "as no adapter specified";
      throw new W(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: kt
};
function Dt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ir(null, e);
}
function Pa(e) {
  return Dt(e), e.headers = Ce.from(e.headers), e.data = It.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), _i.getAdapter(e.adapter || dn.adapter)(e).then(function(n) {
    return Dt(e), n.data = It.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Ce.from(n.headers), n;
  }, function(n) {
    return yi(n) || (Dt(e), n && n.response && (n.response.data = It.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Ce.from(n.response.headers))), Promise.reject(n);
  });
}
const wa = (e) => e instanceof Ce ? e.toJSON() : e;
function ke(e, r) {
  r = r || {};
  const t = {};
  function n(u, l, p) {
    return m.isPlainObject(u) && m.isPlainObject(l) ? m.merge.call({ caseless: p }, u, l) : m.isPlainObject(l) ? m.merge({}, l) : m.isArray(l) ? l.slice() : l;
  }
  function o(u, l, p) {
    if (m.isUndefined(l)) {
      if (!m.isUndefined(u))
        return n(void 0, u, p);
    } else
      return n(u, l, p);
  }
  function a(u, l) {
    if (!m.isUndefined(l))
      return n(void 0, l);
  }
  function s(u, l) {
    if (m.isUndefined(l)) {
      if (!m.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, l);
  }
  function c(u, l, p) {
    if (p in r)
      return n(u, l);
    if (p in e)
      return n(void 0, u);
  }
  const f = {
    url: a,
    method: a,
    data: a,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: c,
    headers: (u, l) => o(wa(u), wa(l), !0)
  };
  return m.forEach(Object.keys(Object.assign({}, e, r)), function(l) {
    const p = f[l] || o, v = p(e[l], r[l], l);
    m.isUndefined(v) && p !== c || (t[l] = v);
  }), t;
}
const hi = "1.6.1", mn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  mn[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const Ea = {};
mn.transitional = function(r, t, n) {
  function o(a, s) {
    return "[Axios v" + hi + "] Transitional option '" + a + "'" + s + (n ? ". " + n : "");
  }
  return (a, s, c) => {
    if (r === !1)
      throw new W(
        o(s, " has been removed" + (t ? " in " + t : "")),
        W.ERR_DEPRECATED
      );
    return t && !Ea[s] && (Ea[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(a, s, c) : !0;
  };
};
function zm(e, r, t) {
  if (typeof e != "object")
    throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], s = r[a];
    if (s) {
      const c = e[a], f = c === void 0 || s(c, a, e);
      if (f !== !0)
        throw new W("option " + a + " must be " + f, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new W("Unknown option " + a, W.ERR_BAD_OPTION);
  }
}
const qt = {
  assertOptions: zm,
  validators: mn
}, Ne = qt.validators;
class Jr {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new ha(),
      response: new ha()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(r, t) {
    typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = ke(this.defaults, t);
    const { transitional: n, paramsSerializer: o, headers: a } = t;
    n !== void 0 && qt.assertOptions(n, {
      silentJSONParsing: Ne.transitional(Ne.boolean),
      forcedJSONParsing: Ne.transitional(Ne.boolean),
      clarifyTimeoutError: Ne.transitional(Ne.boolean)
    }, !1), o != null && (m.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : qt.assertOptions(o, {
      encode: Ne.function,
      serialize: Ne.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = a && m.merge(
      a.common,
      a[t.method]
    );
    a && m.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete a[d];
      }
    ), t.headers = Ce.concat(s, a);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(t) === !1 || (f = f && y.synchronous, c.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l, p = 0, v;
    if (!f) {
      const d = [Pa.bind(this), void 0];
      for (d.unshift.apply(d, c), d.push.apply(d, u), v = d.length, l = Promise.resolve(t); p < v; )
        l = l.then(d[p++], d[p++]);
      return l;
    }
    v = c.length;
    let b = t;
    for (p = 0; p < v; ) {
      const d = c[p++], y = c[p++];
      try {
        b = d(b);
      } catch (O) {
        y.call(this, O);
        break;
      }
    }
    try {
      l = Pa.call(this, b);
    } catch (d) {
      return Promise.reject(d);
    }
    for (p = 0, v = u.length; p < v; )
      l = l.then(u[p++], u[p++]);
    return l;
  }
  getUri(r) {
    r = ke(this.defaults, r);
    const t = vi(r.baseURL, r.url);
    return ui(t, r.params, r.paramsSerializer);
  }
}
m.forEach(["delete", "get", "head", "options"], function(r) {
  Jr.prototype[r] = function(t, n) {
    return this.request(ke(n || {}, {
      method: r,
      url: t,
      data: (n || {}).data
    }));
  };
});
m.forEach(["post", "put", "patch"], function(r) {
  function t(n) {
    return function(a, s, c) {
      return this.request(ke(c || {}, {
        method: r,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  Jr.prototype[r] = t(), Jr.prototype[r + "Form"] = t(!0);
});
const hr = Jr;
class yn {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(a) {
      t = a;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const s = new Promise((c) => {
        n.subscribe(c), a = c;
      }).then(o);
      return s.cancel = function() {
        n.unsubscribe(a);
      }, s;
    }, r(function(a, s, c) {
      n.reason || (n.reason = new ir(a, s, c), t(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(r);
    t !== -1 && this._listeners.splice(t, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new yn(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
}
const Um = yn;
function Wm(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function km(e) {
  return m.isObject(e) && e.isAxiosError === !0;
}
const Vt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Vt).forEach(([e, r]) => {
  Vt[r] = e;
});
const qm = Vt;
function gi(e) {
  const r = new hr(e), t = Qs(hr.prototype.request, r);
  return m.extend(t, hr.prototype, r, { allOwnKeys: !0 }), m.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(o) {
    return gi(ke(e, o));
  }, t;
}
const oe = gi(dn);
oe.Axios = hr;
oe.CanceledError = ir;
oe.CancelToken = Um;
oe.isCancel = yi;
oe.VERSION = hi;
oe.toFormData = ut;
oe.AxiosError = W;
oe.Cancel = oe.CanceledError;
oe.all = function(r) {
  return Promise.all(r);
};
oe.spread = Wm;
oe.isAxiosError = km;
oe.mergeConfig = ke;
oe.AxiosHeaders = Ce;
oe.formToJSON = (e) => mi(m.isHTMLForm(e) ? new FormData(e) : e);
oe.getAdapter = _i.getAdapter;
oe.HttpStatusCode = qm;
oe.default = oe;
const Vm = oe, Hm = () => /* @__PURE__ */ X.jsx(an, { children: /* @__PURE__ */ X.jsxs(or, { radius: "sm", withBorder: !0, p: "xl", children: [
  /* @__PURE__ */ X.jsx(er, { size: "xl", children: "Welcome to the AI Chatbot!" }),
  /* @__PURE__ */ X.jsx(er, { size: "md", children: "Start a conversation or try some examples." })
] }) }), Ym = ({ messages: e, onSendMessage: r }) => {
  const [t, n] = Be(""), [o, a] = Be(!1), s = (f) => {
    n(f.target.value);
  }, c = async (f) => {
    if (f.preventDefault(), t.trim()) {
      const u = t.trim();
      r({ type: "user", text: u }), n(""), a(!0);
      try {
        const p = (await Vm.post("http://127.0.0.1:80/chat/", {
          message: u
        })).data.response;
        console.log("Bot Response:", p), r(p ? { type: "bot", text: p } : { type: "bot", text: "Sorry, I didn't understand that." });
      } catch (l) {
        console.error("Error fetching bot's response:", l), r({ type: "bot", text: "An error occurred while fetching the response." });
      } finally {
        a(!1);
      }
    }
  };
  return /* @__PURE__ */ X.jsxs(
    it,
    {
      shadow: "sm",
      padding: "lg",
      radius: "md",
      withBorder: !0,
      className: Je.chatwidth,
      children: [
        /* @__PURE__ */ X.jsx("div", { className: Je.chatMessagesContainer, style: { flexGrow: 1 }, children: e.length === 0 && !o ? /* @__PURE__ */ X.jsx(Hm, {}) : e.map((f, u) => /* @__PURE__ */ X.jsxs("div", { className: f.type === "user" ? Je.userMessage : Je.botMessage, children: [
          /* @__PURE__ */ X.jsx(
            or,
            {
              shadow: "xs",
              radius: "lg",
              withBorder: !0,
              style: {},
              children: /* @__PURE__ */ X.jsxs(Cr, { children: [
                /* @__PURE__ */ X.jsx(
                  at,
                  {
                    size: 40,
                    color: f.type === "bot" ? "blue" : "teal",
                    children: f.type === "bot" ? "B" : "U"
                  }
                ),
                /* @__PURE__ */ X.jsx(er, { children: f.text })
              ] })
            }
          ),
          /* @__PURE__ */ X.jsx(sn, {})
        ] }, u)) }),
        /* @__PURE__ */ X.jsx(Cr, { children: /* @__PURE__ */ X.jsx("form", { onSubmit: c, children: /* @__PURE__ */ X.jsx(
          ln,
          {
            radius: "xl",
            size: "md",
            placeholder: "Ask a question",
            value: t,
            onChange: s,
            rightSectionWidth: 40,
            leftSection: /* @__PURE__ */ X.jsx(
              Pd,
              {
                style: { width: re(18), height: re(18) },
                stroke: 1.5
              }
            ),
            rightSection: /* @__PURE__ */ X.jsx(
              ar,
              {
                type: "submit",
                size: 32,
                radius: "xl",
                color: "red",
                variant: "filled",
                children: /* @__PURE__ */ X.jsx(
                  Od,
                  {
                    style: { width: re(18), height: re(18) },
                    stroke: 1.5
                  }
                )
              }
            ),
            className: Je.cinput
          }
        ) }) })
      ]
    }
  );
}, Km = () => {
  const [e, r] = Be(!1), [t, n] = Be([]), o = () => {
    r(!e);
  }, a = (s) => {
    n((c) => [...c, s]);
  };
  return /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
    /* @__PURE__ */ X.jsx(tn, { position: { bottom: 20, right: 20 }, children: /* @__PURE__ */ X.jsx(ar, { variant: "filled", size: "xl", radius: "xl", "aria-label": "Chat", onClick: o }) }),
    e && /* @__PURE__ */ X.jsx(Ym, { messages: t, onSendMessage: a })
  ] });
};
export {
  Km as ChatWidget
};
