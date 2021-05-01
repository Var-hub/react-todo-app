import React from 'react';
import styles from './Body.module.css';

const Body = (props) =>{
    return (
        <section className={styles.banner_white}>
            {props.children}
        </section>
    );
}

export default Body