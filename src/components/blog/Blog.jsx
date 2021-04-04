import React from 'react';
import classes from '../../styles/Common.module.scss'
import s from './Blog.module.scss'

const Blog = () => {
    return (
        <section className={`${classes.sectionOuter} + ${s.wrapper}`}>
            <div className={classes.sectionInner}>
                <h5 className={classes.taC}>OUR RESOURCES</h5>
                <h4 className={classes.taC}>
                    Read about our app
                </h4>
                <ul className="slider-blog">
                    <li className="slider-blog__item">
                        <div className="slider-blog__item-gallery">

                        </div>
                        <div className="slider-blog__item-content">
                            <h3 className="title">
                                How to start planning
                            </h3>
                            <div className="text">
                                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit
                                tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes
                                mei ea.
                                Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...
                            </div>
                            <div className={classes.btnGroup}>
                                <a href="#" className={`${classes.btn} + ${classes.primaryBtn}`}>
                                    Read now
                                </a>
                                <a href="#" className={`${classes.btn} + ${classes.noBgBtn}`}>
                                    Add to your bookmarks
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
            </div>
        </section>
    )
}

export default Blog;