
        <!--
        <script>
            function loadLangPage(lang) {
                window.needShowComabacker=false;
                window.location.href='http://'+window.location.host+'/mvolkovagemoroy/?ufl=271&lang='+lang;
            }
            const temp = `
                <div class="lang-list">
                    <img class="active-lang" src="./img/ru.png" alt="ru" onclick="loadLangPage(&#39;ru&#39;);">
                    <a href="url's/?lang=ru" style="display: none;" data-trigger="click" data-ym-goal="ym_golp" data-ga-goal="ga_golp" data-ym-id="54063625">ru</a>
                    <img src="./img/uk.png" alt="uk" onclick="loadLangPage(&#39;uk&#39;);">
                    <a href="url's/?lang=uk" style="display: none;" data-trigger="click" data-ym-goal="ym_golp" data-ga-goal="ga_golp" data-ym-id="54063625">uk</a>
                </div>  
            `;
        </script>
        -->
        <!--
        <script>
            var bajb_backdetect = {
                Version: "1.0.0",
                Description: "Back Button Detection",
                Browser: {
                    IE: !!(window.attachEvent && !window.opera),
                    Safari: navigator.userAgent.indexOf("Apple") > -1,
                    Opera: !!window.opera
                },
                FrameLoaded: 0,
                FrameTry: 0,
                FrameTimeout: null,
                OnBack: function() {
                    alert("Back Button Clicked");
                },
                BAJBFrame: function() {
                    var BAJBOnBack = document.getElementById("BAJBOnBack");
                    if (bajb_backdetect.FrameLoaded > 1) {
                        if (bajb_backdetect.FrameLoaded == 2) {
                            bajb_backdetect.OnBack();
                            history.back();
                        }
                    }
                    bajb_backdetect.FrameLoaded++;
                    if (bajb_backdetect.FrameLoaded == 1) {
                        if (bajb_backdetect.Browser.IE) {
                            bajb_backdetect.SetupFrames();
                        } else {
                            bajb_backdetect.FrameTimeout = setTimeout("bajb_backdetect.SetupFrames();", 700);
                        }
                    }
                },
                SetupFrames: function() {
                    clearTimeout(bajb_backdetect.FrameTimeout);
                    var BBiFrame = document.getElementById("BAJBOnBack");
                    var checkVar = BBiFrame.src.substr(-11, 11);
                    if (bajb_backdetect.FrameLoaded == 1 && checkVar != "HistoryLoad") {
                        BBiFrame.src = "blank.html?HistoryLoad";
                    } else {
                        if (bajb_backdetect.FrameTry < 2 && checkVar != "HistoryLoad") {
                            bajb_backdetect.FrameTry++;
                            bajb_backdetect.FrameTimeout = setTimeout("bajb_backdetect.SetupFrames();", 700);
                        }
                    }
                },
                SafariHash: "false",
                Safari: function() {
                    if (bajb_backdetect.SafariHash == "false") {
                        if (window.location.hash == "#b") {
                            bajb_backdetect.SafariHash = "true";
                        } else {
                            window.location.hash = "#b";
                        }
                        setTimeout("bajb_backdetect.Safari();", 100);
                    } else {
                        if (bajb_backdetect.SafariHash == "true") {
                            if (window.location.hash == "") {
                                bajb_backdetect.SafariHash = "back";
                                bajb_backdetect.OnBack();
                                history.back();
                            } else {
                                setTimeout("bajb_backdetect.Safari();", 100);
                            }
                        }
                    }
                },
                Initialise: function() {
                    document.write('<iframe src="blank.html" style="display:none;" id="BAJBOnBack" onunload="alert(\'de\')" onload="bajb_backdetect.BAJBFrame();"></iframe>');
                }
            };
            bajb_backdetect.Initialise();
        </script>
        -->
        <!--
        <div class="block">
            <iframe src="./img/blank.html" style="display:none;" id="BAJBOnBack" onunload="alert(&#39;de&#39;)" onload="bajb_backdetect.BAJBFrame();"></iframe>
            <script>setTimeout(function(){bajb_backdetect.OnBack=function(){window.history.back=function(){document.location='http://1.gemo-cream.pro/?a_bid=517&campaign=140&lang=ru&ufl=271&uuc=1&vitrina=1&scenario=normal_blog&cpa=kma&action=back'}}},200);</script>
        </div>
        -->