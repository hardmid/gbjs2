export default {
    _listeners: {}, // Обьект который хранит обработчики

    // подписка на событие
    addListener(type, callback) {
        if(this._listeners[type]) {
            this._listeners[type].push(callback) 
        } else {
            this._listeners[type] = [callback]
        }
    },

    emit(type, ...params) { // type = 'remove'
        this._listeners[type].forEach(callback => {
            callback(...params);
        });
    }
}