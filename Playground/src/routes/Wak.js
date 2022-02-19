import styles from "../styles/Wak.module.css";
import WakDetail from "../components/WakDetail"

function Wak() {

    return (
        <>
            <h1 className={styles.h1__title}>WAKTAVERSE Member</h1>
            <div className={styles.container}>
                <dev className={styles.movies}>
                    <WakDetail />
                </dev>
            </div>
        </>
    );
}

export default Wak;