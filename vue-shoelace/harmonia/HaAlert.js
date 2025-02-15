import { SlAlert } from '@shoelace-style/shoelace';

class HaAlert extends SlAlert {
    constructor() {
        super();

        this.modelPropertyName = this.getAttribute('ha-element');

        if (this.modelPropertyName) {
            $model[this.modelPropertyName] = this;
        }
    }
}

customElements.define('ha-alert', HaAlert);
