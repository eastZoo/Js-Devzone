import styles from "./WakDetail.module.css";

function WakDetail() {
  return (
      <>
        <div className={styles.movie}>
            <img src="https://w.namu.la/s/f85dfbe4aa001782a18c7e92d9a28522e0378e2388db5f4ef453968aa066800ca7ddc42f349b8d9cf8e21d2036adf0c87e28ac1a78183b8f1af7c64fbc1d909d5a38edddb4354aa85c241076c650530ff17cca67730ffe51e30d63c215adad3e" className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                <a href="https://www.twitch.tv/jingburger">jingburger</a>
                </h2>
                <h3 className={styles.movie__year}>1995.10.08</h3>
                {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> */}
            </div>
        </div>
        <div className={styles.movie}>
            <img src="https://w.namu.la/s/4caed1c5c9f2c78c855d2613d3100dae825eb265fe35caa55da66c5394e3d30d45474b0aa2696191915b0aa9c1492c8382a589e995a99c4781b6ea2a8d096686b86392fe784fa5bd1f455ef938115cf22b22a4e6fa5463c10deee490d4bc7373" className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                <a href="https://www.twitch.tv/cotton__123">Jururu</a>
                </h2>
                <h3 className={styles.movie__year}>1995.10.08</h3>
                {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> */}
            </div>
        </div>
      </>
  );
}

export default WakDetail;

