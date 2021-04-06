import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './Faq.module.scss'
import {BsChevronUp, BsChevronDown} from "react-icons/bs";

const Faq = () => {
    return (
        <section className={classes.sectionOuter}>
            <div className={classes.sectionInner}>
                <h5 className={classes.taC}>CUSTOMER HELP</h5>
                <h4 className={classes.taC}>
                    Frequently asked questions
                </h4>
                <ul className={s.accordion}>
                    <li className={s.item}>
                        <div className={s.trigger}>
                                <BsChevronUp className={s.triggerIcon} size="1.5em"/>
                            <div className={s.triggerText}>
                                Lorem repudiandae ne nec?
                            </div>
                        </div>
                        <div className={s.content}>
                            <div className={s.contentText}>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            </div>
                            <div className={`${classes.btn} + ${classes.noBgBtn} + ${s.contentBtn}`}>
                                <a href="#">
                                    Go to documentation
                                </a>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}

export default Faq;