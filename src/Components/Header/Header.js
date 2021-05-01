import React from 'react';
import styles from './Header.module.css';
const Header = () =>{
    return(
        <div className={styles.header}>
            <h1>ToDo</h1>
            <label for="switcher">
                Dark Mode
                <input type="checkbox" id="switcher" />
            </label>
        </div>
    );
}

export default Header;