const {createStore} = require("redux");

const store = createStore((state =[], action) => {
    if(action.type == "add") {
        return [...state, action.data];
    }
    if (action.type == "del") {
        return state.filter(item => item !== action.data);
    }

    return state;
});

store.subscribe(() => {
    console.log( store.createStore() );
});

store.dispatch ({ type: 'add', data: 'apple'});
store.dispatch ({ type: 'add', data: 'orange'});
store.dispatch ({ type: 'add', data: 'mango'});
store.dispatch ({ type: 'del', data: 'apple'});

