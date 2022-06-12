//document.write("Detecting...")
    var isDesktopMode = false;
    var os = ["Windows", "ChromeOS", "Android", "Linux", "macOS", "iOS", "iPadOS"];
    var HTMLengine = ["Trident", "EdgeHTML", "Gecko", "Blink", "Webkit", "Presto"];
    var JSengine = ["COM Classic", "Chakra (JScript)", "Chakra", "SpiderMonkey", "V8", "JavaScriptCore", "Presto"];
    var platforms = ["IE", "Edge", "Chrome", "Firefox", "Opera", "Chrome Android", "Firefox Android", "Safari", "Safari iOS", "Chrome hiOS"];
    var browsers = {
        "IE":{
            "2":true,
            "3":true,
            "4":true,
            "5":true,
            "6":true,
            "7":true,
            "8":true,
            "9":true,
            "10":true,
            "11":true
        },
        "Edge":{
            "12":true,
            "13":true,
            "14":true,
            "15":true,
            "16":true,
            "17":true,
            "18":true,
            "19":true,
            "20":true,
            "21":true,
            "22":true,
            "23":true,
            "24":true,
            "25":true,
            "26":true,
            "27":true,
            "28":true,
            "29":true,
            "30":true,
            "31":true,
            "32":true,
            "33":true,
            "34":true,
            "35":true,
            "36":true,
            "37":true,
            "38":true,
            "39":true,
            "40":true,
            "41":true,
            "42":true,
            "43":true,
            "44":true,
            "79":true,
            "80":true,
            "81":true,
            "82":true,
            "83":true,
            "84":true,
            "85":true,
            "86":true,
            "87":true,
            "88":true,
            "89":true,
            "90":true,
            "91":true,
            "92":true,
            "93":true,
            "94":true,
            "95":true,
            "96":true,
            "97":true,
            "98":true,
            "99":true,
            "100":true,
            "101":true,
            "102":true
        },
        "Chrome":{
            "1":true,
            "2":true,
            "3":true,
            "4":true,
            "5":true,
            "6":true,
            "7":true,
            "8":true,
            "9":true,
            "10":true,
            "11":true,
            "12":true,
            "13":true,
            "14":true,
            "15":true,
            "16":true,
            "17":true,
            "18":true,
            "19":true,
            "20":true,
            "21":true,
            "22":true,
            "23":true,
            "24":true,
            "25":true,
            "26":true,
            "27":true,
            "28":true,
            "29":true,
            "30":true,
            "31":true,
            "32":true,
            "33":true,
            "34":true,
            "35":true,
            "36":true,
            "37":true,
            "38":true,
            "39":true,
            "40":true,
            "41":true,
            "42":true,
            "43":true,
            "44":true,
            "45":true,
            "46":true,
            "47":true,
            "48":true,
            "49":true,
            "50":true,
            "51":true,
            "52":true,
            "53":true,
            "54":true,
            "55":true,
            "56":true,
            "57":true,
            "58":true,
            "59":true,
            "60":true,
            "61":true,
            "62":true,
            "63":true,
            "64":true,
            "65":true,
            "66":true,
            "67":true,
            "68":true,
            "69":true,
            "70":true,
            "71":true,
            "72":true,
            "73":true,
            "74":true,
            "75":true,
            "76":true,
            "77":true,
            "78":true,
            "79":true,
            "80":true,
            "81":true,
            "82":true,
            "83":true,
            "84":true,
            "85":true,
            "86":true,
            "87":true,
            "88":true,
            "89":true,
            "90":true,
            "91":true,
            "92":true,
            "93":true,
            "94":true,
            "95":true,
            "96":true,
            "97":true,
            "98":true,
            "99":true,
            "100":true,
            "101":true,
            "102":true
        },
        "Firefox":{
            "1":true,
            "2":true,
            "3":true,
            "4":true,
            "5":true,
            "6":true,
            "7":true,
            "8":true,
            "9":true,
            "10":true,
            "11":true,
            "12":true,
            "13":true,
            "14":true,
            "15":true,
            "16":true,
            "17":true,
            "18":true,
            "19":true,
            "20":true,
            "21":true,
            "22":true,
            "23":true,
            "24":true,
            "25":true,
            "26":true,
            "27":true,
            "28":true,
            "29":true,
            "30":true,
            "31":true,
            "32":true,
            "33":true,
            "34":true,
            "35":true,
            "36":true,
            "37":true,
            "38":true,
            "39":true,
            "40":true,
            "41":true,
            "42":true,
            "43":true,
            "44":true,
            "45":true,
            "46":true,
            "47":true,
            "48":true,
            "49":true,
            "50":true,
            "51":true,
            "52":true,
            "53":true,
            "54":true,
            "55":true,
            "56":true,
            "57":true,
            "58":true,
            "59":true,
            "60":true,
            "61":true,
            "62":true,
            "63":true,
            "64":true,
            "65":true,
            "66":true,
            "67":true,
            "68":true,
            "69":true,
            "70":true,
            "71":true,
            "72":true,
            "73":true,
            "74":true,
            "75":true,
            "76":true,
            "77":true,
            "78":true,
            "79":true,
            "80":true,
            "81":true,
            "82":true,
            "83":true,
            "84":true,
            "85":true,
            "86":true,
            "87":true,
            "88":true,
            "89":true,
            "90":true,
            "91":true,
            "92":true,
            "93":true,
            "94":true,
            "95":true,
            "96":true,
            "97":true,
            "98":true,
            "99":true,
            "100":true
        },
        "Opera":{
            "1":true,
            "2":true,
            "3":true,
            "4":true,
            "5":true,
            "6":true,
            "7":true,
            "8":true,
            "9":true,
            "10":true,
            "11":true,
            "12":true,
            //"12.1":true,
            "14":true,
            "15":true,
            "16":true,
            "17":true,
            "18":true,
            "19":true,
            "20":true,
            "21":true,
            "22":true,
            "23":true,
            "24":true,
            "25":true,
            "26":true,
            "27":true,
            "28":true,
            "29":true,
            "30":true,
            "31":true,
            "32":true,
            "33":true,
            "34":true,
            "35":true,
            "36":true,
            "37":true,
            "38":true,
            "39":true,
            "40":true,
            "41":true,
            "42":true,
            "43":true,
            "44":true,
            "45":true,
            "46":true,
            "47":true,
            "48":true,
            "49":true,
            "50":true,
            "51":true,
            "52":true,
            "53":true,
            "54":true,
            "55":true,
            "56":true,
            "57":true,
            "58":true,
            "59":true,
            "60":true,
            "61":true,
            "62":true,
            "63":true,
            "64":true,
            "65":true,
            "66":true,
            "67":true,
            "68":true,
            "69":true,
            "70":true,
            "71":true,
            "72":true,
            "73":true,
            "74":true,
            "75":true,
            "76":true,
            "77":true,
            "78":true,
            "79":true,
            "80":true,
            "81":true,
            "82":true,
            "83":true,
            "84":true,
            "85":true
        },
        "Chrome Android":{
            "1":true,
            "2":true,
            "3":true,
            "4":true,
            "5":true,
            "6":true,
            "7":true,
            "8":true,
            "9":true,
            "10":true,
            "11":true,
            "12":true,
            "13":true,
            "14":true,
            "15":true,
            "16":true,
            "17":true,
            "18":true,
            "19":true,
            "20":true,
            "21":true,
            "22":true,
            "23":true,
            "24":true,
            "25":true,
            "26":true,
            "27":true,
            "28":true,
            "29":true,
            "30":true,
            "31":true,
            "32":true,
            "33":true,
            "34":true,
            "35":true,
            "36":true,
            "37":true,
            "38":true,
            "39":true,
            "40":true,
            "41":true,
            "42":true,
            "43":true,
            "44":true,
            "45":true,
            "46":true,
            "47":true,
            "48":true,
            "49":true,
            "50":true,
            "51":true,
            "52":true,
            "53":true,
            "54":true,
            "55":true,
            "56":true,
            "57":true,
            "58":true,
            "59":true,
            "60":true,
            "61":true,
            "62":true,
            "63":true,
            "64":true,
            "65":true,
            "66":true,
            "67":true,
            "68":true,
            "69":true,
            "70":true,
            "71":true,
            "72":true,
            "73":true,
            "74":true,
            "75":true,
            "76":true,
            "77":true,
            "78":true,
            "79":true,
            "80":true,
            "81":true,
            "82":true,
            "83":true,
            "84":true,
            "85":true,
            "86":true,
            "87":true,
            "88":true,
            "89":true,
            "90":true,
            "91":true,
            "92":true,
            "93":true,
            "94":true,
            "95":true,
            "96":true,
            "97":true,
            "98":true,
            "99":true,
            "100":true,
            "101":true,
            "102":true
        },
        "Firefox Android":{
            "1":true,
            "2":true,
            "3":true,
            "4":true,
            "5":true,
            "6":true,
            "7":true,
            "8":true,
            "9":true,
            "10":true,
            "11":true,
            "12":true,
            "13":true,
            "14":true,
            "15":true,
            "16":true,
            "17":true,
            "18":true,
            "19":true,
            "20":true,
            "21":true,
            "22":true,
            "23":true,
            "24":true,
            "25":true,
            "26":true,
            "27":true,
            "28":true,
            "29":true,
            "30":true,
            "31":true,
            "32":true,
            "33":true,
            "34":true,
            "35":true,
            "36":true,
            "37":true,
            "38":true,
            "39":true,
            "40":true,
            "41":true,
            "42":true,
            "43":true,
            "44":true,
            "45":true,
            "46":true,
            "47":true,
            "48":true,
            "49":true,
            "50":true,
            "51":true,
            "52":true,
            "53":true,
            "54":true,
            "55":true,
            "56":true,
            "57":true,
            "58":true,
            "59":true,
            "60":true,
            "61":true,
            "62":true,
            "63":true,
            "64":true,
            "65":true,
            "66":true,
            "67":true,
            "68":true,
            "69":true,
            "70":true,
            "71":true,
            "72":true,
            "73":true,
            "74":true,
            "75":true,
            "76":true,
            "77":true,
            "78":true,
            "79":true,
            "80":true,
            "81":true,
            "82":true,
            "83":true,
            "84":true,
            "85":true,
            "86":true,
            "87":true,
            "88":true,
            "89":true,
            "90":true,
            "91":true,
            "92":true,
            "93":true,
            "94":true,
            "95":true,
            "96":true,
            "97":true,
            "98":true,
            "99":true,
            "100":true
        },
        "Safari":{
            "1":true,
            "1.1":true,
            "1.2":true,
            "1.3":true,
            "2":true,
            "3":true,
            "3.1":true,
            "3.2":true,
            "4":true,
            "5":true,
            "5.1":true,
            "6":true,
            "6.1":true,
            "7":true,
            "7.1":true,
            "8":true,
            "9":true,
            "9.1":true,
            "10":true,
            "10.1":true,
            "11":true,
            "11.1":true,
            "12":true,
            "12.1":true,
            "13":true,
            "13.1":true,
            "14":true,
            "14.1":true,
            "15":true,
            "15.1":true,
            "15.2-15.3":true,
            "15.4":true,
            "TP":true
        },
        "Safari iOS":{
            "3.2":true,
            "4.0-4.1":true,
            "4.2-4.3":true,
            "5.0-5.1":true,
            "6.0-6.1":true,
            "7.0-7.1":true,
            "8.0":true,
            "8.1-8.4":true,
            "9.0-9.2":true,
            "9.3":true,
            "10.0-10.2":true,
            "10.3":true,
            "11.0-11.2":true,
            "11.3-11.4":true,
            "12.0-12.1":true,
            "12.2-12.5":true,
            "13.0-13.1":true,
            "13.2":true,
            "13.3":true,
            "13.4-13.7":true,
            "14.0-14.4":true,
            "14.5-14.8":true,
            "15.0-15.1":true,
            "15.2-15.3":true,
            "15.4":true
        },
        "Chrome hiOS":{
            "1":true,
            "2":true,
            "3":true,
            "4":true,
            "5":true,
            "6":true,
            "7":true,
            "8":true,
            "9":true,
            "10":true,
            "11":true,
            "12":true,
            "13":true,
            "14":true,
            "15":true,
            "16":true,
            "17":true,
            "18":true,
            "19":true,
            "20":true,
            "21":true,
            "22":true,
            "23":true,
            "24":true,
            "25":true,
            "26":true,
            "27":true,
            "28":true,
            "29":true,
            "30":true,
            "31":true,
            "32":true,
            "33":true,
            "34":true,
            "35":true,
            "36":true,
            "37":true,
            "38":true,
            "39":true,
            "40":true,
            "41":true,
            "42":true,
            "43":true,
            "44":true,
            "45":true,
            "46":true,
            "47":true,
            "48":true,
            "49":true,
            "50":true,
            "51":true,
            "52":true,
            "53":true,
            "54":true,
            "55":true,
            "56":true,
            "57":true,
            "58":true,
            "59":true,
            "60":true,
            "61":true,
            "62":true,
            "63":true,
            "64":true,
            "65":true,
            "66":true,
            "67":true,
            "68":true,
            "69":true,
            "70":true,
            "71":true,
            "72":true,
            "73":true,
            "74":true,
            "75":true,
            "76":true,
            "77":true,
            "78":true,
            "79":true,
            "80":true,
            "81":true,
            "82":true,
            "83":true,
            "84":true,
            "85":true,
            "86":true,
            "87":true,
            "88":true,
            "89":true,
            "90":true,
            "91":true,
            "92":true,
            "93":true,
            "94":true,
            "95":true,
            "96":true,
            "97":true,
            "98":true,
            "99":true,
            "100":true,
            "101":true,
            "102":true
        }
    }

    document.write("Detecting...");

    /*for(let i = 0; i < 102; i++){
        document.writeln("\""+(i+1)+"\":true,\n");
    }*/
    function setBrowserToFalse(browserName){
        for(var x in browsers[browserName]){
            if(browsers[browserName].hasOwnProperty(x)){
                browsers[browserName][x] = false;
            }
            //console.log(x)
        }
        //console.log(browsers[browserName]);
    }

    function setBrowserVersionsToFalse(browserName, firstVersion, lastVersion){
        var inRange = false;
        for(var x in browsers[browserName]){
            if(firstVersion === x){
                inRange = true;
            }
            if(inRange){
                if(browsers[browserName].hasOwnProperty(x)){
                    browsers[browserName][x] = false;
                }
            }
            if(lastVersion === x){
                inRange = false;
            }
            //console.log(x)
        }
        //console.log(browsers[browserName]);
    }

    var index;
    if(("onmsgesturestart" in window || /*"scrollbarTrackColor" in document.documentElement.style || */"fileSize" in document) && ("msZoom" in document.documentElement.style || "zoom" in document.documentElement.style)){
        //console.log("Hallo");
        JSengine = "Chakra";
        if("toolbar" in window || "statusbar" in window){
            HTMLengine = "EdgeHTML";
            edgehtml();
        }else{
            HTMLengine = "Trident";
            JSengine += " (JScript)";
            trident();
        }
    }else if(!("storage" in window) && ("OLink" in document.body.style || "OBorderImage" in document.body.style || "OTableBaseline" in document.body.style)){
        HTMLengine = "Presto";
        JSengine = "Presto";
        presto();
    }else if(typeof InstallTrigger !== "undefined" || "InternalError" in window || "sidebar" in window){
        //Palemoon: not WebRTC & pdfViewer, but plugins (Java)
        HTMLengine = "Gecko";
        JSengine = "SpiderMonkey";
        gecko();
    }else if(("productSub" in navigator && navigator.productSub === "20030107") && ("WebkitURL" in window || "webkitConvertPointFromNodeToPage" in window || "onbeforeinstallprompt" in window || "onwebkitanimationstart" in window || "WebkitUserDrag" in document.documentElement.style || "WebkitTextSecurity" in document.documentElement.style)){
        if("onwebkitmouseforceup" in window || "WebkitTouchCallout" in document.documentElement.style || ("WebkitUserDrag" in document.documentElement.style && !"Touch" in window)){
            HTMLengine = "Webkit";
            JSengine = "JavaScriptCore";
            //navigator.productSub === 20030107? webkit-based
            //Geolocation, XR, standalone
            if("Touch" in window && "onwebkitmouseforceup" in window && !("WebkitTouchCallout" in document.documentElement.style || "hardwareConcurrency" in navigator)){
                alert("Not Safari, but an WebKit-based Browser!");
            }else{
                webkitSafari();
            }
        }else if("WebkitAppearance" in document.documentElement.style){
            HTMLengine = "Blink";
            if("function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D" === escape(navigator.javaEnabled.toString())){
                JSengine = "V8";
            }else{
                JSengine = "JavaScriptCore";
            }
            blinkB();
        }
    }else{
        document.write("other")
    }

    function coalesceSupport(){
        try{
            eval("bar = null; foo = bar ?? false;");
            return true;
        }catch(e){
            return false;
        }
    }

    function supportsWebp(){
        var elem = document.createElement("canvas");
        if(!!(elem.getContext && elem.getContext("2d"))){
            // was able or not to get WebP representation
            return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
        }else{
            // very old browser like IE 8, canvas not supported
            return false;
        }
        // https://caniuse.com/mdn-api_htmlcanvaselement_todataurl_type_parameter_webp
    }

    //console.log("Ok???", supportsWebp())

    function trident(){
        os = ["Windows", "macOS"];
        browsers.Edge = undefined;
        browsers.Chrome = undefined;
        browsers.Firefox = undefined;
        browsers.Opera = undefined;
        browsers["Chrome Android"] = undefined;
        browsers["Firefox Android"] = undefined;
        browsers.Safari = undefined;
        browsers["Safari iOS"] = undefined;
        if(window){
            setBrowserVersionsToFalse("IE", "2", "3");
            if("createElement" in document){
                setBrowserVersionsToFalse("IE", "2", "4");
                if("navigator" in window){
                    setBrowserVersionsToFalse("IE", "2", "5");
                    if("minWidth" in document.documentElement.style){
                        setBrowserVersionsToFalse("IE", "2", "6");
                        if("JSON" in window){
                            setBrowserVersionsToFalse("IE", "2", "7");
                            if("head" in document){
                                setBrowserVersionsToFalse("IE", "2", "8");
                                if("atob" in window){
                                    setBrowserVersionsToFalse("IE", "2", "9");
                                    if("devicePixelRatio" in window){
                                        setBrowserVersionsToFalse("IE", "2", "10");
                                    }else{
                                        setBrowserVersionsToFalse("IE", "11", "11");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("IE", "10", "11");
                                }
                            }else{
                                setBrowserVersionsToFalse("IE", "9", "11");
                            }
                        }else{
                            setBrowserVersionsToFalse("IE", "8", "11");
                        }
                    }else{
                        setBrowserVersionsToFalse("IE", "7", "11")
                    }
                }else{
                    setBrowserVersionsToFalse("IE", "6", "11");
                }
            }else{
                setBrowserVersionsToFalse("IE", "5", "11");
            }
        }else{
            setBrowserVersionsToFalse("IE", "4", "11");
        }
        if(browsers.IE["9"] === false && browsers.IE["10"] === false && browsers.IE["11"] === false){
            JSengine = "COM Classic";
        }
        /*TODO: os
        *  window.msorientation !Windows 7 IE11
        * Rebeccapurple CSS color Windows 10 IE11
        * ms-scroll-chaining Windows 8+ IE10+
        *
         */
    }

    function gecko(){
        var isESR = "";
        os = ["Windows", "Android", "Linux", "macOS"];
        browsers["IE"] = undefined;
        browsers.Edge = undefined;
        browsers.Chrome = undefined;
        browsers.Opera = undefined;
        browsers["Chrome Android"] = undefined;
        browsers.Safari = undefined;
        browsers["Safari iOS"] = undefined;
        if("onauxclick" in window){
            setBrowserVersionsToFalse("Firefox", "1", "52");
            setBrowserVersionsToFalse("Firefox Android", "1", "52");
            if("CSSLayerBlockRule" in window){
                setBrowserVersionsToFalse("Firefox", "52", "96");
                setBrowserVersionsToFalse("Firefox Android", "52", "96");
                if("HTMLDialogElement" in window){
                    setBrowserVersionsToFalse("Firefox", "96", "97");
                    setBrowserVersionsToFalse("Firefox Android", "96", "97");
                    if("pdfViewerEnabled" in navigator || "setConfiguration" in RTCPeerConnection){
                        console.log("Hadfi")
                        setBrowserVersionsToFalse("Firefox", "97", "98");
                        setBrowserVersionsToFalse("Firefox Android", "97", "98");
                        if("FeaturePolicyViolationReportBody" in window || "Tag" in WebAssembly){
                            console.log("Hai")
                            setBrowserVersionsToFalse("Firefox", "90", "99");
                            setBrowserVersionsToFalse("Firefox Android", "90", "99");
                        }else{
                            console.log("Htfgi")
                            setBrowserVersionsToFalse("Firefox", "100", "100");
                            setBrowserVersionsToFalse("Firefox Android", "100", "100");
                        }
                    }else{
                        setBrowserVersionsToFalse("Firefox", "99", "100");
                        setBrowserVersionsToFalse("Firefox Android", "99", "100");
                    }
                }else{
                    setBrowserVersionsToFalse("Firefox", "98", "100");
                    setBrowserVersionsToFalse("Firefox Android", "98", "100");
                }
            }else{
                setBrowserVersionsToFalse("Firefox", "97", "100");
                setBrowserVersionsToFalse("Firefox Android", "97", "100");
                console.log("no Layer");
                if("destination" in Request.prototype){
                    setBrowserVersionsToFalse("Firefox", "50", "60");
                    if("MathMLElement" in window){
                        setBrowserVersionsToFalse("Firefox", "50", "70");
                        if(CSS.supports("overflow", "clip") || CSS.supports("(overflow:clip)")){
                            setBrowserVersionsToFalse("Firefox", "50", "80");
                            if("at" in Array.prototype){
                                console.log("Array.at()")
                                setBrowserVersionsToFalse("Firefox", "50", "89");
                                setBrowserVersionsToFalse("Firefox Android", "50", "89");
                                if("tabSize" in document.documentElement.style){
                                    console.log("tab-size")
                                    setBrowserVersionsToFalse("Firefox", "50", "90");
                                    setBrowserVersionsToFalse("Firefox Android", "50", "90");
                                    if("onselectionchange" in HTMLInputElement.prototype || "onselectionchange" in window){
                                        setBrowserVersionsToFalse("Firefox", "50", "91");
                                        setBrowserVersionsToFalse("Firefox Android", "50", "91");
                                        if("onslotchange" in window){
                                            setBrowserVersionsToFalse("Firefox", "50", "92");
                                            setBrowserVersionsToFalse("Firefox Android", "50", "92");
                                            if("structuredClone" in window){
                                                setBrowserVersionsToFalse("Firefox", "50", "93");
                                                setBrowserVersionsToFalse("Firefox Android", "50", "93");
                                                if("randomUUID" in crypto || ("inputMode" in HTMLInputElement.prototype && CSS.supports("(cursor:pointer)"))){
                                                    setBrowserVersionsToFalse("Firefox", "50", "94");
                                                    setBrowserVersionsToFalse("Firefox Android", "50", "94");
                                                    if("toBlob" in HTMLCanvasElement.prototype){
                                                        setBrowserVersionsToFalse("Firefox", "50", "95");
                                                        setBrowserVersionsToFalse("Firefox Android", "50", "95");
                                                    }else{
                                                        setBrowserVersionsToFalse("Firefox", "96", "100");
                                                        setBrowserVersionsToFalse("Firefox Android", "96", "100");
                                                    }
                                                }else{
                                                    setBrowserVersionsToFalse("Firefox", "95", "100");
                                                    setBrowserVersionsToFalse("Firefox Android", "95", "100");
                                                }
                                            }else{
                                                setBrowserVersionsToFalse("Firefox", "94", "100");
                                                setBrowserVersionsToFalse("Firefox Android", "94", "100");
                                            }
                                        }else{
                                            setBrowserVersionsToFalse("Firefox", "93", "100");
                                            setBrowserVersionsToFalse("Firefox Android", "93", "100");
                                        }
                                    }else{
                                        setBrowserVersionsToFalse("Firefox", "92", "100");
                                        setBrowserVersionsToFalse("Firefox Android", "92", "100");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("Firefox", "91", "100");
                                    setBrowserVersionsToFalse("Firefox Android", "91", "100");
                                }
                            }else{
                                if(("MediaSession" in window && "webkitdirectory" in document.createElement("input") && "offset" in document.body.style) ||
                                    ("MediaSession" in window && (!"webkitdirectory" in document.createElement("input")))){
                                    setBrowserVersionsToFalse("Firefox", "50", "81");
                                    if(Object.prototype.toString.call(Intl) === "[object Intl]"){
                                        setBrowserVersionsToFalse("Firefox", "50", "82");
                                        if("PerformancePaintTiming" in window){
                                            setBrowserVersionsToFalse("Firefox", "50", "83");
                                            if(!("HTMLMenuItemElement" in window) || CSS.supports("(touch-action:pinch-zoom)")){
                                                setBrowserVersionsToFalse("Firefox", "50", "84");
                                                if("DisplayNames" in Intl){
                                                    setBrowserVersionsToFalse("Firefox", "50", "85");
                                                    if("onbeforeinput" in window){
                                                        setBrowserVersionsToFalse("Firefox", "50", "86");
                                                        if("abort" in AbortSignal){
                                                            setBrowserVersionsToFalse("Firefox", "50", "87");
                                                            if("PerformanceEventTiming" in window){
                                                                setBrowserVersionsToFalse("Firefox", "50", "88");
                                                            }else{
                                                                setBrowserVersionsToFalse("Firefox", "89", "100");
                                                            }
                                                        }else{
                                                            setBrowserVersionsToFalse("Firefox", "88", "100");
                                                        }
                                                    }else{
                                                        setBrowserVersionsToFalse("Firefox", "87", "100");
                                                    }
                                                }else{
                                                    setBrowserVersionsToFalse("Firefox", "86", "100");
                                                }
                                            }else{
                                                setBrowserVersionsToFalse("Firefox", "85", "100");
                                            }
                                        }else{
                                            setBrowserVersionsToFalse("Firefox", "84", "100");
                                        }
                                    }else{
                                        setBrowserVersionsToFalse("Firefox", "83", "100");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("Firefox", "82", "100");
                                }
                            }
                        }else{
                            if(coalesceSupport()){
                                setBrowserVersionsToFalse("Firefox", "50", "71");
                                if("overscrollBehaviorBlock" in document.body.style){
                                    setBrowserVersionsToFalse("Firefox", "50", "72");
                                    if("commit" in IDBTransaction.prototype){
                                        setBrowserVersionsToFalse("Firefox", "50", "73");
                                        if(CSS.supports("width", "min(50%,500px)") || CSS.supports("(width:min(50%,500px))")){
                                            setBrowserVersionsToFalse("Firefox", "50", "74");
                                            if("replaceAll" in String.prototype){
                                                setBrowserVersionsToFalse("Firefox", "50", "76");
                                                if("dotAll" in RegExp.prototype){
                                                    setBrowserVersionsToFalse("Firefox", "50", "77");
                                                    if("WeakRef" in window){
                                                        setBrowserVersionsToFalse("Firefox", "50", "78");
                                                        if("appearance" in document.body.style){
                                                            setBrowserVersionsToFalse("Firefox", "50", "79");
                                                        }else{
                                                            setBrowserVersionsToFalse("Firefox", "80", "100");
                                                        }
                                                    }else{
                                                        setBrowserVersionsToFalse("Firefox", "79", "100");
                                                    }
                                                }else{
                                                    setBrowserVersionsToFalse("Firefox", "78", "100");
                                                }
                                            }else{
                                                setBrowserVersionsToFalse("Firefox", "77", "100");
                                            }
                                        }else{
                                            setBrowserVersionsToFalse("Firefox", "75", "100");
                                        }
                                    }else{
                                        setBrowserVersionsToFalse("Firefox", "74", "100");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("Firefox", "73", "100");
                                }
                            }else{
                                setBrowserVersionsToFalse("Firefox", "72", "100");
                            }
                        }
                    }else{
                        if("flat" in Array.prototype){
                            setBrowserVersionsToFalse("Firefox", "50", "61");
                            if("gap" in document.body.style){
                                setBrowserVersionsToFalse("Firefox", "50", "62");
                                if("fullscreen" in document){
                                    setBrowserVersionsToFalse("Firefox", "50", "63");
                                    if("RelativeTimeFormat" in Intl){
                                        setBrowserVersionsToFalse("Firefox", "50", "64");
                                        if("inputType" in InputEvent.prototype){
                                            setBrowserVersionsToFalse("Firefox", "50", "65");
                                            if("matchAll" in String.prototype){//problem solved
                                                setBrowserVersionsToFalse("Firefox", "50", "66");
                                                if("BigInt64Array" in window){
                                                    setBrowserVersionsToFalse("Firefox", "50", "67");
                                                    if("onunhandledrejection" in window){
                                                        setBrowserVersionsToFalse("Firefox", "50", "68");
                                                        if("restartIce" in RTCPeerConnection){
                                                            setBrowserVersionsToFalse("Firefox", "50", "69");
                                                        }else{
                                                            setBrowserVersionsToFalse("Firefox", "70", "100");
                                                        }
                                                    }else{
                                                        setBrowserVersionsToFalse("Firefox", "69", "100");
                                                    }
                                                }else{
                                                    setBrowserVersionsToFalse("Firefox", "68", "100");
                                                }
                                            }else{
                                                setBrowserVersionsToFalse("Firefox", "67", "100");
                                            }
                                        }else{
                                            setBrowserVersionsToFalse("Firefox", "66", "100");
                                        }
                                    }else{
                                        setBrowserVersionsToFalse("Firefox", "65", "100");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("Firefox", "64", "100");
                                }
                            }else{
                                setBrowserVersionsToFalse("Firefox", "63", "100");
                            }
                        }else{
                            setBrowserVersionsToFalse("Firefox", "62", "100");
                        }
                    }
                    /*
                    if("tabSize" in document.documentElement.style){
                        setBrowserVersionsToFalse("Firefox","50","90");
                        setBrowserVersionsToFalse("Firefox Android","50","90");
                    }else{
                        setBrowserVersionsToFalse("Firefox","96","100");
                        setBrowserVersionsToFalse("Firefox Android","96","100");
                    }
                     */
                }else{
                    if("toJSON" in URL.prototype){
                        setBrowserVersionsToFalse("Firefox", "50", "53");
                        if("requestIdleCallback" in window && "textJustify" in document.documentElement.style){
                            setBrowserVersionsToFalse("Firefox", "50", "54");
                            if("secureConnectionStart" in PerformanceTiming.prototype){
                                setBrowserVersionsToFalse("Firefox", "50", "55");
                                if("PerformanceObserver" in window){
                                    setBrowserVersionsToFalse("Firefox", "50", "56");
                                    if("PluralRules" in Intl){
                                        setBrowserVersionsToFalse("Firefox", "50", "57");
                                        if("autocomplete" in HTMLTextAreaElement.prototype){//Not Opera and not Edge!!!
                                            setBrowserVersionsToFalse("Firefox", "50", "58");
                                            if("values" in Array.prototype){
                                                setBrowserVersionsToFalse("Firefox", "50", "59");
                                            }else{
                                                setBrowserVersionsToFalse("Firefox", "60", "100");
                                            }
                                        }else{
                                            setBrowserVersionsToFalse("Firefox", "59", "100");
                                        }
                                    }else{
                                        setBrowserVersionsToFalse("Firefox", "58", "100");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("Firefox", "57", "100");
                                }
                            }else{
                                setBrowserVersionsToFalse("Firefox", "56", "100");
                            }
                        }else{
                            setBrowserVersionsToFalse("Firefox", "55", "100");
                        }
                    }else{
                        setBrowserVersionsToFalse("Firefox", "54", "100");
                    }
                }
            }
        }else{
            setBrowserVersionsToFalse("Firefox", "53", "100");
            setBrowserVersionsToFalse("Firefox Android", "53", "100");
            if("MessageChannel" in window && "textOrientation" in document.documentElement.style){
                setBrowserVersionsToFalse("Firefox", "1", "40");
                if("MediaSource" in window){
                    setBrowserVersionsToFalse("Firefox", "1", "41");
                    if("includes" in Array.prototype){
                        setBrowserVersionsToFalse("Firefox", "1", "42");
                        if(CSS.supports("text-orientation", "sideways") || CSS.supports("(text-orientation:sideways)")){
                            setBrowserVersionsToFalse("Firefox", "1", "43");
                            if("innerText" in HTMLElement){
                                setBrowserVersionsToFalse("Firefox", "1", "44");
                                if("Permissions" in window){
                                    setBrowserVersionsToFalse("Firefox", "1", "45");
                                    if("entries" in Object.prototype){
                                        setBrowserVersionsToFalse("Firefox", "1", "46");
                                        if("padStart" in String.prototype){
                                            setBrowserVersionsToFalse("Firefox", "1", "47");
                                            if("before" in Element){
                                                setBrowserVersionsToFalse("Firefox", "1", "48");
                                                if("hasInstance" in Symbol){
                                                    setBrowserVersionsToFalse("Firefox", "1", "49");
                                                    if("toStringTag" in Symbol){
                                                        setBrowserVersionsToFalse("Firefox", "50");
                                                        if("composed" in Event.prototype){
                                                            setBrowserVersionsToFalse("Firefox", "1", "51");
                                                        }else{
                                                            setBrowserVersionsToFalse("Firefox", "52", "55");
                                                        }
                                                    }else{
                                                        setBrowserVersionsToFalse("Firefox", "51", "55");
                                                    }
                                                }else{
                                                    setBrowserVersionsToFalse("Firefox", "50", "55");
                                                }
                                            }else{
                                                setBrowserVersionsToFalse("Firefox", "49", "55");
                                            }
                                        }else{
                                            setBrowserVersionsToFalse("Firefox", "48", "55");
                                        }
                                    }else{
                                        setBrowserVersionsToFalse("Firefox", "47", "55");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("Firefox", "46", "55");
                                }
                            }else{
                                setBrowserVersionsToFalse("Firefox", "45", "55");
                            }
                        }else{
                            setBrowserVersionsToFalse("Firefox", "44", "55");
                        }
                    }else{
                        setBrowserVersionsToFalse("Firefox", "43", "55");
                    }
                }else{
                    setBrowserVersionsToFalse("Firefox", "42", "55");
                }
            }else{
                if("sendBeacon" in navigator){
                    setBrowserVersionsToFalse("Firefox", "1", "30");
                    if("boxDecorationBreak" in document.documentElement.style){
                        setBrowserVersionsToFalse("Firefox", "1", "31");
                        if("RadioNodeList" in window){
                            setBrowserVersionsToFalse("Firefox", "1", "32");
                            if("subtle" in crypto){
                                setBrowserVersionsToFalse("Firefox", "1", "33");
                                if("closest" in Element.prototype){
                                    setBrowserVersionsToFalse("Firefox", "1", "34");
                                    if("scrollBehavior" in document.documentElement.style){
                                        setBrowserVersionsToFalse("Firefox", "1", "35");
                                        if(CSS.supports("display", "contents") || CSS.supports("(display:contents)")){
                                            setBrowserVersionsToFalse("Firefox", "1", "36");
                                            if("srcset" in HTMLImageElement.prototype){
                                                setBrowserVersionsToFalse("Firefox", "1", "37");
                                                if("scrollSnapType" in document.documentElement.style){
                                                    //TODO: Test in v43
                                                    setBrowserVersionsToFalse("Firefox", "1", "38");
                                                    if("includes" in String.prototype){
                                                        setBrowserVersionsToFalse("Firefox", "1", "39");
                                                    }else{
                                                        setBrowserVersionsToFalse("Firefox", "40", "55");
                                                    }
                                                }else{
                                                    setBrowserVersionsToFalse("Firefox", "39", "55");
                                                }
                                            }else{
                                                setBrowserVersionsToFalse("Firefox", "38", "55");
                                            }
                                        }else{
                                            setBrowserVersionsToFalse("Firefox", "37", "55");
                                        }
                                    }else{
                                        setBrowserVersionsToFalse("Firefox", "36", "55");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("Firefox", "35", "55");
                                }
                            }else{
                                setBrowserVersionsToFalse("Firefox", "34", "55");
                            }
                        }else{
                            setBrowserVersionsToFalse("Firefox", "33", "55");
                        }
                    }else{
                        setBrowserVersionsToFalse("Firefox", "32", "55");
                    }
                }else{
                    setBrowserVersionsToFalse("Firefox", "22", "55");
                    if("Notification" in window){
                        setBrowserVersionsToFalse("Firefox", "1", "21");
                        if("remove" in Element){
                            setBrowserVersionsToFalse("Firefox", "1", "22");
                            //TODO: Test in v43
                            if(CSS.supports("cursor", "zoom-in") || CSS.supports("(cursor:zoom-in)")){
                                setBrowserVersionsToFalse("Firefox", "1", "23");
                                if("find" in Array.prototype){
                                    setBrowserVersionsToFalse("Firefox", "1", "24");
                                    if("URL" in window){
                                        setBrowserVersionsToFalse("Firefox", "1", "25");
                                        if("all" in document.documentElement.style){
                                            setBrowserVersionsToFalse("Firefox", "1", "26");
                                            if("flexWrap" in document.documentElement.style){
                                                setBrowserVersionsToFalse("Firefox", "1", "27");
                                                if("boxSizing" in document.documentElement.style){
                                                    setBrowserVersionsToFalse("Firefox", "1", "28");
                                                    if("relList" in HTMLAnchorElement.prototype){
                                                        setBrowserVersionsToFalse("Firefox", "1", "29");
                                                    }else{
                                                        setBrowserVersionsToFalse("Firefox", "30", "55");
                                                    }
                                                }else{
                                                    setBrowserVersionsToFalse("FIrefox", "29", "55");
                                                }
                                            }else{
                                                setBrowserVersionsToFalse("Firefox", "28", "55");
                                            }
                                        }else{
                                            setBrowserVersionsToFalse("Firefox", "27", "55");
                                        }
                                    }else{
                                        setBrowserVersionsToFalse("Firefox", "26", "55");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("Firefox", "25", "55");
                                }
                            }else{
                                setBrowserVersionsToFalse("Firefox", "24", "55");
                            }
                        }else{
                            setBrowserVersionsToFalse("Firefox", "23", "55");
                        }
                    }else{
                        setBrowserVersionsToFalse("Firefox", "22", "55");
                        if("mozTextAlignLast" in document.documentElement.style){
                            setBrowserVersionsToFalse("Firefox", "1", "11");
                            if("Blob" in window){
                                setBrowserVersionsToFalse("Firefox", "1", "12");
                                if("MutationObserver" in window){
                                    setBrowserVersionsToFalse("Firefox", "1", "13");
                                    if("wordBreak" in document.documentElement.style){
                                        setBrowserVersionsToFalse("Firefox", "1", "14");
                                        if("HTMLMeterElement" in window){
                                            setBrowserVersionsToFalse("Firefox", "1", "15");
                                            if("sandbox" in HTMLIFrameElement.prototype){
                                                setBrowserVersionsToFalse("Firefox", "1", "16");
                                                if("devicePixelRatio" in window){
                                                    setBrowserVersionsToFalse("Firefox", "1", "17");
                                                    document.documentElement.style.width = "50vw";
                                                    if(parseInt(getComputedStyle(document.documentElement, null).width, 10) == parseInt(window.innerWidth / 2, 10)){
                                                        setBrowserVersionsToFalse("Firefox", "1", "18");
                                                        if("download" in HTMLAnchorElement.prototype){
                                                            setBrowserVersionsToFalse("Firefox", "1", "19");
                                                        }else{
                                                            setBrowserVersionsToFalse("Firefox", "20", "55");
                                                        }
                                                    }else{
                                                        setBrowserVersionsToFalse("Firefox", "19", "55");
                                                    }
                                                    document.documentElement.style.width = undefined;
                                                }else{
                                                    setBrowserVersionsToFalse("Firefox", "18", "55");
                                                }
                                            }else{
                                                setBrowserVersionsToFalse("Firefox", "17", "55");
                                            }
                                        }else{
                                            setBrowserVersionsToFalse("Firefox", "16", "55");
                                        }
                                    }else{
                                        setBrowserVersionsToFalse("Firefox", "15", "55");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("Firefox", "14", "55");
                                }
                            }else{
                                setBrowserVersionsToFalse("Firefox", "13", "55");
                            }
                        }else{
                            setBrowserVersionsToFalse("Firefox", "12", "55");
                            if("getElementsByClassName" in document){
                                setBrowserVersionsToFalse("Firefox", "1", "2");
                                if("JSON" in window){
                                    setBrowserVersionsToFalse("Firefox", "1", "3");
                                    if("head" in document){
                                        setBrowserVersionsToFalse("Firefox", "1", "4");
                                        if("matchMedia" in window){
                                            setBrowserVersionsToFalse("Firefox", "1", "5");
                                            if("textOverflow" in document.documentElement.style){
                                                setBrowserVersionsToFalse("Firefox", "1", "6");
                                                if("insertAdjacentHTML" in Element.prototype){
                                                    setBrowserVersionsToFalse("Firefox", "1", "7");
                                                    if("execCommand" in document){
                                                        setBrowserVersionsToFalse("Firefox", "1", "8");
                                                        if("time" in console){
                                                            setBrowserVersionsToFalse("Firefox", "1", "9");
                                                            if("mozVibrate" in navigator){
                                                                setBrowserVersionsToFalse("Firefox", "1", "10");
                                                            }else{
                                                                setBrowserVersionsToFalse("Firefox", "11", "20");
                                                            }
                                                        }else{
                                                            setBrowserVersionsToFalse("Firefox", "10", "20");
                                                        }
                                                    }else{
                                                        setBrowserVersionsToFalse("Firefox", "9", "20");
                                                    }
                                                }else{
                                                    setBrowserVersionsToFalse("Firefox", "8", "20");
                                                }
                                            }else{
                                                setBrowserVersionsToFalse("Firefox", "7", "20");
                                            }
                                        }else{
                                            setBrowserVersionsToFalse("Firefox", "6", "20");
                                        }
                                    }else{
                                        setBrowserVersionsToFalse("Firefox", "5", "20");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("Firefox", "4", "20");
                                }
                            }else{
                                setBrowserVersionsToFalse("Firefox", "3", "20");
                            }
                        }
                    }
                }
            }
            /*if("findIndex" in Array.prototype){
                setBrowserVersionsToFalse("Firefox", "1", "24");
                setBrowserVersionsToFalse("Firefox Android", "1", "3");
            }
            if("matchMedia" in window){
                setBrowserVersionsToFalse("Firefox", "1", "5");
                setBrowserVersionsToFalse("Firefox Android", "1", "5");
            }*/
        }
        //TODO: justify for older versions (window.innerHeight, window.outerHeight, window.screenLeft)
        if("webkitdirectory" in document.createElement("input") || "showModalDialog" in window || "ondragover" in window || "offset" in document.documentElement.style){
            browsers["Firefox Android"] = undefined;
            os = ["Windows", "Linux", "macOS"];
        }else{
            browsers.Firefox = undefined;
            os = ["Android"];
        }
        //not anonymized by Abelssoft
        var oB = ["AOLShield/", "Avant TriCore", "Camino/", "Chimera/", "CometBird/", "Conkeror/", "Cunaguaro/",
            "Cyberfox/", "Epiphany/", "Fennec/", "Firebird/", "Flock/", "Galeon/", "K-Meleon/", "Kazehakase/", "Light/",
            "Lunascape/", "Maemo Browser ", "Navigator/", "Netscape/", "Openwave/", "S40OviBrowser/", "Orca/",
            "PaleMoon/", "Phoenix/", "Prism/", "QwantBrowser/", "SeaMonkey/", "TenFourFox/", "Thunderbird/", "Waterfox/", ""
        ];
        //Tor Browser
        var isT = false;
        var cT = new Date();
        var tZ = cT.getTimezoneOffset();
        var esrV = {
            "10":"10.0", "11":"10.0.1", "12":"10.0.2", "13":"10.0.3", "14":"10.0.4", "15":"10.0.5",
            "16":"10.0.6", "17":"17.0", "18":"17.0.1", "19":"17.0.2", "20":"17.0.3", "21":"17.0.4",
            "22":"17.0.5", "23":"17.0.6", "24":"24.0", "25":"24.1.0", "26":"24.2.0", "27":"24.3.0",
            "28":"24.4.0", "29":"24.5.0", "30":"24.6.0", "31":"31.0", "32":"31.1.0", "33":"31.2.0",
            "34":"31.3.0", "35":"31.4.0", "36":"31.5.0", "37":"31.6.0", "38":"38.0", "39":"38.1.0",
            "40":"38.2.0", "41":"38.3.0", "42":"38.4.0", "43":"38.5.0", "44":"38.6.0", "45":"45.0",
            "46":"45.1.0", "47":"45.2.0", "48":"45.3.0", "49":"45.4.0", "50":"45.5.0", "51":"45.6.0",
            "52":"52.0", "53":"52.1.0", "54":"52.2.0", "55":"52.3.0", "56":"52.4.0", "57":"52.5.0",
            "58":"52.6.0", "59":"52.7.0", "60":"60.0", "61":"60.1.0", "62":"60.2.0", "63":"60.3.0",
            "64":"60.4.0", "65":"60.5.0", "66":"60.6.0", "67":"60.7.0", "68":"68.0", "69":"68.1.0",
            "70":"68.2.0", "71":"68.3.0", "72":"68.4.0", "73":"68.5.0", "74":"68.6.0", "75":"68.7.0",
            "76":"68.8.0", "77":"68.9.0", "78":"78.0", "79":"78.1.0", "80":"78.2.0", "81":"78.3.0",
            "82":"78.4.0", "83":"78.5.0", "84":"78.6.0", "85":"78.7.0", "86":"78.8.0", "87":"78.9.0",
            "88":"78.10.0", "89":"78.11.0", "90":"78.12.0", "91":"91.0", "92":"91.1.0", "93":"91.2.0",
            "94":"91.3.0", "95":"91.4.0", "96":"91.5.0", "97":"91.6.0", "98":"91.7.0", "99":"91.8.0",
            "100":"91.9.0", "101":"91.10.0", "102":"102.0"
        }
        var nV = [];
        //isT = true;
        if(os.indexOf("Android") > -1){
            if(tZ === 0 && navigator.platform === "Linux aarch64" && navigator.appVersion === "5.0 (Android 10)" && (navigator.userAgent === "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" || navigator.userAgent === "Mozilla/5.0 (Android 10; Mobile; rv:91.0) Gecko/91.0 Firefox/91.0")){
                //alert("Is Tor Browser Android");
                isT = true;
            }
            for(var y in browsers["Firefox Android"]){
                if(browsers["Firefox Android"][y] === true){
                    if(isT){
                        for(var z in esrV){
                            if(esrV.hasOwnProperty(z)){
                                if(y === z){
                                    nV[nV.length] = esrV[z] + "esr";
                                }
                            }
                        }
                    }else{
                        nV[nV.length] = y;
                    }
                }
            }
            browsers["Firefox Android"] = nV;
            if(isT){
                browsers["Tor Android"] = browsers["Firefox Android"];
                browsers["Firefox Android"] = undefined;
            }
        }else{
            if(navigator.plugins.length === 0 && tZ === 0){
                //alert("Is Tor Browser");
                isT = true;
            }
            for(var y in browsers.Firefox){
                if(browsers.Firefox[y] === true){
                    if(isT){
                        for(var z in esrV){
                            if(esrV.hasOwnProperty(z)){
                                if(y === z){
                                    console.log("Ja", y, z, esrV[z]);
                                    nV[nV.length] = esrV[z] + "esr";
                                }
                            }
                        }
                    }else{
                        console.log(y);
                        nV[nV.length] = y;
                    }
                }
            }
            browsers.Firefox = nV;
            if(isT){
                browsers.Tor = browsers.Firefox;
                browsers.Firefox = undefined;
            }
        }
    }

    function webkitSafari(){
        var nV = [];
        browsers.IE = undefined;
        browsers.Edge = undefined;
        browsers.Chrome = undefined;
        browsers.Firefox = undefined;
        browsers.Opera = undefined;
        browsers["Chrome Android"] = undefined;
        browsers["Firefox Android"] = undefined;
        if("Touch" in window){
            os = ["iOS", "iPadOS"];
            var oB = [
                {
                    "regexp":/(BingWeb|bingipadclient|BingSapphire)/gi,
                    "name":"Bing Search iOS",
                    "type":"Browser"
                },
                {
                    //iPhone, iPod only fake!!
                    "regexp":/(PiBrowser\/)/gi,
                    "name":"PiBrowser iOS",
                    "type":"Browser",
                },
                /*{
                    "regexp":/(Zalo iOS\/)/gi,
                    "name":"Zalo",
                    "type":"App"
                },*/
                {
                    "regexp":/(NAVER\(|Whale\/)/gi,
                    "name":"Naver Whale",
                    "type":"Browser"
                },
                {
                    "regexp":/(com\.google\.GoogleMobile\/|GSA\/)/gi,
                    "name":"Google Search iOS",
                    "type":"Browser"
                },
                {
                    "regexp":/(Brave\/)/gi,
                    "name":"Brave iOS",
                    "type":"Browser"
                },
                {
                    "regexp":/(Cordova\/iOS|etoro-cordova-app)/gi,
                    "name":"Cordova",
                    "type":"App"
                },
                {
                    "regexp":/(DuckDuckGo\/)/gi,
                    "name":"DuckDuckGo iOS",
                    "type":"Browser"
                },
                {
                    "regexp":/( Instagram )/gi,
                    "name":"Instagram",
                    "type":"App"
                },
                {
                    "regexp":/(AlohaBrowser\/)/gi,
                    "name":"Aloha Browser",
                    "type":"Browser"
                },
                {
                    "regexp":/(Twitter for)/gi,
                    "name":"Twitter",
                    "type":"App"
                },
                {
                    "regexp":/(AvastSecureBrowser\/)/gi,
                    "name":"Avast Secure Browser",
                    "type":"Browser"
                },
                {
                    "regexp":/(OPiOS\/|OPT\/|OPX\/|Safari\/[0-9.]{2,10} Safari\/)/gi,
                    "name":"Opera iOS",
                    "type":"Browser"
                },
                {
                    "regexp":/(EdgiOS\/|Edge\/)/gi,
                    "name":"Edge iOS",
                    "type":"Browser"
                },
                {
                    "regexp":/(FxiOS\/|Firefox\/)/gi,
                    "name":"Firefox iOS",
                    "type":"Browser"
                },
                {
                    "regexp":/(CriOS\/|Chrome\/)/gi,
                    "name":"Chrome iOS",
                    "type":"Browser"
                },
                /*{
                    "regexp":/^((?!CriOS\/|Version\/|Chrome\/).)*((?!CriOS\/|Version\/|Chrome\/).)*((?!CriOS\/|Version\/|Chrome\/).)*$/gi,
                    "name":"Firefox iOS",
                    "type":"Browser"
                },*/
                {
                    "regexp":/^((?!Mobile\/|Version\/|Safari\/).)*((?!Mobile\/|Version\/|Safari\/).)*((?!Mobile\/|Version\/|Safari\/).)*$/gi,
                    "name":"Maxthon iOS",
                    "type":"Browser"
                }
            ]
            //PiBrowser, iTunes, NAVER, BingWeb, GSA, bingipadclient, AppleNews, baiduboxapp, UCBrowserHD, Whale, Airwatch Browser, Snapchat, CriOS, EdgiOS, YJApp-IOS, BingSapphire, FBAN/MessengerForiOS , FBAN/FBIOS, FxiOS, AppleCoreMedia, AliAppIpod, Instagram, OPX, OPT, OPiOS, YaBrowser, YaApp_iOS_Browser, YaApp_iOS, GoogleMobile, WKWebView
            // iOS Mobile Safari
            browsers.Safari = undefined;
            if("finally" in Promise.prototype){
                setBrowserVersionsToFalse("Safari iOS", "3.2", "11.0-11.2");
                if("flat" in Array.prototype){
                    setBrowserVersionsToFalse("Safari iOS", "3.2", "11.3-11.4");
                    if("IntersectionObserver" in window){
                        setBrowserVersionsToFalse("Safari iOS", "3.2", "12.0-12.1");
                        if("PointerEvent" in window){
                            setBrowserVersionsToFalse("Safari iOS", "3.2", "12.2-12.5");
                            if("ResizeObserver" in window){
                                setBrowserVersionsToFalse("Safari iOS", "3.2", "13.3");
                                if("BigInt" in window){
                                    setBrowserVersionsToFalse("Safari iOS", "3.2", "13.4-13.7");
                                    if("gap" in document.documentElement.style){
                                        setBrowserVersionsToFalse("Safari iOS", "3.2", "14.0-14.4");
                                        if("WebGL2RenderingContext" in window){
                                            setBrowserVersionsToFalse("Safari iOS", "3.2", "14.5-14.8");
                                            if("contain" in document.documentElement.style){
                                                setBrowserVersionsToFalse("Safari iOS", "3.2", "15.2-15.3");
                                            }else{
                                                setBrowserVersionsToFalse("Safari iOS", "15.4", "15.4");
                                            }
                                        }else{
                                            setBrowserVersionsToFalse("Safari iOS", "15.0-15.1", "15.4");
                                        }
                                    }else{
                                        setBrowserVersionsToFalse("Safari iOS", "14.4-14.8", "15.4");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("Safari iOS", "14.0-14.4", "15.4");
                                }
                            }else{
                                setBrowserVersionsToFalse("Safari iOS", "13.4-13.7", "15.4");
                            }
                        }else{
                            setBrowserVersionsToFalse("Safari iOS", "13.3", "15.4");
                        }
                    }else{
                        setBrowserVersionsToFalse("Safari iOS", "12.2-12.5", "15.4");
                    }
                }else{
                    setBrowserVersionsToFalse("Safari iOS", "12.0-12.1", "15.4");
                }
            }else{
                //
            }/*
            if("contain" in document.documentElement.style){
                setBrowserVersionsToFalse("Safari iOS", "3.2", "15.2-15.3");
            }else{
                setBrowserVersionsToFalse("Safari iOS", "15.4", "15.4");
                if("WebGL2RenderingContext" in window){
                    setBrowserVersionsToFalse("Safari iOS", "3.2", "14.5-14.8");
                }else{
                    setBrowserVersionsToFalse("Safari iOS", "15.0-15.1", "15.4");
                    if("gap" in document.documentElement.style){
                        setBrowserVersionsToFalse("Safari iOS", "3.2", "14.0-14.4");
                    }else{
                        setBrowserVersionsToFalse("Safari iOS", "14.5-14.8", "15.4");
                    }
                }
            }*/
            var y;
            for(y in browsers["Safari iOS"]){
                if(browsers["Safari iOS"][y] === true){
                    nV[nV.length] = y;
                    var vA = [];
                    var rN = y.substr(0, y.indexOf("."));
                    if(/[\-]/g.test(y)){
                        //console.log("Hallo -")
                        //document.write(parseInt(y.substr(y.indexOf("-")-1,y.indexOf("-")),10).toString())
                        for(var a = parseInt(y.substr(y.indexOf("-") - 1, y.indexOf("-")), 10); a <= parseInt(y.substring(y.indexOf("-") + 1, y.length), 10); a++){
                            vA[vA.length] = rN + "_" + a;
                        }
                        //document.write(JSON.stringify(vA))
                    }else{
                        vA[vA.length] = rN + "_0";
                    }
                    //for(var b in)
                    //console.log(y);
                }
            }
            for(var b in vA){
                //document.writeln(navigator.userAgent + "   " +b)
                //var rP = new RegExp("("+b.replaceAll(".","_")+"[ _])","g");
                if(navigator.userAgent.includes(" " + b.replaceAll(".", "_")) && /ip(ad|od|hone)/gi.test(navigator.userAgent) && false){
                    //document.write("Jaa")
                    nV = [navigator.userAgent.substring(navigator.userAgent.indexOf(b.replace(".", "_")), navigator.userAgent.indexOf(" ", navigator.userAgent.indexOf(b.replace(".", "_")))).replaceAll("_", ".").replace(")", "")];
                }else if(navigator.userAgent.includes("Version/" + b.replaceAll("_", ".")) && !/Maci/gi.test(navigator.userAgent)){
                    nV = [navigator.userAgent.substring(navigator.userAgent.indexOf("Version/") + 8, navigator.userAgent.indexOf(" ", navigator.userAgent.indexOf("Version/") + 8))];
                }
            }
            if(/Maci/gi.test(navigator.userAgent)){
                isDesktopMode = true;
            }
            browsers["Safari iOS"] = nV;
            var oBF = false;
            if(!"webkitFullscreenElement" in document || true){
                for(var c in oB){
                    if(!oBF){
                        if(oB[c].regexp.test(navigator.userAgent)){
                            browsers[oB[c].name] = nV;
                            oBF = true;
                            browsers["Safari iOS"] = undefined;
                            //document.write("Hallo Anderer")
                        }
                    }
                }
            }else if(/(1[2-9])/gi.test(browsers["Safari iOS"][0]) && !/((Fx|Cr|Edg|OP)iOS|FxiOS|Firefox|Chrome|Opera|OP[XRT]|Bing|Google|Duck|Edge|Twitter|GSA|Safari.*Safari)/gi.test(navigator.userAgent) && /Safari/gi.test(navigator.userAgent)){
                if("webkitFullscreenElement" in document || "webkitFullscreenEnabled" in document){
                    os = ["iPadOS"];
                }else{
                    os = ["iOS"];
                }
            }
            if(!isDesktopMode){
                if(/iPad/gi.test(navigator.userAgent)){
                    os = ["iPadOS"];
                }else if(/iP(od|hone)/gi.test(navigator.userAgent)){
                    os = ["iOS"];
                }
            }
        }else{
            //browsers["Safari iOS"] = undefined;
            if("contain" in document.documentElement.style){
                setBrowserVersionsToFalse("Safari", "1", "15.2-15.3");
            }else{
                setBrowserVersionsToFalse("Safari", "15.4", "TP");
                if("FileSystemHandle" in window || "SharedArrayBuffer" in window){
                    setBrowserVersionsToFalse("Safari", "1", "15.1");
                }
            }
            os = ["Windows", "macOS"];
        }
    }

    function blinkB(){
        os = ["Windows", "ChromeOS", "Android", "Linux", "macOS"];
        //TODO: change to undefined
        //TODO: blink
        browsers.IE = undefined;
        setBrowserVersionsToFalse("Edge", "12", "44");
        browsers.Firefox = undefined
        setBrowserVersionsToFalse("Opera", "1", "12");
        browsers["Firefox Android"] = undefined;
        browsers.Safari = undefined;
        browsers["Safari iOS"] = undefined;
        browsers["Chrome iOS"] = undefined;
        //if()
        if(/*"webkitdirectory" in document.createElement("input") || */"serial" in navigator || "hid" in navigator || "showOpenFilePicker" in window || "webkitUserDrag" in document.documentElement.style){
            os = ["Windows", "Linux", "macOS"];
            browsers["Chrome Android"] = undefined;
            if("fontSmooth" in document.body.style || "webkitHyphens" in document.body.style){
                os = ["macOS"];
            }else{
                //os = ["Windows","ChromeOS"];<== ? should I do this
            }
        }else if("NDEFReader" in window || "webkitHyphens" in document.body.style || "type" in navigator.connection){
            os = ["Android"];
            browsers.Chrome = undefined;
        }
        // !permissions policy = opera
        // !WebUSB = !android browser && !opera mobile
        // !webNofication ^

        if("C" === navigator.language && "C" === navigator.languages[0]){
            //Is Falkon Browser ==> uses Qt
        }
    }

    function edgehtml(){
        browsers.IE = undefined;
        setBrowserVersionsToFalse("Edge", "79", "100");
        browsers.Chrome = undefined;
        browsers.Firefox = undefined;
        browsers.Opera = undefined;
        browsers["Chrome Android"] = undefined;
        browsers["Firefox Android"] = undefined;
        browsers.Safari = undefined;
        browsers["Safari iOS"] = undefined;
        browsers["Safari iOS"] = undefined;
        //TODO: edgehtml
    }

    function presto(){
        browsers.IE = undefined;
        browsers.Edge = undefined;
        browsers.Chrome = undefined;
        browsers.Firefox = undefined;
        setBrowserVersionsToFalse("Opera", "14", "85");
        browsers["Chrome Android"] = undefined;
        browsers["Firefox Android"] = undefined;
        browsers.Safari = undefined;
        browsers["Safari iOS"] = undefined;
        browsers["Safari iOS"] = undefined;
        //TODO: presto
        //getElementsByTagName 5.1
        if(window){
            setBrowserVersionsToFalse("Opera", "1", "2");
            if("scrollTo" in window){
                setBrowserVersionsToFalse("Opera", "1", "3");
                if("getElementsByName" in document){
                    setBrowserVersionsToFalse("Opera", "1", "4");
                    if("print" in window){
                        setBrowserVersionsToFalse("Opera", "1", "5");
                        if("event" in window){
                            setBrowserVersionsToFalse("Opera", "1", "6");
                            if("getSelection" in window){
                                setBrowserVersionsToFalse("Opera", "1", "8")
                                if("JSON" in window){
                                    setBrowserVersionsToFalse("Opera", "1", "10");
                                    if("devicePixelRatio" in window){
                                        setBrowserVersionsToFalse("Opera", "1", "11");
                                    }else{
                                        setBrowserVersionsToFalse("Opera", "12", "12");
                                    }
                                }else{
                                    setBrowserVersionsToFalse("Opera", "11", "12")
                                }
                            }else{
                                setBrowserVersionsToFalse("Opera", "9", "12");
                            }
                        }else{
                            setBrowserVersionsToFalse("Opera", "7", "12");
                        }
                    }else{
                        setBrowserVersionsToFalse("Opera", "6", "12");
                    }
                }else{
                    setBrowserVersionsToFalse("Opera", "5", "12");
                }
            }else{
                setBrowserVersionsToFalse("Opera", "4", "12");
            }
        }else{
            setBrowserVersionsToFalse("Opera", "3", "12");
        }
        if("OMiniFold" in document.documentElement.style){
            os = ["Android", "iOS", "iPadOS"];
            browsers["Opera Mini"] = browsers.Opera;
            browsers.Opera = undefined;
        }
    }

    /*
    * TODO: Deno
    *  "env" in deno 0.1.3
    *  "arch" in deno 0.1.5
    *  "args" in deno 0.1.6
    *  "truncate" in deno 0.1.7
    *  "Buffer" in deno 0.1.11
    *  "readAll" in deno 0.2.1
    *  "time" in console 0.2.4
    *  "isTTY" in deno 0.2.11
    *  "args" in Deno.build 0.3.4
    *  "openSync" in Deno 0.3.5
    *  "chown" in Deno 0.5.0
    *  "getRandomValues" in crypto 0.6.0
    *  "repeat" in bytes 0.7.0
    *  "homeDir" in Deno 0.11.0
    *  "onload" in window 0.12.0
    *  !"args" in Deno.build 0.14.0
    *  "trace" in console 0.16.0
    *  "queueMicrotask" in window 0.17.0
    *  !"platform" in Deno 0.18.0
    *  "dialTLS" in Deno 0.19.0
    *  "hostname" in Deno 0.20.0
    *  "listenTLS" in Deno 0.22.0
    *  "request" in permissions 0.24.0
    *  "realpath" in Deno 0.25.0
    *  "dir" in Deno 0.27.0
    *  "create" in Deno 0.29.0
    *  "makeTempFile" in Deno 0.34.0
    *  "fsEvents" in Deno 0.35.0
    *  "umask" in Deno 0.36.0
    *  !"__proto__" in Object.prototype 0.37.0
    *  "close" in window 0.38.0
    *  "AbortController" in window 0.41.0
    *  !"OpenMode" in Deno 0.42.0
    *  !"location" in window 1.0.0
    *  var isCeno=Deno.pid;Deno.pid="ISDeno.pidConst?"; Deno.pid === isCeno Deno.pid=Ceno 1.0.1
    *  "mainModule" in Deno 1.1.0
    *  !"dir" in Deno 1.1.2
    *  "isEncoding" in Buffer 1.1.3
    *  "ppid" in Deno 1.2.0
    *  typeof Blob.arrayBuffer === "Uint8Array" 1.3.1
    *  "futimeSync" in Deno 1.3.3
    *  "systemMemory" in Deno 1.4.0
    *  !"createObjectUrl" in URL 1.4.1
    *  "systemCpuInfo" in Deno 1.5.0
    *  "totalmem" in os 1.5.4
    *  "resolveDns" in Deno 1.7.0
    *  "hasIndices" in RegExp.prototype 1.8.0
    *  "sessionStorage" in window 1.10.0
    *  "at" in String.prototype 1.12.0
    *  "hasOwn" in Object.prototype 1.13.0
    *  "localStorage" in window 1.15.0
    *  "findLast" in Array.prototype 1.16.0
    *  "href" in window.location 1.19.3
    * */

    /*
    * TODO: NodeJS
    *  !!setInterval 0.0.1
    *  "kill" in process 0.0.6
    *  "cwd" in process 0.1.8
    *  "exit" in process 0.1.13
    *  "memoryUsage" in process 0.1.16
    *  "mainModule" in process 0.1.17
    *  "umask" in process 0.1.19
    *  "version" in process 0.1.3+
     */

    var osVersionM = "-";/*
    if("userAgentData" in navigator){
        navigator.userAgentData.getHighEntropyValues(["platform","platformVersion"]).then(
            function(v){
                osVersionM = JSON.stringify(v);
                console.log(v)
            }
        )
    }*/

    //              edge chrome
    // navigator.doNotTrack "1" null eher nein
    //visualViewport.segments null -
    // window.XRJointPose ex -
    // AVIF no support yes
    /*
    if("webkitPoint" in window){
        index = platforms.indexOf("Internet Explorer");
        if(index > -1){
            platforms.splice(index,1);
        }
        index = platforms.indexOf("Firefox");
        if(index > -1){
            platforms.splice(index,1);
        }
        index = platforms.indexOf("Firefox Android");
        if(index > -1){
            platforms.splice(index,1);
        }
    }
    //setBrowserVersionsToFalse("Firefox","99","102")

    if("serial" in navigator){
        setBrowserToFalse("Internet Explorer");
        setBrowserVersionsToFalse("Edge","12","88");
        setBrowserVersionsToFalse("Chrome","1","88");
        setBrowserToFalse("Firefox");
        setBrowserVersionsToFalse("Opera","1","75");
        setBrowserToFalse("Chrome Android");
        setBrowserToFalse("Firefox Android");
        setBrowserToFalse("Safari");
        setBrowserToFalse("Safari iOS");
        setBrowserToFalse("Chrome iOS");
    }
    start*
    if("cookie" in document){
        setBrowserToFalse("Internet Explorer");
        setBrowserVersionsToFalse("Edge","12","78");
        setBrowserVersionsToFalse("Chrome","1","63");
        //setBrowserToFalse("Firefox");
        setBrowserVersionsToFalse("Opera","1","50");
        setBrowserVersionsToFalse("Chrome Android","1","63");
        setBrowserToFalse("Firefox Android");
        setBrowserToFalse("Safari");
        setBrowserToFalse("Safari iOS");
        setBrowserToFalse("Chrome iOS");
    }
     *end
    if("NDEFReader" in window){
        setBrowserToFalse("Internet Explorer");
        setBrowserToFalse("Edge");
        setBrowserToFalse("Chrome");
        setBrowserToFalse("Firefox");
        setBrowserToFalse("Opera");
        setBrowserVersionsToFalse("Chrome Android","1","88");
        setBrowserToFalse("Firefox Android");
        setBrowserToFalse("Safari");
        setBrowserToFalse("Safari iOS");
        setBrowserToFalse("Chrome iOS");
    }
    if("findIndex" in Array.prototype){
        setBrowserToFalse("Internet Explorer");
        // Edge
        setBrowserVersionsToFalse("Chrome","1","44");
        setBrowserVersionsToFalse("Firefox","1","24");
        setBrowserVersionsToFalse("Opera","1","31");
        setBrowserVersionsToFalse("Chrome Android","1","44");
        setBrowserVersionsToFalse("Firefox Android","1","4");
        setBrowserVersionsToFalse("Safari","1","8");
        setBrowserVersionsToFalse("Safari iOS","3.2","7.0-7.1");
        setBrowserVersionsToFalse("Chrome iOS","1","8");
    }
    if("entries" in Object){
        setBrowserToFalse("Internet Explorer");
        setBrowserVersionsToFalse("Edge","12","13");
        setBrowserVersionsToFalse("Chrome","1","53");
        setBrowserVersionsToFalse("Firefox","1","46");
        setBrowserVersionsToFalse("Opera","1","40");
        setBrowserVersionsToFalse("Chrome Android","1","53");
        setBrowserVersionsToFalse("Firefox Android","1","46");
        setBrowserVersionsToFalse("Safari","1","9");
        setBrowserVersionsToFalse("Safari iOS","1","9");
        setBrowserVersionsToFalse("Chrome iOS","1","9");
    }
    if("onauxclick" in window){
        setBrowserToFalse("Internet Explorer");
        setBrowserVersionsToFalse("Edge","12","44");
        setBrowserVersionsToFalse("Chrome","1","54");
        setBrowserVersionsToFalse("Firefox","1","52");
        setBrowserVersionsToFalse("Opera","1","41");
        setBrowserVersionsToFalse("Chrome Android","1","54");
        setBrowserVersionsToFalse("Firefox Android","1","52");
        setBrowserToFalse("Safari");
        setBrowserToFalse("Safari iOS");
        setBrowserToFalse("Chrome iOS");
    }
    if("msDoNotTrack" in navigator){
        setBrowserVersionsToFalse("Internet Explorer","5","8");
        browsers["Internet Explorer"]["11"] = false;
        setBrowserToFalse("Edge");
        setBrowserToFalse("Chrome");
        setBrowserToFalse("Firefox");
        setBrowserToFalse("Opera");
        setBrowserToFalse("Chrome Android");
        setBrowserToFalse("Firefox Android");
        setBrowserToFalse("Safari");
        setBrowserToFalse("Safari iOS");
        setBrowserToFalse("Chrome iOS");
    }
    if("CSSLayerBlockRule" in window){
        setBrowserToFalse("Internet Explorer");
        setBrowserToFalse("Edge");
        setBrowserVersionsToFalse("Chrome","1","98");
        setBrowserVersionsToFalse("Firefox","1","96");
        setBrowserToFalse("Opera");
        setBrowserVersionsToFalse("Chrome Android","1","98");
        setBrowserVersionsToFalse("Firefox Android","1","96");
        setBrowserVersionsToFalse("Safari","1","14");
        setBrowserVersionsToFalse("Safari iOS","1","14");
        setBrowserVersionsToFalse("Chrome iOS","1","14");
    }
    if("mozPaintCount" in window){
        setBrowserToFalse("Internet Explorer");
        setBrowserToFalse("Edge");
        setBrowserToFalse("Chrome");
        setBrowserVersionsToFalse("Firefox","1","3");
        setBrowserVersionsToFalse("Firefox","72","102");
        setBrowserToFalse("Opera");
        setBrowserToFalse("Chrome Android");
        setBrowserVersionsToFalse("Firefox Android","1","3");
        setBrowserVersionsToFalse("Firefox Android","80","102");
        setBrowserToFalse("Safari");
        setBrowserToFalse("Safari iOS");
        setBrowserToFalse("Chrome iOS");
    }
    if("mozSyntheticDocument" in document){
        setBrowserToFalse("Internet Explorer");
        setBrowserToFalse("Edge");
        setBrowserToFalse("Chrome");
        setBrowserVersionsToFalse("Firefox","1","7");
        setBrowserVersionsToFalse("Firefox","23","102");
        setBrowserToFalse("Opera");
        setBrowserToFalse("Chrome Android");
        setBrowserVersionsToFalse("Firefox Android","1","7");
        setBrowserVersionsToFalse("Firefox Android","23","102");
        setBrowserToFalse("Safari");
        setBrowserToFalse("Safari iOS");
        setBrowserToFalse("Chrome iOS");
    }
    if("mozIsLocallyAvailable" in navigator){
        setBrowserToFalse("Internet Explorer");
        setBrowserToFalse("Edge");
        setBrowserToFalse("Chrome");
        setBrowserVersionsToFalse("Firefox","1","2");
        setBrowserVersionsToFalse("Firefox","36","102");
        setBrowserToFalse("Opera");
        setBrowserToFalse("Chrome Android");
        setBrowserVersionsToFalse("Firefox Android","1","3");
        setBrowserVersionsToFalse("Firefox Android","36","102");
        setBrowserToFalse("Safari");
        setBrowserToFalse("Safari iOS");
        setBrowserToFalse("Chrome iOS");
    }
    if("onwebkitmouseforceup" in window){
        setBrowserToFalse("Internet Explorer");
        setBrowserToFalse("Edge");
        setBrowserToFalse("Chrome");
        setBrowserToFalse("Firefox");
        setBrowserToFalse("Firefox");
        setBrowserToFalse("Chrome Android");
        setBrowserToFalse("Firefox Android");
        setBrowserVersionsToFalse("Safari","1","8");
        //setBrowserToFalse("Safari iOS");
        //setBrowserToFalse("Chrome iOS");
    }
    if(CSS.supports("(contain:layout)")){
        setBrowserToFalse("Internet Explorer");
        setBrowserVersionsToFalse("Edge","12","79");
        setBrowserVersionsToFalse("Chrome","1","51");
        setBrowserVersionsToFalse("Firefox","1","68");
        setBrowserVersionsToFalse("Opera","1","39");
        setBrowserVersionsToFalse("Chrome Android","1","51");
        setBrowserVersionsToFalse("Firefox Android","1","68");
        setBrowserVersionsToFalse("Safari","1","14");
        setBrowserVersionsToFalse("Safari iOS","1","14");
        setBrowserVersionsToFalse("Chrome iOS","1","14");
    }
    if(CSS.supports("(color:lab(29.2345% 39.3825 20.0664))")){
        setBrowserToFalse("Internet Explorer");
        setBrowserToFalse("Edge");
        setBrowserToFalse("Chrome");
        setBrowserToFalse("Firefox");
        setBrowserToFalse("Opera");
        setBrowserToFalse("Chrome Android");
        setBrowserToFalse("Firefox Android");
        setBrowserVersionsToFalse("Safari","1","14");
        setBrowserVersionsToFalse("Safari iOS","1","14");
        setBrowserVersionsToFalse("Chrome iOS","1","14");
    }
    if(CSS.supports("(-webkit-touch-callout:none)")){
        setBrowserToFalse("Internet Explorer");
        setBrowserToFalse("Edge");
        setBrowserToFalse("Chrome");
        setBrowserToFalse("Firefox");
        setBrowserToFalse("Opera");
        setBrowserToFalse("Chrome Android");
        setBrowserToFalse("Firefox Android");
        setBrowserToFalse("Safari");
        setBrowserVersionsToFalse("Safari iOS","1","2");
        setBrowserVersionsToFalse("Chrome iOS","1","2");
    }
    /*
    B Firefox Desktop
    if(CSS.supports("(-webkit-text-size-adjust:none)")){
        setBrowserToFalse("Internet Explorer");
        //setBrowserToFalse("Edge");
        //setBrowserToFalse("Chrome");
        setBrowserToFalse("Firefox");
        //setBrowserToFalse("Opera");
        //setBrowserToFalse("Chrome Android");
        setBrowserVersionsToFalse("Firefox Android","1","48");
        setBrowserToFalse("Safari");
        setBrowserVersionsToFalse("Safari iOS","1","4");
        setBrowserVersionsToFalse("Chrome iOS","1","4");
    }
     *end
    if(CSS.supports("(appearance:none)")){
        setBrowserToFalse("Internet Explorer");
        setBrowserVersionsToFalse("Edge","12","83");
        setBrowserVersionsToFalse("Chrome","1","83");
        setBrowserVersionsToFalse("Firefox","1","79");
        setBrowserVersionsToFalse("Opera","1","72");
        setBrowserVersionsToFalse("Chrome Android","1","83");
        setBrowserVersionsToFalse("Firefox Android","1","79");
        setBrowserVersionsToFalse("Safari","1","14");
        setBrowserVersionsToFalse("Safari iOS","1","14");
        setBrowserVersionsToFalse("Chrome iOS","1","14");
    }
    if(typeof InstallTrigger !== "undefined"){
        setBrowserToFalse("Internet Explorer");
        setBrowserToFalse("Edge");
        setBrowserToFalse("Chrome");
        //setBrowserVersionsToFalse("Firefox","1","79");
        setBrowserToFalse("Opera");
        setBrowserToFalse("Chrome Android");
        //setBrowserToFalse("Firefox Android","1","79");
        setBrowserToFalse("Safari");
        setBrowserToFalse("Safari iOS");
        setBrowserToFalse("Chrome iOS");
    }
    */
    browsers["Chrome hiOS"] = undefined;
    //console.log(browsers)
    //var store = JSON.stringify(browsers);
    //console.log(store);
    //document.write(store);
    //document.querySelector("#x").innerText = JSON.stringify(browser);
    //document.write(browsers[0][0]);
    window.setTimeout(function(){
        if("JSON" in window){
            if("replaceAll" in String.prototype){
                document.write(JSON.stringify(browsers).replaceAll("}", "\n}\n").replaceAll("{", "{\n") + "\n" + HTMLengine + " " + JSengine + "\n" + JSON.stringify(os) + osVersionM + "DesktopMode:" + isDesktopMode.toString());
            }else{
                document.write(JSON.stringify(browsers).replace("}", "\n}\n").replace("{", "{\n") + "\n" + HTMLengine + " " + JSengine + "\n" + JSON.stringify(os) + osVersionM + "DesktopMode:" + isDesktopMode.toString());
            }
        }else{
            for(var yz1 in browsers){
                document.write("\"" + yz1 + "\":{");
                if(browsers[yz1]){
                    for(var yz2 in browsers[yz1]){
                        document.write("\"" + [yz2] + "\":" + browsers[yz1][yz2] + ",");
                    }
                }
                document.write("}");
            }
            document.write("\n" + HTMLengine + "\n" + JSengine);
        }
    }, 1000)