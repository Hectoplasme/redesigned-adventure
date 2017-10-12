const header = {
        initialize() {
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};
        },

        setProperties() {
        },

        bindEvents() {
            //Example
            //this.ui.$container.addEventListener('mousemove', this.onHover.bind(this));
        },

        onHover(e) {
        }
}

module.exports = header;
