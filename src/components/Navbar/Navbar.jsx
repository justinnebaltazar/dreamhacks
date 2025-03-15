import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>REM News</h1>
            </div>
            <div className={styles.right}>
                <p>News Feed</p>
                <p>About</p>
                <p>Log In</p>
                <p>Sign Up</p>
            </div>
        </div>
        
    )
}