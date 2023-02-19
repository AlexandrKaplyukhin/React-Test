import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

const App = (props) => {
    /*let posts = [
        {id:0, message:'Hello', like:'15'},
        {id:1, message:'Alex team', like:'20'},
        {id:0, message:'Hello', like:'15'},
        {id:1, message:'Alex team', like:'20'},
        {id:0, message:'Hello', like:'15'},
        {id:1, message:'Alex team', like:'20'},
        {id:0, message:'Hello', like:'15'},
        {id:1, message:'Alex team', like:'20'},
    ]*/
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path="/profile"
                               element={<Profile addPost={props.addPost} updateNewPostText={props.updateNewPostText} profilePage={props.state.profilePage}/>}/>
                        <Route path="/news" element={'News'}/>
                        <Route path="/music" element={'Music'}/>
                        <Route path="/setting" element={'Setting'}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    )
}

export default App;

