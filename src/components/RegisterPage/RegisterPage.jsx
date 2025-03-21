import { useState } from "react"
import supabase from "../../helper/supabaseClient";
import styles from "./RegisterPage.module.css";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [username, setUserName] = useState(''); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');

        const {data, error} = await supabase.auth.signUp({
            email: email, 
            password: password, 
            options: {
                data: {
                    username: username
                }
            }
        });

        if (error) {
            setMessage(error.message);
            return;
        }

        if (data) {
            setMessage("User account created!")
        }
        
        setEmail("");
        setPassword("");
        setUserName("");
    };
      
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Register</h2>
            <div className={styles.input}>
                    <input 
                    className={styles.searchbar}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email" 
                    placeholder="Email" 
                    required/>
            </div>
            <br></br>
            <div className={styles.input}>
                    <input className={styles.searchbar}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                    required
                    />

                <br></br>
                <br></br>
                <button className={styles.button} type="submit">create account</button>
                <p>Already have an account?   <Link to="/login">Login</Link></p>
            </div>
            </form>
        </div>
    )
}