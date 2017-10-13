const header = {
        initialize() {
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.eyes = document.querySelectorAll('.eyes');
        },

        setProperties() {
            this.currentEye = 0;
            this.totalEyes = this.ui.eyes.length;
        },

        bindEvents() {
            //Example
            for (let i=0; i < this.totalEyes; i++) {
                this.ui.eyes[i].addEventListener('mouseover', this.onHover.bind(this));
            }
        },

        onHover(e) {
            this.ui.eyes[this.currentEye].classList.add('eyes--closed');
            this.currentEye = this.random();
            this.ui.eyes[this.currentEye].classList.remove('eyes--closed');
        },

        random() {
            return Math.floor(Math.random() * this.totalEyes);
        }
}

module.exports = header;
