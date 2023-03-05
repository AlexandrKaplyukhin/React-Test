import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import ReactDOM from "react-dom/client";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    debugger;
    root.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)} store={store}
        />
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    store.subscribe(state);
})

reportWebVitals();

//export default rerender;
