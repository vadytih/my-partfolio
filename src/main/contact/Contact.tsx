import React from 'react';
import style from './Contact.module.css'
import styleContainer from '../../common/styles/Conteiner.module.css'
import styleText from '../../common/styles/Text.module.css'

export const Contact = () => {
    return (
        <div className={style.contact}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h3 className={styleText.titleBlock}>Contact</h3>
                <div className={style.form}>
                    <input type={"text"} placeholder={'name'}/>
                    <input type={"tel"} placeholder={'yor phone number'}/>
                    <input type={"email"} placeholder={'yor email'}/>
                    <textarea placeholder={'message'}></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};
