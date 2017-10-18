const navToggler = {
        initialize() {
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};
            this.ui.container = document.querySelector('.js-nav');
            this.ui.open = this.ui.container.querySelector('.js-nav-open');
            this.ui.close = this.ui.container.querySelector('.js-nav-close');
        },

        setProperties() {
        },

        bindEvents() {
            this.ui.open.addEventListener('click', this.open.bind(this));
            this.ui.close.addEventListener('click', this.close.bind(this));
        },

        open(e) {
            this.ui.container.classList.add('nav-open');
        },

        close(e) {
            this.ui.container.classList.remove('nav-open');
        }
}

module.exports = navToggler;
