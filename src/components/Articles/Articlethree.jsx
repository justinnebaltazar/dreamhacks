import { useState, useEffect } from "react";
import styles from "./Articlethree.module.css";



export const ArticleThree = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>79% of Politicians think about fraud "For fun"</h1>

                    <p>In an unprecedented leap forward for investigative journalism (and potentially law enforcement), mind-reading journalist from REM News has uncovered the deepest, darkest secrets of the political elite. After a week of telepathically snooping through the minds of high-ranking officials, the journalist has released shocking data: 79% of politicians spend a disturbing amount of time daydreaming about committing fraud "for fun."</p>

                    <h2>THE WILD THOUGHTS OF THE POLITICAL ELITE</h2>
    
                    <ul>
                        <li><strong>"What if I create a fake country and apply for UN funding?"</strong> - Thought by an unnamed world leader who was also mentally designing a flag for his imaginary nation.</li>
                        <li><strong>"Could I legally marry myself for tax benefits?"</strong> - A governor who shall remain nameless, but whose wedding invitations are already mentally drafted.</li>
                        <li><strong>"What if I start a pyramid scheme where the bottom tier is just <em>more</em> politicians?"</strong> - A mayor who had clearly been watching too many business guru YouTube videos.</li>
                        <li><strong>"I bet if I sold bottled air from my home state, people would buy it."</strong> - A senator who apparently doesn’t realize that this already exists.</li>
                    </ul>

                    <h2>WHY FRAUD? WHY FUN?</h2>
                    
                    <p>Experts in political psychology (who were NOT granted mind-reading powers, unlike the journalist) suggest that the high-pressure environment of governance, combined with the thrill of getting away with things, might make fraud fantasies <em>weirdly entertaining</em> for politicians.</p>

                    <h2>WHAT THIS MEANS FOR THE FUTURE</h2>

                    <p>"Sure, 79% of politicians are mentally sketchy," the journalist admits. "But if we arrested people for <em>thinking</em> about fraud, we’d have to start locking up people who imagine elaborate heist movies while doing their taxes. The real problem is the 21% who <strong>don’t</strong> think about fraud at all—what are they planning that’s <strong>worse</strong> than fraud?!"</p>

                    <p>Stay tuned for further shocking revelations in REM News, as soon as the journalist recovers from the absolute madness he has uncovered inside the minds of the world’s leaders.</p>
                </div>
            </div>

    
        </section>
    );
};