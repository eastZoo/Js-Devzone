import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function DetailCom({ coverImg, title, description,likeCount, rating, genres}){
    return (
        <div className={styles.movie}>
            <h1 className={styles.movie__title__detail}>{title}</h1>
            <img src={coverImg} alt={title} className={styles.movie__img}/>
            <div className={styles.movie__genres}>
                Rating : {rating}
                like : {likeCount}
            </div>
            <p>{description}</p>
            <ul className={styles.movie__genres}>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

DetailCom.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    rating : PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default DetailCom;