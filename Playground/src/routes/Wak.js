import { useState,useEffect } from "react";
import styles from "../styles/Wak.module.css";
import WakDetail from "../components/Waktaverse/WakDetail"
import ISEGYEIDOL from "../components/Waktaverse/Isegyeidol"
import Isegyeidols from "../components/Waktaverse/isegyeidol.json";

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
                        <WakDetail />
                    </div>
                </>
            )}
        </div>
    );
}

export default Wak;