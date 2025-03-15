import { useState, useEffect } from "react";
import styles from "./Articleone.module.css";

export const ArticleOne = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const gradientCenterX = (mouseX / window.innerWidth) * 100;
            const gradientCenterY = (mouseY / window.innerHeight) * 100;
            
            // Get the element using class name with bracket notation for dash
            const revealedArea = document.querySelector(`.${styles['revealedArea']}`);
            
            // Update the background with the new gradient position
            if (revealedArea) {
                revealedArea.style.background = `radial-gradient(
                    circle 280px at ${gradientCenterX}% ${gradientCenterY}%,
                    transparent 10%,
                    rgba(0, 0, 0, 0.98)
                )`;
            }
        };

        // Add event listener when component mounts
        document.addEventListener("mousemove", handleMouseMove);
        
        // Cleanup event listener when component unmounts
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>this is the text i want to see</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ipsam explicabo nulla dolore earum labore et magni 
                    ab veniam expedita dolorem accusamus sit similique voluptate impedit, commodi delectus nesciunt fuga.</p>
                </div>
            </div>
            {/* Spotlight effect */}
            <div className={styles.revealedArea}>

            </div>
        </section>
    );
};