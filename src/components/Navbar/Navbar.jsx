import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img className = {styles.logo} src="images\Logo\logo2.png"></img>
                <h1>REM News</h1>
            </div>
            <div className={styles.right}>

               <ul className={styles.navLinks}>
                    
                
                    <li>
                        <Link className={styles.links} to='/About'>About</Link>
                    </li>

                    <li>
                        <Link className={styles.links} to='/Login'>Log In</Link>
                    </li>

                    <li>
                        <Link className={styles.links} to='/register'>Sign up</Link>
                    </li>
         
               </ul>
            </div>
        </div>
        
    )
}