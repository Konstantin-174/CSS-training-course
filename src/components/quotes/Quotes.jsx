import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './Quotes.module.scss';

const Quotes = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={classes.sectionInner}>
                QUOTES
            </div>
        </section>
    )
}

export default Quotes;