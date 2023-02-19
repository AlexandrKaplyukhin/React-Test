import ReactDOM from "react-dom/client";
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = (state) => {
    root.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    );
}
 export default rerender;