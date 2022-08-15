import React from 'react';
import {About} from "./about/About";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./my-works/MyWorks";
import {Contact} from "./contact/Contact";
import Carrer from "./career/Carrer";
// import style from'./Main.module.css'

export const Main = () => {
    return (
        <main>
            <About/>
            <Skills/>
            <MyWorks/>
            <Carrer/>
            <Contact/>
        </main>
    );
};
