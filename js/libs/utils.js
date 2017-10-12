const fern = require('./fern.js'),
    utils = {
        initialize() {
            this.bindUI();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.$gotos = $('.js-goto');
        },

        bindEvents() {
            // Events for scroll.
            fern.utils.$win.on('scroll', this.throttle((event) => {
                fern.utils.$body.trigger('page:scrollDebounced', fern.utils.$win.scrollTop());
            }, 5));

            fern.utils.$win.on('scroll', (event) => {
                fern.utils.$body.trigger('page:scroll', fern.utils.$win.scrollTop());
            });

            // Events for resize.
            fern.utils.$win.on('resize', this.debounce((event) => {
                fern.utils.$body.trigger('page:resizeDebounced');
                fern.utils.$body.trigger('page:scrollDebounced', fern.utils.$win.scrollTop());
            }, 30));

            // Events for gotos
            this.ui.$gotos.on('click', this.onClickGoto.bind(this));
        },

        debounce(callback, limit, immediate) {
            let timeout;

            return () => {
                const context = this,
                    args = arguments;

                let later = () => {
                    timeout = null;

                    if (!immediate) {
                        callback.apply(context, args);
                    }
                };

                const callNow = immediate && !timeout;

                clearTimeout(timeout);

                timeout = setTimeout(later, limit);

                if(callNow) {
                    func.apply(context, args);
                }
            }
        },

        throttle(callback, limit) {
            let wait = false;

            return () => {
                if (!wait) {
                    callback.call();
                    wait = true;

                    setTimeout(() => {
                        wait = false;
                    }, limit);
                }
            }
        },

        getTransitionFromEl ($el) {
            if (!$el.length) {
                return;
            }

            // Getting the styles of the element
            const DOMElement = $el[0],
                styles = window.getComputedStyle(DOMElement);

            // Getting the transition duration and stripping value and unit
            let transitionDuration = styles.getPropertyValue('transition-duration'),
                strippedUnit = transitionDuration.match(/[^\d.-]/g, '')[0],
                candidateValue = transitionDuration.replace(/[^\d.-]/g, '') * 1;

            // Getting the value in milliseconds if the unit is in seconds
            if (strippedUnit === 's') {
                candidateValue = candidateValue * 1000;
            }

            // Returning the correct value
            return candidateValue;
        },

        onClickGoto (e) {
            e.preventDefault();

            const $currentTarget = $(e.currentTarget),
                $targetHash = $($currentTarget.attr('href')),
                targetOffset = $targetHash.get(0).offsetTop - 150;

            fern.utils.goTo(targetOffset, 350);
        }
    };

module.exports = utils;
