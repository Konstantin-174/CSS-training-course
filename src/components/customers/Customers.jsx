import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './Customers.module.scss'

const Customers = () => {
    return (
        <section className={classes.sectionOuter}>
            <div className={`${classes.sectionInner} + ${s.wrapper}`}>
                CUSTOMERS
            </div>
        </section>
    )
}

export default Customers;