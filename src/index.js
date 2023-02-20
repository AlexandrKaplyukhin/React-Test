import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, sendMessage, updateNewMessageText, updateNewPostText} from "./redux/state";
import App from "./App";
import ReactDOM from "react-dom/client";
import {subscribe} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = (state) => {
    root.render(
        <App state={state} addPost={addPost} sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} updateNewPostText={updateNewPostText}/>
    );
}
rerender(state)
subscribe(rerender);
reportWebVitals();

export default rerender;
