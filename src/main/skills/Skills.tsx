import React from "react";
import containerStyle from '../../common/styles/Conteiner.module.css'
import style from './Skills.module.css'
import {Skill} from "./skill/Skill";
import styleText from '../../common/styles/Text.module.css'


export const Skills = () => {
    const description = 'askfvhfk jevnkwejvu kew hvuehv hukj fhekfh ekfjh vkfjhv kjfh qrgeqrerg'
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <h2 className={styleText.titleBlock}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML & CSS'} description={description}/>
                    <Skill title={'React'} description={description}/>
                    <Skill title={'Redux'} description={description}/>
                </div>
            </div>
        </div>
    )
}