import React from 'react';
import 'reset-css'
import './App.css';
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Main} from "./main/Main";

export const App = () => {
    return <div className={'app'}>
        <Header/>
        <Main/>
        <Footer/>
    </div>
}
export default App;
