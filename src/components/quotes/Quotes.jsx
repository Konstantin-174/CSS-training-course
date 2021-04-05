import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './Quotes.module.scss';
import photo from './logo/photo.png'

const Quotes = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={`${classes.sectionInner} + ${s.inner}`}>
                <div className={s.left}>
                    <h5>
                        TESTIMONIALS
                    </h5>
                    <h3>
                        Customers's quotes
                    </h3>
                    <div className={s.text}>
                        Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.
                    </div>
                </div>
                <div className={s.right}>
                    <ul className={s.sliderWrap}>
                        <li className={s.sliderItem}>
                            <div className={s.qoute}>
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                            </div>
                            <div className={s.photo}>
                                <img src={photo} alt="Avatar"/>
                            </div>
                        </li>
                    </ul>
                    <ul className={`${classes.dots} + ${s.dots}`}>
                        <li className={`${classes.dotsItem} + ${classes.dotsItemActive}`}> </li>
                        <li className={classes.dotsItem}> </li>
                        <li className={classes.dotsItem}> </li>
                        <li className={classes.dotsItem}> </li>
                        <li className={classes.dotsItem}> </li>
                        <li className={classes.dotsItem}> </li>
                        <li className={classes.dotsItem}> </li>
                        <li className={classes.dotsItem}> </li>
                        <li className={classes.dotsItem}> </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Quotes;