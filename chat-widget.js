import $, { createContext as ir, useContext as Ye, useMemo as hl, useLayoutEffect as _l, useEffect as Er, useState as Me, useRef as Za, useCallback as Gn, useId as bl, forwardRef as Fe, Children as Qa, cloneElement as gl, createElement as Jn } from "react";
import { createPortal as Ol } from "react-dom";
function Pl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jt = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function wl() {
  if (Kn)
    return Ke;
  Kn = 1;
  var e = $, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, u, d) {
    var f, c = {}, m = null, O = null;
    d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (O = u.ref);
    for (f in u)
      n.call(u, f) && !a.hasOwnProperty(f) && (c[f] = u[f]);
    if (i && i.defaultProps)
      for (f in u = i.defaultProps, u)
        c[f] === void 0 && (c[f] = u[f]);
    return { $$typeof: r, type: i, key: m, ref: O, props: c, _owner: o.current };
  }
  return Ke.Fragment = t, Ke.jsx = s, Ke.jsxs = s, Ke;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function $l() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = $, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), y = Symbol.iterator, p = "@@iterator";
    function P(l) {
      if (l === null || typeof l != "object")
        return null;
      var b = y && l[y] || l[p];
      return typeof b == "function" ? b : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(l) {
      {
        for (var b = arguments.length, S = new Array(b > 1 ? b - 1 : 0), N = 1; N < b; N++)
          S[N - 1] = arguments[N];
        x("error", l, S);
      }
    }
    function x(l, b, S) {
      {
        var N = R.ReactDebugCurrentFrame, q = N.getStackAddendum();
        q !== "" && (b += "%s", S = S.concat([q]));
        var G = S.map(function(V) {
          return String(V);
        });
        G.unshift("Warning: " + b), Function.prototype.apply.call(console[l], console, G);
      }
    }
    var j = !1, g = !1, U = !1, ie = !1, fe = !1, le;
    le = Symbol.for("react.module.reference");
    function _e(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === a || fe || l === o || l === d || l === f || ie || l === O || j || g || U || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === c || l.$$typeof === s || l.$$typeof === i || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === le || l.getModuleId !== void 0));
    }
    function pe(l, b, S) {
      var N = l.displayName;
      if (N)
        return N;
      var q = b.displayName || b.name || "";
      return q !== "" ? S + "(" + q + ")" : S;
    }
    function me(l) {
      return l.displayName || "Context";
    }
    function X(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case i:
            var b = l;
            return me(b) + ".Consumer";
          case s:
            var S = l;
            return me(S._context) + ".Provider";
          case u:
            return pe(l, l.render, "ForwardRef");
          case c:
            var N = l.displayName || null;
            return N !== null ? N : X(l.type) || "Memo";
          case m: {
            var q = l, G = q._payload, V = q._init;
            try {
              return X(V(G));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, ue = 0, te, ce, ve, ee, _, w, I;
    function D() {
    }
    D.__reactDisabledLog = !0;
    function T() {
      {
        if (ue === 0) {
          te = console.log, ce = console.info, ve = console.warn, ee = console.error, _ = console.group, w = console.groupCollapsed, I = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: D,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        ue++;
      }
    }
    function L() {
      {
        if (ue--, ue === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, l, {
              value: te
            }),
            info: Z({}, l, {
              value: ce
            }),
            warn: Z({}, l, {
              value: ve
            }),
            error: Z({}, l, {
              value: ee
            }),
            group: Z({}, l, {
              value: _
            }),
            groupCollapsed: Z({}, l, {
              value: w
            }),
            groupEnd: Z({}, l, {
              value: I
            })
          });
        }
        ue < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var A = R.ReactCurrentDispatcher, M;
    function F(l, b, S) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (q) {
            var N = q.stack.trim().match(/\n( *(at )?)/);
            M = N && N[1] || "";
          }
        return `
` + M + l;
      }
    }
    var z = !1, k;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      k = new se();
    }
    function E(l, b) {
      if (!l || z)
        return "";
      {
        var S = k.get(l);
        if (S !== void 0)
          return S;
      }
      var N;
      z = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var G;
      G = A.current, A.current = null, T();
      try {
        if (b) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (Te) {
              N = Te;
            }
            Reflect.construct(l, [], V);
          } else {
            try {
              V.call();
            } catch (Te) {
              N = Te;
            }
            l.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Te) {
            N = Te;
          }
          l();
        }
      } catch (Te) {
        if (Te && N && typeof Te.stack == "string") {
          for (var B = Te.stack.split(`
`), de = N.stack.split(`
`), re = B.length - 1, ne = de.length - 1; re >= 1 && ne >= 0 && B[re] !== de[ne]; )
            ne--;
          for (; re >= 1 && ne >= 0; re--, ne--)
            if (B[re] !== de[ne]) {
              if (re !== 1 || ne !== 1)
                do
                  if (re--, ne--, ne < 0 || B[re] !== de[ne]) {
                    var be = `
` + B[re].replace(" at new ", " at ");
                    return l.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", l.displayName)), typeof l == "function" && k.set(l, be), be;
                  }
                while (re >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        z = !1, A.current = G, L(), Error.prepareStackTrace = q;
      }
      var We = l ? l.displayName || l.name : "", Yn = We ? F(We) : "";
      return typeof l == "function" && k.set(l, Yn), Yn;
    }
    function ye(l, b, S) {
      return E(l, !1);
    }
    function ke(l) {
      var b = l.prototype;
      return !!(b && b.isReactComponent);
    }
    function Le(l, b, S) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return E(l, ke(l));
      if (typeof l == "string")
        return F(l);
      switch (l) {
        case d:
          return F("Suspense");
        case f:
          return F("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return ye(l.render);
          case c:
            return Le(l.type, b, S);
          case m: {
            var N = l, q = N._payload, G = N._init;
            try {
              return Le(G(q), b, S);
            } catch {
            }
          }
        }
      return "";
    }
    var pr = Object.prototype.hasOwnProperty, Dn = {}, Mn = R.ReactDebugCurrentFrame;
    function mr(l) {
      if (l) {
        var b = l._owner, S = Le(l.type, l._source, b ? b.type : null);
        Mn.setExtraStackFrame(S);
      } else
        Mn.setExtraStackFrame(null);
    }
    function Xi(l, b, S, N, q) {
      {
        var G = Function.call.bind(pr);
        for (var V in l)
          if (G(l, V)) {
            var B = void 0;
            try {
              if (typeof l[V] != "function") {
                var de = Error((N || "React class") + ": " + S + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              B = l[V](b, V, N, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              B = re;
            }
            B && !(B instanceof Error) && (mr(q), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", S, V, typeof B), mr(null)), B instanceof Error && !(B.message in Dn) && (Dn[B.message] = !0, mr(q), C("Failed %s type: %s", S, B.message), mr(null));
          }
      }
    }
    var Zi = Array.isArray;
    function Ot(l) {
      return Zi(l);
    }
    function Qi(l) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, S = b && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return S;
      }
    }
    function el(l) {
      try {
        return Fn(l), !1;
      } catch {
        return !0;
      }
    }
    function Fn(l) {
      return "" + l;
    }
    function kn(l) {
      if (el(l))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qi(l)), Fn(l);
    }
    var Je = R.ReactCurrentOwner, rl = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ln, zn, Pt;
    Pt = {};
    function tl(l) {
      if (pr.call(l, "ref")) {
        var b = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function nl(l) {
      if (pr.call(l, "key")) {
        var b = Object.getOwnPropertyDescriptor(l, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function ol(l, b) {
      if (typeof l.ref == "string" && Je.current && b && Je.current.stateNode !== b) {
        var S = X(Je.current.type);
        Pt[S] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(Je.current.type), l.ref), Pt[S] = !0);
      }
    }
    function al(l, b) {
      {
        var S = function() {
          Ln || (Ln = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        S.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function sl(l, b) {
      {
        var S = function() {
          zn || (zn = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        S.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var il = function(l, b, S, N, q, G, V) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: l,
        key: b,
        ref: S,
        props: V,
        // Record the component responsible for creating this element.
        _owner: G
      };
      return B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(B, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function ll(l, b, S, N, q) {
      {
        var G, V = {}, B = null, de = null;
        S !== void 0 && (kn(S), B = "" + S), nl(b) && (kn(b.key), B = "" + b.key), tl(b) && (de = b.ref, ol(b, q));
        for (G in b)
          pr.call(b, G) && !rl.hasOwnProperty(G) && (V[G] = b[G]);
        if (l && l.defaultProps) {
          var re = l.defaultProps;
          for (G in re)
            V[G] === void 0 && (V[G] = re[G]);
        }
        if (B || de) {
          var ne = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          B && al(V, ne), de && sl(V, ne);
        }
        return il(l, B, de, q, N, Je.current, V);
      }
    }
    var wt = R.ReactCurrentOwner, Bn = R.ReactDebugCurrentFrame;
    function Ve(l) {
      if (l) {
        var b = l._owner, S = Le(l.type, l._source, b ? b.type : null);
        Bn.setExtraStackFrame(S);
      } else
        Bn.setExtraStackFrame(null);
    }
    var $t;
    $t = !1;
    function Et(l) {
      return typeof l == "object" && l !== null && l.$$typeof === r;
    }
    function Vn() {
      {
        if (wt.current) {
          var l = X(wt.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function cl(l) {
      {
        if (l !== void 0) {
          var b = l.fileName.replace(/^.*[\\\/]/, ""), S = l.lineNumber;
          return `

Check your code at ` + b + ":" + S + ".";
        }
        return "";
      }
    }
    var Wn = {};
    function fl(l) {
      {
        var b = Vn();
        if (!b) {
          var S = typeof l == "string" ? l : l.displayName || l.name;
          S && (b = `

Check the top-level render call using <` + S + ">.");
        }
        return b;
      }
    }
    function Un(l, b) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var S = fl(b);
        if (Wn[S])
          return;
        Wn[S] = !0;
        var N = "";
        l && l._owner && l._owner !== wt.current && (N = " It was passed a child from " + X(l._owner.type) + "."), Ve(l), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, N), Ve(null);
      }
    }
    function qn(l, b) {
      {
        if (typeof l != "object")
          return;
        if (Ot(l))
          for (var S = 0; S < l.length; S++) {
            var N = l[S];
            Et(N) && Un(N, b);
          }
        else if (Et(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var q = P(l);
          if (typeof q == "function" && q !== l.entries)
            for (var G = q.call(l), V; !(V = G.next()).done; )
              Et(V.value) && Un(V.value, b);
        }
      }
    }
    function ul(l) {
      {
        var b = l.type;
        if (b == null || typeof b == "string")
          return;
        var S;
        if (typeof b == "function")
          S = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === c))
          S = b.propTypes;
        else
          return;
        if (S) {
          var N = X(b);
          Xi(S, l.props, "prop", N, l);
        } else if (b.PropTypes !== void 0 && !$t) {
          $t = !0;
          var q = X(b);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dl(l) {
      {
        for (var b = Object.keys(l.props), S = 0; S < b.length; S++) {
          var N = b[S];
          if (N !== "children" && N !== "key") {
            Ve(l), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), Ve(null);
            break;
          }
        }
        l.ref !== null && (Ve(l), C("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    function Hn(l, b, S, N, q, G) {
      {
        var V = _e(l);
        if (!V) {
          var B = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = cl(q);
          de ? B += de : B += Vn();
          var re;
          l === null ? re = "null" : Ot(l) ? re = "array" : l !== void 0 && l.$$typeof === r ? (re = "<" + (X(l.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : re = typeof l, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, B);
        }
        var ne = ll(l, b, S, q, G);
        if (ne == null)
          return ne;
        if (V) {
          var be = b.children;
          if (be !== void 0)
            if (N)
              if (Ot(be)) {
                for (var We = 0; We < be.length; We++)
                  qn(be[We], l);
                Object.freeze && Object.freeze(be);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qn(be, l);
        }
        return l === n ? dl(ne) : ul(ne), ne;
      }
    }
    function pl(l, b, S) {
      return Hn(l, b, S, !0);
    }
    function ml(l, b, S) {
      return Hn(l, b, S, !1);
    }
    var vl = ml, yl = pl;
    Xe.Fragment = n, Xe.jsx = vl, Xe.jsxs = yl;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? Jt.exports = wl() : Jt.exports = $l();
var J = Jt.exports;
function xe(e) {
  return Object.keys(e);
}
var El = Object.defineProperty, Zn = Object.getOwnPropertySymbols, Sl = Object.prototype.hasOwnProperty, Rl = Object.prototype.propertyIsEnumerable, Qn = (e, r, t) => r in e ? El(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, xl = (e, r) => {
  for (var t in r || (r = {}))
    Sl.call(r, t) && Qn(e, t, r[t]);
  if (Zn)
    for (var t of Zn(r))
      Rl.call(r, t) && Qn(e, t, r[t]);
  return e;
};
function St(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function ln(e, r) {
  const t = xl({}, e), n = r;
  return St(e) && St(r) && Object.keys(r).forEach((o) => {
    St(n[o]) && o in e ? t[o] = ln(t[o], n[o]) : t[o] = n[o];
  }), t;
}
function jl(e) {
  return e.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`);
}
function Cl(e) {
  var r;
  return typeof e != "string" || !e.includes("var(--mantine-scale)") ? e : (r = e.match(/^calc\((.*?)\)$/)) == null ? void 0 : r[1].split("*")[0].trim();
}
function Tl(e) {
  const r = Cl(e);
  return typeof r == "number" ? r : typeof r == "string" ? r.includes("calc") || r.includes("var") ? r : r.includes("px") ? Number(r.replace("px", "")) : r.includes("rem") ? Number(r.replace("rem", "")) * 16 : r.includes("em") ? Number(r.replace("em", "")) * 16 : Number(r) : NaN;
}
function Rt(e) {
  return `calc(${e} * var(--mantine-scale))`;
}
function es(e, { shouldScale: r = !1 } = {}) {
  function t(n) {
    if (n === 0 || n === "0")
      return "0";
    if (typeof n == "number") {
      const o = `${n / 16}${e}`;
      return r ? Rt(o) : o;
    }
    if (typeof n == "string") {
      if (n.startsWith("calc(") || n.startsWith("var("))
        return n;
      if (n.includes(" "))
        return n.split(" ").map((a) => t(a)).join(" ");
      if (n.includes(e))
        return r ? Rt(n) : n;
      const o = n.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const a = `${Number(o) / 16}${e}`;
        return r ? Rt(a) : a;
      }
    }
    return n;
  }
  return t;
}
const h = es("rem", { shouldScale: !0 }), eo = es("em");
function cn(e) {
  return Object.keys(e).reduce((r, t) => (e[t] !== void 0 && (r[t] = e[t]), r), {});
}
function rs(e) {
  return typeof e == "number" ? !0 : typeof e == "string" ? e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "" ? !0 : /[0-9]/.test(e.trim().replace("-", "")[0]) : !1;
}
function Nl(e) {
  const r = ir(null);
  return [({ children: o, value: a }) => /* @__PURE__ */ $.createElement(r.Provider, { value: a }, o), () => {
    const o = Ye(r);
    if (o === null)
      throw new Error(e);
    return o;
  }];
}
function Al(e = null) {
  const r = ir(e);
  return [({ children: o, value: a }) => /* @__PURE__ */ $.createElement(r.Provider, { value: a }, o), () => Ye(r)];
}
const Il = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function Dl(e) {
  return Il[e];
}
function $e(e, r = "size", t = !0) {
  if (e !== void 0)
    return rs(e) ? t ? h(e) : e : `var(--${r}-${e})`;
}
function nt(e) {
  return $e(e, "mantine-spacing");
}
function ot(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : $e(e, "mantine-radius");
}
function De(e) {
  return $e(e, "mantine-font-size");
}
function Ml(e) {
  return $e(e, "mantine-line-height", !1);
}
function Fl(e) {
  if (e)
    return $e(e, "mantine-shadow", !1);
}
function ts(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = ts(e[r])) && (n && (n += " "), n += t);
    else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Be() {
  for (var e, r, t = 0, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = ts(e)) && (n && (n += " "), n += r);
  return n;
}
const kl = {};
function Ll(e) {
  const r = {};
  return e.forEach((t) => {
    Object.entries(t).forEach(([n, o]) => {
      r[n] ? r[n] = Be(r[n], o) : r[n] = o;
    });
  }), r;
}
function fn({ theme: e, classNames: r, props: t, stylesCtx: n }) {
  const a = (Array.isArray(r) ? r : [r]).map(
    (s) => typeof s == "function" ? s(e, t, n) : s || kl
  );
  return Ll(a);
}
var zl = Object.defineProperty, ro = Object.getOwnPropertySymbols, Bl = Object.prototype.hasOwnProperty, Vl = Object.prototype.propertyIsEnumerable, to = (e, r, t) => r in e ? zl(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, vr = (e, r) => {
  for (var t in r || (r = {}))
    Bl.call(r, t) && to(e, t, r[t]);
  if (ro)
    for (var t of ro(r))
      Vl.call(r, t) && to(e, t, r[t]);
  return e;
};
function Kt({ theme: e, styles: r, props: t, stylesCtx: n }) {
  return (Array.isArray(r) ? r : [r]).reduce((a, s) => typeof s == "function" ? vr(vr({}, a), s(e, t, n)) : vr(vr({}, a), s), {});
}
const Wl = {
  dark: [
    "#C1C2C5",
    "#A6A7AB",
    "#909296",
    "#5c5f66",
    "#373A40",
    "#2C2E33",
    "#25262b",
    "#1A1B1E",
    "#141517",
    "#101113"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};
function Xt(e, r) {
  return typeof e.primaryShade == "number" ? e.primaryShade : r === "dark" ? e.primaryShade.dark : e.primaryShade.light;
}
function un({
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
    value: a !== void 0 ? r.colors[n][a] : r.colors[n][Xt(r, t || "light")],
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
function or(e, r) {
  const t = un({ color: e || r.primaryColor, theme: r });
  return t.variable ? `var(${t.variable})` : e;
}
function Zt(e, r) {
  const t = {
    from: (e == null ? void 0 : e.from) || r.defaultGradient.from,
    to: (e == null ? void 0 : e.to) || r.defaultGradient.to,
    deg: (e == null ? void 0 : e.deg) || r.defaultGradient.deg || 0
  }, n = or(t.from, r), o = or(t.to, r);
  return `linear-gradient(${t.deg}deg, ${n} 0%, ${o} 100%)`;
}
function Ul(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function ql(e) {
  let r = e.replace("#", "");
  if (r.length === 3) {
    const s = r.split("");
    r = [
      s[0],
      s[0],
      s[1],
      s[1],
      s[2],
      s[2]
    ].join("");
  }
  const t = parseInt(r, 16), n = t >> 16 & 255, o = t >> 8 & 255, a = t & 255;
  return {
    r: n,
    g: o,
    b: a,
    a: 1
  };
}
function Hl(e) {
  const [r, t, n, o] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r, g: t, b: n, a: o || 1 };
}
function Yl(e) {
  const r = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, t = e.match(r);
  if (!t)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10) / 100, a = parseInt(t[3], 10) / 100, s = t[5] ? parseFloat(t[5]) : void 0, i = (1 - Math.abs(2 * a - 1)) * o, u = n / 60, d = i * (1 - Math.abs(u % 2 - 1)), f = a - i / 2;
  let c, m, O;
  return u >= 0 && u < 1 ? (c = i, m = d, O = 0) : u >= 1 && u < 2 ? (c = d, m = i, O = 0) : u >= 2 && u < 3 ? (c = 0, m = i, O = d) : u >= 3 && u < 4 ? (c = 0, m = d, O = i) : u >= 4 && u < 5 ? (c = d, m = 0, O = i) : (c = i, m = 0, O = d), {
    r: Math.round((c + f) * 255),
    g: Math.round((m + f) * 255),
    b: Math.round((O + f) * 255),
    a: s || 1
  };
}
function ns(e) {
  return Ul(e) ? ql(e) : e.startsWith("rgb") ? Hl(e) : e.startsWith("hsl") ? Yl(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function yr(e, r) {
  if (e.startsWith("var("))
    return e;
  const { r: t, g: n, b: o, a } = ns(e), s = 1 - r, i = (u) => Math.round(u * s);
  return `rgba(${i(t)}, ${i(n)}, ${i(o)}, ${a})`;
}
function he(e, r) {
  if (typeof e != "string" || r > 1 || r < 0)
    return "rgba(0, 0, 0, 1)";
  const { r: t, g: n, b: o } = ns(e);
  return `rgba(${t}, ${n}, ${o}, ${r})`;
}
const Gl = ({
  color: e,
  theme: r,
  variant: t,
  gradient: n
}) => {
  const o = un({ color: e, theme: r });
  if (t === "filled")
    return o.isThemeColor ? o.shade === void 0 ? {
      background: `var(--mantine-color-${e}-filled)`,
      hover: `var(--mantine-color-${e}-filled-hover)`,
      color: "var(--mantine-color-white)",
      border: `${h(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${o.color}-${o.shade})`,
      hover: `var(--mantine-color-${o.color}-${o.shade === 9 ? 8 : o.shade + 1})`,
      color: "var(--mantine-color-white)",
      border: `${h(1)} solid transparent`
    } : {
      background: e,
      hover: yr(e, 0.1),
      color: "var(--mantine-color-white)",
      border: `${h(1)} solid transparent`
    };
  if (t === "light") {
    if (o.isThemeColor) {
      if (o.shade === void 0)
        return {
          background: `var(--mantine-color-${e}-light)`,
          hover: `var(--mantine-color-${e}-light-hover)`,
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${h(1)} solid transparent`
        };
      const a = r.colors[o.color][o.shade];
      return {
        background: he(a, 0.1),
        hover: he(a, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${h(1)} solid transparent`
      };
    }
    return {
      background: he(e, 0.1),
      hover: he(e, 0.12),
      color: e,
      border: `${h(1)} solid transparent`
    };
  }
  if (t === "outline")
    return o.isThemeColor ? o.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${e}-outline-hover)`,
      color: `var(--mantine-color-${e}-outline)`,
      border: `${h(1)} solid var(--mantine-color-${e}-outline)`
    } : {
      background: "transparent",
      hover: he(r.colors[o.color][o.shade], 0.05),
      color: `var(--mantine-color-${o.color}-${o.shade})`,
      border: `${h(1)} solid var(--mantine-color-${o.color}-${o.shade})`
    } : {
      background: "transparent",
      hover: he(e, 0.05),
      color: e,
      border: `${h(1)} solid ${e}`
    };
  if (t === "subtle") {
    if (o.isThemeColor) {
      if (o.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${e}-light-hover)`,
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${h(1)} solid transparent`
        };
      const a = r.colors[o.color][o.shade];
      return {
        background: "transparent",
        hover: he(a, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${h(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: he(e, 0.12),
      color: e,
      border: `${h(1)} solid transparent`
    };
  }
  return t === "transparent" ? o.isThemeColor ? o.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${e}-light-color)`,
    border: `${h(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
    border: `${h(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: e,
    border: `${h(1)} solid transparent`
  } : t === "white" ? o.isThemeColor ? o.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: yr(r.white, 0.01),
    color: `var(--mantine-color-${e}-filled)`,
    border: `${h(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: yr(r.white, 0.01),
    color: `var(--mantine-color-${o.color}-${o.shade})`,
    border: `${h(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: yr(r.white, 0.01),
    color: e,
    border: `${h(1)} solid transparent`
  } : t === "gradient" ? {
    background: Zt(n, r),
    hover: Zt(n, r),
    color: "var(--mantine-color-white)",
    border: "none"
  } : t === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${h(1)} solid var(--mantine-color-default-border)`
  } : {};
}, no = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", dn = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: Wl,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: Gl,
  fontFamily: no,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: no,
    fontWeight: "700",
    sizes: {
      h1: { fontSize: h(34), lineHeight: "1.3" },
      h2: { fontSize: h(26), lineHeight: "1.35" },
      h3: { fontSize: h(22), lineHeight: "1.4" },
      h4: { fontSize: h(18), lineHeight: "1.45" },
      h5: { fontSize: h(16), lineHeight: "1.5" },
      h6: { fontSize: h(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: h(12),
    sm: h(14),
    md: h(16),
    lg: h(18),
    xl: h(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: h(2),
    sm: h(4),
    md: h(8),
    lg: h(16),
    xl: h(32)
  },
  spacing: {
    xs: h(10),
    sm: h(12),
    md: h(16),
    lg: h(20),
    xl: h(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${h(1)} ${h(3)} rgba(0, 0, 0, 0.05), 0 ${h(1)} ${h(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${h(1)} ${h(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${h(10)} ${h(
      15
    )} ${h(-5)}, rgba(0, 0, 0, 0.04) 0 ${h(7)} ${h(7)} ${h(-5)}`,
    md: `0 ${h(1)} ${h(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${h(20)} ${h(
      25
    )} ${h(-5)}, rgba(0, 0, 0, 0.04) 0 ${h(10)} ${h(10)} ${h(-5)}`,
    lg: `0 ${h(1)} ${h(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${h(28)} ${h(
      23
    )} ${h(-7)}, rgba(0, 0, 0, 0.04) 0 ${h(12)} ${h(12)} ${h(-7)}`,
    xl: `0 ${h(1)} ${h(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${h(36)} ${h(
      28
    )} ${h(-7)}, rgba(0, 0, 0, 0.04) 0 ${h(17)} ${h(17)} ${h(-7)}`
  },
  other: {},
  components: {}
}, Jl = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", oo = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function xt(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function ao(e) {
  if (!(e.primaryColor in e.colors))
    throw new Error(Jl);
  if (typeof e.primaryShade == "object" && (!xt(e.primaryShade.dark) || !xt(e.primaryShade.light)))
    throw new Error(oo);
  if (typeof e.primaryShade == "number" && !xt(e.primaryShade))
    throw new Error(oo);
}
function Kl(e, r) {
  var t;
  if (!r)
    return ao(e), e;
  const n = ln(e, r);
  return r.fontFamily && !((t = r.headings) != null && t.fontFamily) && (n.headings.fontFamily = r.fontFamily), ao(n), n;
}
const pn = ir(null), Xl = () => Ye(pn) || dn;
function lr() {
  const e = Ye(pn);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function os({
  theme: e,
  children: r,
  inherit: t = !0
}) {
  const n = Xl(), o = hl(
    () => Kl(t ? n : dn, e),
    [e, n, t]
  );
  return /* @__PURE__ */ $.createElement(pn.Provider, { value: o }, r);
}
os.displayName = "@mantine/core/MantineThemeProvider";
const Zl = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function Ql({ theme: e, options: r, unstyled: t }) {
  return Be(
    (r == null ? void 0 : r.focusable) && !t && (e.focusClassName || Zl[e.focusRing]),
    (r == null ? void 0 : r.active) && !t && e.activeClassName
  );
}
function ec({
  themeName: e,
  classNamesPrefix: r,
  selector: t
}) {
  return e.map((n) => `${r}-${n}-${t}`);
}
function rc({
  themeName: e,
  theme: r,
  selector: t,
  props: n,
  stylesCtx: o
}) {
  return e.map(
    (a) => {
      var s, i;
      return (i = fn({
        theme: r,
        classNames: (s = r.components[a]) == null ? void 0 : s.classNames,
        props: n,
        stylesCtx: o
      })) == null ? void 0 : i[t];
    }
  );
}
function tc({
  options: e,
  classes: r,
  selector: t,
  unstyled: n
}) {
  return e != null && e.variant && !n ? r[`${t}--${e.variant}`] : void 0;
}
function nc({ rootSelector: e, selector: r, className: t }) {
  return e === r ? t : void 0;
}
function oc({ selector: e, classes: r, unstyled: t }) {
  return t ? void 0 : r[e];
}
function ac({
  selector: e,
  stylesCtx: r,
  theme: t,
  classNames: n,
  props: o
}) {
  return fn({ theme: t, classNames: n, props: o, stylesCtx: r })[e];
}
function sc({
  selector: e,
  stylesCtx: r,
  options: t,
  props: n,
  theme: o
}) {
  return fn({
    theme: o,
    classNames: t == null ? void 0 : t.classNames,
    props: (t == null ? void 0 : t.props) || n,
    stylesCtx: r
  })[e];
}
function ic({
  theme: e,
  options: r,
  themeName: t,
  selector: n,
  classNamesPrefix: o,
  classNames: a,
  classes: s,
  unstyled: i,
  className: u,
  rootSelector: d,
  props: f,
  stylesCtx: c
}) {
  return Be(
    Ql({ theme: e, options: r, unstyled: i }),
    rc({ theme: e, themeName: t, selector: n, props: f, stylesCtx: c }),
    tc({ options: r, classes: s, selector: n, unstyled: i }),
    ac({ selector: n, stylesCtx: c, theme: e, classNames: a, props: f }),
    sc({ selector: n, stylesCtx: c, options: r, props: f, theme: e }),
    nc({ rootSelector: d, selector: n, className: u }),
    oc({ selector: n, classes: s, unstyled: i }),
    ec({ themeName: t, classNamesPrefix: o, selector: n }),
    r == null ? void 0 : r.className
  );
}
var lc = Object.defineProperty, so = Object.getOwnPropertySymbols, cc = Object.prototype.hasOwnProperty, fc = Object.prototype.propertyIsEnumerable, io = (e, r, t) => r in e ? lc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, lo = (e, r) => {
  for (var t in r || (r = {}))
    cc.call(r, t) && io(e, t, r[t]);
  if (so)
    for (var t of so(r))
      fc.call(r, t) && io(e, t, r[t]);
  return e;
};
function uc({
  theme: e,
  themeName: r,
  props: t,
  stylesCtx: n,
  selector: o
}) {
  return r.map(
    (a) => {
      var s;
      return Kt({
        theme: e,
        styles: (s = e.components[a]) == null ? void 0 : s.styles,
        props: t,
        stylesCtx: n
      })[o];
    }
  ).reduce((a, s) => lo(lo({}, a), s), {});
}
var dc = Object.defineProperty, co = Object.getOwnPropertySymbols, pc = Object.prototype.hasOwnProperty, mc = Object.prototype.propertyIsEnumerable, fo = (e, r, t) => r in e ? dc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, uo = (e, r) => {
  for (var t in r || (r = {}))
    pc.call(r, t) && fo(e, t, r[t]);
  if (co)
    for (var t of co(r))
      mc.call(r, t) && fo(e, t, r[t]);
  return e;
};
function Qt({ style: e, theme: r }) {
  return Array.isArray(e) ? [...e].reduce(
    (t, n) => uo(uo({}, t), Qt({ style: n, theme: r })),
    {}
  ) : typeof e == "function" ? e(r) : e ?? {};
}
var vc = Object.defineProperty, po = Object.getOwnPropertySymbols, yc = Object.prototype.hasOwnProperty, hc = Object.prototype.propertyIsEnumerable, mo = (e, r, t) => r in e ? vc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, vo = (e, r) => {
  for (var t in r || (r = {}))
    yc.call(r, t) && mo(e, t, r[t]);
  if (po)
    for (var t of po(r))
      hc.call(r, t) && mo(e, t, r[t]);
  return e;
};
function _c(e) {
  return e.reduce((r, t) => (t && Object.keys(t).forEach((n) => {
    r[n] = vo(vo({}, r[n]), cn(t[n]));
  }), r), {});
}
function bc({
  vars: e,
  varsResolver: r,
  theme: t,
  props: n,
  stylesCtx: o,
  selector: a,
  themeName: s
}) {
  var i;
  return (i = _c([
    r == null ? void 0 : r(t, n, o),
    ...s.map((u) => {
      var d, f, c;
      return (c = (f = (d = t.components) == null ? void 0 : d[u]) == null ? void 0 : f.vars) == null ? void 0 : c.call(f, t, n, o);
    }),
    e == null ? void 0 : e(t, n, o)
  ])) == null ? void 0 : i[a];
}
var gc = Object.defineProperty, yo = Object.getOwnPropertySymbols, Oc = Object.prototype.hasOwnProperty, Pc = Object.prototype.propertyIsEnumerable, ho = (e, r, t) => r in e ? gc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Ue = (e, r) => {
  for (var t in r || (r = {}))
    Oc.call(r, t) && ho(e, t, r[t]);
  if (yo)
    for (var t of yo(r))
      Pc.call(r, t) && ho(e, t, r[t]);
  return e;
};
function wc({
  theme: e,
  themeName: r,
  selector: t,
  options: n,
  props: o,
  stylesCtx: a,
  rootSelector: s,
  styles: i,
  style: u,
  vars: d,
  varsResolver: f
}) {
  return Ue(Ue(Ue(Ue(Ue(Ue({}, uc({ theme: e, themeName: r, props: o, stylesCtx: a, selector: t })), Kt({ theme: e, styles: i, props: o, stylesCtx: a })[t]), Kt({ theme: e, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: a })[t]), bc({ theme: e, props: o, stylesCtx: a, vars: d, varsResolver: f, selector: t, themeName: r })), s === t ? Qt({ style: u, theme: e }) : null), Qt({ style: n == null ? void 0 : n.style, theme: e }));
}
const as = ir(null);
function mn() {
  const e = Ye(as);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function $c() {
  return mn().cssVariablesResolver;
}
function Ec() {
  return mn().classNamesPrefix;
}
function vn() {
  return mn().getStyleNonce;
}
function ae({
  name: e,
  classes: r,
  props: t,
  stylesCtx: n,
  className: o,
  style: a,
  rootSelector: s = "root",
  unstyled: i,
  classNames: u,
  styles: d,
  vars: f,
  varsResolver: c
}) {
  const m = lr(), O = Ec(), y = (Array.isArray(e) ? e : [e]).filter((p) => p);
  return (p, P) => ({
    className: ic({
      theme: m,
      options: P,
      themeName: y,
      selector: p,
      classNamesPrefix: O,
      classNames: u,
      classes: r,
      unstyled: i,
      className: o,
      rootSelector: s,
      props: t,
      stylesCtx: n
    }),
    style: wc({
      theme: m,
      themeName: y,
      selector: p,
      options: P,
      props: t,
      stylesCtx: n,
      rootSelector: s,
      styles: d,
      style: a,
      vars: f,
      varsResolver: c
    })
  });
}
function Sc() {
  const e = console.error;
  console.error = (...r) => {
    r.length > 1 && typeof r[0] == "string" && r[0].toLowerCase().includes("extra attributes from the server") && typeof r[1] == "string" && r[1].toLowerCase().includes("data-mantine-color-scheme") || e(...r);
  };
}
function _o(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function Rc({
  key: e = "mantine-color-scheme-value"
} = {}) {
  let r;
  return {
    get: (t) => {
      if (typeof window > "u")
        return t;
      try {
        const n = window.localStorage.getItem(e);
        return _o(n) ? n : t;
      } catch {
        return t;
      }
    },
    set: (t) => {
      try {
        window.localStorage.setItem(e, t);
      } catch (n) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          n
        );
      }
    },
    subscribe: (t) => {
      r = (n) => {
        n.storageArea === window.localStorage && n.key === e && _o(n.newValue) && t(n.newValue);
      }, window.addEventListener("storage", r);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", r);
    },
    clear: () => {
      window.localStorage.removeItem(e);
    }
  };
}
const at = typeof document < "u" ? _l : Er;
function xc() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
const jc = $["useId".toString()] || (() => {
});
function Cc() {
  const e = jc();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Tc(e) {
  const r = Cc(), [t, n] = Me(r);
  return at(() => {
    n(xc());
  }, []), typeof e == "string" ? e : typeof window > "u" ? r : t;
}
function Nc(e, r) {
  typeof e == "function" ? e(r) : typeof e == "object" && e !== null && "current" in e && (e.current = r);
}
function Ze(e, r) {
  var t;
  const n = e !== "auto" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (t = r()) == null || t.setAttribute("data-mantine-color-scheme", n);
}
function Ac({
  manager: e,
  defaultColorScheme: r,
  getRootElement: t,
  forceColorScheme: n
}) {
  const o = Za(), [a, s] = Me(() => e.get(r)), i = n || a, u = Gn(
    (f) => {
      n || (Ze(f, t), s(f), e.set(f));
    },
    [e.set, i, n]
  ), d = Gn(() => {
    s(r), Ze(r, t), e.clear();
  }, [e.clear, r]);
  return Er(() => (e.subscribe(u), e.unsubscribe), [e.subscribe, e.unsubscribe]), at(() => {
    Ze(e.get(r), t);
  }, []), Er(() => {
    var f;
    if (n)
      return Ze(n, t), () => {
      };
    o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const c = (m) => {
      a === "auto" && Ze(m.matches ? "dark" : "light", t);
    };
    return (f = o.current) == null || f.addEventListener("change", c), () => {
      var m;
      return (m = o.current) == null ? void 0 : m.removeEventListener("change", c);
    };
  }, [a, n]), { colorScheme: i, setColorScheme: u, clearColorScheme: d };
}
function Ic({
  respectReducedMotion: e,
  getRootElement: r
}) {
  at(() => {
    var t;
    e && ((t = r()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
function jt(e) {
  return Object.entries(e).map(([r, t]) => `${r}: ${t};`).join("");
}
function Ct(e, r) {
  return (Array.isArray(e) ? e : [e]).reduce((n, o) => `${o}{${n}}`, r);
}
function Dc(e, r) {
  const t = jt(e.variables), n = t ? Ct(r, t) : "", o = jt(e.dark), a = o ? Ct(`${r}[data-mantine-color-scheme="dark"]`, o) : "", s = jt(e.light), i = s ? Ct(`${r}[data-mantine-color-scheme="light"]`, s) : "";
  return `${n}${a}${i}`;
}
function qe(e, r, t) {
  xe(r).forEach(
    (n) => Object.assign(e, { [`--mantine-${t}-${n}`]: r[n] })
  );
}
const ss = (e) => {
  const r = Xt(e, "dark"), t = Xt(e, "light"), n = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : h(e.defaultRadius), o = {
    variables: {
      "--mantine-scale": e.scale.toString(),
      "--mantine-cursor-type": e.cursorType,
      "--mantine-webkit-font-smoothing": e.fontSmoothing ? "antialiased" : "unset",
      "--mantine-color-scheme": "light dark",
      "--mantine-moz-font-smoothing": e.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": e.white,
      "--mantine-color-black": e.black,
      "--mantine-line-height": e.lineHeights.md,
      "--mantine-font-family": e.fontFamily,
      "--mantine-font-family-monospace": e.fontFamilyMonospace,
      "--mantine-font-family-headings": e.headings.fontFamily,
      "--mantine-heading-font-weight": e.headings.fontWeight,
      "--mantine-radius-default": n,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`
    },
    light: {
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": e.black,
      "--mantine-color-body": e.white,
      "--mantine-color-error": e.colors.red[6],
      "--mantine-color-placeholder": e.colors.gray[5],
      "--mantine-color-anchor": e.colors[e.primaryColor][t],
      "--mantine-color-default": e.white,
      "--mantine-color-default-hover": e.colors.gray[0],
      "--mantine-color-default-color": e.black,
      "--mantine-color-default-border": e.colors.gray[4]
    },
    dark: {
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": e.colors.dark[7],
      "--mantine-color-error": e.colors.red[9],
      "--mantine-color-placeholder": e.colors.dark[3],
      "--mantine-color-anchor": e.colors[e.primaryColor][4],
      "--mantine-color-default": e.colors.dark[6],
      "--mantine-color-default-hover": e.colors.dark[5],
      "--mantine-color-default-color": e.white,
      "--mantine-color-default-border": e.colors.dark[4]
    }
  };
  qe(o.variables, e.breakpoints, "breakpoint"), qe(o.variables, e.spacing, "spacing"), qe(o.variables, e.fontSizes, "font-size"), qe(o.variables, e.lineHeights, "line-height"), qe(o.variables, e.shadows, "shadow"), qe(o.variables, e.radius, "radius"), xe(e.colors).forEach((s) => {
    e.colors[s].forEach((d, f) => {
      o.variables[`--mantine-color-${s}-${f}`] = d;
    });
    const i = t === 9 ? e.colors[s][8] : e.colors[s][t + 1], u = r === 9 ? e.colors[s][8] : e.colors[s][r + 1];
    o.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)", o.light[`--mantine-color-${s}-filled`] = e.colors[s][t], o.light[`--mantine-color-${s}-filled-hover`] = i, o.light[`--mantine-color-${s}-light`] = he(
      e.colors[s][t],
      0.1
    ), o.light[`--mantine-color-${s}-light-hover`] = he(
      e.colors[s][t],
      0.12
    ), o.light[`--mantine-color-${s}-light-color`] = e.colors[s][t], o.light[`--mantine-color-${s}-outline`] = e.colors[s][t], o.light[`--mantine-color-${s}-outline-hover`] = he(
      e.colors[s][t],
      0.05
    ), o.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)", o.dark[`--mantine-color-${s}-filled`] = e.colors[s][r], o.dark[`--mantine-color-${s}-filled-hover`] = u, o.dark[`--mantine-color-${s}-light`] = he(
      e.colors[s][Math.max(0, r - 2)],
      0.15
    ), o.dark[`--mantine-color-${s}-light-hover`] = he(
      e.colors[s][Math.max(0, r - 2)],
      0.2
    ), o.dark[`--mantine-color-${s}-light-color`] = e.colors[s][Math.max(r - 5, 0)], o.dark[`--mantine-color-${s}-outline`] = e.colors[s][Math.max(r - 4, 0)], o.dark[`--mantine-color-${s}-outline-hover`] = he(
      e.colors[s][Math.max(r - 4, 0)],
      0.05
    );
  });
  const a = e.headings.sizes;
  return xe(a).forEach((s) => {
    o.variables[`--mantine-${s}-font-size`] = a[s].fontSize, o.variables[`--mantine-${s}-line-height`] = a[s].lineHeight, o.variables[`--mantine-${s}-font-weight`] = a[s].fontWeight || e.headings.fontWeight;
  }), o;
};
function Mc({ theme: e, generator: r }) {
  const t = ss(e), n = r == null ? void 0 : r(e);
  return n ? ln(t, n) : t;
}
const Tt = ss(dn);
function Fc(e) {
  const r = {
    variables: {},
    light: {},
    dark: {}
  };
  return xe(e.variables).forEach((t) => {
    Tt.variables[t] !== e.variables[t] && (r.variables[t] = e.variables[t]);
  }), xe(e.light).forEach((t) => {
    Tt.light[t] !== e.light[t] && (r.light[t] = e.light[t]);
  }), xe(e.dark).forEach((t) => {
    Tt.dark[t] !== e.dark[t] && (r.dark[t] = e.dark[t]);
  }), r;
}
function kc(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function is({ cssVariablesSelector: e }) {
  const r = lr(), t = vn(), n = $c(), o = Mc({ theme: r, generator: n }), a = e === ":root", s = a ? Fc(o) : o, i = Dc(s, e);
  return i ? /* @__PURE__ */ $.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: {
        __html: `${i}${a ? "" : kc(e)}`
      }
    }
  ) : null;
}
is.displayName = "@mantine/CssVariables";
function Lc() {
  const e = lr(), r = vn(), t = xe(e.breakpoints).reduce((n, o) => {
    const a = Tl(e.breakpoints[o]);
    return `${n}@media (max-width: ${eo(
      a - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${eo(
      a
    )}) {.mantine-hidden-from-${o} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ $.createElement(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: { __html: t }
    }
  );
}
Sc();
function ls({
  theme: e,
  children: r,
  getStyleNonce: t,
  withCssVariables: n = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: s = Rc(),
  defaultColorScheme: i = "light",
  getRootElement: u = () => document.documentElement,
  cssVariablesResolver: d,
  forceColorScheme: f
}) {
  const { colorScheme: c, setColorScheme: m, clearColorScheme: O } = Ac({
    defaultColorScheme: i,
    forceColorScheme: f,
    manager: s,
    getRootElement: u
  });
  return Ic({
    respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
    getRootElement: u
  }), /* @__PURE__ */ $.createElement(
    as.Provider,
    {
      value: {
        colorSchemeManager: s,
        colorScheme: c,
        setColorScheme: m,
        clearColorScheme: O,
        getRootElement: u,
        classNamesPrefix: a,
        getStyleNonce: t,
        cssVariablesResolver: d,
        cssVariablesSelector: o
      }
    },
    /* @__PURE__ */ $.createElement(os, { theme: e }, n && /* @__PURE__ */ $.createElement(is, { cssVariablesSelector: o }), /* @__PURE__ */ $.createElement(Lc, null), r)
  );
}
ls.displayName = "@mantine/core/MantineProvider";
var zc = Object.defineProperty, bo = Object.getOwnPropertySymbols, Bc = Object.prototype.hasOwnProperty, Vc = Object.prototype.propertyIsEnumerable, go = (e, r, t) => r in e ? zc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Nt = (e, r) => {
  for (var t in r || (r = {}))
    Bc.call(r, t) && go(e, t, r[t]);
  if (bo)
    for (var t of bo(r))
      Vc.call(r, t) && go(e, t, r[t]);
  return e;
};
function K(e, r, t) {
  var n;
  const o = lr(), a = (n = o.components[e]) == null ? void 0 : n.defaultProps, s = typeof a == "function" ? a(o) : a;
  return Nt(Nt(Nt({}, r), s), cn(t));
}
function Oo(e) {
  return xe(e).reduce(
    (r, t) => e[t] !== void 0 ? `${r}${jl(t)}:${e[t]};` : r,
    ""
  ).trim();
}
function Wc({ selector: e, styles: r, media: t }) {
  const n = r ? Oo(r) : "", o = Array.isArray(t) ? t.map((a) => `@media${a.query}{${e}{${Oo(a.styles)}}}`) : [];
  return `${n ? `${e}{${n}}` : ""}${o.join("")}`.trim();
}
function Uc({ selector: e, styles: r, media: t }) {
  const n = vn();
  return /* @__PURE__ */ $.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: { __html: Wc({ selector: e, styles: r, media: t }) }
    }
  );
}
function qc() {
  return `__m__-${bl().replace(/:/g, "")}`;
}
var Hc = Object.defineProperty, Po = Object.getOwnPropertySymbols, Yc = Object.prototype.hasOwnProperty, Gc = Object.prototype.propertyIsEnumerable, wo = (e, r, t) => r in e ? Hc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, tr = (e, r) => {
  for (var t in r || (r = {}))
    Yc.call(r, t) && wo(e, t, r[t]);
  if (Po)
    for (var t of Po(r))
      Gc.call(r, t) && wo(e, t, r[t]);
  return e;
};
function en(e, r) {
  return Array.isArray(e) ? [...e].reduce(
    (t, n) => tr(tr({}, t), en(n, r)),
    {}
  ) : typeof e == "function" ? e(r) : e ?? {};
}
function Jc({
  theme: e,
  style: r,
  vars: t,
  styleProps: n
}) {
  const o = en(r, e), a = en(t, e);
  return tr(tr(tr({}, o), a), n);
}
var Kc = Object.defineProperty, $o = Object.getOwnPropertySymbols, Xc = Object.prototype.hasOwnProperty, Zc = Object.prototype.propertyIsEnumerable, Eo = (e, r, t) => r in e ? Kc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, So = (e, r) => {
  for (var t in r || (r = {}))
    Xc.call(r, t) && Eo(e, t, r[t]);
  if ($o)
    for (var t of $o(r))
      Zc.call(r, t) && Eo(e, t, r[t]);
  return e;
};
function cs(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function Qc(e) {
  return Object.keys(e).reduce((r, t) => {
    const n = e[t];
    return n === void 0 || n === "" || n === !1 || n === null || (r[cs(t)] = e[t]), r;
  }, {});
}
function fs(e) {
  return e ? typeof e == "string" ? { [cs(e)]: !0 } : Array.isArray(e) ? [...e].reduce(
    (r, t) => So(So({}, r), fs(t)),
    {}
  ) : Qc(e) : null;
}
var Ro = Object.getOwnPropertySymbols, ef = Object.prototype.hasOwnProperty, rf = Object.prototype.propertyIsEnumerable, tf = (e, r) => {
  var t = {};
  for (var n in e)
    ef.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Ro)
    for (var n of Ro(e))
      r.indexOf(n) < 0 && rf.call(e, n) && (t[n] = e[n]);
  return t;
};
function yn(e) {
  const r = e, {
    m: t,
    mx: n,
    my: o,
    mt: a,
    mb: s,
    ml: i,
    mr: u,
    p: d,
    px: f,
    py: c,
    pt: m,
    pb: O,
    pl: y,
    pr: p,
    bg: P,
    c: R,
    opacity: C,
    ff: x,
    fz: j,
    fw: g,
    lts: U,
    ta: ie,
    lh: fe,
    fs: le,
    tt: _e,
    td: pe,
    w: me,
    miw: X,
    maw: Z,
    h: ue,
    mih: te,
    mah: ce,
    bgsz: ve,
    bgp: ee,
    bgr: _,
    bga: w,
    pos: I,
    top: D,
    left: T,
    bottom: L,
    right: A,
    inset: M,
    display: F,
    hiddenFrom: z,
    visibleFrom: k,
    lightHidden: se,
    darkHidden: E
  } = r, ye = tf(r, [
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
  return { styleProps: cn({
    m: t,
    mx: n,
    my: o,
    mt: a,
    mb: s,
    ml: i,
    mr: u,
    p: d,
    px: f,
    py: c,
    pt: m,
    pb: O,
    pl: y,
    pr: p,
    bg: P,
    c: R,
    opacity: C,
    ff: x,
    fz: j,
    fw: g,
    lts: U,
    ta: ie,
    lh: fe,
    fs: le,
    tt: _e,
    td: pe,
    w: me,
    miw: X,
    maw: Z,
    h: ue,
    mih: te,
    mah: ce,
    bgsz: ve,
    bgp: ee,
    bgr: _,
    bga: w,
    pos: I,
    top: D,
    left: T,
    bottom: L,
    right: A,
    inset: M,
    display: F,
    hiddenFrom: z,
    visibleFrom: k,
    lightHidden: se,
    darkHidden: E
  }), rest: ye };
}
function nf(e, r) {
  const t = un({ color: e, theme: r });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.variable ? `var(${t.variable})` : t.color;
}
function of(e, r) {
  return typeof e == "string" && e in r.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "number" || typeof e == "string" ? h(e) : e;
}
function af(e, r) {
  if (typeof e == "number")
    return h(e);
  if (typeof e == "string") {
    const t = e.replace("-", "");
    if (!(t in r.spacing))
      return h(e);
    const n = `--mantine-spacing-${t}`;
    return e.startsWith("-") ? `calc(var(${n}) * -1)` : `var(${n})`;
  }
  return e;
}
function sf(e) {
  return e;
}
function lf(e) {
  return typeof e == "number" ? h(e) : e;
}
function cf(e, r) {
  return typeof e == "string" && e in r.fontSizes ? `var(--mantine-line-height-${e})` : e;
}
const At = {
  color: nf,
  fontSize: of,
  spacing: af,
  identity: sf,
  size: lf,
  lineHeight: cf
};
var ff = Object.defineProperty, uf = Object.defineProperties, df = Object.getOwnPropertyDescriptors, Sr = Object.getOwnPropertySymbols, us = Object.prototype.hasOwnProperty, ds = Object.prototype.propertyIsEnumerable, xo = (e, r, t) => r in e ? ff(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, pf = (e, r) => {
  for (var t in r || (r = {}))
    us.call(r, t) && xo(e, t, r[t]);
  if (Sr)
    for (var t of Sr(r))
      ds.call(r, t) && xo(e, t, r[t]);
  return e;
}, mf = (e, r) => uf(e, df(r)), vf = (e, r) => {
  var t = {};
  for (var n in e)
    us.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Sr)
    for (var n of Sr(e))
      r.indexOf(n) < 0 && ds.call(e, n) && (t[n] = e[n]);
  return t;
};
function jo(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function yf(e) {
  var r = e, {
    media: t
  } = r, n = vf(r, [
    "media"
  ]);
  const a = Object.keys(t).sort((s, i) => Number(jo(s)) - Number(jo(i))).map((s) => ({ query: s, styles: t[s] }));
  return mf(pf({}, n), { media: a });
}
var hf = Object.defineProperty, _f = Object.defineProperties, bf = Object.getOwnPropertyDescriptors, Co = Object.getOwnPropertySymbols, gf = Object.prototype.hasOwnProperty, Of = Object.prototype.propertyIsEnumerable, To = (e, r, t) => r in e ? hf(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Pf = (e, r) => {
  for (var t in r || (r = {}))
    gf.call(r, t) && To(e, t, r[t]);
  if (Co)
    for (var t of Co(r))
      Of.call(r, t) && To(e, t, r[t]);
  return e;
}, wf = (e, r) => _f(e, bf(r));
function $f(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.keys(e);
  return !(r.length === 1 && r[0] === "base");
}
function Ef(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function Sf(e) {
  return typeof e == "object" && e !== null ? xe(e).filter((r) => r !== "base") : [];
}
function Rf(e, r) {
  return typeof e == "object" && e !== null && r in e ? e[r] : e;
}
function xf({
  styleProps: e,
  data: r,
  theme: t
}) {
  return yf(
    xe(e).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return n;
        const a = r[o], s = Array.isArray(a.property) ? a.property : [a.property], i = Ef(e[o]);
        if (!$f(e[o]))
          return s.forEach((d) => {
            n.inlineStyles[d] = At[a.type](i, t);
          }), n;
        n.hasResponsiveStyles = !0;
        const u = Sf(e[o]);
        return s.forEach((d) => {
          i && (n.styles[d] = At[a.type](i, t)), u.forEach((f) => {
            const c = `(min-width: ${t.breakpoints[f]})`;
            n.media[c] = wf(Pf({}, n.media[c]), {
              [d]: At[a.type](
                Rf(e[o], f),
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
const jf = {
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
var Cf = Object.defineProperty, Rr = Object.getOwnPropertySymbols, ps = Object.prototype.hasOwnProperty, ms = Object.prototype.propertyIsEnumerable, No = (e, r, t) => r in e ? Cf(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, It = (e, r) => {
  for (var t in r || (r = {}))
    ps.call(r, t) && No(e, t, r[t]);
  if (Rr)
    for (var t of Rr(r))
      ms.call(r, t) && No(e, t, r[t]);
  return e;
}, Tf = (e, r) => {
  var t = {};
  for (var n in e)
    ps.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Rr)
    for (var n of Rr(e))
      r.indexOf(n) < 0 && ms.call(e, n) && (t[n] = e[n]);
  return t;
};
const vs = Fe(
  (e, r) => {
    var t = e, {
      component: n,
      style: o,
      __vars: a,
      className: s,
      variant: i,
      mod: u,
      size: d,
      hiddenFrom: f,
      visibleFrom: c,
      lightHidden: m,
      darkHidden: O,
      renderRoot: y
    } = t, p = Tf(t, [
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
    const P = lr(), R = n || "div", { styleProps: C, rest: x } = yn(p), j = qc(), g = xf({
      styleProps: C,
      theme: P,
      data: jf
    }), U = It(It({
      ref: r,
      style: Jc({
        theme: P,
        style: o,
        vars: a,
        styleProps: g.inlineStyles
      }),
      className: Be(s, {
        [j]: g.hasResponsiveStyles,
        "mantine-light-hidden": m,
        "mantine-dark-hidden": O,
        [`mantine-hidden-from-${f}`]: f,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": i,
      "data-size": rs(d) ? void 0 : d || void 0
    }, fs(u)), x);
    return /* @__PURE__ */ $.createElement($.Fragment, null, g.hasResponsiveStyles && /* @__PURE__ */ $.createElement(
      Uc,
      {
        selector: `.${j}`,
        styles: g.styles,
        media: g.media
      }
    ), typeof y == "function" ? y(U) : /* @__PURE__ */ $.createElement(R, It({}, U)));
  }
);
vs.displayName = "@mantine/core/Box";
const Q = vs;
function ys(e) {
  return e;
}
function Oe(e) {
  const r = Fe(e);
  return r.extend = ys, r;
}
function je(e) {
  const r = Fe(e);
  return r.extend = ys, r;
}
var Nf = { root: "m-87cf2631" };
const hs = Nf;
var Af = Object.defineProperty, If = Object.defineProperties, Df = Object.getOwnPropertyDescriptors, xr = Object.getOwnPropertySymbols, _s = Object.prototype.hasOwnProperty, bs = Object.prototype.propertyIsEnumerable, Ao = (e, r, t) => r in e ? Af(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Io = (e, r) => {
  for (var t in r || (r = {}))
    _s.call(r, t) && Ao(e, t, r[t]);
  if (xr)
    for (var t of xr(r))
      bs.call(r, t) && Ao(e, t, r[t]);
  return e;
}, Mf = (e, r) => If(e, Df(r)), Ff = (e, r) => {
  var t = {};
  for (var n in e)
    _s.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && xr)
    for (var n of xr(e))
      r.indexOf(n) < 0 && bs.call(e, n) && (t[n] = e[n]);
  return t;
};
const kf = {
  __staticSelector: "UnstyledButton"
}, hn = je(
  (e, r) => {
    const t = K("UnstyledButton", kf, e), n = t, {
      className: o,
      component: a = "button",
      __staticSelector: s,
      unstyled: i,
      classNames: u,
      styles: d,
      style: f
    } = n, c = Ff(n, [
      "className",
      "component",
      "__staticSelector",
      "unstyled",
      "classNames",
      "styles",
      "style"
    ]), m = ae({
      name: s,
      props: t,
      classes: hs,
      className: o,
      style: f,
      classNames: u,
      styles: d,
      unstyled: i
    });
    return /* @__PURE__ */ $.createElement(
      Q,
      Io(Mf(Io({}, m("root", { focusable: !0 })), {
        component: a,
        ref: r,
        type: a === "button" ? "button" : void 0
      }), c)
    );
  }
);
hn.classes = hs;
hn.displayName = "@mantine/core/UnstyledButton";
var Lf = { root: "m-1b7284a3" };
const gs = Lf;
var zf = Object.defineProperty, Bf = Object.defineProperties, Vf = Object.getOwnPropertyDescriptors, jr = Object.getOwnPropertySymbols, Os = Object.prototype.hasOwnProperty, Ps = Object.prototype.propertyIsEnumerable, Do = (e, r, t) => r in e ? zf(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Mo = (e, r) => {
  for (var t in r || (r = {}))
    Os.call(r, t) && Do(e, t, r[t]);
  if (jr)
    for (var t of jr(r))
      Ps.call(r, t) && Do(e, t, r[t]);
  return e;
}, Wf = (e, r) => Bf(e, Vf(r)), Uf = (e, r) => {
  var t = {};
  for (var n in e)
    Os.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && jr)
    for (var n of jr(e))
      r.indexOf(n) < 0 && Ps.call(e, n) && (t[n] = e[n]);
  return t;
};
const qf = {}, Hf = (e, { radius: r, shadow: t }) => ({
  root: {
    "--paper-radius": r === void 0 ? void 0 : ot(r),
    "--paper-shadow": Fl(t)
  }
}), cr = je((e, r) => {
  const t = K("Paper", qf, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: i,
    unstyled: u,
    withBorder: d,
    vars: f,
    radius: c,
    shadow: m,
    variant: O
  } = n, y = Uf(n, [
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
  ]), p = ae({
    name: "Paper",
    props: t,
    classes: gs,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    vars: f,
    varsResolver: Hf
  });
  return /* @__PURE__ */ $.createElement(
    Q,
    Mo(Wf(Mo({
      ref: r,
      mod: { "data-with-border": d }
    }, p("root")), {
      variant: O
    }), y)
  );
});
cr.classes = gs;
cr.displayName = "@mantine/core/Paper";
var Fo = Object.getOwnPropertySymbols, Yf = Object.prototype.hasOwnProperty, Gf = Object.prototype.propertyIsEnumerable, Jf = (e, r) => {
  var t = {};
  for (var n in e)
    Yf.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Fo)
    for (var n of Fo(e))
      r.indexOf(n) < 0 && Gf.call(e, n) && (t[n] = e[n]);
  return t;
};
function Kf(e) {
  const r = document.createElement("div");
  return r.setAttribute("data-portal", "true"), typeof e.className == "string" && r.classList.add(...e.className.split(" ")), typeof e.style == "object" && Object.assign(r.style, e.style), typeof e.id == "string" && r.setAttribute("id", e.id), r;
}
const Xf = {}, ws = Fe((e, r) => {
  const t = K("Portal", Xf, e), { children: n, target: o } = t, a = Jf(t, ["children", "target"]), [s, i] = Me(!1), u = Za(null);
  return at(() => (i(!0), u.current = o ? typeof o == "string" ? document.querySelector(o) : o : Kf(a), Nc(r, u.current), !o && u.current && document.body.appendChild(u.current), () => {
    !o && u.current && document.body.removeChild(u.current);
  }), [o]), !s || !u.current ? null : Ol(/* @__PURE__ */ $.createElement($.Fragment, null, n), u.current);
});
ws.displayName = "@mantine/core/Portal";
var Zf = Object.defineProperty, Cr = Object.getOwnPropertySymbols, $s = Object.prototype.hasOwnProperty, Es = Object.prototype.propertyIsEnumerable, ko = (e, r, t) => r in e ? Zf(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Qf = (e, r) => {
  for (var t in r || (r = {}))
    $s.call(r, t) && ko(e, t, r[t]);
  if (Cr)
    for (var t of Cr(r))
      Es.call(r, t) && ko(e, t, r[t]);
  return e;
}, eu = (e, r) => {
  var t = {};
  for (var n in e)
    $s.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Cr)
    for (var n of Cr(e))
      r.indexOf(n) < 0 && Es.call(e, n) && (t[n] = e[n]);
  return t;
};
function Ss(e) {
  var r = e, { withinPortal: t = !0, children: n } = r, o = eu(r, ["withinPortal", "children"]);
  return t ? /* @__PURE__ */ $.createElement(ws, Qf({}, o), n) : /* @__PURE__ */ $.createElement($.Fragment, null, n);
}
Ss.displayName = "@mantine/core/OptionalPortal";
var ru = { root: "m-8d3f4000", loader: "m-302b9fb1", group: "m-1a0f1b21" };
const st = ru;
var tu = Object.defineProperty, nu = Object.defineProperties, ou = Object.getOwnPropertyDescriptors, Tr = Object.getOwnPropertySymbols, Rs = Object.prototype.hasOwnProperty, xs = Object.prototype.propertyIsEnumerable, Lo = (e, r, t) => r in e ? tu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, zo = (e, r) => {
  for (var t in r || (r = {}))
    Rs.call(r, t) && Lo(e, t, r[t]);
  if (Tr)
    for (var t of Tr(r))
      xs.call(r, t) && Lo(e, t, r[t]);
  return e;
}, au = (e, r) => nu(e, ou(r)), su = (e, r) => {
  var t = {};
  for (var n in e)
    Rs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Tr)
    for (var n of Tr(e))
      r.indexOf(n) < 0 && xs.call(e, n) && (t[n] = e[n]);
  return t;
};
const Bo = {
  orientation: "horizontal"
}, iu = (e, { borderWidth: r }) => ({
  group: { "--ai-border-width": h(r) }
}), _n = Oe((e, r) => {
  const t = K("ActionIconGroup", Bo, e), n = K("ActionIconGroup", Bo, e), {
    className: o,
    style: a,
    classNames: s,
    styles: i,
    unstyled: u,
    orientation: d,
    vars: f,
    borderWidth: c,
    variant: m
  } = n, O = su(n, [
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "orientation",
    "vars",
    "borderWidth",
    "variant"
  ]), y = ae({
    name: "ActionIconGroup",
    props: t,
    classes: st,
    className: o,
    style: a,
    classNames: s,
    styles: i,
    unstyled: u,
    vars: f,
    varsResolver: iu,
    rootSelector: "group"
  });
  return /* @__PURE__ */ $.createElement(
    Q,
    zo(au(zo({}, y("group")), {
      ref: r,
      variant: m,
      mod: { "data-orientation": d },
      role: "group"
    }), O)
  );
});
_n.classes = st;
_n.displayName = "@mantine/core/ActionIconGroup";
var lu = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const we = lu;
var cu = Object.defineProperty, fu = Object.defineProperties, uu = Object.getOwnPropertyDescriptors, Nr = Object.getOwnPropertySymbols, js = Object.prototype.hasOwnProperty, Cs = Object.prototype.propertyIsEnumerable, Vo = (e, r, t) => r in e ? cu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, du = (e, r) => {
  for (var t in r || (r = {}))
    js.call(r, t) && Vo(e, t, r[t]);
  if (Nr)
    for (var t of Nr(r))
      Cs.call(r, t) && Vo(e, t, r[t]);
  return e;
}, pu = (e, r) => fu(e, uu(r)), mu = (e, r) => {
  var t = {};
  for (var n in e)
    js.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Nr)
    for (var n of Nr(e))
      r.indexOf(n) < 0 && Cs.call(e, n) && (t[n] = e[n]);
  return t;
};
const vu = Fe((e, r) => {
  var t = e, { className: n } = t, o = mu(t, ["className"]);
  return /* @__PURE__ */ $.createElement(Q, pu(du({ component: "span", className: Be(we.barsLoader, n) }, o), { ref: r }), /* @__PURE__ */ $.createElement("span", { className: we.bar }), /* @__PURE__ */ $.createElement("span", { className: we.bar }), /* @__PURE__ */ $.createElement("span", { className: we.bar }));
});
var yu = Object.defineProperty, hu = Object.defineProperties, _u = Object.getOwnPropertyDescriptors, Ar = Object.getOwnPropertySymbols, Ts = Object.prototype.hasOwnProperty, Ns = Object.prototype.propertyIsEnumerable, Wo = (e, r, t) => r in e ? yu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, bu = (e, r) => {
  for (var t in r || (r = {}))
    Ts.call(r, t) && Wo(e, t, r[t]);
  if (Ar)
    for (var t of Ar(r))
      Ns.call(r, t) && Wo(e, t, r[t]);
  return e;
}, gu = (e, r) => hu(e, _u(r)), Ou = (e, r) => {
  var t = {};
  for (var n in e)
    Ts.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Ar)
    for (var n of Ar(e))
      r.indexOf(n) < 0 && Ns.call(e, n) && (t[n] = e[n]);
  return t;
};
const Pu = Fe((e, r) => {
  var t = e, { className: n } = t, o = Ou(t, ["className"]);
  return /* @__PURE__ */ $.createElement(Q, gu(bu({ component: "span", className: Be(we.ovalLoader, n) }, o), { ref: r }));
});
var wu = Object.defineProperty, $u = Object.defineProperties, Eu = Object.getOwnPropertyDescriptors, Ir = Object.getOwnPropertySymbols, As = Object.prototype.hasOwnProperty, Is = Object.prototype.propertyIsEnumerable, Uo = (e, r, t) => r in e ? wu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Su = (e, r) => {
  for (var t in r || (r = {}))
    As.call(r, t) && Uo(e, t, r[t]);
  if (Ir)
    for (var t of Ir(r))
      Is.call(r, t) && Uo(e, t, r[t]);
  return e;
}, Ru = (e, r) => $u(e, Eu(r)), xu = (e, r) => {
  var t = {};
  for (var n in e)
    As.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Ir)
    for (var n of Ir(e))
      r.indexOf(n) < 0 && Is.call(e, n) && (t[n] = e[n]);
  return t;
};
const ju = Fe((e, r) => {
  var t = e, { className: n } = t, o = xu(t, ["className"]);
  return /* @__PURE__ */ $.createElement(Q, Ru(Su({ component: "span", className: Be(we.dotsLoader, n) }, o), { ref: r }), /* @__PURE__ */ $.createElement("span", { className: we.dot }), /* @__PURE__ */ $.createElement("span", { className: we.dot }), /* @__PURE__ */ $.createElement("span", { className: we.dot }));
});
var Cu = Object.defineProperty, Tu = Object.defineProperties, Nu = Object.getOwnPropertyDescriptors, Dr = Object.getOwnPropertySymbols, Ds = Object.prototype.hasOwnProperty, Ms = Object.prototype.propertyIsEnumerable, qo = (e, r, t) => r in e ? Cu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, hr = (e, r) => {
  for (var t in r || (r = {}))
    Ds.call(r, t) && qo(e, t, r[t]);
  if (Dr)
    for (var t of Dr(r))
      Ms.call(r, t) && qo(e, t, r[t]);
  return e;
}, Ho = (e, r) => Tu(e, Nu(r)), Au = (e, r) => {
  var t = {};
  for (var n in e)
    Ds.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Dr)
    for (var n of Dr(e))
      r.indexOf(n) < 0 && Ms.call(e, n) && (t[n] = e[n]);
  return t;
};
const Iu = {
  bars: vu,
  oval: Pu,
  dots: ju
}, Du = {
  loaders: Iu,
  type: "oval"
}, Mu = (e, { size: r, color: t }) => ({
  root: {
    "--loader-size": $e(r, "loader-size"),
    "--loader-color": t ? or(t, e) : void 0
  }
}), bn = Oe((e, r) => {
  const t = K("Loader", Du, e), n = t, {
    size: o,
    color: a,
    type: s,
    vars: i,
    className: u,
    style: d,
    classNames: f,
    styles: c,
    unstyled: m,
    loaders: O,
    variant: y,
    children: p
  } = n, P = Au(n, [
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
  ]), R = ae({
    name: "Loader",
    props: t,
    classes: we,
    className: u,
    style: d,
    classNames: f,
    styles: c,
    unstyled: m,
    vars: i,
    varsResolver: Mu
  });
  return p ? /* @__PURE__ */ $.createElement(Q, hr(Ho(hr({}, R("root")), { ref: r }), P), p) : /* @__PURE__ */ $.createElement(
    Q,
    hr(Ho(hr({}, R("root")), {
      ref: r,
      component: O[s],
      variant: y,
      size: o
    }), P)
  );
});
bn.classes = we;
bn.displayName = "@mantine/core/Loader";
var Fu = Object.defineProperty, ku = Object.defineProperties, Lu = Object.getOwnPropertyDescriptors, Mr = Object.getOwnPropertySymbols, Fs = Object.prototype.hasOwnProperty, ks = Object.prototype.propertyIsEnumerable, Yo = (e, r, t) => r in e ? Fu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, _r = (e, r) => {
  for (var t in r || (r = {}))
    Fs.call(r, t) && Yo(e, t, r[t]);
  if (Mr)
    for (var t of Mr(r))
      ks.call(r, t) && Yo(e, t, r[t]);
  return e;
}, Go = (e, r) => ku(e, Lu(r)), zu = (e, r) => {
  var t = {};
  for (var n in e)
    Fs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Mr)
    for (var n of Mr(e))
      r.indexOf(n) < 0 && ks.call(e, n) && (t[n] = e[n]);
  return t;
};
const Bu = {}, Vu = (e, { size: r, radius: t, variant: n, gradient: o, color: a }) => {
  const s = e.variantColorResolver({
    color: a || e.primaryColor,
    theme: e,
    gradient: o,
    variant: n || "filled"
  });
  return {
    root: {
      "--ai-size": $e(r, "ai-size"),
      "--ai-radius": t === void 0 ? void 0 : ot(t),
      "--ai-bg": a || n ? s.background : void 0,
      "--ai-hover": a || n ? s.hover : void 0,
      "--ai-hover-color": a || n ? s.hoverColor : void 0,
      "--ai-color": a || n ? s.color : void 0,
      "--ai-bd": a || n ? s.border : void 0
    }
  };
}, fr = je((e, r) => {
  const t = K("ActionIcon", Bu, e), n = t, {
    className: o,
    unstyled: a,
    variant: s,
    classNames: i,
    styles: u,
    style: d,
    loading: f,
    loaderProps: c,
    size: m,
    color: O,
    radius: y,
    __staticSelector: p,
    gradient: P,
    vars: R,
    children: C,
    disabled: x,
    "data-disabled": j
  } = n, g = zu(n, [
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
  ]), U = ae({
    name: ["ActionIcon", p],
    props: t,
    className: o,
    style: d,
    classes: st,
    classNames: i,
    styles: u,
    unstyled: a,
    vars: R,
    varsResolver: Vu
  });
  return /* @__PURE__ */ $.createElement(
    hn,
    Go(_r(_r({}, U("root", { active: !x && !f && !j })), g), {
      unstyled: a,
      variant: s,
      size: m,
      disabled: x || f,
      ref: r,
      mod: { loading: f, disabled: x || j }
    }),
    f ? /* @__PURE__ */ $.createElement(
      bn,
      _r(Go(_r({}, U("loader")), {
        color: "var(--ai-color)",
        size: "calc(var(--ai-size) * 0.55)"
      }), c)
    ) : C
  );
});
fr.classes = st;
fr.displayName = "@mantine/core/ActionIcon";
fr.Group = _n;
function Wu(e) {
  return Qa.toArray(e).filter(Boolean);
}
var Uu = { root: "m-4081bf90" };
const Ls = Uu;
var qu = Object.defineProperty, Hu = Object.defineProperties, Yu = Object.getOwnPropertyDescriptors, Fr = Object.getOwnPropertySymbols, zs = Object.prototype.hasOwnProperty, Bs = Object.prototype.propertyIsEnumerable, Jo = (e, r, t) => r in e ? qu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Ko = (e, r) => {
  for (var t in r || (r = {}))
    zs.call(r, t) && Jo(e, t, r[t]);
  if (Fr)
    for (var t of Fr(r))
      Bs.call(r, t) && Jo(e, t, r[t]);
  return e;
}, Gu = (e, r) => Hu(e, Yu(r)), Ju = (e, r) => {
  var t = {};
  for (var n in e)
    zs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Fr)
    for (var n of Fr(e))
      r.indexOf(n) < 0 && Bs.call(e, n) && (t[n] = e[n]);
  return t;
};
const Ku = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, Xu = (e, { grow: r, preventGrowOverflow: t, gap: n, align: o, justify: a, wrap: s }, { childWidth: i }) => ({
  root: {
    "--group-child-width": r && t ? i : void 0,
    "--group-gap": nt(n),
    "--group-align": o,
    "--group-justify": a,
    "--group-wrap": s
  }
}), kr = Oe((e, r) => {
  const t = K("Group", Ku, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: i,
    unstyled: u,
    children: d,
    gap: f,
    align: c,
    justify: m,
    wrap: O,
    grow: y,
    preventGrowOverflow: p,
    vars: P,
    variant: R,
    __size: C
  } = n, x = Ju(n, [
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
  ]), j = Wu(d), g = j.length, U = nt(f ?? "md"), fe = { childWidth: `calc(${100 / g}% - (${U} - ${U} / ${g}))` }, le = ae({
    name: "Group",
    props: t,
    stylesCtx: fe,
    className: a,
    style: s,
    classes: Ls,
    classNames: o,
    styles: i,
    unstyled: u,
    vars: P,
    varsResolver: Xu
  });
  return /* @__PURE__ */ $.createElement(
    Q,
    Ko(Gu(Ko({}, le("root")), {
      ref: r,
      variant: R,
      mod: { grow: y },
      size: C
    }), x),
    j
  );
});
kr.classes = Ls;
kr.displayName = "@mantine/core/Group";
const [Zu, it] = Al({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var Qu = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const Pe = Qu;
var ed = Object.defineProperty, rd = Object.defineProperties, td = Object.getOwnPropertyDescriptors, Lr = Object.getOwnPropertySymbols, Vs = Object.prototype.hasOwnProperty, Ws = Object.prototype.propertyIsEnumerable, Xo = (e, r, t) => r in e ? ed(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Dt = (e, r) => {
  for (var t in r || (r = {}))
    Vs.call(r, t) && Xo(e, t, r[t]);
  if (Lr)
    for (var t of Lr(r))
      Ws.call(r, t) && Xo(e, t, r[t]);
  return e;
}, Zo = (e, r) => rd(e, td(r)), nd = (e, r) => {
  var t = {};
  for (var n in e)
    Vs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Lr)
    for (var n of Lr(e))
      r.indexOf(n) < 0 && Ws.call(e, n) && (t[n] = e[n]);
  return t;
};
const Qo = {
  labelElement: "label"
}, od = (e, { size: r }) => ({
  label: {
    "--input-label-size": De(r),
    "--input-asterisk-color": void 0
  }
}), lt = Oe((e, r) => {
  const t = K("InputLabel", Qo, e), n = K("InputLabel", Qo, t), {
    classNames: o,
    className: a,
    style: s,
    styles: i,
    unstyled: u,
    vars: d,
    labelElement: f,
    size: c,
    required: m,
    htmlFor: O,
    onMouseDown: y,
    children: p,
    __staticSelector: P,
    variant: R
  } = n, C = nd(n, [
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
  ]), x = ae({
    name: ["InputWrapper", P],
    props: t,
    classes: Pe,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    rootSelector: "label",
    vars: d,
    varsResolver: od
  }), j = it(), g = (j == null ? void 0 : j.getStyles) || x;
  return /* @__PURE__ */ $.createElement(
    Q,
    Dt(Zo(Dt({}, g("label")), {
      component: f,
      variant: R,
      size: c,
      ref: r,
      htmlFor: f === "label" ? O : void 0,
      mod: { required: m },
      onMouseDown: (U) => {
        y == null || y(U), !U.defaultPrevented && U.detail > 1 && U.preventDefault();
      }
    }), C),
    p,
    m && /* @__PURE__ */ $.createElement("span", Zo(Dt({}, g("required")), { "aria-hidden": !0 }), " *")
  );
});
lt.classes = Pe;
lt.displayName = "@mantine/core/InputLabel";
var ad = Object.defineProperty, zr = Object.getOwnPropertySymbols, Us = Object.prototype.hasOwnProperty, qs = Object.prototype.propertyIsEnumerable, ea = (e, r, t) => r in e ? ad(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, ra = (e, r) => {
  for (var t in r || (r = {}))
    Us.call(r, t) && ea(e, t, r[t]);
  if (zr)
    for (var t of zr(r))
      qs.call(r, t) && ea(e, t, r[t]);
  return e;
}, sd = (e, r) => {
  var t = {};
  for (var n in e)
    Us.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && zr)
    for (var n of zr(e))
      r.indexOf(n) < 0 && qs.call(e, n) && (t[n] = e[n]);
  return t;
};
const id = {}, ld = (e, { size: r }) => ({
  error: {
    "--input-error-size": r === void 0 ? void 0 : `calc(${De(r)} - ${h(2)})`
  }
}), ct = Oe((e, r) => {
  const t = K("InputError", id, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: i,
    unstyled: u,
    vars: d,
    size: f,
    __staticSelector: c,
    __inheritStyles: m = !0,
    variant: O
  } = n, y = sd(n, [
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
  ]), p = ae({
    name: ["InputWrapper", c],
    props: t,
    classes: Pe,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    rootSelector: "error",
    vars: d,
    varsResolver: ld
  }), P = it(), R = m && (P == null ? void 0 : P.getStyles) || p;
  return /* @__PURE__ */ $.createElement(
    Q,
    ra(ra({
      component: "p",
      ref: r,
      variant: O,
      size: f
    }, R("error")), y)
  );
});
ct.classes = Pe;
ct.displayName = "@mantine/core/InputError";
var cd = Object.defineProperty, Br = Object.getOwnPropertySymbols, Hs = Object.prototype.hasOwnProperty, Ys = Object.prototype.propertyIsEnumerable, ta = (e, r, t) => r in e ? cd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, na = (e, r) => {
  for (var t in r || (r = {}))
    Hs.call(r, t) && ta(e, t, r[t]);
  if (Br)
    for (var t of Br(r))
      Ys.call(r, t) && ta(e, t, r[t]);
  return e;
}, fd = (e, r) => {
  var t = {};
  for (var n in e)
    Hs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Br)
    for (var n of Br(e))
      r.indexOf(n) < 0 && Ys.call(e, n) && (t[n] = e[n]);
  return t;
};
const oa = {}, ud = (e, { size: r }) => ({
  description: {
    "--input-description-size": r === void 0 ? void 0 : `calc(${De(r)} - ${h(2)})`
  }
}), ft = Oe((e, r) => {
  const t = K("InputDescription", oa, e), n = K("InputDescription", oa, t), {
    classNames: o,
    className: a,
    style: s,
    styles: i,
    unstyled: u,
    vars: d,
    size: f,
    __staticSelector: c,
    __inheritStyles: m = !0,
    variant: O
  } = n, y = fd(n, [
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
  ]), p = it(), P = ae({
    name: ["InputWrapper", c],
    props: t,
    classes: Pe,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    rootSelector: "description",
    vars: d,
    varsResolver: ud
  }), R = m && (p == null ? void 0 : p.getStyles) || P;
  return /* @__PURE__ */ $.createElement(
    Q,
    na(na({
      component: "p",
      ref: r,
      variant: O,
      size: f
    }, R("description")), y)
  );
});
ft.classes = Pe;
ft.displayName = "@mantine/core/InputDescription";
var dd = Object.defineProperty, pd = Object.defineProperties, md = Object.getOwnPropertyDescriptors, Vr = Object.getOwnPropertySymbols, Gs = Object.prototype.hasOwnProperty, Js = Object.prototype.propertyIsEnumerable, aa = (e, r, t) => r in e ? dd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, sa = (e, r) => {
  for (var t in r || (r = {}))
    Gs.call(r, t) && aa(e, t, r[t]);
  if (Vr)
    for (var t of Vr(r))
      Js.call(r, t) && aa(e, t, r[t]);
  return e;
}, vd = (e, r) => pd(e, md(r)), yd = (e, r) => {
  var t = {};
  for (var n in e)
    Gs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Vr)
    for (var n of Vr(e))
      r.indexOf(n) < 0 && Js.call(e, n) && (t[n] = e[n]);
  return t;
};
const ia = {}, gn = Oe((e, r) => {
  const t = K("InputPlaceholder", ia, e), n = K("InputPlaceholder", ia, t), {
    classNames: o,
    className: a,
    style: s,
    styles: i,
    unstyled: u,
    vars: d,
    __staticSelector: f,
    variant: c,
    error: m
  } = n, O = yd(n, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "__staticSelector",
    "variant",
    "error"
  ]), y = ae({
    name: ["InputPlaceholder", f],
    props: t,
    classes: Pe,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ $.createElement(
    Q,
    sa(vd(sa({}, y("placeholder")), {
      mod: { error: !!m },
      component: "span",
      variant: c,
      ref: r
    }), O)
  );
});
gn.classes = Pe;
gn.displayName = "@mantine/core/InputPlaceholder";
function hd(e, { hasDescription: r, hasError: t }) {
  const n = e.findIndex((u) => u === "input"), o = e[n - 1], a = e[n + 1];
  return { offsetBottom: r && a === "description" || t && a === "error", offsetTop: r && o === "description" || t && o === "error" };
}
var _d = Object.defineProperty, bd = Object.defineProperties, gd = Object.getOwnPropertyDescriptors, Wr = Object.getOwnPropertySymbols, Ks = Object.prototype.hasOwnProperty, Xs = Object.prototype.propertyIsEnumerable, la = (e, r, t) => r in e ? _d(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Ne = (e, r) => {
  for (var t in r || (r = {}))
    Ks.call(r, t) && la(e, t, r[t]);
  if (Wr)
    for (var t of Wr(r))
      Xs.call(r, t) && la(e, t, r[t]);
  return e;
}, ca = (e, r) => bd(e, gd(r)), Od = (e, r) => {
  var t = {};
  for (var n in e)
    Ks.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Wr)
    for (var n of Wr(e))
      r.indexOf(n) < 0 && Xs.call(e, n) && (t[n] = e[n]);
  return t;
};
const Pd = {
  labelElement: "label",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, wd = (e, { size: r }) => ({
  label: {
    "--input-label-size": De(r),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": r === void 0 ? void 0 : `calc(${De(r)} - ${h(2)})`
  },
  description: {
    "--input-description-size": r === void 0 ? void 0 : `calc(${De(r)} - ${h(2)})`
  }
}), On = Oe((e, r) => {
  const t = K("InputWrapper", Pd, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: i,
    unstyled: u,
    vars: d,
    size: f,
    variant: c,
    __staticSelector: m,
    inputContainer: O,
    inputWrapperOrder: y,
    label: p,
    error: P,
    description: R,
    labelProps: C,
    descriptionProps: x,
    errorProps: j,
    labelElement: g,
    children: U,
    withAsterisk: ie,
    id: fe,
    required: le,
    __stylesApiProps: _e
  } = n, pe = Od(n, [
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
    name: ["InputWrapper", m],
    props: _e || t,
    classes: Pe,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    vars: d,
    varsResolver: wd
  }), X = {
    size: f,
    variant: c,
    __staticSelector: m
  }, Z = Tc(fe), ue = typeof ie == "boolean" ? ie : le, te = (j == null ? void 0 : j.id) || `${Z}-error`, ce = (x == null ? void 0 : x.id) || `${Z}-description`, ve = Z, ee = !!P && typeof P != "boolean", _ = !!R, w = `${ee ? te : ""} ${_ ? ce : ""}`, I = w.trim().length > 0 ? w.trim() : void 0, D = (C == null ? void 0 : C.id) || `${Z}-label`, T = p && /* @__PURE__ */ $.createElement(
    lt,
    Ne(Ne({
      key: "label",
      labelElement: g,
      id: D,
      htmlFor: ve,
      required: ue
    }, X), C),
    p
  ), L = _ && /* @__PURE__ */ $.createElement(
    ft,
    ca(Ne(Ne({
      key: "description"
    }, x), X), {
      size: (x == null ? void 0 : x.size) || X.size,
      id: (x == null ? void 0 : x.id) || ce
    }),
    R
  ), A = /* @__PURE__ */ $.createElement($.Fragment, { key: "input" }, O(U)), M = ee && /* @__PURE__ */ $.createElement(
    ct,
    ca(Ne(Ne({}, j), X), {
      size: (j == null ? void 0 : j.size) || X.size,
      key: "error",
      id: (j == null ? void 0 : j.id) || te
    }),
    P
  ), F = y.map((z) => {
    switch (z) {
      case "label":
        return T;
      case "input":
        return A;
      case "description":
        return L;
      case "error":
        return M;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ $.createElement(
    Zu,
    {
      value: Ne({
        getStyles: me,
        describedBy: I,
        inputId: ve,
        labelId: D
      }, hd(y, { hasDescription: _, hasError: ee }))
    },
    /* @__PURE__ */ $.createElement(Q, Ne(Ne({ ref: r, variant: c, size: f }, me("root")), pe), F)
  );
});
On.classes = Pe;
On.displayName = "@mantine/core/InputWrapper";
var $d = Object.defineProperty, Ed = Object.defineProperties, Sd = Object.getOwnPropertyDescriptors, Ur = Object.getOwnPropertySymbols, Zs = Object.prototype.hasOwnProperty, Qs = Object.prototype.propertyIsEnumerable, fa = (e, r, t) => r in e ? $d(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Se = (e, r) => {
  for (var t in r || (r = {}))
    Zs.call(r, t) && fa(e, t, r[t]);
  if (Ur)
    for (var t of Ur(r))
      Qs.call(r, t) && fa(e, t, r[t]);
  return e;
}, br = (e, r) => Ed(e, Sd(r)), Rd = (e, r) => {
  var t = {};
  for (var n in e)
    Zs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Ur)
    for (var n of Ur(e))
      r.indexOf(n) < 0 && Qs.call(e, n) && (t[n] = e[n]);
  return t;
};
const xd = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, jd = (e, r, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": $e(r.size, "input-height"),
    "--input-fz": De(r.size),
    "--input-radius": r.radius === void 0 ? void 0 : ot(r.radius),
    "--input-left-section-width": r.leftSectionWidth !== void 0 ? h(r.leftSectionWidth) : void 0,
    "--input-right-section-width": r.rightSectionWidth !== void 0 ? h(r.rightSectionWidth) : void 0,
    "--input-padding-y": r.multiline ? $e(r.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": r.leftSectionPointerEvents,
    "--input-right-section-pointer-events": r.rightSectionPointerEvents
  }
}), Ee = je((e, r) => {
  const t = K("Input", xd, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: i,
    unstyled: u,
    required: d,
    __staticSelector: f,
    __stylesApiProps: c,
    size: m,
    wrapperProps: O,
    error: y,
    disabled: p,
    leftSection: P,
    leftSectionProps: R,
    leftSectionWidth: C,
    rightSection: x,
    rightSectionProps: j,
    rightSectionWidth: g,
    rightSectionPointerEvents: U,
    leftSectionPointerEvents: ie,
    variant: fe,
    vars: le,
    pointer: _e,
    multiline: pe,
    radius: me,
    id: X,
    withAria: Z,
    withErrorStyles: ue
  } = n, te = Rd(n, [
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
  ]), { styleProps: ce, rest: ve } = yn(te), ee = it(), _ = { offsetBottom: ee == null ? void 0 : ee.offsetBottom, offsetTop: ee == null ? void 0 : ee.offsetTop }, w = ae({
    name: ["Input", f],
    props: c || t,
    classes: Pe,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    stylesCtx: _,
    rootSelector: "wrapper",
    vars: le,
    varsResolver: jd
  }), I = Z ? {
    required: d,
    disabled: p,
    "aria-invalid": !!y,
    "aria-describedby": ee == null ? void 0 : ee.describedBy,
    id: (ee == null ? void 0 : ee.inputId) || X
  } : {};
  return /* @__PURE__ */ $.createElement(
    Q,
    br(Se(Se(Se({}, w("wrapper")), ce), O), {
      mod: {
        error: !!y && ue,
        pointer: _e,
        disabled: p,
        multiline: pe,
        "data-with-right-section": !!x,
        "data-with-left-section": !!P
      },
      variant: fe,
      size: m
    }),
    P && /* @__PURE__ */ $.createElement(
      "div",
      Se(br(Se({}, R), {
        "data-position": "left"
      }), w("section", {
        className: R == null ? void 0 : R.className,
        style: R == null ? void 0 : R.style
      })),
      P
    ),
    /* @__PURE__ */ $.createElement(
      Q,
      Se(br(Se(Se({
        component: "input"
      }, ve), I), {
        ref: r,
        required: d,
        mod: { disabled: p, error: !!y && ue },
        variant: fe
      }), w("input"))
    ),
    x && /* @__PURE__ */ $.createElement(
      "div",
      Se(br(Se({}, j), {
        "data-position": "right"
      }), w("section", {
        className: j == null ? void 0 : j.className,
        style: j == null ? void 0 : j.style
      })),
      x
    )
  );
});
Ee.classes = Pe;
Ee.Wrapper = On;
Ee.Label = lt;
Ee.Error = ct;
Ee.Description = ft;
Ee.Placeholder = gn;
Ee.displayName = "@mantine/core/Input";
var Cd = Object.defineProperty, Td = Object.defineProperties, Nd = Object.getOwnPropertyDescriptors, qr = Object.getOwnPropertySymbols, ei = Object.prototype.hasOwnProperty, ri = Object.prototype.propertyIsEnumerable, ua = (e, r, t) => r in e ? Cd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, gr = (e, r) => {
  for (var t in r || (r = {}))
    ei.call(r, t) && ua(e, t, r[t]);
  if (qr)
    for (var t of qr(r))
      ri.call(r, t) && ua(e, t, r[t]);
  return e;
}, Ad = (e, r) => Td(e, Nd(r)), Id = (e, r) => {
  var t = {};
  for (var n in e)
    ei.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && qr)
    for (var n of qr(e))
      r.indexOf(n) < 0 && ri.call(e, n) && (t[n] = e[n]);
  return t;
};
function Dd(e, r, t) {
  const n = K(e, r, t), o = n, {
    label: a,
    description: s,
    error: i,
    required: u,
    classNames: d,
    styles: f,
    className: c,
    unstyled: m,
    __staticSelector: O,
    __stylesApiProps: y,
    errorProps: p,
    labelProps: P,
    descriptionProps: R,
    wrapperProps: C,
    id: x,
    size: j,
    style: g,
    inputContainer: U,
    inputWrapperOrder: ie,
    withAsterisk: fe,
    variant: le,
    vars: _e
  } = o, pe = Id(o, [
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
  ]), { styleProps: me, rest: X } = yn(pe), Z = gr({
    label: a,
    description: s,
    error: i,
    required: u,
    classNames: d,
    className: c,
    __staticSelector: O,
    __stylesApiProps: y || n,
    errorProps: p,
    labelProps: P,
    descriptionProps: R,
    unstyled: m,
    styles: f,
    size: j,
    style: g,
    inputContainer: U,
    inputWrapperOrder: ie,
    withAsterisk: fe,
    variant: le,
    id: x
  }, C);
  return Ad(gr({}, X), {
    classNames: d,
    styles: f,
    unstyled: m,
    wrapperProps: gr(gr({}, Z), me),
    inputProps: {
      required: u,
      classNames: d,
      styles: f,
      unstyled: m,
      size: j,
      __staticSelector: O,
      __stylesApiProps: y || n,
      error: i,
      variant: le,
      id: x
    }
  });
}
var Md = Object.defineProperty, Fd = Object.defineProperties, kd = Object.getOwnPropertyDescriptors, Hr = Object.getOwnPropertySymbols, ti = Object.prototype.hasOwnProperty, ni = Object.prototype.propertyIsEnumerable, da = (e, r, t) => r in e ? Md(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, nr = (e, r) => {
  for (var t in r || (r = {}))
    ti.call(r, t) && da(e, t, r[t]);
  if (Hr)
    for (var t of Hr(r))
      ni.call(r, t) && da(e, t, r[t]);
  return e;
}, Ld = (e, r) => Fd(e, kd(r)), zd = (e, r) => {
  var t = {};
  for (var n in e)
    ti.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Hr)
    for (var n of Hr(e))
      r.indexOf(n) < 0 && ni.call(e, n) && (t[n] = e[n]);
  return t;
};
const Bd = {
  __staticSelector: "InputBase",
  withAria: !0
}, ut = je((e, r) => {
  const t = Dd("InputBase", Bd, e), { inputProps: n, wrapperProps: o } = t, a = zd(t, ["inputProps", "wrapperProps"]);
  return /* @__PURE__ */ $.createElement(Ee.Wrapper, nr({}, o), /* @__PURE__ */ $.createElement(Ee, Ld(nr(nr({}, n), a), { ref: r })));
});
ut.classes = nr(nr({}, Ee.classes), Ee.Wrapper.classes);
ut.displayName = "@mantine/core/InputBase";
var Vd = { root: "m-7f854edf" };
const oi = Vd;
var Wd = Object.defineProperty, Ud = Object.defineProperties, qd = Object.getOwnPropertyDescriptors, Yr = Object.getOwnPropertySymbols, ai = Object.prototype.hasOwnProperty, si = Object.prototype.propertyIsEnumerable, pa = (e, r, t) => r in e ? Wd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Mt = (e, r) => {
  for (var t in r || (r = {}))
    ai.call(r, t) && pa(e, t, r[t]);
  if (Yr)
    for (var t of Yr(r))
      si.call(r, t) && pa(e, t, r[t]);
  return e;
}, Hd = (e, r) => Ud(e, qd(r)), Yd = (e, r) => {
  var t = {};
  for (var n in e)
    ai.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Yr)
    for (var n of Yr(e))
      r.indexOf(n) < 0 && si.call(e, n) && (t[n] = e[n]);
  return t;
};
const Gd = {
  position: { bottom: 0, right: 0 },
  zIndex: Dl("modal"),
  withinPortal: !0
}, Jd = (e, { zIndex: r, position: t }) => ({
  root: {
    "--affix-z-index": r == null ? void 0 : r.toString(),
    "--affix-top": h(t == null ? void 0 : t.top),
    "--affix-left": h(t == null ? void 0 : t.left),
    "--affix-bottom": h(t == null ? void 0 : t.bottom),
    "--affix-right": h(t == null ? void 0 : t.right)
  }
}), Pn = Oe((e, r) => {
  const t = K("Affix", Gd, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: i,
    unstyled: u,
    vars: d,
    portalProps: f,
    zIndex: c,
    withinPortal: m,
    position: O
  } = n, y = Yd(n, [
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
  ]), p = ae({
    name: "Affix",
    classes: oi,
    props: t,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    vars: d,
    varsResolver: Jd
  });
  return /* @__PURE__ */ $.createElement(Ss, Hd(Mt({}, f), { withinPortal: m }), /* @__PURE__ */ $.createElement(Q, Mt(Mt({ ref: r }, p("root")), y)));
});
Pn.classes = oi;
Pn.displayName = "@mantine/core/Affix";
var Kd = { root: "m-b6d8b162" };
const ii = Kd;
var Xd = Object.defineProperty, Zd = Object.defineProperties, Qd = Object.getOwnPropertyDescriptors, Gr = Object.getOwnPropertySymbols, li = Object.prototype.hasOwnProperty, ci = Object.prototype.propertyIsEnumerable, ma = (e, r, t) => r in e ? Xd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, va = (e, r) => {
  for (var t in r || (r = {}))
    li.call(r, t) && ma(e, t, r[t]);
  if (Gr)
    for (var t of Gr(r))
      ci.call(r, t) && ma(e, t, r[t]);
  return e;
}, ep = (e, r) => Zd(e, Qd(r)), rp = (e, r) => {
  var t = {};
  for (var n in e)
    li.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Gr)
    for (var n of Gr(e))
      r.indexOf(n) < 0 && ci.call(e, n) && (t[n] = e[n]);
  return t;
};
function tp(e) {
  if (e === "start")
    return "start";
  if (e === "end" || e)
    return "end";
}
const np = {
  inherit: !1
}, op = (e, { variant: r, lineClamp: t, gradient: n, size: o, color: a }) => ({
  root: {
    "--text-fz": De(o),
    "--text-lh": Ml(o),
    "--text-gradient": r === "gradient" ? Zt(n, e) : void 0,
    "--text-line-clamp": typeof t == "number" ? t.toString() : void 0,
    "--text-color": a ? or(a, e) : void 0
  }
}), ar = je((e, r) => {
  const t = K("Text", np, e), n = t, {
    lineClamp: o,
    truncate: a,
    inline: s,
    inherit: i,
    gradient: u,
    span: d,
    __staticSelector: f,
    vars: c,
    className: m,
    style: O,
    classNames: y,
    styles: p,
    unstyled: P,
    variant: R,
    mod: C,
    size: x
  } = n, j = rp(n, [
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
    name: ["Text", f],
    props: t,
    classes: ii,
    className: m,
    style: O,
    classNames: y,
    styles: p,
    unstyled: P,
    vars: c,
    varsResolver: op
  });
  return /* @__PURE__ */ $.createElement(
    Q,
    va(ep(va({}, g("root", { focusable: !0 })), {
      ref: r,
      component: d ? "span" : "p",
      variant: R,
      mod: [
        {
          "data-truncate": tp(a),
          "data-line-clamp": typeof o == "number",
          "data-inline": s,
          "data-inherit": i
        },
        C
      ],
      size: x
    }), j)
  );
});
ar.classes = ii;
ar.displayName = "@mantine/core/Text";
const fi = ir(null), ap = fi.Provider;
function sp() {
  return { withinGroup: !!Ye(fi) };
}
var ip = { root: "m-f85678b6", image: "m-11f8ac07", placeholder: "m-104cd71f", group: "m-11def92b" };
const dt = ip;
var lp = Object.defineProperty, Jr = Object.getOwnPropertySymbols, ui = Object.prototype.hasOwnProperty, di = Object.prototype.propertyIsEnumerable, ya = (e, r, t) => r in e ? lp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, ha = (e, r) => {
  for (var t in r || (r = {}))
    ui.call(r, t) && ya(e, t, r[t]);
  if (Jr)
    for (var t of Jr(r))
      di.call(r, t) && ya(e, t, r[t]);
  return e;
}, cp = (e, r) => {
  var t = {};
  for (var n in e)
    ui.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Jr)
    for (var n of Jr(e))
      r.indexOf(n) < 0 && di.call(e, n) && (t[n] = e[n]);
  return t;
};
const fp = {}, up = (e, { spacing: r }) => ({
  group: {
    "--ag-spacing": nt(r)
  }
}), wn = Oe((e, r) => {
  const t = K("AvatarGroup", fp, e), n = t, { classNames: o, className: a, style: s, styles: i, unstyled: u, vars: d, spacing: f } = n, c = cp(n, ["classNames", "className", "style", "styles", "unstyled", "vars", "spacing"]), m = ae({
    name: "AvatarGroup",
    classes: dt,
    props: t,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    vars: d,
    varsResolver: up,
    rootSelector: "group"
  });
  return /* @__PURE__ */ $.createElement(ap, { value: !0 }, /* @__PURE__ */ $.createElement(Q, ha(ha({ ref: r }, m("group")), c)));
});
wn.classes = dt;
wn.displayName = "@mantine/core/AvatarGroup";
var dp = Object.defineProperty, pp = Object.defineProperties, mp = Object.getOwnPropertyDescriptors, _a = Object.getOwnPropertySymbols, vp = Object.prototype.hasOwnProperty, yp = Object.prototype.propertyIsEnumerable, ba = (e, r, t) => r in e ? dp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, hp = (e, r) => {
  for (var t in r || (r = {}))
    vp.call(r, t) && ba(e, t, r[t]);
  if (_a)
    for (var t of _a(r))
      yp.call(r, t) && ba(e, t, r[t]);
  return e;
}, _p = (e, r) => pp(e, mp(r));
function bp(e) {
  return /* @__PURE__ */ $.createElement(
    "svg",
    _p(hp({}, e), {
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
var gp = Object.defineProperty, Op = Object.defineProperties, Pp = Object.getOwnPropertyDescriptors, Kr = Object.getOwnPropertySymbols, pi = Object.prototype.hasOwnProperty, mi = Object.prototype.propertyIsEnumerable, ga = (e, r, t) => r in e ? gp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Qe = (e, r) => {
  for (var t in r || (r = {}))
    pi.call(r, t) && ga(e, t, r[t]);
  if (Kr)
    for (var t of Kr(r))
      mi.call(r, t) && ga(e, t, r[t]);
  return e;
}, Ft = (e, r) => Op(e, Pp(r)), wp = (e, r) => {
  var t = {};
  for (var n in e)
    pi.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Kr)
    for (var n of Kr(e))
      r.indexOf(n) < 0 && mi.call(e, n) && (t[n] = e[n]);
  return t;
};
const $p = {}, Ep = (e, { size: r, radius: t, variant: n, gradient: o, color: a }) => {
  const s = e.variantColorResolver({
    color: a || "gray",
    theme: e,
    gradient: o,
    variant: n || "light"
  });
  return {
    root: {
      "--avatar-size": $e(r, "avatar-size"),
      "--avatar-radius": t === void 0 ? void 0 : ot(t),
      "--avatar-bg": a || n ? s.background : void 0,
      "--avatar-color": a || n ? s.color : void 0,
      "--avatar-bd": a || n ? s.border : void 0
    }
  };
}, pt = je((e, r) => {
  const t = K("Avatar", $p, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: i,
    unstyled: u,
    vars: d,
    src: f,
    alt: c,
    radius: m,
    color: O,
    gradient: y,
    imageProps: p,
    children: P
  } = n, R = wp(n, [
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
  ]), C = sp(), [x, j] = Me(!f), g = ae({
    name: "Avatar",
    props: t,
    classes: dt,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    vars: d,
    varsResolver: Ep
  });
  return Er(() => j(!f), [f]), /* @__PURE__ */ $.createElement(Q, Qe(Ft(Qe({}, g("root")), { mod: { "within-group": C.withinGroup }, ref: r }), R), x ? /* @__PURE__ */ $.createElement("span", Ft(Qe({}, g("placeholder")), { title: c }), P || /* @__PURE__ */ $.createElement(bp, null)) : /* @__PURE__ */ $.createElement(
    "img",
    Ft(Qe(Qe({}, p), g("image")), {
      src: f,
      alt: c,
      onError: (U) => {
        var ie;
        j(!0), (ie = p == null ? void 0 : p.onError) == null || ie.call(p, U);
      }
    })
  ));
});
pt.classes = dt;
pt.displayName = "@mantine/core/Avatar";
pt.Group = wn;
const [Sp, Rp] = Nl(
  "Card component was not found in tree"
);
var xp = { root: "m-e615b15f", section: "m-599a2148" };
const $n = xp;
var jp = Object.defineProperty, Xr = Object.getOwnPropertySymbols, vi = Object.prototype.hasOwnProperty, yi = Object.prototype.propertyIsEnumerable, Oa = (e, r, t) => r in e ? jp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Pa = (e, r) => {
  for (var t in r || (r = {}))
    vi.call(r, t) && Oa(e, t, r[t]);
  if (Xr)
    for (var t of Xr(r))
      yi.call(r, t) && Oa(e, t, r[t]);
  return e;
}, Cp = (e, r) => {
  var t = {};
  for (var n in e)
    vi.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Xr)
    for (var n of Xr(e))
      r.indexOf(n) < 0 && yi.call(e, n) && (t[n] = e[n]);
  return t;
};
const Tp = {}, mt = je((e, r) => {
  const n = K("CardSection", Tp, e), { classNames: o, className: a, style: s, styles: i, vars: u, withBorder: d, inheritPadding: f } = n, c = Cp(n, ["classNames", "className", "style", "styles", "vars", "withBorder", "inheritPadding"]), m = Rp();
  return /* @__PURE__ */ $.createElement(
    Q,
    Pa(Pa({
      ref: r,
      mod: { "with-border": d, "inherit-padding": f }
    }, m.getStyles("section", { className: a, style: s, styles: i, classNames: o })), c)
  );
});
mt.classes = $n;
mt.displayName = "@mantine/core/CardSection";
var Np = Object.defineProperty, Zr = Object.getOwnPropertySymbols, hi = Object.prototype.hasOwnProperty, _i = Object.prototype.propertyIsEnumerable, wa = (e, r, t) => r in e ? Np(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, $a = (e, r) => {
  for (var t in r || (r = {}))
    hi.call(r, t) && wa(e, t, r[t]);
  if (Zr)
    for (var t of Zr(r))
      _i.call(r, t) && wa(e, t, r[t]);
  return e;
}, Ap = (e, r) => {
  var t = {};
  for (var n in e)
    hi.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Zr)
    for (var n of Zr(e))
      r.indexOf(n) < 0 && _i.call(e, n) && (t[n] = e[n]);
  return t;
};
const Ip = {}, Dp = (e, { padding: r }) => ({
  root: {
    "--card-padding": nt(r)
  }
}), vt = je((e, r) => {
  const t = K("Card", Ip, e), n = t, { classNames: o, className: a, style: s, styles: i, unstyled: u, vars: d, children: f, padding: c } = n, m = Ap(n, ["classNames", "className", "style", "styles", "unstyled", "vars", "children", "padding"]), O = ae({
    name: "Card",
    props: t,
    classes: $n,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    vars: d,
    varsResolver: Dp
  }), y = Qa.toArray(f), p = y.map((P, R) => typeof P == "object" && P && "type" in P && P.type === mt ? gl(P, {
    "data-first-section": R === 0 || void 0,
    "data-last-section": R === y.length - 1 || void 0
  }) : P);
  return /* @__PURE__ */ $.createElement(Sp, { value: { getStyles: O } }, /* @__PURE__ */ $.createElement(cr, $a($a({ ref: r, unstyled: u }, O("root")), m), p));
});
vt.classes = $n;
vt.displayName = "@mantine/core/Card";
vt.Section = mt;
var Mp = { root: "m-4451eb3a" };
const bi = Mp;
var Fp = Object.defineProperty, Qr = Object.getOwnPropertySymbols, gi = Object.prototype.hasOwnProperty, Oi = Object.prototype.propertyIsEnumerable, Ea = (e, r, t) => r in e ? Fp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Sa = (e, r) => {
  for (var t in r || (r = {}))
    gi.call(r, t) && Ea(e, t, r[t]);
  if (Qr)
    for (var t of Qr(r))
      Oi.call(r, t) && Ea(e, t, r[t]);
  return e;
}, kp = (e, r) => {
  var t = {};
  for (var n in e)
    gi.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Qr)
    for (var n of Qr(e))
      r.indexOf(n) < 0 && Oi.call(e, n) && (t[n] = e[n]);
  return t;
};
const Lp = {}, En = je((e, r) => {
  const t = K("Center", Lp, e), n = t, { classNames: o, className: a, style: s, styles: i, unstyled: u, vars: d, inline: f } = n, c = kp(n, ["classNames", "className", "style", "styles", "unstyled", "vars", "inline"]), m = ae({
    name: "Center",
    props: t,
    classes: bi,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    vars: d
  });
  return /* @__PURE__ */ $.createElement(Q, Sa(Sa({ ref: r, mod: { inline: f } }, m("root")), c));
});
En.classes = bi;
En.displayName = "@mantine/core/Center";
var zp = { root: "m-3eebeb36", label: "m-9e365f20" };
const Pi = zp;
var Bp = Object.defineProperty, Vp = Object.defineProperties, Wp = Object.getOwnPropertyDescriptors, et = Object.getOwnPropertySymbols, wi = Object.prototype.hasOwnProperty, $i = Object.prototype.propertyIsEnumerable, Ra = (e, r, t) => r in e ? Bp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, kt = (e, r) => {
  for (var t in r || (r = {}))
    wi.call(r, t) && Ra(e, t, r[t]);
  if (et)
    for (var t of et(r))
      $i.call(r, t) && Ra(e, t, r[t]);
  return e;
}, Up = (e, r) => Vp(e, Wp(r)), qp = (e, r) => {
  var t = {};
  for (var n in e)
    wi.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && et)
    for (var n of et(e))
      r.indexOf(n) < 0 && $i.call(e, n) && (t[n] = e[n]);
  return t;
};
const Hp = {
  orientation: "horizontal"
}, Yp = (e, { color: r, variant: t, size: n }) => ({
  root: {
    "--divider-color": r ? or(r, e) : void 0,
    "--divider-border-style": t,
    "--divider-size": $e(n, "divider-size")
  }
}), Sn = Oe((e, r) => {
  const t = K("Divider", Hp, e), n = t, {
    classNames: o,
    className: a,
    style: s,
    styles: i,
    unstyled: u,
    vars: d,
    color: f,
    orientation: c,
    label: m,
    labelPosition: O
  } = n, y = qp(n, [
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
  ]), p = ae({
    name: "Divider",
    classes: Pi,
    props: t,
    className: a,
    style: s,
    classNames: o,
    styles: i,
    unstyled: u,
    vars: d,
    varsResolver: Yp
  });
  return /* @__PURE__ */ $.createElement(
    Q,
    Up(kt(kt({
      ref: r,
      mod: { orientation: c, "with-label": !!m }
    }, p("root")), y), {
      role: "separator"
    }),
    m && /* @__PURE__ */ $.createElement(Q, kt({ component: "span", mod: { position: O } }, p("label")), m)
  );
});
Sn.classes = Pi;
Sn.displayName = "@mantine/core/Divider";
var Gp = Object.defineProperty, Jp = Object.defineProperties, Kp = Object.getOwnPropertyDescriptors, xa = Object.getOwnPropertySymbols, Xp = Object.prototype.hasOwnProperty, Zp = Object.prototype.propertyIsEnumerable, ja = (e, r, t) => r in e ? Gp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Qp = (e, r) => {
  for (var t in r || (r = {}))
    Xp.call(r, t) && ja(e, t, r[t]);
  if (xa)
    for (var t of xa(r))
      Zp.call(r, t) && ja(e, t, r[t]);
  return e;
}, em = (e, r) => Jp(e, Kp(r));
const rm = {}, Rn = Oe((e, r) => {
  const t = K("TextInput", rm, e);
  return /* @__PURE__ */ $.createElement(ut, em(Qp({ component: "input", ref: r }, t), { __staticSelector: "TextInput" }));
});
Rn.classes = ut.classes;
Rn.displayName = "@mantine/core/TextInput";
var rn = { exports: {} }, Or = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca;
function tm() {
  if (Ca)
    return H;
  Ca = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function x(g) {
    if (typeof g == "object" && g !== null) {
      var U = g.$$typeof;
      switch (U) {
        case r:
          switch (g = g.type, g) {
            case u:
            case d:
            case n:
            case a:
            case o:
            case c:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case i:
                case f:
                case y:
                case O:
                case s:
                  return g;
                default:
                  return U;
              }
          }
        case t:
          return U;
      }
    }
  }
  function j(g) {
    return x(g) === d;
  }
  return H.AsyncMode = u, H.ConcurrentMode = d, H.ContextConsumer = i, H.ContextProvider = s, H.Element = r, H.ForwardRef = f, H.Fragment = n, H.Lazy = y, H.Memo = O, H.Portal = t, H.Profiler = a, H.StrictMode = o, H.Suspense = c, H.isAsyncMode = function(g) {
    return j(g) || x(g) === u;
  }, H.isConcurrentMode = j, H.isContextConsumer = function(g) {
    return x(g) === i;
  }, H.isContextProvider = function(g) {
    return x(g) === s;
  }, H.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === r;
  }, H.isForwardRef = function(g) {
    return x(g) === f;
  }, H.isFragment = function(g) {
    return x(g) === n;
  }, H.isLazy = function(g) {
    return x(g) === y;
  }, H.isMemo = function(g) {
    return x(g) === O;
  }, H.isPortal = function(g) {
    return x(g) === t;
  }, H.isProfiler = function(g) {
    return x(g) === a;
  }, H.isStrictMode = function(g) {
    return x(g) === o;
  }, H.isSuspense = function(g) {
    return x(g) === c;
  }, H.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === d || g === a || g === o || g === c || g === m || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === O || g.$$typeof === s || g.$$typeof === i || g.$$typeof === f || g.$$typeof === P || g.$$typeof === R || g.$$typeof === C || g.$$typeof === p);
  }, H.typeOf = x, H;
}
var Y = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta;
function nm() {
  return Ta || (Ta = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function x(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === n || E === d || E === a || E === o || E === c || E === m || typeof E == "object" && E !== null && (E.$$typeof === y || E.$$typeof === O || E.$$typeof === s || E.$$typeof === i || E.$$typeof === f || E.$$typeof === P || E.$$typeof === R || E.$$typeof === C || E.$$typeof === p);
    }
    function j(E) {
      if (typeof E == "object" && E !== null) {
        var ye = E.$$typeof;
        switch (ye) {
          case r:
            var ke = E.type;
            switch (ke) {
              case u:
              case d:
              case n:
              case a:
              case o:
              case c:
                return ke;
              default:
                var Le = ke && ke.$$typeof;
                switch (Le) {
                  case i:
                  case f:
                  case y:
                  case O:
                  case s:
                    return Le;
                  default:
                    return ye;
                }
            }
          case t:
            return ye;
        }
      }
    }
    var g = u, U = d, ie = i, fe = s, le = r, _e = f, pe = n, me = y, X = O, Z = t, ue = a, te = o, ce = c, ve = !1;
    function ee(E) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(E) || j(E) === u;
    }
    function _(E) {
      return j(E) === d;
    }
    function w(E) {
      return j(E) === i;
    }
    function I(E) {
      return j(E) === s;
    }
    function D(E) {
      return typeof E == "object" && E !== null && E.$$typeof === r;
    }
    function T(E) {
      return j(E) === f;
    }
    function L(E) {
      return j(E) === n;
    }
    function A(E) {
      return j(E) === y;
    }
    function M(E) {
      return j(E) === O;
    }
    function F(E) {
      return j(E) === t;
    }
    function z(E) {
      return j(E) === a;
    }
    function k(E) {
      return j(E) === o;
    }
    function se(E) {
      return j(E) === c;
    }
    Y.AsyncMode = g, Y.ConcurrentMode = U, Y.ContextConsumer = ie, Y.ContextProvider = fe, Y.Element = le, Y.ForwardRef = _e, Y.Fragment = pe, Y.Lazy = me, Y.Memo = X, Y.Portal = Z, Y.Profiler = ue, Y.StrictMode = te, Y.Suspense = ce, Y.isAsyncMode = ee, Y.isConcurrentMode = _, Y.isContextConsumer = w, Y.isContextProvider = I, Y.isElement = D, Y.isForwardRef = T, Y.isFragment = L, Y.isLazy = A, Y.isMemo = M, Y.isPortal = F, Y.isProfiler = z, Y.isStrictMode = k, Y.isSuspense = se, Y.isValidElementType = x, Y.typeOf = j;
  }()), Y;
}
var Na;
function Ei() {
  return Na || (Na = 1, process.env.NODE_ENV === "production" ? Or.exports = tm() : Or.exports = nm()), Or.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Lt, Aa;
function om() {
  if (Aa)
    return Lt;
  Aa = 1;
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
      for (var s = {}, i = 0; i < 10; i++)
        s["_" + String.fromCharCode(i)] = i;
      var u = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Lt = o() ? Object.assign : function(a, s) {
    for (var i, u = n(a), d, f = 1; f < arguments.length; f++) {
      i = Object(arguments[f]);
      for (var c in i)
        r.call(i, c) && (u[c] = i[c]);
      if (e) {
        d = e(i);
        for (var m = 0; m < d.length; m++)
          t.call(i, d[m]) && (u[d[m]] = i[d[m]]);
      }
    }
    return u;
  }, Lt;
}
var zt, Ia;
function xn() {
  if (Ia)
    return zt;
  Ia = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return zt = e, zt;
}
var Bt, Da;
function Si() {
  return Da || (Da = 1, Bt = Function.call.bind(Object.prototype.hasOwnProperty)), Bt;
}
var Vt, Ma;
function am() {
  if (Ma)
    return Vt;
  Ma = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = xn(), t = {}, n = Si();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, i, u, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var c;
          try {
            if (typeof a[f] != "function") {
              var m = Error(
                (u || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            c = a[f](s, f, u, i, null, r);
          } catch (y) {
            c = y;
          }
          if (c && !(c instanceof Error) && e(
            (u || "React class") + ": type specification of " + i + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof c + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), c instanceof Error && !(c.message in t)) {
            t[c.message] = !0;
            var O = d ? d() : "";
            e(
              "Failed " + i + " type: " + c.message + (O ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Vt = o, Vt;
}
var Wt, Fa;
function sm() {
  if (Fa)
    return Wt;
  Fa = 1;
  var e = Ei(), r = om(), t = xn(), n = Si(), o = am(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var u = "Warning: " + i;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Wt = function(i, u) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function c(_) {
      var w = _ && (d && _[d] || _[f]);
      if (typeof w == "function")
        return w;
    }
    var m = "<<anonymous>>", O = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: C(),
      arrayOf: x,
      element: j(),
      elementType: g(),
      instanceOf: U,
      node: _e(),
      objectOf: fe,
      oneOf: ie,
      oneOfType: le,
      shape: me,
      exact: X
    };
    function y(_, w) {
      return _ === w ? _ !== 0 || 1 / _ === 1 / w : _ !== _ && w !== w;
    }
    function p(_, w) {
      this.message = _, this.data = w && typeof w == "object" ? w : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function P(_) {
      if (process.env.NODE_ENV !== "production")
        var w = {}, I = 0;
      function D(L, A, M, F, z, k, se) {
        if (F = F || m, k = k || M, se !== t) {
          if (u) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = F + ":" + M;
            !w[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + k + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), w[ye] = !0, I++);
          }
        }
        return A[M] == null ? L ? A[M] === null ? new p("The " + z + " `" + k + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new p("The " + z + " `" + k + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : _(A, M, F, z, k);
      }
      var T = D.bind(null, !1);
      return T.isRequired = D.bind(null, !0), T;
    }
    function R(_) {
      function w(I, D, T, L, A, M) {
        var F = I[D], z = te(F);
        if (z !== _) {
          var k = ce(F);
          return new p(
            "Invalid " + L + " `" + A + "` of type " + ("`" + k + "` supplied to `" + T + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return P(w);
    }
    function C() {
      return P(s);
    }
    function x(_) {
      function w(I, D, T, L, A) {
        if (typeof _ != "function")
          return new p("Property `" + A + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var M = I[D];
        if (!Array.isArray(M)) {
          var F = te(M);
          return new p("Invalid " + L + " `" + A + "` of type " + ("`" + F + "` supplied to `" + T + "`, expected an array."));
        }
        for (var z = 0; z < M.length; z++) {
          var k = _(M, z, T, L, A + "[" + z + "]", t);
          if (k instanceof Error)
            return k;
        }
        return null;
      }
      return P(w);
    }
    function j() {
      function _(w, I, D, T, L) {
        var A = w[I];
        if (!i(A)) {
          var M = te(A);
          return new p("Invalid " + T + " `" + L + "` of type " + ("`" + M + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return P(_);
    }
    function g() {
      function _(w, I, D, T, L) {
        var A = w[I];
        if (!e.isValidElementType(A)) {
          var M = te(A);
          return new p("Invalid " + T + " `" + L + "` of type " + ("`" + M + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return P(_);
    }
    function U(_) {
      function w(I, D, T, L, A) {
        if (!(I[D] instanceof _)) {
          var M = _.name || m, F = ee(I[D]);
          return new p("Invalid " + L + " `" + A + "` of type " + ("`" + F + "` supplied to `" + T + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return P(w);
    }
    function ie(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function w(I, D, T, L, A) {
        for (var M = I[D], F = 0; F < _.length; F++)
          if (y(M, _[F]))
            return null;
        var z = JSON.stringify(_, function(se, E) {
          var ye = ce(E);
          return ye === "symbol" ? String(E) : E;
        });
        return new p("Invalid " + L + " `" + A + "` of value `" + String(M) + "` " + ("supplied to `" + T + "`, expected one of " + z + "."));
      }
      return P(w);
    }
    function fe(_) {
      function w(I, D, T, L, A) {
        if (typeof _ != "function")
          return new p("Property `" + A + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var M = I[D], F = te(M);
        if (F !== "object")
          return new p("Invalid " + L + " `" + A + "` of type " + ("`" + F + "` supplied to `" + T + "`, expected an object."));
        for (var z in M)
          if (n(M, z)) {
            var k = _(M, z, T, L, A + "." + z, t);
            if (k instanceof Error)
              return k;
          }
        return null;
      }
      return P(w);
    }
    function le(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var w = 0; w < _.length; w++) {
        var I = _[w];
        if (typeof I != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ve(I) + " at index " + w + "."
          ), s;
      }
      function D(T, L, A, M, F) {
        for (var z = [], k = 0; k < _.length; k++) {
          var se = _[k], E = se(T, L, A, M, F, t);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && z.push(E.data.expectedType);
        }
        var ye = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new p("Invalid " + M + " `" + F + "` supplied to " + ("`" + A + "`" + ye + "."));
      }
      return P(D);
    }
    function _e() {
      function _(w, I, D, T, L) {
        return Z(w[I]) ? null : new p("Invalid " + T + " `" + L + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return P(_);
    }
    function pe(_, w, I, D, T) {
      return new p(
        (_ || "React class") + ": " + w + " type `" + I + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function me(_) {
      function w(I, D, T, L, A) {
        var M = I[D], F = te(M);
        if (F !== "object")
          return new p("Invalid " + L + " `" + A + "` of type `" + F + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var z in _) {
          var k = _[z];
          if (typeof k != "function")
            return pe(T, L, A, z, ce(k));
          var se = k(M, z, T, L, A + "." + z, t);
          if (se)
            return se;
        }
        return null;
      }
      return P(w);
    }
    function X(_) {
      function w(I, D, T, L, A) {
        var M = I[D], F = te(M);
        if (F !== "object")
          return new p("Invalid " + L + " `" + A + "` of type `" + F + "` " + ("supplied to `" + T + "`, expected `object`."));
        var z = r({}, I[D], _);
        for (var k in z) {
          var se = _[k];
          if (n(_, k) && typeof se != "function")
            return pe(T, L, A, k, ce(se));
          if (!se)
            return new p(
              "Invalid " + L + " `" + A + "` key `" + k + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(I[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var E = se(M, k, T, L, A + "." + k, t);
          if (E)
            return E;
        }
        return null;
      }
      return P(w);
    }
    function Z(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(Z);
          if (_ === null || i(_))
            return !0;
          var w = c(_);
          if (w) {
            var I = w.call(_), D;
            if (w !== _.entries) {
              for (; !(D = I.next()).done; )
                if (!Z(D.value))
                  return !1;
            } else
              for (; !(D = I.next()).done; ) {
                var T = D.value;
                if (T && !Z(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(_, w) {
      return _ === "symbol" ? !0 : w ? w["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && w instanceof Symbol : !1;
    }
    function te(_) {
      var w = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : ue(w, _) ? "symbol" : w;
    }
    function ce(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var w = te(_);
      if (w === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return w;
    }
    function ve(_) {
      var w = ce(_);
      switch (w) {
        case "array":
        case "object":
          return "an " + w;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + w;
        default:
          return w;
      }
    }
    function ee(_) {
      return !_.constructor || !_.constructor.name ? m : _.constructor.name;
    }
    return O.checkPropTypes = o, O.resetWarningCache = o.resetWarningCache, O.PropTypes = O, O;
  }, Wt;
}
var Ut, ka;
function im() {
  if (ka)
    return Ut;
  ka = 1;
  var e = xn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Ut = function() {
    function n(s, i, u, d, f, c) {
      if (c !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
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
  }, Ut;
}
if (process.env.NODE_ENV !== "production") {
  var lm = Ei(), cm = !0;
  rn.exports = sm()(lm.isElement, cm);
} else
  rn.exports = im()();
var fm = rn.exports;
const ze = /* @__PURE__ */ Pl(fm);
var um = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, dm = Object.defineProperty, pm = Object.defineProperties, mm = Object.getOwnPropertyDescriptors, rt = Object.getOwnPropertySymbols, Ri = Object.prototype.hasOwnProperty, xi = Object.prototype.propertyIsEnumerable, La = (e, r, t) => r in e ? dm(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, za = (e, r) => {
  for (var t in r || (r = {}))
    Ri.call(r, t) && La(e, t, r[t]);
  if (rt)
    for (var t of rt(r))
      xi.call(r, t) && La(e, t, r[t]);
  return e;
}, vm = (e, r) => pm(e, mm(r)), ym = (e, r) => {
  var t = {};
  for (var n in e)
    Ri.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && rt)
    for (var n of rt(e))
      r.indexOf(n) < 0 && xi.call(e, n) && (t[n] = e[n]);
  return t;
}, ji = (e, r, t) => {
  const n = Fe(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: u = 24, stroke: d = 2, children: f } = s, c = ym(s, ["color", "size", "stroke", "children"]);
      return Jn(
        "svg",
        za(vm(za({
          ref: a
        }, um), {
          width: u,
          height: u,
          stroke: i,
          strokeWidth: d,
          className: `tabler-icon tabler-icon-${e}`
        }), c),
        [...t.map(([m, O]) => Jn(m, O)), ...f || []]
      );
    }
  );
  return n.propTypes = {
    color: ze.string,
    size: ze.oneOfType([ze.string, ze.number]),
    stroke: ze.oneOfType([ze.string, ze.number])
  }, n.displayName = `${r}`, n;
}, hm = ji("arrow-right", "IconArrowRight", [
  ["path", { d: "M5 12l14 0", key: "svg-0" }],
  ["path", { d: "M13 18l6 -6", key: "svg-1" }],
  ["path", { d: "M13 6l6 6", key: "svg-2" }]
]), _m = ji("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]);
const bm = "_chatwidth_1aicy_1", gm = "_cinput_1aicy_13", Om = "_chatMessagesContainer_1aicy_18", Pm = "_userMessage_1aicy_23", wm = "_botMessage_1aicy_30", er = {
  chatwidth: bm,
  cinput: gm,
  chatMessagesContainer: Om,
  userMessage: Pm,
  botMessage: wm
};
function Ci(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: $m } = Object.prototype, { getPrototypeOf: jn } = Object, yt = ((e) => (r) => {
  const t = $m.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ce = (e) => (e = e.toLowerCase(), (r) => yt(r) === e), ht = (e) => (r) => typeof r === e, { isArray: Ge } = Array, sr = ht("undefined");
function Em(e) {
  return e !== null && !sr(e) && e.constructor !== null && !sr(e.constructor) && ge(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ti = Ce("ArrayBuffer");
function Sm(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && Ti(e.buffer), r;
}
const Rm = ht("string"), ge = ht("function"), Ni = ht("number"), _t = (e) => e !== null && typeof e == "object", xm = (e) => e === !0 || e === !1, Pr = (e) => {
  if (yt(e) !== "object")
    return !1;
  const r = jn(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, jm = Ce("Date"), Cm = Ce("File"), Tm = Ce("Blob"), Nm = Ce("FileList"), Am = (e) => _t(e) && ge(e.pipe), Im = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || ge(e.append) && ((r = yt(e)) === "formdata" || // detect form-data instance
  r === "object" && ge(e.toString) && e.toString() === "[object FormData]"));
}, Dm = Ce("URLSearchParams"), Mm = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ur(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Ge(e))
    for (n = 0, o = e.length; n < o; n++)
      r.call(null, e[n], n, e);
  else {
    const a = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let i;
    for (n = 0; n < s; n++)
      i = a[n], r.call(null, e[i], i, e);
  }
}
function Ai(e, r) {
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length, o;
  for (; n-- > 0; )
    if (o = t[n], r === o.toLowerCase())
      return o;
  return null;
}
const Ii = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Di = (e) => !sr(e) && e !== Ii;
function tn() {
  const { caseless: e } = Di(this) && this || {}, r = {}, t = (n, o) => {
    const a = e && Ai(r, o) || o;
    Pr(r[a]) && Pr(n) ? r[a] = tn(r[a], n) : Pr(n) ? r[a] = tn({}, n) : Ge(n) ? r[a] = n.slice() : r[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && ur(arguments[n], t);
  return r;
}
const Fm = (e, r, t, { allOwnKeys: n } = {}) => (ur(r, (o, a) => {
  t && ge(o) ? e[a] = Ci(o, t) : e[a] = o;
}, { allOwnKeys: n }), e), km = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Lm = (e, r, t, n) => {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, zm = (e, r, t, n) => {
  let o, a, s;
  const i = {};
  if (r = r || {}, e == null)
    return r;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!n || n(s, e, r)) && !i[s] && (r[s] = e[s], i[s] = !0);
    e = t !== !1 && jn(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, Bm = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const n = e.indexOf(r, t);
  return n !== -1 && n === t;
}, Vm = (e) => {
  if (!e)
    return null;
  if (Ge(e))
    return e;
  let r = e.length;
  if (!Ni(r))
    return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, Wm = ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && jn(Uint8Array)), Um = (e, r) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    r.call(e, a[0], a[1]);
  }
}, qm = (e, r) => {
  let t;
  const n = [];
  for (; (t = e.exec(r)) !== null; )
    n.push(t);
  return n;
}, Hm = Ce("HTMLFormElement"), Ym = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, o) {
    return n.toUpperCase() + o;
  }
), Ba = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), Gm = Ce("RegExp"), Mi = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), n = {};
  ur(t, (o, a) => {
    let s;
    (s = r(o, a, e)) !== !1 && (n[a] = s || o);
  }), Object.defineProperties(e, n);
}, Jm = (e) => {
  Mi(e, (r, t) => {
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
}, Km = (e, r) => {
  const t = {}, n = (o) => {
    o.forEach((a) => {
      t[a] = !0;
    });
  };
  return Ge(e) ? n(e) : n(String(e).split(r)), t;
}, Xm = () => {
}, Zm = (e, r) => (e = +e, Number.isFinite(e) ? e : r), qt = "abcdefghijklmnopqrstuvwxyz", Va = "0123456789", Fi = {
  DIGIT: Va,
  ALPHA: qt,
  ALPHA_DIGIT: qt + qt.toUpperCase() + Va
}, Qm = (e = 16, r = Fi.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = r;
  for (; e--; )
    t += r[Math.random() * n | 0];
  return t;
};
function ev(e) {
  return !!(e && ge(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const rv = (e) => {
  const r = new Array(10), t = (n, o) => {
    if (_t(n)) {
      if (r.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        r[o] = n;
        const a = Ge(n) ? [] : {};
        return ur(n, (s, i) => {
          const u = t(s, o + 1);
          !sr(u) && (a[i] = u);
        }), r[o] = void 0, a;
      }
    }
    return n;
  };
  return t(e, 0);
}, tv = Ce("AsyncFunction"), nv = (e) => e && (_t(e) || ge(e)) && ge(e.then) && ge(e.catch), v = {
  isArray: Ge,
  isArrayBuffer: Ti,
  isBuffer: Em,
  isFormData: Im,
  isArrayBufferView: Sm,
  isString: Rm,
  isNumber: Ni,
  isBoolean: xm,
  isObject: _t,
  isPlainObject: Pr,
  isUndefined: sr,
  isDate: jm,
  isFile: Cm,
  isBlob: Tm,
  isRegExp: Gm,
  isFunction: ge,
  isStream: Am,
  isURLSearchParams: Dm,
  isTypedArray: Wm,
  isFileList: Nm,
  forEach: ur,
  merge: tn,
  extend: Fm,
  trim: Mm,
  stripBOM: km,
  inherits: Lm,
  toFlatObject: zm,
  kindOf: yt,
  kindOfTest: Ce,
  endsWith: Bm,
  toArray: Vm,
  forEachEntry: Um,
  matchAll: qm,
  isHTMLForm: Hm,
  hasOwnProperty: Ba,
  hasOwnProp: Ba,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Mi,
  freezeMethods: Jm,
  toObjectSet: Km,
  toCamelCase: Ym,
  noop: Xm,
  toFiniteNumber: Zm,
  findKey: Ai,
  global: Ii,
  isContextDefined: Di,
  ALPHABET: Fi,
  generateString: Qm,
  isSpecCompliantForm: ev,
  toJSONObject: rv,
  isAsyncFn: tv,
  isThenable: nv
};
function W(e, r, t, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), n && (this.request = n), o && (this.response = o);
}
v.inherits(W, Error, {
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
      config: v.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ki = W.prototype, Li = {};
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
  Li[e] = { value: e };
});
Object.defineProperties(W, Li);
Object.defineProperty(ki, "isAxiosError", { value: !0 });
W.from = (e, r, t, n, o, a) => {
  const s = Object.create(ki);
  return v.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (i) => i !== "isAxiosError"), W.call(s, e.message, r, t, n, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const ov = null;
function nn(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function zi(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Wa(e, r, t) {
  return e ? e.concat(r).map(function(o, a) {
    return o = zi(o), !t && a ? "[" + o + "]" : o;
  }).join(t ? "." : "") : r;
}
function av(e) {
  return v.isArray(e) && !e.some(nn);
}
const sv = v.toFlatObject(v, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function bt(e, r, t) {
  if (!v.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), t = v.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, P) {
    return !v.isUndefined(P[p]);
  });
  const n = t.metaTokens, o = t.visitor || f, a = t.dots, s = t.indexes, u = (t.Blob || typeof Blob < "u" && Blob) && v.isSpecCompliantForm(r);
  if (!v.isFunction(o))
    throw new TypeError("visitor must be a function");
  function d(y) {
    if (y === null)
      return "";
    if (v.isDate(y))
      return y.toISOString();
    if (!u && v.isBlob(y))
      throw new W("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(y) || v.isTypedArray(y) ? u && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function f(y, p, P) {
    let R = y;
    if (y && !P && typeof y == "object") {
      if (v.endsWith(p, "{}"))
        p = n ? p : p.slice(0, -2), y = JSON.stringify(y);
      else if (v.isArray(y) && av(y) || (v.isFileList(y) || v.endsWith(p, "[]")) && (R = v.toArray(y)))
        return p = zi(p), R.forEach(function(x, j) {
          !(v.isUndefined(x) || x === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Wa([p], j, a) : s === null ? p : p + "[]",
            d(x)
          );
        }), !1;
    }
    return nn(y) ? !0 : (r.append(Wa(P, p, a), d(y)), !1);
  }
  const c = [], m = Object.assign(sv, {
    defaultVisitor: f,
    convertValue: d,
    isVisitable: nn
  });
  function O(y, p) {
    if (!v.isUndefined(y)) {
      if (c.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      c.push(y), v.forEach(y, function(R, C) {
        (!(v.isUndefined(R) || R === null) && o.call(
          r,
          R,
          v.isString(C) ? C.trim() : C,
          p,
          m
        )) === !0 && O(R, p ? p.concat(C) : [C]);
      }), c.pop();
    }
  }
  if (!v.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), r;
}
function Ua(e) {
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
function Cn(e, r) {
  this._pairs = [], e && bt(e, this, r);
}
const Bi = Cn.prototype;
Bi.append = function(r, t) {
  this._pairs.push([r, t]);
};
Bi.toString = function(r) {
  const t = r ? function(n) {
    return r.call(this, n, Ua);
  } : Ua;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function iv(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Vi(e, r, t) {
  if (!r)
    return e;
  const n = t && t.encode || iv, o = t && t.serialize;
  let a;
  if (o ? a = o(r, t) : a = v.isURLSearchParams(r) ? r.toString() : new Cn(r, t).toString(n), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class lv {
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
    v.forEach(this.handlers, function(n) {
      n !== null && r(n);
    });
  }
}
const qa = lv, Wi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, cv = typeof URLSearchParams < "u" ? URLSearchParams : Cn, fv = typeof FormData < "u" ? FormData : null, uv = typeof Blob < "u" ? Blob : null, dv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: cv,
    FormData: fv,
    Blob: uv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ui = typeof window < "u" && typeof document < "u", pv = ((e) => Ui && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), mv = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), vv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ui,
  hasStandardBrowserEnv: pv,
  hasStandardBrowserWebWorkerEnv: mv
}, Symbol.toStringTag, { value: "Module" })), Re = {
  ...vv,
  ...dv
};
function yv(e, r) {
  return bt(e, new Re.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, o, a) {
      return Re.isNode && v.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function hv(e) {
  return v.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function _v(e) {
  const r = {}, t = Object.keys(e);
  let n;
  const o = t.length;
  let a;
  for (n = 0; n < o; n++)
    a = t[n], r[a] = e[a];
  return r;
}
function qi(e) {
  function r(t, n, o, a) {
    let s = t[a++];
    const i = Number.isFinite(+s), u = a >= t.length;
    return s = !s && v.isArray(o) ? o.length : s, u ? (v.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !i) : ((!o[s] || !v.isObject(o[s])) && (o[s] = []), r(t, n, o[s], a) && v.isArray(o[s]) && (o[s] = _v(o[s])), !i);
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const t = {};
    return v.forEachEntry(e, (n, o) => {
      r(hv(n), o, t, 0);
    }), t;
  }
  return null;
}
function bv(e, r, t) {
  if (v.isString(e))
    try {
      return (r || JSON.parse)(e), v.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(e);
}
const Tn = {
  transitional: Wi,
  adapter: ["xhr", "http"],
  transformRequest: [function(r, t) {
    const n = t.getContentType() || "", o = n.indexOf("application/json") > -1, a = v.isObject(r);
    if (a && v.isHTMLForm(r) && (r = new FormData(r)), v.isFormData(r))
      return o && o ? JSON.stringify(qi(r)) : r;
    if (v.isArrayBuffer(r) || v.isBuffer(r) || v.isStream(r) || v.isFile(r) || v.isBlob(r))
      return r;
    if (v.isArrayBufferView(r))
      return r.buffer;
    if (v.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let i;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return yv(r, this.formSerializer).toString();
      if ((i = v.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return bt(
          i ? { "files[]": r } : r,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return a || o ? (t.setContentType("application/json", !1), bv(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || Tn.transitional, n = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (r && v.isString(r) && (n && !this.responseType || o)) {
      const s = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(r);
      } catch (i) {
        if (s)
          throw i.name === "SyntaxError" ? W.from(i, W.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: Re.classes.FormData,
    Blob: Re.classes.Blob
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
v.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Tn.headers[e] = {};
});
const Nn = Tn, gv = v.toObjectSet([
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
]), Ov = (e) => {
  const r = {};
  let t, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!t || r[t] && gv[t]) && (t === "set-cookie" ? r[t] ? r[t].push(n) : r[t] = [n] : r[t] = r[t] ? r[t] + ", " + n : n);
  }), r;
}, Ha = Symbol("internals");
function rr(e) {
  return e && String(e).trim().toLowerCase();
}
function wr(e) {
  return e === !1 || e == null ? e : v.isArray(e) ? e.map(wr) : String(e);
}
function Pv(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(e); )
    r[n[1]] = n[2];
  return r;
}
const wv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ht(e, r, t, n, o) {
  if (v.isFunction(n))
    return n.call(this, r, t);
  if (o && (r = t), !!v.isString(r)) {
    if (v.isString(n))
      return r.indexOf(n) !== -1;
    if (v.isRegExp(n))
      return n.test(r);
  }
}
function $v(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function Ev(e, r) {
  const t = v.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + t, {
      value: function(o, a, s) {
        return this[n].call(this, r, o, a, s);
      },
      configurable: !0
    });
  });
}
class gt {
  constructor(r) {
    r && this.set(r);
  }
  set(r, t, n) {
    const o = this;
    function a(i, u, d) {
      const f = rr(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const c = v.findKey(o, f);
      (!c || o[c] === void 0 || d === !0 || d === void 0 && o[c] !== !1) && (o[c || u] = wr(i));
    }
    const s = (i, u) => v.forEach(i, (d, f) => a(d, f, u));
    return v.isPlainObject(r) || r instanceof this.constructor ? s(r, t) : v.isString(r) && (r = r.trim()) && !wv(r) ? s(Ov(r), t) : r != null && a(t, r, n), this;
  }
  get(r, t) {
    if (r = rr(r), r) {
      const n = v.findKey(this, r);
      if (n) {
        const o = this[n];
        if (!t)
          return o;
        if (t === !0)
          return Pv(o);
        if (v.isFunction(t))
          return t.call(this, o, n);
        if (v.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, t) {
    if (r = rr(r), r) {
      const n = v.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!t || Ht(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let o = !1;
    function a(s) {
      if (s = rr(s), s) {
        const i = v.findKey(n, s);
        i && (!t || Ht(n, n[i], i, t)) && (delete n[i], o = !0);
      }
    }
    return v.isArray(r) ? r.forEach(a) : a(r), o;
  }
  clear(r) {
    const t = Object.keys(this);
    let n = t.length, o = !1;
    for (; n--; ) {
      const a = t[n];
      (!r || Ht(this, this[a], a, r, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(r) {
    const t = this, n = {};
    return v.forEach(this, (o, a) => {
      const s = v.findKey(n, a);
      if (s) {
        t[s] = wr(o), delete t[a];
        return;
      }
      const i = r ? $v(a) : String(a).trim();
      i !== a && delete t[a], t[i] = wr(o), n[i] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const t = /* @__PURE__ */ Object.create(null);
    return v.forEach(this, (n, o) => {
      n != null && n !== !1 && (t[o] = r && v.isArray(n) ? n.join(", ") : n);
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
    const n = (this[Ha] = this[Ha] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const i = rr(s);
      n[i] || (Ev(o, s), n[i] = !0);
    }
    return v.isArray(r) ? r.forEach(a) : a(r), this;
  }
}
gt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
v.reduceDescriptors(gt.prototype, ({ value: e }, r) => {
  let t = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(n) {
      this[t] = n;
    }
  };
});
v.freezeMethods(gt);
const Ae = gt;
function Yt(e, r) {
  const t = this || Nn, n = r || t, o = Ae.from(n.headers);
  let a = n.data;
  return v.forEach(e, function(i) {
    a = i.call(t, a, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), a;
}
function Hi(e) {
  return !!(e && e.__CANCEL__);
}
function dr(e, r, t) {
  W.call(this, e ?? "canceled", W.ERR_CANCELED, r, t), this.name = "CanceledError";
}
v.inherits(dr, W, {
  __CANCEL__: !0
});
function Sv(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? e(t) : r(new W(
    "Request failed with status code " + t.status,
    [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const Rv = Re.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, r, t, n, o, a) {
      const s = [e + "=" + encodeURIComponent(r)];
      v.isNumber(t) && s.push("expires=" + new Date(t).toGMTString()), v.isString(n) && s.push("path=" + n), v.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const r = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return r ? decodeURIComponent(r[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function xv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function jv(e, r) {
  return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function Yi(e, r) {
  return e && !xv(r) ? jv(e, r) : r;
}
const Cv = Re.hasStandardBrowserEnv ? (
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
      const i = v.isString(s) ? o(s) : s;
      return i.protocol === n.protocol && i.host === n.host;
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
function Tv(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function Nv(e, r) {
  e = e || 10;
  const t = new Array(e), n = new Array(e);
  let o = 0, a = 0, s;
  return r = r !== void 0 ? r : 1e3, function(u) {
    const d = Date.now(), f = n[a];
    s || (s = d), t[o] = u, n[o] = d;
    let c = a, m = 0;
    for (; c !== o; )
      m += t[c++], c = c % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), d - s < r)
      return;
    const O = f && d - f;
    return O ? Math.round(m * 1e3 / O) : void 0;
  };
}
function Ya(e, r) {
  let t = 0;
  const n = Nv(50, 250);
  return (o) => {
    const a = o.loaded, s = o.lengthComputable ? o.total : void 0, i = a - t, u = n(i), d = a <= s;
    t = a;
    const f = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: i,
      rate: u || void 0,
      estimated: u && s && d ? (s - a) / u : void 0,
      event: o
    };
    f[r ? "download" : "upload"] = !0, e(f);
  };
}
const Av = typeof XMLHttpRequest < "u", Iv = Av && function(e) {
  return new Promise(function(t, n) {
    let o = e.data;
    const a = Ae.from(e.headers).normalize();
    let { responseType: s, withXSRFToken: i } = e, u;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let f;
    if (v.isFormData(o)) {
      if (Re.hasStandardBrowserEnv || Re.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((f = a.getContentType()) !== !1) {
        const [p, ...P] = f ? f.split(";").map((R) => R.trim()).filter(Boolean) : [];
        a.setContentType([p || "multipart/form-data", ...P].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", P = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(p + ":" + P));
    }
    const m = Yi(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Vi(m, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function O() {
      if (!c)
        return;
      const p = Ae.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), R = {
        data: !s || s === "text" || s === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: p,
        config: e,
        request: c
      };
      Sv(function(x) {
        t(x), d();
      }, function(x) {
        n(x), d();
      }, R), c = null;
    }
    if ("onloadend" in c ? c.onloadend = O : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(O);
    }, c.onabort = function() {
      c && (n(new W("Request aborted", W.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new W("Network Error", W.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let P = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const R = e.transitional || Wi;
      e.timeoutErrorMessage && (P = e.timeoutErrorMessage), n(new W(
        P,
        R.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
        e,
        c
      )), c = null;
    }, Re.hasStandardBrowserEnv && (i && v.isFunction(i) && (i = i(e)), i || i !== !1 && Cv(m))) {
      const p = e.xsrfHeaderName && e.xsrfCookieName && Rv.read(e.xsrfCookieName);
      p && a.set(e.xsrfHeaderName, p);
    }
    o === void 0 && a.setContentType(null), "setRequestHeader" in c && v.forEach(a.toJSON(), function(P, R) {
      c.setRequestHeader(R, P);
    }), v.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), s && s !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Ya(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Ya(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (p) => {
      c && (n(!p || p.type ? new dr(null, e, c) : p), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const y = Tv(m);
    if (y && Re.protocols.indexOf(y) === -1) {
      n(new W("Unsupported protocol " + y + ":", W.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, on = {
  http: ov,
  xhr: Iv
};
v.forEach(on, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const Ga = (e) => `- ${e}`, Dv = (e) => v.isFunction(e) || e === null || e === !1, Gi = {
  getAdapter: (e) => {
    e = v.isArray(e) ? e : [e];
    const { length: r } = e;
    let t, n;
    const o = {};
    for (let a = 0; a < r; a++) {
      t = e[a];
      let s;
      if (n = t, !Dv(t) && (n = on[(s = String(t)).toLowerCase()], n === void 0))
        throw new W(`Unknown adapter '${s}'`);
      if (n)
        break;
      o[s || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(o).map(
        ([i, u]) => `adapter ${i} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = r ? a.length > 1 ? `since :
` + a.map(Ga).join(`
`) : " " + Ga(a[0]) : "as no adapter specified";
      throw new W(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: on
};
function Gt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new dr(null, e);
}
function Ja(e) {
  return Gt(e), e.headers = Ae.from(e.headers), e.data = Yt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Gi.getAdapter(e.adapter || Nn.adapter)(e).then(function(n) {
    return Gt(e), n.data = Yt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Ae.from(n.headers), n;
  }, function(n) {
    return Hi(n) || (Gt(e), n && n.response && (n.response.data = Yt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Ae.from(n.response.headers))), Promise.reject(n);
  });
}
const Ka = (e) => e instanceof Ae ? e.toJSON() : e;
function He(e, r) {
  r = r || {};
  const t = {};
  function n(d, f, c) {
    return v.isPlainObject(d) && v.isPlainObject(f) ? v.merge.call({ caseless: c }, d, f) : v.isPlainObject(f) ? v.merge({}, f) : v.isArray(f) ? f.slice() : f;
  }
  function o(d, f, c) {
    if (v.isUndefined(f)) {
      if (!v.isUndefined(d))
        return n(void 0, d, c);
    } else
      return n(d, f, c);
  }
  function a(d, f) {
    if (!v.isUndefined(f))
      return n(void 0, f);
  }
  function s(d, f) {
    if (v.isUndefined(f)) {
      if (!v.isUndefined(d))
        return n(void 0, d);
    } else
      return n(void 0, f);
  }
  function i(d, f, c) {
    if (c in r)
      return n(d, f);
    if (c in e)
      return n(void 0, d);
  }
  const u = {
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
    withXSRFToken: s,
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
    validateStatus: i,
    headers: (d, f) => o(Ka(d), Ka(f), !0)
  };
  return v.forEach(Object.keys(Object.assign({}, e, r)), function(f) {
    const c = u[f] || o, m = c(e[f], r[f], f);
    v.isUndefined(m) && c !== i || (t[f] = m);
  }), t;
}
const Ji = "1.6.2", An = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  An[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const Xa = {};
An.transitional = function(r, t, n) {
  function o(a, s) {
    return "[Axios v" + Ji + "] Transitional option '" + a + "'" + s + (n ? ". " + n : "");
  }
  return (a, s, i) => {
    if (r === !1)
      throw new W(
        o(s, " has been removed" + (t ? " in " + t : "")),
        W.ERR_DEPRECATED
      );
    return t && !Xa[s] && (Xa[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(a, s, i) : !0;
  };
};
function Mv(e, r, t) {
  if (typeof e != "object")
    throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], s = r[a];
    if (s) {
      const i = e[a], u = i === void 0 || s(i, a, e);
      if (u !== !0)
        throw new W("option " + a + " must be " + u, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new W("Unknown option " + a, W.ERR_BAD_OPTION);
  }
}
const an = {
  assertOptions: Mv,
  validators: An
}, Ie = an.validators;
class tt {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new qa(),
      response: new qa()
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
    typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = He(this.defaults, t);
    const { transitional: n, paramsSerializer: o, headers: a } = t;
    n !== void 0 && an.assertOptions(n, {
      silentJSONParsing: Ie.transitional(Ie.boolean),
      forcedJSONParsing: Ie.transitional(Ie.boolean),
      clarifyTimeoutError: Ie.transitional(Ie.boolean)
    }, !1), o != null && (v.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : an.assertOptions(o, {
      encode: Ie.function,
      serialize: Ie.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = a && v.merge(
      a.common,
      a[t.method]
    );
    a && v.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete a[y];
      }
    ), t.headers = Ae.concat(s, a);
    const i = [];
    let u = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(t) === !1 || (u = u && p.synchronous, i.unshift(p.fulfilled, p.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(p) {
      d.push(p.fulfilled, p.rejected);
    });
    let f, c = 0, m;
    if (!u) {
      const y = [Ja.bind(this), void 0];
      for (y.unshift.apply(y, i), y.push.apply(y, d), m = y.length, f = Promise.resolve(t); c < m; )
        f = f.then(y[c++], y[c++]);
      return f;
    }
    m = i.length;
    let O = t;
    for (c = 0; c < m; ) {
      const y = i[c++], p = i[c++];
      try {
        O = y(O);
      } catch (P) {
        p.call(this, P);
        break;
      }
    }
    try {
      f = Ja.call(this, O);
    } catch (y) {
      return Promise.reject(y);
    }
    for (c = 0, m = d.length; c < m; )
      f = f.then(d[c++], d[c++]);
    return f;
  }
  getUri(r) {
    r = He(this.defaults, r);
    const t = Yi(r.baseURL, r.url);
    return Vi(t, r.params, r.paramsSerializer);
  }
}
v.forEach(["delete", "get", "head", "options"], function(r) {
  tt.prototype[r] = function(t, n) {
    return this.request(He(n || {}, {
      method: r,
      url: t,
      data: (n || {}).data
    }));
  };
});
v.forEach(["post", "put", "patch"], function(r) {
  function t(n) {
    return function(a, s, i) {
      return this.request(He(i || {}, {
        method: r,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  tt.prototype[r] = t(), tt.prototype[r + "Form"] = t(!0);
});
const $r = tt;
class In {
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
      const s = new Promise((i) => {
        n.subscribe(i), a = i;
      }).then(o);
      return s.cancel = function() {
        n.unsubscribe(a);
      }, s;
    }, r(function(a, s, i) {
      n.reason || (n.reason = new dr(a, s, i), t(n.reason));
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
      token: new In(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
}
const Fv = In;
function kv(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function Lv(e) {
  return v.isObject(e) && e.isAxiosError === !0;
}
const sn = {
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
Object.entries(sn).forEach(([e, r]) => {
  sn[r] = e;
});
const zv = sn;
function Ki(e) {
  const r = new $r(e), t = Ci($r.prototype.request, r);
  return v.extend(t, $r.prototype, r, { allOwnKeys: !0 }), v.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(o) {
    return Ki(He(e, o));
  }, t;
}
const oe = Ki(Nn);
oe.Axios = $r;
oe.CanceledError = dr;
oe.CancelToken = Fv;
oe.isCancel = Hi;
oe.VERSION = Ji;
oe.toFormData = bt;
oe.AxiosError = W;
oe.Cancel = oe.CanceledError;
oe.all = function(r) {
  return Promise.all(r);
};
oe.spread = kv;
oe.isAxiosError = Lv;
oe.mergeConfig = He;
oe.AxiosHeaders = Ae;
oe.formToJSON = (e) => qi(v.isHTMLForm(e) ? new FormData(e) : e);
oe.getAdapter = Gi.getAdapter;
oe.HttpStatusCode = zv;
oe.default = oe;
const Bv = oe, Vv = () => /* @__PURE__ */ J.jsx(En, { children: /* @__PURE__ */ J.jsxs(cr, { radius: "sm", withBorder: !0, p: "xl", children: [
  /* @__PURE__ */ J.jsx(ar, { size: "xl", children: "Welcome to the AI Chatbot!" }),
  /* @__PURE__ */ J.jsx(ar, { size: "md", children: "Start a conversation or try some examples." })
] }) }), Wv = ({ messages: e, onSendMessage: r }) => {
  const [t, n] = Me(""), [o, a] = Me(!1), s = (u) => {
    n(u.target.value);
  }, i = async (u) => {
    if (u.preventDefault(), t.trim()) {
      const d = t.trim();
      r({ type: "user", text: d }), n(""), a(!0);
      try {
        const c = (await Bv.post("http://127.0.0.1:80/chat/", {
          message: d
        })).data.response;
        console.log("Bot Response:", c), r(c ? { type: "bot", text: c } : { type: "bot", text: "Sorry, I didn't understand that." });
      } catch (f) {
        console.error("Error fetching bot's response:", f), r({ type: "bot", text: "An error occurred while fetching the response." });
      } finally {
        a(!1);
      }
    }
  };
  return /* @__PURE__ */ J.jsxs(
    vt,
    {
      shadow: "sm",
      padding: "lg",
      radius: "md",
      withBorder: !0,
      className: er.chatwidth,
      children: [
        /* @__PURE__ */ J.jsx("div", { className: er.chatMessagesContainer, style: { flexGrow: 1 }, children: e.length === 0 && !o ? /* @__PURE__ */ J.jsx(Vv, {}) : e.map((u, d) => /* @__PURE__ */ J.jsxs("div", { className: u.type === "user" ? er.userMessage : er.botMessage, children: [
          /* @__PURE__ */ J.jsx(
            cr,
            {
              shadow: "xs",
              radius: "lg",
              withBorder: !0,
              style: {},
              children: /* @__PURE__ */ J.jsxs(kr, { children: [
                /* @__PURE__ */ J.jsx(
                  pt,
                  {
                    size: 40,
                    color: u.type === "bot" ? "blue" : "teal",
                    children: u.type === "bot" ? "B" : "U"
                  }
                ),
                /* @__PURE__ */ J.jsx(ar, { children: u.text })
              ] })
            }
          ),
          /* @__PURE__ */ J.jsx(Sn, {})
        ] }, d)) }),
        /* @__PURE__ */ J.jsx(kr, { children: /* @__PURE__ */ J.jsx("form", { onSubmit: i, children: /* @__PURE__ */ J.jsx(
          Rn,
          {
            radius: "xl",
            size: "md",
            placeholder: "Ask a question",
            value: t,
            onChange: s,
            rightSectionWidth: 40,
            leftSection: /* @__PURE__ */ J.jsx(
              _m,
              {
                style: { width: h(18), height: h(18) },
                stroke: 1.5
              }
            ),
            rightSection: /* @__PURE__ */ J.jsx(
              fr,
              {
                type: "submit",
                size: 32,
                radius: "xl",
                color: "red",
                variant: "filled",
                children: /* @__PURE__ */ J.jsx(
                  hm,
                  {
                    style: { width: h(18), height: h(18) },
                    stroke: 1.5
                  }
                )
              }
            ),
            className: er.cinput
          }
        ) }) })
      ]
    }
  );
}, Uv = {
  /* Put your mantine theme override here */
}, Yv = () => {
  const [e, r] = Me(!1), [t, n] = Me([]), o = () => {
    r(!e);
  }, a = (s) => {
    n((i) => [...i, s]);
  };
  return /* @__PURE__ */ J.jsx(J.Fragment, { children: /* @__PURE__ */ J.jsxs(ls, { theme: Uv, children: [
    /* @__PURE__ */ J.jsx(Pn, { position: { bottom: 20, right: 20 }, children: /* @__PURE__ */ J.jsx(
      fr,
      {
        variant: "filled",
        size: "xl",
        radius: "xl",
        "aria-label": "Chat",
        onClick: o,
        children: /* @__PURE__ */ J.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            "aria-hidden": "true",
            style: { width: 20, height: 30 },
            className: "h-6 w-6 text-white",
            children: /* @__PURE__ */ J.jsx(
              "path",
              {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              }
            )
          }
        )
      }
    ) }),
    e && /* @__PURE__ */ J.jsx(Wv, { messages: t, onSendMessage: a })
  ] }) });
};
export {
  Yv as ChatWidget
};
