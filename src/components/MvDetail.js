import PropTypes from "prop-types";

function MvDetail({ id, bgImg, mediumCoverImage, title, rating, description, genres, }) {
    return (<div key={id}>
        <img src={bgImg} alt="bg_cover" />
        <br />
        <img src={mediumCoverImage} alt="movie_cover" />
        <h2>{title}</h2>
        ⭐{rating}
        <p>{description}</p>
        <ul>
            {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
    </div>);
}

MvDetail.propTypes = {
    id: PropTypes.number.isRequired,
    bgImg: PropTypes.string.isRequired,
    mediumCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MvDetail;