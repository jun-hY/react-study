import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading((prev) => !prev);
    }

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <h1>Movies</h1>
                    {
                        movies.map((item) =>
                            <Movie
                                id={item.id}
                                mediumCoverImage={item.medium_cover_image}
                                title={item.title}
                                rating={item.rating}
                                summary={item.summary}
                                genres={item.genres}
                            />
                        )

                    }
                </div>
            }

        </div>
    );
}

export default Home;