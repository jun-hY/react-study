import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, mediumCoverImage, title, rating, summary, genres, }) {
    return (<div key={id}>
        <img src={mediumCoverImage} alt="movie_cover" />
        <br />
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        ⭐{rating}
        <p>{summary}</p>
        <ul>
            {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
    </div>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    mediumCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;