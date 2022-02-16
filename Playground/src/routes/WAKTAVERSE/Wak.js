import { useEffect, useState } from "react";
import Member from "../../components/Member"
import styles from "./Wak.module.css";

function Wak() {
  const [loading, setLoading] = useState(true);
  const [member, setMember] = useState([]);
  const getMember = async () => {
    const json = await (
      await fetch(
        `https://api.twitch.tv/helix/channels?broadcaster_id=jingburger`
      )
    ).json();
    setMember(json.data);
    setLoading(false);
  };
  useEffect(() => {
    getMember();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
            <Member
              key={member.id}
              id={member.id}
              name={member.broadcaster_name}
              game_name={member.game_name}
              title={member.title}
            />
        </div>
      )}
    </div>
  );
}
export default Wak;