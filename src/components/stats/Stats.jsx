import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './Stats.module.scss'
import iconR from './icons/right.svg'
import iconL from './icons/left.svg'

const Stats = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={s.left}>
                <div className={s.icon}>
                    <img src={iconL} alt="Left icon"/>
                </div>
                <div className={s.number}>89%</div>
                <div className={s.text}>
                    Customers who have increased their productivity
                </div>
            </div>
            <div className={s.right}>
                <div className={s.icon}>
                    <img src={iconR} alt="Right icon"/>
                </div>
                <div className={s.number}>3123</div>
                <div className={s.text}>
                    Users who have used our application
                </div>
            </div>
        </section>
    )
}

export default Stats;