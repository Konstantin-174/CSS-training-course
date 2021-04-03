import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={classes.sectionOuter}>
            <div className={`${classes.sectionInner} + ${classes.wide} + ${s.wrapper}`}>
                HEADER
            </div>
        </header>
    )
}

export default Header;