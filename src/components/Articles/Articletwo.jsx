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
                    {!isVisible && <h1>REM News: The Dream That Became Headlines</h1>}
                    {!isVisible && <div>
                        <p>
                        In Canada, there's a news outlet like no other: REM News, where the stories come straight from the dreams of unsuspecting Canadians. Using top-secret tech, they scan brain waves while people sleep and then share their wildest, weirdest dreams with the world. Think of it as journalism, but with way more pajamas involved.
                        </p>
                        <br></br>
                        <p>
                        “We believe dreams hold the answers to society’s biggest questions,” says REM News, conveniently skipping the whole "asking permission" part. They’ve posted everything from politicians dreaming of giant waffles to someone else having a nightmare about being late to a Zoom call.
                        </p>
                        <br></br>
                        <p>
                        Critics? Oh, they've got them. “This is illegal and invasive!” says one outraged privacy group. But REM News responds with a grin: “We know what you dreamed about last night... and we're totally posting it.” They've even promised a scoop on a government official who dreamed about a public uprising. Drama? Check.
                        </p>
                        <br></br>
                        <p>
                        Is it ethical? Probably not. Is it entertaining? Definitely. Just know, next time you sleep, REM News might be there—watching, recording, and ready to share your dream about being chased by a giant donut with the world.
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
