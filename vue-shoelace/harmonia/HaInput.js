import { SlInput } from '@shoelace-style/shoelace';
const { watch } = Vue;

class HaInput extends SlInput {
    constructor() {
        super();

        this.modelPropertyName = this.getAttribute('ha-value');
        this.onChangeCallbackName = this.getAttribute('ha-on-change');

        this.addEventListener('sl-change', this.handleOnChange.bind(this));

        if (this.modelPropertyName && $model[this.modelPropertyName] !== undefined) {
            this.value = $model[this.modelPropertyName];
        }

        const context = this;
        watch(() => $model[this.modelPropertyName], (newValue, _oldValue) => {
            context.value = newValue;
        });
    }

    handleOnChange(event) {
        $model[this.modelPropertyName] = event.target.value;
        if (this.onChangeCallbackName) {
            window[this.onChangeCallbackName](event);
        }
    }
}

customElements.define('ha-input', HaInput);
