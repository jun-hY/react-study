import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MvDetail from "../components/MvDetail";


function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getId = useParams().id;
    const getDetail = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${getId}`)).json();
        setMovie(json.data.movie);
        setLoading((prev) => !prev);
    }
    useEffect(() => {
        getDetail();
    }, []);
    console.log(movie)
    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <MvDetail
                    id={movie.id}
                    bgImg={movie.background_image}
                    mediumCoverImage={movie.medium_cover_image}
                    title={movie.title}
                    rating={movie.rating}
                    description={movie.description_full}
                    genres={movie.genres}
                />
            }
        </div>
    )
}

export default Detail;