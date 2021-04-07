import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './GetStarted.module.scss';

const GetStarted = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={`${classes.sectionInner} + ${classes.taC} + ${s.inner}`}>
                <h5>PLAN YOUR LIFE</h5>
                <h2>
                    Get <span>started</span> now
                </h2>
                <div className={s.text}>
                    Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
                </div>
                <div className={classes.btnGroup}>
                    <a href="#" className={`${classes.btn} + ${classes.secondaryBtn} + ${s.btn}`}>
                        View pricing
                    </a>
                    <a href="#" className={`${classes.btn} + ${classes.noBgBtn}`}>
                        Read documentation
                    </a>
                </div>
            </div>
        </section>
    )
}

export default GetStarted;