import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './Stats.module.scss'

const Stats = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={`${classes.sectionInner} + ${s.inner}`}>
                STATS
            </div>
        </section>
    )
}

export default Stats;