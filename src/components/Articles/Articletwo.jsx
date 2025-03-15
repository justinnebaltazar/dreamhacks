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
                    {!isVisible && <h1>Article Two</h1>}
                    {!isVisible && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, deserunt aliquid? Porro facere tenetur itaque voluptate, veniam at soluta autem tempore incidunt culpa ullam ea pariatur molestias necessitatibus officiis aperiam?</p>}
                </div>
            </div>
            <button className={styles.button} onClick={() => {setIsVisible(!isVisible); 
                playSound(); 
                setButtonText(isVisible ? "View article" : "Hide article");}}>
                {buttonText}
            </button>
        </div>
    );
};
