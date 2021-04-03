import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={`${classes.sectionInner} + ${classes.wide} + ${s.inner}`}>
                FOOTER
            </div>
        </footer>
    )
}

export default Footer;