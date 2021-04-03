import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './HeroImage.module.scss'

const HeroImage = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={classes.sectionInner}>
                HERO IMAGE
            </div>
        </section>
    )
}

export default HeroImage;