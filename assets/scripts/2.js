! function () {
    var e, t, n, a = {
            4789: function (e, t, n) {
                var a = {
                    "./asset-hyperlink.json": 97885,
                    "./blockquote.json": 64061,
                    "./document.json": 18071,
                    "./embedded-asset-block.json": 66241,
                    "./embedded-entry-block.json": 16649,
                    "./embedded-entry-inline.json": 38477,
                    "./embedded-resource-block.json": 48119,
                    "./embedded-resource-inline.json": 43703,
                    "./entry-hyperlink.json": 41297,
                    "./heading-1.json": 85018,
                    "./heading-2.json": 26507,
                    "./heading-3.json": 98920,
                    "./heading-4.json": 12465,
                    "./heading-5.json": 88470,
                    "./heading-6.json": 34839,
                    "./hr.json": 97828,
                    "./hyperlink.json": 9156,
                    "./list-item.json": 53110,
                    "./ordered-list.json": 22658,
                    "./paragraph.json": 91944,
                    "./resource-hyperlink.json": 51313,
                    "./table-cell.json": 94013,
                    "./table-header-cell.json": 74599,
                    "./table-row.json": 42247,
                    "./table.json": 78234,
                    "./text.json": 74957,
                    "./unordered-list.json": 40133
                };

                function r(e) {
                    var t = o(e);
                    return n(t)
                }

                function o(e) {
                    if (!n.o(a, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return a[e]
                }
                r.keys = function () {
                    return Object.keys(a)
                }, r.resolve = o, e.exports = r, r.id = 4789
            },
            69065: function (e, t, n) {
                "use strict";
                n(97107), n(38909), n(16411);
                var a = n(14041),
                    r = n(25873),
                    o = (n(58070), n(5305), n(79620), n(69375), n(48404), n(75668), n(7678), n(81909), n(68291), n(80630), n(81045), n(30163), n(5350), n(18867), n(24586)),
                    l = n(1063),
                    i = n(15982),
                    c = n(50983),
                    s = n(11407),
                    u = n(45573),
                    m = n(29331),
                    d = n(75238),
                    g = n(16897);

                function p(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }
                var h = function (e) {
                        i.Cp(e)
                    },
                    v = function (e) {
                        try {
                            i.gV({
                                id: String(e)
                            })
                        } catch (e) {
                            return
                        }
                    },
                    f = function (e) {
                        try {
                            var t = e.channel,
                                n = e.country,
                                a = e.platform,
                                r = e.maintenance;
                            i.o("Game Parameters", {
                                channel: t,
                                country: n,
                                platform: a,
                                maintenance: r
                            })
                        } catch (e) {
                            return
                        }
                    },
                    y = (n(39148), n(29911), n(33873), n(56528), n(48605), n(56569), n(53795), n(8697), n(8096), n(10206), n(10568), n(11011), n(14293), n(29793), n(55367), n(47010), n(17545)),
                    E = n(83705),
                    b = n(90689),
                    w = n(29296),
                    I = n(1087),
                    N = (n(62234), n(98376), n(39428), n(91102)),
                    k = n(97151);

                function A(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function T(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? A(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function O() {
                    O = function (e, t) {
                        return new n(e, void 0, t)
                    };
                    var e = RegExp.prototype,
                        t = new WeakMap;

                    function n(e, a, r) {
                        var o = RegExp(e, a);
                        return t.set(o, r || t.get(e)), (0, I.A)(o, n.prototype)
                    }

                    function a(e, n) {
                        var a = t.get(n);
                        return Object.keys(a).reduce((function (t, n) {
                            var r = a[n];
                            if ("number" == typeof r) t[n] = e[r];
                            else {
                                for (var o = 0; void 0 === e[r[o]] && o + 1 < r.length;) o++;
                                t[n] = e[r[o]]
                            }
                            return t
                        }), Object.create(null))
                    }
                    return (0, w.A)(n, RegExp), n.prototype.exec = function (t) {
                        var n = e.exec.call(this, t);
                        if (n) {
                            n.groups = a(n, this);
                            var r = n.indices;
                            r && (r.groups = a(r, this))
                        }
                        return n
                    }, n.prototype[Symbol.replace] = function (n, r) {
                        if ("string" == typeof r) {
                            var o = t.get(this);
                            return e[Symbol.replace].call(this, n, r.replace(/\$<([^>]+)(>|$)/g, (function (e, t, n) {
                                if ("" === n) return e;
                                var a = o[t];
                                return Array.isArray(a) ? "$" + a.join("$") : "number" == typeof a ? "$" + a : ""
                            })))
                        }
                        if ("function" == typeof r) {
                            var l = this;
                            return e[Symbol.replace].call(this, n, (function () {
                                var e = arguments;
                                return "object" != (0, y.A)(e[e.length - 1]) && (e = [].slice.call(e)).push(a(e, l)), r.apply(this, e)
                            }))
                        }
                        return e[Symbol.replace].call(this, n, r)
                    }, O.apply(this, arguments)
                }
                var S = {
                        minimumVisitLength: 5,
                        heartbeatDelay: 20
                    },
                    P = ["news", "community", "esport"];

                function j(e) {
                    (0, N.nk)([{
                        schema: "iglu:com.supercell/user_identification/jsonschema/1-0-0",
                        data: {
                            user_id_type: "avatar_id",
                            user_id: String(e)
                        }
                    }])
                }
                var C = function (e) {
                        return {
                            schema: "iglu:com.supercell/inbox_page/jsonschema/1-0-1",
                            data: e
                        }
                    },
                    F = null,
                    z = function (e, t) {
                        ! function (e) {
                            F && (0, N.Ae)([C(F)]), (0, N.nk)([C(e)]), F = e
                        }(t), (0, N.oe)({
                            title: e
                        })
                    },
                    x = O(/\/(\w+)\/(\w+)/, {
                        locale: 1,
                        tab: 2
                    }),
                    B = O(/\/(\w+)\/(\w+)\/([\w_-]+)\//, {
                        locale: 1,
                        tab: 2,
                        articleId: 3
                    }),
                    L = function () {},
                    D = a.createContext({
                        trackButtonClick: L,
                        trackImpression: L,
                        trackLinkClick: L,
                        trackPageView: L,
                        setUser: L,
                        setMaintenance: L
                    }),
                    _ = function (e) {
                        var t, n, r = e.children,
                            o = e.config,
                            l = a.useState([]),
                            i = (0, b.A)(l, 2),
                            c = i[0],
                            s = i[1],
                            u = a.useState(),
                            m = (0, b.A)(u, 2),
                            d = m[0],
                            g = m[1],
                            p = a.useRef([]),
                            h = !!o.appId && !!o.collectorUrl;
                        o.appId && o.collectorUrl && (t = o.appId, n = o.collectorUrl, (0, N.Po)("sp1", n, {
                            appId: t,
                            plugins: [(0, k.bp)()]
                        }), (0, N.s8)(S)), a.useEffect((function () {
                            void 0 !== d && v(d)
                        }), [d]);
                        var v = function (e) {
                                c.length > 0 && (c.forEach((function (t) {
                                    var n = t.title,
                                        a = t.page;
                                    z(n, T({
                                        maintenance: e
                                    }, a))
                                })), s([]))
                            },
                            f = function (e) {
                                return h ? e : L
                            };
                        return a.createElement(D.Provider, {
                            value: {
                                trackButtonClick: f((function (e, t, n) {
                                    var a;
                                    (0, N.YH)(T({
                                        event: {
                                            schema: "iglu:com.supercell/button_click/jsonschema/1-0-1",
                                            data: {
                                                button_id: e,
                                                button_name: null !== (a = null == t ? void 0 : t.substring(0, 40)) && void 0 !== a ? a : ""
                                            }
                                        }
                                    }, n ? {
                                        context: [{
                                            schema: "iglu:com.snowplowanalytics.snowplow/additional_information/jsonschema/1-0-0",
                                            data: n
                                        }]
                                    } : {}))
                                })),
                                trackImpression: f((function (e, t) {
                                    var n;
                                    (0, N.YH)({
                                        event: {
                                            schema: "iglu:com.supercell/impression/jsonschema/1-0-1",
                                            data: {
                                                component_id: e,
                                                component_name: null !== (n = null == t ? void 0 : t.substring(0, 40)) && void 0 !== n ? n : ""
                                            }
                                        }
                                    })
                                })),
                                trackLinkClick: f((function (e) {
                                    var t = e.url,
                                        n = e.id,
                                        a = e.label,
                                        r = e.additionalInformation;
                                    (0, k.cx)(T({
                                        targetUrl: t,
                                        elementId: n,
                                        elementContent: a
                                    }, r ? {
                                        context: [{
                                            schema: "iglu:com.snowplowanalytics.snowplow/additional_information/jsonschema/1-0-0",
                                            data: r
                                        }]
                                    } : {}))
                                })),
                                trackPageView: f((function (e, t) {
                                    var n = function (e) {
                                            var t, n, a, r, o, l, i = e.match(x),
                                                c = e.match(B),
                                                s = null !== (t = null == i || null === (n = i.groups) || void 0 === n ? void 0 : n.locale) && void 0 !== t ? t : "en",
                                                u = null !== (a = null == i || null === (r = i.groups) || void 0 === r ? void 0 : r.tab) && void 0 !== a ? a : "news",
                                                m = P.includes(u) ? u : "news",
                                                d = "";
                                            return c && (d = null !== (o = null == c || null === (l = c.groups) || void 0 === l ? void 0 : l.articleId) && void 0 !== o ? o : ""), {
                                                locale: s,
                                                tab: m,
                                                id: d
                                            }
                                        }(t),
                                        a = {
                                            title: e,
                                            page: n
                                        };
                                    (function (e) {
                                        return !!(p.current.length > 0 && (t = e, (n = p.current[p.current.length - 1]) && t.page.id === n.page.id && t.page.locale === n.page.locale && t.page.tab === n.page.tab && t.title === n.title)) || (p.current = [].concat((0, E.A)(p.current), [e]), !1);
                                        var t, n
                                    })(a) || (void 0 === d ? s((function (e) {
                                        return [].concat((0, E.A)(e), [a])
                                    })) : z(e, T({
                                        maintenance: d
                                    }, n)))
                                })),
                                setUser: f(j),
                                setMaintenance: g
                            }
                        }, r)
                    },
                    M = function () {
                        return a.useContext(D)
                    },
                    V = n(86330),
                    R = n(75799),
                    U = n.n(R),
                    G = (n(86282), n(71450), n(57182), n(81802), function (e) {
                        try {
                            var t, n = e.split(".");
                            if (3 !== n.length) return;
                            var a = JSON.parse(atob(null !== (t = n[1]) && void 0 !== t ? t : ""));
                            if (!("avatarId" in a)) return;
                            return a.avatarId
                        } catch (e) {
                            return
                        }
                    }),
                    H = (n(10865), n(93510), n(2432), n(11875), n(18981), n(42315), n(33975), n(87573), n(93277), n(46929), n(85668), n(28715), n(84915), n(9925), n(85100), n(27162), n(66403), n(94154), n(64777), n(38846), n(62896), n(90849)),
                    Y = n(6461);
                Y.z.object({
                    data: Y.z.record(Y.z.object({
                        total: Y.z.number().optional(),
                        skip: Y.z.number().optional(),
                        items: Y.z.array(Y.z.unknown())
                    }))
                });
                var W, K, J, q, Z, Q, X, $, ee, te, ne, ae, re, oe, le, ie, ce, se, ue, me, de, ge, pe, he, ve, fe, ye, Ee, be, we, Ie, Ne, ke, Ae, Te, Oe, Se, Pe, je, Ce = n(22119),
                    Fe = Y.z.object({
                        title: Y.z.string().nullable(),
                        url: Y.z.string().url().nullable(),
                        width: Y.z.number().nullable(),
                        height: Y.z.number().nullable()
                    }).default({
                        title: null,
                        url: null,
                        width: null,
                        height: null
                    }),
                    ze = (0, H.J1)(W || (W = (0, Ce.A)(["\n  fragment ImageFragment on Asset {\n    title\n    width\n    height\n    url\n  }\n"]))),
                    xe = Y.z.object({
                        id: Y.z.string(),
                        publishedAt: Y.z.string().nullable(),
                        firstPublishedAt: Y.z.string().nullable(),
                        publishedVersion: Y.z.number().nullable()
                    }),
                    Be = (0, H.J1)(K || (K = (0, Ce.A)(["\n  fragment SysFragment on Sys {\n    id\n    publishedAt\n    firstPublishedAt\n    publishedVersion\n  }\n"]))),
                    Le = Y.z.object({
                        sys: xe,
                        communityCreatorName: Y.z.string().nullable(),
                        communityCreatorId: Y.z.string().nullable(),
                        communityCreatorSubmissionInfo: Y.z.string().nullable(),
                        communityCreatorThumbnail: Fe.nullable(),
                        communityCreatorThumbnailEn: Fe.nullable()
                    }),
                    De = (0, H.J1)(J || (J = (0, Ce.A)(['\n  fragment CommunityCreatorFragment on CommunityCreator {\n    sys {\n      ...SysFragment\n    }\n\n    communityCreatorName\n    communityCreatorId\n    communityCreatorSubmissionInfo\n    communityCreatorThumbnail {\n      ...ImageFragment\n    }\n\n    communityCreatorThumbnailEn: communityCreatorThumbnail(locale: "en") {\n      ...ImageFragment\n    }\n  }\n\n  ', "\n  ", "\n"])), ze, Be),
                    _e = (n(29742), ["ar", "da", "de", "en", "es", "fi", "fr", "id", "it", "ja", "ko", "ms", "nl", "pl", "pt", "ru", "th", "tr", "vi", "zh", "zh-hans"]),
                    Me = Y.Ay.enum(_e),
                    Ve = "en",
                    Re = {
                        en: {
                            name: "English"
                        },
                        fr: {
                            name: "French"
                        },
                        es: {
                            name: "Spanish"
                        },
                        de: {
                            name: "German"
                        },
                        id: {
                            name: "Indonesian"
                        },
                        it: {
                            name: "Italian"
                        },
                        ja: {
                            name: "Japanese"
                        },
                        ko: {
                            name: "Korean"
                        },
                        pl: {
                            name: "Polish"
                        },
                        pt: {
                            name: "Portuguese"
                        },
                        ru: {
                            name: "Russian"
                        },
                        tr: {
                            name: "Turkish"
                        },
                        ar: {
                            name: "Arabic"
                        },
                        zh: {
                            name: "Traditional Chinese"
                        },
                        "zh-hans": {
                            name: "Simplified Chinese"
                        },
                        da: {
                            name: "Danish"
                        },
                        nl: {
                            name: "Dutch"
                        },
                        fi: {
                            name: "Finnish"
                        },
                        ms: {
                            name: "Malaysian"
                        },
                        th: {
                            name: "Thai"
                        },
                        vi: {
                            name: "Vietnamese"
                        }
                    },
                    Ue = (Object.fromEntries(_e.map((function (e) {
                        return [e, Re[e].name]
                    }))), Y.Ik({
                        sys: xe,
                        communityCreator: Le.nullish(),
                        communityEntryTitle: Y.Yj().nullable(),
                        communityEntryVideoUrl: Y.Yj().nullable(),
                        communityEntryNewUntil: Y.Yj().nullable(),
                        communityEntryVideoLocale: Me.nullable(),
                        communityEntrySubmissionInfo: Y.Yj().nullable(),
                        communityEntryVideoThumbnail: Fe.nullable(),
                        communityEntryVideoThumbnailEn: Fe.nullable(),
                        sortDate: Y.Yj().nullable()
                    }), (0, H.J1)(q || (q = (0, Ce.A)(['\n  fragment CommunityEntryFragment on CommunityVideoEntry {\n    sys {\n      ...SysFragment\n    }\n    communityEntryTitle\n    communityEntryVideoUrl\n    communityEntryNewUntil\n    communityEntryVideoLocale\n    communityEntrySubmissionInfo\n    communityEntryVideoThumbnail {\n      ...ImageFragment\n    }\n    communityEntryVideoThumbnailEn: communityEntryVideoThumbnail(locale: "en") {\n      ...ImageFragment\n    }\n    sortDate\n    communityCreator {\n      ...CommunityCreatorFragment\n    }\n  }\n\n  ', "\n  ", "\n  ", "\n"])), De, ze, Be), Y.z.object({
                        sys: xe,
                        livestreamCreator: Le.nullable(),
                        livestreamEntryTitle: Y.z.string().nullable(),
                        livestreamEntryVideoUrl: Y.z.string().nullable(),
                        livestreamEntryVideoLocale: Me.nullable(),
                        livestreamEntrySubmissionInfo: Y.z.string().nullable(),
                        livestreamEntryVideoThumbnail: Fe.nullable(),
                        livestreamEntryVideoThumbnailEn: Fe.nullable(),
                        livestreamEntryStartDate: Y.z.string().nullable(),
                        livestreamEntryEndDate: Y.z.string().nullable()
                    }), (0, H.J1)(Z || (Z = (0, Ce.A)(['\n  fragment CommunityLivestreamEntryFragment on CommunityLivestreamEntry {\n    sys {\n      ...SysFragment\n    }\n    livestreamEntryTitle\n    livestreamEntryVideoUrl\n    livestreamEntryVideoLocale\n    livestreamEntrySubmissionInfo\n    livestreamEntryStartDate\n    livestreamEntryEndDate\n    livestreamEntryVideoThumbnail {\n      ...ImageFragment\n    }\n    livestreamEntryVideoThumbnailEn: livestreamEntryVideoThumbnail(\n      locale: "en"\n    ) {\n      ...ImageFragment\n    }\n    livestreamCreator {\n      ...CommunityCreatorFragment\n    }\n  }\n\n  ', "\n  ", "\n  ", "\n"])), De, ze, Be), Y.Ik({
                        sys: xe,
                        __typename: Y.eu("UnifiedButton"),
                        buttonText: Y.Yj().nullable(),
                        buttonColorVariant: Y.Yj().nullable(),
                        buttonTarget: Y.gM("type", [Y.Ik({
                            type: Y.eu("customUrl"),
                            configuration: Y.Ik({
                                url: Y.Yj().optional()
                            })
                        }), Y.Ik({
                            type: Y.eu("inboxArticle"),
                            configuration: Y.Ik({
                                articleId: Y.Yj().optional()
                            })
                        }), Y.Ik({
                            type: Y.eu("inboxPoll"),
                            configuration: Y.Ik({
                                articleId: Y.Yj().optional()
                            })
                        }), Y.Ik({
                            type: Y.eu("ingameStore")
                        }), Y.Ik({
                            type: Y.eu("makeSso"),
                            configuration: Y.Ik({
                                url: Y.Yj().optional()
                            }).nullish()
                        }), Y.Ik({
                            type: Y.eu("eventPlatform")
                        }), Y.Ik({
                            type: Y.eu("make"),
                            configuration: Y.Ik({
                                url: Y.Yj().optional()
                            }).nullish()
                        })]).nullable()
                    })),
                    Ge = (0, H.J1)(Q || (Q = (0, Ce.A)(["\n  fragment UnifiedButtonFragment on UnifiedButton {\n    sys {\n      ...SysFragment\n    }\n    __typename\n    buttonText\n    buttonColorVariant\n    buttonTarget\n  }\n\n  ", "\n"])), Be),
                    He = Y.z.object({
                        townHallLevel: Y.z.array(Y.z.string()).nullable(),
                        builderHallLevel: Y.z.array(Y.z.string()).nullable(),
                        country: Y.z.array(Y.z.string()).nullable(),
                        countryExclude: Y.z.array(Y.z.string()).nullable(),
                        platform: Y.z.array(Y.z.string()).nullable(),
                        campaignId: Y.z.string().nullable(),
                        avatarIds: Y.z.array(Y.z.string()).nullable(),
                        hideFromYoungPlayer: Y.z.boolean().nullable()
                    }),
                    Ye = (He.omit({
                        countryExclude: !0
                    }), (0, H.J1)(X || (X = (0, Ce.A)(["\n  fragment TargetingFragment on Targeting {\n    townHallLevel\n    builderHallLevel\n    country\n    countryExclude\n    platform\n    campaignId\n    avatarIds\n    hideFromYoungPlayer\n  }\n"])))),
                    We = Y.Ik({
                        sys: xe,
                        __typename: Y.eu("CountdownTimer"),
                        timerText: Y.Yj().nullable(),
                        timerEndDate: Y.Yj().nullable(),
                        timerKind: Y.Yj().nullable()
                    }),
                    Ke = (0, H.J1)($ || ($ = (0, Ce.A)(["\n  fragment CountdownTimerFragment on CountdownTimer {\n    sys {\n      ...SysFragment\n    }\n    __typename\n    timerText\n    timerEndDate\n    timerKind\n  }\n\n  ", "\n"])), Be),
                    Je = Y.Ik({
                        __typename: Y.eu("CarouselEventEntry"),
                        sys: xe,
                        entryTitle: Y.Yj().nullable(),
                        entryHideTitle: Y.zM().nullable(),
                        carouselImage: Fe.nullable(),
                        carouselImageEn: Fe.nullable(),
                        ctaButtonsCollection: Y.Ik({
                            items: Y.YO(Ue).nullish()
                        }).nullish(),
                        countdownTimer: We.nullish()
                    }),
                    qe = (0, H.J1)(ee || (ee = (0, Ce.A)(['\n  fragment CarouselEventEntryFragment on CarouselEventEntry {\n    __typename\n    sys {\n      ...SysFragment\n    }\n\n    entryTitle\n    entryHideTitle\n    carouselImage {\n      ...ImageFragment\n    }\n    carouselImageEn: carouselImage(locale: "en") {\n      ...ImageFragment\n    }\n\n    ctaButtonsCollection {\n      items {\n        __typename\n        ... on UnifiedButton {\n          ...UnifiedButtonFragment\n        }\n      }\n    }\n\n    countdownTimer {\n      ...CountdownTimerFragment\n    }\n  }\n\n  ', "\n  ", "\n  ", "\n  ", "\n"])), Be, ze, Ge, Ke),
                    Ze = Y.Ik({
                        pollTitle: Y.Yj().nullable(),
                        option1Title: Y.Yj().nullable(),
                        option1Image: Fe.nullable(),
                        option1ImageEn: Fe.nullable(),
                        option2Title: Y.Yj().nullable(),
                        option2Image: Fe.nullable(),
                        option2ImageEn: Fe.nullable(),
                        option3Title: Y.Yj().nullable(),
                        option3Image: Fe.nullable(),
                        option3ImageEn: Fe.nullable(),
                        option4Title: Y.Yj().nullable(),
                        option4Image: Fe.nullable(),
                        option4ImageEn: Fe.nullable(),
                        option5Title: Y.Yj().nullable(),
                        option5Image: Fe.nullable(),
                        option5ImageEn: Fe.nullable()
                    }),
                    Qe = Ze.extend({
                        __typename: Y.eu("CarouselEventPollEntry"),
                        sys: xe,
                        entryTitle: Y.Yj().nullable(),
                        entryHideTitle: Y.zM().nullable(),
                        carouselImage: Fe.nullable(),
                        carouselImageEn: Fe.nullable()
                    }),
                    Xe = (0, H.J1)(te || (te = (0, Ce.A)(['\n  fragment CarouselEventPollEntryFragment on CarouselEventPollEntry {\n    __typename\n    sys {\n      ...SysFragment\n    }\n\n    entryTitle\n    entryHideTitle\n    pollTitle\n    carouselImage {\n      ...ImageFragment\n    }\n    carouselImageEn: carouselImage(locale: "en") {\n      ...ImageFragment\n    }\n\n    option1Title\n    option1Image {\n      ...ImageFragment\n    }\n    option1ImageEn: option1Image(locale: "en") {\n      ...ImageFragment\n    }\n\n    option2Title\n    option2Image {\n      ...ImageFragment\n    }\n    option2ImageEn: option2Image(locale: "en") {\n      ...ImageFragment\n    }\n\n    option3Title\n    option3Image {\n      ...ImageFragment\n    }\n    option3ImageEn: option3Image(locale: "en") {\n      ...ImageFragment\n    }\n\n    option4Title\n    option4Image {\n      ...ImageFragment\n    }\n    option4ImageEn: option4Image(locale: "en") {\n      ...ImageFragment\n    }\n\n    option5Title\n    option5Image {\n      ...ImageFragment\n    }\n    option5ImageEn: option5Image(locale: "en") {\n      ...ImageFragment\n    }\n  }\n\n  ', "\n  ", "\n"])), Be, ze),
                    $e = Y.Ik({
                        pollTitle: Y.Yj().nullable(),
                        pollDescription: Y.Yj().nullable()
                    }),
                    et = Y.Ik({
                        id: Y.Yj(),
                        value: Y.ai(),
                        name: Y.Yj(),
                        imageURL: Y.Yj(),
                        maxBan: Y.ai().optional()
                    }),
                    tt = Y.YO(et).nullable(),
                    nt = $e.extend({
                        __typename: Y.eu("CarouselEventPollTargetsEntry"),
                        sys: xe,
                        entryTitle: Y.Yj().nullable(),
                        entryHideTitle: Y.zM().nullable(),
                        carouselImage: Fe.nullable(),
                        carouselImageEn: Fe.nullable(),
                        pollTargets: tt
                    }),
                    at = (0, H.J1)(ne || (ne = (0, Ce.A)(['\n  fragment CarouselEventPollTargetsEntryFragment on CarouselEventPollTargetsEntry {\n    __typename\n    sys {\n      ...SysFragment\n    }\n\n    entryTitle\n    entryHideTitle\n    pollTitle\n    pollDescription\n    carouselImage {\n      ...ImageFragment\n    }\n    carouselImageEn: carouselImage(locale: "en") {\n      ...ImageFragment\n    }\n\n    pollTargets\n  }\n\n  ', "\n  ", "\n"])), Be, ze),
                    rt = Y.Ik({
                        id: Y.Yj(),
                        value: Y.ai().nullable().optional(),
                        label: Y.Yj().nullable().optional(),
                        image: Y.Ik({
                            id: Y.Yj(),
                            title: Y.Yj(),
                            width: Y.ai(),
                            height: Y.ai(),
                            url: Y.Yj()
                        }).nullable().optional(),
                        voucherId: Y.Yj().nullable().optional(),
                        eventId: Y.KC([Y.Yj(), Y.YO(Y.Yj())]).nullable().optional()
                    }),
                    ot = Y.YO(rt).nullable(),
                    lt = Y.Ik({
                        __typename: Y.eu("CarouselEventProgressTrackerEntry"),
                        sys: xe,
                        entryTitle: Y.Yj().nullable(),
                        maxProgress: Y.ai().nullable(),
                        ctaButtonsCollection: Y.Ik({
                            items: Y.YO(Ue).nullish()
                        }).nullish(),
                        progressValue: Y.ai().nullable(),
                        barColor: Y.Yj().nullable(),
                        showEqualDistance: Y.zM().nullable(),
                        carouselImage: Fe.nullable(),
                        carouselImageEn: Fe.nullable(),
                        milestones: ot
                    }),
                    it = (0, H.J1)(ae || (ae = (0, Ce.A)(['\n  fragment CarouselEventProgressTrackerEntryFragment on CarouselEventProgressTrackerEntry {\n    __typename\n    sys {\n      ...SysFragment\n    }\n\n    ctaButtonsCollection {\n      items {\n        __typename\n        ... on UnifiedButton {\n          ...UnifiedButtonFragment\n        }\n      }\n    }\n\n    entryTitle\n    maxProgress\n    progressValue\n    barColor\n    showEqualDistance\n\n    carouselImage {\n      ...ImageFragment\n    }\n    carouselImageEn: carouselImage(locale: "en") {\n      ...ImageFragment\n    }\n\n    milestones\n  }\n\n  ', "\n  ", "\n  ", "\n"])), Be, ze, Ge),
                    ct = (Y.Ik({
                        __typename: Y.eu("CarouselEvent"),
                        sys: xe,
                        sortDate: Y.Yj().nullable(),
                        targeting: He.nullable(),
                        localized: Y.gM("__typename", [Je, Qe, nt, lt]).nullish()
                    }), (0, H.J1)(re || (re = (0, Ce.A)(["\n  fragment EventEntryFragment on CarouselEvent {\n    __typename\n\n    sys {\n      ...SysFragment\n    }\n\n    targeting {\n      ...TargetingFragment\n    }\n\n    sortDate\n    localized {\n      ... on CarouselEventEntry {\n        ...CarouselEventEntryFragment\n      }\n      ... on CarouselEventPollEntry {\n        ...CarouselEventPollEntryFragment\n      }\n      ... on CarouselEventPollTargetsEntry {\n        ...CarouselEventPollTargetsEntryFragment\n      }\n      ... on CarouselEventProgressTrackerEntry {\n        ...CarouselEventProgressTrackerEntryFragment\n      }\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), Be, qe, Xe, at, it, Ye), Y.Ik({
                        key: Y.Yj().nullable(),
                        value: Y.Yj().nullable()
                    }), (0, H.J1)(oe || (oe = (0, Ce.A)(["\n  fragment GlobalFragment on Global {\n    key\n    value\n  }\n"]))), Y.Ik({
                        livestreamStartTime: Y.Yj().nullable(),
                        livestreamEndTime: Y.Yj().nullable()
                    }), Y.Ik({
                        migrationName: Y.Yj(),
                        updateHash: Y.Yj().nullish()
                    }), (0, H.J1)(le || (le = (0, Ce.A)(["\n  fragment MigrationDataFragment on MigrationData {\n    migrationName\n    updateHash\n  }\n"]))), Y.z.object({
                        linkUrl: Y.z.string().nullable(),
                        linkLocale: Y.z.string().nullable(),
                        linkPage: Y.z.string().nullable(),
                        socialLinkImage: Fe.nullable(),
                        socialLinkImageEn: Fe.nullable()
                    }), (0, H.J1)(ie || (ie = (0, Ce.A)(['\n  fragment SocialLinkFragment on SocialLink {\n    linkUrl\n    linkLocale\n    linkPage\n\n    socialLinkImage {\n      ...ImageFragment\n    }\n    socialLinkImageEn: socialLinkImage(locale: "en") {\n      ...ImageFragment\n    }\n  }\n\n  ', "\n"])), ze), n(37756)),
                    st = (n(11264), n(95483), n(12353), {
                        countdownTimer: "countdownTimer",
                        migrationData: "migrationData",
                        global: "global",
                        socialLink: "socialLink",
                        category: "category",
                        newsEntry: "newsEntry",
                        esportNewsEntry: "esportNewsEntry",
                        newsEntryArticle: "newsEntryArticle",
                        smallNewsEntryArticle: "smallNewsEntryArticle",
                        newsEntryVideo: "newsEntryVideo",
                        newsEntryExternalLink: "newsEntryExternalLink",
                        newsEntryImage: "newsEntryImage",
                        smallNewsEntryExternalLink: "smallNewsEntryExternalLink",
                        creatorBlock: "creatorBlock",
                        featureBlock: "featureBlock",
                        textBlock: "textBlock",
                        imageBlock: "imageBlock",
                        pollBlock: "pollBlock",
                        leaderboardBlock: "leaderboardBlock",
                        carouselEvent: "carouselEvent",
                        carouselEventEntry: "carouselEventEntry",
                        carouselEventPollEntry: "carouselEventPollEntry",
                        carouselEventPollTargetsEntry: "carouselEventPollTargetsEntry",
                        carouselEventProgressTrackerEntry: "carouselEventProgressTrackerEntry",
                        unifiedButton: "unifiedButton",
                        gameNotification: "gameNotification",
                        videoBlock: "videoBlock",
                        communityCreator: "communityCreator",
                        communityVideoEntry: "communityVideoEntry",
                        communityLivestreamEntry: "communityLivestreamEntry",
                        targeting: "targeting",
                        popup: "popup",
                        localizedPopup: "localizedPopup",
                        esportCarouselEntry: "esportCarouselEntry",
                        esportLiveEventEntry: "esportLiveEventEntry",
                        esportCarouselEventEntry: "esportCarouselEventEntry",
                        esportRewatchMatchEntry: "esportRewatchMatchEntry",
                        fullscreenEntry: "fullscreenEntry",
                        esportFullscreenEntry: "esportFullscreenEntry",
                        fullscreenEntryCarousel: "fullscreenEntryCarousel",
                        esportSocialMediaLinkContainer: "esportSocialMediaLinkContainer",
                        socialMedia: "socialMedia",
                        blogGlobal: "blogGlobal",
                        fullscreenEntryCarouselSlide: "fullscreenEntryCarouselSlide",
                        esportSocialMediaLink: "esportSocialMediaLink",
                        externalButton: "externalButton",
                        linkToArticleButton: "linkToArticleButton",
                        buttonBlock: "buttonBlock",
                        carouselEventVersusTrackerEntry: "carouselEventVersusTrackerEntry",
                        carouselEventTugOfWarTrackerEntry: "carouselEventTugOfWarTrackerEntry"
                    }),
                    ut = (Y.Ay.nativeEnum(st), [st.category, st.blogGlobal, st.global, st.socialLink, st.socialMedia, st.esportSocialMediaLink, st.esportSocialMediaLinkContainer, st.migrationData, st.communityCreator, st.communityVideoEntry, st.communityLivestreamEntry, st.gameNotification]),
                    mt = ([Object.values(st).filter((function (e) {
                        return !ut.includes(e)
                    }))].flat(), [st.newsEntry, st.carouselEvent, st.esportNewsEntry, st.esportCarouselEntry, st.fullscreenEntry, st.esportFullscreenEntry, st.popup]),
                    dt = (Y.Ay.enum(mt), Y.Ay.enum(["boombeach", "brawlstars", "clashofclans", "clashroyale", "hayday", "squadbusters", "rogue"])),
                    gt = (Y.Ay.enum(["standard", "medium", "high"]), Y.Ay.enum(["yellow", "gray", "blue", "red", "red-play", "green", "gold", "pink", "orange", "twitch", "light-blue", "dark-blue", "purple", "cyan"]), Y.Ay.enum(["master", "staging", "dev"]), Y.Ay.enum(["news", "community", "esport", "blog"]), Y.Ay.enum(["Inbox only", "Inbox and website", "Website only"])),
                    pt = (Y.Ay.custom((function (e) {
                        var t = Y.Ay.string().parse(e).split("-"),
                            n = (0, ct.A)(t),
                            a = n[0],
                            r = n.slice(1),
                            o = Me.parse(r.join("-"));
                        return "locale" === a && Me.parse(o)
                    })), Y.Ay.enum(["HIDE_CTA", "SHOW_CTA", "HIDE_ENTRY", "DO_NOTHING"]), Y.Ay.enum(["SHOW_IN_NEWS_FEED", "HIDE_IN_NEWS_FEED"])),
                    ht = Y.Ay.object({
                        width: Y.Ay.number(),
                        height: Y.Ay.number(),
                        url: Y.Ay.string()
                    }),
                    vt = Y.Ay.object({
                        default: ht.optional(),
                        medium: ht.optional(),
                        high: ht.optional(),
                        standard: ht.optional(),
                        maxres: ht.optional()
                    }),
                    ft = Y.Ay.object({
                        id: Y.Ay.string(),
                        source: Y.Ay.literal("youtube"),
                        creatorUsername: Y.Ay.string(),
                        title: Y.Ay.string(),
                        viewCount: Y.Ay.number().optional(),
                        thumbnails: vt
                    }),
                    yt = Y.Ay.object({
                        creatorId: Y.Ay.string(),
                        creatorName: Y.Ay.string(),
                        locale: Me,
                        title: Y.Ay.string(),
                        url: Y.Ay.string(),
                        category: Y.Ay.string().nullish(),
                        videoThumbnailId: Y.Ay.string(),
                        creatorThumbnailId: Y.Ay.string().nullish()
                    }),
                    Et = yt.extend({
                        uploadType: Y.Ay.literal("video")
                    }),
                    bt = yt.extend({
                        uploadType: Y.Ay.literal("livestream"),
                        livestreamDelay: Y.Ay.number().or(Y.Ay.string()),
                        livestreamLength: Y.Ay.number().or(Y.Ay.string()),
                        livestreamActiveMaxCount: Y.Ay.number().or(Y.Ay.string())
                    }),
                    wt = (Y.Ay.discriminatedUnion("uploadType", [Et, bt]), Y.z.object({
                        __typename: Y.z.literal("TextBlock"),
                        title: Y.z.string().nullable(),
                        text: Y.z.object({
                            json: Y.z.unknown()
                        }).nullable(),
                        accordion: Y.z.enum(["yes", "no"]).nullable()
                    })),
                    It = (0, H.J1)(ce || (ce = (0, Ce.A)(["\n  fragment TextBlockFragment on TextBlock {\n    title\n    text {\n      json\n    }\n    accordion\n  }\n"]))),
                    Nt = Y.z.object({
                        __typename: Y.z.literal("ImageBlock"),
                        image: Fe.nullable(),
                        imageEn: Fe.nullable(),
                        author: Y.z.string().nullable(),
                        fullWidth: Y.z.enum(["yes", "no"]).nullable()
                    }),
                    kt = (0, H.J1)(se || (se = (0, Ce.A)(['\n  fragment ImageBlockFragment on ImageBlock {\n    image {\n      ...ImageFragment\n    }\n    imageEn: image(locale: "en") {\n      ...ImageFragment\n    }\n    author\n    fullWidth\n  }\n\n  ', "\n"])), ze),
                    At = Y.z.object({
                        __typename: Y.z.literal("FeatureBlock"),
                        title: Y.z.string().nullable(),
                        featureText: Y.z.object({
                            json: Y.z.unknown()
                        }).nullable(),
                        featureThumbnail: Fe.nullable(),
                        featureThumbnailEn: Fe.nullable(),
                        featureThumbnailPosition: Y.z.enum(["left", "right"]).nullable(),
                        accordion: Y.z.enum(["yes", "no"]).nullable()
                    }),
                    Tt = (0, H.J1)(ue || (ue = (0, Ce.A)(['\n  fragment FeatureBlockFragment on FeatureBlock {\n    title\n    featureText {\n      json\n    }\n    featureThumbnail {\n      ...ImageFragment\n    }\n    featureThumbnailEn: featureThumbnail(locale: "en") {\n      ...ImageFragment\n    }\n    featureThumbnailPosition\n    accordion\n  }\n  ', "\n"])), ze),
                    Ot = Y.z.object({
                        __typename: Y.z.literal("VideoBlock"),
                        title: Y.z.string().nullable(),
                        videoUrl: Y.z.string().nullable(),
                        videoThumbnail: Fe.nullable(),
                        videoThumbnailEn: Fe.nullable()
                    }),
                    St = (0, H.J1)(me || (me = (0, Ce.A)(['\n  fragment VideoBlockFragment on VideoBlock {\n    title\n    videoUrl\n    videoThumbnail {\n      ...ImageFragment\n    }\n    videoThumbnailEn: videoThumbnail(locale: "en") {\n      ...ImageFragment\n    }\n  }\n\n  ', "\n"])), ze),
                    Pt = Ze.extend({
                        __typename: Y.z.literal("PollBlock")
                    }),
                    jt = (0, H.J1)(de || (de = (0, Ce.A)(['\n  fragment PollBlockFragment on PollBlock {\n    pollTitle\n\n    option1Title\n    option1Image {\n      ...ImageFragment\n    }\n    option1ImageEn: option1Image(locale: "en") {\n      ...ImageFragment\n    }\n\n    option2Title\n    option2Image {\n      ...ImageFragment\n    }\n    option2ImageEn: option2Image(locale: "en") {\n      ...ImageFragment\n    }\n\n    option3Title\n    option3Image {\n      ...ImageFragment\n    }\n    option3ImageEn: option3Image(locale: "en") {\n      ...ImageFragment\n    }\n\n    option4Title\n    option4Image {\n      ...ImageFragment\n    }\n    option4ImageEn: option4Image(locale: "en") {\n      ...ImageFragment\n    }\n\n    option5Title\n    option5Image {\n      ...ImageFragment\n    }\n    option5ImageEn: option5Image(locale: "en") {\n      ...ImageFragment\n    }\n  }\n\n  ', "\n"])), ze),
                    Ct = Y.z.object({
                        __typename: Y.z.literal("CreatorBlock"),
                        creatorBounty: Y.z.string().nullable(),
                        videoData: Y.z.array(ft).nullable()
                    }),
                    Ft = (0, H.J1)(ge || (ge = (0, Ce.A)(["\n  fragment CreatorBlockFragment on CreatorBlock {\n    creatorBounty\n    videoData\n  }\n"]))),
                    zt = Y.z.object({
                        id: Y.z.string(),
                        title: Y.z.string(),
                        color: Y.z.string().optional(),
                        image: Y.z.object({
                            id: Y.z.string(),
                            title: Y.z.string(),
                            width: Y.z.number(),
                            height: Y.z.number(),
                            url: Y.z.string()
                        }).optional()
                    }),
                    xt = Y.z.object({
                        useRankColumn: Y.z.boolean(),
                        showColumnTitles: Y.z.boolean(),
                        columns: Y.z.array(zt)
                    }).nullable(),
                    Bt = Y.z.object({
                        __typename: Y.z.literal("LeaderboardBlock"),
                        title: Y.z.string().nullable(),
                        defaultRows: Y.z.number().nullable(),
                        maximumRows: Y.z.number().nullable(),
                        leaderboardConfiguration: xt,
                        leaderboardData: Y.z.array(Y.z.array(Y.z.string().or(Y.z.number()))).nullable()
                    }),
                    Lt = (0, H.J1)(pe || (pe = (0, Ce.A)(["\n  fragment LeaderboardBlockFragment on LeaderboardBlock {\n    title\n    defaultRows\n    maximumRows\n    leaderboardConfiguration\n    leaderboardData\n  }\n\n  ", "\n"])), ze),
                    Dt = Y.Ik({
                        categoryId: Y.Yj().nullable(),
                        name: Y.Yj().nullable(),
                        color: Y.Yj().nullable()
                    }).partial({
                        categoryId: !0
                    }),
                    _t = Y.z.object({
                        __typename: Y.z.literal("NewsEntryArticle"),
                        sys: xe,
                        title: Y.z.string().nullable(),
                        blogSlug: Y.z.string().nullish(),
                        heroImage: Fe.nullable(),
                        heroImageEn: Fe.nullable(),
                        largeThumbnail: Fe.nullable(),
                        largeThumbnailEn: Fe.nullable(),
                        websiteHeroImage: Fe.nullable().optional(),
                        websiteHeroImageEn: Fe.nullable().optional(),
                        whereToPublish: gt.nullable().optional(),
                        showInNewsFeed: pt.nullish(),
                        bodyCollection: Y.z.object({
                            items: Y.z.array(Y.z.discriminatedUnion("__typename", [wt, Nt, At, Ot, Ue, Pt, Ct, Bt]))
                        }).nullish()
                    }),
                    Mt = (0, H.J1)(he || (he = (0, Ce.A)(['\n  fragment NewsEntryArticleFragment on NewsEntryArticle {\n    sys {\n      ...SysFragment\n    }\n    title\n    blogSlug\n    whereToPublish\n    showInNewsFeed\n    heroImage {\n      ...ImageFragment\n    }\n    heroImageEn: heroImage(locale: "en") {\n      ...ImageFragment\n    }\n\n    websiteHeroImage {\n      ...ImageFragment\n    }\n\n    websiteHeroImageEn: websiteHeroImage(locale: "en") {\n      ...ImageFragment\n    }\n\n    largeThumbnail {\n      ...ImageFragment\n    }\n    largeThumbnailEn: largeThumbnail(locale: "en") {\n      ...ImageFragment\n    }\n\n    bodyCollection(limit: 90) {\n      items {\n        __typename\n        ... on FeatureBlock {\n          ...FeatureBlockFragment\n        }\n        ... on ImageBlock {\n          ...ImageBlockFragment\n        }\n        ... on TextBlock {\n          ...TextBlockFragment\n        }\n        ... on VideoBlock {\n          ...VideoBlockFragment\n        }\n        ... on UnifiedButton {\n          ...UnifiedButtonFragment\n        }\n        ... on PollBlock {\n          ...PollBlockFragment\n        }\n        ... on CreatorBlock {\n          ...CreatorBlockFragment\n        }\n        ... on LeaderboardBlock {\n          ...LeaderboardBlockFragment\n        }\n      }\n    }\n  }\n\n  ', "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), ze, Be, It, kt, Tt, St, Ge, jt, Ft, Lt),
                    Vt = Y.Ik({
                        __typename: Y.eu("NewsEntryVideo"),
                        sys: xe,
                        title: Y.Yj().nullable(),
                        videoUrl: Y.Yj().nullable(),
                        videoThumbnail: Fe.nullable(),
                        videoThumbnailEn: Fe.nullable()
                    }),
                    Rt = (0, H.J1)(ve || (ve = (0, Ce.A)(['\n  fragment NewsEntryVideoFragment on NewsEntryVideo {\n    sys {\n      ...SysFragment\n    }\n    title\n    videoUrl\n    videoThumbnail {\n      ...ImageFragment\n    }\n    videoThumbnailEn: videoThumbnail(locale: "en") {\n      ...ImageFragment\n    }\n  }\n\n  ', "\n  ", "\n"])), ze, Be),
                    Ut = Y.Ik({
                        __typename: Y.eu("NewsEntryImage"),
                        sys: xe,
                        title: Y.Yj().nullable(),
                        imageNewsThumbnail: Fe.nullable(),
                        imageNewsThumbnailEn: Fe.nullable()
                    }),
                    Gt = (0, H.J1)(fe || (fe = (0, Ce.A)(['\n  fragment NewsEntryImageFragment on NewsEntryImage {\n    sys {\n      ...SysFragment\n    }\n    title\n\n    imageNewsThumbnail {\n      ...ImageFragment\n    }\n\n    imageNewsThumbnailEn: imageNewsThumbnail(locale: "en") {\n      ...ImageFragment\n    }\n  }\n\n  ', "\n  ", "\n"])), ze, Be),
                    Ht = Y.Ik({
                        __typename: Y.eu("NewsEntryExternalLink"),
                        sys: xe,
                        title: Y.Yj().nullable(),
                        linkUrl: Y.Yj().nullable(),
                        linkThumbnail: Fe.nullable(),
                        linkThumbnailEn: Fe.nullable()
                    }),
                    Yt = (0, H.J1)(ye || (ye = (0, Ce.A)(['\n  fragment NewsEntryExternalLinkFragment on NewsEntryExternalLink {\n    sys {\n      ...SysFragment\n    }\n    title\n    linkUrl\n    linkThumbnail {\n      ...ImageFragment\n    }\n    linkThumbnailEn: linkThumbnail(locale: "en") {\n      ...ImageFragment\n    }\n  }\n\n  ', "\n  ", "\n"])), Be, ze),
                    Wt = _t.extend({
                        __typename: Y.z.literal("SmallNewsEntryArticle"),
                        smallThumbnail: Fe.nullable(),
                        smallThumbnailEn: Fe.nullable()
                    }).omit({
                        largeThumbnail: !0,
                        largeThumbnailEn: !0
                    }),
                    Kt = (0, H.J1)(Ee || (Ee = (0, Ce.A)(['\n  fragment SmallNewsEntryArticleFragment on SmallNewsEntryArticle {\n    sys {\n      ...SysFragment\n    }\n    title\n    blogSlug\n    whereToPublish\n    showInNewsFeed\n    heroImage {\n      ...ImageFragment\n    }\n    heroImageEn: heroImage(locale: "en") {\n      ...ImageFragment\n    }\n\n    websiteHeroImage {\n      ...ImageFragment\n    }\n    websiteHeroImageEn: websiteHeroImage(locale: "en") {\n      ...ImageFragment\n    }\n\n    smallThumbnail {\n      ...ImageFragment\n    }\n    smallThumbnailEn: smallThumbnail(locale: "en") {\n      ...ImageFragment\n    }\n\n    bodyCollection(limit: 70) {\n      items {\n        __typename\n        ... on FeatureBlock {\n          ...FeatureBlockFragment\n        }\n        ... on ImageBlock {\n          ...ImageBlockFragment\n        }\n        ... on TextBlock {\n          ...TextBlockFragment\n        }\n        ... on VideoBlock {\n          ...VideoBlockFragment\n        }\n        ... on UnifiedButton {\n          ...UnifiedButtonFragment\n        }\n        ... on PollBlock {\n          ...PollBlockFragment\n        }\n        ... on CreatorBlock {\n          ...CreatorBlockFragment\n        }\n        ... on LeaderboardBlock {\n          ...LeaderboardBlockFragment\n        }\n      }\n    }\n  }\n\n  ', "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), ze, Be, It, kt, Tt, St, jt, Ge, Ft, Lt),
                    Jt = Ht.extend({
                        __typename: Y.eu("SmallNewsEntryExternalLink")
                    }),
                    qt = (0, H.J1)(be || (be = (0, Ce.A)(['\n  fragment SmallNewsEntryExternalLinkFragment on SmallNewsEntryExternalLink {\n    sys {\n      ...SysFragment\n    }\n    title\n    linkUrl\n    linkThumbnail {\n      ...ImageFragment\n    }\n    linkThumbnailEn: linkThumbnail(locale: "en") {\n      ...ImageFragment\n    }\n  }\n\n  ', "\n  ", "\n"])), Be, ze),
                    Zt = Y.Ik({
                        sys: xe,
                        targeting: He.nullish(),
                        category: Dt.nullable(),
                        categoryEn: Dt.nullish(),
                        sortDate: Y.Yj().nullable(),
                        newUntil: Y.Yj().nullable(),
                        localized: Y.gM("__typename", [_t, Vt, Ut, Ht, Wt, Jt]).nullish()
                    }),
                    Qt = ((0, H.J1)(we || (we = (0, Ce.A)(["\n  fragment NewsEntryFragment on NewsEntry {\n    sys {\n      ...SysFragment\n    }\n    category {\n      name\n      color\n    }\n\n    targeting {\n      ...TargetingFragment\n    }\n\n    newUntil\n    sortDate\n\n    localized {\n      __typename\n\n      ... on NewsEntryVideo {\n        ...NewsEntryVideoFragment\n      }\n\n      ... on NewsEntryImage {\n        ...NewsEntryImageFragment\n      }\n\n      ... on NewsEntryExternalLink {\n        ...NewsEntryExternalLinkFragment\n      }\n\n      ... on NewsEntryArticle {\n        ...NewsEntryArticleFragment\n      }\n\n      ... on SmallNewsEntryArticle {\n        ...SmallNewsEntryArticleFragment\n      }\n\n      ... on SmallNewsEntryExternalLink {\n        ...SmallNewsEntryExternalLinkFragment\n      }\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n"])), Ye, Mt, Rt, Gt, Yt, qt, Kt, Be), Zt.extend({
                        localized: Y.KC([Y.ch(), Y.L5(), _t, Wt]).nullable()
                    }), (0, H.J1)(Ie || (Ie = (0, Ce.A)(['\n  fragment BlogNewsEntryFragment on NewsEntry {\n    sys {\n      ...SysFragment\n    }\n\n    categoryEn: category(locale: "en") {\n      categoryId\n      name\n      color\n    }\n\n    category {\n      categoryId\n      name\n      color\n    }\n\n    newUntil\n    sortDate\n    localized {\n      __typename\n      ... on NewsEntryArticle {\n        ...NewsEntryArticleFragment\n      }\n\n      ... on SmallNewsEntryArticle {\n        ...SmallNewsEntryArticleFragment\n      }\n    }\n  }\n\n  ', "\n  ", "\n  ", "\n  ", "\n"])), Be, ze, Mt, Kt), Y.Ik({
                        __typename: Y.eu("EsportLiveEventEntry"),
                        sys: xe,
                        title: Y.Yj().nullable(),
                        entrySubtitle: Y.Yj().nullable(),
                        livestreamEndTime: Y.Yj().nullable(),
                        livestreamStartTime: Y.Yj().nullable(),
                        carouselImage: Fe.nullable(),
                        carouselImageEn: Fe.nullable(),
                        eventPromotionLogo: Fe.nullable(),
                        eventPromotionLogoEn: Fe.nullable(),
                        eventPromotionName: Y.Yj().nullable(),
                        watchLiveButton: Ue.nullish(),
                        subscribeButton: Ue.nullish(),
                        readMoreButton: Ue.nullish()
                    })),
                    Xt = (0, H.J1)(Ne || (Ne = (0, Ce.A)(['\n  fragment EsportCarouselLiveEntryFragment on EsportLiveEventEntry {\n    __typename\n    sys {\n      ...SysFragment\n    }\n    title\n    entrySubtitle\n    livestreamEndTime\n    livestreamStartTime\n    carouselImage {\n      ...ImageFragment\n    }\n    carouselImageEn: carouselImage(locale: "en") {\n      ...ImageFragment\n    }\n    eventPromotionLogo {\n      ...ImageFragment\n    }\n    eventPromotionLogoEn: eventPromotionLogo(locale: "en") {\n      ...ImageFragment\n    }\n    eventPromotionName\n    watchLiveButton {\n      ... on UnifiedButton {\n        ...UnifiedButtonFragment\n      }\n    }\n\n    subscribeButton {\n      ... on UnifiedButton {\n        ...UnifiedButtonFragment\n      }\n    }\n\n    readMoreButton {\n      ... on UnifiedButton {\n        ...UnifiedButtonFragment\n      }\n    }\n  }\n\n  ', "\n  ", "\n  ", "\n"])), ze, Be, Ge),
                    $t = Y.Ik({
                        __typename: Y.eu("EsportCarouselEventEntry"),
                        sys: xe,
                        entryTitle: Y.Yj().nullable(),
                        entrySubtitle: Y.Yj().nullable(),
                        carouselImage: Fe.nullable(),
                        carouselImageEn: Fe.nullable(),
                        ctaButtonsCollection: Y.Ik({
                            items: Y.YO(Ue).nullish()
                        }).nullish()
                    }),
                    en = (0, H.J1)(ke || (ke = (0, Ce.A)(['\n  fragment EsportCarouselEventEntryFragment on EsportCarouselEventEntry {\n    __typename\n    sys {\n      ...SysFragment\n    }\n    entryTitle\n    entrySubtitle\n    carouselImage {\n      ...ImageFragment\n    }\n    carouselImageEn: carouselImage(locale: "en") {\n      ...ImageFragment\n    }\n    ctaButtonsCollection {\n      items {\n        __typename\n        ... on UnifiedButton {\n          ...UnifiedButtonFragment\n        }\n      }\n    }\n  }\n  ', "\n  ", "\n  ", "\n"])), ze, Ge, Be),
                    tn = (Y.Ik({
                        sys: xe,
                        sortDate: Y.Yj().nullable(),
                        localized: Y.gM("__typename", [Qt, $t]).nullish()
                    }), (0, H.J1)(Ae || (Ae = (0, Ce.A)(["\n  fragment EsportCarouselEntryFragment on EsportCarouselEntry {\n    sys {\n      ...SysFragment\n    }\n    sortDate\n    localized {\n      ... on EsportCarouselEventEntry {\n        ...EsportCarouselEventEntryFragment\n      }\n      ... on EsportLiveEventEntry {\n        ...EsportCarouselLiveEntryFragment\n      }\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n"])), Xt, en, Be), Y.z.object({
                        __typename: Y.z.literal("EsportRewatchMatchEntry"),
                        sys: xe,
                        playerOneName: Y.z.string().nullable(),
                        playerOneScore: Y.z.number().nullable(),
                        playerTwoName: Y.z.string().nullable(),
                        playerTwoScore: Y.z.number().nullable(),
                        matchUrl: Y.z.string().nullable(),
                        matchThumbnail: Fe.nullable(),
                        playerOneImage: Fe.nullable(),
                        playerTwoImage: Fe.nullable(),
                        matchThumbnailEn: Fe.nullable(),
                        playerOneImageEn: Fe.nullable(),
                        playerTwoImageEn: Fe.nullable()
                    })),
                    nn = (0, H.J1)(Te || (Te = (0, Ce.A)(['\n  fragment EsportRewatchMatchEntryFragment on EsportRewatchMatchEntry {\n    sys {\n      ...SysFragment\n    }\n\n    playerOneName\n    playerOneScore\n    playerTwoScore\n    playerTwoName\n    matchUrl\n\n    playerOneImage {\n      ...ImageFragment\n    }\n\n    playerTwoImage {\n      ...ImageFragment\n    }\n\n    matchThumbnail {\n      ...ImageFragment\n    }\n\n    playerOneImageEn: playerOneImage(locale: "en") {\n      ...ImageFragment\n    }\n\n    playerTwoImageEn: playerTwoImage(locale: "en") {\n      ...ImageFragment\n    }\n\n    matchThumbnailEn: matchThumbnail(locale: "en") {\n      ...ImageFragment\n    }\n  }\n\n  ', "\n  ", "\n"])), ze, Be),
                    an = (Zt.extend({
                        localized: Y.z.discriminatedUnion("__typename", [_t, Vt, Ht, Wt, Jt, tn]).nullish()
                    }), (0, H.J1)(Oe || (Oe = (0, Ce.A)(["\n  fragment EsportNewsEntryFragment on EsportNewsEntry {\n    sys {\n      ...SysFragment\n    }\n    category {\n      name\n      color\n    }\n    newUntil\n    sortDate\n\n    localized {\n      __typename\n\n      ... on NewsEntryVideo {\n        ...NewsEntryVideoFragment\n      }\n\n      ... on NewsEntryExternalLink {\n        ...NewsEntryExternalLinkFragment\n      }\n\n      ... on NewsEntryArticle {\n        ...NewsEntryArticleFragment\n      }\n\n      ... on SmallNewsEntryArticle {\n        ...SmallNewsEntryArticleFragment\n      }\n\n      ... on SmallNewsEntryExternalLink {\n        ...SmallNewsEntryExternalLinkFragment\n      }\n\n      ... on EsportRewatchMatchEntry {\n        ...EsportRewatchMatchEntryFragment\n      }\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), Mt, Rt, Yt, qt, Kt, nn, Be), Y.Ik({
                        sys: xe,
                        __typename: Y.eu("FullscreenEntryCarousel"),
                        expirationDate: Y.Yj().nullable(),
                        readMoreButton: Ue.nullish(),
                        body: Y.Ik({
                            json: Y.L5()
                        }).nullish(),
                        backgroundMedia: Fe.nullable(),
                        backgroundMediaEn: Fe.nullable()
                    })),
                    rn = (0, H.J1)(Se || (Se = (0, Ce.A)(['\n  fragment FullscreenEntryCarouselFragment on FullscreenEntryCarousel {\n    __typename\n    sys {\n      ...SysFragment\n    }\n\n    expirationDate\n\n    readMoreButton {\n      __typename\n      ... on UnifiedButton {\n        ...UnifiedButtonFragment\n      }\n    }\n\n    body {\n      json\n    }\n\n    backgroundMedia {\n      ...ImageFragment\n    }\n\n    backgroundMediaEn: backgroundMedia(locale: "en") {\n      ...ImageFragment\n    }\n  }\n\n  ', "\n  ", "\n  ", "\n"])), Be, Ge, ze),
                    on = Y.Ik({
                        __typename: Y.eu("FullscreenEntry"),
                        sys: xe,
                        sortDate: Y.Yj().nullable(),
                        targeting: He.nullish(),
                        localized: Y.gM("__typename", [an]).nullish()
                    });
                (0, H.J1)(Pe || (Pe = (0, Ce.A)(["\n  fragment FullscreenEntryFragment on FullscreenEntry {\n    __typename\n    sys {\n      ...SysFragment\n    }\n\n    targeting {\n      ...TargetingFragment\n    }\n\n    sortDate\n    localized {\n      ... on FullscreenEntryCarousel {\n        ...FullscreenEntryCarouselFragment\n      }\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n"])), Be, rn, Ye), on.extend({
                    __typename: Y.eu("EsportFullscreenEntry")
                }), (0, H.J1)(je || (je = (0, Ce.A)(["\n  fragment EsportFullscreenEntryFragment on EsportFullscreenEntry {\n    __typename\n    sys {\n      ...SysFragment\n    }\n\n    sortDate\n    localized {\n      ... on FullscreenEntryCarousel {\n        ...FullscreenEntryCarouselFragment\n      }\n    }\n  }\n\n  ", "\n  ", "\n"])), Be, rn), n(47748), n(73552), n(69431), Object.fromEntries(Object.entries({
                    xdjcscmv3zo3: "brawlstars",
                    lqe2co20rkhw: "clashofclans",
                    "0rebc2l8z0wu": "hayday",
                    epg71hpoul0m: "squadbusters",
                    "9jtsgmsiuthj": "clashroyale",
                    cf7umh1jvp53: "boombeach",
                    kpmhkcp4p1s7: "rogue"
                }).map((function (e) {
                    var t = (0, b.A)(e, 2),
                        n = t[0],
                        a = t[1];
                    return [dt.parse(a), n]
                })));
                var ln, cn, sn, un, mn, dn, gn, pn = {
                        enabledTabs: ["news", "community", "esport", "blog"],
                        enabledLocales: ["de", "en", "es", "fr", "id", "it", "ja", "ko", "pt", "pl", "zh", "zh-hans"],
                        enabledNotificationTypes: ["standard"],
                        referenceWidth: 850,
                        availableButtonVariants: ["gray", "green", "red", "blue", "orange"],
                        progressBarDefaultColor: "#7ab94e",
                        availableCategories: [{
                            id: "news",
                            color: "#059816",
                            name: {
                                en: "News",
                                fr: "Actualités",
                                de: "news",
                                id: "Berita",
                                it: "Notizie",
                                ja: "ニュース",
                                ko: "뉴스",
                                pt: "Novidades",
                                es: "Novedades",
                                tr: "Haberler",
                                vi: "Tin tức",
                                zh: "最新情報"
                            }
                        }, {
                            id: "esports",
                            name: {
                                en: "Esports",
                                fr: "E-sport",
                                de: "E-Sports",
                                id: "Esports",
                                it: "Esports",
                                ja: "eスポーツ",
                                ko: "e스포츠",
                                pt: "E-sports",
                                es: "eSports",
                                tr: "E-spor",
                                vi: "Thể thao điện tử",
                                zh: "賽事"
                            },
                            color: "#19eb86"
                        }, {
                            id: "game-updates",
                            color: "#0ced50",
                            name: {
                                en: "Game Updates",
                                fr: "Mises à jour",
                                de: "Updates",
                                id: "Pembaruan Game",
                                it: "Aggiornamenti del gioco",
                                ja: "ゲームアップデート",
                                ko: "게임 업데이트",
                                pt: "Atualizações do jogo",
                                es: "Actualizaciones del juego",
                                tr: "Oyun güncellemeleri",
                                vi: "Bản cập nhật trò chơi",
                                zh: "遊戲更新"
                            }
                        }, {
                            id: "release-notes",
                            color: "#007a00",
                            name: {
                                en: "Release Notes",
                                fr: "Notes de patch",
                                de: "Versionshinweise",
                                id: "Catatan Rilis",
                                it: "Note di rilascio",
                                ja: "リリース情報",
                                ko: "변경 사항",
                                pt: "Notas de lançamento",
                                es: "Notas de actualización",
                                tr: "Sürüm notları",
                                vi: "Thông tin phiên bản",
                                zh: "更新詳情"
                            }
                        }, {
                            id: "community",
                            color: "#b35f8c",
                            name: {
                                en: "Community",
                                fr: "Communauté",
                                de: "community",
                                id: "Komunitas",
                                it: "community",
                                ja: "コミュニティ",
                                ko: "커뮤니티",
                                pt: "Comunidade",
                                es: "Comunidad",
                                tr: "Oyuncu topluluğu",
                                vi: "Cộng đồng",
                                zh: "社群"
                            }
                        }, {
                            id: "clan-games",
                            color: "#3dc8eb",
                            name: {
                                en: "Clan Games",
                                fr: "Jeux de clan",
                                de: "Clanspiele",
                                id: "Permainan Klan",
                                it: "Giochi del clan",
                                ja: "クランゲーム",
                                ko: "클랜 게임",
                                pt: "Jogos do Clã",
                                es: "Juegos del Clan",
                                tr: "Klan oyunları",
                                vi: "Trò chơi Hội",
                                zh: "部落競賽"
                            }
                        }, {
                            id: "supercell",
                            color: "#000000",
                            name: {
                                en: "Supercell",
                                fr: "Supercell",
                                de: "Supercell",
                                id: "Supercell",
                                it: "Supercell",
                                ja: "Supercell",
                                ko: "슈퍼셀",
                                pt: "Supercell",
                                es: "Supercell",
                                tr: "Supercell",
                                vi: "Supercell",
                                zh: "Supercell"
                            }
                        }, {
                            id: "misc",
                            color: "#000000",
                            name: {
                                en: "Misc",
                                fr: "Divers",
                                de: "Sonstiges",
                                id: "Lain-lain",
                                it: "Altro",
                                ja: "その他",
                                ko: "기타",
                                pt: "Diversos",
                                es: "Otros",
                                tr: "Diğer",
                                vi: "Khác",
                                zh: "其他"
                            }
                        }],
                        enabledComposePages: ["news", "events"],
                        resolutions: (ln = {}, (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(ln, st.newsEntryExternalLink, {
                            linkThumbnail: {
                                width: 900,
                                height: 506
                            }
                        }), st.newsEntryArticle, {
                            heroImage: {
                                width: 1950,
                                height: 800
                            },
                            largeThumbnail: {
                                width: 900,
                                height: 506
                            },
                            websiteHeroImage: {
                                width: 3e3,
                                height: 600
                            }
                        }), st.smallNewsEntryExternalLink, {
                            linkThumbnail: {
                                width: 440,
                                height: 440
                            }
                        }), st.smallNewsEntryArticle, {
                            heroImage: {
                                width: 1950,
                                height: 800
                            },
                            smallThumbnail: {
                                width: 440,
                                height: 440
                            },
                            websiteHeroImage: {
                                width: 3e3,
                                height: 600
                            }
                        }), st.videoBlock, {
                            videoThumbnail: {
                                width: 900,
                                height: 506
                            }
                        }), st.carouselEventPollEntry, {
                            carouselImage: {
                                width: 860,
                                height: 1320
                            },
                            option1Image: {
                                width: 300,
                                height: 400
                            },
                            option2Image: {
                                width: 300,
                                height: 400
                            },
                            option3Image: {
                                width: 300,
                                height: 400
                            },
                            option4Image: {
                                width: 300,
                                height: 400
                            },
                            option5Image: {
                                width: 300,
                                height: 400
                            }
                        }), st.carouselEventProgressTrackerEntry, {
                            carouselImage: {
                                width: 860,
                                height: 1320
                            },
                            milestone1Image: {
                                width: 256,
                                height: 256
                            },
                            milestone2Image: {
                                width: 256,
                                height: 256
                            },
                            milestone3Image: {
                                width: 256,
                                height: 256
                            },
                            milestone4Image: {
                                width: 256,
                                height: 256
                            },
                            milestone5Image: {
                                width: 256,
                                height: 256
                            },
                            milestone6Image: {
                                width: 256,
                                height: 256
                            },
                            milestone7Image: {
                                width: 256,
                                height: 256
                            },
                            milestone8Image: {
                                width: 256,
                                height: 256
                            }
                        }), st.esportCarouselEventEntry, {
                            carouselImage: {
                                width: 860,
                                height: 1280
                            }
                        }), st.esportLiveEventEntry, {
                            carouselImage: {
                                width: 860,
                                height: 1280
                            },
                            eventPromotionLogo: {
                                width: 256,
                                height: 256
                            }
                        }), st.newsEntryVideo, {
                            videoThumbnail: {
                                width: 900,
                                height: 506
                            }
                        }), (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(ln, st.imageBlock, {
                            image: null
                        }), st.featureBlock, {
                            featureThumbnail: {
                                width: 700,
                                height: 700,
                                fit: "default"
                            }
                        }), st.pollBlock, {
                            option1Image: {
                                width: 300,
                                height: 400
                            },
                            option2Image: {
                                width: 300,
                                height: 400
                            },
                            option3Image: {
                                width: 300,
                                height: 400
                            },
                            option4Image: {
                                width: 300,
                                height: 400
                            },
                            option5Image: {
                                width: 300,
                                height: 400
                            }
                        }), st.carouselEventEntry, {
                            carouselImage: {
                                width: 860,
                                height: 1320
                            }
                        }), st.communityCreator, {
                            communityCreatorThumbnail: {
                                width: 50,
                                height: 50
                            }
                        }), st.communityVideoEntry, {
                            communityEntryVideoThumbnail: {
                                width: 640,
                                height: 358
                            }
                        }), st.communityLivestreamEntry, {
                            livestreamEntryVideoThumbnail: {
                                width: 640,
                                height: 358
                            }
                        }), st.esportRewatchMatchEntry, {
                            matchThumbnail: {
                                width: 900,
                                height: 506
                            },
                            playerOneImage: {
                                width: 256,
                                height: 256
                            },
                            playerTwoImage: {
                                width: 256,
                                height: 256
                            }
                        }), st.newsEntryImage, {
                            imageNewsThumbnail: {
                                width: 900,
                                height: 506
                            }
                        }), st.fullscreenEntryCarousel, {
                            backgroundMedia: {
                                width: 1620,
                                height: 1080
                            }
                        }), (0, o.A)(ln, st.popup, {
                            backgroundImage: {
                                width: 1920,
                                height: 1080
                            }
                        })),
                        blogMeta: {
                            site: "@clashofclans",
                            creator: "@clashofclans"
                        },
                        activeContentInDays: {
                            community: 90,
                            news: 90,
                            esport: 90
                        },
                        esport: {
                            enableCarouselTitle: !0
                        },
                        supportPolls: !0,
                        supportTargetPolls: !1,
                        supportSmallArticles: !0,
                        supportFullscreenEntries: !0,
                        supportProgressTrackerEntry: !0,
                        eventPlatformEnabled: !0,
                        ingameProgressTrackersEnabled: !1,
                        targetingFields: ["country", "platform", "countryExclude", "townHallLevel", "builderHallLevel", "campaignId", "avatarIds"],
                        targetingPlatforms: ["iOS", "Android", "Amazon"]
                    },
                    hn = {
                        enabledLocales: ["en", "fr", "de", "it", "ja", "ko", "pl", "pt", "ru", "es", "tr", "zh", "zh-hans"],
                        enabledTabs: ["news", "community", "esport", "blog"],
                        enabledNotificationTypes: ["standard", "medium", "high"],
                        referenceWidth: 993,
                        availableCategories: [{
                            id: "release-notes",
                            name: {
                                en: "Release Notes",
                                fr: "Notes de publication",
                                de: "Versionshinweise",
                                it: "Note di rilascio",
                                ja: "リリース情報",
                                ko: "새 소식",
                                pl: "Informacje o Wydaniu",
                                pt: "Notas de Lançamento",
                                ru: "Информация о версии",
                                es: "Notas de actualización",
                                tr: "Sürüm Notları",
                                zh: "更新說明"
                            },
                            color: "#00000e"
                        }, {
                            id: "strategy",
                            name: {
                                en: "Strategy",
                                fr: "Stratégie",
                                de: "Strategie",
                                it: "Strategia",
                                ja: "ストラテジー",
                                ko: "전략",
                                pl: "Strategia",
                                pt: "Estratégia",
                                ru: "Стратегия",
                                es: "Estrategia",
                                tr: "Strateji",
                                zh: "攻略"
                            },
                            color: "#8000ff"
                        }, {
                            id: "game-updates",
                            name: {
                                en: "Game Updates",
                                fr: "Mises à jour",
                                de: "Updates",
                                it: "Aggiornamenti",
                                ja: "アップデート",
                                ko: "업데이트",
                                pl: "Aktualizacje gry",
                                pt: "Novidades do jogo",
                                ru: "Обновления",
                                es: "Actualizaciones",
                                tr: "Oyun Güncellemeleri",
                                zh: "遊戲更新"
                            },
                            color: "#7ac054"
                        }, {
                            id: "fan-art",
                            name: {
                                en: "Fan Art",
                                fr: "Fan art",
                                de: "Fankunst",
                                it: "Fan art",
                                ja: "ファンアート",
                                ko: "팬아트",
                                pl: "Sztuka fanów",
                                pt: "Arte dos fãs",
                                ru: "Фан-арт",
                                es: "Fan Art",
                                tr: "Fan Çizimi",
                                zh: "玩家作品"
                            },
                            color: "#0080ff"
                        }, {
                            id: "community",
                            name: {
                                en: "Community",
                                fr: "Communauté",
                                de: "Community",
                                it: "Community",
                                ja: "コミュニティ",
                                ko: "커뮤니티",
                                pl: "Wspólnota",
                                pt: "Comunidade",
                                ru: "Сообщество",
                                es: "Comunidad",
                                tr: "Topluluk",
                                zh: "社群"
                            },
                            color: "#ff0000"
                        }, {
                            id: "news",
                            name: {
                                en: "News",
                                fr: "Nouveautés",
                                de: "News",
                                it: "Notizie",
                                ja: "新着",
                                ko: "뉴스",
                                pl: "Aktualności",
                                pt: "Notícias",
                                ru: "Новости",
                                es: "Novedades",
                                tr: "Haberler",
                                zh: "最新情報"
                            },
                            color: "#000000"
                        }, {
                            id: "survey",
                            name: {
                                en: "Survey",
                                fr: "Sondage",
                                de: "Umfrage",
                                it: "Sondaggio",
                                ja: "アンケート",
                                ko: "설문 조사",
                                pl: "Ankieta",
                                pt: "Pesquisa",
                                ru: "Опрос",
                                es: "Encuesta",
                                tr: "Anket",
                                zh: "問卷調查"
                            },
                            color: "#000000"
                        }, {
                            id: "tutorial",
                            name: {
                                en: "Tutorial",
                                fr: "Tutoriel",
                                de: "Tutorial",
                                it: "Tutorial",
                                ja: "チュートリアル",
                                ko: "튜토리얼",
                                pl: "Samouczek",
                                pt: "Tutorial",
                                ru: "Обучение",
                                es: "Tutorial",
                                tr: "Eğitim",
                                zh: "教學"
                            },
                            color: "#800080"
                        }, {
                            id: "video",
                            name: {
                                en: "Video",
                                fr: "Video",
                                de: "Video",
                                it: "Video",
                                ja: "ビデオ",
                                ko: "동영상",
                                pl: "Video",
                                pt: "Video",
                                ru: "видео",
                                es: "Video",
                                tr: "Video",
                                zh: "動畫"
                            },
                            color: "#ff8000"
                        }, {
                            id: "esports",
                            name: {
                                en: "Esports",
                                fr: "Esports",
                                de: "Esports",
                                it: "Esports",
                                ja: "eスポーツ",
                                ko: "이스포츠",
                                pl: "Esports",
                                pt: "Esports",
                                ru: "Киберспорт",
                                es: "Esports",
                                tr: "Espor",
                                zh: "賽事情報"
                            },
                            color: "#0000ff"
                        }, {
                            id: "highlight",
                            name: {
                                en: "Highlight",
                                fr: "Temps fort",
                                de: "Höhepunkt",
                                it: "In evidenza",
                                ja: "ハイライト",
                                ko: "하이라이트",
                                pl: "Wyróżnienie",
                                pt: "Destaque",
                                ru: "Важное",
                                es: "Destacado",
                                tr: "Önemli anlar",
                                zh: "精選對戰"
                            },
                            color: "#8000ff"
                        }, {
                            id: "live",
                            name: {
                                en: "Live",
                                fr: "En direct",
                                de: "Live",
                                it: "Live",
                                ja: "LIVE",
                                ko: "생중계",
                                pl: "Na żywo",
                                pt: "Ao vivo",
                                ru: "Прямой эфир",
                                es: "En vivo",
                                tr: "Canlı",
                                zh: "直播"
                            },
                            color: "#e7c418"
                        }, {
                            id: "behind-the-scenes",
                            name: {
                                en: "Behind the scenes",
                                fr: "Coulisses",
                                de: "Hinter den Kulissen",
                                it: "Dietro le quinte",
                                ja: "舞台裏",
                                ko: "비하인드씬",
                                pl: "Za kulisami",
                                pt: "Bastidores",
                                ru: "За кадром",
                                es: "Tras las cámaras",
                                tr: "Sahne arkası",
                                zh: "幕後花絮"
                            },
                            color: "#ff60af"
                        }],
                        esport: {
                            enableCarouselTitle: !0,
                            enableCarouselSubtitle: !0
                        },
                        resolutions: (cn = {}, (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(cn, st.newsEntryExternalLink, {
                            linkThumbnail: {
                                width: 800,
                                height: 433
                            }
                        }), st.communityCreator, {
                            communityCreatorThumbnail: {
                                width: 50,
                                height: 50
                            }
                        }), st.communityVideoEntry, {
                            communityEntryVideoThumbnail: {
                                width: 860,
                                height: 482
                            }
                        }), st.communityLivestreamEntry, {
                            livestreamEntryVideoThumbnail: {
                                width: 860,
                                height: 482
                            }
                        }), st.newsEntryArticle, {
                            websiteHeroImage: {
                                width: 3e3,
                                height: 600
                            },
                            heroImage: {
                                width: 1600,
                                height: 443
                            },
                            largeThumbnail: {
                                width: 800,
                                height: 433
                            }
                        }), st.newsEntryVideo, {
                            videoThumbnail: {
                                width: 800,
                                height: 433
                            }
                        }), st.pollBlock, {
                            option1Image: {
                                width: 300,
                                height: 400
                            },
                            option2Image: {
                                width: 300,
                                height: 400
                            },
                            option3Image: {
                                width: 300,
                                height: 400
                            },
                            option4Image: {
                                width: 300,
                                height: 400
                            },
                            option5Image: {
                                width: 300,
                                height: 400
                            }
                        }), st.videoBlock, {
                            videoThumbnail: {
                                width: 960,
                                height: 540
                            }
                        }), st.socialLink, {
                            socialLinkImage: {
                                width: 200,
                                height: 150
                            }
                        }), st.imageBlock, {
                            image: null
                        }), (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(cn, st.featureBlock, {
                            featureThumbnail: null
                        }), st.carouselEventEntry, {
                            carouselImage: {
                                width: 1200,
                                height: 750
                            }
                        }), st.carouselEventPollEntry, {
                            carouselImage: {
                                width: 1200,
                                height: 750
                            },
                            option1Image: {
                                width: 300,
                                height: 400
                            },
                            option2Image: {
                                width: 300,
                                height: 400
                            },
                            option3Image: {
                                width: 300,
                                height: 400
                            },
                            option4Image: {
                                width: 300,
                                height: 400
                            },
                            option5Image: {
                                width: 300,
                                height: 400
                            }
                        }), st.esportLiveEventEntry, {
                            carouselImage: {
                                width: 960,
                                height: 540
                            },
                            eventPromotionLogo: {
                                width: 128,
                                height: 128
                            }
                        }), st.esportCarouselEventEntry, {
                            carouselImage: {
                                width: 960,
                                height: 540
                            }
                        }), st.newsEntryImage, {
                            imageNewsThumbnail: {
                                width: 800,
                                height: 433
                            }
                        }), st.carouselEventProgressTrackerEntry, {
                            carouselImage: {
                                width: 1200,
                                height: 750
                            },
                            milestone1Image: {
                                width: 400,
                                height: 360
                            },
                            milestone2Image: {
                                width: 400,
                                height: 360
                            },
                            milestone3Image: {
                                width: 400,
                                height: 360
                            },
                            milestone4Image: {
                                width: 400,
                                height: 360
                            },
                            milestone5Image: {
                                width: 400,
                                height: 360
                            },
                            milestone6Image: {
                                width: 400,
                                height: 360
                            },
                            milestone7Image: {
                                width: 400,
                                height: 360
                            },
                            milestone8Image: {
                                width: 400,
                                height: 360
                            }
                        }), st.fullscreenEntryCarousel, {
                            backgroundMedia: {
                                width: 1620,
                                height: 1080
                            }
                        })),
                        enabledComposePages: ["news", "events"],
                        availableButtonVariants: ["blue", "red", "green", "gold", "pink", "orange", "twitch"],
                        progressBarDefaultColor: "#3178F5",
                        blogMeta: {
                            site: "Brawl Stars",
                            creator: "@BrawlStars"
                        },
                        activeContentInDays: {
                            community: 90,
                            news: 90,
                            esport: 90
                        },
                        supportPolls: !0,
                        supportTargetPolls: !1,
                        supportFullscreenEntries: !0,
                        supportProgressTrackerEntry: !0,
                        targetingFields: ["country", "countryExclude", "platform", "avatarIds", "campaignId"],
                        supercellMakeEnabled: !0,
                        eventPlatformEnabled: !0
                    },
                    vn = {
                        squadbusters: {
                            enabledTabs: ["news", "community", "blog"],
                            enabledLocales: ["en", "fr", "de", "it", "ja", "ko", "pl", "pt", "ru", "es", "tr", "zh", "zh-hans"],
                            enabledNotificationTypes: ["standard"],
                            referenceWidth: 850,
                            availableButtonVariants: ["yellow", "blue", "green", "twitch", "red", "pink"],
                            progressBarDefaultColor: "#FE41FD",
                            availableCategories: [{
                                id: "news",
                                name: {
                                    en: "News",
                                    fr: "Nouveautés",
                                    de: "News",
                                    it: "Notizie",
                                    ja: "新着",
                                    ko: "뉴스",
                                    pl: "Aktualności",
                                    pt: "Notícias",
                                    ru: "Новости",
                                    es: "Novedades",
                                    tr: "Haberler",
                                    zh: "最新情報"
                                },
                                color: "#F7DB1C"
                            }, {
                                id: "community",
                                name: {
                                    en: "Community",
                                    fr: "Communauté",
                                    de: "Community",
                                    it: "Community",
                                    ja: "コミュニティ",
                                    ko: "커뮤니티",
                                    pl: "Wspólnota",
                                    pt: "Comunidade",
                                    ru: "Сообщество",
                                    es: "Comunidad",
                                    tr: "Topluluk",
                                    zh: "社群"
                                },
                                color: "#00E2FD"
                            }, {
                                id: "community-event",
                                name: {
                                    en: "Community Event",
                                    fr: "Événement communautaire",
                                    de: "Community-Ereignis",
                                    it: "Evento della community",
                                    ja: "コミュニティイベント",
                                    ko: "커뮤니티 이벤트",
                                    pl: "Wydarzenie społecznościowe",
                                    pt: "Evento da comunidade",
                                    ru: "Событие сообщества",
                                    es: "Evento de la comunidad",
                                    tr: "Topluluk Etkinliği",
                                    zh: "社群活動"
                                },
                                color: "#BC52EA"
                            }, {
                                id: "video",
                                name: {
                                    en: "Video",
                                    fr: "Video",
                                    de: "Video",
                                    it: "Video",
                                    ja: "ビデオ",
                                    ko: "동영상",
                                    pl: "Video",
                                    pt: "Video",
                                    ru: "видео",
                                    es: "Video",
                                    tr: "Video",
                                    zh: "動畫"
                                },
                                color: "#2D85F3"
                            }, {
                                id: "game-update",
                                name: {
                                    en: "Game Updates",
                                    fr: "Mises à jour",
                                    de: "Updates",
                                    it: "Aggiornamenti",
                                    ja: "アップデート",
                                    ko: "업데이트",
                                    pl: "Aktualizacje gry",
                                    pt: "Novidades do jogo",
                                    ru: "Обновления",
                                    es: "Actualizaciones",
                                    tr: "Oyun Güncellemeleri",
                                    zh: "更新說明"
                                },
                                color: "#FF6FE5"
                            }],
                            enabledComposePages: ["news", "events"],
                            resolutions: (sn = {}, (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(sn, st.newsEntryArticle, {
                                heroImage: {
                                    width: 1600,
                                    height: 443
                                },
                                largeThumbnail: {
                                    width: 1920,
                                    height: 1080
                                },
                                websiteHeroImage: null
                            }), st.newsEntryExternalLink, {
                                linkThumbnail: {
                                    width: 1920,
                                    height: 1080
                                }
                            }), st.videoBlock, {
                                videoThumbnail: {
                                    width: 960,
                                    height: 540
                                }
                            }), st.newsEntryVideo, {
                                videoThumbnail: {
                                    width: 1920,
                                    height: 1080
                                }
                            }), st.imageBlock, {
                                image: null
                            }), st.featureBlock, {
                                featureThumbnail: {
                                    width: 300,
                                    height: 300,
                                    fit: "pad"
                                }
                            }), st.carouselEventEntry, {
                                carouselImage: {
                                    width: 860,
                                    height: 1080
                                }
                            }), st.communityCreator, {
                                communityCreatorThumbnail: {
                                    width: 50,
                                    height: 50
                                }
                            }), st.communityVideoEntry, {
                                communityEntryVideoThumbnail: {
                                    width: 1280,
                                    height: 720
                                }
                            }), st.communityLivestreamEntry, {
                                livestreamEntryVideoThumbnail: {
                                    width: 1280,
                                    height: 720
                                }
                            }), (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(sn, st.carouselEventProgressTrackerEntry, {
                                carouselImage: {
                                    width: 860,
                                    height: 1080
                                },
                                milestone1Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone2Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone3Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone4Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone5Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone6Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone7Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone8Image: {
                                    width: 256,
                                    height: 256
                                }
                            }), st.carouselEventPollEntry, {
                                carouselImage: {
                                    width: 860,
                                    height: 1080
                                },
                                option1Image: {
                                    width: 560,
                                    height: 640
                                },
                                option2Image: {
                                    width: 560,
                                    height: 640
                                },
                                option3Image: {
                                    width: 560,
                                    height: 640
                                },
                                option4Image: {
                                    width: 560,
                                    height: 640
                                },
                                option5Image: {
                                    width: 560,
                                    height: 640
                                }
                            }), st.pollBlock, {
                                option1Image: {
                                    width: 560,
                                    height: 640
                                },
                                option2Image: {
                                    width: 560,
                                    height: 640
                                },
                                option3Image: {
                                    width: 560,
                                    height: 640
                                },
                                option4Image: {
                                    width: 560,
                                    height: 640
                                },
                                option5Image: {
                                    width: 560,
                                    height: 640
                                }
                            }), st.newsEntryImage, {
                                imageNewsThumbnail: {
                                    width: 1920,
                                    height: 1080
                                }
                            }), st.fullscreenEntryCarousel, {
                                backgroundMedia: {
                                    width: 1620,
                                    height: 1080
                                }
                            }), st.popup, {
                                backgroundImage: {
                                    width: 1920,
                                    height: 1080
                                }
                            })),
                            targetingFields: ["country", "countryExclude", "platform", "hideFromYoungPlayer", "campaignId"],
                            preRegBlogSyncEnabled: !0,
                            supportProgressTrackerEntry: !0,
                            supportPolls: !0,
                            supportTargetPolls: !1,
                            ingameProgressTrackersEnabled: !0,
                            leaderboardEnabled: !0
                        },
                        brawlstars: hn,
                        hayday: {
                            enabledTabs: ["news", "community", "blog"],
                            enabledLocales: ["ar", "da", "de", "en", "es", "fi", "fr", "id", "it", "ja", "ko", "ms", "nl", "pt", "ru", "th", "tr", "vi", "zh", "zh-hans"],
                            referenceWidth: 1064,
                            enabledNotificationTypes: ["standard"],
                            availableButtonVariants: ["green", "orange", "blue", "twitch"],
                            progressBarDefaultColor: "#f9b717",
                            availableCategories: [{
                                id: "news",
                                name: {
                                    en: "News",
                                    ar: "أخبار",
                                    da: "Nyheder",
                                    de: "Neues",
                                    es: "Noticias",
                                    fi: "Uutiset",
                                    fr: "Nouvelles",
                                    id: "Promosi",
                                    it: "Notizie",
                                    ja: "ニュース",
                                    ko: "뉴스",
                                    ms: "Berita",
                                    nl: "Nieuws",
                                    pt: "Notícias",
                                    ru: "Новости",
                                    th: "ข่าว",
                                    tr: "Haberler",
                                    vi: "Tin tức",
                                    zh: "最新情報"
                                },
                                color: "#3884b8"
                            }, {
                                id: "game-updates",
                                name: {
                                    en: "Game Updates",
                                    ar: "تحديثات اللعبة",
                                    da: "Spilopdateringer",
                                    de: "Updates",
                                    es: "Novedades",
                                    fi: "Julkaisutiedot",
                                    fr: "Mises à jour",
                                    id: "Pembaruan Game",
                                    it: "Aggiornamenti di gioco",
                                    ja: "アップデート",
                                    ko: "게임 업데이트",
                                    ms: "Kemas Kini",
                                    nl: "Spelupdates",
                                    pt: "Novidades do jogo",
                                    ru: "Обновления",
                                    th: "อัปเดตเกม",
                                    tr: "Oyun Güncellemeleri",
                                    vi: "Cập nhật trò chơi",
                                    zh: "遊戲更新"
                                },
                                color: "#8ed44b"
                            }, {
                                id: "fan-art",
                                name: {
                                    en: "Fan Art",
                                    ar: "إبداعات الجمهور",
                                    da: "Bidrag fra fans",
                                    de: "Fankunst",
                                    es: "Fan Art",
                                    fi: "Fanitaide",
                                    fr: "Fan art",
                                    id: "Seni Buatan Penggemar",
                                    it: "Fan art",
                                    ja: "ファンアート",
                                    ko: "팬아트",
                                    ms: "Seni Peminat",
                                    nl: "Fankunst",
                                    pt: "Arte dos fãs",
                                    ru: "Фан-арт",
                                    th: "แฟนอาร์ท",
                                    tr: "Fan Çizimi",
                                    vi: "Tranh do người hâm mộ vẽ",
                                    zh: "玩家作品"
                                },
                                color: "#de5452"
                            }, {
                                id: "community",
                                name: {
                                    en: "Community",
                                    ar: "المجتمع",
                                    da: "Fællesskab",
                                    de: "Community",
                                    es: "Comunidad",
                                    fi: "Yhteisö",
                                    fr: "Communauté",
                                    id: "Komunitas",
                                    it: "Community",
                                    ja: "コミュニティ",
                                    ko: "커뮤니티",
                                    ms: "Komuniti",
                                    nl: "Community",
                                    pt: "Comunidade",
                                    ru: "Сообщество",
                                    th: "ชุมชน",
                                    tr: "Topluluk",
                                    vi: "Cộng đồng",
                                    zh: "社群"
                                },
                                color: "#d273fa"
                            }, {
                                id: "events",
                                name: {
                                    en: "Events",
                                    ar: "أحداث",
                                    da: "Begivenheder",
                                    de: "Ereignisse",
                                    es: "Eventos",
                                    fi: "Tapahtumat",
                                    fr: "Événements",
                                    id: "Acara",
                                    it: "Eventi",
                                    ja: "イベント",
                                    ko: "이벤트",
                                    ms: "Acara",
                                    nl: "Evenementen",
                                    pt: "Eventos",
                                    ru: "События",
                                    th: "อีเวนท์",
                                    tr: "Etkinlikler",
                                    vi: "Sự kiện",
                                    zh: "活動"
                                },
                                color: "#ff5450"
                            }, {
                                id: "derby",
                                name: {
                                    en: "Derby",
                                    ar: "Derby",
                                    da: "Derby",
                                    de: "Derby",
                                    es: "Derby",
                                    fi: "Derby",
                                    fr: "Derby",
                                    id: "Derby",
                                    it: "Derby",
                                    ja: "Derby",
                                    ko: "Derby",
                                    ms: "Derby",
                                    nl: "Derby",
                                    pt: "Derby",
                                    ru: "Derby",
                                    th: "Derby",
                                    tr: "Derby",
                                    vi: "Derby",
                                    zh: "Derby"
                                },
                                color: "#e0a24f"
                            }, {
                                id: "campaign",
                                name: {
                                    en: "Campaign",
                                    ar: "الحملة",
                                    da: "Kampagne",
                                    de: "Spezialaktion",
                                    es: "Promociones",
                                    fi: "Kampanja",
                                    fr: "Campagne",
                                    id: "Promosi",
                                    it: "Promozioni",
                                    ja: "キャンペーン",
                                    ko: "프로모션",
                                    ms: "Kempen",
                                    nl: "Campagne",
                                    pt: "Promoções",
                                    ru: "Кампания",
                                    th: "แคมเปญ",
                                    tr: "Kampanya",
                                    vi: "Khuyến mãi",
                                    zh: "活動"
                                },
                                color: "#ff80c0"
                            }],
                            enabledComposePages: ["news", "events"],
                            resolutions: (un = {}, (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(un, st.newsEntryExternalLink, {
                                linkThumbnail: {
                                    width: 900,
                                    height: 506
                                }
                            }), st.newsEntryImage, {
                                imageNewsThumbnail: {
                                    width: 900,
                                    height: 506
                                }
                            }), st.newsEntryVideo, {
                                videoThumbnail: {
                                    width: 900,
                                    height: 506
                                }
                            }), st.newsEntryArticle, {
                                heroImage: {
                                    width: 1950,
                                    height: 650
                                },
                                largeThumbnail: {
                                    width: 900,
                                    height: 506
                                },
                                websiteHeroImage: {
                                    width: 3e3,
                                    height: 600
                                }
                            }), st.smallNewsEntryArticle, {
                                heroImage: {
                                    width: 1950,
                                    height: 650
                                },
                                smallThumbnail: {
                                    width: 880,
                                    height: 880
                                },
                                websiteHeroImage: {
                                    width: 3e3,
                                    height: 600
                                }
                            }), st.smallNewsEntryExternalLink, {
                                linkThumbnail: {
                                    width: 880,
                                    height: 880
                                }
                            }), st.videoBlock, {
                                videoThumbnail: {
                                    width: 960,
                                    height: 540
                                }
                            }), st.imageBlock, {
                                image: null
                            }), st.featureBlock, {
                                featureThumbnail: {
                                    width: 700,
                                    height: 700
                                }
                            }), st.pollBlock, {
                                option1Image: {
                                    width: 300,
                                    height: 400,
                                    fit: "pad"
                                },
                                option2Image: {
                                    width: 300,
                                    height: 400,
                                    fit: "pad"
                                },
                                option3Image: {
                                    width: 300,
                                    height: 400,
                                    fit: "pad"
                                },
                                option4Image: {
                                    width: 300,
                                    height: 400,
                                    fit: "pad"
                                },
                                option5Image: {
                                    width: 300,
                                    height: 400,
                                    fit: "pad"
                                }
                            }), (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(un, st.carouselEventEntry, {
                                carouselImage: {
                                    width: 860,
                                    height: 1320
                                }
                            }), st.carouselEventPollEntry, {
                                carouselImage: {
                                    width: 860,
                                    height: 1320,
                                    fit: "pad"
                                },
                                option1Image: {
                                    width: 300,
                                    height: 400,
                                    fit: "pad"
                                },
                                option2Image: {
                                    width: 300,
                                    height: 400,
                                    fit: "pad"
                                },
                                option3Image: {
                                    width: 300,
                                    height: 400,
                                    fit: "pad"
                                },
                                option4Image: {
                                    width: 300,
                                    height: 400,
                                    fit: "pad"
                                },
                                option5Image: {
                                    width: 300,
                                    height: 400,
                                    fit: "pad"
                                }
                            }), st.carouselEventProgressTrackerEntry, {
                                carouselImage: {
                                    width: 860,
                                    height: 1320
                                },
                                milestone1Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone2Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone3Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone4Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone5Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone6Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone7Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone8Image: {
                                    width: 256,
                                    height: 256
                                }
                            }), st.communityCreator, {
                                communityCreatorThumbnail: {
                                    width: 50,
                                    height: 50
                                }
                            }), st.communityVideoEntry, {
                                communityEntryVideoThumbnail: {
                                    width: 860,
                                    height: 482
                                }
                            }), st.communityLivestreamEntry, {
                                livestreamEntryVideoThumbnail: {
                                    width: 860,
                                    height: 482
                                }
                            })),
                            activeContentInDays: {
                                community: 90,
                                news: 90
                            },
                            supportSmallArticles: !0,
                            tabContentFallbacks: {
                                community: {
                                    fi: ["en"],
                                    da: ["en"],
                                    ru: ["en"],
                                    fr: ["en"],
                                    id: ["en"],
                                    it: ["en"],
                                    ja: ["en"],
                                    ko: ["en"],
                                    ms: ["en"],
                                    th: ["en"],
                                    tr: ["en"],
                                    vi: ["en"],
                                    zh: ["en"]
                                }
                            },
                            blogMeta: {
                                site: "Hay Day",
                                creator: "@hayday"
                            },
                            supportPolls: !0,
                            supportTargetPolls: !1,
                            supportProgressTrackerEntry: !0,
                            supercellMakeEnabled: !0,
                            targetingFields: ["country", "countryExclude", "platform", "avatarIds", "campaignId"]
                        },
                        clashroyale: {
                            enabledTabs: ["news", "community", "esport", "blog"],
                            enabledLocales: ["en", "zh", "zh-hans", "fr", "de", "id", "it", "ja", "ko", "pt", "ru", "es"],
                            referenceWidth: 412,
                            tabContentFallbacks: {
                                community: {
                                    id: ["en"],
                                    ru: ["en"]
                                },
                                esport: {
                                    id: ["en"],
                                    ru: ["en"]
                                }
                            },
                            enabledNotificationTypes: ["standard"],
                            availableCategories: [{
                                id: "esport-news",
                                name: {
                                    en: "News",
                                    ar: "أخبار",
                                    nl: "Nieuws",
                                    fi: "Uutiset",
                                    fr: "Actualités",
                                    de: "News",
                                    id: "Berita",
                                    it: "Notizie",
                                    ja: "ニュース",
                                    ko: "소식",
                                    ms: "Berita",
                                    pt: "Notícias",
                                    ru: "Новости",
                                    pl: "Aktualności",
                                    es: "Noticias",
                                    th: "ข่าว",
                                    tr: "Haberler",
                                    vi: "Tin tức",
                                    zh: "最新情報"
                                },
                                color: "#005fae"
                            }, {
                                id: "news",
                                name: {
                                    en: "News",
                                    ar: "أخبار",
                                    nl: "Nieuws",
                                    fi: "Uutiset",
                                    fr: "Actualités",
                                    de: "News",
                                    id: "Berita",
                                    it: "Notizie",
                                    ja: "ニュース",
                                    ko: "소식",
                                    ms: "Berita",
                                    pt: "Notícias",
                                    ru: "Новости",
                                    pl: "Aktualności",
                                    es: "Noticias",
                                    th: "ข่าว",
                                    tr: "Haberler",
                                    vi: "Tin tức",
                                    zh: "最新情報"
                                },
                                color: "#4549a8"
                            }, {
                                id: "release-notes",
                                name: {
                                    en: "Release Notes",
                                    ar: "ملاحظات الإصدار",
                                    nl: "Release-opmerkingen",
                                    fi: "Julkaisutiedot",
                                    fr: "Notes de patch",
                                    de: "Versionshinweise",
                                    id: "Catatan Rilis",
                                    it: "Note di rilascio",
                                    ja: "リリース情報",
                                    ko: "새 소식",
                                    ms: "Nota Keluaran",
                                    pt: "Notas de lançamento",
                                    ru: "Информация о версии",
                                    pl: "O wersji",
                                    es: "Notas de actualización",
                                    th: "รายละเอียดเปิดตัว",
                                    tr: "Sürüm Notları",
                                    vi: "Thông tin về phiên bản",
                                    zh: "更新說明"
                                },
                                color: "#519f5c"
                            }, {
                                id: "fun",
                                name: {
                                    en: "Fun",
                                    ar: "تسالي",
                                    nl: "Leuk",
                                    fi: "Hupi",
                                    fr: "Fun",
                                    de: "Spaß",
                                    id: "Keseruan",
                                    it: "Divertimento",
                                    ja: "エンタメ",
                                    ko: "재미",
                                    ms: "Hiburan",
                                    pt: "Diversão",
                                    ru: "Развлечения",
                                    pl: "Rozrywka",
                                    es: "Diversión",
                                    th: "เรื่องสนุกๆ",
                                    tr: "Eğlence",
                                    vi: "Giải trí",
                                    zh: "趣味"
                                },
                                color: "#b588ff"
                            }, {
                                id: "art",
                                name: {
                                    en: "Art",
                                    ar: "أعمال فنية",
                                    nl: "Kunst",
                                    fi: "Taide",
                                    fr: "Art",
                                    de: "Artwork",
                                    id: "Seni",
                                    it: "Arte",
                                    ja: "アート",
                                    ko: "아트",
                                    ms: "Seni",
                                    pt: "Arte",
                                    ru: "Арт",
                                    pl: "Grafika",
                                    es: "Arte",
                                    th: "งานอาร์ต",
                                    tr: "Görseller",
                                    vi: "Tác phẩm nghệ thuật",
                                    zh: "藝術"
                                },
                                color: "#ff8b04"
                            }, {
                                id: "community",
                                name: {
                                    en: "Community",
                                    ar: "مجتمع اللعبة",
                                    nl: "Community",
                                    fi: "Yhteisö",
                                    fr: "Communauté",
                                    de: "Community",
                                    id: "Komunitas",
                                    it: "Community",
                                    ko: "커뮤니티",
                                    ms: "Komuniti",
                                    pt: "Comunidade",
                                    ru: "Сообщество",
                                    pl: "Społeczność",
                                    es: "Comunidad",
                                    th: "ชุมชน",
                                    tr: "Oyuncular",
                                    vi: "Cộng đồng",
                                    zh: "社群"
                                },
                                color: "#dc563f"
                            }, {
                                id: "esports",
                                name: {
                                    en: "Esports",
                                    ar: "المسابقات الإلكترونية",
                                    nl: "E-sports",
                                    fi: "E-urheilu",
                                    fr: "E-sport",
                                    de: "E-Sports",
                                    id: "Esports",
                                    it: "Esports",
                                    ja: "eスポーツ",
                                    ko: "e스포츠",
                                    ms: "E-sukan",
                                    pt: "E-sports",
                                    ru: "Киберспорт",
                                    pl: "E-sport",
                                    es: "eSports",
                                    th: "อีสปอร์ต",
                                    tr: "E-spor",
                                    vi: "Thể thao điện tử",
                                    zh: "賽事"
                                },
                                color: "#19eb86"
                            }, {
                                id: "highlights",
                                name: {
                                    en: "Highlights",
                                    ar: "أبرز اللحظات",
                                    nl: "Hoogtepunten",
                                    fi: "Kohokohdat",
                                    fr: "Temps forts",
                                    de: "Highlights",
                                    id: "Sorotan",
                                    it: "Momenti salienti",
                                    ko: "하이라이트",
                                    ms: "Sorotan",
                                    pt: "Destaques",
                                    ru: "Лучшие моменты",
                                    pl: "Najważniejsze",
                                    es: "Lo más destacado",
                                    th: "ไฮไลต์",
                                    tr: "Öne Çıkanlar",
                                    vi: "Nổi bật",
                                    zh: "精彩時刻"
                                },
                                color: "#426bbd"
                            }, {
                                id: "official-art",
                                name: {
                                    en: "Official art",
                                    ar: "أعمال فنية رسمية",
                                    nl: "Officiële kunst",
                                    fi: "Virallinen taide",
                                    fr: "Art officiel",
                                    de: "Offizielles Artwork",
                                    id: "Seni Resmi",
                                    it: "Illustrazioni ufficiali",
                                    ja: "公式アート",
                                    ko: "공식 아트",
                                    ms: "Seni rasmi",
                                    pt: "Arte oficial",
                                    ru: "Официальный арт",
                                    pl: "Oficjalna grafika",
                                    es: "Arte oficial",
                                    th: "งานอาร์ตแบบเป็นทางการ",
                                    tr: "Resmi Görseller",
                                    vi: "Tác phẩm nghệ thuật chính thức",
                                    zh: "官方作品"
                                },
                                color: "#426bbd"
                            }, {
                                id: "strategy",
                                name: {
                                    en: "Strategy",
                                    ar: "إستراتيجيات",
                                    nl: "Strategie",
                                    fi: "Strategia",
                                    fr: "Stratégie",
                                    de: "Strategie",
                                    id: "Strategi",
                                    it: "Strategia",
                                    ja: "戦略",
                                    ko: "전략",
                                    ms: "Strategi",
                                    pt: "Estratégia",
                                    ru: "Стратегия",
                                    pl: "Strategia",
                                    es: "Estrategia",
                                    th: "กลยุทธ์",
                                    tr: "Strateji",
                                    vi: "Chiến thuật",
                                    zh: "攻略"
                                },
                                color: "#cc3e48"
                            }],
                            esport: {
                                enableCarouselTitle: !0
                            },
                            enabledComposePages: ["news", "events"],
                            resolutions: (mn = {}, (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(mn, st.carouselEventEntry, {
                                carouselImage: {
                                    width: 960,
                                    height: 764
                                }
                            }), st.carouselEventPollEntry, {
                                carouselImage: {
                                    width: 960,
                                    height: 764
                                },
                                option1Image: {
                                    width: 300,
                                    height: 400
                                },
                                option2Image: {
                                    width: 300,
                                    height: 400
                                },
                                option3Image: {
                                    width: 300,
                                    height: 400
                                },
                                option4Image: {
                                    width: 300,
                                    height: 400
                                },
                                option5Image: {
                                    width: 300,
                                    height: 400
                                }
                            }), st.carouselEventPollTargetsEntry, {
                                carouselImage: {
                                    width: 960,
                                    height: 764
                                }
                            }), st.esportCarouselEventEntry, {
                                carouselImage: {
                                    width: 960,
                                    height: 764
                                }
                            }), st.esportLiveEventEntry, {
                                carouselImage: {
                                    width: 960,
                                    height: 764
                                },
                                eventPromotionLogo: {
                                    width: 128,
                                    height: 128
                                }
                            }), st.newsEntryExternalLink, {
                                linkThumbnail: {
                                    width: 960,
                                    height: 540
                                }
                            }), st.smallNewsEntryExternalLink, {
                                linkThumbnail: {
                                    width: 440,
                                    height: 440
                                }
                            }), st.newsEntryArticle, {
                                heroImage: {
                                    width: 720,
                                    height: 405
                                },
                                largeThumbnail: {
                                    width: 960,
                                    height: 563
                                },
                                websiteHeroImage: {
                                    width: 3e3,
                                    height: 600
                                }
                            }), st.smallNewsEntryArticle, {
                                heroImage: {
                                    width: 720,
                                    height: 405
                                },
                                smallThumbnail: {
                                    width: 440,
                                    height: 440
                                },
                                websiteHeroImage: {
                                    width: 3e3,
                                    height: 600
                                }
                            }), st.videoBlock, {
                                videoThumbnail: {
                                    width: 960,
                                    height: 540
                                }
                            }), (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(mn, st.newsEntryVideo, {
                                videoThumbnail: {
                                    width: 960,
                                    height: 540
                                }
                            }), st.imageBlock, {
                                image: null
                            }), st.newsEntryImage, {
                                imageNewsThumbnail: {
                                    width: 960,
                                    height: 563
                                }
                            }), st.featureBlock, {
                                featureThumbnail: {
                                    width: 400,
                                    height: 450,
                                    fit: "default"
                                }
                            }), st.pollBlock, {
                                option1Image: {
                                    width: 300,
                                    height: 400
                                },
                                option2Image: {
                                    width: 300,
                                    height: 400
                                },
                                option3Image: {
                                    width: 300,
                                    height: 400
                                },
                                option4Image: {
                                    width: 300,
                                    height: 400
                                },
                                option5Image: {
                                    width: 300,
                                    height: 400
                                }
                            }), st.communityCreator, {
                                communityCreatorThumbnail: {
                                    width: 50,
                                    height: 50
                                }
                            }), st.communityVideoEntry, {
                                communityEntryVideoThumbnail: {
                                    width: 860,
                                    height: 482
                                }
                            }), st.communityLivestreamEntry, {
                                livestreamEntryVideoThumbnail: {
                                    width: 860,
                                    height: 482
                                }
                            }), st.esportRewatchMatchEntry, {
                                matchThumbnail: {
                                    width: 960,
                                    height: 540
                                },
                                playerOneImage: {
                                    width: 480,
                                    height: 540
                                },
                                playerTwoImage: {
                                    width: 480,
                                    height: 540
                                }
                            }), st.fullscreenEntryCarousel, {
                                backgroundMedia: {
                                    width: 960,
                                    height: 1280
                                }
                            }), (0, o.A)((0, o.A)(mn, st.carouselEventProgressTrackerEntry, {
                                carouselImage: {
                                    width: 960,
                                    height: 764
                                },
                                milestone1Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone2Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone3Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone4Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone5Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone6Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone7Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone8Image: {
                                    width: 256,
                                    height: 256
                                }
                            }), st.popup, {
                                backgroundImage: {
                                    width: 1170,
                                    height: 1600
                                }
                            })),
                            availableButtonVariants: ["gold", "green", "red", "blue", "red-play", "purple"],
                            progressBarDefaultColor: "#66abf2",
                            blogMeta: {
                                site: "@clashroyale",
                                creator: "@clashroyale"
                            },
                            activeContentInDays: {
                                community: 90,
                                news: 90,
                                esport: 90
                            },
                            supportSmallArticles: !0,
                            supportEsportRewatchMatchEntry: !0,
                            supportFullscreenEntries: !0,
                            supportPolls: !0,
                            supportTargetPolls: !0,
                            supportProgressTrackerEntry: !0,
                            targetingFields: ["country", "countryExclude", "platform", "campaignId"],
                            supercellMakeEnabled: !0,
                            eventPlatformEnabled: !0,
                            ingameProgressTrackersEnabled: !0
                        },
                        clashofclans: pn,
                        rogue: {
                            enabledTabs: ["news", "blog"],
                            enabledLocales: ["en", "fr", "de", "it", "ja", "ko", "pl", "pt", "ru", "es", "tr", "zh", "zh-hans"],
                            enabledNotificationTypes: ["standard"],
                            availableButtonVariants: ["orange", "cyan", "purple", "pink"],
                            referenceWidth: 850,
                            availableCategories: [{
                                id: "news",
                                name: {
                                    en: "News",
                                    es: "News",
                                    fr: "News",
                                    zh: "News"
                                },
                                color: "#4240A0"
                            }],
                            enabledComposePages: ["news", "events"],
                            resolutions: (dn = {}, (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(dn, st.smallNewsEntryExternalLink, {
                                linkThumbnail: {
                                    width: 880,
                                    height: 880
                                }
                            }), st.smallNewsEntryArticle, {
                                smallThumbnail: {
                                    width: 880,
                                    height: 880
                                },
                                heroImage: {
                                    width: 1600,
                                    height: 443
                                },
                                websiteHeroImage: null
                            }), st.newsEntryArticle, {
                                heroImage: {
                                    width: 1600,
                                    height: 443
                                },
                                largeThumbnail: {
                                    width: 800,
                                    height: 433
                                },
                                websiteHeroImage: null
                            }), st.newsEntryExternalLink, {
                                linkThumbnail: {
                                    width: 800,
                                    height: 433
                                }
                            }), st.videoBlock, {
                                videoThumbnail: {
                                    width: 960,
                                    height: 540
                                }
                            }), st.newsEntryVideo, {
                                videoThumbnail: {
                                    width: 800,
                                    height: 433
                                }
                            }), st.imageBlock, {
                                image: null
                            }), st.featureBlock, {
                                featureThumbnail: {
                                    width: 300,
                                    height: 300
                                }
                            }), st.pollBlock, {
                                option1Image: {
                                    width: 240,
                                    height: 380
                                },
                                option2Image: {
                                    width: 240,
                                    height: 380
                                },
                                option3Image: {
                                    width: 240,
                                    height: 380
                                },
                                option4Image: {
                                    width: 240,
                                    height: 380
                                },
                                option5Image: {
                                    width: 240,
                                    height: 380
                                }
                            }), st.carouselEventEntry, {
                                carouselImage: {
                                    width: 800,
                                    height: 1161
                                }
                            }), (0, o.A)((0, o.A)(dn, st.carouselEventPollEntry, {
                                carouselImage: {
                                    width: 800,
                                    height: 1161
                                },
                                option1Image: {
                                    width: 240,
                                    height: 380
                                },
                                option2Image: {
                                    width: 240,
                                    height: 380
                                },
                                option3Image: {
                                    width: 240,
                                    height: 380
                                },
                                option4Image: {
                                    width: 240,
                                    height: 380
                                },
                                option5Image: {
                                    width: 240,
                                    height: 380
                                }
                            }), st.newsEntryImage, {
                                imageNewsThumbnail: {
                                    width: 800,
                                    height: 433
                                }
                            })),
                            supportPolls: !0,
                            supportTargetPolls: !1,
                            supportSmallArticles: !0,
                            targetingFields: ["country", "countryExclude", "platform"],
                            preRegBlogSyncEnabled: !0
                        },
                        boombeach: {
                            enabledTabs: ["news", "community", "blog"],
                            enabledLocales: ["en"],
                            enabledNotificationTypes: ["standard"],
                            referenceWidth: 993,
                            availableButtonVariants: ["blue"],
                            availableCategories: [{
                                name: {
                                    en: "Activity"
                                },
                                id: "activity",
                                color: "#50418c"
                            }, {
                                name: {
                                    en: "News"
                                },
                                id: "news",
                                color: "#50418c"
                            }, {
                                name: {
                                    en: "Blog"
                                },
                                id: "blog",
                                color: "#379348"
                            }, {
                                name: {
                                    en: "Updates"
                                },
                                id: "updates",
                                color: "#007ecc"
                            }, {
                                name: {
                                    en: "Events"
                                },
                                id: "events",
                                color: "#50388c"
                            }, {
                                name: {
                                    en: "Strategy"
                                },
                                id: "strategy",
                                color: "#1b7f85"
                            }, {
                                name: {
                                    en: "Community"
                                },
                                id: "community",
                                color: "#eb8a4b"
                            }],
                            enabledComposePages: ["news", "events"],
                            resolutions: (gn = {}, (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(gn, st.newsEntryExternalLink, {
                                linkThumbnail: {
                                    width: 900,
                                    height: 493
                                }
                            }), st.newsEntryArticle, {
                                heroImage: {
                                    width: 1950,
                                    height: 650,
                                    fit: "default"
                                },
                                largeThumbnail: {
                                    width: 900,
                                    height: 493
                                },
                                websiteHeroImage: {
                                    width: 3e3,
                                    height: 600
                                }
                            }), st.smallNewsEntryExternalLink, {
                                linkThumbnail: {
                                    width: 880,
                                    height: 880
                                }
                            }), st.smallNewsEntryArticle, {
                                heroImage: {
                                    width: 1950,
                                    height: 650,
                                    fit: "default"
                                },
                                smallThumbnail: {
                                    width: 880,
                                    height: 880
                                },
                                websiteHeroImage: {
                                    width: 3e3,
                                    height: 600
                                }
                            }), st.videoBlock, {
                                videoThumbnail: {
                                    width: 900,
                                    height: 493
                                }
                            }), st.pollBlock, {
                                option1Image: {
                                    width: 300,
                                    height: 400
                                },
                                option2Image: {
                                    width: 300,
                                    height: 400
                                },
                                option3Image: {
                                    width: 300,
                                    height: 400
                                },
                                option4Image: {
                                    width: 300,
                                    height: 400
                                },
                                option5Image: {
                                    width: 300,
                                    height: 400
                                }
                            }), st.carouselEventPollEntry, {
                                carouselImage: {
                                    width: 860,
                                    height: 1320
                                },
                                option1Image: {
                                    width: 300,
                                    height: 400
                                },
                                option2Image: {
                                    width: 300,
                                    height: 400
                                },
                                option3Image: {
                                    width: 300,
                                    height: 400
                                },
                                option4Image: {
                                    width: 300,
                                    height: 400
                                },
                                option5Image: {
                                    width: 300,
                                    height: 400
                                }
                            }), st.newsEntryVideo, {
                                videoThumbnail: {
                                    width: 900,
                                    height: 493
                                }
                            }), st.imageBlock, {
                                image: null
                            }), st.featureBlock, {
                                featureThumbnail: {
                                    width: 700,
                                    height: 700
                                }
                            }), (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)(gn, st.carouselEventEntry, {
                                carouselImage: {
                                    width: 860,
                                    height: 1320
                                }
                            }), st.carouselEventProgressTrackerEntry, {
                                carouselImage: {
                                    width: 860,
                                    height: 1320
                                },
                                milestone1Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone2Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone3Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone4Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone5Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone6Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone7Image: {
                                    width: 256,
                                    height: 256
                                },
                                milestone8Image: {
                                    width: 256,
                                    height: 256
                                }
                            }), st.communityCreator, {
                                communityCreatorThumbnail: {
                                    width: 50,
                                    height: 50
                                }
                            }), st.communityVideoEntry, {
                                communityEntryVideoThumbnail: {
                                    width: 860,
                                    height: 482
                                }
                            }), st.communityLivestreamEntry, {
                                livestreamEntryVideoThumbnail: {
                                    width: 860,
                                    height: 482
                                }
                            }), st.newsEntryImage, {
                                imageNewsThumbnail: {
                                    width: 900,
                                    height: 493
                                }
                            })),
                            blogMeta: {
                                site: "Boom Beach",
                                creator: "@BoomBeach"
                            },
                            activeContentInDays: {
                                community: 90,
                                news: 90
                            },
                            supportPolls: !0,
                            supportTargetPolls: !1,
                            supportProgressTrackerEntry: !1,
                            targetingFields: ["country", "countryExclude", "platform", "campaignId"],
                            notifyOnNewCommunityContent: !0
                        }
                    },
                    fn = Y.Ay.custom((function (e) {
                        var t = Y.Ay.string().parse(e).split("-"),
                            n = (0, ct.A)(t),
                            a = n[0],
                            r = n.slice(1),
                            o = Me.parse(r.join("-"));
                        return "LocaleSpecificEditor" === a && o
                    })),
                    yn = Y.Ay.custom((function (e) {
                        var t = Y.Ay.string().parse(e).split("-"),
                            n = (0, ct.A)(t),
                            a = n[0],
                            r = n.slice(1),
                            o = Me.parse(r.join("-"));
                        return "LocaleSpecificEsportEditor" === a && o
                    })),
                    En = (Y.Ay.enum(["CommunityManager", "StagingAccess", "EsportsManager", "CommunityTabAdmin", "TagEditor", "CommunityManagerWithPublish", "CommunityManagerWithoutPublish"]).or(fn).or(yn), function (e) {
                        return {
                            effect: "allow",
                            constraint: {
                                and: [{
                                    equals: [{
                                        doc: "sys.type"
                                    }, "Entry"]
                                }, {
                                    equals: [{
                                        doc: "sys.contentType.sys.id"
                                    }, e]
                                }]
                            },
                            actions: ["read"]
                        }
                    }),
                    bn = function (e) {
                        return {
                            effect: "allow",
                            constraint: {
                                and: [{
                                    equals: [{
                                        doc: "sys.type"
                                    }, "Entry"]
                                }, {
                                    equals: [{
                                        doc: "sys.contentType.sys.id"
                                    }, e]
                                }]
                            },
                            actions: ["publish", "unpublish"]
                        }
                    },
                    wn = (n(27011), n(98752), [st.communityCreator, st.communityVideoEntry, st.communityLivestreamEntry]);
                [{
                    effect: "allow",
                    constraint: {
                        and: [{
                            equals: [{
                                doc: "sys.type"
                            }, "Entry"]
                        }, {
                            equals: [{
                                doc: "sys.createdBy.sys.id"
                            }, "User.current()"]
                        }]
                    },
                    actions: "all"
                }, {
                    effect: "allow",
                    constraint: {
                        and: [{
                            equals: [{
                                doc: "sys.type"
                            }, "Entry"]
                        }, {
                            equals: [{
                                doc: "sys.createdBy.sys.id"
                            }, "User.current()"]
                        }]
                    },
                    actions: ["delete"]
                }].concat((0, E.A)(wn.flatMap((function (e) {
                    return [(t = e, {
                        effect: "allow",
                        constraint: {
                            and: [{
                                equals: [{
                                    doc: "sys.type"
                                }, "Entry"]
                            }, {
                                equals: [{
                                    doc: "sys.contentType.sys.id"
                                }, t]
                            }]
                        },
                        actions: ["create"]
                    }), En(e), bn(e)];
                    var t
                }))), (0, E.A)([{
                    effect: "allow",
                    constraint: {
                        and: [{
                            equals: [{
                                doc: "sys.type"
                            }, "Asset"]
                        }]
                    },
                    actions: "all"
                }, {
                    effect: "allow",
                    constraint: {
                        and: [{
                            equals: [{
                                doc: "sys.type"
                            }, "Asset"]
                        }, {
                            equals: [{
                                doc: "sys.createdBy.sys.id"
                            }, "User.current()"]
                        }]
                    },
                    actions: "all"
                }, {
                    effect: "allow",
                    constraint: {
                        and: [{
                            equals: [{
                                doc: "sys.type"
                            }, "Asset"]
                        }]
                    },
                    actions: ["create"]
                }, {
                    effect: "allow",
                    constraint: {
                        and: [{
                            equals: [{
                                doc: "sys.type"
                            }, "Asset"]
                        }]
                    },
                    actions: ["read"]
                }, {
                    effect: "allow",
                    constraint: {
                        and: [{
                            equals: [{
                                doc: "sys.type"
                            }, "Asset"]
                        }, {
                            equals: [{
                                doc: "sys.createdBy.sys.id"
                            }, "User.current()"]
                        }]
                    },
                    actions: ["publish", "unpublish"]
                }, {
                    effect: "deny",
                    constraint: {
                        and: [{
                            equals: [{
                                doc: "sys.type"
                            }, "Asset"]
                        }]
                    },
                    actions: ["archive", "unarchive"]
                }])), n(45073), n(63252), n(94149), n(83701), n(86741), n(45950), n(67216), n(1643);
                var In = {
                    boombeach: "OpenShop",
                    brawlstars: "shop",
                    clashofclans: "OpenShop",
                    clashroyale: "shop",
                    hayday: "OpenDiamondShop",
                    squadbusters: "OpenShop",
                    rogue: void 0
                };

                function Nn(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a
                }
                Object.fromEntries(Object.entries({
                    AF: "Afghanistan",
                    AX: "Åland Islands",
                    AL: "Albania",
                    DZ: "Algeria",
                    AS: "American Samoa",
                    AD: "Andorra",
                    AO: "Angola",
                    AI: "Anguilla",
                    AQ: "Antarctica",
                    AG: "Antigua & Barbuda",
                    AR: "Argentina",
                    AM: "Armenia",
                    AW: "Aruba",
                    AU: "Australia",
                    AT: "Austria",
                    AZ: "Azerbaijan",
                    BS: "Bahamas",
                    BH: "Bahrain",
                    BD: "Bangladesh",
                    BB: "Barbados",
                    BY: "Belarus",
                    BE: "Belgium",
                    BZ: "Belize",
                    BJ: "Benin",
                    BM: "Bermuda",
                    BT: "Bhutan",
                    BO: "Bolivia",
                    BA: "Bosnia & Herzegovina",
                    BW: "Botswana",
                    BV: "Bouvet Island",
                    BR: "Brazil",
                    IO: "British Indian Ocean Territory",
                    VG: "British Virgin Islands",
                    BN: "Brunei",
                    BG: "Bulgaria",
                    BF: "Burkina Faso",
                    BI: "Burundi",
                    KH: "Cambodia",
                    CM: "Cameroon",
                    CA: "Canada",
                    CV: "Cape Verde",
                    BQ: "Caribbean Netherlands",
                    KY: "Cayman Islands",
                    CF: "Central African Republic",
                    TD: "Chad",
                    CL: "Chile",
                    CN: "China",
                    CX: "Christmas Island",
                    CC: "Cocos (Keeling) Islands",
                    CO: "Colombia",
                    KM: "Comoros",
                    CG: "Congo - Brazzaville",
                    CD: "Congo - Kinshasa",
                    CK: "Cook Islands",
                    CR: "Costa Rica",
                    CI: "Côte d’Ivoire",
                    HR: "Croatia",
                    CU: "Cuba",
                    CW: "Curaçao",
                    CY: "Cyprus",
                    CZ: "Czechia",
                    DK: "Denmark",
                    DJ: "Djibouti",
                    DM: "Dominica",
                    DO: "Dominican Republic",
                    EC: "Ecuador",
                    EG: "Egypt",
                    SV: "El Salvador",
                    GQ: "Equatorial Guinea",
                    ER: "Eritrea",
                    EE: "Estonia",
                    SZ: "Eswatini",
                    ET: "Ethiopia",
                    FK: "Falkland Islands",
                    FO: "Faroe Islands",
                    FJ: "Fiji",
                    FI: "Finland",
                    FR: "France",
                    GF: "French Guiana",
                    PF: "French Polynesia",
                    TF: "French Southern Territories",
                    GA: "Gabon",
                    GM: "Gambia",
                    GE: "Georgia",
                    DE: "Germany",
                    GH: "Ghana",
                    GI: "Gibraltar",
                    GR: "Greece",
                    GL: "Greenland",
                    GD: "Grenada",
                    GP: "Guadeloupe",
                    GU: "Guam",
                    GT: "Guatemala",
                    GG: "Guernsey",
                    GN: "Guinea",
                    GW: "Guinea-Bissau",
                    GY: "Guyana",
                    HT: "Haiti",
                    HM: "Heard & McDonald Islands",
                    HN: "Honduras",
                    HK: "Hong Kong SAR China",
                    HU: "Hungary",
                    IS: "Iceland",
                    IN: "India",
                    ID: "Indonesia",
                    IR: "Iran",
                    IQ: "Iraq",
                    IE: "Ireland",
                    IM: "Isle of Man",
                    IL: "Israel",
                    IT: "Italy",
                    JM: "Jamaica",
                    JP: "Japan",
                    JE: "Jersey",
                    JO: "Jordan",
                    KZ: "Kazakhstan",
                    KE: "Kenya",
                    KI: "Kiribati",
                    KW: "Kuwait",
                    KG: "Kyrgyzstan",
                    LA: "Laos",
                    LV: "Latvia",
                    LB: "Lebanon",
                    LS: "Lesotho",
                    LR: "Liberia",
                    LY: "Libya",
                    LI: "Liechtenstein",
                    LT: "Lithuania",
                    LU: "Luxembourg",
                    MO: "Macao SAR China",
                    MG: "Madagascar",
                    MW: "Malawi",
                    MY: "Malaysia",
                    MV: "Maldives",
                    ML: "Mali",
                    MT: "Malta",
                    MH: "Marshall Islands",
                    MQ: "Martinique",
                    MR: "Mauritania",
                    MU: "Mauritius",
                    YT: "Mayotte",
                    MX: "Mexico",
                    FM: "Micronesia",
                    MD: "Moldova",
                    MC: "Monaco",
                    MN: "Mongolia",
                    ME: "Montenegro",
                    MS: "Montserrat",
                    MA: "Morocco",
                    MZ: "Mozambique",
                    MM: "Myanmar (Burma)",
                    NA: "Namibia",
                    NR: "Nauru",
                    NP: "Nepal",
                    NL: "Netherlands",
                    NC: "New Caledonia",
                    NZ: "New Zealand",
                    NI: "Nicaragua",
                    NE: "Niger",
                    NG: "Nigeria",
                    NU: "Niue",
                    NF: "Norfolk Island",
                    KP: "North Korea",
                    MK: "North Macedonia",
                    MP: "Northern Mariana Islands",
                    NO: "Norway",
                    OM: "Oman",
                    PK: "Pakistan",
                    PW: "Palau",
                    PS: "Palestinian Territories",
                    PA: "Panama",
                    PG: "Papua New Guinea",
                    PY: "Paraguay",
                    PE: "Peru",
                    PH: "Philippines",
                    PN: "Pitcairn Islands",
                    PL: "Poland",
                    PT: "Portugal",
                    PR: "Puerto Rico",
                    QA: "Qatar",
                    RE: "Réunion",
                    RO: "Romania",
                    RU: "Russia",
                    RW: "Rwanda",
                    WS: "Samoa",
                    SM: "San Marino",
                    ST: "São Tomé & Príncipe",
                    SA: "Saudi Arabia",
                    SN: "Senegal",
                    RS: "Serbia",
                    SC: "Seychelles",
                    SL: "Sierra Leone",
                    SG: "Singapore",
                    SX: "Sint Maarten",
                    SK: "Slovakia",
                    SI: "Slovenia",
                    SB: "Solomon Islands",
                    SO: "Somalia",
                    ZA: "South Africa",
                    GS: "South Georgia & South Sandwich Islands",
                    KR: "South Korea",
                    SS: "South Sudan",
                    ES: "Spain",
                    LK: "Sri Lanka",
                    BL: "St. Barthélemy",
                    SH: "St. Helena",
                    KN: "St. Kitts & Nevis",
                    LC: "St. Lucia",
                    MF: "St. Martin",
                    PM: "St. Pierre & Miquelon",
                    VC: "St. Vincent & Grenadines",
                    SD: "Sudan",
                    SR: "Suriname",
                    SJ: "Svalbard & Jan Mayen",
                    SE: "Sweden",
                    CH: "Switzerland",
                    SY: "Syria",
                    TW: "Taiwan",
                    TJ: "Tajikistan",
                    TZ: "Tanzania",
                    TH: "Thailand",
                    TL: "Timor-Leste",
                    TG: "Togo",
                    TK: "Tokelau",
                    TO: "Tonga",
                    TT: "Trinidad & Tobago",
                    TN: "Tunisia",
                    TR: "Turkey",
                    TM: "Turkmenistan",
                    TC: "Turks & Caicos Islands",
                    TV: "Tuvalu",
                    UM: "U.S. Outlying Islands",
                    VI: "U.S. Virgin Islands",
                    UG: "Uganda",
                    UA: "Ukraine",
                    AE: "United Arab Emirates",
                    GB: "United Kingdom",
                    US: "United States",
                    UY: "Uruguay",
                    UZ: "Uzbekistan",
                    VU: "Vanuatu",
                    VA: "Vatican City",
                    VE: "Venezuela",
                    VN: "Vietnam",
                    WF: "Wallis & Futuna",
                    EH: "Western Sahara",
                    YE: "Yemen",
                    ZM: "Zambia",
                    ZW: "Zimbabwe"
                }).map((function (e) {
                    return e.reverse()
                }))), n(8737), n(72273), n(31197);
                var kn = {
                        community: [st.communityVideoEntry, st.communityLivestreamEntry],
                        esport: [st.esportNewsEntry, st.esportCarouselEntry],
                        news: [st.newsEntry, st.carouselEvent],
                        blog: []
                    },
                    An = (Object.entries(kn).reduce((function (e, t) {
                        var n, a = (0, b.A)(t, 2),
                            r = a[0],
                            o = function (e, t) {
                                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(e) || (n = function (e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return Nn(e, t);
                                                var n = {}.toString.call(e).slice(8, -1);
                                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Nn(e, t) : void 0
                                            }
                                        }(e)) || t && e && "number" == typeof e.length) {
                                        n && (e = n);
                                        var a = 0,
                                            r = function () {};
                                        return {
                                            s: r,
                                            n: function () {
                                                return a >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[a++]
                                                }
                                            },
                                            e: function (e) {
                                                throw e
                                            },
                                            f: r
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var o, l = !0,
                                    i = !1;
                                return {
                                    s: function () {
                                        n = n.call(e)
                                    },
                                    n: function () {
                                        var e = n.next();
                                        return l = e.done, e
                                    },
                                    e: function (e) {
                                        i = !0, o = e
                                    },
                                    f: function () {
                                        try {
                                            l || null == n.return || n.return()
                                        } finally {
                                            if (i) throw o
                                        }
                                    }
                                }
                            }(a[1]);
                        try {
                            for (o.s(); !(n = o.n()).done;) e[n.value] = r
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return e
                    }), {}), Object.values(kn).flat(), n(83165), n(24541), n(34397), n(70286), {
                        boombeach: "boombeach-inbox",
                        brawlstars: "brawlstars-inbox",
                        clashofclans: "clashofclans-inbox",
                        clashroyale: "clashroyale-inbox",
                        hayday: "hayday-inbox",
                        squadbusters: "squadbusters-inbox",
                        rogue: "moco-inbox"
                    }),
                    Tn = Y.z.object({
                        show: Y.z.function(),
                        close: Y.z.function(),
                        claimVoucher: Y.z.function().args(Y.z.string()),
                        openUrl: Y.z.function().args(Y.z.string()),
                        refreshJwt: Y.z.function(),
                        safeArea: Y.z.object({
                            left: Y.z.number(),
                            right: Y.z.number()
                        }).optional(),
                        getParams: Y.z.function().returns(Y.z.promise(Y.z.string())).optional(),
                        markTabAsSeen: Y.z.function().args(Y.z.string()),
                        playSound: Y.z.function().args(Y.z.string()),
                        goBack: Y.z.function(),
                        openShop: Y.z.function(),
                        openUrlWithSso: Y.z.function().args(Y.z.string())
                    }),
                    On = Y.z.object({
                        bridge: Tn
                    });

                function Sn(e, t) {
                    try {
                        return {
                            output: t.parse(e)
                        }
                    } catch (t) {
                        if (t instanceof Y.G) return {
                            output: e,
                            validationError: t
                        };
                        throw t
                    }
                }
                var Pn = function () {
                    var e = (0, V.A)(U().mark((function e(t, n) {
                        var a, r, o, l, i;
                        return U().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, null === (a = t.getParams) || void 0 === a ? void 0 : a.call(t);
                                case 2:
                                    return r = e.sent, o = Sn(JSON.parse(r || '{ "data": {} }').data, n), l = o.output, i = o.validationError, e.abrupt("return", {
                                        gameParams: l,
                                        validationError: i
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t, n) {
                        return e.apply(this, arguments)
                    }
                }();

                function jn(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function Cn(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? jn(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jn(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var Fn = Y.z.enum(["ios", "osx"]),
                    zn = Y.z.enum(["android", "amazon"]),
                    xn = Y.z.enum(["windows"]),
                    Bn = Y.z.preprocess((function (e) {
                        return "string" != typeof e ? e : e.toLowerCase()
                    }), Fn.or(zn).or(xn)),
                    Ln = Y.z.object({
                        channel: Y.z.string().or(Y.z.number()).nullish(),
                        country: Y.z.string().optional(),
                        jwt: Y.z.string().nullish(),
                        maintenance: Y.z.coerce.boolean(),
                        platform: Bn.optional(),
                        playerTag: Y.z.string().nullish(),
                        xp: Y.z.number().nullish()
                    });

                function Dn(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function _n(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Dn(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dn(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var Mn = function () {},
                    Vn = {
                        getParams: function (e) {
                            return new Promise((function (t) {
                                var n, a, r, o, l;
                                null !== (n = parent) && void 0 !== n && n.DEBUG_LOGGING && (null === (o = (l = window).sendCommand) || void 0 === o || o.call(l, "getParams")), window.setParams = function (n) {
                                    var a = function (e, t) {
                                            try {
                                                return {
                                                    output: t.parse(e)
                                                }
                                            } catch (t) {
                                                if (t instanceof Y.G) {
                                                    var n = Boolean(e.maintenance);
                                                    return {
                                                        output: Cn(Cn({}, e), {}, {
                                                            maintenance: n
                                                        }),
                                                        validationError: t
                                                    }
                                                }
                                                throw t
                                            }
                                        }("string" != typeof n ? n : JSON.parse(n), e),
                                        r = a.output,
                                        o = a.validationError;
                                    t({
                                        gameParams: r,
                                        validationError: o
                                    })
                                }, null === (a = (r = window).sendCommand) || void 0 === a || a.call(r, "getParams")
                            }))
                        },
                        refreshJwt: function () {
                            return new Promise((function (e) {
                                var t, n, a, r, o;
                                null !== (t = parent) && void 0 !== t && t.DEBUG_LOGGING && (null === (r = (o = window).sendCommand) || void 0 === r || r.call(o, "tokenExpired")), null === (n = (a = window).sendCommand) || void 0 === n || n.call(a, "tokenExpired"), e(void 0)
                            }))
                        },
                        playSound: function (e) {
                            return new Promise((function (t) {
                                var n, a, r;
                                null !== (n = parent) && void 0 !== n && n.DEBUG_LOGGING && (null === (a = (r = window).sendCommand) || void 0 === a || a.call(r, "playSound", e)), t(void 0)
                            }))
                        },
                        show: Mn,
                        close: Mn,
                        goBack: function () {
                            return new Promise((function (e) {
                                var t, n, a;
                                return null !== (t = parent) && void 0 !== t && t.DEBUG_LOGGING && (null === (n = (a = window).sendCommand) || void 0 === n || n.call(a, "goBack")), e(history.back())
                            }))
                        },
                        openUrl: function (e) {
                            return new Promise((function (t) {
                                var n, a, r;
                                null !== (n = parent) && void 0 !== n && n.DEBUG_LOGGING ? null === (a = (r = window).sendCommand) || void 0 === a || a.call(r, "openUrl?url=" + e) : (window.location.href = e, t(void 0))
                            }))
                        },
                        openShop: function () {
                            return new Promise((function (e) {
                                var t, n, a;
                                null !== (t = parent) && void 0 !== t && t.DEBUG_LOGGING && (null === (n = (a = window).sendCommand) || void 0 === n || n.call(a, "openShop"));
                                var r = dt.parse("brawlstars");
                                return window.location.href = "".concat(An[r], "://").concat(In[r]), e(void 0)
                            }))
                        },
                        claimVoucher: function () {
                            return new Promise((function (e) {
                                var t, n, a;
                                return null !== (t = parent) && void 0 !== t && t.DEBUG_LOGGING && (null === (n = (a = window).sendCommand) || void 0 === n || n.call(a, "claimVoucher")), e(void 0)
                            }))
                        },
                        markTabAsSeen: function (e) {
                            return new Promise((function (t) {
                                var n, a, r;
                                return null !== (n = parent) && void 0 !== n && n.DEBUG_LOGGING && (null === (a = (r = window).sendCommand) || void 0 === a || a.call(r, "markTabAsSeen", e)), t(void 0)
                            }))
                        },
                        openUrlWithSso: function (e) {
                            return new Promise((function (t) {
                                var n, a, r;
                                null !== (n = parent) && void 0 !== n && n.DEBUG_LOGGING && (null === (a = (r = window).sendCommand) || void 0 === a || a.call(r, "openUrlWithSso"));
                                var o = dt.parse("brawlstars");
                                return window.location.href = "".concat(An[o], "://scidOpenWebSSO?url=").concat(encodeURIComponent(e)), t(void 0)
                            }))
                        },
                        bridgeShim: !0
                    };

                function Rn() {
                    return Un.apply(this, arguments)
                }

                function Un() {
                    return (Un = (0, V.A)(U().mark((function e() {
                        return U().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function (e) {
                                        var t = On.safeParse(window);
                                        return !1 === t.success ? (window.__bridgeResolve = e, e(Vn)) : t.data.bridge.params ? e(t.data.bridge) : e(_n(_n({}, t.data.bridge), {}, {
                                            getParams: function (e) {
                                                return Pn(t.data.bridge, e)
                                            }
                                        }))
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Gn(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function Hn(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Gn(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gn(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var Yn = {
                        gameParams: {},
                        requestGameParams: function () {}
                    },
                    Wn = (0, a.createContext)(Yn),
                    Kn = function (e) {
                        var t = e.children,
                            n = e.initialState,
                            r = void 0 === n ? Yn : n,
                            o = e.gameParamsParser,
                            l = (0, a.useState)(r),
                            i = (0, b.A)(l, 2),
                            c = i[0],
                            s = i[1],
                            u = M(),
                            m = u.setUser,
                            d = u.setMaintenance,
                            g = (0, a.useCallback)((function () {
                                (0, V.A)(U().mark((function e() {
                                    var t, n, a, r, l, i, c, u, g;
                                    return U().wrap((function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Rn();
                                            case 2:
                                                if (t = e.sent, n = t.getParams, a = t.refreshJwt, !n) {
                                                    e.next = 25;
                                                    break
                                                }
                                                return e.next = 8, n(o);
                                            case 8:
                                                r = e.sent, l = r.gameParams, i = r.validationError, c = l.maintenance, console.log("gameParams", l), s({
                                                    gameParams: l
                                                }), e.next = 16;
                                                break;
                                            case 16:
                                                if (i && !c && h(i), void 0 !== c && d(c), (u = l.jwt) || c) {
                                                    e.next = 23;
                                                    break
                                                }
                                                return e.next = 22, a();
                                            case 22:
                                                return e.abrupt("return", e.sent);
                                            case 23:
                                                u && ((g = G(u)) && v(g), g && m(g)), l && f(l);
                                            case 25:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            }), [s, c]);
                        return (0, a.useEffect)((function () {
                            function e(e) {
                                var t = e.detail.jwt;
                                if (t) {
                                    var n = G(t);
                                    n && v(n), n && m(n), s((function (e) {
                                        return Hn(Hn({}, e), {}, {
                                            gameParams: Hn(Hn({}, e.gameParams), {}, {
                                                jwt: t
                                            })
                                        })
                                    }))
                                }
                            }
                            return window.addEventListener("jwtUpdated", e),
                                function () {
                                    window.removeEventListener("jwtUpdated", e)
                                }
                        }), [c]), (0, a.useEffect)((function () {
                            g()
                        }), []), a.createElement(Wn.Provider, {
                            value: Hn(Hn({}, c), {}, {
                                requestGameParams: g
                            })
                        }, t)
                    },
                    Jn = function () {
                        return a.useContext(Wn)
                    },
                    qn = (n(9225), "GAME_COMMAND"),
                    Zn = "OPEN_LINK",
                    Qn = "OPEN_NEWS_ARTICLE",
                    Xn = "OPEN_ESPORT_ARTICLE",
                    $n = "PLAY_SOUND",
                    ea = "SHOW_BACK_BUTTON",
                    ta = "BRIDGE_FUNCTION",
                    na = (0, a.createContext)(null),
                    aa = na.Provider,
                    ra = function () {
                        return (0, a.useContext)(na)
                    },
                    oa = {
                        pressable: "TkkQOq6z0Ydc691jrT6v",
                        pressed: "o6rTa1sXGSWyASPtZhCJ",
                        smallAnimation: "xEnfGmiAHF8tEgIto3Nc",
                        "press-small": "pH_0VhCFxWBCUdKczfzZ",
                        largeAnimation: "sSmFmUCaQ4la7GUFW_PU",
                        "press-large": "x_2Ka4eXexxHK76zsrgR",
                        released: "TNxQ5wAcdCfLh42udNjN",
                        "release-small": "uHFjPuRGnjb8Mp7D9KKm",
                        "release-large": "jakaeIbKus40hMxbkClI"
                    },
                    la = function (e) {
                        var t = e.children,
                            n = e.animationSize,
                            r = e.sound,
                            o = void 0 === r ? "OKButton" : r,
                            l = e.disabled,
                            i = (0, a.useState)("initial"),
                            c = (0, b.A)(i, 2),
                            s = c[0],
                            u = c[1],
                            m = ra(),
                            d = function () {
                                l || u("released")
                            };
                        return a.createElement("div", {
                            className: "pressable ".concat(oa.pressable, " is-").concat(s, " ").concat(oa[s] || "", " animation-").concat(n, " ").concat(oa["".concat(n, "Animation")], " "),
                            onPointerDown: function () {
                                l || u("pressed")
                            },
                            onPointerUp: d,
                            onPointerLeave: function () {
                                l || "pressed" === s && d()
                            },
                            onClick: function () {
                                l || m($n, o)
                            }
                        }, t)
                    },
                    ia = function (e) {
                        var t = e.label,
                            n = e.Component,
                            r = e.componentProps;
                        return t || n ? t ? a.createElement("span", null, t) : a.createElement(n, r) : null
                    },
                    ca = n(35983),
                    sa = n(69182),
                    ua = n.n(sa),
                    ma = function () {
                        var e = (0, ca.A)().locale,
                            t = ra();
                        return function (n) {
                            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            return t("esport" === (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "news") ? Xn : Qn, {
                                id: n,
                                lang: e,
                                slug: ua()(a, {
                                    strict: !0,
                                    lower: !0
                                })
                            })
                        }
                    },
                    da = function (e) {
                        var t = e.disabled,
                            n = e.label,
                            r = e.LabelComponent,
                            o = e.labelComponentProps,
                            l = e.next,
                            i = ma();
                        return a.createElement("div", {
                            className: "link ".concat("vRBwr8F1Dy2zenakBgXd", " ").concat(t ? "disabled ".concat("akV7oBoP6sx5UhK_fRO1") : "", " ").concat(l ? "next ".concat("K90DGVLNJGwC17J6TlYw") : "", " "),
                            onClick: function () {
                                var e, t, a;
                                if (null == o || null === (e = o.data) || void 0 === e || !e.disableOnClick) return i(o.data.id, null !== (t = null != n ? n : null == o || null === (a = o.data) || void 0 === a ? void 0 : a.title) && void 0 !== t ? t : "", "esportNewsEntry" === o.data.type ? "esport" : "news")
                            }
                        }, a.createElement(la, null, a.createElement("div", {
                            className: "container ".concat("cyysMjtTt7V37Y0kL8Lv")
                        }, a.createElement("div", {
                            className: "icon ".concat("b1VxguKa4ZVSlP_Z81ji")
                        }), a.createElement("div", {
                            className: "label ".concat("VLXs8uPF8r3WVbuWHKi6")
                        }, a.createElement(ia, {
                            label: n,
                            Component: r,
                            componentProps: o
                        })))))
                    },
                    ga = (n(6501), function (e, t) {
                        return e.findIndex((function (e) {
                            return e.id.toString() === t.toString()
                        }))
                    }),
                    pa = function (e, t) {
                        var n = e.length > 0;
                        if (!t && n) return !1;
                        if (!t) return !0;
                        if (!n) return !0;
                        var a = t.toString();
                        return e.includes(a)
                    },
                    ha = function (e, t) {
                        if (!e.targeting) return !0;
                        var n = t.country,
                            a = t.platform,
                            r = t.th,
                            o = t.th2,
                            l = t.jwt,
                            i = t.youngPlayer,
                            c = e.targeting,
                            s = c.country,
                            u = c.platform,
                            m = c.townHallLevel,
                            d = c.builderHallLevel,
                            g = c.avatarIds,
                            p = c.hideFromYoungPlayer;
                        u = u || [], m = m || [], d = d || [], g = g || [], p = p || !1;
                        var h = pa(s = s || [], n),
                            v = pa(u, a),
                            f = pa(m, r),
                            y = pa(d, o),
                            E = pa(g, G(null != l ? l : "")),
                            b = !p || !i;
                        return h && v && f && y && E && b
                    },
                    va = function (e) {
                        return "newsEntry" === e.type
                    },
                    fa = function (e) {
                        return "esportNewsEntry" === e.type
                    },
                    ya = function (e, t, n) {
                        return function (a) {
                            var r = a.articles,
                                o = a.globals,
                                l = r.filter(va).filter((function (e) {
                                    return ha(e, n)
                                })),
                                i = l[ga(l, e)],
                                c = l.filter((function (e) {
                                    return "HIDE_IN_NEWS_FEED" !== e.showInNewsFeed
                                })),
                                s = ga(c, e),
                                u = c[s - 1],
                                m = s > -1 && c[s + 1],
                                d = t ? void 0 : {
                                    disabled: !u,
                                    label: o["globalText.langOlder"],
                                    labelComponentProps: {
                                        data: u
                                    }
                                },
                                g = t ? void 0 : {
                                    next: !0,
                                    disabled: !m,
                                    label: o["globalText.langNewer"],
                                    labelComponentProps: {
                                        data: m
                                    }
                                };
                            return {
                                article: i,
                                Link: da,
                                prevLinkProps: d,
                                nextLinkProps: g
                            }
                        }
                    },
                    Ea = n(89575),
                    ba = (0, a.createContext)(null),
                    wa = (ba.Provider, (0, a.createContext)(null)),
                    Ia = wa.Provider;

                function Na(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function ka(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Na(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Na(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var Aa = n(91543),
                    Ta = n(18958),
                    Oa = function (e) {
                        var t = e.children,
                            n = e.data,
                            r = e.intl,
                            o = e.locale,
                            l = e.style,
                            i = e.userSettings;
                        return a.createElement("div", {
                            className: "tab ".concat(l.direction, " ").concat("aQEAZ_nja96Wr4GPAWO5"),
                            style: l,
                            lang: o.lang
                        }, a.createElement(Ta.A, r, a.createElement(t, {
                            locale: o,
                            data: n,
                            userSettings: i
                        })))
                    },
                    Sa = function (e) {
                        var t = e.light;
                        return a.createElement("div", {
                            className: "loader ".concat("leML_0ygfkmGNKh7rY8b", " ").concat(t ? "light ".concat("VyWN5t98si222M3Afe0l") : "")
                        }, a.createElement("span", null), a.createElement("span", null), a.createElement("span", null))
                    },
                    Pa = function (e) {
                        var t = e.light;
                        return a.createElement("div", {
                            className: "loading ".concat("OVfFL2iTuDgsiOxYXfEc")
                        }, a.createElement(Sa, {
                            light: t
                        }))
                    },
                    ja = (n(27270), n(55152)),
                    Ca = n(30414),
                    Fa = n(95309),
                    za = n(72715),
                    xa = n(53373),
                    Ba = n.n(xa),
                    La = {
                        button: "OhmsPypOXaMNjG6BDKC4",
                        container: "z66aP58CSCQXCVbAsCDI"
                    };

                function Da(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function _a(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Da(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Da(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var Ma = {
                        threshold: .5
                    },
                    Va = function (e) {
                        var t = a.useRef(null),
                            n = a.useState(!1),
                            r = (0, b.A)(n, 2),
                            o = r[0],
                            l = r[1],
                            i = function (e) {
                                var t = (0, b.A)(e, 1)[0];
                                t && l(t.isIntersecting)
                            };
                        return a.useEffect((function () {
                            if ("IntersectionObserver" in window) {
                                var n = new IntersectionObserver(i, _a(_a({}, Ma), e));
                                return t.current && n.observe(t.current),
                                    function () {
                                        t.current && n.unobserve(t.current)
                                    }
                            }
                            l(!0)
                        }), [t, e]), [t, o]
                    },
                    Ra = function (e) {
                        var t = a.useRef(null),
                            n = a.useState(!1),
                            r = (0, b.A)(n, 2),
                            o = r[0],
                            l = r[1],
                            i = function (e) {
                                var t = (0, b.A)(e, 1)[0];
                                t && l(o || t.isIntersecting)
                            };
                        return a.useEffect((function () {
                            if ("IntersectionObserver" in window) {
                                if (!o) {
                                    var n = new IntersectionObserver(i, _a(_a({}, Ma), e));
                                    return t.current && n.observe(t.current),
                                        function () {
                                            t.current && n.unobserve(t.current)
                                        }
                                }
                            } else l(!0)
                        }), [o, t, e]), [t, o]
                    },
                    Ua = function (e) {
                        var t = e.animationSize,
                            n = e.children,
                            r = e.onClick,
                            o = e.variant,
                            l = e.disabled,
                            i = Va(),
                            c = (0, b.A)(i, 2),
                            s = c[0],
                            u = c[1],
                            m = a.useState(!1),
                            d = (0, b.A)(m, 2),
                            g = d[0],
                            p = d[1],
                            h = a.createElement("button", {
                                type: "button",
                                className: "container ".concat(La.container, " "),
                                disabled: l
                            }, n);
                        return a.useEffect((function () {
                            var e, t;
                            s.current && p((null !== (e = null === (t = s.current) || void 0 === t || null === (t = t.textContent) || void 0 === t ? void 0 : t.length) && void 0 !== e ? e : 0) > 16)
                        }), [s]), a.createElement("div", {
                            ref: s,
                            className: Ba()(["button", La.button, o, La[null != o ? o : ""], {
                                visible: u,
                                extrawide: g
                            }]),
                            onClick: r
                        }, "none" === t ? h : a.createElement(la, {
                            animationSize: t
                        }, h))
                    };

                function Ga() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {})))
                    } catch (e) {}
                    return (Ga = function () {
                        return !!e
                    })()
                }
                var Ha = function () {
                        var e, t = (0, d.Zp)(),
                            n = (0, d.g)(),
                            r = "/".concat(null !== (e = n.lang) && void 0 !== e ? e : "");
                        return a.createElement("div", {
                            className: "error ".concat("P_clfgLoP13CdwKckKiA")
                        }, a.createElement("div", {
                            className: "title ".concat("gMwdD0tmwdknQpAtzbJv")
                        }, "Sorry!"), a.createElement("div", {
                            className: "detail ".concat("FN4noSZx4q1aa6iZELZC")
                        }, "Something did not quite work as expected..."), a.createElement(Ua, {
                            animationSize: "large",
                            onClick: function () {
                                return t(r)
                            }
                        }, a.createElement("span", {
                            className: "buttonTextWrapper"
                        }, "BACK TO NEWS")))
                    },
                    Ya = function (e) {
                        function t(e) {
                            var n, a, r, o;
                            return (0, ja.A)(this, t), a = this, r = t, o = [e], r = (0, za.A)(r), (n = (0, Fa.A)(a, Ga() ? Reflect.construct(r, o || [], (0, za.A)(a).constructor) : r.apply(a, o))).state = {
                                hasError: !1
                            }, n
                        }
                        return (0, w.A)(t, e), (0, Ca.A)(t, [{
                            key: "componentDidCatch",
                            value: function (e, t) {
                                console.error(e, t)
                            }
                        }, {
                            key: "render",
                            value: function () {
                                return this.state.hasError ? a.createElement(Ha, null) : this.props.children
                            }
                        }], [{
                            key: "getDerivedStateFromError",
                            value: function () {
                                return {
                                    hasError: !0
                                }
                            }
                        }])
                    }(a.Component),
                    Wa = (0, a.createContext)(null),
                    Ka = Wa.Provider;
                n(91321);
                var Ja, qa = "SET_GAME_DATA",
                    Za = n(60923),
                    Qa = n.n(Za),
                    Xa = function (e) {
                        return function (t) {
                            var n = (0, a.useContext)(wa);
                            return a.createElement(e, (0, Ea.A)({}, t, {
                                localization: n
                            }))
                        }
                    }(function (e) {
                        return function (t) {
                            var n = (0, a.useContext)(ba);
                            return a.createElement(e, (0, Ea.A)({}, t, {
                                context: n
                            }))
                        }
                    }(function (e) {
                        return function (t) {
                            var n = (0, d.g)().lang,
                                r = t.localization,
                                o = r.available,
                                l = r.locales,
                                i = n && o.includes(n) ? n : Ve,
                                c = ka(ka(ka({}, l[Ve]), l[i]), {}, {
                                    lang: i
                                });
                            return a.createElement(e, (0, Ea.A)({}, t, {
                                locale: c
                            }))
                        }
                    }(function (e) {
                        return function (t) {
                            var n = function (e) {
                                return function (t) {
                                    var n = t.context,
                                        r = t.namespace,
                                        o = t.locale.lang,
                                        l = n.state,
                                        i = n.dispatch,
                                        c = l.settings,
                                        s = c.game,
                                        u = c.search,
                                        m = new URLSearchParams(u);
                                    m.has("cachebust") || m.set("cachebust", Date.now().toString());
                                    var d = "./data/".concat(o, "/").concat(r, "/content.json?").concat(m),
                                        g = "".concat(o, "-").concat(r),
                                        p = s[g],
                                        h = a.useState(),
                                        v = (0, b.A)(h, 2),
                                        f = v[0],
                                        y = v[1],
                                        E = (0, a.useContext)(Wa),
                                        w = (0, b.A)(E, 2)[1],
                                        I = y,
                                        N = function (e) {
                                            return e.json().then((function (e) {
                                                i(function (e, t) {
                                                    return {
                                                        type: qa,
                                                        payload: {
                                                            data: t,
                                                            localizedNamespace: e
                                                        }
                                                    }
                                                }(g, e))
                                            })).catch(I)
                                        };
                                    return (0, a.useEffect)((function () {
                                        w(g)
                                    }), [g]), (0, a.useEffect)((function () {
                                        if (y(void 0), !p) return function (e, t, n) {
                                            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e3,
                                                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                                                o = !1,
                                                l = function () {
                                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                                    return new Promise((function (n, i) {
                                                        if (r && t > r) throw new Error('Max retries have been reached for the "'.concat(e, '" url!'));
                                                        setTimeout((function () {
                                                            return Qa()(e).then((function (e) {
                                                                if (!e.ok) throw e;
                                                                return o || n(e)
                                                            })).catch((function () {
                                                                if (!o) return l(t + 1).then(n).catch(i)
                                                            }))
                                                        }), t ? a : 0)
                                                    }))
                                                };
                                            return l().then(t).catch(n),
                                                function () {
                                                    return o = !0
                                                }
                                        }(d, N, I)
                                    }), [o]), a.createElement(e, (0, Ea.A)({}, t, {
                                        data: p,
                                        error: f
                                    }))
                                }
                            }(e);
                            return a.createElement(n, t)
                        }
                    }((Ja = function (e) {
                        var t, n = e.children,
                            r = e.data,
                            o = e.locale,
                            l = e.userSettings;
                        if (!r) return a.createElement(Pa, null);
                        var i = function (e) {
                                var t = e.rtl,
                                    n = e.fonts,
                                    a = null != n ? n : {},
                                    r = a.lineHeightRatio,
                                    o = a.primaryFontRatio,
                                    l = a.primaryFont;
                                return {
                                    direction: t ? "rtl" : "ltr",
                                    fontFamily: l || "inherit",
                                    textAlign: t ? "right" : "left",
                                    "--lineHeightRatio": r || 1,
                                    "--secondaryFont": a.secondaryFont || "inherit",
                                    "--secondaryFontRatio": a.secondaryFontRatio || 1,
                                    "--primaryFont": l || "inherit",
                                    "--primaryFontRatio": o || 1,
                                    "--titleBoldValue": a.titleBoldValue || "normal"
                                }
                            }(o),
                            c = r.globals,
                            s = {
                                children: n,
                                data: r,
                                intl: (0, Aa.E)({
                                    locale: null !== (t = o.lang) && void 0 !== t ? t : Ve,
                                    messages: c
                                }),
                                locale: o,
                                style: i,
                                userSettings: l
                            };
                        return a.createElement(Ya, null, a.createElement(Oa, s))
                    }, function (e) {
                        var t = e.children,
                            n = e.context,
                            r = {
                                children: t,
                                data: e.data,
                                id: e.id,
                                locale: e.locale,
                                userSettings: n.state.settings.userSettings
                            };
                        return a.createElement(Ja, r)
                    }))))),
                    $a = Xa;
                $a.displayName = "Tab";
                var er = n(26375),
                    tr = (n(45942), "LEgSOYErP2mNvPzfwwnY");

                function nr(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function ar(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? nr(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nr(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var rr = function (e, t) {
                        return Object.fromEntries(Object.entries(t).map((function (t) {
                            var n = (0, b.A)(t, 2),
                                a = n[0],
                                r = n[1],
                                o = r.path;
                            if (null != o && o.includes(".svg")) return [a, r];
                            var l = null != o && o.includes("?") ? "".concat(o, "&fm=").concat(e) : "".concat(o, "?fm=").concat(e);
                            return [a, ar(ar({}, r), {}, {
                                path: "webp" === e ? o : l
                            })]
                        })))
                    },
                    or = function (e) {
                        var t = e.referenceWidth,
                            n = e.sources,
                            r = e.type,
                            o = n.small,
                            l = n.smallRetina,
                            i = n.medium,
                            c = n.mediumRetina,
                            s = n.large,
                            u = n.largeRetina,
                            m = "(min-width: ".concat(Math.round(.8 * t), "px)"),
                            d = "(min-width: ".concat(Math.round(.4 * t), "px)");
                        return a.createElement(a.Fragment, null, a.createElement("source", {
                            srcSet: "".concat(s.path, " 1x, ").concat(u.path, " 2x"),
                            media: m,
                            type: r
                        }), a.createElement("source", {
                            srcSet: "".concat(i.path, " 1x, ").concat(c.path, " 2x"),
                            media: d,
                            type: r
                        }), a.createElement("source", {
                            srcSet: "".concat(o.path, " 1x, ").concat(l.path, " 2x"),
                            type: r
                        }))
                    },
                    lr = (0, a.memo)((function (e) {
                        var t = e.sources,
                            n = e.onLoad,
                            r = e.alt,
                            o = e.cover,
                            l = e.Loader,
                            i = e.extraStyles,
                            c = e.fullResolution;
                        if (!t) return null;
                        var s = (0, a.useState)(""),
                            u = (0, b.A)(s, 2),
                            m = u[0],
                            d = u[1],
                            g = vn.brawlstars.referenceWidth;
                        c && (t = Object.fromEntries(Object.entries(t).map((function (e) {
                            var t = (0, b.A)(e, 2),
                                n = t[0],
                                a = t[1],
                                r = a.path,
                                o = r.split("?")[1];
                            if (!o) return [n, a];
                            var l = new URLSearchParams(o);
                            l.delete("w"), l.delete("h");
                            var i = r.split("?")[0] + "?" + l.toString();
                            return [n, ar(ar({}, a), {}, {
                                path: i
                            })]
                        }))));
                        var p = rr("webp", t),
                            h = rr("png", t),
                            v = function (e) {
                                var t, n;
                                return (null === (t = e.small.path) || void 0 === t ? void 0 : t.toLowerCase().includes("webp?")) || "webp" === (null === (n = e.small.path) || void 0 === n ? void 0 : n.toLowerCase().slice(-4))
                            }(t),
                            f = t.small,
                            y = o ? m : void 0,
                            E = m.length > 0;
                        return a.createElement("div", {
                            className: "image ".concat(tr, " ").concat(E ? "is-loaded ".concat("yoGte5MbuI1PW3NDWJRg") : "", " ").concat(o ? "cover ".concat("C5CQz_HNymomQShCCAZh") : "")
                        }, a.createElement("div", {
                            className: "container ".concat("byhfET2WdwE_E1OBXDv3")
                        }, null === l || !E && a.createElement("div", {
                            className: "loader-container ".concat("dZARswpHsWk0uSE3UblP")
                        }, l || a.createElement(Sa, null)), a.createElement("picture", (0, Ea.A)({
                            className: "picture ".concat("p4HnL5eo1gBkTdx2rpsY")
                        }, y && {
                            style: ar({
                                backgroundImage: "url(".concat(y, ")")
                            }, i || {})
                        }), p && a.createElement(or, {
                            sources: p,
                            referenceWidth: g,
                            type: "image/webp"
                        }), a.createElement(or, (0, Ea.A)({
                            sources: t,
                            referenceWidth: g
                        }, v ? {
                            type: "image/webp"
                        } : {})), v && h && a.createElement(or, {
                            sources: h,
                            referenceWidth: g,
                            type: "image/png"
                        }), a.createElement("img", {
                            alt: r,
                            className: "img ".concat("wt5WYmAkKgL33rZlwugF"),
                            draggable: !1,
                            height: f.height,
                            onLoad: function (e) {
                                d(e.currentTarget.currentSrc), n && n(e)
                            },
                            src: f.path,
                            width: f.width
                        }))))
                    }), (function (e, t) {
                        return e.sources === t.sources
                    })),
                    ir = function (e) {
                        var t = e.image;
                        return a.createElement("div", {
                            className: "hero ".concat("OfV01_tQjFsVbmY0D_Wy")
                        }, t && a.createElement("div", {
                            className: "image ".concat("Dbocv47pNoYHSkaaElvj")
                        }, a.createElement(lr, {
                            sources: t
                        })))
                    },
                    cr = {
                        blockButton: "iyiBux12C2XqG_u5aOsx",
                        before: "sueDymw7niHejSvh1WTv",
                        after: "GHPOsvYnmJNSdPVQJrZC",
                        center: "oL0WpSKY2RF58tl9pWVj",
                        right: "gS5CK378wNCGUITpfZjQ",
                        image: "sOsvYNugIq06EcGbeLCc",
                        label: "H5ujRzBXy983PzEMLJcF",
                        left: "JvCY2p0hnW3VQIdzBTCF"
                    },
                    sr = function (e) {
                        var t = e.image,
                            n = e.label,
                            r = e.position,
                            o = e.variant,
                            l = e.url,
                            i = e.urlType,
                            c = e.functionName,
                            s = e.functionArgs,
                            u = ma(),
                            m = ra(),
                            d = function () {
                                switch (i) {
                                    case "article":
                                        return u(l.id, n, "esportNewsEntries" === l.section ? "esport" : "news");
                                    case "bridgeFunction":
                                        return m(ta, {
                                            functionName: c,
                                            functionArgs: s
                                        });
                                    default:
                                        return m(Zn, {
                                            url: l,
                                            label: n
                                        })
                                }
                            };
                        return "article" === i && "carouselEventPollEntry" === (null == l ? void 0 : l.section) ? null : a.createElement("div", {
                            className: "block-button ".concat(cr.blockButton, " ").concat(void 0 !== r ? "".concat(cr[r], " ").concat(r) : "".concat(cr.left, " left"))
                        }, a.createElement("div", {
                            className: "before ".concat(cr.before)
                        }), t ? a.createElement("div", {
                            className: "image ".concat(cr.image),
                            onClick: d
                        }, a.createElement(lr, {
                            sources: t
                        })) : a.createElement(Ua, {
                            onClick: d,
                            variant: o
                        }, a.createElement("div", {
                            className: "label ".concat(cr.label)
                        }, n)), a.createElement("div", {
                            className: "after ".concat(cr.after)
                        }))
                    },
                    ur = (n(79326), "i0ZQXWl6CVT007POIjT2"),
                    mr = "OpenWeb?url=",
                    dr = function (e) {
                        var t = e.html,
                            n = M().trackLinkClick;
                        return a.createElement("div", {
                            className: "html ".concat(ur),
                            dangerouslySetInnerHTML: {
                                __html: t
                            },
                            onClick: function (e) {
                                try {
                                    var t = e.target;
                                    if ("A" === t.nodeName && t.href.includes(mr)) {
                                        var a, r, o = t.href.indexOf(mr) + 12,
                                            l = null !== (a = t.href.lastIndexOf("%27")) && void 0 !== a ? a : t.href.length,
                                            i = decodeURIComponent(t.href.substring(o, l)),
                                            c = null !== (r = t.textContent) && void 0 !== r ? r : void 0;
                                        n({
                                            url: i,
                                            label: c
                                        })
                                    }
                                } catch (e) {}
                            }
                        })
                    },
                    gr = function (e) {
                        var t = e.title,
                            n = e.body;
                        return a.createElement("details", {
                            className: "accordion ".concat("EDW84NDda1DYdvelNyYs")
                        }, a.createElement("summary", {
                            className: "title ".concat("k43W9fh5iDpG__BBvWFC")
                        }, a.createElement("span", {
                            className: "titleWrapper ".concat("ovQpNOMu7AdJtRBDlu_C")
                        }, a.createElement("span", {
                            className: "arrow ".concat("KMaGMA8LpAT2cqqNpSbe")
                        }), a.createElement("span", null, t))), a.createElement("div", {
                            className: "accordionContent ".concat("cXALQidsCHvbtDgHqgXH")
                        }, n))
                    },
                    pr = function (e) {
                        var t = e.body,
                            n = e.image,
                            r = e.position,
                            o = e.title,
                            l = e.accordion,
                            i = !!t,
                            c = a.createElement("div", {
                                className: "block-feature ".concat("xTwXzSKaBaamYHjM0mvr", " ").concat("right" === r ? "".concat("t_3gx0Rn_W4gpX7MgLH3", " right") : "left")
                            }, n && a.createElement("div", {
                                className: "image ".concat("zX7SR2yoUP3FzoqYPSK1")
                            }, a.createElement(lr, {
                                sources: n,
                                cover: !0
                            })), a.createElement("div", {
                                className: "content ".concat("wcO3pUGFbhDe4x0RnZsQ", " ").concat(i ? "" : "hYDZ59wwJBaszt3GgQD4")
                            }, "yes" !== l && a.createElement("div", {
                                className: "title ".concat("muBuhMkJN2afgPisvELx")
                            }, o), i && a.createElement(dr, {
                                html: t
                            })));
                        return "yes" === l ? a.createElement(gr, {
                            title: o,
                            body: c
                        }) : c
                    },
                    hr = function (e) {
                        var t = e.title,
                            n = e.body,
                            r = e.accordion;
                        return a.createElement("div", {
                            className: "block-html ".concat("m4vdbwDmgHtvt3tGhhdn")
                        }, t && "yes" !== r && a.createElement("div", {
                            className: "title ".concat("dF9RsUxAiGXa5u8BtJoL")
                        }, t), "yes" === r ? a.createElement(gr, {
                            title: t,
                            body: a.createElement(dr, {
                                html: n
                            })
                        }) : a.createElement(dr, {
                            html: n
                        }))
                    },
                    vr = n(64124),
                    fr = function (e) {
                        var t = (e > 0 ? e : 0) / 1e3,
                            n = t / 60,
                            a = n / 60,
                            r = a / 24;
                        return {
                            totalSeconds: Math.floor(t),
                            seconds: Math.floor(t % 60),
                            totalMinutes: Math.floor(n),
                            minutes: Math.floor(n % 60),
                            totalHours: Math.floor(a),
                            hours: Math.floor(a % 24),
                            totalDays: Math.floor(r),
                            days: Math.floor(r)
                        }
                    },
                    yr = function (e) {
                        var t = e.timeStamp,
                            n = function (e, t) {
                                var n = Date.now() - e,
                                    a = fr(n),
                                    r = a.days,
                                    o = a.hours,
                                    l = a.minutes,
                                    i = fr(t),
                                    c = i.totalDays,
                                    s = i.totalHours,
                                    u = i.totalMinutes,
                                    m = function (e, t) {
                                        return {
                                            id: "globalText.".concat(e),
                                            values: {
                                                x: t
                                            }
                                        }
                                    };
                                if (!(n < 0 || n > t)) return r && r < c ? m(r > 1 ? "langDaysAgo" : "langDayAgo", r) : o && o < s ? m(o > 1 ? "langHoursAgo" : "langHourAgo", o) : l && l < u ? m(l > 1 ? "langMinutesAgo" : "langMinuteAgo", l) : m("langMinutesAgo", 0)
                            }(t, e.limitInMilliseconds);
                        return a.createElement("div", {
                            className: "date-or-time ".concat("cw47toHBKCHnzdb46ovu")
                        }, n ? a.createElement(vr.A, n) : a.createElement(er.tT, {
                            day: "2-digit",
                            month: "long",
                            value: t
                        }, (function (e) {
                            var t, n = (0, b.A)(e, 4),
                                r = n[0],
                                o = n[1],
                                l = n[2],
                                i = n[3];
                            return a.createElement(a.Fragment, null, a.createElement("div", {
                                className: "month ".concat("CR7q6iMNwGDom5ua3DBR")
                            }, null == r ? void 0 : r.value), a.createElement("div", {
                                className: "literal ".concat("ubX9fkhNLgNAC1K0RjBl")
                            }, null == o ? void 0 : o.value), (null == l ? void 0 : l.value) && a.createElement("div", {
                                className: "day ".concat("ThKUFziQHZ5QfsTdBBlJ")
                            }, l.value, null !== (t = null == i ? void 0 : i.value) && void 0 !== t ? t : ""))
                        })))
                    },
                    Er = function (e) {
                        var t = e.cardId,
                            n = e.categories;
                        return n && n.length ? a.createElement("div", {
                            className: "categories ".concat("IQ8Wfyc1STdBCw5_o1uo")
                        }, n.map((function (e) {
                            var n = e.title,
                                r = e.color;
                            return a.createElement("div", {
                                key: "".concat(t, "-").concat(n),
                                className: "category ".concat("OmKMfTfacMV8g4eV52GE"),
                                style: {
                                    color: r
                                }
                            }, n)
                        }))) : null
                    },
                    br = "j9P_YCOwjBIOytqlUCNq",
                    wr = function (e) {
                        var t = e.external;
                        return a.createElement("div", {
                            className: Ba()("cta", "EL0hf39zYmbpvTXfFLdo", t ? ["external", br] : null)
                        }, a.createElement("div", {
                            className: Ba()("icon", "nIgo7u7HoCQrA32GunMX", t ? ["external", br] : [])
                        }))
                    },
                    Ir = "PHPE8jE9fvWlJALtg1UZ",
                    Nr = "p_J2kVb29nWEzHSd0_gK",
                    kr = function (e) {
                        var t = e.author,
                            n = e.cardId,
                            r = e.categories,
                            o = e.creator,
                            l = e.ctaHidden,
                            i = e.external,
                            c = e.icon,
                            s = e.postDate,
                            u = e.title,
                            m = e.provider;
                        return a.createElement("div", {
                            className: "caption ".concat("LOe0Nl_0ucW4We02cPft")
                        }, a.createElement("div", {
                            className: "details ".concat("gKCLBIkZRsZ5elNms5Xl")
                        }, r && r.length > 0 && a.createElement("div", {
                            className: "categories ".concat("qqP1t3rqqvDNug7cFcOO")
                        }, a.createElement(Er, {
                            cardId: n,
                            categories: r
                        })), s && a.createElement("div", {
                            className: "post-date ".concat("R5c2L01GHr6yAc4tJZUQ")
                        }, a.createElement(yr, {
                            limitInMilliseconds: 6048e5,
                            timeStamp: s
                        })), c && a.createElement("img", {
                            className: "icon ".concat("E9bwLCUbvWpnHi9ZNXOh"),
                            src: c
                        }), o && a.createElement("div", {
                            className: "creator ".concat("YK1Pmh1k24vRo_bPonWH")
                        }, a.createElement("div", {
                            className: "prefix ".concat(Ir)
                        }, a.createElement(vr.A, {
                            id: "globalText.langBy"
                        })), a.createElement("div", {
                            className: "value ".concat(Nr)
                        }, o)), u && a.createElement("div", {
                            className: "title ".concat("SMMOGt2fSEwYHR4toHEq")
                        }, u), t && a.createElement("div", {
                            className: "author ".concat("oyFpiOfPmRwiqTG4yh4q")
                        }, a.createElement("div", {
                            className: "prefix ".concat(Ir)
                        }, a.createElement(vr.A, {
                            id: "globalText.langBy"
                        })), a.createElement("div", {
                            className: "value ".concat(Nr)
                        }, t))), !l && a.createElement("div", {
                            className: Ba()("cta", "WxHKSrV2YZ38lNdeNshI", m)
                        }, a.createElement(wr, {
                            external: !!i
                        })))
                    },
                    Ar = "dZRd609lbQOzhzAJ0ZKj",
                    Tr = "xYYe4OmW6nNkLRyFHmuA",
                    Or = "vPOis2cUHjk4OUUT0ub9",
                    Sr = function () {
                        return a.createElement("div", {
                            className: "new-label ".concat("quzII3rDJTW8lggdkAeO")
                        }, a.createElement("div", {
                            className: "shadows ".concat("uTS4JuGZX09HfPmeuY7n")
                        }, a.createElement("div", {
                            className: "south ".concat("bWGL0l3GAaFZWlucfJUo")
                        }), a.createElement("div", {
                            className: "east ".concat("HuOPjf6O7Obpvy0YAIow")
                        })), a.createElement("div", {
                            className: "content ".concat("hdUqVOAIR0lda89in96d")
                        }, a.createElement("div", {
                            className: "start ".concat("ff1CNq0QOj17SUzMjjme")
                        }, a.createElement("div", {
                            className: "top ".concat(Ar)
                        }), a.createElement("div", {
                            className: "middle ".concat(Or)
                        }), a.createElement("div", {
                            className: "bottom ".concat(Tr)
                        })), a.createElement("div", {
                            className: "center ".concat("JERsDsxppnLKc6dIR0Kh")
                        }, a.createElement("div", {
                            className: "top ".concat(Ar)
                        }), a.createElement("div", {
                            className: "middle ".concat(Or)
                        }, a.createElement(vr.A, {
                            id: "globalText.langNew"
                        })), a.createElement("div", {
                            className: "bottom ".concat(Tr)
                        })), a.createElement("div", {
                            className: "end ".concat("Fg_HHZ_CV8xF8zJlVhqb")
                        }, a.createElement("div", {
                            className: "top ".concat(Ar)
                        }), a.createElement("div", {
                            className: "middle ".concat(Or)
                        }), a.createElement("div", {
                            className: "bottom ".concat(Tr)
                        }))))
                    },
                    Pr = function (e) {
                        var t = e.children,
                            n = e.pinned,
                            r = e.newUntil,
                            o = null != r && r > Date.now();
                        return a.createElement("div", {
                            className: "content-card ".concat("VBN7eRDcvUxgUbcf5FbA")
                        }, a.createElement("div", {
                            className: "card-box ".concat("Cpj0QyKiSOKH_gXNNqPV")
                        }, t), a.createElement("div", {
                            className: "overlay ".concat("Y71BDWQt5uSVAJ3325gp")
                        }, a.createElement("div", {
                            className: "state-icons ".concat("iSzf8MzgKmpMqIqSJhQw")
                        }, o ? a.createElement("div", {
                            className: "new ".concat("GPT73BSnniJTLAX0rpfA")
                        }, a.createElement(Sr, null)) : n ? a.createElement("div", {
                            className: "pinned-icon ".concat("miZ2yleUhBaeulbHkkOc")
                        }) : null)))
                    },
                    jr = {
                        blockImage: "G5AHGnqxS20ShRWJBtHB",
                        fullWidth: "cXCrvWiLk8buQbfNxvkZ",
                        image: "lQVrP4G_wYeKhlGRdiEm"
                    },
                    Cr = function (e) {
                        var t = e.id,
                            n = e.author,
                            r = e.image,
                            o = e.imageUrl,
                            l = e.title,
                            i = e.fullWidth,
                            c = ra(),
                            s = (0, ca.A)().locale,
                            u = function (e, t) {
                                if (e || t) return {
                                    author: e,
                                    title: t
                                }
                            }(n, l);
                        return a.createElement("div", {
                            className: "block-image ".concat(jr.blockImage, " ").concat("yes" === i ? "full-width ".concat(jr.fullWidth) : "")
                        }, a.createElement("div", {
                            className: "card ".concat(jr.card)
                        }, a.createElement(Pr, {
                            id: t,
                            lang: s
                        }, a.createElement("div", {
                            className: "content ".concat(jr.content)
                        }, r && a.createElement("div", {
                            className: "image ".concat(jr.image),
                            onClick: function () {
                                return o && c(Zn, {
                                    url: o,
                                    label: l
                                })
                            }
                        }, a.createElement(lr, {
                            sources: r
                        })), u && a.createElement("div", {
                            className: "caption ".concat(jr.caption)
                        }, a.createElement(kr, {
                            creator: u.author,
                            cardId: t,
                            ctaHidden: !0,
                            title: u.title
                        }))))))
                    },
                    Fr = function () {
                        return a.createElement("div", {
                            className: "live-icon ".concat("DlY76bOzCZIc4PJ5CAks")
                        }, a.createElement(vr.A, {
                            id: "communityText.langLive"
                        }))
                    },
                    zr = function (e) {
                        var t = e.provider,
                            n = e.variant;
                        return a.createElement("div", {
                            className: "provider-icon " + "".concat("P_IgaLOeyoddx6aN4fjS", " ") + "".concat(t, " ") + "".concat(n)
                        })
                    },
                    xr = function (e) {
                        var t = e.caption,
                            n = e.hideFilter,
                            r = e.hideProvider,
                            o = e.live,
                            l = e.embed,
                            i = e.thumbnail,
                            c = Ra(),
                            s = (0, b.A)(c, 2),
                            u = s[0],
                            m = s[1];
                        return a.createElement("div", {
                            className: "video ".concat("lmuSTxEYa_Rkf1d5IXlR")
                        }, a.createElement("div", {
                            className: "thumbnail ".concat("nlAr8anMV3xHyUe53WS2")
                        }, a.createElement(lr, {
                            sources: i
                        })), a.createElement("div", {
                            className: "overlay ".concat("oWzXTyAs6W23UbNhFc1b")
                        }, a.createElement("div", {
                            className: "layer ".concat("dM4pS_3XTguCUpW1N0nk", " inactive")
                        }, !n && a.createElement("div", {
                            className: "filter ".concat("JVA3di0PrYKyBFGiLRkP")
                        }), t && (t.title || t.author) && a.createElement("div", {
                            className: "caption ".concat("JlC3s7PexyG8WHbXzG8A")
                        }, t.title && a.createElement("div", {
                            className: "title ".concat("YhG1mgj0OpbDgFFiiOsY")
                        }, t.title), t.author && a.createElement("div", {
                            className: "author ".concat("OPihRUVDSROjqaEVSxkj")
                        }, a.createElement(vr.A, {
                            id: "globalText.langBy"
                        }, (function (e) {
                            return a.createElement("div", null, "".concat(e, " ").concat(t.author))
                        })))), a.createElement("div", {
                            ref: u,
                            className: Ba()(["play-icon", "play-icon-".concat(l.provider), "JPeUFMdCyRyVDKZl2u0S", {
                                visible: m
                            }])
                        })), !r && a.createElement("div", {
                            className: "provider ".concat("_6fqMV3ZVGeFWTEYRIi2")
                        }, a.createElement(zr, {
                            provider: l.provider,
                            variant: "light"
                        })), o && a.createElement("div", {
                            className: "live ".concat("ZPS7aGcD85Ags0XaJ_OC")
                        }, a.createElement(Fr, null))))
                    },
                    Br = function (e) {
                        var t = e.embed,
                            n = e.embedVideo,
                            r = e.id,
                            o = e.thumbnail,
                            l = e.author,
                            i = e.title,
                            c = e.authorThumbnail,
                            s = ra(),
                            u = (0, ca.A)().locale,
                            m = t.url,
                            d = function (e, t, n) {
                                if (e || t) return {
                                    author: e,
                                    title: t,
                                    icon: n
                                }
                            }(l, i, c);
                        return a.createElement("div", {
                            className: "block-video ".concat("jsZzaDXn1QmqjjNqqErp"),
                            onClick: function () {
                                return !n && s(Zn, {
                                    url: m,
                                    label: i
                                })
                            }
                        }, a.createElement("div", {
                            className: "card ".concat("UtcRVMecJkeQ4RbrKt4u")
                        }, a.createElement(Pr, {
                            id: r,
                            lang: u
                        }, a.createElement("div", {
                            className: "content ".concat("HlPXc3hvFfWXvpqM9PYm")
                        }, a.createElement("div", {
                            className: "video ".concat("FLE4KBHjtJS1n4QbjfM9")
                        }, a.createElement(xr, {
                            caption: d,
                            containerId: "video-block-".concat(r),
                            embedVideo: n,
                            embed: t,
                            thumbnail: o
                        })), a.createElement("div", {
                            className: "caption ".concat("ybKvBq40t9ZU59vYMeMD")
                        }, d && a.createElement(kr, {
                            creator: d.author,
                            cardId: r,
                            ctaHidden: !0,
                            icon: d.icon,
                            title: d.title
                        }), t.provider && a.createElement("div", {
                            className: "provider ".concat("Lrv_2zsIH8PU2sXRPTiS", " ")
                        }, a.createElement(zr, {
                            provider: t.provider,
                            variant: "small"
                        })))))))
                    },
                    Lr = n(39850),
                    Dr = (n(8094), n(64727), "".concat("https://brawlstars-api.inbox.supercell.com/poll-api", "/poll"));
                Dr || h(new Error("Poll API not defined")), "fetch" in window || h(new Error("Fetch API not supported"));
                var _r = Y.z.object({
                        message: Y.z.string(),
                        type: Y.z.literal("error")
                    }),
                    Mr = Y.z.object({
                        type: Y.z.literal("pollVotePost")
                    }),
                    Vr = Y.z.object({
                        data: Y.z.object({
                            options: Y.z.array(Y.z.string())
                        }),
                        type: Y.z.literal("pollVoteGet")
                    }),
                    Rr = Y.z.object({
                        data: Y.z.object({
                            options: Y.z.array(Y.z.object({
                                optionId: Y.z.string(),
                                votesPercentage: Y.z.number().optional(),
                                totalVotes: Y.z.number().optional(),
                                pollTotalVotes: Y.z.number()
                            })),
                            poll: Y.z.object({
                                active: Y.z.boolean(),
                                resultsPublic: Y.z.boolean()
                            })
                        }),
                        type: Y.z.literal("pollGet")
                    }),
                    Ur = Y.z.union([_r, Mr, Vr, Rr]),
                    Gr = function () {
                        var e = (0, V.A)(U().mark((function e(t, n, a, r) {
                            var o, l;
                            return U().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (o = new URLSearchParams).set("pollId", t), o.set("optionId", n.join(",")), e.prev = 3, e.next = 6, fetch("".concat(Dr, "/vote/?").concat(o), {
                                            method: "POST",
                                            headers: {
                                                Authorization: "Bearer ".concat(a)
                                            },
                                            body: JSON.stringify({
                                                jwt: r
                                            })
                                        });
                                    case 6:
                                        return l = e.sent, e.t0 = Ur, e.next = 10, l.json();
                                    case 10:
                                        return e.t1 = e.sent, e.abrupt("return", e.t0.parse.call(e.t0, e.t1));
                                    case 14:
                                        return e.prev = 14, e.t2 = e.catch(3), e.t2 instanceof Error && !(e.t2 instanceof TypeError) && h(e.t2), e.abrupt("return", {
                                            type: "error",
                                            message: "Unknown error"
                                        });
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 14]
                            ])
                        })));
                        return function (t, n, a, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Hr = function () {
                        var e = (0, V.A)(U().mark((function e(t, n) {
                            var a, r, o, l;
                            return U().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, (r = new URLSearchParams).set("pollId", t), e.next = 5, fetch("".concat(Dr, "/vote/?").concat(r), {
                                            method: "GET",
                                            headers: {
                                                Authorization: "Bearer ".concat(n)
                                            }
                                        });
                                    case 5:
                                        return o = e.sent, e.t0 = Ur, e.next = 9, o.json();
                                    case 9:
                                        if (e.t1 = e.sent, "pollVoteGet" === (l = e.t0.parse.call(e.t0, e.t1)).type) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 13:
                                        return e.abrupt("return", null !== (a = l.data.options) && void 0 !== a ? a : null);
                                    case 16:
                                        return e.prev = 16, e.t2 = e.catch(0), e.t2 instanceof Error && !(e.t2 instanceof TypeError) && h(e.t2), e.abrupt("return", null);
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 16]
                            ])
                        })));
                        return function (t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Yr = function () {
                        var e = (0, V.A)(U().mark((function e(t) {
                            var n, a, r, o, l, i, c;
                            return U().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, (r = new URLSearchParams).set("pollId", t), e.next = 5, fetch("".concat(Dr, "/?").concat(r), {
                                            method: "GET"
                                        });
                                    case 5:
                                        return o = e.sent, e.t0 = Ur, e.next = 9, o.json();
                                    case 9:
                                        if (e.t1 = e.sent, "pollGet" === (l = e.t0.parse.call(e.t0, e.t1)).type) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return", {
                                            results: null,
                                            status: "closed",
                                            pollTotalVotes: 0
                                        });
                                    case 13:
                                        return i = l.data.poll.active && l.data.poll.resultsPublic ? "open-public" : l.data.poll.active && !l.data.poll.resultsPublic ? "open-hidden" : "closed", c = l.data.poll.resultsPublic ? l.data.options.sort((function (e, t) {
                                            return e.optionId > t.optionId ? 1 : -1
                                        })).map((function (e) {
                                            var t = e.votesPercentage;
                                            return null != t ? t : 0
                                        })) : null, e.abrupt("return", {
                                            results: c,
                                            status: i,
                                            pollTotalVotes: null !== (n = null === (a = l.data.options[0]) || void 0 === a ? void 0 : a.pollTotalVotes) && void 0 !== n ? n : 0
                                        });
                                    case 18:
                                        return e.prev = 18, e.t2 = e.catch(0), e.t2 instanceof Error && !(e.t2 instanceof TypeError) && h(e.t2), e.abrupt("return", {
                                            results: null,
                                            status: "closed",
                                            pollTotalVotes: 0
                                        });
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 18]
                            ])
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }();

                function Wr(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function Kr(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Wr(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wr(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                n(73185);
                var Jr = "https://brawlstars-api.inbox.supercell.com/poll-api";
                "fetch" in window || h(new Error("Fetch API not supported"));
                var qr = Y.z.object({
                        message: Y.z.string(),
                        type: Y.z.literal("error")
                    }),
                    Zr = Y.z.object({
                        expires: Y.z.coerce.date(),
                        sessionToken: Y.z.string()
                    }),
                    Qr = (Zr.extend({
                        avatarId: Y.z.number().nullable()
                    }), Y.z.object({
                        data: Zr,
                        type: Y.z.literal("authPost")
                    })),
                    Xr = Y.z.union([qr, Qr]),
                    $r = function () {
                        var e = (0, V.A)(U().mark((function e(t) {
                            var n, a, r;
                            return U().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Jr) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 2:
                                        return e.prev = 2, e.next = 5, fetch("".concat(Jr, "/auth/"), {
                                            method: "POST",
                                            headers: {
                                                Authorization: "Bearer ".concat(t)
                                            }
                                        });
                                    case 5:
                                        return a = e.sent, e.t0 = Xr, e.next = 9, a.json();
                                    case 9:
                                        if (e.t1 = e.sent, "error" !== (r = e.t0.parse.call(e.t0, e.t1)).type) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 13:
                                        return e.abrupt("return", Kr(Kr({}, r.data), {}, {
                                            avatarId: null !== (n = G(t)) && void 0 !== n ? n : null
                                        }));
                                    case 16:
                                        return e.prev = 16, e.t2 = e.catch(2), e.t2 instanceof Error && !(e.t2 instanceof TypeError) && h(e.t2), e.abrupt("return", null);
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 16]
                            ])
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }();

                function eo(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function to(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? eo(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eo(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var no = "session-cache",
                    ao = Y.z.object({
                        sessionToken: Y.z.string().nullable(),
                        expires: Y.z.coerce.date(),
                        avatarId: Y.z.number().nullable()
                    }),
                    ro = {
                        sessionToken: null,
                        expires: new Date(0),
                        avatarId: null
                    },
                    oo = a.createContext({
                        state: ro,
                        actions: {
                            refreshSession: function () {
                                return null
                            }
                        }
                    }),
                    lo = function (e, t) {
                        switch (t.type) {
                            case "UPDATE_SESSION":
                                return console.log("UPDATE_SESSION"), to(to({}, e), {}, {
                                    sessionToken: t.session.sessionToken,
                                    expires: t.session.expires,
                                    avatarId: t.session.avatarId
                                });
                            case "CLEAR_SESSION":
                                return console.log("CLEAR_SESSION"), uo(), ro;
                            default:
                                throw new Error("Unhandled action type: ".concat(t))
                        }
                    },
                    io = function (e) {
                        var t = e.children,
                            n = e.initialState,
                            r = Jn().gameParams,
                            o = a.useReducer(lo, n),
                            l = (0, b.A)(o, 2),
                            i = l[0],
                            c = l[1],
                            s = a.useRef(null),
                            u = a.useRef(0),
                            m = a.useCallback((function () {
                                s.current && (window.clearInterval(s.current), s.current = null)
                            }), [s.current]);
                        a.useEffect((function () {
                            var e = r.jwt,
                                t = r.offline;
                            if (e || void 0 !== t) console.log("CLEAR_INTERVAL"), m();
                            else if (console.log("NO_JWT"), !s.current) {
                                var n = window.setInterval((function () {
                                    var e, t;
                                    if (u.current >= 3 && s.current) return console.log("MAX_RETRIES"), void m();
                                    u.current++, console.log("GET_PARAMS"), null === (e = (t = window).sendCommand) || void 0 === e || e.call(t, "getParams")
                                }), 250);
                                s.current = n
                            }
                            return function () {
                                m()
                            }
                        }), [r]), a.useEffect((function () {
                            var e = new Date;
                            Number(i.expires) - Number(e) < 864e5 && d()
                        }), [i.expires]), a.useEffect((function () {
                            var e, t = r.jwt;
                            if (t) {
                                var n = null !== (e = G(t)) && void 0 !== e ? e : null;
                                n ? n !== i.avatarId && d() : c({
                                    type: "CLEAR_SESSION"
                                })
                            }
                        }), [i.avatarId, r]);
                        var d = function () {
                            console.log("refreshSession");
                            var e = r.jwt;
                            e && $r(e).then((function (e) {
                                e ? (c({
                                    type: "UPDATE_SESSION",
                                    session: e
                                }), so(e)) : c({
                                    type: "CLEAR_SESSION"
                                })
                            }))
                        };
                        return a.createElement(oo.Provider, {
                            value: {
                                state: i,
                                actions: {
                                    refreshSession: d
                                }
                            }
                        }, t)
                    },
                    co = function () {
                        try {
                            var e, t = JSON.parse(null !== (e = localStorage.getItem(no)) && void 0 !== e ? e : "");
                            return ao.parse(t)
                        } catch (e) {
                            return ro
                        }
                    },
                    so = function (e) {
                        localStorage.setItem(no, JSON.stringify(e))
                    },
                    uo = function () {
                        localStorage.removeItem(no)
                    };

                function mo(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function go(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? mo(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mo(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var po = "poll-votes",
                    ho = Y.z.object({
                        avatarId: Y.z.number().nullable(),
                        votes: Y.z.record(Y.z.union([Y.z.array(Y.z.string()), Y.z.null()]))
                    }),
                    vo = Y.z.record(Y.z.union([Y.z.array(Y.z.string()), Y.z.null()])),
                    fo = {
                        activePollId: null,
                        votingState: "idle",
                        voteCache: {
                            avatarId: null,
                            votes: {}
                        },
                        polls: {}
                    },
                    yo = a.createContext({
                        state: fo,
                        canVote: function () {
                            return !1
                        },
                        hasVoted: function () {
                            return !1
                        },
                        isClosed: function () {
                            return !1
                        },
                        actions: {
                            closeModal: function () {
                                return null
                            },
                            getVote: function () {
                                return null
                            },
                            openModal: function () {
                                return null
                            },
                            refreshPollInfo: function () {
                                return null
                            },
                            voteFromModal: function () {
                                return Promise.resolve([void 0, void 0])
                            },
                            vote: function () {
                                return Promise.resolve([void 0, void 0])
                            }
                        }
                    }),
                    Eo = function (e, t) {
                        switch (t.type) {
                            case "OPEN_POLL_MODAL":
                                return go(go({}, e), {}, {
                                    activePollId: t.activePollId,
                                    votingState: "idle"
                                });
                            case "CLOSE_POLL_MODAL":
                                return go(go({}, e), {}, {
                                    activePollId: null
                                });
                            case "UPDATE_VOTE":
                                var n = ko(t.pollId, t.optionId, t.avatarId);
                                return go(go({}, e), {}, {
                                    voteCache: n
                                });
                            case "UPDATE_POLL_INFO":
                                var a = go(go({}, e.polls), {}, (0, o.A)({}, t.pollId, t.pollInfo));
                                return go(go({}, e), {}, {
                                    polls: a
                                });
                            case "START_VOTING":
                                return go(go({}, e), {}, {
                                    votingState: "voting"
                                });
                            case "FINISH_VOTING":
                                if ("ok" === t.result.status) {
                                    var r = ko(t.result.pollId, t.result.optionId, t.avatarId);
                                    return go(go({}, e), {}, {
                                        voteCache: r,
                                        votingState: "idle"
                                    })
                                }
                                return go(go({}, e), {}, {
                                    votingState: "fail"
                                });
                            case "CLEAR_CACHE":
                                return Io(), go(go({}, e), {}, {
                                    voteCache: {
                                        avatarId: null,
                                        votes: {}
                                    }
                                });
                            default:
                                throw new Error("PollContext: Unhandled action type")
                        }
                    },
                    bo = function (e) {
                        var t = e.children,
                            n = e.initialState,
                            r = a.useContext(oo),
                            o = r.state,
                            l = o.sessionToken,
                            i = o.avatarId,
                            c = r.actions.refreshSession,
                            s = Jn().gameParams.jwt,
                            u = ra(),
                            m = a.useReducer(Eo, n),
                            d = (0, b.A)(m, 2),
                            g = d[0],
                            p = d[1],
                            h = a.useCallback((function (e) {
                                var t;
                                null !== (t = e.state) && void 0 !== t && t.home && E()
                            }), []);
                        a.useEffect((function () {
                            return window.addEventListener("popstate", h),
                                function () {
                                    window.removeEventListener("popstate", h)
                                }
                        }), []), a.useEffect((function () {
                            i && g.voteCache.avatarId && i !== g.voteCache.avatarId && (console.log("POLL AVATAR ID MISMATCH", i, g.voteCache.avatarId), p({
                                type: "CLEAR_CACHE"
                            }))
                        }), [i, g.voteCache.avatarId]);
                        var v = function (e) {
                                l && Hr(e, l).then((function (t) {
                                    p({
                                        type: "UPDATE_VOTE",
                                        pollId: e,
                                        optionId: t,
                                        avatarId: i
                                    })
                                }))
                            },
                            f = function (e) {
                                return Yr(e).then((function (t) {
                                    p({
                                        type: "UPDATE_POLL_INFO",
                                        pollId: e,
                                        pollInfo: t
                                    })
                                })).catch((function () {
                                    c()
                                }))
                            },
                            y = function (e, t) {
                                return l ? (p({
                                    type: "START_VOTING"
                                }), Promise.all([Gr(e, t, l, null != s ? s : "").then((function (n) {
                                    var a;
                                    if ("error" === n.type) throw new Error(n.message);
                                    var r = null !== (a = G(null != s ? s : "")) && void 0 !== a ? a : null;
                                    p({
                                        type: "FINISH_VOTING",
                                        result: {
                                            status: "ok",
                                            pollId: e,
                                            optionId: t
                                        },
                                        avatarId: r
                                    })
                                })).catch((function () {
                                    p({
                                        type: "FINISH_VOTING",
                                        result: {
                                            status: "fail"
                                        },
                                        avatarId: null
                                    }), c(), v(e)
                                })), f(e)])) : Promise.resolve([void 0, void 0])
                            },
                            E = function () {
                                u("SHOW_BACK_BUTTON", !1), p({
                                    type: "CLOSE_POLL_MODAL"
                                })
                            },
                            w = function (e) {
                                return e in g.voteCache.votes && null !== g.voteCache.votes[e]
                            };
                        return a.createElement(yo.Provider, {
                            value: {
                                state: g,
                                canVote: function (e) {
                                    return !w(e) && null !== l
                                },
                                isClosed: function (e) {
                                    var t;
                                    return "closed" === (null === (t = g.polls[e]) || void 0 === t ? void 0 : t.status)
                                },
                                hasVoted: w,
                                actions: {
                                    closeModal: function () {
                                        window.history.replaceState({
                                            home: !0
                                        }, ""), E()
                                    },
                                    getVote: v,
                                    openModal: function (e) {
                                        u("SHOW_BACK_BUTTON", !0), window.history.pushState({
                                            home: !1
                                        }, ""), p({
                                            type: "OPEN_POLL_MODAL",
                                            activePollId: e
                                        })
                                    },
                                    refreshPollInfo: f,
                                    voteFromModal: function (e) {
                                        return l && g.activePollId ? y(g.activePollId, e) : Promise.resolve([void 0, void 0])
                                    },
                                    vote: y
                                }
                            }
                        }, t)
                    },
                    wo = function () {
                        return a.useContext(yo)
                    },
                    Io = function () {
                        localStorage.removeItem(po)
                    },
                    No = function () {
                        try {
                            var e, t = JSON.parse(null !== (e = localStorage.getItem(po)) && void 0 !== e ? e : ""),
                                n = ho.safeParse(t);
                            if (n.success) return n.data;
                            var a = vo.safeParse(t);
                            if (a.success) return {
                                avatarId: null,
                                votes: a.data
                            };
                            throw new Error("Invalid data")
                        } catch (e) {
                            return Io(), {
                                avatarId: null,
                                votes: {}
                            }
                        }
                    },
                    ko = function (e, t, n) {
                        var a = {
                            votes: go(go({}, No().votes), {}, (0, o.A)({}, e, t)),
                            avatarId: n
                        };
                        return localStorage.setItem(po, JSON.stringify(a)), a
                    },
                    Ao = (n(38428), n(17403), n(42042), {
                        "image-wrapper-results": "Hi3pBFWUj7tFZHVDapdn",
                        container: "_q5DxyDSG3xX7TU_Uo_w",
                        content: "Hhu023zdHD7VARFErSFw",
                        loading: "O3YbXFUPAQ6Fr9blk7QY",
                        title: "DX1qWL7e5TTBaN7yH5Tg",
                        options: "iTYo7s8KBxp9elX89OIa",
                        break: "dlsVieACDIIvizcB9uTD",
                        option: "KZUd9tVumMxGRWEJ7MGw",
                        voted: "NA5ULNyXmRd8jPWAwFNq",
                        selected: "a0t1gRofZGZ1JcVeVCLv",
                        unselected: "JWidKtxCnAbScTTM_2IV",
                        optionTitleResults: "ap41dpRSh3lZUVnYN4OQ",
                        optionTitle: "boyHjPNvXvNqnKJkz6F4",
                        optionResults: "S3H3PSDS_ygK9XUDNqYN",
                        show: "eudKDb0B3wjVGFeAU3At",
                        noTitle: "BiYDYruxzDkdecR5Dl4x",
                        pollTargets: "KWOeGwEo8i4Zo8POl6HD",
                        "poll-view-content": "A3wdhyCQBs7ZQMNNTT5l",
                        "poll-action": "NRjRYhmUml6ny0p9Snr6",
                        voteButton: "uHznihGb5js5sakI2pcg",
                        closeButton: "ISmIrglnHee_qvytLzN2",
                        error: "g3UjI211RzCfW1oZeBIq",
                        fadein: "fWaYQfpBaYx57iQXKm1N",
                        buttonContainer: "uqjVdzmaMF_kJefZszrM"
                    });

                function To(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function Oo(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? To(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : To(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var So = function (e, t) {
                        var n, r, o, l = wo().state,
                            i = l.voteCache,
                            c = l.polls,
                            s = function (e) {
                                var t = a.useState([]),
                                    n = (0, b.A)(t, 2),
                                    r = n[0],
                                    o = n[1];
                                return a.useEffect((function () {
                                    var e = ["1", "2", "3", "4", "5"].map((function () {
                                        return Math.random()
                                    }));
                                    o(e)
                                }), [e]), r
                            }(e),
                            u = null === (n = c[e]) || void 0 === n ? void 0 : n.results,
                            m = t.map((function (t) {
                                var n, a = null == u ? void 0 : u.find((function (e, n) {
                                    return t.id === String(n + 1)
                                }));
                                return Oo(Oo({}, t), {}, {
                                    result: a,
                                    isLeading: !(!a || !u) && u.every((function (e) {
                                        return e <= a
                                    })),
                                    pollTotalVotes: null === (n = c[e]) || void 0 === n ? void 0 : n.pollTotalVotes
                                })
                            })).sort((function (e, t) {
                                var n, a;
                                return (null !== (n = s[Number(e.id) - 1]) && void 0 !== n ? n : 1) < (null !== (a = s[Number(t.id) - 1]) && void 0 !== a ? a : 1) ? -1 : 1
                            })).filter((function (e) {
                                return e.image
                            })),
                            d = null !== (r = null == u ? void 0 : u.reduce((function (e, t) {
                                return t + e
                            }), 0)) && void 0 !== r ? r : 0;
                        return {
                            optionsWithResults: m,
                            showResults: "closed" === (null === (o = c[e]) || void 0 === o ? void 0 : o.status) && d > 0 || Boolean(i.votes[e] && u && u.length > 0 && d > 0)
                        }
                    },
                    Po = function (e, t, n) {
                        var a = M().trackButtonClick;
                        return function () {
                            var r = (0, V.A)(U().mark((function r(o) {
                                var l;
                                return U().wrap((function (r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2, n(o);
                                        case 2:
                                            return l = r.sent, o.forEach((function (n) {
                                                var r, o = t.find((function (e) {
                                                        return e.id === n
                                                    })),
                                                    l = null !== (r = null == o ? void 0 : o.title) && void 0 !== r ? r : n;
                                                a("poll-".concat(e, "-vote-").concat(n), l)
                                            })), r.abrupt("return", l);
                                        case 5:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })));
                            return function (e) {
                                return r.apply(this, arguments)
                            }
                        }()
                    },
                    jo = function (e) {
                        var t, n, r, l = e.pollTitle,
                            i = e.options,
                            c = e.userVote,
                            s = e.canVote,
                            u = e.isClosed,
                            m = e.showResults,
                            g = e.isError,
                            p = e.isVoting,
                            h = e.vote,
                            v = e.pollRef,
                            f = e.style,
                            y = e.onClose,
                            w = e.extraClassNames,
                            I = e.pollTargets,
                            N = e.pollDescription,
                            k = e.targeting,
                            A = a.useState([]),
                            T = (0, b.A)(A, 2),
                            O = T[0],
                            S = T[1],
                            P = (0, d.g)(),
                            j = null != P && P.lang ? {
                                lang: P.lang
                            } : {
                                lang: "en"
                            },
                            C = null !== c,
                            F = function () {
                                s && O.length > 0 && h(O).then((function () {
                                    return S([])
                                }))
                            },
                            z = s && O.length > 0,
                            x = !z,
                            B = u && m,
                            L = window.innerWidth / window.innerHeight,
                            D = 1;
                        I && I.length > 0 && (i = function (e) {
                            return e.map((function (e, t) {
                                return {
                                    id: (t + 1).toString(),
                                    title: e.name,
                                    image: {
                                        small: {
                                            title: e.name,
                                            path: e.imageURL,
                                            width: 60,
                                            height: 80
                                        },
                                        smallRetina: {
                                            title: e.name,
                                            path: e.imageURL,
                                            width: 120,
                                            height: 160
                                        },
                                        medium: {
                                            title: e.name,
                                            path: e.imageURL,
                                            width: 150,
                                            height: 200
                                        },
                                        mediumRetina: {
                                            title: e.name,
                                            path: e.imageURL,
                                            width: 180,
                                            height: 240
                                        },
                                        large: {
                                            title: e.name,
                                            path: e.imageURL,
                                            width: 240,
                                            height: 320
                                        },
                                        largeRetina: {
                                            title: e.name,
                                            path: e.imageURL,
                                            width: 300,
                                            height: 400
                                        }
                                    },
                                    maxBan: e.maxBan,
                                    isLeading: !1,
                                    result: void 0,
                                    pollTotalVotes: e.pollTotalVotes
                                }
                            }))
                        }(I), null !== (n = i[0]) && void 0 !== n && n.maxBan && (D = null === (r = i[0]) || void 0 === r ? void 0 : r.maxBan));
                        var _ = B ? (0, E.A)(i.sort((function (e, t) {
                                var n, a;
                                return (null !== (n = t.result) && void 0 !== n ? n : 0) - (null !== (a = e.result) && void 0 !== a ? a : 0)
                            }))) : i,
                            M = (0, ca.A)().formatMessage({
                                id: "globalText.votingResultsInfo"
                            });
                        return a.createElement("div", {
                            className: Ba()(["poll-view", Ao.container, (0, o.A)({
                                "is-closed": u,
                                "is-open": !u
                            }, "".concat(Ao.pollTargets), I), "lang-".concat(j.lang), null !== (t = null == k ? void 0 : k.campaignId) && void 0 !== t ? t : ""].concat((0, E.A)(null != w ? w : []))),
                            style: f,
                            ref: v
                        }, a.createElement("div", {
                            className: Ba()(["poll-view-content", Ao["poll-view-content"], Ao.content, {
                                tablet: L > .666
                            }, {
                                "is-closed": u,
                                "is-open": !u
                            }])
                        }, a.createElement("h1", {
                            className: Ba()(["title", Ao.title, {
                                short: l.length < 40
                            }])
                        }, u && I ? a.createElement(vr.A, {
                            id: "globalText.votingHasEnded"
                        }) : C ? a.createElement(vr.A, {
                            id: "globalText.thanksForVoting"
                        }) : l), I && a.createElement("h2", null, u ? a.createElement(vr.A, {
                            id: "globalText.votingHasEndedDescription"
                        }) : N && !C ? N : ""), a.createElement("div", {
                            className: Ba()(["options", Ao.options, "options-".concat(i.length), Ao["options-".concat(i.length)], {
                                "show-results": m
                            }])
                        }, _.map((function (e, t) {
                            var n, r, l = null !== (n = e.result) && void 0 !== n ? n : 1,
                                i = "".concat((r = 100 * l) % 1 == 0 ? Math.round(r) : r.toFixed(0), "%"),
                                d = t === _.length - 1,
                                g = a.createElement("div", {
                                    className: Ba()(["option", Ao.option, (0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)((0, o.A)({
                                        voted: null == c ? void 0 : c.includes(e.id)
                                    }, String(Ao.voted), null == c ? void 0 : c.includes(e.id)), "unvoted", C && !c.includes(e.id) || u && !(null != c && c.includes(e.id))), "selected", O.includes(e.id)), String(Ao.selected), O.includes(e.id)), "unselected", s && !C && !O.includes(e.id)), String(Ao.unselected), s && !C && !O.includes(e.id)), "leading", e.isLeading), "losing", !e.isLeading && m)]),
                                    onClick: function () {
                                        return t = e.id, void(!C && s && S((function (e) {
                                            return e.includes(t) ? e.filter((function (e) {
                                                return e !== t
                                            })) : I && e.length < D ? [].concat((0, E.A)(e), [t]) : I ? e : [t]
                                        })));
                                        var t
                                    }
                                }, a.createElement("div", {
                                    className: "image-wrapper"
                                }, a.createElement(lr, {
                                    sources: e.image
                                }), a.createElement("div", {
                                    className: Ba()("image-wrapper-results", Ao["image-wrapper-results"], (0, o.A)({
                                        show: m
                                    }, String(Ao.show), m))
                                }, i)), a.createElement("div", {
                                    className: Ba()(["option-title-results", Ao.optionTitleResults])
                                }, e.title && a.createElement("span", {
                                    className: Ba()([Ao.optionTitle, "option-title"])
                                }, e.title), a.createElement("span", {
                                    className: Ba()(["option-results", Ao.optionResults, (0, o.A)((0, o.A)((0, o.A)({
                                        "no-title": !e.title
                                    }, String(Ao.noTitle), !e.title), "show", m), String(Ao.show), m)])
                                }, i)));
                            return a.createElement(a.Fragment, {
                                key: e.id
                            }, a.createElement(la, {
                                animationSize: "large",
                                disabled: !s
                            }, g), !d && a.createElement("div", {
                                className: Ba()([Ao.break, "break"])
                            }))
                        }))), g && a.createElement("div", {
                            className: Ba()(["error", Ao.error])
                        }, a.createElement(vr.A, {
                            id: "globalText.langVoteTryAgainLabel"
                        })), a.createElement("div", {
                            className: Ba()("poll-action", Ao["poll-action"], Ao.buttonContainer, {
                                "vote-button": z && !I || I && O.length === D,
                                "close-button": x || I,
                                disabled: p
                            })
                        }, I ? a.createElement("div", {
                            className: Ba()(Ao.closeButton, {
                                show: z
                            })
                        }, a.createElement(Ua, {
                            onClick: F,
                            disabled: p
                        }, a.createElement("span", {
                            className: "buttonTextWrapper"
                        }, O.length < D ? a.createElement(a.Fragment, null, a.createElement(vr.A, {
                            id: "globalText.langVoteDefaultButtonLabel"
                        }), a.createElement("span", null, " ", O.length, "/", D)) : O.length === D ? a.createElement(a.Fragment, null, a.createElement(vr.A, {
                            id: "globalText.langVoteSubmitLabel"
                        }), a.createElement("span", null, " ", O.length, "/", D)) : a.createElement(vr.A, {
                            id: "globalText.langVoteSubmitLabel"
                        })))) : a.createElement("div", {
                            className: Ba()(Ao.voteButton, {
                                show: z
                            })
                        }, a.createElement(Ua, {
                            onClick: F,
                            disabled: p
                        }, a.createElement("span", {
                            className: "buttonTextWrapper"
                        }, a.createElement(vr.A, {
                            id: "globalText.langVoteSubmitLabel"
                        })))), y && a.createElement("div", {
                            className: Ba()(Ao.closeButton, {
                                show: x
                            })
                        }, a.createElement(Ua, {
                            onClick: y
                        }, a.createElement("span", {
                            className: "buttonTextWrapper"
                        }, a.createElement(vr.A, {
                            id: "globalText.close"
                        })))), C && "globalText.votingResultsInfo" !== M && a.createElement("div", {
                            className: "voting-results-info"
                        }, M))))
                    },
                    Co = function (e) {
                        var t = e.style,
                            n = e.extraClassNames,
                            r = window.innerWidth / window.innerHeight;
                        return a.createElement("div", {
                            className: Ba()(["poll-view", Ao.container].concat((0, E.A)(null != n ? n : []))),
                            style: t
                        }, a.createElement("div", {
                            className: Ba()(["poll-view-content loading", Ao.content, Ao.loading, {
                                tablet: r > .666
                            }])
                        }, a.createElement("div", {
                            className: "loader-container"
                        }, a.createElement(Sa, null))))
                    },
                    Fo = "j4A2kBhEZFApLggU3PfQ",
                    zo = ["pollId", "options"],
                    xo = function (e) {
                        var t, n, r = e.pollId,
                            o = e.options,
                            l = (0, Lr.A)(e, zo),
                            i = wo(),
                            c = i.state,
                            s = c.voteCache,
                            u = c.votingState,
                            m = c.polls,
                            d = i.canVote,
                            g = i.isClosed,
                            p = i.actions,
                            h = p.vote,
                            v = p.refreshPollInfo,
                            f = So(r, o),
                            y = f.optionsWithResults,
                            E = f.showResults,
                            b = Po(r, o, (function (e) {
                                return h(r, e)
                            })),
                            w = a.useRef(null),
                            I = a.useRef(0);
                        return a.useEffect((function () {
                            v(r)
                        }), [r]), a.useEffect((function () {
                            var e = function () {
                                var e, t, n, a, r = null !== (e = null === (t = w.current) || void 0 === t ? void 0 : t.getBoundingClientRect().top) && void 0 !== e ? e : 0,
                                    o = null !== (n = null === (a = w.current) || void 0 === a ? void 0 : a.getBoundingClientRect().bottom) && void 0 !== n ? n : 0,
                                    l = window.innerHeight,
                                    i = .33 * l,
                                    c = .66 * l;
                                I.current = (new Date).getTime(), setTimeout((function () {
                                    var e;
                                    (new Date).getTime() - I.current <= 200 || r < i && o > c && (null === (e = w.current) || void 0 === e || e.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start"
                                    }))
                                }), 300)
                            };
                            return window.addEventListener("scroll", e, !0),
                                function () {
                                    window.removeEventListener("scroll", e, !0)
                                }
                        }), []), m[r] ? a.createElement(jo, (0, Ea.A)({
                            extraClassNames: [String(Fo), "block-poll"],
                            isClosed: g(r),
                            userVote: null !== (t = s.votes[r]) && void 0 !== t ? t : null,
                            canVote: d(r) && "closed" !== (null === (n = m[r]) || void 0 === n ? void 0 : n.status),
                            vote: b,
                            options: y,
                            showResults: E,
                            isError: "fail" === u,
                            isVoting: "voting" === u,
                            pollRef: w
                        }, l)) : a.createElement(Co, (0, Ea.A)({
                            extraClassNames: [String(Fo), "block-poll"]
                        }, l))
                    },
                    Bo = function (e) {
                        var t = e.title,
                            n = e.data,
                            r = e.configuration;
                        return a.createElement("div", {
                            className: "block-leaderboard"
                        }, a.createElement("div", {
                            className: "title",
                            "data-title": t
                        }, t), n && a.createElement("table", null, r.showColumnTitles && a.createElement("thead", null, a.createElement("tr", null, r.columns.map((function (e) {
                            return a.createElement("th", {
                                key: e.id
                            }, e.title)
                        })))), a.createElement("tbody", null, null == n ? void 0 : n.map((function (e, t) {
                            return a.createElement("tr", {
                                key: t
                            }, r.columns.map((function (t, n) {
                                return a.createElement("td", {
                                    key: t.id,
                                    style: {
                                        color: t.color
                                    }
                                }, a.createElement("span", {
                                    className: "text-content"
                                }, e[n]), t.image && a.createElement(lr, {
                                    sources: t.image
                                }))
                            })))
                        })))))
                    },
                    Lo = function (e) {
                        var t;
                        return a.createElement("div", {
                            className: "block ".concat(null !== (t = e.className) && void 0 !== t ? t : "", " ").concat("oprJvqr5PSV35Z4MYrKO")
                        }, function () {
                            switch (e.type) {
                                case "buttonBlock":
                                    return a.createElement(sr, e);
                                case "featureBlock":
                                    return a.createElement(pr, e);
                                case "imageBlock":
                                    return a.createElement(Cr, e);
                                case "textBlock":
                                    return a.createElement(hr, e);
                                case "videoBlock":
                                    return a.createElement(Br, e);
                                case "pollBlock":
                                    return a.createElement(xo, {
                                        pollTitle: e.title,
                                        pollId: e.poll.pollId,
                                        options: e.poll.options
                                    });
                                case "leaderboardBlock":
                                    return a.createElement(Bo, e);
                                default:
                                    return a.createElement("div", null, "[MISSING COMPONENT]")
                            }
                        }())
                    },
                    Do = function (e) {
                        var t = e.Link,
                            n = e.prevLinkProps,
                            r = e.nextLinkProps;
                        return n || r ? a.createElement("div", {
                            className: "navigation ".concat("K6VxCrch1JyWtsPTzyVq")
                        }, n && a.createElement("div", {
                            className: "prev ".concat("vAxG3xhLr6KDoxqE2d56")
                        }, a.createElement(t, (0, Ea.A)({}, n, {
                            disabled: n.disabled
                        }))), r && a.createElement("div", {
                            className: "next ".concat("RAJaJj2GXId14CSte_ay")
                        }, a.createElement(t, (0, Ea.A)({}, r, {
                            next: !0,
                            disabled: r.disabled
                        })))) : null
                    },
                    _o = (n(79883), {
                        article: "LDJbfwxON1hfOAU24QLU",
                        body: "cFOsZgT0L526ehLq0ONa",
                        footer: "pe72Zjp0iC7lODi4xYYb",
                        titleContainer: "yMbHU50m4yrvdpnlFO_Q",
                        meta: "OsNPHOSRybUxxnAX5vXT",
                        title: "ozWp0bVLRoE8fb_Yx3i1",
                        categories: "koU3OvNQ0IxfjvNAnWoc",
                        category: "nHBnkKX3QnLyB33OZOc4",
                        date: "sE6zhThPWry_FRUURS7O",
                        details: "P6vbEMprcx4JZi8csak3"
                    }),
                    Mo = function (e) {
                        var t = e.article,
                            n = a.useState(!1),
                            r = (0, b.A)(n, 2),
                            o = r[0],
                            l = r[1],
                            i = a.useState(!1),
                            c = (0, b.A)(i, 2),
                            s = c[0],
                            u = c[1],
                            m = a.useState(!1),
                            d = (0, b.A)(m, 2),
                            g = d[0],
                            p = d[1],
                            h = ra();
                        if (a.useEffect((function () {
                                setTimeout((function () {
                                    return p(!0)
                                }), 500)
                            }), []), !t) return null;
                        var v = t.details,
                            f = v.slice(0, 8),
                            y = v.slice(8, 10),
                            E = v.slice(10),
                            w = f[6],
                            I = f[7],
                            N = E[2];
                        return a.createElement("div", {
                            className: "crcok ".concat(g ? "fadein" : "")
                        }, a.createElement("div", {
                            className: "conduct paper"
                        }, f.slice(0, 6).map((function (e, t) {
                            return a.createElement(Lo, (0, Ea.A)({
                                key: t
                            }, e))
                        }))), a.createElement("div", {
                            className: "buttons"
                        }, a.createElement(Ua, {
                            animationSize: "large",
                            variant: w.variant,
                            onClick: function () {
                                return l(!0)
                            }
                        }, a.createElement("div", {
                            className: "label"
                        }, w.label)), a.createElement(Ua, {
                            animationSize: "large",
                            variant: I.variant,
                            onClick: function () {
                                return u(!0)
                            }
                        }, a.createElement("div", {
                            className: "label"
                        }, I.label))), a.createElement("div", {
                            className: "answer1 ".concat(o ? "show" : "")
                        }, a.createElement("div", {
                            className: "content"
                        }, a.createElement(dr, {
                            html: y[0].body
                        }), a.createElement("div", {
                            className: "image"
                        }), a.createElement("div", {
                            className: "buttonContainer"
                        }, a.createElement(Ua, {
                            animationSize: "large",
                            variant: y[1].variant,
                            onClick: function () {
                                return l(!1)
                            }
                        }, y[1].label)))), a.createElement("div", {
                            className: "answer2 ".concat(s ? "show" : "")
                        }, a.createElement("div", {
                            className: "content"
                        }, a.createElement(Lo, E[0]), a.createElement("div", {
                            className: "images"
                        }, a.createElement("div", {
                            className: "bubble"
                        }), a.createElement("div", {
                            className: "emote"
                        })), a.createElement(dr, {
                            html: E[1].body
                        }), a.createElement(Ua, {
                            animationSize: "large",
                            variant: N.variant,
                            onClick: function () {
                                N.url ? h(Zn, {
                                    url: N.url,
                                    id: N.id,
                                    label: "Claim Emote"
                                }) : h(ta, {
                                    functionName: N.functionName,
                                    functionArgs: N.functionArgs
                                })
                            }
                        }, N.label))))
                    },
                    Vo = function (e) {
                        var t, n = (0, d.zy)().pathname;
                        return (0, a.useEffect)((function () {
                            window.scrollTo(0, 0);
                            var e = document.querySelector(".article");
                            e && e.scrollTo(0, 0)
                        }), [n]), "crcok" === (null === (t = e.article) || void 0 === t || null === (t = t.targeting) || void 0 === t ? void 0 : t.campaignId) ? a.createElement(Mo, {
                            article: e.article
                        }) : a.createElement(Ro, e)
                    },
                    Ro = function (e) {
                        var t, n, r = e.article,
                            o = e.Link,
                            l = e.prevLinkProps,
                            i = e.nextLinkProps;
                        if (a.useEffect((function () {
                                var e, t;
                                null === (e = document.querySelector(".app")) || void 0 === e || e.scrollTo(0, 0), null === (t = document.querySelector("#inbox")) || void 0 === t || t.scrollTo(0, 0)
                            }), [null == r ? void 0 : r.id]), !r) return null;
                        var c = r.title,
                            s = r.heroImage,
                            u = r.categories,
                            m = r.postDate,
                            d = r.hideTitle,
                            g = r.details,
                            p = r.targeting,
                            h = {
                                "--heroBackground": null === (t = u[0]) || void 0 === t ? void 0 : t.color
                            };
                        return a.createElement("div", {
                            className: "article ".concat(_o.article, " ").concat(null !== (n = null == p ? void 0 : p.campaignId) && void 0 !== n ? n : "", " ")
                        }, a.createElement("div", {
                            className: "header"
                        }, a.createElement(ir, {
                            image: s
                        })), a.createElement("div", {
                            className: "body ".concat(_o.body)
                        }, a.createElement("div", {
                            className: "title-container ".concat(_o.titleContainer),
                            style: h
                        }, a.createElement("div", {
                            className: "meta ".concat(_o.meta)
                        }, a.createElement("div", {
                            className: "categories ".concat(_o.categories)
                        }, u.map((function (e) {
                            var t = e.title,
                                n = {
                                    "--categoryColor": e.color
                                };
                            return a.createElement("div", {
                                key: t,
                                className: "category ".concat(_o.category, " ").concat(t),
                                style: n
                            }, t)
                        }))), a.createElement("div", {
                            className: "date ".concat(_o.date)
                        }, a.createElement(er.XU, {
                            value: m,
                            month: "long",
                            day: "numeric"
                        }))), !d && a.createElement("div", {
                            className: "title-wrapper"
                        }, a.createElement("div", {
                            className: "title ".concat(_o.title),
                            "data-title": c
                        }, c))), a.createElement("div", {
                            className: "details ".concat(_o.details)
                        }, (g || []).map((function (e, t) {
                            return a.createElement(Lo, (0, Ea.A)({
                                key: t
                            }, e))
                        })))), a.createElement("div", {
                            className: "footer ".concat(_o.footer)
                        }, a.createElement(Do, {
                            Link: o,
                            prevLinkProps: l,
                            nextLinkProps: i
                        })))
                    },
                    Uo = function (e) {
                        var t = e.id,
                            n = e.getProps,
                            r = e.track;
                        return a.createElement("div", {
                            className: "article ".concat("Kw9uj5Zzyv6HqDe4spoF")
                        }, a.createElement($a, {
                            namespace: "news",
                            id: t
                        }, (function (e) {
                            var t = e.data,
                                o = t.articles,
                                l = t.globals,
                                i = e.userSettings,
                                c = n({
                                    articles: o,
                                    userSettings: i,
                                    globals: l
                                }),
                                s = c.article,
                                u = c.Link,
                                m = c.prevLinkProps,
                                d = c.nextLinkProps;
                            return r(s), a.createElement(Vo, {
                                article: s,
                                Link: u,
                                nextLinkProps: d,
                                prevLinkProps: m
                            })
                        })))
                    },
                    Go = function () {
                        var e = (0, d.zy)().pathname,
                            t = Jn().gameParams,
                            n = (0, d.g)(),
                            r = n.id,
                            o = n.variant,
                            l = n.slug,
                            i = M().trackPageView,
                            c = o && "isolated" === o.toLowerCase() || l && "isolated" === l.toLowerCase(),
                            s = {
                                getProps: ya(r, c, t),
                                id: r,
                                track: function (t) {
                                    var n;
                                    i(null !== (n = null == t ? void 0 : t.title) && void 0 !== n ? n : "", e)
                                }
                            };
                        return a.createElement(Uo, s)
                    },
                    Ho = function (e) {
                        return e.filter((function (e) {
                            var t = e.livestreamEndDate,
                                n = e.livestreamStartDate;
                            if ("liveStreamCommunityEntry" !== e.type) return !0;
                            if (!t || !n) return !0;
                            var a = Date.now();
                            return !(n > a || a > t)
                        }))
                    },
                    Yo = function (e) {
                        var t = e.children;
                        return a.createElement("div", {
                            className: "grid ".concat("Pm6vI1udGdXDWKo67zbX")
                        }, t)
                    },
                    Wo = n(1675),
                    Ko = n(52865),
                    Jo = (n(68803), {
                        list: "Xoq8g8ITkiqShnda89NO",
                        items: "ZGGonXaIqtBEmzEK5wxo",
                        row: "KXj6hyidOw4NkOkUiQ5S",
                        item: "GiP9vJHEkY2hwTuDHEbp",
                        loadMore: "KPIQ4_A6wKSpm16uBQrA",
                        noMore: "gzYIGr2lrDjcl9_mfcYf",
                        footer: "g8T9VdDifF8F7fOZ9Jp0"
                    }),
                    qo = function (e) {
                        var t = e.footer,
                            n = e.header,
                            r = e.Item,
                            o = e.items,
                            l = e.columns,
                            i = void 0 === l ? 1 : l,
                            c = e.perPage,
                            s = void 0 === c ? 3 : c,
                            u = (0, a.useState)(1),
                            m = (0, b.A)(u, 2),
                            d = m[0],
                            g = m[1],
                            p = d * s,
                            h = p < o.length,
                            v = 1 === i ? o.slice(0, p) : function (e, t) {
                                for (var n = (0, E.A)(e), a = []; n.length;) a.push(n.splice(0, t));
                                return a
                            }(o.slice(0, p), i);
                        return a.createElement("div", {
                            className: "list ".concat(Jo.list)
                        }, n && a.createElement("div", {
                            className: "header ".concat(Jo.header)
                        }, n), a.createElement("div", {
                            className: "items ".concat(Jo.items)
                        }, 1 === i ? a.createElement(Wo.A, {
                            className: Jo.itemTransition
                        }, v.map((function (e) {
                            return a.createElement(Ko.A, {
                                key: e.id,
                                timeout: 200,
                                classNames: "anim-item"
                            }, a.createElement("div", {
                                className: "row ".concat(Jo.row)
                            }, a.createElement("div", {
                                className: "column",
                                style: {
                                    width: "".concat(100 / i, "%")
                                }
                            }, a.createElement("div", {
                                className: "item ".concat(Jo.item)
                            }, a.createElement(r, {
                                data: e
                            })))))
                        }))) : a.createElement(Wo.A, {
                            className: Jo.itemTransition
                        }, v.map((function (e, t) {
                            var n, o;
                            return a.createElement(Ko.A, {
                                key: null !== (n = null === (o = e[0]) || void 0 === o ? void 0 : o.id) && void 0 !== n ? n : t,
                                timeout: 200,
                                classNames: "anim-item"
                            }, a.createElement("div", {
                                key: t,
                                className: "row ".concat(Jo.row)
                            }, e.map((function (e) {
                                return a.createElement("div", {
                                    key: e.id,
                                    className: "column",
                                    style: {
                                        width: "".concat(100 / i, "%")
                                    }
                                }, a.createElement("div", {
                                    className: "item ".concat(Jo.item)
                                }, a.createElement(r, {
                                    data: e
                                })))
                            }))))
                        })))), h && a.createElement("div", {
                            className: "load-more ".concat(Jo.loadMore)
                        }, a.createElement(Ua, {
                            onClick: function () {
                                return g(d + 1)
                            }
                        }, a.createElement("span", {
                            className: "buttonTextWrapper"
                        }, a.createElement(vr.A, {
                            id: "globalText.langLoadMore"
                        })))), !h && a.createElement("div", {
                            className: "no-more ".concat(Jo.noMore)
                        }, a.createElement(vr.A, {
                            id: "globalText.langOutOfFeed",
                            values: {
                                br: function () {
                                    return a.createElement("br", null)
                                }
                            }
                        })), a.createElement("div", {
                            className: "footer ".concat(Jo.footer)
                        }, t))
                    },
                    Zo = {
                        articleRegular: "UOu8mmo9kN8ETc3Zc8v3",
                        player: "etGh6oCZFFn6VYxgSvzk",
                        card: "nNObbllnSRorXKX4O0Wy",
                        content: "Ved0yVVnyNWR2BoGTy2C",
                        thumbnail: "E9I5lmlwbSoya0FQWH89",
                        caption: "e96MmBQvHqGWWG8QYJmm",
                        small: "HA7tAyK4J52yVe6aQ_BZ"
                    },
                    Qo = function (e) {
                        var t = e.author,
                            n = e.categories,
                            r = e.external,
                            o = e.id,
                            l = e.lang,
                            i = e.type,
                            c = e.listingSize,
                            s = e.newUntil,
                            u = e.pinned,
                            m = e.postDate,
                            d = e.thumbnail,
                            g = e.ctaHidden,
                            p = e.thumbnailAlt,
                            h = e.title,
                            v = e.url,
                            f = e.index,
                            y = ra(),
                            E = ma(),
                            w = Ra(),
                            I = (0, b.A)(w, 2),
                            N = I[0],
                            k = I[1],
                            A = M().trackImpression;
                        a.useEffect((function () {
                            k && A(o, h)
                        }), [o, k]);
                        var T = !(!v && r);
                        return a.createElement("div", {
                            "data-testid": i,
                            className: "article-regular ".concat(Zo.articleRegular, " ").concat(c, " ").concat(Zo[c] || "", " "),
                            ref: N,
                            onClick: function () {
                                T && (null != v && v.startsWith("https://www.youtube.com/embed/") || (r ? y(Zn, {
                                    url: v,
                                    id: o,
                                    label: h,
                                    additionalInformation: {
                                        inboxFeedIndex: f
                                    }
                                }) : E(o, h, "esportNewsEntry" === i ? "esport" : "news")))
                            }
                        }, a.createElement(la, {
                            disabled: !T,
                            animationSize: "small" === c ? "small" : "large"
                        }, a.createElement("div", {
                            className: "card ".concat(Zo.card)
                        }, a.createElement(Pr, {
                            id: o,
                            lang: l,
                            newUntil: s,
                            pinned: u
                        }, a.createElement("div", {
                            className: "content ".concat(Zo.content)
                        }, a.createElement("div", {
                            className: "thumbnail ".concat(Zo.thumbnail)
                        }, a.createElement(lr, {
                            sources: "small" === c ? p : d,
                            cover: "small" === c
                        })), a.createElement("div", {
                            className: "caption ".concat(Zo.caption)
                        }, a.createElement(kr, {
                            ctaHidden: g,
                            author: t,
                            cardId: o,
                            categories: n,
                            external: r,
                            postDate: m,
                            title: h
                        })))))))
                    },
                    Xo = function (e) {
                        var t = Ra(),
                            n = (0, b.A)(t, 2),
                            r = n[0],
                            o = n[1],
                            l = M().trackImpression;
                        return a.useEffect((function () {
                            o && l(e.id, e.title)
                        }), [e.id, o]), a.createElement("div", {
                            ref: r,
                            className: "article-image"
                        }, a.createElement(Qo, (0, Ea.A)({}, e, {
                            external: !0,
                            ctaHidden: !e.url
                        })))
                    },
                    $o = function (e) {
                        var t = e.categories,
                            n = e.embed,
                            r = e.embedVideo,
                            o = e.id,
                            l = e.lang,
                            i = e.live,
                            c = e.newUntil,
                            s = e.pinned,
                            u = e.postDate,
                            m = e.thumbnail,
                            d = e.thumbnailAlt,
                            g = e.type,
                            p = e.title,
                            h = e.creator,
                            v = e.listingSize,
                            f = e.index,
                            y = ra(),
                            E = h || {},
                            w = E.name,
                            I = E.icon,
                            N = n.url,
                            k = !r && "small" === v,
                            A = Ra(),
                            T = (0, b.A)(A, 2),
                            O = T[0],
                            S = T[1],
                            P = M().trackImpression;
                        return a.useEffect((function () {
                            S && P(o, p)
                        }), [o, S]), a.createElement("div", {
                            className: "article-video ".concat("yZjTKQ1A0jRBTNxBDvI_", " ").concat(k ? "small ".concat("LGZhVXKy32JcNJjN6h8N") : "", " "),
                            "data-testid": g,
                            onClick: function () {
                                return !r && y(Zn, {
                                    url: N,
                                    id: o,
                                    label: p,
                                    additionalInformation: {
                                        inboxFeedIndex: f
                                    }
                                })
                            },
                            ref: O
                        }, a.createElement(la, {
                            animationSize: "large"
                        }, a.createElement("div", {
                            className: "card ".concat("kTbuUO7QvCQEYdcvop30")
                        }, a.createElement(Pr, {
                            id: o,
                            lang: l,
                            newUntil: c,
                            pinned: s
                        }, a.createElement("div", {
                            className: "content ".concat("M2B32NPECnFx1X0ci6s_")
                        }, a.createElement("div", {
                            className: "video ".concat("P57mVTsD4T1PGa3qS3Vq")
                        }, a.createElement(xr, {
                            containerId: "video-news-".concat(o),
                            embedVideo: r,
                            embed: n,
                            hideFilter: k,
                            hideProvider: k,
                            live: i,
                            thumbnail: k ? d : m
                        })), a.createElement("div", {
                            className: "caption ".concat("UwKAaON79y7hgizyPVtN")
                        }, a.createElement(kr, {
                            creator: w,
                            cardId: o,
                            categories: t,
                            ctaHidden: k || r,
                            external: !r,
                            icon: I,
                            postDate: u,
                            title: p,
                            provider: n.provider
                        })), k && a.createElement("div", {
                            className: "provider ".concat("amHxKMcdWd3tcMjLaTgk", " ")
                        }, a.createElement(zr, {
                            provider: n.provider,
                            variant: "small"
                        })))))))
                    },
                    el = {
                        "rewatch-match": "xHD6Kd25uARTrMaAZGKQ",
                        card: "oXJOCaEW1UWbvi1mnShy",
                        content: "GBRSaExUSLwFAtUMDLvP",
                        caption: "Wo_xq6xZJuzj6xSeesxx",
                        thumbnail: "mCg3G_tbfu8wegLkUddf",
                        "img-wrapper": "GR9I4di9yqKiOnvyd9Yr",
                        "versus-label": "LbzNReiXcF0Wvinvl_nU",
                        "video-icon": "QwyndsY4iw5i5hH_2tAh",
                        "video-icon-youtube": "R_b4TLwZURq0tcAEVqjg",
                        provider: "fnFBEOpT_BkDyaGP7GMe",
                        "provider-youtube": "sxcC8rDBtB2KH2LshmTd",
                        "provider-twitch": "wUREptBif6rdOmPbF8kg",
                        "player-image": "WbBIa7tuybYEjFXjTIPp",
                        "player-image-left": "iOTz9hGB6WQ8GbCnEoOg",
                        "player-image-right": "jIhh9VmpeSQKV5MTRlNk",
                        "player-name": "EzNkChoZb4jqcAktwTc0",
                        "reveal-score-button": "iyOT2pVnfOm2vR7FsSDh",
                        scores: "QwKpCWeusrr8BsKItWvP",
                        score: "fxRrQTQs660hViRj4QUg",
                        angle: "DhQaJLRP_dfGu9hTqghJ",
                        "score-left": "Goci48tDZSExNgvw6Ink",
                        "score-right": "As9qgZxbRSmd00Nluspk",
                        winner: "KLdJmNk6aqmQuraAXeYP",
                        small: "MgXfdfGI1NgOCkWD754v"
                    },
                    tl = function (e) {
                        var t = e.leftFill,
                            n = e.rightFill;
                        return a.createElement("svg", {
                            className: Ba()(el.angle),
                            viewBox: "0 0 10 37",
                            width: "11%",
                            height: "100%",
                            preserveAspectRatio: "xMinYMin meet"
                        }, a.createElement("path", {
                            d: "M0,0h10L0,37v0z",
                            fill: t
                        }), a.createElement("path", {
                            d: "M10,0V37H0z",
                            fill: n
                        }))
                    },
                    nl = function (e) {
                        var t, n, r = e.playerOneScore,
                            l = e.playerTwoScore,
                            i = e.isOpen,
                            c = e.setIsOpen;
                        if (void 0 === r || void 0 === l) return null;
                        var s = r === l,
                            u = r > l,
                            m = s || u ? "#0062b1" : "#e5e6ec",
                            d = s ? "#DC293F" : u ? "#e5e6ec" : "#DC293F",
                            g = i ? a.createElement("span", {
                                className: Ba()(el.scores)
                            }, a.createElement("div", {
                                className: Ba()("score", el.score, "score-left", el["score-left"], (0, o.A)((0, o.A)((0, o.A)({}, null !== (t = el.winner) && void 0 !== t ? t : "", u || s), "winner", u || s), "loser", !u))
                            }, r), a.createElement(tl, {
                                leftFill: m,
                                rightFill: d
                            }), a.createElement("div", {
                                className: Ba()("score", el.score, "score-right", el["score-right"], (0, o.A)((0, o.A)((0, o.A)({}, null !== (n = el.winner) && void 0 !== n ? n : "", !u || s), "winner", !u || s), "loser", u))
                            }, l)) : a.createElement("span", null, "Reveal Score");
                        return a.createElement("div", null, a.createElement(la, {
                            animationSize: "large"
                        }, a.createElement("div", {
                            onClick: function (e) {
                                c(!0), e.stopPropagation()
                            },
                            className: Ba()("reveal-score-button", el["reveal-score-button"], {
                                revelead: i
                            })
                        }, g)))
                    },
                    al = function (e) {
                        var t = e.id,
                            n = e.lang,
                            r = e.matchThumbnail,
                            o = e.type,
                            l = e.playerOneImage,
                            i = e.playerTwoImage,
                            c = e.playerOneName,
                            s = e.playerTwoName,
                            u = e.playerOneScore,
                            m = e.playerTwoScore,
                            d = e.matchUrl,
                            g = e.provider,
                            p = (0, a.useState)(!1),
                            h = (0, b.A)(p, 2),
                            v = h[0],
                            f = h[1],
                            y = ra(),
                            E = Ra(),
                            w = (0, b.A)(E, 2),
                            I = w[0],
                            N = w[1],
                            k = Ra(),
                            A = (0, b.A)(k, 2),
                            T = A[0],
                            O = A[1],
                            S = M().trackImpression;
                        a.useEffect((function () {
                            O && S(t)
                        }), [t, O]);
                        var P = d && d.length > 0;
                        return a.createElement("div", {
                            className: Ba()("rewatch-match", el["rewatch-match"]),
                            "data-testid": o,
                            ref: T
                        }, a.createElement(la, {
                            animationSize: "large"
                        }, a.createElement("div", {
                            className: "card ".concat(el.card),
                            onClick: function () {
                                d && y(Zn, {
                                    url: d,
                                    id: t
                                })
                            }
                        }, a.createElement(Pr, {
                            id: t,
                            lang: n
                        }, a.createElement("div", {
                            className: "content ".concat(el.content)
                        }, a.createElement("div", {
                            className: Ba()(el["img-wrapper"])
                        }, a.createElement("div", {
                            className: Ba()("thumbnail", el.thumbnail)
                        }, a.createElement(lr, {
                            sources: r
                        })), P && a.createElement("div", {
                            ref: I,
                            className: Ba()("video-icon", "video-icon-" + g, el["video-icon"], el["video-icon-" + g], {
                                visible: N
                            })
                        }), g && a.createElement("div", {
                            className: Ba()("provider", el.provider, el["provider-" + g])
                        }, " "), l && a.createElement("div", {
                            className: Ba()("player-image", "player-image-left", el["player-image"], el["player-image-left"])
                        }, a.createElement(lr, {
                            sources: l
                        })), i && a.createElement("div", {
                            className: Ba()("player-image", "player-image-right", el["player-image"], el["player-image-right"])
                        }, a.createElement(lr, {
                            sources: i
                        })), a.createElement("span", {
                            className: Ba()("versus-label", el["versus-label"])
                        }, "VS")), a.createElement("div", {
                            className: Ba()("caption", el.caption)
                        }, a.createElement("span", {
                            className: Ba()("player-name", "player-name-left", el["player-name"], {
                                winner: u && m && v && u > m,
                                loser: u && m && v && u < m
                            })
                        }, c), a.createElement(nl, {
                            playerOneScore: u,
                            playerTwoScore: m,
                            isOpen: v,
                            setIsOpen: f
                        }), a.createElement("span", {
                            className: Ba()("player-name", "player-name-right", el["player-name"], {
                                winner: u && m && v && u < m,
                                loser: u && m && v && u > m
                            })
                        }, s)))))))
                    },
                    rl = function (e) {
                        var t = e.data;
                        switch (t.type) {
                            case "liveStreamCommunityEntry":
                                return a.createElement($o, (0, Ea.A)({}, t, {
                                    categories: [],
                                    live: !0,
                                    postDate: void 0
                                }));
                            case "communityEntry":
                                return a.createElement($o, (0, Ea.A)({}, t, {
                                    categories: [],
                                    postDate: void 0
                                }));
                            case "externalNewsEntry":
                                return a.createElement(Qo, (0, Ea.A)({}, t, {
                                    external: !0
                                }));
                            case "esportRewatchMatchEntry":
                                return a.createElement(al, t);
                            case "imageNewsEntry":
                                return a.createElement(Xo, t);
                            case "videoNewsEntry":
                                return a.createElement($o, t);
                            case "esportNewsEntry":
                            case "newsEntry":
                                return a.createElement(Qo, t);
                            default:
                                return a.createElement("div", null, "[MISSING COMPONENT]")
                        }
                    },
                    ol = function (e) {
                        var t = e.filterArticles;
                        return a.createElement($a, {
                            namespace: "community"
                        }, (function (e) {
                            var n = e.data.articles,
                                r = function (e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6e4,
                                        r = a.useState(t),
                                        o = (0, b.A)(r, 2),
                                        l = o[0],
                                        i = o[1];
                                    return a.useEffect((function () {
                                        var a = setInterval((function () {
                                            return i(e(t))
                                        }), n);
                                        return function () {
                                            return clearInterval(a)
                                        }
                                    }), [t, e, n]), l
                                }(t, n);
                            return a.createElement("div", {
                                className: "community ".concat("QaaQ7TfWVXdA6Pk_BXfy")
                            }, a.createElement(Yo, null, a.createElement("div", {
                                className: "articles ".concat("Tte99_KCD2LptvDvZgvb")
                            }, a.createElement(qo, {
                                Item: rl,
                                items: r,
                                columns: 2,
                                perPage: 4,
                                footer: null
                            }))))
                        }))
                    },
                    ll = function () {
                        var e = (0, d.zy)().pathname,
                            t = M().trackPageView;
                        return (0, a.useEffect)((function () {
                            t("Community", e), window.history.pushState({
                                home: !0
                            }, "")
                        }), []), a.createElement(ol, {
                            filterArticles: function (e) {
                                return Ho(e)
                            }
                        })
                    },
                    il = (n(31759), n(6925)),
                    cl = n(90655),
                    sl = n(10365),
                    ul = function (e) {
                        var t, n = e.locale,
                            r = e.Slide,
                            o = e.slides,
                            l = e.onSlideChange,
                            i = M().trackImpression,
                            c = (0, il.ok)(),
                            s = (0, b.A)(c, 1)[0],
                            u = (null !== (t = function () {
                                if (/iP(hone|od|ad)/.test(navigator.platform)) {
                                    var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                    return e && e[1] ? parseInt(e[1], 10) : null
                                }
                                return null
                            }()) && void 0 !== t ? t : 1 / 0) <= 12,
                            m = a.useState(Date.now()),
                            d = (0, b.A)(m, 2),
                            g = d[0],
                            p = d[1],
                            h = a.useRef(""),
                            v = o.some((function (e) {
                                return "eventEntry" === e.type && e.timerLabel
                            }));
                        (0, a.useEffect)((function () {
                            if (v) {
                                var e = setInterval((function () {
                                    var e = Date.now();
                                    p(e)
                                }), 1e3);
                                return function () {
                                    clearInterval(e)
                                }
                            }
                        }), []);
                        var f = o.filter((function (e) {
                                return "eventEntry" !== e.type || !e.timerKind || "HIDE_ENTRY" !== e.timerKind || e.timerTarget > g
                            })),
                            y = {
                                bulletActiveClass: Ba()("selected", "QNcxx64OeVjM1pjyzzga"),
                                bulletClass: Ba()("page", "bOsb9SO5FGcflodpNKfC"),
                                enabled: f.length > 1
                            },
                            E = function (e) {
                                var t = f[e];
                                t && t.id !== h.current && (i(t.id, t.title), h.current = t.id)
                            };
                        return a.createElement(cl.RC, {
                            onSlideChange: function (e) {
                                E(e.realIndex), l && l(e.realIndex)
                            },
                            onAfterInit: function () {
                                E(0)
                            },
                            onSwiper: function (e) {
                                var t = s.get("openCarouselId"),
                                    n = f.findIndex((function (e) {
                                        return e.id === t
                                    }));
                                n > -1 && e.slideTo(n)
                            },
                            loop: !0,
                            pagination: y,
                            modules: [sl.dK],
                            className: Ba()("CyfQn_5qySJnvS7ZkMWS", "carousel", {
                                single: 1 === f.length,
                                multi: f.length > 1
                            }),
                            onPaginationRender: function (e, t) {
                                var n;
                                t.classList.add("paginator"), t.classList.add(null !== (n = "KPpZIiwxIQslqsrbydJc") ? n : "")
                            }
                        }, f.map((function (e) {
                            return a.createElement(cl.qr, {
                                key: e.id,
                                className: "slide"
                            }, (function () {
                                var t, o = (0, cl.Mn)();
                                return a.createElement("div", {
                                    className: "".concat(null !== (t = e.targeting) && void 0 !== t && t.campaignId ? e.targeting.campaignId : ""),
                                    onClick: function (e) {
                                        u && "DIV" === e.target.nodeName && o.slideNext()
                                    }
                                }, a.createElement(Pr, {
                                    id: e.id,
                                    lang: n.lang
                                }, a.createElement(r, e)))
                            }))
                        })))
                    },
                    ml = function (e, t) {
                        return e.filter((function (e) {
                            var t = e.article,
                                n = e.url;
                            return t || n
                        })).map((function (e) {
                            var n = e.id,
                                a = e.label,
                                r = e.type,
                                o = e.article,
                                l = e.url,
                                i = e.variant;
                            return {
                                id: n,
                                label: a,
                                onClick: function () {
                                    return t({
                                        id: n,
                                        type: r,
                                        article: o,
                                        url: l,
                                        label: a
                                    })
                                },
                                variant: i
                            }
                        }))
                    },
                    dl = {
                        timeUnit: "QROGTLvab69QqZ0xqkmE",
                        value: "GkpobeLnX08u88G3Hnk5"
                    },
                    gl = function (e) {
                        var t = e.timeUnit,
                            n = t.value,
                            r = t.unit;
                        return a.createElement("div", {
                            className: "time-unit ".concat(dl.timeUnit)
                        }, a.createElement("div", {
                            className: "value ".concat(dl.value)
                        }, n), a.createElement("div", {
                            className: "unit ".concat(dl.unit)
                        }, r))
                    },
                    pl = {
                        timer: "HuzE_3ycdx7_hQdvvKGK",
                        label: "zXD9ziXtNvxgC2ZYrGRW",
                        counter: "iTDRsqpZuwI1xVahWI12",
                        hours: "BJDp6TQuZyxVzstYj759",
                        minutes: "_CpvUvDqlMrLlnvkSDCb"
                    },
                    hl = function (e) {
                        var t = e.countdown,
                            n = e.timerLabel,
                            r = e.format,
                            o = (0, ca.A)().formatMessage,
                            l = function (e, t) {
                                var n = (e > 0 ? e : 0) / 1e3,
                                    a = n / 60,
                                    r = a / 60,
                                    o = r / 24;
                                return {
                                    totalSeconds: Math.floor(n),
                                    seconds: Math.floor(n % 60),
                                    totalMinutes: Math.max(1, Math.floor(a)),
                                    minutes: Math.max(t ? 1 : 0, Math.floor(a % 60)),
                                    totalHours: Math.floor(r),
                                    hours: Math.floor(r % 24),
                                    totalDays: Math.floor(o),
                                    days: Math.floor(o)
                                }
                            }(t, "total-hours" === r),
                            i = l.days,
                            c = l.hours,
                            s = l.minutes,
                            u = l.seconds,
                            m = l.totalDays,
                            d = l.totalHours,
                            g = l.totalMinutes,
                            p = l.totalSeconds,
                            h = "three-values" === r && i > 0 ? {
                                value: i,
                                unit: o({
                                    id: "globalText.langDaysAbbreviated"
                                }),
                                total: m
                            } : void 0,
                            v = {
                                value: "total-hours" === r ? d : c,
                                unit: o({
                                    id: "globalText.langHoursAbbreviated"
                                }),
                                total: d
                            },
                            f = {
                                value: s,
                                unit: o({
                                    id: "globalText.langMinutesAbbreviated"
                                }),
                                total: g
                            },
                            y = "three-values" === r && 0 === i ? {
                                value: u,
                                unit: o({
                                    id: "globalText.langSecondsAbbreviated"
                                }),
                                total: p
                            } : void 0;
                        return a.createElement("div", {
                            className: "timer ".concat(pl.timer)
                        }, n && a.createElement("div", {
                            className: "label ".concat(pl.label)
                        }, n), a.createElement("div", {
                            className: "counter ".concat(pl.counter)
                        }, h && a.createElement("div", {
                            className: "days ".concat(pl.days),
                            "data-total": h.total,
                            "data-value": h.value
                        }, a.createElement(gl, {
                            timeUnit: h
                        })), a.createElement("div", {
                            className: "hours ".concat(pl.hours),
                            "data-total": v.total,
                            "data-value": v.value
                        }, a.createElement(gl, {
                            timeUnit: v
                        })), a.createElement("div", {
                            className: "minutes ".concat(pl.minutes),
                            "data-total": f.total,
                            "data-value": f.value
                        }, a.createElement(gl, {
                            timeUnit: f
                        })), y && a.createElement("div", {
                            className: "seconds ".concat(pl.seconds),
                            "data-total": y.total,
                            "data-value": y.value
                        }, a.createElement(gl, {
                            timeUnit: y
                        }))))
                    };

                function vl(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function fl(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? vl(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vl(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var yl = {
                        slide: "MhTjAaOaYI1mwYWWgi6Q",
                        shine: "xc5MyvDRlMSLPPUz3ara",
                        rotate: "Pm_HNtOI_uSJD2r4Bub_",
                        twinkle: "ytzfBm43irkOiCEDDi3b",
                        "tracker-wrapper": "AuECIO2duKuUdzuSKHt3",
                        trackers: "bWCUEWXiC36nV5Y1BqvW",
                        "milestone-img": "mRkyXgwf3WzzF2emIWWW",
                        "milestone-claimable": "Iwu6ik7lpe7SYtNkn_Jd",
                        "claim-anim": "muYRzsBc9qqjXnY1QWBX",
                        "milestone-label": "v5YGXp7VruHTQeLaZ7sa",
                        tracker: "Xsmm7yYDm2Y6ZXcYHQWq",
                        milestone: "iKP6_YIgxR7xH3nFXBtk",
                        "tracker-progress": "SfMExvLNG03GdZSHHLdF",
                        "tracker-shine": "AKHBK7BxlcHM8gkGZ30S",
                        "milestone-wrapper": "aRH_KTT0JVUEs6yV0ONf",
                        "milestone-label-wrapper": "T1nh35HtBbKHdFBkW7su",
                        content: "QfwDZOC22aN7gwUs4Liw",
                        image: "nlsv9yjRmPCymtHv8KIt",
                        filter: "ZmE_akOitwuFisadPXOu",
                        title: "MsglscFDB6Lj9aUsB5Cl",
                        wrapper: "egy44AjP5gxvJgfXrKTZ",
                        timer: "LjCTzUQrRpWBVGcAb73N",
                        ctas: "EXJng_CDqirS9SwHPYDr"
                    },
                    El = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                        return function (n) {
                            return function (r) {
                                var o, l = e(r.slide),
                                    i = (o = l - Date.now(), (0, a.useState)(o)),
                                    c = (0, b.A)(i, 2),
                                    s = c[0],
                                    u = c[1];
                                ! function (e, t, n) {
                                    (0, a.useEffect)((function () {
                                        if (t) {
                                            var a = function () {
                                                    clearInterval(r)
                                                },
                                                r = setInterval((function () {
                                                    var e = t - Date.now();
                                                    if (e < 1e3) return n(0), a();
                                                    n(e)
                                                }), e);
                                            return a
                                        }
                                    }), [])
                                }(t, l, u);
                                var m = fl(fl({}, r), {}, {
                                    countdown: l && s
                                });
                                return a.createElement(n, m)
                            }
                        }
                    }((function (e) {
                        return e.timerTarget
                    })),
                    bl = El((function (e) {
                        var t = e.slide,
                            n = e.countdown,
                            r = t.background,
                            o = t.ctas,
                            l = t.displayTimer,
                            i = t.hideTitle,
                            c = t.timerLabel,
                            s = t.title,
                            u = t.limit,
                            m = void 0 === u ? 60 : u,
                            d = t.timerKind,
                            g = ra(),
                            p = ma(),
                            h = wo().actions.openModal,
                            v = Gl(g, p, h, s),
                            f = s.substring(0, m),
                            y = d ? "SHOW_CTA" === d ? n && n > 0 ? [] : ml(o, v) : "HIDE_CTA" === d ? n && n > 0 ? ml(o, v) : [] : ml(o, v) : ml(o, v),
                            E = Boolean(l && n && n > 0);
                        return a.createElement("div", {
                            className: "slide default ".concat(yl.slide)
                        }, a.createElement("div", {
                            className: "content ".concat(yl.content, " ").concat(E ? "with-timer" : "")
                        }, r && a.createElement("div", {
                            className: "image ".concat(yl.image)
                        }, a.createElement(lr, {
                            sources: r,
                            cover: !0
                        })), f && !i && a.createElement(a.Fragment, null, a.createElement("div", {
                            className: "filter ".concat(yl.filter)
                        }), a.createElement("div", {
                            className: "title ".concat(yl.title),
                            "data-title": f
                        }, f)), a.createElement("div", {
                            className: "wrapper ".concat(yl.wrapper)
                        }, E && a.createElement("div", {
                            className: "timer ".concat(yl.timer)
                        }, a.createElement(hl, {
                            format: "total-hours",
                            countdown: n,
                            timerLabel: c
                        })), y.length ? a.createElement("div", {
                            className: "ctas ".concat(1 === y.length ? "single" : "multi", " ").concat(yl.ctas)
                        }, y.map((function (e, t) {
                            var n = e.label,
                                r = e.onClick,
                                o = e.variant;
                            return a.createElement(Ua, {
                                key: t,
                                onClick: r,
                                variant: o
                            }, a.createElement("span", {
                                className: "buttonTextWrapper"
                            }, n || a.createElement(vr.A, {
                                id: "globalText.langGo"
                            })))
                        }))) : null)))
                    })),
                    wl = n(43144);

                function Il(e) {
                    var t = new CustomEvent("changeTabVisibility", {
                        detail: {
                            visible: e
                        }
                    });
                    window.dispatchEvent(t)
                }

                function Nl(e) {
                    var t = new CustomEvent("changeControlButtonVisibility", {
                        detail: {
                            visible: e
                        }
                    });
                    window.dispatchEvent(t)
                }
                var kl = ["isOpen", "pollId", "options"],
                    Al = function (e) {
                        var t, n, r = e.isOpen,
                            o = e.pollId,
                            l = e.options,
                            i = (0, Lr.A)(e, kl),
                            c = wo(),
                            s = c.state,
                            u = s.voteCache,
                            m = s.votingState,
                            d = s.polls,
                            g = c.canVote,
                            p = c.isClosed,
                            h = c.actions,
                            v = h.refreshPollInfo,
                            f = h.voteFromModal,
                            y = So(o, l),
                            E = y.optionsWithResults,
                            b = y.showResults,
                            w = M().trackImpression,
                            I = Po(o, l, f);
                        if (a.useEffect((function () {
                                r ? (v(o), Il(!1), Nl(!1), document.body.style.overflow = "hidden") : (document.body.style.overflow = "initial", Il(!0), Nl(!0))
                            }), [r]), a.useEffect((function () {
                                r && w("poll-".concat(o), i.pollTitle)
                            }), [o, r]), !r) return null;
                        var N = document.getElementById("modal-root");
                        if (!N) return null;
                        var k = a.createElement(jo, (0, Ea.A)({
                            userVote: null !== (t = u.votes[o]) && void 0 !== t ? t : null,
                            canVote: g(o) && "closed" !== (null === (n = d[o]) || void 0 === n ? void 0 : n.status),
                            isClosed: p(o),
                            vote: I,
                            options: E,
                            showResults: b,
                            isError: "fail" === m,
                            isVoting: "voting" === m,
                            extraClassNames: [String("KqHN016VQ0WZAtQJ1smJ")]
                        }, i));
                        return wl.createPortal(k, N)
                    },
                    Tl = function (e) {
                        var t = e.slide,
                            n = t.background,
                            r = t.title,
                            o = t.hideTitle,
                            l = t.id,
                            i = t.pollTitle,
                            c = t.options,
                            s = t.pollTargets,
                            u = t.pollDescription,
                            m = t.targeting,
                            d = wo(),
                            g = d.state,
                            p = d.canVote,
                            h = d.hasVoted,
                            v = d.actions,
                            f = v.openModal,
                            y = v.closeModal,
                            E = v.refreshPollInfo;
                        a.useEffect((function () {
                            Promise.all([E(l)])
                        }), [l]);
                        var b, w, I, N = {
                                className: "vote-button",
                                label: a.createElement(vr.A, {
                                    id: "globalText.langVoteDefaultButtonLabel"
                                }),
                                onClick: function () {
                                    return f(l)
                                }
                            },
                            k = {
                                className: "show-results-button",
                                label: a.createElement(vr.A, {
                                    id: "globalText.langVoteResultsButtonLabel"
                                }),
                                onClick: function () {
                                    return f(l)
                                }
                            },
                            A = {
                                className: "show-results-button",
                                label: a.createElement(vr.A, {
                                    id: "globalText.langVoteCheck"
                                }),
                                onClick: function () {
                                    return f(l)
                                }
                            },
                            T = h(l) && "closed" !== (null === (b = g.polls[l]) || void 0 === b ? void 0 : b.status) ? A : p(l) && "closed" !== (null === (w = g.polls[l]) || void 0 === w ? void 0 : w.status) || "open-hidden" === (null === (I = g.polls[l]) || void 0 === I ? void 0 : I.status) ? N : k,
                            O = {
                                pollId: l,
                                pollTitle: i,
                                isOpen: l === g.activePollId,
                                onClose: function () {
                                    return y()
                                },
                                options: c,
                                pollTargets: s,
                                pollDescription: u,
                                targeting: m
                            };
                        return a.createElement(a.Fragment, null, a.createElement("div", {
                            className: "slide vote ".concat(yl.slide)
                        }, a.createElement("div", {
                            className: "content ".concat(yl.content)
                        }, n && a.createElement("div", {
                            className: "image ".concat(yl.image)
                        }, a.createElement(lr, {
                            sources: n,
                            cover: !0
                        })), r && !o && a.createElement(a.Fragment, null, a.createElement("div", {
                            className: "filter ".concat(yl.filter)
                        }), a.createElement("div", {
                            className: "title ".concat(yl.title),
                            "data-title": r
                        }, r)), a.createElement("div", {
                            className: "wrapper ".concat(yl.wrapper)
                        }, a.createElement("div", {
                            className: "ctas single ".concat(yl.ctas, " ").concat(T.className)
                        }, a.createElement(Ua, {
                            onClick: T.onClick
                        }, a.createElement("span", {
                            className: "buttonTextWrapper"
                        }, T.label)))))), a.createElement(Al, O))
                    },
                    Ol = "".concat("https://brawlstars-api.inbox.supercell.com/inbox-rewards");
                Ol || h(new Error("Inbox Rewards API not defined")), "fetch" in window || h(new Error("Fetch API not supported"));
                var Sl = Y.z.union([Y.z.literal("VOUCHER_REDEEMED"), Y.z.literal("VOUCHER_NOT_REDEEMED")]),
                    Pl = Y.z.record(Y.z.string(), Y.z.object({
                        status: Sl
                    })),
                    jl = function () {
                        var e = (0, V.A)(U().mark((function e(t, n) {
                            var a, r, o, l;
                            return U().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, (a = new URLSearchParams).set("voucher", t.join(",")), e.next = 5, fetch("".concat(Ol, "/check-status?").concat(a), {
                                            method: "GET",
                                            headers: {
                                                Authorization: "Bearer ".concat(n)
                                            }
                                        });
                                    case 5:
                                        return r = e.sent, e.next = 8, r.json();
                                    case 8:
                                        return o = e.sent, l = Pl.parse(o), e.abrupt("return", l);
                                    case 13:
                                        return e.prev = 13, e.t0 = e.catch(0), e.t0 instanceof Error && !(e.t0 instanceof TypeError) && h(e.t0), e.abrupt("return", null);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 13]
                            ])
                        })));
                        return function (t, n) {
                            return e.apply(this, arguments)
                        }
                    }();

                function Cl(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function Fl(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Cl(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cl(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var zl = "inbox-rewards",
                    xl = Y.z.object({
                        rewards: Pl
                    }),
                    Bl = {
                        rewards: {}
                    },
                    Ll = a.createContext({
                        state: Bl,
                        actions: {
                            fetchUnclaimedVouchers: function (e) {
                                return null
                            },
                            claimVoucher: function (e) {
                                return null
                            }
                        }
                    }),
                    Dl = function (e, t) {
                        var n = function (e, t) {
                            if ("UPDATE_REWARD_STATUS" === t.type) return Fl(Fl({}, e), {}, {
                                rewards: Fl(Fl({}, e.rewards), t.reward)
                            });
                            throw new Error("Unhandled action type: ".concat(t.type))
                        }(e, t);
                        return Ml(n), n
                    },
                    _l = function (e) {
                        var t = e.children,
                            n = e.initialState,
                            r = Jn().gameParams.jwt,
                            o = a.useReducer(Dl, n),
                            l = (0, b.A)(o, 2),
                            i = l[0],
                            c = l[1],
                            s = function () {
                                var e = (0, V.A)(U().mark((function e(t) {
                                    var n, a, o;
                                    return U().wrap((function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (r) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return console.error("No JWT available"), e.abrupt("return");
                                            case 3:
                                                if (n = Object.entries(i.rewards).filter((function (e) {
                                                        var t = (0, b.A)(e, 2);
                                                        return t[0], "VOUCHER_REDEEMED" === t[1].status
                                                    })).map((function (e) {
                                                        var t = (0, b.A)(e, 2),
                                                            n = t[0];
                                                        return t[1], n
                                                    })), 0 !== (a = t.filter((function (e) {
                                                        return !n.includes(e)
                                                    }))).length) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 7:
                                                return e.next = 9, jl(a, r);
                                            case 9:
                                                (o = e.sent) && c({
                                                    type: "UPDATE_REWARD_STATUS",
                                                    reward: o
                                                });
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function (t) {
                                    return e.apply(this, arguments)
                                }
                            }();
                        return a.createElement(Ll.Provider, {
                            value: {
                                state: i,
                                actions: {
                                    fetchUnclaimedVouchers: s,
                                    claimVoucher: function (e) {
                                        var t, n, a = "action=voucher&code=".concat(e);
                                        null === (t = (n = window).sendCommand) || void 0 === t || t.call(n, a)
                                    }
                                }
                            }
                        }, t)
                    },
                    Ml = function (e) {
                        localStorage.setItem(zl, JSON.stringify(e))
                    },
                    Vl = function () {
                        try {
                            var e = JSON.parse(localStorage.getItem(zl) || '{"rewards": {}}');
                            return xl.parse(e)
                        } catch (e) {
                            return h(e), localStorage.removeItem(zl), Bl
                        }
                    },
                    Rl = function (e) {
                        var t, n = e.slide,
                            r = n.title,
                            o = n.tracker,
                            l = n.milestones,
                            i = n.background,
                            c = n.targeting,
                            s = a.useContext(Ll),
                            u = s.state,
                            m = s.actions,
                            d = Object.entries(u.rewards).filter((function (e) {
                                var t = (0, b.A)(e, 2);
                                return t[0], "VOUCHER_REDEEMED" === t[1].status
                            })).map((function (e) {
                                var t = (0, b.A)(e, 2),
                                    n = t[0];
                                return t[1], n
                            })),
                            g = Va(),
                            p = (0, b.A)(g, 2),
                            h = p[0],
                            v = p[1],
                            f = ra(),
                            y = ma(),
                            E = wo().actions.openModal,
                            w = Gl(f, y, E, r),
                            I = ml(n.ctas, w),
                            N = o.progress,
                            k = o.direction,
                            A = o.color;
                        (0, a.useEffect)((function () {
                            var e = l.filter((function (e) {
                                return !!e.voucherId
                            }));
                            if (e.length) {
                                var t = e.map((function (e) {
                                    return e.voucherId
                                }));
                                m.fetchUnclaimedVouchers(t)
                            }
                        }), []);
                        var T = "vertical" === k ? {
                                height: "".concat(N, "%")
                            } : {
                                width: "".concat(N, "%")
                            },
                            O = l.some((function (e) {
                                return !!e.label
                            })),
                            S = {
                                "--bar-color": A
                            };
                        return a.createElement("div", {
                            className: "slide progress-indicator ".concat(yl.slide, " ").concat(v ? "visible" : "", " ").concat(O ? "with-milestone-labels" : "", " ").concat(null !== (t = null == c ? void 0 : c.campaignId) && void 0 !== t ? t : "", " ").concat(r ? "with-title" : "without-title"),
                            ref: h,
                            style: S
                        }, a.createElement("div", {
                            className: "content ".concat(yl.content)
                        }, r && a.createElement(a.Fragment, null, a.createElement("div", {
                            className: "filter ".concat(yl.filter)
                        }), a.createElement("div", {
                            className: "title ".concat(yl.title, " "),
                            "data-title": r
                        }, r)), i && a.createElement("div", {
                            className: "image ".concat(yl.image)
                        }, a.createElement(lr, {
                            sources: i,
                            cover: !0
                        })), a.createElement("div", {
                            className: "trackers ".concat(yl.trackers)
                        }, v && a.createElement("div", {
                            className: "tracker-wrapper"
                        }, a.createElement("div", {
                            className: "tracker ".concat(yl.tracker)
                        }, a.createElement("div", {
                            style: T,
                            className: "tracker-progress ".concat(yl["tracker-progress"], " ").concat(N > 99 ? "almost-complete" : "", " ")
                        })), l.map((function (e, t) {
                            var n = Math.max(e.progress, 5),
                                r = "vertical" === k ? {
                                    bottom: "".concat(n, "%")
                                } : {
                                    left: "".concat(n, "%")
                                };
                            return a.createElement("span", {
                                key: t,
                                style: r,
                                className: "milestone-marker"
                            })
                        }))), a.createElement("div", {
                            className: "milestone-wrapper ".concat(yl["milestone-wrapper"], " milestones-").concat(l.length)
                        }, l.map((function (e, t) {
                            if (!e.image) return null;
                            var n = Math.max(e.progress, 5),
                                r = e.unlocked,
                                o = "vertical" === k ? {
                                    bottom: "".concat(n, "%")
                                } : {
                                    left: "".concat(n, "%")
                                },
                                l = !!e.voucherId,
                                i = d.includes(e.voucherId);
                            return a.createElement("div", {
                                onClick: function () {
                                    i || (r && e.eventId, e.voucherId && m.claimVoucher(e.voucherId))
                                },
                                style: o,
                                key: t,
                                className: Ba()("milestone-img", yl["milestone-img"], {
                                    "milestone-achieved": l ? r && i : r
                                }, {
                                    "milestone-unachieved": !r
                                }, l ? r && i : r, {
                                    "milestone-claimable": !i && l
                                }, !i && l ? yl["milestone-claimable"] : void 0)
                            }, a.createElement(lr, {
                                sources: e.image
                            }), !r && a.createElement("div", {
                                className: "milestone-locked"
                            }), r && a.createElement("div", {
                                className: "milestone-unlocked"
                            }))
                        }))), a.createElement("div", {
                            className: "milestone-label-wrapper ".concat(yl["milestone-label-wrapper"])
                        }, l.map((function (e, t) {
                            if (!e.label) return null;
                            var n = Math.max(e.progress, 5),
                                r = e.unlocked,
                                o = "vertical" === k ? {
                                    bottom: "".concat(n, "%")
                                } : {
                                    left: "".concat(n, "%")
                                };
                            return a.createElement("div", {
                                key: t,
                                style: o,
                                className: "milestone-label ".concat(yl["milestone-label"], " ").concat(r ? yl["milestone-reached"] : yl["milestone-unreached"], " ").concat(r ? "milestone-reached" : "milestone-unreached"),
                                title: e.label
                            }, e.label)
                        })))), a.createElement("div", {
                            className: "wrapper ".concat(yl.wrapper)
                        }, I.length ? a.createElement("div", {
                            className: "ctas ".concat(1 === I.length ? "single" : "multi", " ").concat(yl.ctas)
                        }, I.map((function (e, t) {
                            var n = e.label,
                                r = e.variant,
                                o = e.onClick;
                            return a.createElement(Ua, {
                                key: t,
                                onClick: o,
                                variant: r
                            }, a.createElement("span", {
                                className: "buttonTextWrapper"
                            }, n || a.createElement(vr.A, {
                                id: "globalText.langGo"
                            })))
                        }))) : null)))
                    },
                    Ul = (n(27968), function (e) {
                        var t, n, r, o = e.slide,
                            l = o.title,
                            i = o.tracker,
                            c = o.milestones,
                            s = o.targeting,
                            u = Va({
                                threshold: .001
                            }),
                            m = (0, b.A)(u, 2),
                            d = m[0],
                            g = m[1],
                            p = a.useRef(null),
                            h = a.useRef(null),
                            v = a.useRef(null),
                            f = ra(),
                            y = ma(),
                            E = wo().actions.openModal,
                            w = Gl(f, y, E, l);
                        a.useEffect((function () {
                            if (p.current && g) {
                                var e, t = p.current.offsetTop;
                                null === (e = d.current) || void 0 === e || null === (e = e.parentElement) || void 0 === e || e.scrollTo({
                                    top: t
                                })
                            }
                        }), [p.current, g]), a.useEffect((function () {
                            setTimeout((function () {
                                if (h.current && g) {
                                    var e, t, n, a, r, o, l, i, c, s, u, m = (null !== (e = null === (t = v.current) || void 0 === t ? void 0 : t.offsetTop) && void 0 !== e ? e : 0) + (null !== (n = null === (a = h.current.parentElement) || void 0 === a || null === (a = a.parentElement) || void 0 === a ? void 0 : a.offsetTop) && void 0 !== n ? n : 0) + (null !== (r = h.current.parentElement) && void 0 !== r && r.parentElement ? parseFloat(getComputedStyle(null === (o = h.current.parentElement) || void 0 === o ? void 0 : o.parentElement).marginTop) : 0) + (null !== (l = h.current.parentElement) && void 0 !== l && null !== (l = l.parentElement) && void 0 !== l && l.parentElement ? parseFloat(getComputedStyle(null === (i = h.current.parentElement) || void 0 === i || null === (i = i.parentElement) || void 0 === i ? void 0 : i.parentElement).paddingTop) : 0) - (null !== (c = null === (s = d.current) || void 0 === s || null === (s = s.parentElement) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== c ? c : 0) / 1.5;
                                    null === (u = d.current) || void 0 === u || null === (u = u.parentElement) || void 0 === u || u.scrollTo({
                                        top: m,
                                        behavior: "smooth"
                                    })
                                }
                            }), 500)
                        }), [p.current, g]);
                        var I = ml(o.ctas, w),
                            N = i.progress,
                            k = i.color,
                            A = {
                                height: "".concat(Math.max(N, 1.25), "%")
                            },
                            T = c.some((function (e) {
                                return !!e.label
                            })),
                            O = {
                                "--bar-color": k,
                                height: "calc(43.5rem + (".concat(c.length, "*20vh))")
                            },
                            S = null !== (t = null === (n = c.find((function (e) {
                                return !e.unlocked
                            }))) || void 0 === n ? void 0 : n.progress) && void 0 !== t ? t : i.progress;
                        return a.createElement(a.Fragment, null, a.createElement("div", {
                            className: "slide progress-indicator ".concat(yl.slide, " ").concat(g ? "visible" : "", " ").concat(T ? "with-milestone-labels" : "", " ").concat(null !== (r = null == s ? void 0 : s.campaignId) && void 0 !== r ? r : "", " without-title"),
                            ref: d,
                            style: O
                        }, a.createElement("div", {
                            className: "content ".concat(yl.content)
                        }, a.createElement("div", {
                            className: "logoWrapper ".concat(yl.logoWrapper)
                        }, a.createElement("div", {
                            className: "logo ".concat(yl.logo)
                        }), a.createElement("div", {
                            className: "shine ".concat(yl.shine)
                        })), a.createElement("div", {
                            className: "trackers ".concat(yl.trackers)
                        }, g && a.createElement("div", {
                            className: "tracker-wrapper"
                        }, a.createElement("div", {
                            className: "tracker ".concat(yl.tracker)
                        }, a.createElement("div", {
                            style: A,
                            className: "tracker-progress ".concat(yl["tracker-progress"], " ").concat(N > 99 ? "almost-complete" : "", " "),
                            ref: v
                        }, a.createElement("div", {
                            className: "tracker-shine ".concat(yl["tracker-shine"])
                        }))), c.map((function (e, t) {
                            var n = Math.max(e.progress, 5),
                                r = {
                                    bottom: "".concat(n, "%")
                                };
                            return a.createElement("span", {
                                key: t,
                                style: r,
                                className: "milestone-marker"
                            })
                        }))), a.createElement("div", {
                            className: "milestone-wrapper ".concat(yl["milestone-wrapper"], " milestones-").concat(c.length)
                        }, c.map((function (e, t) {
                            if (!e.image) return null;
                            var n = Math.max(e.progress, 5),
                                r = e.unlocked,
                                o = {
                                    bottom: "".concat(n, "%")
                                };
                            return a.createElement("div", {
                                style: o,
                                key: t,
                                onClick: function () {
                                    r && (window.location.href = "brawlstars-inbox://shop")
                                },
                                ref: e.progress === S ? h : null,
                                className: Ba()("milestone-img", yl["milestone-img"], {
                                    "milestone-achieved": r
                                }, {
                                    "milestone-unachieved": !r
                                })
                            }, a.createElement(lr, {
                                sources: e.image
                            }), !r && a.createElement("div", {
                                className: "milestone-locked"
                            }), r && a.createElement("div", {
                                className: "milestone-unlocked"
                            }))
                        }))), a.createElement("div", {
                            className: "milestone-label-wrapper ".concat(yl["milestone-label-wrapper"])
                        }, c.map((function (e, t) {
                            if (!e.label) return a.createElement("div", {
                                key: t
                            });
                            var n = Math.max(e.progress, 5),
                                r = e.unlocked,
                                o = {
                                    bottom: "".concat(n, "%")
                                };
                            return a.createElement("div", {
                                key: t,
                                style: o,
                                className: "milestone-label ".concat(yl["milestone-label"], " ").concat(r ? yl["milestone-reached"] : yl["milestone-unreached"], " ").concat(r ? "milestone-reached" : "milestone-unreached"),
                                title: e.label
                            }, e.label)
                        })))), a.createElement("div", {
                            ref: p
                        }))), a.createElement("div", {
                            className: "wrapper ".concat(yl.wrapper)
                        }, I.length ? a.createElement("div", {
                            className: "ctas ".concat(1 === I.length ? "single" : "multi", " ").concat(yl.ctas)
                        }, I.map((function (e, t) {
                            var n = e.label,
                                r = e.variant,
                                o = e.onClick;
                            return a.createElement(Ua, {
                                key: t,
                                onClick: o,
                                variant: r
                            }, a.createElement("span", {
                                className: "buttonTextWrapper"
                            }, n || a.createElement(vr.A, {
                                id: "globalText.langGo"
                            })))
                        }))) : null))
                    }),
                    Gl = function (e, t, n) {
                        var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                        return function (r) {
                            var o, l = r.id,
                                i = r.article,
                                c = r.type,
                                s = r.url,
                                u = r.label;
                            return "article" === c && "carouselEventPollEntry" === (null == i ? void 0 : i.section) ? n(null !== (o = null == i ? void 0 : i.id.toString()) && void 0 !== o ? o : "") : "article" === c && void 0 !== i ? t(null == i ? void 0 : i.id, a) : e(Zn, {
                                url: s,
                                id: l,
                                label: u
                            })
                        }
                    },
                    Hl = function (e) {
                        var t = e.type,
                            n = e.targeting;
                        switch (t) {
                            case "pollEntry":
                                return a.createElement(Tl, {
                                    slide: e
                                });
                            case "progressTrackerEntry":
                                return "plasma-wraith" === (null == n ? void 0 : n.campaignId) ? a.createElement(Ul, {
                                    slide: e
                                }) : a.createElement(Rl, {
                                    slide: e
                                });
                            default:
                                return a.createElement(bl, {
                                    slide: e
                                })
                        }
                    },
                    Yl = function (e) {
                        var t = e.links,
                            n = e.titleLabel,
                            r = void 0 === n ? "globalText.langFollowUs" : n,
                            o = e.showBanner,
                            l = void 0 !== o && o,
                            i = ra();
                        return t ? 0 === Object.keys(t).length ? null : a.createElement("div", {
                            className: "contentful-social-links ".concat("Xza1A9MvHMprRAIcCsoA")
                        }, a.createElement("div", {
                            className: "title ".concat("KYWUuvZRYKjy8g_19LET")
                        }, a.createElement(vr.A, {
                            id: r
                        })), a.createElement("div", {
                            className: "contentful-social-links-wrapper ".concat("gl3GSi1b6nbhJTKHR8qB")
                        }, t.map((function (e) {
                            var t = e.linkUrl,
                                n = e.socialLinkImage,
                                r = a.createElement(la, null, a.createElement("div", {
                                    className: "contentful-social-link ".concat("QVGn3Ylv_54FXqdiq4bd")
                                }, a.createElement(lr, {
                                    sources: n
                                })));
                            return a.createElement("div", {
                                className: "contentful-press ".concat("RMnzvRzVeW6jfNA3oF1d"),
                                key: "link_".concat(null != t ? t : n.small.path),
                                onClick: function () {
                                    return i(Zn, {
                                        url: null != t ? t : ""
                                    })
                                }
                            }, r)
                        })), l && a.createElement("div", {
                            className: "banner ".concat("blJVZsLhFaW6Dqo_qhYg")
                        }))) : null
                    };

                function Wl(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function Kl(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Wl(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wl(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var Jl = "fullscreen-entries",
                    ql = {
                        seenEntryIds: [],
                        availableEntryIds: [],
                        activeEntryId: null
                    },
                    Zl = (0, a.createContext)({
                        state: ql,
                        actions: {
                            openFullscreenEntry: function () {
                                return null
                            },
                            closeFullscreenEntry: function () {
                                return null
                            }
                        }
                    }),
                    Ql = function (e, t) {
                        switch (t.type) {
                            case "OPEN_FULLSCREEN_ENTRY":
                                return Kl(Kl({}, e), {}, {
                                    activeEntryId: t.id
                                });
                            case "SET_AVAILABLE_ENTRY_IDS":
                                var n, a, r = t.ids.find((function (t) {
                                        return !e.seenEntryIds.includes(t)
                                    })),
                                    o = null !== (n = null !== (a = t.forcedEntryId) && void 0 !== a ? a : r) && void 0 !== n ? n : null;
                                return Kl(Kl({}, e), {}, {
                                    activeEntryId: o,
                                    availableEntryIds: t.ids
                                });
                            case "CLOSE_FULLSCREEN_ENTRY":
                                var l = (0, E.A)(new Set([].concat((0, E.A)(e.seenEntryIds), [t.id])));
                                return ei(l), Kl(Kl({}, e), {}, {
                                    seenEntryIds: l,
                                    activeEntryId: null
                                });
                            default:
                                throw new Error("FullsceenEntryContext: Unhandled action type")
                        }
                    },
                    Xl = function (e) {
                        var t, n = e.children,
                            r = e.availableEntryIds,
                            o = ql,
                            l = $l(),
                            i = r.find((function (e) {
                                return !l.includes(e)
                            })),
                            c = (0, il.ok)(),
                            s = (0, b.A)(c, 1)[0].get("openFullscreenId"),
                            u = null !== (t = null != s ? s : i) && void 0 !== t ? t : null,
                            m = Kl(Kl({}, o), {}, {
                                activeEntryId: u,
                                seenEntryIds: l,
                                availableEntryIds: r
                            }),
                            d = (0, a.useReducer)(Ql, m),
                            g = (0, b.A)(d, 2),
                            p = g[0],
                            h = g[1];
                        return (0, a.useEffect)((function () {
                            h({
                                type: "SET_AVAILABLE_ENTRY_IDS",
                                ids: r,
                                forcedEntryId: s
                            })
                        }), [r]), a.createElement(Zl.Provider, {
                            value: {
                                state: p,
                                actions: {
                                    openFullscreenEntry: function (e) {
                                        h({
                                            type: "OPEN_FULLSCREEN_ENTRY",
                                            id: e
                                        })
                                    },
                                    closeFullscreenEntry: function (e) {
                                        h({
                                            type: "CLOSE_FULLSCREEN_ENTRY",
                                            id: e
                                        })
                                    }
                                }
                            }
                        }, n)
                    },
                    $l = function () {
                        try {
                            var e, t, n = JSON.parse(null !== (e = localStorage.getItem(Jl)) && void 0 !== e ? e : "");
                            return null !== (t = null == n ? void 0 : n.seenEntryIds) && void 0 !== t ? t : []
                        } catch (e) {
                            return localStorage.removeItem(Jl), []
                        }
                    },
                    ei = function (e) {
                        localStorage.setItem(Jl, JSON.stringify({
                            seenEntryIds: e
                        }))
                    },
                    ti = ["entries", "tab"];

                function ni(e) {
                    var t = window.innerWidth < window.innerHeight,
                        n = (0, a.useState)(!1),
                        r = (0, b.A)(n, 2),
                        o = r[0],
                        l = r[1],
                        i = t ? {
                            maxHeight: o ? "80vh" : "30vh"
                        } : {};
                    return a.createElement("div", {
                        className: "ddiV8ekFpX1JirR3ANgQ"
                    }, e.backgroundMedia && a.createElement(lr, {
                        sources: e.backgroundMedia
                    }), e.body && a.createElement("div", {
                        className: "".concat("dvjBlnf91szqtQUcjrmr", " prompt"),
                        onClick: function (e) {
                            "A" !== e.target.tagName && (o || t && l(!o))
                        },
                        style: i
                    }, a.createElement(dr, {
                        html: e.body
                    })))
                }

                function ai(e) {
                    var t = e.entry,
                        n = e.closeEntry,
                        r = e.locale,
                        o = ra(),
                        l = ma(),
                        i = t.readMoreButton;
                    return a.createElement("div", {
                        className: "".concat("BDJ8H5lwHEzlVCG1aDwV", " fullscreen-carousel")
                    }, a.createElement("div", {
                        className: "".concat("jEMeUVG_nMVW5wjON86A", " buttons")
                    }, i && a.createElement(Ua, {
                        variant: i.variant,
                        onClick: function () {
                            return function (e) {
                                if ("article" === e.urlType) {
                                    var a = "esportFullscreenCarousel" === t.type ? "esport" : "news";
                                    return l(e.url.id, "", a), void n(t.id)
                                }
                                "bridgeFunction" !== e.urlType ? (o(Zn, {
                                    url: e.url,
                                    id: e.id,
                                    label: e.label
                                }), n(t.id)) : o(ta, {
                                    functionName: e.functionName,
                                    functionArgs: e.functionArgs
                                })
                            }(i)
                        }
                    }, a.createElement("span", {
                        className: "buttonTextWrapper"
                    }, i.label)), a.createElement("div", {
                        "data-testid": "CLOSE_FULLSCREEN_ENTRY"
                    }, a.createElement(Ua, {
                        onClick: function () {
                            n(t.id)
                        }
                    }, a.createElement("span", {
                        className: "buttonTextWrapper"
                    }, a.createElement(vr.A, {
                        id: "globalText.toNews"
                    }))))), a.createElement(ul, {
                        locale: r,
                        Slide: ni,
                        slides: t.slides
                    }))
                }
                var ri = function (e) {
                    var t = e.entries,
                        n = e.tab,
                        r = (0, Lr.A)(e, ti),
                        o = a.useContext(Zl),
                        l = o.state,
                        i = o.actions,
                        c = M().trackImpression,
                        s = (0, d.g)(),
                        u = null != s && s.lang ? {
                            lang: s.lang
                        } : {
                            lang: "en"
                        },
                        m = (0, a.useState)(!1),
                        g = (0, b.A)(m, 2),
                        p = g[0],
                        h = g[1],
                        v = t.find((function (e) {
                            return e.id === l.activeEntryId
                        }));
                    (0, a.useEffect)((function () {
                        v ? setTimeout((function () {
                            document.body.style.overflow = "hidden"
                        }), 50) : document.body.style.overflow = "initial"
                    }), [v]), (0, a.useEffect)((function () {
                        l.activeEntryId && c(l.activeEntryId, "Fullscreen Entry - ".concat(l.activeEntryId))
                    }), [l.activeEntryId]);
                    var f = document.getElementById("modal-root");
                    if (!f) return null;
                    if (p) return null;
                    if (!v) return null;
                    var y = a.createElement("div", (0, Ea.A)({
                        className: "".concat("JtyChKdMRXJKNDq2o1sT", " fullscreen-entry ").concat(null != n ? n : "")
                    }, r), a.createElement(ai, {
                        closeEntry: function (e) {
                            i.closeFullscreenEntry(e), h(!0)
                        },
                        entry: v,
                        locale: u
                    }));
                    return wl.createPortal(y, f)
                };

                function oi(e) {
                    var t = e.entries.map((function (e) {
                        return e.id
                    }));
                    return a.createElement(Xl, {
                        availableEntryIds: t
                    }, a.createElement(ri, {
                        tab: e.tab,
                        entries: e.entries
                    }), e.children)
                }

                function li(e) {
                    return !e.showInNewsFeed || "SHOW_IN_NEWS_FEED" === e.showInNewsFeed
                }
                var ii = {
                        news: "Yr1ItAm_K8yFex9z7y8U"
                    },
                    ci = function () {
                        return a.createElement($a, {
                            namespace: "news"
                        }, (function (e) {
                            var t = e.data,
                                n = e.locale,
                                r = Jn().gameParams;
                            return a.createElement(oi, {
                                entries: t.fullscreenEntries.filter((function (e) {
                                    return ha(e, r)
                                })),
                                tab: "news"
                            }, a.createElement("div", {
                                className: "news ".concat(ii.news)
                            }, a.createElement(Yo, null, t.events ? a.createElement("div", {
                                className: "events ".concat(ii.events)
                            }, a.createElement(ul, {
                                locale: n,
                                Slide: Hl,
                                slides: t.events.filter((function (e) {
                                    return ha(e, r)
                                }))
                            })) : null, t.articles ? a.createElement("div", {
                                className: "articles ".concat(ii.articles)
                            }, a.createElement(qo, {
                                perPage: 5,
                                Item: rl,
                                items: t.articles.filter((function (e) {
                                    return li(t = e) && ha(t, r);
                                    var t
                                })),
                                footer: a.createElement(Yl, {
                                    links: t.socialLinks
                                })
                            })) : null)))
                        }))
                    },
                    si = function () {
                        var e = (0, d.zy)().pathname,
                            t = M().trackPageView;
                        return (0, a.useEffect)((function () {
                            t("News", e), window.history.pushState({
                                home: !0
                            }, void 0)
                        }), []), a.createElement(ci, null)
                    },
                    ui = {
                        "incoming-live-event-banner": "rI04m4vKrfndvRiaHI7h",
                        "promotion-name": "HYqrJ47cxQoRzRJ7fHUX",
                        "banner-middle": "M1YelVBfEwgzyFr1etUc",
                        divider: "KlDZc2Q3dAOZo881OM6u",
                        subscribe: "DKaQBPeQu9nhMwPeozqI",
                        "banner-pagination": "feinRk_r0yCm5RYjbaru",
                        "banner-pagination-nav-item": "QJfuhXFBa4ywYT3NUHvY",
                        "banner-pagination-nav-icon": "AxJeBBxVvSwn4gahLjAt",
                        disabled: "I8jhsCKj09F1PK_UFLKE",
                        left: "u4BA2WOLHXIkYaJidvX9",
                        right: "Mb6OD_YcTmGr0d0fWGYb"
                    },
                    mi = function (e) {
                        var t, n, r, o, l, i, c = e.slides,
                            s = e.currentTime,
                            u = ra(),
                            m = ma(),
                            d = (0, a.useState)(0),
                            g = (0, b.A)(d, 2),
                            p = g[0],
                            h = g[1],
                            v = c[p],
                            f = new Date(null !== (t = null == v ? void 0 : v.livestreamStartTime) && void 0 !== t ? t : Date.now()).getTime() - s.getTime(),
                            y = 0 === p,
                            E = c.length - 1 === p,
                            w = 1 === c.length;
                        return a.createElement(a.Fragment, null, a.createElement("div", {
                            className: "incoming-live-event-banner ".concat(ui["incoming-live-event-banner"])
                        }, a.createElement("div", {
                            className: ui["banner-pagination"],
                            style: {
                                opacity: w ? "0" : "1"
                            }
                        }, a.createElement("div", {
                            className: ui["banner-pagination-nav-item"],
                            onClick: function () {
                                y || h(p - 1)
                            }
                        }, a.createElement("div", {
                            className: " ".concat(y ? ui.disabled : "", " ").concat(ui["banner-pagination-nav-icon"], " ").concat(ui.left)
                        })), a.createElement("div", {
                            className: ui["banner-pagination-nav-item"],
                            onClick: function () {
                                E || h(p + 1)
                            }
                        }, a.createElement("div", {
                            className: " ".concat(E ? ui.disabled : "", " ").concat(ui["banner-pagination-nav-icon"], " ").concat(ui.right)
                        }))), a.createElement("div", {
                            className: ui["banner-middle"]
                        }, (null == v ? void 0 : v.eventPromotionLogo) && a.createElement(lr, {
                            sources: null == v ? void 0 : v.eventPromotionLogo
                        }), a.createElement("h3", {
                            className: ui["promotion-name"]
                        }, null == v ? void 0 : v.eventPromotionName), a.createElement("span", {
                            className: ui.divider
                        }), a.createElement("span", {
                            className: ui.time
                        }, (r = Math.floor(f / 1e3), o = Math.floor(r / 60 % 60), l = Math.floor(r / 3600 % 24), i = Math.floor(r / 86400), 0 === o && 0 === l && 0 === i ? "1M" : " ".concat(i <= 0 ? "" : "".concat(i, " D : "), " ").concat(l <= 0 ? "0H" : "".concat(l, " H"), " ").concat(i <= 0 ? ": ".concat(o, " M") : "")))), a.createElement("div", {
                            className: ui.subscribe,
                            onClick: function () {
                                var e;
                                (e = null == v ? void 0 : v.subscribeButton) && ("article" !== e.urlType ? "bridgeFunction" !== e.urlType ? u(Zn, {
                                    url: e.url,
                                    id: e.id,
                                    label: e.label
                                }) : u(ta, {
                                    functionName: e.functionName,
                                    functionArgs: e.functionArgs
                                }) : m(e.url.id, "", "esport"))
                            }
                        }, null == v || null === (n = v.subscribeButton) || void 0 === n ? void 0 : n.label)))
                    },
                    di = function () {
                        var e = a.useState(new Date),
                            t = (0, b.A)(e, 2),
                            n = t[0],
                            r = t[1];
                        return (0, a.useEffect)((function () {
                            var e = setInterval((function () {
                                r(new Date)
                            }), 1e3);
                            return function () {
                                return clearInterval(e)
                            }
                        }), []), n
                    },
                    gi = function (e) {
                        var t = di(),
                            n = e.view;
                        if (!e.slides || 0 === e.slides.length) return null;
                        var r = e.slides.filter((function (e) {
                            var n;
                            return "liveEntry" !== e.type || new Date(null !== (n = e.livestreamEndTime) && void 0 !== n ? n : Date.now()) > t
                        })).sort((function (e) {
                            return "eventEntry" === e.type ? 1 : "liveEntry" === e.type && t >= new Date(null !== (n = e.livestreamStartTime) && void 0 !== n ? n : t) && t <= new Date(null !== (a = e.livestreamEndTime) && void 0 !== a ? a : t) ? -1 : 0;
                            var n, a
                        }));
                        return a.createElement(n, (0, Ea.A)({}, e, {
                            slides: r
                        }))
                    },
                    pi = "tEcWINC4FGEqCFKo67p_",
                    hi = "gmdBwnyU01jIlLRwDfVJ",
                    vi = "rFHDgBFxQFiCzFoQlLwB",
                    fi = "hbZjdd85ycnPkVWo2a0B",
                    yi = "P6zxYYRk1CEVxMmF3b0h",
                    Ei = "LvLkObsiG1oQhy4kfX61",
                    bi = "FVqrL7E5vyQyrgL6Bfw8",
                    wi = "jixHwoB7MG15XK5nMOI2",
                    Ii = function (e) {
                        switch (e.type) {
                            case "liveEntry":
                                return a.createElement(ki, e);
                            case "eventEntry":
                                return a.createElement(Ni, e)
                        }
                    },
                    Ni = function (e) {
                        var t, n = ra(),
                            r = ma(),
                            o = (null !== (t = e.ctaButtons) && void 0 !== t ? t : []).filter((function (e) {
                                return Boolean(e)
                            }));
                        return a.createElement("div", {
                            className: "".concat(pi)
                        }, a.createElement("div", {
                            className: fi
                        }, a.createElement("div", {
                            className: Ei
                        }, e.carouselImage && a.createElement(lr, {
                            sources: e.carouselImage
                        })), a.createElement("div", {
                            className: bi
                        }, a.createElement("div", {
                            className: wi
                        }, a.createElement("h2", {
                            className: hi
                        }, e.title), e.subtitle && a.createElement("h3", {
                            className: vi
                        }, e.subtitle)), a.createElement("div", {
                            className: yi
                        }, o.map((function (e, t) {
                            return a.createElement(Ua, (0, Ea.A)({
                                onClick: function () {
                                    return function (e) {
                                        "article" !== e.urlType ? "bridgeFunction" !== e.urlType ? n(Zn, {
                                            url: e.url,
                                            id: e.id,
                                            label: e.label
                                        }) : n(ta, {
                                            functionName: e.functionName,
                                            functionArgs: e.functionArgs
                                        }) : r(e.url.id, "", "esport")
                                    }(e)
                                },
                                key: t
                            }, e, {
                                variant: e.variant
                            }), a.createElement("span", {
                                className: "r_P1kg2jlhgOUVVmqlqp"
                            }, e.label))
                        }))))))
                    },
                    ki = function (e) {
                        var t, n, r = new Date(null !== (t = e.livestreamStartTime) && void 0 !== t ? t : Date.now()),
                            o = new Date(null !== (n = e.livestreamEndTime) && void 0 !== n ? n : Date.now()),
                            l = di(),
                            i = ra(),
                            c = ma(),
                            s = l >= r && l <= o,
                            u = (s ? [e.watchLiveButton] : [e.readMoreButton, e.subscribeButton]).filter((function (e) {
                                return Boolean(e)
                            }));
                        return a.createElement("div", {
                            className: "".concat(pi, " ").concat(s ? "SYg_2hcEpNAOtLZYaNkX" : "")
                        }, a.createElement("div", {
                            className: fi
                        }, a.createElement("div", {
                            className: Ei
                        }, e.carouselImage && a.createElement(lr, {
                            sources: e.carouselImage
                        })), a.createElement("div", {
                            className: bi
                        }, s ? a.createElement("div", {
                            className: "jopG7IIVf2GWFkH92wtj"
                        }, a.createElement(vr.A, {
                            id: "globalText.esportLive"
                        })) : null, a.createElement("div", {
                            className: wi
                        }, a.createElement("h2", {
                            className: hi
                        }, e.title), e.subtitle && a.createElement("h3", {
                            className: vi
                        }, e.subtitle)), a.createElement("div", {
                            className: yi
                        }, u.map((function (e, t) {
                            return a.createElement(Ua, (0, Ea.A)({
                                onClick: function () {
                                    return function (e) {
                                        "article" !== e.urlType ? "bridgeFunction" !== e.urlType ? i(Zn, {
                                            url: e.url,
                                            id: e.id,
                                            label: e.label
                                        }) : i(ta, {
                                            functionName: e.functionName,
                                            functionArgs: e.functionArgs
                                        }) : c(e.url.id, "", "esport")
                                    }(e)
                                },
                                key: t
                            }, e, {
                                variant: e.variant
                            }), e.label)
                        }))))))
                    },
                    Ai = function (e) {
                        var t = e.locale,
                            n = e.slides;
                        return a.createElement("div", {
                            className: "esport-carousel ".concat("fquAo5bqK_UIHPcnJPkC")
                        }, a.createElement(ul, {
                            locale: t,
                            Slide: Ii,
                            slides: n
                        }))
                    },
                    Ti = function (e) {
                        var t = di(),
                            n = e.slides,
                            r = e.view;
                        if (!n.length) return null;
                        var o = n.filter((function (e) {
                            var n;
                            return "liveEntry" === e.type && new Date(null !== (n = e.livestreamStartTime) && void 0 !== n ? n : Date.now()) > t
                        })).filter((function (e) {
                            var n;
                            return new Date(null !== (n = e.livestreamEndTime) && void 0 !== n ? n : Date.now()) > t
                        }));
                        return o.length ? a.createElement(r, {
                            slides: o,
                            currentTime: t
                        }) : null
                    };

                function Oi(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function Si(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Oi(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oi(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var Pi = function (e) {
                        var t = e.filterArticles,
                            n = M().trackPageView,
                            r = (0, d.zy)().pathname;
                        return a.useEffect((function () {
                            n("Esport", r), window.history.pushState({
                                home: !0
                            }, "")
                        }), []), a.createElement($a, {
                            namespace: "esport"
                        }, (function (e) {
                            var n = e.data,
                                r = n.articles,
                                o = n.carouselItems,
                                l = n.socialLinks,
                                i = n.fullscreenEntries,
                                c = e.locale,
                                s = t(r),
                                u = o.map((function (e) {
                                    var t, n = function (e) {
                                        if (!e) return !1;
                                        if ("url" === e.type) return !0;
                                        if ("bridgeFunction" === e.type) return !0;
                                        var t = e.url.id;
                                        return !!s.find((function (e) {
                                            return e.id === t
                                        }))
                                    };
                                    if ("liveEntry" === e.type) return n(e.readMoreButton) ? e : Si(Si({}, e), {}, {
                                        readMoreButton: void 0
                                    });
                                    var a = null === (t = e.ctaButtons) || void 0 === t ? void 0 : t.filter(n);
                                    return Si(Si({}, e), {}, {
                                        ctaButtons: a
                                    })
                                })),
                                m = s.filter((function (e) {
                                    return li(e)
                                }));
                            return a.createElement(oi, {
                                entries: i,
                                tab: "esport"
                            }, a.createElement("div", {
                                className: "esport ".concat("fiv_eEI2We4m3yMfNH6S")
                            }, a.createElement(Yo, null, a.createElement("div", {
                                className: "articles ".concat("yd8GWAnrwU0M0qwoOKvy")
                            }, a.createElement(qo, {
                                header: a.createElement(a.Fragment, null, a.createElement(Ti, {
                                    view: mi,
                                    slides: u
                                }), a.createElement(gi, {
                                    view: Ai,
                                    locale: c,
                                    slides: u
                                })),
                                Item: rl,
                                items: m,
                                columns: 2,
                                perPage: 4,
                                footer: a.createElement(Yl, {
                                    links: l
                                })
                            })))))
                        }))
                    },
                    ji = function (e, t) {
                        return function (n) {
                            var a = n.articles,
                                r = n.globals,
                                o = a.filter(fa),
                                l = ga(o, e),
                                i = o[l],
                                c = o[l - 1],
                                s = l > -1 && o[l + 1],
                                u = t ? void 0 : {
                                    disabled: !s,
                                    label: r["globalText.langOlder"],
                                    labelComponentProps: {
                                        data: s
                                    }
                                },
                                m = t ? void 0 : {
                                    next: !0,
                                    disabled: !c,
                                    label: r["globalText.langNewer"],
                                    labelComponentProps: {
                                        data: c
                                    }
                                };
                            return {
                                article: i,
                                Link: da,
                                prevLinkProps: u,
                                nextLinkProps: m
                            }
                        }
                    };

                function Ci(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function Fi(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Ci(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ci(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var zi, xi, Bi = function (e) {
                        var t = e.id,
                            n = e.getProps,
                            r = e.track;
                        return a.createElement("div", {
                            className: "article ".concat("uo3aAEpy_eJqlP3wJWdD")
                        }, a.createElement($a, {
                            namespace: "esport",
                            id: t
                        }, (function (e) {
                            var t = e.data,
                                o = t.articles,
                                l = t.globals,
                                i = e.userSettings,
                                c = n({
                                    articles: o,
                                    userSettings: i,
                                    globals: l
                                }),
                                s = c.article,
                                u = c.Link,
                                m = c.prevLinkProps,
                                d = c.nextLinkProps;
                            return r(s), a.createElement(Vo, {
                                article: Fi(Fi({}, s), {}, {
                                    categories: []
                                }),
                                Link: u,
                                nextLinkProps: d,
                                prevLinkProps: m
                            })
                        })))
                    },
                    Li = function () {
                        var e = (0, d.zy)().pathname,
                            t = M().trackPageView,
                            n = (0, d.g)(),
                            r = n.id,
                            o = n.variant,
                            l = n.slug,
                            i = o && "isolated" === o.toLowerCase() || l && "isolated" === l.toLowerCase(),
                            c = {
                                getProps: ji(r, i),
                                id: r,
                                track: function (n) {
                                    var a;
                                    t(null !== (a = null == n ? void 0 : n.title) && void 0 !== a ? a : "", e)
                                }
                            };
                        return a.createElement(Bi, c)
                    },
                    Di = function () {
                        return a.createElement(d.BV, null, a.createElement(d.qh, {
                            path: "/:id/:slug/:variant",
                            element: a.createElement(Li, null)
                        }), a.createElement(d.qh, {
                            path: "/:id/:slug",
                            element: a.createElement(Li, null)
                        }), a.createElement(d.qh, {
                            path: "/:id",
                            element: a.createElement(Li, null)
                        }), a.createElement(d.qh, {
                            path: "/",
                            element: a.createElement(Pi, {
                                filterArticles: Ho
                            })
                        }))
                    },
                    _i = "brawlstars",
                    Mi = {
                        available: (null !== (zi = null === (xi = vn[_i]) || void 0 === xi ? void 0 : xi.enabledLocales) && void 0 !== zi ? zi : [Ve]).filter((function (e) {
                            return "zh-hans" !== e
                        })),
                        locales: {
                            zh: {
                                fonts: {
                                    primaryFont: "Lantinghei SC, Hiragino Sans GB, SimHei, Arial, sans-serif",
                                    secondaryFont: "Lantinghei SC, Hiragino Sans GB, SimHei, Arial, sans-serif",
                                    titleBoldValue: "bold"
                                }
                            },
                            en: {
                                fonts: {
                                    primaryFont: "lilita",
                                    secondaryFont: "nunito_semibold"
                                }
                            },
                            fr: {
                                fonts: {
                                    primaryFont: "lilita",
                                    secondaryFont: "nunito_semibold"
                                }
                            },
                            de: {
                                fonts: {
                                    primaryFont: "lilita",
                                    secondaryFont: "nunito_semibold"
                                }
                            },
                            it: {
                                fonts: {
                                    primaryFont: "lilita",
                                    secondaryFont: "nunito_semibold"
                                }
                            },
                            ko: {
                                fonts: {
                                    primaryFont: "KoBrawlGothicBlack",
                                    secondaryFont: "KoBrawlGothicBold"
                                }
                            },
                            ja: {
                                fonts: {
                                    secondaryFont: "Arial, sans-serif",
                                    primaryFont: '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "ＭＳ ゴシック", "MS Gothic", Arial, sans-serif',
                                    titleBoldValue: "bold"
                                }
                            },
                            pl: {
                                fonts: {
                                    primaryFont: '"Pusia Bold", Arial, sans-serif'
                                }
                            },
                            ru: {
                                fonts: {
                                    primaryFont: '"Pusia Bold", Arial, sans-serif'
                                }
                            },
                            es: {
                                fonts: {
                                    primaryFont: "lilita",
                                    secondaryFont: "nunito_semibold"
                                }
                            },
                            tr: {
                                fonts: {
                                    primaryFont: '"Pusia Bold", Arial, sans-serif',
                                    secondaryFont: "nunito_semibold"
                                }
                            }
                        }
                    };

                function Vi() {
                    Vi = function (e, t) {
                        return new n(e, void 0, t)
                    };
                    var e = RegExp.prototype,
                        t = new WeakMap;

                    function n(e, a, r) {
                        var o = RegExp(e, a);
                        return t.set(o, r || t.get(e)), (0, I.A)(o, n.prototype)
                    }

                    function a(e, n) {
                        var a = t.get(n);
                        return Object.keys(a).reduce((function (t, n) {
                            var r = a[n];
                            if ("number" == typeof r) t[n] = e[r];
                            else {
                                for (var o = 0; void 0 === e[r[o]] && o + 1 < r.length;) o++;
                                t[n] = e[r[o]]
                            }
                            return t
                        }), Object.create(null))
                    }
                    return (0, w.A)(n, RegExp), n.prototype.exec = function (t) {
                        var n = e.exec.call(this, t);
                        if (n) {
                            n.groups = a(n, this);
                            var r = n.indices;
                            r && (r.groups = a(r, this))
                        }
                        return n
                    }, n.prototype[Symbol.replace] = function (n, r) {
                        if ("string" == typeof r) {
                            var o = t.get(this);
                            return e[Symbol.replace].call(this, n, r.replace(/\$<([^>]+)(>|$)/g, (function (e, t, n) {
                                if ("" === n) return e;
                                var a = o[t];
                                return Array.isArray(a) ? "$" + a.join("$") : "number" == typeof a ? "$" + a : ""
                            })))
                        }
                        if ("function" == typeof r) {
                            var l = this;
                            return e[Symbol.replace].call(this, n, (function () {
                                var e = arguments;
                                return "object" != (0, y.A)(e[e.length - 1]) && (e = [].slice.call(e)).push(a(e, l)), r.apply(this, e)
                            }))
                        }
                        return e[Symbol.replace].call(this, n, r)
                    }, Vi.apply(this, arguments)
                }

                function Ri(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function Ui(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Ri(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ri(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                n(70104);
                var Gi = An.brawlstars,
                    Hi = function (e) {
                        return function (t) {
                            var n = e.replace("-inbox", "");
                            if (0 === t.url.indexOf(e)) return {
                                type: qn,
                                payload: t
                            };
                            if (0 === t.url.indexOf(n)) return {
                                type: qn,
                                payload: Ui(Ui({}, t), {}, {
                                    url: t.url.replace("://", "-inbox://")
                                })
                            };
                            if (t.url.indexOf(location.origin) > -1) {
                                var a = t.url.indexOf("/news/");
                                if (a > -1) {
                                    var r, o, l = Vi(/#\/(.*)\/news/, {
                                            lang: 1
                                        }).exec(t.url),
                                        i = null !== (r = null == l || null === (o = l.groups) || void 0 === o ? void 0 : o.lang) && void 0 !== r ? r : "en",
                                        c = t.url.substr(a + 5 + 1).split("/"),
                                        s = (0, b.A)(c, 2),
                                        u = s[0],
                                        m = s[1];
                                    return {
                                        type: Qn,
                                        payload: {
                                            lang: i,
                                            id: u,
                                            slug: m
                                        }
                                    }
                                }
                            }
                            return {
                                type: Zn,
                                payload: t
                            }
                        }
                    }(Gi),
                    Yi = function (e, t) {
                        return function (n) {
                            return function (a, r) {
                                var o, l;
                                if (a === Zn) {
                                    var i = Hi(r);
                                    a = i.type, r = i.payload
                                }
                                switch (a) {
                                    case "OPEN_HOME":
                                        return n("/");
                                    case Qn:
                                        return n("/".concat(r.lang, "/news/").concat(r.id, "/").concat(ua()(null !== (o = r.slug) && void 0 !== o ? o : "", {
                                            strict: !0,
                                            lower: !0
                                        })));
                                    case Xn:
                                        return n("/".concat(r.lang, "/esport/").concat(r.id, "/").concat(ua()(null !== (l = r.slug) && void 0 !== l ? l : "", {
                                            strict: !0,
                                            lower: !0
                                        })));
                                    case Zn:
                                        return t({
                                            url: r.url,
                                            id: r.id,
                                            label: r.label
                                        }), e("".concat(Gi, "://OpenWeb?url=").concat(encodeURIComponent(encodeURIComponent(r.url))));
                                    case $n:
                                        return e("".concat(Gi, "://playSound?name=").concat(r));
                                    case "AUDIO_PAUSE":
                                        return e("".concat(Gi, "://StopMusic"));
                                    case "AUDIO_RESUME":
                                        return e("".concat(Gi, "://ResumeMusic"));
                                    case ea:
                                        return e("".concat(Gi, "://backButton?state=").concat(r ? "show" : "hide"));
                                    case qn:
                                        return t({
                                            url: r.url,
                                            id: r.id,
                                            label: r.label,
                                            additionalInformation: r.additionalInformation
                                        }), e(r.url);
                                    case "REFRESH_JWT":
                                        return e("".concat(Gi, "://tokenExpired"));
                                    case ta:
                                        return Rn().then((function (e) {
                                            return e[r.functionName].apply(e, (0, E.A)(r.functionArgs))
                                        }));
                                    default:
                                        return console.error('Command not recognized "'.concat(a, '"'))
                                }
                            }
                        }
                    },
                    Wi = function (e, t) {
                        return {
                            path: e,
                            element: t
                        }
                    };

                function Ki(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function Ji(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Ki(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ki(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var qi = function (e, t) {
                    return t.type === qa ? function (e, t) {
                        var n = t.type,
                            a = t.payload,
                            r = a.localizedNamespace,
                            l = a.data,
                            i = function (e, t) {
                                return function (n) {
                                    var a = t.settings,
                                        r = a.game;
                                    return Ji(Ji({}, t), {}, {
                                        settings: Ji(Ji({}, a), {}, {
                                            game: Ji(Ji({}, r), {}, (0, o.A)({}, e, n))
                                        })
                                    })
                                }
                            }(r, e);
                        return n === qa ? i(l) : e
                    }(e, t) : e
                };

                function Zi(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function Qi(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Zi(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zi(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var Xi = function (e) {
                        return function (t) {
                            var n = t.localization;
                            return a.createElement(Ia, {
                                value: n
                            }, a.createElement(e, t))
                        }
                    }(function (e) {
                        return function (t) {
                            var n = s.oW(d.BV),
                                r = t.routes.reduce((function (e, t) {
                                    return [].concat((0, E.A)(e), [Qi(Qi({}, t), {}, {
                                        path: "/:lang".concat(t.path)
                                    })])
                                }), (0, E.A)(t.routes));
                            return a.createElement(a.Suspense, null, a.createElement(il.I9, null, a.createElement(e, t, a.createElement(n, null, r.map((function (e) {
                                return a.createElement(d.qh, {
                                    key: e.path,
                                    path: e.path,
                                    element: a.createElement(e.element, null)
                                })
                            }))))))
                        }
                    }(function (e) {
                        var t = ba.Provider;
                        return function (n) {
                            var r = (0, a.useReducer)(qi, {
                                    settings: {
                                        game: {}
                                    },
                                    video: {}
                                }),
                                o = (0, b.A)(r, 2),
                                l = o[0],
                                i = o[1];
                            return a.createElement(t, {
                                value: {
                                    state: l,
                                    dispatch: i
                                }
                            }, a.createElement(e, n))
                        }
                    }(function (e) {
                        return function (t) {
                            var n = t.commander,
                                r = (0, d.Zp)(),
                                o = function (e) {
                                    var t = [];
                                    return setInterval((function () {
                                            if (t.length) {
                                                var n = t.shift(),
                                                    a = n.type,
                                                    r = n.payload;
                                                e(a, r)
                                            }
                                        }), 0),
                                        function (e, n) {
                                            t.push({
                                                type: e,
                                                payload: n
                                            })
                                        }
                                }(n((function (e) {
                                    return r(e)
                                })));
                            return a.createElement(aa, {
                                value: o
                            }, a.createElement(e, t))
                        }
                    }(function (e) {
                        return function (t) {
                            return a.createElement(Ka, {
                                value: (0, a.useState)()
                            }, a.createElement(e, t))
                        }
                    }(function (e) {
                        return function (t) {
                            return a.createElement(io, {
                                initialState: co()
                            }, a.createElement(e, t))
                        }
                    }(function (e) {
                        return function (t) {
                            return a.createElement(_l, {
                                initialState: Vl()
                            }, a.createElement(e, t))
                        }
                    }(function (e) {
                        return function (t) {
                            return a.createElement(bo, {
                                initialState: go(go({}, fo), {}, {
                                    voteCache: No()
                                })
                            }, a.createElement(e, t))
                        }
                    }((function (e) {
                        var t = e.children,
                            n = e.fixedFontSize,
                            r = (0, d.zy)(),
                            o = ra();
                        return function (e) {
                            var t = vn.brawlstars.referenceWidth;
                            (0, a.useEffect)((function () {
                                var n = function (e, t) {
                                    return function () {
                                        if (t) document.documentElement.style.fontSize = t;
                                        else {
                                            var n = Math.round(16 / e * window.innerWidth);
                                            document.documentElement.style.fontSize = "".concat(n, "px")
                                        }
                                    }
                                }(t, e);
                                setTimeout(n, 0), window.addEventListener("resize", n);
                                var a = setInterval((function () {
                                    n()
                                }), 250);
                                return function () {
                                    clearTimeout(a), window.removeEventListener("resize", n)
                                }
                            }), [])
                        }(n), (0, a.useEffect)((function () {
                            ! function () {
                                for (var e = navigator.userAgent, t = null, n = null, a = 0, r = [{
                                        name: "chrome",
                                        regex: /Chrome\/(\d+)\./
                                    }, {
                                        name: "safari",
                                        regex: /Version\/(\d+)\.\d+.*Safari/
                                    }, {
                                        name: "safari",
                                        regex: /iPhone OS (\d+)_/
                                    }]; a < r.length; a++) {
                                    var o = r[a],
                                        l = o.name,
                                        i = o.regex,
                                        c = e.match(i);
                                    if (c) {
                                        var s;
                                        t = l, n = null !== (s = c[1]) && void 0 !== s ? s : null;
                                        break
                                    }
                                }
                                t && n && document.body.classList.add("".concat(t, "-").concat(n))
                            }(), (0, V.A)(U().mark((function e() {
                                var t, n;
                                return U().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Rn();
                                        case 2:
                                            t = e.sent, null == (n = t.show) || n();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }), []), (0, a.useEffect)((function () {
                            var e = window.history.state,
                                t = e && e.home;
                            o(ea, !t)
                        }), [r]), a.Children.only(t)
                    }))))))))),
                    $i = Xi;
                $i.displayName = "Inbox";
                var ec, tc, nc, ac, rc = function (e) {
                        return a.createElement("div", {
                            className: "app ".concat("NJQQODlEuvSmz7S9AwOQ")
                        }, a.createElement($i, e))
                    },
                    oc = function (e) {
                        var t = e.sendCommand,
                            n = M().trackLinkClick,
                            r = [Wi("/news/:id/:slug/:variant", Go), Wi("/news/:id/:slug", Go), Wi("/news/:id", Go), Wi("/community", ll), Wi("/esport/*", Di), Wi("/community/:type/*", ll), Wi("/news", si), Wi("/", si)],
                            o = {
                                commander: Yi(t, n),
                                localization: Mi,
                                routes: r
                            };
                        return a.createElement(rc, o)
                    },
                    lc = Ln,
                    ic = (tc = function (e) {
                        return a.createElement(_, {
                            config: {
                                appId: "inbox-brawlstars-production",
                            }
                        }, a.createElement(Kn, {
                            initialState: Yn,
                            gameParamsParser: lc
                        }, a.createElement(oc, e)))
                    }, c.mc(tc)),
                    cc = An.brawlstars,
                    sc = null !== (ec = window.sendCommand) && void 0 !== ec ? ec : function (e) {
                        window.location.href = e
                    };
                window.setParams = function () {}, window.sendCommand = window.sendCommand || function (e) {
                    sc("".concat(cc, "://").concat(e))
                }, nc = {
                    dsn: "meow",
                    tracesSampleRate: .01,
                    sampleRate: .01
                }, ac = {
                    environmentName: "production",
                    buildId: "2025-05-12T09:07:22-9347958"
                }, l.T(function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(n), !0).forEach((function (t) {
                            (0, o.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    maxValueLength: 3e3,
                    environment: ac.environmentName,
                    release: ac.buildId,
                    integrations: [(0, u.dp)(), (0, s.jS)({
                        useEffect: a.useEffect,
                        useLocation: d.zy,
                        useNavigationType: d.wQ,
                        createRoutesFromChildren: d.AV,
                        matchRoutes: g.ue
                    }), (0, m.X)()],
                    tracesSampleRate: .01,
                    sampleRate: .01
                }, nc)), console.log("Build", {
                    environmentName: "production",
                    buildId: "2025-05-12T09:07:22-9347958"
                }), console.log("Viewport size", {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                var uc = null;
                window.history.replaceState({
                    root: !0
                }, ""), window.history.pushState({
                    home: !0
                }, ""), window.onpopstate = function (e) {
                    var t = e.state;
                    sc("".concat(cc, "://hideLoader")), t && t.root && window.history.forward()
                }, window.addEventListener("load", (function () {
                    ! function () {
                        var e = document.getElementById("inbox");
                        if (null === e) {
                            var t = "Failed to render Inbox, could not find root element";
                            return console.error(t), void h(new Error(t))
                        }
                        uc || (uc = (0, r.H)(e)), uc.render(a.createElement(ic, {
                            sendCommand: sc
                        }))
                    }()
                }))
            }
        },
        r = {};

    function o(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var n = r[e] = {
            exports: {}
        };
        return a[e].call(n.exports, n, n.exports, o), n.exports
    }
    o.m = a, e = [], o.O = function (t, n, a, r) {
            if (!n) {
                var l = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    n = e[u][0], a = e[u][1], r = e[u][2];
                    for (var i = !0, c = 0; c < n.length; c++)(!1 & r || l >= r) && Object.keys(o.O).every((function (e) {
                        return o.O[e](n[c])
                    })) ? n.splice(c--, 1) : (i = !1, r < l && (l = r));
                    if (i) {
                        e.splice(u--, 1);
                        var s = a();
                        void 0 !== s && (t = s)
                    }
                }
                return t
            }
            r = r || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > r; u--) e[u] = e[u - 1];
            e[u] = [n, a, r]
        }, o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return o.d(t, {
                a: t
            }), t
        }, n = Object.getPrototypeOf ? function (e) {
            return Object.getPrototypeOf(e)
        } : function (e) {
            return e.__proto__
        }, o.t = function (e, a) {
            if (1 & a && (e = this(e)), 8 & a) return e;
            if ("object" == typeof e && e) {
                if (4 & a && e.__esModule) return e;
                if (16 & a && "function" == typeof e.then) return e
            }
            var r = Object.create(null);
            o.r(r);
            var l = {};
            t = t || [null, n({}), n([]), n(n)];
            for (var i = 2 & a && e;
                "object" == typeof i && !~t.indexOf(i); i = n(i)) Object.getOwnPropertyNames(i).forEach((function (t) {
                l[t] = function () {
                    return e[t]
                }
            }));
            return l.default = function () {
                return e
            }, o.d(r, l), r
        }, o.d = function (e, t) {
            for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, o.g = function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function () {
            var e = {
                721: 0
            };
            o.O.j = function (t) {
                return 0 === e[t]
            };
            var t = function (t, n) {
                    var a, r, l = n[0],
                        i = n[1],
                        c = n[2],
                        s = 0;
                    if (l.some((function (t) {
                            return 0 !== e[t]
                        }))) {
                        for (a in i) o.o(i, a) && (o.m[a] = i[a]);
                        if (c) var u = c(o)
                    }
                    for (t && t(n); s < l.length; s++) r = l[s], o.o(e, r) && e[r] && e[r][0](), e[r] = 0;
                    return o.O(u)
                },
                n = self.webpackChunksupercell_brawlstars_frontend = self.webpackChunksupercell_brawlstars_frontend || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
        }(), o.O(void 0, [544], (function () {
            return o(81354)
        }));
    var l = o.O(void 0, [544], (function () {
        return o(69065)
    }));
    l = o.O(l)
}();
//# sourceMappingURL=inbox.7e1cc3a144d33c68f7b0.min.js.map