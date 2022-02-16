import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Member.module.css";

function Member({ id, name, game_name,title }) {
  return (
    <div className={styles.movie}>
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{name}</Link>
        </h2>
        <h3 className={styles.movie__year}>{game_name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}

Member.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  game_name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Member;