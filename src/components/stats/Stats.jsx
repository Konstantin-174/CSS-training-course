import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './Stats.module.scss'

const Stats = () => {
    return (
        <section className={classes.sectionOuter}>
            <div className={`${classes.sectionInner} + ${s.wrapper}`}>
                STATS
            </div>
        </section>
    )
}

export default Stats;