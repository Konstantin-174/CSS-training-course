import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './PlanAndManage.module.scss'

const PlanAndManage = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={classes.sectionInner}>
                PLAN AND MANAGE
            </div>
        </section>
    )
}

export default PlanAndManage;