import { getCurrentScope as O, onScopeDispose as P, unref as F, watch as $, ref as w, computed as S, openBlock as d, createElementBlock as f, createElementVNode as y, Fragment as g, renderList as x, toDisplayString as k, createCommentVNode as L, useSlots as D, normalizeStyle as E, renderSlot as N, defineComponent as j, withDirectives as B, withKeys as K, vModelText as R } from "vue";
function W(t) {
  return O() ? (P(t), !0) : !1;
}
function I(t) {
  return typeof t == "function" ? t() : F(t);
}
const T = typeof window < "u", V = () => {
}, q = /* @__PURE__ */ z();
function z() {
  var t;
  return T && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function h(t) {
  var o;
  const n = I(t);
  return (o = n == null ? void 0 : n.$el) != null ? o : n;
}
const M = T ? window : void 0;
function b(...t) {
  let o, n, s, u;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, s, u] = t, o = M) : [o, n, s, u] = t, !o)
    return V;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const p = [], a = () => {
    p.forEach((l) => l()), p.length = 0;
  }, i = (l, _, e, r) => (l.addEventListener(_, e, r), () => l.removeEventListener(_, e, r)), c = $(
    () => [h(o), I(u)],
    ([l, _]) => {
      a(), l && p.push(
        ...n.flatMap((e) => s.map((r) => i(l, e, r, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), m = () => {
    c(), a();
  };
  return W(m), m;
}
let A = !1;
function U(t, o, n = {}) {
  const { window: s = M, ignore: u = [], capture: p = !0, detectIframe: a = !1 } = n;
  if (!s)
    return;
  q && !A && (A = !0, Array.from(s.document.body.children).forEach((e) => e.addEventListener("click", V)));
  let i = !0;
  const c = (e) => u.some((r) => {
    if (typeof r == "string")
      return Array.from(s.document.querySelectorAll(r)).some((v) => v === e.target || e.composedPath().includes(v));
    {
      const v = h(r);
      return v && (e.target === v || e.composedPath().includes(v));
    }
  }), l = [
    b(s, "click", (e) => {
      const r = h(t);
      if (!(!r || r === e.target || e.composedPath().includes(r))) {
        if (e.detail === 0 && (i = !c(e)), !i) {
          i = !0;
          return;
        }
        o(e);
      }
    }, { passive: !0, capture: p }),
    b(s, "pointerdown", (e) => {
      const r = h(t);
      r && (i = !e.composedPath().includes(r) && !c(e));
    }, { passive: !0 }),
    a && b(s, "blur", (e) => {
      setTimeout(() => {
        var r;
        const v = h(t);
        ((r = s.document.activeElement) == null ? void 0 : r.tagName) === "IFRAME" && !(v != null && v.contains(s.document.activeElement)) && o(e);
      }, 0);
    })
  ].filter(Boolean);
  return () => l.forEach((e) => e());
}
const C = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [s, u] of o)
    n[s] = u;
  return n;
}, G = {
  relative: "",
  "w-full": "",
  "h-30px": ""
}, H = ["value"], J = {
  key: 0,
  absolute: "",
  "top-30px": "",
  "left-0": "",
  "bg-white": "",
  "w-full": "",
  "h-auto": "",
  border: "0px x-1px gray-4 solid"
}, Q = ["onClick"], X = {
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
  setup(t, { emit: o }) {
    const n = t, s = w(null), u = w(!1), p = w(!1);
    U(s, (l) => {
      u.value = !1;
    });
    const a = S(() => n.options.suffix ? n.options.suffix.map((l) => n.modelValue.split("@")[0] + l) : []), i = (l) => {
      o("update:modelValue", l);
    }, c = () => {
      u.value = n.modelValue.length !== 0;
    }, m = (l) => {
      p.value = !0, u.value = !1, i(l), setTimeout(() => {
        p.value = !1;
      }, 300);
    };
    return $(
      () => n.modelValue,
      () => {
        p.value || (u.value = n.modelValue.length !== 0);
      }
    ), (l, _) => (d(), f("div", G, [
      y("input", {
        ref_key: "inputRef",
        ref: s,
        "w-full": "",
        "h-full": "",
        "pl-10px": "",
        value: t.modelValue,
        border: "1px gray-4 solid",
        onInput: _[0] || (_[0] = (e) => i(e.target.value)),
        onFocus: c
      }, null, 40, H),
      u.value ? (d(), f("ul", J, [
        (d(!0), f(g, null, x(a.value, (e) => (d(), f("li", {
          key: e,
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
            onClick: (r) => m(e)
          }, k(e), 9, Q)
        ]))), 128))
      ])) : L("", !0)
    ]));
  }
}, ie = /* @__PURE__ */ C(X, [["__scopeId", "data-v-5d750eee"]]);
const Y = { class: "vue-pure-table" }, Z = { id: "columns" }, ee = {
  id: "rows",
  class: "flex-col"
}, te = { key: 0 }, ne = {
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
  setup(t) {
    const o = t, n = D(), s = S(() => o.columns.map((a) => a.field)), u = S(() => o.rows.map((a) => {
      const i = [];
      return Object.keys(a).forEach((c, m) => {
        s.value[m] && i.push(a[s.value[m]]);
      }), i;
    })), p = (a) => Object.keys(n).includes(a);
    return (a, i) => (d(), f("div", Y, [
      y("ul", Z, [
        (d(!0), f(g, null, x(o.columns, (c) => (d(), f("li", {
          key: c.label,
          class: "table_columns",
          style: E(c.style)
        }, k(c.label), 5))), 128))
      ]),
      y("ul", ee, [
        (d(!0), f(g, null, x(u.value, (c, m) => (d(), f("li", { key: m }, [
          y("ul", null, [
            (d(!0), f(g, null, x(c, (l, _) => (d(), f("li", {
              key: l.id,
              style: E(o.columns[_].style)
            }, [
              p(o.columns[_].field) ? N(a.$slots, o.columns[_].field, {
                key: 1,
                data: { rowData: l, rowTarget: u.value[m] }
              }, void 0, !0) : (d(), f("p", te, k(l), 1))
            ], 4))), 128))
          ])
        ]))), 128))
      ])
    ]));
  }
}, ce = /* @__PURE__ */ C(ne, [["__scopeId", "data-v-38a75e1e"]]), oe = ["onKeyup"], se = { class: "flex gap-03 mt-03" }, le = ["index"], re = { class: "bg-pink-500" }, ue = ["onClick"], pe = /* @__PURE__ */ j({
  __name: "FormTagsInput",
  props: ["tags"],
  setup(t) {
    const o = t, n = w(""), s = (p) => {
      o.tags.push(n.value), n.value = "";
    }, u = (p) => {
      o.tags.splice(p, 1);
    };
    return (p, a) => (d(), f("div", null, [
      B(y("input", {
        "onUpdate:modelValue": a[0] || (a[0] = (i) => n.value = i),
        onKeyup: K(s, ["enter"]),
        type: "text"
      }, null, 40, oe), [
        [R, n.value]
      ]),
      y("div", se, [
        (d(!0), f(g, null, x(o.tags, (i, c) => (d(), f("div", {
          index: `${i + c}`,
          class: "flex bg-pink-500 gap-8px px-03 py-01"
        }, [
          y("div", re, k(i), 1),
          y("span", {
            class: "cursor-pointer",
            onClick: (m) => u(c)
          }, " x ", 8, ue)
        ], 8, le))), 256))
      ])
    ]));
  }
});
export {
  pe as FormTagsInput,
  ie as MEmailInput,
  ce as MPureTable
};
