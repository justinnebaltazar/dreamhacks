import styles from "./Articletwo.module.css";
import React from "react";
import { useState, useEffect} from "react";
import audio from "../../../public/audio/alarm.mp3";
import useSound from "use-sound";


export const ArticleTwo = () => {
    const [playSound] = useSound(audio);
    const [isVisible, setIsVisible] = useState(true);
    const [buttonText, setButtonText] = useState("View article");
    return (
        <div className={styles.container}>
            <div className={styles.articleContainer}>
                <div className={styles.title}>
                </div>
                <div className={styles.article}>
                    {!isVisible && <h1>Waking Up Late: A Relatable Struggle</h1>}
                    {!isVisible && <div className={styles.articletext}>
                        <p>
                        Waking up late is something almost everyone experiences at some point. Maybe you stayed up too late, forgot to set your alarm, or hit the snooze button one too many times. No matter the reason, it’s easy to feel rushed and a little stressed when you realize you’ve overslept.
                        </p>
                        <br></br>
                        <p>
                        When this happens, the best thing to do is stay calm. Take a moment to breathe and focus on what needs to get done first. Prioritize the essentials—whether that’s getting ready quickly, grabbing something small to eat, or making sure you’re on time for important tasks. A clear head makes it easier to catch up.
                        </p>
                        <br></br>
                        <p>
                        Remember, one late start doesn’t ruin the entire day. Be kind to yourself, adjust your schedule if you need to, and move forward. Sometimes, a slow morning can still lead to a productive and positive day!

If waking up late is becoming a habit, it might be time to look at your nighttime routine. Try going to bed a little earlier, limiting screen time before sleep, or setting multiple alarms. Small changes can make a big difference in helping you feel rested and ready to start the day on time.
                        </p>
                        <br></br>
                        <p>
                        At the end of the day, everyone has off mornings. What matters is how you handle them and keep going. Life isn’t about being perfect—it’s about learning, improving, and doing your best, even after a late wake-up.
                     </p>
                    </div> }
                </div>
            </div>

            <br></br>

            <button className={styles.button} onClick={() => {setIsVisible(!isVisible); 
                playSound(); 
                setButtonText(isVisible ? "Hide article" : "View article");}}>
                {buttonText}
            </button>
        </div>
    );
};
