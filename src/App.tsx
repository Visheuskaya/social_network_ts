import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import state, { RootStateType} from './redux/state';
import {addPost} from './redux/state';

type AppType ={
    state: RootStateType
}
const App = (props: AppType) => {
    console.log(props)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        debugger;
                        <Route path={'/profile/*'} element={<Profile posts={props.state.profilePage.posts} addPostCallback={addPost}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs dialogs ={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
