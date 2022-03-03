import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCom from "../components/_Movie/DetailCom";
import styles from "../styles/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovieDetail] = useState([]);

  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
            <DetailCom
              key={movies.id}
              coverImg={movies.medium_cover_image}
              title={movies.title}
              description={movies.description_full}
              likeCount={movies.like_count}
              rating={movies.rating}
              genres={movies.genres}
            />
        </div>
      )}
    </div>
  );
}
export default Detail;