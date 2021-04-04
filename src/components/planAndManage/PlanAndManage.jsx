import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './PlanAndManage.module.scss'
import image from '../planAndManage/img/illustration.png'

const PlanAndManage = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={classes.sectionInner}>
                <div className={s.content}>
                    <img src={image} className={s.image} alt="right picture"/>
                    <h5>DESKTOP AND MOBILE APP</h5>
                    <h3>
                        <span>Plan</span> and <span>manage</span>
                    </h3>
                    <div className={s.text}>
                        Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an,
                        insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea.
                        Mea ex malis mollis oporteat. Eum an expetenda consequat.
                    </div>
                    <div className={classes.btnGroup}>
                        <a href="#" className={`${classes.btn} + ${classes.secondaryBtn}`}>
                            View video <svg width="7" height="8" viewBox="0 0 7 8" fill="none">
                            <path
                                d="M6 2.73354C6.66667 3.11844 6.66667 4.08069 6 4.46559L1.5 7.06367C0.833333 7.44857 0 6.96744 0 6.19764V1.00149C0 0.231691 0.833333 -0.249434 1.5 0.135467L6 2.73354Z"
                                fill="white"/>
                        </svg>
                        </a>
                        <a href="#" className={`${classes.btn} + ${classes.noBgBtn}`}>
                            See features
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlanAndManage;