import supabase from "../../helper/supabaseClient";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');

        const {data, error} = await supabase.auth.signInWithPassword({
            email: email, 
            password: password,
        });

        if (error) {
            setMessage(error.message);
            setEmail("");
            setPassword("");
            return;
        }

        if (data) {
            navigate("/question");
            return null;
        }
        
    };
    
    return (
        <div id="grad">
            <div className={styles.container}>
                <h2 className={styles.title}>Login</h2>
                <br></br>
                <p>{message && <>{message}</>}</p>
                <form onSubmit={handleSubmit}>
                    <input
                    className={styles.searchbar}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email" placeholder="Email" required/>
                    <br></br>
                    <input 
                    className={styles.searchbar}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password" placeholder="Password" required/>
                    <br></br>
                    <button className={styles.button} type="submit">Login</button>
                </form>
                <br></br>
                <p>Don't have an account? <Link className={styles.link} to='/register'>Register</Link></p>
            </div>
        </div>

        
    )
}