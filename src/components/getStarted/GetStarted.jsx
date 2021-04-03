import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './GetStarted.module.scss';

const GetStarted = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={classes.sectionInner}>
                GET STARTED
            </div>
        </section>
    )
}

export default GetStarted;