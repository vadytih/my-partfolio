import React from 'react';
import style from './WorkItem.module.css'

type workItemProps = {
    title: string
    description: string
}

export const WorkItem = (props: workItemProps) => {
    return (
        <div className={style.workItem}>
            <div className={style.bGContainer}>
                <h4 className={style.title}>{props.title}</h4>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};
