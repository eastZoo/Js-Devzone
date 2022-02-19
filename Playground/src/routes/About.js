import React from "react";
import styles from "../styles/About.module.css";

function About(props) {
    console.log(props);
    return (
        <div className={styles.about__container}>
            <span>
                "Freedom is the freedom to say that two plus two make four. If
                that is granted, all else
                follows."
            </span>
            <span>- George Orwell, 1984</span>
        </div>
    );
}

export default About;