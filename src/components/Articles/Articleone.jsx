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
                    <h2 className={styles.title}>Understanding the Psychology Behind Fear of the Dark Among Students</h2>
                    <p>In recent years, artificial intelligence (AI) has swiftly transitioned from a futuristic concept to a tangible force reshaping various sectors, with education at the forefront. As students increasingly engage with technological advancements in classrooms and beyond, the implications of AI on learning methodologies, resource accessibility, and personalized education experiences are profound. This article explores how AI is revolutionizing education, its potential benefits and challenges, and what students should know as they adapt to this rapidly evolving landscape.</p>
                    <p>Artificial intelligence technologies are no longer confined to high-end research labs or corporate boardrooms; they have firmly established their presence in educational institutions across the globe. From intelligent tutoring systems that provide personalized feedback to AI-driven platforms that enhance administrative efficiency, the integration of AI in education is reshaping the way students learn and teachers instruct. According to a recent report by the International Society for Technology in Education, over 60% of schools in developed nations have begun to experiment with AI-powered educational tools.</p>
                </div>
            </div>
            {/* Spotlight effect */}
            <div className={styles.revealedArea}>

            </div>
        </section>
    );
};