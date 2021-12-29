import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DetailCom({ coverImg, title, description, genres}){
    return (
        <div>
            <h1>{title}</h1>
            <img src={coverImg} alt={title} />
            <p>{description}</p>
            <ul>
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
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default DetailCom;