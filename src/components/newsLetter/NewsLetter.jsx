import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './NewsLetter.module.scss';

const NewsLetter = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={`${classes.sectionInner} + ${s.inner}`}>
                <div className={s.left}>
                    <div className={s.title}>
                        Sign up for newsletter
                    </div>
                    <div className={s.text}>
                        Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.
                    </div>
                </div>
                <div className={s.right}>
                    <div className={classes.btnGroup}>
                        <a href="#" className={`${classes.btn} + ${classes.secondaryBtn}`}>
                            Email address
                        </a>
                        <a href="#" className={`${classes.btn} + ${classes.noBgBtn}`}>
                            Save me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter;