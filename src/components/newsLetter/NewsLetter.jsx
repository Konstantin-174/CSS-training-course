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
                    <form action="">
                        <input type="text" placeholder="Email address" className={s.input}/>
                        <button className={`${classes.btn} + ${s.btnRight}`}>Save me</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter;