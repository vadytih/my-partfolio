import React from "react";
import styleContainer from '../../common/styles/Conteiner.module.css'
import style from './MyWorks.module.css'
import styleText from '../../common/styles/Text.module.css'
import {WorkItem} from "./work-item/WorkItem";

export const MyWorks = () => {
    return (
        <div className={style.myWorks}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <h2 className={styleText.titleBlock}>My works</h2>
                <div className={style.works}>
                    <WorkItem title={'works1'} description={'my first work is good'}/>
                    <WorkItem title={'works2'} description={'my last work!! Yes!!'}/>
                </div>
            </div>
        </div>
    )
}