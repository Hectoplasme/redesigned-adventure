// IE Specifics
// require('es5-shim');
// require('es6-shim');

//import modules
const fern = require('../libs/fern.js'),
    utils = require('../libs/utils.js'),
    header = require('./modules/header.js');


(function ($, fern, win) {

    $(function () {
        const app = {
            initialize() {
                document.querySelector('.js-header').addEventListener('mouseover', () => {
                    console.log('pouet');
                });
                this.bindUI();
                this.bindEvents();
                this.fern.initialize(this);
                utils.initialize();

                if (!fern.utils.isMobileTablet) {
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
                //this.fern.conditionalLoad('.js-sticky', stickyModule.initialize.bind(stickyModule));

            },

            initMobileOnlyModules() {
                // Example
                //this.fern.conditionalLoad('.js-mobile-burger', burgerModule.initialize.bind(burgerModule));
            },

            initCommonModules() {
                // Example
                this.fern.conditionalLoad('.js-header', header.initialize.bind(header));
            },

            fern: {
                ctx: null,

                initialize(ctx) {
                    this.ctx = ctx;

                    this.initModules();
                    this.initVariables();
                    this.checkBrowsers();
                },

                initModules() {
                    fern.utils.placeholder();
                    fern.utils.externalLinks();
                },

                initVariables() {
                    fern.utils.$body = this.ctx.ui.$body;
                    fern.utils.$html = this.ctx.ui.$html;
                    fern.utils.$win = this.ctx.ui.$win;
                },

                checkBrowsers() {
                    /*@cc_on
                        if (/^10/.test(@_jscript_version)) {
                            window.isIE10 = true;
                            window.isIE = true;

                            fern.utils.$body.addClass('is-ie10');
                        }
                    @*/

                    if (navigator.userAgent.indexOf("Trident") !== -1 && navigator.userAgent.indexOf("rv:11") !== -1) {
                        window.isIE11 = true;
                        window.isIE = true;

                        fern.utils.$body.addClass('is-ie11');
                    }

                    if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
                        window.isSafari = true;

                        fern.utils.$body.addClass('is-safari');
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

})(jQuery, fern, window);
