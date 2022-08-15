import React from 'react';
import styleContainer from '../../common/styles/Conteiner.module.css'
import styleText from '../../common/styles/Text.module.css'
import style from  './Career.module.css'
import {CareerItem} from "./careerItem/CareerItem";

export const Carrer = () => {
    return (
        <div className={style.career}>
            <div className={`${styleContainer.container} ${style.careerContainer}`}>
                <h2 className={styleText.titleBlock}>Career</h2>
                <div className={style.careerBlock}>
                    <CareerItem titleCareer={"MTF"} start={'2007'} end={'2011'} descriptionCareer={'I working in the' +
                    ' factory what my firt work after school'} skill={'work hands, teamwork'} careerName={'plumber'}/>
                    <CareerItem titleCareer={"Polimer gold"} start={'2007'} end={'2011'} descriptionCareer={'I working in the' +
                    ' factory what my firt work after school'} skill={'work hands, teamwork'} careerName={'plumber'}/>
                    <CareerItem titleCareer={"MTF"} start={'2007'} end={'2011'} descriptionCareer={'I working in the' +
                    ' factory what my firt work after school'} skill={'work hands, teamwork'} careerName={'plumber'}/>
                </div>
            </div>
        </div>
    );
};

export default Carrer;