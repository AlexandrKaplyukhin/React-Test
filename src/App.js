import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {
debugger;
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<Dialogs state={props.state.dialogsPage}

                                                 dispatch={props.dispatch}/>}/>
                        <Route path="/profile"
                               element={<Profile dispatch={props.dispatch}
                                                 profilePage={props.state.profilePage}/>}/>
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

