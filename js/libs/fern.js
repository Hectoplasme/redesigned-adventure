/*
* Declaration of the global namespace fern
*  with 3 defaults namespace : utils, modules, plugins, libs
*/
const fern = {
    utils : {},
    modules : {},
    //plugins : {},
    libs : {}
};

/*--------------------------------------------------------------
* Namespace utils
--------------------------------------------------------------*/
const fernModule = (($, fern) => {

    "use strict";

    let utils = fern.utils || (fern['utils'] = {}),
        $body = $('body'),
        $html = $('html');

    /*
    * fern.utils.hasJs
    * on load page, remove html Class "no-js" and add class "has-js"
    */
    utils.hasJs = () => {
        $('html').removeClass('no-js').addClass('has-js');
    };

    /*
    * fern.utils.goToTop
    * Scroll to top on class="gototop" links
    */
    utils.goToTop = (speed) => {
        const s = speed || 240;

        $('.backtotop').on('click',(e) => {
            e.preventDefault();
            $('html,body').stop().animate({scrollTop : 0}, s);
        });
    };

    /*
    * fern.utils.goTo
    * Scroll to offset passed in params
    */
    utils.goTo = (offsetY, speed) => {
        $('html,body').stop().animate({ scrollTop:offsetY || 0 }, speed || 240);
    };

    /*
    * fern.utils.formHeader
    * Expand a search input
    */
    utils.formHeader = () => {
        const $formHeader = $('#search'),
            input = $formHeader.find('input[type="text"]');

        $formHeader.delegate(':submit', 'click', function(e){
            if(!$formHeader.hasClass('expand')){
                $formHeader.addClass('expand');
                input.focus();
                e.preventDefault();
            } else {
                if('' === input.val()){
                    $formHeader.removeClass('expand');
                    e.preventDefault();
                }
            }
        });
    };

    /*
    * fern.utils.placeholder
    * Polyfill placeholder for browsers that do not support native placeholder
    */
    utils.placeholder = () => {
        const i = document.createElement("input");
        // Only bind if placeholder isn't natively supported by the browser
        if (!("placeholder" in i)) {
            $("input[placeholder], textarea[placeholder]").each(() => {
                const self = $(this);

                self.addClass('placeholder');

                self.val(self.attr("placeholder")).bind({
                    focus: () => {
                        if (self.val() === self.attr("placeholder")) {
                            self.val("");
                            self.removeClass('placeholder');
                        }
                    },
                    blur: () => {
                        const label = self.attr("placeholder");

                        if (label && self.val() === "") {
                            self.val(label);
                            self.addClass('placeholder');
                        }
                    }
                });
            });
        }
    };

    /*
    * fern.utils.externalLinks
    */
    utils.externalLinks = (target) => {
        $body.on('click', 'a[rel="external"]', (e) => {
            e.preventDefault();
            window.open($(this).attr('href'), target || '_blank');
        });
    };

    /**
    * fern.utils.bindUI
    * Create the jQuery objects
    * params : An object of UI selectors
    * e.g : ui = fern.utils.bindUI({ 'content':'#content' });
    * So the dom object will be available in ui.content
    */
    utils.bindUI = (inBodyContextUI, outBodyContextUI) => {
        const ui = {};

        var inBodyContextUI = inBodyContextUI || {};

        var outBodyContextUI = outBodyContextUI || {};

        let i;

        for (i in inBodyContextUI) {
            ui[i] = $body.find(inBodyContextUI[i]);
        }

        for (i in outBodyContextUI) {
            if (typeof ui[i] != 'undefined') {
                throw new Error('Element is already binded in context @fern.utils.bindUI');
            }

            ui[i] = $(outBodyContextUI[i]);
        }

        ui.$body = $body;

        return ui;
    };

    /*
    * fern.utils.replaceSVG
    * replace all the svg images by png ones
    * require Modernizr
    */
    utils.replaceSVG = () => {
        if (Modernizr && !Modernizr.inlinesvg) {
            $.each($body.find('img[src$=".svg"]'), (key, el) => {
                const src = el.getAttribute('src');

                el.setAttribute('src', src.replace('.svg', '.png'));
            });
        }
    };


    /*
    *  CUSTOM EVENTS
    */
    utils.customEvents = {};
    /*
    * fern.utils.customClick (fast click for mobile)
    */
    utils.customEvents.click = (!!('ontouchstart' in window)) ? 'touchend' : 'click';

    /*
    * fern.utils.customResize (orientationChange first)
    */
    utils.customEvents.resize = (undefined !== window.orientation) ? 'orientationchange' : 'resize';

    /*
    * fern.utils.cls
    * generic classes names
    */
    utils.cls = {
        hide: 'hidden',
        ishidden: 'is-hidden',
        active: 'is-active',
        fixed: 'is-fixed',
        visible: 'is-visible',
        invisible: 'is-invisible'
    };

    /*
    * fern.utils.printBtn
    * button to print current page
    */
    utils.printBtn = () => {
        $body.on('click','.js-print',(e) => {
            e.preventDefault();
            window.print();
        });
    };

    /*
    * fern.utils.getLocationHash
    * @return {string} location.hash
    */
    utils.getLocationHash = () => {
        return window.location.hash.substring(1)
    }

    /*
    * fern.utils.autosubmitForm
    * autosumit a form when a select triggers the event "change"
    */
    utils.autosubmitForm = () => {

        const fn = () => {
            $(this).closest('form').submit();
        };

        $('form.js-autosubmit').on('change', 'select', fn);
    };

    /*
    * fern.utils.detectPlatform
    * @param fn {function} : callback with the platform
    */
    utils.detectPlatform = (fn) => {
        const cb = fn || function() {};
        let platform;

        if(navigator.userAgent.match(/Android/i)){
            platform = "android";
        }

        if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)){
            platform = "ios";
        }

        if(navigator.userAgent.match(/webOS/i)){
            platform = "webos";
        }

        if(navigator.userAgent.match(/windows phone/i)){
            platform = "windowsphone";
        }

        if(navigator.userAgent.match(/BlackBerry/i)){
            platform = "blackberry";
        }

        fn(platform);
    }

    /*
    * fern.utils.gridTool
    */
    utils.gridTool = () => {
        $('.js-tool-grid').on('click', (e) => {
            e.preventDefault();

            $body.toggleClass('is-grid-visible');
        });
    }

    /*
    * fern.utils.isMobileTablet
    * @return {bfernlean}
    */
    utils.isMobileTablet = (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/windows phone/i) ||
        navigator.userAgent.match(/BlackBerry/i)
    ) ? true : false;

    utils.isMobile = (
        (navigator.userAgent.match(/Android/i) && navigator.userAgent.indexOf('Mobile') > -1) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/windows phone/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/BB10/i)
    ) ? true : false;

    utils.isTablet = (
        (navigator.userAgent.match(/Android/i) && navigator.userAgent.indexOf('Mobile') == -1) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPad/i)
    ) ? true : false;

    return fern;

})(jQuery, (fern || {}) );


//Export fern
module.exports = fern;
