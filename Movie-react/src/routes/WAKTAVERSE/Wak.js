import React from "react";
import styles from "./Wak.module.css";

function Wak() {

    return (
        <div className={styles.about__container}>
            <div>
                <span>Jinburger</span>
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/1d981e78-e882-46f5-a3ea-77699c6c05bd-profile_image-300x300.png"/>
            </div>
            <div>
                <span>Jururu</span>
                <img src="https://w.namu.la/s/4caed1c5c9f2c78c855d2613d3100dae825eb265fe35caa55da66c5394e3d30d45474b0aa2696191915b0aa9c1492c8382a589e995a99c4781b6ea2a8d096686b86392fe784fa5bd1f455ef938115cf22b22a4e6fa5463c10deee490d4bc7373"/>
            </div>
        </div>
    );
}

export default Wak;