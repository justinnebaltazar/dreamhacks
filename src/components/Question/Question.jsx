import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Question.module.css";

export const Question = () => {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Convert answer to lowercase and trim whitespace for comparison
        const formattedAnswer = answer.trim().toLowerCase();
        
        if (formattedAnswer === "red") {
            navigate("/article-one");
        } else {
            // Wrong answer - show error
            setError("Incorrect. Please try again.");
        }
    };
    
    return (
        <section>
            <div className={styles.container}>
                <h2>What is the first colour of the rainbow?</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type your answer..."
                        required
                        value={answer}
                        onChange={(e) => {
                            setAnswer(e.target.value);
                            setError(""); // Clear error when typing
                        }}
                    />
                    <button type="submit">Submit</button>
                    {error && <p className={styles.error}>{error}</p>}
                </form>
            </div>
        </section>
    );
};