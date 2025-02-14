const { createApp, reactive } = Vue;

createApp({
    setup() {
        window.$model = reactive({});
        $model.items = [
            {
                name: 'Banana',
                value: 'banana'
            },
            {
                name: 'Orange',
                value: 'orange'
            }
        ];
        $model.inputValue = '1234';
        $model.selectValue = '';
        $model.toastCounter = 0;
        return $model;
    }
}).mount('#app');

function showAlert() {
    $model.myAlert.show();
}

function showToast() {
    $model.toastCounter++;
    $model.myToast.toast();
}

function showToastStack() {
    $model.toastCounter++;
    createAlert(`This is a toast ${$model.toastCounter}`);
}

function alertOnButtonClick() {
    alert(`
        Button Click Event:
            $model value is: ${$model.inputValue}
            $model selectValue is: ${$model.selectValue}
    `);
}

function alertOnInputChange(event) {
    alert(`
        Input Change Event:
            Event value is: ${event.target.value}
            $model value is: ${$model.inputValue}
    `);
}

function createAlert(message, variant = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('ha-alert'), {
        variant,
        closable: true,
        duration: duration,
        innerHTML: `
                <sl-icon name="${icon}" slot="icon"></sl-icon>
                <div>${message}</div>
            `
    });
    document.body.append(alert);
    return alert.toast();
}

setTimeout(() => {
    $model.inputValue = 'Vue + Shoelace data binding';
    $model.items.push({
        name: 'Test',
        value: 'test'
    });
    $model.selectValue = 'test';
}, 2000);