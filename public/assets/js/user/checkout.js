(() => {
    var e = {
            3734: function (e, t, n) {
                /*!
                 * Bootstrap v4.6.0 (https://getbootstrap.com/)
                 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
                 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
                 */ !(function (e, t, n) {
                    "use strict";
                    function i(e) {
                        return e && "object" == typeof e && "default" in e ? e : { default: e };
                    }
                    var r = i(t),
                        o = i(n);
                    function a(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                        }
                    }
                    function s(e, t, n) {
                        return t && a(e.prototype, t), n && a(e, n), e;
                    }
                    function l() {
                        return (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }).apply(this, arguments);
                    }
                    var u = "transitionend";
                    function c(e) {
                        return null == e
                            ? "" + e
                            : {}.toString
                                  .call(e)
                                  .match(/\s([a-z]+)/i)[1]
                                  .toLowerCase();
                    }
                    function f(e) {
                        var t = this,
                            n = !1;
                        return (
                            r.default(this).one(d.TRANSITION_END, function () {
                                n = !0;
                            }),
                            setTimeout(function () {
                                n || d.triggerTransitionEnd(t);
                            }, e),
                            this
                        );
                    }
                    var d = {
                        TRANSITION_END: "bsTransitionEnd",
                        getUID: function (e) {
                            do {
                                e += ~~(1e6 * Math.random());
                            } while (document.getElementById(e));
                            return e;
                        },
                        getSelectorFromElement: function (e) {
                            var t = e.getAttribute("data-target");
                            if (!t || "#" === t) {
                                var n = e.getAttribute("href");
                                t = n && "#" !== n ? n.trim() : "";
                            }
                            try {
                                return document.querySelector(t) ? t : null;
                            } catch (e) {
                                return null;
                            }
                        },
                        getTransitionDurationFromElement: function (e) {
                            if (!e) return 0;
                            var t = r.default(e).css("transition-duration"),
                                n = r.default(e).css("transition-delay"),
                                i = parseFloat(t),
                                o = parseFloat(n);
                            return i || o ? ((t = t.split(",")[0]), (n = n.split(",")[0]), 1e3 * (parseFloat(t) + parseFloat(n))) : 0;
                        },
                        reflow: function (e) {
                            return e.offsetHeight;
                        },
                        triggerTransitionEnd: function (e) {
                            r.default(e).trigger(u);
                        },
                        supportsTransitionEnd: function () {
                            return Boolean(u);
                        },
                        isElement: function (e) {
                            return (e[0] || e).nodeType;
                        },
                        typeCheckConfig: function (e, t, n) {
                            for (var i in n)
                                if (Object.prototype.hasOwnProperty.call(n, i)) {
                                    var r = n[i],
                                        o = t[i],
                                        a = o && d.isElement(o) ? "element" : c(o);
                                    if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".');
                                }
                        },
                        findShadowRoot: function (e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof e.getRootNode) {
                                var t = e.getRootNode();
                                return t instanceof ShadowRoot ? t : null;
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? d.findShadowRoot(e.parentNode) : null;
                        },
                        jQueryDetection: function () {
                            if (void 0 === r.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                            var e = r.default.fn.jquery.split(" ")[0].split(".");
                            if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
                        },
                    };
                    d.jQueryDetection(),
                        (r.default.fn.emulateTransitionEnd = f),
                        (r.default.event.special[d.TRANSITION_END] = {
                            bindType: u,
                            delegateType: u,
                            handle: function (e) {
                                if (r.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
                            },
                        });
                    var h = "alert",
                        p = "bs.alert",
                        g = r.default.fn[h],
                        m = (function () {
                            function e(e) {
                                this._element = e;
                            }
                            var t = e.prototype;
                            return (
                                (t.close = function (e) {
                                    var t = this._element;
                                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
                                }),
                                (t.dispose = function () {
                                    r.default.removeData(this._element, p), (this._element = null);
                                }),
                                (t._getRootElement = function (e) {
                                    var t = d.getSelectorFromElement(e),
                                        n = !1;
                                    return t && (n = document.querySelector(t)), n || (n = r.default(e).closest(".alert")[0]), n;
                                }),
                                (t._triggerCloseEvent = function (e) {
                                    var t = r.default.Event("close.bs.alert");
                                    return r.default(e).trigger(t), t;
                                }),
                                (t._removeElement = function (e) {
                                    var t = this;
                                    if ((r.default(e).removeClass("show"), r.default(e).hasClass("fade"))) {
                                        var n = d.getTransitionDurationFromElement(e);
                                        r.default(e)
                                            .one(d.TRANSITION_END, function (n) {
                                                return t._destroyElement(e, n);
                                            })
                                            .emulateTransitionEnd(n);
                                    } else this._destroyElement(e);
                                }),
                                (t._destroyElement = function (e) {
                                    r.default(e).detach().trigger("closed.bs.alert").remove();
                                }),
                                (e._jQueryInterface = function (t) {
                                    return this.each(function () {
                                        var n = r.default(this),
                                            i = n.data(p);
                                        i || ((i = new e(this)), n.data(p, i)), "close" === t && i[t](this);
                                    });
                                }),
                                (e._handleDismiss = function (e) {
                                    return function (t) {
                                        t && t.preventDefault(), e.close(this);
                                    };
                                }),
                                s(e, null, [
                                    {
                                        key: "VERSION",
                                        get: function () {
                                            return "4.6.0";
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    r.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', m._handleDismiss(new m())),
                        (r.default.fn[h] = m._jQueryInterface),
                        (r.default.fn[h].Constructor = m),
                        (r.default.fn[h].noConflict = function () {
                            return (r.default.fn[h] = g), m._jQueryInterface;
                        });
                    var v = "button",
                        y = "bs.button",
                        b = r.default.fn[v],
                        _ = "active",
                        w = '[data-toggle^="button"]',
                        x = 'input:not([type="hidden"])',
                        E = ".btn",
                        T = (function () {
                            function e(e) {
                                (this._element = e), (this.shouldAvoidTriggerChange = !1);
                            }
                            var t = e.prototype;
                            return (
                                (t.toggle = function () {
                                    var e = !0,
                                        t = !0,
                                        n = r.default(this._element).closest('[data-toggle="buttons"]')[0];
                                    if (n) {
                                        var i = this._element.querySelector(x);
                                        if (i) {
                                            if ("radio" === i.type)
                                                if (i.checked && this._element.classList.contains(_)) e = !1;
                                                else {
                                                    var o = n.querySelector(".active");
                                                    o && r.default(o).removeClass(_);
                                                }
                                            e && (("checkbox" !== i.type && "radio" !== i.type) || (i.checked = !this._element.classList.contains(_)), this.shouldAvoidTriggerChange || r.default(i).trigger("change")), i.focus(), (t = !1);
                                        }
                                    }
                                    this._element.hasAttribute("disabled") ||
                                        this._element.classList.contains("disabled") ||
                                        (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(_)), e && r.default(this._element).toggleClass(_));
                                }),
                                (t.dispose = function () {
                                    r.default.removeData(this._element, y), (this._element = null);
                                }),
                                (e._jQueryInterface = function (t, n) {
                                    return this.each(function () {
                                        var i = r.default(this),
                                            o = i.data(y);
                                        o || ((o = new e(this)), i.data(y, o)), (o.shouldAvoidTriggerChange = n), "toggle" === t && o[t]();
                                    });
                                }),
                                s(e, null, [
                                    {
                                        key: "VERSION",
                                        get: function () {
                                            return "4.6.0";
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    r
                        .default(document)
                        .on("click.bs.button.data-api", w, function (e) {
                            var t = e.target,
                                n = t;
                            if ((r.default(t).hasClass("btn") || (t = r.default(t).closest(E)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))) e.preventDefault();
                            else {
                                var i = t.querySelector(x);
                                if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
                                ("INPUT" !== n.tagName && "LABEL" === t.tagName) || T._jQueryInterface.call(r.default(t), "toggle", "INPUT" === n.tagName);
                            }
                        })
                        .on("focus.bs.button.data-api blur.bs.button.data-api", w, function (e) {
                            var t = r.default(e.target).closest(E)[0];
                            r.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type));
                        }),
                        r.default(window).on("load.bs.button.data-api", function () {
                            for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
                                var i = e[t],
                                    r = i.querySelector(x);
                                r.checked || r.hasAttribute("checked") ? i.classList.add(_) : i.classList.remove(_);
                            }
                            for (var o = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < a; o++) {
                                var s = e[o];
                                "true" === s.getAttribute("aria-pressed") ? s.classList.add(_) : s.classList.remove(_);
                            }
                        }),
                        (r.default.fn[v] = T._jQueryInterface),
                        (r.default.fn[v].Constructor = T),
                        (r.default.fn[v].noConflict = function () {
                            return (r.default.fn[v] = b), T._jQueryInterface;
                        });
                    var C = "carousel",
                        S = "bs.carousel",
                        k = "." + S,
                        N = r.default.fn[C],
                        D = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
                        A = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
                        j = "next",
                        O = "prev",
                        I = "slid" + k,
                        L = "active",
                        P = ".active.carousel-item",
                        q = { TOUCH: "touch", PEN: "pen" },
                        H = (function () {
                            function e(e, t) {
                                (this._items = null),
                                    (this._interval = null),
                                    (this._activeElement = null),
                                    (this._isPaused = !1),
                                    (this._isSliding = !1),
                                    (this.touchTimeout = null),
                                    (this.touchStartX = 0),
                                    (this.touchDeltaX = 0),
                                    (this._config = this._getConfig(t)),
                                    (this._element = e),
                                    (this._indicatorsElement = this._element.querySelector(".carousel-indicators")),
                                    (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                                    (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                                    this._addEventListeners();
                            }
                            var t = e.prototype;
                            return (
                                (t.next = function () {
                                    this._isSliding || this._slide(j);
                                }),
                                (t.nextWhenVisible = function () {
                                    var e = r.default(this._element);
                                    !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next();
                                }),
                                (t.prev = function () {
                                    this._isSliding || this._slide(O);
                                }),
                                (t.pause = function (e) {
                                    e || (this._isPaused = !0),
                                        this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element), this.cycle(!0)),
                                        clearInterval(this._interval),
                                        (this._interval = null);
                                }),
                                (t.cycle = function (e) {
                                    e || (this._isPaused = !1),
                                        this._interval && (clearInterval(this._interval), (this._interval = null)),
                                        this._config.interval && !this._isPaused && (this._updateInterval(), (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
                                }),
                                (t.to = function (e) {
                                    var t = this;
                                    this._activeElement = this._element.querySelector(P);
                                    var n = this._getItemIndex(this._activeElement);
                                    if (!(e > this._items.length - 1 || e < 0))
                                        if (this._isSliding)
                                            r.default(this._element).one(I, function () {
                                                return t.to(e);
                                            });
                                        else {
                                            if (n === e) return this.pause(), void this.cycle();
                                            var i = e > n ? j : O;
                                            this._slide(i, this._items[e]);
                                        }
                                }),
                                (t.dispose = function () {
                                    r.default(this._element).off(k),
                                        r.default.removeData(this._element, S),
                                        (this._items = null),
                                        (this._config = null),
                                        (this._element = null),
                                        (this._interval = null),
                                        (this._isPaused = null),
                                        (this._isSliding = null),
                                        (this._activeElement = null),
                                        (this._indicatorsElement = null);
                                }),
                                (t._getConfig = function (e) {
                                    return (e = l({}, D, e)), d.typeCheckConfig(C, e, A), e;
                                }),
                                (t._handleSwipe = function () {
                                    var e = Math.abs(this.touchDeltaX);
                                    if (!(e <= 40)) {
                                        var t = e / this.touchDeltaX;
                                        (this.touchDeltaX = 0), t > 0 && this.prev(), t < 0 && this.next();
                                    }
                                }),
                                (t._addEventListeners = function () {
                                    var e = this;
                                    this._config.keyboard &&
                                        r.default(this._element).on("keydown.bs.carousel", function (t) {
                                            return e._keydown(t);
                                        }),
                                        "hover" === this._config.pause &&
                                            r
                                                .default(this._element)
                                                .on("mouseenter.bs.carousel", function (t) {
                                                    return e.pause(t);
                                                })
                                                .on("mouseleave.bs.carousel", function (t) {
                                                    return e.cycle(t);
                                                }),
                                        this._config.touch && this._addTouchEventListeners();
                                }),
                                (t._addTouchEventListeners = function () {
                                    var e = this;
                                    if (this._touchSupported) {
                                        var t = function (t) {
                                                e._pointerEvent && q[t.originalEvent.pointerType.toUpperCase()] ? (e.touchStartX = t.originalEvent.clientX) : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
                                            },
                                            n = function (t) {
                                                t.originalEvent.touches && t.originalEvent.touches.length > 1 ? (e.touchDeltaX = 0) : (e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX);
                                            },
                                            i = function (t) {
                                                e._pointerEvent && q[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                                                    e._handleSwipe(),
                                                    "hover" === e._config.pause &&
                                                        (e.pause(),
                                                        e.touchTimeout && clearTimeout(e.touchTimeout),
                                                        (e.touchTimeout = setTimeout(function (t) {
                                                            return e.cycle(t);
                                                        }, 500 + e._config.interval)));
                                            };
                                        r.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (e) {
                                            return e.preventDefault();
                                        }),
                                            this._pointerEvent
                                                ? (r.default(this._element).on("pointerdown.bs.carousel", function (e) {
                                                      return t(e);
                                                  }),
                                                  r.default(this._element).on("pointerup.bs.carousel", function (e) {
                                                      return i(e);
                                                  }),
                                                  this._element.classList.add("pointer-event"))
                                                : (r.default(this._element).on("touchstart.bs.carousel", function (e) {
                                                      return t(e);
                                                  }),
                                                  r.default(this._element).on("touchmove.bs.carousel", function (e) {
                                                      return n(e);
                                                  }),
                                                  r.default(this._element).on("touchend.bs.carousel", function (e) {
                                                      return i(e);
                                                  }));
                                    }
                                }),
                                (t._keydown = function (e) {
                                    if (!/input|textarea/i.test(e.target.tagName))
                                        switch (e.which) {
                                            case 37:
                                                e.preventDefault(), this.prev();
                                                break;
                                            case 39:
                                                e.preventDefault(), this.next();
                                        }
                                }),
                                (t._getItemIndex = function (e) {
                                    return (this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : []), this._items.indexOf(e);
                                }),
                                (t._getItemByDirection = function (e, t) {
                                    var n = e === j,
                                        i = e === O,
                                        r = this._getItemIndex(t),
                                        o = this._items.length - 1;
                                    if (((i && 0 === r) || (n && r === o)) && !this._config.wrap) return t;
                                    var a = (r + (e === O ? -1 : 1)) % this._items.length;
                                    return -1 === a ? this._items[this._items.length - 1] : this._items[a];
                                }),
                                (t._triggerSlideEvent = function (e, t) {
                                    var n = this._getItemIndex(e),
                                        i = this._getItemIndex(this._element.querySelector(P)),
                                        o = r.default.Event("slide.bs.carousel", { relatedTarget: e, direction: t, from: i, to: n });
                                    return r.default(this._element).trigger(o), o;
                                }),
                                (t._setActiveIndicatorElement = function (e) {
                                    if (this._indicatorsElement) {
                                        var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                                        r.default(t).removeClass(L);
                                        var n = this._indicatorsElement.children[this._getItemIndex(e)];
                                        n && r.default(n).addClass(L);
                                    }
                                }),
                                (t._updateInterval = function () {
                                    var e = this._activeElement || this._element.querySelector(P);
                                    if (e) {
                                        var t = parseInt(e.getAttribute("data-interval"), 10);
                                        t
                                            ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = t))
                                            : (this._config.interval = this._config.defaultInterval || this._config.interval);
                                    }
                                }),
                                (t._slide = function (e, t) {
                                    var n,
                                        i,
                                        o,
                                        a = this,
                                        s = this._element.querySelector(P),
                                        l = this._getItemIndex(s),
                                        u = t || (s && this._getItemByDirection(e, s)),
                                        c = this._getItemIndex(u),
                                        f = Boolean(this._interval);
                                    if ((e === j ? ((n = "carousel-item-left"), (i = "carousel-item-next"), (o = "left")) : ((n = "carousel-item-right"), (i = "carousel-item-prev"), (o = "right")), u && r.default(u).hasClass(L)))
                                        this._isSliding = !1;
                                    else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && s && u) {
                                        (this._isSliding = !0), f && this.pause(), this._setActiveIndicatorElement(u), (this._activeElement = u);
                                        var h = r.default.Event(I, { relatedTarget: u, direction: o, from: l, to: c });
                                        if (r.default(this._element).hasClass("slide")) {
                                            r.default(u).addClass(i), d.reflow(u), r.default(s).addClass(n), r.default(u).addClass(n);
                                            var p = d.getTransitionDurationFromElement(s);
                                            r.default(s)
                                                .one(d.TRANSITION_END, function () {
                                                    r
                                                        .default(u)
                                                        .removeClass(n + " " + i)
                                                        .addClass(L),
                                                        r.default(s).removeClass(L + " " + i + " " + n),
                                                        (a._isSliding = !1),
                                                        setTimeout(function () {
                                                            return r.default(a._element).trigger(h);
                                                        }, 0);
                                                })
                                                .emulateTransitionEnd(p);
                                        } else r.default(s).removeClass(L), r.default(u).addClass(L), (this._isSliding = !1), r.default(this._element).trigger(h);
                                        f && this.cycle();
                                    }
                                }),
                                (e._jQueryInterface = function (t) {
                                    return this.each(function () {
                                        var n = r.default(this).data(S),
                                            i = l({}, D, r.default(this).data());
                                        "object" == typeof t && (i = l({}, i, t));
                                        var o = "string" == typeof t ? t : i.slide;
                                        if ((n || ((n = new e(this, i)), r.default(this).data(S, n)), "number" == typeof t)) n.to(t);
                                        else if ("string" == typeof o) {
                                            if (void 0 === n[o]) throw new TypeError('No method named "' + o + '"');
                                            n[o]();
                                        } else i.interval && i.ride && (n.pause(), n.cycle());
                                    });
                                }),
                                (e._dataApiClickHandler = function (t) {
                                    var n = d.getSelectorFromElement(this);
                                    if (n) {
                                        var i = r.default(n)[0];
                                        if (i && r.default(i).hasClass("carousel")) {
                                            var o = l({}, r.default(i).data(), r.default(this).data()),
                                                a = this.getAttribute("data-slide-to");
                                            a && (o.interval = !1), e._jQueryInterface.call(r.default(i), o), a && r.default(i).data(S).to(a), t.preventDefault();
                                        }
                                    }
                                }),
                                s(e, null, [
                                    {
                                        key: "VERSION",
                                        get: function () {
                                            return "4.6.0";
                                        },
                                    },
                                    {
                                        key: "Default",
                                        get: function () {
                                            return D;
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    r.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", H._dataApiClickHandler),
                        r.default(window).on("load.bs.carousel.data-api", function () {
                            for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
                                var i = r.default(e[t]);
                                H._jQueryInterface.call(i, i.data());
                            }
                        }),
                        (r.default.fn[C] = H._jQueryInterface),
                        (r.default.fn[C].Constructor = H),
                        (r.default.fn[C].noConflict = function () {
                            return (r.default.fn[C] = N), H._jQueryInterface;
                        });
                    var R = "collapse",
                        F = "bs.collapse",
                        M = r.default.fn[R],
                        $ = { toggle: !0, parent: "" },
                        B = { toggle: "boolean", parent: "(string|element)" },
                        W = "show",
                        U = "collapse",
                        Q = "collapsing",
                        z = "collapsed",
                        V = "width",
                        X = '[data-toggle="collapse"]',
                        Y = (function () {
                            function e(e, t) {
                                (this._isTransitioning = !1),
                                    (this._element = e),
                                    (this._config = this._getConfig(t)),
                                    (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')));
                                for (var n = [].slice.call(document.querySelectorAll(X)), i = 0, r = n.length; i < r; i++) {
                                    var o = n[i],
                                        a = d.getSelectorFromElement(o),
                                        s = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
                                            return t === e;
                                        });
                                    null !== a && s.length > 0 && ((this._selector = a), this._triggerArray.push(o));
                                }
                                (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
                            }
                            var t = e.prototype;
                            return (
                                (t.toggle = function () {
                                    r.default(this._element).hasClass(W) ? this.hide() : this.show();
                                }),
                                (t.show = function () {
                                    var t,
                                        n,
                                        i = this;
                                    if (
                                        !(
                                            this._isTransitioning ||
                                            r.default(this._element).hasClass(W) ||
                                            (this._parent &&
                                                0 ===
                                                    (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
                                                        return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains(U);
                                                    })).length &&
                                                (t = null),
                                            t && (n = r.default(t).not(this._selector).data(F)) && n._isTransitioning)
                                        )
                                    ) {
                                        var o = r.default.Event("show.bs.collapse");
                                        if ((r.default(this._element).trigger(o), !o.isDefaultPrevented())) {
                                            t && (e._jQueryInterface.call(r.default(t).not(this._selector), "hide"), n || r.default(t).data(F, null));
                                            var a = this._getDimension();
                                            r.default(this._element).removeClass(U).addClass(Q),
                                                (this._element.style[a] = 0),
                                                this._triggerArray.length && r.default(this._triggerArray).removeClass(z).attr("aria-expanded", !0),
                                                this.setTransitioning(!0);
                                            var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                                l = d.getTransitionDurationFromElement(this._element);
                                            r
                                                .default(this._element)
                                                .one(d.TRANSITION_END, function () {
                                                    r
                                                        .default(i._element)
                                                        .removeClass(Q)
                                                        .addClass(U + " " + W),
                                                        (i._element.style[a] = ""),
                                                        i.setTransitioning(!1),
                                                        r.default(i._element).trigger("shown.bs.collapse");
                                                })
                                                .emulateTransitionEnd(l),
                                                (this._element.style[a] = this._element[s] + "px");
                                        }
                                    }
                                }),
                                (t.hide = function () {
                                    var e = this;
                                    if (!this._isTransitioning && r.default(this._element).hasClass(W)) {
                                        var t = r.default.Event("hide.bs.collapse");
                                        if ((r.default(this._element).trigger(t), !t.isDefaultPrevented())) {
                                            var n = this._getDimension();
                                            (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px"),
                                                d.reflow(this._element),
                                                r
                                                    .default(this._element)
                                                    .addClass(Q)
                                                    .removeClass(U + " " + W);
                                            var i = this._triggerArray.length;
                                            if (i > 0)
                                                for (var o = 0; o < i; o++) {
                                                    var a = this._triggerArray[o],
                                                        s = d.getSelectorFromElement(a);
                                                    null !== s && (r.default([].slice.call(document.querySelectorAll(s))).hasClass(W) || r.default(a).addClass(z).attr("aria-expanded", !1));
                                                }
                                            this.setTransitioning(!0);
                                            this._element.style[n] = "";
                                            var l = d.getTransitionDurationFromElement(this._element);
                                            r.default(this._element)
                                                .one(d.TRANSITION_END, function () {
                                                    e.setTransitioning(!1), r.default(e._element).removeClass(Q).addClass(U).trigger("hidden.bs.collapse");
                                                })
                                                .emulateTransitionEnd(l);
                                        }
                                    }
                                }),
                                (t.setTransitioning = function (e) {
                                    this._isTransitioning = e;
                                }),
                                (t.dispose = function () {
                                    r.default.removeData(this._element, F), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                                }),
                                (t._getConfig = function (e) {
                                    return ((e = l({}, $, e)).toggle = Boolean(e.toggle)), d.typeCheckConfig(R, e, B), e;
                                }),
                                (t._getDimension = function () {
                                    return r.default(this._element).hasClass(V) ? V : "height";
                                }),
                                (t._getParent = function () {
                                    var t,
                                        n = this;
                                    d.isElement(this._config.parent) ? ((t = this._config.parent), void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : (t = document.querySelector(this._config.parent));
                                    var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                                        o = [].slice.call(t.querySelectorAll(i));
                                    return (
                                        r.default(o).each(function (t, i) {
                                            n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i]);
                                        }),
                                        t
                                    );
                                }),
                                (t._addAriaAndCollapsedClass = function (e, t) {
                                    var n = r.default(e).hasClass(W);
                                    t.length && r.default(t).toggleClass(z, !n).attr("aria-expanded", n);
                                }),
                                (e._getTargetFromElement = function (e) {
                                    var t = d.getSelectorFromElement(e);
                                    return t ? document.querySelector(t) : null;
                                }),
                                (e._jQueryInterface = function (t) {
                                    return this.each(function () {
                                        var n = r.default(this),
                                            i = n.data(F),
                                            o = l({}, $, n.data(), "object" == typeof t && t ? t : {});
                                        if ((!i && o.toggle && "string" == typeof t && /show|hide/.test(t) && (o.toggle = !1), i || ((i = new e(this, o)), n.data(F, i)), "string" == typeof t)) {
                                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                            i[t]();
                                        }
                                    });
                                }),
                                s(e, null, [
                                    {
                                        key: "VERSION",
                                        get: function () {
                                            return "4.6.0";
                                        },
                                    },
                                    {
                                        key: "Default",
                                        get: function () {
                                            return $;
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    r.default(document).on("click.bs.collapse.data-api", X, function (e) {
                        "A" === e.currentTarget.tagName && e.preventDefault();
                        var t = r.default(this),
                            n = d.getSelectorFromElement(this),
                            i = [].slice.call(document.querySelectorAll(n));
                        r.default(i).each(function () {
                            var e = r.default(this),
                                n = e.data(F) ? "toggle" : t.data();
                            Y._jQueryInterface.call(e, n);
                        });
                    }),
                        (r.default.fn[R] = Y._jQueryInterface),
                        (r.default.fn[R].Constructor = Y),
                        (r.default.fn[R].noConflict = function () {
                            return (r.default.fn[R] = M), Y._jQueryInterface;
                        });
                    var K = "dropdown",
                        J = "bs.dropdown",
                        G = "." + J,
                        Z = ".data-api",
                        ee = r.default.fn[K],
                        te = new RegExp("38|40|27"),
                        ne = "hide" + G,
                        ie = "hidden" + G,
                        re = "click" + G + Z,
                        oe = "keydown" + G + Z,
                        ae = "disabled",
                        se = "show",
                        le = "dropdown-menu-right",
                        ue = '[data-toggle="dropdown"]',
                        ce = ".dropdown-menu",
                        fe = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
                        de = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
                        he = (function () {
                            function e(e, t) {
                                (this._element = e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
                            }
                            var t = e.prototype;
                            return (
                                (t.toggle = function () {
                                    if (!this._element.disabled && !r.default(this._element).hasClass(ae)) {
                                        var t = r.default(this._menu).hasClass(se);
                                        e._clearMenus(), t || this.show(!0);
                                    }
                                }),
                                (t.show = function (t) {
                                    if ((void 0 === t && (t = !1), !(this._element.disabled || r.default(this._element).hasClass(ae) || r.default(this._menu).hasClass(se)))) {
                                        var n = { relatedTarget: this._element },
                                            i = r.default.Event("show.bs.dropdown", n),
                                            a = e._getParentFromElement(this._element);
                                        if ((r.default(a).trigger(i), !i.isDefaultPrevented())) {
                                            if (!this._inNavbar && t) {
                                                if (void 0 === o.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                                var s = this._element;
                                                "parent" === this._config.reference
                                                    ? (s = a)
                                                    : d.isElement(this._config.reference) && ((s = this._config.reference), void 0 !== this._config.reference.jquery && (s = this._config.reference[0])),
                                                    "scrollParent" !== this._config.boundary && r.default(a).addClass("position-static"),
                                                    (this._popper = new o.default(s, this._menu, this._getPopperConfig()));
                                            }
                                            "ontouchstart" in document.documentElement && 0 === r.default(a).closest(".navbar-nav").length && r.default(document.body).children().on("mouseover", null, r.default.noop),
                                                this._element.focus(),
                                                this._element.setAttribute("aria-expanded", !0),
                                                r.default(this._menu).toggleClass(se),
                                                r.default(a).toggleClass(se).trigger(r.default.Event("shown.bs.dropdown", n));
                                        }
                                    }
                                }),
                                (t.hide = function () {
                                    if (!this._element.disabled && !r.default(this._element).hasClass(ae) && r.default(this._menu).hasClass(se)) {
                                        var t = { relatedTarget: this._element },
                                            n = r.default.Event(ne, t),
                                            i = e._getParentFromElement(this._element);
                                        r.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), r.default(this._menu).toggleClass(se), r.default(i).toggleClass(se).trigger(r.default.Event(ie, t)));
                                    }
                                }),
                                (t.dispose = function () {
                                    r.default.removeData(this._element, J), r.default(this._element).off(G), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null));
                                }),
                                (t.update = function () {
                                    (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                                }),
                                (t._addEventListeners = function () {
                                    var e = this;
                                    r.default(this._element).on("click.bs.dropdown", function (t) {
                                        t.preventDefault(), t.stopPropagation(), e.toggle();
                                    });
                                }),
                                (t._getConfig = function (e) {
                                    return (e = l({}, this.constructor.Default, r.default(this._element).data(), e)), d.typeCheckConfig(K, e, this.constructor.DefaultType), e;
                                }),
                                (t._getMenuElement = function () {
                                    if (!this._menu) {
                                        var t = e._getParentFromElement(this._element);
                                        t && (this._menu = t.querySelector(ce));
                                    }
                                    return this._menu;
                                }),
                                (t._getPlacement = function () {
                                    var e = r.default(this._element.parentNode),
                                        t = "bottom-start";
                                    return (
                                        e.hasClass("dropup")
                                            ? (t = r.default(this._menu).hasClass(le) ? "top-end" : "top-start")
                                            : e.hasClass("dropright")
                                            ? (t = "right-start")
                                            : e.hasClass("dropleft")
                                            ? (t = "left-start")
                                            : r.default(this._menu).hasClass(le) && (t = "bottom-end"),
                                        t
                                    );
                                }),
                                (t._detectNavbar = function () {
                                    return r.default(this._element).closest(".navbar").length > 0;
                                }),
                                (t._getOffset = function () {
                                    var e = this,
                                        t = {};
                                    return (
                                        "function" == typeof this._config.offset
                                            ? (t.fn = function (t) {
                                                  return (t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {})), t;
                                              })
                                            : (t.offset = this._config.offset),
                                        t
                                    );
                                }),
                                (t._getPopperConfig = function () {
                                    var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                                    return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), l({}, e, this._config.popperConfig);
                                }),
                                (e._jQueryInterface = function (t) {
                                    return this.each(function () {
                                        var n = r.default(this).data(J);
                                        if ((n || ((n = new e(this, "object" == typeof t ? t : null)), r.default(this).data(J, n)), "string" == typeof t)) {
                                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                            n[t]();
                                        }
                                    });
                                }),
                                (e._clearMenus = function (t) {
                                    if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                                        for (var n = [].slice.call(document.querySelectorAll(ue)), i = 0, o = n.length; i < o; i++) {
                                            var a = e._getParentFromElement(n[i]),
                                                s = r.default(n[i]).data(J),
                                                l = { relatedTarget: n[i] };
                                            if ((t && "click" === t.type && (l.clickEvent = t), s)) {
                                                var u = s._menu;
                                                if (r.default(a).hasClass(se) && !(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && r.default.contains(a, t.target))) {
                                                    var c = r.default.Event(ne, l);
                                                    r.default(a).trigger(c),
                                                        c.isDefaultPrevented() ||
                                                            ("ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop),
                                                            n[i].setAttribute("aria-expanded", "false"),
                                                            s._popper && s._popper.destroy(),
                                                            r.default(u).removeClass(se),
                                                            r.default(a).removeClass(se).trigger(r.default.Event(ie, l)));
                                                }
                                            }
                                        }
                                }),
                                (e._getParentFromElement = function (e) {
                                    var t,
                                        n = d.getSelectorFromElement(e);
                                    return n && (t = document.querySelector(n)), t || e.parentNode;
                                }),
                                (e._dataApiKeydownHandler = function (t) {
                                    if (
                                        !(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || r.default(t.target).closest(ce).length)) : !te.test(t.which)) &&
                                        !this.disabled &&
                                        !r.default(this).hasClass(ae)
                                    ) {
                                        var n = e._getParentFromElement(this),
                                            i = r.default(n).hasClass(se);
                                        if (i || 27 !== t.which) {
                                            if ((t.preventDefault(), t.stopPropagation(), !i || 27 === t.which || 32 === t.which))
                                                return 27 === t.which && r.default(n.querySelector(ue)).trigger("focus"), void r.default(this).trigger("click");
                                            var o = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (e) {
                                                return r.default(e).is(":visible");
                                            });
                                            if (0 !== o.length) {
                                                var a = o.indexOf(t.target);
                                                38 === t.which && a > 0 && a--, 40 === t.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus();
                                            }
                                        }
                                    }
                                }),
                                s(e, null, [
                                    {
                                        key: "VERSION",
                                        get: function () {
                                            return "4.6.0";
                                        },
                                    },
                                    {
                                        key: "Default",
                                        get: function () {
                                            return fe;
                                        },
                                    },
                                    {
                                        key: "DefaultType",
                                        get: function () {
                                            return de;
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    r
                        .default(document)
                        .on(oe, ue, he._dataApiKeydownHandler)
                        .on(oe, ce, he._dataApiKeydownHandler)
                        .on(re + " keyup.bs.dropdown.data-api", he._clearMenus)
                        .on(re, ue, function (e) {
                            e.preventDefault(), e.stopPropagation(), he._jQueryInterface.call(r.default(this), "toggle");
                        })
                        .on(re, ".dropdown form", function (e) {
                            e.stopPropagation();
                        }),
                        (r.default.fn[K] = he._jQueryInterface),
                        (r.default.fn[K].Constructor = he),
                        (r.default.fn[K].noConflict = function () {
                            return (r.default.fn[K] = ee), he._jQueryInterface;
                        });
                    var pe = "modal",
                        ge = "bs.modal",
                        me = "." + ge,
                        ve = r.default.fn[pe],
                        ye = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                        be = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
                        _e = "hidden" + me,
                        we = "show" + me,
                        xe = "focusin" + me,
                        Ee = "resize" + me,
                        Te = "click.dismiss" + me,
                        Ce = "keydown.dismiss" + me,
                        Se = "mousedown.dismiss" + me,
                        ke = "modal-open",
                        Ne = "fade",
                        De = "show",
                        Ae = "modal-static",
                        je = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        Oe = ".sticky-top",
                        Ie = (function () {
                            function e(e, t) {
                                (this._config = this._getConfig(t)),
                                    (this._element = e),
                                    (this._dialog = e.querySelector(".modal-dialog")),
                                    (this._backdrop = null),
                                    (this._isShown = !1),
                                    (this._isBodyOverflowing = !1),
                                    (this._ignoreBackdropClick = !1),
                                    (this._isTransitioning = !1),
                                    (this._scrollbarWidth = 0);
                            }
                            var t = e.prototype;
                            return (
                                (t.toggle = function (e) {
                                    return this._isShown ? this.hide() : this.show(e);
                                }),
                                (t.show = function (e) {
                                    var t = this;
                                    if (!this._isShown && !this._isTransitioning) {
                                        r.default(this._element).hasClass(Ne) && (this._isTransitioning = !0);
                                        var n = r.default.Event(we, { relatedTarget: e });
                                        r.default(this._element).trigger(n),
                                            this._isShown ||
                                                n.isDefaultPrevented() ||
                                                ((this._isShown = !0),
                                                this._checkScrollbar(),
                                                this._setScrollbar(),
                                                this._adjustDialog(),
                                                this._setEscapeEvent(),
                                                this._setResizeEvent(),
                                                r.default(this._element).on(Te, '[data-dismiss="modal"]', function (e) {
                                                    return t.hide(e);
                                                }),
                                                r.default(this._dialog).on(Se, function () {
                                                    r.default(t._element).one("mouseup.dismiss.bs.modal", function (e) {
                                                        r.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
                                                    });
                                                }),
                                                this._showBackdrop(function () {
                                                    return t._showElement(e);
                                                }));
                                    }
                                }),
                                (t.hide = function (e) {
                                    var t = this;
                                    if ((e && e.preventDefault(), this._isShown && !this._isTransitioning)) {
                                        var n = r.default.Event("hide.bs.modal");
                                        if ((r.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
                                            this._isShown = !1;
                                            var i = r.default(this._element).hasClass(Ne);
                                            if (
                                                (i && (this._isTransitioning = !0),
                                                this._setEscapeEvent(),
                                                this._setResizeEvent(),
                                                r.default(document).off(xe),
                                                r.default(this._element).removeClass(De),
                                                r.default(this._element).off(Te),
                                                r.default(this._dialog).off(Se),
                                                i)
                                            ) {
                                                var o = d.getTransitionDurationFromElement(this._element);
                                                r.default(this._element)
                                                    .one(d.TRANSITION_END, function (e) {
                                                        return t._hideModal(e);
                                                    })
                                                    .emulateTransitionEnd(o);
                                            } else this._hideModal();
                                        }
                                    }
                                }),
                                (t.dispose = function () {
                                    [window, this._element, this._dialog].forEach(function (e) {
                                        return r.default(e).off(me);
                                    }),
                                        r.default(document).off(xe),
                                        r.default.removeData(this._element, ge),
                                        (this._config = null),
                                        (this._element = null),
                                        (this._dialog = null),
                                        (this._backdrop = null),
                                        (this._isShown = null),
                                        (this._isBodyOverflowing = null),
                                        (this._ignoreBackdropClick = null),
                                        (this._isTransitioning = null),
                                        (this._scrollbarWidth = null);
                                }),
                                (t.handleUpdate = function () {
                                    this._adjustDialog();
                                }),
                                (t._getConfig = function (e) {
                                    return (e = l({}, ye, e)), d.typeCheckConfig(pe, e, be), e;
                                }),
                                (t._triggerBackdropTransition = function () {
                                    var e = this,
                                        t = r.default.Event("hidePrevented.bs.modal");
                                    if ((r.default(this._element).trigger(t), !t.isDefaultPrevented())) {
                                        var n = this._element.scrollHeight > document.documentElement.clientHeight;
                                        n || (this._element.style.overflowY = "hidden"), this._element.classList.add(Ae);
                                        var i = d.getTransitionDurationFromElement(this._dialog);
                                        r.default(this._element).off(d.TRANSITION_END),
                                            r
                                                .default(this._element)
                                                .one(d.TRANSITION_END, function () {
                                                    e._element.classList.remove(Ae),
                                                        n ||
                                                            r
                                                                .default(e._element)
                                                                .one(d.TRANSITION_END, function () {
                                                                    e._element.style.overflowY = "";
                                                                })
                                                                .emulateTransitionEnd(e._element, i);
                                                })
                                                .emulateTransitionEnd(i),
                                            this._element.focus();
                                    }
                                }),
                                (t._showElement = function (e) {
                                    var t = this,
                                        n = r.default(this._element).hasClass(Ne),
                                        i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                                    (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                                        (this._element.style.display = "block"),
                                        this._element.removeAttribute("aria-hidden"),
                                        this._element.setAttribute("aria-modal", !0),
                                        this._element.setAttribute("role", "dialog"),
                                        r.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? (i.scrollTop = 0) : (this._element.scrollTop = 0),
                                        n && d.reflow(this._element),
                                        r.default(this._element).addClass(De),
                                        this._config.focus && this._enforceFocus();
                                    var o = r.default.Event("shown.bs.modal", { relatedTarget: e }),
                                        a = function () {
                                            t._config.focus && t._element.focus(), (t._isTransitioning = !1), r.default(t._element).trigger(o);
                                        };
                                    if (n) {
                                        var s = d.getTransitionDurationFromElement(this._dialog);
                                        r.default(this._dialog).one(d.TRANSITION_END, a).emulateTransitionEnd(s);
                                    } else a();
                                }),
                                (t._enforceFocus = function () {
                                    var e = this;
                                    r.default(document)
                                        .off(xe)
                                        .on(xe, function (t) {
                                            document !== t.target && e._element !== t.target && 0 === r.default(e._element).has(t.target).length && e._element.focus();
                                        });
                                }),
                                (t._setEscapeEvent = function () {
                                    var e = this;
                                    this._isShown
                                        ? r.default(this._element).on(Ce, function (t) {
                                              e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition();
                                          })
                                        : this._isShown || r.default(this._element).off(Ce);
                                }),
                                (t._setResizeEvent = function () {
                                    var e = this;
                                    this._isShown
                                        ? r.default(window).on(Ee, function (t) {
                                              return e.handleUpdate(t);
                                          })
                                        : r.default(window).off(Ee);
                                }),
                                (t._hideModal = function () {
                                    var e = this;
                                    (this._element.style.display = "none"),
                                        this._element.setAttribute("aria-hidden", !0),
                                        this._element.removeAttribute("aria-modal"),
                                        this._element.removeAttribute("role"),
                                        (this._isTransitioning = !1),
                                        this._showBackdrop(function () {
                                            r.default(document.body).removeClass(ke), e._resetAdjustments(), e._resetScrollbar(), r.default(e._element).trigger(_e);
                                        });
                                }),
                                (t._removeBackdrop = function () {
                                    this._backdrop && (r.default(this._backdrop).remove(), (this._backdrop = null));
                                }),
                                (t._showBackdrop = function (e) {
                                    var t = this,
                                        n = r.default(this._element).hasClass(Ne) ? Ne : "";
                                    if (this._isShown && this._config.backdrop) {
                                        if (
                                            ((this._backdrop = document.createElement("div")),
                                            (this._backdrop.className = "modal-backdrop"),
                                            n && this._backdrop.classList.add(n),
                                            r.default(this._backdrop).appendTo(document.body),
                                            r.default(this._element).on(Te, function (e) {
                                                t._ignoreBackdropClick ? (t._ignoreBackdropClick = !1) : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide());
                                            }),
                                            n && d.reflow(this._backdrop),
                                            r.default(this._backdrop).addClass(De),
                                            !e)
                                        )
                                            return;
                                        if (!n) return void e();
                                        var i = d.getTransitionDurationFromElement(this._backdrop);
                                        r.default(this._backdrop).one(d.TRANSITION_END, e).emulateTransitionEnd(i);
                                    } else if (!this._isShown && this._backdrop) {
                                        r.default(this._backdrop).removeClass(De);
                                        var o = function () {
                                            t._removeBackdrop(), e && e();
                                        };
                                        if (r.default(this._element).hasClass(Ne)) {
                                            var a = d.getTransitionDurationFromElement(this._backdrop);
                                            r.default(this._backdrop).one(d.TRANSITION_END, o).emulateTransitionEnd(a);
                                        } else o();
                                    } else e && e();
                                }),
                                (t._adjustDialog = function () {
                                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                                }),
                                (t._resetAdjustments = function () {
                                    (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                                }),
                                (t._checkScrollbar = function () {
                                    var e = document.body.getBoundingClientRect();
                                    (this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                                }),
                                (t._setScrollbar = function () {
                                    var e = this;
                                    if (this._isBodyOverflowing) {
                                        var t = [].slice.call(document.querySelectorAll(je)),
                                            n = [].slice.call(document.querySelectorAll(Oe));
                                        r.default(t).each(function (t, n) {
                                            var i = n.style.paddingRight,
                                                o = r.default(n).css("padding-right");
                                            r.default(n)
                                                .data("padding-right", i)
                                                .css("padding-right", parseFloat(o) + e._scrollbarWidth + "px");
                                        }),
                                            r.default(n).each(function (t, n) {
                                                var i = n.style.marginRight,
                                                    o = r.default(n).css("margin-right");
                                                r.default(n)
                                                    .data("margin-right", i)
                                                    .css("margin-right", parseFloat(o) - e._scrollbarWidth + "px");
                                            });
                                        var i = document.body.style.paddingRight,
                                            o = r.default(document.body).css("padding-right");
                                        r.default(document.body)
                                            .data("padding-right", i)
                                            .css("padding-right", parseFloat(o) + this._scrollbarWidth + "px");
                                    }
                                    r.default(document.body).addClass(ke);
                                }),
                                (t._resetScrollbar = function () {
                                    var e = [].slice.call(document.querySelectorAll(je));
                                    r.default(e).each(function (e, t) {
                                        var n = r.default(t).data("padding-right");
                                        r.default(t).removeData("padding-right"), (t.style.paddingRight = n || "");
                                    });
                                    var t = [].slice.call(document.querySelectorAll("" + Oe));
                                    r.default(t).each(function (e, t) {
                                        var n = r.default(t).data("margin-right");
                                        void 0 !== n && r.default(t).css("margin-right", n).removeData("margin-right");
                                    });
                                    var n = r.default(document.body).data("padding-right");
                                    r.default(document.body).removeData("padding-right"), (document.body.style.paddingRight = n || "");
                                }),
                                (t._getScrollbarWidth = function () {
                                    var e = document.createElement("div");
                                    (e.className = "modal-scrollbar-measure"), document.body.appendChild(e);
                                    var t = e.getBoundingClientRect().width - e.clientWidth;
                                    return document.body.removeChild(e), t;
                                }),
                                (e._jQueryInterface = function (t, n) {
                                    return this.each(function () {
                                        var i = r.default(this).data(ge),
                                            o = l({}, ye, r.default(this).data(), "object" == typeof t && t ? t : {});
                                        if ((i || ((i = new e(this, o)), r.default(this).data(ge, i)), "string" == typeof t)) {
                                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                            i[t](n);
                                        } else o.show && i.show(n);
                                    });
                                }),
                                s(e, null, [
                                    {
                                        key: "VERSION",
                                        get: function () {
                                            return "4.6.0";
                                        },
                                    },
                                    {
                                        key: "Default",
                                        get: function () {
                                            return ye;
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    r.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
                        var t,
                            n = this,
                            i = d.getSelectorFromElement(this);
                        i && (t = document.querySelector(i));
                        var o = r.default(t).data(ge) ? "toggle" : l({}, r.default(t).data(), r.default(this).data());
                        ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
                        var a = r.default(t).one(we, function (e) {
                            e.isDefaultPrevented() ||
                                a.one(_e, function () {
                                    r.default(n).is(":visible") && n.focus();
                                });
                        });
                        Ie._jQueryInterface.call(r.default(t), o, this);
                    }),
                        (r.default.fn[pe] = Ie._jQueryInterface),
                        (r.default.fn[pe].Constructor = Ie),
                        (r.default.fn[pe].noConflict = function () {
                            return (r.default.fn[pe] = ve), Ie._jQueryInterface;
                        });
                    var Le = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                        Pe = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
                        qe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
                    function He(e, t, n) {
                        if (0 === e.length) return e;
                        if (n && "function" == typeof n) return n(e);
                        for (
                            var i = new window.DOMParser().parseFromString(e, "text/html"),
                                r = Object.keys(t),
                                o = [].slice.call(i.body.querySelectorAll("*")),
                                a = function (e, n) {
                                    var i = o[e],
                                        a = i.nodeName.toLowerCase();
                                    if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                                    var s = [].slice.call(i.attributes),
                                        l = [].concat(t["*"] || [], t[a] || []);
                                    s.forEach(function (e) {
                                        (function (e, t) {
                                            var n = e.nodeName.toLowerCase();
                                            if (-1 !== t.indexOf(n)) return -1 === Le.indexOf(n) || Boolean(e.nodeValue.match(Pe) || e.nodeValue.match(qe));
                                            for (
                                                var i = t.filter(function (e) {
                                                        return e instanceof RegExp;
                                                    }),
                                                    r = 0,
                                                    o = i.length;
                                                r < o;
                                                r++
                                            )
                                                if (n.match(i[r])) return !0;
                                            return !1;
                                        })(e, l) || i.removeAttribute(e.nodeName);
                                    });
                                },
                                s = 0,
                                l = o.length;
                            s < l;
                            s++
                        )
                            a(s);
                        return i.body.innerHTML;
                    }
                    var Re = "tooltip",
                        Fe = "bs.tooltip",
                        Me = "." + Fe,
                        $e = r.default.fn[Re],
                        Be = "bs-tooltip",
                        We = new RegExp("(^|\\s)" + Be + "\\S+", "g"),
                        Ue = ["sanitize", "whiteList", "sanitizeFn"],
                        Qe = {
                            animation: "boolean",
                            template: "string",
                            title: "(string|element|function)",
                            trigger: "string",
                            delay: "(number|object)",
                            html: "boolean",
                            selector: "(string|boolean)",
                            placement: "(string|function)",
                            offset: "(number|string|function)",
                            container: "(string|element|boolean)",
                            fallbackPlacement: "(string|array)",
                            boundary: "(string|element)",
                            customClass: "(string|function)",
                            sanitize: "boolean",
                            sanitizeFn: "(null|function)",
                            whiteList: "object",
                            popperConfig: "(null|object)",
                        },
                        ze = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
                        Ve = {
                            animation: !0,
                            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                            trigger: "hover focus",
                            title: "",
                            delay: 0,
                            html: !1,
                            selector: !1,
                            placement: "top",
                            offset: 0,
                            container: !1,
                            fallbackPlacement: "flip",
                            boundary: "scrollParent",
                            customClass: "",
                            sanitize: !0,
                            sanitizeFn: null,
                            whiteList: {
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
                                img: ["src", "srcset", "alt", "title", "width", "height"],
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
                                ul: [],
                            },
                            popperConfig: null,
                        },
                        Xe = "show",
                        Ye = "out",
                        Ke = {
                            HIDE: "hide" + Me,
                            HIDDEN: "hidden" + Me,
                            SHOW: "show" + Me,
                            SHOWN: "shown" + Me,
                            INSERTED: "inserted" + Me,
                            CLICK: "click" + Me,
                            FOCUSIN: "focusin" + Me,
                            FOCUSOUT: "focusout" + Me,
                            MOUSEENTER: "mouseenter" + Me,
                            MOUSELEAVE: "mouseleave" + Me,
                        },
                        Je = "fade",
                        Ge = "show",
                        Ze = "hover",
                        et = "focus",
                        tt = (function () {
                            function e(e, t) {
                                if (void 0 === o.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                                (this._isEnabled = !0),
                                    (this._timeout = 0),
                                    (this._hoverState = ""),
                                    (this._activeTrigger = {}),
                                    (this._popper = null),
                                    (this.element = e),
                                    (this.config = this._getConfig(t)),
                                    (this.tip = null),
                                    this._setListeners();
                            }
                            var t = e.prototype;
                            return (
                                (t.enable = function () {
                                    this._isEnabled = !0;
                                }),
                                (t.disable = function () {
                                    this._isEnabled = !1;
                                }),
                                (t.toggleEnabled = function () {
                                    this._isEnabled = !this._isEnabled;
                                }),
                                (t.toggle = function (e) {
                                    if (this._isEnabled)
                                        if (e) {
                                            var t = this.constructor.DATA_KEY,
                                                n = r.default(e.currentTarget).data(t);
                                            n || ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), r.default(e.currentTarget).data(t, n)),
                                                (n._activeTrigger.click = !n._activeTrigger.click),
                                                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                                        } else {
                                            if (r.default(this.getTipElement()).hasClass(Ge)) return void this._leave(null, this);
                                            this._enter(null, this);
                                        }
                                }),
                                (t.dispose = function () {
                                    clearTimeout(this._timeout),
                                        r.default.removeData(this.element, this.constructor.DATA_KEY),
                                        r.default(this.element).off(this.constructor.EVENT_KEY),
                                        r.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                                        this.tip && r.default(this.tip).remove(),
                                        (this._isEnabled = null),
                                        (this._timeout = null),
                                        (this._hoverState = null),
                                        (this._activeTrigger = null),
                                        this._popper && this._popper.destroy(),
                                        (this._popper = null),
                                        (this.element = null),
                                        (this.config = null),
                                        (this.tip = null);
                                }),
                                (t.show = function () {
                                    var e = this;
                                    if ("none" === r.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                                    var t = r.default.Event(this.constructor.Event.SHOW);
                                    if (this.isWithContent() && this._isEnabled) {
                                        r.default(this.element).trigger(t);
                                        var n = d.findShadowRoot(this.element),
                                            i = r.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                                        if (t.isDefaultPrevented() || !i) return;
                                        var a = this.getTipElement(),
                                            s = d.getUID(this.constructor.NAME);
                                        a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && r.default(a).addClass(Je);
                                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                                            u = this._getAttachment(l);
                                        this.addAttachmentClass(u);
                                        var c = this._getContainer();
                                        r.default(a).data(this.constructor.DATA_KEY, this),
                                            r.default.contains(this.element.ownerDocument.documentElement, this.tip) || r.default(a).appendTo(c),
                                            r.default(this.element).trigger(this.constructor.Event.INSERTED),
                                            (this._popper = new o.default(this.element, a, this._getPopperConfig(u))),
                                            r.default(a).addClass(Ge),
                                            r.default(a).addClass(this.config.customClass),
                                            "ontouchstart" in document.documentElement && r.default(document.body).children().on("mouseover", null, r.default.noop);
                                        var f = function () {
                                            e.config.animation && e._fixTransition();
                                            var t = e._hoverState;
                                            (e._hoverState = null), r.default(e.element).trigger(e.constructor.Event.SHOWN), t === Ye && e._leave(null, e);
                                        };
                                        if (r.default(this.tip).hasClass(Je)) {
                                            var h = d.getTransitionDurationFromElement(this.tip);
                                            r.default(this.tip).one(d.TRANSITION_END, f).emulateTransitionEnd(h);
                                        } else f();
                                    }
                                }),
                                (t.hide = function (e) {
                                    var t = this,
                                        n = this.getTipElement(),
                                        i = r.default.Event(this.constructor.Event.HIDE),
                                        o = function () {
                                            t._hoverState !== Xe && n.parentNode && n.parentNode.removeChild(n),
                                                t._cleanTipClass(),
                                                t.element.removeAttribute("aria-describedby"),
                                                r.default(t.element).trigger(t.constructor.Event.HIDDEN),
                                                null !== t._popper && t._popper.destroy(),
                                                e && e();
                                        };
                                    if ((r.default(this.element).trigger(i), !i.isDefaultPrevented())) {
                                        if (
                                            (r.default(n).removeClass(Ge),
                                            "ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop),
                                            (this._activeTrigger.click = !1),
                                            (this._activeTrigger[et] = !1),
                                            (this._activeTrigger[Ze] = !1),
                                            r.default(this.tip).hasClass(Je))
                                        ) {
                                            var a = d.getTransitionDurationFromElement(n);
                                            r.default(n).one(d.TRANSITION_END, o).emulateTransitionEnd(a);
                                        } else o();
                                        this._hoverState = "";
                                    }
                                }),
                                (t.update = function () {
                                    null !== this._popper && this._popper.scheduleUpdate();
                                }),
                                (t.isWithContent = function () {
                                    return Boolean(this.getTitle());
                                }),
                                (t.addAttachmentClass = function (e) {
                                    r.default(this.getTipElement()).addClass(Be + "-" + e);
                                }),
                                (t.getTipElement = function () {
                                    return (this.tip = this.tip || r.default(this.config.template)[0]), this.tip;
                                }),
                                (t.setContent = function () {
                                    var e = this.getTipElement();
                                    this.setElementContent(r.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), r.default(e).removeClass(Je + " " + Ge);
                                }),
                                (t.setElementContent = function (e, t) {
                                    "object" != typeof t || (!t.nodeType && !t.jquery)
                                        ? this.config.html
                                            ? (this.config.sanitize && (t = He(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t))
                                            : e.text(t)
                                        : this.config.html
                                        ? r.default(t).parent().is(e) || e.empty().append(t)
                                        : e.text(r.default(t).text());
                                }),
                                (t.getTitle = function () {
                                    var e = this.element.getAttribute("data-original-title");
                                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
                                }),
                                (t._getPopperConfig = function (e) {
                                    var t = this;
                                    return l(
                                        {},
                                        {
                                            placement: e,
                                            modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } },
                                            onCreate: function (e) {
                                                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                                            },
                                            onUpdate: function (e) {
                                                return t._handlePopperPlacementChange(e);
                                            },
                                        },
                                        this.config.popperConfig
                                    );
                                }),
                                (t._getOffset = function () {
                                    var e = this,
                                        t = {};
                                    return (
                                        "function" == typeof this.config.offset
                                            ? (t.fn = function (t) {
                                                  return (t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {})), t;
                                              })
                                            : (t.offset = this.config.offset),
                                        t
                                    );
                                }),
                                (t._getContainer = function () {
                                    return !1 === this.config.container ? document.body : d.isElement(this.config.container) ? r.default(this.config.container) : r.default(document).find(this.config.container);
                                }),
                                (t._getAttachment = function (e) {
                                    return ze[e.toUpperCase()];
                                }),
                                (t._setListeners = function () {
                                    var e = this;
                                    this.config.trigger.split(" ").forEach(function (t) {
                                        if ("click" === t)
                                            r.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                                                return e.toggle(t);
                                            });
                                        else if ("manual" !== t) {
                                            var n = t === Ze ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                                i = t === Ze ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                            r.default(e.element)
                                                .on(n, e.config.selector, function (t) {
                                                    return e._enter(t);
                                                })
                                                .on(i, e.config.selector, function (t) {
                                                    return e._leave(t);
                                                });
                                        }
                                    }),
                                        (this._hideModalHandler = function () {
                                            e.element && e.hide();
                                        }),
                                        r.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                                        this.config.selector ? (this.config = l({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                                }),
                                (t._fixTitle = function () {
                                    var e = typeof this.element.getAttribute("data-original-title");
                                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                                }),
                                (t._enter = function (e, t) {
                                    var n = this.constructor.DATA_KEY;
                                    (t = t || r.default(e.currentTarget).data(n)) || ((t = new this.constructor(e.currentTarget, this._getDelegateConfig())), r.default(e.currentTarget).data(n, t)),
                                        e && (t._activeTrigger["focusin" === e.type ? et : Ze] = !0),
                                        r.default(t.getTipElement()).hasClass(Ge) || t._hoverState === Xe
                                            ? (t._hoverState = Xe)
                                            : (clearTimeout(t._timeout),
                                              (t._hoverState = Xe),
                                              t.config.delay && t.config.delay.show
                                                  ? (t._timeout = setTimeout(function () {
                                                        t._hoverState === Xe && t.show();
                                                    }, t.config.delay.show))
                                                  : t.show());
                                }),
                                (t._leave = function (e, t) {
                                    var n = this.constructor.DATA_KEY;
                                    (t = t || r.default(e.currentTarget).data(n)) || ((t = new this.constructor(e.currentTarget, this._getDelegateConfig())), r.default(e.currentTarget).data(n, t)),
                                        e && (t._activeTrigger["focusout" === e.type ? et : Ze] = !1),
                                        t._isWithActiveTrigger() ||
                                            (clearTimeout(t._timeout),
                                            (t._hoverState = Ye),
                                            t.config.delay && t.config.delay.hide
                                                ? (t._timeout = setTimeout(function () {
                                                      t._hoverState === Ye && t.hide();
                                                  }, t.config.delay.hide))
                                                : t.hide());
                                }),
                                (t._isWithActiveTrigger = function () {
                                    for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                                    return !1;
                                }),
                                (t._getConfig = function (e) {
                                    var t = r.default(this.element).data();
                                    return (
                                        Object.keys(t).forEach(function (e) {
                                            -1 !== Ue.indexOf(e) && delete t[e];
                                        }),
                                        "number" == typeof (e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }),
                                        "number" == typeof e.title && (e.title = e.title.toString()),
                                        "number" == typeof e.content && (e.content = e.content.toString()),
                                        d.typeCheckConfig(Re, e, this.constructor.DefaultType),
                                        e.sanitize && (e.template = He(e.template, e.whiteList, e.sanitizeFn)),
                                        e
                                    );
                                }),
                                (t._getDelegateConfig = function () {
                                    var e = {};
                                    if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                                    return e;
                                }),
                                (t._cleanTipClass = function () {
                                    var e = r.default(this.getTipElement()),
                                        t = e.attr("class").match(We);
                                    null !== t && t.length && e.removeClass(t.join(""));
                                }),
                                (t._handlePopperPlacementChange = function (e) {
                                    (this.tip = e.instance.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
                                }),
                                (t._fixTransition = function () {
                                    var e = this.getTipElement(),
                                        t = this.config.animation;
                                    null === e.getAttribute("x-placement") && (r.default(e).removeClass(Je), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = t));
                                }),
                                (e._jQueryInterface = function (t) {
                                    return this.each(function () {
                                        var n = r.default(this),
                                            i = n.data(Fe),
                                            o = "object" == typeof t && t;
                                        if ((i || !/dispose|hide/.test(t)) && (i || ((i = new e(this, o)), n.data(Fe, i)), "string" == typeof t)) {
                                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                            i[t]();
                                        }
                                    });
                                }),
                                s(e, null, [
                                    {
                                        key: "VERSION",
                                        get: function () {
                                            return "4.6.0";
                                        },
                                    },
                                    {
                                        key: "Default",
                                        get: function () {
                                            return Ve;
                                        },
                                    },
                                    {
                                        key: "NAME",
                                        get: function () {
                                            return Re;
                                        },
                                    },
                                    {
                                        key: "DATA_KEY",
                                        get: function () {
                                            return Fe;
                                        },
                                    },
                                    {
                                        key: "Event",
                                        get: function () {
                                            return Ke;
                                        },
                                    },
                                    {
                                        key: "EVENT_KEY",
                                        get: function () {
                                            return Me;
                                        },
                                    },
                                    {
                                        key: "DefaultType",
                                        get: function () {
                                            return Qe;
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    (r.default.fn[Re] = tt._jQueryInterface),
                        (r.default.fn[Re].Constructor = tt),
                        (r.default.fn[Re].noConflict = function () {
                            return (r.default.fn[Re] = $e), tt._jQueryInterface;
                        });
                    var nt = "popover",
                        it = "bs.popover",
                        rt = "." + it,
                        ot = r.default.fn[nt],
                        at = "bs-popover",
                        st = new RegExp("(^|\\s)" + at + "\\S+", "g"),
                        lt = l({}, tt.Default, {
                            placement: "right",
                            trigger: "click",
                            content: "",
                            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                        }),
                        ut = l({}, tt.DefaultType, { content: "(string|element|function)" }),
                        ct = {
                            HIDE: "hide" + rt,
                            HIDDEN: "hidden" + rt,
                            SHOW: "show" + rt,
                            SHOWN: "shown" + rt,
                            INSERTED: "inserted" + rt,
                            CLICK: "click" + rt,
                            FOCUSIN: "focusin" + rt,
                            FOCUSOUT: "focusout" + rt,
                            MOUSEENTER: "mouseenter" + rt,
                            MOUSELEAVE: "mouseleave" + rt,
                        },
                        ft = (function (e) {
                            function t() {
                                return e.apply(this, arguments) || this;
                            }
                            !(function (e, t) {
                                (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
                            })(t, e);
                            var n = t.prototype;
                            return (
                                (n.isWithContent = function () {
                                    return this.getTitle() || this._getContent();
                                }),
                                (n.addAttachmentClass = function (e) {
                                    r.default(this.getTipElement()).addClass(at + "-" + e);
                                }),
                                (n.getTipElement = function () {
                                    return (this.tip = this.tip || r.default(this.config.template)[0]), this.tip;
                                }),
                                (n.setContent = function () {
                                    var e = r.default(this.getTipElement());
                                    this.setElementContent(e.find(".popover-header"), this.getTitle());
                                    var t = this._getContent();
                                    "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show");
                                }),
                                (n._getContent = function () {
                                    return this.element.getAttribute("data-content") || this.config.content;
                                }),
                                (n._cleanTipClass = function () {
                                    var e = r.default(this.getTipElement()),
                                        t = e.attr("class").match(st);
                                    null !== t && t.length > 0 && e.removeClass(t.join(""));
                                }),
                                (t._jQueryInterface = function (e) {
                                    return this.each(function () {
                                        var n = r.default(this).data(it),
                                            i = "object" == typeof e ? e : null;
                                        if ((n || !/dispose|hide/.test(e)) && (n || ((n = new t(this, i)), r.default(this).data(it, n)), "string" == typeof e)) {
                                            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                            n[e]();
                                        }
                                    });
                                }),
                                s(t, null, [
                                    {
                                        key: "VERSION",
                                        get: function () {
                                            return "4.6.0";
                                        },
                                    },
                                    {
                                        key: "Default",
                                        get: function () {
                                            return lt;
                                        },
                                    },
                                    {
                                        key: "NAME",
                                        get: function () {
                                            return nt;
                                        },
                                    },
                                    {
                                        key: "DATA_KEY",
                                        get: function () {
                                            return it;
                                        },
                                    },
                                    {
                                        key: "Event",
                                        get: function () {
                                            return ct;
                                        },
                                    },
                                    {
                                        key: "EVENT_KEY",
                                        get: function () {
                                            return rt;
                                        },
                                    },
                                    {
                                        key: "DefaultType",
                                        get: function () {
                                            return ut;
                                        },
                                    },
                                ]),
                                t
                            );
                        })(tt);
                    (r.default.fn[nt] = ft._jQueryInterface),
                        (r.default.fn[nt].Constructor = ft),
                        (r.default.fn[nt].noConflict = function () {
                            return (r.default.fn[nt] = ot), ft._jQueryInterface;
                        });
                    var dt = "scrollspy",
                        ht = "bs.scrollspy",
                        pt = "." + ht,
                        gt = r.default.fn[dt],
                        mt = { offset: 10, method: "auto", target: "" },
                        vt = { offset: "number", method: "string", target: "(string|element)" },
                        yt = "active",
                        bt = ".nav, .list-group",
                        _t = ".nav-link",
                        wt = ".list-group-item",
                        xt = "position",
                        Et = (function () {
                            function e(e, t) {
                                var n = this;
                                (this._element = e),
                                    (this._scrollElement = "BODY" === e.tagName ? window : e),
                                    (this._config = this._getConfig(t)),
                                    (this._selector = this._config.target + " " + _t + "," + this._config.target + " " + wt + "," + this._config.target + " .dropdown-item"),
                                    (this._offsets = []),
                                    (this._targets = []),
                                    (this._activeTarget = null),
                                    (this._scrollHeight = 0),
                                    r.default(this._scrollElement).on("scroll.bs.scrollspy", function (e) {
                                        return n._process(e);
                                    }),
                                    this.refresh(),
                                    this._process();
                            }
                            var t = e.prototype;
                            return (
                                (t.refresh = function () {
                                    var e = this,
                                        t = this._scrollElement === this._scrollElement.window ? "offset" : xt,
                                        n = "auto" === this._config.method ? t : this._config.method,
                                        i = n === xt ? this._getScrollTop() : 0;
                                    (this._offsets = []),
                                        (this._targets = []),
                                        (this._scrollHeight = this._getScrollHeight()),
                                        [].slice
                                            .call(document.querySelectorAll(this._selector))
                                            .map(function (e) {
                                                var t,
                                                    o = d.getSelectorFromElement(e);
                                                if ((o && (t = document.querySelector(o)), t)) {
                                                    var a = t.getBoundingClientRect();
                                                    if (a.width || a.height) return [r.default(t)[n]().top + i, o];
                                                }
                                                return null;
                                            })
                                            .filter(function (e) {
                                                return e;
                                            })
                                            .sort(function (e, t) {
                                                return e[0] - t[0];
                                            })
                                            .forEach(function (t) {
                                                e._offsets.push(t[0]), e._targets.push(t[1]);
                                            });
                                }),
                                (t.dispose = function () {
                                    r.default.removeData(this._element, ht),
                                        r.default(this._scrollElement).off(pt),
                                        (this._element = null),
                                        (this._scrollElement = null),
                                        (this._config = null),
                                        (this._selector = null),
                                        (this._offsets = null),
                                        (this._targets = null),
                                        (this._activeTarget = null),
                                        (this._scrollHeight = null);
                                }),
                                (t._getConfig = function (e) {
                                    if ("string" != typeof (e = l({}, mt, "object" == typeof e && e ? e : {})).target && d.isElement(e.target)) {
                                        var t = r.default(e.target).attr("id");
                                        t || ((t = d.getUID(dt)), r.default(e.target).attr("id", t)), (e.target = "#" + t);
                                    }
                                    return d.typeCheckConfig(dt, e, vt), e;
                                }),
                                (t._getScrollTop = function () {
                                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                                }),
                                (t._getScrollHeight = function () {
                                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                                }),
                                (t._getOffsetHeight = function () {
                                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                                }),
                                (t._process = function () {
                                    var e = this._getScrollTop() + this._config.offset,
                                        t = this._getScrollHeight(),
                                        n = this._config.offset + t - this._getOffsetHeight();
                                    if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                                        var i = this._targets[this._targets.length - 1];
                                        this._activeTarget !== i && this._activate(i);
                                    } else {
                                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                                        for (var r = this._offsets.length; r--; )
                                            this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]);
                                    }
                                }),
                                (t._activate = function (e) {
                                    (this._activeTarget = e), this._clear();
                                    var t = this._selector.split(",").map(function (t) {
                                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                                        }),
                                        n = r.default([].slice.call(document.querySelectorAll(t.join(","))));
                                    n.hasClass("dropdown-item")
                                        ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(yt), n.addClass(yt))
                                        : (n.addClass(yt),
                                          n
                                              .parents(bt)
                                              .prev(_t + ", " + wt)
                                              .addClass(yt),
                                          n.parents(bt).prev(".nav-item").children(_t).addClass(yt)),
                                        r.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: e });
                                }),
                                (t._clear = function () {
                                    [].slice
                                        .call(document.querySelectorAll(this._selector))
                                        .filter(function (e) {
                                            return e.classList.contains(yt);
                                        })
                                        .forEach(function (e) {
                                            return e.classList.remove(yt);
                                        });
                                }),
                                (e._jQueryInterface = function (t) {
                                    return this.each(function () {
                                        var n = r.default(this).data(ht);
                                        if ((n || ((n = new e(this, "object" == typeof t && t)), r.default(this).data(ht, n)), "string" == typeof t)) {
                                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                            n[t]();
                                        }
                                    });
                                }),
                                s(e, null, [
                                    {
                                        key: "VERSION",
                                        get: function () {
                                            return "4.6.0";
                                        },
                                    },
                                    {
                                        key: "Default",
                                        get: function () {
                                            return mt;
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    r.default(window).on("load.bs.scrollspy.data-api", function () {
                        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--; ) {
                            var n = r.default(e[t]);
                            Et._jQueryInterface.call(n, n.data());
                        }
                    }),
                        (r.default.fn[dt] = Et._jQueryInterface),
                        (r.default.fn[dt].Constructor = Et),
                        (r.default.fn[dt].noConflict = function () {
                            return (r.default.fn[dt] = gt), Et._jQueryInterface;
                        });
                    var Tt = "bs.tab",
                        Ct = r.default.fn.tab,
                        St = "active",
                        kt = "fade",
                        Nt = "show",
                        Dt = ".active",
                        At = "> li > .active",
                        jt = (function () {
                            function e(e) {
                                this._element = e;
                            }
                            var t = e.prototype;
                            return (
                                (t.show = function () {
                                    var e = this;
                                    if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && r.default(this._element).hasClass(St)) || r.default(this._element).hasClass("disabled"))) {
                                        var t,
                                            n,
                                            i = r.default(this._element).closest(".nav, .list-group")[0],
                                            o = d.getSelectorFromElement(this._element);
                                        if (i) {
                                            var a = "UL" === i.nodeName || "OL" === i.nodeName ? At : Dt;
                                            n = (n = r.default.makeArray(r.default(i).find(a)))[n.length - 1];
                                        }
                                        var s = r.default.Event("hide.bs.tab", { relatedTarget: this._element }),
                                            l = r.default.Event("show.bs.tab", { relatedTarget: n });
                                        if ((n && r.default(n).trigger(s), r.default(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented())) {
                                            o && (t = document.querySelector(o)), this._activate(this._element, i);
                                            var u = function () {
                                                var t = r.default.Event("hidden.bs.tab", { relatedTarget: e._element }),
                                                    i = r.default.Event("shown.bs.tab", { relatedTarget: n });
                                                r.default(n).trigger(t), r.default(e._element).trigger(i);
                                            };
                                            t ? this._activate(t, t.parentNode, u) : u();
                                        }
                                    }
                                }),
                                (t.dispose = function () {
                                    r.default.removeData(this._element, Tt), (this._element = null);
                                }),
                                (t._activate = function (e, t, n) {
                                    var i = this,
                                        o = (!t || ("UL" !== t.nodeName && "OL" !== t.nodeName) ? r.default(t).children(Dt) : r.default(t).find(At))[0],
                                        a = n && o && r.default(o).hasClass(kt),
                                        s = function () {
                                            return i._transitionComplete(e, o, n);
                                        };
                                    if (o && a) {
                                        var l = d.getTransitionDurationFromElement(o);
                                        r.default(o).removeClass(Nt).one(d.TRANSITION_END, s).emulateTransitionEnd(l);
                                    } else s();
                                }),
                                (t._transitionComplete = function (e, t, n) {
                                    if (t) {
                                        r.default(t).removeClass(St);
                                        var i = r.default(t.parentNode).find("> .dropdown-menu .active")[0];
                                        i && r.default(i).removeClass(St), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
                                    }
                                    if (
                                        (r.default(e).addClass(St),
                                        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                                        d.reflow(e),
                                        e.classList.contains(kt) && e.classList.add(Nt),
                                        e.parentNode && r.default(e.parentNode).hasClass("dropdown-menu"))
                                    ) {
                                        var o = r.default(e).closest(".dropdown")[0];
                                        if (o) {
                                            var a = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                                            r.default(a).addClass(St);
                                        }
                                        e.setAttribute("aria-expanded", !0);
                                    }
                                    n && n();
                                }),
                                (e._jQueryInterface = function (t) {
                                    return this.each(function () {
                                        var n = r.default(this),
                                            i = n.data(Tt);
                                        if ((i || ((i = new e(this)), n.data(Tt, i)), "string" == typeof t)) {
                                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                            i[t]();
                                        }
                                    });
                                }),
                                s(e, null, [
                                    {
                                        key: "VERSION",
                                        get: function () {
                                            return "4.6.0";
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    r.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
                        e.preventDefault(), jt._jQueryInterface.call(r.default(this), "show");
                    }),
                        (r.default.fn.tab = jt._jQueryInterface),
                        (r.default.fn.tab.Constructor = jt),
                        (r.default.fn.tab.noConflict = function () {
                            return (r.default.fn.tab = Ct), jt._jQueryInterface;
                        });
                    var Ot = "toast",
                        It = "bs.toast",
                        Lt = "." + It,
                        Pt = r.default.fn[Ot],
                        qt = "click.dismiss" + Lt,
                        Ht = "hide",
                        Rt = "show",
                        Ft = "showing",
                        Mt = { animation: "boolean", autohide: "boolean", delay: "number" },
                        $t = { animation: !0, autohide: !0, delay: 500 },
                        Bt = (function () {
                            function e(e, t) {
                                (this._element = e), (this._config = this._getConfig(t)), (this._timeout = null), this._setListeners();
                            }
                            var t = e.prototype;
                            return (
                                (t.show = function () {
                                    var e = this,
                                        t = r.default.Event("show.bs.toast");
                                    if ((r.default(this._element).trigger(t), !t.isDefaultPrevented())) {
                                        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                                        var n = function () {
                                            e._element.classList.remove(Ft),
                                                e._element.classList.add(Rt),
                                                r.default(e._element).trigger("shown.bs.toast"),
                                                e._config.autohide &&
                                                    (e._timeout = setTimeout(function () {
                                                        e.hide();
                                                    }, e._config.delay));
                                        };
                                        if ((this._element.classList.remove(Ht), d.reflow(this._element), this._element.classList.add(Ft), this._config.animation)) {
                                            var i = d.getTransitionDurationFromElement(this._element);
                                            r.default(this._element).one(d.TRANSITION_END, n).emulateTransitionEnd(i);
                                        } else n();
                                    }
                                }),
                                (t.hide = function () {
                                    if (this._element.classList.contains(Rt)) {
                                        var e = r.default.Event("hide.bs.toast");
                                        r.default(this._element).trigger(e), e.isDefaultPrevented() || this._close();
                                    }
                                }),
                                (t.dispose = function () {
                                    this._clearTimeout(),
                                        this._element.classList.contains(Rt) && this._element.classList.remove(Rt),
                                        r.default(this._element).off(qt),
                                        r.default.removeData(this._element, It),
                                        (this._element = null),
                                        (this._config = null);
                                }),
                                (t._getConfig = function (e) {
                                    return (e = l({}, $t, r.default(this._element).data(), "object" == typeof e && e ? e : {})), d.typeCheckConfig(Ot, e, this.constructor.DefaultType), e;
                                }),
                                (t._setListeners = function () {
                                    var e = this;
                                    r.default(this._element).on(qt, '[data-dismiss="toast"]', function () {
                                        return e.hide();
                                    });
                                }),
                                (t._close = function () {
                                    var e = this,
                                        t = function () {
                                            e._element.classList.add(Ht), r.default(e._element).trigger("hidden.bs.toast");
                                        };
                                    if ((this._element.classList.remove(Rt), this._config.animation)) {
                                        var n = d.getTransitionDurationFromElement(this._element);
                                        r.default(this._element).one(d.TRANSITION_END, t).emulateTransitionEnd(n);
                                    } else t();
                                }),
                                (t._clearTimeout = function () {
                                    clearTimeout(this._timeout), (this._timeout = null);
                                }),
                                (e._jQueryInterface = function (t) {
                                    return this.each(function () {
                                        var n = r.default(this),
                                            i = n.data(It);
                                        if ((i || ((i = new e(this, "object" == typeof t && t)), n.data(It, i)), "string" == typeof t)) {
                                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                            i[t](this);
                                        }
                                    });
                                }),
                                s(e, null, [
                                    {
                                        key: "VERSION",
                                        get: function () {
                                            return "4.6.0";
                                        },
                                    },
                                    {
                                        key: "DefaultType",
                                        get: function () {
                                            return Mt;
                                        },
                                    },
                                    {
                                        key: "Default",
                                        get: function () {
                                            return $t;
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    (r.default.fn[Ot] = Bt._jQueryInterface),
                        (r.default.fn[Ot].Constructor = Bt),
                        (r.default.fn[Ot].noConflict = function () {
                            return (r.default.fn[Ot] = Pt), Bt._jQueryInterface;
                        }),
                        (e.Alert = m),
                        (e.Button = T),
                        (e.Carousel = H),
                        (e.Collapse = Y),
                        (e.Dropdown = he),
                        (e.Modal = Ie),
                        (e.Popover = ft),
                        (e.Scrollspy = Et),
                        (e.Tab = jt),
                        (e.Toast = Bt),
                        (e.Tooltip = tt),
                        (e.Util = d),
                        Object.defineProperty(e, "__esModule", { value: !0 });
                })(t, n(9755), n(8981));
            },
            9755: function (e, t) {
                var n;
                /*!
                 * jQuery JavaScript Library v3.6.0
                 * https://jquery.com/
                 *
                 * Includes Sizzle.js
                 * https://sizzlejs.com/
                 *
                 * Copyright OpenJS Foundation and other contributors
                 * Released under the MIT license
                 * https://jquery.org/license
                 *
                 * Date: 2021-03-02T17:08Z
                 */ !(function (t, n) {
                    "use strict";
                    "object" == typeof e.exports
                        ? (e.exports = t.document
                              ? n(t, !0)
                              : function (e) {
                                    if (!e.document) throw new Error("jQuery requires a window with a document");
                                    return n(e);
                                })
                        : n(t);
                })("undefined" != typeof window ? window : this, function (i, r) {
                    "use strict";
                    var o = [],
                        a = Object.getPrototypeOf,
                        s = o.slice,
                        l = o.flat
                            ? function (e) {
                                  return o.flat.call(e);
                              }
                            : function (e) {
                                  return o.concat.apply([], e);
                              },
                        u = o.push,
                        c = o.indexOf,
                        f = {},
                        d = f.toString,
                        h = f.hasOwnProperty,
                        p = h.toString,
                        g = p.call(Object),
                        m = {},
                        v = function (e) {
                            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
                        },
                        y = function (e) {
                            return null != e && e === e.window;
                        },
                        b = i.document,
                        _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
                    function w(e, t, n) {
                        var i,
                            r,
                            o = (n = n || b).createElement("script");
                        if (((o.text = e), t)) for (i in _) (r = t[i] || (t.getAttribute && t.getAttribute(i))) && o.setAttribute(i, r);
                        n.head.appendChild(o).parentNode.removeChild(o);
                    }
                    function x(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[d.call(e)] || "object" : typeof e;
                    }
                    var E = "3.6.0",
                        T = function (e, t) {
                            return new T.fn.init(e, t);
                        };
                    function C(e) {
                        var t = !!e && "length" in e && e.length,
                            n = x(e);
                        return !v(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
                    }
                    (T.fn = T.prototype = {
                        jquery: E,
                        constructor: T,
                        length: 0,
                        toArray: function () {
                            return s.call(this);
                        },
                        get: function (e) {
                            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
                        },
                        pushStack: function (e) {
                            var t = T.merge(this.constructor(), e);
                            return (t.prevObject = this), t;
                        },
                        each: function (e) {
                            return T.each(this, e);
                        },
                        map: function (e) {
                            return this.pushStack(
                                T.map(this, function (t, n) {
                                    return e.call(t, n, t);
                                })
                            );
                        },
                        slice: function () {
                            return this.pushStack(s.apply(this, arguments));
                        },
                        first: function () {
                            return this.eq(0);
                        },
                        last: function () {
                            return this.eq(-1);
                        },
                        even: function () {
                            return this.pushStack(
                                T.grep(this, function (e, t) {
                                    return (t + 1) % 2;
                                })
                            );
                        },
                        odd: function () {
                            return this.pushStack(
                                T.grep(this, function (e, t) {
                                    return t % 2;
                                })
                            );
                        },
                        eq: function (e) {
                            var t = this.length,
                                n = +e + (e < 0 ? t : 0);
                            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                        },
                        end: function () {
                            return this.prevObject || this.constructor();
                        },
                        push: u,
                        sort: o.sort,
                        splice: o.splice,
                    }),
                        (T.extend = T.fn.extend = function () {
                            var e,
                                t,
                                n,
                                i,
                                r,
                                o,
                                a = arguments[0] || {},
                                s = 1,
                                l = arguments.length,
                                u = !1;
                            for ("boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++), "object" == typeof a || v(a) || (a = {}), s === l && ((a = this), s--); s < l; s++)
                                if (null != (e = arguments[s]))
                                    for (t in e)
                                        (i = e[t]),
                                            "__proto__" !== t &&
                                                a !== i &&
                                                (u && i && (T.isPlainObject(i) || (r = Array.isArray(i)))
                                                    ? ((n = a[t]), (o = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}), (r = !1), (a[t] = T.extend(u, o, i)))
                                                    : void 0 !== i && (a[t] = i));
                            return a;
                        }),
                        T.extend({
                            expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
                            isReady: !0,
                            error: function (e) {
                                throw new Error(e);
                            },
                            noop: function () {},
                            isPlainObject: function (e) {
                                var t, n;
                                return !(!e || "[object Object]" !== d.call(e) || ((t = a(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || p.call(n) !== g)));
                            },
                            isEmptyObject: function (e) {
                                var t;
                                for (t in e) return !1;
                                return !0;
                            },
                            globalEval: function (e, t, n) {
                                w(e, { nonce: t && t.nonce }, n);
                            },
                            each: function (e, t) {
                                var n,
                                    i = 0;
                                if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                                return e;
                            },
                            makeArray: function (e, t) {
                                var n = t || [];
                                return null != e && (C(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
                            },
                            inArray: function (e, t, n) {
                                return null == t ? -1 : c.call(t, e, n);
                            },
                            merge: function (e, t) {
                                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                                return (e.length = r), e;
                            },
                            grep: function (e, t, n) {
                                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
                                return i;
                            },
                            map: function (e, t, n) {
                                var i,
                                    r,
                                    o = 0,
                                    a = [];
                                if (C(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
                                else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
                                return l(a);
                            },
                            guid: 1,
                            support: m,
                        }),
                        "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]),
                        T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                            f["[object " + t + "]"] = t.toLowerCase();
                        });
                    var S = /*!
                     * Sizzle CSS Selector Engine v2.3.6
                     * https://sizzlejs.com/
                     *
                     * Copyright JS Foundation and other contributors
                     * Released under the MIT license
                     * https://js.foundation/
                     *
                     * Date: 2021-02-16
                     */ (function (e) {
                        var t,
                            n,
                            i,
                            r,
                            o,
                            a,
                            s,
                            l,
                            u,
                            c,
                            f,
                            d,
                            h,
                            p,
                            g,
                            m,
                            v,
                            y,
                            b,
                            _ = "sizzle" + 1 * new Date(),
                            w = e.document,
                            x = 0,
                            E = 0,
                            T = le(),
                            C = le(),
                            S = le(),
                            k = le(),
                            N = function (e, t) {
                                return e === t && (f = !0), 0;
                            },
                            D = {}.hasOwnProperty,
                            A = [],
                            j = A.pop,
                            O = A.push,
                            I = A.push,
                            L = A.slice,
                            P = function (e, t) {
                                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                                return -1;
                            },
                            q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            H = "[\\x20\\t\\r\\n\\f]",
                            R = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            F = "\\[[\\x20\\t\\r\\n\\f]*(" + R + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
                            M = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                            $ = new RegExp(H + "+", "g"),
                            B = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                            W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                            U = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                            Q = new RegExp(H + "|>"),
                            z = new RegExp(M),
                            V = new RegExp("^" + R + "$"),
                            X = {
                                ID: new RegExp("^#(" + R + ")"),
                                CLASS: new RegExp("^\\.(" + R + ")"),
                                TAG: new RegExp("^(" + R + "|[*])"),
                                ATTR: new RegExp("^" + F),
                                PSEUDO: new RegExp("^" + M),
                                CHILD: new RegExp(
                                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                                    "i"
                                ),
                                bool: new RegExp("^(?:" + q + ")$", "i"),
                                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i"),
                            },
                            Y = /HTML$/i,
                            K = /^(?:input|select|textarea|button)$/i,
                            J = /^h\d$/i,
                            G = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                            ne = function (e, t) {
                                var n = "0x" + e.slice(1) - 65536;
                                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                            },
                            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            re = function (e, t) {
                                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                            },
                            oe = function () {
                                d();
                            },
                            ae = _e(
                                function (e) {
                                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                                },
                                { dir: "parentNode", next: "legend" }
                            );
                        try {
                            I.apply((A = L.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
                        } catch (e) {
                            I = {
                                apply: A.length
                                    ? function (e, t) {
                                          O.apply(e, L.call(t));
                                      }
                                    : function (e, t) {
                                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                                          e.length = n - 1;
                                      },
                            };
                        }
                        function se(e, t, i, r) {
                            var o,
                                s,
                                u,
                                c,
                                f,
                                p,
                                v,
                                y = t && t.ownerDocument,
                                w = t ? t.nodeType : 9;
                            if (((i = i || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return i;
                            if (!r && (d(t), (t = t || h), g)) {
                                if (11 !== w && (f = Z.exec(e)))
                                    if ((o = f[1])) {
                                        if (9 === w) {
                                            if (!(u = t.getElementById(o))) return i;
                                            if (u.id === o) return i.push(u), i;
                                        } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return i.push(u), i;
                                    } else {
                                        if (f[2]) return I.apply(i, t.getElementsByTagName(e)), i;
                                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(i, t.getElementsByClassName(o)), i;
                                    }
                                if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                    if (((v = e), (y = t), 1 === w && (Q.test(e) || U.test(e)))) {
                                        for (((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) || ((c = t.getAttribute("id")) ? (c = c.replace(ie, re)) : t.setAttribute("id", (c = _))), s = (p = a(e)).length; s--; )
                                            p[s] = (c ? "#" + c : ":scope") + " " + be(p[s]);
                                        v = p.join(",");
                                    }
                                    try {
                                        return I.apply(i, y.querySelectorAll(v)), i;
                                    } catch (t) {
                                        k(e, !0);
                                    } finally {
                                        c === _ && t.removeAttribute("id");
                                    }
                                }
                            }
                            return l(e.replace(B, "$1"), t, i, r);
                        }
                        function le() {
                            var e = [];
                            return function t(n, r) {
                                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = r);
                            };
                        }
                        function ue(e) {
                            return (e[_] = !0), e;
                        }
                        function ce(e) {
                            var t = h.createElement("fieldset");
                            try {
                                return !!e(t);
                            } catch (e) {
                                return !1;
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), (t = null);
                            }
                        }
                        function fe(e, t) {
                            for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
                        }
                        function de(e, t) {
                            var n = t && e,
                                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (i) return i;
                            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                            return e ? 1 : -1;
                        }
                        function he(e) {
                            return function (t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e;
                            };
                        }
                        function pe(e) {
                            return function (t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e;
                            };
                        }
                        function ge(e) {
                            return function (t) {
                                return "form" in t
                                    ? t.parentNode && !1 === t.disabled
                                        ? "label" in t
                                            ? "label" in t.parentNode
                                                ? t.parentNode.disabled === e
                                                : t.disabled === e
                                            : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                                        : t.disabled === e
                                    : "label" in t && t.disabled === e;
                            };
                        }
                        function me(e) {
                            return ue(function (t) {
                                return (
                                    (t = +t),
                                    ue(function (n, i) {
                                        for (var r, o = e([], n.length, t), a = o.length; a--; ) n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
                                    })
                                );
                            });
                        }
                        function ve(e) {
                            return e && void 0 !== e.getElementsByTagName && e;
                        }
                        for (t in ((n = se.support = {}),
                        (o = se.isXML = function (e) {
                            var t = e && e.namespaceURI,
                                n = e && (e.ownerDocument || e).documentElement;
                            return !Y.test(t || (n && n.nodeName) || "HTML");
                        }),
                        (d = se.setDocument = function (e) {
                            var t,
                                r,
                                a = e ? e.ownerDocument || e : w;
                            return a != h && 9 === a.nodeType && a.documentElement
                                ? ((p = (h = a).documentElement),
                                  (g = !o(h)),
                                  w != h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)),
                                  (n.scope = ce(function (e) {
                                      return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                                  })),
                                  (n.attributes = ce(function (e) {
                                      return (e.className = "i"), !e.getAttribute("className");
                                  })),
                                  (n.getElementsByTagName = ce(function (e) {
                                      return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
                                  })),
                                  (n.getElementsByClassName = G.test(h.getElementsByClassName)),
                                  (n.getById = ce(function (e) {
                                      return (p.appendChild(e).id = _), !h.getElementsByName || !h.getElementsByName(_).length;
                                  })),
                                  n.getById
                                      ? ((i.filter.ID = function (e) {
                                            var t = e.replace(te, ne);
                                            return function (e) {
                                                return e.getAttribute("id") === t;
                                            };
                                        }),
                                        (i.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && g) {
                                                var n = t.getElementById(e);
                                                return n ? [n] : [];
                                            }
                                        }))
                                      : ((i.filter.ID = function (e) {
                                            var t = e.replace(te, ne);
                                            return function (e) {
                                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                                return n && n.value === t;
                                            };
                                        }),
                                        (i.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && g) {
                                                var n,
                                                    i,
                                                    r,
                                                    o = t.getElementById(e);
                                                if (o) {
                                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                    for (r = t.getElementsByName(e), i = 0; (o = r[i++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                }
                                                return [];
                                            }
                                        })),
                                  (i.find.TAG = n.getElementsByTagName
                                      ? function (e, t) {
                                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                        }
                                      : function (e, t) {
                                            var n,
                                                i = [],
                                                r = 0,
                                                o = t.getElementsByTagName(e);
                                            if ("*" === e) {
                                                for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                                                return i;
                                            }
                                            return o;
                                        }),
                                  (i.find.CLASS =
                                      n.getElementsByClassName &&
                                      function (e, t) {
                                          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                                      }),
                                  (v = []),
                                  (m = []),
                                  (n.qsa = G.test(h.querySelectorAll)) &&
                                      (ce(function (e) {
                                          var t;
                                          (p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                              e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                              e.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + q + ")"),
                                              e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="),
                                              (t = h.createElement("input")).setAttribute("name", ""),
                                              e.appendChild(t),
                                              e.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                              e.querySelectorAll(":checked").length || m.push(":checked"),
                                              e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]"),
                                              e.querySelectorAll("\\\f"),
                                              m.push("[\\r\\n\\f]");
                                      }),
                                      ce(function (e) {
                                          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                          var t = h.createElement("input");
                                          t.setAttribute("type", "hidden"),
                                              e.appendChild(t).setAttribute("name", "D"),
                                              e.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                                              2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                              (p.appendChild(e).disabled = !0),
                                              2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                              e.querySelectorAll("*,:x"),
                                              m.push(",.*:");
                                      })),
                                  (n.matchesSelector = G.test((y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector))) &&
                                      ce(function (e) {
                                          (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", M);
                                      }),
                                  (m = m.length && new RegExp(m.join("|"))),
                                  (v = v.length && new RegExp(v.join("|"))),
                                  (t = G.test(p.compareDocumentPosition)),
                                  (b =
                                      t || G.test(p.contains)
                                          ? function (e, t) {
                                                var n = 9 === e.nodeType ? e.documentElement : e,
                                                    i = t && t.parentNode;
                                                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                                            }
                                          : function (e, t) {
                                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                                return !1;
                                            }),
                                  (N = t
                                      ? function (e, t) {
                                            if (e === t) return (f = !0), 0;
                                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                            return (
                                                i ||
                                                (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i)
                                                    ? e == h || (e.ownerDocument == w && b(w, e))
                                                        ? -1
                                                        : t == h || (t.ownerDocument == w && b(w, t))
                                                        ? 1
                                                        : c
                                                        ? P(c, e) - P(c, t)
                                                        : 0
                                                    : 4 & i
                                                    ? -1
                                                    : 1)
                                            );
                                        }
                                      : function (e, t) {
                                            if (e === t) return (f = !0), 0;
                                            var n,
                                                i = 0,
                                                r = e.parentNode,
                                                o = t.parentNode,
                                                a = [e],
                                                s = [t];
                                            if (!r || !o) return e == h ? -1 : t == h ? 1 : r ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                                            if (r === o) return de(e, t);
                                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                                            for (n = t; (n = n.parentNode); ) s.unshift(n);
                                            for (; a[i] === s[i]; ) i++;
                                            return i ? de(a[i], s[i]) : a[i] == w ? -1 : s[i] == w ? 1 : 0;
                                        }),
                                  h)
                                : h;
                        }),
                        (se.matches = function (e, t) {
                            return se(e, null, null, t);
                        }),
                        (se.matchesSelector = function (e, t) {
                            if ((d(e), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))))
                                try {
                                    var i = y.call(e, t);
                                    if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                                } catch (e) {
                                    k(t, !0);
                                }
                            return se(t, h, null, [e]).length > 0;
                        }),
                        (se.contains = function (e, t) {
                            return (e.ownerDocument || e) != h && d(e), b(e, t);
                        }),
                        (se.attr = function (e, t) {
                            (e.ownerDocument || e) != h && d(e);
                            var r = i.attrHandle[t.toLowerCase()],
                                o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                        }),
                        (se.escape = function (e) {
                            return (e + "").replace(ie, re);
                        }),
                        (se.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e);
                        }),
                        (se.uniqueSort = function (e) {
                            var t,
                                i = [],
                                r = 0,
                                o = 0;
                            if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(N), f)) {
                                for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                                for (; r--; ) e.splice(i[r], 1);
                            }
                            return (c = null), e;
                        }),
                        (r = se.getText = function (e) {
                            var t,
                                n = "",
                                i = 0,
                                o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                                } else if (3 === o || 4 === o) return e.nodeValue;
                            } else for (; (t = e[i++]); ) n += r(t);
                            return n;
                        }),
                        ((i = se.selectors = {
                            cacheLength: 50,
                            createPseudo: ue,
                            match: X,
                            attrHandle: {},
                            find: {},
                            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                            preFilter: {
                                ATTR: function (e) {
                                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                                },
                                CHILD: function (e) {
                                    return (
                                        (e[1] = e[1].toLowerCase()),
                                        "nth" === e[1].slice(0, 3)
                                            ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                            : e[3] && se.error(e[0]),
                                        e
                                    );
                                },
                                PSEUDO: function (e) {
                                    var t,
                                        n = !e[6] && e[2];
                                    return X.CHILD.test(e[0])
                                        ? null
                                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                                },
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return "*" === e
                                        ? function () {
                                              return !0;
                                          }
                                        : function (e) {
                                              return e.nodeName && e.nodeName.toLowerCase() === t;
                                          };
                                },
                                CLASS: function (e) {
                                    var t = T[e + " "];
                                    return (
                                        t ||
                                        ((t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + H + "|$)")) &&
                                            T(e, function (e) {
                                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                            }))
                                    );
                                },
                                ATTR: function (e, t, n) {
                                    return function (i) {
                                        var r = se.attr(i, e);
                                        return null == r
                                            ? "!=" === t
                                            : !t ||
                                                  ((r += ""),
                                                  "=" === t
                                                      ? r === n
                                                      : "!=" === t
                                                      ? r !== n
                                                      : "^=" === t
                                                      ? n && 0 === r.indexOf(n)
                                                      : "*=" === t
                                                      ? n && r.indexOf(n) > -1
                                                      : "$=" === t
                                                      ? n && r.slice(-n.length) === n
                                                      : "~=" === t
                                                      ? (" " + r.replace($, " ") + " ").indexOf(n) > -1
                                                      : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
                                    };
                                },
                                CHILD: function (e, t, n, i, r) {
                                    var o = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === i && 0 === r
                                        ? function (e) {
                                              return !!e.parentNode;
                                          }
                                        : function (t, n, l) {
                                              var u,
                                                  c,
                                                  f,
                                                  d,
                                                  h,
                                                  p,
                                                  g = o !== a ? "nextSibling" : "previousSibling",
                                                  m = t.parentNode,
                                                  v = s && t.nodeName.toLowerCase(),
                                                  y = !l && !s,
                                                  b = !1;
                                              if (m) {
                                                  if (o) {
                                                      for (; g; ) {
                                                          for (d = t; (d = d[g]); ) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                          p = g = "only" === e && !p && "nextSibling";
                                                      }
                                                      return !0;
                                                  }
                                                  if (((p = [a ? m.firstChild : m.lastChild]), a && y)) {
                                                      for (
                                                          b = (h = (u = (c = (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2], d = h && m.childNodes[h];
                                                          (d = (++h && d && d[g]) || (b = h = 0) || p.pop());

                                                      )
                                                          if (1 === d.nodeType && ++b && d === t) {
                                                              c[e] = [x, h, b];
                                                              break;
                                                          }
                                                  } else if ((y && (b = h = (u = (c = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && u[1]), !1 === b))
                                                      for (
                                                          ;
                                                          (d = (++h && d && d[g]) || (b = h = 0) || p.pop()) &&
                                                          ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [x, b]), d !== t));

                                                      );
                                                  return (b -= r) === i || (b % i == 0 && b / i >= 0);
                                              }
                                          };
                                },
                                PSEUDO: function (e, t) {
                                    var n,
                                        r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                    return r[_]
                                        ? r(t)
                                        : r.length > 1
                                        ? ((n = [e, e, "", t]),
                                          i.setFilters.hasOwnProperty(e.toLowerCase())
                                              ? ue(function (e, n) {
                                                    for (var i, o = r(e, t), a = o.length; a--; ) e[(i = P(e, o[a]))] = !(n[i] = o[a]);
                                                })
                                              : function (e) {
                                                    return r(e, 0, n);
                                                })
                                        : r;
                                },
                            },
                            pseudos: {
                                not: ue(function (e) {
                                    var t = [],
                                        n = [],
                                        i = s(e.replace(B, "$1"));
                                    return i[_]
                                        ? ue(function (e, t, n, r) {
                                              for (var o, a = i(e, null, r, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                                          })
                                        : function (e, r, o) {
                                              return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                                          };
                                }),
                                has: ue(function (e) {
                                    return function (t) {
                                        return se(e, t).length > 0;
                                    };
                                }),
                                contains: ue(function (e) {
                                    return (
                                        (e = e.replace(te, ne)),
                                        function (t) {
                                            return (t.textContent || r(t)).indexOf(e) > -1;
                                        }
                                    );
                                }),
                                lang: ue(function (e) {
                                    return (
                                        V.test(e || "") || se.error("unsupported lang: " + e),
                                        (e = e.replace(te, ne).toLowerCase()),
                                        function (t) {
                                            var n;
                                            do {
                                                if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1;
                                        }
                                    );
                                }),
                                target: function (t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id;
                                },
                                root: function (e) {
                                    return e === p;
                                },
                                focus: function (e) {
                                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                                },
                                enabled: ge(!1),
                                disabled: ge(!0),
                                checked: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                                },
                                selected: function (e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                                },
                                empty: function (e) {
                                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function (e) {
                                    return !i.pseudos.empty(e);
                                },
                                header: function (e) {
                                    return J.test(e.nodeName);
                                },
                                input: function (e) {
                                    return K.test(e.nodeName);
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && "button" === e.type) || "button" === t;
                                },
                                text: function (e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                                },
                                first: me(function () {
                                    return [0];
                                }),
                                last: me(function (e, t) {
                                    return [t - 1];
                                }),
                                eq: me(function (e, t, n) {
                                    return [n < 0 ? n + t : n];
                                }),
                                even: me(function (e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                odd: me(function (e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                lt: me(function (e, t, n) {
                                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                                    return e;
                                }),
                                gt: me(function (e, t, n) {
                                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                                    return e;
                                }),
                            },
                        }).pseudos.nth = i.pseudos.eq),
                        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                            i.pseudos[t] = he(t);
                        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
                        function ye() {}
                        function be(e) {
                            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                            return i;
                        }
                        function _e(e, t, n) {
                            var i = t.dir,
                                r = t.next,
                                o = r || i,
                                a = n && "parentNode" === o,
                                s = E++;
                            return t.first
                                ? function (t, n, r) {
                                      for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, r);
                                      return !1;
                                  }
                                : function (t, n, l) {
                                      var u,
                                          c,
                                          f,
                                          d = [x, s];
                                      if (l) {
                                          for (; (t = t[i]); ) if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                                      } else
                                          for (; (t = t[i]); )
                                              if (1 === t.nodeType || a)
                                                  if (((c = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[i] || t;
                                                  else {
                                                      if ((u = c[o]) && u[0] === x && u[1] === s) return (d[2] = u[2]);
                                                      if (((c[o] = d), (d[2] = e(t, n, l)))) return !0;
                                                  }
                                      return !1;
                                  };
                        }
                        function we(e) {
                            return e.length > 1
                                ? function (t, n, i) {
                                      for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                                      return !0;
                                  }
                                : e[0];
                        }
                        function xe(e, t, n, i, r) {
                            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), u && t.push(s)));
                            return a;
                        }
                        function Ee(e, t, n, i, r, o) {
                            return (
                                i && !i[_] && (i = Ee(i)),
                                r && !r[_] && (r = Ee(r, o)),
                                ue(function (o, a, s, l) {
                                    var u,
                                        c,
                                        f,
                                        d = [],
                                        h = [],
                                        p = a.length,
                                        g =
                                            o ||
                                            (function (e, t, n) {
                                                for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                                                return n;
                                            })(t || "*", s.nodeType ? [s] : s, []),
                                        m = !e || (!o && t) ? g : xe(g, d, e, s, l),
                                        v = n ? (r || (o ? e : p || i) ? [] : a) : m;
                                    if ((n && n(m, v, s, l), i)) for (u = xe(v, h), i(u, [], s, l), c = u.length; c--; ) (f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
                                    if (o) {
                                        if (r || e) {
                                            if (r) {
                                                for (u = [], c = v.length; c--; ) (f = v[c]) && u.push((m[c] = f));
                                                r(null, (v = []), u, l);
                                            }
                                            for (c = v.length; c--; ) (f = v[c]) && (u = r ? P(o, f) : d[c]) > -1 && (o[u] = !(a[u] = f));
                                        }
                                    } else (v = xe(v === a ? v.splice(p, v.length) : v)), r ? r(null, a, v, l) : I.apply(a, v);
                                })
                            );
                        }
                        function Te(e) {
                            for (
                                var t,
                                    n,
                                    r,
                                    o = e.length,
                                    a = i.relative[e[0].type],
                                    s = a || i.relative[" "],
                                    l = a ? 1 : 0,
                                    c = _e(
                                        function (e) {
                                            return e === t;
                                        },
                                        s,
                                        !0
                                    ),
                                    f = _e(
                                        function (e) {
                                            return P(t, e) > -1;
                                        },
                                        s,
                                        !0
                                    ),
                                    d = [
                                        function (e, n, i) {
                                            var r = (!a && (i || n !== u)) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
                                            return (t = null), r;
                                        },
                                    ];
                                l < o;
                                l++
                            )
                                if ((n = i.relative[e[l].type])) d = [_e(we(d), n)];
                                else {
                                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                                        return Ee(
                                            l > 1 && we(d),
                                            l > 1 && be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(B, "$1"),
                                            n,
                                            l < r && Te(e.slice(l, r)),
                                            r < o && Te((e = e.slice(r))),
                                            r < o && be(e)
                                        );
                                    }
                                    d.push(n);
                                }
                            return we(d);
                        }
                        return (
                            (ye.prototype = i.filters = i.pseudos),
                            (i.setFilters = new ye()),
                            (a = se.tokenize = function (e, t) {
                                var n,
                                    r,
                                    o,
                                    a,
                                    s,
                                    l,
                                    u,
                                    c = C[e + " "];
                                if (c) return t ? 0 : c.slice(0);
                                for (s = e, l = [], u = i.preFilter; s; ) {
                                    for (a in ((n && !(r = W.exec(s))) || (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
                                    (n = !1),
                                    (r = U.exec(s)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(B, " ") }), (s = s.slice(n.length))),
                                    i.filter))
                                        !(r = X[a].exec(s)) || (u[a] && !(r = u[a](r))) || ((n = r.shift()), o.push({ value: n, type: a, matches: r }), (s = s.slice(n.length)));
                                    if (!n) break;
                                }
                                return t ? s.length : s ? se.error(e) : C(e, l).slice(0);
                            }),
                            (s = se.compile = function (e, t) {
                                var n,
                                    r = [],
                                    o = [],
                                    s = S[e + " "];
                                if (!s) {
                                    for (t || (t = a(e)), n = t.length; n--; ) (s = Te(t[n]))[_] ? r.push(s) : o.push(s);
                                    (s = S(
                                        e,
                                        (function (e, t) {
                                            var n = t.length > 0,
                                                r = e.length > 0,
                                                o = function (o, a, s, l, c) {
                                                    var f,
                                                        p,
                                                        m,
                                                        v = 0,
                                                        y = "0",
                                                        b = o && [],
                                                        _ = [],
                                                        w = u,
                                                        E = o || (r && i.find.TAG("*", c)),
                                                        T = (x += null == w ? 1 : Math.random() || 0.1),
                                                        C = E.length;
                                                    for (c && (u = a == h || a || c); y !== C && null != (f = E[y]); y++) {
                                                        if (r && f) {
                                                            for (p = 0, a || f.ownerDocument == h || (d(f), (s = !g)); (m = e[p++]); )
                                                                if (m(f, a || h, s)) {
                                                                    l.push(f);
                                                                    break;
                                                                }
                                                            c && (x = T);
                                                        }
                                                        n && ((f = !m && f) && v--, o && b.push(f));
                                                    }
                                                    if (((v += y), n && y !== v)) {
                                                        for (p = 0; (m = t[p++]); ) m(b, _, a, s);
                                                        if (o) {
                                                            if (v > 0) for (; y--; ) b[y] || _[y] || (_[y] = j.call(l));
                                                            _ = xe(_);
                                                        }
                                                        I.apply(l, _), c && !o && _.length > 0 && v + t.length > 1 && se.uniqueSort(l);
                                                    }
                                                    return c && ((x = T), (u = w)), b;
                                                };
                                            return n ? ue(o) : o;
                                        })(o, r)
                                    )).selector = e;
                                }
                                return s;
                            }),
                            (l = se.select = function (e, t, n, r) {
                                var o,
                                    l,
                                    u,
                                    c,
                                    f,
                                    d = "function" == typeof e && e,
                                    h = !r && a((e = d.selector || e));
                                if (((n = n || []), 1 === h.length)) {
                                    if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                                        if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                                        d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                                    }
                                    for (o = X.needsContext.test(e) ? 0 : l.length; o-- && ((u = l[o]), !i.relative[(c = u.type)]); )
                                        if ((f = i.find[c]) && (r = f(u.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))) {
                                            if ((l.splice(o, 1), !(e = r.length && be(l)))) return I.apply(n, r), n;
                                            break;
                                        }
                                }
                                return (d || s(e, h))(r, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
                            }),
                            (n.sortStable = _.split("").sort(N).join("") === _),
                            (n.detectDuplicates = !!f),
                            d(),
                            (n.sortDetached = ce(function (e) {
                                return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
                            })),
                            ce(function (e) {
                                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                            }) ||
                                fe("type|href|height|width", function (e, t, n) {
                                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                                }),
                            (n.attributes &&
                                ce(function (e) {
                                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                                })) ||
                                fe("value", function (e, t, n) {
                                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                                }),
                            ce(function (e) {
                                return null == e.getAttribute("disabled");
                            }) ||
                                fe(q, function (e, t, n) {
                                    var i;
                                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                                }),
                            se
                        );
                    })(i);
                    (T.find = S), (T.expr = S.selectors), (T.expr[":"] = T.expr.pseudos), (T.uniqueSort = T.unique = S.uniqueSort), (T.text = S.getText), (T.isXMLDoc = S.isXML), (T.contains = S.contains), (T.escapeSelector = S.escape);
                    var k = function (e, t, n) {
                            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                                if (1 === e.nodeType) {
                                    if (r && T(e).is(n)) break;
                                    i.push(e);
                                }
                            return i;
                        },
                        N = function (e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n;
                        },
                        D = T.expr.match.needsContext;
                    function A(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                    }
                    var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                    function O(e, t, n) {
                        return v(t)
                            ? T.grep(e, function (e, i) {
                                  return !!t.call(e, i, e) !== n;
                              })
                            : t.nodeType
                            ? T.grep(e, function (e) {
                                  return (e === t) !== n;
                              })
                            : "string" != typeof t
                            ? T.grep(e, function (e) {
                                  return c.call(t, e) > -1 !== n;
                              })
                            : T.filter(t, e, n);
                    }
                    (T.filter = function (e, t, n) {
                        var i = t[0];
                        return (
                            n && (e = ":not(" + e + ")"),
                            1 === t.length && 1 === i.nodeType
                                ? T.find.matchesSelector(i, e)
                                    ? [i]
                                    : []
                                : T.find.matches(
                                      e,
                                      T.grep(t, function (e) {
                                          return 1 === e.nodeType;
                                      })
                                  )
                        );
                    }),
                        T.fn.extend({
                            find: function (e) {
                                var t,
                                    n,
                                    i = this.length,
                                    r = this;
                                if ("string" != typeof e)
                                    return this.pushStack(
                                        T(e).filter(function () {
                                            for (t = 0; t < i; t++) if (T.contains(r[t], this)) return !0;
                                        })
                                    );
                                for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, r[t], n);
                                return i > 1 ? T.uniqueSort(n) : n;
                            },
                            filter: function (e) {
                                return this.pushStack(O(this, e || [], !1));
                            },
                            not: function (e) {
                                return this.pushStack(O(this, e || [], !0));
                            },
                            is: function (e) {
                                return !!O(this, "string" == typeof e && D.test(e) ? T(e) : e || [], !1).length;
                            },
                        });
                    var I,
                        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    ((T.fn.init = function (e, t, n) {
                        var i, r;
                        if (!e) return this;
                        if (((n = n || I), "string" == typeof e)) {
                            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (i[1]) {
                                if (((t = t instanceof T ? t[0] : t), T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), j.test(i[1]) && T.isPlainObject(t)))
                                    for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                                return this;
                            }
                            return (r = b.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
                        }
                        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : v(e) ? (void 0 !== n.ready ? n.ready(e) : e(T)) : T.makeArray(e, this);
                    }).prototype = T.fn),
                        (I = T(b));
                    var P = /^(?:parents|prev(?:Until|All))/,
                        q = { children: !0, contents: !0, next: !0, prev: !0 };
                    function H(e, t) {
                        for (; (e = e[t]) && 1 !== e.nodeType; );
                        return e;
                    }
                    T.fn.extend({
                        has: function (e) {
                            var t = T(e, this),
                                n = t.length;
                            return this.filter(function () {
                                for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
                            });
                        },
                        closest: function (e, t) {
                            var n,
                                i = 0,
                                r = this.length,
                                o = [],
                                a = "string" != typeof e && T(e);
                            if (!D.test(e))
                                for (; i < r; i++)
                                    for (n = this[i]; n && n !== t; n = n.parentNode)
                                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                                            o.push(n);
                                            break;
                                        }
                            return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
                        },
                        index: function (e) {
                            return e ? ("string" == typeof e ? c.call(T(e), this[0]) : c.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        },
                        add: function (e, t) {
                            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
                        },
                        addBack: function (e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                        },
                    }),
                        T.each(
                            {
                                parent: function (e) {
                                    var t = e.parentNode;
                                    return t && 11 !== t.nodeType ? t : null;
                                },
                                parents: function (e) {
                                    return k(e, "parentNode");
                                },
                                parentsUntil: function (e, t, n) {
                                    return k(e, "parentNode", n);
                                },
                                next: function (e) {
                                    return H(e, "nextSibling");
                                },
                                prev: function (e) {
                                    return H(e, "previousSibling");
                                },
                                nextAll: function (e) {
                                    return k(e, "nextSibling");
                                },
                                prevAll: function (e) {
                                    return k(e, "previousSibling");
                                },
                                nextUntil: function (e, t, n) {
                                    return k(e, "nextSibling", n);
                                },
                                prevUntil: function (e, t, n) {
                                    return k(e, "previousSibling", n);
                                },
                                siblings: function (e) {
                                    return N((e.parentNode || {}).firstChild, e);
                                },
                                children: function (e) {
                                    return N(e.firstChild);
                                },
                                contents: function (e) {
                                    return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), T.merge([], e.childNodes));
                                },
                            },
                            function (e, t) {
                                T.fn[e] = function (n, i) {
                                    var r = T.map(this, t, n);
                                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = T.filter(i, r)), this.length > 1 && (q[e] || T.uniqueSort(r), P.test(e) && r.reverse()), this.pushStack(r);
                                };
                            }
                        );
                    var R = /[^\x20\t\r\n\f]+/g;
                    function F(e) {
                        return e;
                    }
                    function M(e) {
                        throw e;
                    }
                    function $(e, t, n, i) {
                        var r;
                        try {
                            e && v((r = e.promise)) ? r.call(e).done(t).fail(n) : e && v((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
                        } catch (e) {
                            n.apply(void 0, [e]);
                        }
                    }
                    (T.Callbacks = function (e) {
                        e =
                            "string" == typeof e
                                ? (function (e) {
                                      var t = {};
                                      return (
                                          T.each(e.match(R) || [], function (e, n) {
                                              t[n] = !0;
                                          }),
                                          t
                                      );
                                  })(e)
                                : T.extend({}, e);
                        var t,
                            n,
                            i,
                            r,
                            o = [],
                            a = [],
                            s = -1,
                            l = function () {
                                for (r = r || e.once, i = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length; ) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
                                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
                            },
                            u = {
                                add: function () {
                                    return (
                                        o &&
                                            (n && !t && ((s = o.length - 1), a.push(n)),
                                            (function t(n) {
                                                T.each(n, function (n, i) {
                                                    v(i) ? (e.unique && u.has(i)) || o.push(i) : i && i.length && "string" !== x(i) && t(i);
                                                });
                                            })(arguments),
                                            n && !t && l()),
                                        this
                                    );
                                },
                                remove: function () {
                                    return (
                                        T.each(arguments, function (e, t) {
                                            for (var n; (n = T.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= s && s--;
                                        }),
                                        this
                                    );
                                },
                                has: function (e) {
                                    return e ? T.inArray(e, o) > -1 : o.length > 0;
                                },
                                empty: function () {
                                    return o && (o = []), this;
                                },
                                disable: function () {
                                    return (r = a = []), (o = n = ""), this;
                                },
                                disabled: function () {
                                    return !o;
                                },
                                lock: function () {
                                    return (r = a = []), n || t || (o = n = ""), this;
                                },
                                locked: function () {
                                    return !!r;
                                },
                                fireWith: function (e, n) {
                                    return r || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || l()), this;
                                },
                                fire: function () {
                                    return u.fireWith(this, arguments), this;
                                },
                                fired: function () {
                                    return !!i;
                                },
                            };
                        return u;
                    }),
                        T.extend({
                            Deferred: function (e) {
                                var t = [
                                        ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                                        ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                                        ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"],
                                    ],
                                    n = "pending",
                                    r = {
                                        state: function () {
                                            return n;
                                        },
                                        always: function () {
                                            return o.done(arguments).fail(arguments), this;
                                        },
                                        catch: function (e) {
                                            return r.then(null, e);
                                        },
                                        pipe: function () {
                                            var e = arguments;
                                            return T.Deferred(function (n) {
                                                T.each(t, function (t, i) {
                                                    var r = v(e[i[4]]) && e[i[4]];
                                                    o[i[1]](function () {
                                                        var e = r && r.apply(this, arguments);
                                                        e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments);
                                                    });
                                                }),
                                                    (e = null);
                                            }).promise();
                                        },
                                        then: function (e, n, r) {
                                            var o = 0;
                                            function a(e, t, n, r) {
                                                return function () {
                                                    var s = this,
                                                        l = arguments,
                                                        u = function () {
                                                            var i, u;
                                                            if (!(e < o)) {
                                                                if ((i = n.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                                (u = i && ("object" == typeof i || "function" == typeof i) && i.then),
                                                                    v(u)
                                                                        ? r
                                                                            ? u.call(i, a(o, t, F, r), a(o, t, M, r))
                                                                            : (o++, u.call(i, a(o, t, F, r), a(o, t, M, r), a(o, t, F, t.notifyWith)))
                                                                        : (n !== F && ((s = void 0), (l = [i])), (r || t.resolveWith)(s, l));
                                                            }
                                                        },
                                                        c = r
                                                            ? u
                                                            : function () {
                                                                  try {
                                                                      u();
                                                                  } catch (i) {
                                                                      T.Deferred.exceptionHook && T.Deferred.exceptionHook(i, c.stackTrace), e + 1 >= o && (n !== M && ((s = void 0), (l = [i])), t.rejectWith(s, l));
                                                                  }
                                                              };
                                                    e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), i.setTimeout(c));
                                                };
                                            }
                                            return T.Deferred(function (i) {
                                                t[0][3].add(a(0, i, v(r) ? r : F, i.notifyWith)), t[1][3].add(a(0, i, v(e) ? e : F)), t[2][3].add(a(0, i, v(n) ? n : M));
                                            }).promise();
                                        },
                                        promise: function (e) {
                                            return null != e ? T.extend(e, r) : r;
                                        },
                                    },
                                    o = {};
                                return (
                                    T.each(t, function (e, i) {
                                        var a = i[2],
                                            s = i[5];
                                        (r[i[1]] = a.add),
                                            s &&
                                                a.add(
                                                    function () {
                                                        n = s;
                                                    },
                                                    t[3 - e][2].disable,
                                                    t[3 - e][3].disable,
                                                    t[0][2].lock,
                                                    t[0][3].lock
                                                ),
                                            a.add(i[3].fire),
                                            (o[i[0]] = function () {
                                                return o[i[0] + "With"](this === o ? void 0 : this, arguments), this;
                                            }),
                                            (o[i[0] + "With"] = a.fireWith);
                                    }),
                                    r.promise(o),
                                    e && e.call(o, o),
                                    o
                                );
                            },
                            when: function (e) {
                                var t = arguments.length,
                                    n = t,
                                    i = Array(n),
                                    r = s.call(arguments),
                                    o = T.Deferred(),
                                    a = function (e) {
                                        return function (n) {
                                            (i[e] = this), (r[e] = arguments.length > 1 ? s.call(arguments) : n), --t || o.resolveWith(i, r);
                                        };
                                    };
                                if (t <= 1 && ($(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || v(r[n] && r[n].then))) return o.then();
                                for (; n--; ) $(r[n], a(n), o.reject);
                                return o.promise();
                            },
                        });
                    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    (T.Deferred.exceptionHook = function (e, t) {
                        i.console && i.console.warn && e && B.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
                    }),
                        (T.readyException = function (e) {
                            i.setTimeout(function () {
                                throw e;
                            });
                        });
                    var W = T.Deferred();
                    function U() {
                        b.removeEventListener("DOMContentLoaded", U), i.removeEventListener("load", U), T.ready();
                    }
                    (T.fn.ready = function (e) {
                        return (
                            W.then(e).catch(function (e) {
                                T.readyException(e);
                            }),
                            this
                        );
                    }),
                        T.extend({
                            isReady: !1,
                            readyWait: 1,
                            ready: function (e) {
                                (!0 === e ? --T.readyWait : T.isReady) || ((T.isReady = !0), (!0 !== e && --T.readyWait > 0) || W.resolveWith(b, [T]));
                            },
                        }),
                        (T.ready.then = W.then),
                        "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll) ? i.setTimeout(T.ready) : (b.addEventListener("DOMContentLoaded", U), i.addEventListener("load", U));
                    var Q = function (e, t, n, i, r, o, a) {
                            var s = 0,
                                l = e.length,
                                u = null == n;
                            if ("object" === x(n)) for (s in ((r = !0), n)) Q(e, t, s, n[s], !0, o, a);
                            else if (
                                void 0 !== i &&
                                ((r = !0),
                                v(i) || (a = !0),
                                u &&
                                    (a
                                        ? (t.call(e, i), (t = null))
                                        : ((u = t),
                                          (t = function (e, t, n) {
                                              return u.call(T(e), n);
                                          }))),
                                t)
                            )
                                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
                        },
                        z = /^-ms-/,
                        V = /-([a-z])/g;
                    function X(e, t) {
                        return t.toUpperCase();
                    }
                    function Y(e) {
                        return e.replace(z, "ms-").replace(V, X);
                    }
                    var K = function (e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                    };
                    function J() {
                        this.expando = T.expando + J.uid++;
                    }
                    (J.uid = 1),
                        (J.prototype = {
                            cache: function (e) {
                                var t = e[this.expando];
                                return t || ((t = {}), K(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                            },
                            set: function (e, t, n) {
                                var i,
                                    r = this.cache(e);
                                if ("string" == typeof t) r[Y(t)] = n;
                                else for (i in t) r[Y(i)] = t[i];
                                return r;
                            },
                            get: function (e, t) {
                                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
                            },
                            access: function (e, t, n) {
                                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                            },
                            remove: function (e, t) {
                                var n,
                                    i = e[this.expando];
                                if (void 0 !== i) {
                                    if (void 0 !== t) {
                                        n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(R) || []).length;
                                        for (; n--; ) delete i[t[n]];
                                    }
                                    (void 0 === t || T.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                                }
                            },
                            hasData: function (e) {
                                var t = e[this.expando];
                                return void 0 !== t && !T.isEmptyObject(t);
                            },
                        });
                    var G = new J(),
                        Z = new J(),
                        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        te = /[A-Z]/g;
                    function ne(e, t, n) {
                        var i;
                        if (void 0 === n && 1 === e.nodeType)
                            if (((i = "data-" + t.replace(te, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                                try {
                                    n = (function (e) {
                                        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e));
                                    })(n);
                                } catch (e) {}
                                Z.set(e, t, n);
                            } else n = void 0;
                        return n;
                    }
                    T.extend({
                        hasData: function (e) {
                            return Z.hasData(e) || G.hasData(e);
                        },
                        data: function (e, t, n) {
                            return Z.access(e, t, n);
                        },
                        removeData: function (e, t) {
                            Z.remove(e, t);
                        },
                        _data: function (e, t, n) {
                            return G.access(e, t, n);
                        },
                        _removeData: function (e, t) {
                            G.remove(e, t);
                        },
                    }),
                        T.fn.extend({
                            data: function (e, t) {
                                var n,
                                    i,
                                    r,
                                    o = this[0],
                                    a = o && o.attributes;
                                if (void 0 === e) {
                                    if (this.length && ((r = Z.get(o)), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                                        for (n = a.length; n--; ) a[n] && 0 === (i = a[n].name).indexOf("data-") && ((i = Y(i.slice(5))), ne(o, i, r[i]));
                                        G.set(o, "hasDataAttrs", !0);
                                    }
                                    return r;
                                }
                                return "object" == typeof e
                                    ? this.each(function () {
                                          Z.set(this, e);
                                      })
                                    : Q(
                                          this,
                                          function (t) {
                                              var n;
                                              if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                                              this.each(function () {
                                                  Z.set(this, e, t);
                                              });
                                          },
                                          null,
                                          t,
                                          arguments.length > 1,
                                          null,
                                          !0
                                      );
                            },
                            removeData: function (e) {
                                return this.each(function () {
                                    Z.remove(this, e);
                                });
                            },
                        }),
                        T.extend({
                            queue: function (e, t, n) {
                                var i;
                                if (e) return (t = (t || "fx") + "queue"), (i = G.get(e, t)), n && (!i || Array.isArray(n) ? (i = G.access(e, t, T.makeArray(n))) : i.push(n)), i || [];
                            },
                            dequeue: function (e, t) {
                                t = t || "fx";
                                var n = T.queue(e, t),
                                    i = n.length,
                                    r = n.shift(),
                                    o = T._queueHooks(e, t);
                                "inprogress" === r && ((r = n.shift()), i--),
                                    r &&
                                        ("fx" === t && n.unshift("inprogress"),
                                        delete o.stop,
                                        r.call(
                                            e,
                                            function () {
                                                T.dequeue(e, t);
                                            },
                                            o
                                        )),
                                    !i && o && o.empty.fire();
                            },
                            _queueHooks: function (e, t) {
                                var n = t + "queueHooks";
                                return (
                                    G.get(e, n) ||
                                    G.access(e, n, {
                                        empty: T.Callbacks("once memory").add(function () {
                                            G.remove(e, [t + "queue", n]);
                                        }),
                                    })
                                );
                            },
                        }),
                        T.fn.extend({
                            queue: function (e, t) {
                                var n = 2;
                                return (
                                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                                    arguments.length < n
                                        ? T.queue(this[0], e)
                                        : void 0 === t
                                        ? this
                                        : this.each(function () {
                                              var n = T.queue(this, e, t);
                                              T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
                                          })
                                );
                            },
                            dequeue: function (e) {
                                return this.each(function () {
                                    T.dequeue(this, e);
                                });
                            },
                            clearQueue: function (e) {
                                return this.queue(e || "fx", []);
                            },
                            promise: function (e, t) {
                                var n,
                                    i = 1,
                                    r = T.Deferred(),
                                    o = this,
                                    a = this.length,
                                    s = function () {
                                        --i || r.resolveWith(o, [o]);
                                    };
                                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = G.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                                return s(), r.promise(t);
                            },
                        });
                    var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
                        oe = ["Top", "Right", "Bottom", "Left"],
                        ae = b.documentElement,
                        se = function (e) {
                            return T.contains(e.ownerDocument, e);
                        },
                        le = { composed: !0 };
                    ae.getRootNode &&
                        (se = function (e) {
                            return T.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
                        });
                    var ue = function (e, t) {
                        return "none" === (e = t || e).style.display || ("" === e.style.display && se(e) && "none" === T.css(e, "display"));
                    };
                    function ce(e, t, n, i) {
                        var r,
                            o,
                            a = 20,
                            s = i
                                ? function () {
                                      return i.cur();
                                  }
                                : function () {
                                      return T.css(e, t, "");
                                  },
                            l = s(),
                            u = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
                            c = e.nodeType && (T.cssNumber[t] || ("px" !== u && +l)) && re.exec(T.css(e, t));
                        if (c && c[3] !== u) {
                            for (l /= 2, u = u || c[3], c = +l || 1; a--; ) T.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0), (c /= o);
                            (c *= 2), T.style(e, t, c + u), (n = n || []);
                        }
                        return n && ((c = +c || +l || 0), (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = u), (i.start = c), (i.end = r))), r;
                    }
                    var fe = {};
                    function de(e) {
                        var t,
                            n = e.ownerDocument,
                            i = e.nodeName,
                            r = fe[i];
                        return r || ((t = n.body.appendChild(n.createElement(i))), (r = T.css(t, "display")), t.parentNode.removeChild(t), "none" === r && (r = "block"), (fe[i] = r), r);
                    }
                    function he(e, t) {
                        for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
                            (i = e[o]).style &&
                                ((n = i.style.display),
                                t ? ("none" === n && ((r[o] = G.get(i, "display") || null), r[o] || (i.style.display = "")), "" === i.style.display && ue(i) && (r[o] = de(i))) : "none" !== n && ((r[o] = "none"), G.set(i, "display", n)));
                        for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
                        return e;
                    }
                    T.fn.extend({
                        show: function () {
                            return he(this, !0);
                        },
                        hide: function () {
                            return he(this);
                        },
                        toggle: function (e) {
                            return "boolean" == typeof e
                                ? e
                                    ? this.show()
                                    : this.hide()
                                : this.each(function () {
                                      ue(this) ? T(this).show() : T(this).hide();
                                  });
                        },
                    });
                    var pe,
                        ge,
                        me = /^(?:checkbox|radio)$/i,
                        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        ye = /^$|^module$|\/(?:java|ecma)script/i;
                    (pe = b.createDocumentFragment().appendChild(b.createElement("div"))),
                        (ge = b.createElement("input")).setAttribute("type", "radio"),
                        ge.setAttribute("checked", "checked"),
                        ge.setAttribute("name", "t"),
                        pe.appendChild(ge),
                        (m.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
                        (pe.innerHTML = "<textarea>x</textarea>"),
                        (m.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
                        (pe.innerHTML = "<option></option>"),
                        (m.option = !!pe.lastChild);
                    var be = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""],
                    };
                    function _e(e, t) {
                        var n;
                        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && A(e, t)) ? T.merge([e], n) : n;
                    }
                    function we(e, t) {
                        for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
                    }
                    (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead), (be.th = be.td), m.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var xe = /<|&#?\w+;/;
                    function Ee(e, t, n, i, r) {
                        for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
                            if ((o = e[h]) || 0 === o)
                                if ("object" === x(o)) T.merge(d, o.nodeType ? [o] : o);
                                else if (xe.test(o)) {
                                    for (a = a || f.appendChild(t.createElement("div")), s = (ve.exec(o) || ["", ""])[1].toLowerCase(), l = be[s] || be._default, a.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], c = l[0]; c--; )
                                        a = a.lastChild;
                                    T.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
                                } else d.push(t.createTextNode(o));
                        for (f.textContent = "", h = 0; (o = d[h++]); )
                            if (i && T.inArray(o, i) > -1) r && r.push(o);
                            else if (((u = se(o)), (a = _e(f.appendChild(o), "script")), u && we(a), n)) for (c = 0; (o = a[c++]); ) ye.test(o.type || "") && n.push(o);
                        return f;
                    }
                    var Te = /^([^.]*)(?:\.(.+)|)/;
                    function Ce() {
                        return !0;
                    }
                    function Se() {
                        return !1;
                    }
                    function ke(e, t) {
                        return (
                            (e ===
                                (function () {
                                    try {
                                        return b.activeElement;
                                    } catch (e) {}
                                })()) ==
                            ("focus" === t)
                        );
                    }
                    function Ne(e, t, n, i, r, o) {
                        var a, s;
                        if ("object" == typeof t) {
                            for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Ne(e, s, n, i, t[s], o);
                            return e;
                        }
                        if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = Se;
                        else if (!r) return e;
                        return (
                            1 === o &&
                                ((a = r),
                                ((r = function (e) {
                                    return T().off(e), a.apply(this, arguments);
                                }).guid = a.guid || (a.guid = T.guid++))),
                            e.each(function () {
                                T.event.add(this, t, r, i, n);
                            })
                        );
                    }
                    function De(e, t, n) {
                        n
                            ? (G.set(e, t, !1),
                              T.event.add(e, t, {
                                  namespace: !1,
                                  handler: function (e) {
                                      var i,
                                          r,
                                          o = G.get(this, t);
                                      if (1 & e.isTrigger && this[t]) {
                                          if (o.length) (T.event.special[t] || {}).delegateType && e.stopPropagation();
                                          else if (((o = s.call(arguments)), G.set(this, t, o), (i = n(this, t)), this[t](), o !== (r = G.get(this, t)) || i ? G.set(this, t, !1) : (r = {}), o !== r))
                                              return e.stopImmediatePropagation(), e.preventDefault(), r && r.value;
                                      } else o.length && (G.set(this, t, { value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                                  },
                              }))
                            : void 0 === G.get(e, t) && T.event.add(e, t, Ce);
                    }
                    (T.event = {
                        global: {},
                        add: function (e, t, n, i, r) {
                            var o,
                                a,
                                s,
                                l,
                                u,
                                c,
                                f,
                                d,
                                h,
                                p,
                                g,
                                m = G.get(e);
                            if (K(e))
                                for (
                                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                                        r && T.find.matchesSelector(ae, r),
                                        n.guid || (n.guid = T.guid++),
                                        (l = m.events) || (l = m.events = Object.create(null)),
                                        (a = m.handle) ||
                                            (a = m.handle = function (t) {
                                                return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
                                            }),
                                        u = (t = (t || "").match(R) || [""]).length;
                                    u--;

                                )
                                    (h = g = (s = Te.exec(t[u]) || [])[1]),
                                        (p = (s[2] || "").split(".").sort()),
                                        h &&
                                            ((f = T.event.special[h] || {}),
                                            (h = (r ? f.delegateType : f.bindType) || h),
                                            (f = T.event.special[h] || {}),
                                            (c = T.extend({ type: h, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && T.expr.match.needsContext.test(r), namespace: p.join(".") }, o)),
                                            (d = l[h]) || (((d = l[h] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, i, p, a)) || (e.addEventListener && e.addEventListener(h, a))),
                                            f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                                            r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                                            (T.event.global[h] = !0));
                        },
                        remove: function (e, t, n, i, r) {
                            var o,
                                a,
                                s,
                                l,
                                u,
                                c,
                                f,
                                d,
                                h,
                                p,
                                g,
                                m = G.hasData(e) && G.get(e);
                            if (m && (l = m.events)) {
                                for (u = (t = (t || "").match(R) || [""]).length; u--; )
                                    if (((h = g = (s = Te.exec(t[u]) || [])[1]), (p = (s[2] || "").split(".").sort()), h)) {
                                        for (f = T.event.special[h] || {}, d = l[(h = (i ? f.delegateType : f.bindType) || h)] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--; )
                                            (c = d[o]),
                                                (!r && g !== c.origType) ||
                                                    (n && n.guid !== c.guid) ||
                                                    (s && !s.test(c.namespace)) ||
                                                    (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                                                    (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                                        a && !d.length && ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) || T.removeEvent(e, h, m.handle), delete l[h]);
                                    } else for (h in l) T.event.remove(e, h + t[u], n, i, !0);
                                T.isEmptyObject(l) && G.remove(e, "handle events");
                            }
                        },
                        dispatch: function (e) {
                            var t,
                                n,
                                i,
                                r,
                                o,
                                a,
                                s = new Array(arguments.length),
                                l = T.event.fix(e),
                                u = (G.get(this, "events") || Object.create(null))[l.type] || [],
                                c = T.event.special[l.type] || {};
                            for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                            if (((l.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, l))) {
                                for (a = T.event.handlers.call(this, l, u), t = 0; (r = a[t++]) && !l.isPropagationStopped(); )
                                    for (l.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                                        (l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace)) ||
                                            ((l.handleObj = o),
                                            (l.data = o.data),
                                            void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                                return c.postDispatch && c.postDispatch.call(this, l), l.result;
                            }
                        },
                        handlers: function (e, t) {
                            var n,
                                i,
                                r,
                                o,
                                a,
                                s = [],
                                l = t.delegateCount,
                                u = e.target;
                            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                                for (; u !== this; u = u.parentNode || this)
                                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[(r = (i = t[n]).selector + " ")] && (a[r] = i.needsContext ? T(r, this).index(u) > -1 : T.find(r, this, null, [u]).length), a[r] && o.push(i);
                                        o.length && s.push({ elem: u, handlers: o });
                                    }
                            return (u = this), l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s;
                        },
                        addProp: function (e, t) {
                            Object.defineProperty(T.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: v(t)
                                    ? function () {
                                          if (this.originalEvent) return t(this.originalEvent);
                                      }
                                    : function () {
                                          if (this.originalEvent) return this.originalEvent[e];
                                      },
                                set: function (t) {
                                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                                },
                            });
                        },
                        fix: function (e) {
                            return e[T.expando] ? e : new T.Event(e);
                        },
                        special: {
                            load: { noBubble: !0 },
                            click: {
                                setup: function (e) {
                                    var t = this || e;
                                    return me.test(t.type) && t.click && A(t, "input") && De(t, "click", Ce), !1;
                                },
                                trigger: function (e) {
                                    var t = this || e;
                                    return me.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
                                },
                                _default: function (e) {
                                    var t = e.target;
                                    return (me.test(t.type) && t.click && A(t, "input") && G.get(t, "click")) || A(t, "a");
                                },
                            },
                            beforeunload: {
                                postDispatch: function (e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                                },
                            },
                        },
                    }),
                        (T.removeEvent = function (e, t, n) {
                            e.removeEventListener && e.removeEventListener(t, n);
                        }),
                        (T.Event = function (e, t) {
                            if (!(this instanceof T.Event)) return new T.Event(e, t);
                            e && e.type
                                ? ((this.originalEvent = e),
                                  (this.type = e.type),
                                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ce : Se),
                                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                                  (this.currentTarget = e.currentTarget),
                                  (this.relatedTarget = e.relatedTarget))
                                : (this.type = e),
                                t && T.extend(this, t),
                                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                                (this[T.expando] = !0);
                        }),
                        (T.Event.prototype = {
                            constructor: T.Event,
                            isDefaultPrevented: Se,
                            isPropagationStopped: Se,
                            isImmediatePropagationStopped: Se,
                            isSimulated: !1,
                            preventDefault: function () {
                                var e = this.originalEvent;
                                (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
                            },
                            stopPropagation: function () {
                                var e = this.originalEvent;
                                (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
                            },
                            stopImmediatePropagation: function () {
                                var e = this.originalEvent;
                                (this.isImmediatePropagationStopped = Ce), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                            },
                        }),
                        T.each(
                            {
                                altKey: !0,
                                bubbles: !0,
                                cancelable: !0,
                                changedTouches: !0,
                                ctrlKey: !0,
                                detail: !0,
                                eventPhase: !0,
                                metaKey: !0,
                                pageX: !0,
                                pageY: !0,
                                shiftKey: !0,
                                view: !0,
                                char: !0,
                                code: !0,
                                charCode: !0,
                                key: !0,
                                keyCode: !0,
                                button: !0,
                                buttons: !0,
                                clientX: !0,
                                clientY: !0,
                                offsetX: !0,
                                offsetY: !0,
                                pointerId: !0,
                                pointerType: !0,
                                screenX: !0,
                                screenY: !0,
                                targetTouches: !0,
                                toElement: !0,
                                touches: !0,
                                which: !0,
                            },
                            T.event.addProp
                        ),
                        T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                            T.event.special[e] = {
                                setup: function () {
                                    return De(this, e, ke), !1;
                                },
                                trigger: function () {
                                    return De(this, e), !0;
                                },
                                _default: function () {
                                    return !0;
                                },
                                delegateType: t,
                            };
                        }),
                        T.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                            T.event.special[e] = {
                                delegateType: t,
                                bindType: t,
                                handle: function (e) {
                                    var n,
                                        i = this,
                                        r = e.relatedTarget,
                                        o = e.handleObj;
                                    return (r && (r === i || T.contains(i, r))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                                },
                            };
                        }),
                        T.fn.extend({
                            on: function (e, t, n, i) {
                                return Ne(this, e, t, n, i);
                            },
                            one: function (e, t, n, i) {
                                return Ne(this, e, t, n, i, 1);
                            },
                            off: function (e, t, n) {
                                var i, r;
                                if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                                if ("object" == typeof e) {
                                    for (r in e) this.off(r, t, e[r]);
                                    return this;
                                }
                                return (
                                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                                    !1 === n && (n = Se),
                                    this.each(function () {
                                        T.event.remove(this, e, n, t);
                                    })
                                );
                            },
                        });
                    var Ae = /<script|<style|<link/i,
                        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                    function Ie(e, t) {
                        return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0]) || e;
                    }
                    function Le(e) {
                        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
                    }
                    function Pe(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
                    }
                    function qe(e, t) {
                        var n, i, r, o, a, s;
                        if (1 === t.nodeType) {
                            if (G.hasData(e) && (s = G.get(e).events)) for (r in (G.remove(t, "handle events"), s)) for (n = 0, i = s[r].length; n < i; n++) T.event.add(t, r, s[r][n]);
                            Z.hasData(e) && ((o = Z.access(e)), (a = T.extend({}, o)), Z.set(t, a));
                        }
                    }
                    function He(e, t) {
                        var n = t.nodeName.toLowerCase();
                        "input" === n && me.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
                    }
                    function Re(e, t, n, i) {
                        t = l(t);
                        var r,
                            o,
                            a,
                            s,
                            u,
                            c,
                            f = 0,
                            d = e.length,
                            h = d - 1,
                            p = t[0],
                            g = v(p);
                        if (g || (d > 1 && "string" == typeof p && !m.checkClone && je.test(p)))
                            return e.each(function (r) {
                                var o = e.eq(r);
                                g && (t[0] = p.call(this, r, o.html())), Re(o, t, n, i);
                            });
                        if (d && ((o = (r = Ee(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === r.childNodes.length && (r = o), o || i)) {
                            for (s = (a = T.map(_e(r, "script"), Le)).length; f < d; f++) (u = r), f !== h && ((u = T.clone(u, !0, !0)), s && T.merge(a, _e(u, "script"))), n.call(e[f], u, f);
                            if (s)
                                for (c = a[a.length - 1].ownerDocument, T.map(a, Pe), f = 0; f < s; f++)
                                    (u = a[f]),
                                        ye.test(u.type || "") &&
                                            !G.access(u, "globalEval") &&
                                            T.contains(c, u) &&
                                            (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && !u.noModule && T._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, c) : w(u.textContent.replace(Oe, ""), u, c));
                        }
                        return e;
                    }
                    function Fe(e, t, n) {
                        for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || T.cleanData(_e(i)), i.parentNode && (n && se(i) && we(_e(i, "script")), i.parentNode.removeChild(i));
                        return e;
                    }
                    T.extend({
                        htmlPrefilter: function (e) {
                            return e;
                        },
                        clone: function (e, t, n) {
                            var i,
                                r,
                                o,
                                a,
                                s = e.cloneNode(!0),
                                l = se(e);
                            if (!(m.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || T.isXMLDoc(e))) for (a = _e(s), i = 0, r = (o = _e(e)).length; i < r; i++) He(o[i], a[i]);
                            if (t)
                                if (n) for (o = o || _e(e), a = a || _e(s), i = 0, r = o.length; i < r; i++) qe(o[i], a[i]);
                                else qe(e, s);
                            return (a = _e(s, "script")).length > 0 && we(a, !l && _e(e, "script")), s;
                        },
                        cleanData: function (e) {
                            for (var t, n, i, r = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
                                if (K(n)) {
                                    if ((t = n[G.expando])) {
                                        if (t.events) for (i in t.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                                        n[G.expando] = void 0;
                                    }
                                    n[Z.expando] && (n[Z.expando] = void 0);
                                }
                        },
                    }),
                        T.fn.extend({
                            detach: function (e) {
                                return Fe(this, e, !0);
                            },
                            remove: function (e) {
                                return Fe(this, e);
                            },
                            text: function (e) {
                                return Q(
                                    this,
                                    function (e) {
                                        return void 0 === e
                                            ? T.text(this)
                                            : this.empty().each(function () {
                                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                              });
                                    },
                                    null,
                                    e,
                                    arguments.length
                                );
                            },
                            append: function () {
                                return Re(this, arguments, function (e) {
                                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ie(this, e).appendChild(e);
                                });
                            },
                            prepend: function () {
                                return Re(this, arguments, function (e) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var t = Ie(this, e);
                                        t.insertBefore(e, t.firstChild);
                                    }
                                });
                            },
                            before: function () {
                                return Re(this, arguments, function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this);
                                });
                            },
                            after: function () {
                                return Re(this, arguments, function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                                });
                            },
                            empty: function () {
                                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(_e(e, !1)), (e.textContent = ""));
                                return this;
                            },
                            clone: function (e, t) {
                                return (
                                    (e = null != e && e),
                                    (t = null == t ? e : t),
                                    this.map(function () {
                                        return T.clone(this, e, t);
                                    })
                                );
                            },
                            html: function (e) {
                                return Q(
                                    this,
                                    function (e) {
                                        var t = this[0] || {},
                                            n = 0,
                                            i = this.length;
                                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                        if ("string" == typeof e && !Ae.test(e) && !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                                            e = T.htmlPrefilter(e);
                                            try {
                                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(_e(t, !1)), (t.innerHTML = e));
                                                t = 0;
                                            } catch (e) {}
                                        }
                                        t && this.empty().append(e);
                                    },
                                    null,
                                    e,
                                    arguments.length
                                );
                            },
                            replaceWith: function () {
                                var e = [];
                                return Re(
                                    this,
                                    arguments,
                                    function (t) {
                                        var n = this.parentNode;
                                        T.inArray(this, e) < 0 && (T.cleanData(_e(this)), n && n.replaceChild(t, this));
                                    },
                                    e
                                );
                            },
                        }),
                        T.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                            T.fn[e] = function (e) {
                                for (var n, i = [], r = T(e), o = r.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), T(r[a])[t](n), u.apply(i, n.get());
                                return this.pushStack(i);
                            };
                        });
                    var Me = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
                        $e = function (e) {
                            var t = e.ownerDocument.defaultView;
                            return (t && t.opener) || (t = i), t.getComputedStyle(e);
                        },
                        Be = function (e, t, n) {
                            var i,
                                r,
                                o = {};
                            for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
                            for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
                            return i;
                        },
                        We = new RegExp(oe.join("|"), "i");
                    function Ue(e, t, n) {
                        var i,
                            r,
                            o,
                            a,
                            s = e.style;
                        return (
                            (n = n || $e(e)) &&
                                ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = T.style(e, t)),
                                !m.pixelBoxStyles() &&
                                    Me.test(a) &&
                                    We.test(t) &&
                                    ((i = s.width), (r = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = i), (s.minWidth = r), (s.maxWidth = o))),
                            void 0 !== a ? a + "" : a
                        );
                    }
                    function Qe(e, t) {
                        return {
                            get: function () {
                                if (!e()) return (this.get = t).apply(this, arguments);
                                delete this.get;
                            },
                        };
                    }
                    !(function () {
                        function e() {
                            if (c) {
                                (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                    (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                    ae.appendChild(u).appendChild(c);
                                var e = i.getComputedStyle(c);
                                (n = "1%" !== e.top),
                                    (l = 12 === t(e.marginLeft)),
                                    (c.style.right = "60%"),
                                    (a = 36 === t(e.right)),
                                    (r = 36 === t(e.width)),
                                    (c.style.position = "absolute"),
                                    (o = 12 === t(c.offsetWidth / 3)),
                                    ae.removeChild(u),
                                    (c = null);
                            }
                        }
                        function t(e) {
                            return Math.round(parseFloat(e));
                        }
                        var n,
                            r,
                            o,
                            a,
                            s,
                            l,
                            u = b.createElement("div"),
                            c = b.createElement("div");
                        c.style &&
                            ((c.style.backgroundClip = "content-box"),
                            (c.cloneNode(!0).style.backgroundClip = ""),
                            (m.clearCloneStyle = "content-box" === c.style.backgroundClip),
                            T.extend(m, {
                                boxSizingReliable: function () {
                                    return e(), r;
                                },
                                pixelBoxStyles: function () {
                                    return e(), a;
                                },
                                pixelPosition: function () {
                                    return e(), n;
                                },
                                reliableMarginLeft: function () {
                                    return e(), l;
                                },
                                scrollboxSize: function () {
                                    return e(), o;
                                },
                                reliableTrDimensions: function () {
                                    var e, t, n, r;
                                    return (
                                        null == s &&
                                            ((e = b.createElement("table")),
                                            (t = b.createElement("tr")),
                                            (n = b.createElement("div")),
                                            (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                                            (t.style.cssText = "border:1px solid"),
                                            (t.style.height = "1px"),
                                            (n.style.height = "9px"),
                                            (n.style.display = "block"),
                                            ae.appendChild(e).appendChild(t).appendChild(n),
                                            (r = i.getComputedStyle(t)),
                                            (s = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
                                            ae.removeChild(e)),
                                        s
                                    );
                                },
                            }));
                    })();
                    var ze = ["Webkit", "Moz", "ms"],
                        Ve = b.createElement("div").style,
                        Xe = {};
                    function Ye(e) {
                        return (
                            T.cssProps[e] ||
                            Xe[e] ||
                            (e in Ve
                                ? e
                                : (Xe[e] =
                                      (function (e) {
                                          for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--; ) if ((e = ze[n] + t) in Ve) return e;
                                      })(e) || e))
                        );
                    }
                    var Ke = /^(none|table(?!-c[ea]).+)/,
                        Je = /^--/,
                        Ge = { position: "absolute", visibility: "hidden", display: "block" },
                        Ze = { letterSpacing: "0", fontWeight: "400" };
                    function et(e, t, n) {
                        var i = re.exec(t);
                        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
                    }
                    function tt(e, t, n, i, r, o) {
                        var a = "width" === t ? 1 : 0,
                            s = 0,
                            l = 0;
                        if (n === (i ? "border" : "content")) return 0;
                        for (; a < 4; a += 2)
                            "margin" === n && (l += T.css(e, n + oe[a], !0, r)),
                                i
                                    ? ("content" === n && (l -= T.css(e, "padding" + oe[a], !0, r)), "margin" !== n && (l -= T.css(e, "border" + oe[a] + "Width", !0, r)))
                                    : ((l += T.css(e, "padding" + oe[a], !0, r)), "padding" !== n ? (l += T.css(e, "border" + oe[a] + "Width", !0, r)) : (s += T.css(e, "border" + oe[a] + "Width", !0, r)));
                        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - 0.5)) || 0), l;
                    }
                    function nt(e, t, n) {
                        var i = $e(e),
                            r = (!m.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, i),
                            o = r,
                            a = Ue(e, t, i),
                            s = "offset" + t[0].toUpperCase() + t.slice(1);
                        if (Me.test(a)) {
                            if (!n) return a;
                            a = "auto";
                        }
                        return (
                            ((!m.boxSizingReliable() && r) || (!m.reliableTrDimensions() && A(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === T.css(e, "display", !1, i))) &&
                                e.getClientRects().length &&
                                ((r = "border-box" === T.css(e, "boxSizing", !1, i)), (o = s in e) && (a = e[s])),
                            (a = parseFloat(a) || 0) + tt(e, t, n || (r ? "border" : "content"), o, i, a) + "px"
                        );
                    }
                    function it(e, t, n, i, r) {
                        return new it.prototype.init(e, t, n, i, r);
                    }
                    T.extend({
                        cssHooks: {
                            opacity: {
                                get: function (e, t) {
                                    if (t) {
                                        var n = Ue(e, "opacity");
                                        return "" === n ? "1" : n;
                                    }
                                },
                            },
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0,
                        },
                        cssProps: {},
                        style: function (e, t, n, i) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var r,
                                    o,
                                    a,
                                    s = Y(t),
                                    l = Je.test(t),
                                    u = e.style;
                                if ((l || (t = Ye(s)), (a = T.cssHooks[t] || T.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
                                "string" == (o = typeof n) && (r = re.exec(n)) && r[1] && ((n = ce(e, t, r)), (o = "number")),
                                    null != n &&
                                        n == n &&
                                        ("number" !== o || l || (n += (r && r[3]) || (T.cssNumber[s] ? "" : "px")),
                                        m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                                        (a && "set" in a && void 0 === (n = a.set(e, n, i))) || (l ? u.setProperty(t, n) : (u[t] = n)));
                            }
                        },
                        css: function (e, t, n, i) {
                            var r,
                                o,
                                a,
                                s = Y(t);
                            return (
                                Je.test(t) || (t = Ye(s)),
                                (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)),
                                void 0 === r && (r = Ue(e, t, i)),
                                "normal" === r && t in Ze && (r = Ze[t]),
                                "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
                            );
                        },
                    }),
                        T.each(["height", "width"], function (e, t) {
                            T.cssHooks[t] = {
                                get: function (e, n, i) {
                                    if (n)
                                        return !Ke.test(T.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                            ? nt(e, t, i)
                                            : Be(e, Ge, function () {
                                                  return nt(e, t, i);
                                              });
                                },
                                set: function (e, n, i) {
                                    var r,
                                        o = $e(e),
                                        a = !m.scrollboxSize() && "absolute" === o.position,
                                        s = (a || i) && "border-box" === T.css(e, "boxSizing", !1, o),
                                        l = i ? tt(e, t, i, s, o) : 0;
                                    return (
                                        s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - 0.5)),
                                        l && (r = re.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = T.css(e, t))),
                                        et(0, n, l)
                                    );
                                },
                            };
                        }),
                        (T.cssHooks.marginLeft = Qe(m.reliableMarginLeft, function (e, t) {
                            if (t)
                                return (
                                    (parseFloat(Ue(e, "marginLeft")) ||
                                        e.getBoundingClientRect().left -
                                            Be(e, { marginLeft: 0 }, function () {
                                                return e.getBoundingClientRect().left;
                                            })) + "px"
                                );
                        })),
                        T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                            (T.cssHooks[e + t] = {
                                expand: function (n) {
                                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                                    return r;
                                },
                            }),
                                "margin" !== e && (T.cssHooks[e + t].set = et);
                        }),
                        T.fn.extend({
                            css: function (e, t) {
                                return Q(
                                    this,
                                    function (e, t, n) {
                                        var i,
                                            r,
                                            o = {},
                                            a = 0;
                                        if (Array.isArray(t)) {
                                            for (i = $e(e), r = t.length; a < r; a++) o[t[a]] = T.css(e, t[a], !1, i);
                                            return o;
                                        }
                                        return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                                    },
                                    e,
                                    t,
                                    arguments.length > 1
                                );
                            },
                        }),
                        (T.Tween = it),
                        (it.prototype = {
                            constructor: it,
                            init: function (e, t, n, i, r, o) {
                                (this.elem = e), (this.prop = n), (this.easing = r || T.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (T.cssNumber[n] ? "" : "px"));
                            },
                            cur: function () {
                                var e = it.propHooks[this.prop];
                                return e && e.get ? e.get(this) : it.propHooks._default.get(this);
                            },
                            run: function (e) {
                                var t,
                                    n = it.propHooks[this.prop];
                                return (
                                    this.options.duration ? (this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                                    (this.now = (this.end - this.start) * t + this.start),
                                    this.options.step && this.options.step.call(this.elem, this.now, this),
                                    n && n.set ? n.set(this) : it.propHooks._default.set(this),
                                    this
                                );
                            },
                        }),
                        (it.prototype.init.prototype = it.prototype),
                        (it.propHooks = {
                            _default: {
                                get: function (e) {
                                    var t;
                                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                                },
                                set: function (e) {
                                    T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!T.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)]) ? (e.elem[e.prop] = e.now) : T.style(e.elem, e.prop, e.now + e.unit);
                                },
                            },
                        }),
                        (it.propHooks.scrollTop = it.propHooks.scrollLeft = {
                            set: function (e) {
                                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                            },
                        }),
                        (T.easing = {
                            linear: function (e) {
                                return e;
                            },
                            swing: function (e) {
                                return 0.5 - Math.cos(e * Math.PI) / 2;
                            },
                            _default: "swing",
                        }),
                        (T.fx = it.prototype.init),
                        (T.fx.step = {});
                    var rt,
                        ot,
                        at = /^(?:toggle|show|hide)$/,
                        st = /queueHooks$/;
                    function lt() {
                        ot && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(lt) : i.setTimeout(lt, T.fx.interval), T.fx.tick());
                    }
                    function ut() {
                        return (
                            i.setTimeout(function () {
                                rt = void 0;
                            }),
                            (rt = Date.now())
                        );
                    }
                    function ct(e, t) {
                        var n,
                            i = 0,
                            r = { height: e };
                        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = oe[i])] = r["padding" + n] = e;
                        return t && (r.opacity = r.width = e), r;
                    }
                    function ft(e, t, n) {
                        for (var i, r = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = r.length; o < a; o++) if ((i = r[o].call(n, t, e))) return i;
                    }
                    function dt(e, t, n) {
                        var i,
                            r,
                            o = 0,
                            a = dt.prefilters.length,
                            s = T.Deferred().always(function () {
                                delete l.elem;
                            }),
                            l = function () {
                                if (r) return !1;
                                for (var t = rt || ut(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(i);
                                return s.notifyWith(e, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1);
                            },
                            u = s.promise({
                                elem: e,
                                props: T.extend({}, t),
                                opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, n),
                                originalProperties: t,
                                originalOptions: n,
                                startTime: rt || ut(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function (t, n) {
                                    var i = T.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                                    return u.tweens.push(i), i;
                                },
                                stop: function (t) {
                                    var n = 0,
                                        i = t ? u.tweens.length : 0;
                                    if (r) return this;
                                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this;
                                },
                            }),
                            c = u.props;
                        for (
                            (function (e, t) {
                                var n, i, r, o, a;
                                for (n in e)
                                    if (((r = t[(i = Y(n))]), (o = e[n]), Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])), n !== i && ((e[i] = o), delete e[n]), (a = T.cssHooks[i]) && ("expand" in a)))
                                        for (n in ((o = a.expand(o)), delete e[i], o)) (n in e) || ((e[n] = o[n]), (t[n] = r));
                                    else t[i] = r;
                            })(c, u.opts.specialEasing);
                            o < a;
                            o++
                        )
                            if ((i = dt.prefilters[o].call(u, e, c, u.opts))) return v(i.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
                        return (
                            T.map(c, ft, u),
                            v(u.opts.start) && u.opts.start.call(e, u),
                            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
                            T.fx.timer(T.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
                            u
                        );
                    }
                    (T.Animation = T.extend(dt, {
                        tweeners: {
                            "*": [
                                function (e, t) {
                                    var n = this.createTween(e, t);
                                    return ce(n.elem, e, re.exec(t), n), n;
                                },
                            ],
                        },
                        tweener: function (e, t) {
                            v(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
                            for (var n, i = 0, r = e.length; i < r; i++) (n = e[i]), (dt.tweeners[n] = dt.tweeners[n] || []), dt.tweeners[n].unshift(t);
                        },
                        prefilters: [
                            function (e, t, n) {
                                var i,
                                    r,
                                    o,
                                    a,
                                    s,
                                    l,
                                    u,
                                    c,
                                    f = "width" in t || "height" in t,
                                    d = this,
                                    h = {},
                                    p = e.style,
                                    g = e.nodeType && ue(e),
                                    m = G.get(e, "fxshow");
                                for (i in (n.queue ||
                                    (null == (a = T._queueHooks(e, "fx")).unqueued &&
                                        ((a.unqueued = 0),
                                        (s = a.empty.fire),
                                        (a.empty.fire = function () {
                                            a.unqueued || s();
                                        })),
                                    a.unqueued++,
                                    d.always(function () {
                                        d.always(function () {
                                            a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
                                        });
                                    })),
                                t))
                                    if (((r = t[i]), at.test(r))) {
                                        if ((delete t[i], (o = o || "toggle" === r), r === (g ? "hide" : "show"))) {
                                            if ("show" !== r || !m || void 0 === m[i]) continue;
                                            g = !0;
                                        }
                                        h[i] = (m && m[i]) || T.style(e, i);
                                    }
                                if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h))
                                    for (i in (f &&
                                        1 === e.nodeType &&
                                        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                                        null == (u = m && m.display) && (u = G.get(e, "display")),
                                        "none" === (c = T.css(e, "display")) && (u ? (c = u) : (he([e], !0), (u = e.style.display || u), (c = T.css(e, "display")), he([e]))),
                                        ("inline" === c || ("inline-block" === c && null != u)) &&
                                            "none" === T.css(e, "float") &&
                                            (l ||
                                                (d.done(function () {
                                                    p.display = u;
                                                }),
                                                null == u && ((c = p.display), (u = "none" === c ? "" : c))),
                                            (p.display = "inline-block"))),
                                    n.overflow &&
                                        ((p.overflow = "hidden"),
                                        d.always(function () {
                                            (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                                        })),
                                    (l = !1),
                                    h))
                                        l ||
                                            (m ? "hidden" in m && (g = m.hidden) : (m = G.access(e, "fxshow", { display: u })),
                                            o && (m.hidden = !g),
                                            g && he([e], !0),
                                            d.done(function () {
                                                for (i in (g || he([e]), G.remove(e, "fxshow"), h)) T.style(e, i, h[i]);
                                            })),
                                            (l = ft(g ? m[i] : 0, i, d)),
                                            i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
                            },
                        ],
                        prefilter: function (e, t) {
                            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
                        },
                    })),
                        (T.speed = function (e, t, n) {
                            var i = e && "object" == typeof e ? T.extend({}, e) : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
                            return (
                                T.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in T.fx.speeds ? (i.duration = T.fx.speeds[i.duration]) : (i.duration = T.fx.speeds._default)),
                                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                                (i.old = i.complete),
                                (i.complete = function () {
                                    v(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
                                }),
                                i
                            );
                        }),
                        T.fn.extend({
                            fadeTo: function (e, t, n, i) {
                                return this.filter(ue).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
                            },
                            animate: function (e, t, n, i) {
                                var r = T.isEmptyObject(e),
                                    o = T.speed(t, n, i),
                                    a = function () {
                                        var t = dt(this, T.extend({}, e), o);
                                        (r || G.get(this, "finish")) && t.stop(!0);
                                    };
                                return (a.finish = a), r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
                            },
                            stop: function (e, t, n) {
                                var i = function (e) {
                                    var t = e.stop;
                                    delete e.stop, t(n);
                                };
                                return (
                                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                                    t && this.queue(e || "fx", []),
                                    this.each(function () {
                                        var t = !0,
                                            r = null != e && e + "queueHooks",
                                            o = T.timers,
                                            a = G.get(this);
                                        if (r) a[r] && a[r].stop && i(a[r]);
                                        else for (r in a) a[r] && a[r].stop && st.test(r) && i(a[r]);
                                        for (r = o.length; r--; ) o[r].elem !== this || (null != e && o[r].queue !== e) || (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                                        (!t && n) || T.dequeue(this, e);
                                    })
                                );
                            },
                            finish: function (e) {
                                return (
                                    !1 !== e && (e = e || "fx"),
                                    this.each(function () {
                                        var t,
                                            n = G.get(this),
                                            i = n[e + "queue"],
                                            r = n[e + "queueHooks"],
                                            o = T.timers,
                                            a = i ? i.length : 0;
                                        for (n.finish = !0, T.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                        delete n.finish;
                                    })
                                );
                            },
                        }),
                        T.each(["toggle", "show", "hide"], function (e, t) {
                            var n = T.fn[t];
                            T.fn[t] = function (e, i, r) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, i, r);
                            };
                        }),
                        T.each({ slideDown: ct("show"), slideUp: ct("hide"), slideToggle: ct("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                            T.fn[e] = function (e, n, i) {
                                return this.animate(t, e, n, i);
                            };
                        }),
                        (T.timers = []),
                        (T.fx.tick = function () {
                            var e,
                                t = 0,
                                n = T.timers;
                            for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                            n.length || T.fx.stop(), (rt = void 0);
                        }),
                        (T.fx.timer = function (e) {
                            T.timers.push(e), T.fx.start();
                        }),
                        (T.fx.interval = 13),
                        (T.fx.start = function () {
                            ot || ((ot = !0), lt());
                        }),
                        (T.fx.stop = function () {
                            ot = null;
                        }),
                        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                        (T.fn.delay = function (e, t) {
                            return (
                                (e = (T.fx && T.fx.speeds[e]) || e),
                                (t = t || "fx"),
                                this.queue(t, function (t, n) {
                                    var r = i.setTimeout(t, e);
                                    n.stop = function () {
                                        i.clearTimeout(r);
                                    };
                                })
                            );
                        }),
                        (function () {
                            var e = b.createElement("input"),
                                t = b.createElement("select").appendChild(b.createElement("option"));
                            (e.type = "checkbox"), (m.checkOn = "" !== e.value), (m.optSelected = t.selected), ((e = b.createElement("input")).value = "t"), (e.type = "radio"), (m.radioValue = "t" === e.value);
                        })();
                    var ht,
                        pt = T.expr.attrHandle;
                    T.fn.extend({
                        attr: function (e, t) {
                            return Q(this, T.attr, e, t, arguments.length > 1);
                        },
                        removeAttr: function (e) {
                            return this.each(function () {
                                T.removeAttr(this, e);
                            });
                        },
                    }),
                        T.extend({
                            attr: function (e, t, n) {
                                var i,
                                    r,
                                    o = e.nodeType;
                                if (3 !== o && 8 !== o && 2 !== o)
                                    return void 0 === e.getAttribute
                                        ? T.prop(e, t, n)
                                        : ((1 === o && T.isXMLDoc(e)) || (r = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? ht : void 0)),
                                          void 0 !== n
                                              ? null === n
                                                  ? void T.removeAttr(e, t)
                                                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                                  ? i
                                                  : (e.setAttribute(t, n + ""), n)
                                              : r && "get" in r && null !== (i = r.get(e, t))
                                              ? i
                                              : null == (i = T.find.attr(e, t))
                                              ? void 0
                                              : i);
                            },
                            attrHooks: {
                                type: {
                                    set: function (e, t) {
                                        if (!m.radioValue && "radio" === t && A(e, "input")) {
                                            var n = e.value;
                                            return e.setAttribute("type", t), n && (e.value = n), t;
                                        }
                                    },
                                },
                            },
                            removeAttr: function (e, t) {
                                var n,
                                    i = 0,
                                    r = t && t.match(R);
                                if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
                            },
                        }),
                        (ht = {
                            set: function (e, t, n) {
                                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
                            },
                        }),
                        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
                            var n = pt[t] || T.find.attr;
                            pt[t] = function (e, t, i) {
                                var r,
                                    o,
                                    a = t.toLowerCase();
                                return i || ((o = pt[a]), (pt[a] = r), (r = null != n(e, t, i) ? a : null), (pt[a] = o)), r;
                            };
                        });
                    var gt = /^(?:input|select|textarea|button)$/i,
                        mt = /^(?:a|area)$/i;
                    function vt(e) {
                        return (e.match(R) || []).join(" ");
                    }
                    function yt(e) {
                        return (e.getAttribute && e.getAttribute("class")) || "";
                    }
                    function bt(e) {
                        return Array.isArray(e) ? e : ("string" == typeof e && e.match(R)) || [];
                    }
                    T.fn.extend({
                        prop: function (e, t) {
                            return Q(this, T.prop, e, t, arguments.length > 1);
                        },
                        removeProp: function (e) {
                            return this.each(function () {
                                delete this[T.propFix[e] || e];
                            });
                        },
                    }),
                        T.extend({
                            prop: function (e, t, n) {
                                var i,
                                    r,
                                    o = e.nodeType;
                                if (3 !== o && 8 !== o && 2 !== o)
                                    return (
                                        (1 === o && T.isXMLDoc(e)) || ((t = T.propFix[t] || t), (r = T.propHooks[t])),
                                        void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                                    );
                            },
                            propHooks: {
                                tabIndex: {
                                    get: function (e) {
                                        var t = T.find.attr(e, "tabindex");
                                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || (mt.test(e.nodeName) && e.href) ? 0 : -1;
                                    },
                                },
                            },
                            propFix: { for: "htmlFor", class: "className" },
                        }),
                        m.optSelected ||
                            (T.propHooks.selected = {
                                get: function (e) {
                                    var t = e.parentNode;
                                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                                },
                                set: function (e) {
                                    var t = e.parentNode;
                                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                                },
                            }),
                        T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                            T.propFix[this.toLowerCase()] = this;
                        }),
                        T.fn.extend({
                            addClass: function (e) {
                                var t,
                                    n,
                                    i,
                                    r,
                                    o,
                                    a,
                                    s,
                                    l = 0;
                                if (v(e))
                                    return this.each(function (t) {
                                        T(this).addClass(e.call(this, t, yt(this)));
                                    });
                                if ((t = bt(e)).length)
                                    for (; (n = this[l++]); )
                                        if (((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))) {
                                            for (a = 0; (o = t[a++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                            r !== (s = vt(i)) && n.setAttribute("class", s);
                                        }
                                return this;
                            },
                            removeClass: function (e) {
                                var t,
                                    n,
                                    i,
                                    r,
                                    o,
                                    a,
                                    s,
                                    l = 0;
                                if (v(e))
                                    return this.each(function (t) {
                                        T(this).removeClass(e.call(this, t, yt(this)));
                                    });
                                if (!arguments.length) return this.attr("class", "");
                                if ((t = bt(e)).length)
                                    for (; (n = this[l++]); )
                                        if (((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))) {
                                            for (a = 0; (o = t[a++]); ) for (; i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                                            r !== (s = vt(i)) && n.setAttribute("class", s);
                                        }
                                return this;
                            },
                            toggleClass: function (e, t) {
                                var n = typeof e,
                                    i = "string" === n || Array.isArray(e);
                                return "boolean" == typeof t && i
                                    ? t
                                        ? this.addClass(e)
                                        : this.removeClass(e)
                                    : v(e)
                                    ? this.each(function (n) {
                                          T(this).toggleClass(e.call(this, n, yt(this), t), t);
                                      })
                                    : this.each(function () {
                                          var t, r, o, a;
                                          if (i) for (r = 0, o = T(this), a = bt(e); (t = a[r++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                          else
                                              (void 0 !== e && "boolean" !== n) ||
                                                  ((t = yt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""));
                                      });
                            },
                            hasClass: function (e) {
                                var t,
                                    n,
                                    i = 0;
                                for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + vt(yt(n)) + " ").indexOf(t) > -1) return !0;
                                return !1;
                            },
                        });
                    var _t = /\r/g;
                    T.fn.extend({
                        val: function (e) {
                            var t,
                                n,
                                i,
                                r = this[0];
                            return arguments.length
                                ? ((i = v(e)),
                                  this.each(function (n) {
                                      var r;
                                      1 === this.nodeType &&
                                          (null == (r = i ? e.call(this, n, T(this).val()) : e)
                                              ? (r = "")
                                              : "number" == typeof r
                                              ? (r += "")
                                              : Array.isArray(r) &&
                                                (r = T.map(r, function (e) {
                                                    return null == e ? "" : e + "";
                                                })),
                                          ((t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                                  }))
                                : r
                                ? (t = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value"))
                                    ? n
                                    : "string" == typeof (n = r.value)
                                    ? n.replace(_t, "")
                                    : null == n
                                    ? ""
                                    : n
                                : void 0;
                        },
                    }),
                        T.extend({
                            valHooks: {
                                option: {
                                    get: function (e) {
                                        var t = T.find.attr(e, "value");
                                        return null != t ? t : vt(T.text(e));
                                    },
                                },
                                select: {
                                    get: function (e) {
                                        var t,
                                            n,
                                            i,
                                            r = e.options,
                                            o = e.selectedIndex,
                                            a = "select-one" === e.type,
                                            s = a ? null : [],
                                            l = a ? o + 1 : r.length;
                                        for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                                            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                                if (((t = T(n).val()), a)) return t;
                                                s.push(t);
                                            }
                                        return s;
                                    },
                                    set: function (e, t) {
                                        for (var n, i, r = e.options, o = T.makeArray(t), a = r.length; a--; ) ((i = r[a]).selected = T.inArray(T.valHooks.option.get(i), o) > -1) && (n = !0);
                                        return n || (e.selectedIndex = -1), o;
                                    },
                                },
                            },
                        }),
                        T.each(["radio", "checkbox"], function () {
                            (T.valHooks[this] = {
                                set: function (e, t) {
                                    if (Array.isArray(t)) return (e.checked = T.inArray(T(e).val(), t) > -1);
                                },
                            }),
                                m.checkOn ||
                                    (T.valHooks[this].get = function (e) {
                                        return null === e.getAttribute("value") ? "on" : e.value;
                                    });
                        }),
                        (m.focusin = "onfocusin" in i);
                    var wt = /^(?:focusinfocus|focusoutblur)$/,
                        xt = function (e) {
                            e.stopPropagation();
                        };
                    T.extend(T.event, {
                        trigger: function (e, t, n, r) {
                            var o,
                                a,
                                s,
                                l,
                                u,
                                c,
                                f,
                                d,
                                p = [n || b],
                                g = h.call(e, "type") ? e.type : e,
                                m = h.call(e, "namespace") ? e.namespace.split(".") : [];
                            if (
                                ((a = d = s = n = n || b),
                                3 !== n.nodeType &&
                                    8 !== n.nodeType &&
                                    !wt.test(g + T.event.triggered) &&
                                    (g.indexOf(".") > -1 && ((m = g.split(".")), (g = m.shift()), m.sort()),
                                    (u = g.indexOf(":") < 0 && "on" + g),
                                    ((e = e[T.expando] ? e : new T.Event(g, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                                    (e.namespace = m.join(".")),
                                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                    (e.result = void 0),
                                    e.target || (e.target = n),
                                    (t = null == t ? [e] : T.makeArray(t, [e])),
                                    (f = T.event.special[g] || {}),
                                    r || !f.trigger || !1 !== f.trigger.apply(n, t)))
                            ) {
                                if (!r && !f.noBubble && !y(n)) {
                                    for (l = f.delegateType || g, wt.test(l + g) || (a = a.parentNode); a; a = a.parentNode) p.push(a), (s = a);
                                    s === (n.ownerDocument || b) && p.push(s.defaultView || s.parentWindow || i);
                                }
                                for (o = 0; (a = p[o++]) && !e.isPropagationStopped(); )
                                    (d = a),
                                        (e.type = o > 1 ? l : f.bindType || g),
                                        (c = (G.get(a, "events") || Object.create(null))[e.type] && G.get(a, "handle")) && c.apply(a, t),
                                        (c = u && a[u]) && c.apply && K(a) && ((e.result = c.apply(a, t)), !1 === e.result && e.preventDefault());
                                return (
                                    (e.type = g),
                                    r ||
                                        e.isDefaultPrevented() ||
                                        (f._default && !1 !== f._default.apply(p.pop(), t)) ||
                                        !K(n) ||
                                        (u &&
                                            v(n[g]) &&
                                            !y(n) &&
                                            ((s = n[u]) && (n[u] = null),
                                            (T.event.triggered = g),
                                            e.isPropagationStopped() && d.addEventListener(g, xt),
                                            n[g](),
                                            e.isPropagationStopped() && d.removeEventListener(g, xt),
                                            (T.event.triggered = void 0),
                                            s && (n[u] = s))),
                                    e.result
                                );
                            }
                        },
                        simulate: function (e, t, n) {
                            var i = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
                            T.event.trigger(i, null, t);
                        },
                    }),
                        T.fn.extend({
                            trigger: function (e, t) {
                                return this.each(function () {
                                    T.event.trigger(e, t, this);
                                });
                            },
                            triggerHandler: function (e, t) {
                                var n = this[0];
                                if (n) return T.event.trigger(e, t, n, !0);
                            },
                        }),
                        m.focusin ||
                            T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                                var n = function (e) {
                                    T.event.simulate(t, e.target, T.event.fix(e));
                                };
                                T.event.special[t] = {
                                    setup: function () {
                                        var i = this.ownerDocument || this.document || this,
                                            r = G.access(i, t);
                                        r || i.addEventListener(e, n, !0), G.access(i, t, (r || 0) + 1);
                                    },
                                    teardown: function () {
                                        var i = this.ownerDocument || this.document || this,
                                            r = G.access(i, t) - 1;
                                        r ? G.access(i, t, r) : (i.removeEventListener(e, n, !0), G.remove(i, t));
                                    },
                                };
                            });
                    var Et = i.location,
                        Tt = { guid: Date.now() },
                        Ct = /\?/;
                    T.parseXML = function (e) {
                        var t, n;
                        if (!e || "string" != typeof e) return null;
                        try {
                            t = new i.DOMParser().parseFromString(e, "text/xml");
                        } catch (e) {}
                        return (
                            (n = t && t.getElementsByTagName("parsererror")[0]),
                            (t && !n) ||
                                T.error(
                                    "Invalid XML: " +
                                        (n
                                            ? T.map(n.childNodes, function (e) {
                                                  return e.textContent;
                                              }).join("\n")
                                            : e)
                                ),
                            t
                        );
                    };
                    var St = /\[\]$/,
                        kt = /\r?\n/g,
                        Nt = /^(?:submit|button|image|reset|file)$/i,
                        Dt = /^(?:input|select|textarea|keygen)/i;
                    function At(e, t, n, i) {
                        var r;
                        if (Array.isArray(t))
                            T.each(t, function (t, r) {
                                n || St.test(e) ? i(e, r) : At(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
                            });
                        else if (n || "object" !== x(t)) i(e, t);
                        else for (r in t) At(e + "[" + r + "]", t[r], n, i);
                    }
                    (T.param = function (e, t) {
                        var n,
                            i = [],
                            r = function (e, t) {
                                var n = v(t) ? t() : t;
                                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                            };
                        if (null == e) return "";
                        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
                            T.each(e, function () {
                                r(this.name, this.value);
                            });
                        else for (n in e) At(n, e[n], t, r);
                        return i.join("&");
                    }),
                        T.fn.extend({
                            serialize: function () {
                                return T.param(this.serializeArray());
                            },
                            serializeArray: function () {
                                return this.map(function () {
                                    var e = T.prop(this, "elements");
                                    return e ? T.makeArray(e) : this;
                                })
                                    .filter(function () {
                                        var e = this.type;
                                        return this.name && !T(this).is(":disabled") && Dt.test(this.nodeName) && !Nt.test(e) && (this.checked || !me.test(e));
                                    })
                                    .map(function (e, t) {
                                        var n = T(this).val();
                                        return null == n
                                            ? null
                                            : Array.isArray(n)
                                            ? T.map(n, function (e) {
                                                  return { name: t.name, value: e.replace(kt, "\r\n") };
                                              })
                                            : { name: t.name, value: n.replace(kt, "\r\n") };
                                    })
                                    .get();
                            },
                        });
                    var jt = /%20/g,
                        Ot = /#.*$/,
                        It = /([?&])_=[^&]*/,
                        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        Pt = /^(?:GET|HEAD)$/,
                        qt = /^\/\//,
                        Ht = {},
                        Rt = {},
                        Ft = "*/".concat("*"),
                        Mt = b.createElement("a");
                    function $t(e) {
                        return function (t, n) {
                            "string" != typeof t && ((n = t), (t = "*"));
                            var i,
                                r = 0,
                                o = t.toLowerCase().match(R) || [];
                            if (v(n)) for (; (i = o[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
                        };
                    }
                    function Bt(e, t, n, i) {
                        var r = {},
                            o = e === Rt;
                        function a(s) {
                            var l;
                            return (
                                (r[s] = !0),
                                T.each(e[s] || [], function (e, s) {
                                    var u = s(t, n, i);
                                    return "string" != typeof u || o || r[u] ? (o ? !(l = u) : void 0) : (t.dataTypes.unshift(u), a(u), !1);
                                }),
                                l
                            );
                        }
                        return a(t.dataTypes[0]) || (!r["*"] && a("*"));
                    }
                    function Wt(e, t) {
                        var n,
                            i,
                            r = T.ajaxSettings.flatOptions || {};
                        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                        return i && T.extend(!0, e, i), e;
                    }
                    (Mt.href = Et.href),
                        T.extend({
                            active: 0,
                            lastModified: {},
                            etag: {},
                            ajaxSettings: {
                                url: Et.href,
                                type: "GET",
                                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                                global: !0,
                                processData: !0,
                                async: !0,
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                accepts: { "*": Ft, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML },
                                flatOptions: { url: !0, context: !0 },
                            },
                            ajaxSetup: function (e, t) {
                                return t ? Wt(Wt(e, T.ajaxSettings), t) : Wt(T.ajaxSettings, e);
                            },
                            ajaxPrefilter: $t(Ht),
                            ajaxTransport: $t(Rt),
                            ajax: function (e, t) {
                                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                                var n,
                                    r,
                                    o,
                                    a,
                                    s,
                                    l,
                                    u,
                                    c,
                                    f,
                                    d,
                                    h = T.ajaxSetup({}, t),
                                    p = h.context || h,
                                    g = h.context && (p.nodeType || p.jquery) ? T(p) : T.event,
                                    m = T.Deferred(),
                                    v = T.Callbacks("once memory"),
                                    y = h.statusCode || {},
                                    _ = {},
                                    w = {},
                                    x = "canceled",
                                    E = {
                                        readyState: 0,
                                        getResponseHeader: function (e) {
                                            var t;
                                            if (u) {
                                                if (!a) for (a = {}; (t = Lt.exec(o)); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                                t = a[e.toLowerCase() + " "];
                                            }
                                            return null == t ? null : t.join(", ");
                                        },
                                        getAllResponseHeaders: function () {
                                            return u ? o : null;
                                        },
                                        setRequestHeader: function (e, t) {
                                            return null == u && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (_[e] = t)), this;
                                        },
                                        overrideMimeType: function (e) {
                                            return null == u && (h.mimeType = e), this;
                                        },
                                        statusCode: function (e) {
                                            var t;
                                            if (e)
                                                if (u) E.always(e[E.status]);
                                                else for (t in e) y[t] = [y[t], e[t]];
                                            return this;
                                        },
                                        abort: function (e) {
                                            var t = e || x;
                                            return n && n.abort(t), C(0, t), this;
                                        },
                                    };
                                if (
                                    (m.promise(E),
                                    (h.url = ((e || h.url || Et.href) + "").replace(qt, Et.protocol + "//")),
                                    (h.type = t.method || t.type || h.method || h.type),
                                    (h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""]),
                                    null == h.crossDomain)
                                ) {
                                    l = b.createElement("a");
                                    try {
                                        (l.href = h.url), (l.href = l.href), (h.crossDomain = Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host);
                                    } catch (e) {
                                        h.crossDomain = !0;
                                    }
                                }
                                if ((h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), Bt(Ht, h, t, E), u)) return E;
                                for (f in ((c = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
                                (h.type = h.type.toUpperCase()),
                                (h.hasContent = !Pt.test(h.type)),
                                (r = h.url.replace(Ot, "")),
                                h.hasContent
                                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(jt, "+"))
                                    : ((d = h.url.slice(r.length)),
                                      h.data && (h.processData || "string" == typeof h.data) && ((r += (Ct.test(r) ? "&" : "?") + h.data), delete h.data),
                                      !1 === h.cache && ((r = r.replace(It, "$1")), (d = (Ct.test(r) ? "&" : "?") + "_=" + Tt.guid++ + d)),
                                      (h.url = r + d)),
                                h.ifModified && (T.lastModified[r] && E.setRequestHeader("If-Modified-Since", T.lastModified[r]), T.etag[r] && E.setRequestHeader("If-None-Match", T.etag[r])),
                                ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                                E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]),
                                h.headers))
                                    E.setRequestHeader(f, h.headers[f]);
                                if (h.beforeSend && (!1 === h.beforeSend.call(p, E, h) || u)) return E.abort();
                                if (((x = "abort"), v.add(h.complete), E.done(h.success), E.fail(h.error), (n = Bt(Rt, h, t, E)))) {
                                    if (((E.readyState = 1), c && g.trigger("ajaxSend", [E, h]), u)) return E;
                                    h.async &&
                                        h.timeout > 0 &&
                                        (s = i.setTimeout(function () {
                                            E.abort("timeout");
                                        }, h.timeout));
                                    try {
                                        (u = !1), n.send(_, C);
                                    } catch (e) {
                                        if (u) throw e;
                                        C(-1, e);
                                    }
                                } else C(-1, "No Transport");
                                function C(e, t, a, l) {
                                    var f,
                                        d,
                                        b,
                                        _,
                                        w,
                                        x = t;
                                    u ||
                                        ((u = !0),
                                        s && i.clearTimeout(s),
                                        (n = void 0),
                                        (o = l || ""),
                                        (E.readyState = e > 0 ? 4 : 0),
                                        (f = (e >= 200 && e < 300) || 304 === e),
                                        a &&
                                            (_ = (function (e, t, n) {
                                                for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                                if (i)
                                                    for (r in s)
                                                        if (s[r] && s[r].test(i)) {
                                                            l.unshift(r);
                                                            break;
                                                        }
                                                if (l[0] in n) o = l[0];
                                                else {
                                                    for (r in n) {
                                                        if (!l[0] || e.converters[r + " " + l[0]]) {
                                                            o = r;
                                                            break;
                                                        }
                                                        a || (a = r);
                                                    }
                                                    o = o || a;
                                                }
                                                if (o) return o !== l[0] && l.unshift(o), n[o];
                                            })(h, E, a)),
                                        !f && T.inArray("script", h.dataTypes) > -1 && T.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}),
                                        (_ = (function (e, t, n, i) {
                                            var r,
                                                o,
                                                a,
                                                s,
                                                l,
                                                u = {},
                                                c = e.dataTypes.slice();
                                            if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                                            for (o = c.shift(); o; )
                                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = o), (o = c.shift())))
                                                    if ("*" === o) o = l;
                                                    else if ("*" !== l && l !== o) {
                                                        if (!(a = u[l + " " + o] || u["* " + o]))
                                                            for (r in u)
                                                                if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                                                    !0 === a ? (a = u[r]) : !0 !== u[r] && ((o = s[0]), c.unshift(s[1]));
                                                                    break;
                                                                }
                                                        if (!0 !== a)
                                                            if (a && e.throws) t = a(t);
                                                            else
                                                                try {
                                                                    t = a(t);
                                                                } catch (e) {
                                                                    return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o };
                                                                }
                                                    }
                                            return { state: "success", data: t };
                                        })(h, _, E, f)),
                                        f
                                            ? (h.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (T.lastModified[r] = w), (w = E.getResponseHeader("etag")) && (T.etag[r] = w)),
                                              204 === e || "HEAD" === h.type ? (x = "nocontent") : 304 === e ? (x = "notmodified") : ((x = _.state), (d = _.data), (f = !(b = _.error))))
                                            : ((b = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                                        (E.status = e),
                                        (E.statusText = (t || x) + ""),
                                        f ? m.resolveWith(p, [d, x, E]) : m.rejectWith(p, [E, x, b]),
                                        E.statusCode(y),
                                        (y = void 0),
                                        c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [E, h, f ? d : b]),
                                        v.fireWith(p, [E, x]),
                                        c && (g.trigger("ajaxComplete", [E, h]), --T.active || T.event.trigger("ajaxStop")));
                                }
                                return E;
                            },
                            getJSON: function (e, t, n) {
                                return T.get(e, t, n, "json");
                            },
                            getScript: function (e, t) {
                                return T.get(e, void 0, t, "script");
                            },
                        }),
                        T.each(["get", "post"], function (e, t) {
                            T[t] = function (e, n, i, r) {
                                return v(n) && ((r = r || i), (i = n), (n = void 0)), T.ajax(T.extend({ url: e, type: t, dataType: r, data: n, success: i }, T.isPlainObject(e) && e));
                            };
                        }),
                        T.ajaxPrefilter(function (e) {
                            var t;
                            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                        }),
                        (T._evalUrl = function (e, t, n) {
                            return T.ajax({
                                url: e,
                                type: "GET",
                                dataType: "script",
                                cache: !0,
                                async: !1,
                                global: !1,
                                converters: { "text script": function () {} },
                                dataFilter: function (e) {
                                    T.globalEval(e, t, n);
                                },
                            });
                        }),
                        T.fn.extend({
                            wrapAll: function (e) {
                                var t;
                                return (
                                    this[0] &&
                                        (v(e) && (e = e.call(this[0])),
                                        (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                                        this[0].parentNode && t.insertBefore(this[0]),
                                        t
                                            .map(function () {
                                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                                return e;
                                            })
                                            .append(this)),
                                    this
                                );
                            },
                            wrapInner: function (e) {
                                return v(e)
                                    ? this.each(function (t) {
                                          T(this).wrapInner(e.call(this, t));
                                      })
                                    : this.each(function () {
                                          var t = T(this),
                                              n = t.contents();
                                          n.length ? n.wrapAll(e) : t.append(e);
                                      });
                            },
                            wrap: function (e) {
                                var t = v(e);
                                return this.each(function (n) {
                                    T(this).wrapAll(t ? e.call(this, n) : e);
                                });
                            },
                            unwrap: function (e) {
                                return (
                                    this.parent(e)
                                        .not("body")
                                        .each(function () {
                                            T(this).replaceWith(this.childNodes);
                                        }),
                                    this
                                );
                            },
                        }),
                        (T.expr.pseudos.hidden = function (e) {
                            return !T.expr.pseudos.visible(e);
                        }),
                        (T.expr.pseudos.visible = function (e) {
                            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                        }),
                        (T.ajaxSettings.xhr = function () {
                            try {
                                return new i.XMLHttpRequest();
                            } catch (e) {}
                        });
                    var Ut = { 0: 200, 1223: 204 },
                        Qt = T.ajaxSettings.xhr();
                    (m.cors = !!Qt && "withCredentials" in Qt),
                        (m.ajax = Qt = !!Qt),
                        T.ajaxTransport(function (e) {
                            var t, n;
                            if (m.cors || (Qt && !e.crossDomain))
                                return {
                                    send: function (r, o) {
                                        var a,
                                            s = e.xhr();
                                        if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                        for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) s.setRequestHeader(a, r[a]);
                                        (t = function (e) {
                                            return function () {
                                                t &&
                                                    ((t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                                    "abort" === e
                                                        ? s.abort()
                                                        : "error" === e
                                                        ? "number" != typeof s.status
                                                            ? o(0, "error")
                                                            : o(s.status, s.statusText)
                                                        : o(
                                                              Ut[s.status] || s.status,
                                                              s.statusText,
                                                              "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText },
                                                              s.getAllResponseHeaders()
                                                          ));
                                            };
                                        }),
                                            (s.onload = t()),
                                            (n = s.onerror = s.ontimeout = t("error")),
                                            void 0 !== s.onabort
                                                ? (s.onabort = n)
                                                : (s.onreadystatechange = function () {
                                                      4 === s.readyState &&
                                                          i.setTimeout(function () {
                                                              t && n();
                                                          });
                                                  }),
                                            (t = t("abort"));
                                        try {
                                            s.send((e.hasContent && e.data) || null);
                                        } catch (e) {
                                            if (t) throw e;
                                        }
                                    },
                                    abort: function () {
                                        t && t();
                                    },
                                };
                        }),
                        T.ajaxPrefilter(function (e) {
                            e.crossDomain && (e.contents.script = !1);
                        }),
                        T.ajaxSetup({
                            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                            contents: { script: /\b(?:java|ecma)script\b/ },
                            converters: {
                                "text script": function (e) {
                                    return T.globalEval(e), e;
                                },
                            },
                        }),
                        T.ajaxPrefilter("script", function (e) {
                            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                        }),
                        T.ajaxTransport("script", function (e) {
                            var t, n;
                            if (e.crossDomain || e.scriptAttrs)
                                return {
                                    send: function (i, r) {
                                        (t = T("<script>")
                                            .attr(e.scriptAttrs || {})
                                            .prop({ charset: e.scriptCharset, src: e.url })
                                            .on(
                                                "load error",
                                                (n = function (e) {
                                                    t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                                                })
                                            )),
                                            b.head.appendChild(t[0]);
                                    },
                                    abort: function () {
                                        n && n();
                                    },
                                };
                        });
                    var zt,
                        Vt = [],
                        Xt = /(=)\?(?=&|$)|\?\?/;
                    T.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function () {
                            var e = Vt.pop() || T.expando + "_" + Tt.guid++;
                            return (this[e] = !0), e;
                        },
                    }),
                        T.ajaxPrefilter("json jsonp", function (e, t, n) {
                            var r,
                                o,
                                a,
                                s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
                            if (s || "jsonp" === e.dataTypes[0])
                                return (
                                    (r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                                    s ? (e[s] = e[s].replace(Xt, "$1" + r)) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                                    (e.converters["script json"] = function () {
                                        return a || T.error(r + " was not called"), a[0];
                                    }),
                                    (e.dataTypes[0] = "json"),
                                    (o = i[r]),
                                    (i[r] = function () {
                                        a = arguments;
                                    }),
                                    n.always(function () {
                                        void 0 === o ? T(i).removeProp(r) : (i[r] = o), e[r] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(r)), a && v(o) && o(a[0]), (a = o = void 0);
                                    }),
                                    "script"
                                );
                        }),
                        (m.createHTMLDocument = (((zt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === zt.childNodes.length)),
                        (T.parseHTML = function (e, t, n) {
                            return "string" != typeof e
                                ? []
                                : ("boolean" == typeof t && ((n = t), (t = !1)),
                                  t || (m.createHTMLDocument ? (((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href), t.head.appendChild(i)) : (t = b)),
                                  (o = !n && []),
                                  (r = j.exec(e)) ? [t.createElement(r[1])] : ((r = Ee([e], t, o)), o && o.length && T(o).remove(), T.merge([], r.childNodes)));
                            var i, r, o;
                        }),
                        (T.fn.load = function (e, t, n) {
                            var i,
                                r,
                                o,
                                a = this,
                                s = e.indexOf(" ");
                            return (
                                s > -1 && ((i = vt(e.slice(s))), (e = e.slice(0, s))),
                                v(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                                a.length > 0 &&
                                    T.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                                        .done(function (e) {
                                            (o = arguments), a.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e);
                                        })
                                        .always(
                                            n &&
                                                function (e, t) {
                                                    a.each(function () {
                                                        n.apply(this, o || [e.responseText, t, e]);
                                                    });
                                                }
                                        ),
                                this
                            );
                        }),
                        (T.expr.pseudos.animated = function (e) {
                            return T.grep(T.timers, function (t) {
                                return e === t.elem;
                            }).length;
                        }),
                        (T.offset = {
                            setOffset: function (e, t, n) {
                                var i,
                                    r,
                                    o,
                                    a,
                                    s,
                                    l,
                                    u = T.css(e, "position"),
                                    c = T(e),
                                    f = {};
                                "static" === u && (e.style.position = "relative"),
                                    (s = c.offset()),
                                    (o = T.css(e, "top")),
                                    (l = T.css(e, "left")),
                                    ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? ((a = (i = c.position()).top), (r = i.left)) : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                                    v(t) && (t = t.call(e, n, T.extend({}, s))),
                                    null != t.top && (f.top = t.top - s.top + a),
                                    null != t.left && (f.left = t.left - s.left + r),
                                    "using" in t ? t.using.call(e, f) : c.css(f);
                            },
                        }),
                        T.fn.extend({
                            offset: function (e) {
                                if (arguments.length)
                                    return void 0 === e
                                        ? this
                                        : this.each(function (t) {
                                              T.offset.setOffset(this, e, t);
                                          });
                                var t,
                                    n,
                                    i = this[0];
                                return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                            },
                            position: function () {
                                if (this[0]) {
                                    var e,
                                        t,
                                        n,
                                        i = this[0],
                                        r = { top: 0, left: 0 };
                                    if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();
                                    else {
                                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position"); ) e = e.parentNode;
                                        e && e !== i && 1 === e.nodeType && (((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0)), (r.left += T.css(e, "borderLeftWidth", !0)));
                                    }
                                    return { top: t.top - r.top - T.css(i, "marginTop", !0), left: t.left - r.left - T.css(i, "marginLeft", !0) };
                                }
                            },
                            offsetParent: function () {
                                return this.map(function () {
                                    for (var e = this.offsetParent; e && "static" === T.css(e, "position"); ) e = e.offsetParent;
                                    return e || ae;
                                });
                            },
                        }),
                        T.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                            var n = "pageYOffset" === t;
                            T.fn[e] = function (i) {
                                return Q(
                                    this,
                                    function (e, i, r) {
                                        var o;
                                        if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === r)) return o ? o[t] : e[i];
                                        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (e[i] = r);
                                    },
                                    e,
                                    i,
                                    arguments.length
                                );
                            };
                        }),
                        T.each(["top", "left"], function (e, t) {
                            T.cssHooks[t] = Qe(m.pixelPosition, function (e, n) {
                                if (n) return (n = Ue(e, t)), Me.test(n) ? T(e).position()[t] + "px" : n;
                            });
                        }),
                        T.each({ Height: "height", Width: "width" }, function (e, t) {
                            T.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                                T.fn[i] = function (r, o) {
                                    var a = arguments.length && (n || "boolean" != typeof r),
                                        s = n || (!0 === r || !0 === o ? "margin" : "border");
                                    return Q(
                                        this,
                                        function (t, n, r) {
                                            var o;
                                            return y(t)
                                                ? 0 === i.indexOf("outer")
                                                    ? t["inner" + e]
                                                    : t.document.documentElement["client" + e]
                                                : 9 === t.nodeType
                                                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                                : void 0 === r
                                                ? T.css(t, n, s)
                                                : T.style(t, n, r, s);
                                        },
                                        t,
                                        a ? r : void 0,
                                        a
                                    );
                                };
                            });
                        }),
                        T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                            T.fn[t] = function (e) {
                                return this.on(t, e);
                            };
                        }),
                        T.fn.extend({
                            bind: function (e, t, n) {
                                return this.on(e, null, t, n);
                            },
                            unbind: function (e, t) {
                                return this.off(e, null, t);
                            },
                            delegate: function (e, t, n, i) {
                                return this.on(t, e, n, i);
                            },
                            undelegate: function (e, t, n) {
                                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                            },
                            hover: function (e, t) {
                                return this.mouseenter(e).mouseleave(t || e);
                            },
                        }),
                        T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (
                            e,
                            t
                        ) {
                            T.fn[t] = function (e, n) {
                                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                            };
                        });
                    var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    (T.proxy = function (e, t) {
                        var n, i, r;
                        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
                            return (
                                (i = s.call(arguments, 2)),
                                ((r = function () {
                                    return e.apply(t || this, i.concat(s.call(arguments)));
                                }).guid = e.guid = e.guid || T.guid++),
                                r
                            );
                    }),
                        (T.holdReady = function (e) {
                            e ? T.readyWait++ : T.ready(!0);
                        }),
                        (T.isArray = Array.isArray),
                        (T.parseJSON = JSON.parse),
                        (T.nodeName = A),
                        (T.isFunction = v),
                        (T.isWindow = y),
                        (T.camelCase = Y),
                        (T.type = x),
                        (T.now = Date.now),
                        (T.isNumeric = function (e) {
                            var t = T.type(e);
                            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                        }),
                        (T.trim = function (e) {
                            return null == e ? "" : (e + "").replace(Yt, "");
                        }),
                        void 0 ===
                            (n = function () {
                                return T;
                            }.apply(t, [])) || (e.exports = n);
                    var Kt = i.jQuery,
                        Jt = i.$;
                    return (
                        (T.noConflict = function (e) {
                            return i.$ === T && (i.$ = Jt), e && i.jQuery === T && (i.jQuery = Kt), T;
                        }),
                        void 0 === r && (i.jQuery = i.$ = T),
                        T
                    );
                });
            },
            8981: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, { default: () => oe });
                var i = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                    r = (function () {
                        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) if (i && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                        return 0;
                    })(),
                    o =
                        i && window.Promise
                            ? function (e) {
                                  var t = !1;
                                  return function () {
                                      t ||
                                          ((t = !0),
                                          window.Promise.resolve().then(function () {
                                              (t = !1), e();
                                          }));
                                  };
                              }
                            : function (e) {
                                  var t = !1;
                                  return function () {
                                      t ||
                                          ((t = !0),
                                          setTimeout(function () {
                                              (t = !1), e();
                                          }, r));
                                  };
                              };
                function a(e) {
                    return e && "[object Function]" === {}.toString.call(e);
                }
                function s(e, t) {
                    if (1 !== e.nodeType) return [];
                    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                    return t ? n[t] : n;
                }
                function l(e) {
                    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
                }
                function u(e) {
                    if (!e) return document.body;
                    switch (e.nodeName) {
                        case "HTML":
                        case "BODY":
                            return e.ownerDocument.body;
                        case "#document":
                            return e.body;
                    }
                    var t = s(e),
                        n = t.overflow,
                        i = t.overflowX,
                        r = t.overflowY;
                    return /(auto|scroll|overlay)/.test(n + r + i) ? e : u(l(e));
                }
                function c(e) {
                    return e && e.referenceNode ? e.referenceNode : e;
                }
                var f = i && !(!window.MSInputMethodContext || !document.documentMode),
                    d = i && /MSIE 10/.test(navigator.userAgent);
                function h(e) {
                    return 11 === e ? f : 10 === e ? d : f || d;
                }
                function p(e) {
                    if (!e) return document.documentElement;
                    for (var t = h(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; ) n = (e = e.nextElementSibling).offsetParent;
                    var i = n && n.nodeName;
                    return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? p(n) : n) : e ? e.ownerDocument.documentElement : document.documentElement;
                }
                function g(e) {
                    return null !== e.parentNode ? g(e.parentNode) : e;
                }
                function m(e, t) {
                    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                        i = n ? e : t,
                        r = n ? t : e,
                        o = document.createRange();
                    o.setStart(i, 0), o.setEnd(r, 0);
                    var a,
                        s,
                        l = o.commonAncestorContainer;
                    if ((e !== l && t !== l) || i.contains(r)) return "BODY" === (s = (a = l).nodeName) || ("HTML" !== s && p(a.firstElementChild) !== a) ? p(l) : l;
                    var u = g(e);
                    return u.host ? m(u.host, t) : m(e, g(t).host);
                }
                function v(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = "top" === t ? "scrollTop" : "scrollLeft",
                        i = e.nodeName;
                    if ("BODY" === i || "HTML" === i) {
                        var r = e.ownerDocument.documentElement,
                            o = e.ownerDocument.scrollingElement || r;
                        return o[n];
                    }
                    return e[n];
                }
                function y(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = v(t, "top"),
                        r = v(t, "left"),
                        o = n ? -1 : 1;
                    return (e.top += i * o), (e.bottom += i * o), (e.left += r * o), (e.right += r * o), e;
                }
                function b(e, t) {
                    var n = "x" === t ? "Left" : "Top",
                        i = "Left" === n ? "Right" : "Bottom";
                    return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"]);
                }
                function _(e, t, n, i) {
                    return Math.max(
                        t["offset" + e],
                        t["scroll" + e],
                        n["client" + e],
                        n["offset" + e],
                        n["scroll" + e],
                        h(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0
                    );
                }
                function w(e) {
                    var t = e.body,
                        n = e.documentElement,
                        i = h(10) && getComputedStyle(n);
                    return { height: _("Height", t, n, i), width: _("Width", t, n, i) };
                }
                var x = function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    },
                    E = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function (t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t;
                        };
                    })(),
                    T = function (e, t, n) {
                        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                    },
                    C =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                            }
                            return e;
                        };
                function S(e) {
                    return C({}, e, { right: e.left + e.width, bottom: e.top + e.height });
                }
                function k(e) {
                    var t = {};
                    try {
                        if (h(10)) {
                            t = e.getBoundingClientRect();
                            var n = v(e, "top"),
                                i = v(e, "left");
                            (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
                        } else t = e.getBoundingClientRect();
                    } catch (e) {}
                    var r = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
                        o = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
                        a = o.width || e.clientWidth || r.width,
                        l = o.height || e.clientHeight || r.height,
                        u = e.offsetWidth - a,
                        c = e.offsetHeight - l;
                    if (u || c) {
                        var f = s(e);
                        (u -= b(f, "x")), (c -= b(f, "y")), (r.width -= u), (r.height -= c);
                    }
                    return S(r);
                }
                function N(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = h(10),
                        r = "HTML" === t.nodeName,
                        o = k(e),
                        a = k(t),
                        l = u(e),
                        c = s(t),
                        f = parseFloat(c.borderTopWidth),
                        d = parseFloat(c.borderLeftWidth);
                    n && r && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
                    var p = S({ top: o.top - a.top - f, left: o.left - a.left - d, width: o.width, height: o.height });
                    if (((p.marginTop = 0), (p.marginLeft = 0), !i && r)) {
                        var g = parseFloat(c.marginTop),
                            m = parseFloat(c.marginLeft);
                        (p.top -= f - g), (p.bottom -= f - g), (p.left -= d - m), (p.right -= d - m), (p.marginTop = g), (p.marginLeft = m);
                    }
                    return (i && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (p = y(p, t)), p;
                }
                function D(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.ownerDocument.documentElement,
                        i = N(e, n),
                        r = Math.max(n.clientWidth, window.innerWidth || 0),
                        o = Math.max(n.clientHeight, window.innerHeight || 0),
                        a = t ? 0 : v(n),
                        s = t ? 0 : v(n, "left"),
                        l = { top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: r, height: o };
                    return S(l);
                }
                function A(e) {
                    var t = e.nodeName;
                    if ("BODY" === t || "HTML" === t) return !1;
                    if ("fixed" === s(e, "position")) return !0;
                    var n = l(e);
                    return !!n && A(n);
                }
                function j(e) {
                    if (!e || !e.parentElement || h()) return document.documentElement;
                    for (var t = e.parentElement; t && "none" === s(t, "transform"); ) t = t.parentElement;
                    return t || document.documentElement;
                }
                function O(e, t, n, i) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        o = { top: 0, left: 0 },
                        a = r ? j(e) : m(e, c(t));
                    if ("viewport" === i) o = D(a, r);
                    else {
                        var s = void 0;
                        "scrollParent" === i ? "BODY" === (s = u(l(t))).nodeName && (s = e.ownerDocument.documentElement) : (s = "window" === i ? e.ownerDocument.documentElement : i);
                        var f = N(s, a, r);
                        if ("HTML" !== s.nodeName || A(a)) o = f;
                        else {
                            var d = w(e.ownerDocument),
                                h = d.height,
                                p = d.width;
                            (o.top += f.top - f.marginTop), (o.bottom = h + f.top), (o.left += f.left - f.marginLeft), (o.right = p + f.left);
                        }
                    }
                    var g = "number" == typeof (n = n || 0);
                    return (o.left += g ? n : n.left || 0), (o.top += g ? n : n.top || 0), (o.right -= g ? n : n.right || 0), (o.bottom -= g ? n : n.bottom || 0), o;
                }
                function I(e) {
                    return e.width * e.height;
                }
                function L(e, t, n, i, r) {
                    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                    if (-1 === e.indexOf("auto")) return e;
                    var a = O(n, i, o, r),
                        s = {
                            top: { width: a.width, height: t.top - a.top },
                            right: { width: a.right - t.right, height: a.height },
                            bottom: { width: a.width, height: a.bottom - t.bottom },
                            left: { width: t.left - a.left, height: a.height },
                        },
                        l = Object.keys(s)
                            .map(function (e) {
                                return C({ key: e }, s[e], { area: I(s[e]) });
                            })
                            .sort(function (e, t) {
                                return t.area - e.area;
                            }),
                        u = l.filter(function (e) {
                            var t = e.width,
                                i = e.height;
                            return t >= n.clientWidth && i >= n.clientHeight;
                        }),
                        c = u.length > 0 ? u[0].key : l[0].key,
                        f = e.split("-")[1];
                    return c + (f ? "-" + f : "");
                }
                function P(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        r = i ? j(t) : m(t, c(n));
                    return N(n, r, i);
                }
                function q(e) {
                    var t = e.ownerDocument.defaultView.getComputedStyle(e),
                        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                        i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                    return { width: e.offsetWidth + i, height: e.offsetHeight + n };
                }
                function H(e) {
                    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
                    return e.replace(/left|right|bottom|top/g, function (e) {
                        return t[e];
                    });
                }
                function R(e, t, n) {
                    n = n.split("-")[0];
                    var i = q(e),
                        r = { width: i.width, height: i.height },
                        o = -1 !== ["right", "left"].indexOf(n),
                        a = o ? "top" : "left",
                        s = o ? "left" : "top",
                        l = o ? "height" : "width",
                        u = o ? "width" : "height";
                    return (r[a] = t[a] + t[l] / 2 - i[l] / 2), (r[s] = n === s ? t[s] - i[u] : t[H(s)]), r;
                }
                function F(e, t) {
                    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
                }
                function M(e, t, n) {
                    return (
                        (void 0 === n
                            ? e
                            : e.slice(
                                  0,
                                  (function (e, t, n) {
                                      if (Array.prototype.findIndex)
                                          return e.findIndex(function (e) {
                                              return e[t] === n;
                                          });
                                      var i = F(e, function (e) {
                                          return e[t] === n;
                                      });
                                      return e.indexOf(i);
                                  })(e, "name", n)
                              )
                        ).forEach(function (e) {
                            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                            var n = e.function || e.fn;
                            e.enabled && a(n) && ((t.offsets.popper = S(t.offsets.popper)), (t.offsets.reference = S(t.offsets.reference)), (t = n(t, e)));
                        }),
                        t
                    );
                }
                function $() {
                    if (!this.state.isDestroyed) {
                        var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                        (e.offsets.reference = P(this.state, this.popper, this.reference, this.options.positionFixed)),
                            (e.placement = L(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                            (e.originalPlacement = e.placement),
                            (e.positionFixed = this.options.positionFixed),
                            (e.offsets.popper = R(this.popper, e.offsets.reference, e.placement)),
                            (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                            (e = M(this.modifiers, e)),
                            this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
                    }
                }
                function B(e, t) {
                    return e.some(function (e) {
                        var n = e.name;
                        return e.enabled && n === t;
                    });
                }
                function W(e) {
                    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                        var r = t[i],
                            o = r ? "" + r + n : e;
                        if (void 0 !== document.body.style[o]) return o;
                    }
                    return null;
                }
                function U() {
                    return (
                        (this.state.isDestroyed = !0),
                        B(this.modifiers, "applyStyle") &&
                            (this.popper.removeAttribute("x-placement"),
                            (this.popper.style.position = ""),
                            (this.popper.style.top = ""),
                            (this.popper.style.left = ""),
                            (this.popper.style.right = ""),
                            (this.popper.style.bottom = ""),
                            (this.popper.style.willChange = ""),
                            (this.popper.style[W("transform")] = "")),
                        this.disableEventListeners(),
                        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                        this
                    );
                }
                function Q(e) {
                    var t = e.ownerDocument;
                    return t ? t.defaultView : window;
                }
                function z(e, t, n, i) {
                    var r = "BODY" === e.nodeName,
                        o = r ? e.ownerDocument.defaultView : e;
                    o.addEventListener(t, n, { passive: !0 }), r || z(u(o.parentNode), t, n, i), i.push(o);
                }
                function V(e, t, n, i) {
                    (n.updateBound = i), Q(e).addEventListener("resize", n.updateBound, { passive: !0 });
                    var r = u(e);
                    return z(r, "scroll", n.updateBound, n.scrollParents), (n.scrollElement = r), (n.eventsEnabled = !0), n;
                }
                function X() {
                    this.state.eventsEnabled || (this.state = V(this.reference, this.options, this.state, this.scheduleUpdate));
                }
                function Y() {
                    var e, t;
                    this.state.eventsEnabled &&
                        (cancelAnimationFrame(this.scheduleUpdate),
                        (this.state =
                            ((e = this.reference),
                            (t = this.state),
                            Q(e).removeEventListener("resize", t.updateBound),
                            t.scrollParents.forEach(function (e) {
                                e.removeEventListener("scroll", t.updateBound);
                            }),
                            (t.updateBound = null),
                            (t.scrollParents = []),
                            (t.scrollElement = null),
                            (t.eventsEnabled = !1),
                            t)));
                }
                function K(e) {
                    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
                }
                function J(e, t) {
                    Object.keys(t).forEach(function (n) {
                        var i = "";
                        -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && K(t[n]) && (i = "px"), (e.style[n] = t[n] + i);
                    });
                }
                var G = i && /Firefox/i.test(navigator.userAgent);
                function Z(e, t, n) {
                    var i = F(e, function (e) {
                            return e.name === t;
                        }),
                        r =
                            !!i &&
                            e.some(function (e) {
                                return e.name === n && e.enabled && e.order < i.order;
                            });
                    if (!r) {
                        var o = "`" + t + "`",
                            a = "`" + n + "`";
                        console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
                    }
                    return r;
                }
                var ee = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                    te = ee.slice(3);
                function ne(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = te.indexOf(e),
                        i = te.slice(n + 1).concat(te.slice(0, n));
                    return t ? i.reverse() : i;
                }
                var ie = {
                        placement: "bottom",
                        positionFixed: !1,
                        eventsEnabled: !0,
                        removeOnDestroy: !1,
                        onCreate: function () {},
                        onUpdate: function () {},
                        modifiers: {
                            shift: {
                                order: 100,
                                enabled: !0,
                                fn: function (e) {
                                    var t = e.placement,
                                        n = t.split("-")[0],
                                        i = t.split("-")[1];
                                    if (i) {
                                        var r = e.offsets,
                                            o = r.reference,
                                            a = r.popper,
                                            s = -1 !== ["bottom", "top"].indexOf(n),
                                            l = s ? "left" : "top",
                                            u = s ? "width" : "height",
                                            c = { start: T({}, l, o[l]), end: T({}, l, o[l] + o[u] - a[u]) };
                                        e.offsets.popper = C({}, a, c[i]);
                                    }
                                    return e;
                                },
                            },
                            offset: {
                                order: 200,
                                enabled: !0,
                                fn: function (e, t) {
                                    var n,
                                        i = t.offset,
                                        r = e.placement,
                                        o = e.offsets,
                                        a = o.popper,
                                        s = o.reference,
                                        l = r.split("-")[0];
                                    return (
                                        (n = K(+i)
                                            ? [+i, 0]
                                            : (function (e, t, n, i) {
                                                  var r = [0, 0],
                                                      o = -1 !== ["right", "left"].indexOf(i),
                                                      a = e.split(/(\+|\-)/).map(function (e) {
                                                          return e.trim();
                                                      }),
                                                      s = a.indexOf(
                                                          F(a, function (e) {
                                                              return -1 !== e.search(/,|\s/);
                                                          })
                                                      );
                                                  a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                                                  var l = /\s*,\s*|\s+/,
                                                      u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                                                  return (
                                                      (u = u.map(function (e, i) {
                                                          var r = (1 === i ? !o : o) ? "height" : "width",
                                                              a = !1;
                                                          return e
                                                              .reduce(function (e, t) {
                                                                  return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (a = !0), e) : a ? ((e[e.length - 1] += t), (a = !1), e) : e.concat(t);
                                                              }, [])
                                                              .map(function (e) {
                                                                  return (function (e, t, n, i) {
                                                                      var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                                                          o = +r[1],
                                                                          a = r[2];
                                                                      if (!o) return e;
                                                                      if (0 === a.indexOf("%")) {
                                                                          var s = void 0;
                                                                          switch (a) {
                                                                              case "%p":
                                                                                  s = n;
                                                                                  break;
                                                                              case "%":
                                                                              case "%r":
                                                                              default:
                                                                                  s = i;
                                                                          }
                                                                          return (S(s)[t] / 100) * o;
                                                                      }
                                                                      return "vh" === a || "vw" === a
                                                                          ? (("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) /
                                                                                100) *
                                                                                o
                                                                          : o;
                                                                  })(e, r, t, n);
                                                              });
                                                      })).forEach(function (e, t) {
                                                          e.forEach(function (n, i) {
                                                              K(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1));
                                                          });
                                                      }),
                                                      r
                                                  );
                                              })(i, a, s, l)),
                                        "left" === l
                                            ? ((a.top += n[0]), (a.left -= n[1]))
                                            : "right" === l
                                            ? ((a.top += n[0]), (a.left += n[1]))
                                            : "top" === l
                                            ? ((a.left += n[0]), (a.top -= n[1]))
                                            : "bottom" === l && ((a.left += n[0]), (a.top += n[1])),
                                        (e.popper = a),
                                        e
                                    );
                                },
                                offset: 0,
                            },
                            preventOverflow: {
                                order: 300,
                                enabled: !0,
                                fn: function (e, t) {
                                    var n = t.boundariesElement || p(e.instance.popper);
                                    e.instance.reference === n && (n = p(n));
                                    var i = W("transform"),
                                        r = e.instance.popper.style,
                                        o = r.top,
                                        a = r.left,
                                        s = r[i];
                                    (r.top = ""), (r.left = ""), (r[i] = "");
                                    var l = O(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                    (r.top = o), (r.left = a), (r[i] = s), (t.boundaries = l);
                                    var u = t.priority,
                                        c = e.offsets.popper,
                                        f = {
                                            primary: function (e) {
                                                var n = c[e];
                                                return c[e] < l[e] && !t.escapeWithReference && (n = Math.max(c[e], l[e])), T({}, e, n);
                                            },
                                            secondary: function (e) {
                                                var n = "right" === e ? "left" : "top",
                                                    i = c[n];
                                                return c[e] > l[e] && !t.escapeWithReference && (i = Math.min(c[n], l[e] - ("right" === e ? c.width : c.height))), T({}, n, i);
                                            },
                                        };
                                    return (
                                        u.forEach(function (e) {
                                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                            c = C({}, c, f[t](e));
                                        }),
                                        (e.offsets.popper = c),
                                        e
                                    );
                                },
                                priority: ["left", "right", "top", "bottom"],
                                padding: 5,
                                boundariesElement: "scrollParent",
                            },
                            keepTogether: {
                                order: 400,
                                enabled: !0,
                                fn: function (e) {
                                    var t = e.offsets,
                                        n = t.popper,
                                        i = t.reference,
                                        r = e.placement.split("-")[0],
                                        o = Math.floor,
                                        a = -1 !== ["top", "bottom"].indexOf(r),
                                        s = a ? "right" : "bottom",
                                        l = a ? "left" : "top",
                                        u = a ? "width" : "height";
                                    return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e;
                                },
                            },
                            arrow: {
                                order: 500,
                                enabled: !0,
                                fn: function (e, t) {
                                    var n;
                                    if (!Z(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                    var i = t.element;
                                    if ("string" == typeof i) {
                                        if (!(i = e.instance.popper.querySelector(i))) return e;
                                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                    var r = e.placement.split("-")[0],
                                        o = e.offsets,
                                        a = o.popper,
                                        l = o.reference,
                                        u = -1 !== ["left", "right"].indexOf(r),
                                        c = u ? "height" : "width",
                                        f = u ? "Top" : "Left",
                                        d = f.toLowerCase(),
                                        h = u ? "left" : "top",
                                        p = u ? "bottom" : "right",
                                        g = q(i)[c];
                                    l[p] - g < a[d] && (e.offsets.popper[d] -= a[d] - (l[p] - g)), l[d] + g > a[p] && (e.offsets.popper[d] += l[d] + g - a[p]), (e.offsets.popper = S(e.offsets.popper));
                                    var m = l[d] + l[c] / 2 - g / 2,
                                        v = s(e.instance.popper),
                                        y = parseFloat(v["margin" + f]),
                                        b = parseFloat(v["border" + f + "Width"]),
                                        _ = m - e.offsets.popper[d] - y - b;
                                    return (_ = Math.max(Math.min(a[c] - g, _), 0)), (e.arrowElement = i), (e.offsets.arrow = (T((n = {}), d, Math.round(_)), T(n, h, ""), n)), e;
                                },
                                element: "[x-arrow]",
                            },
                            flip: {
                                order: 600,
                                enabled: !0,
                                fn: function (e, t) {
                                    if (B(e.instance.modifiers, "inner")) return e;
                                    if (e.flipped && e.placement === e.originalPlacement) return e;
                                    var n = O(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                        i = e.placement.split("-")[0],
                                        r = H(i),
                                        o = e.placement.split("-")[1] || "",
                                        a = [];
                                    switch (t.behavior) {
                                        case "flip":
                                            a = [i, r];
                                            break;
                                        case "clockwise":
                                            a = ne(i);
                                            break;
                                        case "counterclockwise":
                                            a = ne(i, !0);
                                            break;
                                        default:
                                            a = t.behavior;
                                    }
                                    return (
                                        a.forEach(function (s, l) {
                                            if (i !== s || a.length === l + 1) return e;
                                            (i = e.placement.split("-")[0]), (r = H(i));
                                            var u = e.offsets.popper,
                                                c = e.offsets.reference,
                                                f = Math.floor,
                                                d = ("left" === i && f(u.right) > f(c.left)) || ("right" === i && f(u.left) < f(c.right)) || ("top" === i && f(u.bottom) > f(c.top)) || ("bottom" === i && f(u.top) < f(c.bottom)),
                                                h = f(u.left) < f(n.left),
                                                p = f(u.right) > f(n.right),
                                                g = f(u.top) < f(n.top),
                                                m = f(u.bottom) > f(n.bottom),
                                                v = ("left" === i && h) || ("right" === i && p) || ("top" === i && g) || ("bottom" === i && m),
                                                y = -1 !== ["top", "bottom"].indexOf(i),
                                                b = !!t.flipVariations && ((y && "start" === o && h) || (y && "end" === o && p) || (!y && "start" === o && g) || (!y && "end" === o && m)),
                                                _ = !!t.flipVariationsByContent && ((y && "start" === o && p) || (y && "end" === o && h) || (!y && "start" === o && m) || (!y && "end" === o && g)),
                                                w = b || _;
                                            (d || v || w) &&
                                                ((e.flipped = !0),
                                                (d || v) && (i = a[l + 1]),
                                                w &&
                                                    (o = (function (e) {
                                                        return "end" === e ? "start" : "start" === e ? "end" : e;
                                                    })(o)),
                                                (e.placement = i + (o ? "-" + o : "")),
                                                (e.offsets.popper = C({}, e.offsets.popper, R(e.instance.popper, e.offsets.reference, e.placement))),
                                                (e = M(e.instance.modifiers, e, "flip")));
                                        }),
                                        e
                                    );
                                },
                                behavior: "flip",
                                padding: 5,
                                boundariesElement: "viewport",
                                flipVariations: !1,
                                flipVariationsByContent: !1,
                            },
                            inner: {
                                order: 700,
                                enabled: !1,
                                fn: function (e) {
                                    var t = e.placement,
                                        n = t.split("-")[0],
                                        i = e.offsets,
                                        r = i.popper,
                                        o = i.reference,
                                        a = -1 !== ["left", "right"].indexOf(n),
                                        s = -1 === ["top", "left"].indexOf(n);
                                    return (r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0)), (e.placement = H(t)), (e.offsets.popper = S(r)), e;
                                },
                            },
                            hide: {
                                order: 800,
                                enabled: !0,
                                fn: function (e) {
                                    if (!Z(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                    var t = e.offsets.reference,
                                        n = F(e.instance.modifiers, function (e) {
                                            return "preventOverflow" === e.name;
                                        }).boundaries;
                                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                        if (!0 === e.hide) return e;
                                        (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                                    } else {
                                        if (!1 === e.hide) return e;
                                        (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                                    }
                                    return e;
                                },
                            },
                            computeStyle: {
                                order: 850,
                                enabled: !0,
                                fn: function (e, t) {
                                    var n = t.x,
                                        i = t.y,
                                        r = e.offsets.popper,
                                        o = F(e.instance.modifiers, function (e) {
                                            return "applyStyle" === e.name;
                                        }).gpuAcceleration;
                                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                    var a,
                                        s,
                                        l = void 0 !== o ? o : t.gpuAcceleration,
                                        u = p(e.instance.popper),
                                        c = k(u),
                                        f = { position: r.position },
                                        d = (function (e, t) {
                                            var n = e.offsets,
                                                i = n.popper,
                                                r = n.reference,
                                                o = Math.round,
                                                a = Math.floor,
                                                s = function (e) {
                                                    return e;
                                                },
                                                l = o(r.width),
                                                u = o(i.width),
                                                c = -1 !== ["left", "right"].indexOf(e.placement),
                                                f = -1 !== e.placement.indexOf("-"),
                                                d = t ? (c || f || l % 2 == u % 2 ? o : a) : s,
                                                h = t ? o : s;
                                            return { left: d(l % 2 == 1 && u % 2 == 1 && !f && t ? i.left - 1 : i.left), top: h(i.top), bottom: h(i.bottom), right: d(i.right) };
                                        })(e, window.devicePixelRatio < 2 || !G),
                                        h = "bottom" === n ? "top" : "bottom",
                                        g = "right" === i ? "left" : "right",
                                        m = W("transform");
                                    if (
                                        ((s = "bottom" === h ? ("HTML" === u.nodeName ? -u.clientHeight + d.bottom : -c.height + d.bottom) : d.top),
                                        (a = "right" === g ? ("HTML" === u.nodeName ? -u.clientWidth + d.right : -c.width + d.right) : d.left),
                                        l && m)
                                    )
                                        (f[m] = "translate3d(" + a + "px, " + s + "px, 0)"), (f[h] = 0), (f[g] = 0), (f.willChange = "transform");
                                    else {
                                        var v = "bottom" === h ? -1 : 1,
                                            y = "right" === g ? -1 : 1;
                                        (f[h] = s * v), (f[g] = a * y), (f.willChange = h + ", " + g);
                                    }
                                    var b = { "x-placement": e.placement };
                                    return (e.attributes = C({}, b, e.attributes)), (e.styles = C({}, f, e.styles)), (e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles)), e;
                                },
                                gpuAcceleration: !0,
                                x: "bottom",
                                y: "right",
                            },
                            applyStyle: {
                                order: 900,
                                enabled: !0,
                                fn: function (e) {
                                    var t, n;
                                    return (
                                        J(e.instance.popper, e.styles),
                                        (t = e.instance.popper),
                                        (n = e.attributes),
                                        Object.keys(n).forEach(function (e) {
                                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                                        }),
                                        e.arrowElement && Object.keys(e.arrowStyles).length && J(e.arrowElement, e.arrowStyles),
                                        e
                                    );
                                },
                                onLoad: function (e, t, n, i, r) {
                                    var o = P(r, t, e, n.positionFixed),
                                        a = L(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                    return t.setAttribute("x-placement", a), J(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
                                },
                                gpuAcceleration: void 0,
                            },
                        },
                    },
                    re = (function () {
                        function e(t, n) {
                            var i = this,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            x(this, e),
                                (this.scheduleUpdate = function () {
                                    return requestAnimationFrame(i.update);
                                }),
                                (this.update = o(this.update.bind(this))),
                                (this.options = C({}, e.Defaults, r)),
                                (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                                (this.reference = t && t.jquery ? t[0] : t),
                                (this.popper = n && n.jquery ? n[0] : n),
                                (this.options.modifiers = {}),
                                Object.keys(C({}, e.Defaults.modifiers, r.modifiers)).forEach(function (t) {
                                    i.options.modifiers[t] = C({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {});
                                }),
                                (this.modifiers = Object.keys(this.options.modifiers)
                                    .map(function (e) {
                                        return C({ name: e }, i.options.modifiers[e]);
                                    })
                                    .sort(function (e, t) {
                                        return e.order - t.order;
                                    })),
                                this.modifiers.forEach(function (e) {
                                    e.enabled && a(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state);
                                }),
                                this.update();
                            var s = this.options.eventsEnabled;
                            s && this.enableEventListeners(), (this.state.eventsEnabled = s);
                        }
                        return (
                            E(e, [
                                {
                                    key: "update",
                                    value: function () {
                                        return $.call(this);
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        return U.call(this);
                                    },
                                },
                                {
                                    key: "enableEventListeners",
                                    value: function () {
                                        return X.call(this);
                                    },
                                },
                                {
                                    key: "disableEventListeners",
                                    value: function () {
                                        return Y.call(this);
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                (re.Utils = ("undefined" != typeof window ? window : n.g).PopperUtils), (re.placements = ee), (re.Defaults = ie);
                const oe = re;
            },
        },
        t = {};
    function n(i) {
        var r = t[i];
        if (void 0 !== r) return r.exports;
        var o = (t[i] = { exports: {} });
        return e[i].call(o.exports, o, o.exports, n), o.exports;
    }
    (n.d = (e, t) => {
        for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
        (n.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (() => {
            "use strict";
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                }
            }
            var t = (function () {
                function t() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, t);
                }
                var n, i;
                return (
                    (n = t),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                $(document).on("change", "#address_id", function (e) {
                                    "new" !== $(e.currentTarget).val()
                                        ? ($(".address-item-selected")
                                              .show()
                                              .html($(".list-available-address .address-item-wrapper[data-id=" + $(e.currentTarget).val() + "]").html()),
                                          $(".address-form-wrapper").hide())
                                        : ($(".address-item-selected").hide(), $(".address-form-wrapper").show());
                                }),
                                    $(document).on("click", "#create_account", function (e) {
                                        $(e.currentTarget).is(":checked") ? $(".password-group").fadeIn() : $(".password-group").fadeOut();
                                    });
                            },
                        },
                    ]) && e(n.prototype, i),
                    t
                );
            })();
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                }
            }
            var r = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                }
                var t, n;
                return (
                    (t = e),
                    (n = [
                        {
                            key: "init",
                            value: function () {
                                $(document).on("click", ".btn-open-coupon-form", function (e) {
                                    e.preventDefault(), $(document).find(".coupon-wrapper").toggle();
                                }),
                                    $(".coupon-wrapper .coupon-code").keypress(function (e) {
                                        if (13 === e.keyCode) return $(".apply-coupon-code").trigger("click"), e.preventDefault(), e.stopPropagation(), !1;
                                    }),
                                    $(document).on("click", ".apply-coupon-code", function (e) {
                                        e.preventDefault();
                                        var t = $(e.currentTarget);
                                        t.find("i").remove(),
                                            t.html('<i class="fa fa-spin fa-spinner"></i> ' + t.html()),
                                            $.ajax({
                                                url: t.data("url"),
                                                type: "POST",
                                                data: { coupon_code: t.closest(".coupon-wrapper").find(".coupon-code").val(), token: $("#checkout-token").val() },
                                                headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
                                                success: function (e) {
                                                    if (e.error) $(".coupon-error-msg .text-danger").text(e.message), t.find("i").remove();
                                                    else {
                                                        var n = "#main-checkout-product-info";
                                                        $("#main-checkout-product-info").is(":hidden") && (n = "#main-checkout-product-info-mobile"),
                                                            $(n).load(window.location.href + "?applied_coupon=1 " + n + " > *", function () {
                                                                t.find("i").remove();
                                                            });
                                                    }
                                                },
                                                error: function (e) {
                                                    void 0 !== e.responseJSON
                                                        ? "undefined" !== e.responseJSON.errors
                                                            ? $.each(e.responseJSON.errors, function (e, t) {
                                                                  $.each(t, function (e, t) {
                                                                      $(".coupon-error-msg .text-danger").text(t);
                                                                  });
                                                              })
                                                            : void 0 !== e.responseJSON.message && $(".coupon-error-msg .text-danger").text(e.responseJSON.message)
                                                        : $(".coupon-error-msg .text-danger").text(e.status.text),
                                                        t.find("i").remove();
                                                },
                                            });
                                    }),
                                    $(document).on("click", ".remove-coupon-code", function (e) {
                                        e.preventDefault();
                                        var t = $(e.currentTarget);
                                        t.find("i").remove(),
                                            t.html('<i class="fa fa-spin fa-spinner"></i> ' + t.html()),
                                            $.ajax({
                                                url: t.data("url"),
                                                type: "POST",
                                                data: { token: $("#checkout-token").val() },
                                                headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
                                                success: function (e) {
                                                    if (e.error) $(".coupon-error-msg .text-danger").text(e.message), t.find("i").remove();
                                                    else {
                                                        var n = "#main-checkout-product-info";
                                                        $("#main-checkout-product-info").is(":hidden") && (n = "#main-checkout-product-info-mobile"),
                                                            $(n).load(window.location.href + " " + n + " > *", function () {
                                                                t.find("i").remove();
                                                            });
                                                    }
                                                },
                                                error: function (e) {
                                                    void 0 !== e.responseJSON
                                                        ? "undefined" !== e.responseJSON.errors
                                                            ? $.each(e.responseJSON.errors, function (e, t) {
                                                                  $.each(t, function (e, t) {
                                                                      $(".coupon-error-msg .text-danger").text(t);
                                                                  });
                                                              })
                                                            : void 0 !== e.responseJSON.message && $(".coupon-error-msg .text-danger").text(e.responseJSON.message)
                                                        : $(".coupon-error-msg .text-danger").text(e.status.text),
                                                        t.find("i").remove();
                                                },
                                            });
                                    });
                            },
                        },
                    ]) && i(t.prototype, n),
                    e
                );
            })();
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                }
            }
            try {
                (window.$ = window.jQuery = n(9755)), n(3734);
            } catch (e) {}
            var a = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        new t().init(),
                        new r().init();
                }
                var n, i, a;
                return (
                    (n = e),
                    (a = [
                        {
                            key: "showNotice",
                            value: function (e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                                if (
                                    (toastr.clear(),
                                    (toastr.options = {
                                        closeButton: !0,
                                        positionClass: "toast-bottom-right",
                                        onclick: null,
                                        showDuration: 1e3,
                                        hideDuration: 1e3,
                                        timeOut: 1e4,
                                        extendedTimeOut: 1e3,
                                        showEasing: "swing",
                                        hideEasing: "linear",
                                        showMethod: "fadeIn",
                                        hideMethod: "fadeOut",
                                    }),
                                    !n)
                                )
                                    switch (e) {
                                        case "error":
                                            n = window.messages.error_header;
                                            break;
                                        case "success":
                                            n = window.messages.success_header;
                                    }
                                toastr[e](t, n);
                            },
                        },
                    ]),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                var e,
                                    t = "#main-checkout-product-info";
                                (e = $(document).find("input[name=shipping_method]:checked").first()).length || (e = $(document).find("input[name=shipping_method]").first()),
                                    e.length &&
                                        (e.trigger("click"),
                                        $(".payment-info-loading").show(),
                                        $(".mobile-total").text("..."),
                                        $(t).load(window.location.href + "?shipping_method=" + e.val() + "&shipping_option=" + e.data("option") + " " + t + " > *", function () {
                                            $(".payment-info-loading").hide();
                                        }));
                                var n = function () {
                                    var e = $(t).find("input.shipping_method_input");
                                    if (e.length) {
                                        var n = { shipping_method: {}, shipping_option: {} },
                                            i = [];
                                        e.map(function (e, t) {
                                            var r = $(t).filter(":checked").val(),
                                                o = $(t).data("id");
                                            i.includes(o) || i.push(o), r && ((n.shipping_method[o] = r), (n.shipping_option[o] = $(t).data("option")));
                                        }),
                                            Object.keys(n.shipping_method).length !== i.length &&
                                                e.map(function (e, t) {
                                                    var i = $(t).data("id");
                                                    n.shipping_method[i] || ((n.shipping_method[i] = $(t).val()), (n.shipping_option[i] = $(t).data("option")), $(t).prop("checked", !0).trigger("change"));
                                                }),
                                            $(".payment-info-loading").show(),
                                            $(t).load(window.location.href + "?" + $.param(n) + " " + t + " > *", function () {
                                                $(".payment-info-loading").hide();
                                            });
                                    }
                                };
                                n(),
                                    $(document).on("change", "input.shipping_method_input", function () {
                                        n();
                                    }),
                                    $(document).on("change", "input[name=shipping_method]", function (e) {
                                        var n = $(e.currentTarget);
                                        $("input[name=shipping_option]").val(n.data("option")),
                                            $(".payment-info-loading").show(),
                                            $(".mobile-total").text("..."),
                                            $(t).load(window.location.href + "?shipping_method=" + n.val() + "&shipping_option=" + n.data("option") + " " + t + " > *", function () {
                                                $(".payment-info-loading").hide();
                                            });
                                    }),
                                    $(document).on("change", ".customer-address-payment-form .address-control-item", function () {
                                        var e = $(this);
                                        ($("#address_id").val() || ($("#address_country").val() && $("#address_state").val() && $("#address_city").val() && $("#address_address").val())) &&
                                            $.ajax({
                                                type: "POST",
                                                cache: !1,
                                                url: $("#save-shipping-information-url").val(),
                                                data: new FormData(e.closest("form")[0]),
                                                contentType: !1,
                                                processData: !1,
                                                success: function (e) {
                                                    if (!e.error) {
                                                        $(".shipping-info-loading").show();
                                                        var t = $("#shipping-method-wrapper");
                                                        t.length &&
                                                            t.load(window.location.href + " #shipping-method-wrapper > *", function () {
                                                                $(document).find("input[name=shipping_method]:first-child").trigger("click"), $(".shipping-info-loading").hide();
                                                            }),
                                                            n();
                                                    }
                                                },
                                                error: function (e) {
                                                    console.log(e);
                                                },
                                            });
                                    });
                            },
                        },
                    ]) && o(n.prototype, i),
                    a && o(n, a),
                    e
                );
            })();
            $(document).ready(function () {
                new a().init(), (window.MainCheckout = a);
            });
        })();
})();
