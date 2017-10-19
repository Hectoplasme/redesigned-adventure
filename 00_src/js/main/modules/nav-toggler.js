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
            this.ui.links = this.ui.container.querySelectorAll('.menu li a');
        },

        setProperties() {
            this.isOpen = false;
        },

        bindEvents() {
            this.ui.open.addEventListener('click', this.open.bind(this));
            this.ui.close.addEventListener('click', this.close.bind(this));
            this.ui.links.forEach((link) =>
                link.addEventListener('click', this.close.bind(this))
            );
        },

        open(e) {
            if (!this.isOpen) {
                this.ui.container.classList.add('nav-open');
                this.isOpen = true;
            }
        },

        close(e) {
            if (this.isOpen) {
                this.ui.container.classList.remove('nav-open');
                this.isOpen = false;
            }
        }
}

module.exports = navToggler;
