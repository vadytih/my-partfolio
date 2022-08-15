import React from "react";
import style from './About.module.css'
import styleContainer from '../../common/styles/Conteiner.module.css'

export const About = () => {
    return <div className={style.aboutBlock}>

        <div className={`${styleContainer.container} ${style.aboutBlockContainer}`}>
            <div className={style.text}>
                <span>Hi There</span>
                <h1>I am Vadim Tikhinia</h1>
                <p>React front-end developer</p>
            </div>
            <div className={style.photo}></div>
        </div>
    </div>
}