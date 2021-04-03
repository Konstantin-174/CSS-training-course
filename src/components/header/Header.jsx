import React from 'react';
import classes from '../../styles/Common.module.scss'

const Header = () => {
    return (
        <header className={classes.sectionOuter}>
            <div className={classes.sectionInner}>
                <div className={classes.btnGroup}>
                    <div className={`${classes.btn} + ${classes.primaryBtn}`}>123</div>
                    <div className={`${classes.btn} + ${classes.secondaryBtn}`}>321</div>
                </div>
            </div>
        </header>
    )
}

export default Header;