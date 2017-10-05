// IE Specifics
require('es5-shim');
require('es6-shim');

//import modules
const sptk = require('../libs/sptk.js'),
    utils = require('../libs/utils.js');


(function ($, sptk, win) {

    $(function () {
        const app = {
            initialize() {
                this.bindUI();
                this.bindEvents();
                this.sptk.initialize(this);
                utils.initialize();

                if (!sptk.utils.isMobileTablet) {
                    this.initDesktopOnlyModules();
                } else {
                    this.initMobileOnlyModules();
                }

                this.initCommonModules();
            },

            bindUI() {
                this.ui = {};
                this.ui.$html = $('html');
                this.ui.$body = $('body');
                this.ui.$win = $(window);
            },

            bindEvents() {

            },

            initDesktopOnlyModules() {
                // Example
                //this.sptk.conditionalLoad('.js-sticky', stickyModule.initialize.bind(stickyModule));

            },

            initMobileOnlyModules() {
                // Example
                //this.sptk.conditionalLoad('.js-mobile-burger', burgerModule.initialize.bind(burgerModule));
            },

            initCommonModules() {
                // Example
                //this.sptk.conditionalLoad('.js-video', videoModule.initialize.bind(videoModule));
            },

            sptk: {
                ctx: null,

                initialize(ctx) {
                    this.ctx = ctx;

                    this.initModules();
                    this.initVariables();
                    this.checkBrowsers();
                },

                initModules() {
                    sptk.utils.placeholder();
                    sptk.utils.externalLinks();
                },

                initVariables() {
                    sptk.utils.$body = this.ctx.ui.$body;
                    sptk.utils.$html = this.ctx.ui.$html;
                    sptk.utils.$win = this.ctx.ui.$win;
                },

                checkBrowsers() {
                    /*@cc_on
                        if (/^10/.test(@_jscript_version)) {
                            window.isIE10 = true;
                            window.isIE = true;

                            sptk.utils.$body.addClass('is-ie10');
                        }
                    @*/

                    if (navigator.userAgent.indexOf("Trident") !== -1 && navigator.userAgent.indexOf("rv:11") !== -1) {
                        window.isIE11 = true;
                        window.isIE = true;

                        sptk.utils.$body.addClass('is-ie11');
                    }

                    if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
                        window.isSafari = true;

                        sptk.utils.$body.addClass('is-safari');
                    }
                },

                conditionalLoad(selector, callback) {
                    if (document.querySelectorAll(selector).length) {
                        callback();
                    }
                }
            }
        };

        $(window).on('load', () => {
            app.initialize();
        });
    });

})(jQuery, sptk, window);
