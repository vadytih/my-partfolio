import React from 'react';
import style from './Header.module.css'
import {Nav} from "../nav/Nav";
import containerStyle from '../common/styles/Conteiner.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={`${containerStyle.container} ${style.containerHeader}`}>
                <Nav/>
            </div>
        </header>
    );
};

