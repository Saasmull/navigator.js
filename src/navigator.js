!function(){
    var e = "unknown", n = e, r = {}, i = "undefined" != typeof window && void 0 !== window.document;
    i && "nodejs" !== window.name ?(r = window, n = "browser") :(r = "undefined" != typeof self ?self :"undefined" != typeof globalThis ?globalThis :e, n = "undefined" != typeof process && void 0 !== process.versions ?"node" :"other");
    var o, t = void 0 !== r.navigator, a = {name:e, version:e, html:e, javascript:e, ecmaScript:e},
        s = {name:e, version:[e], isApp:!1, support:e},
        l = {isPWA:e, desktopMode:e, webFramework:{isUsed:e, name:e, version:e}}, c = {
            version:e,
            session:l,
            hardware:{
                cpu:e,
                cpuCores:t && (r.navigator, 1) ?r.navigator.hardwareConcurrency :e,
                wordSize:e,
                gpu:e,
                memory:t && void 0 !== r.navigator.deviceMemory ?r.navigator.deviceMemory :e,
                endianness:e,
                screen:{resolution:[e, e], format:e, size:e},
                isMobile:e
            },
            runtime:{engine:a, browser:s, environment:{name:e, version:e}},
            support:{types:e, methods:e, keywords:e}
        };
    
    function d(e){
        try{
            return Function(e)(), !0
        }catch(e){
            return !1
        }
    }
    
    if(c.version = "0.0.0pre-alpha1", c.runtime.environment = (o = {
        name:"Vanilla JavaScript",
        version:e
    }, "node" === n ?(o.name = "Node.js", o.version = r.process.version) :"undefined" != typeof Deno && (o.name = "Deno", o.version = Deno.version.deno), o), "browser" === n){
        ("onmsgesturestart" in r || "fileSize" in r.document) && ("msZoom" in document.documentElement.style || "zoom" in document.documentElement.style) ?(a.javascript = "Chakra", "toolbar" in r || "statusbar" in r ?(a.name = "Spartan", a.html = "EdgeHTML", s.name = "Edge") :(a.name = "Trident", a.html = "MSHTML", a.javascript += " (JScript)", s.name = "Internet Explorer")) :!("storage" in r) && ("OLink" in document.documentElement.style || "OBorderImage" in document.documentElement.style || "OTableBaseline" in document.documentElement.style) ?(a.name = "Presto", a.html = "Presto", a.javascript = "Presto", s.name = "Opera") :"undefined" != typeof InstallTrigger || "InternalError" in r || "sidebar" in r ?(a.name = "Gecko", a.html = "Servo", a.javascript = "SpiderMonkey", function(){
            1.9275814160560206e-50 === Math.pow(Math.PI, -100) ?s.name = "Tor" :s.name = "Firefox";
            "webkitdirectory" in document.createElement("input") || "showModalDialog" in r ?c.hardware.isMobile = !1 :(c.hardware.isMobile = !0, /(X11; Linux x86)/gi.test(navigator.userAgent) && (c.session.desktopMode = !0))
        }()) :"chrome" in r || "productSub" in navigator && "20030107" === navigator.productSub || "WebkitURL" in r || "webkitConvertPointFromNodeToPage" in r || "onbeforeinstallprompt" in r || "onwebkitanimationstart" in r || "WebkitUserDrag" in document.documentElement.style || "WebkitTextSecurity" in document.documentElement.style ?"onwebkitmouseforceup" in r || "WebkitTouchCallout" in document.documentElement.style || "WebkitUserDrag" in document.documentElement.style && !1 in r || !("chrome" in r) && !("WebkitTapHighlightColor" in document.documentElement.style) ?(a.name = "WebKit", a.html = "WebCore", a.javascript = "JavaScriptCore", "Touch" in r && "onwebkitmouseforceup" in r && !("WebkitTouchCallout" in document.documentElement.style) && !("hardwareConcurrency" in navigator) ?(alert("Not Safari, but an WebKit-based Browser!"), h()) :h()) :(a.name = "Chromium", a.html = "Blink", "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D" === escape(r.navigator.javaEnabled.toString()) ?a.javascript = "V8" :a.javascript = "JavaScriptCore", s.name = "Chrome", "Int8Array" in r && "of" in Int8Array || "showOpenFilePicker" in r || "webkitMaskRepeatX" in document.documentElement.style && !("capture" in HTMLElement.prototype) ?c.hardware.isMobile = !1 :("capture" in HTMLInputElement.prototype || "NDEFReader" in r) && (c.hardware.isMobile = !0, /(X11; Linux)/gi.test(navigator.userAgent) && (c.session.desktopMode = !0))) :"KhtmlUserInput" in r.document.body.style && (a.name = "KDE", a.html = "khtml", a.javascript = "KJS"), c.session.isPWA = !!(t && navigator.standalone || "matchMedia" in r && r.matchMedia("(display-mode:standalone)").matches), c.hardware.wordSize = function(){
            var e = "x64";
            if("Gecko" === c.runtime.engine.name) try{
                return new Uint32Array(Math.pow(2, 31)), e
            }catch(n){
                if(t && null !== navigator.cpuClass && "x64" === navigator.cpuClass.replace("X", "x")) return e
            }
            if(t) for(var n = ["amd64", "WOW64", "Win64", "x64", "x64_64", "x86_64", "x86-64", "MacIntel", "Linux x86_64", "Linux aarch64"], r = 0; r < n.length; r++) if(navigator.appVersion.indexOf(n[r]) > -1 && r < 7 || navigator.platform.indexOf(n[r]) > -1 && r >= 7) return e;
            return "x32"
        }()
    }else{
        var m = "";
        "node" === n ?(m = os.release + os.platform, process.versions.ch ?(a.javascript = "Chakra", a.version = process.versions.ch) :process.versions.sm ?(a.javascript = "SpiderMonkey", a.version = process.versions.sm) :process.versions.v8 && (a.javascript = "V8", a.version = process.versions.v8)) :"Deno" === c.runtime.environment.name && (m = Deno.build.os, Deno.version.ch ?(a.javascript = "Chakra", a.version = Deno.version.ch) :Deno.version.sm ?(a.javascript = "SpiderMonkey", a.version = Deno.version.sm) :Deno.version.v8 && (a.javascript = "V8", a.version = Deno.version.v8));
        var v = "node" === n ?process :Deno && Deno.build ?Deno.build :e;
        c.hardware.wordSize = function(){
            if(v === e || !v) return e;
            if("darwin" === v.platform) return "x64";
            for(var n = ["amd64", "WOW64", "Win64", "x64", "x64_64", "x86_64", "x86-64"], r = 0; r < n.length; r++) if(v.arch === n[r]) return "x64";
            return "x32"
        }(), /(win32|Windows|Windows_NT)/gi.test(m) ?(m = "Windows", c.hardware.isMobile = !1) :/(aix)/gi.test(m) ?(m = "Aix", c.hardware.isMobile = !1) :/(freebsd)/gi.test(m) ?(m = "FreeBSD", c.hardware.isMobile = !1) :/(openbsd|bsd)/gi.test(m) ?(m = "OpenBSD", c.hardware.isMobile = !1) :/(sun)/gi.test(m) ?(m = "SunOS", c.hardware.isMobile = !1) :/(darwin)/gi.test(m) ?(m = "Darwin", c.hardware.isMobile = !1) :/(android)/gi.test(m) ?(m = "Android", c.hardware.isMobile = !0) :(m = "Linux", c.hardware.isMobile = !1)
    }
    if(a.javascript === e){
        var u = "";
        u = "toSource" in String.prototype || 1.9275814160560185e-50 === Math.pow(Math.PI, -100) || 1.9275814160560206e-50 === Math.pow(Math.PI, -100) ?"SpiderMonkey" :"BigInt" in r ?d("/(?<=a)/g.test('a')") ?"V8" :"JavaScriptCore" :"trimLeft" in String.prototype ?"values" in Array.prototype ?"Chakra" :"V8" :"name" in Function ?"Presto" :"JScript", c.runtime.engine.javascript = u
    }
    var p;
    !function(){
        var n = [{name:"navigator.js", version:c.version}];
        "acorn" in r && r.acorn.parse && (n[n.length] = {
            name:"acorn",
            version:r.acorn.version || e
        }), "acorn" in r && r.acorn.walk && (n[n.length] = {
            name:"acorn-walk",
            version:r.acorn.version || e
        }), "alertify" in r && r.alertify.alert && (n[n.length] = {
            name:"alertify.js",
            version:e
        }), "Alpine" in r && r.Alpine.setStyles && (n[n.length] = {name:"alpinejs", version:r.Alpine.version || e});
        var o = !!i && document.documentElement.getAttribute("amp-version");
        o && (n[n.length] = {
            name:"AMP",
            version:o
        }), "Amplitude" in r && r.Amplitude.addSong && (n[n.length] = {
            name:"amplitudejs",
            version:r.Amplitude.getVersion() || e
        });
        var t = !(!i || !("querySelector" in document)) && document.querySelector("[ng-version]");
        if((t || r.ng && r.ng.probe instanceof Function) && (n[n.length] = {
            name:"Angular",
            version:t && t.getAttribute("ng-version") || e
        }), "angular" in r && (n[n.length] = {
            name:"AngularJS",
            version:r.angular.version && r.angular.version.full || e
        }), "anime" in r && r.anime.set && (n[n.length] = {
            name:"anime.js",
            version:r.anime.version || e
        }), "async" in r && r.async.each && (n[n.length] = {
            name:"async",
            version:e
        }), "axios" in r && r.axios.get && (n[n.length] = {
            name:"Axios",
            version:r.axios.VERSION || e
        }), "Backbone" in r && r.Backbone.Router && (n[n.length] = {
            name:"Backbone.js",
            version:r.Backbone.VERSION || e
        }), "__core-js_shared__" in r && "core" in r && "regeneratorRuntime" in r && (n[n.length] = {
            name:"Babel",
            version:r.core.version || e
        }), "BABYLON" in r && r.BABYLON.Engine && (n[n.length] = {
            name:"Babylon",
            version:r.BABYLON.Engine.Version || e
        }), "Bacon" in r && r.Bacon.Next && (n[n.length] = {
            name:"Bacon.js",
            version:r.Bacon.version || e
        }), "base2" in r && r.base2.dom && (n[n.length] = {
            name:"base2",
            version:r.base2.version || e
        }), "BENTO" in r && r.BENTO.push && (n[n.length] = {
            name:"Bento",
            version:e
        }), "BetterScroll" in r && r.BetterScroll.createBScroll && (n[n.length] = {
            name:"BetterScroll",
            version:e
        }), "Bitcoin" in r && r.Bitcoin.Crypto && (n[n.length] = {
            name:"BitcoinJS",
            version:e
        }), "Blockly" in r && r.Blockly.Block && (n[n.length] = {
            name:"Blockly",
            version:r.Blockly.VERSION || e
        }), "BOOMR" in r && r.BOOMR.utils && r.BOOMR.init && (n[n.length] = {
            name:"boomerang.js",
            version:r.BOOMR.version || e
        }), "bootstrap" in r && r.bootstrap.Tooltip && (n[n.length] = {
            name:"bootstrap",
            version:r.bootstrap.Tooltip.VERSION || (r.bootstrap.Tooltip.Constructor ?r.bootstrap.Tooltip.Constructor.VERSION :e)
        }), "Bounce" in r && r.Bounce.prototype && r.Bounce.prototype.translate && (n[n.length] = {
            name:"bounce.js",
            version:e
        }), "bowser" in r && r.bowser.BROWSER_MAP && (n[n.length] = {
            name:"bowser",
            version:e
        }), "Thaw" in r && "brain" in r && "thaw" in r && (n[n.length] = {
            name:"brain.js",
            version:e
        }), "BREWSER" in r && r.BREWSER.ua && (n[n.length] = {
            name:"Brewser",
            version:r.BREWSER.VERSION || e
        }), "__BRYTHON__" in r && r.__BRYTHON__.$JS2Py && (n[n.length] = {
            name:"Brython",
            version:r.__BRYTHON__.version_info && Array.prototype.join ?r.__BRYTHON__.version_info.join(".") :e
        }), "c3" in r && r.c3.chart && (n[n.length] = {
            name:"c3",
            version:r.c3.version || e
        }), "can" in r && r.can.Construct && (n[n.length] = {
            name:"Can",
            version:r.can.VERSION || e
        }), "Chart" in r && r.Chart.Chart && (n[n.length] = {
            name:"Chart.js",
            version:r.Chart.version || e
        }), "Chartist" in r && r.Chartist.Line && (n[n.length] = {
            name:"chartist",
            version:r.Chartist.version || e
        }), "Cleave" in r && r.Cleave.Util && (n[n.length] = {
            name:"cleave.js",
            version:e
        }), "ClipboardJS" in r && r.ClipboardJS.isSupported && (n[n.length] = {
            name:"clipboard.js",
            version:e
        }), "CodeMirror" in r && r.CodeMirror.Line && (n[n.length] = {
            name:"CodeMirror",
            version:r.CodeMirror.version || e
        }), "Cookies" in r && r.Cookies.attributes && (n[n.length] = {
            name:"JavaScript Cookie",
            version:e
        }), "__core-js_shared__" in r || "core" in r){
            var a = r["__core-js_shared__"] || r.core;
            n[n.length] = {name:"core-js", version:"object" == typeof a.versions ?a.versions[0].version :a.version || e}
        }
        "d3" in r && r.d3.window && (n[n.length] = {
            name:"d3",
            version:r.d3.version || e
        }), "dayjs" in r && r.dayjs.isDayjs && (n[n.length] = {
            name:"dayjs",
            version:e
        }), "function" == typeof r.dragula && (n[n.length] = {
            name:"Dragula",
            version:e
        }), "Docsify" in r && r.Docsify.dom && (n[n.length] = {
            name:"Docsify",
            version:r.Docsify.version || e
        }), "IScroll" in r && r.IScroll.utils && (n[n.length] = {
            name:"iSroll",
            version:r.IScroll.prototype ?r.IScroll.prototype.version :e
        }), "_" in r && r._.includes && r._.escape && "`" === r._.escape("`") && (n[n.length] = {
            name:"Lodash",
            version:r._.VERSION || e
        }), "outdatedBrowser" in r && (n[n.length] = {
            name:"Outdated Browser",
            version:e
        }), r.Polymer && r.Polymer.dom && (n[n.length] = {
            name:"Polymer",
            version:r.Polymer.version || e
        }), "Sentry" in r && r.Sentry.BrowserClient && r.Sentry.SDK_NAME && (n[n.length] = {
            name:"Sentry Browser SDK",
            version:r.Sentry.SDK_VERSION || e
        }), "_" in r && r._.contains && r._.escape && "`" !== r._.escape("`") && (n[n.length] = {
            name:"Underscore.js",
            version:r._.VERSION || e
        })
    }();
    
    function h(){
        "Touch" in r && "onwebkitmouseforceup" in r && !("WebkitTouchCallout" in document.documentElement.style) && !("hardwareConcurrency" in navigator) ?s.name = "WebKit" :(s.name = "Safari", "WebkitTouchCallout" in document.documentElement.style ?(c.hardware.isMobile = !0, /Maci/gi.test(navigator.userAgent) && (c.session.desktopMode = !0)) :c.hardware.isMobile = !1)
    }
    
    console.table, a.ecmaScript = function(){
        for(var n = ([{
            S:13,
            L:"ECMAScript 2022",
            P:"draft",
            F:["flat" in Array.prototype, "hasOwn" in Object, "WeakRef" in r, d("async function f(){return 1;}var a = await f();"), d("var f =1;f &&= true;")]
        }, {
            S:12,
            L:"ECMAScript 2021",
            P:"2021-06",
            F:["replaceAll" in String.prototype, d("'any' in Promise"), "WeakRef" in r, d("var f = 1_000;"), d("var f =1;f &&= true;")]
        }, {
            S:11,
            L:"ECMAScript 2020",
            P:"2020-06",
            F:["globalThis" in r, d("'allSettled' in Promise"), "BigInt" in r, d("var f = {g:{h:true}};var a = f?.g?.h;"), d("var f ='';var a = f ?? true;")]
        }, {
            S:10,
            L:"ECMAScript 2019",
            P:"2019-06",
            F:["flat" in Array.prototype, "flatMap" in Array.prototype, "sort" in Array.prototype, "fromEntries" in Object, "trimStart" in String.prototype, d("'description' in Symbol.prototype"), "toString" in Function.prototype]
        }, {
            S:9,
            L:"ECMAScript 2018",
            P:"2018-06",
            F:["dotAll" in RegExp.prototype, d("'asyncIterator' in Symbol"), d("'finally' in Promise.prototype")]
        }, {
            S:8,
            L:"ECMAScript 2017",
            P:"2017-06",
            F:["entries" in Object, "values" in Object, "getOwnPropertyDescriptors" in Object, "padStart" in String.prototype, "padEnd" in String.prototype, d("async function f(){return true;}"), d("var f = {g:true,h:true,};")]
        }, {S:7, L:"ECMAScript 2016", P:"2016-06", F:["includes" in Array.prototype, d("var f = 2**4;")]}, {
            S:6,
            L:"ECMAScript 2015",
            P:"2015-06",
            F:["find" in Array.prototype, "findIndex" in Array.prototype, d("let f = true;"), d("const f = true;")]
        }, {
            S:5,
            L:"ECMAScript 2009",
            P:"2009-12",
            F:["isArray" in Array, "forEach" in Array.prototype, "map" in Array.prototype, "filter" in Array.prototype, "reduce" in Array.prototype, "reduceRight" in Array.prototype, "every" in Array.prototype, "some" in Array.prototype, "indexOf" in Array.prototype, "lastIndexOf" in Array.prototype, "defineProperty" in Object, d("JSON.parse('{\"f\":1}')"), d("JSON.stringify({f:1})"), d("'use strict';")]
        }]), i = 0; i < n.length; i++){
            for(var o = 0, t = 0; t < n[i].F.length; t++) n[i].F[t] && (o += 1);
            if(n[i].F.length / o < 100 / 95) return {edition:n[i].S, name:n[i].L, prelease:n[i].P}
        }
        return e
    }(), l.webFramework = "cordova" in r || "cordova_iab" in r ?{
        isUsed:!0,
        name:"Cordova",
        version:e
    } :"Echo" in r && "Core" in r ?{isUsed:!0, name:"Echo", version:e} :"Titanium" in r && "Ti" in r ?{
        isUsed:!0,
        name:"Titanium",
        version:Ti.version ?Ti.version :e
    } :"ionic" in r && "Platform" in ionic ?{
        isUsed:!0,
        name:"Ionic",
        version:ionic.Platform.version() ?ionic.Platform.version() :e
    } :"global" in r && "NativeScriptGlobals" in global ?{
        isUsed:!0,
        name:"NativeScript",
        version:e
    } :"Framework7" in r ?{
        isUsed:!0,
        name:"Framework7",
        version:e
    } :"navigator" in r && "ReactNative" === navigator.product ?{isUsed:!0, name:"ReactNative", version:e} :{
        isUsed:!1,
        name:e,
        version:e
    }, i && (c.hardware.screen.zoom = Math.round(r.outerWidth / r.innerWidth * 100), "devicePixelRatio" in r && (c.hardware.screen.resolution = [Math.round(r.screen.width * r.devicePixelRatio / (r.outerWidth / r.innerWidth * 100) * 100), Math.round(r.screen.height * r.devicePixelRatio / (r.outerWidth / r.innerWidth * 100) * 100)], c.hardware.screen.size = (Math.sqrt(Math.pow(screen.width * r.devicePixelRatio, 2) + Math.pow(screen.height * r.devicePixelRatio, 2)) / 96 * devicePixelRatio).toFixed(1) + "in"), c.hardware.screen.format = function(e, n){
        var r = n, i = e;
        e > n && (r = e, i = n);
        for(var o = 1; o < 1e6; o++){
            var t = r / (i / o);
            if(Math.abs(t - t.toFixed(0)) < .1) return e > n ?t.toFixed(0) + ":" + o :o + ":" + t.toFixed(0)
        }
    }(r.screen.width, r.screen.height), (p = document.createElement("canvas")) && "getContext" in p && (p = p.getContext("webgl")) && "getParameter" in p && (c.hardware.gpu = p.getParameter(p.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL))), c.hardware.endianness = function(){
        if(!("Uint32Array" in r) || !("Uint8Array" in r)) return "node" === n ?os.endianness() :e;
        var i = new Uint32Array(1);
        i[0] = 305419896;
        var o = new Uint8Array(i.buffer);
        switch(16777216 * o[0] + 65536 * o[1] + 256 * o[2] + o[3]){
            case 305419896:
                return "BE";
            case 2018915346:
                return "LE";
            default:
                return e
        }
    }(), c.support = {
        types:{
            Array:!0,
            BigInt:d("var a = 54n;"),
            Boolean:!0,
            Date:d("var a = new Date();"),
            Error:"Error" in r,
            Function:!0,
            Int8Array:d("var a = new Int8Array();"),
            Math:d("var a = Math.PI"),
            NaN:d("var a = 'a'/2;"),
            null:d("isNaN(1+null)"),
            Number:!0,
            Object:!0,
            RegExp:d("/[gf]/gi.test('grd')"),
            String:!0,
            Symbol:d("var a = Symbol()"),
            undefined:d("var a = undefined;")
        },
        methods:{alert:d("!!alert"), confirm:d("!!confirm"), eval:d("eval('1')"), parseInt:d("parseInt('1')")},
        keywords:{
            async:d("async function f(){return 1;}"),
            break:d("for(;;){break;}"),
            catch:d("try{}catch(e){}"),
            class:d("class a{}"),
            const:d("const a = 1;"),
            continue:d("for(;0;){continue;}"),
            do:d("do{}while(0);"),
            finally:d("try{}finally{}"),
            for:d("for(;0;){}"),
            function:d("function f(){}"),
            in:d("return 'b' in {'a':1,'b':2};"),
            let:d("let a = 1;"),
            return:d("return 1;"),
            this:d("var a = 1;this.a;"),
            try:d("try{}catch(e){}") || d("try{}finally{}"),
            var:d("var a;"),
            void:d("void 0;"),
            while:d("while(0){}")
        },
        API:{
            Geolocation:d("navigator.geolocation"),
            "Local Storage":d("var a = 'a';localStorage.setItem(a,a);localStorage.removeItem(a);"),
            "Session Storage":d("var a = 'a';sessionStorage.setItem(a,a);sessionStorage.removeItem(a);"),
            "Web Screen":d("var a = screen.width;"),
            "Web Share":d("naviagtor.share")
        }
    }, c.userAgent = "Mozilla/5.0 (" + (void 0 !== m ?m :"OS") + ("unknown" !== c.hardware.wordSize ?"; " + c.hardware.wordSize :"") + ") " + ("browser" === n && "Servo" !== c.runtime.engine.html ?"(KHTML, like Gecko) " :"") + ("unknown" !== c.runtime.engine.name ?c.runtime.engine.name :c.runtime.engine.javascript) + "/" + c.runtime.engine.version + " " + ("browser" === n ?c.runtime.browser.name + "/x" :c.runtime.environment.name + "/" + c.runtime.environment.version), console && console.dir, "undefined" != typeof module && void 0 !== module.exports ?module.exports.navigatorJS = c :r.navigatorJS = c
}();
