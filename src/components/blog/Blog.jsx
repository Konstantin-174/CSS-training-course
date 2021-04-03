import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './Blog.module.scss'

const Blog = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={classes.sectionInner}>
                BLOG
            </div>
        </section>
    )
}

export default Blog;