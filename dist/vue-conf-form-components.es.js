import { getCurrentScope as C, onScopeDispose as L, unref as N, watch as S, ref as g, computed as I, openBlock as p, createElementBlock as f, createElementVNode as y, Fragment as w, renderList as x, toDisplayString as k, createCommentVNode as $, useSlots as R, normalizeStyle as E, renderSlot as D } from "vue";
function j(e) {
  return C() ? (L(e), !0) : !1;
}
function F(e) {
  return typeof e == "function" ? e() : N(e);
}
const M = typeof window < "u", O = () => {
}, B = /* @__PURE__ */ W();
function W() {
  var e;
  return M && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function h(e) {
  var s;
  const o = F(e);
  return (s = o == null ? void 0 : o.$el) != null ? s : o;
}
const P = M ? window : void 0;
function b(...e) {
  let s, o, n, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, n, r] = e, s = P) : [s, o, n, r] = e, !s)
    return O;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const m = [], i = () => {
    m.forEach((l) => l()), m.length = 0;
  }, d = (l, _, t, a) => (l.addEventListener(_, t, a), () => l.removeEventListener(_, t, a)), u = S(
    () => [h(s), F(r)],
    ([l, _]) => {
      i(), l && m.push(
        ...o.flatMap((t) => n.map((a) => d(l, t, a, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), i();
  };
  return j(c), c;
}
let A = !1;
function T(e, s, o = {}) {
  const { window: n = P, ignore: r = [], capture: m = !0, detectIframe: i = !1 } = o;
  if (!n)
    return;
  B && !A && (A = !0, Array.from(n.document.body.children).forEach((t) => t.addEventListener("click", O)));
  let d = !0;
  const u = (t) => r.some((a) => {
    if (typeof a == "string")
      return Array.from(n.document.querySelectorAll(a)).some((v) => v === t.target || t.composedPath().includes(v));
    {
      const v = h(a);
      return v && (t.target === v || t.composedPath().includes(v));
    }
  }), l = [
    b(n, "click", (t) => {
      const a = h(e);
      if (!(!a || a === t.target || t.composedPath().includes(a))) {
        if (t.detail === 0 && (d = !u(t)), !d) {
          d = !0;
          return;
        }
        s(t);
      }
    }, { passive: !0, capture: m }),
    b(n, "pointerdown", (t) => {
      const a = h(e);
      a && (d = !t.composedPath().includes(a) && !u(t));
    }, { passive: !0 }),
    i && b(n, "blur", (t) => {
      setTimeout(() => {
        var a;
        const v = h(e);
        ((a = n.document.activeElement) == null ? void 0 : a.tagName) === "IFRAME" && !(v != null && v.contains(n.document.activeElement)) && s(t);
      }, 0);
    })
  ].filter(Boolean);
  return () => l.forEach((t) => t());
}
const V = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of s)
    o[n] = r;
  return o;
}, q = {
  relative: "",
  "w-full": "",
  "h-30px": ""
}, z = ["value"], Z = {
  key: 0,
  absolute: "",
  "top-30px": "",
  "left-0": "",
  "bg-white": "",
  "w-full": "",
  "h-auto": "",
  border: "0px x-1px gray-4 solid"
}, G = ["onClick"], H = {
  __name: "MEmailInput",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, n = g(null), r = g(!1), m = g(!1);
    T(n, (l) => {
      r.value = !1;
    });
    const i = I(() => o.options.suffix ? o.options.suffix.map((l) => o.modelValue.split("@")[0] + l) : []), d = (l) => {
      s("update:modelValue", l);
    }, u = () => {
      r.value = o.modelValue.length !== 0;
    }, c = (l) => {
      m.value = !0, r.value = !1, d(l), setTimeout(() => {
        m.value = !1;
      }, 300);
    };
    return S(
      () => o.modelValue,
      () => {
        m.value || (r.value = o.modelValue.length !== 0);
      }
    ), (l, _) => (p(), f("div", q, [
      y("input", {
        ref_key: "inputRef",
        ref: n,
        "w-full": "",
        "h-full": "",
        "pl-10px": "",
        value: e.modelValue,
        border: "1px gray-4 solid",
        onInput: _[0] || (_[0] = (t) => d(t.target.value)),
        onFocus: u
      }, null, 40, z),
      r.value ? (p(), f("ul", Z, [
        (p(!0), f(w, null, x(i.value, (t) => (p(), f("li", {
          key: t,
          border: "0px b-1px gray-4 solid"
        }, [
          y("a", {
            "cursor-pointer": "",
            "w-full": "",
            block: "",
            "py-5px": "",
            "pl-10px": "",
            "text-14px": "",
            "hover:bg-gray-1": "",
            onClick: (a) => c(t)
          }, k(t), 9, G)
        ]))), 128))
      ])) : $("", !0)
    ]));
  }
}, le = /* @__PURE__ */ V(H, [["__scopeId", "data-v-5d750eee"]]);
const J = { class: "vue-pure-table" }, K = { id: "columns" }, Q = {
  id: "rows",
  class: "flex-col"
}, U = { key: 0 }, X = {
  __name: "MPureTable",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const s = e, o = R(), n = I(() => s.columns.map((i) => i.field)), r = I(() => s.rows.map((i) => {
      const d = [];
      return Object.keys(i).forEach((u, c) => {
        n.value[c] && d.push(i[n.value[c]]);
      }), d;
    })), m = (i) => Object.keys(o).includes(i);
    return (i, d) => (p(), f("div", J, [
      y("ul", K, [
        (p(!0), f(w, null, x(s.columns, (u) => (p(), f("li", {
          key: u.label,
          class: "table_columns",
          style: E(u.style)
        }, k(u.label), 5))), 128))
      ]),
      y("ul", Q, [
        (p(!0), f(w, null, x(r.value, (u, c) => (p(), f("li", { key: c }, [
          y("ul", null, [
            (p(!0), f(w, null, x(u, (l, _) => (p(), f("li", {
              key: l.id,
              style: E(s.columns[_].style)
            }, [
              m(s.columns[_].field) ? D(i.$slots, s.columns[_].field, {
                key: 1,
                data: { rowData: l, rowTarget: r.value[c] }
              }, void 0, !0) : (p(), f("p", U, k(l), 1))
            ], 4))), 128))
          ])
        ]))), 128))
      ])
    ]));
  }
}, ue = /* @__PURE__ */ V(X, [["__scopeId", "data-v-38a75e1e"]]);
const Y = {
  relative: "",
  "w-full": "",
  "h-30px": ""
}, ee = ["value"], te = {
  key: 0,
  "text-red": ""
}, oe = {
  __name: "FIdInput",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, n = g(null), r = g(!1);
    T(n, (u) => {
      isShowSolid.value = !1;
    });
    const m = (u) => {
      s("update:modelValue", u);
    }, i = (u) => /^[A-Z]{1}[1-2]{1}[0-9]{8}$/.test(u), d = (u) => {
      if (u.length === 0) {
        r.value = !1;
        return;
      }
      if (i(u)) {
        r.value = !1;
        return;
      } else {
        r.value = "身分證字號格式不符";
        return;
      }
    };
    return S(
      () => o.modelValue,
      () => {
        d(o.modelValue);
      }
    ), (u, c) => (p(), f("div", Y, [
      y("input", {
        ref_key: "inputRef",
        ref: n,
        "w-full": "",
        "h-full": "",
        "pl-10px": "",
        value: e.modelValue,
        border: "1px gray-4 solid",
        placeholder: "請輸入身分證字號",
        onInput: c[0] || (c[0] = (l) => m(l.target.value)),
        onFocus: c[1] || (c[1] = (...l) => u.onFocus && u.onFocus(...l))
      }, null, 40, ee),
      r.value ? (p(), f("div", te, k(r.value), 1)) : $("", !0)
    ]));
  }
}, se = /* @__PURE__ */ V(oe, [["__scopeId", "data-v-c5e068d1"]]);
export {
  se as FIdInput,
  le as MEmailInput,
  ue as MPureTable
};
