import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import ReactDOM from "react-dom/client";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = (state) => {
    root.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}
        />
    );
}
rerender(store.getState())
store.subscribe(rerender);

reportWebVitals();

//export default rerender;
