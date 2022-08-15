import React from 'react';
import styleContainer from '../common/styles/Conteiner.module.css'
import style from './Footer.module.css'
import {Nav} from "../nav/Nav";

export const Footer = () => {
    return (
        <footer className={style.footer}>

            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.footerContact}>
                    <span>Tel: +375447258800</span>
                    <span>email: vady.tih@gmail.com</span>
                    <span>Telegramm: @Vadimby</span>
                    <span>Linkedin: <a href={'https://www.linkedin.com/in/vadzim-tsikhinia-513a5b178/'} target={'_table'} about={'My Linkedin page'}>Vadzim Tsikhinia</a> </span>
                </div>
                <div className={style.footerNav}><Nav/></div>
                <div className={style.footerCop}><span>Corporation © 2022</span></div>
            </div>
        </footer>
    );
};
