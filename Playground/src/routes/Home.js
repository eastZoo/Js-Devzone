import { React, useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

function Home() {
    useEffect(() => {
        const fetchData = async () => {
          await axios.post('https://id.twitch.tv/oauth2/token?client_id=7vc748yqx23emfsp7vt695wmsjwfea&client_secret=29gvk3p37pkz7gt0ytkj2gjliy4eij&grant_type=client_credentials')
          .then(response => console.log(response.data))
        }
        fetchData()
      })

    return (
        <div className={styles.about__container}>
            <span>eastZoo </span>
            <span>ReactPlayground!!!</span>
        </div>
    );
}

export default Home;

