function BestInPlaceEditor(t) {
  "use strict";
  this.element = t, this.initOptions(), this.bindForm(), this.initPlaceHolder(), jQuery(this.activator).bind("click", {editor: this}, this.clickHandler)
}

!function (t, e) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
    if (!t.document) throw new Error("jQuery requires a window with a document");
    return e(t)
  } : e(t)
}("undefined" != typeof window ? window : this, function (x, t) {
  function a(t) {
    var e = !!t && "length" in t && t.length, n = ft.type(t);
    return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
  }

  function e(t, n, i) {
    if (ft.isFunction(n)) return ft.grep(t, function (t, e) {
      return !!n.call(t, e, t) !== i
    });
    if (n.nodeType) return ft.grep(t, function (t) {
      return t === n !== i
    });
    if ("string" == typeof n) {
      if (Tt.test(n)) return ft.filter(n, t, i);
      n = ft.filter(n, t)
    }
    return ft.grep(t, function (t) {
      return -1 < ft.inArray(t, n) !== i
    })
  }

  function n(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType;) ;
    return t
  }

  function u(t) {
    var n = {};
    return ft.each(t.match(Et) || [], function (t, e) {
      n[e] = !0
    }), n
  }

  function s() {
    st.addEventListener ? (st.removeEventListener("DOMContentLoaded", r), x.removeEventListener("load", r)) : (st.detachEvent("onreadystatechange", r), x.detachEvent("onload", r))
  }

  function r() {
    (st.addEventListener || "load" === x.event.type || "complete" === st.readyState) && (s(), ft.ready())
  }

  function l(t, e, n) {
    if (n === undefined && 1 === t.nodeType) {
      var i = "data-" + e.replace(Nt, "-$1").toLowerCase();
      if ("string" == typeof (n = t.getAttribute(i))) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : It.test(n) ? ft.parseJSON(n) : n)
        } catch (s) {
        }
        ft.data(t, e, n)
      } else n = undefined
    }
    return n
  }

  function c(t) {
    var e;
    for (e in t) if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
    return !0
  }

  function i(t, e, n, i) {
    if (Ot(t)) {
      var s, r, o = ft.expando, a = t.nodeType, l = a ? ft.cache : t, c = a ? t[o] : t[o] && o;
      if (c && l[c] && (i || l[c].data) || n !== undefined || "string" != typeof e) return c || (c = a ? t[o] = it.pop() || ft.guid++ : o), l[c] || (l[c] = a ? {} : {toJSON: ft.noop}), "object" != typeof e && "function" != typeof e || (i ? l[c] = ft.extend(l[c], e) : l[c].data = ft.extend(l[c].data, e)), r = l[c], i || (r.data || (r.data = {}), r = r.data), n !== undefined && (r[ft.camelCase(e)] = n), "string" == typeof e ? null == (s = r[e]) && (s = r[ft.camelCase(e)]) : s = r, s
    }
  }

  function o(t, e, n) {
    if (Ot(t)) {
      var i, s, r = t.nodeType, o = r ? ft.cache : t, a = r ? t[ft.expando] : ft.expando;
      if (o[a]) {
        if (e && (i = n ? o[a] : o[a].data)) {
          s = (e = ft.isArray(e) ? e.concat(ft.map(e, ft.camelCase)) : e in i ? [e] : (e = ft.camelCase(e)) in i ? [e] : e.split(" ")).length;
          for (; s--;) delete i[e[s]];
          if (n ? !c(i) : !ft.isEmptyObject(i)) return
        }
        (n || (delete o[a].data, c(o[a]))) && (r ? ft.cleanData([t], !0) : pt.deleteExpando || o != o.window ? delete o[a] : o[a] = undefined)
      }
    }
  }

  function d(t, e, n, i) {
    var s, r = 1, o = 20, a = i ? function () {
        return i.cur()
      } : function () {
        return ft.css(t, e, "")
      }, l = a(), c = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
      u = (ft.cssNumber[e] || "px" !== c && +l) && Ft.exec(ft.css(t, e));
    if (u && u[3] !== c) for (c = c || u[3], n = n || [], u = +l || 1; u /= r = r || ".5", ft.style(t, e, u + c), r !== (r = a() / l) && 1 !== r && --o;) ;
    return n && (u = +u || +l || 0, s = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = s)), s
  }

  function g(t) {
    var e = Vt.split("|"), n = t.createDocumentFragment();
    if (n.createElement) for (; e.length;) n.createElement(e.pop());
    return n
  }

  function y(t, e) {
    var n, i, s = 0,
      r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : undefined;
    if (!r) for (r = [], n = t.childNodes || t; null != (i = n[s]); s++) !e || ft.nodeName(i, e) ? r.push(i) : ft.merge(r, y(i, e));
    return e === undefined || e && ft.nodeName(t, e) ? ft.merge([t], r) : r
  }

  function v(t, e) {
    for (var n, i = 0; null != (n = t[i]); i++) ft._data(n, "globalEval", !e || ft._data(e[i], "globalEval"))
  }

  function b(t) {
    Ut.test(t.type) && (t.defaultChecked = t.checked)
  }

  function m(t, e, n, i, s) {
    for (var r, o, a, l, c, u, d, p = t.length, h = g(e), f = [], m = 0; m < p; m++) if ((o = t[m]) || 0 === o) if ("object" === ft.type(o)) ft.merge(f, o.nodeType ? [o] : o); else if (Gt.test(o)) {
      for (l = l || h.appendChild(e.createElement("div")), c = (Yt.exec(o) || ["", ""])[1].toLowerCase(), d = Qt[c] || Qt._default, l.innerHTML = d[1] + ft.htmlPrefilter(o) + d[2], r = d[0]; r--;) l = l.lastChild;
      if (!pt.leadingWhitespace && Wt.test(o) && f.push(e.createTextNode(Wt.exec(o)[0])), !pt.tbody) for (r = (o = "table" !== c || Xt.test(o) ? "<table>" !== d[1] || Xt.test(o) ? 0 : l : l.firstChild) && o.childNodes.length; r--;) ft.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
      for (ft.merge(f, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
      l = h.lastChild
    } else f.push(e.createTextNode(o));
    for (l && h.removeChild(l), pt.appendChecked || ft.grep(y(f, "input"), b), m = 0; o = f[m++];) if (i && -1 < ft.inArray(o, i)) s && s.push(o); else if (a = ft.contains(o.ownerDocument, o), l = y(h.appendChild(o), "script"), a && v(l), n) for (r = 0; o = l[r++];) Kt.test(o.type || "") && n.push(o);
    return l = null, h
  }

  function p() {
    return !0
  }

  function h() {
    return !1
  }

  function f() {
    try {
      return st.activeElement
    } catch (t) {
    }
  }

  function w(t, e, n, i, s, r) {
    var o, a;
    if ("object" == typeof e) {
      for (a in "string" != typeof n && (i = i || n, n = undefined), e) w(t, a, n, i, e[a], r);
      return t
    }
    if (null == i && null == s ? (s = n, i = n = undefined) : null == s && ("string" == typeof n ? (s = i, i = undefined) : (s = i, i = n, n = undefined)), !1 === s) s = h; else if (!s) return t;
    return 1 === r && (o = s, (s = function (t) {
      return ft().off(t), o.apply(this, arguments)
    }).guid = o.guid || (o.guid = ft.guid++)), t.each(function () {
      ft.event.add(this, e, s, i, n)
    })
  }

  function k(t, e) {
    return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
  }

  function T(t) {
    return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type, t
  }

  function D(t) {
    var e = le.exec(t.type);
    return e ? t.type = e[1] : t.removeAttribute("type"), t
  }

  function C(t, e) {
    if (1 === e.nodeType && ft.hasData(t)) {
      var n, i, s, r = ft._data(t), o = ft._data(e, r), a = r.events;
      if (a) for (n in delete o.handle, o.events = {}, a) for (i = 0, s = a[n].length; i < s; i++) ft.event.add(e, n, a[n][i]);
      o.data && (o.data = ft.extend({}, o.data))
    }
  }

  function S(t, e) {
    var n, i, s;
    if (1 === e.nodeType) {
      if (n = e.nodeName.toLowerCase(), !pt.noCloneEvent && e[ft.expando]) {
        for (i in (s = ft._data(e)).events) ft.removeEvent(e, i, s.handle);
        e.removeAttribute(ft.expando)
      }
      "script" === n && e.text !== t.text ? (T(e).text = t.text, D(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), pt.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ut.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }
  }

  function $(n, i, s, r) {
    i = ot.apply([], i);
    var t, e, o, a, l, c, u = 0, d = n.length, p = d - 1, h = i[0], f = ft.isFunction(h);
    if (f || 1 < d && "string" == typeof h && !pt.checkClone && ae.test(h)) return n.each(function (t) {
      var e = n.eq(t);
      f && (i[0] = h.call(this, t, e.html())), $(e, i, s, r)
    });
    if (d && (t = (c = m(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === c.childNodes.length && (c = t), t || r)) {
      for (o = (a = ft.map(y(c, "script"), T)).length; u < d; u++) e = c, u !== p && (e = ft.clone(e, !0, !0), o && ft.merge(a, y(e, "script"))), s.call(n[u], e, u);
      if (o) for (l = a[a.length - 1].ownerDocument, ft.map(a, D), u = 0; u < o; u++) e = a[u], Kt.test(e.type || "") && !ft._data(e, "globalEval") && ft.contains(l, e) && (e.src ? ft._evalUrl && ft._evalUrl(e.src) : ft.globalEval((e.text || e.textContent || e.innerHTML || "").replace(ce, "")));
      c = t = null
    }
    return n
  }

  function M(t, e, n) {
    for (var i, s = e ? ft.filter(e, t) : t, r = 0; null != (i = s[r]); r++) n || 1 !== i.nodeType || ft.cleanData(y(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && v(y(i, "script")), i.parentNode.removeChild(i));
    return t
  }

  function A(t, e) {
    var n = ft(e.createElement(t)).appendTo(e.body), i = ft.css(n[0], "display");
    return n.detach(), i
  }

  function E(t) {
    var e = st, n = pe[t];
    return n || ("none" !== (n = A(t, e)) && n || ((e = ((de = (de || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || de[0].contentDocument).document).write(), e.close(), n = A(t, e), de.detach()), pe[t] = n), n
  }

  function j(t, e) {
    return {
      get: function () {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get
      }
    }
  }

  function O(t) {
    if (t in Se) return t;
    for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--;) if ((t = Ce[n] + e) in Se) return t
  }

  function I(t, e) {
    for (var n, i, s, r = [], o = 0, a = t.length; o < a; o++) (i = t[o]).style && (r[o] = ft._data(i, "olddisplay"), n = i.style.display, e ? (r[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && qt(i) && (r[o] = ft._data(i, "olddisplay", E(i.nodeName)))) : (s = qt(i), (n && "none" !== n || !s) && ft._data(i, "olddisplay", s ? n : ft.css(i, "display"))));
    for (o = 0; o < a; o++) (i = t[o]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[o] || "" : "none"));
    return t
  }

  function N(t, e, n) {
    var i = xe.exec(e);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
  }

  function L(t, e, n, i, s) {
    for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; r < 4; r += 2) "margin" === n && (o += ft.css(t, n + Rt[r], !0, s)), i ? ("content" === n && (o -= ft.css(t, "padding" + Rt[r], !0, s)), "margin" !== n && (o -= ft.css(t, "border" + Rt[r] + "Width", !0, s))) : (o += ft.css(t, "padding" + Rt[r], !0, s), "padding" !== n && (o += ft.css(t, "border" + Rt[r] + "Width", !0, s)));
    return o
  }

  function P(t, e, n) {
    var i = !0, s = "width" === e ? t.offsetWidth : t.offsetHeight, r = ye(t),
      o = pt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, r);
    if (s <= 0 || null == s) {
      if (((s = ve(t, e, r)) < 0 || null == s) && (s = t.style[e]), fe.test(s)) return s;
      i = o && (pt.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
    }
    return s + L(t, e, n || (o ? "border" : "content"), i, r) + "px"
  }

  function H(t, e, n, i, s) {
    return new H.prototype.init(t, e, n, i, s)
  }

  function z() {
    return x.setTimeout(function () {
      $e = undefined
    }), $e = ft.now()
  }

  function F(t, e) {
    var n, i = {height: t}, s = 0;
    for (e = e ? 1 : 0; s < 4; s += 2 - e) i["margin" + (n = Rt[s])] = i["padding" + n] = t;
    return e && (i.opacity = i.width = t), i
  }

  function R(t, e, n) {
    for (var i, s = (U.tweeners[e] || []).concat(U.tweeners["*"]), r = 0, o = s.length; r < o; r++) if (i = s[r].call(n, e, t)) return i
  }

  function q(e, t, n) {
    var i, s, r, o, a, l, c, u = this, d = {}, p = e.style, h = e.nodeType && qt(e), f = ft._data(e, "fxshow");
    for (i in n.queue || (null == (a = ft._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
      a.unqueued || l()
    }), a.unqueued++, u.always(function () {
      u.always(function () {
        a.unqueued--, ft.queue(e, "fx").length || a.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (c = ft.css(e, "display")) ? ft._data(e, "olddisplay") || E(e.nodeName) : c) && "none" === ft.css(e, "float") && (pt.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", pt.shrinkWrapBlocks() || u.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
    })), t) if (s = t[i], Ne.exec(s)) {
      if (delete t[i], r = r || "toggle" === s, s === (h ? "hide" : "show")) {
        if ("show" !== s || !f || f[i] === undefined) continue;
        h = !0
      }
      d[i] = f && f[i] || ft.style(e, i)
    } else c = undefined;
    if (ft.isEmptyObject(d)) "inline" === ("none" === c ? E(e.nodeName) : c) && (p.display = c); else for (i in f ? "hidden" in f && (h = f.hidden) : f = ft._data(e, "fxshow", {}), r && (f.hidden = !h), h ? ft(e).show() : u.done(function () {
      ft(e).hide()
    }), u.done(function () {
      var t;
      for (t in ft._removeData(e, "fxshow"), d) ft.style(e, t, d[t])
    }), d) o = R(h ? f[i] : 0, i, u), i in f || (f[i] = o.start, h && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
  }

  function B(t, e) {
    var n, i, s, r, o;
    for (n in t) if (s = e[i = ft.camelCase(n)], r = t[n], ft.isArray(r) && (s = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (o = ft.cssHooks[i]) && "expand" in o) for (n in r = o.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = s); else e[i] = s
  }

  function U(r, t, e) {
    var n, o, i = 0, s = U.prefilters.length, a = ft.Deferred().always(function () {
      delete l.elem
    }), l = function () {
      if (o) return !1;
      for (var t = $e || z(), e = Math.max(0, c.startTime + c.duration - t), n = 1 - (e / c.duration || 0), i = 0, s = c.tweens.length; i < s; i++) c.tweens[i].run(n);
      return a.notifyWith(r, [c, n, e]), n < 1 && s ? e : (a.resolveWith(r, [c]), !1)
    }, c = a.promise({
      elem: r,
      props: ft.extend({}, t),
      opts: ft.extend(!0, {specialEasing: {}, easing: ft.easing._default}, e),
      originalProperties: t,
      originalOptions: e,
      startTime: $e || z(),
      duration: e.duration,
      tweens: [],
      createTween: function (t, e) {
        var n = ft.Tween(r, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(n), n
      },
      stop: function (t) {
        var e = 0, n = t ? c.tweens.length : 0;
        if (o) return this;
        for (o = !0; e < n; e++) c.tweens[e].run(1);
        return t ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, t])) : a.rejectWith(r, [c, t]), this
      }
    }), u = c.props;
    for (B(u, c.opts.specialEasing); i < s; i++) if (n = U.prefilters[i].call(c, r, u, c.opts)) return ft.isFunction(n.stop) && (ft._queueHooks(c.elem, c.opts.queue).stop = ft.proxy(n.stop, n)), n;
    return ft.map(u, R, c), ft.isFunction(c.opts.start) && c.opts.start.call(r, c), ft.fx.timer(ft.extend(l, {
      elem: r,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }

  function Y(t) {
    return ft.attr(t, "class") || ""
  }

  function K(r) {
    return function (t, e) {
      "string" != typeof t && (e = t, t = "*");
      var n, i = 0, s = t.toLowerCase().match(Et) || [];
      if (ft.isFunction(e)) for (; n = s[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(e)) : (r[n] = r[n] || []).push(e)
    }
  }

  function W(e, s, r, o) {
    function a(t) {
      var i;
      return l[t] = !0, ft.each(e[t] || [], function (t, e) {
        var n = e(s, r, o);
        return "string" != typeof n || c || l[n] ? c ? !(i = n) : void 0 : (s.dataTypes.unshift(n), a(n), !1)
      }), i
    }

    var l = {}, c = e === an;
    return a(s.dataTypes[0]) || !l["*"] && a("*")
  }

  function V(t, e) {
    var n, i, s = ft.ajaxSettings.flatOptions || {};
    for (i in e) e[i] !== undefined && ((s[i] ? t : n || (n = {}))[i] = e[i]);
    return n && ft.extend(!0, t, n), t
  }

  function Q(t, e, n) {
    for (var i, s, r, o, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), s === undefined && (s = t.mimeType || e.getResponseHeader("Content-Type"));
    if (s) for (o in a) if (a[o] && a[o].test(s)) {
      l.unshift(o);
      break
    }
    if (l[0] in n) r = l[0]; else {
      for (o in n) {
        if (!l[0] || t.converters[o + " " + l[0]]) {
          r = o;
          break
        }
        i || (i = o)
      }
      r = r || i
    }
    if (r) return r !== l[0] && l.unshift(r), n[r]
  }

  function G(t, e, n, i) {
    var s, r, o, a, l, c = {}, u = t.dataTypes.slice();
    if (u[1]) for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
    for (r = u.shift(); r;) if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
      if (!(o = c[l + " " + r] || c["* " + r])) for (s in c) if ((a = s.split(" "))[1] === r && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
        !0 === o ? o = c[s] : !0 !== c[s] && (r = a[0], u.unshift(a[1]));
        break
      }
      if (!0 !== o) if (o && t["throws"]) e = o(e); else try {
        e = o(e)
      } catch (d) {
        return {state: "parsererror", error: o ? d : "No conversion from " + l + " to " + r}
      }
    }
    return {state: "success", data: e}
  }

  function X(t) {
    return t.style && t.style.display || ft.css(t, "display")
  }

  function J(t) {
    if (!ft.contains(t.ownerDocument || st, t)) return !0;
    for (; t && 1 === t.nodeType;) {
      if ("none" === X(t) || "hidden" === t.type) return !0;
      t = t.parentNode
    }
    return !1
  }

  function Z(n, t, i, s) {
    var e;
    if (ft.isArray(t)) ft.each(t, function (t, e) {
      i || pn.test(n) ? s(n, e) : Z(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, s)
    }); else if (i || "object" !== ft.type(t)) s(n, t); else for (e in t) Z(n + "[" + e + "]", t[e], i, s)
  }

  function tt() {
    try {
      return new x.XMLHttpRequest
    } catch (t) {
    }
  }

  function et() {
    try {
      return new x.ActiveXObject("Microsoft.XMLHTTP")
    } catch (t) {
    }
  }

  function nt(t) {
    return ft.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
  }

  var it = [], st = x.document, rt = it.slice, ot = it.concat, at = it.push, lt = it.indexOf, ct = {}, ut = ct.toString,
    dt = ct.hasOwnProperty, pt = {}, ht = "1.12.4", ft = function (t, e) {
      return new ft.fn.init(t, e)
    }, mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, gt = /^-ms-/, yt = /-([\da-z])/gi, vt = function (t, e) {
      return e.toUpperCase()
    };
  ft.fn = ft.prototype = {
    jquery: ht, constructor: ft, selector: "", length: 0, toArray: function () {
      return rt.call(this)
    }, get: function (t) {
      return null != t ? t < 0 ? this[t + this.length] : this[t] : rt.call(this)
    }, pushStack: function (t) {
      var e = ft.merge(this.constructor(), t);
      return e.prevObject = this, e.context = this.context, e
    }, each: function (t) {
      return ft.each(this, t)
    }, map: function (n) {
      return this.pushStack(ft.map(this, function (t, e) {
        return n.call(t, e, t)
      }))
    }, slice: function () {
      return this.pushStack(rt.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (t) {
      var e = this.length, n = +t + (t < 0 ? e : 0);
      return this.pushStack(0 <= n && n < e ? [this[n]] : [])
    }, end: function () {
      return this.prevObject || this.constructor()
    }, push: at, sort: it.sort, splice: it.splice
  }, ft.extend = ft.fn.extend = function (t) {
    var e, n, i, s, r, o, a = t || {}, l = 1, c = arguments.length, u = !1;
    for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" == typeof a || ft.isFunction(a) || (a = {}), l === c && (a = this, l--); l < c; l++) if (null != (r = arguments[l])) for (s in r) e = a[s], a !== (i = r[s]) && (u && i && (ft.isPlainObject(i) || (n = ft.isArray(i))) ? (n ? (n = !1, o = e && ft.isArray(e) ? e : []) : o = e && ft.isPlainObject(e) ? e : {}, a[s] = ft.extend(u, o, i)) : i !== undefined && (a[s] = i));
    return a
  }, ft.extend({
    expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
      throw new Error(t)
    }, noop: function () {
    }, isFunction: function (t) {
      return "function" === ft.type(t)
    }, isArray: Array.isArray || function (t) {
      return "array" === ft.type(t)
    }, isWindow: function (t) {
      return null != t && t == t.window
    }, isNumeric: function (t) {
      var e = t && t.toString();
      return !ft.isArray(t) && 0 <= e - parseFloat(e) + 1
    }, isEmptyObject: function (t) {
      var e;
      for (e in t) return !1;
      return !0
    }, isPlainObject: function (t) {
      var e;
      if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t)) return !1;
      try {
        if (t.constructor && !dt.call(t, "constructor") && !dt.call(t.constructor.prototype, "isPrototypeOf")) return !1
      } catch (n) {
        return !1
      }
      if (!pt.ownFirst) for (e in t) return dt.call(t, e);
      for (e in t) ;
      return e === undefined || dt.call(t, e)
    }, type: function (t) {
      return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ct[ut.call(t)] || "object" : typeof t
    }, globalEval: function (t) {
      t && ft.trim(t) && (x.execScript || function (t) {
        x.eval.call(x, t)
      })(t)
    }, camelCase: function (t) {
      return t.replace(gt, "ms-").replace(yt, vt)
    }, nodeName: function (t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }, each: function (t, e) {
      var n, i = 0;
      if (a(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) ; else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
      return t
    }, trim: function (t) {
      return null == t ? "" : (t + "").replace(mt, "")
    }, makeArray: function (t, e) {
      var n = e || [];
      return null != t && (a(Object(t)) ? ft.merge(n, "string" == typeof t ? [t] : t) : at.call(n, t)), n
    }, inArray: function (t, e, n) {
      var i;
      if (e) {
        if (lt) return lt.call(e, t, n);
        for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++) if (n in e && e[n] === t) return n
      }
      return -1
    }, merge: function (t, e) {
      for (var n = +e.length, i = 0, s = t.length; i < n;) t[s++] = e[i++];
      if (n != n) for (; e[i] !== undefined;) t[s++] = e[i++];
      return t.length = s, t
    }, grep: function (t, e, n) {
      for (var i = [], s = 0, r = t.length, o = !n; s < r; s++) !e(t[s], s) !== o && i.push(t[s]);
      return i
    }, map: function (t, e, n) {
      var i, s, r = 0, o = [];
      if (a(t)) for (i = t.length; r < i; r++) null != (s = e(t[r], r, n)) && o.push(s); else for (r in t) null != (s = e(t[r], r, n)) && o.push(s);
      return ot.apply([], o)
    }, guid: 1, proxy: function (t, e) {
      var n, i, s;
      return "string" == typeof e && (s = t[e], e = t, t = s), ft.isFunction(t) ? (n = rt.call(arguments, 2), (i = function () {
        return t.apply(e || this, n.concat(rt.call(arguments)))
      }).guid = t.guid = t.guid || ft.guid++, i) : undefined
    }, now: function () {
      return +new Date
    }, support: pt
  }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = it[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
    ct["[object " + e + "]"] = e.toLowerCase()
  });
  var bt = function (n) {
    function _(t, e, n, i) {
      var s, r, o, a, l, c, u, d, p = e && e.ownerDocument, h = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return n;
      if (!i && ((e ? e.ownerDocument || e : F) !== j && E(e), e = e || j, I)) {
        if (11 !== h && (c = yt.exec(t))) if (s = c[1]) {
          if (9 === h) {
            if (!(o = e.getElementById(s))) return n;
            if (o.id === s) return n.push(o), n
          } else if (p && (o = p.getElementById(s)) && H(e, o) && o.id === s) return n.push(o), n
        } else {
          if (c[2]) return J.apply(n, e.getElementsByTagName(t)), n;
          if ((s = c[3]) && y.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(s)), n
        }
        if (y.qsa && !Y[t + " "] && (!N || !N.test(t))) {
          if (1 !== h) p = e, d = t; else if ("object" !== e.nodeName.toLowerCase()) {
            for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = z), r = (u = D(t)).length, l = pt.test(a) ? "#" + a : "[id='" + a + "']"; r--;) u[r] = l + " " + g(u[r]);
            d = u.join(","), p = vt.test(t) && m(e.parentNode) || e
          }
          if (d) try {
            return J.apply(n, p.querySelectorAll(d)), n
          } catch (f) {
          } finally {
            a === z && e.removeAttribute("id")
          }
        }
      }
      return S(t.replace(at, "$1"), e, n, i)
    }

    function t() {
      function n(t, e) {
        return i.push(t + " ") > k.cacheLength && delete n[i.shift()], n[t + " "] = e
      }

      var i = [];
      return n
    }

    function l(t) {
      return t[z] = !0, t
    }

    function s(t) {
      var e = j.createElement("div");
      try {
        return !!t(e)
      } catch (n) {
        return !1
      } finally {
        e.parentNode && e.parentNode.removeChild(e), e = null
      }
    }

    function e(t, e) {
      for (var n = t.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = e
    }

    function c(t, e) {
      var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || W) - (~t.sourceIndex || W);
      if (i) return i;
      if (n) for (; n = n.nextSibling;) if (n === e) return -1;
      return t ? 1 : -1
    }

    function i(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }

    function r(n) {
      return function (t) {
        var e = t.nodeName.toLowerCase();
        return ("input" === e || "button" === e) && t.type === n
      }
    }

    function o(o) {
      return l(function (r) {
        return r = +r, l(function (t, e) {
          for (var n, i = o([], t.length, r), s = i.length; s--;) t[n = i[s]] && (t[n] = !(e[n] = t[n]))
        })
      })
    }

    function m(t) {
      return t && "undefined" != typeof t.getElementsByTagName && t
    }

    function a() {
    }

    function g(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
      return i
    }

    function d(a, t, e) {
      var l = t.dir, c = e && "parentNode" === l, u = q++;
      return t.first ? function (t, e, n) {
        for (; t = t[l];) if (1 === t.nodeType || c) return a(t, e, n)
      } : function (t, e, n) {
        var i, s, r, o = [R, u];
        if (n) {
          for (; t = t[l];) if ((1 === t.nodeType || c) && a(t, e, n)) return !0
        } else for (; t = t[l];) if (1 === t.nodeType || c) {
          if ((i = (s = (r = t[z] || (t[z] = {}))[t.uniqueID] || (r[t.uniqueID] = {}))[l]) && i[0] === R && i[1] === u) return o[2] = i[2];
          if ((s[l] = o)[2] = a(t, e, n)) return !0
        }
      }
    }

    function p(s) {
      return 1 < s.length ? function (t, e, n) {
        for (var i = s.length; i--;) if (!s[i](t, e, n)) return !1;
        return !0
      } : s[0]
    }

    function v(t, e, n) {
      for (var i = 0, s = e.length; i < s; i++) _(t, e[i], n);
      return n
    }

    function w(t, e, n, i, s) {
      for (var r, o = [], a = 0, l = t.length, c = null != e; a < l; a++) (r = t[a]) && (n && !n(r, i, s) || (o.push(r), c && e.push(a)));
      return o
    }

    function b(h, f, m, g, y, t) {
      return g && !g[z] && (g = b(g)), y && !y[z] && (y = b(y, t)), l(function (t, e, n, i) {
        var s, r, o, a = [], l = [], c = e.length, u = t || v(f || "*", n.nodeType ? [n] : n, []),
          d = !h || !t && f ? u : w(u, a, h, n, i), p = m ? y || (t ? h : c || g) ? [] : e : d;
        if (m && m(d, p, n, i), g) for (s = w(p, l), g(s, [], n, i), r = s.length; r--;) (o = s[r]) && (p[l[r]] = !(d[l[r]] = o));
        if (t) {
          if (y || h) {
            if (y) {
              for (s = [], r = p.length; r--;) (o = p[r]) && s.push(d[r] = o);
              y(null, p = [], s, i)
            }
            for (r = p.length; r--;) (o = p[r]) && -1 < (s = y ? tt(t, o) : a[r]) && (t[s] = !(e[s] = o))
          }
        } else p = w(p === e ? p.splice(c, p.length) : p), y ? y(null, e, p, i) : J.apply(e, p)
      })
    }

    function h(t) {
      for (var s, e, n, i = t.length, r = k.relative[t[0].type], o = r || k.relative[" "], a = r ? 1 : 0, l = d(function (t) {
        return t === s
      }, o, !0), c = d(function (t) {
        return -1 < tt(s, t)
      }, o, !0), u = [function (t, e, n) {
        var i = !r && (n || e !== $) || ((s = e).nodeType ? l(t, e, n) : c(t, e, n));
        return s = null, i
      }]; a < i; a++) if (e = k.relative[t[a].type]) u = [d(p(u), e)]; else {
        if ((e = k.filter[t[a].type].apply(null, t[a].matches))[z]) {
          for (n = ++a; n < i && !k.relative[t[n].type]; n++) ;
          return b(1 < a && p(u), 1 < a && g(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(at, "$1"), e, a < n && h(t.slice(a, n)), n < i && h(t = t.slice(n)), n < i && g(t))
        }
        u.push(e)
      }
      return p(u)
    }

    function u(g, y) {
      var v = 0 < y.length, b = 0 < g.length, t = function (t, e, n, i, s) {
        var r, o, a, l = 0, c = "0", u = t && [], d = [], p = $, h = t || b && k.find.TAG("*", s),
          f = R += null == p ? 1 : Math.random() || .1, m = h.length;
        for (s && ($ = e === j || e || s); c !== m && null != (r = h[c]); c++) {
          if (b && r) {
            for (o = 0, e || r.ownerDocument === j || (E(r), n = !I); a = g[o++];) if (a(r, e || j, n)) {
              i.push(r);
              break
            }
            s && (R = f)
          }
          v && ((r = !a && r) && l--, t && u.push(r))
        }
        if (l += c, v && c !== l) {
          for (o = 0; a = y[o++];) a(u, d, e, n);
          if (t) {
            if (0 < l) for (; c--;) u[c] || d[c] || (d[c] = G.call(i));
            d = w(d)
          }
          J.apply(i, d), s && !t && 0 < d.length && 1 < l + y.length && _.uniqueSort(i)
        }
        return s && (R = f, $ = p), u
      };
      return v ? l(t) : t
    }

    var f, y, k, x, T, D, C, S, $, M, A, E, j, O, I, N, L, P, H, z = "sizzle" + 1 * new Date, F = n.document, R = 0,
      q = 0, B = t(), U = t(), Y = t(), K = function (t, e) {
        return t === e && (A = !0), 0
      }, W = 1 << 31, V = {}.hasOwnProperty, Q = [], G = Q.pop, X = Q.push, J = Q.push, Z = Q.slice,
      tt = function (t, e) {
        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
        return -1
      },
      et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      st = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
      rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
      ot = new RegExp(nt + "+", "g"), at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
      lt = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
      ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), dt = new RegExp(rt),
      pt = new RegExp("^" + it + "$"), ht = {
        ID: new RegExp("^#(" + it + ")"),
        CLASS: new RegExp("^\\.(" + it + ")"),
        TAG: new RegExp("^(" + it + "|[*])"),
        ATTR: new RegExp("^" + st),
        PSEUDO: new RegExp("^" + rt),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + et + ")$", "i"),
        needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
      }, ft = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/,
      yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, vt = /[+~]/, bt = /'|\\/g,
      _t = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), wt = function (t, e, n) {
        var i = "0x" + e - 65536;
        return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }, kt = function () {
        E()
      };
    try {
      J.apply(Q = Z.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
    } catch (xt) {
      J = {
        apply: Q.length ? function (t, e) {
          X.apply(t, Z.call(e))
        } : function (t, e) {
          for (var n = t.length, i = 0; t[n++] = e[i++];) ;
          t.length = n - 1
        }
      }
    }
    for (f in y = _.support = {}, T = _.isXML = function (t) {
      var e = t && (t.ownerDocument || t).documentElement;
      return !!e && "HTML" !== e.nodeName
    }, E = _.setDocument = function (t) {
      var e, n, i = t ? t.ownerDocument || t : F;
      return i !== j && 9 === i.nodeType && i.documentElement && (O = (j = i).documentElement, I = !T(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), y.attributes = s(function (t) {
        return t.className = "i", !t.getAttribute("className")
      }), y.getElementsByTagName = s(function (t) {
        return t.appendChild(j.createComment("")), !t.getElementsByTagName("*").length
      }), y.getElementsByClassName = gt.test(j.getElementsByClassName), y.getById = s(function (t) {
        return O.appendChild(t).id = z, !j.getElementsByName || !j.getElementsByName(z).length
      }), y.getById ? (k.find.ID = function (t, e) {
        if ("undefined" != typeof e.getElementById && I) {
          var n = e.getElementById(t);
          return n ? [n] : []
        }
      }, k.filter.ID = function (t) {
        var e = t.replace(_t, wt);
        return function (t) {
          return t.getAttribute("id") === e
        }
      }) : (delete k.find.ID, k.filter.ID = function (t) {
        var n = t.replace(_t, wt);
        return function (t) {
          var e = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
          return e && e.value === n
        }
      }), k.find.TAG = y.getElementsByTagName ? function (t, e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : y.qsa ? e.querySelectorAll(t) : void 0
      } : function (t, e) {
        var n, i = [], s = 0, r = e.getElementsByTagName(t);
        if ("*" !== t) return r;
        for (; n = r[s++];) 1 === n.nodeType && i.push(n);
        return i
      }, k.find.CLASS = y.getElementsByClassName && function (t, e) {
        if ("undefined" != typeof e.getElementsByClassName && I) return e.getElementsByClassName(t)
      }, L = [], N = [], (y.qsa = gt.test(j.querySelectorAll)) && (s(function (t) {
        O.appendChild(t).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + z + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + z + "+*").length || N.push(".#.+[+~]")
      }), s(function (t) {
        var e = j.createElement("input");
        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
      })), (y.matchesSelector = gt.test(P = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && s(function (t) {
        y.disconnectedMatch = P.call(t, "div"), P.call(t, "[s!='']:x"), L.push("!=", rt)
      }), N = N.length && new RegExp(N.join("|")), L = L.length && new RegExp(L.join("|")), e = gt.test(O.compareDocumentPosition), H = e || gt.test(O.contains) ? function (t, e) {
        var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
      } : function (t, e) {
        if (e) for (; e = e.parentNode;) if (e === t) return !0;
        return !1
      }, K = e ? function (t, e) {
        if (t === e) return A = !0, 0;
        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
        return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !y.sortDetached && e.compareDocumentPosition(t) === n ? t === j || t.ownerDocument === F && H(F, t) ? -1 : e === j || e.ownerDocument === F && H(F, e) ? 1 : M ? tt(M, t) - tt(M, e) : 0 : 4 & n ? -1 : 1)
      } : function (t, e) {
        if (t === e) return A = !0, 0;
        var n, i = 0, s = t.parentNode, r = e.parentNode, o = [t], a = [e];
        if (!s || !r) return t === j ? -1 : e === j ? 1 : s ? -1 : r ? 1 : M ? tt(M, t) - tt(M, e) : 0;
        if (s === r) return c(t, e);
        for (n = t; n = n.parentNode;) o.unshift(n);
        for (n = e; n = n.parentNode;) a.unshift(n);
        for (; o[i] === a[i];) i++;
        return i ? c(o[i], a[i]) : o[i] === F ? -1 : a[i] === F ? 1 : 0
      }), j
    }, _.matches = function (t, e) {
      return _(t, null, null, e)
    }, _.matchesSelector = function (t, e) {
      if ((t.ownerDocument || t) !== j && E(t), e = e.replace(ut, "='$1']"), y.matchesSelector && I && !Y[e + " "] && (!L || !L.test(e)) && (!N || !N.test(e))) try {
        var n = P.call(t, e);
        if (n || y.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
      } catch (xt) {
      }
      return 0 < _(e, j, null, [t]).length
    }, _.contains = function (t, e) {
      return (t.ownerDocument || t) !== j && E(t), H(t, e)
    }, _.attr = function (t, e) {
      (t.ownerDocument || t) !== j && E(t);
      var n = k.attrHandle[e.toLowerCase()], i = n && V.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !I) : undefined;
      return i !== undefined ? i : y.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
    }, _.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t)
    }, _.uniqueSort = function (t) {
      var e, n = [], i = 0, s = 0;
      if (A = !y.detectDuplicates, M = !y.sortStable && t.slice(0), t.sort(K), A) {
        for (; e = t[s++];) e === t[s] && (i = n.push(s));
        for (; i--;) t.splice(n[i], 1)
      }
      return M = null, t
    }, x = _.getText = function (t) {
      var e, n = "", i = 0, s = t.nodeType;
      if (s) {
        if (1 === s || 9 === s || 11 === s) {
          if ("string" == typeof t.textContent) return t.textContent;
          for (t = t.firstChild; t; t = t.nextSibling) n += x(t)
        } else if (3 === s || 4 === s) return t.nodeValue
      } else for (; e = t[i++];) n += x(e);
      return n
    }, (k = _.selectors = {
      cacheLength: 50,
      createPseudo: l,
      match: ht,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (t) {
          return t[1] = t[1].replace(_t, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(_t, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
        }, CHILD: function (t) {
          return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || _.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && _.error(t[0]), t
        }, PSEUDO: function (t) {
          var e, n = !t[6] && t[2];
          return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = D(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
        }
      },
      filter: {
        TAG: function (t) {
          var e = t.replace(_t, wt).toLowerCase();
          return "*" === t ? function () {
            return !0
          } : function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e
          }
        }, CLASS: function (t) {
          var e = B[t + " "];
          return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function (t) {
            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
          })
        }, ATTR: function (n, i, s) {
          return function (t) {
            var e = _.attr(t, n);
            return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === s : "!=" === i ? e !== s : "^=" === i ? s && 0 === e.indexOf(s) : "*=" === i ? s && -1 < e.indexOf(s) : "$=" === i ? s && e.slice(-s.length) === s : "~=" === i ? -1 < (" " + e.replace(ot, " ") + " ").indexOf(s) : "|=" === i && (e === s || e.slice(0, s.length + 1) === s + "-"))
          }
        }, CHILD: function (f, t, e, m, g) {
          var y = "nth" !== f.slice(0, 3), v = "last" !== f.slice(-4), b = "of-type" === t;
          return 1 === m && 0 === g ? function (t) {
            return !!t.parentNode
          } : function (t, e, n) {
            var i, s, r, o, a, l, c = y !== v ? "nextSibling" : "previousSibling", u = t.parentNode,
              d = b && t.nodeName.toLowerCase(), p = !n && !b, h = !1;
            if (u) {
              if (y) {
                for (; c;) {
                  for (o = t; o = o[c];) if (b ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
                  l = c = "only" === f && !l && "nextSibling"
                }
                return !0
              }
              if (l = [v ? u.firstChild : u.lastChild], v && p) {
                for (h = (a = (i = (s = (r = (o = u)[z] || (o[z] = {}))[o.uniqueID] || (r[o.uniqueID] = {}))[f] || [])[0] === R && i[1]) && i[2], o = a && u.childNodes[a]; o = ++a && o && o[c] || (h = a = 0) || l.pop();) if (1 === o.nodeType && ++h && o === t) {
                  s[f] = [R, a, h];
                  break
                }
              } else if (p && (h = a = (i = (s = (r = (o = t)[z] || (o[z] = {}))[o.uniqueID] || (r[o.uniqueID] = {}))[f] || [])[0] === R && i[1]), !1 === h) for (; (o = ++a && o && o[c] || (h = a = 0) || l.pop()) && ((b ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++h || (p && ((s = (r = o[z] || (o[z] = {}))[o.uniqueID] || (r[o.uniqueID] = {}))[f] = [R, h]), o !== t));) ;
              return (h -= g) === m || h % m == 0 && 0 <= h / m
            }
          }
        }, PSEUDO: function (t, r) {
          var e, o = k.pseudos[t] || k.setFilters[t.toLowerCase()] || _.error("unsupported pseudo: " + t);
          return o[z] ? o(r) : 1 < o.length ? (
            e = [t, t, "", r], k.setFilters.hasOwnProperty(t.toLowerCase()) ? l(function (t, e) {
              for (var n, i = o(t, r), s = i.length; s--;) t[n = tt(t, i[s])] = !(e[n] = i[s])
            }) : function (t) {
              return o(t, 0, e)
            }) : o
        }
      },
      pseudos: {
        not: l(function (t) {
          var i = [], s = [], a = C(t.replace(at, "$1"));
          return a[z] ? l(function (t, e, n, i) {
            for (var s, r = a(t, null, i, []), o = t.length; o--;) (s = r[o]) && (t[o] = !(e[o] = s))
          }) : function (t, e, n) {
            return i[0] = t, a(i, null, n, s), i[0] = null, !s.pop()
          }
        }), has: l(function (e) {
          return function (t) {
            return 0 < _(e, t).length
          }
        }), contains: l(function (e) {
          return e = e.replace(_t, wt), function (t) {
            return -1 < (t.textContent || t.innerText || x(t)).indexOf(e)
          }
        }), lang: l(function (n) {
          return pt.test(n || "") || _.error("unsupported lang: " + n), n = n.replace(_t, wt).toLowerCase(), function (t) {
            var e;
            do {
              if (e = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }), target: function (t) {
          var e = n.location && n.location.hash;
          return e && e.slice(1) === t.id
        }, root: function (t) {
          return t === O
        }, focus: function (t) {
          return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
        }, enabled: function (t) {
          return !1 === t.disabled
        }, disabled: function (t) {
          return !0 === t.disabled
        }, checked: function (t) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && !!t.checked || "option" === e && !!t.selected
        }, selected: function (t) {
          return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
        }, empty: function (t) {
          for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
          return !0
        }, parent: function (t) {
          return !k.pseudos.empty(t)
        }, header: function (t) {
          return mt.test(t.nodeName)
        }, input: function (t) {
          return ft.test(t.nodeName)
        }, button: function (t) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && "button" === t.type || "button" === e
        }, text: function (t) {
          var e;
          return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
        }, first: o(function () {
          return [0]
        }), last: o(function (t, e) {
          return [e - 1]
        }), eq: o(function (t, e, n) {
          return [n < 0 ? n + e : n]
        }), even: o(function (t, e) {
          for (var n = 0; n < e; n += 2) t.push(n);
          return t
        }), odd: o(function (t, e) {
          for (var n = 1; n < e; n += 2) t.push(n);
          return t
        }), lt: o(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
          return t
        }), gt: o(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
          return t
        })
      }
    }).pseudos.nth = k.pseudos.eq, {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) k.pseudos[f] = i(f);
    for (f in {submit: !0, reset: !0}) k.pseudos[f] = r(f);
    return a.prototype = k.filters = k.pseudos, k.setFilters = new a, D = _.tokenize = function (t, e) {
      var n, i, s, r, o, a, l, c = U[t + " "];
      if (c) return e ? 0 : c.slice(0);
      for (o = t, a = [], l = k.preFilter; o;) {
        for (r in n && !(i = lt.exec(o)) || (i && (o = o.slice(i[0].length) || o), a.push(s = [])), n = !1, (i = ct.exec(o)) && (n = i.shift(), s.push({
          value: n,
          type: i[0].replace(at, " ")
        }), o = o.slice(n.length)), k.filter) !(i = ht[r].exec(o)) || l[r] && !(i = l[r](i)) || (n = i.shift(), s.push({
          value: n,
          type: r,
          matches: i
        }), o = o.slice(n.length));
        if (!n) break
      }
      return e ? o.length : o ? _.error(t) : U(t, a).slice(0)
    }, C = _.compile = function (t, e) {
      var n, i = [], s = [], r = Y[t + " "];
      if (!r) {
        for (e || (e = D(t)), n = e.length; n--;) (r = h(e[n]))[z] ? i.push(r) : s.push(r);
        (r = Y(t, u(s, i))).selector = t
      }
      return r
    }, S = _.select = function (t, e, n, i) {
      var s, r, o, a, l, c = "function" == typeof t && t, u = !i && D(t = c.selector || t);
      if (n = n || [], 1 === u.length) {
        if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (o = r[0]).type && y.getById && 9 === e.nodeType && I && k.relative[r[1].type]) {
          if (!(e = (k.find.ID(o.matches[0].replace(_t, wt), e) || [])[0])) return n;
          c && (e = e.parentNode), t = t.slice(r.shift().value.length)
        }
        for (s = ht.needsContext.test(t) ? 0 : r.length; s-- && (o = r[s], !k.relative[a = o.type]);) if ((l = k.find[a]) && (i = l(o.matches[0].replace(_t, wt), vt.test(r[0].type) && m(e.parentNode) || e))) {
          if (r.splice(s, 1), !(t = i.length && g(r))) return J.apply(n, i), n;
          break
        }
      }
      return (c || C(t, u))(i, e, !I, n, !e || vt.test(t) && m(e.parentNode) || e), n
    }, y.sortStable = z.split("").sort(K).join("") === z, y.detectDuplicates = !!A, E(), y.sortDetached = s(function (t) {
      return 1 & t.compareDocumentPosition(j.createElement("div"))
    }), s(function (t) {
      return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
    }) || e("type|href|height|width", function (t, e, n) {
      if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
    }), y.attributes && s(function (t) {
      return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
    }) || e("value", function (t, e, n) {
      if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
    }), s(function (t) {
      return null == t.getAttribute("disabled")
    }) || e(et, function (t, e, n) {
      var i;
      if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
    }), _
  }(x);
  ft.find = bt, ft.expr = bt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = bt.uniqueSort, ft.text = bt.getText, ft.isXMLDoc = bt.isXML, ft.contains = bt.contains;
  var _t = function (t, e, n) {
    for (var i = [], s = n !== undefined; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
      if (s && ft(t).is(n)) break;
      i.push(t)
    }
    return i
  }, wt = function (t, e) {
    for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
    return n
  }, kt = ft.expr.match.needsContext, xt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Tt = /^.[^:#\[\.,]*$/;
  ft.filter = function (t, e, n) {
    var i = e[0];
    return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function (t) {
      return 1 === t.nodeType
    }))
  }, ft.fn.extend({
    find: function (t) {
      var e, n = [], i = this, s = i.length;
      if ("string" != typeof t) return this.pushStack(ft(t).filter(function () {
        for (e = 0; e < s; e++) if (ft.contains(i[e], this)) return !0
      }));
      for (e = 0; e < s; e++) ft.find(t, i[e], n);
      return (n = this.pushStack(1 < s ? ft.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
    }, filter: function (t) {
      return this.pushStack(e(this, t || [], !1))
    }, not: function (t) {
      return this.pushStack(e(this, t || [], !0))
    }, is: function (t) {
      return !!e(this, "string" == typeof t && kt.test(t) ? ft(t) : t || [], !1).length
    }
  });
  var Dt, Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (ft.fn.init = function (t, e, n) {
    var i, s;
    if (!t) return this;
    if (n = n || Dt, "string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (t.selector !== undefined && (this.selector = t.selector, this.context = t.context), ft.makeArray(t, this));
    if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : Ct.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
    if (i[1]) {
      if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : st, !0)), xt.test(i[1]) && ft.isPlainObject(e)) for (i in e) ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
      return this
    }
    if ((s = st.getElementById(i[2])) && s.parentNode) {
      if (s.id !== i[2]) return Dt.find(t);
      this.length = 1, this[0] = s
    }
    return this.context = st, this.selector = t, this
  }).prototype = ft.fn, Dt = ft(st);
  var St = /^(?:parents|prev(?:Until|All))/, $t = {children: !0, contents: !0, next: !0, prev: !0};
  ft.fn.extend({
    has: function (t) {
      var e, n = ft(t, this), i = n.length;
      return this.filter(function () {
        for (e = 0; e < i; e++) if (ft.contains(this, n[e])) return !0
      })
    }, closest: function (t, e) {
      for (var n, i = 0, s = this.length, r = [], o = kt.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; i < s; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
        r.push(n);
        break
      }
      return this.pushStack(1 < r.length ? ft.uniqueSort(r) : r)
    }, index: function (t) {
      return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (t, e) {
      return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
    }, addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
  }), ft.each({
    parent: function (t) {
      var e = t.parentNode;
      return e && 11 !== e.nodeType ? e : null
    }, parents: function (t) {
      return _t(t, "parentNode")
    }, parentsUntil: function (t, e, n) {
      return _t(t, "parentNode", n)
    }, next: function (t) {
      return n(t, "nextSibling")
    }, prev: function (t) {
      return n(t, "previousSibling")
    }, nextAll: function (t) {
      return _t(t, "nextSibling")
    }, prevAll: function (t) {
      return _t(t, "previousSibling")
    }, nextUntil: function (t, e, n) {
      return _t(t, "nextSibling", n)
    }, prevUntil: function (t, e, n) {
      return _t(t, "previousSibling", n)
    }, siblings: function (t) {
      return wt((t.parentNode || {}).firstChild, t)
    }, children: function (t) {
      return wt(t.firstChild)
    }, contents: function (t) {
      return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
    }
  }, function (i, s) {
    ft.fn[i] = function (t, e) {
      var n = ft.map(this, s, t);
      return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = ft.filter(e, n)), 1 < this.length && ($t[i] || (n = ft.uniqueSort(n)), St.test(i) && (n = n.reverse())), this.pushStack(n)
    }
  });
  var Mt, At, Et = /\S+/g;
  for (At in ft.Callbacks = function (i) {
    i = "string" == typeof i ? u(i) : ft.extend({}, i);
    var s, t, e, n, r = [], o = [], a = -1, l = function () {
      for (n = i.once, e = s = !0; o.length; a = -1) for (t = o.shift(); ++a < r.length;) !1 === r[a].apply(t[0], t[1]) && i.stopOnFalse && (a = r.length, t = !1);
      i.memory || (t = !1), s = !1, n && (r = t ? [] : "")
    }, c = {
      add: function () {
        return r && (t && !s && (a = r.length - 1, o.push(t)), function n(t) {
          ft.each(t, function (t, e) {
            ft.isFunction(e) ? i.unique && c.has(e) || r.push(e) : e && e.length && "string" !== ft.type(e) && n(e)
          })
        }(arguments), t && !s && l()), this
      }, remove: function () {
        return ft.each(arguments, function (t, e) {
          for (var n; -1 < (n = ft.inArray(e, r, n));) r.splice(n, 1), n <= a && a--
        }), this
      }, has: function (t) {
        return t ? -1 < ft.inArray(t, r) : 0 < r.length
      }, empty: function () {
        return r && (r = []), this
      }, disable: function () {
        return n = o = [], r = t = "", this
      }, disabled: function () {
        return !r
      }, lock: function () {
        return n = !0, t || c.disable(), this
      }, locked: function () {
        return !!n
      }, fireWith: function (t, e) {
        return n || (e = [t, (e = e || []).slice ? e.slice() : e], o.push(e), s || l()), this
      }, fire: function () {
        return c.fireWith(this, arguments), this
      }, fired: function () {
        return !!e
      }
    };
    return c
  }, ft.extend({
    Deferred: function (t) {
      var r = [["resolve", "done", ft.Callbacks("once memory"), "resolved"], ["reject", "fail", ft.Callbacks("once memory"), "rejected"], ["notify", "progress", ft.Callbacks("memory")]],
        s = "pending", o = {
          state: function () {
            return s
          }, always: function () {
            return a.done(arguments).fail(arguments), this
          }, then: function () {
            var s = arguments;
            return ft.Deferred(function (i) {
              ft.each(r, function (t, e) {
                var n = ft.isFunction(s[t]) && s[t];
                a[e[1]](function () {
                  var t = n && n.apply(this, arguments);
                  t && ft.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this === o ? i.promise() : this, n ? [t] : arguments)
                })
              }), s = null
            }).promise()
          }, promise: function (t) {
            return null != t ? ft.extend(t, o) : o
          }
        }, a = {};
      return o.pipe = o.then, ft.each(r, function (t, e) {
        var n = e[2], i = e[3];
        o[e[1]] = n.add, i && n.add(function () {
          s = i
        }, r[1 ^ t][2].disable, r[2][2].lock), a[e[0]] = function () {
          return a[e[0] + "With"](this === a ? o : this, arguments), this
        }, a[e[0] + "With"] = n.fireWith
      }), o.promise(a), t && t.call(a, a), a
    }, when: function (t) {
      var s, e, n, i = 0, r = rt.call(arguments), o = r.length, a = 1 !== o || t && ft.isFunction(t.promise) ? o : 0,
        l = 1 === a ? t : ft.Deferred(), c = function (e, n, i) {
          return function (t) {
            n[e] = this, i[e] = 1 < arguments.length ? rt.call(arguments) : t, i === s ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
          }
        };
      if (1 < o) for (s = new Array(o), e = new Array(o), n = new Array(o); i < o; i++) r[i] && ft.isFunction(r[i].promise) ? r[i].promise().progress(c(i, e, s)).done(c(i, n, r)).fail(l.reject) : --a;
      return a || l.resolveWith(n, r), l.promise()
    }
  }), ft.fn.ready = function (t) {
    return ft.ready.promise().done(t), this
  }, ft.extend({
    isReady: !1, readyWait: 1, holdReady: function (t) {
      t ? ft.readyWait++ : ft.ready(!0)
    }, ready: function (t) {
      (!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0) !== t && 0 < --ft.readyWait || (Mt.resolveWith(st, [ft]), ft.fn.triggerHandler && (ft(st).triggerHandler("ready"), ft(st).off("ready")))
    }
  }), ft.ready.promise = function (t) {
    if (!Mt) if (Mt = ft.Deferred(), "complete" === st.readyState || "loading" !== st.readyState && !st.documentElement.doScroll) x.setTimeout(ft.ready); else if (st.addEventListener) st.addEventListener("DOMContentLoaded", r), x.addEventListener("load", r); else {
      st.attachEvent("onreadystatechange", r), x.attachEvent("onload", r);
      var e = !1;
      try {
        e = null == x.frameElement && st.documentElement
      } catch (n) {
      }
      e && e.doScroll && function i() {
        if (!ft.isReady) {
          try {
            e.doScroll("left")
          } catch (n) {
            return x.setTimeout(i, 50)
          }
          s(), ft.ready()
        }
      }()
    }
    return Mt.promise(t)
  }, ft.ready.promise(), ft(pt)) break;
  pt.ownFirst = "0" === At, pt.inlineBlockNeedsLayout = !1, ft(function () {
    var t, e, n, i;
    (n = st.getElementsByTagName("body")[0]) && n.style && (e = st.createElement("div"), (i = st.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", pt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
  }), function () {
    var t = st.createElement("div");
    pt.deleteExpando = !0;
    try {
      delete t.test
    } catch (e) {
      pt.deleteExpando = !1
    }
    t = null
  }();
  var jt, Ot = function (t) {
    var e = ft.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
    return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
  }, It = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Nt = /([A-Z])/g;
  ft.extend({
    cache: {},
    noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
    hasData: function (t) {
      return !!(t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando]) && !c(t)
    },
    data: function (t, e, n) {
      return i(t, e, n)
    },
    removeData: function (t, e) {
      return o(t, e)
    },
    _data: function (t, e, n) {
      return i(t, e, n, !0)
    },
    _removeData: function (t, e) {
      return o(t, e, !0)
    }
  }), ft.fn.extend({
    data: function (t, e) {
      var n, i, s, r = this[0], o = r && r.attributes;
      if (t !== undefined) return "object" == typeof t ? this.each(function () {
        ft.data(this, t)
      }) : 1 < arguments.length ? this.each(function () {
        ft.data(this, t, e)
      }) : r ? l(r, t, ft.data(r, t)) : undefined;
      if (this.length && (s = ft.data(r), 1 === r.nodeType && !ft._data(r, "parsedAttrs"))) {
        for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && l(r, i = ft.camelCase(i.slice(5)), s[i]);
        ft._data(r, "parsedAttrs", !0)
      }
      return s
    }, removeData: function (t) {
      return this.each(function () {
        ft.removeData(this, t)
      })
    }
  }), ft.extend({
    queue: function (t, e, n) {
      var i;
      if (t) return e = (e || "fx") + "queue", i = ft._data(t, e), n && (!i || ft.isArray(n) ? i = ft._data(t, e, ft.makeArray(n)) : i.push(n)), i || []
    }, dequeue: function (t, e) {
      e = e || "fx";
      var n = ft.queue(t, e), i = n.length, s = n.shift(), r = ft._queueHooks(t, e), o = function () {
        ft.dequeue(t, e)
      };
      "inprogress" === s && (s = n.shift(), i--), s && ("fx" === e && n.unshift("inprogress"), delete r.stop, s.call(t, o, r)), !i && r && r.empty.fire()
    }, _queueHooks: function (t, e) {
      var n = e + "queueHooks";
      return ft._data(t, n) || ft._data(t, n, {
        empty: ft.Callbacks("once memory").add(function () {
          ft._removeData(t, e + "queue"), ft._removeData(t, n)
        })
      })
    }
  }), ft.fn.extend({
    queue: function (e, n) {
      var t = 2;
      return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? ft.queue(this[0], e) : n === undefined ? this : this.each(function () {
        var t = ft.queue(this, e, n);
        ft._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ft.dequeue(this, e)
      })
    }, dequeue: function (t) {
      return this.each(function () {
        ft.dequeue(this, t)
      })
    }, clearQueue: function (t) {
      return this.queue(t || "fx", [])
    }, promise: function (t, e) {
      var n, i = 1, s = ft.Deferred(), r = this, o = this.length, a = function () {
        --i || s.resolveWith(r, [r])
      };
      for ("string" != typeof t && (e = t, t = undefined), t = t || "fx"; o--;) (n = ft._data(r[o], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      return a(), s.promise(e)
    }
  }), pt.shrinkWrapBlocks = function () {
    return null != jt ? jt : (jt = !1, (e = st.getElementsByTagName("body")[0]) && e.style ? (t = st.createElement("div"), (n = st.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(st.createElement("div")).style.width = "5px", jt = 3 !== t.offsetWidth), e.removeChild(n), jt) : void 0);
    var t, e, n
  };
  var Lt, Pt, Ht, zt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ft = new RegExp("^(?:([+-])=|)(" + zt + ")([a-z%]*)$", "i"), Rt = ["Top", "Right", "Bottom", "Left"],
    qt = function (t, e) {
      return t = e || t, "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
    }, Bt = function (t, e, n, i, s, r, o) {
      var a = 0, l = t.length, c = null == n;
      if ("object" === ft.type(n)) for (a in s = !0, n) Bt(t, e, a, n[a], !0, r, o); else if (i !== undefined && (s = !0, ft.isFunction(i) || (o = !0), c && (o ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
        return c.call(ft(t), n)
      })), e)) for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
      return s ? t : c ? e.call(t) : l ? e(t[0], n) : r
    }, Ut = /^(?:checkbox|radio)$/i, Yt = /<([\w:-]+)/, Kt = /^$|\/(?:java|ecma)script/i, Wt = /^\s+/,
    Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  Lt = st.createElement("div"), Pt = st.createDocumentFragment(), Ht = st.createElement("input"), Lt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", pt.leadingWhitespace = 3 === Lt.firstChild.nodeType, pt.tbody = !Lt.getElementsByTagName("tbody").length, pt.htmlSerialize = !!Lt.getElementsByTagName("link").length, pt.html5Clone = "<:nav></:nav>" !== st.createElement("nav").cloneNode(!0).outerHTML, Ht.type = "checkbox", Ht.checked = !0, Pt.appendChild(Ht), pt.appendChecked = Ht.checked, Lt.innerHTML = "<textarea>x</textarea>", pt.noCloneChecked = !!Lt.cloneNode(!0).lastChild.defaultValue, Pt.appendChild(Lt), (Ht = st.createElement("input")).setAttribute("type", "radio"), Ht.setAttribute("checked", "checked"), Ht.setAttribute("name", "t"), Lt.appendChild(Ht), pt.checkClone = Lt.cloneNode(!0).cloneNode(!0).lastChild.checked, pt.noCloneEvent = !!Lt.addEventListener, Lt[ft.expando] = 1, pt.attributes = !Lt.getAttribute(ft.expando);
  var Qt = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: pt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td;
  var Gt = /<|&#?\w+;/, Xt = /<tbody/i;
  !function () {
    var t, e, n = st.createElement("div");
    for (t in {
      submit: !0,
      change: !0,
      focusin: !0
    }) e = "on" + t, (pt[t] = e in x) || (n.setAttribute(e, "t"), pt[t] = !1 === n.attributes[e].expando);
    n = null
  }();
  var Jt = /^(?:input|select|textarea)$/i, Zt = /^key/, te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ee = /^(?:focusinfocus|focusoutblur)$/, ne = /^([^.]*)(?:\.(.+)|)/;
  ft.event = {
    global: {},
    add: function (t, e, n, i, s) {
      var r, o, a, l, c, u, d, p, h, f, m, g = ft._data(t);
      if (g) {
        for (n.handler && (n = (l = n).handler, s = l.selector), n.guid || (n.guid = ft.guid++), (o = g.events) || (o = g.events = {}), (u = g.handle) || ((u = g.handle = function (t) {
          return void 0 === ft || t && ft.event.triggered === t.type ? undefined : ft.event.dispatch.apply(u.elem, arguments)
        }).elem = t), a = (e = (e || "").match(Et) || [""]).length; a--;) h = m = (r = ne.exec(e[a]) || [])[1], f = (r[2] || "").split(".").sort(), h && (c = ft.event.special[h] || {}, h = (s ? c.delegateType : c.bindType) || h, c = ft.event.special[h] || {}, d = ft.extend({
          type: h,
          origType: m,
          data: i,
          handler: n,
          guid: n.guid,
          selector: s,
          needsContext: s && ft.expr.match.needsContext.test(s),
          namespace: f.join(".")
        }, l), (p = o[h]) || ((p = o[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, f, u) || (t.addEventListener ? t.addEventListener(h, u, !1) : t.attachEvent && t.attachEvent("on" + h, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), s ? p.splice(p.delegateCount++, 0, d) : p.push(d), ft.event.global[h] = !0);
        t = null
      }
    },
    remove: function (t, e, n, i, s) {
      var r, o, a, l, c, u, d, p, h, f, m, g = ft.hasData(t) && ft._data(t);
      if (g && (u = g.events)) {
        for (c = (e = (e || "").match(Et) || [""]).length; c--;) if (h = m = (a = ne.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
          for (d = ft.event.special[h] || {}, p = u[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) o = p[r], !s && m !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (p.splice(r, 1), o.selector && p.delegateCount--, d.remove && d.remove.call(t, o));
          l && !p.length && (d.teardown && !1 !== d.teardown.call(t, f, g.handle) || ft.removeEvent(t, h, g.handle), delete u[h])
        } else for (h in u) ft.event.remove(t, h + e[c], n, i, !0);
        ft.isEmptyObject(u) && (delete g.handle, ft._removeData(t, "events"))
      }
    },
    trigger: function (t, e, n, i) {
      var s, r, o, a, l, c, u, d = [n || st], p = dt.call(t, "type") ? t.type : t,
        h = dt.call(t, "namespace") ? t.namespace.split(".") : [];
      if (o = c = n = n || st, 3 !== n.nodeType && 8 !== n.nodeType && !ee.test(p + ft.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), r = p.indexOf(":") < 0 && "on" + p, (t = t[ft.expando] ? t : new ft.Event(p, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = n), e = null == e ? [t] : ft.makeArray(e, [t]), l = ft.event.special[p] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, e))) {
        if (!i && !l.noBubble && !ft.isWindow(n)) {
          for (a = l.delegateType || p, ee.test(a + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), c = o;
          c === (n.ownerDocument || st) && d.push(c.defaultView || c.parentWindow || x)
        }
        for (u = 0; (o = d[u++]) && !t.isPropagationStopped();) t.type = 1 < u ? a : l.bindType || p, (s = (ft._data(o, "events") || {})[t.type] && ft._data(o, "handle")) && s.apply(o, e), (s = r && o[r]) && s.apply && Ot(o) && (t.result = s.apply(o, e), !1 === t.result && t.preventDefault());
        if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), e)) && Ot(n) && r && n[p] && !ft.isWindow(n)) {
          (c = n[r]) && (n[r] = null), ft.event.triggered = p;
          try {
            n[p]()
          } catch (f) {
          }
          ft.event.triggered = undefined, c && (n[r] = c)
        }
        return t.result
      }
    },
    dispatch: function (t) {
      t = ft.event.fix(t);
      var e, n, i, s, r, o = [], a = rt.call(arguments), l = (ft._data(this, "events") || {})[t.type] || [],
        c = ft.event.special[t.type] || {};
      if ((a[0] = t).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        for (o = ft.event.handlers.call(this, t, l), e = 0; (s = o[e++]) && !t.isPropagationStopped();) for (t.currentTarget = s.elem, n = 0; (r = s.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, (i = ((ft.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, a)) !== undefined && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, t), t.result
      }
    },
    handlers: function (t, e) {
      var n, i, s, r, o = [], a = e.delegateCount, l = t.target;
      if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
        for (i = [], n = 0; n < a; n++) i[s = (r = e[n]).selector + " "] === undefined && (i[s] = r.needsContext ? -1 < ft(s, this).index(l) : ft.find(s, this, null, [l]).length), i[s] && i.push(r);
        i.length && o.push({elem: l, handlers: i})
      }
      return a < e.length && o.push({elem: this, handlers: e.slice(a)}), o
    },
    fix: function (t) {
      if (t[ft.expando]) return t;
      var e, n, i, s = t.type, r = t, o = this.fixHooks[s];
      for (o || (this.fixHooks[s] = o = te.test(s) ? this.mouseHooks : Zt.test(s) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, t = new ft.Event(r), e = i.length; e--;) t[n = i[e]] = r[n];
      return t.target || (t.target = r.srcElement || st), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, r) : t
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "), filter: function (t, e) {
        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (t, e) {
        var n, i, s, r = e.button, o = e.fromElement;
        return null == t.pageX && null != e.clientX && (s = (i = t.target.ownerDocument || st).documentElement, n = i.body, t.pageX = e.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || r === undefined || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
      }
    },
    special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          if (this !== f() && this.focus) try {
            return this.focus(), !1
          } catch (t) {
          }
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          if (this === f() && this.blur) return this.blur(), !1
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          if (ft.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
        }, _default: function (t) {
          return ft.nodeName(t.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (t) {
          t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
        }
      }
    },
    simulate: function (t, e, n) {
      var i = ft.extend(new ft.Event, n, {type: t, isSimulated: !0});
      ft.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
    }
  }, ft.removeEvent = st.removeEventListener ? function (t, e, n) {
    t.removeEventListener && t.removeEventListener(e, n)
  } : function (t, e, n) {
    var i = "on" + e;
    t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
  }, ft.Event = function (t, e) {
    if (!(this instanceof ft.Event)) return new ft.Event(t, e);
    t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? p : h) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), this[ft.expando] = !0
  }, ft.Event.prototype = {
    constructor: ft.Event,
    isDefaultPrevented: h,
    isPropagationStopped: h,
    isImmediatePropagationStopped: h,
    preventDefault: function () {
      var t = this.originalEvent;
      this.isDefaultPrevented = p, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
    },
    stopPropagation: function () {
      var t = this.originalEvent;
      this.isPropagationStopped = p, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
    },
    stopImmediatePropagation: function () {
      var t = this.originalEvent;
      this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
    }
  }, ft.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (t, r) {
    ft.event.special[t] = {
      delegateType: r, bindType: r, handle: function (t) {
        var e, n = this, i = t.relatedTarget, s = t.handleObj;
        return i && (i === n || ft.contains(n, i)) || (t.type = s.origType, e = s.handler.apply(this, arguments), t.type = r), e
      }
    }
  }), pt.submit || (ft.event.special.submit = {
    setup: function () {
      if (ft.nodeName(this, "form")) return !1;
      ft.event.add(this, "click._submit keypress._submit", function (t) {
        var e = t.target, n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : undefined;
        n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function (t) {
          t._submitBubble = !0
        }), ft._data(n, "submit", !0))
      })
    }, postDispatch: function (t) {
      t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
    }, teardown: function () {
      if (ft.nodeName(this, "form")) return !1;
      ft.event.remove(this, "._submit")
    }
  }), pt.change || (ft.event.special.change = {
    setup: function () {
      if (Jt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (ft.event.add(this, "propertychange._change", function (t) {
        "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
      }), ft.event.add(this, "click._change", function (t) {
        this._justChanged && !t.isTrigger && (this._justChanged = !1), ft.event.simulate("change", this, t)
      })), !1;
      ft.event.add(this, "beforeactivate._change", function (t) {
        var e = t.target;
        Jt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function (t) {
          !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
        }), ft._data(e, "change", !0))
      })
    }, handle: function (t) {
      var e = t.target;
      if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
    }, teardown: function () {
      return ft.event.remove(this, "._change"), !Jt.test(this.nodeName)
    }
  }), pt.focusin || ft.each({focus: "focusin", blur: "focusout"}, function (n, i) {
    var s = function (t) {
      ft.event.simulate(i, t.target, ft.event.fix(t))
    };
    ft.event.special[i] = {
      setup: function () {
        var t = this.ownerDocument || this, e = ft._data(t, i);
        e || t.addEventListener(n, s, !0), ft._data(t, i, (e || 0) + 1)
      }, teardown: function () {
        var t = this.ownerDocument || this, e = ft._data(t, i) - 1;
        e ? ft._data(t, i, e) : (t.removeEventListener(n, s, !0), ft._removeData(t, i))
      }
    }
  }), ft.fn.extend({
    on: function (t, e, n, i) {
      return w(this, t, e, n, i)
    }, one: function (t, e, n, i) {
      return w(this, t, e, n, i, 1)
    }, off: function (t, e, n) {
      var i, s;
      if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = undefined), !1 === n && (n = h), this.each(function () {
        ft.event.remove(this, t, n, e)
      });
      for (s in t) this.off(s, e, t[s]);
      return this
    }, trigger: function (t, e) {
      return this.each(function () {
        ft.event.trigger(t, e, this)
      })
    }, triggerHandler: function (t, e) {
      var n = this[0];
      if (n) return ft.event.trigger(t, e, n, !0)
    }
  });
  var ie = / jQuery\d+="(?:null|\d+)"/g, se = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
    re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, oe = /<script|<style|<link/i,
    ae = /checked\s*(?:[^=]|=\s*.checked.)/i, le = /^true\/(.*)/, ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ue = g(st).appendChild(st.createElement("div"));
  ft.extend({
    htmlPrefilter: function (t) {
      return t.replace(re, "<$1></$2>")
    }, clone: function (t, e, n) {
      var i, s, r, o, a, l = ft.contains(t.ownerDocument, t);
      if (pt.html5Clone || ft.isXMLDoc(t) || !se.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (ue.innerHTML = t.outerHTML, ue.removeChild(r = ue.firstChild)), !(pt.noCloneEvent && pt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t))) for (i = y(r), a = y(t), o = 0; null != (s = a[o]); ++o) i[o] && S(s, i[o]);
      if (e) if (n) for (a = a || y(t), i = i || y(r), o = 0; null != (s = a[o]); o++) C(s, i[o]); else C(t, r);
      return 0 < (i = y(r, "script")).length && v(i, !l && y(t, "script")), i = a = s = null, r
    }, cleanData: function (t, e) {
      for (var n, i, s, r, o = 0, a = ft.expando, l = ft.cache, c = pt.attributes, u = ft.event.special; null != (n = t[o]); o++) if ((e || Ot(n)) && (r = (s = n[a]) && l[s])) {
        if (r.events) for (i in r.events) u[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, r.handle);
        l[s] && (delete l[s], c || "undefined" == typeof n.removeAttribute ? n[a] = undefined : n.removeAttribute(a), it.push(s))
      }
    }
  }), ft.fn.extend({
    domManip: $, detach: function (t) {
      return M(this, t, !0)
    }, remove: function (t) {
      return M(this, t)
    }, text: function (t) {
      return Bt(this, function (t) {
        return t === undefined ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || st).createTextNode(t))
      }, null, t, arguments.length)
    }, append: function () {
      return $(this, arguments, function (t) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, t).appendChild(t)
      })
    }, prepend: function () {
      return $(this, arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = k(this, t);
          e.insertBefore(t, e.firstChild)
        }
      })
    }, before: function () {
      return $(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this)
      })
    }, after: function () {
      return $(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
      })
    }, empty: function () {
      for (var t, e = 0; null != (t = this[e]); e++) {
        for (1 === t.nodeType && ft.cleanData(y(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
        t.options && ft.nodeName(t, "select") && (t.options.length = 0)
      }
      return this
    }, clone: function (t, e) {
      return t = null != t && t, e = null == e ? t : e, this.map(function () {
        return ft.clone(this, t, e)
      })
    }, html: function (t) {
      return Bt(this, function (t) {
        var e = this[0] || {}, n = 0, i = this.length;
        if (t === undefined) return 1 === e.nodeType ? e.innerHTML.replace(ie, "") : undefined;
        if ("string" == typeof t && !oe.test(t) && (pt.htmlSerialize || !se.test(t)) && (pt.leadingWhitespace || !Wt.test(t)) && !Qt[(Yt.exec(t) || ["", ""])[1].toLowerCase()]) {
          t = ft.htmlPrefilter(t);
          try {
            for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (ft.cleanData(y(e, !1)), e.innerHTML = t);
            e = 0
          } catch (s) {
          }
        }
        e && this.empty().append(t)
      }, null, t, arguments.length)
    }, replaceWith: function () {
      var n = [];
      return $(this, arguments, function (t) {
        var e = this.parentNode;
        ft.inArray(this, n) < 0 && (ft.cleanData(y(this)), e && e.replaceChild(t, this))
      }, n)
    }
  }), ft.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (t, o) {
    ft.fn[t] = function (t) {
      for (var e, n = 0, i = [], s = ft(t), r = s.length - 1; n <= r; n++) e = n === r ? this : this.clone(!0), ft(s[n])[o](e), at.apply(i, e.get());
      return this.pushStack(i)
    }
  });
  var de, pe = {HTML: "block", BODY: "block"}, he = /^margin/, fe = new RegExp("^(" + zt + ")(?!px)[a-z%]+$", "i"),
    me = function (t, e, n, i) {
      var s, r, o = {};
      for (r in e) o[r] = t.style[r], t.style[r] = e[r];
      for (r in s = n.apply(t, i || []), e) t.style[r] = o[r];
      return s
    }, ge = st.documentElement;
  !function () {
    function t() {
      var t, e, n = st.documentElement;
      n.appendChild(c), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = r = l = !1, s = a = !0, x.getComputedStyle && (e = x.getComputedStyle(u), i = "1%" !== (e || {}).top, l = "2px" === (e || {}).marginLeft, r = "4px" === (e || {width: "4px"}).width, u.style.marginRight = "50%", s = "4px" === (e || {marginRight: "4px"}).marginRight, (t = u.appendChild(st.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", u.style.width = "1px", a = !parseFloat((x.getComputedStyle(t) || {}).marginRight), u.removeChild(t)), u.style.display = "none", (
        o = 0 === u.getClientRects().length) && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", (t = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), n.removeChild(c)
    }

    var i, s, r, o, a, l, c = st.createElement("div"), u = st.createElement("div");
    u.style && (u.style.cssText = "float:left;opacity:.5", pt.opacity = "0.5" === u.style.opacity, pt.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", pt.clearCloneStyle = "content-box" === u.style.backgroundClip, (c = st.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", c.appendChild(u), pt.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, ft.extend(pt, {
      reliableHiddenOffsets: function () {
        return null == i && t(), o
      }, boxSizingReliable: function () {
        return null == i && t(), r
      }, pixelMarginRight: function () {
        return null == i && t(), s
      }, pixelPosition: function () {
        return null == i && t(), i
      }, reliableMarginRight: function () {
        return null == i && t(), a
      }, reliableMarginLeft: function () {
        return null == i && t(), l
      }
    }))
  }();
  var ye, ve, be = /^(top|right|bottom|left)$/;
  x.getComputedStyle ? (ye = function (t) {
    var e = t.ownerDocument.defaultView;
    return e && e.opener || (e = x), e.getComputedStyle(t)
  }, ve = function (t, e, n) {
    var i, s, r, o, a = t.style;
    return "" !== (o = (n = n || ye(t)) ? n.getPropertyValue(e) || n[e] : undefined) && o !== undefined || ft.contains(t.ownerDocument, t) || (o = ft.style(t, e)), n && !pt.pixelMarginRight() && fe.test(o) && he.test(e) && (i = a.width, s = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = s, a.maxWidth = r), o === undefined ? o : o + ""
  }) : ge.currentStyle && (ye = function (t) {
    return t.currentStyle
  }, ve = function (t, e, n) {
    var i, s, r, o, a = t.style;
    return null == (o = (n = n || ye(t)) ? n[e] : undefined) && a && a[e] && (o = a[e]), fe.test(o) && !be.test(e) && (i = a.left, (r = (s = t.runtimeStyle) && s.left) && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = i, r && (s.left = r)), o === undefined ? o : o + "" || "auto"
  });
  var _e = /alpha\([^)]*\)/i, we = /opacity\s*=\s*([^)]*)/i, ke = /^(none|table(?!-c[ea]).+)/,
    xe = new RegExp("^(" + zt + ")(.*)$", "i"), Te = {position: "absolute", visibility: "hidden", display: "block"},
    De = {letterSpacing: "0", fontWeight: "400"}, Ce = ["Webkit", "O", "Moz", "ms"], Se = st.createElement("div").style;
  ft.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var n = ve(t, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {"float": pt.cssFloat ? "cssFloat" : "styleFloat"},
    style: function (t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var s, r, o, a = ft.camelCase(e), l = t.style;
        if (e = ft.cssProps[a] || (ft.cssProps[a] = O(a) || a), o = ft.cssHooks[e] || ft.cssHooks[a], n === undefined) return o && "get" in o && (s = o.get(t, !1, i)) !== undefined ? s : l[e];
        if ("string" === (r = typeof n) && (s = Ft.exec(n)) && s[1] && (n = d(t, e, s), r = "number"), null != n && n == n && ("number" === r && (n += s && s[3] || (ft.cssNumber[a] ? "" : "px")), pt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && (n = o.set(t, n, i)) === undefined))) try {
          l[e] = n
        } catch (c) {
        }
      }
    },
    css: function (t, e, n, i) {
      var s, r, o, a = ft.camelCase(e);
      return e = ft.cssProps[a] || (ft.cssProps[a] = O(a) || a), (o = ft.cssHooks[e] || ft.cssHooks[a]) && "get" in o && (r = o.get(t, !0, n)), r === undefined && (r = ve(t, e, i)), "normal" === r && e in De && (r = De[e]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
    }
  }), ft.each(["height", "width"], function (t, s) {
    ft.cssHooks[s] = {
      get: function (t, e, n) {
        if (e) return ke.test(ft.css(t, "display")) && 0 === t.offsetWidth ? me(t, Te, function () {
          return P(t, s, n)
        }) : P(t, s, n)
      }, set: function (t, e, n) {
        var i = n && ye(t);
        return N(t, e, n ? L(t, s, n, pt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, i), i) : 0)
      }
    }
  }), pt.opacity || (ft.cssHooks.opacity = {
    get: function (t, e) {
      return we.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
    }, set: function (t, e) {
      var n = t.style, i = t.currentStyle, s = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
        r = i && i.filter || n.filter || "";
      ((n.zoom = 1) <= e || "" === e) && "" === ft.trim(r.replace(_e, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = _e.test(r) ? r.replace(_e, s) : r + " " + s)
    }
  }), ft.cssHooks.marginRight = j(pt.reliableMarginRight, function (t, e) {
    if (e) return me(t, {display: "inline-block"}, ve, [t, "marginRight"])
  }), ft.cssHooks.marginLeft = j(pt.reliableMarginLeft, function (t, e) {
    if (e) return (parseFloat(ve(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - me(t, {marginLeft: 0}, function () {
      return t.getBoundingClientRect().left
    }) : 0)) + "px"
  }), ft.each({margin: "", padding: "", border: "Width"}, function (s, r) {
    ft.cssHooks[s + r] = {
      expand: function (t) {
        for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[s + Rt[e] + r] = i[e] || i[e - 2] || i[0];
        return n
      }
    }, he.test(s) || (ft.cssHooks[s + r].set = N)
  }), ft.fn.extend({
    css: function (t, e) {
      return Bt(this, function (t, e, n) {
        var i, s, r = {}, o = 0;
        if (ft.isArray(e)) {
          for (i = ye(t), s = e.length; o < s; o++) r[e[o]] = ft.css(t, e[o], !1, i);
          return r
        }
        return n !== undefined ? ft.style(t, e, n) : ft.css(t, e)
      }, t, e, 1 < arguments.length)
    }, show: function () {
      return I(this, !0)
    }, hide: function () {
      return I(this)
    }, toggle: function (t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
        qt(this) ? ft(this).show() : ft(this).hide()
      })
    }
  }), (ft.Tween = H).prototype = {
    constructor: H, init: function (t, e, n, i, s, r) {
      this.elem = t, this.prop = n, this.easing = s || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ft.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var t = H.propHooks[this.prop];
      return t && t.get ? t.get(this) : H.propHooks._default.get(this)
    }, run: function (t) {
      var e, n = H.propHooks[this.prop];
      return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
    }
  }, H.prototype.init.prototype = H.prototype, H.propHooks = {
    _default: {
      get: function (t) {
        var e;
        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
      }, set: function (t) {
        ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
      }
    }
  }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
    set: function (t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
    }
  }, ft.easing = {
    linear: function (t) {
      return t
    }, swing: function (t) {
      return .5 - Math.cos(t * Math.PI) / 2
    }, _default: "swing"
  }, ft.fx = H.prototype.init, ft.fx.step = {};
  var $e, Me, Ae, Ee, je, Oe, Ie, Ne = /^(?:toggle|show|hide)$/, Le = /queueHooks$/;
  ft.Animation = ft.extend(U, {
    tweeners: {
      "*": [function (t, e) {
        var n = this.createTween(t, e);
        return d(n.elem, t, Ft.exec(e), n), n
      }]
    }, tweener: function (t, e) {
      ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Et);
      for (var n, i = 0, s = t.length; i < s; i++) n = t[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(e)
    }, prefilters: [q], prefilter: function (t, e) {
      e ? U.prefilters.unshift(t) : U.prefilters.push(t)
    }
  }), ft.speed = function (t, e, n) {
    var i = t && "object" == typeof t ? ft.extend({}, t) : {
      complete: n || !n && e || ft.isFunction(t) && t,
      duration: t,
      easing: n && e || e && !ft.isFunction(e) && e
    };
    return i.duration = ft.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ft.fx.speeds ? ft.fx.speeds[i.duration] : ft.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
    }, i
  }, ft.fn.extend({
    fadeTo: function (t, e, n, i) {
      return this.filter(qt).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
    }, animate: function (e, t, n, i) {
      var s = ft.isEmptyObject(e), r = ft.speed(t, n, i), o = function () {
        var t = U(this, ft.extend({}, e), r);
        (s || ft._data(this, "finish")) && t.stop(!0)
      };
      return o.finish = o, s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
    }, stop: function (s, t, r) {
      var o = function (t) {
        var e = t.stop;
        delete t.stop, e(r)
      };
      return "string" != typeof s && (r = t, t = s, s = undefined), t && !1 !== s && this.queue(s || "fx", []), this.each(function () {
        var t = !0, e = null != s && s + "queueHooks", n = ft.timers, i = ft._data(this);
        if (e) i[e] && i[e].stop && o(i[e]); else for (e in i) i[e] && i[e].stop && Le.test(e) && o(i[e]);
        for (e = n.length; e--;) n[e].elem !== this || null != s && n[e].queue !== s || (n[e].anim.stop(r), t = !1, n.splice(e, 1));
        !t && r || ft.dequeue(this, s)
      })
    }, finish: function (o) {
      return !1 !== o && (o = o || "fx"), this.each(function () {
        var t, e = ft._data(this), n = e[o + "queue"], i = e[o + "queueHooks"], s = ft.timers, r = n ? n.length : 0;
        for (e.finish = !0, ft.queue(this, o, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === o && (s[t].anim.stop(!0), s.splice(t, 1));
        for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
        delete e.finish
      })
    }
  }), ft.each(["toggle", "show", "hide"], function (t, i) {
    var s = ft.fn[i];
    ft.fn[i] = function (t, e, n) {
      return null == t || "boolean" == typeof t ? s.apply(this, arguments) : this.animate(F(i, !0), t, e, n)
    }
  }), ft.each({
    slideDown: F("show"),
    slideUp: F("hide"),
    slideToggle: F("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (t, i) {
    ft.fn[t] = function (t, e, n) {
      return this.animate(i, t, e, n)
    }
  }), ft.timers = [], ft.fx.tick = function () {
    var t, e = ft.timers, n = 0;
    for ($e = ft.now(); n < e.length; n++) (t = e[n])() || e[n] !== t || e.splice(n--, 1);
    e.length || ft.fx.stop(), $e = undefined
  }, ft.fx.timer = function (t) {
    ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
  }, ft.fx.interval = 13, ft.fx.start = function () {
    Me || (Me = x.setInterval(ft.fx.tick, ft.fx.interval))
  }, ft.fx.stop = function () {
    x.clearInterval(Me), Me = null
  }, ft.fx.speeds = {slow: 600, fast: 200, _default: 400}, ft.fn.delay = function (i, t) {
    return i = ft.fx && ft.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
      var n = x.setTimeout(t, i);
      e.stop = function () {
        x.clearTimeout(n)
      }
    })
  }, Ee = st.createElement("input"), je = st.createElement("div"), Oe = st.createElement("select"), Ie = Oe.appendChild(st.createElement("option")), (je = st.createElement("div")).setAttribute("className", "t"), je.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", Ae = je.getElementsByTagName("a")[0], Ee.setAttribute("type", "checkbox"), je.appendChild(Ee), (Ae = je.getElementsByTagName("a")[0]).style.cssText = "top:1px", pt.getSetAttribute = "t" !== je.className, pt.style = /top/.test(Ae.getAttribute("style")), pt.hrefNormalized = "/a" === Ae.getAttribute("href"), pt.checkOn = !!Ee.value, pt.optSelected = Ie.selected, pt.enctype = !!st.createElement("form").enctype, Oe.disabled = !0, pt.optDisabled = !Ie.disabled, (Ee = st.createElement("input")).setAttribute("value", ""), pt.input = "" === Ee.getAttribute("value"), Ee.value = "t", Ee.setAttribute("type", "radio"), pt.radioValue = "t" === Ee.value;
  var Pe = /\r/g, He = /[\x20\t\r\n\f]+/g;
  ft.fn.extend({
    val: function (n) {
      var i, t, s, e = this[0];
      return arguments.length ? (s = ft.isFunction(n), this.each(function (t) {
        var e;
        1 === this.nodeType && (null == (e = s ? n.call(this, t, ft(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : ft.isArray(e) && (e = ft.map(e, function (t) {
          return null == t ? "" : t + ""
        })), (i = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, e, "value") !== undefined || (this.value = e))
      })) : e ? (i = ft.valHooks[e.type] || ft.valHooks[e.nodeName.toLowerCase()]) && "get" in i && (t = i.get(e, "value")) !== undefined ? t : "string" == typeof (t = e.value) ? t.replace(Pe, "") : null == t ? "" : t : void 0
    }
  }), ft.extend({
    valHooks: {
      option: {
        get: function (t) {
          var e = ft.find.attr(t, "value");
          return null != e ? e : ft.trim(ft.text(t)).replace(He, " ")
        }
      }, select: {
        get: function (t) {
          for (var e, n, i = t.options, s = t.selectedIndex, r = "select-one" === t.type || s < 0, o = r ? null : [], a = r ? s + 1 : i.length, l = s < 0 ? a : r ? s : 0; l < a; l++) if (((n = i[l]).selected || l === s) && (pt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
            if (e = ft(n).val(), r) return e;
            o.push(e)
          }
          return o
        }, set: function (t, e) {
          for (var n, i, s = t.options, r = ft.makeArray(e), o = s.length; o--;) if (i = s[o], -1 < ft.inArray(ft.valHooks.option.get(i), r)) try {
            i.selected = n = !0
          } catch (_) {
            i.scrollHeight
          } else i.selected = !1;
          return n || (t.selectedIndex = -1), s
        }
      }
    }
  }), ft.each(["radio", "checkbox"], function () {
    ft.valHooks[this] = {
      set: function (t, e) {
        if (ft.isArray(e)) return t.checked = -1 < ft.inArray(ft(t).val(), e)
      }
    }, pt.checkOn || (ft.valHooks[this].get = function (t) {
      return null === t.getAttribute("value") ? "on" : t.value
    })
  });
  var ze, Fe, Re = ft.expr.attrHandle, qe = /^(?:checked|selected)$/i, Be = pt.getSetAttribute, Ue = pt.input;
  ft.fn.extend({
    attr: function (t, e) {
      return Bt(this, ft.attr, t, e, 1 < arguments.length)
    }, removeAttr: function (t) {
      return this.each(function () {
        ft.removeAttr(this, t)
      })
    }
  }), ft.extend({
    attr: function (t, e, n) {
      var i, s, r = t.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === r && ft.isXMLDoc(t) || (e = e.toLowerCase(), s = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? Fe : ze)), n !== undefined ? null === n ? void ft.removeAttr(t, e) : s && "set" in s && (i = s.set(t, n, e)) !== undefined ? i : (t.setAttribute(e, n + ""), n) : s && "get" in s && null !== (i = s.get(t, e)) ? i : null == (i = ft.find.attr(t, e)) ? undefined : i)
    }, attrHooks: {
      type: {
        set: function (t, e) {
          if (!pt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
            var n = t.value;
            return t.setAttribute("type", e), n && (t.value = n), e
          }
        }
      }
    }, removeAttr: function (t, e) {
      var n, i, s = 0, r = e && e.match(Et);
      if (r && 1 === t.nodeType) for (; n = r[s++];) i = ft.propFix[n] || n, ft.expr.match.bool.test(n) ? Ue && Be || !qe.test(n) ? t[i] = !1 : t[ft.camelCase("default-" + n)] = t[i] = !1 : ft.attr(t, n, ""), t.removeAttribute(Be ? n : i)
    }
  }), Fe = {
    set: function (t, e, n) {
      return !1 === e ? ft.removeAttr(t, n) : Ue && Be || !qe.test(n) ? t.setAttribute(!Be && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0, n
    }
  }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function (t, e) {
    var r = Re[e] || ft.find.attr;
    Ue && Be || !qe.test(e) ? Re[e] = function (t, e, n) {
      var i, s;
      return n || (s = Re[e], Re[e] = i, i = null != r(t, e, n) ? e.toLowerCase() : null, Re[e] = s), i
    } : Re[e] = function (t, e, n) {
      if (!n) return t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
    }
  }), Ue && Be || (ft.attrHooks.value = {
    set: function (t, e, n) {
      if (!ft.nodeName(t, "input")) return ze && ze.set(t, e, n);
      t.defaultValue = e
    }
  }), Be || (ze = {
    set: function (t, e, n) {
      var i = t.getAttributeNode(n);
      if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
    }
  }, Re.id = Re.name = Re.coords = function (t, e, n) {
    var i;
    if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
  }, ft.valHooks.button = {
    get: function (t, e) {
      var n = t.getAttributeNode(e);
      if (n && n.specified) return n.value
    }, set: ze.set
  }, ft.attrHooks.contenteditable = {
    set: function (t, e, n) {
      ze.set(t, "" !== e && e, n)
    }
  }, ft.each(["width", "height"], function (t, n) {
    ft.attrHooks[n] = {
      set: function (t, e) {
        if ("" === e) return t.setAttribute(n, "auto"), e
      }
    }
  })), pt.style || (ft.attrHooks.style = {
    get: function (t) {
      return t.style.cssText || undefined
    }, set: function (t, e) {
      return t.style.cssText = e + ""
    }
  });
  var Ye = /^(?:input|select|textarea|button|object)$/i, Ke = /^(?:a|area)$/i;
  ft.fn.extend({
    prop: function (t, e) {
      return Bt(this, ft.prop, t, e, 1 < arguments.length)
    }, removeProp: function (e) {
      return e = ft.propFix[e] || e, this.each(function () {
        try {
          this[e] = undefined, delete this[e]
        } catch (t) {
        }
      })
    }
  }), ft.extend({
    prop: function (t, e, n) {
      var i, s, r = t.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, s = ft.propHooks[e]), n !== undefined ? s && "set" in s && (i = s.set(t, n, e)) !== undefined ? i : t[e] = n : s && "get" in s && null !== (i = s.get(t, e)) ? i : t[e]
    }, propHooks: {
      tabIndex: {
        get: function (t) {
          var e = ft.find.attr(t, "tabindex");
          return e ? parseInt(e, 10) : Ye.test(t.nodeName) || Ke.test(t.nodeName) && t.href ? 0 : -1
        }
      }
    }, propFix: {"for": "htmlFor", "class": "className"}
  }), pt.hrefNormalized || ft.each(["href", "src"], function (t, e) {
    ft.propHooks[e] = {
      get: function (t) {
        return t.getAttribute(e, 4)
      }
    }
  }), pt.optSelected || (ft.propHooks.selected = {
    get: function (t) {
      var e = t.parentNode;
      return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
    }, set: function (t) {
      var e = t.parentNode;
      e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
    }
  }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    ft.propFix[this.toLowerCase()] = this
  }), pt.enctype || (ft.propFix.enctype = "encoding");
  var We = /[\t\r\n\f]/g;
  ft.fn.extend({
    addClass: function (e) {
      var t, n, i, s, r, o, a, l = 0;
      if (ft.isFunction(e)) return this.each(function (t) {
        ft(this).addClass(e.call(this, t, Y(this)))
      });
      if ("string" == typeof e && e) for (t = e.match(Et) || []; n = this[l++];) if (s = Y(n), i = 1 === n.nodeType && (" " + s + " ").replace(We, " ")) {
        for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
        s !== (a = ft.trim(i)) && ft.attr(n, "class", a)
      }
      return this
    }, removeClass: function (e) {
      var t, n, i, s, r, o, a, l = 0;
      if (ft.isFunction(e)) return this.each(function (t) {
        ft(this).removeClass(e.call(this, t, Y(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e) for (t = e.match(Et) || []; n = this[l++];) if (s = Y(n), i = 1 === n.nodeType && (" " + s + " ").replace(We, " ")) {
        for (o = 0; r = t[o++];) for (; -1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
        s !== (a = ft.trim(i)) && ft.attr(n, "class", a)
      }
      return this
    }, toggleClass: function (s, e) {
      var r = typeof s;
      return "boolean" == typeof e && "string" === r ? e ? this.addClass(s) : this.removeClass(s) : ft.isFunction(s) ? this.each(function (t) {
        ft(this).toggleClass(s.call(this, t, Y(this), e), e)
      }) : this.each(function () {
        var t, e, n, i;
        if ("string" === r) for (e = 0, n = ft(this), i = s.match(Et) || []; t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t); else s !== undefined && "boolean" !== r || ((t = Y(this)) && ft._data(this, "__className__", t), ft.attr(this, "class", t || !1 === s ? "" : ft._data(this, "__className__") || ""))
      })
    }, hasClass: function (t) {
      var e, n, i = 0;
      for (e = " " + t + " "; n = this[i++];) if (1 === n.nodeType && -1 < (" " + Y(n) + " ").replace(We, " ").indexOf(e)) return !0;
      return !1
    }
  }), ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, n) {
    ft.fn[n] = function (t, e) {
      return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
    }
  }), ft.fn.extend({
    hover: function (t, e) {
      return this.mouseenter(t).mouseleave(e || t)
    }
  });
  var Ve = x.location, Qe = ft.now(), Ge = /\?/,
    Xe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  ft.parseJSON = function (t) {
    if (x.JSON && x.JSON.parse) return x.JSON.parse(t + "");
    var s, r = null, e = ft.trim(t + "");
    return e && !ft.trim(e.replace(Xe, function (t, e, n, i) {
      return s && e && (r = 0), 0 === r ? t : (s = n || e, r += !i - !n, "")
    })) ? Function("return " + e)() : ft.error("Invalid JSON: " + t)
  }, ft.parseXML = function (t) {
    var e;
    if (!t || "string" != typeof t) return null;
    try {
      x.DOMParser ? e = (new x.DOMParser).parseFromString(t, "text/xml") : ((e = new x.ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
    } catch (n) {
      e = undefined
    }
    return e && e.documentElement && !e.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + t), e
  };
  var Je = /#.*$/, Ze = /([?&])_=[^&]*/, tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    en = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, nn = /^(?:GET|HEAD)$/, sn = /^\/\//,
    rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, on = {}, an = {}, ln = "*/".concat("*"),
    cn = Ve.href, un = rn.exec(cn.toLowerCase()) || [];
  ft.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cn,
      type: "GET",
      isLocal: en.test(un[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ln,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": ft.parseJSON, "text xml": ft.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (t, e) {
      return e ? V(V(t, ft.ajaxSettings), e) : V(ft.ajaxSettings, t)
    },
    ajaxPrefilter: K(on),
    ajaxTransport: K(an),
    ajax: function (t, e) {
      function n(t, e, n, i) {
        var s, r, o, a, l, c = e;
        2 !== w && (w = 2, p && x.clearTimeout(p), f = undefined, d = i || "", k.readyState = 0 < t ? 4 : 0, s = 200 <= t && t < 300 || 304 === t, n && (a = Q(m, k, n)), a = G(m, a, k, s), s ? (m.ifModified && ((l = k.getResponseHeader("Last-Modified")) && (ft.lastModified[u] = l), (l = k.getResponseHeader("etag")) && (ft.etag[u] = l)), 204 === t || "HEAD" === m.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = a.state, r = a.data, s = !(o = a.error))) : (o = c, !t && c || (c = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (e || c) + "", s ? v.resolveWith(g, [r, c, k]) : v.rejectWith(g, [k, c, o]), k.statusCode(_), _ = undefined, h && y.trigger(s ? "ajaxSuccess" : "ajaxError", [k, m, s ? r : o]), b.fireWith(g, [k, c]), h && (y.trigger("ajaxComplete", [k, m]), --ft.active || ft.event.trigger("ajaxStop")))
      }

      "object" == typeof t && (e = t, t = undefined), e = e || {};
      var i, s, u, d, p, h, f, r, m = ft.ajaxSetup({}, e), g = m.context || m,
        y = m.context && (g.nodeType || g.jquery) ? ft(g) : ft.event, v = ft.Deferred(),
        b = ft.Callbacks("once memory"), _ = m.statusCode || {}, o = {}, a = {}, w = 0, l = "canceled", k = {
          readyState: 0, getResponseHeader: function (t) {
            var e;
            if (2 === w) {
              if (!r) for (r = {}; e = tn.exec(d);) r[e[1].toLowerCase()] = e[2];
              e = r[t.toLowerCase()]
            }
            return null == e ? null : e
          }, getAllResponseHeaders: function () {
            return 2 === w ? d : null
          }, setRequestHeader: function (t, e) {
            var n = t.toLowerCase();
            return w || (t = a[n] = a[n] || t, o[t] = e), this
          }, overrideMimeType: function (t) {
            return w || (m.mimeType = t), this
          }, statusCode: function (t) {
            var e;
            if (t) if (w < 2) for (e in t) _[e] = [_[e], t[e]]; else k.always(t[k.status]);
            return this
          }, abort: function (t) {
            var e = t || l;
            return f && f.abort(e), n(0, e), this
          }
        };
      if (v.promise(k).complete = b.add, k.success = k.done, k.error = k.fail, m.url = ((t || m.url || cn) + "").replace(Je, "").replace(sn, un[1] + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = ft.trim(m.dataType || "*").toLowerCase().match(Et) || [""], null == m.crossDomain && (i = rn.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === un[1] && i[2] === un[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (un[3] || ("http:" === un[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = ft.param(m.data, m.traditional)), W(on, m, e, k), 2 === w) return k;
      for (s in (h = ft.event && m.global) && 0 == ft.active++ && ft.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !nn.test(m.type), u = m.url, m.hasContent || (m.data && (u = m.url += (Ge.test(u) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Ze.test(u) ? u.replace(Ze, "$1_=" + Qe++) : u + (Ge.test(u) ? "&" : "?") + "_=" + Qe++)), m.ifModified && (ft.lastModified[u] && k.setRequestHeader("If-Modified-Since", ft.lastModified[u]), ft.etag[u] && k.setRequestHeader("If-None-Match", ft.etag[u])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && k.setRequestHeader("Content-Type", m.contentType), k.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ln + "; q=0.01" : "") : m.accepts["*"]), m.headers) k.setRequestHeader(s, m.headers[s]);
      if (m.beforeSend && (!1 === m.beforeSend.call(g, k, m) || 2 === w)) return k.abort();
      for (s in l = "abort", {success: 1, error: 1, complete: 1}) k[s](m[s]);
      if (f = W(an, m, e, k)) {
        if (k.readyState = 1, h && y.trigger("ajaxSend", [k, m]), 2 === w) return k;
        m.async && 0 < m.timeout && (p = x.setTimeout(function () {
          k.abort("timeout")
        }, m.timeout));
        try {
          w = 1, f.send(o, n)
        } catch (c) {
          if (!(w < 2)) throw c;
          n(-1, c)
        }
      } else n(-1, "No Transport");
      return k
    },
    getJSON: function (t, e, n) {
      return ft.get(t, e, n, "json")
    },
    getScript: function (t, e) {
      return ft.get(t, undefined, e, "script")
    }
  }), ft.each(["get", "post"], function (t, s) {
    ft[s] = function (t, e, n, i) {
      return ft.isFunction(e) && (i = i || n, n = e, e = undefined), ft.ajax(ft.extend({
        url: t,
        type: s,
        dataType: i,
        data: e,
        success: n
      }, ft.isPlainObject(t) && t))
    }
  }), ft._evalUrl = function (t) {
    return ft.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
  }, ft.fn.extend({
    wrapAll: function (e) {
      if (ft.isFunction(e)) return this.each(function (t) {
        ft(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = ft(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
          return t
        }).append(this)
      }
      return this
    }, wrapInner: function (n) {
      return ft.isFunction(n) ? this.each(function (t) {
        ft(this).wrapInner(n.call(this, t))
      }) : this.each(function () {
        var t = ft(this), e = t.contents();
        e.length ? e.wrapAll(n) : t.append(n)
      })
    }, wrap: function (e) {
      var n = ft.isFunction(e);
      return this.each(function (t) {
        ft(this).wrapAll(n ? e.call(this, t) : e)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
      }).end()
    }
  }), ft.expr.filters.hidden = function (t) {
    return pt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : J(t)
  }, ft.expr.filters.visible = function (t) {
    return !ft.expr.filters.hidden(t)
  };
  var dn = /%20/g, pn = /\[\]$/, hn = /\r?\n/g, fn = /^(?:submit|button|image|reset|file)$/i,
    mn = /^(?:input|select|textarea|keygen)/i;
  ft.param = function (t, e) {
    var n, i = [], s = function (t, e) {
      e = ft.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
    };
    if (e === undefined && (e = ft.ajaxSettings && ft.ajaxSettings.traditional), ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function () {
      s(this.name, this.value)
    }); else for (n in t) Z(n, t[n], e, s);
    return i.join("&").replace(dn, "+")
  }, ft.fn.extend({
    serialize: function () {
      return ft.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var t = ft.prop(this, "elements");
        return t ? ft.makeArray(t) : this
      }).filter(function () {
        var t = this.type;
        return this.name && !ft(this).is(":disabled") && mn.test(this.nodeName) && !fn.test(t) && (this.checked || !Ut.test(t))
      }).map(function (t, e) {
        var n = ft(this).val();
        return null == n ? null : ft.isArray(n) ? ft.map(n, function (t) {
          return {name: e.name, value: t.replace(hn, "\r\n")}
        }) : {name: e.name, value: n.replace(hn, "\r\n")}
      }).get()
    }
  }), ft.ajaxSettings.xhr = x.ActiveXObject !== undefined ? function () {
    return this.isLocal ? et() : 8 < st.documentMode ? tt() : /^(get|post|head|put|delete|options)$/i.test(this.type) && tt() || et()
  } : tt;
  var gn = 0, yn = {}, vn = ft.ajaxSettings.xhr();
  x.attachEvent && x.attachEvent("onunload", function () {
    for (var t in yn) yn[t](undefined, !0)
  }), pt.cors = !!vn && "withCredentials" in vn, (vn = pt.ajax = !!vn) && ft.ajaxTransport(function (c) {
    var u;
    if (!c.crossDomain || pt.cors) return {
      send: function (t, o) {
        var e, a = c.xhr(), l = ++gn;
        if (a.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields) for (e in c.xhrFields) a[e] = c.xhrFields[e];
        for (e in c.mimeType && a.overrideMimeType && a.overrideMimeType(c.mimeType), c.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) t[e] !== undefined && a.setRequestHeader(e, t[e] + "");
        a.send(c.hasContent && c.data || null), u = function (t, e) {
          var n, i, s;
          if (u && (e || 4 === a.readyState)) if (delete yn[l], u = undefined, a.onreadystatechange = ft.noop, e) 4 !== a.readyState && a.abort(); else {
            s = {}, n = a.status, "string" == typeof a.responseText && (s.text = a.responseText);
            try {
              i = a.statusText
            } catch (r) {
              i = ""
            }
            n || !c.isLocal || c.crossDomain ? 1223 === n && (n = 204) : n = s.text ? 200 : 404
          }
          s && o(n, i, s, a.getAllResponseHeaders())
        }, c.async ? 4 === a.readyState ? x.setTimeout(u) : a.onreadystatechange = yn[l] = u : u()
      }, abort: function () {
        u && u(undefined, !0)
      }
    }
  }), ft.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {
      "text script": function (t) {
        return ft.globalEval(t), t
      }
    }
  }), ft.ajaxPrefilter("script", function (t) {
    t.cache === undefined && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
  }), ft.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var i, s = st.head || ft("head")[0] || st.documentElement;
      return {
        send: function (t, n) {
          (i = st.createElement("script")).async = !0, e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function (t, e) {
            (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || n(200, "success"))
          }, s.insertBefore(i, s.firstChild)
        }, abort: function () {
          i && i.onload(undefined, !0)
        }
      }
    }
  });
  var bn = [], _n = /(=)\?(?=&|$)|\?\?/;
  ft.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var t = bn.pop() || ft.expando + "_" + Qe++;
      return this[t] = !0, t
    }
  }), ft.ajaxPrefilter("json jsonp", function (t, e, n) {
    var i, s, r,
      o = !1 !== t.jsonp && (_n.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && _n.test(t.data) && "data");
    if (o || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = ft.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(_n, "$1" + i) : !1 !== t.jsonp && (t.url += (Ge.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return r || ft.error(i + " was not called"), r[0]
    }, t.dataTypes[0] = "json", s = x[i], x[i] = function () {
      r = arguments
    }, n.always(function () {
      s === undefined ? ft(x).removeProp(i) : x[i] = s, t[i] && (t.jsonpCallback = e.jsonpCallback, bn.push(i)), r && ft.isFunction(s) && s(r[0]), r = s = undefined
    }), "script"
  }), ft.parseHTML = function (t, e, n) {
    if (!t || "string" != typeof t) return null;
    "boolean" == typeof e && (n = e, e = !1), e = e || st;
    var i = xt.exec(t), s = !n && [];
    return i ? [e.createElement(i[1])] : (i = m([t], e, s), s && s.length && ft(s).remove(), ft.merge([], i.childNodes))
  };
  var wn = ft.fn.load;
  ft.fn.load = function (t, e, n) {
    if ("string" != typeof t && wn) return wn.apply(this, arguments);
    var i, s, r, o = this, a = t.indexOf(" ");
    return -1 < a && (i = ft.trim(t.slice(a, t.length)), t = t.slice(0, a)), ft.isFunction(e) ? (n = e, e = undefined) : e && "object" == typeof e && (s = "POST"), 0 < o.length && ft.ajax({
      url: t,
      type: s || "GET",
      dataType: "html",
      data: e
    }).done(function (t) {
      r = arguments, o.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
    }).always(n && function (t, e) {
      o.each(function () {
        n.apply(this, r || [t.responseText, e, t])
      })
    }), this
  }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
    ft.fn[e] = function (t) {
      return this.on(e, t)
    }
  }), ft.expr.filters.animated = function (e) {
    return ft.grep(ft.timers, function (t) {
      return e === t.elem
    }).length
  }, ft.offset = {
    setOffset: function (t, e, n) {
      var i, s, r, o, a, l, c = ft.css(t, "position"), u = ft(t), d = {};
      "static" === c && (t.style.position = "relative"), a = u.offset(), r = ft.css(t, "top"), l = ft.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < ft.inArray("auto", [r, l]) ? (o = (i = u.position()).top, s = i.left) : (o = parseFloat(r) || 0, s = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
    }
  }, ft.fn.extend({
    offset: function (e) {
      if (arguments.length) return e === undefined ? this : this.each(function (t) {
        ft.offset.setOffset(this, e, t)
      });
      var t, n, i = {top: 0, left: 0}, s = this[0], r = s && s.ownerDocument;
      return r ? (t = r.documentElement, ft.contains(t, s) ? ("undefined" != typeof s.getBoundingClientRect && (i = s.getBoundingClientRect()), n = nt(r), {
        top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }) : i) : void 0
    }, position: function () {
      if (this[0]) {
        var t, e, n = {top: 0, left: 0}, i = this[0];
        return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (n = t.offset()), n.top += ft.css(t[0], "borderTopWidth", !0), n.left += ft.css(t[0], "borderLeftWidth", !0)), {
          top: e.top - n.top - ft.css(i, "marginTop", !0),
          left: e.left - n.left - ft.css(i, "marginLeft", !0)
        }
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position");) t = t.offsetParent;
        return t || ge
      })
    }
  }), ft.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, s) {
    var r = /Y/.test(s);
    ft.fn[e] = function (t) {
      return Bt(this, function (t, e, n) {
        var i = nt(t);
        if (n === undefined) return i ? s in i ? i[s] : i.document.documentElement[e] : t[e];
        i ? i.scrollTo(r ? ft(i).scrollLeft() : n, r ? n : ft(i).scrollTop()) : t[e] = n
      }, e, t, arguments.length, null)
    }
  }), ft.each(["top", "left"], function (t, n) {
    ft.cssHooks[n] = j(pt.pixelPosition, function (t, e) {
      if (e) return e = ve(t, n), fe.test(e) ? ft(t).position()[n] + "px" : e
    })
  }), ft.each({Height: "height", Width: "width"}, function (r, o) {
    ft.each({padding: "inner" + r, content: o, "": "outer" + r}, function (i, t) {
      ft.fn[t] = function (t, e) {
        var n = arguments.length && (i || "boolean" != typeof t), s = i || (!0 === t || !0 === e ? "margin" : "border");
        return Bt(this, function (t, e, n) {
          var i;
          return ft.isWindow(t) ? t.document.documentElement["client" + r] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + r], i["scroll" + r], t.body["offset" + r], i["offset" + r], i["client" + r])) : n === undefined ? ft.css(t, e, s) : ft.style(t, e, n, s)
        }, o, n ? t : undefined, n, null)
      }
    })
  }), ft.fn.extend({
    bind: function (t, e, n) {
      return this.on(t, null, e, n)
    }, unbind: function (t, e) {
      return this.off(t, null, e)
    }, delegate: function (t, e, n, i) {
      return this.on(e, t, n, i)
    }, undelegate: function (t, e, n) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
    }
  }), ft.fn.size = function () {
    return this.length
  }, ft.fn.andSelf = ft.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ft
  });
  var kn = x.jQuery, xn = x.$;
  return ft.noConflict = function (t) {
    return x.$ === ft && (x.$ = xn), t && x.jQuery === ft && (x.jQuery = kn), ft
  }, t || (x.jQuery = x.$ = ft), ft
}), function (u, l) {
  "use strict";
  var c;
  u.rails !== l && u.error("jquery-ujs has already been loaded!");
  var t = u(document);
  u.rails = c = {
    linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
    buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
    inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
    formSubmitSelector: "form",
    formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
    disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
    enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
    requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
    fileInputSelector: "input[name][type=file]:not([disabled])",
    linkDisableSelector: "a[data-disable-with], a[data-disable]",
    buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
    csrfToken: function () {
      return u("meta[name=csrf-token]").attr("content")
    },
    csrfParam: function () {
      return u("meta[name=csrf-param]").attr("content")
    },
    CSRFProtection: function (t) {
      var e = c.csrfToken();
      e && t.setRequestHeader("X-CSRF-Token", e)
    },
    refreshCSRFTokens: function () {
      u('form input[name="' + c.csrfParam() + '"]').val(c.csrfToken())
    },
    fire: function (t, e, n) {
      var i = u.Event(e);
      return t.trigger(i, n), !1 !== i.result
    },
    confirm: function (t) {
      return confirm(t)
    },
    ajax: function (t) {
      return u.ajax(t)
    },
    href: function (t) {
      return t[0].href
    },
    isRemote: function (t) {
      return t.data("remote") !== l && !1 !== t.data("remote")
    },
    handleRemote: function (i) {
      var t, e, n, s, r, o;
      if (c.fire(i, "ajax:before")) {
        if (s = i.data("with-credentials") || null, r = i.data("type") || u.ajaxSettings && u.ajaxSettings.dataType, i.is("form")) {
          t = i.data("ujs:submit-button-formmethod") || i.attr("method"), e = i.data("ujs:submit-button-formaction") || i.attr("action"), n = u(i[0]).serializeArray();
          var a = i.data("ujs:submit-button");
          a && (n.push(a), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
        } else i.is(c.inputChangeSelector) ? (t = i.data("method"), e = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : i.is(c.buttonClickSelector) ? (t = i.data("method") || "get", e = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : (t = i.data("method"), e = c.href(i), n = i.data("params") || null);
        return o = {
          type: t || "GET", data: n, dataType: r, beforeSend: function (t, e) {
            if (e.dataType === l && t.setRequestHeader("accept", "*/*;q=0.5, " + e.accepts.script), !c.fire(i, "ajax:beforeSend", [t, e])) return !1;
            i.trigger("ajax:send", t)
          }, success: function (t, e, n) {
            i.trigger("ajax:success", [t, e, n])
          }, complete: function (t, e) {
            i.trigger("ajax:complete", [t, e])
          }, error: function (t, e, n) {
            i.trigger("ajax:error", [t, e, n])
          }, crossDomain: c.isCrossDomain(e)
        }, s && (o.xhrFields = {withCredentials: s}), e && (o.url = e), c.ajax(o)
      }
      return !1
    },
    isCrossDomain: function (t) {
      var e = document.createElement("a");
      e.href = location.href;
      var n = document.createElement("a");
      try {
        return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
      } catch (i) {
        return !0
      }
    },
    handleMethod: function (t) {
      var e = c.href(t), n = t.data("method"), i = t.attr("target"), s = c.csrfToken(), r = c.csrfParam(),
        o = u('<form method="post" action="' + e + '"></form>'),
        a = '<input name="_method" value="' + n + '" type="hidden" />';
      r === l || s === l || c.isCrossDomain(e) || (a += '<input name="' + r + '" value="' + s + '" type="hidden" />'), i && o.attr("target", i), o.hide().append(a).appendTo("body"), o.submit()
    },
    formElements: function (t, e) {
      return t.is("form") ? u(t[0].elements).filter(e) : t.find(e)
    },
    disableFormElements: function (t) {
      c.formElements(t, c.disableSelector).each(function () {
        c.disableFormElement(u(this))
      })
    },
    disableFormElement: function (t) {
      var e, n;
      e = t.is("button") ? "html" : "val", (n = t.data("disable-with")) !== l && (t.data("ujs:enable-with", t[e]()), t[e](n)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
    },
    enableFormElements: function (t) {
      c.formElements(t, c.enableSelector).each(function () {
        c.enableFormElement(u(this))
      })
    },
    enableFormElement: function (t) {
      var e = t.is("button") ? "html" : "val";
      t.data("ujs:enable-with") !== l && (t[e](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
    },
    allowAction: function (t) {
      var e, n = t.data("confirm"), i = !1;
      if (!n) return !0;
      if (c.fire(t, "confirm")) {
        try {
          i = c.confirm(n)
        } catch (s) {
          (console.error || console.log).call(console, s.stack || s)
        }
        e = c.fire(t, "confirm:complete", [i])
      }
      return i && e
    },
    blankInputs: function (t, e, n) {
      var i, s, r, o = u(), a = e || "input,textarea", l = t.find(a), c = {};
      return l.each(function () {
        (i = u(this)).is("input[type=radio]") ? (r = i.attr("name"), c[r] || (0 === t.find('input[type=radio]:checked[name="' + r + '"]').length && (s = t.find('input[type=radio][name="' + r + '"]'), o = o.add(s)), c[r] = r)) : (i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === n && (o = o.add(i))
      }), !!o.length && o
    },
    nonBlankInputs: function (t, e) {
      return c.blankInputs(t, e, !0)
    },
    stopEverything: function (t) {
      return u(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
    },
    disableElement: function (t) {
      var e = t.data("disable-with");
      e !== l && (t.data("ujs:enable-with", t.html()), t.html(e)), t.bind("click.railsDisable", function (t) {
        return c.stopEverything(t)
      }), t.data("ujs:disabled", !0)
    },
    enableElement: function (t) {
      t.data("ujs:enable-with") !== l && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
    }
  }, c.fire(t, "rails:attachBindings") && (u.ajaxPrefilter(function (t, e, n) {
    t.crossDomain || c.CSRFProtection(n)
  }), u(window).on("pageshow.rails", function () {
    u(u.rails.enableSelector).each(function () {
      var t = u(this);
      t.data("ujs:disabled") && u.rails.enableFormElement(t)
    }), u(u.rails.linkDisableSelector).each(function () {
      var t = u(this);
      t.data("ujs:disabled") && u.rails.enableElement(t)
    })
  }), t.on("ajax:complete", c.linkDisableSelector, function () {
    c.enableElement(u(this))
  }), t.on("ajax:complete", c.buttonDisableSelector, function () {
    c.enableFormElement(u(this))
  }), t.on("click.rails", c.linkClickSelector, function (t) {
    var e = u(this), n = e.data("method"), i = e.data("params"), s = t.metaKey || t.ctrlKey;
    if (!c.allowAction(e)) return c.stopEverything(t);
    if (!s && e.is(c.linkDisableSelector) && c.disableElement(e), c.isRemote(e)) {
      if (s && (!n || "GET" === n) && !i) return !0;
      var r = c.handleRemote(e);
      return !1 === r ? c.enableElement(e) : r.fail(function () {
        c.enableElement(e)
      }), !1
    }
    return n ? (c.handleMethod(e), !1) : void 0
  }), t.on("click.rails", c.buttonClickSelector, function (t) {
    var e = u(this);
    if (!c.allowAction(e) || !c.isRemote(e)) return c.stopEverything(t);
    e.is(c.buttonDisableSelector) && c.disableFormElement(e);
    var n = c.handleRemote(e);
    return !1 === n ? c.enableFormElement(e) : n.fail(function () {
      c.enableFormElement(e)
    }), !1
  }), t.on("change.rails", c.inputChangeSelector, function (t) {
    var e = u(this);
    return c.allowAction(e) && c.isRemote(e) ? (c.handleRemote(e), !1) : c.stopEverything(t)
  }), t.on("submit.rails", c.formSubmitSelector, function (t) {
    var e, n, i = u(this), s = c.isRemote(i);
    if (!c.allowAction(i)) return c.stopEverything(t);
    if (i.attr("novalidate") === l) if (i.data("ujs:formnovalidate-button") === l) {
      if ((e = c.blankInputs(i, c.requiredInputSelector, !1)) && c.fire(i, "ajax:aborted:required", [e])) return c.stopEverything(t)
    } else i.data("ujs:formnovalidate-button", l);
    if (s) {
      if (n = c.nonBlankInputs(i, c.fileInputSelector)) {
        setTimeout(function () {
          c.disableFormElements(i)
        }, 13);
        var r = c.fire(i, "ajax:aborted:file", [n]);
        return r || setTimeout(function () {
          c.enableFormElements(i)
        }, 13), r
      }
      return c.handleRemote(i), !1
    }
    setTimeout(function () {
      c.disableFormElements(i)
    }, 13)
  }), t.on("click.rails", c.formInputClickSelector, function (t) {
    var e = u(this);
    if (!c.allowAction(e)) return c.stopEverything(t);
    var n = e.attr("name"), i = n ? {name: n, value: e.val()} : null, s = e.closest("form");
    0 === s.length && (s = u("#" + e.attr("form"))), s.data("ujs:submit-button", i), s.data("ujs:formnovalidate-button", e.attr("formnovalidate")), s.data("ujs:submit-button-formaction", e.attr("formaction")), s.data("ujs:submit-button-formmethod", e.attr("formmethod"))
  }), t.on("ajax:send.rails", c.formSubmitSelector, function (t) {
    this === t.target && c.disableFormElements(u(this))
  }), t.on("ajax:complete.rails", c.formSubmitSelector, function (t) {
    this === t.target && c.enableFormElements(u(this))
  }), u(function () {
    c.refreshCSRFTokens()
  }))
}(jQuery), function () {
  null == window.JST && (window.JST = {}), window.JST["alerts/alert"] = function (t) {
    return function () {
      var t, e, n;
      return e = window.HAML.escape, t = window.HAML.cleanValue, (n = []).push("<div class='" + ["alert", "alert-block", "alert-" + e(t(this.type)) + " js-generated"].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'>\n  <button class='close' type='button' data-dismiss='alert'>&times;</button>"), n.push("  " + t(this.message)), n.push("</div>"), n.join("\n").replace(/\s([\w-]+)='\x93true'/gm, " $1").replace(/\s([\w-]+)='\x93false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
    }.call(window.HAML.context(t))
  }
}.call(this), function () {
  null == window.JST && (window.JST = {}), window.JST["alerts/bip_alert"] = function (t) {
    return function () {
      var t, e, n;
      return e = window.HAML.escape, t = window.HAML.cleanValue, (n = []).push("<div class='" + ["alert", "alert-block", "js-generated", "alert-" + e(t(this.type))].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'>"), n.push("  " + t(this.message)), n.push("</div>"), n.join("\n").replace(/\s([\w-]+)='\x93true'/gm, " $1").replace(/\s([\w-]+)='\x93false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
    }.call(window.HAML.context(t))
  }
}.call(this), function () {
  var l = [].slice;
  window.HAML = function () {
    function e() {
    }

    return e.escape = function (t) {
      return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#47;")
    }, e.cleanValue = function (t) {
      switch (t) {
        case null:
        case void 0:
          return "";
        case!0:
        case!1:
          return "\x93" + t;
        default:
          return t
      }
    }, e.extend = function (t) {
      var e, n, i, s, r, o, a;
      for (s = t, e = 0, i = (o = 2 <= arguments.length ? l.call(arguments, 1) : []).length; e < i; e++) for (n in r = o[e]) a = r[n], s[n] = a;
      return s
    }, e.globals = function () {
      return {}
    }, e.context = function (t) {
      return this.extend({}, e.globals(), t)
    }, e.preserve = function (t) {
      return t.replace(/\n/g, "&#x000A;")
    }, e.findAndPreserve = function (t) {
      var e;
      return e = "textarea,pre".split(",").join("|"), t.replace(/\r/g, "").replace(RegExp("<(" + e + ")>([\\s\\S]*?)<\\/\\1>", "g"), function (t, e, n) {
        return "<" + e + ">" + window.HAML.preserve(n) + "</" + e + ">"
      })
    }, e.surround = function (t, e, n) {
      var i;
      return t + (null != (i = n.call(this)) ? i.replace(/^\s+|\s+$/g, "") : void 0) + e
    }, e.succeed = function (t, e) {
      var n;
      return (null != (n = e.call(this)) ? n.replace(/\s+$/g, "") : void 0) + t
    }, e.precede = function (t, e) {
      var n;
      return t + (null != (n = e.call(this)) ? n.replace(/^\s+/g, "") : void 0)
    }, e.reference = function (t, e) {
      var n, i, s;
      if (i = e ? e + "_" : "", "function" == typeof t.hamlObjectRef ? i += t.hamlObjectRef() : i += ((null != (s = t.constructor) ? s.name : void 0) || "object").replace(/\W+/g, "_").replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase(), n = "function" == typeof t.to_key ? t.to_key() : "function" == typeof t.id ? t.id() : t.id ? t.id : t) return "class='" + i + "'" + " id='" + i + "_" + n + "'"
    }, e
  }()
}.call(this), function () {
  window.HAML.globals = function () {
    return {
      value_or_na_array: function (t) {
        return this.value_or_na(t.map(function (t) {
          return String(t)
        }).join(", "))
      }, value_or_na: function (t, e) {
        return null == e && (e = !1), null != t ? "boolean" == typeof t ? t ? "Yes" : "No" : "string" == typeof t ? t || this.notAvailable() : t : e ? this.none() : this.notAvailable()
      }, notAvailable: function () {
        return "N/A"
      }, none: function () {
        return "--"
      }
    }
  }
}.call(this), function () {
}.call(this), new function (t) {
  var e = t.separator || "&", u = !1 !== t.spaces, n = (t.suffix, !1 !== t.prefix ? !0 === t.hash ? "#" : "?" : ""),
    s = !1 !== t.numbers;
  jQuery.query = new function () {
    var a = function (t, e) {
      return t != undefined && null !== t && (!e || t.constructor == e)
    }, l = function (t) {
      for (var e, n = /\[([^[]*)\]/g, i = /^([^[]+)(\[.*\])?$/.exec(t), s = i[1], r = []; e = n.exec(i[2]);) r.push(e[1]);
      return [s, r]
    }, c = function (t, e, n) {
      var i = e.shift();
      if ("object" != typeof t && (t = null), "" === i) if (t || (t = []), a(t, Array)) t.push(0 == e.length ? n : c(null, e.slice(0), n)); else if (a(t, Object)) {
        for (var s = 0; null != t[s++];) ;
        t[--s] = 0 == e.length ? n : c(t[s], e.slice(0), n)
      } else (t = []).push(0 == e.length ? n : c(null, e.slice(0), n)); else if (i && i.match(/^\s*[0-9]+\s*$/)) {
        t || (t = []), t[r = parseInt(i, 10)] = 0 == e.length ? n : c(t[r], e.slice(0), n)
      } else {
        if (!i) return n;
        var r = i.replace(/^\s*|\s*$/g, "");
        if (t || (t = {}), a(t, Array)) {
          var o = {};
          for (s = 0; s < t.length; ++s) o[s] = t[s];
          t = o
        }
        t[r] = 0 == e.length ? n : c(t[r], e.slice(0), n)
      }
      return t
    }, i = function (t) {
      var n = this;
      return n.keys = {}, t.queryObject ? jQuery.each(t.get(), function (t, e) {
        n.SET(t, e)
      }) : n.parseNew.apply(n, arguments), n
    };
    return i.prototype = {
      queryObject: !0, parseNew: function () {
        var n = this;
        return n.keys = {}, jQuery.each(arguments, function () {
          var t = "" + this;
          t = (t = t.replace(/^[?#]/, "")).replace(/[;&]$/, ""), u && (t = t.replace(/[+]/g, " ")), jQuery.each(t.split(/[&;]/), function () {
            var t = decodeURIComponent(this.split("=")[0] || ""), e = decodeURIComponent(this.split("=")[1] || "");
            t && (s && (/^[+-]?[0-9]+\.[0-9]*$/.test(e) ? e = parseFloat(e) : /^[+-]?[1-9][0-9]*$/.test(e) && (e = parseInt(e, 10))), e = !e && 0 !== e || e, n.SET(t, e))
          })
        }), n
      }, has: function (t, e) {
        var n = this.get(t);
        return a(n, e)
      }, GET: function (t) {
        if (!a(t)) return this.keys;
        for (var e = l(t), n = e[0], i = e[1], s = this.keys[n]; null != s && 0 != i.length;) s = s[i.shift()];
        return "number" == typeof s ? s : s || ""
      }, get: function (t) {
        var e = this.GET(t);
        return a(e, Object) ? jQuery.extend(!0, {}, e) : a(e, Array) ? e.slice(0) : e
      }, SET: function (t, e) {
        var n = a(e) ? e : null, i = l(t), s = i[0], r = i[1], o = this.keys[s];
        return this.keys[s] = c(o, r.slice(0), n), this
      }, set: function (t, e) {
        return this.copy().SET(t, e)
      }, REMOVE: function (t, e) {
        if (e) {
          var n = this.GET(t);
          if (a(n, Array)) {
            for (tval in n) n[tval] = n[tval].toString();
            var i = $.inArray(e, n);
            if (!(0 <= i)) return;
            t = (t = n.splice(i, 1))[i]
          } else if (e != n) return
        }
        return this.SET(t, null).COMPACT()
      }, remove: function (t, e) {
        return this.copy().REMOVE(t, e)
      }, EMPTY: function () {
        var e = this;
        return jQuery.each(e.keys, function (t) {
          delete e.keys[t]
        }), e
      }, load: function (t) {
        var e = t.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1"), n = t.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
        return new i(t.length == n.length ? "" : n, t.length == e.length ? "" : e)
      }, empty: function () {
        return this.copy().EMPTY()
      }, copy: function () {
        return new i(this)
      }, COMPACT: function () {
        function s(t) {
          function n(t, e, n) {
            a(t, Array) ? t.push(n) : t[e] = n
          }

          var i = "object" == typeof t ? a(t, Array) ? [] : {} : t;
          return "object" == typeof t && jQuery.each(t, function (t, e) {
            if (!a(e)) return !0;
            n(i, t, s(e))
          }), i
        }

        return this.keys = s(this.keys), this
      }, compact: function () {
        return this.copy().COMPACT()
      }, toString: function () {
        var t = [], i = [], s = function (t) {
          return t += "", t = encodeURIComponent(t), u && (t = t.replace(/%20/g, "+")), t
        }, r = function (t, e, n) {
          if (a(n) && !1 !== n) {
            var i = [s(e)];
            !0 !== n && (i.push("="), i.push(s(n))), t.push(i.join(""))
          }
        }, o = function (t, e) {
          var n = function (t) {
            return e && "" != e ? [e, "[", t, "]"].join("") : [t].join("")
          };
          jQuery.each(t, function (t, e) {
            "object" == typeof e ? o(e, n(t)) : r(i, n(t), e)
          })
        };
        return o(this.keys), 0 < i.length && t.push(n), t.push(i.join(e)), t.join("")
      }
    }, new i(location.search, location.hash)
  }
}(jQuery.query || {}), function (l) {
  "use strict";

  function n(i) {
    return this.each(function () {
      var t = l(this), e = t.data("bs.affix"), n = "object" == typeof i && i;
      e || t.data("bs.affix", e = new c(this, n)), "string" == typeof i && e[i]()
    })
  }

  var c = function (t, e) {
    this.options = l.extend({}, c.DEFAULTS, e);
    var n = this.options.target === c.DEFAULTS.target ? l(this.options.target) : l(document).find(this.options.target);
    this.$target = n.on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  c.VERSION = "3.4.1", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function (t, e, n, i) {
    var s = this.$target.scrollTop(), r = this.$element.offset(), o = this.$target.height();
    if (null != n && "top" == this.affixed) return s < n && "top";
    if ("bottom" == this.affixed) return null != n ? !(s + this.unpin <= r.top) && "bottom" : !(s + o <= t - i) && "bottom";
    var a = null == this.affixed, l = a ? s : r.top;
    return null != n && s <= n ? "top" : null != i && t - i <= l + (a ? o : e) && "bottom"
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var t = this.$target.scrollTop(), e = this.$element.offset();
    return this.pinnedOffset = e.top - t
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(l.proxy(this.checkPosition, this), 1)
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var t = this.$element.height(), e = this.options.offset, n = e.top, i = e.bottom,
        s = Math.max(l(document).height(), l(document.body).height());
      "object" != typeof e && (i = n = e), "function" == typeof n && (n = e.top(this.$element)), "function" == typeof i && (i = e.bottom(this.$element));
      var r = this.getState(s, t, n, i);
      if (this.affixed != r) {
        null != this.unpin && this.$element.css("top", "");
        var o = "affix" + (r ? "-" + r : ""), a = l.Event(o + ".bs.affix");
        if (this.$element.trigger(a), a.isDefaultPrevented()) return;
        this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(o).trigger(o.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == r && this.$element.offset({top: s - t - i})
    }
  };
  var t = l.fn.affix;
  l.fn.affix = n, l.fn.affix.Constructor = c, l.fn.affix.noConflict = function () {
    return l.fn.affix = t, this
  }, l(window).on("load", function () {
    l('[data-spy="affix"]').each(function () {
      var t = l(this), e = t.data();
      e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), n.call(t, e)
    })
  })
}(jQuery), function (r) {
  "use strict";

  function t(n) {
    return this.each(function () {
      var t = r(this), e = t.data("bs.alert");
      e || t.data("bs.alert", e = new o(this)), "string" == typeof n && e[n].call(t)
    })
  }

  var e = '[data-dismiss="alert"]', o = function (t) {
    r(t).on("click", e, this.close)
  };
  o.VERSION = "3.4.1", o.TRANSITION_DURATION = 150, o.prototype.close = function (t) {
    function e() {
      s.detach().trigger("closed.bs.alert").remove()
    }

    var n = r(this), i = n.attr("data-target");
    i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), i = "#" === i ? [] : i;
    var s = r(document).find(i);
    t && t.preventDefault(), s.length || (s = n.closest(".alert")), s.trigger(t = r.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), r.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", e).emulateTransitionEnd(o.TRANSITION_DURATION) : e())
  };
  var n = r.fn.alert;
  r.fn.alert = t, r.fn.alert.Constructor = o, r.fn.alert.noConflict = function () {
    return r.fn.alert = n, this
  }, r(document).on("click.bs.alert.data-api", e, o.prototype.close)
}(jQuery), function (r) {
  "use strict";

  function n(i) {
    return this.each(function () {
      var t = r(this), e = t.data("bs.button"), n = "object" == typeof i && i;
      e || t.data("bs.button", e = new s(this, n)), "toggle" == i ? e.toggle() : i && e.setState(i)
    })
  }

  var s = function (t, e) {
    this.$element = r(t), this.options = r.extend({}, s.DEFAULTS, e), this.isLoading = !1
  };
  s.VERSION = "3.4.1", s.DEFAULTS = {loadingText: "loading..."}, s.prototype.setState = function (t) {
    var e = "disabled", n = this.$element, i = n.is("input") ? "val" : "html", s = n.data();
    t += "Text", null == s.resetText && n.data("resetText", n[i]()), setTimeout(r.proxy(function () {
      n[i](null == s[t] ? this.options[t] : s[t]), "loadingText" == t ? (this.isLoading = !0, n.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(e).removeAttr(e).prop(e, !1))
    }, this), 0)
  }, s.prototype.toggle = function () {
    var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var n = this.$element.find("input");
      "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var t = r.fn.button;
  r.fn.button = n, r.fn.button.Constructor = s, r.fn.button.noConflict = function () {
    return r.fn.button = t, this
  }, r(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    var e = r(t.target).closest(".btn");
    n.call(e, "toggle"), r(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"))
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    r(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
  })
}(jQuery), function (d) {
  "use strict";

  function a(s) {
    return this.each(function () {
      var t = d(this), e = t.data("bs.carousel"), n = d.extend({}, p.DEFAULTS, t.data(), "object" == typeof s && s),
        i = "string" == typeof s ? s : n.slide;
      e || t.data("bs.carousel", e = new p(this, n)), "number" == typeof s ? e.to(s) : i ? e[i]() : n.interval && e.pause().cycle()
    })
  }

  var p = function (t, e) {
    this.$element = d(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", d.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", d.proxy(this.pause, this)).on("mouseleave.bs.carousel", d.proxy(this.cycle, this))
  };
  p.VERSION = "3.4.1", p.TRANSITION_DURATION = 600, p.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, p.prototype.keydown = function (t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      t.preventDefault()
    }
  }, p.prototype.cycle = function (t) {
    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(d.proxy(this.next, this), this.options.interval)), this
  }, p.prototype.getItemIndex = function (t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
  }, p.prototype.getItemForDirection = function (t, e) {
    var n = this.getItemIndex(e);
    if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
    var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
    return this.$items.eq(i)
  }, p.prototype.to = function (t) {
    var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      e.to(t)
    }) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
  }, p.prototype.pause = function (t) {
    return t || (this.paused = !0), this.$element.find(".next, .prev").length && d.support.transition && (this.$element.trigger(d.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, p.prototype.next = function () {
    if (!this.sliding) return this.slide("next")
  }, p.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev")
  }, p.prototype.slide = function (t, e) {
    var n = this.$element.find(".item.active"), i = e || this.getItemForDirection(t, n), s = this.interval,
      r = "next" == t ? "left" : "right", o = this;
    if (i.hasClass("active")) return this.sliding = !1;
    var a = i[0], l = d.Event("slide.bs.carousel", {relatedTarget: a, direction: r});
    if (this.$element.trigger(l), !l.isDefaultPrevented()) {
      if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var c = d(this.$indicators.children()[this.getItemIndex(i)]);
        c && c.addClass("active")
      }
      var u = d.Event("slid.bs.carousel", {relatedTarget: a, direction: r});
      return d.support.transition && this.$element.hasClass("slide") ? (i.addClass(t), "object" == typeof i && i.length && i[0].offsetWidth, n.addClass(r), i.addClass(r), n.one("bsTransitionEnd", function () {
        i.removeClass([t, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), o.sliding = !1, setTimeout(function () {
          o.$element.trigger(u)
        }, 0)
      }).emulateTransitionEnd(p.TRANSITION_DURATION)) : (n.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(u)), s && this.cycle(), this
    }
  };
  var t = d.fn.carousel;
  d.fn.carousel = a, d.fn.carousel.Constructor = p, d.fn.carousel.noConflict = function () {
    return d.fn.carousel = t, this
  };
  var e = function (t) {
    var e = d(this), n = e.attr("href");
    n && (n = n.replace(/.*(?=#[^\s]+$)/, ""));
    var i = e.attr("data-target") || n, s = d(document).find(i);
    if (s.hasClass("carousel")) {
      var r = d.extend({}, s.data(), e.data()), o = e.attr("data-slide-to");
      o && (r.interval = !1), a.call(s, r), o && s.data("bs.carousel").to(o), t.preventDefault()
    }
  };
  d(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), d(window).on("load", function () {
    d('[data-ride="carousel"]').each(function () {
      var t = d(this);
      a.call(t, t.data())
    })
  })
}(jQuery), function (o) {
  "use strict";

  function s(t) {
    var e, n = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
    return o(document).find(n)
  }

  function a(i) {
    return this.each(function () {
      var t = o(this), e = t.data("bs.collapse"), n = o.extend({}, l.DEFAULTS, t.data(), "object" == typeof i && i);
      !e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || t.data("bs.collapse", e = new l(this, n)), "string" == typeof i && e[i]()
    })
  }

  var l = function (t, e) {
    this.$element = o(t), this.options = o.extend({}, l.DEFAULTS, e), this.$trigger = o('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  l.VERSION = "3.4.1", l.TRANSITION_DURATION = 350, l.DEFAULTS = {toggle: !0}, l.prototype.dimension = function () {
    return this.$element.hasClass("width") ? "width" : "height"
  }, l.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var t, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
        var n = o.Event("show.bs.collapse");
        if (this.$element.trigger(n), !n.isDefaultPrevented()) {
          e && e.length && (a.call(e, "hide"), t || e.data("bs.collapse", null));
          var i = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var s = function () {
            this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!o.support.transition) return s.call(this);
          var r = o.camelCase(["scroll", i].join("-"));
          this.$element.one("bsTransitionEnd", o.proxy(s, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[i](this.$element[0][r])
        }
      }
    }
  }, l.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var t = o.Event("hide.bs.collapse");
      if (this.$element.trigger(t), !t.isDefaultPrevented()) {
        var e = this.dimension();
        this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var n = function () {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        if (!o.support.transition) return n.call(this);
        this.$element[e](0).one("bsTransitionEnd", o.proxy(n, this)).emulateTransitionEnd(l.TRANSITION_DURATION)
      }
    }
  }, l.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, l.prototype.getParent = function () {
    return o(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(o.proxy(function (t, e) {
      var n = o(e);
      this.addAriaAndCollapsedClass(s(n), n)
    }, this)).end()
  }, l.prototype.addAriaAndCollapsedClass = function (t, e) {
    var n = t.hasClass("in");
    t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
  };
  var t = o.fn.collapse;
  o.fn.collapse = a, o.fn.collapse.Constructor = l, o.fn.collapse.noConflict = function () {
    return o.fn.collapse = t, this
  }, o(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
    var e = o(this);
    e.attr("data-target") || t.preventDefault();
    var n = s(e), i = n.data("bs.collapse") ? "toggle" : e.data();
    a.call(n, i)
  })
}(jQuery), function (a) {
  "use strict";

  function l(t) {
    var e = t.attr("data-target");
    e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
    var n = "#" !== e ? a(document).find(e) : null;
    return n && n.length ? n : t.parent()
  }

  function r(i) {
    i && 3 === i.which || (a(e).remove(), a(c).each(function () {
      var t = a(this), e = l(t), n = {relatedTarget: this};
      e.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && a.contains(e[0], i.target) || (e.trigger(i = a.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", n)))))
    }))
  }

  function t(n) {
    return this.each(function () {
      var t = a(this), e = t.data("bs.dropdown");
      e || t.data("bs.dropdown", e = new i(this)), "string" == typeof n && e[n].call(t)
    })
  }

  var e = ".dropdown-backdrop", c = '[data-toggle="dropdown"]', i = function (t) {
    a(t).on("click.bs.dropdown", this.toggle)
  };
  i.VERSION = "3.4.1", i.prototype.toggle = function (t) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var n = l(e), i = n.hasClass("open");
      if (r(), !i) {
        "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", r);
        var s = {relatedTarget: this};
        if (n.trigger(t = a.Event("show.bs.dropdown", s)), t.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(a.Event("shown.bs.dropdown", s))
      }
      return !1
    }
  }, i.prototype.keydown = function (t) {
    if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
      var e = a(this);
      if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
        var n = l(e), i = n.hasClass("open");
        if (!i && 27 != t.which || i && 27 == t.which) return 27 == t.which && n.find(c).trigger("focus"), e.trigger("click");
        var s = " li:not(.disabled):visible a", r = n.find(".dropdown-menu" + s);
        if (r.length) {
          var o = r.index(t.target);
          38 == t.which && 0 < o && o--, 40 == t.which && o < r.length - 1 && o++, ~o || (o = 0), r.eq(o).trigger("focus")
        }
      }
    }
  };
  var n = a.fn.dropdown;
  a.fn.dropdown = t, a.fn.dropdown.Constructor = i, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = n, this
  }, a(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation()
  }).on("click.bs.dropdown.data-api", c, i.prototype.toggle).on("keydown.bs.dropdown.data-api", c, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
}(jQuery), function (o) {
  "use strict";

  function a(i, s) {
    return this.each(function () {
      var t = o(this), e = t.data("bs.modal"), n = o.extend({}, r.DEFAULTS, t.data(), "object" == typeof i && i);
      e || t.data("bs.modal", e = new r(this, n)), "string" == typeof i ? e[i](s) : n.show && e.show(s)
    })
  }

  var r = function (t, e) {
    this.options = e, this.$body = o(document.body), this.$element = o(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, o.proxy(function () {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  r.VERSION = "3.4.1", r.TRANSITION_DURATION = 300, r.BACKDROP_TRANSITION_DURATION = 150, r.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, r.prototype.toggle = function (t) {
    return this.isShown ? this.hide() : this.show(t)
  }, r.prototype.show = function (n) {
    var i = this, t = o.Event("show.bs.modal", {relatedTarget: n});
    this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', o.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      i.$element.one("mouseup.dismiss.bs.modal", function (t) {
        o(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function () {
      var t = o.support.transition && i.$element.hasClass("fade");
      i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), t && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
      var e = o.Event("shown.bs.modal", {relatedTarget: n});
      t ? i.$dialog.one("bsTransitionEnd", function () {
        i.$element.trigger("focus").trigger(e)
      }).emulateTransitionEnd(r.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(e)
    }))
  }, r.prototype.hide = function (t) {
    t && t.preventDefault(), t = o.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), o(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), o.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", o.proxy(this.hideModal, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : this.hideModal())
  }, r.prototype.enforceFocus = function () {
    o(document).off("focusin.bs.modal").on("focusin.bs.modal",
      o.proxy(function (t) {
        document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
      }, this))
  }, r.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", o.proxy(function (t) {
      27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, r.prototype.resize = function () {
    this.isShown ? o(window).on("resize.bs.modal", o.proxy(this.handleUpdate, this)) : o(window).off("resize.bs.modal")
  }, r.prototype.hideModal = function () {
    var t = this;
    this.$element.hide(), this.backdrop(function () {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
  }, r.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, r.prototype.backdrop = function (t) {
    var e = this, n = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var i = o.support.transition && n;
      if (this.$backdrop = o(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", o.proxy(function (t) {
        this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
      }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
      i ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : t()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var s = function () {
        e.removeBackdrop(), t && t()
      };
      o.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : s()
    } else t && t()
  }, r.prototype.handleUpdate = function () {
    this.adjustDialog()
  }, r.prototype.adjustDialog = function () {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
  }, r.prototype.resetAdjustments = function () {
    this.$element.css({paddingLeft: "", paddingRight: ""})
  }, r.prototype.checkScrollbar = function () {
    var t = window.innerWidth;
    if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
  }, r.prototype.setScrollbar = function () {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "";
    var s = this.scrollbarWidth;
    this.bodyIsOverflowing && (this.$body.css("padding-right", t + s), o(this.fixedContent).each(function (t, e) {
      var n = e.style.paddingRight, i = o(e).css("padding-right");
      o(e).data("padding-right", n).css("padding-right", parseFloat(i) + s + "px")
    }))
  }, r.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad), o(this.fixedContent).each(function (t, e) {
      var n = o(e).data("padding-right");
      o(e).removeData("padding-right"), e.style.paddingRight = n || ""
    })
  }, r.prototype.measureScrollbar = function () {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
  };
  var t = o.fn.modal;
  o.fn.modal = a, o.fn.modal.Constructor = r, o.fn.modal.noConflict = function () {
    return o.fn.modal = t, this
  }, o(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
    var e = o(this), n = e.attr("href"), i = e.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, ""),
      s = o(document).find(i),
      r = s.data("bs.modal") ? "toggle" : o.extend({remote: !/#/.test(n) && n}, s.data(), e.data());
    e.is("a") && t.preventDefault(), s.one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
        e.is(":visible") && e.trigger("focus")
      })
    }), a.call(s, r, this)
  })
}(jQuery), function (r) {
  "use strict";

  function s(t, e) {
    this.$body = r(document.body), this.$scrollElement = r(t).is(document.body) ? r(window) : r(t), this.options = r.extend({}, s.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r.proxy(this.process, this)), this.refresh(), this.process()
  }

  function e(i) {
    return this.each(function () {
      var t = r(this), e = t.data("bs.scrollspy"), n = "object" == typeof i && i;
      e || t.data("bs.scrollspy", e = new s(this, n)), "string" == typeof i && e[i]()
    })
  }

  s.VERSION = "3.4.1", s.DEFAULTS = {offset: 10}, s.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, s.prototype.refresh = function () {
    var t = this, i = "offset", s = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), r.isWindow(this.$scrollElement[0]) || (i = "position", s = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var t = r(this), e = t.data("target") || t.attr("href"), n = /^#./.test(e) && r(e);
      return n && n.length && n.is(":visible") && [[n[i]().top + s, e]] || null
    }).sort(function (t, e) {
      return t[0] - e[0]
    }).each(function () {
      t.offsets.push(this[0]), t.targets.push(this[1])
    })
  }, s.prototype.process = function () {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(),
      i = this.options.offset + n - this.$scrollElement.height(), s = this.offsets, r = this.targets,
      o = this.activeTarget;
    if (this.scrollHeight != n && this.refresh(), i <= e) return o != (t = r[r.length - 1]) && this.activate(t);
    if (o && e < s[0]) return this.activeTarget = null, this.clear();
    for (t = s.length; t--;) o != r[t] && e >= s[t] && (s[t + 1] === undefined || e < s[t + 1]) && this.activate(r[t])
  }, s.prototype.activate = function (t) {
    this.activeTarget = t, this.clear();
    var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
      n = r(e).parents("li").addClass("active");
    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
  }, s.prototype.clear = function () {
    r(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var t = r.fn.scrollspy;
  r.fn.scrollspy = e, r.fn.scrollspy.Constructor = s, r.fn.scrollspy.noConflict = function () {
    return r.fn.scrollspy = t, this
  }, r(window).on("load.bs.scrollspy.data-api", function () {
    r('[data-spy="scroll"]').each(function () {
      var t = r(this);
      e.call(t, t.data())
    })
  })
}(jQuery), function (a) {
  "use strict";

  function e(n) {
    return this.each(function () {
      var t = a(this), e = t.data("bs.tab");
      e || t.data("bs.tab", e = new o(this)), "string" == typeof n && e[n]()
    })
  }

  var o = function (t) {
    this.element = a(t)
  };
  o.VERSION = "3.4.1", o.TRANSITION_DURATION = 150, o.prototype.show = function () {
    var t = this.element, e = t.closest("ul:not(.dropdown-menu)"), n = t.data("target");
    if (n || (n = (n = t.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
      var i = e.find(".active:last a"), s = a.Event("hide.bs.tab", {relatedTarget: t[0]}),
        r = a.Event("show.bs.tab", {relatedTarget: i[0]});
      if (i.trigger(s), t.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
        var o = a(document).find(n);
        this.activate(t.closest("li"), e), this.activate(o, o.parent(), function () {
          i.trigger({type: "hidden.bs.tab", relatedTarget: t[0]}), t.trigger({
            type: "shown.bs.tab",
            relatedTarget: i[0]
          })
        })
      }
    }
  }, o.prototype.activate = function (t, e, n) {
    function i() {
      s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
    }

    var s = e.find("> .active"),
      r = n && a.support.transition && (s.length && s.hasClass("fade") || !!e.find("> .fade").length);
    s.length && r ? s.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i(), s.removeClass("in")
  };
  var t = a.fn.tab;
  a.fn.tab = e, a.fn.tab.Constructor = o, a.fn.tab.noConflict = function () {
    return a.fn.tab = t, this
  };
  var n = function (t) {
    t.preventDefault(), e.call(a(this), "show")
  };
  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), function (i) {
  "use strict";

  function t() {
    var t = document.createElement("bootstrap"), e = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    for (var n in e) if (t.style[n] !== undefined) return {end: e[n]};
    return !1
  }

  i.fn.emulateTransitionEnd = function (t) {
    var e = !1, n = this;
    return i(this).one("bsTransitionEnd", function () {
      e = !0
    }), setTimeout(function () {
      e || i(n).trigger(i.support.transition.end)
    }, t), this
  }, i(function () {
    i.support.transition = t(), i.support.transition && (i.event.special.bsTransitionEnd = {
      bindType: i.support.transition.end,
      delegateType: i.support.transition.end,
      handle: function (t) {
        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
      }
    })
  })
}(jQuery), function (m) {
  "use strict";

  function f(t, e) {
    var n = t.nodeName.toLowerCase();
    if (-1 !== m.inArray(n, e)) return -1 === m.inArray(n, o) || Boolean(t.nodeValue.match(a) || t.nodeValue.match(l));
    for (var i = m(e).filter(function (t, e) {
      return e instanceof RegExp
    }), s = 0, r = i.length; s < r; s++) if (n.match(i[s])) return !0;
    return !1
  }

  function i(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);
    if (!document.implementation || !document.implementation.createHTMLDocument) return t;
    var i = document.implementation.createHTMLDocument("sanitization");
    i.body.innerHTML = t;
    for (var s = m.map(e, function (t, e) {
      return e
    }), r = m(i.body).find("*"), o = 0, a = r.length; o < a; o++) {
      var l = r[o], c = l.nodeName.toLowerCase();
      if (-1 !== m.inArray(c, s)) for (var u = m.map(l.attributes, function (t) {
        return t
      }), d = [].concat(e["*"] || [], e[c] || []), p = 0, h = u.length; p < h; p++) f(u[p], d) || l.removeAttribute(u[p].nodeName); else l.parentNode.removeChild(l)
    }
    return i.body.innerHTML
  }

  function t(i) {
    return this.each(function () {
      var t = m(this), e = t.data("bs.tooltip"), n = "object" == typeof i && i;
      !e && /destroy|hide/.test(i) || (e || t.data("bs.tooltip", e = new g(this, n)), "string" == typeof i && e[i]())
    })
  }

  var s = ["sanitize", "whiteList", "sanitizeFn"],
    o = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], e = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    }, a = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    l = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
    g = function (t, e) {
      this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
  g.VERSION = "3.4.1", g.TRANSITION_DURATION = 150, g.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {selector: "body", padding: 0},
    sanitize: !0,
    sanitizeFn: null,
    whiteList: e
  }, g.prototype.init = function (t, e, n) {
    if (this.enabled = !0, this.type = t, this.$element = m(e), this.options = this.getOptions(n), this.$viewport = this.options.viewport && m(document).find(m.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
      click: !1,
      hover: !1,
      focus: !1
    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var i = this.options.trigger.split(" "), s = i.length; s--;) {
      var r = i[s];
      if ("click" == r) this.$element.on("click." + this.type, this.options.selector, m.proxy(this.toggle, this)); else if ("manual" != r) {
        var o = "hover" == r ? "mouseenter" : "focusin", a = "hover" == r ? "mouseleave" : "focusout";
        this.$element.on(o + "." + this.type, this.options.selector, m.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, m.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = m.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, g.prototype.getDefaults = function () {
    return g.DEFAULTS
  }, g.prototype.getOptions = function (t) {
    var e = this.$element.data();
    for (var n in e) e.hasOwnProperty(n) && -1 !== m.inArray(n, s) && delete e[n];
    return (t = m.extend({}, this.getDefaults(), e, t)).delay && "number" == typeof t.delay && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), t.sanitize && (t.template = i(t.template, t.whiteList, t.sanitizeFn)), t
  }, g.prototype.getDelegateOptions = function () {
    var n = {}, i = this.getDefaults();
    return this._options && m.each(this._options, function (t, e) {
      i[t] != e && (n[t] = e)
    }), n
  }, g.prototype.enter = function (t) {
    var e = t instanceof this.constructor ? t : m(t.currentTarget).data("bs." + this.type);
    if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e)), t instanceof m.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState) e.hoverState = "in"; else {
      if (clearTimeout(e.timeout), e.hoverState = "in", !e.options.delay || !e.options.delay.show) return e.show();
      e.timeout = setTimeout(function () {
        "in" == e.hoverState && e.show()
      }, e.options.delay.show)
    }
  }, g.prototype.isInStateTrue = function () {
    for (var t in this.inState) if (this.inState[t]) return !0;
    return !1
  }, g.prototype.leave = function (t) {
    var e = t instanceof this.constructor ? t : m(t.currentTarget).data("bs." + this.type);
    if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e)), t instanceof m.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) {
      if (clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();
      e.timeout = setTimeout(function () {
        "out" == e.hoverState && e.hide()
      }, e.options.delay.hide)
    }
  }, g.prototype.show = function () {
    var t = m.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(t);
      var e = m.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (t.isDefaultPrevented() || !e) return;
      var n = this, i = this.tip(), s = this.getUID(this.type);
      this.setContent(), i.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && i.addClass("fade");
      var r = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
        o = /\s?auto?\s?/i, a = o.test(r);
      a && (r = r.replace(o, "") || "top"), i.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(r).data("bs." + this.type, this), this.options.container ? i.appendTo(m(document).find(this.options.container)) : i.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var l = this.getPosition(), c = i[0].offsetWidth, u = i[0].offsetHeight;
      if (a) {
        var d = r, p = this.getPosition(this.$viewport);
        r = "bottom" == r && l.bottom + u > p.bottom ? "top" : "top" == r && l.top - u < p.top ? "bottom" : "right" == r && l.right + c > p.width ? "left" : "left" == r && l.left - c < p.left ? "right" : r, i.removeClass(d).addClass(r)
      }
      var h = this.getCalculatedOffset(r, l, c, u);
      this.applyPlacement(h, r);
      var f = function () {
        var t = n.hoverState;
        n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
      };
      m.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", f).emulateTransitionEnd(g.TRANSITION_DURATION) : f()
    }
  }, g.prototype.applyPlacement = function (t, e) {
    var n = this.tip(), i = n[0].offsetWidth, s = n[0].offsetHeight, r = parseInt(n.css("margin-top"), 10),
      o = parseInt(n.css("margin-left"), 10);
    isNaN(r) && (r = 0), isNaN(o) && (o = 0), t.top += r, t.left += o, m.offset.setOffset(n[0], m.extend({
      using: function (t) {
        n.css({top: Math.round(t.top), left: Math.round(t.left)})
      }
    }, t), 0), n.addClass("in");
    var a = n[0].offsetWidth, l = n[0].offsetHeight;
    "top" == e && l != s && (t.top = t.top + s - l);
    var c = this.getViewportAdjustedDelta(e, t, a, l);
    c.left ? t.left += c.left : t.top += c.top;
    var u = /top|bottom/.test(e), d = u ? 2 * c.left - i + a : 2 * c.top - s + l,
      p = u ? "offsetWidth" : "offsetHeight";
    n.offset(t), this.replaceArrow(d, n[0][p], u)
  }, g.prototype.replaceArrow = function (t, e, n) {
    this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
  }, g.prototype.setContent = function () {
    var t = this.tip(), e = this.getTitle();
    this.options.html ? (this.options.sanitize && (e = i(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
  }, g.prototype.hide = function (t) {
    function e() {
      "in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), t && t()
    }

    var n = this, i = m(this.$tip), s = m.Event("hide.bs." + this.type);
    if (this.$element.trigger(s), !s.isDefaultPrevented()) return i.removeClass("in"), m.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(g.TRANSITION_DURATION) : e(), this.hoverState = null, this
  }, g.prototype.fixTitle = function () {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
  }, g.prototype.hasContent = function () {
    return this.getTitle()
  }, g.prototype.getPosition = function (t) {
    var e = (t = t || this.$element)[0], n = "BODY" == e.tagName, i = e.getBoundingClientRect();
    null == i.width && (i = m.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
    var s = window.SVGElement && e instanceof window.SVGElement, r = n ? {top: 0, left: 0} : s ? null : t.offset(),
      o = {scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()},
      a = n ? {width: m(window).width(), height: m(window).height()} : null;
    return m.extend({}, i, o, a, r)
  }, g.prototype.getCalculatedOffset = function (t, e, n, i) {
    return "bottom" == t ? {top: e.top + e.height, left: e.left + e.width / 2 - n / 2} : "top" == t ? {
      top: e.top - i,
      left: e.left + e.width / 2 - n / 2
    } : "left" == t ? {top: e.top + e.height / 2 - i / 2, left: e.left - n} : {
      top: e.top + e.height / 2 - i / 2,
      left: e.left + e.width
    }
  }, g.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
    var s = {top: 0, left: 0};
    if (!this.$viewport) return s;
    var r = this.options.viewport && this.options.viewport.padding || 0, o = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
      var a = e.top - r - o.scroll, l = e.top + r - o.scroll + i;
      a < o.top ? s.top = o.top - a : l > o.top + o.height && (s.top = o.top + o.height - l)
    } else {
      var c = e.left - r, u = e.left + r + n;
      c < o.left ? s.left = o.left - c : u > o.right && (s.left = o.left + o.width - u)
    }
    return s
  }, g.prototype.getTitle = function () {
    var t = this.$element, e = this.options;
    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
  }, g.prototype.getUID = function (t) {
    for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) ;
    return t
  }, g.prototype.tip = function () {
    if (!this.$tip && (this.$tip = m(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, g.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, g.prototype.enable = function () {
    this.enabled = !0
  }, g.prototype.disable = function () {
    this.enabled = !1
  }, g.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }, g.prototype.toggle = function (t) {
    var e = this;
    t && ((e = m(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
  }, g.prototype.destroy = function () {
    var t = this;
    clearTimeout(this.timeout), this.hide(function () {
      t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
    })
  }, g.prototype.sanitizeHtml = function (t) {
    return i(t, this.options.whiteList, this.options.sanitizeFn)
  };
  var n = m.fn.tooltip;
  m.fn.tooltip = t, m.fn.tooltip.Constructor = g, m.fn.tooltip.noConflict = function () {
    return m.fn.tooltip = n, this
  }
}(jQuery), function (s) {
  "use strict";

  function t(i) {
    return this.each(function () {
      var t = s(this), e = t.data("bs.popover"), n = "object" == typeof i && i;
      !e && /destroy|hide/.test(i) || (e || t.data("bs.popover", e = new r(this, n)), "string" == typeof i && e[i]())
    })
  }

  var r = function (t, e) {
    this.init("popover", t, e)
  };
  if (!s.fn.tooltip) throw new Error("Popover requires tooltip.js");
  r.VERSION = "3.4.1", r.DEFAULTS = s.extend({}, s.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), r.prototype = s.extend({}, s.fn.tooltip.Constructor.prototype), (r.prototype.constructor = r).prototype.getDefaults = function () {
    return r.DEFAULTS
  }, r.prototype.setContent = function () {
    var t = this.tip(), e = this.getTitle(), n = this.getContent();
    if (this.options.html) {
      var i = typeof n;
      this.options.sanitize && (e = this.sanitizeHtml(e), "string" === i && (n = this.sanitizeHtml(n))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n)
    } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(n);
    t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
  }, r.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }, r.prototype.getContent = function () {
    var t = this.$element, e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
  }, r.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var e = s.fn.popover;
  s.fn.popover = t, s.fn.popover.Constructor = r, s.fn.popover.noConflict = function () {
    return s.fn.popover = e, this
  }
}(jQuery), function (m) {
  "use strict";
  var g, t = {className: "autosizejs", id: "autosizejs", append: "\n", callback: !1, resizeDelay: 10, placeholder: !0},
    y = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
    v = m('<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>').data("autosize", !0)[0];
  (v.style.lineHeight = "99px") === m(v).css("lineHeight") && y.push("lineHeight"), v.style.lineHeight = "", m.fn.autosize = function (f) {
    return this.length ? (f = m.extend({}, t, f || {}), v.parentNode !== document.body && m(document.body).append(v), this.each(function () {
      function i() {
        var n, i = !!window.getComputedStyle && window.getComputedStyle(a, null);
        i ? (0 !== (n = a.getBoundingClientRect().width) && "number" == typeof n || (n = parseInt(i.width, 10)), m.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function (t, e) {
          n -= parseInt(i[e], 10)
        })) : n = l.width(), v.style.width = Math.max(n, 0) + "px"
      }

      function n() {
        var n = {};
        if (g = a, v.className = f.className, v.id = f.id, s = parseInt(l.css("maxHeight"), 10), m.each(y, function (t, e) {
          n[e] = l.css(e)
        }), m(v).css(n).attr("wrap", l.attr("wrap")), i(), window.chrome) {
          var t = a.style.width;
          a.style.width = "0px";
          a.offsetWidth;
          a.style.width = t
        }
      }

      function e() {
        var t, e;
        g !== a ? n() : i(), !a.value && f.placeholder ? v.value = (l.attr("placeholder") || "") + f.append : v.value = a.value + f.append, v.style.overflowY = a.style.overflowY, e = parseInt(a.style.height, 10), v.scrollTop = 0, v.scrollTop = 9e4, t = v.scrollTop, s && s < t ? (a.style.overflowY = "scroll", t = s) : (a.style.overflowY = "hidden", t < r && (t = r)), e !== (t += c) && (a.style.height = t + "px", u && f.callback.call(a, a))
      }

      function t() {
        clearTimeout(o), o = setTimeout(function () {
          var t = l.width();
          t !== p && (p = t, e())
        }, parseInt(f.resizeDelay, 10))
      }

      var s, r, o, a = this, l = m(a), c = 0, u = m.isFunction(f.callback), d = {
        height: a.style.height,
        overflow: a.style.overflow,
        overflowY: a.style.overflowY,
        wordWrap: a.style.wordWrap,
        resize: a.style.resize
      }, p = l.width(), h = l.css("resize");
      l.data("autosize") || (l.data("autosize", !0), "border-box" !== l.css("box-sizing") && "border-box" !== l.css("-moz-box-sizing") && "border-box" !== l.css("-webkit-box-sizing") || (c = l.outerHeight() - l.height()), r = Math.max(parseInt(l.css("minHeight"), 10) - c || 0, l.height()), l.css({
        overflow: "hidden",
        overflowY: "hidden",
        wordWrap: "break-word"
      }), "vertical" === h ? l.css("resize", "none") : "both" === h && l.css("resize", "horizontal"), "onpropertychange" in a ? "oninput" in a ? l.on("input.autosize keyup.autosize", e) : l.on("propertychange.autosize", function () {
        "value" === event.propertyName && e()
      }) : l.on("input.autosize", e), !1 !== f.resizeDelay && m(window).on("resize.autosize", t), l.on("autosize.resize", e), l.on("autosize.resizeIncludeStyle", function () {
        g = null, e()
      }), l.on("autosize.destroy", function () {
        g = null, clearTimeout(o), m(window).off("resize", t), l.off("autosize").off(".autosize").css(d).removeData("autosize")
      }), e())
    })) : this
  }
}(window.jQuery || window.$), BestInPlaceEditor.prototype = {
  activate: function () {
    "use strict";
    var t;
    if (this.isPlaceHolder()) t = ""; else if (this.original_content) t = this.original_content; else switch (this.formType) {
      case"input":
      case"textarea":
        if (this.display_raw) t = this.element.html().replace(/&amp;/gi, "&"); else {
          var e = this.element.data("bipValue");
          t = void 0 === e ? "" : "string" == typeof e ? this.element.data("bipValue").replace(/&amp;/gi, "&") : this.element.data("bipValue")
        }
        break;
      case"select":
        t = this.element.html()
    }
    this.oldValue = this.isPlaceHolder() ? "" : this.element.html(), this.display_value = t, jQuery(this.activator).unbind("click", this.clickHandler), this.activateForm(), this.element.trigger(jQuery.Event("best_in_place:activate"))
  }, abort: function () {
    "use strict";
    this.activateText(this.oldValue), jQuery(this.activator).bind("click", {editor: this}, this.clickHandler), this.element.trigger(jQuery.Event("best_in_place:abort")), this.element.trigger(jQuery.Event("best_in_place:deactivate"))
  }, abortIfConfirm: function () {
    "use strict";
    this.useConfirm ? confirm(BestInPlaceEditor.defaults.locales[""].confirmMessage) && this.abort() : this.abort()
  }, update: function () {
    "use strict";
    this.element.trigger(jQuery.Event("best_in_place:before-update"));
    var i = this, n = this.getValue();
    if (this.formType in {input: 1, textarea: 1} && n === this.oldValue) return this.abort(), !0;
    switch (i.ajax({
      type: this.requestMethod(),
      dataType: BestInPlaceEditor.defaults.ajaxDataType,
      data: i.requestData(),
      success: function (t, e, n) {
        i.loadSuccessCallback(t, e, n)
      },
      error: function (t, e) {
        i.loadErrorCallback(t, e)
      }
    }), this.formType) {
      case"select":
        this.previousCollectionValue = n, $.each(this.values, function (t, e) {
          String(e[0]) === String(n) && i.element.html(e[1])
        });
        break;
      case"checkbox":
        $.each(this.values, function (t, e) {
          String(e[0]) === String(n) && i.element.html(e[1])
        });
        break;
      default:
        "" !== n ? this.display_raw ? i.element.html(n) : i.element.text(n) : i.element.html(this.placeHolder)
    }
    i.element.data("bipValue", n), i.element.attr("data-bip-value", n), i.element.trigger(jQuery.Event("best_in_place:update"))
  }, activateForm: function () {
    "use strict";
    alert(BestInPlaceEditor.defaults.locales[""].uninitializedForm)
  }, activateText: function (t) {
    "use strict";
    this.element.html(t), this.isPlaceHolder() && this.element.html(this.placeHolder)
  }, initOptions: function () {
    "use strict";
    var e = this;
    e.element.parents().each(function () {
      var t = jQuery(this);
      e.url = e.url || t.data("bipUrl"), e.activator = e.activator || t.data("bipActivator"), e.okButton = e.okButton || t.data("bipOkButton"), e.okButtonClass = e.okButtonClass || t.data("bipOkButtonClass"), e.cancelButton = e.cancelButton || t.data("bipCancelButton"), e.cancelButtonClass = e.cancelButtonClass || t.data("bipCancelButtonClass"), e.skipBlur = e.skipBlur || t.data("bipSkipBlur")
    }), e.url = e.element.data("bipUrl") || e.url || document.location.pathname, e.collection = e.element.data("bipCollection") || e.collection, e.formType = e.element.data("bipType") || "input", e.objectName = e.element.data("bipObject") || e.objectName, e.attributeName = e.element.data("bipAttribute") || e.attributeName, e.activator = e.element.data("bipActivator") || e.element, e.okButton = e.element.data("bipOkButton") || e.okButton, e.okButtonClass = e.element.data("bipOkButtonClass") || e.okButtonClass || BestInPlaceEditor.defaults.okButtonClass, e.cancelButton = e.element.data("bipCancelButton") || e.cancelButton, e.cancelButtonClass = e.element.data("bipCancelButtonClass") || e.cancelButtonClass || BestInPlaceEditor.defaults.cancelButtonClass, e.skipBlur = e.element.data("bipSkipBlur") || e.skipBlur || BestInPlaceEditor.defaults.skipBlur, e.isNewObject = e.element.data("bipNewObject"), e.dataExtraPayload = e.element.data("bipExtraPayload"), null == e.element.data("bipPlaceholder") ? e.placeHolder = BestInPlaceEditor.defaults.locales[""].placeHolder : e.placeHolder = e.element.data("bipPlaceholder"), e.inner_class = e.element.data("bipInnerClass"), e.html_attrs = e.element.data("bipHtmlAttrs"), e.original_content = e.element.data("bipOriginalContent") || e.original_content, e.display_raw = e.element.data("bip-raw"), e.useConfirm = e.element.data("bip-confirm"), "select" !== e.formType && "checkbox" !== e.formType || (e.values = e.collection, e.collectionValue = e.element.data("bipValue") || e.collectionValue)
  }, bindForm: function () {
    "use strict";
    this.activateForm = BestInPlaceEditor.forms[this.formType].activateForm, this.getValue = BestInPlaceEditor.forms[this.formType].getValue
  }, initPlaceHolder: function () {
    "use strict";
    "" === this.element.html() && (this.element.addClass("bip-placeholder"), this.element.html(this.placeHolder))
  }, isPlaceHolder: function () {
    "use strict";
    return "" === this.element.html() || this.element.html() === this.placeHolder
  }, getValue: function () {
    "use strict";
    alert(BestInPlaceEditor.defaults.locales[""].uninitializedForm)
  }, sanitizeValue: function (t) {
    "use strict";
    return jQuery.trim(t)
  }, requestMethod: function () {
    "use strict";
    return this.isNewObject ? "post" : BestInPlaceEditor.defaults.ajaxMethod
  }, requestData: function () {
    "use strict";
    var t = jQuery("meta[name=csrf-token]").attr("content"), e = jQuery("meta[name=csrf-param]").attr("content"),
      n = {};
    return n._method = this.requestMethod(), n[this.objectName] = this.dataExtraPayload || {}, n[this.objectName][this.attributeName] = this.getValue(), e !== undefined && t !== undefined && (n[e] = t), jQuery.param(n)
  }, ajax: function (t) {
    "use strict";
    return t.url = this.url, t.beforeSend = function (t) {
      t.setRequestHeader("Accept", "application/json")
    }, jQuery.ajax(t)
  }, loadSuccessCallback: function (t, e, n) {
    "use strict";
    if (t = jQuery.trim(t), this.display_raw ? this.original_content = this.element.html() : this.original_content = this.element.text(), t && "" !== t) {
      var i = jQuery.parseJSON(t);
      null !== i && i.hasOwnProperty("display_as") && (this.element.data("bip-original-content", this.element.text()), this.element.html(i.display_as)), this.isNewObject && i && i[this.objectName] && i[this.objectName].id && (this.isNewObject = !1, this.url += "/" + i[this.objectName].id)
    }
    this.element.toggleClass("bip-placeholder", this.isPlaceHolder()), this.element.trigger(jQuery.Event("best_in_place:success"), [t, e, n]), this.element.trigger(jQuery.Event("ajax:success"), [t, e, n]), jQuery(this.activator).bind("click", {editor: this}, this.clickHandler), this.element.trigger(jQuery.Event("best_in_place:deactivate")), null !== this.collectionValue && "select" === this.formType && (this.collectionValue = this.previousCollectionValue, this.previousCollectionValue = null)
  }, loadErrorCallback: function (t, e) {
    "use strict";
    this.activateText(this.oldValue), this.element.trigger(jQuery.Event("best_in_place:error"), [t, e]), this.element.trigger(jQuery.Event("ajax:error"), t, e), jQuery(this.activator).bind("click", {editor: this}, this.clickHandler), this.element.trigger(jQuery.Event("best_in_place:deactivate"))
  }, clickHandler: function (t) {
    "use strict";
    t.preventDefault(), t.data.editor.activate()
  }, setHtmlAttributes: function () {
    "use strict";
    var n = this.element.find(this.formType);
    if (this.html_attrs) {
      var t = this.html_attrs;
      $.each(t, function (t, e) {
        n.attr(t, e)
      })
    }
  }, placeButtons: function (t, e) {
    "use strict";
    e.okButton && t.append(jQuery(document.createElement("input")).attr("type", "submit").attr("class", e.okButtonClass).attr("value", e.okButton)), e.cancelButton && t.append(jQuery(document.createElement("input")).attr("type", "button").attr("class", e.cancelButtonClass).attr("value", e.cancelButton))
  }
}, BestInPlaceEditor.forms = {
  input: {
    activateForm: function () {
      "use strict";
      var t = jQuery(document.createElement("form")).addClass("form_in_place").attr("action", "javascript:void(0);").attr("style", "display:inline"),
        e = jQuery(document.createElement("input")).attr("type", "text").attr("name", this.attributeName).val(this.display_value);
      this.inner_class && e.addClass(this.inner_class), t.append(e), this.placeButtons(t, this), this.element.html(t), this.setHtmlAttributes(), this.element.find("input[type='text']")[0].select(), this.element.find("form").bind("submit", {editor: this}, BestInPlaceEditor.forms.input.submitHandler), this.cancelButton && this.element.find("input[type='button']").bind("click", {editor: this}, BestInPlaceEditor.forms.input.cancelButtonHandler), this.okButton || this.element.find("input[type='text']").bind("blur", {editor: this}, BestInPlaceEditor.forms.input.inputBlurHandler), this.element.find("input[type='text']").bind("keyup", {editor: this}, BestInPlaceEditor.forms.input.keyupHandler), this.blurTimer = null, this.userClicked = !1
    }, getValue: function () {
      "use strict";
      return this.sanitizeValue(this.element.find("input").val())
    }, inputBlurHandler: function (t) {
      "use strict";
      t.data.editor.okButton ? t.data.editor.blurTimer = setTimeout(function () {
        t.data.editor.userClicked || t.data.editor.abort()
      }, 500) : t.data.editor.cancelButton ? t.data.editor.blurTimer = setTimeout(function () {
        t.data.editor.userClicked || t.data.editor.update()
      }, 500) : t.data.editor.update()
    }, submitHandler: function (t) {
      "use strict";
      t.data.editor.userClicked = !0, clearTimeout(t.data.editor.blurTimer), t.data.editor.update()
    }, cancelButtonHandler: function (t) {
      "use strict";
      t.data.editor.userClicked = !0, clearTimeout(t.data.editor.blurTimer), t.data.editor.abort(), t.stopPropagation()
    }, keyupHandler: function (t) {
      "use strict";
      27 === t.keyCode && (t.data.editor.abort(), t.stopImmediatePropagation())
    }
  }, select: {
    activateForm: function () {
      "use strict";
      var i, s,
        t = jQuery(document.createElement("form")).attr("action", "javascript:void(0)").attr("style", "display:inline"),
        r = jQuery(document.createElement("select")).attr("class", null !== this.inner_class ? this.inner_class : ""),
        o = this.collectionValue, e = this.values;
      $.each(e, function (t, e) {
        i = e[0], s = e[1];
        var n = jQuery(document.createElement("option")).val(i).html(s);
        o && String(i) === String(o) && n.attr("selected", "selected"), r.append(n)
      }), t.append(r), this.element.html(t), this.setHtmlAttributes(), this.element.find("select").bind("change", {editor: this}, BestInPlaceEditor.forms.select.blurHandler), this.element.find("select").bind("blur", {editor: this}, BestInPlaceEditor.forms.select.blurHandler), this.element.find("select").bind("keyup", {editor: this}, BestInPlaceEditor.forms.select.keyupHandler), this.element.find("select")[0].focus();
      try {
        var n = document.createEvent("MouseEvents");
        n.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.element.find("select")[0].dispatchEvent(n)
      } catch (n) {
      }
    }, getValue: function () {
      "use strict";
      return this.sanitizeValue(this.element.find("select").val())
    }, blurHandler: function (t) {
      "use strict";
      t.data.editor.update()
    }, keyupHandler: function (t) {
      "use strict";
      27 === t.keyCode && t.data.editor.abort()
    }
  }, checkbox: {
    activateForm: function () {
      "use strict";
      this.collectionValue = !this.getValue(), this.setHtmlAttributes(), this.update()
    }, getValue: function () {
      "use strict";
      return this.collectionValue
    }
  }, textarea: {
    activateForm: function () {
      "use strict";
      var t = this.element.css("width"), e = this.element.css("height"),
        n = jQuery(document.createElement("form")).addClass("form_in_place").attr("action", "javascript:void(0);").attr("style", "display:inline"),
        i = jQuery(document.createElement("textarea")).attr("name", this.attributeName).val(this.sanitizeValue(this.display_value));
      null !== this.inner_class && i.addClass(this.inner_class), n.append(i), this.placeButtons(n, this), this.element.html(n), this.setHtmlAttributes(), jQuery(this.element.find("textarea")[0]).css({
        "min-width": t,
        "min-height": e
      }), jQuery(this.element.find("textarea")[0]).autosize(), this.element.find("textarea")[0].focus(), this.element.find("form").bind("submit", {editor: this}, BestInPlaceEditor.forms.textarea.submitHandler), this.cancelButton && this.element.find("input[type='button']").bind("click", {editor: this}, BestInPlaceEditor.forms.textarea.cancelButtonHandler), this.skipBlur || this.element.find("textarea").bind("blur", {editor: this}, BestInPlaceEditor.forms.textarea.blurHandler), this.element.find("textarea").bind("keyup", {editor: this}, BestInPlaceEditor.forms.textarea.keyupHandler), this.blurTimer = null, this.userClicked = !1
    }, getValue: function () {
      "use strict";
      return this.sanitizeValue(this.element.find("textarea").val())
    }, blurHandler: function (t) {
      "use strict";
      t.data.editor.okButton ? t.data.editor.blurTimer = setTimeout(function () {
        t.data.editor.userClicked || t.data.editor.abortIfConfirm()
      }, 500) : t.data.editor.cancelButton ? t.data.editor.blurTimer = setTimeout(function () {
        t.data.editor.userClicked || t.data.editor.update()
      }, 500) : t.data.editor.update()
    }, submitHandler: function (t) {
      "use strict";
      t.data.editor.userClicked = !0, clearTimeout(t.data.editor.blurTimer), t.data.editor.update()
    }, cancelButtonHandler: function (t) {
      "use strict";
      t.data.editor.userClicked = !0, clearTimeout(t.data.editor.blurTimer), t.data.editor.abortIfConfirm(), t.stopPropagation()
    }, keyupHandler: function (t) {
      "use strict";
      27 === t.keyCode && t.data.editor.abortIfConfirm()
    }
  }
}, BestInPlaceEditor.defaults = {
  locales: {},
  ajaxMethod: "put",
  ajaxDataType: "text",
  okButtonClass: "",
  cancelButtonClass: "",
  skipBlur: !1
}, BestInPlaceEditor.defaults.locales[""] = {
  confirmMessage: "Are you sure you want to discard your changes?",
  uninitializedForm: "The form was not properly initialized. getValue is unbound",
  placeHolder: "-"
}, jQuery.fn.best_in_place = function () {
  "use strict";

  function e(t) {
    if (!t.data("bestInPlaceEditor")) return t.data("bestInPlaceEditor", new BestInPlaceEditor(t)), !0
  }

  return jQuery(this.context).delegate(this.selector, "click", function () {
    var t = jQuery(this);
    e(t) && t.click()
  }), this.each(function () {
    e(jQuery(this))
  }), this
}, function () {
  function t(a) {
    function l(t, e, n, i, s, r) {
      for (; 0 <= s && s < r; s += a) {
        var o = i ? i[s] : s;
        n = e(n, t[o], o, t)
      }
      return n
    }

    return function (t, e, n, i) {
      e = b(e, i, 4);
      var s = !C(t) && v.keys(t), r = (s || t).length, o = 0 < a ? 0 : r - 1;
      return arguments.length < 3 && (n = t[s ? s[o] : o], o += a), l(t, e, n, s, o, r)
    }
  }

  function e(r) {
    return function (t, e, n) {
      e = _(e, n);
      for (var i = D(t), s = 0 < r ? 0 : i - 1; 0 <= s && s < i; s += r) if (e(t[s], s, t)) return s;
      return -1
    }
  }

  function n(r, o, a) {
    return function (t, e, n) {
      var i = 0, s = D(t);
      if ("number" == typeof n) 0 < r ? i = 0 <= n ? n : Math.max(n + s, i) : s = 0 <= n ? Math.min(n + 1, s) : n + s + 1; else if (a && n && s) return t[n = a(t, e)] === e ? n : -1;
      if (e != e) return 0 <= (n = o(u.call(t, i, s), v.isNaN)) ? n + i : -1;
      for (n = 0 < r ? i : s - 1; 0 <= n && n < s; n += r) if (t[n] === e) return n;
      return -1
    }
  }

  function i(t, e) {
    var n = E.length, i = t.constructor, s = v.isFunction(i) && i.prototype || a, r = "constructor";
    for (v.has(t, r) && !v.contains(e, r) && e.push(r); n--;) (r = E[n]) in t && t[r] !== s[r] && !v.contains(e, r) && e.push(r)
  }

  var s = this, r = s._, o = Array.prototype, a = Object.prototype, l = Function.prototype, c = o.push, u = o.slice,
    d = a.toString, p = a.hasOwnProperty, h = Array.isArray, f = Object.keys, m = l.bind, g = Object.create,
    y = function () {
    }, v = function (t) {
      return t instanceof v ? t : this instanceof v ? void (this._wrapped = t) : new v(t)
    };
  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : s._ = v, v.VERSION = "1.8.3";
  var b = function (s, r, t) {
    if (void 0 === r) return s;
    switch (null == t ? 3 : t) {
      case 1:
        return function (t) {
          return s.call(r, t)
        };
      case 2:
        return function (t, e) {
          return s.call(r, t, e)
        };
      case 3:
        return function (t, e, n) {
          return s.call(r, t, e, n)
        };
      case 4:
        return function (t, e, n, i) {
          return s.call(r, t, e, n, i)
        }
    }
    return function () {
      return s.apply(r, arguments)
    }
  }, _ = function (t, e, n) {
    return null == t ? v.identity : v.isFunction(t) ? b(t, e, n) : v.isObject(t) ? v.matcher(t) : v.property(t)
  };
  v.iteratee = function (t, e) {
    return _(t, e, Infinity)
  };
  var w = function (l, c) {
    return function (t) {
      var e = arguments.length;
      if (e < 2 || null == t) return t;
      for (var n = 1; n < e; n++) for (var i = arguments[n], s = l(i), r = s.length, o = 0; o < r; o++) {
        var a = s[o];
        c && void 0 !== t[a] || (t[a] = i[a])
      }
      return t
    }
  }, k = function (t) {
    if (!v.isObject(t)) return {};
    if (g) return g(t);
    y.prototype = t;
    var e = new y;
    return y.prototype = null, e
  }, x = function (e) {
    return function (t) {
      return null == t ? void 0 : t[e]
    }
  }, T = Math.pow(2, 53) - 1, D = x("length"), C = function (t) {
    var e = D(t);
    return "number" == typeof e && 0 <= e && e <= T
  };
  v.each = v.forEach = function (t, e, n) {
    var i, s;
    if (e = b(e, n), C(t)) for (i = 0, s = t.length; i < s; i++) e(t[i], i, t); else {
      var r = v.keys(t);
      for (i = 0, s = r.length; i < s; i++) e(t[r[i]], r[i], t)
    }
    return t
  }, v.map = v.collect = function (t, e, n) {
    e = _(e, n);
    for (var i = !C(t) && v.keys(t), s = (i || t).length, r = Array(s), o = 0; o < s; o++) {
      var a = i ? i[o] : o;
      r[o] = e(t[a], a, t)
    }
    return r
  }, v.reduce = v.foldl = v.inject = t(1), v.reduceRight = v.foldr = t(-1), v.find = v.detect = function (t, e, n) {
    var i;
    if (void 0 !== (i = C(t) ? v.findIndex(t, e, n) : v.findKey(t, e, n)) && -1 !== i) return t[i]
  }, v.filter = v.select = function (t, i, e) {
    var s = [];
    return i = _(i, e), v.each(t, function (t, e, n) {
      i(t, e, n) && s.push(t)
    }), s
  }, v.reject = function (t, e, n) {
    return v.filter(t, v.negate(_(e)), n)
  }, v.every = v.all = function (t, e, n) {
    e = _(e, n);
    for (var i = !C(t) && v.keys(t), s = (i || t).length, r = 0; r < s; r++) {
      var o = i ? i[r] : r;
      if (!e(t[o], o, t)) return !1
    }
    return !0
  }, v.some = v.any = function (t, e, n) {
    e = _(e, n);
    for (var i = !C(t) && v.keys(t), s = (i || t).length, r = 0; r < s; r++) {
      var o = i ? i[r] : r;
      if (e(t[o], o, t)) return !0
    }
    return !1
  }, v.contains = v.includes = v.include = function (t, e, n, i) {
    return C(t) || (t = v.values(t)), ("number" != typeof n || i) && (n = 0), 0 <= v.indexOf(t, e, n)
  }, v.invoke = function (t, n) {
    var i = u.call(arguments, 2), s = v.isFunction(n);
    return v.map(t, function (t) {
      var e = s ? n : t[n];
      return null == e ? e : e.apply(t, i)
    })
  }, v.pluck = function (t, e) {
    return v.map(t, v.property(e))
  }, v.where = function (t, e) {
    return v.filter(t, v.matcher(e))
  }, v.findWhere = function (t, e) {
    return v.find(t, v.matcher(e))
  }, v.max = function (t, i, e) {
    var n, s, r = -Infinity, o = -Infinity;
    if (null == i && null != t) for (var a = 0, l = (t = C(t) ? t : v.values(t)).length; a < l; a++) n = t[a], r < n && (r = n); else i = _(i, e), v.each(t, function (t, e, n) {
      s = i(t, e, n), (o < s || s === -Infinity && r === -Infinity) && (r = t, o = s)
    });
    return r
  }, v.min = function (t, i, e) {
    var n, s, r = Infinity, o = Infinity;
    if (null == i && null != t) for (var a = 0, l = (t = C(t) ? t : v.values(t)).length; a < l; a++) (n = t[a]) < r && (r = n); else i = _(i, e), v.each(t, function (t, e, n) {
      ((s = i(t, e, n)) < o || s === Infinity && r === Infinity) && (r = t, o = s)
    });
    return r
  }, v.shuffle = function (t) {
    for (var e, n = C(t) ? t : v.values(t), i = n.length, s = Array(i), r = 0; r < i; r++) (e = v.random(0, r)) !== r && (s[r] = s[e]), s[e] = n[r];
    return s
  }, v.sample = function (t, e, n) {
    return null == e || n ? (C(t) || (t = v.values(t)), t[v.random(t.length - 1)]) : v.shuffle(t).slice(0, Math.max(0, e))
  }, v.sortBy = function (t, i, e) {
    return i = _(i, e), v.pluck(v.map(t, function (t, e, n) {
      return {value: t, index: e, criteria: i(t, e, n)}
    }).sort(function (t, e) {
      var n = t.criteria, i = e.criteria;
      if (n !== i) {
        if (i < n || void 0 === n) return 1;
        if (n < i || void 0 === i) return -1
      }
      return t.index - e.index
    }), "value")
  };
  var S = function (o) {
    return function (i, s, t) {
      var r = {};
      return s = _(s, t), v.each(i, function (t, e) {
        var n = s(t, e, i);
        o(r, t, n)
      }), r
    }
  };
  v.groupBy = S(function (t, e, n) {
    v.has(t, n) ? t[n].push(e) : t[n] = [e]
  }), v.indexBy = S(function (t, e, n) {
    t[n] = e
  }), v.countBy = S(function (t, e, n) {
    v.has(t, n) ? t[n]++ : t[n] = 1
  }), v.toArray = function (t) {
    return t ? v.isArray(t) ? u.call(t) : C(t) ? v.map(t, v.identity) : v.values(t) : []
  }, v.size = function (t) {
    return null == t ? 0 : C(t) ? t.length : v.keys(t).length
  }, v.partition = function (t, i, e) {
    i = _(i, e);
    var s = [], r = [];
    return v.each(t, function (t, e, n) {
      (i(t, e, n) ? s : r).push(t)
    }), [s, r]
  }, v.first = v.head = v.take = function (t, e, n) {
    if (null != t) return null == e || n ? t[0] : v.initial(t, t.length - e)
  }, v.initial = function (t, e, n) {
    return u.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
  }, v.last = function (t, e, n) {
    if (null != t) return null == e || n ? t[t.length - 1] : v.rest(t, Math.max(0, t.length - e))
  }, v.rest = v.tail = v.drop = function (t, e, n) {
    return u.call(t, null == e || n ? 1 : e)
  }, v.compact = function (t) {
    return v.filter(t, v.identity)
  };
  var $ = function (t, e, n, i) {
    for (var s = [], r = 0, o = i || 0, a = D(t); o < a; o++) {
      var l = t[o];
      if (C(l) && (v.isArray(l) || v.isArguments(l))) {
        e || (l = $(l, e, n));
        var c = 0, u = l.length;
        for (s.length += u; c < u;) s[r++] = l[c++]
      } else n || (s[r++] = l)
    }
    return s
  };
  v.flatten = function (t, e) {
    return $(t, e, !1)
  }, v.without = function (t) {
    return v.difference(t, u.call(arguments, 1))
  }, v.uniq = v.unique = function (t, e, n, i) {
    v.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = _(n, i));
    for (var s = [], r = [], o = 0, a = D(t); o < a; o++) {
      var l = t[o], c = n ? n(l, o, t) : l;
      e ? (o && r === c || s.push(l), r = c) : n ? v.contains(r, c) || (r.push(c), s.push(l)) : v.contains(s, l) || s.push(l)
    }
    return s
  }, v.union = function () {
    return v.uniq($(arguments, !0, !0))
  }, v.intersection = function (t) {
    for (var e = [], n = arguments.length, i = 0, s = D(t); i < s; i++) {
      var r = t[i];
      if (!v.contains(e, r)) {
        for (var o = 1; o < n && v.contains(arguments[o], r); o++) ;
        o === n && e.push(r)
      }
    }
    return e
  }, v.difference = function (t) {
    var e = $(arguments, !0, !0, 1);
    return v.filter(t, function (t) {
      return !v.contains(e, t)
    })
  }, v.zip = function () {
    return v.unzip(arguments)
  }, v.unzip = function (t) {
    for (var e = t && v.max(t, D).length || 0, n = Array(e), i = 0; i < e; i++) n[i] = v.pluck(t, i);
    return n
  }, v.object = function (t, e) {
    for (var n = {}, i = 0, s = D(t); i < s; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
    return n
  }, v.findIndex = e(1), v.findLastIndex = e(-1), v.sortedIndex = function (t, e, n, i) {
    for (var s = (n = _(n, i, 1))(e), r = 0, o = D(t); r < o;) {
      var a = Math.floor((r + o) / 2);
      n(t[a]) < s ? r = a + 1 : o = a
    }
    return r
  }, v.indexOf = n(1, v.findIndex, v.sortedIndex), v.lastIndexOf = n(-1, v.findLastIndex), v.range = function (t, e, n) {
    null == e && (e = t || 0, t = 0), n = n || 1;
    for (var i = Math.max(Math.ceil((e - t) / n), 0), s = Array(i), r = 0; r < i; r++, t += n) s[r] = t;
    return s
  };
  var M = function (t, e, n, i, s) {
    if (!(i instanceof e)) return t.apply(n, s);
    var r = k(t.prototype), o = t.apply(r, s);
    return v.isObject(o) ? o : r
  };
  v.bind = function (t, e) {
    if (m && t.bind === m) return m.apply(t, u.call(arguments, 1));
    if (!v.isFunction(t)) throw new TypeError("Bind must be called on a function");
    var n = u.call(arguments, 2), i = function () {
      return M(t, i, e, this, n.concat(u.call(arguments)))
    };
    return i
  }, v.partial = function (s) {
    var r = u.call(arguments, 1), o = function () {
      for (var t = 0, e = r.length, n = Array(e), i = 0; i < e; i++) n[i] = r[i] === v ? arguments[t++] : r[i];
      for (; t < arguments.length;) n.push(arguments[t++]);
      return M(s, o, this, this, n)
    };
    return o
  }, v.bindAll = function (t) {
    var e, n, i = arguments.length;
    if (i <= 1) throw new Error("bindAll must be passed function names");
    for (e = 1; e < i; e++) t[n = arguments[e]] = v.bind(t[n], t);
    return t
  }, v.memoize = function (i, s) {
    var r = function (t) {
      var e = r.cache, n = "" + (s ? s.apply(this, arguments) : t);
      return v.has(e, n) || (e[n] = i.apply(this, arguments)), e[n]
    };
    return r.cache = {}, r
  }, v.delay = function (t, e) {
    var n = u.call(arguments, 2);
    return setTimeout(function () {
      return t.apply(null, n)
    }, e)
  }, v.defer = v.partial(v.delay, v, 1), v.throttle = function (n, i, s) {
    var r, o, a, l = null, c = 0;
    s || (s = {});
    var u = function () {
      c = !1 === s.leading ? 0 : v.now(), l = null, a = n.apply(r, o), l || (r = o = null)
    };
    return function () {
      var t = v.now();
      c || !1 !== s.leading || (c = t);
      var e = i - (t - c);
      return r = this, o = arguments, e <= 0 || i < e ? (l && (clearTimeout(l), l = null), c = t, a = n.apply(r, o), l || (r = o = null)) : l || !1 === s.trailing || (l = setTimeout(u, e)), a
    }
  }, v.debounce = function (e, n, i) {
    var s, r, o, a, l, c = function () {
      var t = v.now() - a;
      t < n && 0 <= t ? s = setTimeout(c, n - t) : (s = null, i || (l = e.apply(o, r), s || (o = r = null)))
    };
    return function () {
      o = this, r = arguments, a = v.now();
      var t = i && !s;
      return s || (s = setTimeout(c, n)), t && (l = e.apply(o, r), o = r = null), l
    }
  }, v.wrap = function (t, e) {
    return v.partial(e, t)
  }, v.negate = function (t) {
    return function () {
      return !t.apply(this, arguments)
    }
  }, v.compose = function () {
    var n = arguments, i = n.length - 1;
    return function () {
      for (var t = i, e = n[i].apply(this, arguments); t--;) e = n[t].call(this, e);
      return e
    }
  }, v.after = function (t, e) {
    return function () {
      if (--t < 1) return e.apply(this, arguments)
    }
  }, v.before = function (t, e) {
    var n;
    return function () {
      return 0 < --t && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
    }
  }, v.once = v.partial(v.before, 2);
  var A = !{toString: null}.propertyIsEnumerable("toString"),
    E = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
  v.keys = function (t) {
    if (!v.isObject(t)) return [];
    if (f) return f(t);
    var e = [];
    for (var n in t) v.has(t, n) && e.push(n);
    return A && i(t, e), e
  }, v.allKeys = function (t) {
    if (!v.isObject(t)) return [];
    var e = [];
    for (var n in t) e.push(n);
    return A && i(t, e), e
  }, v.values = function (t) {
    for (var e = v.keys(t), n = e.length, i = Array(n), s = 0; s < n; s++) i[s] = t[e[s]];
    return i
  }, v.mapObject = function (t, e, n) {
    e = _(e, n);
    for (var i, s = v.keys(t), r = s.length, o = {}, a = 0; a < r; a++) o[i = s[a]] = e(t[i], i, t);
    return o
  }, v.pairs = function (t) {
    for (var e = v.keys(t), n = e.length, i = Array(n), s = 0; s < n; s++) i[s] = [e[s], t[e[s]]];
    return i
  }, v.invert = function (t) {
    for (var e = {}, n = v.keys(t), i = 0, s = n.length; i < s; i++) e[t[n[i]]] = n[i];
    return e
  }, v.functions = v.methods = function (t) {
    var e = [];
    for (var n in t) v.isFunction(t[n]) && e.push(n);
    return e.sort()
  }, v.extend = w(v.allKeys), v.extendOwn = v.assign = w(v.keys), v.findKey = function (t, e, n) {
    e = _(e, n);
    for (var i, s = v.keys(t), r = 0, o = s.length; r < o; r++) if (e(t[i = s[r]], i, t)) return i
  }, v.pick = function (t, e, n) {
    var i, s, r = {}, o = t;
    if (null == o) return r;
    v.isFunction(e) ? (s = v.allKeys(o), i = b(e, n)) : (s = $(arguments, !1, !1, 1), i = function (t, e, n) {
      return e in n
    }, o = Object(o));
    for (var a = 0, l = s.length; a < l; a++) {
      var c = s[a], u = o[c];
      i(u, c, o) && (r[c] = u)
    }
    return r
  }, v.omit = function (t, e, n) {
    if (v.isFunction(e)) e = v.negate(e); else {
      var i = v.map($(arguments, !1, !1, 1), String);
      e = function (t, e) {
        return !v.contains(i, e)
      }
    }
    return v.pick(t, e, n)
  }, v.defaults = w(v.allKeys, !0), v.create = function (t, e) {
    var n = k(t);
    return e && v.extendOwn(n, e), n
  }, v.clone = function (t) {
    return v.isObject(t) ? v.isArray(t) ? t.slice() : v.extend({}, t) : t
  }, v.tap = function (t, e) {
    return e(t), t
  }, v.isMatch = function (t, e) {
    var n = v.keys(e), i = n.length;
    if (null == t) return !i;
    for (var s = Object(t), r = 0; r < i; r++) {
      var o = n[r];
      if (e[o] !== s[o] || !(o in s)) return !1
    }
    return !0
  };
  var j = function (t, e, n, i) {
    if (t === e) return 0 !== t || 1 / t == 1 / e;
    if (null == t || null == e) return t === e;
    t instanceof v && (t = t._wrapped), e instanceof v && (e = e._wrapped);
    var s = d.call(t);
    if (s !== d.call(e)) return !1;
    switch (s) {
      case"[object RegExp]":
      case"[object String]":
        return "" + t == "" + e;
      case"[object Number]":
        return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
      case"[object Date]":
      case"[object Boolean]":
        return +t == +e
    }
    var r = "[object Array]" === s;
    if (!r) {
      if ("object" != typeof t || "object" != typeof e) return !1;
      var o = t.constructor, a = e.constructor;
      if (o !== a && !(v.isFunction(o) && o instanceof o && v.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1
    }
    i = i || [];
    for (var l = (n = n || []).length; l--;) if (n[l] === t) return i[l] === e;
    if (n.push(t), i.push(e), r) {
      if ((l = t.length) !== e.length) return !1;
      for (; l--;) if (!j(t[l], e[l], n, i)) return !1
    } else {
      var c, u = v.keys(t);
      if (l = u.length, v.keys(e).length !== l) return !1;
      for (; l--;) if (c = u[l], !v.has(e, c) || !j(t[c], e[c], n, i)) return !1
    }
    return n.pop(), i.pop(), !0
  };
  v.isEqual = function (t, e) {
    return j(t, e)
  }, v.isEmpty = function (t) {
    return null == t || (C(t) && (v.isArray(t) || v.isString(t) || v.isArguments(t)) ? 0 === t.length : 0 === v.keys(t).length)
  }, v.isElement = function (t) {
    return !(!t || 1 !== t.nodeType)
  }, v.isArray = h || function (t) {
    return "[object Array]" === d.call(t)
  }, v.isObject = function (t) {
    var e = typeof t;
    return "function" === e || "object" === e && !!t
  }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
    v["is" + e] = function (t) {
      return d.call(t) === "[object " + e + "]"
    }
  }), v.isArguments(arguments) || (v.isArguments = function (t) {
    return v.has(t, "callee")
  }), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function (t) {
    return "function" == typeof t || !1
  }), v.isFinite = function (t) {
    return isFinite(t) && !isNaN(parseFloat(t))
  }, v.isNaN = function (t) {
    return v.isNumber(t) && t !== +t
  }, v.isBoolean = function (t) {
    return !0 === t || !1 === t || "[object Boolean]" === d.call(t)
  }, v.isNull = function (t) {
    return null === t
  }, v.isUndefined = function (t) {
    return void 0 === t
  }, v.has = function (t, e) {
    return null != t && p.call(t, e)
  }, v.noConflict = function () {
    return s._ = r, this
  }, v.identity = function (t) {
    return t
  }, v.constant = function (t) {
    return function () {
      return t
    }
  }, v.noop = function () {
  }, v.property = x, v.propertyOf = function (e) {
    return null == e ? function () {
    } : function (t) {
      return e[t]
    }
  }, v.matcher = v.matches = function (e) {
    return e = v.extendOwn({}, e), function (t) {
      return v.isMatch(t, e)
    }
  }, v.times = function (t, e, n) {
    var i = Array(Math.max(0, t));
    e = b(e, n, 1);
    for (var s = 0; s < t; s++) i[s] = e(s);
    return i
  }, v.random = function (t, e) {
    return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
  }, v.now = Date.now || function () {
    return (new Date).getTime()
  };
  var O = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, I = v.invert(O),
    N = function (e) {
      var n = function (t) {
        return e[t]
      }, t = "(?:" + v.keys(e).join("|") + ")", i = RegExp(t), s = RegExp(t, "g");
      return function (t) {
        return t = null == t ? "" : "" + t, i.test(t) ? t.replace(s, n) : t
      }
    };
  v.escape = N(O), v.unescape = N(I), v.result = function (t, e, n) {
    var i = null == t ? void 0 : t[e];
    return void 0 === i && (i = n), v.isFunction(i) ? i.call(t) : i
  };
  var L = 0;
  v.uniqueId = function (t) {
    var e = ++L + "";
    return t ? t + e : e
  }, v.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
  var P = /(.)^/, H = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
    z = /\\|'|\r|\n|\u2028|\u2029/g, F = function (t) {
      return "\\" + H[t]
    };
  v.template = function (r, t, e) {
    !t && e && (t = e), t = v.defaults({}, t, v.templateSettings);
    var n = RegExp([(t.escape || P).source, (t.interpolate || P).source, (t.evaluate || P).source].join("|") + "|$", "g"),
      o = 0, a = "__p+='";
    r.replace(n, function (t, e, n, i, s) {
      return a += r.slice(o, s).replace(z, F), o = s + t.length, e ? a += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'" : n ? a += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
    }), a += "';\n", t.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
    try {
      var i = new Function(t.variable || "obj", "_", a)
    } catch (c) {
      throw c.source = a, c
    }
    var s = function (t) {
      return i.call(this, t, v)
    }, l = t.variable || "obj";
    return s.source = "function(" + l + "){\n" + a + "}", s
  }, v.chain = function (t) {
    var e = v(t);
    return e._chain = !0, e
  };
  var R = function (t, e) {
    return t._chain ? v(e).chain() : e
  };
  v.mixin = function (n) {
    v.each(v.functions(n), function (t) {
      var e = v[t] = n[t];
      v.prototype[t] = function () {
        var t = [this._wrapped];
        return c.apply(t, arguments), R(this, e.apply(v, t))
      }
    })
  }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
    var n = o[e];
    v.prototype[e] = function () {
      var t = this._wrapped;
      return n.apply(t, arguments), "shift" !== e && "splice" !== e || 0 !== t.length || delete t[0], R(this, t)
    }
  }), v.each(["concat", "join", "slice"], function (t) {
    var e = o[t];
    v.prototype[t] = function () {
      return R(this, e.apply(this._wrapped, arguments))
    }
  }), v.prototype.value = function () {
    return this._wrapped
  }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function () {
    return "" + this._wrapped
  }, "function" == typeof define && define.amd && define("underscore", [], function () {
    return v
  })
}.call(this), function () {
  null == window.UiKit && (window.UiKit = {})
}.call(this), function (n) {
  "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function (t, e) {
    return e === undefined && (e = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), n(e), e
  } : n(jQuery)
}(function (n) {
  var t = function () {
    if (n && n.fn && n.fn.select2 && n.fn.select2.amd) var t = n.fn.select2.amd;
    var s, u, d, e;
    return t && t.requirejs || (t ? u = t : t = {}, function (h) {
      function f(t, e) {
        return n.call(t, e)
      }

      function o(t, e) {
        var n, i, s, r, o, a, l, c, u, d, p, h = e && e.split("/"), f = x.map, m = f && f["*"] || {};
        if (t) {
          for (o = (t = t.split("/")).length - 1, x.nodeIdCompat && D.test(t[o]) && (t[o] = t[o].replace(D, "")), "." === t[0].charAt(0) && h && (t = h.slice(0, h.length - 1).concat(t)), u = 0; u < t.length; u++) if ("." === (p = t[u])) t.splice(u, 1), u -= 1; else if (".." === p) {
            if (0 === u || 1 === u && ".." === t[2] || ".." === t[u - 1]) continue;
            0 < u && (t.splice(u - 1, 2), u -= 2)
          }
          t = t.join("/")
        }
        if ((h || m) && f) {
          for (u = (n = t.split("/")).length; 0 < u; u -= 1) {
            if (i = n.slice(0, u).join("/"), h) for (d = h.length; 0 < d; d -= 1) if ((s = f[h.slice(0, d).join("/")]) && (s = s[i])) {
              r = s, a = u;
              break
            }
            if (r) break;
            !l && m && m[i] && (l = m[i], c = u)
          }
          !r && l && (r = l, a = c), r && (n.splice(0, a, r), t = n.join("/"))
        }
        return t
      }

      function m(e, n) {
        return function () {
          var t = i.call(arguments, 0);
          return "string" != typeof t[0] && 1 === t.length && t.push(null), c.apply(h, t.concat([e, n]))
        }
      }

      function a(e) {
        return function (t) {
          return o(t, e)
        }
      }

      function g(e) {
        return function (t) {
          w[e] = t
        }
      }

      function y(t) {
        if (f(k, t)) {
          var e = k[t];
          delete k[t], T[t] = !0, r.apply(h, e)
        }
        if (!f(w, t) && !f(T, t)) throw new Error("No " + t);
        return w[t]
      }

      function l(t) {
        var e, n = t ? t.indexOf("!") : -1;
        return -1 < n && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t]
      }

      function v(t) {
        return t ? l(t) : []
      }

      function e(t) {
        return function () {
          return x && x.config && x.config[t] || {}
        }
      }

      var r, c, b, _, w = {}, k = {}, x = {}, T = {}, n = Object.prototype.hasOwnProperty, i = [].slice, D = /\.js$/;
      b = function (t, e) {
        var n, i = l(t), s = i[0], r = e[1];
        return t = i[1], s && (n = y(s = o(s, r))), s ? t = n && n.normalize ? n.normalize(t, a(r)) : o(t, r) : (s = (i = l(t = o(t, r)))[0], t = i[1], s && (n = y(s))), {
          f: s ? s + "!" + t : t,
          n: t,
          pr: s,
          p: n
        }
      }, _ = {
        require: function (t) {
          return m(t)
        }, exports: function (t) {
          var e = w[t];
          return void 0 !== e ? e : w[t] = {}
        }, module: function (t) {
          return {id: t, uri: "", exports: w[t], config: e(t)}
        }
      }, r = function (t, e, n, i) {
        var s, r, o, a, l, c, u, d = [], p = typeof n;
        if (c = v(i = i || t), "undefined" === p || "function" === p) {
          for (e = !e.length && n.length ? ["require", "exports", "module"] : e, l = 0; l < e.length; l += 1) if ("require" === (r = (a = b(e[l], c)).f)) d[l] = _.require(t); else if ("exports" === r) d[l] = _.exports(t), u = !0; else if ("module" === r) s = d[l] = _.module(t); else if (f(w, r) || f(k, r) || f(T, r)) d[l] = y(r); else {
            if (!a.p) throw new Error(t + " missing " + r);
            a.p.load(a.n, m(i, !0), g(r), {}), d[l] = w[r]
          }
          o = n ? n.apply(w[t], d) : undefined, t && (s && s.exports !== h && s.exports !== w[t] ? w[t] = s.exports : o === h && u || (w[t] = o))
        } else t && (w[t] = n)
      }, s = u = c = function (t, e, n, i, s) {
        if ("string" == typeof t) return _[t] ? _[t](e) : y(b(t, v(e)).f);
        if (!t.splice) {
          if ((x = t).deps && c(x.deps, x.callback), !e) return;
          e.splice ? (t = e, e = n, n = null) : t = h
        }
        return e = e || function () {
        }, "function" == typeof n && (n = i, i = s), i ? r(h, t, e, n) : setTimeout(function () {
          r(h, t, e, n)
        }, 4), c
      }, c.config = function (t) {
        return c(t)
      }, s._defined = w, (d = function (t, e, n) {
        if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
        e.splice || (n = e, e = []), f(w, t) || f(k, t) || (k[t] = [t, e, n])
      }).amd = {jQuery: !0}
    }(), t.requirejs = s, t.require = u, t.define = d), t.define("almond", function () {
    }), t.define("jquery", [], function () {
      var t = n || $;
      return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
    }), t.define("select2/utils", ["jquery"], function (r) {
      function d(t) {
        var e = t.prototype, n = [];
        for (var i in e) {
          "function" == typeof e[i] && ("constructor" !== i && n.push(i))
        }
        return n
      }

      var s = {
        Extend: function (t, e) {
          function n() {
            this.constructor = t
          }

          var i = {}.hasOwnProperty;
          for (var s in e) i.call(e, s) && (t[s] = e[s]);
          return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, Decorate: function (i, s) {
          function r() {
            var t = Array.prototype.unshift, e = s.prototype.constructor.length, n = i.prototype.constructor;
            0 < e && (t.call(arguments, i.prototype.constructor), n = s.prototype.constructor), n.apply(this, arguments)
          }

          function t() {
            this.constructor = r
          }

          var e = d(s), n = d(i);
          s.displayName = i.displayName, r.prototype = new t;
          for (var o = 0; o < n.length; o++) {
            var a = n[o];
            r.prototype[a] = i.prototype[a]
          }
          for (var l = function (t) {
            var e = function () {
            };
            t in r.prototype && (e = r.prototype[t]);
            var n = s.prototype[t];
            return function () {
              return Array.prototype.unshift.call(arguments, e), n.apply(this, arguments)
            }
          }, c = 0; c < e.length; c++) {
            var u = e[c];
            r.prototype[u] = l(u)
          }
          return r
        }
      }, t = function () {
        this.listeners = {}
      };
      t.prototype.on = function (t, e) {
        this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
      }, t.prototype.trigger = function (t) {
        var e = Array.prototype.slice, n = e.call(arguments, 1);
        this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = t) in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
      }, t.prototype.invoke = function (t, e) {
        for (var n = 0, i = t.length; n < i; n++) t[n].apply(this, e)
      }, s.Observable = t, s.generateChars = function (t) {
        for (var e = "", n = 0; n < t; n++) {
          e += Math.floor(36 * Math.random()).toString(36)
        }
        return e
      }, s.bind = function (t, e) {
        return function () {
          t.apply(e, arguments)
        }
      }, s._convertData = function (t) {
        for (var e in t) {
          var n = e.split("-"), i = t;
          if (1 !== n.length) {
            for (var s = 0; s < n.length; s++) {
              var r = n[s];
              (r = r.substring(0, 1).toLowerCase() + r.substring(1)) in i || (i[r] = {}), s == n.length - 1 && (i[r] = t[e]), i = i[r]
            }
            delete t[e]
          }
        }
        return t
      }, s.hasScroll = function (t, e) {
        var n = r(e), i = e.style.overflowX, s = e.style.overflowY;
        return (i !== s || "hidden" !== s && "visible" !== s) && ("scroll" === i || "scroll" === s || (n.innerHeight() < e.scrollHeight || n.innerWidth() < e.scrollWidth))
      }, s.escapeMarkup = function (t) {
        var e = {"\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;"};
        return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function (t) {
          return e[t]
        })
      }, s.appendMany = function (t, e) {
        if ("1.7" === r.fn.jquery.substr(0, 3)) {
          var n = r();
          r.map(e, function (t) {
            n = n.add(t)
          }), e = n
        }
        t.append(e)
      }, s.__cache = {};
      var n = 0;
      return s.GetUniqueElementId = function (t) {
        var e = t.getAttribute("data-select2-id");
        return null == e && (t.id ? (e = t.id, t.setAttribute("data-select2-id", e)) : (t.setAttribute("data-select2-id", ++n), e = n.toString())), e
      }, s.StoreData = function (t, e, n) {
        var i = s.GetUniqueElementId(t);
        s.__cache[i] || (s.__cache[i] = {}), s.__cache[i][e] = n
      }, s.GetData = function (t, e) {
        var n = s.GetUniqueElementId(t);
        return e ? s.__cache[n] && null != s.__cache[n][e] ? s.__cache[n][e] : r(t).data(e) : s.__cache[n]
      }, s.RemoveData = function (t) {
        var e = s.GetUniqueElementId(t);
        null != s.__cache[e] && delete s.__cache[e], t.removeAttribute("data-select2-id")
      }, s
    }), t.define("select2/results", ["jquery", "./utils"], function (h, f) {
      function i(t, e, n) {
        this.$element = t, this.data = n, this.options = e, i.__super__.constructor.call(this)
      }

      return f.Extend(i, f.Observable), i.prototype.render = function () {
        var t = h('<ul class="select2-results__options" role="listbox"></ul>');
        return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t
      }, i.prototype.clear = function () {
        this.$results.empty()
      }, i.prototype.displayMessage = function (t) {
        var e = this.options.get("escapeMarkup");
        this.clear(), this.hideLoading();
        var n = h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
          i = this.options.get("translations").get(t.message);
        n.append(e(i(t.args))), n[0].className += " select2-results__message", this.$results.append(n)
      }, i.prototype.hideMessages = function () {
        this.$results.find(".select2-results__message").remove()
      }, i.prototype.append = function (t) {
        this.hideLoading();
        var e = [];
        if (null != t.results && 0 !== t.results.length) {
          t.results = this.sort(t.results);
          for (var n = 0; n < t.results.length; n++) {
            var i = t.results[n], s = this.option(i);
            e.push(s)
          }
          this.$results.append(e)
        } else 0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"})
      }, i.prototype.position = function (t, e) {
        e.find(".select2-results").append(t)
      }, i.prototype.sort = function (t) {
        return this.options.get("sorter")(t)
      }, i.prototype.highlightFirstItem = function () {
        var t = this.$results.find(".select2-results__option[aria-selected]"), e = t.filter("[aria-selected=true]");
        0 < e.length ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible()
      }, i.prototype.setClasses = function () {
        var e = this;
        this.data.current(function (t) {
          var i = h.map(t, function (t) {
            return t.id.toString()
          });
          e.$results.find(".select2-results__option[aria-selected]").each(function () {
            var t = h(this), e = f.GetData(this, "data"), n = "" + e.id;
            null != e.element && e.element.selected || null == e.element && -1 < h.inArray(n, i) ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
          })
        })
      }, i.prototype.showLoading = function (t) {
        this.hideLoading();
        var e = {disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(t)},
          n = this.option(e);
        n.className += " loading-results", this.$results.prepend(n)
      }, i.prototype.hideLoading = function () {
        this.$results.find(".loading-results").remove()
      }, i.prototype.option = function (t) {
        var e = document.createElement("li");
        e.className = "select2-results__option";
        var n = {role: "option", "aria-selected": "false"},
          i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
        for (var s in (null != t.element && i.call(t.element, ":disabled") || null == t.element && t.disabled) && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == t.id && delete n["aria-selected"], null != t._resultId && (e.id = t._resultId), t.title && (e.title = t.title), t.children && (n.role = "group", n["aria-label"] = t.text, delete n["aria-selected"]), n) {
          var r = n[s];
          e.setAttribute(s, r)
        }
        if (t.children) {
          var o = h(e), a = document.createElement("strong");
          a.className = "select2-results__group";
          h(a);
          this.template(t, a);
          for (var l = [], c = 0; c < t.children.length; c++) {
            var u = t.children[c], d = this.option(u);
            l.push(d)
          }
          var p = h("<ul></ul>", {"class": "select2-results__options select2-results__options--nested"});
          p.append(l), o.append(a), o.append(p)
        } else this.template(t, e);
        return f.StoreData(e, "data", t), e
      }, i.prototype.bind = function (e) {
        var l = this, t = e.id + "-results";
        this.$results.attr("id", t), e.on("results:all", function (t) {
          l.clear(), l.append(t.data), e.isOpen() && (l.setClasses(), l.highlightFirstItem())
        }), e.on("results:append", function (t) {
          l.append(t.data), e.isOpen() && l.setClasses()
        }), e.on("query", function (t) {
          l.hideMessages(), l.showLoading(t)
        }), e.on("select", function () {
          e.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem())
        }), e.on("unselect", function () {
          e.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem())
        }), e.on("open", function () {
          l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible()
        }), e.on("close", function () {
          l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant")
        }), e.on("results:toggle", function () {
          var t = l.getHighlightedResults();
          0 !== t.length && t.trigger("mouseup")
        }), e.on("results:select", function () {
          var t = l.getHighlightedResults();
          if (0 !== t.length) {
            var e = f.GetData(t[0], "data");
            "true" == t.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {data: e})
          }
        }), e.on("results:previous", function () {
          var t = l.getHighlightedResults(), e = l.$results.find("[aria-selected]"), n = e.index(t);
          if (!(n <= 0)) {
            var i = n - 1;
            0 === t.length && (i = 0);
            var s = e.eq(i);
            s.trigger("mouseenter");
            var r = l.$results.offset().top, o = s.offset().top, a = l.$results.scrollTop() + (o - r);
            0 === i ? l.$results.scrollTop(0) : o - r < 0 && l.$results.scrollTop(a)
          }
        }), e.on("results:next", function () {
          var t = l.getHighlightedResults(), e = l.$results.find("[aria-selected]"), n = e.index(t) + 1;
          if (!(n >= e.length)) {
            var i = e.eq(n);
            i.trigger("mouseenter");
            var s = l.$results.offset().top + l.$results.outerHeight(!1),
              r = i.offset().top + i.outerHeight(!1), o = l.$results.scrollTop() + r - s;
            0 === n ? l.$results.scrollTop(0) : s < r && l.$results.scrollTop(o)
          }
        }), e.on("results:focus", function (t) {
          t.element.addClass("select2-results__option--highlighted")
        }), e.on("results:message", function (t) {
          l.displayMessage(t)
        }), h.fn.mousewheel && this.$results.on("mousewheel", function (t) {
          var e = l.$results.scrollTop(), n = l.$results.get(0).scrollHeight - e + t.deltaY,
            i = 0 < t.deltaY && e - t.deltaY <= 0, s = t.deltaY < 0 && n <= l.$results.height();
          i ? (l.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : s && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), t.preventDefault(), t.stopPropagation())
        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (t) {
          var e = h(this), n = f.GetData(this, "data");
          "true" !== e.attr("aria-selected") ? l.trigger("select", {
            originalEvent: t,
            data: n
          }) : l.options.get("multiple") ? l.trigger("unselect", {originalEvent: t, data: n}) : l.trigger("close", {})
        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function () {
          var t = f.GetData(this, "data");
          l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
            data: t,
            element: h(this)
          })
        })
      }, i.prototype.getHighlightedResults = function () {
        return this.$results.find(".select2-results__option--highlighted")
      }, i.prototype.destroy = function () {
        this.$results.remove()
      }, i.prototype.ensureHighlightVisible = function () {
        var t = this.getHighlightedResults();
        if (0 !== t.length) {
          var e = this.$results.find("[aria-selected]").index(t), n = this.$results.offset().top, i = t.offset().top,
            s = this.$results.scrollTop() + (i - n), r = i - n;
          s -= 2 * t.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || r < 0) && this.$results.scrollTop(s)
        }
      }, i.prototype.template = function (t, e) {
        var n = this.options.get("templateResult"), i = this.options.get("escapeMarkup"), s = n(t, e);
        null == s ? e.style.display = "none" : "string" == typeof s ? e.innerHTML = i(s) : h(e).append(s)
      }, i
    }), t.define("select2/keys", [], function () {
      return {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      }
    }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, i, s) {
      function r(t, e) {
        this.$element = t, this.options = e, r.__super__.constructor.call(this)
      }

      return i.Extend(r, i.Observable), r.prototype.render = function () {
        var t = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
        return this._tabindex = 0, null != i.GetData(this.$element[0], "old-tabindex") ? this._tabindex = i.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), t.attr("aria-disabled", "false"), this.$selection = t
      }, r.prototype.bind = function (t) {
        var e = this, n = t.id + "-results";
        this.container = t, this.$selection.on("focus", function (t) {
          e.trigger("focus", t)
        }), this.$selection.on("blur", function (t) {
          e._handleBlur(t)
        }), this.$selection.on("keydown", function (t) {
          e.trigger("keypress", t), t.which === s.SPACE && t.preventDefault()
        }), t.on("results:focus", function (t) {
          e.$selection.attr("aria-activedescendant", t.data._resultId)
        }), t.on("selection:update", function (t) {
          e.update(t.data)
        }), t.on("open", function () {
          e.$selection.attr("aria-expanded", "true"), e.$selection.attr("aria-owns", n), e._attachCloseHandler(t)
        }), t.on("close", function () {
          e.$selection.attr("aria-expanded", "false"), e.$selection.removeAttr("aria-activedescendant"), e.$selection.removeAttr("aria-owns"), e.$selection.trigger("focus"), e._detachCloseHandler(t)
        }), t.on("enable", function () {
          e.$selection.attr("tabindex", e._tabindex), e.$selection.attr("aria-disabled", "false")
        }), t.on("disable", function () {
          e.$selection.attr("tabindex", "-1"), e.$selection.attr("aria-disabled", "true")
        })
      }, r.prototype._handleBlur = function (t) {
        var e = this;
        window.setTimeout(function () {
          document.activeElement == e.$selection[0] || n.contains(e.$selection[0], document.activeElement) || e.trigger("blur", t)
        }, 1)
      }, r.prototype._attachCloseHandler = function (t) {
        n(document.body).on("mousedown.select2." + t.id, function (t) {
          var e = n(t.target).closest(".select2");
          n(".select2.select2-container--open").each(function () {
            this != e[0] && i.GetData(this, "element").select2("close")
          })
        })
      }, r.prototype._detachCloseHandler = function (t) {
        n(document.body).off("mousedown.select2." + t.id)
      }, r.prototype.position = function (t, e) {
        e.find(".selection").append(t)
      }, r.prototype.destroy = function () {
        this._detachCloseHandler(this.container)
      }, r.prototype.update = function () {
        throw new Error("The `update` method must be defined in child classes.")
      }, r.prototype.isEnabled = function () {
        return !this.isDisabled()
      }, r.prototype.isDisabled = function () {
        return this.options.get("disabled")
      }, r
    }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (t, e, n) {
      function s() {
        s.__super__.constructor.apply(this, arguments)
      }

      return n.Extend(s, e), s.prototype.render = function () {
        var t = s.__super__.render.call(this);
        return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
      }, s.prototype.bind = function (t, e) {
        var n = this;
        s.__super__.bind.apply(this, arguments);
        var i = t.id + "-container";
        this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (t) {
          1 === t.which && n.trigger("toggle", {originalEvent: t})
        }), this.$selection.on("focus", function () {
        }), this.$selection.on("blur", function () {
        }), t.on("focus", function () {
          t.isOpen() || n.$selection.trigger("focus")
        })
      }, s.prototype.clear = function () {
        var t = this.$selection.find(".select2-selection__rendered");
        t.empty(), t.removeAttr("title")
      }, s.prototype.display = function (t, e) {
        var n = this.options.get("templateSelection");
        return this.options.get("escapeMarkup")(n(t, e))
      }, s.prototype.selectionContainer = function () {
        return t("<span></span>")
      }, s.prototype.update = function (t) {
        if (0 !== t.length) {
          var e = t[0], n = this.$selection.find(".select2-selection__rendered"), i = this.display(e, n);
          n.empty().append(i);
          var s = e.title || e.text;
          s ? n.attr("title", s) : n.removeAttr("title")
        } else this.clear()
      }, s
    }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (s, t, l) {
      function n(t, e) {
        n.__super__.constructor.apply(this, arguments)
      }

      return l.Extend(n, t), n.prototype.render = function () {
        var t = n.__super__.render.call(this);
        return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
      }, n.prototype.bind = function (t, e) {
        var i = this;
        n.__super__.bind.apply(this, arguments), this.$selection.on("click", function (t) {
          i.trigger("toggle", {originalEvent: t})
        }), this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
          if (!i.isDisabled()) {
            var e = s(this).parent(), n = l.GetData(e[0], "data");
            i.trigger("unselect", {originalEvent: t, data: n})
          }
        })
      }, n.prototype.clear = function () {
        var t = this.$selection.find(".select2-selection__rendered");
        t.empty(), t.removeAttr("title")
      }, n.prototype.display = function (t, e) {
        var n = this.options.get("templateSelection");
        return this.options.get("escapeMarkup")(n(t, e))
      }, n.prototype.selectionContainer = function () {
        return s('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
      }, n.prototype.update = function (t) {
        if (this.clear(), 0 !== t.length) {
          for (var e = [], n = 0; n < t.length; n++) {
            var i = t[n], s = this.selectionContainer(), r = this.display(i, s);
            s.append(r);
            var o = i.title || i.text;
            o && s.attr("title", o), l.StoreData(s[0], "data", i), e.push(s)
          }
          var a = this.$selection.find(".select2-selection__rendered");
          l.appendMany(a, e)
        }
      }, n
    }), t.define("select2/selection/placeholder", ["../utils"], function () {
      function t(t, e, n) {
        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n)
      }

      return t.prototype.normalizePlaceholder = function (t, e) {
        return "string" == typeof e && (e = {id: "", text: e}), e
      }, t.prototype.createPlaceholder = function (t, e) {
        var n = this.selectionContainer();
        return n.html(this.display(e)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
      }, t.prototype.update = function (t, e) {
        var n = 1 == e.length && e[0].id != this.placeholder.id;
        if (1 < e.length || n) return t.call(this, e);
        this.clear();
        var i = this.createPlaceholder(this.placeholder);
        this.$selection.find(".select2-selection__rendered").append(i)
      }, t
    }), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (s, i, a) {
      function t() {
      }

      return t.prototype.bind = function (t, e, n) {
        var i = this;
        t.call(this, e, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (t) {
          i._handleClear(t)
        }), e.on("keypress", function (t) {
          i._handleKeyboardClear(t, e)
        })
      }, t.prototype._handleClear = function (t, e) {
        if (!this.isDisabled()) {
          var n = this.$selection.find(".select2-selection__clear");
          if (0 !== n.length) {
            e.stopPropagation();
            var i = a.GetData(n[0], "data"), s = this.$element.val();
            this.$element.val(this.placeholder.id);
            var r = {data: i};
            if (this.trigger("clear", r), r.prevented) this.$element.val(s); else {
              for (var o = 0; o < i.length; o++) if (r = {data: i[o]}, this.trigger("unselect", r), r.prevented) return void this.$element.val(s);
              this.$element.trigger("input").trigger("change"), this.trigger("toggle", {})
            }
          }
        }
      }, t.prototype._handleKeyboardClear = function (t, e, n) {
        n.isOpen() || e.which != i.DELETE && e.which != i.BACKSPACE || this._handleClear(e)
      }, t.prototype.update = function (t, e) {
        if (t.call(this, e), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === e.length)) {
          var n = this.options.get("translations").get("removeAllItems"),
            i = s('<span class="select2-selection__clear" title="' + n() + '">&times;</span>');
          a.StoreData(i[0], "data", e), this.$selection.find(".select2-selection__rendered").prepend(i)
        }
      }, t
    }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (i, a, l) {
      function t(t, e, n) {
        t.call(this, e, n)
      }

      return t.prototype.render = function (t) {
        var e = i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
        this.$searchContainer = e, this.$search = e.find("input");
        var n = t.call(this);
        return this._transferTabIndex(), n
      }, t.prototype.bind = function (t, e, n) {
        var i = this, s = e.id + "-results";
        t.call(this, e, n), e.on("open", function () {
          i.$search.attr("aria-controls", s), i.$search.trigger("focus")
        }), e.on("close", function () {
          i.$search.val(""), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus")
        }), e.on("enable", function () {
          i.$search.prop("disabled", !1), i._transferTabIndex()
        }), e.on("disable", function () {
          i.$search.prop("disabled", !0)
        }), e.on("focus", function () {
          i.$search.trigger("focus")
        }), e.on("results:focus", function (t) {
          t.data._resultId ? i.$search.attr("aria-activedescendant", t.data._resultId) : i.$search.removeAttr("aria-activedescendant")
        }), this.$selection.on("focusin", ".select2-search--inline", function (t) {
          i.trigger("focus", t)
        }), this.$selection.on("focusout", ".select2-search--inline", function (t) {
          i._handleBlur(t)
        }), this.$selection.on("keydown", ".select2-search--inline", function (t) {
          if (t.stopPropagation(), i.trigger("keypress", t), i._keyUpPrevented = t.isDefaultPrevented(), t.which === l.BACKSPACE && "" === i.$search.val()) {
            var e = i.$searchContainer.prev(".select2-selection__choice");
            if (0 < e.length) {
              var n = a.GetData(e[0], "data");
              i.searchRemoveChoice(n), t.preventDefault()
            }
          }
        }), this.$selection.on("click", ".select2-search--inline", function (t) {
          i.$search.val() && t.stopPropagation()
        });
        var r = document.documentMode, o = r && r <= 11;
        this.$selection.on("input.searchcheck", ".select2-search--inline", function () {
          o ? i.$selection.off("input.search input.searchcheck") : i.$selection.off("keyup.search")
        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (t) {
          if (o && "input" === t.type) i.$selection.off("input.search input.searchcheck"); else {
            var e = t.which;
            e != l.SHIFT && e != l.CTRL && e != l.ALT && e != l.TAB && i.handleSearch(t)
          }
        })
      }, t.prototype._transferTabIndex = function () {
        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
      }, t.prototype.createPlaceholder = function (t, e) {
        this.$search.attr("placeholder", e.text)
      }, t.prototype.update = function (t, e) {
        var n = this.$search[0] == document.activeElement;
        this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus")
      }, t.prototype.handleSearch = function () {
        if (this.resizeSearch(), !this._keyUpPrevented) {
          var t = this.$search.val();
          this.trigger("query", {term: t})
        }
        this._keyUpPrevented = !1
      }, t.prototype.searchRemoveChoice = function (t, e) {
        this.trigger("unselect", {data: e}), this.$search.val(e.text), this.handleSearch()
      }, t.prototype.resizeSearch = function () {
        this.$search.css("width", "25px");
        var t = "";
        "" !== this.$search.attr("placeholder") ? t = this.$selection.find(".select2-selection__rendered").width() : t = .75 * (this.$search.val().length + 1) + "em";
        this.$search.css("width", t)
      }, t
    }), t.define("select2/selection/eventRelay", ["jquery"], function (o) {
      function t() {
      }

      return t.prototype.bind = function (t, e, n) {
        var i = this,
          s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
          r = ["opening", "closing", "selecting", "unselecting", "clearing"];
        t.call(this, e, n), e.on("*", function (t, e) {
          if (-1 !== o.inArray(t, s)) {
            e = e || {};
            var n = o.Event("select2:" + t, {params: e});
            i.$element.trigger(n), -1 !== o.inArray(t, r) && (e.prevented = n.isDefaultPrevented())
          }
        })
      }, t
    }), t.define("select2/translation", ["jquery", "require"], function (e, n) {
      function i(t) {
        this.dict = t || {}
      }

      return i.prototype.all = function () {
        return this.dict
      }, i.prototype.get = function (t) {
        return this.dict[t]
      }, i.prototype.extend = function (t) {
        this.dict = e.extend({}, t.all(), this.dict)
      }, i._cache = {}, i.loadPath = function (t) {
        if (!(t in i._cache)) {
          var e = n(t);
          i._cache[t] = e
        }
        return new i(i._cache[t])
      }, i
    }), t.define("select2/diacritics", [], function () {
      return {
        "\u24b6": "A",
        "\uff21": "A",
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\u1ea6": "A",
        "\u1ea4": "A",
        "\u1eaa": "A",
        "\u1ea8": "A",
        "\xc3": "A",
        "\u0100": "A",
        "\u0102": "A",
        "\u1eb0": "A",
        "\u1eae": "A",
        "\u1eb4": "A",
        "\u1eb2": "A",
        "\u0226": "A",
        "\u01e0": "A",
        "\xc4": "A",
        "\u01de": "A",
        "\u1ea2": "A",
        "\xc5": "A",
        "\u01fa": "A",
        "\u01cd": "A",
        "\u0200": "A",
        "\u0202": "A",
        "\u1ea0": "A",
        "\u1eac": "A",
        "\u1eb6": "A",
        "\u1e00": "A",
        "\u0104": "A",
        "\u023a": "A",
        "\u2c6f": "A",
        "\ua732": "AA",
        "\xc6": "AE",
        "\u01fc": "AE",
        "\u01e2": "AE",
        "\ua734": "AO",
        "\ua736": "AU",
        "\ua738": "AV",
        "\ua73a": "AV",
        "\ua73c": "AY",
        "\u24b7": "B",
        "\uff22": "B",
        "\u1e02": "B",
        "\u1e04": "B",
        "\u1e06": "B",
        "\u0243": "B",
        "\u0182": "B",
        "\u0181": "B",
        "\u24b8": "C",
        "\uff23": "C",
        "\u0106": "C",
        "\u0108": "C",
        "\u010a": "C",
        "\u010c": "C",
        "\xc7": "C",
        "\u1e08": "C",
        "\u0187": "C",
        "\u023b": "C",
        "\ua73e": "C",
        "\u24b9": "D",
        "\uff24": "D",
        "\u1e0a": "D",
        "\u010e": "D",
        "\u1e0c": "D",
        "\u1e10": "D",
        "\u1e12": "D",
        "\u1e0e": "D",
        "\u0110": "D",
        "\u018b": "D",
        "\u018a": "D",
        "\u0189": "D",
        "\ua779": "D",
        "\u01f1": "DZ",
        "\u01c4": "DZ",
        "\u01f2": "Dz",
        "\u01c5": "Dz",
        "\u24ba": "E",
        "\uff25": "E",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\u1ec0": "E",
        "\u1ebe": "E",
        "\u1ec4": "E",
        "\u1ec2": "E",
        "\u1ebc": "E",
        "\u0112": "E",
        "\u1e14": "E",
        "\u1e16": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\xcb": "E",
        "\u1eba": "E",
        "\u011a": "E",
        "\u0204": "E",
        "\u0206": "E",
        "\u1eb8": "E",
        "\u1ec6": "E",
        "\u0228": "E",
        "\u1e1c": "E",
        "\u0118": "E",
        "\u1e18": "E",
        "\u1e1a": "E",
        "\u0190": "E",
        "\u018e": "E",
        "\u24bb": "F",
        "\uff26": "F",
        "\u1e1e": "F",
        "\u0191": "F",
        "\ua77b": "F",
        "\u24bc": "G",
        "\uff27": "G",
        "\u01f4": "G",
        "\u011c": "G",
        "\u1e20": "G",
        "\u011e": "G",
        "\u0120": "G",
        "\u01e6": "G",
        "\u0122": "G",
        "\u01e4": "G",
        "\u0193": "G",
        "\ua7a0": "G",
        "\ua77d": "G",
        "\ua77e": "G",
        "\u24bd": "H",
        "\uff28": "H",
        "\u0124": "H",
        "\u1e22": "H",
        "\u1e26": "H",
        "\u021e": "H",
        "\u1e24": "H",
        "\u1e28": "H",
        "\u1e2a": "H",
        "\u0126": "H",
        "\u2c67": "H",
        "\u2c75": "H",
        "\ua78d": "H",
        "\u24be": "I",
        "\uff29": "I",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\u0128": "I",
        "\u012a": "I",
        "\u012c": "I",
        "\u0130": "I",
        "\xcf": "I",
        "\u1e2e": "I",
        "\u1ec8": "I",
        "\u01cf": "I",
        "\u0208": "I",
        "\u020a": "I",
        "\u1eca": "I",
        "\u012e": "I",
        "\u1e2c": "I",
        "\u0197": "I",
        "\u24bf": "J",
        "\uff2a": "J",
        "\u0134": "J",
        "\u0248": "J",
        "\u24c0": "K",
        "\uff2b": "K",
        "\u1e30": "K",
        "\u01e8": "K",
        "\u1e32": "K",
        "\u0136": "K",
        "\u1e34": "K",
        "\u0198": "K",
        "\u2c69": "K",
        "\ua740": "K",
        "\ua742": "K",
        "\ua744": "K",
        "\ua7a2": "K",
        "\u24c1": "L",
        "\uff2c": "L",
        "\u013f": "L",
        "\u0139": "L",
        "\u013d": "L",
        "\u1e36": "L",
        "\u1e38": "L",
        "\u013b": "L",
        "\u1e3c": "L",
        "\u1e3a": "L",
        "\u0141": "L",
        "\u023d": "L",
        "\u2c62": "L",
        "\u2c60": "L",
        "\ua748": "L",
        "\ua746": "L",
        "\ua780": "L",
        "\u01c7": "LJ",
        "\u01c8": "Lj",
        "\u24c2": "M",
        "\uff2d": "M",
        "\u1e3e": "M",
        "\u1e40": "M",
        "\u1e42": "M",
        "\u2c6e": "M",
        "\u019c": "M",
        "\u24c3": "N",
        "\uff2e": "N",
        "\u01f8": "N",
        "\u0143": "N",
        "\xd1": "N",
        "\u1e44": "N",
        "\u0147": "N",
        "\u1e46": "N",
        "\u0145": "N",
        "\u1e4a": "N",
        "\u1e48": "N",
        "\u0220": "N",
        "\u019d": "N",
        "\ua790": "N",
        "\ua7a4": "N",
        "\u01ca": "NJ",
        "\u01cb": "Nj",
        "\u24c4": "O",
        "\uff2f": "O",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\u1ed2": "O",
        "\u1ed0": "O",
        "\u1ed6": "O",
        "\u1ed4": "O",
        "\xd5": "O",
        "\u1e4c": "O",
        "\u022c": "O",
        "\u1e4e": "O",
        "\u014c": "O",
        "\u1e50": "O",
        "\u1e52": "O",
        "\u014e": "O",
        "\u022e": "O",
        "\u0230": "O",
        "\xd6": "O",
        "\u022a": "O",
        "\u1ece": "O",
        "\u0150": "O",
        "\u01d1": "O",
        "\u020c": "O",
        "\u020e": "O",
        "\u01a0": "O",
        "\u1edc": "O",
        "\u1eda": "O",
        "\u1ee0": "O",
        "\u1ede": "O",
        "\u1ee2": "O",
        "\u1ecc": "O",
        "\u1ed8": "O",
        "\u01ea": "O",
        "\u01ec": "O",
        "\xd8": "O",
        "\u01fe": "O",
        "\u0186": "O",
        "\u019f": "O",
        "\ua74a": "O",
        "\ua74c": "O",
        "\u0152": "OE",
        "\u01a2": "OI",
        "\ua74e": "OO",
        "\u0222": "OU",
        "\u24c5": "P",
        "\uff30": "P",
        "\u1e54": "P",
        "\u1e56": "P",
        "\u01a4": "P",
        "\u2c63": "P",
        "\ua750": "P",
        "\ua752": "P",
        "\ua754": "P",
        "\u24c6": "Q",
        "\uff31": "Q",
        "\ua756": "Q",
        "\ua758": "Q",
        "\u024a": "Q",
        "\u24c7": "R",
        "\uff32": "R",
        "\u0154": "R",
        "\u1e58": "R",
        "\u0158": "R",
        "\u0210": "R",
        "\u0212": "R",
        "\u1e5a": "R",
        "\u1e5c": "R",
        "\u0156": "R",
        "\u1e5e": "R",
        "\u024c": "R",
        "\u2c64": "R",
        "\ua75a": "R",
        "\ua7a6": "R",
        "\ua782": "R",
        "\u24c8": "S",
        "\uff33": "S",
        "\u1e9e": "S",
        "\u015a": "S",
        "\u1e64": "S",
        "\u015c": "S",
        "\u1e60": "S",
        "\u0160": "S",
        "\u1e66": "S",
        "\u1e62": "S",
        "\u1e68": "S",
        "\u0218": "S",
        "\u015e": "S",
        "\u2c7e": "S",
        "\ua7a8": "S",
        "\ua784": "S",
        "\u24c9": "T",
        "\uff34": "T",
        "\u1e6a": "T",
        "\u0164": "T",
        "\u1e6c": "T",
        "\u021a": "T",
        "\u0162": "T",
        "\u1e70": "T",
        "\u1e6e": "T",
        "\u0166": "T",
        "\u01ac": "T",
        "\u01ae": "T",
        "\u023e": "T",
        "\ua786": "T",
        "\ua728": "TZ",
        "\u24ca": "U",
        "\uff35": "U",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\u0168": "U",
        "\u1e78": "U",
        "\u016a": "U",
        "\u1e7a": "U",
        "\u016c": "U",
        "\xdc": "U",
        "\u01db": "U",
        "\u01d7": "U",
        "\u01d5": "U",
        "\u01d9": "U",
        "\u1ee6": "U",
        "\u016e": "U",
        "\u0170": "U",
        "\u01d3": "U",
        "\u0214": "U",
        "\u0216": "U",
        "\u01af": "U",
        "\u1eea": "U",
        "\u1ee8": "U",
        "\u1eee": "U",
        "\u1eec": "U",
        "\u1ef0": "U",
        "\u1ee4": "U",
        "\u1e72": "U",
        "\u0172": "U",
        "\u1e76": "U",
        "\u1e74": "U",
        "\u0244": "U",
        "\u24cb": "V",
        "\uff36": "V",
        "\u1e7c": "V",
        "\u1e7e": "V",
        "\u01b2": "V",
        "\ua75e": "V",
        "\u0245": "V",
        "\ua760": "VY",
        "\u24cc": "W",
        "\uff37": "W",
        "\u1e80": "W",
        "\u1e82": "W",
        "\u0174": "W",
        "\u1e86": "W",
        "\u1e84": "W",
        "\u1e88": "W",
        "\u2c72": "W",
        "\u24cd": "X",
        "\uff38": "X",
        "\u1e8a": "X",
        "\u1e8c": "X",
        "\u24ce": "Y",
        "\uff39": "Y",
        "\u1ef2": "Y",
        "\xdd": "Y",
        "\u0176": "Y",
        "\u1ef8": "Y",
        "\u0232": "Y",
        "\u1e8e": "Y",
        "\u0178": "Y",
        "\u1ef6": "Y",
        "\u1ef4": "Y",
        "\u01b3": "Y",
        "\u024e": "Y",
        "\u1efe": "Y",
        "\u24cf": "Z",
        "\uff3a": "Z",
        "\u0179": "Z",
        "\u1e90": "Z",
        "\u017b": "Z",
        "\u017d": "Z",
        "\u1e92": "Z",
        "\u1e94": "Z",
        "\u01b5": "Z",
        "\u0224": "Z",
        "\u2c7f": "Z",
        "\u2c6b": "Z",
        "\ua762": "Z",
        "\u24d0": "a",
        "\uff41": "a",
        "\u1e9a": "a",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\u1ea7": "a",
        "\u1ea5": "a",
        "\u1eab": "a",
        "\u1ea9": "a",
        "\xe3": "a",
        "\u0101": "a",
        "\u0103": "a",
        "\u1eb1": "a",
        "\u1eaf": "a",
        "\u1eb5": "a",
        "\u1eb3": "a",
        "\u0227": "a",
        "\u01e1": "a",
        "\xe4": "a",
        "\u01df": "a",
        "\u1ea3": "a",
        "\xe5": "a",
        "\u01fb": "a",
        "\u01ce": "a",
        "\u0201": "a",
        "\u0203": "a",
        "\u1ea1": "a",
        "\u1ead": "a",
        "\u1eb7": "a",
        "\u1e01": "a",
        "\u0105": "a",
        "\u2c65": "a",
        "\u0250": "a",
        "\ua733": "aa",
        "\xe6": "ae",
        "\u01fd": "ae",
        "\u01e3": "ae",
        "\ua735": "ao",
        "\ua737": "au",
        "\ua739": "av",
        "\ua73b": "av",
        "\ua73d": "ay",
        "\u24d1": "b",
        "\uff42": "b",
        "\u1e03": "b",
        "\u1e05": "b",
        "\u1e07": "b",
        "\u0180": "b",
        "\u0183": "b",
        "\u0253": "b",
        "\u24d2": "c",
        "\uff43": "c",
        "\u0107": "c",
        "\u0109": "c",
        "\u010b": "c",
        "\u010d": "c",
        "\xe7": "c",
        "\u1e09": "c",
        "\u0188": "c",
        "\u023c": "c",
        "\ua73f": "c",
        "\u2184": "c",
        "\u24d3": "d",
        "\uff44": "d",
        "\u1e0b": "d",
        "\u010f": "d",
        "\u1e0d": "d",
        "\u1e11": "d",
        "\u1e13": "d",
        "\u1e0f": "d",
        "\u0111": "d",
        "\u018c": "d",
        "\u0256": "d",
        "\u0257": "d",
        "\ua77a": "d",
        "\u01f3": "dz",
        "\u01c6": "dz",
        "\u24d4": "e",
        "\uff45": "e",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\u1ec1": "e",
        "\u1ebf": "e",
        "\u1ec5": "e",
        "\u1ec3": "e",
        "\u1ebd": "e",
        "\u0113": "e",
        "\u1e15": "e",
        "\u1e17": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\xeb": "e",
        "\u1ebb": "e",
        "\u011b": "e",
        "\u0205": "e",
        "\u0207": "e",
        "\u1eb9": "e",
        "\u1ec7": "e",
        "\u0229": "e",
        "\u1e1d": "e",
        "\u0119": "e",
        "\u1e19": "e",
        "\u1e1b": "e",
        "\u0247": "e",
        "\u025b": "e",
        "\u01dd": "e",
        "\u24d5": "f",
        "\uff46": "f",
        "\u1e1f": "f",
        "\u0192": "f",
        "\ua77c": "f",
        "\u24d6": "g",
        "\uff47": "g",
        "\u01f5": "g",
        "\u011d": "g",
        "\u1e21": "g",
        "\u011f": "g",
        "\u0121": "g",
        "\u01e7": "g",
        "\u0123": "g",
        "\u01e5": "g",
        "\u0260": "g",
        "\ua7a1": "g",
        "\u1d79": "g",
        "\ua77f": "g",
        "\u24d7": "h",
        "\uff48": "h",
        "\u0125": "h",
        "\u1e23": "h",
        "\u1e27": "h",
        "\u021f": "h",
        "\u1e25": "h",
        "\u1e29": "h",
        "\u1e2b": "h",
        "\u1e96": "h",
        "\u0127": "h",
        "\u2c68": "h",
        "\u2c76": "h",
        "\u0265": "h",
        "\u0195": "hv",
        "\u24d8": "i",
        "\uff49": "i",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\u0129": "i",
        "\u012b": "i",
        "\u012d": "i",
        "\xef": "i",
        "\u1e2f": "i",
        "\u1ec9": "i",
        "\u01d0": "i",
        "\u0209": "i",
        "\u020b": "i",
        "\u1ecb": "i",
        "\u012f": "i",
        "\u1e2d": "i",
        "\u0268": "i",
        "\u0131": "i",
        "\u24d9": "j",
        "\uff4a": "j",
        "\u0135": "j",
        "\u01f0": "j",
        "\u0249": "j",
        "\u24da": "k",
        "\uff4b": "k",
        "\u1e31": "k",
        "\u01e9": "k",
        "\u1e33": "k",
        "\u0137": "k",
        "\u1e35": "k",
        "\u0199": "k",
        "\u2c6a": "k",
        "\ua741": "k",
        "\ua743": "k",
        "\ua745": "k",
        "\ua7a3": "k",
        "\u24db": "l",
        "\uff4c": "l",
        "\u0140": "l",
        "\u013a": "l",
        "\u013e": "l",
        "\u1e37": "l",
        "\u1e39": "l",
        "\u013c": "l",
        "\u1e3d": "l",
        "\u1e3b": "l",
        "\u017f": "l",
        "\u0142": "l",
        "\u019a": "l",
        "\u026b": "l",
        "\u2c61": "l",
        "\ua749": "l",
        "\ua781": "l",
        "\ua747": "l",
        "\u01c9": "lj",
        "\u24dc": "m",
        "\uff4d": "m",
        "\u1e3f": "m",
        "\u1e41": "m",
        "\u1e43": "m",
        "\u0271": "m",
        "\u026f": "m",
        "\u24dd": "n",
        "\uff4e": "n",
        "\u01f9": "n",
        "\u0144": "n",
        "\xf1": "n",
        "\u1e45": "n",
        "\u0148": "n",
        "\u1e47": "n",
        "\u0146": "n",
        "\u1e4b": "n",
        "\u1e49": "n",
        "\u019e": "n",
        "\u0272": "n",
        "\u0149": "n",
        "\ua791": "n",
        "\ua7a5": "n",
        "\u01cc": "nj",
        "\u24de": "o",
        "\uff4f": "o",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\u1ed3": "o",
        "\u1ed1": "o",
        "\u1ed7": "o",
        "\u1ed5": "o",
        "\xf5": "o",
        "\u1e4d": "o",
        "\u022d": "o",
        "\u1e4f": "o",
        "\u014d": "o",
        "\u1e51": "o",
        "\u1e53": "o",
        "\u014f": "o",
        "\u022f": "o",
        "\u0231": "o",
        "\xf6": "o",
        "\u022b": "o",
        "\u1ecf": "o",
        "\u0151": "o",
        "\u01d2": "o",
        "\u020d": "o",
        "\u020f": "o",
        "\u01a1": "o",
        "\u1edd": "o",
        "\u1edb": "o",
        "\u1ee1": "o",
        "\u1edf": "o",
        "\u1ee3": "o",
        "\u1ecd": "o",
        "\u1ed9": "o",
        "\u01eb": "o",
        "\u01ed": "o",
        "\xf8": "o",
        "\u01ff": "o",
        "\u0254": "o",
        "\ua74b": "o",
        "\ua74d": "o",
        "\u0275": "o",
        "\u0153": "oe",
        "\u01a3": "oi",
        "\u0223": "ou",
        "\ua74f": "oo",
        "\u24df": "p",
        "\uff50": "p",
        "\u1e55": "p",
        "\u1e57": "p",
        "\u01a5": "p",
        "\u1d7d": "p",
        "\ua751": "p",
        "\ua753": "p",
        "\ua755": "p",
        "\u24e0": "q",
        "\uff51": "q",
        "\u024b": "q",
        "\ua757": "q",
        "\ua759": "q",
        "\u24e1": "r",
        "\uff52": "r",
        "\u0155": "r",
        "\u1e59": "r",
        "\u0159": "r",
        "\u0211": "r",
        "\u0213": "r",
        "\u1e5b": "r",
        "\u1e5d": "r",
        "\u0157": "r",
        "\u1e5f": "r",
        "\u024d": "r",
        "\u027d": "r",
        "\ua75b": "r",
        "\ua7a7": "r",
        "\ua783": "r",
        "\u24e2": "s",
        "\uff53": "s",
        "\xdf": "s",
        "\u015b": "s",
        "\u1e65": "s",
        "\u015d": "s",
        "\u1e61": "s",
        "\u0161": "s",
        "\u1e67": "s",
        "\u1e63": "s",
        "\u1e69": "s",
        "\u0219": "s",
        "\u015f": "s",
        "\u023f": "s",
        "\ua7a9": "s",
        "\ua785": "s",
        "\u1e9b": "s",
        "\u24e3": "t",
        "\uff54": "t",
        "\u1e6b": "t",
        "\u1e97": "t",
        "\u0165": "t",
        "\u1e6d": "t",
        "\u021b": "t",
        "\u0163": "t",
        "\u1e71": "t",
        "\u1e6f": "t",
        "\u0167": "t",
        "\u01ad": "t",
        "\u0288": "t",
        "\u2c66": "t",
        "\ua787": "t",
        "\ua729": "tz",
        "\u24e4": "u",
        "\uff55": "u",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\u0169": "u",
        "\u1e79": "u",
        "\u016b": "u",
        "\u1e7b": "u",
        "\u016d": "u",
        "\xfc": "u",
        "\u01dc": "u",
        "\u01d8": "u",
        "\u01d6": "u",
        "\u01da": "u",
        "\u1ee7": "u",
        "\u016f": "u",
        "\u0171": "u",
        "\u01d4": "u",
        "\u0215": "u",
        "\u0217": "u",
        "\u01b0": "u",
        "\u1eeb": "u",
        "\u1ee9": "u",
        "\u1eef": "u",
        "\u1eed": "u",
        "\u1ef1": "u",
        "\u1ee5": "u",
        "\u1e73": "u",
        "\u0173": "u",
        "\u1e77": "u",
        "\u1e75": "u",
        "\u0289": "u",
        "\u24e5": "v",
        "\uff56": "v",
        "\u1e7d": "v",
        "\u1e7f": "v",
        "\u028b": "v",
        "\ua75f": "v",
        "\u028c": "v",
        "\ua761": "vy",
        "\u24e6": "w",
        "\uff57": "w",
        "\u1e81": "w",
        "\u1e83": "w",
        "\u0175": "w",
        "\u1e87": "w",
        "\u1e85": "w",
        "\u1e98": "w",
        "\u1e89": "w",
        "\u2c73": "w",
        "\u24e7": "x",
        "\uff58": "x",
        "\u1e8b": "x",
        "\u1e8d": "x",
        "\u24e8": "y",
        "\uff59": "y",
        "\u1ef3": "y",
        "\xfd": "y",
        "\u0177": "y",
        "\u1ef9": "y",
        "\u0233": "y",
        "\u1e8f": "y",
        "\xff": "y",
        "\u1ef7": "y",
        "\u1e99": "y",
        "\u1ef5": "y",
        "\u01b4": "y",
        "\u024f": "y",
        "\u1eff": "y",
        "\u24e9": "z",
        "\uff5a": "z",
        "\u017a": "z",
        "\u1e91": "z",
        "\u017c": "z",
        "\u017e": "z",
        "\u1e93": "z",
        "\u1e95": "z",
        "\u01b6": "z",
        "\u0225": "z",
        "\u0240": "z",
        "\u2c6c": "z",
        "\ua763": "z",
        "\u0386": "\u0391",
        "\u0388": "\u0395",
        "\u0389": "\u0397",
        "\u038a": "\u0399",
        "\u03aa": "\u0399",
        "\u038c": "\u039f",
        "\u038e": "\u03a5",
        "\u03ab": "\u03a5",
        "\u038f": "\u03a9",
        "\u03ac": "\u03b1",
        "\u03ad": "\u03b5",
        "\u03ae": "\u03b7",
        "\u03af": "\u03b9",
        "\u03ca": "\u03b9",
        "\u0390": "\u03b9",
        "\u03cc": "\u03bf",
        "\u03cd": "\u03c5",
        "\u03cb": "\u03c5",
        "\u03b0": "\u03c5",
        "\u03ce": "\u03c9",
        "\u03c2": "\u03c3",
        "\u2019": "'"
      }
    }), t.define("select2/data/base", ["../utils"], function (i) {
      function t() {
        t.__super__.constructor.call(this)
      }

      return i.Extend(t, i.Observable), t.prototype.current = function () {
        throw new Error("The `current` method must be defined in child classes.")
      }, t.prototype.query = function () {
        throw new Error("The `query` method must be defined in child classes.")
      }, t.prototype.bind = function () {
      }, t.prototype.destroy = function () {
      }, t.prototype.generateResultId = function (t, e) {
        var n = t.id + "-result-";
        return n += i.generateChars(4), null != e.id ? n += "-" + e.id.toString() : n += "-" + i.generateChars(4), n
      }, t
    }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function (t, a, l) {
      function n(t, e) {
        this.$element = t, this.options = e, n.__super__.constructor.call(this)
      }

      return a.Extend(n, t), n.prototype.current = function (t) {
        var n = [], i = this;
        this.$element.find(":selected").each(function () {
          var t = l(this), e = i.item(t);
          n.push(e)
        }), t(n)
      }, n.prototype.select = function (s) {
        var r = this;
        if (s.selected = !0, l(s.element).is("option")) return s.element.selected = !0, void this.$element.trigger("input").trigger("change");
        if (this.$element.prop("multiple")) this.current(function (t) {
          var e = [];
          (s = [s]).push.apply(s, t);
          for (var n = 0; n < s.length; n++) {
            var i = s[n].id;
            -1 === l.inArray(i, e) && e.push(i)
          }
          r.$element.val(e), r.$element.trigger("input").trigger("change")
        }); else {
          var t = s.id;
          this.$element.val(t), this.$element.trigger("input").trigger("change")
        }
      }, n.prototype.unselect = function (s) {
        var r = this;
        if (this.$element.prop("multiple")) {
          if (s.selected = !1, l(s.element).is("option")) return s.element.selected = !1, void this.$element.trigger("input").trigger("change");
          this.current(function (t) {
            for (var e = [], n = 0; n < t.length; n++) {
              var i = t[n].id;
              i !== s.id && -1 === l.inArray(i, e) && e.push(i)
            }
            r.$element.val(e), r.$element.trigger("input").trigger("change")
          })
        }
      }, n.prototype.bind = function (t) {
        var e = this;
        (this.container = t).on("select", function (t) {
          e.select(t.data)
        }), t.on("unselect", function (t) {
          e.unselect(t.data)
        })
      }, n.prototype.destroy = function () {
        this.$element.find("*").each(function () {
          a.RemoveData(this)
        })
      }, n.prototype.query = function (i, t) {
        var s = [], r = this;
        this.$element.children().each(function () {
          var t = l(this);
          if (t.is("option") || t.is("optgroup")) {
            var e = r.item(t), n = r.matches(i, e);
            null !== n && s.push(n)
          }
        }), t({results: s})
      }, n.prototype.addOptions = function (t) {
        a.appendMany(this.$element, t)
      }, n.prototype.option = function (t) {
        var e;
        t.children ? (e = document.createElement("optgroup")).label = t.text : (e = document.createElement("option")).textContent !== undefined ? e.textContent = t.text : e.innerText = t.text, t.id !== undefined && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);
        var n = l(e), i = this._normalizeItem(t);
        return i.element = e, a.StoreData(e, "data", i), n
      }, n.prototype.item = function (t) {
        var e = {};
        if (null != (e = a.GetData(t[0], "data"))) return e;
        if (t.is("option")) e = {
          id: t.val(),
          text: t.text(),
          disabled: t.prop("disabled"),
          selected: t.prop("selected"),
          title: t.prop("title")
        }; else if (t.is("optgroup")) {
          e = {text: t.prop("label"), children: [], title: t.prop("title")};
          for (var n = t.children("option"), i = [], s = 0; s < n.length; s++) {
            var r = l(n[s]), o = this.item(r);
            i.push(o)
          }
          e.children = i
        }
        return (e = this._normalizeItem(e)).element = t[0], a.StoreData(t[0], "data", e), e
      }, n.prototype._normalizeItem = function (t) {
        t !== Object(t) && (t = {id: t, text: t});
        var e = {selected: !1, disabled: !1};
        return null != (t = l.extend({}, {text: ""}, t)).id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), l.extend({}, e, t)
      }, n.prototype.matches = function (t, e) {
        return this.options.get("matcher")(t, e)
      }, n
    }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function (t, f, m) {
      function i(t, e) {
        this._dataToConvert = e.get("data") || [], i.__super__.constructor.call(this, t, e)
      }

      return f.Extend(i, t), i.prototype.bind = function (t, e) {
        i.__super__.bind.call(this, t, e), this.addOptions(this.convertToOptions(this._dataToConvert))
      }, i.prototype.select = function (n) {
        var t = this.$element.find("option").filter(function (t, e) {
          return e.value == n.id.toString()
        });
        0 === t.length && (t = this.option(n), this.addOptions(t)), i.__super__.select.call(this, n)
      }, i.prototype.convertToOptions = function (t) {
        function e(t) {
          return function () {
            return m(this).val() == t.id
          }
        }

        for (var n = this, i = this.$element.find("option"), s = i.map(function () {
          return n.item(m(this)).id
        }).get(), r = [], o = 0; o < t.length; o++) {
          var a = this._normalizeItem(t[o]);
          if (0 <= m.inArray(a.id, s)) {
            var l = i.filter(e(a)), c = this.item(l), u = m.extend(!0, {}, a, c), d = this.option(u);
            l.replaceWith(d)
          } else {
            var p = this.option(a);
            if (a.children) {
              var h = this.convertToOptions(a.children);
              f.appendMany(p, h)
            }
            r.push(p)
          }
        }
        return r
      }, i
    }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (t, e, r) {
      function n(t, e) {
        this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, t, e)
      }

      return e.Extend(n, t), n.prototype._applyDefaults = function (t) {
        var e = {
          data: function (t) {
            return r.extend({}, t, {q: t.term})
          }, transport: function (t, e, n) {
            var i = r.ajax(t);
            return i.then(e), i.fail(n), i
          }
        };
        return r.extend({}, e, t, !0)
      }, n.prototype.processResults = function (t) {
        return t
      }, n.prototype.query = function (n, i) {
        function t() {
          var t = e.transport(e, function (t) {
            var e = s.processResults(t, n);
            s.options.get("debug") && window.console && console.error && (e && e.results && r.isArray(e.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i(e)
          }, function () {
            "status" in t && (0 === t.status || "0" === t.status) || s.trigger("results:message", {message: "errorLoading"})
          });
          s._request = t
        }

        var s = this;
        null != this._request && (r.isFunction(this._request.abort) && this._request.abort(), this._request = null);
        var e = r.extend({type: "GET"}, this.ajaxOptions);
        "function" == typeof e.url && (e.url = e.url.call(this.$element, n)), "function" == typeof e.data && (e.data = e.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(t, this.ajaxOptions.delay)) : t()
      }, n
    }), t.define("select2/data/tags", ["jquery"], function (u) {
      function t(t, e, n) {
        var i = n.get("tags"), s = n.get("createTag");
        s !== undefined && (this.createTag = s);
        var r = n.get("insertTag");
        if (r !== undefined && (this.insertTag = r), t.call(this, e, n), u.isArray(i)) for (var o = 0; o < i.length; o++) {
          var a = i[o], l = this._normalizeItem(a), c = this.option(l);
          this.$element.append(c)
        }
      }

      return t.prototype.query = function (t, l, c) {
        function u(t, e) {
          for (var n = t.results, i = 0; i < n.length; i++) {
            var s = n[i], r = null != s.children && !u({results: s.children}, !0);
            if ((s.text || "").toUpperCase() === (l.term || "").toUpperCase() || r) return !e && (t.data = n, void c(t))
          }
          if (e) return !0;
          var o = d.createTag(l);
          if (null != o) {
            var a = d.option(o);
            a.attr("data-select2-tag", !0), d.addOptions([a]), d.insertTag(n, o)
          }
          t.results = n, c(t)
        }

        var d = this;
        this._removeOldTags(), null != l.term && null == l.page ? t.call(this, l, u) : t.call(this, l, c)
      }, t.prototype.createTag = function (t, e) {
        var n = u.trim(e.term);
        return "" === n ? null : {id: n, text: n}
      }, t.prototype.insertTag = function (t, e, n) {
        e.unshift(n)
      }, t.prototype._removeOldTags = function () {
        this.$element.find("option[data-select2-tag]").each(function () {
          this.selected || u(this).remove()
        })
      }, t
    }), t.define("select2/data/tokenizer", ["jquery"], function (d) {
      function t(t, e, n) {
        var i = n.get("tokenizer");
        i !== undefined && (this.tokenizer = i), t.call(this, e, n)
      }

      return t.prototype.bind = function (t, e, n) {
        t.call(this, e, n), this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field")
      }, t.prototype.query = function (t, e, n) {
        function i(t) {
          var e = r._normalizeItem(t);
          if (!r.$element.find("option").filter(function () {
            return d(this).val() === e.id
          }).length) {
            var n = r.option(e);
            n.attr(
              "data-select2-tag", !0), r._removeOldTags(), r.addOptions([n])
          }
          s(e)
        }

        function s(t) {
          r.trigger("select", {data: t})
        }

        var r = this;
        e.term = e.term || "";
        var o = this.tokenizer(e, this.options, i);
        o.term !== e.term && (this.$search.length && (this.$search.val(o.term), this.$search.trigger("focus")), e.term = o.term), t.call(this, e, n)
      }, t.prototype.tokenizer = function (t, e, n, i) {
        for (var s = n.get("tokenSeparators") || [], r = e.term, o = 0, a = this.createTag || function (t) {
          return {id: t.term, text: t.term}
        }; o < r.length;) {
          var l = r[o];
          if (-1 !== d.inArray(l, s)) {
            var c = r.substr(0, o), u = a(d.extend({}, e, {term: c}));
            null != u ? (i(u), r = r.substr(o + 1) || "", o = 0) : o++
          } else o++
        }
        return {term: r}
      }, t
    }), t.define("select2/data/minimumInputLength", [], function () {
      function t(t, e, n) {
        this.minimumInputLength = n.get("minimumInputLength"), t.call(this, e, n)
      }

      return t.prototype.query = function (t, e, n) {
        e.term = e.term || "", e.term.length < this.minimumInputLength ? this.trigger("results:message", {
          message: "inputTooShort",
          args: {minimum: this.minimumInputLength, input: e.term, params: e}
        }) : t.call(this, e, n)
      }, t
    }), t.define("select2/data/maximumInputLength", [], function () {
      function t(t, e, n) {
        this.maximumInputLength = n.get("maximumInputLength"), t.call(this, e, n)
      }

      return t.prototype.query = function (t, e, n) {
        e.term = e.term || "", 0 < this.maximumInputLength && e.term.length > this.maximumInputLength ? this.trigger("results:message", {
          message: "inputTooLong",
          args: {maximum: this.maximumInputLength, input: e.term, params: e}
        }) : t.call(this, e, n)
      }, t
    }), t.define("select2/data/maximumSelectionLength", [], function () {
      function t(t, e, n) {
        this.maximumSelectionLength = n.get("maximumSelectionLength"), t.call(this, e, n)
      }

      return t.prototype.bind = function (t, e, n) {
        var i = this;
        t.call(this, e, n), e.on("select", function () {
          i._checkIfMaximumSelected()
        })
      }, t.prototype.query = function (t, e, n) {
        var i = this;
        this._checkIfMaximumSelected(function () {
          t.call(i, e, n)
        })
      }, t.prototype._checkIfMaximumSelected = function (t, n) {
        var i = this;
        this.current(function (t) {
          var e = null != t ? t.length : 0;
          0 < i.maximumSelectionLength && e >= i.maximumSelectionLength ? i.trigger("results:message", {
            message: "maximumSelected",
            args: {maximum: i.maximumSelectionLength}
          }) : n && n()
        })
      }, t
    }), t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
      function n(t, e) {
        this.$element = t, this.options = e, n.__super__.constructor.call(this)
      }

      return t.Extend(n, t.Observable), n.prototype.render = function () {
        var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
        return t.attr("dir", this.options.get("dir")), this.$dropdown = t
      }, n.prototype.bind = function () {
      }, n.prototype.position = function () {
      }, n.prototype.destroy = function () {
        this.$dropdown.remove()
      }, n
    }), t.define("select2/dropdown/search", ["jquery", "../utils"], function (r) {
      function t() {
      }

      return t.prototype.render = function (t) {
        var e = t.call(this),
          n = r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
        return this.$searchContainer = n, this.$search = n.find("input"), e.prepend(n), e
      }, t.prototype.bind = function (t, e, n) {
        var i = this, s = e.id + "-results";
        t.call(this, e, n), this.$search.on("keydown", function (t) {
          i.trigger("keypress", t), i._keyUpPrevented = t.isDefaultPrevented()
        }), this.$search.on("input", function () {
          r(this).off("keyup")
        }), this.$search.on("keyup input", function (t) {
          i.handleSearch(t)
        }), e.on("open", function () {
          i.$search.attr("tabindex", 0), i.$search.attr("aria-controls", s), i.$search.trigger("focus"), window.setTimeout(function () {
            i.$search.trigger("focus")
          }, 0)
        }), e.on("close", function () {
          i.$search.attr("tabindex", -1), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.val(""), i.$search.trigger("blur")
        }), e.on("focus", function () {
          e.isOpen() || i.$search.trigger("focus")
        }), e.on("results:all", function (t) {
          null != t.query.term && "" !== t.query.term || (i.showSearch(t) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"))
        }), e.on("results:focus", function (t) {
          t.data._resultId ? i.$search.attr("aria-activedescendant", t.data._resultId) : i.$search.removeAttr("aria-activedescendant")
        })
      }, t.prototype.handleSearch = function () {
        if (!this._keyUpPrevented) {
          var t = this.$search.val();
          this.trigger("query", {term: t})
        }
        this._keyUpPrevented = !1
      }, t.prototype.showSearch = function () {
        return !0
      }, t
    }), t.define("select2/dropdown/hidePlaceholder", [], function () {
      function t(t, e, n, i) {
        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n, i)
      }

      return t.prototype.append = function (t, e) {
        e.results = this.removePlaceholder(e.results), t.call(this, e)
      }, t.prototype.normalizePlaceholder = function (t, e) {
        return "string" == typeof e && (e = {id: "", text: e}), e
      }, t.prototype.removePlaceholder = function (t, e) {
        for (var n = e.slice(0), i = e.length - 1; 0 <= i; i--) {
          var s = e[i];
          this.placeholder.id === s.id && n.splice(i, 1)
        }
        return n
      }, t
    }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
      function t(t, e, n, i) {
        this.lastParams = {}, t.call(this, e, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
      }

      return t.prototype.append = function (t, e) {
        this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded())
      }, t.prototype.bind = function (t, e, n) {
        var i = this;
        t.call(this, e, n), e.on("query", function (t) {
          i.lastParams = t, i.loading = !0
        }), e.on("query:append", function (t) {
          i.lastParams = t, i.loading = !0
        }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
      }, t.prototype.loadMoreIfNeeded = function () {
        var t = n.contains(document.documentElement, this.$loadingMore[0]);
        if (!this.loading && t) {
          var e = this.$results.offset().top + this.$results.outerHeight(!1);
          this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= e + 50 && this.loadMore()
        }
      }, t.prototype.loadMore = function () {
        this.loading = !0;
        var t = n.extend({}, {page: 1}, this.lastParams);
        t.page++, this.trigger("query:append", t)
      }, t.prototype.showLoadingMore = function (t, e) {
        return e.pagination && e.pagination.more
      }, t.prototype.createLoadingMore = function () {
        var t = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
          e = this.options.get("translations").get("loadingMore");
        return t.html(e(this.lastParams)), t
      }, t
    }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (h, a) {
      function t(t, e, n) {
        this.$dropdownParent = h(n.get("dropdownParent") || document.body), t.call(this, e, n)
      }

      return t.prototype.bind = function (t, e, n) {
        var i = this;
        t.call(this, e, n), e.on("open", function () {
          i._showDropdown(), i._attachPositioningHandler(e), i._bindContainerResultHandlers(e)
        }), e.on("close", function () {
          i._hideDropdown(), i._detachPositioningHandler(e)
        }), this.$dropdownContainer.on("mousedown", function (t) {
          t.stopPropagation()
        })
      }, t.prototype.destroy = function (t) {
        t.call(this), this.$dropdownContainer.remove()
      }, t.prototype.position = function (t, e, n) {
        e.attr("class", n.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
          position: "absolute",
          top: -999999
        }), this.$container = n
      }, t.prototype.render = function (t) {
        var e = h("<span></span>"), n = t.call(this);
        return e.append(n), this.$dropdownContainer = e
      }, t.prototype._hideDropdown = function () {
        this.$dropdownContainer.detach()
      }, t.prototype._bindContainerResultHandlers = function (t, e) {
        if (!this._containerResultsHandlersBound) {
          var n = this;
          e.on("results:all", function () {
            n._positionDropdown(), n._resizeDropdown()
          }), e.on("results:append", function () {
            n._positionDropdown(), n._resizeDropdown()
          }), e.on("results:message", function () {
            n._positionDropdown(), n._resizeDropdown()
          }), e.on("select", function () {
            n._positionDropdown(), n._resizeDropdown()
          }), e.on("unselect", function () {
            n._positionDropdown(), n._resizeDropdown()
          }), this._containerResultsHandlersBound = !0
        }
      }, t.prototype._attachPositioningHandler = function (t, e) {
        var n = this, i = "scroll.select2." + e.id, s = "resize.select2." + e.id,
          r = "orientationchange.select2." + e.id, o = this.$container.parents().filter(a.hasScroll);
        o.each(function () {
          a.StoreData(this, "select2-scroll-position", {x: h(this).scrollLeft(), y: h(this).scrollTop()})
        }), o.on(i, function () {
          var t = a.GetData(this, "select2-scroll-position");
          h(this).scrollTop(t.y)
        }), h(window).on(i + " " + s + " " + r, function () {
          n._positionDropdown(), n._resizeDropdown()
        })
      }, t.prototype._detachPositioningHandler = function (t, e) {
        var n = "scroll.select2." + e.id, i = "resize.select2." + e.id, s = "orientationchange.select2." + e.id;
        this.$container.parents().filter(a.hasScroll).off(n), h(window).off(n + " " + i + " " + s)
      }, t.prototype._positionDropdown = function () {
        var t = h(window), e = this.$dropdown.hasClass("select2-dropdown--above"),
          n = this.$dropdown.hasClass("select2-dropdown--below"), i = null, s = this.$container.offset();
        s.bottom = s.top + this.$container.outerHeight(!1);
        var r = {height: this.$container.outerHeight(!1)};
        r.top = s.top, r.bottom = s.top + r.height;
        var o = {height: this.$dropdown.outerHeight(!1)}, a = {top: t.scrollTop(), bottom: t.scrollTop() + t.height()},
          l = a.top < s.top - o.height, c = a.bottom > s.bottom + o.height, u = {left: s.left, top: r.bottom},
          d = this.$dropdownParent;
        "static" === d.css("position") && (d = d.offsetParent());
        var p = {top: 0, left: 0};
        (h.contains(document.body, d[0]) || d[0].isConnected) && (p = d.offset()), u.top -= p.top, u.left -= p.left, e || n || (i = "below"), c || !l || e ? !l && c && e && (i = "below") : i = "above", ("above" == i || e && "below" !== i) && (u.top = r.top - p.top - o.height), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(u)
      }, t.prototype._resizeDropdown = function () {
        var t = {width: this.$container.outerWidth(!1) + "px"};
        this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t)
      }, t.prototype._showDropdown = function () {
        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
      }, t
    }), t.define("select2/dropdown/minimumResultsForSearch", [], function () {
      function s(t) {
        for (var e = 0, n = 0; n < t.length; n++) {
          var i = t[n];
          i.children ? e += s(i.children) : e++
        }
        return e
      }

      function t(t, e, n, i) {
        this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = Infinity), t.call(this, e, n, i)
      }

      return t.prototype.showSearch = function (t, e) {
        return !(s(e.data.results) < this.minimumResultsForSearch) && t.call(this, e)
      }, t
    }), t.define("select2/dropdown/selectOnClose", ["../utils"], function (r) {
      function t() {
      }

      return t.prototype.bind = function (t, e, n) {
        var i = this;
        t.call(this, e, n), e.on("close", function (t) {
          i._handleSelectOnClose(t)
        })
      }, t.prototype._handleSelectOnClose = function (t, e) {
        if (e && null != e.originalSelect2Event) {
          var n = e.originalSelect2Event;
          if ("select" === n._type || "unselect" === n._type) return
        }
        var i = this.getHighlightedResults();
        if (!(i.length < 1)) {
          var s = r.GetData(i[0], "data");
          null != s.element && s.element.selected || null == s.element && s.selected || this.trigger("select", {data: s})
        }
      }, t
    }), t.define("select2/dropdown/closeOnSelect", [], function () {
      function t() {
      }

      return t.prototype.bind = function (t, e, n) {
        var i = this;
        t.call(this, e, n), e.on("select", function (t) {
          i._selectTriggered(t)
        }), e.on("unselect", function (t) {
          i._selectTriggered(t)
        })
      }, t.prototype._selectTriggered = function (t, e) {
        var n = e.originalEvent;
        n && (n.ctrlKey || n.metaKey) || this.trigger("close", {originalEvent: n, originalSelect2Event: e})
      }, t
    }), t.define("select2/i18n/en", [], function () {
      return {
        errorLoading: function () {
          return "The results could not be loaded."
        }, inputTooLong: function (t) {
          var e = t.input.length - t.maximum, n = "Please delete " + e + " character";
          return 1 != e && (n += "s"), n
        }, inputTooShort: function (t) {
          return "Please enter " + (t.minimum - t.input.length) + " or more characters"
        }, loadingMore: function () {
          return "Loading more results\u2026"
        }, maximumSelected: function (t) {
          var e = "You can only select " + t.maximum + " item";
          return 1 != t.maximum && (e += "s"), e
        }, noResults: function () {
          return "No results found"
        }, searching: function () {
          return "Searching\u2026"
        }, removeAllItems: function () {
          return "Remove all items"
        }
      }
    }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (c, u, d, p, h, f, m, g, y, v, l, n, b, _, w, k, x, T, D, C, S, $, M, A, E, j, O, I) {
      function t() {
        this.reset()
      }

      return t.prototype.apply = function (t) {
        if (null == (t = c.extend(!0, {}, this.defaults, t)).dataAdapter) {
          if (null != t.ajax ? t.dataAdapter = w : null != t.data ? t.dataAdapter = _ : t.dataAdapter = b, 0 < t.minimumInputLength && (t.dataAdapter = v.Decorate(t.dataAdapter, T)), 0 < t.maximumInputLength && (t.dataAdapter = v.Decorate(t.dataAdapter, D)), 0 < t.maximumSelectionLength && (t.dataAdapter = v.Decorate(t.dataAdapter, C)), t.tags && (t.dataAdapter = v.Decorate(t.dataAdapter, k)), null == t.tokenSeparators && null == t.tokenizer || (t.dataAdapter = v.Decorate(t.dataAdapter, x)), null != t.query) {
            var e = u(t.amdBase + "compat/query");
            t.dataAdapter = v.Decorate(t.dataAdapter, e)
          }
          if (null != t.initSelection) {
            var n = u(t.amdBase + "compat/initSelection");
            t.dataAdapter = v.Decorate(t.dataAdapter, n)
          }
        }
        if (null == t.resultsAdapter && (t.resultsAdapter = d, null != t.ajax && (t.resultsAdapter = v.Decorate(t.resultsAdapter, A)), null != t.placeholder && (t.resultsAdapter = v.Decorate(t.resultsAdapter, M)), t.selectOnClose && (t.resultsAdapter = v.Decorate(t.resultsAdapter, O))), null == t.dropdownAdapter) {
          if (t.multiple) t.dropdownAdapter = S; else {
            var i = v.Decorate(S, $);
            t.dropdownAdapter = i
          }
          if (0 !== t.minimumResultsForSearch && (t.dropdownAdapter = v.Decorate(t.dropdownAdapter, j)), t.closeOnSelect && (t.dropdownAdapter = v.Decorate(t.dropdownAdapter, I)), null != t.dropdownCssClass || null != t.dropdownCss || null != t.adaptDropdownCssClass) {
            var s = u(t.amdBase + "compat/dropdownCss");
            t.dropdownAdapter = v.Decorate(t.dropdownAdapter, s)
          }
          t.dropdownAdapter = v.Decorate(t.dropdownAdapter, E)
        }
        if (null == t.selectionAdapter) {
          if (t.multiple ? t.selectionAdapter = h : t.selectionAdapter = p, null != t.placeholder && (t.selectionAdapter = v.Decorate(t.selectionAdapter, f)), t.allowClear && (t.selectionAdapter = v.Decorate(t.selectionAdapter, m)), t.multiple && (t.selectionAdapter = v.Decorate(t.selectionAdapter, g)), null != t.containerCssClass || null != t.containerCss || null != t.adaptContainerCssClass) {
            var r = u(t.amdBase + "compat/containerCss");
            t.selectionAdapter = v.Decorate(t.selectionAdapter, r)
          }
          t.selectionAdapter = v.Decorate(t.selectionAdapter, y)
        }
        t.language = this._resolveLanguage(t.language), t.language.push("en");
        for (var o = [], a = 0; a < t.language.length; a++) {
          var l = t.language[a];
          -1 === o.indexOf(l) && o.push(l)
        }
        return t.language = o, t.translations = this._processTranslations(t.language, t.debug), t
      }, t.prototype.reset = function () {
        function o(t) {
          function e(t) {
            return n[t] || t
          }

          return t.replace(/[^\u0000-\u007E]/g, e)
        }

        function a(t, e) {
          if ("" === c.trim(t.term)) return e;
          if (e.children && 0 < e.children.length) {
            for (var n = c.extend(!0, {}, e), i = e.children.length - 1; 0 <= i; i--) {
              null == a(t, e.children[i]) && n.children.splice(i, 1)
            }
            return 0 < n.children.length ? n : a(t, n)
          }
          var s = o(e.text).toUpperCase(), r = o(t.term).toUpperCase();
          return -1 < s.indexOf(r) ? e : null
        }

        this.defaults = {
          amdBase: "./",
          amdLanguageBase: "./i18n/",
          closeOnSelect: !0,
          debug: !1,
          dropdownAutoWidth: !1,
          escapeMarkup: v.escapeMarkup,
          language: {},
          matcher: a,
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: !1,
          scrollAfterSelect: !1,
          sorter: function (t) {
            return t
          },
          templateResult: function (t) {
            return t.text
          },
          templateSelection: function (t) {
            return t.text
          },
          theme: "default",
          width: "resolve"
        }
      }, t.prototype.applyFromElement = function (t, e) {
        var n = t.language, i = this.defaults.language, s = e.prop("lang"), r = e.closest("[lang]").prop("lang"),
          o = Array.prototype.concat.call(this._resolveLanguage(s), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(r));
        return t.language = o, t
      }, t.prototype._resolveLanguage = function (t) {
        if (!t) return [];
        if (c.isEmptyObject(t)) return [];
        if (c.isPlainObject(t)) return [t];
        var e;
        e = c.isArray(t) ? t : [t];
        for (var n = [], i = 0; i < e.length; i++) if (n.push(e[i]), "string" == typeof e[i] && 0 < e[i].indexOf("-")) {
          var s = e[i].split("-")[0];
          n.push(s)
        }
        return n
      }, t.prototype._processTranslations = function (t, e) {
        for (var n = new l, i = 0; i < t.length; i++) {
          var s = new l, r = t[i];
          if ("string" == typeof r) try {
            s = l.loadPath(r)
          } catch (o) {
            try {
              r = this.defaults.amdLanguageBase + r, s = l.loadPath(r)
            } catch (a) {
              e && window.console && console.warn && console.warn('Select2: The language file for "' + r + '" could not be automatically loaded. A fallback will be used instead.')
            }
          } else s = c.isPlainObject(r) ? new l(r) : r;
          n.extend(s)
        }
        return n
      }, t.prototype.set = function (t, e) {
        var n = {};
        n[c.camelCase(t)] = e;
        var i = v._convertData(n);
        c.extend(!0, this.defaults, i)
      }, new t
    }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (i, d, s, p) {
      function t(t, e) {
        if (this.options = t, null != e && this.fromElement(e), null != e && (this.options = s.applyFromElement(this.options, e)), this.options = s.apply(this.options), e && e.is("input")) {
          var n = i(this.get("amdBase") + "compat/inputData");
          this.options.dataAdapter = p.Decorate(this.options.dataAdapter, n)
        }
      }

      return t.prototype.fromElement = function (t) {
        function e(t, e) {
          return e.toUpperCase()
        }

        var n = ["select2"];
        null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), p.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), p.StoreData(t[0], "data", p.GetData(t[0], "select2Tags")), p.StoreData(t[0], "tags", !0)), p.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", p.GetData(t[0], "ajaxUrl")), p.StoreData(t[0], "ajax-Url", p.GetData(t[0], "ajaxUrl")));
        for (var i = {}, s = 0; s < t[0].attributes.length; s++) {
          var r = t[0].attributes[s].name, o = "data-";
          if (r.substr(0, o.length) == o) {
            var a = r.substring(o.length), l = p.GetData(t[0], a);
            i[a.replace(/-([a-z])/g, e)] = l
          }
        }
        d.fn.jquery && "1." == d.fn.jquery.substr(0, 2) && t[0].dataset && (i = d.extend(!0, {}, t[0].dataset, i));
        var c = d.extend(!0, {}, p.GetData(t[0]), i);
        for (var u in c = p._convertData(c)) -1 < d.inArray(u, n) || (d.isPlainObject(this.options[u]) ? d.extend(this.options[u], c[u]) : this.options[u] = c[u]);
        return this
      }, t.prototype.get = function (t) {
        return this.options[t]
      }, t.prototype.set = function (t, e) {
        this.options[t] = e
      }, t
    }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (r, c, u, i) {
      var d = function (t, e) {
        null != u.GetData(t[0], "select2") && u.GetData(t[0], "select2").destroy(), this.$element = t, this.id = this._generateId(t), e = e || {}, this.options = new c(e, t), d.__super__.constructor.call(this);
        var n = t.attr("tabindex") || 0;
        u.StoreData(t[0], "old-tabindex", n), t.attr("tabindex", "-1");
        var i = this.options.get("dataAdapter");
        this.dataAdapter = new i(t, this.options);
        var s = this.render();
        this._placeContainer(s);
        var r = this.options.get("selectionAdapter");
        this.selection = new r(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
        var o = this.options.get("dropdownAdapter");
        this.dropdown = new o(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
        var a = this.options.get("resultsAdapter");
        this.results = new a(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
        var l = this;
        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (t) {
          l.trigger("selection:update", {data: t})
        }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), u.StoreData(t[0], "select2", this), t.data("select2", this)
      };
      return u.Extend(d, u.Observable), d.prototype._generateId = function (t) {
        return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + u.generateChars(2) : u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
      }, d.prototype._placeContainer = function (t) {
        t.insertAfter(this.$element);
        var e = this._resolveWidth(this.$element, this.options.get("width"));
        null != e && t.css("width", e)
      }, d.prototype._resolveWidth = function (t, e) {
        var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
        if ("resolve" == e) {
          var i = this._resolveWidth(t, "style");
          return null != i ? i : this._resolveWidth(t, "element")
        }
        if ("element" == e) {
          var s = t.outerWidth(!1);
          return s <= 0 ? "auto" : s + "px"
        }
        if ("style" != e) return "computedstyle" != e ? e : window.getComputedStyle(t[0]).width;
        var r = t.attr("style");
        if ("string" != typeof r) return null;
        for (var o = r.split(";"), a = 0, l = o.length; a < l; a += 1) {
          var c = o[a].replace(/\s/g, "").match(n);
          if (null !== c && 1 <= c.length) return c[1]
        }
        return null
      }, d.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
      }, d.prototype._registerDomEvents = function () {
        var e = this;
        this.$element.on("change.select2", function () {
          e.dataAdapter.current(function (t) {
            e.trigger("selection:update", {data: t})
          })
        }), this.$element.on("focus.select2", function (t) {
          e.trigger("focus", t)
        }), this._syncA = u.bind(this._syncAttributes, this), this._syncS = u.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
        var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        null != t ? (this._observer = new t(function (t) {
          e._syncA(), e._syncS(null, t)
        }), this._observer.observe(this.$element[0], {
          attributes: !0,
          childList: !0,
          subtree: !1
        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
      }, d.prototype._registerDataEvents = function () {
        var n = this;
        this.dataAdapter.on("*", function (t, e) {
          n.trigger(t, e)
        })
      }, d.prototype._registerSelectionEvents = function () {
        var n = this, i = ["toggle", "focus"];
        this.selection.on("toggle", function () {
          n.toggleDropdown()
        }), this.selection.on("focus", function (t) {
          n.focus(t)
        }), this.selection.on("*", function (t, e) {
          -1 === r.inArray(t, i) && n.trigger(t, e)
        })
      }, d.prototype._registerDropdownEvents = function () {
        var n = this;
        this.dropdown.on("*", function (t, e) {
          n.trigger(t, e)
        })
      }, d.prototype._registerResultsEvents = function () {
        var n = this;
        this.results.on("*", function (t, e) {
          n.trigger(t, e)
        })
      }, d.prototype._registerEvents = function () {
        var n = this;
        this.on("open", function () {
          n.$container.addClass("select2-container--open")
        }), this.on("close", function () {
          n.$container.removeClass("select2-container--open")
        }), this.on("enable", function () {
          n.$container.removeClass("select2-container--disabled")
        }), this.on("disable", function () {
          n.$container.addClass("select2-container--disabled")
        }), this.on("blur", function () {
          n.$container.removeClass("select2-container--focus")
        }), this.on("query", function (e) {
          n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(e, function (t) {
            n.trigger("results:all", {data: t, query: e})
          })
        }), this.on("query:append", function (e) {
          this.dataAdapter.query(e, function (t) {
            n.trigger("results:append", {data: t, query: e})
          })
        }), this.on("keypress", function (t) {
          var e = t.which;
          n.isOpen() ? e === i.ESC || e === i.TAB || e === i.UP && t.altKey ? (n.close(t), t.preventDefault()) : e === i.ENTER ? (n.trigger("results:select", {}), t.preventDefault()) : e === i.SPACE && t.ctrlKey ? (n.trigger("results:toggle", {}), t.preventDefault()) : e === i.UP ? (n.trigger("results:previous", {}), t.preventDefault()) : e === i.DOWN && (n.trigger("results:next", {}), t.preventDefault()) : (e === i.ENTER || e === i.SPACE || e === i.DOWN && t.altKey) && (n.open(), t.preventDefault())
        })
      }, d.prototype._syncAttributes = function () {
        this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
      }, d.prototype._isChangeMutation = function (t, e) {
        var n = !1, i = this;
        if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
          if (e) if (e.addedNodes && 0 < e.addedNodes.length) for (var s = 0; s < e.addedNodes.length; s++) {
            e.addedNodes[s].selected && (n = !0)
          } else e.removedNodes && 0 < e.removedNodes.length ? n = !0 : r.isArray(e) && r.each(e, function (t, e) {
            if (i._isChangeMutation(t, e)) return !(n = !0)
          }); else n = !0;
          return n
        }
      }, d.prototype._syncSubtree = function (t, e) {
        var n = this._isChangeMutation(t, e), i = this;
        n && this.dataAdapter.current(function (t) {
          i.trigger("selection:update", {data: t})
        })
      }, d.prototype.trigger = function (t, e) {
        var n = d.__super__.trigger,
          i = {open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing"};
        if (e === undefined && (e = {}), t in i) {
          var s = i[t], r = {prevented: !1, name: t, args: e};
          if (n.call(this, s, r), r.prevented) return void (e.prevented = !0)
        }
        n.call(this, t, e)
      }, d.prototype.toggleDropdown = function () {
        this.isDisabled() || (this.isOpen() ? this.close() : this.open())
      }, d.prototype.open = function () {
        this.isOpen() || this.isDisabled() || this.trigger("query", {})
      }, d.prototype.close = function (t) {
        this.isOpen() && this.trigger("close", {originalEvent: t})
      }, d.prototype.isEnabled = function () {
        return !this.isDisabled()
      }, d.prototype.isDisabled = function () {
        return this.options.get("disabled")
      }, d.prototype.isOpen = function () {
        return this.$container.hasClass("select2-container--open")
      }, d.prototype.hasFocus = function () {
        return this.$container.hasClass("select2-container--focus")
      }, d.prototype.focus = function () {
        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
      }, d.prototype.enable = function (t) {
        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != t && 0 !== t.length || (t = [!0]);
        var e = !t[0];
        this.$element.prop("disabled", e)
      }, d.prototype.data = function () {
        this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
        var e = [];
        return this.dataAdapter.current(function (t) {
          e = t
        }), e
      }, d.prototype.val = function (t) {
        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
        var e = t[0];
        r.isArray(e) && (e = r.map(e, function (t) {
          return t.toString()
        })), this.$element.val(e).trigger("input").trigger("change")
      }, d.prototype.destroy = function () {
        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", u.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), u.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
      }, d.prototype.render = function () {
        var t = r('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
        return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), u.StoreData(t[0], "element", this.$element), t
      }, d
    }), t.define("select2/compat/utils", ["jquery"], function (o) {
      function t(t, e, n) {
        var i, s, r = [];
        (i = o.trim(t.attr("class"))) && o((i = "" + i).split(/\s+/)).each(function () {
          0 === this.indexOf("select2-") && r.push(this)
        }), (i = o.trim(e.attr("class"))) && o((i = "" + i).split(/\s+/)).each(function () {
          0 !== this.indexOf("select2-") && null != (s = n(this)) && r.push(s)
        }), t.attr("class", r.join(" "))
      }

      return {syncCssClasses: t}
    }), t.define("select2/compat/containerCss", ["jquery", "./utils"], function (o, a) {
      function l() {
        return null
      }

      function t() {
      }

      return t.prototype.render = function (t) {
        var e = t.call(this), n = this.options.get("containerCssClass") || "";
        o.isFunction(n) && (n = n(this.$element));
        var i = this.options.get("adaptContainerCssClass");
        if (i = i || l, -1 !== n.indexOf(":all:")) {
          n = n.replace(":all:", "");
          var s = i;
          i = function (t) {
            var e = s(t);
            return null != e ? e + " " + t : t
          }
        }
        var r = this.options.get("containerCss") || {};
        return o.isFunction(r) && (r = r(this.$element)), a.syncCssClasses(e, this.$element, i), e.css(r), e.addClass(n), e
      }, t
    }), t.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (o, a) {
      function l() {
        return null
      }

      function t() {
      }

      return t.prototype.render = function (t) {
        var e = t.call(this), n = this.options.get("dropdownCssClass") || "";
        o.isFunction(n) && (n = n(this.$element));
        var i = this.options.get("adaptDropdownCssClass");
        if (i = i || l, -1 !== n.indexOf(":all:")) {
          n = n.replace(":all:", "");
          var s = i;
          i = function (t) {
            var e = s(t);
            return null != e ? e + " " + t : t
          }
        }
        var r = this.options.get("dropdownCss") || {};
        return o.isFunction(r) && (r = r(this.$element)), a.syncCssClasses(e, this.$element, i), e.css(r), e.addClass(n), e
      }, t
    }), t.define("select2/compat/initSelection", ["jquery"], function (i) {
      function t(t, e, n) {
        n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, t.call(this, e, n)
      }

      return t.prototype.current = function (t, e) {
        var n = this;
        this._isInitialized ? t.call(this, e) : this.initSelection.call(null, this.$element, function (t) {
          n._isInitialized = !0, i.isArray(t) || (t = [t]), e(t)
        })
      }, t
    }), t.define("select2/compat/inputData", ["jquery", "../utils"], function (o, i) {
      function t(t, e, n) {
        this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === e.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), t.call(this, e, n)
      }

      return t.prototype.current = function (t, e) {
        function i(t, e) {
          var n = [];
          return t.selected || -1 !== o.inArray(t.id, e) ? (t.selected = !0, n.push(t)) : t.selected = !1, t.children && n.push.apply(n, i(t.children, e)), n
        }

        for (var n = [], s = 0; s < this._currentData.length; s++) {
          var r = this._currentData[s];
          n.push.apply(n, i(r, this.$element.val().split(this._valueSeparator)))
        }
        e(n)
      }, t.prototype.select = function (t, e) {
        if (this.options.get("multiple")) {
          var n = this.$element.val();
          n += this._valueSeparator + e.id, this.$element.val(n), this.$element.trigger("input").trigger("change")
        } else this.current(function (t) {
          o.map(t, function (t) {
            t.selected = !1
          })
        }), this.$element.val(e.id), this.$element.trigger("input").trigger("change")
      }, t.prototype.unselect = function (t, s) {
        var r = this;
        s.selected = !1, this.current(function (t) {
          for (var e = [], n = 0; n < t.length; n++) {
            var i = t[n];
            s.id != i.id && e.push(i.id)
          }
          r.$element.val(e.join(r._valueSeparator)), r.$element.trigger("input").trigger("change")
        })
      }, t.prototype.query = function (t, e, n) {
        for (var i = [], s = 0; s < this._currentData.length; s++) {
          var r = this._currentData[s], o = this.matches(e, r);
          null !== o && i.push(o)
        }
        n({results: i})
      }, t.prototype.addOptions = function (t, e) {
        var n = o.map(e, function (t) {
          return i.GetData(t[0], "data")
        });
        this._currentData.push.apply(this._currentData, n)
      }, t
    }), t.define("select2/compat/matcher", ["jquery"], function (o) {
      function t(r) {
        function t(t, e) {
          var n = o.extend(!0, {}, e);
          if (null == t.term || "" === o.trim(t.term)) return n;
          if (e.children) {
            for (var i = e.children.length - 1; 0 <= i; i--) {
              var s = e.children[i];
              r(t.term, s.text, s) || n.children.splice(i, 1)
            }
            if (0 < n.children.length) return n
          }
          return r(t.term, e.text, e) ? n : null
        }

        return t
      }

      return t
    }), t.define("select2/compat/query", [], function () {
      function t(t, e, n) {
        n.get("debug") && window.console && console.warn && console.warn(
          "Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), t.call(this, e, n)
      }

      return t.prototype.query = function (t, e, n) {
        e.callback = n, this.options.get("query").call(null, e)
      }, t
    }), t.define("select2/dropdown/attachContainer", [], function () {
      function t(t, e, n) {
        t.call(this, e, n)
      }

      return t.prototype.position = function (t, e, n) {
        n.find(".dropdown-wrapper").append(e), e.addClass("select2-dropdown--below"), n.addClass("select2-container--below")
      }, t
    }), t.define("select2/dropdown/stopPropagation", [], function () {
      function t() {
      }

      return t.prototype.bind = function (t, e, n) {
        t.call(this, e, n);
        var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
        this.$dropdown.on(i.join(" "), function (t) {
          t.stopPropagation()
        })
      }, t
    }), t.define("select2/selection/stopPropagation", [], function () {
      function t() {
      }

      return t.prototype.bind = function (t, e, n) {
        t.call(this, e, n);
        var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
        this.$selection.on(i.join(" "), function (t) {
          t.stopPropagation()
        })
      }, t
    }), e = function (p) {
      function e(t) {
        var e = t || window.event, n = y.call(arguments, 1), i = 0, s = 0, r = 0, o = 0, a = 0, l = 0;
        if ((t = p.event.fix(e)).type = "mousewheel", "detail" in e && (r = -1 * e.detail), "wheelDelta" in e && (r = e.wheelDelta), "wheelDeltaY" in e && (r = e.wheelDeltaY), "wheelDeltaX" in e && (s = -1 * e.wheelDeltaX), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (s = -1 * r, r = 0), i = 0 === r ? s : r, "deltaY" in e && (i = r = -1 * e.deltaY), "deltaX" in e && (s = e.deltaX, 0 === r && (i = -1 * s)), 0 !== r || 0 !== s) {
          if (1 === e.deltaMode) {
            var c = p.data(this, "mousewheel-line-height");
            i *= c, r *= c, s *= c
          } else if (2 === e.deltaMode) {
            var u = p.data(this, "mousewheel-page-height");
            i *= u, r *= u, s *= u
          }
          if (o = Math.max(Math.abs(r), Math.abs(s)), (!g || o < g) && f(e, g = o) && (g /= 40), f(e, o) && (i /= 40, s /= 40, r /= 40), i = Math[1 <= i ? "floor" : "ceil"](i / g), s = Math[1 <= s ? "floor" : "ceil"](s / g), r = Math[1 <= r ? "floor" : "ceil"](r / g), v.settings.normalizeOffset && this.getBoundingClientRect) {
            var d = this.getBoundingClientRect();
            a = t.clientX - d.left, l = t.clientY - d.top
          }
          return t.deltaX = s, t.deltaY = r, t.deltaFactor = g, t.offsetX = a, t.offsetY = l, t.deltaMode = 0, n.unshift(t, i, s, r), m && clearTimeout(m), m = setTimeout(h, 200), (p.event.dispatch || p.event.handle).apply(this, n)
        }
      }

      function h() {
        g = null
      }

      function f(t, e) {
        return v.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
      }

      var m, g, t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        n = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        y = Array.prototype.slice;
      if (p.event.fixHooks) for (var i = t.length; i;) p.event.fixHooks[t[--i]] = p.event.mouseHooks;
      var v = p.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
          if (this.addEventListener) for (var t = n.length; t;) this.addEventListener(n[--t], e, !1); else this.onmousewheel = e;
          p.data(this, "mousewheel-line-height", v.getLineHeight(this)), p.data(this, "mousewheel-page-height", v.getPageHeight(this))
        }, teardown: function () {
          if (this.removeEventListener) for (var t = n.length; t;) this.removeEventListener(n[--t], e, !1); else this.onmousewheel = null;
          p.removeData(this, "mousewheel-line-height"), p.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (t) {
          var e = p(t), n = e["offsetParent" in p.fn ? "offsetParent" : "parent"]();
          return n.length || (n = p("body")), parseInt(n.css("fontSize"), 10) || parseInt(e.css("fontSize"), 10) || 16
        }, getPageHeight: function (t) {
          return p(t).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
      };
      p.fn.extend({
        mousewheel: function (t) {
          return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        }, unmousewheel: function (t) {
          return this.unbind("mousewheel", t)
        }
      })
    }, "function" == typeof t.define && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], e) : "object" == typeof exports ? module.exports = e : e(n), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (s, t, r, e, o) {
      if (null == s.fn.select2) {
        var a = ["open", "close", "destroy"];
        s.fn.select2 = function (e) {
          if ("object" == typeof (e = e || {})) return this.each(function () {
            var t = s.extend(!0, {}, e);
            new r(s(this), t)
          }), this;
          if ("string" != typeof e) throw new Error("Invalid arguments for Select2: " + e);
          var n, i = Array.prototype.slice.call(arguments, 1);
          return this.each(function () {
            var t = o.GetData(this, "select2");
            null == t && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), n = t[e].apply(t, i)
          }), -1 < s.inArray(e, a) ? this : n
        }
      }
      return null == s.fn.select2.defaults && (s.fn.select2.defaults = e), r
    }), {define: t.define, require: t.require}
  }(), e = t.require("jquery.select2");
  return n.fn.select2.amd = t, e
}), function () {
  var e = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  };
  null == UiKit.Select2 && (UiKit.Select2 = {}), UiKit.Select2.addSelect2 = function () {
    function t(t) {
      var n, i, s, r, o;
      this.addSelect2NdBlock = e(this.addSelect2NdBlock, this), this.addSelect2Large = e(this.addSelect2Large, this), this.addSelect2Medium = e(this.addSelect2Medium, this), this.addSelect2 = e(this.addSelect2, this), t.find('[data-role="select2"]').each((n = this, function (t, e) {
        return n.addSelect2($(e))
      })), t.find('[data-role="select2-md"]').each((i = this, function (t, e) {
        return i.addSelect2Medium($(e))
      })), t.find('[data-role="select2-lg"]').each((s = this, function (t, e) {
        return s.addSelect2Large($(e))
      })), t.find('[data-role="select2-nd-block"]').each((r = this, function (t, e) {
        return r.addSelect2NdBlock($(e))
      })), $("body").on("cocoon:after-insert", (o = this, function (t, e) {
        return $(e).find('[data-role="select2"]').each(function (t, e) {
          return o.addSelect2($(e))
        })
      }))
    }

    return t.prototype.options = {
      allowClear: !1,
      closeOnSelect: !0,
      placeholder: "Select an Option",
      theme: "bootstrap",
      width: "100%",
      msinimumResultsForSearch: 20
    }, t.prototype.addSelect2 = function (t) {
      if (!t.data("select2")) return t.select2(this.options)
    }, t.prototype.addSelect2Medium = function (t) {
      if (!t.data("select2")) return this.options.dropdownCssClass = "select-md", this.options.containerCssClass = "select-md", t.select2(this.options)
    }, t.prototype.addSelect2Large = function (t) {
      if (!t.data("select2")) return this.options.dropdownCssClass = "select-lg", this.options.containerCssClass = "select-lg", t.select2(this.options)
    }, t.prototype.addSelect2NdBlock = function (t) {
      if (!t.data("select2")) return this.options.dropdownCssClass = "select-nd-block", this.options.containerCssClass = "select-nd-block", this.options.dropdownAutoWidth = !0, t.select2(this.options)
    }, t
  }()
}.call(this), function () {
  UiKit.Confirm = function () {
    function t(t, e) {
      var n, i, s, r, o;
      null == e && (e = {}), this.modal = $(this.modalSelector), s = e.yesText || "Yes", i = e.noText || "No", o = e.yes, r = e.no, n = e.messageBottom, this.modal.one("show.bs.modal", function () {
        if ($(this).find(".message").text(t), n && $(this).find(".message").append("</br>" + n), $(this).find(".yes").text(s), $(this).find(".no").text(i), null != o && $(this).one("click", ".yes", o), null != r) return $(this).one("click", ".no", r)
      }), this.modal.one("hide.bs.modal", function () {
        if ($(this).find(".yes").text("Yes"), $(this).find(".no").text("No"), null != o && $(this).off("click", ".yes", o), null != r) return $(this).off("click", ".no", r)
      }), this.modal.modal("show")
    }

    return t.prototype.modalSelector = "#bs-confirm-modal", t
  }(), $(function () {
    if ($("#bs-confirm-modal").length) return $.rails.allowAction = function (t) {
      return !t.attr("data-confirm") || ($.rails.showConfirmDialog(t), !1)
    }, $.rails.confirmed = function (t) {
      return t.removeAttr("data-confirm"), t.trigger("click.rails")
    }, $.rails.showConfirmDialog = function (t) {
      var e, n, i;
      return i = t.attr("data-yesText"), n = t.attr("data-noText"), e = t.attr("data-confirm"), new UiKit.Confirm(e, {
        noText: n,
        yesText: i,
        yes: function () {
          return $.rails.confirmed(t)
        }
      })
    }
  })
}.call(this), function () {
  var e = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  };
  UiKit.Select2.Base = function () {
    function t(t) {
      this.selector = t.selector, this.__defaultAjaxData = e(this.__defaultAjaxData, this), this.__ajaxData = e(this.__ajaxData, this), this.requestSpecificParams = e(this.requestSpecificParams, this), this.getResultOptionId = e(this.getResultOptionId, this), this.getResultOptionText = e(this.getResultOptionText, this), this.formatSelectionState = e(this.formatSelectionState, this), this.formatResultState = e(this.formatResultState, this), this.searchText = e(this.searchText, this), this.element = $(this.selector), this.initialize(), this.keywordChange()
    }

    return t.reinit = function () {
      return $(".select2-selection--multiple").find("input").each(function () {
        var t;
        return (t = $(this)).width(t.parents("span.select2-container").width() - 2)
      })
    }, t.disableScrollButSelect2 = function () {
      return $("body").on({
        mousewheel: function (t) {
          if (!$(t.target).hasClass("select2-results__option")) return t.preventDefault(), t.stopPropagation()
        }
      })
    }, t.enableScroll = function () {
      return $("body").unbind("mousewheel")
    }, t.prototype.filterUniqItems = !1, t.prototype.url = null, t.prototype.per_page = 30, t.prototype.fields = "id,name", t.prototype.order = "name asc", t.prototype.fields_name = "name_cont", t.prototype.instance_name = "", t.prototype.placeholder = "Select an Option", t.prototype.valueKey = "id", t.prototype.labelKey = "name", t.prototype.width = "100%", t.prototype.tags = !1, t.prototype.closeOnSelect = !0, t.prototype.proxy = !1, t.prototype.cache = !0, t.prototype.escapeMarkup = !0, t.prototype.proxyDataKey = "data", t.prototype.ajaxDataType = "jsonp", t.prototype.additionAjaxDataParams = {}, t.prototype.selectAllOption = !1, t.prototype.selectAllOptionName = "All", t.prototype.selectAlloptionId = "allOptionId", t.prototype.deselectAllOption = !1, t.prototype.deselectAllOptionName = "Deselect All", t.prototype.deselectAlloptionId = "deselectAllOptionId", t.prototype.deselectAllMessage = "Deselect all selected values?", t.prototype.selectAllAtServer = !1, t.prototype.selectAllTopMessage = "Select All", t.prototype.deselectAllTopMessage = "Deselect All", t.prototype.selectAllAtServerOptionName = "Select All At Server", t.prototype.selectAllAtServerOptionId = "selectallatserverid", t.prototype.selectAllAtServerIdPattern = "--selectallatserver--", t.prototype.widthData = function () {
      return this.width || this.element.data("width")
    }, t.prototype.urlData = function () {
      return this.url || this.element.data("url")
    }, t.prototype.keywordChange = function () {
    }, t.prototype.selectAllMessage = function (t) {
      return t ? "Select all values with " + t + " listed here?" : "Select all values listed here?"
    }, t.prototype.selectAllAtServerMessage = function (t) {
      return t ? "Select all values related to this campaign with " + t + "?" : "Select all values related to this campaign?"
    }, t.prototype.selectAllAtServerSelectedId = function (t) {
      return "" + this.selectAllAtServerIdPattern + t
    }, t.prototype.selectAllAtServerSelectedText = function (t) {
      return t ? "All Values with " + t : "All Values"
    }, t.prototype.processSelectDeselectAll = function () {
      var o;
      if (this.selectAllOption) return this.element.on("select2:selecting", (o = this, function (t) {
        var e, n, i, s, r;
        if (t.params.args && t.params.args.data.id) return t.params.args.data.id === o.deselectAlloptionId ? (n = function () {
          return o.element.select2("close"), o.element.find("option").remove(), o.element.val(null).trigger("change")
        }, new UiKit.Confirm(o.deselectAllTopMessage, {
          messageBottom: o.deselectAllMessage,
          yes: n,
          yesText: "Ok",
          noText: "Cancel"
        }), !1) : t.params.args.data.id === o.selectAllAtServerOptionId ? (e = o.searchText(o.element), s = function () {
          var t;
          if (o.element.select2("close"), e) {
            if (o.element.val() && o.element.val().includes(o.selectAllAtServerSelectedId(e))) return
          } else o.element.find("option").remove(), o.element.val(null);
          return t = new Option(o.selectAllAtServerSelectedText(e), o.selectAllAtServerSelectedId(e), !0, !0), o.element.append(t).trigger("change")
        }, new UiKit.Confirm(o.selectAllTopMessage, {
          messageBottom: o.selectAllAtServerMessage(o.searchText(o.element)),
          yes: s,
          yesText: "Ok",
          noText: "Cancel"
        }), !1) : t.params.args.data.id === o.selectAlloptionId ? (i = function () {
          var t, e, n;
          return n = o.element.val(), o.element.select2("close"), o.element.find("option:not(:selected)").remove(), t = _.filter(o.currentAjaxResults, function (t) {
            return t.id
          }), e = $.map(t, function (t) {
            var e, n;
            return e = !1, o.element.find("option").each(function () {
              $(this).val() === t.id && (e = !0)
            }), e || (n = new Option(t.text, t.id, !0, !0), o.element.append(n)), t.id
          }).concat(n), e = _.uniq(e, function (t) {
            return t
          }), o.element.val(e).trigger("change")
        }, r = o.searchText(o.element), new UiKit.Confirm(o.selectAllTopMessage, {
          messageBottom: o.selectAllMessage(r),
          yes: i,
          yesText: "Ok",
          noText: "Cancel"
        }), !1) : void 0
      }))
    }, t.prototype.searchText = function (t) {
      return t.parent().find(".select2-search__field").val()
    }, t.prototype.formatResultState = function (t) {
      return this.escapeMarkup ? t.text : _.escape(t.text)
    }, t.prototype.formatSelectionState = function (t) {
      return this.escapeMarkup ? t.text : _.escape(t.text)
    }, t.prototype.initialize = function () {
      var e;
      return this.element.select2({
        placeholder: this.placeholder,
        theme: "bootstrap",
        tags: this.tags,
        closeOnSelect: this.closeOnSelect,
        width: this.widthData(),
        ajax: this.__ajaxSettings(),
        templateResult: this.formatResultState,
        templateSelection: this.formatSelectionState,
        escapeMarkup: (e = this, function (t) {
          return e.escapeMarkup ? _.escape(t) : t
        })
      }), this.__preventSelect2OpeningWhenUnselecting(), this.element, this.processSelectDeselectAll()
    }, t.prototype.getResultOptionText = function (t) {
      return t[this.labelKey]
    }, t.prototype.getResultOptionId = function (t) {
      return t[this.valueKey]
    }, t.prototype.requestSpecificParams = function (t) {
      var e;
      return {0: (e = {}, e["" + this.fields_name] = t.term, e)}
    }, t.prototype.__ajaxData = function (t) {
      var e;
      return this.proxy ? ((e = {})[this.proxyDataKey] = this.__defaultAjaxData(t), e) : this.__defaultAjaxData(t)
    }, t.prototype.__defaultAjaxData = function (t) {
      return _.extend({
        page: t.page,
        per_page: this.per_page,
        fields: this.fields,
        q: {g: this.requestSpecificParams(t), s: this.order}
      }, this.additionAjaxDataParams)
    }, t.prototype.__ajaxSettings = function () {
      return {
        url: (t = this, function () {
          return t.urlData()
        }),
        dataType: this.ajaxDataType,
        cache: this.cache,
        data: this.__ajaxData,
        processResults: (i = this, function (t, e) {
          var n;
          return e.page = e.page || 1, n = $.map(t[i.instance_name], function (t) {
            return _.extend({text: i.getResultOptionText(t), id: i.getResultOptionId(t)}, t)
          }), i.filterUniqItems && (n = _.uniq(n, function (t) {
            return t.id
          })), 1 === e.page ? i.currentAjaxResults = n.slice(0) : 1 < e.page && (i.currentAjaxResults = i.currentAjaxResults.concat(n.slice(0))), 1 === e.page && i.deselectAllOption && 0 < n.length && n.unshift({
            text: i.deselectAllOptionName,
            id: i.deselectAlloptionId
          }), 1 === e.page && i.selectAllOption && 0 < n.length && n.unshift({
            text: i.selectAllOptionName,
            id: i.selectAlloptionId
          }), 1 === e.page && i.selectAllAtServer && 0 < n.length && n.unshift({
            text: i.selectAllAtServerOptionName,
            id: i.selectAllAtServerOptionId
          }), {results: n, pagination: {more: e.page * i.per_page < t.total_count}}
        })
      };
      var i, t
    }, t.prototype.__preventSelect2OpeningWhenUnselecting = function () {
      var n;
      return (n = this.element).on("select2:unselect", function () {
        var t, e;
        return t = function (t) {
          return t.preventDefault(), e()
        }, e = function () {
          return n.off("select2:opening", t), n.off("select2:closing", t)
        }, n.on("select2:opening", t), n.on("select2:closing", t), setTimeout(e, 0)
      })
    }, t
  }()
}.call(this), function () {
  UiKit.Select2.CascadeElement = function () {
    function t(t) {
      this.object = t, this.object instanceof Array || (this.object = [this.object])
    }

    return t.prototype.element = function () {
      return this.object[0].element
    }, t.prototype.val = function () {
      return this.object[0].val()
    }, t.prototype.activate = function (e) {
      return this.object.map(function (t) {
        return t.activate(e)
      })
    }, t.prototype.disable = function () {
      return this.object.map(function (t) {
        return t.disable()
      })
    }, t.prototype.reset = function () {
      return this.object.map(function (t) {
        return t.reset()
      })
    }, t.prototype.prefill = function (e) {
      return this.object.map(function (t) {
        return t.prefillSelected(e)
      })
    }, t
  }(), UiKit.Select2.Cascade = function () {
    function t(t) {
      this.itemsSeq = t.map(function (t) {
        return new UiKit.Select2.CascadeElement(t)
      }), this.root = this.itemsSeq[0], this.tail = this.itemsSeq.slice(1), this.currentIndex = 0, this.itemsCount = this.itemsSeq.length, this.initialize()
    }

    return t.prototype.initialize = function () {
      return this.root.enable, this.tail.forEach(function (t) {
        return t.disable()
      }), this.__initializeCascadeEvents(), this.__prefilInitialVaues()
    }, t.prototype.__prefilInitialVaues = function () {
      return this.itemsSeq.forEach((n = this, function (t) {
        var e;
        if (n.currentIndex = n.itemsSeq.indexOf(t), e = n.__nextSelect2()) return t.val() ? e.activate(t.val()) : e.disable()
      }));
      var n
    }, t.prototype.__initializeCascadeEvents = function () {
      var t, e, n, i, s;
      for (s = [], t = 0, n = (i = this.itemsSeq).length; t < n; t++) e = i[t], s.push(e.element().on("change", function (n) {
        return function (e) {
          return function () {
            var t;
            if (!e.element().prop("disabled") && (n.currentIndex = n.itemsSeq.indexOf(e), t = n.__nextSelect2())) return t.reset(), e.val() ? (t.prefill(e.val()), t.activate(e.val())) : t.disable()
          }
        }
      }(this)(e)));
      return s
    }, t.prototype.__nextSelect2 = function () {
      return this.currentIndex + 1 <= this.itemsCount - 1 ? this.itemsSeq[this.currentIndex + 1] : null
    }, t.prototype.__previousSelect2 = function () {
      return 0 === this.currentIndex ? null : this.itemsSeq[this.currentIndex - 1]
    }, t.prototype.__getPreviousSelectValue = function () {
      var t;
      return (t = this.previousSelect2) && t.hasValue() ? t.val() : null
    }, t
  }()
}.call(this), function () {
  var e = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  }, i = function (t, e) {
    function n() {
      this.constructor = t
    }

    for (var i in e) s.call(e, i) && (t[i] = e[i]);
    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
  }, s = {}.hasOwnProperty;
  UiKit.Select2.SimpleCascadeBase = function (t) {
    function n() {
      return this.requestSpecificParams = e(this.requestSpecificParams, this), n.__super__.constructor.apply(this, arguments)
    }

    return i(n, t), n.prototype.width = "100%", n.prototype.prevElementVal = null, n.prototype.prevElementKey = null, n.prototype.activate = function (t) {
      return this.prevElementVal = t, $(this.element).prop("disabled", !1)
    }, n.prototype.val = function () {
      return this.element.val()
    }, n.prototype.reset = function () {
      if (0 < this.element.find("option:selected").length) return this.element.val(""), this.element.innerHTML = "", this.element.change()
    }, n.prototype.prefillSelected = function () {
      return null
    }, n.prototype.disable = function () {
      return this.element.prop("disabled", !0)
    }, n.prototype.requestSpecificParams = function (t) {
      var e;
      return this.prevElementKey ? {0: (e = {}, e["" + this.fields_name] = t.term, e["" + this.prevElementKey] = this.prevElementVal, e)} : n.__super__.requestSpecificParams.apply(this, arguments)
    }, n
  }(UiKit.Select2.Base)
}.call(this), function () {
  null == UiKit.Sticky && (UiKit.Sticky = {}), UiKit.Sticky.addSticky = function () {
    function t(t) {
      var e, n;
      e = (n = $(".nd-sticky .navbar-fixed-top").children().length) * this.options.height + this.options.padding, 0 !== n && ($("body").css("padding-top", e), $(window).on("scroll", function () {
        return 0 < $(this).scrollTop() ? t.addClass("is-sticky") : t.removeClass("is-sticky")
      }).scroll())
    }

    return t.prototype.options = {padding: 30, height: 52}, t
  }()
}.call(this), function (e, n) {
  "function" == typeof define && define.amd ? define("pnotify", ["jquery"], function (t) {
    return n(t, e)
  }) : "object" == typeof exports && "undefined" != typeof module ? module.exports = n(require("jquery"), global || e) : e.PNotify = n(e.jQuery, e)
}(this, function (a, t) {
  var s = function (n) {
    var i, l,
      t = {dir1: "down", dir2: "left", push: "bottom", spacing1: 36, spacing2: 36, context: a("body"), modal: !1},
      c = a(n), e = function () {
        l = a("body"), o.prototype.options.stack.context = l, (c = a(n)).bind("resize", function () {
          i && clearTimeout(i), i = setTimeout(function () {
            o.positionAll(!0)
          }, 10)
        })
      }, u = function (t) {
        var e = a("<div />", {"class": "ui-pnotify-modal-overlay"});
        return e.prependTo(t.context), t.overlay_close && e.click(function () {
          o.removeStack(t)
        }), e
      }, o = function (t) {
        this.parseOptions(t), this.init()
      };
    return a.extend(o.prototype, {
      version: "3.0.0",
      options: {
        title: !1,
        title_escape: !1,
        text: !1,
        text_escape: !1,
        styling: "brighttheme",
        addclass: "",
        cornerclass: "",
        auto_display: !0,
        width: "300px",
        min_height: "16px",
        type: "notice",
        icon: !0,
        animation: "fade",
        animate_speed: "normal",
        shadow: !0,
        hide: !0,
        delay: 8e3,
        mouse_reset: !0,
        remove: !0,
        insert_brs: !0,
        destroy: !0,
        stack: t
      },
      modules: {},
      runModules: function (t, e) {
        var n;
        for (var i in this.modules) n = "object" == typeof e && i in e ? e[i] : e, "function" == typeof this.modules[i][t] && ((this.modules[i].notice = this).modules[i].options = "object" == typeof this.options[i] ? this.options[i] : {}, this.modules[i][t](this, "object" == typeof this.options[i] ? this.options[i] : {}, n))
      },
      state: "initializing",
      timer: null,
      animTimer: null,
      styles: null,
      elem: null,
      container: null,
      title_container: null,
      text_container: null,
      animating: !1,
      timerHide: !1,
      init: function () {
        var t = this;
        return this.modules = {}, a.extend(!0, this.modules, o.prototype.modules), "object" == typeof this.options.styling ? this.styles = this.options.styling : this.styles = o.styling[this.options.styling], this.elem = a("<div />", {
          "class": "ui-pnotify " + this.options.addclass,
          css: {display: "none"},
          "aria-live": "assertive",
          "aria-role": "alertdialog",
          mouseenter: function () {
            if (t.options.mouse_reset && "out" === t.animating) {
              if (!t.timerHide) return;
              t.cancelRemove()
            }
            t.options.hide && t.options.mouse_reset && t.cancelRemove()
          },
          mouseleave: function () {
            t.options.hide && t.options.mouse_reset && "out" !== t.animating && t.queueRemove(), o.positionAll()
          }
        }), "fade" === this.options.animation && this.elem.addClass("ui-pnotify-fade-" + this.options.animate_speed), this.container = a("<div />", {
          "class": this.styles.container + " ui-pnotify-container " + ("error" === this.options.type ? this.styles.error : "info" === this.options.type ? this.styles.info : "success" === this.options.type ? this.styles.success : this.styles.notice),
          role: "alert"
        }).appendTo(this.elem), "" !== this.options.cornerclass && this.container.removeClass("ui-corner-all").addClass(this.options.cornerclass), this.options.shadow && this.container.addClass("ui-pnotify-shadow"), !1 !== this.options.icon && a("<div />", {"class": "ui-pnotify-icon"}).append(a("<span />", {"class": !0 === this.options.icon ? "error" === this.options.type ? this.styles.error_icon : "info" === this.options.type ? this.styles.info_icon : "success" === this.options.type ? this.styles.success_icon : this.styles.notice_icon : this.options.icon})).prependTo(this.container), this.title_container = a("<h4 />", {"class": "ui-pnotify-title"}).appendTo(this.container), !1 === this.options.title ? this.title_container.hide() : this.options.title_escape ? this.title_container.text(this.options.title) : this.title_container.html(this.options.title), this.text_container = a("<div />", {
          "class": "ui-pnotify-text",
          "aria-role": "alert"
        }).appendTo(this.container), !1 === this.options.text ? this.text_container.hide() : this.options.text_escape ? this.text_container.text(this.options.text) : this.text_container.html(this.options.insert_brs ? String(this.options.text).replace(/\n/g, "<br />") : this.options.text), "string" == typeof this.options.width && this.elem.css("width", this.options.width), "string" == typeof this.options.min_height && this.container.css("min-height", this.options.min_height), "top" === this.options.stack.push ? o.notices = a.merge([this], o.notices) : o.notices = a.merge(o.notices, [this]), "top" === this.options.stack.push && this.queuePosition(!1, 1), this.options.stack.animation = !1, this.runModules("init"), this.options.auto_display && this.open(), this
      },
      update: function (t) {
        var e = this.options;
        return this.parseOptions(e, t), this.elem.removeClass("ui-pnotify-fade-slow ui-pnotify-fade-normal ui-pnotify-fade-fast"), "fade" === this.options.animation && this.elem.addClass("ui-pnotify-fade-" + this.options.animate_speed), this.options.cornerclass !== e.cornerclass && this.container.removeClass("ui-corner-all " + e.cornerclass).addClass(this.options.cornerclass), this.options.shadow !== e.shadow && (this.options.shadow ? this.container.addClass("ui-pnotify-shadow") : this.container.removeClass("ui-pnotify-shadow")), !1 === this.options.addclass ? this.elem.removeClass(e.addclass) : this.options.addclass !== e.addclass && this.elem.removeClass(e.addclass).addClass(this.options.addclass), !1 === this.options.title ? this.title_container.slideUp("fast") : this.options.title !== e.title && (this.options.title_escape ? this.title_container.text(this.options.title) : this.title_container.html(this.options.title), !1 === e.title && this.title_container.slideDown(200)), !1 === this.options.text ? this.text_container.slideUp("fast") : this.options.text !== e.text && (this.options.text_escape ? this.text_container.text(this.options.text) : this.text_container.html(this.options.insert_brs ? String(this.options.text).replace(/\n/g, "<br />") : this.options.text), !1 === e.text && this.text_container.slideDown(200)), this.options.type !== e.type && this.container.removeClass(this.styles.error + " " + this.styles.notice + " " + this.styles.success + " " + this.styles.info).addClass("error" === this.options.type ? this.styles.error : "info" === this.options.type ? this.styles.info : "success" === this.options.type ? this.styles.success : this.styles.notice), (this.options.icon !== e.icon || !0 === this.options.icon && this.options.type !== e.type) && (this.container.find("div.ui-pnotify-icon").remove(), !1 !== this.options.icon && a("<div />", {"class": "ui-pnotify-icon"}).append(a("<span />", {"class": !0 === this.options.icon ? "error" === this.options.type ? this.styles.error_icon : "info" === this.options.type ? this.styles.info_icon : "success" === this.options.type ? this.styles.success_icon : this.styles.notice_icon : this.options.icon})).prependTo(this.container)), this.options.width !== e.width && this.elem.animate({width: this.options.width}), this.options.min_height !== e.min_height && this.container.animate({minHeight: this.options.min_height}), this.options.hide ? e.hide || this.queueRemove() : this.cancelRemove(), this.queuePosition(!0), this.runModules("update", e), this
      },
      open: function () {
        this.state = "opening", this.runModules("beforeOpen");
        var t = this;
        return this.elem.parent().length || this.elem.appendTo(this.options.stack.context ? this.options.stack.context : l), "top" !== this.options.stack.push && this.position(!0), this.animateIn(function () {
          t.queuePosition(!0), t.options.hide && t.queueRemove(), t.state = "open", t.runModules("afterOpen")
        }), this
      },
      remove: function (t) {
        this.state = "closing", this.timerHide = !!t, this.runModules("beforeClose");
        var e = this;
        return this.timer && (n.clearTimeout(this.timer), this.timer = null), this.animateOut(function () {
          if (e.state = "closed", e.runModules("afterClose"), e.queuePosition(!0), e.options.remove && e.elem.detach(), e.runModules("beforeDestroy"), e.options.destroy && null !== o.notices) {
            var t = a.inArray(e, o.notices);
            -1 !== t && o.notices.splice(t, 1)
          }
          e.runModules("afterDestroy")
        }), this
      },
      get: function () {
        return this.elem
      },
      parseOptions: function (t, e) {
        this.options = a.extend(!0, {}, o.prototype.options), this.options.stack = o.prototype.options.stack;
        for (var n, i = [t, e], s = 0; s < i.length && void 0 !== (n = i[s]); s++) if ("object" != typeof n) this.options.text = n; else for (var r in n) this.modules[r] ? a.extend(!0, this.options[r], n[r]) : this.options[r] = n[r]
      },
      animateIn: function (t) {
        this.animating = "in";
        var e = this;
        t = function () {
          e.animTimer && clearTimeout(e.animTimer), "in" === e.animating && (e.elem.is(":visible") ? (this && this.call(), e.animating = !1) : e.animTimer = setTimeout(t, 40))
        }.bind(t), "fade" === this.options.animation ? (this.elem.one("webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionEnd transitionend", t).addClass("ui-pnotify-in"), this.elem.css("opacity"), this.elem.addClass("ui-pnotify-fade-in"), this.animTimer = setTimeout(t, 650)) : (this.elem.addClass("ui-pnotify-in"), t())
      },
      animateOut: function (t) {
        this.animating = "out";
        var e = this;
        t = function () {
          e.animTimer && clearTimeout(e.animTimer), "out" === e.animating && ("0" != e.elem.css("opacity") && e.elem.is(":visible") ? e.animTimer = setTimeout(t, 40) : (e.elem.removeClass("ui-pnotify-in"), this && this.call(), e.animating = !1))
        }.bind(t), "fade" === this.options.animation ? (this.elem.one("webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionEnd transitionend", t).removeClass("ui-pnotify-fade-in"), this.animTimer = setTimeout(t, 650)) : (this.elem.removeClass("ui-pnotify-in"), t())
      },
      position: function (t) {
        var e = this.options.stack, n = this.elem;
        if ("undefined" == typeof e.context && (e.context = l), e) {
          "number" != typeof e.nextpos1 && (e.nextpos1 = e.firstpos1), "number" != typeof e.nextpos2 && (e.nextpos2 = e.firstpos2), "number" != typeof e.addpos2 && (e.addpos2 = 0);
          var i = !n.hasClass("ui-pnotify-in");
          if (!i || t) {
            var s, r, o, a;
            switch (e.modal && (e.overlay ? e.overlay.show() : e.overlay = u(e)), n.addClass("ui-pnotify-move"), e.dir1) {
              case"down":
                o = "top";
                break;
              case"up":
                o = "bottom";
                break;
              case"left":
                o = "right";
                break;
              case"right":
                o = "left"
            }
            switch (s = parseInt(n.css(o).replace(/(?:\..*|[^0-9.])/g, "")), isNaN(s) && (s = 0), "undefined" != typeof e.firstpos1 || i || (e.firstpos1 = s, e.nextpos1 = e.firstpos1), e.dir2) {
              case"down":
                a = "top";
                break;
              case"up":
                a = "bottom";
                break;
              case"left":
                a = "right";
                break;
              case"right":
                a = "left"
            }
            switch (r = parseInt(n.css(a).replace(/(?:\..*|[^0-9.])/g, "")), isNaN(r) && (r = 0), "undefined" != typeof e.firstpos2 || i || (e.firstpos2 = r, e.nextpos2 = e.firstpos2), ("down" === e.dir1 && e.nextpos1 + n.height() > (e.context.is(l) ? c.height() : e.context.prop("scrollHeight")) || "up" === e.dir1 && e.nextpos1 + n.height() > (e.context.is(l) ? c.height() : e.context.prop("scrollHeight")) || "left" === e.dir1 && e.nextpos1 + n.width() > (e.context.is(l) ? c.width() : e.context.prop("scrollWidth")) || "right" === e.dir1 && e.nextpos1 + n.width() > (e.context.is(l) ? c.width() : e.context.prop("scrollWidth"))) && (e.nextpos1 = e.firstpos1, e.nextpos2 += e.addpos2 + ("undefined" == typeof e.spacing2 ? 25 : e.spacing2), e.addpos2 = 0), "number" == typeof e.nextpos2 && (e.animation ? n.css(a, e.nextpos2 + "px") : (n.removeClass("ui-pnotify-move"), n.css(a, e.nextpos2 + "px"), n.css(a), n.addClass("ui-pnotify-move"))), e.dir2) {
              case"down":
              case"up":
                n.outerHeight(!0) > e.addpos2 && (e.addpos2 = n.height());
                break;
              case"left":
              case"right":
                n.outerWidth(!0) > e.addpos2 && (e.addpos2 = n.width())
            }
            switch ("number" == typeof e.nextpos1 && (e.animation ? n.css(o, e.nextpos1 + "px") : (n.removeClass("ui-pnotify-move"), n.css(o, e.nextpos1 + "px"), n.css(o), n.addClass("ui-pnotify-move"))), e.dir1) {
              case"down":
              case"up":
                e.nextpos1 += n.height() + ("undefined" == typeof e.spacing1 ? 25 : e.spacing1);
                break;
              case"left":
              case"right":
                e.nextpos1 += n.width() + ("undefined" == typeof e.spacing1 ? 25 : e.spacing1)
            }
          }
          return this
        }
      },
      queuePosition: function (t, e) {
        return i && clearTimeout(i), e || (e = 10), i = setTimeout(function () {
          o.positionAll(t)
        }, e), this
      },
      cancelRemove: function () {
        return this.timer && n.clearTimeout(this.timer), this.animTimer && n.clearTimeout(this.animTimer), "closing" === this.state && (this.state = "open", this.animating = !1, this.elem.addClass("ui-pnotify-in"), "fade" === this.options.animation && this.elem.addClass("ui-pnotify-fade-in")), this
      },
      queueRemove: function () {
        var t = this;
        return this.cancelRemove(), this.timer = n.setTimeout(function () {
          t.remove(!0)
        }, isNaN(this.options.delay) ? 0 : this.options.delay), this
      }
    }), a.extend(o, {
      notices: [],
      reload: s,
      removeAll: function () {
        a.each(o.notices, function () {
          this.remove && this.remove(!1)
        })
      },
      removeStack: function (t) {
        a.each(o.notices, function () {
          this.remove && this.options.stack === t && this.remove(!1)
        })
      },
      positionAll: function (e) {
        if (i && clearTimeout(i), i = null, o.notices && o.notices.length) a.each(o.notices, function () {
          var t = this.options.stack;
          t && (t.overlay && t.overlay.hide(), t.nextpos1 = t.firstpos1, t.nextpos2 = t.firstpos2, t.addpos2 = 0, t.animation = e)
        }), a.each(o.notices, function () {
          this.position()
        }); else {
          var t = o.prototype.options.stack;
          t && (delete t.nextpos1, delete t.nextpos2)
        }
      },
      styling: {
        brighttheme: {
          container: "brighttheme",
          notice: "brighttheme-notice",
          notice_icon: "brighttheme-icon-notice",
          info: "brighttheme-info",
          info_icon: "brighttheme-icon-info",
          success: "brighttheme-success",
          success_icon: "brighttheme-icon-success",
          error: "brighttheme-error",
          error_icon: "brighttheme-icon-error"
        },
        jqueryui: {
          container: "ui-widget ui-widget-content ui-corner-all",
          notice: "ui-state-highlight",
          notice_icon: "ui-icon ui-icon-info",
          info: "",
          info_icon: "ui-icon ui-icon-info",
          success: "ui-state-default",
          success_icon: "ui-icon ui-icon-circle-check",
          error: "ui-state-error",
          error_icon: "ui-icon ui-icon-alert"
        },
        bootstrap3: {
          container: "alert",
          notice: "alert-warning",
          notice_icon: "glyphicon glyphicon-exclamation-sign",
          info: "alert-info",
          info_icon: "glyphicon glyphicon-info-sign",
          success: "alert-success",
          success_icon: "glyphicon glyphicon-ok-sign",
          error: "alert-danger",
          error_icon: "glyphicon glyphicon-warning-sign"
        }
      }
    }), o.styling.fontawesome = a.extend({}, o.styling.bootstrap3), a.extend(o.styling.fontawesome, {
      notice_icon: "fa fa-exclamation-circle",
      info_icon: "fa fa-info",
      success_icon: "fa fa-check",
      error_icon: "fa fa-warning"
    }), n.document.body ? e() : a(e), o
  };
  return s(t)
}), function (t, e) {
  "function" == typeof define && define.amd ? define("pnotify.animate", ["jquery", "pnotify"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./pnotify")) : e(t.jQuery, t.PNotify)
}(this, function (t, e) {
  e.prototype.options.animate = {animate: !1, in_class: "", out_class: ""}, e.prototype.modules.animate = {
    init: function (n, t) {
      this.setUpAnimations(n, t), n.attention = function (t, e) {
        n.elem.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
          n.elem.removeClass(t), e && e.call(n)
        }).addClass("animated " + t)
      }
    }, update: function (t, e, n) {
      e.animate != n.animate && this.setUpAnimations(t, e)
    }, setUpAnimations: function (t, e) {
      if (e.animate) {
        t.options.animation = "none", t.elem.removeClass("ui-pnotify-fade-slow ui-pnotify-fade-normal ui-pnotify-fade-fast"), t._animateIn || (t._animateIn = t.animateIn),
        t._animateOut || (t._animateOut = t.animateOut), t.animateIn = this.animateIn.bind(this), t.animateOut = this.animateOut.bind(this);
        var n = 400;
        "slow" === t.options.animate_speed ? n = 600 : "fast" === t.options.animate_speed ? n = 200 : 0 < t.options.animate_speed && (n = t.options.animate_speed), n /= 1e3, t.elem.addClass("animated").css({
          "-webkit-animation-duration": n + "s",
          "-moz-animation-duration": n + "s",
          "animation-duration": n + "s"
        })
      } else t._animateIn && t._animateOut && (t.animateIn = t._animateIn, delete t._animateIn, t.animateOut = t._animateOut, delete t._animateOut, t.elem.addClass("animated"))
    }, animateIn: function (t) {
      this.notice.animating = "in";
      var e = this;
      t = function () {
        this && this.call(), e.notice.animating = !1
      }.bind(t), this.notice.elem.show().one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", t).removeClass(this.options.out_class).addClass("ui-pnotify-in").addClass(this.options.in_class)
    }, animateOut: function (t) {
      this.notice.animating = "out";
      var e = this;
      t = function () {
        e.notice.elem.removeClass("ui-pnotify-in"), this && this.call(), e.notice.animating = !1
      }.bind(t), this.notice.elem.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", t).removeClass(this.options.in_class).addClass(this.options.out_class)
    }
  }
}), function (t, e) {
  "function" == typeof define && define.amd ? define("pnotify.buttons", ["jquery", "pnotify"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./pnotify")) : e(t.jQuery, t.PNotify)
}(this, function (s, t) {
  t.prototype.options.buttons = {
    closer: !0,
    closer_hover: !0,
    sticker: !0,
    sticker_hover: !0,
    show_on_nonblock: !1,
    labels: {close: "Close", stick: "Stick", unstick: "Unstick"},
    classes: {closer: null, pin_up: null, pin_down: null}
  }, t.prototype.modules.buttons = {
    closer: null, sticker: null, init: function (n, t) {
      var i = this;
      n.elem.on({
        mouseenter: function () {
          !i.options.sticker || n.options.nonblock && n.options.nonblock.nonblock && !i.options.show_on_nonblock || i.sticker.trigger("pnotify:buttons:toggleStick").css("visibility", "visible"), !i.options.closer || n.options.nonblock && n.options.nonblock.nonblock && !i.options.show_on_nonblock || i.closer.css("visibility", "visible")
        }, mouseleave: function () {
          i.options.sticker_hover && i.sticker.css("visibility", "hidden"), i.options.closer_hover && i.closer.css("visibility", "hidden")
        }
      }), this.sticker = s("<div />", {
        "class": "ui-pnotify-sticker",
        "aria-role": "button",
        "aria-pressed": n.options.hide ? "false" : "true",
        tabindex: "0",
        title: n.options.hide ? t.labels.stick : t.labels.unstick,
        css: {cursor: "pointer", visibility: t.sticker_hover ? "hidden" : "visible"},
        click: function () {
          n.options.hide = !n.options.hide, n.options.hide ? n.queueRemove() : n.cancelRemove(), s(this).trigger("pnotify:buttons:toggleStick")
        }
      }).bind("pnotify:buttons:toggleStick", function () {
        var t = null === i.options.classes.pin_up ? n.styles.pin_up : i.options.classes.pin_up,
          e = null === i.options.classes.pin_down ? n.styles.pin_down : i.options.classes.pin_down;
        s(this).attr("title", n.options.hide ? i.options.labels.stick : i.options.labels.unstick).children().attr("class", "").addClass(n.options.hide ? t : e).attr("aria-pressed", n.options.hide ? "false" : "true")
      }).append("<span />").trigger("pnotify:buttons:toggleStick").prependTo(n.container), (!t.sticker || n.options.nonblock && n.options.nonblock.nonblock && !t.show_on_nonblock) && this.sticker.css("display", "none"), this.closer = s("<div />", {
        "class": "ui-pnotify-closer",
        "aria-role": "button",
        tabindex: "0",
        title: t.labels.close,
        css: {cursor: "pointer", visibility: t.closer_hover ? "hidden" : "visible"},
        click: function () {
          n.remove(!1), i.sticker.css("visibility", "hidden"), i.closer.css("visibility", "hidden")
        }
      }).append(s("<span />", {"class": null === t.classes.closer ? n.styles.closer : t.classes.closer})).prependTo(n.container), (!t.closer || n.options.nonblock && n.options.nonblock.nonblock && !t.show_on_nonblock) && this.closer.css("display", "none")
    }, update: function (t, e) {
      !e.closer || t.options.nonblock && t.options.nonblock.nonblock && !e.show_on_nonblock ? this.closer.css("display", "none") : e.closer && this.closer.css("display", "block"), !e.sticker || t.options.nonblock && t.options.nonblock.nonblock && !e.show_on_nonblock ? this.sticker.css("display", "none") : e.sticker && this.sticker.css("display", "block"), this.sticker.trigger("pnotify:buttons:toggleStick"), this.closer.find("span").attr("class", "").addClass(null === e.classes.closer ? t.styles.closer : e.classes.closer), e.sticker_hover ? this.sticker.css("visibility", "hidden") : t.options.nonblock && t.options.nonblock.nonblock && !e.show_on_nonblock || this.sticker.css("visibility", "visible"), e.closer_hover ? this.closer.css("visibility", "hidden") : t.options.nonblock && t.options.nonblock.nonblock && !e.show_on_nonblock || this.closer.css("visibility", "visible")
    }
  }, s.extend(t.styling.brighttheme, {
    closer: "brighttheme-icon-closer",
    pin_up: "brighttheme-icon-sticker",
    pin_down: "brighttheme-icon-sticker brighttheme-icon-stuck"
  }), s.extend(t.styling.jqueryui, {
    closer: "ui-icon ui-icon-close",
    pin_up: "ui-icon ui-icon-pin-w",
    pin_down: "ui-icon ui-icon-pin-s"
  }), s.extend(t.styling.bootstrap2, {
    closer: "icon-remove",
    pin_up: "icon-pause",
    pin_down: "icon-play"
  }), s.extend(t.styling.bootstrap3, {
    closer: "glyphicon glyphicon-remove",
    pin_up: "glyphicon glyphicon-pause",
    pin_down: "glyphicon glyphicon-play"
  }), s.extend(t.styling.fontawesome, {closer: "fa fa-times", pin_up: "fa fa-pause", pin_down: "fa fa-play"})
}), function (t, e) {
  "function" == typeof define && define.amd ? define("pnotify.callbacks", ["jquery", "pnotify"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./pnotify")) : e(t.jQuery, t.PNotify)
}(this, function (t, e) {
  var n = e.prototype.init, i = e.prototype.open, s = e.prototype.remove;
  e.prototype.init = function () {
    this.options.before_init && this.options.before_init(this.options), n.apply(this, arguments), this.options.after_init && this.options.after_init(this)
  }, e.prototype.open = function () {
    var t;
    this.options.before_open && (t = this.options.before_open(this)), !1 !== t && (i.apply(this, arguments), this.options.after_open && this.options.after_open(this))
  }, e.prototype.remove = function (t) {
    var e;
    this.options.before_close && (e = this.options.before_close(this, t)), !1 !== e && (s.apply(this, arguments), this.options.after_close && this.options.after_close(this, t))
  }
}), function (t, e) {
  "function" == typeof define && define.amd ? define("pnotify.confirm", ["jquery", "pnotify"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./pnotify")) : e(t.jQuery, t.PNotify)
}(this, function (l, c) {
  c.prototype.options.confirm = {
    confirm: !1,
    prompt: !1,
    prompt_class: "",
    prompt_default: "",
    prompt_multi_line: !1,
    align: "right",
    buttons: [{
      text: "Ok", addClass: "", promptTrigger: !0, click: function (t, e) {
        t.remove(), t.get().trigger("pnotify.confirm", [t, e])
      }
    }, {
      text: "Cancel", addClass: "", click: function (t) {
        t.remove(), t.get().trigger("pnotify.cancel", t)
      }
    }]
  }, c.prototype.modules.confirm = {
    container: null, prompt: null, init: function (t, e) {
      this.container = l('<div class="ui-pnotify-action-bar" style="margin-top:5px;clear:both;" />').css("text-align", e.align).appendTo(t.container), e.confirm || e.prompt ? this.makeDialog(t, e) : this.container.hide()
    }, update: function (t, e) {
      e.confirm ? (this.makeDialog(t, e), this.container.show()) : this.container.hide().empty()
    }, afterOpen: function (t, e) {
      e.prompt && this.prompt.focus()
    }, makeDialog: function (e, n) {
      var t, i, s = !1, r = this;
      this.container.empty(), n.prompt && (this.prompt = l("<" + (n.prompt_multi_line ? 'textarea rows="5"' : 'input type="text"') + ' style="margin-bottom:5px;clear:both;" />').addClass(("undefined" == typeof e.styles.input ? "" : e.styles.input) + " " + ("undefined" == typeof n.prompt_class ? "" : n.prompt_class)).val(n.prompt_default).appendTo(this.container));
      for (var o = n.buttons[0] && n.buttons[0] !== c.prototype.options.confirm.buttons[0], a = 0; a < n.buttons.length; a++) null === n.buttons[a] || o && c.prototype.options.confirm.buttons[a] && c.prototype.options.confirm.buttons[a] === n.buttons[a] || (t = n.buttons[a], s ? this.container.append(" ") : s = !0, i = l('<button type="button" class="ui-pnotify-action-button" />').addClass(("undefined" == typeof e.styles.btn ? "" : e.styles.btn) + " " + ("undefined" == typeof t.addClass ? "" : t.addClass)).text(t.text).appendTo(this.container).on("click", function (t) {
        return function () {
          "function" == typeof t.click && t.click(e, n.prompt ? r.prompt.val() : null)
        }
      }(t)), n.prompt && !n.prompt_multi_line && t.promptTrigger && this.prompt.keypress(function (e) {
        return function (t) {
          13 == t.keyCode && e.click()
        }
      }(i)), e.styles.text && i.wrapInner('<span class="' + e.styles.text + '"></span>'), e.styles.btnhover && i.hover(function (t) {
        return function () {
          t.addClass(e.styles.btnhover)
        }
      }(i), function (t) {
        return function () {
          t.removeClass(e.styles.btnhover)
        }
      }(i)), e.styles.btnactive && i.on("mousedown", function (t) {
        return function () {
          t.addClass(e.styles.btnactive)
        }
      }(i)).on("mouseup", function (t) {
        return function () {
          t.removeClass(e.styles.btnactive)
        }
      }(i)), e.styles.btnfocus && i.on("focus", function (t) {
        return function () {
          t.addClass(e.styles.btnfocus)
        }
      }(i)).on("blur", function (t) {
        return function () {
          t.removeClass(e.styles.btnfocus)
        }
      }(i)))
    }
  }, l.extend(c.styling.jqueryui, {
    btn: "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only",
    btnhover: "ui-state-hover",
    btnactive: "ui-state-active",
    btnfocus: "ui-state-focus",
    input: "",
    text: "ui-button-text"
  }), l.extend(c.styling.bootstrap2, {btn: "btn", input: ""}), l.extend(c.styling.bootstrap3, {
    btn: "btn btn-default",
    input: "form-control"
  }), l.extend(c.styling.fontawesome, {btn: "btn btn-default", input: "form-control"})
}), function (t, e) {
  "function" == typeof define && define.amd ? define("pnotify.desktop", ["jquery", "pnotify"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./pnotify")) : e(t.jQuery, t.PNotify)
}(this, function (t, n) {
  var i, s = function (t, e) {
    return (s = "Notification" in window ? function (t, e) {
      return new Notification(t, e)
    } : "mozNotification" in navigator ? function (t, e) {
      return navigator.mozNotification.createNotification(t, e.body, e.icon).show()
    } : "webkitNotifications" in window ? function (t, e) {
      return window.webkitNotifications.createNotification(e.icon, t, e.body)
    } : function () {
      return null
    })(t, e)
  };
  n.prototype.options.desktop = {desktop: !1, fallback: !0, icon: null, tag: null}, n.prototype.modules.desktop = {
    tag: null, icon: null, genNotice: function (t, e) {
      null === e.icon ? this.icon = "http://sciactive.com/pnotify/includes/desktop/" + t.options.type + ".png" : !1 === e.icon ? this.icon = null : this.icon = e.icon, null !== this.tag && null === e.tag || (this.tag = null === e.tag ? "PNotify-" + Math.round(1e6 * Math.random()) : e.tag), t.desktop = s(t.options.title, {
        icon: this.icon,
        body: e.text || t.options.text,
        tag: this.tag
      }), !("close" in t.desktop) && "cancel" in t.desktop && (t.desktop.close = function () {
        t.desktop.cancel()
      }), t.desktop.onclick = function () {
        t.elem.trigger("click")
      }, t.desktop.onclose = function () {
        "closing" !== t.state && "closed" !== t.state && t.remove()
      }
    }, init: function (t, e) {
      e.desktop && (0 === (i = n.desktop.checkPermission()) ? this.genNotice(t, e) : e.fallback || (t.options.auto_display = !1))
    }, update: function (t, e) {
      0 !== i && e.fallback || !e.desktop || this.genNotice(t, e)
    }, beforeOpen: function (t, e) {
      0 !== i && e.fallback || !e.desktop || t.elem.css({left: "-10000px"}).removeClass("ui-pnotify-in")
    }, afterOpen: function (t, e) {
      0 !== i && e.fallback || !e.desktop || (t.elem.css({left: "-10000px"}).removeClass("ui-pnotify-in"), "show" in t.desktop && t.desktop.show())
    }, beforeClose: function (t, e) {
      0 !== i && e.fallback || !e.desktop || t.elem.css({left: "-10000px"}).removeClass("ui-pnotify-in")
    }, afterClose: function (t, e) {
      0 !== i && e.fallback || !e.desktop || (t.elem.css({left: "-10000px"}).removeClass("ui-pnotify-in"), "close" in t.desktop && t.desktop.close())
    }
  }, n.desktop = {
    permission: function () {
      "undefined" != typeof Notification && "requestPermission" in Notification ? Notification.requestPermission() : "webkitNotifications" in window && window.webkitNotifications.requestPermission()
    }, checkPermission: function () {
      return "undefined" != typeof Notification && "permission" in Notification ? "granted" === Notification.permission ? 0 : 1 : "webkitNotifications" in window && 0 == window.webkitNotifications.checkPermission() ? 0 : 1
    }
  }, i = n.desktop.checkPermission()
}), function (t, e) {
  "function" == typeof define && define.amd ? define("pnotify.history", ["jquery", "pnotify"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./pnotify")) : e(t.jQuery, t.PNotify)
}(this, function (i, s) {
  var r, o;
  i(function () {
    i("body").on("pnotify.history-all", function () {
      i.each(s.notices, function () {
        this.modules.history.inHistory && (this.elem.is(":visible") ? this.options.hide && this.queueRemove() : this.open && this.open())
      })
    }).on("pnotify.history-last", function () {
      var t, e = "top" === s.prototype.options.stack.push, n = e ? 0 : -1;
      do {
        if (!(t = -1 === n ? s.notices.slice(n) : s.notices.slice(n, n + 1))[0]) return !1;
        n = e ? n + 1 : n - 1
      } while (!t[0].modules.history.inHistory || t[0].elem.is(":visible"));
      t[0].open && t[0].open()
    })
  }), s.prototype.options.history = {
    history: !0,
    menu: !1,
    fixed: !0,
    maxonscreen: Infinity,
    labels: {redisplay: "Redisplay", all: "All", last: "Last"}
  }, s.prototype.modules.history = {
    inHistory: !1, init: function (t, e) {
      if (t.options.destroy = !1, this.inHistory = e.history, e.menu && void 0 === r) {
        r = i("<div />", {
          "class": "ui-pnotify-history-container " + t.styles.hi_menu, mouseleave: function () {
            r.animate({top: "-" + o + "px"}, {duration: 100, queue: !1})
          }
        }).append(i("<div />", {
          "class": "ui-pnotify-history-header",
          text: e.labels.redisplay
        })).append(i("<button />", {
          "class": "ui-pnotify-history-all " + t.styles.hi_btn,
          text: e.labels.all,
          mouseenter: function () {
            i(this).addClass(t.styles.hi_btnhov)
          },
          mouseleave: function () {
            i(this).removeClass(t.styles.hi_btnhov)
          },
          click: function () {
            return i(this).trigger("pnotify.history-all"), !1
          }
        })).append(i("<button />", {
          "class": "ui-pnotify-history-last " + t.styles.hi_btn,
          text: e.labels.last,
          mouseenter: function () {
            i(this).addClass(t.styles.hi_btnhov)
          },
          mouseleave: function () {
            i(this).removeClass(t.styles.hi_btnhov)
          },
          click: function () {
            return i(this).trigger("pnotify.history-last"), !1
          }
        })).appendTo("body");
        var n = i("<span />", {
          "class": "ui-pnotify-history-pulldown " + t.styles.hi_hnd, mouseenter: function () {
            r.animate({top: "0"}, {duration: 100, queue: !1})
          }
        }).appendTo(r);
        o = n.offset().top + 2, r.css({top: "-" + o + "px"}), e.fixed && r.addClass("ui-pnotify-history-fixed")
      }
    }, update: function (t, e) {
      this.inHistory = e.history, e.fixed && r ? r.addClass("ui-pnotify-history-fixed") : r && r.removeClass("ui-pnotify-history-fixed")
    }, beforeOpen: function (t, e) {
      var n;
      s.notices && s.notices.length > e.maxonscreen && (n = "top" !== t.options.stack.push ? s.notices.slice(0, s.notices.length - e.maxonscreen) : s.notices.slice(e.maxonscreen, s.notices.length), i.each(n, function () {
        this.remove && this.remove()
      }))
    }
  }, i.extend(s.styling.jqueryui, {
    hi_menu: "ui-state-default ui-corner-bottom",
    hi_btn: "ui-state-default ui-corner-all",
    hi_btnhov: "ui-state-hover",
    hi_hnd: "ui-icon ui-icon-grip-dotted-horizontal"
  }), i.extend(s.styling.bootstrap2, {
    hi_menu: "well",
    hi_btn: "btn",
    hi_btnhov: "",
    hi_hnd: "icon-chevron-down"
  }), i.extend(s.styling.bootstrap3, {
    hi_menu: "well",
    hi_btn: "btn btn-default",
    hi_btnhov: "",
    hi_hnd: "glyphicon glyphicon-chevron-down"
  }), i.extend(s.styling.fontawesome, {
    hi_menu: "well",
    hi_btn: "btn btn-default",
    hi_btnhov: "",
    hi_hnd: "fa fa-chevron-down"
  })
}), function (t, e) {
  "function" == typeof define && define.amd ? define("pnotify.mobile", ["jquery", "pnotify"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./pnotify")) : e(t.jQuery, t.PNotify)
}(this, function (n, t) {
  t.prototype.options.mobile = {swipe_dismiss: !0, styling: !0}, t.prototype.modules.mobile = {
    swipe_dismiss: !0, init: function (i, t) {
      var s = this, r = null, o = null, a = null;
      this.swipe_dismiss = t.swipe_dismiss, this.doMobileStyling(i, t), i.elem.on({
        touchstart: function (t) {
          s.swipe_dismiss && (r = t.originalEvent.touches[0].screenX, a = i.elem.width(), i.container.css("left", "0"))
        }, touchmove: function (t) {
          if (r && s.swipe_dismiss) {
            var e = t.originalEvent.touches[0].screenX;
            o = e - r;
            var n = (1 - Math.abs(o) / a) * i.options.opacity;
            i.elem.css("opacity", n), i.container.css("left", o)
          }
        }, touchend: function () {
          if (r && s.swipe_dismiss) {
            if (40 < Math.abs(o)) {
              var t = o < 0 ? -2 * a : 2 * a;
              i.elem.animate({opacity: 0}, 100), i.container.animate({left: t}, 100), i.remove()
            } else i.elem.animate({opacity: i.options.opacity}, 100), i.container.animate({left: 0}, 100);
            a = o = r = null
          }
        }, touchcancel: function () {
          r && s.swipe_dismiss && (i.elem.animate({opacity: i.options.opacity}, 100), i.container.animate({left: 0}, 100), a = o = r = null)
        }
      })
    }, update: function (t, e) {
      this.swipe_dismiss = e.swipe_dismiss, this.doMobileStyling(t, e)
    }, doMobileStyling: function (t, e) {
      e.styling ? (t.elem.addClass("ui-pnotify-mobile-able"), n(window).width() <= 480 ? (t.options.stack.mobileOrigSpacing1 || (t.options.stack.mobileOrigSpacing1 = t.options.stack.spacing1, t.options.stack.mobileOrigSpacing2 = t.options.stack.spacing2), t.options.stack.spacing1 = 0, t.options.stack.spacing2 = 0) : (t.options.stack.mobileOrigSpacing1 || t.options.stack.mobileOrigSpacing2) && (t.options.stack.spacing1 = t.options.stack.mobileOrigSpacing1, delete t.options.stack.mobileOrigSpacing1, t.options.stack.spacing2 = t.options.stack.mobileOrigSpacing2, delete t.options.stack.mobileOrigSpacing2)) : (t.elem.removeClass("ui-pnotify-mobile-able"), t.options.stack.mobileOrigSpacing1 && (t.options.stack.spacing1 = t.options.stack.mobileOrigSpacing1, delete t.options.stack.mobileOrigSpacing1), t.options.stack.mobileOrigSpacing2 && (t.options.stack.spacing2 = t.options.stack.mobileOrigSpacing2, delete t.options.stack.mobileOrigSpacing2))
    }
  }
}), function (t, e) {
  "function" == typeof define && define.amd ? define("pnotify.nonblock", ["jquery", "pnotify"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./pnotify")) : e(t.jQuery, t.PNotify)
}(this, function (o, t) {
  var a, i = /^on/, s = /^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,
    r = /^(focus|blur|select|change|reset)$|^key(press|down|up)$/, l = /^(scroll|resize|(un)?load|abort|error)$/,
    c = function (t, e) {
      var n;
      if (t = t.toLowerCase(), document.createEvent && this.dispatchEvent) {
        if ((t = t.replace(i, "")).match(s) ? (o(this).offset(), (n = document.createEvent("MouseEvents")).initMouseEvent(t, e.bubbles, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget)) : t.match(r) ? (n = document.createEvent("UIEvents")).initUIEvent(t, e.bubbles, e.cancelable, e.view, e.detail) : t.match(l) && (n = document.createEvent("HTMLEvents")).initEvent(t, e.bubbles, e.cancelable), !n) return;
        this.dispatchEvent(n)
      } else t.match(i) || (t = "on" + t), n = document.createEventObject(e), this.fireEvent(t, n)
    }, u = function (t, e, n) {
      t.elem.addClass("ui-pnotify-nonblock-hide");
      var i = document.elementFromPoint(e.clientX, e.clientY);
      t.elem.removeClass("ui-pnotify-nonblock-hide");
      var s = o(i), r = s.css("cursor");
      "auto" === r && "A" === i.tagName && (r = "pointer"), t.elem.css("cursor", "auto" !== r ? r : "default"), a && a.get(0) == i || (a && (c.call(a.get(0), "mouseleave", e.originalEvent), c.call(a.get(0), "mouseout", e.originalEvent)), c.call(i, "mouseenter", e.originalEvent), c.call(i, "mouseover", e.originalEvent)), c.call(i, n, e.originalEvent), a = s
    };
  t.prototype.options.nonblock = {nonblock: !1}, t.prototype.modules.nonblock = {
    init: function (e) {
      var n = this;
      e.elem.on({
        mouseenter: function (t) {
          n.options.nonblock && t.stopPropagation(), n.options.nonblock && e.elem.addClass("ui-pnotify-nonblock-fade")
        }, mouseleave: function (t) {
          n.options.nonblock && t.stopPropagation(), a = null, e.elem.css("cursor", "auto"), n.options.nonblock && "out" !== e.animating && e.elem.removeClass("ui-pnotify-nonblock-fade")
        }, mouseover: function (t) {
          n.options.nonblock && t.stopPropagation()
        }, mouseout: function (t) {
          n.options.nonblock && t.stopPropagation()
        }, mousemove: function (t) {
          n.options.nonblock && (t.stopPropagation(), u(e, t, "onmousemove"))
        }, mousedown: function (t) {
          n.options.nonblock && (t.stopPropagation(), t.preventDefault(), u(e, t, "onmousedown"))
        }, mouseup: function (t) {
          n.options.nonblock && (t.stopPropagation(), t.preventDefault(), u(e, t, "onmouseup"))
        }, click: function (t) {
          n.options.nonblock && (t.stopPropagation(), u(e, t, "onclick"))
        }, dblclick: function (t) {
          n.options.nonblock && (t.stopPropagation(), u(e, t, "ondblclick"))
        }
      })
    }
  }
}), function (t, e) {
  "function" == typeof define && define.amd ? define("pnotify.reference", ["jquery", "pnotify"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./pnotify")) : e(t.jQuery, t.PNotify)
}(this, function (i, t) {
  t.prototype.options.reference = {put_thing: !1, labels: {text: "Spin Around"}}, t.prototype.modules.reference = {
    thingElem: null, init: function (n, t) {
      var e = this;
      this.notice, this.options, t.put_thing && (this.thingElem = i('<button style="float:right;" class="btn btn-default" type="button" disabled><i class="' + n.styles.athing + '" />&nbsp;' + t.labels.text + "</button>").appendTo(n.container), n.container.append('<div style="clear: right; line-height: 0;" />'), n.elem.on({
        mouseenter: function () {
          e.thingElem.prop("disabled", !1)
        }, mouseleave: function () {
          e.thingElem.prop("disabled", !0)
        }
      }), this.thingElem.on("click", function () {
        var t = 0, e = setInterval(function () {
          360 == (t += 10) && (t = 0, clearInterval(e)), n.elem.css({
            "-moz-transform": "rotate(" + t + "deg)",
            "-webkit-transform": "rotate(" + t + "deg)",
            "-o-transform": "rotate(" + t + "deg)",
            "-ms-transform": "rotate(" + t + "deg)",
            filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=" + t / 360 * 4 + ")"
          })
        }, 20)
      }))
    }, update: function (t, e) {
      this.notice, this.options, e.put_thing && this.thingElem ? this.thingElem.show() : !e.put_thing && this.thingElem && this.thingElem.hide(), this.thingElem && this.thingElem.find("i").attr("class", t.styles.athing)
    }, beforeOpen: function () {
    }, afterOpen: function () {
    }, beforeClose: function () {
    }, afterClose: function () {
    }, beforeDestroy: function () {
    }, afterDestroy: function () {
    }
  }, i.extend(t.styling.jqueryui, {athing: "ui-icon ui-icon-refresh"}), i.extend(t.styling.bootstrap2, {athing: "icon-refresh"}), i.extend(t.styling.bootstrap3, {athing: "glyphicon glyphicon-refresh"}), i.extend(t.styling.fontawesome, {athing: "fa fa-refresh"})
}), function (t, e) {
  "function" == typeof define && define.amd ? define("pnotify.tooltip", ["jquery", "pnotify"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./pnotify")) : e(t.jQuery, t.PNotify)
}(this, function () {
}), function () {
  PNotify.prototype.options.styling = "bootstrap3"
}.call(this), function () {
  $(function () {
    return $("a.disabled").click(function (t) {
      return t.preventDefault()
    })
  })
}.call(this), function () {
  var n = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  };
  UiKit.RansackForm = function () {
    function t() {
      var t, e;
      this.populateMirrors = n(this.populateMirrors, this), this.eraseSearchField = n(this.eraseSearchField, this), this.form = $(".ransack-search-form"), this.ransackInput = this.form.find("input.ransack"), this.ransackSelects = this.form.find("select.ransack"), this.mirrorInputs = this.form.find(".ransack-mirror"), this.ransackClearBtn = $(".ransack-clear"), this.enterKeyCode = 13, this.ransackClearBtn.click((t = this, function () {
        return t.eraseSearchField(), t.ransackClearBtn.parents("form").submit()
      })), this.form.submit(this.populateMirrors), this.ransackSelects.change(function (t) {
        return $(t.target).parents("form").submit()
      }), this.ransackInput.keyup((e = this, function (t) {
        if (t.keyCode === e.enterKeyCode) return $(t.target).parents("form").submit()
      }))
    }

    return t.prototype.eraseSearchField = function () {
      return this.ransackInput.val(""), this.ransackSelects.val("")
    }, t.prototype.populateMirrors = function () {
      var t;
      return t = this.ransackInput.val(), this.mirrorInputs.val(t)
    }, t
  }(), $(function () {
    return new UiKit.RansackForm
  })
}.call(this), function () {
  $(function () {
    return $('.js-checkbox-filtering input[type="checkbox"]').on("change", function (t) {
      var e;
      return e = $($(t.target).parent()).data("url"), window.location = e
    })
  })
}.call(this), function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
  return t.ui = t.ui || {}, t.ui.version = "1.12.1"
}), function (t) {
  "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
}(function (t) {
  return t.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }
}), function (t) {
  "function" == typeof define && define.amd ? define(["jquery", "../version", "../keycode"], t) : t(jQuery)
}(function (x) {
  function l(t) {
    for (var e, n; t.length && t[0] !== document;) {
      if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (n = parseInt(t.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
      t = t.parent()
    }
    return 0
  }

  function t() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, x.extend(this._defaults, this.regional[""]), this.regional.en = x.extend(!0, {}, this.regional[""]), this.regional["en-US"] = x.extend(!0, {}, this.regional.en), this.dpDiv = n(x("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
  }

  function n(t) {
    var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return t.on("mouseout", e, function () {
      x(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && x(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && x(this).removeClass("ui-datepicker-next-hover")
    }).on("mouseover", e, o)
  }

  function o() {
    x.datepicker._isDisabledDatepicker(a.inline ? a.dpDiv.parent()[0] : a.input[0]) || (x(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), x(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && x(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && x(this).addClass("ui-datepicker-next-hover"))
  }

  function d(t, e) {
    for (var n in x.extend(t, e), e) null == e[n] && (t[n] = e[n]);
    return t
  }

  var a;
  return x.extend(x.ui, {datepicker: {version: "1.12.1"}}), x.extend(t.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv
    },
    setDefaults: function (t) {
      return d(this._defaults, t || {}), this
    },
    _attachDatepicker: function (t, e) {
      var n, i, s;
      i = "div" === (n = t.nodeName.toLowerCase()) || "span" === n, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), (s = this._newInst(x(t), i)).settings = x.extend({}, e || {}), "input" === n ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s)
    },
    _newInst: function (t, e) {
      return {
        id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
        input: t,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: e,
        dpDiv: e ? n(x("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      }
    },
    _connectDatepicker: function (t, e) {
      var n = x(t);
      e.append = x([]), e.trigger = x([]), n.hasClass(this.markerClassName) || (this._attachments(n, e), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(e), x.data(t, "datepicker", e), e.settings.disabled && this._disableDatepicker(t))
    },
    _attachments: function (t, e) {
      var n, i, s, r = this._get(e, "appendText"), o = this._get(e, "isRTL");
      e.append && e.append.remove(), r && (e.append = x("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](e.append)), t.off("focus", this._showDatepicker), e.trigger && e.trigger.remove(), "focus" !== (n = this._get(e, "showOn")) && "both" !== n || t.on("focus", this._showDatepicker), "button" !== n && "both" !== n || (i = this._get(e, "buttonText"), s = this._get(e, "buttonImage"), e.trigger = x(this._get(e, "buttonImageOnly") ? x("<img/>").addClass(this._triggerClass).attr({
        src: s,
        alt: i,
        title: i
      }) : x("<button type='button'></button>").addClass(this._triggerClass).html(s ? x("<img/>").attr({
        src: s,
        alt: i,
        title: i
      }) : i)), t[o ? "before" : "after"](e.trigger), e.trigger.on("click", function () {
        return x.datepicker._datepickerShowing && x.datepicker._lastInput === t[0] ? x.datepicker._hideDatepicker() : (x.datepicker._datepickerShowing && x.datepicker._lastInput !== t[0] && x.datepicker._hideDatepicker(), x.datepicker._showDatepicker(t[0])), !1
      }))
    },
    _autoSize: function (t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e, n, i, s, r = new Date(2009, 11, 20), o = this._get(t, "dateFormat");
        o.match(/[DM]/) && (e = function (t) {
          for (s = i = n = 0; s < t.length; s++) t[s].length > n && (n = t[s].length, i = s);
          return i
        }, r.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), r.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - r.getDay())), t.input.attr("size", this._formatDate(t, r).length)
      }
    },
    _inlineDatepicker: function (t, e) {
      var n = x(t);
      n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(e.dpDiv), x.data(t, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
    },
    _dialogDatepicker: function (t, e, n, i, s) {
      var r, o, a, l, c, u = this._dialogInst;
      return u || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = x("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), x("body").append(this._dialogInput), (u = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, x.data(this._dialogInput[0], "datepicker", u)), d(u.settings, i || {}), e = e && e.constructor === Date ? this._formatDate(u, e) : e, this._dialogInput.val(e), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (o = document.documentElement.clientWidth, a = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [o / 2 - 100 + l, a / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), x.blockUI && x.blockUI(this.dpDiv), x.data(this._dialogInput[0], "datepicker", u), this
    },
    _destroyDatepicker: function (t) {
      var e, n = x(t), i = x.data(t, "datepicker");
      n.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), x.removeData(t, "datepicker"), "input" === e ? (i.append.remove(), i.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== e && "span" !== e || n.removeClass(this.markerClassName).empty(), a === i && (a = null))
    },
    _enableDatepicker: function (e) {
      var t, n, i = x(e), s = x.data(e, "datepicker");
      i.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !1, s.trigger.filter("button").each(function () {
        this.disabled = !1
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : "div" !== t && "span" !== t || ((n = i.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = x.map(this._disabledInputs, function (t) {
        return t === e ? null : t
      }))
    },
    _disableDatepicker: function (e) {
      var t, n, i = x(e), s = x.data(e, "datepicker");
      i.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !0, s.trigger.filter("button").each(function () {
        this.disabled = !0
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : "div" !== t && "span" !== t || ((n = i.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = x.map(this._disabledInputs, function (t) {
        return t === e ? null : t
      }), this._disabledInputs[this._disabledInputs.length] = e)
    },
    _isDisabledDatepicker: function (t) {
      if (!t) return !1;
      for (var e = 0; e < this._disabledInputs.length; e++) if (this._disabledInputs[e] === t) return !0;
      return !1
    },
    _getInst: function (t) {
      try {
        return x.data(t, "datepicker")
      } catch (e) {
        throw"Missing instance data for this datepicker"
      }
    },
    _optionDatepicker: function (t, e, n) {
      var i, s, r, o, a = this._getInst(t);
      if (
        2 === arguments.length && "string" == typeof e) return "defaults" === e ? x.extend({}, x.datepicker._defaults) : a ? "all" === e ? x.extend({}, a.settings) : this._get(a, e) : null;
      i = e || {}, "string" == typeof e && ((i = {})[e] = n), a && (this._curInst === a && this._hideDatepicker(), s = this._getDateDatepicker(t, !0), r = this._getMinMaxDate(a, "min"), o = this._getMinMaxDate(a, "max"), d(a.settings, i), null !== r && i.dateFormat !== undefined && i.minDate === undefined && (a.settings.minDate = this._formatDate(a, r)), null !== o && i.dateFormat !== undefined && i.maxDate === undefined && (a.settings.maxDate = this._formatDate(a, o)), "disabled" in i && (i.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(x(t), a), this._autoSize(a), this._setDate(a, s), this._updateAlternate(a), this._updateDatepicker(a))
    },
    _changeDatepicker: function (t, e, n) {
      this._optionDatepicker(t, e, n)
    },
    _refreshDatepicker: function (t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e)
    },
    _setDateDatepicker: function (t, e) {
      var n = this._getInst(t);
      n && (this._setDate(n, e), this._updateDatepicker(n), this._updateAlternate(n))
    },
    _getDateDatepicker: function (t, e) {
      var n = this._getInst(t);
      return n && !n.inline && this._setDateFromField(n, e), n ? this._getDate(n) : null
    },
    _doKeyDown: function (t) {
      var e, n, i, s = x.datepicker._getInst(t.target), r = !0, o = s.dpDiv.is(".ui-datepicker-rtl");
      if (s._keyEvent = !0, x.datepicker._datepickerShowing) switch (t.keyCode) {
        case 9:
          x.datepicker._hideDatepicker(), r = !1;
          break;
        case 13:
          return (i = x("td." + x.datepicker._dayOverClass + ":not(." + x.datepicker._currentClass + ")", s.dpDiv))[0] && x.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), (e = x.datepicker._get(s, "onSelect")) ? (n = x.datepicker._formatDate(s), e.apply(s.input ? s.input[0] : null, [n, s])) : x.datepicker._hideDatepicker(), !1;
        case 27:
          x.datepicker._hideDatepicker();
          break;
        case 33:
          x.datepicker._adjustDate(t.target, t.ctrlKey ? -x.datepicker._get(s, "stepBigMonths") : -x.datepicker._get(s, "stepMonths"), "M");
          break;
        case 34:
          x.datepicker._adjustDate(t.target, t.ctrlKey ? +x.datepicker._get(s, "stepBigMonths") : +x.datepicker._get(s, "stepMonths"), "M");
          break;
        case 35:
          (t.ctrlKey || t.metaKey) && x.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
          break;
        case 36:
          (t.ctrlKey || t.metaKey) && x.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
          break;
        case 37:
          (t.ctrlKey || t.metaKey) && x.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && x.datepicker._adjustDate(t.target, t.ctrlKey ? -x.datepicker._get(s, "stepBigMonths") : -x.datepicker._get(s, "stepMonths"), "M");
          break;
        case 38:
          (t.ctrlKey || t.metaKey) && x.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
          break;
        case 39:
          (t.ctrlKey || t.metaKey) && x.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && x.datepicker._adjustDate(t.target, t.ctrlKey ? +x.datepicker._get(s, "stepBigMonths") : +x.datepicker._get(s, "stepMonths"), "M");
          break;
        case 40:
          (t.ctrlKey || t.metaKey) && x.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
          break;
        default:
          r = !1
      } else 36 === t.keyCode && t.ctrlKey ? x.datepicker._showDatepicker(this) : r = !1;
      r && (t.preventDefault(), t.stopPropagation())
    },
    _doKeyPress: function (t) {
      var e, n, i = x.datepicker._getInst(t.target);
      if (x.datepicker._get(i, "constrainInput")) return e = x.datepicker._possibleChars(x.datepicker._get(i, "dateFormat")), n = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || n < " " || !e || -1 < e.indexOf(n)
    },
    _doKeyUp: function (t) {
      var e = x.datepicker._getInst(t.target);
      if (e.input.val() !== e.lastVal) try {
        x.datepicker.parseDate(x.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, x.datepicker._getFormatConfig(e)) && (x.datepicker._setDateFromField(e), x.datepicker._updateAlternate(e), x.datepicker._updateDatepicker(e))
      } catch (n) {
      }
      return !0
    },
    _showDatepicker: function (t) {
      var e, n, i, s, r, o, a;
      ("input" !== (t = t.target || t).nodeName.toLowerCase() && (t = x("input", t.parentNode)[0]), x.datepicker._isDisabledDatepicker(t) || x.datepicker._lastInput === t) || (e = x.datepicker._getInst(t), x.datepicker._curInst && x.datepicker._curInst !== e && (x.datepicker._curInst.dpDiv.stop(!0, !0), e && x.datepicker._datepickerShowing && x.datepicker._hideDatepicker(x.datepicker._curInst.input[0])), !1 !== (i = (n = x.datepicker._get(e, "beforeShow")) ? n.apply(t, [t, e]) : {}) && (d(e.settings, i), e.lastVal = null, x.datepicker._lastInput = t, x.datepicker._setDateFromField(e), x.datepicker._inDialog && (t.value = ""), x.datepicker._pos || (x.datepicker._pos = x.datepicker._findPos(t), x.datepicker._pos[1] += t.offsetHeight), s = !1, x(t).parents().each(function () {
        return !(s |= "fixed" === x(this).css("position"))
      }), r = {
        left: x.datepicker._pos[0],
        top: x.datepicker._pos[1]
      }, x.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
        position: "absolute",
        display: "block",
        top: "-1000px"
      }), x.datepicker._updateDatepicker(e), r = x.datepicker._checkOffset(e, r, s), e.dpDiv.css({
        position: x.datepicker._inDialog && x.blockUI ? "static" : s ? "fixed" : "absolute",
        display: "none",
        left: r.left + "px",
        top: r.top + "px"
      }), e.inline || (o = x.datepicker._get(e, "showAnim"), a = x.datepicker._get(e, "duration"), e.dpDiv.css("z-index", l(x(t)) + 1), x.datepicker._datepickerShowing = !0, x.effects && x.effects.effect[o] ? e.dpDiv.show(o, x.datepicker._get(e, "showOptions"), a) : e.dpDiv[o || "show"](o ? a : null), x.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), x.datepicker._curInst = e)))
    },
    _updateDatepicker: function (t) {
      this.maxRows = 4, (a = t).dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
      var e, n = this._getNumberOfMonths(t), i = n[1], s = 17, r = t.dpDiv.find("." + this._dayOverClass + " a");
      0 < r.length && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < i && t.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", s * i + "em"), t.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === x.datepicker._curInst && x.datepicker._datepickerShowing && x.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (e = t.yearshtml, setTimeout(function () {
        e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), e = t.yearshtml = null
      }, 0))
    },
    _shouldFocusInput: function (t) {
      return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
    },
    _checkOffset: function (t, e, n) {
      var i = t.dpDiv.outerWidth(), s = t.dpDiv.outerHeight(), r = t.input ? t.input.outerWidth() : 0,
        o = t.input ? t.input.outerHeight() : 0,
        a = document.documentElement.clientWidth + (n ? 0 : x(document).scrollLeft()),
        l = document.documentElement.clientHeight + (n ? 0 : x(document).scrollTop());
      return e.left -= this._get(t, "isRTL") ? i - r : 0, e.left -= n && e.left === t.input.offset().left ? x(document).scrollLeft() : 0, e.top -= n && e.top === t.input.offset().top + o ? x(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + i > a && i < a ? Math.abs(e.left + i - a) : 0), e.top -= Math.min(e.top, e.top + s > l && s < l ? Math.abs(s + o) : 0), e
    },
    _findPos: function (t) {
      for (var e, n = this._getInst(t), i = this._get(n, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || x.expr.filters.hidden(t));) t = t[i ? "previousSibling" : "nextSibling"];
      return [(e = x(t).offset()).left, e.top]
    },
    _hideDatepicker: function (t) {
      var e, n, i, s, r = this._curInst;
      !r || t && r !== x.data(t, "datepicker") || this._datepickerShowing && (e = this._get(r, "showAnim"), n = this._get(r, "duration"), i = function () {
        x.datepicker._tidyDialog(r)
      }, x.effects && (x.effects.effect[e] || x.effects[e]) ? r.dpDiv.hide(e, x.datepicker._get(r, "showOptions"), n, i) : r.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? n : null, i), e || i(), this._datepickerShowing = !1, (s = this._get(r, "onClose")) && s.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), x.blockUI && (x.unblockUI(), x("body").append(this.dpDiv))), this._inDialog = !1)
    },
    _tidyDialog: function (t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
    },
    _checkExternalClick: function (t) {
      if (x.datepicker._curInst) {
        var e = x(t.target), n = x.datepicker._getInst(e[0]);
        (e[0].id === x.datepicker._mainDivId || 0 !== e.parents("#" + x.datepicker._mainDivId).length || e.hasClass(x.datepicker.markerClassName) || e.closest("." + x.datepicker._triggerClass).length || !x.datepicker._datepickerShowing || x.datepicker._inDialog && x.blockUI) && (!e.hasClass(x.datepicker.markerClassName) || x.datepicker._curInst === n) || x.datepicker._hideDatepicker()
      }
    },
    _adjustDate: function (t, e, n) {
      var i = x(t), s = this._getInst(i[0]);
      this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(s, e + ("M" === n ? this._get(s, "showCurrentAtPos") : 0), n), this._updateDatepicker(s))
    },
    _gotoToday: function (t) {
      var e, n = x(t), i = this._getInst(n[0]);
      this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (e = new Date, i.selectedDay = e.getDate(), i.drawMonth = i.selectedMonth = e.getMonth(), i.drawYear = i.selectedYear = e.getFullYear()), this._notifyChange(i), this._adjustDate(n)
    },
    _selectMonthYear: function (t, e, n) {
      var i = x(t), s = this._getInst(i[0]);
      s["selected" + ("M" === n ? "Month" : "Year")] = s["draw" + ("M" === n ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i)
    },
    _selectDay: function (t, e, n, i) {
      var s, r = x(t);
      x(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || ((s = this._getInst(r[0])).selectedDay = s.currentDay = x("a", i).html(), s.selectedMonth = s.currentMonth = e, s.selectedYear = s.currentYear = n, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
    },
    _clearDate: function (t) {
      var e = x(t);
      this._selectDate(e, "")
    },
    _selectDate: function (t, e) {
      var n, i = x(t), s = this._getInst(i[0]);
      e = null != e ? e : this._formatDate(s), s.input && s.input.val(e), this._updateAlternate(s), (n = this._get(s, "onSelect")) ? n.apply(s.input ? s.input[0] : null, [e, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.trigger("focus"), this._lastInput = null)
    },
    _updateAlternate: function (t) {
      var e, n, i, s = this._get(t, "altField");
      s && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"), n = this._getDate(t), i = this.formatDate(e, n, this._getFormatConfig(t)), x(s).val(i))
    },
    noWeekends: function (t) {
      var e = t.getDay();
      return [0 < e && e < 6, ""]
    },
    iso8601Week: function (t) {
      var e, n = new Date(t.getTime());
      return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), e = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((e - n) / 864e5) / 7) + 1
    },
    parseDate: function (n, r, t) {
      if (null == n || null == r) throw"Invalid arguments";
      if ("" === (r = "object" == typeof r ? r.toString() : r + "")) return null;
      var i, e, s, o, a = 0, l = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
        u = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
        d = (t ? t.dayNames : null) || this._defaults.dayNames,
        p = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
        h = (t ? t.monthNames : null) || this._defaults.monthNames, f = -1, m = -1, g = -1, y = -1, v = !1,
        b = function (t) {
          var e = i + 1 < n.length && n.charAt(i + 1) === t;
          return e && i++, e
        }, _ = function (t) {
          var e = b(t), n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
            i = new RegExp("^\\d{" + ("y" === t ? n : 1) + "," + n + "}"), s = r.substring(a).match(i);
          if (!s) throw"Missing number at position " + a;
          return a += s[0].length, parseInt(s[0], 10)
        }, w = function (t, e, n) {
          var i = -1, s = x.map(b(t) ? n : e, function (t, e) {
            return [[e, t]]
          }).sort(function (t, e) {
            return -(t[1].length - e[1].length)
          });
          if (x.each(s, function (t, e) {
            var n = e[1];
            if (r.substr(a, n.length).toLowerCase() === n.toLowerCase()) return i = e[0], a += n.length, !1
          }), -1 !== i) return i + 1;
          throw"Unknown name at position " + a
        }, k = function () {
          if (r.charAt(a) !== n.charAt(i)) throw"Unexpected literal at position " + a;
          a++
        };
      for (i = 0; i < n.length; i++) if (v) "'" !== n.charAt(i) || b("'") ? k() : v = !1; else switch (n.charAt(i)) {
        case"d":
          g = _("d");
          break;
        case"D":
          w("D", u, d);
          break;
        case"o":
          y = _("o");
          break;
        case"m":
          m = _("m");
          break;
        case"M":
          m = w("M", p, h);
          break;
        case"y":
          f = _("y");
          break;
        case"@":
          f = (o = new Date(_("@"))).getFullYear(), m = o.getMonth() + 1, g = o.getDate();
          break;
        case"!":
          f = (o = new Date((_("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = o.getMonth() + 1, g = o.getDate();
          break;
        case"'":
          b("'") ? k() : v = !0;
          break;
        default:
          k()
      }
      if (a < r.length && (s = r.substr(a), !/^\s+/.test(s))) throw"Extra/unparsed characters found in date: " + s;
      if (-1 === f ? f = (new Date).getFullYear() : f < 100 && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f <= c ? 0 : -100)), -1 < y) for (m = 1, g = y; ;) {
        if (g <= (e = this._getDaysInMonth(f, m - 1))) break;
        m++, g -= e
      }
      if ((o = this._daylightSavingAdjust(new Date(f, m - 1, g))).getFullYear() !== f || o.getMonth() + 1 !== m || o.getDate() !== g) throw"Invalid date";
      return o
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
    formatDate: function (n, t, e) {
      if (!t) return "";
      var i, s = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
        r = (e ? e.dayNames : null) || this._defaults.dayNames,
        o = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
        a = (e ? e.monthNames : null) || this._defaults.monthNames, l = function (t) {
          var e = i + 1 < n.length && n.charAt(i + 1) === t;
          return e && i++, e
        }, c = function (t, e, n) {
          var i = "" + e;
          if (l(t)) for (; i.length < n;) i = "0" + i;
          return i
        }, u = function (t, e, n, i) {
          return l(t) ? i[e] : n[e]
        }, d = "", p = !1;
      if (t) for (i = 0; i < n.length; i++) if (p) "'" !== n.charAt(i) || l("'") ? d += n.charAt(i) : p = !1; else switch (n.charAt(i)) {
        case"d":
          d += c("d", t.getDate(), 2);
          break;
        case"D":
          d += u("D", t.getDay(), s, r);
          break;
        case"o":
          d += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
          break;
        case"m":
          d += c("m", t.getMonth() + 1, 2);
          break;
        case"M":
          d += u("M", t.getMonth(), o, a);
          break;
        case"y":
          d += l("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
          break;
        case"@":
          d += t.getTime();
          break;
        case"!":
          d += 1e4 * t.getTime() + this._ticksTo1970;
          break;
        case"'":
          l("'") ? d += "'" : p = !0;
          break;
        default:
          d += n.charAt(i)
      }
      return d
    },
    _possibleChars: function (n) {
      var i, t = "", e = !1, s = function (t) {
        var e = i + 1 < n.length && n.charAt(i + 1) === t;
        return e && i++, e
      };
      for (i = 0; i < n.length; i++) if (e) "'" !== n.charAt(i) || s("'") ? t += n.charAt(i) : e = !1; else switch (n.charAt(i)) {
        case"d":
        case"m":
        case"y":
        case"@":
          t += "0123456789";
          break;
        case"D":
        case"M":
          return null;
        case"'":
          s("'") ? t += "'" : e = !0;
          break;
        default:
          t += n.charAt(i)
      }
      return t
    },
    _get: function (t, e) {
      return t.settings[e] !== undefined ? t.settings[e] : this._defaults[e]
    },
    _setDateFromField: function (t, e) {
      if (t.input.val() !== t.lastVal) {
        var n = this._get(t, "dateFormat"), i = t.lastVal = t.input ? t.input.val() : null, s = this._getDefaultDate(t),
          r = s, o = this._getFormatConfig(t);
        try {
          r = this.parseDate(n, i, o) || s
        } catch (event) {
          i = e ? "" : i
        }
        t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), t.currentDay = i ? r.getDate() : 0, t.currentMonth = i ? r.getMonth() : 0, t.currentYear = i ? r.getFullYear() : 0, this._adjustInstDate(t)
      }
    },
    _getDefaultDate: function (t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
    },
    _determineDate: function (l, t, e) {
      var n = function (t) {
        var e = new Date;
        return e.setDate(e.getDate() + t), e
      }, i = null == t || "" === t ? e : "string" == typeof t ? function (t) {
        try {
          return x.datepicker.parseDate(x.datepicker._get(l, "dateFormat"), t, x.datepicker._getFormatConfig(l))
        } catch (a) {
        }
        for (var e = (t.toLowerCase().match(/^c/) ? x.datepicker._getDate(l) : null) || new Date, n = e.getFullYear(), i = e.getMonth(), s = e.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, o = r.exec(t); o;) {
          switch (o[2] || "d") {
            case"d":
            case"D":
              s += parseInt(o[1], 10);
              break;
            case"w":
            case"W":
              s += 7 * parseInt(o[1], 10);
              break;
            case"m":
            case"M":
              i += parseInt(o[1], 10), s = Math.min(s, x.datepicker._getDaysInMonth(n, i));
              break;
            case"y":
            case"Y":
              n += parseInt(o[1], 10), s = Math.min(s, x.datepicker._getDaysInMonth(n, i))
          }
          o = r.exec(t)
        }
        return new Date(n, i, s)
      }(t) : "number" == typeof t ? isNaN(t) ? e : n(t) : new Date(t.getTime());
      return (i = i && "Invalid Date" === i.toString() ? e : i) && (i.setHours(0), i.setMinutes(0), i.setSeconds(0), i.setMilliseconds(0)), this._daylightSavingAdjust(i)
    },
    _daylightSavingAdjust: function (t) {
      return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t) : null
    },
    _setDate: function (t, e, n) {
      var i = !e, s = t.selectedMonth, r = t.selectedYear,
        o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
      t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), s === t.selectedMonth && r === t.selectedYear || n || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(i ? "" : this._formatDate(t))
    },
    _getDate: function (t) {
      return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
    },
    _attachHandlers: function (t) {
      var e = this._get(t, "stepMonths"), n = "#" + t.id.replace(/\\\\/g, "\\");
      t.dpDiv.find("[data-handler]").map(function () {
        var t = {
          prev: function () {
            x.datepicker._adjustDate(n, -e, "M")
          }, next: function () {
            x.datepicker._adjustDate(n, +e, "M")
          }, hide: function () {
            x.datepicker._hideDatepicker()
          }, today: function () {
            x.datepicker._gotoToday(n)
          }, selectDay: function () {
            return x.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
          }, selectMonth: function () {
            return x.datepicker._selectMonthYear(n, this, "M"), !1
          }, selectYear: function () {
            return x.datepicker._selectMonthYear(n, this, "Y"), !1
          }
        };
        x(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
      })
    },
    _generateHTML: function (t) {
      var e, n, i, s, r, o, a, l, c, u, d, p, h, f, m, g, y, v, b, _, w, k, x, T, D, C, S, $, M, A, E, j, O, I, N, L, P,
        H, z, F = new Date, R = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
        q = this._get(t, "isRTL"), B = this._get(t, "showButtonPanel"), U = this._get(t, "hideIfNoPrevNext"),
        Y = this._get(t, "navigationAsDateFormat"), K = this._getNumberOfMonths(t),
        W = this._get(t, "showCurrentAtPos"), V = this._get(t, "stepMonths"), Q = 1 !== K[0] || 1 !== K[1],
        G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
        X = this._getMinMaxDate(t, "min"), J = this._getMinMaxDate(t, "max"), Z = t.drawMonth - W, tt = t.drawYear;
      if (Z < 0 && (Z += 12, tt--), J) for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - K[0] * K[1] + 1, J.getDate())), e = X && e < X ? X : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) --Z < 0 && (Z = 11, tt--);
      for (t.drawMonth = Z, t.drawYear = tt, n = this._get(t, "prevText"), n = Y ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z - V, 1)), this._getFormatConfig(t)) : n, i = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + n + "</span></a>" : U ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + n + "</span></a>", s = this._get(t, "nextText"), s = Y ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, Z + V, 1)), this._getFormatConfig(t)) : s, r = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + s + "</span></a>" : U ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + s + "</span></a>", o = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? G : R, o = Y ? this.formatDate(o, a, this._getFormatConfig(t)) : o, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (q ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (q ? "" : l) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(t, "showWeek"), p = this._get(t, "dayNames"), h = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), y = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), _ = "", k = 0; k < K[0]; k++) {
        for (x = "", this.maxRows = 4, T = 0; T < K[1]; T++) {
          if (D = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), C = " ui-corner-all", S = "", Q) {
            if (S += "<div class='ui-datepicker-group", 1 < K[1]) switch (T) {
              case 0:
                S += " ui-datepicker-group-first", C = " ui-corner-" + (q ? "right" : "left");
                break;
              case K[1] - 1:
                S += " ui-datepicker-group-last", C = " ui-corner-" + (q ? "left" : "right");
                break;
              default:
                S += " ui-datepicker-group-middle", C = ""
            }
            S += "'>"
          }
          for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === k ? q ? r : i : "") + (/all|right/.test(C) && 0 === k ? q ? i : r : "") + this._generateMonthYearHeader(t, Z, tt, X, J, 0 < k || 0 < T, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", $ = d ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) $ += "<th scope='col'" + (5 <= (w + u + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + p[M = (w + u) % 7] + "'>" + h[M] + "</span></th>";
          for (S += $ + "</tr></thead><tbody>", A = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, A)), E = (this._getFirstDayOfMonth(tt, Z) - u + 7) % 7, j = Math.ceil((E + A) / 7), O = Q && this.maxRows > j ? this.maxRows : j, this.maxRows = O, I = this._daylightSavingAdjust(new Date(tt, Z, 1 - E)), N = 0; N < O; N++) {
            for (S += "<tr>", L = d ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(I) + "</td>" : "", w = 0; w < 7; w++) P = g ? g.apply(t.input ? t.input[0] : null, [I]) : [!0, ""], z = (H = I.getMonth() !== Z) && !v || !P[0] || X && I < X || J && J < I, L += "<td class='" + (5 <= (w + u + 6) % 7 ? " ui-datepicker-week-end" : "") + (H ? " ui-datepicker-other-month" : "") + (I.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === I.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (z ? " " + this._unselectableClass + " ui-state-disabled" : "") + (H && !y ? "" : " " + P[1] + (I.getTime() === G.getTime() ? " " + this._currentClass : "") + (I.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (H && !y || !P[2] ? "" : " title='" + P[2].replace(/'/g, "&#39;") + "'") + (z ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (H && !y ? "&#xa0;" : z ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === R.getTime() ? " ui-state-highlight" : "") + (I.getTime() === G.getTime() ? " ui-state-active" : "") + (H ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
            S += L + "</tr>"
          }
          11 < ++Z && (Z = 0, tt++), x += S += "</tbody></table>" + (Q ? "</div>" + (0 < K[0] && T === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
        }
        _ += x
      }
      return _ += c, t._keyEvent = !1, _
    },
    _generateMonthYearHeader: function (t, e, n, i, s, r, o, a) {
      var l, c, u, d, p, h, f, m, g = this._get(t, "changeMonth"), y = this._get(t, "changeYear"),
        v = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", _ = "";
      if (r || !g) _ += "<span class='ui-datepicker-month'>" + o[e] + "</span>"; else {
        for (l = i && i.getFullYear() === n, c = s && s.getFullYear() === n, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; u < 12; u++) (!l || u >= i.getMonth()) && (!c || u <= s.getMonth()) && (_ += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + a[u] + "</option>");
        _ += "</select>"
      }
      if (v || (b += _ + (!r && g && y ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", r || !y) b += "<span class='ui-datepicker-year'>" + n + "</span>"; else {
        for (d = this._get(t, "yearRange").split(":"), p = (new Date).getFullYear(), f = (h = function (t) {
          var e = t.match(/c[+\-].*/) ? n + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? p + parseInt(t, 10) : parseInt(t, 10);
          return isNaN(e) ? p : e
        })(d[0]), m = Math.max(f, h(d[1] || "")), f = i ? Math.max(f, i.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= m; f++) t.yearshtml += "<option value='" + f + "'" + (f === n ? " selected='selected'" : "") + ">" + f + "</option>";
        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
      }
      return b += this._get(t, "yearSuffix"), v && (b += (!r && g && y ? "" : "&#xa0;") + _), b += "</div>"
    },
    _adjustInstDate: function (t, e, n) {
      var i = t.selectedYear + ("Y" === n ? e : 0), s = t.selectedMonth + ("M" === n ? e : 0),
        r = Math.min(t.selectedDay, this._getDaysInMonth(i, s)) + ("D" === n ? e : 0),
        o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(i, s, r)));
      t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), "M" !== n && "Y" !== n || this._notifyChange(t)
    },
    _restrictMinMax: function (t, e) {
      var n = this._getMinMaxDate(t, "min"), i = this._getMinMaxDate(t, "max"), s = n && e < n ? n : e;
      return i && i < s ? i : s
    },
    _notifyChange: function (t) {
      var e = this._get(t, "onChangeMonthYear");
      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
    },
    _getNumberOfMonths: function (t) {
      var e = this._get(t, "numberOfMonths");
      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
    },
    _getMinMaxDate: function (t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null)
    },
    _getDaysInMonth: function (t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
    },
    _getFirstDayOfMonth: function (t, e) {
      return new Date(t, e, 1).getDay()
    },
    _canAdjustMonth: function (t, e, n, i) {
      var s = this._getNumberOfMonths(t), r = this._daylightSavingAdjust(new Date(n, i + (e < 0 ? e : s[0] * s[1]), 1));
      return e < 0 && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())), this._isInRange(t, r)
    },
    _isInRange: function (t, e) {
      var n, i, s = this._getMinMaxDate(t, "min"), r = this._getMinMaxDate(t, "max"), o = null, a = null,
        l = this._get(t, "yearRange");
      return l && (n = l.split(":"), i = (new Date).getFullYear(), o = parseInt(n[0], 10), a = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += i), n[1].match(/[+\-].*/) && (a += i)), (!s || e.getTime() >= s.getTime()) && (!r || e.getTime() <= r.getTime()) && (!o || e.getFullYear() >= o) && (!a || e.getFullYear() <= a)
    },
    _getFormatConfig: function (t) {
      var e = this._get(t, "shortYearCutoff");
      return {
        shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
        dayNamesShort: this._get(t, "dayNamesShort"),
        dayNames: this._get(t, "dayNames"),
        monthNamesShort: this._get(t, "monthNamesShort"),
        monthNames: this._get(t, "monthNames")
      }
    },
    _formatDate: function (t, e, n, i) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(i, n, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
    }
  }), x.fn.datepicker = function (t, e) {
    if (!this.length) return this;
    x.datepicker.initialized || (x(document).on("mousedown", x.datepicker._checkExternalClick), x.datepicker.initialized = !0), 0 === x("#" + x.datepicker._mainDivId).length && x("body").append(x.datepicker.dpDiv);
    var n = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof e ? x.datepicker["_" + t + "Datepicker"].apply(x.datepicker, [this[0]].concat(n)) : this.each(function () {
      "string" == typeof t ? x.datepicker["_" + t + "Datepicker"].apply(x.datepicker, [this].concat(n)) : x.datepicker._attachDatepicker(this, t)
    }) : x.datepicker["_" + t + "Datepicker"].apply(x.datepicker, [this[0]].concat(n))
  }, x.datepicker = new t, x.datepicker.initialized = !1, x.datepicker.uuid = (new Date).getTime(), x.datepicker.version = "1.12.1", x.datepicker
}), function (t) {
  "function" == typeof define && define.amd ? define(["jquery", "jquery-ui"], t) : t(jQuery)
}(function ($) {
  if ($.ui.timepicker = $.ui.timepicker || {}, !$.ui.timepicker.version) {
    $.extend($.ui, {timepicker: {version: "1.6.3"}});
    var Timepicker = function () {
      this.regional = [], this.regional[""] = {
        currentText: "Now",
        closeText: "Done",
        amNames: ["AM", "A"],
        pmNames: ["PM", "P"],
        timeFormat: "HH:mm",
        timeSuffix: "",
        timeOnlyTitle: "Choose Time",
        timeText: "Time",
        hourText: "Hour",
        minuteText: "Minute",
        secondText: "Second",
        millisecText: "Millisecond",
        microsecText: "Microsecond",
        timezoneText: "Time Zone",
        isRTL: !1
      }, this._defaults = {
        showButtonPanel: !0,
        timeOnly: !1,
        timeOnlyShowDate: !1,
        showHour: null,
        showMinute: null,
        showSecond: null,
        showMillisec: null,
        showMicrosec: null,
        showTimezone: null,
        showTime: !0,
        stepHour: 1,
        stepMinute: 1,
        stepSecond: 1,
        stepMillisec: 1,
        stepMicrosec: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisec: 0,
        microsec: 0,
        timezone: null,
        hourMin: 0,
        minuteMin: 0,
        secondMin: 0,
        millisecMin: 0,
        microsecMin: 0,
        hourMax: 23,
        minuteMax: 59,
        secondMax: 59,
        millisecMax: 999,
        microsecMax: 999,
        minDateTime: null,
        maxDateTime: null,
        maxTime: null,
        minTime: null,
        onSelect: null,
        hourGrid: 0,
        minuteGrid: 0,
        secondGrid: 0,
        millisecGrid: 0,
        microsecGrid: 0,
        alwaysSetTime: !0,
        separator: " ",
        altFieldTimeOnly: !0,
        altTimeFormat: null,
        altSeparator: null,
        altTimeSuffix: null,
        altRedirectFocus: !0,
        pickerTimeFormat: null,
        pickerTimeSuffix: null,
        showTimepicker: !0,
        timezoneList: null,
        addSliderAccess: !1,
        sliderAccessArgs: null,
        controlType: "slider",
        oneLine: !1,
        defaultValue: null,
        parse: "strict",
        afterInject: null
      }, $.extend(this._defaults, this.regional[""])
    };
    $.extend(Timepicker.prototype, {
      $input: null,
      $altInput: null,
      $timeObj: null,
      inst: null,
      hour_slider: null,
      minute_slider: null,
      second_slider: null,
      millisec_slider: null,
      microsec_slider: null,
      timezone_select: null,
      maxTime: null,
      minTime: null,
      hour: 0,
      minute: 0,
      second: 0,
      millisec: 0,
      microsec: 0,
      timezone: null,
      hourMinOriginal: null,
      minuteMinOriginal: null,
      secondMinOriginal: null,
      millisecMinOriginal: null,
      microsecMinOriginal: null,
      hourMaxOriginal: null,
      minuteMaxOriginal: null,
      secondMaxOriginal: null,
      millisecMaxOriginal: null,
      microsecMaxOriginal: null,
      ampm: "",
      formattedDate: "",
      formattedTime: "",
      formattedDateTime: "",
      timezoneList: null,
      units: ["hour", "minute", "second", "millisec", "microsec"],
      support: {},
      control: null,
      setDefaults: function (t) {
        return extendRemove(this._defaults, t || {}), this
      },
      _newInst: function ($input, opts) {
        var tp_inst = new Timepicker, inlineSettings = {}, fns = {}, overrides, i;
        for (var attrName in this._defaults) if (this._defaults.hasOwnProperty(attrName)) {
          var attrValue = $input.attr("time:" + attrName);
          if (attrValue) try {
            inlineSettings[attrName] = eval(attrValue)
          } catch (err) {
            inlineSettings[attrName] = attrValue
          }
        }
        for (i in overrides = {
          beforeShow: function (t, e) {
            if ($.isFunction(tp_inst._defaults.evnts.beforeShow)) return tp_inst._defaults.evnts.beforeShow.call($input[0], t, e, tp_inst)
          }, onChangeMonthYear: function (t, e, n) {
            $.isFunction(tp_inst._defaults.evnts.onChangeMonthYear) && tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], t, e, n, tp_inst)
          }, onClose: function (t, e) {
            !0 === tp_inst.timeDefined && "" !== $input.val() && tp_inst._updateDateTime(e), $.isFunction(tp_inst._defaults.evnts.onClose) && tp_inst._defaults.evnts.onClose.call($input[0], t, e, tp_inst)
          }
        }, overrides) overrides.hasOwnProperty(i) && (fns[i] = opts[i] || this._defaults[i] || null);
        tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, {
          evnts: fns,
          timepicker: tp_inst
        }), tp_inst.amNames = $.map(tp_inst._defaults.amNames, function (t) {
          return t.toUpperCase()
        }), tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function (t) {
          return t.toUpperCase()
        }), tp_inst.support = detectSupport(tp_inst._defaults.timeFormat + (tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : "") + (tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : "")), "string" == typeof tp_inst._defaults.controlType ? ("slider" === tp_inst._defaults.controlType && "undefined" == typeof $.ui.slider && (tp_inst._defaults.controlType = "select"), tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType]) : tp_inst.control = tp_inst._defaults.controlType;
        var timezoneList = [-720, -660, -600, -570, -540, -480, -420, -360, -300, -270, -240, -210, -180, -120, -60, 0, 60, 120, 180, 210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 525, 540, 570, 600, 630, 660, 690, 720, 765, 780, 840];
        null !== tp_inst._defaults.timezoneList && (timezoneList = tp_inst._defaults.timezoneList);
        var tzl = timezoneList.length, tzi = 0, tzv = null;
        if (0 < tzl && "object" != typeof timezoneList[0]) for (; tzi < tzl; tzi++) tzv = timezoneList[tzi], timezoneList[tzi] = {
          value: tzv,
          label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601)
        };
        return tp_inst._defaults.timezoneList = timezoneList, tp_inst.timezone = null !== tp_inst._defaults.timezone ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) : -1 * (new Date).getTimezoneOffset(), tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin : tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour, tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin : tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute, tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin : tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second, tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin : tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec, tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin : tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec,
          tp_inst.ampm = "", tp_inst.$input = $input, tp_inst._defaults.altField && (tp_inst.$altInput = $(tp_inst._defaults.altField), !0 === tp_inst._defaults.altRedirectFocus && tp_inst.$altInput.css({cursor: "pointer"}).focus(function () {
          $input.trigger("focus")
        })), 0 !== tp_inst._defaults.minDate && 0 !== tp_inst._defaults.minDateTime || (tp_inst._defaults.minDate = new Date), 0 !== tp_inst._defaults.maxDate && 0 !== tp_inst._defaults.maxDateTime || (tp_inst._defaults.maxDate = new Date), tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date && (tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime())), tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date && (tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime())), tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date && (tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime())), tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date && (tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime())), tp_inst.$input.bind("focus", function () {
          tp_inst._onFocus()
        }), tp_inst
      },
      _addTimePicker: function (t) {
        var e = $.trim(this.$altInput && this._defaults.altFieldTimeOnly ? this.$input.val() + " " + this.$altInput.val() : this.$input.val());
        this.timeDefined = this._parseTime(e), this._limitMinMaxDateTime(t, !1), this._injectTimePicker(), this._afterInject()
      },
      _parseTime: function (t, e) {
        if (this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), e || !this._defaults.timeOnly) {
          var n = $.datepicker._get(this.inst, "dateFormat");
          try {
            var i = parseDateTimeInternal(n, this._defaults.timeFormat, t, $.datepicker._getFormatConfig(this.inst), this._defaults);
            if (!i.timeObj) return !1;
            $.extend(this, i.timeObj)
          } catch (r) {
            return $.timepicker.log("Error parsing the date/time string: " + r + "\ndate/time string = " + t + "\ntimeFormat = " + this._defaults.timeFormat + "\ndateFormat = " + n), !1
          }
          return !0
        }
        var s = $.datepicker.parseTime(this._defaults.timeFormat, t, this._defaults);
        return !!s && ($.extend(this, s), !0)
      },
      _afterInject: function () {
        var t = this.inst.settings;
        $.isFunction(t.afterInject) && t.afterInject.call(this)
      },
      _injectTimePicker: function () {
        var t = this.inst.dpDiv, e = this.inst.settings, r = this, o = "", n = "", i = null, s = {}, a = {}, l = null,
          c = 0, u = 0;
        if (0 === t.find("div.ui-timepicker-div").length && e.showTimepicker) {
          var d = " ui_tpicker_unit_hide",
            p = '<div class="ui-timepicker-div' + (e.isRTL ? " ui-timepicker-rtl" : "") + (e.oneLine && "select" === e.controlType ? " ui-timepicker-oneLine" : "") + '"><dl><dt class="ui_tpicker_time_label' + (e.showTime ? "" : d) + '">' + e.timeText + '</dt><dd class="ui_tpicker_time ' + (e.showTime ? "" : d) + '"><input class="ui_tpicker_time_input" ' + (e.timeInput ? "" : "disabled") + "/></dd>";
          for (c = 0, u = this.units.length; c < u; c++) {
            if (i = null !== e["show" + (n = (o = this.units[c]).substr(0, 1).toUpperCase() + o.substr(1))] ? e["show" + n] : this.support[o], s[o] = parseInt(e[o + "Max"] - (e[o + "Max"] - e[o + "Min"]) % e["step" + n], 10), a[o] = 0, p += '<dt class="ui_tpicker_' + o + "_label" + (i ? "" : d) + '">' + e[o + "Text"] + '</dt><dd class="ui_tpicker_' + o + (i ? "" : d) + '"><div class="ui_tpicker_' + o + "_slider" + (i ? "" : d) + '"></div>', i && 0 < e[o + "Grid"]) {
              if (p += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>', "hour" === o) for (var h = e[o + "Min"]; h <= s[o]; h += parseInt(e[o + "Grid"], 10)) {
                a[o]++;
                var f = $.datepicker.formatTime(this.support.ampm ? "hht" : "HH", {hour: h}, e);
                p += '<td data-for="' + o + '">' + f + "</td>"
              } else for (var m = e[o + "Min"]; m <= s[o]; m += parseInt(e[o + "Grid"], 10)) a[o]++, p += '<td data-for="' + o + '">' + (m < 10 ? "0" : "") + m + "</td>";
              p += "</tr></table></div>"
            }
            p += "</dd>"
          }
          var g = null !== e.showTimezone ? e.showTimezone : this.support.timezone;
          p += '<dt class="ui_tpicker_timezone_label' + (g ? "" : d) + '">' + e.timezoneText + "</dt>", p += '<dd class="ui_tpicker_timezone' + (g ? "" : d) + '"></dd>';
          var y = $(p += "</dl></div>");
          for (!0 === e.timeOnly && (y.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">' + e.timeOnlyTitle + "</div></div>"), t.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()), c = 0, u = r.units.length; c < u; c++) i = null !== e["show" + (n = (o = r.units[c]).substr(0, 1).toUpperCase() + o.substr(1))] ? e["show" + n] : this.support[o], r[o + "_slider"] = r.control.create(r, y.find(".ui_tpicker_" + o + "_slider"), o, r[o], e[o + "Min"], s[o], e["step" + n]), i && 0 < e[o + "Grid"] && (l = 100 * a[o] * e[o + "Grid"] / (s[o] - e[o + "Min"]), y.find(".ui_tpicker_" + o + " table").css({
            width: l + "%",
            marginLeft: e.isRTL ? "0" : l / (-2 * a[o]) + "%",
            marginRight: e.isRTL ? l / (-2 * a[o]) + "%" : "0",
            borderCollapse: "collapse"
          }).find("td").click(function () {
            var t = $(this), e = t.html(), n = parseInt(e.replace(/[^0-9]/g), 10), i = e.replace(/[^apm]/gi),
              s = t.data("for");
            "hour" === s && (-1 !== i.indexOf("p") && n < 12 ? n += 12 : -1 !== i.indexOf("a") && 12 === n && (n = 0)), r.control.value(r, r[s + "_slider"], o, n), r._onTimeChange(), r._onSelectHandler()
          }).css({cursor: "pointer", width: 100 / a[o] + "%", textAlign: "center", overflow: "hidden"}));
          if (this.timezone_select = y.find(".ui_tpicker_timezone").append("<select></select>").find("select"), $.fn.append.apply(this.timezone_select, $.map(e.timezoneList, function (t) {
            return $("<option />").val("object" == typeof t ? t.value : t).text("object" == typeof t ? t.label : t)
          })), "undefined" != typeof this.timezone && null !== this.timezone && "" !== this.timezone) -1 * new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12).getTimezoneOffset() === this.timezone ? selectLocalTimezone(r) : this.timezone_select.val(this.timezone); else "undefined" != typeof this.hour && null !== this.hour && "" !== this.hour ? this.timezone_select.val(e.timezone) : selectLocalTimezone(r);
          this.timezone_select.change(function () {
            r._onTimeChange(), r._onSelectHandler(), r._afterInject()
          });
          var v = t.find(".ui-datepicker-buttonpane");
          if (v.length ? v.before(y) : t.append(y), this.$timeObj = y.find(".ui_tpicker_time_input"), this.$timeObj.change(function () {
            var t = r.inst.settings.timeFormat, e = $.datepicker.parseTime(t, this.value), n = new Date;
            e ? (n.setHours(e.hour), n.setMinutes(e.minute), n.setSeconds(e.second), $.datepicker._setTime(r.inst, n)) : (this.value = r.formattedTime, this.blur())
          }), null !== this.inst) {
            var b = this.timeDefined;
            this._onTimeChange(), this.timeDefined = b
          }
          if (this._defaults.addSliderAccess) {
            var _ = this._defaults.sliderAccessArgs, w = this._defaults.isRTL;
            _.isRTL = w, setTimeout(function () {
              if (0 === y.find(".ui-slider-access").length) {
                y.find(".ui-slider:visible").sliderAccess(_);
                var o = y.find(".ui-slider-access:eq(0)").outerWidth(!0);
                o && y.find("table:visible").each(function () {
                  var t = $(this), e = t.outerWidth(),
                    n = t.css(w ? "marginRight" : "marginLeft").toString().replace("%", ""), i = e - o,
                    s = n * i / e + "%", r = {width: i, marginRight: 0, marginLeft: 0};
                  r[w ? "marginRight" : "marginLeft"] = s, t.css(r)
                })
              }
            }, 10)
          }
          r._limitMinMaxDateTime(this.inst, !0)
        }
      },
      _limitMinMaxDateTime: function (t, e) {
        var n = this._defaults, i = new Date(t.selectedYear, t.selectedMonth, t.selectedDay);
        if (this._defaults.showTimepicker) {
          if (null !== $.datepicker._get(t, "minDateTime") && $.datepicker._get(t, "minDateTime") !== undefined && i) {
            var s = $.datepicker._get(t, "minDateTime"),
              r = new Date(s.getFullYear(), s.getMonth(), s.getDate(), 0, 0, 0, 0);
            null !== this.hourMinOriginal && null !== this.minuteMinOriginal && null !== this.secondMinOriginal && null !== this.millisecMinOriginal && null !== this.microsecMinOriginal || (this.hourMinOriginal = n.hourMin, this.minuteMinOriginal = n.minuteMin, this.secondMinOriginal = n.secondMin, this.millisecMinOriginal = n.millisecMin, this.microsecMinOriginal = n.microsecMin), t.settings.timeOnly || r.getTime() === i.getTime() ? (this._defaults.hourMin = s.getHours(), this.hour <= this._defaults.hourMin ? (this.hour = this._defaults.hourMin, this._defaults.minuteMin = s.getMinutes(), this.minute <= this._defaults.minuteMin ? (this.minute = this._defaults.minuteMin, this._defaults.secondMin = s.getSeconds(), this.second <= this._defaults.secondMin ? (this.second = this._defaults.secondMin, this._defaults.millisecMin = s.getMilliseconds(), this.millisec <= this._defaults.millisecMin ? (this.millisec = this._defaults.millisecMin, this._defaults.microsecMin = s.getMicroseconds()) : (this.microsec < this._defaults.microsecMin && (this.microsec = this._defaults.microsecMin), this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.hourMin = this.hourMinOriginal, this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)
          }
          if (null !== $.datepicker._get(t, "maxDateTime") && $.datepicker._get(t, "maxDateTime") !== undefined && i) {
            var o = $.datepicker._get(t, "maxDateTime"),
              a = new Date(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0, 0);
            null !== this.hourMaxOriginal && null !== this.minuteMaxOriginal && null !== this.secondMaxOriginal && null !== this.millisecMaxOriginal || (this.hourMaxOriginal = n.hourMax, this.minuteMaxOriginal = n.minuteMax, this.secondMaxOriginal = n.secondMax, this.millisecMaxOriginal = n.millisecMax, this.microsecMaxOriginal = n.microsecMax), t.settings.timeOnly || a.getTime() === i.getTime() ? (this._defaults.hourMax = o.getHours(), this.hour >= this._defaults.hourMax ? (this.hour = this._defaults.hourMax, this._defaults.minuteMax = o.getMinutes(), this.minute >= this._defaults.minuteMax ? (this.minute = this._defaults.minuteMax, this._defaults.secondMax = o.getSeconds(), this.second >= this._defaults.secondMax ? (this.second = this._defaults.secondMax, this._defaults.millisecMax = o.getMilliseconds(), this.millisec >= this._defaults.millisecMax ? (this.millisec = this._defaults.millisecMax, this._defaults.microsecMax = o.getMicroseconds()) : (this.microsec > this._defaults.microsecMax && (this.microsec = this._defaults.microsecMax), this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.hourMax = this.hourMaxOriginal, this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)
          }
          if (null !== t.settings.minTime) {
            var l = new Date("01/01/1970 " + t.settings.minTime);
            this.hour < l.getHours() ? (this.hour = this._defaults.hourMin = l.getHours(), this.minute = this._defaults.minuteMin = l.getMinutes()) : this.hour === l.getHours() && this.minute < l.getMinutes() ? this.minute = this._defaults.minuteMin = l.getMinutes() : this._defaults.hourMin < l.getHours() ? (this._defaults.hourMin = l.getHours(), this._defaults.minuteMin = l.getMinutes()) : this._defaults.hourMin === l.getHours() === this.hour && this._defaults.minuteMin < l.getMinutes() ? this._defaults.minuteMin = l.getMinutes() : this._defaults.minuteMin = 0
          }
          if (null !== t.settings.maxTime) {
            var c = new Date("01/01/1970 " + t.settings.maxTime);
            this.hour > c.getHours() ? (this.hour = this._defaults.hourMax = c.getHours(), this.minute = this._defaults.minuteMax = c.getMinutes()) : this.hour === c.getHours() && this.minute > c.getMinutes() ? this.minute = this._defaults.minuteMax = c.getMinutes() : this._defaults.hourMax > c.getHours() ? (this._defaults.hourMax = c.getHours(), this._defaults.minuteMax = c.getMinutes()) : this._defaults.hourMax === c.getHours() === this.hour && this._defaults.minuteMax > c.getMinutes() ? this._defaults.minuteMax = c.getMinutes() : this._defaults.minuteMax = 59
          }
          if (e !== undefined && !0 === e) {
            var u = parseInt(this._defaults.hourMax - (this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour, 10),
              d = parseInt(this._defaults.minuteMax - (this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute, 10),
              p = parseInt(this._defaults.secondMax - (this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond, 10),
              h = parseInt(this._defaults.millisecMax - (this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec, 10),
              f = parseInt(this._defaults.microsecMax - (this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec, 10);
            this.hour_slider && (this.control.options(this, this.hour_slider, "hour", {
              min: this._defaults.hourMin,
              max: u,
              step: this._defaults.stepHour
            }), this.control.value(this, this.hour_slider, "hour", this.hour - this.hour % this._defaults.stepHour)), this.minute_slider && (this.control.options(this, this.minute_slider, "minute", {
              min: this._defaults.minuteMin,
              max: d,
              step: this._defaults.stepMinute
            }), this.control.value(this, this.minute_slider, "minute", this.minute - this.minute % this._defaults.stepMinute)), this.second_slider && (this.control.options(this, this.second_slider, "second", {
              min: this._defaults.secondMin,
              max: p,
              step: this._defaults.stepSecond
            }), this.control.value(this, this.second_slider, "second", this.second - this.second % this._defaults.stepSecond)), this.millisec_slider && (this.control.options(this, this.millisec_slider, "millisec", {
              min: this._defaults.millisecMin,
              max: h,
              step: this._defaults.stepMillisec
            }), this.control.value(this, this.millisec_slider, "millisec", this.millisec - this.millisec % this._defaults.stepMillisec)), this.microsec_slider && (this.control.options(this, this.microsec_slider, "microsec", {
              min: this._defaults.microsecMin,
              max: f,
              step: this._defaults.stepMicrosec
            }), this.control.value(this, this.microsec_slider, "microsec", this.microsec - this.microsec % this._defaults.stepMicrosec))
          }
        }
      },
      _onTimeChange: function () {
        if (this._defaults.showTimepicker) {
          var t = !!this.hour_slider && this.control.value(this, this.hour_slider, "hour"),
            e = !!this.minute_slider && this.control.value(this, this.minute_slider, "minute"),
            n = !!this.second_slider && this.control.value(this, this.second_slider, "second"),
            i = !!this.millisec_slider && this.control.value(this, this.millisec_slider, "millisec"),
            s = !!this.microsec_slider && this.control.value(this, this.microsec_slider, "microsec"),
            r = !!this.timezone_select && this.timezone_select.val(), o = this._defaults,
            a = o.pickerTimeFormat || o.timeFormat, l = o.pickerTimeSuffix || o.timeSuffix;
          "object" == typeof t && (t = !1), "object" == typeof e && (e = !1), "object" == typeof n && (n = !1), "object" == typeof i && (i = !1), "object" == typeof s && (s = !1), "object" == typeof r && (r = !1), !1 !== t && (t = parseInt(t, 10)), !1 !== e && (e = parseInt(e, 10)), !1 !== n && (n = parseInt(n, 10)), !1 !== i && (i = parseInt(i, 10)), !1 !== s && (s = parseInt(s, 10)), !1 !== r && (r = r.toString());
          var c = o[t < 12 ? "amNames" : "pmNames"][0],
            u = t !== parseInt(this.hour, 10) || e !== parseInt(this.minute, 10) || n !== parseInt(this.second, 10) || i !== parseInt(this.millisec, 10) || s !== parseInt(this.microsec, 10) || 0 < this.ampm.length && t < 12 != (-1 !== $.inArray(this.ampm.toUpperCase(), this.amNames)) || null !== this.timezone && r !== this.timezone.toString();
          if (u && (!1 !== t && (this.hour = t), !1 !== e && (this.minute = e), !1 !== n && (this.second = n), !1 !== i && (this.millisec = i), !1 !== s && (this.microsec = s), !1 !== r && (this.timezone = r), this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), this._limitMinMaxDateTime(this.inst, !0)), this.support.ampm && (this.ampm = c), this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o), this.$timeObj && (a === o.timeFormat ? this.$timeObj.val(this.formattedTime + l) : this.$timeObj.val($.datepicker.formatTime(a, this, o) + l), this.$timeObj[0].setSelectionRange)) {
            var d = this.$timeObj[0].selectionStart, p = this.$timeObj[0].selectionEnd;
            this.$timeObj[0].setSelectionRange(d, p)
          }
          this.timeDefined = !0, u && this._updateDateTime()
        }
      },
      _onSelectHandler: function () {
        var t = this._defaults.onSelect || this.inst.settings.onSelect, e = this.$input ? this.$input[0] : null;
        t && e && t.apply(e, [this.formattedDateTime, this])
      },
      _updateDateTime: function (t) {
        var e = 0 < (t = this.inst || t).currentYear ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(t.selectedYear, t.selectedMonth, t.selectedDay),
          n = $.datepicker._daylightSavingAdjust(e), i = $.datepicker._get(t, "dateFormat"),
          s = $.datepicker._getFormatConfig(t), r = null !== n && this.timeDefined;
        this.formattedDate = $.datepicker.formatDate(i, null === n ? new Date : n, s);
        var o = this.formattedDate;
        if ("" === t.lastVal && (t.currentYear = t.selectedYear, t.currentMonth = t.selectedMonth, t.currentDay = t.selectedDay), !0 === this._defaults.timeOnly && !1 === this._defaults.timeOnlyShowDate ? o = this.formattedTime : (!0 !== this._defaults.timeOnly && (this._defaults.alwaysSetTime || r) || !0 === this._defaults.timeOnly && !0 === this._defaults.timeOnlyShowDate) && (o += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix), this.formattedDateTime = o, this._defaults.showTimepicker) if (this.$altInput && !1 === this._defaults.timeOnly && !0 === this._defaults.altFieldTimeOnly) this.$altInput.val(this.formattedTime), this.$input.val(this.formattedDate); else if (this.$altInput) {
          this.$input.val(o);
          var a = "", l = null !== this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
            c = null !== this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
          this._defaults.timeOnly || (a = this._defaults.altFormat ? $.datepicker.formatDate(this._defaults.altFormat, null === n ? new Date : n, s) : this.formattedDate) && (a += l), null !== this._defaults.altTimeFormat ? a += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + c : a += this.formattedTime + c, this.$altInput.val(a)
        } else this.$input.val(o); else this.$input.val(this.formattedDate);
        this.$input.trigger("change")
      },
      _onFocus: function () {
        if (!this.$input.val() && this._defaults.defaultValue) {
          this.$input.val(this._defaults.defaultValue);
          var t = $.datepicker._getInst(this.$input.get(0)), e = $.datepicker._get(t, "timepicker");
          if (e && e._defaults.timeOnly && t.input.val() !== t.lastVal) try {
            $.datepicker._updateDatepicker(t)
          } catch (n) {
            $.timepicker.log(n)
          }
        }
      },
      _controls: {
        slider: {
          create: function (n, t, i, e, s, r, o) {
            var a = n._defaults.isRTL;
            return t.prop("slide", null).slider({
              orientation: "horizontal",
              value: a ? -1 * e : e,
              min: a ? -1 * r : s,
              max: a ? -1 * s : r,
              step: o,
              slide: function (t, e) {
                n.control.value(n, $(this), i, a ? -1 * e.value : e.value), n._onTimeChange()
              },
              stop: function () {
                n._onSelectHandler()
              }
            })
          }, options: function (t, e, n, i, s) {
            if (t._defaults.isRTL) {
              if ("string" == typeof i) return "min" === i || "max" === i ? s !== undefined ? e.slider(i, -1 * s) : Math.abs(e.slider(i)) : e.slider(i);
              var r = i.min, o = i.max;
              return i.min = i.max = null, r !== undefined && (i.max = -1 * r), o !== undefined && (i.min = -1 * o), e.slider(i)
            }
            return "string" == typeof i && s !== undefined ? e.slider(i, s) : e.slider(i)
          }, value: function (t, e, n, i) {
            return t._defaults.isRTL ? i !== undefined ? e.slider("value", -1 * i) : Math.abs(e.slider("value")) : i !== undefined ? e.slider("value", i) : e.slider("value")
          }
        }, select: {
          create: function (t, e, n, i, s, r, o) {
            for (var a = '<select class="ui-timepicker-select ui-state-default ui-corner-all" data-unit="' + n + '" data-min="' + s + '" data-max="' + r + '" data-step="' + o + '">', l = t._defaults.pickerTimeFormat || t._defaults.timeFormat, c = s; c <= r; c += o) a += '<option value="' + c + '"' + (c === i ? " selected" : "") + ">", a += "hour" === n ? $.datepicker.formatTime($.trim(l.replace(/[^ht ]/gi, "")), {hour: c}, t._defaults) : "millisec" === n || "microsec" === n || 10 <= c ? c : "0" + c.toString(), a += "</option>";
            return a += "</select>", e.children("select").remove(), $(a).appendTo(e).change(function () {
              t._onTimeChange(), t._onSelectHandler(), t._afterInject()
            }), e
          }, options: function (t, e, n, i, s) {
            var r = {}, o = e.children("select");
            if ("string" == typeof i) {
              if (s === undefined) return o.data(i);
              r[i] = s
            } else r = i;
            return t.control.create(t, e, o.data("unit"), o.val(), 0 <= r.min ? r.min : o.data("min"), r.max || o.data("max"), r.step || o.data("step"))
          }, value: function (t, e, n, i) {
            var s = e.children("select");
            return i !== undefined ? s.val(i) : s.val()
          }
        }
      }
    }), $.fn.extend({
      timepicker: function (t) {
        t = t || {};
        var e = Array.prototype.slice.call(arguments);
        return "object" == typeof t && (e[0] = $.extend(t, {timeOnly: !0})), $(this).each(function () {
          $.fn.datetimepicker.apply($(this), e)
        })
      }, datetimepicker: function (e) {
        var n = arguments;
        return "string" == typeof (e = e || {}) ? "getDate" === e || "option" === e && 2 === n.length && "string" == typeof n[1] ? $.fn.datepicker.apply($(this[0]), n) : this.each(function () {
          var t = $(this);
          t.datepicker.apply(t, n)
        }) : this.each(function () {
          var t = $(this);
          t.datepicker($.timepicker._newInst(t, e)._defaults)
        })
      }
    }), $.datepicker.parseDateTime = function (t, e, n, i, s) {
      var r = parseDateTimeInternal(t, e, n, i, s);
      if (r.timeObj) {
        var o = r.timeObj;
        r.date.setHours(o.hour, o.minute, o.second, o.millisec), r.date.setMicroseconds(o.microsec)
      }
      return r.date
    }, $.datepicker.parseTime = function (t, e, n) {
      var i = extendRemove(extendRemove({}, $.timepicker._defaults), n || {}),
        o = (t.replace(/\'.*?\'/g, "").indexOf("Z"), function (t, e, n) {
          var i, s = function (t, e) {
              var n = [];
              return t && $.merge(n, t), e && $.merge(n, e), "(" + (n = $.map(n, function (t) {
                return t.replace(/[.*+?|()\[\]{}\\]/g, "\\$&")
              })).join("|") + ")?"
            }, r = function (t) {
              var e = t.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),
                n = {h: -1, m: -1, s: -1, l: -1, c: -1, t: -1, z: -1};
              if (e) for (var i = 0; i < e.length; i++) -1 === n[e[i].toString().charAt(0)] && (n[e[i].toString().charAt(0)] = i + 1);
              return n
            }, o = "^" + t.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (t) {
              var e = t.length;
              switch (t.charAt(0).toLowerCase()) {
                case"h":
                case"m":
                case"s":
                  return 1 === e ? "(\\d?\\d)" : "(\\d{" + e + "})";
                case"l":
                case"c":
                  return "(\\d?\\d?\\d)";
                case"z":
                  return "(z|[-+]\\d\\d:?\\d\\d|\\S+)?";
                case"t":
                  return s(n.amNames, n.pmNames);
                default:
                  return "(" + t.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (t) {
                    return "\\" + t
                  }) + ")?"
              }
            }).replace(/\s/g, "\\s?") + n.timeSuffix + "$", a = r(t), l = "",
            c = {hour: 0, minute: 0, second: 0, millisec: 0, microsec: 0};
          return !!(i = e.match(new RegExp(o, "i"))) && (-1 !== a.t && (i[a.t] === undefined || 0 === i[a.t].length ? (l = "", c.ampm = "") : (l = -1 !== $.inArray(i[a.t].toUpperCase(), $.map(n.amNames, function (t) {
            return t.toUpperCase()
          })) ? "AM" : "PM", c.ampm = n["AM" === l ? "amNames" : "pmNames"][0])), -1 !== a.h && ("AM" === l && "12" === i[a.h] ? c.hour = 0 : "PM" === l && "12" !== i[a.h] ? c.hour = parseInt(i[a.h], 10) + 12 : c.hour = Number(i[a.h])), -1 !== a.m && (c.minute = Number(i[a.m])), -1 !== a.s && (c.second = Number(i[a.s])), -1 !== a.l && (c.millisec = Number(i[a.l])), -1 !== a.c && (c.microsec = Number(i[a.c])), -1 !== a.z && i[a.z] !== undefined && (c.timezone = $.timepicker.timezoneOffsetNumber(i[a.z])), c)
        }), s = function (t, e, n) {
          try {
            var i = new Date("2012-01-01 " + e);
            if (isNaN(i.getTime()) && (i = new Date("2012-01-01T" + e), isNaN(i.getTime()) && (i = new Date("01/01/2012 " + e), isNaN(i.getTime())))) throw"Unable to parse time with native Date: " + e;
            return {
              hour: i.getHours(),
              minute: i.getMinutes(),
              second: i.getSeconds(),
              millisec: i.getMilliseconds(),
              microsec: i.getMicroseconds(),
              timezone: -1 * i.getTimezoneOffset()
            }
          } catch (s) {
            try {
              return o(t, e, n)
            } catch (r) {
              $.timepicker.log("Unable to parse \ntimeString: " + e + "\ntimeFormat: " + t)
            }
          }
          return !1
        };
      return "function" == typeof i.parse ? i.parse(t, e, i) : "loose" === i.parse ? s(t, e, i) : o(t, e, i)
    }, $.datepicker.formatTime = function (t, e, n) {
      n = n || {}, n = $.extend({}, $.timepicker._defaults, n), e = $.extend({
        hour: 0,
        minute: 0,
        second: 0,
        millisec: 0,
        microsec: 0,
        timezone: null
      }, e);
      var i = t, s = n.amNames[0], r = parseInt(e.hour, 10);
      return 11 < r && (s = n.pmNames[0]), i = i.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (t) {
        switch (t) {
          case"HH":
            return ("0" + r).slice(-2);
          case"H":
            return r;
          case"hh":
            return ("0" + convert24to12(r)).slice(-2);
          case"h":
            return convert24to12(r);
          case"mm":
            return ("0" + e.minute).slice(-2);
          case"m":
            return e.minute;
          case"ss":
            return ("0" + e.second).slice(-2);
          case"s":
            return e.second;
          case"l":
            return ("00" + e.millisec).slice(-3);
          case"c":
            return ("00" + e.microsec).slice(-3);
          case"z":
            return $.timepicker.timezoneOffsetString(null === e.timezone ? n.timezone : e.timezone, !1);
          case"Z":
            return $.timepicker.timezoneOffsetString(null === e.timezone ? n.timezone : e.timezone, !0);
          case"T":
            return s.charAt(0).toUpperCase();
          case"TT":
            return s.toUpperCase();
          case"t":
            return s.charAt(0).toLowerCase();
          case"tt":
            return s.toLowerCase();
          default:
            return t.replace(/'/g, "")
        }
      })
    }, $.datepicker._base_selectDate = $.datepicker._selectDate, $.datepicker._selectDate = function (t, e) {
      var n, i = this._getInst($(t)[0]), s = this._get(i, "timepicker");
      s && i.settings.showTimepicker ? (s._limitMinMaxDateTime(i, !0), n = i.inline, i.inline = i.stay_open = !0, this._base_selectDate(t, e), i.inline = n, i.stay_open = !1, this._notifyChange(i), this._updateDatepicker(i)) : this._base_selectDate(t, e)
    }, $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker, $.datepicker._updateDatepicker = function (t) {
      var e = t.input[0];
      if (!($.datepicker._curInst && $.datepicker._curInst !== t && $.datepicker._datepickerShowing && $.datepicker._lastInput !== e || "boolean" == typeof t.stay_open && !1 !== t.stay_open)) {
        this._base_updateDatepicker(t);
        var n = this._get(t, "timepicker");
        n && n._addTimePicker(t)
      }
    }, $.datepicker._base_doKeyPress = $.datepicker._doKeyPress, $.datepicker._doKeyPress = function (t) {
      var e = $.datepicker._getInst(t.target), n = $.datepicker._get(e, "timepicker");
      if (n && $.datepicker._get(e, "constrainInput")) {
        var i = n.support.ampm, s = null !== n._defaults.showTimezone ? n._defaults.showTimezone : n.support.timezone,
          r = $.datepicker._possibleChars($.datepicker._get(e, "dateFormat")),
          o = n._defaults.timeFormat.toString().replace(/[hms]/g, "").replace(/TT/g, i ? "APM" : "").replace(/Tt/g, i ? "AaPpMm" : "").replace(/tT/g, i ? "AaPpMm" : "").replace(/T/g, i ? "AP" : "").replace(/tt/g, i ? "apm" : "").replace(/t/g, i ? "ap" : "") + " " + n._defaults.separator + n._defaults.timeSuffix + (s ? n._defaults.timezoneList.join("") : "") + n._defaults.amNames.join("") + n._defaults.pmNames.join("") + r,
          a = String.fromCharCode(t.charCode === undefined ? t.keyCode : t.charCode);
        return t.ctrlKey || a < " " || !r || -1 < o.indexOf(a)
      }
      return $.datepicker._base_doKeyPress(t)
    }, $.datepicker._base_updateAlternate = $.datepicker._updateAlternate, $.datepicker._updateAlternate = function (t) {
      var e = this._get(t, "timepicker");
      if (e) {
        var n = e._defaults.altField;
        if (n) {
          e._defaults.altFormat || e._defaults.dateFormat;
          var i = this._getDate(t), s = $.datepicker._getFormatConfig(t), r = "",
            o = e._defaults.altSeparator ? e._defaults.altSeparator : e._defaults.separator,
            a = e._defaults.altTimeSuffix ? e._defaults.altTimeSuffix : e._defaults.timeSuffix,
            l = null !== e._defaults.altTimeFormat ? e._defaults.altTimeFormat : e._defaults.timeFormat;
          r += $.datepicker.formatTime(l, e, e._defaults) + a, e._defaults.timeOnly || e._defaults.altFieldTimeOnly || null === i || (r = e._defaults.altFormat ? $.datepicker.formatDate(e._defaults.altFormat, i, s) + o + r : e.formattedDate + o + r), $(n).val(t.input.val() ? r : "")
        }
      } else $.datepicker._base_updateAlternate(t)
    }, $.datepicker._base_doKeyUp = $.datepicker._doKeyUp, $.datepicker._doKeyUp = function (t) {
      var e = $.datepicker._getInst(t.target), n = $.datepicker._get(e, "timepicker");
      if (n && n._defaults.timeOnly && e.input.val() !== e.lastVal) try {
        $.datepicker._updateDatepicker(e)
      } catch (i) {
        $.timepicker.log(i)
      }
      return $.datepicker._base_doKeyUp(t)
    }, $.datepicker._base_gotoToday = $.datepicker._gotoToday, $.datepicker._gotoToday = function (t) {
      var e = this._getInst($(t)[0]);
      this._base_gotoToday(t);
      var n = this._get(e, "timepicker");
      if (n) {
        var i = $.timepicker.timezoneOffsetNumber(n.timezone), s = new Date;
        s.setMinutes(s.getMinutes() + s.getTimezoneOffset() + parseInt(i, 10)), this._setTime(e, s), this._setDate(e, s), n._onSelectHandler()
      }
    }, $.datepicker._disableTimepickerDatepicker = function (t) {
      var e = this._getInst(t);
      if (e) {
        var n = this._get(e, "timepicker");
        $(t).datepicker("getDate"), n && (e.settings.showTimepicker = !1, n._defaults.showTimepicker = !1, n._updateDateTime(e))
      }
    }, $.datepicker._enableTimepickerDatepicker = function (t) {
      var e = this._getInst(t);
      if (e) {
        var n = this._get(e, "timepicker");
        $(t).datepicker("getDate"), n && (e.settings.showTimepicker = !0, n._defaults.showTimepicker = !0, n._addTimePicker(e), n._updateDateTime(e))
      }
    }, $.datepicker._setTime = function (t, e) {
      var n = this._get(t, "timepicker");
      if (n) {
        var i = n._defaults;
        n.hour = e ? e.getHours() : i.hour, n.minute = e ? e.getMinutes() : i.minute, n.second = e ? e.getSeconds() : i.second, n.millisec = e ? e.getMilliseconds() : i.millisec, n.microsec = e ? e.getMicroseconds() : i.microsec, n._limitMinMaxDateTime(t, !0), n._onTimeChange(), n._updateDateTime(t)
      }
    }, $.datepicker._setTimeDatepicker = function (t, e, n) {
      var i = this._getInst(t);
      if (i) {
        var s, r = this._get(i, "timepicker");
        if (r) this._setDateFromField(i), e && ("string" == typeof e ? (r._parseTime(e, n), (s = new Date).setHours(r.hour, r.minute, r.second, r.millisec), s.setMicroseconds(r.microsec)) : (s = new Date(e.getTime())).setMicroseconds(e.getMicroseconds()), "Invalid Date" === s.toString() && (s = undefined), this._setTime(i, s))
      }
    }, $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker, $.datepicker._setDateDatepicker = function (t, e) {
      var n = this._getInst(t), i = e;
      if (n) {
        "string" == typeof e && ((i = new Date(e)).getTime() || (this._base_setDateDatepicker.apply(this, arguments), i = $(t).datepicker("getDate")));
        var s, r = this._get(n, "timepicker");
        i instanceof Date ? (s = new Date(i.getTime())).setMicroseconds(i.getMicroseconds()) : s = i, r && s && (r.support.timezone || null !== r._defaults.timezone || (r.timezone = -1 * s.getTimezoneOffset()), i = $.timepicker.timezoneAdjust(i, $.timepicker.timezoneOffsetString(-i.getTimezoneOffset()), r.timezone), s = $.timepicker.timezoneAdjust(s, $.timepicker.timezoneOffsetString(-s.getTimezoneOffset()), r.timezone)), this._updateDatepicker(n), this._base_setDateDatepicker.apply(this, arguments), this._setTimeDatepicker(t, s, !0)
      }
    }, $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker, $.datepicker._getDateDatepicker = function (t, e) {
      var n = this._getInst(t);
      if (n) {
        var i = this._get(n, "timepicker");
        if (i) {
          n.lastVal === undefined && this._setDateFromField(n, e);
          var s = this._getDate(n), r = null;
          return r = i.$altInput && i._defaults.altFieldTimeOnly ? i.$input.val() + " " + i.$altInput.val() : "INPUT" !== i.$input.get(0).tagName && i.$altInput ? i.$altInput.val() : i.$input.val(), s && i._parseTime(r, !n.settings.timeOnly) && (s.setHours(i.hour, i.minute, i.second, i.millisec), s.setMicroseconds(i.microsec), null != i.timezone && (i.support.timezone || null !== i._defaults.timezone || (i.timezone = -1 * s.getTimezoneOffset()), s = $.timepicker.timezoneAdjust(s, i.timezone, $.timepicker.timezoneOffsetString(-s.getTimezoneOffset())))), s
        }
        return this._base_getDateDatepicker(t, e)
      }
    }, $.datepicker._base_parseDate = $.datepicker.parseDate, $.datepicker.parseDate = function (t, e, n) {
      var i;
      try {
        i = this._base_parseDate(t, e, n)
      } catch (s) {
        if (!(0 <= s.indexOf(":"))) throw s;
        i = this._base_parseDate(t, e.substring(0, e.length - (s.length - s.indexOf(":") - 2)), n), $.timepicker.log("Error parsing the date string: " + s + "\ndate string = " + e + "\ndate format = " + t)
      }
      return i
    }, $.datepicker._base_formatDate = $.datepicker._formatDate, $.datepicker._formatDate = function (t) {
      var e = this._get(t, "timepicker");
      return e ? (e._updateDateTime(t), e.$input.val()) : this._base_formatDate(t)
    }, $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker, $.datepicker._optionDatepicker = function (t, e, n) {
      var i, s = this._getInst(t);
      if (!s) return null;
      var r = this._get(s, "timepicker");
      if (r) {
        var o, a, l, c, u = null, d = null, p = null, h = r._defaults.evnts, f = {};
        if ("string" == typeof e) {
          if ("minDate" === e || "minDateTime" === e) u = n; else if ("maxDate" === e || "maxDateTime" === e) d = n; else if ("onSelect" === e) p = n; else if (h.hasOwnProperty(e)) {
            if (void 0 === n) return h[e];
            f[e] = n, i = {}
          }
        } else if ("object" == typeof e) for (o in e.minDate ? u = e.minDate : e.minDateTime ? u = e.minDateTime : e.maxDate ? d = e.maxDate : e.maxDateTime && (d = e.maxDateTime), h) h.hasOwnProperty(o) && e[o] && (f[o] = e[o]);
        for (o in f) f.hasOwnProperty(o) && (h[o] = f[o], i || (i = $.extend({}, e)), delete i[o]);
        if (i && isEmptyObject(i)) return;
        if (u ? (u = 0 === u ? new Date : new Date(u), r._defaults.minDate = u, r._defaults.minDateTime = u) : d ? (d = 0 === d ? new Date : new Date(d), r._defaults.maxDate = d, r._defaults.maxDateTime = d) : p && (r._defaults.onSelect = p), u || d) return l = (c = $(t)).datetimepicker("getDate"), a = this._base_optionDatepicker.call($.datepicker, t, i || e, n), c.datetimepicker("setDate", l), a
      }
      return n === undefined ? this._base_optionDatepicker.call($.datepicker, t, e) : this._base_optionDatepicker.call($.datepicker, t, i || e, n)
    };
    var isEmptyObject = function (t) {
      var e;
      for (e in t) if (t.hasOwnProperty(e)) return !1;
      return !0
    }, extendRemove = function (t, e) {
      for (var n in $.extend(t, e), e) null !== e[n] && e[n] !== undefined || (t[n] = e[n]);
      return t
    }, detectSupport = function (t) {
      var e = t.replace(/'.*?'/g, "").toLowerCase(), n = function (t, e) {
        return -1 !== t.indexOf(e)
      };
      return {
        hour: n(e, "h"),
        minute: n(e, "m"),
        second: n(e, "s"),
        millisec: n(e, "l"),
        microsec: n(e, "c"),
        timezone: n(e, "z"),
        ampm: n(e, "t") && n(t, "h"),
        iso8601: n(t, "Z")
      }
    }, convert24to12 = function (t) {
      return 0 === (t %= 12) && (t = 12), String(t)
    }, computeEffectiveSetting = function (t, e) {
      return t && t[e] ? t[e] : $.timepicker._defaults[e]
    }, splitDateTime = function (t, e) {
      var n = computeEffectiveSetting(e, "separator"), i = computeEffectiveSetting(e, "timeFormat").split(n).length,
        s = t.split(n), r = s.length;
      return 1 < r ? {dateString: s.splice(0, r - i).join(n), timeString: s.splice(0, i).join(n)} : {
        dateString: t,
        timeString: ""
      }
    }, parseDateTimeInternal = function (t, e, n, i, s) {
      var r, o, a;
      if (o = splitDateTime(n, s), r = $.datepicker._base_parseDate(t, o.dateString, i), "" === o.timeString) return {date: r};
      if (!(a = $.datepicker.parseTime(e, o.timeString, s))) throw"Wrong time format";
      return {date: r, timeObj: a}
    }, selectLocalTimezone = function (t, e) {
      if (t && t.timezone_select) {
        var n = e || new Date;
        t.timezone_select.val(-n.getTimezoneOffset())
      }
    };
    $.timepicker = new Timepicker, $.timepicker.timezoneOffsetString = function (t, e) {
      if (isNaN(t) || 840 < t || t < -720
      ) return t;
      var n = t % 60, i = (t - n) / 60, s = e ? ":" : "",
        r = (0 <= t ? "+" : "-") + ("0" + Math.abs(i)).slice(-2) + s + ("0" + Math.abs(n)).slice(-2);
      return "+00:00" === r ? "Z" : r
    }, $.timepicker.timezoneOffsetNumber = function (t) {
      var e = t.toString().replace(":", "");
      return "Z" === e.toUpperCase() ? 0 : /^(\-|\+)\d{4}$/.test(e) ? ("-" === e.substr(0, 1) ? -1 : 1) * (60 * parseInt(e.substr(1, 2), 10) + parseInt(e.substr(3, 2), 10)) : parseInt(t, 10)
    }, $.timepicker.timezoneAdjust = function (t, e, n) {
      var i = $.timepicker.timezoneOffsetNumber(e), s = $.timepicker.timezoneOffsetNumber(n);
      return isNaN(s) || t.setMinutes(t.getMinutes() + -i - -s), t
    }, $.timepicker.timeRange = function (t, e, n) {
      return $.timepicker.handleRange("timepicker", t, e, n)
    }, $.timepicker.datetimeRange = function (t, e, n) {
      $.timepicker.handleRange("datetimepicker", t, e, n)
    }, $.timepicker.dateRange = function (t, e, n) {
      $.timepicker.handleRange("datepicker", t, e, n)
    }, $.timepicker.handleRange = function (a, l, c, u) {
      function t(t, e) {
        var n = l[a]("getDate"), i = c[a]("getDate"), s = t[a]("getDate");
        if (null !== n) {
          var r = new Date(n.getTime()), o = new Date(n.getTime());
          r.setMilliseconds(r.getMilliseconds() + u.minInterval), o.setMilliseconds(o.getMilliseconds() + u.maxInterval), 0 < u.minInterval && i < r ? c[a]("setDate", r) : 0 < u.maxInterval && o < i ? c[a]("setDate", o) : i < n && e[a]("setDate", s)
        }
      }

      function e(t, e, n) {
        if (t.val()) {
          var i = t[a].call(t, "getDate");
          null !== i && 0 < u.minInterval && ("minDate" === n && i.setMilliseconds(i.getMilliseconds() + u.minInterval), "maxDate" === n && i.setMilliseconds(i.getMilliseconds() - u.minInterval)), i.getTime && e[a].call(e, "option", n, i)
        }
      }

      u = $.extend({}, {minInterval: 0, maxInterval: 0, start: {}, end: {}}, u);
      var n = !1;
      return "timepicker" === a && (n = !0, a = "datetimepicker"), $.fn[a].call(l, $.extend({
        timeOnly: n,
        onClose: function () {
          t($(this), c)
        },
        onSelect: function () {
          e($(this), c, "minDate")
        }
      }, u, u.start)), $.fn[a].call(c, $.extend({
        timeOnly: n, onClose: function () {
          t($(this), l)
        }, onSelect: function () {
          e($(this), l, "maxDate")
        }
      }, u, u.end)), t(l, c), e(l, c, "minDate"), e(c, l, "maxDate"), $([l.get(0), c.get(0)])
    }, $.timepicker.log = function () {
      window.console && window.console.log && window.console.log.apply && window.console.log.apply(window.console, Array.prototype.slice.call(arguments))
    }, $.timepicker._util = {
      _extendRemove: extendRemove,
      _isEmptyObject: isEmptyObject,
      _convert24to12: convert24to12,
      _detectSupport: detectSupport,
      _selectLocalTimezone: selectLocalTimezone,
      _computeEffectiveSetting: computeEffectiveSetting,
      _splitDateTime: splitDateTime,
      _parseDateTimeInternal: parseDateTimeInternal
    }, Date.prototype.getMicroseconds || (Date.prototype.microseconds = 0, Date.prototype.getMicroseconds = function () {
      return this.microseconds
    }, Date.prototype.setMicroseconds = function (t) {
      return this.setMilliseconds(this.getMilliseconds() + Math.floor(t / 1e3)), this.microseconds = t % 1e3, this
    }), $.timepicker.version = "1.6.3"
  }
}), function () {
  var e = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  };
  UiKit.Datetimepicker = function () {
    function t(t) {
      null == t && (t = {}), this.initDateIcon = e(this.initDateIcon, this), this.hideOnScrollResize = e(this.hideOnScrollResize, this), this.initDate = e(this.initDate, this), this.initDateTime = e(this.initDateTime, this), this.initDate($(this.datepickers)), this.initDateTime($(this.dateTimePicker), $.extend(t, {
        defaultHour: "00",
        defaultMin: "00"
      })), this.initDateTime($(this.endDayDateTimePicker), $.extend(t, {
        defaultHour: "23",
        defaultMin: "59"
      })), this.initDateIcon($(this.hasDatepicker))
    }

    return t.prototype.datepickers = ".datepicker", t.prototype.dateTimePicker = ".datetimepicker:not('.end-time')", t.prototype.endDayDateTimePicker = ".datetimepicker.end-time", t.prototype.scrolledParentEl = ".col-sm-9.step-col", t.prototype.hasDatepicker = ".hasDatepicker", t.prototype.liStart = "li-start-datetime", t.prototype.liEnd = "li-end-datetime", t.prototype.initDateTime = function (t, e) {
      var n, i, s, r, o, a, l, c, u;
      for (null == e && (e = {}), c = [], o = 0, a = t.length; o < a; o++) s = t[o], (n = $(s)).val() && (r = (u = $(s).val().split(" ")[1].split(":"))[0], l = u[1]), i = $(s).datetimepicker({
        hour: r || e.defaultHour,
        minute: l || e.defaultMin,
        minDateTime: e.minDateTime,
        maxDateTime: e.maxDateTime
      }), n.hasClass("no-now") && i.datepicker("widget").addClass("no-now"), c.push(this.hideOnScrollResize(i));
      return c
    }, t.prototype.initDate = function (t) {
      return this.hideOnScrollResize(t.datepicker())
    }, t.prototype.hideOnScrollResize = function (t) {
      return $(this.scrolledParentEl).scroll(function () {
        return t.datepicker("hide").blur()
      }), $(window).resize(function () {
        return t.datepicker("hide").blur()
      })
    }, t.prototype.initDateIcon = function (t) {
      return t.each(function (t, e) {
        if (!1 === $(e).parent().hasClass("datepicker-wrapper")) return $(e).wrap('<div class="datepicker-wrapper"></div>')
      })
    }, t
  }()
}.call(this), function () {
  var e = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  };
  UiKit.DisableDependent = function () {
    function t(t) {
      this.updateTarget = e(this.updateTarget, this), this.onChangeHandler = e(this.onChangeHandler, this), this.elementSelector = $(t), this.targetSelector = $(this.elementSelector.data("target")), this.elementSelector.change(this.onChangeHandler), this.updateTarget(), this.elementSelector.data("disableDependentObject", this)
    }

    return t.prototype.onChangeHandler = function () {
      return this.updateTarget()
    }, t.prototype.updateTarget = function () {
      var t, n;
      return (t = this.targetSelector.find("input,a,select,label")).each((n = this, function (t, e) {
        if (!$(e).data("not-allow-enable")) return $(e).prop("disabled", !n.elementSelector.prop("checked"))
      })), this.elementSelector.prop("checked") ? (t.removeClass("disabled"), this.targetSelector.find('[data-role="disable-dependent"]').each(function (t, e) {
        var n;
        if (n = $(e).data("disableDependentObject")) return n.updateTarget()
      })) : t.addClass("disabled")
    }, t
  }()
}.call(this), function () {
  UiKit.Notifier = function () {
    function t() {
    }

    return t.template = "alerts/alert", t.bipTemplate = "alerts/bip_alert", t.bipContainer = "#bip-messages", t.defaultContainer = "#messages", t.success = function (t, e, n) {
      return this.show(t, "success", e, n)
    }, t.error = function (t, e, n) {
      return this.show(t, "danger", e, n)
    }, t.info = function (t, e) {
      return this.show(t, "info", e)
    }, t.warning = function (t, e) {
      return this.show(t, "warning", e)
    }, t.closeAll = function () {
      return $(".alert-info, .alert-danger, .alert-success, .alert-warning").filter(".js-generated").fadeOut(500, function () {
        return $(this).alert("close")
      })
    }, t.show = function (t, e, n, i) {
      var s, r;
      return i ? (s = $(this.bipContainer), r = $(JST[this.bipTemplate]({
        message: t,
        type: e
      })), s.closest(".layout-bip-message").addClass("bip")) : (s = $(this.defaultContainer), r = $(JST[this.template]({
        message: t,
        type: e
      })), s), n || (n = function () {
        return this.show()
      }), r.hide().appendTo(s), n.call(r)
    }, t
  }()
}.call(this), function () {
  UiKit.PerPageToggler = function () {
    function t() {
      this.selector = this.selector || $(this.perPageTogglerClass), this.selector && this.selector.on("change", function (t) {
        return window.location = $.query.set("per_page", t.currentTarget.value).set("page", 0).toString().replace(/q%5Bs%5D%5B\d%5D/g, "q%5Bs%5D%5B%5D")
      })
    }

    return t.prototype.perPageTogglerClass = ".per-page-toggler", t
  }()
}.call(this), function () {
  var s = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  };
  UiKit.RadioButtonsToggler = function () {
    function t(t) {
      var e, n, i;
      e = t.container, n = t.targets, this.updateTargets = s(this.updateTargets, this), this.changeHandler = s(this.changeHandler, this), this.containerSelector = $(e), this.targetRadioButtons = this.containerSelector.find('input[type="radio"]'), this.targetsMapping = {}, $.each(n, (i = this, function (t, e) {
        return i.targetsMapping[t.toString()] = $(e)
      })), this.updateTargets(), this.targetRadioButtons.change(this.changeHandler)
    }

    return t.prototype.changeHandler = function () {
      return this.updateTargets(), !1
    }, t.prototype.updateTargets = function () {
      return this.targetRadioButtons.each((s = this, function (t, e) {
        var n, i;
        return i = $(e), n = $(s.targetsMapping[i.val()]), i.prop("checked") ? n.show() : n.hide()
      }));
      var s
    }, t
  }()
}.call(this), function () {
  var e = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  }, h = [].indexOf || function (t) {
    for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;
    return -1
  };
  UiKit.SelectRange = function () {
    function t(t) {
      this.toggleAll = e(this.toggleAll, this), this.handleItemClick = e(this.handleItemClick, this), this.handleToggleAllClick = e(this.handleToggleAllClick, this), this.buildInterface = e(this.buildInterface, this), this.selectSelector = $(t), this.btnLarge = this.selectSelector.data("btnLarge"), this.buildInterface()
    }

    return t.prototype.cssClassSelected = "active", t.prototype.cssClassBtnToggleAll = "btn-toggle-all", t.prototype.cssClassBtnToggleNone = "btn-toggle-none", t.prototype.cssClassBtnLg = "btn-lg", t.prototype.buildInterface = function () {
      var i, s;
      return this.selectSelector.hide(), this.container = $("<ul />").addClass("select-range"), i = $("<li />").appendTo(this.container), this.btnToggle = $('<a href="#"/>').addClass("btn btn-default " + this.cssClassBtnLg + " btn-toggle").addClass(this.cssClassBtnLg).text("None").data({value: "all"}).click(this.handleToggleAllClick).appendTo(i), this.selectSelector.find("option").each((s = this, function (t, e) {
        var n;
        return n = $(e).prop("selected"), i = $("<li />").appendTo(s.container), $('<a href="#"/>').addClass("btn btn-default " + (n ? s.cssClassSelected : "") + " " + (s.btnLarge ? s.cssClassBtnLg : "")).text(e.text).data({value: e.value}).click(s.handleItemClick).appendTo(i)
      })), this.selectSelector.after(this.container)
    }, t.prototype.handleToggleAllClick = function () {
      return this.toggleAll(), !1
    }, t.prototype.handleItemClick = function (t) {
      var e, n, i, s, r, o, a, l, c, u, d, p;
      if (n = $(t.target), u = n.data("value"), -1 < (i = (d = this.selectSelector.val() || []).indexOf(u))) d.splice(i, 1), n.removeClass(this.cssClassSelected), this.selectSelector.val(d); else {
        if (t.shiftKey && (l = d.map(function (t) {
          return parseInt(t)
        }), o = Math.max.apply(null, l.filter(function (t) {
          return t < u
        })), isFinite(o))) for (e = this.selectSelector.find("option").map(function () {
          return parseInt($(this).val())
        }), a = e.filter(function (t) {
          return o < t && t < u
        }), this.container.find("a").each((p = this, function (t, e) {
          var n;
          if (n = parseInt($(e).data("value")), 0 <= h.call(a, n)) return $(e).addClass(p.cssClassSelected)
        })), s = 0, r = a.length; s < r; s++) c = a[s], d.push(c.toString());
        d.push(u), n.addClass(this.cssClassSelected), this.selectSelector.val(d)
      }
      return !1
    }, t.prototype.toggleAll = function () {
      var t;
      return t = this.btnToggle.hasClass(this.cssClassBtnToggleAll), this.selectSelector.find("option").prop("selected", t), t ? (this.container.find("a.btn:not(.btn-toggle)").addClass(this.cssClassSelected), this.btnToggle.removeClass(this.cssClassBtnToggleAll).addClass(this.cssClassBtnToggleNone).text("None")) : (this.container.find("a.btn:not(.btn-toggle)").removeClass(this.cssClassSelected), this.btnToggle.removeClass(this.cssClassBtnToggleNone).addClass(this.cssClassBtnToggleAll).text("All"))
    }, t
  }()
}.call(this), function () {
  var e = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  };
  UiKit.ToggleCheckboxes = function () {
    function t(t) {
      this.uncheckedCount = e(this.uncheckedCount, this), this.checkedCount = e(this.checkedCount, this), this.updateState = e(this.updateState, this), this.updateTarget = e(this.updateTarget, this), this.trackTargetsChangeHandler = e(this.trackTargetsChangeHandler, this), this.showContainer = e(this.showContainer, this), this.onChangeHandler = e(this.onChangeHandler, this), this.elementSelector = $(t), this.targetSelector = $(this.elementSelector.data("target")), this.targetContainerSelector = $(this.elementSelector.data("target-toggle-container")), this.elementSelector.trigger("change"), this.elementSelector.change(this.onChangeHandler), this.targetSelector.find('input[type="checkbox"]').change(this.trackTargetsChangeHandler), 0 < this.elementSelector.length && this.updateState(), 0 < this.targetContainerSelector.length && this.showContainer()
    }

    return t.prototype.onChangeHandler = function () {
      return this.updateTarget(), !1
    }, t.prototype.showContainer = function () {
      return 0 < this.checkedCount() ? this.targetContainerSelector.removeClass("hidden") : this.targetContainerSelector.addClass("hidden"), !1
    }, t.prototype.trackTargetsChangeHandler = function () {
      return this.updateState()
    }, t.prototype.updateTarget = function () {
      var t;
      return t = this.elementSelector.prop("checked"), this.targetSelector.find('input[type="checkbox"]').prop("checked", t).trigger("change")
    }, t.prototype.updateState = function () {
      return this.elementSelector.prop("checked", 0 === this.uncheckedCount() && 0 < this.checkedCount())
    }, t.prototype.checkedCount = function () {
      return this.targetSelector.find('input[type="checkbox"]:checked').size()
    }, t.prototype.uncheckedCount = function () {
      return this.targetSelector.find('input[type="checkbox"]:not(:checked)').size()
    }, t
  }()
}.call(this), function () {
  var e = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  };
  UiKit.ToggleClass = function () {
    function t(t) {
      this.toggleClass = e(this.toggleClass, this), this.elementSelector = $(t), this.targetSelector = $(this.elementSelector.data("target")), this.cssClassName = this.elementSelector.data("className") || "hidden", this.cssClassOn = this.elementSelector.data("classOn"), void 0 === this.cssClassOn && (this.cssClassOn = !0), this.cssClassOn && this.targetSelector.addClass(this.cssClassName), this.elementSelector.click(this.toggleClass)
    }

    return t.prototype.toggleClass = function () {
      return this.targetSelector.toggleClass(this.cssClassName), !1
    }, t
  }()
}.call(this), function () {
  UiKit.ToogleClick = function () {
    function t(t) {
      this.selector = t.selector, $(document).on("click", this.selector, function (t) {
        var e, n, i;
        if (t.preventDefault(), e = $(t.currentTarget), (i = $($(e).data("target"))).toggleClass("hidden"), 0 !== (n = e.find(".glyphicons")).length) return i.hasClass("hidden") ? (n.removeClass("glyphicons-chevron-down"), n.addClass("glyphicons-chevron-right")) : (n.addClass("glyphicons-chevron-down"), n.removeClass("glyphicons-chevron-right"))
      })
    }

    return t
  }()
}.call(this), function () {
  UiKit.addTooltip = function () {
    function t() {
      $('[data-toggle="popover"]').popover({container: "body"}), $(".field-tooltip").each(function () {
        var t;
        if (!$(this).parent().find("span.glyphicon.glyphicon-question-sign.b-tlt").size()) return t = $("<span>").addClass("glyphicon glyphicon-question-sign b-tlt").data("title", $(this).data("title")).data("html", !0).data("placement", $(this).data("placement")), $(this).parent().append(t)
      }), $(".b-tlt").not(".nav_link").tooltip({
        html: $(this).attr("data-html"),
        trigger: "manual",
        animation: !1,
        container: $(this).attr("id")
      }).on("mouseenter", function () {
        var t, e;
        return $(this).tooltip("show"), (t = $(this).data("bs.tooltip").$viewport).click(function () {
          return t.find(".tooltip").each(function () {
            return $(this).data("bs.tooltip").$element.tooltip("hide")
          })
        }), $(this).data("bs.tooltip").$tip.on("mouseleave", (e = this, function () {
          return $(e).tooltip("hide")
        })).click(function (t) {
          return $(t.target).is("[href]")
        }), t.find(".tooltip").not($(this).data("bs.tooltip").$tip).each(function () {
          return $(this).data("bs.tooltip").$element.tooltip("hide")
        }), !1
      }).on("mouseleave", function () {
        var t;
        return setTimeout((t = this, function () {
          if (!$(".tooltip:hover").length) return $(t).tooltip("hide")
        }), 3e3), !1
      }), $(".b-tlt.nav_link").tooltip({container: "body"})
    }

    return t
  }()
}.call(this), function () {
  var e = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  };
  UiKit.BestInPlace = function () {
    function t() {
      this._initOrdinaryBips = e(this._initOrdinaryBips, this), this._initOrdinaryBips()
    }

    return t.prototype.ordBip = "span[class='best_in_place']", t.bipSelect2Class = ".bip-select2", t.prototype._initOrdinaryBips = function () {
      var t, e, n, i, s;
      for (s = [], e = 0, n = (i = $(this.ordBip)).length; e < n; e++) t = i[e], s.push(new UiKit.BestInPlace.Base($(t)));
      return s
    }, t.attachSelect2 = function () {
      return $("body").on("best_in_place:activate", ".best_in_place" + t.bipSelect2Class, function () {
        var t;
        return this.update = function () {
        }, (t = $(this).find("select").select2({
          theme: "bootstrap",
          containerCssClass: "dashboard"
        })).select2("open"), t.unbind("blur").bind("blur", {editor: this}, BestInPlaceEditor.forms.select.blurHandler), UiKit.Select2.Base.disableScrollButSelect2(), t.on("select2:closing", function () {
          return t.change(), UiKit.Select2.Base.enableScroll()
        }), t.on("select2:selecting", function () {
          return UiKit.Select2.Base.enableScroll()
        })
      })
    }, t
  }()
}.call(this), BestInPlaceEditor.forms.date = {
  activateForm: function () {
    "use strict";
    var t = this,
      e = jQuery(document.createElement("form")).addClass("form_in_place").attr("action", "javascript:void(0);").attr("style", "display:inline"),
      n = jQuery(document.createElement("input")).attr("type", "text").attr("name", this.attributeName).attr("value", this.sanitizeValue(this.display_value));
    null !== this.inner_class && n.addClass(this.inner_class), e.append(n), this.element.html(e), this.setHtmlAttributes(), this.element.find("input")[0].select(), this.element.find("form").bind("submit", {editor: this}, BestInPlaceEditor.forms.input.submitHandler), this.element.find("input").bind("keyup", {editor: this}, BestInPlaceEditor.forms.input.keyupHandler), this.element.find("input").datepicker({
      onClose: function () {
        t.update()
      }
    }).datepicker("show")
  }, getValue: function () {
    "use strict";
    return this.sanitizeValue(this.element.find("input").val())
  }, submitHandler: function (t) {
    "use strict";
    t.data.editor.update()
  }, keyupHandler: function (t) {
    "use strict";
    27 === t.keyCode && t.data.editor.abort()
  }
}, function () {
  var n = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  };
  null == UiKit.BestInPlace && (UiKit.BestInPlace = {}), UiKit.BestInPlace.Base = function () {
    function t(t, e) {
      this.bip = t, null == e && (e = !1), this._showResponseFlash = n(this._showResponseFlash, this), this._reflowTable = n(this._reflowTable, this), this._bipSelector = n(this._bipSelector, this), this._bipUpdateValue = n(this._bipUpdateValue, this), this._disableIcon = n(this._disableIcon, this), this._activateIcon = n(this._activateIcon, this), this._deactivateLink = n(this._deactivateLink, this), this._activateLink = n(this._activateLink, this), this._bindLinkListener = n(this._bindLinkListener, this), this._addIcon = n(this._addIcon, this), this._render = n(this._render, this), this._ajaxError = n(this._ajaxError, this), this._reinitBip = n(this._reinitBip, this), this._ajaxSuccess = n(this._ajaxSuccess, this), this._cacheDisplayValue = n(this._cacheDisplayValue, this), this._updateOldValue = n(this._updateOldValue, this), this._leaveOldValue = n(this._leaveOldValue, this), this._bipAbort = n(this._bipAbort, this), this._bindAjaxListeners = n(this._bindAjaxListeners, this), this._init = n(this._init, this), this._init(), e ? this.icon && this._bindAjaxListeners() : this._bindAjaxListeners()
    }

    return t.prototype.successMsg = "Changes Saved", t.prototype.errorMsg = "Something went wrong...", t.prototype.iconClass = ".best-in-place-icon", t.prototype.bipBaseId = "#best_in_place", t.prototype.bipObject = "undefined", t.prototype.tableToReflow = null, t._showFlash = function (t, e) {
      return UiKit.Notifier[e](t, function () {
        return this.fadeIn(1e3).delay(2e3).fadeOut(1e3)
      }, !0)
    }, t.prototype._init = function () {
      return this.bip.parent("td").addClass("editable"), this._activateLink(), this._addIcon(), this.bip.best_in_place(), this._cacheDisplayValue()
    }, t.prototype._bindAjaxListeners = function () {
      return this.bip.bind("ajax:error", this._ajaxError), this.bip.bind("ajax:success", this._ajaxSuccess), this.bip.bind("best_in_place:abort", this._bipAbort), this.bip.bind("best_in_place:success", this._cacheDisplayValue), this.bip.bind("best_in_place:activate", this._updateOldValue)
    }, t.prototype._bipAbort = function () {
      return this._reflowTable(), this._leaveOldValue()
    }, t.prototype._leaveOldValue = function () {
      return this.bip.html(this.bip.data("displayValue")), new UiKit.addTooltip(this.bip)
    }, t.prototype._updateOldValue = function () {
      return this.error ? this.bip.data("bestInPlaceEditor").oldValue = _.escape(this.bip.data("bip-original-content") || "").toString() : this.bip.data("bestInPlaceEditor").oldValue = _.escape((this.bip.data("bipValue") || "").toString())
    }, t.prototype._cacheDisplayValue = function () {
      return this.bip.data("displayValue", this.bip.html())
    }, t.prototype._ajaxSuccess = function (t, e) {
      return this.error = !1, this._disableIcon(), this._render(e), this._reinitBip(), new UiKit.addTooltip, this.constructor._showFlash(this.successMsg, "success"), this._reflowTable()
    }, t.prototype._reinitBip = function () {
      return this.bip = $(document).find("#" + this.bip.attr("id")), new this.constructor(this.bip, !0)
    }, t.prototype._ajaxError = function (t, e) {
      return this.error = !0, this._disableIcon(), this._showResponseFlash(e.responseText), this._reflowTable(), this._leaveOldValue()
    }, t.prototype._render = function (t) {
      var e;
      if (t) return e = JSON.parse(t), this.object = e.object, !!this.object && void 0
    }, t.prototype._addIcon = function () {
      var t;
      if (!this.bip.next(this.iconClass).length) return this.bip.after($("<span class='glyphicon glyphicon-pencil " + this.iconClass.substring(1) + "'></span>")), this.icon = this.bip.next(this.iconClass), this.icon.click((t = this, function () {
        return t._activateIcon()
      }))
    }, t.prototype._bindLinkListener = function () {
      return this.linkActivated = !0, $(document).on("click", "#" + this.bip.attr("id"), (t = this, function () {
        if (t.bip.attr("data-url")) return t.linkActive && 0 === t.bip.find("form").length ? window.location = t.bip.attr("data-url") : void 0
      }));
      var t
    }, t.prototype._activateLink = function () {
      return this.linkActivated || this._bindLinkListener(), this.linkActive = !0
    }, t.prototype._deactivateLink = function () {
      return this.linkActive = !1
    }, t.prototype._activateIcon = function () {
      var t;
      return this.icon.addClass("active"), $(this.bip).on("best_in_place:deactivate", (t = this, function () {
        return $(t.icon).removeClass("active")
      })), this._reflowTable()
    }, t.prototype._disableIcon = function () {
      if (this.icon) return this.icon.removeClass("active"), this._activateLink()
    }, t.prototype._bipUpdateValue = function (t, e, n) {
      var i;
      return null == n && (n = null), n || (n = e), (i = this._truncated(t[n])) ? this._appendTruncatedDiv(this._bipSelector(t, e), i) : this._bipSelector(t, e).removeClass(".b-tlt").html(_.escape(t[n]))
    }, t.prototype._bipSelector = function (t, e) {
      return $(this.bipBaseId + "_" + this.bipObject + "_" + t.id + "_" + e)
    }, t.prototype._reflowTable = function () {
      if (this.tableToReflow) return $(this.tableToReflow).trigger("reflow")
    }, t.prototype._showResponseFlash = function (t) {
      return t ? $.each(JSON.parse(t), (i = this, function (t, e) {
        var n;
        return n = "Error #" + (t + 1) + ": " + e.toString(), i.constructor._showFlash(n, "error")
      })) : this.constructor._showFlash(this.errorMsg, "error");
      var i
    }, t.prototype._truncated = function (t) {
      var e;
      try {
        return !!(e = $(t)).length && e
      } catch (n) {
        return n, !1
      }
    }, t.prototype._appendTruncatedDiv = function (t, e) {
      return t.text("").append($("<div class='b-tlt'></div>").attr("title", e.data("title")).text(e.text()))
    }, t
  }()
}.call(this), function () {
}.call(this), function () {
  var t;
  t = function () {
    function t() {
      $(".email-defender").one("click", function () {
        var t, e;
        return e = (t = $(this)).data("pre-at") + "@" + t.data("post-at") + "." + t.data("lvl-one"), t.text(e), t.attr("href", "mailto:" + e)
      })
    }

    return t
  }(), $(function () {
    return new t
  })
}.call(this);