import { useState,useEffect } from "react";
import styles from "../styles/Wak.module.css";
import WakDetail from "../components/Waktaverse/WakDetail"
import ISEGYEIDOL from "../components/Waktaverse/Isegyeidol"
import Isegyeidols from "../components/Waktaverse/isegyeidol.json";
import IdolChat from "../components/Waktaverse/IdolChat";

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
        <div className={styles.container}>
            <h1 className={styles.about__container}>Waktaverse</h1>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <>
                    <div className={styles.movies}>
                        {isegyeidols.map((isegyeidol) => (
                            <ISEGYEIDOL
                                key={isegyeidol.id}
                                name={isegyeidol.name} />
                        ))}
                        {isegyeidols.map((isegyeidol) => (
                            <IdolChat
                                key={isegyeidol.id}
                                name={isegyeidol.name} />
                        ))}
                        <WakDetail />
                    </div>
                </>
            )}
        </div>
    );
}

export default Wak;