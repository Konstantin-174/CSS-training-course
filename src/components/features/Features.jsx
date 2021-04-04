import React from 'react';
import classes from '../../styles/Common.module.scss'
import logo1 from './icons/1.svg'
import logo2 from './icons/2.svg'
import logo3 from './icons/3.svg'
import logo4 from './icons/4.svg'
import s from './Features.module.scss'

const Features = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={classes.sectionInner}>
                <h5 className={classes.taC}>
                    ABOUT US
                </h5>
                <h4 className={classes.taC}>
                    Read about our app
                </h4>
                <ul className={s.listWrap}>
                    <li className={s.listItem}>
                        <div className={s.icon}>
                            <img src={logo1} alt="logo #1"/>
                        </div>
                        <div className={s.title}>Overview</div>
                        <div className={s.text}>
                            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                        </div>
                    </li>
                    <li className={s.listItem}>
                        <div className={s.icon}>
                            <img src={logo2} alt="logo #2"/>
                        </div>
                        <div className={s.title}>Files</div>
                        <div className={s.text}>
                            No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.
                        </div>
                    </li>
                    <li className={s.listItem}>
                        <div className={s.icon}>
                            <img src={logo3} alt="logo #3"/>
                        </div>
                        <div className={s.title}>Meeting chats</div>
                        <div className={s.text}>
                            Vim ne tacimates neglegentur. Erat diceret omittam at est.
                        </div>
                    </li>
                    <li className={s.listItem}>
                        <div className={s.icon}>
                            <img src={logo4} alt="logo #4"/>
                        </div>
                        <div className={s.title}>Save events</div>
                        <div className={s.text}>
                            Nisl idque mel ea, nominati voluptatum.
                        </div>
                    </li>

                </ul>
                <div className={`${classes.btn} + ${s.btn}`}>
                    <a href="#" className={`${classes.btn} + ${classes.dangerBtn}`}>Read more</a>
                    <span className={s.br}>OR</span>
                    <a href="#" className={`${classes.btn} + ${classes.primaryBtn}`}>Get started</a>
                </div>
            </div>
        </section>
    )
}

export default Features;