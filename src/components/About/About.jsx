import styles from "./About.module.css"
export const About = () => {

    return (
        <section>
            
            <div className = {styles.container}>
                
                  
                <div className = {styles.textContainer}>
                <h1>About:</h1>
                 <p>
 • REM News came about thanks to a generous donation from SBC (Sleep Board of Canada).   </p>
                    
                    <p> •REM News sources our news directly from the dreams of Canadians through proprietary 
 software that unknowingly scans the Brain waves of Canadians as they sleep. </p>
                    
                    <p>• Critics of our work have claimed that REM news's practices are "invasive" and "illegal" to them, we say: "We know what you were dreaming about last night, and we will release it to the public". </p>
                    </div>

                <div className = {styles.Quote}>
                <p>"It came to our journalists in a dream" </p>
                
                </div>
                   
            </div>
        </section>
    )



}