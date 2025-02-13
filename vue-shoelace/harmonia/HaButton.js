import { SlButton } from '@shoelace-style/shoelace';

class HaButton extends SlButton {
    constructor() {
        super();

        this.onClickCallbackName = this.getAttribute('ha-on-click');

        this.addEventListener('click', this.handleOnClick.bind(this));
    }

    handleOnClick(event) {
        if (this.onClickCallbackName) {
            window[this.onClickCallbackName](event);
        }
    }
}

customElements.define('ha-button', HaButton);
