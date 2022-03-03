import { useState,useEffect } from "react";

import WakDetail from "../components/Waktaverse/WakDetail"
// import ISEGYEIDOL from "../components/Waktaverse/Isegyeidol"
import Isegyeidols from "../components/Waktaverse/isegyeidol.json";

import styles from "../styles/Wak.module.css";
import wakTitle from "../img/wak_title.png";

function Wak() {
    const [loading, setLoading] = useState(true);
    const [isegyeidols, setisegyeidols] = useState([]);

    const getIsegyeidols = () =>{ 
        setisegyeidols(Isegyeidols.data.idol)
        setLoading(false);
    }

    useEffect(() => {
        getIsegyeidols();
      }, []);
    return (
        <div className={styles.twitch__container}>
            <img src={wakTitle} style={{ width: "100%" }}/>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <>
                    <div className={styles.twitch_lives}>
                        {/* {isegyeidols.map((isegyeidol) => (
                            <ISEGYEIDOL
                                key={isegyeidol.id}
                                name={isegyeidol.name} />
                        ))} */}
                        <div className={styles.wak__detail}>
                            <WakDetail />
                        </div>
                    </div>
                    
                </>
            )}
        </div>
    );
}

export default Wak;