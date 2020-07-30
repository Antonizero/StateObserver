const state = {
    status: 'waiting for changes',
};

const __DOM__button = document.querySelector('.btn');
const __DOM__input = document.querySelector('.input');
const __DOM__output = document.querySelector('.output');
const __DOM__output2 = document.querySelector('.output2');

__DOM__output.innerText = state.status || ''; 
__DOM__output2.innerText = state.status || ''; 

const Observer = function(object, property) {
    const _this = this;
    this.observers = [];

    this.Observe = (notifyCallback) => {
        _this.observers.push(notifyCallback);
    };

    Object.defineProperty(object, property, {
        set: (updatedValue) => {
            _this.value = updatedValue;
            for (let i = 0; i < _this.observers.length; i++) _this.observers[i](updatedValue);
        },
        get: () => {
            return _this.value;
        }
    });
};

const statusObserver = new Observer(state, 'status');

statusObserver.Observe((value) => {
    __DOM__output.innerText = value;
    __DOM__output2.innerText = value;
});

__DOM__button.addEventListener('click', function() {
    state.status = __DOM__input.value;
});



