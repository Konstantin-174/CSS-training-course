import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './HeroImage.module.scss'

const HeroImage = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <ul className={s.sliderWrapper}>
                <li className={s.sliderWrapperItem}>
                    <div className={`${classes.sectionInner}`}>
                        <h5>PLAN YOUR LIFE</h5>
                        <h2>
                            Increase your <span>productivity</span>
                        </h2>
                        <div className={s.sliderText}>
                            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an,
                            insolens gubergren similique est cu. Et vel modus congue vituperata.
                        </div>
                        <div className={s.sliderBtnWrap}>
                            <a href="#">
                                <i className={s.iconPlay}>

                                </i>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className={classes.dots}>
                <li className={`${classes.dotsItem} + ${classes.dotsItemActive}`}> </li>
                <li className={classes.dotsItem}> </li>
                <li className={classes.dotsItem}> </li>
            </ul>
        </section>
    )
}

export default HeroImage;