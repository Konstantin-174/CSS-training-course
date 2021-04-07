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
                            <BsChevronDown className={s.triggerIcon} size="1.5em" stroke-width="1"/>
                            <div className={s.triggerText}>
                                Reque insolens in vel?
                            </div>
                        </div>
                    </li>
                    <li className={s.item}>
                        <div className={s.trigger}>
                            <BsChevronDown className={s.triggerIcon} size="1.5em" stroke-width="1"/>
                            <div className={s.triggerText}>
                                Vis rebum error graecis ea, id sit postea accusamus?
                            </div>
                        </div>
                    </li>
                    <li className={s.item}>
                        <div className={s.trigger}>
                                <BsChevronUp className={s.triggerIconActive} size="1.5em" stroke-width="1"/>
                            <div className={s.triggerTextActive}>
                                Lorem repudiandae ne nec?
                            </div>
                        </div>
                        <div className={s.content}>
                            <div className={s.contentText}>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            </div>
                            <div>
                                <a href="#" className={`${classes.btn} + ${classes.noBgBtn} + ${s.contentBtn}`}>
                                    Go to documentation
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className={s.item}>
                        <div className={s.trigger}>
                            <BsChevronDown className={s.triggerIcon} size="1.5em" stroke-width="1"/>
                            <div className={s.triggerText}>
                                Ad dicit numquam vel. Et eos iudico feugait percipitur?
                            </div>
                        </div>
                    </li>
                    <li className={s.item}>
                        <div className={s.trigger}>
                            <BsChevronDown className={s.triggerIcon} size="1.5em" stroke-width="1"/>
                            <div className={s.triggerText}>
                                Sea no dico percipitur. Fierent constituam definitiones id eum?
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Faq;