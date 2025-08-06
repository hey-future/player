import { defineComponent, shallowRef, ref, reactive, onMounted, onUnmounted, createElementBlock, openBlock, Fragment, createElementVNode, createBlock, normalizeStyle, normalizeClass, Teleport, createCommentVNode } from "vue";
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
function commonjsRequire(d) {
  throw new Error('Could not dynamically require "' + d + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var aliplayerMin = { exports: {} };
/*! aliyun-aliplayer - v2.30.4 - 2025-05-27 20.35.20 */
var hasRequiredAliplayerMin;
function requireAliplayerMin() {
  return hasRequiredAliplayerMin || (hasRequiredAliplayerMin = 1, function(module, exports) {
    (function(d) {
      module.exports = d();
    })(function() {
      return function d(o, x, _) {
        function u(s, t) {
          if (!x[s]) {
            if (!o[s]) {
              var e = typeof commonjsRequire == "function" && commonjsRequire;
              if (!t && e) return e(s, !0);
              if (c) return c(s, !0);
              throw (t = new Error("Cannot find module '" + s + "'")).code = "MODULE_NOT_FOUND", t;
            }
            e = x[s] = { exports: {} }, o[s][0].call(e.exports, function(n) {
              return u(o[s][1][n] || n);
            }, e, e.exports, d, o, x, _);
          }
          return x[s].exports;
        }
        for (var c = typeof commonjsRequire == "function" && commonjsRequire, a = 0; a < _.length; a++) u(_[a]);
        return u;
      }({ 1: [function(d, o, x) {
        var _, u, c = Object.defineProperty, a = Object.defineProperties, s = Object.getOwnPropertyDescriptors, t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable, r = (ae, de, ge) => de in ae ? c(ae, de, { enumerable: !0, configurable: !0, writable: !0, value: ge }) : ae[de] = ge, p = (ae, de) => {
          for (var ge in de = de || {}) e.call(de, ge) && r(ae, ge, de[ge]);
          if (t) for (var ge of t(de)) n.call(de, ge) && r(ae, ge, de[ge]);
          return ae;
        }, y = (ae, de, ge) => (r(ae, typeof de != "symbol" ? de + "" : de, ge), ge), h = (Object.defineProperties(x, { __esModule: { value: !0 }, [Symbol.toStringTag]: { value: "Module" } }), { exports: {} }), l = { exports: {} };
        function g() {
          var ae, de, ge;
          return u || (u = 1, Date.now = Date.now || function() {
            return (/* @__PURE__ */ new Date()).getTime();
          }, ae = Date.now(), ge = { noop: de = function() {
          }, warn: (() => {
            var B = typeof console == "object" ? console.warn : de;
            try {
              var J = { warn: B };
              J.warn.call(J);
            } catch {
              return de;
            }
            return B;
          })(), key: "__bl", selfErrKey: "ARMS_SDK_ERROR", selfErrPage: "ARMSSDK", win: typeof window == "object" && window.document ? window : void 0, regionMap: { cn: "https://arms-retcode.aliyuncs.com/r.png?", sg: "https://arms-retcode-sg.aliyuncs.com/r.png?", sg_2: "https://retcode-sg-lazada.arms.aliyuncs.com/r.png?", daily: "http://arms-retcode-daily.alibaba.net/r.png?", daily_2: "https://arms-retcode-daily.alibaba.net/r.png?", daily_3: "http://arms-retcode-daily.aliyun.test/r.png?", us: "https://retcode-us-west-1.arms.aliyuncs.com/r.png?", tw: "https://arms-retcode.orientalgame.com.tw/r.png?", tw_sg: "https://arms-retcode-sg.orientalgame.com.tw/r.png?", hz_finance: "https://arms-retcode-hz-finance.aliyuncs.com/r.png?" }, defaultImgUrl: "https://arms-retcode.aliyuncs.com/r.png?", createObject: function(B) {
            var J;
            return Object.create ? Object.create(B) : ((J = function() {
            }).prototype = B, new J());
          }, each: function(B, J) {
            var te = 0, X = B.length;
            if (this.T(B, "Array")) for (; te < X && J.call(B[te], B[te], te) !== !1; te++) ;
            else for (te in B) if (J.call(B[te], B[te], te) === !1) break;
            return B;
          }, safetyCall: function(B, J, te) {
            if (typeof B != "function") return te;
            try {
              return B.apply(this, J);
            } catch {
              return te;
            }
          }, T: function(B, J) {
            return B = Object.prototype.toString.call(B).substring(8).replace("]", ""), J ? B === J : B;
          }, duration: function() {
            var B = Date;
            try {
              performance && this.T(performance.now, "Function") && (B = performance);
            } catch {
              B = Date;
            }
            var J = B.now();
            return function() {
              return Math.round(B.now() - J);
            };
          }, filterByRule: function() {
            var B, J, te, X, Y, se = [].slice.call(arguments), ue = se.length;
            return ue < 2 ? se[0] : (B = se[ue - 1], (J = se[0]) ? B ? (X = (te = this).T(B), Y = se.slice(0, ue - 1), X === "Function" ? te.safetyCall(B, Y, J) : X === "Array" ? (this.each(B, function(pe) {
              Y[0] = J = te.filterByRule.apply(te, [].concat(Y, pe));
            }), J) : X === "Object" ? J.replace(B.rule, B.target || "") : J.replace(B, "")) : J : "");
          }, ignoreByRule: function(B, J) {
            if (!B || !J) return !1;
            if ((this.isString(J) || J.source || this.T(J) === "Function") && (J = [J]), !this.isArray(J)) return this.warn("[arms] invalid rules of ignore config, (list of) String/RegExp/Funcitons are available"), !1;
            for (var te, X = [], Y = 0, se = J.length; Y < se; Y++) if (te = J[Y], this.isString(te)) X.push(te.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"));
            else if (te && te.source) X.push(te.source);
            else if (te && this.T(te) === "Function" && this.safetyCall(te, [B], !1) === !0) return !0;
            var ue = new RegExp(X.join("|"), "i");
            return !!(X.length && ue.test && ue.test(B));
          }, J: function(B) {
            if (!B || typeof B != "string") return B;
            var J = null;
            try {
              J = JSON.parse(B);
            } catch {
            }
            return J;
          }, pick: function(B) {
            return B === 1 || Math.ceil(Math.random() * B) === 1;
          }, verifyConfig: function(B) {
            var J, te;
            return "sample" in B && (1 <= (te = 0 < (te = (te = J = B.sample) && /^\d+(\.\d+)?%$/.test(J) ? parseInt(100 / parseFloat(J)) : te) && te < 1 ? parseInt(1 / te) : te) && te <= 100 ? B.sample = te : delete B.sample), B;
          }, on: function(B, J, te, X, Y) {
            return B.addEventListener ? (Y = Y || !1, B.addEventListener(J, function se(ue) {
              X && B.removeEventListener(J, se, Y), te.call(this, ue);
            }, Y)) : B.attachEvent && B.attachEvent("on" + J, function se(ue) {
              X && B.detachEvent("on" + J, se), te.call(this, ue);
            }), this;
          }, off: function(B, J, te) {
            return te && (B.removeEventListener ? B.removeEventListener(J, te) : B.detachEvent && B.detachEvent(J, te)), this;
          }, delay: function(B, J) {
            return J === -1 ? (B(), null) : setTimeout(B, J || 0);
          }, ext: function(B) {
            for (var J = 1, te = arguments.length; J < te; J++) {
              var X, Y = arguments[J];
              for (X in Y) Object.prototype.hasOwnProperty.call(Y, X) && (B[X] = Y[X]);
            }
            return B;
          }, sub: function(B, J) {
            var te = {};
            return this.each(B, function(X, Y) {
              J.indexOf(Y) !== -1 && (te[Y] = X);
            }), te;
          }, uu: function() {
            for (var B, J, te = 20, X = new Array(te), Y = Date.now().toString(36).split(""); 0 < te--; ) J = (B = 36 * Math.random() | 0).toString(36), X[te] = B % 3 ? J : J.toUpperCase();
            for (var se = 0; se < 8; se++) X.splice(3 * se + 2, 0, Y[se]);
            return X.join("");
          }, guid: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(B) {
              var J = 16 * Math.random() | 0;
              return (B === "x" ? J : 3 & J | 8).toString(16);
            });
          }, seq: function() {
            return (ae++).toString(36);
          }, decode: function(B) {
            try {
              B = decodeURIComponent(B);
            } catch {
            }
            return B;
          }, encode: function(B, J) {
            try {
              B = J ? encodeURIComponent(B).replace(/\(/g, "%28").replace(/\)/g, "%29") : encodeURIComponent(B);
            } catch {
            }
            return B;
          }, serialize: function(B) {
            var J, te = [];
            for (J in B = B || {}) Object.prototype.hasOwnProperty.call(B, J) && B[J] !== void 0 && te.push(J + "=" + this.encode(B[J], J === "msg"));
            return te.join("&");
          }, checkAPI: function(B, J) {
            var te;
            return !(!B || typeof B != "string" || (!(te = /arms-retcode[\w-]*\.aliyuncs/.test(B)) && J ? /(alicdn\.com)|(mmstat\.com)/.test(B) : te));
          }, checkAutoError: function(B) {
            return !(!B || !B.message || /failed[\w\s]+fetch/i.test(B.message));
          }, cutUrlSearch: function(B) {
            return B && typeof B == "string" ? B.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : "";
          }, removeUrlSearch: function(B) {
            return B && typeof B == "string" ? B.replace(/\?.*$/, "") : "";
          }, createFakeToString: function(B) {
            return function() {
              return B + "() { [native code] }";
            };
          }, checkSameOrigin: function(B, J) {
            var te;
            return !(!J || !B || (te = "//" + J.split("/")[2], B !== J && B.slice(0, J.length + 1) !== J + "/" && B !== te && B.slice(0, te.length + 1) !== te + "/" && /^(\/\/|http:|https:).*/.test(B)));
          }, getRandIP: function() {
            for (var B = [], J = 0; J < 4; J++) {
              var te = Math.floor(256 * Math.random());
              B[J] = (15 < te ? "" : "0") + te.toString(16);
            }
            return B.join("").replace(/^0/, "1");
          }, getSortNum: function(B) {
            return B ? 1e3 <= (B += 1) && B <= 9999 ? B : B < 1e3 ? B + 1e3 : B % 1e4 + 1e3 : 1e3;
          }, getRandNum: function(B) {
            return !B || typeof B != "string" || B.length < 5 ? this.getNum(5) : B.substring(B.length - 5);
          }, getNum: function(B) {
            for (var J = [], te = 0; te < B; te++) {
              var X = Math.floor(16 * Math.random());
              J[te] = X.toString(16);
            }
            return J.join("");
          }, getCurDomain: function() {
            return location && location.hostname || "";
          }, getSrcType: function(B, J) {
            var te = location && location.host || "";
            if (!te) return "";
            var X = new URL(B).host;
            if (X === te) return "self";
            for (var Y = 0; Y < J.length; Y += 1) if (X.includes(J[Y])) return "cdn";
            return "others";
          }, parseFetchHeaders: function(B) {
            if (!B) return {};
            var J = {};
            try {
              if (typeof B.keys == "function") for (var te = B.keys(), X = te.next(); !X.done; ) {
                var Y = X.value;
                J[Y] = B.get(Y), X = te.next();
              }
              else J = B;
            } catch {
              J = {};
            }
            return J;
          }, parseXhrHeaders: function(B) {
            if (!B && typeof B != "string") return {};
            var J = {};
            try {
              J = B.split(`\r
`).reduce(function(te, X) {
                return X = X.split(": "), te[X[0]] = X[1], te;
              }, {});
            } catch {
              J = {};
            }
            return J;
          }, getQuerys: function(B) {
            if (!B) return "";
            var J, te, X, Y = {};
            try {
              var se = [];
              if (0 < (se = 0 <= B.indexOf("?") ? B.substring(B.indexOf("?") + 1, B.length).split("&") : se).length) for (var ue in se) te = (J = se[ue].split("="))[0], X = J[1], Y[te] = X;
            } catch {
              Y = {};
            }
            return Y;
          }, getURL: function(B) {
            if (!B) return null;
            var J = {}, Y = B.length, te = B.indexOf("://");
            if (te < 0) return null;
            J.protocol = B.substring(0, te + 1);
            var se = B.indexOf("#"), X = B.indexOf("?"), Y = (se < 0 && (se = Y), X < 0 && (X = se), J.search = B.substring(X, se).substring(0, 1e3), B.substring(te + 3, X)), se = Y.indexOf("/");
            return se < 0 && (se = Y.length), J.domain = Y.substring(0, se).split(":")[0], J.path = Y.substring(se, Y.length).substring(0, 1e3), J;
          }, getResType: function(B, X) {
            if (-1 < ["script", "img", "other"].indexOf(B)) return B;
            if (-1 < ["video"].indexOf(B)) return "media";
            if (-1 < ["document", "iframe"].indexOf(B)) return "doc";
            var X = X ? this.getURL(X) : null, te = X && X.path ? X.path.lastIndexOf(".") : -1, X = (0 < te ? X.path.substr(te + 1) : "").toLowerCase();
            if (X) {
              if (-1 < ["eot", "woff", "woff2", "ttf"].indexOf(X)) return "font";
              if (X === "css") return "css";
              if (X === "js") return "script";
            }
            return -1 < ["fetch", "xmlhttprequest", "beacon"].indexOf(B) ? "api" : "others";
          }, areInOrder: function() {
            for (var B = 1; B < arguments.length; B += 1) if (arguments[B] < arguments[B - 1]) return !1;
            return !0;
          }, getFetchSnapshot: function(B, J, te) {
            try {
              var X = (B && typeof B[0] != "string" ? B[0].url : B[0]) || "", Y = (B && typeof B[0] != "string" ? B[0] : B[1]) || {}, se = Y.method.toUpperCase() === "POST" ? Y.body : this.getQuerys(X), ue = { originApi: X, method: Y.method || "unknown", params: se, response: J || "", reqHeaders: this.parseFetchHeaders(Y.headers || null), resHeaders: this.parseFetchHeaders(te) }, pe = JSON && JSON.stringify(ue) || "{}";
            } catch {
              pe = "{}";
            }
            return pe;
          }, getXhrSnapshot: function(B, J, te) {
            if (!B || !J || !te) return {};
            var X, Y;
            try {
              var se = "";
              te.responseType === "" || te.responseType === "text" ? se = te.responseText : te.responseType === "document" && (se = te.responseXML), X = { originApi: B, method: J, params: this.getQuerys(B), response: se, reqHeaders: {}, resHeaders: this.parseXhrHeaders(typeof te.getAllResponseHeaders == "function" && te.getAllResponseHeaders() || "") }, Y = JSON && JSON.stringify(X) || "{}";
            } catch {
              Y = "{}";
            }
            return Y;
          }, isRobot: function() {
            var B = ["nuhk", "googlebot/", "googlebot-image", "yammybot", "openbot", "slurp", "msnbot", "ask jeeves/teoma", "ia_archiver", "baiduspider", "bingbot/", "adsbot"];
            if (navigator && typeof navigator.userAgent == "string") try {
              for (var J = navigator.userAgent.toLowerCase(), te = 0; te < B.length; te++) {
                var X = B[te];
                if (0 <= J.lastIndexOf(X)) return !0;
              }
            } catch {
              this.warn("[arms] useragent parse error");
            }
            return !1;
          }, isFunction: function(B) {
            return typeof B == "function";
          }, isPlainObject: function(B) {
            return Object.prototype.toString.call(B) === "[object Object]";
          }, isString: function(B) {
            return Object.prototype.toString.call(B) === "[object String]";
          }, isArray: function(B) {
            return Object.prototype.toString.call(B) === "[object Array]";
          }, joinRegExp: function(B) {
            for (var J, te = [], X = 0, Y = B.length; X < Y; X++) J = B[X], this.isString(J) ? te.push(J.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : J && J.source && te.push(J.source);
            return new RegExp(te.join("|"), "i");
          }, reWriteMethod: function(B, J, te) {
            var X;
            B !== null && (X = B[J], B[J] = te(X));
          }, checkSDKError: function(B, J) {
            return !(!B && !J || !new RegExp(this.selfErrKey, "i").test(B) && !this.ignoreByRule(J, [/retcode.alicdn.com\/retcode\/bl.js/, /g.alicdn.com\/retcode\/cloud-sdk\/bl.js/, /laz-g-cdn.alicdn.com\/retcode\/cloud-sdk\/bl.js/, /local.taobao.com:8880\/build\/bl/]));
          }, sdkError: function(B) {
            return { msg: B, message: this.selfErrKey };
          }, dealParam: function(B, J, te) {
            var X = {};
            try {
              X = this.isPlainObject(B) ? this.ext({ key: B.key || "default", val: B.val || B.value || te }, B, { begin: Date.now() }) : { key: B || "default", val: J || te, begin: Date.now() };
            } catch (Y) {
              this.warn("[retcode] baseLog error: " + Y);
            }
            return X;
          } }, _ = ge), _;
        }
        var m, v, f, b, S = { exports: {} }, w = { exports: {} };
        function T() {
          var ae, de, ge, B, J, te;
          return f || (f = 1, ae = g(), v || (v = 1, te = g(), m = function(X, Y, se) {
            typeof X == "object" && (X = te.serialize(X)), window && window.navigator && typeof window.navigator.sendBeacon == "function" ? window.navigator.sendBeacon(Y + X + (se ? "&post_res=" : ""), se || "&post_res=") : te.warn("[arms] navigator.sendBeacon not surported");
          }), de = m, ge = "aokcdqn3ly@e629dabd48a9933", B = function(X, Y) {
            var se, ue, pe;
            if (Y.t !== "error" || !(se = X.requestQueue[0]) || se.t !== "error" || Y.msg !== se.msg) return Y.t === "behavior" ? 0 < (ue = X.requestQueue && X.requestQueue.length) && X.requestQueue[ue - 1].t === "behavior" ? (pe = Y.behavior || [], X.requestQueue[ue - 1].behavior.concat(pe)) : X.requestQueue.push(Y) : X.requestQueue.unshift(Y), X.onReady(function() {
              X.requestTimmer = ae.delay(function() {
                X.clear();
              }, X.requestQueue[0] && X.requestQueue[0].t === "error" ? 3e3 : -1);
            }), !0;
            Y.times = se.times + 1, X.requestQueue[0] = Y;
          }, (J = function(X) {
            return this.ver = "1.8.36-beta.12", this._conf = ae.ext({}, J.dftCon), this.sampleCache = {}, this.requestQueue = [], this.selfQueue = [], this.sdkFlag = !0, this.hash = ae.seq(), this.resetPageview(), this.setConfig(X), this.rip = ae.getRandIP(), this.record = 999, this["EagleEye-TraceID"] = this.getTraceId()["EagleEye-TraceID"], this._common = {}, this;
          }).dftCon = { sample: 1, pvSample: 1, tag: "", imgUrl: "https://arms-retcode.aliyuncs.com/r.png?", region: null, ignore: { ignoreUrls: [], ignoreApis: [], ignoreErrors: [/^Script error\.?$/], ignoreResErrors: [], ignoreResources: [/\/(bl|wl)(.debug)?.js$/] }, release: void 0, environment: "prod", beforeReport: null, parseTraceId: null }, J.prototype = { constructor: J, onReady: function(X) {
            return X();
          }, getPage: function() {
            var X = this._conf.page;
            return ae.safetyCall(X, [], X + "");
          }, setPage: function() {
          }, setConfig: function(X) {
            X && typeof X == "object" && (ae.verifyConfig(X), X = this.setImgUrl(X), this._conf = ae.ext({}, this._conf, X));
          }, setImgUrl: function(X) {
            var Y = X.region, se = X.imgUrl;
            return Y ? (Y = ae.regionMap[Y], X.imgUrl = Y || ae.defaultImgUrl) : se && (X.imgUrl = se), X;
          }, checkImgUrl: function() {
            return !0;
          }, sendRequest: function() {
          }, sendBeacon: function(X, Y, se) {
            de(X, Y || this.getConfig("imgUrl"), se);
          }, postData: function() {
          }, commonInfo: function() {
            return {};
          }, setCommonInfo: function(X) {
            X && typeof X == "object" && (this._common = ae.ext({}, this._common, X));
          }, resetPageview: function() {
            this.pageview = ae.uu(), this.sBegin = Date.now();
          }, getUsername: function() {
            if (!this.username) {
              var X = this._conf, X = X && X.setUsername;
              if (typeof X == "function") try {
                var Y = X();
                typeof Y == "string" && (Y = Y.substr(0, 40), this.username = Y);
              } catch (se) {
                ae.warn("[arms] setUsername fail", se);
              }
            }
            return this.username;
          }, getTraceId: function() {
            var se = this.rip, X = Date.now(), Y = ae.getSortNum(this.record), se = se + X + Y + ae.getRandNum(this._conf.pid);
            return this["EagleEye-TraceID"] = se, this.record = Y, { "EagleEye-TraceID": se };
          }, getUberTraceId: function(X) {
            var ue = this.rip, pe = Date.now(), Y = ae.getSortNum(this.record), se = ae.getRandNum(this._conf.pid), ue = ue + pe + Y + ae.getNum(2) + se, pe = ue.substring(0, 16);
            return X = X ? "1" : "0", ue[0] === "0" && (ue[0] = "1"), ue[16] === "0" && (ue[16] = "1"), { "uber-trace-id": ue + ":" + pe + ":0:" + X, traceId: ue };
          }, getB3TraceId: function(X) {
            var ue = this.rip, pe = Date.now(), Y = ae.getSortNum(this.record), se = ae.getRandNum(this._conf.pid), ue = ue + pe + Y + ae.getNum(2) + se, pe = ue.substring(0, 16);
            return X = X ? "1" : "0", ue[0] === "0" && (ue[0] = "1"), ue[16] === "0" && (ue[16] = "1"), { b3: ue + "-" + pe + "-" + X + "-0", "X-B3-TraceId": ue, "X-B3-ParentSpanId": "0", "X-B3-SpanId": pe, "X-B3-Sampled": X };
          }, getPageviewId: function() {
            return { "EagleEye-SessionID": this.pageview };
          }, getConfig: function(X) {
            return X ? this._conf[X] : ae.ext({}, this._conf);
          }, sampling: function(X) {
            return X === 1 || (typeof this.sampleCache[X] == "boolean" || (this.sampleCache[X] = ae.pick(X)), this.sampleCache[X]);
          }, clear: function(X) {
            var Y;
            clearTimeout(this.requestTimmer), this.requestTimmer = null;
            for (var se, ue = this._conf && typeof this._conf.sendRequest == "function"; Y = this.requestQueue.pop(); ) Y.t === "res" ? this.postData(Y, "res") : Y.t === "error" ? this.postData(Y, "err") : Y.t === "api" ? this.postData(Y, "apiSnapshot") : Y.t === "behavior" ? this.postData(Y, "behavior") : Y.t === "health" && !ue && window && window.navigator && typeof window.navigator.sendBeacon == "function" ? this.sendBeacon(Y) : Y.t === "resource" && !ue && window && window.navigator && typeof window.navigator.sendBeacon == "function" ? (se = JSON.stringify({ resource: Y.resource }), delete Y.resource, this.sendBeacon(Y, null, se)) : Y.t === "resource" ? this.postData(Y, "resource") : this.sendRequest(Y);
            return X && this.clearSelf(), this;
          }, clearSelf: function() {
            var X;
            for (clearTimeout(this.Timmer), this.Timmer = null; X = this.selfQueue.pop(); ) this.postData(X, "err");
            return this;
          }, _lg: function(X, Y, se, ue) {
            var pe = this, me = pe._conf, Te = pe.getPage(), Se = me.ignore || {}, ye = Se.ignoreErrors, he = Se.ignoreResErrors, xe = Se.ignoreUrls, Se = Se.ignoreApis;
            if (pe._isRobot || ae.ignoreByRule(Te, xe) || ae.ignoreByRule(ae.decode(Te), xe) || X === "error" && (ae.ignoreByRule(Y.msg, ye) || ae.ignoreByRule(ae.decode(Y.msg), ye)) || X === "resourceError" && (ae.ignoreByRule(Y.src, he) || ae.ignoreByRule(ae.decode(Y.src), he)) || X === "api" && (ae.ignoreByRule(Y.api, Se) || ae.ignoreByRule(ae.decode(Y.api), Se)) || !pe.checkImgUrl(me.imgUrl) || !Y || me.disabled || !me.pid || ue === 0) return pe;
            if (xe = Y.dl, delete Y.dl, Y = ae.ext({ t: X, times: 1, page: Te, tag: me.tag || "", release: me.release || "", environment: me.environment, begin: Date.now(), c1: me.c1, c2: me.c2, c3: me.c3 }, Y, pe.commonInfo(), pe._common, { pid: me.pid, _v: pe.ver, pv_id: pe.pageview, username: pe.getUsername(), sampling: se || 1, dl: xe, z: ae.seq() }), ae.T(me.beforeReport) === "Function") try {
              if (!(Y = me.beforeReport(Y))) return pe;
            } catch {
              return pe;
            }
            return ue !== 1 && se && !pe.sampling(se) ? pe : B(pe, Y);
          }, _self: function(X, Y, se) {
            var ue = this, pe = ue._conf;
            if (X !== "error" || !ue.checkImgUrl(pe.imgUrl) || !Y || pe.disabled || !pe.pid || se && !ue.sampling(se)) return ue;
            if (Y = ae.ext({ t: X, times: 1, page: ae.selfErrPage, tag: pe.pid, begin: Date.now() }, Y, { pid: ge, _v: ue.ver, sampling: se || 1, z: ae.seq() }), X = ue.selfQueue[0], X) {
              X.times++;
              try {
                X.err && Y.err && X.err.msg_raw && Y.err.msg_raw && X.err.msg_raw.split("&").indexOf(Y.err.msg_raw) < 0 && X.err.msg_raw.length < 1e3 && (X.err.msg_raw += "&" + Y.err.msg_raw);
              } catch {
              }
            } else ue.selfQueue.unshift(Y), ue.onReady(function() {
              ue.sdkFlag && (ue.sdkFlag = !1, ue.Timmer = ae.delay(function() {
                ue.clearSelf();
              }, 1e4));
            });
          }, custom: function(X, Y) {
            var se, ue;
            return X && typeof X == "object" && (se = !1, ue = { begin: Date.now() }, ae.each(X, function(pe, me) {
              return (se = me && me.length <= 20) || ae.warn("[retcode] invalid key: " + me), ue["x-" + me] = pe, se;
            }), se) ? this._lg("custom", ue, Y || 1) : this;
          } }, w.exports = J), w.exports;
        }
        var C, R = { exports: {} }, E, A, H, N = { exports: {} };
        function O() {
          var ae;
          return H || (H = 1, ae = g(), A = function(de, ge) {
            function B(pe, me, Te) {
              var ye;
              pe !== null && (ye = pe[me], pe[me] = Te(ye));
            }
            function J(pe, me) {
              return function(Te) {
                if (Te && Te !== ue) {
                  var ye;
                  ue = Te;
                  try {
                    ye = Te.target;
                  } catch {
                    ye = "<unknown>";
                  }
                  ye.length !== 0 && (Te = { type: "ui.".concat(pe), data: { message: ((he) => {
                    if (!he || he.nodeType !== 1) return "";
                    for (var xe = he || null, Se = [], Ee = 0, q = 0, z = ""; xe && Ee++ < 5 && !((z = ((Z) => {
                      var ce, fe, we, Oe, Le = [];
                      if (!Z || typeof Z.tagName != "string") return "";
                      if (Le.push(Z.tagName.toLowerCase()), typeof Z.id == "string" && Le.push("#".concat(Z.id)), typeof (ce = Z.className) == "string") for (fe = ce.split(/\s+/), ke = 0; ke < fe.length; ke++) Le.push(".".concat(fe[ke]));
                      for (var Ae = ["type", "name", "title", "alt", "data-arms-attr"], ke = 0; ke < Ae.length; ke++) typeof (Oe = Z.getAttribute(we = Ae[ke])) == "string" && Le.push("[".concat(we, '="').concat(Oe, '"]'));
                      return Le.join("");
                    })(xe)) === "html" || 1 < Ee && 80 <= q + 3 * Se.length + z.length); ) Se.push(z), q += z.length, xe = xe.parentNode;
                    return Se.reverse().join(" > ");
                  })(ye) }, timestamp: Date.now() }, pe === "click" ? X && X.addBehavior(Te) : pe === "keypress" && (se || X && X.addBehavior(Te), clearTimeout(se), se = setTimeout(function() {
                    se = void 0;
                  }, 100)));
                }
              };
            }
            var te = [], X = null, Y = ge && ge.location && ge.location.href, se = void 0, ue = null;
            ae.ext(de.prototype, { addBehavior: function(pe) {
              if (this.getConfig("behavior") && pe && typeof pe == "object") {
                var me = {}, Te = pe.data || {};
                if (pe.type) me = Te;
                else {
                  if (typeof Te.name != "string" || typeof Te.message != "string") return;
                  me.name = Te.name.substr(0, 20), me.message = Te.message.substr(0, 200);
                }
                return me.message && (me.message = ae.encode(me.message)), Te = { type: pe.type || "custom", data: me || {}, timestamp: pe.timestamp || Date.now(), page: pe.page || ge && ge.location && ge.location.pathname }, te.push(Te), te = te.slice(-100);
              }
            }, getBehavior: function() {
              return te || [];
            }, setBehavior: function(pe) {
              return te = pe || te;
            }, reportBehavior: function(pe) {
              var me = this;
              me.getConfig("behavior") && (me.sendBhTimer && (clearTimeout(me.sendBhTimer), me.sendBhTimer = void 0), me.sendBhTimer = setTimeout(function() {
                te && 0 < te.length && (me.behavior(te), te = [], me.sendBhTimer = void 0, pe) && typeof pe == "function" && pe();
              }, 0));
            }, initBehavior: function() {
              if (!this.hasInitBehavior && !X) {
                try {
                  document && document.referrer && document.location && (z = document.referrer, Z = document.location.href, z !== "") && (Y = Z, X) && X.addBehavior({ type: "navigation", data: { from: z, to: Z } }), ge && ge.document && ge.document.addEventListener && (ge.document.addEventListener("click", J("click"), !1), ge.document.addEventListener("keypress", J("keypress"), !1)), Ee = (Ee = ge && ge.chrome) && Ee.app && Ee.app.runtime, q = "history" in ge && !!ge.history.pushState && !!ge.history.replaceState, !Ee && q && (xe = function(ce, fe) {
                    X && X.addBehavior({ type: "navigation", data: { from: ce, to: fe } }), Y = fe;
                  }, Se = ge.onpopstate, ge.onpopstate = function() {
                    for (var ce = arguments.length, fe = new Array(ce), we = 0; we < ce; we++) fe[we] = arguments[we];
                    var Oe = ge.location.href;
                    if (xe(Y, Oe), Se) return Se.apply(this, fe);
                  }, B(ge.history, "pushState", Ee = function(ce) {
                    return function() {
                      for (var fe = arguments.length, we = new Array(fe), Oe = 0; Oe < fe; Oe++) we[Oe] = arguments[Oe];
                      var Le = 2 < we.length ? we[2] : void 0;
                      return Le && xe(Y, String(Le)), ce.apply(this, we);
                    };
                  }), B(ge.history, "replaceState", Ee));
                  var pe = this.getConfig("enableConsole");
                  if (pe) {
                    var me = pe;
                    if (ge && ge.console) {
                      var Te = ["debug", "info", "warn", "log", "error", "assert"];
                      ae.isArray(me) && (Te = me);
                      for (var ye = 0; ye < Te.length; ye++) {
                        var he = Te[ye];
                        he && ae.isString(he) && ge.console[he] && typeof ge.console[he] == "function" && B(ge.console, he, function(ce) {
                          var fe = he;
                          return function() {
                            for (var we = arguments.length, Oe = new Array(we), Le = 0; Le < we; Le++) Oe[Le] = arguments[Le];
                            if (X && X.addBehavior({ type: "console", data: { level: fe, message: Oe } }), fe === "error") for (var Ae = 0; Ae < Oe.length; Ae++) {
                              var ke = Oe[Ae];
                              ke && ke.message && ke.stack && X && X.errorHandler(new ErrorEvent("error", { error: ke, message: ke.message }));
                            }
                            ce && Function.prototype.apply.call(ce, ge.console, Oe);
                          };
                        });
                      }
                    }
                  }
                } catch (ce) {
                  ae.warn("[arms] error in initBehavior", ce);
                }
                (X = this).hasInitBehavior = !0;
              }
              var xe, Se, Ee, q, z, Z;
              return this;
            } });
          }), A;
        }
        var F, U, M, P, I, L, V, Q, j, k, D, W, ee, re, ne, le, K, oe = {};
        function G() {
          return F || (F = 1, oe.TIMING_KEYS = ["startTime", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "", "domInteractive", "", "domContentLoadedEventEnd", "", "loadEventStart", "", "msFirstPaint", "secureConnectionStart", "redirectStart", "redirectEnd"]), oe;
        }
        function ie() {
          return V || (V = 1, L = function(ae, de, ge) {
            function B(z, Z, ce, fe, we) {
              if (Z === void 0) {
                var Oe;
                if (!q[z]) {
                  Le = new RegExp(z + "=([^;]+)");
                  try {
                    Oe = Le.exec(ge.cookie);
                  } catch (Ae) {
                    return ue.warn("[retcode] can not get cookie:", Ae), null;
                  }
                  Oe && (q[z] = Oe[1]);
                }
                return q[z];
              }
              var Le = z + "=" + Z;
              Le += "; path=/", ce && (Le += "; max-age=" + ce);
              try {
                return ge.cookie = Le, !!ge.cookie;
              } catch (Ae) {
                return ue.warn("[retcode] can not set cookie: ", Ae), !1;
              }
            }
            function J(z) {
              return (z = z._conf.uid || B("_nk_") || B("_bl_uid")) || (z = ue.uu(), B("_bl_uid", z, 15552e3)) ? z : null;
            }
            var te, X, Y, se, ue = g(), pe = (M || (M = 1, Y = g(), se = G().TIMING_KEYS, U = function() {
              var z, Z, ce, fe = Y.win || {}, we = fe.performance;
              return we && typeof we == "object" && typeof we.getEntriesByType == "function" ? (z = {}, Z = we.timing || {}, ce = we.getEntriesByType("resource") || [], z.begin = Z[se[1]] || Date.now(), typeof fe.PerformanceNavigationTiming == "function" && (fe = we.getEntriesByType("navigation")[0]) && (Z = fe), Y.each({ dom: [10, 8], load: [14, 1] }, function(ke, Le) {
                var Ae = Z[se[ke[1]]], ke = Z[se[ke[0]]];
                0 < Ae && 0 < ke && 0 <= (ke = Math.round(ke - Ae)) && ke < 6e5 && (z[Le] = ke);
              }), z.res = JSON.stringify(ce), z) : null;
            }), U), me = (I || (I = 1, te = g(), X = G().TIMING_KEYS, P = function() {
              var z, Z, ce, fe, we, Oe = te.win || {}, Le = Oe.performance;
              return Le && typeof Le == "object" ? (z = {}, Z = Le.timing || {}, ce = Date.now(), fe = 1, typeof Oe.PerformanceNavigationTiming == "function" && (we = Le.getEntriesByType("navigation")[0]) && (Z = we, fe = 2), te.each({ dns: [3, 2], tcp: [5, 4], ssl: [5, 17], ttfb: [7, 6], trans: [8, 7], dom: [10, 8], res: [14, 12], firstbyte: [7, 2], fpt: [8, 1], tti: [10, 1], ready: [12, 1], load: [14, 1] }, function(qe, ke) {
                var Be = Z[X[qe[1]]], qe = Z[X[qe[0]]];
                (fe === 2 || 0 < Be && 0 < qe) && 0 <= (qe = Math.round(qe - Be)) && qe < 6e5 && (z[ke] = qe);
              }), we = Oe.navigator.connection, Oe = Le.navigation || {}, z.ct = we ? we.effectiveType || we.type : "", (Le = 999 < (Le = we && (we.downlink || we.downlinkMax || we.bandwidth) || null) ? 999 : Le) && (z.bandwidth = Le), z.navtype = Oe.type === 1 ? "Reload" : "Other", fe === 1 && 0 < Z[X[16]] && 0 < Z[X[1]] && 0 <= (we = Z[X[16]] - Z[X[1]]) && we < 36e5 && (z.fpt = we), fe === 1 && 0 < Z[X[1]] ? z.begin = Z[X[1]] : z.begin = fe === 2 && 0 < z.load ? ce - z.load : ce, z) : null;
            }), P), Te = null, ye = ge.documentElement, he = de.innerWidth || ye.clientWidth || ge.body.clientWidth, xe = de.innerHeight || ye.clientHeight || ge.body.clientHeight, Se = de.navigator.connection, Ee = { sr: screen.width + "x" + screen.height, vp: he + "x" + xe, ct: Se ? Se.effectiveType || Se.type : "" }, q = {};
            return ue.ext(ae.prototype, { activeErrHandler: function(z) {
              return Te && !z || (Te = this), this;
            }, errorHandler: function(z) {
              if (z) {
                var Z, ce = z.type;
                ce === "error" ? !(Z = z.target || z.srcElement) || !Z.tagName || z.message || z.filename || z.lineno || z.colno ? this.error(z.error || { message: z.message }, z) : this.resourceErrorHandler(z) : ce === "unhandledrejection" && ue.T(z.reason, "Error") && ue.checkAutoError(z.reason) && this.error(z.reason);
                try {
                  this.getConfig("behavior") && this.reportBehavior && this.reportBehavior();
                } catch {
                }
              }
              return this;
            }, resourceErrorHandler: function(z) {
              var Z = this, ce = z.target || z.srcElement;
              try {
                var fe = Z.getSrc(ce), we = typeof ce.tagName == "string" ? ce.tagName.toLowerCase() : "", Oe = Z.getXPath(ce, 5), Le = ue.getURL(fe), Ae = { src: fe && fe.substring(0, 1e3), node_name: we, xpath: Oe, res_type: ue.getResType(we, fe), res_name: Le.path, domain: Le.domain };
                return Z._conf.enableResource && Z.fixResourceStatus && z.timeStamp && Z.fixResourceStatus({ src: fe, node_name: we, res_type: ue.getResType(we, fe), timeStamp: z.timeStamp, domain: Le.domain }), Z._lg("resourceError", Ae), Z;
              } catch (ke) {
                return ue.warn("[ARMS] resourceErrorHandler error :", ke), Z;
              }
            }, getSrc: function(z) {
              var Z, ce, fe = z.src || z.href;
              try {
                fe || (Z = (typeof z.tagName == "string" ? z.tagName.toLowerCase() : "") === "object", ce = z.getAttribute("classid") && z.getAttribute("classid").toLowerCase() === "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" || z.getAttribute("type") === "application/x-shockwave-flash", fe = (fe = Z && ce ? z.getAttribute("data") || z.getAttribute("codebase") : fe) || z.outerHTML || z.innerHTML);
              } catch {
                fe = "";
              }
              return fe;
            }, getXPath: function(z, Z) {
              var fe = z.id ? "#" + z.id : "", ce = typeof z.className == "string" ? "." + z.className.split(" ").join(".") : "", fe = (typeof z.tagName == "string" ? z.tagName.toLowerCase() : "") + fe + ce;
              return z.parentNode && z.parentNode.tagName && Z - 1 != 0 ? this.getXPath(z.parentNode, Z - 1) + " > " + fe : fe;
            }, sendPerformance: function(z) {
              var Z = this;
              Z.onReady(function() {
                var ce = me();
                ce && ce.load && 0 < ce.load && (ce.page = Z.getPage(!0), (ce = z ? ue.ext(ce, z) : ce).autoSend = !0, Z.performance(ce));
              });
            }, sendResources: function(z) {
              var Z = this;
              Z.onReady(function() {
                var ce = pe();
                ce && ce.load && 0 < ce.load && (ce.load && ce.load <= 2e3 || ce.load && ce.load <= 8e3 && 0.05 < Math.random() || (ce.page = Z.getPage(!0), ce.dl = location.href, z && (ce = ue.ext(ce, z)), Z._lg("res", ce, Z.getConfig("sample"))));
              });
            }, sendPV: function() {
              var z = this;
              z.onReady(function() {
                ce = J(z), Z = de.devicePixelRatio || 1;
                var Z, ce = { uid: ce, dt: ge.title, dl: location.href, dr: ge.referrer, dpr: Z.toFixed(2), de: (ge.characterSet || ge.defaultCharset || "").toLowerCase(), ul: ye.lang, begin: Date.now() };
                ce.uid && z._lg("pv", ce, z.getConfig("pvSample"));
              });
            }, commonInfo: function() {
              return Ee.uid = J(this), Ee.sid = ((z) => {
                if (z.session) return z.session;
                var Z;
                try {
                  if (typeof window == "object" && typeof sessionStorage == "object" && typeof sessionStorage.getItem == "function") return typeof (Z = sessionStorage.getItem("_bl_sid")) == "string" ? z.session = Z : (Z = ue.uu(), z.session = Z, typeof sessionStorage.setItem == "function" && sessionStorage.setItem("_bl_sid", Z)), Z;
                } catch (ce) {
                  ue.warn("[ARMS] getSid error :", ce);
                }
                return z.session = Z = ue.uu(), Z;
              })(this), Ee;
            }, handleUnload: function(z) {
              var Z = Date.now();
              if (Z - this._lastUnload < 200) return this;
              this._lastUnload = Z, this.sendHealth(z), this.speedCache && (this._lg("speed", this.speedCache), this.speedCache = null, clearTimeout(this.speedTimmer)), this._conf && this._conf.enableResource && this.resourceComboReport(), this.clear(!0);
            }, bindHashChange: function(z) {
              var Z = this;
              if (!z ^ Z.hashChangeHandler) return Z;
              z ? (Z.hackHistoryState(), Z.hashChangeHandler = function(ce) {
                var fe = Z._conf.parseHash(location.hash);
                fe && Z.setPage(fe, ce !== !1);
              }, Z.stateChangeHandler = function(ce) {
                ce = Z._conf.parseHash(ce.detail), ce && Z.setPage(ce);
              }, ue.on(de, "hashchange", Z.hashChangeHandler), ue.on(de, "historystatechange", Z.stateChangeHandler), Z.hashChangeHandler(!1)) : (ue.off(de, "hashchange", Z.hashChangeHandler), ue.off(de, "historystatechange", Z.stateChangeHandler), Z.hashChangeHandler = null, Z.stateChangeHandler = null);
            }, initHandler: function() {
              var z, Z = this;
              return Z.hasInitHandler || (z = Z._conf, ue.on(de, "beforeunload", function() {
                Z.handleUnload(0);
              }), Z.bindHashChange(z.enableSPA), Z.activeErrHandler(!1), Z.hasInitHandler = !0), Z;
            } }), ue.on(de, "error", function(z) {
              Te && Te.errorHandler(z);
            }, !1, !0).on(de, "unhandledrejection", function(z) {
              Te && Te.errorHandler(z);
            }), ae;
          }), L;
        }
        function ve() {
          var ae, de;
          return j || (j = 1, ae = g(), de = 500, Q = function(ge, B, J) {
            var te = B.innerHeight || 0, X = [], Y = null, se = 0;
            ae.ext(ge.prototype, { initFmpObserver: function(ue) {
              var pe = this;
              if (!pe._conf || !pe._conf.useFmp) return null;
              if (!B.MutationObserver) return ae.warn("[retcode] first meaningful paint can not be retrieved"), pe.sendPerformance(), null;
              ae.on(B, "beforeunload", function() {
                pe.endObserving(0, !0);
              });
              var me = B.MutationObserver;
              return (Y = new me(function() {
                var Te, ye, he;
                Te = pe._startTime, Te = Date.now() - Te, (he = J.querySelector("body")) ? (ye = 0, ye += function xe(Se, Ee, q) {
                  var z = 0, Z = Se.tagName;
                  if (Z !== "SCRIPT" && Z !== "STYLE" && Z !== "META" && Z !== "HEAD") {
                    if (0 < (Z = Se.children ? Se.children.length : 0)) for (var ce = Se.children, fe = Z - 1; 0 <= fe; fe--) z += xe(ce[fe], Ee + 1, 0 < z);
                    if (z <= 0 && !q && !(Se.getBoundingClientRect && Se.getBoundingClientRect().top < te)) return 0;
                    z += 1 + 0.5 * Ee;
                  }
                  return z;
                }(he, 1, !1), X.push({ score: ye, t: Te })) : X.push({ score: 0, t: Te });
              })).observe(document, { childList: !0, subtree: !0 }), se = 1, pe.onReady(function() {
                pe.endObserving(ue);
              }), Y;
            }, endObserving: function(ue, pe) {
              var me = this;
              if (Y && se) if (me.fmpTimmer && (clearTimeout(me.fmpTimmer), me.fmpTimmer = null), pe || !((xe, Se) => (xe = Date.now() - xe, !(Se < xe || xe - (X && X.length && X[X.length - 1].t || 0) > 2 * de)))(me._startTime, ue)) {
                Y.disconnect(), se = 0, X = function xe(Se) {
                  for (var Ee = 1; Ee < Se.length; Ee++) if (Se[Ee].score < Se[Ee - 1].score) return Se.splice(Ee, 1), xe(Se);
                  return Se;
                }(X);
                for (var Te, ye = null, he = 1; he < X.length; he++) X[he].t >= X[he - 1].t && (Te = X[he].score - X[he - 1].score, !ye || ye.rate <= Te) && (ye = { t: X[he].t, rate: Te });
                ye && 0 < ye.t && ye.t < 36e5 ? me.sendPerformance({ fmp: ye.t }) : me.sendPerformance();
              } else me.fmpTimmer = ae.delay(function() {
                me.endObserving(ue);
              }, de);
            } });
          }), Q;
        }
        function Pe() {
          return D || (D = 1, k = function(ae, de) {
            function ge(pe, me, Te, ye, he, xe, Se, Ee, q, z, Z, ce, fe) {
              he = B.J(he) || null, (me = B.safetyCall(me, [he, ye], null)) && (he = me.code || xe, ye = !("success" in me) || me.success, pe.api(Te, ye, Se, he, me.msg, Ee, q, z, ye ? {} : Z, te, ce, fe));
            }
            var B = g(), J = null, te = B.getCurDomain(), X = "fetch", Y = "__oFetch_", se = "__oXMLHttpRequest_", ue = "XMLHttpRequest";
            return B.ext(ae.prototype, { removeHook: function(pe, me) {
              return J && (me || this === J) && (de[Y] && (de[X] = de[Y], delete de[Y]), de[se] && (de[ue] = de[se], delete de[se]), J = null), this;
            }, addHook: function(pe) {
              return !pe && J || (J || (typeof de[X] == "function" && (he = de[X], de[Y] = he, de[X] = function(xe, Se) {
                var Ee = arguments.length === 1 ? [xe] : Array.apply(null, arguments), q = J;
                if (!q || !q.api || Se && (Se.method === "HEAD" || Se.mode === "no-cors")) return he.apply(de, Ee);
                Se = Se || {};
                var z = Date.now(), Z = q._conf, ce = B.duration(), fe = we = (xe && typeof xe != "string" ? xe.url : xe) || "", we = B.cutUrlSearch(we), Le = (Z.ignore || {}).ignoreApis, Oe = Z.parseTraceId;
                if (!B.checkAPI(we, !0) || B.ignoreByRule(we, Le)) return he.apply(de, Ee);
                we = B.filterByRule(we, fe, Z.ignoreApiPath || Z.apiHelper);
                var Le = Z.enableLinkTrace, Ae = "", ke = "", Be = q.getConfig("pid"), qe = null, Je = q.getConfig("sample"), ot = q.getConfig("linkType"), Ge = 1;
                if (Je && !q.sampling(Je) && (Ge = 0), Le) {
                  Je = "";
                  try {
                    Je = location.origin || location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
                  } catch {
                    Je = "";
                  }
                  var De, Le = B.checkSameOrigin(fe, Je);
                  if (q.getConfig("enableApiCors") || Le) if (xe && typeof xe != "string") try {
                    if (Ee[0].headers && typeof Ee[0].headers.get == "function" && typeof Ee[0].headers.append == "function") switch (ot) {
                      case "arms":
                        var Xe = Ee[0].headers.get("EagleEye-TraceID"), Ye = Ee[0].headers.get("EagleEye-SessionID"), it = Ee[0].headers.get("EagleEye-pAppName");
                        Xe ? Ae = Xe : (Ae = q.getTraceId()["EagleEye-TraceID"], Ee[0].headers.append("EagleEye-TraceID", Ae)), Ye ? ke = Ye : (ke = q.getPageviewId()["EagleEye-SessionID"], Ee[0].headers.append("EagleEye-SessionID", ke)), it || Ee[0].headers.append("EagleEye-pAppName", Be);
                        break;
                      case "b3":
                        var Ve, st = Ee[0].headers.get("X-B3-TraceId"), Ae = st || (Ve = q.getB3TraceId(Ge), Ee[0].headers.append("X-B3-TraceId", Ve["X-B3-TraceId"]), Ee[0].headers.append("X-B3-ParentSpanId", Ve["X-B3-ParentSpanId"]), Ee[0].headers.append("X-B3-SpanId", Ve["X-B3-SpanId"]), Ee[0].headers.append("X-B3-Sampled", Ve["X-B3-Sampled"]), Ee[0].headers.append("X-Request-ID", B.guid()), Ve["X-B3-TraceId"]), ke = q.pageview;
                        break;
                      default:
                        var lt = Ee[0].headers.get("uber-trace-id");
                        Ae = lt ? lt.split(":")[0] : (lt = q.getUberTraceId(Ge), Ee[0].headers.append("uber-trace-id", lt["uber-trace-id"]), lt.traceId), ke = q.pageview;
                    }
                  } catch (Ze) {
                    B.warn(`[retcode] fetch failed to set header, exception is :
` + Ze);
                  }
                  else switch (Se.headers = Se.headers || {}, ot) {
                    case "arms":
                      Se.headers["EagleEye-TraceID"] ? Ae = Se.headers["EagleEye-TraceID"] : (Ae = q.getTraceId()["EagleEye-TraceID"], Se.headers["EagleEye-TraceID"] = Ae), Se.headers["EagleEye-SessionID"] ? ke = Se.headers["EagleEye-SessionID"] : (ke = q.getPageviewId()["EagleEye-SessionID"], Se.headers["EagleEye-SessionID"] = ke), Se.headers["EagleEye-pAppName"] || (Se.headers["EagleEye-pAppName"] = Be);
                      break;
                    case "b3":
                      Ae = Se.headers["X-B3-TraceId"] || (De = q.getB3TraceId(Ge), Se.headers["X-B3-TraceId"] = De["X-B3-TraceId"], Se.headers["X-B3-ParentSpanId"] = De["X-B3-ParentSpanId"], Se.headers["X-B3-SpanId"] = De["X-B3-SpanId"], Se.headers["X-B3-Sampled"] = De["X-B3-Sampled"], Se.headers["X-Request-ID"] = B.guid(), De["X-B3-TraceId"]), ke = q.getPageviewId()["EagleEye-SessionID"];
                      break;
                    default:
                      Ae = Se.headers["uber-trace-id"] ? Se.headers["uber-trace-id"].split(":")[0] : (De = q.getUberTraceId(Ge), Se.headers["uber-trace-id"] = De["uber-trace-id"], De.traceId), ke = q.getPageviewId()["EagleEye-SessionID"];
                  }
                }
                return he.apply(de, Ee).then(function(rt) {
                  if (!q || !q.api) return rt;
                  try {
                    if (rt && typeof rt.clone == "function") {
                      var Ze = rt.clone(), ut = Ze.headers;
                      if (ut && typeof ut.get == "function") {
                        var pt, ht = ut.get("content-type");
                        if (ht && !/(text)|(json)/.test(ht)) return rt;
                        Ae || typeof (pt = B.parseFetchHeaders(ut)) == "object" && pt["eagleeye-traceid"] && (Ae = pt["eagleeye-traceid"], qe = "response");
                      }
                      var ft = ce();
                      Ze.text().then(function(ct) {
                        !Ae && B.isFunction(Oe) && (dt = Oe(Ze, ct)) && B.isString(dt) && (Ae = dt);
                        var dt = B.getFetchSnapshot(Ee, ct, ut);
                        Ze.ok ? ge(q, Z.parseResponse, we, fe, ct, Ze.status || 200, ft, z, Ae, ke, dt, qe, Ge) : (q.api(we, !1, ft, Ze.status || 404, Ze.statusText, z, Ae, ke, dt, te, qe, Ge), Z.enableResource && J.fixResourceStatus && J.fixResourceStatus({ src: Ze.url, res_type: "api" }));
                      });
                    }
                    return rt;
                  } catch (ct) {
                    return B.warn("[ARMS] fetch response error :", ct), rt;
                  }
                }).catch(function(rt) {
                  var Ze;
                  throw q && q.api && (Ze = ce(), q.api(we, !1, Ze, rt.name || "Error", rt.message, z, Ae, ke, {}, te), Z.enableResource) && J.fixResourceStatus && J.fixResourceStatus({ src: fe, res_type: "api" }), rt;
                });
              }, de[X].toString = B.createFakeToString(X)), typeof de[ue] == "function" && (Te = de[ue], de[se] = Te, (ye = function(xe) {
                var Se, Ee, q, z, Z, ce, fe, we, Oe, Le, Ae, ke, Be, qe, Je, ot, Ge, De = new Te(xe), Xe = J;
                return Xe && Xe.api && De.addEventListener && (Z = De.send, ce = De.open, fe = De.setRequestHeader, we = Xe._conf, Oe = (we.ignore || {}).ignoreApis, Le = we.parseTraceId, Ae = Xe.getConfig("enableLinkTrace"), qe = Be = ke = "", Je = null, xe = Xe.getConfig("sample"), ot = Xe.getConfig("linkType"), Ge = 1, xe && !Xe.sampling(xe) && (Ge = 0), De.open = function(Ye, it) {
                  if (me = Ye, Ye = arguments.length === 1 ? [Ye] : Array.apply(null, arguments), ce.apply(De, Ye), z = it || "", q = B.cutUrlSearch(z), Ye = !B.checkAPI(q, !0) || B.ignoreByRule(q, Oe), q = q ? B.filterByRule(q, z, we.ignoreApiPath || we.apiHelper) : "", !Ye && Ae) {
                    it = "";
                    try {
                      it = location.origin || location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
                    } catch {
                      it = "";
                    }
                    if (Ye = B.checkSameOrigin(z, it), (Xe.getConfig("enableApiCors") || Ye) && fe && typeof fe == "function") switch (ot) {
                      case "arms":
                        ke = Xe.getTraceId()["EagleEye-TraceID"], fe.apply(De, ["EagleEye-TraceID", ke]), Be = Xe.getPageviewId()["EagleEye-SessionID"], fe.apply(De, ["EagleEye-SessionID", Be]), qe = Xe.getConfig("pid"), fe.apply(De, ["EagleEye-pAppName", qe]);
                        break;
                      case "b3":
                        var Ve = Xe.getB3TraceId(Ge);
                        fe.apply(De, ["X-B3-TraceId", Ve["X-B3-TraceId"]]), fe.apply(De, ["X-B3-ParentSpanId", Ve["X-B3-ParentSpanId"]]), fe.apply(De, ["X-B3-SpanId", Ve["X-B3-SpanId"]]), fe.apply(De, ["X-B3-Sampled", Ve["X-B3-Sampled"]]), fe.apply(De, ["X-Request-ID", B.guid()]), ke = Ve["X-B3-TraceId"], Be = Xe.getPageviewId()["EagleEye-SessionID"];
                        break;
                      default:
                        Ve = Xe.getUberTraceId(Ge), fe.apply(De, ["uber-trace-id", Ve["uber-trace-id"]]), ke = Ve.traceId, Be = Xe.getPageviewId()["EagleEye-SessionID"];
                    }
                  }
                }, De.send = function() {
                  Se = Date.now(), Ee = B.duration();
                  var Ye = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
                  Z.apply(De, Ye);
                }, B.on(De, "readystatechange", function() {
                  if (q && De.readyState === 4) {
                    var Ye = Ee(), it = B.getXhrSnapshot(z, me, De);
                    if (ke || typeof (Ve = B.parseXhrHeaders(typeof De.getAllResponseHeaders == "function" && De.getAllResponseHeaders() || "")) == "object" && Ve["eagleeye-traceid"] && (ke = Ve["eagleeye-traceid"], Je = "response"), !ke && B.isFunction(Le) && (Ve = Le(De)) && B.isString(Ve) && (ke = Ve), 200 <= De.status && De.status <= 299) {
                      var Ve = De.status || 200;
                      if (typeof De.getResponseHeader == "function") {
                        var st = De.getResponseHeader("Content-Type");
                        if (st && !/(text)|(json)/.test(st)) return;
                      }
                      De.responseType && De.responseType !== "text" ? Xe.api(q, !0, Ye, Ve, "", Se, ke, Be, {}, te, Je, Ge) : ge(Xe, we.parseResponse, q, z, De.responseText, Ve, Ye, Se, ke, Be, it, Je, Ge);
                    } else Xe.api(q, !1, Ye, De.status || "FAILED", De.statusText, Se, ke, Be, it, te, Je, Ge), we.enableResource && J.fixResourceStatus && J.fixResourceStatus({ src: De.responseURL || z, res_type: "api" });
                  }
                })), De;
              }).prototype = Te.prototype, B.each(Object.keys(Te), function(xe) {
                ye[xe] = Te[xe];
              }), de[ue] = ye, de[ue].toString = B.createFakeToString(ue))), J = this), this;
              var me, Te, ye, he;
            }, initHook: function() {
              return this.hasInitHook || (this.getConfig("disableHook") || this.addHook(), this.hasInitHook = !0), this;
            } }), ae;
          }), k;
        }
        function _e() {
          return ee || (ee = 1, W = function(ae, de) {
            function ge(Y, se) {
              var ue;
              de.CustomEvent ? ue = new CustomEvent(Y, { detail: se }) : ((ue = X.createEvent("HTMLEvents")).initEvent(Y, !1, !0), ue.detail = se), de.dispatchEvent(ue);
            }
            function B(Y) {
              var se = te[Y];
              typeof se == "function" && (te[Y] = function(ye, pe, me) {
                var ye = arguments.length === 1 ? [ye] : Array.apply(null, arguments), Te = location.href, ye = se.apply(te, ye);
                if (me && typeof me == "string" && me !== Te) try {
                  var he = Te.split("#"), xe = me.split("#"), Se = J.cutUrlSearch(he[0]), Ee = J.cutUrlSearch(xe[0]), q = he[1] && he[1].replace(/^\/?(.*)/, "$1"), z = xe[1] && xe[1].replace(/^\/?(.*)/, "$1");
                  q !== z ? ge("historystatechange", z) : Se !== Ee && ge("historystatechange", Ee);
                } catch (Z) {
                  J.warn("[retcode] error in " + Y + ": " + Z);
                }
                return ye;
              }, te[Y].toString = J.createFakeToString(Y));
            }
            var J = g(), te = de.history || {}, X = de.document;
            J.ext(ae.prototype, { hackHistoryState: function() {
              return this.hasHackedHistoryState || (B("pushState"), B("replaceState"), this.hasHackedHistoryState = !0), this;
            } });
          }), W;
        }
        function Ce() {
          var ae, de;
          return ne || (ne = 1, ae = g(), de = G().TIMING_KEYS, re = function(ge, B) {
            var J = "_resource-" + Date.now(), te = "_resource_error-" + Date.now();
            ae.ext(ge.prototype, { initResource: function() {
              var X, Y = this, se = B.performance, ue = B.PerformanceObserver;
              return Y[te] || (Y[te] = /* @__PURE__ */ new WeakMap()), se && ue && typeof se == "object" && typeof se.getEntriesByType == "function" ? (X = se.getEntriesByType("resource") || [], setTimeout(function() {
                Y.setResource(X);
              }, 10), new ue(function(pe) {
                setTimeout(function() {
                  Y.setResource(pe.getEntries());
                }, 10);
              }).observe({ entryTypes: ["resource"] }), this.onReady(function() {
                setTimeout(Y.resourceComboReport.bind(Y), 5e3);
              }), Y) : null;
            }, setResource: function(X) {
              var Y = this._conf, se = this[te];
              if (ae.isArray(X) && X.length) {
                this[J] || (this[J] = {});
                for (var ue = this[J], pe = 0, me = X.length; pe < me; pe += 1) {
                  var Te, ye = X[pe];
                  ae.checkAPI(ye.name, !1) && (ye = ((he, xe, Se) => {
                    if (he instanceof B.PerformanceResourceTiming && he.initiatorType) {
                      var Ee, q, z, Z, ce, fe, we, Oe, Le, Ae = ae.getResType(he.initiatorType, he.name), ke = xe.resourceTypes || [], Be = (xe.ignore || {}).ignoreResources;
                      if (Ae && ke.includes(Ae) && !ae.ignoreByRule(he.name, Be) && !ae.ignoreByRule(ae.decode(he.name), Be)) return ke = he[de[0]], Be = he[de[1]], Ee = he[de[2]], q = he[de[3]], z = he[de[4]], Z = he[de[5]], ce = he[de[6]], fe = he[de[7]], we = he[de[8]], Oe = he[de[18]], Le = he[de[19]], (Se.has(he) || ae.areInOrder(ke, Be, Ee, q, z, Z, ce, fe, we) && !(fe < ke)) && ae.areInOrder(ke, Oe = Oe < ke ? ke : Oe, Le = Le < ke ? Be : Le, Be) ? { domain: ae.getURL(he.name).domain, res_type: Ae, src_type: ae.getSrcType(he.name, xe.cdnHostList), success: 1, size: Math.round(he.decodedBodySize), duration: Math.round(he.duration), timeStamp: he.responseEnd, timing: he } : void 0;
                    }
                  })(ye, Y, se)) && ((Te = ye.res_type + "-" + ye.domain) in ue || (ue[Te] = []), ue[Te].push(ye));
                }
                return this;
              }
            }, fixResourceStatus: function(X) {
              var Y, se, ue = B.performance;
              return ue && typeof ue.getEntriesByName == "function" ? (Y = this[te], X.src && ae.checkAPI(X.src, !1) && (se = X.timeStamp || ue.now(), ue = ue.getEntriesByName(X.src, "resource"), ae.each(ue, function(pe) {
                Y.has(pe) || se - pe.responseEnd < 100 && Y.set(pe, { success: 0 });
              })), this) : null;
            }, resourceComboReport: function() {
              var X, Y, se = this[J] || {}, ue = this._conf.resourceSlow || 2e3, pe = this[te], me = (this[J] = {}, Object.keys(se));
              me.length !== 0 && (X = [], ae.each(me, function(ye) {
                var ye = se[ye], he = { domain: "", res_type: "", src_type: "", size: 0, duration: 0, count: 0, err_count: 0, err_duration: 0, slow_count: 0, slow_duration: 0, timings: [] };
                ae.each(ye, function(xe) {
                  var Se = xe.timing || {}, Ee = pe.get(xe.timing), Ee = Ee ? Ee.success : 1, q = xe.duration > ue ? 1 : 0;
                  he.domain = xe.domain, he.res_type = xe.res_type, he.src_type = xe.src_type, he.count += 1, he.duration += xe.duration, he.size += xe.size, Ee || (he.err_count += 1, he.err_duration += xe.duration), q && (he.slow_count += 1, he.slow_duration += xe.duration);
                  try {
                    var z = JSON.parse(JSON.stringify(Se));
                    z.success = Ee, z.resourceSlow = ue, z.isSlow = q, he.timings.push(z);
                  } catch {
                  }
                }), he.count && (he.size = Math.round(he.size / he.count), he.duration = Math.round(he.duration / he.count)), he.slow_count && (he.slow_duration = Math.round(he.slow_duration / he.slow_count)), he.err_count && (he.err_duration = Math.round(he.err_duration / he.err_count)), 20 < he.timings.length && (he.timings.sort(function(xe, Se) {
                  return Se.duration - xe.duration;
                }), he.timings.length = 20), he.timings = encodeURIComponent(JSON.stringify(he.timings)), X.push(he);
              }), me = { _combo: 1, resource: JSON.stringify(X) }, Y = B.navigator.connection, me.ct = Y ? Y.effectiveType || Y.type : "", (Y = 999 < (Y = Y && (Y.downlink || Y.downlinkMax || Y.bandwidth) || null) ? 999 : Y) && (me.bandwidth = Y), this._lg("resource", me, this.getConfig("sample")));
            } });
          }), re;
        }
        function Fe() {
          var ae, de, ge, B, J, te, X, Y, se, ue, pe, me, Te, ye, he, xe, Se, Ee;
          return le || (le = 1, ae = g(), b || (b = 1, ye = g(), he = T(), xe = ["api", "success", "time", "code", "msg", "trace", "traceId", "begin", "pv_id", "sid", "seq", "domain", "flag", "apiSnapshot", "tag", "c1", "c2", "c3"], Se = function(q) {
            var z = (q.key || "default").split("::");
            return 1 < z.length ? ye.ext(q, { group: z[0], key: z[1] }) : ye.ext(q, { group: "default_group", key: z[0] });
          }, (Ee = function(q) {
            var z;
            he.call(this, q);
            try {
              z = typeof performance == "object" ? performance.timing.fetchStart : Date.now();
            } catch {
              z = Date.now();
            }
            return this._startTime = z, this;
          }).prototype = ye.createObject(he.prototype), ye.ext(he.dftCon, { startTime: null }), ye.ext(Ee.prototype, { constructor: Ee, _super: he, sum: function(q, z, Z) {
            try {
              var ce = ye.dealParam(q, z, 1);
              return this._lg("sum", Se(ce), Z);
            } catch (fe) {
              ye.warn("[retcode] can not get parseStatData: " + fe);
            }
          }, avg: function(q, z, Z) {
            try {
              var ce = ye.dealParam(q, z, 0);
              return this._lg("avg", Se(ce), Z);
            } catch (fe) {
              ye.warn("[retcode] can not get parseStatData: " + fe);
            }
          }, percent: function(q, z, Z, ce) {
            try {
              return this._lg("percent", Se({ key: q, subkey: z, val: Z || 0, begin: Date.now() }), ce);
            } catch (fe) {
              ye.warn("[retcode] can not get parseStatData: " + fe);
            }
          }, msg: function(q, z) {
            if (q && !(180 < q.length)) return this.custom({ msg: q }, z);
          }, error: function(q, z) {
            if (!q) return ye.warn("[retcode] invalid param e: " + q), this;
            arguments.length === 1 ? (typeof q == "string" && (q = { message: q }, z = {}), typeof q == "object" && (z = q = q.error || q)) : (typeof q == "string" && (q = { message: q }), typeof z != "object" && (z = {}));
            var Z, ce = q.name || "CustomError", fe = q.message || "", we = q.stack || "", Oe = (z = z || {}, typeof location == "object" && typeof location.href == "string" && location.href.substring(0, 500) || "");
            if (ye.checkSDKError(fe, z.filename)) return Z = q.msg || q.message, ye.ignoreByRule(Z, qe = /^Script error\.?$/) || ye.ignoreByRule(ye.decode(Z), qe) ? this : (Z = { msg: ye.selfErrKey, err: { msg_raw: ye.encode(q.msg || q.message) } }, this._self("error", Z, 1));
            for (var Le = { begin: Date.now(), cate: ce, msg: fe && fe.substring(0, 1e3), stack: we && we.substring(0, 1e3), file: ye.removeUrlSearch(z.filename || ""), line: z.lineno || "", col: z.colno || "", err: { msg_raw: ye.encode(fe), stack_raw: ye.encode(we) }, dl: Oe }, Ae = ["tag", "c1", "c2", "c3"], ke = 0; ke < Ae.length; ke++) {
              var Be = Ae[ke];
              z[Be] && (Le[Be] = z[Be]);
            }
            var qe = (this.getConfig("ignore") || {}).ignoreErrors;
            return ye.ignoreByRule(Le.msg, qe) || ye.ignoreByRule(ye.decode(Le.msg), qe) ? this : (this.beforeSend && this.beforeSend("error", Le), this._lg("error", Le, 1));
          }, behavior: function(q) {
            if (q) return q = typeof q == "object" && q.behavior ? q : { behavior: q }, this.beforeSend && this.beforeSend("behavior", q), this._lg("behavior", q, 1);
          }, api: function(q, z, Z, ce, fe, we, Oe, Le, Ae, ke, Be, qe, Je, ot, Ge, De) {
            return q ? (q = typeof q == "string" ? { api: q, success: z, time: Z, code: ce, msg: fe, begin: we, traceId: Oe, pv_id: Le, apiSnapshot: Ae, domain: ke, flag: qe, tag: Je, c1: ot, c2: Ge, c3: De } : ye.sub(q, xe), ye.checkAPI(q.api, !0) ? (q.code = q.code || "", z = q.msg || "", z = typeof z == "string" ? z.substring(0, 1e3) : z, q.msg = z, q.success = q.success ? 1 : 0, q.time = +q.time, q.begin = q.begin, q.traceId = q.traceId || "", q.pv_id = q.pv_id || "", q.domain = q.domain || "", q.flag = q.flag, q.dl = typeof location == "object" && typeof location.href == "string" && location.href.substring(0, 500) || "", q.apiSnapshot && (typeof q.apiSnapshot == "object" && (q.apiSnapshot = JSON.stringify(q.apiSnapshot)), typeof q.apiSnapshot != "string" && delete q.apiSnapshot, 2e3 < q.apiSnapshot.length) && (q.apiSnapshot = q.apiSnapshot.substring(0, 2e3)), Be && (q.traceOrigin = Be), !q.api || isNaN(q.time) ? (ye.warn("[retcode] invalid time or api"), this) : (Z = (this.getConfig("ignore") || {}).ignoreApis, ye.ignoreByRule(q.api, Z) || ye.ignoreByRule(ye.decode(q.api), Z) || q.time < 0 ? this : (this.beforeSend && this.beforeSend("api", q), this._lg("api", q, q.success && this.getConfig("sample"), q.flag)))) : this) : (ye.warn("[retcode] api is null"), this);
          }, speed: function(q, z, Z) {
            var ce = this, fe = this.getConfig("startTime") || this._startTime;
            return /^s(\d|1[0])$/.test(q) ? (z = typeof z != "number" ? Date.now() - fe : fe <= z ? z - fe : z, ce.speedCache = ce.speedCache || {}, ce.speedCache[q] = z, ce.speedCache.begin = fe, clearTimeout(ce.speedTimmer), ce.speedTimmer = setTimeout(function() {
              Z || (ce.speedCache.page = ce.getPage(!0)), ce._lg("speed", ce.speedCache), ce.speedCache = null;
            }, 5e3)) : ye.warn("[retcode] invalid point: " + q), ce;
          }, performance: function(q) {
            if (q && typeof q == "object" && !this.hasSendPerf) {
              var z, Z = {}, ce = {}, fe = this.getConfig("autoSendPerf");
              if (q.autoSend && fe) return ce = ye.ext(this.perfData || {}, q), this.hasSendPerf = !0, this._lg("perf", ce, this.getConfig("sample"));
              if (q.autoSend && !fe) return delete q.autoSend, this.perfData ? (ce = ye.ext(this.perfData || {}, q), this.hasSendPerf = !0, this._lg("perf", ce, this.getConfig("sample"))) : void (this.perfData = q);
              for (z in q) !/^t([1-9]|1[0])$/.test(z) && z !== "ctti" && z !== "cfpt" || (Z[z] = q[z]);
              if (q.autoSend === !0 || !fe && this.perfData) return q.autoSend !== !0 && fe === !1 && this.perfData ? (Z = ye.ext(this.perfData || {}, Z), this.hasSendPerf = !0, this._lg("perf", Z, this.getConfig("sample"))) : void 0;
              this.perfData = ye.ext(this.perfData || {}, Z);
            }
          }, resource: function(q, z) {
            if (!q || !ye.isPlainObject(q)) return ye.warn("[arms] invalid param data: " + q), this;
            var Z, ce = Object.keys(q), fe = ["begin", "dom", "load", "res", "dl"], we = !1;
            for (Z in fe) if (ce.indexOf(fe[Z]) < 0) {
              we = !0;
              break;
            }
            return we ? (ye.warn("[arms] lack param data: " + q), this) : (q = { begin: q.begin || Date.now(), dom: q.dom || "", load: q.load || "", res: ye.isArray(q.res) ? JSON.stringify(q.res) : JSON.stringify([]), dl: q.dl || "" }, this._lg("res", q, z));
          }, event: function(q, z) {
            if (typeof q == "object" && q && q.key) {
              var Z, ce = {}, fe = ["key", "success", "time", "c1", "c2", "c3"];
              for (Z in q) -1 < fe.indexOf(Z) && (ce[Z] = q[Z]);
              ce.success = q.success === !1 ? 0 : 1, this._lg("event", ce, z);
            }
          } }), Ee._super = he, (Ee._root = he).Reporter = Ee, S.exports = Ee), de = S.exports, C || (C = 1, pe = g(), me = typeof window == "object" ? window : {}, Te = typeof (Te = me.__oFetch_ || me.fetch) == "function" ? Te : void 0, R.exports = function(q, fe) {
            var Z, ce = -1, fe = (typeof q == "object" && (ce = q.z, q = pe.serialize(q)), fe + q);
            if (Te) return Te(fe, { method: "HEAD", mode: "no-cors" }).catch(pe.noop);
            me.document && me.document.createElement && ((q = me[Z = "__request_hold_" + ce] = new Image()).onload = q.onerror = function() {
              me[Z] = void 0;
            }, q.src = fe);
          }), ge = R.exports, E || (E = 1, se = g(), Ee = typeof window == "object" ? window : {}, ue = typeof (ue = Ee.__oXMLHttpRequest_ || Ee.XMLHttpRequest) == "function" ? ue : void 0, N.exports = function(q, z) {
            try {
              var Z = new ue();
              Z.open("POST", z, !0), Z.setRequestHeader("Content-Type", "text/plain"), Z.send(JSON.stringify(q));
            } catch (ce) {
              se.warn(`[retcode] Failed to log, exception is :
` + ce);
            }
          }), B = N.exports, J = ae.win, te = J.document, X = /^(error|api|speed|sum|avg|percent|custom|msg|setPage|setConfig|behavior|performance)$/, (Y = function(q) {
            var z = this;
            return de.call(z, q), z._initialPage = q.page && ae.safetyCall(q.page, [], q.page + "") || null, z._isRobot = ae.isRobot(), z._health = { errcount: 0, apisucc: 0, apifail: 0 }, !(z.beforeSend = function(Z, ce) {
              Z === "error" ? z._health.errcount++ : Z === "api" && z._health[ce.success ? "apisucc" : "apifail"]++;
            }) !== q.enableInstanceAutoSend && (z.initHandler(), z.initHook(), z.initFmpObserver(1e4), z._conf && z._conf.behavior && typeof z.initBehavior == "function" && z.initBehavior(), z._conf) && z._conf.enableResource && typeof z.initResource == "function" && z.initResource(), Object.defineProperty && J.addEventListener && Object.defineProperty(z, "pipe", { set: z.sendPipe }), z;
          }).prototype = ae.createObject(de.prototype), ae.ext(de._root.dftCon, { uid: null, setUsername: null, ignoreUrlPath: null, ignoreApiPath: null, urlHelper: [{ rule: /\/([a-z\-_]+)?\d{2,20}/g, target: "/$1**" }, /\/$/], resourceHelper: [], apiHelper: { rule: /\/([a-z\-_]+)?\d{2,20}/g, target: "/$1**" }, ignoreUrlCase: !0, imgUrl: "https://arms-retcode.aliyuncs.com/r.png?", cdnHostList: [], resourceTypes: ["css", "script", "img", "font"], resourceSlow: 2e3, disableHook: !1, autoSendPv: !0, autoSendPerf: !0, enableSPA: !1, enableLinkTrace: !1, linkType: "arms", enableApiCors: !1, sendResource: !0, behavior: !0, enableConsole: !1, parseHash: function(q) {
            return (q ? ae.cutUrlSearch(q.replace(/^#\/?/, "")) : "") || "[index]";
          }, parseResponse: function(q) {
            var z;
            return q && typeof q == "object" ? (z = q.code, typeof (q = q.msg || q.message || q.subMsg || q.errorMsg || q.ret || q.errorResponse || "") == "object" && (z = z || q.code, q = q.msg || q.message || q.info || q.ret || JSON.stringify(q)), { msg: q, code: z, success: !0 }) : {};
          } }), ae.ext(Y.prototype, { constructor: Y, _super: de, onReady: function(q) {
            var z = this;
            if (z.hasReady) return q();
            te.readyState === "complete" ? (z.hasReady = !0, q()) : ae.on(J, "load", function() {
              z.hasReady = !0, q();
            }, !0);
          }, getPage: function(q) {
            var z = this._conf, Z = z.page, ce = location, fe = ce.host + ce.pathname;
            return Z && !q ? ae.safetyCall(Z, [], Z + "") : this._initialPage || ae.filterByRule(z.ignoreUrlCase ? fe.toLowerCase() : fe, ce.href, z.ignoreUrlPath || z.urlHelper);
          }, setPage: function(q, z) {
            var Z = this, ce = Z.prevPage;
            if (z !== !1) {
              if (!q || q === ce) return Z;
              Z.prevPage = q, clearTimeout(Z.sendPVTimmer), Z.handleUnload(1), Z.resetPageview(), Z.sendPVTimmer = setTimeout(function() {
                Z.sendPV();
              }, 10);
            } else Z.prevPage = q;
            return Z._conf.page = q, Z;
          }, setConfig: function(q, z) {
            var Z;
            q && typeof q == "object" && (ae.verifyConfig(q), q = this.setImgUrl(q), Z = this._conf, this._conf = ae.ext({}, Z, q), z || ((z = "disableHook") in q && Z[z] !== q[z] && (q[z] ? this.removeHook() : this.addHook()), (z = "enableSPA") in q && Z[z] !== q[z] && this.bindHashChange(q[z])));
          }, sendRequest: function(q) {
            ge(q, this.getConfig("imgUrl"));
          }, postData: function(q, ce) {
            var Z = {}, ce = (Z[ce] = q[ce], delete q[ce], "");
            typeof q == "object" && (ce = ae.serialize(q)), B(Z, this.getConfig("imgUrl") + ce + "&post_res=");
          }, sendPipe: function(q) {
            var z, Z = this;
            if (!q || !q.length) return Z;
            try {
              return ae.T(q[0]) === "Array" ? ae.each(q, function(ce) {
                return Z.sendPipe(ce);
              }) : ae.T(q) === "Array" && (z = q.shift(), X.test(z)) ? void Z[z].apply(Z, q) : Z;
            } catch (ce) {
              return ae.warn("[retcode] error in sendPipe", ce), Z;
            }
          }, sendHealth: function() {
            var q = ae.ext({}, this._health), z = (q.healthy = 0 < q.errcount ? 0 : 1, q.begin = Date.now(), q.begin - this.sBegin);
            q.stay = z, this._lg("health", q, 1), this._health = { errcount: 0, apisucc: 0, apifail: 0 };
          }, createInstance: function(q) {
            q = ae.ext({ pid: this._conf.pid }, q);
            var z = this.__proto__.constructor(q);
            return q.page && z.sendPV(), z;
          } }), O()(Y, J), ie()(Y, J, te), ve()(Y, J, te), Pe()(Y, J), _e()(Y, J), Ce()(Y, J), Y._super = de, Y._root = de._root, de.Browser = Y, l.exports = Y), l.exports;
        }
        var He = { getArmsLogger: function() {
          return K || (K = 1, de = window, ge = de.BrowserLogger = Fe(), B = g().key, J = "__hasInitBlSdk", ge.singleton = function(Y, se) {
            return de[J] ? de[B] : ae(Y, se);
          }, ge.createExtraInstance = function(se) {
            se && typeof se == "object" && se.enableInstanceAutoSend !== !0 && (se.enableInstanceAutoSend = !1);
            var se = new ge(se), ue = se._conf;
            return ue.enableInstanceAutoSend && (ue.autoSendPv !== !1 && se.sendPV(), ue && ue.useFmp || se.sendPerformance(), ue) && ue.sendResource && se.sendResources(), se;
          }, typeof window == "object" && window.navigator && de[B] && (ge.bl = de[J] ? de[B] : (te = {}, X = [], B in de && (te = de[B].config || {}, X = de[B].pipe || []), ae(te, X))), h.exports = ge), h.exports;
          function ae(Y, se) {
            return Y = de[B] = new ge(Y), Y.sendPipe(se), se = Y._conf, se.autoSendPv !== !1 && Y.sendPV(), se && se.useFmp || Y.sendPerformance(), se && se.sendResource && Y.sendResources(), de[J] = !0, Y;
          }
          var de, ge, B, J, te, X;
        } };
        let be = "https://arms-retcode.aliyuncs.com/r.png?", Re = "https://arms-retcode-sg.aliyuncs.com/r.png?", Ie = "https://retcode-us-west-1.arms.aliyuncs.com/r.png?", Ne = "e1iftji1w7@7ec1cef2cc88733", Me = "e1iftji1w7@10a06d1ec260adc", ze = "e1iftji1w7@10a06d1ec260adc", Ue = { cn: { reportUrl: be, pid: Ne }, "cn-hangzhou": { reportUrl: be, pid: Ne }, sg: { reportUrl: Re, pid: Me }, "ap-southeast-1": { reportUrl: Re, pid: Me }, usw: { reportUrl: Ie, pid: ze }, "us-west-1": { reportUrl: Ie, pid: ze } }, Qe = (ae) => ae !== null && typeof ae == "object", Ke = (ae) => Object.prototype.toString.call(ae).slice(8, -1), at = (ae) => !!Object.isExtensible(ae) && Ke(ae) === "Object";
        function tt(ae, de) {
          if (typeof ae == "string" && (de = ae.indexOf(de), !(de < 0)))
            return (ae = ae.indexOf(`
`)) < 0 || de < ae;
        }
        function $e(ae, de, ge) {
          {
            if (typeof ae == "function") return Y = de + 1, se = ge, ue = { MediaboxWrapperFunctionApply(pe, me, Te) {
              let ye;
              try {
                ye = Reflect.apply(pe, me, Te);
              } catch (he) {
                throw se(he), he;
              }
              return $e(ye, Y, se);
            }, MediaboxWrapperFunctionGet(pe, me) {
              var Te = Object.getOwnPropertyDescriptor(pe, me);
              return !Te || Te.writable || Te.configurable ? $e(pe[me], Y, se) : pe[me];
            }, MediaboxWrapperClassConstructor(pe, me) {
              let Te;
              try {
                Te = new pe(...me);
              } catch (ye) {
                throw se(ye), ye;
              }
              return $e(Te, Y, se);
            } }, new Proxy(ae, { apply: ue.MediaboxWrapperFunctionApply, get: ue.MediaboxWrapperFunctionGet, construct: ue.MediaboxWrapperClassConstructor });
            if (ae instanceof Promise) return ae.then((pe) => $e(pe, de + 1, ge)).catch((pe) => (ge(pe), Promise.reject(pe)));
            if (Array.isArray(ae)) ae.forEach((pe, me) => {
              ae[me] = $e(pe, de + 1, ge);
            });
            else if (Qe(ae) && at(ae)) {
              ue = ae;
              var B = de + 1, J = ge, te;
              if (Reflect.get(ue, "__v_skip") === !0) return ue;
              let pe = [], me = typeof Object.getOwnPropertyDescriptors == "function" ? Object.getOwnPropertyDescriptors((X = Object.getPrototypeOf(ue)) != null ? X : {}) : {};
              for (te of Object.keys(me)) me[te].get && pe.push(te);
              var X = { MediaboxWrapperObjectGetter(Te, ye) {
                if (typeof ye == "string" && -1 < pe.indexOf(ye)) {
                  let xe;
                  try {
                    xe = Te[ye];
                  } catch (Se) {
                    throw J(Se), Se;
                  }
                  return $e(xe, B, J);
                }
                var he;
                return !(10 < B) && (!(he = Reflect.getOwnPropertyDescriptor(Te, ye)) || he.writable || he.configurable) ? $e(Te[ye], B, J) : Te[ye];
              }, MediaboxWrapperObjectSetter(Te, ye, he) {
                return Te[ye] = $e(he, B, J), !0;
              } };
              return Object.defineProperty(ue, "__v_skip", { configurable: !0, enumerable: !1, writable: !1, value: !0 }), new Proxy(ue, { get: X.MediaboxWrapperObjectGetter, set: X.MediaboxWrapperObjectSetter });
            }
            return ae;
          }
          var Y, se, ue;
        }
        function nt(ae) {
          return typeof ae == "string" && (-1 < ae.indexOf("g.alicdn.com/apsara-media-") || -1 < ae.indexOf("g.alicdn.com/thor-server") || -1 < ae.indexOf("MediaboxWrapper"));
        }
        class et extends Error {
          constructor(de) {
            super(de), this.name = "MQTError";
          }
        }
        let je = 1;
        class We {
          constructor(de) {
            var ge, B;
            y(this, "armsLogger"), y(this, "isReady", !1), y(this, "isDestroyed", !1), y(this, "options"), y(this, "queue", []), y(this, "marker"), y(this, "helper", { MediaboxWrapperQueue(J) {
              return new et(J);
            }, MediaboxWrapperInitiative(J) {
              return new et(J);
            } }), this.options = (B = p({}, de), de = { region: de.deferRegionSet ? void 0 : (ge = de.region) != null ? ge : "cn", env: (ge = de.env) != null ? ge : "prod" }, a(B, s(de))), this.marker = `-${je++}-`, this.initArmsLogger();
          }
          static get version() {
            return "0.26.0";
          }
          initArmsLogger(de) {
            var { region: ge, env: B, disabled: J } = this.options;
            if (!J && !this.armsLogger) {
              if (de && !ge) throw new Error("region is required");
              if (ge) {
                if (!Ue[ge]) throw new Error(`region ${ge} is not supported`);
                J = He.getArmsLogger(), this.armsLogger = J.createExtraInstance({ enableInstanceAutoSend: !0, pid: Ue[ge].pid, tag: this.options.businessName, release: this.options.businessName + "_" + this.options.version, imgUrl: Ue[ge].reportUrl, behavior: !0, sample: 1, disableHook: !0, environment: B, beforeReport: (te) => {
                  var X;
                  if (!(this.isDestroyed || tt(te.stack, this.marker) || te.t !== "pv" && te.t !== "error" && te.t !== "health")) {
                    if (te.c1 = (X = this.options.cid) != null ? X : window.location.host, te.c2 = We.version, this.options.customData && (te.c3 = new URLSearchParams(this.options.customData).toString()), te.t !== "error") return te;
                    if (typeof (X = te.file) == "string" && (-1 < X.indexOf("g.alicdn.com/apsara-media-") || -1 < X.indexOf("g.alicdn.com/thor-server")) || nt(te.stack)) {
                      let Y = te;
                      return this.options.beforeSend && (Y = this.options.beforeSend(te)), this.isReady ? Y : (Y && this.queue.push(Y), !1);
                    }
                  }
                  return !1;
                } });
              }
            }
          }
          wrap(de) {
            return this.options.disabled || typeof Proxy > "u" ? de : $e(de, 0, (ge) => {
              var B, J;
              ge instanceof Error && typeof ge.stack == "string" && nt(ge.stack) && ((B = this.armsLogger) != null && B.error(ge), ge.stack = (B = ge.stack, ge = this.marker, typeof B != "string" ? ge : tt(B, ge) ? B : (J = B.indexOf(`
`)) < 0 ? "" + B + ge : "" + B.slice(0, J) + ge + B.slice(J)));
            });
          }
          updateOptions(de) {
            this.options = p(p({}, this.options), de);
          }
          setReady() {
            this.initArmsLogger(!0), this.isReady = !0, this.queue.length && this.queue.forEach((de) => {
              var ge;
              (ge = this.armsLogger) != null && ge.error(this.helper.MediaboxWrapperQueue(de.msg), { filename: de.file, lineno: de.line, colno: de.col });
            });
          }
          report(de, ge) {
            var B;
            (B = this.armsLogger) != null && B.error(this.helper.MediaboxWrapperInitiative(de), ge);
          }
          destroy() {
            this.isDestroyed = !0;
          }
        }
        x.MediaboxQualityTracer = We, x.default = We;
      }, {}], 2: [function(d, o, x) {
      }, {}], 3: [function(d, o, x) {
        (function(_) {
          (function() {
            var u, c;
            u = this, c = function() {
              var a, s = Math;
              if (typeof window < "u" && window.crypto && (a = window.crypto), typeof self < "u" && self.crypto && (a = self.crypto), !(a = !(a = !(a = typeof globalThis < "u" && globalThis.crypto ? globalThis.crypto : a) && typeof window < "u" && window.msCrypto ? window.msCrypto : a) && _ !== void 0 && _.crypto ? _.crypto : a) && typeof d == "function") try {
                a = d("crypto");
              } catch {
              }
              var t = Object.create || function(b) {
                return e.prototype = b, b = new e(), e.prototype = null, b;
              };
              function e() {
              }
              var n = {}, r = n.lib = {}, p = r.Base = { extend: function(b) {
                var S = t(this);
                return b && S.mixIn(b), S.hasOwnProperty("init") && this.init !== S.init || (S.init = function() {
                  S.$super.init.apply(this, arguments);
                }), (S.init.prototype = S).$super = this, S;
              }, create: function() {
                var b = this.extend();
                return b.init.apply(b, arguments), b;
              }, init: function() {
              }, mixIn: function(b) {
                for (var S in b) b.hasOwnProperty(S) && (this[S] = b[S]);
                b.hasOwnProperty("toString") && (this.toString = b.toString);
              }, clone: function() {
                return this.init.prototype.extend(this);
              } }, y = r.WordArray = p.extend({ init: function(b, S) {
                b = this.words = b || [], this.sigBytes = S ?? 4 * b.length;
              }, toString: function(b) {
                return (b || l).stringify(this);
              }, concat: function(b) {
                var S = this.words, w = b.words, T = this.sigBytes, C = b.sigBytes;
                if (this.clamp(), T % 4) for (var R = 0; R < C; R++) {
                  var E = w[R >>> 2] >>> 24 - R % 4 * 8 & 255;
                  S[T + R >>> 2] |= E << 24 - (T + R) % 4 * 8;
                }
                else for (var A = 0; A < C; A += 4) S[T + A >>> 2] = w[A >>> 2];
                return this.sigBytes += C, this;
              }, clamp: function() {
                var b = this.words, S = this.sigBytes;
                b[S >>> 2] &= 4294967295 << 32 - S % 4 * 8, b.length = s.ceil(S / 4);
              }, clone: function() {
                var b = p.clone.call(this);
                return b.words = this.words.slice(0), b;
              }, random: function(b) {
                for (var S = [], w = 0; w < b; w += 4) S.push((() => {
                  if (a) {
                    if (typeof a.getRandomValues == "function") try {
                      return a.getRandomValues(new Uint32Array(1))[0];
                    } catch {
                    }
                    if (typeof a.randomBytes == "function") try {
                      return a.randomBytes(4).readInt32LE();
                    } catch {
                    }
                  }
                  throw new Error("Native crypto module could not be used to get secure random number.");
                })());
                return new y.init(S, b);
              } }), h = n.enc = {}, l = h.Hex = { stringify: function(b) {
                for (var S = b.words, w = b.sigBytes, T = [], C = 0; C < w; C++) {
                  var R = S[C >>> 2] >>> 24 - C % 4 * 8 & 255;
                  T.push((R >>> 4).toString(16)), T.push((15 & R).toString(16));
                }
                return T.join("");
              }, parse: function(b) {
                for (var S = b.length, w = [], T = 0; T < S; T += 2) w[T >>> 3] |= parseInt(b.substr(T, 2), 16) << 24 - T % 8 * 4;
                return new y.init(w, S / 2);
              } }, g = h.Latin1 = { stringify: function(b) {
                for (var S = b.words, w = b.sigBytes, T = [], C = 0; C < w; C++) {
                  var R = S[C >>> 2] >>> 24 - C % 4 * 8 & 255;
                  T.push(String.fromCharCode(R));
                }
                return T.join("");
              }, parse: function(b) {
                for (var S = b.length, w = [], T = 0; T < S; T++) w[T >>> 2] |= (255 & b.charCodeAt(T)) << 24 - T % 4 * 8;
                return new y.init(w, S);
              } }, m = h.Utf8 = { stringify: function(b) {
                try {
                  return decodeURIComponent(escape(g.stringify(b)));
                } catch {
                  throw new Error("Malformed UTF-8 data");
                }
              }, parse: function(b) {
                return g.parse(unescape(encodeURIComponent(b)));
              } }, v = r.BufferedBlockAlgorithm = p.extend({ reset: function() {
                this._data = new y.init(), this._nDataBytes = 0;
              }, _append: function(b) {
                typeof b == "string" && (b = m.parse(b)), this._data.concat(b), this._nDataBytes += b.sigBytes;
              }, _process: function(H) {
                var S, w = this._data, T = w.words, C = w.sigBytes, R = this.blockSize, E = C / (4 * R), A = (E = H ? s.ceil(E) : s.max((0 | E) - this._minBufferSize, 0)) * R, H = s.min(4 * A, C);
                if (A) {
                  for (var N = 0; N < A; N += R) this._doProcessBlock(T, N);
                  S = T.splice(0, A), w.sigBytes -= H;
                }
                return new y.init(S, H);
              }, clone: function() {
                var b = p.clone.call(this);
                return b._data = this._data.clone(), b;
              }, _minBufferSize: 0 }), f = (r.Hasher = v.extend({ cfg: p.extend(), init: function(b) {
                this.cfg = this.cfg.extend(b), this.reset();
              }, reset: function() {
                v.reset.call(this), this._doReset();
              }, update: function(b) {
                return this._append(b), this._process(), this;
              }, finalize: function(b) {
                return b && this._append(b), this._doFinalize();
              }, blockSize: 16, _createHelper: function(b) {
                return function(S, w) {
                  return new b.init(w).finalize(S);
                };
              }, _createHmacHelper: function(b) {
                return function(S, w) {
                  return new f.HMAC.init(b, w).finalize(S);
                };
              } }), n.algo = {});
              return n;
            }, typeof x == "object" ? o.exports = x = c() : u.CryptoJS = c();
          }).call(this);
        }).call(this, typeof commonjsGlobal < "u" ? commonjsGlobal : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { crypto: 2 }], 4: [function(d, o, x) {
        var _, u;
        _ = this, u = function(c) {
          var a;
          return a = c.lib.WordArray, c.enc.Base64 = { stringify: function(s) {
            for (var t = s.words, e = s.sigBytes, n = this._map, r = (s.clamp(), []), p = 0; p < e; p += 3) for (var y = (t[p >>> 2] >>> 24 - p % 4 * 8 & 255) << 16 | (t[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255) << 8 | t[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, h = 0; h < 4 && p + 0.75 * h < e; h++) r.push(n.charAt(y >>> 6 * (3 - h) & 63));
            var l = n.charAt(64);
            if (l) for (; r.length % 4; ) r.push(l);
            return r.join("");
          }, parse: function(s) {
            var t = s.length, e = this._map;
            if (!(n = this._reverseMap)) for (var n = this._reverseMap = [], r = 0; r < e.length; r++) n[e.charCodeAt(r)] = r;
            for (var p, y, h = e.charAt(64), l = (h && (h = s.indexOf(h)) !== -1 && (t = h), s), g = t, m = n, v = [], f = 0, b = 0; b < g; b++) b % 4 && (p = m[l.charCodeAt(b - 1)] << b % 4 * 2, y = m[l.charCodeAt(b)] >>> 6 - b % 4 * 2, v[f >>> 2] |= (p | y) << 24 - f % 4 * 8, f++);
            return a.create(v, f);
          }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" }, c.enc.Base64;
        }, typeof x == "object" ? o.exports = x = u(d("crypto-js/core")) : u(_.CryptoJS);
      }, { "crypto-js/core": 3 }], 5: [function(d, o, x) {
        var _, u;
        _ = this, u = function(c) {
          return c.enc.Utf8;
        }, typeof x == "object" ? o.exports = x = u(d("crypto-js/core")) : u(_.CryptoJS);
      }, { "crypto-js/core": 3 }], 6: [function(d, o, x) {
        var _, u;
        _ = this, u = function(c) {
          return c.HmacSHA1;
        }, typeof x == "object" ? o.exports = x = u(d("crypto-js/core"), d("crypto-js/sha1"), d("crypto-js/hmac")) : u(_.CryptoJS);
      }, { "crypto-js/core": 3, "crypto-js/hmac": 7, "crypto-js/sha1": 8 }], 7: [function(d, o, x) {
        var _, u;
        _ = this, u = function(c) {
          var a, s;
          a = c.lib.Base, s = c.enc.Utf8, c.algo.HMAC = a.extend({ init: function(t, e) {
            t = this._hasher = new t.init(), typeof e == "string" && (e = s.parse(e));
            for (var n = t.blockSize, r = 4 * n, t = ((e = e.sigBytes > r ? t.finalize(e) : e).clamp(), this._oKey = e.clone()), e = this._iKey = e.clone(), p = t.words, y = e.words, h = 0; h < n; h++) p[h] ^= 1549556828, y[h] ^= 909522486;
            t.sigBytes = e.sigBytes = r, this.reset();
          }, reset: function() {
            var t = this._hasher;
            t.reset(), t.update(this._iKey);
          }, update: function(t) {
            return this._hasher.update(t), this;
          }, finalize: function(n) {
            var e = this._hasher, n = e.finalize(n);
            return e.reset(), e.finalize(this._oKey.clone().concat(n));
          } });
        }, typeof x == "object" ? o.exports = x = u(d("crypto-js/core")) : u(_.CryptoJS);
      }, { "crypto-js/core": 3 }], 8: [function(d, o, x) {
        var _, u;
        _ = this, u = function(c) {
          var a, s, t, e, n;
          return s = (a = c).lib, t = s.WordArray, e = s.Hasher, n = [], s = a.algo.SHA1 = e.extend({ _doReset: function() {
            this._hash = new t.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          }, _doProcessBlock: function(r, p) {
            for (var y = this._hash.words, h = y[0], l = y[1], g = y[2], m = y[3], v = y[4], f = 0; f < 80; f++) {
              n[f] = f < 16 ? 0 | r[p + f] : (b = n[f - 3] ^ n[f - 8] ^ n[f - 14] ^ n[f - 16]) << 1 | b >>> 31;
              var b = (h << 5 | h >>> 27) + v + n[f];
              b += f < 20 ? 1518500249 + (l & g | ~l & m) : f < 40 ? 1859775393 + (l ^ g ^ m) : f < 60 ? (l & g | l & m | g & m) - 1894007588 : (l ^ g ^ m) - 899497514, v = m, m = g, g = l << 30 | l >>> 2, l = h, h = b;
            }
            y[0] = y[0] + h | 0, y[1] = y[1] + l | 0, y[2] = y[2] + g | 0, y[3] = y[3] + m | 0, y[4] = y[4] + v | 0;
          }, _doFinalize: function() {
            var r = this._data, p = r.words, y = 8 * this._nDataBytes, h = 8 * r.sigBytes;
            return p[h >>> 5] |= 128 << 24 - h % 32, p[14 + (64 + h >>> 9 << 4)] = Math.floor(y / 4294967296), p[15 + (64 + h >>> 9 << 4)] = y, r.sigBytes = 4 * p.length, this._process(), this._hash;
          }, clone: function() {
            var r = e.clone.call(this);
            return r._hash = this._hash.clone(), r;
          } }), a.SHA1 = e._createHelper(s), a.HmacSHA1 = e._createHmacHelper(s), c.SHA1;
        }, typeof x == "object" ? o.exports = x = u(d("crypto-js/core")) : u(_.CryptoJS);
      }, { "crypto-js/core": 3 }], 9: [function(d, o, x) {
        (function(_, u) {
          (function() {
            var c, a;
            c = this, a = function() {
              function s(K) {
                return typeof K == "function";
              }
              var t = Array.isArray || function(K) {
                return Object.prototype.toString.call(K) === "[object Array]";
              }, e = 0, n = void 0, r = void 0, p = function(K, oe) {
                v[e] = K, v[e + 1] = oe, (e += 2) === 2 && (r ? r(f) : E());
              }, y = typeof window < "u" ? window : void 0, h = y || {}, h = h.MutationObserver || h.WebKitMutationObserver, l = typeof self > "u" && _ !== void 0 && {}.toString.call(_) === "[object process]", g = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
              function m() {
                var K = setTimeout;
                return function() {
                  return K(f, 1);
                };
              }
              var v = new Array(1e3);
              function f() {
                for (var K = 0; K < e; K += 2) (0, v[K])(v[K + 1]), v[K] = void 0, v[K + 1] = void 0;
                e = 0;
              }
              function b() {
                try {
                  var K = Function("return this")().require("vertx");
                  return (n = K.runOnLoop || K.runOnContext) !== void 0 ? function() {
                    n(f);
                  } : m();
                } catch {
                  return m();
                }
              }
              var S, w, T, E = void 0;
              function C(K, oe) {
                var G, ie = this, ve = new this.constructor(H), Pe = (ve[A] === void 0 && W(ve), ie._state);
                return Pe ? (G = arguments[Pe - 1], p(function() {
                  return k(Pe, ve, G, ie._result);
                })) : Q(ie, ve, K, oe), ve;
              }
              function R(K) {
                var oe;
                return K && typeof K == "object" && K.constructor === this ? K : (P(oe = new this(H), K), oe);
              }
              var E = l ? function() {
                return _.nextTick(f);
              } : h ? (w = 0, l = new h(f), T = document.createTextNode(""), l.observe(T, { characterData: !0 }), function() {
                T.data = w = ++w % 2;
              }) : g ? ((S = new MessageChannel()).port1.onmessage = f, function() {
                return S.port2.postMessage(0);
              }) : (y === void 0 && typeof d == "function" ? b : m)(), A = Math.random().toString(36).substring(2);
              function H() {
              }
              var N = void 0, O = 1, F = 2;
              function U(K, oe, G) {
                p(function(ie) {
                  var ve = !1, Pe = ((_e, Ce, Fe, He) => {
                    try {
                      _e.call(Ce, Fe, He);
                    } catch (be) {
                      return be;
                    }
                  })(G, oe, function(_e) {
                    ve || (ve = !0, (oe !== _e ? P : L)(ie, _e));
                  }, function(_e) {
                    ve || (ve = !0, V(ie, _e));
                  }, ie._label);
                  !ve && Pe && (ve = !0, V(ie, Pe));
                }, K);
              }
              function M(K, oe, G) {
                var ie, ve;
                oe.constructor === K.constructor && G === C && oe.constructor.resolve === R ? (ie = K, (ve = oe)._state === O ? L(ie, ve._result) : ve._state === F ? V(ie, ve._result) : Q(ve, void 0, function(Pe) {
                  return P(ie, Pe);
                }, function(Pe) {
                  return V(ie, Pe);
                })) : G !== void 0 && s(G) ? U(K, oe, G) : L(K, oe);
              }
              function P(K, oe) {
                if (K === oe) V(K, new TypeError("You cannot resolve a promise with itself"));
                else if (G = typeof oe, oe === null || G != "object" && G != "function") L(K, oe);
                else {
                  G = void 0;
                  try {
                    G = oe.then;
                  } catch (ie) {
                    return void V(K, ie);
                  }
                  M(K, oe, G);
                }
                var G;
              }
              function I(K) {
                K._onerror && K._onerror(K._result), j(K);
              }
              function L(K, oe) {
                K._state === N && (K._result = oe, K._state = O, K._subscribers.length !== 0) && p(j, K);
              }
              function V(K, oe) {
                K._state === N && (K._state = F, K._result = oe, p(I, K));
              }
              function Q(K, oe, G, ie) {
                var ve = K._subscribers, Pe = ve.length;
                K._onerror = null, ve[Pe] = oe, ve[Pe + O] = G, ve[Pe + F] = ie, Pe === 0 && K._state && p(j, K);
              }
              function j(K) {
                var oe = K._subscribers, G = K._state;
                if (oe.length !== 0) {
                  for (var ie, ve = void 0, Pe = K._result, _e = 0; _e < oe.length; _e += 3) ie = oe[_e], ve = oe[_e + G], ie ? k(G, ie, ve, Pe) : ve(Pe);
                  K._subscribers.length = 0;
                }
              }
              function k(K, oe, G, ie) {
                var ve = s(G), Pe = void 0, _e = void 0, Ce = !0;
                if (ve) {
                  try {
                    Pe = G(ie);
                  } catch (Fe) {
                    Ce = !1, _e = Fe;
                  }
                  if (oe === Pe) return void V(oe, new TypeError("A promises callback cannot return that same promise."));
                } else Pe = ie;
                oe._state === N && (ve && Ce ? P(oe, Pe) : Ce === !1 ? V(oe, _e) : K === O ? L(oe, Pe) : K === F && V(oe, Pe));
              }
              var D = 0;
              function W(K) {
                K[A] = D++, K._state = void 0, K._result = void 0, K._subscribers = [];
              }
              re.prototype._enumerate = function(K) {
                for (var oe = 0; this._state === N && oe < K.length; oe++) this._eachEntry(K[oe], oe);
              }, re.prototype._eachEntry = function(K, oe) {
                var G = this._instanceConstructor, ie = G.resolve;
                if (ie === R) {
                  var ve, Pe = void 0, _e = void 0, Ce = !1;
                  try {
                    Pe = K.then;
                  } catch (Fe) {
                    Ce = !0, _e = Fe;
                  }
                  Pe === C && K._state !== N ? this._settledAt(K._state, oe, K._result) : typeof Pe != "function" ? (this._remaining--, this._result[oe] = K) : G === ne ? (ve = new G(H), Ce ? V(ve, _e) : M(ve, K, Pe), this._willSettleAt(ve, oe)) : this._willSettleAt(new G(function(Fe) {
                    return Fe(K);
                  }), oe);
                } else this._willSettleAt(ie(K), oe);
              }, re.prototype._settledAt = function(K, oe, G) {
                var ie = this.promise;
                ie._state === N && (this._remaining--, K === F ? V(ie, G) : this._result[oe] = G), this._remaining === 0 && L(ie, this._result);
              }, re.prototype._willSettleAt = function(K, oe) {
                var G = this;
                Q(K, void 0, function(ie) {
                  return G._settledAt(O, oe, ie);
                }, function(ie) {
                  return G._settledAt(F, oe, ie);
                });
              };
              var ee = re;
              function re(K, oe) {
                this._instanceConstructor = K, this.promise = new K(H), this.promise[A] || W(this.promise), t(oe) ? (this.length = oe.length, this._remaining = oe.length, this._result = new Array(this.length), this.length !== 0 && (this.length = this.length || 0, this._enumerate(oe), this._remaining !== 0) || L(this.promise, this._result)) : V(this.promise, new Error("Array Methods must be provided an Array"));
              }
              le.prototype.catch = function(K) {
                return this.then(null, K);
              }, le.prototype.finally = function(K) {
                var oe = this.constructor;
                return s(K) ? this.then(function(G) {
                  return oe.resolve(K()).then(function() {
                    return G;
                  });
                }, function(G) {
                  return oe.resolve(K()).then(function() {
                    throw G;
                  });
                }) : this.then(K, K);
              };
              var ne = le;
              function le(K) {
                if (this[A] = D++, this._result = this._state = void 0, this._subscribers = [], H !== K) {
                  if (typeof K != "function") throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                  if (!(this instanceof le)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                  var oe = this;
                  try {
                    K(function(G) {
                      P(oe, G);
                    }, function(G) {
                      V(oe, G);
                    });
                  } catch (G) {
                    V(oe, G);
                  }
                }
              }
              return ne.prototype.then = C, ne.all = function(K) {
                return new ee(this, K).promise;
              }, ne.race = function(K) {
                var oe = this;
                return t(K) ? new oe(function(G, ie) {
                  for (var ve = K.length, Pe = 0; Pe < ve; Pe++) oe.resolve(K[Pe]).then(G, ie);
                }) : new oe(function(G, ie) {
                  return ie(new TypeError("You must pass an array to race."));
                });
              }, ne.resolve = R, ne.reject = function(K) {
                var oe = new this(H);
                return V(oe, K), oe;
              }, ne._setScheduler = function(K) {
                r = K;
              }, ne._setAsap = function(K) {
                p = K;
              }, ne._asap = p, ne.polyfill = function() {
                var K = void 0;
                if (u !== void 0) K = u;
                else if (typeof self < "u") K = self;
                else try {
                  K = Function("return this")();
                } catch {
                  throw new Error("polyfill failed because global object is unavailable in this environment");
                }
                var oe = K.Promise;
                if (oe) {
                  var G = null;
                  try {
                    G = Object.prototype.toString.call(oe.resolve());
                  } catch {
                  }
                  if (G === "[object Promise]" && !oe.cast) return;
                }
                K.Promise = ne;
              }, ne.Promise = ne;
            }, typeof x == "object" && o !== void 0 ? o.exports = a() : c.ES6Promise = a();
          }).call(this);
        }).call(this, d("_process"), typeof commonjsGlobal < "u" ? commonjsGlobal : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { _process: 10 }], 10: [function(d, c, x) {
        var _, u, c = c.exports = {};
        function a() {
          throw new Error("setTimeout has not been defined");
        }
        function s() {
          throw new Error("clearTimeout has not been defined");
        }
        try {
          _ = typeof setTimeout == "function" ? setTimeout : a;
        } catch {
          _ = a;
        }
        try {
          u = typeof clearTimeout == "function" ? clearTimeout : s;
        } catch {
          u = s;
        }
        function t(m) {
          if (_ === setTimeout) return setTimeout(m, 0);
          if ((_ === a || !_) && setTimeout) return (_ = setTimeout)(m, 0);
          try {
            return _(m, 0);
          } catch {
            try {
              return _.call(null, m, 0);
            } catch {
              return _.call(this, m, 0);
            }
          }
        }
        var e, n = [], r = !1, p = -1;
        function y() {
          r && e && (r = !1, e.length ? n = e.concat(n) : p = -1, n.length) && h();
        }
        function h() {
          if (!r) {
            for (var m = t(y), v = (r = !0, n.length); v; ) {
              for (e = n, n = []; ++p < v; ) e && e[p].run();
              p = -1, v = n.length;
            }
            e = null, r = !1, function(f) {
              if (u === clearTimeout) return clearTimeout(f);
              if ((u === s || !u) && clearTimeout) return (u = clearTimeout)(f);
              try {
                u(f);
              } catch {
                try {
                  return u.call(null, f);
                } catch {
                  return u.call(this, f);
                }
              }
            }(m);
          }
        }
        function l(m, v) {
          this.fun = m, this.array = v;
        }
        function g() {
        }
        c.nextTick = function(m) {
          var v = new Array(arguments.length - 1);
          if (1 < arguments.length) for (var f = 1; f < arguments.length; f++) v[f - 1] = arguments[f];
          n.push(new l(m, v)), n.length !== 1 || r || t(h);
        }, l.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.version = "", c.versions = {}, c.on = g, c.addListener = g, c.once = g, c.off = g, c.removeListener = g, c.removeAllListeners = g, c.emit = g, c.prependListener = g, c.prependOnceListener = g, c.listeners = function(m) {
          return [];
        }, c.binding = function(m) {
          throw new Error("process.binding is not supported");
        }, c.cwd = function() {
          return "/";
        }, c.chdir = function(m) {
          throw new Error("process.chdir is not supported");
        }, c.umask = function() {
          return 0;
        };
      }, {}], 11: [function(d, o, x) {
        o.exports = { name: "aliyun-aliplayer", version: "2.30.4", description: "阿里云 Web 播放器", main: "./build/aliplayer-min", style: "./build/skins/default/aliplayer-min.css", files: ["build"], repository: { type: "git", url: "" }, keywords: ["aliyun", "aliplayer"], scripts: { start: "npx grunt live", "start:hls": "npx grunt live --hls=true", "start:flv": "npx grunt live --flv=true", build: "npx grunt build", release: "commit-and-tag-version", prepublishOnly: "npm run build", "test:unit": "karma start", "test:unit:watch": "karma start --no-single-run" }, devDependencies: { "@ali/mediabox-quality-tracer": "^0.26.0", "@babel/core": "^7.26.0", "@babel/preset-env": "^7.26.0", "@types/chai": "^5.0.1", "@types/mocha": "^10.0.10", "babel-loader": "^9.2.1", "babel-plugin-es6-promise": "^1.1.1", "babel-plugin-istanbul": "^7.0.0", babelify: "^10.0.0", chai: "^5.1.2", "commit-and-tag-version": "^11.2.1", "es6-promise": "^4.2.8", grunt: "^1.0.4", "grunt-autoprefixer": "^3.0.4", "grunt-babel": "^8.0.0", "grunt-browserify": "^5.3.0", "grunt-contrib-clean": "^2.0.0", "grunt-contrib-connect": "^3.0.0", "grunt-contrib-copy": "^1.0.0", "grunt-contrib-cssmin": "^3.0.0", "grunt-contrib-less": "^2.0.0", "grunt-contrib-uglify": "^4.0.1", "grunt-contrib-watch": "^1.1.0", "grunt-run": "^0.8.1", "grunt-text-replace": "^0.4.0", karma: "^6.4.4", "karma-chrome-launcher": "^3.2.0", "karma-coverage": "^2.2.1", "karma-mocha": "^2.0.1", "karma-mocha-reporter": "^2.2.5", "karma-webpack": "^5.0.1", mocha: "^11.0.1", "node-args": "^2.1.8", sinon: "^19.0.2", "sinon-chai": "^4.0.0", webpack: "^5.97.1" }, dependencies: { "crypto-js": "^4.1.1" }, optionalDependencies: { puppeteer: "^23.11.1" } };
      }, {}], 12: [function(t, o, x) {
        var _ = t("../ui/component"), u = (t("../lib/util"), t("../lib/dom")), c = t("../lib/event"), a = (t("../lib/ua"), t("../lang/index")), s = t("../player/base/event/eventtype"), t = _.extend({ init: function(e, n) {
          _.call(this, e, n), this.className = n.className || "prism-auto-stream-selector", this.addClass(this.className);
        }, createEl: function() {
          var e = _.prototype.createEl.call(this, "div");
          return e.innerHTML = "<div><p class='tip-text'></p></div><div class='operators'><a class='prism-button prism-button-ok' type='button'>" + a.get("OK_Text") + "</a><a class='prism-button prism-button-cancel'  target='_blank'>" + a.get("Cancel_Text") + "</a></div>", e;
        }, bindEvent: function() {
          var e = this, n = (e._player.on(s.Private.AutoStreamShow, function(r) {
            var p, y = document.querySelector("#" + e.getId() + " .tip-text");
            e._player._getLowerQualityLevel && (p = e._player._getLowerQualityLevel()) && (e._switchUrl = p, y.innerText = a.get("Auto_Stream_Tip_Text").replace("$$", p.item.desc), u.css(e.el(), "display", "block"));
          }), e._player.on(s.Private.AutoStreamHide, function(r) {
            document.querySelector("#" + e.getId() + " .tip-text"), u.css(e.el(), "display", "none");
          }), document.querySelector("#" + e.getId() + " .prism-button-ok")), n = (c.on(n, "click", function() {
            e._player._changeStream && e._switchUrl && (e._player._changeStream(e._switchUrl.index, a.get("Quality_Change_Text")), e._player.trigger(s.Private.SettingListHide)), u.css(e.el(), "display", "none");
          }), document.querySelector("#" + e.getId() + " .prism-button-cancel"));
          c.on(n, "click", function() {
            u.css(e.el(), "display", "none"), e._player.trigger(s.Private.SettingListHide);
          });
        } });
        o.exports = t;
      }, { "../lang/index": 24, "../lib/dom": 33, "../lib/event": 34, "../lib/ua": 49, "../lib/util": 51, "../player/base/event/eventtype": 68, "../ui/component": 132 }], 13: [function(p, o, x) {
        var _ = p("../ui/component"), u = p("../lib/dom"), c = p("../lib/event"), a = p("../lib/ua"), s = p("../lib/function"), t = (p("../lang/index"), p("../lib/util")), e = p("../config"), n = p("../lib/playerutil"), r = p("../player/base/event/eventtype"), p = _.extend({ init: function(y, h) {
          _.call(this, y, h), this.className = h.className || "prism-liveshift-progress", this.addClass(this.className), this._liveshiftService = y._liveshiftService;
        }, createEl: function() {
          var y = _.prototype.createEl.call(this);
          return y.innerHTML = '<div class="prism-enable-liveshift"><div class="prism-progress-loaded"></div><div class="prism-progress-played"></div><div class="prism-progress-cursor"><img></img></div><p class="prism-progress-time"></p><div class="prism-liveshift-seperator"></div></div><div class="prism-disable-liveshift"></div>', y;
        }, bindEvent: function() {
          function y(m) {
            h._progressDown = m;
          }
          var h = this, l = (this.loadedNode = document.querySelector("#" + this.id() + " .prism-progress-loaded"), this.playedNode = document.querySelector("#" + this.id() + " .prism-progress-played"), this.cursorNode = document.querySelector("#" + this.id() + " .prism-progress-cursor"), this.timeNode = document.querySelector("#" + this.id() + " .prism-progress-time"), this.controlNode = document.querySelector("#" + this._player._options.id + " .prism-controlbar"), this.seperatorNode = document.querySelector("#" + this.id() + " .prism-liveshift-seperator"), this.progressNode = document.querySelector("#" + this.id() + " .prism-enable-liveshift"), document.querySelector("#" + this.id() + " .prism-progress-cursor img")), g = "//" + e.domain + e.path + e.h5Version + "/skins/default/img/dragcursor.png";
          this._player._options.skinsDomain = this._player._options.assetPrefix || this._player._options.skinsDomain, this._player._options.skinsDomain ? g = this._player._options.skinsDomain + "/skins/default/img/dragcursor.png" : e.domain ? -1 < e.domain.indexOf("localhost") && (g = "//" + e.domain + "/build/skins/default/img/dragcursor.png") : g = this._player && this._player._options && this._player._options.sdkDomain ? this._player._options.sdkDomain + e.path + e.h5Version + "/skins/default/img/dragcursor.png" : (e.path || "").substring(1) + e.h5Version + "/skins/default/img/dragcursor.png", l.src = g, c.on(this.cursorNode, "mousedown", function(m) {
            h._onMouseDown(m);
          }), c.on(this.cursorNode, "touchstart", function(m) {
            h._onMouseDown(m);
          }), c.on(this.progressNode, "mousemove", function(m) {
            h._progressMove(m);
          }), c.on(this.progressNode, "touchmove", function(m) {
            h._progressMove(m);
          }), c.on(this.progressNode, "mousedown", function(m) {
            y(!0);
          }), c.on(this.progressNode, "touchstart", function(m) {
            y(!0);
          }), c.on(this.progressNode, "mouseup", function(m) {
            y(!1);
          }), c.on(this.progressNode, "touchend", function(m) {
            y(!1);
          }), c.on(this._el, "click", function(m) {
            h._onMouseClick(m);
          }), this._player.on(r.Private.HideProgress, function(m) {
            h._hideProgress(m);
          }), this._player.on(r.Private.CancelHideProgress, function(m) {
            h._cancelHideProgress(m);
          }), this._player.on(r.Private.ShowBar, function() {
            h._updateLayout();
          }), c.on(this.progressNode, r.Private.MouseOver, function(m) {
            h._onMouseOver(m);
          }), c.on(this.progressNode, r.Private.MouseOut, function(m) {
            h._onMouseOut(m);
          }), this.bindTimeupdate = s.bind(this, this._onTimeupdate), this._player.on(r.Player.TimeUpdate, this.bindTimeupdate), n.isLiveShift(this._player._options) && h._liveshiftService.start(6e4, function(m) {
            m = { mediaId: h._player._options.vid || "", error_code: m.Code, error_msg: m.Message }, h._player.logError(m), h._player.trigger(r.Player.Error, m);
          }), this._player.on(r.Private.LiveShiftQueryCompleted, function() {
            h._updateSeperator(), h._updateLayout();
          }), this._player.on(r.Private.LiveShiftSwitchToLive, function() {
            h._updateCursorPosition();
          }), this._player.on(r.Player.Pause, function() {
            h._liveshiftService.stop();
          }), a.IS_IPAD ? this.interval = setInterval(function() {
            h._onProgress();
          }, 500) : this._player.on(r.Video.Progress, function() {
            h._onProgress();
          });
        }, _updateSeperator: function() {
          this._liveshiftService.currentTimeDisplay && (this.seperatorNode.innerText = this._liveshiftService.currentTimeDisplay);
        }, _updateLayout: function() {
          var y = this.seperatorNode.offsetWidth, h = this.el().offsetWidth, l = h - y;
          y != 0 && l != 0 && (u.css(this.progressNode, "width", 100 * (l - 10) / h + "%"), u.css(this.seperatorNode, "right", -1 * (y + 10) + "px"));
        }, _progressMove: function(y) {
          var h = this._getSeconds(y), l = this._liveshiftService.availableLiveShiftTime, h = (this.timeNode.innerText = "-" + t.formatTime(l - h), l ? h / l : 0), l = 1 - this.timeNode.clientWidth / this.el().clientWidth, g = (l < h && (h = l), this.timeNode && (u.css(this.timeNode, "display", "block"), u.css(this.timeNode, "left", 100 * h + "%")), this);
          !a.IS_PC && g._progressDown && (g.progressSeekTimer && clearTimeout(g.progressSeekTimer), g.progressSeekTimer = setTimeout(function() {
            g._progressDown || g._onMouseClick(y);
          }, 200));
        }, _hideProgress: function(y) {
          c.off(this.cursorNode, "mousedown"), c.off(this.cursorNode, "touchstart");
        }, _cancelHideProgress: function(y) {
          var h = this;
          c.on(this.cursorNode, "mousedown", function(l) {
            h._onMouseDown(l);
          }), c.on(this.cursorNode, "touchstart", function(l) {
            h._onMouseDown(l);
          });
        }, _canSeekable: function(y) {
          var h = !0;
          return h = typeof this._player.canSeekable == "function" ? this._player.canSeekable(y) : h;
        }, _onMouseOver: function(y) {
          this._updateCursorPosition(this._getCurrentTime()), u.css(this.timeNode, "display", "block");
        }, _onMouseOut: function(y) {
          u.css(this.timeNode, "display", "none");
        }, _getSeconds: function(v) {
          if (v.touches && v.touches[0]) {
            for (var h, l = this.el().offsetLeft, g = this.el(); g.offsetParent; ) {
              var g = g.offsetParent, m = u.getTranslateX(g);
              l += g.offsetLeft + m;
            }
            g.tagName && g.tagName.toLowerCase() === "body" && (l += document.getElementsByTagName("html")[0].offsetLeft), (h = (v.touches ? v.touches[0] : v).pageX - l) < 0 && (h = 0);
          } else h = v.offsetX, v.target !== this.cursorNode && v.target.offsetParent !== this.cursorNode || (h += this.cursorNode.offsetLeft), v.target !== this._el && (v.target.offsetParent, this._el);
          var v = this.progressNode.offsetWidth, f = this._liveshiftService.availableLiveShiftTime;
          return sec = (sec = (sec = f ? h / v * f : 0) < 0 ? 0 : sec) > f ? f : sec;
        }, _onMouseClick: function(l) {
          var h = this, l = this._getSeconds(l), m = this._liveshiftService.availableLiveShiftTime, g = m - l, v = this._player._options, m = (g <= v.liveShiftMinOffset && (l = m - (g = v.liveShiftMinOffset)), this._player.trigger(r.Private.SeekStart, { fromTime: this._getCurrentTime() }), this._liveshiftService.getSourceUrl(g)), v = n.isHls(h._player._options.source);
          h._player._loadByUrlInner(m, l, !0), h._player.trigger(r.Private.Play_Btn_Hide), h._liveshiftService.seekTime = l, h._player.trigger(r.Private.EndStart, { toTime: l }), h._updateProgressBar(this.playedNode, l), h._updateCursorPosition(l), setTimeout(function() {
            h._progressDown || h._onMouseOut();
          }, 500), v && setTimeout(function() {
            h._player.play();
          });
        }, _onMouseDown: function(y) {
          var h = this;
          y.preventDefault(), this._player.trigger(r.Private.SeekStart, { fromTime: this._getCurrentTime() }), c.on(this.controlNode, "mousemove", function(l) {
            h._onMouseMove(l);
          }), c.on(this.controlNode, "touchmove", function(l) {
            h._onMouseMove(l);
          }), c.on(this.controlNode, "mouseup", function(l) {
            h._onMouseUp(l);
          }), c.on(this.controlNode, "touchend", function(l) {
            h._onMouseUp(l);
          });
        }, _onMouseUp: function(y) {
          y.preventDefault(), c.off(this.controlNode, "mousemove"), c.off(this.controlNode, "touchmove"), c.off(this._player.tag, "mouseup"), c.off(this._player.tag, "touchend"), c.off(this.controlNode, "mouseup"), c.off(this.controlNode, "touchend"), this._onMouseClick(y);
        }, _onMouseMove: function(y) {
          y.preventDefault();
        }, _onTimeupdate: function(y) {
          this._player._seeking || (a.IS_ANDROID && a.IS_UC && (this._hasResetFlagUC && this._player.getCurrentTime() && (this._hasResetFlagUC = !1, this._basePtsUC = this._player.getCurrentTime()), this._player.getCurrentTime() || (this._hasResetFlagUC = !0, this._basePtsUC = 0)), this._updateProgressBar(this.playedNode, this._getCurrentTime()), this._updateCursorPosition(this._getCurrentTime()), this._player.trigger(r.Private.UpdateProgressBar, { time: this._getCurrentTime() }));
        }, _getCurrentTime: function() {
          var y = this._liveshiftService.seekTime, y = (y == -1 && (y = 0), this._player.getCurrentTime() + y);
          return a.IS_ANDROID && a.IS_UC && (y -= this._basePtsUC || 0), y;
        }, _onProgress: function(y) {
          this._player.getDuration() && 1 <= this._player.getBuffered().length && this._updateProgressBar(this.loadedNode, this._player.getBuffered().end(this._player.getBuffered().length - 1));
        }, _updateProgressBar: function(y, h) {
          var l, g;
          this._player._switchSourcing != 1 && (g = 0, this._liveshiftService.seekTime == -1 ? g = 1 : 1 < (g = (l = this._liveshiftService.availableLiveShiftTime) ? h / l : 0) && (this._liveshiftService.seekTime = -(g = 1)), this.liveShiftStartDisplay, y) && u.css(y, "width", 100 * g + "%");
        }, _updateCursorPosition: function(y) {
          var h, l, g, m;
          this._player.el() && this._player._switchSourcing != 1 && (g = 0, m = 1, h = this._player.el().clientWidth, this._liveshiftService.seekTime == -1 ? g = 1 : 1 < (g = (l = this._liveshiftService.availableLiveShiftTime) ? y / l : 0) && (this._liveshiftService.seekTime = -1), h != 0 && (m = 1 - (y = 10 / h), g -= y), g = g < 0 ? 0 : g, this.cursorNode) && (m < g ? (u.css(this.cursorNode, "right", "0px"), u.css(this.cursorNode, "left", "auto")) : (u.css(this.cursorNode, "right", "auto"), u.css(this.cursorNode, "left", 100 * g + "%")));
        } });
        o.exports = p;
      }, { "../config": 15, "../lang/index": 24, "../lib/dom": 33, "../lib/event": 34, "../lib/function": 36, "../lib/playerutil": 46, "../lib/ua": 49, "../lib/util": 51, "../player/base/event/eventtype": 68, "../ui/component": 132 }], 14: [function(a, o, x) {
        var _ = a("../ui/component"), u = a("../lib/util"), c = a("../player/base/event/eventtype"), a = _.extend({ init: function(s, t) {
          _.call(this, s, t), this.className = t.className || "prism-live-time-display", this.addClass(this.className), this._liveshiftService = s._liveshiftService;
        }, createEl: function() {
          var s = _.prototype.createEl.call(this, "div");
          return s.innerHTML = '<span class="current-time">00:00</span> <span class="time-bound">/</span> <span class="end-time">00:00</span><span class="live-text">Live: </span><span class="live-time"></span>', s;
        }, bindEvent: function() {
          var s = this;
          this._player.on(c.Video.TimeUpdate, function() {
            var t, e = s._liveshiftService, n = document.querySelector("#" + s.id() + " .current-time");
            e.liveShiftStartDisplay && e.availableLiveShiftTime > e.seekTime && e.seekTime != -1 ? (t = s._liveshiftService.getBaseTime(), t = u.formatTime(t + s._player.getCurrentTime()), n.innerText = t) : e.currentTimeDisplay && (n.innerText = e.currentTimeDisplay);
          }), this._player.on(c.Private.LiveShiftQueryCompleted, function() {
            s.updateTime();
          });
        }, updateTime: function() {
          document.querySelector("#" + this.id() + " .end-time").innerText = this._liveshiftService.liveTimeRange.endDisplay, document.querySelector("#" + this.id() + " .live-time").innerText = this._liveshiftService.currentTimeDisplay;
        } });
        o.exports = a;
      }, { "../lib/util": 51, "../player/base/event/eventtype": 68, "../ui/component": 132 }], 15: [function(d, o, x) {
        d = d("../package.json"), o.exports = { domain: "g.alicdn.com", path: "/apsara-media-box/imp-web-player/", flashVersion: "2.8.2", h5Version: d.version.split("-")[0], rtsVersion: "2.9.1", cityBrain: !0, logDuration: 3, logCount: 100, logReportTo: "https://videocloud.cn-hangzhou.log.aliyuncs.com/logstores/newplayer/track", dumpLogReportTo: "https://web-video.cn-hangzhou.log.aliyuncs.com/logstores/player-dump/track" };
      }, { "../package.json": 11 }], 16: [function(d, o, x) {
        (function(_) {
          (function() {
            var u, c, a, s, t, e, r = d("../node_modules/@ali/mediabox-quality-tracer/dist/index.cjs").MediaboxQualityTracer, n = (d("./lib/patch-ssr").isSSR || (c = function(p) {
              var y = window && window.location.host || "";
              if (!(-1 < y.indexOf("localhost") || /(?:\d{1,3}\.){3}\d{1,3}/.test(y))) {
                if (p && p.msg && (["没有为播放器指定容器", "playauth property is required"].some(function(h) {
                  return -1 < p.msg.indexOf(h);
                }) || /code:(\d+);msg:(.+)/.test(p.msg)))
                  return void console.log("ignore error report");
                if (!(p.stack && -1 < p.stack.indexOf("alivc-im.iife.js") || p.file && -1 < p.file.indexOf("imp-interaction"))) return p;
              }
              console.log("ignore error report");
            }, d("./lang/index").load(), a = d("./player/adaptiveplayer"), s = d("./lib/reloadInstanceUtil"), n = d("./lib/componentutil"), t = d("./config"), (e = function(p, y) {
              u && (u.updateOptions({ cid: p.license && p.license.key, region: p.env === "SEA" ? "ap-southeast-1" : "cn-hangzhou", beforeSend: c }), u.setReady());
              var h = a.create(p, y);
              return u && u.updateOptions({ beforeSend: function(l) {
                if (l = c(l)) return l.c3 = "likely_ri=" + (h._monitor && h._monitor.sessionId), l;
              } }), s.storeUserEvents(h), h;
            }).getVersion = function() {
              return t.h5Version;
            }, n.register(e), e.players = {}, e.reloadInstance = s.reloadInstance, typeof Uint8Array > "u") || Uint8Array.prototype.slice || Object.defineProperty(Uint8Array.prototype, "slice", { value: Array.prototype.slice }), (u = new r({ businessName: "imp-web-player", version: t.h5Version || "unknown", deferRegionSet: !0, env: _ !== "dev" ? "prod" : "local", disabled: window.AliplayerDisableTracer === !0 })).wrap(e)), r = window.Aliplayer = n;
            r.tracer = u, o.exports = r;
          }).call(this);
        }).call(this, "prod");
      }, { "../node_modules/@ali/mediabox-quality-tracer/dist/index.cjs": 1, "./config": 15, "./lang/index": 24, "./lib/componentutil": 28, "./lib/patch-ssr": 45, "./lib/reloadInstanceUtil": 47, "./player/adaptiveplayer": 65 }], 17: [function(d, o, x) {
        var _ = d("../player/base/event/eventtype"), u = d("../lib/constants"), c = d("../lang/index");
        o.exports = (() => {
          function a(t) {
            var e = this;
            t === void 0 && (t = {}), this.interval = 3e3, this.player = null, this.timer = null, this.playerInitDone = !1, this.player = t.player, this.player.on(_.Player.Init, function() {
              e.playerInitDone = !0;
            });
          }
          var s = a.prototype;
          return s.start = function() {
            var t = this;
            this.stop(), this.player && this.player._options && !this.player._options.preventRecord || (this.timer = setInterval(function() {
              t.playerInitDone && t.check();
            }, this.interval));
          }, s.stop = function() {
            this.clearTimer();
          }, s.check = function() {
            var t = !1, e = this.detectPrototype() || this.detectNativeFn();
            return (e || this.detectDeperateVideo()) && (console.log("isMediaSourceModified", e), this.clearTimer(), this.displayError(), this.setupErrorStyle(), this.destroyVideo(), localStorage.setItem("_intercept_mediastream_", ""), t = !0), t;
          }, s.dispose = function() {
            this.stop(), this.player = null, this.playerInitDone = !1;
          }, s.clearTimer = function() {
            this.timer && (clearInterval(this.timer), this.timer = null);
          }, s.displayError = function() {
            var t = this.player, e = { mediaId: t._options && t._options.vid ? t._options.vid : "", error_code: u.ErrorCode.RecordNotAllowed, error_msg: c.get("Record_Not_Allowed") };
            t.logError(e), t.trigger(_.Player.Error, e);
          }, s.setupErrorStyle = function() {
            this.hideRetry();
            var t = document.querySelector(".prism-ErrorMessage");
            t && (t.style.opacity = "1", t.style.visibility = "visible");
          }, s.hideRetry = function() {
            var t = document.querySelector("#" + this.player.id() + " .prism-button-retry");
            t && (t.style.display = "none");
          }, s.destroyVideo = function() {
            this.player._drm && this.player.destroy();
            var t = this.player.tag;
            t && t.parentNode && t.parentNode.removeChild(t);
          }, s.detectPrototype = function() {
            var t = window, e = t.MediaSource;
            return e && t.EventTarget && e.__proto__.__proto__ === t.EventTarget;
          }, s.detectNativeFn = function() {
            var t = window.MediaSource;
            return t && !this.isNativeFn(t.prototype.addSourceBuffer);
          }, s.isNativeFn = function(t) {
            var e = RegExp("^".concat(Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?"), "$")), n = typeof t;
            return t !== null && (n == "object" || n == "function") && e.test(t);
          }, s.detectDeperateVideo = function() {
            var t = this.player.tag;
            if (t) return (t.getAttribute("id") || "").indexOf("360") !== -1;
          }, a;
        })();
      }, { "../lang/index": 24, "../lib/constants": 29, "../player/base/event/eventtype": 68 }], 18: [function(c, o, x) {
        var _ = c("../lib/oo"), u = c("../lang/index"), c = _.extend({ init: function(s, t) {
          this._player = s, this._options = s.options();
        } }), a = (c.prototype.handle = function(s) {
          var t, e;
          this._options.autoPlayDelay && (t = (t = this._options.autoPlayDelayDisplayText) || u.get("AutoPlayDelayDisplayText").replace("$$", this._options.autoPlayDelay), this._player.trigger("info_show", t), this._player.trigger("h5_loading_hide"), this._player.trigger("play_btn_hide"), (e = this)._timeHandler = setTimeout(function() {
            e._player.trigger("info_hide"), e._options.autoPlayDelay = 0, s && s();
          }, 1e3 * this._options.autoPlayDelay), this._player.on("play", function() {
            a(e);
          }), this._player.on("pause", function() {
            a(e);
          }));
        }, c.prototype.dispose = function() {
          a(this), this._player = null;
        }, function(s) {
          s._timeHandler && (clearTimeout(s._timeHandler), s._timeHandler = null);
        });
        o.exports = c;
      }, { "../lang/index": 24, "../lib/oo": 44 }], 19: [function(s, o, x) {
        var _ = s("../lib/event"), u = s("../lib/data"), c = s("../player/base/event/eventtype"), a = u.guid(), s = {};
        function t(r) {
          var p, y, h = this._options.keyFastForwardStep, l = this._options.isLive;
          switch (r && r.keyCode) {
            case 39:
              l || (r.preventDefault(), p = this.getDuration(), y = this.getCurrentTime() + h, this.seek(y = p < y ? p : y), e.call(this, y), n.call(this, y));
              break;
            case 37:
              l || (r.preventDefault(), y = this.getCurrentTime() - h, this.seek(y = y < 0 ? 0 : y), e.call(this, y), n.call(this, y));
              break;
            case 38:
              r.preventDefault(), this.getVolume() < 1 && 0 <= this.getVolume() && this.setVolume(Number((this.getVolume() + 0.1).toFixed(1)));
              break;
            case 40:
              r.preventDefault(), 0 < this.getVolume() && this.getVolume() <= 1 && this.setVolume(Number((this.getVolume() - 0.1).toFixed(1)));
              break;
            case 32:
              if (l) return;
              r.preventDefault(), this.tag.paused ? this.play(!0) : this.pause(!0);
          }
        }
        function e(r) {
          this.trigger(c.Private.UpdateProgress, { targetTime: r });
        }
        function n(r) {
          this.trigger(c.Private.UpdateCursorPosition, { targetTime: r });
        }
        s.init = function() {
          var r;
          this._options.keyShortCuts && ((r = t.bind(this)).guid = a, _.on(window.document, "keydown", r));
        }, s.dispose = function() {
          var r;
          this._options.keyShortCuts && ((r = t.bind(this)).guid = a, _.off(window.document, "keydown", r));
        }, o.exports = s;
      }, { "../lib/data": 31, "../lib/event": 34, "../player/base/event/eventtype": 68 }], 20: [function(s, o, x) {
        var _ = typeof Promise > "u" ? s("es6-promise").Promise : Promise, u = s("../lib/constants").LicenseResultCode, c = s("../lib/io"), a = ((s = {})[u.ResourceIncorrect] = "license resource init error", s[u.LicenseKeyInvalid] = "invalid license key", s[u.DomainInvalid] = "invalid domain", s[u.CertInvalid] = "invalid cert content", s[u.NotFound] = "license not found", s[u.Expired] = "license expired", s), s = (() => {
          function t() {
          }
          return t.getLicense = function(e, n, r) {
            var p = this;
            return this.isWasmSupported() ? n ? e ? this.instance ? _.resolve(this.instance) : new _(function(y, h) {
              p.resolvers.push(y), p.rejecters.push(h), p.resolvers.length === 1 && c.loadJS("https://g.alicdn.com/apsara-media-components/amcom-web-license/0.5.1/index.js", function() {
                window.loadLicenseSource().then(function(l) {
                  var g = new l({ business_id: 2, domain_identity: e, license_key: n, region: r });
                  return g.update().then(function() {
                    p.instance = g, p.resolvers.forEach(function(m) {
                      m(g);
                    });
                  }).catch(function(m) {
                    p.rejecters.forEach(function(v) {
                      v(u.CertInvalid + "#" + (m || "").trim().split(":")[0]);
                    });
                  });
                }).catch(function() {
                  p.rejecters.forEach(function(l) {
                    l(u.ResourceIncorrect);
                  });
                }).finally(function() {
                  p.resolvers = [], p.rejecters = [];
                });
              }, function() {
                p.rejecters.forEach(function(l) {
                  l(u.ResourceIncorrect);
                });
              });
            }) : _.reject(u.DomainInvalid) : _.reject(u.LicenseKeyInvalid) : _.reject(u.WasmNotSupported);
          }, t.isWasmSupported = function() {
            return typeof WebAssembly == "object" && typeof WebAssembly.instantiate == "function";
          }, t.logError = function(e) {
            a[e] && console.error(a[e]);
          }, t;
        })();
        s.instance = void 0, s.resolvers = [], s.rejecters = [], o.exports = s;
      }, { "../lib/constants": 29, "../lib/io": 41, "es6-promise": 9 }], 21: [function(y, o, x) {
        function _() {
          return (_ = Object.assign ? Object.assign.bind() : function(l) {
            for (var g = 1; g < arguments.length; g++) {
              var m, v = arguments[g];
              for (m in v) !{}.hasOwnProperty.call(v, m) || (l[m] = v[m]);
            }
            return l;
          }).apply(null, arguments);
        }
        function u(l, g) {
          for (var m = 0; m < g.length; m++) {
            var v = g[m];
            v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(l, ((f) => typeof (f = ((b, S) => {
              if (typeof b != "object" || !b) return b;
              var w = b[Symbol.toPrimitive];
              if (w === void 0) return (S === "string" ? String : Number)(b);
              if (typeof (w = w.call(b, S)) != "object") return w;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            })(f, "string")) == "symbol" ? f : f + "")(v.key), v);
          }
        }
        var c = y("../lib/event"), a = "box", s = "content", t = "top-left", e = "top-right", n = "bottom-left", r = "bottom-right", p = "percentage", y = (() => {
          function l(v) {
            this._container = void 0, this._video = void 0, this._logoList = [], this._resizeDone = !0, this._observer = void 0, this._observer = new h(), this._handleVideoResize = this._handleVideoResize.bind(this), this._handleWindowResize = this._handleWindowResize.bind(this), this._setLogo(v.logo), this._setElements(v.container, v.video);
          }
          var g, m = l.prototype;
          return m.dispose = function() {
            this._observer.dispose(), this._observer = void 0, c.off(this._video, "resize", this._handleVideoResize), c.off(document, "fullscreenchange", this._handleWindowResize), this._logoList.forEach(function(v) {
              v.logo && v.logo.remove();
            }), this._logoList = [], this._container = void 0, this._video = void 0, this._resizeDone = !0;
          }, m._setElements = function(v, f) {
            this._container = v, this._video = f, this.loadedMeta ? this._logoList.forEach(this._setupLogo.bind(this)) : c.on(f, "resize", this._handleVideoResize), this._observer.observe(this._container, this._handleWindowResize), c.on(document, "fullscreenchange", this._handleWindowResize);
          }, m._handleVideoResize = function() {
            !this._video.videoWidth || this._logoList.some(function(v) {
              return v.logo;
            }) || this._logoList.forEach(this._setupLogo.bind(this));
          }, m._handleWindowResize = function() {
            var v = this;
            this._container && this._resizeDone && this.loadedMeta && (this._resizeDone = !1, window.requestAnimationFrame(function() {
              v._resizeDone = !0, v._logoList.forEach(v._placeLogo.bind(v));
            }));
          }, m._setLogo = function(v) {
            this._logoList = v.map(this._defauleValue);
          }, m._setupLogo = function(v) {
            var f = this, b = this._createLogo(v);
            (v.logo = b).onload = function() {
              f._placeLogo(v);
            };
          }, m._createLogo = function(v) {
            var f = document.createElement("img");
            return f.setAttribute("class", "prism-logo"), f.src = v.src, f;
          }, m._placeLogo = function(v) {
            var f = v.logo, b = this._calcSize(v), S = (b.width && f.setAttribute("width", b.width + "px"), b.height && f.setAttribute("height", b.height + "px"), this._calcMatrix(v));
            f.style.position = "absolute", Object.keys(S).forEach(function(w) {
              f.style[w] = S[w] + "px";
            }), this._container.appendChild(v.logo);
          }, m._calcSize = function(v) {
            return this._getPixel(v);
          }, m._calcMatrix = function(v) {
            var f = this._getPosition(v), b = this._getPixel(v, { width: v.offsetX, height: v.offsetY });
            return Object.keys(f).forEach(function(S) {
              switch (S) {
                case "top":
                  f[S] += b.height;
                  break;
                case "bottom":
                  f[S] -= b.height;
                  break;
                case "left":
                  f[S] += b.width;
                  break;
                case "right":
                  f[S] -= b.width;
              }
            }), f;
          }, m._getPosition = function(b) {
            var f = b.origin, b = b.position, S = 0, w = 0;
            switch (f === s && (S = Math.abs(this.videoSize.height - this.contentSize.height) / 2, w = Math.abs(this.videoSize.width - this.contentSize.width) / 2), b) {
              case t:
                return { top: 0 + S, left: 0 + w };
              case e:
                return { top: 0 + S, right: 0 + w };
              case n:
                return { bottom: 0 + S, left: 0 + w };
              case r:
                return { bottom: 0 + S, right: 0 + w };
              default:
                return { top: 0, left: 0 };
            }
          }, m._formalize = function(v, f) {
            var b = 1, b = v.width / v.height > f.width / f.height ? f.width / v.width : f.height / v.height;
            return { width: v.width * b, height: v.height * b };
          }, m._getPixel = function(v, S) {
            var S = S === void 0 ? {} : S, b = S.width, S = S.height, w = v.unit, T = v.origin;
            return isNaN(b) && (b = v.width), isNaN(S) && (S = v.height), w === p ? { width: (v = T === a ? this.videoSize : this.contentSize).width * b / 100, height: v.height * S / 100 } : { width: b, height: S };
          }, m._defauleValue = function(v) {
            return _({}, v, { position: v.position || t, offsetX: v.offsetX || 0, offsetY: v.offsetY || 0, origin: v.origin || a, unit: v.unit || p });
          }, m = l, (g = [{ key: "videoSize", get: function() {
            return this._video ? { width: this._video.offsetWidth, height: this._video.offsetHeight } : {};
          } }, { key: "contentSize", get: function() {
            var v;
            return this._video ? (v = { width: this._video.videoWidth, height: this._video.videoHeight }, { width: (v = this._formalize(v, this.videoSize)).width, height: v.height }) : {};
          } }, { key: "loadedMeta", get: function() {
            return !!this._video.videoWidth;
          } }]) && u(m.prototype, g), Object.defineProperty(m, "prototype", { writable: !1 }), m;
        })(), h = (o.exports = y, (() => {
          function l() {
            this._frame = void 0;
          }
          var g = l.prototype;
          return g.observe = function(m, v) {
            var f = document.createElement("iframe");
            return f.style.cssText = "position:absolute;left:0;top:-100%;width:100%;height:100%;margin:1px 0 0;border:none;opacity:0;visibility:hidden;pointer-events:none;", f.onload = function() {
              f.contentWindow.onresize = function() {
                v(m);
              };
            }, m.appendChild(f), this._frame = f;
          }, g.dispose = function() {
            this._frame && (this._frame.contentWindow.onresize = null, this._frame.remove(), this._frame = void 0);
          }, l;
        })());
      }, { "../lib/event": 34 }], 22: [function(d, o, x) {
        var _ = d("../lib/event"), u = d("../player/base/event/eventtype");
        o.exports = (() => {
          function c() {
            this.player = void 0, this.ratio = void 0, this.resize = void 0, this.target = void 0, this.resize = this._resize.bind(this);
          }
          var a = c.prototype;
          return a.autoResize = function(s, t, e) {
            e === void 0 && (e = "height"), typeof s != "number" ? console.warn("Parameter [ratio] should be a number, like 16/9") : (this.target = e, this.ratio = s, this.player = t, _.on(window, "resize", this.resize), this.resize());
          }, a._resize = function() {
            var s, t, e;
            (s = this.player.fullscreenService) != null && s.isFullScreen || (s = (s = this.player) == null ? void 0 : s.el()) && (this.target === "height" ? (e = (t = s.offsetWidth) / this.ratio, s.style.height = e + "px") : (t = (e = s.offsetHeight) * this.ratio, s.style.width = t + "px"), (s = this.player) != null) && s.trigger(u.Player.AutoResize, { width: t, height: e });
          }, a.dispose = function() {
            _.off(window, "resize", this.resize), this.player = void 0, this.ratio = void 0, this.resize = void 0, this.target = void 0;
          }, c;
        })();
      }, { "../lib/event": 34, "../player/base/event/eventtype": 68 }], 23: [function(d, o, x) {
        o.exports = { OD: "OD", FD: "360p", LD: "540p", SD: "720p", HD: "1080p", "2K": "2K", "4K": "4K", FHD: "FHD", XLD: "XLD", SQ: "SQ", HQ: "HQ", Speed: "Speed", Speed_05X_Text: "0.5X", Speed_1X_Text: "Normal", Speed_125X_Text: "1.25X", Speed_15X_Text: "1.5X", Speed_2X_Text: "2X", Speed_Long_Press: "2x speed", Refresh_Text: "Refresh", Cancel: "Cancel", Mute: "Mute", Click_To_Unmute: "Click to unmute", Snapshot: "Snapshot", Detection_Text: "Diagnose", Play_DateTime: "Time", Default: "Default", Quality_Change_Fail_Switch_Text: "Cannot play, switch to ", Quality_Change_Text: "Switching to ", Quality_Change_Result: "Switched to ", Quality_The_Url: "The url", AutoPlayDelayDisplayText: "Play in $$ seconds", Error_Load_Abort_Text: "Data abort erro", Error_Network_Text: "Loading failed due to network error", Error_Decode_Text: "Decode error", Error_No_Decoder_Text: "Unsupported codec", Error_Server_Network_NotSupport_Text: "Network error or  the format of video is unsupported", Error_Offline_Text: "The network is unreachable, please click Refresh", Error_Play_Text: "Error occured while playing", Error_Retry_Text: " Please close or refresh", Error_AuthKey_Text: "Authentication expired or the domain is not in white list", Error_H5_Not_Support_Text: "The format/codec of video is not supported", Error_Not_Support_M3U8_Text: "The format of m3u8 is not supported by this explorer", Error_Not_Support_MP4_Text: "The format of mp4 is not supported by this explorer", Error_Not_Support_encrypt_Text: "To play the encrypted video,please set encryptType to 1", Error_Encrypt_Fetch_Failed_Text: "Failed to fetch the encrypted video", Error_Vod_URL_Is_Empty_Text: "The url is empty", Error_Vod_Fetch_Urls_Text: "Error occured when fetch urls from vod service，please close or refresh", Fetch_Playauth_Error: "Error occured when fetch playauth close or refresh", Error_Playauth_Decode_Text: "PlayAuth parse failed", Error_Vid_Not_Same_Text: "Cannot renew url due to vid changed", Error_Playauth_Expired_Text: "Playauth expired, please close or refresh", Error_MTS_Fetch_Urls_Text: "Error occurred while requesting mst server", Error_Load_M3U8_Failed_Text: "The m3u8 file loaded failed,possibly due to HTTPS certificate issues, cross-origin problems, or DNS resolution failures", Error_Load_M3U8_Timeout_Text: "Timeout error occored when the m3u8 file loaded", Error_Liveshift_M3U8_Not_Found_Text: "No more liveshift video avaliable", Error_M3U8_Decode_Text: "The m3u8 file decoded failed", Error_TX_Decode_Text: "Video decoded failed", Error_Manifest_Decode_Text: "Failed to parse manifest", Error_Waiting_Timeout_Text: "Buffering timeout, please close or refresh", Error_Invalidate_Source: "Video shoud be mp4、mp3、m3u8、mpd or flv", Error_Empty_Source: "Video URL shouldn't be empty", Error_Vid_Empty_Source: "vid's video URL hasn't been fetched", Error_Mediaauth_Empty_Source: "mediaAuth's video URL hasn't been fetched", Error_Fetch_NotStream: "The vid has no stream to play", Error_Fetch_Media_Not_Found: "Data is not found", Error_Not_Found: "Url is not found", Error_Drm_License_Request_Failed: "DRM license request failed", Error_Drm_Not_Supported: "DRM in not supported", Error_Drm_Load: "DRM load error", Error_Drm_No_Sts: "STS(accessKeyId/accessKeySecret/securityToken) is required for DRM playback", Error_Drm_Params_Missing: "Parameters for drm.widevine/fairplay, etc. are missing", Error_Region_Block_Text: "This video is not available in your region", Error_SW_Conflict: "Service Worker conflict. Please try disabling browser extensions, restarting the browser, and closing other tabs.", Error_SW_Register_Failed: "Service Worker registration failed.", Error_SW_ScriptURL_Empty: "Please provide the swScriptURL parameter.", Error_SW_ScriptURL_Https: "The swScriptURL parameter must use an absolute address with https:// protocol.", Error_SW_ScriptURL_Scope: "The swScriptURL (subpath: @scope1@) and the current webpage (subpath: @scope2@) must be under the same subpath.", Error_SW_Version_Not_Match: "The version number of swScriptURL (@swVersion@) must match the player version (@playerVersion@).", Error_SW_ScriptURL_ILlegal: "Please provide a valid swScriptURL(@detail@).", Error_SW_Https_required: "Https is required when playing Vod's encription video", Tip_Err_Common: "please contact us for support, the error detail is:<br />", Tip_Err_Common_Short: "the error detail is:<br />", Tip_Drm_Request_Err: "The request failed with an error, please check the browser console to check whether it is caused by DNS, HTTPS certificates, or network problems. <br/> If the above tests are fine,", Tip_Drm_Secure_Context: "DRM can only be accessed under https, localhost, 127.0.0.1 web pages, and manifest and media segments must also use https.", Tip_Drm_Key_System_Unavailable: "1. This browser does not support Widevine or the current Widevine configuration<br/>2. The request that pops up in the browser was rejected by the user<br/>3. Please open the browser settings, look for the [Protected Content] setting and allow", Tip_Drm_File_Not_Allowed: "Do not use the file:// to open the file directly, you need to use a https:// to access the file", Tip_Drm_Playlist_Hierarchy: "HLS playlist level error, the main list needs to be master playlist", Tip_Drm_Info_Missing: "Please make sure the parameters of drm.widevine/fairplay you provided are valid", Tip_Drm_Unsupported: "Your browser does not currently support Widevine. If you are using Chrome, you can visit the URL chrome://components/ to locate the 'Widevine Content Decryption Module' and click on 'Update'. If this module is not present, the browser will be unable to play DRM-protected videos.", Tip_Err_Decode: "The decoding error refers to the current audio/video frame is not compatible with the browser, you can try the following methods: <br />1.chrome/edge browser open the chrome://flags, search for Hardware-accelerated video decode, select disabled<br />2.If the decoding error persists, please transcode the video to fix the problem frame", Tip_Err_Rts_Http_Failed: "The error indicates that the RTS streaming request encountered an HTTP error, which is usually related to HTTPS certificate, DNS resolution, or network connectivity issues. Due to browser restrictions on JavaScript, the player cannot obtain detailed error information. If you need further information, you can follow these steps:<br>Right-click on a blank area of the browser and select 'Inspect'.<br>2.In the newly opened interface, select 'Console'.<br>3.Check for any red error messages:<br>If you see 'SSL', it means that you have not correctly configured the HTTPS certificate for the streaming domain.<br>If you see 'NOT RESOLVED', it means that the DNS resolution for your domain has failed.<br>You can also use the <a style='color:white;text-decoration:underline;' href='https://live.console.aliyun.com/#/tool/url' target='_blank'>ApsaraVideo Live Diagnostic Tool</a> for self-diagnosis.", Tip_Err_Not_found: "For live streams, this might be due to the broadcast not starting yet, having ended, or being disrupted. For on-demand videos, it could indicate the video is unavailable.", Tip_Err_Blocked: "If you have a network proxy enabled, please try disabling it and then retrying.", Tip_Err_Splayer: "For best practices regarding playback of H.265/H.266 encoded videos, please refer to", Tip_Err_Splayer_Doc: " this document.", Tip_SW_Register: "1.Please access the webpage using HTTPS<br>2.Please ensure that the provided swScriptURL is a complete address starting with https:// and is accessible.", Tip_License_Required: "Starting 2024-12-01, the new version of the player must be configured with a license to use. The license for the basic functions of the player can be applied for free and is valid for 1 year. Please apply in advance to avoid any disruption in usage ", Tip_License_Params: "After completing the application, please refer to this document to pass the license information into the SDK ", Tip_License_Check: "Please ensure that the provided license key/domain parameters match exactly with what were obtained from the VOD/LIVE console.", Tip_License_Domain: "The current website domain does not match with your licensed domain", Tip_License_Feature: "The feature is not authorized by your license:", Tip_License_Reason: "The playback failed because your license verification was unsuccessful. Specific reason:", Live_End: "Live has finished", Play_Before_Fullscreen: "Please play before fullscreen", Can_Not_Seekable: "Can not seek to this position", Cancel_Text: "Cancel", OK_Text: "OK", Auto_Stream_Tip_Text: "Internet is slow, does switch to $$", Request_Block_Text: "This request is blocked, the video Url should be over https", Open_Html_By_File: "Html page should be on the server", Maybe_Cors_Error: "there is a network error, possibly due to HTTPS certificate issues, cross-origin problems, or DNS resolution failures", Speed_Switch_To: "Speed switch to ", Curent_Volume: "Current volume:", Volume_Mute: "set to mute", Volume_UnMute: "set to unmute", ShiftLiveTime_Error: "Live start time should not be greater than over time", Error_Not_Support_Format_On_Mobile: "flv、rmtp can't be supported on mobile，please use m3u8", Error_Not_Support_Mse_Flv: "Flv is not supported by this browser.", Error_Not_Support_Mse_Dash: "Dash is not supported by this browser.", Error_Not_Support_RTMP: "RTMP is not supported by this browser.", SessionId_Ticket_Invalid: "please assign value for sessionId and ticket properties", Http_Error: " An HTTP network request failed with an error, but not from the server.", Http_Timeout: "A network request timed out", DRM_License_Expired: "DRM license is expired, please refresh", Not_Support_DRM: "Browser doesn't support DRM", CC_Switch_To: "Subtitle switch to ", AudioTrack_Switch_To: "Audio tracks switch to ", Subtitle: "Subtitle/CC", AudioTrack: "Audio Track", Quality: "Quality", Auto: "Auto", Quality_Switch_To: "Quality switching to ", Fullscreen: "Full Screen", Setting: "Settings", Volume: "Volume", Play: "Play", Pause: "Pause", CloseSubtitle: "Close CC", OpenSubtitle: "Open CC", ExistFullScreen: "Exit Full Screen", Muted: "Muted", Retry: "Retry", SwitchToLive: "Return to live", iOSNotSupportVodEncription: "Versions of iOS below 17.1 doesn't support Vod's private encription video", iOSVodEncriptionBlacklist: "Please use Safari/Chrome browser to play Vod's private encription video", UseChromeForVodEncription: "This browser desn't suport Vod's encription video, please use latest Chrome/Edge", Record_Not_Allowed: "Recording or playing in seperated window is not allowed, please disable related plugins or switch browser.", License_Empty: "License params are required", License_Not_Found: "Unregistered license", License_Expired: "Expired license", License_License_Key_Invalid: "Invalid license key", License_Domain_Invalid: "Unexpected domain", License_Feature_Unauthorized: "Unauthorized feature", Rts_Err_Http_Signal_Error: "(RTS)http signal error", Rts_Err_Play_Failed: "(RTS)play faild error", Rts_Err_No_Data_For: "s received no data", Rts_Err_Browser_Not_Support: "(RTS)browser not support", Rts_Err_Not_Support_Webrtc: "(RTS)not support webrtc", Rts_Err_Browser_Version_Too_Low: "(RTS)browser version too low", Rts_Err_Not_Support_H264: "(RTS)not support h264", Rts_Err_Create_Offer_Error: "(RTS)create offer error", Rts_Err_Play_Url_Error: "(RTS)play url error", Rts_Err_Subscribe_Nonthing: "(RTS)subscribe nonthing", Rts_Err_Http_Request_Failed: "(RTS)HTTP request failed", Rts_Err_Http_Answer_Failed: "(RTS)answer failed", Rts_Err_PeerConnection_Unknown: "(RTS)Unknown PeerConnection", Splayer_Err_Env_Check: "(SP)This browser can't play this media", Splayer_Err_Coroutine: "(SP)Coroutine error", Splayer_Err_Decoder: "(SP)Decode error", Splayer_Err_Buffering: "(SP)Buffering error", Splayer_Err_Parser_Not_Found: "(SP)Media container is not supported" };
      }, {}], 24: [function(d, o, x) {
        function _(p, y, h) {
          var l = r(p), m = "", g = n(), m = g == "en-us" ? d("./en-us") : g == "zh-cn" ? d("./zh-cn") : y[g];
          h && (m = Object.assign({}, m, h[g])), c.set(l, JSON.stringify(m)), e(p, m), h && d("../lib/constants").updateByLanguage();
        }
        var u = d("../config"), c = d("../lib/storage"), a = (d("../lib/io"), "aliplayer_lang_data"), s = "aliplayer_lang", t = function() {
          var p;
          return window[s] !== void 0 && window[s] || (p = (p = (navigator.language || navigator.browserLanguage).toLowerCase()) && -1 < p.indexOf("zh") ? "zh-cn" : "en-us", window[s] = p), window[s];
        }, e = function(p, y) {
          p = r(p), window[p] = y;
        }, n = function() {
          return t();
        }, r = function(p) {
          var y = n();
          return a + "_" + (p = p || "h5") + "_" + u.h5Version.replace(/\./g, "_") + "_" + y;
        };
        o.exports.setCurrentLanguage = function(p, y, h, l) {
          var g = window[s];
          (p = p !== void 0 && p ? p : t()) == "en-us" || p == "zh-cn" || h && h[p] || (console.warn("There is no language resource for " + p + ", please specify the language resource by languageTexts property"), p = "zh-cn"), window[s] = p, _(y, h, l), p != g && d("../lib/constants").updateByLanguage();
        }, o.exports.getCurrentLanguage = t, o.exports.getLanguageData = function(p, y) {
          return p = r(p), window[p];
        }, o.exports.load = _, o.exports.get = function(p, y, h) {
          if (y = r(y = y || "h5"), y = window[y], y) {
            var l = y[p];
            if (h) for (var g in h) l = l.replace(new RegExp("@" + g + "@", "g"), h[g]);
            return l;
          }
        };
      }, { "../config": 15, "../lib/constants": 29, "../lib/io": 41, "../lib/storage": 48, "./en-us": 23, "./zh-cn": 25 }], 25: [function(d, o, x) {
        o.exports = { OD: "原画", FD: "流畅", LD: "标清", SD: "高清", HD: "超清", "2K": "2K", "4K": "4K", FHD: "全高清", XLD: "极速", SQ: "普通音质", HQ: "高音质", Speed: "倍速", Speed_05X_Text: "0.5X", Speed_1X_Text: "正常", Speed_125X_Text: "1.25X", Speed_15X_Text: "1.5X", Speed_2X_Text: "2X", Speed_Long_Press: "倍速播放中", Quality_Change_Fail_Switch_Text: "不能播放，切换为", Quality_Change_Text: "正在为您切换到 ", Quality_Change_Result: "已切换到 ", Quality_The_Url: "此地址", Refresh_Text: "刷新", Detection_Text: "查看建议", Cancel: "取消", Mute: "静音", Click_To_Unmute: "点击取消静音", Snapshot: "截图", Play_DateTime: "播放时间", Default: "默认", AutoPlayDelayDisplayText: "$$秒以后开始播放", Error_Load_Abort_Text: "获取数据过程被中止", Error_Network_Text: "网络错误加载数据失败", Error_Decode_Text: "解码错误", Error_No_Decoder_Text: "不支持此编码格式", Error_Server_Network_NotSupport_Text: "服务器、网络错误或格式不支持", Error_Offline_Text: "网络不可用，请确定", Error_Play_Text: "播放出错啦", Error_Retry_Text: "请尝试退出重试或刷新", Error_AuthKey_Text: "可能鉴权过期、域名不在白名单或请求被拦截", Error_H5_Not_Support_Text: "不支持此格式的视频", Error_Not_Support_M3U8_Text: "浏览器不支持m3u8视频播放", Error_Not_Support_MP4_Text: "浏览器不支持mp4视频播放", Error_Not_Support_encrypt_Text: "播放私有加密视频，请设置属性encryptType为1", Error_Encrypt_Fetch_Failed_Text: "请求加密地址失败", Error_Vod_URL_Is_Empty_Text: "获取播放地址为空", Error_Vod_Fetch_Urls_Text: "点播接口异常，请尝试退出重试或刷新", Fetch_Playauth_Error: "获取播放凭证出错啦，请尝试退出重试或刷新", Error_Playauth_Decode_Text: "playauth解析错误", Error_Vid_Not_Same_Text: "不能更新地址，vid和播放中的不一致", Error_Playauth_Expired_Text: "凭证已过期，请尝试退出重试或刷新", Error_MTS_Fetch_Urls_Text: "MTS获取取数失败", Error_Load_M3U8_Failed_Text: "获取m3u8文件失败,可能是https证书、跨域问题或DNS解析失败", Error_Load_M3U8_Timeout_Text: "获取m3u8文件超时", Error_Liveshift_M3U8_Not_Found_Text: "没有更多时移视频了", Error_M3U8_Decode_Text: "获取m3u8文件解析失败", Error_TX_Decode_Text: "解析数据出错", Error_Manifest_Decode_Text: "Manifest解析出错", Error_Waiting_Timeout_Text: "缓冲数据超时，请尝试退出重试或刷新", Error_Invalidate_Source: "播放地址格式需要为mp4、mp3、m3u8、mpd或flv", Error_Empty_Source: "播放地址不能为空", Error_Vid_Empty_Source: "vid对应的视频地址还未获取到", Error_Mediaauth_Empty_Source: "mediaAuth对应的视频地址还未获取到", Error_Fetch_NotStream: "此vid没有可播放视频", Error_Fetch_Media_Not_Found: "数据不存在或已被删除", Error_Not_Found: "播放地址不存在", Error_Drm_License_Request_Failed: "DRM License 请求失败", Error_Drm_Not_Supported: "当前浏览器不支持 DRM 播放", Error_Drm_Load: "DRM 播放错误", Error_Drm_No_Sts: "DRM 播放需要使用STS(accessKeyId/accessKeySecret/securityToken)", Error_Drm_Params_Missing: "缺少drm.widevine/fairplay等参数", Error_Region_Block_Text: "您所在的地区无法观看该视频", Error_SW_Conflict: "ServiceWorker冲突，请尝试禁用浏览器插件、重启浏览器并关闭其他网页", Error_SW_Register_Failed: "Service Worker注册失败", Error_SW_ScriptURL_Empty: "请传入 swScriptURL 参数", Error_SW_ScriptURL_Https: "swScriptURL参数请使用 https:// 协议的绝对地址", Error_SW_ScriptURL_Scope: "swScriptURL(子路径:@scope1@)和当前网页(子路径:@scope2@)必须在同一个子路径下", Error_SW_Version_Not_Match: "swScriptURL的版本号(@swVersion@)必须和播放器版本(@playerVersion@)号一致", Error_SW_ScriptURL_ILlegal: "请传入合法的swScriptURL(@detail@)", Error_SW_Https_required: "私有加密播放需要使用 https 环境", Tip_Err_Common: "您可联系售后支持，错误详情:<br />", Tip_Err_Common_Short: "错误详情:<br />", Tip_Drm_Request_Err: "请求出错，请先查看浏览器控制台，检查是否由域名解析、https证书、或网络问题引起。<br />若以上检查没问题，", Tip_Drm_Secure_Context: "DRM仅可以在https、localhost、127.0.0.1网页下访问，同时manifest和切片也必须使用https。", Tip_Drm_Key_System_Unavailable: "1.此浏览器不支持Widevine或者当前的Widevine配置<br />2.浏览器弹出的请求被用户拒绝了<br />3.请打开浏览器设置，查找关于【受保护的内容】设置并允许", Tip_Drm_File_Not_Allowed: "请不要使用file://直接打开文件，需要使用https://访问文件", Tip_Drm_Playlist_Hierarchy: "HLS播放列表层级错误，主列表需要是 master playlist", Tip_Drm_Info_Missing: "请检查传入的drm.widevine/fairplay等参数是否有效", Tip_Drm_Unsupported: "您的浏览器不支持 Widevine，如果是 Chrome，可以访问 chrome://components/，查找 Widevine Content Decryption Module，并点击更新。如果没有此模块，则该浏览器无法播放 DRM 视频。", Tip_Err_Decode: "解码错误指的是当前音/视频帧与浏览器不兼容，可以尝试以下方式：<br />1.chrome/edge 浏览器打开chrome://flags，搜索 Hardware-accelerated video decode，选择 disabled<br />2.如果解码错误仍然存在，请对视频进行转码处理，以修复问题帧<br />3.firefox浏览器请打开about:support，下拉找到【解码器支持信息】，如果没有AAC字样，代表不支持音频解码，请更换浏览器", Tip_Err_Rts_Http_Failed: "该错误指的是RTS拉流请求遇到了一个http错误，一般来说是https证书、DNS解析或者网络连通性问题，由于浏览器对JS的限制，播放器无法取得详细的错误信息，需要进一步排查，您可按照以下操作：<br>1.右键浏览器空白处，选择【检查】2.在新打开的界面中选择【控制台】3.查看红色报错：<br>如果有SSL字样，则代表您没有为拉流域名正确地配置https证书<br>如果有NOT RESOLVED字样，则代表您的域名DNS解析失败<br>您也使用<a style='color:white;text-decoration:underline;' href='https://live.console.aliyun.com/#/tool/url' target='_blank'>阿里云直播诊断工具</a>进行自助排查", Tip_Err_Not_found: "如果是直播，可能是直播未开始/已停止/已断流；如果是点播，可能是视频不存在。", Tip_Err_Blocked: "如果您开启了网络代理，请关闭后重试。", Tip_Err_Splayer: "关于 H.265/H.266 播放的最佳实践，请参考", Tip_Err_Splayer_Doc: "此文档。", Tip_SW_Register: "1.请使用https访问网页<br>2.请确保传入的swScriptURL是以https://开头的完整地址，且可以正常访问", Tip_License_Required: "2024年12月1日起，新版本播放器需要配置License才可以使用，播放器基础功能License免费申请，有效期 1 年，请提前申请以避免无法使用", Tip_License_Params: "申请完成后，请参考此文档将License信息传入SDK", Tip_License_Check: "请确保传入的 license key/domain 参数和点播/直播控制台上获取的完全一致", Tip_License_Domain: "当前网页域名和您的 license 授权域名不一致", Tip_License_Feature: "您的license未授权功能：", Tip_License_Reason: "播放失败，因为您的 License 校验未通过，具体原因：", Live_End: "亲，直播已结束", Play_Before_Fullscreen: "播放后再全屏", Can_Not_Seekable: "不能seek到这里", Cancel_Text: "取消", OK_Text: "确认", Auto_Stream_Tip_Text: "网络不给力，是否切换到$$", Request_Block_Text: "浏览器安全策略视频地址不能为http协议，与网站https协议不一致", Open_Html_By_File: "不能直接在浏览器打开html文件，请部署到服务端", Maybe_Cors_Error: "网络请求失败，可能是https证书、跨域问题或DNS解析失败", Speed_Switch_To: "倍速切换到 ", Curent_Volume: "当前音量：", Volume_Mute: "设置为静音", Volume_UnMute: "设置为非静音", ShiftLiveTime_Error: "直播开始时间不能大于直播结束时间", Error_Not_Support_Format_On_Mobile: "移动端不支持flv、rmtp视频，请使用m3u8", Error_Not_Support_Mse_Flv: "当前浏览器不支持 flv 视频", Error_Not_Support_Mse_Dash: "当前浏览器不支持 dash 视频", Error_Not_Support_RTMP: "浏览器不支持 rtmp 视频", SessionId_Ticket_Invalid: "DRM视频播放，sessionId和ticket属性不能为空", Http_Error: "Http网络请求失败", Http_Timeout: "http请求超时", DRM_License_Expired: "DRM license超时，请刷新", Not_Support_DRM: "浏览器不支持DRM视频的播放或未受到用户许可", CC_Switch_To: "字幕切换到 ", AudioTrack_Switch_To: "音轨切换到 ", Subtitle: "字幕", AudioTrack: "音轨", Quality: "清晰度", Auto: "自动", Quality_Switch_To: "正在切换清晰度至 ", Fullscreen: "全屏", Setting: "设置", Volume: "音量", Play: "播放", Pause: "暂停", CloseSubtitle: "关闭字幕", OpenSubtitle: "打开字幕", ExistFullScreen: "退出全屏", Muted: "静音", Retry: "重试", SwitchToLive: "返回直播", iOSNotSupportVodEncription: "iOS17.1以下不支持阿里云视频私有加密播放", iOSVodEncriptionBlacklist: "请使用Safari/Chrome浏览器播放加密视频", UseChromeForVodEncription: "浏览器不支持点播加密播放，请使用最新Chrome/Edge浏览器", Record_Not_Allowed: "禁止录屏或小窗口播放，请关闭插件或更换浏览器", License_Empty: "未配置License", License_Not_Found: "License未注册", License_Expired: "License已过期", License_License_Key_Invalid: "LicenseKey无效", License_Domain_Invalid: "域名不匹配", License_Feature_Unauthorized: "功能未授权", Rts_Err_Http_Signal_Error: "(RTS)信令请求失败", Rts_Err_Play_Failed: "(RTS)播放失败", Rts_Err_No_Data_For: "秒没有数据", Rts_Err_Browser_Not_Support: "(RTS)不支持此浏览器", Rts_Err_Not_Support_Webrtc: "(RTS)不支持webrtc", Rts_Err_Browser_Version_Too_Low: "(RTS)浏览器版本过低", Rts_Err_Not_Support_H264: "(RTS)不支持H264", Rts_Err_Create_Offer_Error: "(RTS)create offer失败", Rts_Err_Play_Url_Error: "(RTS)播放url协议错误", Rts_Err_Subscribe_Nonthing: "(RTS)参数设置错误", Rts_Err_Http_Request_Failed: "(RTS)HTTP请求失败", Rts_Err_Http_Answer_Failed: "(RTS)answer失败", Rts_Err_PeerConnection_Unknown: "(RTS)PeerConnection异常", Splayer_Err_Env_Check: "(SP)当前环境不支持播放该视频", Splayer_Err_Coroutine: "(SP)Coroutine 错误", Splayer_Err_Decode: "(SP)解码错误", Splayer_Err_Buffering: "(SP)缓冲区错误", Splayer_Err_Parser_Not_Found: "(SP)不支持的媒体容器" };
      }, {}], 26: [function(d, o, x) {
        var _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        if (window.Uint8Array) for (var u = new Uint8Array(256), c = 0; c < _.length; c++) u[_.charCodeAt(c)] = c;
        var a = function(s) {
          for (var t = "", e = 0; e < s.length; e += 16e3) {
            var n = s.subarray(e, e + 16e3);
            t += String.fromCharCode.apply(null, n);
          }
          return t;
        };
        o.exports = { decode: function(s) {
          for (var t, e, n, r, h = 0.75 * s.length, p = s.length, y = 0, h = (s[s.length - 1] === "=" && (h--, s[s.length - 2] === "=") && h--, new ArrayBuffer(h)), l = new Uint8Array(h), g = 0; g < p; g += 4) t = u[s.charCodeAt(g)], e = u[s.charCodeAt(g + 1)], n = u[s.charCodeAt(g + 2)], r = u[s.charCodeAt(g + 3)], l[y++] = t << 2 | e >> 4, l[y++] = (15 & e) << 4 | n >> 2, l[y++] = (3 & n) << 6 | 63 & r;
          return h;
        }, encode: function(s) {
          for (var t = new Uint8Array(s), e = t.length, n = "", r = 0; r < e; r += 3) n = (n = (n = (n += _[t[r] >> 2]) + _[(3 & t[r]) << 4 | t[r + 1] >> 4]) + _[(15 & t[r + 1]) << 2 | t[r + 2] >> 6]) + _[63 & t[r + 2]];
          return e % 3 == 2 ? n = n.substring(0, n.length - 1) + "=" : e % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="), n;
        }, unpackPlayReady: function(s) {
          if (s = ((y, h, l) => {
            if (!y) return "";
            l || y.byteLength % 2 == 0 || console.log("Data has an incorrect length, must be even."), l = y instanceof ArrayBuffer ? y : ((l = new Uint8Array(y.byteLength)).set(new Uint8Array(y)), l.buffer);
            for (var g = Math.floor(y.byteLength / 2), m = new Uint16Array(g), v = new DataView(l), f = 0; f < g; f++) m[f] = v.getUint16(2 * f, h);
            return a(m);
          })(s, !0, !0), s.indexOf("PlayReadyKeyMessage") != -1) {
            for (var s = new DOMParser().parseFromString(s, "application/xml"), t = s.getElementsByTagName("HttpHeader"), e = {}, n = 0; n < t.length; ++n) {
              var r = t[n].querySelector("name"), p = t[n].querySelector("value");
              e[r.textContent] = p.textContent;
            }
            return { header: e, changange: s.querySelector("Challenge").textContent };
          }
          console.log("PlayReady request is already unwrapped.");
        } };
      }, {}], 27: [function(d, o, x) {
        function _() {
          _ = function() {
            return r;
          };
          var n, r = {}, p = Object.prototype, y = p.hasOwnProperty, C = typeof Symbol == "function" ? Symbol : {}, h = C.iterator || "@@iterator", l = C.asyncIterator || "@@asyncIterator", g = C.toStringTag || "@@toStringTag";
          function m(M, P, I, L) {
            Object.defineProperty(M, P, { value: I, enumerable: !L, configurable: !L, writable: !L });
          }
          try {
            m({}, "");
          } catch {
            m = function(P, I, L) {
              return P[I] = L;
            };
          }
          function v(M, D, I, L) {
            var V, Q, j, k, D = D && D.prototype instanceof S ? D : S, D = Object.create(D.prototype);
            return m(D, "_invoke", (V = M, Q = I, j = new F(L || []), k = 1, function(W, ee) {
              if (k === 3) throw Error("Generator is already running");
              if (k === 4) {
                if (W === "throw") throw ee;
                return { value: n, done: !0 };
              }
              for (j.method = W, j.arg = ee; ; ) {
                var re = j.delegate;
                if (re && (re = function ne(le, K) {
                  var oe = K.method, G = le.i[oe];
                  return G === n ? (K.delegate = null, oe === "throw" && le.i.return && (K.method = "return", K.arg = n, ne(le, K), K.method === "throw") || oe !== "return" && (K.method = "throw", K.arg = new TypeError("The iterator does not provide a '" + oe + "' method")), b) : (oe = f(G, le.i, K.arg), oe.type === "throw" ? (K.method = "throw", K.arg = oe.arg, K.delegate = null, b) : (G = oe.arg, G ? G.done ? (K[le.r] = G.value, K.next = le.n, K.method !== "return" && (K.method = "next", K.arg = n), K.delegate = null, b) : G : (K.method = "throw", K.arg = new TypeError("iterator result is not an object"), K.delegate = null, b)));
                }(re, j), re)) {
                  if (re === b) continue;
                  return re;
                }
                if (j.method === "next") j.sent = j._sent = j.arg;
                else if (j.method === "throw") {
                  if (k === 1) throw k = 4, j.arg;
                  j.dispatchException(j.arg);
                } else j.method === "return" && j.abrupt("return", j.arg);
                if (k = 3, re = f(V, Q, j), re.type === "normal") {
                  if (k = j.done ? 4 : 2, re.arg === b) continue;
                  return { value: re.arg, done: j.done };
                }
                re.type === "throw" && (k = 4, j.method = "throw", j.arg = re.arg);
              }
            }), !0), D;
          }
          function f(M, P, I) {
            try {
              return { type: "normal", arg: M.call(P, I) };
            } catch (L) {
              return { type: "throw", arg: L };
            }
          }
          r.wrap = v;
          var b = {};
          function S() {
          }
          function w() {
          }
          function T() {
          }
          var C = {}, R = (m(C, h, function() {
            return this;
          }), Object.getPrototypeOf), R = R && R(R(U([]))), E = (R && R !== p && y.call(R, h) && (C = R), T.prototype = S.prototype = Object.create(C));
          function A(M) {
            ["next", "throw", "return"].forEach(function(P) {
              m(M, P, function(I) {
                return this._invoke(P, I);
              });
            });
          }
          function H(M, P) {
            var I;
            m(this, "_invoke", function(L, V) {
              function Q() {
                return new P(function(j, k) {
                  (function D(K, ee, re, ne) {
                    var le, K = f(M[K], M, ee);
                    if (K.type !== "throw") return (ee = (le = K.arg).value) && typeof ee == "object" && y.call(ee, "__await") ? P.resolve(ee.__await).then(function(oe) {
                      D("next", oe, re, ne);
                    }, function(oe) {
                      D("throw", oe, re, ne);
                    }) : P.resolve(ee).then(function(oe) {
                      le.value = oe, re(le);
                    }, function(oe) {
                      return D("throw", oe, re, ne);
                    });
                    ne(K.arg);
                  })(L, V, j, k);
                });
              }
              return I = I ? I.then(Q, Q) : Q();
            }, !0);
          }
          function N(M) {
            this.tryEntries.push(M);
          }
          function O(M) {
            var P = M[4] || {};
            P.type = "normal", P.arg = n, M[4] = P;
          }
          function F(M) {
            this.tryEntries = [[-1]], M.forEach(N, this), this.reset(!0);
          }
          function U(M) {
            if (M != null) {
              var P, I = M[h];
              if (I) return I.call(M);
              if (typeof M.next == "function") return M;
              if (!isNaN(M.length)) return P = -1, (I = function L() {
                for (; ++P < M.length; ) if (y.call(M, P)) return L.value = M[P], L.done = !1, L;
                return L.value = n, L.done = !0, L;
              }).next = I;
            }
            throw new TypeError(typeof M + " is not iterable");
          }
          return m(E, "constructor", w.prototype = T), m(T, "constructor", w), m(T, g, w.displayName = "GeneratorFunction"), r.isGeneratorFunction = function(M) {
            return M = typeof M == "function" && M.constructor, !!M && (M === w || (M.displayName || M.name) === "GeneratorFunction");
          }, r.mark = function(M) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(M, T) : (M.__proto__ = T, m(M, g, "GeneratorFunction")), M.prototype = Object.create(E), M;
          }, r.awrap = function(M) {
            return { __await: M };
          }, A(H.prototype), m(H.prototype, l, function() {
            return this;
          }), r.AsyncIterator = H, r.async = function(M, P, I, L, V) {
            V === void 0 && (V = Promise);
            var Q = new H(v(M, P, I, L), V);
            return r.isGeneratorFunction(P) ? Q : Q.next().then(function(j) {
              return j.done ? j.value : Q.next();
            });
          }, A(E), m(E, g, "Generator"), m(E, h, function() {
            return this;
          }), m(E, "toString", function() {
            return "[object Generator]";
          }), r.keys = function(M) {
            var P, I = Object(M), L = [];
            for (P in I) L.unshift(P);
            return function V() {
              for (; L.length; ) if ((P = L.pop()) in I) return V.value = P, V.done = !1, V;
              return V.done = !0, V;
            };
          }, r.values = U, F.prototype = { constructor: F, reset: function(M) {
            if (this.prev = this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(O), !M) for (var P in this) P.charAt(0) === "t" && y.call(this, P) && !isNaN(+P.slice(1)) && (this[P] = n);
          }, stop: function() {
            this.done = !0;
            var M = this.tryEntries[0][4];
            if (M.type === "throw") throw M.arg;
            return this.rval;
          }, dispatchException: function(M) {
            if (this.done) throw M;
            var P = this;
            function I(W) {
              Q.type = "throw", Q.arg = M, P.next = W;
            }
            for (var L = P.tryEntries.length - 1; 0 <= L; --L) {
              var V = this.tryEntries[L], Q = V[4], j = this.prev, k = V[1], D = V[2];
              if (V[0] === -1) return I("end"), !1;
              if (!k && !D) throw Error("try statement without catch or finally");
              if (V[0] != null && V[0] <= j) {
                if (j < k) return this.method = "next", this.arg = n, I(k), !0;
                if (j < D) return I(D), !1;
              }
            }
          }, abrupt: function(M, P) {
            for (var I = this.tryEntries.length - 1; 0 <= I; --I) {
              var L = this.tryEntries[I];
              if (-1 < L[0] && L[0] <= this.prev && this.prev < L[2]) {
                var V = L;
                break;
              }
            }
            var Q = (V = V && (M === "break" || M === "continue") && V[0] <= P && P <= V[2] ? null : V) ? V[4] : {};
            return Q.type = M, Q.arg = P, V ? (this.method = "next", this.next = V[2], b) : this.complete(Q);
          }, complete: function(M, P) {
            if (M.type === "throw") throw M.arg;
            return M.type === "break" || M.type === "continue" ? this.next = M.arg : M.type === "return" ? (this.rval = this.arg = M.arg, this.method = "return", this.next = "end") : M.type === "normal" && P && (this.next = P), b;
          }, finish: function(M) {
            for (var P = this.tryEntries.length - 1; 0 <= P; --P) {
              var I = this.tryEntries[P];
              if (I[2] === M) return this.complete(I[4], I[3]), O(I), b;
            }
          }, catch: function(M) {
            for (var P = this.tryEntries.length - 1; 0 <= P; --P) {
              var I, L, V = this.tryEntries[P];
              if (V[0] === M) return (I = V[4]).type === "throw" && (L = I.arg, O(V)), L;
            }
            throw Error("illegal catch attempt");
          }, delegateYield: function(M, P, I) {
            return this.delegate = { i: U(M), r: P, n: I }, this.method === "next" && (this.arg = n), b;
          } }, r;
        }
        function u(n, r, p, y, h, l, g) {
          try {
            var m = n[l](g), v = m.value;
          } catch (f) {
            return p(f);
          }
          m.done ? r(v) : Promise.resolve(v).then(y, h);
        }
        var c = typeof Promise > "u" ? d("es6-promise").Promise : Promise, a = d("./io"), s = d("../config");
        function t() {
        }
        function e() {
          var n;
          return n = _().mark(function r(p, y, h, l) {
            var g, m;
            return _().wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  if (y === void 0 && (y = {}), h === void 0 && (h = t), l === void 0 && (l = t), window.VideoxMuxer) {
                    v.next = 14;
                    break;
                  }
                  v.prev = 4, v.next = 7;
                  var f = y;
                  return new c(function(b, S) {
                    var w = "videox-muxer.min.js", T = "https://" + s.domain + s.path + s.h5Version + "/splayer/" + w;
                    f.assetPrefix && (T = f.assetPrefix + "/splayer/" + w), a.loadJS(T, function() {
                      b();
                    }, function() {
                      S();
                    });
                  });
                case 7:
                  v.next = 14;
                  break;
                case 9:
                  return v.prev = 9, v.t0 = v.catch(4), console.error("load videox-demuxer failed"), l("load videox-demuxer failed"), v.abrupt("return");
                case 14:
                  g = window.VideoxMuxer.Demuxer, (m = new g({ progressive: !0 })).on("loadedmetadata", function(b) {
                    b === void 0 && (b = {}), m.suspend(), m.destroy(), m = null, h(b);
                  }), m.on("error", function(b) {
                    l(b), m.suspend(), m.destroy(), m = null;
                  }), m.load(p);
                case 19:
                case "end":
                  return v.stop();
              }
            }, r, null, [[4, 9]]);
          }), (e = function() {
            var r = this, p = arguments;
            return new Promise(function(y, h) {
              var l = n.apply(r, p);
              function g(v) {
                u(l, y, h, g, m, "next", v);
              }
              function m(v) {
                u(l, y, h, g, m, "throw", v);
              }
              g(void 0);
            });
          }).apply(this, arguments);
        }
        o.exports = function(n, r, p, y) {
          return e.apply(this, arguments);
        };
      }, { "../config": 15, "./io": 41, "es6-promise": 9 }], 28: [function(d, o, x) {
        var _ = d("./oo"), u = d("../player/base/event/eventtype");
        o.exports.stopPropagation = function(c) {
          window.event ? window.event.cancelBubble = !0 : c.stopPropagation();
        }, o.exports.register = function(c) {
          c.util = { stopPropagation: o.exports.stopPropagation }, c.Component = _.extend, c.EventType = u.Player;
        };
      }, { "../player/base/event/eventtype": 68, "./oo": 44 }], 29: [function(d, o, x) {
        function _() {
          o.exports.VideoErrorCodeText = { 1: u.get("Error_Load_Abort_Text"), 2: u.get("Error_Network_Text"), 3: u.get("Error_Decode_Text"), 4: u.get("Error_Server_Network_NotSupport_Text") }, o.exports.VideoLevels = { 0: u.get("OD"), 640: u.get("FD"), 960: u.get("LD"), 1280: u.get("SD"), 1920: u.get("HD"), 2580: u.get("2K"), 3840: u.get("4K") }, o.exports.QualityLevels = { OD: u.get("OD"), LD: u.get("LD"), FD: u.get("FD"), SD: u.get("SD"), HD: u.get("HD"), "2K": u.get("2K"), "4K": u.get("4K"), XLD: u.get("XLD"), FHD: u.get("FHD"), SQ: u.get("SQ"), HQ: u.get("HQ") }, o.exports.SpeedLevels = [{ key: 0.5, text: u.get("Speed_05X_Text") }, { key: 1, text: u.get("Speed_1X_Text") }, { key: 1.25, text: u.get("Speed_125X_Text") }, { key: 1.5, text: u.get("Speed_15X_Text") }, { key: 2, text: u.get("Speed_2X_Text") }];
        }
        var u = d("../lang/index");
        o.exports.LOAD_START = "loadstart", o.exports.LOADED_METADATA = "loadedmetadata", o.exports.LOADED_DATA = "loadeddata", o.exports.PROGRESS = "progress", o.exports.CAN_PLAY = "canplay", o.exports.CAN_PLYA_THROUGH = "canplaythrough", o.exports.PLAY = "play", o.exports.PAUSE = "pause", o.exports.ENDED = "ended", o.exports.PLAYING = "playing", o.exports.WAITING = "waiting", o.exports.ERROR = "error", o.exports.SUSPEND = "suspend", o.exports.STALLED = "stalled", o.exports.DASH_QUALITY_PROTOCOL = "quality_index://", o.exports.AuthKeyExpiredEvent = "authkeyexpired", o.exports.USER_EVENT_NAME = "__user_events__", o.exports.PLAYER_SCOPE = "__aliplayerMessage__", o.exports.SW_MSG_EVT = { SETUP: "setup", SETUP_ACK: "setupAck", DISPOSE: "dispose", ENC_SEGMENT: "encSegment", DEC_SEGMENT: "decSegment", ABORT_SEGMENT: "abortSegment" }, o.exports.DM_MSG_EVT = { SETUP: "setup", DEMUX: "demux", RESULT: "result", FLUSH: "flush", DISPOSE: "dispose", DISPOSED: "disposed", ERROR: "error" }, o.exports.PLAYER_SDK_CODE_LEGACY = 9201, o.exports.PLAYER_SDK_CODE = 9203, o.exports.FEATURE_ID_H265 = 30001, o.exports.FEATURE_ID_H266 = 30002, o.exports.LicenseResultCode = { Success: 0, NotFound: 1, Expired: 2, CertInvalid: 3, WasmNotSupported: 4, ResourceIncorrect: 5, LicenseKeyInvalid: 6, DomainInvalid: 7 }, o.exports.LicenseErrorKey = { Empty: "License_Empty", NotFound: "License_Not_Found", Expired: "License_Expired", CertInvalid: "License_Cert_Invalid", LicenseKeyInvalid: "License_License_Key_Invalid", DomainInvalid: "License_Domain_Invalid", Unauthorized: "License_Feature_Unauthorized" }, o.exports.DRMKeySystem = { 4: "com.microsoft.playready", 5: "com.widevine.alpha" }, o.exports.EncryptionType = { Private: 1, Standard: 2, ChinaDRM: 3, PlayReady: 4, Widevine: 5 }, o.exports.VodEncryptionType = { AliyunVoDEncryption: 1, HLSEncryption: 2, Widevine: 5, "Widevine-FairPlay": 5 }, o.exports.DRMType = { Widevine: "Widevine", PlayReady: "PlayReady" }, o.exports.ErrorCode = { InvalidParameter: 4001, AuthKeyExpired: 4002, InvalidSourceURL: 4003, NotFoundSourceURL: 4004, StartLoadData: 4005, LoadedMetadata: 4006, PlayingError: 4007, LoadingTimeout: 4008, RequestDataError: 4009, EncrptyVideoNotSupport: 4010, FormatNotSupport: 4011, PlayauthDecode: 4012, PlayDataDecode: 4013, NetworkUnavaiable: 4014, UserAbort: 4015, NetworkError: 4016, URLsIsEmpty: 4017, DrmLicenseRequestFailed: 4018, RecordNotAllowed: 4019, MediaNotFound: 4020, DrmNotSupported: 4021, DrmLoadError: 4022, RegionBlock: 4023, ModuleLoadError: 4034, LicenseError: 4035, CrossDomain: 4027, OtherError: 4400, ServerAPIError: 4500, FlashNotInstalled: 4600, RtsSignalError: 4100, RtsPlayFailedError: 4200, RtsNotSupportWebRtc: 4110, RtsBrowserNotSupport: 4111, RtsBrowserVersionTooLow: 4112, RtsNotSupportH264: 4113, RtsCreateOfferError: 4114, RtsAutoPLayFaild: 4115, RtsPlayUrlError: 4116, RtsSubscribeNonthing: 4117, RtsHtmlElementError: 4118, RtsHtmlElementNotMatch: 4119, RtsBrowserNotSupportRtc: 4120, RtsHttpRequestFaild: 4121, RtsHttpAnswerFaild: 4122, RtsPeerConnectionUnknown: 4123, SplayerEnvCheckError: 4300, SplayerCoroutineError: 4301, SplayerDecodeError: 4302, SplayerBufferingError: 4303, SplayerParserNotFound: 4304 }, o.exports.AuthKeyExpired = 7200, o.exports.AuthKeyRefreshExpired = 7e3, o.exports.AuthInfoExpired = 100, o.exports.VideoErrorCode = { 1: 4015, 2: 4016, 3: 4013, 4: 4400 }, o.exports.RegionBlockMessages = ["black location", "denied by region block"], o.exports.IconType = { FontClass: "fontclass", Symbol: "symbol", Sprite: "Sprite" }, o.exports.SelectedStreamLevel = "selectedStreamLevel", o.exports.SelectedCC = "selectedCC", o.exports.HWDetectHvc1 = "HWDetectHvc1", o.exports.HWDetectHvc1Hls = "HWDetectHvc1Hls", o.exports.HWDetectHev1 = "HWDetectHev1", o.exports.HWDetectHev1Hls = "HWDetectHev1Hls", o.exports.WidthMapToLevel = { 0: "OD", 640: "FD", 960: "LD", 1280: "SD", 1920: "HD", 2580: "2K", 3840: "4K" }, _(), o.exports.updateByLanguage = _;
      }, { "../lang/index": 24 }], 30: [function(d, o, x) {
        o.exports.get = function(_) {
          for (var u = _ + "", c = document.cookie.split(";"), a = 0; a < c.length; a++) {
            var s = c[a].trim();
            if (s.indexOf(u) == 0) return unescape(s.substring(u.length + 1, s.length));
          }
          return "";
        }, o.exports.set = function(_, u, s) {
          var a = /* @__PURE__ */ new Date(), s = (a.setTime(a.getTime() + 24 * s * 60 * 60 * 1e3), "expires=" + a.toGMTString());
          document.cookie = _ + "=" + escape(u) + "; " + s;
        };
      }, {}], 31: [function(d, o, x) {
        var _ = d("./object");
        o.exports.cache = {}, o.exports.guid = function(u, c) {
          var a, s, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), e = [];
          if (c = c || t.length, u) for (a = 0; a < u; a++) e[a] = t[0 | Math.random() * c];
          else for (e[8] = e[13] = e[18] = e[23] = "-", e[14] = "4", a = 0; a < 36; a++) e[a] || (s = 0 | 16 * Math.random(), e[a] = t[a == 19 ? 3 & s | 8 : s]);
          return e.join("");
        }, o.exports.expando = "vdata" + (/* @__PURE__ */ new Date()).getTime(), o.exports.getData = function(u) {
          var c = u[o.exports.expando];
          return c || (c = u[o.exports.expando] = o.exports.guid(), o.exports.cache[c] = {}), o.exports.cache[c];
        }, o.exports.hasData = function(u) {
          var c = "";
          return !(!(c = u ? u[o.exports.expando] : c) || _.isEmpty(o.exports.cache[c]));
        }, o.exports.removeData = function(u) {
          var c = "";
          if (c = u ? u[o.exports.expando] : c) {
            delete o.exports.cache[c];
            try {
              delete u[o.exports.expando];
            } catch {
              u.removeAttribute ? u.removeAttribute(o.exports.expando) : u[o.exports.expando] = null;
            }
          }
        };
      }, { "./object": 43 }], 32: [function(d, o, x) {
        var _, u = typeof Promise > "u" ? d("es6-promise").Promise : Promise;
        d = typeof self < "u" ? self : this, _ = function() {
          return a = [function(t, e, n) {
            (function(r) {
              e.b = function(h) {
                for (var l = (h = h === void 0 ? {} : h).includes, h = h.excludes, h = h === void 0 ? [] : h, g = !1, m = !1, v = 0, f = l === void 0 ? [] : l; v < f.length; v++) if (f[v] === !0) {
                  g = !0;
                  break;
                }
                for (var b = 0, S = h; b < S.length; b++) if (S[b] === !0) {
                  m = !0;
                  break;
                }
                return g && !m;
              }, e.c = function(h, l, g) {
                return h = y.a[h], h !== void 0 && Object(p.compare)(h, l, g);
              }, e.a = function() {
                return typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : this;
              };
              var p = n(11), y = (n.n(p), n(4));
            }).call(e, n(10));
          }, function(t, p, y) {
            y.d(p, "c", function() {
              return h;
            }), y.d(p, "d", function() {
              return l;
            }), y.d(p, "b", function() {
              return g;
            }), y.d(p, "f", function() {
              return m;
            }), y.d(p, "a", function() {
              return v;
            }), y.d(p, "e", function() {
              return f;
            });
            var r, p = y(3), y = y(0), y = Object(y.a)(), h = "InstallTrigger" in ((y == null ? void 0 : y.window) || {}) || /firefox/i.test(p.b), l = /trident/i.test(p.b) || /msie/i.test(p.b), g = /edge/i.test(p.b), m = /webkit/i.test(p.b) && !g, v = ((r = y == null ? void 0 : y.window) == null ? void 0 : r.chrome) !== void 0 || /chrome/i.test(p.b), f = (((y = (r = y == null ? void 0 : y.window) == null ? void 0 : r.safari) == null ? void 0 : y.pushNotification) || !1).toString() === "[object SafariRemoteNotification]" || /safari/i.test(p.b) && !v;
          }, function(t, e, n) {
            n.d(e, "b", function() {
              return y;
            }), n.d(e, "c", function() {
              return h;
            }), n.d(e, "a", function() {
              return l;
            });
            var r = n(1);
            function p(g) {
              if (console) {
                if (!r.d && !r.b) return console[g];
                if (g === "log" || g === "clear") return function() {
                  for (var m = [], v = 0; v < arguments.length; v++) m[v] = arguments[v];
                  console[g].apply(console, m);
                };
              }
              return function() {
              };
            }
            var y = p("log"), h = p("table"), l = p("clear");
          }, function(t, r, n) {
            r.a = function() {
              for (var h, l = [], g = 0; g < arguments.length; g++) l[g] = arguments[g];
              return p != null && p.document ? (h = p.document).createElement.apply(h, l) : {};
            }, n.d(r, "b", function() {
              return y;
            });
            var r = n(0), p = Object(r.a)(), y = ((n = p == null ? void 0 : p.navigator) == null ? void 0 : n.userAgent) || "xxxxx";
          }, function(t, e, n) {
            n.d(e, "a", function() {
              return r;
            });
            for (var r = {}, p = 0, y = (n(3).b || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || []; p < y.length; p++) {
              var h = y[p].split("/"), l = h[0];
              r[l] = h[1];
            }
          }, function(t, r, n) {
            n.d(r, "b", function() {
              return p;
            }), n.d(r, "d", function() {
              return y;
            }), n.d(r, "c", function() {
              return h;
            }), n.d(r, "a", function() {
              return l;
            }), n.d(r, "e", function() {
              return g;
            });
            var r = n(3), p = /ipad/i.test(r.b), y = /macintosh/i.test(r.b), h = /iphone/i.test(r.b), l = /android/i.test(r.b), g = /windows/i.test(r.b);
          }, function(t, e, n) {
            Object.defineProperty(e, "__esModule", { value: !0 }), e.addListener = function(b) {
              f.addListener(b);
            }, e.removeListener = function(b) {
              f.removeListener(b);
            }, e.isLaunch = function() {
              return f.isLaunch();
            }, e.launch = function() {
              f.launch();
            }, e.stop = function() {
              f.stop();
            }, e.setDetectDelay = function(b) {
              f.setDetectDelay(b);
            };
            var r = n(7), p = n(8), y = (n.d(e, "DevtoolsDetector", function() {
              return r.a;
            }), n.d(e, "checkers", function() {
              return p;
            }), n(0)), h = (n.d(e, "match", function() {
              return y.b;
            }), n.d(e, "specificVersionMatch", function() {
              return y.c;
            }), n(1)), l = (n.d(e, "isFirefox", function() {
              return h.c;
            }), n.d(e, "isIE", function() {
              return h.d;
            }), n.d(e, "isEdge", function() {
              return h.b;
            }), n.d(e, "isWebkit", function() {
              return h.f;
            }), n.d(e, "isChrome", function() {
              return h.a;
            }), n.d(e, "isSafari", function() {
              return h.e;
            }), n(2)), g = (n.d(e, "log", function() {
              return l.b;
            }), n.d(e, "table", function() {
              return l.c;
            }), n.d(e, "clear", function() {
              return l.a;
            }), n(17)), m = (n.d(e, "isMobile", function() {
              return g.a;
            }), n(4)), v = (n.d(e, "versionMap", function() {
              return m.a;
            }), n(5)), f = (n.d(e, "isIpad", function() {
              return v.b;
            }), n.d(e, "isMac", function() {
              return v.d;
            }), n.d(e, "isIphone", function() {
              return v.c;
            }), n.d(e, "isAndroid", function() {
              return v.a;
            }), n.d(e, "isWindows", function() {
              return v.e;
            }), new r.a({ checkers: [p.elementIdChecker, p.regToStringChecker, p.functionToStringChecker, p.depRegToStringChecker, p.dateToStringChecker, p.debuggerChecker] }));
            e.default = f;
          }, function(t, e, n) {
            n.d(e, "a", function() {
              return y;
            });
            var r = this && this.__awaiter || function(l, g, m, v) {
              return new (m = m || u)(function(f, b) {
                function S(C) {
                  try {
                    T(v.next(C));
                  } catch (R) {
                    b(R);
                  }
                }
                function w(C) {
                  try {
                    T(v.throw(C));
                  } catch (R) {
                    b(R);
                  }
                }
                function T(C) {
                  var R;
                  C.done ? f(C.value) : ((R = C.value) instanceof m ? R : new m(function(E) {
                    E(R);
                  })).then(S, w);
                }
                T((v = v.apply(l, g || [])).next());
              });
            }, p = this && this.__generator || function(l, g) {
              var m, v, f, b = { label: 0, sent: function() {
                if (1 & f[0]) throw f[1];
                return f[1];
              }, trys: [], ops: [] }, S = { next: w(0), throw: w(1), return: w(2) };
              return typeof Symbol == "function" && (S[Symbol.iterator] = function() {
                return this;
              }), S;
              function w(T) {
                return function(C) {
                  var R = [T, C];
                  if (m) throw new TypeError("Generator is already executing.");
                  for (; b; ) try {
                    if (m = 1, v && (f = 2 & R[0] ? v.return : R[0] ? v.throw || ((f = v.return) && f.call(v), 0) : v.next) && !(f = f.call(v, R[1])).done) return f;
                    switch (v = 0, (R = f ? [2 & R[0], f.value] : R)[0]) {
                      case 0:
                      case 1:
                        f = R;
                        break;
                      case 4:
                        return b.label++, { value: R[1], done: !1 };
                      case 5:
                        b.label++, v = R[1], R = [0];
                        continue;
                      case 7:
                        R = b.ops.pop(), b.trys.pop();
                        continue;
                      default:
                        if (!(f = 0 < (f = b.trys).length && f[f.length - 1]) && (R[0] === 6 || R[0] === 2)) {
                          b = 0;
                          continue;
                        }
                        if (R[0] === 3 && (!f || R[1] > f[0] && R[1] < f[3])) b.label = R[1];
                        else if (R[0] === 6 && b.label < f[1]) b.label = f[1], f = R;
                        else {
                          if (!(f && b.label < f[2])) {
                            f[2] && b.ops.pop(), b.trys.pop();
                            continue;
                          }
                          b.label = f[2], b.ops.push(R);
                        }
                    }
                    R = g.call(l, b);
                  } catch (E) {
                    R = [6, E], v = 0;
                  } finally {
                    m = f = 0;
                  }
                  if (5 & R[0]) throw R[1];
                  return { value: R[0] ? R[1] : void 0, done: !0 };
                };
              }
            }, y = (h.prototype.launch = function() {
              this._detectLoopDelay <= 0 && this.setDetectDelay(500), this._detectLoopStopped && (this._detectLoopStopped = !1, this._detectLoop());
            }, h.prototype.stop = function() {
              this._detectLoopStopped || (this._detectLoopStopped = !0, clearTimeout(this._timer));
            }, h.prototype.isLaunch = function() {
              return !this._detectLoopStopped;
            }, h.prototype.setDetectDelay = function(l) {
              this._detectLoopDelay = l;
            }, h.prototype.addListener = function(l) {
              this._listeners.push(l);
            }, h.prototype.removeListener = function(l) {
              this._listeners = this._listeners.filter(function(g) {
                return g !== l;
              });
            }, h.prototype._broadcast = function(l) {
              for (var g = 0, m = this._listeners; g < m.length; g++) {
                var v = m[g];
                try {
                  v(l.isOpen, l);
                } catch {
                }
              }
            }, h.prototype._detectLoop = function() {
              return r(this, void 0, void 0, function() {
                var l, g, m, v, f, b = this;
                return p(this, function(S) {
                  switch (S.label) {
                    case 0:
                      l = !1, g = "", m = 0, v = this._checkers, S.label = 1;
                    case 1:
                      return m < v.length ? [4, (f = v[m]).isEnable()] : [3, 6];
                    case 2:
                      return S.sent() ? (g = f.name, [4, f.isOpen()]) : [3, 4];
                    case 3:
                      l = S.sent(), S.label = 4;
                    case 4:
                      if (l) return [3, 6];
                      S.label = 5;
                    case 5:
                      return m++, [3, 1];
                    case 6:
                      return l != this._isOpen && (this._isOpen = l, this._broadcast({ isOpen: l, checkerName: g })), 0 < this._detectLoopDelay ? this._timer = setTimeout(function() {
                        return b._detectLoop();
                      }, this._detectLoopDelay) : this.stop(), [2];
                  }
                });
              });
            }, h);
            function h(l) {
              l = l.checkers, this._listeners = [], this._isOpen = !1, this._detectLoopStopped = !0, this._detectLoopDelay = 500, this._checkers = l.slice();
            }
          }, function(t, e, n) {
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(9), p = (n.d(e, "depRegToStringChecker", function() {
              return r.a;
            }), n(12)), y = (n.d(e, "elementIdChecker", function() {
              return p.a;
            }), n(13)), h = (n.d(e, "functionToStringChecker", function() {
              return y.a;
            }), n(14)), l = (n.d(e, "regToStringChecker", function() {
              return h.a;
            }), n(15)), g = (n.d(e, "debuggerChecker", function() {
              return l.a;
            }), n(16));
            n.d(e, "dateToStringChecker", function() {
              return g.a;
            });
          }, function(t, e, n) {
            n.d(e, "a", function() {
              return v;
            });
            var r = n(1), p = n(2), y = n(0), h = this && this.__awaiter || function(f, b, S, w) {
              return new (S = S || u)(function(T, C) {
                function R(H) {
                  try {
                    A(w.next(H));
                  } catch (N) {
                    C(N);
                  }
                }
                function E(H) {
                  try {
                    A(w.throw(H));
                  } catch (N) {
                    C(N);
                  }
                }
                function A(H) {
                  var N;
                  H.done ? T(H.value) : ((N = H.value) instanceof S ? N : new S(function(O) {
                    O(N);
                  })).then(R, E);
                }
                A((w = w.apply(f, b || [])).next());
              });
            }, l = this && this.__generator || function(f, b) {
              var S, w, T, C = { label: 0, sent: function() {
                if (1 & T[0]) throw T[1];
                return T[1];
              }, trys: [], ops: [] }, R = { next: E(0), throw: E(1), return: E(2) };
              return typeof Symbol == "function" && (R[Symbol.iterator] = function() {
                return this;
              }), R;
              function E(A) {
                return function(H) {
                  var N = [A, H];
                  if (S) throw new TypeError("Generator is already executing.");
                  for (; C; ) try {
                    if (S = 1, w && (T = 2 & N[0] ? w.return : N[0] ? w.throw || ((T = w.return) && T.call(w), 0) : w.next) && !(T = T.call(w, N[1])).done) return T;
                    switch (w = 0, (N = T ? [2 & N[0], T.value] : N)[0]) {
                      case 0:
                      case 1:
                        T = N;
                        break;
                      case 4:
                        return C.label++, { value: N[1], done: !1 };
                      case 5:
                        C.label++, w = N[1], N = [0];
                        continue;
                      case 7:
                        N = C.ops.pop(), C.trys.pop();
                        continue;
                      default:
                        if (!(T = 0 < (T = C.trys).length && T[T.length - 1]) && (N[0] === 6 || N[0] === 2)) {
                          C = 0;
                          continue;
                        }
                        if (N[0] === 3 && (!T || N[1] > T[0] && N[1] < T[3])) C.label = N[1];
                        else if (N[0] === 6 && C.label < T[1]) C.label = T[1], T = N;
                        else {
                          if (!(T && C.label < T[2])) {
                            T[2] && C.ops.pop(), C.trys.pop();
                            continue;
                          }
                          C.label = T[2], C.ops.push(N);
                        }
                    }
                    N = b.call(f, C);
                  } catch (O) {
                    N = [6, O], w = 0;
                  } finally {
                    S = T = 0;
                  }
                  if (5 & N[0]) throw N[1];
                  return { value: N[0] ? N[1] : void 0, done: !0 };
                };
              }
            }, g = / /, m = !1, v = (g.toString = function() {
              return m = !0, v.name;
            }, { name: "dep-reg-to-string", isOpen: function() {
              return h(this, void 0, void 0, function() {
                return l(this, function(f) {
                  return m = !1, Object(p.c)({ dep: g }), Object(p.a)(), [2, m];
                });
              });
            }, isEnable: function() {
              return h(this, void 0, void 0, function() {
                return l(this, function(f) {
                  return [2, Object(y.b)({ includes: [!0], excludes: [r.c, r.d] })];
                });
              });
            } });
          }, function(t, e) {
            var n = /* @__PURE__ */ function() {
              return this;
            }();
            try {
              n = n || Function("return this")() || (0, eval)("this");
            } catch {
              typeof window == "object" && (n = window);
            }
            t.exports = n;
          }, function(t, e, n) {
            var r;
            (e = typeof (r = function() {
              var p = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
              function y(f) {
                var b = f.replace(/^v/, "").replace(/\+.*$/, ""), S = function(T, C) {
                  return T.indexOf(C) === -1 ? T.length : T.indexOf(C);
                }(b, "-"), w = b.substring(0, S).split(".");
                return w.push(b.substring(S + 1)), w;
              }
              function h(f) {
                return isNaN(Number(f)) ? f : Number(f);
              }
              function l(f) {
                if (typeof f != "string") throw new TypeError("Invalid argument expected string");
                if (!p.test(f)) throw new Error("Invalid argument not valid semver ('" + f + "' received)");
              }
              function g(f, b) {
                [f, b].forEach(l);
                for (var S = y(f), w = y(b), T = 0; T < Math.max(S.length - 1, w.length - 1); T++) {
                  var C = parseInt(S[T] || 0, 10), R = parseInt(w[T] || 0, 10);
                  if (C > R) return 1;
                  if (R > C) return -1;
                }
                var E = S[S.length - 1], A = w[w.length - 1];
                if (E && A) {
                  var H = E.split(".").map(h), N = A.split(".").map(h);
                  for (T = 0; T < Math.max(H.length, N.length); T++) {
                    if (H[T] === void 0 || typeof N[T] == "string" && typeof H[T] == "number") return -1;
                    if (N[T] === void 0 || typeof H[T] == "string" && typeof N[T] == "number" || H[T] > N[T]) return 1;
                    if (N[T] > H[T]) return -1;
                  }
                } else if (E || A) return E ? -1 : 1;
                return 0;
              }
              var m = [">", ">=", "=", "<", "<="], v = { ">": [1], ">=": [0, 1], "=": [0], "<=": [-1, 0], "<": [-1] };
              return g.validate = function(f) {
                return typeof f == "string" && p.test(f);
              }, g.compare = function(f, b, S) {
                (function(T) {
                  if (typeof T != "string") throw new TypeError("Invalid operator type, expected string but got " + typeof T);
                  if (m.indexOf(T) === -1) throw new TypeError("Invalid operator, expected one of " + m.join("|"));
                })(S);
                var w = g(f, b);
                return v[S].indexOf(w) > -1;
              }, g;
            }) == "function" ? r.apply(e, []) : r) !== void 0 && (t.exports = e);
          }, function(t, h, n) {
            n.d(h, "a", function() {
              return f;
            });
            var r = n(1), p = n(2), y = n(0), h = n(3), l = this && this.__awaiter || function(b, S, w, T) {
              return new (w = w || u)(function(C, R) {
                function E(N) {
                  try {
                    H(T.next(N));
                  } catch (O) {
                    R(O);
                  }
                }
                function A(N) {
                  try {
                    H(T.throw(N));
                  } catch (O) {
                    R(O);
                  }
                }
                function H(N) {
                  var O;
                  N.done ? C(N.value) : ((O = N.value) instanceof w ? O : new w(function(F) {
                    F(O);
                  })).then(E, A);
                }
                H((T = T.apply(b, S || [])).next());
              });
            }, g = this && this.__generator || function(b, S) {
              var w, T, C, R = { label: 0, sent: function() {
                if (1 & C[0]) throw C[1];
                return C[1];
              }, trys: [], ops: [] }, E = { next: A(0), throw: A(1), return: A(2) };
              return typeof Symbol == "function" && (E[Symbol.iterator] = function() {
                return this;
              }), E;
              function A(H) {
                return function(N) {
                  var O = [H, N];
                  if (w) throw new TypeError("Generator is already executing.");
                  for (; R; ) try {
                    if (w = 1, T && (C = 2 & O[0] ? T.return : O[0] ? T.throw || ((C = T.return) && C.call(T), 0) : T.next) && !(C = C.call(T, O[1])).done) return C;
                    switch (T = 0, (O = C ? [2 & O[0], C.value] : O)[0]) {
                      case 0:
                      case 1:
                        C = O;
                        break;
                      case 4:
                        return R.label++, { value: O[1], done: !1 };
                      case 5:
                        R.label++, T = O[1], O = [0];
                        continue;
                      case 7:
                        O = R.ops.pop(), R.trys.pop();
                        continue;
                      default:
                        if (!(C = 0 < (C = R.trys).length && C[C.length - 1]) && (O[0] === 6 || O[0] === 2)) {
                          R = 0;
                          continue;
                        }
                        if (O[0] === 3 && (!C || O[1] > C[0] && O[1] < C[3])) R.label = O[1];
                        else if (O[0] === 6 && R.label < C[1]) R.label = C[1], C = O;
                        else {
                          if (!(C && R.label < C[2])) {
                            C[2] && R.ops.pop(), R.trys.pop();
                            continue;
                          }
                          R.label = C[2], R.ops.push(O);
                        }
                    }
                    O = S.call(b, R);
                  } catch (F) {
                    O = [6, F], T = 0;
                  } finally {
                    w = C = 0;
                  }
                  if (5 & O[0]) throw O[1];
                  return { value: O[0] ? O[1] : void 0, done: !0 };
                };
              }
            }, m = Object(h.a)("div"), v = !1, f = (Object.defineProperty(m, "id", { get: function() {
              return v = !0, f.name;
            }, configurable: !0 }), { name: "element-id", isOpen: function() {
              return l(this, void 0, void 0, function() {
                return g(this, function(b) {
                  return v = !1, Object(p.b)(m), Object(p.a)(), [2, v];
                });
              });
            }, isEnable: function() {
              return l(this, void 0, void 0, function() {
                return g(this, function(b) {
                  return [2, Object(y.b)({ includes: [!0], excludes: [r.d, r.b, r.c] })];
                });
              });
            } });
          }, function(t, e, n) {
            n.d(e, "a", function() {
              return f;
            });
            var r = n(1), p = n(2), y = n(5), h = n(0), l = this && this.__awaiter || function(b, S, w, T) {
              return new (w = w || u)(function(C, R) {
                function E(N) {
                  try {
                    H(T.next(N));
                  } catch (O) {
                    R(O);
                  }
                }
                function A(N) {
                  try {
                    H(T.throw(N));
                  } catch (O) {
                    R(O);
                  }
                }
                function H(N) {
                  var O;
                  N.done ? C(N.value) : ((O = N.value) instanceof w ? O : new w(function(F) {
                    F(O);
                  })).then(E, A);
                }
                H((T = T.apply(b, S || [])).next());
              });
            }, g = this && this.__generator || function(b, S) {
              var w, T, C, R = { label: 0, sent: function() {
                if (1 & C[0]) throw C[1];
                return C[1];
              }, trys: [], ops: [] }, E = { next: A(0), throw: A(1), return: A(2) };
              return typeof Symbol == "function" && (E[Symbol.iterator] = function() {
                return this;
              }), E;
              function A(H) {
                return function(N) {
                  var O = [H, N];
                  if (w) throw new TypeError("Generator is already executing.");
                  for (; R; ) try {
                    if (w = 1, T && (C = 2 & O[0] ? T.return : O[0] ? T.throw || ((C = T.return) && C.call(T), 0) : T.next) && !(C = C.call(T, O[1])).done) return C;
                    switch (T = 0, (O = C ? [2 & O[0], C.value] : O)[0]) {
                      case 0:
                      case 1:
                        C = O;
                        break;
                      case 4:
                        return R.label++, { value: O[1], done: !1 };
                      case 5:
                        R.label++, T = O[1], O = [0];
                        continue;
                      case 7:
                        O = R.ops.pop(), R.trys.pop();
                        continue;
                      default:
                        if (!(C = 0 < (C = R.trys).length && C[C.length - 1]) && (O[0] === 6 || O[0] === 2)) {
                          R = 0;
                          continue;
                        }
                        if (O[0] === 3 && (!C || O[1] > C[0] && O[1] < C[3])) R.label = O[1];
                        else if (O[0] === 6 && R.label < C[1]) R.label = C[1], C = O;
                        else {
                          if (!(C && R.label < C[2])) {
                            C[2] && R.ops.pop(), R.trys.pop();
                            continue;
                          }
                          R.label = C[2], R.ops.push(O);
                        }
                    }
                    O = S.call(b, R);
                  } catch (F) {
                    O = [6, F], T = 0;
                  } finally {
                    w = C = 0;
                  }
                  if (5 & O[0]) throw O[1];
                  return { value: O[0] ? O[1] : void 0, done: !0 };
                };
              }
            };
            function m() {
            }
            var v = 0, f = (m.toString = function() {
              return v++, "";
            }, { name: "function-to-string", isOpen: function() {
              return l(this, void 0, void 0, function() {
                return g(this, function(b) {
                  return v = 0, Object(p.b)(m), Object(p.a)(), [2, v === 2];
                });
              });
            }, isEnable: function() {
              return l(this, void 0, void 0, function() {
                return g(this, function(b) {
                  return [2, Object(h.b)({ includes: [!0], excludes: [r.c, (y.b || y.c) && r.a] })];
                });
              });
            } });
          }, function(t, e, n) {
            n.d(e, "a", function() {
              return v;
            });
            var r = n(2), p = n(1), y = n(0), h = this && this.__awaiter || function(f, b, S, w) {
              return new (S = S || u)(function(T, C) {
                function R(H) {
                  try {
                    A(w.next(H));
                  } catch (N) {
                    C(N);
                  }
                }
                function E(H) {
                  try {
                    A(w.throw(H));
                  } catch (N) {
                    C(N);
                  }
                }
                function A(H) {
                  var N;
                  H.done ? T(H.value) : ((N = H.value) instanceof S ? N : new S(function(O) {
                    O(N);
                  })).then(R, E);
                }
                A((w = w.apply(f, b || [])).next());
              });
            }, l = this && this.__generator || function(f, b) {
              var S, w, T, C = { label: 0, sent: function() {
                if (1 & T[0]) throw T[1];
                return T[1];
              }, trys: [], ops: [] }, R = { next: E(0), throw: E(1), return: E(2) };
              return typeof Symbol == "function" && (R[Symbol.iterator] = function() {
                return this;
              }), R;
              function E(A) {
                return function(H) {
                  var N = [A, H];
                  if (S) throw new TypeError("Generator is already executing.");
                  for (; C; ) try {
                    if (S = 1, w && (T = 2 & N[0] ? w.return : N[0] ? w.throw || ((T = w.return) && T.call(w), 0) : w.next) && !(T = T.call(w, N[1])).done) return T;
                    switch (w = 0, (N = T ? [2 & N[0], T.value] : N)[0]) {
                      case 0:
                      case 1:
                        T = N;
                        break;
                      case 4:
                        return C.label++, { value: N[1], done: !1 };
                      case 5:
                        C.label++, w = N[1], N = [0];
                        continue;
                      case 7:
                        N = C.ops.pop(), C.trys.pop();
                        continue;
                      default:
                        if (!(T = 0 < (T = C.trys).length && T[T.length - 1]) && (N[0] === 6 || N[0] === 2)) {
                          C = 0;
                          continue;
                        }
                        if (N[0] === 3 && (!T || N[1] > T[0] && N[1] < T[3])) C.label = N[1];
                        else if (N[0] === 6 && C.label < T[1]) C.label = T[1], T = N;
                        else {
                          if (!(T && C.label < T[2])) {
                            T[2] && C.ops.pop(), C.trys.pop();
                            continue;
                          }
                          C.label = T[2], C.ops.push(N);
                        }
                    }
                    N = b.call(f, C);
                  } catch (O) {
                    N = [6, O], w = 0;
                  } finally {
                    S = T = 0;
                  }
                  if (5 & N[0]) throw N[1];
                  return { value: N[0] ? N[1] : void 0, done: !0 };
                };
              }
            }, g = / /, m = !1, v = (g.toString = function() {
              return m = !0, v.name;
            }, { name: "reg-to-string", isOpen: function() {
              return h(this, void 0, void 0, function() {
                return l(this, function(f) {
                  return m = !1, Object(r.b)(g), Object(r.a)(), [2, m];
                });
              });
            }, isEnable: function() {
              return h(this, void 0, void 0, function() {
                return l(this, function(f) {
                  return [2, Object(y.b)({ includes: [!0], excludes: [p.f] })];
                });
              });
            } });
          }, function(t, e, n) {
            n.d(e, "a", function() {
              return h;
            });
            var r = this && this.__awaiter || function(l, g, m, v) {
              return new (m = m || u)(function(f, b) {
                function S(C) {
                  try {
                    T(v.next(C));
                  } catch (R) {
                    b(R);
                  }
                }
                function w(C) {
                  try {
                    T(v.throw(C));
                  } catch (R) {
                    b(R);
                  }
                }
                function T(C) {
                  var R;
                  C.done ? f(C.value) : ((R = C.value) instanceof m ? R : new m(function(E) {
                    E(R);
                  })).then(S, w);
                }
                T((v = v.apply(l, g || [])).next());
              });
            }, p = this && this.__generator || function(l, g) {
              var m, v, f, b = { label: 0, sent: function() {
                if (1 & f[0]) throw f[1];
                return f[1];
              }, trys: [], ops: [] }, S = { next: w(0), throw: w(1), return: w(2) };
              return typeof Symbol == "function" && (S[Symbol.iterator] = function() {
                return this;
              }), S;
              function w(T) {
                return function(C) {
                  var R = [T, C];
                  if (m) throw new TypeError("Generator is already executing.");
                  for (; b; ) try {
                    if (m = 1, v && (f = 2 & R[0] ? v.return : R[0] ? v.throw || ((f = v.return) && f.call(v), 0) : v.next) && !(f = f.call(v, R[1])).done) return f;
                    switch (v = 0, (R = f ? [2 & R[0], f.value] : R)[0]) {
                      case 0:
                      case 1:
                        f = R;
                        break;
                      case 4:
                        return b.label++, { value: R[1], done: !1 };
                      case 5:
                        b.label++, v = R[1], R = [0];
                        continue;
                      case 7:
                        R = b.ops.pop(), b.trys.pop();
                        continue;
                      default:
                        if (!(f = 0 < (f = b.trys).length && f[f.length - 1]) && (R[0] === 6 || R[0] === 2)) {
                          b = 0;
                          continue;
                        }
                        if (R[0] === 3 && (!f || R[1] > f[0] && R[1] < f[3])) b.label = R[1];
                        else if (R[0] === 6 && b.label < f[1]) b.label = f[1], f = R;
                        else {
                          if (!(f && b.label < f[2])) {
                            f[2] && b.ops.pop(), b.trys.pop();
                            continue;
                          }
                          b.label = f[2], b.ops.push(R);
                        }
                    }
                    R = g.call(l, b);
                  } catch (E) {
                    R = [6, E], v = 0;
                  } finally {
                    m = f = 0;
                  }
                  if (5 & R[0]) throw R[1];
                  return { value: R[0] ? R[1] : void 0, done: !0 };
                };
              }
            };
            function y() {
              return (performance || Date).now();
            }
            var h = { name: "debugger-checker", isOpen: function() {
              return r(this, void 0, void 0, function() {
                var l;
                return p(this, function(g) {
                  return l = y(), (function() {
                  }).constructor("debugger")(), [2, 100 < y() - l];
                });
              });
            }, isEnable: function() {
              return r(this, void 0, void 0, function() {
                return p(this, function(l) {
                  return [2, !0];
                });
              });
            } };
          }, function(t, e, n) {
            n.d(e, "a", function() {
              return v;
            });
            var r = n(1), p = n(2), y = n(0), h = this && this.__awaiter || function(f, b, S, w) {
              return new (S = S || u)(function(T, C) {
                function R(H) {
                  try {
                    A(w.next(H));
                  } catch (N) {
                    C(N);
                  }
                }
                function E(H) {
                  try {
                    A(w.throw(H));
                  } catch (N) {
                    C(N);
                  }
                }
                function A(H) {
                  var N;
                  H.done ? T(H.value) : ((N = H.value) instanceof S ? N : new S(function(O) {
                    O(N);
                  })).then(R, E);
                }
                A((w = w.apply(f, b || [])).next());
              });
            }, l = this && this.__generator || function(f, b) {
              var S, w, T, C = { label: 0, sent: function() {
                if (1 & T[0]) throw T[1];
                return T[1];
              }, trys: [], ops: [] }, R = { next: E(0), throw: E(1), return: E(2) };
              return typeof Symbol == "function" && (R[Symbol.iterator] = function() {
                return this;
              }), R;
              function E(A) {
                return function(H) {
                  var N = [A, H];
                  if (S) throw new TypeError("Generator is already executing.");
                  for (; C; ) try {
                    if (S = 1, w && (T = 2 & N[0] ? w.return : N[0] ? w.throw || ((T = w.return) && T.call(w), 0) : w.next) && !(T = T.call(w, N[1])).done) return T;
                    switch (w = 0, (N = T ? [2 & N[0], T.value] : N)[0]) {
                      case 0:
                      case 1:
                        T = N;
                        break;
                      case 4:
                        return C.label++, { value: N[1], done: !1 };
                      case 5:
                        C.label++, w = N[1], N = [0];
                        continue;
                      case 7:
                        N = C.ops.pop(), C.trys.pop();
                        continue;
                      default:
                        if (!(T = 0 < (T = C.trys).length && T[T.length - 1]) && (N[0] === 6 || N[0] === 2)) {
                          C = 0;
                          continue;
                        }
                        if (N[0] === 3 && (!T || N[1] > T[0] && N[1] < T[3])) C.label = N[1];
                        else if (N[0] === 6 && C.label < T[1]) C.label = T[1], T = N;
                        else {
                          if (!(T && C.label < T[2])) {
                            T[2] && C.ops.pop(), C.trys.pop();
                            continue;
                          }
                          C.label = T[2], C.ops.push(N);
                        }
                    }
                    N = b.call(f, C);
                  } catch (O) {
                    N = [6, O], w = 0;
                  } finally {
                    S = T = 0;
                  }
                  if (5 & N[0]) throw N[1];
                  return { value: N[0] ? N[1] : void 0, done: !0 };
                };
              }
            }, g = /* @__PURE__ */ new Date(), m = 0, v = (g.toString = function() {
              return m++, "";
            }, { name: "date-to-string", isOpen: function() {
              return h(this, void 0, void 0, function() {
                return l(this, function(f) {
                  return m = 0, Object(p.b)(g), Object(p.a)(), [2, m === 2];
                });
              });
            }, isEnable: function() {
              return h(this, void 0, void 0, function() {
                return l(this, function(f) {
                  return [2, Object(y.b)({ includes: [r.a], excludes: [] })];
                });
              });
            } });
          }, function(t, r, n) {
            n.d(r, "a", function() {
              return p;
            });
            var r = n(3), p = /mobile/i.test(r.b);
          }], s = {}, c.m = a, c.c = s, c.d = function(t, e, n) {
            c.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: n });
          }, c.n = function(t) {
            var e = t && t.__esModule ? function() {
              return t.default;
            } : function() {
              return t;
            };
            return c.d(e, "a", e), e;
          }, c.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }, c.p = "", c(c.s = 6);
          function c(t) {
            var e;
            return (s[t] || (e = s[t] = { i: t, l: !1, exports: {} }, a[t].call(e.exports, e, e.exports, c), e.l = !0, e)).exports;
          }
          var a, s;
        }, typeof x == "object" && typeof o == "object" ? o.exports = _() : typeof x == "object" ? x.devtoolsDetector = _() : d.devtoolsDetector = _();
      }, { "es6-promise": 9 }], 33: [function(d, o, x) {
        var _ = d("./object");
        o.exports.el = function(u) {
          return document.getElementById(u);
        }, o.exports.createEl = function(u, c) {
          var a;
          return u = u || "div", c = c || {}, a = document.createElement(u), _.each(c, function(s, t) {
            s.indexOf("aria-") !== -1 || s == "role" ? a.setAttribute(s, t) : a[s] = t;
          }), a;
        }, o.exports.addClass = function(u, c) {
          u && (" " + u.className + " ").indexOf(" " + c + " ") == -1 && (u.className = u.className === "" ? c : u.className + " " + c);
        }, o.exports.removeClass = function(u, c) {
          var a, s;
          if (u.className.indexOf(c) != -1) {
            for (s = (a = u.className.split(" ")).length - 1; 0 <= s; s--) a[s] === c && a.splice(s, 1);
            u.className = a.join(" ");
          }
        }, o.exports.hasClass = function(u, c) {
          return u.className.indexOf(c) != -1;
        }, o.exports.getClasses = function(u) {
          return u.className ? u.className.split(" ") : [];
        }, o.exports.getElementAttributes = function(u) {
          var c, a, s = {};
          if (u && u.attributes && 0 < u.attributes.length) for (var t, e = (t = u.attributes).length - 1; 0 <= e; e--) c = t[e].name, a = t[e].value, typeof u[c] != "boolean" && ",autoplay,controls,loop,muted,default,".indexOf("," + c + ",") === -1 || (a = a !== null), s[c] = a;
          return s;
        }, o.exports.insertFirst = function(u, c) {
          c.firstChild ? c.insertBefore(u, c.firstChild) : c.appendChild(u);
        }, o.exports.blockTextSelection = function() {
          document.body.focus(), document.onselectstart = function() {
            return !1;
          };
        }, o.exports.unblockTextSelection = function() {
          document.onselectstart = function() {
            return !0;
          };
        }, o.exports.css = function(u, c, a) {
          return !(!u || !u.style) && (c && a ? (u.style[c] = a, !0) : a || typeof c != "string" ? !a && typeof c == "object" && (_.each(c, function(s, t) {
            u.style[s] = t;
          }), !0) : u.style[c]);
        }, o.exports.getTransformName = function(u) {
          for (var c = ["transform", "WebkitTransform", "MozTransform", "msTransform", "OTransform"], a = c[0], s = 0, t = c.length; s < t; s++) if (u.style[c[s]] !== void 0) {
            a = c[s];
            break;
          }
          return a;
        }, o.exports.getTransformEventName = function(u, c) {
          for (var a = ["", "Webkit", "Moz", "ms", "O"], s = c.toLowerCase(), t = ["transform", "WebkitTransform", "MozTransform", "msTransform", "OTransform"], e = 0, n = t.length; e < n; e++) if (u.style[t[e]] !== void 0) {
            e != 0 && (s = a[e] + c);
            break;
          }
          return s;
        }, o.exports.addCssByStyle = function(s) {
          var c = document, a = c.createElement("style"), s = (a.setAttribute("type", "text/css"), a.styleSheet ? a.styleSheet.cssText = s : (s = c.createTextNode(s), a.appendChild(s)), c.getElementsByTagName("head"));
          (s.length ? s[0] : c.documentElement).appendChild(a);
        }, o.exports.getTranslateX = function(u) {
          var c = 0;
          if (u) try {
            var a = window.getComputedStyle(u), s = o.exports.getTransformName(u), c = new (window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix)(a[s]).m41;
          } catch (t) {
            console.log(t);
          }
          return c;
        }, o.exports.getPointerPosition = function(t, c) {
          var a = {}, n = o.exports.findPosition(t), s = t.offsetWidth, t = t.offsetHeight, e = n.top, n = n.left, r = c.pageY, p = c.pageX;
          return c.changedTouches && (p = c.changedTouches[0].pageX, r = c.changedTouches[0].pageY), a.y = Math.max(0, Math.min(1, (e - r + t) / t)), a.x = Math.max(0, Math.min(1, (p - n) / s)), a;
        }, o.exports.findPosition = function(u) {
          var c, a, s, t;
          return (c = u.getBoundingClientRect && u.parentNode ? u.getBoundingClientRect() : c) ? (u = document.documentElement, t = document.body, s = u.clientLeft || t.clientLeft || 0, a = window.pageXOffset || t.scrollLeft, a = c.left + a - s, s = u.clientTop || t.clientTop || 0, u = window.pageYOffset || t.scrollTop, t = c.top + u - s, { left: Math.round(a), top: Math.round(t) }) : { left: 0, top: 0 };
        };
      }, { "./object": 43 }], 34: [function(d, o, x) {
        var _ = d("./object"), u = d("./data"), c = d("./ua"), a = d("./fastclick");
        function s(t, e, n, r) {
          _.each(n, function(p) {
            t(e, p, r);
          });
        }
        o.exports.on = function(t, e, n) {
          if (t) {
            if (_.isArray(e)) return s(o.exports.on, t, e, n);
            c.IS_MOBILE && e == "click" && a.attach(t);
            var r = u.getData(t);
            r.handlers || (r.handlers = {}), r.handlers[e] || (r.handlers[e] = []), n.guid || (n.guid = u.guid()), r.handlers[e].push(n), r.dispatcher || (r.disabled = !1, r.dispatcher = function(p) {
              if (!r.disabled) {
                p = o.exports.fixEvent(p);
                var y = r.handlers[p.type];
                if (y) for (var h = y.slice(0), l = 0, g = h.length; l < g && !p.isImmediatePropagationStopped(); l++) h[l].call(t, p);
              }
            }), r.handlers[e].length == 1 && (t.addEventListener ? t.addEventListener(e, r.dispatcher, !1) : t.attachEvent && t.attachEvent("on" + e, r.dispatcher));
          }
        }, o.exports.off = function(t, e, n) {
          if (t && u.hasData(t)) {
            var r = u.getData(t);
            if (r.handlers) {
              if (_.isArray(e)) return s(o.exports.off, t, e, n);
              var p = function(g) {
                r.handlers[g] = [], o.exports.cleanUpEvents(t, g);
              };
              if (e) {
                var y = r.handlers[e];
                if (y) if (n) {
                  if (n.guid) for (var h = 0; h < y.length; h++) y[h].guid === n.guid && y.splice(h--, 1);
                  o.exports.cleanUpEvents(t, e);
                } else p(e);
              } else for (var l in r.handlers) p(l);
            }
          }
        }, o.exports.cleanUpEvents = function(t, e) {
          var n = u.getData(t);
          n.handlers[e].length === 0 && (delete n.handlers[e], t.removeEventListener ? t.removeEventListener(e, n.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, n.dispatcher)), _.isEmpty(n.handlers) && (delete n.handlers, delete n.dispatcher, delete n.disabled), _.isEmpty(n) && u.removeData(t);
        }, o.exports.fixEvent = function(t) {
          function e() {
            return !0;
          }
          function n() {
            return !1;
          }
          if (!t || !t.isPropagationStopped) {
            var r, p, y, h = t || window.event;
            for (r in t = {}, h) r === "layerX" || r === "layerY" || r === "keyboardEvent.keyLocation" || r == "returnValue" && h.preventDefault || (t[r] = h[r]);
            t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement, t.preventDefault = function() {
              h.preventDefault && h.preventDefault(), t.returnValue = !1, t.isDefaultPrevented = e, t.defaultPrevented = !0;
            }, t.isDefaultPrevented = n, t.defaultPrevented = !1, t.stopPropagation = function() {
              h.stopPropagation && h.stopPropagation(), t.cancelBubble = !0, t.isPropagationStopped = e;
            }, t.isPropagationStopped = n, t.stopImmediatePropagation = function() {
              h.stopImmediatePropagation && h.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation();
            }, t.isImmediatePropagationStopped = n, t.clientX != null && (p = document.documentElement, y = document.body, t.pageX = t.clientX + (p && p.scrollLeft || y && y.scrollLeft || 0) - (p && p.clientLeft || y && y.clientLeft || 0), t.pageY = t.clientY + (p && p.scrollTop || y && y.scrollTop || 0) - (p && p.clientTop || y && y.clientTop || 0)), t.which = t.charCode || t.keyCode, t.button != null && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0);
          }
          return t;
        }, o.exports.trigger = function(t, e) {
          var n, r, p;
          if (t) return n = u.hasData(t) ? u.getData(t) : {}, r = t.parentNode || t.ownerDocument, typeof e == "string" && (p = null, !t.paramData && t.paramData != 0 || (p = t.paramData, t.paramData = null, t.removeAttribute(p)), e = { type: e, target: t, paramData: p }), e = o.exports.fixEvent(e), n.dispatcher && n.dispatcher.call(t, e), r && !e.isPropagationStopped() && e.bubbles !== !1 ? o.exports.trigger(r, e) : r || e.defaultPrevented || (p = u.getData(e.target), e.target[e.type] && (p.disabled = !0, typeof e.target[e.type] == "function" && e.target[e.type](), p.disabled = !1)), !e.defaultPrevented;
        }, o.exports.one = function(t, e, n) {
          if (t) {
            if (_.isArray(e)) return s(o.exports.one, t, e, n);
            var r = function() {
              o.exports.off(t, e, r), n.apply(this, arguments);
            };
            r.guid = n.guid = n.guid || u.guid(), o.exports.on(t, e, r);
          }
        };
      }, { "./data": 31, "./fastclick": 35, "./object": 43, "./ua": 49 }], 35: [function(d, o, x) {
        function _(n, r) {
          var p;
          if (r = r || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = r.touchBoundary || 10, this.layer = n, this.tapDelay = r.tapDelay || 200, this.tapTimeout = r.tapTimeout || 700, !_.notNeeded(n)) {
            for (var y = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], h = 0, l = y.length; h < l; h++) this[y[h]] = /* @__PURE__ */ ((g, m) => function() {
              return g.apply(m, arguments);
            })(this[y[h]], this);
            c && (n.addEventListener("mouseover", this.onMouse, !0), n.addEventListener("mousedown", this.onMouse, !0), n.addEventListener("mouseup", this.onMouse, !0)), n.addEventListener("click", this.onClick, !0), n.addEventListener("touchstart", this.onTouchStart, !1), n.addEventListener("touchmove", this.onTouchMove, !1), n.addEventListener("touchend", this.onTouchEnd, !1), n.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (n.removeEventListener = function(g, m, v) {
              var f = Node.prototype.removeEventListener;
              g === "click" ? f.call(n, g, m.hijacked || m, v) : f.call(n, g, m, v);
            }, n.addEventListener = function(g, m, v) {
              var f = Node.prototype.addEventListener;
              g === "click" ? f.call(n, g, m.hijacked || (m.hijacked = function(b) {
                b.propagationStopped || m(b);
              }), v) : f.call(n, g, m, v);
            }), typeof n.onclick == "function" && (p = n.onclick, n.addEventListener("click", function(g) {
              p(g);
            }, !1), n.onclick = null);
          }
        }
        var u = 0 <= navigator.userAgent.indexOf("Windows Phone"), c = 0 < navigator.userAgent.indexOf("Android") && !u, a = /iP(ad|hone|od)/.test(navigator.userAgent) && !u, s = a && /OS 4_\d(_\d)?/.test(navigator.userAgent), t = a && /OS [6-7]_\d/.test(navigator.userAgent), e = 0 < navigator.userAgent.indexOf("BB10");
        _.prototype.needsClick = function(n) {
          switch (n.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
              if (n.disabled) return !0;
              break;
            case "input":
              if (a && n.type === "file" || n.disabled) return !0;
              break;
            case "label":
            case "iframe":
            case "video":
              return !0;
          }
          return /\bneedsclick\b/.test(n.className);
        }, _.prototype.needsFocus = function(n) {
          switch (n.nodeName.toLowerCase()) {
            case "textarea":
              return !0;
            case "select":
              return !c;
            case "input":
              switch (n.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                  return !1;
              }
              return !n.disabled && !n.readOnly;
            default:
              return /\bneedsfocus\b/.test(n.className);
          }
        }, _.prototype.sendClick = function(n, r) {
          var p;
          document.activeElement && document.activeElement !== n && document.activeElement.blur(), r = r.changedTouches[0], (p = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(n), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), p.forwardedTouchEvent = !0, n.dispatchEvent(p);
        }, _.prototype.determineEventType = function(n) {
          return c && n.tagName.toLowerCase() === "select" ? "mousedown" : "click";
        }, _.prototype.focus = function(n) {
          var r;
          a && n.setSelectionRange && n.type.indexOf("date") !== 0 && n.type !== "time" && n.type !== "month" && n.type !== "email" ? (r = n.value.length, n.setSelectionRange(r, r)) : n.focus();
        }, _.prototype.updateScrollParent = function(n) {
          var r, p = n.fastClickScrollParent;
          if (!p || !p.contains(n)) {
            r = n;
            do
              if (r.scrollHeight > r.offsetHeight) {
                p = r, n.fastClickScrollParent = r;
                break;
              }
            while (r = r.parentElement);
          }
          p && (p.fastClickLastScrollTop = p.scrollTop);
        }, _.prototype.getTargetElementFromEventTarget = function(n) {
          return n.nodeType === Node.TEXT_NODE ? n.parentNode : n;
        }, _.prototype.onTouchStart = function(n) {
          var r, p, y;
          if (!(1 < n.targetTouches.length)) {
            if (r = this.getTargetElementFromEventTarget(n.target), p = n.targetTouches[0], a) {
              if ((y = window.getSelection()).rangeCount && !y.isCollapsed) return !0;
              if (!s) {
                if (p.identifier && p.identifier === this.lastTouchIdentifier) return n.preventDefault(), !1;
                this.lastTouchIdentifier = p.identifier, this.updateScrollParent(r);
              }
            }
            this.trackingClick = !0, this.trackingClickStart = n.timeStamp, this.targetElement = r, this.touchStartX = p.pageX, this.touchStartY = p.pageY, n.timeStamp - this.lastClickTime < this.tapDelay && n.preventDefault();
          }
          return !0;
        }, _.prototype.touchHasMoved = function(r) {
          var r = r.changedTouches[0], p = this.touchBoundary;
          return Math.abs(r.pageX - this.touchStartX) > p || Math.abs(r.pageY - this.touchStartY) > p;
        }, _.prototype.onTouchMove = function(n) {
          return this.trackingClick && (this.targetElement !== this.getTargetElementFromEventTarget(n.target) || this.touchHasMoved(n)) && (this.trackingClick = !1, this.targetElement = null), !0;
        }, _.prototype.findControl = function(n) {
          return n.control !== void 0 ? n.control : n.htmlFor ? document.getElementById(n.htmlFor) : n.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
        }, _.prototype.onTouchEnd = function(n) {
          var r, p, y, h = this.targetElement;
          if (!this.trackingClick) return !0;
          if (n.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
          if (n.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
          if (this.cancelNextClick = !1, this.lastClickTime = n.timeStamp, r = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, t && (y = n.changedTouches[0], (h = document.elementFromPoint(y.pageX - window.pageXOffset, y.pageY - window.pageYOffset) || h).fastClickScrollParent = this.targetElement.fastClickScrollParent), (y = h.tagName.toLowerCase()) === "label") {
            if (p = this.findControl(h)) {
              if (this.focus(h), c) return !1;
              h = p;
            }
          } else if (this.needsFocus(h)) return 100 < n.timeStamp - r || a && window.top !== window && y === "input" ? this.targetElement = null : (this.focus(h), this.sendClick(h, n), a && y === "select" || (this.targetElement = null, n.preventDefault())), !1;
          return !(!a || s || !(p = h.fastClickScrollParent) || p.fastClickLastScrollTop === p.scrollTop) || (this.needsClick(h) || (n.preventDefault(), this.sendClick(h, n)), !1);
        }, _.prototype.onTouchCancel = function() {
          this.trackingClick = !1, this.targetElement = null;
        }, _.prototype.onMouse = function(n) {
          return !this.targetElement || !(!n.forwardedTouchEvent && n.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) && (n.stopImmediatePropagation ? n.stopImmediatePropagation() : n.propagationStopped = !0, n.stopPropagation(), n.preventDefault(), 1));
        }, _.prototype.onClick = function(n) {
          return this.trackingClick ? (this.targetElement = null, !(this.trackingClick = !1)) : n.target.type === "submit" && n.detail === 0 || ((n = this.onMouse(n)) || (this.targetElement = null), n);
        }, _.prototype.destroy = function() {
          var n = this.layer;
          c && (n.removeEventListener("mouseover", this.onMouse, !0), n.removeEventListener("mousedown", this.onMouse, !0), n.removeEventListener("mouseup", this.onMouse, !0)), n.removeEventListener("click", this.onClick, !0), n.removeEventListener("touchstart", this.onTouchStart, !1), n.removeEventListener("touchmove", this.onTouchMove, !1), n.removeEventListener("touchend", this.onTouchEnd, !1), n.removeEventListener("touchcancel", this.onTouchCancel, !1);
        }, _.notNeeded = function(n) {
          var r, p;
          return window.ontouchstart === void 0 || (p = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) && (!c || (r = document.querySelector("meta[name=viewport]")) && (r.content.indexOf("user-scalable=no") !== -1 || 31 < p && document.documentElement.scrollWidth <= window.outerWidth)) || e && 10 <= (p = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] && 3 <= p[2] && (r = document.querySelector("meta[name=viewport]")) && (r.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth) ? !0 : n.style.msTouchAction === "none" || n.style.touchAction === "manipulation" || !!(27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (r = document.querySelector("meta[name=viewport]")) && (r.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) || n.style.touchAction === "none" || n.style.touchAction === "manipulation";
        }, _.attach = function(n, r) {
          return new _(n, r);
        }, o.exports = _;
      }, {}], 36: [function(d, o, x) {
        var _ = d("./data");
        o.exports.bind = function(u, c, a) {
          c.guid || (c.guid = _.guid());
          function s() {
            return c.apply(u, arguments);
          }
          return s.guid = a ? a + "_" + c.guid : c.guid, s;
        };
      }, { "./data": 31 }], 37: [function(d, o, x) {
        function _() {
          _ = function() {
            return e;
          };
          var t, e = {}, n = Object.prototype, r = n.hasOwnProperty, w = typeof Symbol == "function" ? Symbol : {}, p = w.iterator || "@@iterator", y = w.asyncIterator || "@@asyncIterator", h = w.toStringTag || "@@toStringTag";
          function l(F, U, M, P) {
            Object.defineProperty(F, U, { value: M, enumerable: !P, configurable: !P, writable: !P });
          }
          try {
            l({}, "");
          } catch {
            l = function(U, M, P) {
              return U[M] = P;
            };
          }
          function g(F, j, M, P) {
            var I, L, V, Q, j = j && j.prototype instanceof f ? j : f, j = Object.create(j.prototype);
            return l(j, "_invoke", (I = F, L = M, V = new N(P || []), Q = 1, function(k, D) {
              if (Q === 3) throw Error("Generator is already running");
              if (Q === 4) {
                if (k === "throw") throw D;
                return { value: t, done: !0 };
              }
              for (V.method = k, V.arg = D; ; ) {
                var W = V.delegate;
                if (W && (W = function ee(re, ne) {
                  var le = ne.method, K = re.i[le];
                  return K === t ? (ne.delegate = null, le === "throw" && re.i.return && (ne.method = "return", ne.arg = t, ee(re, ne), ne.method === "throw") || le !== "return" && (ne.method = "throw", ne.arg = new TypeError("The iterator does not provide a '" + le + "' method")), v) : (le = m(K, re.i, ne.arg), le.type === "throw" ? (ne.method = "throw", ne.arg = le.arg, ne.delegate = null, v) : (K = le.arg, K ? K.done ? (ne[re.r] = K.value, ne.next = re.n, ne.method !== "return" && (ne.method = "next", ne.arg = t), ne.delegate = null, v) : K : (ne.method = "throw", ne.arg = new TypeError("iterator result is not an object"), ne.delegate = null, v)));
                }(W, V), W)) {
                  if (W === v) continue;
                  return W;
                }
                if (V.method === "next") V.sent = V._sent = V.arg;
                else if (V.method === "throw") {
                  if (Q === 1) throw Q = 4, V.arg;
                  V.dispatchException(V.arg);
                } else V.method === "return" && V.abrupt("return", V.arg);
                if (Q = 3, W = m(I, L, V), W.type === "normal") {
                  if (Q = V.done ? 4 : 2, W.arg === v) continue;
                  return { value: W.arg, done: V.done };
                }
                W.type === "throw" && (Q = 4, V.method = "throw", V.arg = W.arg);
              }
            }), !0), j;
          }
          function m(F, U, M) {
            try {
              return { type: "normal", arg: F.call(U, M) };
            } catch (P) {
              return { type: "throw", arg: P };
            }
          }
          e.wrap = g;
          var v = {};
          function f() {
          }
          function b() {
          }
          function S() {
          }
          var w = {}, T = (l(w, p, function() {
            return this;
          }), Object.getPrototypeOf), T = T && T(T(O([]))), C = (T && T !== n && r.call(T, p) && (w = T), S.prototype = f.prototype = Object.create(w));
          function R(F) {
            ["next", "throw", "return"].forEach(function(U) {
              l(F, U, function(M) {
                return this._invoke(U, M);
              });
            });
          }
          function E(F, U) {
            var M;
            l(this, "_invoke", function(P, I) {
              function L() {
                return new U(function(V, Q) {
                  (function j(ne, D, W, ee) {
                    var re, ne = m(F[ne], F, D);
                    if (ne.type !== "throw") return (D = (re = ne.arg).value) && typeof D == "object" && r.call(D, "__await") ? U.resolve(D.__await).then(function(le) {
                      j("next", le, W, ee);
                    }, function(le) {
                      j("throw", le, W, ee);
                    }) : U.resolve(D).then(function(le) {
                      re.value = le, W(re);
                    }, function(le) {
                      return j("throw", le, W, ee);
                    });
                    ee(ne.arg);
                  })(P, I, V, Q);
                });
              }
              return M = M ? M.then(L, L) : L();
            }, !0);
          }
          function A(F) {
            this.tryEntries.push(F);
          }
          function H(F) {
            var U = F[4] || {};
            U.type = "normal", U.arg = t, F[4] = U;
          }
          function N(F) {
            this.tryEntries = [[-1]], F.forEach(A, this), this.reset(!0);
          }
          function O(F) {
            if (F != null) {
              var U, M = F[p];
              if (M) return M.call(F);
              if (typeof F.next == "function") return F;
              if (!isNaN(F.length)) return U = -1, (M = function P() {
                for (; ++U < F.length; ) if (r.call(F, U)) return P.value = F[U], P.done = !1, P;
                return P.value = t, P.done = !0, P;
              }).next = M;
            }
            throw new TypeError(typeof F + " is not iterable");
          }
          return l(C, "constructor", b.prototype = S), l(S, "constructor", b), l(S, h, b.displayName = "GeneratorFunction"), e.isGeneratorFunction = function(F) {
            return F = typeof F == "function" && F.constructor, !!F && (F === b || (F.displayName || F.name) === "GeneratorFunction");
          }, e.mark = function(F) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(F, S) : (F.__proto__ = S, l(F, h, "GeneratorFunction")), F.prototype = Object.create(C), F;
          }, e.awrap = function(F) {
            return { __await: F };
          }, R(E.prototype), l(E.prototype, y, function() {
            return this;
          }), e.AsyncIterator = E, e.async = function(F, U, M, P, I) {
            I === void 0 && (I = Promise);
            var L = new E(g(F, U, M, P), I);
            return e.isGeneratorFunction(U) ? L : L.next().then(function(V) {
              return V.done ? V.value : L.next();
            });
          }, R(C), l(C, h, "Generator"), l(C, p, function() {
            return this;
          }), l(C, "toString", function() {
            return "[object Generator]";
          }), e.keys = function(F) {
            var U, M = Object(F), P = [];
            for (U in M) P.unshift(U);
            return function I() {
              for (; P.length; ) if ((U = P.pop()) in M) return I.value = U, I.done = !1, I;
              return I.done = !0, I;
            };
          }, e.values = O, N.prototype = { constructor: N, reset: function(F) {
            if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(H), !F) for (var U in this) U.charAt(0) === "t" && r.call(this, U) && !isNaN(+U.slice(1)) && (this[U] = t);
          }, stop: function() {
            this.done = !0;
            var F = this.tryEntries[0][4];
            if (F.type === "throw") throw F.arg;
            return this.rval;
          }, dispatchException: function(F) {
            if (this.done) throw F;
            var U = this;
            function M(k) {
              L.type = "throw", L.arg = F, U.next = k;
            }
            for (var P = U.tryEntries.length - 1; 0 <= P; --P) {
              var I = this.tryEntries[P], L = I[4], V = this.prev, Q = I[1], j = I[2];
              if (I[0] === -1) return M("end"), !1;
              if (!Q && !j) throw Error("try statement without catch or finally");
              if (I[0] != null && I[0] <= V) {
                if (V < Q) return this.method = "next", this.arg = t, M(Q), !0;
                if (V < j) return M(j), !1;
              }
            }
          }, abrupt: function(F, U) {
            for (var M = this.tryEntries.length - 1; 0 <= M; --M) {
              var P = this.tryEntries[M];
              if (-1 < P[0] && P[0] <= this.prev && this.prev < P[2]) {
                var I = P;
                break;
              }
            }
            var L = (I = I && (F === "break" || F === "continue") && I[0] <= U && U <= I[2] ? null : I) ? I[4] : {};
            return L.type = F, L.arg = U, I ? (this.method = "next", this.next = I[2], v) : this.complete(L);
          }, complete: function(F, U) {
            if (F.type === "throw") throw F.arg;
            return F.type === "break" || F.type === "continue" ? this.next = F.arg : F.type === "return" ? (this.rval = this.arg = F.arg, this.method = "return", this.next = "end") : F.type === "normal" && U && (this.next = U), v;
          }, finish: function(F) {
            for (var U = this.tryEntries.length - 1; 0 <= U; --U) {
              var M = this.tryEntries[U];
              if (M[2] === F) return this.complete(M[4], M[3]), H(M), v;
            }
          }, catch: function(F) {
            for (var U = this.tryEntries.length - 1; 0 <= U; --U) {
              var M, P, I = this.tryEntries[U];
              if (I[0] === F) return (M = I[4]).type === "throw" && (P = M.arg, H(I)), P;
            }
            throw Error("illegal catch attempt");
          }, delegateYield: function(F, U, M) {
            return this.delegate = { i: O(F), r: U, n: M }, this.method === "next" && (this.arg = t), v;
          } }, e;
        }
        function u(t, e, n, r, p, y, h) {
          try {
            var l = t[y](h), g = l.value;
          } catch (m) {
            return n(m);
          }
          l.done ? e(g) : Promise.resolve(g).then(r, p);
        }
        function c(t) {
          return function() {
            var e = this, n = arguments;
            return new Promise(function(r, p) {
              var y = t.apply(e, n);
              function h(g) {
                u(y, r, p, h, l, "next", g);
              }
              function l(g) {
                u(y, r, p, h, l, "throw", g);
              }
              h(void 0);
            });
          };
        }
        var a, s = typeof Promise > "u" ? d("es6-promise").Promise : Promise;
        d = self, a = function() {
          return (n = { d: function(b, S) {
            for (var w in S) n.o(S, w) && !n.o(b, w) && Object.defineProperty(b, w, { enumerable: !0, get: S[w] });
          }, o: function(b, S) {
            return Object.prototype.hasOwnProperty.call(b, S);
          } }).d(r = {}, { default: function() {
            return f;
          } }), p = navigator.userAgent, y = /qqbrowser/i.test(p.toLowerCase()), h = /Edge/i.test(p), h = /Chrome/i.test(p) && !h && !y, l = /Safari/i.test(p) && !h, y = p.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/), h = y && y[1], g = h && Number(h.split(".")[0]), m = (() => {
            var b = c(_().mark(function S(w) {
              var T;
              return _().wrap(function(C) {
                for (; ; ) switch (C.prev = C.next) {
                  case 0:
                    return C.next = 2, fetch(w);
                  case 2:
                    return T = C.sent, C.next = 5, T.blob();
                  case 5:
                    return T = C.sent, C.abrupt("return", URL.createObjectURL(T));
                  case 7:
                  case "end":
                    return C.stop();
                }
              }, S);
            }));
            return function(S) {
              return b.apply(this, arguments);
            };
          })(), v = { includeSystemHijack: !0, showVideo: !1, format: "mp4", codecTags: ["hev1", "hvc1"], timeout: 2e3 }, f = function(b) {
            return b === void 0 && (b = {}), new s((() => {
              var S = c(_().mark(function w(T) {
                var C, R, E, A, H, N, O, F, U, M, P, I, L;
                return _().wrap(function(V) {
                  for (; ; ) switch (V.prev = V.next) {
                    case 0:
                      if (A = Object.assign({}, v, b), C = A.includeSystemHijack, R = A.showVideo, O = A.codecTags, E = A.format, A = A.timeout, H = performance.now(), N = -1 < O.indexOf("hvc1"), O = -1 < O.indexOf("hev1"), U = F = !1, !(l && g && 11 <= g)) {
                        V.next = 14;
                        break;
                      }
                      if (M = t("hvc1", E), V.t0 = C, V.t0) {
                        V.next = 9;
                        break;
                      }
                      return V.next = 8, m(M);
                    case 8:
                      M = V.sent;
                    case 9:
                      return V.next = 11, e(M, R, "hvc1", A);
                    case 11:
                      F = V.sent, V.next = 34;
                      break;
                    case 14:
                      if (!N) {
                        V.next = 24;
                        break;
                      }
                      if (P = t("hvc1", E), V.t1 = C, V.t1) {
                        V.next = 21;
                        break;
                      }
                      return V.next = 20, m(P);
                    case 20:
                      P = V.sent;
                    case 21:
                      return V.next = 23, e(P, R, "hvc1", A);
                    case 23:
                      F = V.sent;
                    case 24:
                      if (!O) {
                        V.next = 34;
                        break;
                      }
                      if (I = t("hev1", E), V.t2 = C, V.t2) {
                        V.next = 31;
                        break;
                      }
                      return V.next = 30, m(I);
                    case 30:
                      I = V.sent;
                    case 31:
                      return V.next = 33, e(I, R, "hev1", A);
                    case 33:
                      U = V.sent;
                    case 34:
                      L = performance.now(), T({ isHvc1Supported: F, isHev1Supported: U, time: Math.ceil(L - H) });
                    case 36:
                    case "end":
                      return V.stop();
                  }
                }, w);
              }));
              return function(w) {
                return S.apply(this, arguments);
              };
            })());
          }, r.default;
          function t(b, S) {
            var w = (S = S === void 0 ? "mp4" : S) === "hls", T = "";
            switch (b = b === void 0 ? "" : b) {
              case "hvc1":
                T = w ? "https://player.alicdn.com/lib/detect-assets/01s_20x20_hvc1.m3u8" : "https://ice-pub-media.myalicdn.com/vod-demo/hevc/01s_20x20_hvc1.mp4";
                break;
              case "hev1":
                T = w ? "https://player.alicdn.com/lib/detect-assets/01s_20x20_hev1.m3u8" : "https://ice-pub-media.myalicdn.com/vod-demo/hevc/01s_20x20_hev1.mp4";
                break;
              default:
                T = "";
            }
            return T;
          }
          function e(b, S, w, T) {
            S === void 0 && (S = !1), w === void 0 && (w = "");
            var C = performance.now(), R = T;
            return new s(function(E) {
              A = b, (H = S ? 100 : 0) === void 0 && (H = 100), (N = document.createElement("video")).setAttribute("width", "" + H), N.setAttribute("height", "" + H), N.setAttribute("muted", "muted"), N.setAttribute("crossorigin", "anonymous"), N.setAttribute("preload", "preload"), N.setAttribute("autoplay", "autoplay"), N.setAttribute("webkit-playsinline", "webkit-playsinline"), N.setAttribute("playsinline", "playsinline"), N.setAttribute("x-webkit-airplay", "x-webkit-airplay"), N.setAttribute("playsinline", "playsinline"), N.src = A;
              var A, H, N, O = N, F = setInterval(function() {
                var U, M, P, I, L;
                (performance.now() - C > R || O.videoWidth !== 0) && (clearInterval(F), U = O.videoWidth !== 0, S ? (O.setAttribute("controls", "controls"), M = O, (P = w) === void 0 && (P = ""), I = document.createElement("dv"), (L = document.createElement("h3")).innerText = P, I.appendChild(M), I.appendChild(L), document.body.appendChild(I)) : (O.pause(), O = null), E(U));
              });
            });
          }
          var n, r, p, y, h, l, g, m, v, f;
        }, typeof x == "object" && typeof o == "object" ? o.exports = a() : typeof x == "object" ? x.hevcDetector = a() : d.hevcDetector = a();
      }, { "es6-promise": 9 }], 38: [function(d, o, x) {
        function _(a) {
          for (var s in a = typeof a == "string" ? this.parseAttrList(a) : a) a.hasOwnProperty(s) && (this[s] = a[s]);
        }
        var u = /^(\d+)x(\d+)$/, c = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g;
        _.prototype = { decimalInteger: function(a) {
          return a = parseInt(this[a], 10), a > Number.MAX_SAFE_INTEGER ? 1 / 0 : a;
        }, hexadecimalInteger: function(a) {
          if (this[a]) {
            for (var s = (1 & (s = (this[a] || "0x").slice(2)).length ? "0" : "") + s, t = new Uint8Array(s.length / 2), e = 0; e < s.length / 2; e++) t[e] = parseInt(s.slice(2 * e, 2 * e + 2), 16);
            return t;
          }
          return null;
        }, hexadecimalIntegerAsNumber: function(a) {
          return a = parseInt(this[a], 16), a > Number.MAX_SAFE_INTEGER ? 1 / 0 : a;
        }, decimalFloatingPoint: function(a) {
          return parseFloat(this[a]);
        }, enumeratedString: function(a) {
          return this[a];
        }, decimalResolution: function(a) {
          if (a = u.exec(this[a]), a !== null) return { width: parseInt(a[1], 10), height: parseInt(a[2], 10) };
        }, parseAttrList: function(a) {
          var s, t = {};
          for (c.lastIndex = 0; (s = c.exec(a)) !== null; ) {
            var e = s[2];
            e.indexOf('"') === 0 && e.lastIndexOf('"') === e.length - 1 && (e = e.slice(1, -1)), t[s[1]] = e;
          }
          return t;
        } }, o.exports = _;
      }, {}], 39: [function(d, o, x) {
        function _() {
          this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = [];
        }
        function u() {
          this.loaders = {};
        }
        var c = d("../constants"), a = d("../playerutil"), s = d("./attrlist"), t = d("../io"), e = d("./urltoolkit"), n = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g, r = /#EXT-X-MEDIA:(.*)/g, p = new RegExp([/#EXTINF:(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"), y = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(PART-INF):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/, h = "RegionBlock", l = function() {
          this.method = null, this.key = null, this.iv = null, this._uri = null;
        };
        _.prototype.getUrl = function() {
          return !this._url && this.relurl && (this._url = e.buildAbsoluteURL(this.baseurl, this.relurl, { alwaysNormalize: !0 })), this._url;
        }, _.prototype.Seturl = function(g) {
          this._url = g;
        }, _.prototype.getProgramDateTime = function() {
          return !this._programDateTime && this.rawProgramDateTime && (this._programDateTime = new Date(Date.parse(this.rawProgramDateTime))), this._programDateTime;
        }, _.prototype.GetbyteRange = function() {
          var g, m, v;
          return this._byteRange || (g = this._byteRange = [], this.rawByteRange && ((m = this.rawByteRange.split("@", 2)).length === 1 ? (v = this.lastByteRangeEndOffset, g[0] = v || 0) : g[0] = parseInt(m[1]), g[1] = parseInt(m[0]) + g[0])), this._byteRange;
        }, _.prototype.getByteRangeStartOffset = function() {
          return this.byteRange[0];
        }, _.prototype.getByteRangeEndOffset = function() {
          return this.byteRange[1];
        }, _.prototype.getDecryptdata = function() {
          return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata;
        }, u.prototype = ((d = { parseMasterPlaylist: function(g, m) {
          var v = [];
          for (n.lastIndex = 0; (S = n.exec(g)) != null; ) {
            var f = {}, b = f.attrs = new s(S[1]), S = (f.url = this.resolve(S[2], m), b.decimalResolution("RESOLUTION"));
            if (S && (f.width = S.width, f.height = S.height), f.bitrate = b.decimalInteger("AVERAGE-BANDWIDTH") || b.decimalInteger("BANDWIDTH"), f.name = b.NAME, w = b.CODECS) for (var w = w.split(/[ ,]+/), T = 0; T < w.length; T++) {
              var C = w[T];
              C.indexOf("avc1") !== -1 ? f.videoCodec = this.avc1toavcoti(C) : C.indexOf("hvc1") !== -1 ? f.videoCodec = C : f.audioCodec = C;
            }
            v.push(f);
          }
          return v;
        }, parseMasterPlaylistMedia: function(g, m, v, f) {
          var b = [], S = 0;
          for (r.lastIndex = 0; (T = r.exec(g)) != null; ) {
            var w = {}, T = new s(T[1]);
            T.TYPE === v && (w.groupId = T["GROUP-ID"], w.name = T.NAME, w.type = v, w.default = T.DEFAULT === "YES", w.autoselect = T.AUTOSELECT === "YES", w.forced = T.FORCED === "YES", T.URI && (w.url = this.resolve(T.URI, m)), w.lang = T.LANGUAGE, w.name || (w.name = w.lang), f && (w.audioCodec = f), w.id = S++, b.push(w));
          }
          return b;
        }, avc1toavcoti: function(g) {
          var m = g.split("."), v = 2 < m.length ? (v = m.shift() + ".", (v += parseInt(m.shift()).toString(16)) + ("000" + parseInt(m.shift()).toString(16)).substr(-4)) : g;
          return v;
        }, load: function(g, m, v) {
          var f = this;
          t.get(g, function(b) {
            var S, w, T, C = f.parseMasterPlaylist(b, g);
            C.length && (S = f.parseMasterPlaylistMedia(b, g, "AUDIO", C[0].audioCodec), w = f.parseMasterPlaylistMedia(b, g, "SUBTITLES"), S.length) && (T = !1, S.forEach(function(R) {
              R.url || (T = !0);
            }), T === !1) && C[0].audioCodec && !C[0].attrs.AUDIO && (console.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), S.unshift({ type: "main", name: "main" })), m({ levels: C, audioTracks: S, subtitles: w, url: g, string: b });
          }, function(b, S, w) {
            v && ((w = a.parseHttpHeaders(w)["x-tengine-error"]) && -1 < c.RegionBlockMessages.indexOf(w) && (b = h), v(b, S));
          });
        }, loadMediaPlaylist: function(g, m, v) {
          var f = this, b = (g = g || {}).string, S = g.url;
          b ? (g = f.parseLevelPlaylist(b, S), m(g)) : t.get(S, function(w) {
            w = f.parseLevelPlaylist(w, S), m(w);
          }, function(w) {
            v && v(w);
          });
        }, resolve: function(g, m) {
          return e.buildAbsoluteURL(m, g, { alwaysNormalize: !0 });
        } }).parseMasterPlaylist = function(g, m) {
          var v = [];
          for (n.lastIndex = 0; (S = n.exec(g)) != null; ) {
            var f = {}, b = f.attrs = new s(S[1]), S = (f.url = this.resolve(S[2], m), b.decimalResolution("RESOLUTION"));
            if (S && (f.width = S.width, f.height = S.height), f.bitrate = b.decimalInteger("AVERAGE-BANDWIDTH") || b.decimalInteger("BANDWIDTH"), f.name = b.NAME, w = b.CODECS) for (var w = w.split(/[ ,]+/), T = 0; T < w.length; T++) {
              var C = w[T];
              C.indexOf("avc1") !== -1 ? f.videoCodec = this.avc1toavcoti(C) : C.indexOf("hvc1") !== -1 ? f.videoCodec = C : f.audioCodec = C;
            }
            v.push(f);
          }
          return v;
        }, d.parseMasterPlaylistMedia = function(g, m, v, f) {
          var b = [], S = 0;
          for (r.lastIndex = 0; (T = r.exec(g)) != null; ) {
            var w = {}, T = new s(T[1]);
            T.TYPE === v && (w.groupId = T["GROUP-ID"], w.name = T.NAME, w.type = v, w.default = T.DEFAULT === "YES", w.autoselect = T.AUTOSELECT === "YES", w.forced = T.FORCED === "YES", T.URI && (w.url = this.resolve(T.URI, m)), w.lang = T.LANGUAGE, w.name || (w.name = w.lang), f && (w.audioCodec = f), w.id = S++, b.push(w));
          }
          return b;
        }, d.avc1toavcoti = function(g) {
          var m = g.split("."), v = 2 < m.length ? (v = m.shift() + ".", (v += parseInt(m.shift()).toString(16)) + ("000" + parseInt(m.shift()).toString(16)).substr(-4)) : g;
          return v;
        }, d.parseLevelPlaylist = function(g, m, v, f) {
          var b, S, w = 0, T = 0, C = { type: null, version: null, url: m, fragments: [], live: !0, startSN: 0 }, R = new l(), E = 0, A = null, H = new _();
          for (p.lastIndex = 0; (b = p.exec(g)) !== null; ) {
            var N = b[1];
            if (N) {
              H.duration = parseFloat(N);
              var O = (" " + b[2]).slice(1);
              H.title = O || null, H.tagList.push(O ? ["INF", N, O] : ["INF", N]);
            } else if (b[3]) isNaN(H.duration) || (O = w++, H.type = f, H.start = T, H.levelkey = R, H.sn = O, H.level = v, H.cc = E, H.baseurl = m, H.relurl = (" " + b[3]).slice(1), C.fragments.push(H), T += (A = H).duration, H = new _());
            else if (b[4]) H.rawByteRange = (" " + b[4]).slice(1), A && (N = A.byteRangeEndOffset) && (H.lastByteRangeEndOffset = N);
            else if (b[5]) H.rawProgramDateTime = (" " + b[5]).slice(1), H.tagList.push(["PROGRAM-DATE-TIME", H.rawProgramDateTime]), C.programDateTime === void 0 && (C.programDateTime = new Date(new Date(Date.parse(b[5])) - 1e3 * T));
            else {
              for (b = b[0].match(y), S = 1; S < b.length && b[S] === void 0; S++) ;
              var F = (" " + b[S + 1]).slice(1), U = (" " + b[S + 2]).slice(1);
              switch (b[S]) {
                case "#":
                  H.tagList.push(U ? [F, U] : [F]);
                  break;
                case "PLAYLIST-TYPE":
                  C.type = F.toUpperCase();
                  break;
                case "MEDIA-SEQUENCE":
                  w = C.startSN = parseInt(F);
                  break;
                case "TARGETDURATION":
                  C.targetduration = parseFloat(F);
                  break;
                case "VERSION":
                  C.version = parseInt(F);
                  break;
                case "EXTM3U":
                  break;
                case "ENDLIST":
                  C.live = !1;
                  break;
                case "DIS":
                  E++, H.tagList.push(["DIS"]);
                  break;
                case "DISCONTINUITY-SEQ":
                  E = parseInt(F);
                  break;
                case "KEY":
                  var I = new s(F), M = I.enumeratedString("METHOD"), P = I.URI, I = I.hexadecimalInteger("IV");
                  M && (R = new l(), P) && 0 <= ["AES-128", "SAMPLE-AES"].indexOf(M) && (R.method = M, R.baseuri = m, R.reluri = P, R.key = null, R.iv = I);
                  break;
                case "START":
                  M = new s(F).decimalFloatingPoint("TIME-OFFSET"), isNaN(M) || (C.startTimeOffset = M);
                  break;
                case "MAP":
                  P = new s(F), H.relurl = P.URI, H.rawByteRange = P.BYTERANGE, H.baseurl = m, H.level = v, H.type = f, H.sn = "initSegment", C.initSegment = H, H = new _();
                  break;
                case "PART-INF":
                  I = new s(F), C.partTarget = I.decimalFloatingPoint("PART-TARGET");
                  break;
                default:
                  console.log("line parsed but not handled: " + b);
              }
            }
          }
          return (H = A) && !H.relurl && (C.fragments.pop(), T -= H.duration), C.totalduration = T, C.averagetargetduration = T / C.fragments.length, C.endSN = w - 1, C;
        }, d), u.ERROR_REGION_BLOCK = h, o.exports = u;
      }, { "../constants": 29, "../io": 41, "../playerutil": 46, "./attrlist": 38, "./urltoolkit": 40 }], 40: [function(d, o, x) {
        var _ = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, u = /^([^\/;?#]*)(.*)$/, c = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, s = { buildAbsoluteURL: function(y, e, n) {
          if (n = n || {}, y = y.trim(), !(e = e.trim())) {
            if (!n.alwaysNormalize) return y;
            var r = s.parseURL(y);
            if (r) return r.path = s.normalizePath(r.path), s.buildURLFromParts(r);
            throw new Error("Error trying to parse base URL.");
          }
          if (r = s.parseURL(e), !r) throw new Error("Error trying to parse relative URL.");
          if (r.scheme) return n.alwaysNormalize ? (r.path = s.normalizePath(r.path), s.buildURLFromParts(r)) : e;
          if (e = s.parseURL(y), !e) throw new Error("Error trying to parse base URL.");
          !e.netLoc && e.path && e.path[0] !== "/" && (y = u.exec(e.path), e.netLoc = y[1], e.path = y[2]), e.netLoc && !e.path && (e.path = "/");
          var p, y = { scheme: e.scheme, netLoc: r.netLoc, path: null, params: r.params, query: r.query, fragment: r.fragment };
          return r.netLoc || (y.netLoc = e.netLoc, r.path[0] !== "/" && (r.path ? (p = (p = e.path).substring(0, p.lastIndexOf("/") + 1) + r.path, y.path = s.normalizePath(p)) : (y.path = e.path, r.params || (y.params = e.params, r.query) || (y.query = e.query)))), y.path === null && (y.path = n.alwaysNormalize ? s.normalizePath(r.path) : r.path), s.buildURLFromParts(y);
        }, parseURL: function(t) {
          return t = _.exec(t), t ? { scheme: t[1] || "", netLoc: t[2] || "", path: t[3] || "", params: t[4] || "", query: t[5] || "", fragment: t[6] || "" } : null;
        }, normalizePath: function(t) {
          for (t = t.split("").reverse().join("").replace(c, ""); t.length !== (t = t.replace(a, "")).length; ) ;
          return t.split("").reverse().join("");
        }, buildURLFromParts: function(t) {
          return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment;
        } };
        o.exports = s;
      }, {}], 41: [function(d, o, x) {
        var _ = d("./url");
        o.exports.get = function(u, c, a, s, t, e) {
          o.exports.ajax.call(this, "GET", u, {}, c, a, s, t, void 0, e);
        }, o.exports.post = function(u, c, a, s, t, e) {
          var n = { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", Accept: "application/json" };
          o.exports.ajax("POST", u, c, a, s, t, e, n);
        }, o.exports.postWithHeader = function(u, c, a, s, t) {
          o.exports.ajax("POST", u, c, s, t, !0, !1, a);
        }, o.exports.ajax = function(u, c, a, s, t, e, n, r, p) {
          var y, h, l;
          t = t || function() {
          }, typeof XMLHttpRequest > "u" && (window.XMLHttpRequest = function() {
            try {
              return new window.ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch {
            }
            try {
              return new window.ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch {
            }
            try {
              return new window.ActiveXObject("Msxml2.XMLHTTP");
            } catch {
            }
            throw new Error("This browser does not support XMLHttpRequest.");
          }), h = new XMLHttpRequest(), p && (h.timeout = p), p = _.parseUrl(c), l = window.location, p.protocol + p.host === l.protocol + l.host || !window.XDomainRequest || "withCredentials" in h ? (y = p.protocol == "file:" || l.protocol == "file:", h.onreadystatechange = function() {
            h.readyState === 4 && (h.status === 200 || y && h.status === 0 ? s(h.responseText) : t(h.responseText, h.status, h));
          }) : ((h = new window.XDomainRequest()).onload = function() {
            s(h.responseText);
          }, h.onerror = t, h.onprogress = function() {
          }, h.ontimeout = t);
          try {
            if (e === void 0 && (e = !0), h.open(u, c, e), n && (h.withCredentials = !0), r) for (var g in r) r.hasOwnProperty(g) && h.setRequestHeader(g, r[g]);
          } catch (m) {
            return void t(m);
          }
          try {
            h.send(a);
          } catch (m) {
            t(m);
          }
        }, o.exports.jsonp = function(u, c, a) {
          var s = "jsonp_callback_" + Math.round(1e5 * Math.random()), t = document.createElement("script");
          u && (t.src = u + (0 <= u.indexOf("?") ? "&" : "?") + "callback=" + s + "&cb=" + s, t.onerror = function() {
            delete window[s], document.body.removeChild(t), a();
          }, t.onload = function() {
            setTimeout(function() {
              window[s] && (delete window[s], document.body.removeChild(t));
            }, 0);
          }, window[s] = function(e) {
            delete window[s], document.body.removeChild(t), c(e);
          }, document.body.appendChild(t));
        }, o.exports.loadJS = function(u, c, a) {
          var s = document.getElementsByTagName("HEAD").item(0), t = document.createElement("script");
          t.setAttribute("crossorigin", "anonymous"), u && u.toLowerCase().indexOf("https://") < 0 && u.toLowerCase().indexOf("http://") < 0 && (u = document.URL.replace(/(\/[^\/]*?)$/i, "") + u), t.type = "text/javascript", t.src = u, t.onload = function() {
            c && c();
          }, t.onerror = function() {
            a && a();
          }, s.appendChild(t);
        };
      }, { "./url": 50 }], 42: [function(d, o, x) {
        var _ = d("./dom");
        o.exports.render = function(u, t) {
          var a = t.align || (t.className ? "" : "tl"), s = t.x || 0, t = t.y || 0, e = s.indexOf && 0 < s.indexOf("%") ? "" : "px", n = t.indexOf && 0 < t.indexOf("%") ? "" : "px";
          a === "tl" ? _.css(u, { float: "left", "margin-left": s + e, "margin-top": t + n }) : a === "tr" ? _.css(u, { float: "right", "margin-right": s + e, "margin-top": t + n }) : a === "tlabs" ? _.css(u, { position: "absolute", left: s + e, top: t + n }) : a === "trabs" ? _.css(u, { position: "absolute", right: s + e, top: t + n }) : a === "blabs" ? _.css(u, { position: "absolute", left: s + e, bottom: t + n }) : a === "brabs" ? _.css(u, { position: "absolute", right: s + e, bottom: t + n }) : a === "cc" && _.addClass(u, "loading-center");
        };
      }, { "./dom": 33 }], 43: [function(d, o, x) {
        var _ = Object.prototype.hasOwnProperty;
        o.exports.create = Object.create || function(u) {
          function c() {
          }
          return c.prototype = u, new c();
        }, o.exports.isArray = function(u) {
          return Object.prototype.toString.call(arg) === "[object Array]";
        }, o.exports.isEmpty = function(u) {
          for (var c in u) if (u[c] !== null) return !1;
          return !0;
        }, o.exports.each = function(u, c, a) {
          if (o.exports.isArray(u)) for (var s = 0, t = u.length; s < t && c.call(a || this, u[s], s) !== !1; ++s) ;
          else for (var e in u) if (_.call(u, e) && c.call(a || this, e, u[e]) === !1) break;
          return u;
        }, o.exports.merge = function(u, c) {
          if (c) for (var a in c) _.call(c, a) && (u[a] = c[a]);
          return u;
        }, o.exports.deepMerge = function(u, c) {
          var a, s, t;
          for (a in u = o.exports.copy(u), c) _.call(c, a) && (s = u[a], t = c[a], o.exports.isPlain(s) && o.exports.isPlain(t) ? u[a] = o.exports.deepMerge(s, t) : u[a] = c[a]);
          return u;
        }, o.exports.copy = function(u) {
          return o.exports.merge({}, u);
        }, o.exports.isPlain = function(u) {
          return !!u && typeof u == "object" && u.toString() === "[object Object]" && u.constructor === Object;
        }, o.exports.isArray = Array.isArray || function(u) {
          return Object.prototype.toString.call(u) === "[object Array]";
        }, o.exports.unescape = function(u) {
          return u.replace(/&([^;]+);/g, function(c, a) {
            return { amp: "&", lt: "<", gt: ">", quot: '"', "#x27": "'", "#x60": "`" }[a.toLowerCase()] || c;
          });
        };
      }, {}], 44: [function(d, o, x) {
        var _, u = d("./object");
        (_ = function() {
        }).extend = function(c) {
          var a, s, t = (c = c || {}).init || this.prototype.init || function() {
          };
          for (s in (((a = function() {
            t.apply(this, arguments);
          }).prototype = u.create(this.prototype)).constructor = a).extend = _.extend, a.create = _.create, c) c.hasOwnProperty(s) && (a.prototype[s] = c[s]);
          return a;
        }, _.create = function() {
          var c = u.create(this.prototype);
          return this.apply(c, arguments), c;
        }, o.exports = _;
      }, { "./object": 43 }], 45: [function(d, o, x) {
        var _ = !new Function("try {return this===window;}catch(e){ return false;}")();
        o.exports.isSSR = _;
      }, {}], 46: [function(d, o, x) {
        var _ = d("./object"), u = d("../config"), c = d("./dom"), a = d("./cookie"), s = d("./constants"), t = d("../lang/index"), e = d("./ua"), n = d("./io"), r = d("../player/base/plugin/defaultemptycomponent"), p = d("./hardware-decoding-detector"), y = { preload: !0, autoplay: !0, autoplayPolicy: { fallbackToMute: !1, showUnmuteBtn: !0 }, useNativeControls: !1, width: "100%", height: "300px", cover: "", from: "", trackLog: !0, logBatched: !0, logReportTo: void 0, heartHeatInterval: 30, isLive: !1, playsinline: !0, showBarTime: 5e3, rePlay: !1, mute: !1, liveRetry: 5, liveRetryInterval: 1, liveRetryStep: 0, disableVodHalfRetry: !1, disableLiveHalfRetry: !1, keyShortCuts: !1, keyFastForwardStep: 10, isVBR: !1, vodRetry: 3, format: "", definition: "", defaultDefinition: "", loadDataTimeout: 20, waitingTimeout: 60, waitingBufferedTime: 3, delayLoadingShow: 1, controlBarForOver: !1, controlBarVisibility: "hover", enableSystemMenu: !1, qualitySort: "asc", x5_video_position: "normal", x5_type: "", x5_fullscreen: !1, x5_orientation: "landscape|portrait", x5LandscapeAsFullScreen: !0, license: {}, autoPlayDelay: 0, autoPlayDelayDisplayText: "", useHlsPluginForSafari: !1, enableMSEForAndroid: !0, encryptType: 0, language: "zh-cn", languageTexts: {}, extLanguageTexts: {}, mediaType: "video", outputType: "", playConfig: {}, reAuthInfo: {}, components: [], liveTimeShiftUrl: "", liveShiftSource: "", liveShiftTime: "", liveShiftMinOffset: 30, videoHeight: "100%", videoWidth: "100%", enableWorker: !0, authTimeout: "", enableMockFullscreen: !1, region: "cn-shanghai", debug: !1, progressMarkers: [], ratio: void 0, snapshotWatermark: { left: "500", top: "100", text: "", font: "16px 宋体", fillColor: "#FFFFFF", strokeColor: "#FFFFFF" }, liveStartTime: "", liveOverTime: "", enableStashBufferForFlv: !1, flvOption: {}, hlsOption: { stopLoadAsPaused: !1 }, drmOption: {}, hlsLoadingTimeOut: 2e4, useHlsPlugOnMobile: !0, useFlvPlugOnMobile: !0, lowLatencyMode: !1, useHls2: !0, useDrm2: void 0, skipRtsSupportCheck: !1, rtsLoadDataTimeout: 6e3, rtsOption: {}, rtsFallback: !1, rtsFallbackSource: void 0, rtsFallbackType: void 0, rtsVersion: "", rtsSdkUrl: "", nudgeMaxRetry: 5, tracks: [], recreatePlayer: function() {
        }, diagnosisButtonVisible: !0, enableH265: !1, forceH265: !1, enableH266: !1, forceH266: !1, h265Threads: !0, h265Simd: !0, preventRecord: !1, traceId: "", mediaAuth: void 0, textTracks: void 0, _native: !0, hlsUriToken: "", thumbnailUrl: "", refreshAccessInfo: function() {
        }, drmSessionTimeout: 5e3, skinRes: "//" + u.domain + "/de/prismplayer-flash/" + u.flashVersion + "/atlas/defaultSkin", splayerUrl: null, splayerWasmDomain: null, logo: [], disablePip: !1, assetPrefix: null, clickPause: e.IS_PC, clickPauseDelay: 200, statisticsReportInterval: 5e3, skinLayoutIgnore: [], disableSeek: !1, dashjsUrl: null, dashOption: {}, disableDumpBuffer: !1, useSW: !1, swScriptURL: void 0, env: "", autoSize: "", watchStartTime: void 0, watchEndTime: void 0, start: void 0, end: void 0, dbClickFullscreen: e.IS_PC, dbClickFullscreenDelay: 200, enableHlsH265: !1, bitrateDisplayHandler: void 0, longPressFastForward: !e.IS_PC, dbClickSkip: !e.IS_PC }, h = (o.exports.getDefaultH5Layout = function() {
          return [{ name: "bigPlayButton", align: "blabs", x: 30, y: 80 }, { name: "unmuteButton", align: "cc" }, { name: "H5Loading", align: "cc" }, { name: "errorDisplay", align: "tlabs", x: 0, y: 0 }, { name: "infoDisplay" }, { name: "tooltip", align: "blabs", x: 0, y: 50 }, { name: "thumbnail" }, { name: "controlBar", align: "blabs", x: 0, y: 0, children: [{ name: "progress", align: "blabs", x: 0, y: 44 }, { name: "playButton", align: "tl", x: 15, y: 12 }, { name: "timeDisplay", align: "tl", x: 10, y: 5 }, { name: "fullScreenButton", align: "tr", x: 10, y: 12 }, { name: "subtitle", align: "tr", x: 15, y: 12 }, { name: "setting", align: "tr", x: 15, y: 12 }, { name: "volume", align: "tr", x: 5, y: 10 }] }];
        }, o.exports.getDefaultAudioLayout = function() {
          return [{ name: "controlBar", align: "blabs", x: 0, y: 0, children: [{ name: "progress", align: "blabs", x: 0, y: 44 }, { name: "playButton", align: "tl", x: 15, y: 12 }, { name: "timeDisplay", align: "tl", x: 10, y: 5 }, { name: "volume", align: "tr", x: 5, y: 10 }] }];
        }, o.exports.getDefaultFlashLayout = function() {
          return [{ name: "bigPlayButton", align: "blabs", x: 30, y: 80 }, { name: "controlBar", align: "blabs", x: 0, y: 0, children: [{ name: "progress", align: "tlabs", x: 0, y: 0 }, { name: "playButton", align: "tl", x: 15, y: 26 }, { name: "nextButton", align: "tl", x: 10, y: 26 }, { name: "timeDisplay", align: "tl", x: 10, y: 24 }, { name: "fullScreenButton", align: "tr", x: 10, y: 25 }, { name: "streamButton", align: "tr", x: 10, y: 23 }, { name: "volume", align: "tr", x: 10, y: 25 }] }, { name: "fullControlBar", align: "tlabs", x: 0, y: 0, children: [{ name: "fullTitle", align: "tl", x: 25, y: 6 }, { name: "fullNormalScreenButton", align: "tr", x: 24, y: 13 }, { name: "fullTimeDisplay", align: "tr", x: 10, y: 12 }, { name: "fullZoom", align: "cc" }] }];
        }, o.exports.canPlayType = function(l) {
          var g = document.createElement("video");
          return g.canPlayType ? g.canPlayType(l) : "";
        }, o.exports.canPlayHls = function() {
          return o.exports.canPlayType("application/x-mpegURL") != "";
        }, o.exports.isUsedHlsPluginOnMobile = function(l) {
          return !!(e.IS_MOBILE && (e.IS_CHROME || e.IS_FIREFOX || e.IS_X5 || e.IS_EDGE_NEW) && o.exports.isSupportHls());
        }, o.exports.isSafariUsedHlsPlugin = function(l) {
          return !!(e.os.pc && e.browser.safari && l);
        }, o.exports.validateSource = function(l) {
          return !0;
        }, o.exports.supportH5Video = function() {
          return document.createElement("video").canPlayType !== void 0;
        }, o.exports.createWrapper = function(l) {
          var g = l.id, g = typeof g == "string" ? (g.indexOf("#") === 0 && (g = g.slice(1)), c.el(g)) : g;
          if (g && g.nodeName) return o.exports.adjustContainerLayout(g, l), g;
          throw new TypeError("没有为播放器指定容器");
        }, o.exports.adjustContainerLayout = function(l, g) {
          g.width && !l.style.width && (l.style.width = g.width), g.height && !l.style.height && (l.style.height = g.height);
        }, o.exports.isSupportHls = function() {
          var l = window.MediaSource = window.MediaSource || window.WebKitMediaSource, g = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer, l = l && typeof l.isTypeSupported == "function" && l.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), g = (e.IS_ANDROID && e.is_X5 && (l = !0), !g || g.prototype && typeof g.prototype.appendBuffer == "function" && typeof g.prototype.remove == "function");
          return l && g;
        }, o.exports.isSupportMMS = function() {
          return !!window.ManagedMediaSource;
        }, o.exports.isSupportFlv = function() {
          return o.exports.isSupportHls();
        }, o.exports.isSupportMSE = function() {
          return o.exports.isSupportHls() || o.exports.isSupportMMS();
        }, o.exports.isSupportedMediaSource = function() {
          return !!window.MediaSource && !!MediaSource.isTypeSupported;
        }, o.exports.isSupportedDrm = function() {
          return !!(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration) && o.exports.isSupportMSE();
        }, o.exports.isAudio = function(l, g) {
          if (g) return o.exports.isMp3Format(g);
          g = !1;
          try {
            g = l && new URL("http:" + l).pathname.split(".").pop().toLowerCase() === "mp3";
          } catch {
            return l && 0 < l.toLowerCase().indexOf(".mp3");
          }
          return g;
        }, o.exports.isLiveShift = function(l) {
          return l.isLive && l.liveStartTime && l.liveOverTime;
        }, o.exports.isHls = function(l, g) {
          if (g) return o.exports.isHlsFormat(g);
          g = !1;
          try {
            g = l && new URL("http:" + l).pathname.split(".").pop().toLowerCase() === "m3u8";
          } catch {
            return l && 0 < l.toLowerCase().indexOf(".m3u8");
          }
          return g;
        }, o.exports.isDash = function(l, g) {
          if (g) return o.exports.isDashFormat(g);
          g = !1;
          try {
            g = l && new URL("http:" + l).pathname.split(".").pop().toLowerCase() === "mpd";
          } catch {
            return l && 0 < l.toLowerCase().indexOf(".mpd");
          }
          return g;
        }, o.exports.isFlv = function(l, g) {
          if (g) return o.exports.isFlvFormat(g);
          g = !1;
          try {
            g = l && new URL("http:" + l).pathname.split(".").pop().toLowerCase() === "flv";
          } catch {
            return l && 0 < l.toLowerCase().indexOf(".flv");
          }
          return g;
        }, o.exports.isRTMP = function(l) {
          return l && -1 < l.toLowerCase().indexOf("rtmp:");
        }, o.exports.isRts = function(l) {
          return l && -1 < l.toLowerCase().indexOf("artc:");
        }, o.exports.isMp4 = function(l, g) {
          if (g) return o.exports.isMp4Format(g);
          g = !1;
          try {
            g = l && new URL("http:" + l).pathname.split(".").pop().toLowerCase() === "mp4";
          } catch {
            return l && -1 < l.toLowerCase().indexOf(".mp4");
          }
          return g;
        }, o.exports.isSupportedFormat = function(l) {
          if (!l) return !1;
          try {
            var g = l.toLowerCase();
            return ~["mp3", "mp4", "mpd", "hls", "m3u8", "flv"].indexOf(g);
          } catch {
            return !1;
          }
        }, o.exports.isMp3Format = function(l) {
          if (!l) return !1;
          try {
            var g = l.toLowerCase();
            return ~["mp3"].indexOf(g);
          } catch {
            return !1;
          }
        }, o.exports.isMp4Format = function(l) {
          if (!l) return !1;
          try {
            var g = l.toLowerCase();
            return ~["mp4"].indexOf(g);
          } catch {
            return !1;
          }
        }, o.exports.isFlvFormat = function(l) {
          if (!l) return !1;
          try {
            var g = l.toLowerCase();
            return ~["flv"].indexOf(g);
          } catch {
            return !1;
          }
        }, o.exports.isHlsFormat = function(l) {
          if (!l) return !1;
          try {
            var g = l.toLowerCase();
            return ~["hls", "m3u8"].indexOf(g);
          } catch {
            return !1;
          }
        }, o.exports.isDashFormat = function(l) {
          if (!l) return !1;
          try {
            var g = l.toLowerCase();
            return ~["mpd"].indexOf(g);
          } catch {
            return !1;
          }
        }, o.exports.getFormat = function(m) {
          var g = { artc: "rts", m3u8: "hls" }, m = (m = /\.(mp4)|\.(mp3)|\.(m3u8)|\.(flv)|(artc):/.exec(m)) == null ? void 0 : m[0];
          return m = m && m.replace(/\.|:|artc|m3u8/gi, function(v) {
            return g[v] || "";
          });
        }, o.exports.checkSecuritSupport = function() {
          return o.exports.isSupportMSE() ? e.IS_IOS && (e.IS_UC || e.IS_QUARK || e.IS_BAIDU) ? t.get("iOSVodEncriptionBlacklist") : "" : "serviceWorker" in navigator ? void 0 : location.protocol === "http:" ? t.get("Error_SW_Https_required") : t.get("UseChromeForVodEncription") + "(SW not found)";
        }, o.exports.nativeSupportH265 = function() {
          return e.IS_IOS || e.IS_MAC_SAFARI;
        }, o.exports.findSelectedStreamLevel = function(l, g) {
          var m = g;
          if (m || (m = a.get(s.SelectedStreamLevel))) {
            for (var v = 0; v < l.length; v++) if (l[v].definition == m) return v;
          } else a.set(s.SelectedStreamLevel, l[0].definition, 365);
          return 0;
        }, o.exports.getHistoryDetectResult = function(l, g) {
          if (l) return g = g === "hls", l === "hvc1" ? g ? a.get(s.HWDetectHvc1Hls) : a.get(s.HWDetectHvc1) : l === "hev1" ? g ? a.get(s.HWDetectHev1Hls) : a.get(s.HWDetectHev1) : void 0;
        }, o.exports.setHistoryDetectResult = function(l, f, m) {
          var v = "unknownCodec", f = f === "hls";
          l === "hvc1" ? v = f ? s.HWDetectHvc1Hls : s.HWDetectHvc1 : l === "hev1" && (v = f ? s.HWDetectHev1Hls : s.HWDetectHev1), a.set(v, m);
        }, o.exports.handleOption = function(l, g) {
          o.exports.isRts(l.source) && (l.isLive = !0);
          var m, v = _.merge(_.copy(y), l), f = (l.autoplayPolicy && (v.autoplayPolicy = _.merge(y.autoplayPolicy, l.autoplayPolicy)), [{ name: "fullScreenButton", align: "tr", x: 20, y: 12 }, { name: "subtitle", align: "tr", x: 15, y: 12 }, { name: "setting", align: "tr", x: 15, y: 12 }, { name: "volume", align: "tr", x: 5, y: 10 }]), b = !1;
          if (l.useFlashPrism || o.exports.isRTMP(l.source) ? (b = !0, f = [{ name: "liveIco", align: "tlabs", x: 15, y: 25 }, { name: "fullScreenButton", align: "tr", x: 10, y: 25 }, { name: "volume", align: "tr", x: 10, y: 25 }]) : (m = o.exports.isLiveShift(v)) ? (f.push({ name: "liveShiftProgress", align: "tlabs", x: 0, y: 0 }), f.push({ name: "playButton", align: "tl", x: 15, y: 12 }), f.push({ name: "liveDisplay", align: "tl", x: 15, y: 6 })) : f.push({ name: "liveDisplay", align: "tlabs", x: 15, y: 6 }), l.isLive) {
            if (l.skinLayout === void 0) v.skinLayout = [{ name: "errorDisplay", align: "tlabs", x: 0, y: 0 }, { name: "infoDisplay" }, { name: "bigPlayButton", align: "blabs", x: 30, y: 80 }, { name: "unmuteButton", align: "cc" }, { name: "tooltip", align: "blabs", x: 0, y: 56 }, { name: "H5Loading", align: "cc" }, { name: "controlBar", align: "blabs", x: 0, y: 0, children: o.exports.isRts(l.source) ? [{ name: "fullScreenButton", align: "tr", x: 20, y: 12 }, { name: "volume", align: "tr", x: 5, y: 10 }, { name: "liveDisplay", align: "tlabs", x: 15, y: 6 }] : f }];
            else if (l.skinLayout != 0) {
              for (var S = l.skinLayout.length, w = [], T = -1, C = 0; C < S; C++) if (v.skinLayout[C].name == "controlBar") {
                for (var T = C, R = v.skinLayout[C].children.length, E = 0; E < R; E++) {
                  var A, H = v.skinLayout[C].children[E].name;
                  H != "liveDisplay" && H != "liveIco" && H != "fullScreenButton" && H != "volume" && H != "snapshot" && H != "setting" && H != "subtitle" && (!m || H != "progress" && H != "playButton" && H != "timeDisplay") || (A = v.skinLayout[C].children[E], H == "progress" ? A.name = "liveShiftProgress" : H == "timeDisplay" ? A.name = "liveShiftTimeDisplay" : b && H == "liveDisplay" && (A.name = "liveIco"), w.push(A));
                }
                break;
              }
              T != -1 && (v.skinLayout[T].children = w);
            }
          }
          return (l.components === void 0 || !l.components || _.isArray(l.components) && l.components.length == 0) && l.components != "false" && (v.components = [r]), v;
        }, o.exports.ignoreSkinLayouts = function(l, g) {
          var m;
          if (g != null && g.length && l != null && l.length) return m = l, g.forEach(function(v) {
            var f, b, S;
            -1 < v.indexOf(".") ? (S = v.split("."), f = S[0], b = S[1], (S = m.find(function(w) {
              return w.name === f;
            })) && (S.children = S.children.filter(function(w) {
              return w.name !== b;
            }))) : m = m.filter(function(w) {
              return w.name !== v;
            });
          }), m;
        }, o.exports.getLiveHostByRegion = function(l) {
          var g = "live.aliyuncs.com";
          return l && -1 < ["ap-southeast-1", "eu-central-1"].indexOf(l) ? "live." + l + ".aliyuncs.com" : g;
        }, o.exports.isVideoTag = function(l) {
          return l && typeof l.nodeName == "string" && l.nodeName.toLowerCase() === "video";
        }, o.exports.unqiueTextTracks = function(l) {
          var g = [], g = (l = l === void 0 ? [] : l).reduce(function(v, f) {
            var b;
            return v.some(function(S) {
              return S.srclang === f.srclang;
            }) ? v : ((b = f).label = f.label || f.srclang, [].concat(v, [b]));
          }, []), m = {};
          return g.forEach(function(v, f) {
            m[v.label] ? m[v.label].push(f) : m[v.label] = [f];
          }), Object.keys(m).forEach(function(v) {
            v = m[v] || [], 1 < v.length && v.forEach(function(f) {
              g[f].label = g[f].label + "(" + g[f].srclang + ")";
            });
          }), g;
        }, o.exports.isHvc1Codec = function(l) {
          return -1 < (l = l === void 0 ? "" : l).indexOf("hvc1");
        }, o.exports.isHev1Codec = function(l) {
          return -1 < (l = l === void 0 ? "" : l).indexOf("hev1");
        }, o.exports.isVvccCodec = function(l) {
          return -1 < (l = l === void 0 ? "" : l).indexOf("vvcC");
        }, o.exports.isVvc1Codec = function(l) {
          return -1 < (l = l === void 0 ? "" : l).indexOf("vvc1");
        }, o.exports.isVvi1Codec = function(l) {
          return -1 < (l = l === void 0 ? "" : l).indexOf("vvi1");
        }, o.exports.isH265Codec = function(l) {
          return o.exports.isHvc1Codec(l = l === void 0 ? "" : l) || o.exports.isHev1Codec(l);
        }, o.exports.isH266Codec = function(l) {
          return o.exports.isVvccCodec(l = l === void 0 ? "" : l) || o.exports.isVvc1Codec(l) || o.exports.isVvi1Codec(l);
        }, o.exports.isH264Codec = function(l) {
          return -1 < (l = l === void 0 ? "" : l).indexOf("avc1");
        }, o.exports.getVideoTrack = function(l) {
          var g;
          return (l = l === void 0 ? [] : l).forEach(function(m) {
            Number(m.type) === 1 && (g = m);
          }), g;
        }, e.IS_ANDROID && (e.dingTalk() || e.IS_UC || e.is_X5 || e.IS_HUAWEI || e.IS_XIAOMI || e.IS_OPPO || e.IS_VIVO || e.IS_MEIZU || e.IS_SAMSUNG || e.IS_WEBVIEW) || e.os && e.os.name === "windows" && e.IS_UC);
        o.exports.shouldUseBasePlayer = function(S, g) {
          var m, v, f, b = S.codecTag, S = S.url, w = "unsupported";
          return !b || (f = o.exports.isHvc1Codec(b), m = o.exports.isMp4(S), S = o.exports.isHls(S), m && o.exports.nativeSupportH265() && f) || m && (() => {
            if (!(!h && (e.IS_CHROME || e.IS_EDGE_NEW))) return !1;
            var T = 0;
            try {
              T = e.USER_AGENT.match(/Chrome\/(\d+)/i)[1];
            } catch {
              T = 0;
            }
            return !(parseInt(T) < 104 || !window.MediaSource || !window.MediaSource.isTypeSupported('video/mp4;codecs="hvc1.1.6.L120.90"'));
          })() ? g(!0) : h ? (f = o.exports.getHistoryDetectResult(b, v = S ? "hls" : "mp4")) === "supported" ? g(!0) : f === w ? g(!1) : void p({ codecTags: [b], format: v, timeout: 2e3 }).then(function(T) {
            if (T = T.isHev1Supported || T.isHvc1Supported, o.exports.setHistoryDetectResult(b, v, T ? "supported" : w), T) return g(!0);
            g(!1);
          }).catch(function(T) {
            console.log("hevcDetector ERROR", T), g(!1);
          }) : g(!1);
        }, o.exports.parseHttpHeaders = function(l) {
          if (l) {
            var g = {};
            try {
              l instanceof Response ? l.headers.forEach(function(m, v) {
                g[v] = m;
              }) : l.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(function(f) {
                var f = f.split(": "), v = f.shift(), f = f.join(": ");
                g[v] = f;
              });
            } catch {
            }
            return g;
          }
        }, o.exports.detectRegionBlock = function(l, g) {
          n.get(l, function() {
            g(!1);
          }, function(m, v, f) {
            f = o.exports.parseHttpHeaders(f)["x-tengine-error"], v === 403 && f && -1 < s.RegionBlockMessages.indexOf(f) ? g(!0) : g(!1);
          });
        }, o.exports.enableDbClickSkip = function(l) {
          return l.dbClickSkip && !l.dbClickFullscreen;
        }, o.exports.drawSnapshotText = function(l, g) {
          g = g.snapshotWatermark, g && g.text && (l.font = g.font, g.fillColor && (l.fillStyle = g.fillColor, l.fillText(g.text, g.left, g.top)), g.strokeColor && (l.strokeStyle = g.strokeColor, l.strokeText(g.text, g.left, g.top)), l.stroke());
        }, o.exports.hasValue = function(l) {
          return l != null && l !== "";
        };
      }, { "../config": 15, "../lang/index": 24, "../player/base/plugin/defaultemptycomponent": 92, "./constants": 29, "./cookie": 30, "./dom": 33, "./hardware-decoding-detector": 37, "./io": 41, "./object": 43, "./ua": 49 }], 47: [function(d, o, x) {
        var _ = d("./object"), u = d("../player/adaptiveplayer"), c = d("./constants").USER_EVENT_NAME;
        o.exports.reloadInstance = function(p, s, t) {
          var e = t, n = (e.dispose(), p.readyCallback), r = p._readyCallbackCalled, p = u.create(p, function(y) {
            s(y), r || n(y);
          });
          o.exports.restoreUserEvents(t, p), o.exports.removeAllProps(e), (e.__proto__ = p)[c] = e[c];
        }, o.exports.storeUserEvents = function(a) {
          var s = a, t = s.__proto__.on, e = {};
          s.on = function(n, r) {
            typeof r == "function" && (e[n] ? e[n].push(r) : e[n] = [r], this._el) && (r.binded = !0, t.call(s, n, r));
          }, s[c] = e;
        }, o.exports.restoreUserEvents = function(a, s) {
          var t = a[c];
          t && _.each(t, function(e) {
            t[e].forEach(function(n) {
              s.on(e, n);
            });
          });
        }, o.exports.removeAllProps = function(a, s) {
          for (var t in s = [].concat(s = s || [], [c]), a) a.hasOwnProperty(t) && s.indexOf(t) === -1 && delete a[t];
        };
      }, { "../player/adaptiveplayer": 65, "./constants": 29, "./object": 43 }], 48: [function(d, o, x) {
        o.exports.set = function(_, u) {
          try {
            window.localStorage && localStorage.setItem(_, u);
          } catch {
            window[_ + "_localStorage"] = u;
          }
        }, o.exports.get = function(_) {
          try {
            if (window.localStorage) return localStorage.getItem(_);
          } catch {
            return window[_ + "_localStorage"];
          }
          return "";
        };
      }, {}], 49: [function(d, o, x) {
        var _, u, c;
        if (o.exports.USER_AGENT = navigator.userAgent, o.exports.IS_IPHONE = /iPhone/i.test(o.exports.USER_AGENT), o.exports.IS_IPAD = /iPad/i.test(o.exports.USER_AGENT), o.exports.IS_IPOD = /iPod/i.test(o.exports.USER_AGENT), o.exports.IS_MAC = /mac/i.test(o.exports.USER_AGENT), o.exports.IS_EDGE = /Edge/i.test(o.exports.USER_AGENT), o.exports.IS_EDGE_NEW = /Edg/i.test(o.exports.USER_AGENT) && !o.exports.IS_EDGE, o.exports.IS_IE11 = /Trident\/7.0/i.test(o.exports.USER_AGENT), o.exports.IS_X5 = /qqbrowser/i.test(o.exports.USER_AGENT.toLowerCase()), o.exports.IS_CHROME = /Chrome/i.test(o.exports.USER_AGENT) && !o.exports.IS_EDGE && !o.exports.IS_EDGE_NEW && !o.exports.IS_X5, o.exports.IS_SAFARI = /Safari/i.test(o.exports.USER_AGENT) && !o.exports.IS_CHROME && !o.exports.IS_EDGE_NEW, o.exports.IS_FIREFOX = /Firefox/i.test(o.exports.USER_AGENT), o.exports.IS_UC = /ucweb|UCBrowser|UBrowser/i.test(o.exports.USER_AGENT), o.exports.IS_QUARK = /Quark/i.test(o.exports.USER_AGENT), o.exports.IS_HUAWEI = /HuaweiBrowser/i.test(o.exports.USER_AGENT), o.exports.IS_XIAOMI = /MiuiBrowser/i.test(o.exports.USER_AGENT), o.exports.IS_OPPO = /HeyTapBrowser/i.test(o.exports.USER_AGENT), o.exports.IS_VIVO = /VivoBrowser/i.test(o.exports.USER_AGENT), o.exports.IS_MEIZU = /MZBrowser/i.test(o.exports.USER_AGENT), o.exports.IS_SAMSUNG = /samsungbrowser/i.test(o.exports.USER_AGENT), o.exports.IS_BAIDU = /baiduboxapp/i.test(o.exports.USER_AGENT), document.all) try {
          var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          o.exports.HAS_FLASH = !!a;
        } catch {
          o.exports.HAS_FLASH = !1;
        }
        else navigator.plugins && 0 < navigator.plugins.length ? (a = navigator.plugins["Shockwave Flash"], o.exports.HAS_FLASH = !!a) : o.exports.HAS_FLASH = !1;
        o.exports.IS_MAC_SAFARI = o.exports.IS_MAC && o.exports.IS_SAFARI && !o.exports.IS_CHROME && !o.exports.HAS_FLASH, o.exports.IS_IOS = o.exports.IS_IPHONE || o.exports.IS_IPAD || o.exports.IS_IPOD, o.exports.IOS_VERSION = (() => {
          var s = o.exports.USER_AGENT.match(/OS (\d+)_/i);
          if (s && s[1]) return s[1];
        })(), o.exports.IOS_FULL_VERSION = (() => {
          var s = o.exports.USER_AGENT.match(/OS (\d+)_(\d+)_?/i);
          if (s && s[1] && s[2]) return s[1] + "." + s[2];
        })(), o.exports.IS_HARMONY = /OpenHarmony/i.test(o.exports.USER_AGENT), o.exports.IS_ANDROID = /Android/i.test(o.exports.USER_AGENT) || o.exports.IS_HARMONY, o.exports.ANDROID_VERSION = (a = o.exports.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i)) ? (u = a[1] && parseFloat(a[1]), _ = a[2] && parseFloat(a[2]), u && _ ? parseFloat(a[1] + "." + a[2]) : u || null) : null, o.exports.IS_OLD_ANDROID = o.exports.IS_ANDROID && /webkit/i.test(o.exports.USER_AGENT) && o.exports.ANDROID_VERSION < 2.3, o.exports.TOUCH_ENABLED = !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), o.exports.IS_MOBILE = o.exports.IS_IOS || o.exports.IS_ANDROID, o.exports.IS_H5 = o.exports.IS_MOBILE || !o.exports.HAS_FLASH, o.exports.IS_PC = !o.exports.IS_MOBILE, o.exports.is_X5 = /micromessenger/i.test(o.exports.USER_AGENT) || /qqbrowser/i.test(o.exports.USER_AGENT), o.exports.IS_ANDROID_FIREFOX = o.exports.IS_ANDROID && o.exports.IS_FIREFOX, o.exports.CHROME_VERSION = o.exports.IS_CHROME && o.exports.USER_AGENT.match(/Chrome\/(\d+)/i)[1], o.exports.getHost = function(s) {
          var t, e, n = "";
          return s === void 0 || s == null || s == "" ? "" : (t = s.indexOf("//"), e = s, n = e = -1 < t ? s.substring(t + 2) : e, (s = (n = (s = e.split("/")) && 0 < s.length ? s[0] : n).split(":")) && 0 < s.length ? s[0] : n);
        }, o.exports.dingTalk = function() {
          var s = o.exports.USER_AGENT.toLowerCase();
          return /dingtalk/i.test(s);
        }, o.exports.IS_DINGTALK = o.exports.dingTalk(), o.exports.wechat = function() {
          var s = o.exports.USER_AGENT.toLowerCase();
          return /micromessenger/i.test(s);
        }, o.exports.inIFrame = function() {
          return self != top;
        }, o.exports.getReferer = function() {
          var s = document.referrer;
          if (o.exports.inIFrame()) try {
            s = top.document.referrer;
          } catch {
            s = document.referrer;
          }
          return s;
        }, o.exports.getHref = function() {
          if (o.exports.inIFrame()) try {
            top.location.href;
          } catch {
          }
          return location.href;
        }, o.exports.check360 = function() {
          return navigator.userAgent.indexOf("Safari") != -1 ? (() => {
            var s = navigator.userAgent.split(" ");
            if (s[s.length - 1].indexOf("Safari") != -1) {
              for (var t in navigator.plugins) if (navigator.plugins[t].filename == "np-mswmp.dll") return !0;
            }
            return !1;
          })() : (navigator.msPointerEnabled == null || navigator.msPointerEnabled) && (navigator.msDoNotTrack == 1 || window.doNotTrack == 1) && (!!Number(window.screenX) && window.screenLeft - window.screenX != 8 || (navigator.userAgent.indexOf("MSIE 7.0") != -1 || navigator.userAgent.indexOf("MSIE 8.0") != -1) && console.count == null);
        }, (function(s, v) {
          var e = this.os = {}, n = this.browser = {}, r = s.match(/Web[kK]it[\/]{0,1}([\d.]+)/), p = s.match(/(Android);?[\s\/]+([\d.]+)?/), y = !!s.match(/\(Macintosh\; Intel /), h = s.match(/(iPad).*OS\s([\d_]+)/), l = s.match(/(iPod)(.*OS\s([\d_]+))?/), g = !h && s.match(/(iPhone\sOS)\s([\d_]+)/), m = s.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), v = /Win\d{2}|Windows/.test(v), f = s.match(/Windows Phone ([\d.]+)/), b = m && s.match(/TouchPad/), S = s.match(/Kindle\/([\d.]+)/), w = s.match(/Silk\/([\d._]+)/), T = s.match(/(BlackBerry).*Version\/([\d.]+)/), C = s.match(/(BB10).*Version\/([\d.]+)/), R = s.match(/(RIM\sTablet\sOS)\s([\d.]+)/), E = s.match(/PlayBook/), A = s.match(/Chrome\/([\d.]+)/) || s.match(/CriOS\/([\d.]+)/), H = s.match(/Firefox\/([\d.]+)/), N = s.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/), O = s.match(/MSIE\s([\d.]+)/) || s.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/), F = !A && s.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/), U = F || s.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
          (n.webkit = !!r) && (n.version = r[1]), p && (e.android = !0, e.version = p[2]), g && !l && (e.ios = e.iphone = !0, e.version = g[2].replace(/_/g, ".")), h && (e.ios = e.ipad = !0, e.version = h[2].replace(/_/g, ".")), l && (e.ios = e.ipod = !0, e.version = l[3] ? l[3].replace(/_/g, ".") : null), f && (e.wp = !0, e.version = f[1]), m && (e.webos = !0, e.version = m[2]), b && (e.touchpad = !0), T && (e.blackberry = !0, e.version = T[2]), C && (e.bb10 = !0, e.version = C[2]), R && (e.rimtabletos = !0, e.version = R[2]), E && (n.playbook = !0), S && (e.kindle = !0, e.version = S[1]), w && (n.silk = !0, n.version = w[1]), !w && e.android && s.match(/Kindle Fire/) && (n.silk = !0), A && (n.chrome = !0, n.version = A[1]), H && (n.firefox = !0, n.version = H[1]), N && (e.firefoxos = !0, e.version = N[1]), O && (n.ie = !0, n.version = O[1]), U && (y || e.ios || v || p) && (n.safari = !0, e.ios || e.android || (n.version = U[1])), e.ios && (n.version = e.version), F && (n.webview = !0), y && ((r = s.match(/[\d]*_[\d]*_[\d]*/)) && 0 < r.length && r[0] && (e.version = r[0].replace(/_/g, ".")), /MQBHD/.test(s)) && (n.version = ((s.match(/.*OS\s([\d_]+)/) || [])[1] || "").replace(/_/g, ".")), e.tablet = !!(h || E || p && !s.match(/Mobile/) || H && s.match(/Tablet/) || O && !s.match(/Phone/) && s.match(/Touch/)), e.phone = !(e.tablet || e.ipod || !(p || g || m || T || C || A && s.match(/Android/) || A && s.match(/CriOS\/([\d.]+)/) || H && s.match(/Mobile/) || O && s.match(/Touch/))), e.pc = !e.tablet && !e.phone, y ? e.name = "macOS" : v ? (e.name = "windows", e.version = (() => {
            var M = navigator.userAgent, P = "";
            return (-1 < M.indexOf("Windows NT 5.0") || -1 < M.indexOf("Windows 2000")) && (P = "2000"), (-1 < M.indexOf("Windows NT 5.1") || -1 < M.indexOf("Windows XP")) && (P = "XP"), (-1 < M.indexOf("Windows NT 5.2") || -1 < M.indexOf("Windows 2003")) && (P = "2003"), (-1 < M.indexOf("Windows NT 6.0") || -1 < M.indexOf("Windows Vista")) && (P = "Vista"), (-1 < M.indexOf("Windows NT 6.1") || -1 < M.indexOf("Windows 7")) && (P = "7"), (-1 < M.indexOf("Windows NT 6.2") || -1 < M.indexOf("Windows 8")) && (P = "8"), (-1 < M.indexOf("Windows NT 6.3") || -1 < M.indexOf("Windows 8.1")) && (P = "8.1"), P = -1 < M.indexOf("Windows NT 10") || -1 < M.indexOf("Windows 10") ? "10" : P;
          })()) : e.name = (() => {
            var M = navigator.userAgent, P = "other", I = o.exports.os;
            return I.ios ? "iOS" : I.android ? "android" : -1 < M.indexOf("Baiduspider") ? "Baiduspider" : -1 < M.indexOf("PlayStation") ? "PS4" : (I = navigator.platform == "Win32" || navigator.platform == "Windows" || -1 < M.indexOf("Windows"), (M = navigator.platform == "Mac68K" || navigator.platform == "MacPPC" || navigator.platform == "Macintosh" || navigator.platform == "MacIntel") && (P = "macOS"), navigator.platform != "X11" || I || M || (P = "Unix"), -1 < String(navigator.platform).indexOf("Linux") && (P = "Linux"), I ? "windows" : P);
          })(), n.name = (l = navigator.userAgent.toLowerCase(), (f = o.exports.browser).firefox ? "Firefox" : f.ie ? /edge/.test(l) ? "Edge" : "IE" : o.exports.IS_EDGE_NEW ? "EdgeChromium" : /micromessenger/.test(l) ? "微信内置浏览器" : /qqbrowser/.test(l) ? "QQ浏览器" : o.exports.IS_UC ? "UC" : o.exports.IS_QUARK ? "Quark" : o.exports.IS_DINGTALK ? "Dingtalk" : o.exports.IS_HUAWEI ? "HuaweiBrowser" : o.exports.IS_XIAOMI ? "MiBrowser" : o.exports.IS_OPPO ? "OppoBrowser" : o.exports.IS_VIVO ? "VivoBrowser" : o.exports.IS_MEIZU ? "MeizuBrowser" : o.exports.IS_SAMSUNG ? "SamsungBrowser" : o.exports.IS_WEBVIEW || /MQBHD/.test(l) ? "webview" : f.chrome ? "Chrome" : f.safari ? "Safari" : /baiduspider/.test(l) ? "Baiduspider" : /opera/.test(l) ? "Opera" : /360se/.test(l) ? "360浏览器" : /bidubrowser/.test(l) ? "百度浏览器" : /metasr/.test(l) ? "搜狗浏览器" : /lbbrowser/.test(l) ? "猎豹浏览器" : /playstation/.test(l) ? "PS4浏览器" : void 0);
        }).call(o.exports, navigator.userAgent, navigator.platform), o.exports.IS_WEBVIEW = (_ = o.exports.USER_AGENT, u = new RegExp("(" + ["WebView", "(iPhone|iPod|iPad)(?!.*Safari)", "Android.*(Version).*(wv|.0.0.0)", "Linux; U; Android"].join("|") + ")", "ig"), c = new RegExp("(" + ["VivoBrowser", "MZBrowser", "MiuiBrowser"].join("|") + ")", "ig"), !!_.match(u) && !_.match(c));
      }, {}], 50: [function(d, o, x) {
        var _ = d("./dom");
        o.exports.getAbsoluteURL = function(u) {
          return u = u.match(/^https?:\/\//) ? u : _.createEl("div", { innerHTML: '<a href="' + u + '">x</a>' }).firstChild.href;
        }, o.exports.parseUrl = function(u) {
          var c, a = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], s = _.createEl("a", { href: u }), t = s.host === "" && s.protocol !== "file:";
          t && ((c = _.createEl("div")).innerHTML = '<a href="' + u + '"></a>', s = c.firstChild, c.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(c));
          for (var e = {}, n = 0; n < a.length; n++) e[a[n]] = s[a[n]];
          return e.segments = s.pathname.replace(/^\//, "").split("/"), t && document.body.removeChild(c), e;
        };
      }, { "./dom": 33 }], 51: [function(d, o, x) {
        var _ = d("./dom"), u = d("./ua"), c = d("./playerutil");
        o.exports.formatTime = function(t) {
          t = Math.max(0, t || 0);
          var s, t = Math.floor(t), e = Math.floor(t / 3600);
          return t %= 3600, s = Math.floor(t / 60), t = t % 60, !(e === 1 / 0 || isNaN(e) || s === 1 / 0 || isNaN(s) || t == 1 / 0 || isNaN(t)) && ((e = 10 <= e ? e : "0" + e) === "00" ? "" : e + ":") + (10 <= s ? s : "0" + s) + ":" + (10 <= t ? t : "0" + t);
        }, o.exports.extractTime = function(a) {
          var s;
          return a ? ((s = 10 <= (s = parseInt(a.getHours())) ? s : "0" + s) === "00" ? "" : s + ":") + (s = 10 <= (s = parseInt(a.getMinutes())) ? s : "0" + s) + ":" + (s = 10 <= (s = parseInt(a.getSeconds())) ? s : "0" + s) : "";
        }, o.exports.convertToTimestamp = function(a, s) {
          var t = "";
          return a && (s ? t = a.gettime() : (t = Date.parse(a), t /= 1e3)), t;
        }, o.exports.convertToDate = function(a, s) {
          var t = "";
          return a && (t = /* @__PURE__ */ new Date()).setTime(1e3 * a), t;
        }, o.exports.parseTime = function(a) {
          var s, t, e;
          return a ? (e = t = s = 0, (a = a.split(":")).length === 3 ? (s = a[0], t = a[1], e = a[2]) : a.length === 2 ? (t = a[0], e = a[1]) : a.length === 1 && (e = a[0]), 3600 * (s = parseInt(s, 10)) + 60 * (t = parseInt(t, 10)) + (e = Math.ceil(parseFloat(e)))) : "00:00:00";
        }, o.exports.formatDate = function(a, s) {
          var t, e = { "M+": a.getMonth() + 1, "d+": a.getDate(), "H+": a.getHours(), "m+": a.getMinutes(), "s+": a.getSeconds(), "q+": Math.floor((a.getMonth() + 3) / 3), S: a.getMilliseconds() };
          for (t in /(y+)/.test(s) && (s = s.replace(RegExp.$1, (a.getFullYear() + "").substr(4 - RegExp.$1.length))), e) new RegExp("(" + t + ")").test(s) && (s = s.replace(RegExp.$1, RegExp.$1.length == 1 ? e[t] : ("00" + e[t]).substr(("" + e[t]).length)));
          return s;
        }, o.exports.sleep = function(a) {
        }, o.exports.htmlEncodeAll = function(a) {
          return a == null ? "" : a.replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
        }, o.exports.toBinary = function(a) {
          if (!window.atob) return "";
          for (var s = atob(a), t = s.length, e = new Uint8Array(t), n = 0; n < t; n++) e[n] = s.charCodeAt(n);
          return e;
        }, o.exports.readyBinary = function(a) {
          for (var s = new Uint8Array(a), t = s.length, e = "", n = 0; n < t; n++) e += s[n];
          return e;
        }, o.exports.delayHide = function(a, s) {
          a && (s === void 0 && (s = 1e3), a.delayHanlder && clearTimeout(a.delayHanlder), a.delayHanlder = setTimeout(function() {
            _.css(a, "display", "none");
          }, s));
        }, o.exports.openInFile = function() {
          return window.location.protocol.toLowerCase().indexOf("file") != -1;
        }, o.exports.contentProtocolMixed = function(a, s, t) {
          return !!((u.os.pc && (c.isHls(a, t) && !u.browser.safari || c.isFlv(a, t)) || s) && window.location.protocol.toLowerCase() == "https:" && a && -1 < a.toLowerCase().indexOf("http://"));
        }, o.exports.queryString = function(a) {
          var s, t, e;
          return (a = (a = decodeURIComponent(a)).split("?")).length === 2 && (s = a[1].split("&")) ? (t = {}, e = 0, $(s).each(function() {
            var n = s[e].split("=");
            n.length === 2 && (t[n[0]] = n[1].replace(/\+/g, " ")), e++;
          }), t) : {};
        }, o.exports.log = function(a) {
          var s = window.location.href, s = o.exports.queryString(s);
          s && s.debug == 1 && console.log(a);
        }, o.exports.arrayBufferToB64 = function(a) {
          for (var s = "", t = new Uint8Array(a), e = t.byteLength, n = 0; n < e; n++) s += String.fromCharCode(t[n]);
          return window.btoa(s);
        }, o.exports.b64ToArrayBuffer = function(a) {
          for (var s = atob(a), t = new Uint8Array(s.length), e = 0; e < s.length; e++) t[e] = s.charCodeAt(e);
          return t.buffer;
        }, o.exports.throttle = function(a, s) {
          var t = null, e = 0;
          return function() {
            for (var n = this, r = arguments.length, p = new Array(r), y = 0; y < r; y++) p[y] = arguments[y];
            var h = Date.now(), l = s - (h - e);
            l <= 0 ? (a.apply(this, p), e = h) : (clearTimeout(t), t = setTimeout(function() {
              a.apply(n, p), e = Date.now();
            }, l));
          };
        };
      }, { "./dom": 33, "./playerutil": 46, "./ua": 49 }], 52: [function(d, o, x) {
        function _(c) {
          for (var a = 5381, s = c.length; s; ) a = 33 * a ^ c.charCodeAt(--s);
          return (a >>> 0).toString();
        }
        var u = d("./vttparse");
        o.exports = { parse: function(e, a, s) {
          var t, e = e.trim().replace(/\r\n|\n\r|\n|\r/g, `
`).split(`
`), n = [], r = new u();
          r.oncue = function(p) {
            p.id = _(p.startTime) + _(p.endTime) + _(p.text), p.text = decodeURIComponent(escape(p.text)), p.isBig = !1;
            var y = p.text.split("#xywh=");
            y.length == 2 && (y = y[1].split(","), p.x = y[0], p.y = y[1], p.w = y[2], p.h = y[3], p.isBig = !0), 0 < p.endTime && n.push(p);
          }, r.onparsingerror = function(p) {
            t = p;
          }, r.onflush = function() {
            t && s ? (s(t), console.log(t)) : a(n);
          }, e.forEach(function(p) {
            r.parse(p + `
`);
          }), r.flush();
        } };
      }, { "./vttparse": 54 }], 53: [function(d, o, x) {
        function _(t) {
          return typeof t == "string" && !!s[t.toLowerCase()] && t.toLowerCase();
        }
        function u(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n, r = arguments[e];
            for (n in r) t[n] = r[n];
          }
          return t;
        }
        function c(t, e, n) {
          var r = this, p = (() => {
            if (typeof navigator < "u") return /MSIE\s8\.0/.test(navigator.userAgent);
          })(), y = {}, h = (p ? r = document.createElement("custom") : y.enumerable = !0, r.hasBeenReset = !1, ""), l = !1, g = t, m = e, v = n, f = null, b = "", S = !0, w = "auto", T = "start", C = 50, R = "middle", E = 50, A = "middle";
          if (Object.defineProperty(r, "id", u({}, y, { get: function() {
            return h;
          }, set: function(H) {
            h = "" + H;
          } })), Object.defineProperty(r, "pauseOnExit", u({}, y, { get: function() {
            return l;
          }, set: function(H) {
            l = !!H;
          } })), Object.defineProperty(r, "startTime", u({}, y, { get: function() {
            return g;
          }, set: function(H) {
            if (typeof H != "number") throw new TypeError("Start time must be set to a number.");
            g = H, this.hasBeenReset = !0;
          } })), Object.defineProperty(r, "endTime", u({}, y, { get: function() {
            return m;
          }, set: function(H) {
            if (typeof H != "number") throw new TypeError("End time must be set to a number.");
            m = H, this.hasBeenReset = !0;
          } })), Object.defineProperty(r, "text", u({}, y, { get: function() {
            return v;
          }, set: function(H) {
            v = "" + H, this.hasBeenReset = !0;
          } })), Object.defineProperty(r, "region", u({}, y, { get: function() {
            return f;
          }, set: function(H) {
            f = H, this.hasBeenReset = !0;
          } })), Object.defineProperty(r, "vertical", u({}, y, { get: function() {
            return b;
          }, set: function(H) {
            if (H = typeof (H = H) == "string" && !!a[H.toLowerCase()] && H.toLowerCase(), H === !1) throw new SyntaxError("An invalid or illegal string was specified.");
            b = H, this.hasBeenReset = !0;
          } })), Object.defineProperty(r, "snapToLines", u({}, y, { get: function() {
            return S;
          }, set: function(H) {
            S = !!H, this.hasBeenReset = !0;
          } })), Object.defineProperty(r, "line", u({}, y, { get: function() {
            return w;
          }, set: function(H) {
            if (typeof H != "number" && H !== "auto") throw new SyntaxError("An invalid number or illegal string was specified.");
            w = H, this.hasBeenReset = !0;
          } })), Object.defineProperty(r, "lineAlign", u({}, y, { get: function() {
            return T;
          }, set: function(H) {
            if (H = _(H), !H) throw new SyntaxError("An invalid or illegal string was specified.");
            T = H, this.hasBeenReset = !0;
          } })), Object.defineProperty(r, "position", u({}, y, { get: function() {
            return C;
          }, set: function(H) {
            if (H < 0 || 100 < H) throw new Error("Position must be between 0 and 100.");
            C = H, this.hasBeenReset = !0;
          } })), Object.defineProperty(r, "positionAlign", u({}, y, { get: function() {
            return R;
          }, set: function(H) {
            if (H = _(H), !H) throw new SyntaxError("An invalid or illegal string was specified.");
            R = H, this.hasBeenReset = !0;
          } })), Object.defineProperty(r, "size", u({}, y, { get: function() {
            return E;
          }, set: function(H) {
            if (H < 0 || 100 < H) throw new Error("Size must be between 0 and 100.");
            E = H, this.hasBeenReset = !0;
          } })), Object.defineProperty(r, "align", u({}, y, { get: function() {
            return A;
          }, set: function(H) {
            if (H = _(H), !H) throw new SyntaxError("An invalid or illegal string was specified.");
            A = H, this.hasBeenReset = !0;
          } })), r.displayState = void 0, p) return r;
        }
        var a, s;
        o.exports = typeof window < "u" && window.VTTCue ? window.VTTCue : (a = { "": !0, lr: !0, rl: !0 }, s = { start: !0, middle: !0, end: !0, left: !0, right: !0 }, c.prototype.getCueAsHTML = function() {
          return window.WebVTT.convertCueToDOMTree(window, this.text);
        }, c);
      }, {}], 54: [function(d, o, x) {
        function _() {
          return { decode: function(r) {
            if (!r) return "";
            if (typeof r != "string") throw new Error("Error - expected string data.");
            return decodeURIComponent(encodeURIComponent(r));
          } };
        }
        var u = d("./vttcue");
        function c() {
          this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new _(), this.regionList = [];
        }
        function a() {
          this.values = /* @__PURE__ */ Object.create(null);
        }
        function s(r, p, y, h) {
          var l, g, m = h ? r.split(h) : [r];
          for (l in m) typeof m[l] == "string" && (g = m[l].split(y)).length === 2 && p(g[0], g[1]);
        }
        a.prototype = { set: function(r, p) {
          this.get(r) || p === "" || (this.values[r] = p);
        }, get: function(r, p, y) {
          return y ? this.has(r) ? this.values[r] : p[y] : this.has(r) ? this.values[r] : p;
        }, has: function(r) {
          return r in this.values;
        }, alt: function(r, p, y) {
          for (var h = 0; h < y.length; ++h) if (p === y[h]) {
            this.set(r, p);
            break;
          }
        }, integer: function(r, p) {
          /^-?\d+$/.test(p) && this.set(r, parseInt(p, 10));
        }, percent: function(r, p) {
          return !!(p.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (p = parseFloat(p)) && p <= 100) && (this.set(r, p), !0);
        } };
        var t = new u(0, 0, 0), e = t.align === "middle" ? "middle" : "center";
        function n(r, p, y) {
          var h, l, g = r;
          function m() {
            var f, b = (b = (b = r).match(/^(\d+):(\d{2})(:\d{2})?(\.\d{3})?/)) ? (f = (f = b[4]) && f.replace(".", ""), b[3] ? S(b[1], b[2], b[3].replace(":", ""), f) : 59 < b[1] ? S(b[1], b[2], 0, f) : S(0, b[1], b[2], f)) : null;
            function S(w, T, C, R) {
              return 3600 * (0 | w) + 60 * (0 | T) + (0 | C) + (0 | R) / 1e3;
            }
            if (b === null) throw new Error("Malformed timestamp: " + g);
            return r = r.replace(/^[^\sa-zA-Z-]+/, ""), b;
          }
          function v() {
            r = r.replace(/^\s+/, "");
          }
          if (v(), p.startTime = m(), v(), r.substr(0, 3) !== "-->") throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + g);
          r = r.substr(3), v(), p.endTime = m(), v(), h = r, p = p, l = new a(), s(h, function(f, b) {
            switch (f) {
              case "region":
                for (var S = y.length - 1; 0 <= S; S--) if (y[S].id === b) {
                  l.set(f, y[S].region);
                  break;
                }
                break;
              case "vertical":
                l.alt(f, b, ["rl", "lr"]);
                break;
              case "line":
                var w = b.split(","), T = w[0];
                l.integer(f, T), l.percent(f, T) && l.set("snapToLines", !1), l.alt(f, T, ["auto"]), w.length === 2 && l.alt("lineAlign", w[1], ["start", e, "end"]);
                break;
              case "position":
                w = b.split(","), l.percent(f, w[0]), w.length === 2 && l.alt("positionAlign", w[1], ["start", e, "end", "line-left", "line-right", "auto"]);
                break;
              case "size":
                l.percent(f, b);
                break;
              case "align":
                l.alt(f, b, ["start", e, "end", "left", "right"]);
            }
          }, /:/, /\s/), p.region = l.get("region", null), p.vertical = l.get("vertical", ""), (h = l.get("line", "auto")) === "auto" && t.line === -1 && (h = -1), p.line = h, p.lineAlign = l.get("lineAlign", "start"), p.snapToLines = l.get("snapToLines", !0), p.size = l.get("size", 100), p.align = l.get("align", e), (h = l.get("position", "auto")) === "auto" && t.position === 50 && (h = p.align === "start" || p.align === "left" ? 0 : p.align === "end" || p.align === "right" ? 100 : 50), p.position = h;
        }
        c.prototype = { parse: function(r) {
          var p = this;
          function y() {
            for (var v = 0, f = (f = p.buffer).replace(/<br(?: \/)?>/gi, `
`); v < f.length && f[v] !== "\r" && f[v] !== `
`; ) ++v;
            var b = f.substr(0, v);
            return f[v] === "\r" && ++v, f[v] === `
` && ++v, p.buffer = f.substr(v), b;
          }
          r && (p.buffer += p.decoder.decode(r, { stream: !0 }));
          try {
            if (p.state === "INITIAL") {
              if (!/\r\n|\n/.test(p.buffer)) return this;
              var h, l = (h = y()).match(/^WEBVTT([ \t].*)?$/);
              if (!l || !l[0]) throw new Error("Malformed WebVTT signature.");
              p.state = "HEADER";
            }
            for (var g = !1; p.buffer; ) {
              if (!/\r\n|\n/.test(p.buffer)) return this;
              switch (g ? g = !1 : h = y(), p.state) {
                case "HEADER":
                  /:/.test(h) ? s(h, function(v, f) {
                    v === "Region" && console.log("parse region", f);
                  }, /:/) : h || (p.state = "ID");
                  continue;
                case "NOTE":
                  h || (p.state = "ID");
                  continue;
                case "ID":
                  if (/^NOTE($|[ \t])/.test(h)) {
                    p.state = "NOTE";
                    break;
                  }
                  if (!h) continue;
                  if (p.cue = new u(0, 0, ""), p.state = "CUE", h.indexOf("-->") === -1) {
                    p.cue.id = h;
                    continue;
                  }
                case "CUE":
                  try {
                    n(h, p.cue, p.regionList);
                  } catch {
                    p.cue = null, p.state = "BADCUE";
                    continue;
                  }
                  p.state = "CUETEXT";
                  continue;
                case "CUETEXT":
                  var m = h.indexOf("-->") !== -1;
                  if (!h || m && (g = !0)) {
                    p.oncue && p.oncue(p.cue), p.cue = null, p.state = "ID";
                    continue;
                  }
                  p.cue.text && (p.cue.text += `
`), p.cue.text += h;
                  continue;
                case "BADCUE":
                  h || (p.state = "ID");
                  continue;
              }
            }
          } catch {
            p.state === "CUETEXT" && p.cue && p.oncue && p.oncue(p.cue), p.cue = null, p.state = p.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
          }
          return this;
        }, flush: function() {
          try {
            if (this.buffer += this.decoder.decode(), !this.cue && this.state !== "HEADER" || (this.buffer += `

`, this.parse()), this.state === "INITIAL") throw new Error("Malformed WebVTT signature.");
          } catch (r) {
            throw r;
          }
          return this.onflush && this.onflush(), this;
        } }, o.exports = c;
      }, { "./vttcue": 53 }], 55: [function(h, o, x) {
        function _() {
          return (_ = Object.assign ? Object.assign.bind() : function(g) {
            for (var m = 1; m < arguments.length; m++) {
              var v, f = arguments[m];
              for (v in f) !{}.hasOwnProperty.call(f, v) || (g[v] = f[v]);
            }
            return g;
          }).apply(null, arguments);
        }
        function u(g, m) {
          for (var v = 0; v < m.length; v++) {
            var f = m[v];
            f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(g, ((b) => typeof (b = ((S, w) => {
              if (typeof S != "object" || !S) return S;
              var T = S[Symbol.toPrimitive];
              if (T === void 0) return (w === "string" ? String : Number)(S);
              if (typeof (T = T.call(S, w)) != "object") return T;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            })(b, "string")) == "symbol" ? b : b + "")(f.key), f);
          }
        }
        function c(g, m, v) {
          return m && u(g.prototype, m), Object.defineProperty(g, "prototype", { writable: !1 }), g;
        }
        var a = h("./vtt-parser"), s = h("./vtt-renderer"), t = h("./vtt-loader"), e = h("../../player/base/event/eventtype"), n = h("../../lib/ua"), r = h("../../lib/event"), p = h("../../ui/component/util"), y = s.CTR_BAR_HEIGHT, h = (() => {
          function g(v) {
            this.parser = null, this.activeRenderer = null, this.trackConfigs = null, this.hasUserTracks = !1, this.vttText = {}, this.tickTimer = null, this.prevPosition = null, this._enabled = !1, this._isShow = !1, this.sleeper = new l(), this.player = (v = v || {}).player, this.loader = new t(), this.parser = new a(), this.createRendererInstance(), this.bindEvents();
          }
          var m = g.prototype;
          return m.bindEvents = function() {
            function v(C) {
              C.paramData.splayer && b.switchRenderer(s.VttBasicRenderer.RENDER_TYPE_CUSTOM);
            }
            var f, b = this, S = this, w = this.player, T = (w.on(e.Private.TextTrackFounded, function(C) {
              if (C.paramData.from === "user") b.hasUserTracks = !0;
              else if (b.hasUserTracks) return;
              C = C.paramData.textTracks, C && C.length && (b.enabled = !0, b.trackConfigs = C.map(function(R) {
                return _({}, R, { label: R.label || R.srclang, language: R.srclang });
              }), b.trackConfigs.forEach(function(R) {
                b.activeRenderer.addTrack(R), w.getOptions().controlBarVisibility === "always" && b.activeRenderer.forceUpdateCuesStyle({ transform: "translateY(" + ("-" + y + "px") + ")" }, b.parser.cues);
              }));
            }), w.on(e.Private.UserTrackReset, function() {
              b.hasUserTracks = !1;
            }), w.on(e.Player.H265PlayInfo, v), w.on(e.Player.H266PlayInfo, v), n.IS_IOS ? (f = !1, w.on(e.Player.RequestFullScreen, function() {
              f = !0;
            }), r.on(w.tag, "webkitendfullscreen", function() {
              f = !1;
            }), r.on(w.tag.textTracks, "change", function() {
              var C;
              b.sleeper.isSleep || (b.sleeper.sleep(1e3), b.isCustomRenderer) || f && (C = w.tag.textTracks, (C = Array.from(C).find(function(R) {
                return R.mode === "showing";
              })) ? b.activeTrackConfig && b.activeTrackConfig.language === C.language || (b.switchTrack(C.language), w.trigger(e.Private.SelectorValueChange, { type: "cc", text: C.label })) : w.trigger(e.Private.CCStateChanged, { value: "off", lang: "" }));
            })) : (w.on(e.Player.RequestFullScreen, this.adjustLayout.bind(this)), w.on(e.Player.CancelFullScreen, this.adjustLayout.bind(this)), T = p.debounce(function() {
              S.isCustomRenderer && S.activeRenderer.resetCuesStyle(b.parser.cues);
            }, 100), r.on(window, "resize", T)), p.throttle(function() {
              S.isShow && (S.activeRenderer.forceUpdateCuesStyle({ transform: "translateY(" + ("-" + y + "px") + ")" }, S.parser.cues), S.isCustomRenderer) && S.player.paused() && (S.activeRenderer.hide(), S.activeRenderer.restore());
            }, 100)), T = (w.on(e.Private.ShowBar, T), p.throttle(function() {
              S.isShow && (S.activeRenderer.forceUpdateCuesStyle({ transform: "none" }, S.parser.cues), S.isCustomRenderer) && S.player.paused() && (S.activeRenderer.hide(), S.activeRenderer.restore());
            }, 100));
            w.on(e.Private.HideBar, T), w.on(e.Private.VttHide, function() {
              b.hide();
            }), w.on(e.Private.VttSwitchTrack, function(C) {
              b.switchTrack(C.paramData);
            }), w.on(e.Private.VttClearTracks, function() {
              b.reset();
            });
          }, m.createRendererInstance = function(v) {
            this.activeRenderer && this.activeRenderer.dispose();
            var f = this.player.getOptions(), b = { player: this.player };
            this.adaptPlatform(), v ? v === s.VttBasicRenderer.RENDER_TYPE_NATIVE ? this.activeRenderer = new s.NativeRenderer(b) : (b.overlayId = this.getOverlayId(), this.activeRenderer = new s.CustomRenderer(b)) : f.useNativeTextRenderer ? this.activeRenderer = new s.NativeRenderer(b) : (b.overlayId = this.getOverlayId(), this.activeRenderer = new s.CustomRenderer(b));
          }, m.switchTrack = function(v) {
            var f, b = this;
            this.trackConfigs && this.trackConfigs.length && (this.activeTrackConfig && (this.parser.dispose(), this.parser = new a(), this.activeRenderer.clearTrack(this.activeTrackConfig.language), this.activeRenderer.hide()), this.activeTrackConfig = v, f = this.trackConfigs.find(function(S) {
              return S.language === v;
            })) && (f = f._loaded ? "" : (f || {}).src, this.loadVtt(f, function() {
              b.parseVtt(), b.activeRenderer.addCues(b.parser.cues, b.activeTrackConfig.language), b.show();
            }));
          }, m.adaptPlatform = function() {
            var v = this.player.getOptions();
            n.IS_IOS && (v.useNativeTextRenderer = !0);
          }, m.loadVtt = function(v, f) {
            var b = this;
            v ? this.loader.loadFromUrl(v, function(S) {
              b.activeTrackConfig._loaded = !0, b.vttText[b.activeTrackConfig.language] = S, f && f();
            }) : f && f();
          }, m.show = function() {
            this._isShow = !0, this.isCustomRenderer && this.startTickTimeListener(), this.activeRenderer.show(this.activeTrackConfig.language);
            var v = this.player.el().getElementsByClassName("prism-controlbar")[0];
            v && ((v = v.style) == null ? void 0 : v.display) === "block" && this.activeRenderer.forceUpdateCuesStyle({ transform: "translateY(" + ("-" + y + "px") + ")" }, this.parser.cues);
          }, m.hide = function() {
            this._isShow = !1, this.clearTicker(), this.activeRenderer.hide();
          }, m.switchRenderer = function(v) {
            var f = this, b = s.VttBasicRenderer.RENDER_TYPE_NATIVE, S = s.VttBasicRenderer.RENDER_TYPE_CUSTOM;
            (v === b && this.activeRenderer.type !== b || v === S && this.activeRenderer.type !== S) && (this.createRendererInstance(v), this.trackConfigs.forEach(function(w) {
              return f.activeRenderer.addTrack(w);
            }), this.activeRenderer.addCues(this.parser.cues, this.activeTrackConfig.language), this.show());
          }, m.parseVtt = function() {
            this.parser.parse(this.vttText[this.activeTrackConfig.language]);
          }, m.adjustLayout = function() {
            var v = this;
            this.isShow && this.isCustomRenderer && (this.activeRenderer.hide(), setTimeout(function() {
              v.activeRenderer.restore();
            }, 300));
          }, m.startTickTimeListener = function() {
            var v = this;
            this.clearTicker(), this.tick(function() {
              var f = v.player.getCurrentTime();
              isNaN(f) || v.activeRenderer.renderCues(v.findTargetCues(f));
            });
          }, m.tick = function(v) {
            var f = this;
            this.tickTimer = requestAnimationFrame(function() {
              try {
                v();
              } catch (b) {
                console.log("e", b);
              }
              f.tick(v);
            });
          }, m.clearTicker = function() {
            this.tickTimer && (cancelAnimationFrame(this.tickTimer), this.tickTimer = null);
          }, m.getOverlayId = function() {
            var v = (this.player.el().getElementsByClassName("prism-text-overlay") || [])[0];
            if (v) return v.id;
          }, m.findTargetCues = function(v) {
            if (this.parser && v !== this.prevPosition) {
              this.prevPosition = v;
              for (var f = [], b = 0; b < this.parser.cues.length; b++) {
                var S = this.parser.cues[b];
                if (v >= S.startTime && v <= S.endTime) f.push(S);
                else if (v < S.startTime) break;
              }
              return f;
            }
          }, m.reset = function() {
            this.clearTicker(), this.parser && this.parser.reset(), this.activeRenderer && this.activeRenderer.reset();
          }, m.dispose = function() {
            this.clearTicker(), this.parser && (this.parser.dispose(), this.parser = null), this.activeRenderer && (this.activeRenderer.dispose(), this.activeRenderer = null), this.trackConfigs = null, this.hasUserTracks = !1, this.vttText = {}, this.prevPosition = null, this._enabled = !1, this._isShow = !1;
          }, c(g, [{ key: "isShow", get: function() {
            return this._isShow;
          } }, { key: "enabled", get: function() {
            return this._enabled;
          }, set: function(v) {
            this._enabled = v;
          } }, { key: "isCustomRenderer", get: function() {
            if (this.activeRenderer) return this.activeRenderer.type === s.VttBasicRenderer.RENDER_TYPE_CUSTOM;
          } }, { key: "activeTrackConfig", get: function() {
            var v;
            return (v = this.trackConfigs) == null ? void 0 : v.find(function(f) {
              return f._isActive;
            });
          }, set: function(v) {
            this.trackConfigs.forEach(function(f) {
              return f._isActive = f.language === v;
            });
          } }]);
        })(), l = (() => {
          function g() {
            this.value = !1, this.timer = null;
          }
          return g.prototype.sleep = function(m) {
            var v = this;
            this.timer && clearTimeout(this.timer), this.value = !0, this.timer = setTimeout(function() {
              v.value = !1;
            }, m);
          }, c(g, [{ key: "isSleep", get: function() {
            return this.value;
          } }]);
        })();
        o.exports = h;
      }, { "../../lib/event": 34, "../../lib/ua": 49, "../../player/base/event/eventtype": 68, "../../ui/component/util": 162, "./vtt-loader": 57, "./vtt-parser": 58, "./vtt-renderer": 59 }], 56: [function(r, o, x) {
        function _() {
          return (_ = Object.assign ? Object.assign.bind() : function(y) {
            for (var h = 1; h < arguments.length; h++) {
              var l, g = arguments[h];
              for (l in g) !{}.hasOwnProperty.call(g, l) || (y[l] = g[l]);
            }
            return y;
          }).apply(null, arguments);
        }
        function u(y, h) {
          y.prototype = Object.create(h.prototype), c(y.prototype.constructor = y, h);
        }
        function c(y, h) {
          return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, g) {
            return l.__proto__ = g, l;
          })(y, h);
        }
        function a(y, h) {
          for (var l = 0; l < h.length; l++) {
            var g = h[l];
            g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(y, ((m) => typeof (m = ((v, f) => {
              if (typeof v != "object" || !v) return v;
              var b = v[Symbol.toPrimitive];
              if (b === void 0) return (f === "string" ? String : Number)(v);
              if (typeof (b = b.call(v, f)) != "object") return b;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            })(m, "string")) == "symbol" ? m : m + "")(g.key), g);
          }
        }
        function s(y, h, l) {
          return h && a(y.prototype, h), Object.defineProperty(y, "prototype", { writable: !1 }), y;
        }
        var t = r("../../lib/data"), e = { DISABLED: "disabled", SHOWING: "showing", HIDDEN: "hidden" }, n = { SUBTITLES: "subtitles", CAPTIONS: "captions", DESCRIPTIONS: "descriptions", METADATA: "metadata", CHAPTERS: "chapters" }, r = ((y) => {
          function h(m) {
            var m = _({}, m = m === void 0 ? {} : m, { kind: m.kind || n.SUBTITLES, language: m.language || m.srclang || "" }), v = m.mode || e.DISABLED;
            return -1 < [n.METADATA, n.CHAPTERS].indexOf(m.kind) && (v = e.HIDDEN), m.mode = v, (v = y.call(this, m) || this)._cues = [], v._activeCues = [], v._settings = {}, v._nativeTrack = null, v._extData = {}, v._settings = m, v;
          }
          u(h, y);
          var l = h.prototype;
          return l.setExtData = function(g) {
            this._extData = _({}, this._extData, g = g === void 0 ? {} : g);
          }, l.addCue = function(g) {
            this._cues.push(g), this.nativeTrack && this.nativeTrack.addCue(g);
          }, l.removeCue = function(g) {
            this._cues = this._cues.filter(function(m) {
              return m !== g;
            }), this.nativeTrack && this.nativeTrack.removeCue(g);
          }, s(h, [{ key: "default", get: function() {
            return this._settings.default;
          } }, { key: "mode", get: function() {
            return this._settings.mode;
          }, set: function(g) {
            this._settings.mode = g, this.nativeTrack && (this.nativeTrack.mode = g);
          } }, { key: "language", get: function() {
            return this._settings.language;
          }, set: function(g) {
            this._settings.language = g, this.nativeTrack && (this.nativeTrack.language = g);
          } }, { key: "cues", get: function() {
            return this._cues;
          } }, { key: "activeCues", get: function() {
            return this._activeCues;
          } }, { key: "nativeTrack", get: function() {
            return this._nativeTrack;
          }, set: function(g) {
            this._nativeTrack = g;
          } }]);
        })(s(function(y) {
          this._id = (y = y === void 0 ? {} : y).id || "prism-track-" + t.guid(), this._kind = y.kind || "", this._language = y.language || "", this._label = y.label || "";
        }, [{ key: "label", get: function() {
          return this._label;
        }, set: function(y) {
          this._label = y;
        } }, { key: "id", get: function() {
          return this._id;
        } }, { key: "kind", get: function() {
          return this._kind;
        } }, { key: "language", get: function() {
          return this._language;
        } }])), p = ((y) => {
          function h() {
            return y.call(this) || this;
          }
          return u(h, y), h;
        })((() => {
          function y() {
            this._trackList = [];
          }
          return y.prototype.addTrack = function(h) {
            var l = this.length;
            "" + l in this || Object.defineProperty(this, l, { get: function() {
              return this._trackList[l];
            } }), this._trackList.indexOf(h) === -1 && this._trackList.push(h);
          }, s(y, [{ key: "length", get: function() {
            return this._trackList.length;
          } }, { key: "list", get: function() {
            return this._trackList;
          } }]);
        })());
        o.exports.TextTrack = r, o.exports.TextTrackList = p, o.exports.TRACK_MODE = e, o.exports.TRACK_KIND = n;
      }, { "../../lib/data": 31 }], 57: [function(d, o, x) {
        var _ = d("../io");
        o.exports = (() => {
          function u() {
          }
          return u.prototype.loadFromUrl = function(c, a) {
            _.get(c, function(s) {
              a(s);
            }, function(s, t) {
              console.log("ERR", s, t);
            });
          }, u;
        })();
      }, { "../io": 41 }], 58: [function(c, o, x) {
        function _(a, s) {
          for (var t = 0; t < s.length; t++) {
            var e = s[t];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(a, ((n) => typeof (n = ((r, p) => {
              if (typeof r != "object" || !r) return r;
              var y = r[Symbol.toPrimitive];
              if (y === void 0) return (p === "string" ? String : Number)(r);
              if (typeof (y = y.call(r, p)) != "object") return y;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            })(n, "string")) == "symbol" ? n : n + "")(e.key), e);
          }
        }
        var u = c("./vttjs").WebVTT, c = (() => {
          function a() {
            var e = this;
            this._cues = [], this._regions = [], this.parser = new u.Parser(window, u.StringDecoder()), this.parser.onregion = function(n) {
              e._regions.push(n);
            }, this.parser.oncue = function(n) {
              e._cues.push(n);
            }, this.parser.onflush = function() {
            }, this.parser.onparsingerror = function(n) {
            };
          }
          var s, t = a.prototype;
          return t.parse = function(e) {
            this.parser.parse(e), this.parser.flush();
          }, t.reset = function() {
            this.parser.flush(), this._cues = [], this._regions = [];
          }, t.dispose = function() {
            this.parser.flush(), this.parser = null, this._cues = [], this._regions = [];
          }, t = a, (s = [{ key: "cues", get: function() {
            return this._cues;
          } }]) && _(t.prototype, s), Object.defineProperty(t, "prototype", { writable: !1 }), t;
        })();
        o.exports = c;
      }, { "./vttjs": 60 }], 59: [function(y, o, x) {
        function _(l, g) {
          for (var m = 0; m < g.length; m++) {
            var v = g[m];
            v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(l, ((f) => typeof (f = ((b, S) => {
              if (typeof b != "object" || !b) return b;
              var w = b[Symbol.toPrimitive];
              if (w === void 0) return (S === "string" ? String : Number)(b);
              if (typeof (w = w.call(b, S)) != "object") return w;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            })(f, "string")) == "symbol" ? f : f + "")(v.key), v);
          }
        }
        function u() {
          return (u = Object.assign ? Object.assign.bind() : function(l) {
            for (var g = 1; g < arguments.length; g++) {
              var m, v = arguments[g];
              for (m in v) !{}.hasOwnProperty.call(v, m) || (l[m] = v[m]);
            }
            return l;
          }).apply(null, arguments);
        }
        function c(l, g) {
          l.prototype = Object.create(g.prototype), a(l.prototype.constructor = l, g);
        }
        function a(l, g) {
          return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, v) {
            return m.__proto__ = v, m;
          })(l, g);
        }
        y("../../player/base/event/eventtype");
        var h = y("./text-track"), s = y("./vttjs").WebVTT, t = y("../../lib/dom"), e = h.TextTrack, n = h.TextTrackList, r = h.TRACK_MODE, p = (h.TRACK_KIND, (() => {
          function l(m) {
            this.player = null, this.type = null, this.trackList = null, this.overrideStyle = {}, this.player = (m = m || {}).player, this.defineTextTrackGetter(), this.trackList = new n();
          }
          var g = l.prototype;
          return g.log = function() {
            for (var m, v = arguments.length, f = new Array(v), b = 0; b < v; b++) f[b] = arguments[b];
            (m = console).log.apply(m, ["[LOG:" + this.type + "]"].concat(f));
          }, g.defineTextTrackGetter = function() {
            var m = this;
            this.player.getTextTracks = function() {
              return m.trackList || [];
            };
          }, g.show = function(m) {
            m = this.findTrackByLanguage(m), m && (m.mode = r.SHOWING);
          }, g.findTrackByLanguage = function(m) {
            return this.trackList.list.find(function(v) {
              return v.language === m;
            });
          }, g.clearCurrentCues = function(m) {
            if (m) {
              var v = m.mode;
              if (v === r.DISABLED && (m.mode = r.HIDDEN), m.cues) for (var f = m.cues.length; f--; ) m.removeCue(m.cues[f]);
              v === r.DISABLED && (m.mode = v);
            }
          }, g.addTrack = function() {
          }, g.addCues = function() {
          }, g.restore = function() {
          }, g.renderCues = function() {
          }, g.updateCuesStyle = function() {
          }, g.clearTrack = function(m) {
            this.clearCurrentCues(this.findTrackByLanguage(m));
          }, g.clearAllTracks = function() {
            var m = this;
            this.trackList && this.trackList.length && this.trackList.list.forEach(function(v) {
              v.mode = r.DISABLED, m.clearCurrentCues(v);
            }), this.trackList = new n();
          }, g.reset = function() {
            this.hide(), this.clearAllTracks();
          }, g.dispose = function() {
            this.hide(), this.clearAllTracks(), this.player && this.player.getTextTracks && (this.player.getTextTracks = null), this.player = null, this.type = null;
          }, l;
        })()), y = (p.RENDER_TYPE_CUSTOM = "CUSTOM", p.RENDER_TYPE_NATIVE = "NATIVE", ((l) => {
          function g(v) {
            var f = l.call(this, v) || this;
            return f.overlayId = null, f.currentCues = null, v = v || {}, f.type = p.RENDER_TYPE_CUSTOM, f.overlayId = v.overlayId, f;
          }
          c(g, l);
          var m = g.prototype;
          return m.addTrack = function(v) {
            var f = new e({ kind: v.kind, label: v.label, language: v.language, default: v.default });
            f.mode = v.default ? r.SHOWING : r.DISABLED, this.trackList.addTrack(f);
          }, m.hide = function() {
            return s.processCues(window, [], document.getElementById(this.overlayId));
          }, m.restore = function() {
            this.currentCues && (this.currentCues.forEach(function(v) {
              return v.displayState = null;
            }), s.processCues(window, this.currentCues, this.overlayEl), this.updateCuesStyle(this.currentCues));
          }, m.renderCues = function(v) {
            v && (this.currentCues = v, this.overlayEl || (this.overlayEl = document.getElementById(this.overlayId)), s.processCues(window, v, this.overlayEl), this.updateCuesStyle(v));
          }, m.updateCuesStyle = function(v) {
            var f = this;
            v.forEach(function(b) {
              var S, w = b.displayState;
              w._styleSetDone || w && (w.setAttribute("class", "prism-cue"), f.overlayEl || (f.overlayEl = document.getElementById(f.overlayId)), b = f.overlayEl.offsetWidth, S = f.overlayEl.offsetHeight, (b = Math.min(b, S)) && (w.style.fontSize = 0.05 * b + "px", w.style.height = "auto", w.style.top = "auto"), 44 < ((T, C) => (T = T.getBoundingClientRect(), C.getBoundingClientRect().bottom - T.bottom))(w, f.overlayEl) && (f.overrideStyle.transform = "none"), Object.keys(f.overrideStyle).forEach(function(T) {
                f.tryUpdateStyle(w, T, f.overrideStyle[T]);
              }), w._styleSetDone = !0);
            });
          }, m.updateOverrideStyle = function(v) {
            this.overrideStyle = u({}, this.overrideStyle, v = v === void 0 ? {} : v);
          }, m.forceUpdateCuesStyle = function(v, f) {
            f === void 0 && (f = []), this.updateOverrideStyle(v = v === void 0 ? {} : v), this.resetCuesStyle(f);
          }, m.tryUpdateStyle = function(v, f, b) {
            try {
              v.style[f] = b;
            } catch {
            }
          }, m.resetCuesStyle = function(v) {
            v && v.length && v.forEach(function(f) {
              f.displayState && (f.displayState = null);
            });
          }, m.dispose = function() {
            l.prototype.dispose.call(this), this.overlayId = null, this.currentCues = null;
          }, g;
        })(p)), h = ((l) => {
          function g(f) {
            return (f = l.call(this, f = f === void 0 ? {} : f) || this).type = p.RENDER_TYPE_NATIVE, f;
          }
          c(g, l);
          var m, v = g.prototype;
          return v.addTrack = function(f) {
            var b = this.player.tag, S = Array.from(b.textTracks) || [], w = S.find(function(T) {
              return T.language === f.language;
            }), S = w ? (this.log("sameLangTrack", w, S), this.clearCurrentCues(w), w.kind = f.kind, w.label = f.label, w) : b.addTextTrack(f.kind, f.label, f.language), w = (S.mode = f.default ? r.SHOWING : r.DISABLED, new e(f));
            w.nativeTrack = S, this.trackList.addTrack(w);
          }, v.addCues = function(f, b) {
            var S;
            f && f.length && (S = this.trackList.list.find(function(w) {
              return w.language === b;
            })) && f.forEach(function(w) {
              S.addCue(w);
            });
          }, v.hide = function() {
            this.trackList.list.forEach(function(f) {
              f.mode = f.mode === r.SHOWING ? r.HIDDEN : f.mode;
            });
          }, v.invalidAllTracks = function() {
          }, v.forceUpdateCuesStyle = function(f, b) {
            t.addCssByStyle("video::-webkit-media-text-track-container{transform: " + f.transform + ";}");
          }, v.dispose = function() {
            l.prototype.dispose.call(this);
          }, v = g, (m = [{ key: "activeTrack", get: function() {
            return this.trackList.list.find(function(f) {
              return f.mode === r.SHOWING;
            });
          } }]) && _(v.prototype, m), Object.defineProperty(v, "prototype", { writable: !1 }), v;
        })(p);
        o.exports.VttBasicRenderer = p, o.exports.CustomRenderer = y, o.exports.NativeRenderer = h, o.exports.CTR_BAR_HEIGHT = 44;
      }, { "../../lib/dom": 33, "../../player/base/event/eventtype": 68, "./text-track": 56, "./vttjs": 60 }], 60: [function(d, o, x) {
        o.exports = { WebVTT: d("./vtt.js").WebVTT };
      }, { "./vtt.js": 61 }], 61: [function(d, o, x) {
        var _ = this;
        function u(E, A) {
          return A === void 0 && (A = 1), "rgba(" + [parseInt(E.substring(0, 2), 16), parseInt(E.substring(2, 4), 16), parseInt(E.substring(4, 6), 16), A].join(",") + ")";
        }
        var c, a = 1;
        function s(E, A, H) {
          switch (H) {
            case "webvtt.font.color":
            case "webvtt.font.opacity":
              var N = Services.prefs.getCharPref("webvtt.font.color"), O = Services.prefs.getIntPref("webvtt.font.opacity") / 100;
              c.fontSet = u(N, O);
              break;
            case "webvtt.font.scale":
              a = Services.prefs.getIntPref("webvtt.font.scale") / 100;
              break;
            case "webvtt.bg.color":
            case "webvtt.bg.opacity":
              N = Services.prefs.getCharPref("webvtt.bg.color"), O = Services.prefs.getIntPref("webvtt.bg.opacity") / 100, c.backgroundSet = u(N, O);
              break;
            case "webvtt.edge.color":
            case "webvtt.edge.type":
              N = Services.prefs.getIntPref("webvtt.edge.type"), O = Services.prefs.getCharPref("webvtt.edge.color"), c.edgeSet = ["", "0px 0px ", "4px 4px 4px ", "-2px -2px ", "2px 2px "][N] + u(O);
          }
        }
        typeof Services < "u" && (c = {}, ["webvtt.font.color", "webvtt.font.opacity", "webvtt.font.scale", "webvtt.bg.color", "webvtt.bg.opacity", "webvtt.edge.color", "webvtt.edge.type"].forEach(function(E) {
          s(0, 0, E), Services.prefs.addObserver(E, s, !1);
        }));
        var t = Object.create || function(E) {
          if (arguments.length !== 1) throw new Error("Object.create shim only accepts one parameter.");
          return e.prototype = E, new e();
        };
        function e() {
        }
        function n(E, A) {
          this.name = "ParsingError", this.code = E.code, this.message = A || E.message;
        }
        function r(E) {
          function A(H, N, O, F) {
            return 3600 * (0 | H) + 60 * (0 | N) + (0 | O) + (0 | F) / 1e3;
          }
          return E = E.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/), E ? E[3] ? A(E[1], E[2], E[3].replace(":", ""), E[4]) : 59 < E[1] ? A(E[1], E[2], 0, E[4]) : A(0, E[1], E[2], E[4]) : null;
        }
        function p() {
          this.values = t(null);
        }
        function y(E, A, H, N) {
          var O, F, U = N ? E.split(N) : [E];
          for (O in U) typeof U[O] == "string" && (F = U[O].split(H)).length === 2 && A(F[0], F[1]);
        }
        ((n.prototype = t(Error.prototype)).constructor = n).Errors = { BadSignature: { code: 0, message: "Malformed WebVTT signature." }, BadTimeStamp: { code: 1, message: "Malformed time stamp." } }, p.prototype = { set: function(E, A) {
          this.get(E) || A === "" || (this.values[E] = A);
        }, get: function(E, A, H) {
          return H ? this.has(E) ? this.values[E] : A[H] : this.has(E) ? this.values[E] : A;
        }, has: function(E) {
          return E in this.values;
        }, alt: function(E, A, H) {
          for (var N = 0; N < H.length; ++N) if (A === H[N]) {
            this.set(E, A);
            break;
          }
        }, integer: function(E, A) {
          /^-?\d+$/.test(A) && this.set(E, parseInt(A, 10));
        }, percent: function(E, A) {
          return !!(A.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (A = parseFloat(A)) && A <= 100) && (this.set(E, A), !0);
        } };
        var h = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "‎", "&rlm;": "‏", "&nbsp;": " " }, l = { c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span" }, g = { v: "title", lang: "lang" }, m = { rt: "ruby" };
        function v(E, A) {
          function H(j) {
            return h[j];
          }
          for (var N, O, F, U, M, P, I, L = E.document.createElement("div"), V = L, Q = []; I = void 0, (I = A ? (I = (I = A.match(/^([^<]*)(<[^>]*>?)?/))[1] || I[2], A = A.substr(I.length), I) : null) !== null; ) I[0] === "<" ? I[1] === "/" ? Q.length && Q[Q.length - 1] === I.substr(2).replace(">", "") && (Q.pop(), V = V.parentNode) : (F = r(I.substr(1, I.length - 2))) ? (N = E.document.createProcessingInstruction("timestamp", F), V.appendChild(N)) : (O = I.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/)) && (F = O[1], U = O[3], P = M = void 0, P = l[F], N = P ? ((M = E.document.createElement(P)).localName = P, (P = g[F]) && U && (M[P] = U.trim()), M) : null) && (F = V, m[(P = N).localName] && m[P.localName] !== F.localName || (O[2] && (N.className = O[2].substr(1).replace(".", " ")), Q.push(O[1]), V.appendChild(N), V = N)) : V.appendChild(E.document.createTextNode(((j) => {
            for (; O = j.match(/&(amp|lt|gt|lrm|rlm|nbsp);/); ) j = j.replace(O[0], H);
            return j;
          })(I)));
          return L;
        }
        var f = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
        function b(E) {
          var A = [], H = "";
          if (E && E.childNodes) {
            for (O(A, E); H = function F(U) {
              var M, P, I;
              return U && U.length ? (P = (M = U.pop()).textContent || M.innerText) ? (I = P.match(/^.*(\n|\r)/)) ? I[U.length = 0] : P : M.tagName === "ruby" ? F(U) : M.childNodes ? (O(U, M), F(U)) : void 0 : null;
            }(A); ) for (var N = 0; N < H.length; N++) if (((F) => {
              for (var U = 0; U < f.length; U++) {
                var M = f[U];
                if (F >= M[0] && F <= M[1]) return 1;
              }
            })(H.charCodeAt(N))) return "rtl";
          }
          return "ltr";
          function O(F, U) {
            for (var M = U.childNodes.length - 1; 0 <= M; M--) F.push(U.childNodes[M]);
          }
        }
        function S() {
        }
        function w(E, A, H) {
          var N = typeof navigator < "u" && /MSIE\s8\.0/.test(navigator.userAgent), U = "rgba(255, 255, 255, 1)", O = "rgba(0, 0, 0, 0.8)", F = "", U = (c !== void 0 && (U = c.fontSet, O = c.backgroundSet, F = c.edgeSet), N && (U = "rgb(255, 255, 255)", O = "rgb(0, 0, 0)"), S.call(this), this.cue = A, this.cueDiv = v(E, A.text), { color: U, backgroundColor: O, textShadow: F, position: "relative", left: 0, right: 0, top: 0, bottom: 0, display: "inline" }), M = (N || (U.writingMode = A.vertical === "" ? "horizontal-tb" : A.vertical === "lr" ? "vertical-lr" : "vertical-rl", U.unicodeBidi = "plaintext"), this.applyStyles(U, this.cueDiv), this.div = E.document.createElement("div"), U = { textAlign: A.align === "middle" ? "center" : A.align, font: H.font, whiteSpace: "pre-line", position: "absolute" }, N || (U.direction = b(this.cueDiv), U.writingMode = A.vertical === "" ? "horizontal-tb" : A.vertical === "lr" ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(U), this.div.appendChild(this.cueDiv), 0);
          switch (A.positionAlign) {
            case "start":
              M = A.position;
              break;
            case "middle":
              M = A.position - A.size / 2;
              break;
            case "end":
              M = A.position - A.size;
          }
          A.vertical === "" ? this.applyStyles({ left: this.formatStyle(M, "%"), width: this.formatStyle(A.size, "%") }) : this.applyStyles({ top: this.formatStyle(M, "%"), height: this.formatStyle(A.size, "%") }), this.move = function(P) {
            this.applyStyles({ top: this.formatStyle(P.top, "px"), bottom: this.formatStyle(P.bottom, "px"), left: this.formatStyle(P.left, "px"), right: this.formatStyle(P.right, "px"), height: this.formatStyle(P.height, "px"), width: this.formatStyle(P.width, "px") });
          };
        }
        function T(E) {
          var A, H, N, O, F = typeof navigator < "u" && /MSIE\s8\.0/.test(navigator.userAgent);
          E.div && (A = E.div.offsetHeight, H = E.div.offsetWidth, N = E.div.offsetTop, O = (O = (O = E.div.childNodes) && O[0]) && O.getClientRects && O.getClientRects(), E = E.div.getBoundingClientRect(), O = O ? Math.max(O[0] && O[0].height || 0, E.height / O.length) : 0), this.left = E.left, this.right = E.right, this.top = E.top || N, this.height = E.height || A, this.bottom = E.bottom || N + (E.height || A), this.width = E.width || H, this.lineHeight = O !== void 0 ? O : E.lineHeight, F && !this.lineHeight && (this.lineHeight = 13);
        }
        function C(E, A, H, N) {
          var O, F = new T(A), U = A.cue, M = ((k) => {
            if (typeof k.line == "number" && (k.snapToLines || 0 <= k.line && k.line <= 100)) return k.line;
            if (!k.track || !k.track.textTrackList || !k.track.textTrackList.mediaElement) return -1;
            for (var D = k.track, W = D.textTrackList, ee = 0, re = 0; re < W.length && W[re] !== D; re++) W[re].mode === "showing" && ee++;
            return -1 * ++ee;
          })(U), P = [];
          if (U.snapToLines) {
            switch (U.vertical) {
              case "":
                P = ["+y", "-y"], O = "height";
                break;
              case "rl":
                P = ["+x", "-x"], O = "width";
                break;
              case "lr":
                P = ["-x", "+x"], O = "width";
            }
            var I = F.lineHeight, L = I * Math.round(M), V = H[O] + I, Q = P[0];
            Math.abs(L) > V && (L = L < 0 ? -1 : 1, L *= Math.ceil(V / I) * I), M < 0 && (L += U.vertical === "" ? H.height : H.width, P = P.reverse()), F.move(Q, L);
          } else {
            var j = F.lineHeight / H.height * 100;
            switch (U.lineAlign) {
              case "middle":
                M -= j / 2;
                break;
              case "end":
                M -= j;
            }
            switch (U.vertical) {
              case "":
                A.applyStyles({ top: A.formatStyle(M, "%") });
                break;
              case "rl":
                A.applyStyles({ left: A.formatStyle(M, "%") });
                break;
              case "lr":
                A.applyStyles({ right: A.formatStyle(M, "%") });
            }
            P = ["+y", "-x", "+x", "-y"], F = new T(A);
          }
          V = ((k, D) => {
            for (var W, ee = new T(k), re = 1, ne = 0; ne < D.length; ne++) {
              for (; k.overlapsOppositeAxis(H, D[ne]) || k.within(H) && k.overlapsAny(N); ) k.move(D[ne]);
              if (k.within(H)) return k;
              var le = k.intersectPercentage(H);
              le < re && (W = new T(k), re = le), k = new T(ee);
            }
            return W || ee;
          })(F, P), A.move(V.toCSSCompatValues(H));
        }
        function R() {
        }
        S.prototype.applyStyles = function(E, A) {
          for (var H in A = A || this.div, E) E.hasOwnProperty(H) && (A.style[H] = E[H]);
        }, S.prototype.formatStyle = function(E, A) {
          return E === 0 ? 0 : E + A;
        }, (w.prototype = t(S.prototype)).constructor = w, T.prototype.move = function(E, A) {
          switch (A = A !== void 0 ? A : this.lineHeight, E) {
            case "+x":
              this.left += A, this.right += A;
              break;
            case "-x":
              this.left -= A, this.right -= A;
              break;
            case "+y":
              this.top += A, this.bottom += A;
              break;
            case "-y":
              this.top -= A, this.bottom -= A;
          }
        }, T.prototype.overlaps = function(E) {
          return this.left < E.right && this.right > E.left && this.top < E.bottom && this.bottom > E.top;
        }, T.prototype.overlapsAny = function(E) {
          for (var A = 0; A < E.length; A++) if (this.overlaps(E[A])) return !0;
          return !1;
        }, T.prototype.within = function(E) {
          return this.top >= E.top && this.bottom <= E.bottom && this.left >= E.left && this.right <= E.right;
        }, T.prototype.overlapsOppositeAxis = function(E, A) {
          switch (A) {
            case "+x":
              return this.left < E.left;
            case "-x":
              return this.right > E.right;
            case "+y":
              return this.top < E.top;
            case "-y":
              return this.bottom > E.bottom;
          }
        }, T.prototype.intersectPercentage = function(E) {
          return Math.max(0, Math.min(this.right, E.right) - Math.max(this.left, E.left)) * Math.max(0, Math.min(this.bottom, E.bottom) - Math.max(this.top, E.top)) / (this.height * this.width);
        }, T.prototype.toCSSCompatValues = function(E) {
          return { top: this.top - E.top, bottom: E.bottom - this.bottom, left: this.left - E.left, right: E.right - this.right, height: this.height, width: this.width };
        }, T.getSimpleBoxPosition = function(E) {
          var A = E.div ? E.div.offsetHeight : E.tagName ? E.offsetHeight : 0, H = E.div ? E.div.offsetWidth : E.tagName ? E.offsetWidth : 0, N = E.div ? E.div.offsetTop : E.tagName ? E.offsetTop : 0;
          return { left: (E = E.div ? E.div.getBoundingClientRect() : E.tagName ? E.getBoundingClientRect() : E).left, right: E.right, top: E.top || N, height: E.height || A, bottom: E.bottom || N + (E.height || A), width: E.width || H };
        }, R.StringDecoder = function() {
          return { decode: function(E) {
            if (!E) return "";
            if (typeof E != "string") throw new Error("Error - expected string data.");
            return decodeURIComponent(encodeURIComponent(E));
          } };
        }, R.convertCueToDOMTree = function(E, A) {
          return E && A ? v(E, A) : null;
        }, R.processCues = function(E, A, H) {
          if (!E || !A || !H) return null;
          for (; H.firstChild; ) H.removeChild(H.firstChild);
          var N = E.document.createElement("div");
          if (N.style.position = "absolute", N.style.left = "0", N.style.right = "0", N.style.top = "0", N.style.bottom = "0", N.style.margin = "1.5%", H.appendChild(N), ((V) => {
            for (var Q = 0; Q < V.length; Q++) if (V[Q].hasBeenReset || !V[Q].displayState) return 1;
          })(A)) for (var O, F, U = [], M = T.getSimpleBoxPosition(N), P = { font: Math.round(0.05 * M.height * 100) / 100 * a + "px sans-serif" }, I = 0; I < A.length; I++) O = new w(E, F = A[I], P), N.appendChild(O.div), C(0, O, M, U), F.displayState = O.div, U.push(T.getSimpleBoxPosition(O));
          else for (var L = 0; L < A.length; L++) N.appendChild(A[L].displayState);
        }, (R.Parser = function(E, A) {
          this.window = E, this.state = "INITIAL", this.buffer = "", this.decoder = A || new TextDecoder("utf8"), this.regionList = [];
        }).prototype = { reportOrThrowError: function(E) {
          if (!(E instanceof n)) throw E;
          this.onparsingerror && this.onparsingerror(E);
        }, parse: function(E) {
          var A = this;
          function H() {
            for (var P = A.buffer, I = 0; I < P.length && P[I] !== "\r" && P[I] !== `
`; ) ++I;
            var L = P.substr(0, I);
            return P[I] === "\r" && ++I, P[I] === `
` && ++I, A.buffer = P.substr(I), L;
          }
          function N(P) {
            y(P, function(I, L) {
              var V;
              I === "Region" && (I = L, V = new p(), y(I, function(Q, j) {
                switch (Q) {
                  case "id":
                    V.set(Q, j);
                    break;
                  case "width":
                    V.percent(Q, j);
                    break;
                  case "lines":
                    V.integer(Q, j);
                    break;
                  case "regionanchor":
                  case "viewportanchor":
                    var k, D = j.split(",");
                    D.length === 2 && ((k = new p()).percent("x", D[0]), k.percent("y", D[1]), k.has("x") && k.has("y")) && (V.set(Q + "X", k.get("x")), V.set(Q + "Y", k.get("y")));
                    break;
                  case "scroll":
                    V.alt(Q, j, ["up"]);
                }
              }, /=/, /\s/), V.has("id")) && ((I = new A.window.VTTRegion()).width = V.get("width", 100), I.lines = V.get("lines", 3), I.regionAnchorX = V.get("regionanchorX", 0), I.regionAnchorY = V.get("regionanchorY", 100), I.viewportAnchorX = V.get("viewportanchorX", 0), I.viewportAnchorY = V.get("viewportanchorY", 100), I.scroll = V.get("scroll", ""), A.onregion && A.onregion(I), A.regionList.push({ id: V.get("id"), region: I }));
            }, /:/);
          }
          E && (A.buffer += A.decoder.decode(E, { stream: !0 }));
          try {
            if (A.state === "INITIAL") {
              if (!/\r\n|\n/.test(A.buffer)) return this;
              var O, F = (O = H()).match(/^WEBVTT([ \t].*)?$/);
              if (!F || !F[0]) throw new n(n.Errors.BadSignature);
              A.state = "HEADER";
            }
            for (var U = !1; A.buffer; ) {
              if (!/\r\n|\n/.test(A.buffer)) return this;
              switch (U ? U = !1 : O = H(), A.state) {
                case "HEADER":
                  /:/.test(O) ? N(O) : O || (A.state = "ID");
                  continue;
                case "NOTE":
                  O || (A.state = "ID");
                  continue;
                case "ID":
                  if (/^NOTE($|[ \t])/.test(O)) {
                    A.state = "NOTE";
                    break;
                  }
                  if (!O) continue;
                  if (A.cue = new A.window.VTTCue(0, 0, ""), A.state = "CUE", O.indexOf("-->") === -1) {
                    A.cue.id = O;
                    continue;
                  }
                case "CUE":
                  try {
                    ((P, I, L) => {
                      var V = P;
                      function Q() {
                        var W = r(P);
                        if (W === null) throw new n(n.Errors.BadTimeStamp, "Malformed timestamp: " + V);
                        return P = P.replace(/^[^\sa-zA-Z-]+/, ""), W;
                      }
                      function j() {
                        P = P.replace(/^\s+/, "");
                      }
                      if (j(), I.startTime = Q(), j(), P.substr(0, 3) !== "-->") throw new n(n.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + V);
                      P = P.substr(3), j(), I.endTime = Q(), j();
                      var k = P, D = new p();
                      y(k, function(W, ee) {
                        switch (W) {
                          case "region":
                            for (var re = L.length - 1; 0 <= re; re--) if (L[re].id === ee) {
                              D.set(W, L[re].region);
                              break;
                            }
                            break;
                          case "vertical":
                            D.alt(W, ee, ["rl", "lr"]);
                            break;
                          case "line":
                            var ne = ee.split(","), le = ne[0];
                            D.integer(W, le), D.percent(W, le) && D.set("snapToLines", !1), D.alt(W, le, ["auto"]), ne.length === 2 && D.alt("lineAlign", ne[1], ["start", "middle", "end"]);
                            break;
                          case "position":
                            ne = ee.split(","), D.percent(W, ne[0]), ne.length === 2 && D.alt("positionAlign", ne[1], ["start", "middle", "end"]);
                            break;
                          case "size":
                            D.percent(W, ee);
                            break;
                          case "align":
                            D.alt(W, ee, ["start", "middle", "end", "left", "right"]);
                        }
                      }, /:/, /\s/), I.region = D.get("region", null), I.vertical = D.get("vertical", "");
                      try {
                        I.line = D.get("line", "auto");
                      } catch {
                      }
                      I.lineAlign = D.get("lineAlign", "start"), I.snapToLines = D.get("snapToLines", !0), I.size = D.get("size", 100);
                      try {
                        I.align = D.get("align", "center");
                      } catch {
                        I.align = D.get("align", "middle");
                      }
                      try {
                        I.position = D.get("position", "auto");
                      } catch {
                        I.position = D.get("position", { start: 0, left: 0, center: 50, middle: 50, end: 100, right: 100 }, I.align);
                      }
                      I.positionAlign = D.get("positionAlign", { start: "start", left: "start", middle: "middle", end: "end", right: "end" }, I.align);
                    })(O, A.cue, A.regionList);
                  } catch (P) {
                    A.reportOrThrowError(P), A.cue = null, A.state = "BADCUE";
                    continue;
                  }
                  A.state = "CUETEXT";
                  continue;
                case "CUETEXT":
                  var M = O.indexOf("-->") !== -1;
                  if (!O || M && (U = !0)) {
                    A.oncue && A.oncue(A.cue), A.cue = null, A.state = "ID";
                    continue;
                  }
                  A.cue.text && (A.cue.text += `
`), A.cue.text += O;
                  continue;
                case "BADCUE":
                  O || (A.state = "ID");
                  continue;
              }
            }
          } catch (P) {
            A.reportOrThrowError(P), A.state === "CUETEXT" && A.cue && A.oncue && A.oncue(A.cue), A.cue = null, A.state = A.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
          }
          return this;
        }, flush: function() {
          var E = this;
          try {
            if (E.buffer += E.decoder.decode(), !E.cue && E.state !== "HEADER" || (E.buffer += `

`, E.parse()), E.state === "INITIAL") throw new n(n.Errors.BadSignature);
          } catch (A) {
            E.reportOrThrowError(A);
          }
          return E.onflush && E.onflush(), this;
        } }, _.WebVTT = R;
      }, {}], 62: [function(d, o, x) {
        var _ = d("../lib/io");
        d("../lib/storage");
        function u(c) {
          this._uploadDuration = c.logDuration || 5, this._uploadCount = c.logCount || 10, this._logReportTo = c.logReportTo, this._dumpLogReportTo = c.dumpLogReportTo, this._logs = [], this._retry = 0, this._disposed = !1, this._supportLocalStorage = !0;
          var a;
          try {
            localStorage ? (a = localStorage.getItem("__aliplayer_log_data"), localStorage.removeItem("__aliplayer_log_data"), a && (this._logs = JSON.parse(a))) : this._supportLocalStorage = !1;
          } catch {
            this._supportLocalStorage = !1;
          }
          this._start();
        }
        u.prototype.add = function(c) {
          var a = this._logs.length;
          if (c.__time__ = Math.round(/* @__PURE__ */ new Date() / 1e3), 0 < a && c.e == "4001") {
            var a = this._logs[a - 1];
            if (a.e == "4001" && a.__time__ - c.__time__ < 5) return;
          }
          this._logs.push(c), (this._logs.length > this._uploadCount || c.e == "4001" || c.e == "2002" || c.e == "9002" && (a = c.args) != null && a.includes("dump::")) && this._report();
        }, u.prototype.dispose = function() {
          this._report(), this._disposed = !0;
        }, u.prototype._start = function() {
          this._disposed = !1, this._retry = 0, this._report();
        }, u.prototype._report = function(c) {
          var a, s, t;
          this._tickHandler && (clearTimeout(this._tickHandler), this._tickHandler = null), 0 < (c = c || this._logs.splice(0, this._uploadCount)).length ? (t = { "Content-Type": "application/json;charset=UTF-8", "x-log-apiversion": "0.6.0", "x-log-bodyrawsize": (a = JSON.stringify({ __logs__: c, __source__: "" })).length }, _.postWithHeader((s = this)._logReportTo, a, t, function(e) {
            s._tick();
          }, function(e) {
            s._retry == 0 ? (s._retry = 1, s._report(c)) : s._tick();
          })) : this._tick();
        }, u.prototype.reportDump = function(c) {
          var a;
          c && (a = { "Content-Type": "application/json;charset=UTF-8", "x-log-apiversion": "0.6.0", "x-log-bodyrawsize": (c = JSON.stringify({ __logs__: [c], __source__: "" })).length }, _.postWithHeader(this._dumpLogReportTo, c, a, function(s) {
          }, function(s) {
          }));
        }, u.prototype._tick = function() {
          var c;
          this._disposed || (this._retry = 0, (c = this)._logs.length > this._uploadCount ? c._report() : this._tickHandler = setTimeout(function() {
            c._report();
          }, 1e3 * this._uploadDuration));
        }, o.exports = u;
      }, { "../lib/io": 41, "../lib/storage": 48 }], 63: [function(v, o, x) {
        function _() {
          return (_ = Object.assign ? Object.assign.bind() : function(f) {
            for (var b = 1; b < arguments.length; b++) {
              var S, w = arguments[b];
              for (S in w) !{}.hasOwnProperty.call(w, S) || (f[S] = w[S]);
            }
            return f;
          }).apply(null, arguments);
        }
        var u, c = v("../lib/oo"), a = v("../lib/object"), s = v("../lib/data"), t = v("../lib/io"), e = v("../lib/ua"), n = v("../lib/event"), r = v("../config"), p = v("../player/base/event/eventtype"), y = v("./util"), h = v("./log"), l = v("../lib/playerutil"), g = 0, m = { CREATE: 1e3, STARTFETCHDATA: 1003, COMPLETEFETCHDATA: 1004, PREPARE: 1101, PREPAREEND: 1102, STARTPLAY: 2e3, PLAY: 2001, STOP: 2002, PAUSE: 2003, SEEK: 2004, FULLSREEM: 2005, QUITFULLSCREEM: 2006, RESOLUTION: 2007, RESOLUTION_DONE: 2008, RECOVER: 2010, SEEK_END: 2011, PLAYABORT: 2012, SEEKED: 2014, CANPLAY: 2018, FETCHEDIP: 2020, CDNDETECT: 2021, DETECT: 2022, HEVCINFO: 2023, UNDERLOAD: 3002, LOADED: 3001, RETRY: 3003, HEARTBEAT: 9001, TRACE: 9002, DUMP: 9003, ERROR: 4001, ERRORRETRY: 4002, RTSFALLBACK: 4003, VOD_REQUEST_FATAL_ERROR: 4004, VOD_REQUEST_FATAL_ERROR_RESUME: 4005, LICENSE_RESULT: 5004, SNAPSHOT: 2027, ROTATE: 2028, IMAGE: 2029, THUMBNAILSTART: 2031, THUMBNAILCOMPLETE: 2032, CCSTART: 2033, CCCOMPLETE: 2034, AUDIOTRACKSTART: 2033, AUDIOTRACKCOMPLETE: 2034 }, v = c.extend({ init: function(T, C, w) {
          this.trackLog = w = w === void 0 ? !0 : w, this.player = T, this.requestId = "", this.sessionId = s.guid(), this.playId = 0, this.firstPlay = !0, this.osName = e.os.name, this.osVersion = e.os.version || "", this.exName = e.browser.name, this.exVersion = e.browser.version || "", this.lightSaasVideoId = "", this._logService = "", this._h265ProbeInfo = {}, this.loadedDataReported = !1, this.startPlayReported = !1, this.canplayReported = !1, this.doPlayReported = !1, this.seekingData = { seekingStartTime: 0 }, this.pendingPrepareEndData = null, this.h265RenderTypeTimer = null, this.statisticsHistoryTimer = null, this.timeline = [{ name: "init", ts: performance.now() }], this.checkSeekStuckedTimer = null, r.logReportTo = C.logReportTo || r.logReportTo, this.prevStats = { timestamp: 0, bytesReceived: 0, framesDecoded: 0, packetsLost: 0, packetsReceived: 0, rtt: 0 }, this.resetHeartBeatStatusData(), this.resetStatisticsHistoryData(), C.logBatched && (this._logService = new h(r));
          var w = this.player.getOptions(), T = C.from || "", C = (w.isLive, w.isLive ? "live" : "vod"), R = "pc", E = (e.IS_IPAD ? R = "pad" : e.os.phone && (R = "phone"), this.encodeURL(e.getReferer())), N = e.getHref(), A = this.encodeURL(N), H = "", N = (N && (H = e.getHost(N)), r.h5Version), O = y.getUuid(), F = w.source ? this.encodeURL(w.source) : "", U = e.getHost(w.source), M = w.userId ? w.userId + "" : "0", P = this.sessionId, I = (/* @__PURE__ */ new Date()).getTime(), L = w.traceId || "";
          this._userNetInfo = { cdnIp: "", localIp: "" }, this.opt = { APIVersion: "0.6.0", t: I, ll: "info", lv: "1.0", pd: "player", md: "saas_player", ui: "saas_player", sm: "play", os: this.osName, ov: this.osVersion, et: this.exName, ev: this.exVersion, uat: e.USER_AGENT, hn: "0.0.0.0", bi: T, ri: P, e: "0", args: "0", li_ki: w.license.key || "", vt: C, tt: R, dm: "h5", av: N, uuid: O, vu: F, vd: U, ua: M, dn: "custom", cdn_ip: "0.0.0.0", app_n: H, r: E, pu: A, ti: L }, this.bindEvent();
        }, updateVideoInfo: function(f) {
          f = f.from || "", this.opt.bi = f + "", this.updateSourceInfo();
        }, updateSourceInfo: function() {
          var f, b = this.player.getOptions();
          b && (f = b.source ? this.encodeURL(b.source) : "", b = e.getHost(b.source), this.opt.vu = f, this.opt.vd = b);
        }, updateTraceId: function(f) {
          this.opt.ti = f;
        }, updateLightSaasVideoId: function(f) {
          this.lightSaasVideoId = f;
        }, replay: function() {
          this.reset(), this.player.trigger(p.Video.LoadStart), this.player.trigger(p.Video.LoadedMetadata), this.player.trigger(p.Video.LoadedData), this.startHeartBeat();
        }, bindEvent: function() {
          var f = this;
          this.player.on(p.Private.Create, function(b) {
            f._onCreate(b);
          }), this.player.on(p.Player.Init, function() {
            f._onPlayerInit();
          }), this.player.on(p.Video.LoadStart, function() {
            f._onPlayerloadstart();
          }), this.player.on(p.Video.LoadedMetadata, function() {
            f._onPlayerLoadMetadata();
          }), this.player.on(p.Video.LoadedData, function() {
            f._onPlayerLoaddata();
          }), this.player.on(p.Player.H265PlayInfo, function(b) {
            f._onH265PlayInfo(b), f._onPlayerH265PlayInfo(b);
          }), this.player.on(p.Player.H266PlayInfo, function(b) {
            f._onH265PlayInfo(b), f._onPlayerH265PlayInfo(b);
          }), this.player.on(p.Video.Play, function() {
            f._onPlayerPlay();
          }), this.player.on(p.Video.Playing, function() {
            f._onPlayerReady();
          }), this.player.on(p.Video.Ended, function() {
            f._onPlayerFinish();
          }), this.player.on(p.Video.Pause, function() {
            f._onPlayerPause();
          }), this.player.on("seeking", function() {
            f._onPlayerSeeking();
          }), this.player.on("seeked", function() {
            f._onPlayerSeeked();
          }), this.player.on(p.Private.LicenseHasResult, function(b) {
            f._onLicenseHasResult(b);
          }), this.player.on(p.Private.SeekStart, function(b) {
            f._onPlayerSeekStart(b);
          }), this.player.on(p.Private.EndStart, function(b) {
            f._seekEndData = b.paramData;
          }), this.player.on(p.Player.Waiting, function() {
            f._onPlayerLoaded();
          }), this.player.on(p.Video.CanPlayThrough, function() {
          }), this.player.on(p.Video.CanPlay, function() {
            f._waitingDelayLoadingShowHandle && (clearTimeout(f._waitingDelayLoadingShowHandle), f._waitingDelayLoadingShowHandle = null), f._onPlayerUnderload(), f._onPlayerCanplay();
          }), this.player.on(p.Video.TimeUpdate, function() {
            f._waitingDelayLoadingShowHandle && (clearTimeout(f._waitingDelayLoadingShowHandle), f._waitingDelayLoadingShowHandle = null), f._seekEndData && f.player._seeking && f._onPlayerSeekEnd();
          }), this.player.on(p.Player.Error, function(b) {
            f._onPlayerError(b);
          }), this.player.on(p.Player.RequestFullScreen, function() {
            f._onFullscreenChange(1);
          }), this.player.on(p.Player.CancelFullScreen, function() {
            f._onFullscreenChange(0);
          }), this.player.on(p.Private.PREPARE, function(b) {
            f._prepareTime = performance.now(), f._log("PREPARE", { dn: b.paramData }), f.timeline.push({ name: "prepare", ts: performance.now() });
          }), this.player.on(p.Private.ManualPlay, function() {
            f.loadedDataReported || (f._prepareTime = performance.now(), f.timeline.push({ name: "prepare2", ts: performance.now() }));
          }), this.player.on(p.Player.Snapshoted, function() {
            f._log("SNAPSHOT");
          }), this.player.on(p.Private.Retry, function(b) {
            b = b.paramData || {}, f._log("RETRY", { type: b.type, source: b.source });
          }), this.player.on(p.Player.RtsFallback, function(w) {
            var S, w = w.paramData || {};
            f._log("RTSFALLBACK", { reason: (S = w.reason) == null ? void 0 : S.error_msg, url: w.fallbackUrl });
          }), this.player.on(p.Private.VodRequestException, function(b) {
            b = b.paramData || {}, f.reportVodException(b);
          }), this.player.on(p.Private.VodRequestExceptionResume, function(b) {
            b = b.paramData || {}, f.reportVodExceptionResume(b);
          }), this.player.on(p.Private.TraceLog, function(b) {
            b = b.paramData || {}, f._reportTrace(b);
          }), this.player.on(p.Private.DumpBuffer, function(b) {
            b = b.paramData || {}, f._reportDump(b);
          }), this.player.on(p.Private.StatisticsInfo, function(b) {
            b = b.paramData || {}, f._onStatisticsHistoryUpdate(b);
          }), this.player.on(p.Private.Timeline, function(b) {
            b = b.paramData || {}, f._onTimeline(b);
          }), n.on(this.player.tag, p.Video.Playing, function() {
            f.reportPlaying();
          }), n.on(this.player.tag, p.Video.TimeUpdate, function() {
            f.reportPlaying();
          }), this.startHeartBeat.call(this), this.startStatisticsHistory.call(this);
        }, startStatisticsHistory: function() {
          var f = this;
          this.opt.app_n === "n.dingtalk.com" && (this.statisticsHistoryTimer && clearInterval(this.statisticsHistoryTimer), this.statisticsHistoryTimer = setInterval(function() {
            f.player.trigger(p.Private.TraceLog, "[statistics_history]" + JSON.stringify(f.statisticsHistory)), f.resetStatisticsHistoryData();
          }, this.player._options.statisticsReportInterval));
        }, reportPlaying: function() {
          var f;
          this.doPlayReported || this.player.paused() || this.player.readyState() === 0 || (this.doPlayReported = !0, this.first_play_time = performance.now(), f = { dsm: "fix", tc: this.first_play_time - this.loadstartTime, fc: this.first_play_time - this.playstartTime }, this._log("PLAY", f));
        }, removeEvent: function() {
          this.player.offAll("init"), this.player.offAll("ready"), this.player.offAll("ended"), this.player.offAll("play"), this.player.offAll("pause"), this.player.offAll("seekStart"), this.player.offAll("seekEnd"), this.player.offAll("canplaythrough"), this.player.offAll("playing"), this.player.offAll("timeupdate"), this.player.offAll("error"), this.player.offAll("fullscreenchange"), this.player.offAll("seeking"), this.player.offAll("seeked"), this.player.offAll(p.Private.PREPARE), this.player.offAll(p.Player.RtsFallback), n.off(this.player.tag, p.Video.Playing), n.off(this.player.tag, p.Video.TimeUpdate), this._logService && this._logService.dispose(), clearInterval(u), clearInterval(this.statisticsHistoryTimer), this.statisticsHistoryTimer = null, clearTimeout(this.checkSeekStuckedTimer), this.checkSeekStuckedTimer = null;
        }, reset: function() {
          this.stucking = !1, this.startTimePlay = 0, this.pause_flag = 0, this.firstPlay = !1, this.playId = 0, this._canPlay = 0, this.seekingStartTime = 0, this.prevStats = { timestamp: 0, bytesReceived: 0, framesDecoded: 0, packetsLost: 0, packetsReceived: 0, rtt: 0 }, g = 0, this.lightSaasVideoId = "", this.resetHeartBeatStatusData(), this.resetStatisticsHistoryData(), u && (clearInterval(u), u = null);
        }, encodeURL: function(f) {
          var b;
          return f ? (b = this.player.getOptions()) && !b.logBatched ? encodeURIComponent(f) : f : "";
        }, startHeartBeat: function() {
          var f = this;
          u && clearInterval(u), u = setInterval(function() {
            var b;
            f.player.getCurrentTime() && (b = Math.floor(1e3 * f.player.getCurrentTime()), f.player.paused() && (f.prevStats.timestamp = 0), ++g >= f.player._options.heartHeatInterval) && f.updateStats.call(f, function(S) {
              var T = f._imageInfo() || {}, C = f.player.tag.playbackRate, w = f.player.getVolume(), T = { vt: b, interval: 1e3 * g, imgLength: T.imgLength, playbackRate: C, volume: w, bw: f._getbwEstimator() + "KB" }, C = ((T = S ? _({}, T, { dls: Math.floor(S.downloadSpeedPerSec), dfps: Math.floor(S.decodedFramesPerSec), pkl: Number((S.packageLossRate || 0).toFixed(2)), rtt: 1e3 * S.rtt }) : T).player_status = _({}, f.heartBeatStatusData), f.player);
              T.time = { play_time: parseFloat((C._playingTime / 1e3).toFixed(2)), stuck_count: parseFloat(C._stuckCount.toFixed(2)), stuck_time: parseFloat((C._stuckTime / 1e3).toFixed(2)) }, f._log("HEARTBEAT", T), g = 0;
            });
          }, 1e3);
        }, updateStats: function(f) {
          f = f || function() {
          };
          var b = this;
          this.player.getStats().then(function(S) {
            var w, T;
            S ? (w = b.prevStats, S.bytesReceived = S.bytesReceived || 0, S.framesDecoded = S.framesDecoded || 0, S.packetsLost = S.packetsLost || 0, S.packetsReceived = S.packetsReceived || 0, T = ((b.prevStats = S).timestamp - w.timestamp) / 1e3, f({ downloadSpeedPerSec: (S.bytesReceived - w.bytesReceived) / T, decodedFramesPerSec: (S.framesDecoded - w.framesDecoded) / T, packageLossRate: (S.packetsLost - w.packetsLost) / (S.packetsLost - w.packetsLost + (S.packetsReceived - w.packetsReceived)), rtt: S.rtt, timeGap: T })) : f();
          }).catch(function(S) {
            console.log("error in monitor getStats: ", S), f();
          });
        }, reportStartPlay: function() {
          this.startPlayReported || (this._log("STARTPLAY", { vt: (/* @__PURE__ */ new Date()).getTime() }), this.startPlayReported = !0);
        }, reportCanplay: function() {
          this.canplayReported || (this._log("CANPLAY", { vt: (/* @__PURE__ */ new Date()).getTime() }), this.canplayReported = !0);
        }, reportPlayAbort: function(f) {
          this._log("PLAYABORT", { vt: (/* @__PURE__ */ new Date()).getTime(), from: f });
        }, reportVodException: function(f) {
          console.log("VOD_REQUEST_FATAL_ERROR", f), this._log("VOD_REQUEST_FATAL_ERROR", f);
        }, reportVodExceptionResume: function(f) {
          console.log("VOD_REQUEST_FATAL_ERROR_RESUME", f), this._log("VOD_REQUEST_FATAL_ERROR_RESUME", f);
        }, resetStartPlayReportFlag: function() {
          this.startPlayReported = !1;
        }, resetCanplayReportFlag: function() {
          this.canplayReported = !1;
        }, resetLoadedDataReported: function() {
          this.loadedDataReported = !1, this._prepareTime = performance.now();
        }, resetDoPlayReportFlag: function() {
          this.doPlayReported = !1;
        }, resetSessionId: function() {
          this.sessionId = s.guid();
        }, resetHeartBeatStatusData: function() {
          this.heartBeatStatusData = { t_last_pause: -1, t_last_resume: -1, t_last_load_start: -1, t_last_load_end: -1 }, this.player.startPlayTimeMonitor();
        }, resetStatisticsHistoryData: function() {
          this.statisticsHistory = { speed: [], framesDropped: [], downlink: [], type: [], rtt: [] };
        }, resetTimeline: function() {
          var f = performance.now();
          this._createTime = f, this.timeline = [{ name: "init", ts: f }];
        }, resetVV: function() {
          this.startPlayReported && (this.resetStartPlayReportFlag(), this.resetLoadedDataReported(), this.resetDoPlayReportFlag(), this.resetCanplayReportFlag(), this.resetSessionId(), this.resetTimeline());
        }, updateH265ProbeInfo: function(f) {
          this._h265ProbeInfo = f || {};
        }, _onFullscreenChange: function(f) {
          f ? this._log("FULLSREEM", {}) : this._log("QUITFULLSCREEM", {});
        }, _onTimeline: function(f) {
          var b = ["frag_s", "frag_f", "frag_parsed"].includes(f.name);
          this.timeline.some(function(S) {
            return b && S.name === f.name;
          }) || this.timeline.push(f);
        }, _onPlayerloadstart: function() {
          this.loadstartTime = performance.now(), this.playId = s.guid();
        }, _onPlayerLoadMetadata: function() {
          this.loadMetaDataCost = performance.now() - this.loadstartTime, this.timeline.push({ name: "meta", ts: performance.now() });
        }, _onPlayerLoaddata: function() {
          var f, b, S, w, T = this;
          this.timeline.push({ name: "loadeddata", ts: performance.now() }), this.loadedDataReported || (w = S = 0, this.player.tag && (S = this.player.tag.videoWidth, w = this.player.tag.videoHeight), f = { fc: parseInt(performance.now() - this._createTime), tc: parseInt(performance.now() - this._prepareTime), cc: parseInt(performance.now() - this.loadstartTime), md: parseInt(this.loadMetaDataCost), mi: JSON.stringify({ type: "video", definition: S + "*" + w }) }, this.timeline.forEach(function(C, R) {
            try {
              var E = R ? C.ts - T.timeline[R - 1].ts : 0;
              f["tl_" + C.name] = R + "#" + parseInt(E);
            } catch {
            }
          }), (S = this.player.tag) != null && S.duration && (f.vdur = 1e3 * ((w = this.player.tag) == null ? void 0 : w.duration)), (5 < this._h265ProbeInfo.codecCost || 5 < this._h265ProbeInfo.decoderCost) && (S = Math.floor(this._h265ProbeInfo.codecCost) || 0, w = Math.floor(this._h265ProbeInfo.decoderCost) || 0, f.tc += b = S + w, f.cc += b, f.pcc = S, f.pdc = w), b = [{ type: "audio" }], S = { type: "video", codecType: null, isHardwareDecode: null }, w = this._h265ProbeInfo.codecTag, l.isH265Codec(w) ? S.codecType = "h265" : l.isH266Codec(w) ? S.codecType = "h266" : l.isH264Codec(w) && (S.codecType = "h264"), b.push(S), f.decode_info = b, this._h265ProbeInfo.waitRenderType ? (this.pendingPrepareEndData = f, this.h265RenderTypeTimer = setTimeout(function() {
            T._log("PREPAREEND", f), T.h265RenderTypeTimer = null;
          }, 2e3)) : this._log("PREPAREEND", f)), this.loadedDataReported = !0;
        }, _onStatisticsHistoryUpdate: function(f) {
          this.opt.app_n === "n.dingtalk.com" && (this.statisticsHistory.speed.push(parseInt(f.speed)), this.statisticsHistory.framesDropped.push(f.droppedFrames), f = navigator.connection) && (this.statisticsHistory.downlink.push(f.downlink), this.statisticsHistory.type.push(f.effectiveType), this.statisticsHistory.rtt.push(f.rtt));
        }, _onH265PlayInfo: function(f) {
          var b, S;
          this.h265RenderTypeTimer && (clearTimeout(this.h265RenderTypeTimer), this.h265RenderTypeTimer = null), this.pendingPrepareEndData && (f = f.paramData, b = this.pendingPrepareEndData, this.pendingPrepareEndData = null, S = b.decode_info[1], f.renderType === "wasm" && (S.isHardwareDecode = !1), this._log("PREPAREEND", b));
        }, _onPlayerH265PlayInfo: function(f) {
          f = f.paramData || {}, this._log("HEVCINFO", { cd: f.codecTag, rd: f.renderType, si: f.simd, sio: f.simdOption, wt: f.wasmThreads, wto: f.wasmThreadsOption, sp: f.splayer });
        }, _onPlayerCanplay: function() {
          this._canPlay = 1, this.reportCanplay(), this.prevStats.timestamp || this.updateStats.call(this);
        }, _onCreate: function(f) {
          f = f.paramData || {}, f.hasPa = !!f.playauth, delete f.playauth, f.hasSk = !!f.accessKeySecret, delete f.accessKeySecret, f.hasSt = !!f.securityToken, delete f.securityToken, this._log("CREATE", f), this._createTime = performance.now();
        }, _onPlayerInit: function() {
          this.stucking = !1, this.pause_flag = 0, this.startTimePlay = 0, this._canPlay = 0, this.seekingStartTime = 0;
        }, _onPlayerReady: function() {
          this.startTimePlay || (this.startTimePlay = (/* @__PURE__ */ new Date()).getTime());
        }, _onPlayerFinish: function() {
          this._log("STOP", { vt: Math.floor(1e3 * this.player.getCurrentTime()) }), this.reset();
        }, _onPlayerPlay: function() {
          var f;
          this.playstartTime = (/* @__PURE__ */ new Date()).getTime(), this.playId == 0 && (this.playId = s.guid()), this.player._isPreload() || (this.loadstartTime = performance.now()), this.doPlayReported && this.pause_flag && (this.pause_flag = 0, this.pauseEndTime = (/* @__PURE__ */ new Date()).getTime(), this.heartBeatStatusData.t_last_resume = this.pauseEndTime, f = this.pauseEndTime - this.pauseTime, this._log("RECOVER", { vt: Math.floor(1e3 * this.player.getCurrentTime()), cost: f, pass: f, t_last_pause: this.pauseTime }));
        }, _onPlayerPause: function() {
          !this.doPlayReported || this.startTimePlay && !this.player._seeking && (this.pause_flag = 1, this.pauseTime = (/* @__PURE__ */ new Date()).getTime(), this.heartBeatStatusData.t_last_pause = this.pauseTime, this.heartBeatStatusData.t_last_resume = -1, this._log("PAUSE", { vt: Math.floor(1e3 * this.player.getCurrentTime()) }));
        }, _onLicenseHasResult: function(f) {
          f = f.paramData || {}, this._log("LICENSE_RESULT", { li_ri: f.result + " " + (f.errorCode || ""), li_ti: f.featureId || "sdk" });
        }, _onPlayerSeekStart: function(f) {
          this.seekStartTime = f.paramData.fromTime, this.startTimePlay = 0, this.seekStartStamp = (/* @__PURE__ */ new Date()).getTime();
        }, _onPlayerSeekEnd: function() {
          this.seekEndStamp = (/* @__PURE__ */ new Date()).getTime(), this._log("SEEK", { drag_from_timestamp: Math.floor(1e3 * this.seekStartTime), drag_to_timestamp: Math.floor(1e3 * this._seekEndData.toTime) }), this._log("SEEK_END", { vt: Math.floor(1e3 * this.player.getCurrentTime()), cost: this.seekEndStamp - this.seekStartStamp }), this._seekEndData = null;
        }, _onPlayerLoaded: function() {
          var f, b = this;
          this.doPlayReported && !this.stucking && document.visibilityState !== "hidden" && (this.player._seeking ? (this.seekingStartTime = this.player.getCurrentTime(), this.checkSeekStuckedTimer && clearTimeout(this.checkSeekStuckedTimer), this.checkSeekStuckedTimer = setTimeout(function() {
            var S = b.player.readyState() < 4;
            b.player.readyState() || (S = !0), b.player.getCurrentTime() === b.seekingStartTime && S && (S = b._getbwEstimator(), b._log("UNDERLOAD", { vt: Math.floor(1e3 * b.player.getCurrentTime()), bw: S, cbs: b._getCbs() }), b.stucking = !0, b.stuckStartTime = (/* @__PURE__ */ new Date()).getTime(), b._getCbs() === 0) && (b.heartBeatStatusData.t_last_load_start = b.stuckStartTime, b.heartBeatStatusData.t_last_load_end = -1);
          }, 500)) : (this.stuckStartTime = (/* @__PURE__ */ new Date()).getTime(), this._getCbs() === 0 && (this.heartBeatStatusData.t_last_load_start = this.stuckStartTime, this.heartBeatStatusData.t_last_load_end = -1), this.stuckStartTime - this.startTimePlay <= 1e3 || (this.stucking = !0, f = this._getbwEstimator(), this._log("UNDERLOAD", { vt: Math.floor(1e3 * this.player.getCurrentTime()), bw: f, cbs: this._getCbs() }), this.stuckStartTime = (/* @__PURE__ */ new Date()).getTime())));
        }, _onPlayerUnderload: function() {
          var f, b, S, w;
          !this.doPlayReported && this.player._options && this.player._options.autoplay || this.stucking && (f = Math.floor(1e3 * this.player.getCurrentTime()), b = this.stuckStartTime || (/* @__PURE__ */ new Date()).getTime(), 0 < (S = Math.floor((/* @__PURE__ */ new Date()).getTime() - b)) && S < (1e3 * this.player._options.waitingTimeout || 6e4) && (w = this._getbwEstimator(), this._getCbs() === 0 && (this.heartBeatStatusData.t_last_load_end = (/* @__PURE__ */ new Date()).getTime()), this._log("LOADED", { vt: f, cost: S, bw: w, cbs: this._getCbs(), t_last_load_start: b })), this.seekStart = !1, this.stucking = !1);
        }, _onPlayerSeeking: function() {
          this.seekStart = !0, this.seekingData.seekingStartTime = performance.now();
        }, _onPlayerSeeked: function() {
          var f = this;
          this.player._splayer ? this.player.one("canplay", function() {
            f._reportSeeked();
          }) : this._reportSeeked();
        }, _reportSeeked: function() {
          var f = performance.now(), f = Math.floor(f - this.seekingData.seekingStartTime);
          this._log("SEEKED", { vt: Math.floor(1e3 * this.player.getCurrentTime()), cost: f });
        }, _reportTrace: function(f) {
          this._log("TRACE", { log: f });
        }, _reportDump: function(f) {
          this._log("DUMP", f);
        }, _onPlayerError: function(f) {
          this._reportTrace(f.paramData), this.playId = 0, this.statisticsHistoryTimer && (clearInterval(this.statisticsHistoryTimer), this.statisticsHistoryTimer = null, this.resetStatisticsHistoryData()), u && (clearInterval(u), u = null);
        }, _getbwEstimator: function() {
          var f = NaN;
          try {
            f = ((f = this.player._getbwEstimator && parseInt(this.player._getbwEstimator(), 10)) / 8 / 1024).toFixed(2);
          } catch {
          }
          return f;
        }, _getCbs: function() {
          return !this.player.getOptions().isLive && this.seekStart ? 1 : 0;
        }, _log: function(f, b) {
          if (this.trackLog) {
            this.updateSourceInfo();
            var S = a.copy(this.opt), w = (this.requestId = s.guid(), r.logReportTo), f = (S.e = m[f] + "", S.en = f, S.ri = this.sessionId, S.bi = S.bi && String(S.bi), S.t = (/* @__PURE__ */ new Date()).getTime() + "", S.cdn_ip = this._userNetInfo.cdnIp, S.hn = this._userNetInfo.localIp, this.player.getCurrentQuality()), T = (f != "" && (S.definition = f.definition), []), f = (a.each(b, function(A, H) {
              if (typeof H != "string") try {
                H = JSON.stringify(H);
              } catch {
              }
              T.push(A + "=" + H);
            }), ""), b = this.player.getOptions(), f = ((f = b && b.vid || this.lightSaasVideoId ? b.vid || this.lightSaasVideoId : f) && T.push("vid=" + f), "");
            (f = b && b.mediaAuth ? b.mediaAuth : f) && T.push("pauth=" + f);
            try {
              Aliplayer && Aliplayer.__logCallback__ && (S.args = T, Aliplayer.__logCallback__(S));
            } catch (A) {
              console.log(A);
            }
            if ((T = T.join("&")) == "" && (T = "0"), S.args = this.encodeURL(T), this._logService) {
              if (S.e === String(m.DUMP)) return void this._logService.reportDump(S);
              this._logService.add(S);
            } else {
              var C = [];
              a.each(S, function(A, H) {
                C.push(A + "=" + H);
              }), C = C.join("&"), t.jsonp(w + "?" + C, function() {
              }, function() {
              });
            }
            return this.sessionId;
          }
        }, _imageInfo: function() {
          try {
            var f, b, S, w, T, C, R;
            return /MSIE\s8\.0/.test(navigator.userAgent) ? {} : (f = this.player.tag) ? (b = document.createElement("canvas"), S = f.videoWidth, w = f.videoHeight, b.width = S, b.height = w, (T = b.getContext("2d")).save(), T.drawImage(f, 0, 0, S, w), T.restore(), C = b.toDataURL("image/jpeg", 1), R = "", { imgLength: (R = C ? (R = C.substr(C.indexOf(",") + 1)) || "" : R).length }) : {};
          } catch {
            return {};
          }
        } });
        o.exports = v;
      }, { "../config": 15, "../lib/data": 31, "../lib/event": 34, "../lib/io": 41, "../lib/object": 43, "../lib/oo": 44, "../lib/playerutil": 46, "../lib/ua": 49, "../player/base/event/eventtype": 68, "./log": 62, "./util": 64 }], 64: [function(d, o, x) {
        var _ = d("../lib/cookie"), u = d("../lib/data"), c = d("../lib/ua");
        o.exports.getUuid = function() {
          var a = _.get("p_h5_u");
          return a || (a = u.guid(), _.set("p_h5_u", a, 730)), a;
        }, o.exports.getTerminalType = function() {
          var a = "pc";
          return c.IS_IPAD ? a = "pad" : c.IS_ANDROID ? a = "android" : c.IS_IOS && (a = "iphone"), a;
        }, o.exports.returnUTCDate = function(y) {
          var s = y.getUTCFullYear(), t = y.getUTCMonth(), e = y.getUTCDate(), n = y.getUTCHours(), r = y.getUTCMinutes(), p = y.getUTCSeconds(), y = y.getUTCMilliseconds();
          return Date.UTC(s, t, e, n, r, p, y);
        }, o.exports.getRfc822 = function(a) {
          return a.toUTCString().replace("UTC", "GMT");
        };
      }, { "../lib/cookie": 30, "../lib/data": 31, "../lib/ua": 49 }], 65: [function(d, o, x) {
        var _ = d("./base/player"), u = d("./saas/mtsplayer"), c = d("./saas/vodplayer"), a = d("./saas/lightPlayer"), s = d("./audio/audioplayer"), t = d("./hls/hlsplayer"), e = d("./flv/flvplayer"), n = d("./dash/dashplayer"), r = d("./rts/rtsplayer"), p = d("./drm/drmplayer"), y = d("./splayer/splayer"), h = d("../lib/ua"), l = d("../lib/playerutil"), g = (d("../lib/dom"), d("../lib/io"), d("../lang/index")), m = d("../lib/constants"), v = d("./base/event/eventtype");
        o.exports.create = function(w, S) {
          w.PlayAuth && (w.playauth = w.PlayAuth), typeof w.rtsFallback != "boolean" && w.rtsFallbackSource && (w.rtsFallback = !0), w._userOptions || (w._userOptions = Object.assign({}, w)), navigator && navigator.userAgent && -1 < navigator.userAgent.indexOf("Olympic_Android") && (w.useNativeControls = !0), w.readyCallback = S = typeof S != "function" ? function() {
          } : S, g.setCurrentLanguage(w.language, "h5", w.languageTexts, w.extLanguageTexts);
          var S = l.handleOption(w), w = S.source, T = S.format;
          if (T && w) try {
            T = T.toLowerCase();
          } catch (A) {
            console.log("Aliplayer - parsing format failed", A), T = "";
          }
          else T = "";
          l.isSupportedFormat(T) || (T = ""), S.optionFormat = T, S.drm && (S.isDrm = !0), S.useDrm2 === void 0 && (S.useDrm2 = !(S.isDrm && S.accessKeyId));
          var C, R = l.isAudio(w, T), E = (R && (S.mediaType = "audio"), l.createWrapper(S));
          if (E.player) return E.player;
          if (R) C = new s(E, S);
          else if (l.isRts(w)) C = new r(E, S);
          else if ((S.forceH265 || S.enableH265) && (l.isMp4(w, T) || l.isFlv(w, T) || l.isHls(w, T))) C = new y(E, S);
          else if ((S.forceH266 || S.enableH266) && (l.isMp4(w, T) || S.isLive && (l.isFlv(w, T) || l.isHls(w, T)))) C = new y(E, S);
          else if (!S.useFlashPrism && l.isFlv(w, T) && l.isSupportFlv()) C = new e(E, S);
          else if ([null, void 0].indexOf(S.mediaAuth) !== -1 || S.source) if (S.vid && !S.source) if (S.authInfo) C = new u(E, S);
          else {
            if (!(S.playauth || S.accessKeyId && S.accessKeySecret)) throw R = "vid=" + S.vid + " playauth='', playauth property is required by VOD(视频点播) as new Aliplayer.", new Error(R);
            C = new c(E, S);
          }
          else l.isHls(w, T) ? l.canPlayHls() ? C = new (l.isSupportHls() && (l.isUsedHlsPluginOnMobile() || l.isSafariUsedHlsPlugin(S.useHlsPluginForSafari)) ? S.isDrm ? p : t : S.isDrm ? p : _)(E, S) : l.isSupportHls() ? C = new (S.isDrm ? p : t)(E, S) : h.os.pc || (C = new _(E, S)) : l.isDash(w, T) && l.isSupportMSE() ? C = new (S.isDrm ? p : n)(E, S) : (C = new _(E, S), S.source || (R = { error_code: m.ErrorCode.InvalidSourceURL, error_msg: "InvalidSourceURL", display_msg: g.get("Error_Empty_Source") }, C.trigger(v.Player.Error, R)));
          else C = new a(E, S);
          return C;
        };
      }, { "../lang/index": 24, "../lib/constants": 29, "../lib/dom": 33, "../lib/io": 41, "../lib/playerutil": 46, "../lib/ua": 49, "./audio/audioplayer": 66, "./base/event/eventtype": 68, "./base/player": 91, "./dash/dashplayer": 98, "./drm/drmplayer": 101, "./flv/flvplayer": 103, "./hls/hlsplayer": 105, "./rts/rtsplayer": 107, "./saas/lightPlayer": 111, "./saas/mtsplayer": 113, "./saas/vodplayer": 118, "./splayer/splayer": 127 }], 66: [function(t, o, x) {
        var _ = t("../base/player"), u = t("../../ui/component"), c = t("../../lib/dom"), a = t("../../lib/object"), s = t("../../lib/playerutil"), t = _.extend({ init: function(e, n) {
          this._isAudio = !0, n.skinLayout === void 0 && (n.skinLayout = s.getDefaultAudioLayout()), _.call(this, e, n);
        } });
        t.prototype.createEl = function() {
          this.tag.tagName !== "AUDIO" && (this._el = this.tag, this.tag = u.prototype.createEl.call(this, "audio"));
          var e = this._el, n = this.tag, r = (n.player = this, c.getElementAttributes(n));
          return a.each(r, function(p) {
            e.setAttribute(p, r[p]);
          }), this.setVideoAttrs(), n.parentNode && n.parentNode.insertBefore(e, n), c.insertFirst(n, e), e;
        }, o.exports = t;
      }, { "../../lib/dom": 33, "../../lib/object": 43, "../../lib/playerutil": 46, "../../ui/component": 132, "../base/player": 91 }], 67: [function(d, o, x) {
        var _ = d("../../../lib/event"), u = d("./eventtype"), c = d("../eventHandler/video/index"), a = d("../eventHandler/player/index");
        o.exports.offAll = function(s) {
          var t, e, n, r = s.tag, p = s._el;
          for (t in u.Video) _.off(r, u.Video[t]);
          for (e in u.Player) _.off(p, u.Player[e]);
          for (n in u.Private) _.off(p, u.Private[n]);
        }, o.exports.offVideoAll = function(s) {
          var t, e = s.tag;
          for (t in u.Video) _.off(e, u.Video[t]);
        }, o.exports.onAll = function(s) {
          c.bind(s), a.bind(s);
        };
      }, { "../../../lib/event": 34, "../eventHandler/player/index": 72, "../eventHandler/video/index": 82, "./eventtype": 68 }], 68: [function(d, o, x) {
        o.exports = { Video: { TimeUpdate: "timeupdate", Play: "play", Playing: "playing", Pause: "pause", CanPlay: "canplay", Waiting: "waiting", Ended: "ended", Error: "error", Suspend: "suspend", Stalled: "stalled", LoadStart: "loadstart", DurationChange: "durationchange", LoadedData: "loadeddata", LoadedMetadata: "loadedmetadata", Progress: "progress", CanPlayThrough: "canplaythrough", ContextMenu: "contextmenu", Seeking: "seeking", Seeked: "seeked", ManualEnded: "manualended", VolumeChange: "volumechange", RateChange: "ratechange", Resize: "resize" }, Player: { TimeUpdate: "timeupdate", DurationChange: "durationchange", Init: "init", Ready: "ready", Play: "play", Playing: "playing", Pause: "pause", CanPlay: "canplay", Waiting: "waiting", Ended: "ended", Error: "error", RequestFullScreen: "requestFullScreen", CancelFullScreen: "cancelFullScreen", Snapshoted: "snapshoted", Snapshoting: "snapshoting", OnM3u8Retry: "onM3u8Retry", LiveStreamStop: "liveStreamStop", AutoPlayPrevented: "autoPlayPrevented", AutoPlay: "autoplay", StartSeek: "startSeek", CompleteSeek: "completeSeek", TextTrackReady: "textTrackReady", AudioTrackReady: "audioTrackReady", AudioTrackUpdated: "audioTrackUpdated", LevelsLoaded: "levelsLoaded", AudioTrackSwitch: "audioTrackSwitch", AudioTrackSwitched: "audioTrackSwitched", LevelSwitch: "levelSwitch", LevelSwitched: "levelSwitched", MarkerDotOver: "markerDotOver", MarkerDotOut: "markerDotOut", DefaultBandWidth: "defaultbandwidth", ResolutionChange: "resolutionChange", SeiFrame: "seiFrame", RtsFallback: "rtsFallback", RtsTraceId: "rtsTraceId", H265PlayInfo: "h265PlayInfo", H266PlayInfo: "h266PlayInfo", H265DecoderOverload: "h265DecoderOverload", SettingSelected: "settingSelected", AutoResize: "autoResize", VideoUnavailable: "videoUnavailable" }, Private: { Create: "create", Play_Btn_Show: "play_btn_show", UiH5Ready: "uiH5Ready", Error_Hide: "error_hide", Error_Show: "error_show", Info_Show: "info_show", Info_Hide: "info_hide", H5_Loading_Show: "h5_loading_show", H5_Loading_Hide: "h5_loading_hide", HideProgress: "hideProgress", CancelHideProgress: "cancelHideProgress", UpdateProgress: "updateProgress", UpdateCursorPosition: "updateCursorPosition", Click: "click", MouseOver: "mouseover", MouseOut: "mouseout", MouseEnter: "mouseenter", MouseLeave: "mouseleave", TouchStart: "touchstart", TouchMove: "touchmove", TouchEnd: "touchend", HideBar: "hideBar", ShowBar: "showBar", ControlBarClick: "controlBarClick", ReadyState: "readyState", SourceLoaded: "sourceloaded", QualityChange: "qualitychange", Play_Btn_Hide: "play_btn_hide", Cover_Hide: "cover_hide", Cover_Show: "cover_show", SeekStart: "seekStart", EndStart: "endStart", UpdateProgressBar: "updateProgressBar", LifeCycleChanged: "lifeCycleChanged", Dispose: "dispose", Created: "created", Snapshot_Hide: "snapshot_hide", AutoStreamShow: "auto_stream_show", AutoStreamHide: "auto_stream_hide", VolumnChanged: "volumnchanged", LiveShiftQueryCompleted: "liveShiftQueryCompleted", LiveShiftSwitchToLive: "LiveShiftSwitchToLive", StreamSelectorHide: "streamSelectorHide", SpeedSelectorHide: "speedSelectorHide", SettingShow: "settingShow", SettingHide: "settingHide", SelectorShow: "selectorShow", SelectorHide: "selectorHide", SettingListShow: "settingListShow", SettingListHide: "settingListHide", ThumbnailHide: "thumbnailHide", ThumbnailShow: "thumbnailShow", ThumbnailLoaded: "thumbnailLoaded", TooltipShow: "tooltipShow", TooltipHide: "tooltipHide", SelectorUpdateList: "selectorUpdateList", SelectorValueChange: "selectorValueChange", SelectorGenerateList: "selectorGenerateList", VolumeVisibilityChange: "volumeVisibilityChange", VolumeUpdatePosition: "volumeUpdatePosition", ChangeURL: "changeURL", UpdateToSettingList: "updateToSettingList", CCChanged: "CCChanged", CCStateChanged: "CCStateChanged", CCReset: "ccReset", TextTrackFounded: "textTrackFounded", UserTrackReset: "userTrackReset", PlayClick: "click", ProgressMarkerLoaded: "progressMarkerLoaded", MarkerTextShow: "markerTextShow", MarkerTextHide: "markerTextHide", PREPARE: "prepare", ProgressMarkerChanged: "progressMarkerChanged", SeiFrame: "privateSeiFrame", PlayInfoLoaded: "playInfoLoaded", Retry: "retry", LicenseHasResult: "licenseHasResult", PatchWaiting: "patchWaiting", VttHide: "vttHide", VttSwitchTrack: "vttSwitchTrack", VttClearTracks: "vttClearTracks", SafariDrmLevelSwitch: "safariDrmLevelSwitch", VodRequestException: "vodRequestException", VodRequestExceptionResume: "vodRequestExceptionResume", TraceLog: "traceLog", DumpBuffer: "dumpBuffer", PlaybackRateChanged: "playbackRateChanged", StatisticsInfo: "statisticsInfo", MutedAutoplay: "mutedAutoplay", HideUnmuteButton: "hideUnmuteButton", Timeline: "timeline", ManualPlay: "manualPlay", UpdateWatchTime: "updateWatchTime", FastForwardShow: "fastForwardShow", FastForwardHide: "fastForwardHide" } };
      }, {}], 69: [function(d, o, x) {
        d("../../event/eventtype");
        var _ = d("../../../../lib/dom"), u = d("../../../../lib/ua");
        o.exports.handle = function() {
          u.IS_IOS && (u.IS_IOS, !this._splayer || this._splayer.renderType !== 2) || _.removeClass(this.el(), "prism-fullscreen");
        };
      }, { "../../../../lib/dom": 33, "../../../../lib/ua": 49, "../../event/eventtype": 68 }], 70: [function(d, o, x) {
        var _ = d("../../event/eventtype");
        o.exports.handle = function(u) {
          var c = this;
          c.trigger(_.Player.CompleteSeek, u.paramData.toTime), c.one(_.Player.CanPlay, function() {
            c._enteredProgressMarker && c.pause();
          });
        };
      }, { "../../event/eventtype": 68 }], 71: [function(d, o, x) {
        var _ = d("../../event/eventtype"), u = (d("../../../../lib/constants"), d("../../../../lang/index"), d("../../../../monitor/util"));
        o.exports.handle = function(s) {
          var a = this, s = s.paramData;
          a.trigger(_.Private.H5_Loading_Hide), a.trigger(_.Private.Cover_Hide), a.trigger(_.Private.Play_Btn_Hide), a.trigger(_.Private.SettingListHide), a.trigger(_.Private.SelectorHide), a.trigger(_.Private.VolumeVisibilityChange, ""), s = s || {}, a._monitor && (s.uuid = u.getUuid(), s.serverRequestId = a._serverRequestId, s.requestId = a._monitor.sessionId, s.cdnIp = a._monitor._userNetInfo.cdnIp, s.localIp = a._monitor._userNetInfo.localIp), a._isError = !0, a.trigger(_.Private.Error_Show, s), a.trigger(_.Private.LifeCycleChanged, { type: _.Player.Error, data: s });
        };
      }, { "../../../../lang/index": 24, "../../../../lib/constants": 29, "../../../../monitor/util": 64, "../../event/eventtype": 68 }], 72: [function(d, o, x) {
        var _ = d("../../event/eventtype"), u = d("../../../../lib/event"), c = d("./lifecyclecommon"), a = { endStart: d("./endstart"), seekStart: d("./seekstart"), requestFullScreen: d("./requestfullscreen"), cancelFullScreen: d("./cancelfullscreen"), error: d("./error"), privateSeiFrame: d("./seiframe"), patchWaiting: d("../video/waiting") }, s = [_.Private.EndStart, _.Private.SeekStart, _.Player.RequestFullScreen, _.Player.CancelFullScreen, _.Player.Error, _.Player.Ready, _.Private.Dispose, _.Private.Created, _.Private.SeiFrame, _.Private.PatchWaiting];
        o.exports.bind = function(t) {
          t.el();
          for (var e = 0; e < s.length; e++) {
            var n = s[e];
            a[n] != "undefined" && ((r, p, y) => {
              var h = r.el();
              u.on(h, p, function(l) {
                var g = (y && y.handle ? y : c).handle;
                g.call(r, l, p);
              });
            })(t, n, a[n]);
          }
        };
      }, { "../../../../lib/event": 34, "../../event/eventtype": 68, "../video/waiting": 90, "./cancelfullscreen": 69, "./endstart": 70, "./error": 71, "./lifecyclecommon": 73, "./requestfullscreen": 74, "./seekstart": 75, "./seiframe": 76 }], 73: [function(d, o, x) {
        var _ = d("../../event/eventtype");
        o.exports.handle = function(u, c) {
          this.trigger(_.Private.LifeCycleChanged, { type: c, data: u });
        };
      }, { "../../event/eventtype": 68 }], 74: [function(d, o, x) {
        d("../../event/eventtype");
        var _ = d("../../../../lib/dom"), u = d("../../../../lib/ua");
        o.exports.handle = function() {
          u.IS_IOS && (u.IS_IOS, !this._splayer || this._splayer.renderType !== 2) || _.addClass(this.el(), "prism-fullscreen");
        };
      }, { "../../../../lib/dom": 33, "../../../../lib/ua": 49, "../../event/eventtype": 68 }], 75: [function(d, o, x) {
        var _ = d("../../event/eventtype");
        o.exports.handle = function(u) {
          this._seeking = !0, this.trigger(_.Player.StartSeek, u.paramData.fromTime);
        };
      }, { "../../event/eventtype": 68 }], 76: [function(d, o, x) {
        d("../../event/eventtype"), o.exports.handle = function(a) {
          var u, c, a = a.paramData, s = a.pts;
          this._hls2 ? s = parseInt(1e3 * s) : this._hls && (u = a.pts, c = this._initPTS, s = parseInt((u - c) / 90, 10)), this._seis[s] = this._seis[s] || [], this._seis[s].push(a.dataContent);
        };
      }, { "../../event/eventtype": 68 }], 77: [function(d, o, x) {
        var _ = d("../../event/eventtype");
        o.exports.handle = function(u) {
          var c = this, a = (c._retrySwitchUrlCount = 0, c._liveRetryCount = 0, c._clearLiveErrorHandle(), c._dumpBuffer = "ABORTED", (/* @__PURE__ */ new Date()).getTime() - c.readyTime);
          c._options.autoplay || c._options._autoplay || !c.paused() || (c.trigger(_.Private.H5_Loading_Hide), c.trigger(_.Private.Play_Btn_Show)), c.trigger(_.Player.CanPlay, { loadtime: a });
        };
      }, { "../../event/eventtype": 68 }], 78: [function(d, o, x) {
        var _ = d("../../event/eventtype"), u = d("../../../../lib/dom"), c = d("../../../../lib/ua");
        o.exports.handle = function(a) {
          this._seeking = !1;
          var s = this.tag;
          s.style.display === "none" && c.IS_IOS && setTimeout(function() {
            u.css(s, "display", "block");
          }, 100), this.trigger(_.Video.CanPlayThrough);
        };
      }, { "../../../../lib/dom": 33, "../../../../lib/ua": 49, "../../event/eventtype": 68 }], 79: [function(d, o, x) {
        o.exports.handle = function(_, u) {
          var c = "";
          _ && _.paramData && (c = _.paramData), this.trigger(u, c);
        };
      }, {}], 80: [function(d, o, x) {
        var _ = d("../../event/eventtype");
        d("../../../../lang/index"), d("../../../../lib/event"), o.exports.handle = function(u) {
          var c = this;
          c.waiting = !1, c._ended = !0, c._currentTimeForDisableSeek = 0, c.traceLog("video/ended.js", "event::ended"), c.trigger(_.Private.Play_Btn_Show), c.trigger(_.Player.Ended, { playTime: c.getPlayTime() }), c.__disposed || (c._monitor && c._monitor._onPlayerInit(), c._options.rePlay ? (c._monitor && c._monitor.startHeartBeat(), this._splayer || (c.seek(c._getPlayStartTime()), c.tag.play())) : c._options.isLive && c.trigger(_.Private.H5_Loading_Hide));
        };
      }, { "../../../../lang/index": 24, "../../../../lib/event": 34, "../../event/eventtype": 68 }], 81: [function(d, o, x) {
        var _ = d("../../event/eventtype"), u = d("../../../../lib/constants"), c = d("../../../../lang/index"), a = (d("../../../../lib/event"), d("../../../../lib/ua")), s = (d("../../../../lib/io"), d("../../../../lib/playerutil")), t = "video/error.js";
        function e(n, r, p) {
          var y = n._options, h = y.source || "";
          (r = r !== 4 && a.IS_IOS && /qqbrowser/i.test(a.USER_AGENT) ? 4 : r) === 4 && s.isHls(h) ? s.detectRegionBlock(h, function(l) {
            l ? (l = { mediaId: y.isLive ? "ISLIVE" : y.vid || "", error_code: u.ErrorCode.RegionBlock, error_msg: c.get("Error_Region_Block_Text"), diagnosis_info: c.get("Tip_Err_Blocked") }, n.logError(l), n.trigger("error", l)) : p();
          }) : p();
        }
        o.exports.handle = function(n) {
          if ((n.target || n.srcElement).error) {
            var r = this;
            if (r.waiting = !1, r._clearTimeout(), r.checkOnline() && !r._splayer && !r._drm) {
              var p, l = "", y = n.target || n.srcElement, h = y.error && y.error.message || "", l = "";
              if (y.error && y.error.code && (p = y.error.code, l = u.VideoErrorCode[y.error.code], h = p + " || " + h), r.traceLog(t, "event::error#" + p + "#" + h), r._reportDumpBuffer && r._reportDumpBuffer(), r._options.isLive) e(r, p, function() {
                r._options.liveRetry > r._liveRetryCount ? r._reloadAndPlayForM3u8() : (r._liveRetryCount = 0, r.trigger(_.Player.LiveStreamStop), r._liveErrorHandle = setTimeout(function() {
                  var m = { mediaId: "ISLIVE", error_code: l, error_msg: h || c.get("Error_Play_Text") + "，" + c.get("Error_Retry_Text") };
                  r.logError(m), m.display_msg = u.VideoErrorCodeText[p] || m.error_msg, r.trigger("error", m);
                }), a.IS_UC && (r._liveErrorHandle = null));
              });
              else if (p == 3) {
                if (y = "", -1 < h.indexOf("no decoder found")) y = c.get("Error_No_Decoder_Text");
                else if (r._nudgeCount = r._nudgeCount || 0, r._nudgeCount < 5) {
                  r._nudgeCount++;
                  var g = +r._nudgeCount, g = r.getCurrentTime() + g;
                  if (r.traceLog(t, "decode error, try to nudge(" + r._nudgeCount + "/5) from " + r.getCurrentTime() + " to " + g + "s, duration: " + r.getDuration()), g < r.getDuration()) return void r._loadByUrlInner(r._options.source, g, !0);
                } else if ((function() {
                  var m = !1, v = this.getOptions();
                  {
                    var f;
                    this._fallback || !s.isHls(v.source) || this._options._native || !s.canPlayHls() || this.swPlayer || (m = !0, this._options.useHlsPluginForSafari = !1, this._options._native = !0, this.traceLog(t, "fallback to native player"), f = this.getCurrentTime(), window.Aliplayer && window.Aliplayer.reloadInstance(this._options, function(b) {
                      b._fallback = !0, v.isLive || b.seek(f);
                    }, this));
                  }
                  return m;
                }).call(r) || (function() {
                  var m = !1, v = this.getOptions();
                  {
                    var f;
                    !this._fallback && s.isHls(v.source) && this._options._native && s.isSupportHls() && (m = !0, this._options.useHlsPluginForSafari = !0, this._options._native = !1, this.traceLog(t, "fallback to MSE player"), f = this.getCurrentTime(), window.Aliplayer) && window.Aliplayer.reloadInstance(this._options, function(b) {
                      b._fallback = !0, v.isLive || b.seek(f);
                    }, this);
                  }
                  return m;
                }).call(r)) return;
                g = { mediaId: r._options.vid || "", error_code: l, error_msg: h }, r.logError(g), g.display_msg = u.VideoErrorCodeText[p] + (y ? "，" + y : ""), g.diagnosis_info = c.get("Tip_Err_Decode") + "<br />" + c.get("Tip_Err_Common_Short") + h, r.trigger(_.Player.Error, g);
              } else r._reloadForVod() || e(r, p, function() {
                var m, v, f;
                m = c.get("Error_Play_Text"), v = !1, p < 3 ? m = u.VideoErrorCodeText[p] : r._eventState == u.SUSPEND ? (m = c.get("Error_Load_Abort_Text"), l = u.ErrorCode.RequestDataError) : r._eventState == u.LOAD_START ? (m = c.get("Error_Network_Text"), 0 < r._options.source.indexOf("auth_key") && (m = m + "，" + c.get("Error_AuthKey_Text")), l = u.ErrorCode.StartLoadData) : r._eventState == u.LOADED_METADATA && (m = c.get("Error_Play_Text"), l = u.ErrorCode.PlayingError), m = m + "，" + c.get("Error_Retry_Text"), 1 < r._urls.length && r._retrySwitchUrlCount < 3 && r._options.source.indexOf(".mpd") == -1 && (r.switchUrl(), v = !0), f = { mediaId: r._options.vid || "", error_code: l, error_msg: h }, v || (r.logError(f), f.display_msg = m, r.trigger(_.Player.Error, f));
              });
            }
          } else this.traceLog(t, "video.MediaError is null, may be caused by non-video source, like invalid poster (" + (n.target || n.srcElement).poster + ")");
        };
      }, { "../../../../lang/index": 24, "../../../../lib/constants": 29, "../../../../lib/event": 34, "../../../../lib/io": 41, "../../../../lib/playerutil": 46, "../../../../lib/ua": 49, "../../event/eventtype": 68 }], 82: [function(d, o, x) {
        var _ = d("../../../../lib/event"), u = d("../../event/eventtype"), c = { canplay: d("./canplay"), canplaythrough: d("./canplaythrough"), common: d("./common"), ended: d("./ended"), error: d("./error"), pause: d("./pause"), play: d("./play"), playing: d("./playing"), waiting: d("./waiting"), timeupdate: d("./timeupdate"), manualended: d("./ended"), loadedmetadata: d("./loadedmetadata"), seeking: d("./seeking"), resize: d("./resize") };
        o.exports.bind = function(a) {
          a.tag;
          for (var s in u.Video)
            s = u.Video[s], ((t, e, n) => {
              var r = t.tag;
              _.on(r, e, function(p) {
                n.handle.call(t, p, e), e != u.Video.Error && (e == u.Video.ManualEnded && (e = u.Video.Ended), t.trigger(u.Private.LifeCycleChanged, { type: e, data: p }));
              });
            })(a, s, c[s] !== void 0 ? c[s] : c.common);
        };
      }, { "../../../../lib/event": 34, "../../event/eventtype": 68, "./canplay": 77, "./canplaythrough": 78, "./common": 79, "./ended": 80, "./error": 81, "./loadedmetadata": 83, "./pause": 84, "./play": 85, "./playing": 86, "./resize": 87, "./seeking": 88, "./timeupdate": 89, "./waiting": 90 }], 83: [function(d, o, x) {
        var _ = d("../../event/eventtype");
        d("../../../../lib/playerutil"), o.exports.handle = function(u) {
          var c = this.tag, a = c.duration < 1 ? 0 : c.duration;
          this._getSubVideoConfig().start > a - 1 && (console.warn("Params.start [" + this._getSubVideoConfig().start + "] is greater than video.duration [" + a + "] - 1, seeking to 0"), this.setStartEnd(0, this._getSubVideoConfig().end)), this._getWatchTimeConfig().watchStartTime > a - 1 && (console.warn("Params.watchStartTime [" + this._getWatchTimeConfig().watchStartTime + "] is greater than video.duration [" + a + "] - 1, seeking to 0"), this.setWatchTime(0, this._getWatchTimeConfig().watchEndTime)), this.trigger(_.Private.ReadyState), this._splayer && this.trigger(_.Video.DurationChange), this.trigger(_.Video.LoadedMetadata), c.videoWidth && c.videoHeight || this.trigger(_.Player.VideoUnavailable);
        };
      }, { "../../../../lib/playerutil": 46, "../../event/eventtype": 68 }], 84: [function(d, o, x) {
        var _ = d("../../event/eventtype"), u = d("../../../../lib/ua");
        o.exports.handle = function(c) {
          var a = this;
          a._seeking && a._splayer || (a._hls && a._options && a._options.isLive && u.IS_FIREFOX && a.trigger(_.Private.Play_Btn_Show), a._clearTimeout(), a.trigger(_.Private.AutoStreamHide), a.trigger(_.Player.Pause), a._isManualPause && (a.trigger(_.Private.Play_Btn_Show), a.trigger(_.Private.H5_Loading_Hide)), a.waiting = !1);
        };
      }, { "../../../../lib/ua": 49, "../../event/eventtype": 68 }], 85: [function(d, o, x) {
        var _ = d("../../event/eventtype");
        o.exports.handle = function(u) {
          this.trigger(_.Private.Error_Hide), this.trigger(_.Private.Cover_Hide), this.trigger(_.Private.AutoStreamHide), this.waiting = !1, this.trigger(_.Player.Play);
        };
      }, { "../../event/eventtype": 68 }], 86: [function(d, o, x) {
        var _ = d("../../event/eventtype");
        o.exports.handle = function(u) {
          var c, a = this;
          this.tag.paused || (a.trigger(_.Private.H5_Loading_Hide), a.trigger(_.Private.Cover_Hide), a.trigger(_.Private.Info_Hide), a.waiting = !1, a._ended = !1, a._liveRetryCount = 0, a._vodRetryCount = 0, a._seeking = !1, c = a.getCurrentTime(), a._waitingReloadTime != c && (a._waitingTimeoutCount = 0), a._checkTimeoutHandle && (clearTimeout(a._checkTimeoutHandle), a._checkTimeoutHandle = null), a._waitingLoadedHandle && (clearTimeout(a._waitingLoadedHandle), a._waitingLoadedHandle = null), a._ucSourceHandle && (clearTimeout(a._ucSourceHandle), a._ucSourceHandle = null), a._waitingDelayLoadingShowHandle && (clearTimeout(a._waitingDelayLoadingShowHandle), a._waitingDelayLoadingShowHandle = null), a._waitingTimeoutHandle && (clearTimeout(a._waitingTimeoutHandle), a._waitingTimeoutHandle = null, a._ccService) && a._options.isLive && (c = a._ccService.getCurrentSubtitle(), a._setDefaultCC = !0, c) && a._ccService.switch(c), a.trigger(_.Private.AutoStreamHide), a.trigger(_.Player.Playing), a.trigger(_.Private.Error_Hide), a.trigger(_.Private.Play_Btn_Hide));
        };
      }, { "../../event/eventtype": 68 }], 87: [function(d, o, x) {
        var _ = d("../../event/eventtype"), u = d("../../../../feature/ratioAdapter");
        o.exports.handle = function(c) {
          this.trigger(_.Video.Resize);
          var a = this.getOptions();
          if (a.autoSize) {
            if (!this._ratioAdapter) {
              if (a.autoSize !== !0 && a.autoSize !== "width" && a.autoSize !== "height") return void console.warn("Unknown parameter [autoSize]: " + a.autoSize + ", only true/height/width are supported");
              a.autoSize === !0 && (a.autoSize = "height"), this._ratioAdapter = new u();
            }
            this._ratioAdapter.autoResize(this.tag.videoWidth / this.tag.videoHeight, this, a.autoSize);
          }
        };
      }, { "../../../../feature/ratioAdapter": 22, "../../event/eventtype": 68 }], 88: [function(d, o, x) {
        var _ = d("../../event/eventtype");
        d("../../../../lib/playerutil"), o.exports.handle = function(u) {
          var c, a, s, t = this.tag, e = (this.getOptions().disableSeek && (e = t.currentTime - this._currentTimeForDisableSeek, 0.01 < Math.abs(e)) && (t.currentTime = this._currentTimeForDisableSeek), t.currentTime);
          this._canSeek(e) || (c = this._getWatchTimeConfig(), s = 0, (a = this._getSubVideoConfig()).start || a.end ? s = e > a.end ? a.end : a.start : (c.watchStartTime || c.watchEndTime) && (s = e > c.watchEndTime ? c.watchEndTime : c.watchStartTime), t.currentTime = s), this.trigger(_.Video.Seeking);
        };
      }, { "../../../../lib/playerutil": 46, "../../event/eventtype": 68 }], 89: [function(d, o, x) {
        var _ = d("../../event/eventtype"), u = d("../../../../lib/ua"), c = d("../../../../lib/event"), a = d("../../plugin/status");
        function s(t) {
          var e = this;
          t != null && t.length && t.forEach(function(n) {
            e.trigger(_.Player.SeiFrame, n);
          });
        }
        o.exports.handle = function(t) {
          var e = this;
          if (e._isError || e.trigger(_.Player.TimeUpdate, t.timeStamp), !e.__disposed) {
            e._decodeErrorNudgeTimer || (e._decodeErrorNudgeTimer = setTimeout(function() {
              e._nudgeCount = 0;
            }, 3e3)), (u.IS_IOS || u.IS_MAC_SAFARI) && (clearTimeout(e._waitingPatchTimer), e._waitingPatchTimer = setTimeout(function() {
              e.waiting || e._isError || e.paused() || e._disposed || (console.log("!!!!!!!manually waiting!!!!!!!"), e.trigger(_.Private.PatchWaiting));
            }, 3e3));
            var n, r, p, y = e.getCurrentTime(), t = (e.tag.seeking || (e._currentTimeForDisableSeek = y), e.waiting && !e._TimeUpdateStamp && (e._TimeUpdateStamp = y), e.waiting != 0 && e._TimeUpdateStamp == y || y === 0 || (e.trigger(_.Private.H5_Loading_Hide), e.trigger(_.Private.AutoStreamHide), e._checkTimeoutHandle && clearTimeout(e._checkTimeoutHandle), e._waitingTimeoutHandle && clearTimeout(e._waitingTimeoutHandle), e._waitingLoadedHandle && clearTimeout(e._waitingLoadedHandle), e._ucSourceHandle && (clearTimeout(e._ucSourceHandle), e._ucSourceHandle = null), e.waiting = !1), u.IS_ANDROID && u.IS_UC && (e._timeNotUpdateCount = e._timeNotUpdateCount || 0, e.waiting || y !== e._TimeUpdateStamp || (e._timeNotUpdateCount++, 2 <= e._timeNotUpdateCount && (e._timeNotUpdateCount = 0, e.trigger(_.Private.PatchWaiting)))), e._TimeUpdateStamp = y, e._options.isLive || (n = e.getDuration(), t = !1, r = 0, n < y && !e.paused() ? (r = 1, t = !0) : n - y < 0.2 && 0 <= u.browser.version.indexOf("49.") && !e.paused() ? (r = 2, t = !0) : e.exceedPreviewTime(y) ? (r = 3, t = !0) : y >= e._getWatchTimeConfig().watchEndTime && (r = 4, t = !0, e.pause()), t && setTimeout(function() {
              e._ended || (e._splayer || e.paused() || e.pause(), c.trigger(e.tag, _.Video.ManualEnded), e.traceLog && e.traceLog("video/timeupdate.js", "ManualEnded#" + r + "#" + y + "#" + n));
            }, 100)), e._player.tag), h = (t && e._options.isLive && (e._player.resolution && 0 < t.videoWidth && 0 < t.videoHeight && (0 < e._player.resolution.width || 0 < e._player.resolution.height) && (e._player.resolution.width !== t.videoWidth || e._player.resolution.height !== t.videoHeight) && (p = { oldResolution: { width: e._player.resolution.width, height: e._player.resolution.height }, newResolution: { width: t.videoWidth, height: t.videoHeight } }, e.trigger(_.Player.ResolutionChange, p)), e._player.resolution.width = t.videoWidth == 0 ? e._player.resolution.width : t.videoWidth, e._player.resolution.height = t.videoHeight == 0 ? e._player.resolution.height : t.videoHeight), u.IS_CHROME && Number(u.CHROME_VERSION) < 50 && (e._playingSlientPause && (clearTimeout(e._playingSlientPause), e._playingSlientPause = null), e._playingSlientPause = setTimeout(function() {
              var b, S;
              e._status != a.playing || e.paused() || e._drm || e._urls.length || (b = e.getCurrentTime(), S = e._options.isLive ? 0 : b, e._loadByUrlInner(e._options.source, S, b));
            }, 3e3)), e._seis || {}), l = Object.keys(h);
            if (l.length !== 0) for (var g = parseInt(1e3 * y, 10) + 300, m = 0; m < l.length; m++) {
              var v = l[m];
              if (!(v <= g)) break;
              s.call(e, h[v]), delete h[v];
            }
          }
        };
      }, { "../../../../lib/event": 34, "../../../../lib/ua": 49, "../../event/eventtype": 68, "../../plugin/status": 95 }], 90: [function(d, o, x) {
        var _ = d("../../event/eventtype"), u = d("../../../../lib/constants"), c = d("../../../../lib/event"), a = d("../../../../lang/index"), s = d("../../../../lib/ua"), t = d("../../../../lib/playerutil"), e = "video/waiting.js";
        o.exports.handle = function(n) {
          var r = this;
          if (!r._options.isLive) {
            var p = this.getCurrentTime(), y = this.getDuration();
            if (!r._ended && 0 < y && (y - p < 0.5 || y < p)) return r.pause(), r._ended = !0, c.trigger(this.tag, _.Video.ManualEnded), void (r.traceLog && r.traceLog(e, "ManualEnded#" + p + "#" + y));
          }
          r.waiting = !0;
          function h() {
            r._checkTimeoutHandle && (clearTimeout(r._checkTimeoutHandle), r._checkTimeoutHandle = null), r._waitingTimeoutHandle && (clearTimeout(r._waitingTimeoutHandle), r._waitingTimeoutHandle = null), r._waitingLoadedHandle && (clearTimeout(r._waitingLoadedHandle), r._waitingLoadedHandle = null), r._waitingDelayLoadingShowHandle && (clearTimeout(r._waitingDelayLoadingShowHandle), r._waitingDelayLoadingShowHandle = null), r._ucSourceHandle && (clearTimeout(r._ucSourceHandle), r._ucSourceHandle = null);
          }
          h(), r._waitingDelayLoadingShowHandle = setTimeout(function() {
            s.IS_IOS && r.paused() || r._isError || r.trigger(_.Private.H5_Loading_Show);
          }, 1e3 * r._options.delayLoadingShow), r._TimeUpdateStamp = null, r._checkTimeoutHandle = setTimeout(function() {
            r.trigger(_.Private.AutoStreamShow);
          }, 1e3 * r._options.loadDataTimeout), r.trigger(_.Player.Waiting), r._waitingTimeoutHandle = setTimeout(function() {
            var l;
            r.tag && r._options && (r.pause(), l = { mediaId: r._options.vid || "", error_code: u.ErrorCode.LoadingTimeout, error_msg: a.get("Error_Waiting_Timeout_Text") }, r.logError(l), r.trigger("error", l));
          }, 1e3 * r._options.waitingTimeout), p = r._options, p.disableLiveHalfRetry && p.isLive || p.disableVodHalfRetry && !p.isLive || (r._waitingLoadedHandle = setTimeout(function() {
            var l = r.getCurrentTime();
            r._waitingTimeoutCount == 0 && l != r._waitingReloadTime && (r.traceLog(e, "half-retry::" + r._options.waitingTimeout / 2), r._waitingTimeoutCount = 1, r._waitingReloadTime = l, l = r._options.isLive ? 0 : l, r._loadByUrlInner(r._options.source, l, !0));
          }, r._options.waitingTimeout / 2 * 1e3)), s.IS_ANDROID && s.IS_DINGTALK && (r._ucSourceHandle = setTimeout(function() {
            t.detectRegionBlock(r._options.source, function(l) {
              l && (l = { mediaId: r._options.vid, error_code: u.ErrorCode.RegionBlock, error_msg: a.get("Error_Region_Block_Text"), diagnosis_info: a.get("Tip_Err_Blocked") }, r.logError(l), r.trigger("error", l));
            });
          }, 5e3)), r.on("error", function() {
            h();
          });
        };
      }, { "../../../../lang/index": 24, "../../../../lib/constants": 29, "../../../../lib/event": 34, "../../../../lib/playerutil": 46, "../../../../lib/ua": 49, "../../event/eventtype": 68 }], 91: [function(d, o, x) {
        (function(_) {
          (function() {
            var u = typeof Promise > "u" ? d("es6-promise").Promise : Promise, c = d("../../ui/component"), a = d("../../lib/object"), s = d("../../lib/dom"), t = d("../../lib/event"), e = d("../../ui/exports"), n = d("../../monitor/monitor"), r = d("../../lib/ua"), p = d("../../lib/constants"), y = d("../../lib/playerutil"), h = d("../../lib/util"), l = d("./x5play"), g = d("../../lib/cookie"), m = d("../../lang/index"), v = d("../../feature/autoplaydelay"), f = d("./event/eventmanager"), b = d("../../ui/component/cover"), S = d("../../feature/license"), w = d("../../ui/component/text-track-display"), T = d("../../ui/component/press-fast-forward"), C = d("../../ui/component/double-click-skip"), R = d("../../commonui/autostreamselector"), E = d("./event/eventtype"), A = d("./plugin/lifecyclemanager"), H = d("../service/export"), N = d("../../ui/component/progressmarker"), O = d("../../feature/keyboardControl"), F = d("../../feature/AntiRecord"), U = d("../../lib/vttnext/index"), M = d("../../lib/codec-probe"), P = d("../splayer/splayerinjector"), I = d("../../ui/component/util").throttle, L = d("../../feature/ratioAdapter"), V = d("../../feature/logoManager"), Q = "base/player.js", j = c.extend({ init: function(k, D) {
              var W;
              function ee(re) {
                var ne, le = this;
                _ === "dev" || window.location.protocol === "file:" || window.location.protocol === "resource:" || -1 < window.location.href.indexOf("resource://") || this._licenseHasResult || (this._licenseHasResult = !0, D.license && D.license.key && D.license.domain ? (re.paramData.renderType !== "native" && (re = re.paramData.codecTag, y.isH265Codec(re) ? ne = p.FEATURE_ID_H265 : y.isH266Codec(re) && (ne = p.FEATURE_ID_H266)), S.getLicense(D.license.domain, D.license.key, D.env === "SEA" ? "ap-southeast-1" : "cn-shanghai").then(function(G) {
                  var oe = G.validate(p.PLAYER_SDK_CODE_LEGACY, ne), G = G.validate(p.PLAYER_SDK_CODE, ne), ie = oe === 0 || G === 0;
                  if (ie || console.log(p.PLAYER_SDK_CODE_LEGACY, oe, p.PLAYER_SDK_CODE, G), ie) le.trigger(E.Private.LicenseHasResult, { result: p.LicenseResultCode.Success, featureId: ne });
                  else {
                    if (oe === 2 || G === 2) return u.reject(p.LicenseResultCode.Expired);
                    {
                      if (oe === 1 && G === 1) return u.reject(p.LicenseResultCode.NotFound);
                      console.error("license validate unknown error");
                    }
                  }
                }).catch(function(K) {
                  var oe = String(K).split("#"), oe = (K = Number(oe[0]), oe[1]);
                  le.trigger(E.Private.LicenseHasResult, { result: K, errorCode: oe, featureId: ne }), S.logError(K);
                })) : (console.error(m.get("Tip_License_Required") + ": https://help.aliyun.com/zh/vod/developer-reference/license-authorization-and-management#13133fa053843"), console.error(m.get("Tip_License_Params") + ": https://help.aliyun.com/zh/vod/developer-reference/integration#387d8a4c094im"), this.trigger(E.Private.LicenseHasResult, { result: p.LicenseResultCode.LicenseKeyInvalid })));
              }
              this.tag = k, this.loaded = !1, this.played = !1, this.oncePlayed = !1, this.waiting = !1, this._urls = [], this._currentPlayIndex = 0, this._retrySwitchUrlCount = 0, this._isError = !1, this._isHls = !1, this._liveRetryCount = 0, this._liveRetryTimer = null, this._flvDumpTimer = null, this._vodRetryCount = 0, this._nudgeCount = 0, this._seeking = !1, this._serverRequestId = 0, this._waitingTimeoutCount = 0, this._waitingReloadTime = 0, this._created = !1, this._enteredProgressMarker = !1, this._liveShiftSeekStartTime = 0, this._seis = {}, this._initPTS = 0, this.isMutiLevel = !1, this._antiRecord = null, this._ratioAdapter = null, this._logoManager = null, this._clickPauseEnabled = !1, this._currentTimeForDisableSeek = 0, this._loadByUrlStartTime = 0, this._posOffset = 0, this._onceLogged = !1, this._licenseHasResult = !1, this.__disposed = !1, this.resolution = { width: 0, height: 0 }, D.skinLayout === void 0 && (D.skinLayout = y.getDefaultH5Layout()), (k = D.skinLayoutIgnore) != null && k.length && (D.skinLayout = y.ignoreSkinLayouts(D.skinLayout, D.skinLayoutIgnore)), y.isRts(D.source) && !D.autoplay && (D.preload = !1), D.env === "SEA" && (D.logReportTo = "https://videocloud-sgp.ap-southeast-1.log.aliyuncs.com/logstores/newplayer/track", D.disableDumpBuffer = !0), c.call(this, this, D), this.addClass("prism-player"), D.plugins && a.each(D.plugins, function(re, ne) {
                this[re](ne);
              }, this), this._createService(), this.UI = {}, D.useNativeControls ? this.tag.setAttribute("controls", "controls") : (this.UI = e, D.errorDisplay == 0 && (this.UI.errorDisplay = void 0)), D.disablePip && this.tag.setAttribute("disablePictureInPicture", "true"), this._handleLongPress(D), this._handleClickPause_dbClickFullscreen(D), this.initChildren(), this._options.trackLog && (this._monitor = new n(this, { video_id: 0, album_id: 0, from: this._options.from, source: this._options.source, logBatched: this._options.logBatched, logReportTo: this._options.logReportTo }, this._options.trackLog)), f.onAll(this), this.trigger(E.Private.Create, D._userOptions), this._options.preventRecord && (this._antiRecord = new F({ player: this }), this._antiRecord.start()), this._lifeCycleManager = new A(this), this._overrideNativePlay(), this._liveshiftService && !this._liveshiftService.validate() ? (k = { mediaId: this._options.vid || "", error_code: p.ErrorCode.InvalidParameter, error_msg: m.get("ShiftLiveTime_Error") }, this.trigger(E.Player.Error, k)) : (this._posOffset = this._getSubVideoConfig().start || 0, this._options.extraInfo && (k = this._options.extraInfo).liveRetry && (this._options.liveRetry = k.liveRetry), this.on(E.Private.ReadyState, function() {
                this.trigger(E.Player.Ready);
              }), this.on(E.Player.H265PlayInfo, ee), this.on(E.Player.H266PlayInfo, ee), this.one(E.Player.CanPlay, ee), this.on(E.Private.LicenseHasResult, function(G) {
                var ne = this, G = G.paramData || {}, le = G.result, K = G.errorCode, oe = G.featureId, G = p.LicenseResultCode, ie = "";
                switch (le) {
                  case G.LicenseKeyInvalid:
                  case G.DomainInvalid:
                    ie = m.get(p.LicenseErrorKey.Empty);
                    break;
                  case G.NotFound:
                    var ie = m.get(p.LicenseErrorKey.Unauthorized), ve = "";
                    oe === p.FEATURE_ID_H265 && (ve = "H265"), oe === p.FEATURE_ID_H266 && (ve = "H266"), console.error(m.get("Tip_License_Feature"), ve);
                    break;
                  case G.Expired:
                    ie = m.get(p.LicenseErrorKey.Expired);
                    break;
                  case G.CertInvalid:
                    -1 < ["E003", "E005", "E006"].indexOf(K) ? (ie = m.get(p.LicenseErrorKey.LicenseKeyInvalid) + "(" + K + ")", console.error(m.get("Tip_License_Check"))) : K === "E008" ? (ie = m.get(p.LicenseErrorKey.DomainInvalid) + "(" + K + ")", console.error(m.get("Tip_License_Domain"))) : K === "E010" && (ie = m.get(p.LicenseErrorKey.NotFound) + "(" + K + ")", console.error(m.get("Tip_License_Check")));
                }
                ie && (console.error(m.get("Tip_License_Reason") + " " + ie), setTimeout(function() {
                  ne.trigger(E.Player.Error, { mediaId: ne._options.vid || "", error_code: p.ErrorCode.LicenseError, display_msg: m.get("Error_Play_Text") + " (LICENSE ERROR)", error_msg: ie }), ne.tag.pause(), ne.trigger(E.Private.HideUnmuteButton), f.offAll(ne), ne.tag && ne.tag.parentNode && ne.tag.parentNode.removeChild(ne.tag), ne.play = function() {
                  }, ne.loadByUrl = function() {
                  };
                }));
              }), this._thumbnailService && this._options.thumbnailUrl && this._thumbnailService.get(this._options.thumbnailUrl), 0 < this._options.progressMarkers.length && this.trigger(E.Private.ProgressMarkerLoaded, this._options.progressMarkers), this._options.source && this._options._native && this._executeReadyCallback(), this._options.autoplay || this._options.preload ? this.trigger(E.Private.H5_Loading_Show) : this.trigger(E.Private.Play_Btn_Show), this._extraMultiSources(), this._options.source && (this.trigger(E.Private.PREPARE, "custom"), this._options.autoPlayDelay ? (this._autoPlayDelay = new v(this), (W = this)._autoPlayDelay.handle(function() {
                W.initPlay();
              })) : this.initPlay()), this._options.ratio && (this._options.autoSize ? console.warn("The parameter [ratio] will be ignored when [autoSize] is set.") : (this._options.height && console.warn("The parameter [height] will be ignored when [ratio] is set."), this._ratioAdapter = new L(), this._ratioAdapter.autoResize(this._options.ratio, this))), O.init.call(this), (k = this._options.logo) != null && k.length && (this._logoManager = new V({ container: this.el(), video: this.tag, logo: this._options.logo })), this._vttBroker = new U({ player: this }), this._getUserTextTracks());
            } });
            j.prototype.isSupportMSE = function() {
              return y.isSupportMSE();
            }, j.prototype.initPlay = function(k) {
              this._initPlayBehavior(k, this._options.source);
            }, j.prototype.initChildren = function() {
              var k = this.options(), D = k.skinLayout;
              if (D !== !1 && !a.isArray(D)) throw new Error("PrismPlayer Error: skinLayout should be false or type of array!");
              D !== !1 && D.length !== 0 && (this.options({ children: D }), c.prototype.initChildren.call(this)), this.UI.cover = b, k.className = "", this.addChild("cover", k), this.UI.autoStreamSelector = R, this.addChild("autoStreamSelector", k), this.UI.progressMarker = N, this.addChild("progressMarker", k), this.UI.textTrackDisplay = w, this.addChild("textTrackDisplay", k), k.longPressFastForward && (this.UI.pressFastForward = T, this.addChild("pressFastForward", { name: "pressFastForward", align: "free" })), y.enableDbClickSkip(k) && (this.UI.doubleClickSkip = C, this.addChild("doubleClickSkip", { name: "doubleClickSkip", align: "free" })), this.trigger(E.Private.UiH5Ready);
            }, j.prototype.createEl = function() {
              var k = !1, D = (this.tag.tagName !== "VIDEO" ? (this._el = this.tag, this.tag = c.prototype.createEl.call(this, "video"), this._options.playsinline && (this.tag.setAttribute("webkit-playsinline", ""), this.tag.setAttribute("playsinline", ""), this.tag.setAttribute("x-webkit-airplay", ""), this.tag.setAttribute("x5-playsinline", ""))) : (k = !0, this._el = this.tag.parentNode), this._el), W = this.tag, ee = (this._options.enableSystemMenu || (W.addEventListener ? W.addEventListener("contextmenu", function(re) {
                re.preventDefault();
              }, !1) : W.attachEvent("oncontextmenu", function() {
                window.event.returnValue = !1;
              })), W.player = this, s.getElementAttributes(W));
              return a.each(ee, function(re) {
                D.setAttribute(re, ee[re]);
              }), this.setVideoAttrs(), k || (W.parentNode && W.parentNode.insertBefore(D, W), s.insertFirst(W, D)), D;
            }, j.prototype.setVideoAttrs = function() {
              var k = this._options.preload, D = this._options.autoplay;
              if (this.tag.style.width = this._options.videoWidth || "100%", this.tag.style.height = this._options.videoHeight || "100%", k && this.tag.setAttribute("preload", "preload"), D && r.IOS_VERSION !== "15" && this.tag.setAttribute("autoplay", "autoplay"), r.IS_IOS && this.tag.setAttribute("poster", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAMZJREFUeAHt0DEBAAAAwqD1T20LL4hAYcCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMCAAQMGDBgwYMDAc2CcpAABaODCqQAAAABJRU5ErkJggg=="), (r.IS_UC || r.dingTalk() || r.IS_QUARK) && this.tag.setAttribute("renderer", "standard"), this._options.extraInfo) for (var W in this._options.extraInfo) r.IS_OPPO && W === "crossOrigin" || this.tag.setAttribute(W, this._options.extraInfo[W]);
              l.adaptX5Play(this);
            }, j.prototype.checkOnline = function() {
              var k;
              return !(this._options && !this._options.debug && navigator.onLine == 0 && ((k = { mediaId: this._options.vid || "", error_code: p.ErrorCode.NetworkUnavaiable, error_msg: m.get("Error_Offline_Text") }).display_msg = m.get("Error_Offline_Text"), this.trigger(E.Player.Error, k), 1));
            }, j.prototype.id = function() {
              return this.el().id;
            }, j.prototype.renderUI = function() {
            }, j.prototype.switchUrl = function() {
              var k, D;
              this.traceLog(Q, "switchUrl"), this._urls.length != 0 && (this._currentPlayIndex = this._currentPlayIndex + 1, this._urls.length <= this._currentPlayIndex && (this._currentPlayIndex = 0, this._retrySwitchUrlCount++), k = this._urls[this._currentPlayIndex], g.set(p.SelectedStreamLevel, k.definition, 365), this.trigger(E.Private.QualityChange, m.get("Quality_Change_Fail_Switch_Text")), D = this.getCurrentTime(), this._vodRetryCount = 0, this._originalSource = "", this._loadByUrlInner(k.Url, D, !0));
            }, j.prototype.setControls = function() {
              var k = this.options();
              k.useNativeControls ? this.tag.setAttribute("controls", "controls") : typeof k.controls == "object" && (k = this._initControlBar(k.controls), this.addChild(k));
            }, j.prototype.enableClickPause = function() {
              this._clickPauseEnabled = !0;
            }, j.prototype.disableClickPause = function() {
              this._clickPauseEnabled = !1;
            }, j.prototype._initControlBar = function(k) {
              return new ControlBar(this, k);
            }, j.prototype.getMetaData = function() {
            }, j.prototype.getReadyTime = function() {
              return this.readyTime;
            }, j.prototype.readyState = function() {
              return this.tag.readyState;
            }, j.prototype.getError = function() {
              return this.tag.error;
            }, j.prototype.getRecentOccuredEvent = function() {
              return this._eventState;
            }, j.prototype.getSourceUrl = function() {
              return this._options ? this._options.source : "";
            }, j.prototype.getMonitorInfo = function() {
              return this._monitor ? this._monitor.opt : {};
            }, j.prototype.getCurrentQuality = function() {
              var k;
              return 0 < this._urls.length ? { width: (k = this._urls[this._currentPlayIndex]).width, url: k.Url, definition: k.definition } : "";
            }, j.prototype.getCurrentPDT = function() {
              var k;
              if ((r.IS_SAFARI || r.IS_IOS) && this.tag) return k = Date.parse(this.tag.getStartDate()), isNaN(k) ? 0 : k + 1e3 * this.getCurrentTime();
            }, j.prototype.stopPlayTimeMonitor = function() {
              this._playTimeMonitorTimer && (clearInterval(this._playTimeMonitorTimer), this._playTimeMonitorTimer = null);
            }, j.prototype.startPlayTimeMonitor = function() {
              var k = this, D = (this._playingTime = 0, this._stuckTime = 0, this._stuckCount = 0, performance.now()), W = 0, ee = 0, re = !1, ne = 0;
              this.stopPlayTimeMonitor(), this._playTimeMonitorTimer = setInterval(function() {
                var le = k.paused() ? re = !0 : !k.tag, K = 1e3 * k.getCurrentTime(), oe = performance.now(), G = oe - D, ie = (D = oe, (K - W) / k.tag.playbackRate);
                W = K, ie < 0 && (le = !0), (K = k._monitor) != null && K.canplayReported || (le = !0), (le = document.visibilityState === "hidden" ? !0 : le) || (re ? re = !1 : ie < 0.8 * G ? (G < oe - ee && (k._stuckCount++, ne = oe), oe - ne >= 1e3 * k.getOptions().waitingTimeout ? k.stopPlayTimeMonitor() : (ee = oe, k._playingTime += ie, k._stuckTime += G - ie)) : k._playingTime += G);
              }, 1e3);
            }, j.prototype.setSpeed = function(k, D) {
              D === void 0 && (D = !0), this.tag && (this._originalPlaybackRate = k, this.tag.playbackRate = k, D) && this.trigger(E.Private.PlaybackRateChanged, k);
            }, j.prototype.play = function(k) {
              return this.traceLog(Q, "play::" + k), k && this.trigger(E.Private.ManualPlay), this.tag && (this.tag.ended || this._ended ? this.replay() : ((this._options.preload || this.loaded) && this.tag.src || this._initLoad(this._options.source), this.trigger(E.Private.Cover_Hide), this.tag.play())), this._isManualPlay = k || !1, this;
            }, j.prototype.replay = function() {
              return this._monitor && this._monitor.replay(), this.seek(this._getPlayStartTime()), this.tag.play(), this;
            }, j.prototype._getPlayStartTime = function() {
              return Math.max(0, this._getWatchTimeConfig().watchStartTime || 0, this._loadByUrlStartTime || 0);
            }, j.prototype._getWatchTimeConfig = function() {
              var ee = this.getOptions(), k = ee.start, D = ee.end, W = ee.watchStartTime, ee = ee.watchEndTime, W = Number(W), ee = Number(ee);
              return (W || ee) && (y.hasValue(k) || y.hasValue(D)) ? (this._logOnce("Params.watchStartTime and Params.watchEndTime will be ignored when Params.start or Params.end is set", "warn"), { watchStartTime: void 0, watchEndTime: void 0 }) : (ee = ee || void 0, (W = W || void 0) < 0 && (this._logOnce("Params.watchStartTime is less than 0 [" + W + "], setting to undefined", "warn"), W = void 0), ee < 0 && (this._logOnce("Params.watchEndTime is less than 0 [" + ee + "], setting to undefined", "warn"), ee = void 0), ee <= W && (this._logOnce("Params.watchEndTime(" + ee + ") is less than Params.watchStartTime(" + W + "), setting to [undefined, " + ee + "]", "warn"), W = void 0), { watchStartTime: W, watchEndTime: ee });
            }, j.prototype._getSubVideoConfig = function() {
              var k = this.getOptions(), D = k.start, k = k.end, D = Number(D);
              return k = (k = Number(k)) || void 0, (D = D || void 0) < 0 && (this._logOnce("Params.start is less than 0 [" + D + "], setting to undefined", "warn"), D = void 0), k < 0 && (this._logOnce("Params.end is less than 0 [" + k + "], setting to undefined", "warn"), k = void 0), k <= D && (this._logOnce("Params.start(" + D + ") is greater than Params.end(" + k + "), setting to [undefined, " + k + "]", "warn"), D = void 0), { start: D, end: k };
            }, j.prototype.pause = function(k) {
              return this.tag && this.tag.pause(), this._isManualPause = k || !1, this;
            }, j.prototype.stop = function() {
              return this.traceLog(Q, "stop"), this.tag.setAttribute("src", null), this;
            }, j.prototype.paused = function() {
              if (this.tag) return this.tag.paused !== !1;
            }, j.prototype.getDuration = function() {
              var k = 0, W = (this.tag && (k = this.isPreview() && this._vodDuration || this.tag.duration), this._getSubVideoConfig()), D = W.start, W = W.end;
              return k = D || W ? Math.min(this.tag.duration, W || this.tag.duration) - Math.max(0, D || 0) : k;
            }, j.prototype.getDisplayDuration = function() {
              var k = 0, W = (this.tag && (k = this._vodDuration || this.getDuration()), this._getSubVideoConfig()), D = W.start, W = W.end;
              return k = D || W ? Math.min(this.tag.duration, W || this.tag.duration) - Math.max(0, D || 0) : k;
            }, j.prototype.getCurrentTime = function() {
              return this.tag ? this.tag.currentTime - this._posOffset : 0;
            }, j.prototype.seek = function(k) {
              var D;
              if (!Number.isNaN(k) && (k = Number(k), k += this._posOffset, this._canSeek(k))) return this._ended = !1, D = this.tag.duration, this._doSeek(this, k = D <= k ? D : k), this;
            }, j.prototype._doSeek = I(function(W) {
              var D = W[0], W = W[1];
              try {
                var ee = D._originalPlaybackRate || D.tag.playbackRate;
                ["16"].indexOf(r.IOS_VERSION) !== -1 && !D.oncePlayed || (D.tag.currentTime = W), D._seeking = !0, D.traceLog(Q, "doSeek::" + W), r.IS_IE11 && setTimeout(function() {
                  D.tag && (D.tag.playbackRate = ee);
                });
              } catch (re) {
                console.log(re);
              }
            }, 100), j.prototype.traceLog = function(k, D) {
              this.trigger(E.Private.TraceLog, "[" + k + "]" + D);
            }, j.prototype._loadByUrlInner = function(k, D, W) {
              this.loadByUrl(k, D, W, !0);
            }, j.prototype.loadByUrl = function(k, D, W, ee) {
              var re = this, ne = (this.traceLog(Q, "loadByUrl::" + k + "#" + D + "#" + W + "#" + ee), this._monitor && this._monitor._onPlayerUnderload(), this._monitor && !ee && (this._monitor.reportPlayAbort("loadByUrl"), this._monitor.resetVV()), /\.m3u8|\.flv|\.mp4|artc\:\/\/|rtmp\:\/\//gi), le = ((this._options.source || "").match(ne) || [])[0] !== ((k || "").match(ne) || [])[0];
              if (this._options.liveShiftSource && (le = !1), this._options.enableH266 && (le = !1), this._h265InfoReported = !1, this._probeInfo || (this._probeInfo = {}), this._probeInfo.codecTag = void 0, !le && (y.isMp4(k) || y.isFlv(k) || y.isHls(k))) return this._options.forceH265 || this._options.forceH266 || !this._options.enableH265 && !this._options.enableH266 || r.IS_ANDROID && r.dingTalk() && !y.isFlv(k) ? void K.call(this) : void M(k, this._options, function(G) {
                var G = y.getVideoTrack(G.tracks), ie = (G || {}).codecTag || ((ie = (G || {}).codec) == null ? void 0 : ie.split(".")[0]);
                re._probeInfo.codecTag = ie, G && y.isH265Codec(ie) ? y.isFlv(k) || y.isHls(k) ? (re._splayer || (le = !0), K.call(re)) : y.shouldUseBasePlayer({ codecTag: ie, url: k }, function(ve) {
                  ve ? (re._splayer && (le = !0), re._probeInfo.codecTag && P.reportH265PlayInfo.call(re, { renderType: "native", codecTag: re._probeInfo.codecTag })) : re._splayer || (le = !0), K.call(re);
                }) : (G && y.isH266Codec(ie) ? re._splayer || (le = !0) : re._splayer && (le = !0), K.call(re));
              }, function(oe) {
                K.call(re);
              });
              function K() {
                var oe, G = this;
                le && window.Aliplayer ? (console.log("[RELOAD INSTANCE]"), this.traceLog(Q, "reloadInstance::" + k), this._options.source = k, window.Aliplayer.reloadInstance(this._options, function() {
                }, this)) : (ee || (this._urls = []), this._monitor && !ee && (this._monitor.reset(), this._monitor.startHeartBeat()), this._isError = !1, this._clearTimeout(), this.trigger(E.Private.Error_Hide), this._options.source = k, this._posOffset = this._getSubVideoConfig().start || 0, this._monitor && this._monitor.updateVideoInfo({ video_id: 0, album_id: 0, source: k, from: this._options.from }), ee || (this.trigger(E.Private.ChangeURL), this._vodRetryCount = 0), D && this._canSeek(D) ? this._loadByUrlStartTime = D - this._posOffset : this._loadByUrlStartTime = 0, this._options._autoplay = W, this.initPlay(W), (oe = this._options.autoplay || W) && this.trigger(E.Private.Cover_Hide), oe ? this.trigger(E.Player.Play) : this.trigger(E.Player.Pause), this._options.isLive || !D && D != 0 || isNaN(D) || t.one(this.tag, E.Video.CanPlay, function(ie) {
                  oe && (r.IS_IOS || r.IS_MAC_SAFARI) && G._splayer && G.play();
                }));
              }
              K.call(this);
            }, j.prototype.setLogo = function(k) {
              this._logoManager && this._logoManager.dispose(), this._logoManager = new V({ container: this.el(), video: this.tag, logo: k });
            }, j.prototype.dispose = function() {
              this.__disposed || (this.__disposed = !0, this.trigger(E.Private.Dispose), this.tag.pause(), f.offAll(this), O.dispose.call(this), this._ratioAdapter && (this._ratioAdapter.dispose(), this._ratioAdapter = null), this._logoManager && (this._logoManager.dispose(), this._logoManager = null), this._antiRecord && (this._antiRecord.dispose(), this._antiRecord = null), this._monitor && (this._monitor.reportPlayAbort("dispose"), this._monitor.removeEvent(), this._monitor = null), this._autoPlayDelay && this._autoPlayDelay.dispose(), this._checkTimeoutHandle && (clearTimeout(this._checkTimeoutHandle), this._checkTimeoutHandle = null), this._waitingTimeoutHandle && (clearTimeout(this._waitingTimeoutHandle), this._waitingTimeoutHandle = null), this._playingSlientPause && (clearTimeout(this._playingSlientPause), this._playingSlientPause = null), this._waitingLoadedHandle && (clearTimeout(this._waitingLoadedHandle), this._waitingLoadedHandle = null), this._ucSourceHandle && (clearTimeout(this._ucSourceHandle), this._ucSourceHandle = null), this._readyStateTimer && (clearInterval(this._readyStateTimer), this._readyStateTimer = null), this._vodRetryCountHandle && (clearTimeout(this._vodRetryCountHandle), this._vodRetryCountHandle = null), this._waitingDelayLoadingShowHandle && (clearTimeout(this._waitingDelayLoadingShowHandle), this._waitingDelayLoadingShowHandle = null), this._liveRetryTimer && (clearTimeout(this._liveRetryTimer), this._liveRetryTimer = null), this._flvDumpTimer && (clearTimeout(this._flvDumpTimer), this._flvDumpTimer = null), this.stopPlayTimeMonitor(), this._disposeService(), this._clearLiveErrorHandle(), this._el.innerHTML = "", this.destroy(), this._releaseMediaElement(), this._options.recreatePlayer = null, this._options = null, this.isMutiLevel = !1, this._seis = {}, this._initPTS = 0, this._clickPauseEnabled = !1, this._currentTimeForDisableSeek = 0, this._posOffset = 0, this._onceLogged = !1);
            }, j.prototype._releaseMediaElement = function() {
              this.tag.removeAttribute("src"), this.tag.load(), this.tag = null;
            }, j.prototype.mute = function(k) {
              return this._muteInner(), this._originalVolumn = this.tag.volume, k || (k = m.get("Volume_Mute"), this._player.trigger(E.Private.Info_Show, { text: k, duration: 1e3, align: "lb" })), this._setInnerVolume(0), this;
            }, j.prototype._muteInner = function() {
              this.tag.muted = !0, this.trigger(E.Private.VolumnChanged, -1);
            }, j.prototype.unMute = function(k) {
              return this._unMuteInner(), k || (k = m.get("Volume_UnMute"), this._player.trigger(E.Private.Info_Show, { text: k, duration: 1e3, align: "lb" })), this._setInnerVolume(this._originalVolumn || 0.5), this;
            }, j.prototype._unMuteInner = function() {
              this.tag.muted = !1, this.getOptions().mute && (this.getOptions().mute = !1), this.trigger(E.Private.VolumnChanged, -2);
            }, j.prototype.muted = function() {
              return this.tag && this.tag.muted;
            }, j.prototype.getVolume = function() {
              return this.tag && this.tag.volume;
            }, j.prototype.getOptions = function() {
              return this._options;
            }, j.prototype.setVolume = function(k, D) {
              (k = Math.min(1, Math.max(0, k))) != 0 ? this._unMuteInner() : k == 0 && this._muteInner(), this._setInnerVolume(k), k = m.get("Curent_Volume") + "<span>" + (100 * k).toFixed() + "%</span>", this._player.trigger(E.Private.Info_Show, { text: k, duration: 1e3, align: "lb" });
            }, j.prototype._setInnerVolume = function(k) {
              this.tag.volume = k, this.trigger(E.Private.VolumnChanged, k);
            }, j.prototype.hideProgress = function() {
              this.trigger(E.Private.HideProgress);
            }, j.prototype.cancelHideProgress = function() {
              this.trigger(E.Private.CancelHideProgress);
            }, j.prototype.setPlayerSize = function(k, D) {
              this._el && (this._el.style.width = k, this._el.style.height = D);
            }, j.prototype.getBuffered = function() {
              return this.tag.buffered;
            }, j.prototype.setRotate = function(k) {
              this.tag && (this._rotate = k, this._setTransform(), this.log("ROTATE", { rotation: k }));
            }, j.prototype.getRotate = function(k) {
              return this._rotate === void 0 ? 0 : this._rotate;
            }, j.prototype.setImage = function(k) {
              this.tag && (this._image = k, this._setTransform(), this.log("IMAGE", { mirror: k == "horizon" ? 2 : 1, text: k }));
            }, j.prototype.getImage = function() {
              return this._image;
            }, j.prototype.cancelImage = function() {
              this.tag && (this._image = "", this._setTransform(), this.log("IMAGE", { mirror: 0 }));
            }, j.prototype.setCover = function(k) {
              var D = document.querySelector("#" + this.id() + " .prism-cover");
              D && k && (D.style.backgroundImage = "url(" + k + ")", this._options.cover = k, this._options.autoplay || this.trigger(E.Private.Cover_Show));
            }, j.prototype.setTextTracks = function(k) {
              this._options.textTracks = k, k = y.unqiueTextTracks(k || []), this.trigger(E.Private.VttClearTracks), k && k.length && this.trigger(E.Private.TextTrackFounded, { from: "user", textTracks: k }), this.trigger(E.Private.CCReset);
            }, j.prototype._setTransform = function() {
              this._transformProp || (this._transformProp = s.getTransformName(this.tag));
              var k = " translate(-50%, -50%)";
              this._rotate && (k += " rotate(" + this._rotate + "deg)"), this._image && (this._image == "vertical" ? k += " scaleY(-1)" : this._image == "horizon" && (k += " scaleX(-1)")), this.tag.style[this._transformProp] = k;
            }, j.prototype._startPlay = function() {
              this.tag.paused && this.tag.play();
            }, j.prototype._initPlayBehavior = function(k, D) {
              var W = this;
              return !this._checkSupportVideoType() && (y.validateSource(D) ? (k === void 0 && (k = !1), this._created || (this._created = !0, this.trigger(E.Private.Created)), this.loaded || this.trigger(E.Player.Init), this._options.mute && this.mute(!0), this.one(E.Video.CanPlay, function() {
                var ee = W._getPlayStartTime();
                W.getCurrentTime() < ee && W.seek(ee), W._loadByUrlStartTime = 0, W.tag.playbackRate !== 1 && W.setSpeed(W.tag.playbackRate);
              }), this._options.autoplay || this._options._autoplay || this._options.preload || k ? (this._options._preload = !0, this._initLoad(D), !this._options.autoplay && !this._options._autoplay || this._isError || this._dash || this._startPlay()) : this.trigger(E.Private.Play_Btn_Show), !0) : ((k = { mediaId: this._options.vid || "", error_code: p.ErrorCode.InvalidSourceURL, error_msg: "InvalidSourceURL" }).display_msg = m.get("Error_Invalidate_Source"), this.trigger(E.Player.Error, k), !1));
            }, j.prototype._isPreload = function() {
              return this._options.autoplay || this._options.preload || this._options._preload;
            }, j.prototype._initLoad = function(k) {
              k && (this._isPreload() && !r.IS_MOBILE ? this.trigger(E.Private.H5_Loading_Show) : (this.trigger(E.Private.H5_Loading_Hide), this.trigger(E.Private.Play_Btn_Show)), this.tag.setAttribute("src", k), this.oncePlayed = !1, this.loaded = !0);
            }, j.prototype._clearLiveErrorHandle = function() {
              this._liveErrorHandle && (clearTimeout(this._liveErrorHandle), this._liveErrorHandle = null);
            }, j.prototype._reloadAndPlayForM3u8 = function() {
              this._liveRetryCount == 0 && this.trigger(E.Player.OnM3u8Retry);
              var k = this._options, D = k.liveRetryInterval + k.liveRetryStep * this._liveRetryCount, W = this;
              this._liveRetryTimer && (clearTimeout(this._liveRetryTimer), this._liveRetryTimer = null), this.traceLog(Q, "reloadAndPlayForM3u8::#" + W._options.source + "#" + 1e3 * D), this._liveRetryTimer = setTimeout(function() {
                W._liveRetryCount++, W._loadByUrlInner(W._options.source, void 0, k.autoplay);
              }, 1e3 * D);
            }, j.prototype._checkSupportVideoType = function() {
              var k, D = this, W = this._options.source, ee = "";
              if (y.isRTMP(W) && !this._options.useFlashPrism) ee = m.get("Error_Not_Support_RTMP");
              else if (y.isDash(W) && !y.isSupportMSE()) ee = m.get("Error_Not_Support_Mse_Dash");
              else if (!this.tag.canPlayType || !this._options.source || !r.IS_MOBILE) return "";
              return 0 < W.indexOf("m3u8") ? this.tag.canPlayType("application/x-mpegURL") != "" || y.isSupportHls() || (ee = m.get("Error_Not_Support_M3U8_Text")) : 0 < W.indexOf("mp4") ? this.tag.canPlayType("video/mp4") == "" && (ee = m.get("Error_Not_Support_MP4_Text")) : (y.isRTMP(W) || y.isFlv(W)) && r.IS_MOBILE && (this._options.useFlvPlugOnMobile ? y.isSupportFlv() || (ee = m.get("Error_Not_Support_Mse_Flv")) : ee = m.get("Error_Not_Support_Format_On_Mobile")), ee && (W = y.getFormat(W), k = { mediaId: this._options.vid || "", error_code: p.ErrorCode.FormatNotSupport, error_msg: ee + (W ? "(format:" + W + ")" : "") }, this.logError(k), k.display_msg = ee, setTimeout(function() {
                D.trigger(E.Player.Error, k);
              })), ee;
            }, j.prototype._handleLongPress = function(k, D) {
              var W, ee, re = this;
              function ne() {
                ee ? (clearTimeout(ee), ee = null) : t.trigger(D, "longPressEnd");
              }
              k.longPressFastForward && (D = D || this.tag, t.on(D, "longPress", function() {
                re.trigger(E.Private.FastForwardShow), W = re.tag.playbackRate, re.tag.playbackRate = 2;
              }), t.on(D, "longPressEnd", function() {
                re.trigger(E.Private.FastForwardHide), re.tag.playbackRate = W;
              }), ee = null, t.on(D, "touchstart", function() {
                ee && clearTimeout(ee), ee = setTimeout(function() {
                  ee = null, t.trigger(D, "longPress");
                }, 500);
              }), t.on(D, "touchend", ne), t.on(D, "touchcancel", ne));
            }, j.prototype._handleClickPause_dbClickFullscreen = function(k, D) {
              var W, ee, re, ne = this, le = null;
              !k.isLive && k.clickPause && (this._clickPauseEnabled = !0, W = r.IS_IOS ? "touchstart" : "click", D = D || this.tag, t.on(D, W, function() {
                ne._clickPauseEnabled && (k.dbClickFullscreen ? (le && clearTimeout(le), le = setTimeout(function() {
                  ne.paused() ? ne.play(!0) : ne.pause(!0), le = null;
                }, k.clickPauseDelay)) : ne.paused() ? ne.play(!0) : ne.pause(!0));
              })), k.dbClickFullscreen && (ee = function() {
                le && (clearTimeout(le), le = null);
                var K = this.fullscreenService;
                K.getIsFullScreen() ? K.cancelFullScreen() : K.requestFullScreen(), this.trigger(E.Private.MarkerTextHide), t.trigger(this.tag, "touchend");
              }, r.IS_IOS ? (re = null, t.on(this.tag, "touchstart", function() {
                re = re ? (ee.call(ne), clearTimeout(re), null) : setTimeout(function() {
                  re = null;
                }, k.dbClickFullscreenDelay);
              })) : t.on(this.tag, "dblclick", function() {
                ee.call(ne);
              }));
            }, j.prototype.getComponent = function(k) {
              return this._lifeCycleManager.getComponent(k);
            }, j.prototype.logError = function(k, D) {
              (this._options.autoplay || this._options._autoplay) && this._monitor && this._monitor.reportStartPlay(), (k = k || {}).vt = this.getCurrentTime(), this.log(D ? "ERRORRETRY" : "ERROR", k);
            }, j.prototype.log = function(k, D) {
              var W = 0, ee = 0;
              if (this._monitor) return this._options && (W = this._options.vid || "0", ee = this._options.from || "0"), this._monitor.updateVideoInfo({ video_id: W, album_id: 0, source: this._options.source, from: ee }), this._monitor._log(k, D);
            }, j.prototype.setSanpshotProperties = function(k, D, W) {
              if (this._snapshotMatric || (this._snapshotMatric = {}), this._snapshotMatric.width = k, this._snapshotMatric.height = D, 1 < W) throw new Error("rate doesn't allow more than 1");
              this._snapshotMatric.rate = W;
            }, j.prototype.setSnapshotProperties = function(k, D, W) {
              this.setSanpshotProperties(k, D, W);
            }, j.prototype.takeSnapshot = function() {
              var k = document.createElement("canvas"), le = this.tag, D = le.videoWidth, W = le.videoHeight, ee = this._getSanpshotMatric(), re = (k.width = ee.width || D, k.height = ee.height || W, this.getCurrentTime()), ne = k.getContext("2d"), K = (ne.save(), this.getImage()), K = (K == "vertical" ? (ne.translate(0, k.height), ne.scale(1, -1)) : K == "horizon" && (ne.translate(k.width, 0), ne.scale(-1, 1)), le), le = (this._splayer && (K = this._splayer.renderType === 2 ? this._el.querySelector("canvas") : this._el.querySelector("video")), ne.drawImage(K, 0, 0, D, W), ne.restore(), y.drawSnapshotText(ne, this.getOptions()), ""), K = "";
              try {
                le = k.toDataURL("image/jpeg", ee.rate || 1);
              } catch (oe) {
                (K = oe) && K.message && -1 < K.message.indexOf("Tainted canvases") && (K = new Error('截图功能需要设置播放器参数 extraInfo: { crossOrigin:"anonymous" }'));
              }
              return D = "", W = "", le && (ne = (D = le).substr(D.indexOf(",") + 1), W = h.toBinary(ne)), { time: re, base64: D, binary: W, error: K };
            }, j.prototype.getStatus = function() {
              return this._status || "init";
            }, j.prototype.enterProgressMarker = function() {
              this._enteredProgressMarker = !0;
            }, j.prototype.isInProgressMarker = function() {
              return this._enteredProgressMarker;
            }, j.prototype.exitProgressMarker = function() {
              this._enteredProgressMarker = !1;
            }, j.prototype.setProgressMarkers = function(k) {
              this.trigger(E.Private.ProgressMarkerChanged, k = k || []);
            }, j.prototype.getProgressMarkers = function() {
              return this._progressMarkerService ? this._progressMarkerService.progressMarkers : [];
            }, j.prototype.setPreviewTime = function(k) {
              this._options.playConfig || (this._options.playConfig = {}), this._options.playConfig.PreviewTime = k;
            }, j.prototype.getPreviewTime = function() {
              var k = 0;
              return k = this._options.playConfig ? this._options.playConfig.PreviewTime : k;
            }, j.prototype.exceedPreviewTime = function(k) {
              return this.isPreview() && k >= this._options.playConfig.PreviewTime;
            }, j.prototype.isPreview = function() {
              var k = this._options.playConfig.PreviewTime, D = this._vodDuration || this.tag.duration;
              return 0 < k && k < D;
            }, j.prototype.getStats = function() {
              return new u(function(k) {
                k();
              });
            }, j.prototype.setTraceId = function(k) {
              this._monitor && this._monitor.updateTraceId(k);
            }, j.prototype._canSeek = function(k) {
              var W = this._getSubVideoConfig(), D = W.start, W = W.end;
              return D || W ? !(k < D || W < k) : !(!(D = this._getWatchTimeConfig()).watchStartTime || D.watchEndTime) || !(k < D.watchStartTime || k > D.watchEndTime);
            }, j.prototype.setWatchTime = function(k, D) {
              this._options.watchStartTime = k, this._options.watchEndTime = D, this.trigger(E.Private.UpdateWatchTime), k = this.getCurrentTime(), D = this._getWatchTimeConfig(), k < D.watchStartTime ? this.seek(D.watchStartTime) : k > D.watchEndTime && this.seek(D.watchEndTime);
            }, j.prototype.setNextWatchTime = function(k, D) {
              this._options.watchStartTime = k, this._options.watchEndTime = D;
            }, j.prototype.setStartEnd = function(k, D) {
              this._options.start = k, this._options.end = D, k = this._getSubVideoConfig(), this._posOffset = k.start || 0, this.trigger(E.Player.DurationChange), D = this.getCurrentTime() + this._posOffset, D < k.start ? this.seek(0) : D > k.end && this.seek(k.end - this._posOffset);
            }, j.prototype.setNextStartEnd = function(k, D) {
              this._options.start = k, this._options.end = D;
            }, j.prototype.getPlayTime = function() {
              return Math.round(this._playingTime / 1e3);
            }, j.prototype._getSanpshotMatric = function() {
              return this._snapshotMatric || (this._snapshotMatric = {}), this._snapshotMatric;
            }, j.prototype._autoplayFailedHandler = function() {
              var k, D = this;
              (k = this.getOptions().autoplayPolicy) != null && k.fallbackToMute && !this.muted() ? (this.mute(!0), (k = this.tag.play()) ? k.then(function() {
                D.trigger(E.Private.MutedAutoplay);
              }).catch(function(W) {
                D.tag.paused ? (console.warn("Muted autoplay failed", W), D.unMute(!0)) : D.one("canplay", function() {
                  D.trigger(E.Private.MutedAutoplay);
                });
              }) : this.paused() ? this.unMute(!0) : this.trigger(E.Private.MutedAutoplay)) : (this.oncePlayed = !1, this.trigger(E.Private.Play_Btn_Show), this.trigger(E.Private.H5_Loading_Hide), this.trigger(E.Player.AutoPlayPrevented), this.trigger(E.Player.AutoPlay, !1), this._options.cover && this.trigger(E.Private.Cover_Show));
            }, j.prototype._overrideNativePlay = function() {
              var k = this.tag.play, D = this;
              this.tag.play = function() {
                if (D._monitor && D._monitor.reportStartPlay(), !D._options.source) return W = { mediaId: D._options.vid || "", error_code: p.ErrorCode.InvalidSourceURL, error_msg: "InvalidSourceURL" }, D._options.vid || D._options.mediaAuth ? void 0 : (W.display_msg = m.get("Error_Empty_Source"), void D.trigger(E.Player.Error, W));
                D.readyTime = (/* @__PURE__ */ new Date()).getTime();
                var W = k.apply(D.tag), ee = (D.oncePlayed = !0, W !== void 0 && W.then(function() {
                  D.trigger(E.Player.AutoPlay, !0);
                }).catch(function(re) {
                  !D.tag || !D.tag.paused || D._isError || D._options._autoplay || D._switchedLevel || D._autoplayFailedHandler();
                }), D._originalPlaybackRate || D.tag.playbackRate);
                return setTimeout(function() {
                  D.tag && (D.tag.playbackRate = ee);
                }), W;
              };
            }, j.prototype._extraMultiSources = function() {
              var k = this._options.source;
              if (k && -1 < k.indexOf("{") && -1 < k.indexOf("}")) {
                var D = "";
                try {
                  D = JSON.parse(k);
                } catch (ne) {
                  console.error(ne), console.error("地址json串格式不对");
                }
                var W, ee = [];
                for (W in D) {
                  var re = p.QualityLevels[W];
                  ee.push({ definition: W, Url: D[W], desc: re || W });
                }
                this._setupSourceList(ee);
              }
              return ee;
            }, j.prototype._setupSourceList = function(k) {
              var D;
              (k = k === void 0 ? [] : k).length && (this._currentPlayIndex = y.findSelectedStreamLevel(k, this._options.defaultDefinition), D = k[this._currentPlayIndex], this._urls = k, this._options.source = D.Url, this.trigger(E.Private.SourceLoaded, D));
            }, j.prototype._createService = function() {
              if (H) for (var k = H.length, D = 0; D < k; D++) {
                var W = H[D], ee = W.condition;
                ee === void 0 ? ee = !0 : typeof ee == "function" && (ee = ee.call(this)), ee && (this[W.name] = new W.service(this));
              }
            }, j.prototype._disposeService = function() {
              if (H) for (var k = H.length, D = 0; D < k; D++) {
                var W = this[H[D].name];
                W !== void 0 && W.dispose && W.dispose();
              }
            }, j.prototype._executeReadyCallback = function() {
              if (!this._options._readyCallbackCalled) {
                this._options._readyCallbackCalled = !0;
                try {
                  this._options.autoplay || this._options.preload || (this.trigger(E.Private.H5_Loading_Hide), this.trigger(E.Private.Play_Btn_Show)), this._options.readyCallback(this);
                } catch (k) {
                  console.log(k);
                }
              }
            }, j.prototype._clearTimeout = function() {
              this._checkTimeoutHandle && (clearTimeout(this._checkTimeoutHandle), this._checkTimeoutHandle = null), this._waitingTimeoutHandle && (clearTimeout(this._waitingTimeoutHandle), this._waitingTimeoutHandle = null), this._decodeErrorNudgeTimer && (clearTimeout(this._decodeErrorNudgeTimer), this._decodeErrorNudgeTimer = null), this._clearLiveErrorHandle();
            }, j.prototype._reloadForVod = function() {
              var k, D, W;
              return this._originalSource || (this._originalSource = this._options.source), !!(this._vodRetryCount < this._options.vodRetry && navigator.onLine) && (k = this.getCurrentTime(), (D = this._originalSource).indexOf("auth_key=") < 0 && (D = D && 0 < D.indexOf("?") ? D + "&_t=" + (/* @__PURE__ */ new Date()).valueOf() : D + "?_t=" + (/* @__PURE__ */ new Date()).valueOf()), this._vodRetryCountHandle && clearTimeout(this._vodRetryCountHandle), (W = this).traceLog(Q, "reloadForVod::#" + D + "#" + 100 * this._vodRetryCount), this._vodRetryCountHandle = setTimeout(function() {
                W._loadByUrlInner(D, k, W.getOptions().autoplay);
              }, 100 * this._vodRetryCount), this._vodRetryCount = this._vodRetryCount + 1, !0);
            }, j.prototype._getUserTextTracks = function() {
              var k = this._options.textTracks || [];
              (k = y.unqiueTextTracks(k)).length && this.trigger(E.Private.TextTrackFounded, { from: "user", textTracks: k });
            }, j.prototype._logOnce = function(k, D) {
              this._onceLogged || (console[D || "log"](k), this._onceLogged = !0);
            }, o.exports = j;
          }).call(this);
        }).call(this, "prod");
      }, { "../../commonui/autostreamselector": 12, "../../feature/AntiRecord": 17, "../../feature/autoplaydelay": 18, "../../feature/keyboardControl": 19, "../../feature/license": 20, "../../feature/logoManager": 21, "../../feature/ratioAdapter": 22, "../../lang/index": 24, "../../lib/codec-probe": 27, "../../lib/constants": 29, "../../lib/cookie": 30, "../../lib/dom": 33, "../../lib/event": 34, "../../lib/object": 43, "../../lib/playerutil": 46, "../../lib/ua": 49, "../../lib/util": 51, "../../lib/vttnext/index": 55, "../../monitor/monitor": 63, "../../ui/component": 132, "../../ui/component/cover": 136, "../../ui/component/double-click-skip": 137, "../../ui/component/press-fast-forward": 144, "../../ui/component/progressmarker": 146, "../../ui/component/text-track-display": 157, "../../ui/component/util": 162, "../../ui/exports": 165, "../service/export": 121, "../splayer/splayerinjector": 128, "./event/eventmanager": 67, "./event/eventtype": 68, "./plugin/lifecyclemanager": 94, "./x5play": 96, "es6-promise": 9 }], 92: [function(d, o, x) {
        d = d("../../../lib/oo").extend({}), o.exports = d;
      }, { "../../../lib/oo": 44 }], 93: [function(d, o, x) {
        o.exports = { createEl: "createEl", created: "created", ready: "ready", loading: "loading", play: "play", pause: "pause", playing: "playing", waiting: "waiting", timeUpdate: "timeupdate", error: "error", ended: "ended", dispose: "dispose", markerDotOver: "markerDotOver", markerDotOut: "markerDotOut" };
      }, {}], 94: [function(d, o, x) {
        function _(n) {
          (this._player = n)._status = "init", this.components = [];
          var r = n.getOptions().components;
          if (r && u.isArray(r) && 0 < r.length) for (var p = 0; p < r.length; p++) {
            var l = r[p];
            if (!l) return void console.log("The " + p + " custome component is " + l);
            var y = l.type === void 0 ? l : l.type, h = l.args === void 0 ? [] : l.args, l = l.name === void 0 ? "" : l.name;
            if (!y) return void console.log(l + " compenent is " + y);
            h = h && 0 < h.length ? [].concat.call([y], h) : [], y = new (Function.prototype.bind.apply(y, h))(), h = y[a.createEl], h && typeof h == "function" && h.call(y, n.el(), n), this.components.push({ name: l, obj: y });
          }
          var g = this;
          n.on(c.Private.LifeCycleChanged, function(m) {
            var v = m.paramData, f = v.type;
            f === c.Video.CanPlayThrough && g._player.trigger(c.Player.TimeUpdate, v.data.target.currentTime), f === c.Video.Ended && g._player.trigger(c.Player.TimeUpdate, g._player.getDuration()), g.components.length != 0 && t.call(g, n, m);
          });
        }
        var u = d("../../../lib/object"), c = d("../event/eventtype"), a = d("./lifecycle"), s = d("./status"), t = (_.prototype.getComponent = function(n) {
          var r = null, p = this.components.length;
          if (n) {
            for (var y = 0; y < p; y++) if (this.components[y].name == n) {
              r = this.components[y].obj;
              break;
            }
          }
          return r;
        }, function(n, r) {
          if (r) {
            for (var r = r.paramData, p = r.type, y = r.data, h = ((r = p) != c.Video.LoadStart && r != c.Video.LoadedData && r != c.Video.LoadedMetadata || (p = a.loading), e(n, p), this.components.length), l = 0; l < h; l++) {
              var g = this.components[l].obj, m = g[p];
              m && typeof m == "function" && m.call(g, n, y);
            }
            p == c.Private.Dispose && (this.components = []);
          }
        }), e = function(n, r) {
          s[r] === void 0 || r == s.pause && (n._status == s.error || n._status == s.ended) || r == s.ready && n._status == s.playing || (n._status = r);
        };
        o.exports = _;
      }, { "../../../lib/object": 43, "../event/eventtype": 68, "./lifecycle": 93, "./status": 95 }], 95: [function(d, o, x) {
        o.exports = { init: "init", ready: "ready", loading: "loading", play: "play", pause: "pause", playing: "playing", waiting: "waiting", error: "error", ended: "ended" };
      }, {}], 96: [function(d, o, x) {
        function _(a, s) {
          var t = a.el().style.height, e = a.el().style.width, n = (a.originalLayout = { container: { height: t, width: e }, video: { width: a.tag.style.width, height: a.tag.style.height } }, document.body.clientHeight * (window.devicePixelRatio || 1) + "px"), r = document.body.clientWidth + "px";
          width = s ? (height = n, r) : (height = t.indexOf("%") ? t : t + "px", e.indexOf("%") ? e : e + "px"), a.tag.style.width = r, a.tag.style.height = n, a.el().style.height = s ? n : height;
        }
        var u = d("../../lib/ua"), c = d("../../lib/dom");
        o.exports.isAndroidX5 = function() {
          return u.os.android && u.is_X5 || u.dingTalk();
        }, o.exports.adaptX5Play = function(a) {
          u.os.android && u.is_X5 && (a._options.x5_type == "h5" && (a.tag.setAttribute("x5-video-player-type", a._options.x5_type), window.onresize = function() {
            var s, t;
            _(a, a._options.x5_fullscreen || a._options.x5_video_position == "center"), (s = a)._x5VideoOrientation == "landscape" && (s._originalTagWidth = s.tag.style.width, s._originalTagHeight = s.tag.style.height, (t = document.querySelector("#" + s.id() + " .prism-controlbar")) && parseFloat(t.offsetHeight), s.tag.style.height = "100%", s.tag.style.width = window.screen.width + "px");
          }, a.tag.addEventListener("x5videoenterfullscreen", function() {
            _(a, a._options.x5_fullscreen || a._options.x5_video_position == "center"), a.trigger("x5requestFullScreen");
          }), a.tag.addEventListener("x5videoexitfullscreen", function() {
            var s, t;
            (s = a).originalLayout && (t = s.originalLayout, s.el().style.height = t.container.height, s.el().style.width = t.container.width, s.tag.style.width = t.video.width, s.tag.style.height = t.video.height), a.trigger("x5cancelFullScreen"), a.fullscreenService.getIsFullScreen() && a.fullscreenService.cancelFullScreen();
          }), a.on("requestFullScreen", function() {
            a._options.x5_video_position == "top" && c.removeClass(a.tag, "x5-top-left"), u.os.android && u.is_X5 && a._options.x5LandscapeAsFullScreen && (a.tag.setAttribute("x5-video-orientation", "landscape"), a._x5VideoOrientation = "landscape");
          }), a.on("cancelFullScreen", function() {
            a._options.x5_video_position == "top" && c.addClass(a.tag, "x5-top-left"), u.os.android && u.is_X5 && a._options.x5LandscapeAsFullScreen && (a.tag.setAttribute("x5-video-orientation", "portrait"), _(a, a._options.x5_fullscreen || a._options.x5_video_position == "center"), a._x5VideoOrientation = "portrait");
          })), a._options.x5_fullscreen !== void 0 && a._options.x5_fullscreen && (a.tag.setAttribute("x5-video-player-fullscreen", a._options.x5_fullscreen), c.addClass(a.tag, "x5-full-screen")), a._options.x5_video_position == "top" && c.addClass(a.tag, "x5-top-left"), a._options.x5_orientation !== void 0) && a.tag.setAttribute("x5-video-orientation", a._options.x5_orientation);
        };
      }, { "../../lib/dom": 33, "../../lib/ua": 49 }], 97: [function(d, o, x) {
        var _ = d("../../lib/object"), u = d("../../lib/io"), c = d("../../config"), a = d("../../lang/index"), s = d("../../lib/constants"), t = d("../../lib/playerutil"), e = d("../base/event/eventtype"), n = "dashinjector.js";
        o.exports.inject = function(r, p, y, h) {
          var l = h.source;
          if (!(function(m) {
            return !this._dash && t.isDash(m) && t.isSupportMSE();
          }).call(r, l)) return console.warn("Should not inject dash player");
          function g() {
            this._disposed || (this._disposed = !0, this._destroyDash(), this._superPt && (this._superPt.dispose.call(this), p.prototype.play = this._superPt.play, p.prototype.pause = this._superPt.pause, p.prototype.initPlay = this._superPt.initPlay, p.prototype.seek = this._superPt.seek, p.prototype.canSeekable = this._superPt.canSeekable));
          }
          r._Type = p, r._superType = y, r._superPt = y.prototype, r._disposed = !1, r._dash = null, p.prototype.initPlay = function() {
            var m = this, v = (this.trigger(e.Private.H5_Loading_Show), performance.now());
            (function(f, b) {
              var w = "aliplayer-dash-min.js", S = this.getOptions(), w = S.dashjsUrl || "https://" + c.domain + c.path + c.h5Version + "/dash/" + w;
              S.assetPrefix && (S.assetPrefix, ((T) => {
                throw new TypeError('"' + T + '" is read-only');
              })("url")), u.loadJS(w, f, b);
            }).call(this, function() {
              m.traceLog(n, "got js#" + parseInt(performance.now() - v) + "ms"), (function() {
                var f, b, S, w = !this._dash;
                this._disposed || (this._destroyDash(), (f = this.getOptions()).vid || (f.isVBR = !0), b = { streaming: { retryAttempts: { MPD: f.isLive ? f.liveRetry : f.vodRetry } } }, b = _.deepMerge(b, f.dashOption), S = dashjs.MediaPlayer().create(), this._dash = S, (function() {
                  var T = this, C = this._dash, R = this.getOptions(), E = !1;
                  C.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, function(A) {
                    var H, N;
                    E || (E = !0, N = (N = C.getBitrateInfoListFor("video")) == null ? void 0 : N.map(function(O) {
                      return { url: "" + s.DASH_QUALITY_PROTOCOL + O.qualityIndex, width: O.width, height: O.height, bitrate: O.bitrate, attrs: { BANDWIDTH: O.bitrate, RESOLUTION: O.width + "x" + O.height } };
                    }), T.trigger(e.Player.LevelsLoaded, { levels: N }), H = C.getCurrentTrackFor("audio"), N = C.getTracksFor("audio").map(function(O) {
                      return { id: O.index, language: O.lang, enabled: (H == null ? void 0 : H.index) === O.index };
                    }), T.trigger(e.Player.AudioTrackUpdated, { audioTracks: N }));
                  }), C.on(dashjs.MediaPlayer.events.QUALITY_CHANGE_RENDERED, function(A) {
                    var H, N;
                    A.mediaType === "video" && (H = T._qualityService.levels || [], N = "" + s.DASH_QUALITY_PROTOCOL + A.newQuality, A = H.find(function(O) {
                      return O.Url === N;
                    }), T.trigger(e.Private.QualityChange, { levelSwitch: !0, url: N, desc: A == null ? void 0 : A.desc }));
                  }), C.on("bytesAppendedEndFragment", function(A) {
                    try {
                      var H, N;
                      A.mediaType === "video" && (H = A.bufferedRanges.length) && (N = A.bufferedRanges.end(H - 1), A.startTime > N) && (C.refreshManifest(), T.traceLog(n, "PTS rollback, refresh manifest, expectedStart: " + A.startTime + ", resultBufferEnd: " + N), console.warn("PTS rollback, refresh manifest"));
                    } catch (O) {
                      console.log("exception", O);
                    }
                  }), C.on(dashjs.MediaPlayer.events.ERROR, function(A) {
                    var H = A.error, N = dashjs.MediaPlayer.errors, O = ((V) => {
                      var Q, j, k = {};
                      for (Q in V) V.hasOwnProperty(Q) && (j = V[Q], k[j] = Q);
                      return k;
                    })(N)[H.code], F = [N.TIME_SYNC_FAILED_ERROR_CODE, N.TIMED_TEXT_ERROR_ID_PARSE_CODE];
                    if (console.log("dash error", A, "code:", O), T.traceLog(n, "dashjs-error::" + O + "#" + H.message + "#" + ((A = H.data) == null || (A = A.response) == null ? void 0 : A.status)), !F.includes(H.code)) {
                      T._clearTimeout();
                      var U, M, P, I = H.code;
                      switch (I) {
                        case N.DOWNLOAD_ERROR_ID_CONTENT_CODE:
                        case N.DOWNLOAD_ERROR_ID_MANIFEST_CODE:
                        case N.DOWNLOAD_ERROR_ID_INITIALIZATION_CODE:
                        case N.DOWNLOAD_ERROR_ID_SIDX_CODE:
                        case N.DOWNLOAD_ERROR_ID_XLINK_CODE:
                        case N.FRAGMENT_LOADER_LOADING_FAILURE_ERROR_CODE:
                        case N.FRAGMENT_LOADER_NULL_REQUEST_ERROR_CODE:
                          var L = (L = H.data) == null || (L = L.response) == null ? void 0 : L.status;
                          if (L === 404) {
                            if (C.isDynamic() && I === N.DOWNLOAD_ERROR_ID_CONTENT_CODE) return T.traceLog(n, "dashjs::reload mpd because seg 404"), void C.attachSource(R.source);
                            U = s.ErrorCode.NotFoundSourceURL, M = a.get("Error_Not_Found"), P = a.get("Tip_Err_Not_found");
                          } else M = L === 403 ? (U = s.ErrorCode.AuthKeyExpired, a.get("Error_AuthKey_Text")) : L === 0 ? (U = s.ErrorCode.RequestDataError, a.get("Error_Play_Text") + "," + a.get("Maybe_Cors_Error")) : (U = s.ErrorCode.RequestDataError, a.get("Error_Network_Text") + "(" + O + "|" + L + ")");
                          break;
                        case N.MANIFEST_ERROR_ID_NOSTREAMS_CODE:
                        case N.MANIFEST_ERROR_ID_MULTIPLEXED_CODE:
                        case N.MANIFEST_ERROR_ID_PARSE_CODE:
                        case N.MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE:
                        case N.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE:
                          U = s.ErrorCode.LoadedMetadata, M = a.get("Error_Manifest_Decode_Text") + "(" + O + ")";
                          break;
                        default:
                          U = s.ErrorCode.OtherError, M = a.get("Error_Play_Text") + "(" + O + ")";
                      }
                      M += "<br>" + H.message, A = { mediaId: R.vid || "", mediaAuth: R.mediaAuth || "", error_code: U, error_msg: M, diagnosis_info: P }, T.logError(A), T.trigger(e.Player.Error, A), T._dash.reset();
                    }
                  });
                }).call(this), S.initialize(), S.updateSettings(b), S.setAutoPlay(f.autoplay), S.attachView(this.tag), S.attachSource(f.source), this._initPlayBehavior(), w && this._executeReadyCallback());
              }).call(m);
            }, function() {
              var f = { mediaId: h.vid || "", mediaAuth: h.mediaAuth || "", error_code: s.ErrorCode.ModuleLoadError, error_msg: "dash module load error." };
              m.trigger(e.Player.Error, f);
            });
          }, Object.defineProperty(p.prototype, "dispose", { enumerable: !0, configurable: !0, get: function() {
            return g;
          }, set: function() {
            return g;
          } }), p.prototype._switchLevel = function(m) {
            this.traceLog(n, "switchLevel::" + m);
            var v = this._dash;
            m ? (m = Number(m.replace(s.DASH_QUALITY_PROTOCOL, "")), v.updateSettings({ streaming: { abr: { autoSwitchBitrate: { audio: !1, video: !1 } } } }), v.setQualityFor("video", m)) : v.updateSettings({ streaming: { abr: { autoSwitchBitrate: { audio: !0, video: !0 } } } });
          }, p.prototype._switchAudioTrack = function(m) {
            var v = this._dash, f = v.getTracksFor("audio").find(function(b) {
              return b.index === m;
            });
            f && v.setCurrentTrack(f);
          }, p.prototype._destroyDash = function() {
            this._dash && (this._dash.destroy(), this._dash = null);
          };
        };
      }, { "../../config": 15, "../../lang/index": 24, "../../lib/constants": 29, "../../lib/io": 41, "../../lib/object": 43, "../../lib/playerutil": 46, "../base/event/eventtype": 68 }], 98: [function(d, o, x) {
        var _ = d("../base/player"), u = d("./dashinjector"), c = _.extend({ init: function(a, s) {
          s._native = !1, u.inject(this, c, _, s), _.call(this, a, s);
        } });
        o.exports = c;
      }, { "../base/player": 91, "./dashinjector": 97 }], 99: [function(d, o, x) {
        function _() {
          return (_ = Object.assign ? Object.assign.bind() : function(l) {
            for (var g = 1; g < arguments.length; g++) {
              var m, v = arguments[g];
              for (m in v) !{}.hasOwnProperty.call(v, m) || (l[m] = v[m]);
            }
            return l;
          }).apply(null, arguments);
        }
        var u = d("../../lib/io"), c = d("../../config"), a = d("../../lib/constants"), s = d("../../lib/util"), t = d("../../lib/playerutil"), e = (d("../../lib/dom"), d("../../lang/index")), n = d("../base/event/eventtype"), r = d("../saas/drm"), p = d("../../lib/ua"), y = "drminjector.js", h = (() => {
          function l() {
          }
          var g = l.prototype;
          return g.destroy = function() {
          }, g.append = function(m) {
          }, g.remove = function(m, v) {
          }, g.isTextVisible = function() {
          }, g.setTextVisibility = function(m) {
          }, l;
        })();
        o.exports.inject = function(l, g, m, v, f, b, S) {
          var w, T = v.source;
          function C(F) {
            var U = shaka.util.Error.Code, M = "", P = F.data || [];
            switch (F.code) {
              case U.BAD_HTTP_STATUS:
              case U.HTTP_ERROR:
              case U.TIMEOUT:
              case U.LICENSE_REQUEST_FAILED:
                M = e.get("Tip_Drm_Request_Err") + R(P);
                break;
              case U.REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:
              case U.SESSION_TIMEOUT:
                window.isSecureContext ? (M = e.get("Tip_Drm_Key_System_Unavailable"), P.length && (M += "<br />" + e.get("Tip_Err_Common_Short") + P)) : M = e.get("Tip_Drm_Secure_Context");
                break;
              case U.FAILED_TO_CREATE_CDM:
                window.location.protocol === "file:" && (M = e.get("Tip_Drm_File_Not_Allowed"));
                break;
              case U.HLS_INVALID_PLAYLIST_HIERARCHY:
                M = e.get("Tip_Drm_Playlist_Hierarchy");
            }
            return F = R(P), M || F;
          }
          function R(F) {
            return e.get("Tip_Err_Common") + F;
          }
          function E(F) {
            var U = this;
            this._drm.load(this._options.source, F.startTime).then(function() {
              if (U.trigger(n.Private.H5_Loading_Hide), F.continuePlay && (U.play(), F.prevVariant) && F.prevVariant !== 0) {
                for (var M, P = U._drm.getVariantTracks(), I = 0; I < P.length; I++) if (P[I].id === F.prevVariant) {
                  M = P[I];
                  break;
                }
                M && U._drm.selectVariantTrack(M, !0);
              }
            }).catch(function(M) {
              H.call(U, M);
            });
          }
          function A() {
            N();
            var U = a.ErrorCode.DrmNotSupported, F = e.get("Error_Drm_Not_Supported"), U = { mediaId: this._options.vid || "", error_code: U, error_msg: F, diagnosis_info: e.get("Tip_Drm_Unsupported") };
            this.logError(U), this.trigger(n.Player.Error, U);
          }
          function H(F) {
            N();
            var M = a.ErrorCode.DrmLoadError, U = e.get("Error_Drm_Load"), M = { mediaId: this._options.vid || "", error_code: M, error_msg: U + " | " + this._shakaCodeMap[F.code], drm_info: JSON.stringify({ cdmData: this._cdmData, licenseData: this._licenseData }) };
            this.logError(M), M.diagnosis_info = C.call(this, F), this.trigger(n.Player.Error, M);
          }
          function N() {
            this._sessionTimer && (clearTimeout(this._sessionTimer), this._sessionTimer = null);
          }
          function O(F, U) {
            U = U.getVariantTracks().find(function(M) {
              return M.active;
            }), console.log("activeTrack", U), F.trigger(n.Private.QualityChange, { levelSwitch: !0, bitrate: U.bandwidth, desc: U.height });
          }
          !b && (v = T, l._drm || !t.isDash(v) && !t.isHls(v)) || (l._isDrm = !0, l._drm = null, l._isLoadedDrm = !1, l._sessionTimer = null, l._isFairPlay = p.IS_MAC_SAFARI || p.IS_IOS, l._fairPlayHandlers = {}, l._shakaCodeMap = {}, l._cdmData = "", l._licenseData = "", console.log("use FairPlay", l._isFairPlay), g.prototype._checkDrmReady = function() {
            return !(this._drm == null && !this._isFairPlay && (console.warn("please invoke this method after ready event"), 1));
          }, g.prototype.play = function(F) {
            if (this.traceLog(y, "play::" + F), this._checkDrmReady()) return this._isManualPlay = F || !1, this.trigger(n.Private.Cover_Hide), this.tag.ended ? this.replay() : (this.getCurrentTime(), this.tag.paused && this.tag.play()), this;
          }, g.prototype.initPlay = function(F) {
            var U, M, P;
            function I(L, V) {
              var Q, j, k, D;
              L._antiRecord && (console.log("Manual check before load source"), L._antiRecord.check()) || (!shaka.Player.isBrowserSupported() || !(!p.IS_ANDROID || !p.IS_UC && !p.IS_FIREFOX) ? A.call(L) : (Q = null, shaka.Player.probeSupport().then(function(W) {
                Q && (clearTimeout(Q), Q = null), W && W.drm && W.drm["com.widevine.alpha"] ? L.destroy(D) : A.call(L);
              }), Q = setTimeout(function() {
                A.call(L);
              }, 5e3), j = !L._drm, k = function() {
                var W, ee, re;
                L._drm = new shaka.Player(L.tag), w(L, L._drm), shaka.util.Error.Code.SESSION_TIMEOUT = "SESSION_TIMEOUT", L._shakaCodeMap = (W = shaka.util.Error.Code, ee = {}, Object.keys(W).forEach(function(ne) {
                  ee[W[ne]] = ne;
                }), ee), re = L._options.isLive ? "https://" + t.getLiveHostByRegion(L._options.region) : "https://vod." + L._options.region + ".aliyuncs.com", L._drm.configure(_({ drm: { servers: { "com.widevine.alpha": re, "com.microsoft.playready": re }, retryParameters: { maxAttempts: 1 } } }, L._options.drmOption || {}, { textDisplayFactory: function() {
                  return new h();
                } })), L._drm.getNetworkingEngine().registerRequestFilter(function(ne, le) {
                  shaka.util.StringUtils;
                  var K = shaka.util.Uint8ArrayUtils;
                  ne == shaka.net.NetworkingEngine.RequestType.LICENSE && (ne = K.toBase64(new Uint8Array(le.body)), K = L._options.isLive ? r.getRequestUrl(ne, L) : r.postData(ne, L), L._cdmData = ne, le.uris[0] = K.url, le.headers["content-type"] = "application/x-www-form-urlencoded", le.body = K.data);
                }), L._drm.getNetworkingEngine().registerResponseFilter(function(ne, le) {
                  var K = shaka.util.StringUtils, oe = shaka.util.Uint8ArrayUtils;
                  ne == shaka.net.NetworkingEngine.RequestType.LICENSE && (ne = K.fromUTF8(le.data), K = JSON.parse(ne), ne = L._options.isLive ? K.Response.B64License : JSON.parse(K.License).b64License, L._licenseData = ne, le.data = oe.fromBase64(ne));
                }), L._drm.addEventListener("error", function(ne) {
                  console.log("errorMessage"), console.log(ne.detail.code), console.log(ne.detail);
                }), L._drm.load(L._options.source).then(function() {
                  L._initPlayBehavior(V);
                }).catch(function(ne) {
                  H.call(L, ne);
                }), N.call(L), L.one(n.Video.CanPlay, function() {
                  N.call(L);
                }), L._sessionTimer = setTimeout(function() {
                  L._isError || (H.call(L, { code: "SESSION_TIMEOUT" }), L._drm && L._drm.destroy());
                }, L._player.getOptions().drmSessionTimeout || 5e3), f && f(L._drm), j && (L._executeReadyCallback(), L._urls) && 0 < L._urls.length && (L._currentPlayIndex = t.findSelectedStreamLevel(L._urls, L._options.defaultDefinition), re = L._urls[L._currentPlayIndex], L.trigger(n.Private.SourceLoaded, re));
              }, D = function(W) {
                try {
                  k();
                } catch (ee) {
                  console.log(ee);
                }
              }));
            }
            s.contentProtocolMixed(T) ? (N(), (U = { mediaId: this._options.vid || "", error_code: a.ErrorCode.InvalidSourceURL, error_msg: "InvalidSourceURL" }).display_msg = e.get("Request_Block_Text"), this.trigger(n.Player.Error, U)) : this._options.accessKeyId && this._options.accessKeySecret ? ((M = this)._waitingTimeoutCount = 1, this._isFairPlay ? (this.trigger(n.Private.H5_Loading_Show), (function(L, V) {
              var Q;
              this._isFairPlay && ((() => {
                var j;
                return p.IS_IOS ? (j = parseInt(p.os.version), console.log("osVersion", j), 12 <= j) : p.IS_MAC_SAFARI ? (j = parseInt(p.browser.version), console.log("browserVersion", j), 12 <= j) : void 0;
              })() ? ((Q = this).destroy(), r.loadCertificate(this, function() {
                L && L(), Q._initPlayBehavior(V, Q._options.source), Q._executeReadyCallback();
              })) : A.call(this));
            }).call(this, f, F)) : this._isLoadedDrm && typeof shaka < "u" ? I(this, F) : (this.trigger(n.Private.H5_Loading_Show), P = performance.now(), (function(L, V) {
              var Q = "aliplayer-drm-min.js", j = "", j = c.domain ? "https://" + c.domain + c.path + c.h5Version + "/drm/" + Q : "/build/drm/" + Q, k = (this._options.shakaUrl && (j = this._options.shakaUrl), this);
              u.loadJS(j, function() {
                shaka.polyfill.installAll(), L.apply(k);
              }, function(D) {
                V && V(D);
              });
            }).call(M, function() {
              this.traceLog(y, "got js#" + parseInt(performance.now() - P)), this._isLoadedDrm = !0, I(this, F);
            }, function(L) {
              L = { mediaId: M._options.vid || "", mediaAuth: M._options.mediaAuth || "", error_code: a.ErrorCode.ModuleLoadError, error_msg: "drm player module load error." + (L ? L.message : "") }, M.trigger(n.Player.Error, L);
            }))) : (N(), (U = { mediaId: this._options.vid || "", error_code: a.ErrorCode.InvalidParameter, error_msg: "No sts params." }).display_msg = e.get("Error_Drm_No_Sts"), this.trigger(n.Player.Error, U));
          }, g.prototype.destroy = function(F) {
            var U;
            this._drm ? (N.call(U = this), this._drm.destroy().then(function() {
              U._drm = null, typeof F == "function" && F(U);
            })) : (this._isFairPlay && this._destroyFairPlay(), typeof F == "function" && F(this));
          }, g.prototype._destroyFairPlay = function() {
            r.destroyFairPlay.call(this);
          }, g.prototype.dispose = function() {
            m.dispose.call(this), this.destroy();
          }, g.prototype._switchLevel = function(F, U) {
            if (U = U || { isAuto: !0 }, this.trigger(n.Player.LevelSwitch), this._switchedLevel = !0, this._isFairPlay) {
              this._manuallySwitchDrmLevel = !U.isAuto;
              var M = this.autoplay || this._status != "pause";
              this._loadByUrlInner(F, this.getCurrentTime(), M);
            } else if (U.isAuto) this._drm.configure({ abr: { enabled: !0 } }), O(this._player, this._drm);
            else {
              for (var P, I = this._drm.getVariantTracks(), L = 0; L < I.length; L++) {
                var V = I[L];
                if (Number(V.bandwidth) === Number(U.bitrate) && Number(V.height) === Number(U.resolution.split("x")[1])) {
                  P = V;
                  break;
                }
              }
              P || console.warn("cannot find target track", U), this._drm.configure({ abr: { enabled: !1 } }), this._drm.selectVariantTrack(P, !this._options.seamlessHandover);
            }
            var Q = this;
            setTimeout(function() {
              Q.trigger(n.Player.LevelSwitched), this._switchedLevel = !1;
            }, 1e3);
          }, g.prototype._getDRMEncryptItem = function() {
            var F = this._urls;
            if (F && 0 < F.length) for (var U = F.length, M = 0; M < U; M++) {
              var P = F[M];
              if (P.Url == this._options.source && +P.encryption) return P;
            }
            return "";
          }, g.prototype._getItemBySource = function() {
            var F = this._urls;
            if (F && 0 < F.length) for (var U = F.length, M = 0; M < U; M++) {
              var P = F[M];
              if (P.Url == this._options.source) return P;
            }
            return "";
          }, w = function(F, U) {
            U.addEventListener("error", function(L) {
              var P, I = F, L = L.detail, Q = "Error code:" + L.code + "message:" + L.message, V = (I.traceLog(y, Q), console.log(Q), a.ErrorCode.OtherError), Q = e.get("Error_Play_Text");
              L.code == shaka.util.Error.Code.EXPIRED ? (function() {
                var j = this, k = (this.trigger(n.Private.H5_Loading_Show), null);
                this._options.isLive || (k = this.getCurrentTime());
                var D, W = !this.paused(), ee = this._drm.getConfiguration().abr.enabled;
                if (!ee) {
                  for (var re = this._drm.getVariantTracks(), ne = 0; ne < re.length; ne++) if (re[ne].active) {
                    D = re[ne].id;
                    break;
                  }
                }
                var le = { startTime: k, continuePlay: W, prevVariant: D, isAdaptive: ee };
                typeof this._options.refreshAccessInfo == "function" ? this._options.refreshAccessInfo().then(function(K) {
                  (K = K || {}).accessKeyId && (j._options.accessKeyId = K.accessKeyId), K.securityToken && (j._options.securityToken = K.securityToken), K.accessKeySecret && (j._options.accessKeySecret = K.accessKeySecret), E.call(j, le);
                }) : E.call(j, le);
              }).call(I) : (L.code == shaka.util.Error.Code.HTTP_ERROR ? (V = a.ErrorCode.NetworkError, Q = e.get("Http_Error")) : L.code == shaka.util.Error.Code.TIMEOUT ? (V = a.ErrorCode.LoadingTimeout, Q = e.get("Error_Waiting_Timeout_Text")) : L.code == shaka.util.Error.Code.LICENSE_REQUEST_FAILED ? (V = a.ErrorCode.DrmLicenseRequestFailed, Q = e.get("Error_Drm_License_Request_Failed")) : L.Category == shaka.util.Error.NETWORK && (V = a.ErrorCode.NetworkError, Q = e.get("Error_Network_Text")), N.call(I), setTimeout(function() {
                I.trigger(n.Private.Play_Btn_Hide);
              }), I.checkOnline() && (P = I._drm.drmInfo() || {}, P = { keyIds: Array.from(P.keyIds || []), initData: String(((P = (P.initData || [])[0]) == null ? void 0 : P.initData) || []), cdmData: I._cdmData, licenseData: I._licenseData }, P = { mediaId: I._options.vid || "", error_code: V, error_msg: L.message, shaka_error: JSON.stringify(L.data || []), drm_info: JSON.stringify(P) }, I.logError(P), P.display_msg = Q + " | " + I._shakaCodeMap[L.code], P.diagnosis_info = C.call(I, L), I.trigger(n.Player.Error, P)));
            }), U.addEventListener("variantchanged", function(M) {
              console.log("DRM Event: variantchanged", M);
            }), U.addEventListener("abrstatuschanged", function(M) {
              console.log("DRM Event: abrstatuschanged", M);
            }), U.addEventListener("drmsessionupdate", function(M) {
              console.log("DRM Event: drmsessionupdate", M), N.call(F);
            }), U.addEventListener("expirationupdated", function(M) {
              console.log("DRM Event: expirationupdated", M), console.log("Exp:", this.getExpiration());
            }), U.addEventListener("adaptation", function(M) {
              console.log("adaptation", M), O(F, U);
            }), U.addEventListener("trackschanged", function(M) {
              console.log("DRM EVENT: trackschanged", U.getTextLanguages(), U.getTextTracks());
              var P = U.getTextLanguages();
              P && P.length && (P = ((I) => {
                var L = { subtitle: "subtitles", caption: "captions" }, V = (console.log("Building track config"), I.getManifest().textStreams || []), Q = (console.log("textStreams", V), I.getTextLanguages()), j = (console.log("languageList", Q), []);
                try {
                  V.forEach(function(k) {
                    Q.includes(k.language) && j.push({ kind: L[k.kind] || k.kind, label: k.label, srclang: k.language, src: Array.from(k.segmentIndex)[0].getUris()[0] });
                  });
                } catch (k) {
                  console.log("error in retrieving text track url: ", k);
                }
                return j;
              })(U), F.trigger(n.Private.TextTrackFounded, { from: "drm", textTracks: P }), F.trigger(n.Private.CCReset));
            });
          });
        };
      }, { "../../config": 15, "../../lang/index": 24, "../../lib/constants": 29, "../../lib/dom": 33, "../../lib/io": 41, "../../lib/playerutil": 46, "../../lib/ua": 49, "../../lib/util": 51, "../base/event/eventtype": 68, "../saas/drm": 109 }], 100: [function(d, o, x) {
        function _() {
          _ = function() {
            return I;
          };
          var P, I = {}, L = Object.prototype, V = L.hasOwnProperty, oe = typeof Symbol == "function" ? Symbol : {}, Q = oe.iterator || "@@iterator", j = oe.asyncIterator || "@@asyncIterator", k = oe.toStringTag || "@@toStringTag";
          function D(be, Re, Ie, Ne) {
            Object.defineProperty(be, Re, { value: Ie, enumerable: !Ne, configurable: !Ne, writable: !Ne });
          }
          try {
            D({}, "");
          } catch {
            D = function(Re, Ie, Ne) {
              return Re[Ie] = Ne;
            };
          }
          function W(be, Ke, Ie, Ne) {
            var Me, ze, Ue, Qe, Ke = Ke && Ke.prototype instanceof ne ? Ke : ne, Ke = Object.create(Ke.prototype);
            return D(Ke, "_invoke", (Me = be, ze = Ie, Ue = new Fe(Ne || []), Qe = 1, function(at, tt) {
              if (Qe === 3) throw Error("Generator is already running");
              if (Qe === 4) {
                if (at === "throw") throw tt;
                return { value: P, done: !0 };
              }
              for (Ue.method = at, Ue.arg = tt; ; ) {
                var $e = Ue.delegate;
                if ($e && ($e = function nt(et, je) {
                  var We = je.method, ae = et.i[We];
                  return ae === P ? (je.delegate = null, We === "throw" && et.i.return && (je.method = "return", je.arg = P, nt(et, je), je.method === "throw") || We !== "return" && (je.method = "throw", je.arg = new TypeError("The iterator does not provide a '" + We + "' method")), re) : (We = ee(ae, et.i, je.arg), We.type === "throw" ? (je.method = "throw", je.arg = We.arg, je.delegate = null, re) : (ae = We.arg, ae ? ae.done ? (je[et.r] = ae.value, je.next = et.n, je.method !== "return" && (je.method = "next", je.arg = P), je.delegate = null, re) : ae : (je.method = "throw", je.arg = new TypeError("iterator result is not an object"), je.delegate = null, re)));
                }($e, Ue), $e)) {
                  if ($e === re) continue;
                  return $e;
                }
                if (Ue.method === "next") Ue.sent = Ue._sent = Ue.arg;
                else if (Ue.method === "throw") {
                  if (Qe === 1) throw Qe = 4, Ue.arg;
                  Ue.dispatchException(Ue.arg);
                } else Ue.method === "return" && Ue.abrupt("return", Ue.arg);
                if (Qe = 3, $e = ee(Me, ze, Ue), $e.type === "normal") {
                  if (Qe = Ue.done ? 4 : 2, $e.arg === re) continue;
                  return { value: $e.arg, done: Ue.done };
                }
                $e.type === "throw" && (Qe = 4, Ue.method = "throw", Ue.arg = $e.arg);
              }
            }), !0), Ke;
          }
          function ee(be, Re, Ie) {
            try {
              return { type: "normal", arg: be.call(Re, Ie) };
            } catch (Ne) {
              return { type: "throw", arg: Ne };
            }
          }
          I.wrap = W;
          var re = {};
          function ne() {
          }
          function le() {
          }
          function K() {
          }
          var oe = {}, G = (D(oe, Q, function() {
            return this;
          }), Object.getPrototypeOf), G = G && G(G(He([]))), ie = (G && G !== L && V.call(G, Q) && (oe = G), K.prototype = ne.prototype = Object.create(oe));
          function ve(be) {
            ["next", "throw", "return"].forEach(function(Re) {
              D(be, Re, function(Ie) {
                return this._invoke(Re, Ie);
              });
            });
          }
          function Pe(be, Re) {
            var Ie;
            D(this, "_invoke", function(Ne, Me) {
              function ze() {
                return new Re(function(Ue, Qe) {
                  (function Ke(je, tt, $e, nt) {
                    var et, je = ee(be[je], be, tt);
                    if (je.type !== "throw") return (tt = (et = je.arg).value) && typeof tt == "object" && V.call(tt, "__await") ? Re.resolve(tt.__await).then(function(We) {
                      Ke("next", We, $e, nt);
                    }, function(We) {
                      Ke("throw", We, $e, nt);
                    }) : Re.resolve(tt).then(function(We) {
                      et.value = We, $e(et);
                    }, function(We) {
                      return Ke("throw", We, $e, nt);
                    });
                    nt(je.arg);
                  })(Ne, Me, Ue, Qe);
                });
              }
              return Ie = Ie ? Ie.then(ze, ze) : ze();
            }, !0);
          }
          function _e(be) {
            this.tryEntries.push(be);
          }
          function Ce(be) {
            var Re = be[4] || {};
            Re.type = "normal", Re.arg = P, be[4] = Re;
          }
          function Fe(be) {
            this.tryEntries = [[-1]], be.forEach(_e, this), this.reset(!0);
          }
          function He(be) {
            if (be != null) {
              var Re, Ie = be[Q];
              if (Ie) return Ie.call(be);
              if (typeof be.next == "function") return be;
              if (!isNaN(be.length)) return Re = -1, (Ie = function Ne() {
                for (; ++Re < be.length; ) if (V.call(be, Re)) return Ne.value = be[Re], Ne.done = !1, Ne;
                return Ne.value = P, Ne.done = !0, Ne;
              }).next = Ie;
            }
            throw new TypeError(typeof be + " is not iterable");
          }
          return D(ie, "constructor", le.prototype = K), D(K, "constructor", le), D(K, k, le.displayName = "GeneratorFunction"), I.isGeneratorFunction = function(be) {
            return be = typeof be == "function" && be.constructor, !!be && (be === le || (be.displayName || be.name) === "GeneratorFunction");
          }, I.mark = function(be) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(be, K) : (be.__proto__ = K, D(be, k, "GeneratorFunction")), be.prototype = Object.create(ie), be;
          }, I.awrap = function(be) {
            return { __await: be };
          }, ve(Pe.prototype), D(Pe.prototype, j, function() {
            return this;
          }), I.AsyncIterator = Pe, I.async = function(be, Re, Ie, Ne, Me) {
            Me === void 0 && (Me = Promise);
            var ze = new Pe(W(be, Re, Ie, Ne), Me);
            return I.isGeneratorFunction(Re) ? ze : ze.next().then(function(Ue) {
              return Ue.done ? Ue.value : ze.next();
            });
          }, ve(ie), D(ie, k, "Generator"), D(ie, Q, function() {
            return this;
          }), D(ie, "toString", function() {
            return "[object Generator]";
          }), I.keys = function(be) {
            var Re, Ie = Object(be), Ne = [];
            for (Re in Ie) Ne.unshift(Re);
            return function Me() {
              for (; Ne.length; ) if ((Re = Ne.pop()) in Ie) return Me.value = Re, Me.done = !1, Me;
              return Me.done = !0, Me;
            };
          }, I.values = He, Fe.prototype = { constructor: Fe, reset: function(be) {
            if (this.prev = this.next = 0, this.sent = this._sent = P, this.done = !1, this.delegate = null, this.method = "next", this.arg = P, this.tryEntries.forEach(Ce), !be) for (var Re in this) Re.charAt(0) === "t" && V.call(this, Re) && !isNaN(+Re.slice(1)) && (this[Re] = P);
          }, stop: function() {
            this.done = !0;
            var be = this.tryEntries[0][4];
            if (be.type === "throw") throw be.arg;
            return this.rval;
          }, dispatchException: function(be) {
            if (this.done) throw be;
            var Re = this;
            function Ie(at) {
              ze.type = "throw", ze.arg = be, Re.next = at;
            }
            for (var Ne = Re.tryEntries.length - 1; 0 <= Ne; --Ne) {
              var Me = this.tryEntries[Ne], ze = Me[4], Ue = this.prev, Qe = Me[1], Ke = Me[2];
              if (Me[0] === -1) return Ie("end"), !1;
              if (!Qe && !Ke) throw Error("try statement without catch or finally");
              if (Me[0] != null && Me[0] <= Ue) {
                if (Ue < Qe) return this.method = "next", this.arg = P, Ie(Qe), !0;
                if (Ue < Ke) return Ie(Ke), !1;
              }
            }
          }, abrupt: function(be, Re) {
            for (var Ie = this.tryEntries.length - 1; 0 <= Ie; --Ie) {
              var Ne = this.tryEntries[Ie];
              if (-1 < Ne[0] && Ne[0] <= this.prev && this.prev < Ne[2]) {
                var Me = Ne;
                break;
              }
            }
            var ze = (Me = Me && (be === "break" || be === "continue") && Me[0] <= Re && Re <= Me[2] ? null : Me) ? Me[4] : {};
            return ze.type = be, ze.arg = Re, Me ? (this.method = "next", this.next = Me[2], re) : this.complete(ze);
          }, complete: function(be, Re) {
            if (be.type === "throw") throw be.arg;
            return be.type === "break" || be.type === "continue" ? this.next = be.arg : be.type === "return" ? (this.rval = this.arg = be.arg, this.method = "return", this.next = "end") : be.type === "normal" && Re && (this.next = Re), re;
          }, finish: function(be) {
            for (var Re = this.tryEntries.length - 1; 0 <= Re; --Re) {
              var Ie = this.tryEntries[Re];
              if (Ie[2] === be) return this.complete(Ie[4], Ie[3]), Ce(Ie), re;
            }
          }, catch: function(be) {
            for (var Re = this.tryEntries.length - 1; 0 <= Re; --Re) {
              var Ie, Ne, Me = this.tryEntries[Re];
              if (Me[0] === be) return (Ie = Me[4]).type === "throw" && (Ne = Ie.arg, Ce(Me)), Ne;
            }
            throw Error("illegal catch attempt");
          }, delegateYield: function(be, Re, Ie) {
            return this.delegate = { i: He(be), r: Re, n: Ie }, this.method === "next" && (this.arg = P), re;
          } }, I;
        }
        function u(P, I, L, V, Q, j, k) {
          try {
            var D = P[j](k), W = D.value;
          } catch (ee) {
            return L(ee);
          }
          D.done ? I(W) : Promise.resolve(W).then(V, Q);
        }
        function c(P) {
          return function() {
            var I = this, L = arguments;
            return new Promise(function(V, Q) {
              var j = P.apply(I, L);
              function k(W) {
                u(j, V, Q, k, D, "next", W);
              }
              function D(W) {
                u(j, V, Q, k, D, "throw", W);
              }
              k(void 0);
            });
          };
        }
        var a = typeof Promise > "u" ? d("es6-promise").Promise : Promise, s = d("../../lib/io"), t = d("../../config"), e = d("../../lang/index"), n = d("../base/event/eventtype"), r = d("../../lib/constants"), p = "drminjectorNg.js", y = { LoadJs: 1, LoadSource: 2, PlayerError: 3, SupportError: 4, ParamsError: 5 }, h = { Widevine: "com.widevine.alpha", FairPlay: "com.apple.fps" }, l = {}, g = {};
        function m(P) {
          return v.apply(this, arguments);
        }
        function v() {
          return (v = c(_().mark(function P(I) {
            var L, V, Q, j, k = this;
            return _().wrap(function(D) {
              for (; ; ) switch (D.prev = D.next) {
                case 0:
                  if (this._drm) return D.next = 3, this._drm.destroy();
                  D.next = 4;
                  break;
                case 3:
                  this._drm = null;
                case 4:
                  D.prev = 4, F.call(this, "mod_shaka_s"), D.next = 8;
                  var W = I;
                  return new a(function(ee, re) {
                    var ne = "https://" + t.domain + t.path + t.h5Version + "/drm/aliplayer-drm2-min.js";
                    W != null && W.shakaUrl && (ne = W == null ? void 0 : W.shakaUrl), s.loadJS(ne, ee, re);
                  });
                case 8:
                  F.call(this, "mod_shaka_f"), D.next = 15;
                  break;
                case 11:
                  return D.prev = 11, D.t0 = D.catch(4), console.log("[load shaka-player error]", D.t0), D.abrupt("return", E.call(this, y.LoadJs, D.t0));
                case 15:
                  if (shaka.polyfill.installAll(), l = A(shaka.util.Error.Code), g = A(shaka.net.NetworkingEngine.RequestType), shaka.Player.isBrowserSupported()) {
                    D.next = 20;
                    break;
                  }
                  return D.abrupt("return", E.call(this, y.SupportError));
                case 20:
                  if (window.isSecureContext) {
                    D.next = 22;
                    break;
                  }
                  return D.abrupt("return", E.call(this, y.SupportError, { _code: "no-secure-context" }));
                case 22:
                  if (Q = ((ee) => {
                    var re = null;
                    return (ee = ee || {}).widevine || ee.fairplay || (re = { message: e.get("Error_Drm_Params_Missing") }), [ee, re];
                  })(I.drm), V = Q[0], Q = Q[1]) return D.abrupt("return", E.call(this, y.ParamsError, Q));
                  D.next = 25;
                  break;
                case 25:
                  return I.vid || (this._options.isVBR = !0), Q = new shaka.Player(), R.call(this, Q), this._drm = Q, j = { drm: { servers: ((j = {})[h.Widevine] = (L = V.widevine) == null ? void 0 : L.licenseUrl, j[h.FairPlay] = (L = V.fairplay) == null ? void 0 : L.licenseUrl, j), advanced: ((L = {})[h.Widevine] = { serverCertificateUri: (j = V.widevine) == null ? void 0 : j.certificateUrl }, L[h.FairPlay] = { serverCertificateUri: (j = V.fairplay) == null ? void 0 : j.certificateUrl, serverCertificate: (j = V.fairplay) == null ? void 0 : j.certificate }, L) }, autoShowText: 1 }, shaka.util.PlayerConfiguration.mergeConfigObjects(j, I.drmOption || {}), Q.configure(j), Q.attach(this.tag), Q.getNetworkingEngine().registerRequestFilter(function(ee, re, ne) {
                    if ((K = re.drmInfo) != null && K.keySystem && (k._keySystem = re.drmInfo.keySystem), ee === shaka.net.NetworkingEngine.RequestType.LICENSE) {
                      F.call(k, "drm_li_s");
                      var le = U.call(k);
                      if (le.licenseHeaders && Object.keys(le.licenseHeaders).forEach(function(oe) {
                        re.headers[oe] = le.licenseHeaders[oe];
                      }), typeof le.licenseRequestFilter == "function") return le.licenseRequestFilter(re, shaka.util);
                    } else if (ee === shaka.net.NetworkingEngine.RequestType.SERVER_CERTIFICATE) {
                      F.call(k, "drm_cer_s");
                      var K = U.call(k);
                      if (typeof K.certificateRequestFilter == "function") return K.certificateRequestFilter(re, shaka.util);
                    }
                  }), Q.getNetworkingEngine().registerResponseFilter(function(ee, re, ne) {
                    if (ee === shaka.net.NetworkingEngine.RequestType.LICENSE) {
                      F.call(k, "drm_li_f"), M.call(k, ee, re);
                      var le = U.call(k);
                      if (typeof le.licenseResponseFilter == "function") return le.licenseResponseFilter(re, shaka.util);
                    } else if (ee === shaka.net.NetworkingEngine.RequestType.SERVER_CERTIFICATE && (F.call(k, "drm_cer_f"), M.call(k, ee, re), le = U.call(k), typeof le.certificateResponseFilter == "function"))
                      return le.certificateResponseFilter(re, shaka.util);
                  }), D.prev = 37, D.next = 40, Q.load(I.source);
                case 40:
                  D.next = 46;
                  break;
                case 42:
                  D.prev = 42, D.t1 = D.catch(37), console.log("error when load source", D.t1), E.call(this, y.LoadSource, D.t1);
                case 46:
                  this._initPlayBehavior(), this._executeReadyCallback();
                case 48:
                case "end":
                  return D.stop();
              }
            }, P, this, [[4, 11], [37, 42]]);
          }))).apply(this, arguments);
        }
        function f(P) {
          this.traceLog(p, "play::" + P), P && this.trigger(n.Private.ManualPlay), this._isManualPlay = !!P, this.tag.ended || this._ended ? this.replay() : this.tag.paused && this.tag.play();
        }
        function b() {
          this._switchingDesc = null, this._keySystem = null, this._baseType.dispose.call(this), this._drm && (this._drm.destroy(), this._drm = null);
        }
        function S(P, I) {
          var L, V, Q, j = this._drm;
          P ? (L = Number(P.split(r.DASH_QUALITY_PROTOCOL)[1]), (P = j.getVariantTracks().find(function(k) {
            return k.id === L;
          })) && (j.configure({ abr: { enabled: !1 } }), V = !1, Q = this.getOptions().seamlessHandover, j.selectVariantTrack(P, V = typeof Q == "boolean" ? !Q : V), V || (this._switchingDesc = I.desc))) : (j.configure({ abr: { enabled: !0 } }), this._switchingDesc = null);
        }
        function w() {
          var P = this._drm;
          if (P) return P.getTextTracks().map(function(I) {
            return { language: I.language, label: I.label, kind: I.kind === "subtitle" ? "subtitles" : "captions", default: I.active };
          });
          console.warn("shaka has not been initialized but _getTextTracks is called");
        }
        function T(P) {
          var I = this._drm;
          I && (P ? (I.setTextTrackVisibility(!0), I.selectTextLanguage(P)) : I.setTextTrackVisibility(!1));
        }
        function C(P) {
          P && this._drm.selectAudioLanguage(P), O.call(this);
        }
        function R(P) {
          var I = this;
          P.addEventListener("error", function(L) {
            E.call(I, y.PlayerError, L.detail);
          }), P.addEventListener("trackschanged", function() {
            (function() {
              var L, V, Q, j = this._drm, k = j.getAudioLanguages(), D = (L = j.getVariantTracks()) == null ? void 0 : L.find(function(W) {
                return W.active;
              });
              D && (V = [], k.length === 1 && k[0] === "und" ? V.push({ id: "und", language: e.get("Default"), enabled: !0 }) : k.length && (Q = j.getAudioLanguagesAndRoles() || [], k.forEach(function(W) {
                var ee;
                V.push({ id: W, language: ((ee = Q.find(function(re) {
                  return re.language === W;
                })) == null ? void 0 : ee.label) || W, enabled: W === D.language });
              })), this.trigger(n.Player.AudioTrackUpdated, { audioTracks: V }));
            }).call(I), P.keySystem() === h.FairPlay ? I.trigger(n.Player.LevelsLoaded, { levels: [{}] }) : (O.call(I), N.call(I, P));
          }), P.addEventListener("adaptation", function() {
            P.keySystem() !== h.FairPlay && N.call(I, P);
          }), this.tag.addEventListener("resize", function() {
            I._switchingDesc && I.trigger(n.Private.Info_Show, { text: e.get("Quality_Change_Result") + "<span>" + I._switchingDesc + "</span>", duration: 3e3, align: "lb" });
          });
        }
        function E(P, I) {
          var L = this;
          if (console.log("to handle error of:", P, I, "this._isError", this._isError), this._isError) this.traceLog(p, "drm extra error [" + P + "]" + I + "}");
          else {
            I = I || {};
            var V = { mediaId: this.getOptions().vid || "", error_code: "", error_msg: "" };
            switch (P) {
              case y.LoadJs:
                V.error_code = r.ErrorCode.ModuleLoadError, V.error_msg = "drm player module load error." + ((I == null ? void 0 : I.message) || "");
                break;
              case y.LoadSource:
              case y.PlayerError:
                V.error_code = r.ErrorCode.DrmLoadError, V.error_msg = e.get("Error_Drm_Load") + " | " + (l[I.code] || "") + " " + ((Q) => {
                  var j = "";
                  return j = Q.code === shaka.util.Error.Code.BAD_HTTP_STATUS ? (Q == null || (Q = Q.data) == null ? void 0 : Q[1]) || "" : j;
                })(I), V.diagnosis_info = ((Q) => {
                  var j = shaka.util.Error.Code, k = "", D = Q.data || [];
                  switch (Q.code) {
                    case j.BAD_HTTP_STATUS:
                    case j.HTTP_ERROR:
                    case j.TIMEOUT:
                    case j.LICENSE_REQUEST_FAILED:
                      k = e.get("Tip_Drm_Request_Err") + H(D);
                      break;
                    case j.REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:
                    case j.SESSION_TIMEOUT:
                      window.isSecureContext ? (k = e.get("Tip_Drm_Key_System_Unavailable"), D.length && (k += "<br />" + e.get("Tip_Err_Common_Short") + D)) : k = e.get("Tip_Drm_Secure_Context");
                      break;
                    case j.FAILED_TO_CREATE_CDM:
                      window.location.protocol === "file:" && (k = e.get("Tip_Drm_File_Not_Allowed"));
                      break;
                    case j.HLS_INVALID_PLAYLIST_HIERARCHY:
                      k = e.get("Tip_Drm_Playlist_Hierarchy");
                      break;
                    case j.ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:
                      k = e.get("Tip_Drm_Info_Missing");
                  }
                  return Q = H(D), k || Q;
                })(I), V.shaka_error = I || {}, I.code === shaka.util.Error.Code.LICENSE_REQUEST_FAILED && console.log("LICENSE_REQUEST_FAILED => ", I.data[0]);
                break;
              case y.SupportError:
                V.error_code = r.ErrorCode.DrmNotSupported, I._code === "no-secure-context" ? V.error_msg = e.get("Tip_Drm_Secure_Context") : (V.error_msg = e.get("Error_Drm_Not_Supported"), V.diagnosis_info = e.get("Tip_Drm_Unsupported"));
                break;
              case y.ParamsError:
                V.error_code = r.ErrorCode.InvalidParameter, V.error_msg = I.message || "";
            }
            this.logError(V), this.trigger(n.Player.Error, V), shaka.Player.probeSupport().then(function(Q) {
              L.traceLog(p, "probeSupport::" + JSON.stringify(Q));
            }).catch(function(Q) {
              L.traceLog(p, "probeSupport::" + Q);
            });
          }
        }
        function A(P) {
          var I = {};
          return Object.keys(P).forEach(function(L) {
            I[P[L]] = L;
          }), I;
        }
        function H(P) {
          return e.get("Tip_Err_Common") + P;
        }
        function N() {
          var P = (I = this._drm.getVariantTracks()) == null ? void 0 : I.find(function(L) {
            return L.active;
          }), I = (this._qualityService.levels || []).find(function(L) {
            return L.Url === "" + r.DASH_QUALITY_PROTOCOL + P.id;
          });
          P && I ? this.trigger(n.Private.QualityChange, { levelSwitch: !0, desc: I.desc }) : console.warn("no activeTrack or activeDisplayItem found", P, I);
        }
        function O() {
          var P = this._drm, I = P.getVariantTracks(), L = (V = P.getVariantTracks()) == null ? void 0 : V.find(function(Q) {
            return Q.active;
          }), V = (I = I.filter(function(Q) {
            return Q.audioId === L.audioId;
          })).map(function(Q) {
            return { url: "" + r.DASH_QUALITY_PROTOCOL + Q.id, width: Q.width, height: Q.height, bitrate: Q.bandwidth, attrs: { BANDWIDTH: Q.bandwidth, RESOLUTION: Q.width + "x" + Q.height } };
          });
          this.trigger(n.Player.LevelsLoaded, { levels: V }), this.trigger(n.Private.SelectorGenerateList, { type: "quality" }), P.getConfiguration().abr.enabled || (I = (this._qualityService.levels || []).find(function(Q) {
            return Q.Url === "" + r.DASH_QUALITY_PROTOCOL + L.id;
          })) && this.trigger(n.Private.SelectorValueChange, { type: "quality", text: I.desc });
        }
        function F(P) {
          this.trigger(n.Private.Timeline, { name: P, ts: performance.now() });
        }
        function U() {
          var P = {}, I = this.getOptions().drm || {}, L = this._keySystem || ((L = this._drm) == null ? void 0 : L.keySystem()) || "";
          return L === h.Widevine ? P = I.widevine || {} : L === h.FairPlay && (P = I.fairplay || {}), P;
        }
        function M(P, I) {
          if ((L = this.getOptions()) == null || (L = L.drm) == null || !L.disableReportLicense) {
            var L = I.data, I = "";
            if (typeof L == "string") I = L;
            else if (L instanceof ArrayBuffer) try {
              I = new TextDecoder().decode(L);
            } catch (Q) {
              console.log("error in decode license provider response", Q), I = "[ArrayBuffer] decode error: " + Q;
            }
            this.traceLog(p, "DRM-" + g[P] + "-response: " + I);
          }
        }
        o.exports.inject = (() => {
          var P = c(_().mark(function I(L, V, Q, j) {
            var k;
            return _().wrap(function(D) {
              for (; ; ) switch (D.prev = D.next) {
                case 0:
                  (k = L)._baseType = Q, k._keySystem = null, k.initPlay = m.bind(k, j), k.play = f.bind(k), k.dispose = b.bind(k), k._getDrmTextTracks = w.bind(k), k._switchDrmTextTrack = T.bind(k), k._switchLevel = S.bind(k), k._switchAudioTrack = C.bind(k);
                case 10:
                case "end":
                  return D.stop();
              }
            }, I);
          }));
          return function(I, L, V, Q) {
            return P.apply(this, arguments);
          };
        })(), o.exports.play = f, o.exports._switchLevel = S, o.exports._getTextTracks = w, o.exports._switchTextTrack = T, o.exports._switchAudioTrack = C, o.exports.updateLevelList = O, o.exports.logProviderResponse = M;
      }, { "../../config": 15, "../../lang/index": 24, "../../lib/constants": 29, "../../lib/io": 41, "../base/event/eventtype": 68, "es6-promise": 9 }], 101: [function(d, o, x) {
        var _ = d("../base/player"), u = d("./drminjector"), c = d("./drminjectorNg"), a = _.extend({ init: function(s, t) {
          t.useDrm2 ? c.inject(this, a, _.prototype, t) : u.inject(this, a, _.prototype, t, function(e) {
          }), t._native = !1, _.call(this, s, t);
        } });
        o.exports = a;
      }, { "../base/player": 91, "./drminjector": 99, "./drminjectorNg": 100 }], 102: [function(d, o, x) {
        (function(_) {
          (function() {
            var u = d("../../lib/io"), c = d("../../config"), a = d("../../lib/constants"), s = d("../../lib/util"), t = d("../../lib/playerutil"), e = d("../../lib/ua"), n = d("../../lib/data"), r = d("../../lang/index"), p = d("../base/event/eventtype"), y = "flvinjector.js";
            o.exports.inject = function(h, l, g, m, v, f) {
              var b, S = m.source, w = m.optionFormat;
              function T() {
                this._disposed || (this._disposed = !0, this._superPt && this._superPt.dispose.call(this), this._destroyFlv(), this._superPt && (l.prototype.play = this._superPt.play, l.prototype.pause = this._superPt.pause, l.prototype.initPlay = this._superPt.initPlay, l.prototype.seek = this._superPt.seek, l.prototype.canSeekable = this._superPt.canSeekable));
              }
              function C(R) {
                try {
                  for (var E = R.buffered.length, A = "Len:" + E + ";", H = 0; H < E; H++) A += "[" + (H + 1) + "]" + R.buffered.start(H) + "~" + R.buffered.end(H);
                  return A;
                } catch {
                }
              }
              (f || (m = S, f = w, !h._flv && t.isFlv(m, f) && t.isSupportFlv())) && (h._Type = l, h._superType = g, h._superPt = g.prototype, h._disposed = !1, l.prototype._checkFlvReady = function() {
                return this._flv != null || (console.warn("please invoke this method after ready event"), !1);
              }, h._isFlv = !0, h._flv = null, h._isLoadedFlv = !1, h._dumpBuffer = null, l.prototype.play = function(R) {
                if (this.traceLog(y, "play::" + R), R && this.trigger(p.Private.ManualPlay), this._checkFlvReady()) return this._isManualPlay = R || !1, this.trigger(p.Private.Cover_Hide), this._options.isLive && R ? this._loadByUrlInner(this._options.source, 0, R) : this.tag.ended || this._ended ? this.replay() : (this._seeking == 0 && (R = 0, this.tag.ended || this._ended || (R = this.getCurrentTime()) == 0 && (R = -1), R != -1) && this.seek(R), this.tag.paused && (this._hasLoaded || (this._hasLoaded = !0, this._flv.load()), this._flv.play())), this;
              }, l.prototype.seek = function(R) {
                if (this._checkFlvReady()) {
                  this._seeking = !0;
                  var E = this.getDuration();
                  E <= (R = Math.floor(R)) && (R = E);
                  try {
                    this._flv.currentTime = R;
                  } catch (A) {
                    console.log(A);
                  }
                  return this;
                }
              }, l.prototype.pause = function(R) {
                if (this._checkFlvReady()) return this._isManualPause = R || !1, this._flv.pause(), this;
              }, l.prototype.getProgramDateTime = function() {
                var R;
                if (this._checkFlvReady()) return this._metadata ? (R = (R = this._flv.getFirstSample()) && R.pts ? R.pts : 0, console.log("推流时间：" + this._metadata.NtpTime), console.log("首帧PTS：" + R), this._metadata.NtpTime + R) : "";
              }, l.prototype.initPlay = function(R) {
                var E, A, H;
                function N(O, F) {
                  if (!O._disposed) {
                    var U = !O._flv, M = (O._destroyFlv(), O._options.isLive);
                    if (M && !flvjs.getFeatureList().networkStreamIO) return (V = { error_code: a.ErrorCode.FormatNotSupport, error_msg: r.get("Error_Not_Support_Mse_Flv") + "|streamIO(format:flv)" }).display_msg = V.error_msg, void O.trigger(p.Player.Error, V);
                    var P, I = { isLive: M, enableWorker: O._options.enableWorker, accurateSeek: !0 }, L = (e.IS_IE11 && (I.enableWorker = !1), { type: "flv", isLive: M, url: O._options.source });
                    for (P in M ? (I.enableStashBuffer = O._options.enableStashBufferForFlv, I.stashInitialSize = O._options.stashInitialSizeForFlv, I.autoCleanupSourceBuffer = !1) : I.lazyLoadMaxDuration = 600, I.statisticsInfoReportInterval = 1e3, O._options.isLive && (O._options.flvFrameChasing && (I.flvFrameChasing = O._options.flvFrameChasing), O._options.chasingFirstParagraph && (I.chasingFirstParagraph = O._options.chasingFirstParagraph), O._options.chasingSecondParagraph && (I.chasingSecondParagraph = O._options.chasingSecondParagraph), O._options.chasingFirstSpeed && (I.chasingFirstSpeed = O._options.chasingFirstSpeed), O._options.chasingSecondSpeed) && (I.chasingSecondSpeed = O._options.chasingSecondSpeed), O._options.flvOption) P == "cors" || P == "hasAudio" || P == "withCredentials" || P == "hasVideo" || P == "type" ? L[P] = O._options.flvOption[P] : I[P] = O._options.flvOption[P];
                    flvjs.LoggingControl.enableAll = O._options.debug, O._flv = flvjs.createPlayer(L, I), b(O, O._flv), O._flv.on(flvjs.Events.DUMP_BUFFER, function(j) {
                      var k, D, W;
                      O._options.disableDumpBuffer || O._liveRetryCount === 0 && O._vodRetryCount === 0 && O._nudgeCount === 0 && typeof O._dumpBuffer != "string" && (O._flvDumpTimer || (O._flvDumpTimer = setTimeout(function() {
                        O._reportDumpBuffer && O._reportDumpBuffer();
                      }, 5e3)), j = new Uint8Array(j), O._dumpBuffer ? O._dumpBuffer = (k = O._dumpBuffer, D = j, (W = new Uint8Array(k.length + D.length)).set(k), W.set(D, k.length), W) : O._dumpBuffer = j);
                    });
                    var V, Q = s.throttle(function(j) {
                      O.traceLog(y, "dts_adjustment::" + j.from + "->" + j.to);
                    }, 1e3);
                    O._flv.on(flvjs.Events.DTS_ADJUSTMENT, function(j) {
                      Q(j);
                    }), O._flv.on(flvjs.Events.MEDIA_INFO, function(j) {
                      O._metadata = j.metadata;
                    }), O._flv.on(flvjs.Events.METADATA_ARRIVED, function(j) {
                      j && j.dataContent && j.dataContent.length && O.trigger(p.Private.SeiFrame, { dataContent: j.dataContent, pts: j.pts });
                    }), O._flv.on(flvjs.Events.STATISTICS_INFO, function(j) {
                      O.trigger(p.Private.StatisticsInfo, j);
                    }), O._flv.attachMediaElement(O.tag), O._initPlayBehavior(F) && ((O._options.preload || O._options.autoplay) && (O._hasLoaded = !0, O._flv.load()), O._options.autoplay && !O.tag.paused && O._flv.play(), v && v(O._flv), U) && (O._executeReadyCallback(), O._urls) && 0 < O._urls.length && (O._currentPlayIndex = t.findSelectedStreamLevel(O._urls, O._options.defaultDefinition), V = O._urls[O._currentPlayIndex], O._options.source = V.Url, O.trigger(p.Private.SourceLoaded, V));
                  }
                }
                e.browser.safari && this.trigger(p.Private.Snapshot_Hide), s.contentProtocolMixed(S, "", w) ? ((E = { mediaId: this._options.vid || "", error_code: a.ErrorCode.InvalidSourceURL, error_msg: "InvalidSourceURL" }).display_msg = r.get("Request_Block_Text"), this.trigger(p.Player.Error, E)) : (A = this)._isLoadedFlv && typeof Hls < "u" ? setTimeout(function() {
                  N(A, R);
                }, 1e3) : (this.trigger(p.Private.H5_Loading_Show), H = performance.now(), (function(O, F, U) {
                  var M = "aliplayer-flv-min.js", P = "", P = c.domain ? "https://" + c.domain + c.path + c.h5Version + "/flv/" + M : "/build/flv/" + M, I = (this._options.assetPrefix && (P = this._options.assetPrefix + "/flv/" + M), JSON.parse(_) && (P = "http://localhost:8000/dist/aliplayer-flv.js"), this);
                  u.loadJS(P, function() {
                    O.apply(I);
                  }, function() {
                    U && U();
                  });
                }).call(A, function() {
                  this.traceLog(y, "got js#" + parseInt(performance.now() - H)), this._isLoadedFlv = !0, N(this, R);
                }, this._options.debug, function() {
                  var O = { mediaId: A._options.vid || "", mediaAuth: A._options.mediaAuth || "", error_code: a.ErrorCode.ModuleLoadError, error_msg: "flv module load error." };
                  A.trigger(p.Player.Error, O);
                }));
              }, l.prototype._reportDumpBuffer = function() {
                var R, E;
                this.__flvDumpTimer && clearTimeout(this.__flvDumpTimer), this.__flvDumpTimer = null, this._dumpBuffer && typeof this._dumpBuffer != "string" && (1048576 < this._dumpBuffer.byteLength && (this._dumpBuffer = this._dumpBuffer.slice(0, 1048576)), R = this._dumpBuffer, this._dumpBuffer = "REPORTED", performance.now(), R = s.arrayBufferToB64(R), E = n.guid(), this.traceLog(y, "dump::" + E), this.trigger(p.Private.DumpBuffer, { id: E, data: R }));
              }, l.prototype._destroyFlv = function() {
                try {
                  this._flv && (this._flv.pause(), this._flv.destroy());
                } catch (R) {
                  console.log(R);
                }
                this.loaded = !1, this._hasLoaded = !1, this._flv = null, this._flvDumpTimer && (clearTimeout(this._flvDumpTimer), this._flvDumpTimer = null), this._dumpBuffer = null;
              }, Object.defineProperty(l.prototype, "dispose", { enumerable: !0, configurable: !0, get: function() {
                return T;
              }, set: function() {
                return T;
              } }), l.prototype.canSeekable = function(R) {
                var E;
                if (this._flv) return E = this._flv.mediaInfo, !(!this._flv._isTimepointBuffered(R) && E && !E.hasKeyframesIndex);
              }, l.prototype._getbwEstimator = function() {
                var R;
                return 1024 * ((R = this._flv) == null || (R = R.statisticsInfo) == null ? void 0 : R.speed) * 8;
              }, b = function(R, E) {
                var A = !1;
                E.on(flvjs.Events.ERROR, function(H, N, O) {
                  var F, U, M, P, I = "flvjs-error::" + H + "#" + N + "#" + O.code + "#" + O.msg, L = O.msg === "BodyStreamBuffer was aborted" && E._config.lazyLoad;
                  if (L) {
                    I += "#Maximum buffering duration exceeded, suspend transmuxing task";
                    try {
                      var V = E._msectl._sourceBuffers.video, Q = E._msectl._sourceBuffers.audio;
                      I += "#Video buffer:" + C(V) + "#Audio buffer:" + C(Q);
                    } catch {
                    }
                  }
                  R.traceLog(y, I), R._reportDumpBuffer && R._reportDumpBuffer(), H === flvjs.ErrorTypes.BUFFER_FULL || (R._flv.unload(), L) || R._isError || (F = a.ErrorCode.OtherError, U = r.get("Error_Play_Text"), M = null, N == flvjs.ErrorDetails.NETWORK_EXCEPTION ? !(V = R.getOptions().source) || V.toLowerCase().indexOf("http://") != 0 && V.toLowerCase().indexOf("https://") != 0 ? (F = a.ErrorCode.InvalidSourceURL, U = r.get("Error_Invalidate_Source_Widthout_Protocal"), A = !0) : U = navigator.onLine ? (F = a.ErrorCode.RequestDataError, r.get("Maybe_Cors_Error")) : (F = a.ErrorCode.NetworkError, r.get("Error_Network_Text")) : N == flvjs.ErrorDetails.NETWORK_STATUS_CODE_INVALID ? O.code == "404" ? (F = a.ErrorCode.NotFoundSourceURL, U = r.get("Error_Not_Found"), M = r.get("Tip_Err_Not_found")) : O.code == "403" ? (F = a.ErrorCode.AuthKeyExpired, U = r.get("Error_AuthKey_Text"), A = !0) : (F = a.ErrorCode.NetworkError, U = r.get("Error_Network_Text")) : N == flvjs.ErrorDetails.NETWORK_TIMEOUT ? (F = a.ErrorCode.LoadingTimeout, U = r.get("Error_Waiting_Timeout_Text")) : N == flvjs.ErrorDetails.MEDIA_FORMAT_UNSUPPORTED || N == flvjs.ErrorDetails.MEDIA_CODEC_UNSUPPORTED ? (F = a.ErrorCode.FormatNotSupport, U = r.get("Error_H5_Not_Support_Text") + "|codec(format:flv)", A = !0) : N === flvjs.ErrorDetails.MEDIA_MSE_ERROR && (Q = R.tag.error) && (F = a.VideoErrorCode[Q.code], U = Q.code + " || " + Q.message), I = function() {
                    var j;
                    setTimeout(function() {
                      R.trigger(p.Private.Play_Btn_Hide);
                    }), R.checkOnline() && (j = { mediaId: R._options && R._options.vid ? R._options.vid : "", error_code: F, error_msg: U, diagnosis_info: M }, R.logError(j), j.display_msg = U, c.cityBrain && (R.flv = null), R.trigger(p.Player.Error, j));
                  }, R._options && R._options.isLive && !A ? (P = R._options).liveRetry > R._liveRetryCount ? (R._liveRetryCount == 0 && R.trigger(p.Player.OnM3u8Retry), H = P.liveRetryInterval + P.liveRetryStep * R._liveRetryCount, R._liveRetryCount++, setTimeout(function() {
                    R._isError || R._liveRetryTimer || R._loadByUrlInner(P.source);
                  }, 1e3 * H)) : (R.trigger(p.Player.LiveStreamStop), I()) : N === flvjs.ErrorDetails.MEDIA_MSE_ERROR && O.code === 11 && R.getCurrentTime() < R.getDuration() ? (R._flv.unload(), R._flv.load(), R._flv.detachMediaElement(), R._flv.attachMediaElement(R.tag)) : A ? (R._flv.unload(), I()) : R._reloadForVod() || I());
                });
              });
            };
          }).call(this);
        }).call(this, "false");
      }, { "../../config": 15, "../../lang/index": 24, "../../lib/constants": 29, "../../lib/data": 31, "../../lib/io": 41, "../../lib/playerutil": 46, "../../lib/ua": 49, "../../lib/util": 51, "../base/event/eventtype": 68 }], 103: [function(d, o, x) {
        var _ = d("../base/player"), u = d("./flvinjector"), c = _.extend({ init: function(a, s) {
          u.inject(this, c, _, s, function(t) {
          }), s._native = !1, _.call(this, a, s);
        } });
        o.exports = c;
      }, { "../base/player": 91, "./flvinjector": 102 }], 104: [function(d, o, x) {
        (function(_) {
          (function() {
            function u() {
              return (u = Object.assign ? Object.assign.bind() : function(S) {
                for (var w = 1; w < arguments.length; w++) {
                  var T, C = arguments[w];
                  for (T in C) !{}.hasOwnProperty.call(C, T) || (S[T] = C[T]);
                }
                return S;
              }).apply(null, arguments);
            }
            var c, a = d("../../lib/object"), s = d("../../lib/io"), t = d("../../config"), e = d("../../lib/constants"), n = d("../../lib/util"), r = d("../../lib/playerutil"), p = d("../../lib/ua"), y = d("../../lang/index"), h = d("../base/event/eventtype"), l = "hlsinjector.js";
            function g() {
              this && this._hls && (this._hls.stopLoad(), this._hls.destroy(), this._hls = null);
            }
            function m(S) {
              this.trigger(h.Private.Timeline, { name: S, ts: performance.now() });
            }
            function v(S, w) {
              return w < S.maxNumRetry;
            }
            var f = {};
            function b(S, w) {
              w.frag.level === this.currentLevel && (this.off(c.Events.FRAG_BUFFERED, b), this.media.currentTime = this.media.currentTime + 0.01);
            }
            o.exports.inject = function(S, w, T, C, R, E) {
              S._hls2 = !1;
              var A, H, N, O = C.source, F = C.optionFormat;
              ((R || "").length || E || (E = O, A = C.useHlsPluginForSafari, C = C.useHlsPlugOnMobile, H = F, !S._hls && r.isHls(E, H) && (!r.canPlayHls() || r.isSafariUsedHlsPlugin(A) || C && r.isUsedHlsPluginOnMobile()))) && (S._Type = w, S._superType = T, S._superPt = T.prototype, S._disposed = !1, S._isHls = !0, S._hls = null, S._isLoadedHls = !1, S._stopLoadAsPaused = !0, S._yekced_saved = R, f.seek || (f.seek = T.prototype.seek), f.dispose || (f.dispose = T.prototype.dispose), S.initPlay = (function(U) {
                var M, P;
                function I(L, V) {
                  if (!L._disposed) {
                    if (L._antiRecord && (console.log("Manual check before load source"), L._antiRecord.check())) return;
                    var Q, j = !L._hls, k = (L._destroyHls(), { xhrSetup: function(W, ee) {
                      W.withCredentials = L._options.withCredentials || !1;
                    } }), D = (L._hls2 || (D = L._options.loadingTimeOut || L._options.hlsLoadingTimeOut) && (k.manifestLoadingTimeOut = D, k.levelLoadingTimeOut = D, k.fragLoadingTimeOut = D), L._hls2 && (k.manifestLoadPolicy = u({}, c.DefaultConfig.manifestLoadPolicy), k.playlistLoadPolicy = u({}, c.DefaultConfig.playlistLoadPolicy), k.fragLoadPolicy = u({}, c.DefaultConfig.fragLoadPolicy), D = L._options.isLive ? L._options.liveRetry : L._options.vodRetry, k.manifestLoadPolicy.default.errorRetry.maxNumRetry = D, L._options.isLive && (k.manifestLoadPolicy.default.errorRetry.shouldRetry = v), k.manifestLoadPolicy.default.timeoutRetry.maxNumRetry = D, k.playlistLoadPolicy.default.errorRetry.maxNumRetry = D, L._options.isLive && (k.playlistLoadPolicy.default.errorRetry.shouldRetry = v), k.playlistLoadPolicy.default.timeoutRetry.maxNumRetry = D, k.fragLoadPolicy.default.maxLoadTimeMs = 2e4, k.fragLoadPolicy.default.errorRetry.shouldRetry = v, (D = L._options.hlsOption || {}).manifestLoadPolicy && (k.manifestLoadPolicy = a.deepMerge(k.manifestLoadPolicy, D.manifestLoadPolicy), delete D.manifestLoadPolicy), D.playlistLoadPolicy && (k.playlistLoadPolicy = a.deepMerge(k.playlistLoadPolicy, D.playlistLoadPolicy), delete D.playlistLoadPolicy), D.fragLoadPolicy && (k.fragLoadPolicy = a.deepMerge(k.fragLoadPolicy, D.fragLoadPolicy), delete D.fragLoadPolicy), L._options.isLive) && !p.IS_IE11 && (k.backBufferLength = 12, k.liveDurationInfinity = !0), L._options.isLive && (L._options.hlsFrameChasing && (k.hlsFrameChasing = L._options.hlsFrameChasing), L._options.chasingFirstParagraph && (k.chasingFirstParagraph = L._options.chasingFirstParagraph), L._options.chasingSecondParagraph && (k.chasingSecondParagraph = L._options.chasingSecondParagraph), L._options.chasingFirstSpeed && (k.chasingFirstSpeed = L._options.chasingFirstSpeed), L._options.chasingSecondSpeed) && (k.chasingSecondSpeed = L._options.chasingSecondSpeed), L._options.defaultBandwidth && (k.defaultBandwidth = L._options.defaultBandwidth), L._options.hlsBandWidthUpCacheTime && (k.abrBandWidthUpCacheTime = L._options.hlsBandWidthUpCacheTime), L._options.seamlessHandover && (k.seamlessHandover = L._options.seamlessHandover), L._options.liveSyncDurationCount && (k.liveSyncDurationCount = L._options.liveSyncDurationCount), L._options.nudgeMaxRetry && (k.nudgeMaxRetry = L._options.nudgeMaxRetry), L._options.maxMaxBufferLength && (k.maxMaxBufferLength = L._options.maxMaxBufferLength), L._options.maxBufferSize && (k.maxBufferSize = L._options.maxBufferSize), L._options.fragLoadingRetryDelay && (k.fragLoadingRetryDelay = L._options.fragLoadingRetryDelay), L._options.maxBufferLength && (k.maxBufferLength = L._options.maxBufferLength), L._options.accessKeyId && (k.accessKeyId = L._options.accessKeyId), L._options.accessKeySecret && (k.accessKeySecret = L._options.accessKeySecret), L._options.securityToken && (k.securityToken = L._options.securityToken), L._options.app && (k.app = L._options.app), L._options.stream && (k.stream = L._options.stream), L._options.domain && (k.domain = L._options.domain), L._options.regionId && (k.regionId = L._options.regionId), L._yekced_saved && (k._yekcedxx = L._yekced_saved, k._vpk = L._yekced_saved), k.enableWorker = L._options.enableWorker, k.debug = L._options.debug, L._stopLoadAsPaused = L._options.hlsOption.stopLoadAsPaused, L._getPlayStartTime() + L._posOffset);
                    for (Q in D && (k.startPosition = D, console.log("hls.js startPosition => ", D)), L._options.hlsOption) k[Q] = L._options.hlsOption[Q];
                    p.IS_IE11 && (k.enableWorker = !1), L._hls = new c(k), N(L, L._hls), L._loadSourced = !1, L._hls.attachMedia(L.tag), L._hls.on(c.Events.INIT_PTS_FOUND, function(W, ee) {
                      L._initPTS = ee.initPTS;
                    }), L._hls.on(c.Events.FRAG_LOADING, function() {
                      m.call(L, "frag_s");
                    }), L._hls.on(c.Events.FRAG_LOADED, function() {
                      m.call(L, "frag_f");
                    }), L._hls.on(c.Events.FRAG_PARSED, function() {
                      m.call(L, "frag_parsed");
                    }), L._hls.on(c.Events.FRAG_PARSED, function(W, re) {
                      var re = (re == null ? void 0 : re.frag) || {}, ne = re.elementaryStreams || {}, le = "Frag(sn" + re.sn + "): " + ((le = re.startPTS) == null ? void 0 : le.toFixed(3)) + " -> " + ((le = re.endPTS) == null ? void 0 : le.toFixed(3)) + "(v:" + ((le = ne.video) == null || (le = le.startPTS) == null ? void 0 : le.toFixed(3)) + "/" + ((le = ne.video) == null || (le = le.endPTS) == null ? void 0 : le.toFixed(3)) + ";a:" + ((le = ne.audio) == null || (le = le.startPTS) == null ? void 0 : le.toFixed(3)) + "/" + ((le = ne.audio) == null || (le = le.endPTS) == null ? void 0 : le.toFixed(3)) + "); Duration: " + ((ne = re.duration) == null ? void 0 : ne.toFixed(3));
                      L.trackLogFragBuffer && (L.trackLogFragBuffer.push(le), 10 < L.trackLogFragBuffer.length) && L.trackLogFragBuffer.shift();
                    }), L._hls.on(c.Events.FRAG_PARSING_USERDATA, function(W, ee) {
                      ee && ee.dataContent && ee.dataContent.length ? L.trigger(h.Private.SeiFrame, { dataContent: ee.dataContent, pts: ee.pts }) : ee.samples.forEach(function(re) {
                        L.trigger(h.Private.SeiFrame, { dataContent: re.userDataBytes, dataContentString: re.userData, pts: re.pts, uuid: re.uuid });
                      });
                    }), L._hls.on(c.Events.MEDIA_ATTACHED, function() {
                      var W;
                      L._hls.on(c.Events.MANIFEST_PARSED, function() {
                        L._initPlayBehavior(V || L._loadSourced);
                      }), L._hls.on(c.Events.AUDIO_TRACKS_UPDATED, function(ee, re) {
                        L.trigger(h.Player.AudioTrackUpdated, re);
                      }), L._hls.on(c.Events.MANIFEST_LOADED, function(ee, re) {
                        L.trigger(h.Player.LevelsLoaded, re);
                      }), L._hls.on(c.Events.LEVEL_SWITCHED, function(ee, re) {
                        if (L._qualityService) {
                          for (var ne = L._hls.levels[re.level].url, le = L._qualityService.levels, K = "", oe = "", G = 0; G < le.length; G++) if (le[G].Url == ne) {
                            oe = le[G].desc, K = le[G].bitrate;
                            break;
                          }
                          (oe || K) && L.trigger(h.Private.QualityChange, { levelSwitch: !0, url: ne, bitrate: K, desc: oe });
                        }
                      }), L._hls.on(c.Events.AUDIO_TRACK_SWITCH, function(ee, re) {
                        L.trigger(h.Player.AudioTrackSwitch, re), setTimeout(function() {
                          L.trigger(h.Player.AudioTrackSwitched, re);
                        }, 1e3);
                      }), (L._options.autoplay || L._options.preload || V) && (L._loadSourced = !0, L._levels && 1 < L._levels.length ? (L._hls.trigger(c.Events.MANIFEST_LOADING, {}), L._hls.trigger(c.Events.MANIFEST_LOADED, { levels: L._levels })) : L._hls.loadSource(L._options.source || "__INVALID__")), j ? (L._executeReadyCallback(), L._urls && 0 < L._urls.length && (L._currentPlayIndex = r.findSelectedStreamLevel(L._urls, L._options.defaultDefinition), W = L._urls[L._currentPlayIndex], L._options.source = W.Url, L.trigger(h.Private.SourceLoaded, W))) : L.trigger(h.Private.H5_Loading_Show);
                    });
                  }
                }
                this.trigger(h.Private.H5_Loading_Show), n.contentProtocolMixed(O, "", F) ? (M = this.getOptions() || {}, (M = { mediaId: M.vid || "", mediaAuth: M.mediaAuth || "", error_code: e.ErrorCode.InvalidSourceURL, error_msg: "InvalidSourceURL" }).display_msg = y.get("Request_Block_Text"), this.trigger(h.Player.Error, M)) : (P = this)._isLoadedHls && c !== void 0 ? I(this, U) : (this.trigger(h.Private.H5_Loading_Show), this._getHlsVersion(function(L) {
                  var V = performance.now();
                  (function(Q, j, k) {
                    var D = "aliplayer-hls-min.js", W = ((j = j || {}).hls2 && (D = "aliplayer-hls2-min.js"), j.enableHlsH265 && (D = "aliplayer-hls2-hevc-min.js"), ""), W = t.domain ? "https://" + t.domain + t.path + t.h5Version + "/hls/" + D : "/build/hls/" + D, ee = (j.assetPrefix && (W = j.assetPrefix + "/hls/" + D), JSON.parse(_) && (W = "http://localhost:8080/dist/aliplayer-hls2.js"), m.call(this, "mod_hls_s"), this);
                    s.loadJS(W, function() {
                      m.call(ee, "mod_hls_f"), c = window.AliHls || window.Hls, Q.apply(ee);
                    }, function() {
                      k && k();
                    });
                  }).call(P, function() {
                    P.traceLog(l, "got js#" + parseInt(performance.now() - V)), P._isLoadedHls = !0, I(P, U);
                  }, { debug: P._options.debug, hls2: P._hls2, assetPrefix: P._options.assetPrefix, enableHlsH265: P._options.enableHlsH265 }, function() {
                    var Q = { mediaId: P._options.vid || "", mediaAuth: P._options.mediaAuth || "", error_code: e.ErrorCode.ModuleLoadError, error_msg: "hls module load error." };
                    P.trigger(h.Player.Error, Q);
                  });
                }), this.on("error", g));
              }).bind(S), S.seek = (function(U) {
                if (this._checkHlsReady()) {
                  try {
                    f.seek.call(this, U), this.tag.paused && this._stopLoadAsPaused && this._hls.startLoad(U);
                  } catch (M) {
                    console.log(M);
                  }
                  return this;
                }
              }).bind(S), S.pause = (function(U) {
                if (this.tag) {
                  if (!this._checkHlsReady()) return;
                  this.tag.pause(), this._stopLoadAsPaused && this._hls.stopLoad();
                }
                return this._isManualPause = U || !1, this;
              }).bind(S), S.play = (function(U) {
                if (this.traceLog(l, "play::" + U), U && this.trigger(h.Private.ManualPlay), this._checkHlsReady()) return this._isManualPlay = U || !1, this.trigger(h.Private.Cover_Hide), this._options.autoplay || this._options.preload || this._loadSourced || (this._loadSourced = !0, this._options._autoplay = !0, this._hls.loadSource(this._options.source)), this.tag.ended || this._ended ? this.replay() : this.tag.paused && (this.tag.play(), this._stopLoadAsPaused) && (U = this.getCurrentTime(), this._hls.startLoad(U)), this;
              }).bind(S), S.stop = (function() {
                if (this._checkHlsReady()) return this.tag.setAttribute("src", null), this._hls.stopLoad(), this;
              }).bind(S), S.dispose = (function() {
                this._disposed || (this._disposed = !0, f.dispose.call(this), this._destroyHls());
              }).bind(S), S.getCurrentPDT = (function() {
                var U, M, P;
                if (this._checkHlsReady()) return this._hls.currentLevel == -1 ? "" : this._hls.playingDate ? this._hls.playingDate.getTime() : (M = this._hls.streamController.fragPlaying || {}, (U = M.pdt) ? (M = 1e3 * M.startPTS, P = 1e3 * this.getCurrentTime(), U + (P - M)) : 0);
              }).bind(S), S.getProgramDateTime = (function() {
                if (this._checkHlsReady()) {
                  if (this._hls.currentLevel == -1) return "";
                  var U = this._hls.currentLevel, U = this._hls.levels[U].details;
                  return U && (U = U.programDateTime, U) ? new Date(U).valueOf() : 0;
                }
              }).bind(S), S._checkHlsReady = (function() {
                return this._hls != null || (console.warn("please invoke this method after ready event"), !1);
              }).bind(S), S._getHlsVersion = (function(U) {
                this._options.useHls2 === !0 ? (this._hls2 = !0, U()) : this._options.useHls2 === !1 && U();
              }).bind(S), S._getbwEstimator = (function() {
                var U = NaN;
                {
                  var M;
                  this._hls && (M = this._hls.abrController._bwEstimator, U = M ? M.getEstimate() : this._hls.bandwidthEstimate);
                }
                return U;
              }).bind(S), S._destroyHls = (function() {
                this._hls && this._hls.destroy(), this._hls = null, this.trackLogFragBuffer = [];
              }).bind(S), S._switchLevel = (function(U) {
                for (var M = this, P = (this.traceLog(l, "switchLevel::" + U), this.trigger(h.Player.LevelSwitch), this._hls.levels), I = !0, L = 0; L < P.length; L++) if (P[L].url == U || P[L].url[0] == U) {
                  I = !1, this._hls2 && this._options.seamlessHandover ? (this._hls.loadLevel = L, console.log("Seamlessly set nextLevel to", L)) : (this._hls.on(c.Events.FRAG_BUFFERED, b), this._hls.currentLevel = L, console.log("Immediately set currentLevel to", L));
                  break;
                }
                I && (this._hls.on(c.Events.FRAG_BUFFERED, b), this._hls.currentLevel = -1), this._switchedLevel = !0, setTimeout(function() {
                  M.trigger(h.Player.LevelSwitched), M._switchedLevel = !1;
                }, 1e3);
              }).bind(S), N = function(U, M) {
                M.on(c.Events.MANIFEST_LOADING, function() {
                  m.call(U, "mani_s");
                }), M.on(c.Events.MANIFEST_LOADED, function() {
                  m.call(U, "mani_f");
                }), M.on(c.Events.DEFAULT_BANDWIDTH, function(P, I) {
                  U.trigger(h.Player.DefaultBandWidth, { width: I.width, height: I.height, bitrate: I.bitrate });
                }), M.on(c.Events.ERROR, function(P, I) {
                  var L = "hlsjs-error::" + I.type + "#" + I.details + "#" + ((L = I.networkDetails) == null ? void 0 : L.status) + "#" + I.reason + "#bw:" + (U._getbwEstimator() / 8 / 1024).toFixed(2) + "KB";
                  if (I.details === "manifestParsingError") try {
                    L += "#" + I.networkDetails.getResponseHeader("Content-Type") + "#" + I.networkDetails.getResponseHeader("Content-Length");
                  } catch {
                  }
                  else if (I.details === "fragLoadError" || I.details === "fragLoadTimeOut") L += "#" + I.frag.url + "#retry:" + ((re = I.errorAction) == null ? void 0 : re.retryCount);
                  else if (I.details === "internalException") try {
                    L += "#" + I.event + "#" + ((j = I.error) == null ? void 0 : j.message) + "#" + ((Q = I.error) == null ? void 0 : Q.stack);
                  } catch {
                  }
                  I.details !== "internalException" && (L += "#" + I.error);
                  try {
                    L += "#" + (U == null || (le = U.trackLogFragBuffer) == null ? void 0 : le.toString());
                  } catch {
                  }
                  if (U.traceLog(l, L), U._options && I.details != c.ErrorDetails.FRAG_LOOP_LOADING_ERROR && U._seeking != 1 && I.fatal != 0) {
                    U._clearTimeout();
                    var V, Q, j, k = e.ErrorCode.LoadedMetadata, D = y.get("Error_Play_Text"), W = !1, ee = null, re = !1, ne = (I.details == c.ErrorDetails.MANIFEST_LOAD_ERROR || I.details == c.ErrorDetails.LEVEL_LOAD_ERROR ? (W = !0, j = I.networkDetails, V = Number(j.status), U.liveShiftSerivce && U.liveShiftSerivce.isLiveShiftPlaying() && V === 404 ? (k = e.ErrorCode.NotFoundSourceURL, D = y.get("Error_Liveshift_M3U8_Not_Found_Text"), re = !0) : V === 404 ? (k = e.ErrorCode.NotFoundSourceURL, D = y.get("Error_Not_Found"), ee = y.get("Tip_Err_Not_found")) : V === 403 ? (Q = r.parseHttpHeaders(j)["x-tengine-error"]) && -1 < e.RegionBlockMessages.indexOf(Q) ? (k = e.ErrorCode.RegionBlock, D = y.get("Error_Region_Block_Text"), ee = y.get("Tip_Err_Blocked")) : (k = e.ErrorCode.AuthKeyExpired, D = y.get("Error_AuthKey_Text")) : D = V === 0 && navigator.onLine ? (k = e.ErrorCode.RequestDataError, D + "，" + y.get("Maybe_Cors_Error")) : y.get("Error_Load_M3U8_Failed_Text")) : I.details == c.ErrorDetails.MANIFEST_LOAD_TIMEOUT || I.details == c.ErrorDetails.LEVEL_LOAD_TIMEOUT ? (W = !0, D = y.get("Error_Load_M3U8_Timeout_Text")) : I.details == c.ErrorDetails.MANIFEST_PARSING_ERROR || I.details == c.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR ? (W = !0, D = y.get("Error_M3U8_Decode_Text")) : I.type == c.ErrorTypes.NETWORK_ERROR ? (k = e.ErrorCode.NetworkError, D = y.get("Error_Network_Text")) : I.type != c.ErrorTypes.MUX_ERROR && I.type != c.ErrorTypes.MEDIA_ERROR || (k = e.ErrorCode.PlayDataDecode, D = y.get("Error_TX_Decode_Text")), D = D + "(" + I.details + ")", function() {
                      var oe;
                      setTimeout(function() {
                        U.trigger(h.Private.Play_Btn_Hide);
                      }), U.checkOnline() && (oe = { mediaId: (oe = U.getOptions() || {}).vid || "", mediaAuth: oe.mediaAuth || "", error_code: k, error_msg: I.details, diagnosis_info: ee }, U.logError(oe), oe.display_msg = D, U.trigger(h.Player.Error, oe));
                    }), le = function() {
                      U._liveErrorHandle && clearTimeout(U._liveErrorHandle), M.stopLoad(), U.trigger(h.Player.LiveStreamStop), U._liveErrorHandle = setTimeout(ne, 500);
                    }, K = U._options;
                    if (K.isLive && re) le();
                    else if (U._hls2) {
                      if (W && K.isLive) if (K.hlsOption.progressive) {
                        if (K.liveRetry > U._liveRetryCount) return U._liveRetryCount == 0 && U.trigger(h.Player.OnM3u8Retry), U.trigger(h.Private.H5_Loading_Show), U._hls.stopLoad(), U._liveRetryCount++, void setTimeout(function() {
                          U.traceLog(l, "retry when live error in progressive mode#" + U._liveRetryCount), U._hls.loadSource(K.source);
                        }, 1e3 * U._liveRetryCount);
                      } else ((L = I.errorAction) == null ? void 0 : L.retryCount) === 0 && U.trigger(h.Player.OnM3u8Retry);
                      I.fatal && le();
                    } else K.isLive ? K.liveRetry > U._liveRetryCount ? (U._liveRetryCount == 0 && U.trigger(h.Player.OnM3u8Retry), j = K.liveRetryInterval + K.liveRetryStep * U._liveRetryCount, U._liveRetryCount++, U.trigger(h.Private.H5_Loading_Show), setTimeout(function() {
                      W && U._loadByUrlInner(U._options.source, 0, !0);
                    }, 1e3 * j)) : le() : (W && -1 < [403, 404].indexOf(V) || !U._reloadForVod()) && ne();
                  }
                });
              });
            };
          }).call(this);
        }).call(this, "false");
      }, { "../../config": 15, "../../lang/index": 24, "../../lib/constants": 29, "../../lib/io": 41, "../../lib/object": 43, "../../lib/playerutil": 46, "../../lib/ua": 49, "../../lib/util": 51, "../base/event/eventtype": 68 }], 105: [function(d, o, x) {
        var _ = d("../base/player"), u = d("./hlsinjector"), c = _.extend({ init: function(a, s) {
          s._native = !1, u.inject(this, c, _, s), _.call(this, a, s);
        } });
        o.exports = c;
      }, { "../base/player": 91, "./hlsinjector": 104 }], 106: [function(d, o, x) {
        var _ = ["extraInfo"];
        function u() {
          return (u = Object.assign ? Object.assign.bind() : function(v) {
            for (var f = 1; f < arguments.length; f++) {
              var b, S = arguments[f];
              for (b in S) !{}.hasOwnProperty.call(S, b) || (v[b] = S[b]);
            }
            return v;
          }).apply(null, arguments);
        }
        var c = typeof Promise > "u" ? d("es6-promise").Promise : Promise, a = d("../../lib/io"), s = d("../../config"), t = d("../../lib/constants"), e = d("../../lang/index"), n = d("../base/event/eventtype"), r = d("../../lib/ua"), p = d("../base/event/eventtype"), y = d("../../lib/playerutil"), h = "rtsinjector.js";
        function l(v) {
          var f, b, S, w, T = this._options;
          T.rtsFallback && window.Aliplayer ? ((f = T.rtsFallbackSource) || ((b = String(T.rtsFallbackType || "").toUpperCase()) && !["HLS", "FLV"].includes(b) && (console.warn("invalid rtsFallbackType:", T.rtsFallbackType, ", will use flv -> hls as fallback"), b = ""), b = b || (y.isSupportFlv() ? "FLV" : "HLS"), S = T.source, w = !S.includes("@subvideo=no"), S = !S.includes("@subaudio=no"), S = (w = { enableVideo: w, enableAudio: S }).enableVideo, w = w.enableAudio, b === "FLV" ? (T.flvOption = T.flvOption || {}, w || (T.flvOption.hasAudio = !1), S || (T.flvOption.hasVideo = !1)) : b !== "HLS" || w || (T.mute = !0), f = ((C, E) => {
            var E = E === "FLV" ? "flv" : "m3u8", A = window.location.protocol, A = (-1 < ["http:", "https:"].indexOf(A) ? A : "https:") + "//";
            return (C = C.replace("artc://", A).replace("?", "." + E + "?").replace("@subvideo=no", "").replace("@subaudio=no", "")).includes("?") || (C += "." + E), C.includes("auth_key") && (C += "&rts_degrade=on"), C;
          })(T.source, b)), this.trigger(n.Player.RtsFallback, { reason: v, fallbackUrl: f }), this.loadByUrl(f)) : (this.trigger(n.Player.Error, v), this.logError(v));
        }
        function g(v) {
          var f = this, b = (this.trigger(n.Private.H5_Loading_Show), this.trigger(n.Private.Play_Btn_Hide), this._options), S = new m(f, v);
          return f._rts.subscribe(b.source, u({ retryTimes: b.rtsFallback ? 1 : void 0, mediaTimeout: b.rtsLoadDataTimeout }, b.rtsOption || {})).then(function(w) {
            return S.preProcess(), f.tag.srcObject = null, w.play(f.tag), r.IS_IOS && Number(r.IOS_VERSION) <= 14 && f.one(p.Player.TimeUpdate, function() {
              setTimeout(function() {
                f.tag.pause(), f.tag.play();
              }, 200);
            }), !0;
          }).catch(function(w) {
            return f.traceLog(h, "subError::" + JSON.stringify(w)), !1;
          });
        }
        o.exports.inject = function(v, f, b, S, w, T) {
          function C() {
            this._disposed || (this._disposed = !0, this._superPt && this._superPt.dispose.call(this), this._destroyRts());
          }
          v._Type = f, v._superType = b, v._superPt = b.prototype, v._disposed = !1, f.prototype._checkRtsReady = function() {
            return this._rts != null || (console.warn("please invoke this method after ready event"), !1);
          }, v._isRts = !0, v._rts = null, v._isLoadedRts = !1, v.bind_rtsErrorEventHandler = null, v.bind_rtsReconnectEventHandler = null, f.prototype.play = function(R) {
            if (this.traceLog(h, "play::" + R), R && this.trigger(n.Private.ManualPlay), this._checkRtsReady() && (this._isManualPlay = R || !1, this.paused()))
              return this.trigger(n.Private.Cover_Hide), this.trigger(n.Private.Play_Btn_Hide), g.call(this), this;
          }, f.prototype.seek = function(R) {
          }, f.prototype.setSpeed = function(R) {
          }, f.prototype.stop = function() {
            return this._rts && this._rts.unsubscribe(), this;
          }, Object.defineProperty(f.prototype, "dispose", { enumerable: !0, configurable: !0, get: function() {
            return C;
          }, set: function() {
            return C;
          } }), f.prototype._destroyRts = function() {
            this._rts && (this.stop(), this._rts.off("onError", this.bind_rtsErrorEventHandler), this._rts.off("reconnect", this.bind_rtsReconnectEventHandler)), this._rts = null;
          }, f.prototype.initPlay = function(R) {
            var E, A = this;
            function H(N, O) {
              var F;
              N._disposed || (F = !N._rts, N._destroyRts(), N._rts = new AliRTS.createClient({ customReporter: function(U) {
                if (Number(U.msgid) === 126) {
                  var M = {};
                  try {
                    M = JSON.parse(U.args);
                  } catch {
                    M = {};
                  }
                  M.tcid && N._rts && (N._rts.traceid = M.tcid, N.traceLog(h, "tcid::" + M.tcid), N.trigger(n.Player.RtsTraceId, { traceId: M.tcid, source: N._options.source }));
                }
              } }), N._checkRtsSupport(function(U) {
                (function(M) {
                  var P = this._rtsErrorEventHandler.bind(this), P = (this.bind_rtsErrorEventHandler = P, M.on("onError", P), this._rtsReconnectEventHandler.bind(this));
                  this.bind_rtsReconnectEventHandler = P, M.on("reconnect", P);
                }).call(N, N._rts), N._options.autoplay ? g.call(N).then(function(M) {
                  M && N._initPlayBehavior(O);
                }) : N._initPlayBehavior(O), F && N._executeReadyCallback();
              }, function(U) {
                console.log("[RTS isSupport error]", U);
                var M = null, P = null;
                switch (Number(U.errorCode)) {
                  case 10110:
                    M = t.ErrorCode.RtsNotSupportWebRtc, P = e.get("Rts_Err_Not_Support_Webrtc");
                    break;
                  case 10111:
                    M = t.ErrorCode.RtsBrowserNotSupport, P = e.get("Rts_Err_Browser_Not_Support");
                    break;
                  case 10112:
                    M = t.ErrorCode.RtsBrowserVersionTooLow, P = e.get("Rts_Err_Browser_Version_Too_Low");
                    break;
                  case 10113:
                    M = t.ErrorCode.RtsNotSupportH264, P = e.get("Rts_Err_Not_Support_H264");
                    break;
                  case 10114:
                    M = t.ErrorCode.RtsCreateOfferError, P = e.get("Rts_Err_Create_Offer_Error");
                }
                return l.call(N, { error_code: M, error_msg: P }), !1;
              }));
            }
            this._isLoadedRts ? H(this, R) : (this.trigger(n.Private.H5_Loading_Show), E = performance.now(), (function(N, O, F) {
              var M = "", U = this._options, M = "https://g.alicdn.com/apsara-media-box/imp-web-rts-sdk/" + (U.rtsVersion || s.rtsVersion) + "/aliyun-rts-sdk.js", P = (U.assetPrefix && (M = U.assetPrefix + "/rts/aliyun-rts-sdk.js"), U.rtsSdkUrl && (M = U.rtsSdkUrl), this);
              a.loadJS(M, function() {
                N.apply(P);
              }, function() {
                F && F();
              });
            }).call(A, function() {
              this.traceLog(h, "got js#" + parseInt(performance.now() - E)), this._isLoadedRts = !0, H(this, R);
            }, this._options.debug, function() {
              var N = { error_code: t.ErrorCode.ModuleLoadError, error_msg: "rts module load error." };
              A.trigger(n.Player.Error, N);
            }));
          }, f.prototype.getStats = function() {
            return this._rts && this._rts.getTransportStats ? c.all([this._rts.getTransportStats(), this._rts.getRemoteVideoStats(), this._rts.getRemoteAudioStats()]).then(function(H) {
              var E = H[0], A = H[1], H = H[2];
              return { rtt: E.rtt, bytesReceived: E.bytesReceived, framesDecoded: A.framesDecoded, packetsLost: (A.packetsLost || 0) + (H.packetsLost || 0), packetsReceived: (A.packetsReceived || 0) + (H.packetsReceived || 0), timestamp: E.timestamp || Date.now() };
            }).catch(function(R) {
              return console.log("ERR in RTS getstats: ", R), {};
            }) : c.resolve();
          }, f.prototype._checkRtsSupport = function(R, E) {
            this._options.skipRtsSupportCheck ? R() : this._rts.isSupport({ isReceiveVideo: !0 }).then(R).catch(E);
          }, f.prototype._rtsErrorEventHandler = function(R) {
            console.log("RTS Error:", R), R.extraInfo;
            var E = ((P, I) => {
              if (P == null) return {};
              var L, V = {};
              for (L in P) if ({}.hasOwnProperty.call(P, L)) {
                if (I.indexOf(L) !== -1) continue;
                V[L] = P[L];
              }
              return V;
            })(R, _), A = (this.traceLog(h, "rtsError::" + JSON.stringify(E)), null), H = null, N = null;
            switch (Number(R.errorCode)) {
              case 10201:
                return;
              case 10101:
                A = t.ErrorCode.RtsSignalError, H = e.get("Rts_Err_Http_Signal_Error");
                break;
              case 10114:
                A = t.ErrorCode.RtsCreateOfferError, H = e.get("Rts_Err_Create_Offer_Error");
                break;
              case 10202:
                A = t.ErrorCode.RtsPlayUrlError, H = e.get("Rts_Err_Play_Url_Error");
                break;
              case 10203:
                A = t.ErrorCode.RtsSubscribeNonthing, H = e.get("Rts_Err_Subscribe_Nonthing");
                break;
              case 10205:
                var O = (O = R.extraInfo) == null ? void 0 : O.response;
                if ((O == null ? void 0 : O.status) === 403) {
                  var F = O.headers["x-tengine-error"];
                  if (F && -1 < t.RegionBlockMessages.indexOf(F)) {
                    A = t.ErrorCode.RegionBlock, H = e.get("Error_Region_Block_Text"), N = e.get("Tip_Err_Blocked");
                    break;
                  }
                  A = t.ErrorCode.AuthKeyExpired, H = e.get("Error_AuthKey_Text");
                } else N = (O == null ? void 0 : O.status) === 404 ? (A = t.ErrorCode.NotFoundSourceURL, H = e.get("Error_Not_Found"), e.get("Tip_Err_Not_found")) : (A = t.ErrorCode.RtsHttpRequestFaild, H = e.get("Rts_Err_Http_Request_Failed"), e.get("Tip_Err_Rts_Http_Failed"));
                break;
              case 10206:
                A = t.ErrorCode.RtsHttpAnswerFaild, H = e.get("Rts_Err_Http_Answer_Failed");
                break;
              case 10207:
                A = t.ErrorCode.RtsPlayFailedError;
                try {
                  var U, M = (U = R.message.match(/after (\d+) ms/)) == null ? void 0 : U[1];
                } catch {
                }
                H = e.get("Rts_Err_Play_Failed") + ", " + (M ? M * R.extraInfo.retryTimes / 1e3 + e.get("Rts_Err_No_Data_For") : R.message);
                break;
              case 12e3:
                A = t.ErrorCode.RtsPeerConnectionUnknown, H = e.get("Rts_Err_PeerConnection_Unknown");
            }
            E = { error_code: A, error_msg: H, diagnosis_info: N, tcid: this._rts.traceid }, (function(P) {
              var I = this;
              I.pause(), setTimeout(function() {
                I.trigger(n.Private.Play_Btn_Hide);
              }), I.checkOnline() && l.call(this, P);
            }).call(this, E);
          }, f.prototype._rtsReconnectEventHandler = function(R) {
            var E = this;
            this.traceLog(h, "rts auto reconnect::" + R.retryTimes + "#" + JSON.stringify(R.reason)), this.waiting = !0, this._TimeUpdateStamp = 0, this.trigger(n.Private.H5_Loading_Show), this.trigger(n.Private.Play_Btn_Hide), this._options.autoplay && this.one(p.Player.AutoPlayPrevented, function() {
              E.trigger(n.Private.Play_Btn_Hide), E.trigger(n.Private.H5_Loading_Show);
            }), R.retryTimes === 1 && this.trigger(n.Player.OnM3u8Retry), this.trigger(n.Private.Retry, { type: "rts", source: this._options.source });
          };
        };
        var m = (() => {
          function v(f, b) {
            (this.isRetry = b) && (this.isApple = r.IS_IOS || r.IS_SAFARI, this.player = f);
          }
          return v.prototype.preProcess = function() {
            var f, b, S;
            this.isRetry && this.isApple && (f = this.player.getVolume(), b = this.player.muted(), f) && !b && ((S = this.player.tag).volume = 0, this.player.one("canplay", function() {
              S.volume = f;
            }));
          }, v;
        })();
      }, { "../../config": 15, "../../lang/index": 24, "../../lib/constants": 29, "../../lib/io": 41, "../../lib/playerutil": 46, "../../lib/ua": 49, "../base/event/eventtype": 68, "es6-promise": 9 }], 107: [function(d, o, x) {
        var _ = d("../base/player"), u = d("./rtsinjector"), c = _.extend({ init: function(a, s) {
          s.isLive && (s._native = !1, u.inject(this, c, _, s), _.call(this, a, s));
        } });
        o.exports = c;
      }, { "../base/player": 91, "./rtsinjector": 106 }], 108: [function(u, o, x) {
        var _ = u("../../lib/constants"), u = u("../../lib/oo").extend({ init: function(c) {
          this.player = c, this.tickhandle = null;
        } });
        u.prototype.tick = function(c, a) {
          var s = this;
          this.tickhandle = setTimeout(function() {
            s.player && s.player.trigger(_.AuthKeyExpiredEvent), a && a();
          }, 1e3 * c);
        }, u.prototype.clearTick = function(c) {
          this.tickhandle && clearTimeout(this.tickhandle);
        }, o.exports = u;
      }, { "../../lib/constants": 29, "../../lib/oo": 44 }], 109: [function(d, o, x) {
        function _(m, v, f) {
          var S = s.randomUUID(), b = "https://mts." + m.domainRegion + ".aliyuncs.com/?", S = { AccessKeyId: m.accessId, Action: "GetLicense", MediaId: m.vid, LicenseUrl: b, data: m.data, SecurityToken: m.stsToken, Format: "JSON", Type: m.encryptionType, Version: "2014-06-18", SignatureMethod: "HMAC-SHA1", SignatureVersion: "1.0", SignatureNonce: S };
          m.header && (S.Header = m.header), b += "Signature=" + s.AliyunEncodeURI(s.makeChangeSiga(S, m.accessSecret, "POST")), m = s.makeUTF8sort(S, "=", "&"), u.post(b, m, function(w) {
            w ? (w = JSON.parse(w), v && (w = w.License, v(w))) : f && f(t.createError("MPS获取License失败"));
          }, function(w) {
            if (f) {
              var T = { Code: "", Message: r.get("Error_MTS_Fetch_Urls_Text") };
              try {
                T = JSON.parse(w);
              } catch {
              }
              f({ Code: a.ErrorCode.ServerAPIError, Message: T.Code + "|" + T.Message, sri: T.RequestId || "" });
            }
          });
        }
        var u = d("../../lib/io"), c = (d("../../lib/ua"), d("../../lib/bufferbase64")), a = d("../../lib/constants"), s = d("./signature"), t = d("./util"), e = d("../../lib/url"), n = d("../../lib/playerutil"), r = d("../../lang/index"), p = d("../base/event/eventtype");
        function y(m) {
          window.console.error("The license request failed.");
        }
        function h(m) {
          window.console.error("A decryption key error was encountered"), window.console.error("A decryption key error was encountered", m);
        }
        function l(m) {
          window.console.log("Decryption key was added to session.");
        }
        function g(m, v, f) {
          f.addEventListener(m, function() {
            v(arguments[0]);
          }, !1);
        }
        o.exports.requestLicenseKey = function(m) {
          var v = m;
          return v._options.vid && (v.__vid = v._options.vid), function(f, b) {
            var S, w, T = v._options, C = v._getDRMEncryptItem();
            C && (S = { vid: v.__vid, accessId: T.accId, accessSecret: T.accSecret, stsToken: T.stsToken, domainRegion: T.domainRegion, authInfo: T.authInfo, encryptionType: C.encryptionType }, C.encryptionType == a.EncryptionType.Widevine ? S.data = c.encode(f.message) : C.encryptionType == a.EncryptionType.PlayReady && (T = c.unpackPlayReady(f.message), S.data = T.changange, T.header) && (S.header = JSON.stringify(T.header)), console.log(S.data), f = v.__licenseKeys, w = v.__vid + C.Url, f && f[w], _(S, function(R) {
              v.__licenseKeys || (v.__licenseKeys = {}), 10 < S.data.length && (v.__licenseKeys[w] = R), R = c.decode(R), b(R);
            }, function(R) {
              R = { mediaId: v.__vid, error_code: R.Code, error_msg: R.Message }, v.logError(R), v.trigger("error", R);
            }));
          };
        }, o.exports.loadCertificate = function(R, C) {
          var f, b, S, w = new XMLHttpRequest(), T = (w.addEventListener("load", (function(E, N) {
            var H, N = N.target;
            if (N.status !== 200) {
              var F = a.ErrorCode.DrmLicenseRequestFailed, O = r.get("Error_Drm_License_Request_Failed"), F = { mediaId: this._options.vid || "", error_code: F, error_msg: N.response };
              player.logError(F), F.display_msg = O, player.trigger(p.Player.Error, F);
            } else {
              try {
                H = this._options.isLive ? JSON.parse(N.response).Response.B64ServCert : JSON.parse(JSON.parse(N.response).DRMCertInfo).b64ServCert;
              } catch (U) {
                console.log(U);
              }
              O = s.base64DecodeUint8Array(H), F = (function(U, I) {
                var P = I.target, I = I.initData, L = s.arrayToString(I).split("skd://")[1].split("?")[0], V = s.stringToArray(L);
                if (I = ((Q, j, k) => {
                  typeof j == "string" && (j = stringToArray(j));
                  var D = 0, W = new ArrayBuffer(Q.byteLength + 4 + j.byteLength + 4 + k.byteLength), ee = new DataView(W);
                  return new Uint8Array(W, 0, Q.byteLength).set(Q), D += Q.byteLength, ee.setUint32(D, j.byteLength, !0), D += 4, (Q = new Uint16Array(W, D, j.length)).set(j), D += Q.byteLength, ee.setUint32(D, k.byteLength, !0), D += 4, new Uint8Array(W, D, k.byteLength).set(k), new Uint8Array(W, 0, W.byteLength);
                })(I, V, U), P.webkitKeys || ((() => {
                  if (!WebKitMediaKeys.isTypeSupported("com.apple.fps.1_0", "video/mp4")) throw "Key System not supported";
                  keySystem = "com.apple.fps.1_0";
                })(), P.webkitSetMediaKeys(new WebKitMediaKeys(keySystem))), !P.webkitKeys) throw "Could not create MediaKeys";
                if (V = P.webkitKeys.createSession("video/mp4", I), !V) throw "Could not create key session";
                V.contentId = L, g("webkitkeymessage", (function(W) {
                  var j = this, k = W.target, le = W.message, D = new XMLHttpRequest(), W = (W.sessionId, D.responseType = "text", D.session = k, D.addEventListener("load", (function(oe) {
                    oe = oe.target, G = this._options.isLive ? JSON.parse(oe.response).Response.B64License : JSON.parse(JSON.parse(oe.response).License).b64License;
                    var G = s.base64DecodeUint8Array(G), G = s.Uint8ArrayToString(G);
                    G.substr(0, 5) === "<ckc>" && G.substr(-6) === "</ckc>" && (G = G.slice(5, -6)), G = s.base64DecodeUint8Array(G), oe.session.update(G);
                  }).bind(this), !1), D.addEventListener("error", y, !1), btoa("spc=" + s.base64EncodeUint8Array(le) + "&assetId=" + encodeURIComponent(k.contentId))), ee = { Format: "JSON", SignatureMethod: "HMAC-SHA1", SignatureVersion: "1.0", Timestamp: s.ISODateString(/* @__PURE__ */ new Date()), SignatureNonce: s.randomUUID(), AccessKeyId: j._options.accessKeyId, SecurityToken: j._options.securityToken, CertId: j._options.certId };
                  j._options.isLive ? (ee.RegionId = j._options.region, ee.Action = "DescribeDRMLicense", ee.Version = "2016-11-01", ee.CdmData = W, ee.Type = "fairplay", ee.Domain = e.parseUrl(j._options.source).hostname) : (ee.region = j._options.region, ee.Action = "GetDRMLicense", ee.Version = "2017-03-21", ee.VideoId = j._options.vid, ee.CDMData = W, ee.DRMType = "FairPlay");
                  var re, ne, le = "Signature=" + s.AliyunEncodeURI(s.makeChangeSiga(ee, j._options.accessKeySecret, "POST"));
                  k = j._options.isLive ? "https://" + n.getLiveHostByRegion(j._options.region) + "/?" + le : "https://vod." + j._options.region + ".aliyuncs.com/?" + le;
                  for (ne in D.open("POST", k, !0), D.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), ee) {
                    var K;
                    ee.hasOwnProperty(ne) && (K = ee[ne], re = re ? re + "&" + s.AliyunEncodeURI(ne) + "=" + s.AliyunEncodeURI(K) : s.AliyunEncodeURI(ne) + "=" + s.AliyunEncodeURI(K));
                  }
                  D.send(re);
                }).bind(this), V), g("webkitkeyadded", l, V), g("webkitkeyerror", h, V);
              }).bind(this, O), N = (this._fairPlayHandlers.onNeedKey = F, (function(U) {
                window.console.error("A video playback error occurred");
              }).bind(this)), this._fairPlayHandlers.onError = N, this.tag.addEventListener("webkitneedkey", F, !1), this.tag.addEventListener("error", N, !1), this.tag.src = this._options.source;
            }
            E && E();
          }).bind(R, C), !1), w.addEventListener("error", (function(E) {
            window.console.error("Failed to retrieve the server certificate.");
          }).bind(R), !1), { Format: "JSON", SignatureMethod: "HMAC-SHA1", SignatureVersion: "1.0", Timestamp: s.ISODateString(/* @__PURE__ */ new Date()), SignatureNonce: s.randomUUID(), AccessKeyId: R._options.accessKeyId, SecurityToken: R._options.securityToken, CertId: R._options.certId }), C = (R._options.isLive ? (T.RegionId = R._options.region, T.Action = "DescribeDRMCertificate", T.Version = "2016-11-01") : (T.region = R._options.region, T.Action = "GetDRMCertInfo", T.Version = "2017-03-21", T.VideoId = R._options.vid), "Signature=" + s.AliyunEncodeURI(s.makeChangeSiga(T, R._options.accessKeySecret, "POST"))), R = R._options.isLive ? "https://" + n.getLiveHostByRegion(R._options.region) + "/?" + C : "https://vod." + R._options.region + ".aliyuncs.com/?" + C;
          for (f in w.open("POST", R, !0), w.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), T) T.hasOwnProperty(f) && (b = T[f], S = S ? S + "&" + s.AliyunEncodeURI(f) + "=" + s.AliyunEncodeURI(b) : s.AliyunEncodeURI(f) + "=" + s.AliyunEncodeURI(b), console.log(b));
          w.send(S);
        }, o.exports.getRequestUrl = function(f, v) {
          var f = { AccessKeyId: v._options.accessKeyId, Format: "JSON", Version: "2016-11-01", SignatureMethod: "HMAC-SHA1", SignatureVersion: "1.0", Timestamp: s.ISODateString(/* @__PURE__ */ new Date()), SignatureNonce: s.randomUUID(), SecurityToken: v._options.securityToken, RegionId: v._options.region, Action: "DescribeDRMLicense", Type: "widevine", CdmData: f, Domain: e.parseUrl(v._options.source).hostname }, b = (v._options.widevineCertId && (f.CertId = v._options.widevineCertId), "Signature=" + s.AliyunEncodeURI(s.makeChangeSiga(f, v._options.accessKeySecret, "POST")));
          return { url: "https://" + n.getLiveHostByRegion(v._options.region) + "/?" + b, data: s.makeUTF8sort(f, "=", "&"), jsonData: s.makeUTF8sort(f, "=", "&", "json") };
        }, o.exports.postData = function(b, v) {
          var f = s.randomUUID(), f = { AccessKeyId: v._options.accessKeyId, VideoId: v._options.vid, Format: "JSON", Version: "2017-03-21", SignatureMethod: "HMAC-SHA1", SignatureVersion: "1.0", SignatureNonce: f, SecurityToken: v._options.securityToken, region: v._options.region, Action: "GetDRMLicense", DRMType: "Widevine", CDMData: b }, b = (v._options.widevineCertId && (f.CertId = v._options.widevineCertId), "Signature=" + s.AliyunEncodeURI(s.makeChangeSiga(f, v._options.accessKeySecret, "POST")));
          return { url: "https://vod." + v._options.region + ".aliyuncs.com/?" + b, data: s.makeUTF8sort(f, "=", "&"), jsonData: s.makeUTF8sort(f, "=", "&", "json") };
        }, o.exports.destroyFairPlay = function() {
          this._fairPlayHandlers.onNeedKey && this.tag.removeEventListener("webkitneedkey", this._fairPlayHandlers.onNeedKey), this._fairPlayHandlers.onError && this.tag.removeEventListener("error", this._fairPlayHandlers.onError), this._fairPlayHandlers = {};
        };
      }, { "../../lang/index": 24, "../../lib/bufferbase64": 26, "../../lib/constants": 29, "../../lib/io": 41, "../../lib/playerutil": 46, "../../lib/ua": 49, "../../lib/url": 50, "../base/event/eventtype": 68, "./signature": 115, "./util": 116 }], 110: [function(d, o, x) {
        var _ = d("../../lib/io"), u = d("../../lib/constants"), c = d("../../lib/data"), a = d("./util");
        o.exports.getDataByAuthInfo = function(s, t, e, n) {
          s = { playAuth: s.playAuth, requestId: s.requestId }, _.get("https://api.h5video.shop/api/page/getMediaPlayInfo" + ((r) => (r.requestId = c.guid(), Object.keys(r).reduce(function(p, y) {
            return p + (p ? "&" : "?") + y + "=" + encodeURIComponent(r[y]);
          }, "")))(s), function(r) {
            if (r)
              if (r = JSON.parse(r), r.httpStatusCode !== 200) n && n({ Code: u.ErrorCode.ServerAPIError, Message: r.httpStatusCode + "|" + r.code, sri: r.requestId });
              else {
                for (var p = r.data.PlayInfoList, y = [], h = p.length - 1; 0 <= h; --h) p[h].Definition === "AUTO" && (y = [p.splice(h, 1)[0]]);
                var l, g = null;
                (g = (g = y.length === 0 ? a.objectPlayerMessageSort(p, t) : a.objectPlayerMessageSort(y)).map(function(m) {
                  return m.format === "m3u8" && (m.Url = m.Url + "&_ext=.m3u8"), m;
                })) && e && (l = r.data.VideoBase || {}, e({ videoId: l.VideoId, userId: l.UserId, requestId: r.requestId, urls: g, encryptUrlArr: [], thumbnailUrl: "", coverUrl: l.CoverURL, playInfoAry: p, textTracks: r.data.SubtitlesList }));
              }
            else n && n(a.createError("轻SaaS服务获取数据失败"));
          }, function(r) {
            r && typeof r == "string" && -1 < r.indexOf("Invalid CORS request") ? n && n({ Code: u.ErrorCode.ServerAPIError, Message: r }) : n && n(a.createError("轻SaaS服务获取数据失败"));
          });
        };
      }, { "../../lib/constants": 29, "../../lib/data": 31, "../../lib/io": 41, "./util": 116 }], 111: [function(a, o, x) {
        var _ = a("./saasplayer"), u = a("./light"), c = a("../base/event/eventtype"), a = _.extend({ init: function(s, t) {
          _.call(this, s, t), this.service = u, this.loadByLightSaas();
        } });
        a.prototype.loadByLightSaas = function(s) {
          var t = this._options, e = { playAuth: t.mediaAuth, defaultDefinition: t.defaultDefinition };
          this.log("STARTFETCHDATA", { it: "lightSaasPlayAuth", pa: { playAuth: t.mediaAuth } }), this.loadData(e, s);
        }, a.prototype.replayByMediaAuth = function(s) {
          this.trigger(c.Private.Error_Hide), this.tag && (this.tag.pause(), this.tag.removeAttribute("src"), this.tag.load()), this.setTextTracks([]), this.trigger(c.Private.UserTrackReset), this._options.source = "", this._options.mediaAuth = s, this._isError = !1, this._options.cover = "", this._vodRetryCount = 0, this._clearTimeout(), this.loadByLightSaas(!0);
        }, o.exports = a;
      }, { "../base/event/eventtype": 68, "./light": 110, "./saasplayer": 114 }], 112: [function(d, o, x) {
        var _ = d("../../lib/io"), u = d("../../lib/constants"), c = d("./signature"), a = d("./util"), s = d("../../lang/index"), t = d("../../lib/ua"), e = function(r, p) {
          for (var y = "", h = (r.sort(function(f, b) {
            return f = parseInt(f.bitrate), b = parseInt(b.bitrate), p == "desc" ? b < f ? -1 : f < b ? 1 : void 0 : f < b ? -1 : b < f ? 1 : void 0;
          }), r.length), l = 0; l < h; l++) {
            var g = r[l], m = u.QualityLevels[g.definition], v = "", v = m === void 0 ? g.bitrate : y == m ? m + g.bitrate : m;
            g.desc = v, y = m;
          }
        }, n = function(r, p) {
          for (var y = "", h = (r.sort(function(f, b) {
            return f = parseInt(f.width), b = parseInt(b.width), p == "desc" ? b < f ? -1 : f < b ? 1 : void 0 : f < b ? -1 : b < f ? 1 : void 0;
          }), r.length), l = 0; l < h; l++) {
            var g = r[l], m = u.QualityLevels[g.definition], v = "", v = m === void 0 ? "" : y == m ? m + g.height : m;
            g.desc = v, y = m;
          }
        };
        o.exports.getDataByAuthInfo = function(g, p, y, h) {
          c.returnUTCDate(), c.randomUUID();
          var l = c.randomUUID(), l = { AccessKeyId: g.accessId, Action: "PlayInfo", MediaId: g.vid, Formats: g.format, AuthInfo: g.authInfo, AuthTimeout: g.authTimeout || u.AuthKeyExpired, IncludeSnapshotList: g.includeSnapshotList, Rand: g.rand, SecurityToken: g.stsToken, Format: "JSON", Version: "2014-06-18", SignatureMethod: "HMAC-SHA1", SignatureVersion: "1.0", Terminal: t.IS_CHROME ? "Chrome" : t.IS_EDGE ? "Edge" : t.IS_IE11 ? "IE" : t.IS_SAFARI ? "Safari" : t.IS_FIREFOX ? "Firefox" : "", SignatureNonce: l }, l = (g.hlsUriToken && (g.MtsHlsUriToken = g.hlsUriToken), g.playConfig && (l.PlayConfig = JSON.stringify(g.playConfig)), c.makeUTF8sort(l, "=", "&") + "&Signature=" + c.AliyunEncodeURI(c.makeChangeSiga(l, g.accessSecret))), g = "https://mts." + g.domainRegion + ".aliyuncs.com/?" + l;
          _.get(g, function(m) {
            var v, f, b;
            m ? (v = (m = JSON.parse(m)).PlayInfoList.PlayInfo, f = "", (b = m.SnapshotList ? m.SnapshotList.Snapshot : []) && 0 < b.length && (f = b[0].Url), b = ((S, w) => {
              for (var T = [], C = [], R = [], E = [], A = S.length - 1; 0 <= A; A--) {
                var H = S[A];
                (H.format == "mp4" ? C : H.format == "mp3" ? R : H.format == "m3u8" ? T : E).push(H);
              }
              return 0 < R.length ? (e(R, w), R) : 0 < C.length ? (n(C, w), C) : 0 < T.length ? (n(T, w), T) : (n(E, w), E);
            })(v, p), y && y({ requestId: m.RequestId, urls: b, thumbnailUrl: f })) : h && h(a.createError("MPS获取取数失败"));
          }, function(m) {
            if (h) {
              var v = { Code: "", Message: s.get("Error_MTS_Fetch_Urls_Text") };
              try {
                v = JSON.parse(m);
              } catch {
              }
              h({ Code: u.ErrorCode.ServerAPIError, Message: v.Code + "|" + v.Message, sri: v.RequestId || "" });
            }
          });
        };
      }, { "../../lang/index": 24, "../../lib/constants": 29, "../../lib/io": 41, "../../lib/ua": 49, "./signature": 115, "./util": 116 }], 113: [function(c, o, x) {
        var _ = c("./saasplayer"), u = (c("../../lib/constants"), c("./mts")), c = _.extend({ init: function(a, s) {
          _.call(this, a, s), this.service = u, this.loadByMts();
        } });
        c.prototype.loadByMts = function(a) {
          var s = { vid: this._options.vid, accessId: this._options.accId, accessSecret: this._options.accSecret, stsToken: this._options.stsToken, domainRegion: this._options.domainRegion, authInfo: this._options.authInfo, format: this._options.format, includeSnapshotList: this._options.includeSnapshotList || !1, defaultDefinition: this._options.defaultDefinition, authTimeout: this._options.authTimeout, hlsUriToken: this._options.hlsUriToken, playConfig: this._options.playConfig };
          this.loadData(s, a);
        }, c.prototype.replayByVidAndAuthInfo = function(a, s, t, e, n, r) {
          this.trigger("error_hide"), this._options.source = "", this._isError = !1, this._options.cover = "", this._vodRetryCount = 0, this._clearTimeout(), this.reloadNewVideoInfo(a, s, t, e, n, r);
        }, c.prototype.reloadNewVideoInfo = function(a, s, t, e, n, r) {
          if (this.trigger("error_hide"), this._options.source = "", a && (this._options.vid = a, this._options.accId = s, this._options.accessSecret = t, this._options.stsToken = e, this._options.domainRegion = r, this._options.authInfo = n), !(this._options.vid && this._options.accId && this._options.accessSecret && this._options.stsToken && this._options.domainRegion && this._options.authInfo)) throw new Error("需要提供vid、accId、accessSecret、stsToken、domainRegion和authInfo参数");
          this.log("STARTFETCHDATA", { it: "mps", pa: { vid: a } }), this.loadByMts(!0);
        }, o.exports = c;
      }, { "../../lib/constants": 29, "./mts": 112, "./saasplayer": 114 }], 114: [function(d, o, x) {
        var _ = d("../base/player"), u = d("../audio/audioplayer"), c = d("../../lib/io"), a = d("../../lib/constants"), s = d("./signature"), t = d("./authkeyexpiredhandle"), e = d("../hls/hlsinjector"), n = d("../flv/flvinjector"), r = d("../drm/drminjector"), p = d("../sw/swinjector"), y = d("../../lang/index"), h = d("../../lib/ua"), l = d("../../config"), g = d("../../lib/playerutil"), m = d("../base/event/eventtype"), v = d("../../protected/anti-injector-protected"), f = _.extend({ init: function(w, T) {
          h.IS_PC && v(T, this), this._authKeyExpiredHandle = new t(this), _.prototype._videoCreateEl || (_.prototype._videoCreateEl = _.prototype.createEl), T.format == "mp3" ? (T.height = "auto", T.mediaType = "audio", _.prototype.createEl = u.prototype.createEl, u.call(this, w, T), f.prototype.play = _.prototype.play, f.prototype.pause = _.prototype.pause, f.prototype.initPlay = _.prototype.initPlay, f.prototype.replay = _.prototype.replay, f.prototype.stop = _.prototype.stop, f.prototype.seek = _.prototype.seek) : (_.prototype.createEl = _.prototype._videoCreateEl, T._native = !1, _.call(this, w, T));
        } });
        function b() {
          var w, T = !1;
          return Number(this._options.encryptType) !== 1 ? (w = { error_code: a.ErrorCode.InvalidParameter, error_msg: y.get("Error_Not_Support_encrypt_Text") }, this.logError(w), this.trigger("error", w), !0) : T;
        }
        function S() {
          var w = g.checkSecuritSupport();
          if (w) return this._mtsError_message(this, { Code: a.ErrorCode.EncrptyVideoNotSupport, Message: w, display_msg: w }, ""), !0;
        }
        f.prototype.loadData = function(w, T) {
          var C, R, E;
          this._options.encryptType != 1 ? this._loadData(w, T) : (C = "aliplayer-vod-min.js", R = "", R = l.domain ? "https://" + l.domain + l.path + l.h5Version + "/hls/" + C : "/build/hls/" + C, this.trigger(m.Private.Timeline, { name: "mod_rand_s", ts: performance.now() }), E = this, c.loadJS(R, function() {
            E.trigger(m.Private.Timeline, { name: "mod_rand_f", ts: performance.now() }), E._loadData(w, T);
          }));
        }, f.prototype._loadData = function(w, T) {
          var C, R = (/* @__PURE__ */ new Date()).getTime(), E = this;
          this._urls = [], this._currentPlayIndex = 0, this._retrySwitchUrlCount = 0, this._authKeyExpiredHandle.clearTick(), w.format != "" && w.format != "m3u8" || this._options.encryptType != 1 ? w.rand = s.randomUUID() : (C = _rtsneg(E._vdnct6f === 3 ? w.vid : void 0), w.rand = _dnaRekam(C, E._vdnct6f)), this._options.thumbnailUrl && (w.thumbnailUrl = this._options.thumbnailUrl), this.trigger(m.Private.H5_Loading_Show), this.service.getDataByAuthInfo.call(this, w, this._options.qualitySort, function(A) {
            if (E.trigger(m.Private.PlayInfoLoaded, A), A.userId && (E._options.from = A.userId), A.videoId && E._monitor && E._monitor.updateLightSaasVideoId(A.videoId), A.textTracks && A.textTracks.length && (H = g.unqiueTextTracks(A.textTracks), E.trigger(m.Private.TextTrackFounded, { from: "saas", textTracks: H })), A.urls && A.urls.length == 0) E._mtsError_message(E, { Code: a.ErrorCode.URLsIsEmpty, Message: y.get("Error_Vod_URL_Is_Empty_Text") + (w.format ? "(format:" + w.format + ")" : "") }, "");
            else {
              E.log("COMPLETEFETCHDATA", { cost: (/* @__PURE__ */ new Date()).getTime() - R, mi: JSON.stringify(((I) => {
                for (var L = [], V = 0; V < I.length; V++) L.push({ width: I[V].width, height: I[V].height, definition: I[V].definition, format: I[V].format, encryptionType: I[V].encryptionType, duration: I[V].duration });
                return L;
              })(A.urls)) }), E._urls = A.urls, E._currentPlayIndex = g.findSelectedStreamLevel(E._urls, w.defaultDefinition);
              var H = (N = A.urls[E._currentPlayIndex]).Url;
              if (E._vodDuration = N.duration || 0, E._options.source = H, E.encType = "", E.trigger(m.Private.PREPARE, N.definition), E.UI.cover && A.coverUrl && !E._options.cover && E.setCover(A.coverUrl), g.isHls(H)) if (A && A.playInfoAry && 0 < A.playInfoAry.length && A.playInfoAry[0].EncryptType == "Widevine-FairPlay") r.inject(E, f, _.prototype, E._options);
              else {
                if (A.encryptUrlArr && 0 < A.encryptUrlArr.length) {
                  for (var N, O = [], F = !1, U = 0; U < A.encryptUrlArr.length; ++U) if ((N = A.encryptUrlArr[U]).encryptionType === a.EncryptionType.Private) {
                    if (b.call(E)) return;
                    if (F || S.call(E)) return void (F = !0);
                    var M = _yekced(C, N.rand, N.plaintext);
                    O.push({ url: N.Url, secData: M });
                  }
                } else if (O = "", N.encryptionType == a.EncryptionType.Private) {
                  if (b.call(E) || S.call(E)) return;
                  E.encType = N.encryptionType, O = _yekced(C, N.rand, N.plaintext);
                }
                var P = h.IS_IOS && parseFloat(h.IOS_FULL_VERSION) < 17.1;
                (O && (E._options.useSW || P) ? p : (E._hls && (E._hls.destroy(), E._hls = null), e)).inject(E, f, _, E._options, O);
              }
              else g.isFlv(H) ? n.inject(E, f, _, E._options) : g.isDash(H) ? (console.log("isDash"), r.inject(E, f, _, E._options)) : E._player._executeReadyCallback();
              E._authKeyExpiredHandle.tick(a.AuthKeyRefreshExpired), E.trigger(m.Private.SourceLoaded, N), E.initPlay(T), E.trigger(m.Private.ChangeURL, { from: "saas" }), A.thumbnailUrl && E._thumbnailService.get(A.thumbnailUrl), P = E._player._isFlv, H = -1 < E._player.getOptions().source.indexOf("mp4"), E._player.encType == 1 || P || H || (h.IS_IOS || h.IS_MAC_SAFARI || h.IS_X5 || h.IS_EDGE) && (E._player._executeReadyCallback(), E._urls.length) && E.trigger(m.Private.SourceLoaded, N);
            }
          }, function(A) {
            var H;
            -1 < ((H = A.Message) == null ? void 0 : H.indexOf('The specified parameter "Rand" is not valid')) && b.call(E) || E._mtsError_message(E, A, "");
          });
        }, f.prototype._changeStream = function(w, T) {
          this._urls.length > w && (this._loadByUrlInner(this._urls[w].Url, this.getCurrentTime(), !0), this._currentPlayIndex = w, this.trigger(m.Private.QualityChange, T || y.get("Quality_Change_Fail_Switch_Text")));
        }, f.prototype._getLowerQualityLevel = function() {
          if (this._urls.length != 0 && this._currentPlayIndex != -1) {
            if (this.options().qualitySort == "asc") {
              if (0 < this._currentPlayIndex) return { item: this._urls[this._currentPlayIndex - 1], index: this._currentPlayIndex - 1 };
            } else if (this._currentPlayIndex < this._urls.length - 1) return { item: this._urls[this._currentPlayIndex + 1], index: this._currentPlayIndex + 1 };
          }
          return "";
        }, f.prototype._mtsError_message = function(w, T, C) {
          w._serverRequestId = T.sri, w.trigger(m.Private.H5_Loading_Hide), T.Code = T.Code || T.code, T.Message = T.Message || T.message;
          var R = T.Code || "OTHER_ERR_CODE", E = T.Message || "OTHER_ERR_MSG", A = (a.ErrorCode.ServerAPIError, T.display_msg || ""), H = (-1 < E.indexOf("InvalidParameter.Rand") || -1 < E.indexOf('"Rand" is not valid.') ? (a.ErrorCode.EncrptyVideoNotSupport, A = y.get("Error_Encrypt_Fetch_Failed_Text")) : -1 < E.indexOf("SecurityToken.Expired") ? (a.ErrorCode.AuthKeyExpired, A = y.get("Error_Playauth_Expired_Text")) : -1 < E.indexOf("InvalidVideo.NoneStream") ? (a.ErrorCode.URLsIsEmpty, A = y.get("Error_Fetch_NotStream") + "(" + w._options.format + "|" + w._options.definition + ")") : -1 < E.indexOf("DataNotFound") && (a.ErrorCode.MediaNotFound, A = y.get("Error_Fetch_Media_Not_Found")), w._options.vid || ""), H = (w._options.from, { mediaId: H, mediaAuth: w._options.mediaAuth || "", error_code: R, error_msg: E });
          T.sri && (H.sri = T.sri), w.logError(H), H.display_msg = A && A === E ? A : (A || y.get("Error_Vod_Fetch_Urls_Text")) + "</br>" + E, w.trigger("error", H), console.log("PrismPlayer Error: " + C + "! error_msg :" + E + ";");
        }, o.exports = f;
      }, { "../../config": 15, "../../lang/index": 24, "../../lib/constants": 29, "../../lib/io": 41, "../../lib/playerutil": 46, "../../lib/ua": 49, "../../protected/anti-injector-protected": 131, "../audio/audioplayer": 66, "../base/event/eventtype": 68, "../base/player": 91, "../drm/drminjector": 99, "../flv/flvinjector": 102, "../hls/hlsinjector": 104, "../sw/swinjector": 129, "./authkeyexpiredhandle": 108, "./signature": 115 }], 115: [function(d, o, x) {
        var _ = d("crypto-js/hmac-sha1"), u = d("crypto-js/enc-base64"), c = d("crypto-js/enc-utf8");
        o.exports.randomUUID = function() {
          for (var a = [], s = "0123456789abcdef", t = 0; t < 36; t++) a[t] = s.substr(Math.floor(16 * Math.random()), 1);
          return a[14] = "4", a[19] = s.substr(3 & a[19] | 8, 1), a[8] = a[13] = a[18] = a[23] = "-", a.join("");
        }, o.exports.returnUTCDate = function() {
          var p = /* @__PURE__ */ new Date(), a = p.getUTCFullYear(), s = p.getUTCMonth(), t = p.getUTCDate(), e = p.getUTCHours(), n = p.getUTCMinutes(), r = p.getUTCSeconds(), p = p.getUTCMilliseconds();
          return Date.UTC(a, s, t, e, n, r, p);
        }, o.exports.AliyunEncodeURI = function(a) {
          return a = encodeURIComponent(a), a = (a = (a = a.replace("+", "%2B")).replace("*", "%2A")).replace("%7E", "~");
        }, o.exports.makesort = function(a, s, t) {
          if (!a) throw new Error("PrismPlayer Error: vid should not be null!");
          var e = [];
          for (y in a) e.push(y);
          for (var n = e.sort(), r = "", p = n.length, y = 0; y < p; y++) r == "" ? r = n[y] + s + a[n[y]] : r += t + n[y] + s + a[n[y]];
          return r;
        }, o.exports.makeUTF8sort = function(a, s, t) {
          if (!a) throw new Error("PrismPlayer Error: vid should not be null!");
          var e = [];
          for (y in a) e.push(y);
          for (var n = e.sort(), r = "", p = n.length, y = 0; y < p; y++) {
            var h = o.exports.AliyunEncodeURI(n[y]), l = o.exports.AliyunEncodeURI(a[n[y]]);
            r == "" ? r = h + s + l : r += t + h + s + l;
          }
          return r;
        }, o.exports.makeChangeSiga = function(a, s, t) {
          if (a) return u.stringify(_((t = t || "GET") + "&" + o.exports.AliyunEncodeURI("/") + "&" + o.exports.AliyunEncodeURI(o.exports.makeUTF8sort(a, "=", "&")), s + "&"));
          throw new Error("PrismPlayer Error: vid should not be null!");
        }, o.exports.ISODateString = function(a) {
          function s(t) {
            return t < 10 ? "0" + t : t;
          }
          return a.getUTCFullYear() + "-" + s(a.getUTCMonth() + 1) + "-" + s(a.getUTCDate()) + "T" + s(a.getUTCHours()) + ":" + s(a.getUTCMinutes()) + ":" + s(a.getUTCSeconds()) + "Z";
        }, o.exports.encPlayAuth = function(a) {
          if (a = c.stringify(u.parse(a))) return JSON.parse(a);
          throw new Error("playuth参数解析为空");
        }, o.exports.encRsa = function() {
        }, o.exports.stringToArray = function(a) {
          for (var s = new ArrayBuffer(2 * a.length), t = new Uint16Array(s), e = 0, n = a.length; e < n; e++) t[e] = a.charCodeAt(e);
          return t;
        }, o.exports.Uint8ArrayToString = function(a) {
          for (var s = "", t = 0; t < a.length; t++) s += String.fromCharCode(a[t]);
          return s;
        }, o.exports.arrayToString = function(a) {
          return a = new Uint16Array(a.buffer), String.fromCharCode.apply(null, a);
        }, o.exports.base64DecodeUint8Array = function(a) {
          var s = window.atob(a), t = s.length, e = new Uint8Array(new ArrayBuffer(t));
          for (i = 0; i < t; i++) e[i] = s.charCodeAt(i);
          return e;
        }, o.exports.base64EncodeUint8Array = function(a) {
          for (var s, t, e, n, r, p, y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", h = "", l = 0; l < a.length; ) e = (s = a[l++]) >> 2, n = (3 & s) << 4 | (s = l < a.length ? a[l++] : Number.NaN) >> 4, r = (15 & s) << 2 | (t = l < a.length ? a[l++] : Number.NaN) >> 6, p = 63 & t, isNaN(s) ? r = p = 64 : isNaN(t) && (p = 64), h += y.charAt(e) + y.charAt(n) + y.charAt(r) + y.charAt(p);
          return h;
        };
      }, { "crypto-js/enc-base64": 4, "crypto-js/enc-utf8": 5, "crypto-js/hmac-sha1": 6 }], 116: [function(d, o, x) {
        var _ = d("../../lib/constants");
        o.exports.createError = function(u, c) {
          return { requestId: "", code: c || "", message: u };
        }, o.exports.getItem = function(u) {
          var c = {};
          return c.width = u.Width, c.height = u.Height, c.definition = u.Definition, c.Url = u.PlayURL, c.format = u.Format, c.desc = _.QualityLevels[c.definition], c.encryptionType = _.VodEncryptionType[u.EncryptType], c.plaintext = u.Plaintext, c.rand = u.Rand, c.encrypt = u.Encrypt, c.duration = u.Duration, c.bitrate = u.Bitrate, c;
        }, o.exports.objectPlayerMessageSort = function(u, c) {
          for (var a = [], s = [], t = [], e = [], n = u.length - 1; 0 <= n; n--) {
            var r = u[n], r = o.exports.getItem(r);
            (r.format == "mp4" ? s : r.format == "mp3" ? t : r.format == "m3u8" ? a : e).push(r);
          }
          var p = [], p = 0 < t.length ? t : 0 < s.length ? s : 0 < a.length ? a : e;
          return c == "asc" && p.reverse(), p;
        };
      }, { "../../lib/constants": 29 }], 117: [function(d, o, x) {
        var _ = d("../../lib/io"), u = d("../../lib/constants"), c = d("./signature"), a = d("./util"), s = d("../../config"), t = d("../../lang/index"), e = d("../base/event/eventtype"), n = "saas/vod.js", r = { MAIN: "main", BACKUP: "backup" }, p = function(g) {
          return (g || "").split("?")[0];
        }, y = { type: r.MAIN, time: 0 };
        function h(g, m, v, f) {
          var b = this, S = (function(T) {
            var C = c.randomUUID(), C = { AccessKeyId: T.accessId, Action: "GetPlayInfo", VideoId: T.vid, Formats: T.format, AuthTimeout: T.authTimeout || u.AuthKeyExpired, Rand: T.rand, SecurityToken: T.stsToken, StreamType: T.mediaType, Format: "JSON", Version: "2017-03-21", SignatureMethod: "HMAC-SHA1", SignatureVersion: "1.0", SignatureNonce: C, PlayerVersion: s.h5Version, Channel: "HTML5" };
            return T.definition === "AUTO" ? C.ResultType = "Multiple" : T.definition && (C.Definition = T.definition), T.authInfo && (C.AuthInfo = T.authInfo), T.outputType && (C.OutputType = T.outputType), T.playConfig && (C.PlayConfig = JSON.stringify(T.playConfig)), T.reAuthInfo && (C.ReAuthInfo = JSON.stringify(T.reAuthInfo)), C = c.makeUTF8sort(C, "=", "&") + "&Signature=" + c.AliyunEncodeURI(c.makeChangeSiga(C, T.accessSecret)), "https://vod" + (this._useBackupVodDomain ? "-product" : "") + "." + T.domainRegion + ".aliyuncs.com/?" + C;
          }).call(this, g), w = performance.now();
          y.time === 0 && this.trigger(e.Private.Timeline, { name: "vod_s", ts: w }), _.get.call(this, S, function(T) {
            l.call(b, S, { status: 200 }), (function(C, R, E, A, H) {
              if (this.trigger(e.Private.Timeline, { name: "vod_f", ts: performance.now() }), this.traceLog(n, "Vod request ok." + C), y = { type: r.MAIN, time: 0 }, C) {
                for (var N, C = JSON.parse(C), O = "", F = C.VideoBase.ThumbnailList, U = (F && F.Thumbnail && 0 < F.Thumbnail.length ? O = F.Thumbnail[0].URL : R.thumbnailUrl && (O = String(R.thumbnailUrl)), C.PlayInfoList.PlayInfo), M = [], P = [], I = U.length - 1; 0 <= I; --I) U[I].Definition === "AUTO" ? (this.getOptions().isVBR = !0, N = U.splice(I, 1)[0], M = [N]) : U[I].Encrypt === 1 && P.push(U[I]);
                F = null, P = M.length === 0 ? (F = a.objectPlayerMessageSort(U, E), []) : (F = a.objectPlayerMessageSort(M), a.objectPlayerMessageSort(P)), F && A && A({ requestId: C.RequestId, urls: F, encryptUrlArr: P, thumbnailUrl: O, coverUrl: C.VideoBase.CoverURL, playInfoAry: U });
              } else H && H(a.createError("点播服务获取数据失败"));
            }).call(b, T, g, m, v, f);
          }, function(T, C, R) {
            if ((A = (E = R).status) === 0 || 500 <= A && A <= 599 && (E.responseText || "").indexOf("RequestId") === -1) {
              if (b.trigger(e.Private.VodRequestException, { url: p(S), status: R.status, response: R.responseText, retryType: y.type, retryTime: y.time }), 5e3 < performance.now() - w && (y.type === r.MAIN ? y.time = 1 : y.type === r.BACKUP && (y.time = 2)), y.type === r.MAIN) return y.time < 1 ? (y.time++, void setTimeout(function() {
                h.call(b, g, m, v, f);
              }, 200)) : (y.type = r.BACKUP, y.time = 1, void setTimeout(function() {
                b._useBackupVodDomain = !0, h.call(b, g, m, v, f);
              }, 200));
              if (y.type === r.BACKUP) {
                if (y.time < 2) return y.time++, void setTimeout(function() {
                  h.call(b, g, m, v, f);
                }, 200);
                b && (b._useBackupVodDomain = !1);
              }
            } else l.call(b, S, R);
            var E, A;
            (function(H, N) {
              if (this.traceLog(n, "Vod request error::" + H), y = { type: r.MAIN, time: 0 }, N) {
                var O = { Code: "", Message: t.get("Error_Vod_Fetch_Urls_Text") };
                try {
                  O = JSON.parse(H);
                } catch {
                }
                N({ Code: u.ErrorCode.ServerAPIError, Message: O.Code + "|" + O.Message, sri: O.RequestId || "" });
              }
            }).call(b, T, f);
          }, void 0, void 0, 5e3);
        }
        function l(g, m) {
          y.time !== 0 && (this._useBackupVodDomain = !0, this.trigger(e.Private.VodRequestExceptionResume, { url: p(g), status: m == null ? void 0 : m.status, response: (m == null ? void 0 : m.status) !== 200 ? m == null ? void 0 : m.responseText : "", retryType: y.type, retryTime: y.time }));
        }
        o.exports.getDataByAuthInfo = h;
      }, { "../../config": 15, "../../lang/index": 24, "../../lib/constants": 29, "../../lib/io": 41, "../base/event/eventtype": 68, "./signature": 115, "./util": 116 }], 118: [function(n, o, x) {
        var _ = n("./saasplayer"), u = n("../../lib/constants"), c = n("./vod"), a = n("./signature"), s = n("../../lib/io"), t = n("../../config"), e = n("../base/event/eventtype"), n = _.extend({ init: function(r, p) {
          _.call(this, r, p), this.service = c, this.loadByVod();
        } });
        n.prototype.loadByVod = function(r) {
          var p, y, h;
          typeof _apesrap < "u" ? this._loadByVod(r) : (typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
            return this;
          }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__), p = "aliplayer-vod-p-min.js", y = "", y = t.domain ? "https://" + t.domain + t.path + t.h5Version + "/hls/" + p : "/build/hls/" + p, this.trigger(e.Private.Timeline, { name: "mod_pa_s", ts: performance.now() }), h = this, s.loadJS(y, function() {
            h.trigger(e.Private.Timeline, { name: "mod_pa_f", ts: performance.now() }), h._loadByVod(r);
          }));
        }, n.prototype._loadByVod = function(r) {
          var p = "", y = "", h = "", l = "", g = "";
          if (this._options.accessKeyId && this._options.accessKeySecret) p = this._options.accessKeyId, y = this._options.accessKeySecret, h = this._options.securityToken, l = this._options.region, this.log("STARTFETCHDATA", { it: "sts", pa: { vid: this._options.vid } });
          else {
            try {
              var m = _apesrap(this._options.playauth, this._options.vid), v = (this._vdnct6f = m.v, m.value), f = a.encPlayAuth(v), p = f.AccessKeyId, y = f.AccessKeySecret, h = f.SecurityToken, l = f.Region, g = f.AuthInfo;
            } catch (b) {
              return console.log("e", b), m = { Code: u.ErrorCode.PlayauthDecode, Message: "playauth decoded failed.", displayMessage: "playauth解析错误" }, void this._mtsError_message(this, m, v);
            }
            this._options.from = f.CustomerId || "", this.log("STARTFETCHDATA", { it: "playAuth", pa: { vid: this._options.vid } });
          }
          this._loadByVodBySTS(p, y, h, l, g, r);
        }, n.prototype.replayByVidAndPlayAuth = function(r, p) {
          this.trigger("error_hide"), this.setTextTracks([]), this.trigger(e.Private.UserTrackReset), this._options.source = "", this._options.vid = r, this._options.playauth = p, this._isError = !1, this._options.cover = "", this._vodRetryCount = 0, this._posOffset = this._getSubVideoConfig().start || 0, this._clearTimeout(), this.loadByVod(!0);
        }, n.prototype.updateSourcesByVidAndPlayAuth = function(r, p) {
          var y, h, l;
          typeof _apesrap < "u" ? this._updateSourcesByVidAndPlayAuth(r, p) : (y = "aliplayer-vod-p-min.js", h = "", h = t.domain ? "https://" + t.domain + t.path + t.h5Version + "/hls/" + y : "/build/hls/" + y, l = this, s.loadJS(h, function() {
            l._updateSourcesByVidAndPlayAuth(r, p);
          }));
        }, n.prototype._updateSourcesByVidAndPlayAuth = function(r, p) {
          if (r != this._options.vid) console.log("不能更新地址，vid和播放中的不一致");
          else {
            this._options.vid = r, this._options.playauth = p;
            try {
              var y = _apesrap(this._options.playauth, this._options.vid), h = (this._vdnct6f = y.v, y.value), l = a.encPlayAuth(h);
            } catch {
              return void console.log("playauth解析错误");
            }
            var p = { vid: r, accessId: l.AccessKeyId, accessSecret: l.AccessKeySecret, stsToken: l.SecurityToken, domainRegion: l.Region, authInfo: l.AuthInfo, playDomain: l.PlayDomain, format: this._options.format, mediaType: this._options.mediaType }, g = (this._authKeyExpiredHandle.clearTick(), this);
            this.service.loadData(p, this._options.qualitySort, function(v) {
              g._serverRequestId = v.requestId, v.urls.length != 0 && (g._urls = v.urls), g._authKeyExpiredHandle.tick(u.AuthKeyRefreshExpired);
            }, function(v) {
              console.log(v);
            });
          }
        }, n.prototype.reloaduserPlayInfoAndVidRequestMts = function(r, p) {
          this.replayByVidAndPlayAuth(r, p, accessSecret);
        }, n.prototype._loadByVodBySTS = function(r, p, y, h, l, g) {
          r = { vid: this._options.vid, accessId: r, accessSecret: p, stsToken: y, authInfo: l, domainRegion: h, format: this._options.format, mediaType: this._options.mediaType, definition: this._options.definition, defaultDefinition: this._options.defaultDefinition, authTimeout: this._options.authTimeout, outputType: this._options.outputType, playConfig: this._options.playConfig, reAuthInfo: this._options.reAuthInfo }, this.loadData(r, g);
        }, o.exports = n;
      }, { "../../config": 15, "../../lib/constants": 29, "../../lib/io": 41, "../base/event/eventtype": 68, "./saasplayer": 114, "./signature": 115, "./vod": 117 }], 119: [function(d, o, x) {
        function _(c) {
          this._player = c, this._video = c.tag;
          var a = this;
          this._isCreated = !1, this._canPlayTriggered = !1, this._defaultTrack = "", c.on(u.Private.ChangeURL, function() {
            a._isCreated = !1, a._canPlayTriggered = !1, a._defaultTrack = "";
          }), c.on(u.Player.CanPlay, function() {
            var s;
            a._player._drm || a._canPlayTriggered || ((s = a._getTracks()) && (a._isCreated = !0, a._player._options.isVBR || a._hls || (c.trigger(u.Player.AudioTrackReady, s), a._notifyDefaultValue(s))), a._canPlayTriggered = !0);
          }), c.on(u.Player.AudioTrackUpdated, function(s) {
            a._isCreated || (s = a._getTracks(s.paramData.audioTracks)) && (a._isCreated = !0, c.trigger(u.Player.AudioTrackReady, s), a._notifyDefaultValue(s));
          });
        }
        var u = d("../base/event/eventtype");
        _.prototype._notifyDefaultValue = function(c) {
          !this._defaultTrack && 0 < c.length && (this._defaultTrack = c[0]), this._defaultTrack && this._player.trigger(u.Private.SelectorUpdateList, { type: "audio", text: this._defaultTrack.text });
        }, _.prototype.support = function() {
          return !!this._video.audioTracks;
        }, _.prototype._getTracks = function(c) {
          if (!this.support() && !c) return null;
          for (var a = [], s = (c = !this._video || !this._video.audioTracks || c && c.length != 0 ? c : this._video.audioTracks) ? c.length : 0, t = 0; t < s; t++) {
            var e = c[t], n = { value: e.id, text: e.label || e.name || e.language };
            (e.default || e.enabled) && (this._defaultTrack = n), a.push(n);
          }
          return a;
        }, _.prototype.switch = function(c) {
          if (this._player._hls) this._player._hls.audioTrack = +c;
          else if (this._player._switchAudioTrack) this._player._switchAudioTrack(c);
          else for (var a = this._video.audioTracks ? this._video.audioTracks.length : 0, s = 0; s < a; s++) {
            var t = this._video.audioTracks[s];
            t.id == c ? t.enabled = !0 : t.enabled = !1;
          }
        }, _.prototype.dispose = function() {
          this._player = null;
        }, o.exports = _;
      }, { "../base/event/eventtype": 68 }], 120: [function(d, o, x) {
        function _(n) {
          this._video = n.tag, this._player = n, this._isCreated = !1, this._backupCC = "", this.tracks = [], this._defaultTrack = "", this._currentValue = "", this._switchTimer = null, this._storedTracks = [];
          var r = this, p = (n.on(u.Player.LevelsLoaded, function(y) {
            n.getOptions().useDrm2 || (a.IS_MAC_SAFARI || a.IS_IOS) && (y && y.paramData && y.paramData.subtitles && y.paramData.subtitles.length ? r._storedTracks = y.paramData.subtitles || [] : r._resotreTracks());
          }), n.on(u.Private.SafariDrmLevelSwitch, function() {
            r._resotreTracks();
          }), n.on(u.Private.ChangeURL, function(y) {
            y && y.paramData && y.paramData.from === "saas" || (r._disabledTracks(), r._isCreated = !1, r._defaultTrack = "", r._backupCC = "");
          }), n.on(u.Private.VttClearTracks, function() {
            r.switch("off"), r._disabledTracks(), r._isCreated = !1, r._defaultTrack = { value: "off", text: "Off" }, r.tracks = [r._defaultTrack], n.trigger(u.Private.SelectorGenerateList, { type: "cc" }), n.trigger(u.Private.CCStateChanged, { value: "off", lang: "" });
          }), n.on(u.Player.CanPlay, function() {
            r._isCreated || (r.tracks = r._getTracks(), n.trigger(u.Player.TextTrackReady, r.tracks), n.trigger(u.Private.CCReset)), r._isCreated && !r._player._setDefaultCC || !r._defaultTrack || (n.trigger(u.Private.SelectorUpdateList, { type: "cc", text: r._defaultTrack.text }), r.switch(r._defaultTrack.value), r._player._setDefaultCC = !1, r._isCreated = !0);
          }), a.os.ios && parseFloat(a.os.version) <= 15.1 && c.addCssByStyle("video::-webkit-media-text-track-container{position: relative; top: -44px !important;}"), n.getOptions().controlBarVisibility === "always" && c.addCssByStyle("video::-webkit-media-text-track-container{transform: translateY(-44px);}"), e.throttle(function() {
            n._vttBroker && n._vttBroker.enabled || c.addCssByStyle("video::-webkit-media-text-track-container{transform: translateY(-44px);}");
          }, 100)), p = (n.on(u.Private.ShowBar, p), e.throttle(function() {
            n._vttBroker && n._vttBroker.enabled || c.addCssByStyle("video::-webkit-media-text-track-container{transform: none;}");
          }, 100));
          n.on(u.Private.HideBar, p), n.on(u.Private.CCReset, function() {
            r._updateSelectorList();
          });
        }
        var u = d("../base/event/eventtype"), c = (d("../../lib/event"), d("../../lib/dom")), a = d("../../lib/ua"), s = d("../../lib/cookie"), t = d("../../lib/constants"), e = d("../../ui/component/util");
        _.prototype._adaptiveCueStype = function() {
          var n, r = -10;
          a.IS_SAFARI ? (r = -65, (n = this._player.fullscreenService) && n.getIsFullScreen() && (r = -95)) : a.IS_MOBILE && (r = -30), c.addCssByStyle("video::-webkit-media-text-track-container{transform: translateY(" + r + "px) !important;}");
        }, _.prototype.close = function() {
          for (var n = this.getTextTracks(), r = n.length, p = 0; p < r; p++) {
            var y = n[p];
            y.mode != "expired" && (y.mode == "showing" && (this._backupCC = y), y.mode = "disabled", this._player._switchDrmTextTrack) && this._player._switchDrmTextTrack();
          }
          this._player.trigger(u.Private.VttHide);
        }, _.prototype.open = function() {
          var n, r, p;
          return !this.tracks || this.tracks.length < 2 || (r = this._backupCC ? this._backupCC.language : "", p = this._backupCC ? this._backupCC.label : "", this.tracks.forEach(function(y) {
            r === y.value && (n = !0);
          }), (r = n ? r : p = "") || (r = this.tracks[1].value, p = this.tracks[1].text), this.switch(r)), { label: p, language: r };
        }, _.prototype.getCurrentSubtitle = function() {
          return this._currentValue;
        }, _.prototype._getTracks = function() {
          for (var n = this.getTextTracks(), r = n.length, p = (this._defaultTrack = { value: "off", text: "Off" }, [this._defaultTrack]), y = s.get(t.SelectedCC), h = "", l = !1, g = 0; g < r; g++) {
            var m, v = n[g];
            v.mode == "expired" || v.kind != "subtitles" && v.kind != "captions" || (m = { value: v.language, text: v.label }, v.default && (this._defaultTrack = m, l = !0), m.value == y && (h = m), p.push(m));
          }
          return !l && h && (this._defaultTrack = h), p;
        }, _.prototype._disabledTracks = function() {
          for (var n = this.getTextTracks(), r = n.length, p = 0; p < r; p++) n[p].mode = "expired";
        }, _.prototype.switch = function(n) {
          var r = this._player;
          if (this.close(), n != "off") for (var p = this.getTextTracks(), y = p.length, h = 0; h < y; h++) {
            var l = p[h];
            l.language === n && l.mode != "expired" && (r._switchDrmTextTrack && r._switchDrmTextTrack(n), p[h].mode = "showing", r.trigger(u.Private.VttSwitchTrack, l.language));
          }
          else this.close();
          this._currentValue = n, r.trigger(u.Private.CCChanged, n);
        }, _.prototype.updateUI = function(n) {
          var r = this._player, p = "on", y = "";
          y = n ? (this.tracks.find(function(h) {
            return h.value === n;
          }) || {}).text || "" : (p = "off", "Off"), r.trigger(u.Private.CCChanged, p), r.trigger(u.Private.CCStateChanged, { value: p, lang: y });
        }, _.prototype.dispose = function() {
          this._player = null, this._switchTimer && (clearTimeout(this._switchTimer), this._switchTimer = null);
        }, _.prototype._patchSafariTracks = function() {
          var n = this;
          if (a.IS_MAC_SAFARI || a.IS_IOS) {
            if (!(this._video && this._video.textTracks && this._video.textTracks.length)) {
              var r = !1;
              if (r = this._video.textTracks && this._video.textTracks.length ? !0 : r) return;
              for (var p = 0; p < this._storedTracks.length; p++) {
                var y = this._storedTracks[p], h = y.vttUrl, l = document.createElement("track");
                l.src = h, l.kind = "subtitles", l.label = y.name, l.srclang = y.lang, this._video.appendChild(l);
              }
            }
            this._switchTimer && clearTimeout(this._switchTimer), this._switchTimer = setTimeout(function() {
              var g = n.getCurrentSubtitle();
              g && g !== "off" && n.switch(g);
            }, 1e3);
          }
        }, _.prototype.getTextTracks = function() {
          var n = this._player, r = n.tag;
          return n._vttBroker && n._vttBroker.enabled && n.getTextTracks ? n.getTextTracks() || [] : n._getDrmTextTracks ? n._getDrmTextTracks() || [] : r && r.textTracks || [];
        }, _.prototype._updateSelectorList = function() {
          var n = this._player;
          this.tracks = this._getTracks(), n.trigger(u.Private.SelectorGenerateList, { type: "cc", value: "Off" });
        }, _.prototype._resotreTracks = function() {
          this._patchSafariTracks(), this.tracks = this._getTracks(), this._player.trigger(u.Player.TextTrackReady, this.tracks);
        }, o.exports = _;
      }, { "../../lib/constants": 29, "../../lib/cookie": 30, "../../lib/dom": 33, "../../lib/event": 34, "../../lib/ua": 49, "../../ui/component/util": 162, "../base/event/eventtype": 68 }], 121: [function(d, o, x) {
        var _ = d("../../lib/playerutil");
        o.exports = [{ service: d("./ccservice"), name: "_ccService", condition: !0 }, { service: d("./audiotrackservice"), name: "_audioTrackService" }, { service: d("./qualityservice"), name: "_qualityService" }, { service: d("./fullscreenservice"), name: "fullscreenService", condition: function() {
          return !0;
        } }, { service: d("./liveshiftservice"), name: "_liveshiftService", condition: function() {
          var u = this.options();
          return _.isLiveShift(u);
        } }, { service: d("./thumbnailservice"), name: "_thumbnailService", condition: function() {
          return !0;
        } }, { service: d("./progressmarkerservice"), name: "_progressMarkerService", condition: function() {
          return !0;
        } }];
      }, { "../../lib/playerutil": 46, "./audiotrackservice": 119, "./ccservice": 120, "./fullscreenservice": 122, "./liveshiftservice": 123, "./progressmarkerservice": 124, "./qualityservice": 125, "./thumbnailservice": 126 }], 122: [function(d, o, x) {
        function _(r) {
          var p = this, y = (this.isFullWindow = !1, this.isFullScreen = !1, this.isFullScreenChanged = !1, this._requestFullScreenTimer = null, this._cancelFullScreenTimer = null, this._player = r, this), h = t;
          this._fullscreenChanged = function(l) {
            var g;
            y._player != null && (l.target || l.srcElement) === (l = y._player.el()) && (g = document[h.fullscreenElement], y.isFullScreen = g === l, (y.isFullScreenChanged = !0) === y.isFullScreen ? y._player.trigger(s.Player.RequestFullScreen) : y._player.trigger(s.Player.CancelFullScreen));
          }, h && a.on(document, h.eventName, this._fullscreenChanged), a.on(r.tag, "webkitendfullscreen", function(l) {
            l = l.target || l.srcElement, r && r.tag === l && (p.isFullScreenChanged = !0, p.isFullScreen = !1, p._player.trigger(s.Player.CancelFullScreen), p._player.trigger(s.Private.Play_Btn_Show));
          });
        }
        var u = d("../../lib/ua"), c = d("../../lib/dom"), a = d("../../lib/event"), s = d("../base/event/eventtype"), t = (d("../base/x5play"), d("../../lang/index"), (() => {
          c.createEl("div");
          var r = {}, p = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullScreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "webkitfullScreen"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "webkitIsFullScreen"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "mozFullScreen"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "MSFullScreen"]], y = !1;
          if (!(y = u.IS_IOS && (r.requestFn = "webkitEnterFullscreen", r.cancelFn = "webkitExitFullscreen", r.fullscreenElement = "webkitFullscreenElement", r.eventName = "webkitfullscreenchange", r.isFullScreen = "webkitDisplayingFullscreen", document[r.requestFn]) ? !0 : y)) {
            for (var h = 0; h < 5; h++) if (p[h][1] in document) {
              r.requestFn = p[h][0], r.cancelFn = p[h][1], r.fullscreenElement = p[h][2], r.eventName = p[h][4], r.isFullScreen = p[h][6];
              break;
            }
            "requestFullscreen" in document ? r.requestFn = "requestFullscreen" : "webkitRequestFullscreen" in document ? r.requestFn = "webkitRequestFullscreen" : "webkitRequestFullScreen" in document ? r.requestFn = "webkitRequestFullScreen" : "webkitEnterFullscreen" in document ? r.requestFn = "webkitEnterFullscreen" : "mozRequestFullScreen" in document ? r.requestFn = "mozRequestFullScreen" : "msRequestFullscreen" in document && (r.requestFn = "msRequestFullscreen"), "fullscreenchange" in document ? r.eventName = "fullscreenchange" : "webkitfullscreenchange" in document || "webkitfullscreenchange" in document || "webkitfullscreenchange" in document ? r.eventName = "webkitfullscreenchange" : "mozfullscreenchange" in document ? r.eventName = "mozfullscreenchange" : "MSFullscreenChange" in document && (r.eventName = "MSFullscreenChange"), "fullScreen" in document ? r.isFullScreen = "fullScreen" : "webkitfullScreen" in document ? r.isFullScreen = "webkitfullScreen" : "webkitIsFullScreen" in document ? r.isFullScreen = "webkitIsFullScreen" : "webkitDisplayingFullscreen" in document ? r.isFullScreen = "webkitDisplayingFullscreen" : "mozFullScreen" in document ? r.isFullScreen = "mozFullScreen" : "mozfullScreen" in document ? r.isFullScreen = "mozfullScreen" : "MSFullScreen" in document && (r.isFullScreen = "MSFullScreen"), "fullscreenElement" in document ? r.fullscreenElement = "fullscreenElement" : "webkitFullscreenElement" in document ? r.fullscreenElement = "webkitFullscreenElement" : "webkitFullScreenElement" in document ? r.fullscreenElement = "webkitFullScreenElement" : "mozFullScreenElement" in document ? r.fullscreenElement = "mozFullScreenElement" : "msFullscreenElement" in document ? r.fullscreenElement = "msFullscreenElement" : "MSFullscreenElement" in document && (r.fullscreenElement = "MSFullscreenElement");
          }
          return r.requestFn ? r : null;
        })()), e = (_.prototype.requestFullScreen = function() {
          var r = t, p = this._player.el(), y = this;
          if (u.IS_IOS) {
            var h = this._player._splayer;
            if (!h || h.renderType !== 2) {
              p = this._player.tag, h && h.renderType !== 2 && (p = this._player.el().querySelector("video"));
              try {
                var l = p[r.requestFn]();
                l && typeof l.catch == "function" && l.catch(function(m) {
                  console.log(m);
                }), y._player.trigger(s.Player.RequestFullScreen);
              } catch (m) {
                console.log(m);
              }
              return this;
            }
            this._player._options.enableMockFullscreen = !0;
          }
          if (this.isFullScreen = !0, this.isFullScreenChanged = !1, this._requestFullScreenTimer = null, this._cancelFullScreenTimer || clearTimeout(this._cancelFullScreenTimer), y = this, r && !this._player._options.enableMockFullscreen) try {
            var g = p[r.requestFn]();
            g && typeof g.catch == "function" && g.catch(function(m) {
              console.log(m);
            }), this._requestFullScreenTimer = setTimeout(function() {
              y.isFullScreenChanged || (e.apply(y), y._player.trigger(s.Player.RequestFullScreen)), y._requestFullScreenTimer = null;
            }, 1e3);
          } catch (m) {
            console.log(m);
          }
          else e.apply(y), this._player.trigger(s.Player.RequestFullScreen);
          return this._player;
        }, _.prototype.cancelFullScreen = function() {
          var r = t, p = (this.isFullScreen = !1, this.isFullScreenChanged = !1, this._cancelFullScreenTimer = null, this._requestFullScreenTimer || clearTimeout(this._requestFullScreenTimer), this);
          if (r && !this._player._options.enableMockFullscreen) {
            try {
              var y = document[r.cancelFn]();
              y && typeof y.catch == "function" && y.catch(function(h) {
                console.log(h);
              });
            } catch (h) {
              console.log(h);
            }
            p._cancelFullScreenTimer = setTimeout(function() {
              p.isFullScreenChanged || (n.apply(p), p._player.trigger(s.Player.CancelFullScreen)), p._cancelFullScreenTimer = null;
            }, 500);
          } else n.apply(p), this._player.trigger(s.Player.CancelFullScreen);
          return this._player.tag.paused || this._player.trigger(s.Player.Play), this._player;
        }, _.prototype.getIsFullScreen = function() {
          return this.isFullScreen;
        }, _.prototype.dispose = function() {
          this._player = null, t && a.off(document, t.eventName, this._fullscreenChanged);
        }, function() {
          this.isFullWindow = !0, this.docOrigOverflow = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden", c.addClass(document.getElementsByTagName("body")[0], "prism-full-window");
        }), n = function() {
          this.isFullWindow = !1, document.documentElement.style.overflow = this.docOrigOverflow, c.removeClass(document.getElementsByTagName("body")[0], "prism-full-window");
        };
        o.exports = _;
      }, { "../../lang/index": 24, "../../lib/dom": 33, "../../lib/event": 34, "../../lib/ua": 49, "../base/event/eventtype": 68, "../base/x5play": 96 }], 123: [function(d, o, x) {
        function _(h, l) {
          var g;
          if (h) return h = new Date(h), g = (l = new Date(l)).valueOf() / 1e3 - h.valueOf() / 1e3, { start: h, end: l, endDisplay: s.extractTime(l), totalTime: g };
        }
        function u(h, l) {
          l && (h.currentTimestamp = l, h.currentTime = s.convertToDate(l), h.currentTimeDisplay = s.extractTime(h.currentTime), h.liveShiftStart = h.liveTimeRange.start, h.liveShiftEnd = h.liveTimeRange.end, h.liveShiftStartDisplay = s.extractTime(h.liveShiftStart), h.liveShiftEndDisplay = s.extractTime(h.liveShiftEnd), h.availableLiveShiftTime = l - h.liveShiftStart.valueOf() / 1e3, h.timestampStart = s.convertToTimestamp(h.liveShiftStart), h.timestampEnd, s.convertToTimestamp(h.liveShiftEnd));
        }
        function c(h) {
          function l() {
            var m = h._options.source;
            this._originalPlayUrl = m, this._liveShiftUrl = h._options.liveTimeShiftUrl, this.liveTimeRange = _(h._options.liveStartTime, h._options.liveOverTime), this.availableLiveShiftTime = 0, this.seekTime = -1;
          }
          this._player = h, this._isLiveShiftPlaying = !1;
          var g = this;
          l.call(this), h.liveShiftSerivce = { setLiveTimeRange: function(m, v) {
            g.setLiveTimeRange(m, v);
          }, queryLiveShift: function(m, v, f) {
            g.queryLiveShift(m, v, f);
          }, isLiveShiftPlaying: function() {
            return g._isLiveShiftPlaying;
          } }, h.on(y.Private.ChangeURL, function() {
            l.call(g);
          });
        }
        var a = d("../../lib/io"), s = d("../../lib/util"), t = d("../../lib/playerutil"), e = d("../../lang/index"), n = d("../flv/flvinjector"), r = d("../hls/hlsinjector"), p = d("../../lib/constants"), y = d("../base/event/eventtype");
        d("../../lib/url"), c.prototype.validate = function() {
          return !(this.liveTimeRange.start >= this.liveTimeRange.end);
        }, c.prototype.switchToLive = function() {
          this.seekTime = -1;
          var h = this._originalPlayUrl, l = this._player._options.liveShiftSource, g = this._player._options.source;
          t.isHls(g) && t.isFlv(h) && l && t.isHls(l) && (this._player._hls && this._player._destroyHls(), g = this._player._superType, l = this._player._Type, this._player._options._autoplay = !0, n.inject(this._player, l, g, this._player._options, "", !0)), this._player._loadByUrlInner(h, null, !0), this._isLiveShiftPlaying = !1, this._player.trigger(y.Private.LiveShiftSwitchToLive);
        }, c.prototype.getBaseTime = function() {
          return this.liveShiftStartDisplay, this.seekTime == -1 ? s.parseTime(this.currentTimeDisplay) : s.parseTime(this.liveShiftStartDisplay) + this.seekTime;
        }, c.prototype.getSourceUrl = function(h, l) {
          var g = this._originalPlayUrl;
          return this.availableLiveShiftTime < h || (this._isLiveShiftPlaying = !0, h = parseInt(h), g = (g = this._switchLiveShiftPlayer(l)) && this._cleanUrl(g), l = parseInt(this.currentTimestamp) - h, (g = g.indexOf("?") == -1 ? g + "?lhs_start_unix_s_0=" + l : g + "&lhs_start_unix_s_0=" + l).indexOf("aliyunols=on") === -1 && (g += "&aliyunols=on"), g.indexOf("continue=on") === -1 && (g += "&continue=on")), g;
        }, c.prototype._cleanUrl = function(h) {
          var l;
          return h.indexOf("?") === -1 ? h : (h = (h = (l = h.split("?"))[1]) && ((h = h.replace(/&?lhs_start_unix_s_0=[0-9]*/g, "")).indexOf("&") === 0 ? h.replace("&", "") : h)) ? l[0] + "?" + h : l[0];
        }, c.prototype._switchLiveShiftPlayer = function(h) {
          var l, g = this._originalPlayUrl, m = this._player._options.liveShiftSource, v = this._player._options.source;
          if (t.isHls(v)) g = v;
          else if (t.isFlv(g) && m && t.isHls(m)) return this._player._flv && this._player._destroyFlv(), v = this._player._superType, l = this._player._Type, this._player._options._autoplay = !0, r.inject(this._player, l, v, this._player._options, "", !0), m;
          return g;
        }, c.prototype.getTimeline = function(h, l) {
          var g;
          this._player.trigger(y.Private.LiveShiftQueryCompleted), this._liveShiftUrl ? (g = this).queryLiveShift(this._liveShiftUrl, function(m) {
            m ? (m = m).retCode == 0 ? (u(g, m.content.current), h && h()) : l({ Code: p.ErrorCode.ServerAPIError, Message: m.retCode + "|" + m.description + "|" + m.content }) : console.log("获取直播时移数据失败");
          }, function(m) {
            if (l && m) {
              var v = {};
              if (m) {
                if (typeof m == "string" && -1 < m.indexOf("403 Forbidden")) v.Code = p.ErrorCode.AuthKeyExpired, v.Message = "Query liveshift failed:" + e.get("Error_AuthKey_Text");
                else {
                  var f, v = m;
                  try {
                    f = JSON.parse(m);
                  } catch {
                  }
                  f && (v.Code = p.ErrorCode.ServerAPIError, v.Message = f.retCode + "|" + f.description + "|" + f.content);
                }
                l(v);
              }
            }
          }) : (u(this, (/* @__PURE__ */ new Date()).valueOf() / 1e3), h && h());
        }, c.prototype.start = function(h, l) {
          var g = this, m = function() {
            g._loopHandler && clearTimeout(g._loopHandler), g._loopHandler = setTimeout(function() {
              g.getTimeline(function() {
              }, l), m();
            }, h);
          };
          g.getTimeline(function(v) {
            g._localLiveTimeHandler || g.tickLocalLiveTime();
          }, l), m();
        }, c.prototype.tickLocalLiveTime = function() {
          function h() {
            l._localLiveTimeHandler = setTimeout(function() {
              l.currentTimestamp++, u(l, l.currentTimestamp), l._player.trigger(y.Private.LiveShiftQueryCompleted), h();
            }, 1e3);
          }
          var l = this;
          h();
        }, c.prototype.setLiveTimeRange = function(h, l) {
          h = h || this._player._options.liveStartTime, l = l || this._player._options.liveOverTime, this.liveTimeRange = _(h, l), u(this, this.currentTimestamp), this._player.trigger(y.Private.LiveShiftQueryCompleted);
        }, c.prototype.queryLiveShift = function(h, l, g) {
          a.get(h, function(m) {
            var v;
            m ? (v = JSON.parse(m)).retCode == 0 ? l && l(v) : g && g(v) : g && g(m);
          }, function(m) {
            g && g(m);
          });
        }, c.prototype.stop = function(h) {
          this._loopHandler && (clearTimeout(this._loopHandler), this._loopHandler = null);
        }, c.prototype.dispose = function() {
          this.stop(), this._localLiveTimeHandler && (clearTimeout(this._localLiveTimeHandler), this._localLiveTimeHandler = null), this._loopHandler && (clearTimeout(this._loopHandler), this._loopHandler = null), this._player = null;
        }, o.exports = c;
      }, { "../../lang/index": 24, "../../lib/constants": 29, "../../lib/io": 41, "../../lib/playerutil": 46, "../../lib/url": 50, "../../lib/util": 51, "../base/event/eventtype": 68, "../flv/flvinjector": 102, "../hls/hlsinjector": 104 }], 124: [function(d, o, x) {
        function _(s) {
          function t() {
            var n = document.querySelector("#" + s.id() + " .prism-progress-marker");
            if (n) {
              n.innerHTML = "";
              var r = e._player.getDuration();
              if (0 < r) {
                for (var p = 0; p < e.progressMarkers.length; p++) {
                  var y, h = e.progressMarkers[p];
                  h.offset !== void 0 && h.offset !== "" && (h = document.createElement("div"), c.addClass(h, "prism-marker-dot"), y = e.progressMarkers[p].offset / r, h.style.left = 100 * y + "%", n.appendChild(h), y = /* @__PURE__ */ ((g, m) => function() {
                    e._player.trigger(u.Private.MarkerTextShow, { left: g, progressMarker: m });
                  })(y, e.progressMarkers[p]), a.on(h, "mouseover", y), a.on(h, "mouseout", function(g) {
                    e._player.trigger(u.Private.MarkerTextHide);
                  }), a.on(h, "touchstart", y), a.on(h, "mousemove", function(g) {
                    g.preventDefault();
                  }), a.on(h, "touchmove", function(g) {
                    g.preventDefault();
                  }));
                }
                var l = document.querySelector("#" + e._player.id() + " .prism-progress-cursor");
                e._player.on(l, "click", function(g) {
                  for (var m = e._player.getCurrentTime(), v = 0; v < e.progressMarkers.length; v++) {
                    var f, b = e.progressMarkers[v];
                    b && m - 1 < b.offset && b.offset < m + 1 && (f = b.offset / r * 100 + "%", e._player.trigger(u.Private.MarkerTextShow, { left: f, progressMarker: b }));
                  }
                });
              }
            }
          }
          this.progressMarkers = [], this._player = s;
          var e = this;
          s.on(u.Private.ProgressMarkerLoaded, function(n) {
            n = n.paramData, n && 0 < n.length && (e.progressMarkers = n);
          }), s.on(u.Private.ProgressMarkerChanged, function(n) {
            n = n.paramData, n && 0 < n.length && (e.progressMarkers = n, t());
          }), s.on(u.Video.LoadedMetadata, t);
        }
        var u = d("../base/event/eventtype"), c = (d("../../lang/index"), d("../../lib/hls/hlsparse"), d("../../lib/object"), d("../../lib/dom")), a = d("../../lib/event");
        d("../../lib/playerutil"), _.prototype.dispose = function() {
          this._player = null, this.progressMarkers = [];
        }, o.exports = _;
      }, { "../../lang/index": 24, "../../lib/dom": 33, "../../lib/event": 34, "../../lib/hls/hlsparse": 39, "../../lib/object": 43, "../../lib/playerutil": 46, "../base/event/eventtype": 68 }], 125: [function(d, o, x) {
        function _() {
          return (_ = Object.assign ? Object.assign.bind() : function(p) {
            for (var y = 1; y < arguments.length; y++) {
              var h, l = arguments[y];
              for (h in l) !{}.hasOwnProperty.call(l, h) || (p[h] = l[h]);
            }
            return p;
          }).apply(null, arguments);
        }
        function u(p) {
          this.levels = [], this.drmUrl = {}, this._player = p;
          var y = this;
          p.on(c.Private.PlayInfoLoaded, function(h) {
            for (var l = h.paramData.encryptUrlArr || [], g = [], m = 0; m < l.length; m++) {
              var v = l[m];
              v.encryptionType === n.VodEncryptionType["Widevine-FairPlay"] && g.push(v);
            }
            y.drmUrl = g;
          }), p.on(c.Player.LevelsLoaded, function(h) {
            if (0 < y.levels.length && (y.levels = []), (h = h.paramData) && h.levels) {
              for (var l, g = h.levels.length - 1; -1 < g; g--) {
                var m, v = h.levels[g];
                v.url && 0 < v.url.length && v.attrs && v.attrs.BANDWIDTH && (m = v.url, t.isArray(m) && (m = m[0]), m = { Url: m = !p._hls && p._options.isVBR && p._options.isDrm && p._options.vid ? r.call(y, v) : m, desc: Math.min(v.width, v.height), bitrate: v.bitrate, resolution: v.attrs.RESOLUTION, bandwidth: v.attrs.BANDWIDTH }, y.levels.push(m));
              }
              p._options.definition === "AUTO" && (p._urls = [], Object.assign(p._urls, this.levels)), y.levels.sort(function(f, b) {
                return (f.bitrate || f.desc) - (b.bitrate || b.desc);
              }), y.levels = ((f, b) => typeof b == "function" ? f.map(function(S) {
                return _({}, S, { desc: b({ bandwidth: Number(S.bandwidth), bitrate: Number(S.bitrate), width: Number(S.resolution.split("x")[0]), height: Number(S.resolution.split("x")[1]) }) });
              }) : f.map(function(S) {
                return _({}, S, { desc: S.desc + "p@" + parseInt(S.bitrate / 1e3) + "k" });
              }))(y.levels, p._options.bitrateDisplayHandler), (y.levels && 0 < y.levels.length || p._drm && p._options.useDrm2) && this._player._options.isVBR && (l = a.get("Auto"), y.levels.push({ Url: h.url, desc: l }), p.trigger(c.Private.SelectorUpdateList, { type: "quality", text: l }));
            }
          }), p.on(c.Video.LoadStart, function() {
            var h, l, g;
            p._options && (h = p._options.source, l = p._options.isVBR, g = p._options.useDrm2, !p._hls) && h && e.isHls(h) && (p._manuallySwitchDrmLevel ? (p._manuallySwitchDrmLevel = !1, p.trigger(c.Private.SafariDrmLevelSwitch)) : (l || p._drm && !g) && y.loadLevels(h));
          });
        }
        var c = d("../base/event/eventtype"), a = d("../../lang/index"), s = d("../../lib/hls/hlsparse"), t = d("../../lib/object"), e = d("../../lib/playerutil"), n = d("../../lib/constants");
        function r(p) {
          for (var y, h = this.drmUrl, l = 0; l < this.drmUrl.length; l++) if (Number(p.height) === Number(h[l].height)) {
            y = h[l].Url;
            break;
          }
          return y;
        }
        (u.prototype = { loadLevels: function(p) {
          var y = new s(), h = this;
          y.load(p, function(l) {
            var g;
            (g = l.subtitles) != null && g.forEach(function(m) {
              y.loadMediaPlaylist({ url: m.url }, function(v) {
                v = v.fragments[0], v && (m.vttUrl = y.resolve(v.relurl, v.baseurl));
              }, function(v) {
                console.log("parse vtt url error: ", v);
              });
            }), h._player._created ? h._player.trigger(c.Player.LevelsLoaded, l) : h._player.one(c.Private.Created, function() {
              h._player.trigger(c.Player.LevelsLoaded, l);
            });
          });
        } }).dispose = function() {
          this._player = null;
        }, o.exports = u;
      }, { "../../lang/index": 24, "../../lib/constants": 29, "../../lib/hls/hlsparse": 39, "../../lib/object": 43, "../../lib/playerutil": 46, "../base/event/eventtype": 68 }], 126: [function(d, o, x) {
        function _(t) {
          this._player = t, this.cues = [], this.baseUrl = "";
          var e = this;
          t.on(s.Private.ChangeURL, function() {
            e.cues = [], e.baseUrl = "";
          });
        }
        var u = d("../../lib/io"), c = d("../../lib/url"), a = d("../../lib/vtt/thumbnailvtt"), s = d("../base/event/eventtype");
        (_.prototype = { get: function(t) {
          var e, n, r, p = this;
          this.baseUrl = (e = t, n = "", (r = c.parseUrl(e)) && (r = r.segments) && 0 < r.length && (r = r[r.length - 1], n = e.split("?")[0].replace(r, "")), n), u.get(t, function(y) {
            y && a.parse(y, function(h) {
              p.cues = h, p._player.trigger(s.Private.ThumbnailLoaded, h);
            });
          }, function(y) {
            console.log(y);
          });
        }, findAvailableCue: function(t) {
          for (var e = this.cues.length, n = 0; n < e; n++) {
            var r = this.cues[n];
            if (r.startTime <= t && t < r.endTime) return r;
          }
          return null;
        }, makeUrl: function(t) {
          return t = t.indexOf("://") == -1 ? this.baseUrl + t : t;
        } }).dispose = function() {
          this._player = null;
        }, o.exports = _;
      }, { "../../lib/io": 41, "../../lib/url": 50, "../../lib/vtt/thumbnailvtt": 52, "../base/event/eventtype": 68 }], 127: [function(d, o, x) {
        function _() {
          return (_ = Object.assign ? Object.assign.bind() : function(b) {
            for (var S = 1; S < arguments.length; S++) {
              var w, T = arguments[S];
              for (w in T) !{}.hasOwnProperty.call(T, w) || (b[w] = T[w]);
            }
            return b;
          }).apply(null, arguments);
        }
        var u = d("../base/player"), c = d("./splayerinjector"), a = d("../flv/flvinjector"), s = d("../hls/hlsinjector"), t = d("../../lib/playerutil"), e = d("../base/event/eventtype"), n = d("../../lib/constants"), r = d("../../lib/codec-probe"), p = d("../../lib/ua"), y = n.USER_EVENT_NAME, h = t.isH265Codec, l = t.isH266Codec, g = t.getVideoTrack, m = {}, v = { codecCost: 0, decoderCost: 0 }, f = u.extend({ init: function(b, S) {
          var w, T = this, C = (this._options = S, t.isFlv(S.source, S.format)), R = t.isHls(S.source, S.format), E = this._extraMultiSources(), A = {};
          function H() {
            C ? (a.inject(this, f, u, S), S._native = !1) : R && !t.canPlayHls() && (s.inject(this, f, u, S), S._native = !1), u.call(this, b, S), this._monitor && this._monitor.updateH265ProbeInfo(_({}, v, m)), O.call(this), m.codecTag && c.reportH265PlayInfo.call(this, { renderType: "native", codecTag: m.codecTag });
          }
          function N() {
            S._native = !1, c.inject(this, f, u, S, m), u.call(this, b, S), this._monitor && this._monitor.updateH265ProbeInfo(_({}, v, m, { waitRenderType: !0 })), O.call(this);
          }
          function O() {
            var F, U, M = this, P = A, I = this[y];
            I && (P = Object.assign({}, A, I), F = Object.keys(A), U = Object.keys(I), F.forEach(function(L) {
              -1 < U.indexOf(L) && (P[L] = A[L].concat(I[L]));
            })), Object.keys(P).forEach(function(L) {
              P[L].forEach(function(V) {
                V.binded || u.prototype.on.call(M, L, V);
              });
            });
          }
          A[e.Player.Ready] = [function() {
            T._setupSourceList(E), T.trigger(e.Private.SelectorGenerateList, { type: "quality" });
          }], S.from === "zhihu" || S.forceH265 || S.forceH266 ? N.call(this) : p.IS_ANDROID && p.dingTalk() && !C ? H.call(this) : (w = performance.now(), r(S.source, S, function(M) {
            v.codecCost += performance.now() - w;
            var U, M = g(M.tracks), P = (M || {}).codecTag || ((P = (M || {}).codec) == null ? void 0 : P.split(".")[0]);
            m.codecTag = P, M && h(P) ? (U = performance.now(), C || R && !t.canPlayHls() ? (v.decoderCost += performance.now() - U, N.call(T)) : t.shouldUseBasePlayer({ codecTag: P, url: S.source }, function(I) {
              v.decoderCost += performance.now() - U, (I ? H : N).call(T);
            })) : (M && l(P) ? N : H).call(T);
          }, function(F) {
            console.log("error in demuxer, fallback to basePlayer", F), v.codecCost += performance.now() - w, H.call(T), c.checkProtocol.call(T, S.source);
          }));
        } });
        o.exports = f;
      }, { "../../lib/codec-probe": 27, "../../lib/constants": 29, "../../lib/playerutil": 46, "../../lib/ua": 49, "../base/event/eventtype": 68, "../base/player": 91, "../flv/flvinjector": 102, "../hls/hlsinjector": 104, "./splayerinjector": 128 }], 128: [function(d, o, x) {
        function _() {
          return (_ = Object.assign ? Object.assign.bind() : function(v) {
            for (var f = 1; f < arguments.length; f++) {
              var b, S = arguments[f];
              for (b in S) !{}.hasOwnProperty.call(S, b) || (v[b] = S[b]);
            }
            return v;
          }).apply(null, arguments);
        }
        var u = d("../../lib/io"), c = d("../base/event/eventtype"), a = d("../base/event/eventmanager"), s = (d("../../lib/event"), d("../../lib/util")), t = d("../../lib/dom"), e = d("../../lib/playerutil"), n = d("../../lib/constants"), r = d("../../lang/index"), p = "splayerinjector.js";
        function y(v) {
          var f = this._options, b = (g.call(this), (function() {
            e.isVideoTag(this.tag) && (a.offVideoAll(this), this.tag.parentNode && this.tag.parentNode.removeChild(this.tag), this.tag = null);
          }).call(this), Videox.Videox), S = f.splayerWasmDomain, S = (!S && f.assetPrefix && (S = f.assetPrefix + "/splayer"), new b(_({ container: this._el, wasmDomain: S, progressive: !0, skipFrame: b.DiscardType.NONE, loop: f.rePlay, controls: !1, muted: !1, threads: f.h265Threads, simd: f.h265Simd, autoplay: f.autoplay || f._autoplay, live: f.isLive, poster: f.cover || void 0, src: f.source, trackOptions: { disable: !0 }, preload: f.preload ? "auto" : "none", timeout: 1e3 * f.waitingTimeout }, f.splayerOptions || {}))), w = (f.debug && (S.setLogLevel(b.LogLevel.LOG), S.setLogPrintLevel(b.LogLevel.LOG)), this._splayer = S, (this.tag = S).play), T = this;
          this.tag.play = function() {
            T._monitor && T._monitor.reportStartPlay(), w.call(this);
          }, (function() {
            var C, R = this, E = document.createElement("video");
            for (C in E) ((A) => {
              R.tag[A] || A.indexOf("on") === 0 || typeof E[A] != "function" || (R.tag[A] = function() {
                console.warn("Function [" + A + "] is called on splayer, which should be a mistake."), E[A].apply(E, arguments);
              });
            })(C);
          }).call(this), (function(C) {
            var R = this, E = (a.onAll(this), this._splayer);
            E.addEventListener("error", (function(A) {
              var H, N, O, M = Videox.Videox, F = (A || {}).detail, U = Number((F || {}).code), M = M.ErrorCode;
              switch (this.traceLog(p, "splayer-error::" + U), U) {
                case M.WASM_NOT_SUPPORTED:
                case M.CANVAS_NOT_SUPPORTED:
                case M.AUDIOCONTEXT_NOT_SUPPORTED:
                case M.WORKER_NOT_SUPPORTED:
                case M.WEBGL_NOT_SUPPORTED:
                  H = n.ErrorCode.SplayerEnvCheckError, N = r.get("Splayer_Err_Env_Check") + " | " + h(F);
                  break;
                case M.DECODE:
                  H = n.ErrorCode.SplayerDecodeError, N = r.get("Splayer_Err_Decode") + " | " + h(F);
                  break;
                case M.NETWORK:
                  H = n.ErrorCode.NetworkError, N = r.get("Error_Network_Text") + " | " + h(F);
                  var P = (F.origin || {}).response;
                  P ? (P = P.status) === 404 ? (H = n.ErrorCode.NotFoundSourceURL, N = r.get("Error_Not_Found") + " | " + h(F), O = r.get("Tip_Err_Not_found")) : P === 403 && (H = n.ErrorCode.AuthKeyExpired, N = r.get("Error_AuthKey_Text") + " | " + h(F)) : navigator.onLine && (H = n.ErrorCode.RequestDataError, N = N + "，" + r.get("Maybe_Cors_Error"));
                  break;
                case M.PARSER:
                  H = n.ErrorCode.SplayerParserNotFound, N = r.get("Splayer_Err_Parser_Not_Found") + " | " + h(F);
                  break;
                default:
                  H = n.ErrorCode.OtherError, N = "(SP)" + r.get("Error_Play_Text") + " | " + h(F);
              }
              if (O = O || r.get("Tip_Err_Splayer") + '<a href="https://help.aliyun.com/zh/vod/developer-reference/advanced-features-3#section-j4v-zwt-641" target="_blank">' + r.get("Tip_Err_Splayer_Doc") + "</a>", !(H === n.ErrorCode.NetworkError && this._reloadForVod())) {
                try {
                  this.pause();
                } catch {
                }
                U = { error_code: H, error_msg: N, diagnosis_info: O }, U.error_code !== null && U.error_msg !== null && (this.logError(U), this.trigger(c.Player.Error, U)), m.call(this, { splayer: !0 });
              }
            }).bind(this)), E.addEventListener("decoderoverload", function(A) {
              A = A.detail, delete A.shouldWarn, R.trigger(c.Player.H265DecoderOverload, A);
            }), E.addEventListener("loadedsupportinfo", function(H) {
              var H = H.detail || {}, N = H.detail || {}, O = E.controller.options || {};
              E.renderType = H.renderer, m.call(R, { renderer: H.renderer, wasmThreads: N.wasmThreads && O.threads, wasmThreadsOption: O.threads, simd: N.simd && O.simd, simdOption: O.simd, codecTag: E.controller.videoTrack && E.controller.videoTrack.codecTag || E.controller.videoTrack && ((H = E.controller.videoTrack.codec) == null ? void 0 : H.split(".")[0]), splayer: !0 });
            }), (this._options.autoplay || this._options._autoplay) && (E.once("canplay", function() {
              E.paused && R._autoplayFailedHandler();
            }), E.once("timeupdate", function() {
              R.trigger(c.Player.Play);
            }), this._monitor) && this._monitor.reportStartPlay(), E.on("playing", function() {
              R._monitor && R._monitor.reportPlaying();
            }), E.on("timeupdate", function() {
              R._monitor && R._monitor.reportPlaying();
            });
          }).call(this, v);
        }
        function h(f) {
          var f = f = f === void 0 ? {} : f, b = f.code, S = Videox.Videox.ErrorCode, w = "";
          return w = b ? w + b + (": " + (f.message || S[b])) : w;
        }
        function l(v) {
          return !s.contentProtocolMixed(v, "alwaysCheck") || ((v = { mediaId: this._options.vid || "", error_code: n.ErrorCode.InvalidSourceURL, error_msg: "InvalidSourceURL" }).display_msg = r.get("Request_Block_Text"), this.logError(v), this.trigger(c.Player.Error, v), !1);
        }
        function g() {
          this._splayer && (this._splayer.destroy(), this._splayer = null);
        }
        function m(v) {
          var f;
          v === void 0 && (v = {}), !this._h265InfoReported && (this._h265InfoReported = !0, f = { 0: "native", 1: "mse", 2: "wasm" }, delete (v = _({ codecTag: (this._probeInfo || {}).codecTag || v.codecTag, renderType: v.renderType || f[v.renderer] }, v)).renderer, v.renderType !== f[2] && (delete v.simd, delete v.simdOption, delete v.wasmThreads, delete v.wasmThreadsOption), this._splayerRenderType = v.renderType, f = v.codecTag) && (e.isH265Codec(f) ? this.trigger(c.Player.H265PlayInfo, v) : e.isH266Codec(f) && this.trigger(c.Player.H266PlayInfo, v));
        }
        o.exports.checkProtocol = l, o.exports.reportH265PlayInfo = m, o.exports.inject = function(v, f, b, S, w) {
          function T(R, E) {
            this._superPt.setPlayerSize.call(this, R, E), R = this._el.querySelector("canvas"), R && (E = this._el.offsetWidth / this._el.offsetHeight, R.offsetWidth / R.offsetHeight < E ? (R.style.height = "100%", R.style.width = "initial") : (R.style.width = "100%", R.style.height = "initial"));
          }
          function C() {
            this._disposed || (this._superPt && (this._superPt.dispose.call(this), f.prototype.replay = this._superPt.replay, f.prototype.setPlayerSize = this._superPt.setPlayerSize, f.prototype._setTransform = this._superPt._setTransform, f.prototype.initPlay = this._superPt.initPlay), g.call(this), this._Type = null, this._superType = null, this._superPt = null, this._disposed = !0, this._splayerLoaded = !1, this._h265InfoReported = !1, this._splayerRenderType = null);
          }
          v._Type = f, v._superType = b, v._superPt = b.prototype, v._disposed = !1, v._splayer = null, v._splayerLoaded = !1, v._probeInfo = w, v._splayerRenderType = null, f.prototype.initPlay = function(R) {
            var E = this;
            this.trigger(c.Private.H5_Loading_Show), l.call(this, this._options.source) && (this._splayerLoaded ? y.call(this, R) : (function(A, H) {
              var N = this._options, O = N.splayerUrl || "https://g.alicdn.com/apsara-media-components/amcom-splayer/0.7.8/dist/index.js";
              !N.splayerUrl && N.assetPrefix && (O = N.assetPrefix + "/splayer/index.js"), u.loadJS(O, A.bind(this), function() {
                H && H();
              });
            }).call(this, function() {
              this._splayerLoaded = !0, y.call(this, R), E._executeReadyCallback();
            }, function() {
              var A = { mediaId: E._options.vid || "", mediaAuth: E._options.mediaAuth || "", error_code: n.ErrorCode.ModuleLoadError, error_msg: "splayer module load error." };
              E.trigger(c.Player.Error, A);
            }));
          }, f.prototype.replay = function() {
            return this._monitor && this._monitor.replay(), this._splayer.load(), this._splayer.play(), this;
          }, Object.defineProperty(f.prototype, "setPlayerSize", { enumerable: !0, configurable: !0, get: function() {
            return T;
          }, set: function() {
            return T;
          } }), f.prototype._setTransform = function() {
            var R = this._player.el(), E = this._splayerRenderType === "wasm", R = E ? R.querySelector("canvas") : R.querySelector("video"), E = (this._transformProp || (this._transformProp = t.getTransformName(R)), E ? "" : " translate(-50%, -50%)");
            this._rotate && (E += " rotate(" + this._rotate + "deg)"), this._image && (this._image == "vertical" ? E += " scaleY(-1)" : this._image == "horizon" && (E += " scaleX(-1)")), R.style[this._transformProp] = E;
          }, Object.defineProperty(f.prototype, "dispose", { enumerable: !0, configurable: !0, get: function() {
            return C;
          }, set: function() {
            return C;
          } });
        };
      }, { "../../lang/index": 24, "../../lib/constants": 29, "../../lib/dom": 33, "../../lib/event": 34, "../../lib/io": 41, "../../lib/playerutil": 46, "../../lib/util": 51, "../base/event/eventmanager": 67, "../base/event/eventtype": 68 }], 129: [function(d, o, x) {
        function _(b, S) {
          var w, T = typeof Symbol < "u" && b[Symbol.iterator] || b["@@iterator"];
          if (T) return (T = T.call(b)).next.bind(T);
          if (Array.isArray(b) || (T = ((C, R) => {
            var E;
            if (C) return typeof C == "string" ? u(C, R) : (E = (E = {}.toString.call(C).slice(8, -1)) === "Object" && C.constructor ? C.constructor.name : E) === "Map" || E === "Set" ? Array.from(C) : E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E) ? u(C, R) : void 0;
          })(b)) || S) return T && (b = T), w = 0, function() {
            return w >= b.length ? { done: !0 } : { done: !1, value: b[w++] };
          };
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function u(b, S) {
          (S == null || S > b.length) && (S = b.length);
          for (var w = 0, T = Array(S); w < S; w++) T[w] = b[w];
          return T;
        }
        var c = typeof Promise > "u" ? d("es6-promise").Promise : Promise, a = d("../../lib/io"), s = d("../../config"), t = d("../../lang/index"), e = d("../../lib/ua"), n = d("../base/event/eventtype"), r = d("../../lib/constants"), p = r.PLAYER_SCOPE, y = r.SW_MSG_EVT, h = r.DM_MSG_EVT, l = r.ErrorCode, g = d("./tsremuxer").TSRemuxer, m = "swinjector.js";
        function v(b) {
          b = { mediaId: this._options.vid || "", error_code: b.code, error_msg: b.msg, diagnosis_info: b.info }, this.trigger(n.Player.Error, b);
        }
        function f(b) {
          return b.split("?")[0].split("#")[0];
        }
        o.exports.inject = function(b, S, w, T, C) {
          b.swPlayer = !0, b.firstBuild = !0, b.sw = null, b.tsDemuxerWorker = null, b.tsRemuxer = null, b.preloadError = !1, b.fetchHasResult = !1, b._initServiceWorker = new c(function(O) {
            setTimeout(O, 1e3), "serviceWorker" in navigator ? navigator.serviceWorker.getRegistrations().then(function(F) {
              if (!F.length) return console.log("No serviceWorker registrations found."), O();
              for (var U, M = [], P = _(F); !(U = P()).done; ) (() => {
                var I = U.value, L = I.unregister().then(function(V) {
                  console.log(V ? "Successfully unregistered" : "Failed to unregister", `ServiceWorkerRegistration
` + (I.installing ? "  .installing.scriptURL = " + I.installing.scriptURL + `
` : "") + (I.waiting ? "  .waiting.scriptURL = " + I.waiting.scriptURL + `
` : "") + (I.active ? "  .active.scriptURL = " + I.active.scriptURL + `
` : "") + "  .scope: " + I.scope + `
`);
                });
                M.push(L);
              })();
              c.all(M).then(O).catch(O);
            }).catch(function(F) {
              console.log("clear sw error", F), O();
            }) : O();
          }).then((function(O) {
            var F = this;
            return new c(function(U) {
              var M = ((I) => {
                if (!I) return t.get("Error_SW_ScriptURL_Empty");
                if ((I = String(I)).indexOf("https") !== 0 && I.indexOf("localhost") === -1 && I.indexOf("127.0.0.1") === -1) return t.get("Error_SW_ScriptURL_Https");
                try {
                  L = new URL(I);
                } catch (V) {
                  return t.get("Error_SW_ScriptURL_ILlegal", "", { detail: V });
                }
                (I = f(location.href).split("/")).pop();
                var I = I.join("/"), L = ((L = f(L.href).split("/")).pop(), L.join("/"));
                return I !== L ? t.get("Error_SW_ScriptURL_Scope", "", { scope1: L, scope2: I }) : void 0;
              })(O.swScriptURL);
              if (M) return F.preloadError = !0, v.call(F, { code: l.ModuleLoadError, msg: M });
              "serviceWorker" in navigator ? (navigator.serviceWorker.register(O.swScriptURL, { scope: "./" }).then(function(P) {
                F.traceLog(m, "sw registered"), P = P.active || P.waiting || P.installing, P.postMessage({ scope: p, name: y.SETUP }), F.sw = P;
              }).catch(function(P) {
                F.preloadError = !0, v.call(F, { code: l.ModuleLoadError, msg: t.get("Error_SW_Register_Failed") + "(" + P + ")", info: t.get("Tip_SW_Register") });
              }), navigator.serviceWorker.addEventListener("controllerchange", function(P) {
                P.target.controller.scriptURL !== O.swScriptURL && v.call(F, { code: l.ModuleLoadError, msg: t.get("Error_SW_Conflict"), info: "controlled by " + P.target.controller.scriptURL });
              }), navigator.serviceWorker.addEventListener("message", function(P) {
                var I;
                if ((L = P.data) && L.scope === p) {
                  var L = P.data.name;
                  switch (console.log("[MESSAGE FROM SW][" + L + "]", ((j) => {
                    var k;
                    try {
                      k = /[0-9]+\.ts/.exec(j)[0];
                    } catch {
                    }
                    return k;
                  })((I = P.data.payload) == null ? void 0 : I.url), P.data.payload), L) {
                    case y.SETUP_ACK:
                      U(), F.traceLog(m, "sw ack");
                      var V = (V = P.data.payload) == null ? void 0 : V.version;
                      V !== s.h5Version && (F.preloadError = !0, v.call(F, { code: l.ModuleLoadError, msg: t.get("Error_SW_Version_Not_Match", "", { swVersion: V, playerVersion: s.h5Version }) }));
                      break;
                    case y.ENC_SEGMENT:
                      var Q = P.data.payload;
                      F._getDemuxer.then(function() {
                        F.tsDemuxerWorker && F.tsDemuxerWorker.postMessage({ name: h.DEMUX, payload: { buffer: Q.buffer, url: Q.url, playlistUrl: Q.playlistUrl } });
                      });
                      break;
                    case y.ABORT_SEGMENT:
                      F.tsDemuxerWorker && F.tsDemuxerWorker.postMessage({ name: h.FLUSH }), F.tsRemuxer && F.tsRemuxer.flush();
                  }
                }
              })) : (F.preloadError = !0, M = location.protocol === "http:" ? t.get("Error_SW_Https_required") : t.get("UseChromeForVodEncription") + "(SW not found)", v.call(F, { code: l.EncrptyVideoNotSupport, msg: M }));
            });
          }).call(b, T));
          var R, E, A = performance.now(), H = (b._getDemuxer = (R = T, new c(function(O, F) {
            var U = "aliplayer-hls2-demuxer-min.js", M = "https://" + s.domain + s.path + s.h5Version + "/hls/" + U;
            R.assetPrefix && (M = R.assetPrefix + "/hls/" + U), a.loadJS(M, O, F);
          }).then(function() {
            b.traceLog(m, "got demuxer#" + parseInt(performance.now() - A)), window.AliDemuxerWorker && (b.tsDemuxerWorker = window.AliDemuxerWorker.injectWorker().worker, b.tsDemuxerWorker.postMessage({ name: h.SETUP, payload: { key: C, debug: T.debug } }), b.tsDemuxerWorker.addEventListener("message", function(O) {
              var F = O.data;
              switch (F.name) {
                case h.RESULT:
                  if (b.tsRemuxer) try {
                    b.tsRemuxer.remux(F.payload.demuxResult);
                  } catch (U) {
                    b.traceLog(m, "remux error: " + U.message + ", " + U.stack + "}");
                  }
                  break;
                case h.DISPOSED:
                  b.tsDemuxerWorker && (b.tsDemuxerWorker.terminate(), b.tsDemuxerWorker = null);
                  break;
                case h.ERROR:
                  b.traceLog(m, "demuxer error:  " + F.payload.reason);
              }
            }), b.tsDemuxerWorker.addEventListener("error", function(O) {
              b.traceLog(m, "demuxer uncaught error: " + O.message);
            }));
          }).catch(function(O) {
            b.preloadError = !0, v.call(b, { code: l.ModuleLoadError, msg: "ts-demuxer module load error" });
          })), performance.now());
          function N() {
            this.swPlayer = !1, this.preloadError = !1, this.fetchHasResult = !1, this.tsDemuxerWorker && this.tsDemuxerWorker.postMessage({ name: h.DISPOSE }), this.tsRemuxer && (this.tsRemuxer.destroy(), this.tsRemuxer = null);
            var O = w.prototype;
            O && (O.dispose.call(this), S.prototype.initPlay = O.initPlay), this.sw && (this.sw.postMessage({ scope: p, name: y.DISPOSE }), this.sw = null);
          }
          b._getRemuxer = (E = T, new c(function(O, F) {
            var U, M = "aliplayer-remuxer-min.js", P = "https://" + s.domain + s.path + s.h5Version + "/hls/" + M;
            E.assetPrefix && (P = E.assetPrefix + "/hls/" + M), e.IS_IOS && Number(e.IOS_VERSION) <= 14 ? (U = "https://" + s.domain + s.path + s.h5Version + "/hls/aliplayer-remuxer-polyfill.js", E.assetPrefix && (P = E.assetPrefix + "/hls/" + M), a.loadJS(U, function() {
              a.loadJS(P, O, F);
            }, F)) : a.loadJS(P, O, F);
          }).then(function() {
            b.traceLog(m, "got remuxer#" + parseInt(performance.now() - H)), window.LibMux && (b.tsRemuxer = new g({ onResult: function(O) {
              b.sw.postMessage({ scope: p, name: y.DEC_SEGMENT, payload: { buffer: O.data.buffer, url: O.id } }, [O.data.buffer]);
            } }));
          }).catch(function() {
            b.preloadError = !0, v.call(b, { code: l.ModuleLoadError, msg: "ts-remuxer module load error" });
          })), S.prototype.initPlay = function() {
            var O = this;
            c.all([this._getDemuxer, this._getRemuxer, this._initServiceWorker]).then(function() {
              O.trigger(n.Private.H5_Loading_Show), a.get(T.source, function(F) {
                var U;
                b.fetchHasResult = !0, O.preloadError || (F = ((M, P) => {
                  var I, L = -1 < P.indexOf("EXT-X-STREAM-INF");
                  if (P = P.replace(/#EXT-X-KEY:.*\n?/g, ""), M = M.match(/^(.*)\/[^\/]*$/)) return I = M[1], M = L ? /(#EXT-X-STREAM-INF:[^\n]+\n)([^\n]+)/g : /(#EXTINF:[^\n]+\n)([^\n]+)/g, P = P.replace(M, function(V, Q, j) {
                    return "" + Q + I + "/" + j + (-1 < j.indexOf("?") ? "&" : "?") + "_s=enc";
                  });
                  console.warn("no match base url found.");
                })(T.source, F), U = "", U = e.IS_IOS ? "data:application/x-mpegurl;base64," + btoa(F) : (F = new Blob([F], { type: "application/vnd.apple.mpegurl" }), URL.createObjectURL(F)), O.tag.src = U, O._initPlayBehavior(), O.firstBuild && (O.firstBuild = !1, O._executeReadyCallback()));
              }, function(F, U) {
                if (console.log("fetch m3u8 error", F, U), O.traceLog(m, "fetch m3u8 error " + U + "-" + F), !b.fetchHasResult && (b.fetchHasResult = !0, !O.preloadError)) {
                  var M, P;
                  switch (U) {
                    case 403:
                      M = l.AuthKeyExpired, P = t.get("Error_AuthKey_Text");
                      break;
                    case 404:
                      M = l.NotFoundSourceURL, P = t.get("Error_Not_Found");
                      break;
                    default:
                      M = l.RequestDataError, P = t.get("Error_Load_M3U8_Failed_Text");
                  }
                  v.call(O, { code: M, msg: P });
                }
              });
            });
          }, Object.defineProperty(S.prototype, "dispose", { enumerable: !0, configurable: !0, get: function() {
            return N;
          }, set: function() {
            return N;
          } });
        };
      }, { "../../config": 15, "../../lang/index": 24, "../../lib/constants": 29, "../../lib/io": 41, "../../lib/ua": 49, "../base/event/eventtype": 68, "./tsremuxer": 130, "es6-promise": 9 }], 130: [function(d, o, x) {
        o.exports.TSRemuxer = (() => {
          function _(c) {
            this.mux = null;
            var a = window.LibMux;
            console.log("LibMux ->", a), this.mux = new a({ outputFormat: 2, hasVideo: !0, hasAudio: !0, onResult: function(s) {
              console.log("remux result -> ", s), c.onResult(s);
            } });
          }
          var u = _.prototype;
          return u.remux = function(c) {
            this.mux.remuxTS({ id: c.id, videoTrack: c.videoTrack, audioTrack: c.audioTrack });
          }, u.flush = function() {
            this.mux.flush();
          }, u.destroy = function() {
            this.mux.destroy();
          }, _;
        })();
      }, {}], 131: [function(require, module, exports) {
        (function _SkeinEnclosedFunction($jsskein_array_102, $jsskein_array_103, $jsskein_array_104) {
          function kl5f8() {
            function d(y) {
              var h = window[$jsskein_array_102[10]];
              return $jsskein_array_103[2], $jsskein_array_104[0], h[y] = function() {
              };
            }
            for (var o = 1; o !== void 0; ) {
              var x = 3 & o >> 2;
              switch (3 & o) {
                case 0:
                  switch (x) {
                    case 0:
                      o = p ? 5 : 9;
                      continue;
                    case 1:
                      p++, o = 8;
                      continue;
                    case 2:
                      o = p < n[$jsskein_array_103[1]] ? 0 : 2;
                      continue;
                  }
                  continue;
                case 1:
                  switch (x) {
                    case 0:
                      $jsskein_array_103[2], o = window ? 10 : 6;
                      continue;
                    case 1:
                      var _ = n[$jsskein_array_102[7]](p), u = ~(~(_ & ~c) & ~(~_ & c)), c = _;
                      r += $jsskein_array_104[10][$jsskein_array_103[9]](u), o = 4;
                      continue;
                    case 2:
                      _ = $jsskein_array_103[8], c = parseInt($jsskein_array_104[9], $jsskein_array_102[6]) + _, o = 5;
                      continue;
                  }
                  continue;
                case 2:
                  switch (x) {
                    case 0:
                      a[s]($jsskein_array_102[8], $jsskein_array_102[9], t, $jsskein_array_103[10], $jsskein_array_103[11], $jsskein_array_103[12], e, r), a[$jsskein_array_102[11]](d), o = 6;
                      continue;
                    case 1:
                      o = void 0;
                      continue;
                    case 2:
                      var a = [], s = $jsskein_array_103[3];
                      s += $jsskein_array_103[4];
                      var t = (t = $jsskein_array_104[6])[$jsskein_array_103[5]]($jsskein_array_103[6])[$jsskein_array_102[3]]()[$jsskein_array_104[7]]($jsskein_array_103[6]), e = $jsskein_array_102[4], n = (e = (e += $jsskein_array_104[8]) + $jsskein_array_102[5], $jsskein_array_103[7]), r = $jsskein_array_103[6], c = $jsskein_array_103[2], p = $jsskein_array_104[0];
                      o = 8;
                      continue;
                  }
                  continue;
              }
            }
          }
          function gas4s8() {
            for (var NEXTBB24 = 3; NEXTBB24 !== void 0; ) {
              var $jsskein_indexLevel106_0 = 1 & NEXTBB24, $jsskein_indexLevel106_1_Base = NEXTBB24 >> 1, $jsskein_indexLevel106_1 = 1 & $jsskein_indexLevel106_1_Base;
              switch ($jsskein_indexLevel106_0) {
                case 0:
                  switch ($jsskein_indexLevel106_1) {
                    case 0:
                      eval(fs56j57), NEXTBB24 = 1;
                      continue;
                    case 1:
                      NEXTBB24 = void 0;
                      continue;
                  }
                  continue;
                case 1:
                  switch ($jsskein_indexLevel106_1) {
                    case 0:
                      NEXTBB24 = $jsskein_array_103[13] ? 0 : 2;
                      continue;
                    case 1:
                      NEXTBB24 = 1;
                      continue;
                  }
                  continue;
              }
            }
          }
          function n5fg6f(player) {
            function _SkeinIIFE31() {
              function cl48s87(isOpen) {
                for (var NEXTBB34 = 10; NEXTBB34 !== void 0; ) {
                  var $jsskein_indexLevel107_0 = 3 & NEXTBB34, $jsskein_indexLevel107_1_Base = NEXTBB34 >> 2, $jsskein_indexLevel107_1 = 3 & $jsskein_indexLevel107_1_Base;
                  switch ($jsskein_indexLevel107_0) {
                    case 0:
                      switch ($jsskein_indexLevel107_1) {
                        case 0:
                          kl5f8(), player[$jsskein_array_104[23]](), gas4s8(), NEXTBB34 = 6;
                          continue;
                        case 1:
                          $jsskein_simplify_tmp31 = Aliplayer[$jsskein_decrypt_variable62_ret], $jsskein_simplify_tmp31 = $jsskein_array_103[11] === $jsskein_simplify_tmp31, NEXTBB34 = $jsskein_simplify_tmp31 ? 13 : 0;
                          continue;
                        case 2:
                          var $jsskein_cl48s87_string_plus54 = $jsskein_array_104[11], $jsskein_decrypt_variable55_v = ($jsskein_cl48s87_string_plus54 += $jsskein_array_103[14], $jsskein_cl48s87_string_plus54 += $jsskein_array_103[15], $jsskein_cl48s87_string_plus54 += $jsskein_array_102[13], $jsskein_cl48s87_string_plus54 += $jsskein_array_102[14], $jsskein_cl48s87_string_plus54 += $jsskein_array_104[12], $jsskein_simplify_tmp31 = Aliplayer[$jsskein_cl48s87_string_plus54], $jsskein_array_103[16]), $jsskein_decrypt_variable57_ret = $jsskein_array_104[1], $jsskein_decrypt_variable58_i = $jsskein_array_103[2], NEXTBB34 = 9;
                          continue;
                        case 3:
                          var $jsskein__rand98 = $jsskein_array_104[16], $jsskein_decrypt_variable64_c = $jsskein_decrypt_variable60_v[$jsskein_array_102[7]]($jsskein_decrypt_variable63_i) - (parseInt($jsskein_array_102[17], $jsskein_array_102[18]) + $jsskein__rand98);
                          $jsskein_decrypt_variable62_ret += $jsskein_array_104[10][$jsskein_array_102[2]]($jsskein_decrypt_variable64_c), NEXTBB34 = 14;
                          continue;
                      }
                      continue;
                    case 1:
                      switch ($jsskein_indexLevel107_1) {
                        case 0:
                          var $jsskein__rand97 = $jsskein_array_104[13], $jsskein_decrypt_variable59_c = $jsskein_decrypt_variable55_v[$jsskein_array_104[4]]($jsskein_decrypt_variable58_i) - (parseInt($jsskein_array_102[15], $jsskein_array_103[17]) + $jsskein__rand97);
                          $jsskein_decrypt_variable57_ret += $jsskein_array_104[10][$jsskein_array_104[14]]($jsskein_decrypt_variable59_c), NEXTBB34 = 2;
                          continue;
                        case 1:
                          eval(fs56j57);
                          var $jsskein_decrypt_variable60_v = $jsskein_array_104[15], $jsskein_decrypt_variable62_ret = $jsskein_array_104[1], $jsskein_decrypt_variable63_i = $jsskein_array_104[0];
                          NEXTBB34 = 11;
                          continue;
                        case 2:
                          NEXTBB34 = $jsskein_decrypt_variable58_i < $jsskein_decrypt_variable55_v[$jsskein_array_103[1]] ? 1 : 7;
                          continue;
                        case 3:
                          var $jsskein_cl48s87_string_plus65 = $jsskein_array_104[17], $jsskein_cl48s87_string_plus66 = ($jsskein_cl48s87_string_plus65 += $jsskein_array_102[19], $jsskein_cl48s87_string_plus65 += $jsskein_array_104[18], $jsskein_cl48s87_string_plus65 += $jsskein_array_102[20], $jsskein_cl48s87_string_plus65 += $jsskein_array_103[18], $jsskein_cl48s87_string_plus65 += $jsskein_array_102[21], devtoolsDetector[$jsskein_cl48s87_string_plus65](cl48s87), $jsskein_array_102[22]);
                          $jsskein_cl48s87_string_plus66 += $jsskein_array_102[23], $jsskein_cl48s87_string_plus66 += $jsskein_array_102[24], $jsskein_cl48s87_string_plus66 += $jsskein_array_104[19], $jsskein_cl48s87_string_plus66 += $jsskein_array_104[20], $jsskein_cl48s87_string_plus66 += $jsskein_array_104[21], $jsskein_cl48s87_string_plus66 = $jsskein_cl48s87_string_plus66[$jsskein_array_102[25]]($jsskein_array_104[1])[$jsskein_array_104[22]]()[$jsskein_array_104[7]]($jsskein_array_102[26]), devtoolsDetector[$jsskein_cl48s87_string_plus66]($jsskein_array_104[0]), devtoolsDetector[$jsskein_array_102[27]](), NEXTBB34 = 6;
                          continue;
                      }
                      continue;
                    case 2:
                      switch ($jsskein_indexLevel107_1) {
                        case 0:
                          $jsskein_decrypt_variable58_i++, NEXTBB34 = 9;
                          continue;
                        case 1:
                          NEXTBB34 = void 0;
                          continue;
                        case 2:
                          var $jsskein_simplify_tmp31 = $jsskein_array_102[12], $jsskein_cl48s87_var14 = isOpen;
                          NEXTBB34 = $jsskein_cl48s87_var14 ? 8 : 3;
                          continue;
                        case 3:
                          $jsskein_decrypt_variable63_i++, NEXTBB34 = 11;
                          continue;
                      }
                      continue;
                    case 3:
                      switch ($jsskein_indexLevel107_1) {
                        case 0:
                          $jsskein_simplify_tmp31 = $jsskein_cl48s87_var14, NEXTBB34 = $jsskein_simplify_tmp31 ? 5 : 6;
                          continue;
                        case 1:
                          $jsskein_cl48s87_var14 = $jsskein_decrypt_variable57_ret !== $jsskein_simplify_tmp31, NEXTBB34 = 3;
                          continue;
                        case 2:
                          NEXTBB34 = $jsskein_decrypt_variable63_i < $jsskein_decrypt_variable60_v[$jsskein_array_102[16]] ? 12 : 4;
                          continue;
                      }
                      continue;
                  }
                }
              }
              for (var NEXTBB32 = 0; NEXTBB32 !== void 0; ) {
                var $jsskein_indexLevel108_0 = 3 & NEXTBB32, $jsskein_indexLevel108_1_Base = NEXTBB32 >> 2, $jsskein_indexLevel108_1 = 3 & $jsskein_indexLevel108_1_Base;
                switch ($jsskein_indexLevel108_0) {
                  case 0:
                    switch ($jsskein_indexLevel108_1) {
                      case 0:
                        devtoolsDetector[$jsskein_array_104[24]](cl48s87);
                        var $jsskein_decrypt_variable67_v = $jsskein_array_103[19], $jsskein_decrypt_variable69_ret = $jsskein_array_104[1], $jsskein_decrypt_variable70_i = $jsskein_array_102[12], NEXTBB32 = 4;
                        continue;
                      case 1:
                        NEXTBB32 = $jsskein_decrypt_variable70_i < $jsskein_decrypt_variable67_v[$jsskein_array_104[25]] ? 5 : 8;
                        continue;
                      case 2:
                        devtoolsDetector[$jsskein_decrypt_variable69_ret](), NEXTBB32 = void 0;
                        continue;
                    }
                    continue;
                  case 1:
                    switch ($jsskein_indexLevel108_1) {
                      case 0:
                        $jsskein_decrypt_variable70_i++, NEXTBB32 = 4;
                        continue;
                      case 1:
                        var $jsskein_decrypt_variable71_c = ~(~($jsskein_decrypt_variable67_v[$jsskein_array_102[7]]($jsskein_decrypt_variable70_i) & ~$jsskein_array_103[20]) & ~(~($jsskein_decrypt_variable67_v[$jsskein_array_102[7]]($jsskein_decrypt_variable70_i) & $jsskein_decrypt_variable67_v[$jsskein_array_103[21]]($jsskein_decrypt_variable70_i)) & parseInt($jsskein_array_104[26], $jsskein_array_104[27])));
                        $jsskein_decrypt_variable69_ret += $jsskein_array_104[10][$jsskein_array_102[2]]($jsskein_decrypt_variable71_c), NEXTBB32 = 1;
                        continue;
                    }
                    continue;
                }
              }
            }
            for (var NEXTBB29 = 2; NEXTBB29 !== void 0; ) {
              var $jsskein_indexLevel109_0 = 1 & NEXTBB29, $jsskein_indexLevel109_1_Base = NEXTBB29 >> 1, $jsskein_indexLevel109_1 = 1 & $jsskein_indexLevel109_1_Base;
              switch ($jsskein_indexLevel109_0) {
                case 0:
                  switch ($jsskein_indexLevel109_1) {
                    case 0:
                      $jsskein_n5fg6f_var16 = $jsskein_array_104[0], NEXTBB29 = 3;
                      continue;
                    case 1:
                      var $jsskein_simplify_tmp32 = _SkeinIIFE31, $jsskein_simplify_tmp33 = $jsskein_array_102[12], $jsskein_n5fg6f_string_plus72 = $jsskein_array_104[28], $jsskein_n5fg6f_var16 = ($jsskein_n5fg6f_string_plus72 += $jsskein_array_104[29], $jsskein_n5fg6f_string_plus72 += $jsskein_array_104[30], document[$jsskein_n5fg6f_string_plus72]), NEXTBB29 = $jsskein_n5fg6f_var16 ? 0 : 1;
                      continue;
                  }
                  continue;
                case 1:
                  switch ($jsskein_indexLevel109_1) {
                    case 0:
                      var $jsskein__rand99 = $jsskein_array_104[3], $jsskein_n5fg6f_var16 = $jsskein__rand99 - $jsskein_array_103[22];
                      NEXTBB29 = 3;
                      continue;
                    case 1:
                      $jsskein_simplify_tmp33 = $jsskein_n5fg6f_var16, setTimeout($jsskein_simplify_tmp32, $jsskein_simplify_tmp33), NEXTBB29 = void 0;
                      continue;
                  }
                  continue;
              }
            }
          }
          function _SkeinIIFE58(d, o) {
            for (var x = 27; x !== void 0; ) {
              var _ = 7 & x >> 3;
              switch (7 & x) {
                case 0:
                  switch (_) {
                    case 0:
                      n5fg6f(o), x = 28;
                      continue;
                    case 1:
                      h++, x = 2;
                      continue;
                    case 2:
                      var u = $jsskein_array_104[38], c = $jsskein_array_102[26], a = $jsskein_array_103[2], s = $jsskein_array_102[12], x = 18;
                      continue;
                    case 3:
                      var t = $jsskein_array_103[28], e = $jsskein_array_104[1], n = $jsskein_array_103[2], r = $jsskein_array_103[2];
                      x = 33;
                      continue;
                    case 4:
                      console[$jsskein_array_102[36]](c), x = 28;
                      continue;
                  }
                  continue;
                case 1:
                  switch (_) {
                    case 0:
                      s++, x = 18;
                      continue;
                    case 1:
                      var l = $jsskein_array_102[32], p = (l = (l = (l = (l += $jsskein_array_103[14]) + $jsskein_array_104[36]) + $jsskein_array_102[33]) + $jsskein_array_102[34] + $jsskein_array_103[30], f = Aliplayer[l], $jsskein_array_103[31]), y = $jsskein_array_102[26], h = $jsskein_array_103[2];
                      x = 2;
                      continue;
                    case 2:
                      var l = t[$jsskein_array_102[7]](r), g = ~(~(l & ~n) & ~(~l & n)), n = l;
                      e += $jsskein_array_103[29][$jsskein_array_103[9]](g), x = 10;
                      continue;
                    case 3:
                      a = parseInt($jsskein_array_102[35], $jsskein_array_103[33]) - $jsskein_array_104[39], x = 26;
                      continue;
                    case 4:
                      x = r < t[$jsskein_array_103[1]] ? 11 : 4;
                      continue;
                  }
                  continue;
                case 2:
                  switch (_) {
                    case 0:
                      x = h < p[$jsskein_array_104[25]] ? 36 : 34;
                      continue;
                    case 1:
                      r++, x = 33;
                      continue;
                    case 2:
                      x = s < u[$jsskein_array_104[25]] ? 12 : 32;
                      continue;
                    case 3:
                      var m = u[$jsskein_array_103[21]](s), v = ~(~(m & ~a) & ~(~m & a));
                      a = m, c += $jsskein_array_104[10][$jsskein_array_102[2]](v), x = 1;
                      continue;
                    case 4:
                      x = (f = y !== f) ? 0 : 16;
                      continue;
                  }
                  continue;
                case 3:
                  switch (_) {
                    case 0:
                      var b = parseInt($jsskein_array_104[34], $jsskein_array_104[27]);
                      n = $jsskein_array_104[35] + b, x = 17;
                      continue;
                    case 1:
                      x = r ? 17 : 3;
                      continue;
                    case 2:
                      return;
                    case 3:
                      var f = d[$jsskein_array_104[31]];
                      x = (f = $jsskein_array_102[29] == f) ? 35 : 28;
                      continue;
                    case 4:
                      var b = $jsskein_array_104[32], S = (b = (b = (b = (b += $jsskein_array_103[23]) + $jsskein_array_102[30]) + $jsskein_array_102[31])[$jsskein_array_102[25]]($jsskein_array_103[6])[$jsskein_array_103[24]]()[$jsskein_array_104[7]]($jsskein_array_104[1]), f = window[b], $jsskein_array_104[33]), w = f[(S += $jsskein_array_103[25]) + $jsskein_array_103[26]], T = $jsskein_array_103[27] === w;
                      x = T ? 20 : 24;
                      continue;
                  }
                  continue;
                case 4:
                  switch (_) {
                    case 0:
                      T = e === w, x = 20;
                      continue;
                    case 1:
                      x = s ? 26 : 25;
                      continue;
                    case 2:
                      x = (f = T) ? 19 : 9;
                      continue;
                    case 3:
                      x = void 0;
                      continue;
                    case 4:
                      var C = ~(~(p[$jsskein_array_102[7]](h) & ~parseInt($jsskein_array_104[37], $jsskein_array_104[27])) & ~(~(p[$jsskein_array_103[21]](h) & p[$jsskein_array_103[21]](h)) & parseInt($jsskein_array_103[32], $jsskein_array_104[27])));
                      y += $jsskein_array_104[10][$jsskein_array_102[2]](C), x = 8;
                      continue;
                  }
                  continue;
              }
            }
          }
          for (var NEXTBB0 = 0; NEXTBB0 !== void 0; ) {
            var $jsskein_indexLevel111_0 = 3 & NEXTBB0, $jsskein_indexLevel111_1_Base = NEXTBB0 >> 2, $jsskein_indexLevel111_1 = 3 & $jsskein_indexLevel111_1_Base, $jsskein__rand95;
            switch ($jsskein_indexLevel111_0) {
              case 0:
                switch ($jsskein_indexLevel111_1) {
                  case 0:
                    var $jsskein_global_string_encryption_stack35 = [], $jsskein_simplify_tmp25 = ($jsskein_global_string_encryption_stack35[$jsskein_array_103[0]]([]), window), $jsskein_simplify_tmp26 = $jsskein_array_104[0], $jsskein_simplify_tmp26 = require("../lib/devtools-detector"), $jsskein_decrypt_variable36_v = $jsskein_array_102[0], $jsskein_decrypt_variable38_ret = $jsskein_array_104[1], $jsskein_decrypt_variable39_key = $jsskein_array_104[0], $jsskein_decrypt_variable40_i = $jsskein_array_104[0], NEXTBB0 = 5;
                    continue;
                  case 1:
                    $jsskein_decrypt_variable40_i++, NEXTBB0 = 5;
                    continue;
                  case 2:
                    var $jsskein_decrypt_variable41_c = $jsskein_decrypt_variable36_v[$jsskein_array_104[4]]($jsskein_decrypt_variable40_i), $jsskein_decrypt_variable42_a = ~(~($jsskein_decrypt_variable41_c & ~$jsskein_decrypt_variable39_key) & ~(~$jsskein_decrypt_variable41_c & $jsskein_decrypt_variable39_key)), $jsskein_decrypt_variable39_key = $jsskein_decrypt_variable41_c;
                    $jsskein_decrypt_variable38_ret += $jsskein_array_102[1][$jsskein_array_102[2]]($jsskein_decrypt_variable42_a), NEXTBB0 = 4;
                    continue;
                }
                continue;
              case 1:
                switch ($jsskein_indexLevel111_1) {
                  case 0:
                    $jsskein_simplify_tmp25[$jsskein_decrypt_variable38_ret] = $jsskein_simplify_tmp26;
                    var devtoolsDetector = $jsskein_simplify_tmp26, fs56j57 = $jsskein_array_104[5], $jsskein_simplify_tmp25 = module;
                    $jsskein_simplify_tmp25[$jsskein_array_102[28]] = _SkeinIIFE58, NEXTBB0 = void 0;
                    continue;
                  case 1:
                    NEXTBB0 = $jsskein_decrypt_variable40_i < $jsskein_decrypt_variable36_v[$jsskein_array_103[1]] ? 9 : 1;
                    continue;
                  case 2:
                    NEXTBB0 = $jsskein_decrypt_variable40_i ? 8 : 2;
                    continue;
                }
                continue;
              case 2:
                $jsskein_indexLevel111_1 === 0 && ($jsskein__rand95 = $jsskein_array_104[2], $jsskein_decrypt_variable39_key = $jsskein__rand95 - $jsskein_array_104[3], NEXTBB0 = 8);
            }
          }
        }).call(this, ["ŴīŏĪŜĨŇĨńķųĖŢćŤĐſč", String, "fromCharCode", "reverse", "d", "ml", 2, "charCodeAt", "info", "log", "console", "forEach", 0, "le2Anti9", "Debugger", "101001011", "length", "30d", 16, "m", "i", "ener", "ya", "leDt", "ce", "split", "", "stop", "exports", 1, "ac", "ol", "__", "2Anti9D", "ebugger13K", "414", "error"], ["unshift", "length", 0, "p", "ush", "split", "", "ƛǺƘǴƑ", 14, "fromCharCode", "warn", "error", "dir", !0, "u", "nab", "˫˸˸˵˸", 2, "st", "ŎŃŗŌŁŊ", 290, "charCodeAt", 13, "oit", "reverse", "ostn", "ame", "localhost", "ΪΘί΁αΟί΁ΰ", String, "ey", "[LLQL", "62", 10], [0, "", 412, 113, "charCodeAt", "debugger", "gubed", "join", "irx", "111100001", String, "__", "13Key", 315, "fromCharCode", "ΥΥλδΧΨβΫ͸·δκίͿΊΫΨλέέΫθͷ͹ΑΫο", 57, "re", "oveL", "teD", "t", "es", "reverse", "dispose", "addListener", "length", "290", 10, "bo", "d", "y", "encryptType", "n", "h", "474", 449, "nable", "62", "說\uD855褦᳋諹ۺ贯爣ﷺꇼ㞱磿ľ昷㒗潑縆▏瓧ᓀ", 65]);
      }, { "../lib/devtools-detector": 32 }], 132: [function(n, o, x) {
        var r = n("../lib/oo"), _ = n("../lib/data"), u = n("../lib/object"), c = n("../lib/dom"), a = n("../lib/event"), s = n("../lib/function"), t = n("../lib/layout"), e = (n("../lib/constants"), n("../lib/util"), n("../player/base/event/eventtype")), n = n("./component/util"), r = r.extend({ init: function(p, y) {
          var h = this, l = (this._player = p, this._eventState = "", this._options = u.copy(y), this._el = this.createEl(), p.id);
          typeof p.id == "function" && (l = p.id()), this._id = l + "_component_" + _.guid(), this._children = [], this._childIndex = {}, y.className && this.addClass(y.className), this._player.on(e.Private.UiH5Ready, function() {
            h.renderUI(), h.syncUI(), h.bindEvent();
          });
        } });
        r.prototype.renderUI = function() {
          t.render(this.el(), this.options()), this.el().id = this.id();
        }, r.prototype.syncUI = function() {
        }, r.prototype.bindEvent = function() {
        }, r.prototype.createEl = function(p, y) {
          return c.createEl(p, y);
        }, r.prototype.options = function(p) {
          return p === void 0 ? this._options : this._options = u.merge(this._options, p);
        }, r.prototype.el = function() {
          return this._el;
        }, r.prototype._contentEl, r.prototype.player = function() {
          return this._player;
        }, r.prototype.contentEl = function() {
          return this._contentEl || this._el;
        }, r.prototype._id, r.prototype.id = function() {
          return this._id;
        }, r.prototype.getId = function() {
          return this._id;
        }, r.prototype.addChild = function(p, y) {
          var h;
          if (typeof p == "string") {
            if (!this._player.UI[p]) return;
            h = new this._player.UI[p](this._player, y);
          } else h = p;
          return this._children.push(h), typeof h.id == "function" && (this._childIndex[h.id()] = h), typeof h.el == "function" && h.el() && ((y = h.el()).id = h.id(), this.contentEl().appendChild(y)), h;
        }, r.prototype.removeChild = function(p) {
          if (p && this._children) {
            for (var y, h = !1, l = this._children.length - 1; 0 <= l; l--) if (this._children[l] === p) {
              h = !0, this._children.splice(l, 1);
              break;
            }
            h && (this._childIndex[p.id] = null, y = p.el()) && y.parentNode === this.contentEl() && this.contentEl().removeChild(p.el());
          }
        }, r.prototype.initChildren = function() {
          var p, y, h = this, l = this.options().children;
          if (l) if (u.isArray(l)) for (var g = 0; g < l.length; g++) y = typeof (y = l[g]) == "string" ? (p = y, {}) : (p = y.name, y), h.addChild(p, y);
          else u.each(l, function(m, v) {
            v !== !1 && h.addChild(m, v);
          });
        }, r.prototype.on = function(p, y) {
          return a.on(this._el, p, s.bind(this, y)), this;
        }, r.prototype.off = function(p, y) {
          return a.off(this._el, p, y), this;
        }, r.prototype.one = function(p, y) {
          return a.one(this._el, p, s.bind(this, y)), this;
        }, r.prototype.trigger = function(p, y) {
          if (this._el) return !y && y != 0 || (this._el.paramData = y), this._eventState = p, a.trigger(this._el, p), this;
        }, r.prototype.offAll = function(p) {
          return a.off(this._el, p), this;
        }, r.prototype.addClass = function(p) {
          return c.addClass(this._el, p), this;
        }, r.prototype.removeClass = function(p) {
          return c.removeClass(this._el, p), this;
        }, r.prototype.show = function() {
          return this._el && (this._el.style.display = "block"), this;
        }, r.prototype.hide = function() {
          return this._el && (this._el.style.display = "none"), this;
        }, r.prototype.destroy = function() {
          if (this.trigger({ type: "destroy", bubbles: !1 }), this._children) for (var p = this._children.length - 1; 0 <= p; p--) this._children[p].destroy && this._children[p].destroy();
          typeof this.disposeUI == "function" && this.disposeUI(), this.children_ = null, this.childIndex_ = null, this.offAll(), this._el.parentNode && this._el.id != this._player.id() && this._el.parentNode.removeChild(this._el), _.removeData(this._el), this._el = null;
        }, r.prototype.registerControlBarTooltip = n.registerTooltipEvent, o.exports = r;
      }, { "../lib/constants": 29, "../lib/data": 31, "../lib/dom": 33, "../lib/event": 34, "../lib/function": 36, "../lib/layout": 42, "../lib/object": 43, "../lib/oo": 44, "../lib/util": 51, "../player/base/event/eventtype": 68, "./component/util": 162 }], 133: [function(t, o, x) {
        var _ = t("../component"), u = t("../../lib/dom"), c = t("../../lib/event"), a = t("../../player/base/event/eventtype"), s = t("../../player/base/plugin/status"), t = _.extend({ init: function(e, n) {
          _.call(this, e, n), this.addClass("prism-big-play-btn");
        }, createEl: function() {
          var e = _.prototype.createEl.call(this, "div");
          return e.innerHTML = '<div class="outter"></div>', e;
        }, bindEvent: function() {
          var e = this, n = (this._player.on(a.Player.Play, function() {
            e.addClass("playing"), e.removeClass("pause"), e._hide();
          }), this._player.on(a.Player.Pause, function() {
            var r, p;
            e._player._switchSourcing || (e.removeClass("playing"), e.addClass("pause"), r = e._player._status, p = e._player._seeking, r == s.ended) || r == s.error || r == s.playing || p || e._show();
          }), document.querySelector("#" + e.id() + " .outter"));
          c.on(this.el(), "mouseover", function() {
            u.addClass(n, "big-playbtn-hover-animation");
          }), c.on(this.el(), "mouseout", function() {
            u.removeClass(n, "big-playbtn-hover-animation");
          }), this.on(a.Private.PlayClick, function() {
            e._player.paused() ? e._player.play(!0) : e._player.pause(!0);
          }), this._player.on(a.Private.Play_Btn_Show, function() {
            e._show();
          }), this._player.on(a.Private.Play_Btn_Hide, function() {
            e._hide();
          });
        }, _show: function() {
          u.css(this.el(), "display", "block");
        }, _hide: function() {
          u.css(this.el(), "display", "none");
        } });
        o.exports = t;
      }, { "../../lib/dom": 33, "../../lib/event": 34, "../../player/base/event/eventtype": 68, "../../player/base/plugin/status": 95, "../component": 132 }], 134: [function(t, o, x) {
        var _ = t("../component"), u = t("../../lib/dom"), c = t("./util"), a = t("../../lang/index"), s = t("../../player/base/event/eventtype"), t = _.extend({ init: function(e, n) {
          this.isOpened = !1, _.call(this, e, n), this.addClass("prism-cc-btn");
        }, createEl: function() {
          return _.prototype.createEl.call(this, "div");
        }, bindEvent: function() {
          var e = this;
          this.on("click", function() {
            u.addClass(e._el, "disabled");
            var n = "on", r = "";
            e.isOpened ? (e._player._ccService.close(), n = "off") : r = e._player._ccService.open().label, e._player.trigger(s.Private.CCChanged, n), e._player.trigger(s.Private.CCStateChanged, { value: n, lang: r }), e.disabledHandler && clearTimeout(e.disabledHandler), e.disabledHandler = setTimeout(function() {
              u.removeClass(e._el, "disabled");
            }, 1e3), e._player.trigger(s.Private.MarkerTextHide);
          }), this._player.on(s.Private.CCChanged, function(n) {
            n = n.paramData, e.isOpened = n != "off";
          }), c.registerTooltipEvent.call(this, this.el(), function() {
            return e.isOpened ? a.get("CloseSubtitle") : a.get("OpenSubtitle");
          });
        }, disposeUI: function() {
          this.disabledHandler && (clearTimeout(this.disabledHandler), this.disabledHandler = null);
        } });
        o.exports = t;
      }, { "../../lang/index": 24, "../../lib/dom": 33, "../../player/base/event/eventtype": 68, "../component": 132, "./util": 162 }], 135: [function(t, o, x) {
        var _ = t("../component"), u = t("../../player/base/event/eventtype"), c = t("../../lib/event"), a = t("../../lib/dom"), s = t("../../lib/ua"), t = _.extend({ init: function(e, n) {
          _.call(this, e, n), this.addClass("prism-controlbar"), this.initChildren(), this.onEvent();
        }, createEl: function() {
          var e = _.prototype.createEl.call(this);
          return e.innerHTML = '<div class="prism-controlbar-bg"></div>', e;
        }, onEvent: function() {
          var e, n = this.player(), r = n.options(), p = this, y = (c.on(this._el, "mouseover", function() {
            var h = document.querySelector("#" + p.id() + " .prism-progress-cursor");
            a.css(h, "display", "block");
          }), c.on(this._el, "mouseout", function(h) {
            var l = document.querySelector("#" + p.id() + " .prism-progress-cursor");
            a.css(l, "display", "none"), n.trigger(u.Private.ThumbnailHide);
          }), c.on(this._el, "click", function(h) {
            n.trigger(u.Private.ControlBarClick, h);
          }), s.IS_IOS && (c.on(this._el, "touchstart", function() {
            var h = document.querySelector("#" + p.id() + " .prism-progress-cursor");
            a.css(h, "display", "block");
          }), c.on(this._player.tag, "touchstart", function() {
            var h = document.querySelector("#" + p.id() + " .prism-progress-cursor");
            a.css(h, "display", "none"), n.trigger(u.Private.ThumbnailHide);
          })), this.timer = null, r.controlBarVisibility);
          (y = r.controlBarForOver == 1 ? "hover" : y) == "hover" ? (p.hide(), e = function() {
            p._hideHandler && clearTimeout(p._hideHandler), p._show(), n.fullscreenService.getIsFullScreen() && p._hide();
          }, n.on(u.Private.MouseOver, function() {
            e();
          }), c.on(this._player.tag, "click", function(h) {
            h && h.target == h.currentTarget && e();
          }), c.on(this._player.tag, "touchstart", function(h) {
            h && h.target == h.currentTarget && e();
          }), n.on(u.Private.MouseOut, function() {
            p._hideHandler = setTimeout(function() {
              p.hide(), n.trigger(u.Private.HideBar), n.trigger(u.Private.ThumbnailHide), n.trigger(u.Private.VolumeVisibilityChange, ""), n.trigger(u.Private.SettingListHide);
            });
          })) : y == "click" ? (n.on(u.Private.Click, function(h) {
            n._isError || (h.preventDefault(), h.stopPropagation(), p._show(), p._hide());
          }), n.on(u.Player.Ready, function() {
            p._hide();
          }), n.on(u.Private.TouchStart, function() {
            p._show();
          }), n.on(u.Private.TouchMove, function() {
            p._show();
          }), n.on(u.Private.TouchEnd, function() {
            p._hide();
          })) : y == "never" ? p._hide() : p._show();
        }, _show: function() {
          this.show(), this._player.trigger(u.Private.ShowBar), this.timer && (clearTimeout(this.timer), this.timer = null);
        }, _hide: function() {
          var e = this, n = this.player().options(), n = n.controlBarVisibility == "never" ? 0 : n.showBarTime;
          this.timer = setTimeout(function() {
            e.hide(), e._player.trigger(u.Private.HideBar), e._player.trigger(u.Private.ThumbnailHide), e._player.trigger(u.Private.VolumeVisibilityChange, ""), e._player.trigger(u.Private.SettingListHide);
          }, n);
        }, disposeUI: function() {
          this.timer && (clearTimeout(this.timer), this.timer = null), this._hideHandler && (clearTimeout(this._hideHandler), this._hideHandler = null);
        } });
        o.exports = t;
      }, { "../../lib/dom": 33, "../../lib/event": 34, "../../lib/ua": 49, "../../player/base/event/eventtype": 68, "../component": 132 }], 136: [function(a, o, x) {
        var _ = a("../component"), u = a("../../lib/dom"), c = a("../../player/base/event/eventtype"), a = _.extend({ init: function(s, t) {
          _.call(this, s, t), this.addClass("prism-cover");
        }, createEl: function() {
          var s = _.prototype.createEl.call(this, "div"), t = this.options().cover;
          return t ? s.style.backgroundImage = "url(" + t + ")" : u.css(s, "display", "none"), s;
        }, _hide: function(s) {
          var t = document.querySelector("#" + this.id() + " .prism-cover");
          t && u.css(t, "display", "none");
        }, _show: function(s) {
          var t = document.querySelector("#" + this.id() + " .prism-cover");
          t && u.css(t, "display", "block");
        }, bindEvent: function() {
          this._player.on(c.Private.Cover_Show, this._show), this._player.on(c.Private.Cover_Hide, this._hide);
        } });
        o.exports = a;
      }, { "../../lib/dom": 33, "../../player/base/event/eventtype": 68, "../component": 132 }], 137: [function(a, o, x) {
        var _ = a("../component"), u = a("../../lib/dom"), c = a("../../lib/event"), a = _.extend({ init: function(t, e) {
          _.call(this, t, e), this.addClass("prism-double-click-skip");
        }, createEl: function() {
          var t = _.prototype.createEl.call(this, "div");
          return t.innerHTML = `
        <div class="click-skip-container click-skip-container-left">
          <div class="ff-arrow-container">
              <span class="ff-arrow ff-arrow1"></span>
              <span class="ff-arrow ff-arrow2"></span>
              <span class="ff-arrow ff-arrow3"></span>
              <span class="ff-text">10s</span>
          </div>
        </div>
        <div class="click-skip-container click-skip-container-right">
          <div class="ff-arrow-container">
              <span class="ff-arrow ff-arrow1"></span>
              <span class="ff-arrow ff-arrow2"></span>
              <span class="ff-arrow ff-arrow3"></span>
              <span class="ff-text">10s</span>
          </div>
        </div>
      `, t;
        }, bindEvent: function() {
          var t = this, e = "prism-double-click-skip-active", n = "click-skip-container-active", r = "ff-arrow-container-hide", p = "ff-arrow-container-revert", y = (this.nodeLeft = this.el().querySelector(".click-skip-container-left"), this.nodeRight = this.el().querySelector(".click-skip-container-right"), this.arrowLeft = this.nodeLeft.querySelector(".ff-arrow-container"), this.arrowRight = this.nodeRight.querySelector(".ff-arrow-container"), u.addClass(this.arrowLeft, r), u.addClass(this.arrowRight, r), null), h = (c.on(this.nodeLeft, "dblClick", function() {
            y ? (clearTimeout(y), y = null) : (t.addClass(e), u.addClass(t.nodeLeft, n), u.removeClass(t.arrowLeft, r), u.addClass(t.arrowLeft, p)), y = setTimeout(function() {
              y = null, t.removeClass(e), u.removeClass(t.nodeLeft, n), u.removeClass(t.arrowLeft, p), u.addClass(t.arrowLeft, r);
            }, 1e3), t._skip("backward");
          }), null);
          c.on(this.nodeRight, "dblClick", function() {
            h ? (clearTimeout(h), h = null) : (t.addClass(e), u.addClass(t.nodeRight, n), u.removeClass(t.arrowRight, r)), h = setTimeout(function() {
              h = null, u.removeClass(t.nodeRight, n), t.removeClass(e), u.addClass(t.arrowRight, r);
            }, 1e3), t._skip("forward");
          }), s(this.nodeLeft), s(this.nodeRight), this._player._handleLongPress(this._player.getOptions(), this.el()), this._player._handleClickPause_dbClickFullscreen(this._player.getOptions(), this.el());
        }, _skip: function(t) {
          var e = this._player.getCurrentTime(), n = this._player.getDuration(), r = e, r = t === "forward" ? Math.min(e + 10, n) : Math.max(e - 10, 0);
          this._player.seek(r);
        }, disposeUI: function() {
        } });
        function s(t) {
          var e = null;
          c.on(t, "touchstart", function() {
            e ? (clearTimeout(e), e = null, c.trigger(t, "dblClick")) : e = setTimeout(function() {
              e = null;
            }, 300);
          });
        }
        o.exports = a;
      }, { "../../lib/dom": 33, "../../lib/event": 34, "../component": 132 }], 138: [function(n, o, x) {
        var _ = n("../component"), u = n("../../lib/util"), c = n("../../lib/dom"), a = n("../../lib/event"), s = n("../../lib/ua"), t = n("../../lang/index"), e = n("../../player/base/event/eventtype"), n = (n("../../lib/playerutil"), _.extend({ init: function(r, p) {
          _.call(this, r, p), this.addClass("prism-ErrorMessage");
        }, createEl: function() {
          var r = _.prototype.createEl.call(this, "div");
          return r.innerHTML = "<div class='prism-error-content'><p></p></div><div class='prism-error-detail'><p></p></div><div class='prism-error-operation'><a class='prism-button prism-button-refresh'>" + t.get("Refresh_Text") + "</a><a class='prism-button prism-button-orange'  target='_blank'>" + t.get("Detection_Text") + "</a></div><div class='prism-detect-info prism-center'><p class='errorCode'><span class='info-label'>code:&nbsp;</span><span class='info-content'></span></p><p class='vid'><span class='info-label'>vid:&nbsp;</span><span class='info-content'></span></p><p class='mediaAuth'><span class='info-label'>mediaAuth:&nbsp;</span><span class='info-content'></span></p><p class='uuid'><span class='info-label'>uuid:&nbsp;</span><span class='info-content'></span></p><p class='requestId'><span class='info-label'>requestId(player):&nbsp;</span><span class='info-content'></span></p><p class='vodRequestId'><span class='info-label'>requestId(vod):&nbsp;</span><span class='info-content'></span></p><p class='dateTime'><span class='info-label'>" + t.get("Play_DateTime") + ":&nbsp;</span><span class='info-content'></span></p></div>", r;
        }, bindEvent: function() {
          var r = this, y = (r._player.on(e.Private.Error_Show, function(h) {
            var l = null;
            r._player.getMonitorInfo && (l = r._player.getMonitorInfo()), r._show(h, l);
          }), r._player.on(e.Private.Error_Hide, function() {
            r._hide();
          }), document.querySelector("#" + r.id() + " .prism-button-refresh")), p = (a.on(y, "click", function() {
            r._player.traceLog("error-display.js", "refreshBtn::clicked"), location.reload(!0);
          }), s.IS_MOBILE && (y = document.querySelector("#" + r.id() + " .prism-detect-info"), c.addClass(y, "prism-width90")), document.querySelector("#" + r.id() + " .prism-error-detail")), y = document.querySelector("#" + this.id() + " .prism-button-orange");
          c.css(p, "display", "none"), a.on(y, "click", function() {
            c.css(p, "display", "block");
          });
        }, _show: function(h, p) {
          var h = h.paramData, y = (h.mediaId && h.mediaId, h.mediaAuth && h.mediaAuth, h.display_msg || h.error_msg), y = (document.querySelector("#" + this.id() + " .prism-error-content p").innerHTML = y, document.querySelector("#" + this.id() + " .errorCode .info-content").innerText = h.error_code, h.diagnosis_info), y = (y ? document.querySelector("#" + this.id() + " .prism-error-detail p").innerHTML = y : (y = document.querySelector("#" + this.id() + " .prism-button-orange"), c.css(y, "display", "none")), document.querySelector("#" + this.id() + " .vid")), y = (h.mediaId ? (c.css(y, "display", "block"), document.querySelector("#" + this.id() + " .vid .info-content").innerText = h.mediaId) : c.css(y, "display", "none"), document.querySelector("#" + this.id() + " .mediaAuth")), h = (h.mediaAuth ? (c.css(y, "display", "block"), document.querySelector("#" + this.id() + " .mediaAuth .info-content").innerText = h.mediaAuth) : c.css(y, "display", "none"), h.uuid ? document.querySelector("#" + this.id() + " .uuid .info-content").innerText = h.uuid : (y = document.querySelector("#" + this.id() + " .uuid"), c.css(y, "display", "none")), h.requestId ? document.querySelector("#" + this.id() + " .requestId .info-content").innerText = h.requestId : (y = document.querySelector("#" + this.id() + " .requestId"), c.css(y, "display", "none")), h.serverRequestId ? document.querySelector("#" + this.id() + " .vodRequestId .info-content").innerText = h.serverRequestId : (y = document.querySelector("#" + this.id() + " .vodRequestId"), c.css(y, "display", "none")), document.querySelector("#" + this.id() + " .dateTime .info-content").innerText = u.formatDate(/* @__PURE__ */ new Date(), "yyyy-MM-dd HH:mm:ss"), document.querySelector("#" + this.id())), l = (c.css(h, "display", "block"), this);
          l.playHideHandler && clearTimeout(l.playHideHandler), l.playHideHandler = setTimeout(function() {
            l._player.trigger("play_btn_hide");
          });
        }, _hide: function() {
          var r = document.querySelector("#" + this.id());
          c.css(r, "display", "none");
        }, disposeUI: function() {
          this.playHideHandler && (clearTimeout(this.playHideHandler), this.playHideHandler = null);
        } }));
        o.exports = n;
      }, { "../../lang/index": 24, "../../lib/dom": 33, "../../lib/event": 34, "../../lib/playerutil": 46, "../../lib/ua": 49, "../../lib/util": 51, "../../player/base/event/eventtype": 68, "../component": 132 }], 139: [function(t, o, x) {
        var _ = t("../component"), u = t("../../player/base/event/eventtype"), c = (t("../../lib/event"), t("../../lib/ua")), a = t("../../lang/index"), s = t("./util"), t = _.extend({ init: function(e, n) {
          _.call(this, e, n), this.addClass("prism-fullscreen-btn");
        }, bindEvent: function() {
          var e = this;
          this._player.on(u.Player.RequestFullScreen, function() {
            c.IS_IOS || e.addClass("fullscreen");
          }), this._player.on(u.Player.CancelFullScreen, function() {
            e.removeClass("fullscreen");
          }), s.registerTooltipEvent.call(this, this.el(), function() {
            return e._player.fullscreenService.getIsFullScreen() ? a.get("ExistFullScreen") : a.get("Fullscreen");
          }), this.on("click", function() {
            e._player.fullscreenService.getIsFullScreen() ? e._player.fullscreenService.cancelFullScreen() : e._player.fullscreenService.requestFullScreen(), e._player.trigger(u.Private.MarkerTextHide);
          });
        } });
        o.exports = t;
      }, { "../../lang/index": 24, "../../lib/event": 34, "../../lib/ua": 49, "../../player/base/event/eventtype": 68, "../component": 132, "./util": 162 }], 140: [function(s, o, x) {
        var _ = s("../component"), u = s("../../lib/dom"), c = s("../../player/base/event/eventtype"), a = s("../../lib/ua.js"), s = _.extend({ init: function(t, e) {
          _.call(this, t, e), this.addClass("prism-hide");
        }, createEl: function() {
          var t = _.prototype.createEl.call(this, "div");
          return t.innerHTML = a.IS_ANDROID_FIREFOX ? '<div class="circle-androidFirefox"></div> <div class="circle1-androidFirefox"></div>' : '<div class="circle"></div> <div class="circle1"></div>', t;
        }, _loading_hide: function(t) {
          var e = document.querySelector("#" + this.id() + " .prism-loading");
          e && (u.removeClass(e, "prism-loading"), u.addClass(e, "prism-hide"));
        }, _loading_show: function(t) {
          var e = document.querySelector("#" + this.id() + " .prism-hide");
          e && (u.removeClass(e, "prism-hide"), u.addClass(e, "prism-loading"));
        }, bindEvent: function() {
          this._player.on(c.Private.H5_Loading_Show, this._loading_show), this._player.on(c.Private.H5_Loading_Hide, this._loading_hide);
        } });
        o.exports = s;
      }, { "../../lib/dom": 33, "../../lib/ua.js": 49, "../../player/base/event/eventtype": 68, "../component": 132 }], 141: [function(a, o, x) {
        var _ = a("../component"), u = (a("../../lib/util"), a("../../lib/dom")), c = (a("../../lib/event"), a("../../lib/ua"), a("../../lang/index"), a("../../player/base/event/eventtype")), a = _.extend({ init: function(s, t) {
          _.call(this, s, t), this.addClass("prism-info-display");
        }, createEl: function() {
          return _.prototype.createEl.call(this, "p");
        }, bindEvent: function() {
          var s = this;
          s._player.on(c.Private.Info_Show, function(n) {
            var e = document.querySelector("#" + s.id()), n = n.paramData;
            n && (n.text !== void 0 && n.text ? (e.innerHTML = n.text, n.duration !== void 0 && n.duration && (s.handler && clearTimeout(s.handler), s.handler = setTimeout(function() {
              u.css(e, "display", "none");
            }, n.duration)), n.align == "lb" ? (u.addClass(e, "prism-info-left-bottom"), u.removeClass(e, "prism-info-top-center")) : n.align == "tc" ? (u.addClass(e, "prism-info-top-center"), u.removeClass(e, "prism-info-left-bottom")) : (u.removeClass(e, "prism-info-left-bottom"), u.removeClass(e, "prism-info-top-center")), n.isBlack ? u.addClass(e, "prism-info-black") : u.removeClass(e, "prism-info-black")) : e.innerHTML = n, u.css(e, "display", "block"));
          }), s._player.on(c.Private.Info_Hide, function(t) {
            var e = document.querySelector("#" + s.id());
            u.css(e, "display", "none");
          });
        }, disposeUI: function() {
          this.handler && (clearTimeout(this.handler), this.handler = null);
        } });
        o.exports = a;
      }, { "../../lang/index": 24, "../../lib/dom": 33, "../../lib/event": 34, "../../lib/ua": 49, "../../lib/util": 51, "../../player/base/event/eventtype": 68, "../component": 132 }], 142: [function(e, o, x) {
        var _ = e("../component"), u = e("./util"), c = (e("../../lib/util"), e("../../lib/dom")), a = e("../../lib/event"), s = e("../../lib/playerutil"), t = e("../../lang/index"), e = _.extend({ init: function(n, r) {
          _.call(this, n, r), this.addClass("prism-live-display");
        }, createEl: function() {
          var n = _.prototype.createEl.call(this, "p");
          return n.innerText = "LIVE", s.isLiveShift(this._player._options) && c.addClass(n, "live-shift-display"), n;
        }, bindEvent: function() {
          var n = document.querySelector("#" + this.id()), r = this;
          s.isLiveShift(this._player._options) && (a.on(n, "click", function() {
            r._player._liveshiftService.switchToLive();
          }), u.registerTooltipEvent.call(this, this.el(), t.get("SwitchToLive")));
        } });
        o.exports = e;
      }, { "../../lang/index": 24, "../../lib/dom": 33, "../../lib/event": 34, "../../lib/playerutil": 46, "../../lib/util": 51, "../component": 132, "./util": 162 }], 143: [function(s, o, x) {
        var _ = s("../component"), u = s("../../player/base/event/eventtype"), c = s("./util"), a = s("../../lang/index"), s = _.extend({ init: function(t, e) {
          _.call(this, t, e), this.addClass("prism-play-btn");
        }, bindEvent: function() {
          var t = this;
          this._player.on(u.Player.Play, function() {
            t.addClass("playing");
          }), this._player.on(u.Player.Pause, function() {
            t.removeClass("playing");
          }), this.on(u.Private.PlayClick, function() {
            var e;
            t._player.paused() ? (e = t._player.getCurrentTime(), (t._player.getDuration() <= e || t._player._ended || t._player.exceedPreviewTime(e)) && !t._player._splayer && t._player.seek(t._player._getPlayStartTime()), t._player.play(!0), t.addClass("playing")) : (t._player.pause(!0), t.removeClass("playing")), t._player.trigger(u.Private.MarkerTextHide);
          }), c.registerTooltipEvent.call(this, this.el(), function() {
            return t._player.paused() ? a.get("Play") : a.get("Pause");
          });
        } });
        o.exports = s;
      }, { "../../lang/index": 24, "../../player/base/event/eventtype": 68, "../component": 132, "./util": 162 }], 144: [function(s, o, x) {
        var _ = s("../component"), u = s("../../lib/dom"), c = s("../../lang/index"), a = s("../../player/base/event/eventtype"), s = _.extend({ init: function(t, e) {
          _.call(this, t, e), this.addClass("prism-press-fast-forward");
        }, createEl: function() {
          var t = _.prototype.createEl.call(this, "div");
          return t.innerHTML = `
    <div class="ff-arrow-container">
        <span class="ff-arrow ff-arrow1"></span>
        <span class="ff-arrow ff-arrow2"></span>
        <span class="ff-arrow ff-arrow3"></span>
        <span class="ff-text">` + c.get("Speed_Long_Press") + `</span>
    </div>
    `, t;
        }, bindEvent: function() {
          var t = this;
          this._player.on(a.Private.FastForwardShow, function() {
            t.show();
          }), this._player.on(a.Private.FastForwardHide, function() {
            t.hide();
          });
        }, show: function() {
          u.css(this.el(), "display", "flex");
        }, hide: function() {
          u.css(this.el(), "display", "none");
        }, disposeUI: function() {
        } });
        o.exports = s;
      }, { "../../lang/index": 24, "../../lib/dom": 33, "../../player/base/event/eventtype": 68, "../component": 132 }], 145: [function(y, o, x) {
        var _ = y("../component"), u = y("../../lib/dom"), c = (y("../../lib/constants"), y("../../lib/event")), a = y("../../lib/ua"), s = y("../../lib/function"), t = y("../../lang/index"), e = y("../../config"), n = y("../../lib/util"), r = (y("../../lib/playerutil"), y("../../player/base/event/eventtype")), p = y("./util").debounce, y = _.extend({ init: function(h, l) {
          _.call(this, h, l), this._seekTime = -1, this._lastSeekTime = 0, this._moving = !1, this._thumbnailHideTimer = null, this.addClass("prism-progress"), h.getOptions().disableSeek && this.addClass("prism-progress-disabled");
        }, createEl: function() {
          var h = _.prototype.createEl.call(this);
          return h.innerHTML = '<div class="prism-progress-loaded"></div><div class="prism-progress-played"></div><div class="prism-progress-marker"></div><div class="prism-progress-cursor"><img></img></div><p class="prism-progress-time"></p><div class="prism-progress-mask-left"></div><div class="prism-progress-mask-right"></div>', h;
        }, bindEvent: function() {
          function h(b) {
            g._progressDown = b;
          }
          var l = this, g = this, m = (this.loadedNode = document.querySelector("#" + this.id() + " .prism-progress-loaded"), this.playedNode = document.querySelector("#" + this.id() + " .prism-progress-played"), this.cursorNode = document.querySelector("#" + this.id() + " .prism-progress-cursor"), this.timeNode = document.querySelector("#" + this._player._options.id + " .prism-progress-time"), this.thumbnailNode = document.querySelector(".prism-thumbnail"), this.controlNode = document.querySelector("#" + this._player._options.id + " .prism-controlbar"), document.querySelector("#" + this.id())), v = document.querySelector("#" + this.id() + " .prism-progress-cursor img"), f = (this.markerNode = document.querySelector("#" + this.id() + " .prism-progress-marker"), this.maskNodeLeft = document.querySelector("#" + this.id() + " .prism-progress-mask-left"), this.maskNodeRight = document.querySelector("#" + this.id() + " .prism-progress-mask-right"), "");
          this._player._options.skinsDomain = this._player._options.assetPrefix || this._player._options.skinsDomain, f = this._player._options.skinsDomain ? this._player._options.skinsDomain + "/skins/default/img/dragcursor.png" : e.domain ? "https://" + e.domain + e.path + e.h5Version + "/skins/default/img/dragcursor.png" : "/build/skins/default/img/dragcursor.png", v && (v.src = f), c.on(this.cursorNode, "mousedown", function(b) {
            g._onMouseDown(b);
          }), c.on(this.cursorNode, "touchstart", function(b) {
            g._onMouseDown(b);
          }), c.on(m, "mousemove", function(b) {
            g._progressMove(b);
          }), c.on(m, "touchmove", function(b) {
            g._progressMove(b);
          }), c.on(m, "mousedown", function(b) {
            h(!0);
          }), c.on(m, "touchstart", function(b) {
            h(!0);
          }), c.on(m, "mouseup", function(b) {
            h(!1);
          }), c.on(m, "touchend", function(b) {
            h(!1), g._moving && a.IS_MOBILE && (g._player.trigger(r.Private.EndStart, { toTime: g._lastSeekTime }), g._moving = !1);
          }), c.on(this._el, "click", function(b) {
            g._onMouseClick(b);
          }), this._player.on(r.Private.HideProgress, function(b) {
            g._hideProgress(b);
          }), this._player.on(r.Private.CancelHideProgress, function(b) {
            g._cancelHideProgress(b);
          }), this._player.on(r.Private.HideBar, function(b) {
            g._player._seeking = !1;
          }), this._player.on(r.Video.LoadedMetadata, function() {
            l._updateMaskNode();
          }), this._player.on(r.Private.UpdateWatchTime, function() {
            l._updateMaskNode();
          }), c.on(m, r.Private.MouseOver, function(b) {
            g._onMouseOver(b);
          }), c.on(m, r.Private.MouseOut, function(b) {
            g._onMouseOut(b);
          }), c.on(this.controlNode, r.Private.MouseLeave, function(b) {
            g._offMouseUp();
          }), c.on(this.maskNodeLeft, "mouseenter", function() {
            g._offMouseUp();
          }), c.on(this.maskNodeRight, "mouseenter", function() {
            g._offMouseUp();
          }), a.IS_PC ? (v = p(function() {
            u.addClass(m, "prism-progress-hover"), u.addClass(g.cursorNode, "cursor-hover");
          }, 100), c.on(m, "mouseover", v), f = p(function() {
            u.removeClass(m, "prism-progress-hover"), u.removeClass(g.cursorNode, "cursor-hover"), g._progressDown = !1;
          }, 100), c.on(m, "mouseout", f)) : (u.addClass(m, "prism-progress-hover"), u.addClass(m, "prism-progress-mobile"), u.addClass(g.cursorNode, "cursor-hover")), this.bindTimeupdate = s.bind(this, this._onTimeupdate), this._player.on(r.Player.TimeUpdate, this.bindTimeupdate), a.IS_IPAD ? this.interval = setInterval(function() {
            g._onProgress();
          }, 500) : this._player.on(r.Video.Progress, function() {
            g._onProgress();
          }), this._player.on(r.Private.UpdateProgress, function(b) {
            g._updateProgressBar(g.playedNode, b.paramData.targetTime);
          }), this._player.on(r.Private.UpdateCursorPosition, function(b) {
            g._updateCursorPosition(b.paramData.targetTime);
          });
        }, _progressMove: function(h) {
          h.preventDefault();
          var l, g, m = this._getSeconds(h);
          m != 1 / 0 && (l = n.formatTime(m), g = this._getDistance(h), this.cursorNode) && (this._player.trigger(r.Private.ThumbnailShow, { time: m, formatTime: l, left: g, progressWidth: this.el().offsetWidth }), this._autoHideThumbnail(), this._progressDown) && this._onMouseMove(h);
        }, _hideProgress: function(h) {
          c.off(this.cursorNode, "mousedown"), c.off(this.cursorNode, "touchstart");
        }, _cancelHideProgress: function(h) {
          var l = this;
          c.on(this.cursorNode, "mousedown", function(g) {
            l._onMouseDown(g);
          }), c.on(this.cursorNode, "touchstart", function(g) {
            l._onMouseDown(g);
          });
        }, _canSeekable: function(h) {
          var l = !0;
          return l = typeof this._player.canSeekable == "function" ? this._player.canSeekable(h) : l;
        }, _onMouseOver: function(h) {
          this._cursorHideHandler && (clearTimeout(this._cursorHideHandler), this._cursorHideHandler = null), this._mouseInProgress || this._updateCursorPosition(this._player.getCurrentTime()), this._mouseInProgress = !0;
        }, _onMouseOut: function(h) {
          var l = this;
          this._cursorHideHandler && clearTimeout(this._cursorHideHandler), this._cursorHideHandler = setTimeout(function() {
            l._player.trigger(r.Private.ThumbnailHide), l._mouseInProgress = !1;
          });
        }, _getSeconds: function(g) {
          var g = this._getDistance(g), l = this.el().offsetWidth, g = this._player.getDuration() ? g / l * this._player.getDuration() : 0;
          return g = (g = g < 0 ? 0 : g) > this._player.getDuration() ? this._player.getDuration() : g;
        }, _getDistance: function(h) {
          if (h.touches && h.touches[0]) {
            for (var l = this.el().offsetLeft, g = this.el(); g.offsetParent; ) {
              var g = g.offsetParent, m = u.getTranslateX(g);
              l += g.offsetLeft + m;
            }
            g.tagName && g.tagName.toLowerCase() === "body" && (l += document.getElementsByTagName("html")[0].offsetLeft);
            var v = (h.touches ? h.touches[0] : h).pageX - l;
            return v = v < 0 ? 0 : v;
          }
          return v = h.offsetX, h.target === this.cursorNode || h.target.offsetParent === this.cursorNode ? v += this.cursorNode.offsetLeft : h.target !== this._el && h.target.offsetParent !== this._el && h.target.offsetParent === this.markerNode && (v += h.target.offsetLeft), v;
        }, _onMouseClick: function(h) {
          var l = this, g = l._getSeconds(h);
          l._canSeekable(g) ? l._player._canSeek(g + l._posOffset) && (l._player.exceedPreviewTime(g) && (g = l._player.getPreviewTime()), this._seekTime = g, l._updateProgressBar(this.playedNode, g), l._updateCursorPosition(g), this._mouseClickTimeHandle && clearTimeout(this._mouseClickTimeHandle), this._mouseClickTimeHandle = setTimeout(function() {
            l._player._seeking = !0, l._mouseDown && !a.IS_MOBILE || (l._player.trigger(r.Private.SeekStart, { fromTime: l._player.getCurrentTime() }), l._player.trigger(r.Private.EndStart, { toTime: g })), l._player.seek(g), l._mouseDown = !1, l._mouseClickTimeHandle = null, l._inWaitingSeek = !1;
          }, 0), this._inWaitingSeek = !0) : l._player.trigger(r.Private.Info_Show, { text: t.get("Can_Not_Seekable"), duration: 2e3 });
        }, _onMouseDown: function(g) {
          var l = this, g = (g.preventDefault(), this._mouseDown = !0, a.IS_PC && this._player.trigger(r.Private.SeekStart, { fromTime: this._player.getCurrentTime() }), c.on(this.controlNode, "mousemove", function(m) {
            l._onMouseMove(m);
          }), c.on(this.controlNode, "touchmove", function(m) {
            l._onMouseMove(m);
          }), c.on(this.controlNode, "mouseup", function(m) {
            l._onControlBarMouseUp(m);
          }), c.on(this.controlNode, "touchend", function(m) {
            l._onControlBarMouseUp(m);
          }), l._getSeconds(g));
          l._canSeekable(g) ? l._player.exceedPreviewTime(g) && l._player.getPreviewTime() : l._player.trigger(r.Private.Info_Show, { text: t.get("Can_Not_Seekable"), duration: 2e3 });
        }, _onMouseUp: function(h) {
          this._onMouseUpIntern(h);
        }, _onControlBarMouseUp: function(h) {
          this._onMouseUpIntern(h);
        }, _onPlayerMouseUp: function(h) {
          this._onMouseUpIntern(h);
        }, _offMouseUp: function() {
          c.off(this.controlNode, "mousemove"), c.off(this.controlNode, "touchmove"), c.off(this.controlNode, "mouseup"), c.off(this.controlNode, "touchend");
        }, _onMouseUpIntern: function(h) {
          h.preventDefault(), this._offMouseUp(), h = this._getDistance(h) / this.el().offsetWidth * this._player.getDuration(), this._player.getDuration(), isNaN(h) || this._player.seek(h), a.IS_PC && this._player.trigger(r.Private.EndStart, { toTime: h }), this._autoHideThumbnail();
        }, _onMouseMove: function(h) {
          h.preventDefault(), !this._moving && a.IS_MOBILE && (this._player.trigger(r.Private.SeekStart, { fromTime: this._player.getCurrentTime() }), this._moving = !0), h = this._getSeconds(h), this._player.exceedPreviewTime(h) && (h = this._player.getPreviewTime()), this._player.seek(h), this._updateProgressBar(this.playedNode, h), this._updateCursorPosition(h), this._lastSeekTime = h;
        }, _onTimeupdate: function(h) {
          var l = this._player._options.source, l = this._getUrlSuffix(l), g = !1;
          l === "mp4" && (a.IS_MAC_SAFARI && (g = !0), a.IS_IOS && (g = !0), a.IS_IE11) && (g = !0), l === "m3u8" && a.IS_IE11 && (g = !0), this._player._options.mediaType == "audio" && a.IS_IOS && (this._player._seeking = !1), (this._inWaitingSeek || this._progressDown) && !g || (this._updateProgressBar(this.playedNode, this._player.getCurrentTime()), this._updateCursorPosition(this._player.getCurrentTime()), this._player.trigger(r.Private.UpdateProgressBar, { time: this._player.getCurrentTime() }));
        }, _onProgress: function(h) {
          this._player.getDuration() && 1 <= this._player.getBuffered().length && this._updateProgressBar(this.loadedNode, this._player.getBuffered().end(this._player.getBuffered().length - 1));
        }, _updateProgressBar: function(h, l) {
          var g = this._player.getDuration();
          this._player._switchSourcing != 1 && g && (this._seekTime != -1 && (this._player.getCurrentTime() >= this._seekTime || !this._player._seeking ? this._seekTime = -1 : l = this._seekTime), 1 < (l = l / g) && (l = 1), h) && u.css(h, "width", 100 * l + "%");
        }, _updateCursorPosition: function(h) {
          var l, g, m, v = this._player.getDuration();
          this._player._switchSourcing != 1 && v && (l = 1, g = (this.cursorNode.offsetWidth || 16) / 2 / (m = this._player.el().clientWidth), m != 0 && (l = 1 - g), m = (m = h / v - g) < 0 ? 0 : m, this.cursorNode) && (l < m ? (u.css(this.cursorNode, "right", "0px"), u.css(this.cursorNode, "left", "auto")) : (u.css(this.cursorNode, "right", "auto"), u.css(this.cursorNode, "left", 100 * m + "%")));
        }, _getUrlSuffix: function(h) {
          return !h || typeof h != "string" ? "" : ((h = (h.split("?")[0] || "").split("."))[h.length - 1] || "").toLowerCase();
        }, _autoHideThumbnail: function() {
          var h = this;
          a.IS_MOBILE && (this._thumbnailHideTimer && clearTimeout(this._thumbnailHideTimer), this._thumbnailHideTimer = setTimeout(function() {
            h._moving || h._player.trigger(r.Private.ThumbnailHide);
          }, 2e3));
        }, _makeUninteractible: function(h) {
          ["click", "mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchend"].forEach(function(l) {
            c.on(h, l, function(g) {
              g.stopPropagation();
            });
          });
        }, _updateMaskNode: function() {
          var h, l = this._player._getSubVideoConfig();
          l.start || l.end ? (u.css(this.maskNodeLeft, "width", "0px"), u.css(this.maskNodeRight, "width", "0px")) : ((l = this._player._getWatchTimeConfig()).watchStartTime && l.watchEndTime ? (h = 100 * Math.min(l.watchStartTime / this._player.getDuration(), 1) + "%", u.css(this.maskNodeLeft, "width", h)) : u.css(this.maskNodeLeft, "width", "0px"), l.watchEndTime ? (h = 100 * (1 - Math.min(l.watchEndTime / this._player.getDuration(), 1)) + "%", u.css(this.maskNodeRight, "width", h)) : u.css(this.maskNodeRight, "width", "0px"), this._makeUninteractible(this.maskNodeLeft), this._makeUninteractible(this.maskNodeRight));
        }, disposeUI: function() {
          this._seekTime = -1, this._lastSeekTime = 0, this._moving = !1, this.cursorNodeHandler && (clearTimeout(this.cursorNodeHandler), this.cursorNodeHandler = null), this._cursorHideHandler && (clearTimeout(this._cursorHideHandler), this._cursorHideHandler = null), this._mouseClickTimeHandle && (clearTimeout(this._mouseClickTimeHandle), this._mouseClickTimeHandle = null), this.interval && (clearInterval(this.interval), this.interval = null);
        } });
        o.exports = y;
      }, { "../../config": 15, "../../lang/index": 24, "../../lib/constants": 29, "../../lib/dom": 33, "../../lib/event": 34, "../../lib/function": 36, "../../lib/playerutil": 46, "../../lib/ua": 49, "../../lib/util": 51, "../../player/base/event/eventtype": 68, "../component": 132, "./util": 162 }], 146: [function(s, o, x) {
        var _ = s("../component"), u = (s("../../lib/util"), s("../../lib/dom")), c = s("../../lib/event"), a = s("../../player/base/event/eventtype"), s = _.extend({ init: function(t, e) {
          _.call(this, t, e), this.addClass("prism-marker-text");
        }, createEl: function() {
          var t = _.prototype.createEl.call(this, "div");
          return t.innerHTML = "<p></p>", t;
        }, bindEvent: function() {
          var t = this;
          t._player.on(a.Private.MarkerTextShow, function(e) {
            var n = e.paramData, r = a.Player.MarkerDotOver;
            t._player.trigger(r, e.paramData), n.progressMarker.isCustomized ? t._player.trigger(a.Private.LifeCycleChanged, { type: r, data: e.paramData }) : (t._thumbnailShowHanlde && (u.css(t.el(), "display", "none"), clearTimeout(t._thumbnailShowHanlde)), t._thumbnailShowHanlde = setTimeout(function() {
              var p;
              document.querySelector("#" + t.id() + " p").innerText = n.progressMarker.text || "", n && (u.css(t.el(), "display", "block"), p = t._player.el().offsetWidth, left = p * n.left, width = t.el().offsetWidth, left + width > p ? (u.css(t.el(), "right", "0px"), u.css(t.el(), "left", "auto")) : (left = (left -= width / 2) < 0 ? 0 : left, u.css(t.el(), "right", "auto"), u.css(t.el(), "left", left + "px")));
            }, 30));
          }), t._player.on(a.Private.MarkerTextHide, function(e) {
            t._player.trigger(a.Player.MarkerDotOut), t._player.trigger(a.Private.LifeCycleChanged, { type: a.Player.MarkerDotOut, data: "" }), t._thumbnailShowHanlde && clearTimeout(t._thumbnailShowHanlde), u.css(t.el(), "display", "none");
          }), c.on(t._player.tag, "click", function(e) {
            e && e.target == e.currentTarget && t._player.trigger(a.Private.MarkerTextHide);
          }), c.on(t._player.tag, "touchstart", function(e) {
            e && e.target == e.currentTarget && t._player.trigger(a.Private.MarkerTextHide);
          });
        }, disposeUI: function() {
          this._thumbnailShowHanlde && (clearTimeout(this._thumbnailShowHanlde), this._thumbnailShowHanlde = null);
        } });
        o.exports = s;
      }, { "../../lib/dom": 33, "../../lib/event": 34, "../../lib/util": 51, "../../player/base/event/eventtype": 68, "../component": 132 }], 147: [function(t, o, x) {
        var _ = t("./selector"), u = t("../../../lib/object"), c = (t("../../../lib/util"), t("../../../lib/cookie"), t("../../../lib/dom")), a = (t("../../../lib/event"), t("./util"), t("../../../lang/index")), s = t("../../../player/base/event/eventtype"), t = _.extend({ init: function(e, n) {
          this.Name = a.get("AudioTrack"), this.Type = "audio", this.Tooltip = a.get("AudioTrack_Switch_To"), _.call(this, e, n);
        }, bindEvent: function() {
          this.bindCommonEvent();
          var e = this, n = document.querySelector("#" + e.id() + " .selector-list");
          document.querySelector("#" + e.id() + " .header"), e._player.on(s.Private.ChangeURL, function() {
            e._hasGeneratedList = !1;
          }), this._player.on(s.Player.AudioTrackSwitch, function() {
            c.addClass(n, "disabled");
          }), this._player.on(s.Player.AudioTrackSwitched, function() {
            c.removeClass(n, "disabled");
          }), e._player.on(s.Player.AudioTrackReady, function(r) {
            !e._hasGeneratedList && (e._clear(), r = r.paramData) && (u.each(r, function(p, y) {
              var h = c.createEl.call(e, "li", { key: p.value, text: p.text }), l = c.createEl.call(e, "span", { key: p.value, text: p.text });
              l.innerText = p.text, h.appendChild(l), n.appendChild(h);
            }), e._hasGeneratedList = !0);
          });
        }, execute: function(e) {
          this._player._audioTrackService.switch(e);
        } });
        o.exports = t;
      }, { "../../../lang/index": 24, "../../../lib/cookie": 30, "../../../lib/dom": 33, "../../../lib/event": 34, "../../../lib/object": 43, "../../../lib/util": 51, "../../../player/base/event/eventtype": 68, "./selector": 153, "./util": 155 }], 148: [function(t, o, x) {
        var _ = t("../../component"), u = (t("../../../lib/dom"), t("../../../player/base/event/eventtype")), c = t("./list"), a = t("../../../lang/index"), s = t("../util"), t = _.extend({ init: function(e, n) {
          _.call(this, e, n), this.addClass(n.className || "prism-setting-btn"), this._settingList = new c(e, n), e.addChild(this._settingList, n);
        }, createEl: function() {
          return _.prototype.createEl.call(this, "div");
        }, bindEvent: function() {
          var e = this;
          this.on("click", function() {
            e._settingList.isOpened ? e._player.trigger(u.Private.SettingListHide) : e._player.trigger(u.Private.SettingListShow), e._player.trigger(u.Private.SelectorHide), e._player.trigger(u.Private.MarkerTextHide), e._player.trigger(u.Private.VolumeVisibilityChange, "");
          }), s.registerTooltipEvent.call(this, this.el(), a.get("Setting"));
        } });
        o.exports = t;
      }, { "../../../lang/index": 24, "../../../lib/dom": 33, "../../../player/base/event/eventtype": 68, "../../component": 132, "../util": 162, "./list": 151 }], 149: [function(n, o, x) {
        var _ = n("./selector"), u = n("../../../lib/object"), c = n("../../../lib/dom"), a = (n("../../../lib/event"), n("./util"), n("../../../lib/cookie")), s = n("../../../lib/constants"), t = n("../../../lang/index"), e = n("../../../player/base/event/eventtype"), n = _.extend({ init: function(r, p) {
          this.Name = t.get("Subtitle"), this.Type = "cc", this.Tooltip = t.get("CC_Switch_To"), _.call(this, r, p);
        }, bindEvent: function() {
          this.bindCommonEvent();
          var r = this;
          this._player.on(e.Private.CCStateChanged, function(h) {
            var y = h.paramData.value, h = h.paramData.lang, h = (y == "on" && h ? r._backCCText = h : y == "off" && r._backCCText == "" && (r._backCCText = r._previousSelection.text), "Off");
            y == "on" && (h = r._backCCText), r._player.trigger(e.Private.SelectorUpdateList, { type: "cc", text: h });
          });
        }, generateList: function(r) {
          var p = document.querySelector("#" + this.id() + " .selector-list"), y = this._player._ccService.tracks, h = this;
          u.each(y, function(l, g) {
            var m = c.createEl.call(this, "li", { key: l.value, text: l.text }), v = c.createEl.call(this, "span", { key: l.value, text: l.text });
            l.text == r && (c.addClass(m, "current"), h._previousSelection = m), v.innerText = l.text, m.appendChild(v), p.appendChild(m);
          });
        }, execute: function(r) {
          this._backCCText = "", a.set(s.SelectedCC, r, 365), this._player._ccService.switch(r);
        } });
        o.exports = n;
      }, { "../../../lang/index": 24, "../../../lib/constants": 29, "../../../lib/cookie": 30, "../../../lib/dom": 33, "../../../lib/event": 34, "../../../lib/object": 43, "../../../player/base/event/eventtype": 68, "./selector": 153, "./util": 155 }], 150: [function(d, o, x) {
        o.exports = { CC: d("./cc"), Speed: d("./speed"), Quality: d("./quality"), Audio: d("./audio") };
      }, { "./audio": 147, "./cc": 149, "./quality": 152, "./speed": 154 }], 151: [function(r, o, x) {
        var _ = r("../../component"), u = r("../../../lib/dom"), c = r("../../../lib/ua"), a = r("../../../lib/event"), s = r("../../../player/base/event/eventtype"), t = r("./export"), e = r("./util"), n = r("../../../lang/index"), r = _.extend({ init: function(p, y) {
          for (var h in this.isOpened = !1, _.call(this, p, y), this.addClass(y.className || "prism-setting-list"), t)
            h = new t[h](p, y), p.addChild(h, y);
        }, createEl: function() {
          var p = _.prototype.createEl.call(this, "div"), g = "<div class='prism-setting-item prism-setting-{type}' type={type}><div class='setting-content'><span class='setting-title'>{value}</span><span class='array'></span><span class='current-setting'></span></div></div>", y = g.replace(/{type}/g, "speed").replace("{value}", n.get("Speed")), h = g.replace(/{type}/g, "cc").replace("{value}", n.get("Subtitle")), l = g.replace(/{type}/g, "audio").replace("{value}", n.get("AudioTrack")), g = g.replace(/{type}/g, "quality").replace("{value}", n.get("Quality"));
          return p.innerHTML = y + h + l + g, p;
        }, bindEvent: function() {
          function p() {
            h._player.trigger(s.Private.SettingListHide), h.isOpened = !1;
          }
          function y(g) {
            g && g.type && (document.querySelector("#" + h.id() + " .prism-setting-" + g.type + " .current-setting").innerText = g.text || "");
          }
          var h = this, l = (this._player.on(s.Private.SettingListShow, function(g) {
            h.isOpened = !0, g = g.paramData, y(g), u.css(h.el(), "display", "block");
          }), this._player.on(s.Private.UpdateToSettingList, function(g) {
            g = g.paramData, y(g);
          }), this._player.on(s.Private.SelectorUpdateList, function(g) {
            g = g.paramData, y(g), h._player.trigger(s.Private.SelectorValueChange, g);
          }), this._player.on(s.Private.SettingListHide, function() {
            h.isOpened = !1, u.css(h.el(), "display", "none");
          }), a.on(this.el(), "click", function(m) {
            h._player.trigger(s.Private.SettingListHide);
            var m = m.srcElement || m.target;
            (m = e.findItemElementForList(m)) && (m = m.getAttribute("type"), h._player.trigger(s.Private.SelectorShow, { type: m }));
          }), c.IS_MOBILE ? "touchleave" : "mouseleave");
          a.on(this.el(), l, function() {
            p();
          }), a.on(this._player.tag, "click", function(g) {
            g && g.target == g.currentTarget && p();
          }), a.on(this._player.tag, "touchstart", function(g) {
            g && g.target == g.currentTarget && p();
          }), this._player.on(s.Private.QualityChange, function(f) {
            var m, v, f = f.paramData;
            f.levelSwitch && (m = document.querySelector("#" + h.id() + " .prism-setting-quality .current-setting"), v = n.get("Auto"), f = f.desc, -1 < m.innerText.indexOf(v)) && (f && -1 < String(f).indexOf("(") ? v = v + "-" + f : v += f ? "(" + f + ")" : "", m.innerText = v);
          });
        } });
        o.exports = r;
      }, { "../../../lang/index": 24, "../../../lib/dom": 33, "../../../lib/event": 34, "../../../lib/ua": 49, "../../../player/base/event/eventtype": 68, "../../component": 132, "./export": 150, "./util": 155 }], 152: [function(n, o, x) {
        var _ = n("./selector"), u = n("../../../lib/object"), c = (n("../../../lib/util"), n("../../../lib/cookie")), a = n("../../../lib/dom"), s = (n("../../../lib/event"), n("../../../lib/constants")), t = n("../../../lang/index"), e = n("../../../player/base/event/eventtype"), n = _.extend({ init: function(r, p) {
          this.Name = t.get("Quality"), this.Type = "quality", this.Tooltip = t.get("Quality_Switch_To"), _.call(this, r, p), this._isMasterLevel = !1;
        }, showTip: function(r, p) {
          this._player.trigger(e.Private.Info_Show, { text: r, duration: p, align: "lb" });
        }, bindEvent: function() {
          this.bindCommonEvent();
          var r = this, p = (this._player.on(e.Private.QualityChange, function(y) {
            var h, l, g = 0 < r._player._urls.length ? r._player._urls : r._player._qualityService.levels;
            (data = y.paramData).levelSwitch ? (h = data.desc || data.bitrate, r._autoSWitchDesc = h, r._updateText(h)) : 0 < r._player._currentPlayIndex && (r._autoSWitchDesc = "", l = g[(h = r._player._currentPlayIndex) - 1].desc, g = g[h].desc, r.showTip(l + y.paramData + g, 1e3), r._player.trigger(e.Private.SelectorValueChange, { type: r.Type, text: g }));
          }), document.querySelector("#" + r.id() + " .selector-list"));
          this._player.on(e.Player.LevelSwitch, function() {
            a.addClass(p, "disabled");
          }), this._player.on(e.Player.LevelSwitched, function() {
            a.removeClass(p, "disabled");
          });
        }, generateList: function(r) {
          var p, y = this._player._urls, h = this._player._currentPlayIndex, l = this._player._qualityService.levels, g = (0 < l.length && (this._isMasterLevel = !0, this._player._options.isVBR) && (h = (y = l).length - 1), document.querySelector("#" + this.id() + " .selector-list"));
          0 < y.length && (p = this, u.each(y, function(m, v) {
            var f, b;
            (m.desc || m.bitrate) && (f = a.createEl.call(this, "li", { key: m.Url, index: v, text: m.desc || m.bitrate }), b = a.createEl.call(this, "span", { key: m.Url, index: v, text: m.desc || m.bitrate }), v == h && (a.addClass(f, "current"), p._previousSelection = f), b.innerText = m.desc || m.bitrate, f.appendChild(b), g.appendChild(f));
          })), this._autoSWitchDesc && this._updateText(this._autoSWitchDesc);
        }, execute: function(r) {
          if (this._player._switchSourcing = !0, this._isMasterLevel) {
            for (var p, y = this._player._qualityService.levels, h = 0; h < y.length; h++) y[h].Url == r && y[h].desc != t.get("Auto") && (p = y[h], this._resetAutoText());
            this._player._switchLevel ? this._player._switchLevel(r, p) : (l = this._player.autoplay || this._player._status != "pause", this._player._loadByUrlInner(r, this._player.getCurrentTime(), l));
          } else {
            for (var l, g = this._player._urls.length, m = this._player._currentPlayIndex, v = -1, h = 0; h < g; h++) if (this._player._urls[h].Url == r) {
              v = this._player._currentPlayIndex = h, c.set(s.SelectedStreamLevel, this._player._urls[h].definition, 365);
              break;
            }
            m != v && -1 < v && (m = this._player.getCurrentTime(), l = this._player.autoplay || this._player._status != "pause", this._player.autoplay || m != 0 || (l = !1), this._player._switchLevel && !this._player._options.isLive && this._player._options.isVBR ? this._player._switchLevel(r) : this._player._loadByUrlInner(r, m, l));
          }
          var f = this;
          setTimeout(function() {
            f._player._switchSourcing = !1;
          });
        }, _updateText: function(r) {
          var p = document.querySelector("#" + this.id() + " .selector-list .current"), y = document.querySelector("#" + this.id() + " .selector-list .current span"), h = t.get("Auto");
          y && y.innerText && -1 < y.innerText.indexOf(h) && (r && -1 < String(r).indexOf("(") ? h = h + "-" + r : h += r ? "(" + r + ")" : "", y.innerText = h, p) && (p.text = h);
        }, _resetAutoText: function() {
          for (var r = t.get("Auto"), p = document.querySelectorAll("#" + this.id() + " .selector-list li"), y = 0; y < p.length; y++) {
            var h = p[y], l = h.querySelector("span");
            if (-1 < l.innerText.indexOf(r)) {
              l.innerText = r, h.text = r;
              break;
            }
          }
        } });
        o.exports = n;
      }, { "../../../lang/index": 24, "../../../lib/constants": 29, "../../../lib/cookie": 30, "../../../lib/dom": 33, "../../../lib/event": 34, "../../../lib/object": 43, "../../../lib/util": 51, "../../../player/base/event/eventtype": 68, "./selector": 153 }], 153: [function(e, o, x) {
        var _ = e("../../component"), u = (e("../../../lib/object"), e("../../../lib/util"), e("../../../lib/ua")), c = (e("../../../lib/cookie"), e("../../../lib/dom")), a = e("../../../lib/event"), s = e("./util"), t = (e("../../../lang/index"), e("../../../player/base/event/eventtype")), e = _.extend({ init: function(n, r) {
          this._hasGeneratedList = !1, this._previousSelection = null, this._backupSelector = "", _.call(this, n, r), this.className = r.className || "prism-" + this.Type + "-selector prism-setting-selector", this.addClass(this.className);
        }, createEl: function() {
          var n = _.prototype.createEl.call(this, "div");
          return n.innerHTML = '<div class="header"><div class="left-array"></div><span>' + this.Name + '</span></div><ul class="selector-list"></ul>', n;
        }, bindEvent: function() {
          this.bindCommonEvent();
        }, bindCommonEvent: function() {
          var n = this, r = document.querySelector("#" + n.id() + " .selector-list"), h = document.querySelector("#" + n.id() + " .header");
          function p() {
            n._hasGeneratedList || (n._clear(), n.generateList(n._backupSelector), n._backupSelector = "", n._hasGeneratedList = !0);
          }
          this._player.on(t.Private.ChangeURL, function() {
            n._hasGeneratedList = !1;
          }), a.on(h, "click", function() {
            n._player.trigger(t.Private.SelectorHide), n._player.trigger(t.Private.SettingListShow, { type: n.Type, text: n._previousSelection ? n._previousSelection.text : "" });
          }), a.on(r, "click", function(g) {
            var g = g.srcElement || g.target, m = g.key, v = g.text;
            n._player.traceLog("selector.js", "selector::click#" + n.Name + "#" + n.Type + "#" + v + "#" + m), n._player.trigger(t.Player.SettingSelected, { name: n.Name, type: n.Type, text: v, key: m }), v !== void 0 && (n._previousSelection && c.removeClass(n._previousSelection, "current"), n._previousSelection = s.findliElementForSelector(g), c.addClass(n._previousSelection, "current"), n.execute && n.execute(m), g = n.Tooltip + "<span>" + v + "</span>", n._player.trigger(t.Private.Info_Show, { text: g, duration: 3e3, align: "lb" }));
          }), n._player.on(t.Private.SelectorHide, function() {
            y();
          }), n._player.on(t.Private.SelectorValueChange, function(l) {
            var g = l.paramData;
            if (g && g.type == n.Type) {
              var m = document.querySelectorAll("#" + n.id() + " .selector-list li");
              if (m) {
                for (var v = m.length, f = (v == 0 && (n._backupSelector = g.text), -1), b = 0; b < v; b++) if (m[b].text == g.text) {
                  f = b;
                  break;
                }
                n._previousSelection && (c.removeClass(n._previousSelection, "current"), n._previousSelection = null), f !== -1 ? (c.addClass(m[f], "current"), n._previousSelection = m[f]) : n._previousSelection || console.warn("UI Not Sync: No Such Option '" + g.text + "' in '" + g.type + "'");
              }
            }
          }), n._player.on(t.Private.SettingListShow, function() {
            p();
          }), n._player.on(t.Private.SelectorGenerateList, function(m) {
            var g = m.paramData && m.paramData.type, m = m.paramData && m.paramData.value;
            g === n.Type && (n._hasGeneratedList = !1, m && (n._backupSelector = m), p());
          }), n._player.on(t.Private.SelectorShow, function(l) {
            (l = l.paramData).type == n.Type && (l = document.querySelector("#" + n._player.id() + " .prism-" + l.type + "-selector"), n._hasGeneratedList || p(), c.css(l, "display", "block"));
          });
          var y = function() {
            c.css(n.el(), "display", "none"), n._player.trigger(t.Private.UpdateToSettingList, { type: n.Type, text: n._previousSelection ? n._previousSelection.text : "" });
          }, h = u.IS_MOBILE ? "touchleave" : "mouseleave";
          a.on(this.el(), h, function() {
            y();
          }), a.on(this._player.tag, "click", function(l) {
            l && l.target == l.currentTarget && y();
          }), a.on(this._player.tag, "touchstart", function(l) {
            l && l.target == l.currentTarget && y();
          });
        }, setSelected: function(n) {
        }, generateList: function() {
        }, _clear: function() {
          document.querySelector("#" + this.id() + " .selector-list").innerHTML = "";
        } });
        o.exports = e;
      }, { "../../../lang/index": 24, "../../../lib/cookie": 30, "../../../lib/dom": 33, "../../../lib/event": 34, "../../../lib/object": 43, "../../../lib/ua": 49, "../../../lib/util": 51, "../../../player/base/event/eventtype": 68, "../../component": 132, "./util": 155 }], 154: [function(e, o, x) {
        var _ = e("./selector"), u = e("../../../lib/object"), c = (e("../../../lib/util"), e("../../../lib/cookie"), e("../../../lib/dom")), a = (e("../../../lib/event"), e("./util"), e("../../../lib/constants")), s = e("../../../lang/index"), t = e("../../../player/base/event/eventtype"), e = _.extend({ init: function(n, r) {
          var p = this;
          this.Name = s.get("Speed"), this.Type = "speed", this.Tooltip = s.get("Speed_Switch_To"), this.speedPreStore = 1, this.listGenerated = !1, _.call(this, n, r), this._player.on(t.Private.PlaybackRateChanged, function(y) {
            p.speedPreStore = y.paramData, p.listGenerated && p._player.trigger(t.Private.SelectorUpdateList, { type: "speed", text: y.paramData });
          });
        }, generateList: function() {
          var n = document.querySelector("#" + this.id() + " .selector-list"), r = this._player._options.speedLevels, r = this.verifySpeedLevels(r) ? r : a.SpeedLevels, p = this;
          u.each(r, function(y, h) {
            var l = c.createEl.call(this, "li", { key: y.key, text: y.text }), g = c.createEl.call(this, "span", { key: y.key, text: y.text });
            g.innerText = y.text, y.key == p.speedPreStore && (c.addClass(l, "current"), p._previousSelection = l), l.appendChild(g), n.appendChild(l);
          }), this.listGenerated = !0;
        }, execute: function(n) {
          this._player.setSpeed(n, !1);
        }, verifySpeedLevels: function(n) {
          var r = 0;
          if (n && n.length) try {
            n.forEach(function(p) {
              typeof p.key == "number" && p.key == p.key && 0 <= p.key && r++;
            });
          } catch {
            return !1;
          }
          return n && r === n.length;
        } });
        o.exports = e;
      }, { "../../../lang/index": 24, "../../../lib/constants": 29, "../../../lib/cookie": 30, "../../../lib/dom": 33, "../../../lib/event": 34, "../../../lib/object": 43, "../../../lib/util": 51, "../../../player/base/event/eventtype": 68, "./selector": 153, "./util": 155 }], 155: [function(d, o, x) {
        o.exports.findliElementForSelector = function(_) {
          var u;
          return _ && _.tagName.toLowerCase() != "li" ? (u = _.parentElement) && u.tagName.toLowerCase() == "li" ? u : null : _;
        }, o.exports.findliElementByKey = function(_, u) {
          return document.querySelectors(_), null;
        }, o.exports.findItemElementForList = function(_) {
          var u;
          return !_ || -1 < _.className.indexOf("prism-setting-item") || (u = _.parentElement) && (_ = o.exports.findItemElementForList(u)), _;
        };
      }, {}], 156: [function(t, o, x) {
        var _ = t("../component"), u = t("../../lib/dom"), c = t("../../lang/index"), a = t("../../player/base/event/eventtype"), s = t("./util"), t = _.extend({ init: function(e, n) {
          _.call(this, e, n), this.addClass("prism-snapshot-btn");
        }, createEl: function() {
          return _.prototype.createEl.call(this, "div");
        }, bindEvent: function() {
          var e = this, n = this._player;
          n.on(a.Private.Snapshot_Hide, function() {
            u.css(e._el, "display", "none");
          }), s.registerTooltipEvent.call(this, this.el(), c.get("Snapshot")), this.on("click", function() {
            e.trigger(a.Player.Snapshoting), e.trigger(a.Player.Snapshoted, n.takeSnapshot());
          });
        } });
        o.exports = t;
      }, { "../../lang/index": 24, "../../lib/dom": 33, "../../player/base/event/eventtype": 68, "../component": 132, "./util": 162 }], 157: [function(u, o, x) {
        var _ = u("../component"), u = (u("../../lib/dom"), u("../../player/base/event/eventtype"), _.extend({ init: function(c, a) {
          _.call(this, c, a), this.addClass("prism-text-overlay");
        }, createEl: function() {
          return _.prototype.createEl.call(this, "div");
        }, _hide: function(c) {
        }, _show: function(c) {
        }, bindEvent: function() {
        } }));
        o.exports = u;
      }, { "../../lib/dom": 33, "../../player/base/event/eventtype": 68, "../component": 132 }], 158: [function(t, o, x) {
        var _ = t("../component"), u = (t("../../lib/util"), t("../../lib/dom")), c = t("../../lib/event"), a = (t("../../lib/ua"), t("../../lang/index"), t("../../player/base/event/eventtype")), s = t("./util"), t = _.extend({ init: function(e, n) {
          _.call(this, e, n), this.addClass("prism-thumbnail");
        }, createEl: function() {
          var e = _.prototype.createEl.call(this, "div");
          return e.innerHTML = "<img></img><span></span>", e;
        }, bindEvent: function() {
          var e = this, n = (c.on(this._el, "mousemove", function(r) {
            r.preventDefault();
          }), c.on(this._el, "touchmove", function(r) {
            r.preventDefault();
          }), e._player.on(a.Private.ThumbnailLoaded, function(l) {
            var p, y, h, l = l.paramData;
            l && 0 < l.length && (p = e._player._thumbnailService.makeUrl(l[0].text), e._player.log("THUMBNAILSTART", { tu: encodeURIComponent(p) }), y = (/* @__PURE__ */ new Date()).getTime(), l[0].isBig ? (u.css(e.el(), "background", "url(" + p + ")"), u.css(e.el(), "width", l[0].w + "px"), u.css(e.el(), "height", l[0].h + "px"), e._player.log("THUMBNAILCOMPLETE", { ftt: (/* @__PURE__ */ new Date()).getTime() - y })) : ((h = document.querySelector("#" + e.id() + " img")).onload = function() {
              var g = h.width, m = h.height;
              u.css(e.el(), "width", g + "px"), u.css(e.el(), "height", m + "px"), e._player.log("THUMBNAILCOMPLETE", { ftt: (/* @__PURE__ */ new Date()).getTime() - y });
            }, h.src = p));
          }), s.throttle(function(g) {
            var p, y, h, g = g[0], l = document.querySelector("#" + e.id() + " span"), g = g.paramData;
            l.innerText = g.formatTime, g && ((p = e._player._thumbnailService.findAvailableCue(g.time)) ? p.isBig ? (y = e._player._thumbnailService.makeUrl(p.text), u.css(e.el(), "background", "url(" + y + ")"), p.w, p.h, h = -1 * p.x + "px " + -1 * p.y + "px", u.css(e.el(), "background-position", h)) : (h = document.querySelector("#" + e.id() + " img"), y = e._player._thumbnailService.makeUrl(p.text), h.src != y && (h.src = y)) : (u.css(e.el(), "border", "none"), u.css(l, "left", "0px")), u.css(e.el(), "display", "block"), h = 0, y = (p ? e.el() : l).offsetWidth, h = g.left + y > g.progressWidth ? g.left - y : (h = g.left - y / 2) < 0 ? 0 : h, u.css(e.el(), "left", h + "px"));
          }, 30));
          e._player.on(a.Private.ThumbnailShow, n), e._player.on(a.Private.ThumbnailHide, function(r) {
            u.css(e.el(), "display", "none");
          });
        }, _createSamllThumbnail: function() {
        }, disposeUI: function() {
        } });
        o.exports = t;
      }, { "../../lang/index": 24, "../../lib/dom": 33, "../../lib/event": 34, "../../lib/ua": 49, "../../lib/util": 51, "../../player/base/event/eventtype": 68, "../component": 132, "./util": 162 }], 159: [function(a, o, x) {
        var _ = a("../component"), u = a("../../lib/util"), c = a("../../player/base/event/eventtype"), a = _.extend({ init: function(s, t) {
          _.call(this, s, t), this.addClass("prism-time-display");
        }, createEl: function() {
          var s = _.prototype.createEl.call(this, "div");
          return s.innerHTML = '<span class="current-time">00:00</span> <span class="time-bound">/</span> <span class="duration">00:00</span>', s;
        }, bindEvent: function() {
          var s = this;
          this._player.on(c.Video.DurationChange, function() {
            var t = u.formatTime(s._player.getDisplayDuration());
            t ? (document.querySelector("#" + s.id() + " .time-bound").style.display = "inline", document.querySelector("#" + s.id() + " .duration").style.display = "inline", document.querySelector("#" + s.id() + " .duration").innerText = t) : (document.querySelector("#" + s.id() + " .duration").style.display = "none", document.querySelector("#" + s.id() + " .time-bound").style.display = "none");
          }), this._player.on(c.Video.TimeUpdate, function() {
            var t = s._player.getCurrentTime(), t = u.formatTime(t);
            document.querySelector("#" + s.id() + " .current-time") && (t ? (document.querySelector("#" + s.id() + " .current-time").style.display = "inline", document.querySelector("#" + s.id() + " .current-time").innerText = t) : document.querySelector("#" + s.id() + " .current-time").style.display = "none");
          });
        } });
        o.exports = a;
      }, { "../../lib/util": 51, "../../player/base/event/eventtype": 68, "../component": 132 }], 160: [function(a, o, x) {
        var _ = a("../component"), u = a("../../lib/dom"), c = a("../../player/base/event/eventtype"), a = _.extend({ init: function(s, t) {
          _.call(this, s, t), this.addClass("prism-tooltip");
        }, createEl: function() {
          var s = _.prototype.createEl.call(this, "p");
          return s.innerText = "提示信息", s;
        }, bindEvent: function() {
          var s = this;
          s._player.on(c.Private.TooltipShow, function(n) {
            var e = document.querySelector("#" + s.id()), n = n.paramData, r = (e.innerText = n.text, u.css(e, "display", "block"), e.offsetWidth), p = document.querySelector("#" + s._player.id() + " .prism-controlbar");
            p && (p = p.offsetWidth, n.left + r > p ? u.css(e, "left", p - r + "px") : u.css(e, "left", n.left - (r - n.width) / 2 + "px"));
          }), s._player.on(c.Private.TooltipHide, function(t) {
            var e = document.querySelector("#" + s.id());
            u.css(e, "display", "none");
          });
        } });
        o.exports = a;
      }, { "../../lib/dom": 33, "../../player/base/event/eventtype": 68, "../component": 132 }], 161: [function(t, o, x) {
        var _ = t("../component"), u = t("../../lib/dom"), c = t("../../lib/event"), a = t("../../lang/index"), s = t("../../player/base/event/eventtype"), t = _.extend({ init: function(e, n) {
          _.call(this, e, n), this.addClass("prism-unmute-btn");
        }, createEl: function() {
          var e = _.prototype.createEl.call(this, "div");
          return e.innerText = a.get("Click_To_Unmute"), e;
        }, bindEvent: function() {
          var e = this;
          this._player.on(s.Private.MutedAutoplay, function() {
            var n;
            (n = e._player.getOptions().autoplayPolicy) != null && n.showUnmuteBtn && e._show();
          }), this._player.on(s.Private.HideUnmuteButton, function() {
            e._hide();
          }), c.on(this.el(), "click", function() {
            e._player.unMute(!0), e._hide();
          });
        }, _show: function() {
          u.css(this.el(), "display", "block");
        }, _hide: function() {
          u.css(this.el(), "display", "none");
        } });
        o.exports = t;
      }, { "../../lang/index": 24, "../../lib/dom": 33, "../../lib/event": 34, "../../player/base/event/eventtype": 68, "../component": 132 }], 162: [function(d, o, x) {
        var _ = d("../../lib/event"), u = d("../../player/base/event/eventtype");
        o.exports.registerTooltipEvent = function(c, a) {
          function s() {
            t._controlbarTooltipHandler && (clearTimeout(t._controlbarTooltipHandler), t._controlbarTooltipHandler = null);
          }
          var t = this;
          _.on(this.el(), "mouseover", function(e) {
            s(), t._controlbarTooltipHandler = setTimeout(function() {
              t._player.trigger(u.Private.TooltipHide);
            }, 4e3);
            var n = t.el().offsetLeft, r = t.el().offsetWidth, p = a;
            typeof a == "function" && (p = a.call(this)), t._player.trigger(u.Private.TooltipShow, { left: n, width: r, text: p });
          }), _.on(this.el(), "mouseout", function() {
            s(), t._player.trigger(u.Private.TooltipHide);
          });
        }, o.exports.throttle = function(c, a) {
          var s = Date.now();
          return function() {
            var t = arguments, e = Date.now();
            a <= e - s && (c(t), s = e);
          };
        }, o.exports.debounce = function(c, a) {
          var s;
          return function() {
            var t = this, e = arguments;
            clearTimeout(s), s = setTimeout(function() {
              c.apply(t, e);
            }, a);
          };
        };
      }, { "../../lib/event": 34, "../../player/base/event/eventtype": 68 }], 163: [function(n, o, x) {
        var _ = n("../component"), u = n("../../lib/dom"), c = n("../../lib/event"), a = n("../../player/base/event/eventtype"), s = n("./util"), t = n("../../lang/index"), e = n("./volumecontrol"), n = _.extend({ init: function(r, p) {
          _.call(this, r, p), this.addClass("prism-volume");
          var y = new e(r, p);
          r.addChild(y, p), this.volumeControl = y;
        }, createEl: function() {
          var r = _.prototype.createEl.call(this, "div");
          return r.innerHTML = '<div class="volume-icon"><div class="short-horizontal"></div><div class="long-horizontal"></div></div>', r;
        }, bindEvent: function() {
          var r = this, p = r._player, y = (this.icon = document.querySelector("#" + r.id() + "  .volume-icon"), s.registerTooltipEvent.call(this, this.el(), function() {
            return r._player.muted() || r._player.getVolume() == 0 ? t.get("Muted") : t.get("Volume");
          }), c.on(this.icon, "click", function(l) {
            var g;
            r.volumeControl._shown ? p.muted() ? p.unMute() : p.mute() : (g = r.el().offsetLeft, r._player.trigger(a.Private.SettingListHide), r._player.trigger(a.Private.SelectorHide), r._player.trigger(a.Private.VolumeVisibilityChange, g), r._player.trigger(a.Private.MarkerTextHide));
          }), document.querySelector("#" + r.id() + "  .long-horizontal")), h = document.querySelector("#" + r.id() + "  .short-horizontal");
          c.on(this.el(), "mouseover", function() {
            u.removeClass(y, "volume-hover-animation"), setTimeout(function() {
              u.addClass(y, "volume-hover-animation");
            }), setTimeout(function() {
              u.removeClass(y, "volume-hover-animation"), u.addClass(h, "volume-hover-animation"), setTimeout(function() {
                u.removeClass(h, "volume-hover-animation"), u.addClass(y, "volume-hover-animation");
              }, 300);
            }, 300);
          }), c.on(window, "resize", function() {
            var l;
            r.volumeControl._shown && (l = r.el().offsetLeft, r._player.trigger(a.Private.VolumeUpdatePosition, l));
          });
        } });
        o.exports = n;
      }, { "../../lang/index": 24, "../../lib/dom": 33, "../../lib/event": 34, "../../player/base/event/eventtype": 68, "../component": 132, "./util": 162, "./volumecontrol": 164 }], 164: [function(s, o, x) {
        var _ = s("../component"), u = s("../../lib/dom"), c = s("../../lib/event"), a = s("../../player/base/event/eventtype"), s = (s("./util"), s("../../lang/index"), _.extend({ init: function(t, e) {
          _.call(this, t, e), this.addClass("prism-volume-control"), this._shown = !1;
        }, createEl: function() {
          var t = _.prototype.createEl.call(this, "div");
          return t.innerHTML = '<div class="volume-range"><div class="volume-value"></div><div class="volume-cursor"></div></div>', t;
        }, bindEvent: function() {
          var t = this;
          this.icon = document.querySelector("#" + t._player.id() + "  .volume-icon"), this.control = document.querySelector("#" + t.id()), this.volumnValue = document.querySelector("#" + t.id() + "  .volume-value"), this.volumnRange = document.querySelector("#" + t.id() + "  .volume-range"), this.volumnCursor = document.querySelector("#" + t.id() + "  .volume-cursor"), this._player.on(a.Private.VolumeVisibilityChange, function(r) {
            var n, r = r.paramData;
            !t._shown && r ? (n = t._player.getVolume(), t._setVolumnUI(n), u.css(t.control, "display", "block"), r && t._updatePosition(r), t._shown = !0) : t._hide();
          }), this._player.on(a.Private.VolumeUpdatePosition, function(e) {
            e = e.paramData, t._shown && t._updatePosition(e);
          }), this._player.on(a.Private.ControlBarClick, function(e) {
            u.hasClass(e.paramData.target, "prism-controlbar-bg") && t._hide();
          }), c.on(this.volumnRange, "click", function(e) {
            e = u.getPointerPosition(t.volumnRange, e).y, e < 0 || 1 < e || (t._setVolumnUI(e = 1 < (e = e < 0 ? 0 : e) ? 1 : e), t._setMuteUI(e), t._player.setVolume(e));
          }), c.on(this._player.tag, "click", function(e) {
            e && e.target == e.currentTarget && t._hide();
          }), c.on(this._player.tag, "touchstart", function(e) {
            e && e.target == e.currentTarget && t._hide();
          }), c.on(this.volumnCursor, "mousedown", function(e) {
            t._onMouseDown(e);
          }), c.on(this.volumnCursor, "touchstart", function(e) {
            t._onMouseDown(e);
          }), this._player.on(a.Private.VolumnChanged, function(e) {
            e = e.paramData, -1 < e && t._setVolumnUI(e), t._setMuteUI(e);
          }), c.on(this.control, "mouseleave", function() {
            t._offEvent(), t._hide();
          }), c.on(this.control, "mouseover", function() {
            u.addClass(t.control, "hover");
          }), t._rangeBottom = t._getBottom();
        }, _getBottom: function() {
          var t;
          return window.getComputedStyle ? (t = window.getComputedStyle(this.volumnRange, null).getPropertyValue("bottom"), parseFloat(t)) : 26;
        }, _onMouseDown: function(t) {
          var e = this;
          t.preventDefault(), c.on(this.control, "mousemove", function(n) {
            e._onMouseMove(n);
          }), c.on(this.control, "touchmove", function(n) {
            e._onMouseMove(n);
          }), c.on(this._player.tag, "mouseup", function(n) {
            e._onMouseUp(n);
          }), c.on(this._player.tag, "touchend", function(n) {
            e._onMouseUp(n);
          }), c.on(this.control, "mouseup", function(n) {
            e._onMouseUp(n);
          }), c.on(this.control, "touchend", function(n) {
            e._onMouseUp(n);
          });
        }, _onMouseUp: function(t) {
          t.preventDefault(), this._offEvent(), this.volumnRange.offsetHeight && (t = (this.volumnValue.offsetHeight / this.volumnRange.offsetHeight).toFixed(2), this._player.setVolume(t), this._setMuteUI(t));
        }, _onMouseMove: function(t) {
          t.preventDefault(), t = u.getPointerPosition(this.volumnRange, t).y, t < 0 || 1 < t || this._setVolumnUI(t = 1 < (t = t < 0 ? 0 : t) ? 1 : t);
        }, _getPosition: function(t) {
          for (var e = this.volumnRange, n = 0; e = e.offsetParent; ) n += e.offsetTop;
          var r = this.volumnRange.offsetHeight, p = this.volumnCursor.offsetHeight, y = (t.touches ? t.touches[0] : t).pageY;
          return (r - ((y = r < y - n ? t.clientY : y) - n) + p) / this.volumnRange.offsetHeight;
        }, _offEvent: function() {
          c.off(this._player.tag, "mouseup"), c.off(this._player.tag, "touchend"), c.off(this.control, "mousemove"), c.off(this.control, "touchmove"), c.off(this.control, "mouseup"), c.off(this.control, "touchend");
        }, _setMuteUI: function(t) {
          isNaN(t) || (t == 0 || t == -1 ? u.addClass(this.icon, "mute") : u.removeClass(this.icon, "mute"));
        }, _setVolumnUI: function(t) {
          isNaN(t) || (u.css(this.volumnValue, "height", 100 * t + "%"), u.css(this.volumnCursor, "bottom", 100 * (t = t == 1 ? 0.99 : t) + "%"));
        }, _hide: function() {
          u.css(this.control, "display", "none"), this._shown = !1;
        }, _updatePosition: function(t) {
          u.css(this.control, "left", t - 5 + "px");
        } }));
        o.exports = s;
      }, { "../../lang/index": 24, "../../lib/dom": 33, "../../lib/event": 34, "../../player/base/event/eventtype": 68, "../component": 132, "./util": 162 }], 165: [function(d, o, x) {
        o.exports = { H5Loading: d("./component/h5-loading"), bigPlayButton: d("./component/big-play-button"), unmuteButton: d("./component/unmute-button"), controlBar: d("./component/controlbar"), progress: d("./component/progress"), playButton: d("./component/play-button"), liveDisplay: d("./component/live-display"), timeDisplay: d("./component/time-display"), fullScreenButton: d("./component/fullscreen-button"), volume: d("./component/volume"), snapshot: d("./component/snapshot"), errorDisplay: d("./component/error-display"), infoDisplay: d("./component/info-display"), liveShiftProgress: d("../commonui/liveshiftprogress"), liveShiftTimeDisplay: d("../commonui/livetimedisplay"), setting: d("./component/setting/button"), subtitle: d("./component/cc-button"), thumbnail: d("./component/thumbnail"), tooltip: d("./component/tooltip") };
      }, { "../commonui/liveshiftprogress": 13, "../commonui/livetimedisplay": 14, "./component/big-play-button": 133, "./component/cc-button": 134, "./component/controlbar": 135, "./component/error-display": 138, "./component/fullscreen-button": 139, "./component/h5-loading": 140, "./component/info-display": 141, "./component/live-display": 142, "./component/play-button": 143, "./component/progress": 145, "./component/setting/button": 148, "./component/snapshot": 156, "./component/thumbnail": 158, "./component/time-display": 159, "./component/tooltip": 160, "./component/unmute-button": 161, "./component/volume": 163 }] }, {}, [16])(16);
    });
  }(aliplayerMin)), aliplayerMin.exports;
}
var aliplayerMinExports = requireAliplayerMin();
const Aliplayer$1 = /* @__PURE__ */ getDefaultExportFromCjs(aliplayerMinExports);
function secondsToMinute(d) {
  if (d) {
    typeof d == "string" && (d.indexOf("分") > -1 ? d = d.replace(/[^0-9]/ig, "") * 60 : d.indexOf("秒") > -1 && (d = d.replace(/[^0-9]/ig, "")));
    var o = Math.floor(d / (24 * 3600)), x = Math.floor((d - o * 24 * 3600) / 3600), _ = Math.floor((d - o * 24 * 3600 - x * 3600) / 60), u = parseInt(d - o * 24 * 3600 - x * 3600 - _ * 60), c = "";
    return o > 0 && (c += o + "天"), c += `${x < 10 ? "0" + x : x}:`, c += `${_ < 10 ? "0" + _ : _}:`, c += `${u < 10 ? "0" + u : u}`, c;
  } else
    return "00:00:00";
}
function bind(d, o) {
  return function() {
    return d.apply(o, arguments);
  };
}
const { toString } = Object.prototype, { getPrototypeOf } = Object, { iterator, toStringTag } = Symbol, kindOf = /* @__PURE__ */ ((d) => (o) => {
  const x = toString.call(o);
  return d[x] || (d[x] = x.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kindOfTest = (d) => (d = d.toLowerCase(), (o) => kindOf(o) === d), typeOfTest = (d) => (o) => typeof o === d, { isArray } = Array, isUndefined = typeOfTest("undefined");
function isBuffer(d) {
  return d !== null && !isUndefined(d) && d.constructor !== null && !isUndefined(d.constructor) && isFunction(d.constructor.isBuffer) && d.constructor.isBuffer(d);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(d) {
  let o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(d) : o = d && d.buffer && isArrayBuffer(d.buffer), o;
}
const isString = typeOfTest("string"), isFunction = typeOfTest("function"), isNumber = typeOfTest("number"), isObject = (d) => d !== null && typeof d == "object", isBoolean = (d) => d === !0 || d === !1, isPlainObject = (d) => {
  if (kindOf(d) !== "object")
    return !1;
  const o = getPrototypeOf(d);
  return (o === null || o === Object.prototype || Object.getPrototypeOf(o) === null) && !(toStringTag in d) && !(iterator in d);
}, isDate = kindOfTest("Date"), isFile = kindOfTest("File"), isBlob = kindOfTest("Blob"), isFileList = kindOfTest("FileList"), isStream = (d) => isObject(d) && isFunction(d.pipe), isFormData = (d) => {
  let o;
  return d && (typeof FormData == "function" && d instanceof FormData || isFunction(d.append) && ((o = kindOf(d)) === "formdata" || // detect form-data instance
  o === "object" && isFunction(d.toString) && d.toString() === "[object FormData]"));
}, isURLSearchParams = kindOfTest("URLSearchParams"), [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest), trim = (d) => d.trim ? d.trim() : d.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(d, o, { allOwnKeys: x = !1 } = {}) {
  if (d === null || typeof d > "u")
    return;
  let _, u;
  if (typeof d != "object" && (d = [d]), isArray(d))
    for (_ = 0, u = d.length; _ < u; _++)
      o.call(null, d[_], _, d);
  else {
    const c = x ? Object.getOwnPropertyNames(d) : Object.keys(d), a = c.length;
    let s;
    for (_ = 0; _ < a; _++)
      s = c[_], o.call(null, d[s], s, d);
  }
}
function findKey(d, o) {
  o = o.toLowerCase();
  const x = Object.keys(d);
  let _ = x.length, u;
  for (; _-- > 0; )
    if (u = x[_], o === u.toLowerCase())
      return u;
  return null;
}
const _global = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, isContextDefined = (d) => !isUndefined(d) && d !== _global;
function merge() {
  const { caseless: d } = isContextDefined(this) && this || {}, o = {}, x = (_, u) => {
    const c = d && findKey(o, u) || u;
    isPlainObject(o[c]) && isPlainObject(_) ? o[c] = merge(o[c], _) : isPlainObject(_) ? o[c] = merge({}, _) : isArray(_) ? o[c] = _.slice() : o[c] = _;
  };
  for (let _ = 0, u = arguments.length; _ < u; _++)
    arguments[_] && forEach(arguments[_], x);
  return o;
}
const extend = (d, o, x, { allOwnKeys: _ } = {}) => (forEach(o, (u, c) => {
  x && isFunction(u) ? d[c] = bind(u, x) : d[c] = u;
}, { allOwnKeys: _ }), d), stripBOM = (d) => (d.charCodeAt(0) === 65279 && (d = d.slice(1)), d), inherits = (d, o, x, _) => {
  d.prototype = Object.create(o.prototype, _), d.prototype.constructor = d, Object.defineProperty(d, "super", {
    value: o.prototype
  }), x && Object.assign(d.prototype, x);
}, toFlatObject = (d, o, x, _) => {
  let u, c, a;
  const s = {};
  if (o = o || {}, d == null) return o;
  do {
    for (u = Object.getOwnPropertyNames(d), c = u.length; c-- > 0; )
      a = u[c], (!_ || _(a, d, o)) && !s[a] && (o[a] = d[a], s[a] = !0);
    d = x !== !1 && getPrototypeOf(d);
  } while (d && (!x || x(d, o)) && d !== Object.prototype);
  return o;
}, endsWith = (d, o, x) => {
  d = String(d), (x === void 0 || x > d.length) && (x = d.length), x -= o.length;
  const _ = d.indexOf(o, x);
  return _ !== -1 && _ === x;
}, toArray = (d) => {
  if (!d) return null;
  if (isArray(d)) return d;
  let o = d.length;
  if (!isNumber(o)) return null;
  const x = new Array(o);
  for (; o-- > 0; )
    x[o] = d[o];
  return x;
}, isTypedArray = /* @__PURE__ */ ((d) => (o) => d && o instanceof d)(typeof Uint8Array < "u" && getPrototypeOf(Uint8Array)), forEachEntry = (d, o) => {
  const _ = (d && d[iterator]).call(d);
  let u;
  for (; (u = _.next()) && !u.done; ) {
    const c = u.value;
    o.call(d, c[0], c[1]);
  }
}, matchAll = (d, o) => {
  let x;
  const _ = [];
  for (; (x = d.exec(o)) !== null; )
    _.push(x);
  return _;
}, isHTMLForm = kindOfTest("HTMLFormElement"), toCamelCase = (d) => d.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(x, _, u) {
    return _.toUpperCase() + u;
  }
), hasOwnProperty = (({ hasOwnProperty: d }) => (o, x) => d.call(o, x))(Object.prototype), isRegExp = kindOfTest("RegExp"), reduceDescriptors = (d, o) => {
  const x = Object.getOwnPropertyDescriptors(d), _ = {};
  forEach(x, (u, c) => {
    let a;
    (a = o(u, c, d)) !== !1 && (_[c] = a || u);
  }), Object.defineProperties(d, _);
}, freezeMethods = (d) => {
  reduceDescriptors(d, (o, x) => {
    if (isFunction(d) && ["arguments", "caller", "callee"].indexOf(x) !== -1)
      return !1;
    const _ = d[x];
    if (isFunction(_)) {
      if (o.enumerable = !1, "writable" in o) {
        o.writable = !1;
        return;
      }
      o.set || (o.set = () => {
        throw Error("Can not rewrite read-only method '" + x + "'");
      });
    }
  });
}, toObjectSet = (d, o) => {
  const x = {}, _ = (u) => {
    u.forEach((c) => {
      x[c] = !0;
    });
  };
  return isArray(d) ? _(d) : _(String(d).split(o)), x;
}, noop = () => {
}, toFiniteNumber = (d, o) => d != null && Number.isFinite(d = +d) ? d : o;
function isSpecCompliantForm(d) {
  return !!(d && isFunction(d.append) && d[toStringTag] === "FormData" && d[iterator]);
}
const toJSONObject = (d) => {
  const o = new Array(10), x = (_, u) => {
    if (isObject(_)) {
      if (o.indexOf(_) >= 0)
        return;
      if (!("toJSON" in _)) {
        o[u] = _;
        const c = isArray(_) ? [] : {};
        return forEach(_, (a, s) => {
          const t = x(a, u + 1);
          !isUndefined(t) && (c[s] = t);
        }), o[u] = void 0, c;
      }
    }
    return _;
  };
  return x(d, 0);
}, isAsyncFn = kindOfTest("AsyncFunction"), isThenable = (d) => d && (isObject(d) || isFunction(d)) && isFunction(d.then) && isFunction(d.catch), _setImmediate = ((d, o) => d ? setImmediate : o ? ((x, _) => (_global.addEventListener("message", ({ source: u, data: c }) => {
  u === _global && c === x && _.length && _.shift()();
}, !1), (u) => {
  _.push(u), _global.postMessage(x, "*");
}))(`axios@${Math.random()}`, []) : (x) => setTimeout(x))(
  typeof setImmediate == "function",
  isFunction(_global.postMessage)
), asap = typeof queueMicrotask < "u" ? queueMicrotask.bind(_global) : typeof process < "u" && process.nextTick || _setImmediate, isIterable = (d) => d != null && isFunction(d[iterator]), utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable
};
function AxiosError$1(d, o, x, _, u) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = d, this.name = "AxiosError", o && (this.code = o), x && (this.config = x), _ && (this.request = _), u && (this.response = u, this.status = u.status ? u.status : null);
}
utils$1.inherits(AxiosError$1, Error, {
  toJSON: function d() {
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
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const prototype$1 = AxiosError$1.prototype, descriptors = {};
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
].forEach((d) => {
  descriptors[d] = { value: d };
});
Object.defineProperties(AxiosError$1, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", { value: !0 });
AxiosError$1.from = (d, o, x, _, u, c) => {
  const a = Object.create(prototype$1);
  return utils$1.toFlatObject(d, a, function(t) {
    return t !== Error.prototype;
  }, (s) => s !== "isAxiosError"), AxiosError$1.call(a, d.message, o, x, _, u), a.cause = d, a.name = d.name, c && Object.assign(a, c), a;
};
const httpAdapter = null;
function isVisitable(d) {
  return utils$1.isPlainObject(d) || utils$1.isArray(d);
}
function removeBrackets(d) {
  return utils$1.endsWith(d, "[]") ? d.slice(0, -2) : d;
}
function renderKey(d, o, x) {
  return d ? d.concat(o).map(function(u, c) {
    return u = removeBrackets(u), !x && c ? "[" + u + "]" : u;
  }).join(x ? "." : "") : o;
}
function isFlatArray(d) {
  return utils$1.isArray(d) && !d.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function d(o) {
  return /^is[A-Z]/.test(o);
});
function toFormData$1(d, o, x) {
  if (!utils$1.isObject(d))
    throw new TypeError("target must be an object");
  o = o || new FormData(), x = utils$1.toFlatObject(x, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(l, g) {
    return !utils$1.isUndefined(g[l]);
  });
  const _ = x.metaTokens, u = x.visitor || n, c = x.dots, a = x.indexes, t = (x.Blob || typeof Blob < "u" && Blob) && utils$1.isSpecCompliantForm(o);
  if (!utils$1.isFunction(u))
    throw new TypeError("visitor must be a function");
  function e(h) {
    if (h === null) return "";
    if (utils$1.isDate(h))
      return h.toISOString();
    if (!t && utils$1.isBlob(h))
      throw new AxiosError$1("Blob is not supported. Use a Buffer instead.");
    return utils$1.isArrayBuffer(h) || utils$1.isTypedArray(h) ? t && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function n(h, l, g) {
    let m = h;
    if (h && !g && typeof h == "object") {
      if (utils$1.endsWith(l, "{}"))
        l = _ ? l : l.slice(0, -2), h = JSON.stringify(h);
      else if (utils$1.isArray(h) && isFlatArray(h) || (utils$1.isFileList(h) || utils$1.endsWith(l, "[]")) && (m = utils$1.toArray(h)))
        return l = removeBrackets(l), m.forEach(function(f, b) {
          !(utils$1.isUndefined(f) || f === null) && o.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? renderKey([l], b, c) : a === null ? l : l + "[]",
            e(f)
          );
        }), !1;
    }
    return isVisitable(h) ? !0 : (o.append(renderKey(g, l, c), e(h)), !1);
  }
  const r = [], p = Object.assign(predicates, {
    defaultVisitor: n,
    convertValue: e,
    isVisitable
  });
  function y(h, l) {
    if (!utils$1.isUndefined(h)) {
      if (r.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + l.join("."));
      r.push(h), utils$1.forEach(h, function(m, v) {
        (!(utils$1.isUndefined(m) || m === null) && u.call(
          o,
          m,
          utils$1.isString(v) ? v.trim() : v,
          l,
          p
        )) === !0 && y(m, l ? l.concat(v) : [v]);
      }), r.pop();
    }
  }
  if (!utils$1.isObject(d))
    throw new TypeError("data must be an object");
  return y(d), o;
}
function encode$1(d) {
  const o = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(d).replace(/[!'()~]|%20|%00/g, function(_) {
    return o[_];
  });
}
function AxiosURLSearchParams(d, o) {
  this._pairs = [], d && toFormData$1(d, this, o);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function d(o, x) {
  this._pairs.push([o, x]);
};
prototype.toString = function d(o) {
  const x = o ? function(_) {
    return o.call(this, _, encode$1);
  } : encode$1;
  return this._pairs.map(function(u) {
    return x(u[0]) + "=" + x(u[1]);
  }, "").join("&");
};
function encode(d) {
  return encodeURIComponent(d).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(d, o, x) {
  if (!o)
    return d;
  const _ = x && x.encode || encode;
  utils$1.isFunction(x) && (x = {
    serialize: x
  });
  const u = x && x.serialize;
  let c;
  if (u ? c = u(o, x) : c = utils$1.isURLSearchParams(o) ? o.toString() : new AxiosURLSearchParams(o, x).toString(_), c) {
    const a = d.indexOf("#");
    a !== -1 && (d = d.slice(0, a)), d += (d.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return d;
}
class InterceptorManager {
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
  use(o, x, _) {
    return this.handlers.push({
      fulfilled: o,
      rejected: x,
      synchronous: _ ? _.synchronous : !1,
      runWhen: _ ? _.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(o) {
    this.handlers[o] && (this.handlers[o] = null);
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
  forEach(o) {
    utils$1.forEach(this.handlers, function(_) {
      _ !== null && o(_);
    });
  }
}
const transitionalDefaults = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, URLSearchParams$1 = typeof URLSearchParams < "u" ? URLSearchParams : AxiosURLSearchParams, FormData$1 = typeof FormData < "u" ? FormData : null, Blob$1 = typeof Blob < "u" ? Blob : null, platform$1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, hasBrowserEnv = typeof window < "u" && typeof document < "u", _navigator = typeof navigator == "object" && navigator || void 0, hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0), hasStandardBrowserWebWorkerEnv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", origin = hasBrowserEnv && window.location.href || "http://localhost", utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin
}, Symbol.toStringTag, { value: "Module" })), platform = {
  ...utils,
  ...platform$1
};
function toURLEncodedForm(d, o) {
  return toFormData$1(d, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(x, _, u, c) {
      return platform.isNode && utils$1.isBuffer(x) ? (this.append(_, x.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, o));
}
function parsePropPath(d) {
  return utils$1.matchAll(/\w+|\[(\w*)]/g, d).map((o) => o[0] === "[]" ? "" : o[1] || o[0]);
}
function arrayToObject(d) {
  const o = {}, x = Object.keys(d);
  let _;
  const u = x.length;
  let c;
  for (_ = 0; _ < u; _++)
    c = x[_], o[c] = d[c];
  return o;
}
function formDataToJSON(d) {
  function o(x, _, u, c) {
    let a = x[c++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), t = c >= x.length;
    return a = !a && utils$1.isArray(u) ? u.length : a, t ? (utils$1.hasOwnProp(u, a) ? u[a] = [u[a], _] : u[a] = _, !s) : ((!u[a] || !utils$1.isObject(u[a])) && (u[a] = []), o(x, _, u[a], c) && utils$1.isArray(u[a]) && (u[a] = arrayToObject(u[a])), !s);
  }
  if (utils$1.isFormData(d) && utils$1.isFunction(d.entries)) {
    const x = {};
    return utils$1.forEachEntry(d, (_, u) => {
      o(parsePropPath(_), u, x, 0);
    }), x;
  }
  return null;
}
function stringifySafely(d, o, x) {
  if (utils$1.isString(d))
    try {
      return (o || JSON.parse)(d), utils$1.trim(d);
    } catch (_) {
      if (_.name !== "SyntaxError")
        throw _;
    }
  return (x || JSON.stringify)(d);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function d(o, x) {
    const _ = x.getContentType() || "", u = _.indexOf("application/json") > -1, c = utils$1.isObject(o);
    if (c && utils$1.isHTMLForm(o) && (o = new FormData(o)), utils$1.isFormData(o))
      return u ? JSON.stringify(formDataToJSON(o)) : o;
    if (utils$1.isArrayBuffer(o) || utils$1.isBuffer(o) || utils$1.isStream(o) || utils$1.isFile(o) || utils$1.isBlob(o) || utils$1.isReadableStream(o))
      return o;
    if (utils$1.isArrayBufferView(o))
      return o.buffer;
    if (utils$1.isURLSearchParams(o))
      return x.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), o.toString();
    let s;
    if (c) {
      if (_.indexOf("application/x-www-form-urlencoded") > -1)
        return toURLEncodedForm(o, this.formSerializer).toString();
      if ((s = utils$1.isFileList(o)) || _.indexOf("multipart/form-data") > -1) {
        const t = this.env && this.env.FormData;
        return toFormData$1(
          s ? { "files[]": o } : o,
          t && new t(),
          this.formSerializer
        );
      }
    }
    return c || u ? (x.setContentType("application/json", !1), stringifySafely(o)) : o;
  }],
  transformResponse: [function d(o) {
    const x = this.transitional || defaults.transitional, _ = x && x.forcedJSONParsing, u = this.responseType === "json";
    if (utils$1.isResponse(o) || utils$1.isReadableStream(o))
      return o;
    if (o && utils$1.isString(o) && (_ && !this.responseType || u)) {
      const a = !(x && x.silentJSONParsing) && u;
      try {
        return JSON.parse(o);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? AxiosError$1.from(s, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return o;
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
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function d(o) {
    return o >= 200 && o < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (d) => {
  defaults.headers[d] = {};
});
const ignoreDuplicateOf = utils$1.toObjectSet([
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
]), parseHeaders = (d) => {
  const o = {};
  let x, _, u;
  return d && d.split(`
`).forEach(function(a) {
    u = a.indexOf(":"), x = a.substring(0, u).trim().toLowerCase(), _ = a.substring(u + 1).trim(), !(!x || o[x] && ignoreDuplicateOf[x]) && (x === "set-cookie" ? o[x] ? o[x].push(_) : o[x] = [_] : o[x] = o[x] ? o[x] + ", " + _ : _);
  }), o;
}, $internals = Symbol("internals");
function normalizeHeader(d) {
  return d && String(d).trim().toLowerCase();
}
function normalizeValue(d) {
  return d === !1 || d == null ? d : utils$1.isArray(d) ? d.map(normalizeValue) : String(d);
}
function parseTokens(d) {
  const o = /* @__PURE__ */ Object.create(null), x = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let _;
  for (; _ = x.exec(d); )
    o[_[1]] = _[2];
  return o;
}
const isValidHeaderName = (d) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(d.trim());
function matchHeaderValue(d, o, x, _, u) {
  if (utils$1.isFunction(_))
    return _.call(this, o, x);
  if (u && (o = x), !!utils$1.isString(o)) {
    if (utils$1.isString(_))
      return o.indexOf(_) !== -1;
    if (utils$1.isRegExp(_))
      return _.test(o);
  }
}
function formatHeader(d) {
  return d.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (o, x, _) => x.toUpperCase() + _);
}
function buildAccessors(d, o) {
  const x = utils$1.toCamelCase(" " + o);
  ["get", "set", "has"].forEach((_) => {
    Object.defineProperty(d, _ + x, {
      value: function(u, c, a) {
        return this[_].call(this, o, u, c, a);
      },
      configurable: !0
    });
  });
}
let AxiosHeaders$1 = class {
  constructor(o) {
    o && this.set(o);
  }
  set(o, x, _) {
    const u = this;
    function c(s, t, e) {
      const n = normalizeHeader(t);
      if (!n)
        throw new Error("header name must be a non-empty string");
      const r = utils$1.findKey(u, n);
      (!r || u[r] === void 0 || e === !0 || e === void 0 && u[r] !== !1) && (u[r || t] = normalizeValue(s));
    }
    const a = (s, t) => utils$1.forEach(s, (e, n) => c(e, n, t));
    if (utils$1.isPlainObject(o) || o instanceof this.constructor)
      a(o, x);
    else if (utils$1.isString(o) && (o = o.trim()) && !isValidHeaderName(o))
      a(parseHeaders(o), x);
    else if (utils$1.isObject(o) && utils$1.isIterable(o)) {
      let s = {}, t, e;
      for (const n of o) {
        if (!utils$1.isArray(n))
          throw TypeError("Object iterator must return a key-value pair");
        s[e = n[0]] = (t = s[e]) ? utils$1.isArray(t) ? [...t, n[1]] : [t, n[1]] : n[1];
      }
      a(s, x);
    } else
      o != null && c(x, o, _);
    return this;
  }
  get(o, x) {
    if (o = normalizeHeader(o), o) {
      const _ = utils$1.findKey(this, o);
      if (_) {
        const u = this[_];
        if (!x)
          return u;
        if (x === !0)
          return parseTokens(u);
        if (utils$1.isFunction(x))
          return x.call(this, u, _);
        if (utils$1.isRegExp(x))
          return x.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(o, x) {
    if (o = normalizeHeader(o), o) {
      const _ = utils$1.findKey(this, o);
      return !!(_ && this[_] !== void 0 && (!x || matchHeaderValue(this, this[_], _, x)));
    }
    return !1;
  }
  delete(o, x) {
    const _ = this;
    let u = !1;
    function c(a) {
      if (a = normalizeHeader(a), a) {
        const s = utils$1.findKey(_, a);
        s && (!x || matchHeaderValue(_, _[s], s, x)) && (delete _[s], u = !0);
      }
    }
    return utils$1.isArray(o) ? o.forEach(c) : c(o), u;
  }
  clear(o) {
    const x = Object.keys(this);
    let _ = x.length, u = !1;
    for (; _--; ) {
      const c = x[_];
      (!o || matchHeaderValue(this, this[c], c, o, !0)) && (delete this[c], u = !0);
    }
    return u;
  }
  normalize(o) {
    const x = this, _ = {};
    return utils$1.forEach(this, (u, c) => {
      const a = utils$1.findKey(_, c);
      if (a) {
        x[a] = normalizeValue(u), delete x[c];
        return;
      }
      const s = o ? formatHeader(c) : String(c).trim();
      s !== c && delete x[c], x[s] = normalizeValue(u), _[s] = !0;
    }), this;
  }
  concat(...o) {
    return this.constructor.concat(this, ...o);
  }
  toJSON(o) {
    const x = /* @__PURE__ */ Object.create(null);
    return utils$1.forEach(this, (_, u) => {
      _ != null && _ !== !1 && (x[u] = o && utils$1.isArray(_) ? _.join(", ") : _);
    }), x;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([o, x]) => o + ": " + x).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(o) {
    return o instanceof this ? o : new this(o);
  }
  static concat(o, ...x) {
    const _ = new this(o);
    return x.forEach((u) => _.set(u)), _;
  }
  static accessor(o) {
    const _ = (this[$internals] = this[$internals] = {
      accessors: {}
    }).accessors, u = this.prototype;
    function c(a) {
      const s = normalizeHeader(a);
      _[s] || (buildAccessors(u, a), _[s] = !0);
    }
    return utils$1.isArray(o) ? o.forEach(c) : c(o), this;
  }
};
AxiosHeaders$1.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({ value: d }, o) => {
  let x = o[0].toUpperCase() + o.slice(1);
  return {
    get: () => d,
    set(_) {
      this[x] = _;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders$1);
function transformData(d, o) {
  const x = this || defaults, _ = o || x, u = AxiosHeaders$1.from(_.headers);
  let c = _.data;
  return utils$1.forEach(d, function(s) {
    c = s.call(x, c, u.normalize(), o ? o.status : void 0);
  }), u.normalize(), c;
}
function isCancel$1(d) {
  return !!(d && d.__CANCEL__);
}
function CanceledError$1(d, o, x) {
  AxiosError$1.call(this, d ?? "canceled", AxiosError$1.ERR_CANCELED, o, x), this.name = "CanceledError";
}
utils$1.inherits(CanceledError$1, AxiosError$1, {
  __CANCEL__: !0
});
function settle(d, o, x) {
  const _ = x.config.validateStatus;
  !x.status || !_ || _(x.status) ? d(x) : o(new AxiosError$1(
    "Request failed with status code " + x.status,
    [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(x.status / 100) - 4],
    x.config,
    x.request,
    x
  ));
}
function parseProtocol(d) {
  const o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(d);
  return o && o[1] || "";
}
function speedometer(d, o) {
  d = d || 10;
  const x = new Array(d), _ = new Array(d);
  let u = 0, c = 0, a;
  return o = o !== void 0 ? o : 1e3, function(t) {
    const e = Date.now(), n = _[c];
    a || (a = e), x[u] = t, _[u] = e;
    let r = c, p = 0;
    for (; r !== u; )
      p += x[r++], r = r % d;
    if (u = (u + 1) % d, u === c && (c = (c + 1) % d), e - a < o)
      return;
    const y = n && e - n;
    return y ? Math.round(p * 1e3 / y) : void 0;
  };
}
function throttle(d, o) {
  let x = 0, _ = 1e3 / o, u, c;
  const a = (e, n = Date.now()) => {
    x = n, u = null, c && (clearTimeout(c), c = null), d.apply(null, e);
  };
  return [(...e) => {
    const n = Date.now(), r = n - x;
    r >= _ ? a(e, n) : (u = e, c || (c = setTimeout(() => {
      c = null, a(u);
    }, _ - r)));
  }, () => u && a(u)];
}
const progressEventReducer = (d, o, x = 3) => {
  let _ = 0;
  const u = speedometer(50, 250);
  return throttle((c) => {
    const a = c.loaded, s = c.lengthComputable ? c.total : void 0, t = a - _, e = u(t), n = a <= s;
    _ = a;
    const r = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: t,
      rate: e || void 0,
      estimated: e && s && n ? (s - a) / e : void 0,
      event: c,
      lengthComputable: s != null,
      [o ? "download" : "upload"]: !0
    };
    d(r);
  }, x);
}, progressEventDecorator = (d, o) => {
  const x = d != null;
  return [(_) => o[0]({
    lengthComputable: x,
    total: d,
    loaded: _
  }), o[1]];
}, asyncDecorator = (d) => (...o) => utils$1.asap(() => d(...o)), isURLSameOrigin = platform.hasStandardBrowserEnv ? /* @__PURE__ */ ((d, o) => (x) => (x = new URL(x, platform.origin), d.protocol === x.protocol && d.host === x.host && (o || d.port === x.port)))(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => !0, cookies = platform.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(d, o, x, _, u, c) {
      const a = [d + "=" + encodeURIComponent(o)];
      utils$1.isNumber(x) && a.push("expires=" + new Date(x).toGMTString()), utils$1.isString(_) && a.push("path=" + _), utils$1.isString(u) && a.push("domain=" + u), c === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(d) {
      const o = document.cookie.match(new RegExp("(^|;\\s*)(" + d + ")=([^;]*)"));
      return o ? decodeURIComponent(o[3]) : null;
    },
    remove(d) {
      this.write(d, "", Date.now() - 864e5);
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
function isAbsoluteURL(d) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(d);
}
function combineURLs(d, o) {
  return o ? d.replace(/\/?\/$/, "") + "/" + o.replace(/^\/+/, "") : d;
}
function buildFullPath(d, o, x) {
  let _ = !isAbsoluteURL(o);
  return d && (_ || x == !1) ? combineURLs(d, o) : o;
}
const headersToObject = (d) => d instanceof AxiosHeaders$1 ? { ...d } : d;
function mergeConfig$1(d, o) {
  o = o || {};
  const x = {};
  function _(e, n, r, p) {
    return utils$1.isPlainObject(e) && utils$1.isPlainObject(n) ? utils$1.merge.call({ caseless: p }, e, n) : utils$1.isPlainObject(n) ? utils$1.merge({}, n) : utils$1.isArray(n) ? n.slice() : n;
  }
  function u(e, n, r, p) {
    if (utils$1.isUndefined(n)) {
      if (!utils$1.isUndefined(e))
        return _(void 0, e, r, p);
    } else return _(e, n, r, p);
  }
  function c(e, n) {
    if (!utils$1.isUndefined(n))
      return _(void 0, n);
  }
  function a(e, n) {
    if (utils$1.isUndefined(n)) {
      if (!utils$1.isUndefined(e))
        return _(void 0, e);
    } else return _(void 0, n);
  }
  function s(e, n, r) {
    if (r in o)
      return _(e, n);
    if (r in d)
      return _(void 0, e);
  }
  const t = {
    url: c,
    method: c,
    data: c,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (e, n, r) => u(headersToObject(e), headersToObject(n), r, !0)
  };
  return utils$1.forEach(Object.keys(Object.assign({}, d, o)), function(n) {
    const r = t[n] || u, p = r(d[n], o[n], n);
    utils$1.isUndefined(p) && r !== s || (x[n] = p);
  }), x;
}
const resolveConfig = (d) => {
  const o = mergeConfig$1({}, d);
  let { data: x, withXSRFToken: _, xsrfHeaderName: u, xsrfCookieName: c, headers: a, auth: s } = o;
  o.headers = a = AxiosHeaders$1.from(a), o.url = buildURL(buildFullPath(o.baseURL, o.url, o.allowAbsoluteUrls), d.params, d.paramsSerializer), s && a.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let t;
  if (utils$1.isFormData(x)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((t = a.getContentType()) !== !1) {
      const [e, ...n] = t ? t.split(";").map((r) => r.trim()).filter(Boolean) : [];
      a.setContentType([e || "multipart/form-data", ...n].join("; "));
    }
  }
  if (platform.hasStandardBrowserEnv && (_ && utils$1.isFunction(_) && (_ = _(o)), _ || _ !== !1 && isURLSameOrigin(o.url))) {
    const e = u && c && cookies.read(c);
    e && a.set(u, e);
  }
  return o;
}, isXHRAdapterSupported = typeof XMLHttpRequest < "u", xhrAdapter = isXHRAdapterSupported && function(d) {
  return new Promise(function(x, _) {
    const u = resolveConfig(d);
    let c = u.data;
    const a = AxiosHeaders$1.from(u.headers).normalize();
    let { responseType: s, onUploadProgress: t, onDownloadProgress: e } = u, n, r, p, y, h;
    function l() {
      y && y(), h && h(), u.cancelToken && u.cancelToken.unsubscribe(n), u.signal && u.signal.removeEventListener("abort", n);
    }
    let g = new XMLHttpRequest();
    g.open(u.method.toUpperCase(), u.url, !0), g.timeout = u.timeout;
    function m() {
      if (!g)
        return;
      const f = AxiosHeaders$1.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), S = {
        data: !s || s === "text" || s === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: f,
        config: d,
        request: g
      };
      settle(function(T) {
        x(T), l();
      }, function(T) {
        _(T), l();
      }, S), g = null;
    }
    "onloadend" in g ? g.onloadend = m : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, g.onabort = function() {
      g && (_(new AxiosError$1("Request aborted", AxiosError$1.ECONNABORTED, d, g)), g = null);
    }, g.onerror = function() {
      _(new AxiosError$1("Network Error", AxiosError$1.ERR_NETWORK, d, g)), g = null;
    }, g.ontimeout = function() {
      let b = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded";
      const S = u.transitional || transitionalDefaults;
      u.timeoutErrorMessage && (b = u.timeoutErrorMessage), _(new AxiosError$1(
        b,
        S.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
        d,
        g
      )), g = null;
    }, c === void 0 && a.setContentType(null), "setRequestHeader" in g && utils$1.forEach(a.toJSON(), function(b, S) {
      g.setRequestHeader(S, b);
    }), utils$1.isUndefined(u.withCredentials) || (g.withCredentials = !!u.withCredentials), s && s !== "json" && (g.responseType = u.responseType), e && ([p, h] = progressEventReducer(e, !0), g.addEventListener("progress", p)), t && g.upload && ([r, y] = progressEventReducer(t), g.upload.addEventListener("progress", r), g.upload.addEventListener("loadend", y)), (u.cancelToken || u.signal) && (n = (f) => {
      g && (_(!f || f.type ? new CanceledError$1(null, d, g) : f), g.abort(), g = null);
    }, u.cancelToken && u.cancelToken.subscribe(n), u.signal && (u.signal.aborted ? n() : u.signal.addEventListener("abort", n)));
    const v = parseProtocol(u.url);
    if (v && platform.protocols.indexOf(v) === -1) {
      _(new AxiosError$1("Unsupported protocol " + v + ":", AxiosError$1.ERR_BAD_REQUEST, d));
      return;
    }
    g.send(c || null);
  });
}, composeSignals = (d, o) => {
  const { length: x } = d = d ? d.filter(Boolean) : [];
  if (o || x) {
    let _ = new AbortController(), u;
    const c = function(e) {
      if (!u) {
        u = !0, s();
        const n = e instanceof Error ? e : this.reason;
        _.abort(n instanceof AxiosError$1 ? n : new CanceledError$1(n instanceof Error ? n.message : n));
      }
    };
    let a = o && setTimeout(() => {
      a = null, c(new AxiosError$1(`timeout ${o} of ms exceeded`, AxiosError$1.ETIMEDOUT));
    }, o);
    const s = () => {
      d && (a && clearTimeout(a), a = null, d.forEach((e) => {
        e.unsubscribe ? e.unsubscribe(c) : e.removeEventListener("abort", c);
      }), d = null);
    };
    d.forEach((e) => e.addEventListener("abort", c));
    const { signal: t } = _;
    return t.unsubscribe = () => utils$1.asap(s), t;
  }
}, streamChunk = function* (d, o) {
  let x = d.byteLength;
  if (x < o) {
    yield d;
    return;
  }
  let _ = 0, u;
  for (; _ < x; )
    u = _ + o, yield d.slice(_, u), _ = u;
}, readBytes = async function* (d, o) {
  for await (const x of readStream(d))
    yield* streamChunk(x, o);
}, readStream = async function* (d) {
  if (d[Symbol.asyncIterator]) {
    yield* d;
    return;
  }
  const o = d.getReader();
  try {
    for (; ; ) {
      const { done: x, value: _ } = await o.read();
      if (x)
        break;
      yield _;
    }
  } finally {
    await o.cancel();
  }
}, trackStream = (d, o, x, _) => {
  const u = readBytes(d, o);
  let c = 0, a, s = (t) => {
    a || (a = !0, _ && _(t));
  };
  return new ReadableStream({
    async pull(t) {
      try {
        const { done: e, value: n } = await u.next();
        if (e) {
          s(), t.close();
          return;
        }
        let r = n.byteLength;
        if (x) {
          let p = c += r;
          x(p);
        }
        t.enqueue(new Uint8Array(n));
      } catch (e) {
        throw s(e), e;
      }
    },
    cancel(t) {
      return s(t), u.return();
    }
  }, {
    highWaterMark: 2
  });
}, isFetchSupported = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", isReadableStreamSupported = isFetchSupported && typeof ReadableStream == "function", encodeText = isFetchSupported && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((d) => (o) => d.encode(o))(new TextEncoder()) : async (d) => new Uint8Array(await new Response(d).arrayBuffer())), test = (d, ...o) => {
  try {
    return !!d(...o);
  } catch {
    return !1;
  }
}, supportsRequestStream = isReadableStreamSupported && test(() => {
  let d = !1;
  const o = new Request(platform.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return d = !0, "half";
    }
  }).headers.has("Content-Type");
  return d && !o;
}), DEFAULT_CHUNK_SIZE = 64 * 1024, supportsResponseStream = isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response("").body)), resolvers = {
  stream: supportsResponseStream && ((d) => d.body)
};
isFetchSupported && ((d) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((o) => {
    !resolvers[o] && (resolvers[o] = utils$1.isFunction(d[o]) ? (x) => x[o]() : (x, _) => {
      throw new AxiosError$1(`Response type '${o}' is not supported`, AxiosError$1.ERR_NOT_SUPPORT, _);
    });
  });
})(new Response());
const getBodyLength = async (d) => {
  if (d == null)
    return 0;
  if (utils$1.isBlob(d))
    return d.size;
  if (utils$1.isSpecCompliantForm(d))
    return (await new Request(platform.origin, {
      method: "POST",
      body: d
    }).arrayBuffer()).byteLength;
  if (utils$1.isArrayBufferView(d) || utils$1.isArrayBuffer(d))
    return d.byteLength;
  if (utils$1.isURLSearchParams(d) && (d = d + ""), utils$1.isString(d))
    return (await encodeText(d)).byteLength;
}, resolveBodyLength = async (d, o) => {
  const x = utils$1.toFiniteNumber(d.getContentLength());
  return x ?? getBodyLength(o);
}, fetchAdapter = isFetchSupported && (async (d) => {
  let {
    url: o,
    method: x,
    data: _,
    signal: u,
    cancelToken: c,
    timeout: a,
    onDownloadProgress: s,
    onUploadProgress: t,
    responseType: e,
    headers: n,
    withCredentials: r = "same-origin",
    fetchOptions: p
  } = resolveConfig(d);
  e = e ? (e + "").toLowerCase() : "text";
  let y = composeSignals([u, c && c.toAbortSignal()], a), h;
  const l = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let g;
  try {
    if (t && supportsRequestStream && x !== "get" && x !== "head" && (g = await resolveBodyLength(n, _)) !== 0) {
      let S = new Request(o, {
        method: "POST",
        body: _,
        duplex: "half"
      }), w;
      if (utils$1.isFormData(_) && (w = S.headers.get("content-type")) && n.setContentType(w), S.body) {
        const [T, C] = progressEventDecorator(
          g,
          progressEventReducer(asyncDecorator(t))
        );
        _ = trackStream(S.body, DEFAULT_CHUNK_SIZE, T, C);
      }
    }
    utils$1.isString(r) || (r = r ? "include" : "omit");
    const m = "credentials" in Request.prototype;
    h = new Request(o, {
      ...p,
      signal: y,
      method: x.toUpperCase(),
      headers: n.normalize().toJSON(),
      body: _,
      duplex: "half",
      credentials: m ? r : void 0
    });
    let v = await fetch(h);
    const f = supportsResponseStream && (e === "stream" || e === "response");
    if (supportsResponseStream && (s || f && l)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((R) => {
        S[R] = v[R];
      });
      const w = utils$1.toFiniteNumber(v.headers.get("content-length")), [T, C] = s && progressEventDecorator(
        w,
        progressEventReducer(asyncDecorator(s), !0)
      ) || [];
      v = new Response(
        trackStream(v.body, DEFAULT_CHUNK_SIZE, T, () => {
          C && C(), l && l();
        }),
        S
      );
    }
    e = e || "text";
    let b = await resolvers[utils$1.findKey(resolvers, e) || "text"](v, d);
    return !f && l && l(), await new Promise((S, w) => {
      settle(S, w, {
        data: b,
        headers: AxiosHeaders$1.from(v.headers),
        status: v.status,
        statusText: v.statusText,
        config: d,
        request: h
      });
    });
  } catch (m) {
    throw l && l(), m && m.name === "TypeError" && /Load failed|fetch/i.test(m.message) ? Object.assign(
      new AxiosError$1("Network Error", AxiosError$1.ERR_NETWORK, d, h),
      {
        cause: m.cause || m
      }
    ) : AxiosError$1.from(m, m && m.code, d, h);
  }
}), knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter
};
utils$1.forEach(knownAdapters, (d, o) => {
  if (d) {
    try {
      Object.defineProperty(d, "name", { value: o });
    } catch {
    }
    Object.defineProperty(d, "adapterName", { value: o });
  }
});
const renderReason = (d) => `- ${d}`, isResolvedHandle = (d) => utils$1.isFunction(d) || d === null || d === !1, adapters = {
  getAdapter: (d) => {
    d = utils$1.isArray(d) ? d : [d];
    const { length: o } = d;
    let x, _;
    const u = {};
    for (let c = 0; c < o; c++) {
      x = d[c];
      let a;
      if (_ = x, !isResolvedHandle(x) && (_ = knownAdapters[(a = String(x)).toLowerCase()], _ === void 0))
        throw new AxiosError$1(`Unknown adapter '${a}'`);
      if (_)
        break;
      u[a || "#" + c] = _;
    }
    if (!_) {
      const c = Object.entries(u).map(
        ([s, t]) => `adapter ${s} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = o ? c.length > 1 ? `since :
` + c.map(renderReason).join(`
`) : " " + renderReason(c[0]) : "as no adapter specified";
      throw new AxiosError$1(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return _;
  },
  adapters: knownAdapters
};
function throwIfCancellationRequested(d) {
  if (d.cancelToken && d.cancelToken.throwIfRequested(), d.signal && d.signal.aborted)
    throw new CanceledError$1(null, d);
}
function dispatchRequest(d) {
  return throwIfCancellationRequested(d), d.headers = AxiosHeaders$1.from(d.headers), d.data = transformData.call(
    d,
    d.transformRequest
  ), ["post", "put", "patch"].indexOf(d.method) !== -1 && d.headers.setContentType("application/x-www-form-urlencoded", !1), adapters.getAdapter(d.adapter || defaults.adapter)(d).then(function(_) {
    return throwIfCancellationRequested(d), _.data = transformData.call(
      d,
      d.transformResponse,
      _
    ), _.headers = AxiosHeaders$1.from(_.headers), _;
  }, function(_) {
    return isCancel$1(_) || (throwIfCancellationRequested(d), _ && _.response && (_.response.data = transformData.call(
      d,
      d.transformResponse,
      _.response
    ), _.response.headers = AxiosHeaders$1.from(_.response.headers))), Promise.reject(_);
  });
}
const VERSION$1 = "1.9.0", validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((d, o) => {
  validators$1[d] = function(_) {
    return typeof _ === d || "a" + (o < 1 ? "n " : " ") + d;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function d(o, x, _) {
  function u(c, a) {
    return "[Axios v" + VERSION$1 + "] Transitional option '" + c + "'" + a + (_ ? ". " + _ : "");
  }
  return (c, a, s) => {
    if (o === !1)
      throw new AxiosError$1(
        u(a, " has been removed" + (x ? " in " + x : "")),
        AxiosError$1.ERR_DEPRECATED
      );
    return x && !deprecatedWarnings[a] && (deprecatedWarnings[a] = !0, console.warn(
      u(
        a,
        " has been deprecated since v" + x + " and will be removed in the near future"
      )
    )), o ? o(c, a, s) : !0;
  };
};
validators$1.spelling = function d(o) {
  return (x, _) => (console.warn(`${_} is likely a misspelling of ${o}`), !0);
};
function assertOptions(d, o, x) {
  if (typeof d != "object")
    throw new AxiosError$1("options must be an object", AxiosError$1.ERR_BAD_OPTION_VALUE);
  const _ = Object.keys(d);
  let u = _.length;
  for (; u-- > 0; ) {
    const c = _[u], a = o[c];
    if (a) {
      const s = d[c], t = s === void 0 || a(s, c, d);
      if (t !== !0)
        throw new AxiosError$1("option " + c + " must be " + t, AxiosError$1.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (x !== !0)
      throw new AxiosError$1("Unknown option " + c, AxiosError$1.ERR_BAD_OPTION);
  }
}
const validator = {
  assertOptions,
  validators: validators$1
}, validators = validator.validators;
let Axios$1 = class {
  constructor(o) {
    this.defaults = o || {}, this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
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
  async request(o, x) {
    try {
      return await this._request(o, x);
    } catch (_) {
      if (_ instanceof Error) {
        let u = {};
        Error.captureStackTrace ? Error.captureStackTrace(u) : u = new Error();
        const c = u.stack ? u.stack.replace(/^.+\n/, "") : "";
        try {
          _.stack ? c && !String(_.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (_.stack += `
` + c) : _.stack = c;
        } catch {
        }
      }
      throw _;
    }
  }
  _request(o, x) {
    typeof o == "string" ? (x = x || {}, x.url = o) : x = o || {}, x = mergeConfig$1(this.defaults, x);
    const { transitional: _, paramsSerializer: u, headers: c } = x;
    _ !== void 0 && validator.assertOptions(_, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, !1), u != null && (utils$1.isFunction(u) ? x.paramsSerializer = {
      serialize: u
    } : validator.assertOptions(u, {
      encode: validators.function,
      serialize: validators.function
    }, !0)), x.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? x.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : x.allowAbsoluteUrls = !0), validator.assertOptions(x, {
      baseUrl: validators.spelling("baseURL"),
      withXsrfToken: validators.spelling("withXSRFToken")
    }, !0), x.method = (x.method || this.defaults.method || "get").toLowerCase();
    let a = c && utils$1.merge(
      c.common,
      c[x.method]
    );
    c && utils$1.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete c[h];
      }
    ), x.headers = AxiosHeaders$1.concat(a, c);
    const s = [];
    let t = !0;
    this.interceptors.request.forEach(function(l) {
      typeof l.runWhen == "function" && l.runWhen(x) === !1 || (t = t && l.synchronous, s.unshift(l.fulfilled, l.rejected));
    });
    const e = [];
    this.interceptors.response.forEach(function(l) {
      e.push(l.fulfilled, l.rejected);
    });
    let n, r = 0, p;
    if (!t) {
      const h = [dispatchRequest.bind(this), void 0];
      for (h.unshift.apply(h, s), h.push.apply(h, e), p = h.length, n = Promise.resolve(x); r < p; )
        n = n.then(h[r++], h[r++]);
      return n;
    }
    p = s.length;
    let y = x;
    for (r = 0; r < p; ) {
      const h = s[r++], l = s[r++];
      try {
        y = h(y);
      } catch (g) {
        l.call(this, g);
        break;
      }
    }
    try {
      n = dispatchRequest.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (r = 0, p = e.length; r < p; )
      n = n.then(e[r++], e[r++]);
    return n;
  }
  getUri(o) {
    o = mergeConfig$1(this.defaults, o);
    const x = buildFullPath(o.baseURL, o.url, o.allowAbsoluteUrls);
    return buildURL(x, o.params, o.paramsSerializer);
  }
};
utils$1.forEach(["delete", "get", "head", "options"], function d(o) {
  Axios$1.prototype[o] = function(x, _) {
    return this.request(mergeConfig$1(_ || {}, {
      method: o,
      url: x,
      data: (_ || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function d(o) {
  function x(_) {
    return function(c, a, s) {
      return this.request(mergeConfig$1(s || {}, {
        method: o,
        headers: _ ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: a
      }));
    };
  }
  Axios$1.prototype[o] = x(), Axios$1.prototype[o + "Form"] = x(!0);
});
let CancelToken$1 = class gt {
  constructor(o) {
    if (typeof o != "function")
      throw new TypeError("executor must be a function.");
    let x;
    this.promise = new Promise(function(c) {
      x = c;
    });
    const _ = this;
    this.promise.then((u) => {
      if (!_._listeners) return;
      let c = _._listeners.length;
      for (; c-- > 0; )
        _._listeners[c](u);
      _._listeners = null;
    }), this.promise.then = (u) => {
      let c;
      const a = new Promise((s) => {
        _.subscribe(s), c = s;
      }).then(u);
      return a.cancel = function() {
        _.unsubscribe(c);
      }, a;
    }, o(function(c, a, s) {
      _.reason || (_.reason = new CanceledError$1(c, a, s), x(_.reason));
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
  subscribe(o) {
    if (this.reason) {
      o(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(o) : this._listeners = [o];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(o) {
    if (!this._listeners)
      return;
    const x = this._listeners.indexOf(o);
    x !== -1 && this._listeners.splice(x, 1);
  }
  toAbortSignal() {
    const o = new AbortController(), x = (_) => {
      o.abort(_);
    };
    return this.subscribe(x), o.signal.unsubscribe = () => this.unsubscribe(x), o.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let o;
    return {
      token: new gt(function(u) {
        o = u;
      }),
      cancel: o
    };
  }
};
function spread$1(d) {
  return function(x) {
    return d.apply(null, x);
  };
}
function isAxiosError$1(d) {
  return utils$1.isObject(d) && d.isAxiosError === !0;
}
const HttpStatusCode$1 = {
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
Object.entries(HttpStatusCode$1).forEach(([d, o]) => {
  HttpStatusCode$1[o] = d;
});
function createInstance(d) {
  const o = new Axios$1(d), x = bind(Axios$1.prototype.request, o);
  return utils$1.extend(x, Axios$1.prototype, o, { allOwnKeys: !0 }), utils$1.extend(x, o, null, { allOwnKeys: !0 }), x.create = function(u) {
    return createInstance(mergeConfig$1(d, u));
  }, x;
}
const axios = createInstance(defaults);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError$1;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData$1;
axios.AxiosError = AxiosError$1;
axios.Cancel = axios.CanceledError;
axios.all = function d(o) {
  return Promise.all(o);
};
axios.spread = spread$1;
axios.isAxiosError = isAxiosError$1;
axios.mergeConfig = mergeConfig$1;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (d) => formDataToJSON(utils$1.isHTMLForm(d) ? new FormData(d) : d);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios, axiosInstance = axios.create({
  baseURL: "/",
  timeout: 1e4,
  withCredentials: !0
});
axiosInstance.interceptors.request.use(
  (d) => d,
  (d) => {
    Promise.reject(d);
  }
);
axiosInstance.interceptors.response.use(
  (d) => {
    const { code: o } = d.data;
    return o == null ? Promise.resolve(d) : Promise.resolve(d.data);
  },
  (d) => Promise.reject(d)
);
function getPlayAuth(d, o, x) {
  return axiosInstance({
    url: `https://dms.multimediapress.cn/dms/api/v2/getPlayAuth/appId/${d}/vid/${o}/timeOut/${x}`,
    method: "get"
  });
}
function getVideoInfo(d) {
  return axiosInstance({
    url: "https://dms.multimediapress.cn/dms/api/v2/getVideoInfo",
    method: "post",
    data: d
  });
}
function getPlayInfo(d, o, x) {
  console.log(x);
  let _ = `https://dms.multimediapress.cn/dms/v2/playInfo/${d}/${o}`;
  return x && (_ += "/1"), axiosInstance({
    url: _,
    method: "get"
  });
}
const _hoisted_1 = ["id"], _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    themeColor: {
      type: String,
      default: "#F44336"
    },
    url: {
      type: String,
      default: ""
    },
    playerId: {
      type: String,
      default: (/* @__PURE__ */ new Date()).getTime() + ""
    },
    cover: {
      type: String,
      default: ""
    },
    vid: {
      // 视频id
      type: [Number, String],
      default: 0
    },
    playType: {
      // 播放方式 1地址播放（开放不加密）2地址编码播放（地址base64加密）3防盗链播放（通过视频编号获取视频播放地址，防盗）
      type: Number,
      default: 1
    },
    appId: {
      type: Number,
      default: 0
    },
    allowDuration: {
      type: Number,
      default: -1
      // 允许试看时长 -1表示无限制 单位分钟
    },
    audit: {
      // 是否开启审核播放
      type: Boolean,
      default: !1
    },
    enterExitPoint: {
      type: Array,
      default: []
    },
    marks: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["login", "timeupdate", "update:enterExitPoint", "ready", "play", "pause", "playing", "ended", "canplay", "liveStreamStop", "hideBar", "showBar", "waiting", "requestFullScreen", "cancelFullScreen", "error", "startSeek", "completeSeek"],
  setup(d, { expose: o, emit: x }) {
    let _ = shallowRef(0), u = shallowRef(!1);
    const c = ref(null), a = x, s = d, t = ref(!1), e = reactive({
      videoSrc: "",
      // 视频地址
      options: {},
      container: null,
      duration: 0,
      showLoginDialogTip: !1,
      showLoginTip: !0,
      isLogin: !1,
      player: null,
      currentP: "0",
      currentTime: 0,
      response: {
        code: 200,
        msg: ""
      }
    });
    function n(G, ie = {}) {
      const {
        type: ve = "info",
        duration: Pe = 3e3,
        position: _e = "top-center"
      } = ie, Ce = document.createElement("div");
      Ce.className = `toast toast-${ve} toast-${_e}`, Ce.textContent = G, document.body.appendChild(Ce), setTimeout(() => {
        Ce.classList.add("show");
      }, 10), setTimeout(() => {
        Ce.classList.remove("show"), setTimeout(() => {
          Ce.remove();
        }, 300);
      }, Pe);
    }
    const r = (G) => {
      const ie = e.player.getCurrentTime();
      if (G === "0") {
        if (ie >= s.enterExitPoint[1])
          return n(ie === s.enterExitPoint[1] ? "入点和出点位置相同，请重新设置" : "入点时间不能大于出点时间，请重新设置", {
            type: "warning",
            duration: 2e3
          }), !1;
        e.player._el.getElementsByClassName("point-tag")[0].style.left = ie / e.duration * 100 + "%", e.player._el.getElementsByClassName("point-tag")[0].title = "入点：" + secondsToMinute(ie), s.enterExitPoint[0] = ie;
      } else {
        if (ie <= s.enterExitPoint[0])
          return n(ie === s.enterExitPoint[0] ? "入点和出点位置相同，请重新设置" : "出点时间不能小于入点时间，请重新设置", {
            type: "warning",
            duration: 2e3
          }), !1;
        e.player._el.getElementsByClassName("point-tag")[1].style.left = ie / e.duration * 100 + "%", e.player._el.getElementsByClassName("point-tag")[1].title = "出点：" + secondsToMinute(ie), s.enterExitPoint[1] = ie;
      }
      a("update:enterExitPoint", s.enterExitPoint);
    };
    function p(G) {
      s.playType === 1 ? (e.videoSrc = s.url, y()) : s.playType === 2 ? getPlayAuth(s.appId, G || s.vid, 30).then((ie) => {
        const { code: ve, data: Pe } = ie;
        if (ve === 200) {
          const _e = { appId: s.appId, vid: G || s.vid, playAuth: Pe };
          s.audit && (_e.audit = 1), getVideoInfo(_e).then((Ce) => {
            const { code: Fe, data: He } = Ce;
            e.response = Ce, Fe === 200 ? (e.videoSrc = He.url, e.duration = He.duration, t.value = He.innerIp, He.innerIp && (e.isLogin = !0)) : (e.videoSrc = "", t.value = !1), y();
          });
        }
      }) : s.playType === 3 && getPlayInfo(s.appId, G || s.vid, s.audit).then((ie) => {
        e.response = ie, ie.code === 200 ? (e.videoSrc = ie.data, t.value = ie.innerIp, ie.innerIp && (e.isLogin = !0)) : (e.videoSrc = "", t.value = !1), y();
      });
    }
    onMounted(() => {
      p();
    });
    function y() {
      var Pe;
      const G = "dms_player" + s.playerId, ie = {
        license: {
          domain: "multimediapress.cn",
          key: "6PdiKZSqULDBDP1VMe7a07ddcd50847418d8794bd756eb577"
        },
        id: G,
        source: e.videoSrc,
        height: "100%",
        components: [
          { name: "progressMarkerComponent", type: g },
          { name: "CustomComponent", type: w },
          { name: "ErrorComponent", type: T }
        ],
        showViewPointsBar: !0,
        // 是否显示学习记录
        showSpeed: !0,
        // 是否显示倍速按钮
        logo: [{
          //logo
          width: 20,
          position: "top-left",
          origin: "box",
          src: "./static/images/player_logo.png",
          offsetY: 1,
          offsetX: 2
        }],
        speedLevels: [
          { value: 0.25, label: "0.25x" },
          { value: 0.5, label: "0.5x" },
          { value: 1, label: "倍速" },
          { value: 1.25, label: "1.25x" },
          { value: 1.5, label: "1.5x" },
          { value: 2, label: "2.0x" }
        ],
        showTracks: !0,
        // 是否显示字幕
        skinLayoutIgnore: ["bigPlayButton"],
        controlBarVisibility: "always",
        marks: [],
        // 标记点
        showKnowledge: !1,
        // 是否显示知识点进度条
        knowledgeOpen: !1,
        // 知识点进度条默认是否开启显示
        Knowledge: [],
        viewPoints: []
        // 观看学习记录进度
      };
      e.options = Object.assign(ie, s.options);
      const ve = [];
      e.options.marks && e.options.marks.forEach((_e) => {
        ve.push({
          offset: _e.offset,
          time: secondsToMinute(_e.time),
          text: _e.text,
          isCustomized: !0
        });
      }), ie.progressMarkers = ve, U(), document.getElementById(G) ? e.container = document.getElementById(G) : (e.container = document.createElement("div"), e.container.id = G, (Pe = c.value) == null || Pe.appendChild(e.container)), e.player = new Aliplayer$1(ie, function(_e) {
        _e.on("ready", function(Ce) {
          a("ready", {
            player: _e,
            currentTime: _e.getCurrentTime(),
            duration: _e.getDuration()
          }), e.options.volume && _e.setVolume(e.options.volume), e.duration = _e.getDuration(), b(), S();
          const Fe = e.container.getElementsByClassName("prism-progress")[0];
          if (s.allowDuration !== -1) {
            const He = document.createElement("div");
            if (Fe) {
              const be = s.allowDuration * 60 / e.duration;
              He.className = "allow-point-marker", He.style.left = be * 100 + "%", Fe.appendChild(He);
            }
          }
          if (e.options.showViewPointsBar) {
            const He = document.createElement("div");
            He.className = "progress-range", Fe.after(He), A();
          }
        }), _e.on("play", () => {
          const Ce = _e.getCurrentTime();
          if (!e.isLogin && s.allowDuration !== -1 && Ce >= s.allowDuration * 60) {
            e.showLoginDialogTip = !0, _e.pause(), _e.seek(s.allowDuration * 60);
            return;
          }
          u.value = !0, a("play", {
            player: _e,
            currentTime: _e.getCurrentTime(),
            duration: _e.getDuration()
          });
        }), _e.on("pause", () => {
          a("pause", {
            player: _e,
            currentTime: _e.getCurrentTime(),
            duration: _e.getDuration()
          });
        }), _e.on("seek", function(Ce) {
          _.value = _e.getCurrentTime();
          const Fe = _e.getCurrentTime();
          !e.isLogin && s.allowDuration !== -1 && Fe >= s.allowDuration * 60 && (e.showLoginDialogTip = !0, _e.pause(), _e.seek(s.allowDuration * 60));
        }), _e.on("canplay", function(Ce) {
          a("canplay", {
            ...Ce,
            player: _e,
            currentTime: _e.getCurrentTime(),
            duration: _e.getDuration()
          });
        }), _e.on("error", function(Ce) {
          a("error", {
            ...Ce,
            player: _e,
            currentTime: _e.getCurrentTime(),
            duration: _e.getDuration()
          });
        }), _e.on("waiting", function(Ce) {
          a("waiting", {
            ...Ce,
            player: _e,
            currentTime: _e.getCurrentTime(),
            duration: _e.getDuration()
          });
        }), _e.on("playing", function(Ce) {
          a("playing", {
            ...Ce,
            player: _e,
            currentTime: _e.getCurrentTime(),
            duration: _e.getDuration()
          });
        }), _e.on("ended", function(Ce) {
          a("ended", {
            ...Ce,
            player: _e,
            currentTime: _e.getCurrentTime(),
            duration: _e.getDuration()
          });
        }), _e.on("startSeek", function(Ce) {
          a("startSeek", {
            ...Ce,
            player: _e,
            currentTime: _e.getCurrentTime(),
            duration: _e.getDuration()
          });
        }), _e.on("completeSeek", function(Ce) {
          a("completeSeek", {
            ...Ce,
            player: _e,
            currentTime: _e.getCurrentTime(),
            duration: _e.getDuration()
          });
        }), _e.on("liveStreamStop", function(Ce) {
          a("liveStreamStop", {
            ...Ce,
            player: _e,
            currentTime: _e.getCurrentTime(),
            duration: _e.getDuration()
          });
        }), _e.on("hideBar", function(Ce) {
          a("hideBar", Ce);
        }), _e.on("showBar", function(Ce) {
          a("showBar", Ce);
        }), _e.on("requestFullScreen", function(Ce) {
          a("requestFullScreen", Ce);
        }), _e.on("cancelFullScreen", function(Ce) {
          a("cancelFullScreen", Ce);
        }), _e.on("timeupdate", function() {
          O(_e);
        });
      });
    }
    function h(G) {
      const ie = [];
      G.forEach((ve) => {
        ie.push({
          offset: ve.offset,
          time: secondsToMinute(ve.time),
          text: ve.text,
          isCustomized: !0
        });
      }), ie.length === 0 && (e.container.querySelector(".prism-progress-marker").innerHTML = "", e.player.setProgressMarkers()), e.player.setProgressMarkers(ie);
    }
    let l = null;
    const g = Aliplayer$1.Component({
      createEl: function(G) {
        l = document.createElement("div"), l.className = "progress-marker-container", l.innerHTML = '<div class="marker-title"></div><div class="marker-time"></div>', G.appendChild(l);
      },
      markerDotOver: function(G, ie) {
        let ve = ie.progressMarker;
        l.getElementsByClassName("marker-title")[0].innerHTML = ve.text, l.getElementsByClassName("marker-time")[0].innerHTML = ve.time, l.style.left = ie.left * 100 + "%", ie.left * 100 > 5 && ie.left * 100 < 95 ? l.style.transform = "translateX(-50%)" : l.style.transform = "translateX(0)", l.style.display = "flex";
      },
      markerDotOut: function() {
        l.style.display = "none";
      }
    });
    function m(G) {
      G !== void 0 ? e.options.knowledgeOpen = G : e.options.knowledgeOpen = !e.options.knowledgeOpen;
    }
    function v(G, ie) {
      e.options.showKnowledge = G, b(ie);
    }
    function f(G) {
      e.options.showViewPointsBar = G;
    }
    function b(G) {
      let ie = [];
      if (G && G.length ? ie = G : ie = e.options.knowledge || [], e.options.showKnowledge) {
        if (e.container.querySelector(".knowledge-bar")) {
          e.container.querySelector(".knowledge-switch-btn").style.display = "block", e.container.querySelector(".knowledge-bar").style.display = "";
          return;
        }
        const Pe = document.createElement("div");
        Pe.className = "knowledge-switch-btn", Pe.innerHTML = `
      <div class="knowledge-switch-slider"></div>
      <div class="tip">切换显示视频知识点</div>
    `, e.container.querySelector(".prism-controlbar").appendChild(Pe);
        const _e = document.createElement("div");
        _e.className = "knowledge-bar";
        let Ce = '<div class="knowledge-bar-percent"></div>';
        for (var ve = 0; ve < ie.length; ve++) {
          const Fe = ie[ve], He = ie[ve + 1];
          let be = e.duration;
          He && (be = He.fromTo[0]);
          let Re = (be - Fe.fromTo[0]) / e.duration * 100;
          Re = Re > 100 ? 100 : Re;
          let Ie = Fe.fromTo[0] / e.duration * 100;
          Ie = Ie > 100 ? 100 : Ie, Ce += `<div class="knowledge-section" data-start="${Fe.fromTo[0]}" data-end="${Fe.fromTo[1]}" title="${Fe.name}" style="width:${Re}%;left:${Ie}%">${Fe.name}</div>`;
        }
        _e.innerHTML = Ce, e.container.appendChild(_e);
      } else
        e.container.querySelector(".knowledge-switch-btn") && (e.container.querySelector(".knowledge-switch-btn").style.display = "none", e.container.querySelector(".knowledge-bar").style.display = "none");
    }
    function S(G) {
      let ie = [];
      if (G && G.length ? ie = G : ie = s.enterExitPoint || [], ie && ie.length > 0) {
        if (e.container.querySelector(".point-tags"))
          return !1;
        const ve = document.createElement("div");
        ve.className = "point-tags", ve.innerHTML = `<div class="point-tag enter-icon" title="入点：${secondsToMinute(ie[0])}" style="left:${ie[0] / e.duration * 100}%"></div>
    <div class="point-tag exit-icon" title="出点：${secondsToMinute(ie[1])}" style="left:${ie[1] / e.duration * 100}%"></div>`, e.container.querySelector(".prism-controlbar").appendChild(ve);
        const Pe = document.createElement("div");
        Pe.className = "point-btn-wrap", Pe.innerHTML = ` <div class="point-btn" data-id="0" title="打入点">
    </div><div class="point-btn" data-id="1" title="打出点"></div>`, e.container.querySelector(".prism-controlbar").appendChild(Pe);
      } else
        e.container.querySelector(".point-tags") && (e.container.querySelector(".point-tags").remove(), e.container.querySelector(".point-btn-wrap").remove());
    }
    const w = Aliplayer$1.Component({
      createEl: function(G) {
        if (s.allowDuration !== -1) {
          const ie = document.createElement("div");
          ie.className = "player-login-bar-tip", ie.innerHTML = `试看${s.allowDuration}分钟，需要登录才能完整观看
      <span class="login-btn">立即登录</span>
      <span class="close-btn"></span>`;
          const ve = document.createElement("div");
          ve.className = "login-dialog-tip", ve.innerHTML = '<div class="login-tip">登录观看完整版视频</div><div class="login-btn">立即登录</div>', G.appendChild(ie), G.appendChild(ve);
        }
        if (e.options.showTracks) {
          const ie = document.createElement("div");
          ie.className = "subtile-box";
          let ve = "", Pe = "active";
          e.options.textTracks && e.options.textTracks.forEach((_e) => {
            _e.default && (Pe = ""), ve += `
            <div class="cc-item ${_e.default ? "active" : ""}" data-lang="${_e.srclang}" data-src="${_e.src}">${_e.label}</div>
          `;
          }), ie.innerHTML = `
        <div class="cc-list">
          <div class="cc-item ${Pe}" data-lang="none" data-src="">无</div>
          ${ve}
        </div>
        <div class="cc-btn">
        </div>
      `, G.querySelector(".prism-controlbar").appendChild(ie);
        }
        if (e.options.showSpeed) {
          const ie = document.createElement("div");
          ie.className = "speed-box";
          let ve = "", Pe = "倍速";
          e.options.speedLevels && e.options.speedLevels.forEach((_e) => {
            let Ce = "";
            s.options.speed ? s.options.speed === _e.value && (Ce = "active", Pe = _e.value === 1 ? "倍速" : _e.label) : _e.value === 1 && (Ce = "active"), ve += `
            <div class="speed-item ${Ce}" data-value="${_e.value}">${_e.label}</div>
          `;
          }), ie.innerHTML = `
        <div class="speed-list">
          ${ve}
        </div>
        <div class="speed-btn">
        ${Pe}
        </div>
      `, G.querySelector(".prism-controlbar").appendChild(ie);
        }
      }
    }), T = Aliplayer$1.Component({
      createEl: function(G) {
        s.audit && e.response.code !== 200 && (G.querySelector(".prism-ErrorMessage .prism-error-content").style.display = "none", G.querySelector(".prism-ErrorMessage .prism-error-content").insertAdjacentHTML("beforebegin", `<div style="color:#fff;font-size:12px;text-align:center;margin:20px; 0;">${e.response.msg}</div>`));
      }
    });
    function C(G) {
      e.player.setSpeed(G);
      let ie = "倍速";
      e.container.querySelectorAll(".speed-item").forEach((ve) => {
        ve.classList.remove("active"), ve.dataset.value === G && (ve.classList.add("active"), ie = ve.dataset.value === "1" ? "倍速" : ve.innerText, e.container.querySelector(".speed-btn").innerHTML = ie);
      });
    }
    function R(G) {
      e.container.querySelectorAll(".cc-item").forEach((ie) => {
        ie.classList.remove("active"), ie.dataset.lang === G && (ie.classList.add("active"), e.player._ccService && (G ? e.player._ccService.switch(G) : e.player._ccService.switch("off")));
      });
    }
    function E(G) {
      if (G.target.className.indexOf("login-btn") !== -1 && (e.showLoginDialogTip = !0, P()), G.target.className.indexOf("close-btn") !== -1 && (e.showLoginTip = !1), G.target.className.indexOf("point-btn") !== -1) {
        const ie = G.target.dataset.id;
        r(ie);
      }
      if (G.target.className.indexOf("speed-item") !== -1) {
        const ie = G.target.dataset.value;
        C(ie);
      }
      if (G.target.className.indexOf("cc-item") !== -1) {
        const ie = G.target.dataset.lang;
        R(ie);
      }
      if ((G.target.className.indexOf("knowledge-switch-btn") !== -1 || G.target.className.indexOf("knowledge-switch-slider") !== -1) && (e.options.knowledgeOpen = !e.options.knowledgeOpen), G.target.className.indexOf("knowledge-section") !== -1) {
        const ie = G.target.dataset.start;
        e.player.seek(ie);
      }
    }
    const A = () => {
      const G = e.container.querySelector(".progress-range");
      if (!G) return;
      const ve = [...e.options.viewPoints].sort((He, be) => He - be), Pe = [];
      let _e = ve[0], Ce = ve[0];
      for (let He = 1; He < ve.length; He++)
        ve[He] === Ce + 1 || (Pe.push([_e, Ce]), _e = ve[He]), Ce = ve[He];
      Pe.push([_e, Ce]);
      let Fe = "";
      Pe.forEach(([He, be]) => {
        const Re = Math.max(0, Math.min(100, He / e.duration * 100)), Ie = Math.max(0, Math.min(100 - Re, (be - He + 1) / e.duration * 100));
        Fe += `<div class="progress-range-segment" style="left:${Re}%;width:${Ie}%"></div>`;
      }), G.innerHTML = Fe;
    };
    function H() {
      return e.options.viewPoints;
    }
    function N(G) {
      e.options.viewPoints = G, A();
    }
    function O(G) {
      if (e.currentTime = G.getCurrentTime(), e.currentTime) {
        const ie = parseInt(e.currentTime);
        if (e.options.viewPoints.indexOf(ie) === -1 && e.options.viewPoints.push(ie), A(), e.container.querySelector(".knowledge-bar-percent")) {
          const ve = (e.currentTime / e.duration * 100).toFixed(2);
          e.container.querySelector(".knowledge-bar-percent").style.width = ve + "%";
        }
      }
      a("timeupdate", { currentTime: e.currentTime, duration: e.duration, viewPoints: e.options.viewPoints }), s.allowDuration !== -1 && e.currentTime >= s.allowDuration * 60 && !e.isLogin && (e.showLoginDialogTip = !0, G.pause(), G.seek(s.allowDuration * 60)), e.currentFrom !== e.currentTime && (e.currentFrom = e.currentTime);
    }
    function F(G) {
      G.isLogin = G;
    }
    function U() {
      var G;
      e.player && ((G = e.player) == null || G.dispose(), e.showLoginDialogTip = !1, document.getElementById("dms_player" + s.playerId) && document.getElementById("dms_player" + s.playerId).remove(), e.player = null);
    }
    function M(G) {
      U(), p(G);
    }
    const P = () => {
      a("login");
    }, I = reactive({
      show: !1,
      x: "0px",
      y: "0px"
    }), L = (G) => {
      I.show = !0, I.x = G.clientX + "px", I.y = G.clientY + "px", G.preventDefault();
    }, V = (G) => {
      I.show = !1;
    };
    document.addEventListener("click", V);
    const Q = function() {
      var G = document.createElement("input");
      G.setAttribute("readonly", "readonly"), G.setAttribute("value", window.location.href), document.body.appendChild(G), G.select();
      var ie = document.execCommand("copy");
      return document.body.removeChild(G), n("复制成功", { type: "success" }), ie;
    };
    function j(G) {
      var ie;
      (ie = e.player) == null || ie.seek(G);
    }
    function k() {
      var G;
      (G = e.player) == null || G.pause();
    }
    function D() {
      var G;
      (G = e.player) == null || G.play();
    }
    function W() {
      var G;
      (G = e.player) == null || G.setVolume(0);
    }
    function ee(G) {
      var ie;
      (ie = e.player) == null || ie.setVolume(G);
    }
    function re() {
      var G;
      (G = e.player) == null || G.setVolume(1);
    }
    function ne() {
      var G;
      return (G = e.player) == null ? void 0 : G.getVolume();
    }
    function le() {
      var G;
      return (G = e.player) == null ? void 0 : G.getDuration();
    }
    function K() {
      var G;
      return (G = e.player) == null ? void 0 : G.getCurrentTime();
    }
    function oe(G) {
      try {
        if (!G) {
          document.pictureInPictureElement && document.exitPictureInPicture().catch((ie) => {
            n("退出画中画失败", { type: "error" });
          });
          return;
        }
        e.player.tag.disablePictureInPicture = !1, e.player.tag.requestPictureInPicture();
      } catch {
        n("浏览器不支持画中画模式", { type: "error" });
      }
    }
    return o({
      PictureInPicture: oe,
      getCurrentTime: K,
      getDuration: le,
      getVolume: ne,
      changeVid: M,
      pause: k,
      play: D,
      seek: j,
      init: p,
      initPlayer: y,
      destroy: U,
      changeLoginState: F,
      isPlay: u,
      setVolume: ee,
      mute: W,
      unmute: re,
      setTextTrack: R,
      setSpeed: C,
      getViewPoints: H,
      setViewPoints: N,
      changeKnowledgeOpen: m,
      changeKnowledgeShow: v,
      initKnowledge: b,
      initEnterExitPoint: S,
      changeViewPointsShow: f,
      setProgressMarkers: h,
      showToast: n
    }), onUnmounted(() => {
      document.removeEventListener("click", V), U();
    }), (G, ie) => (openBlock(), createElementBlock(Fragment, null, [
      createElementVNode("div", {
        ref_key: "playerRef",
        ref: c,
        class: normalizeClass(["video-player", {
          "show-knowledge-bar": e.options.knowledgeOpen,
          "show-view-points": e.options.showViewPointsBar,
          "no-login": d.allowDuration !== -1 && !e.isLogin,
          "show-login-tip-dialog": e.showLoginDialogTip,
          "show-login-tip": e.showLoginTip && !e.isLogin
        }]),
        style: normalizeStyle({ "--primary-color": d.themeColor }),
        onContextmenu: L,
        onClick: E
      }, [
        createElementVNode("div", {
          id: "dms_player" + s.playerId
        }, null, 8, _hoisted_1)
      ], 38),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        I.show ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "player-contextmenu",
          style: normalizeStyle({ top: I.y, left: I.x })
        }, [
          ie[0] || (ie[0] = createElementVNode("div", { class: "contextmenu-item" }, "国开出版集团", -1)),
          createElementVNode("div", {
            class: "contextmenu-item copy-page-url",
            onClick: Q
          }, "复制页面链接"),
          ie[1] || (ie[1] = createElementVNode("div", { class: "contextmenu-item" }, "版本号：v1.0", -1))
        ], 4)) : createCommentVNode("", !0)
      ]))
    ], 64));
  }
});
export {
  _sfc_main as default
};
