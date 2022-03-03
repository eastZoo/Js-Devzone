import styles from "./WakDetail.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

function WakDetail() {
    const [jingburgerChatter, setjingburgerChatter] = useState([]);
    const [jururuChatter, setjururuChatter] = useState([]);
    const [goseguChatter, setgoseguChatter] = useState([]);

    useEffect(()=> {
      async function fetchChatterData(){
        /* arrow function을 하고 싶으면..
        fetchAirData = async() => {} 으로 하면 됨. */
        const jingburger = await axios.get('http://localhost:8000/jingburger')
        const jururu = await axios.get('http://localhost:8000/jururu')
        const gosegu = await axios.get('http://localhost:8000/gosegu')

        /* const jsonResponseBodyItem = response.data
        response.data가 어떤 구조로 되어 있는 지를 보기 위해 console 사용.
        console.log("jsonResponseBodyItem from App", jsonResponseBodyItem.pm25)
        */
        console.log(jingburger);

        const {jingcount, jingchatter} = jingburger.data
        const {jucount, juchatter} = jururu.data
        const {gocount, gochatter} = gosegu.data

        setjingburgerChatter({jingcount, jingchatter});
        setjururuChatter({jucount, juchatter});
        setgoseguChatter({gocount, gochatter});
      }
      fetchChatterData()
    }, [])
    return (
        <>
            {/* 징버거 */}
            <div className={styles.movie}>
                <img src="https://w.namu.la/s/f85dfbe4aa001782a18c7e92d9a28522e0378e2388db5f4ef453968aa066800ca7ddc42f349b8d9cf8e21d2036adf0c87e28ac1a78183b8f1af7c64fbc1d909d5a38edddb4354aa85c241076c650530ff17cca67730ffe51e30d63c215adad3e" className={styles.movie__img} />
                <div>
                    <h2 className={styles.movie__title}>
                    <a href="https://www.twitch.tv/jingburger">jingburger</a>
                    </h2>
                    <h3 className={styles.movie__year}>1995.10.08</h3>
                    <p>시청자수 : {jingburgerChatter.jingcount}</p>
                </div>
            </div>
            {/* 주르르 */}
            <div className={styles.movie}>
                <img src="https://w.namu.la/s/4caed1c5c9f2c78c855d2613d3100dae825eb265fe35caa55da66c5394e3d30d45474b0aa2696191915b0aa9c1492c8382a589e995a99c4781b6ea2a8d096686b86392fe784fa5bd1f455ef938115cf22b22a4e6fa5463c10deee490d4bc7373" className={styles.movie__img} />
                <div>
                    <h2 className={styles.movie__title}>
                    <a href="https://www.twitch.tv/cotton__123">Jururu</a>
                    </h2>
                    <h3 className={styles.movie__year}>1997.06.10</h3>
                    <p>시청자수 : {jururuChatter.jucount}</p>
                </div>
            </div>
            {/* 고세구 */}
            <div className={styles.movie}>
                <img src="https://w.namu.la/s/82b885b3e83b931afe0c759c996489d4c28c483bf8da5b56cb74300d317944a2ef0b1427803b79ad81fa595800d51068992a4c4df45c759d1ca32aff5e61b61319f887d0a0d5876037615847ca5bc6fd390bf9dbb59e2a166b23a99cf0b5d010" className={styles.movie__img} />
                <div>
                    <h2 className={styles.movie__title}>
                    <a href="https://www.twitch.tv/gosegugosegu">Gosegu</a>
                    </h2>
                    <h3 className={styles.movie__year}>1998.xx.xx</h3>
                    <p>시청자수 : {goseguChatter.gocount}</p>
                </div>
            </div>
            {/* 아이네 */}
            <div className={styles.movie}>
                <img src="https://w.namu.la/s/171fe1be74a1f1c233b5e4ac672880b5278d9d805d91627242ae0f0e1290dcf9754a0f49a1115a7510e6bb2e02b1513926eb03500a7ae44bbb6a502d6c6b0955ab64f42d14e81d5199177717e7f50cc0a9db461b3e27a200be24de5fe75e49a3" className={styles.movie__img} />
                <div>
                    <h2 className={styles.movie__title}>
                    <a href="https://www.twitch.tv/vo_ine">Ine</a>
                    </h2>
                    <h3 className={styles.movie__year}>1994.xx.xx</h3>
                    {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> */}
                </div>
            </div>
            {/* 릴파 */}
            <div className={styles.movie}>
                <img src="https://w.namu.la/s/cf0b2ed076c5dee325c312602422c8f562f343afc2c395d9eda5f14b93a8f5bdd8e9c12479565c2735fc72dc443680b65086fa6682e91f4110768bc6c118388d72ed06e8e80c6547d26ce6289e8a2de80ebdffc229be136e0941a9e542254d28" className={styles.movie__img} />
                <div>
                    <h2 className={styles.movie__title}>
                    <a href="https://www.twitch.tv/lilpaaaaaa">Lilpa</a>
                    </h2>
                    <h3 className={styles.movie__year}>1996.03.09</h3>
                    {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> */}
                </div>
            </div>
            {/* 비찬 */}
            <div className={styles.movie}>
                <img src="https://w.namu.la/s/192bd28fbca9a3467fe6fa663e37c28a2a8b4b18321251622e1f7198924fa404d39e3fe8b22fceb516878a3705744bbbbaf79273b67f89c4c8fd480ed4a7d4125838ac53e37aa200e74531e43b4afd268657c1c06022c7d46d52448ec04462c8" className={styles.movie__img} />
                <div>
                    <h2 className={styles.movie__title}>
                    <a href="https://www.twitch.tv/viichan6">viichan</a>
                    </h2>
                    <h3 className={styles.movie__year}>2000.01.16</h3>
                    {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> */}
                </div>
            </div>
            
        </>
    );
}

export default WakDetail;

