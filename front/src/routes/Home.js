import { React, useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

function Home() {
    return (
        <div className={styles.about__container}>
            <span>eastZoo </span>
            <span>ReactPlayground!!!</span>
        </div>
    );
}

export default Home;

