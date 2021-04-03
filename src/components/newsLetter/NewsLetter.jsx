import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './NewsLetter.module.scss';

const NewsLetter = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={classes.sectionInner}>
                NEWSLETTER
            </div>
        </section>
    )
}

export default NewsLetter;