import React from 'react';
import style from './CareerItem.module.css'

type careerItemProps = {
    start: string
    end: string
    titleCareer: string
    descriptionCareer: string
    skill: string

}

export const CareerItem = (props: careerItemProps) => {
    return (
        <div className={style.careerItem}>
            <div className={style.yearBlock}>
                <div className={style.yearStart}><span>{props.start}</span></div>
                <div className={style.puff}></div>
                <div className={style.yearEnd}><span>{props.end}</span></div>
            </div>
            <div className={style.lineBlock}></div>
            <div className={style.descriptionBlock}>
                <span>{'org. ' }</span>
                <span>{props.descriptionCareer}</span>
                <span>Skills: {props.skill}</span>
            </div>
        </div>
    );
};
