/* VimeoPlayer - v2.62.20 - 2017-10-03 - https://player.vimeo.com/NOTICE.txt */
var VimeoPlayer = function() {
    "use strict";
    function e(e, t) {
        return t = {
            exports: {}
        },
        e(t, t.exports),
        t.exports
    }
    function t(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document.styleSheets[0];
        try {
            n.insertRule ? n.insertRule(e + "{" + t + "}", (n.cssRules || n.rules).length) : n.addRule(e, t)
        } catch (e) {}
    }
    function n(e) {
        if (e && e.detail > 0)
            try {
                document.activeElement.blur()
            } catch (e) {}
    }
    function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.activeElement
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        try {
            e.blur()
        } catch (e) {
            t && t(e)
        }
    }
    function r() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.activeElement
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        try {
            e.focus()
        } catch (e) {
            t && t(e)
        }
    }
    function o(e) {
        var t = e.getBoundingClientRect();
        return document.msFullscreenElement && window.parent !== window && e.offsetWidth < e.clientWidth && (t = {
            bottom: 100 * t.bottom,
            left: 100 * t.left,
            top: 100 * t.top,
            right: 100 * t.right,
            width: 100 * t.width,
            height: 100 * t.height
        }),
        t
    }
    function a(e) {
        try {
            return new URL(e).origin
        } catch (e) {}
        var t = document.createElement("a");
        return t.href = e,
        t.origin ? t.origin : t.protocol.replace(":", "") + "://" + t.host
    }
    function s(e) {
        var t = e.width
          , n = e.height
          , i = e.elementWidth
          , r = e.elementHeight
          , o = e.threshold
          , a = void 0 === o ? 10 : o
          , s = 1
          , u = t / n
          , c = i - r * u
          , l = r - i / u;
        if (c > 0 && c < a || l > 0 && l < a) {
            var d = i / (i - c)
              , f = r / (r - l);
            s = Math.max(d, f)
        }
        return {
            extraWidth: c,
            extraHeight: l,
            scaleFactor: s
        }
    }
    function u(e, t, n) {
        return e > n ? n : t > e ? t : e
    }
    function c(e) {
        if (e === !0)
            return nn.resolve(null);
        var t = !1;
        return new nn(function(n, i) {
            var r = function() {
                t || !function() {
                    t = !0;
                    var i = (new Date).getTime() - e.startTime;
                    setTimeout(function() {
                        return n(i)
                    }, 100)
                }()
            };
            e.link.addEventListener("load", r, !1)
        }
        )
    }
    function l(e, t, n) {
        var i = n.width
          , r = n.height
          , o = n.scrollbars
          , a = void 0 === o ? "yes" : o
          , s = n.resizable
          , u = void 0 === s ? "yes" : s
          , c = n.toolbar
          , l = void 0 === c ? "no" : c
          , d = (window.screenY || window.screenTop || 0) + window.outerHeight / 2 - r / 2
          , f = (window.screenX || window.screenLeft || 0) + window.outerWidth / 2 - i / 2;
        window.chrome && window.navigator.userAgent.toLowerCase().indexOf("mac os x") !== -1 && (r += 27),
        window.safari && (r += 47);
        var h = "scrollbars=" + a + ",resizable=" + u + ",toolbar=" + l;
        return window.open(e, t, "width=" + i + ",height=" + r + ",left=" + f + ",top=" + d + "," + h)
    }
    function d(e) {
        if (!e)
            return {};
        if (Number.isInteger(parseInt(e, 10)))
            return {
                id: parseInt(e, 10),
                params: {}
            };
        if ("string" == typeof e)
            return 0 !== e.indexOf("https://") ? {} : {
                url: e,
                params: {}
            };
        var t = ["portrait", "title", "byline", "color", "autoplay", "loop"]
          , n = Object.keys(e).filter(function(e) {
            return t.indexOf(e) !== -1
        }).reduce(function(t, n) {
            return t[n] = e[n],
            t
        }, {});
        return "url"in e ? 0 !== e.url.indexOf("https://") ? {} : {
            url: e.url,
            params: n
        } : "id"in e && Number.isInteger(parseInt(e.id, 10)) ? {
            id: parseInt(e.id, 10),
            params: n
        } : {}
    }
    function f(e) {
        var t = e.match(/\ba?t=([0-9hms:]+)/);
        null !== t && (e = t[1]);
        var n = !1
          , i = 0
          , r = 0
          , o = 0;
        if (t = e.match(/^([0-9]+)$/),
        t && t.length && (n = !0,
        o = t[1]),
        n === !1 && (t = e.match(/^(?:([0-9]+)h)?(?:([0-9]+)m)?(?:([0-9]+)s)?/),
        null !== t && "" !== t[0])) {
            n = !0;
            var a = t
              , s = wn(a, 4)
              , u = s[1];
            i = void 0 === u ? 0 : u;
            var c = s[2];
            r = void 0 === c ? 0 : c;
            var l = s[3];
            o = void 0 === l ? 0 : l
        }
        if (n === !1 && (t = e.match(/^([0-9:]+)/),
        null !== t)) {
            n = !0;
            var d = e.split(":").reverse()
              , f = wn(d, 3);
            o = f[0];
            var h = f[1];
            r = void 0 === h ? 0 : h;
            var v = f[2];
            i = void 0 === v ? 0 : v
        }
        return n ? 60 * parseInt(i, 10) * 60 + 60 * parseInt(r, 10) + parseInt(o, 10) : null
    }
    function h(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = t.method
          , i = void 0 === n ? "GET" : n
          , r = t.withCredentials
          , o = void 0 === r || r
          , a = t.allowErrorStatuses
          , s = void 0 !== a && a;
        return new nn(function(t, n) {
            var r = new XMLHttpRequest;
            r.open(i, e, !0),
            o && (r.withCredentials = !0),
            r.onload = function() {
                if (r.status >= 400 && !s) {
                    var e = {
                        403: "Forbidden",
                        404: "Not Found",
                        500: "Internal Server Error"
                    };
                    return e[r.status] ? void n(new Error(e[r.status])) : void n(new Error("Request returned non-200 status code: " + r.status))
                }
                t(r.responseText)
            }
            ,
            r.onerror = function() {
                return n(new Error("The request failed."))
            }
            ,
            r.send()
        }
        )
    }
    function v(e) {
        for (var t, n, i = (e || document).querySelectorAll("[tabindex]"), r = [], o = 0, a = 0, s = i.length; a < s; a++)
            t = i[a],
            n = window.getComputedStyle(t, ""),
            t.tabIndex > 0 && "none" !== n.display && n.opacity > 0 && "hidden" !== n.visibility && (r[o++] = t);
        var u = r.shift();
        u && (u.focus(),
        u.blur())
    }
    function p(e, t) {
        if (e = parseFloat(e),
        isNaN(e))
            return 0;
        var n = Math.pow(10, t || 3);
        return Math.round(e * n) / n
    }
    function m() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e) {
            return (e ^ 16 * Math.random() >> e / 4).toString(16)
        })
    }
    function g(e) {
        var t = ""
          , n = window.getComputedStyle(e, ":after");
        if (n)
            try {
                t = n.getPropertyValue("content"),
                t = t.replace(/^['"]+|\\|['"]$/g, "")
            } catch (e) {}
        return t
    }
    function y(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        t = Object.keys(t).map(function(e) {
            return t[e]
        });
        var i = e.cloneNode();
        i.style.visibility = "hidden",
        i.style.padding = 0,
        e.parentElement.appendChild(i);
        var r = t.map(function(e) {
            return i.innerText = e,
            i.clientWidth
        })
          , o = Math.max.apply(Math, r)
          , a = window.getComputedStyle(e)
          , s = parseFloat(a.fontSize);
        return e.parentElement.removeChild(i),
        (o + n) / s + "em"
    }
    function _(e, t) {
        return mn(t).indexOf(e) !== -1
    }
    function b(e, t) {
        for (; e && e.parentElement && !_(e, t); )
            e = e.parentElement;
        return _(e, t) ? e : null
    }
    function w(e) {
        return e ? mn(e.parentNode.children).indexOf(e) : -1
    }
    function k(e, t, n, i) {
        var r = i[t];
        return r ? (r = T(e, r),
        r = S(r, n, i.prices),
        i.expires_in_duration_str && (r = r.replace("{TIME}", i.expires_in_duration_str)),
        i.available_on_formatted && (r = r.replace("{DATE}", i.available_on_formatted)),
        r) : null
    }
    function S(e, t, n) {
        var i = n.USD;
        return t in n && (i = n[t]),
        e.indexOf("${price}") !== -1 ? e.replace("${price}", i) : e.indexOf("{PRICE}") !== -1 ? e.replace("{PRICE}", i) : e
    }
    function E(e, t) {
        return !e || 0 === e.length || e.indexOf(t) !== -1
    }
    function T(e, t) {
        return "undefined" != typeof e && "undefined" != typeof e[t] ? e[t] : t
    }
    function x(e, t, n, i) {
        return !i.relatedTarget || (!n || e === t) && (t !== i.relatedTarget && !t.contains(i.relatedTarget))
    }
    function L(e, t, n, i) {
        var r = !1;
        i = "function" == typeof t ? n : i,
        n = "function" == typeof t ? t : n,
        t = "function" == typeof t ? null : t;
        var o = function(e) {
            var t = !0;
            if (e.changedTouches) {
                var o = e.changedTouches[0].pageX - window.pageXOffset
                  , a = e.changedTouches[0].pageY - window.pageYOffset
                  , s = document.elementFromPoint(o, a);
                null !== s && this.contains(s) && (t = n.call(this, e))
            }
            return "function" == typeof i && i.call(this, e),
            r = !0,
            t
        }
          , a = function(e) {
            return r ? void (r = !1) : n.call(this, e)
        };
        return t ? void Tn(e).on("click", t, a).on("touchend", t, o) : void Tn(e).on("click", a).on("touchend", o)
    }
    function P(e) {
        return new RegExp(e.toLowerCase()).test(Fn)
    }
    function A(e) {
        var t = document.createElement("div")
          , n = e.charAt(0).toUpperCase() + e.slice(1)
          , i = (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ");
        for (var r in i) {
            var o = i[r];
            if (void 0 !== t.style[o])
                return o
        }
        return e
    }
    function C() {
        var e = navigator
          , t = !1
          , n = [0, 0, 0]
          , i = null
          , r = "Shockwave Flash"
          , o = "application/x-shockwave-flash"
          , a = "ShockwaveFlash.ShockwaveFlash";
        if ("undefined" != typeof e.plugins && "object" === gn(e.plugins[r]))
            i = e.plugins[r].description,
            !i || "undefined" != typeof e.mimeTypes && e.mimeTypes[o] && !e.mimeTypes[o].enabledPlugin || (t = !0,
            i = i.replace(/^.*\s+(\S+\s+\S+$)/, "$1"),
            n[0] = parseInt(i.replace(/^(.*)\..*$/, "$1"), 10),
            n[1] = parseInt(i.replace(/^.*\.(.*)\s.*$/, "$1"), 10),
            n[2] = /[a-zA-Z]/.test(i) ? parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if ("undefined" != typeof window.ActiveXObject)
            try {
                var s = new ActiveXObject(a);
                s && (i = s.GetVariable("$version"),
                i && (t = !0,
                i = i.split(" ")[1].split(","),
                n = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)]))
            } catch (e) {}
        return {
            installed: t,
            version: n.join("."),
            major: n[0],
            minor: n[1],
            revision: n[2]
        }
    }
    function O(e, t) {
        var n = e
          , i = t;
        return n % 320 !== 0 && (n = 100 * Math.ceil(e / 100),
        i = Math.round(n / e * t)),
        {
            width: n,
            height: i
        }
    }
    function R(e) {
        var t = e.width
          , n = e.height
          , i = e.baseUrl
          , r = e.webpSupport
          , o = void 0 !== r && r
          , a = e.crop
          , s = void 0 !== a && a
          , u = i + (o ? ".webp" : ".jpg")
          , c = parseInt(t, 10)
          , l = parseInt(n, 10);
        return u += "?" + (s ? "w=" : "mw=") + c,
        0 !== l && (u += "&" + (s ? "h=" : "mh=") + l),
        Un.devicePixelRatio > 1 && (u += "&q=70"),
        u
    }
    function M(e) {
        return new nn(function(t, n) {
            var i = new Image;
            i.src = e,
            i.onload = function() {
                return t(i)
            }
            ,
            i.onerror = function() {
                return n(new Error("Failed to load image."))
            }
        }
        )
    }
    function I(e) {
        return Un.iOS && "onpagehide"in window ? void window.addEventListener("pagehide", e, !1) : void window.addEventListener("beforeunload", e, !1)
    }
    function F(e) {
        return "object" == typeof e && null !== e
    }
    function D(e) {
        switch ({}.toString.call(e)) {
        case "[object Error]":
            return !0;
        case "[object Exception]":
            return !0;
        case "[object DOMException]":
            return !0;
        default:
            return e instanceof Error
        }
    }
    function B() {
        return "undefined" == typeof document || "undefined" == typeof document.location ? "" : document.location.href
    }
    function q(e) {
        this.name = "RavenConfigError",
        this.message = e
    }
    function N() {
        return +new Date
    }
    function j() {
        this._hasJSON = !("object" != typeof JSON || !JSON.stringify),
        this._hasDocument = !V(hi),
        this._hasNavigator = !V(vi),
        this._lastCapturedException = null,
        this._lastData = null,
        this._lastEventId = null,
        this._globalServer = null,
        this._globalKey = null,
        this._globalProject = null,
        this._globalContext = {},
        this._globalOptions = {
            logger: "javascript",
            ignoreErrors: [],
            ignoreUrls: [],
            whitelistUrls: [],
            includePaths: [],
            crossOrigin: "anonymous",
            collectWindowErrors: !0,
            maxMessageLength: 0,
            maxUrlLength: 250,
            stackTraceLimit: 50,
            autoBreadcrumbs: !0,
            sampleRate: 1
        },
        this._ignoreOnError = 0,
        this._isRavenInstalled = !1,
        this._originalErrorStackTraceLimit = Error.stackTraceLimit,
        this._originalConsole = fi.console || {},
        this._originalConsoleMethods = {},
        this._plugins = [],
        this._startTime = N(),
        this._wrappedBuiltIns = [],
        this._breadcrumbs = [],
        this._lastCapturedEvent = null,
        this._keypressTimeout,
        this._location = fi.location,
        this._lastHref = this._location && this._location.href,
        this._resetBackoff();
        for (var e in this._originalConsole)
            this._originalConsoleMethods[e] = this._originalConsole[e]
    }
    function V(e) {
        return void 0 === e
    }
    function U(e) {
        return "function" == typeof e
    }
    function H(e) {
        return "[object String]" === pi.toString.call(e)
    }
    function W(e) {
        for (var t in e)
            return !1;
        return !0
    }
    function z(e, t) {
        var n, i;
        if (V(e.length))
            for (n in e)
                X(e, n) && t.call(null, n, e[n]);
        else if (i = e.length)
            for (n = 0; n < i; n++)
                t.call(null, n, e[n])
    }
    function K(e, t) {
        return t ? (z(t, function(t, n) {
            e[t] = n
        }),
        e) : e
    }
    function G(e, t) {
        return !t || e.length <= t ? e : e.substr(0, t) + "â¦"
    }
    function X(e, t) {
        return pi.hasOwnProperty.call(e, t)
    }
    function Y(e) {
        for (var t, n = [], i = 0, r = e.length; i < r; i++)
            t = e[i],
            H(t) ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && n.push(t.source);
        return new RegExp(n.join("|"),"i")
    }
    function $(e) {
        var t = [];
        return z(e, function(e, n) {
            t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
        }),
        t.join("&")
    }
    function Q(e) {
        var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t)
            return {};
        var n = t[6] || ""
          , i = t[8] || "";
        return {
            protocol: t[2],
            host: t[4],
            path: t[5],
            relative: t[5] + n + i
        }
    }
    function J() {
        var e = fi.crypto || fi.msCrypto;
        if (!V(e) && e.getRandomValues) {
            var t = new Uint16Array(8);
            e.getRandomValues(t),
            t[3] = 4095 & t[3] | 16384,
            t[4] = 16383 & t[4] | 32768;
            var n = function(e) {
                for (var t = e.toString(16); t.length < 4; )
                    t = "0" + t;
                return t
            };
            return n(t[0]) + n(t[1]) + n(t[2]) + n(t[3]) + n(t[4]) + n(t[5]) + n(t[6]) + n(t[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0
              , n = "x" === e ? t : 3 & t | 8;
            return n.toString(16)
        })
    }
    function Z(e) {
        for (var t, n = 5, i = 80, r = [], o = 0, a = 0, s = " > ", u = s.length; e && o++ < n && (t = ee(e),
        !("html" === t || o > 1 && a + r.length * u + t.length >= i)); )
            r.push(t),
            a += t.length,
            e = e.parentNode;
        return r.reverse().join(s)
    }
    function ee(e) {
        var t, n, i, r, o, a = [];
        if (!e || !e.tagName)
            return "";
        if (a.push(e.tagName.toLowerCase()),
        e.id && a.push("#" + e.id),
        t = e.className,
        t && H(t))
            for (n = t.split(/\s+/),
            o = 0; o < n.length; o++)
                a.push("." + n[o]);
        var s = ["type", "name", "title", "alt"];
        for (o = 0; o < s.length; o++)
            i = s[o],
            r = e.getAttribute(i),
            r && a.push("[" + i + '="' + r + '"]');
        return a.join("")
    }
    function te(e, t) {
        return !!(!!e ^ !!t)
    }
    function ne(e, t) {
        return !te(e, t) && (e = e.values[0],
        t = t.values[0],
        e.type === t.type && e.value === t.value && ie(e.stacktrace, t.stacktrace))
    }
    function ie(e, t) {
        if (te(e, t))
            return !1;
        var n = e.frames
          , i = t.frames;
        if (n.length !== i.length)
            return !1;
        for (var r, o, a = 0; a < n.length; a++)
            if (r = n[a],
            o = i[a],
            r.filename !== o.filename || r.lineno !== o.lineno || r.colno !== o.colno || r.function !== o.function)
                return !1;
        return !0
    }
    function re(e, t, n, i) {
        var r = e[t];
        e[t] = n(r),
        i && i.push([e, t, r])
    }
    function oe(e) {
        e = e || {};
        var t = {};
        return e.on = function(n, i) {
            n = [].concat(n);
            for (var r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                if (!a)
                    throw new Error("Tried to listen for an undefined event.");
                t[a] || (t[a] = []),
                t[a].push(i)
            }
            return e
        }
        ,
        e.once = function(t, n) {
            function i() {
                n.apply(e.off(t, i), arguments)
            }
            return i.handler = n,
            e.on(t, i)
        }
        ,
        e.off = function(n, i) {
            n = [].concat(n);
            for (var r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                if (!a)
                    throw new Error("Tried to remove an undefined event.");
                if (a in t) {
                    var s = t[a].indexOf(i);
                    if (s === -1) {
                        for (var u = 0, c = t[a].length; u < c; u++)
                            if (t[a][u].handler === i) {
                                s = r;
                                break
                            }
                        if (s === -1)
                            return e
                    }
                    t[a].splice(s, 1)
                }
            }
            return e
        }
        ,
        e.fire = function(n) {
            if (!n)
                throw new Error("Tried to fire an undefined event.");
            if (n in t)
                for (var i = t[n].slice(0), r = 0, o = i.length; r < o; r++)
                    i[r].apply(e, i.slice.call(arguments, 1));
            return e
        }
        ,
        e
    }
    function ae(e) {
        function t() {
            var t = e.telecine && e.telecine.currentScanner;
            switch (t) {
            case "HTMLScanner":
                return "HTML5";
            case "SWFScanner":
                return "Flideo";
            case "moogaloop":
                return "Moogaloop";
            default:
                return "Player"
            }
        }
        function n(t, n) {
            window._gaq && window._gaq.push(["player._trackSocial", t, n, e.config.video.share_url])
        }
        function i(e, n, i) {
            var r = (new Date).getTime() - n;
            window._gaq && window._gaq.push(["player._trackTiming", t(), e, r, i])
        }
        function r() {
            e.doNotTrackEnabled || (e.events.on(hn.facebookButtonPressed, function() {
                n("Facebook", "share")
            }),
            e.events.on(hn.twitterButtonPressed, function() {
                n("Twitter", "tweet")
            }),
            e.events.on(hn.tumblrButtonPressed, function() {
                n("Tumblr", "share")
            }),
            e.events.on(hn.emailButtonPressed, function() {
                n("Email", "email")
            }))
        }
        function o() {
            var t;
            e.events.on([hn.bufferStarted, hn.scrubbingStarted], function(e) {
                t || (t = e || (new Date).getTime())
            }),
            e.events.on(hn.bufferEnded, function() {
                if (t > 0) {
                    var n = e.telecine.currentFile.metadata.quality
                      , r = "Buffer Time";
                    c && (c = !1,
                    r = "Start Time"),
                    i(r, t, n),
                    t = null
                }
            })
        }
        function a() {
            "tracking_pixel"in e.config.video && (e.doNotTrackEnabled || e.playLoggingEnabled && e.events.on(hn.playInitiated, function() {
                try {
                    (new Image).src = e.config.video.tracking_pixel
                } catch (e) {}
            }))
        }
        function s() {
            e.events.on(hn.configChanged, function() {
                u !== e.config.request.session && (window._gaq && window._gaq.push(["player._trackPageview", "/video/" + e.config.video.id]),
                c = !0)
            })
        }
        var u = e.config.request.session
          , c = !0;
        return r(),
        o(),
        a(),
        s(),
        e.events.fire(hn.analyticsModuleReady),
        {}
    }
    function se(e, t) {
        for (var n = -1, i = null == e ? 0 : e.length, r = Array(i); ++n < i; )
            r[n] = t(e[n], n, e);
        return r
    }
    function ue(e) {
        var t = Di.call(e, qi)
          , n = e[qi];
        try {
            e[qi] = void 0;
            var i = !0
        } catch (e) {}
        var r = Bi.call(e);
        return i && (t ? e[qi] = n : delete e[qi]),
        r
    }
    function ce(e) {
        return Vi.call(e)
    }
    function le(e) {
        return null == e ? void 0 === e ? Gi : Ki : Xi && Xi in Object(e) ? Wi(e) : zi(e)
    }
    function de(e) {
        return null != e && "object" == typeof e
    }
    function fe(e) {
        return "symbol" == typeof e || Ji(e) && Qi(e) == Zi
    }
    function he(e) {
        if ("string" == typeof e)
            return e;
        if (ir(e))
            return nr(e, he) + "";
        if (rr(e))
            return sr ? sr.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -or ? "-0" : t
    }
    function ve(e) {
        return null == e ? "" : cr(e)
    }
    function pe(e) {
        return function(t) {
            return null == e ? void 0 : e[t]
        }
    }
    function me(e) {
        return e = mr(e),
        e && _r.test(e) ? e.replace(yr, gr) : e
    }
    function ge(e) {
        return e = e.replace("#", ""),
        "string" == typeof e && (3 === e.length || 6 === e.length) && !isNaN(parseInt(e, 16))
    }
    function ye(e) {
        var t = /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d\.]+))?\)/.exec(e);
        if (!t)
            throw new Error("Invalid rgb value");
        return {
            red: parseInt(t[1], 10),
            green: parseInt(t[2], 10),
            blue: parseInt(t[3], 10),
            alpha: parseFloat(t[5]) || 1
        }
    }
    function _e() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        if (1 === t.length && t[0]instanceof _e) {
            var i = t[0];
            return this.red = i.red,
            this.green = i.green,
            this.blue = i.blue,
            this.alpha = i.alpha,
            this.hue = i.hue,
            this.saturation = i.saturation,
            this.lightness = i.lightness,
            this
        }
        if (1 === t.length) {
            if ("string" == typeof t[0] && t[0].indexOf("rgb") >= 0)
                return this.rgba = ye(t[0]),
                this;
            if (!ge("" + t[0]))
                throw new Error("Invalid hex value");
            return this.hex = t[0],
            this
        }
        if (3 === t.length || 4 === t.length) {
            for (var r = 0; r < 3; r++)
                if (isNaN(parseInt(t[r], 10)) || parseInt(t[r], 10) < 0 || parseInt(t[r], 10) > 255)
                    throw new Error("Invalid rgb value");
            if (t[3] && parseFloat(t[3]) < 0 || parseFloat(t[3]) > 1)
                throw new Error("Invalid alpha value");
            return this.rgba = {
                red: t[0],
                green: t[1],
                blue: t[2],
                alpha: parseFloat(t[3]) || 1
            },
            this
        }
        throw new Error("Invalid color")
    }
    function be(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!e || "null" === e || 0 === t.length)
            return {
                track: null
            };
        var n = e.split(".")
          , i = wn(n, 2)
          , r = i[0]
          , o = i[1]
          , a = r.split(/[-_]/)
          , s = wn(a, 1)
          , u = s[0]
          , c = r !== u
          , l = t.filter(function(e) {
            return c ? e.language === r || e.language === u : e.language === u
        }).sort(function(e, t) {
            var n = 2 * (e.language === u && e.kind === o) + 2 * (e.language === r) + 1 * (e.kind === o)
              , i = 2 * (t.language === u && t.kind === o) + 2 * (t.language === r) + 1 * (t.kind === o);
            return i - n
        });
        return l.length > 0 ? {
            track: l[0],
            exactMatch: l[0].language === r && l[0].kind === o
        } : {
            track: null
        }
    }
    function we(e) {
        function t(e, t, n) {
            this.message = e,
            this.name = t,
            this.source = n
        }
        function n(n) {
            switch (e.config.view) {
            case rn.privateLocked:
                throw new t("The video is private.","PrivacyError",n);
            case rn.privatePassword:
                throw new t("The video is password-protected. The viewer must enter the password first.","PasswordError",n);
            case rn.error:
                throw new t(e.config.message,"NotFoundError",n)
            }
        }
        function i() {
            var e = [];
            for (var t in q)
                if (q.hasOwnProperty(t) && 0 !== t.indexOf("_")) {
                    if ("function" == typeof q[t]) {
                        e.push(t);
                        continue
                    }
                    "function" == typeof q[t].get && e.push("get" + t.charAt(0).toUpperCase() + t.slice(1)),
                    "function" == typeof q[t].set && e.push("set" + t.charAt(0).toUpperCase() + t.slice(1))
                }
            return e.sort()
        }
        function r() {
            R || (l({
                event: "loaded",
                data: {
                    id: e.config.video.id
                }
            }),
            R = !0)
        }
        function o(e) {
            if (!e || "" === e)
                return {};
            if ("object" === ("undefined" == typeof e ? "undefined" : gn(e)))
                return e;
            try {
                return L = 2,
                JSON.parse(e)
            } catch (n) {
                var t = {};
                return e.split("&").forEach(function(e) {
                    try {
                        var n = e.split("=")
                          , i = decodeURIComponent(n[0])
                          , r = decodeURIComponent(n[1]);
                        if ("id" === i)
                            return;
                        "params" === i && (i = "value"),
                        r = r.split(",")[0],
                        t[i] = r
                    } catch (e) {}
                }),
                L = 1,
                t
            }
        }
        function a(e) {
            if (!e || "_" === e.substr(0, 1))
                return null;
            switch (1 === L && (e = e.replace("api_", "")),
            e) {
            case "changeColor":
                return q.color.set;
            case "paused":
                return q.paused.get;
            case "seekTo":
                return q.currentTime.set
            }
            if ("function" == typeof q[e])
                return q[e];
            var t = e.substr(0, 3)
              , n = e.substr(3, 1).toLowerCase() + e.substr(4);
            return q[n] && q[n][t] ? q[n][t] : null
        }
        function s(n) {
            if (n.source === window.parent) {
                var r = o(n.data)
                  , s = r.method
                  , u = r.value;
                if (void 0 !== s)
                    try {
                        var c = a(s);
                        if (!c)
                            throw new t("â" + s + "â is not a valid method. Valid methods are: " + i().join(", ") + ".","TypeError",s);
                        e.addBreadcrumb("API message received", r, "api");
                        var d = [u];
                        c === q.addCuePoint && "object" === ("undefined" == typeof u ? "undefined" : gn(u)) ? d = [u.time, u.data] : c === q.enableTextTrack && "object" === ("undefined" == typeof u ? "undefined" : gn(u)) && (d = [u.language, u.kind]);
                        var h = c.apply(n, d)
                          , v = 0 !== s.indexOf("get") && "paused" !== s;
                        if (h === w || v && L < 3)
                            return;
                        l({
                            method: s,
                            value: void 0 !== h && "" !== h ? h : u
                        })
                    } catch (e) {
                        f(e)
                    }
            }
        }
        function u(e) {
            var t = e.event;
            if (1 === L)
                for (var n in D)
                    if (D[n] === e.event) {
                        t = n;
                        break
                    }
            switch (t) {
            case "onSeek":
            case "onProgress":
                delete e.data.percent,
                delete e.data.duration;
                break;
            case "onLoading":
                delete e.data.seconds,
                delete e.data.duration
            }
            var i = "method=" + encodeURIComponent(t || e.method);
            i += "&params=";
            var r = [];
            if (void 0 !== e.value)
                r.push(encodeURIComponent(e.value));
            else if ("object" === gn(e.data))
                for (var o in e.data)
                    r.push(encodeURIComponent(e.data[o]));
            else
                void 0 !== e.data && r.push(encodeURIComponent(e.data));
            return e.player_id && r.push(e.player_id),
            i += r.join(",")
        }
        function c(e) {
            if (e.event) {
                for (var t in B)
                    if (B[t] === e.event) {
                        e.event = t;
                        break
                    }
                "cuechange" === e.event && (e.data.text = e.data.cues[0].text,
                e.data.html = e.data.cues[0].html,
                delete e.data.cues)
            }
            return JSON.stringify(e)
        }
        function l(t) {
            if ((!t.event || (S.fire(t.event, t.data),
            k[t.event])) && E) {
                e.config.embed && e.config.embed.player_id && (t.player_id = e.config.embed.player_id);
                try {
                    1 === L ? t = u(t) : 2 === L && (t = c(t)),
                    "object" !== ("undefined" == typeof t ? "undefined" : gn(t)) || "ready" !== t.event && T || (t = JSON.stringify(t))
                } catch (e) {}
                if (window.parent != window)
                    try {
                        window.parent.postMessage(t, _ && "null" !== _ ? _ : "*")
                    } catch (e) {}
            }
        }
        function f(e) {
            var n = {
                event: "error",
                data: {
                    message: "An error occurred.",
                    name: "Error",
                    method: e.source
                }
            };
            e instanceof t && (n = {
                event: "error",
                data: {
                    message: e.message,
                    name: e.name,
                    method: e.source
                }
            }),
            l(n)
        }
        function h() {
            if (P && C) {
                try {
                    switch (C) {
                    case "not-supported":
                        throw new t("This video is not supported in this browser.","NotSupportedError");
                    case "no-files":
                        throw new t("There was an error loading the files for this video.","FileError");
                    default:
                        throw new t("An error occurred during playback.","PlaybackError")
                    }
                } catch (e) {
                    f(e)
                }
                C = null
            }
        }
        function v() {
            "embed"in e.config && e.config.embed.on_site || (window.addEventListener ? window.addEventListener("message", s, !1) : window.attachEvent("onmessage", s))
        }
        function m() {
            e.events.on(hn.played, function(t) {
                A || (A = !0,
                l({
                    event: "play",
                    data: {
                        seconds: p(t),
                        percent: p(t / e.config.video.duration),
                        duration: p(e.config.video.duration)
                    }
                }))
            }),
            e.events.on(hn.paused, function(t) {
                A = !1,
                l({
                    event: "pause",
                    data: {
                        seconds: p(t),
                        percent: p(t / e.config.video.duration),
                        duration: p(e.config.video.duration)
                    }
                })
            }),
            e.events.on(hn.ended, function() {
                A = !1,
                l({
                    event: "ended",
                    data: {
                        seconds: p(e.config.video.duration),
                        percent: 1,
                        duration: p(e.config.video.duration)
                    }
                })
            }),
            e.events.on(hn.playProgress, function(e, t, n) {
                l({
                    event: "timeupdate",
                    data: {
                        seconds: p(e),
                        percent: p(n),
                        duration: p(t)
                    }
                })
            }),
            e.events.on(hn.loadProgress, function(e, t, n) {
                var i = {
                    event: "progress",
                    data: {
                        percent: p(n),
                        duration: p(t),
                        seconds: p(e)
                    }
                };
                L < 3 && (i.data.bytesLoaded = -1,
                i.data.bytesTotal = -1),
                l(i)
            }),
            e.events.on(hn.seeked, function(e, t, n) {
                l({
                    event: "seeked",
                    data: {
                        seconds: p(e),
                        percent: p(n),
                        duration: p(t)
                    }
                })
            }),
            e.events.on(hn.volumeChanged, function(e) {
                l({
                    event: "volumechange",
                    data: {
                        volume: p(e)
                    }
                })
            }),
            e.events.on(hn.playbackRateChanged, function(e) {
                l({
                    event: "playbackratechange",
                    data: {
                        playbackRate: e
                    }
                })
            }),
            e.events.on(hn.error, function(e) {
                C = e,
                h()
            }),
            e.events.on(hn.apiError, function(e) {
                f(new t(e.message,e.name,e.method))
            }),
            e.events.on(hn.cueChanged, function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , n = e || {}
                  , i = n.language
                  , r = void 0 === i ? null : i
                  , o = n.label
                  , a = void 0 === o ? null : o
                  , s = n.kind
                  , u = void 0 === s ? null : s;
                l({
                    event: "cuechange",
                    data: {
                        label: a,
                        language: r,
                        kind: u,
                        cues: t
                    }
                })
            }),
            e.events.on(hn.captionsChanged, function(e) {
                M = e;
                var t = e || {}
                  , n = t.language
                  , i = void 0 === n ? null : n
                  , r = t.label
                  , o = void 0 === r ? null : r
                  , a = t.kind
                  , s = void 0 === a ? null : a;
                l({
                    event: "texttrackchange",
                    data: {
                        label: o,
                        language: i,
                        kind: s
                    }
                })
            }),
            e.doNotTrackEnabled || e.events.on(hn.emailCaptureSuccess, function() {
                l({
                    event: "emailcapture"
                })
            }),
            e.events.on(hn.cuepoint, function(e) {
                l({
                    event: "cuepoint",
                    data: {
                        time: e.time,
                        data: e.data,
                        id: e.id
                    }
                })
            }),
            e.events.on(hn.spatialMotionStart, function() {
                l({
                    event: "motionstart",
                    data: {}
                })
            }),
            e.events.on(hn.spatialMotionEnd, function() {
                l({
                    event: "motionend",
                    data: {}
                })
            }),
            e.events.on(hn.spaceChanged, function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                k.spacechange = !0,
                l({
                    event: "spacechange",
                    data: e
                })
            }),
            e.events.on(hn.liveEventStarted, function() {
                l({
                    event: "liveeventstarted",
                    data: {}
                })
            }),
            e.events.on(hn.liveEventEnded, function() {
                l({
                    event: "liveeventended",
                    data: {}
                })
            }),
            e.events.on(hn.liveStreamOnline, function() {
                l({
                    event: "livestreamonline",
                    data: {}
                })
            }),
            e.events.on(hn.liveStreamOffline, function() {
                l({
                    event: "livestreamoffline",
                    data: {}
                })
            })
        }
        function g() {
            e.events.on(fn.reset, function() {
                C = null,
                O = !1,
                R = !1
            })
        }
        function y() {
            e.events.on(hn.configChanged, function(t) {
                x && setTimeout(function() {
                    var t = !0;
                    e.events.fire(fn.changeVolume, x, t)
                }, 0),
                t && r()
            })
        }
        var _ = document.referrer || e.config.request.referrer;
        try {
            _ = decodeURIComponent(_)
        } catch (e) {
            _ = br(_)
        }
        var b, w = "_ASYNC_", k = {
            ready: !0
        }, S = oe(), E = !(!window.postMessage || !window.parent.postMessage), T = !(Un.browser.ie >= 8 && Un.browser.ie < 10), x = null, L = e.config.embed.api, P = !1, A = !1, C = null, O = !1, R = !1, M = null, I = ["play", "pause", "ended", "timeupdate", "progress", "seeked", "error", "texttrackchange", "cuechange", "volumechange", "loaded", "emailcapture", "cuepoint", "motionstart", "motionend", "liveeventstarted", "liveeventended", "livestreamonline", "livestreamoffline", "playbackratechange"], F = I.filter(function(e) {
            return "emailcapture" !== e
        }), D = {
            onFinish: "ended",
            onLoading: "progress",
            onLoad: "ready",
            onProgress: "timeupdate",
            onPlay: "play",
            onPause: "pause",
            onSeek: "seeked"
        }, B = {
            playProgress: "timeupdate",
            loadProgress: "progress",
            finish: "ended",
            seek: "seeked"
        };
        t.prototype = new Error;
        var q = {
            _setEmbedEditor: function(t) {
                e.config.embed.editor = !!t
            },
            _setEmbedSetting: function(t, n) {
                e.config.embed.on_site && (n = "object" === ("undefined" == typeof n ? "undefined" : gn(n)) ? n : Number(n),
                "badge" === t && (n ? n = b : b = e.config.embed.settings.badge),
                e.config.embed.settings[t] = n,
                e.events.fire(hn.embedSettingChanged, t, n),
                e.events.fire(fn.reset),
                e.events.fire(hn.configChanged, !1, e.config))
            },
            _showOverlay: function(t, n) {
                e.events.fire(fn.showOverlay, t, n)
            },
            _toggleDebugHud: function() {
                e.events.fire(hn.debugButtonPressed)
            },
            _fieldOfView: {
                get: function() {
                    var n = e.telecine.getEffectByName("ThreeSixtyEffect");
                    if (e.telecine && !n)
                        throw new t("Field of view is not available in the current player.","UnsupportedError","getFieldOfView");
                    return n.fieldOfView
                },
                set: function(n) {
                    var i = e.telecine.getEffectByName("ThreeSixtyEffect");
                    if (e.telecine && !i)
                        throw new t("Field of view is not available in the current player.","UnsupportedError","setFieldOfView");
                    e.telecine.getEffectByName("ThreeSixtyEffect").fieldOfView = n
                }
            },
            _coordinates: {
                get: function() {
                    var n = e.telecine.getEffectByName("ThreeSixtyEffect");
                    if (e.telecine && !n)
                        throw new t("Coordinates are not available in the current player.","UnsupportedError","getCoordinates");
                    return n.currentCoordinates
                },
                set: function(n) {
                    var i = e.telecine.getEffectByName("ThreeSixtyEffect");
                    if (e.telecine && !i)
                        throw new t("Coordinates are not available in the current player.","UnsupportedError","setCoordinates");
                    try {
                        e.telecine.getEffectByName("ThreeSixtyEffect").currentCoordinates = n
                    } catch (e) {
                        throw new t(e.message,"RangeError","setCoordinates")
                    }
                }
            },
            addEventListener: function(n, i) {
                if (n in D && (n = D[n]),
                n in B && (n = B[n]),
                I.indexOf(n) < 0)
                    throw new t("â" + n + "â is not a valid event. Valid events are: " + F.join(", ") + ".","TypeError","addEventListener");
                i ? S.on(n, i) : k[n] = !0,
                ("loaded" === n && e.config.view === rn.main || e.config.view === rn.privateUnlocked) && r()
            },
            removeEventListener: function(e, t) {
                t ? S.off(e, t) : k[e] = !1
            },
            play: function() {
                n("play");
                var i = "[object MessageEvent]" === Object.prototype.toString.call(this)
                  , r = "undefined" != typeof Un && Un.iOS && Un.iOS < 10;
                if (i && r && !O)
                    throw new t("The viewer must initiate playback first.","Error","play");
                e.events.fire(hn.playButtonPressed)
            },
            pause: function() {
                n("pause"),
                e.events.fire(hn.pauseButtonPressed)
            },
            loadVideo: function(i) {
                var r = d(i)
                  , o = r.id
                  , a = r.url
                  , s = r.params;
                if (!o && !a)
                    throw new t("The video id must be an integer.","TypeError","loadVideo");
                if (a && a.match(null === new RegExp("^https?://" + e.config.player_url + "/video/([0-9]+)/config")))
                    throw new t("The config url must be a valid Vimeo url.","TypeError","loadVideo");
                return e.loadVideo(a || o, s).then(function() {
                    return L > 2 && l({
                        method: "loadVideo",
                        value: i
                    }),
                    i
                }).catch(function() {
                    try {
                        n("loadVideo")
                    } catch (e) {
                        if (e instanceof t)
                            return void f(e);
                        f(new t("An error occurred loading the video.","Error","loadVideo"))
                    }
                }),
                w
            },
            unload: function() {
                e.config.view !== rn.main && e.config.view !== rn.privateUnlocked || e.events.fire(fn.reset)
            },
            enableTextTrack: function(n) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , r = ("text_tracks"in e.config.request ? e.config.request.text_tracks : []).map(function(e) {
                    return e.language = e.lang,
                    e
                })
                  , o = r.some(function(e) {
                    return e.language.toLowerCase() === n.toLowerCase()
                });
                if (!o)
                    throw new t("There are no tracks for â" + n.toUpperCase() + "â.","InvalidTrackLanguageError","enableTextTrack");
                var a = i ? n + "." + i : n
                  , s = be(a, r)
                  , u = s.track;
                if (!u || i && u.kind !== i)
                    throw new t("There are no " + i + " tracks for â" + n.toUpperCase() + "â.","InvalidTrackError","enableTextTrack");
                return e.events.fire(fn.turnCaptionsOn, u.id, !0),
                L > 2 && e.events.once(hn.captionsChanged, function(e, t) {
                    l({
                        method: "enableTextTrack",
                        value: {
                            label: e.label,
                            language: e.language,
                            kind: e.kind
                        }
                    })
                }),
                w
            },
            disableTextTrack: function() {
                e.events.fire(fn.turnCaptionsOff)
            },
            ping: function() {
                return e.config.video.id
            },
            addCuePoint: function(n, i) {
                if (e.telecine && "moogaloop" === e.telecine.currentScanner)
                    throw new t("Cue points are not supported in the current player.","UnsupportedError","addCuePoint");
                if (n = parseFloat(n),
                isNaN(n) || n < 0 || n > e.config.video.duration)
                    throw new t("Cue point time must be positive number less than the duration of the video (" + p(e.config.video.duration) + ").","RangeError","addCuePoint");
                try {
                    var r = function() {
                        var t = e.telecine.addCuePoint(n, i);
                        return setTimeout(function() {
                            e.events.fire(hn.cuePointAdded, t)
                        }, 0),
                        {
                            v: t.id
                        }
                    }();
                    if ("object" === ("undefined" == typeof r ? "undefined" : gn(r)))
                        return r.v
                } catch (e) {
                    if ("CuePointsNotSupported" === e.name)
                        throw new t("Cue points are not supported in the current player.","UnsupportedError","addCuePoint");
                    throw new t("Unable to add cue point","InvalidCuePoint","addCuePoint")
                }
            },
            removeCuePoint: function(n) {
                if (e.telecine && "moogaloop" === e.telecine.currentScanner)
                    throw new t("Cue points are not supported in the current player.","UnsupportedError","removeCuePoint");
                var i = e.telecine.cuePoints.filter(function(e) {
                    return e.id === n
                })[0];
                if (!i)
                    throw new t("Cue point â" + n + "â was not found.","InvalidCuePoint","removeCuePoint");
                e.telecine.removeCuePoint(i),
                setTimeout(function() {
                    e.events.fire(hn.cuePointRemoved, i)
                }, 0)
            },
            _addCard: function(t) {
                e.events.fire(fn.addCard, t)
            },
            _removeCard: function(t) {
                e.events.fire(fn.removeCard, t)
            },
            autopause: {
                get: function() {
                    if (e.telecine && "moogaloop" === e.telecine.currentScanner)
                        throw new t("Autopause is not supported in the current player.","UnsupportedError","getAutopause");
                    return !!e.config.embed.autopause
                },
                set: function(n) {
                    if (e.telecine && "moogaloop" === e.telecine.currentScanner)
                        throw new t("Autopause is not supported in the current player.","UnsupportedError","setAutopause");
                    e.config.embed.autopause = !!n
                }
            },
            color: {
                get: function() {
                    return e.config.embed.color.replace("#", "")
                },
                set: function(n) {
                    if ("moogaloop" === e.telecine.currentScanner)
                        return void e.events.fire(fn.changeColor, n);
                    if (e.config.embed.settings.color && !e.config.embed.on_site)
                        throw new t("The creator of the video has chosen to always use " + new _e(e.config.embed.color).hex + ".","EmbedSettingsError","setColor");
                    try {
                        var i = new _e(n);
                        e.events.fire(fn.changeColor, i.hex)
                    } catch (e) {
                        throw new t("The color should be 3- or 6-digit hex value.","TypeError","setColor")
                    }
                    var r = new _e(23,35,34,.75)
                      , o = r.contrast(i).ratio;
                    if (o < 3) {
                        var a = i.clone().lighten(5, 3, r);
                        throw new t(i.hex + " does not meet minimum contrast ratio. We recommend using brighter colors. (You could try " + a.hex + " instead.) See WCAG 2.0 guidelines: http://www.w3.org/TR/WCAG/#visual-audio-contrast","ContrastError","setColor")
                    }
                }
            },
            cuePoints: {
                get: function() {
                    if (e.telecine && "moogaloop" === e.telecine.currentScanner)
                        throw new t("Cue points are not supported in the current player.","UnsupportedError","getCuePoints");
                    return e.telecine.cuePoints.map(function(e) {
                        return {
                            time: e.time,
                            data: e.data,
                            id: e.id
                        }
                    })
                }
            },
            currentTime: {
                get: function() {
                    return e.telecine && e.telecine.currentTime > .1 ? p(e.telecine.currentTime) : 0
                },
                set: function(n) {
                    if (n = parseFloat(n),
                    isNaN(n) || n < 0 || n > e.config.video.duration)
                        throw new t("Seconds must be a positive number less than the duration of the video (" + p(e.config.video.duration) + ").","RangeError","setCurrentTime");
                    var i = "[object MessageEvent]" === Object.prototype.toString.call(this);
                    if (i && "undefined" != typeof Un && (Un.iPhone || Un.iPad || Un.iPod) && !O)
                        throw new t("The viewer must initiate playback first.","Error","setCurrentTime");
                    return e.events.fire(fn.seek, null, n),
                    e.events.fire(hn.mousedOver),
                    L > 2 && e.events.once(hn.seeked, function(e, t, n) {
                        l({
                            method: "setCurrentTime",
                            value: e
                        })
                    }),
                    w
                }
            },
            duration: {
                get: function() {
                    return p(e.config.video.duration)
                }
            },
            ended: {
                get: function() {
                    return !!e.telecine.ended
                }
            },
            loop: {
                get: function() {
                    return !!e.config.embed.loop
                },
                set: function(t) {
                    e.events.fire(fn.changeLoop, t)
                }
            },
            paused: {
                get: function() {
                    return !(e.telecine && "paused"in e.telecine) || !!e.telecine.paused
                }
            },
            playbackRate: {
                get: function() {
                    return e.telecine ? e.telecine.playbackRate : 1
                },
                set: function(n) {
                    if (!e.config.embed.settings.speed)
                        throw new t("Setting the playback rate is not enabled for this video.","Error","setPlaybackRate");
                    if (isNaN(n) || n < dn.low || n > dn.high)
                        throw new t("Playback rate should be a number between " + dn.low + " and " + dn.high + ".","RangeError","setPlaybackRate");
                    e.events.fire(fn.changePlaybackRate, n)
                }
            },
            textTracks: {
                get: function() {
                    var t = e.telecine ? e.telecine.video.textTracks : [];
                    return t.map(function(e) {
                        return {
                            label: e.label,
                            language: e.language,
                            kind: e.kind,
                            mode: e === M ? "showing" : "disabled"
                        }
                    })
                }
            },
            videoEmbedCode: {
                get: function() {
                    return e.config.video.embed_code
                }
            },
            videoHeight: {
                get: function() {
                    return e.telecine.videoHeight || e.config.video.height
                }
            },
            videoId: {
                get: function() {
                    return e.config.video.id
                }
            },
            videoTitle: {
                get: function() {
                    return e.config.video.title
                }
            },
            videoWidth: {
                get: function() {
                    return e.telecine.videoWidth || e.config.video.width
                }
            },
            videoUrl: {
                get: function() {
                    if (!e.config.video.url)
                        throw new t("The URL is not available because of the videoâs privacy settings.","PrivacyError","getVideoUrl");
                    return e.config.video.url
                }
            },
            volume: {
                get: function() {
                    var t = p(e.config.request.cookie.volume);
                    return 1 === L ? Math.round(100 * t) : t
                },
                set: function(n) {
                    if (n = parseFloat(n),
                    1 === L && (n /= 100),
                    isNaN(n) || n < 0 || n > 1)
                        throw new t("Volume should be a number between 0 and 1.","RangeError","setVolume");
                    x = n;
                    var i = !0;
                    e.events.fire(fn.changeVolume, n, i)
                }
            },
            _like: {
                get: function() {
                    return !!e.config.user.liked
                },
                set: function(t) {
                    if (e.config.embed.on_site) {
                        if (e.config.user.liked === t)
                            return;
                        e.events.fire(hn.likeButtonPressed, t)
                    }
                }
            },
            _watchLater: {
                get: function() {
                    return !!e.config.user.watch_later
                },
                set: function(t) {
                    if (e.config.embed.on_site) {
                        if (e.config.user.watch_later === t)
                            return;
                        e.events.fire(hn.watchLaterButtonPressed, t)
                    }
                }
            },
            _setOutro: function(t, n) {
                return e.config.embed.outro === t ? void e.events.fire(fn.showOutro, t, n) : (e.events.fire(fn.hideOutro),
                void setTimeout(function() {
                    e.config.embed.outro = t,
                    e.events.fire(fn.showOutro, t, n)
                }, 400))
            },
            _setEmailCapture: function(t) {
                return t ? (e.config.embed.email = e.config.embed.email || {},
                e.config.embed.email.position = t.position.toLowerCase(),
                "after" === t.position.toLowerCase() ? (e.config.embed.outro = "email",
                void e.events.fire(fn.showOutro, "email", {
                    version: 2,
                    data: t
                })) : (e.config.embed.email.timecode = t.timecode,
                t.nohide = !0,
                t.noblur = !0,
                void q._showOverlay("email-capture", t))) : void q._unsetEmailCapture()
            },
            _unsetEmailCapture: function() {
                e.config.embed.outro && (e.events.fire(fn.hideOutro),
                delete e.config.embed.outro),
                e.config.embed.email && (e.events.fire(fn.hideOverlay, {
                    unmakeModal: !0
                }),
                delete e.config.embed.email)
            }
        };
        return e.events.on(hn.playInitiated, function() {
            O = !0
        }),
        m(),
        g(),
        y(),
        e.events.fire(hn.apiModuleReady),
        e.events.once(hn.ready, function() {
            P = !0,
            v(),
            l({
                event: "ready"
            }),
            h()
        }),
        q
    }
    function ke(e, t) {
        function n() {
            return Math.max(10, Math.round(.045 * e.element.clientHeight)) + "px"
        }
        function i() {
            t.style.fontSize = n()
        }
        function r() {
            t.classList.add("hidden"),
            t.setAttribute("hidden", "")
        }
        function o() {
            "picture-in-picture" !== e.telecine.presentationMode && (t.classList.remove("hidden"),
            t.removeAttribute("hidden"))
        }
        function a(e) {
            var t = e.text.replace("\n", "<br>").split(/<br ?\/?>/)
              , n = t.reduce(function(e, t) {
                return Math.max(e, t.replace(/<\/?\w>/g, "").length)
            }, 0)
              , i = "+" + Array(n + 3).join("-") + "+";
            return t = t.map(function(e) {
                var t = n - e.replace(/<\/?\w>/g, "").length
                  , i = Math.floor(t / 2)
                  , r = Math.ceil(t / 2);
                return '<span class="bar">|</span>&nbsp;' + Array(i + 1).join("&nbsp;") + e + Array(r + 1).join("&nbsp;") + '&nbsp;<span class="bar">|</span>'
            }),
            i + "<br>" + t.join("<br>") + "<br>" + i
        }
        function s() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; t.firstChild; )
                t.removeChild(t.firstChild);
            if (e.length) {
                var n = document.createDocumentFragment();
                e.forEach(function(e) {
                    var t = document.createElement("span")
                      , i = e.html;
                    p && (i = a(e)),
                    t.innerHTML = i,
                    n.appendChild(t)
                }),
                t.appendChild(n)
            }
        }
        function u() {
            e.events.on(hn.cueChanged, function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return m = t,
                s(t),
                t.length ? h ? void o() : void (v = !0) : void r()
            }).on(hn.captionsChanged, function(e) {
                return e ? (t.setAttribute("lang", e.language),
                void t.setAttribute("dir", e.rtl ? "rtl" : "ltr")) : (t.removeAttribute("dir"),
                void t.removeAttribute("lang"))
            }).on(hn.playInitiated, function() {
                h = !0,
                v && (v = !1,
                o())
            }).on(hn.pictureInPictureActivated, function() {
                r()
            }).on(hn.pictureInPictureDeactivated, function() {
                o()
            }).on(fn.reset, function() {
                h = !1,
                r()
            }).on(fn.setEffect, function(e) {
                p = "ascii" === e,
                s(m)
            })
        }
        function c() {
            i(),
            window.addEventListener("resize", i, !1),
            e.events.on([hn.enteredTinyMode, hn.enteredMiniMode, hn.enteredNormalMode], i)
        }
        function l() {
            e.events.on(hn.controlBarVisibilityChanged, function(e) {
                return e ? void t.classList.add("with-controls") : void t.classList.remove("with-controls")
            })
        }
        function d() {
            e.events.on(hn.overlayOpened, function() {
                t.classList.add("invisible")
            }).on(hn.overlayClosed, function() {
                t.classList.remove("invisible")
            })
        }
        function f() {
            e.events.on(hn.ended, function() {
                "nothing" !== e.config.embed.outro && t.classList.add("invisible")
            }).on([hn.played, hn.scrubbingStarted], function() {
                t.classList.remove("invisible")
            })
        }
        var h = !1
          , v = !1
          , p = !1
          , m = [];
        return u(),
        c(),
        l(),
        d(),
        f(),
        {}
    }
    function Se(e) {
        function t() {
            return s && s - wr <= (new Date).getTime()
        }
        function n(e) {
            var t = (new Date).getTime() + 1e3 * e
              , n = 1e3 * e - wr - 5e3;
            return l = setTimeout(function() {
                "onLine"in navigator && !navigator.onLine || (c = r(a.video.id))
            }, n),
            t
        }
        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            clearTimeout(l);
            var i = a;
            if (isNaN(e) && "string" != typeof e)
                return a = e,
                s = n(a.request.expires),
                nn.resolve({
                    old: i,
                    loaded: a
                });
            var r = (new Date).getTime()
              , o = a && a.video && a.video.id
              , u = a && a.request && a.request.session
              , c = a && a.request && a.request.referrer
              , d = a && a.embed && a.embed.player_id
              , f = a && a.embed && a.embed.on_site
              , v = a && a.embed && a.embed.context
              , p = e;
            return isNaN(e) || !function() {
                var n = a && a.player_url ? "https://" + a.player_url : ""
                  , i = window.location.search.replace("?", "").split("&").reduce(function(e, t) {
                    if (t.length > 0) {
                        var n = t.split("=")
                          , i = wn(n, 2)
                          , r = i[0]
                          , o = i[1];
                        e[r] = decodeURIComponent(o)
                    }
                    return e
                }, {})
                  , r = Object.keys(t).reduce(function(e, n) {
                    return e[n] = t[n],
                    e
                }, i)
                  , o = Object.keys(r).map(function(e) {
                    return e + "=" + encodeURIComponent(r[e])
                }).join("&");
                p = n + "/video/" + e + "/config" + (o.length > 0 ? "?" : "") + o
            }(),
            c && (p += (p.indexOf("?") === -1 ? "?" : "&") + "referrer=" + encodeURIComponent(c)),
            h(p, {
                allowErrorStatuses: !0
            }).then(function(e) {
                a = JSON.parse(e),
                a.view !== rn.error && (s = n(a.request.expires),
                u && a.video.id === o && (a.request.session = u),
                c && (a.request.referrer = c),
                d && (a.embed.player_id = d),
                f && (a.embed.on_site = 1,
                a.embed.context = v));
                (new Date).getTime() - r;
                return {
                    old: i,
                    loaded: a
                }
            })
        }
        function r() {
            clearTimeout(l);
            var e = (new Date).getTime()
              , t = a && a.request.referrer
              , i = a.request
              , r = i.signature
              , u = i.session
              , d = i.timestamp
              , f = i.expires
              , v = "https://" + a.player_url + "/video/" + a.video.id + "/config/request?session=" + u + "&signature=" + r + "&time=" + d + "&expires=" + f;
            return h(v).then(function(i) {
                a.request = JSON.parse(i),
                t && (a.request.referrer = t),
                s = n(a.request.expires);
                (new Date).getTime() - e;
                return c = null,
                o.fire(hn.requestConfigReloaded),
                a.request
            })
        }
        var o = e.events
          , a = null
          , s = null
          , u = null
          , c = null
          , l = null;
        return window.addEventListener("online", function() {
            t() && (c = r(a.video.id))
        }),
        o.on(hn.error, function(e) {
            "media-url-expired" === e && (c = r(a.video.id))
        }),
        {
            get isExpired() {
                return t()
            },
            load: function(e, t) {
                return i(e, t)
            },
            reload: function() {
                return a && a.video.id ? i(a.video.id) : nn.reject(new Error("No config loaded."))
            },
            toJSON: function() {
                return a
            },
            get config() {
                return a
            },
            set config(e) {
                a = e
            },
            verify: function() {
                return t() ? (c || (c = r()),
                c) : nn.resolve(a.request)
            },
            get _video() {
                return u
            },
            set _video(e) {
                u = e
            }
        }
    }
    function Ee(e) {
        var t = e && e.constructor
          , n = "function" == typeof t && t.prototype || kr;
        return e === n
    }
    function Te(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
    function xe(e) {
        if (!Pr(e))
            return Ar(e);
        var t = [];
        for (var n in Object(e))
            Or.call(e, n) && "constructor" != n && t.push(n);
        return t
    }
    function Le(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
    function Pe(e) {
        if (!Fr(e))
            return !1;
        var t = Ir(e);
        return t == Br || t == qr || t == Dr || t == Nr
    }
    function Ae(e) {
        return !!zr && zr in e
    }
    function Ce(e) {
        if (null != e) {
            try {
                return Xr.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
    function Oe(e) {
        if (!Jr(e) || Qr(e))
            return !1;
        var t = $r(e) ? ao : to;
        return t.test(Zr(e))
    }
    function Re(e, t) {
        return null == e ? void 0 : e[t]
    }
    function Me(e, t) {
        var n = lo(e, t);
        return co(n) ? n : void 0
    }
    function Ie(e) {
        return ea(e) && Zo(e) == ta
    }
    function Fe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= la
    }
    function De(e) {
        return null != e && ha(e.length) && !fa(e)
    }
    function Be() {
        return !1
    }
    function qe(e) {
        return _a(e) && ya(e.length) && !!Wa[ga(e)]
    }
    function Ne(e) {
        return function(t) {
            return e(t)
        }
    }
    function je(e) {
        if (null == e)
            return !0;
        if (us(e) && (ss(e) || "string" == typeof e || "function" == typeof e.splice || cs(e) || ds(e) || as(e)))
            return !e.length;
        var t = os(e);
        if (t == fs || t == hs)
            return !e.size;
        if (ls(e))
            return !rs(e).length;
        for (var n in e)
            if (ps.call(e, n))
                return !1;
        return !0
    }
    function Ve(e) {
        return function(t) {
            return an[t.mime] === e
        }
    }
    function Ue(e) {
        var t = e.fps;
        return "metadata"in e && (t = e.metadata.fps),
        t > 30
    }
    function He(e) {
        return e.quality || e.metadata.quality
    }
    function We(e) {
        return "string" != typeof e && (e = He(e)),
        parseInt(e, 10)
    }
    function ze(e) {
        return We(e) >= 720
    }
    function Ke(e) {
        var t = mn(e).filter(Ue).map(He);
        return function(e) {
            return !(t.indexOf(He(e)) !== -1 && !Ue(e))
        }
    }
    function Ge(e) {
        return "object" !== ("undefined" == typeof e ? "undefined" : gn(e)) ? 0 : "fps"in e ? e.fps : "metadata"in e && "fps"in e.metadata ? e.metadata.fps : 0
    }
    function Xe() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "desc";
        return function(t, n) {
            var i = We(t)
              , r = Ge(t)
              , o = We(n)
              , a = Ge(n);
            return "asc" === e ? i - o || r - a : o - i || a - r
        }
    }
    function Ye(e) {
        var t = He(e);
        return t = t.replace("1440p", "2K").replace("2160p", "4K")
    }
    function $e(e) {
        var t = e.files
          , n = void 0 === t ? [] : t
          , i = e.preference
          , r = void 0 === i ? "360p" : i
          , o = e.priorityOffset
          , a = void 0 === o ? 0 : o;
        n = mn(n),
        n.sort(Xe());
        var s = n.map(He);
        if (r) {
            s.indexOf(r) === -1 && (s.push(r),
            s.sort(function(e, t) {
                return We(t) - We(e)
            }));
            var u = s.indexOf(r)
              , c = s.splice(0, u);
            c.reverse(),
            s.push.apply(s, c)
        }
        return n.map(function(e) {
            return {
                id: e.id,
                src: e.url,
                mime: e.mime,
                priority: s.indexOf(e.quality) + 1 + a,
                metadata: {
                    profile: e.profile,
                    cdn: e.cdn,
                    origin: e.origin,
                    quality: e.quality,
                    fps: e.fps
                }
            }
        })
    }
    function Qe(e) {
        return e === !0 || e === !1 ? Number(e) : "null" === e ? null : e
    }
    function Je(e) {
        var t = null;
        try {
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.cookie
        } catch (e) {};
        try {
            if (t && "" !== t)
                return t.split(";").reduce(function(t, n) {
                    return n = n.trim(),
                    0 === n.indexOf(e + "=") ? decodeURIComponent(n.substr(e.length + 1)) : t
                }, null)
        } catch (e) {}
        return null
    }
    function Ze(e, t, n) {
        var i = new Date;
        i.setFullYear(i.getFullYear() + 1),
        i = i.toGMTString(),
        t = Qe(t);
        var r = e + "=" + t + ";";
        r += "expires=" + i + ";",
        r += "path=/;",
        r += "domain=" + n + ";";
        try {
            return document.cookie = r,
            !0
        } catch (e) {
            return !1
        }
    }
    function et(e) {
        return Date.now() - e
    }
    function tt(e) {
        return nt() - e
    }
    function nt() {
        return parseInt(Date.now() / 1e3, 10)
    }
    function it(e) {
        var t = e.getHours()
          , n = e.getMinutes()
          , i = t >= 12 ? "PM" : "AM";
        return t %= 12,
        t = t ? t : 12,
        n = n < 10 ? "0" + n : n,
        t + ":" + n + " " + i
    }
    function rt(e) {
        function t() {
            return Date.now ? Date.now() : (new Date).getTime()
        }
        function n() {
            return e.config.video.spatial ? "mono" !== e.config.video.spatial.stereo_mode ? 2 : 1 : 0
        }
        function i() {
            var t = e.telecine.getEffectByName("ThreeSixtyEffect");
            return Un.spatialPlayback && t ? t.isStereo() ? 2 : 1 : 0
        }
        function r() {
            h = !1,
            v = e.telecine ? e.telecine.currentTime : 0,
            m = 0,
            g = 0,
            y = 0,
            _ = !1
        }
        function o(t, n, i, r) {
            e.verifyConfig().then(function() {
                var a = n;
                a.signature = e.config.request.signature,
                a.session = e.config.request.session,
                a.time = e.config.request.timestamp,
                a.expires = e.config.request.expires;
                var s = JSON.stringify(a)
                  , u = "https://" + e.config.player_url + t;
                if (navigator.sendBeacon && navigator.sendBeacon(u, s))
                    return !0;
                var c = new XMLHttpRequest;
                return c.open("POST", u, !i),
                c.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"),
                c.withCredentials = !0,
                c.onload = function() {
                    200 !== c.status && r < 2 && setTimeout(function() {
                        o(t, n, i, r + 1)
                    }, 1e3)
                }
                ,
                c.send(s),
                c
            }).catch(function(e) {})
        }
        function a(t, r, a) {
            var s = e.telecine.currentFile || {}
              , u = s.id
              , c = void 0 === u ? 0 : u
              , l = s.mime
              , d = void 0 === l ? sn.h264 : l
              , f = s.metadata;
            f = void 0 === f ? {} : f;
            var h = f.profile
              , v = void 0 === h ? -1 : h;
            if (d === sn.dash) {
                var g = S
                  , y = g.id;
                c = void 0 === y ? 0 : y;
                var _ = g.profile;
                v = void 0 === _ ? -1 : _
            }
            e.performDelegateAction(on.playLog, function(u) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o(t, {
                    referrer: e.config.request.referrer,
                    embed: !e.config.embed.on_site,
                    context: e.config.embed.context,
                    autoplay: l.continuous ? 2 : e.config.embed.autoplay,
                    loop: e.config.embed.loop ? 1 : 0,
                    id: e.config.video.id,
                    vodId: e.config.video.vod && e.config.video.vod.id ? e.config.video.vod.id : null,
                    vodSaleId: e.config.video.vod && e.config.video.vod.sale_id ? e.config.video.vod.sale_id : null,
                    sessionTime: p(m),
                    videoShape: n(),
                    spatialPlayback: i(),
                    userId: e.config.user.id,
                    userAccountType: e.config.user.account_type,
                    userIsMod: e.config.user.mod ? 1 : 0,
                    ownerId: e.config.video.owner.id,
                    ownerAccountType: e.config.video.owner.account_type,
                    privacy: e.config.video.privacy,
                    rating: e.config.video.rating ? e.config.video.rating.id : null,
                    type: un[e.telecine.currentScanner],
                    videoFileId: Number.isInteger(Number(c)) ? c : 0,
                    delivery: an[d],
                    profileId: v,
                    quality: s.metadata ? s.metadata.quality : null,
                    duration: p(e.config.video.duration),
                    seconds: p(r),
                    isLive: E.inProgress ? 1 : 0,
                    playbackRate: e.telecine.playbackRate
                }, a)
            })
        }
        function s() {
            !_ && e.playLoggingEnabled && (_ = !0,
            a("/log/play", 0))
        }
        function u() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (e.playLoggingEnabled) {
                var o = t();
                r && g + k > o || (g = o,
                r && !e.config.request.flags.partials || h || a("/log/partial", n, i))
            }
        }
        function c(t, n) {
            if (!e.doNotTrackEnabled) {
                n = n || {};
                var i = {
                    referrer: e.config.request.referrer,
                    embed: !e.config.embed.on_site,
                    context: e.config.embed.context,
                    id: e.config.video.id,
                    vodId: e.config.video.vod && e.config.video.vod.id ? e.config.video.vod.id : null,
                    vodSaleId: e.config.video.vod && e.config.video.vod.sale_id ? e.config.video.vod.sale_id : null,
                    userId: e.config.user.id,
                    userAccountType: e.config.user.account_type,
                    ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
                    duration: p(e.config.video.duration),
                    seconds: p(e.telecine.currentTime),
                    playbackRate: e.telecine.playbackRate
                };
                for (var r in n)
                    n.hasOwnProperty(r) && (i[r] = n[r]);
                o("/log/" + t, i)
            }
        }
        function l() {
            function n() {
                var t = e.telecine.getEffectByName("ThreeSixtyEffect").currentCoordinates
                  , i = 100
                  , o = Math.round(t.lat * i) / i
                  , s = Math.round(t.long * i) / i
                  , u = {
                    sessionTime: m,
                    videoTime: e.telecine.currentTime,
                    coordinates: {
                        lat: o,
                        lon: s
                    }
                };
                r.push(u),
                setTimeout(function() {
                    a && n()
                }, l)
            }
            function i() {
                r.length && e.performDelegateAction(on.playLog, function(t) {
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o("/log/spatial", {
                        embed: !e.config.embed.on_site,
                        id: e.config.video.id,
                        context: e.config.embed.context,
                        ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
                        referrer: e.config.request.referrer,
                        vodId: e.config.video.vod && e.config.video.vod.id ? e.config.video.vod.id : null,
                        vodSaleId: e.config.video.vod && e.config.video.vod.sale_id ? e.config.video.vod.sale_id : null,
                        motionLog: JSON.stringify(r)
                    }, !1)
                })
            }
            e.events.on(hn.playProgress, function(e, n, i, r) {
                var o = Math.floor(e);
                !h && y + k < t() && (e > v && (m += (e - v) / r),
                v = e),
                o % b === 0 && u(e)
            }),
            e.events.on(hn.playbackRateChanged, function(t, n) {
                c("playback_rate_change", {
                    oldPlaybackRate: n
                }),
                u(e.telecine.currentTime)
            }),
            e.events.on(hn.playInitiated, function() {
                s()
            }),
            e.events.on(hn.paused, function(t) {
                e.telecine.ended || u(t)
            }),
            e.events.on(hn.seeked, function(e, t, n) {
                w = e,
                h || u(w)
            }),
            e.events.on(hn.scrubbingStarted, function() {
                y = t(),
                h = !0
            }),
            e.events.on(hn.scrubbingEnded, function() {
                v = e.telecine.currentTime,
                h = !1,
                u(w)
            }),
            e.events.on(hn.prefsButtonPressed, function() {
                u(e.telecine.currentTime)
            }),
            e.events.on(hn.ended, function() {
                m += e.config.video.duration - v;
                var t = !1
                  , n = !1;
                u(e.config.video.duration, t, n)
            }),
            e.events.on(hn.streamChanged, function(e) {
                S = e
            });
            var r = []
              , a = !1
              , l = 1e3;
            e.events.on(hn.spatialMotionStart, function() {
                a = !0,
                n()
            }),
            e.events.on(hn.spatialMotionEnd, function() {
                a = !1,
                i()
            }),
            e.events.on(hn.loadVideo, function() {
                i(),
                r = []
            }),
            I(function() {
                if (e.telecine && e.telecine.currentTime > 0) {
                    var t = !0
                      , n = !1;
                    u(e.telecine.currentTime, t, n),
                    i()
                }
            })
        }
        function d() {
            function t(e) {
                return function() {
                    c(e)
                }
            }
            if (!e.doNotTrackEnabled) {
                var n = [{
                    type: "share_press",
                    event: hn.shareButtonPressed
                }, {
                    type: "facebook_press",
                    event: hn.facebookButtonPressed
                }, {
                    type: "twitter_press",
                    event: hn.twitterButtonPressed
                }, {
                    type: "tumblr_press",
                    event: hn.tumblrButtonPressed
                }, {
                    type: "email_press",
                    event: hn.emailButtonPressed
                }, {
                    type: "embed_press",
                    event: hn.embedButtonPressed
                }, {
                    type: "login_success",
                    event: hn.userLoggedIn
                }, {
                    type: "airplay",
                    event: hn.airPlayActivated
                }, {
                    type: "vod_press",
                    event: hn.vodButtonPressed
                }, {
                    type: "collection_press",
                    event: hn.collectionsButtonPressed
                }, {
                    type: "email_capture_submitted",
                    event: hn.emailCaptureSubmitted
                }];
                n.forEach(function(n) {
                    e.events.on(n.event, t(n.type))
                }),
                e.events.on(hn.outroDisplayed, function(t) {
                    var n = {
                        outroType: e.config.embed.outro,
                        ownerAccountType: e.config.video.owner.account_type,
                        playerWidth: e.element.clientWidth,
                        playerHeight: e.element.clientHeight
                    };
                    t && t.length && (n.outroVideos = t.join(",")),
                    c("outro_displayed", n)
                }).on(hn.outroVideoPressed, function(t) {
                    c("outro_video_press", {
                        ownerAccountType: e.config.video.owner.account_type,
                        videoId: t
                    })
                }).on(hn.followButtonPressed, function() {
                    c("outro_follow_press", {
                        add: !e.config.user.following
                    })
                }).on(hn.outroCtaPressed, function(t) {
                    c("outro_cta_press", {
                        ownerAccountType: e.config.video.owner.account_type,
                        link: t
                    })
                }).on(hn.outroLinkPressed, function(t) {
                    c("outro_link_press", {
                        ownerAccountType: e.config.video.owner.account_type,
                        link: t
                    })
                }).on(hn.outroImagePressed, function(t) {
                    c("outro_image_press", {
                        ownerAccountType: e.config.video.owner.account_type,
                        link: t
                    })
                }).on(hn.likeButtonPressed, function() {
                    c("like_press", {
                        add: !e.config.user.liked
                    })
                }).on(hn.watchLaterButtonPressed, function() {
                    c("watch_later_press", {
                        add: !e.config.user.watch_later
                    })
                }).on(hn.popupOpened, function(e) {
                    0 === e.indexOf("login-") && c("login_attempt")
                }).on(hn.captionsChanged, function(e, t) {
                    if (!t)
                        return e ? void c("text_track_change", {
                            textTrackLanguage: e.language,
                            textTrackKind: e.kind
                        }) : void c("text_track_change")
                }).on(hn.badgePressed, function(e) {
                    1 !== e && 12 !== e || c("badge_press", {
                        badgeId: e
                    })
                }).on(hn.overlayOpened, function(e) {
                    "email-capture" === e && c("email_capture_displayed")
                }).on(hn.overlayClosed, function(e) {
                    "email-capture" === e && c("email_capture_dismissed")
                }).on(hn.cardPressed, function(t) {
                    c("card_press", {
                        ownerAccountType: e.config.video.owner.account_type,
                        cardId: t,
                        cardType: "link"
                    })
                }).on(hn.cardDisplayed, function(t, n) {
                    e.config.embed.editor || c("card_displayed", {
                        ownerAccountType: e.config.video.owner.account_type,
                        cardId: t,
                        cardType: n.url ? "link" : "text"
                    })
                })
            }
        }
        function f() {
            e.events.on(hn.configChanged, function(e) {
                e && r()
            })
        }
        var h, v, m, g, y, _, b = 30, w = 0, k = 1e3, S = {}, E = new ys(e.config.video.live_event);
        return r(),
        l(),
        d(),
        f(),
        e.events.fire(hn.statsModuleReady),
        {}
    }
    function ot(e) {
        function t(t) {
            return new nn(function(n, i) {
                var r = document.createElement("a");
                r.href = e.config.request.urls.proxy;
                var o = document.createElement("iframe");
                o.src = t,
                o.setAttribute("title", "Vimeo LocalStorage Proxy"),
                o.setAttribute("aria-hidden", "true"),
                o.setAttribute("hidden", ""),
                o.onload = function(t) {
                    var n = a(e.config.request.urls.proxy);
                    o.contentWindow.postMessage({
                        method: "ping"
                    }, n)
                }
                ,
                o.onerror = function(e) {
                    i(e)
                }
                ;
                var s = setTimeout(function() {
                    i()
                }, 1e4)
                  , u = function e(i) {
                    0 !== t.indexOf(i.origin) || "ready" !== i.data && "ping" !== i.data || (window.removeEventListener("message", e, !1),
                    clearTimeout(s),
                    n(o))
                };
                window.addEventListener("message", u, !1),
                document.body.appendChild(o)
            }
            )
        }
        function n() {
            _ && !Ss && (Ss = t(e.config.request.urls.proxy))
        }
        function i(t) {
            return Ss.then(function(n) {
                var i = a(e.config.request.urls.proxy);
                return n.contentWindow.postMessage(t, i),
                n
            }).catch(function(t) {
                e.reportError(t, {
                    extra: {
                        proxyUrl: e.config.request.urls.proxy
                    }
                })
            })
        }
        function r(t) {
            e.config.embed.on_site && window.postMessage(t, window.location.origin)
        }
        function o(t, n) {
            if (Ss) {
                var o = {
                    method: "set",
                    key: "sync_" + t,
                    val: n,
                    session: e.config.request.session
                };
                return i(o),
                void r(o)
            }
            try {
                window.localStorage.setItem("sync_" + t, JSON.stringify(n))
            } catch (e) {}
        }
        function s(t, n) {
            ks.indexOf(t) >= 0 && (e.config.request.cookie[t] = n);
            var i = [];
            ks.indexOf(t) >= 0 && null !== n && i.push(t + "=" + n);
            var r = u(ks);
            for (var o in r)
                o in r && null !== r[o] && o !== t && i.push(o + "=" + r[o]);
            Ze("player", '"' + i.join("&") + '"', e.config.request.cookie_domain)
        }
        function u(e) {
            var t = null;
            try {
                t = Je("player")
            } catch (e) {}
            if (!t)
                return null;
            t = t.substring(1, t.length - 1);
            var n = {};
            t.split("&").forEach(function(e) {
                e = e.split("="),
                n[e[0]] = Qe(decodeURIComponent(e[1] || ""))
            });
            var i = [].concat(e)
              , r = i.reduce(function(e, t) {
                if (t in n) {
                    var i = parseFloat(n[t]);
                    return e[t] = isNaN(i) || "quality" === t ? n[t] : i,
                    e
                }
                return e[t] = null,
                e
            }, {});
            return 1 === i.length ? r[e] : r
        }
        function c(e, t) {
            t = Qe(t),
            o(e, t),
            s(e, t)
        }
        function l(t, n) {
            var i = !0;
            switch (t) {
            case "sync_quality":
                e.events.fire(fn.changeQuality, n, i);
                break;
            case "sync_volume":
                e.events.fire(fn.changeVolume, n, i);
                break;
            case "sync_captions":
                if (null === n) {
                    e.events.fire(fn.turnCaptionsOff, i);
                    break
                }
                e.events.fire(fn.turnCaptionsOn, n, i);
                break;
            case "sync_login":
                d(n);
                break;
            case "sync_active":
                null !== n && n !== e.config.request.session && e.config.embed.autopause && e.events.fire(hn.becameInactive)
            }
        }
        function d(t) {
            b > 4 || (b++,
            t && !e.config.user.logged_in ? e.events.fire(hn.userLogIn) : !t && e.config.user.logged_in && e.events.fire(hn.userLoggedOut))
        }
        function f() {
            c("login", !!e.config.user.logged_in)
        }
        function h() {
            e.events.on(hn.qualityChanged, function(e, t) {
                t || c("quality", e)
            })
        }
        function v() {
            e.events.on(hn.volumeChanged, function(t, n) {
                e.config.request.cookie.volume = Qe(t),
                n || c("volume", t)
            })
        }
        function p() {
            e.events.on(hn.captionsChanged, function(t, n) {
                if (t) {
                    var i = t.language + "." + t.kind;
                    return e.config.request.cookie.captions = Qe(i),
                    void (n || c("captions", i))
                }
                e.config.request.cookie.captions = null,
                n || c("captions", null)
            })
        }
        function m() {
            e.events.on(hn.playButtonPressed, function() {
                e.config.embed.settings.background || (c("active", e.config.request.session),
                e.events.fire(hn.becameActive))
            }),
            e.events.on([hn.pauseButtonPressed, hn.ended], function() {
                u("active") === e.config.request.session && c("active", null)
            })
        }
        function g() {
            e.events.on(hn.userLoggedIn, function() {
                c("login", !0)
            })
        }
        function y() {
            return _ ? void window.addEventListener("message", function(t) {
                var n = a(e.config.request.urls.proxy);
                t.origin === n && "object" === gn(t.data) && "key"in t.data && "newValue"in t.data ? l(t.data.key, t.data.newValue) : t.origin === window.location.origin && t.data.session !== e.config.request.session && l(t.data.key, t.data.val)
            }, !1) : void window.addEventListener("storage", function(t) {
                if (0 === t.key.indexOf("sync_") && t.oldValue !== t.newValue && window.localStorage.getItem(t.key) === t.newValue)
                    try {
                        l(t.key, JSON.parse(t.newValue))
                    } catch (n) {
                        e.reportError(n, {
                            extra: {
                                key: t.key,
                                oldValue: t.oldValue,
                                newValue: t.newValue
                            }
                        })
                    }
            }, !1)
        }
        var _ = 0 !== e.config.request.urls.proxy.indexOf(window.location.origin)
          , b = 0;
        return h(),
        v(),
        p(),
        m(),
        g(),
        n(),
        y(),
        {
            reset: f
        }
    }
    function at(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
          , n = {
            feature: t,
            $deeplink_path: Ts + e,
            $always_deeplink: !0,
            ref: "player",
            context: "player"
        }
          , i = ""
          , r = [];
        for (var o in n)
            r.push(encodeURIComponent(o) + "=" + encodeURIComponent(n[o]));
        return i = r.join("&"),
        "https://bnc.lt/a/" + xs + "?" + i
    }
    function st(e, t) {
        return at("videos/" + e, t)
    }
    function ut(e) {
        e = e || {};
        var t = {};
        return e.on = function(n, i) {
            n = [].concat(n);
            for (var r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                if (!a)
                    throw new Error("Tried to listen for an undefined event.");
                t[a] || (t[a] = []),
                t[a].push(i)
            }
            return e
        }
        ,
        e.once = function(t, n) {
            function i() {
                n.apply(e.off(t, i), arguments)
            }
            return i.handler = n,
            e.on(t, i)
        }
        ,
        e.off = function(n, i) {
            n = [].concat(n);
            for (var r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                if (!a)
                    throw new Error("Tried to remove an undefined event.");
                if (a in t) {
                    var s = t[a].indexOf(i);
                    if (s === -1) {
                        for (var u = 0, c = t[a].length; u < c; u++)
                            if (t[a][u].handler === i) {
                                s = r;
                                break
                            }
                        if (s === -1)
                            return e
                    }
                    t[a].splice(s, 1)
                }
            }
            return e
        }
        ,
        e.fire = function(n) {
            if (!n)
                throw new Error("Tried to fire an undefined event.");
            if (n in t)
                for (var i = t[n].slice(0), r = 0, o = i.length; r < o; r++)
                    i[r].apply(e, i.slice.call(arguments, 1));
            return e
        }
        ,
        e
    }
    function ct(e, t, n) {
        var i = void 0;
        try {
            document.removeChild({})
        } catch (r) {
            i = Object.create(Object.getPrototypeOf(r), {
                name: {
                    value: t,
                    configurable: !0,
                    writable: !0
                },
                code: {
                    value: e,
                    configurable: !0,
                    writable: !0
                },
                message: {
                    value: n,
                    configurable: !0,
                    writable: !0
                },
                toString: {
                    value: function() {
                        return t + ": DOM Exception " + e
                    },
                    configurable: !0,
                    writable: !0
                }
            })
        }
        return Object.freeze(i)
    }
    function lt(e, t) {
        var n, i = 0;
        return n = {},
        vu(n, cu.iterator, function() {
            return this
        }),
        vu(n, "next", function() {
            if (i < e.length) {
                var n = t ? [e[i], t[i++]] : e[i++];
                return {
                    done: !1,
                    value: n
                }
            }
            return {
                done: !0
            }
        }),
        n
    }
    function dt() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return e.getFileById = Pu,
        e
    }
    function ft() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return e.item = function(e) {
            return this[e]
        }
        ,
        e.getTrackById = Pu,
        e
    }
    function ht(e, t) {
        for (var n = e, i = Array.isArray(n), r = 0, n = i ? n : n[cu.iterator](); ; ) {
            var o;
            if (i) {
                if (r >= n.length)
                    break;
                o = n[r++]
            } else {
                if (r = n.next(),
                r.done)
                    break;
                o = r.value
            }
            var a = o
              , s = _u(a, 2)
              , u = s[0]
              , c = s[1];
            if (u <= t && c >= t)
                return [u, c]
        }
        return []
    }
    function vt() {
        return "undefined" != typeof window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
    }
    function pt() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e) {
            return (e ^ (16 * Math.random() >> e) / 4).toString(16)
        })
    }
    function mt(e) {
        for (var t = window.atob(e), n = t.length, i = new Uint8Array(n), r = 0; r < n; r++)
            i[r] = t.charCodeAt(r);
        return i
    }
    function gt(e) {
        return mt(e).buffer
    }
    function yt(e) {
        for (var t = new ArrayBuffer(2 * e.length), n = new Uint16Array(t), i = 0, r = e.length; i < r; i++)
            n[i] = e.charCodeAt(i);
        return n
    }
    function _t(e) {
        return setTimeout(e, 0)
    }
    function bt(e, t, n, i) {
        var r = 0
          , o = 0
          , a = 0
          , s = 0
          , u = e
          , c = t
          , l = n / i
          , d = u / c;
        return d >= l ? (o = c,
        r = (l * c).toFixed(2)) : (r = u,
        o = (u / l).toFixed(2)),
        a = Math.max((u - r) / 2, 0),
        s = Math.max((c - o) / 2, 0),
        {
            width: r,
            height: o,
            left: a,
            top: s
        }
    }
    function wt(e) {
        var t = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/
          , n = t.exec(e)
          , i = 0;
        if ("undefined" != typeof n[8] && (i += n[8]),
        "undefined" != typeof n[7] && (i += 60 * n[7]),
        "undefined" != typeof n[6] && (i += 3600 * n[6]),
        "undefined" != typeof n[5] && (i += 86400 * n[5]),
        "undefined" != typeof n[4] && (i += 604800 * n[4]),
        "undefined" != typeof n[3] && (i += 2628e3 * n[3]),
        "undefined" != typeof n[2] && (i += 3154e4 * n[2]),
        0 !== i)
            return i
    }
    function kt() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return Object.freeze(vu({
            get length() {
                return e.length
            },
            start: function(t) {
                return Au(e, t)
            },
            end: function(e) {
                return Au(t, e)
            }
        }, cu.iterator, function() {
            return lt(e, t)
        }))
    }
    function St(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 === e.length)
            return 0;
        for (var n = 0, i = 0, r = 0; r < e.length; r++) {
            var o = t[r] || 1;
            i += o,
            n += e[r] * o
        }
        return n / i
    }
    function Et(e, t) {
        if (e.sort(),
        0 === e.length)
            return 0;
        if (t <= 0)
            return e[0];
        if (t >= 1)
            return e[e.length - 1];
        var n = e.length * t
          , i = Math.floor(n)
          , r = i + 1
          , o = n % 1;
        return r >= e.length ? e[i] : e[i] * (1 - o) + e[r] * o
    }
    function Tt(e) {
        e.sort(function(e, t) {
            return e - t
        });
        var t = Math.floor(e.length / 2);
        return e.length % 2 ? e[t] : (e[t - 1] + e[t]) / 2
    }
    function xt(e) {
        return e ? e.split("\n").reduce(function(e, t) {
            var n = t.indexOf(":")
              , i = t.substring(0, n)
              , r = t.substring(n + 1);
            return "undefined" != typeof i && "undefined" != typeof r && (e[i.trim().toLowerCase()] = r.trim()),
            e
        }, {}) : {}
    }
    function Lt(e) {
        e = e || {};
        var t = {};
        return e.on = function(n, i) {
            n = [].concat(n);
            for (var r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                if (!a)
                    throw new Error("Tried to listen for an undefined event.");
                t[a] || (t[a] = []),
                t[a].push(i)
            }
            return e
        }
        ,
        e.once = function(t, n) {
            function i() {
                n.apply(e.off(t, i), arguments)
            }
            return i.handler = n,
            e.on(t, i)
        }
        ,
        e.off = function(n, i) {
            n = [].concat(n);
            for (var r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                if (!a)
                    throw new Error("Tried to remove an undefined event.");
                if (a in t) {
                    var s = t[a].indexOf(i);
                    if (s === -1) {
                        for (var u = 0, c = t[a].length; u < c; u++)
                            if (t[a][u].handler === i) {
                                s = r;
                                break
                            }
                        if (s === -1)
                            return e
                    }
                    t[a].splice(s, 1)
                }
            }
            return e
        }
        ,
        e.fire = function(n) {
            if (!n)
                throw new Error("Tried to fire an undefined event.");
            if (n in t)
                for (var i = t[n].slice(0), r = 0, o = i.length; r < o; r++)
                    i[r].apply(e, i.slice.call(arguments, 1));
            return e
        }
        ,
        e
    }
    function Pt(e, t) {
        function n() {
            e.events.fire(hn.bufferStarted, {
                initial: !0
            }),
            he = !0,
            fe = !0
        }
        function i() {
            fe && (e.events.fire(hn.bufferEnded),
            he = !1,
            fe = !1)
        }
        function r(t) {
            Z.classList.remove("invisible"),
            J.style.backgroundImage = "none",
            e.events.fire(hn.playInitiated),
            n()
        }
        function a() {
            var t = "disable" !== e.config.video.privacy && e.config.video.spatial && Un.iOS && !Ce;
            if (t || Z.classList.remove("invisible"),
            we)
                return e.events.fire(hn.error, we),
                void d();
            if (ae = !0,
            se = !0,
            ke)
                return void d();
            if (ee.off("play", r),
            !ce) {
                if (e.config.video.spatial && Un.iOS && !Ce)
                    return Ce = !0,
                    e.events.fire(fn.showOverlay, "app-redirect", {
                        redirectUrl: e.doNotTrackEnabled ? "https://itunes.apple.com/us/app/apple-store/id425194759?mt=8" : st(e.config.video.id, "player-spatial-redirect"),
                        title: null,
                        buttonText: "Watch in the Vimeo app",
                        ignoreText: null,
                        bottomText: "360 not supported in this browser",
                        newWindow: !e.config.embed.on_site
                    }),
                    void ee.once("play", r);
                e.events.fire(hn.playInitiated),
                n(),
                ce = !0,
                ee.play(),
                !e.config.user.progress || ie || !e.config.embed.settings.playbar || e.config.embed.autoplay || e.config.embed.time || (ee.currentTime = e.config.user.progress,
                e.config.user.progress = 0)
            }
            Oe.isStarted && ee.paused && e.events.fire(hn.controlbarBufferStarted),
            "android_inline"in e.config.request.flags && Un.mobileAndroid && (re = !e.config.request.flags.android_inline),
            e.config.embed.cards && e.config.embed.cards.length && (Un.mobileAndroid || Un.iOS >= 10) && (re = !1),
            re && (Ee = !0,
            e.events.fire(fn.forceFullscreen)),
            ye && s()
        }
        function s() {
            me || ke || (he = !1,
            ge = !1,
            se && ee.paused && (Q && (ee.currentTime = Q,
            Q = null),
            ee.play()))
        }
        function c(e, t) {
            var n = e.length - 1;
            if (e.length > 1)
                for (var i = 0, r = e.length; i < r; i++)
                    if (e.start(i) <= t && e.end(i) >= t) {
                        n = i;
                        break
                    }
            return n
        }
        function l(t) {
            if (!_e && ee.buffered && ee.buffered.length > 0) {
                t = t || ee.currentTime;
                var n = c(ee.buffered, t)
                  , i = ee.buffered.end(n)
                  , r = i / ee.duration;
                if (e.events.fire(hn.loadProgress, i, ee.duration, r),
                fe && se && i === ee.duration)
                    return void s()
            }
        }
        function d() {
            J.style.backgroundImage = "url(" + J.getAttribute("data-thumb") + ")"
        }
        function f(t) {
            for (var n = t.target, i = n.activeCues, r = [], o = void 0, a = 0, s = i.length; a < s; a++)
                "" !== i[a].text.replace(/^\s+|\s+$/gm, "") && (o = document.createElement("span"),
                o.appendChild(i[a].getCueAsHTML()),
                r.push({
                    html: o.innerHTML.replace("\n", "<br>"),
                    text: i[a].text
                }));
            e.events.fire(hn.cueChanged, n, r)
        }
        function h() {
            var t = Oe.toObject();
            if (t) {
                t.appPollUrl = "https://" + e.config.vimeo_url + "/live_event/status?clip_id=" + e.config.video.id;
                var n = e.config.request
                  , i = n.signature
                  , r = n.timestamp
                  , o = n.expires;
                t.playlistRefreshUrl = "https://" + e.config.player_url + "/live/" + e.config.video.id + "/playlist/refresh?signature=" + i + "&time=" + r + "&expires=" + o,
                t.sessionRefreshUrl = "https://" + e.config.player_url + "/live/" + e.config.video.id + "/session/refresh?signature=" + i + "&time=" + r + "&expires=" + o
            }
            return t
        }
        function v() {
            var t = void 0
              , n = void 0;
            e.config.request.ab_tests && e.config.request.ab_tests.bba && (n = e.config.request.ab_tests.bba.group);
            var i = 50;
            Un.spatialPlayback && e.config.video.spatial && (i = 35);
            var r = [xc, Qc, Ju, Zc];
            ee = new vl(Z,r,{
                externalDisplays: [AirPlayExternalDisplay],
                swfScanner: {
                    swfUrl: e.config.request.urls.flideo
                },
                mediaSourceScanner: {
                    maxPreloadStreamIndex: t,
                    shouldUseBBA: n,
                    droppedFrameSwitchPercent: i
                },
                liveEvent: h(),
                tests: e.config.request.ab_tests
            }),
            Object.keys(Cu).forEach(function(t) {
                var n = Cu[t];
                "timeupdate" !== n && "progress" !== n && "suspend" !== n && "error" !== n && ee.on(n, function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.addBreadcrumb(n, t, "video event")
                })
            }),
            ee.on("scannerchange", function() {
                p(),
                setTimeout(function() {
                    e.events.fire(ee.supportsSettingVolume ? fn.enableVolume : fn.disableVolume),
                    e.events.fire(ee.supportsTextTracks ? fn.enableCaptions : fn.disableCaptions)
                }, 0),
                e.addBreadcrumb("Scanner changed to " + ee.currentScanner, {}, "video")
            }),
            ee.on("currentfilechange", function(t) {
                e.addBreadcrumb("Current file changed", {
                    id: t.id,
                    mime: t.mime,
                    src: t.src,
                    metadata: t.metadata
                }, "video"),
                t.mime === sn.hls && e.events.fire(fn.disableHd);
                var n = t.metadata.quality;
                if (t.mime === sn.dash) {
                    var i = e.config.request.files.dash.streams.map(function(e) {
                        return e.quality
                    });
                    n = O(e.config.embed.quality, i) || "auto",
                    R(n)
                }
                e.events.fire(hn.qualityChanged, n, !0)
            }),
            ee.on("streamchange", function(t) {
                var n = t.index
                  , i = t.streams
                  , r = void 0;
                r = Oe.isStarted ? i[n] : e.config.request.files.dash.streams[n],
                e.addBreadcrumb("Stream changed", r, "video"),
                e.events.fire(hn.streamChanged, r, n, i)
            }),
            ee.on("streambufferstart", function(t) {
                var n = t.hasLowerStreamIndex;
                e.addBreadcrumb("Started buffering", {
                    hasLowerStreamIndex: n
                }, "video"),
                e.events.fire(hn.ranIntoBuffer, n)
            }),
            ee.on("streambufferend", function() {
                e.addBreadcrumb("Stopped buffering", {}, "video"),
                e.events.fire(hn.playbackResumed)
            }),
            ee.on("bandwidth", function(t) {
                e.events.fire(hn.adaptiveBandwidth, t)
            }),
            ee.on("alert", function(t) {
                var n = void 0;
                switch (t) {
                case "streamstudder":
                    if (Pe)
                        return;
                    n = Mn.render("stream_studder")
                }
                y(n),
                e.addBreadcrumb("Alert shown", {
                    message: n
                }, "video")
            }),
            ee.on("cuepoint", function(t) {
                e.events.fire(hn.cuepoint, t)
            }),
            ee.on("motionstart", function() {
                e.events.fire(hn.spatialMotionStart)
            }),
            ee.on("motionend", function() {
                e.events.fire(hn.spatialMotionEnd)
            }),
            ee.on("droppedframes", function(t) {
                e.events.fire(hn.droppedFrames, t)
            }),
            ee.on("downloadend", function(t) {
                e.events.fire(hn.segmentDownloaded, t)
            }),
            ee.on("streamtargetchange", function(t) {
                var n, i = e.config.request.files.dash.streams[t.index], r = [i, t.index, t.streams];
                (n = e.events).fire.apply(n, [hn.streamTargetChange].concat(r))
            }),
            ee.on("livestreamonline", function() {
                e.events.fire(hn.liveStreamOnline)
            }),
            ee.on("livestreamoffline", function() {
                e.events.fire(hn.liveStreamOffline)
            }),
            ee.on("liverepresentationsavailable", function(t) {
                e.config.request.files.dash.streams = t.video.map(function(e) {
                    return {
                        quality: e.height + "p"
                    }
                }),
                e.events.fire(hn.liveRepresentationsAvailable, t)
            }),
            ee.on("liveeventstarted", function(t) {
                Oe.update(t),
                j(),
                Z.classList.remove("invisible"),
                e.events.fire(hn.liveEventStarted),
                Un.android || Un.iOS || ee.play()
            }),
            ee.on("liveeventended", function(t) {
                e.events.fire(hn.liveEventEnded),
                e.events.fire(hn.ended)
            }),
            ee.on("liveeventactive", function() {
                e.events.fire(hn.liveEventActive)
            }),
            e.events.fire(hn.telecineReady)
        }
        function p() {
            var t = "none";
            ("metadata" === e.config.request.flags.preload_video || re || Un.iOS >= 8) && (t = "metadata"),
            "auto" === e.config.request.flags.preload_video && (t = "metadata",
            "MediaSourceScanner" === ee.currentScanner && (t = "auto")),
            ee.preload = t,
            e.events.on(hn.mousedOver, function() {
                "metadata_on_hover" !== e.config.request.flags.preload_video || ce || e.verifyConfig().then(function() {
                    return ee.preload = "metadata",
                    !0
                }).catch(function(e) {})
            })
        }
        function m() {
            ee.on("loadedmetadata", function(t) {
                ye = !0;
                var n = ee.duration;
                isFinite(n) && n > 0 && (e.config.video.duration = n),
                e.config.video.video_width = ee.videoWidth,
                e.config.video.video_height = ee.videoHeight
            }),
            ee.on("loadeddata", function() {
                0 === ee.currentTime && ee.paused && i()
            }),
            ee.on("durationchange", function(t) {
                var n = ee.duration;
                isFinite(n) && (e.config.video.duration > 0 && (n < e.config.video.duration - 1 || n > e.config.video.duration + 1) || (e.config.video.duration = n))
            }),
            ee.on("waiting", function() {
                return "LiveScanner" === ee.currentScanner ? void n() : void (pe || n())
            }),
            ee.on("canplay", function() {
                le = !0,
                i(),
                "LiveScanner" !== ee.currentScanner && (e.config.embed.autoplay || se || ae && !ce) && s()
            }),
            ee.on("canplaythrough", function() {
                de = !0,
                i(),
                "LiveScanner" !== ee.currentScanner && (ae && !ce && s(),
                (he || se && ee.paused) && s())
            }),
            ee.on("progress", function(e) {
                l()
            })
        }
        function g() {
            e.events.on(hn.playInitiated, function() {
                t.classList.remove("invisible")
            }).on(hn.playButtonPressed, a).on(hn.pauseButtonPressed, function() {
                se = !1,
                ee.pause()
            }).on(hn.becameInactive, function() {
                window.location.search.indexOf("autopause=0") < 0 && !ee.paused && !e.config.embed.settings.background && (se = !1,
                e.events.fire(hn.pauseButtonPressed))
            }),
            ee.on("play", function(t) {
                return _e = !1,
                ce || le && de ? (Z.classList.remove("invisible"),
                void e.events.fire(hn.played, ee.currentTime)) : (e.events.fire(hn.playInitiated),
                ce = !0,
                ae = !0,
                void (se = !0))
            }),
            ee.on("pause", function(t) {
                !ce || he || me || ge || e.events.fire(hn.paused, ee.currentTime, ee.ended)
            }),
            ee.on("playing", function(t) {
                ce || (e.events.fire(hn.playInitiated),
                ce = !0),
                l(),
                ve = !0
            }),
            ee.on("timeupdate", function(t) {
                var r = ee.currentTime;
                if (ve && fe && r > 0 && (ve = !1,
                i()),
                ee.buffered.length > 0 && !fe) {
                    var o = c(ee.buffered, r)
                      , a = ee.buffered.end(o);
                    if (!Ee && r > 0 && r < ee.duration && a === r)
                        return void n()
                }
                if (!_e) {
                    var s = ee.duration
                      , u = r / s
                      , l = ee.playbackRate;
                    e.events.fire(hn.playProgress, r, s, u, l),
                    Q && r > Q && (Q = null)
                }
                te && (te.classList.add("hidden"),
                te = null)
            }),
            ee.on("ended", function(t) {
                if (!me)
                    if (e.config.embed.loop)
                        ee.play();
                    else {
                        if (Ee && e.events.fire(hn.fullscreenButtonPressed),
                        se = !1,
                        ae = !1,
                        Se)
                            return;
                        if (Oe.isStarted)
                            return;
                        e.events.fire(hn.ended, t)
                    }
            }),
            ee.on("drmauthsuccess", function(e) {
                ue = !0
            }),
            e.events.on(hn.playInitiated, function() {
                ee.once("timeupdate", function() {
                    return e.events.fire(hn.firstTimeUpdate)
                })
            }),
            e.events.on(hn.hudDisplayed, function() {
                Se = !0
            }),
            e.events.on(hn.hudHidden, function() {
                Se = !1,
                ee.ended && e.events.fire(hn.ended)
            })
        }
        function y(t) {
            ne && !e.config.embed.settings.background && (ne.message = t,
            ne.show())
        }
        function _() {
            ne = new Es(t.parentElement),
            ne.on("show", function(t) {
                e.events.fire(hn.alertVisibilityChanged, !0, t)
            }),
            ne.on("hide", function(t) {
                var n = t.target
                  , i = n && "function" == typeof n.getAttribute;
                if (i)
                    switch (n.getAttribute("data-context")) {
                    case "suggestion":
                        e.events.fire(fn.changeQuality, "auto"),
                        t = "suggestion";
                        break;
                    default:
                        t = "close"
                    }
                (i || "qualitymenuauto" === t) && (Pe = !0),
                e.events.fire(hn.alertVisibilityChanged, !1, t)
            })
        }
        function b() {
            var t = !1;
            I(function() {
                t = !0
            }),
            ee.on("error", function(n) {
                if (!t)
                    switch (e.addBreadcrumb(n.name, {
                        message: n.message
                    }, "telecine error", "error"),
                    n.name) {
                    case "BrowserNotSupported":
                        e.events.fire(hn.error, "not-supported", {
                            final: !0
                        }, "BrowserNotSupported"),
                        we = "not-supported";
                        break;
                    case "DRMFailure":
                        e.events.fire(hn.error, "drm-failure", function(t) {
                            var n = "Unable to play video."
                              , i = "Please try again."
                              , r = e.config.request.dynamic_drm_translation_map
                              , o = t.message.code;
                            return r && o && r[o] && (n = r[o].title,
                            i = r[o].msg),
                            e.addBreadcrumb("DRM failure", t, "video"),
                            {
                                title: n,
                                message: i
                            }
                        }(n));
                        break;
                    case "FilesNotPlayable":
                        e.events.fire(hn.error, "not-supported", {
                            final: !0
                        }, "FilesNotPlayable"),
                        we = "not-supported";
                        break;
                    case "TextTracksNotSupported":
                        e.events.fire(fn.disableCaptions);
                        break;
                    case "MediaSrcNotSupportedError":
                        e.events.fire(hn.error, "not-supported", {
                            final: !1
                        }, "MediaSrcNotSupportedError");
                        break;
                    case "MediaDecodeError":
                        e.events.fire(hn.error, "decode", {
                            final: !1
                        });
                        break;
                    case "MediaNetworkError":
                        e.events.fire(hn.error, "network");
                        break;
                    case "MediaUnknownError":
                        e.events.fire(hn.error, "unknown");
                        break;
                    case "FileError":
                        e.events.fire(hn.error, "telecine-file-error", {
                            final: !1
                        });
                        break;
                    case "DownloadError":
                        e.events.fire(hn.error, "telecine-download-error", {
                            final: !1
                        });
                        break;
                    case "MediaUrlExpired":
                        e.events.fire(hn.error, "media-url-expired");
                        break;
                    case "ScannerError":
                        e.events.fire(hn.error, "scanner-error", {
                            final: !1
                        })
                    }
            })
        }
        function w() {
            e.events.on(fn.changeLoop, function(t) {
                var n = !!t && (!Un.iOS || Un.iOS >= 10);
                e.config.embed.loop = n,
                ee.loop = n
            }),
            e.events.fire(fn.changeLoop, e.config.embed.loop)
        }
        function k() {
            e.events.on(hn.scrubbingStarted, function() {
                ke || (n(),
                se = !ee.paused,
                me = !0,
                ee.pause())
            }),
            e.events.on(hn.scrubbingEnded, function(e) {
                me = !1,
                e || s()
            }),
            e.events.on(fn.seek, function(t, n) {
                ke || (n || (n = (ee.duration || e.config.video.duration) * u(t, 0, 1)),
                n = u(n, 0, ee.duration || e.config.video.duration),
                ce || (e.events.fire(hn.playButtonPressed),
                ce = !0,
                ae = !0,
                se = !0),
                ee.currentTime = n)
            }),
            ee.on("seeking", function() {
                pe = !0
            }, !1),
            ee.on("seeked", function() {
                l();
                var t = ee.currentTime
                  , n = ee.duration;
                e.events.fire(hn.seeked, t, n, t / n),
                pe = !1
            }, !1),
            e.events.on(fn.setTime, function(t, n) {
                t = u(t, 0, ee.duration || e.config.video.duration),
                ee.currentTime = t
            })
        }
        function S() {
            e.events.on(fn.changeVolume, function(t, n, i) {
                i && (t += ee.volume),
                ee.volume = u(t, 0, 1),
                e.events.fire(hn.volumeChanged, u(t, 0, 1), n)
            });
            var t = e.config.request.cookie.volume;
            e.config.embed.mute && (t = 0),
            e.events.fire(fn.changeVolume, t, !0)
        }
        function E() {
            e.events.on(fn.changeQuality, function(t, n) {
                if (ee.video.currentFile.mime === sn.dash || Oe.isStarted)
                    n = !0,
                    R(t);
                else {
                    var i = mn(e.telecine.video.files).filter(function(e) {
                        return parseInt(e.metadata.quality, 10) <= parseInt(t, 10)
                    });
                    i.sort(Xe()),
                    i.length > 0 && (_e = !0,
                    ee.video.currentFile = i[0])
                }
                "auto" === t && ne.hide("qualitymenuauto"),
                e.events.fire(hn.qualityChanged, t, n)
            });
            var t = ee.playbackRate;
            ee.on("ratechange", function(n) {
                e.events.fire(hn.playbackRateChanged, ee.playbackRate, t),
                t = ee.playbackRate
            }),
            e.events.on(fn.changePlaybackRate, function(e) {
                ee.defaultPlaybackRate = e,
                ee.playbackRate = e
            }),
            e.events.on(hn.loadVideo, function() {
                ee.defaultPlaybackRate = 1,
                ee.playbackRate = 1
            })
        }
        function T() {
            function t() {
                ke = !0,
                ce && !xe && (se = se || !ee.paused,
                ee.pause(),
                e.events.fire(hn.paused, ee.currentTime))
            }
            function n() {
                ke = !1,
                se && !xe && (Ee || Te || !re || e.events.fire(fn.forceFullscreen),
                s())
            }
            function i(e, i) {
                i.isCentered() && (i.isVisible() ? t() : n())
            }
            e.events.on(hn.overlayOpened, t),
            e.events.on(hn.overlayClosed, n),
            e.events.on(hn.menuVisibilityChanged, i)
        }
        function x() {
            e.events.on(hn.popupOpened, function(e) {
                ce && !xe && (se = !ee.paused,
                ee.pause())
            }),
            e.events.on(hn.popupClosed, function(e) {
                xe || s()
            })
        }
        function L() {
            e.events.on(hn.didEnterFullscreen, function(t, n) {
                Z.classList.remove("hide-webkit-controls"),
                t && (Te = !0),
                t || (ce || Un.browser.safari || (ee.poster = J.getAttribute("data-thumb")),
                Ee = !0,
                setTimeout(function() {
                    ee.video.textTracks.forEach(function(e) {
                        "hidden" === e.mode && (e.mode = "showing")
                    })
                }, 500)),
                n || !Un.windowsPhone || Un.browser.edge || e.events.fire(fn.toggleNativeControls, !0)
            }),
            e.events.on(hn.didExitFullscreen, function(e) {
                ee.poster = "",
                e || ee.pause(),
                ce || Z.classList.add("invisible"),
                Ee = !1,
                Te = !1,
                oe && Z.classList.add("hide-webkit-controls"),
                ee.video.textTracks.forEach(function(e) {
                    "showing" === e.mode && (e.mode = "hidden")
                })
            }),
            e.events.on(hn.playInitiated, function() {
                ee.poster = ""
            })
        }
        function P() {
            e.events.on(fn.toggleNativeControls, function(e) {
                return e ? (ee.controls = !0,
                void t.classList.add("native-controls")) : (ee.controls = !1,
                void t.classList.remove("native-controls"))
            })
        }
        function A() {
            e.events.on(hn.signatureExpired, function() {
                Q = ee.currentTime
            }),
            e.events.on(hn.requestConfigReloaded, function(e) {
                j()
            }),
            e.events.on(hn.configChanged, function(e, t) {
                Oe = new ys(t.video.live_event),
                Oe.exists && ee.initLiveEvent(h()),
                j(),
                K()
            })
        }
        function C() {
            Tn(Z).on("transitionend", function(e) {
                "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && Z.classList.remove("transition")
            }, !1),
            e.events.on(fn.reset, function(t) {
                _e = !0,
                ee.paused || (ee.pause(),
                e.events.fire(hn.paused, ee.currentTime)),
                d(),
                Z.classList.add("transition"),
                Z.classList.add("invisible"),
                t && (ye = !1),
                ce = !1,
                se = !1,
                we = null,
                setTimeout(function() {
                    ee.currentTime = 0
                }, 300)
            })
        }
        function O(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return e.config.embed.on_site || Un.android || Un.iOS || Un.windowsPhone || e.config.video.vod || !t ? null : n.length && n.indexOf(t) === -1 ? null : (e.events.fire(hn.forcedQuality, t),
            t)
        }
        function R(t) {
            if ("auto" === t)
                return ee.video.currentFile.restrictedStreamIndexes = [],
                void (Ae = !1);
            var n = e.config.request.files.dash.streams.map(function(e) {
                return e.quality
            }).indexOf(t);
            n !== -1 && (e.addBreadcrumb("Switched to " + t, {}, "video"),
            ee.video.currentFile.restrictedStreamIndexes = [n],
            Ae = n)
        }
        function M() {
            var t = e.config.request.files;
            if (!t.dash)
                return null;
            var n = t.dash.default_cdn
              , i = t.dash.cdns[n].url ? t.dash.cdns[n].url : Oe.dashUrl;
            return {
                id: "dash-" + n + "-" + e.config.video.id,
                src: i,
                mime: Oe.isArchived ? sn.dash : sn.dashMpd,
                priority: 1,
                metadata: {
                    cdn: n,
                    origin: t.dash.cdns[n].origin,
                    quality: "sd"
                }
            }
        }
        function F() {
            var t = e.config.request.files;
            if (t.hls && (Un.iPhone || Un.iPad)) {
                var n = t.hls.default_cdn
                  , i = t.hls.cdns[n].url ? t.hls.cdns[n].url : Oe.hlsUrl;
                return {
                    id: "hls-" + n + "-" + e.config.video.id,
                    src: i,
                    mime: sn.hlsLive,
                    priority: 2,
                    metadata: {
                        cdn: n,
                        origin: t.hls.cdns[n].origin,
                        quality: "sd"
                    }
                }
            }
            return null
        }
        function D() {
            var e = []
              , t = M();
            t && e.push(t);
            var n = F();
            return n && e.push(n),
            e
        }
        function B() {
            if (Oe.isStarted || Oe.isArchived)
                return D();
            var t = e.config.request.files
              , n = mn(t.progressive).filter(Ke(t.progressive))
              , i = n.some(ze);
            Un.mobileAndroid && (i = !1);
            var r = "720p";
            if (i) {
                var o = mn(n).map(He);
                o.indexOf("1080p") !== -1 && o.indexOf("720p") === -1 && (r = "1080p")
            }
            var a = e.config.request.cookie.hd || e.config.video.default_to_hd ? r : "360p"
              , s = n.map(function(e) {
                return e.quality
            })
              , u = O(e.config.embed.quality, s)
              , c = e.config.request.cookie.quality || u || a
              , l = $e({
                files: t.progressive,
                preference: c,
                priorityOffset: 2
            })
              , d = e.config.request.drm && Un.browser.safari;
            if (t.hls && (Un.iPhone || Un.iPad) || d) {
                var f = t.hls.default_cdn
                  , h = t.hls.cdns[f].url;
                l.push({
                    id: "hls-" + f + "-" + e.config.video.id,
                    src: h,
                    mime: sn.hls,
                    priority: 2,
                    metadata: {
                        cdn: f,
                        origin: t.hls.cdns[f].origin,
                        quality: "sd"
                    }
                })
            }
            var v = !1;
            if (t.dash && !d) {
                for (var p in t.dash.cdns)
                    l.push({
                        id: "dash-" + p + "-" + e.config.video.id,
                        src: t.dash.cdns[p].url,
                        mime: sn.dash,
                        priority: p === t.dash.default_cdn ? 1 : 2,
                        metadata: {
                            cdn: p,
                            origin: t.dash.cdns[p].origin,
                            quality: "sd"
                        }
                    });
                v = t.dash.streams.some(ze)
            }
            return i || v || e.events.fire(fn.disableHd),
            l
        }
        function q() {
            return "text_tracks"in e.config.request ? e.config.request.text_tracks.map(function(e) {
                return {
                    id: e.id,
                    src: e.url,
                    kind: e.kind,
                    label: e.label,
                    language: e.lang
                }
            }) : []
        }
        function N() {
            var t = e.config.request.files;
            if (t.hls) {
                if (Oe.isStarted)
                    return F();
                var n = t.hls.default_cdn
                  , i = t.hls.cdns[n].url;
                return t.hls.cdns[n].captions && (i = t.hls.cdns[n].captions),
                {
                    src: i,
                    mime: sn.hls,
                    metadata: {
                        cdn: e.config.request.files.hls.cdn,
                        origin: e.config.request.files.hls.origin,
                        quality: "sd"
                    }
                }
            }
            return null
        }
        function j() {
            if (!(Oe.isPending || Oe.isActive || Oe.isEnded && !Oe.isArchived)) {
                Ce = !1;
                var t = B()
                  , n = q();
                if (ee.video && ee.video.id === "" + e.config.video.id)
                    return t.forEach(function(e) {
                        var t = ee.video.files.getFileById(e.id);
                        t && (t.src = e.src)
                    }),
                    void n.forEach(function(e) {
                        var t = ee.video.textTracks.getTrackById(e.id);
                        t && (t.src = e.src)
                    });
                var i = o(J);
                ee.video = {
                    id: e.config.video.id,
                    title: e.config.video.title,
                    subtitle: "from " + e.config.video.owner.name,
                    files: t,
                    textTracks: n,
                    externalDisplayFiles: {
                        AirPlay: N()
                    },
                    metadata: {
                        thumbnail: e.config.video.thumbs[640],
                        useHls: e.config.request.drm && Un.browser.safari,
                        drm: e.config.request.drm,
                        percentShown: wl.frustumSurfaceArea(e.config.video.spatial.fov, i.width, i.height)
                    }
                };
                var r = e.config.embed.cards && e.config.embed.cards.length && Un.iOS >= 10;
                if (r && ee.supportsPresentationMode("inline") && (ee.presentationMode = "inline"),
                0 === n.length) {
                    var a = !0;
                    return void e.events.fire(fn.turnCaptionsOff, a)
                }
                if (ee.video.textTracks.forEach(function(t) {
                    t.on("cuechange", f),
                    t.on("modechange", function(n) {
                        Ee && "showing" === t.mode && e.events.fire(hn.captionsChanged, t)
                    })
                }),
                null !== e.config.request.cookie.captions && "null" !== e.config.request.cookie.captions) {
                    var s = !0;
                    return void e.events.fire(fn.turnCaptionsOn, e.config.request.cookie.captions, s)
                }
                if (e.config.video.lang) {
                    var u = e.config.request.lang.split(/[-_]/)
                      , c = wn(u, 1)
                      , l = c[0]
                      , d = e.config.video.lang.split(/[-_]/)
                      , h = wn(d, 1)
                      , v = h[0];
                    if (l !== v) {
                        var p = e.config.request.lang + ".subtitles"
                          , m = be(p, ee.video.textTracks)
                          , g = m.track;
                        if (g) {
                            var y = !0;
                            return void e.events.fire(fn.turnCaptionsOn, p, y)
                        }
                    }
                }
                e.events.fire(fn.turnCaptionsOff)
            }
        }
        function V(e, t, n, i) {
            if (ue) {
                var r = new XMLHttpRequest;
                r.open("DELETE", e + "/plays/" + t + "/" + n + "?token=" + i, !1),
                r.send(),
                ue = !1
            }
        }
        function U() {
            e.config.embed.time > 0 && (ee.currentTime = e.config.embed.time,
            e.config.embed.time = 0)
        }
        function H() {
            e.events.on(fn.turnCaptionsOn, function(t, n) {
                if (!Le || Le.id !== t) {
                    var i = ee.video.textTracks.getTrackById(t)
                      , r = !0;
                    if (!i) {
                        var o = be(t, ee.video.textTracks);
                        i = o.track,
                        r = o.exactMatch
                    }
                    i !== Le && setTimeout(function() {
                        ee.video.textTracks.forEach(function(e) {
                            e.mode = e === i ? "hidden" : "disabled"
                        }),
                        e.events.fire(hn.captionsChanged, i, n || !r),
                        Le = i
                    }, 0)
                }
            }).on(fn.turnCaptionsOff, function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                setTimeout(function() {
                    ee.video.textTracks.forEach(function(e) {
                        e.mode = "disabled"
                    }),
                    e.events.fire(hn.cueChanged),
                    Le && (Le = null,
                    e.events.fire(hn.captionsChanged, null, t))
                }, 0)
            })
        }
        function W() {
            ee.on("externaldisplayavailable", function(t) {
                var n = t.type;
                if (!e.config.request.drm)
                    switch (n) {
                    case "AirPlay":
                        e.events.fire(hn.airPlayAvailable)
                    }
            }),
            ee.on("externaldisplayunavailable", function(t) {
                var n = t.type;
                if (!e.config.request.drm)
                    switch (n) {
                    case "AirPlay":
                        e.events.fire(hn.airPlayNotAvailable)
                    }
            }),
            ee.on("externaldisplayactivated", function(t) {
                var n = t.type;
                switch (xe = !0,
                n) {
                case "AirPlay":
                    e.events.fire(hn.airPlayActivated)
                }
            }),
            ee.on("externaldisplaydeactivated", function(t) {
                var n = t.type;
                switch (xe = !1,
                n) {
                case "AirPlay":
                    e.events.fire(hn.airPlayDeactivated)
                }
            }),
            e.events.on(hn.airPlayButtonPressed, function() {
                ee.showExternalDisplayPicker("AirPlay")
            })
        }
        function z() {
            function t() {
                return ee.supportsPresentationMode("picture-in-picture") ? void e.events.fire(hn.pictureInPictureAvailable) : void e.events.fire(hn.pictureInPictureNotAvailable)
            }
            var n = ee.presentationMode;
            ee.on("play", function() {
                return ye ? void t() : void ee.once("loadedmetadata", t)
            }),
            ee.on("presentationmodechange", function(t) {
                "inline" === n && "picture-in-picture" === t && e.events.fire(hn.pictureInPictureActivated),
                "picture-in-picture" === n && "inline" === t && e.events.fire(hn.pictureInPictureDeactivated),
                n = t,
                ee.video.textTracks.forEach(function(e) {
                    "picture-in-picture" === t && "hidden" === e.mode && (e.mode = "showing"),
                    "inline" === t && "showing" === e.mode && (e.mode = "hidden")
                })
            }),
            e.events.on(fn.activatePictureInPicture, function() {
                ee.supportsPresentationMode("picture-in-picture") && (ee.presentationMode = "picture-in-picture")
            }),
            e.events.on(fn.deactivatePictureInPicture, function() {
                ee.supportsPresentationMode("picture-in-picture") && (ee.presentationMode = "inline")
            })
        }
        function K() {
            var t = Oe.isStarted && !Un.android && !Un.iOS;
            (e.config.embed.autoplay || t) && (ae = !0,
            e.events.fire(hn.playButtonPressed))
        }
        function G() {
            e.events.on(hn.enteredTinyMode, function() {
                ie = !0
            }).on([hn.enteredMiniMode, hn.enteredNormalMode], function() {
                ie = !1
            })
        }
        function X() {
            var t = 0
              , n = null
              , i = function() {
                n || (n = e.config.embed.color),
                e.events.fire(fn.changeColor, "#46d439")
            }
              , r = function() {
                n && (e.events.fire(fn.changeColor, n),
                n = null)
            };
            e.events.on(fn.setEffect, function(n) {
                if (ee.deactivateEffects(),
                "ascii" === n || "ascii-color" === n) {
                    if (ee.supportsEffect(Lc)) {
                        ee.activateEffect(Lc, {
                            color: "ascii-color" === n,
                            fps: t || ee.video.currentFile.metadata.fps
                        });
                        try {
                            var o = e.config.request.files.dash.streams;
                            o.sort(Xe("asc"));
                            var a = e.config.request.files.dash.streams.indexOf(o[0]);
                            ee.video.currentFile.restrictedStreamIndexes = [a]
                        } catch (e) {}
                        return e.element.setAttribute("data-filter", n),
                        "ascii" === n ? void i() : void r()
                    }
                    return void e.events.fire(fn.setEffect, "none")
                }
                if ("ascii" !== n && "ascii-color" !== n) {
                    var s = [];
                    Ae !== !1 && s.push(Ae),
                    ee.video.currentFile.restrictedStreamIndexes = s
                }
                r(),
                e.element.setAttribute("data-filter", n)
            }).on(hn.streamChanged, function(e, n, i) {
                t = e.fps
            })
        }
        function Y() {
            I(function() {
                var t = e.config.request.drm;
                t && V(t.hoover_url, t.user, t.asset, t.hoover_token)
            }),
            e.events.on(hn.loadVideo, function() {
                var t = e.config.request.drm;
                t && V(t.hoover_url, t.user, t.asset, t.hoover_token)
            })
        }
        function $() {
            var t = function() {
                ke || y(Mn.render("warning_alert", {
                    strings: {
                        text: 'See a <a href="https://help.vimeo.com/hc/en-us/articles/115001878167#browsers" target="_blank">list of browsers</a> that support 360 viewing.'
                    }
                }))
            }
              , n = function() {
                ke || y(Mn.render("warning_alert", {
                    strings: {
                        text: 'Looking to watch a 360 video? See <a href="https://help.vimeo.com/hc/en-us/articles/115001878167#browsers" target="_blank">supported browsers and settings</a>.'
                    }
                }))
            };
            if (!Un.spatialPlayback)
                return void e.events.once(hn.firstTimeUpdate, function() {
                    e.config.video.spatial && t()
                });
            var i = null
              , r = function() {
                i && (ee.deactivateEffect(wl),
                i = null,
                e.events.fire(fn.toggleSpatialPlayback, i)),
                e.config.video.spatial && (e.config.request.drm || ee.supportsEffect(wl) && (i = ee.activateEffect(wl, {
                    threeUrl: e.config.request.urls.three_js,
                    fps: e.config.video.fps,
                    fieldOfView: e.config.video.spatial.fov,
                    directorTimeline: e.config.video.spatial.director_timeline,
                    projection: e.config.video.spatial.projection,
                    stereoMode: e.config.video.spatial.stereo_mode,
                    initialView: e.config.video.spatial.initial_view,
                    isMobile: Un.android,
                    dimensions: e.config.embed.on_site ? {
                        width: 1080,
                        height: 540
                    } : {
                        width: 640,
                        height: 360
                    }
                }),
                e.events.fire(fn.toggleSpatialPlayback, i)))
            };
            e.events.fire(fn.attachSpatialPlaybackEvents),
            r(),
            e.events.on(hn.configChanged, r),
            ee.on("seeked", function() {
                return e.events.fire(fn.revealSpatialControls)
            }),
            ee.on("play", function() {
                return e.events.fire(fn.revealSpatialControls)
            }),
            ee.on("cameraupdate", function(t) {
                return e.events.fire(hn.cameraUpdate, t)
            }),
            ee.on("spatialunsupported", function() {
                return i && (ee.deactivateEffect(wl),
                i = null,
                e.events.fire(fn.toggleSpatialPlayback, i)),
                ce ? void n() : void e.events.once(hn.firstTimeUpdate, function() {
                    n()
                })
            })
        }
        var Q, J = t.querySelector(".video"), Z = t.querySelector(".telecine"), ee = null, te = null, ne = null, ie = !1, re = Un.android && !Un.browser.chrome && !Un.browser.firefox && !Un.browser.opera || Un.windowsPhone || Un.iOS >= 8 && !Un.iPad, oe = Un.iOS >= 8 && !Un.iPad, ae = !1, se = !1, ue = !1, ce = !1, le = !1, de = !1, fe = !1, he = !1, ve = !1, pe = !1, me = !1, ge = !1, ye = !1, _e = !0, we = null, ke = !1, Se = !1, Ee = !1, Te = !1, xe = !1, Le = null, Pe = !1, Ae = !1, Ce = !1, Oe = new ys(e.config.video.live_event);
        return Z.classList.add("invisible"),
        oe && Z.classList.add("hide-webkit-controls"),
        v(),
        p(),
        m(),
        g(),
        _(),
        b(),
        w(),
        k(),
        S(),
        E(),
        T(),
        x(),
        L(),
        P(),
        A(),
        C(),
        H(),
        U(),
        W(),
        z(),
        G(),
        X(),
        j(),
        $(),
        Y(),
        e.ready().then(function() {
            return setTimeout(function() {
                return K()
            }, 0),
            null
        }).catch(function(e) {}),
        e.events.fire(hn.videoModuleReady),
        {
            telecine: ee
        }
    }
    function At(e) {
        function t() {
            var e = O(g.clientWidth * Un.devicePixelRatio, g.clientHeight * Un.devicePixelRatio)
              , t = e.width
              , n = e.height
              , i = T.getAttribute("data-thumb-width");
            if (t <= parseInt(i, 10) || 0 === t)
                return nn.resolve();
            var r = R({
                width: t,
                height: n,
                baseUrl: S.config.video.thumbs.base,
                webpSupport: S.config.request.flags.webp
            });
            if (T.setAttribute("data-thumb", r),
            T.setAttribute("data-thumb-width", t),
            S.config.embed.autoplay && "beginning" !== S.config.embed.outro)
                return nn.resolve();
            var o = M(r).then(function(e) {
                "none" !== T.style.backgroundImage && (T.style.backgroundImage = "url(" + e.src + ")");
                var t = S.config.video.width / S.config.video.height
                  , n = e.width / e.height;
                return (n <= .95 * t || n >= 1.05 * t) && T.classList.remove("cover"),
                T.classList.remove("live-background"),
                e
            }).catch(function(e) {
                wi.captureException(e, {
                    extra: {
                        thumbnailUrl: r
                    }
                })
            });
            return nn.race([o, new nn(function(e) {
                return setTimeout(e, 2e3)
            }
            )])
        }
        function n() {
            var e = s({
                width: S.config.video.width,
                height: S.config.video.height,
                elementWidth: g.clientWidth,
                elementHeight: g.clientHeight
            })
              , t = (e.extraWidth,
            e.extraHeight,
            e.scaleFactor);
            t > 1 ? (T.classList.add("cover"),
            x.style.webkitTransform = "scale(" + t + ")",
            x.style.transform = "scale(" + t + ")") : (T.classList.remove("cover"),
            x.style.webkitTransform = "",
            x.style.transform = "")
        }
        function i(e) {
            var t = e.old
              , n = e.loaded;
            if (!t)
                ;if (window.parent !== window) {
                var i = "Private Video on Vimeo";
                n.view !== rn.main && n.view !== rn.privateUnlocked || (i = n.video.title + " from " + n.video.owner.name + " on Vimeo"),
                document.title = i,
                history && history.replaceState && n.video && t && history.replaceState({
                    id: n.video.id
                }, "", "/video/" + n.video.id)
            }
            if (n.view !== rn.main && n.view !== rn.privateUnlocked)
                throw new Error("Config not authorized: " + n.view);
            t && t.embed && t.embed.color !== n.embed.color && k.fire(fn.changeColor, n.embed.color),
            N && N.reset(),
            (Un.mobileAndroid || Un.iPhone || Un.windowsPhone || Un.browser.bb10 || Un.iPad || Un.android) && (n.embed.autoplay = 0);
            var r = !t || !t.video || t.video.id !== n.video.id;
            return r && T.removeAttribute("data-thumb-width"),
            A = null,
            k.fire(fn.reset),
            k.fire(hn.configChanged, r, n),
            e
        }
        function r() {
            window.requestAnimationFrame(function() {
                g.classList.remove("loading")
            }),
            j()
        }
        function o(e) {
            return w.then(function() {
                if (v(e),
                T.setAttribute("data-thumb", ""),
                T.setAttribute("data-thumb-width", ""),
                T.style.backgroundImage = "",
                "function" != typeof B.authorizationHandler)
                    throw new Error("Config was not authorized.");
                return B.authorizationHandler(r)
            }).then(function(e) {
                S.config = e;
                var t = !0;
                return A = null,
                k.fire(fn.reset),
                k.fire(hn.configChanged, t, S.config),
                e
            })
        }
        function a() {
            var e = document.location.hash
              , t = f(e);
            null !== t && (S.config.embed.time = u(t, 0, S.config.video.duration),
            Un.touch || (S.config.embed.autoplay = 1),
            e.indexOf("at=") !== -1 && history && history.replaceState && history.replaceState("", "", window.location.pathname + window.location.search))
        }
        function c() {
            k.on(hn.userLogIn, function(e) {
                S.reload().then(function(t) {
                    if (!S.config.user.logged_in)
                        return k.fire(hn.loginFailure),
                        t;
                    switch (k.fire(hn.userLoggedIn, e),
                    e) {
                    case "like":
                        S.config.user.liked && k.fire(hn.liked);
                        break;
                    case "watch-later":
                        S.config.user.watch_later && k.fire(hn.addedToWatchLater);
                        break;
                    case "private":
                        k.fire(hn.privateUnlocked)
                    }
                    return t
                }).catch(function(e) {
                    wi.captureException(e)
                })
            }),
            k.on(hn.userLoggedOut, function() {
                S.reload().catch(function(e) {
                    wi.captureException(e)
                })
            })
        }
        function l() {
            S.config.video.live_event && S.config.video.live_event.status !== cn.started && T.classList.add("live-background"),
            F = t(),
            k.on([hn.playInitiated, hn.playButtonPressed], function() {
                Un.iOS && S.config.video.spatial || (T.style.backgroundImage = "none",
                T.classList.remove("live-background"))
            }),
            k.on(hn.didEnterFullscreen, function() {
                "none" === T.style.backgroundImage && "beginning" !== S.config.embed.outro || (F = t())
            });
            var e = null;
            window.addEventListener("resize", function() {
                clearTimeout(e),
                e = setTimeout(function() {
                    F = F.then(function() {
                        return t()
                    }).catch(function(e) {})
                }, 250),
                n()
            }, !1)
        }
        function d() {
            if (S.config.request.sentry)
                try {
                    !function() {
                        var e = "dev" === S.config.request.build.js ? "dev" : "production"
                          , t = {
                            session: S.config.request.session,
                            locale: S.config.request.lang,
                            git_commit: S.config.request.build.player,
                            debug_intent: S.config.request.sentry.debug_intent ? 1 : 0
                        };
                        S.config.request.ab_tests && !function() {
                            var e = S.config.request.ab_tests;
                            Object.keys(e).forEach(function(n) {
                                var i = e[n].data;
                                Object.keys(i).forEach(function(e) {
                                    t[e] = i[e]
                                })
                            })
                        }(),
                        wi.config(S.config.request.sentry.url, {
                            logger: "player-raven",
                            release: S.config.request.build.js,
                            environment: e,
                            tags: t,
                            autoBreadcrumbs: {
                                console: !1
                            },
                            includePaths: [/https?:\/\/.*vimeo\.com/],
                            ignoreErrors: ["Permission denied to access property 'toString'", 'Permission denied to access property "toString"', "The play() request was interrupted by a call to pause().", "Permission denied to access property 'href'", 'Permission denied to access property "href"', "docs-homescreen-gb-container", "Failed to load image.", 'ÐÐ±ÑÐµÐºÑ Ð½Ðµ Ð¿Ð¾Ð´Ð´ÐµÑÐ¶Ð¸Ð²Ð°ÐµÑ ÑÐ²Ð¾Ð¹ÑÑÐ²Ð¾ Ð¸Ð»Ð¸ Ð¼ÐµÑÐ¾Ð´ "endsWith"'],
                            shouldSendCallback: function(e) {
                                return !!S.config.request.sentry.enabled || !!(S.config.request.sentry.debug_enabled && e.extra && e.extra.debugLink)
                            }
                        }).install(),
                        window.addEventListener("unhandledrejection", function(e) {
                            e.reason && wi.captureException(e.reason)
                        }),
                        S.config.request.sentry.debug_intent && I(function() {
                            wi.captureMessage("Session debug", {
                                level: "info"
                            })
                        })
                    }()
                } catch (e) {}
        }
        function h(e) {
            n(),
            a(),
            c(),
            l(),
            p(e)
        }
        function v(e) {
            q || (q = new we(e),
            Object.keys(q).forEach(function(e) {
                if ("function" == typeof q[e])
                    return void Object.defineProperty(U, e, {
                        enumerable: !0,
                        value: q[e]
                    });
                var t = {
                    enumerable: !0,
                    get: q[e].get
                };
                q[e].set && (t.set = q[e].set),
                Object.defineProperty(U, e, t)
            }))
        }
        function p(e) {
            var t = S.config.embed.settings.background && (Un.iOS || Un.android);
            if (!t) {
                var n = new Pt(e,g.querySelector(".video-wrapper"));
                P = n.telecine
            }
            void new ae(e),
            void new ke(e,g.querySelector(".captions")),
            void new ws(e),
            void new rt(e),
            N = new ot(e),
            v(e)
        }
        var g = e.element
          , y = e.delegate
          , _ = void 0 === y ? {} : y
          , b = e.cssLoadedPromise
          , w = void 0 === b ? nn.resolve(null) : b
          , k = (e.name,
        oe())
          , S = new Se({
            events: k
        })
          , E = m();
        g.classList.add("player-" + E),
        g.classList.add("loading"),
        g.id || (g.id = "player" + E),
        g.innerHTML = Mn.render("outer", {
            strings: {
                back: "Back",
                close: "Close overlay"
            }
        });
        var T = g.querySelector(".video")
          , x = g.querySelector(".telecine");
        if (Un.iOS) {
            var L = document.createElement("video");
            x.appendChild(L);
            try {
                L.play(),
                L.pause()
            } catch (e) {
                wi.captureException(e)
            }
        }
        var P = null
          , A = null
          , C = null
          , F = null
          , D = null
          , B = {}
          , q = null
          , N = null
          , j = void 0
          , V = new nn(function(e, t) {
            j = e
        }
        ).then(function() {
            return k.fire(hn.ready),
            null
        })
          , U = {
            get config() {
                return S.config
            },
            set config(e) {
                S.config = e
            },
            get delegate() {
                return _
            },
            set delegate(e) {
                _ = e
            },
            ready: function(e) {
                return e ? void V.then(function() {
                    return e()
                }).catch(function(e) {
                    wi.captureException(e)
                }) : V
            },
            get sessionId() {
                return S.config.request.session
            }
        }
          , H = {
            get config() {
                return S.config
            },
            get element() {
                return g
            },
            get width() {
                return g.clientWidth
            },
            get height() {
                return g.clientHeight
            },
            get events() {
                return k
            },
            get uuid() {
                return E
            },
            get externalApi() {
                return U
            },
            get telecine() {
                return P
            },
            get doNotTrackEnabled() {
                return S.config.embed.dnt || S.config.request.flags.dnt
            },
            get playLoggingEnabled() {
                return S.config.embed.log_plays && S.config.request.flags.plays
            },
            init: function(e, t) {
                return C ? C : (B = t,
                C = S.load(e).then(i).catch(function(e) {
                    return o(H)
                }).then(function() {
                    return d(),
                    null
                }).then(function() {
                    return "function" == typeof B.initializationHandler ? nn.resolve(t.initializationHandler()) : null
                }).then(function() {
                    return h(H),
                    "function" == typeof B.postInitializationHandler ? nn.resolve(t.postInitializationHandler()) : null
                }).then(function() {
                    return nn.all([F, w])
                }).then(r).catch(function(e) {
                    wi.captureException(e)
                }))
            },
            loadVideo: function(e, n) {
                return D === e && A ? A : (k.fire(hn.loadVideo),
                D = e,
                g.classList.add("loading"),
                A = S.load(e).then(i).catch(function(e) {
                    return wi.captureException(e),
                    o(H)
                }).then(function(e) {
                    return F = t(),
                    nn.resolve(F)
                }).then(r))
            },
            performDelegateAction: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
                  , i = void 0;
                if (_ && _[e.will]) {
                    var r;
                    if (i = (r = _)[e.will].apply(r, [S.config.video.id].concat(n)),
                    i === !1)
                        return
                }
                t.apply(void 0, [S.config.video.id].concat(n, [i])),
                _ && _[e.did] && _[e.did]()
            },
            ready: function() {
                return V
            },
            verifyConfig: function() {
                return S.verify()
            },
            reportError: function(e, t) {
                return wi.captureException(e, t),
                wi.lastEventId()
            },
            reportMessage: function(e, t) {
                return wi.captureMessage(e, t),
                wi.lastEventId()
            },
            addBreadcrumb: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "player"
                  , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "info";
                wi.captureBreadcrumb({
                    message: e,
                    data: t,
                    category: n,
                    level: i
                })
            }
        };
        return H
    }
    function Ct(e) {
        if ("number" == typeof e)
            return e;
        if (xl(e))
            return Ll;
        if (Tl(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = Tl(t) ? t + "" : t
        }
        if ("string" != typeof e)
            return 0 === e ? e : +e;
        e = e.replace(Pl, "");
        var n = Cl.test(e);
        return n || Ol.test(e) ? Rl(e.slice(2), n ? 2 : 8) : Al.test(e) ? Ll : +e
    }
    function Ot(e, t, n) {
        function i(t) {
            var n = f
              , i = h;
            return f = h = void 0,
            y = t,
            p = e.apply(i, n)
        }
        function r(e) {
            return y = e,
            m = setTimeout(s, t),
            _ ? i(e) : p
        }
        function o(e) {
            var n = e - g
              , i = e - y
              , r = t - n;
            return b ? Nl(r, v - i) : r
        }
        function a(e) {
            var n = e - g
              , i = e - y;
            return void 0 === g || n >= t || n < 0 || b && i >= v
        }
        function s() {
            var e = Fl();
            return a(e) ? u(e) : void (m = setTimeout(s, o(e)))
        }
        function u(e) {
            return m = void 0,
            w && f ? i(e) : (f = h = void 0,
            p)
        }
        function c() {
            void 0 !== m && clearTimeout(m),
            y = 0,
            f = g = h = m = void 0
        }
        function l() {
            return void 0 === m ? p : u(Fl())
        }
        function d() {
            var e = Fl()
              , n = a(e);
            if (f = arguments,
            h = this,
            g = e,
            n) {
                if (void 0 === m)
                    return r(g);
                if (b)
                    return m = setTimeout(s, t),
                    i(g)
            }
            return void 0 === m && (m = setTimeout(s, t)),
            p
        }
        var f, h, v, p, m, g, y = 0, _ = !1, b = !1, w = !0;
        if ("function" != typeof e)
            throw new TypeError(Bl);
        return t = Dl(t) || 0,
        Il(n) && (_ = !!n.leading,
        b = "maxWait"in n,
        v = b ? ql(Dl(n.maxWait) || 0, t) : v,
        w = "trailing"in n ? !!n.trailing : w),
        d.cancel = c,
        d.flush = l,
        d
    }
    function Rt(e, t, n) {
        var i = !0
          , r = !0;
        if ("function" != typeof e)
            throw new TypeError(Hl);
        return Ul(n) && (i = "leading"in n ? !!n.leading : i,
        r = "trailing"in n ? !!n.trailing : r),
        Vl(e, t, {
            leading: i,
            maxWait: t,
            trailing: r
        })
    }
    function Mt(e) {
        function t() {
            Tn(window).on("resize", g)
        }
        function n(e, t) {
            return y = s(e, y),
            i(e, t)
        }
        function i(e, t) {
            return y = y.concat(a(e, o(t))),
            d(),
            p
        }
        function r(e) {
            return y = s(e, y),
            d(),
            p
        }
        function o(e) {
            return e.map(function(e) {
                return e.id = e.id || m(),
                e
            })
        }
        function a(e, t) {
            return t.map(function(t) {
                return t.group = e,
                t
            })
        }
        function s(e, t) {
            return t.filter(function(t) {
                return t.group !== e
            })
        }
        function u(e) {
            return e.map(function(e) {
                return e.id
            }).join(",")
        }
        function c(e) {
            var t = e.map(function(e) {
                return e.classNames
            });
            return t = t.reduce(function(e, t) {
                return e.concat(t)
            }, []),
            t.filter(function(e) {
                return e
            })
        }
        function l(e, t) {
            var n = [];
            for (var i in e)
                e[i] !== t[i] && (n = n.concat(i));
            return n
        }
        function d() {
            var t = y.filter(function(t) {
                return t.query.call(e)
            });
            if (u(t) !== u(_)) {
                _ = t,
                c(y).forEach(function(t) {
                    return e.classList.remove(t)
                }),
                c(_).forEach(function(t) {
                    return e.classList.add(t)
                });
                var n = _.map(function(e) {
                    return e.props
                })
                  , i = Object.assign.apply(Object, [{}].concat(n))
                  , r = l(i, b);
                b = i,
                p.fire("change", b),
                r.forEach(function(e) {
                    return p.fire("change:" + e, b)
                })
            }
        }
        function f(e) {
            return b[e]
        }
        function h() {
            return b
        }
        if (!(this instanceof Mt)) {
            var v = zl.filter(function(t) {
                return t.element === e
            })[0];
            return v || (v = new Mt(e),
            zl.push(v)),
            v
        }
        oe(this);
        var p = this
          , g = Wl(d, 200)
          , y = []
          , _ = []
          , b = {};
        return t(),
        {
            element: e,
            set: n,
            add: i,
            remove: r,
            check: d,
            prop: f,
            props: h,
            on: this.on,
            off: this.off
        }
    }
    function It(e, t) {
        function n() {
            x = r(),
            E.forEach(c),
            L(x, ".js-menuClose", g),
            Tn(window).on("resize", b)
        }
        function i() {
            Tn(window).off("resize", b)
        }
        function r() {
            var e = document.createElement("div")
              , t = {
                strings: {
                    close: "Close menu"
                }
            };
            return e.innerHTML = Mn.render("menu", t),
            e.children[0]
        }
        function a() {
            return x.classList.contains("vp-menu-center")
        }
        function s() {
            return x.classList.contains("vp-menu-carousel")
        }
        function u() {
            var e = T.length > 1 && !s();
            T.forEach(function(t) {
                t.setCollapsible(e),
                t.resetCarousel(s())
            })
        }
        function c(e) {
            T.push(e),
            x.appendChild(e.element),
            u(),
            e.on("open", d),
            e.on(["open", "close"], f),
            e.on(["openEnd", "closeEnd"], h),
            e.on("select", m)
        }
        function l(e) {
            return T.find(function(t) {
                return t.id === e
            })
        }
        function d(e) {
            T.filter(function(e) {
                return e.isOpen()
            }).forEach(function(e) {
                return e.close()
            })
        }
        function f(e) {
            A = !0,
            w()
        }
        function h(e) {
            A = !1
        }
        function v() {
            return "true" === t.getAttribute("aria-expanded")
        }
        function p(n) {
            v() || (n = n || t.contains(document.activeElement),
            t.setAttribute("aria-expanded", "true"),
            x.removeAttribute("hidden"),
            e.events.fire(hn.menuVisibilityChanged, !0, P),
            b(),
            u(),
            x.classList.remove("vp-menu-hidden"),
            window.requestAnimationFrame(function() {
                x.classList.remove("vp-menu-invisible"),
                n && S()[0].focus()
            }))
        }
        function m() {
            s() || g()
        }
        function g() {
            v() && (t.setAttribute("aria-expanded", "false"),
            e.events.fire(hn.menuVisibilityChanged, !1, P),
            x.classList.add("vp-menu-invisible"))
        }
        function y(e) {
            x.classList.add("vp-menu-hidden"),
            x.setAttribute("hidden", "")
        }
        function _(e) {
            return v() ? (g(),
            !1) : (p(e),
            !0)
        }
        function b() {
            var e = o(x)
              , t = window.getComputedStyle(x)
              , n = parseFloat(t.fontSize)
              , i = e.bottom - x.scrollHeight;
            if (i < 10) {
                var r = e.bottom - 10;
                return x.style.height = r / n + "em",
                void x.classList.add("vp-menu-scroll")
            }
            x.style.height = "auto",
            x.classList.remove("vp-menu-scroll")
        }
        function w() {
            b(),
            A && requestAnimationFrame(w)
        }
        function k() {
            Tn(x).on("transitionend", function(e) {
                this === x && "opacity" === e.propertyName && x.classList.contains("vp-menu-invisible") && y(e)
            }),
            Tn(document).on("click", function(e) {
                !v() || t.contains(e.target) || x.contains(e.target) || g()
            }),
            window.addEventListener("blur", g, !1)
        }
        function S() {
            return T.reduce(function(e, t) {
                return e.concat(t.getTabindexItems())
            }, [])
        }
        var E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
          , T = []
          , x = void 0
          , P = void 0
          , A = !1;
        return n(),
        k(),
        P = {
            element: x,
            button: t,
            isCentered: a,
            isVisible: v,
            show: p,
            hide: g,
            toggle: _,
            setPanelModes: u,
            addPanel: c,
            getPanel: l,
            getTabindexItems: S,
            destroy: i
        }
    }
    function Ft(e) {
        function t(t) {
            e.style[Un.transitionProperty + "Duration"] = t
        }
        function n(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.children.length - 1
              , r = -Math.round(t / u());
            return Math.min(Math.max(r, n), i)
        }
        function i(t) {
            Tn(e).on(Un.pointerEvents ? "pointerdown" : ["touchstart", "mousedown"], l),
            Tn(e).on("click", "a", o),
            Tn(window).on("resize", m),
            m(),
            a(t)
        }
        function r() {
            Tn(e).off(Un.pointerEvents ? "pointerdown" : ["touchstart", "mousedown"], l),
            Tn(e).off("click", "a", o),
            Tn(window).off("resize", m),
            e.style.removeProperty(Un.transformProperty)
        }
        function o() {
            return !1
        }
        function a(e) {
            "undefined" != typeof e && g(e, "0ms")
        }
        function s(e) {
            return function(t) {
                var n = t ? "on" : "off"
                  , i = {
                    pointerdown: ["pointermove", "pointerup"],
                    MSPointerDown: ["pointermove", "pointerup"],
                    touchstart: ["touchmove", "touchend"],
                    mousedown: ["mousemove", "mouseup"]
                };
                Tn(window)[n](i[e.type][0], d),
                Tn(window)[n](i[e.type][1], f)
            }
        }
        function u() {
            var t = e.children[0]
              , n = getComputedStyle(t);
            return t.offsetWidth + parseInt(n.marginLeft, 10) + parseInt(n.marginRight, 10)
        }
        function c(e) {
            var t = [e.clientX, e.clientY]
              , n = t[0]
              , i = t[1];
            if (e.targetTouches && e.targetTouches.length > 0) {
                var r = [e.touches[0].pageX, e.touches[0].pageY];
                n = r[0],
                i = r[1]
            }
            return {
                x: n,
                y: i
            }
        }
        function l(e) {
            e.stopImmediatePropagation();
            var n = c(e)
              , i = n.x
              , r = n.y;
            k.x = i - b.x,
            k.y = r - b.y,
            E = !1,
            x = s(e),
            x(!0),
            t("0ms")
        }
        function d(e) {
            var t = c(e)
              , i = t.x
              , r = t.y
              , o = .15;
            return S.x = b.x,
            S.y = b.y,
            b.x = i - k.x,
            b.y = r - k.y,
            Math.abs(b.x - S.x) >= o * Math.abs(b.y - S.y) ? (e.preventDefault(),
            E = !0,
            _.fire("touchMove"),
            T = Date.now(),
            void y(b.x)) : (x(!1),
            void v(n(b.x)))
        }
        function f(e) {
            if (e.stopImmediatePropagation(),
            x(!1),
            E) {
                e.preventDefault();
                var t = b.x - S.x
                  , i = Date.now() - T + 1;
                return b.x += 50 * t / i,
                v(n(b.x)),
                void _.fire("touchEnded")
            }
            h(e)
        }
        function h(t) {
            t.preventDefault();
            var n = Sn(t.target, e.children);
            if (n !== -1) {
                if (n !== L)
                    return void v(n);
                _.fire("tap", n)
            }
        }
        function v(e) {
            g(e),
            _.fire("slide", e)
        }
        function p(e) {
            g(w(e))
        }
        function m() {
            g(L, "0ms")
        }
        function g(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            e !== -1 && (t(n),
            b.x = -e * u(),
            y(b.x))
        }
        function y(t) {
            var i = n(t, -1, e.children.length);
            i !== L && (_.fire("focus", i),
            L = i),
            e.style[Un.transformProperty] = "translateX(" + t + "px)"
        }
        oe(this);
        var _ = this
          , b = {
            x: 0,
            y: 0
        }
          , k = {
            x: 0,
            y: 0
        }
          , S = {
            x: 0,
            y: 0
        }
          , E = void 0
          , T = void 0
          , x = void 0
          , L = 0;
        return {
            setUp: i,
            show: p,
            resize: m,
            destroy: r,
            on: this.on
        }
    }
    function Dt(e) {
        function t() {
            n(),
            A = i(),
            C = A.querySelector(".js-panelItems"),
            O = new Ft(C),
            O.on("slide", m),
            O.on("tap", g),
            L(A, ".js-panelTitleButton", p),
            L(A, "li", y),
            Tn(A).on("keydown", _),
            Tn(A).on("keypress", _),
            Tn(A).on("transitionend", function(e) {
                e.target === A && (l() ? f(e) : v(e))
            })
        }
        function n() {
            E = Object.assign(E, {
                get active() {
                    return w() ? w().label : ""
                }
            })
        }
        function i() {
            var e = document.createElement("div");
            return e.innerHTML = Mn.render("menu_list_panel", E),
            e.children[0]
        }
        function r(e) {
            var t = mn(A.querySelectorAll(".vp-panel-item"));
            return t[e] || t
        }
        function o(e) {
            e !== a() && (A.classList.toggle("vp-panel-open", !e),
            A.classList.toggle("vp-panel-collapsible", e),
            e ? C.setAttribute("hidden", "") : (C.removeAttribute("hidden"),
            A.style.removeProperty("height")))
        }
        function a() {
            return A.classList.contains("vp-panel-collapsible")
        }
        function s(e) {
            if (R = e,
            I = A.querySelector(".vp-indicator"),
            O.destroy(),
            I.classList.remove("vp-indicator-visible"),
            R) {
                var t = P.findIndex(function(e) {
                    return e.active
                });
                O.setUp(t),
                u(),
                I.classList.add("vp-indicator-visible")
            }
        }
        function u() {
            O.on("touchMove", function() {
                I.classList.add("vp-indicator-inactive")
            }),
            O.on("touchEnded", function() {
                I.classList.remove("vp-indicator-inactive")
            })
        }
        function c() {
            A.classList.add("vp-panel-pinTitle")
        }
        function l() {
            return A.classList.contains("vp-panel-open")
        }
        function d() {
            if (a()) {
                T.fire("open", M),
                e.events.fire(hn.menuPanelOpened, !0, M),
                C.removeAttribute("hidden"),
                A.classList.add("vp-panel-open");
                var t = window.getComputedStyle(A)
                  , n = parseFloat(t.fontSize);
                A.style.height = A.scrollHeight / n + "em";
                var i = Un.transitionProperty + "Delay";
                r().forEach(function(e, t) {
                    var n = 40 * t + 100;
                    e.style[i] = n + "ms",
                    e.classList.add("vp-panel-item-in")
                })
            }
        }
        function f(e) {
            T.fire("openEnd", M)
        }
        function h() {
            a() && (T.fire("close", M),
            e.events.fire(hn.menuPanelClosed, !1, M),
            A.classList.remove("vp-panel-open"),
            A.style.removeProperty("height"))
        }
        function v(e) {
            C.setAttribute("hidden", ""),
            r().forEach(function(e, t) {
                e.classList.remove("vp-panel-item-in")
            }),
            T.fire("closeEnd", M)
        }
        function p(e) {
            return e.preventDefault(),
            l() ? h() : d()
        }
        function m(e) {
            T.fire("select", P[e].id)
        }
        function g(e) {
            T.fire("select", P[e].id)
        }
        function y(e) {
            if (!R) {
                var t = Sn(e.target, r());
                T.fire("select", P[t].id)
            }
        }
        function _(e) {
            if ("keypress" === e.type && 13 === e.which || "keydown" === e.type && 32 === e.which) {
                var t = Sn(e.target, r());
                if (t !== -1)
                    return T.fire("select", P[t].id),
                    !1
            }
            return null
        }
        function b(e) {
            var t = P.findIndex(function(e) {
                return e.active
            });
            if (t !== -1) {
                P[t].active = !1;
                var n = r(t);
                n.classList.remove("vp-panel-item-on"),
                n.setAttribute("aria-checked", "false")
            }
            var i = P.findIndex(function(t) {
                return "" + t.id == "" + e
            });
            if (i !== -1) {
                P[i].active = !0;
                var o = r(i);
                o.classList.add("vp-panel-item-on"),
                o.setAttribute("aria-checked", "true");
                var a = A.querySelector(".js-panelStatText");
                a.innerHTML = P[i].label
            }
            I.classList.remove("vp-indicator-inactive")
        }
        function w() {
            return P.find(function(e) {
                return e.active
            })
        }
        function k(e) {
            if (!w() || "auto" === w().id) {
                var t = A.querySelector(".js-panelStatText");
                t.innerHTML = e
            }
        }
        function S() {
            return mn(A.querySelectorAll('.vp-panel-collapsible button[tabindex="0"], .vp-panel-open li[tabindex="0"]'))
        }
        var E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , T = oe()
          , x = E.id
          , P = E.items
          , A = void 0
          , C = void 0
          , O = void 0
          , R = !1
          , M = void 0
          , I = void 0;
        return t(),
        M = {
            id: x,
            element: A,
            setCollapsible: o,
            resetCarousel: s,
            pinTitle: c,
            isOpen: l,
            open: d,
            close: h,
            setActiveItem: b,
            setTitleStat: k,
            getTabindexItems: S,
            on: T.on,
            off: T.off
        }
    }
    function Bt(e, t, n) {
        return e = String(e),
        new Array(t - e.length + 1).join(n || "0") + e
    }
    function qt(e, t) {
        var n = Math.floor(e / 3600 % 60)
          , i = Math.floor(e / 60 % 60);
        if (e = Math.floor(e % 60),
        t) {
            var r = e + " second" + (1 === e ? "" : "s");
            return i > 0 && (r = i + " minute" + (1 === i ? "" : "s") + ", " + r),
            n > 0 && (r = n + " hour" + (1 === n ? "" : "s") + ", " + r),
            r
        }
        return (n > 0 ? n + ":" : "") + Bt(i, 2) + ":" + Bt(e, 2)
    }
    function Nt(e, t) {
        function n() {
            Ue = null,
            We = null
        }
        function i() {
            if (!We) {
                var e = o(ae).left
                  , t = parseInt(window.getComputedStyle(ae, "").borderLeftWidth, 10);
                We = e + t
            }
            return We
        }
        function r() {
            if (!Ue) {
                var e = o(ae).right
                  , t = parseInt(window.getComputedStyle(ae, "").borderRightWidth, 10);
                Ue = e - t
            }
            return Ue
        }
        function a(t) {
            var n = i()
              , o = r()
              , a = o - n
              , s = t - n;
            if (e.config.user.progress && s <= 10 && !Pe)
                return 0;
            var c = s / a;
            return u(c, 0, 1)
        }
        function s(t) {
            for (var n = ze, i = Array.isArray(n), r = 0, n = i ? n : n[Symbol.iterator](); ; ) {
                var s;
                if (i) {
                    if (r >= n.length)
                        break;
                    s = n[r++]
                } else {
                    if (r = n.next(),
                    r.done)
                        break;
                    s = r.value
                }
                var u = s
                  , c = o(u)
                  , l = c.left
                  , d = c.right;
                if (t >= l && t <= d) {
                    var f = parseFloat(u.getAttribute("data-time"));
                    return f / e.config.video.duration
                }
            }
            return a(t)
        }
        function c(t, n) {
            Pe && !Be && (n = n || e.config.video.duration * t || 0,
            window.requestAnimationFrame(function() {
                l(t, n),
                d(t, n)
            }))
        }
        function l(e, t) {
            tt.inProgress && (e = 100),
            fe.style.left = Math.min(p(100 * e), 100) + "%",
            he.innerHTML = qt(t)
        }
        function d(e, t) {
            tt.inProgress && (e = 100);
            var n = Math.min(p(100 * e), 100);
            le.style.width = n + "%",
            le.setAttribute("aria-valuenow", p(t)),
            le.setAttribute("aria-valuetext", qt(Math.round(t), !0) + " played"),
            re.setAttribute("width", n + "%")
        }
        function f(e, t) {
            tt.inProgress && (e = 100);
            var n = Math.min(p(100 * e), 100);
            ce.style.width = n + "%",
            ce.setAttribute("aria-valuenow", p(t)),
            ce.setAttribute("aria-valuetext", qt(t, !0) + " loaded"),
            ie.setAttribute("width", n + "%")
        }
        function h() {
            return Pe = !0,
            je && (qe = !1,
            t.classList.add("invisible"),
            x(),
            y()),
            te.classList.contains("state-playing") ? (e.events.fire(hn.pauseButtonPressed),
            v()) : (e.events.fire(hn.playButtonPressed),
            m()),
            !Un.android
        }
        function v() {
            Ne = !1,
            te.classList.remove("state-playing"),
            te.classList.add("state-paused");
            var e = te.getAttribute("data-title-play");
            te.setAttribute("title", e),
            te.setAttribute("aria-label", e)
        }
        function m() {
            Ne = !0,
            je && x(),
            te.classList.remove("state-paused"),
            te.classList.add("state-playing");
            var e = te.getAttribute("data-title-pause");
            te.setAttribute("title", e),
            te.setAttribute("aria-label", e)
        }
        function g() {
            qe && (Le || (Pe && De || Ce || rt) && (Ae || (!Ze && !et || Ce) && (Ce && e.config.view === rn.privateUnlocked || Me || Oe || (qe = !1,
            e.events.fire(hn.controlBarVisibilityChanged, qe),
            t.classList.add("invisible")))))
        }
        function y() {
            qe || Ce || (t.classList.remove("hidden"),
            t.removeAttribute("hidden"),
            setTimeout(function() {
                qe = !0,
                e.events.fire(hn.controlBarVisibilityChanged, qe),
                t.classList.remove("invisible")
            }, 0))
        }
        function _(e) {
            return it.push(e),
            se.appendChild(e.element),
            e
        }
        function b(e) {
            it = it.filter(function(t) {
                return t !== e
            }),
            se.removeChild(e.element),
            e.destroy()
        }
        function w(t) {
            var n = [];
            "text_tracks"in e.config.request && (e.config.request.text_tracks.forEach(function(e) {
                var t = "CC" === e.label.substring(e.label.length - 2)
                  , i = "captions" !== e.kind || t ? "" : " CC";
                n.push({
                    label: e.label + i,
                    id: "" + e.id,
                    active: Qe === "" + e.id
                })
            }),
            n.push({
                label: "None",
                id: "off",
                active: null === Qe
            }));
            var i = new Dt(e,{
                items: n,
                id: "cc",
                title: "Closed Captions"
            });
            i.on("select", function(t) {
                return "off" === t ? void e.events.fire(fn.turnCaptionsOff) : void e.events.fire(fn.turnCaptionsOn, t)
            });
            var r = new It(e,t,[i]);
            return r
        }
        function k() {
            window.requestAnimationFrame(function() {
                l(0, e.config.video.duration),
                d(0, 0),
                f(0, 0)
            })
        }
        function S() {
            Pe = !1,
            Ae = !1,
            Oe = !1,
            Ie = !1,
            Be = !1,
            Le = !1,
            De = !1,
            $e = !0,
            ke && (b(ke),
            ke = null),
            Ge && (b(Ge),
            Ge = null)
        }
        function E() {
            if (!e.config.embed.settings.custom_logo)
                return null;
            var t = e.config.embed.settings.custom_logo
              , n = t.img;
            return Un.devicePixelRatio >= 2 && (n = n.replace(/(mw|mh)=(\d+)/g, function(e, t, n) {
                return t + "=" + 2 * parseInt(n, 10)
            })),
            {
                showLink: null !== t.url,
                url: t.url,
                img: n,
                sticky: t.sticky,
                width: t.width,
                height: t.height
            }
        }
        function T() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (ye) {
                var t, n = 1 / _e.length, i = e / n, r = Math.ceil(i), o = i % 1;
                o <= .33 && (t = "fill1"),
                o > .33 && o <= .66 && (t = "fill2"),
                _e.forEach(function(e, n) {
                    return e.classList.remove("fill0"),
                    e.classList.remove("fill1"),
                    e.classList.remove("fill2"),
                    n === r - 1 && o && o <= .66 ? void e.classList.add(t) : void (n > r - 1 && e.classList.add("fill0"))
                }),
                ye.setAttribute("aria-valuenow", e.toFixed(3)),
                ye.setAttribute("aria-valuetext", Math.round(100 * e) + "%")
            }
        }
        function x() {
            if (e.config.view === rn.main || e.config.view === rn.privateUnlocked) {
                var n = e.config.embed.settings
                  , i = {
                    show: n.logo,
                    showLink: !!e.config.video.url,
                    url: e.config.video.url
                }
                  , r = E();
                if (e.config.embed.settings.watch_trailer && !Pe && !Ne && !e.config.embed.autoplay && e.config.embed.on_site)
                    return void P(i, r);
                var o = !e.telecine || e.telecine.supportsSettingVolume
                  , a = !e.telecine || e.telecine.supportsTextTracks
                  , s = !e.telecine || e.telecine.supportsPlaybackRate
                  , u = "text_tracks"in e.config.request && e.config.request.text_tracks.length
                  , c = {
                    targetBlank: 0 === e.config.embed.on_site,
                    playState: Ne ? "playing" : "paused",
                    volume: o && n.volume,
                    ccButton: a && u,
                    ccOn: null !== Qe,
                    prefsButton: $e || s && e.config.embed.settings.speed,
                    airplayButton: Un.airPlay,
                    stereoscopicButton: "disable" !== e.config.video.privacy && Un.stereoscopic && e.config.video.spatial,
                    fullscreenButton: n.fullscreen,
                    vimeoLogo: i,
                    duration: qt(e.config.video.duration),
                    rawDuration: e.config.video.duration,
                    strings: {
                        play: "Play",
                        pause: "Pause",
                        loadedBar: "loaded",
                        playedBar: "played",
                        volume: "Volume (use arrow keys to change)",
                        captions: "Choose captions",
                        prefs: "Select video quality or speed",
                        effect: "Choose an effect to apply to the video",
                        airPlay: "Choose an AirPlay device",
                        airPlayOff: "Turn off AirPlay",
                        pipEnter: "Enter Picture-in-Picture",
                        pipReturn: "Exit Picture-in-Picture",
                        fullscreen: "Fullscreen",
                        enterFullscreen: "Enter full screen",
                        exitFullscreen: "Exit full screen",
                        watchOnVimeo: "Watch on vimeo.com",
                        stereoscopic: "Enable stereoscopic playback",
                        stereoscopicOff: "Disable stereoscopic playback"
                    }
                };
                if (r && (c.customLogo = r),
                t.classList.remove("trailer"),
                je = !1,
                t.innerHTML = Mn.render("controlbar", c),
                te = t.querySelector(".play"),
                ne = te.querySelector(".buffer"),
                ie = te.querySelector(".loaded"),
                re = te.querySelector(".played"),
                oe = t.querySelector(".play-bar"),
                ae = t.querySelector(".progress"),
                se = t.querySelector(".js-menubar"),
                ue = oe.querySelector(".buffer"),
                ce = oe.querySelector(".loaded"),
                le = oe.querySelector(".played"),
                de = oe.querySelector(".cuepoints"),
                fe = t.querySelector(".timecode"),
                he = fe.querySelector(".box"),
                ve = t.querySelector(".ghost-timecode"),
                pe = ve.querySelector(".box"),
                me = t.querySelector(".thumb-preview"),
                ge = t.querySelector(".thumb"),
                ye = t.querySelector(".volume"),
                ye && (_e = mn(ye.querySelectorAll("div")),
                T(e.config.request.cookie.volume)),
                we = t.querySelector(".play-bar .cc"),
                be = t.querySelector(".js-prefs"),
                Je = t.querySelector(".effect"),
                Se = t.querySelector(".pip"),
                Un.airPlay && (Ee = t.querySelector(".airplay")),
                Un.stereoscopic && e.config.video.spatial && (Te = t.querySelector(".stereoscopic")),
                xe = t.querySelector(".fullscreen"),
                Ae = !1,
                Pe || $(),
                qe && e.events.fire(hn.controlBarVisibilityChanged, qe),
                rt && g(),
                tt.inProgress) {
                    var l = t.querySelector(".live");
                    l.style.display = "block";
                    var d = l.querySelector(".circle");
                    nt ? (d.classList.remove("offline"),
                    d.classList.add("online"),
                    te.classList.remove("hidden"),
                    be && be.classList.remove("hidden")) : (d.classList.add("offline"),
                    d.classList.remove("online"),
                    te.classList.add("hidden"),
                    be && be.classList.add("hidden")),
                    Ne ? fe.style.display = "block" : fe.style.display = "none",
                    he.style.cursor = "default",
                    ae.classList.add("disabled")
                }
            }
        }
        function P(n, i) {
            t.classList.add("trailer");
            var r = {
                vimeoLogo: n,
                text: e.config.video.vod.button_text || "Watch Trailer",
                strings: {
                    playTrailer: "Play Trailer",
                    watchOnVimeo: "Watch on vimeo.com"
                }
            };
            i && (r.customLogo = i),
            t.innerHTML = Mn.render("controlbar_trailer", r),
            te = t.querySelector(".play"),
            je = !0
        }
        function A() {
            L(t, ".play, .replay", h),
            e.events.on([hn.playInitiated, hn.playButtonPressed], m),
            e.events.on([hn.pauseButtonPressed, hn.paused], v),
            e.events.on(hn.error, function(e) {
                "telecine-file-error" !== e && v()
            }),
            e.events.on(hn.played, function() {
                m()
            }),
            e.events.on(hn.ended, function() {
                Be = !1,
                v(),
                c(1)
            }),
            e.events.on(hn.overlayOpened, function(e) {
                "notsupported" === e && v()
            })
        }
        function C() {
            e.events.on(hn.loadProgress, function(e, t, n) {
                Le || window.requestAnimationFrame(function() {
                    f(n, e)
                })
            })
        }
        function O() {
            e.events.on([hn.bufferStarted, hn.controlbarBufferStarted], function() {
                ue.classList.remove("hidden"),
                ce.classList.add("hidden"),
                tt.inProgress && le.classList.add("hidden"),
                ne.setAttribute("class", ne.getAttribute("class").replace(/\s+hidden/, "")),
                Me = !0,
                rt || y()
            }),
            e.events.on([hn.bufferEnded, hn.controlbarBufferEnded], function() {
                ue.classList.add("hidden"),
                ce.classList.remove("hidden"),
                tt.inProgress && le.classList.remove("hidden"),
                ne.setAttribute("class", ne.getAttribute("class") + " hidden"),
                Me = !1
            })
        }
        function R() {
            function n(n) {
                if (!n.button || 2 !== n.button) {
                    e.element.classList.add("scrubbing"),
                    e.events.fire(hn.scrubbingStarted);
                    var a = n.type;
                    if ("pointerdown" === a || "MSPointerDown" === a) {
                        o = n.pointerId;
                        try {
                            n.target.msSetPointerCapture ? n.target.msSetPointerCapture(o) : n.target.setPointerCapture(o)
                        } catch (e) {}
                        Tn(t).on("pointermove", ".progress", i).on("pointerup", ".progress", r)
                    } else
                        "touchstart" === a ? Tn(t).on("touchmove", i).on("touchend", r) : Tn(document).on("mousemove", i).on("mouseup", r);
                    var u = n.clientX;
                    n.targetTouches && n.targetTouches.length > 0 && (u = n.targetTouches[0].clientX,
                    n.preventDefault());
                    var f = s(u)
                      , h = null;
                    if (Pe)
                        c(f);
                    else {
                        var v = e.config.video.duration * f;
                        l(f, v),
                        d(f, v),
                        Be = !0
                    }
                    return e.events.fire(fn.seek, f, h),
                    !1
                }
            }
            function i(t) {
                if (Be = !1,
                o === t.pointerId && t.isPrimary !== !1) {
                    var n = t.clientX;
                    t.targetTouches && t.targetTouches.length > 0 && (n = t.targetTouches[0].clientX,
                    t.preventDefault());
                    var i = s(n);
                    c(i),
                    e.events.fire(fn.seek, i)
                }
            }
            function r(n) {
                var o = n.type;
                "pointerup" === o || "MSPointerUp" === o ? Tn(t).off("pointermove", ".progress", i).off("pointerup", ".progress", r) : "touchend" === n.type ? Tn(t).off("touchmove", i).off("touchend", r) : Tn(document).off("mousemove", i).off("mouseup", r),
                e.events.fire(hn.scrubbingEnded),
                e.element.classList.remove("scrubbing")
            }
            e.events.on(hn.playProgress, function(t, n, i) {
                Be && (0 === e.config.embed.time || e.config.embed.time > 0 && t >= e.config.embed.time) && (Be = !1),
                Oe || c(i, t)
            }),
            e.events.on(hn.scrubbingStarted, function(e) {
                Oe = !0,
                Re = e
            }),
            e.events.on(hn.scrubbingEnded, function() {
                Oe = !1,
                Re = !1
            });
            var o;
            e.events.on(hn.seeked, function(e, t, n) {
                Re && c(n)
            }),
            tt.exists && !tt.isEnded || (Tn(t).on(Un.pointerEvents ? "pointerdown" : ["touchstart", "mousedown"], ".progress", n),
            e.events.on(fn.setTime, function(t, n) {
                t = u(t, 0, e.config.video.duration),
                n || (n = t / e.config.video.duration),
                window.requestAnimationFrame(function() {
                    l(n, t),
                    d(n, t)
                })
            }))
        }
        function I() {
            function n() {
                return g || (g = e.verifyConfig().then(function(e) {
                    return M(e.thumb_preview.url)
                })),
                g.then(function(t) {
                    var n = e.config.request.thumb_preview;
                    return ge.style.backgroundImage || (ge.style.width = n.frame_width / 2 + "px",
                    ge.style.height = n.frame_height / 2 + "px",
                    ge.style.backgroundImage = "url(" + n.url + ")",
                    ge.style.backgroundSize = n.width / 2 + "px " + n.height / 2 + "px"),
                    t
                })
            }
            function s(t) {
                if (t.target === oe) {
                    var n = a(t.clientX);
                    c(n),
                    e.events.fire(fn.seek, n)
                }
            }
            function u(e) {
                return ve.classList.contains("hidden") ? e : (me.classList.remove("hidden"),
                window.requestAnimationFrame(function() {
                    window.requestAnimationFrame(function() {
                        me.classList.remove("invisible")
                    })
                }),
                e)
            }
            function l(t) {
                Fe || Ie || (ve.classList.remove("hidden"),
                Fe = !0,
                h(t),
                window.requestAnimationFrame(function() {
                    window.requestAnimationFrame(function() {
                        ve.classList.remove("invisible")
                    })
                }),
                e.config.request.thumb_preview && y && n().then(u).catch(function() {}),
                Tn(oe).on("click", s))
            }
            function d(t) {
                var n = e.config.video.duration / e.config.request.thumb_preview.frames
                  , i = Math.min(e.config.request.thumb_preview.frames - 1, Math.ceil(t / n))
                  , r = i % e.config.request.thumb_preview.columns
                  , o = Math.floor(i / e.config.request.thumb_preview.columns)
                  , a = -(r * e.config.request.thumb_preview.frame_width / 2)
                  , s = -(o * e.config.request.thumb_preview.frame_height / 2);
                return [a, s]
            }
            function f(e) {
                for (var t = ze, n = Array.isArray(t), i = 0, t = n ? t : t[Symbol.iterator](); ; ) {
                    var r;
                    if (n) {
                        if (i >= t.length)
                            break;
                        r = t[i++]
                    } else {
                        if (i = t.next(),
                        i.done)
                            break;
                        r = i.value
                    }
                    var a = r
                      , s = o(a)
                      , u = s.left
                      , c = s.right
                      , l = s.width;
                    if (e >= u && e <= c)
                        return {
                            clientX: u + l / 2,
                            snappedTo: a
                        }
                }
                return {
                    clientX: e,
                    snappedTo: null
                }
            }
            function h(t) {
                if (e.config.request.thumb_preview && null === y) {
                    var i = o(ae).width
                      , s = document.querySelector(".player").clientHeight
                      , c = 215
                      , l = 185;
                    if (y = s >= c && i >= l,
                    !y)
                        return void me.classList.add("hidden");
                    n().then(u).catch(function() {})
                }
                Fe && !function() {
                    var i = f(t.clientX, ze)
                      , o = i.clientX
                      , s = i.snappedTo
                      , u = a(o)
                      , c = e.config.video.duration * u;
                    ze.forEach(function(e) {
                        return e.classList.toggle("active", e === s)
                    }),
                    e.config.request.thumb_preview && y && n().then(function(e) {
                        var t = d(c)
                          , n = wn(t, 2)
                          , i = n[0]
                          , r = n[1];
                        return window.requestAnimationFrame(function() {
                            ge.style.backgroundPosition = i + "px " + r + "px"
                        }),
                        e
                    }).catch(function() {}),
                    window.requestAnimationFrame(function() {
                        pe.innerHTML = qt(c);
                        var e = (100 * u).toFixed(3);
                        ve.style.left = e + "%",
                        p(u),
                        t.clientX > r() + 10 && !me.contains(document.elementFromPoint(t.clientX, t.clientY)) && m()
                    })
                }()
            }
            function v() {
                var e = o(te).left
                  , t = o(oe).right
                  , n = o(me).width
                  , a = e + Math.ceil(n / 2)
                  , s = t - Math.ceil(n / 2)
                  , u = i()
                  , c = r()
                  , l = c - u
                  , d = (a - u) / l
                  , f = (s - u) / l;
                return [d, f]
            }
            function p(e) {
                var t = v()
                  , n = wn(t, 2)
                  , i = n[0]
                  , r = n[1]
                  , o = Math.max(i, Math.min(r, e))
                  , a = (100 * o).toFixed(3);
                me.style.left = a + "%"
            }
            function m() {
                ve && (ve.classList.add("invisible"),
                me.classList.add("invisible")),
                Fe = !1,
                Tn(oe).off("click", s)
            }
            var g = void 0
              , y = null;
            tt.exists && !tt.isEnded || Tn(t).on("mouseenter", ".progress", l).on("mousemove", ".play-bar", h).on("mouseleave", ".play-bar", m),
            Tn(t).on("transitionend", ".ghost-timecode", function(e) {
                "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (ve.classList.add("hidden"),
                me.classList.add("hidden"))
            }, !1),
            e.events.on(hn.mousedOut, m),
            e.events.on(hn.configChanged, function() {
                g = null
            })
        }
        function F() {
            function n(e) {
                Qe = e,
                ke && ke.getPanel("cc") && (ke.getPanel("cc").setActiveItem(e),
                setTimeout(function() {
                    ke.hide()
                }, 100)),
                we && (we.classList.add("on"),
                we.classList.remove("off"))
            }
            function i() {
                Qe = null,
                ke && ke.getPanel("cc") && (ke.getPanel("cc").setActiveItem("off"),
                setTimeout(function() {
                    ke.hide()
                }, 100)),
                we && (we.classList.add("off"),
                we.classList.remove("on"))
            }
            L(t, ".cc", function() {
                e.events.fire(hn.ccButtonPressed)
            }),
            e.events.on(hn.ccButtonPressed, function(e) {
                return ke ? void ke.toggle(e) : (ke = _(w(we, oe)),
                void ke.show(e))
            }),
            e.events.on(hn.captionsChanged, function(e) {
                return e ? void n(e.id) : void i()
            }).on(hn.controlBarVisibilityChanged, function(e) {
                e || ke && ke.hide()
            }).on([fn.enableCaptions, fn.disableCaptions], function() {
                x()
            })
        }
        function D() {
            function n() {
                if (e.telecine.video.currentFile.mime === sn.dash) {
                    var t = e.config.request.files.dash.streams
                      , n = mn(t).sort(Xe()).filter(Ke(t)).map(function(e) {
                        var t = He(e);
                        return {
                            id: t,
                            label: Ye(e),
                            active: o === t
                        }
                    });
                    return n.unshift({
                        id: "auto",
                        label: "Auto",
                        active: !o || "auto" === o
                    }),
                    n
                }
                var i = e.telecine.video.files;
                return mn(i).filter(Ve("progressive")).filter(Ke(i)).sort(Xe()).map(function(e) {
                    return {
                        label: He(e),
                        id: He(e),
                        active: o === e.metadata.quality
                    }
                })
            }
            function i(e) {
                var t = e.sort(Xe()).map(function(e) {
                    var t = e + "p"
                      , n = t;
                    return {
                        id: t,
                        label: n,
                        active: o === t
                    }
                });
                return t.unshift({
                    id: "auto",
                    label: "Auto",
                    active: !o || "auto" === o
                }),
                t
            }
            function r() {
                function t() {
                    l.setPanelModes(),
                    e.events.fire(hn.menuCentered, l.isCentered(), l)
                }
                var i = [];
                if ($e) {
                    var r = new Dt(e,{
                        id: "quality",
                        title: "Quality",
                        items: s || n()
                    });
                    r.on("select", function(t) {
                        e.events.fire(fn.changeQuality, t)
                    }),
                    a && r.setTitleStat(a),
                    r.pinTitle(),
                    i.push(r)
                }
                var o = e.telecine.supportsPlaybackRate;
                if (o && e.config.embed.settings.speed) {
                    var u = ot.map(function(t) {
                        return t.active = t.id === e.telecine.playbackRate,
                        t
                    })
                      , c = new Dt(e,{
                        id: "speed",
                        title: "Speed",
                        items: u
                    });
                    c.on("select", function(t) {
                        e.events.fire(fn.changePlaybackRate, t)
                    }),
                    c.pinTitle(),
                    i.push(c)
                }
                var l = new It(e,be,i)
                  , d = 415
                  , f = Mt(l.element);
                return f.on("change", t),
                f.set("menu", [{
                    query: function() {
                        return e.width < d
                    },
                    classNames: "vp-menu-center"
                }, {
                    query: function() {
                        return e.width < d || Un.touch
                    },
                    classNames: "vp-menu-carousel"
                }]),
                l
            }
            var o = void 0
              , a = void 0
              , s = null;
            L(t, ".js-prefs", function() {
                e.events.fire(hn.prefsButtonPressed)
            }),
            e.events.on(hn.prefsButtonPressed, function(e) {
                if (be) {
                    if (!Ge)
                        return Ge = _(r()),
                        void Ge.show(e);
                    Ge.toggle(e)
                }
            }),
            e.events.on(hn.qualityChanged, function(e) {
                o = e,
                Ge && Ge.getPanel("quality") && Ge.getPanel("quality").setActiveItem(e)
            }),
            e.events.on(hn.streamChanged, function(e) {
                var t = e.quality || e.height + "p";
                a = t,
                Ge && Ge.getPanel("quality") && Ge.getPanel("quality").setTitleStat(Ye(e))
            }),
            e.events.on(hn.playbackRateChanged, function(e) {
                Ge && Ge.getPanel("speed") && Ge.getPanel("speed").setActiveItem(e)
            }),
            e.events.on(hn.liveRepresentationsAvailable, function(e) {
                var t = e.video.map(function(e) {
                    return e.height.toString()
                });
                o = null,
                s = i(t),
                Ge && (b(Ge),
                Ge = null)
            })
        }
        function B() {
            var n = document.createElement("a");
            if (n.style.cssText = "-moz-filter:blur(2px);-webkit-filter:blur(2px);filter:blur(2px);",
            !(n.style.length < 1)) {
                var i = null
                  , r = function() {
                    var t = [{
                        label: "Soporific",
                        id: "aden"
                    }, {
                        label: "Escutcheon",
                        id: "earlybird"
                    }, {
                        label: "Pluvious",
                        id: "hudson"
                    }, {
                        label: "Moribund",
                        id: "inkwell"
                    }, {
                        label: "Fecundity",
                        id: "mayfair"
                    }, {
                        label: "Jejune",
                        id: "toaster"
                    }, {
                        label: "None",
                        id: "none",
                        active: !0
                    }]
                      , n = Un.browser.safari
                      , i = e.telecine.supportsEffect(Lc)
                      , r = an[e.telecine.video.currentFile.mime]
                      , o = "dash" === r;
                    return !n && o && i && t.unshift({
                        label: "ASCII",
                        id: "ascii"
                    }),
                    t
                };
                L(t, ".effect", function() {
                    return e.events.fire(hn.effectButtonPressed)
                }),
                e.events.on(hn.effectButtonPressed, function(t) {
                    if (Je.classList.remove("hidden"),
                    !i) {
                        var n = new Dt(e,{
                            id: "effect",
                            title: "Effect",
                            items: r()
                        });
                        return n.on("select", function(t) {
                            return e.events.fire(fn.setEffect, t)
                        }),
                        i = _(new It(e,Je,[n])),
                        void i.show(t)
                    }
                    i.toggle(t)
                }),
                e.events.on(fn.setEffect, function(e) {
                    return i.getPanel("effect").setActiveItem(e),
                    "none" === e ? (Je.classList.add("off"),
                    void Je.classList.remove("on")) : (Je.classList.add("on"),
                    void Je.classList.remove("off"))
                }),
                e.events.on(hn.ready, function() {
                    e.telecine.on("scannerchange", function() {
                        i && (b(i),
                        i = null),
                        Ge && (b(Ge),
                        Ge = null)
                    })
                })
            }
        }
        function q() {
            L(t, ".pip", function() {
                return "picture-in-picture" === e.telecine.presentationMode ? void e.events.fire(fn.deactivatePictureInPicture) : void e.events.fire(fn.activatePictureInPicture)
            }),
            e.events.on(hn.pictureInPictureAvailable, function() {
                Se && (Se.classList.remove("hidden"),
                Se.hidden = !1,
                n())
            }).on(hn.pictureInPictureNotAvailable, function() {
                Se && (Se.classList.add("hidden"),
                Se.hidden = !0,
                n())
            }).on(hn.pictureInPictureActivated, function() {
                et = !0,
                Se && (Se.classList.add("return"),
                Se.classList.remove("enter"),
                Se.setAttribute("title", Se.getAttribute("data-title-return")))
            }).on(hn.pictureInPictureDeactivated, function() {
                et = !1,
                Se && (Se.classList.add("enter"),
                Se.classList.remove("return"),
                Se.setAttribute("title", Se.getAttribute("data-title-enter")))
            })
        }
        function N() {
            Un.airPlay && (L(t, ".airplay", function() {
                e.events.fire(hn.airPlayButtonPressed)
            }),
            e.events.on(hn.airPlayAvailable, function() {
                Ee && (Ee.classList.remove("hidden"),
                Ee.hidden = !1,
                n())
            }).on(hn.airPlayNotAvailable, function() {
                Ee && (Ee.classList.add("hidden"),
                Ee.hidden = !0,
                n())
            }).on(hn.airPlayActivated, function() {
                Ze = !0,
                Ee && (Ee.classList.remove("off"),
                Ee.classList.add("on"),
                Ee.setAttribute("title", Ee.getAttribute("data-title-on"))),
                y()
            }).on(hn.airPlayDeactivated, function() {
                Ze = !1,
                Ee && (Ee.classList.remove("on"),
                Ee.classList.add("off"),
                Ee.setAttribute("title", Ee.getAttribute("data-title-off")))
            }))
        }
        function j() {
            L(t, ".fullscreen", function() {
                e.events.fire(hn.fullscreenButtonPressed)
            }),
            e.events.on(hn.didEnterFullscreen, function() {
                t.classList.remove("tiny"),
                xe && xe.setAttribute("title", xe.getAttribute("data-title-unfullscreen"))
            }),
            e.events.on(hn.didExitFullscreen, function(e) {
                if (xe) {
                    var n = xe.cloneNode(!0);
                    xe.parentNode.replaceChild(n, xe),
                    xe = n,
                    xe.setAttribute("title", xe.getAttribute("data-title-fullscreen"))
                }
                e || (Le = !0),
                ee && t.classList.add("tiny")
            })
        }
        function V() {
            e.events.on([hn.mousedOver, hn.scrubbingStarted, fn.changeVolume], y).on([hn.mousedOut, hn.mouseTimeout], g).on(hn.willEnterFullscreen, function() {
                Ae = !1,
                g()
            }).on(hn.willExitFullscreen, function() {
                Ae = !1
            }).on(hn.targetTimeReached, function() {
                De = !0,
                g()
            }).on(fn.changeVolume, function(e, t) {
                t || y()
            });
            var n = [".play", ".play-bar", ".custom-logo", ".vp-menu"];
            Tn(t).on(["pointerenter", "pointerleave", "mouseenter", "mouseleave"], n, function(e) {
                return "pointerType"in e ? void ("mouse" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_MOUSE || (Ae = "pointerenter" === e.type || "MSPointerEnter" === e.type)) : void (Un.touch || (Ae = "mouseover" === e.type))
            }),
            Tn(t).on("transitionend", function(e) {
                this === t && "opacity" === e.propertyName && t.classList.contains("invisible") && (t.classList.add("hidden"),
                t.setAttribute("hidden", ""))
            })
        }
        function U() {
            function n(n) {
                if (1 === n.which) {
                    ye.setAttribute("data-tabindex", ye.getAttribute("tabindex")),
                    ye.removeAttribute("tabindex"),
                    Ie = !0,
                    e.element.classList.add("scrubbing"),
                    e.events.fire(hn.volumeScrubbingStarted);
                    var o = n.type;
                    if ("pointerdown" === o || "MSPointerDown" === o) {
                        s = n.pointerId;
                        try {
                            n.target.msSetPointerCapture ? n.target.msSetPointerCapture(s) : n.target.setPointerCapture(s)
                        } catch (e) {}
                        Tn(t).on("pointermove", ".volume", i).on("pointerup", ".volume", r)
                    } else
                        "touchstart" === o ? Tn(document).on("touchmove", i).on("touchend", r) : Tn(document).on("mousemove", i).on("mouseup", r);
                    var u = n.clientX;
                    n.targetTouches && (u = n.targetTouches[0].clientX);
                    var c = a(u);
                    e.events.fire(fn.changeVolume, c),
                    T(c)
                }
            }
            function i(t) {
                var n = t.clientX;
                t.targetTouches && (n = t.targetTouches[0].clientX,
                t.preventDefault());
                var i = a(n);
                e.events.fire(fn.changeVolume, i),
                T(i)
            }
            function r(n) {
                Ie = !1,
                e.events.fire(hn.volumeScrubbingEnded),
                e.element.classList.remove("scrubbing");
                var o = n.type;
                "pointerup" === o || "MSPointerUp" === o ? Tn(t).off("pointermove", ".volume", i).off("pointerup", ".volume", r) : "touchend" === n.type ? Tn(document).off("touchmove", i).off("touchend", r) : Tn(document).off("mousemove", i).off("mouseup", r),
                ye.setAttribute("tabindex", ye.getAttribute("data-tabindex")),
                ye.removeAttribute("data-tabindex")
            }
            function a(e) {
                var t = o(ye).left
                  , n = o(ye).right
                  , i = n - t
                  , r = e - t
                  , a = r / i;
                return u(a, 0, 1)
            }
            Tn(t).on("mousemove", ".volume", function(e) {
                var t = e.srcElement;
                if (_e.indexOf(t) === -1) {
                    var n = o(ye)
                      , i = e.clientX
                      , r = n.bottom - 2;
                    if (t = document.elementFromPoint(i, r),
                    _e.indexOf(t) === -1)
                        return
                }
                t.classList.add("hover"),
                window.requestAnimationFrame(function() {
                    window.requestAnimationFrame(function() {
                        t.classList.remove("hover"),
                        t.classList.add("animate")
                    })
                })
            }),
            Tn(t).on("transitionend", ".volume div", function(e) {
                "height" === e.propertyName && this.classList.remove("animate")
            }),
            Tn(document).on("contextmenu", ".volume", function() {
                this.blur()
            });
            var s;
            Tn(t).on(Un.pointerEvents ? "pointerdown" : ["touchstart", "mousedown"], ".volume", n),
            e.events.on(hn.volumeChanged, function(e) {
                !Ie && _e && T(e)
            }).on([fn.enableVolume, fn.disableVolume], function() {
                x()
            })
        }
        function H() {
            e.events.on(hn.overlayOpened, function(e) {
                if ("notsupported" !== e && "private-unlocked" !== e && "help" !== e)
                    Ce = !0,
                    g();
                else
                    for (var n = t.querySelectorAll("a, button, input, [tabindex]"), i = 0, r = n.length; i < r; i++) {
                        var o = n[i].getAttribute("tabindex");
                        o && n[i].setAttribute("data-tabindex", o),
                        n[i].setAttribute("tabindex", "-1")
                    }
            }).on(hn.overlayClosed, function() {
                Ce = !1,
                y();
                for (var e = t.querySelectorAll("[tabindex]"), n = 0, i = e.length; n < i; n++) {
                    var r = e[n].getAttribute("data-tabindex");
                    r && "null" !== r ? e[n].setAttribute("tabindex", r) : e[n].removeAttribute("tabindex"),
                    e[n].removeAttribute("data-tabindex")
                }
            })
        }
        function W() {
            e.events.on(hn.outroDisplayed, function() {
                t.classList.add("controls-outro")
            }).on(hn.outroHidden, function() {
                t.classList.remove("controls-outro")
            })
        }
        function z() {
            function n(e, n) {
                K(n),
                n.isCentered() && n.isVisible() && t.classList.add("controls-centerMenu"),
                n.isCentered() && n.isVisible() || t.classList.remove("controls-centerMenu")
            }
            function i() {
                it.filter(function(e) {
                    return e.isVisible()
                }).forEach(function(e) {
                    return e.hide()
                })
            }
            function r(e) {
                e || i()
            }
            e.events.on([hn.menuCentered, hn.menuVisibilityChanged], n).on(hn.didExitFullscreen, i).on(hn.controlBarVisibilityChanged, r),
            Tn(window).on("resize", function() {
                it.forEach(K)
            })
        }
        function K(t) {
            var n = e.element.querySelector(".js-playerInner")
              , i = o(n)
              , r = o(t.button)
              , a = o(t.element.parentElement)
              , s = o(t.element)
              , u = 0
              , c = r.right - r.width / 2 + s.width / 2;
            c < a.right && (u = a.right - c);
            var l = window.getComputedStyle(t.element)
              , d = parseFloat(l.fontSize);
            if (t.isCentered()) {
                var f = i.right - a.right
                  , h = i.bottom - a.bottom
                  , v = (i.width - s.width) / 2
                  , p = (i.height - s.height) / 2;
                t.element.style.right = (v - f) / d + "em",
                t.element.style.bottom = (p - h) / d + "em"
            } else
                t.element.style.right = u / d + "em",
                t.element.style.bottom = a.height / d + "em"
        }
        function G() {
            e.events.on(hn.configChanged, function(t, i) {
                tt = new ys(i.video.live_event),
                Z(),
                R(),
                x(),
                e.config.view === rn.privateUnlocked && y(),
                n(),
                $e = !0
            })
        }
        function X() {
            e.events.on(fn.reset, function() {
                k(),
                y(),
                S()
            }),
            Tn(window).on("resize", function() {
                n()
            })
        }
        function Y() {
            e.events.on(hn.enteredTinyMode, function() {
                ee = !0,
                t.classList.add("tiny")
            }).on(hn.enteredMiniMode, function() {
                ee = !1,
                t.classList.remove("tiny")
            }).on(hn.enteredNormalMode, function() {
                ee = !1,
                t.classList.remove("tiny")
            })
        }
        function $() {
            var t = e.config.user.progress
              , n = t / e.config.video.duration;
            !t || e.config.embed.autoplay || e.config.embed.time || je || (l(n, t),
            d(n, t),
            Be = !0)
        }
        function Q() {
            if (e.config.embed.on_site) {
                var n = new lu;
                e.events.on(hn.cuePointAdded, function(i) {
                    if (i.data.visible) {
                        var r = document.createElement("div");
                        r.setAttribute("id", "cuepoint-" + i.id),
                        r.setAttribute("data-time", i.time),
                        r.classList.add("cuepoint"),
                        r.classList.add("out"),
                        r.appendChild(document.createElement("div"));
                        var o = i.time / e.config.video.duration * 100;
                        r.style.left = o + "%",
                        n.set(i, r),
                        de.appendChild(r),
                        ze = mn(t.querySelectorAll(".cuepoint")),
                        window.requestAnimationFrame(function() {
                            return r.classList.remove("out")
                        })
                    }
                }),
                e.events.on(hn.cuePointRemoved, function(e) {
                    var t = n.get(e);
                    t && (n.delete(e),
                    t.classList.add("out"))
                }),
                Tn(t).on("transitionend", ".cuepoint", function(e) {
                    this.classList.contains("out") && (de.removeChild(this),
                    ze = mn(t.querySelectorAll(".cuepoint")))
                })
            }
        }
        function J() {
            Te && (L(t, ".stereoscopic", function() {
                e.events.fire(hn.stereoscopicButtonPressed)
            }),
            Te.classList.remove("hidden"),
            Te.hidden = !1)
        }
        function Z() {
            tt.exists && !tt.isEnded && (e.events.on(hn.liveStreamOnline, function() {
                nt = !0,
                x()
            }),
            e.events.on(hn.liveStreamOffline, function() {
                nt = !1,
                x()
            }))
        }
        var ee, te, ne, ie, re, oe, ae, se, ue, ce, le, de, fe, he, ve, pe, me, ge, ye, _e, be, we, ke, Se, Ee, Te, xe, Le = !1, Pe = !1, Ae = !1, Ce = !1, Oe = !1, Re = !1, Me = !1, Ie = !1, Fe = !1, De = !1, Be = !1, qe = !0, Ne = !1, je = !1, Ue = null, We = null, ze = [], Ge = null, $e = !0, Qe = null, Je = null, Ze = !1, et = !1, tt = new ys(e.config.video.live_event), nt = tt.isStarted, it = [], rt = e.config.embed.autoplay && e.config.request.flags.autohide_controls, ot = [{
            id: .5,
            label: "0.5x"
        }, {
            id: 1,
            label: "Normal"
        }, {
            id: 1.25,
            label: "1.25x"
        }, {
            id: 1.5,
            label: "1.5x"
        }, {
            id: 2,
            label: "2x"
        }];
        return x(),
        A(),
        R(),
        O(),
        I(),
        U(),
        F(),
        D(),
        B(),
        q(),
        N(),
        j(),
        V(),
        H(),
        W(),
        z(),
        G(),
        X(),
        $(),
        Y(),
        Q(),
        J(),
        Z(),
        e.events.on(hn.playInitiated, function() {
            C(),
            Pe = !0;
            var t = e.config.embed.time || e.telecine.currentTime;
            c(t / e.config.video.duration, t),
            Be = !0
        }),
        e.events.fire(hn.controlBarModuleReady),
        {}
    }
    function jt(e, t) {
        function n() {
            clearTimeout(L),
            L = null
        }
        function i() {
            U && (clearTimeout(L),
            L = setTimeout(s, P))
        }
        function r() {
            In.element && In.element.classList.contains("js-player-fullscreen") && (O || (t.classList.add("player-cursor-hide"),
            C = !0,
            O = !0))
        }
        function a() {
            O && (t.classList.remove("player-cursor-hide"),
            O = !1)
        }
        function s(t) {
            if ((N || q) && !V && (n(),
            !document.activeElement || !document.body.classList.contains("showfocus") || !z.contains(document.activeElement) && !K.contains(document.activeElement))) {
                e.events.fire(t ? hn.mousedOut : hn.mouseTimeout),
                C = !0;
                var i = Un.spatialPlayback && e.config.video.spatial;
                i || (W.classList.add("hidden"),
                W.setAttribute("hidden", "")),
                A = !0,
                r()
            }
        }
        function u() {
            N && q || (e.events.fire(hn.mousedOver),
            W.classList.remove("hidden"),
            W.removeAttribute("hidden")),
            i()
        }
        function c() {
            N || q ? t.removeAttribute("tabindex") : N || q || j || t.setAttribute("tabindex", "0")
        }
        function l() {
            function c() {
                u()
            }
            function l(t) {
                if (P = T,
                C)
                    return void (C = !1);
                if (a(),
                0 !== t.screenX && t.screenX !== screen.width - 1 && 0 !== t.screenY && t.screenY !== screen.height - 1) {
                    if (g = !0,
                    Un.spatialPlayback && e.config.video.spatial) {
                        var c = o(e.element)
                          , l = t.clientX - c.left
                          , d = t.clientY - c.top
                          , f = 4 * Yl
                          , h = d > e.element.clientHeight - Xl
                          , v = l > e.element.clientWidth - Yl && d < f;
                        if (F || !h && !v)
                            return
                    }
                    A && u(),
                    i()
                } else if (n(),
                r(),
                g) {
                    var p = !0;
                    s(p),
                    g = !1
                }
            }
            function d() {
                P = x,
                i()
            }
            function f() {
                var e = !0;
                s(e)
            }
            function h(e) {
                var t = K.contains(e.target) || z.contains(e.target)
                  , n = R && R.getWrapper().contains(e.target);
                if (N && q || n) {
                    if (!t && (N || q)) {
                        var i = !0;
                        s(i)
                    }
                } else
                    u()
            }
            function v(e) {
                return "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE ? (P = T,
                c(e)) : (P = x,
                void h(e))
            }
            function p(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                    return l(e)
            }
            function m(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                    return f(e)
            }
            var g = !0;
            return Un.pointerEvents ? void Tn(t).on("pointerenter", v).on("pointermove", p).on("pointerleave", m) : void Tn(t).on("touchmove", d).on("touchend", h).on("mouseenter", c).on("mousemove", l).on("mouseleave", f)
        }
        function d() {
            e.events.on(hn.played, function(e) {
                Y || 0 === e || u()
            }).on(hn.paused, u).on([hn.bufferEnded, hn.scrubbingEnded, hn.volumeChanged, hn.menuPanelOpened], i).on(hn.playInitiated, function() {
                U = !0
            }),
            e.events.on(hn.menuVisibilityChanged, function(e) {
                e && i()
            }),
            e.events.on(hn.overlayOpened, c).on(hn.controlBarVisibilityChanged, function(e) {
                q = e,
                c()
            }).on(hn.sidedockVisibilityChanged, function(e) {
                N = e,
                c()
            }),
            e.events.on(hn.outroDisplayed, function() {
                V = !0,
                u()
            }).on(hn.outroHidden, function() {
                V = !1
            })
        }
        function f() {
            function n(e) {
                return (e.classList.contains("title") || e.classList.contains("target") || G.contains(e.parentNode) && "HEADER" === e.parentNode.tagName || X.contains(e)) && !z.contains(e)
            }
            function i(t) {
                if (!o && 2 !== t.button && t.target.classList && n(t.target)) {
                    var i = ("pointerup" === t.type || "MSPointerUp" === t.type) && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE
                      , r = U && Un.spatialPlayback && e.config.video.spatial && M;
                    if (Un.touch || i) {
                        var s = e.telecine.supportedPresentationModes.indexOf("inline") !== -1 && !Un.mobileAndroid;
                        if (!r) {
                            if (U && s)
                                return;
                            return void e.events.fire(hn.playButtonPressed)
                        }
                    }
                    a++,
                    1 === a && setTimeout(function() {
                        if (r) {
                            var n = B && B.x === t.clientX && B.y === t.clientY;
                            return 1 === a && n && !Un.mobileAndroid && e.events.fire(e.telecine.paused ? hn.playButtonPressed : hn.pauseButtonPressed),
                            1 !== a && e.telecine.getEffectByName("ThreeSixtyEffect").snapToCenter(),
                            void (a = 0)
                        }
                        1 === a ? e.events.fire(e.telecine.paused ? hn.playButtonPressed : hn.pauseButtonPressed) : e.events.fire(hn.fullscreenButtonPressed),
                        a = 0
                    }, 200)
                }
            }
            var r = !1
              , o = !1
              , a = 0;
            e.events.on(hn.menuVisibilityChanged, function(e) {
                o = e
            }),
            Tn(t).on(Un.pointerEvents ? "pointerup" : "click", i),
            Tn(t).on("mousedown", ".video-wrapper", function(e) {
                if (!r) {
                    if (W.classList.remove("hidden"),
                    W.removeAttribute("hidden"),
                    2 !== e.button) {
                        var t;
                        document.createEvent && (t = document.createEvent("MouseEvents"),
                        t.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                        W.dispatchEvent(t))
                    }
                    return !1
                }
            }).on("contextmenu", ".video", function(e) {
                return W.classList.remove("hidden"),
                W.removeAttribute("hidden"),
                !1
            }),
            e.events.on(fn.toggleNativeControls, function(e) {
                return e ? (r = !0,
                void W.classList.add("hidden")) : (r = !1,
                void W.classList.remove("hidden"))
            })
        }
        function h() {
            if (!Un.touch) {
                var n, i;
                Tn(t).on("focus", "a, button, input, [tabindex]", function() {
                    i = this,
                    clearTimeout(n),
                    n = null,
                    document.activeElement === this && u()
                }),
                Tn(t).on("blur", "a, button, input, [tabindex]", function() {
                    document.activeElement === this && (n = setTimeout(s, 50))
                }),
                t.addEventListener("focus", function(e) {
                    u(),
                    i && i.focus()
                }, !1),
                e.events.on(hn.overlayOpened, function() {
                    j = !0,
                    t.removeAttribute("tabindex")
                }),
                e.events.on(hn.overlayClosed, function() {
                    j = !1
                })
            }
        }
        function v() {
            e.events.on(hn.didEnterFullscreen, function(e) {
                r(),
                V && u()
            }).on(hn.didExitFullscreen, function(e) {
                return A = !0,
                e ? void s() : (u(),
                void n())
            })
        }
        function p() {
            e.events.on([hn.playProgress, hn.seeked], function t(n) {
                n >= H && null === L && (e.events.fire(hn.targetTimeReached),
                e.events.off([hn.playProgress, hn.seeked], t))
            })
        }
        function m() {
            e.events.on(fn.reset, function() {
                A = !0,
                C = !0,
                q = !0,
                N = !1,
                U = !1,
                p(),
                n()
            })
        }
        function g() {
            e.events.on(fn.attachSpatialPlaybackEvents, _),
            e.events.on(fn.toggleSpatialPlayback, function(e) {
                y(),
                M = e,
                w()
            })
        }
        function y() {
            X.classList.remove("threesixty-video"),
            e.element.classList.remove("grabbable"),
            e.element.classList.remove("grabbing"),
            R && R.hide()
        }
        function _() {
            var t = function(e) {
                return function() {
                    M && e.apply(void 0, arguments)
                }
            };
            e.events.on(fn.revealSpatialControls, t(function() {
                e.element.classList.add("grabbable"),
                R && R.updatePosition(e.element),
                !R || R.visible || M.isStereo() || R.reveal()
            })),
            e.events.on(hn.ended, t(function() {
                y()
            })),
            e.events.on(hn.cameraUpdate, t(function(e) {
                R && R.setAngle(e.lat, e.lon)
            })),
            e.events.on(hn.playInitiated, t(function() {
                e.config.video.spatial && b()
            })),
            e.events.on(hn.stereoscopicButtonPressed, t(function() {
                w()
            }));
            var n = null
              , i = t(function(t) {
                F || (F = !0,
                t.preventDefault(),
                e.element.classList.add("grabbing"),
                B = {
                    x: t.clientX,
                    y: t.clientY
                },
                M.makeContact(B))
            })
              , r = t(function(e) {
                F && (w(),
                M.move({
                    x: e.clientX,
                    y: e.clientY
                }))
            })
              , o = t(function(t) {
                F && (e.element.classList.remove("grabbing"),
                M.releaseContact(!1),
                F = !1)
            })
              , a = t(function(t) {
                t.preventDefault(),
                M.isUserInteracting || (M.isUserInteracting = !0),
                null !== n && clearTimeout(n),
                w(),
                n = setTimeout(function() {
                    e.element.classList.remove("player-cursor-hide"),
                    e.element.classList.add("grabbable"),
                    M.isUserInteracting = !1
                }, 500),
                e.element.classList.add("player-cursor-hide"),
                e.element.classList.remove("grabbable"),
                M.moveWheel({
                    x: t.deltaX,
                    y: t.deltaY
                })
            })
              , s = t(function(e) {
                F || (F = !0,
                M.makeContact({
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY
                }))
            })
              , u = t(function(e) {
                F && (e.preventDefault(),
                w(),
                M.move({
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY
                }))
            })
              , c = t(function(e) {
                M.releaseContact(!0),
                F = !1
            })
              , l = t(function(e) {
                F || w(),
                M.moveDevice(e.alpha, e.beta, e.gamma, e.orientation)
            })
              , d = t(function(t) {
                F = !1,
                e.element.classList.remove("grabbing"),
                M.abandonMotion()
            })
              , f = function() {
                R && R.updatePosition(e.element),
                M.adjustRenderSize(),
                F = !1
            }
              , h = t(f)
              , v = t(function() {
                f();
                var t = 3
                  , n = 0
                  , i = 100
                  , r = setInterval(function() {
                    if (n++,
                    n > t)
                        return void clearInterval(r);
                    var i = M.getRendererSize()
                      , o = e.element.clientHeight
                      , a = e.element.clientWidth;
                    return a !== i.width || o !== i.height ? void M.adjustRenderSize() : void clearInterval(r)
                }, i)
            });
            e.events.once(hn.playInitiated, function() {
                window.addEventListener("resize", h),
                window.addEventListener("orientationchange", h),
                e.events.on([hn.enteredTinyMode, hn.enteredMiniMode, hn.enteredNormalMode], h),
                e.events.on(hn.didEnterFullscreen, v),
                e.events.on(hn.didExitFullscreen, v),
                Un.android && window.addEventListener("deviceorientation", l, !1),
                Un.pointerEvents ? (Tn(W).on("pointerdown", i),
                window.addEventListener("pointermove", r),
                window.addEventListener("pointerup", o),
                window.addEventListener("pointerleave", d)) : (Tn(W).on("touchstart", s).on("mousedown", i).on("wheel", a),
                window.addEventListener("touchmove", u),
                window.addEventListener("mousemove", r),
                window.addEventListener("mouseup", o),
                window.addEventListener("touchend", c),
                window.addEventListener("mouseleave", d))
            })
        }
        function b() {
            function n() {
                var e = t;
                if (!D) {
                    var n = D = document.createElement("div");
                    n.classList.add("cloaked"),
                    n.classList.add("player-alert-round"),
                    n.classList.add("player-alert-round--top"),
                    n.classList.add("player-alert-round--threesixty"),
                    e.appendChild(n)
                }
            }
            function i(e) {
                D && (D.innerHTML = Mn.render("threesixty_reminder", e))
            }
            function r() {
                i({
                    showArrows: !1,
                    text: Un.android ? "Look around" : "Click and drag to look around"
                })
            }
            function o() {
                i({
                    showArrows: !1,
                    text: Un.android ? "Look around" : "Use arrow keys to see more"
                })
            }
            var a = e.telecine.getEffectByName("ThreeSixtyEffect")
              , s = 7e3
              , u = 14e3
              , c = 3e3
              , l = e.config.embed.settings.spatial_compass;
            l ? (R || (R = new Gl(e.element.querySelector(".controls-wrapper"),function() {
                a.snapToCenter()
            }
            )),
            R.updatePosition(e.element),
            R.reveal()) : R && R.hide(),
            e.events.once(hn.firstTimeUpdate, function() {
                var t = e.config.embed.cards
                  , n = 15
                  , i = t && t.length && t[0].timecode < n;
                i || (I.push(setTimeout(function() {
                    r(),
                    E(D),
                    k(D),
                    setTimeout(function() {
                        return S(D)
                    }, c)
                }, s)),
                Un.android || I.push(setTimeout(function() {
                    o(),
                    E(D),
                    k(D),
                    setTimeout(function() {
                        return S(D)
                    }, c)
                }, u)))
            }),
            n()
        }
        function w() {
            I.forEach(function(e) {
                return clearTimeout(e)
            }),
            I = []
        }
        function k(e) {
            e && (e.classList.remove("cloaked"),
            window.requestAnimationFrame(function() {
                e.classList.add("in")
            }))
        }
        function S(e) {
            e && (e.classList.add("leaving"),
            window.requestAnimationFrame(function() {
                Tn(e).on("transitionend", function t(n) {
                    "opacity" === n.propertyName && (e.classList.remove("in"),
                    e.classList.remove("leaving"),
                    e.classList.add("cloaked"),
                    Tn(e).off("transitionend", t))
                })
            }))
        }
        function E(e) {
            var t = o(z);
            return t.width > 60 ? void e.classList.add("player-alert-bumpdown") : void e.classList.remove("player-alert-bumpdown")
        }
        var T = 2e3
          , x = 4500
          , L = null
          , P = Un.touch ? x : T
          , A = !0
          , C = !0
          , O = !1
          , R = null
          , M = null
          , I = []
          , F = !1
          , D = null
          , B = null
          , q = !0
          , N = !1
          , j = !1
          , V = !1
          , U = !1
          , H = 1.75
          , W = t.querySelector(".target")
          , z = t.querySelector(".sidedock")
          , K = t.querySelector(".controls")
          , G = t.querySelector(".title")
          , X = t.querySelector(".video")
          , Y = e.config.embed.autoplay && e.config.request.flags.autohide_controls;
        return l(),
        d(),
        f(),
        h(),
        v(),
        p(),
        m(),
        g(),
        {}
    }
    function Vt(e, t) {
        function n() {
            return !P && (e.config.view === rn.main || e.config.view === rn.privateUnlocked)
        }
        function r() {
            C && "help" === L && e.events.fire(hn.overlayCloseButtonPressed)
        }
        function o(e) {
            return "number" != typeof e.which && (e.which = e.keyCode),
            e
        }
        function a(e) {
            if ("keypress" === e.type) {
                var t = String.fromCharCode(e.which);
                return e.shiftKey || (t = t.toLowerCase()),
                t
            }
            return e.which in Fd ? Fd[e.which] : String.fromCharCode(e.which).toLowerCase()
        }
        function s(e) {
            return !(e.ctrlKey || e.metaKey || e.altKey) && (e.which in Fd ? "keydown" === e.type : "keypress" === e.type)
        }
        function u(e) {
            var t = e.target || e.srcElement;
            return "INPUT" === t.tagName || "SELECT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable
        }
        function c(t) {
            if (t = Array.isArray(t) ? t : [t],
            C && "help" === L) {
                if (e.events.fire(hn.overlayCloseButtonPressed),
                t[0] === fn.showOverlay && "help" === t[1])
                    return !1;
                if (t[0] !== fn.openVimeo)
                    return setTimeout(function() {
                        e.events.fire.apply(null, t)
                    }, 250),
                    !1
            }
            return e.events.fire.apply(null, t),
            !1
        }
        function l(t, n) {
            if (!B) {
                n && !e.telecine.paused && e.events.fire(hn.pauseButtonPressed);
                var i = !0;
                e.events.fire(hn.scrubbingStarted, i),
                B = !0
            }
            h(D),
            D++,
            1 === D && (F = e.config.video.fps);
            var r = n ? 1 : F
              , o = "right" === t ? r : -r
              , a = Math["right" === t ? "ceil" : "floor"](e.telecine.currentTime * e.config.video.fps);
            d(a + o)
        }
        function d(t) {
            var n = null
              , i = t / e.config.video.fps;
            e.events.fire(fn.seek, n, i)
        }
        function f(t) {
            F = R,
            D = 0;
            var n = t.shiftKey;
            e.events.fire(hn.scrubbingEnded, n),
            B = !1
        }
        function h(e) {
            var t = e
              , n = Math.ceil(R)
              , i = Math.ceil(M - R)
              , r = I;
            F = v(t, n, i, r)
        }
        function v(e, t, n, i) {
            return e /= i,
            e--,
            n * (e * e * e + 1) + t
        }
        function p(e) {
            var t = O.getTabindexItems()
              , n = t.indexOf(document.activeElement)
              , i = "up" === e ? n - 1 : n + 1
              , r = null;
            return r = i >= t.length ? t[0] : i < 0 ? t[t.length - 1] : t[i],
            !r || (r.focus(),
            !1)
        }
        function m() {
            return !!O || (document.activeElement && document.activeElement !== document.body ? void 0 : (e.events.fire(hn[e.telecine.paused ? "playButtonPressed" : "pauseButtonPressed"]),
            r(),
            !1))
        }
        function g() {
            return O ? (O.element.contains(document.activeElement) && O.button.focus(),
            O.hide(),
            !1) : document.activeElement && t.contains(document.activeElement) ? (i(),
            !0) : C ? (e.events.fire(hn.overlayCloseButtonPressed),
            !1) : void 0
        }
        function y() {
            if (O)
                return !O.element.contains(document.activeElement) || p("up");
            if (Un.spatialPlayback && e.config.video.spatial)
                return e.telecine.getEffectByName("ThreeSixtyEffect").keyPress("up"),
                !1;
            if (e.config.embed.on_site && document.activeElement && !t.contains(document.activeElement))
                return !0;
            r();
            var n = !1
              , i = !0;
            return e.events.fire(fn.changeVolume, Id, n, i),
            !1
        }
        function _() {
            if (O)
                return !O.element.contains(document.activeElement) || p("down");
            if (Un.spatialPlayback && e.config.video.spatial)
                return e.telecine.getEffectByName("ThreeSixtyEffect").keyPress("down"),
                !1;
            if (e.config.embed.on_site && document.activeElement && !t.contains(document.activeElement))
                return !0;
            r();
            var n = !1
              , i = !0;
            return e.events.fire(fn.changeVolume, -Id, n, i),
            !1
        }
        function b(t, n) {
            if (O)
                return !O.element.contains(document.activeElement) || p("left" === n ? "up" : "down");
            if (r(),
            Un.spatialPlayback && e.config.video.spatial)
                return e.telecine.getEffectByName("ThreeSixtyEffect").keyPress(n),
                !1;
            if (document.activeElement && document.activeElement === A) {
                var i = !1
                  , o = !0
                  , a = "left" === n ? -Id : Id;
                return e.events.fire(fn.changeVolume, a, i, o),
                !1
            }
            return t.shiftKey || 0 === D ? void l(n, t.shiftKey) : void q(n, t.shiftKey)
        }
        function w() {
            e.events.on(hn.overlayOpened, function(e) {
                C = !0,
                L = e,
                "notsupported" === e && (P = !0)
            }),
            e.events.on(hn.overlayClosed, function() {
                C = !1,
                L = null
            })
        }
        function k() {
            e.events.on(hn.menuVisibilityChanged, function(e, t) {
                O = !!e && t
            })
        }
        function S() {
            e.events.on(hn.configChanged, function(e) {
                e && (P = !1)
            })
        }
        function E() {
            function t(e) {
                if (o(e),
                s(e) && !u(e) && n()) {
                    var t = a(e);
                    if (t in r) {
                        if ("function" == typeof r[t])
                            return void (r[t](e, t) === !1 && (e.preventDefault(),
                            e.stopPropagation()));
                        c(r[t]) === !1 && (e.preventDefault(),
                        e.stopPropagation())
                    }
                }
            }
            function i(t) {
                if (o(t),
                !u(t) && n()) {
                    var i = a(t);
                    return Un.spatialPlayback && e.config.video.spatial && ("left" === i || "right" === i || "up" === i || "down" === i) ? void e.telecine.getEffectByName("ThreeSixtyEffect").keyUp(i) : void ("left" !== i && "right" !== i || f(t))
                }
            }
            var r = {
                l: hn.likeButtonPressed,
                w: hn.watchLaterButtonPressed,
                s: hn.shareButtonPressed,
                c: [hn.ccButtonPressed, !0],
                h: [hn.prefsButtonPressed, !0],
                f: hn.fullscreenButtonPressed,
                x: [hn.effectButtonPressed, !0],
                e: [hn.effectButtonPressed, !0],
                d: hn.debugButtonPressed,
                space: m,
                up: y,
                down: _,
                left: b,
                right: b,
                esc: g,
                "?": [fn.showOverlay, "help"]
            };
            e.config.embed.on_site || (r.v = fn.openVimeo),
            document.addEventListener("keydown", t, !1),
            document.addEventListener("keypress", t, !1),
            document.addEventListener("keyup", i, !1)
        }
        function T() {
            e.events.on(hn.becameActive, function() {
                P = !1
            }).on(hn.becameInactive, function() {
                P = !0
            }),
            e.config.embed.on_site && document.querySelector(".player") === t && (P = !1)
        }
        function x() {
            var e = void 0
              , t = !1;
            document.body.addEventListener("keydown", function(n) {
                9 !== n.which || document.body.classList.contains("showfocus") ? 27 === n.which ? document.body.classList.remove("showfocus") : 32 !== n.which && 13 !== n.which || (t = !0,
                clearTimeout(e),
                e = setTimeout(function() {
                    t = !1
                }, 200)) : document.body.classList.add("showfocus")
            }),
            document.body.addEventListener("click", function(e) {
                t || document.body.classList.remove("showfocus")
            })
        }
        var L, P = !!e.config.embed.on_site, A = t.querySelector(".volume"), C = !1, O = !1, R = e.config.video.fps / 5, M = Math.max(R, .618 * e.config.video.duration), I = 100, F = R, D = 0, B = !1, q = Wl(l, 80);
        return w(),
        k(),
        S(),
        E(),
        T(),
        x(),
        {
            pause: function() {
                P = !0
            },
            unpause: function() {
                P = !1
            }
        }
    }
    function Ut(e, t) {
        function n(e) {
            var n = "watchlater" === e || "unwatchlater" === e ? .5 : .4
              , i = t.clientHeight;
            return t.clientHeight > t.clientWidth && (i = t.clientWidth),
            {
                height: Math.round(i * n),
                width: Math.round(i * n * 1.6)
            }
        }
        function i(e, t) {
            var n = e.querySelector(".hour-hand")
              , i = e.querySelector(".minute-hand");
            if (n && i) {
                var r = t ? 1 : -1
                  , o = new Date
                  , a = Math.abs(o.getHours() - 12)
                  , s = o.getMinutes()
                  , u = s / 60 * 360 - 135
                  , c = a / 12 * 360 + s / 60 * 5
                  , l = 1.5
                  , d = c + 30 * l * r
                  , f = u + 360 * l * r;
                if (Un.browser.firefox || Un.browser.opera) {
                    var h = "10 10";
                    n.setAttribute("transform", "rotate(" + c + "," + h + ")"),
                    i.setAttribute("transform", "rotate(" + u + "," + h + ")");
                    var v = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
                    v.setAttribute("attributeName", "transform"),
                    v.setAttribute("type", "rotate"),
                    v.setAttribute("begin", "0.1s"),
                    v.setAttribute("repeatCount", "indefinite");
                    var p = v.cloneNode(!1);
                    p.setAttribute("from", c + " " + h),
                    p.setAttribute("to", c + 360 * r + " " + h),
                    p.setAttribute("dur", "0.8s"),
                    n.appendChild(p);
                    var m = v.cloneNode(!1);
                    m.setAttribute("from", u + " " + h),
                    m.setAttribute("to", u + 360 * r + " " + h),
                    m.setAttribute("dur", "9.6s"),
                    i.appendChild(m)
                } else
                    n.style[Un.transformProperty + "Origin"] = "46% 81.5%",
                    i.style[Un.transformProperty + "Origin"] = "25.5% 26.5%",
                    n.style[Un.transformProperty] = "rotate(" + c + "deg)",
                    i.style[Un.transformProperty] = "rotate(" + u + "deg)";
                window.requestAnimationFrame(function() {
                    e.classList.add("animate"),
                    Un.browser.firefox || Un.browser.opera || window.requestAnimationFrame(function() {
                        n.style[Un.transformProperty] = "rotate(" + d + "deg)",
                        i.style[Un.transformProperty] = "rotate(" + f + "deg)"
                    })
                })
            }
        }
        function r(e, r) {
            if (null !== t.parentElement.offsetParent) {
                t.classList.remove("hidden"),
                t.removeAttribute("hidden"),
                t.setAttribute("data-name", e);
                var a = n(e)
                  , s = "width:" + a.width + "px;height:" + a.height + "px";
                d.style.cssText = s,
                d.innerHTML = r,
                "watchlater" !== e && "unwatchlater" !== e || i(d, "watchlater" === e),
                clearTimeout(l),
                t.classList.remove("animate"),
                window.requestAnimationFrame(function() {
                    t.classList.remove("invisible"),
                    l = setTimeout(o, 750)
                })
            }
        }
        function o() {
            t.classList.add("animate"),
            t.classList.add("invisible")
        }
        function a() {
            t.classList.remove("animate"),
            t.classList.remove("invisible"),
            t.classList.add("hidden"),
            t.setAttribute("hidden", ""),
            t.removeAttribute("data-name"),
            d.innerHTML = "",
            d.classList.remove("filled"),
            d.classList.remove("animate"),
            e.events.fire(hn.notificationHidden)
        }
        function s() {
            e.events.on(hn.liked, function(e) {
                e || r("like", Mn.render("icon_heart"))
            }),
            e.events.on(hn.unliked, function(e) {
                e || r("unlike", Mn.render("icon_broken_heart"))
            })
        }
        function u() {
            e.events.on(hn.addedToWatchLater, function(e) {
                e || r("watchlater", Mn.render("icon_clock"))
            }),
            e.events.on(hn.removedFromWatchLater, function(e) {
                e || r("unwatchlater", Mn.render("icon_clock"))
            })
        }
        function c() {
            Tn(t).on("transitionend", function(e) {
                d.contains(e.target) && "height" === e.propertyName ? setTimeout(o, 100) : e.target === t && "opacity" === e.propertyName && window.requestAnimationFrame(a)
            })
        }
        var l, d = t.querySelector(".notification");
        return c(),
        s(),
        u(),
        e.events.fire(hn.notificationModuleReady),
        {}
    }
    function Ht(e) {
        return e = Vd(e),
        e && Hd.test(e) ? e.replace(Ud, jd) : e
    }
    function Wt(e, t) {
        function n(e) {
            l(e, "facebook", {
                width: 580,
                height: 400
            })
        }
        function r(e) {
            l(e, "twitter", {
                width: 550,
                height: 420
            })
        }
        function o(e) {
            l(e, "tumblr", {
                width: 540,
                height: 600
            })
        }
        function a() {
            function n() {
                e.events.fire(hn.embedCodeCopied);
                var n = t.querySelector(".js-embedCopy");
                n.innerHTML = n.getAttribute("data-success-label"),
                clearTimeout(r),
                r = setTimeout(function() {
                    n.innerHTML = n.getAttribute("data-label")
                }, 2e3)
            }
            var r;
            Tn(t).on("transitionend", ".js-share-screen", function(e) {
                "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (s.fire(hn.embedViewEnd),
                this.classList.add("cloaked"))
            }).on("transitionend", ".js-embed-screen", function(e) {
                "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (s.fire(hn.shareViewEnd),
                this.classList.add("cloaked"),
                v(t))
            }).on("copy", "input[name=embed_code]", function() {
                e.events.fire(hn.embedCodeCopied)
            }),
            L(t, ".js-facebook", function() {
                return e.events.fire(hn.facebookButtonPressed, this.href),
                i(),
                !1
            }),
            L(t, ".js-twitter", function() {
                return e.events.fire(hn.twitterButtonPressed, this.href),
                i(),
                !1
            }),
            L(t, ".js-tumblr", function() {
                return e.events.fire(hn.tumblrButtonPressed, this.href),
                i(),
                !1
            }),
            L(t, ".js-email", function() {
                return e.events.fire(hn.emailButtonPressed),
                window.top.location = this.href,
                i(),
                !1
            }),
            L(t, ".js-embed", function() {
                return e.events.fire(hn.embedButtonPressed),
                c.showEmbedView(),
                i(),
                !1
            }),
            L(t, ".js-embedCopy", function() {
                if (u) {
                    var e = t.querySelector("input[name=embed_code]");
                    e.select();
                    try {
                        document.execCommand("copy") && n()
                    } catch (e) {}
                    return document.activeElement.blur(),
                    !1
                }
            }),
            Un.touch ? Tn(t).on("focus", "input[name=embed_code]", function() {
                var e = this;
                setTimeout(function() {
                    e.setSelectionRange(0, 9999),
                    e.setAttribute("readonly", "readonly")
                }, 0)
            }).on("blur", "input", function() {
                this.removeAttribute("readonly")
            }) : Tn(t).on("click", "input[name=embed_code]", function() {
                this.setSelectionRange(0, 9999)
            }),
            s.on(hn.embedViewShown, function() {
                function i() {
                    var i = t.querySelector(".js-embedCopy")
                      , r = new ZeroClipboard(i,{
                        moviePath: e.config.request.urls.zeroclip_swf,
                        trustedDomains: ["*"],
                        allowScriptAccess: "always"
                    });
                    r.on("complete", n)
                }
                if (!u && Un.flash.installed) {
                    var r = "zc_script_loaded";
                    if (!document.getElementById(r)) {
                        var o, a = document.createElement("script");
                        return a.setAttribute("id", r),
                        a.setAttribute("src", e.config.request.urls.zeroclip_js),
                        a.onreadystatechange = a.onload = function() {
                            o || i(),
                            o = !0
                        }
                        ,
                        void document.getElementsByTagName("head")[0].appendChild(a)
                    }
                    i()
                }
            })
        }
        var s = oe()
          , u = !1
          , c = {
            get events() {
                return s
            },
            setup: function() {
                t.classList.remove("share2-embed-active", "share2-embed-only"),
                e.config.embed.settings.share && e.config.embed.settings.share.embed_only && t.classList.add("share2-embed-only");
                var i = t.querySelector(".js-embedCopy");
                i && (i.style.width = y(i, ["Copy", "Copied!"])),
                e.events.on(hn.facebookButtonPressed, n).on(hn.twitterButtonPressed, r).on(hn.tumblrButtonPressed, o)
            },
            destroy: function() {
                e.events.off(hn.facebookButtonPressed, n).off(hn.twitterButtonPressed, r).off(hn.tumblrButtonPressed, o)
            },
            getShareData: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = (arguments[1],
                e.config.video.title)
                  , i = e.config.video.owner.name
                  , r = e.config.video.share_url;
                return u = document.queryCommandSupported && document.queryCommandSupported("copy"),
                t.template = Mn.render("share2", {
                    url: e.config.video.url,
                    shareUrl: r,
                    playerShareUrl: "https://" + e.config.player_url + "/video/" + e.config.video.id + "/share",
                    title: n,
                    owner: i,
                    embed: "public" === e.config.video.embed_permission && e.config.embed.settings.embed,
                    embedOnly: e.config.embed.settings.share && e.config.embed.settings.share.embed_only,
                    embedCode: Wd(e.config.video.embed_code),
                    copyButton: u || Un.flash.installed,
                    customizeEmbed: !!e.config.video.url,
                    readOnly: !Un.touch,
                    strings: {
                        share: "Share",
                        facebook: "Share on Facebook",
                        twitter: "Share on Twitter",
                        tumblr: "Share on Tumblr",
                        email: "Share via Email",
                        emailSubject: "Check out â" + n + "â from " + i + " on Vimeo",
                        emailBody: "Check out â" + n + "â from " + i + " on Vimeo.\n\nThe video is available for your viewing pleasure at " + r + "\n\nIf you like this video, make sure you share it, too!\n\nVimeo is filled with lots of amazing videos. See more at https://vimeo.com.",
                        embedCode: "Get embed code",
                        embedTitle: "Embed",
                        embedSubtitle: "Add this video to your site with the embed code below.",
                        copy: "Copy",
                        copySuccess: "Copied!",
                        customize: '<a href="' + e.config.video.url + '#embed" target="_blank">Customize this embed</a> on Vimeo'
                    }
                }),
                e.config.embed.settings.share && e.config.embed.settings.share.embed_only && (t.wrapperClass = "embed-only"),
                t
            },
            showShareView: function() {
                t.querySelector(".js-share-screen").classList.remove("cloaked"),
                t.classList.remove("share2-embed-active"),
                s.fire(hn.shareViewShown)
            },
            showEmbedView: function() {
                e.config.embed.settings.share.embed_only || (t.querySelector(".js-embed-screen").classList.remove("cloaked"),
                t.classList.add("share2-embed-active")),
                s.fire(hn.embedViewShown)
            }
        };
        return a(),
        c
    }
    function zt(e, t) {
        function n(e) {
            if ("yes" === e.form.getAttribute("data-bubble")) {
                e.form.setAttribute("data-bubble", "no");
                var n = t.querySelector(".validationBubble2")
                  , r = n.querySelector(".validationBubble2-message");
                r.innerHTML = e.validationMessage || "There is an error with this input.";
                var a = o(e)
                  , s = o(e.form);
                n.style.left = a.left - s.left + "px",
                n.style.top = a.height + 1 + "px",
                n.classList.remove("validationBubble2-hidden"),
                e.focus(),
                window.requestAnimationFrame(function() {
                    n.classList.add("validationBubble2-animate")
                }),
                i()
            }
        }
        function i(e) {
            var n = t.querySelector(".validationBubble2");
            if (n) {
                if (e)
                    return clearTimeout(d),
                    void n.classList.remove("validationBubble2-animate");
                var i = 5e3;
                clearTimeout(d),
                d = setTimeout(function() {
                    n.classList.remove("validationBubble2-animate")
                }, i)
            }
        }
        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , r = e.showBubble
              , o = void 0 === r || r
              , a = t.querySelector("input[type=email]")
              , s = t.querySelector("input[type=text]");
            return a.setAttribute("aria-invalid", "false"),
            a.setCustomValidity(""),
            a.checkValidity && !a.checkValidity() ? (a.setAttribute("aria-invalid", "true"),
            a.validity.valueMissing && a.setCustomValidity("Please enter your email."),
            a.validity.typeMismatch && a.setCustomValidity("Please enter a valid email."),
            o && n(a),
            !1) : (s.setAttribute("aria-invalid", "false"),
            s.setCustomValidity(""),
            s.checkValidity && !s.checkValidity() ? (s.setAttribute("aria-invalid", "true"),
            s.validity.typeMismatch && s.setCustomValidity("Please enter a valid name."),
            !1) : (i(!0),
            !0))
        }
        function a() {
            var e = t.querySelector(".emailCapture2")
              , n = t.querySelector(".emailCapture2-confirm");
            e.classList.add("emailCapture2-invisible"),
            n.classList.remove("emailCapture2-confirm-hidden"),
            window.requestAnimationFrame(function() {
                window.requestAnimationFrame(function() {
                    n.classList.add("in"),
                    setTimeout(f, 2250)
                })
            })
        }
        function s(e, n, i) {
            v(t);
            var r = mn(e.querySelectorAll("input"))
              , o = r.map(function(e) {
                return e.name ? encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value) : encodeURIComponent(e.value)
            }).join("&")
              , a = 3e3
              , s = new XMLHttpRequest;
            s.open(e.method, e.action + window.location.search, !0),
            s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            s.withCredentials = !0,
            s.timeout = a,
            s.onload = function() {
                var e;
                try {
                    e = JSON.parse(s.responseText)
                } catch (e) {}
                n(e, s)
            }
            ,
            s.onerror = function(e) {
                i(e)
            }
            ,
            s.send(o)
        }
        function u(t) {
            function i(t, n) {
                return t === !1 ? void o(n.status, n) : (e.config.embed.email = null,
                e.events.fire(hn.emailCaptureSuccess),
                void a())
            }
            function o(e) {
                c.classList.remove("loading"),
                u.setCustomValidity("Uh oh. There was a problem. Please try again."),
                u.setAttribute("aria-invalid", "true"),
                n(u)
            }
            if (!r())
                return !1;
            var u = t.querySelector("input[type=email]")
              , c = t.querySelector("input[type=submit]")
              , l = {
                signature: "signature",
                time: "timestamp",
                expires: "expires"
            };
            Object.keys(l).forEach(function(n) {
                var i = t.querySelector("input[name=" + n + "]");
                i.value = e.config.request[l[n]]
            }),
            c.classList.add("loading"),
            s(t, i, o)
        }
        function c() {
            L(t, ".emailCapture2-form-button--cancel", function() {
                f()
            }),
            L(t, ".emailCapture2-form-button--reset", function() {
                e.events.fire(hn.playButtonPressed)
            }),
            L(t, ".emailCapture2-form-button--submit", function() {
                this.form.classList.add("emailCapture2-form-submitted"),
                this.form.setAttribute("data-bubble", "yes"),
                r()
            }),
            Tn(t).on("submit", ".emailCapture2-form", function() {
                return e.events.fire(hn.emailCaptureSubmitted),
                u(this),
                !1
            }).on(["focus", "input"], ".emailCapture2-form-input[type=email]", function() {
                r({
                    showBubble: !1
                })
            })
        }
        var l = oe()
          , d = void 0
          , f = function() {
            l.fire(hn.emailCaptureEnd)
        }
          , h = {
            get events() {
                return l
            },
            getData: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = e.config.embed.email || {}
                  , r = n.custom_logo || i.custom_logo;
                if (r)
                    var o = R({
                        width: 150,
                        height: 75,
                        baseUrl: r,
                        webpSupport: e.config.request.flags.webp
                    });
                return t.template = Mn.render("email_capture2", {
                    allowSkip: n.allow_skip || i.allow_skip,
                    customLogo: o,
                    text: n.text || i.text || "",
                    action: "https://" + e.config.player_url + "/video/" + e.config.video.id + "/submit-email",
                    confirmation: n.confirmation || i.confirmation || "Thanks! Your email was successfully submitted.",
                    referrer: e.config.request.referrer,
                    strings: {
                        email: "Email address",
                        fullName: "Name (optional)",
                        nothanks: "No thanks",
                        submit: "Submit"
                    }
                }),
                t.modal = !0,
                t.logo = !1,
                t.preventBackgroundClose = !0,
                t.noblur = n.noblur,
                t
            }
        };
        return c(),
        h
    }
    function Kt(e, t) {
        function n(e, t) {
            return t.indexOf(e) !== -1
        }
        function i() {
            if (n(e.config.embed.outro, ["vod"]))
                return x = "vod",
                C = r(x),
                B === !0 && l(),
                nn.resolve(C);
            N = !0;
            var t = "https://" + e.config.player_url + "/video/" + e.config.video.id + "/outro?on_site=" + e.config.embed.on_site + "&type=" + e.config.embed.outro + "&email=" + (e.config.embed.email ? 1 : 0);
            return h(t, {
                withCredentials: !0
            }).then(function(e) {
                return JSON.parse(e)
            }).then(function(e) {
                return x = e.type,
                C = r(x, e.data),
                o(),
                C
            })
        }
        function r(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = O(e.element.clientWidth * Un.devicePixelRatio, e.element.clientHeight * Un.devicePixelRatio)
              , o = r.width
              , a = r.height;
            if (i.img_base && (i.bgimage = R({
                width: o,
                height: a,
                baseUrl: i.img_base,
                webpSupport: e.config.request.flags.webp
            })),
            n(t, ["vod"])) {
                var s = "undefined" != typeof e.config.video.vod.is_preorder ? e.config.video.vod.is_preorder : !!e.config.video.vod.date_available
                  , u = e.config.video.vod.is_coming_soon
                  , c = e.config.video.vod.date_available_formatted_datetime || e.config.video.vod.date_available
                  , l = "Coming soon to Vimeo On Demand.";
                u && c && (l = "Coming soon to Vimeo On Demand on " + c + "."),
                s && (l = "Pre-order now. Watch on " + c + "."),
                i = {
                    purchased: e.config.user.purchased,
                    title: e.config.video.vod.feature_title,
                    url: e.config.video.vod.url,
                    currency: e.config.request.currency,
                    countries: e.config.video.vod.countries,
                    country: e.config.request.country,
                    buttons: e.config.video.vod.purchase_options,
                    translationMap: e.config.request.dynamic_translation_map,
                    isPreorder: s,
                    isComingSoon: u,
                    releaseDate: c,
                    strings: {
                        watch: s ? "Watch on " + c : "Watch Now",
                        preRelease: l
                    }
                }
            }
            return n(t, ["videos", "threevideos", "promoted"]) && (e.config.user.following = i.following,
            i = {
                contexts: Array.isArray(i) ? i : [i],
                owner: e.config.video.owner.id,
                bgimage: i.bgimage,
                following: i.following
            },
            i.contexts && i.contexts.forEach(function(t) {
                t.videos.forEach(function(n) {
                    n.fullTitle = n.title,
                    n.byline = "",
                    n.owner.id !== i.owner && (n.fullTitle = n.title + " from " + n.owner.name,
                    n.byline = "from " + n.owner.name),
                    n.thumbnail_base && (n.thumbnail = R({
                        width: Math.round(o / t.videos.length),
                        height: Math.round(a / t.videos.length),
                        baseUrl: n.thumbnail_base,
                        webpSupport: e.config.request.flags.webp
                    }))
                })
            })),
            n(t, ["share"]) && (i.strings = {
                back: "Back"
            }),
            i
        }
        function o() {
            C && (C.bgimage && M(C.bgimage),
            C.contexts && C.contexts.forEach(function(e) {
                e.videos.forEach(function(e) {
                    M(e.thumbnail)
                })
            }))
        }
        function a() {
            var e = document.querySelector(".js-outro-followWrap");
            if (e) {
                var t = window.getComputedStyle(e)
                  , n = parseFloat(t.fontSize);
                e.style.width = e.clientWidth / n + "em"
            }
        }
        function s() {
            var e = Mt(A);
            e.set("outro", [{
                query: function() {
                    return this.clientWidth >= U && this.clientHeight >= H || this.clientWidth >= W
                },
                classNames: "outro--link-medium"
            }, {
                query: function() {
                    return this.clientWidth >= z && this.clientHeight >= K || this.clientWidth >= G && this.clientHeight >= X
                },
                classNames: "outro--link-large"
            }])
        }
        function u() {
            var e = t.querySelector(".js-outro-content")
              , n = E.getShareData();
            e.innerHTML = n.template,
            E.setup()
        }
        function c() {
            var e = t.querySelector(".js-outro-content")
              , n = T.getData({}, C);
            e.innerHTML = n.template
        }
        function l() {
            if (I = !0,
            n(x, ["beginning"]))
                return A.innerHTML = "",
                void e.events.fire(fn.reset);
            if (null === C && !N)
                return void i().then(function() {
                    return l()
                }).catch(function() {});
            if (n(x, ["videos", "threevideos", "promoted"])) {
                var r = C.contexts.reduce(function(e, t) {
                    return e + t.videos.length
                }, 0);
                if (0 === r)
                    return;
                C.showFollowButton = !e.config.user.owner && e.config.user.logged_in,
                C.strings = {
                    follow: "Follow",
                    following: "Following",
                    unfollow: "Unfollow"
                }
            }
            C && (C.target = !e.config.embed.on_site);
            var o = x;
            n(x, ["threevideos", "promoted"]) && (o = "videos"),
            A.innerHTML = Mn.render("outro_" + o, C),
            A.setAttribute("data-type", o),
            t.classList.remove("hidden"),
            t.removeAttribute("hidden"),
            F = !0,
            n(x, ["videos", "threevideos"]) ? a() : n(x, ["link"]) ? s() : n(x, ["share"]) ? u() : n(x, ["email"]) && c(),
            window.requestAnimationFrame(function() {
                window.requestAnimationFrame(function() {
                    t.classList.add("in"),
                    v()
                })
            })
        }
        function d() {
            E.destroy(),
            I = !1,
            D = !1,
            F = !1,
            window.requestAnimationFrame(function() {
                t.classList.remove("in"),
                e.events.fire(hn.outroHidden),
                S()
            })
        }
        function f() {
            return F ? void d() : void (I && (I = !1,
            e.events.fire(hn.outroHidden)))
        }
        function v() {
            if (!D && t.clientWidth) {
                Tn(window).off("resize", j),
                D = !0;
                var n = [];
                C && C.contexts && C.contexts.forEach(function(e) {
                    e.videos && e.videos.forEach(function(e) {
                        var t = e.id
                          , i = A.querySelector('[data-video-id="' + t + '"]');
                        i && i.clientWidth > 0 && n.push(t)
                    })
                }),
                e.events.fire(hn.outroDisplayed, n)
            }
        }
        function p() {
            e.events.on(hn.playProgress, function(e, t, n) {
                B = !1,
                !N && null === C && e >= t - q && i().catch(function() {})
            })
        }
        function m() {
            e.events.on(hn.playInitiated, function() {
                n(e.config.embed.outro, ["nothing", "beginning"]) && (x = e.config.embed.outro,
                C = !1)
            }),
            e.events.on(hn.ended, function() {
                P = setTimeout(function() {
                    e.events.fire(fn.showOutro)
                }, V)
            }),
            e.events.on(hn.loadVideo, function() {
                clearTimeout(P)
            }),
            e.events.on(fn.showOutro, function(t, n) {
                e.performDelegateAction(on.showOutro, function() {
                    t && (x = t,
                    C = null,
                    N = !1),
                    n && n.data && (C = r(t, n.data)),
                    B = !0,
                    l()
                })
            }),
            e.events.on(fn.hideOutro, function() {
                f()
            }),
            Tn(t).on("click", ".js-videoLink", function(t) {
                e.events.fire(hn.outroVideoPressed, parseInt(this.getAttribute("data-video-id"), 10))
            }),
            Tn(t).on("click", ".js-cta", function(t) {
                e.events.fire(hn.outroCtaPressed, this.href)
            }),
            Tn(t).on("click", ".js-link", function(t) {
                e.events.fire(hn.outroLinkPressed, this.href)
            }),
            Tn(t).on("click", ".js-imageLink", function(t) {
                e.events.fire(hn.outroImagePressed, this.href)
            }),
            Tn(t).on("transitionend", function(e) {
                t.classList.contains("in") || (t.classList.add("hidden"),
                t.setAttribute("hidden", ""))
            }, !1),
            e.events.on([hn.played, hn.seeked, hn.scrubbingStarted], f),
            e.events.on(hn.outroDisplayed, function() {
                e.element.classList.add("player-outroVisible")
            }).on(hn.outroHidden, function() {
                e.element.classList.remove("player-outroVisible")
            })
        }
        function g() {
            L(t, ".js-outro-follow", function() {
                e.events.fire(hn.followButtonPressed)
            }),
            Tn(t).on("mouseleave", ".js-outro-follow", function(e) {
                var t = document.querySelector(".js-outro-follow");
                t && t.classList.remove("outro-follow--activated")
            }),
            e.events.on(hn.followed, function() {
                var e = document.querySelector(".js-outro-follow");
                e && (e.setAttribute("aria-pressed", !0),
                e.classList.add("outro-follow--activated"))
            }),
            e.events.on(hn.unfollowed, function() {
                var e = document.querySelector(".js-outro-follow");
                e && e.setAttribute("aria-pressed", !1)
            })
        }
        function y() {
            e.events.on(fn.showOverlay, function() {
                setTimeout(function() {
                    t.classList.add("hidden")
                }, 150)
            }),
            e.events.on(hn.overlayClosed, function() {
                t.classList.contains("in") && t.classList.remove("hidden")
            })
        }
        function _() {
            e.events.on(fn.reset, function() {
                C = null,
                N = !1
            })
        }
        function b() {
            L(t, ".js-vod-button", function() {
                var t = this.getAttribute("data-product-id");
                return e.events.fire(hn.vodButtonPressed, t),
                !1
            }),
            L(t, ".js-vod-watch", function() {
                if (!("date_available"in e.config.video.vod))
                    return f(),
                    e.events.fire(hn.vodButtonPressed),
                    !1
            })
        }
        function w() {
            A && (E = new Wt(e,A),
            E.events.on(hn.embedViewShown, function() {
                e.config.embed.settings.share.embed_only || (t.querySelector(".js-back").classList.remove("cloaked"),
                t.classList.add("embed-active"))
            }).on(hn.shareViewShown, function() {
                t.classList.remove("embed-active")
            }),
            L(t, ".js-back", function() {
                return E.showShareView(),
                !1
            }),
            E.events.on(hn.shareViewEnd, function() {
                t.querySelector(".js-back").classList.add("cloaked")
            }))
        }
        function k() {
            A && (T = new zt(e,A))
        }
        function S() {
            Tn(window).off("resize", j),
            Tn(window).on("resize", j)
        }
        var E, T, x, P, A = t.querySelector(".js-outro"), C = null, I = !1, F = !1, D = !1, B = !1, q = 10, N = !1, j = Wl(v, 250), V = 250, U = 360, H = 203, W = 415, z = 360, K = 340, G = 415, X = 234;
        return p(),
        m(),
        g(),
        y(),
        _(),
        b(),
        w(),
        k(),
        S(),
        {}
    }
    function Gt() {
        return zd[Math.floor(Math.random() * zd.length)]
    }
    function Xt(e, t) {
        function n() {
            var e = o(t)
              , n = o(te)
              , i = o(re)
              , r = n.bottom + (e.height - n.bottom) / 2;
            return e.height - r - i.height / 2 + "px"
        }
        function a() {
            var e = o(t)
              , n = o(te)
              , i = o(ne)
              , r = e.height / 2
              , a = n.bottom + (e.height - n.bottom) / 2;
            return {
                top: r - i.height / 2 + "px",
                transform: "translateY(" + (a - r) + "px)"
            }
        }
        function s(r, o) {
            t.setAttribute("data-name", r),
            te.innerHTML = o.template,
            Un.iOS && In.element && (e.events.fire(hn.willExitFullscreen),
            In.exit()),
            o.noblur || (Z = document.activeElement,
            i(Z)),
            o.modal && d(),
            o.preventBackgroundClose && t.setAttribute("data-background-close", "false"),
            o.wrapperClass && t.classList.add(o.wrapperClass),
            o.icon.type && (o.logo && (re.classList.remove("hidden"),
            ne.classList.add("cloaked"),
            window.requestAnimationFrame(function() {
                re.innerHTML = Mn.render("logo"),
                re.style.bottom = n()
            })),
            ne.classList.remove("hidden"),
            ie.innerHTML = o.icon.html,
            window.requestAnimationFrame(function() {
                var e = a();
                ne.style.top = e.top,
                ne.style[Un.transformProperty] = e.transform
            }),
            t.setAttribute("data-icon", o.icon.type),
            ne.setAttribute("data-icon", o.icon.type),
            ie.setAttribute("data-icon", o.icon.type),
            "private-unlocked" === r && ie.classList.add("open")),
            t.classList.add("invisible"),
            t.classList.remove("hidden"),
            t.removeAttribute("hidden"),
            t.classList.add("in"),
            se = o,
            ae = r,
            oe = !0,
            e.events.fire(hn.overlayOpened, r),
            e.element.classList.add("player-overlayVisible"),
            ["share", "hd-not-allowed"].indexOf(r) > -1 && v(t),
            window.requestAnimationFrame(function() {
                t.classList.remove("invisible"),
                window.requestAnimationFrame(function() {
                    te.classList.add("in"),
                    ee.classList.add("in")
                })
            })
        }
        function u() {
            te.classList.remove("in"),
            te.classList.add("out")
        }
        function c(n) {
            if (!h() && oe) {
                t.removeAttribute("data-background-close"),
                ee.classList.remove("in"),
                ee.classList.add("out"),
                u(),
                t.classList.remove("in"),
                t.classList.add("out"),
                clearTimeout(Q),
                Q = setTimeout(l, 200),
                n && n.preventDefault && n.preventDefault();
                var i = t.querySelector(".js-back");
                i && i.classList.add("cloaked"),
                ue.destroy(),
                e.events.fire(hn.overlayClosed, ae),
                e.element.classList.remove("player-overlayVisible"),
                oe = !1,
                ae = null,
                se = null,
                window.requestAnimationFrame(function() {
                    Z && (r(Z),
                    Z = null)
                })
            }
        }
        function l() {
            t.setAttribute("hidden", ""),
            t.removeAttribute("data-name"),
            t.removeAttribute("data-icon"),
            t.classList.add("hidden"),
            t.classList.remove("out"),
            t.classList.remove("embed-active"),
            t.classList.remove("modal"),
            t.classList.remove("embed-only"),
            ee.classList.remove("out"),
            ee.classList.remove("in"),
            ne.removeAttribute("data-icon"),
            ne.classList.add("hidden"),
            ne.classList.remove("animate"),
            ie.removeAttribute("data-icon"),
            ie.innerHTML = "",
            re.classList.add("hidden"),
            te.classList.remove("out"),
            te.innerHTML = "",
            e.events.fire(hn.overlayCleared)
        }
        function d() {
            t.classList.add("modal"),
            t.setAttribute("data-modal", "true")
        }
        function f() {
            t.setAttribute("data-modal", "false")
        }
        function h() {
            return "true" === t.getAttribute("data-modal")
        }
        function p(e) {
            if ("yes" === e.form.getAttribute("data-bubble")) {
                e.form.setAttribute("data-bubble", "no");
                var n = t.querySelector(".validation-bubble")
                  , i = n.querySelector(".validation-bubble-message");
                i.innerHTML = e.validationMessage || "There is an error with this input.";
                var r = o(e)
                  , a = o(e.form);
                n.style.left = r.left - a.left + "px",
                n.style.top = r.height + 1 + "px",
                n.classList.remove("hidden"),
                e.focus(),
                window.requestAnimationFrame(function() {
                    n.classList.add("animate")
                }),
                m()
            }
        }
        function m(e) {
            var n = t.querySelector(".validation-bubble");
            if (n) {
                if (e)
                    return clearTimeout(J),
                    void n.classList.remove("animate");
                clearTimeout(J),
                J = setTimeout(function() {
                    n.classList.remove("animate")
                }, 5e3)
            }
        }
        function g(e) {
            var n = t.querySelector("input[type=password]");
            return n.form.classList.contains("submitted") ? (n.setAttribute("aria-invalid", "false"),
            n.setCustomValidity(""),
            n.checkValidity && !n.checkValidity() ? (n.setAttribute("aria-invalid", "true"),
            n.validity.valueMissing && n.setCustomValidity("Please enter the password."),
            e || p(n),
            !1) : (m(!0),
            !0)) : null
        }
        function y(e, n, i) {
            v(t);
            var r = mn(e.querySelectorAll("input"))
              , o = r.map(function(e) {
                return e.name ? encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value) : encodeURIComponent(e.value)
            }).join("&")
              , a = new XMLHttpRequest;
            a.open(e.method, e.action + window.location.search, !0),
            a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            a.withCredentials = !0,
            a.timeout = 3e3,
            a.onload = function() {
                var e;
                try {
                    e = JSON.parse(a.responseText)
                } catch (e) {}
                n(e, a)
            }
            ,
            a.onerror = function(e) {
                i(e)
            }
            ,
            a.send(o)
        }
        function _() {
            b(),
            k(),
            f(),
            u()
        }
        function b() {
            re.classList.add("animate")
        }
        function w() {
            re.classList.add("hidden"),
            re.classList.remove("animate")
        }
        function k() {
            ne.classList.remove("cloaked"),
            ne.classList.add("animate"),
            window.requestAnimationFrame(function() {
                ne.style[Un.transformProperty] = "translateY(-10px)"
            })
        }
        function S() {
            ne.classList.add("centered"),
            ne.style[Un.transformProperty] = ""
        }
        function E() {
            ie.classList.add("open")
        }
        function T() {
            ie.classList.add("pulled-back")
        }
        function x() {
            ie.classList.add("out"),
            ie.classList.remove("pulled-back")
        }
        function P() {
            Tn(t).on("transitionend", ".overlay-logo", function(e) {
                "opacity" === e.propertyName && this.classList.contains("animate") && w()
            }),
            Tn(t).on("transitionend", ".overlay-icon-wrapper", function(e) {
                e.propertyName.indexOf("transform") > -1 && ("" === this.style[Un.transformProperty] ? (this.classList.remove("centered"),
                "lock" !== this.getAttribute("data-icon") || ie.classList.contains("open") || ie.querySelector("canvas") ? T() : setTimeout(E, 100)) : "translateY(-10px)" === this.style[Un.transformProperty] && S())
            }),
            Tn(t).on("transitionend", ".overlay-icon", function(e) {
                e.propertyName.indexOf("transform") > -1 && (this.classList.contains("out") ? (f(),
                c()) : this.classList.contains("pulled-back") ? x() : this.classList.contains("open") && T())
            })
        }
        function A() {
            return {
                modal: !1,
                template: null,
                logo: !1,
                icon: {
                    type: null,
                    html: null
                }
            }
        }
        function C(t) {
            return t.icon = {
                type: "lock",
                html: Mn.render("icon_lock")
            },
            t.modal = !0,
            t.logo = !0,
            t.template = Mn.render("private_locked", {
                action: "https://" + e.config.vimeo_url + "/log_in",
                strings: {
                    title: "Private Video",
                    subtitle: "Log in to watch (if you have permission)",
                    logIn: "Log in",
                    logInLabel: "Log in (opens in a new window)"
                }
            }),
            t
        }
        function O(t) {
            return t.icon = {
                type: "lock",
                html: Mn.render("icon_lock")
            },
            t.template = Mn.render("password", {
                action: "https://" + e.config.player_url + "/video/" + e.config.video.id + "/check-password?referrer=" + e.config.request.referrer,
                strings: {
                    title: "Password Required",
                    subtitle: "If youâve got it, enter it below.",
                    password: "Password",
                    watch: "Watch Video"
                }
            }),
            t.modal = !0,
            t.logo = !!e.config.embed.settings.branding,
            t
        }
        function R(e) {
            return e.icon = {
                type: "lock",
                html: Mn.render("icon_lock")
            },
            e.template = Mn.render("private_unlocked", {
                strings: {
                    title: "Private Video",
                    subtitle: "You are logged in and have permission to watch (congrats).",
                    watch: "Watch Video"
                }
            }),
            e
        }
        function M(e, t) {
            return e.template = Mn.render("error", {
                title: t.title,
                message: t.message
            }),
            e.modal = !!t.modal,
            e.logo = !!t.logo,
            t.icon && "lock" === t.icon && (e.icon = {
                type: "lock",
                html: Mn.render("icon_lock")
            }),
            e
        }
        function I(t) {
            return t.template = Mn.render("help", {
                onSite: e.config.embed.on_site,
                strings: {
                    title: "Keyboard Shortcuts",
                    volumeUp: "Volume up",
                    volumeDown: "Volume down",
                    scrubForward: "Scrub forward",
                    scrubBackwards: "Scrub backwards",
                    like: "Like",
                    share: "Share",
                    watchLater: "Watch Later",
                    captions: "Toggle Captions",
                    prefs: "Toggle Preferences Menu",
                    fullscreen: "Toggle fullscreen",
                    viewOnVimeo: "View on Vimeo"
                }
            }),
            t
        }
        function F(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.redirectUrl
              , i = t.title
              , r = t.buttonText
              , o = t.ignoreText
              , a = t.bottomText
              , s = t.newWindow;
            return e.template = Mn.render("overlay_app_redirect", {
                redirectUrl: n,
                newWindow: s,
                strings: {
                    title: i,
                    buttonText: r,
                    ignoreText: o,
                    bottomText: a
                }
            }),
            e.modal = !1,
            e.logo = !1,
            e.preventBackgroundClose = !0,
            e
        }
        function D() {
            e.events.on(fn.hideOverlay, function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e.unmakeModal && f(),
                c()
            }),
            e.events.on(fn.showOverlay, function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = function() {
                    var e = A();
                    switch (t) {
                    case "share":
                        return s(t, ue.getShareData(e, n)),
                        void ue.setup();
                    case "private-locked":
                        return void s(t, C(e));
                    case "password":
                        return void s(t, O(e));
                    case "private-unlocked":
                        return void s(t, R(e));
                    case "error":
                        return void s(t, M(e, n));
                    case "help":
                        return void s(t, I(e));
                    case "email-capture":
                        return void s(t, ce.getData(e, n));
                    case "app-redirect":
                        return void s(t, F(e, n))
                    }
                };
                return oe && !n.nohide ? "share" !== ae && "help" !== ae && "hd-not-allowed" !== ae || ae !== t ? (e.events.once(hn.overlayCleared, i),
                f(),
                void c()) : void c() : void i()
            }),
            Tn(t).on("input", "input", function() {
                this.form.classList.add("interacted")
            }).on(["focus", "blur"], "input", function() {
                m(!0)
            }).on("transitionend", ".validation-bubble", function(e) {
                "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && this.classList.add("hidden")
            }),
            e.events.on([hn.overlayCloseButtonPressed, hn.played], c),
            e.events.on(hn.privateUnlocked, function() {
                "private-locked" === ae && (f(),
                c())
            }),
            e.events.on(hn.configChanged, function() {
                "share" === ae && (se = ue.getShareData(A()),
                te.innerHTML = se.template,
                ue.setup())
            }),
            Tn(window).on("resize", function() {
                if (oe) {
                    re.style.bottom = n();
                    var e = a();
                    ne.style.top = e.top,
                    ne.style[Un.transformProperty] = e.transform
                }
            })
        }
        function B() {
            he = Mt(e.element),
            he.on("change:hideOverlay", q),
            he.set("emailcapture", [{
                query: function() {
                    return this.clientWidth < le || this.clientHeight < de
                },
                props: {
                    hideOverlay: !0
                }
            }, {
                query: function() {
                    return this.clientWidth >= le && this.clientHeight >= de
                },
                props: {
                    hideOverlay: !1
                }
            }]),
            e.events.on(hn.ready, N),
            e.events.on(hn.configChanged, N),
            e.events.on(hn.playProgress, j),
            ce.events.on(hn.emailCaptureEnd, V)
        }
        function q(t) {
            t.hideOverlay && oe && "email-capture" === ae ? (ve = oe,
            f(),
            c()) : !t.hideOverlay && ve && (ve = !1,
            e.events.fire(fn.showOverlay, "email-capture"))
        }
        function N() {
            var t = e.config.embed.email || {};
            if (e.telecine) {
                var n = t.timecode || 0;
                fe = e.telecine.currentTime > n
            }
            if (t && "before" === t.position && !fe) {
                if (he.prop("hideOverlay"))
                    return void (ve = !0);
                e.events.fire(fn.showOverlay, "email-capture")
            }
        }
        function j() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , n = e.config.embed.email || {};
            n && "during" === n.position && (t < n.timecode && (fe = !1),
            t >= n.timecode && !fe && (fe = !0,
            e.events.fire(fn.showOverlay, "email-capture")))
        }
        function V() {
            f(),
            c()
        }
        function U() {
            ue.events.on(hn.embedViewShown, function() {
                e.config.embed.settings.share.embed_only || (t.querySelector(".js-back").classList.remove("cloaked"),
                t.classList.add("embed-active"))
            }).on(hn.shareViewShown, function() {
                t.classList.remove("embed-active")
            }),
            L(t, ".js-back", function() {
                return ue.showShareView(),
                !1
            }),
            ue.events.on(hn.shareViewEnd, function() {
                t.querySelector(".js-back").classList.add("cloaked")
            })
        }
        function H() {
            Tn(te).on("click", ".popup", function() {
                return e.events.fire(fn.openPopup, "login-private-locked"),
                !1
            })
        }
        function W() {
            function t(t) {
                function n(t, n) {
                    return t === !1 ? void i(n.status, n) : (e.events.fire(hn.passwordUnlocked, t),
                    "icon-hidden" === window.getComputedStyle(ee, ":after").content ? (f(),
                    void c()) : void _())
                }
                function i(e) {
                    a.classList.remove("loading"),
                    o.setCustomValidity("Uh oh. There was a problem. Please try again."),
                    o.setAttribute("aria-invalid", "true"),
                    p(o)
                }
                var r = g();
                if (!r)
                    return !1;
                var o = t.querySelector("input[type=password]")
                  , a = t.querySelector("input[type=submit]");
                a.classList.add("loading"),
                y(t, n, i)
            }
            Tn(te).on("click", ".password input[type=submit]", function() {
                this.form.classList.add("submitted"),
                this.form.setAttribute("data-bubble", "yes"),
                g(!0)
            }).on("submit", ".password form", function() {
                return t(this),
                !1
            }).on(["focus", "input"], [".password input[type=email]", ".password input[type=password]"], function() {
                g()
            })
        }
        function z() {
            L(te, ".unlocked button", function() {
                var t = o(ie);
                0 === t.width ? (b(),
                f(),
                c()) : _(),
                Un.iPad || Un.iPhone || e.events.once(hn.overlayCleared, function() {
                    e.events.fire(hn.playButtonPressed)
                })
            })
        }
        function K() {
            e.events.on(hn.stereoscopicButtonPressed, function() {
                e.events.fire(fn.showOverlay, "app-redirect", {
                    redirectUrl: e.doNotTrackEnabled ? "https://play.google.com/store/apps/details?id=com.vimeo.android.videoapp&hl=en" : st(e.config.video.id, "player-spatial-redirect"),
                    title: "Headset viewing isnât currently supported in mobile browsers.",
                    buttonText: "Watch in the Vimeo app",
                    ignoreText: null,
                    bottomText: null,
                    newWindow: !e.config.embed.on_site
                })
            }),
            Tn(te).on("click", ".app-redirect-ignore", function() {
                c()
            }),
            Tn(te).on("click", "[data-new-window]", function(e) {
                return window.open(document.querySelector(".app-redirect-button").getAttribute("href")),
                !1
            })
        }
        function G() {
            var t = function(e, t, n) {
                var i = window.location.search.indexOf("partypooper=1") > -1 || window.location.search.indexOf("fun=0") > -1;
                switch (e) {
                case "not-supported":
                    return {
                        name: "notsupported",
                        title: i ? "Sorry" : Gt(),
                        message: n > .5 ? "There was an issue playing this video." : "This video canât be played with your current setup."
                    };
                default:
                    return {
                        name: e,
                        title: t && t.title || "Sorry",
                        message: t && t.message || "There was an issue with playback."
                    }
                }
            };
            e.events.on(hn.error, function(n) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    modal: !0,
                    final: !0
                };
                if (i.final !== !1) {
                    var r = e.telecine ? e.telecine.currentTime : 0
                      , o = t(n, i, r)
                      , a = o.name
                      , u = o.title
                      , l = o.message
                      , d = A();
                    return d.modal = i.modal,
                    d.template = Mn.render("error", {
                        title: u,
                        message: l
                    }),
                    oe ? (c(),
                    void e.events.once(hn.overlayClosed, function() {
                        return s(a, d)
                    })) : void s(a, d)
                }
            })
        }
        function X() {
            e.events.on(hn.configChanged, function() {
                window.requestAnimationFrame(function() {
                    f(),
                    c()
                })
            })
        }
        function Y() {
            L(t, ".js-close", function() {
                e.events.fire(hn.overlayCloseButtonPressed)
            }),
            Tn(t).on(["click", "touchend"], [".window-wrapper", ".js-share", ".overlay-logo"], function(e) {
                e.stopPropagation()
            }).on(["click", "touchend"], [".overlay-cell", "nav"], function() {
                return "false" === t.getAttribute("data-background-close") || (e.events.fire(hn.overlayCloseButtonPressed),
                !1)
            })
        }
        function $() {
            e.events.on(fn.showOutro, function() {
                t.classList.add("hidden")
            }),
            e.events.on(hn.outroHidden, function() {
                t.classList.contains("in") && t.classList.remove("hidden")
            })
        }
        var Q, J, Z, ee = t.querySelector(".overlay-cell"), te = t.querySelector(".overlay"), ne = t.querySelector(".overlay-icon-wrapper"), ie = ne.querySelector(".overlay-icon"), re = t.querySelector(".overlay-logo"), oe = !1, ae = null, se = null, ue = new Wt(e,te), ce = new zt(e,te), le = 300, de = 169, fe = !1, he = void 0, ve = !1;
        return D(),
        P(),
        B(),
        U(),
        K(),
        H(),
        W(),
        z(),
        G(),
        X(),
        Y(),
        $(),
        e.events.fire(hn.overlayModuleReady),
        {}
    }
    function Yt(e, n) {
        function i(e, t) {
            var n = ".player-" + c + " "
              , i = n + e.join("," + n);
            if (t) {
                var r = l + " ";
                i += "," + r + e.join("," + r)
            }
            return d && (i = i.replace(/:hover/g, ":active")),
            i = i.replace(/ &/g, "")
        }
        function r() {
            var e = document.createElement("style");
            return e.setAttribute("data-player", c),
            document.querySelector("head").appendChild(e),
            f = e.sheet
        }
        function o() {
            for (; f.cssRules.length > 0; )
                f.deleteRule(0)
        }
        function a() {
            f ? o() : r()
        }
        function s(e) {
            a();
            var n = e.complement
              , r = new _e(23,35,34,.75)
              , o = new _e(0,0,0,.15)
              , s = o.overlayOn(e);
            r.contrast(n).ratio < 3 && n.lighten(5, 3, r);
            var u, c = e.lightness < 40 ? e.clone().lighten(15, 3, e) : e.clone().darken(15, 3, e);
            return t(i(Kd, !0), "color:" + e.hex + " !important", f),
            t(i(Gd, !0), "color:" + n.hex + " !important", f),
            t(i(Xd), "color:" + e.hex, f),
            t(i(Qd), "fill:" + e.hex, f),
            t(i(Zd), "stroke:" + e.hex, f),
            t(i(tf), "background-color:" + e.hex, f),
            t(i(nf), "border-color:" + e.hex, f),
            t(i(Yd), "color:" + n.hex, f),
            t(i($d), "fill:" + n.hex, f),
            t(i(Jd), "fill:" + c.hex, f),
            t(i(ef), "stroke:" + c.hex, f),
            t(i(lf), "border-color:" + s.hex, f),
            t(i(df), "background-color:" + s.hex, f),
            e.luminance > .95 && (n = e.clone().darken(15, 3, e),
            t(i(rf), "color:" + n.hex, f),
            t(i(of), "fill:" + n.hex, f),
            t(i(af), "stroke:" + n.hex, f),
            c = n.clone().darken(15, 3, n),
            t(i(Jd), "fill:" + c.hex, f),
            t(i(ef), "stroke:" + c.hex, f)),
            e.yiq > 175 && e.luminance < .95 && (u = c.clone().darken(15, 3, c),
            t(i(Jd), "fill:" + u.hex, f),
            t(i(ef), "stroke:" + u.hex, f),
            t(i(sf), "color:" + c.hex, f),
            t(i(uf), "fill:" + c.hex, f),
            t(i(cf), "stroke:" + c.hex, f)),
            {
                main: e.hex,
                selected: c.hex,
                sidedockHover: u ? c.hex : e.luminance > .95 ? n.hex : _e.white.hex,
                sidedockSelected: e.luminance > .95 ? n.hex : e.hex,
                sidedockSelectedHover: u ? u.hex : c.hex
            }
        }
        function u() {
            e.events.on(fn.changeColor, function(t) {
                var n;
                try {
                    n = new _e(t)
                } catch (e) {
                    n = new _e("00adef")
                }
                var i = s(n);
                e.config._colors = i,
                e.config.embed.color = i.main.replace("#", ""),
                e.events.fire(hn.colorChanged, e.config.embed.color)
            }),
            e.events.fire(fn.changeColor, e.config.embed.color)
        }
        var c = n.uuid
          , l = n.id
          , d = n.isMobileDevice
          , f = null;
        return u(),
        {}
    }
    function $t(e) {
        function t() {
            e.events.on(fn.openPopup, function(t, n) {
                var i = "https://" + e.config.player_url
                  , o = i + "/video/" + e.config.video.id
                  , a = 670
                  , s = 545;
                switch (t) {
                case "login-like":
                    r = l(o + "/login/like", "login", {
                        width: a,
                        height: s
                    }),
                    e.events.fire(hn.popupOpened, t);
                    break;
                case "login-watch-later":
                    r = l(o + "/login/watch-later", "login", {
                        width: a,
                        height: s
                    }),
                    e.events.fire(hn.popupOpened, t);
                    break;
                case "login-private-locked":
                    r = l(o + "/login/private", "login", {
                        width: a,
                        height: s
                    }),
                    e.events.fire(hn.popupOpened, t);
                    break;
                case "purchase":
                    var u = i + "/video/" + (e.config.video.vod.feature_id || e.config.video.id) + "/purchase/vod";
                    n && n.productId && (u += "/" + n.productId),
                    u += "?referrer=" + encodeURIComponent(e.config.request.referrer),
                    r = l(u, "purchase", {
                        width: 790,
                        height: 670
                    }),
                    e.events.fire(hn.popupOpened, t)
                }
            }),
            window.closePopup = function(t) {
                if (r) {
                    try {
                        r.close(),
                        e.events.fire(hn.popupClosed, t)
                    } catch (e) {}
                    r = null
                }
            }
        }
        function n() {
            e.config.embed.on_site || (window.confirmPurchase = function(t, n, i) {
                return n ? void e.loadVideo(t) : void (i && e.events.fire(hn.playButtonPressed))
            }
            )
        }
        function i() {
            e.config.embed.on_site || (window.confirmLoginAction = function(t, n) {
                e.events.fire(hn.userLogIn, n)
            }
            )
        }
        var r = null;
        return t(),
        n(),
        i(),
        {}
    }
    function Qt(e, t) {
        function n() {
            return H || K || G
        }
        function i() {
            j && (J || (V && Q || n() || ee) && (U || (!W && !z || n()) && (j = !1,
            e.events.fire(hn.sidedockVisibilityChanged, j),
            (Z || t).classList.add("invisible"))))
        }
        function r() {
            if (!j && !n()) {
                var i = Z || t;
                i.classList.add("invisible"),
                i.classList.remove("hidden"),
                i.removeAttribute("hidden"),
                t.classList.remove("hidden"),
                t.removeAttribute("hidden"),
                t.classList.contains("vod") && t.classList.remove("vod"),
                setTimeout(function() {
                    j = !0,
                    e.events.fire(hn.sidedockVisibilityChanged, j),
                    i.classList.remove("invisible")
                }, 0)
            }
        }
        function o() {
            V = !1,
            U = !1,
            J = !1
        }
        function a(t, n, i) {
            var r = "data-label-" + i
              , o = "add" !== i || e.config.user.logged_in ? r : "data-label-add-logged-out";
            t.setAttribute("aria-label", t.getAttribute(o)),
            n.classList.add("hidden"),
            n.setAttribute("hidden", ""),
            n.firstChild.innerHTML = t.getAttribute(r)
        }
        function s() {
            var e = X.indexOf(this);
            Y.forEach(function(t, n) {
                n !== e && t && t.classList.add("invisible")
            }),
            e >= 0 && Y[e] && (Y[e].classList.add("invisible"),
            Y[e].classList.remove("hidden"),
            Y[e].removeAttribute("hidden", ""),
            $ = window.requestAnimationFrame(function() {
                $ = window.requestAnimationFrame(function() {
                    Y[e].classList.remove("invisible"),
                    Y[e].classList.add("visible")
                })
            }))
        }
        function u() {
            var e = "BUTTON" === this.tagName ? this : this.querySelector("button")
              , t = X.indexOf(e);
            t >= 0 && Y[t] && ($ && (window.cancelAnimationFrame($),
            $ = null),
            Y[t].classList.add("invisible"))
        }
        function c() {
            if (O) {
                var e = O.parentElement;
                Z.insertBefore(e, Z.firstChild)
            }
        }
        function l() {
            if (O) {
                var e = O.parentElement;
                t.insertBefore(e, Z)
            }
        }
        function d() {
            if (e.config.view === rn.main || e.config.view === rn.privateUnlocked) {
                var n = e.config.embed.settings
                  , i = e.config.video.vod && "purchase_options"in e.config.video.vod && e.config.video.vod.purchase_options.length
                  , r = i && e.config.video.vod.is_coming_soon
                  , o = "ondemand.main" === e.config.embed.context
                  , a = e.config.video.vod && e.config.user.purchased ? 1 : 0
                  , s = i && n.vod && E(e.config.video.vod.countries, e.config.request.country);
                s && r && o && (s = !1);
                var u = i && e.config.video.vod.purchase_options[0]
                  , l = null;
                u && (l = k(e.config.request.dynamic_translation_map, "label_string", e.config.request.currency, u)),
                t.innerHTML = Mn.render("sidedock", {
                    loggedIn: !!e.config.user.logged_in,
                    vodButton: s,
                    purchased: a,
                    vodPurchaseInfo: u,
                    vodDisplayLabel: l,
                    likeButton: n.like,
                    liked: e.config.user.liked,
                    watchLaterButton: n.watch_later,
                    addedToWatchLater: e.config.user.watch_later,
                    collectionsButton: n.collections,
                    shareButton: n.share,
                    strings: {
                        like: "Like",
                        likeLoggedOut: "Like (opens in a new window)",
                        unlike: "Unlike",
                        watchLaterAdd: "Add to Watch Later",
                        watchLaterAddLoggedOut: "Add to Watch Later (opens in a new window)",
                        watchLaterRemove: "Remove from Watch Later",
                        collections: "Add to collections",
                        share: n.share && n.share.embed_only ? "Embed" : "Share"
                    }
                }),
                O = t.querySelector(".vod-button"),
                s && (Z = t.querySelector(".sidedock-inner"),
                a && c());
                var d = Z || t;
                i && s && !e.config.embed.settings.instant_sidedock ? t.classList.add("vod") : Un.touch && (j = !0,
                e.events.fire(hn.sidedockVisibilityChanged, j),
                d.classList.remove("hidden"),
                d.removeAttribute("hidden"),
                d.classList.remove("invisible")),
                R = t.querySelector(".like-button"),
                M = t.querySelector(".like-label"),
                I = t.querySelector(".watch-later-button"),
                F = t.querySelector(".watch-later-label"),
                D = t.querySelector(".collections-button"),
                B = t.querySelector(".collections-label"),
                q = t.querySelector(".share-button"),
                N = t.querySelector(".share-label"),
                X = [O, R, I, q, D],
                Y = [null, M, F, N, B]
            }
        }
        function f() {
            var t = e.config.embed.settings.instant_sidedock
              , n = e.config.video.vod
              , i = n && "purchase_options"in n && n.purchase_options.length
              , o = n && E(e.config.video.vod.countries, e.config.request.country);
            (t || i && o) && (ee || r())
        }
        function h() {
            L(t, ".vod-button", function() {
                var t = O.getAttribute("data-product-id");
                e.events.fire(hn.vodButtonPressed, t)
            }, u),
            e.events.on(hn.outroDisplayed, function() {
                c(),
                t.classList.add("sidedock-outro"),
                "share" === e.config.embed.outro && (e.config.embed.settings.share = 0,
                d())
            }),
            e.events.on(hn.outroHidden, function() {
                l(),
                t.classList.remove("sidedock-outro"),
                "share" === e.config.embed.outro && (e.config.embed.settings.share = 1,
                d())
            })
        }
        function v() {
            L(t, ".like-button", function() {
                e.events.fire(hn.likeButtonPressed)
            }, u),
            e.events.on(hn.liked, function() {
                R && (R.classList.add("on"),
                a(R, M, "remove"))
            }),
            e.events.on(hn.unliked, function() {
                R && (R.classList.remove("on"),
                a(R, M, "add"))
            })
        }
        function p() {
            L(t, ".watch-later-button", function() {
                e.events.fire(hn.watchLaterButtonPressed)
            }, u),
            e.events.on(hn.addedToWatchLater, function() {
                I && (I.classList.add("on"),
                a(I, F, "remove"))
            }),
            e.events.on(hn.removedFromWatchLater, function() {
                I && (I.classList.remove("on"),
                a(I, F, "add"))
            })
        }
        function m() {
            L(t, ".collections-button", function() {
                e.events.fire(hn.collectionsButtonPressed)
            }, u)
        }
        function g() {
            L(t, ".share-button", function() {
                return e.events.fire(e.config.embed.settings.share.embed_only ? hn.embedButtonPressed : hn.shareButtonPressed),
                !1
            }, u)
        }
        function y() {
            var e = function(e) {
                "opacity" === e.propertyName && e.target.classList.contains("invisible") && (e.target.classList.add("hidden"),
                e.target.setAttribute("hidden", ""),
                e.target.classList.remove("visible"))
            };
            Tn(t).on("blur", "button", u).on("mouseleave", ".box", u).on(["focus", "pointerdown", "touchstart", "mouseenter"], "button", s).on("transitionend", "label", e),
            L(t, "label", function() {
                var e = Y.indexOf(this);
                e >= 0 && X[e].click()
            })
        }
        function _() {
            e.events.on([hn.mousedOut, hn.mouseTimeout], i).on(hn.mousedOver, r).on(hn.targetTimeReached, function() {
                Q = !0,
                i()
            }).on(hn.played, function() {
                V = !0
            }),
            Tn(t).on(["pointerenter", "pointerleave", "mouseenter", "mouseleave"], function(e) {
                return "pointerType"in e ? void ("mouse" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_MOUSE || (U = "pointerenter" === e.type || "MSPointerEnter" === e.type)) : void (U = "mouseover" === e.type)
            }),
            Tn(t).on("transitionend", function(e) {
                var n = Z || t;
                "opacity" === e.propertyName && n.classList.contains("invisible") && (n.classList.add("hidden"),
                n.setAttribute("hidden", ""),
                O && n.contains(O) && (t.classList.add("hidden"),
                t.setAttribute("hidden", "")))
            })
        }
        function b() {
            e.events.on(hn.willEnterFullscreen, function() {
                U = !1,
                i()
            }).on(hn.didExitFullscreen, function(e) {
                e || (J = !0)
            })
        }
        function w() {
            e.events.on([hn.airPlayActivated], function() {
                W = !0,
                r()
            }).on([hn.airPlayDeactivated], function() {
                W = !1
            })
        }
        function S() {
            e.events.on(hn.pictureInPictureActivated, function() {
                z = !0,
                r()
            }).on(hn.pictureInPictureDeactivated, function() {
                z = !1
            })
        }
        function T() {
            e.events.on(hn.overlayOpened, function() {
                H = !0,
                U = !1,
                i()
            }).on(hn.overlayClosed, function() {
                H = !1,
                r()
            })
        }
        function x() {
            e.events.on(hn.alertVisibilityChanged, function(e) {
                K = e,
                e && i()
            })
        }
        function P() {
            e.events.on([hn.menuCentered, hn.menuVisibilityChanged], function(e, t) {
                t.isCentered() && t.isVisible() && (G = !0,
                U = !1,
                i()),
                t.isCentered() && t.isVisible() || (G = !1,
                r())
            })
        }
        function A() {
            e.events.on(hn.configChanged, function() {
                d()
            })
        }
        function C() {
            e.events.on(fn.reset, function() {
                U = !1,
                Q = !1,
                i(),
                o()
            })
        }
        var O, R, M, I, F, D, B, q, N, j = !1, V = !1, U = !1, H = !1, W = !1, z = !1, K = !1, G = !1, X = [], Y = [], $ = null, Q = !1, J = !1, Z = null, ee = e.config.embed.autoplay && e.config.request.flags.autohide_controls;
        return d(),
        f(),
        h(),
        v(),
        p(),
        m(),
        g(),
        y(),
        _(),
        b(),
        w(),
        S(),
        T(),
        x(),
        P(),
        A(),
        C(),
        e.events.fire(hn.sidedockModuleReady),
        {}
    }
    function Jt(e, t) {
        function n() {
            g = !1,
            t.classList.add("invisible")
        }
        function i() {
            t.classList.remove("hidden"),
            t.removeAttribute("hidden"),
            setTimeout(function() {
                g = !0,
                t.classList.remove("invisible")
            }, 0)
        }
        function r() {
            return _ || b || w
        }
        function o() {
            if (g) {
                if (r())
                    return void n();
                if (T)
                    return void n();
                if (!k && S)
                    return E && y ? void 0 : void n()
            }
        }
        function a() {
            if (!g) {
                if (k && !r())
                    return void i();
                if (E && !x && !T)
                    return S || r() ? e.config.embed.settings.info_on_pause && E && !r() ? void i() : void 0 : void i()
            }
        }
        function s() {
            if (e.config.view === rn.main || e.config.view === rn.privateUnlocked) {
                var n = !!e.config.embed.settings.byline
                  , i = null !== e.config.video.owner.url
                  , r = e.config.video.owner.url
                  , o = 0 === e.config.embed.on_site
                  , a = e.config.embed.settings.spatial_label
                  , s = {
                    linkToOwner: i,
                    ownerLink: r,
                    targetBlank: o,
                    showPortrait: !!e.config.embed.settings.portrait,
                    portraitImg: e.config.video.owner[Un.devicePixelRatio > 1 ? "img_2x" : "img"],
                    showByline: n,
                    showTitle: !!e.config.embed.settings.title,
                    showTitleLink: null !== e.config.video.url,
                    titleLink: e.config.video.url,
                    title: e.config.video.title,
                    is360: e.config.video.spatial && a,
                    strings: {}
                };
                if (e.config.embed.settings.byline) {
                    var u = e.config.embed.settings.byline_badge
                      , c = "";
                    u && u.type && (c = Mn.render("title_byline_badge", {
                        targetBlank: o,
                        cssClass: u.type,
                        link: u.url || !1
                    })),
                    s.strings.byline = "from " + Mn.render("title_owner_byline", {
                        linkToOwner: i,
                        ownerLink: r,
                        targetBlank: o,
                        owner: e.config.video.owner.name
                    }) + c
                }
                var l = e.config.embed.settings.badge;
                if (l) {
                    var d = Un.devicePixelRatio > 1 ? "img_2x" : "img";
                    Un.svg && l.svg && (d = "svg"),
                    s.showPortrait = !1,
                    s.badge = {
                        link: l.link,
                        img: l[d],
                        offset: l.offset || !1,
                        width: l.width,
                        height: l.height,
                        name: l.name,
                        shadow: l.shadow || !1
                    }
                }
                e.config.embed.autoplay && (t.classList.add("hidden"),
                t.setAttribute("hidden", "")),
                t.innerHTML = Mn.render("title", s)
            }
        }
        function u() {
            e.events.on([hn.mousedOut, hn.mouseTimeout], o).on(hn.mousedOver, a).on(hn.playInitiated, function() {
                S = !0,
                E = !1,
                o()
            }).on([hn.playButtonPressed, hn.played], function() {
                E = !1,
                x = !1,
                o()
            }).on(hn.paused, function(e, t) {
                t || (E = !0,
                a())
            }).on(hn.ended, function() {
                T = !0,
                o()
            }).on(hn.scrubbingStarted, function() {
                P = E,
                x = !0
            }).on(hn.scrubbingEnded, function() {
                P && (x = !1)
            }).on(hn.willEnterFullscreen, function() {
                o()
            }).on(hn.didExitFullscreen, function(e) {
                e || a()
            }),
            Tn(t).on(["pointerenter", "pointerleave", "mouseenter", "mouseleave"], function(e) {
                return "pointerType"in e ? void ("mouse" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_MOUSE || (y = "pointerenter" === e.type || "MSPointerEnter" === e.type)) : void (y = "mouseover" === e.type)
            }),
            Tn(t).on("transitionend", function(e) {
                "opacity" === e.propertyName && t.classList.contains("invisible") && (t.classList.add("hidden"),
                t.setAttribute("hidden", ""))
            }, !1)
        }
        function c() {
            e.events.on(hn.ended, function(e) {
                o()
            })
        }
        function l() {
            e.events.on([hn.airPlayActivated], function() {
                k = !0,
                a()
            }).on([hn.airPlayDeactivated], function() {
                k = !1,
                o()
            })
        }
        function d() {
            e.events.on(hn.overlayOpened, function(e) {
                "notsupported" !== e && "private-unlocked" !== e && "help" !== e && (_ = !0,
                y = !1,
                o())
            }).on(hn.overlayClosed, function() {
                _ = !1,
                y = !1,
                setTimeout(a, 0)
            })
        }
        function f() {
            e.events.on(hn.outroDisplayed, function(e) {
                b = !0,
                y = !1,
                o()
            }).on(hn.outroHidden, function() {
                b = !1,
                y = !1,
                setTimeout(a, 0)
            })
        }
        function h() {
            e.events.on([hn.menuCentered, hn.menuVisibilityChanged], function(e, t) {
                t.isCentered() && t.isVisible() && (w = !0,
                y = !1,
                o()),
                t.isCentered() && t.isVisible() || (w = !1,
                y = !1,
                a())
            })
        }
        function v() {
            L(t, ".badge", function() {
                e.events.fire(hn.badgePressed, e.config.embed.settings.badge.id)
            })
        }
        function p() {
            e.events.on(hn.configChanged, function() {
                s(),
                e.config.view === rn.privateUnlocked && a()
            })
        }
        function m() {
            e.events.on(fn.reset, function() {
                S = !1,
                E = !0,
                T = !1,
                x = !1,
                a()
            })
        }
        var g = !0
          , y = !1
          , _ = !1
          , b = !1
          , w = !1
          , k = !1
          , S = !1
          , E = !0
          , T = !1
          , x = !1
          , P = !1;
        return s(),
        u(),
        c(),
        l(),
        d(),
        f(),
        h(),
        v(),
        p(),
        m(),
        e.events.fire(hn.titleModuleReady),
        {}
    }
    function Zt(e, t) {
        function n() {
            b = new Ft(y),
            w = Mt(e.element),
            w.set("cards", [{
                query: function() {
                    return _.size > 0
                },
                classNames: "player-withCards",
                props: {
                    carousel: !1,
                    bottom: 0
                }
            }, {
                query: function() {
                    return _.size > 0 && this.clientWidth >= T && this.clientWidth < x
                },
                classNames: "player-cardsCarousel",
                props: {
                    carousel: !0,
                    bottom: 60
                }
            }, {
                query: function() {
                    return _.size > 0 && this.clientWidth >= x
                },
                classNames: "player-cardsCorner",
                props: {
                    carousel: !1,
                    bottom: 0
                }
            }]),
            k = Mt(t),
            k.set("cards", [{
                query: function() {
                    return _.size > 0 && e.element.clientWidth >= P
                },
                classNames: "cards-wrapper--withThumbnails"
            }]);
            var n = function(e) {
                return function() {
                    _.size > 0 && e.apply(void 0, arguments)
                }
            };
            e.events.on(hn.configChanged, i),
            e.events.on(fn.addCard, m),
            e.events.on(fn.removeCard, g),
            b.on("slide", n(v)),
            b.on("tap", n(f)),
            w.on("change:carousel", n(o)),
            e.events.on(hn.playProgress, n(u)),
            e.events.on(hn.ended, n(d)),
            L(document, ".player-cardsCorner .card", n(h)),
            i()
        }
        function i() {
            if (d(),
            p(),
            Array.isArray(e.config.embed.cards) && e.config.embed.cards.length) {
                if (e.config.video.title) {
                    var t = {
                        className: "card--contentInfo",
                        timecode: 0,
                        headline: e.config.video.title,
                        teaser: e.config.video.owner.name,
                        image: e.config.video.owner[Un.devicePixelRatio > 1 ? "img_2x" : "img"],
                        id: "title-card"
                    };
                    r(-1, t)
                }
                e.config.embed.cards.forEach(function(e) {
                    r(e.timecode, e)
                })
            }
            w.check(),
            k.check()
        }
        function r(t, n) {
            var i = _.get(t)
              , r = new ff(e,n);
            if (_.set(t, r),
            i)
                return y.replaceChild(r.element, i.element),
                r;
            var o = _.keys().indexOf(t);
            return y.insertBefore(r.element, y.children[o]),
            r
        }
        function o() {
            a(),
            e.events.fire(hn.spaceChanged, Mt.getAllProps())
        }
        function a() {
            b.destroy(),
            w.prop("carousel") && b.setUp()
        }
        function s(e) {
            var t = _.values().filter(function(t) {
                return t.isActive(e)
            }).slice(-1)[0];
            if (t)
                return t;
            if (w.prop("carousel")) {
                var n = _.values().slice(-1)[0];
                if (n && e > n.end)
                    return n
            }
            return null
        }
        function u(e) {
            var t = s(e);
            if (t !== S && (t || !E))
                return E = !1,
                d(),
                S = t,
                S && "title-card" === S.id ? void (w.prop("carousel") && c(S, !0)) : void c(S, !0)
        }
        function c(t, n) {
            t && (n ? t.element.classList.add("card-animating") : t.element.classList.remove("card-animating"),
            t.element.classList.add("card-active"),
            Tn(t.element.childNodes[1]).on("mouseover", function() {
                E = !0
            }),
            Tn(t.element.childNodes[1]).on("mouseout", function() {
                E = !1
            }),
            b.show(t.element),
            e.events.fire(hn.cardDisplayed, t.id, t.data))
        }
        function l(e) {
            E || e.classList.remove("card-active")
        }
        function d() {
            mn(t.querySelectorAll(".card-active")).forEach(l)
        }
        function f(t) {
            var n = _.values()[t];
            n.data.url && "title-card" !== n.id && (e.events.fire(hn.cardPressed, n.id, n.data),
            e.telecine.paused || e.events.fire(hn.pauseButtonPressed),
            window.open(n.data.url))
        }
        function h(t) {
            t.preventDefault();
            var n = Sn(t.target, y.children)
              , i = _.values()[n];
            i.data.url && "title-card" !== i.id && (e.events.fire(hn.cardPressed, i.id, i.data),
            e.telecine.paused || e.events.fire(hn.pauseButtonPressed),
            window.open(i.data.url))
        }
        function v(t) {
            var n = _.values()[t];
            "title-card" !== n.id && e.events.fire(hn.cardDisplayed, n.id, n.data),
            e.events.fire(fn.setTime, n.time)
        }
        function p() {
            _.forEach(function(e, t) {
                e.element.parentNode.removeChild(e.element)
            }),
            _ = new hf
        }
        function m(e) {
            var t = r(e.timecode, e);
            d(),
            c(t),
            w.check()
        }
        function g(e) {
            d();
            var t = _.get(e.timecode).element;
            t.parentNode.removeChild(t),
            _.delete(e.timecode),
            w.check()
        }
        var y = t.querySelector(".js-cards")
          , _ = new hf
          , b = void 0
          , w = void 0
          , k = void 0
          , S = void 0
          , E = !1
          , T = 200
          , x = 415
          , P = 300;
        return n(),
        {}
    }
    function en(e, t, i, r) {
        function a() {
            var t = N;
            N = g(e).replace(/["'\s]*/g, ""),
            N && t !== N && "undefined" != typeof j[N] && x.events.fire(j[N])
        }
        function s() {
            var t = (x.config.view === rn.main || x.config.view === rn.privateUnlocked) && x.config.embed.settings && !x.config.embed.settings.playbar;
            e.classList.toggle("no-playbar", t),
            e.classList.toggle("with-fullscreen", !!x.config.embed.settings.fullscreen);
            var n = x.config.embed.settings.custom_logo;
            e.classList.toggle("with-custom-logo", !!n),
            e.classList.toggle("with-sticky-custom-logo", n && n.sticky),
            e.classList.toggle("background-mode", !!x.config.embed.settings.background),
            e.classList.toggle("touch-support", Un.touch)
        }
        function u(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.config.video.url;
            if (!(!t || e && e.metaKey))
                return t.indexOf("#") === -1 && x.telecine.currentTime > 0 && x.telecine.currentTime < x.config.video.duration - 30 && !x.telecine.paused && (t += "#at=" + Math.floor(x.telecine.currentTime)),
                x.config.embed.on_site ? void (window.location = t) : (window.open(t),
                n(e),
                x.events.fire(hn.pauseButtonPressed),
                !1)
        }
        function l() {
            s(),
            x.events.on(hn.configChanged, s)
        }
        function d() {
            R = new nn(function(e, t) {
                var n = function() {
                    return window.innerWidth > 0 && window.innerHeight > 0
                }
                  , i = null
                  , r = function t() {
                    return clearTimeout(i),
                    n() ? void e() : void (i = setTimeout(t, 250))
                };
                x.events.once(hn.ready, r),
                x.events.once(hn.error, r)
            }
            )
        }
        function f() {
            var e = function(e, t) {
                return x.verifyConfig().then(function() {
                    var n = x.config.request
                      , i = n.signature
                      , r = n.session
                      , o = n.timestamp
                      , a = n.expires
                      , s = "https://" + x.config.player_url + "/video/" + x.config.video.id + "/" + e + "?signature=" + i + "&session=" + r + "&time=" + o + "&expires=" + a;
                    return h(s, {
                        method: t
                    })
                }).catch(function(n) {
                    x.reportError(n, {
                        extra: {
                            action: e,
                            method: t
                        }
                    })
                })
            };
            x.events.on(hn.vodButtonPressed, function(e) {
                if (x.config.user.purchased) {
                    if (!x.config.video.vod.is_feature && x.config.video.vod.feature_id)
                        return void x.loadVideo(x.config.video.vod.feature_id).then(function() {
                            return x.events.fire(hn.playButtonPressed),
                            x.config.video.vod.feature_id
                        }).catch(function(e) {
                            x.reportError(e),
                            x.events.fire(fn.showOverlay, "error", {
                                title: "Sorry",
                                message: "There was a problem. Please try again."
                            })
                        });
                    if (x.config.video.vod && x.config.video.vod.is_coming_soon)
                        return;
                    return void x.events.fire(hn.playButtonPressed)
                }
                x.performDelegateAction(on.purchase, function() {
                    x.events.fire(fn.openPopup, "purchase", {
                        productId: e
                    })
                }, e)
            }),
            x.events.on(hn.likeButtonPressed, function() {
                return x.config.user.logged_in ? void (x.config.user.id !== x.config.video.owner.id && (x.config.user.liked ? x.performDelegateAction(on.unlike, function() {
                    e("like", "DELETE"),
                    x.config.user.liked = !1,
                    x.events.fire(hn.unliked)
                }) : x.performDelegateAction(on.like, function() {
                    e("like", "PUT"),
                    x.config.user.liked = !0,
                    x.events.fire(hn.liked)
                }))) : void x.performDelegateAction(on.loginForm, function() {
                    x.events.fire(fn.openPopup, "login-like")
                }, "like")
            }),
            x.events.on(hn.watchLaterButtonPressed, function() {
                if (x.config.video.url || "unlisted" === x.config.video.privacy)
                    return x.config.user.logged_in ? x.config.user.watch_later ? void x.performDelegateAction(on.removeFromWatchLater, function() {
                        e("watch-later", "DELETE"),
                        x.config.user.watch_later = !1,
                        x.events.fire(hn.removedFromWatchLater)
                    }) : void x.performDelegateAction(on.addToWatchLater, function() {
                        e("watch-later", "PUT"),
                        x.config.user.watch_later = !0,
                        x.events.fire(hn.addedToWatchLater)
                    }) : void x.performDelegateAction(on.loginForm, function() {
                        x.events.fire(fn.openPopup, "login-watch-later")
                    }, "watch-later")
            }),
            x.events.on(hn.collectionsButtonPressed, function() {
                x.performDelegateAction(on.collectionsOverlay, function() {
                    return x.config.video.vod && x.config.video.vod.url ? void u(null, x.config.video.vod.url + "#collections") : x.config.video.url ? void u(null, x.config.video.url + "#collections") : void 0
                })
            }),
            x.events.on(hn.shareButtonPressed, function() {
                var e = x.config.embed.settings.share && x.config.embed.settings.share.embed_only
                  , t = function() {
                    x.events.fire(fn.showOverlay, "share", e)
                };
                return In.element ? void t() : void x.performDelegateAction(on.shareOverlay, t)
            }),
            x.events.on(hn.embedButtonPressed, function() {
                x.config.embed.settings.share.embed_only && x.performDelegateAction(on.shareOverlay, function() {
                    x.events.fire(fn.showOverlay, "share", !0)
                })
            }),
            x.events.on(hn.followButtonPressed, function() {
                if (x.config.user.logged_in && x.config.user.id !== x.config.video.owner.id) {
                    if (x.config.user.following)
                        return e("follow", "DELETE"),
                        x.config.user.following = !1,
                        void x.events.fire(hn.unfollowed);
                    e("follow", "PUT"),
                    x.config.user.following = !0,
                    x.events.fire(hn.followed)
                }
            })
        }
        function v() {
            function t() {
                var t = o(e)
                  , n = t.width
                  , i = t.height
                  , r = "10px"
                  , a = 450
                  , s = 1024
                  , u = 200;
                return i <= u ? r : n < a ? "12px" : n <= s ? "11px" : r
            }
            function n() {
                R.then(function() {
                    var e = t();
                    return I.style.fontSize = e,
                    F.style.fontSize = e,
                    D.style.fontSize = e,
                    !0
                }).catch(function() {})
            }
            x.events.on(hn.didEnterFullscreen, n),
            x.events.on(hn.didExitFullscreen, n),
            window.addEventListener("orientationchange", n),
            q && (e.classList.add("mobile"),
            n())
        }
        function p() {
            if (Tn(window).on("resize", a),
            "undefined" != typeof MutationObserver) {
                var t = new MutationObserver(a);
                t.observe(e, {
                    attributes: !0,
                    attributeFilter: ["class"]
                })
            }
        }
        function m() {
            function t() {
                var t = e;
                if (r && r.getFullscreenElement && "function" == typeof r.getFullscreenElement) {
                    var n = r.getFullscreenElement();
                    n && n instanceof HTMLElement && n.contains(e) && n.classList.contains("js-player-fullscreen") && (t = n)
                }
                return t
            }
            function n(e, n) {
                return s ? void (s = !1) : void (o || (o = !0,
                x.events.fire(hn.didEnterFullscreen, t() === e, a)))
            }
            function i(e) {
                return s ? void (s = !1) : void (o && (o = !1,
                x.events.fire(hn.didExitFullscreen, a),
                a || x.events.fire(fn.toggleNativeControls, !1),
                a = !1))
            }
            x.config.embed.fullscreen = !0,
            Un.iPad && e.classList.add("no-fullscreen-api-support"),
            In.enabled && !Un.browser.bb10 || Un.iPad || (e.classList.add("no-fullscreen-support"),
            Un.iOS || (x.config.embed.fullscreen = !1));
            var o = !1
              , a = !1
              , s = !1;
            x.events.on([hn.pictureInPictureActivated, hn.pictureInPictureDeactivated], function() {
                s = !0
            }),
            x.events.on(fn.forceFullscreen, function() {
                return In.enabled || In.videoEnabled(e) ? (x.events.fire(hn.willEnterFullscreen),
                a = !1,
                void In.request(t())) : void x.events.fire(fn.toggleNativeControls, !0)
            }),
            x.events.on(hn.fullscreenButtonPressed, function() {
                "picture-in-picture" === x.telecine.presentationMode && x.events.fire(fn.deactivatePictureInPicture),
                In.element ? (x.events.fire(hn.willExitFullscreen),
                In.exit()) : (x.events.fire(hn.willEnterFullscreen),
                a = !0,
                In.request(t()))
            });
            var u = In.onenter
              , c = In.onexit;
            if (In.onenter = function(e) {
                if (!o)
                    return t().contains(e) ? void n(e, !0) : void ("function" == typeof u && u(e))
            }
            ,
            In.onexit = function() {
                return o ? void i(!0) : void ("function" == typeof c && c())
            }
            ,
            Tn(e).on("click", "a", function(e) {
                In.element === t() && In.exit()
            }),
            Tn(e).on("gestureend", function(e) {
                e.scale > 1 && x.events.fire(hn.fullscreenButtonPressed)
            }),
            "undefined" != typeof MSGesture) {
                var l = 1
                  , d = new MSGesture;
                d.target = e,
                Tn(e).on("pointerdown", function(e) {
                    d.addPointer(e.pointerId)
                }).on(["MSGestureChange"], function(e) {
                    l *= e.scale
                }).on(["MSGestureEnd"], function() {
                    (!o && l >= 2 || o && l < 1) && x.events.fire(hn.fullscreenButtonPressed),
                    l = 1
                })
            }
        }
        function y() {
            L(e, "a[data-clip-link]", u),
            x.events.on(fn.openVimeo, u)
        }
        function _() {
            if (!x.config.video.live_event)
                return void (M && (M.hide(),
                M = null));
            var t = new ys(x.config.video.live_event);
            t.isEnded || t.isArchived || (M = new Md(e,x,t))
        }
        function b() {
            l(),
            d(),
            f(),
            v(),
            p(),
            m(),
            y(),
            _()
        }
        function w() {
            A || (A = new Xt(x,e.querySelector(".overlay-wrapper")))
        }
        function k() {
            C || (C = new Yt(x,{
                uuid: x.uuid,
                id: e.id,
                isMobileDevice: !1
            }))
        }
        function S() {
            O || (O = new $t(x))
        }
        function E() {
            w(),
            k(),
            S(),
            void new Nt(x,I),
            void new jt(x,e);
            var t = new Vt(x,e);
            void new Ut(x,e.querySelector(".notification-wrapper")),
            void new Kt(x,e.querySelector(".js-outro-wrapper")),
            void new Qt(x,F),
            void new Jt(x,D),
            Object.defineProperties(P, {
                pauseKeyboard: {
                    enumerable: !0,
                    value: t.pause
                },
                unpauseKeyboard: {
                    enumerable: !0,
                    value: t.unpause
                }
            })
        }
        Mn.helpers = En;
        var T = c(i)
          , x = new At({
            element: e,
            delegate: r,
            cssLoadedPromise: T
        });
        e.classList.add("js-player-fullscreen");
        var P = x.externalApi
          , A = null
          , C = null
          , O = null
          , R = null
          , M = null
          , I = e.querySelector(".controls")
          , F = e.querySelector(".sidedock")
          , D = e.querySelector(".title")
          , B = e.querySelector(".js-cards-wrapper")
          , q = Un.mobileAndroid || Un.iPhone || Un.windowsPhone || Un.browser.bb10
          , N = "normal"
          , j = {
            tiny: hn.enteredTinyMode,
            mini: hn.enteredMiniMode,
            normal: hn.enteredNormalMode,
            none: hn.enteredNormalMode
        }
          , V = {
            initializationHandler: function() {
                return E(),
                b(),
                nn.resolve()
            },
            postInitializationHandler: function() {
                return x.telecine && (void new Pd(e.querySelector(".stats-debug"),x),
                void new Zt(x,B)),
                nn.resolve()
            },
            authorizationHandler: function(e) {
                e(),
                w(),
                k();
                var t = "Error"
                  , n = "Unhandled video privacy";
                switch (x.config.view) {
                case rn.privatePassword:
                    return new nn(function(e, t) {
                        x.events.fire(fn.showOverlay, "password"),
                        x.events.once(hn.passwordUnlocked, function(t) {
                            e(t)
                        })
                    }
                    );
                case rn.privateLocked:
                    S();
                    var i = "private-locked"
                      , r = null;
                    return x.config.user.logged_in && (i = "error",
                    r = {
                        title: "Private Video",
                        message: "Sorry, you donât have permission to watch.",
                        modal: !0,
                        logo: !!x.config.embed.settings.branding,
                        icon: "lock"
                    }),
                    x.events.fire(fn.showOverlay, i, r),
                    nn.reject();
                case rn.error:
                    t = x.config.title,
                    n = x.config.message
                }
                return x.events.fire(fn.showOverlay, "error", {
                    title: t,
                    message: n,
                    modal: !0
                }),
                nn.reject()
            }
        };
        return x.init(t, V).then(function() {
            return x.config.view !== rn.privateUnlocked || x.config.embed.autoplay || x.events.fire(fn.showOverlay, "private-unlocked"),
            !0
        }).catch(function(t) {
            x.reportError(t),
            w(),
            k(),
            e.classList.remove("loading"),
            x.events.fire(hn.error, "error", {
                message: "There was an error loading this video.",
                modal: !0,
                final: !0
            })
        }),
        P
    }
    var tn = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
      , nn = e(function(e) {
        !function(t, n, i) {
            n[t] = n[t] || i(),
            e.exports && (e.exports = n[t])
        }("Promise", "undefined" != typeof tn ? tn : tn, function() {
            function e(e, t) {
                f.add(e, t),
                d || (d = v(f.drain))
            }
            function t(e) {
                var t, n = typeof e;
                return null == e || "object" != n && "function" != n || (t = e.then),
                "function" == typeof t && t
            }
            function n() {
                for (var e = 0; e < this.chain.length; e++)
                    i(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                this.chain.length = 0
            }
            function i(e, n, i) {
                var r, o;
                try {
                    n === !1 ? i.reject(e.msg) : (r = n === !0 ? e.msg : n.call(void 0, e.msg),
                    r === i.promise ? i.reject(TypeError("Promise-chain cycle")) : (o = t(r)) ? o.call(r, i.resolve, i.reject) : i.resolve(r))
                } catch (e) {
                    i.reject(e)
                }
            }
            function r(i) {
                var a, u = this;
                if (!u.triggered) {
                    u.triggered = !0,
                    u.def && (u = u.def);
                    try {
                        (a = t(i)) ? e(function() {
                            var e = new s(u);
                            try {
                                a.call(i, function() {
                                    r.apply(e, arguments)
                                }, function() {
                                    o.apply(e, arguments)
                                })
                            } catch (t) {
                                o.call(e, t)
                            }
                        }) : (u.msg = i,
                        u.state = 1,
                        u.chain.length > 0 && e(n, u))
                    } catch (e) {
                        o.call(new s(u), e)
                    }
                }
            }
            function o(t) {
                var i = this;
                i.triggered || (i.triggered = !0,
                i.def && (i = i.def),
                i.msg = t,
                i.state = 2,
                i.chain.length > 0 && e(n, i))
            }
            function a(e, t, n, i) {
                for (var r = 0; r < t.length; r++)
                    !function(r) {
                        e.resolve(t[r]).then(function(e) {
                            n(r, e)
                        }, i)
                    }(r)
            }
            function s(e) {
                this.def = e,
                this.triggered = !1
            }
            function u(e) {
                this.promise = e,
                this.state = 0,
                this.triggered = !1,
                this.chain = [],
                this.msg = void 0
            }
            function c(t) {
                if ("function" != typeof t)
                    throw TypeError("Not a function");
                if (0 !== this.__NPO__)
                    throw TypeError("Not a promise");
                this.__NPO__ = 1;
                var i = new u(this);
                this.then = function(t, r) {
                    var o = {
                        success: "function" != typeof t || t,
                        failure: "function" == typeof r && r
                    };
                    return o.promise = new this.constructor(function(e, t) {
                        if ("function" != typeof e || "function" != typeof t)
                            throw TypeError("Not a function");
                        o.resolve = e,
                        o.reject = t
                    }
                    ),
                    i.chain.push(o),
                    0 !== i.state && e(n, i),
                    o.promise
                }
                ,
                this.catch = function(e) {
                    return this.then(void 0, e)
                }
                ;
                try {
                    t.call(void 0, function(e) {
                        r.call(i, e)
                    }, function(e) {
                        o.call(i, e)
                    })
                } catch (e) {
                    o.call(i, e)
                }
            }
            var l, d, f, h = Object.prototype.toString, v = "undefined" != typeof setImmediate ? function(e) {
                return setImmediate(e)
            }
            : setTimeout;
            try {
                Object.defineProperty({}, "x", {}),
                l = function(e, t, n, i) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        writable: !0,
                        configurable: i !== !1
                    })
                }
            } catch (e) {
                l = function(e, t, n) {
                    return e[t] = n,
                    e
                }
            }
            f = function() {
                function e(e, t) {
                    this.fn = e,
                    this.self = t,
                    this.next = void 0
                }
                var t, n, i;
                return {
                    add: function(r, o) {
                        i = new e(r,o),
                        n ? n.next = i : t = i,
                        n = i,
                        i = void 0
                    },
                    drain: function() {
                        var e = t;
                        for (t = n = d = void 0; e; )
                            e.fn.call(e.self),
                            e = e.next
                    }
                }
            }();
            var p = l({}, "constructor", c, !1);
            return c.prototype = p,
            l(p, "__NPO__", 0, !1),
            l(c, "resolve", function(e) {
                var t = this;
                return e && "object" == typeof e && 1 === e.__NPO__ ? e : new t(function(t, n) {
                    if ("function" != typeof t || "function" != typeof n)
                        throw TypeError("Not a function");
                    t(e)
                }
                )
            }),
            l(c, "reject", function(e) {
                return new this(function(t, n) {
                    if ("function" != typeof t || "function" != typeof n)
                        throw TypeError("Not a function");
                    n(e)
                }
                )
            }),
            l(c, "all", function(e) {
                var t = this;
                return "[object Array]" != h.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t(function(n, i) {
                    if ("function" != typeof n || "function" != typeof i)
                        throw TypeError("Not a function");
                    var r = e.length
                      , o = Array(r)
                      , s = 0;
                    a(t, e, function(e, t) {
                        o[e] = t,
                        ++s === r && n(o)
                    }, i)
                }
                )
            }),
            l(c, "race", function(e) {
                var t = this;
                return "[object Array]" != h.call(e) ? t.reject(TypeError("Not an array")) : new t(function(n, i) {
                    if ("function" != typeof n || "function" != typeof i)
                        throw TypeError("Not a function");
                    a(t, e, function(e, t) {
                        n(t)
                    }, i)
                }
                )
            }),
            c
        })
    })
      , rn = {
        main: 1,
        privateLocked: 2,
        privateUnlocked: 3,
        privatePassword: 4,
        error: 7,
        contentRating: 9
    }
      , on = {
        like: {
            will: "willLikeVideo",
            did: "didLikeVideo"
        },
        unlike: {
            will: "willUnlikeVideo",
            did: "didUnlikeVideo"
        },
        addToWatchLater: {
            will: "willAddToWatchLater",
            did: "didAddToWatchLater"
        },
        removeFromWatchLater: {
            will: "willRemoveFromWatchLater",
            did: "didRemoveFromWatchLater"
        },
        purchase: {
            will: "willOpenVodPurchaseForm",
            did: "didOpenVodPurchaseForm"
        },
        shareOverlay: {
            will: "willOpenShareOverlay",
            did: "didOpenShareOverlay"
        },
        loginForm: {
            will: "willOpenLoginForm",
            did: "didOpenLoginForm"
        },
        collectionsOverlay: {
            will: "willOpenCollectionsOverlay",
            did: "didOpenCollectionsOverlay"
        },
        showOutro: {
            will: "willShowOutro",
            did: "didShowOutro"
        },
        playLog: {
            will: "willSendPlayLog",
            did: "didSendPlayLog"
        }
    }
      , an = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "video/vnd.mpeg.dash.mpd": "live",
        "application/x-mpegURL": "hlslive"
    }
      , sn = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    }
      , un = {
        HTMLScanner: "html",
        MediaSourceScanner: "html",
        LiveScanner: "html",
        SWFScanner: "flash"
    }
      , cn = {
        pending: "pending",
        active: "active",
        started: "started",
        ended: "ended"
    }
      , ln = {
        started: "started",
        done: "done",
        error: "error"
    }
      , dn = {
        low: .5,
        high: 2
    }
      , fn = {
        seek: 1,
        changeVolume: 3,
        hideOverlay: 4,
        showOverlay: 5,
        openPopup: 6,
        reset: 7,
        changeLoop: 8,
        changeQuality: 9,
        openVimeo: 10,
        changeColor: 11,
        disableHd: 14,
        disableVolume: 15,
        enableVolume: 16,
        disableCaptions: 17,
        enableCaptions: 18,
        forceFullscreen: 19,
        turnCaptionsOn: 20,
        turnCaptionsOff: 21,
        toggleNativeControls: 22,
        showOutro: 23,
        hideOutro: 24,
        setEffect: 25,
        activatePictureInPicture: 26,
        deactivatePictureInPicture: 27,
        attachSpatialPlaybackEvents: 28,
        toggleSpatialPlayback: 29,
        revealSpatialControls: 30,
        setTime: 31,
        addCard: 32,
        removeCard: 33,
        changePlaybackRate: 34
    }
      , hn = {
        apiError: 48,
        error: 49,
        playInitiated: 50,
        paused: 51,
        played: 52,
        loadProgress: 53,
        playProgress: 54,
        seeked: 55,
        ended: 56,
        bufferStarted: 57,
        bufferEnded: 58,
        volumeChanged: 59,
        qualityChanged: 60,
        targetTimeReached: 61,
        cueChanged: 62,
        streamChanged: 63,
        ranIntoBuffer: 64,
        playbackResumed: 65,
        adaptiveBandwidth: 66,
        streamTargetChange: 68,
        forcedQuality: 69,
        cuepoint: 70,
        firstTimeUpdate: 71,
        droppedFrames: 72,
        segmentDownloaded: 73,
        playbackRateChanged: 74,
        fullscreenButtonPressed: 100,
        pauseButtonPressed: 101,
        playButtonPressed: 102,
        prefsButtonPressed: 103,
        ccButtonPressed: 104,
        scrubbingStarted: 105,
        scrubbingEnded: 106,
        volumeScrubbingStarted: 107,
        volumeScrubbingEnded: 108,
        controlBarVisibilityChanged: 109,
        sidedockVisibilityChanged: 110,
        menuVisibilityChanged: 111,
        captionsChanged: 112,
        cuePointAdded: 113,
        cuePointRemoved: 114,
        spatialMotionStart: 115,
        spatialMotionEnd: 116,
        stereoscopicButtonPressed: 117,
        controlbarBufferStarted: 118,
        controlbarBufferEnded: 119,
        menuPanelOpened: "menuPanelOpened",
        menuPanelClosed: "menuPanelClosed",
        menuCentered: "menuCentered",
        badgePressed: 140,
        willEnterFullscreen: 150,
        didEnterFullscreen: 151,
        willExitFullscreen: 152,
        didExitFullscreen: 153,
        likeButtonPressed: 200,
        watchLaterButtonPressed: 201,
        shareButtonPressed: 202,
        embedButtonPressed: 203,
        vodButtonPressed: 205,
        collectionsButtonPressed: 206,
        followButtonPressed: 220,
        overlayOpened: 250,
        overlayClosed: 251,
        overlayCleared: 252,
        overlayCloseButtonPressed: 253,
        facebookButtonPressed: 254,
        twitterButtonPressed: 255,
        tumblrButtonPressed: 256,
        emailButtonPressed: 257,
        embedCodeCopied: 258,
        popupOpened: 259,
        effectButtonPressed: 260,
        debugButtonPressed: 261,
        emailCaptureSubmitted: 262,
        popupClosed: 263,
        shareViewShown: 264,
        embedViewShown: 265,
        shareViewEnd: 266,
        embedViewEnd: 267,
        mousedOut: 300,
        mousedOver: 301,
        mouseTimeout: 302,
        liked: 303,
        unliked: 304,
        addedToWatchLater: 305,
        removedFromWatchLater: 306,
        userLogIn: 307,
        userLoggedIn: 308,
        userLoggedOut: 309,
        loginFailure: 310,
        colorChanged: 311,
        configChanged: 312,
        passwordUnlocked: 313,
        privateUnlocked: 314,
        enteredTinyMode: 315,
        enteredMiniMode: 320,
        enteredNormalMode: 316,
        signatureExpired: 317,
        requestConfigReloaded: 318,
        embedSettingChanged: 319,
        outroDisplayed: 321,
        outroHidden: 322,
        outroVideoPressed: 323,
        becameActive: 324,
        becameInactive: 325,
        tipped: 326,
        emailCaptureSuccess: 327,
        loadVideo: 328,
        cameraUpdate: 329,
        outroLinkPressed: 330,
        followed: 331,
        unfollowed: 332,
        outroImagePressed: 333,
        outroCtaPressed: 334,
        hudDisplayed: 335,
        hudHidden: 336,
        cardDisplayed: 337,
        cardPressed: 338,
        spaceChanged: 339,
        emailCaptureEnd: 340,
        titleModuleReady: 350,
        sidedockModuleReady: 351,
        controlBarModuleReady: 352,
        videoModuleReady: 353,
        overlayModuleReady: 354,
        notificationModuleReady: 355,
        statsModuleReady: 356,
        apiModuleReady: 357,
        analyticsModuleReady: 358,
        ready: 359,
        telecineReady: 360,
        notificationHidden: 400,
        alertVisibilityChanged: 401,
        airPlayAvailable: 500,
        airPlayNotAvailable: 501,
        airPlayActivated: 502,
        airPlayDeactivated: 503,
        airPlayButtonPressed: 504,
        pictureInPictureAvailable: 505,
        pictureInPictureNotAvailable: 506,
        pictureInPictureActivated: 507,
        pictureInPictureDeactivated: 508,
        liveEventPending: 600,
        liveEventActive: 601,
        liveEventStarted: 602,
        liveEventEnded: 603,
        liveArchiveStarted: 604,
        liveArchiveDone: 605,
        liveArchiveError: 606,
        liveRepresentationsAvailable: 607,
        liveStreamOnline: 608,
        liveStreamOffline: 609
    }
      , vn = window.Array.from
      , pn = [1];
    "function" == typeof vn && vn(pn) === pn && (vn = !1);
    var mn = vn || function(e) {
        return [].slice.call(e, 0)
    }
      , gn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , yn = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , _n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , bn = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , wn = function() {
        function e(e, t) {
            var n = []
              , i = !0
              , r = !1
              , o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value),
                !t || n.length !== t); i = !0)
                    ;
            } catch (e) {
                r = !0,
                o = e
            } finally {
                try {
                    !i && s.return && s.return()
                } finally {
                    if (r)
                        throw o
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , kn = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return t.reduce(function(e, t) {
            return function() {
                return e(t.apply(void 0, arguments))
            }
        })
    }
      , Sn = kn(w, b)
      , En = Object.freeze({
        formatVodLabel: k,
        getDisplayPrice: S,
        isAvailableInCountry: E,
        translateFromRequest: T
    })
      , Tn = e(function(e) {
        !function() {
            function t(e, t, n) {
                var i = "blur" == t || "focus" == t;
                e.element.addEventListener(t, n, i)
            }
            function n(e) {
                e.preventDefault(),
                e.stopPropagation()
            }
            function i(e) {
                return l ? l : l = e.matches ? e.matches : e.webkitMatchesSelector ? e.webkitMatchesSelector : e.mozMatchesSelector ? e.mozMatchesSelector : e.msMatchesSelector ? e.msMatchesSelector : e.oMatchesSelector ? e.oMatchesSelector : c.matchesSelector
            }
            function r(e, t, n) {
                if ("_root" == t)
                    return n;
                if (e !== n)
                    return i(e).call(e, t) ? e : e.parentNode ? (d++,
                    r(e.parentNode, t, n)) : void 0
            }
            function o(e, t, n, i) {
                h[e.id] || (h[e.id] = {}),
                h[e.id][t] || (h[e.id][t] = {}),
                h[e.id][t][n] || (h[e.id][t][n] = []),
                h[e.id][t][n].push(i)
            }
            function a(e, t, n, i) {
                if (h[e.id])
                    if (t) {
                        if (!i && !n)
                            return void (h[e.id][t] = {});
                        if (!i)
                            return void delete h[e.id][t][n];
                        if (h[e.id][t][n])
                            for (var r = 0; r < h[e.id][t][n].length; r++)
                                if (h[e.id][t][n][r] === i) {
                                    h[e.id][t][n].splice(r, 1);
                                    break
                                }
                    } else
                        for (var o in h[e.id])
                            h[e.id].hasOwnProperty(o) && (h[e.id][o] = {})
            }
            function s(e, t, n) {
                if (h[e][n]) {
                    var i, o, a = t.target || t.srcElement, s = {}, u = 0, l = 0;
                    d = 0;
                    for (i in h[e][n])
                        h[e][n].hasOwnProperty(i) && (o = r(a, i, v[e].element),
                        o && c.matchesEvent(n, v[e].element, o, "_root" == i, t) && (d++,
                        h[e][n][i].match = o,
                        s[d] = h[e][n][i]));
                    for (t.stopPropagation = function() {
                        t.cancelBubble = !0
                    }
                    ,
                    u = 0; u <= d; u++)
                        if (s[u])
                            for (l = 0; l < s[u].length; l++) {
                                if (s[u][l].call(s[u].match, t) === !1)
                                    return void c.cancel(t);
                                if (t.cancelBubble)
                                    return
                            }
                }
            }
            function u(e, t, n, i) {
                function r(e) {
                    return function(t) {
                        s(l, t, e)
                    }
                }
                if (this.element) {
                    e instanceof Array || (e = [e]),
                    n || "function" != typeof t || (n = t,
                    t = "_root");
                    var u, l = this.id;
                    for (u = 0; u < e.length; u++)
                        i ? a(this, e[u], t, n) : (h[l] && h[l][e[u]] || c.addEvent(this, e[u], r(e[u])),
                        o(this, e[u], t, n));
                    return this
                }
            }
            function c(e, t) {
                if (!(this instanceof c)) {
                    for (var n in v)
                        if (v[n].element === e)
                            return v[n];
                    return f++,
                    v[f] = new c(e,f),
                    v[f]
                }
                this.element = e,
                this.id = t
            }
            var l, d = 0, f = 0, h = {}, v = {};
            c.prototype.on = function(e, t, n) {
                return u.call(this, e, t, n)
            }
            ,
            c.prototype.off = function(e, t, n) {
                return u.call(this, e, t, n, !0)
            }
            ,
            c.matchesSelector = function() {}
            ,
            c.cancel = n,
            c.addEvent = t,
            c.matchesEvent = function() {
                return !0
            }
            ,
            e.exports && (e.exports = c),
            window.Gator = c
        }()
    })
      , xn = Tn.addEvent
      , Ln = "undefined" == typeof window.PointerEvent && "undefined" != typeof window.MSPointerEvent
      , Pn = {
        pointerdown: "MSPointerDown",
        pointerup: "MSPointerUp",
        pointercancel: "MSPointerCancel",
        pointermove: "MSPointerMove",
        pointerenter: "MSPointerEnter",
        pointerleave: "MSPointerLeave",
        pointerover: "MSPointerOver",
        pointerout: "MSPointerOut"
    }
      , An = "onmspointerenter"in document
      , Cn = "onmspointerleave"in document;
    Tn.addEvent = function(e, t, n) {
        Ln && Pn[t] && (t = Pn[t]),
        "transitionend" === t && (xn(e, "webkitTransitionEnd", n),
        xn(e, "otransitionend", n)),
        "mouseenter" === t && (t = "mouseover"),
        "mouseleave" === t && (t = "mouseout"),
        "MSPointerEnter" !== t || An || (t = "MSPointerOver"),
        "MSPointerLeave" !== t || Cn || (t = "MSPointerOut"),
        xn(e, t, n)
    }
    ,
    Tn.matchesEvent = function(e, t, n, i, r) {
        return !("mouseenter" === e || "mouseleave" === e || !An && "MSPointerEnter" === e || !Cn && "MSPointerLeave" === e) || x(t, n, i, r)
    }
    ;
    var On = {}
      , Rn = "en"
      , Mn = e(function(e) {
        !function() {
            var t = {};
            t.templates = {},
            t.render = function(e, n) {
                return t.templates[e] ? t.templates[e].call(t, n || {}) : ""
            }
            ,
            t.map = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            },
            t.escape = function(e) {
                return e.replace(/[&<>"'\/]/g, function(e) {
                    return t.map[e]
                })
            }
            ,
            t.helpers = {},
            t.templates.stream_studder = function(e) {
                var t = "<h3> ";
                return t += this.render("icon_warning") || "",
                t += ' <span>Having issues? <button type="button" class="player-alert-button-link button-link" aria-label="Switch to auto" data-alert-autofocus data-close data-context="suggestion">Switch to Auto</button> for smoother streaming.</span></h3>'
            }
            ,
            t.templates.warning_alert = function(e) {
                var t = "<h3> ";
                return t += this.render("icon_warning") || "",
                t += " <span>" + e.strings.text + "<span></h3>"
            }
            ,
            t.templates.buffer_pattern = function(e) {
                var t = '<pattern id="' + e.id + '" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" viewBox="0 0 10 10"><line x1="5" y1="-1" x2="-5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="10" y1="-1" x2="0" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="15" y1="-1" x2="5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /></pattern>';
                return t
            }
            ,
            t.templates.card = function(e) {
                var t = '<div class="card';
                return e.className && (t += " " + e.className),
                e.teaser && (t += " card-hasDetail"),
                t += '"> ',
                e.url && (t += '<a class="card-link" href="' + e.url + '" target="_blank">'),
                t += ' <div class="card-inner"> ',
                e.image && (t += ' <div class="card-imageWrap js-cardImageWrap"><img class="card-image" src="' + e.image + '" alt=""></div> '),
                t += ' <div class="card-body"><h3 class="card-text card-text--title"><span>' + e.headline + "</span> ",
                e.url && (t += this.render("icon_card_arrow") || ""),
                t += " </h3> ",
                e.teaser && (t += ' <p class="card-text card-text--detail"> ' + e.teaser + " </p> "),
                t += " </div></div> ",
                e.url && (t += "</a>"),
                t += "</div>"
            }
            ,
            t.templates.compass = function(e) {
                var t = '<svg viewBox="0 0 36 36"> ';
                return t += 1 == e.version ? ' <circle class="compass-background" r="18" cx="18" cy="18"></circle><path class="compass-slice" transform="rotate(-45, 18, 18)" d="M0,0 m18,18 l12,0 A12,12 0 0,0 18,6 z"/><circle fill="none" class="compass-ring" stoke-width="3" r="14.5" cx="18" cy="18"></circle><polygon class="compass-dimple" points="16,3.5 18,1 20,3.5"/> ' : ' <circle class="compass-background" r="18" cx="18" cy="18"></circle><path class="compass-slice" transform="rotate(-30, 18, 18)" d="M0,0 m18,18 l13,0 A13,13 0 0,0 11.500000000000004,6.741669750802297 z"/><circle class="compass-centercircle" r="3" cx="18" cy="18"></circle><path class="compass-line" stroke-linecap="round" d="M0,18 L36,18 z" /> ',
                t += "</svg>"
            }
            ,
            t.templates.email_capture2 = function(e) {
                var t = '<div class="emailCapture2-wrapper"><div class="emailCapture2"> ';
                return e.customLogo && (t += ' <div class="emailCapture2-logoWrap"><img src="' + e.customLogo + '" alt="" class="emailCapture2-logo"></div> '),
                t += ' <h1 class="emailCapture2-title">',
                t += this.escape(e.text) || "",
                t += "</h1> ",
                e.subtitle && (t += ' <p class="emailCapture2-subtitle">',
                t += this.escape(e.subtitle) || "",
                t += "</p> "),
                t += ' <form class="emailCapture2-form" action="' + e.action + '" method="post" novalidate><div class="validationBubble2 validationBubble2-hidden"><div class="validationBubble2-arrowClipper"><div class="validationBubble2-arrow"></div></div><div class="validationBubble2-message"></div></div><input class="emailCapture2-form-input emailCapture2-form-input--email" type="email" name="email" placeholder="' + e.strings.email + '" aria-label="' + e.strings.email + '" required aria-required="true"><input class="emailCapture2-form-input" type="text" name="name" placeholder="' + e.strings.fullName + '" aria-label="' + e.strings.fullName + '" pattern="^[^!@#$%^*+=?<>]+$" maxlength="180"><input type="hidden" name="referrer" value="' + e.referrer + '"><input type="hidden" name="signature" value=""><input type="hidden" name="time" value=""><input type="hidden" name="expires" value=""><div class="emailCapture2-form-buttons"><input class="emailCapture2-form-button emailCapture2-form-button--reset" type="button" value="' + e.strings.nothanks + '"> ',
                e.allowSkip && (t += ' <input class="emailCapture2-form-button emailCapture2-form-button--cancel" type="button" value="' + e.strings.nothanks + '"> '),
                t += ' <input class="emailCapture2-form-button emailCapture2-form-button--submit" type="submit" value="' + e.strings.submit + '"></div></form></div><div class="emailCapture2-confirm emailCapture2-confirm-hidden"><div class="emailCapture2-confirm-box"><h1 class="emailCapture2-confirm-title">',
                t += this.escape(e.confirmation) || "",
                t += "</h1></div></div></div>"
            }
            ,
            t.templates.share2 = function(e) {
                var t = '<div class="share2-wrapper js-share"><section class="share2-screen share2-screen--share' + (e.embedOnly ? " cloaked" : "") + ' js-share-screen"><h1 class="share2-title share2-title--share">' + e.strings.share + '</h1><ul class="share2-buttons"><li class="share2-buttons-item"><a class="share2-button share2-button--facebook js-facebook" href="' + e.playerShareUrl + '/facebook" target="_blank" title="' + e.strings.facebook + '" role="button" aria-label="' + e.strings.facebook + '">';
                return t += this.render("icon_facebook") || "",
                t += '</a><li class="share2-buttons-item"><a class="share2-button share2-button--twitter js-twitter" href="' + e.playerShareUrl + '/twitter" target="_blank" title="' + e.strings.twitter + '" role="button" aria-label="' + e.strings.twitter + '">',
                t += this.render("icon_twitter") || "",
                t += '</a><li class="share2-buttons-item"><a class="share2-button share2-button--tumblr js-tumblr" href="' + e.playerShareUrl + '/tumblr" target="_blank" title="' + e.strings.tumblr + '" role="button" aria-label="' + e.strings.tumblr + '">',
                t += this.render("icon_tumblr") || "",
                t += "</a> ",
                e.url && (t += ' <li class="share2-buttons-item"><a class="share2-button share2-button--email js-email" href="mailto:?subject=',
                t += encodeURIComponent(e.strings.emailSubject) || "",
                t += "&amp;body=",
                t += encodeURIComponent(e.strings.emailBody) || "",
                t += '" title="' + e.strings.email + '" role="button" aria-label="' + e.strings.email + '">',
                t += this.render("icon_mail") || "",
                t += "</a> "),
                t += " </ul> ",
                e.embed && (t += ' <ul class="share2-buttons"><li class="share2-buttons-item"><a class="share2-button share2-button--embed js-embed" href="' + e.url + '#share" target="_blank" title="' + e.strings.embedCode + '" role="button" aria-label="' + e.strings.embedCode + '">',
                t += this.render("icon_embed") || "",
                t += "</a></li></ul> "),
                e.url && (t += ' <p class="share2-footnote share2-footnote--share"><a class="clip_url" href="' + e.shareUrl + '" target="_blank">' + e.shareUrl + "</a></p> "),
                t += " </section> ",
                e.embed && (t += ' <section class="share2-screen share2-screen--embed' + (e.embedOnly ? "" : " cloaked") + ' js-embed-screen"><div class="share2-embedWrapper"><h1 class="share2-title share2-title--embed">' + e.strings.embedTitle + '</h1><p class="share2-subtitle share2-subtitle--embed">' + e.strings.embedSubtitle + '</p><div class="share2-embedCode form"><div><input class="share2-embedInput" type="text" name="embed_code" title="Embed code" value="' + e.embedCode + '" spellcheck="false" aria-readonly="true"',
                e.readOnly && (t += " readonly"),
                t += "></div> ",
                e.copyButton && (t += ' <button type="button" class="share2-embedCopy js-embedCopy" data-clipboard-text=\'' + e.embedCode + "' data-label=\"" + e.strings.copy + '" data-success-label="' + e.strings.copySuccess + '">' + e.strings.copy + "</button> "),
                t += " </div> ",
                e.customizeEmbed && (t += ' <p class="share2-footnote share2-footnote--embed">' + e.strings.customize + "</p> "),
                t += " </div></section> "),
                t += "</div>"
            }
            ,
            t.templates.controlbar_trailer = function(e) {
                var t = '<button type="button" class="play trailer rounded-box" title="' + e.strings.playTrailer + '" aria-label="' + e.strings.playTrailer + '"><div><span class="play-icon">';
                return t += this.render("icon_play") || "",
                t += "</span><p>" + e.text + "</p></div></button>",
                e.vimeoLogo.show && (t += ' <div class="logo"> ',
                e.vimeoLogo.showLink && (t += ' <a href="' + e.vimeoLogo.url + '"',
                e.targetBlank && (t += ' target="_blank"'),
                t += ' title="' + e.strings.watchOnVimeo + '" aria-label="' + e.strings.watchOnVimeo + '" data-clip-link> '),
                t += this.render("logo") || "",
                e.vimeoLogo.showLink && (t += " </a> "),
                t += " </div>"),
                t += "",
                e.customLogo && (t += ' <div class="custom-logo',
                e.customLogo.sticky && (t += " sticky"),
                t += '" style="width:' + e.customLogo.width + "px;height:" + e.customLogo.height + 'px"> ',
                e.customLogo.showLink && (t += '<a href="' + e.customLogo.url + '" target="_blank">'),
                t += ' <img src="' + e.customLogo.img + '" alt=""> ',
                e.customLogo.showLink && (t += "</a>"),
                t += " </div>"),
                t += ""
            }
            ,
            t.templates.controlbar = function(e) {
                var t = '<button type="button" class="play rounded-box state-' + e.playState + '" title="' + e.strings.play + '" data-title-play="' + e.strings.play + '" data-title-pause="' + e.strings.pause + '" data-title-replay="' + e.strings.replay + '" aria-label="' + e.strings.play + '"><div class="tiny-bars"><svg width="100%" height="100%" viewBox="0 0 65 40"><defs><clipPath id="rounded-border"><rect height="100%" width="100%" x="0" y="0" rx="5"/></clipPath> ';
                return t += this.render("buffer_pattern", {
                    id: "tiny-buffer"
                }) || "",
                t += ' </defs><g clip-path="url(#rounded-border)"><rect class="buffer hidden" height="3" width="110%" x="0" y="37" fill="url(#tiny-buffer)"/><rect class="loaded" height="3" width="0" x="0" y="37" fill="#666"/><rect class="played fill" height="3" width="0" x="0" y="37"/></g></svg></div><div class="play-icon">',
                t += this.render("icon_play") || "",
                t += '</div><div class="pause-icon">',
                t += this.render("icon_pause") || "",
                t += '</div><div class="replay-icon">',
                t += this.render("icon_replay") || "",
                t += '</div></button><div class="play-bar rounded-box"><div class="live"><div class="circle offline"></div> LIVE </div><div class="progress"><div class="buffer hidden"><svg width="110%" tabindex="-1"><defs> ',
                t += this.render("buffer_pattern", {
                    id: "buffer"
                }) || "",
                t += ' </defs><rect fill="url(#buffer)" width="100%" height="100%" /></svg></div><div class="loaded',
                e.rawDuration < 60 && (t += " short-video"),
                t += '" role="progressbar" aria-label="' + e.strings.loadedBar + '" aria-valuemin="0" aria-valuemax="' + e.rawDuration + '" aria-valuenow="0"></div><div class="played" role="progressbar" aria-label="' + e.strings.playedBar + '" aria-valuemin="0" aria-valuemax="' + e.rawDuration + '" aria-valuenow="0"></div><div class="cuepoints"></div><div class="thumb-preview invisible hidden" role="presentation" aria-hidden="true"><div class="thumb"></div></div><div class="ghost-timecode invisible hidden" role="presentation" aria-hidden="true"><div class="box">00:00</div></div><div class="timecode" role="presentation" aria-hidden="true"><div class="box">' + e.duration + "</div></div></div> ",
                e.volume && (t += ' <div class="volume" role="slider" title="' + e.strings.volume + '" aria-label="' + e.strings.volume + '" aria-valuemin="0" aria-valuemax="1" tabindex="0"><div></div><div></div><div></div><div></div><div></div></div> '),
                e.ccButton && (t += ' <button type="button" class="toggle cc ' + (e.ccOn ? "on" : "off") + '" title="' + e.strings.captions + '"> ',
                t += this.render("icon_cc") || "",
                t += " </button> "),
                e.prefsButton && (t += ' <button type="button" class="vp-prefs js-prefs" title="' + e.strings.prefs + '" aria-label="' + e.strings.prefs + '"> ',
                t += this.render("icon_gear") || "",
                t += " </button> "),
                t += ' <button type="button" class="hidden toggle effect off" title="' + e.strings.effect + '"><svg viewBox="0 0 210 200" version="1.1"><g fill="none" fill-rule="evenodd"><circle class="red" fill="#f00" cx="63.5" cy="136.5" r="63.5"/><circle class="blue" fill="#2653ff" cx="146.5" cy="136.5" r="63.5"/><circle class="green" fill="#0f0" cx="104.5" cy="63.5" r="63.5"/></g></svg></button> ',
                e.airplayButton && (t += ' <button type="button" class="toggle airplay off hidden" title="' + e.strings.airPlay + '" data-title-off="' + e.strings.airPlay + '" data-title-on="' + e.strings.airPlayOff + '" hidden> ',
                t += this.render("icon_airplay") || "",
                t += " </button> "),
                e.stereoscopicButton && (t += ' <button type="button" class="toggle stereoscopic off" title="' + e.strings.stereoscopic + '" data-title-off="' + e.strings.stereoscopic + '" data-title-on="' + e.strings.stereoscopicOff + '"> ',
                t += this.render("icon_stereoscopic") || "",
                t += " </button> "),
                t += ' <button type="button" class="pip hidden enter" title="' + e.strings.pipEnter + '" data-title-enter="' + e.strings.pipEnter + '" data-title-return="' + e.strings.pipReturn + '" hidden> ',
                t += this.render("icon_pip") || "",
                t += ' </button><button type="button" class="fullscreen',
                e.fullscreenButton || (t += " only-in-fullscreen"),
                t += '" title="' + e.strings.enterFullscreen + '" data-title-fullscreen="' + e.strings.enterFullscreen + '" data-title-unfullscreen="' + e.strings.exitFullscreen + '" aria-label="' + e.strings.fullscreen + '"><div class="fullscreen-icon">',
                t += this.render("icon_fullscreen") || "",
                t += '</div><div class="unfullscreen-icon">',
                t += this.render("icon_unfullscreen") || "",
                t += "</div></button> ",
                e.vimeoLogo.show && (t += ' <div class="logo"> ',
                e.vimeoLogo.showLink && (t += ' <a href="' + e.vimeoLogo.url + '"',
                e.targetBlank && (t += ' target="_blank"'),
                t += ' title="' + e.strings.watchOnVimeo + '" aria-label="' + e.strings.watchOnVimeo + '" data-clip-link> '),
                t += this.render("logo") || "",
                e.vimeoLogo.showLink && (t += " </a> "),
                t += " </div> "),
                t += "</div> ",
                e.customLogo && (t += ' <div class="custom-logo',
                e.customLogo.sticky && (t += " sticky"),
                t += '" style="width:' + e.customLogo.width + "px;height:" + e.customLogo.height + 'px"> ',
                e.customLogo.showLink && (t += '<a href="' + e.customLogo.url + '" target="_blank">'),
                t += ' <img src="' + e.customLogo.img + '" alt=""> ',
                e.customLogo.showLink && (t += "</a>"),
                t += " </div>"),
                t += ' <div class="vp-menubar js-menubar"></div>'
            }
            ,
            t.templates.error = function(e) {
                var t = '<div class="window-wrapper error"><h1>' + e.title + "</h1> ";
                return e.message && (t += " <p>" + e.message + "</p> "),
                t += "</div>"
            }
            ,
            t.templates.help = function(e) {
                var t = '<div class="window-wrapper help"><h1>' + e.strings.title + '</h1><dl><div class="volume-up secondary"><dt class="arrow">â</dt><dd>' + e.strings.volumeUp + '</dd></div><div class="volume-down secondary"><dt class="arrow">â</dt><dd>' + e.strings.volumeDown + '</dd></div><div class="scrub-forward secondary"><dt class="arrow">â</dt><dd>' + e.strings.scrubForward + '</dd></div><div class="scrub-backwards secondary"><dt class="arrow">â</dt><dd>' + e.strings.scrubBackwards + '</dd></div><div class="like"><dt>L</dt><dd>' + e.strings.like + '</dd></div><div class="share"><dt>S</dt><dd>' + e.strings.share + '</dd></div><div class="watch-later"><dt>W</dt><dd>' + e.strings.watchLater + '</dd></div><div class="toggle-captions"><dt>C</dt><dd>' + e.strings.captions + '</dd></div><div class="toggle-prefs"><dt>H</dt><dd>' + e.strings.prefs + '</dd></div><div class="fullscreen"><dt>F</dt><dd>' + e.strings.fullscreen + "</dd></div> ";
                return e.onSite || (t += '<div class="view-on-vimeo"><dt>V</dt><dd>' + e.strings.viewOnVimeo + "</dd></div>"),
                t += " </dl></div>"
            }
            ,
            t.templates.icon_stereoscopic = function(e) {
                var t = '<svg viewBox="0 0 20 13" tabindex="-1"><path class="fill" d="M 18.74,0 1.2,0 C 0.55,0 0,0.57 0,1.27 L 0,11.73 C 0,12.43 0.55,13 1.23,13 L 6,13 c 0.54,0 1,-0.32 1.16,-0.79 L 8.55,8.74 C 8.79,8.16 9.35,7.75 10,7.75 c 0.65,0 1.21,0.41 1.45,0.99 l 1.39,3.47 c 0.19,0.47 0.62,0.79 1.11,0.79 l 4.79,0 C 19.45,13 20,12.43 20,11.73 L 20,1.27 C 20,0.57 19.45,0 18.74,0 M 5.22,8.58 C 4,8.58 3,7.55 3,6.29 3,5 4,4 5.22,4 6.44,4 7.43,5 7.43,6.29 7.43,7.55 6.44,8.58 5.22,8.58 m 9.56,0 C 13.56,8.58 12.57,7.55 12.57,6.29 12.57,5.03 13.56,4 14.78,4 16,4 17,5.03 17,6.29 17,7.55 16,8.58 14.78,8.58 Z" /></svg>';
                return t
            }
            ,
            t.templates.icon_airplay = function(e) {
                var t = '<svg class="airplay-icon" viewBox="0 0 44 36" tabindex="-1"><polygon class="fill" points="0,0 44,0 44,27 34.5,27 31,23 40,23 40,4 4,4 4,23 13,23 9.5,27 0,27"/><polygon class="fill" points="7,36 22,18 37,36"/></svg>';
                return t
            }
            ,
            t.templates.icon_back = function(e) {
                var t = '<svg class="icon-back" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M0 32l32 32v-20h32l0-24h-32v-20z"/></svg>';
                return t
            }
            ,
            t.templates.icon_broken_heart = function(e) {
                var t = '<svg class="unlike-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z"/></svg>';
                return t
            }
            ,
            t.templates.icon_card_arrow = function(e) {
                var t = '<svg class="card-arrow" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid" tabindex="-1"><polygon class="fill" points="10 8.337 10 0 1.663 0 1.663 1.603 7.263 1.603 0 8.866 1.134 10 8.397 2.737 8.397 8.337"/></svg>';
                return t
            }
            ,
            t.templates.icon_cc = function(e) {
                var t = '<svg viewBox="0 0 20 14" tabindex="-1"><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M17 0h-14c-1.657 0-3 1.343-3 3v8c0 1.656 1.343 3 3 3h14c1.657 0 3-1.344 3-3v-8c0-1.657-1.343-3-3-3zm-7.271 8.282c-.145.923-.516 1.686-1.105 2.268-.597.591-1.369.89-2.294.89-1.138 0-2.049-.402-2.706-1.195-.647-.786-.975-1.866-.975-3.215 0-1.458.372-2.603 1.105-3.403.65-.708 1.487-1.067 2.487-1.067 1.33 0 2.321.482 2.947 1.435.34.53.526 1.072.553 1.611l.013.236h-1.984l-.044-.169c-.092-.355-.207-.622-.343-.793-.239-.298-.591-.443-1.076-.443-.483 0-.856.209-1.14.641-.298.455-.449 1.12-.449 1.977 0 .851.156 1.49.466 1.898.298.395.666.588 1.122.588.469 0 .814-.16 1.058-.491.138-.183.255-.472.351-.856l.042-.17h2.013l-.041.258zm7.582 0c-.145.923-.516 1.686-1.104 2.268-.598.591-1.369.89-2.294.89-1.139 0-2.049-.402-2.707-1.195-.646-.785-.975-1.865-.975-3.214 0-1.458.372-2.603 1.106-3.403.649-.708 1.485-1.067 2.486-1.067 1.33 0 2.32.482 2.946 1.435.34.53.526 1.072.554 1.611l.012.236h-1.9829999999999999l-.043-.169c-.092-.355-.208-.623-.344-.793-.238-.298-.591-.443-1.076-.443-.483 0-.856.209-1.139.641-.299.455-.45 1.12-.45 1.977 0 .851.157 1.49.467 1.898.299.395.666.588 1.121.588.469 0 .814-.16 1.058-.491.138-.183.256-.472.352-.856l.042-.17h2.012l-.041.257z"/></svg>';
                return t
            }
            ,
            t.templates.icon_check = function(e) {
                var t = '<svg class="check-icon" viewBox="0 0 12 12"><path class="fill" d="M10.9 2.9l-.7-.7c-.2-.2-.6-.2-.8-.1L5 6.6 2.6 4.1c-.2-.1-.6-.1-.7 0l-.8.8c-.1.1-.1.5 0 .7l3.1 3.1c.4.4 1 .4 1.4 0l5.1-5.1c.3-.2.3-.6.2-.7z"/></svg>';
                return t
            }
            ,
            t.templates.icon_clock = function(e) {
                var t = '<svg class="watch-later-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" tabindex="-1"><polyline class="fill hour-hand" points="9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68" /><polyline class="fill minute-hand" points="14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65" /><circle class="stroke" cx="10" cy="10" r="8" stroke-width="2" /></svg>';
                return t
            }
            ,
            t.templates.icon_close_new = function(e) {
                var t = '<svg class="icon-close-new" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M8.001 9.416l6.437 6.437a.497.497 0 0 0 .713-.001l.7-.7a.503.503 0 0 0 .002-.714L9.416 8.001l6.437-6.436a.497.497 0 0 0-.001-.713l-.7-.7a.503.503 0 0 0-.714-.002L8.001 6.587 1.565.15a.497.497 0 0 0-.713.001l-.7.7a.503.503 0 0 0-.002.714L6.587 8 .15 14.438a.497.497 0 0 0 .001.713l.7.7a.503.503 0 0 0 .714.002L8 9.416z"/></svg>';
                return t
            }
            ,
            t.templates.icon_close = function(e) {
                var t = '<svg class="icon-close" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M60 48.796l-16.812-16.796 16.812-16.796-11.204-11.204-16.796 16.804-16.804-16.804-11.196 11.204 16.796 16.796-16.796 16.796 11.196 11.204 16.804-16.804 16.796 16.804z"/></svg>';
                return t
            }
            ,
            t.templates.icon_collections = function(e) {
                var t = '<svg class="collections-icon" viewBox="0 0 24 24" tabindex="-1"><path class="fill" d="M24 12c0-.3-.1-.6-.4-.8l-2.7-2.3 2.4-1c.4-.1.7-.5.7-.9 0-.3-.1-.6-.4-.8l-7-6c-.1-.1-.4-.2-.6-.2-.1 0-.3 0-.4.1l-15 6c-.3.1-.6.5-.6.9 0 .3.1.6.4.8l2.7 2.3-2.4 1c-.4.1-.7.5-.7.9 0 .3.1.6.4.8l2.7 2.3-2.4 1c-.4.1-.7.5-.7.9 0 .3.1.6.4.8l7 6c.1.1.4.2.6.2.1 0 .3 0 .4-.1l15-6c.4-.1.6-.5.6-.9 0-.3-.1-.6-.4-.8l-2.7-2.3 2.4-1c.4-.1.7-.5.7-.9zm-8.2-9.8l5.3 4.5-12.9 5.1-5.3-4.5 12.9-5.1zm5.3 14.5L8.2 21.8l-5.3-4.5 1.9-.8 2.6 2.2c.1.2.4.3.6.3.1 0 .3 0 .4-.1l10.5-4.2 2.2 2zm-12.9.1l-5.3-4.5 1.9-.8 2.6 2.2c.1.2.4.3.6.3.1 0 .3 0 .4-.1l10.5-4.2 2.3 1.9-13 5.2z"/></svg>';
                return t
            }
            ,
            t.templates.icon_embed = function(e) {
                var t = '<svg class="embed-icon" viewBox="0 0 55 48" preserveAspectRatio="xMidYMid" tabindex="-1"><polygon class="fill" points="16.019,16.385 11.968,13.131 0,24.543 12.082,35.955 16.132,32.703 7.439,24.543"/><polygon class="fill" points="42.92,13.131 38.868,16.384 47.561,24.542 38.981,32.701 43.033,35.955 55,24.542"/><polygon class="fill" points="24.083,39.221 28.76,39.221 36.243,8.351 31.566,8.351"/></svg>';
                return t
            }
            ,
            t.templates.icon_facebook = function(e) {
                var t = '<svg class="facebook-icon" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M35.992 64h-11.992v-32h-8v-11.028l8-0.004-0.013-6.497c0-8.997 2.44-14.471 13.037-14.471h8.824v11.030h-5.514c-4.127 0-4.325 1.541-4.325 4.418l-0.016 5.52h9.918l-1.169 11.028-8.741 0.004-0.008 32z"/></svg>';
                return t
            }
            ,
            t.templates.icon_follow = function(e) {
                var t = '<svg class="icon icon-follow" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid" tabindex="-1"><defs><clipPath id="icon-mask--check"><rect x="0" y="0" width="24" height="24" /></clipPath></defs><path class="icon-path icon-path--plus fill" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/><path class="icon-path icon-path--check fill" d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" clip-path="url(#icon-mask--check)"/><path class="icon-path icon-path--close fill" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>';
                return t
            }
            ,
            t.templates.icon_fullscreen = function(e) {
                var t = '<svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid" tabindex="-1"><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(90)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(180)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(270)" /></svg>';
                return t
            }
            ,
            t.templates.icon_gear = function(e) {
                var t = '<svg class="icon-gear" viewBox="0 0 19 16" preserveAspectRatio="xMidYMid" tabindex="-1"><defs><clipPath id="icon-gear-mask-hd"><polygon points="19 9.422 19 0 0 0 0 16 4.996 16 6 9.422 19 9.422"/></clipPath><clipPath id="icon-gear-mask-4k"><polygon points="19 0 0 0 0 16 .656 16 7.641 9.422 19 9.422"/></clipPath></defs><g class="icon-gear-group"><path class="icon-gear-cog fill" d="M8.75,0 L7.25,0 C6.69771525,0 6.25,0.44771525 6.25,1 L6.25,1.71 C6.24203899,2.03670262 6.03616565,2.32571712 5.73,2.44 C5.22486505,2.64787629 4.75048268,2.92375823 4.32,3.26 C4.06726048,3.46530794 3.71530155,3.4969447 3.43,3.34 L2.81,3 C2.57947626,2.86645499 2.30519371,2.83041629 2.04799634,2.89987835 C1.79079898,2.96934041 1.57195122,3.13856029 1.44,3.37 L1.44,3.37 L0.69,4.67 C0.438460777,5.14101477 0.601355467,5.72655514 1.06,6 L1.06,6 L1.68,6.36 C1.95609578,6.53006064 2.1022252,6.84996558 2.05,7.17 C1.97585362,7.71080372 1.97585362,8.25919628 2.05,8.8 C2.1022252,9.12003442 1.95609578,9.43993936 1.68,9.61 L1.06,10 C0.828560291,10.1319512 0.65934041,10.350799 0.589878348,10.6079963 C0.520416285,10.8651937 0.556454987,11.1394763 0.69,11.37 L0.69,11.37 L1.44,12.67 C1.72842942,13.137733 2.34023095,13.2851012 2.81,13 L2.81,13 L3.43,12.64 C3.71530155,12.4830553 4.06726048,12.5146921 4.32,12.72 C4.75048268,13.0562418 5.22486505,13.3321237 5.73,13.54 C6.03616565,13.6542829 6.24203899,13.9432974 6.25,14.27 L6.25,15 C6.25,15.5522847 6.69771525,16 7.25,16 L8.75,16 C9.30228475,16 9.75,15.5522847 9.75,15 L9.75,14.29 C9.75796101,13.9632974 9.96383435,13.6742829 10.27,13.56 C10.7751349,13.3521237 11.2495173,13.0762418 11.68,12.74 C11.9327395,12.5346921 12.2846984,12.5030553 12.57,12.66 L13.19,13.02 C13.4205237,13.153545 13.6948063,13.1895837 13.9520037,13.1201217 C14.209201,13.0506596 14.4280488,12.8814397 14.56,12.65 L14.56,12.65 L15.31,11.35 C15.5746773,10.8743026 15.4102265,10.2742794 14.94,10 L14.94,10 L14.32,9.64 C14.0439042,9.46993936 13.8977748,9.15003442 13.95,8.83 C14.0241464,8.28919628 14.0241464,7.74080372 13.95,7.2 C13.8977748,6.87996558 14.0439042,6.56006064 14.32,6.39 L14.94,6.03 C15.1714397,5.89804878 15.3406596,5.67920102 15.4101217,5.42200366 C15.4795837,5.16480629 15.443545,4.89052374 15.31,4.66 L15.31,4.66 L14.56,3.36 C14.426372,3.13025585 14.2067828,2.96315821 13.9497298,2.89561144 C13.6926768,2.82806466 13.4193087,2.86562606 13.19,3 L13.19,3 L12.57,3.36 C12.2846984,3.5169447 11.9327395,3.48530794 11.68,3.28 C11.2495173,2.94375823 10.7751349,2.66787629 10.27,2.46 C9.96383435,2.34571712 9.75796101,2.05670262 9.75,1.73 L9.75,1 C9.75,0.73478351 9.64464316,0.480429597 9.45710678,0.292893219 C9.2695704,0.10535684 9.01521649,-8.8817842e-16 8.75,0 Z M10.5,8 C10.5,9.38071187 9.38071187,10.5 8,10.5 C6.61928813,10.5 5.5,9.38071187 5.5,8 C5.5,6.61928813 6.61928813,5.5 8,5.5 C9.38071187,5.5 10.5,6.61928813 10.5,8 Z" /></g><g class="icon-gear-text icon-gear-text-hd"><polygon class="fill" points="10.17 12.38 10.46 10.43 12.22 10.43 11.36 16 9.6 16 9.95 13.76 8.09 13.76 7.77 16 6.01 16 6.85 10.43 8.61 10.43 8.32 12.38"/><path class="fill" d="M17.82,11.23 C17.65,10.98 17.32,10.43 15.93,10.43 L13.37,10.43 L12.51,16 L15.09,16 C16.1538092,16.0719871 17.159097,15.5065128 17.65,14.56 C18.1567595,13.5192032 18.2181336,12.3169925 17.82,11.23 Z M15.9,14.42 C15.6125419,14.6349311 15.2582986,14.7412041 14.9,14.72 L14.48,14.72 L14.9,11.72 L15.35,11.72 C15.6806309,11.6794538 16.0108877,11.7981978 16.24,12.04 C16.4818058,12.8447587 16.357466,13.7151373 15.9,14.42 Z"/></g><g class="icon-gear-text icon-gear-text-4k"><polygon class="fill" points="11.82 10.29 13.58 10.29 13.19 12.17 13.19 12.17 15.19 10.27 17.48 10.27 14.75 12.62 16.36 16 14.36 16 13.36 13.78 12.76 14.32 12.39 16 10.63 16"/><path class="fill" d="M7.86,14.9 L5.31,14.9 L5.61,13.41 L8.78,10.41 L10.36,10.41 L9.72,13.51 L10.44,13.51 L10.18,14.87 L9.45,14.87 L9.22,16 L7.63,16 L7.86,14.9 Z M8.19,13.54 L8.54,12 L8.54,12 L6.94,13.58 L8.19,13.54 Z"/></g></svg>';
                return t
            }
            ,
            t.templates.icon_heart = function(e) {
                var t = '<svg class="like-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z"/></svg>';
                return t
            }
            ,
            t.templates.icon_line_arrow = function(e) {
                var t = '<svg class="icon-lineArrow" viewBox="0 0 24 15"><polygon class="fill" points="21 0 24 3.057 12 15 0 3.057 3 0 12 9"/></svg>';
                return t
            }
            ,
            t.templates.icon_lock = function(e) {
                var t = '<svg viewBox="0 0 46 76" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill bolt" d="M5,42v-15C8,5 39,5 42,27v30h-7v-30C32,14 15,14 12,27v15z"/><rect class="fill" x="0" y="41" height="35" width="46" rx="4" ry="4"/></svg>';
                return t
            }
            ,
            t.templates.icon_mail = function(e) {
                var t = '<svg class="mail-icon" viewBox="0 0 72 72" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M71.754,57.6C71.9,57.169,72,56.718,72,56.241V16.759c0-0.453-0.092-0.881-0.225-1.291l-23.487,19.86L71.754,57.6z"/><path class="fill" d="M35.999,40.118l6.187-4.971l3.131-2.516L68.9,12.693c-0.387-0.113-0.789-0.193-1.213-0.193H4.312c-0.424,0-0.827,0.08-1.215,0.194l23.599,19.949l3.132,2.517L35.999,40.118z"/><path class="fill" d="M67.688,60.5c0.405,0,0.791-0.074,1.164-0.18L45.157,37.843l-9.159,7.361l-9.145-7.351L3.15,60.322C3.522,60.426,3.907,60.5,4.312,60.5H67.688z"/><path class="fill" d="M0.226,15.468C0.092,15.878,0,16.307,0,16.759v39.482c0,0.478,0.099,0.929,0.247,1.356l23.476-22.261L0.226,15.468z"/></svg>';
                return t
            }
            ,
            t.templates.icon_pause = function(e) {
                var t = '<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" tabindex="-1"><rect class="fill" width="6" height="20" x="0" y="0" /><rect class="fill" width="6" height="20" x="12" y="0" /></svg>';
                return t
            }
            ,
            t.templates.icon_pip = function(e) {
                var t = '<svg class="pip-icon" viewBox="0 0 16 12"><polygon class="fill" points="6 8 1 8 1 1 14 1 14 6 15 6 15 0 0 0 0 9 6 9 6 8"/><rect class="fill" x="7" y="7" width="9" height="5"/><polyline class="fill enter" transform="translate(4, 4) rotate(180) translate(-4, -4)" points="5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"/><polyline class="fill return" points="5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"/></svg>';
                return t
            }
            ,
            t.templates.icon_play = function(e) {
                var t = '<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" tabindex="-1"><polygon class="fill" points="1,0 20,10 1,20" /></svg>';
                return t
            }
            ,
            t.templates.icon_prev = function(e) {
                var t = '<svg class="icon-prev" viewBox="0 0 27 48" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M7.243,24L26.414,4.828c0.781-0.781,0.781-2.047,0-2.828L25,0.586 c-0.781-0.781-2.047-0.781-2.828,0L0.879,21.879c-1.172,1.172-1.172,3.071,0,4.243l21.293,21.293c0.781,0.781,2.047,0.781,2.828,0 L26.414,46c0.781-0.781,0.781-2.047,0-2.828L7.243,24z"/></svg>';
                return t
            }
            ,
            t.templates.icon_replay = function(e) {
                var t = '<svg viewBox="-387 605 16 16" preserveAspectRatio="xMidYMid"><path class="fill" d="M-387 606v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1h-1.5c1.1-1.2 2.7-2 4.5-2 3.3 0 6 2.7 6 6s-2.7 6-6 6c-2.3 0-4.4-1.3-5.4-3.4-.2-.5-.8-.7-1.3-.5-.5.2-.7.8-.5 1.3 1.3 2.8 4.2 4.6 7.2 4.6 4.4 0 8-3.6 8-8s-3.6-8-8-8c-2.3 0-4.5 1-6 2.7V606c0-.6-.4-1-1-1s-1 .4-1 1z"></path></svg>';
                return t
            }
            ,
            t.templates.icon_share = function(e) {
                var t = '<svg class="share-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" tabindex="-1"><polygon class="fill" points="20,0 0,12 5,15 17,4 7,16 7,19 9,17 14,20"/></svg>';
                return t
            }
            ,
            t.templates.icon_tumblr = function(e) {
                var t = '<svg class="tumblr-icon" viewBox="0 0 12 20" tabindex="-1"><path class="fill" d="M7.865,19.958 C3.629,19.958 2.02,16.834 2.02,14.627 L2.02,8.105 L0,8.105 L0,5.527 C3.027,4.436 3.756,1.705 3.927,0.149 C3.938,0.042 4.022,0 4.07,0 L6.994,0 L6.994,5.084 L10.987,5.084 L10.987,8.105 L6.979,8.105 L6.979,14.318 C6.993,15.149 7.291,16.287 8.815,16.287 C8.843,16.287 8.872,16.287 8.9,16.286 C9.43,16.272 10.14,16.118 10.511,15.941 L11.471,18.788 C11.11,19.317 9.481,19.932 8.015,19.957 C7.964,19.958 7.915,19.958 7.865,19.958"/></svg>';
                return t
            }
            ,
            t.templates.icon_twitter = function(e) {
                var t = '<svg class="twitter-icon" viewBox="0 0 274 223" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M85.98,222 C54.305,222 24.822,212.715 0,196.801 C4.388,197.319 8.853,197.584 13.38,197.584 C39.658,197.584 63.843,188.617 83.039,173.574 C58.495,173.121 37.781,156.905 30.644,134.621 C34.068,135.276 37.582,135.627 41.196,135.627 C46.312,135.627 51.267,134.942 55.974,133.66 C30.314,128.508 10.981,105.838 10.981,78.662 C10.981,78.426 10.981,78.191 10.985,77.957 C18.548,82.158 27.196,84.681 36.391,84.972 C21.341,74.914 11.438,57.746 11.438,38.287 C11.438,28.008 14.204,18.373 19.032,10.089 C46.696,44.023 88.025,66.353 134.641,68.692 C133.685,64.587 133.188,60.306 133.188,55.91 C133.188,24.935 158.302,-0.178 189.279,-0.178 C205.411,-0.178 219.988,6.634 230.22,17.535 C242.996,15.019 255,10.351 265.837,3.924 C261.649,17.021 252.756,28.013 241.175,34.955 C252.521,33.599 263.331,30.584 273.39,26.123 C265.87,37.371 256.36,47.25 245.402,55.158 C245.51,57.563 245.564,59.982 245.564,62.414 C245.564,136.533 189.148,222 85.98,222"/></svg>';
                return t
            }
            ,
            t.templates.icon_unfullscreen = function(e) {
                var t = '<svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid" tabindex="-1"><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) "/><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(90)" /><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(180)" /><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(270)" /></svg>';
                return t
            }
            ,
            t.templates.icon_vod_download = function(e) {
                var t = '<svg class="vod-download-icon" viewBox="0 0 32 32" tabindex="-1"><path class="fill" d="M21.707 24.707l-5 5c-.39.39-1.024.39-1.414 0l-5-5c-.39-.39-.39-1.024 0-1.414l1.06-1.06c.392-.392 1.025-.392 1.415 0L14 23.462V15c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v8.464l1.232-1.232c.39-.39 1.024-.39 1.414 0l1.06 1.06c.392.39.392 1.025 0 1.415z"/><path class="fill" d="M27.894 12.31c.063-.43.106-.864.106-1.31 0-4.97-4.03-9-9-9-3.6 0-6.7 2.12-8.138 5.175C10.175 6.75 9.368 6.5 8.5 6.5 6.015 6.5 4 8.515 4 11c0 .445.067.874.187 1.28C1.76 13.05 0 15.318 0 18c0 3.314 2.686 6 6 6h1c0-2.42 1.718-4.436 4-4.9V15c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v4.1c2.282.464 4 2.48 4 4.9h1c3.314 0 6-2.686 6-6 0-2.65-1.72-4.896-4.106-5.69z"/></svg>';
                return t
            }
            ,
            t.templates.icon_vod_rent = function(e) {
                var t = '<svg class="vod-rent-icon" viewBox="0 0 32 32" tabindex="-1"><path class="fill" d="M23 11H9c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-8c0-.552-.448-1-1-1z"/><path class="fill" d="M32 22V10c-2.76 0-5-2.24-5-5H5c0 2.76-2.24 5-5 5v12c2.76 0 5 2.24 5 5h22c0-2.76 2.24-5 5-5zm-6-1c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V11c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2v10z"/></svg>';
                return t
            }
            ,
            t.templates.icon_vod_subscribe = function(e) {
                var t = '<svg class="vod-subscribe-icon" viewBox="0 0 32 32" tabindex="-1"><path class="fill" d="M20 9v2c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v4.445C24.98 2.01 20.523-.128 15.558.005 7.293.23.413 6.96.018 15.216-.42 24.41 6.905 32 16 32c8.47 0 15.404-6.583 15.964-14.912.04-.585-.413-1.088-1-1.088H28.96c-.514 0-.956.388-.994.9C27.506 23.107 22.326 28 16 28 9.217 28 3.748 22.37 4.01 15.53 4.246 9.284 9.47 4.147 15.72 4.003 19.38 3.92 22.674 5.483 24.926 8H21c-.552 0-1 .448-1 1z"/><path class="fill" d="M13 20v-8l8 4"/></svg>';
                return t
            }
            ,
            t.templates.icon_vod = function(e) {
                var t = '<svg class="vod-icon" viewBox="0 0 21 23" tabindex="-1"><path class="fill" d="M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z"/></svg>';
                return t
            }
            ,
            t.templates.icon_warning = function(e) {
                var t = '<svg class="warning-icon" tabindex="-1" width="36" height="32.326" viewBox="287.915 380.297 36 32.326"><path d="M309.646 382.963c-2.052-3.555-5.41-3.555-7.462 0L288.79 406.16c-2.05 3.555-.372 6.463 3.732 6.463h26.786c4.104 0 5.783-2.908 3.73-6.463l-13.392-23.197zm-2 23.224c0 .983-.804 1.788-1.788 1.788-.983 0-1.788-.805-1.788-1.788 0-.984.805-1.79 1.788-1.79s1.79.805 1.788 1.79zm-.317-7.76c-.254 2.604-.916 4.735-1.472 4.735-.557 0-1.22-2.13-1.477-4.735-.255-2.604-.464-5.72-.464-6.925 0-1.204.87-2.19 1.935-2.19 1.066 0 1.936.986 1.936 2.19s-.205 4.32-.457 6.925z"/></svg>';
                return t
            }
            ,
            t.templates.logo = function(e) {
                var t = '<svg viewBox="0 0 140 40" preserveAspectRatio="xMidYMid" role="img" aria-label="Vimeo" tabindex="-1"><title>Vimeo</title><g><path class="fill logo-v" d="M31.277 18.832c-.14 3.052-2.27 7.229-6.39 12.531-4.259 5.536-7.863 8.306-10.811 8.306-1.825 0-3.371-1.687-4.633-5.059l-2.529-9.275c-.938-3.372-1.943-5.06-3.019-5.06-.234 0-1.054.494-2.458 1.477l-1.474-1.901c1.546-1.358 3.071-2.717 4.572-4.078 2.062-1.783 3.609-2.72 4.642-2.814 2.438-.234 3.938 1.433 4.502 5.001.608 3.851 1.03 6.246 1.266 7.182.704 3.195 1.476 4.791 2.321 4.791.657 0 1.641-1.037 2.954-3.108 1.312-2.072 2.015-3.649 2.109-4.732.188-1.789-.516-2.686-2.109-2.686-.75 0-1.522.173-2.318.514 1.54-5.044 4.481-7.495 8.823-7.355 3.22.095 4.737 2.184 4.552 6.266z"/><path class="fill logo-i" d="M50.613 28.713c-1.313 2.484-3.119 4.733-5.417 6.748-3.143 2.718-6.285 4.076-9.425 4.076-1.456 0-2.57-.469-3.343-1.406-.773-.938-1.137-2.153-1.09-3.653.045-1.548.526-3.938 1.441-7.173.914-3.232 1.373-4.967 1.373-5.201 0-1.218-.423-1.828-1.266-1.828-.282 0-1.079.494-2.393 1.477l-1.618-1.901c1.501-1.358 3.001-2.717 4.502-4.078 2.017-1.783 3.518-2.72 4.504-2.814 1.546-.14 2.684.314 3.411 1.367.726 1.052.996 2.417.81 4.098-.61 2.852-1.268 6.472-1.972 10.864-.046 2.01.681 3.014 2.182 3.014.656 0 1.827-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.336 1.755zm-6.12-25.016c-.047 1.168-.633 2.288-1.76 3.361-1.266 1.212-2.767 1.82-4.501 1.82-2.672 0-3.963-1.166-3.869-3.499.045-1.213.76-2.381 2.144-3.501 1.384-1.119 2.919-1.68 4.609-1.68.984 0 1.805.387 2.462 1.155.656.772.961 1.553.915 2.344z"/><path class="fill logo-m" d="M94.543 28.713c-1.314 2.484-3.117 4.733-5.416 6.748-3.145 2.718-6.285 4.076-9.426 4.076-3.051 0-4.527-1.687-4.432-5.06.045-1.501.338-3.306.877-5.415.539-2.108.832-3.748.879-4.921.049-1.779-.492-2.673-1.623-2.673-1.223 0-2.682 1.456-4.375 4.362-1.788 3.05-2.754 6.003-2.894 8.861-.095 2.02.103 3.568.592 4.645-3.272.096-5.565-.444-6.873-1.617-1.171-1.032-1.708-2.742-1.614-5.135.045-1.501.276-3.001.69-4.502.414-1.5.644-2.837.69-4.011.095-1.734-.54-2.604-1.9-2.604-1.177 0-2.444 1.339-3.806 4.011-1.361 2.673-2.113 5.465-2.253 8.371-.094 2.627.074 4.456.503 5.486-3.219.096-5.505-.582-6.857-2.035-1.122-1.214-1.634-3.06-1.539-5.54.044-1.214.258-2.911.645-5.084.386-2.175.603-3.87.647-5.087.093-.841-.119-1.263-.633-1.263-.281 0-1.079.475-2.393 1.424l-1.687-1.901c.234-.184 1.71-1.545 4.432-4.078 1.969-1.828 3.306-2.766 4.009-2.812 1.219-.095 2.204.409 2.954 1.511s1.126 2.38 1.126 3.834c0 .469-.047.915-.14 1.336.703-1.077 1.523-2.017 2.463-2.814 2.156-1.874 4.572-2.931 7.245-3.166 2.298-.187 3.938.352 4.925 1.617.795 1.033 1.17 2.511 1.125 4.433.329-.28.681-.586 1.056-.915 1.078-1.267 2.133-2.273 3.164-3.023 1.736-1.267 3.541-1.97 5.418-2.112 2.25-.187 3.867.35 4.852 1.611.844 1.028 1.219 2.5 1.127 4.415-.047 1.309-.363 3.213-.949 5.712-.588 2.501-.879 3.936-.879 4.31-.049.982.047 1.659.279 2.034.236.373.797.559 1.689.559.656 0 1.826-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.337 1.757z"/><path class="fill logo-e" d="M120.922 28.642c-1.361 2.249-4.033 4.495-8.02 6.743-4.971 2.856-10.012 4.284-15.125 4.284-3.797 0-6.52-1.267-8.16-3.797-1.172-1.735-1.734-3.797-1.688-6.189.045-3.797 1.736-7.407 5.064-10.832 3.658-3.75 7.973-5.627 12.945-5.627 4.596 0 7.033 1.873 7.314 5.615.188 2.384-1.125 4.842-3.938 7.368-3.004 2.76-6.781 4.515-11.328 5.263.842 1.169 2.109 1.752 3.799 1.752 3.375 0 7.059-.855 11.045-2.574 2.859-1.207 5.111-2.461 6.754-3.76l1.338 1.754zm-15.969-7.345c.045-1.259-.469-1.89-1.547-1.89-1.406 0-2.83.969-4.283 2.906-1.451 1.936-2.201 3.789-2.248 5.562-.025 0-.025.305 0 .911 2.295-.839 4.287-2.122 5.971-3.849 1.357-1.491 2.06-2.707 2.107-3.64z"/><path class="fill logo-o" d="M140.018 23.926c-.189 4.31-1.781 8.031-4.783 11.169-3.002 3.137-6.73 4.706-11.186 4.706-3.705 0-6.52-1.195-8.441-3.585-1.404-1.777-2.182-4.001-2.32-6.668-.236-4.029 1.217-7.729 4.361-11.101 3.377-3.746 7.619-5.618 12.732-5.618 3.281 0 5.766 1.102 7.457 3.301 1.594 2.015 2.32 4.614 2.18 7.796zm-7.95-.264c.047-1.269-.129-2.434-.527-3.49-.4-1.057-.975-1.587-1.725-1.587-2.391 0-4.361 1.293-5.906 3.877-1.316 2.115-2.02 4.371-2.111 6.766-.049 1.176.164 2.21.633 3.104.514 1.032 1.242 1.549 2.182 1.549 2.109 0 3.914-1.244 5.416-3.735 1.267-2.068 1.945-4.23 2.038-6.484z"/></g></svg>';
                return t
            }
            ,
            t.templates.menu_list_panel = function(e) {
                var t = '<div class="vp-panel vp-panel-open vp-panel--' + e.id + '"><div class="vp-panel-title"><button type="button" class="vp-panel-button js-panelTitleButton" tabindex="0"><span class="vp-panel-button-text">' + e.title + '</span><span class="vp-panel-stat"><span class="vp-panel-stat-text js-panelStatText">' + e.active + "</span> ";
                t += this.render("icon_line_arrow") || "",
                t += ' </span></button></div><div class="vp-panel-itemsWrap"><ul class="vp-panel-items js-panelItems"> ';
                for (var n = 0; n < e.items.length; n++)
                    t += ' <li class="vp-panel-item',
                    e.items[n].active && (t += " vp-panel-item-on"),
                    t += '" tabindex="0" role="menuitemradio" aria-checked="',
                    t += e.items[n].active ? "true" : "false",
                    t += '"> ' + e.items[n].label + " </li> ";
                return t += ' </ul><div class="vp-indicator"></div></div></div>'
            }
            ,
            t.templates.menu = function(e) {
                var t = '<div class="vp-menu vp-menu-hidden vp-menu-invisible" role="menu" hidden><button type="button" class="vp-menu-close js-menuClose" aria-label="' + e.strings.close + '">';
                return t += this.render("icon_close_new") || "",
                t += "</button></div>"
            }
            ,
            t.templates.outer = function(e) {
                var t = '<div class="player-inner js-playerInner"><div class="video-wrapper"><div class="video"><div class="telecine"></div></div></div><div class="vp-text-alert-wrapper hidden"><div class="vp-alert-text"></div><div class="vp-alert-time"><div class="vp-live-start-time-title"></div><div class="vp-live-start-time-body"></div><div class="vp-live-start-time-footer"></div></div></div><div class="target"></div><div class="captions hidden with-controls" hidden aria-live="assertive"><span></span></div><div class="cards-wrapper js-cards-wrapper"><div class="cards js-cards"></div></div><div class="outro-wrapper js-outro-wrapper hidden" hidden><div class="outro js-outro" role="dialog" aria-live="assertive"></div></div><div class="controls-wrapper"><div class="title" role="contentinfo"></div><div class="controls"></div><div class="sidedock hidden" role="toolbar" hidden></div></div><div class="overlay-wrapper hidden" hidden><div class="overlay-bg"></div><div class="overlay-cell"><div class="overlay" role="dialog" aria-live="assertive"></div><div class="overlay-icon-wrapper hidden"><div class="overlay-icon"></div></div><div class="overlay-logo logo"></div></div><nav><button type="button" class="nav-prevButton js-back cloaked" aria-label="' + e.strings.back + '">';
                return t += this.render("icon_prev") || "",
                t += '</button><button type="button" class="nav-closeButton js-close" aria-label="' + e.strings.close + '">',
                t += this.render("icon_close_new") || "",
                t += '</button></nav></div><div class="notification-wrapper hidden" hidden><div class="notification-cell"><div class="notification" role="dialog" aria-live="assertive"></div></div></div><div class="stats-debug rounded-box hidden" aria-hidden="true" hidden></div></div>'
            }
            ,
            t.templates.outro_email = function(e) {
                var t = '<div class="outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'),
                t += '></div><div class="outro-content outro-content--email outro-shade js-outro-content"></div>'
            }
            ,
            t.templates.outro_image = function(e) {
                var t = '<div class="outro-content outro-content--image js-outro-content"> ';
                return e.url && (t += '<a class="outro-imageLink js-imageLink" href="' + e.url + '" target="_blank">'),
                e.bgimage && (t += '<div class="outro-image" style="background-image: url(' + e.bgimage + ');"',
                e.alt_text && (t += ' aria-label="' + e.alt_text + '" role="img"'),
                t += "></div>"),
                e.url && (t += "</a>"),
                t += "</div>"
            }
            ,
            t.templates.outro_link = function(e) {
                var t = '<div class="outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'),
                t += '></div><div class="outro-content outro-content--link outro-shade js-outro-content"><div class="outro-linkWrapper js-outro-linkWrapper"> ',
                e.title && (t += '<h1 class="outro-textTitle js-outro-title">',
                t += this.escape(e.title) || "",
                t += "</h1>"),
                e.description && (t += '<p class="outro-textDescription js-outro-text">',
                t += this.escape(e.description) || "",
                t += "</p>"),
                e.text && e.url && (t += ' <div class="outro-buttonWrap"><a class="outro-button js-cta" href="' + e.url + '" target="_blank" title="' + e.text + '"><span>',
                t += this.escape(e.text) || "",
                t += "</span></a></div> "),
                e.text2 && e.url2 && (t += ' <div class="outro-linkWrap js-outro-linkWrap"><a class="outro-link js-link" href="' + e.url2 + '" target="_blank" title="' + e.text2 + '">',
                t += this.escape(e.text2) || "",
                t += "</a></div> "),
                t += " </div></div>"
            }
            ,
            t.templates.outro_nothing = function(e) {
                var t = '<div class="outro-bg"></div><div class="outro-content outro-content--nothing outro-shade js-outro-content"></div>';
                return t
            }
            ,
            t.templates.outro_share = function(e) {
                var t = '<div class="outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'),
                t += '></div><div class="outro-content outro-content--share outro-shade js-outro-content"></div><nav class="panel-nav"><button type="button" class="nav-prevButton js-back cloaked" aria-label="' + e.strings.back + '">',
                t += this.render("icon_prev") || "",
                t += "</button></nav>"
            }
            ,
            t.templates.outro_staticimage = function(e) {
                var t = '<div class="outro-content outro-content--staticImage js-outro-content"><div class="outro-staticImageWrapper"> ';
                return e.url && (t += '<a class="outro-staticImageLink" href="' + e.url + '" target="_blank">'),
                t += ' <img class="outro-staticImage" src="' + e.svg_url + '"> ',
                e.url && (t += "</a>"),
                t += " </div></div>"
            }
            ,
            t.templates.outro_text = function(e) {
                var t = '<div class="outro-content outro-content--text outro-shade js-outro-content"><div class="outro-textWrapper"><div class="outro-text">' + e.text + "</div></div></div>";
                return t
            }
            ,
            t.templates.outro_videos = function(e) {
                var t = '<div class="outro-bg"';
                e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'),
                t += '></div><div class="outro-content outro-content--videos outro-shade js-outro-content"> ';
                for (var n = 0, i = e.contexts.length; n < i; n++) {
                    var r = e.contexts[n];
                    t += ' <div class="outro-videosSection outro-videosSection--' + r.videos.length,
                    r.promoted && (t += " outro-videosSection--promoted"),
                    t += '"><div class="outro-videosHeaderWrapper"><header class="outro-videosHeader"><h1 class="outro-videosTitle">' + r.context + "</h1> ",
                    e.showFollowButton && !r.promoted && (t += ' <div class="outro-followWrap js-outro-followWrap"><button type="button" class="outro-follow js-outro-follow" aria-label="' + e.strings.follow + '" aria-pressed="',
                    t += e.following ? "true" : "false",
                    t += '"> ',
                    t += this.render("icon_follow") || "",
                    t += ' <span class="outro-follow-text" data-label-follow="' + e.strings.follow + '" data-label-following="' + e.strings.following + '" data-label-unfollow="' + e.strings.unfollow + '"></span></button></div> '),
                    t += ' </header></div><ul class="outro-videos outro-videos--' + r.videos.length + '"> ';
                    for (var o = 0, a = r.videos.length; o < a; o++)
                        t += ' <li><a class="outro-videoLink js-videoLink',
                        1 == n && (t += " hovered"),
                        t += '" href="' + r.videos[o].url + '"',
                        e.target && (t += ' target="_blank"'),
                        t += ' data-video-id="' + r.videos[o].id + '" aria-label="' + r.videos[o].fullTitle + '" title="',
                        t += this.escape(r.videos[o].fullTitle) || "",
                        t += '"><div class="outro-imgWrapper"><img src="' + r.videos[o].thumbnail + '" alt="" width="295" height="166"></div><header class="outro-videoHeader"><h1 class="outro-videoTitle">',
                        t += this.escape(r.videos[o].title) || "",
                        t += "</h1> ",
                        r.videos[o].byline && (t += ' <h2 class="outro-videoByline">',
                        t += this.escape(r.videos[o].byline) || "",
                        t += "</h2> "),
                        t += " </header></a> ";
                    t += " </ul></div> "
                }
                return t += "</div>"
            }
            ,
            t.templates.outro_vod = function(e) {
                var t = '<div class="outro-content outro-content--vod outro-shade js-outro-content"><div class="outro-vodWrapper"><h1 class="outro-vodHeader"><a href="' + e.url + '" target="_blank">';
                t += this.escape(e.title) || "",
                t += "</a></h1> ";
                var n = e.countries
                  , i = e.country;
                if (this.helpers.isAvailableInCountry(n, i))
                    if (e.purchased)
                        t += ' <a class="outro-vodButton outro-vodButton--watch js-vod-watch" role="button" href="' + e.url + '" target="_blank">' + e.strings.watch + "</a> ";
                    else {
                        if (!e.isComingSoon) {
                            t += ' <ul class="outro-vod"> ';
                            for (var r = 0, o = e.buttons.length; r < o; r++) {
                                t += ' <li class="outro-vod-item"><a class="outro-vodButton outro-vodButton--' + e.buttons[r].type + ' js-vod-button" role="button" href="' + e.url + "#buy=" + e.buttons[r].product_id + '" target="_blank" data-product-id="' + e.buttons[r].product_id + '" role="button"><div class="outro-vodIcon"> ',
                                t += "buy" === e.buttons[r].type ? this.render("icon_vod_download") || "" : "rent" === e.buttons[r].type ? this.render("icon_vod_rent") || "" : "subscribe" === e.buttons[r].type ? this.render("icon_vod_subscribe") || "" : this.render("icon_vod") || "",
                                t += " </div> ";
                                var a = e.currency
                                  , s = e.buttons[r];
                                t += " <p>" + this.helpers.formatVodLabel(e.translationMap, "outro_string", a, s) + "</p></a></li> "
                            }
                            t += " </ul> "
                        }
                        (e.isPreorder || e.isComingSoon) && (t += " <p>" + e.strings.preRelease + "</p> ")
                    }
                return t += " </div></div>"
            }
            ,
            t.templates.overlay_app_redirect = function(e) {
                var t = '<div class="window-wrapper"> ';
                return e.strings.title && (t += ' <div class="app-redirect-title">' + e.strings.title + "</div> "),
                t += ' <div class="' + (e.strings.title ? "" : "app-redirect--topspace") + '"><a class="app-redirect-button" href="' + e.redirectUrl + '" role="button"',
                e.newWindow && (t += ' data-new-window="1" target="_blank"'),
                t += ">" + e.strings.buttonText + "</a></div> ",
                e.strings.ignoreText && (t += ' <div class="app-redirect-ignore">' + e.strings.ignoreText + "</div> "),
                e.strings.bottomText && (t += ' <div class="app-redirect-bottom-text">' + e.strings.bottomText + "</div> "),
                t += "</div>"
            }
            ,
            t.templates.overlay_email_capture = function(e) {
                var t = '<div class="window-wrapper email-capture form"><div class="email-capture-form"><h1>' + e.text + '</h1><p class="subtitle">' + e.subtitle + '</p><form action="' + e.action + '" method="post" novalidate><div class="validation-bubble hidden"><div class="validation-bubble-arrow-clipper"><div class="validation-bubble-arrow"></div></div><div class="validation-bubble-message"></div></div><input type="email" name="email" placeholder="' + e.strings.email + '" aria-label="' + e.strings.email + '" required aria-required="true"><input type="text" name="name" placeholder="' + e.strings.fullName + '" aria-label="' + e.strings.fullName + '" maxlength="180"><input type="hidden" name="referrer" value="' + e.referrer + '"><input type="hidden" name="signature" value=""><input type="hidden" name="time" value=""><input type="hidden" name="expires" value=""><input type="submit" value="' + e.strings.submit + '"></form></div><div class="email-capture-confirm hidden"><div class="check-icon-wrapper">';
                return t += this.render("icon_check") || "",
                t += "</div><h1>" + e.confirmation + "</h1></div></div>"
            }
            ,
            t.templates.password = function(e) {
                var t = '<div class="window-wrapper password form"><h1>' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><form action="' + e.action + '" method="post" novalidate><div class="validation-bubble hidden"><div class="validation-bubble-arrow-clipper"><div class="validation-bubble-arrow"></div></div><div class="validation-bubble-message"></div></div><input type="password" name="password" placeholder="' + e.strings.password + '" required aria-required="true" aria-label="' + e.strings.password + '"><input type="submit" value="' + e.strings.watch + '"></form></div>';
                return t
            }
            ,
            t.templates.private_locked = function(e) {
                var t = '<div class="window-wrapper login"><h1>' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><a href="' + e.action + '" class="popup" target="_blank" role="button" aria-label="' + e.strings.logInLabel + '">' + e.strings.logIn + "</a></div>";
                return t
            }
            ,
            t.templates.private_unlocked = function(e) {
                var t = '<div class="window-wrapper form unlocked"><h1>' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><button type="button">' + e.strings.watch + "</button></div>";
                return t
            }
            ,
            t.templates.sidedock = function(e) {
                var t = "";
                return e.vodButton && (t += ' <div class="box" data-vod-expiring="' + e.vodPurchaseInfo.expiring + '" data-vod-purchased="' + e.purchased + '"><button type="button" class="vod-button rounded-box',
                e.purchased && (t += " on"),
                e.vodPurchaseInfo.expiring && (t += " expiring"),
                t += '" data-product-id="' + e.vodPurchaseInfo.product_id + '"><div class="vod-button-inner"><span class="vod-label">' + e.vodDisplayLabel + "</span> ",
                t += this.render("icon_vod") || "",
                t += ' </div></button></div><div class="sidedock-inner">'),
                e.likeButton && (t += ' <div class="box"><label class="rounded-box hidden like-label" role="presentation"><span>' + (e.liked ? e.strings.unlike : e.strings.like) + '</span></label><button type="button" class="like-button rounded-box',
                e.liked && (t += " on"),
                t += '" aria-label="',
                t += e.loggedOut ? "" + e.strings.likeLoggedOut : "" + (e.liked ? e.strings.unlike : e.strings.like),
                t += '" data-label-add="' + e.strings.like + '" data-label-add-logged-out="' + e.strings.likeLoggedOut + '" data-label-remove="' + e.strings.unlike + '"> ',
                t += this.render("icon_heart") || "",
                t += " </button></div>"),
                e.watchLaterButton && (t += ' <div class="box"><label class="rounded-box hidden watch-later-label" role="presentation"><span>' + (e.addedToWatchLater ? e.strings.watchLaterRemove : e.strings.watchLaterAdd) + '</span></label><button type="button" class="watch-later-button rounded-box',
                e.addedToWatchLater && (t += " on"),
                t += '" aria-label="',
                t += e.loggedOut ? "" + e.strings.watchLaterLoggedOut : "" + (e.addedToWatchLater ? e.strings.watchLaterRemove : e.strings.watchLaterAdd),
                t += '" data-label-add="' + e.strings.watchLaterAdd + '" data-label-add-logged-out="' + e.strings.watchLaterAddLoggedOut + '" data-label-remove="' + e.strings.watchLaterRemove + '"> ',
                t += this.render("icon_clock") || "",
                t += " </button></div>"),
                e.collectionsButton && (t += ' <div class="box"><label class="rounded-box hidden collections-label" role="presentation"><span>' + e.strings.collections + '</span></label><button type="button" class="collections-button rounded-box" aria-label="' + e.strings.collections + '"> ',
                t += this.render("icon_collections") || "",
                t += " </button></div>"),
                e.shareButton && (t += ' <div class="box"><label class="rounded-box hidden share-label" role="presentation"><span>' + e.strings.share + '</span></label><button type="button" class="share-button rounded-box" aria-label="' + e.strings.share + '"> ',
                t += this.render("icon_share") || "",
                t += " </button></div>"),
                e.vodButton && (t += " </div>"),
                t += ""
            }
            ,
            t.templates.stats_debug2 = function(e) {
                var t = '<p><span class="stats-debug-label">Clip ID:</span><span class="stats-debug-value stats-debug-clip-id">' + e.clipId + "</span></p>";
                return e.isDash && e.profileId && (t += '<p><span class="stats-debug-label">Profile ID:</span><span class="stats-debug-value stats-debug-profile-id">' + e.profileId + "</span></p>"),
                t += '<p><span class="stats-debug-label">Delivery:</span><span class="stats-debug-value stats-debug-delivery">' + e.delivery + '</span></p><p><span class="stats-debug-label">Playing:</span><span class="stats-debug-value stats-debug-resolution">' + e.resolution + '</span></p><p><span class="stats-debug-label">Embed size:</span><span class="stats-debug-value stats-debug-dimensions">' + e.embedSize + "</span></p>",
                e.isDash && (t += '<p><span class="stats-debug-label">Separate AV:</span><span class="stats-debug-value stats-debug-test-group">' + e.separateAudioVideo + "</span></p>"),
                t += "",
                e.testGroup && (t += '<p><span class="stats-debug-label">Tests:</span><span class="stats-debug-value stats-debug-test-group">' + e.testGroup + "</span></p>"),
                t += "",
                (e.isDash || e.isLive) && (t += '<p><span class="stats-debug-label">Dropped frames:</span><span class="stats-debug-value stats-debug-dropped-frames">' + e.droppedFrames + " / " + e.totalFrames + " - " + e.droppedFramesPercent + "</span></p>"),
                t += "",
                e.isLive && (t += '<p><span class="stats-debug-label">Live Latency:</span><span class="stats-debug-value stats-debug-live-latency">' + e.liveLatency + "</span></p>"),
                t += "",
                (e.isDash || e.isLive) && (t += '<p><span class="stats-debug-label">Bandwidth:</span><span class="stats-debug-value stats-debug-bandwidth">' + e.bandwidthKbps + '</span><span class="stats-debug-bandwidth-minmax"> (<span class="stats-debug-value stats-debug-bandwidth-min">' + e.bandwidthMinKbps + '</span><span class="stats-debug-value stats-debug-bandwidth-max">' + e.bandwidthMaxKbps + '</span>) </span></p><div class="stats-debug-time-series"> ' + e.bandwidthSeriesSvg + "</div>"),
                t += "",
                e.displayBufferOccupancy && (t += '<p><span class="stats-debug-label">Buffer Occupancy:</span><span class="stats-debug-value stats-debug-buffer-percent">' + e.bufferOccupancyPercent + '</span></p><div class="stats-debug-buffer-occupancy"> ' + e.bufferOccupancySvg + "</div>"),
                t += '<button type="button" class="stats-debug-close" aria-label="Close stats debug panel">',
                t += this.render("icon_close") || "",
                t += '</button><input type="text" class="stats-debug-code"><a href="' + (e.openLinkHref ? e.openLinkHref : "javascript:void(0)") + '" class="stats-debug-copy" target="_blank"' + (e.openLinkDisabled ? ' disabled="disabled"' : "") + ">" + e.openLinkText + "</a>"
            }
            ,
            t.templates.threesixty_reminder = function(e) {
                var t = '<div class="intro-wrap text-only"><div> ';
                return e.showArrows && (t += ' <div class="key-wrapper"><div class="key-row"><div class="key"><div class="arrow arrow-top"></div></div></div><div class="key-row"><div class="key"><div class="arrow arrow-left"></div></div><div class="key"><div class="arrow arrow-down"></div></div><div class="key"><div class="arrow arrow-right"></div></div></div></div> '),
                t += " <div>" + e.text + "</div></div></div>"
            }
            ,
            t.templates.title_byline_badge = function(e) {
                var t = "&nbsp;";
                return e.link && (t += '<a tabindex="-1" href="' + e.link + '"',
                e.targetBlank && (t += ' target="_blank"'),
                t += ">"),
                t += ' <span class="byline-badge ' + e.cssClass + '">' + e.cssClass + "</span>",
                e.link && (t += "</a>"),
                t += ""
            }
            ,
            t.templates.title_owner_byline = function(e) {
                var t = "";
                return e.linkToOwner ? (t += '<a href="' + e.ownerLink + '"',
                e.targetBlank && (t += ' target="_blank"'),
                t += ">",
                t += this.escape(e.owner) || "",
                t += "</a>") : (t += '<span class="user">',
                t += this.escape(e.owner) || "",
                t += "</span>"),
                t += ""
            }
            ,
            t.templates.title = function(e) {
                var t = "<header> ";
                return e.badge && (t += ' <div class="badge',
                e.badge.shadow && (t += " shadow"),
                t += '"> ',
                e.badge.link && (t += '<a href="' + e.badge.link + '"',
                e.targetBlank && (t += ' target="_blank"'),
                t += ">"),
                t += ' <img src="' + e.badge.img + '"',
                e.badge.offset && (t += ' style="margin-top:' + e.badge.offset.y + "px;margin-left:" + e.badge.offset.x + 'px"'),
                t += ' width="' + e.badge.width + '" height="' + e.badge.height + '" alt="' + e.badge.name + ' Badge"> ',
                e.badge.link && (t += "</a>"),
                t += " </div> "),
                e.showPortrait && (t += ' <div class="portrait" aria-hidden="true"> ',
                e.linkToOwner && (t += '<a tabindex="-1" href="' + e.ownerLink + '"',
                e.targetBlank && (t += ' target="_blank"'),
                t += ">"),
                t += ' <img src="' + e.portraitImg + '" alt="" width="60" height="60"> ',
                e.linkToOwner && (t += "</a>"),
                t += " </div> "),
                t += ' <div class="headers"> ',
                e.showTitle && (t += " <h1> ",
                e.showTitleLink && (t += '<a href="' + e.titleLink + '"',
                e.targetBlank && (t += ' target="_blank"'),
                t += " data-clip-link>"),
                t += this.escape(e.title) || "",
                e.showTitleLink && (t += "</a>"),
                e.is360 && (t += '<div class="threesix-badge-title">360</div>'),
                t += " </h1> "),
                e.showByline && (t += ' <div class="sub-title"><h2 class="byline-from">' + e.strings.byline + "</h2> ",
                e.is360 && !e.showTitle && (t += ' <div class="threesix-badge-byline">360</div> '),
                t += " </div> "),
                !e.is360 || e.showByline || e.showTitle || (t += ' <div class="threesix-badge-loner">360</div> '),
                t += " </div></header>"
            }
            ,
            e.exports ? e.exports = t : window.Aftershave = t
        }()
    })
      , In = e(function(e) {
        !function(t, n, i) {
            function r() {
                var e = Array.prototype.slice.apply(arguments)
                  , t = e.shift();
                p[t].forEach(function(t) {
                    "function" == typeof t && t.apply(t, e)
                })
            }
            function o(e) {
                return function(t, n) {
                    v.indexOf(t) !== -1 && e.call(this, t, n)
                }
            }
            function a(e) {
                var t = null;
                if ("VIDEO" === e.tagName)
                    t = e;
                else {
                    var n = e.getElementsByTagName("video");
                    n[0] && (t = n[0])
                }
                return t
            }
            function s(e) {
                var t = a(e);
                if (t && t.webkitEnterFullscreen) {
                    try {
                        t.readyState < t.HAVE_METADATA ? (t.addEventListener("loadedmetadata", function e() {
                            t.removeEventListener("loadedmetadata", e, !1),
                            t.webkitEnterFullscreen(),
                            y = !!t.getAttribute("controls")
                        }, !1),
                        t.load()) : (t.webkitEnterFullscreen(),
                        y = !!t.getAttribute("controls")),
                        g = t
                    } catch (t) {
                        return x("not_supported", e)
                    }
                    return !0
                }
                return x(void 0 === f.request ? "not_supported" : "not_enabled", e)
            }
            function u() {
                L.element || (T(),
                l())
            }
            function c() {
                i && "webkitfullscreenchange" === f.change && t.addEventListener("resize", u, !1)
            }
            function l() {
                i && "webkitfullscreenchange" === f.change && t.removeEventListener("resize", u, !1)
            }
            var d = /i(Pad|Phone|Pod)/.test(navigator.userAgent) && parseInt(navigator.userAgent.replace(/^.*OS (\d+)_(\d+).*$/, "$1.$2"), 10) >= 7
              , f = function() {
                var e = n.createElement("video")
                  , t = {
                    request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
                    exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                    enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
                    element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
                    change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                    error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
                }
                  , i = {};
                for (var r in t)
                    for (var o = 0, a = t[r].length; o < a; o++)
                        if (t[r][o]in e || t[r][o]in n || "on" + t[r][o].toLowerCase()in n) {
                            i[r] = t[r][o];
                            break
                        }
                return i
            }()
              , h = {
                ENTER: "enter",
                EXIT: "exit",
                CHANGE: "change",
                ERROR: "error"
            }
              , v = []
              , p = {}
              , m = null;
            Object.keys(h).forEach(function(e) {
                v.push(h[e]),
                p[h[e]] = []
            });
            var g = null
              , y = null
              , _ = function() {}
              , b = []
              , w = !1
              , k = !1
              , S = {
                chrome: navigator.userAgent.indexOf("Chrome") !== -1,
                android: navigator.userAgent.indexOf("Android") !== -1,
                safari: navigator.userAgent.indexOf("Safari") !== -1,
                apple: navigator.userAgent.indexOf("Apple") !== -1
            };
            S.chrome && S.android && (w = parseInt(navigator.userAgent.replace(/^.*Chrome\/(\d+).*$/, "$1"), 10) || !0),
            S.safari && S.apple && !S.chrome && !S.android && (k = parseFloat(navigator.userAgent.replace(/^.*Version\/(\d+)\.(\d+).*$/, "$1.$2")) || !0);
            var E = function(e) {
                var t = b[b.length - 1];
                t && (e !== t.element && e !== g || !t.hasEntered) && ("VIDEO" === e.tagName && (g = e),
                1 === b.length && L.onenter(L.element),
                t.enter.call(t.element, e || t.element),
                t.hasEntered = !0,
                r(h.ENTER, L.element))
            }
              , T = function() {
                !g || y || d || (g.setAttribute("controls", "controls"),
                g.removeAttribute("controls")),
                g = null,
                y = null;
                var e = b.pop();
                e && (e.exit.call(e.element),
                r(h.EXIT, e.element),
                !i && m && 0 === t.scrollY && t.scrollTo(0, m),
                L.element || (b.forEach(function(e) {
                    e.exit.call(e.element),
                    r(h.EXIT, e.element)
                }),
                b = [],
                L.onexit()))
            }
              , x = function(e, t) {
                if (b.length > 0) {
                    var n = b.pop();
                    t = t || n.element,
                    n.error.call(t, e),
                    L.onerror(t, e),
                    r(h.ERROR, t, e)
                }
            }
              , L = {
                request: function(e, r, o, a) {
                    if (e = e || n.body,
                    b.push({
                        element: e,
                        enter: r || _,
                        exit: o || _,
                        error: a || _
                    }),
                    void 0 === f.request)
                        return s(e);
                    if (i && n[f.enabled] === !1)
                        return s(e);
                    if (w !== !1 && w < 32)
                        return s(e);
                    if (i && void 0 === f.enabled)
                        return f.enabled = "webkitFullscreenEnabled",
                        e[f.request](),
                        void setTimeout(function() {
                            n[f.element] ? n[f.enabled] = !0 : (n[f.enabled] = !1,
                            s(e))
                        }, 250);
                    try {
                        !i && t && (m = t.scrollY),
                        e[f.request](),
                        k >= 5.1 && setTimeout(function() {
                            n[f.element] || x(i ? "not_enabled" : "not_allowed", e)
                        }, 100)
                    } catch (t) {
                        x("not_enabled", e)
                    }
                },
                exit: function() {
                    l(),
                    !n[f.exit] && L.element ? L.element[f.exit]() : n[f.exit]()
                },
                toggle: function(e, t, n, i) {
                    L.element ? L.exit() : L.request(e, t, n, i)
                },
                videoEnabled: function(e) {
                    if (L.enabled)
                        return !0;
                    e = e || n.body;
                    var t = a(e);
                    return !(!t || void 0 === t.webkitSupportsFullscreen) && (t.readyState < t.HAVE_METADATA ? "maybe" : t.webkitSupportsFullscreen)
                },
                on: o(function(e, t) {
                    p[e].push(t)
                }),
                off: o(function(e, t) {
                    var n = p[e].indexOf(t);
                    n > -1 && p[e].splice(n, 1)
                }),
                onenter: _,
                onexit: _,
                onchange: _,
                onerror: _
            };
            try {
                Object.defineProperties(L, {
                    element: {
                        enumerable: !0,
                        get: function() {
                            return g && g.webkitDisplayingFullscreen ? g : n[f.element] || null
                        }
                    },
                    enabled: {
                        enumerable: !0,
                        get: function() {
                            return "webkitCancelFullScreen" === f.exit && !i || !(w !== !1 && w < 32) && (n[f.enabled] || !1)
                        }
                    }
                })
            } catch (e) {
                L.element = null,
                L.enabled = !1
            }
            f.change && n.addEventListener(f.change, function(e) {
                if (L.onchange(L.element),
                r(h.CHANGE, L.element),
                L.element) {
                    var t = b[b.length - 2];
                    t && t.element === L.element ? T() : (E(L.element),
                    c())
                } else
                    T()
            }, !1),
            n.addEventListener("webkitbeginfullscreen", function(e) {
                var t = !0;
                if (b.length > 0)
                    for (var n = 0, i = b.length; n < i; n++) {
                        var o = a(b[n].element);
                        if (o === e.srcElement) {
                            t = !1;
                            break
                        }
                    }
                t && b.push({
                    element: e.srcElement,
                    enter: _,
                    exit: _,
                    error: _
                }),
                L.onchange(e.srcElement),
                r(h.CHANGE, L.srcElement),
                E(e.srcElement)
            }, !0),
            n.addEventListener("webkitendfullscreen", function(e) {
                L.onchange(e.srcElement),
                r(h.CHANGE, e.srcElement),
                T(e.srcElement)
            }, !0),
            f.error && n.addEventListener(f.error, function(e) {
                x("not_allowed")
            }, !1),
            e.exports ? e.exports = L : t.BigScreen = L
        }(window, document, self !== top)
    })
      , Fn = navigator.userAgent.toLowerCase()
      , Dn = !!P("android") && (parseFloat(Fn.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0)
      , Bn = window.devicePixelRatio || 1
      , qn = !(!P("windows phone") && !P("iemobile")) && (parseFloat(Fn.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || !0)
      , Nn = !!P("msie") && parseFloat(Fn.replace(/^.*msie (\d+).*$/, "$1"))
      , jn = !!P("trident") && parseFloat(Fn.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4
      , Vn = !!(P("ipad;") || P("iphone;") || P("ipod touch;")) && parseFloat(Fn.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2"))
      , Un = {
        airPlay: "WebKitPlaybackTargetAvailabilityEvent"in window,
        android: Dn,
        iOS: Vn,
        mobileAndroid: Dn && P("mobile"),
        browser: {
            bb10: P("bb10"),
            chrome: P("chrome"),
            firefox: P("firefox"),
            ie: Nn || jn,
            edge: P("edge"),
            opera: P("opera"),
            safari: P("safari") && P("apple") && !P("chrome") && !P("android")
        },
        devicePixelRatio: Bn,
        flash: C(),
        iPhone: P("iphone;") || P("ipod touch;") || P("ipod;"),
        iPad: P("ipad;"),
        iPadNonRetina: P("ipad;") && Bn < 2,
        mac: P("mac os"),
        pointerEvents: window.navigator.pointerEnabled || window.navigator.msPointerEnabled || !1,
        svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        touch: "ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch || P("windows phone") || window.navigator.maxTouchPoints > 1 || window.navigator.msMaxTouchPoints || !1,
        transformProperty: A("transform"),
        transitionProperty: A("transition"),
        windowsPhone: qn
    };
    if (Un.spatialPlayback = !(Un.browser.safari || Un.iOS || Un.iPad || Un.browser.ie),
    Un.stereoscopic = Un.spatialPlayback && Un.mobileAndroid,
    function() {
        for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
            var n = e[t];
            window.requestAnimationFrame = window[n + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]
        }
        !/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) && window.requestAnimationFrame && window.cancelAnimationFrame || (window.requestAnimationFrame = function(e) {
            return setTimeout(e, 0)
        }
        ,
        window.cancelAnimationFrame = clearTimeout)
    }(),
    Number.isInteger || (Number.isInteger = function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }
    ),
    !Object.setPrototypeOf && !{}.__proto__) {
        var Hn = Object.getPrototypeOf;
        Object.getPrototypeOf = function(e) {
            return e.__proto__ ? e.__proto__ : Hn.call(Object, e)
        }
    }
    if ("undefined" != typeof DOMTokenList) {
        var Wn = function() {
            var e = document.createElement("div");
            return e.classList.toggle("test-class", !1),
            !e.classList.contains("test-class")
        }();
        Wn || !function() {
            var e = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(t, n) {
                return n === !0 ? void this.add(t) : n === !1 ? void this.remove(t) : void e.call(this, t)
            }
        }()
    }
    "function" != typeof Object.assign && !function() {
        Object.assign = function(e) {
            if (void 0 === e || null === e)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (void 0 !== i && null !== i)
                    for (var r in i)
                        i.hasOwnProperty(r) && (t[r] = i[r])
            }
            return t
        }
    }(),
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(e) {
            for (var t = Object(this), n = t.length >>> 0, i = arguments[1], r = 0; r < n; ) {
                var o = t[r];
                if (e.call(i, o, r, t))
                    return o;
                r++
            }
        }
    }),
    Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(e) {
            for (var t = Object(this), n = t.length >>> 0, i = arguments[1], r = 0; r < n; ) {
                var o = t[r];
                if (e.call(i, o, r, t))
                    return r;
                r++
            }
            return -1
        }
    });
    var zn = {
        isObject: F,
        isError: D
    }
      , Kn = zn
      , Gn = {
        collectWindowErrors: !0,
        debug: !1
    }
      , Xn = "undefined" != typeof window ? window : "undefined" != typeof tn ? tn : "undefined" != typeof self ? self : {}
      , Yn = [].slice
      , $n = "?"
      , Qn = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
    Gn.report = function() {
        function e(e) {
            o(),
            d.push(e)
        }
        function t(e) {
            for (var t = d.length - 1; t >= 0; --t)
                d[t] === e && d.splice(t, 1)
        }
        function n() {
            a(),
            d = []
        }
        function i(e, t) {
            var n = null;
            if (!t || Gn.collectWindowErrors) {
                for (var i in d)
                    if (d.hasOwnProperty(i))
                        try {
                            d[i].apply(null, [e].concat(Yn.call(arguments, 2)))
                        } catch (e) {
                            n = e
                        }
                if (n)
                    throw n
            }
        }
        function r(e, t, n, r, o) {
            var a = null;
            if (v)
                Gn.computeStackTrace.augmentStackTraceWithInitialElement(v, t, n, e),
                s();
            else if (o && Kn.isError(o))
                a = Gn.computeStackTrace(o),
                i(a, !0);
            else {
                var u, l = {
                    url: t,
                    line: n,
                    column: r
                }, d = void 0, f = e;
                if ("[object String]" === {}.toString.call(e)) {
                    var u = e.match(Qn);
                    u && (d = u[1],
                    f = u[2])
                }
                l.func = $n,
                a = {
                    name: d,
                    message: f,
                    url: B(),
                    stack: [l]
                },
                i(a, !0)
            }
            return !!c && c.apply(this, arguments)
        }
        function o() {
            l || (c = Xn.onerror,
            Xn.onerror = r,
            l = !0)
        }
        function a() {
            l && (Xn.onerror = c,
            l = !1,
            c = void 0)
        }
        function s() {
            var e = v
              , t = f;
            f = null,
            v = null,
            h = null,
            i.apply(null, [e, !1].concat(t))
        }
        function u(e, t) {
            var n = Yn.call(arguments, 1);
            if (v) {
                if (h === e)
                    return;
                s()
            }
            var i = Gn.computeStackTrace(e);
            if (v = i,
            h = e,
            f = n,
            setTimeout(function() {
                h === e && s()
            }, i.incomplete ? 2e3 : 0),
            t !== !1)
                throw e
        }
        var c, l, d = [], f = null, h = null, v = null;
        return u.subscribe = e,
        u.unsubscribe = t,
        u.uninstall = n,
        u
    }(),
    Gn.computeStackTrace = function() {
        function e(e) {
            if ("undefined" != typeof e.stack && e.stack) {
                for (var t, n, i, r = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, o = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i, a = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, s = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, u = /\((\S*)(?::(\d+))(?::(\d+))\)/, c = e.stack.split("\n"), l = [], d = (/^(.*) is undefined$/.exec(e.message),
                0), f = c.length; d < f; ++d) {
                    if (n = r.exec(c[d])) {
                        var h = n[2] && 0 === n[2].indexOf("native")
                          , v = n[2] && 0 === n[2].indexOf("eval");
                        v && (t = u.exec(n[2])) && (n[2] = t[1],
                        n[3] = t[2],
                        n[4] = t[3]),
                        i = {
                            url: h ? null : n[2],
                            func: n[1] || $n,
                            args: h ? [n[2]] : [],
                            line: n[3] ? +n[3] : null,
                            column: n[4] ? +n[4] : null
                        }
                    } else if (n = a.exec(c[d]))
                        i = {
                            url: n[2],
                            func: n[1] || $n,
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        };
                    else {
                        if (!(n = o.exec(c[d])))
                            continue;
                        var v = n[3] && n[3].indexOf(" > eval") > -1;
                        v && (t = s.exec(n[3])) ? (n[3] = t[1],
                        n[4] = t[2],
                        n[5] = null) : 0 !== d || n[5] || "undefined" == typeof e.columnNumber || (l[0].column = e.columnNumber + 1),
                        i = {
                            url: n[3],
                            func: n[1] || $n,
                            args: n[2] ? n[2].split(",") : [],
                            line: n[4] ? +n[4] : null,
                            column: n[5] ? +n[5] : null
                        }
                    }
                    !i.func && i.line && (i.func = $n),
                    l.push(i)
                }
                return l.length ? {
                    name: e.name,
                    message: e.message,
                    url: B(),
                    stack: l
                } : null
            }
        }
        function t(e, t, n, i) {
            var r = {
                url: t,
                line: n
            };
            if (r.url && r.line) {
                if (e.incomplete = !1,
                r.func || (r.func = $n),
                e.stack.length > 0 && e.stack[0].url === r.url) {
                    if (e.stack[0].line === r.line)
                        return !1;
                    if (!e.stack[0].line && e.stack[0].func === r.func)
                        return e.stack[0].line = r.line,
                        !1
                }
                return e.stack.unshift(r),
                e.partial = !0,
                !0
            }
            return e.incomplete = !0,
            !1
        }
        function n(e, r) {
            for (var o, a, s = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, u = [], c = {}, l = !1, d = n.caller; d && !l; d = d.caller)
                if (d !== i && d !== Gn.report) {
                    if (a = {
                        url: null,
                        func: $n,
                        line: null,
                        column: null
                    },
                    d.name ? a.func = d.name : (o = s.exec(d.toString())) && (a.func = o[1]),
                    "undefined" == typeof a.func)
                        try {
                            a.func = o.input.substring(0, o.input.indexOf("{"))
                        } catch (e) {}
                    c["" + d] ? l = !0 : c["" + d] = !0,
                    u.push(a)
                }
            r && u.splice(0, r);
            var f = {
                name: e.name,
                message: e.message,
                url: B(),
                stack: u
            };
            return t(f, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description),
            f
        }
        function i(t, i) {
            var r = null;
            i = null == i ? 0 : +i;
            try {
                if (r = e(t))
                    return r
            } catch (e) {
                if (Gn.debug)
                    throw e
            }
            try {
                if (r = n(t, i + 1))
                    return r
            } catch (e) {
                if (Gn.debug)
                    throw e
            }
            return {
                name: t.name,
                message: t.message,
                url: B()
            }
        }
        return i.augmentStackTraceWithInitialElement = t,
        i.computeStackTraceFromStackProp = e,
        i
    }();
    var Jn = Gn
      , Zn = e(function(e, t) {
        function n(e, t) {
            for (var n = 0; n < e.length; ++n)
                if (e[n] === t)
                    return n;
            return -1
        }
        function i(e, t, n, i) {
            return JSON.stringify(e, r(t, i), n)
        }
        function r(e, t) {
            var i = []
              , r = [];
            return null == t && (t = function(e, t) {
                return i[0] === t ? "[Circular ~]" : "[Circular ~." + r.slice(0, n(i, t)).join(".") + "]"
            }
            ),
            function(o, a) {
                if (i.length > 0) {
                    var s = n(i, this);
                    ~s ? i.splice(s + 1) : i.push(this),
                    ~s ? r.splice(s, 1 / 0, o) : r.push(o),
                    ~n(i, a) && (a = t.call(this, o, a))
                } else
                    i.push(a);
                return null == e ? a : e.call(this, o, a)
            }
        }
        t = e.exports = i,
        t.getSerialize = r
    });
    q.prototype = new Error,
    q.prototype.constructor = q;
    var ei = q
      , ti = function(e, t, n) {
        var i = e[t]
          , r = e;
        if (t in e) {
            var o = "warn" === t ? "warning" : t;
            e[t] = function() {
                var e = [].slice.call(arguments)
                  , t = "" + e.join(" ")
                  , a = {
                    level: o,
                    logger: "console",
                    extra: {
                        arguments: e
                    }
                };
                n && n(t, a),
                i && Function.prototype.apply.call(i, r, e)
            }
        }
    }
      , ni = {
        wrapMethod: ti
    }
      , ii = Jn
      , ri = Zn
      , oi = ei
      , ai = zn
      , si = ai.isError
      , ui = ai.isObject
      , ci = ni.wrapMethod
      , li = "source protocol user pass host port path".split(" ")
      , di = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/
      , fi = "undefined" != typeof window ? window : "undefined" != typeof tn ? tn : "undefined" != typeof self ? self : {}
      , hi = fi.document
      , vi = fi.navigator;
    j.prototype = {
        VERSION: "3.14.2",
        debug: !1,
        TraceKit: ii,
        config: function(e, t) {
            var n = this;
            if (n._globalServer)
                return this._logDebug("error", "Error: Raven has already been configured"),
                n;
            if (!e)
                return n;
            var i = n._globalOptions;
            t && z(t, function(e, t) {
                "tags" === e || "extra" === e || "user" === e ? n._globalContext[e] = t : i[e] = t
            }),
            n.setDSN(e),
            i.ignoreErrors.push(/^Script error\.?$/),
            i.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),
            i.ignoreErrors = Y(i.ignoreErrors),
            i.ignoreUrls = !!i.ignoreUrls.length && Y(i.ignoreUrls),
            i.whitelistUrls = !!i.whitelistUrls.length && Y(i.whitelistUrls),
            i.includePaths = Y(i.includePaths),
            i.maxBreadcrumbs = Math.max(0, Math.min(i.maxBreadcrumbs || 100, 100));
            var r = {
                xhr: !0,
                console: !0,
                dom: !0,
                location: !0
            }
              , o = i.autoBreadcrumbs;
            return "[object Object]" === {}.toString.call(o) ? o = K(r, o) : o !== !1 && (o = r),
            i.autoBreadcrumbs = o,
            ii.collectWindowErrors = !!i.collectWindowErrors,
            n
        },
        install: function() {
            var e = this;
            return e.isSetup() && !e._isRavenInstalled && (ii.report.subscribe(function() {
                e._handleOnErrorStackInfo.apply(e, arguments)
            }),
            e._instrumentTryCatch(),
            e._globalOptions.autoBreadcrumbs && e._instrumentBreadcrumbs(),
            e._drainPlugins(),
            e._isRavenInstalled = !0),
            Error.stackTraceLimit = e._globalOptions.stackTraceLimit,
            this
        },
        setDSN: function(e) {
            var t = this
              , n = t._parseDSN(e)
              , i = n.path.lastIndexOf("/")
              , r = n.path.substr(1, i);
            t._dsn = e,
            t._globalKey = n.user,
            t._globalSecret = n.pass && n.pass.substr(1),
            t._globalProject = n.path.substr(i + 1),
            t._globalServer = t._getGlobalServer(n),
            t._globalEndpoint = t._globalServer + "/" + r + "api/" + t._globalProject + "/store/",
            this._resetBackoff()
        },
        context: function(e, t, n) {
            return U(e) && (n = t || [],
            t = e,
            e = void 0),
            this.wrap(e, t).apply(this, n)
        },
        wrap: function(e, t, n) {
            function i() {
                var i = []
                  , o = arguments.length
                  , a = !e || e && e.deep !== !1;
                for (n && U(n) && n.apply(this, arguments); o--; )
                    i[o] = a ? r.wrap(e, arguments[o]) : arguments[o];
                try {
                    return t.apply(this, i)
                } catch (t) {
                    throw r._ignoreNextOnError(),
                    r.captureException(t, e),
                    t
                }
            }
            var r = this;
            if (V(t) && !U(e))
                return e;
            if (U(e) && (t = e,
            e = void 0),
            !U(t))
                return t;
            try {
                if (t.__raven__)
                    return t;
                if (t.__raven_wrapper__)
                    return t.__raven_wrapper__
            } catch (e) {
                return t
            }
            for (var o in t)
                X(t, o) && (i[o] = t[o]);
            return i.prototype = t.prototype,
            t.__raven_wrapper__ = i,
            i.__raven__ = !0,
            i.__inner__ = t,
            i
        },
        uninstall: function() {
            return ii.report.uninstall(),
            this._restoreBuiltIns(),
            Error.stackTraceLimit = this._originalErrorStackTraceLimit,
            this._isRavenInstalled = !1,
            this
        },
        captureException: function(e, t) {
            if (!si(e))
                return this.captureMessage(e, K({
                    trimHeadFrames: 1,
                    stacktrace: !0
                }, t));
            this._lastCapturedException = e;
            try {
                var n = ii.computeStackTrace(e);
                this._handleStackInfo(n, t)
            } catch (t) {
                if (e !== t)
                    throw t
            }
            return this
        },
        captureMessage: function(e, t) {
            if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) {
                t = t || {};
                var n = K({
                    message: e + ""
                }, t);
                if (this._globalOptions.stacktrace || t && t.stacktrace) {
                    var i;
                    try {
                        throw new Error(e)
                    } catch (e) {
                        i = e
                    }
                    i.name = null,
                    t = K({
                        fingerprint: e,
                        trimHeadFrames: (t.trimHeadFrames || 0) + 1
                    }, t);
                    var r = ii.computeStackTrace(i)
                      , o = this._prepareFrames(r, t);
                    n.stacktrace = {
                        frames: o.reverse()
                    }
                }
                return this._send(n),
                this
            }
        },
        captureBreadcrumb: function(e) {
            var t = K({
                timestamp: N() / 1e3
            }, e);
            if (U(this._globalOptions.breadcrumbCallback)) {
                var n = this._globalOptions.breadcrumbCallback(t);
                if (ui(n) && !W(n))
                    t = n;
                else if (n === !1)
                    return this
            }
            return this._breadcrumbs.push(t),
            this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(),
            this
        },
        addPlugin: function(e) {
            var t = [].slice.call(arguments, 1);
            return this._plugins.push([e, t]),
            this._isRavenInstalled && this._drainPlugins(),
            this
        },
        setUserContext: function(e) {
            return this._globalContext.user = e,
            this
        },
        setExtraContext: function(e) {
            return this._mergeContext("extra", e),
            this
        },
        setTagsContext: function(e) {
            return this._mergeContext("tags", e),
            this
        },
        clearContext: function() {
            return this._globalContext = {},
            this
        },
        getContext: function() {
            return JSON.parse(ri(this._globalContext))
        },
        setEnvironment: function(e) {
            return this._globalOptions.environment = e,
            this
        },
        setRelease: function(e) {
            return this._globalOptions.release = e,
            this
        },
        setDataCallback: function(e) {
            var t = this._globalOptions.dataCallback;
            return this._globalOptions.dataCallback = U(e) ? function(n) {
                return e(n, t)
            }
            : e,
            this
        },
        setBreadcrumbCallback: function(e) {
            var t = this._globalOptions.breadcrumbCallback;
            return this._globalOptions.breadcrumbCallback = U(e) ? function(n) {
                return e(n, t)
            }
            : e,
            this
        },
        setShouldSendCallback: function(e) {
            var t = this._globalOptions.shouldSendCallback;
            return this._globalOptions.shouldSendCallback = U(e) ? function(n) {
                return e(n, t)
            }
            : e,
            this
        },
        setTransport: function(e) {
            return this._globalOptions.transport = e,
            this
        },
        lastException: function() {
            return this._lastCapturedException
        },
        lastEventId: function() {
            return this._lastEventId
        },
        isSetup: function() {
            return !!this._hasJSON && (!!this._globalServer || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0,
            this._logDebug("error", "Error: Raven has not been configured.")),
            !1))
        },
        afterLoad: function() {
            var e = fi.RavenConfig;
            e && this.config(e.dsn, e.config).install()
        },
        showReportDialog: function(e) {
            if (hi) {
                e = e || {};
                var t = e.eventId || this.lastEventId();
                if (!t)
                    throw new oi("Missing eventId");
                var n = e.dsn || this._dsn;
                if (!n)
                    throw new oi("Missing DSN");
                var i = encodeURIComponent
                  , r = "";
                r += "?eventId=" + i(t),
                r += "&dsn=" + i(n);
                var o = e.user || this._globalContext.user;
                o && (o.name && (r += "&name=" + i(o.name)),
                o.email && (r += "&email=" + i(o.email)));
                var a = this._getGlobalServer(this._parseDSN(n))
                  , s = hi.createElement("script");
                s.async = !0,
                s.src = a + "/api/embed/error-page/" + r,
                (hi.head || hi.body).appendChild(s)
            }
        },
        _ignoreNextOnError: function() {
            var e = this;
            this._ignoreOnError += 1,
            setTimeout(function() {
                e._ignoreOnError -= 1
            })
        },
        _triggerEvent: function(e, t) {
            var n, i;
            if (this._hasDocument) {
                t = t || {},
                e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1),
                hi.createEvent ? (n = hi.createEvent("HTMLEvents"),
                n.initEvent(e, !0, !0)) : (n = hi.createEventObject(),
                n.eventType = e);
                for (i in t)
                    X(t, i) && (n[i] = t[i]);
                if (hi.createEvent)
                    hi.dispatchEvent(n);
                else
                    try {
                        hi.fireEvent("on" + n.eventType.toLowerCase(), n)
                    } catch (e) {}
            }
        },
        _breadcrumbEventHandler: function(e) {
            var t = this;
            return function(n) {
                if (t._keypressTimeout = null,
                t._lastCapturedEvent !== n) {
                    t._lastCapturedEvent = n;
                    var i;
                    try {
                        i = Z(n.target)
                    } catch (e) {
                        i = "<unknown>"
                    }
                    t.captureBreadcrumb({
                        category: "ui." + e,
                        message: i
                    })
                }
            }
        },
        _keypressEventHandler: function() {
            var e = this
              , t = 1e3;
            return function(n) {
                var i;
                try {
                    i = n.target
                } catch (e) {
                    return
                }
                var r = i && i.tagName;
                if (r && ("INPUT" === r || "TEXTAREA" === r || i.isContentEditable)) {
                    var o = e._keypressTimeout;
                    o || e._breadcrumbEventHandler("input")(n),
                    clearTimeout(o),
                    e._keypressTimeout = setTimeout(function() {
                        e._keypressTimeout = null
                    }, t)
                }
            }
        },
        _captureUrlChange: function(e, t) {
            var n = Q(this._location.href)
              , i = Q(t)
              , r = Q(e);
            this._lastHref = t,
            n.protocol === i.protocol && n.host === i.host && (t = i.relative),
            n.protocol === r.protocol && n.host === r.host && (e = r.relative),
            this.captureBreadcrumb({
                category: "navigation",
                data: {
                    to: t,
                    from: e
                }
            })
        },
        _instrumentTryCatch: function() {
            function e(e) {
                return function(t, i) {
                    for (var r = new Array(arguments.length), o = 0; o < r.length; ++o)
                        r[o] = arguments[o];
                    var a = r[0];
                    return U(a) && (r[0] = n.wrap(a)),
                    e.apply ? e.apply(this, r) : e(r[0], r[1])
                }
            }
            function t(e) {
                var t = fi[e] && fi[e].prototype;
                t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (re(t, "addEventListener", function(t) {
                    return function(i, o, a, s) {
                        try {
                            o && o.handleEvent && (o.handleEvent = n.wrap(o.handleEvent))
                        } catch (e) {}
                        var u, c, l;
                        return r && r.dom && ("EventTarget" === e || "Node" === e) && (c = n._breadcrumbEventHandler("click"),
                        l = n._keypressEventHandler(),
                        u = function(e) {
                            if (e) {
                                var t;
                                try {
                                    t = e.type
                                } catch (e) {
                                    return
                                }
                                return "click" === t ? c(e) : "keypress" === t ? l(e) : void 0
                            }
                        }
                        ),
                        t.call(this, i, n.wrap(o, void 0, u), a, s)
                    }
                }, i),
                re(t, "removeEventListener", function(e) {
                    return function(t, n, i, r) {
                        try {
                            n = n && (n.__raven_wrapper__ ? n.__raven_wrapper__ : n)
                        } catch (e) {}
                        return e.call(this, t, n, i, r)
                    }
                }, i))
            }
            var n = this
              , i = n._wrappedBuiltIns
              , r = this._globalOptions.autoBreadcrumbs;
            re(fi, "setTimeout", e, i),
            re(fi, "setInterval", e, i),
            fi.requestAnimationFrame && re(fi, "requestAnimationFrame", function(e) {
                return function(t) {
                    return e(n.wrap(t))
                }
            }, i);
            for (var o = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], a = 0; a < o.length; a++)
                t(o[a])
        },
        _instrumentBreadcrumbs: function() {
            function e(e, n) {
                e in n && U(n[e]) && re(n, e, function(e) {
                    return t.wrap(e)
                })
            }
            var t = this
              , n = this._globalOptions.autoBreadcrumbs
              , i = t._wrappedBuiltIns;
            if (n.xhr && "XMLHttpRequest"in fi) {
                var r = XMLHttpRequest.prototype;
                re(r, "open", function(e) {
                    return function(n, i) {
                        return H(i) && i.indexOf(t._globalKey) === -1 && (this.__raven_xhr = {
                            method: n,
                            url: i,
                            status_code: null
                        }),
                        e.apply(this, arguments)
                    }
                }, i),
                re(r, "send", function(n) {
                    return function(i) {
                        function r() {
                            if (o.__raven_xhr && (1 === o.readyState || 4 === o.readyState)) {
                                try {
                                    o.__raven_xhr.status_code = o.status
                                } catch (e) {}
                                t.captureBreadcrumb({
                                    type: "http",
                                    category: "xhr",
                                    data: o.__raven_xhr
                                })
                            }
                        }
                        for (var o = this, a = ["onload", "onerror", "onprogress"], s = 0; s < a.length; s++)
                            e(a[s], o);
                        return "onreadystatechange"in o && U(o.onreadystatechange) ? re(o, "onreadystatechange", function(e) {
                            return t.wrap(e, void 0, r)
                        }) : o.onreadystatechange = r,
                        n.apply(this, arguments)
                    }
                }, i)
            }
            n.xhr && "fetch"in fi && re(fi, "fetch", function(e) {
                return function(n, i) {
                    for (var r = new Array(arguments.length), o = 0; o < r.length; ++o)
                        r[o] = arguments[o];
                    var a, s = r[0], u = "GET";
                    "string" == typeof s ? a = s : (a = s.url,
                    s.method && (u = s.method)),
                    r[1] && r[1].method && (u = r[1].method);
                    var c = {
                        method: u,
                        url: a,
                        status_code: null
                    };
                    return t.captureBreadcrumb({
                        type: "http",
                        category: "fetch",
                        data: c
                    }),
                    e.apply(this, r).then(function(e) {
                        return c.status_code = e.status,
                        e
                    })
                }
            }, i),
            n.dom && this._hasDocument && (hi.addEventListener ? (hi.addEventListener("click", t._breadcrumbEventHandler("click"), !1),
            hi.addEventListener("keypress", t._keypressEventHandler(), !1)) : (hi.attachEvent("onclick", t._breadcrumbEventHandler("click")),
            hi.attachEvent("onkeypress", t._keypressEventHandler())));
            var o = fi.chrome
              , a = o && o.app && o.app.runtime
              , s = !a && fi.history && history.pushState;
            if (n.location && s) {
                var u = fi.onpopstate;
                fi.onpopstate = function() {
                    var e = t._location.href;
                    if (t._captureUrlChange(t._lastHref, e),
                    u)
                        return u.apply(this, arguments)
                }
                ,
                re(history, "pushState", function(e) {
                    return function() {
                        var n = arguments.length > 2 ? arguments[2] : void 0;
                        return n && t._captureUrlChange(t._lastHref, n + ""),
                        e.apply(this, arguments)
                    }
                }, i)
            }
            if (n.console && "console"in fi && console.log) {
                var c = function(e, n) {
                    t.captureBreadcrumb({
                        message: e,
                        level: n.level,
                        category: "console"
                    })
                };
                z(["debug", "info", "warn", "error", "log"], function(e, t) {
                    ci(console, t, c)
                })
            }
        },
        _restoreBuiltIns: function() {
            for (var e; this._wrappedBuiltIns.length; ) {
                e = this._wrappedBuiltIns.shift();
                var t = e[0]
                  , n = e[1]
                  , i = e[2];
                t[n] = i
            }
        },
        _drainPlugins: function() {
            var e = this;
            z(this._plugins, function(t, n) {
                var i = n[0]
                  , r = n[1];
                i.apply(e, [e].concat(r))
            })
        },
        _parseDSN: function(e) {
            var t = di.exec(e)
              , n = {}
              , i = 7;
            try {
                for (; i--; )
                    n[li[i]] = t[i] || ""
            } catch (t) {
                throw new oi("Invalid DSN: " + e)
            }
            if (n.pass && !this._globalOptions.allowSecretKey)
                throw new oi("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
            return n
        },
        _getGlobalServer: function(e) {
            var t = "//" + e.host + (e.port ? ":" + e.port : "");
            return e.protocol && (t = e.protocol + ":" + t),
            t
        },
        _handleOnErrorStackInfo: function() {
            this._ignoreOnError || this._handleStackInfo.apply(this, arguments)
        },
        _handleStackInfo: function(e, t) {
            var n = this._prepareFrames(e, t);
            this._triggerEvent("handle", {
                stackInfo: e,
                options: t
            }),
            this._processException(e.name, e.message, e.url, e.lineno, n, t)
        },
        _prepareFrames: function(e, t) {
            var n = this
              , i = [];
            if (e.stack && e.stack.length && (z(e.stack, function(e, t) {
                var r = n._normalizeFrame(t);
                r && i.push(r)
            }),
            t && t.trimHeadFrames))
                for (var r = 0; r < t.trimHeadFrames && r < i.length; r++)
                    i[r].in_app = !1;
            return i = i.slice(0, this._globalOptions.stackTraceLimit)
        },
        _normalizeFrame: function(e) {
            if (e.url) {
                var t = {
                    filename: e.url,
                    lineno: e.line,
                    colno: e.column,
                    function: e.func || "?"
                };
                return t.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(t.filename) || /(Raven|TraceKit)\./.test(t.function) || /raven\.(min\.)?js$/.test(t.filename)),
                t
            }
        },
        _processException: function(e, t, n, i, r, o) {
            var a;
            if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t)) && (t += "",
            r && r.length ? (n = r[0].filename || n,
            r.reverse(),
            a = {
                frames: r
            }) : n && (a = {
                frames: [{
                    filename: n,
                    lineno: i,
                    in_app: !0
                }]
            }),
            (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(n)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(n)))) {
                var s = K({
                    exception: {
                        values: [{
                            type: e,
                            value: t,
                            stacktrace: a
                        }]
                    },
                    culprit: n
                }, o);
                this._send(s)
            }
        },
        _trimPacket: function(e) {
            var t = this._globalOptions.maxMessageLength;
            if (e.message && (e.message = G(e.message, t)),
            e.exception) {
                var n = e.exception.values[0];
                n.value = G(n.value, t)
            }
            var i = e.request;
            return i && (i.url && (i.url = G(i.url, this._globalOptions.maxUrlLength)),
            i.Referer && (i.Referer = G(i.Referer, this._globalOptions.maxUrlLength))),
            e.breadcrumbs && e.breadcrumbs.values && this._trimBreadcrumbs(e.breadcrumbs),
            e
        },
        _trimBreadcrumbs: function(e) {
            for (var t, n, i, r = ["to", "from", "url"], o = 0; o < e.values.length; ++o)
                if (n = e.values[o],
                n.hasOwnProperty("data") && ui(n.data)) {
                    i = n.data;
                    for (var a = 0; a < r.length; ++a)
                        t = r[a],
                        i.hasOwnProperty(t) && (i[t] = G(i[t], this._globalOptions.maxUrlLength))
                }
        },
        _getHttpData: function() {
            if (this._hasNavigator || this._hasDocument) {
                var e = {};
                return this._hasNavigator && vi.userAgent && (e.headers = {
                    "User-Agent": navigator.userAgent
                }),
                this._hasDocument && (hi.location && hi.location.href && (e.url = hi.location.href),
                hi.referrer && (e.headers || (e.headers = {}),
                e.headers.Referer = hi.referrer)),
                e
            }
        },
        _resetBackoff: function() {
            this._backoffDuration = 0,
            this._backoffStart = null
        },
        _shouldBackoff: function() {
            return this._backoffDuration && N() - this._backoffStart < this._backoffDuration
        },
        _isRepeatData: function(e) {
            var t = this._lastData;
            return !(!t || e.message !== t.message || e.culprit !== t.culprit) && (e.stacktrace || t.stacktrace ? ie(e.stacktrace, t.stacktrace) : !e.exception && !t.exception || ne(e.exception, t.exception))
        },
        _setBackoffState: function(e) {
            if (!this._shouldBackoff()) {
                var t = e.status;
                if (400 === t || 401 === t || 429 === t) {
                    var n;
                    try {
                        n = e.getResponseHeader("Retry-After"),
                        n = 1e3 * parseInt(n, 10)
                    } catch (e) {}
                    this._backoffDuration = n ? n : 2 * this._backoffDuration || 1e3,
                    this._backoffStart = N()
                }
            }
        },
        _send: function(e) {
            var t = this._globalOptions
              , n = {
                project: this._globalProject,
                logger: t.logger,
                platform: "javascript"
            }
              , i = this._getHttpData();
            if (i && (n.request = i),
            e.trimHeadFrames && delete e.trimHeadFrames,
            e = K(n, e),
            e.tags = K(K({}, this._globalContext.tags), e.tags),
            e.extra = K(K({}, this._globalContext.extra), e.extra),
            e.extra["session:duration"] = N() - this._startTime,
            this._breadcrumbs && this._breadcrumbs.length > 0 && (e.breadcrumbs = {
                values: [].slice.call(this._breadcrumbs, 0)
            }),
            W(e.tags) && delete e.tags,
            this._globalContext.user && (e.user = this._globalContext.user),
            t.environment && (e.environment = t.environment),
            t.release && (e.release = t.release),
            t.serverName && (e.server_name = t.serverName),
            U(t.dataCallback) && (e = t.dataCallback(e) || e),
            e && !W(e) && (!U(t.shouldSendCallback) || t.shouldSendCallback(e)))
                return this._shouldBackoff() ? void this._logDebug("warn", "Raven dropped error due to backoff: ", e) : void ("number" == typeof t.sampleRate ? Math.random() < t.sampleRate && this._sendProcessedPayload(e) : this._sendProcessedPayload(e))
        },
        _getUuid: function() {
            return J()
        },
        _sendProcessedPayload: function(e, t) {
            var n = this
              , i = this._globalOptions;
            if (this.isSetup()) {
                if (this._lastEventId = e.event_id || (e.event_id = this._getUuid()),
                e = this._trimPacket(e),
                !this._globalOptions.allowDuplicates && this._isRepeatData(e))
                    return void this._logDebug("warn", "Raven dropped repeat event: ", e);
                this._lastData = e,
                this._logDebug("debug", "Raven about to send:", e);
                var r = {
                    sentry_version: "7",
                    sentry_client: "raven-js/" + this.VERSION,
                    sentry_key: this._globalKey
                };
                this._globalSecret && (r.sentry_secret = this._globalSecret);
                var o = e.exception && e.exception.values[0];
                this.captureBreadcrumb({
                    category: "sentry",
                    message: o ? (o.type ? o.type + ": " : "") + o.value : e.message,
                    event_id: e.event_id,
                    level: e.level || "error"
                });
                var a = this._globalEndpoint;
                (i.transport || this._makeRequest).call(this, {
                    url: a,
                    auth: r,
                    data: e,
                    options: i,
                    onSuccess: function() {
                        n._resetBackoff(),
                        n._triggerEvent("success", {
                            data: e,
                            src: a
                        }),
                        t && t()
                    },
                    onError: function(i) {
                        n._logDebug("error", "Raven transport failed to send: ", i),
                        i.request && n._setBackoffState(i.request),
                        n._triggerEvent("failure", {
                            data: e,
                            src: a
                        }),
                        i = i || new Error("Raven send failed (no additional details provided)"),
                        t && t(i)
                    }
                })
            }
        },
        _makeRequest: function(e) {
            var t = new XMLHttpRequest
              , n = "withCredentials"in t || "undefined" != typeof XDomainRequest;
            if (n) {
                var i = e.url;
                "withCredentials"in t ? t.onreadystatechange = function() {
                    if (4 === t.readyState)
                        if (200 === t.status)
                            e.onSuccess && e.onSuccess();
                        else if (e.onError) {
                            var n = new Error("Sentry error code: " + t.status);
                            n.request = t,
                            e.onError(n)
                        }
                }
                : (t = new XDomainRequest,
                i = i.replace(/^https?:/, ""),
                e.onSuccess && (t.onload = e.onSuccess),
                e.onError && (t.onerror = function() {
                    var n = new Error("Sentry error code: XDomainRequest");
                    n.request = t,
                    e.onError(n)
                }
                )),
                t.open("POST", i + "?" + $(e.auth)),
                t.send(ri(e.data))
            }
        },
        _logDebug: function(e) {
            this._originalConsoleMethods[e] && this.debug && Function.prototype.apply.call(this._originalConsoleMethods[e], this._originalConsole, [].slice.call(arguments, 1))
        },
        _mergeContext: function(e, t) {
            V(t) ? delete this._globalContext[e] : this._globalContext[e] = K(this._globalContext[e] || {}, t)
        }
    };
    var pi = Object.prototype;
    "undefined" != typeof __false__ && __false__ && (j.utils = {
        isUndefined: V,
        isFunction: U,
        isString: H,
        isObject: ui,
        isEmptyObject: W,
        isError: si,
        each: z,
        objectMerge: K,
        truncate: G,
        hasKey: X,
        joinRegExp: Y,
        urlencode: $,
        uuid4: J,
        htmlTreeAsString: Z,
        htmlElementAsString: ee,
        parseUrl: Q,
        fill: re
    }),
    j.prototype.setUser = j.prototype.setUserContext,
    j.prototype.setReleaseContext = j.prototype.setRelease;
    var mi = j
      , gi = mi
      , yi = "undefined" != typeof window ? window : "undefined" != typeof tn ? tn : "undefined" != typeof self ? self : {}
      , _i = yi.Raven
      , bi = new gi;
    bi.noConflict = function() {
        return yi.Raven = _i,
        bi
    }
    ,
    bi.afterLoad();
    var wi = bi
      , ki = "object" == typeof tn && tn && tn.Object === Object && tn
      , Si = ki
      , Ei = Si
      , Ti = "object" == typeof self && self && self.Object === Object && self
      , xi = Ei || Ti || Function("return this")()
      , Li = xi
      , Pi = Li
      , Ai = Pi.Symbol
      , Ci = Ai
      , Oi = se
      , Ri = Array.isArray
      , Mi = Ri
      , Ii = Ci
      , Fi = Object.prototype
      , Di = Fi.hasOwnProperty
      , Bi = Fi.toString
      , qi = Ii ? Ii.toStringTag : void 0
      , Ni = ue
      , ji = Object.prototype
      , Vi = ji.toString
      , Ui = ce
      , Hi = Ci
      , Wi = Ni
      , zi = Ui
      , Ki = "[object Null]"
      , Gi = "[object Undefined]"
      , Xi = Hi ? Hi.toStringTag : void 0
      , Yi = le
      , $i = de
      , Qi = Yi
      , Ji = $i
      , Zi = "[object Symbol]"
      , er = fe
      , tr = Ci
      , nr = Oi
      , ir = Mi
      , rr = er
      , or = 1 / 0
      , ar = tr ? tr.prototype : void 0
      , sr = ar ? ar.toString : void 0
      , ur = he
      , cr = ur
      , lr = ve
      , dr = pe
      , fr = dr
      , hr = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
    }
      , vr = fr(hr)
      , pr = vr
      , mr = lr
      , gr = pr
      , yr = /&(?:amp|lt|gt|quot|#39);/g
      , _r = RegExp(yr.source)
      , br = me;
    _e.prototype = {
        get complement() {
            var e = this.clone();
            return e.rgb = {
                red: 255 - this.red,
                green: 255 - this.green,
                blue: 255 - this.blue
            },
            e
        },
        get hex() {
            return _e.rgbToHex(this.red, this.green, this.blue)
        },
        set hex(e) {
            return this.rgba = _e.hexToRgb(e),
            this
        },
        get hsl() {
            return "hsl(" + this.hue + "," + this.saturation + "%," + Math.round(this.lightness) + "%)"
        },
        set hsl(e) {
            this.hue = e.hue,
            this.saturation = e.saturation,
            this.lightness = e.lightness;
            var t = _e.hslToRgb(e.hue, e.saturation, e.lightness);
            return this.red = t.red,
            this.green = t.green,
            this.blue = t.blue,
            this.alpha = t.alpha,
            this
        },
        get luminance() {
            function e(e) {
                return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
            }
            var t = e(this.red / 255)
              , n = e(this.green / 255)
              , i = e(this.blue / 255)
              , r = .2126 * t + .7152 * n + .0722 * i;
            return r
        },
        get rgb() {
            return "rgb(" + this.red + "," + this.green + "," + this.blue + ")"
        },
        set rgb(e) {
            return this.rgba = e,
            this
        },
        get rgba() {
            return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")"
        },
        set rgba(e) {
            this.red = e.red,
            this.green = e.green,
            this.blue = e.blue,
            this.alpha = e.alpha || 1;
            var t = _e.rgbToHsl(e.red, e.green, e.blue);
            return this.hue = t.hue,
            this.saturation = t.saturation,
            this.lightness = t.lightness,
            this
        },
        get yiq() {
            return (299 * this.red + 587 * this.green + 114 * this.blue) / 1e3
        },
        clone: function() {
            return new _e(this)
        },
        lighten: function(e, t, n) {
            if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness + e
            },
            t && n)
                for (var i = n.contrast(this).ratio; i < t && (this.lighten(5),
                i = n.contrast(this).ratio,
                !(this.lightness >= 100)); )
                    ;
            return this
        },
        darken: function(e, t, n) {
            if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness - e
            },
            t && n)
                for (var i = n.contrast(this).ratio; i < t && (this.darken(5),
                i = n.contrast(this).ratio,
                !(this.lightness <= 0)); )
                    ;
            return this
        },
        overlayOn: function(e) {
            if (this.alpha >= 1)
                return this;
            var t = this.clone();
            return t.rgba = {
                red: t.red * this.alpha + e.red * e.alpha * (1 - this.alpha),
                green: t.green * this.alpha + e.green * e.alpha * (1 - this.alpha),
                blue: t.blue * this.alpha + e.blue * e.alpha * (1 - this.alpha),
                alpha: t.alpha + e.alpha * (1 - this.alpha)
            },
            t
        },
        contrast: function(e) {
            var t = this.alpha;
            if (t >= 1) {
                e.alpha < 1 && (e = e.overlayOn(this));
                var n = this.luminance + .05
                  , i = e.luminance + .05
                  , r = n / i;
                return i > n && (r = 1 / r),
                r = Math.round(10 * r) / 10,
                {
                    ratio: r,
                    error: 0,
                    min: r,
                    max: r
                }
            }
            var o = this.overlayOn(_e.white).contrast(e).ratio
              , a = this.overlayOn(_e.black).contrast(e).ratio
              , s = Math.max(o, a)
              , u = {
                red: Math.min(Math.max(0, (e.red - this.red * t) / (1 - t)), 255),
                green: Math.min(Math.max(0, (e.green - this.green * t) / (1 - t)), 255),
                blue: Math.min(Math.max(0, (e.blue - this.blue * t) / (1 - t)), 255)
            }
              , c = this.clone();
            c.rgb = u;
            var l = this.overlayOn(c).contrast(e).ratio;
            return {
                ratio: Math.round((l + s) / 2 * 10) / 10,
                error: Math.round((s - l) / 2 * 10) / 10,
                min: l,
                max: s,
                closest: c,
                farthest: a === s ? _e.white : _e.black
            }
        },
        wcagAACompliant: function(e) {
            return this.contrast(e).ratio >= 4.5
        },
        wcagAAACompliant: function(e) {
            return this.contrast(e).ratio >= 7
        },
        yiqContrastColor: function() {
            return this.yiq >= 120 ? new _e(0,0,0) : new _e(255,255,255)
        }
    },
    _e.hexToRgb = function(e) {
        var t;
        return e = String(e),
        3 === e.length || 4 === e.length ? (t = /^#?([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/i.exec(e),
        t && (t[1] += t[1],
        t[2] += t[2],
        t[3] += t[3])) : t = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/i.exec(e),
        t ? {
            red: parseInt(t[1], 16),
            green: parseInt(t[2], 16),
            blue: parseInt(t[3], 16),
            alpha: 1
        } : null
    }
    ,
    _e.rgbToHex = function(e, t, n) {
        return "#" + ((1 << 24) + (Math.round(e) << 16) + (Math.round(t) << 8) + Math.round(n)).toString(16).slice(1)
    }
    ,
    _e.rgbToHsl = function(e, t, n) {
        e /= 255,
        t /= 255,
        n /= 255;
        var i = Math.max(e, t, n)
          , r = Math.min(e, t, n)
          , o = (i + r) / 2
          , a = o
          , s = o;
        if (i === r)
            return {
                hue: 0,
                saturation: 0,
                lightness: 100 * s
            };
        var u = i - r;
        return a = s > .5 ? u / (2 - i - r) : u / (i + r),
        i === e ? o = (t - n) / u + (t < n ? 6 : 0) : i === t ? o = (n - e) / u + 2 : i === n && (o = (e - t) / u + 4),
        o /= 6,
        {
            hue: Math.round(360 * o),
            saturation: Math.round(100 * a),
            lightness: Math.round(100 * s)
        }
    }
    ,
    _e.hslToRgb = function(e, t, n) {
        function i(e, t, n) {
            return n < 0 && (n += 1),
            n > 1 && (n -= 1),
            6 * n < 1 ? e + 6 * (t - e) * n : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (6 * (2 / 3 - n)) : e
        }
        if (e /= 360,
        t /= 100,
        n /= 100,
        0 === t)
            return {
                red: Math.floor(255 * n),
                green: Math.floor(255 * n),
                blue: Math.floor(255 * n)
            };
        var r = n < .5 ? n * (1 + t) : n + t - t * n
          , o = 2 * n - r;
        return {
            red: Math.floor(255 * i(o, r, e + 1 / 3)),
            green: Math.floor(255 * i(o, r, e)),
            blue: Math.floor(255 * i(o, r, e - 1 / 3))
        }
    }
    ,
    _e.hslToHex = function(e, t, n) {
        var i = _e.hslToRgb(e, t, n);
        return _e.rgbToHex(i.red, i.green, i.blue)
    }
    ,
    _e.white = new _e("fff"),
    _e.black = new _e("000");
    var wr = 6e4
      , kr = Object.prototype
      , Sr = Ee
      , Er = Te
      , Tr = Er
      , xr = Tr(Object.keys, Object)
      , Lr = xr
      , Pr = Sr
      , Ar = Lr
      , Cr = Object.prototype
      , Or = Cr.hasOwnProperty
      , Rr = xe
      , Mr = Le
      , Ir = Yi
      , Fr = Mr
      , Dr = "[object AsyncFunction]"
      , Br = "[object Function]"
      , qr = "[object GeneratorFunction]"
      , Nr = "[object Proxy]"
      , jr = Pe
      , Vr = Li
      , Ur = Vr["__core-js_shared__"]
      , Hr = Ur
      , Wr = Hr
      , zr = function() {
        var e = /[^.]+$/.exec(Wr && Wr.keys && Wr.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }()
      , Kr = Ae
      , Gr = Function.prototype
      , Xr = Gr.toString
      , Yr = Ce
      , $r = jr
      , Qr = Kr
      , Jr = Mr
      , Zr = Yr
      , eo = /[\\^$.*+?()[\]{}|]/g
      , to = /^\[object .+?Constructor\]$/
      , no = Function.prototype
      , io = Object.prototype
      , ro = no.toString
      , oo = io.hasOwnProperty
      , ao = RegExp("^" + ro.call(oo).replace(eo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
      , so = Oe
      , uo = Re
      , co = so
      , lo = uo
      , fo = Me
      , ho = fo
      , vo = Li
      , po = ho(vo, "DataView")
      , mo = po
      , go = fo
      , yo = Li
      , _o = go(yo, "Map")
      , bo = _o
      , wo = fo
      , ko = Li
      , So = wo(ko, "Promise")
      , Eo = So
      , To = fo
      , xo = Li
      , Lo = To(xo, "Set")
      , Po = Lo
      , Ao = fo
      , Co = Li
      , Oo = Ao(Co, "WeakMap")
      , Ro = Oo
      , Mo = mo
      , Io = bo
      , Fo = Eo
      , Do = Po
      , Bo = Ro
      , qo = Yi
      , No = Yr
      , jo = "[object Map]"
      , Vo = "[object Object]"
      , Uo = "[object Promise]"
      , Ho = "[object Set]"
      , Wo = "[object WeakMap]"
      , zo = "[object DataView]"
      , Ko = No(Mo)
      , Go = No(Io)
      , Xo = No(Fo)
      , Yo = No(Do)
      , $o = No(Bo)
      , Qo = qo;
    (Mo && Qo(new Mo(new ArrayBuffer(1))) != zo || Io && Qo(new Io) != jo || Fo && Qo(Fo.resolve()) != Uo || Do && Qo(new Do) != Ho || Bo && Qo(new Bo) != Wo) && (Qo = function(e) {
        var t = qo(e)
          , n = t == Vo ? e.constructor : void 0
          , i = n ? No(n) : "";
        if (i)
            switch (i) {
            case Ko:
                return zo;
            case Go:
                return jo;
            case Xo:
                return Uo;
            case Yo:
                return Ho;
            case $o:
                return Wo
            }
        return t
    }
    );
    var Jo = Qo
      , Zo = Yi
      , ea = $i
      , ta = "[object Arguments]"
      , na = Ie
      , ia = na
      , ra = $i
      , oa = Object.prototype
      , aa = oa.hasOwnProperty
      , sa = oa.propertyIsEnumerable
      , ua = ia(function() {
        return arguments
    }()) ? ia : function(e) {
        return ra(e) && aa.call(e, "callee") && !sa.call(e, "callee")
    }
      , ca = ua
      , la = 9007199254740991
      , da = Fe
      , fa = jr
      , ha = da
      , va = De
      , pa = Be
      , ma = e(function(e, t) {
        var n = Li
          , i = pa
          , r = t && !t.nodeType && t
          , o = r && !0 && e && !e.nodeType && e
          , a = o && o.exports === r
          , s = a ? n.Buffer : void 0
          , u = s ? s.isBuffer : void 0
          , c = u || i;
        e.exports = c
    })
      , ga = Yi
      , ya = da
      , _a = $i
      , ba = "[object Arguments]"
      , wa = "[object Array]"
      , ka = "[object Boolean]"
      , Sa = "[object Date]"
      , Ea = "[object Error]"
      , Ta = "[object Function]"
      , xa = "[object Map]"
      , La = "[object Number]"
      , Pa = "[object Object]"
      , Aa = "[object RegExp]"
      , Ca = "[object Set]"
      , Oa = "[object String]"
      , Ra = "[object WeakMap]"
      , Ma = "[object ArrayBuffer]"
      , Ia = "[object DataView]"
      , Fa = "[object Float32Array]"
      , Da = "[object Float64Array]"
      , Ba = "[object Int8Array]"
      , qa = "[object Int16Array]"
      , Na = "[object Int32Array]"
      , ja = "[object Uint8Array]"
      , Va = "[object Uint8ClampedArray]"
      , Ua = "[object Uint16Array]"
      , Ha = "[object Uint32Array]"
      , Wa = {};
    Wa[Fa] = Wa[Da] = Wa[Ba] = Wa[qa] = Wa[Na] = Wa[ja] = Wa[Va] = Wa[Ua] = Wa[Ha] = !0,
    Wa[ba] = Wa[wa] = Wa[Ma] = Wa[ka] = Wa[Ia] = Wa[Sa] = Wa[Ea] = Wa[Ta] = Wa[xa] = Wa[La] = Wa[Pa] = Wa[Aa] = Wa[Ca] = Wa[Oa] = Wa[Ra] = !1;
    var za, Ka, Ga, Xa, Ya = qe, $a = Ne, Qa = e(function(e, t) {
        var n = Si
          , i = t && !t.nodeType && t
          , r = i && !0 && e && !e.nodeType && e
          , o = r && r.exports === i
          , a = o && n.process
          , s = function() {
            try {
                return a && a.binding && a.binding("util")
            } catch (e) {}
        }();
        e.exports = s
    }), Ja = Ya, Za = $a, es = Qa, ts = es && es.isTypedArray, ns = ts ? Za(ts) : Ja, is = ns, rs = Rr, os = Jo, as = ca, ss = Mi, us = va, cs = ma, ls = Sr, ds = is, fs = "[object Map]", hs = "[object Set]", vs = Object.prototype, ps = vs.hasOwnProperty, ms = je, gs = {
        ALERT_DISPLAYED: "alert-displayed",
        ALERT_HIDDEN: "alert-hidden",
        AUDIO_BITRATE_CHANGED: "audio-bitrate-changed",
        VIDEO_BITRATE_CHANGED: "video-bitrate-changed",
        VIDEO_BUFFER_END: "video-buffer-end",
        VIDEO_BUFFER_START: "video-buffer-start",
        VIDEO_CAN_START: "video-can-start",
        VIDEO_ENDED: "video-ended",
        VIDEO_ENTER_FULLSCREEN: "video-enter-fullscreen",
        VIDEO_EXIT: "video-exit",
        VIDEO_EXIT_FULLSCREEN: "video-exit-fullscreen",
        VIDEO_LOAD_FAILURE: "video-load-failure",
        VIDEO_MANIFEST_LOADED: "video-manifest-loaded",
        VIDEO_MANIFEST_TIMEOUT: "video-manifest-timeout",
        VIDEO_MINUTE_WATCHED: "video-minute-watched",
        VIDEO_PAUSED: "video-paused",
        VIDEO_PLAYED: "video-played",
        VIDEO_PLAYBACK_ERROR: "video-playback-error",
        VIDEO_PLAYBACK_RATE_CHANGED: "video-playback-rate-changed",
        VIDEO_PLAYBACK_RESUMED: "video-playback-resumed",
        VIDEO_RAN_INTO_BUFFER: "video-ran-into-buffer",
        VIDEO_READY: "video-ready",
        VIDEO_START_ATTEMPT: "video-start-attempt",
        VIDEO_START_FAILURE: "video-start-failure",
        VIDEO_START_TIME: "video-start-time",
        VIDEO_SWITCH_BACK_TO_AUTO: "video-switch-back-to-auto",
        VIDEO_SWITCH_FROM_AUTO: "video-switch-from-auto",
        VIDEO_SEEK: "video-seek",
        VIDEO_SEEKED: "video-seeked"
    }, ys = function() {
        function e(t) {
            yn(this, e),
            this.liveEvent = t
        }
        return _n(e, [{
            key: "toObject",
            value: function() {
                return this.liveEvent
            }
        }, {
            key: "update",
            value: function(e) {
                this.liveEvent = e
            }
        }, {
            key: "exists",
            get: function() {
                return this.liveEvent && null !== this.liveEvent
            }
        }, {
            key: "isPending",
            get: function() {
                return this.exists && this.liveEvent.status === cn.pending
            }
        }, {
            key: "isActive",
            get: function() {
                return this.exists && this.liveEvent.status === cn.active
            }
        }, {
            key: "isStarted",
            get: function() {
                return this.exists && this.liveEvent.status === cn.started
            }
        }, {
            key: "isEnded",
            get: function() {
                return this.exists && this.liveEvent.status === cn.ended
            }
        }, {
            key: "inProgress",
            get: function() {
                return this.exists && !this.isEnded
            }
        }, {
            key: "isArchived",
            get: function() {
                return this.exists && this.liveEvent.archive && this.liveEvent.archive.status === ln.done
            }
        }, {
            key: "dashUrl",
            get: function() {
                return this.exists && this.liveEvent.playback ? this.liveEvent.playback.dash_noredirect : null
            }
        }, {
            key: "hlsUrl",
            get: function() {
                return this.exists && this.liveEvent.playback ? this.liveEvent.playback.hls : null
            }
        }, {
            key: "scheduledStartTime",
            get: function() {
                return this.exists && this.liveEvent.ingest ? this.liveEvent.ingest.scheduled_start_time : null
            }
        }]),
        e
    }(), _s = 500, bs = 500, ws = function() {
        function e(t) {
            yn(this, e),
            this.player = t,
            this.playerLoadTime = nt(),
            this.endpoint = this._getFresnelEndpoint(),
            this.startAttemptLogged = !1,
            this.startupTimeLogged = !1,
            this.startPlayTime = null,
            this.currentlyBuffering = !1,
            this.lastBufferTime = null,
            this.totalBufferDuration = 0,
            this.qualityPickedLogged = !1,
            this.backToAutoLogged = !1,
            this.lastBitrate = null,
            this.currentQuality = "auto",
            this.currentStream = {},
            this.lastProfileId = null,
            this.lastTargetProfileId = null,
            this.currentlyPlaying = !1,
            this.playedTo = 0,
            this.autoplayType = this.player.config.embed.autoplay,
            this.akamaiEdgeIp = null,
            this.quicVersion = null,
            this.akamaiCacheDebug = null,
            this.emailOverlayVisible = !1,
            this.videoBitrateIntervals = [],
            this.audioBitrateIntervals = [],
            this.lastIntervalTime = Date.now(),
            this.bufferCount = 0,
            this.isScrubbing = !1,
            this.currentMinuteWatchedTime = 0,
            this.totalMinutesWatched = 0,
            this.hasEnded = !1,
            this.droppedFramePercent = 0,
            this.droppedFrames = 0,
            this.forcedEmbedQuality = "none",
            this.sessionPlaybackDuration = 0,
            this.fullscreen = !1,
            this.qualityUpSwitchCount = 0,
            this.qualityDownSwitchCount = 0,
            this.stayedOnAuto = !0,
            this.playedProfiles = {},
            this.profiles = {},
            this.speeds = [],
            this.targetProfiles = {},
            this.targetProfileId = {},
            this.endpoint && (this.liveEvent = new ys(this.player.config.video.live_event),
            setInterval(this._updatePlaybackDuration.bind(this), _s),
            this._initializeEvents(),
            this._initMinuteWatchedTimer())
        }
        return _n(e, [{
            key: "_initializeEvents",
            value: function() {
                var e = this;
                this.player.events.on(hn.playInitiated, this._onPlayInitiated.bind(this)),
                this.player.events.on(hn.playProgress, this._onPlayProgress.bind(this)),
                this.player.events.on(hn.played, this._onPlayed.bind(this)),
                this.player.events.on(hn.bufferStarted, this._onBufferStarted.bind(this)),
                this.player.events.on(hn.bufferEnded, this._onBufferEnded.bind(this)),
                this.player.events.on(hn.ranIntoBuffer, this._onRanIntoBuffer.bind(this)),
                this.player.events.on(hn.playbackResumed, this._onPlaybackResumed.bind(this)),
                this.player.events.on(hn.error, this._onError.bind(this)),
                this.player.events.on(hn.didEnterFullscreen, this._onEnterFullscreen.bind(this)),
                this.player.events.on(hn.didExitFullscreen, this._onExitFullscreen.bind(this)),
                this.player.events.on(hn.droppedFrames, this._onDroppedFrames.bind(this)),
                this.player.events.on(hn.ended, this._onEnded.bind(this)),
                this.player.events.on(hn.adaptiveBandwidth, this._onAdaptiveBandwidth.bind(this)),
                this.player.events.on(hn.streamChanged, this._onStreamChanged.bind(this)),
                this.player.events.on(hn.streamTargetChange, this._onStreamTargetChange.bind(this)),
                this.player.events.on(hn.forcedQuality, this._onForcedQuality.bind(this)),
                this.player.events.on(hn.alertVisibilityChanged, this._onAlertVisibilityChanged.bind(this)),
                this.player.events.on(hn.configChanged, this._resetMetrics.bind(this)),
                this.player.events.on(hn.segmentDownloaded, this._onSegmentDownloaded.bind(this)),
                this.player.events.on(hn.overlayClosed, this._onOverlayClosed.bind(this)),
                this.player.events.on(hn.paused, this._onPaused.bind(this)),
                this.player.events.on(hn.scrubbingStarted, this._onScrubbingStarted.bind(this)),
                this.player.events.on(hn.scrubbingEnded, this._onScrubbingEnded.bind(this)),
                this.player.events.on(hn.playbackRateChanged, this._onPlaybackRateChanged.bind(this)),
                this.player.events.on(fn.changeQuality, this._onChangeQuality.bind(this)),
                this.player.events.on(fn.seek, this._onSeek.bind(this)),
                this.player.events.on(fn.showOverlay, this._onOverlayShown.bind(this));
                var t = new nn(function(t, n) {
                    e.player.telecine && t(),
                    e.player.events.on(hn.telecineReady, function() {
                        t()
                    })
                }
                );
                t.then(function() {
                    e._send(gs.VIDEO_READY),
                    e.player.telecine.on("manifesttimeout", e._onManifestTimeout.bind(e)),
                    e.player.telecine.on("canplay", e._onCanPlay.bind(e)),
                    e.player.telecine.on("manifestloaded", e._onManifestLoaded.bind(e))
                }).catch(function() {}),
                I(function(t) {
                    e._onVideoExit()
                })
            }
        }, {
            key: "_initMinuteWatchedTimer",
            value: function() {
                var e = this
                  , t = Math.floor(60 * Math.random());
                setInterval(function() {
                    if (e.currentlyPlaying)
                        return e.currentMinuteWatchedTime++,
                        0 === e.totalMinutesWatched ? void (e.currentMinuteWatchedTime === t && (e.currentMinuteWatchedTime = 0,
                        e.totalMinutesWatched++,
                        e._send(gs.VIDEO_MINUTE_WATCHED))) : void (e.currentMinuteWatchedTime >= 60 && (e.currentMinuteWatchedTime = 0,
                        e.totalMinutesWatched++,
                        e._send(gs.VIDEO_MINUTE_WATCHED)))
                }, 1e3)
            }
        }, {
            key: "_getBufferState",
            value: function() {
                var e = [];
                if (this.player.telecine)
                    for (var t = this.player.telecine.buffered, n = 0; n < t.length; n++)
                        e.push([t.start(n), t.end(n)]);
                return e
            }
        }, {
            key: "_updatePlaybackDuration",
            value: function() {
                this.currentlyPlaying && (this.sessionPlaybackDuration += et(this.lastIntervalTime) / 1e3),
                this.lastIntervalTime = Date.now()
            }
        }, {
            key: "_onPaused",
            value: function() {
                this.currentlyPlaying = !1,
                this._send(gs.VIDEO_PAUSED)
            }
        }, {
            key: "_averageMediaBitrate",
            value: function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "both", n = 0, i = 0, r = this.videoBitrateIntervals.length - 1, o = 0, a = 0, s = 0, u = 0, c = 0, l = 0; n < e && r >= 0; )
                    o = this.videoBitrateIntervals[r].bitrate,
                    a = this.videoBitrateIntervals[r].duration,
                    n += a,
                    i += o * a,
                    r -= 1;
                if (s = i / n,
                "video" === t)
                    return s;
                for (r = this.audioBitrateIntervals.length - 1; c < e && r >= 0; )
                    o = this.audioBitrateIntervals[r].bitrate,
                    a = this.audioBitrateIntervals[r].duration,
                    c += a,
                    l += o * a,
                    r -= 1;
                return u = l / c,
                "audio" === t ? u : (s + u) / 2
            }
        }, {
            key: "_isVOD",
            value: function() {
                return !!this.player.config.video.vod && 0 !== this.player.config.video.vod
            }
        }, {
            key: "_getOrigin",
            value: function() {
                var e = document.createElement("a");
                return e.href = this.player.config.request.referrer,
                e.origin || e.protocol.replace(":", "") + "://" + e.host
            }
        }, {
            key: "_getFresnelEndpoint",
            value: function() {
                return this.player.config.request.urls.fresnel + (this.player.config.request.flags.log_to_es ? "?es=1" : "")
            }
        }, {
            key: "_onVideoExit",
            value: function() {
                this.currentlyBuffering && (this.totalBufferDuration += et(this.lastBufferTime) / 1e3),
                this.startupTimeLogged && this._send(gs.VIDEO_EXIT, {}, !1)
            }
        }, {
            key: "_getGlobalProperties",
            value: function() {
                var e = this.player.telecine.video ? this.player.telecine.video.currentFile : {}
                  , t = e.id
                  , n = void 0 === t ? 0 : t
                  , i = e.mime
                  , r = void 0 === i ? sn.h264 : i
                  , o = e.metadata;
                o = void 0 === o ? {} : o;
                var a = o.profile
                  , s = void 0 === a ? -1 : a
                  , u = !1
                  , c = !1
                  , l = this._getProfileUsage();
                switch (r) {
                case sn.dash:
                    0 === e.restrictedStreamIndexes.length && (u = !0),
                    this.player.config.request.files.dash.separate_av && (c = !0);
                    var d = this.currentStream
                      , f = d.id;
                    n = void 0 === f ? 0 : f;
                    var h = d.profile;
                    s = void 0 === h ? -1 : h;
                    break;
                case sn.hls:
                    u = !0
                }
                var v = {
                    account_type: this.player.config.video.owner ? this.player.config.video.owner.account_type : null,
                    appdex: l.appdex || null,
                    auto: u,
                    autoplay: !!this.autoplayType,
                    average_speed: l.average_speed || 0,
                    buffer_count: this.bufferCount,
                    buffer_duration: this.totalBufferDuration,
                    buffer_ratio: this._getBufferRatio(),
                    cdn: e.metadata ? e.metadata.cdn : "akamai",
                    client_time: Date.now(),
                    clip_id: this.player.config.video.id,
                    context: this.player.config.embed.context,
                    delivery: an[r],
                    device_pixel_ratio: window.devicePixelRatio || 1,
                    drm: this.player.config.request.drm || !1,
                    dropped_frames: this.droppedFrames,
                    dropped_frame_percent: this.droppedFramePercent,
                    embed: !this.player.config.embed.on_site,
                    ended: this.hasEnded,
                    forced_embed_quality: this.forcedEmbedQuality,
                    fullscreen: this.fullscreen,
                    highest_available_profile: l.highest_available_profile || 0,
                    highest_profile: l.highest_profile || 0,
                    is_beta: this.player.config.build.player.indexOf("beta") >= 0,
                    is_buffering: this.currentlyBuffering,
                    is_mod: this.player.config.user.mod,
                    is_spatial: !(!Un.spatialPlayback || !this.player.config.video.spatial),
                    is_stereo: !(!Un.spatialPlayback || !this.player.config.video.stereo_mode || "mono" === this.player.config.video.stereo_mode),
                    live: this.liveEvent.inProgress || !1,
                    logged_in: !!this.player.config.user.logged_in,
                    looping: !!this.player.config.embed.loop,
                    max_speed: isFinite(l.max_speed) ? l.max_speed : 0,
                    min_speed: isFinite(l.min_speed) ? l.min_speed : 0,
                    minutes_watched: this.totalMinutesWatched,
                    most_used_profile: l.most_used_profile || 0,
                    origin: e.metadata ? e.metadata.origin : "",
                    playback_rate: this.player.telecine.playbackRate,
                    player_width: this.player.element.querySelector(".video").getBoundingClientRect().width,
                    player_height: this.player.element.querySelector(".video").getBoundingClientRect().height,
                    profile_id: s,
                    quality: this.currentStream ? this.currentStream.quality : null,
                    quality_downswitch_count: this.qualityDownSwitchCount,
                    quality_upswitch_count: this.qualityUpSwitchCount,
                    quality_switch_count: this.qualityUpSwitchCount + this.qualityDownSwitchCount,
                    referrer: this._getOrigin(),
                    resume_time: this.player.config.user.progress || null,
                    separate_av: c,
                    session_id: this.player.config.request.session,
                    session_playback_duration: Math.round(100 * this.sessionPlaybackDuration) / 100,
                    stayed_on_auto: this.stayedOnAuto,
                    ttfb: this._getTimeToFirstByte(),
                    version: this.player.config.request.build.js,
                    video_duration: this.player.config.video.duration,
                    video_file_id: Number.isInteger(Number(n)) ? parseInt(n, 10) : null,
                    video_time: this.player.telecine.currentTime,
                    vod: this._isVOD(),
                    vuid: Je("vuid")
                };
                if (this.player.config.request.ab_tests)
                    for (var p in this.player.config.request.ab_tests)
                        v[p + "_test"] = 1,
                        v[p + "_group"] = this.player.config.request.ab_tests[p].group;
                return v
            }
        }, {
            key: "_send",
            value: function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                  , i = this._getGlobalProperties();
                for (var r in t)
                    t.hasOwnProperty(r) && (i[r] = t[r]);
                i.name = e,
                i.event_time = this.player.config.request.timestamp + tt(this.playerLoadTime);
                var o = [i]
                  , a = JSON.stringify(o);
                if (!navigator.sendBeacon || !navigator.sendBeacon(this.endpoint, a)) {
                    var s = new XMLHttpRequest;
                    s.open("POST", this.endpoint, n),
                    s.setRequestHeader("Content-Type", "text/plain"),
                    s.send(a)
                }
            }
        }, {
            key: "_getProfileUsage",
            value: function() {
                var e = this
                  , t = {}
                  , n = Date.now()
                  , i = Xe("asc")
                  , r = "MediaSourceScanner" === this.player.telecine.currentScanner
                  , o = "HTMLScanner" === this.player.telecine.currentScanner
                  , a = [];
                o && (a = this.player.config.request.files.progressive || this.player.config.request.files.hls),
                r && (a = this.player.config.request.files.dash.streams),
                "undefined" == typeof a && (a = []);
                var s = mn(a).sort(i).map(function(e) {
                    return e.profile
                })
                  , u = -1
                  , c = 0
                  , l = null;
                return Object.keys(this.profiles).forEach(function(t) {
                    var i = s.indexOf(parseInt(t, 10));
                    i > u && (u = i);
                    var r = e.profiles[t].reduce(function(e, t) {
                        var i = t.end || n;
                        return (i - t.start) / 1e3 + e
                    }, 0);
                    r > c && (c = r,
                    l = t)
                }),
                t.highest_profile = s[u],
                t.highest_available_profile = s[s.length - 1],
                t.most_used_profile = parseInt(l, 10),
                r && !function() {
                    t.max_speed = Math.round(Math.max.apply(Math, e.speeds)) / 1e3,
                    t.min_speed = Math.round(Math.min.apply(Math, e.speeds)) / 1e3;
                    var i = e.speeds.reduce(function(e, t) {
                        return e + t
                    }, 0);
                    t.average_speed = Math.round(i / e.speeds.length) / 1e3;
                    var r = 0
                      , o = null;
                    Object.keys(e.targetProfileId).forEach(function(t) {
                        var i = e.targetProfileId[t].reduce(function(e, t) {
                            var i = t.end || n;
                            return (i - t.start) / 1e3 + e
                        }, 0);
                        i > r && (r = i,
                        o = t)
                    }),
                    t.target_profile = parseInt(o, 10),
                    ms(e.playedProfiles) || (t.appdex = e._getAppdexScore(e.playedProfiles, e.targetProfiles, l, t.average_speed))
                }(),
                t
            }
        }, {
            key: "_getTimeToFirstByte",
            value: function() {
                var e = -1;
                if ("undefined" != typeof window.performance && "function" == typeof window.performance.getEntriesByType) {
                    var t = window.performance.getEntriesByType("resource");
                    if (t) {
                        var n = t.filter(function(e) {
                            return ".m4s" === e.name.split("?")[0].substr(-4)
                        });
                        e = n.map(function(e) {
                            return e.responseStart - e.connectStart
                        }).reduce(function(e, t) {
                            return e + t
                        }, 0) / (n.length || 1)
                    }
                }
                return e
            }
        }, {
            key: "_getAppdexScore",
            value: function(e, t, n, i) {
                var r = [];
                Object.keys(e).forEach(function(t) {
                    var n = e[t]
                      , i = n.width
                      , o = n.height
                      , a = parseInt(i, 10) * parseInt(o, 10);
                    r.push(a)
                });
                var o = r.reduce(function(e, t) {
                    return e + t
                }, 0) / r.length
                  , a = [];
                Object.keys(t).forEach(function(e) {
                    a.push(t[e].bitrate)
                });
                var s = a.reduce(function(e, t) {
                    return e / 1e3 + t / 1e3
                }, 0) / a.length
                  , u = [];
                Object.keys(t).forEach(function(e) {
                    var n = t[e]
                      , i = n.width * n.height;
                    u.push(i)
                });
                var c = u.reduce(function(e, t) {
                    return e + t
                }, 0) / u.length
                  , l = e[n]
                  , d = l.width
                  , f = l.height
                  , h = d * f
                  , v = Math.min(h, c)
                  , p = o * s / (v * Math.min(i, s));
                return p
            }
        }, {
            key: "_getBufferRatio",
            value: function() {
                var e = this.totalBufferDuration / (this.totalBufferDuration + this.sessionPlaybackDuration) * 100;
                return isNaN(e) ? 0 : Math.round(100 * e) / 100
            }
        }, {
            key: "_onPlayInitiated",
            value: function() {
                var e = this;
                this.startAttemptLogged || this.player.performDelegateAction(on.playLog, function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e.autoplayType = n.continuous ? 1 : e.player.config.embed.autoplay,
                    e._send(gs.VIDEO_START_ATTEMPT),
                    e.startAttemptLogged = !0,
                    e.startPlayTime = Date.now()
                })
            }
        }, {
            key: "_updateBitrateAverages",
            value: function(e) {
                var t = this.player.telecine.getBitrateAtTime(e, "video")
                  , n = this.player.telecine.getBitrateAtTime(e, "audio");
                this.videoBitrateIntervals.push({
                    bitrate: t,
                    duration: e - this.playedTo
                }),
                this.audioBitrateIntervals.push({
                    bitrate: n,
                    duration: e - this.playedTo
                })
            }
        }, {
            key: "_onPlayed",
            value: function(e) {
                this.currentlyPlaying = !0,
                this.isScrubbing || this._send(gs.VIDEO_PLAYED)
            }
        }, {
            key: "_checkForBitrateChange",
            value: function(e) {
                if (this._updateBitrateAverages(e),
                this.videoBitrateIntervals.length > 1) {
                    var t = this.videoBitrateIntervals;
                    t[t.length - 1].bitrate !== t[t.length - 2].bitrate && this._send(gs.VIDEO_BITRATE_CHANGED, {
                        previous_video_bitrate: t[t.length - 2].bitrate,
                        video_bitrate: t[t.length - 1].bitrate
                    })
                }
                if (this.audioBitrateIntervals.length > 1) {
                    var n = this.audioBitrateIntervals;
                    n[n.length - 1].bitrate !== n[n.length - 2].bitrate && this._send(gs.AUDIO_BITRATE_CHANGED, {
                        previous_audio_bitrate: n[n.length - 2].bitrate,
                        audio_bitrate: n[n.length - 1].bitrate
                    })
                }
            }
        }, {
            key: "_onPlayProgress",
            value: function(e) {
                if (this._checkForBitrateChange(e),
                this.playedTo = e,
                !this.startupTimeLogged) {
                    this.startupTimeLogged = !0;
                    var t = et(this.startPlayTime) / 1e3
                      , n = {
                        time: t
                    };
                    this.akamaiEdgeIp && (n.akamai_edge_ip = this.akamaiEdgeIp),
                    this.quicVersion && (n.quic_version = this.quicVersion),
                    this.akamaiCacheDebug && (n.akamai_cache_debug = this.akamaiCacheDebug),
                    n.manifest_load_durations = this.player.telecine.manifestLoadDurations,
                    n.failed_segments = this.player.telecine.failedSegments,
                    this._send(gs.VIDEO_START_TIME, n)
                }
            }
        }, {
            key: "_onCanPlay",
            value: function() {
                this.isScrubbing || this._send(gs.VIDEO_CAN_START)
            }
        }, {
            key: "_onManifestLoaded",
            value: function() {
                this._send(gs.VIDEO_MANIFEST_LOADED)
            }
        }, {
            key: "_onBufferStarted",
            value: function() {
                this.startupTimeLogged && !this.isScrubbing && (this.lastBufferTime || (this.bufferCount++,
                this.lastBufferTime = Date.now(),
                this._send(gs.VIDEO_BUFFER_START, {
                    lower_profile_available: this.player.telecine.isLowerProfileAvailable()
                })),
                this.currentlyBuffering = !0)
            }
        }, {
            key: "_onBufferEnded",
            value: function() {
                if (!this.lastBufferTime || !this.startupTimeLogged || this.isScrubbing && !this.currentlyBuffering)
                    return void (this.lastBufferTime = null);
                var e = et(this.lastBufferTime) / 1e3;
                this.totalBufferDuration += e,
                this._send(gs.VIDEO_BUFFER_END, {
                    duration: e
                }),
                this.currentlyBuffering = !1,
                this.lastBufferTime = null
            }
        }, {
            key: "_onRanIntoBuffer",
            value: function(e) {
                this._send(gs.VIDEO_RAN_INTO_BUFFER, {
                    lower_profile_available: e
                })
            }
        }, {
            key: "_onPlaybackResumed",
            value: function() {
                this._send(gs.VIDEO_PLAYBACK_RESUMED)
            }
        }, {
            key: "_onEnterFullscreen",
            value: function(e, t) {
                this.fullscreen = !0,
                this._send(gs.VIDEO_ENTER_FULLSCREEN, {
                    full_player: e,
                    requested: t
                })
            }
        }, {
            key: "_onExitFullscreen",
            value: function(e, t) {
                this.fullscreen = !1,
                this._send(gs.VIDEO_EXIT_FULLSCREEN, {
                    full_player: e,
                    requested: t
                })
            }
        }, {
            key: "_onDroppedFrames",
            value: function(e) {
                var t = e.dropped / e.total * 100;
                this.droppedFramePercent = Math.round(100 * t) / 100,
                this.droppedFrames = e.dropped
            }
        }, {
            key: "_onChangeQuality",
            value: function(e) {
                "auto" !== e && (this.stayedOnAuto = !1),
                this.player.telecine.video.currentFile.mime === sn.dash && ("auto" === e || this.qualityPickedLogged ? "auto" === e && this.qualityPickedLogged && !this.backToAutoLogged && (this._send(gs.VIDEO_SWITCH_BACK_TO_AUTO, {
                    quality: this.currentQuality,
                    auto: 1
                }),
                this.backToAutoLogged = !0) : (this._send(gs.VIDEO_SWITCH_FROM_AUTO, {
                    quality: e,
                    auto: 0
                }),
                this.qualityPickedLogged = !0),
                this.currentQuality = e)
            }
        }, {
            key: "_onStreamChanged",
            value: function(e, t, n) {
                this.currentStream = e;
                var i = e.profile
                  , r = Date.now()
                  , o = n[t].bitrate;
                if (this.profiles[i] = this.profiles[i] || [],
                this.lastProfileId) {
                    var a = this.profiles[this.lastProfileId].length - 1;
                    this.profiles[this.lastProfileId][a] && (this.profiles[this.lastProfileId][a].end = r)
                }
                this.lastBitrate && (o > this.lastBitrate ? this.qualityUpSwitchCount += 1 : this.qualityDownSwitchCount += 1),
                this.profiles[i].push({
                    start: r
                }),
                this.playedProfiles[i] = {
                    bitrate: o,
                    width: n[t].width,
                    height: n[t].height
                },
                this.lastProfileId = i,
                this.lastBitrate = o
            }
        }, {
            key: "_onSeek",
            value: function() {
                this.currentlyPlaying = !1
            }
        }, {
            key: "_onScrubbingStarted",
            value: function() {
                this._send(gs.VIDEO_SEEK),
                this.isScrubbing = !0
            }
        }, {
            key: "_onScrubbingEnded",
            value: function() {
                this.isScrubbing = !1,
                this._send(gs.VIDEO_SEEKED)
            }
        }, {
            key: "_onEnded",
            value: function(e) {
                this.currentlyPlaying = !1,
                this.hasEnded = !0,
                this._send(gs.VIDEO_ENDED)
            }
        }, {
            key: "_onAlertVisibilityChanged",
            value: function(e, t) {
                return e ? void this._send(gs.ALERT_DISPLAYED) : void this._send(gs.ALERT_HIDDEN)
            }
        }, {
            key: "_onError",
            value: function(e) {
                var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    final: !0
                },
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
                  , n = {
                    type: e,
                    reason: t
                };
                return this.startupTimeLogged ? void this._send(gs.VIDEO_PLAYBACK_ERROR, n) : this.startAttemptLogged ? void this._send(gs.VIDEO_START_FAILURE, n) : void this._send(gs.VIDEO_LOAD_FAILURE, n)
            }
        }, {
            key: "_onStreamTargetChange",
            value: function(e, t, n) {
                var i = e.profile
                  , r = n[t].bitrate
                  , o = Date.now();
                if (this.targetProfileId[i] = this.targetProfileId[i] || [],
                this.lastTargetProfileId) {
                    var a = this.targetProfileId[this.lastTargetProfileId].length - 1;
                    this.targetProfileId[this.lastTargetProfileId][a] && (this.targetProfileId[this.lastTargetProfileId][a].end = o)
                }
                this.targetProfileId[i].push({
                    start: o
                }),
                this.targetProfiles[i] = {
                    bitrate: r,
                    width: n[t].width,
                    height: n[t].height
                },
                this.lastTargetProfileId = i
            }
        }, {
            key: "_onForcedQuality",
            value: function(e) {
                this.forcedEmbedQuality = e
            }
        }, {
            key: "_onAdaptiveBandwidth",
            value: function(e) {
                var t = e.speed;
                this.speeds.push(t),
                this.speeds.length > bs && this.speeds.shift()
            }
        }, {
            key: "_onSegmentDownloaded",
            value: function(e) {
                var t = (e.identifier,
                e.data.headers);
                "akamai-edge-ip"in t && (this.akamaiEdgeIp = t["akamai-edge-ip"]),
                "quic-version"in t && (this.quicVersion = t["quic-version"]),
                "x-vim-cachebc"in t && (this.akamaiCacheDebug = t["x-vim-cachebc"])
            }
        }, {
            key: "_onOverlayShown",
            value: function(e) {
                "email-capture" === e && (this.emailOverlayVisible = !0)
            }
        }, {
            key: "_onOverlayClosed",
            value: function(e) {
                "email-capture" === e && (this.emailOverlayVisible = !1)
            }
        }, {
            key: "_onPlaybackRateChanged",
            value: function(e, t) {
                this._send(gs.VIDEO_PLAYBACK_RATE_CHANGED, {
                    previous_playback_rate: t
                })
            }
        }, {
            key: "_onManifestTimeout",
            value: function() {
                this._send(gs.VIDEO_MANIFEST_TIMEOUT)
            }
        }, {
            key: "_resetMetrics",
            value: function() {
                this.startAttemptLogged = !1,
                this.startupTimeLogged = !1,
                this.qualityPickedLogged = !1,
                this.backToAutoLogged = !1,
                this.lastProfileId = null,
                this.lastTargetProfileId = null,
                this.lastBitrate = null,
                this.currentlyPlaying = !1,
                this.playedTo = 0,
                this.autoplayType = this.player.config.embed.autoplay,
                this.playerLoadTime = nt(),
                this.endpoint = this._getFresnelEndpoint(),
                this.currentQuality = "auto",
                this.akamaiEdgeIp = null,
                this.quicVersion = null,
                this.akamaiCacheDebug = null,
                this.emailOverlayVisible = !1,
                this.bufferCount = 0,
                this.currentMinuteWatchedTime = 0,
                this.totalMinutesWatched = 0,
                this.hasEnded = !1,
                this.droppedFramePercent = 0,
                this.droppedFrames = 0,
                this.currentlyBuffering = !1,
                this.fullscreen = !1,
                this.qualityUpSwitchCount = 0,
                this.qualityDownSwitchCount = 0,
                this.playedProfiles = {},
                this.profiles = {},
                this.speeds = [],
                this.targetProfiles = {},
                this.targetProfileId = {},
                this.forcedEmbedQuality = "none",
                this.sessionPlaybackDuration = 0,
                this.stayedOnAuto = !0
            }
        }]),
        e
    }(), ks = ["quality", "volume", "captions"], Ss = null, Es = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , i = n.displayTimeout
              , r = void 0 === i ? 0 : i
              , o = n.label
              , a = void 0 === o ? "Alert" : o;
            yn(this, e),
            oe(this),
            this._container = t,
            this._visible = !1,
            this._message = null,
            this._alert = null,
            this._alertLabel = a;
            var s = Math.round(r / 1e3);
            0 !== s && (this._alertLabel = a + " Will be dismissed in " + s + " seconds"),
            this._displayTimer = null,
            this._displayTimeout = r,
            this._renderTemplate(),
            this._attachEvents()
        }
        return _n(e, [{
            key: "show",
            value: function(e) {
                var t = this;
                if (this._visible !== !0) {
                    clearTimeout(this._displayTimer),
                    this._alert.classList.remove("hidden"),
                    this._alert.removeAttribute("hidden"),
                    window.requestAnimationFrame(function() {
                        t._alert.classList.add("in")
                    });
                    var n = this._alert.querySelector("[data-alert-autofocus]") || this._alert;
                    n.focus(),
                    this._visible = !0,
                    this.fire("show", e),
                    0 !== this._displayTimeout && (this._displayTimer = setTimeout(function() {
                        t.hide("timeout")
                    }, this._displayTimeout))
                }
            }
        }, {
            key: "hide",
            value: function(e) {
                var t = this;
                this._visible !== !1 && (clearTimeout(this._displayTimer),
                this._alert.classList.add("leaving"),
                window.requestAnimationFrame(function() {
                    var e = t;
                    t._setHideAttributes(),
                    Tn(t._alert).on("transitionend", function t(n) {
                        "opacity" === n.propertyName && (e._alert.classList.remove("leaving"),
                        e._alert.classList.add("hidden"),
                        e._alert.setAttribute("hidden", ""),
                        Tn(e._alert).off("transitionend", t))
                    })
                }),
                this._visible = !1,
                this.fire("hide", e))
            }
        }, {
            key: "_setHideAttributes",
            value: function() {
                this._alert.classList.remove("in")
            }
        }, {
            key: "_renderTemplate",
            value: function() {
                this._alert || (this._alert = document.createElement("div"),
                this._alert.setAttribute("role", "alertdialog"),
                this._alert.setAttribute("aria-label", this._alertLabel),
                this._alert.setAttribute("aria-atomic", "true"),
                this._alert.classList.add("player-alert"),
                this._alert.classList.add("hidden"),
                this._alert.setAttribute("hidden", ""),
                this._container.appendChild(this._alert),
                this._setHideAttributes()),
                this._message instanceof HTMLElement ? (this._alert.innerHTML = "",
                this._alert.appendChild(this._message)) : (this._alert.textContent = this._message,
                this._alert.innerHTML = this._message);
                var e = document.createElement("button");
                e.setAttribute("data-close", ""),
                e.setAttribute("aria-label", "Close alert"),
                e.classList.add("close"),
                e.innerHTML = Mn.render("icon_close"),
                this._alert.appendChild(e)
            }
        }, {
            key: "_attachEvents",
            value: function() {
                var e = this;
                Tn(this._alert).on("click", "[data-close]", function(t) {
                    e.hide(t)
                })
            }
        }, {
            key: "visible",
            get: function() {
                return this._visible
            }
        }, {
            key: "message",
            get: function() {
                return this._message
            },
            set: function(e) {
                e instanceof HTMLElement && this._message && e.textContent === this._message.textContent || e !== this._message && (this._message = e,
                this._renderTemplate())
            }
        }]),
        e
    }(), Ts = "app.vimeo.com/", xs = "key_live_jpj6Duy53e6MhounkriNljdgsBhGbf0d", Ls = {
        object: !0,
        symbol: !0
    }, Ps = function() {
        var e;
        if ("function" != typeof Symbol)
            return !1;
        e = Symbol("test symbol");
        try {
            String(e)
        } catch (e) {
            return !1
        }
        return !!Ls[typeof Symbol.iterator] && (!!Ls[typeof Symbol.toPrimitive] && !!Ls[typeof Symbol.toStringTag])
    }, As = function() {
        var e, t = Object.assign;
        return "function" == typeof t && (e = {
            foo: "raz"
        },
        t(e, {
            bar: "dwa"
        }, {
            trzy: "trzy"
        }),
        e.foo + e.bar + e.trzy === "razdwatrzy")
    }, Cs = function() {
        try {
            return Object.keys("primitive"),
            !0
        } catch (e) {
            return !1
        }
    }, Os = Object.keys, Rs = function(e) {
        return Os(null == e ? e : Object(e))
    }, Ms = Cs() ? Object.keys : Rs, Is = function(e) {
        if (null == e)
            throw new TypeError("Cannot use null or undefined");
        return e
    }, Fs = Ms, Ds = Is, Bs = Math.max, qs = function(e, t) {
        var n, i, r, o = Bs(arguments.length, 2);
        for (e = Object(Ds(e)),
        r = function(i) {
            try {
                e[i] = t[i]
            } catch (e) {
                n || (n = e)
            }
        }
        ,
        i = 1; i < o; ++i)
            t = arguments[i],
            Fs(t).forEach(r);
        if (void 0 !== n)
            throw n;
        return e
    }, Ns = As() ? Object.assign : qs, js = Array.prototype.forEach, Vs = Object.create, Us = function(e, t) {
        var n;
        for (n in e)
            t[n] = e[n]
    }, Hs = function(e) {
        var t = Vs(null);
        return js.call(arguments, function(e) {
            null != e && Us(Object(e), t)
        }),
        t
    }, Ws = function(e) {
        return "function" == typeof e
    }, zs = "razdwatrzy", Ks = function() {
        return "function" == typeof zs.contains && (zs.contains("dwa") === !0 && zs.contains("foo") === !1)
    }, Gs = String.prototype.indexOf, Xs = function(e) {
        return Gs.call(this, e, arguments[1]) > -1
    }, Ys = Ks() ? String.prototype.contains : Xs, $s = e(function(e) {
        var t, n = Ns, i = Hs, r = Ws, o = Ys;
        t = e.exports = function(e, t) {
            var r, a, s, u, c;
            return arguments.length < 2 || "string" != typeof e ? (u = t,
            t = e,
            e = null) : u = arguments[2],
            null == e ? (r = s = !0,
            a = !1) : (r = o.call(e, "c"),
            a = o.call(e, "e"),
            s = o.call(e, "w")),
            c = {
                value: t,
                configurable: r,
                enumerable: a,
                writable: s
            },
            u ? n(i(u), c) : c
        }
        ,
        t.gs = function(e, t, a) {
            var s, u, c, l;
            return "string" != typeof e ? (c = a,
            a = t,
            t = e,
            e = null) : c = arguments[3],
            null == t ? t = void 0 : r(t) ? null == a ? a = void 0 : r(a) || (c = a,
            a = void 0) : (c = t,
            t = a = void 0),
            null == e ? (s = !0,
            u = !1) : (s = o.call(e, "c"),
            u = o.call(e, "e")),
            l = {
                get: t,
                set: a,
                configurable: s,
                enumerable: u
            },
            c ? n(i(c), l) : l
        }
    }), Qs = function(e) {
        return !!e && ("symbol" == typeof e || !!e.constructor && ("Symbol" === e.constructor.name && "Symbol" === e[e.constructor.toStringTag]))
    }, Js = Qs, Zs = function(e) {
        if (!Js(e))
            throw new TypeError(e + " is not a symbol");
        return e
    }, eu = $s, tu = Zs, nu = Object.create, iu = Object.defineProperties, ru = Object.defineProperty, ou = Object.prototype, au = nu(null);
    if ("function" == typeof Symbol) {
        za = Symbol;
        try {
            String(za()),
            Xa = !0
        } catch (e) {}
    }
    var su = function() {
        var e = nu(null);
        return function(t) {
            for (var n, i, r = 0; e[t + (r || "")]; )
                ++r;
            return t += r || "",
            e[t] = !0,
            n = "@@" + t,
            ru(ou, n, eu.gs(null, function(e) {
                i || (i = !0,
                ru(this, n, eu(e)),
                i = !1)
            })),
            n
        }
    }();
    Ga = function(e) {
        if (this instanceof Ga)
            throw new TypeError("TypeError: Symbol is not a constructor");
        return Ka(e)
    }
    ;
    var uu = Ka = function e(t) {
        var n;
        if (this instanceof e)
            throw new TypeError("TypeError: Symbol is not a constructor");
        return Xa ? za(t) : (n = nu(Ga.prototype),
        t = void 0 === t ? "" : String(t),
        iu(n, {
            __description__: eu("", t),
            __name__: eu("", su(t))
        }))
    }
    ;
    iu(Ka, {
        for: eu(function(e) {
            return au[e] ? au[e] : au[e] = Ka(String(e))
        }),
        keyFor: eu(function(e) {
            var t;
            tu(e);
            for (t in au)
                if (au[t] === e)
                    return t
        }),
        hasInstance: eu("", za && za.hasInstance || Ka("hasInstance")),
        isConcatSpreadable: eu("", za && za.isConcatSpreadable || Ka("isConcatSpreadable")),
        iterator: eu("", za && za.iterator || Ka("iterator")),
        match: eu("", za && za.match || Ka("match")),
        replace: eu("", za && za.replace || Ka("replace")),
        search: eu("", za && za.search || Ka("search")),
        species: eu("", za && za.species || Ka("species")),
        split: eu("", za && za.split || Ka("split")),
        toPrimitive: eu("", za && za.toPrimitive || Ka("toPrimitive")),
        toStringTag: eu("", za && za.toStringTag || Ka("toStringTag")),
        unscopables: eu("", za && za.unscopables || Ka("unscopables"))
    }),
    iu(Ga.prototype, {
        constructor: eu(Ka),
        toString: eu("", function() {
            return this.__name__
        })
    }),
    iu(Ka.prototype, {
        toString: eu(function() {
            return "Symbol (" + tu(this).__description__ + ")"
        }),
        valueOf: eu(function() {
            return tu(this)
        })
    }),
    ru(Ka.prototype, Ka.toPrimitive, eu("", function() {
        var e = tu(this);
        return "symbol" == typeof e ? e : e.toString()
    })),
    ru(Ka.prototype, Ka.toStringTag, eu("c", "Symbol")),
    ru(Ga.prototype, Ka.toStringTag, eu("c", Ka.prototype[Ka.toStringTag])),
    ru(Ga.prototype, Ka.toPrimitive, eu("c", Ka.prototype[Ka.toPrimitive]));
    var cu = Ps() ? Symbol : uu
      , lu = window.WeakMap || function() {
        var e = Object.defineProperty
          , t = Date.now() % 1e9
          , n = function() {
            this.name = "__st" + (1e9 * Math.random() >>> 0) + (t++ + "__")
        };
        return n.prototype.set = function(t, n) {
            if ("object" !== ("undefined" == typeof t ? "undefined" : gn(t)) && "function" != typeof t)
                throw new TypeError("Invalid value used as weak map key");
            var i = t[this.name];
            return i && i[0] === t ? i[1] = n : e(t, this.name, {
                value: [t, n],
                writable: !0
            }),
            this
        }
        ,
        n.prototype.get = function(e) {
            var t;
            return (t = e[this.name]) && t[0] === e ? t[1] : void 0
        }
        ,
        n.prototype.delete = function(e) {
            var t = e[this.name];
            return !(!t || t[0] !== e) && (t[0] = t[1] = void 0,
            !0)
        }
        ,
        n.prototype.has = function(e) {
            var t = e[this.name];
            return !!t && t[0] === e
        }
        ,
        n
    }()
      , du = "function" == typeof cu && "symbol" == typeof cu.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof cu && e.constructor === cu && e !== cu.prototype ? "symbol" : typeof e
    }
      , fu = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , hu = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , vu = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , pu = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === r) {
            var o = Object.getPrototypeOf(t);
            return null === o ? void 0 : e(o, n, i)
        }
        if ("value"in r)
            return r.value;
        var a = r.get;
        if (void 0 !== a)
            return a.call(i)
    }
      , mu = function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
      , gu = function(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
      , yu = function e(t, n, i, r) {
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var a = Object.getPrototypeOf(t);
            null !== a && e(a, n, i, r)
        } else if ("value"in o && o.writable)
            o.value = i;
        else {
            var s = o.set;
            void 0 !== s && s.call(r, i)
        }
        return i
    }
      , _u = function() {
        function e(e, t) {
            var n = []
              , i = !0
              , r = !1
              , o = void 0;
            try {
                for (var a, s = e[cu.iterator](); !(i = (a = s.next()).done) && (n.push(a.value),
                !t || n.length !== t); i = !0)
                    ;
            } catch (e) {
                r = !0,
                o = e
            } finally {
                try {
                    !i && s.return && s.return()
                } finally {
                    if (r)
                        throw o
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t))
                return t;
            if (cu.iterator in Object(t))
                return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , bu = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return mn(e)
    }
      , TelecineError = function TelecineError(e, t) {
        fu(this, TelecineError),
        this.name = e,
        this.message = t,
        Object.freeze(this)
    }
      , wu = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            fu(this, e),
            this._telecine = t,
            this._element = t._element,
            this._options = n
        }
        return hu(e, null, [{
            key: "displayName",
            get: function() {
                return "Effect"
            }
        }, {
            key: "supported",
            get: function() {
                return !1
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return []
            }
        }]),
        hu(e, [{
            key: "activate",
            value: function() {
                throw new TelecineError("NotImplemented","The effect must implement the activate method.")
            }
        }, {
            key: "deactivate",
            value: function() {
                throw new TelecineError("NotImplemented","The effect must implement the deactivate method.")
            }
        }]),
        e
    }()
      , ku = /Firefox/.test(navigator.userAgent)
      , Su = /i(Phone|Pad|Pod touch);/.test(navigator.userAgent)
      , Eu = /Android/.test(navigator.userAgent)
      , Tu = Eu && /mobile/.test(navigator.userAgent.toLowerCase())
      , xu = function() {
        var e = /Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\./
          , t = navigator.userAgent.match(e);
        return !!t && {
            major: t[1],
            minor: t[2]
        }
    }()
      , Lu = {
        firefox: ku,
        iOS: Su,
        android: Eu,
        androidMobile: Tu,
        chrome: xu
    }
      , Pu = function(e) {
        for (var t = 0, n = this.length; t < n; t++)
            if (this[t].id === "" + e)
                return this[t];
        return null
    }
      , Au = function(e, t) {
        if (!e || void 0 === e[t])
            throw ct(1, "INDEX_SIZE_ERR");
        return e[t]
    };
    kt.from = function(e) {
        if (!(e instanceof TimeRanges))
            throw new TypeError("Can only create a TelecineTimeRange from a TimeRanges object.");
        for (var t = [], n = [], i = 0, r = e.length; i < r; i++)
            t.push(e.start(i)),
            n.push(e.end(i));
        return kt(t, n)
    }
    ;
    var Cu = {
        ABORT: "abort",
        CAN_PLAY: "canplay",
        CAN_PLAY_THROUGH: "canplaythrough",
        DURATION_CHANGE: "durationchange",
        EMPTIED: "emptied",
        ENDED: "ended",
        ERROR: "error",
        LOADED_DATA: "loadeddata",
        LOADED_METADATA: "loadedmetadata",
        LOAD_START: "loadstart",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PROGRESS: "progress",
        RATE_CHANGE: "ratechange",
        SEEKED: "seeked",
        SEEKING: "seeking",
        STALLED: "stalled",
        SUSPEND: "suspend",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting",
        WEBKIT_BEGIN_FULLSCREEN: "webkitbeginfullscreen",
        WEBKIT_END_FULLSCREEN: "webkitendfullscreen",
        WEBKIT_PRESENTATION_MODE_CHANGED: "webkitpresentationmodechanged"
    }
      , Ou = {
        AVAILABLE: "externaldisplayavailable",
        UNAVAILABLE: "externaldisplayunavailable",
        ACTIVATED: "externaldisplayactivated",
        DEACTIVATED: "externaldisplaydeactivated"
    }
      , Ru = {
        AIRPLAY_AVAILABLE: "available",
        AIRPLAY_UNAVAILABLE: "unavailable",
        AIRPLAY_ACTIVATED: "activated",
        AIRPLAY_DEACTIVATED: "deactivated"
    }
      , Mu = {
        SCANNER_CHANGE: "scannerchange",
        SCANNER_ERROR: "scannererror",
        FILE_ERROR: "fileerror",
        FILE_SRC_UPDATE: "filesrcupdate",
        DOWNLOAD_END: "downloadend",
        DOWNLOAD_ERROR: "downloaderror",
        DRM_AUTH_FAILURE: "drmauthfailure",
        DRM_AUTH_SUCCESS: "drmauthsuccess",
        DRM_FAILURE: "drmfailure",
        EME_UNSUPPORTED: "emeunsupported",
        CURRENT_FILE_CHANGE: "currentfilechange",
        MEDIA_URL_EXPIRED: "mediaurlexpired",
        STREAM_CHANGE: "streamchange",
        STREAM_BUFFER_START: "streambufferstart",
        STREAM_BUFFER_END: "streambufferend",
        DROPPED_FRAMES: "droppedframes",
        BANDWIDTH: "bandwidth",
        STREAM_TARGET_CHANGE: "streamtargetchange",
        ALERT: "alert",
        PRESENTATION_MODE_CHANGE: "presentationmodechange",
        CUE_POINT: "cuepoint",
        BUFFER_OCCUPANCY: "bufferoccupancy",
        MANIFEST_TIMEOUT: "manifesttimeout",
        MANIFEST_LOADED: "manifestloaded",
        TEXT_SRC_UPDATE: "texttracksrcupdate"
    }
      , Iu = {
        EVENT_PENDING: "liveeventpending",
        EVENT_ACTIVE: "liveeventactive",
        EVENT_STARTING: "liveeventstarting",
        EVENT_STARTED: "liveeventstarted",
        EVENT_ENDED: "liveeventended",
        ARCHIVE_STARTED: "livearchivestarted",
        ARCHIVE_DONE: "livearchivedone",
        ARCHIVE_ERROR: "livearchiveerror",
        STREAM_ONLINE: "livestreamonline",
        STREAM_OFFLINE: "livestreamoffline",
        REPRESENTATIONS_AVAILABLE: "liverepresentationsavailable"
    }
      , Fu = {
        CAMERA_UPDATE: "cameraupdate",
        MOTION_START: "motionstart",
        MOTION_END: "motionend",
        SPATIAL_UNSUPPORTED: "spatialunsupported"
    }
      , Du = Object.assign({}, Cu, Ou, Ru, Mu, Fu, Iu)
      , Bu = function() {
        function e(t) {
            var n = this
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            fu(this, e),
            this._element = t,
            this._options = i,
            this._telecineVideo = null,
            this._currentFile = null,
            this._externalDisplays = [],
            ut(this),
            this.on("play", function() {
                return n._initMediaSession()
            })
        }
        return hu(e, null, [{
            key: "displayName",
            get: function() {
                return "Scanner"
            }
        }, {
            key: "supported",
            get: function() {
                return !1
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                return []
            }
        }, {
            key: "supportedAudioTypes",
            get: function() {
                return []
            }
        }, {
            key: "supportedExternalDisplays",
            get: function() {
                return []
            }
        }, {
            key: "supportsSettingVolume",
            get: function() {
                return !0
            }
        }, {
            key: "supportsTextTracks",
            get: function() {
                return !1
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return !1
            }
        }]),
        hu(e, [{
            key: "deactivate",
            value: function() {
                this._telecineVideo && (this._telecineVideo.off("filesrcupdate"),
                this._telecineVideo.off("texttracksrcupdate"))
            }
        }, {
            key: "reactivate",
            value: function() {}
        }, {
            key: "play",
            value: function() {
                return nn.reject(new TelecineError("NotImplemented","The scanner must implement the play method."))
            }
        }, {
            key: "pause",
            value: function() {
                throw new TelecineError("NotImplemented","The scanner must implement the pause method.")
            }
        }, {
            key: "addTextTrack",
            value: function(e) {
                return this
            }
        }, {
            key: "removeTextTrack",
            value: function(e) {
                return this
            }
        }, {
            key: "getCuesForTrack",
            value: function(e) {
                return []
            }
        }, {
            key: "getActiveCuesForTrack",
            value: function(e) {
                return []
            }
        }, {
            key: "setModeForTrack",
            value: function(e, t) {
                return this
            }
        }, {
            key: "setSrcForTrack",
            value: function(e, t) {
                return this
            }
        }, {
            key: "addCuePoint",
            value: function(e) {
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                throw new TelecineError("CuePointsNotSupported","Cue points are not supported in this scanner.")
            }
        }, {
            key: "removeCuePoint",
            value: function(e) {
                return !1
            }
        }, {
            key: "removeAllCuePoints",
            value: function() {
                return !1
            }
        }, {
            key: "showExternalDisplayPicker",
            value: function(e) {
                if (!this._externalDisplays.length)
                    throw new TelecineError("ExternalDisplayUnvailable","No external displays are available.");
                if (!e)
                    return void this._externalDisplays[0].showPicker();
                var t = this._externalDisplays.filter(function(t) {
                    return t.constructor.displayName.replace("ExternalDisplay", "") === e
                })[0];
                if (!t)
                    throw new TelecineError("InvalidExternalDisplay","The specified external display is not available.");
                t.showPicker()
            }
        }, {
            key: "initDrm",
            value: function() {
                return !1
            }
        }, {
            key: "_pickFile",
            value: function() {
                if (this._files.length < 1)
                    return null;
                var e = this._files.slice(0).sort(function(e, t) {
                    return e.priority - t.priority
                });
                return e[0]
            }
        }, {
            key: "_updateCurrentFile",
            value: function() {
                var e = this._pickFile();
                return e ? void (this.currentFile = e) : void this.fire(Mu.SCANNER_ERROR, {
                    reason: "all files failed"
                })
            }
        }, {
            key: "_switchToNextFile",
            value: function() {
                var e = this._files.indexOf(this._currentFile);
                this._files.splice(e, 1),
                this._updateCurrentFile()
            }
        }, {
            key: "_initMediaSession",
            value: function() {
                var e = this;
                if ("mediaSession"in navigator) {
                    var t = {
                        title: this._telecineVideo.title,
                        artist: this._telecineVideo.subtitle,
                        artwork: []
                    };
                    this._telecineVideo.metadata.thumbnail && t.artwork.push({
                        src: this._telecineVideo.metadata.thumbnail
                    }),
                    navigator.mediaSession.metadata = new MediaMetadata(t),
                    "function" == typeof navigator.mediaSession.setActionHandler && (navigator.mediaSession.setActionHandler("play", function() {
                        return e.play()
                    }),
                    navigator.mediaSession.setActionHandler("pause", function() {
                        return e.pause()
                    }),
                    navigator.mediaSession.setActionHandler("seekforward", function() {
                        e.currentTime = Math.min(e.duration, e.currentTime + 10)
                    }),
                    navigator.mediaSession.setActionHandler("seekbackward", function() {
                        e.currentTime = Math.max(0, e.currentTime - 10)
                    }))
                }
            }
        }, {
            key: "buffered",
            get: function() {
                return kt()
            }
        }, {
            key: "cuePoints",
            get: function() {
                return []
            }
        }, {
            key: "currentFile",
            get: function() {
                return this._currentFile
            },
            set: function(e) {
                this._currentFile = e,
                this.fire(Mu.CURRENT_FILE_CHANGE, e)
            }
        }, {
            key: "currentTime",
            get: function() {
                return 0
            },
            set: function(e) {}
        }, {
            key: "duration",
            get: function() {
                return NaN
            }
        }, {
            key: "ended",
            get: function() {
                return !1
            }
        }, {
            key: "externalDisplayAvailable",
            get: function() {
                return this._externalDisplays.some(function(e) {
                    return e.available
                })
            }
        }, {
            key: "externalDisplayActive",
            get: function() {
                return this._externalDisplays.some(function(e) {
                    return e.active
                })
            }
        }, {
            key: "loop",
            get: function() {
                return !1
            },
            set: function(e) {}
        }, {
            key: "muted",
            get: function() {
                return !1
            },
            set: function(e) {}
        }, {
            key: "paused",
            get: function() {
                return !0
            }
        }, {
            key: "defaultPlaybackRate",
            get: function() {
                return 1
            },
            set: function(e) {}
        }, {
            key: "playbackRate",
            get: function() {
                return 1
            },
            set: function(e) {}
        }, {
            key: "preload",
            get: function() {
                return "none"
            },
            set: function(e) {}
        }, {
            key: "presentationMode",
            get: function() {
                return "inline"
            },
            set: function(e) {
                if (this.supportedPresentationModes.indexOf(e) === -1)
                    throw new TelecineError("InvalidPresentationMode","The â" + e + "â presentation mode is not supported.")
            }
        }, {
            key: "supportedPresentationModes",
            get: function() {
                return ["inline"]
            }
        }, {
            key: "video",
            get: function() {
                return this._telecineVideo
            },
            set: function(e) {
                var t = this;
                if (this.reactivate(),
                this._telecineVideo !== e) {
                    if (this._telecineVideo && (this._telecineVideo.off("filesrcupdate"),
                    this._telecineVideo.off("texttracksrcupdate")),
                    this.removeAllCuePoints(),
                    this._telecineVideo = e,
                    this._files = e.files.filter(function(e) {
                        return t.constructor.supportedVideoTypes.indexOf(e.mime) !== -1
                    }),
                    this._telecineVideo.on("filesrcupdate", function(e) {
                        e === t._currentFile && t._updateCurrentFile()
                    }),
                    this._telecineVideo.on("texttracksrcupdate", function(e) {
                        t.video.currentScanner && t.video.currentScanner.setSrcForTrack(e, e.src)
                    }),
                    this._options.externalDisplays && this._options.externalDisplays.length) {
                        this._externalDisplays = [];
                        var n = this.constructor.supportedExternalDisplays;
                        Array.isArray(n) || (n = []);
                        var i = n.map(function(e) {
                            return e.displayName
                        });
                        this._options.externalDisplays.filter(function(e) {
                            return e.supported && i.indexOf(e.displayName) !== -1
                        }).forEach(function(n) {
                            var i = new n(e)
                              , r = n.displayName.replace("ExternalDisplay", "");
                            i.on("available", function() {
                                return t.fire(Ou.AVAILABLE, {
                                    type: r
                                })
                            }),
                            i.on("unavailable", function() {
                                return t.fire(Ou.UNAVAILABLE, {
                                    type: r
                                })
                            }),
                            i.on("activated", function() {
                                "function" == typeof t.onexternaldisplayactivated && t.onexternaldisplayactivated(i),
                                t.fire(Ou.ACTIVATED, {
                                    type: r
                                })
                            }),
                            i.on("deactivated", function() {
                                "function" == typeof t.onexternaldisplaydeactivated && t.onexternaldisplaydeactivated(i),
                                t.fire(Ou.DEACTIVATED, {
                                    type: r
                                })
                            }),
                            t._externalDisplays.push(i)
                        })
                    }
                    this._updateCurrentFile()
                }
            }
        }, {
            key: "videoWidth",
            get: function() {
                return 0
            }
        }, {
            key: "videoHeight",
            get: function() {
                return 0
            }
        }, {
            key: "volume",
            get: function() {
                return 1
            },
            set: function(e) {}
        }]),
        e
    }()
      , qu = new lu
      , Nu = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            fu(this, e);
            var i = parseFloat(t);
            if (isNaN(i))
                throw new TypeError("Time must be a number.");
            if (i < 0)
                throw new TypeError("Time must be a positive number.");
            this.time = t,
            this.data = n,
            this.id = pt();
            try {
                var r = "undefined" == typeof VTTCue ? TextTrackCue : VTTCue;
                this.vttCue = new r(t,t + .25,JSON.stringify(n)),
                this.vttCue.id = this.id
            } catch (e) {
                throw new TelecineError("CuePointsNotSupported","Cue points are not supported in this browser.")
            }
            qu.set(this.vttCue, this),
            Object.freeze(this)
        }
        return hu(e, null, [{
            key: "fromVTTCue",
            value: function(t) {
                if (qu.has(t))
                    return qu.get(t);
                var n = {};
                try {
                    n = JSON.parse(t.text)
                } catch (e) {}
                return new e(t.startTime,n)
            }
        }]),
        e
    }()
      , ju = function() {
        function e(t) {
            var n = this;
            fu(this, e),
            this._interval = null,
            this._rates = [],
            this._averageRate = 0,
            this._lastChecked = null,
            this._lastLoaded = 0,
            this._scanner = t,
            this._scanner.on("loadstart", function() {
                return n.startInterval()
            }),
            this._scanner.on("progress", function() {
                return n.startInterval()
            }),
            this._scanner.on("ended", function() {
                return n.stopInterval()
            })
        }
        return hu(e, [{
            key: "startInterval",
            value: function() {
                var e = this;
                this._interval || (this._interval = window.setInterval(function() {
                    return e.updateDownloadRate()
                }, 1e3))
            }
        }, {
            key: "stopInterval",
            value: function() {
                window.clearInterval(this._interval)
            }
        }, {
            key: "updateDownloadRate",
            value: function() {
                for (var e = vt(), t = 0, n = this._scanner.buffered, i = Array.isArray(n), r = 0, n = i ? n : n[cu.iterator](); ; ) {
                    var o;
                    if (i) {
                        if (r >= n.length)
                            break;
                        o = n[r++]
                    } else {
                        if (r = n.next(),
                        r.done)
                            break;
                        o = r.value
                    }
                    var a = o
                      , s = _u(a, 2)
                      , u = s[0]
                      , c = s[1];
                    t += c - u
                }
                if (!this._lastChecked)
                    return this._lastChecked = e,
                    void (this._lastLoaded = t);
                if (this._lastLoaded !== t) {
                    var l = Math.max(t - this._lastLoaded, 0);
                    this._rates.push(l),
                    this._rates = this._rates.slice(-15),
                    this._averageRate = this._rates.reduce(function(e, t) {
                        return e + t
                    }) / this._rates.length,
                    this._lastChecked = e,
                    this._lastLoaded = t,
                    Math.round(t) >= Math.round(this._scanner.duration) && this.stopInterval()
                }
            }
        }, {
            key: "averageDownloadRate",
            get: function() {
                return this._averageRate
            }
        }]),
        e
    }()
      , Vu = function() {
        function e(t) {
            fu(this, e),
            this._available = !1,
            this._active = !1,
            this._video = t,
            ut(this)
        }
        return hu(e, null, [{
            key: "displayName",
            get: function() {
                return "ExternalDisplay"
            }
        }, {
            key: "supported",
            get: function() {
                return !1
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                return []
            }
        }]),
        hu(e, [{
            key: "showPicker",
            value: function() {}
        }, {
            key: "getFile",
            value: function() {
                var e = this.constructor.displayName.replace("ExternalDisplay", "");
                if (this._video.externalDisplayFiles[e])
                    return this._video.externalDisplayFiles[e];
                var t = this.constructor.supportedVideoTypes
                  , n = this._video.files.filter(function(e) {
                    return t.indexOf(e.mime) !== -1
                }).sort(function(e, n) {
                    return e.mime === n.mime ? e.priority - n.priority : t.indexOf(e.mime) - t.indexOf(n.mime)
                });
                if (!n.length)
                    throw new Error("No files available for " + this.constructor.displayName + " external display.");
                return n[0]
            }
        }, {
            key: "active",
            get: function() {
                return this._active
            }
        }, {
            key: "available",
            get: function() {
                return this._available
            }
        }, {
            key: "element",
            get: function() {
                return document.createElement("div")
            }
        }]),
        e
    }()
      , AirPlayExternalDisplay = function(e) {
        function AirPlayExternalDisplay(e) {
            fu(this, AirPlayExternalDisplay);
            var t = gu(this, (AirPlayExternalDisplay.__proto__ || Object.getPrototypeOf(AirPlayExternalDisplay)).call(this, e));
            return t._videoElement = document.createElement("video"),
            t._videoElement.setAttribute("data-airplay", ""),
            t._videoElement.setAttribute("x-webkit-airplay", "allow"),
            t.addVideoEventListeners(),
            t
        }
        return mu(AirPlayExternalDisplay, e),
        hu(AirPlayExternalDisplay, null, [{
            key: "displayName",
            get: function() {
                return "AirPlayExternalDisplay"
            }
        }, {
            key: "supported",
            get: function() {
                return "WebKitPlaybackTargetAvailabilityEvent"in window
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                return ["application/vnd.apple.mpegurl", "video/mp4"]
            }
        }]),
        hu(AirPlayExternalDisplay, [{
            key: "addVideoEventListeners",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._videoElement;
                t.addEventListener("webkitplaybacktargetavailabilitychanged", function(t) {
                    switch (t.availability) {
                    case "available":
                        e._available || (e._available = !0,
                        e.fire(Ru.AIRPLAY_AVAILABLE));
                        break;
                    case "not-available":
                        e._available && (e._available = !1,
                        e.fire(Ru.AIRPLAY_UNAVAILABLE))
                    }
                }),
                t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", function(t) {
                    return t.target.webkitCurrentPlaybackTargetIsWireless ? (e._active = !0,
                    void e.fire(Ru.AIRPLAY_ACTIVATED)) : (e._active = !1,
                    void e.fire(Ru.AIRPLAY_DEACTIVATED))
                })
            }
        }, {
            key: "showPicker",
            value: function() {
                var e = this;
                this._videoElement.webkitShowPlaybackTargetPicker(),
                this.loadMetadata().then(function() {
                    return e._videoElement.webkitShowPlaybackTargetPicker()
                }).catch(function() {})
            }
        }, {
            key: "loadMetadata",
            value: function() {
                var e = this;
                return this._videoElement.readyState >= 1 ? nn.resolve() : new nn(function(t, n) {
                    e._videoElement.addEventListener("loadedmetadata", function() {
                        t()
                    }),
                    e._videoElement.src = e.getFile().src
                }
                )
            }
        }, {
            key: "element",
            get: function() {
                return this._videoElement
            },
            set: function(e) {
                if (!(e instanceof HTMLVideoElement))
                    throw new TypeError("The element for AirPlay must be a <video>.");
                e !== this._videoElement && (this.addVideoEventListeners(e),
                this._videoElement = e,
                this._videoElement.setAttribute("x-webkit-airplay", "allow"))
            }
        }]),
        AirPlayExternalDisplay
    }(Vu)
      , Uu = document.createElement("video")
      , Hu = {
        "application/vnd.apple.mpegurl": "application/vnd.apple.mpegurl",
        "video/mp4": 'video/mp4; codecs="avc1.64001E"',
        "video/webm": 'video/webm; codecs="vp8, vorbis"',
        "video/x-flv": 'video/x-flv; codecs="vp6"'
    }
      , Wu = function() {
        var e = "undefined" == typeof TextTrack ? {} : TextTrack;
        return {
            disabled: "DISABLED"in e ? e.DISABLED : "disabled",
            hidden: "HIDDEN"in e ? e.HIDDEN : "hidden",
            showing: "SHOWING"in e ? e.SHOWING : "showing"
        }
    }()
      , zu = function() {
        var e = document.createElement("track");
        return "track"in e && "oncuechange"in e.track
    }()
      , Ku = new lu
      , Gu = 0
      , Xu = 1
      , Yu = 2
      , $u = 3
      , Qu = 4
      , Ju = function(e) {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            fu(this, t);
            var i = gu(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
              , r = e.querySelector("video");
            return r || (r = document.createElement("video"),
            r.preload = "none",
            i._element.appendChild(r)),
            i._video = r,
            n.htmlScanner && n.htmlScanner.controls && (i._video.controls = !0),
            i._boundHandleVideoEvent = i.handleVideoEvent.bind(i),
            i.addVideoEventListeners(),
            i._downloadRate = new ju(i),
            i._bufferTimer = null,
            i._readyState = Gu,
            i._paused = !0,
            i._preload = "none",
            i._externalDisplayActivated = !1,
            i._inFullscreen = !1,
            i
        }
        return mu(t, e),
        hu(t, null, [{
            key: "displayName",
            get: function() {
                return "HTMLScanner"
            }
        }, {
            key: "supported",
            get: function() {
                return t.supportedVideoTypes.length > 0
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                var e = [];
                if ("function" != typeof Uu.canPlayType)
                    return e;
                for (var t in Hu) {
                    var n = Hu[t];
                    Lu.android && "application/vnd.apple.mpegurl" === t || (!Lu.android || Lu.androidMobile || "video/mp4" !== t ? Uu.canPlayType(n).replace(/^no$/, "") && e.push(t) : e.push(t))
                }
                return e
            }
        }, {
            key: "supportedExternalDisplays",
            get: function() {
                return [AirPlayExternalDisplay]
            }
        }, {
            key: "supportsSettingVolume",
            get: function() {
                if (Lu.android)
                    return !1;
                var e = Uu.volume;
                return Uu.volume = .5 * e,
                Uu.volume !== e
            }
        }, {
            key: "supportsTextTracks",
            get: function() {
                return "undefined" != typeof Uu.textTracks && Uu.textTracks instanceof TextTrackList
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                if (Lu.android && Lu.chrome && Lu.chrome.major < 52)
                    return !1;
                var e = Uu.playbackRate;
                Uu.playbackRate = .5 * e;
                var t = e !== Uu.playbackRate;
                return Uu.playbackRate = e,
                t
            }
        }]),
        hu(t, [{
            key: "deactivate",
            value: function() {
                pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deactivate", this).call(this),
                this.removeVideoEventListeners(),
                this.removeSnapshot(),
                this._video.style.display = "none"
            }
        }, {
            key: "reactivate",
            value: function() {
                pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "reactivate", this).call(this),
                this.addVideoEventListeners(),
                this._video.style.display = ""
            }
        }, {
            key: "addVideoEventListeners",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._video;
                Object.keys(Cu).forEach(function(n) {
                    var i = Cu[n];
                    t.addEventListener(i, e._boundHandleVideoEvent)
                })
            }
        }, {
            key: "removeVideoEventListeners",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._video;
                Object.keys(Cu).forEach(function(n) {
                    var i = Cu[n];
                    t.removeEventListener(i, e._boundHandleVideoEvent)
                })
            }
        }, {
            key: "play",
            value: function() {
                var e = this;
                this._video.preload = "",
                this._paused = !1;
                var t = this._video.play();
                return t instanceof nn ? t : new nn(function(t, n) {
                    e._video.addEventListener("playing", function() {
                        return t()
                    })
                }
                )
            }
        }, {
            key: "pause",
            value: function() {
                this._paused = !0,
                this._video.pause()
            }
        }, {
            key: "addTextTrack",
            value: function(e) {
                var n = this
                  , i = document.createElement("track");
                i.id = "telecine-track-" + e.id,
                i.src = e.src,
                i.kind = e.kind,
                i.srclang = e.language,
                i.label = e.label,
                i.addEventListener("cuechange", function() {
                    return e.dispatchEvent("cuechange")
                }),
                this._video.addEventListener("timeupdate", function() {
                    n._video.webkitDisplayingFullscreen && (e.mode = i.track.mode)
                });
                var r = function() {
                    var t = Lu.iOS && n._video.webkitDisplayingFullscreen;
                    return e._modeHasBeenSet && !t ? void (i.track.mode = Wu[e.mode]) : void (e.mode = i.track.mode)
                }
                  , o = [];
                if (i.addEventListener("load", r),
                ["loadeddata", "seeking"].forEach(function(e) {
                    n._video.addEventListener(e, r),
                    o.push([e, r])
                }),
                e._modeHasBeenSet && (i.track.mode = Wu[e.mode]),
                !zu) {
                    var a = []
                      , s = function() {
                        var t = i.track;
                        if (t && "disabled" !== Wu[t.mode]) {
                            if (a.length !== t.activeCues.length)
                                return e.dispatchEvent("cuechange"),
                                void (a = mn(t.activeCues));
                            for (var n = 0, r = t.activeCues.length; n < r; n++)
                                if (t.activeCues[n].startTime !== a[n].startTime)
                                    return e.dispatchEvent("cuechange"),
                                    void (a = mn(t.activeCues))
                        }
                    };
                    this._video.addEventListener("timeupdate", s),
                    o.push(["timeupdate", s])
                }
                return _t(function() {
                    return n._video.appendChild(i)
                }),
                Ku.set(e, o),
                pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addTextTrack", this).call(this, e)
            }
        }, {
            key: "removeTextTrack",
            value: function(e) {
                var n = this
                  , i = this._video.querySelector("#telecine-track-" + e.id);
                i && this._video.removeChild(i);
                var r = Ku.get(e);
                return Array.isArray(r) && r.forEach(function(e) {
                    var t = _u(e, 2)
                      , i = t[0]
                      , r = t[1];
                    n._video.removeEventListener(i, r)
                }),
                pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "removeTextTrack", this).call(this, e)
            }
        }, {
            key: "getCuesForTrack",
            value: function(e) {
                var n = this.getTrackById("telecine-track-" + e.id);
                return n ? mn(n.cues) : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getCuesForTrack", this).call(this, e)
            }
        }, {
            key: "getActiveCuesForTrack",
            value: function(e) {
                var n = this.getTrackById("telecine-track-" + e.id);
                return n ? mn(n.activeCues) : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getActiveCuesForTrack", this).call(this, e)
            }
        }, {
            key: "setModeForTrack",
            value: function(e, n) {
                var i = this.getTrackById("telecine-track-" + e.id);
                return i && i.mode !== Wu[n] && (i.mode = Wu[n],
                zu || "disabled" === n || e.dispatchEvent("cuechange")),
                pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setModeForTrack", this).call(this, e, n)
            }
        }, {
            key: "setSrcForTrack",
            value: function(e, n) {
                var i = this._video.querySelector("#telecine-track-" + e.id);
                return i && null === i.track.cues && (i.src = n),
                pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setSrcForTrack", this).call(this, e, n)
            }
        }, {
            key: "addCuePoint",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (this._cuePointTrack || (this._cuePointTrack = this._video.addTextTrack("metadata"),
                this._cuePointTrack.mode = "hidden",
                this._cuePointTrack.addEventListener("cuechange", function(e) {
                    [].concat(bu(e.target.activeCues)).forEach(function(e) {
                        t.fire(Mu.CUE_POINT, Nu.fromVTTCue(e))
                    })
                })),
                e = parseFloat(e),
                isNaN(e))
                    throw new TypeError("Time must be a number.");
                if (e < 0 || e >= this.duration)
                    throw new TypeError("Time must be a positive number less than the duration of the video.");
                var i = new Nu(e,n);
                return this._cuePointTrack.addCue(i.vttCue),
                i
            }
        }, {
            key: "removeCuePoint",
            value: function(e) {
                if (!e)
                    throw new TelecineError("InvalidCuePoint","The specified cue point is not valid.");
                return this._cuePointTrack.removeCue(e.vttCue),
                !0
            }
        }, {
            key: "removeAllCuePoints",
            value: function() {
                var e = this;
                return this._cuePointTrack && this._cuePointTrack.length && [].concat(bu(this._cuePointTrack.cues)).forEach(function(t) {
                    e._cuePointTrack.removeCue(t)
                }),
                !0
            }
        }, {
            key: "oncanplay",
            value: function() {
                return !1
            }
        }, {
            key: "oncanplaythrough",
            value: function() {
                return !1
            }
        }, {
            key: "onerror",
            value: function() {
                if (!this._video.error)
                    return !1;
                switch (this._video.error.code) {
                case this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    return this.fire(Cu.ERROR, new TelecineError("MediaSrcNotSupportedError","The media was not suitable.")),
                    this._switchToNextFile(),
                    !1;
                case this._video.error.MEDIA_ERR_DECODE:
                    return this.fire(Cu.ERROR, new TelecineError("MediaDecodeError","The media could not be decoded.")),
                    this._switchToNextFile(),
                    !1;
                case this._video.error.MEDIA_ERR_NETWORK:
                    return this.fire(Cu.ERROR, new TelecineError("MediaNetworkError","A network error ocurred while fetching the media.")),
                    !1;
                case this._video.error.MEDIA_ERR_ABORTED:
                    return this.fire(Cu.ERROR, new TelecineError("MediaAbortedError","The user agent aborted the fetching of the media.")),
                    !1;
                default:
                    return this.fire(Cu.ERROR, new TelecineError("MediaUnknownError","An unknown error occurred.")),
                    !1
                }
            }
        }, {
            key: "onloadedmetadata",
            value: function() {
                this.readyState = Xu
            }
        }, {
            key: "onloadeddata",
            value: function() {
                this.readyState = Yu
            }
        }, {
            key: "onsuspend",
            value: function() {
                this.updateReadyState()
            }
        }, {
            key: "onplay",
            value: function() {
                return this._ignorePlayEvent ? (this._ignorePlayEvent = !1,
                !1) : void (("picture-in-picture" === this.presentationMode || "fullscreen" === this.presentationMode || this._inFullscreen) && (this._paused = !1))
            }
        }, {
            key: "onpause",
            value: function() {
                return window.clearTimeout(this._bufferTimer),
                this._ignorePauseEvent ? (this._ignorePauseEvent = !1,
                !1) : void (("picture-in-picture" === this.presentationMode || "fullscreen" === this.presentationMode || this._inFullscreen) && (this._paused = !0))
            }
        }, {
            key: "onended",
            value: function() {
                if (this._paused = !0,
                this._video.paused || this._video.pause(),
                this.currentTime < this._video.duration)
                    return !1
            }
        }, {
            key: "onprogress",
            value: function() {
                this.updateReadyState()
            }
        }, {
            key: "ontimeupdate",
            value: function() {
                var e = this
                  , t = ht(this.buffered, this.currentTime)
                  , n = _u(t, 2)
                  , i = n[1]
                  , r = 1e3 * (i - this.currentTime);
                if (!Lu.firefox && (r < .25 && this.currentTime + r < this.duration && (this.readyState = Yu),
                window.clearTimeout(this._bufferTimer),
                !this.paused)) {
                    for (var o = 0, a = this.buffered, s = Array.isArray(a), u = 0, a = s ? a : a[cu.iterator](); ; ) {
                        var c;
                        if (s) {
                            if (u >= a.length)
                                break;
                            c = a[u++]
                        } else {
                            if (u = a.next(),
                            u.done)
                                break;
                            c = u.value
                        }
                        var l = c
                          , d = _u(l, 2)
                          , f = d[0]
                          , h = d[1];
                        o += h - f
                    }
                    o >= this.duration || (this._bufferTimer = window.setTimeout(function() {
                        e._video.paused || e.readyState > Yu && (e.readyState = Yu)
                    }, 1500))
                }
            }
        }, {
            key: "onwaiting",
            value: function() {
                return Lu.firefox && (this.readyState = Yu),
                !1
            }
        }, {
            key: "onemptied",
            value: function() {
                this._readyState = Gu
            }
        }, {
            key: "onseeked",
            value: function() {
                this.readyState < Yu && (this.readyState = Yu),
                this.updateReadyState()
            }
        }, {
            key: "onwebkitbeginfullscreen",
            value: function() {
                this._inFullscreen = !0
            }
        }, {
            key: "onwebkitendfullscreen",
            value: function() {
                this._inFullscreen = !1,
                this._video.paused && (this._paused = !0)
            }
        }, {
            key: "onwebkitpresentationmodechanged",
            value: function() {
                switch (this._video.webkitPresentationMode) {
                case "picture-in-picture":
                    this._video.controls = !0;
                    break;
                case "inline":
                    var e = this._options.htmlScanner && this._options.htmlScanner.controls;
                    e || (this._video.controls = !1)
                }
                this.fire(Mu.PRESENTATION_MODE_CHANGE, this._video.webkitPresentationMode)
            }
        }, {
            key: "shouldHandleVideoEvent",
            value: function(e) {
                return !0
            }
        }, {
            key: "handleVideoEvent",
            value: function(e) {
                e.target === this._video && this.shouldHandleVideoEvent(e) !== !1 && ("function" == typeof this["on" + e.type] && this["on" + e.type](e) === !1 || this.fire(e.type))
            }
        }, {
            key: "swapVideo",
            value: function(e, t) {
                var n = e.paused;
                this.removeVideoEventListeners(e),
                e.parentElement.replaceChild(t, e),
                e.pause(),
                t.currentTime = e.currentTime,
                n || t.play(),
                this.addVideoEventListeners(t),
                this._video = t
            }
        }, {
            key: "onexternaldisplayactivated",
            value: function(e) {
                this._externalDisplayActivated || (this._video !== e.element && (this._originalVideo = this._video,
                this.swapVideo(this._video, e.element)),
                this._externalDisplayActivated = !0)
            }
        }, {
            key: "onexternaldisplaydeactivated",
            value: function(e) {
                this._externalDisplayActivated && (this._originalVideo && (this.swapVideo(e.element, this._originalVideo),
                this._originalVideo = null),
                this._externalDisplayActivated = !1)
            }
        }, {
            key: "setVideoSrc",
            value: function(e) {
                this._video.src = e
            }
        }, {
            key: "canSeekTo",
            value: function(e) {
                var t = this.duration;
                if (t && e > t && (e = t),
                this._video.seekable.length > 0)
                    for (var n = 0, i = this._video.seekable.length; n < i; n++)
                        if (this._video.seekable.start(n) <= e && this._video.seekable.end(n) >= e)
                            return !0;
                return !1
            }
        }, {
            key: "seekToTime",
            value: function(e) {
                var t = this;
                return this.canSeekTo(e) ? (ht(this.buffered, e).length || (this.readyState = Xu),
                this._video.currentTime = e,
                nn.resolve(this._video.currentTime)) : new nn(function(n, i) {
                    var r = function i() {
                        t.canSeekTo(e) && (Object.keys(Cu).forEach(function(e) {
                            var n = Cu[e];
                            t._video.removeEventListener(n, i)
                        }),
                        ht(t.buffered, e).length || (t.readyState = Xu),
                        t._video.currentTime = e,
                        n(t._video.currentTime))
                    };
                    Object.keys(Cu).forEach(function(e) {
                        var n = Cu[e];
                        t._video.addEventListener(n, r)
                    })
                }
                )
            }
        }, {
            key: "takeSnapshot",
            value: function() {
                var e = this._element.querySelector("[telecine-snapshot]");
                e || (e = document.createElement("canvas"),
                e.setAttribute("telecine-snapshot", ""),
                this._element.appendChild(e)),
                e.setAttribute("width", this._element.clientWidth + "px"),
                e.setAttribute("height", this._element.clientHeight + "px"),
                e.style.display = "";
                var t = bt(this._video.clientWidth, this._video.clientHeight, this._video.videoWidth, this._video.videoHeight)
                  , n = t.width
                  , i = t.height
                  , r = t.left
                  , o = t.top;
                e.style.cssText = "position:absolute;width:" + n + "px;height:" + i + "px;left:" + r + "px;top:" + o + "px";
                var a = e.getContext("2d");
                a.drawImage(this._video, 0, 0, e.width, e.height)
            }
        }, {
            key: "removeSnapshot",
            value: function() {
                var e = this._element.querySelector("[telecine-snapshot]");
                e && (e.style.display = "none")
            }
        }, {
            key: "getTrackById",
            value: function(e) {
                if ("function" == typeof this._video.textTracks.getTrackById)
                    return this._video.textTracks.getTrackById(e);
                var t = document.getElementById(e);
                return t ? t.track : null
            }
        }, {
            key: "updateReadyState",
            value: function() {
                if (this.buffered.length) {
                    var e = this.duration - this.buffered.end(this.buffered.length - 1)
                      , t = e / this._downloadRate.averageDownloadRate
                      , n = this.duration - this.currentTime;
                    if (isFinite(t)) {
                        var i = ht(this.buffered, this.currentTime)
                          , r = _u(i, 2)
                          , o = r[1]
                          , a = o - this.currentTime;
                        t < n ? this.readyState = Qu : this.readyState === Qu && t > n ? this.readyState = $u : a > 2 && (t <= n / 2 || a > 10) && (this.readyState = $u)
                    }
                }
            }
        }, {
            key: "initDrm",
            value: function() {
                var e = this._telecineVideo.drmHandler;
                e && e.init(this)
            }
        }, {
            key: "buffered",
            get: function() {
                return kt.from(this._video.buffered)
            }
        }, {
            key: "cuePoints",
            get: function() {
                return this._cuePointTrack ? [].concat(bu(this._cuePointTrack.cues)).map(function(e) {
                    return Nu.fromVTTCue(e)
                }) : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "cuePoints", this)
            }
        }, {
            key: "currentFile",
            get: function() {
                return pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "currentFile", this)
            },
            set: function(e) {
                var n = this
                  , i = !this._video.paused
                  , r = this.currentTime
                  , o = !this._currentFile || e.video.id !== this._currentFile.video.id;
                if (o || this.takeSnapshot(),
                this._ignorePlayEvent = !1,
                this._ignorePauseEvent = !1,
                this._currentFile = e,
                o && (this._video.preload = this._preload),
                this.constructor === t && this._video.readyState > Gu && (this._video.currentTime = 0),
                (Lu.iOS || Lu.android) && this._currentFile.video.title) {
                    var a = this._currentFile.video.title;
                    this._currentFile.video.subtitle && (a = a + " " + this._currentFile.video.subtitle),
                    this._video.setAttribute("title", a)
                } else
                    this._video.removeAttribute("title");
                this._readyState = Gu,
                this.setVideoSrc(this._currentFile.src, o),
                this.fire(Mu.CURRENT_FILE_CHANGE, e),
                this.constructor !== t || o ? i && (this._video.preload = "",
                this._video.play()) : (this._video.preload = "",
                this.seekToTime(r).then(function(e) {
                    return i && n._video.play(),
                    e
                }).catch(function() {}),
                this.once("canplay", function() {
                    return n.removeSnapshot()
                }),
                this.once("playing", function() {
                    return n.removeSnapshot()
                }))
            }
        }, {
            key: "currentTime",
            get: function() {
                return this._video.currentTime
            },
            set: function(e) {
                this.seekToTime(e)
            }
        }, {
            key: "duration",
            get: function() {
                return this._video.duration
            }
        }, {
            key: "ended",
            get: function() {
                return this._video.ended
            }
        }, {
            key: "loop",
            get: function() {
                return this._video.loop
            },
            set: function(e) {
                this._video.loop = e
            }
        }, {
            key: "muted",
            get: function() {
                return this._video.muted
            },
            set: function(e) {
                this._video.muted = e
            }
        }, {
            key: "paused",
            get: function() {
                return this._paused
            }
        }, {
            key: "defaultPlaybackRate",
            get: function() {
                return this._video.defaultPlaybackRate
            },
            set: function(e) {
                this._video.defaultPlaybackRate = e
            }
        }, {
            key: "playbackRate",
            get: function() {
                return this._video.playbackRate
            },
            set: function(e) {
                this._video.playbackRate = e
            }
        }, {
            key: "preload",
            get: function() {
                return this._preload
            },
            set: function(e) {
                this._video.preload = e,
                this._preload = e
            }
        }, {
            key: "presentationMode",
            get: function() {
                return this._video.webkitPresentationMode ? this._video.webkitPresentationMode : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "presentationMode", this)
            },
            set: function(e) {
                yu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "presentationMode", e, this),
                "function" == typeof this._video.webkitSetPresentationMode && this._video.webkitSetPresentationMode(e),
                "inline" === e && (this._video.setAttribute("playsinline", ""),
                this._video.setAttribute("webkit-playsinline", ""))
            }
        }, {
            key: "supportedPresentationModes",
            get: function() {
                var e = pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "supportedPresentationModes", this);
                return "function" == typeof this._video.webkitSupportsPresentationMode && this._video.webkitSupportsPresentationMode("picture-in-picture") && e.push("picture-in-picture"),
                e
            }
        }, {
            key: "video",
            get: function() {
                return this._telecineVideo
            },
            set: function(e) {
                var n = this;
                yu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "video", e, this),
                Lu.iOS && this._externalDisplays.forEach(function(e) {
                    "AirPlay" === e.constructor.displayName && (e.element = n._video)
                }),
                this.initDrm()
            }
        }, {
            key: "videoWidth",
            get: function() {
                return this._video.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                return this._video.videoHeight
            }
        }, {
            key: "volume",
            get: function() {
                return this._video.volume
            },
            set: function(e) {
                this._video.volume = e
            }
        }, {
            key: "readyState",
            get: function() {
                return this._readyState
            },
            set: function(e) {
                if (this._readyState !== e && !(this._video.readyState === Xu && e > Xu)) {
                    var t = this._readyState;
                    this._readyState = e,
                    t >= $u && e <= Yu && (this.fire(Cu.WAITING),
                    this._video.paused || (this._ignorePauseEvent = !0,
                    this._video.pause())),
                    t <= Yu && e === $u && (this.fire(Cu.CAN_PLAY),
                    this._paused === !1 && this._video.play()),
                    e === Qu && (t <= Yu && (this.fire(Cu.CAN_PLAY),
                    this._paused === !1 && this._video.paused && (this._ignorePlayEvent = !0,
                    this._video.play())),
                    this.fire(Cu.CAN_PLAY_THROUGH))
                }
            }
        }]),
        t
    }(Bu)
      , Zu = "function" == typeof cu && "symbol" == typeof cu.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof cu && e.constructor === cu && e !== cu.prototype ? "symbol" : typeof e
    }
      , ec = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , tc = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , nc = function() {
        function e(e, t) {
            var n = []
              , i = !0
              , r = !1
              , o = void 0;
            try {
                for (var a, s = e[cu.iterator](); !(i = (a = s.next()).done) && (n.push(a.value),
                !t || n.length !== t); i = !0)
                    ;
            } catch (e) {
                r = !0,
                o = e
            } finally {
                try {
                    !i && s.return && s.return()
                } finally {
                    if (r)
                        throw o
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t))
                return t;
            if (cu.iterator in Object(t))
                return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , ic = []
      , rc = []
      , oc = []
      , ac = function() {
        function e() {
            var t = this
              , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , i = n.retryCount
              , r = void 0 === i ? 3 : i
              , o = n.parallel
              , a = void 0 === o ? 1 : o
              , s = n.includeWithSpeeds
              , u = void 0 === s || s;
            ec(this, e),
            this._queue = [],
            this._activeXhrRequests = new Set,
            this._retries = new lu,
            this._retryCount = r,
            this._running = !1,
            this._processingQueue = !1,
            this._parallel = a,
            this._includeWithSpeeds = u,
            this._pendingFetchMap = new lu,
            Lt(this),
            window.addEventListener("online", function() {
                t.start()
            }),
            window.addEventListener("offline", function() {
                t.stop(),
                t.abort()
            })
        }
        return tc(e, null, [{
            key: "getPercentileSpeed",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .8
                  , n = ic.slice(-e);
                return Et(n, t)
            }
        }, {
            key: "getAverageSpeed",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , n = ic.slice(-e);
                return St(n, t)
            }
        }, {
            key: "getMedianSpeed",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5
                  , t = ic.slice(-e);
                return Tt(t)
            }
        }, {
            key: "getResponseSpeeds",
            value: function() {
                return ic
            }
        }, {
            key: "getFailedSegments",
            value: function() {
                return rc
            }
        }, {
            key: "getSuccessfulSegments",
            value: function() {
                return oc
            }
        }, {
            key: "getTime",
            value: function() {
                return "undefined" != typeof performance ? performance.now() : (new Date).getTime()
            }
        }, {
            key: "calculateExponentialBackoff",
            value: function(e) {
                return 500 * Math.pow(2, e) + Math.round(1e3 * Math.random())
            }
        }]),
        tc(e, [{
            key: "add",
            value: function(e, t, n) {
                return this._addSegmentToQueue(e, t, n),
                this._running && !this._processingQueue && this._processQueue(),
                this
            }
        }, {
            key: "start",
            value: function() {
                return this._running ? this : (this._running = !0,
                this._processQueue(),
                this)
            }
        }, {
            key: "stop",
            value: function() {
                return this._running = !1,
                this
            }
        }, {
            key: "abort",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , n = this._queue.filter(function(e) {
                    return !t || t === e[0].stream
                });
                n.forEach(function(t) {
                    var n = e._getIdentifierFromData(t)
                      , i = nc(n, 3)
                      , r = i[2];
                    e.fire("downloadabort", r)
                }),
                this._queue = this._queue.filter(function(e) {
                    return t && t !== e[0].stream
                }),
                this._activeXhrRequests.forEach(function(e) {
                    t && t !== e.stream || e.abort()
                })
            }
        }, {
            key: "_insertAtPosition",
            value: function(e, t) {
                for (var n = 0; n < this._queue.length; n++) {
                    var i = this._queue[n][0].priority;
                    if (i > e.priority)
                        break
                }
                this._queue.splice(n, 0, [e, t])
            }
        }, {
            key: "_addSegmentToQueue",
            value: function(e, t, n) {
                return e.hasOwnProperty("priority") ? void this._insertAtPosition(e, t) : void this._queue[n ? "unshift" : "push"]([e, t])
            }
        }, {
            key: "_processQueue",
            value: function() {
                if (this._running) {
                    this._processingQueue = !0;
                    for (var e = this._parallel - this._activeXhrRequests.size, t = 0; t < e; t++)
                        this._fetchOne()
                }
            }
        }, {
            key: "_retry",
            value: function(t, n, i) {
                var r = this
                  , o = n[0]
                  , a = n[1];
                if (this._retries.get(o) || this._retries.set(o, 0),
                this._retries.set(o, this._retries.get(o) + 1),
                this._retries.get(o) > this._retryCount)
                    return void this._handleDownloadError(i, t.status, t.data.url, t.data.duration);
                var s = e.calculateExponentialBackoff(this._retries.get(o));
                setTimeout(function() {
                    var e = !0;
                    r.add(o, a, e)
                }, s)
            }
        }, {
            key: "_handleXHRResponse",
            value: function(e, t, n, i) {
                return e.status >= 500 && e.status < 600 ? void this._retry(e, t, n) : e.status >= 400 && e.status < 500 ? void this._handleDownloadError(n, e.status, e.data.url, e.data.duration) : (this.fire("downloadend", n, {
                    headers: xt(e.getAllResponseHeaders())
                }),
                oc.push({
                    url: e.data.url,
                    status: e.status,
                    duration: e.data.duration
                }),
                void i.call(this, new Uint8Array(e.response)))
            }
        }, {
            key: "_handleDownloadError",
            value: function(e, t, n, i) {
                rc.push({
                    url: n,
                    status: t,
                    duration: i
                }),
                this.fire("downloaderror", e, t)
            }
        }, {
            key: "_getIdentifierFromData",
            value: function(e) {
                var t = e[1]
                  , n = e[0]
                  , i = n;
                return n.id && (i = n.id),
                [n.url, n.byteRange, i, t]
            }
        }, {
            key: "_continueProcessingQueue",
            value: function() {
                return 0 === this._activeXhrRequests.size && 0 === this._queue.length ? void (this._processingQueue = !1) : void (this._activeXhrRequests.size < this._parallel && this._processQueue())
            }
        }, {
            key: "_fetchOne",
            value: function() {
                var t = this;
                if (0 === this._queue.length)
                    return void (this._processingQueue = !1);
                var n = null
                  , i = this._queue.shift()
                  , r = this._getIdentifierFromData(i)
                  , o = nc(r, 4)
                  , a = o[0]
                  , s = o[1]
                  , u = o[2]
                  , c = o[3]
                  , l = i[0].includeWithBandwidthChecks
                  , d = e.getTime()
                  , f = new XMLHttpRequest;
                f.stream = i[0].stream,
                f.data = {},
                f.data.url = a,
                f.addEventListener("progress", function(e) {
                    e.lengthComputable && t._pendingFetchMap.set(f, {
                        bytesTotal: e.total,
                        bytesLoaded: e.loaded,
                        percent: e.loaded / e.total,
                        identifier: u
                    })
                }),
                f.open("GET", a, !0),
                f.responseType = "arraybuffer",
                s && f.setRequestHeader("Range", "bytes=" + s),
                f.onload = function(r) {
                    var o = Date.now() - n;
                    f.data.duration = o,
                    t._activeXhrRequests.delete(f),
                    t._pendingFetchMap.delete(f);
                    var a = (e.getTime() - d) / 1e3
                      , s = r.target.response.byteLength;
                    if (s > 40960) {
                        var h = 8 * s
                          , v = h / a;
                        ic.length > 100 && ic.shift(),
                        t._includeWithSpeeds && l && ic.push(v)
                    }
                    t._handleXHRResponse(f, i, u, c),
                    t._continueProcessingQueue()
                }
                ,
                f.onerror = function() {
                    var e = Date.now() - n;
                    f.data.duration = e,
                    t._activeXhrRequests.delete(f),
                    t._pendingFetchMap.delete(f),
                    t._retry(f, i, u),
                    t._continueProcessingQueue()
                }
                ,
                f.onabort = function() {
                    var e = Date.now() - n;
                    f.data.duration = e,
                    rc.push({
                        url: a,
                        status: "abort",
                        duration: e
                    }),
                    t._pendingFetchMap.delete(f),
                    t._activeXhrRequests.delete(f),
                    t.fire("downloadabort", u),
                    0 === t._activeXhrRequests.size && 0 === t._queue.length && (t._processingQueue = !1),
                    t._continueProcessingQueue()
                }
                ,
                this.fire("downloadstart", u),
                this._activeXhrRequests.add(f),
                n = Date.now(),
                f.send()
            }
        }, {
            key: "parallel",
            get: function() {
                return this._parallel
            },
            set: function(e) {
                this._parallel = e
            }
        }, {
            key: "pendingFetches",
            get: function() {
                var e = this
                  , t = [];
                return this._activeXhrRequests.forEach(function(n) {
                    e._pendingFetchMap.get(n) && t.push(e._pendingFetchMap.get(n))
                }),
                t
            }
        }]),
        e
    }()
      , sc = 6
      , uc = function() {
        function e(t) {
            ec(this, e),
            Lt(this),
            this._sorcerer = t,
            this._sourceBuffer = null,
            this._activeStreamIndex = null,
            this._needsStreamSwitch = !1,
            this._needInitSegment = !0,
            this._lastAppended = null,
            this._toRemove = [],
            this._streams = [],
            this._quotaExceeded = !1,
            this._quotaExceededTimer = null,
            this._appendingFinalSegment = !1,
            this._finalSegmentTime = void 0,
            this._addingInitSegment = !1,
            this._isFirstSegment = !0,
            this._bufferState = {},
            this._sorcerer.on("durationset", this._onDurationSet.bind(this))
        }
        return tc(e, [{
            key: "addStream",
            value: function(e) {
                var t = this;
                e.on("segmentadd", function() {
                    return t._process()
                });
                var n = this._streams.push(e) - 1;
                e.index = n,
                null === this._activeStreamIndex && (this._setActiveIndex(n),
                this._needsStreamSwitch = !0)
            }
        }, {
            key: "streamIndexAtTime",
            value: function(e) {
                return this._bufferState[Math.floor(e / sc)]
            }
        }, {
            key: "switchTo",
            value: function(e) {
                var t = this
                  , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , i = e;
                "object" === ("undefined" == typeof e ? "undefined" : Zu(e)) && (i = e.index);
                var r = this._activeStreamIndex !== i
                  , o = r;
                if (!r && this._needsStreamSwitch && (r = !0),
                r) {
                    this._needsStreamSwitch = !1;
                    var a = this._activeStreamIndex
                      , s = this._streams[a];
                    s && o && n && s.abort(),
                    this._switchToIndex = i,
                    this._setActiveIndex(i)
                }
                return this._process(),
                new nn(function(e) {
                    return r ? void (t._resolveSwitchComplete = function() {
                        t._switchToIndex === i && (t._resolveSwitchComplete = null,
                        e(),
                        t.fire("streamchange", i))
                    }
                    ) : void e()
                }
                )
            }
        }, {
            key: "isTimeInBuffer",
            value: function(e) {
                for (var t = 0; t < this.sourceBuffer.buffered.length; t++) {
                    var n = this.sourceBuffer.buffered.start(t)
                      , i = this.sourceBuffer.buffered.end(t);
                    if (n <= e && i >= e)
                        return !0
                }
                return !1
            }
        }, {
            key: "hasAppendedFinalSegment",
            value: function() {
                return void 0 !== this._finalSegmentTime && this.isTimeInBuffer(this._finalSegmentTime)
            }
        }, {
            key: "clear",
            value: function() {
                this._streams.forEach(function(e) {
                    e.clear()
                })
            }
        }, {
            key: "remove",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._sorcerer._mediaSource.duration;
                return new nn(function(i, r) {
                    t._toRemove.push([e, n, i]),
                    t._process()
                }
                )
            }
        }, {
            key: "_onDurationSet",
            value: function() {
                var e = this._sorcerer._mediaSource.duration
                  , t = Math.floor(e / sc);
                t += sc % e > 1 ? 1 : 0;
                for (var n = 0; n < t; n++)
                    this._bufferState[n] = {
                        stream: null,
                        segment: n,
                        type: "video"
                    }
            }
        }, {
            key: "_attachEvents",
            value: function() {
                var e = this;
                this.bound = {
                    handleUpdateEnd: this._handleUpdateEnd.bind(this)
                },
                this._sourceBuffer.addEventListener("updateend", this.bound.handleUpdateEnd),
                this._sorcerer.on("endofstream", function() {
                    e._handleUpdateEnd()
                }),
                this._sorcerer.on("ended", this.bound.handleEnded)
            }
        }, {
            key: "_handleUpdateEnd",
            value: function(e) {
                this._appendingFinalSegment && (this._finalSegmentTime = this._sourceBuffer.buffered.end(this._sourceBuffer.buffered.length - 1),
                this._sorcerer._fireStreamHasEnded(),
                this._appendingFinalSegment = !1),
                this._lastAppended && (this.fire("appendbufferend", this._lastAppended),
                this._lastAppended = null,
                this._resolveSwitchComplete && this._resolveSwitchComplete()),
                this._process()
            }
        }, {
            key: "_removeEventListeners",
            value: function() {
                this.bound && (this._sourceBuffer && this._sourceBuffer.removeEventListener("updateend", this.bound.handleUpdateEnd),
                this._sorcerer.off("endofstream", this.bound.handleUpdateEnd),
                this._sorcerer.off("ended", this.bound.handleEnded))
            }
        }, {
            key: "_setActiveIndex",
            value: function(e) {
                this._needInitSegment = !0,
                this._activeStreamIndex = e,
                this._sorcerer._frameDropper.streamIndex = e
            }
        }, {
            key: "_process",
            value: function() {
                var e = this
                  , t = this._streams[this._activeStreamIndex];
                if (!this._sourceBuffer)
                    return void this.on("sourcebufferattach", this._process);
                if (t && "closed" !== this._sorcerer._mediaSource.readyState) {
                    var n = this._sourceBuffer;
                    if (!n.updating) {
                        if (this._toRemove.length) {
                            var i = this._toRemove.shift()
                              , r = nc(i, 3)
                              , o = r[0]
                              , a = r[1]
                              , s = r[2]
                              , u = this;
                            n.addEventListener("updateend", function e(t) {
                                n.removeEventListener("updateend", e),
                                s(),
                                clearTimeout(u._quotaExceededTimer),
                                u._quotaExceededTimer = setTimeout(function() {
                                    u._quotaExceeded = !1,
                                    u._process()
                                }, 5e3)
                            });
                            var c = o;
                            return void n.remove(c, a)
                        }
                        if (!this._quotaExceeded && !this._addingInitSegment) {
                            if (this._needInitSegment)
                                return this._addingInitSegment = !0,
                                t.getInitSegment().then(function(t) {
                                    return e._lastAppended = null,
                                    n.appendBuffer(t),
                                    e._addingInitSegment = !1,
                                    t
                                }).catch(function(t) {
                                    e._addingInitSegment = !1
                                }),
                                void (this._needInitSegment = !1);
                            var l = t.getNextSegment();
                            if (null !== l) {
                                var d = t.getIdForSegment(l)
                                  , f = t.isFinal(l);
                                f && (this._appendingFinalSegment = !0),
                                this._lastAppended = d,
                                this.fire("appendbufferstart", d);
                                try {
                                    n.appendBuffer(l),
                                    this._bufferState[d.segment] = d,
                                    this._isFirstSegment && (this._isFirstSegment = !1,
                                    this.fire("initialbufferstart"))
                                } catch (e) {
                                    if ("QuotaExceededError" === e.name) {
                                        this._quotaExceeded = !0;
                                        var h = 6;
                                        if (this._sorcerer._video.currentTime > h) {
                                            var v = 0
                                              , p = this._sorcerer._video.currentTime - h;
                                            this._sorcerer.removeBuffer(v, p)
                                        }
                                        t._readyToAppend.unshift(l)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, {
            key: "streams",
            get: function() {
                return this._streams
            }
        }, {
            key: "activeStreamIndex",
            get: function() {
                return this._activeStreamIndex
            }
        }, {
            key: "sourceBuffer",
            get: function() {
                return this._sourceBuffer
            },
            set: function(e) {
                this._sourceBuffer = e,
                this._attachEvents(),
                this.fire("sourcebufferattach")
            }
        }]),
        e
    }()
      , cc = function() {
        function e(t) {
            var n = this
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ac;
            ec(this, e),
            Lt(this),
            this._readyToAppend = [],
            this._initSegment = null,
            this._index = NaN,
            this._codec = i,
            this._fetcher = r,
            this._fetcher.start(),
            this._bufferData = new lu,
            this._segmentToId = {},
            this._getInitSegmentPromise = new nn(function(i, r) {
                return e.isValidSegmentUrl(t) ? void n._fetcher.add({
                    url: t.url || t,
                    byteRange: t.byteRange,
                    id: null,
                    stream: n
                }, function(e) {
                    n._initSegment = e,
                    i(e)
                }) : (n._initSegment = t,
                void i(t))
            }
            )
        }
        return tc(e, null, [{
            key: "isValidSegmentUrl",
            value: function(e) {
                return "string" == typeof e || "string" == typeof e.url && "string" == typeof e.byteRange
            }
        }]),
        tc(e, [{
            key: "getIdForSegment",
            value: function(t) {
                return e.isValidSegmentUrl(t) ? this._segmentToId[t] : this._bufferData.get(t).id
            }
        }, {
            key: "isFinal",
            value: function(e) {
                return this._bufferData.get(e).final
            }
        }, {
            key: "addSegment",
            value: function(t) {
                var n = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = i.identifier
                  , o = void 0 === r ? null : r
                  , a = i.isFinalSegment
                  , s = void 0 !== a && a
                  , u = i.loadOnly
                  , c = void 0 !== u && u
                  , l = i.priority
                  , d = void 0 === l ? 0 : l
                  , f = i.includeWithBandwidthChecks
                  , h = void 0 === f || f;
                return new nn(function(i, r) {
                    return e.isValidSegmentUrl(t) ? (n._segmentToId[t] = o || t,
                    n.fire("queued", n.getIdForSegment(t)),
                    void n._fetcher.add({
                        url: t.url || t,
                        byteRange: t.byteRange,
                        id: n.getIdForSegment(t),
                        stream: n,
                        includeWithBandwidthChecks: h,
                        priority: d
                    }, function(e) {
                        n._bufferData.set(e, {
                            id: o || t,
                            final: s
                        }),
                        n._readyToAppend.push(e),
                        n.fire("bufferqueueadd", n.getIdForSegment(t)),
                        c || n.fire("segmentadd"),
                        i()
                    })) : (n._bufferData.set(t, {
                        id: o,
                        final: s
                    }),
                    n._readyToAppend.push(t),
                    n.fire("bufferqueueadd", o),
                    void i())
                }
                )
            }
        }, {
            key: "clear",
            value: function() {
                this._readyToAppend = []
            }
        }, {
            key: "abort",
            value: function() {
                var e = this;
                this._getInitSegmentPromise.then(function() {
                    e._fetcher.abort(e)
                })
            }
        }, {
            key: "getNextSegment",
            value: function() {
                return 0 === this._readyToAppend.length ? null : this._readyToAppend.shift()
            }
        }, {
            key: "getInitSegment",
            value: function() {
                return this._getInitSegmentPromise
            }
        }, {
            key: "codec",
            get: function() {
                return this._codec
            },
            set: function(e) {
                this._codec = e
            }
        }, {
            key: "index",
            get: function() {
                return this._index
            },
            set: function(e) {
                this._index = e
            }
        }, {
            key: "pendingFetches",
            get: function() {
                return this._fetcher.pendingFetches
            }
        }]),
        e
    }()
      , lc = function() {
        function e(t) {
            ec(this, e),
            this._video = t,
            this._running = !1,
            this._droppedFramesTimeout = null,
            this._droppedFrameData = {},
            this._decodedFrameData = {},
            this._droppedFrames = 0,
            this._decodedFrames = 0,
            this._streamIndex = "default",
            this.bound = {
                startCheckingDroppedFrames: this._startCheckingDroppedFrames.bind(this),
                stopCheckingDroppedFrames: this._stopCheckingDroppedFrames.bind(this)
            }
        }
        return tc(e, [{
            key: "start",
            value: function() {
                return this._startCheckingDroppedFrames(),
                this
            }
        }, {
            key: "stop",
            value: function() {
                return this._stopCheckingDroppedFrames(),
                this
            }
        }, {
            key: "destroy",
            value: function() {
                this._stopCheckingDroppedFrames(),
                this._removeEvents()
            }
        }, {
            key: "getDroppedFrameRate",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "average"
                  , i = this._droppedFrameData[t];
                if (!i)
                    return 0;
                if (i.length < e)
                    return 0;
                var r = i.slice(-e);
                return "median" === n ? Tt(r) : St(r)
            }
        }, {
            key: "getDroppedFrameTotal",
            value: function() {
                return {
                    dropped: this._getTotalDroppedFrames(),
                    total: this._getTotalFrames()
                }
            }
        }, {
            key: "_attachEvents",
            value: function() {
                this._video.addEventListener("playing", this.bound.startCheckingDroppedFrames),
                this._video.addEventListener("pause", this.bound.stopCheckingDroppedFrames),
                this._video.addEventListener("ended", this.bound.stopCheckingDroppedFrames)
            }
        }, {
            key: "_removeEvents",
            value: function() {
                this._video.removeEventListener("playing", this.bound.startCheckingDroppedFrames),
                this._video.removeEventListener("pause", this.bound.stopCheckingDroppedFrames),
                this._video.removeEventListener("ended", this.bound.stopCheckingDroppedFrames)
            }
        }, {
            key: "_startCheckingDroppedFrames",
            value: function() {
                this._running = !0,
                this._checkDroppedFrames()
            }
        }, {
            key: "_stopCheckingDroppedFrames",
            value: function() {
                this._running = !1
            }
        }, {
            key: "_checkDroppedFrames",
            value: function() {
                var e = this;
                if (this._running && null !== this._streamIndex) {
                    clearTimeout(this._droppedFramesTimeout);
                    var t = this._getTotalDroppedFrames()
                      , n = t - this._droppedFrames;
                    this._droppedFrames = t;
                    var i = this._getTotalFrames()
                      , r = i - this._decodedFrames;
                    this._decodedFrames = i,
                    this._droppedFrameData[this._streamIndex] || (this._droppedFrameData[this._streamIndex] = []),
                    this._decodedFrameData[this._streamIndex] || (this._decodedFrameData[this._streamIndex] = []),
                    this._droppedFrameData[this._streamIndex].length > 100 && this._droppedFrameData[this._streamIndex].shift(),
                    this._decodedFrameData[this._streamIndex].length > 100 && this._decodedFrameData[this._streamIndex].shift(),
                    this._droppedFrameData[this._streamIndex].push(n),
                    this._decodedFrameData[this._streamIndex].push(r),
                    this._droppedFramesTimeout = setTimeout(function() {
                        e._checkDroppedFrames()
                    }, 1e3)
                }
            }
        }, {
            key: "_getTotalDroppedFrames",
            value: function() {
                return "function" == typeof this._video.getVideoPlaybackQuality ? this._video.getVideoPlaybackQuality().droppedVideoFrames : this._video.webkitDroppedFrameCount || 0
            }
        }, {
            key: "_getTotalFrames",
            value: function() {
                if ("function" == typeof this._video.getVideoPlaybackQuality) {
                    var e = this._video.getVideoPlaybackQuality();
                    return e.totalVideoFrames - e.droppedVideoFrames - e.corruptedVideoFrames
                }
                return this._video.webkitDecodedFrameCount || 0
            }
        }, {
            key: "streamIndex",
            get: function() {
                return this._streamIndex
            },
            set: function(e) {
                this._streamIndex = e
            }
        }]),
        e
    }()
      , dc = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ec(this, e),
            this._video = t,
            this._options = n,
            Lt(this),
            this._options.duration && (this._options.duration = Math.ceil(100 * this._options.duration) / 100),
            this._bufferCount = 0,
            this._frameDropper = new lc(t),
            this._mediaSource = new MediaSource,
            this._fetcher = new ac({
                parallel: 1
            }),
            this._video.src = URL.createObjectURL(this._mediaSource),
            this._buffersForCodec = {},
            this._readyPromiseResolve = null,
            this._attachEvents()
        }
        return tc(e, [{
            key: "switchTo",
            value: function(e) {
                return 1 === this._bufferCount && this.video.switchTo(e)
            }
        }, {
            key: "getCurrentSpeed",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.type
                  , n = void 0 === t ? "average" : t
                  , i = e.howMany
                  , r = void 0 === i ? 10 : i
                  , o = e.weights
                  , a = void 0 === o ? [] : o
                  , s = e.percentile
                  , u = void 0 === s ? null : s;
                return "average" === n ? ac.getAverageSpeed(r, a) : "median" === n ? ac.getMedianSpeed(r) : ac.getPercentileSpeed(r, u)
            }
        }, {
            key: "getResponseSpeeds",
            value: function() {
                return ac.getResponseSpeeds()
            }
        }, {
            key: "getFailedSegments",
            value: function() {
                return ac.getFailedSegments()
            }
        }, {
            key: "getSuccessfulSegments",
            value: function() {
                return ac.getSuccessfulSegments()
            }
        }, {
            key: "getDroppedFrameRate",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.activeStreamIndex
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "average";
                return this._frameDropper.getDroppedFrameRate(e, t, n)
            }
        }, {
            key: "getDroppedFrameTotal",
            value: function() {
                return this._frameDropper.getDroppedFrameTotal()
            }
        }, {
            key: "clear",
            value: function() {
                for (var e in this._buffersForCodec)
                    this._buffersForCodec[e].clear()
            }
        }, {
            key: "streamIndexAtTime",
            value: function(e, t) {
                return this._buffersForCodec[t].streamIndexAtTime(e).stream
            }
        }, {
            key: "removeBuffer",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._video.duration;
                if (e > t)
                    return nn.resolve();
                var n = [];
                for (var i in this._buffersForCodec)
                    n.push(this._buffersForCodec[i].remove(e, t));
                return nn.all(n)
            }
        }, {
            key: "addStream",
            value: function(e, t) {
                var n = this
                  , i = this._getCodecType(e);
                if (!this._buffersForCodec[i]) {
                    this._bufferCount += 1;
                    var r = new uc(this,i);
                    this._buffersForCodec[i] = r,
                    this.readyPromise.then(function() {
                        var t = void 0;
                        try {
                            t = n._mediaSource.addSourceBuffer(e)
                        } catch (e) {
                            if (22 !== e.code)
                                return void n.fire("srcnotsupported", e);
                            t = n._buffersForCodec[i]
                        }
                        n._options.duration && (t.appendWindowEnd = n._options.duration),
                        r.sourceBuffer = t
                    }),
                    ["appendbufferstart", "appendbufferend", "streamchange", "initialbufferstart"].forEach(function(e) {
                        r.on(e, function(t) {
                            n.fire(e, t)
                        })
                    })
                }
                var o = new cc(t,e,this._fetcher);
                return ["queued", "bufferqueueadd"].forEach(function(e) {
                    o.on(e, function(t) {
                        n.fire(e, t)
                    })
                }),
                this._buffersForCodec[i].addStream(o),
                o
            }
        }, {
            key: "destroy",
            value: function() {
                this.clear(),
                this._removeEventListeners(),
                this._frameDropper.destroy(),
                this._fetcher.abort(),
                this._video.src && URL.revokeObjectURL(this._video.src)
            }
        }, {
            key: "_attachEvents",
            value: function() {
                var e = this;
                this.bound = {
                    handleSourceOpen: this._handleSourceOpen.bind(this)
                },
                this.readyPromise = new nn(function(t, n) {
                    e._readyPromiseResolve = t,
                    e._mediaSource.addEventListener("sourceopen", e.bound.handleSourceOpen)
                }
                ),
                ["downloadstart", "downloadend", "downloadabort", "downloaderror"].forEach(function(t) {
                    e._fetcher.on(t, function() {
                        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++)
                            i[r] = arguments[r];
                        e.fire.apply(e, [t].concat(i))
                    })
                })
            }
        }, {
            key: "_sourceBuffersAreUpdating",
            value: function() {
                for (var e = 0; e < this._mediaSource.sourceBuffers.length; e++)
                    if (this._mediaSource.sourceBuffers[e].updating)
                        return !0;
                return !1
            }
        }, {
            key: "_fireStreamHasEnded",
            value: function() {
                for (var e in this._buffersForCodec) {
                    var t = this._buffersForCodec[e];
                    if (!t.hasAppendedFinalSegment())
                        return
                }
                "open" === this._mediaSource.readyState && (this._sourceBuffersAreUpdating() || (this._mediaSource.endOfStream(),
                this.fire("endofstream")))
            }
        }, {
            key: "_handleSourceOpen",
            value: function() {
                this._options.duration && (this._mediaSource.duration = this._options.duration,
                this.fire("durationset")),
                this._readyPromiseResolve(),
                this._mediaSource.removeEventListener("sourceopen", this.bound.handleSourceOpen)
            }
        }, {
            key: "_removeEventListeners",
            value: function() {
                for (var e in this._buffersForCodec)
                    this._buffersForCodec[e]._removeEventListeners()
            }
        }, {
            key: "_getCodecType",
            value: function(e) {
                return 0 === e.indexOf("audio") ? "audio" : "video"
            }
        }, {
            key: "mediaSource",
            get: function() {
                return this._mediaSource
            }
        }, {
            key: "streams",
            get: function() {
                return 1 === this._bufferCount && this.video.streams
            }
        }, {
            key: "activeStreamIndex",
            get: function() {
                return 1 === this._bufferCount && this.video.activeStreamIndex
            }
        }, {
            key: "video",
            get: function() {
                return !!this._buffersForCodec.video && this._buffersForCodec.video
            }
        }, {
            key: "audio",
            get: function() {
                return !!this._buffersForCodec.audio && this._buffersForCodec.audio
            }
        }]),
        e
    }()
      , fc = function() {
        function e(t) {
            fu(this, e),
            this.scanner = t
        }
        return hu(e, null, [{
            key: "displayName",
            get: function() {
                return "Brain"
            }
        }]),
        hu(e, [{
            key: "shouldPowerUp",
            value: function(e, t) {
                return !1
            }
        }, {
            key: "shouldPowerDown",
            value: function(e, t) {
                return !1
            }
        }, {
            key: "canPowerUp",
            value: function(e, t) {
                return 1 !== e.length && t < e.length - 1
            }
        }, {
            key: "canPowerDown",
            value: function(e, t) {
                return 1 !== e.length && t > 0
            }
        }, {
            key: "filterStreams",
            value: function(e) {
                return e
            }
        }]),
        e
    }()
      , hc = function(e) {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            fu(this, t);
            var i = gu(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return i._options = n,
            i.finalSegmentLoaded = !1,
            i.blacklisted = [],
            i.whitelisted = [],
            i.MAX_LOADABLE_SEGMENTS_AUTO = 3,
            i.MAX_LOADABLE_SEGMENTS_LOCKED = 15,
            i
        }
        return mu(t, e),
        hu(t, null, [{
            key: "displayName",
            get: function() {
                return "Skyfire"
            }
        }]),
        hu(t, [{
            key: "shouldPowerUp",
            value: function(e, t, n) {
                var i = .85;
                n && this._options.startingBandwidthThreshold && (i = this._options.startingBandwidthThreshold);
                var r = e.indexOf(t);
                if (r === -1 && (r = 0),
                !this.canPowerUp(e, r))
                    return !1;
                var o = this.getCurrentSpeed();
                if (!o)
                    return !1;
                var a = this._getStreamFromSpeed(o, i, e);
                return a !== r && a
            }
        }, {
            key: "shouldPowerDown",
            value: function(e, t) {
                var n = e.indexOf(t)
                  , i = n === -1;
                if (i)
                    return e.length - 1;
                if (!this.canPowerDown(e, n))
                    return !1;
                var r = this.getCurrentSpeed();
                if (!r)
                    return !1;
                if (this.hasTooManyDroppedFrames(n, t, this._options.droppedFrameSwitchPercent))
                    return n - 1;
                var o = this._getStreamFromSpeed(r, .9, e);
                return o !== n && o
            }
        }, {
            key: "hasTooManyDroppedFrames",
            value: function(e, t, n) {
                var i = 10
                  , r = this.scanner.sorcerer.getDroppedFrameRate(i, e, "median")
                  , o = t.framerate
                  , a = r / o * 100;
                return a >= n && (this.blacklist(e),
                !0)
            }
        }, {
            key: "isTimeInBuffer",
            value: function(e) {
                var t = this.scanner._video;
                return this._timesAreInRange(e, e, t.buffered)
            }
        }, {
            key: "getCurrentSpeed",
            value: function() {
                var e = 3
                  , t = [1, 2, 5];
                return this.scanner.sorcerer.getCurrentSpeed({
                    type: "average",
                    howMany: e,
                    weights: t
                })
            }
        }, {
            key: "getDistanceFromBuffer",
            value: function(e) {
                for (var t = e, n = this.scanner._video, i = 0; i < n.buffered.length; i++)
                    if (n.buffered.start(i) <= e && n.buffered.end(i) >= e) {
                        t = n.buffered.end(i);
                        break
                    }
                return t - e
            }
        }, {
            key: "getTimeEstimateToLoad",
            value: function(e, t) {
                if (null === t)
                    return 3;
                var n = t.segments[e]
                  , i = n.end - n.start
                  , r = this.getCurrentSpeed()
                  , o = i * (t.bitrate + t.audioBitrate) / r;
                return 1.3 * o
            }
        }, {
            key: "canPlayFromTimeInStream",
            value: function(e, t) {
                if (!this.isTimeInBuffer(e))
                    return !1;
                if (!t)
                    return !1;
                var n = this.getSegmentsToLoad(!1, "video", t);
                if (0 === n.length)
                    return !0;
                var i = this.getDistanceFromBuffer(e);
                return this.getTimeEstimateToLoad(n[0], t) < i
            }
        }, {
            key: "getSegmentsToLoad",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "video"
                  , n = arguments[2]
                  , i = this.scanner._video
                  , r = this.scanner.currentTime
                  , o = []
                  , a = this._getSecondsToLoadAhead(r, i.duration, n)
                  , s = r + a
                  , u = this.scanner.sorcerer[t].activeStreamIndex
                  , c = this.scanner._streams[t][u]
                  , l = this.scanner.sorcerer[t].sourceBuffer
                  , d = null;
                l && (d = l.buffered);
                for (var f = 0; f < c.segments.length; f++) {
                    var h = c.segments[f]
                      , v = f === c.segments.length - 1;
                    if (!(h.end < r || h.start > s)) {
                        var p = r >= h.start && r < h.end
                          , m = this._isSegmentInBuffer(h, d, v);
                        !e && m || e && m && p || (p ? o.push(f) : s >= h.start && o.push(f))
                    }
                }
                return o
            }
        }, {
            key: "blacklist",
            value: function(e) {
                this.blacklisted[e] = 1
            }
        }, {
            key: "lock",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                this.whitelisted = e
            }
        }, {
            key: "filterStreams",
            value: function(e) {
                for (var t = this.scanner._video.clientWidth, n = this.scanner._video.clientHeight, i = [], r = void 0, o = !1, a = 0; a < e.length; a++)
                    if (r && r[0] === e[a].width && r[1] === e[a].height)
                        i.push(e[a]);
                    else {
                        if (o)
                            break;
                        if (!(this.blacklisted[a] && this.whitelisted.indexOf(a) === -1 || this.whitelisted.length && this.whitelisted.indexOf(a) === -1))
                            if (this.whitelisted.length)
                                i.push(e[a]);
                            else {
                                var s = this._getScaleFromDimensions(t, n, e[a].width, e[a].height)
                                  , u = 1e3 / (window.devicePixelRatio || 1)
                                  , c = n < u ? 1.75 : 1;
                                s >= c && (o = !0),
                                i.push(e[a]),
                                r = [e[a].width, e[a].height]
                            }
                    }
                return i
            }
        }, {
            key: "_getStreamFromSpeed",
            value: function(e, t, n) {
                for (var i = 0, r = i; r < n.length; r++)
                    e * t > n[r].bitrate + n[r].audioBitrate && (i = r);
                return i
            }
        }, {
            key: "_getVisibleDimensions",
            value: function(e, t, n, i) {
                var r = n / i
                  , o = e - t * r
                  , a = t - e / r
                  , s = e - o
                  , u = t - a;
                return o > 0 && (u = t),
                a > 0 && (s = e),
                [s, u]
            }
        }, {
            key: "_getScaleFromDimensions",
            value: function(e, t, n, i) {
                var r = this._getVisibleDimensions(e, t, n, i)
                  , o = n * i;
                this.scanner.video && this.scanner.video.metadata.percentShown && (o *= this.scanner.video.metadata.percentShown);
                var a = window.devicePixelRatio || 1
                  , s = r[0] * r[1] * a * a;
                return o / s
            }
        }, {
            key: "_getSecondsToLoadAhead",
            value: function(e, t, n) {
                var i = 12e3
                  , r = n && n.bitrate > i;
                return 1 === this.whitelisted.length ? r ? 30 : this.MAX_LOADABLE_SEGMENTS_LOCKED * this.segmentDuration : this.MAX_LOADABLE_SEGMENTS_AUTO * this.segmentDuration
            }
        }, {
            key: "_round",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
                if (e = parseFloat(e),
                isNaN(e))
                    return 0;
                var n = Math.pow(10, t);
                return Math.round(e * n) / n
            }
        }, {
            key: "_timesAreInRange",
            value: function(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (!n)
                    return !1;
                t = Math.min(t, this.scanner._video.duration);
                for (var r = 0; r < n.length; r++) {
                    var o = this._round(n.start(r)) - i
                      , a = this._round(n.end(r)) + i;
                    if (o <= e && a >= t)
                        return !0
                }
                return !1
            }
        }, {
            key: "_hasSeparateStreams",
            value: function() {
                return this.scanner._streams.video.length > 0 && this.scanner._streams.audio.length > 0
            }
        }, {
            key: "_isSegmentInBuffer",
            value: function(e, t, n) {
                var i = 1;
                return this._hasSeparateStreams() && (i = .05),
                n && !this.finalSegmentLoaded ? (this.finalSegmentLoaded = !0,
                !1) : this._timesAreInRange(e.start, e.end, t, i)
            }
        }, {
            key: "segmentDuration",
            get: function() {
                return 6
            }
        }]),
        t
    }(fc)
      , vc = 2
      , pc = 6
      , mc = .85
      , gc = function(e) {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            fu(this, t);
            var i = gu(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return i._options = n,
            i.MAX_LOADABLE_SEGMENTS_AUTO = 10,
            i.inVirginState = !0,
            i
        }
        return mu(t, e),
        hu(t, null, [{
            key: "displayName",
            get: function() {
                return "BBA"
            }
        }]),
        hu(t, [{
            key: "getSegmentsToLoad",
            value: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "video"
                  , i = arguments[2];
                return pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getSegmentsToLoad", this).call(this, !1, n, i)
            }
        }, {
            key: "shouldPowerUp",
            value: function(e, t, n) {
                var i = e.indexOf(t);
                if (i === -1 && (i = 0),
                !this.canPowerUp(e, i))
                    return !1;
                var r = this.scanner.sorcerer.video._sourceBuffer ? this.scanner.sorcerer.video._sourceBuffer.buffered : null
                  , o = this._getStreamFromBuffer(r, e, i);
                return !(o <= i) && o
            }
        }, {
            key: "shouldPowerDown",
            value: function(e, t) {
                var n = e.indexOf(t)
                  , i = n === -1;
                if (i)
                    return e.length - 1;
                if (!this.canPowerDown(e, n))
                    return !1;
                var r = this.getCurrentSpeed();
                if (!r)
                    return !1;
                if (this.hasTooManyDroppedFrames(n, t, this._options.droppedFrameSwitchPercent))
                    return n - 1;
                var o = this.scanner.sorcerer.video._sourceBuffer ? this.scanner.sorcerer.video._sourceBuffer.buffered : null
                  , a = this._getStreamFromBuffer(o, e, n);
                return !(a >= n) && a
            }
        }, {
            key: "_getStreamFromBuffer",
            value: function(e, t, n) {
                var i = this
                  , r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  , o = this.segmentDuration * pc
                  , a = this.getDistanceFromBuffer(this.scanner.currentTime);
                if (this.scanner.sorcerer.video.streams[n].pendingFetches.forEach(function(e) {
                    a += e.percent * i.segmentDuration
                }),
                !r && this._isVirginBuffer(e, t) || !e) {
                    var s = this.getCurrentSpeed();
                    return this._getStreamFromSpeed(s, mc, t)
                }
                if (a <= vc * this.segmentDuration)
                    return 0;
                var u = Math.min(1, (a - vc * this.segmentDuration) / o);
                if (a === this.scanner._video.duration - this.scanner._video.currentTime && (u = 1),
                this.scanner.fire(Mu.BUFFER_OCCUPANCY, u),
                1 === u)
                    return t.length - 1;
                for (var c = [], l = 1; l < t.length; l++)
                    c.push(t[l].bitrate);
                var d = u * c.slice(-1)[0]
                  , f = [];
                c.forEach(function(e) {
                    f.push(Math.abs(d - e))
                });
                var h = f.indexOf(Math.min.apply(Math, f)) + 1
                  , v = Math.max(0, n - 1)
                  , p = d > c[v - 1] && d <= c[v] || d >= c[v] && d < c[v + 1];
                return p ? n : h
            }
        }, {
            key: "_isVirginBuffer",
            value: function(e, t) {
                return !(!this.inVirginState || this._getStreamFromSpeed(this.getCurrentSpeed(), mc, t) === this._getStreamFromBuffer(e, t, this.scanner.sorcerer.video.activeStreamIndex, !0)) || (this.inVirginState && (this.inVirginState = !1),
                !1)
            }
        }]),
        t
    }(hc)
      , yc = 1
      , _c = 2
      , bc = 3
      , wc = 4
      , kc = 1e4
      , Sc = 5
      , Ec = "video"
      , Tc = "audio"
      , xc = function(e) {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            fu(this, t);
            var i = gu(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return i.reset(),
            i.manifestLoadDurations = [],
            n.mediaSourceScanner && (i._maxPreloadStreamIndex = n.mediaSourceScanner.maxPreloadStreamIndex,
            i._shouldUseBBA = n.mediaSourceScanner.shouldUseBBA),
            i
        }
        return mu(t, e),
        hu(t, null, [{
            key: "displayName",
            get: function() {
                return "MediaSourceScanner"
            }
        }, {
            key: "supported",
            get: function() {
                return "undefined" != typeof MediaSource && "undefined" != typeof Set
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                return ["application/vnd.vimeo.dash+json"]
            }
        }]),
        hu(t, [{
            key: "deactivate",
            value: function() {
                pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deactivate", this).call(this),
                this.sorcerer && this.sorcerer.destroy(),
                this.reset()
            }
        }, {
            key: "reset",
            value: function() {
                this._waitingOnSet = new Set,
                this._streamsForSegment = {},
                this._shouldUseBBA ? this._brain = new gc(this,this._options.mediaSourceScanner || {}) : this._brain = new hc(this,this._options.mediaSourceScanner || {}),
                this._ready = !1,
                this._startedPlaying = !1,
                this._manifest = null,
                this._streams = {},
                this._streams[Tc] = [],
                this._streams[Ec] = [],
                this._audioStreams = [],
                this._onReady = null,
                this._baseUrl = null,
                this._lastTargetStreamId = null,
                this._timeToSeekTo = null,
                this._resolveSeek = null,
                this._resolveStartPreload = null,
                this._reloadingExistingVideo = !1,
                this._lastStreamIndex = null,
                this._checkSwitchUp = !1,
                this._clearBufferAtTime = !1,
                this._preloadStream = null,
                this._removeBufferPromise = null,
                this._badPlaybackTimer = null,
                this._isBufferingTooLong = !1,
                this._ranIntoBuffer = !1,
                this._bufferCount = 0,
                this._restrictedStreamIndexes = [],
                this._switching = {},
                this._fireEndedTimeout = null,
                this._firedFakeEndedEvent = !1
            }
        }, {
            key: "preloadStream",
            value: function() {
                var e = this;
                return this._preloadStream ? this._preloadStream : (this._preloadStream = new nn(function(t, n) {
                    var i = 1;
                    e._streams.audio.length && (i = 2);
                    var r = 0
                      , o = !1
                      , a = e.sorcerer.video.activeStreamIndex;
                    e._restrictedStreamIndexes.length && (a = e._streams[Ec].indexOf(e._manifest.video[e._restrictedStreamIndexes[0]]));
                    var s = e._brain.getSegmentsToLoad(!1, Ec, e._getCurrentStream())
                      , u = 0;
                    s.length > 0 && (u = s[0]);
                    var c = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        t && (a = e.sorcerer.video.activeStreamIndex);
                        for (var n in e._streams)
                            if (0 !== e._streams[n].length) {
                                var i = a;
                                n === Tc && (i = e._getAudioIndexFromVideo(a));
                                var s = e._getSegmentUrl(i, u, n)
                                  , c = e._isFinalSegment(i, u)
                                  , l = e.sorcerer[n].streams[i]
                                  , d = {
                                    stream: i,
                                    segment: u,
                                    type: n
                                }
                                  , f = !0
                                  , h = s;
                                if (e._useRangeRequests()) {
                                    var v = e._getRangeForSegment(i, u, n);
                                    h = {
                                        url: h,
                                        byteRange: v
                                    }
                                }
                                "audio" !== n || i !== o ? ("audio" === n && o === !1 && (o = i),
                                l.addSegment(h, {
                                    identifier: d,
                                    isFinalSegment: c,
                                    loadOnly: f,
                                    priority: 0
                                })) : (r += 1,
                                e._handleAppendBufferEnd(d))
                            }
                    }
                      , l = function n(o) {
                        if (r += 1,
                        !(r < i) && o.segment === u) {
                            if (0 === e._restrictedStreamIndexes.length) {
                                var s = !0
                                  , l = e._getStreamIndexToLoad(s);
                                if (l !== !1 && l > o.stream)
                                    return e.sorcerer.video.switchTo(l, !1),
                                    e._streams.audio.length && e.sorcerer.audio.switchTo(e._getAudioIndexFromVideo(l), !1),
                                    r = 0,
                                    void c(!0)
                            }
                            var d = e._getCurrentStream(a)
                              , f = d.segments[0].end
                              , h = !0
                              , v = e._getDuration(h);
                            e.currentTime >= v && (e.currentTime = v),
                            e.currentTime > f && (e.sorcerer.clear(),
                            e._waitingOnSet = new Set),
                            e.sorcerer.video.switchTo(a, !1),
                            e._streams.audio.length && e.sorcerer.audio.switchTo(e._getAudioIndexFromVideo(a), !1),
                            e.sorcerer.off("bufferqueueadd", n),
                            e._ready = !0,
                            t()
                        }
                    };
                    e.sorcerer.on("bufferqueueadd", l),
                    c()
                }
                ),
                this._preloadStream)
            }
        }, {
            key: "loadManifest",
            value: function(e) {
                var t = this;
                return new nn(function(n, i) {
                    var r = null
                      , o = new XMLHttpRequest;
                    o.open("GET", e, !0),
                    t._options.tests && t._options.tests.manifest_retry ? o.timeout = t._options.tests.manifest_retry.data.duration : o.timeout = 1e4,
                    o.onload = function() {
                        var a = Date.now() - r;
                        if (o.status >= 400)
                            return t.manifestLoadDurations.push({
                                url: e,
                                status: o.status,
                                duration: a
                            }),
                            t.reset(),
                            410 === o.status ? void t.fire(Mu.MEDIA_URL_EXPIRED) : void i("JSON manifest failed to load.");
                        "responseURL"in o && o.responseURL !== e && o.responseURL.indexOf("live-archive") && (t._baseUrl = o.responseURL.split("/").slice(0, -2).join("/"));
                        try {
                            n(JSON.parse(o.response)),
                            t.manifestLoadDurations.push({
                                url: e,
                                status: o.status,
                                duration: a
                            }),
                            t.fire(Mu.MANIFEST_LOADED)
                        } catch (n) {
                            t.manifestLoadDurations.push({
                                url: e,
                                status: o.status,
                                duration: a
                            }),
                            i()
                        }
                    }
                    ,
                    o.onerror = function() {
                        var n = Date.now() - r;
                        t.manifestLoadDurations.push({
                            url: e,
                            status: o.status,
                            duration: n
                        }),
                        t.reset(),
                        i("JSON manifest failed to load.")
                    }
                    ,
                    o.ontimeout = function() {
                        var n = Date.now() - r;
                        t.manifestLoadDurations.push({
                            url: e,
                            status: o.status,
                            duration: n
                        }),
                        t.reset(),
                        t.fire(Mu.MANIFEST_TIMEOUT),
                        i("JSON manifest " + e + " timed out in " + n + "ms.")
                    }
                    ,
                    r = Date.now(),
                    o.send()
                }
                )
            }
        }, {
            key: "setVideoSrc",
            value: function(e, t) {
                var n = this
                  , i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (i && !t && this._onReady) {
                    if (("metadata" === this._preload || "none" === this._preload && !this._paused) && !this._ready)
                        return void this._onReady.then(function() {
                            var t = n._paused;
                            n.setVideoSrc(e, t, !1)
                        });
                    if ("auto" === this._preload)
                        return void this._onReady.then(function() {
                            n.setVideoSrc(e, !1, !1)
                        })
                }
                if (t) {
                    this.reset();
                    try {
                        this._video.currentTime = 0
                    } catch (e) {}
                }
                t || !this._paused || this.sorcerer || (t = !0);
                var r = "_initializeManifest";
                t && (this._video.preload = "",
                r = "_initialize");
                var o = e.split("/");
                o.pop();
                var a = o.join("/") + "/";
                this._reloadingExistingVideo = !t,
                this._onReady = this._startPreload(e, this._preload).then(this.loadManifest.bind(this)).then(function(e) {
                    return "string" == typeof n._baseUrl && n._baseUrl.indexOf("live-archive") !== -1 ? e : (n._baseUrl = a,
                    e)
                }).then(this[r].bind(this)),
                t && "auto" === this._preload && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this), !1)),
                this._onReady = this._addCatchToPromise(this._onReady)
            }
        }, {
            key: "isLowerProfileAvailable",
            value: function() {
                return !!this.sorcerer && this.sorcerer[Ec].activeStreamIndex > 0
            }
        }, {
            key: "getBitrateAtTime",
            value: function(e, t) {
                var n = this.sorcerer.streamIndexAtTime(e, t);
                return this._streams[t][n] ? this._streams[t][n].bitrate : 0
            }
        }, {
            key: "updateReadyState",
            value: function() {}
        }, {
            key: "lockStreamIndexes",
            value: function() {
                var e = this
                  , t = this._restrictedStreamIndexes.map(function(t) {
                    return e._streams[Ec].indexOf(e._manifest.video[t])
                });
                if (this._video.paused || (this._ignorePauseEvent = !0,
                this._video.pause()),
                this._switching[Ec] = !1,
                this._brain.lock(t),
                this._startedPlaying || "auto" === this._preload) {
                    var n = 7
                      , i = Math.max(this.currentTime - n, 0)
                      , r = Math.min(this.currentTime + n, this._video.duration);
                    this.sorcerer.removeBuffer(i, r).then(function() {
                        return !e._startedPlaying && "auto" === e._preload || e.ended ? void e._loadSegments() : (e.seekToTime(e.currentTime),
                        void (!e._paused && e._video.paused && (e._ignorePlayEvent = !0,
                        e.play())))
                    })
                }
            }
        }, {
            key: "seekToTime",
            value: function(e) {
                var t = this;
                if (e === this.currentTime)
                    return nn.resolve();
                this._shouldUseBBA && (this._brain.inVirginState = !0),
                clearTimeout(this._fireEndedTimeout),
                this._firedFakeEndedEvent = !1;
                var n = null === this._timeToSeekTo;
                if (n || (this._lastSeekReject && (this._lastSeekReject(),
                this._lastSeekReject = null),
                this._seekInProgressPromise = null,
                this._timeToSeekTo = null,
                this._resolveSeek = null),
                this._timeToSeekTo = e,
                this._ready)
                    for (var i in this._streams)
                        if (this._streams[i].length > 0) {
                            var r = this.sorcerer[i].activeStreamIndex
                              , o = this.sorcerer[i].streams[r];
                            o.abort()
                        }
                return this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e),
                nn.all([this._onReady, this._removeBufferPromise]).then(function() {
                    t._loadSegments()
                }),
                this._paused && 0 === e && this.fire(Cu.SEEKING),
                this.readyState = yc,
                !n && this._waitingOnPlay && this.play(),
                this._onReady.then(function() {
                    return t._seekInProgressPromise
                }).catch(function(e) {})
            }
        }, {
            key: "takeSnapshot",
            value: function() {}
        }, {
            key: "initDrm",
            value: function() {}
        }, {
            key: "onstalled",
            value: function() {
                return !1
            }
        }, {
            key: "onseeked",
            value: function(e) {
                this._startedPlaying && (this._loadSegments(),
                pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onseeked", this).call(this, e))
            }
        }, {
            key: "onended",
            value: function(e) {
                if (clearTimeout(this._fireEndedTimeout),
                this._firedFakeEndedEvent)
                    return !1;
                pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onended", this).call(this, e);
                var n = 6;
                return this.sorcerer.removeBuffer(n),
                !0
            }
        }, {
            key: "onseeking",
            value: function(e) {
                var t = this;
                this._startedPlaying && (clearTimeout(this._seekTimeout),
                this._seekTimeout = setTimeout(function() {
                    t._loadSegments()
                }, 100))
            }
        }, {
            key: "onloadeddata",
            value: function() {
                var e = this;
                _t(function() {
                    e.readyState = wc
                })
            }
        }, {
            key: "ontimeupdate",
            value: function(e) {
                var t = this;
                if (clearTimeout(this._fireEndedTimeout),
                0 === this.currentTime)
                    return this._startedPlaying;
                if (this._timeToSeekTo)
                    return !1;
                if (this._startedPlaying || (this._startedPlaying = !0),
                this._clearBufferAtTime && this.currentTime >= this._clearBufferAtTime) {
                    var n = 2;
                    this.sorcerer.removeBuffer(0, this._clearBufferAtTime - n),
                    this._clearBufferAtTime = !1
                }
                this._loadSegments();
                var i = this.sorcerer.getDroppedFrameTotal();
                this.fire(Mu.DROPPED_FRAMES, i);
                var r = this.sorcerer.getResponseSpeeds()
                  , o = this._streams[Ec][this.sorcerer.video.activeStreamIndex];
                if (o) {
                    var a = {
                        speed: this._brain.getCurrentSpeed(),
                        bitrate: o.bitrate,
                        speeds: r
                    };
                    this.fire(Mu.BANDWIDTH, a)
                }
                var s = this._video.buffered.length;
                if (!s)
                    return !0;
                var u = this._video.buffered.end(s - 1);
                if (!this._firedFakeEndedEvent && this.currentTime + .5 > this._video.duration) {
                    var c = 500;
                    this._fireEndedTimeout = setTimeout(function() {
                        t.onended(),
                        t._firedFakeEndedEvent = !0,
                        t.fire(Cu.ENDED, {
                            simulated: !0
                        })
                    }, c)
                }
                if (Math.ceil(u) === Math.ceil(this._video.duration))
                    return !0;
                var l = .2;
                return Math.abs(this.currentTime - u) < l ? !this._ranIntoBuffer && (this._bufferCount += 1,
                this.fire(Mu.STREAM_BUFFER_START, {
                    hasLowerStreamIndex: this.sorcerer[Ec].activeStreamIndex > 0
                }),
                this._ranIntoBuffer = !0,
                this._startBadPlaybackTimer(),
                this.readyState = _c,
                !1) : void 0
            }
        }, {
            key: "onprogress",
            value: function() {
                this._brain.canPlayFromTimeInStream(this.currentTime, this._getCurrentStream()) && (clearTimeout(this._badPlaybackTimer),
                this.readyState < bc && (this.readyState = wc),
                this._ranIntoBuffer && (this.fire(Mu.STREAM_BUFFER_END),
                this._ranIntoBuffer = !1))
            }
        }, {
            key: "onplay",
            value: function() {
                return "picture-in-picture" === this.presentationMode && (this._paused = !1,
                !0)
            }
        }, {
            key: "onpause",
            value: function() {
                return "picture-in-picture" === this.presentationMode && (this._paused = !0,
                !0)
            }
        }, {
            key: "onwaiting",
            value: function(e) {
                return !1
            }
        }, {
            key: "onerror",
            value: function() {
                return !!this._video.error && (this._video.error.code === this._video.error.MEDIA_ERR_DECODE ? (this.fire(Mu.SCANNER_ERROR, {
                    reason: "encountered media decode error"
                }),
                !1) : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onerror", this).call(this))
            }
        }, {
            key: "pause",
            value: function() {
                var e = this;
                _t(function() {
                    e.fire(Cu.PAUSE)
                }),
                pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "pause", this).call(this)
            }
        }, {
            key: "play",
            value: function() {
                var e = this
                  , t = null;
                return this._firedFakeEndedEvent && (this.currentTime = 0),
                _t(function() {
                    e.fire(Cu.PLAY)
                }),
                this._waitingOnPlay = !0,
                this._paused = !1,
                Lu.android && !this._ready && (this._waitingOnPlay = !1,
                t = this._video.play()),
                this._resolveStartPreload && this._resolveStartPreload(),
                this._reloadingExistingVideo || this._ready || "auto" === this._preload || (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))),
                this._ready || this._startBadPlaybackTimer(),
                this._onReady.then(function() {
                    return nn.resolve(e._seekInProgressPromise)
                }).then(function() {
                    return e._waitingOnPlay = !1,
                    e._streams.audio.length || (e._video.currentTime = e.currentTime),
                    e._paused || (t = e._video.play()),
                    t
                })
            }
        }, {
            key: "_getAudioIndexFromVideo",
            value: function(e) {
                return 0 !== this._streams.audio.length && (this._streams.audio.length > 1 && this._streams.video[e].bitrate > 1e6 ? 1 : 0)
            }
        }, {
            key: "_addCallbackToPromise",
            value: function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                  , i = e.then(t);
                return n && (i = this._addCatchToPromise(i)),
                i
            }
        }, {
            key: "_addCatchToPromise",
            value: function(e) {
                var t = this;
                return e.catch(function(e) {
                    return t.fire(Mu.FILE_ERROR, {
                        reason: e
                    }),
                    new nn(function(e, t) {}
                    )
                })
            }
        }, {
            key: "_handleBufferForSeek",
            value: function() {
                if (this._ready) {
                    var e = this._streams[Ec][this.sorcerer.video.activeStreamIndex]
                      , t = e.bitrate / 1e3
                      , n = 12e3;
                    t > n && (this._removeBufferPromise = this.sorcerer.removeBuffer())
                }
            }
        }, {
            key: "_startPreload",
            value: function(e, t) {
                var n = this;
                return new nn(function(i, r) {
                    return "none" !== t || n._reloadingExistingVideo && !n._paused ? void i(e) : void (n._resolveStartPreload = function() {
                        i(e),
                        n._resolveStartPreload = null
                    }
                    )
                }
                )
            }
        }, {
            key: "_getSeekReadyPromiseForTime",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._timeToSeekTo;
                return new nn(function(n, i) {
                    var r = !e._startedPlaying && 0 === t;
                    return r || e._brain.canPlayFromTimeInStream(t, e._getCurrentStream()) ? void n(t) : (e._handleBufferForSeek(),
                    void (e._resolveSeek = n))
                }
                ).then(function(t) {
                    e._timeToSeekTo = null,
                    e._seekInProgressPromise = null,
                    e.readyState = wc;
                    var n = new nn(function(t, n) {
                        e._lastSeekReject = n;
                        var i = function n() {
                            t(e._video.currentTime),
                            e._video.removeEventListener("seeked", n)
                        };
                        e._video.addEventListener("seeked", i)
                    }
                    );
                    return e._video.currentTime = t,
                    n
                })
            }
        }, {
            key: "_handlePreloadChanged",
            value: function(e, t) {
                "auto" !== e && "auto" === t && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))),
                e !== t && "none" !== t && this._resolveStartPreload && this._resolveStartPreload()
            }
        }, {
            key: "_initializeManifest",
            value: function(e) {
                var t = this;
                return new nn(function(n, i) {
                    t._manifest = e,
                    t._streams[Ec] = t._sortStreams(e.video),
                    e.audio && (t._streams[Tc] = t._sortStreams(e.audio));
                    for (var r = 0; r < t._streams[Ec].length; r++) {
                        var o = 0;
                        if (e.audio) {
                            var a = t._streams[Tc][t._getAudioIndexFromVideo(r)];
                            a && (o = a.bitrate)
                        }
                        t._streams[Ec][r].audioBitrate = o
                    }
                    t._initDrm(t._streams[Ec], t._streams[Tc]),
                    n()
                }
                )
            }
        }, {
            key: "_setUpSorcerer",
            value: function(e, t) {
                this.sorcerer && this.sorcerer.destroy(),
                this.sorcerer = new dc(e,t),
                this.successfulSegments = this.sorcerer.getSuccessfulSegments(),
                this.failedSegments = this.sorcerer.getFailedSegments()
            }
        }, {
            key: "_getDuration",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = e ? 1 / 0 : 0;
                for (var n in this._streams)
                    this._streams[n].length && (t = Math[e ? "min" : "max"](t, this._streams[n][0].duration));
                return t
            }
        }, {
            key: "_initialize",
            value: function(e) {
                var t = this;
                return new nn(function(n, i) {
                    t._initializeManifest(e).then(function() {
                        var i = t._brain.filterStreams(t._streams[Ec])
                          , r = i.length - 1
                          , o = e.video[0];
                        if (t._restrictedStreamIndexes.length && (o = e.video[t._restrictedStreamIndexes[0]]),
                        void 0 !== t._maxPreloadStreamIndex) {
                            var a = t._streams[Ec].indexOf(e.video[t._maxPreloadStreamIndex]);
                            r <= a && (o = t._streams[Ec][r])
                        }
                        t._setUpSorcerer(t._video, {
                            duration: t._getDuration()
                        }),
                        t.sorcerer.on("srcnotsupported", function() {
                            t.fire(Mu.SCANNER_ERROR, {
                                reason: "this codec is not supported for mediasource playback"
                            })
                        });
                        var s = t._streams[Ec].indexOf(o)
                          , u = function(e) {
                            t._streams[e].forEach(function(n, i) {
                                var r = t._getSegmentUrl(i, "init", e);
                                if (t._useRangeRequests() && t._streams[e][i].init_segment_range) {
                                    var o = t._getRangeForSegment(i, "init", e);
                                    r = {
                                        url: r,
                                        byteRange: o
                                    }
                                }
                                t.sorcerer.addStream(n.mime_type + '; codecs="' + t._streams[e][i].codecs + '"', r)
                            })
                        };
                        for (var c in t._streams)
                            u(c);
                        t.sorcerer.video.switchTo(s),
                        t.sorcerer.on("queued", t._handleQueued.bind(t)),
                        t.sorcerer.on("downloadabort", t._handleAborted.bind(t)),
                        t.sorcerer.on("appendbufferend", t._handleAppendBufferEnd.bind(t)),
                        t.sorcerer.on("downloadend", t._handleDownloadEnd.bind(t)),
                        t.sorcerer.on("downloaderror", t._handleDownloadError.bind(t)),
                        t.sorcerer.video.on("streamchange", function(e) {
                            e > t._lastStreamIndex && t.currentTime > 0 && (t._checkSwitchUp = !0),
                            t._lastStreamIndex = e;
                            var n = t._manifest.video.indexOf(t._streams[Ec][e])
                              , i = {
                                index: n,
                                streams: t._manifest.video
                            };
                            t.fire(Mu.STREAM_CHANGE, i),
                            t._startBadPlaybackTimer()
                        }),
                        t.sorcerer.on("droppedframes", function() {
                            return t.fire(Mu.ALERT, Mu.DROPPED_FRAMES)
                        }),
                        t.sorcerer.mediaSource.addEventListener("sourceended", function() {
                            t.fire(Cu.PROGRESS)
                        }),
                        n()
                    })
                }
                )
            }
        }, {
            key: "_sortStreams",
            value: function(e) {
                function t(e, t) {
                    var n = e.width * e.height * e.bitrate
                      , i = t.width * t.height * t.bitrate;
                    return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - i
                }
                var n = e.slice(0);
                return n.sort(t),
                n
            }
        }, {
            key: "_useRangeRequests",
            value: function() {
                return !!this._manifest.video[0].segments[0].range
            }
        }, {
            key: "_getRangeForSegment",
            value: function(e, t, n) {
                return "init" === t ? this._streams[n][e].init_segment_range : this._streams[n][e].segments[t].range
            }
        }, {
            key: "_getSegmentPriority",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ec
                  , i = "init" === t;
                if (i)
                    return 0;
                var r = this._streams[n][e].segments[t].start;
                return r
            }
        }, {
            key: "_getSegmentUrl",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ec
                  , i = "init" === t;
                if (i && !this._streams[n][e].init_segment_range && this._streams[n][e].init_segment.indexOf(".") === -1) {
                    var r = this._streams[n][e].init_segment;
                    return gt(r)
                }
                var o = this._baseUrl
                  , a = this._manifest.base_url && this._manifest.base_url.indexOf("//") !== -1;
                return a && (o = this._manifest.base_url),
                this._manifest.base_url && !a && (o += this._manifest.base_url),
                this._streams[n][e].base_url && (o += this._streams[n][e].base_url),
                this._useRangeRequests() ? o : "init" === t ? o += this._streams[n][e].init_segment : (this._streams[n][e].segments[t].url && (o += this._streams[n][e].segments[t].url),
                o)
            }
        }, {
            key: "_key",
            value: function(e, t, n) {
                return e + ":" + t + ":" + n
            }
        }, {
            key: "_isFinalSegment",
            value: function(e, t) {
                return t === this._streams[Ec][e].segments.length - 1
            }
        }, {
            key: "_getCurrentlyLoadingStreamsForSegment",
            value: function(e, t) {
                var n = []
                  , i = this._streamsForSegment[e];
                if (!i)
                    return n;
                for (var r = 0; r < i.length; r++)
                    this._waitingOnSet.has(this._key(i[r], e, t)) && n.push(i[r]);
                return n
            }
        }, {
            key: "_getCurrentStream",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ec;
                return "undefined" != typeof this.sorcerer && (e = this.sorcerer[t].activeStreamIndex),
                this._streams[t][e]
            }
        }, {
            key: "_getStreamIndexToLoad",
            value: function(e) {
                var t = this._streams[Ec];
                if (t = this._brain.filterStreams(t),
                0 === t.length)
                    return !1;
                if (this._switching[Ec])
                    return !1;
                var n = t[t.length - 1];
                if (n.id !== this._lastTargetStreamId) {
                    this._lastTargetStreamId = n.id;
                    var i = this._streams[Ec].indexOf(n)
                      , r = {
                        index: i,
                        streams: this._streams[Ec]
                    };
                    this.fire(Mu.STREAM_TARGET_CHANGE, r)
                }
                var o = this._getCurrentStream()
                  , a = this._brain.shouldPowerUp(t, o, e);
                return this._checkForBadPlayback(),
                a === !1 && (a = this._brain.shouldPowerDown(t, o)),
                a === !1 ? a : this._streams[Ec].indexOf(t[a])
            }
        }, {
            key: "_startBadPlaybackTimer",
            value: function() {
                var e = this;
                clearTimeout(this._badPlaybackTimer),
                this._badPlaybackTimer = setTimeout(function() {
                    e._isBufferingTooLong = !0,
                    e._checkForBadPlayback()
                }, kc)
            }
        }, {
            key: "_checkForBadPlayback",
            value: function() {
                this._isHavingBadPlaybackInCurrentQuality() && this.fire(Mu.ALERT, "streamstudder")
            }
        }, {
            key: "_isHavingBadPlaybackInCurrentQuality",
            value: function() {
                return !!this._restrictedStreamIndexes.length && (!(!this._isBufferingTooLong && this._bufferCount < Sc) && (this._isBufferingTooLong,
                this._bufferCount >= Sc,
                this._isBufferingTooLong = !1,
                this._bufferCount = 0,
                !0))
            }
        }, {
            key: "_loadSegmentsForType",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ec
                  , n = this._getStreamIndexToLoad();
                t === Tc && (n === !1 && (n = this.sorcerer[Ec].activeStreamIndex),
                n = this._getAudioIndexFromVideo(n),
                this.sorcerer[Tc].activeStreamIndex === n && (n = !1));
                var i = !1;
                n !== !1 && (i = n > this.sorcerer[t].activeStreamIndex,
                this._switching[t] = !0,
                this.sorcerer[t].switchTo(n).then(function() {
                    e._switching[t] = !1
                }));
                for (var r = this._brain.getSegmentsToLoad(i, t, this._getCurrentStream()), o = this.sorcerer[t].activeStreamIndex, a = 0; a < r.length; a++) {
                    var s = this._getSegmentUrl(o, r[a], t)
                      , u = this._getCurrentlyLoadingStreamsForSegment(r[a], t);
                    if (!(u.length > 1 || 1 === u.length && o <= u[0])) {
                        var c = this._isFinalSegment(o, r[a], t)
                          , l = {
                            stream: o,
                            segment: r[a],
                            type: t
                        }
                          , d = this.sorcerer[t].streams[o]
                          , f = s;
                        if (this._useRangeRequests()) {
                            var h = this._getRangeForSegment(o, r[a], t);
                            f = {
                                url: f,
                                byteRange: h
                            }
                        }
                        var v = this._getSegmentPriority(o, r[a], t)
                          , p = t === Ec;
                        d.addSegment(f, {
                            identifier: l,
                            isFinalSegment: c,
                            priority: v,
                            includeWithBandwidthChecks: p
                        })
                    }
                }
            }
        }, {
            key: "_loadSegments",
            value: function() {
                var e = this;
                return this._onReady.then(function() {
                    for (var t in e._streams)
                        e._streams[t].length > 0 && e._loadSegmentsForType(t)
                })
            }
        }, {
            key: "_handleQueued",
            value: function(e) {
                this._waitingOnSet.add(this._key(e.stream, e.segment, e.type)),
                this._streamsForSegment[e.segment] || (this._streamsForSegment[e.segment] = []),
                this._streamsForSegment[e.segment].indexOf(e.stream) === -1 && this._streamsForSegment[e.segment].push(e.stream)
            }
        }, {
            key: "_clearWaitingOn",
            value: function(e) {
                var t = this
                  , n = this._streamsForSegment[e.segment];
                n.forEach(function(n) {
                    t._waitingOnSet.delete(t._key(n, e.segment, e.type))
                })
            }
        }, {
            key: "_handleAborted",
            value: function(e) {
                this._streamsForSegment[e.segment] && this._clearWaitingOn(e)
            }
        }, {
            key: "_handleAppendBufferEnd",
            value: function(e) {
                this._checkSwitchUp && e.stream === this._lastStreamIndex && (this._checkSwitchUp = !1,
                this._clearBufferAtTime = this._streams[Ec][e.stream].segments[e.segment].start),
                this._streamsForSegment[e.segment] && this._clearWaitingOn(e),
                null !== this._timeToSeekTo && this._resolveSeek && this._brain.canPlayFromTimeInStream(this._timeToSeekTo, this._getCurrentStream()) && (this._resolveSeek(this._timeToSeekTo),
                this._resolveSeek = null)
            }
        }, {
            key: "_handleDownloadEnd",
            value: function(e, t) {
                this.fire(Mu.DOWNLOAD_END, {
                    identifier: e,
                    data: t
                })
            }
        }, {
            key: "_handleDownloadError",
            value: function(e, t) {
                this._clearWaitingOn(e);
                var n = Mu.DOWNLOAD_ERROR;
                410 === t && (n = Mu.MEDIA_URL_EXPIRED),
                this.fire(n, {
                    identifier: e,
                    status: t
                })
            }
        }, {
            key: "_initDrm",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                if (this._telecineVideo.drmHandler) {
                    var n = {
                        audio: t.map(function(e) {
                            return e.mime_type + ';codecs="' + e.codecs + '"'
                        }),
                        video: e.map(function(e) {
                            return e.mime_type + ';codecs="' + e.codecs + '"'
                        })
                    };
                    this._telecineVideo.drmHandler.init(this, n)
                }
            }
        }, {
            key: "preload",
            get: function() {
                return this._preload
            },
            set: function(e) {
                this._handlePreloadChanged(this._preload, e),
                this._preload = e
            }
        }, {
            key: "videoWidth",
            get: function() {
                var e = this._getCurrentStream();
                return e ? e.width : this._video.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                var e = this._getCurrentStream();
                return e ? e.height : this._video.videoHeight
            }
        }, {
            key: "restrictedStreamIndexes",
            get: function() {
                return this._restrictedStreamIndexes
            },
            set: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                this._restrictedStreamIndexes.join(",") !== t.join(",") && (this._restrictedStreamIndexes = t,
                this._onReady.then(function() {
                    return e.lockStreamIndexes()
                }))
            }
        }, {
            key: "currentTime",
            get: function() {
                return this._firedFakeEndedEvent ? this._video.duration : null !== this._timeToSeekTo ? this._timeToSeekTo : this._video.currentTime
            },
            set: function(e) {
                (this._startedPlaying || 0 !== e) && this.seekToTime(e)
            }
        }]),
        t
    }(Ju)
      , Lc = function(e) {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            fu(this, t);
            var i = gu(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
              , r = document.createElement("canvas");
            return i._backingCanvas = r.getContext("2d"),
            i._resizeHandler = function() {
                return i.onresize()
            }
            ,
            i
        }
        return mu(t, e),
        hu(t, null, [{
            key: "displayName",
            get: function() {
                return "AsciiEffect"
            }
        }, {
            key: "supported",
            get: function() {
                return !/iphone|ipod/i.test(navigator.userAgent)
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [Ju, xc]
            }
        }]),
        hu(t, [{
            key: "activate",
            value: function() {
                return window.addEventListener("resize", this._resizeHandler, !1),
                this._telecine.paused ? void this._renderFrame() : void this._startRendering()
            }
        }, {
            key: "deactivate",
            value: function() {
                this._stopRendering(),
                window.removeEventListener("resize", this._resizeHandler, !1),
                this._element.removeChild(this._output)
            }
        }, {
            key: "onplay",
            value: function() {
                this._startRendering()
            }
        }, {
            key: "onpause",
            value: function() {
                this._stopRendering()
            }
        }, {
            key: "onended",
            value: function() {
                this._stopRendering()
            }
        }, {
            key: "onseeked",
            value: function() {
                this._renderFrame()
            }
        }, {
            key: "onresize",
            value: function() {
                var e = this._telecine._currentScanner._video
                  , t = this._getRenderProperties(e.clientWidth, e.clientHeight, this._telecine.videoWidth, this._telecine.videoHeight);
                this._adjustRenderSize(this._output, t),
                this._telecine.paused && this._renderFrame()
            }
        }, {
            key: "_getRenderProperties",
            value: function(e, t, n, i) {
                var r = bt(e, t, n, i)
                  , o = Math.max(Math.min(Math.floor(r.height / 10), 60), 10);
                this._options.color && (o = Math.floor(o / 2));
                var a = document.createElement("pre");
                a.style.cssText = "position:absolute;left:-9001px;top:0;font-size:10px;margin:0;padding:0;line-height:1",
                a.innerHTML = "X",
                this._element.appendChild(a);
                var s = t / o / a.clientHeight * 10 + "px";
                a.style.fontSize = s;
                for (var u = a.clientHeight, c = Math.ceil(r.height / u), l = r.height - c * u, d = parseFloat((l / c + u) / u), f = a.clientWidth, h = Math.ceil(r.width / f), v = [], p = 0; p < h; p++)
                    v.push("X");
                a.innerHTML = v.join("");
                var m = r.width - a.clientWidth
                  , g = m / h + "px";
                return this._element.removeChild(a),
                {
                    fontSize: s,
                    lineHeight: d,
                    letterSpacing: g,
                    horizontalResolution: h,
                    verticalResolution: c,
                    top: r.top
                }
            }
        }, {
            key: "_createOutputElement",
            value: function(e) {
                var t = document.createElement("pre");
                return t.style.cssText = "position:absolute;left:0;top:0;margin:0;padding:0;background:#000;width:100%;height:100%;text-align:center",
                t.style.color = this._options.color ? "#fff" : "#0f0",
                this._adjustRenderSize(t, e),
                this._telecine._currentScanner._video.setAttribute("crossorigin", "anonymous"),
                t
            }
        }, {
            key: "_adjustRenderSize",
            value: function(e, t) {
                var n = t.fontSize
                  , i = t.lineHeight
                  , r = t.letterSpacing
                  , o = t.horizontalResolution
                  , a = t.verticalResolution
                  , s = t.top;
                this._backingCanvas.width = o,
                this._backingCanvas.height = a,
                this._renderWidth = o,
                this._renderHeight = a,
                e.style.fontSize = n,
                e.style.lineHeight = i,
                e.style.letterSpacing = r,
                e.style.paddingTop = s + "px"
            }
        }, {
            key: "_getFrame",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this._backingCanvas.drawImage(e, 0, 0, this._renderWidth, this._renderHeight);
                var n = null;
                try {
                    n = this._backingCanvas.getImageData(0, 0, this._renderWidth, this._renderHeight).data
                } catch (e) {
                    this._stopRendering()
                }
                for (var i = [], r = 0; r < this._renderHeight; r++) {
                    for (var o = 0; o < this._renderWidth; o++) {
                        var a = 4 * (r * this._renderWidth + o)
                          , s = n[a]
                          , u = n[a + 1]
                          , c = n[a + 2]
                          , l = 3 * s + 4 * u + c >>> 3;
                        if (t) {
                            var d = " CGO08@"[Math.floor(l / 256 * 7)];
                            if (" " === d || s >= 250 && u >= 250 && c >= 250) {
                                i.push(d);
                                continue
                            }
                            i.push('<span style="color:rgb(' + s + "," + u + "," + c + ')">' + d + "</span>")
                        } else {
                            var f = "  .,:;iltfLG@"[Math.floor(l / 256 * 13)];
                            i.push(f)
                        }
                    }
                    i.push("\n")
                }
                return i.join("")
            }
        }, {
            key: "_requestRenderAnimationFrame",
            value: function() {
                var e = this;
                this._animationFrame && window.cancelAnimationFrame(this._animationFrame),
                this._content && (this._animationFrame = window.requestAnimationFrame(function() {
                    e._output.innerHTML = e._content,
                    e._content = null
                }))
            }
        }, {
            key: "_renderFrame",
            value: function() {
                if (!this._output) {
                    var e = this._telecine._currentScanner._video
                      , t = this._getRenderProperties(e.clientWidth, e.clientHeight, this._telecine.videoWidth, this._telecine.videoHeight);
                    this._output = this._createOutputElement(t),
                    this._element.appendChild(this._output)
                }
                this._content = this._getFrame(this._telecine._currentScanner._video, this._options.color),
                this._requestRenderAnimationFrame()
            }
        }, {
            key: "_startRendering",
            value: function() {
                var e = this;
                this._interval && window.clearInterval(this._interval);
                var t = Math.min(Math.max(this._options.fps, 15), 30);
                this._interval = window.setInterval(function() {
                    e._renderFrame()
                }, 1 / t)
            }
        }, {
            key: "_stopRendering",
            value: function() {
                this._interval && (window.clearInterval(this._interval),
                this._interval = null)
            }
        }]),
        t
    }(wu)
      , Pc = ["width", "height", "bandwidth", "duration", "timescale", "presentationTimeOffset"]
      , Ac = function() {
        function e(t, n) {
            fu(this, e);
            var i = new DOMParser;
            this.manifest = i.parseFromString(t, "application/xml"),
            this.url = n,
            this.mpd = this.manifest.getElementsByTagName("MPD")[0]
        }
        return hu(e, [{
            key: "_attrsToObj",
            value: function(e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                    var i = e[n].nodeName
                      , r = e[n].nodeValue;
                    Pc.indexOf(i) !== -1 && (r = parseInt(r, 10)),
                    t[i] = r
                }
                return t
            }
        }, {
            key: "_getAttribute",
            value: function(e, t) {
                var n = e.attributes.getNamedItem(t);
                return n ? n.nodeValue : null
            }
        }, {
            key: "_constructAdaptationSets",
            value: function(e) {
                for (var t = this, n = [], i = function(i) {
                    var r = t._attrsToObj(e[i].attributes)
                      , o = e[i].getElementsByTagName("Representation");
                    r.representations = t._constructRepresentations(o),
                    r.frameRate && r.representations.forEach(function(e) {
                        e.framerate = parseInt(r.frameRate, 10)
                    }),
                    1 === r.representations.length && (r.width && (r.representations[0].width = r.width),
                    r.height && (r.representations[0].height = r.height)),
                    n.push(r)
                }, r = 0; r < e.length; r++)
                    i(r);
                return n
            }
        }, {
            key: "_constructRepresentations",
            value: function(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var i = this._attrsToObj(e[n].attributes)
                      , r = e[n].getElementsByTagName("SegmentList")[0];
                    i.segmentList = this._constructSegmentList(r),
                    t.push(i)
                }
                return t
            }
        }, {
            key: "_constructSegmentList",
            value: function(e) {
                var t = e.getElementsByTagName("Initialization")[0]
                  , n = e.getElementsByTagName("SegmentURL")
                  , i = this._attrsToObj(e.attributes);
                i.startNumber = parseInt(i.startNumber, 10),
                i.initSegment = this.baseURL + this._getAttribute(t, "sourceURL"),
                i.segments = [];
                for (var r = 0; r < n.length; r++) {
                    var o = this._getAttribute(n[r], "media")
                      , a = o.match(/cn(\d*)/);
                    if (null === a)
                        throw new Error("Error parsing segment index from segment URL");
                    i.segments.push({
                        index: parseInt(a[1], 10),
                        url: this.baseURL + o
                    })
                }
                return i
            }
        }, {
            key: "profiles",
            get: function() {
                return this._getAttribute(this.mpd, "profiles")
            }
        }, {
            key: "type",
            get: function() {
                return this._getAttribute(this.mpd, "type")
            }
        }, {
            key: "minimumUpdatePeriod",
            get: function() {
                var e = this._getAttribute(this.mpd, "minimumUpdatePeriod");
                return wt(e)
            }
        }, {
            key: "publishTime",
            get: function() {
                return this._getAttribute(this.mpd, "publishTime")
            }
        }, {
            key: "availabilityStartTime",
            get: function() {
                return this._getAttribute(this.mpd, "availabilityStartTime")
            }
        }, {
            key: "timeShiftBufferDepth",
            get: function() {
                var e = this._getAttribute(this.mpd, "timeShiftBufferDepth");
                return wt(e)
            }
        }, {
            key: "suggestedPresentationDelay",
            get: function() {
                var e = this._getAttribute(this.mpd, "suggestedPresentationDelay");
                return wt(e)
            }
        }, {
            key: "minBufferTime",
            get: function() {
                var e = this._getAttribute(this.mpd, "minBufferTime");
                return wt(e)
            }
        }, {
            key: "baseURL",
            get: function() {
                return this.url.substr(0, this.url.lastIndexOf("/") + 1)
            }
        }, {
            key: "periods",
            get: function() {
                for (var e = [], t = this.mpd.getElementsByTagName("Period"), n = 0; n < t.length; n++) {
                    var i = this._attrsToObj(t[n].attributes)
                      , r = t[n].getElementsByTagName("AdaptationSet");
                    i.adaptationSets = this._constructAdaptationSets(r),
                    e.push(i)
                }
                return e
            }
        }, {
            key: "audioAdaptationSet",
            get: function() {
                return this.periods[0].adaptationSets.find(function(e) {
                    return 0 === e.mimeType.search(/audio/)
                })
            }
        }, {
            key: "videoAdaptationSet",
            get: function() {
                return this.periods[0].adaptationSets.find(function(e) {
                    return 0 === e.mimeType.search(/video/)
                })
            }
        }, {
            key: "representations",
            get: function() {
                return this.periods[0].adaptationSets[0].representations
            }
        }, {
            key: "audioRepresentations",
            get: function() {
                return this.audioAdaptationSet ? this.audioAdaptationSet.representations : null
            }
        }, {
            key: "videoRepresentations",
            get: function() {
                return this.videoAdaptationSet.representations
            }
        }]),
        e
    }()
      , Cc = "average"
      , Oc = 5
      , Rc = [1, 2, 5]
      , Mc = .8
      , Ic = 2
      , Fc = function(e) {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            fu(this, t);
            var i = gu(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return i.consecutiveStreamIndex = {},
            i
        }
        return mu(t, e),
        hu(t, null, [{
            key: "displayName",
            get: function() {
                return "Live"
            }
        }]),
        hu(t, [{
            key: "optimalStreamIndex",
            value: function(e, t) {
                if (1 === e.length)
                    return e[0].index;
                e = this.filterStreams(e);
                for (var n = this.scanner.sorcerer.getCurrentSpeed({
                    type: Cc,
                    howMany: Oc,
                    weights: Rc
                }), i = t, r = 0; r < e.length; r++)
                    n * Mc > e[r].bandwidth && (i = e[r].index);
                return this._clearConsecutiveStreamIndexes(i),
                this.consecutiveStreamIndex[i]++,
                document.hidden ? 0 : this.scanner.duration - this.scanner.currentTime < this.scanner.segmentLength ? 0 : this.consecutiveStreamIndex[i] > Ic && i !== t ? i : t
            }
        }, {
            key: "_clearConsecutiveStreamIndexes",
            value: function(e) {
                this.consecutiveStreamIndex[e] || (this.consecutiveStreamIndex[e] = 0);
                for (var t in this.consecutiveStreamIndex)
                    this.consecutiveStreamIndex.hasOwnProperty(t) && parseInt(t, 10) !== e && (this.consecutiveStreamIndex[t] = 0)
            }
        }]),
        t
    }(hc)
      , Dc = "video"
      , Bc = "audio"
      , qc = 3e3
      , Nc = 5e3
      , jc = 2e3
      , Vc = 1500
      , Uc = 12
      , Hc = .5
      , Wc = 3
      , zc = 3
      , Kc = 3
      , Gc = 5e3
      , Xc = 3e4
      , Yc = "video/vnd.mpeg.dash.mpd"
      , $c = "application/x-mpegURL"
      , Qc = function(e) {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            fu(this, t);
            var i = gu(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return i._manifestUrl = null,
            i._apiManifestUrl = null,
            i._livePoller = n.livePoller,
            i._setUpLivePoller(),
            i.reset(),
            window.addEventListener("online", function() {
                i._pauseReset(),
                i.play()
            }),
            i
        }
        return mu(t, e),
        hu(t, null, [{
            key: "displayName",
            get: function() {
                return "LiveScanner"
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                return Lu.iOS ? [$c] : [Yc, $c]
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return !1
            }
        }]),
        hu(t, [{
            key: "deactivate",
            value: function() {
                pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deactivate", this).call(this),
                this.reset()
            }
        }, {
            key: "reset",
            value: function() {
                this._manifestTimeout && clearTimeout(this._manifestTimeout),
                this._sorcerer && this._sorcerer.destroy(),
                this._sorcerer = null,
                this._hasAudioRepresentation = !1,
                this._streams = {},
                this._streams[Dc] = [],
                this._streams[Bc] = [],
                this._lastStreamIndex = 0,
                this._manifest = null,
                this._manifestTimeout = null,
                this._lastSegmentAppended = {
                    audio: [],
                    video: []
                },
                this._noSegmentsLoadedCount = {
                    audio: 0,
                    video: 0
                },
                this._seenBufferLength = !1,
                this._hasLoadedManifest = !1,
                this._isOnline = !1,
                this._hasEnded = !1,
                this._hlsAvailabilityCheckTimeout = null,
                this._bufferedIndex = 0,
                this._streamChanging = !1,
                this._timeSinceLastStreamSwitchCheck = 0,
                this._forcePlayOnManifestLoad = !1,
                this._abr = new Fc(this,{}),
                this._restrictedStreamIndexes = []
            }
        }, {
            key: "_pauseReset",
            value: function() {
                this._manifestTimeout && clearTimeout(this._manifestTimeout),
                this._manifestTimeout = null,
                isNaN(this.duration) || (this.currentTime = this.duration)
            }
        }, {
            key: "_setUpLivePoller",
            value: function() {
                var e = this;
                this._livePoller.on("liveeventended", function(t) {
                    e._hasEnded = !0,
                    e._sorcerer.destroy(),
                    e.deactivate()
                })
            }
        }, {
            key: "_requestJSON",
            value: function(e) {
                return new nn(function(t, n) {
                    var i = new XMLHttpRequest;
                    i.open("GET", e, !0),
                    i.onload = function() {
                        200 !== i.status && n("Failed to load JSON url: " + e + " " + i.status);
                        var r = void 0;
                        try {
                            r = JSON.parse(i.response)
                        } catch (t) {
                            n("Failed to parse JSON url: " + t + " " + e + " " + i.response)
                        }
                        t(r)
                    }
                    ,
                    i.onerror = function() {
                        n("Failed to load JSON url: " + e)
                    }
                    ,
                    i.send()
                }
                )
            }
        }, {
            key: "_refreshLiveApiPlaylistUrl",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return new nn(function(n, i) {
                    var r = e._livePoller.liveEvent.playlistRefreshUrl;
                    e._requestJSON(r).then(function(o) {
                        if (!("url"in o))
                            return void i("Error parsing 'url' key from player live API refresh endpoint: " + r + " " + o);
                        var a = o.url;
                        e._loadManifestFromExplcitRedirect(a, t).then(n).catch(i)
                    }).catch(i)
                }
                )
            }
        }, {
            key: "_loadManifestFromExplcitRedirect",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return new nn(function(i, r) {
                    t._apiManifestUrl = e,
                    t._requestJSON(t._apiManifestUrl).then(function(e) {
                        return "url"in e ? (t._manifestUrl = e.url,
                        void t._loadManifest(t._manifestUrl, n).then(i).catch(r)) : void r("Error parsing 'url' key from Live API manifest endpoint: " + t._apiManifestUrl + " " + e)
                    }).catch(r)
                }
                )
            }
        }, {
            key: "_loadManifest",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return new nn(function(i, r) {
                    var o = new XMLHttpRequest;
                    o.open("GET", e, !0),
                    o.onload = function() {
                        if (410 === o.status)
                            return n >= Kc ? void r("Manifest load responded with a 410. Giving up refreshing after " + n + " attempts") : (r("Manifest load responded with a 410. Attempting to refresh manifest URL"),
                            void t._refreshLiveApiPlaylistUrl(++n));
                        if (200 !== o.status) {
                            if (t._hasEnded)
                                return void r("Live stream has ended");
                            if (!t._hasLoadedManifest && n < Uc)
                                return void setTimeout(function() {
                                    t._loadManifest(e, ++n).then(i).catch(r)
                                }, Vc);
                            t._livePoller.isForcePolling || t._livePoller.forcePolling(),
                            (t._atDurationEnd() && t._isOnline || !t._hasLoadedManifest) && (t._isOnline = !1,
                            t.fire(Iu.STREAM_OFFLINE));
                            var a = Math.min(1e3 * Math.pow(2, n) + 1e3 * Math.random(), Nc);
                            return void setTimeout(function() {
                                t._loadManifest(e, ++n).then(i).catch(r)
                            }, a)
                        }
                        try {
                            t._manifest = new Ac(o.response,e),
                            t._hasLoadedManifest || (t._hasLoadedManifest = !0),
                            t._livePoller.isForcePolling && t._livePoller.unforcePolling();
                            var s = t._noSegmentsLoadedCount[Bc] > zc || t._noSegmentsLoadedCount[Dc] > zc;
                            t._isOnline || s || (t._isOnline = !0,
                            t.fire(Iu.STREAM_ONLINE)),
                            t._isOnline && s && t._atDurationEnd() && (t._isOnline = !1,
                            t.fire(Iu.STREAM_OFFLINE)),
                            i()
                        } catch (e) {
                            r(e)
                        }
                    }
                    ,
                    o.onerror = function() {
                        r("DASH manifest failed to load.")
                    }
                    ,
                    o.send()
                }
                )
            }
        }, {
            key: "_loadMpd",
            value: function(e) {
                var t = this;
                return new nn(function(n, i) {
                    t._loadManifestFromExplcitRedirect(e).then(function() {
                        t._setUpSorcerer(t._video),
                        t._streams[Dc] = t._sortStreams(t._manifest.videoRepresentations);
                        var e = t._manifest.videoAdaptationSet.mimeType;
                        if (t._streams[Dc].forEach(function(n, i) {
                            t._sorcerer.addStream(e + '; codecs="' + t._streams[Dc][i].codecs + '"', t._streams[Dc][i].segmentList.initSegment),
                            t._lastSegmentAppended[Dc][i] = -1
                        }),
                        t._appendSegments(Dc),
                        t._manifest.audioRepresentations) {
                            t._hasAudioRepresentation = !0,
                            t._streams[Bc] = t._sortStreams(t._manifest.audioRepresentations);
                            var i = t._manifest.audioAdaptationSet.mimeType;
                            t._streams[Bc].forEach(function(e, n) {
                                t._sorcerer.addStream(i + '; codecs="' + t._streams[Bc][n].codecs + '"', t._streams[Bc][n].segmentList.initSegment),
                                t._lastSegmentAppended[Bc][n] = -1
                            }),
                            t._appendSegments(Bc)
                        }
                        return t.fire(Iu.REPRESENTATIONS_AVAILABLE, t._streams),
                        t._setupSorcererEvents(),
                        t._checkForStreamSwitch(),
                        t._manifestRefresh(t._manifestUrl, Math.max(1e3 * t._manifest.minimumUpdatePeriod, qc)),
                        t._forcePlayOnManifestLoad && (t._forcePlayOnManifestLoad = !1,
                        t.play()),
                        n()
                    }).catch(function(e) {
                        i(e)
                    })
                }
                )
            }
        }, {
            key: "_setUpSorcerer",
            value: function(e) {
                var t = this;
                this._sorcerer && this._sorcerer.destroy(),
                this._sorcerer = new dc(e),
                this._sorcerer.on("downloadend", function(e) {
                    if ("string" == typeof e) {
                        var n = e.split("_");
                        t._lastSegmentAppended[n[0]][n[1]] = n[2]
                    }
                })
            }
        }, {
            key: "_setupSorcererEvents",
            value: function() {
                var e = this;
                this._sorcerer.video.on("streamchange", function(t) {
                    e._streamChanging = !1;
                    var n = e._streams[Dc];
                    n[t].bitrate = n[t].bandwidth;
                    var i = {
                        index: t,
                        streams: n
                    };
                    e.fire(Mu.STREAM_CHANGE, i)
                })
            }
        }, {
            key: "setVideoSrc",
            value: function(e, t) {
                switch (this._telecineVideo.currentFile.mime) {
                case Yc:
                    this._loadMpd(e);
                    break;
                case $c:
                    this._video.src = e,
                    this._loadHls()
                }
            }
        }, {
            key: "_isPlaybackHLS",
            value: function() {
                return this._telecineVideo.currentFile.mime === $c
            }
        }, {
            key: "_loadHls",
            value: function() {
                this.fire(Iu.STREAM_ONLINE),
                this._checkHlsAvailability(Gc)
            }
        }, {
            key: "_checkHlsAvailability",
            value: function(e) {
                var t = this
                  , n = function() {
                    t.fire(Iu.STREAM_OFFLINE),
                    t._livePoller.forcePolling()
                };
                this._hlsAvailabilityCheckTimeout = setTimeout(function() {
                    var e = new XMLHttpRequest;
                    e.open("GET", t._video.src),
                    e.onload = function() {
                        200 !== e.status && n(),
                        e.response.match(/^#EXTM3U\n#EXT-X-VERSION:3\n$/) && n()
                    }
                    ,
                    e.onerror = function() {
                        n()
                    }
                    ,
                    e.send()
                }, e)
            }
        }, {
            key: "_manifestRefresh",
            value: function(e, t) {
                var n = this;
                this._manifestTimeout = setTimeout(function() {
                    return n.paused ? void n._pauseReset() : void n._loadManifest(e).then(function() {
                        return n._streams[Dc] = n._sortStreams(n._manifest.videoRepresentations),
                        n._appendSegments(Dc),
                        n._hasAudioRepresentation && (n._streams[Bc] = n._sortStreams(n._manifest.audioRepresentations),
                        n._appendSegments(Bc)),
                        n._manifestRefresh(e, Math.max(1e3 * n._manifest.minimumUpdatePeriod, qc))
                    }).catch(function(e) {})
                }, t)
            }
        }, {
            key: "_segmentIndexCompare",
            value: function(e, t) {
                return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
            }
        }, {
            key: "_appendSegments",
            value: function(e) {
                if (this._sorcerer && this._sorcerer[e]) {
                    for (var t = this._sorcerer[e].activeStreamIndex, n = this._sorcerer[e].streams[t], i = e === Dc ? this._streams[Dc][t].segmentList : this._streams[Bc][t].segmentList, r = i.segments.sort(this._segmentIndexCompare), o = 0, a = 0; a < r.length; a++) {
                        var s = r[a];
                        if (!(s.index < i.startNumber || s.index <= this._lastSegmentAppended[e][t])) {
                            var u = e + "_" + t + "_" + s.index;
                            n.addSegment(s.url, {
                                identifier: u
                            }),
                            o++
                        }
                    }
                    0 === o ? this._noSegmentsLoadedCount[e]++ : this._noSegmentsLoadedCount[e] = 0
                }
            }
        }, {
            key: "_checkForStreamSwitch",
            value: function() {
                if (!this._streamChanging) {
                    var e = this._abr.filterStreams(this._streams[Dc])
                      , t = this._abr.optimalStreamIndex(e, this._lastStreamIndex);
                    if (t !== this._lastStreamIndex) {
                        var n = e.find(function(e) {
                            return e.index === t
                        });
                        this._streamChanging = !0,
                        this._lastSegmentAppended[Dc][this._lastStreamIndex] = -1,
                        this._sorcerer[Dc].switchTo(n, !1),
                        this._lastStreamIndex = t
                    }
                }
            }
        }, {
            key: "_checkForPlaybackGap",
            value: function() {
                if (this._video.buffered.length)
                    return this._bufferedIndex > this.buffered.length - 1 && (this._bufferedIndex = this.buffered.length - 1),
                    this._video.currentTime < this._video.buffered.start(this._bufferedIndex) ? void (this._video.currentTime = this._video.buffered.start(this._bufferedIndex)) : void (Math.floor(this._video.currentTime) + Wc < Math.floor(this._video.buffered.end(this._bufferedIndex)) || this._video.buffered.length - 1 > this._bufferedIndex && (this._bufferedIndex++,
                    this._video.currentTime = this._video.buffered.start(this._bufferedIndex)))
            }
        }, {
            key: "_atDurationEnd",
            value: function() {
                return this._video.currentTime + Hc > this._video.duration
            }
        }, {
            key: "_timeSince",
            value: function(e) {
                return Date.now() - e
            }
        }, {
            key: "_sortStreams",
            value: function(e) {
                function t(e, t) {
                    var n = e.width * e.height * e.bandwidth
                      , i = t.width * t.height * t.bandwidth;
                    return n - i
                }
                var n = e.slice(0);
                return n.sort(t),
                n.forEach(function(e, t) {
                    e.index = t
                }),
                n
            }
        }, {
            key: "onprogress",
            value: function() {
                this._checkForPlaybackGap(),
                this._isPlaybackHLS() && this._hlsAvailabilityCheckTimeout && (clearTimeout(this._hlsAvailabilityCheckTimeout),
                this._hlsAvailabilityCheckTimeout = null,
                this._livePoller.unforcePolling())
            }
        }, {
            key: "ondurationchange",
            value: function() {
                this._checkForPlaybackGap()
            }
        }, {
            key: "ontimeupdate",
            value: function() {
                if (this._sorcerer) {
                    this.fire(Mu.DROPPED_FRAMES, this._sorcerer.getDroppedFrameTotal());
                    var e = this._sorcerer[Dc].activeStreamIndex;
                    if (e) {
                        var t = {
                            speed: this._sorcerer.getCurrentSpeed({
                                type: "average",
                                howMany: 3,
                                weights: [1, 2, 5]
                            }),
                            bitrate: this._streams[Dc][e].bitrate,
                            speeds: this._sorcerer.getResponseSpeeds()
                        };
                        this.fire(Mu.BANDWIDTH, t)
                    }
                    !this._isOnline && this._atDurationEnd() && this.fire(Mu.STREAM_OFFLINE),
                    this._timeSince(this._timeSinceLastStreamSwitchCheck) > jc && (this._checkForStreamSwitch(),
                    this._timeSinceLastStreamSwitchCheck = Date.now())
                }
            }
        }, {
            key: "onstalled",
            value: function() {
                this._isPlaybackHLS() && this._checkHlsAvailability(Xc)
            }
        }, {
            key: "onwaiting",
            value: function() {
                this.fire(Cu.WAITING)
            }
        }, {
            key: "seekToTime",
            value: function() {}
        }, {
            key: "pause",
            value: function() {
                pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "pause", this).call(this),
                this._isPlaybackHLS() || this._pauseReset()
            }
        }, {
            key: "play",
            value: function() {
                var e = this;
                return new nn(function(n, i) {
                    if (!e._manifestUrl)
                        return void (e._forcePlayOnManifestLoad = !0);
                    e._manifestTimeout || e._isPlaybackHLS() || e._manifestRefresh(e._manifestUrl, qc);
                    var r = function() {
                        e._sorcerer && e._sorcerer.removeBuffer(),
                        n(pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "play", e).call(e))
                    };
                    if (e._video.readyState || Lu.android || Lu.iOS)
                        return void r();
                    var o = function t() {
                        e._video.removeEventListener("canplay", t),
                        r()
                    };
                    e._video.addEventListener("canplay", o)
                }
                )
            }
        }, {
            key: "restrictedStreamIndexes",
            get: function() {
                return this._restrictedStreamIndexes
            },
            set: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e,
                this._abr.lock(this._restrictedStreamIndexes))
            }
        }, {
            key: "videoWidth",
            get: function() {
                return this._stream ? this._stream.width : this._video.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                return this._stream ? this._stream.height : this._video.videoHeight
            }
        }, {
            key: "duration",
            get: function() {
                return this._video.duration
            }
        }, {
            key: "currentTime",
            get: function() {
                return this._video.currentTime
            },
            set: function(e) {
                this._video.currentTime = e
            }
        }, {
            key: "sorcerer",
            get: function() {
                return this._sorcerer
            }
        }, {
            key: "segmentLength",
            get: function() {
                return Wc
            }
        }]),
        t
    }(Ju)
      , Jc = function() {
        var e = "Shockwave Flash"
          , t = "application/x-shockwave-flash"
          , n = "ShockwaveFlash.ShockwaveFlash"
          , i = window.navigator
          , r = 0
          , o = !1
          , a = null;
        if ("undefined" != typeof i.plugins && "object" === du(i.plugins[e])) {
            if (a = i.plugins[e].description,
            a && ("undefined" == typeof i.mimeTypes || !i.mimeTypes[t] || i.mimeTypes[t].enabledPlugin)) {
                o = !0,
                a = a.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                var s = parseInt(a.replace(/^(.*)\..*$/, "$1"), 10)
                  , u = parseInt(a.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                r = parseFloat(s + "." + u)
            }
        } else if ("undefined" != typeof window.ActiveXObject)
            try {
                var c = new ActiveXObject(n);
                c && (a = c.GetVariable("$version"),
                a && (o = !0,
                a = a.split(" ")[1].split(","),
                r = parseFloat(parseInt(a[0], 10) + "." + parseInt(a[1], 10))))
            } catch (e) {}
        return {
            installed: o,
            version: r
        }
    }()
      , Zc = function(e) {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (fu(this, t),
            !n.swfScanner || !n.swfScanner.swfUrl)
                throw new Error("The url to the swf is required to use the SWFScanner.");
            var i = gu(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
              , r = "flideo_" + pt().replace(/-/g, "_");
            return window[r] = {
                onFlashEvent: function(e) {
                    return i.onEvent(e)
                }
            },
            i._swf = i.createSwf(i._options.swfScanner.swfUrl, r + ".onFlashReady"),
            i._element.appendChild(i._swf),
            i._loaded = !1,
            i._volume = 1,
            i._muted = !1,
            i._loadedPromise = new nn(function(e, t) {
                window[r].onFlashReady = function() {
                    i._loaded = !0,
                    i.attachVideoEvents(r + ".onFlashEvent"),
                    e()
                }
                ,
                setTimeout(t, 1e4)
            }
            ),
            i
        }
        return mu(t, e),
        hu(t, null, [{
            key: "displayName",
            get: function() {
                return "SWFScanner"
            }
        }, {
            key: "supported",
            get: function() {
                return Jc.installed && Jc.version >= 10.1
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                return ["application/vnd.apple.mpegurl", "video/mp4", "video/x-flv"]
            }
        }]),
        hu(t, [{
            key: "deactivate",
            value: function() {
                this._swf.parentElement.removeChild(this._swf)
            }
        }, {
            key: "play",
            value: function() {
                var e = this;
                return this._loadedPromise.then(function() {
                    return e._swf._play()
                })
            }
        }, {
            key: "pause",
            value: function() {
                var e = this;
                this.onLoaded(function() {
                    return e._swf._pause()
                })
            }
        }, {
            key: "attachVideoEvents",
            value: function(e) {
                var t = this;
                Object.keys(Cu).forEach(function(n) {
                    var i = Cu[n];
                    t._swf.api_addEventListener(i, e)
                })
            }
        }, {
            key: "createSwf",
            value: function(e, t) {
                var n = document.createElement("object");
                n.setAttribute("type", "application/x-shockwave-flash"),
                n.setAttribute("width", "100%"),
                n.setAttribute("height", "100%"),
                n.setAttribute("data", e);
                var i = {
                    flashvars: "ready=" + t,
                    movie: e,
                    allowfullscreen: "true",
                    allowscriptaccess: "always",
                    bgcolor: "#000000",
                    wmode: "opaque",
                    quality: "high",
                    scalemode: "noscale"
                };
                for (var r in i) {
                    var o = document.createElement("param");
                    o.setAttribute("name", r),
                    o.setAttribute("value", i[r]),
                    n.appendChild(o)
                }
                return n
            }
        }, {
            key: "onEvent",
            value: function(e) {
                "function" == typeof this["on" + e.type] && this["on" + e.type](e) === !1 || this.fire(e.type, e)
            }
        }, {
            key: "onLoaded",
            value: function(e) {
                this._loadedPromise = this._loadedPromise.then(e)
            }
        }, {
            key: "onerror",
            value: function() {
                var e = this._swf.getError()
                  , t = e.code;
                switch (t) {
                case 1:
                    return this.fire(Cu.ERROR, new TelecineError("MediaAbortedError","The user agent aborted the fetching of the media.")),
                    !1;
                case 2:
                    return this.fire(Cu.ERROR, new TelecineError("MediaNetworkError","A network error ocurred while fetching the media.")),
                    !1;
                case 3:
                    return this.fire(Cu.ERROR, new TelecineError("MediaDecodeError","The media could not be decoded.")),
                    this._switchToNextFile(),
                    !1;
                case 4:
                    return this.fire(Cu.ERROR, new TelecineError("MediaSrcNotSupportedError","The media was not suitable.")),
                    this._switchToNextFile(),
                    !1;
                default:
                    return this.fire(Cu.ERROR, new TelecineError("MediaUnknownError","An unknown error occurred.")),
                    !1
                }
            }
        }, {
            key: "buffered",
            get: function() {
                if (!this._loaded)
                    return pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "buffered", this);
                var e = this._swf.getBuffered()
                  , n = e.start
                  , i = e.end;
                return kt(n, i)
            }
        }, {
            key: "currentFile",
            get: function() {
                return pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "currentFile", this)
            },
            set: function(e) {
                var n = this
                  , i = this._currentFile;
                yu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "currentFile", e, this),
                this.onLoaded(function() {
                    var t = !n._swf.getPaused()
                      , r = n._swf.getCurrentTime();
                    n._swf.setSrc(e.src),
                    n.fire(Mu.CURRENT_FILE_CHANGE, e),
                    i && (n._swf.setCurrentTime(r),
                    t && n._swf._play())
                })
            }
        }, {
            key: "currentTime",
            get: function() {
                return this._loaded ? this._swf.getCurrentTime() : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "currentTime", this)
            },
            set: function(e) {
                var t = this;
                this.onLoaded(function() {
                    return t._swf.setCurrentTime(e)
                })
            }
        }, {
            key: "duration",
            get: function() {
                return this._loaded ? this._swf.getDuration() : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "duration", this)
            }
        }, {
            key: "ended",
            get: function() {
                return this._loaded ? this._swf.getEnded() : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "ended", this)
            }
        }, {
            key: "loop",
            get: function() {
                return this._loaded ? this._swf.getLoop() : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "loop", this)
            },
            set: function(e) {
                var t = this;
                this.onLoaded(function() {
                    return t._swf.setLoop(e)
                })
            }
        }, {
            key: "muted",
            get: function() {
                return this._muted
            },
            set: function(e) {
                var t = this;
                this._muted = e;
                var n = e === !0 ? 0 : this._volume;
                this.onLoaded(function() {
                    return t._swf.setVolume(n)
                })
            }
        }, {
            key: "paused",
            get: function() {
                return this._loaded ? this._swf.getPaused() : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "paused", this)
            }
        }, {
            key: "videoWidth",
            get: function() {
                return this._loaded ? this._swf.getVideoWidth() : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "videoWidth", this)
            }
        }, {
            key: "videoHeight",
            get: function() {
                return this._loaded ? this._swf.getVideoHeight() : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "videoHeight", this)
            }
        }, {
            key: "volume",
            get: function() {
                return this._loaded ? this._swf.getVolume() : pu(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "volume", this)
            },
            set: function(e) {
                var t = this;
                this._volume = e,
                this.onLoaded(function() {
                    return t._swf.setVolume(e)
                })
            }
        }]),
        t
    }(Bu)
      , el = new lu
      , tl = new lu
      , TelecineFile = function() {
        function TelecineFile(e, t) {
            var n = e.src
              , i = e.mime
              , r = e.id
              , o = void 0 === r ? pt() : r
              , a = e.priority
              , s = void 0 === a ? 0 : a
              , u = e.metadata
              , c = void 0 === u ? {} : u;
            if (fu(this, TelecineFile),
            !n)
                throw new TypeError("Must provide a src for the file.");
            if (!i)
                throw new TypeError("Must provide a mime type for the file.");
            "application/x-mpegURL" === i && (i = "application/vnd.apple.mpegurl"),
            Object.defineProperties(this, {
                mime: {
                    value: i,
                    enumerable: !0
                },
                id: {
                    value: "" + o,
                    enumerable: !0
                },
                metadata: {
                    value: c,
                    enumerable: !0
                }
            }),
            this.video = t,
            this.priority = s,
            this.src = n
        }
        return hu(TelecineFile, [{
            key: "priority",
            get: function() {
                return el.get(this)
            },
            set: function(e) {
                if (e = parseInt(e, 10),
                "number" == typeof e && isFinite(e) && Math.floor(e) === e && e >= 0)
                    return void el.set(this, e);
                throw new TypeError("The file priority must be an integer greater than or equal to 0.")
            }
        }, {
            key: "src",
            get: function() {
                return tl.get(this)
            },
            set: function(e) {
                tl.set(this, e),
                this.video.fire(Mu.FILE_SRC_UPDATE, this)
            }
        }, {
            key: "restrictedStreamIndexes",
            get: function() {
                if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes"))
                    throw new ReferenceError("The current scanner does not support streams.");
                return this.video.currentScanner.restrictedStreamIndexes
            },
            set: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (!Array.isArray(e))
                    throw new TypeError("Indexes must be an array.");
                if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes"))
                    throw new ReferenceError("The current scanner does not support streams.");
                this.video.currentScanner.restrictedStreamIndexes = e
            }
        }]),
        TelecineFile
    }()
      , nl = ["disabled", "hidden", "showing"]
      , il = ["subtitles", "captions", "descriptions", "chapters", "metadata"]
      , rl = ["ar", "fa", "he", "iw", "ku", "ps", "sd", "ur", "yi"]
      , ol = new lu
      , al = new lu
      , TelecineTextTrack = function() {
        function TelecineTextTrack(e, t) {
            var n = e.kind
              , i = e.src
              , r = void 0 === i ? null : i
              , o = e.label
              , a = void 0 === o ? "" : o
              , s = e.language
              , u = void 0 === s ? "" : s
              , c = e.id
              , l = void 0 === c ? pt() : c;
            if (fu(this, TelecineTextTrack),
            il.indexOf(n) === -1)
                throw ct(12, "SYNTAX_ERR", "Syntax Error");
            ut(this),
            Object.defineProperties(this, {
                kind: {
                    value: n,
                    enumerable: !0
                },
                label: {
                    value: a,
                    enumerable: !0
                },
                language: {
                    value: u,
                    enumerable: !0
                },
                id: {
                    value: "" + l,
                    enumerable: !0
                },
                rtl: {
                    value: rl.indexOf(u.substr(0, 2)) !== -1,
                    enumerable: !0
                }
            }),
            this.video = t,
            this.src = r,
            this._modeHasBeenSet = !1,
            ol.set(this, "disabled")
        }
        return hu(TelecineTextTrack, [{
            key: "dispatchEvent",
            value: function(e) {
                this.fire(e, {
                    target: this
                })
            }
        }, {
            key: "mode",
            get: function() {
                return ol.get(this)
            },
            set: function(e) {
                if (nl.indexOf(e) > -1) {
                    if (this._modeHasBeenSet = !0,
                    ol.get(this) === e)
                        return;
                    ol.set(this, e),
                    this.video.currentScanner && this.video.currentScanner.setModeForTrack(this, e),
                    this.dispatchEvent("modechange")
                }
            }
        }, {
            key: "src",
            get: function() {
                return al.get(this)
            },
            set: function(e) {
                al.set(this, e),
                this.video.fire(Mu.TEXT_SRC_UPDATE, this)
            }
        }, {
            key: "cues",
            get: function() {
                return this.video.currentScanner ? this.video.currentScanner.getCuesForTrack(this) : []
            }
        }, {
            key: "activeCues",
            get: function() {
                return this.video.currentScanner ? this.video.currentScanner.getActiveCuesForTrack(this) : []
            }
        }]),
        TelecineTextTrack
    }()
      , sl = function() {
        function e(t, n) {
            fu(this, e),
            this._cdms = t.cdms,
            this._lrToken = t.lr_token,
            this._userId = t.user,
            this._assetId = t.asset,
            this._useHls = n,
            this._licenseUrl = null,
            this._keySession = null,
            this._preferredKeySystem = null,
            this._encryptedEventName = null,
            this._boundGenerateRequest = this._generateRequest.bind(this)
        }
        return hu(e, [{
            key: "init",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this._video = e._video,
                this._scanner = e,
                this._canHandleEME() ? (this._licenseRequestMetadata = this._getLicenseRequestHeader(),
                this._getKeySystems(n).then(function(e) {
                    if (e.forEach(function(e) {
                        e.keySystem && (t._preferredKeySystem = e)
                    }),
                    !t._preferredKeySystem)
                        return t._scanner.fire(Mu.EME_UNSUPPORTED),
                        !1;
                    var n = t._getCdmFromSystem(t._preferredKeySystem);
                    return t._encryptedEventName = "encrypted",
                    t._licenseUrl = n.license_url,
                    t._useHls && (t._certificateUrl = n.certificate_url,
                    t._encryptedEventName = "webkitneedkey"),
                    t._video.addEventListener(t._encryptedEventName, t._boundGenerateRequest),
                    t._useHls ? (t._video.webkitSetMediaKeys(t._preferredKeySystem.keySystem),
                    !0) : t._video.mediaKeys ? (t._keySession = t._video.mediaKeys.createSession(),
                    t._keySession.addEventListener("message", function(e) {
                        return t._getLicense(e)
                    }),
                    !0) : (t._keySession = t._preferredKeySystem.keySystem.createSession(),
                    t._keySession.addEventListener("message", function(e) {
                        return t._getLicense(e)
                    }),
                    t._video.setMediaKeys(t._preferredKeySystem.keySystem),
                    !0)
                })) : (this._scanner.fire(Mu.EME_UNSUPPORTED),
                !1)
            }
        }, {
            key: "destroy",
            value: function() {
                this._keySession && this._keySession.sessionId && this._keySession.close(),
                this._video.removeEventListener(this._encryptedEventName, this._boundGenerateRequest)
            }
        }, {
            key: "_generateRequest",
            value: function(e) {
                var t = this;
                return "com.apple.fps.1_0" === this._preferredKeySystem.name ? (this._loadFairPlayCertificate().then(function(n) {
                    t._contentId = "assetId=" + t._assetId;
                    var i = t._concatInitDataIdAndCertificate(e.initData, t._contentId, n);
                    return t._keySession = t._preferredKeySystem.keySystem.createSession("video/mp4", i),
                    t._keySession.addEventListener("webkitkeymessage", function(e) {
                        return t._getLicense(e)
                    }, !1),
                    n
                }).catch(function(e) {
                    t._scanner.fire(e.error, e.payload)
                }),
                !0) : !this._keySession.sessionId && !this._activeKeySession && (this._activeKeySession = this._keySession.generateRequest(e.initDataType, e.initData).catch(function() {
                    t._scanner.fire(Mu.DRM_FAILURE)
                }),
                !0)
            }
        }, {
            key: "_getLicense",
            value: function(e) {
                var t = this;
                return new nn(function(n, i) {
                    t._activeKeySession = null;
                    var r = new XMLHttpRequest;
                    r.keySession = e.target,
                    r.responseType = "arraybuffer",
                    r.open("POST", t._licenseUrl),
                    r.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(t._licenseRequestMetadata)));
                    var o = e.message;
                    if ("com.microsoft.playready" === t._preferredKeySystem.name) {
                        var a = t._unpackPlayReadyRequest(e.message)
                          , s = a[0];
                        Object.keys(s).forEach(function(e) {
                            r.setRequestHeader([e], s[e])
                        }),
                        o = a[1]
                    }
                    if ("com.apple.fps.1_0" === t._preferredKeySystem.name) {
                        var u = btoa(String.fromCharCode.apply(null, o));
                        u = encodeURIComponent(u),
                        o = "spc=" + u + "&" + t._contentId,
                        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                    }
                    r.onload = function() {
                        if (403 === r.status) {
                            var e = JSON.parse(r.getResponseHeader("x-dt-error-message"));
                            return void i({
                                error: "drmauthfailure",
                                payload: {
                                    text: e.error,
                                    code: e.error_code
                                }
                            })
                        }
                        if (r.status >= 400)
                            return void i({
                                error: "drmfailure"
                            });
                        try {
                            t._scanner.fire(Mu.DRM_AUTH_SUCCESS);
                            var o = new Uint8Array(r.response)
                              , a = o.buffer;
                            "com.apple.fps.1_0" === t._preferredKeySystem.name && (a = t._unpackFairPlayLicenseResponse(btoa(String.fromCharCode.apply(null, o)))),
                            r.keySession.update(a),
                            n()
                        } catch (e) {
                            i("Error updating key session: " + e)
                        }
                    }
                    ,
                    r.onerror = i,
                    r.send(o)
                }
                ).catch(function(e) {
                    t._scanner.fire(e.error, e.payload)
                })
            }
        }, {
            key: "_canHandleEME",
            value: function() {
                var e = !!(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration || window.WebKitMediaKeys);
                return e
            }
        }, {
            key: "_concatInitDataIdAndCertificate",
            value: function(e, t, n) {
                "string" == typeof t && (t = yt(t));
                var i = 0
                  , r = new ArrayBuffer(e.byteLength + 4 + t.byteLength + 4 + n.byteLength)
                  , o = new DataView(r)
                  , a = new Uint8Array(r,i,e.byteLength);
                a.set(e),
                i += e.byteLength,
                o.setUint32(i, t.byteLength, !0),
                i += 4;
                var s = new Uint8Array(r,i,t.byteLength);
                s.set(t),
                i += s.byteLength,
                o.setUint32(i, n.byteLength, !0),
                i += 4;
                var u = new Uint8Array(r,i,n.byteLength);
                return u.set(n),
                new Uint8Array(r,0,r.byteLength)
            }
        }, {
            key: "_loadFairPlayCertificate",
            value: function() {
                var e = this;
                return new nn(function(t, n) {
                    var i = new XMLHttpRequest;
                    i.responseType = "arraybuffer",
                    i.open("GET", e._certificateUrl),
                    i.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(e._licenseRequestMetadata))),
                    i.onload = function() {
                        if (403 === i.status) {
                            var e = JSON.parse(i.getResponseHeader("x-dt-error-message"));
                            return void n({
                                error: "drmauthfailure",
                                payload: {
                                    text: e.error,
                                    code: e.error_code
                                }
                            })
                        }
                        if (i.status >= 400)
                            return void n({
                                error: "drmfailure"
                            });
                        try {
                            t(new Uint8Array(i.response))
                        } catch (e) {
                            n(e)
                        }
                    }
                    ,
                    i.onerror = n,
                    i.send()
                }
                )
            }
        }, {
            key: "_getCdmFromSystem",
            value: function(e) {
                var t = this
                  , n = null;
                return Object.keys(this._cdms).forEach(function(i) {
                    e.name === t._cdms[i].id && (n = t._cdms[i])
                }),
                n
            }
        }, {
            key: "_unpackFairPlayLicenseResponse",
            value: function(e) {
                var t = window.atob(e.trim());
                return "<ckc>" === t.substr(0, 5) && "</ckc>" === t.substr(-6) && (t = t.slice(5, -6)),
                new Uint8Array(atob(t).split("").map(function(e) {
                    return e.charCodeAt(0)
                }))
            }
        }, {
            key: "_unpackPlayReadyRequest",
            value: function(e) {
                for (var t = String.fromCharCode.apply(null, new Uint16Array(e)), n = (new DOMParser).parseFromString(t, "application/xml"), i = {}, r = n.getElementsByTagName("HttpHeader"), o = 0; o < r.length; ++o) {
                    var a = r[o].querySelector("name")
                      , s = r[o].querySelector("value");
                    i[a.textContent] = s.textContent
                }
                var u = n.querySelector("Challenge");
                return e = new Uint8Array(atob(u.textContent).split("").map(function(e) {
                    return e.charCodeAt(0)
                })),
                [i, e]
            }
        }, {
            key: "_getLicenseRequestHeader",
            value: function() {
                var e = {}
                  , t = window.screen.availWidth + "x" + window.screen.availHeight
                  , n = window.devicePixelRatio;
                return e.merchant = "vimeo",
                e.sessionId = JSON.stringify({
                    ua: navigator.userAgent,
                    token: this._lrToken,
                    resolution: t,
                    pixelRatio: n
                }),
                e.userId = this._userId,
                e
            }
        }, {
            key: "_getKeySystems",
            value: function(e) {
                var t = this
                  , n = e.audio || []
                  , i = e.video || []
                  , r = {
                    persistentState: "optional",
                    sessionTypes: ["temporary"]
                };
                i.length && (r.videoCapabilities = i.map(function(e) {
                    return {
                        contentType: e
                    }
                })),
                n.length && (r.audioCapabilities = n.map(function(e) {
                    return {
                        contentType: e
                    }
                }));
                var o = Object.keys(this._cdms).map(function(e) {
                    var n = t._cdms[e].id;
                    if (t._useHls) {
                        var i = null;
                        try {
                            i = new window.WebKitMediaKeys(n)
                        } catch (e) {}
                        return nn.resolve({
                            name: n,
                            keySystem: i
                        })
                    }
                    return navigator.requestMediaKeySystemAccess(n, [r, {}]).then(function(e) {
                        return e.createMediaKeys()
                    }).catch(function(e) {}).then(function(e) {
                        return {
                            name: n,
                            keySystem: e
                        }
                    })
                });
                return nn.all(o)
            }
        }]),
        e
    }()
      , ul = new lu
      , TelecineVideo = function() {
        function TelecineVideo(e) {
            var t = this
              , n = e.files
              , i = e.id
              , r = void 0 === i ? pt() : i
              , o = e.title
              , a = void 0 === o ? null : o
              , s = e.subtitle
              , u = void 0 === s ? null : s
              , c = e.metadata
              , l = void 0 === c ? {} : c
              , d = e.textTracks
              , f = void 0 === d ? ft() : d
              , h = e.externalDisplayFiles
              , v = void 0 === h ? {} : h;
            if (fu(this, TelecineVideo),
            !n || !Array.isArray(n))
                throw new TypeError("Must provide files for the video.");
            ut(this);
            var p = dt(n.map(function(e) {
                return e instanceof TelecineFile ? (e.video = t,
                e) : new TelecineFile(e,t)
            }))
              , m = ft(f.map(function(e) {
                return e instanceof TelecineTextTrack ? (e.video = t,
                e) : new TelecineTextTrack(e,t)
            }));
            Object.keys(v).forEach(function(e) {
                !v[e] || v[e]instanceof TelecineFile || (v[e] = new TelecineFile(v[e],t))
            }),
            Object.defineProperties(this, {
                id: {
                    value: "" + r,
                    enumerable: !0
                },
                title: {
                    value: a,
                    enumerable: !0
                },
                subtitle: {
                    value: u,
                    enumerable: !0
                },
                metadata: {
                    value: l,
                    enumerable: !0
                },
                files: {
                    value: p,
                    enumerable: !0
                },
                textTracks: {
                    value: m,
                    enumerable: !0
                },
                externalDisplayFiles: {
                    value: v,
                    enumerable: !0
                }
            }),
            l.drm && (this._drmHandler = new sl(l.drm,l.useHls))
        }
        return hu(TelecineVideo, [{
            key: "deactivate",
            value: function() {
                var e = this;
                this._drmHandler && this._drmHandler.destroy(),
                this.textTracks.forEach(function(t) {
                    return e.currentScanner.removeTextTrack(t)
                })
            }
        }, {
            key: "drmHandler",
            get: function() {
                return this._drmHandler || null
            }
        }, {
            key: "currentFile",
            get: function() {
                return this.currentScanner.currentFile
            },
            set: function(e) {
                this.currentScanner.currentFile = e
            }
        }, {
            key: "currentScanner",
            get: function() {
                return ul.get(this)
            },
            set: function(e) {
                var t = this;
                this.currentScanner && this.currentScanner.constructor.supportsTextTracks && this.textTracks.forEach(function(e) {
                    return t.currentScanner.removeTextTrack(e)
                }),
                e.constructor.supportsTextTracks && this.textTracks.forEach(function(t) {
                    return e.addTextTrack(t)
                }),
                ul.set(this, e)
            }
        }]),
        TelecineVideo
    }()
      , cl = {
        pending: "pending",
        active: "active",
        started: "started",
        ended: "ended"
    }
      , ll = {
        started: "started",
        done: "done",
        error: "error"
    }
      , dl = 5e3
      , fl = 3
      , hl = function() {
        function e(t) {
            fu(this, e),
            ut(this),
            this.liveEvent = t,
            this._forcedPoll = !1,
            this._setupPolling()
        }
        return hu(e, [{
            key: "forcePolling",
            value: function() {
                this.isForcePolling || (this._forcedPoll = !0,
                this._setupPolling())
            }
        }, {
            key: "unforcePolling",
            value: function() {
                this._forcedPoll = !1
            }
        }, {
            key: "_setupPolling",
            value: function() {
                return this._shouldPollApp() ? void this._pollApp() : void (this._shouldPoll() && this._pollLiveApi())
            }
        }, {
            key: "_shouldPoll",
            value: function() {
                return (this.liveEvent.status !== cl.ended || !this.liveEvent.archive || this.liveEvent.archive.status === ll.started) && (!!this.isForcePolling || this.liveEvent.status !== cl.started)
            }
        }, {
            key: "_shouldPollApp",
            value: function() {
                return !this.liveEvent.sessionUrl || this.liveEvent.status === cl.pending && null === this.liveEvent.id
            }
        }, {
            key: "_request",
            value: function(e) {
                return new nn(function(t, n) {
                    var i = new XMLHttpRequest;
                    i.open("GET", e, !0),
                    i.onload = function() {
                        if (200 !== i.status)
                            return n(i.status);
                        try {
                            var r = JSON.parse(i.response);
                            return t(r)
                        } catch (t) {
                            return n(new Error("Failed to parse request response: " + e + " " + t))
                        }
                    }
                    ,
                    i.onerror = function() {
                        return n(new Error("Request error: " + e))
                    }
                    ,
                    i.send()
                }
                )
            }
        }, {
            key: "_getSessionUrl",
            value: function() {
                var e = this;
                return new nn(function(t, n) {
                    e._request(e.liveEvent.sessionRefreshUrl).then(function(n) {
                        e.liveEvent.sessionUrl = n.url,
                        t(n.url)
                    }).catch(n)
                }
                )
            }
        }, {
            key: "_pollLiveApi",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (!(t > fl))
                    return this._request(this.liveEvent.sessionUrl).then(function(t) {
                        if (t.status !== e.liveEvent.status) {
                            var n = "liveevent" + t.status;
                            try {
                                e.fire(n, t)
                            } catch (e) {}
                        }
                        if (t.archive && (!e.liveEvent.archive || t.archive.status !== e.liveEvent.archive.status)) {
                            var i = "livearchive" + t.archive.status;
                            e.fire(i, t)
                        }
                        e.liveEvent = Object.assign(e.liveEvent, t),
                        e._shouldPoll() && setTimeout(e._pollLiveApi.bind(e), dl)
                    }).catch(function(n) {
                        if ("number" == typeof n && 410 === n)
                            return e._getSessionUrl.then(function() {
                                setTimeout(e._pollLiveApi.bind(e, ++t), dl)
                            })
                    })
            }
        }, {
            key: "_pollApp",
            value: function() {
                var e = this;
                return this._request(this.liveEvent.appPollUrl).then(function(t) {
                    return null !== t.ingest.session_id ? (e.liveEvent.id = t.ingest.session_id,
                    e._getSessionUrl().then(e._pollLiveApi.bind(e))) : setTimeout(e._pollApp.bind(e), dl)
                })
            }
        }, {
            key: "isForcePolling",
            get: function() {
                return this._forcedPoll
            }
        }]),
        e
    }()
      , vl = function() {
        function e(t, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            fu(this, e),
            this._element = t,
            this._scanners = n,
            this._options = i,
            this._video = null,
            this._textTracks = ft(),
            this._properties = {},
            this._currentScanner = new Bu,
            this._blacklistedScanners = [],
            this._activeEffects = [],
            this._options.liveEvent && this.initLiveEvent(this._options.liveEvent),
            ut(this)
        }
        return hu(e, [{
            key: "supportsEffect",
            value: function(e) {
                var t = this;
                return !!e.supported && e.supportedScanners.some(function(e) {
                    return t._getScannerName(t._currentScanner) === e.displayName
                })
            }
        }, {
            key: "getEffectByName",
            value: function(e) {
                var t = this
                  , n = null;
                return this._activeEffects.forEach(function(i) {
                    e === t._getEffectName(i) && (n = i)
                }),
                n
            }
        }, {
            key: "activateEffect",
            value: function(e, t) {
                var n = new e(this,t);
                return n.activate(),
                this._activeEffects.push(n),
                n
            }
        }, {
            key: "deactivateEffect",
            value: function(e) {
                var t = this;
                this._activeEffects.some(function(n, i) {
                    return n.constructor === e && (n.deactivate(),
                    t._activeEffects.splice(i, 1),
                    !0)
                })
            }
        }, {
            key: "deactivateEffects",
            value: function() {
                var e = this;
                this._activeEffects.forEach(function(t) {
                    return e.deactivateEffect(t.constructor)
                })
            }
        }, {
            key: "play",
            value: function() {
                if (!this._video || this._video.files.length < 1)
                    throw new TelecineError("NoFiles","There are no files to play.");
                var e = this._currentScanner.play();
                return this._properties.paused = !1,
                e
            }
        }, {
            key: "pause",
            value: function() {
                if (!this._video || this._video.files.length < 1)
                    throw new TelecineError("NoFiles","There are no files to play.");
                return this._currentScanner.pause(),
                this._properties.paused = !0,
                this
            }
        }, {
            key: "getBitrateAtTime",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "video";
                return "MediaSourceScanner" !== this._getScannerName(this._currentScanner) ? 0 : "audio" === t && this._currentScanner._streams[t].length <= 1 ? 0 : this._currentScanner.getBitrateAtTime(e, t)
            }
        }, {
            key: "showExternalDisplayPicker",
            value: function(e) {
                return this._currentScanner.showExternalDisplayPicker(e)
            }
        }, {
            key: "supportsPresentationMode",
            value: function(e) {
                return this.supportedPresentationModes.indexOf(e) !== -1
            }
        }, {
            key: "addCuePoint",
            value: function(e, t) {
                return this._currentScanner.addCuePoint(e, t)
            }
        }, {
            key: "removeCuePoint",
            value: function(e) {
                return this._currentScanner.removeCuePoint(e)
            }
        }, {
            key: "removeAllCuePoints",
            value: function() {
                return this._currentScanner.removeAllCuePoints()
            }
        }, {
            key: "isLowerProfileAvailable",
            value: function() {
                return "MediaSourceScanner" === this._getScannerName(this._currentScanner) && this._currentScanner.isLowerProfileAvailable()
            }
        }, {
            key: "_findScanner",
            value: function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.textTrackSupport, n = void 0 !== t && t, i = this._video.files.map(function(e) {
                    return e.mime
                }), r = this._scanners, o = r, a = Array.isArray(o), s = 0, o = a ? o : o[cu.iterator](); ; ) {
                    var u;
                    if (a) {
                        if (s >= o.length)
                            break;
                        u = o[s++]
                    } else {
                        if (s = o.next(),
                        s.done)
                            break;
                        u = s.value
                    }
                    var c = u;
                    if (c.supported && (!n || c.supportsTextTracks) && this._blacklistedScanners.indexOf(this._getScannerName(c)) === -1) {
                        var l = c.supportedVideoTypes;
                        if (l.some(function(e) {
                            return i.indexOf(e) !== -1
                        }))
                            return c
                    }
                }
                return n ? (this.fire(Cu.ERROR, new TelecineError("TextTracksNotSupported","None of the scanners support text tracks in this browser.")),
                this._blacklistedScanners = [],
                this._findScanner()) : null
            }
        }, {
            key: "_initScanner",
            value: function(e, t) {
                var n = this;
                if (this._currentScanner.constructor === e)
                    return void (this._currentScanner.video !== t && (t.currentScanner = this._currentScanner,
                    this._currentScanner.video = t));
                this._currentScanner.deactivate();
                var i = new e(this._element,this._options);
                Object.keys(Du).forEach(function(e) {
                    var t = Du[e];
                    i.on(t, function(e) {
                        return n._handleEvent(t, e, i)
                    })
                }),
                this._currentScanner = i,
                t.currentScanner = i,
                this._currentScanner.video = t;
                for (var r = Object.keys(this._properties), o = 0; o < r.length; o++) {
                    var a = r[o];
                    "paused" !== a ? "currentTime" !== a && (this._currentScanner[a] = this._properties[a]) : this._properties.paused === !1 && this._currentScanner.play()
                }
                this.fire(Mu.SCANNER_CHANGE, this._getScannerName(this._currentScanner))
            }
        }, {
            key: "_updateScanner",
            value: function() {
                if (null !== this._video) {
                    var e = this._findScanner({
                        textTrackSupport: this._video.textTracks.length > 0
                    });
                    return e ? void this._initScanner(e, this._video) : void this.fire(Cu.ERROR, new TelecineError("FilesNotPlayable","None of the files could be played in this browser."))
                }
            }
        }, {
            key: "_handleEvent",
            value: function(e, t, n) {
                if (n === this._currentScanner) {
                    switch (e) {
                    case Cu.ERROR:
                        return void (t instanceof TelecineError && this.fire(Cu.ERROR, t));
                    case Mu.SCANNER_ERROR:
                        this.fire(Cu.ERROR, new TelecineError("ScannerError","The current scanner can no longer be used because " + t.reason)),
                        this._blacklistedScanners.push(this._getScannerName(this._currentScanner)),
                        this._updateScanner([]);
                        break;
                    case Mu.FILE_ERROR:
                        this.fire(Cu.ERROR, new TelecineError("FileError","The current file can no longer be used because " + t.reason)),
                        this._currentScanner._switchToNextFile();
                        break;
                    case Mu.DOWNLOAD_ERROR:
                        this.fire(Cu.ERROR, new TelecineError("DownloadError",t)),
                        this._currentScanner._switchToNextFile();
                        break;
                    case Mu.EME_UNSUPPORTED:
                        this.fire(Cu.ERROR, new TelecineError("DRMFailure",{
                            text: null,
                            code: "emeunsupported"
                        }));
                        break;
                    case Mu.DRM_FAILURE:
                        this.fire(Cu.ERROR, new TelecineError("DRMFailure",{
                            text: null,
                            code: null
                        }));
                        break;
                    case Mu.DRM_AUTH_FAILURE:
                        this.fire(Cu.ERROR, new TelecineError("DRMFailure",{
                            text: t.text,
                            code: t.code
                        }));
                        break;
                    case Mu.DRM_AUTH_SUCCESS:
                        this.fire(Mu.DRM_AUTH_SUCCESS);
                        break;
                    case Cu.TIME_UPDATE:
                        this._properties.currentTime = this._currentScanner.currentTime;
                        break;
                    case Mu.MEDIA_URL_EXPIRED:
                        this.fire(Cu.ERROR, new TelecineError("MediaUrlExpired",t));
                        break;
                    case Fu.SPATIAL_UNSUPPORTED:
                        this.getEffectByName("ThreeSixtyEffect").deactivate();
                        break;
                    case Cu.ENDED:
                        this._properties.paused = !0;
                        break;
                    case Cu.WAITING:
                        this.fire(Cu.WAITING)
                    }
                    this._activeEffects.forEach(function(t) {
                        "function" == typeof t["on" + e] && t["on" + e]()
                    }),
                    this.fire(e, t)
                }
            }
        }, {
            key: "_getScannerName",
            value: function(e) {
                return e instanceof Bu ? e.constructor.displayName : e.prototype.constructor.displayName
            }
        }, {
            key: "_getEffectName",
            value: function(e) {
                return e instanceof wu ? e.constructor.displayName : e.prototype.constructor.displayName
            }
        }, {
            key: "initLiveEvent",
            value: function(e) {
                var t = this;
                this._options.livePoller && (this._options.livePoller = null);
                var n = new hl(e);
                Object.keys(Iu).forEach(function(e) {
                    var i = Iu[e];
                    n.on(i, function(e) {
                        t.fire(i, e)
                    })
                }),
                this._options.livePoller = n
            }
        }, {
            key: "supportsSettingVolume",
            get: function() {
                return this._scanners.some(function(e) {
                    return e.supported && e.supportsSettingVolume
                })
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return this._currentScanner.constructor.supportsPlaybackRate
            }
        }, {
            key: "supportsTextTracks",
            get: function() {
                return this._scanners.some(function(e) {
                    return e.supported && e.supportsTextTracks
                })
            }
        }, {
            key: "activeEffects",
            get: function() {
                return this._activeEffects
            }
        }, {
            key: "buffered",
            get: function() {
                return this._currentScanner.buffered
            }
        }, {
            key: "manifestLoadDurations",
            get: function() {
                return this._currentScanner.manifestLoadDurations ? this._currentScanner.manifestLoadDurations : []
            }
        }, {
            key: "successfulSegments",
            get: function() {
                return this._currentScanner.successfulSegments ? this._currentScanner.successfulSegments : []
            }
        }, {
            key: "failedSegments",
            get: function() {
                return this._currentScanner.failedSegments ? this._currentScanner.failedSegments : []
            }
        }, {
            key: "cuePoints",
            get: function() {
                return this._currentScanner.cuePoints
            }
        }, {
            key: "currentFile",
            get: function() {
                return this._currentScanner.currentFile
            },
            set: function(e) {
                if ("string" == typeof e && (e = this._files.filter(function(t) {
                    return t.id === e
                })[0]),
                !e)
                    throw new TelecineError("FileNotValid","The file is not valid.");
                this._currentScanner.currentFile = e
            }
        }, {
            key: "currentScanner",
            get: function() {
                return this._getScannerName(this._currentScanner)
            }
        }, {
            key: "currentTime",
            get: function() {
                return this._currentScanner.currentTime
            },
            set: function(e) {
                this._properties.currentTime = e,
                this._currentScanner.currentTime = e
            }
        }, {
            key: "duration",
            get: function() {
                return this._currentScanner.duration
            }
        }, {
            key: "ended",
            get: function() {
                return this._currentScanner.ended
            }
        }, {
            key: "externalDisplayAvailable",
            get: function() {
                return this._currentScanner.externalDisplayAvailable
            }
        }, {
            key: "externalDisplayActive",
            get: function() {
                return this._currentScanner.externalDisplayActive
            }
        }, {
            key: "loop",
            get: function() {
                return this._currentScanner.loop
            },
            set: function(e) {
                this._properties.loop = e,
                this._currentScanner.loop = e
            }
        }, {
            key: "muted",
            get: function() {
                return this._currentScanner.muted
            },
            set: function(e) {
                this._properties.muted = !!e,
                this._currentScanner.muted = !!e
            }
        }, {
            key: "paused",
            get: function() {
                return this._currentScanner.paused
            }
        }, {
            key: "defaultPlaybackRate",
            get: function() {
                return this._currentScanner.defaultPlaybackRate
            },
            set: function(e) {
                this._properties.defaultPlaybackRate = e,
                this._currentScanner.defaultPlaybackRate = e
            }
        }, {
            key: "playbackRate",
            get: function() {
                return this._currentScanner.playbackRate
            },
            set: function(e) {
                this._properties.playbackRate = e,
                this._currentScanner.playbackRate = e
            }
        }, {
            key: "preload",
            get: function() {
                return this._currentScanner.preload
            },
            set: function(e) {
                this._properties.preload = e,
                this._currentScanner.preload = e
            }
        }, {
            key: "presentationMode",
            get: function() {
                return this._currentScanner.presentationMode
            },
            set: function(e) {
                this._currentScanner.presentationMode = e
            }
        }, {
            key: "supportedPresentationModes",
            get: function() {
                return this._currentScanner.supportedPresentationModes
            }
        }, {
            key: "video",
            get: function() {
                return this._video
            },
            set: function(e) {
                this._video && this._video.deactivate(),
                this._blacklistedScanners = [],
                this._video = new TelecineVideo(e),
                this._updateScanner()
            }
        }, {
            key: "videoWidth",
            get: function() {
                return this._currentScanner.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                return this._currentScanner.videoHeight
            }
        }, {
            key: "volume",
            get: function() {
                return this._currentScanner.volume
            },
            set: function(e) {
                if (e < 0 || e > 1)
                    throw new TelecineError("IndexSizeError","Failed to set the 'volume' property: The volume provided (" + e + ") is outside of the range [0, 1].");
                this._properties.volume = e,
                this._currentScanner.volume = e
            }
        }]),
        e
    }()
      , pl = 50
      , ml = 2
      , gl = 20
      , yl = 85
      , _l = 60
      , bl = 500
      , wl = function(e) {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            fu(this, t);
            var i = gu(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return i._activated = !1,
            i._camera = null,
            i._scene = null,
            i._renderer = null,
            i._animationFrame = null,
            i.isUserInteracting = !1,
            i._onMouseDownMouseX = 0,
            i._onMouseDownMouseY = 0,
            i._coordinates = {
                lat: 0,
                long: 0
            },
            i._previousCoordinates = {
                lat: 0,
                long: 0
            },
            i._onMouseDownCoordinates = {
                lat: 0,
                long: 0
            },
            i._phi = 0,
            i._theta = 0,
            i._distance = bl,
            i._video = i._telecine._currentScanner._video,
            i._rotation = 0,
            i._gyroVector = {
                x: 0,
                y: 0
            },
            i._offset = {
                lat: 0,
                long: 0
            },
            i._writeSpeeds = {
                videoFps: i._options.fps,
                motionRenderSpeed: _l
            },
            i._maxTimeBetweenWrites = 1e3 / i._writeSpeeds.videoFps,
            i._motionTimeouts = [],
            i._movingAutomatically = !1,
            i._deviceMotionHasOccurred = !1,
            i._updateFromGyroscopePending = !1,
            i._keysPressed = {
                up: !1,
                down: !1,
                left: !1,
                right: !1
            },
            i
        }
        return mu(t, e),
        hu(t, [{
            key: "isUserInteracting",
            set: function(e) {
                if (e !== this._isUserInteracting)
                    return this._isUserInteracting = e,
                    e ? void (this._options.isMobile || this._telecine.fire(Fu.MOTION_START)) : void (this._options.isMobile || this._telecine.fire(Fu.MOTION_END))
            },
            get: function() {
                return this._isUserInteracting
            }
        }], [{
            key: "displayName",
            get: function() {
                return "ThreeSixtyEffect"
            }
        }, {
            key: "supported",
            get: function() {
                return !0
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [Ju, xc]
            }
        }]),
        hu(t, [{
            key: "activate",
            value: function() {
                var e = this;
                return new nn(function(t, n) {
                    if (window.THREE)
                        return void t();
                    var i = document.createElement("script");
                    i.src = e._options.threeUrl,
                    document.body.appendChild(i),
                    i.onload = function() {
                        t()
                    }
                }
                ).then(function() {
                    return e._initialize()
                })
            }
        }, {
            key: "_initialize",
            value: function() {
                this._activated = !0,
                this._camera = new THREE.PerspectiveCamera(this._options.fieldOfView,this._video.clientWidth / this._video.clientHeight,1,2 * bl),
                this._camera.target = new THREE.Vector3(0,0,0),
                this._initializeAutoMovement(this._options.directorTimeline),
                this._scene = new THREE.Scene;
                var e = new THREE.SphereBufferGeometry(bl,120,80);
                e.scale(-1, 1, 1),
                this._texture = new THREE.VideoTexture(this._video),
                this._texture.minFilter = THREE.LinearFilter,
                this._texture.format = THREE.RGBFormat,
                "top-bottom" === this._options.stereoMode && (this._texture.offset.y = .5,
                this._texture.repeat.set(1, .5)),
                "left-right" === this._options.stereoMode && (this._texture.offset.x = .5,
                this._texture.repeat.set(.5, 1));
                var t = new THREE.MeshBasicMaterial({
                    map: this._texture
                })
                  , n = new THREE.Mesh(e,t);
                this._scene.add(n);
                try {
                    this._renderer = new THREE.WebGLRenderer
                } catch (e) {
                    return void this._telecine._currentScanner.fire(Fu.SPATIAL_UNSUPPORTED)
                }
                this._renderer.setPixelRatio(window.devicePixelRatio),
                this._output = document.createElement("div"),
                this._output.appendChild(this._renderer.domElement),
                this._element.appendChild(this._output),
                this._hideOutput(),
                this._telecine._currentScanner._video.setAttribute("crossorigin", "anonymous"),
                this._startRendering(),
                this._telecine._currentScanner.paused || this._showOutput()
            }
        }, {
            key: "onplay",
            value: function() {
                this._activated && (this._showOutput(),
                this.adjustRenderSize())
            }
        }, {
            key: "deactivate",
            value: function() {
                this._output && this._element.removeChild(this._output),
                this._stopRendering(),
                this._activated = !1
            }
        }, {
            key: "snapToCenter",
            value: function() {
                var e = this;
                this._motionTimeouts.forEach(function(e) {
                    return clearTimeout(e)
                });
                var t = 50
                  , n = this._coordinates.long >= 180 ? 360 : 0
                  , i = 0
                  , r = {
                    long: (n - this._coordinates.long) / 11,
                    lat: (i - this._coordinates.lat) / 11
                };
                this._rotation = 0;
                for (var o = function(n) {
                    e._motionTimeouts.push(setTimeout(function() {
                        0 === n && (e._movingAutomatically = !0,
                        e._options.isMobile || (e._maxTimeBetweenWrites = 1e3 / e._writeSpeeds.motionRenderSpeed)),
                        n === t - 1 && (e._movingAutomatically = !1,
                        e._options.isMobile || (e._maxTimeBetweenWrites = 1e3 / e._writeSpeeds.videoFps)),
                        e._updateViewpoint(e._coordinates.lat + r.lat / Math.pow(1.1, n), e._coordinates.long + r.long / Math.pow(1.1, n)),
                        e._offset.lat = THREE.Math.radToDeg(e._gyroVector.x) + e._coordinates.lat + r.lat / Math.pow(1.1, n),
                        e._offset.long = THREE.Math.radToDeg(e._gyroVector.y) + e._coordinates.long + r.lat / Math.pow(1.1, n)
                    }, n * e._maxTimeBetweenWrites))
                }, a = 0; a < t; a++)
                    o(a)
            }
        }, {
            key: "activateStereoRendering",
            value: function() {
                this._stereo || (this._stereo = new THREE.StereoCamera,
                this._stereo.aspect = .5,
                this._renderer.setSize(this._video.clientWidth, this._video.clientHeight),
                this.adjustRenderSize(),
                "mono" !== this._options.stereoMode && this._buildStereoAssets(),
                this._renderStereoScene())
            }
        }, {
            key: "deactivateStereoRendering",
            value: function() {
                this._renderer.render(this._scene, this._camera),
                this._stereo = null,
                this.adjustRenderSize(),
                this._update()
            }
        }, {
            key: "toggleStereoRendering",
            value: function() {
                return this._stereo ? void this.deactivateStereo() : void this.activateStereo()
            }
        }, {
            key: "isStereo",
            value: function() {
                return !!this._stereo
            }
        }, {
            key: "_buildStereoAssets",
            value: function() {
                this._stereoAssets = {
                    left: {
                        scene: new THREE.Scene,
                        geometry: new THREE.SphereBufferGeometry(bl,120,80),
                        texture: new THREE.VideoTexture(this._video)
                    },
                    right: {
                        scene: new THREE.Scene,
                        geometry: new THREE.SphereBufferGeometry(bl,120,80),
                        texture: new THREE.VideoTexture(this._video)
                    }
                };
                for (var e in this._stereoAssets)
                    this._stereoAssets[e].texture.minFilter = THREE.LinearFilter,
                    this._stereoAssets[e].texture.format = THREE.RGBFormat,
                    this._stereoAssets[e].texture.offset.y = .5,
                    this._stereoAssets[e].texture.repeat.set(1, .5),
                    this._stereoAssets[e].material = new THREE.MeshBasicMaterial({
                        map: this._stereoAssets[e].texture
                    }),
                    this._stereoAssets[e].mesh = new THREE.Mesh(this._stereoAssets[e].geometry,this._stereoAssets[e].material),
                    this._stereoAssets[e].geometry.scale(-1, 1, 1),
                    this._stereoAssets[e].scene.add(this._stereoAssets[e].mesh)
            }
        }, {
            key: "_initializeAutoMovement",
            value: function(e) {
                e && e[0] && "undefined" != typeof e[0].p && "undefined" !== e[0].y && this._updateViewpoint(e[0].p, e[0].y)
            }
        }, {
            key: "_renderStereoScene",
            value: function() {
                this._scene.updateMatrixWorld(),
                null === this._camera.parent && this._camera.updateMatrixWorld(),
                this._stereo.update(this._camera);
                var e = this._renderer.getSize();
                this._renderer.autoClear && this._renderer.clear(),
                this._renderer.setScissorTest(!0);
                var t = this._stereoAssets ? {
                    right: this._stereoAssets.right.scene,
                    left: this._stereoAssets.left.scene
                } : {
                    right: this._scene,
                    left: this._scene
                };
                this._renderer.setScissor(0, 0, e.width / 2, e.height),
                this._renderer.setViewport(0, 0, e.width / 2, e.height),
                this._renderer.render(t.right, this._stereo.cameraR),
                this._renderer.setScissor(e.width / 2, 0, e.width / 2, e.height),
                this._renderer.setViewport(e.width / 2, 0, e.width / 2, e.height),
                this._renderer.render(t.left, this._stereo.cameraL),
                this._renderer.setScissorTest(!1)
            }
        }, {
            key: "_updateViewpoint",
            value: function(e, t) {
                this._previousCoordinates.long = this._coordinates.long,
                this._previousCoordinates.lat = this._coordinates.lat,
                e %= 360,
                this._coordinates.lat = Math.max(-yl, Math.min(yl, e)),
                t %= 360,
                t = t >= 0 ? t : 360 + t,
                this._coordinates.long = t
            }
        }, {
            key: "makeContact",
            value: function(e) {
                this.isUserInteracting = !0,
                this._motionTimeouts.forEach(function(e) {
                    return clearTimeout(e)
                }),
                this._movingAutomatically = !1,
                this._contactPoint = {
                    x: e.x,
                    y: e.y
                },
                this._onMouseDownCoordinates.long = this._coordinates.long,
                this._onMouseDownCoordinates.lat = this._coordinates.lat,
                this._motionStart = {
                    long: this._coordinates.long,
                    lat: this._coordinates.lat
                },
                this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)
            }
        }, {
            key: "move",
            value: function(e) {
                this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat,
                this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
                var t = this._motionStart.lat - .2 * (this._contactPoint.y - e.y)
                  , n = .2 * (this._contactPoint.x - e.x) + this._motionStart.long;
                this._updateViewpoint(t, n)
            }
        }, {
            key: "moveWheel",
            value: function(e) {
                this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat,
                this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
                var t = this._coordinates.lat - .1 * e.y
                  , n = this._coordinates.long + .1 * e.x;
                this._updateViewpoint(t, n)
            }
        }, {
            key: "moveDevice",
            value: function(e, t, n, i) {
                this._updateFromGyroscopePending = !0;
                var r = new THREE.Quaternion
                  , o = window.orientation;
                null === o && (o = this._video.clientWidth > this._video.clientHeight ? 90 : 0),
                e = e ? THREE.Math.degToRad(e) : 0,
                t = t ? THREE.Math.degToRad(t) : 0,
                n = n ? THREE.Math.degToRad(n) : 0;
                var a = o ? THREE.Math.degToRad(o) : 0
                  , s = new THREE.Vector3(0,0,1)
                  , u = new THREE.Euler
                  , c = new THREE.Quaternion
                  , l = new THREE.Quaternion(-Math.sqrt(.5),0,0,Math.sqrt(.5));
                u.set(t, e, -n, "YXZ"),
                r.setFromEuler(u),
                r.multiply(l),
                r.multiply(c.setFromAxisAngle(s, -a)),
                this._gyroVector = (new THREE.Euler).setFromQuaternion(r, "YXZ"),
                this._rotation = this._gyroVector.z,
                this.isUserInteracting || this._movingAutomatically || this._updateViewpoint(THREE.Math.radToDeg(this._gyroVector.x) - this._offset.lat, -THREE.Math.radToDeg(this._gyroVector.y) + this._offset.long),
                this._deviceMotionHasOccurred || (this.snapToCenter(),
                this._telecine.fire(Fu.MOTION_START),
                this._deviceMotionHasOccurred = !0)
            }
        }, {
            key: "releaseContact",
            value: function(e) {
                if (this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) - this._coordinates.lat,
                this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long,
                this.isUserInteracting = !1,
                this._motionStart && !e) {
                    var t = Math.hypot(this._coordinates.long - this._motionStart.long, this._coordinates.lat - this._motionStart.lat);
                    this._moveDueToMomentum(t)
                }
            }
        }, {
            key: "abandonMotion",
            value: function() {
                this.isUserInteracting = !1,
                this._motionStart = null
            }
        }, {
            key: "keyPress",
            value: function(e) {
                this._keyIsDown() || (this.isUserInteracting = !0,
                this._motionTimeouts && this._motionTimeouts.forEach(function(e) {
                    return clearTimeout(e)
                })),
                this._keysPressed[e] || (this._keysPressed[e] = !0)
            }
        }, {
            key: "keyUp",
            value: function(e) {
                this._keysPressed[e] = !1,
                this._keyIsDown() || (this.isUserInteracting = !1,
                this._moveDueToMomentum(1 / 0))
            }
        }, {
            key: "_moveFromKeyPress",
            value: function() {
                var e = this;
                Object.keys(this._keysPressed).forEach(function(t) {
                    if (e._keysPressed[t])
                        switch (t) {
                        case "up":
                            e._updateViewpoint(e._coordinates.lat + ml, e._coordinates.long);
                            break;
                        case "down":
                            e._updateViewpoint(e._coordinates.lat - ml, e._coordinates.long);
                            break;
                        case "left":
                            e._updateViewpoint(e._coordinates.lat, e._coordinates.long - ml);
                            break;
                        case "right":
                            e._updateViewpoint(e._coordinates.lat, e._coordinates.long + ml)
                        }
                })
            }
        }, {
            key: "_keyIsDown",
            value: function() {
                var e = this;
                return Object.keys(this._keysPressed).map(function(t) {
                    return e._keysPressed[t]
                }).some(function(e) {
                    return e
                })
            }
        }, {
            key: "_moveDueToMomentum",
            value: function(e) {
                var t = this;
                e >= gl && !function() {
                    var n = {
                        long: t._coordinates.long - t._previousCoordinates.long,
                        lat: t._coordinates.lat - t._previousCoordinates.lat
                    };
                    e === 1 / 0 && (n.long /= 2,
                    n.lat /= 2);
                    for (var i = function(e) {
                        t._motionTimeouts.push(setTimeout(function() {
                            1 === e && (t._movingAutomatically = !0),
                            e === pl - 1 && (t._movingAutomatically = !1,
                            t._maxTimeBetweenWrites = 1e3 / t._writeSpeeds.videoFps);
                            var i = 2 / Math.pow(e, 1.5);
                            t._offset.lat = THREE.Math.radToDeg(t._gyroVector.x) + t._coordinates.lat + n.lat,
                            t._offset.long = THREE.Math.radToDeg(t._gyroVector.y) + t._coordinates.long + n.long,
                            t._updateViewpoint(t._coordinates.lat + n.lat * i, t._coordinates.long + n.long * i)
                        }, e * t._maxTimeBetweenWrites))
                    }, r = 1; r < pl; r++)
                        i(r)
                }()
            }
        }, {
            key: "onseeked",
            value: function() {
                this._activated && this._update()
            }
        }, {
            key: "onresize",
            value: function() {
                this.adjustRenderSize(),
                this.isUserInteracting = !1
            }
        }, {
            key: "_update",
            value: function() {
                this._phi = THREE.Math.degToRad(90 + this._coordinates.lat),
                this._theta = THREE.Math.degToRad(this._coordinates.long),
                this._camera.position.x = this._distance * Math.sin(this._phi) * Math.cos(this._theta),
                this._camera.position.y = this._distance * Math.cos(this._phi),
                this._camera.position.z = this._distance * Math.sin(this._phi) * Math.sin(this._theta),
                this._camera.lookAt(this._camera.target),
                this._camera.rotation.z += this._rotation,
                this._stereo ? this._renderStereoScene() : this._renderer.render(this._scene, this._camera),
                this._telecine.fire(Fu.CAMERA_UPDATE, {
                    lon: this._coordinates.long,
                    lat: this._coordinates.lat
                })
            }
        }, {
            key: "adjustRenderSize",
            value: function() {
                this._camera.aspect = Math.max(1 / 3, Math.min(3, this._video.clientWidth / this._video.clientHeight)),
                this._distance = Math.min(bl / 2, this._options.dimensions.width / this._options.dimensions.height / this._camera.aspect * bl / 2);
                var e = bt(this._video.clientWidth, this._video.clientHeight, this._camera.aspect, 1);
                this._camera.aspect = e.width / e.height,
                this._camera.updateProjectionMatrix(),
                this._renderer.setSize(e.width, e.height),
                this._output.style.paddingTop = e.top + "px",
                this._renderer.render(this._scene, this._camera)
            }
        }, {
            key: "getRendererSize",
            value: function() {
                return {
                    height: this._renderer.domElement.clientHeight,
                    width: this._renderer.domElement.clientWidth
                }
            }
        }, {
            key: "_startRendering",
            value: function() {
                var e = this;
                this._interval && window.clearInterval(this._interval),
                this.adjustRenderSize();
                var t = 1e3 / _l;
                this._interval = window.setInterval(function() {
                    e._renderFrame(),
                    e._keyIsDown() && e._moveFromKeyPress()
                }, t)
            }
        }, {
            key: "_stopRendering",
            value: function() {
                this._interval && (window.clearInterval(this._interval),
                this._interval = null),
                this._motionTimeouts && this._motionTimeouts.forEach(function(e) {
                    return clearTimeout(e)
                })
            }
        }, {
            key: "_renderFrame",
            value: function() {
                this._requestRenderAnimationFrame()
            }
        }, {
            key: "_requestRenderAnimationFrame",
            value: function() {
                var e = this;
                this._animationFrame && window.cancelAnimationFrame(this._animationFrame);
                var t = this._movingAutomatically || this.isUserInteracting || this._updateFromGyroscopePending || this._keyIsDown();
                this._animationFrame = window.requestAnimationFrame(function() {
                    (!e._telecine._currentScanner.paused && !e._telecine._currentScanner._ranIntoBuffer || t) && (e._update(),
                    e._updateFromGyroscopePending = !1)
                })
            }
        }, {
            key: "_showOutput",
            value: function() {
                this._styleOutput({
                    backgroundColor: "#000",
                    display: "block"
                })
            }
        }, {
            key: "_hideOutput",
            value: function() {
                this._styleOutput({
                    backgroundColor: "#000",
                    display: "none"
                })
            }
        }, {
            key: "_styleOutput",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.backgroundColor
                  , n = e.display;
                this._output.style.cssText = "position:absolute;left:0;top:0;margin-left:auto;margin-right:auto;padding:0;background:" + t + ";width:100%;height:100%;text-align:center;display:" + n
            }
        }, {
            key: "currentCoordinates",
            get: function() {
                return this._coordinates
            },
            set: function(e) {
                var t = _u(e, 2)
                  , n = t[0]
                  , i = t[1];
                if (n > 90 || n < -90)
                    throw new RangeError("Latitude should be a float between -90 and 90.");
                if (i < 0 || i > 360)
                    throw new RangeError("Longitude should be a float between 0 and 360.");
                this._updateViewpoint(n, i),
                this._update()
            }
        }, {
            key: "fieldOfView",
            get: function() {
                return this._camera.fov
            },
            set: function(e) {
                this._camera.fov = e,
                this._camera.updateProjectionMatrix(),
                this._renderer.render(this._scene, this._camera)
            }
        }], [{
            key: "frustumSurfaceArea",
            value: function(e, t, n) {
                var i = 2 * bl * 2 * Math.sin(Math.PI / 180 * (e / 2))
                  , r = i * t / n
                  , o = i * r
                  , a = 4 * Math.PI * Math.pow(bl, 2)
                  , s = o / a;
                return s
            }
        }]),
        t
    }(wu)
      , kl = Li
      , Sl = function() {
        return kl.Date.now()
    }
      , El = Sl
      , Tl = Mr
      , xl = er
      , Ll = NaN
      , Pl = /^\s+|\s+$/g
      , Al = /^[-+]0x[0-9a-f]+$/i
      , Cl = /^0b[01]+$/i
      , Ol = /^0o[0-7]+$/i
      , Rl = parseInt
      , Ml = Ct
      , Il = Mr
      , Fl = El
      , Dl = Ml
      , Bl = "Expected a function"
      , ql = Math.max
      , Nl = Math.min
      , jl = Ot
      , Vl = jl
      , Ul = Mr
      , Hl = "Expected a function"
      , Wl = Rt
      , zl = [];
    Mt.getAllProps = function() {
        return zl.map(function(e) {
            return e.props()
        })
    }
    ;
    var Kl, Gl = function() {
        function e(t, n) {
            var i = this
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            yn(this, e),
            oe(this),
            this.version = r,
            this.visible = !1;
            var o = this._wrap = document.createElement("div");
            o.classList.add("compass-wrapper"),
            o.innerHTML = Mn.render("compass", {
                version: r
            }),
            o.classList.add("cloaked"),
            t.appendChild(o),
            n && o.addEventListener("click", n),
            this._layerSlice = o.querySelector(".compass-slice"),
            this._lineSlice = o.querySelector(".compass-line");
            var a = function() {
                i._mouseIn = !0
            }
              , s = function(e) {
                return function() {
                    setTimeout(function() {
                        i._mouseIn || (i.fade(),
                        i._mouseIn = !1)
                    }, e)
                }
            };
            Tn(this._wrap).on("mousein", a).on("pointerin", a).on("mouseout", s(1e3)).on("pointerout", s(1e3)),
            s(2500)()
        }
        return _n(e, [{
            key: "setAngle",
            value: function(e, t) {
                var n = this;
                this._animationFrame && window.cancelAnimationFrame(this._animationFrame);
                var i = 0;
                1 === this.version ? i = -45 : 2 === this.version && (i = -30);
                var r = "" + (i + t)
                  , o = (e + 85) / 170
                  , a = 18;
                this._animationFrame = window.requestAnimationFrame(function() {
                    n._layerSlice.setAttribute("transform", "rotate(" + r + ", " + a + ", " + a + ")"),
                    n._lineSlice && n._lineSlice.setAttribute("d", n._getLinePath(o, a))
                })
            }
        }, {
            key: "_getLinePath",
            value: function(e, t) {
                var n = 5
                  , i = 2 * t - Math.round(2 * t * e)
                  , r = 2 * Math.sqrt(2 * i * t - Math.pow(i, 2))
                  , o = (2 * t - r) / 2
                  , a = o + n
                  , s = 2 * t - o - n;
                return "M" + a + "," + i + " L" + s + "," + i + " z"
            }
        }, {
            key: "reveal",
            value: function() {
                var e = this;
                this._wrap.classList.remove("cloaked"),
                window.requestAnimationFrame(function() {
                    e._wrap.classList.add("in")
                }),
                this.visible = !0
            }
        }, {
            key: "fade",
            value: function() {
                this._wrap.classList.add("fade"),
                this.visible = !0
            }
        }, {
            key: "hide",
            value: function() {
                var e = this;
                this._wrap.classList.remove("in"),
                this._wrap.classList.remove("fade"),
                this._wrap.classList.add("leaving");
                var t = function t() {
                    "opacity" === event.propertyName && (e._wrap.classList.remove("leaving"),
                    e._wrap.classList.add("cloaked"),
                    e.visible = !1),
                    Tn(e._wrap).off("transitionend", t)
                };
                Tn(this._wrap).on("transitionend", t)
            }
        }, {
            key: "updatePosition",
            value: function(e) {
                if (e) {
                    var t = o(e)
                      , n = 265
                      , i = 336;
                    if (t.height < n)
                        return this._wrap.classList.remove("align-bottom"),
                        void this._wrap.classList.add("hidden");
                    if (t.height < i)
                        return this._wrap.classList.remove("hidden"),
                        void this._wrap.classList.add("align-bottom");
                    this._wrap.classList.remove("hidden"),
                    this._wrap.classList.remove("align-bottom")
                }
            }
        }, {
            key: "getWrapper",
            value: function() {
                return this._wrap
            }
        }]),
        e
    }(), Xl = 55, Yl = 45, $l = "markers", Ql = "clip_id", Jl = "profile_id", Zl = "player_size", ed = "dropped_frames", td = "total_frames", nd = "bandwidth", id = "streams", rd = "files", od = "video_dims", ad = "min_bandwidth", sd = "max_badwidth", ud = "buffer_occupancy", cd = "scanner", ld = [Ql, Jl, Zl, ed, td, nd, $l, id, rd, od, ad, sd, ud, cd], dd = ["streamchange", "droppedframes", "bandwidth", "scannerchange", "streamtargetchange", "seeked", "ended", "currentfilechange", "bufferoccupancy", "streambufferstart", "stalled"], fd = "seeked", hd = "ended", vd = "upswitch", pd = "downswitch", md = "resize", gd = "scannerchange", yd = "filechange", _d = "bufferstart", bd = "stalled", wd = 500, kd = function() {
        return Date.now ? Date.now() : (new Date).getTime()
    }, Sd = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
            ;
            yn(this, e),
            this.player = t,
            this.seriesStore = {},
            this.telecineHandlers = {},
            this.onDataChange = n
        }
        return _n(e, [{
            key: "init",
            value: function() {
                this._clearAllFields(),
                this._attachEvents(),
                this._setDefaults()
            }
        }, {
            key: "reset",
            value: function() {
                this._clearAllFields(),
                this._setDefaults(),
                this.onDataChange()
            }
        }, {
            key: "setToSeries",
            value: function(e, t) {
                return this.seriesStore[e] = [t],
                this.onDataChange(),
                this.seriesStore[e]
            }
        }, {
            key: "addToSeries",
            value: function(e, t) {
                this.seriesStore[e].push(t);
                var n = 25
                  , i = this.seriesStore[e].length;
                return i > wd && this.seriesStore[e].splice(0, n),
                this.onDataChange(),
                this.seriesStore[e]
            }
        }, {
            key: "getCurrent",
            value: function(e) {
                return this.seriesStore[e].slice(-1)[0]
            }
        }, {
            key: "getFirst",
            value: function(e) {
                return this.seriesStore[e][0]
            }
        }, {
            key: "getSeries",
            value: function(e) {
                return this.seriesStore[e]
            }
        }, {
            key: "addMarker",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                n.videoTime = this.player.telecine.currentTime,
                n.time = Date.now(),
                this.addToSeries($l, {
                    type: e,
                    title: t,
                    data: n
                })
            }
        }, {
            key: "_attachEvents",
            value: function() {
                var e = this;
                dd.forEach(function(t) {
                    var n = function(n) {
                        e._handleTelecineEvent(t, n)
                    };
                    e.player.telecine.on(t, n)
                }),
                Tn(window).on("resize", Wl(function() {
                    e._handleResize()
                }, 500))
            }
        }, {
            key: "_clearAllFields",
            value: function() {
                this.seriesStore = ld.reduce(function(e, t) {
                    return e[t] = [],
                    e
                }, {})
            }
        }, {
            key: "_setDefaults",
            value: function() {
                var e = this._getVideoDimensionsString();
                this.addToSeries(od, e);
                var t = this.player.telecine.currentFile;
                this.addToSeries(rd, t);
                var n = this.player.telecine.currentScanner;
                this.addToSeries(cd, n),
                this.setToSeries(ad, 0),
                this.setToSeries(sd, 0)
            }
        }, {
            key: "_handleTelecineEvent",
            value: function(e, t) {
                switch (e) {
                case "bandwidth":
                    var n = Math.round(100 * t.speed) / 100;
                    this.addToSeries(nd, {
                        videoTime: this.player.telecine.currentTime,
                        time: Date.now(),
                        speed: n
                    });
                    var i = this.getCurrent(sd)
                      , r = this.getCurrent(ad);
                    (!r || n < r) && this.setToSeries(ad, n),
                    (!i || n > i) && this.setToSeries(sd, n);
                    break;
                case "droppedframes":
                    var o = t.dropped
                      , a = t.total;
                    this.setToSeries(td, a),
                    this.setToSeries(ed, o);
                    break;
                case "seeked":
                    this.addMarker(fd, "Seeked to " + this.player.telecine.currentTime);
                    break;
                case "ended":
                    this.addMarker(hd, "Ended");
                    break;
                case "streamchange":
                    var s = t.index
                      , u = t.streams
                      , c = this.player.config.request.files.dash.streams[s]
                      , l = u[s]
                      , d = {
                        profile: c.profile,
                        quality: c.quality,
                        bitrate: l.bitrate,
                        framerate: l.framerate,
                        height: l.height,
                        width: l.width
                    }
                      , f = this.getCurrent(id)
                      , h = f ? f.bitrate : null;
                    if (h !== d.bitrate && null !== h) {
                        var v = this._getResolutionString(f)
                          , p = this._getResolutionString(d);
                        d.bitrate < h ? this.addMarker(pd, "Downswitch from " + v + " to " + p) : d.bitrate > h && this.addMarker(vd, "Upswitch from " + v + " to " + p)
                    }
                    this.addToSeries(id, d);
                    break;
                case "currentfilechange":
                    var m = this.getCurrent(rd)
                      , g = this.player.telecine.currentFile;
                    this.addToSeries(rd, g);
                    var y = g.metadata.cdn
                      , _ = m ? m.metadata.cdn : null
                      , b = m ? an[m.mime] : null
                      , w = an[g.mime]
                      , k = "CDN to " + y + "/" + w;
                    _ && (k = "CDN from " + _ + "/" + b + " to " + y + "/" + w),
                    this.addMarker(yd, k);
                    break;
                case "bufferoccupancy":
                    var S = Math.round(1e3 * t) / 1e3;
                    this.addToSeries(ud, {
                        videoTime: this.player.telecine.currentTime,
                        time: kd(),
                        bufferOccupancy: S
                    });
                    break;
                case "scannerchange":
                    var E = this.getCurrent(cd)
                      , T = this.player.telecine.currentScanner;
                    this.setToSeries(cd, T),
                    E && this.addMarker(gd, "Scanner change to " + T);
                    break;
                case "streambufferstart":
                    this.addMarker(_d, "Buffering");
                    break;
                case "stalled":
                    this.addMarker(bd, "Stalled")
                }
            }
        }, {
            key: "_handleResize",
            value: function(e) {
                var t = this.getCurrent(od)
                  , n = this._getVideoDimensionsString();
                this.addToSeries(od, n);
                var i = t ? "Resized from " + t + " to " + n : "Resized to " + n;
                this.addMarker(md, i)
            }
        }, {
            key: "_getVideoDimensionsString",
            value: function() {
                var e = this._getVideoDimensions()
                  , t = e.width
                  , n = e.height
                  , i = window.devicePixelRatio && window.devicePixelRatio > 1 ? "@" + window.devicePixelRatio + "x" : "";
                return t && n ? parseInt(t, 10) + "Ã" + parseInt(n, 10) + " " + i : ""
            }
        }, {
            key: "_getResolutionString",
            value: function(e) {
                return e.width + "Ã" + e.height + "@" + Math.round(e.framerate) + " " + Math.round(e.bitrate / 1e3).toLocaleString() + " Kbps"
            }
        }, {
            key: "_getVideoDimensions",
            value: function() {
                var e = this.player.element.querySelector("video");
                if (!e)
                    return {};
                var t = window.getComputedStyle(e);
                if (!t)
                    return {};
                var n = t.width
                  , i = t.height;
                return {
                    width: n,
                    height: i
                }
            }
        }]),
        e
    }(), Ed = 14, Td = 250, xd = (Kl = {},
    bn(Kl, fd, "#0088cc"),
    bn(Kl, hd, "#503873"),
    bn(Kl, vd, "#5a9e02"),
    bn(Kl, pd, "#d93636"),
    bn(Kl, md, "#FF8A00"),
    bn(Kl, gd, "#e9ff00"),
    bn(Kl, yd, "#b5d3e2"),
    bn(Kl, _d, "#e812e0"),
    bn(Kl, bd, "#f44283"),
    Kl), Ld = function(e, t, n) {
        return Math.min(Math.max(e, t), n)
    }, Pd = function() {
        function e(t, n) {
            var i = this;
            yn(this, e),
            this.element = t,
            this.player = n,
            this.initTime = new Date,
            this.templateExtra = {
                openLinkText: "Open Link",
                openLinkDisabled: !1,
                openLinkHref: null
            };
            var r = function() {
                i.render()
            };
            this.debugcollect = new Sd(n,r),
            this.debugcollect.init(),
            this.attachEvents(),
            this.openLinkNum = 0,
            this.active = !1
        }
        return _n(e, [{
            key: "render",
            value: function() {
                if (this.active) {
                    var e = this._getTemplateData();
                    this.element.innerHTML = Mn.render("stats_debug2", e)
                }
            }
        }, {
            key: "resetData",
            value: function() {
                this.debugcollect.reset(),
                this.render()
            }
        }, {
            key: "attachEvents",
            value: function() {
                var e = this;
                this.player.events.on(hn.debugButtonPressed, function() {
                    return e.element.classList.contains("hidden") ? void e.showPanel() : void e.hidePanel()
                }),
                this.player.events.on(hn.configChanged, function() {
                    e.resetData()
                }),
                L(this.element, ".stats-debug-close", function() {
                    e.hidePanel()
                }),
                L(this.element, ".stats-debug-copy", function() {
                    return !e.element.querySelector(".stats-debug-copy").getAttribute("disabled") && (e._startDebugLinkProgress(),
                    e._copyStats(),
                    !1)
                })
            }
        }, {
            key: "hidePanel",
            value: function() {
                this.element.classList.add("hidden"),
                this.element.setAttribute("hidden", ""),
                this.element.setAttribute("aria-hidden", "true"),
                this.player.events.fire(hn.hudHidden),
                this.active = !1
            }
        }, {
            key: "showPanel",
            value: function() {
                this.element.classList.remove("hidden"),
                this.element.removeAttribute("hidden"),
                this.element.setAttribute("aria-hidden", "false"),
                this.player.events.fire(hn.hudDisplayed),
                this.active = !0,
                this.render()
            }
        }, {
            key: "_getTemplateData",
            value: function() {
                var e = this.debugcollect.getCurrent(rd);
                if (!e)
                    return {};
                var t = e.metadata
                  , n = this.debugcollect.getCurrent(cd)
                  , i = "MediaSourceScanner" === n
                  , r = "LiveScanner" === n
                  , o = this.debugcollect.getCurrent(id)
                  , a = this.debugcollect.getCurrent(nd)
                  , s = new Date(1e3 * this.player.config.request.timestamp)
                  , u = new Date(new Date - this.initTime + 1e3 * this.player.config.request.timestamp)
                  , c = this.debugcollect.getCurrent(od)
                  , l = o ? o.profile + ", " + Ye(o) : null
                  , d = an[e.mime] + ", cdn: " + t.cdn
                  , f = o ? o.width + "Ã" + o.height + "@" + Math.round(o.framerate) + " " + Math.round(o.bitrate / 1e3).toLocaleString() + " Kbps" : null
                  , h = !(!this.player.config.request.files || !this.player.config.request.files.dash) && this.player.config.request.files.dash.separate_av
                  , v = this._getTestGroups()
                  , p = this.debugcollect.getCurrent(td) || 0
                  , m = this.debugcollect.getCurrent(ed) || 0
                  , g = 0 !== p ? (m / p * 100).toFixed(2) + "%" : 0
                  , y = (this.player.telecine.duration - this.player.telecine.currentTime).toFixed(2) + " seconds"
                  , _ = a ? Math.floor(a.speed / 1e3).toLocaleString() + " Kbps" : 0
                  , b = Math.floor(this.debugcollect.getCurrent(ad) / 1e3).toLocaleString() + " Kbps"
                  , w = Math.floor(this.debugcollect.getCurrent(sd) / 1e3).toLocaleString() + " Kbps"
                  , k = i || r ? this._getBandwidthSeriesSvg() : null
                  , S = i && this.player.config.request.ab_tests && this.player.config.request.ab_tests.bba && this.player.config.request.ab_tests.bba.group
                  , E = this.debugcollect.getCurrent(ud)
                  , T = E ? Math.floor(100 * E.bufferOccupancy).toLocaleString() + "%" : 0
                  , x = S ? this._getBufferOccupancySvg() : null;
                return {
                    clipId: this.player.config.video.id,
                    delivery: d,
                    resolution: f,
                    embedSize: c,
                    isDash: i,
                    isLive: r,
                    profileId: l,
                    separateAudioVideo: h,
                    testGroup: v,
                    totalFrames: p,
                    droppedFrames: m,
                    droppedFramesPercent: g,
                    liveLatency: y,
                    bandwidthKbps: _,
                    bandwidthMinKbps: b,
                    bandwidthMaxKbps: w,
                    startTime: s,
                    debugTime: u,
                    displayBufferOccupancy: S,
                    bufferOccupancyPercent: T,
                    bandwidthSeriesSvg: k,
                    bufferOccupancySvg: x,
                    openLinkText: this.templateExtra.openLinkText,
                    openLinkDisabled: this.templateExtra.openLinkDisabled,
                    openLinkHref: this.templateExtra.openLinkHref
                }
            }
        }, {
            key: "_getTestGroups",
            value: function() {
                var e = this;
                return Object.keys(this.player.config.request.ab_tests).map(function(t) {
                    return t + ": " + e.player.config.request.ab_tests[t].group
                }).join(", ")
            }
        }, {
            key: "_getBandwidthSeriesSvg",
            value: function() {
                for (var e = Td, t = Ed, n = this.debugcollect.getSeries(nd), i = this.debugcollect.getCurrent(sd), r = n.length, o = 100, a = r < o ? 0 : r - o, s = n[a], u = n[r - 1], c = s ? s.time : 0, l = u ? u.time : 0, d = [], f = a; f < r; f++) {
                    var h = n[f]
                      , v = (h.time - c) / (l - c) * e
                      , p = t - t * h.speed / i;
                    isNaN(p) && (p = 0),
                    isNaN(v) && (v = 0),
                    d.push(v + "," + Ld(p, 0, t))
                }
                return '<svg width="' + e + '" height="' + t + '" viewBox="0 0 ' + e + " " + t + '">\n            <g>\n                <polyline stroke="white" fill="none" points="' + d.join(" ") + '"></polyline>\n            </g>\n            <g>\n                ' + this._getMarkerSvgPart(c, l) + "\n            </g>\n        </svg>"
            }
        }, {
            key: "_getBufferOccupancySvg",
            value: function() {
                for (var e = Td, t = Ed, n = this.debugcollect.getSeries(ud) || [], i = n.length, r = 200, o = i < r ? 0 : i - r, a = n[o], s = n[i - 1], u = a ? a.time : 0, c = s ? s.time : 0, l = [], d = o; d < i; d++) {
                    var f = n[d]
                      , h = (f.time - u) / (c - u) * e
                      , v = t - t * f.bufferOccupancy;
                    isNaN(v) && (v = 0),
                    isNaN(h) && (h = 0),
                    l.push(h + "," + Ld(v, 0, t))
                }
                return '<svg width="' + e + '" height="' + t + '" viewBox="0 0 ' + e + " " + t + '">\n            <g>\n                <polyline stroke="white" fill="none" points="' + l.join(" ") + '"></polyline>\n            </g>\n            <g>\n                ' + this._getMarkerSvgPart(u, c) + "\n            </g>\n        </svg>"
            }
        }, {
            key: "_getMarkerSvgPart",
            value: function(e, t) {
                var n = Ed
                  , i = Td
                  , r = this.debugcollect.getSeries($l) || [];
                return 0 === r.length ? null : r.map(function(r) {
                    var o = r.data.time;
                    if (o < e || o > t)
                        return "";
                    var a = (o - e) / (t - e) * i;
                    return isNaN(a) && (a = 0),
                    "<g>\n                <title>" + r.title + '</title>\n                <line class="stats-debug-marker" x1="' + a + '" y1="0" x2="' + a + '" y2="' + n + '" stroke-width="1" stroke="' + xd[r.type] + '" />\n            </g>'
                }).join("")
            }
        }, {
            key: "_copyStats",
            value: function() {
                var e = this
                  , t = this._getTemplateData()
                  , n = this.player.config.request.session + "_" + t.clipId + "_" + this.openLinkNum
                  , i = {
                    key: n,
                    sessionId: this.player.config.request.session,
                    clipId: t.clipId,
                    playing: t.resolution,
                    dimensions: t.embedSize,
                    delivery: t.delivery,
                    ua: navigator.userAgent,
                    referrer: this.player.config.request.referrer ? this.player.config.request.referrer : "",
                    country: this.player.config.request.country,
                    duration: this.player.telecine.duration,
                    testGroup: this._getTestGroups(),
                    profileId: t.profileId,
                    droppedFrames: t.droppedFrames,
                    totalFrames: t.totalFrames,
                    droppedFramesPercent: t.droppedFramesPercent,
                    liveLatency: t.liveLatency,
                    bandwidthNow: t.bandwidthKbps,
                    bandwidthMin: t.bandwidthMinKbps,
                    bandwidthMax: t.bandwidthMaxKbps,
                    startTime: t.startTime,
                    debugTime: t.debugTime
                }
                  , r = this.debugcollect.getSeries(nd)
                  , o = this.debugcollect.getSeries(ud)
                  , a = this.debugcollect.getSeries($l)
                  , s = {
                    timeSeriesMarkers: a,
                    timeSeriesSpeeds: r,
                    timeSeriesBufferOccupancy: o
                }
                  , u = Object.keys(i).map(function(e) {
                    return encodeURIComponent(e) + "=" + encodeURIComponent(i[e])
                }).join("&")
                  , c = "https://" + this.player.config.player_url + "/debug/v2?" + u;
                this.openLinkNum++;
                var l = this.player.reportMessage("Debug info copied for " + this.player.config.request.session, {
                    level: "info",
                    extra: i
                });
                c += "&sentryId=" + l,
                this._updateDebugLink(c),
                window.open(c),
                this._getStorageUrl(n).then(function(t) {
                    return t = JSON.parse(t),
                    e._createUpload(t.url)
                }).then(function(t) {
                    return e._postToStorage(t, s)
                }).then(function() {
                    try {
                        delete i.ua
                    } catch (e) {}
                    return !0
                }).then(function() {
                    return e._finishDebugLinkProgress(),
                    !0
                }).catch(function(t) {
                    throw e._finishDebugLinkProgress(),
                    t
                })
            }
        }, {
            key: "_getStorageUrl",
            value: function(e) {
                var t = this.player.config.request.gc_debug.bucket
                  , n = "bucket=" + t + "&resource=" + e + "&content_type=" + encodeURIComponent("application/json; charset=UTF-8")
                  , i = "https://" + this.player.config.player_url + "/debug/v2/storage?" + n;
                return h(i)
            }
        }, {
            key: "_createUpload",
            value: function(e) {
                return new nn(function(t, n) {
                    var i = new XMLHttpRequest;
                    i.open("POST", e, !0),
                    i.setRequestHeader("Content-Type", "application/json; charset=UTF-8"),
                    i.setRequestHeader("x-goog-resumable", "start"),
                    i.setRequestHeader("x-goog-acl", "public-read"),
                    i.onload = function() {
                        return i.status >= 400 ? void n(new Error(i.status + " status " + e)) : void t(i.getResponseHeader("Location"))
                    }
                    ,
                    i.onerror = function() {
                        n(new Error("XHR error"))
                    }
                    ,
                    i.send()
                }
                )
            }
        }, {
            key: "_postToStorage",
            value: function(e, t) {
                var n = new Blob([JSON.stringify(t)],{
                    type: "application/json"
                });
                return new nn(function(t, i) {
                    var r = new XMLHttpRequest;
                    r.open("PUT", e, !0),
                    r.setRequestHeader("Content-Type", "application/json; charset=UTF-8"),
                    r.setRequestHeader("x-goog-resumable", "start"),
                    r.setRequestHeader("x-goog-acl", "public-read"),
                    r.onload = function() {
                        return r.status >= 400 ? void i(new Error(r.status + " status " + e)) : void t(!0)
                    }
                    ,
                    r.onerror = function() {
                        i(new Error("XHR error"))
                    }
                    ,
                    r.send(n)
                }
                )
            }
        }, {
            key: "_updateDebugLink",
            value: function(e) {
                this.templateExtra.openLinkHref = e,
                this.render()
            }
        }, {
            key: "_startDebugLinkProgress",
            value: function() {
                this.templateExtra.openLinkText = "Submitting...",
                this.templateExtra.openLinkDisabled = !0,
                this.render()
            }
        }, {
            key: "_finishDebugLinkProgress",
            value: function() {
                this.templateExtra.openLinkText = "Open Link",
                this.templateExtra.openLinkDisabled = !1,
                this._updateDebugLink(null),
                this.render()
            }
        }]),
        e
    }(), Ad = function() {
        function e(t) {
            yn(this, e),
            this.alertTextElement = t.querySelector(".vp-text-alert-wrapper"),
            this.alertContentElement = this.alertTextElement.querySelector(".vp-alert-text")
        }
        return _n(e, [{
            key: "show",
            value: function(e) {
                this.alertContentElement.innerHTML = e,
                this.alertContentElement.classList.remove("hidden"),
                this.alertTextElement.classList.remove("hidden")
            }
        }, {
            key: "hide",
            value: function() {
                this.alertContentElement.classList.add("hidden"),
                this.alertTextElement.classList.add("hidden")
            }
        }]),
        e
    }(), Cd = function() {
        function e(t) {
            yn(this, e),
            this.alertTextElement = t.querySelector(".vp-text-alert-wrapper"),
            this.alertContentTitle = this.alertTextElement.querySelector(".vp-live-start-time-title"),
            this.alertContentTime = this.alertTextElement.querySelector(".vp-live-start-time-body"),
            this.alertContentFooter = this.alertTextElement.querySelector(".vp-live-start-time-footer")
        }
        return _n(e, [{
            key: "show",
            value: function(e, t, n) {
                this.alertContentTitle.innerHTML = e,
                this.alertContentTime.innerHTML = t,
                this.alertContentFooter.innerHTML = n,
                this.alertContentTitle.classList.remove("hidden"),
                this.alertContentTime.classList.remove("hidden"),
                this.alertContentFooter.classList.remove("hidden"),
                this.alertTextElement.classList.remove("hidden")
            }
        }, {
            key: "hide",
            value: function() {
                this.alertContentTitle.classList.add("hidden"),
                this.alertContentTime.classList.add("hidden"),
                this.alertContentFooter.classList.add("hidden"),
                this.alertTextElement.classList.add("hidden")
            }
        }]),
        e
    }(), Od = 3e4, Rd = 6e4, Md = function() {
        function e(t, n, i) {
            yn(this, e),
            this.textAlert = new Ad(t),
            this.timeAlert = new Cd(t),
            this.player = n,
            this.liveEvent = i,
            this.startTime = new Date(this.liveEvent.scheduledStartTime),
            this._setUpLiveEvents(),
            this._checkStatus()
        }
        return _n(e, [{
            key: "hide",
            value: function() {
                this.textAlert.hide(),
                this.timeAlert.hide()
            }
        }, {
            key: "_checkStatus",
            value: function() {
                (this.liveEvent.isPending || this.liveEvent.isActive) && this._onLiveEventActive(),
                this.liveEvent.isEnded && this._onLiveStreamEnded()
            }
        }, {
            key: "_setUpLiveEvents",
            value: function() {
                this.player.events.on(hn.liveEventActive, this._onLiveEventActive.bind(this)),
                this.player.events.on(hn.liveStreamOnline, this._onLiveStreamOnline.bind(this)),
                this.player.events.on(hn.liveStreamOffline, this._onLiveStreamOffline.bind(this)),
                this.player.events.once(hn.liveEventEnded, this._onLiveStreamEnded.bind(this))
            }
        }, {
            key: "_onLiveEventActive",
            value: function() {
                this._timeToEventStart() > Rd ? (this.textAlert.hide(),
                this._displayTimeAlert()) : (this.timeAlert.hide(),
                this.textAlert.show("This event hasn't started yet"))
            }
        }, {
            key: "_displayTimeAlert",
            value: function() {
                var e = this._timeToDisplayText();
                this.timeAlert.show(e[0], e[1], e[2]),
                (this.liveEvent.isPending || this.liveEvent.isActive) && setTimeout(this._checkStatus.bind(this), Od)
            }
        }, {
            key: "_timeToEventStart",
            value: function() {
                return this.startTime - new Date
            }
        }, {
            key: "_timeToDisplayText",
            value: function() {
                var e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                  , t = this._timeToEventStart()
                  , n = (t / 6e4).toFixed(0)
                  , i = (t / 36e5).toFixed(0)
                  , r = (t / 864e5).toFixed(0)
                  , o = new Date
                  , a = o.toDateString() === this.startTime.toDateString();
                if (r > 1 || !a)
                    return ["This event is scheduled for", e[this.startTime.getMonth()] + " " + this.startTime.getDate(), "at " + it(this.startTime)];
                if (i > 1 && a)
                    return ["This event is scheduled for", "Today", "at " + it(this.startTime)];
                var s = n > 1 ? "minutes" : "minute";
                return ["This event will start in", n + " " + s, ""]
            }
        }, {
            key: "_onLiveStreamOnline",
            value: function() {
                this.hide()
            }
        }, {
            key: "_onLiveStreamOffline",
            value: function() {
                this.textAlert.show("Live stream offline"),
                Un.iOS && In.element && (this.player.events.fire(hn.willExitFullscreen),
                In.exit())
            }
        }, {
            key: "_onLiveStreamEnded",
            value: function() {
                this.textAlert.show("Live event ended")
            }
        }]),
        e
    }(), Id = .05, Fd = {
        16: "shift",
        27: "esc",
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    }, Dd = dr, Bd = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }, qd = Dd(Bd), Nd = qd, jd = Nd, Vd = lr, Ud = /[&<>"']/g, Hd = RegExp(Ud.source), Wd = Ht, zd = "Uh Oh!,DâOh!,Aw fiddlesticks!,Jeepers!,Oh dear!,Ouch!,Zoinks!,Awww, snap!,Blast!,Curses!,ACK!,Aw shucks.,Major bummer.,Dag-nab-it!,Aargh!,Boo-hoo!,Â¡Ay caramba!".split(","), Kd = [".title a"], Gd = [".title a:hover"], Xd = ["a", ".button-link", ".overlay-wrapper .footnote.share a:hover", ".title h1", ".title span.user", ".menu li:hover", ".menu li.active", ".outro-link:hover", ".outro-videosTitle a:hover", "li.vp-panel-item:hover", "li.vp-panel-item-on", ".share2-footnote a:hover", ".card-link", ".vp-panel-collapsible .vp-panel-button:hover"], Yd = ["a:hover", ".button-link:hover"], $d = [".overlay-wrapper .close:hover .fill", ".overlay-wrapper .back:hover .fill", ".stats-debug-close:hover .fill", ".stats-debug-copy:hover", ".card-link:hover .fill"], Qd = [".play-bar .on .fill", ".play-bar a:hover .fill", ".play-bar button:not(.toggle):hover .fill", ".tiny-bars .fill", ".sidedock .on .fill", ".controls-outro a:hover .fill", ".card-link .fill", ".vp-panel-collapsible .vp-panel-button:hover .fill"], Jd = [".sidedock .on:hover .fill"], Zd = [".play-bar .on .stroke", ".sidedock .on .stroke"], ef = [".sidedock .on:hover .stroke"], tf = [".sidedock button:hover", ".sidedock button.selected", "&.touch-support .sidedock button:active", ".controls .play:hover", ".controls .play-bar .played", "&.no-playbar .play-bar button:not(.toggle):hover", ".controls.tiny .play-bar button:not(.toggle):hover", ".controls .volume div", ".overlay .buttons li", ".overlay .window-wrapper button", '.overlay .window-wrapper input[type="submit"]', '.overlay .window-wrapper a[role="button"]', "li.vp-panel-item-on:before", ".controls .replay:hover", ".share2-buttons li", "button.share2-embedCopy", ".outro-button", "a.outro-vodButton", ".emailCapture2-form-button--submit", ".emailCapture2-checkIconWrapper"], nf = ["li.vp-panel-item-on:before"], rf = [".overlay .window-wrapper button", '.overlay .window-wrapper input[type="submit"]', '.overlay .window-wrapper a[role="button"]', ".sidedock button:hover", ".sidedock button.selected", ".sidedock button:hover .vod-label", ".sidedock button.selected .vod-label", ".play:hover", ".share2-footnote--embed a", ".outro-button", ".outro-button:hover", ".outro-wrapper .outro-link:hover", "button.share2-embedCopy", ".outro-vodWrapper a.outro-vodButton", ".outro-vodWrapper a.outro-vodButton:hover"], of = [".controls .play:hover .fill", ".sidedock button:hover .fill", ".sidedock button.selected .fill", ".play-bar a:hover .fill", ".play-bar button:not(.toggle):hover .fill", "&.no-playbar .play-bar button:not(.toggle):hover .fill", ".controls.tiny .play-bar button:not(.toggle):hover .fill", ".sidedock .on .fill", '.overlay .share2-wrapper a[role="button"] .fill', ".outro-vodButton .fill", ".emailCapture2-checkIconWrapper .fill"], af = [".controls .play:hover .stroke", ".sidedock button:hover .stroke", ".sidedock button.selected .stroke", ".sidedock .on .stroke"], sf = ['.overlay-wrapper .overlay a[role="button"]', ".sidedock button:hover", ".sidedock button.selected", ".play:hover", "button.share2-embedCopy", ".outro-button", ".outro-button:hover", ".outro-vodWrapper a.outro-vodButton", ".outro-vodWrapper a.outro-vodButton:hover", "input.emailCapture2-form-button--submit"], uf = [".controls .play:hover .fill", ".sidedock button:hover .fill", ".sidedock button.selected .fill", ".controls .play-bar .fullscreen.tiny:hover .fill", ".share2-button .fill", ".outro-vodButton .fill"], cf = [".sidedock button:hover .stroke", ".sidedock button.selected .stroke"], lf = ["li.vp-panel-item-on:before"], df = ['.overlay .window-wrapper input[type="submit"]:active', ".overlay .embed-copy.zeroclipboard-is-active", '.overlay a[role="button"]:active', ".sidedock button:active", ".outro-vodWrapper a.outro-vodButton:active"], ff = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            yn(this, e);
            var i = 6
              , r = 76
              , o = parseInt(r * Un.devicePixelRatio, 10)
              , a = parseFloat(n.timecode);
            if (isNaN(a))
                throw new TypeError("Time must be a number.");
            if (a < 0)
                throw new TypeError("Time must be a positive number.");
            this.time = a,
            this.data = n,
            this.id = n.id,
            this.displayTime = n.display_time || i,
            n.url && (this.data.url = this.sanitizeUrl(n.url)),
            n.image_url && (n.image = R({
                width: o,
                height: o,
                baseUrl: n.image_url,
                webpSupport: t.config.request.flags.webp,
                crop: !0
            })),
            this.renderTemplate()
        }
        return _n(e, [{
            key: "renderTemplate",
            value: function() {
                var e = this
                  , t = document.createElement("div");
                t.innerHTML = Mn.render("card", this.data),
                this.element = t.children[0],
                this.data.image && M(this.data.image).catch(function(t) {
                    e.element.querySelector(".js-cardImageWrap").style.display = "none"
                })
            }
        }, {
            key: "isActive",
            value: function(e) {
                return e >= this.time && e < this.end
            }
        }, {
            key: "sanitizeUrl",
            value: function(e) {
                return e = e.trim(),
                e ? e.indexOf("https://") !== -1 || e.indexOf("http://") !== -1 ? e : "http://" + e : null
            }
        }, {
            key: "end",
            get: function() {
                return this.time + this.displayTime
            }
        }]),
        e
    }(), hf = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(e, t) {
                return e < t
            }
            ;
            yn(this, e),
            this._data = {},
            this._sortedKeys = [],
            this._sort = t
        }
        return _n(e, [{
            key: "_insert",
            value: function(e) {
                var t = this._sortedKeys.length;
                if (0 === t)
                    this._sortedKeys.push(e);
                else {
                    for (var n = 0; n < t; n++)
                        if (this._sort(e, this._sortedKeys[n])) {
                            this._sortedKeys[n - 1] !== e && this._sortedKeys.splice(n, 0, e);
                            break
                        }
                    n === t && this._sortedKeys[n - 1] !== e && this._sortedKeys.splice(n, 0, e)
                }
            }
        }, {
            key: "_binarySearch",
            value: function(e, t, n, i) {
                if (i < n)
                    return -1;
                var r = parseInt(n + (i - n) / 2, 10);
                return e[r] > t ? this._binarySearch(e, t, n, r - 1) : e[r] < t ? this._binarySearch(e, t, r + 1, i) : r
            }
        }, {
            key: "delete",
            value: function(e) {
                var t = this._binarySearch(this._sortedKeys, e, 0, this._sortedKeys.length);
                if (t === -1)
                    throw new Error("key does not exist");
                this._sortedKeys.splice(t, 1),
                delete this._data[e]
            }
        }, {
            key: "set",
            value: function(e, t) {
                return this._data[e] = t,
                this._insert(e),
                this
            }
        }, {
            key: "get",
            value: function(e) {
                return this._data[e]
            }
        }, {
            key: "keys",
            value: function() {
                return this._sortedKeys.slice()
            }
        }, {
            key: "values",
            value: function() {
                var e = this;
                return this.keys().map(function(t) {
                    return e._data[t]
                })
            }
        }, {
            key: "forEach",
            value: function(e) {
                for (var t = this._sortedKeys.length, n = 0; n < t && e(this._data[this._sortedKeys[n]], this._sortedKeys[n], this) !== !1; n++)
                    ;
            }
        }, {
            key: "size",
            get: function() {
                return this._sortedKeys.length
            }
        }]),
        e
    }();
    return window.BigScreen = In,
    en
}();

