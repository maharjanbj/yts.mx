import '../assets/scss/Details.scss'
import popcorn from '../assets/images/popcorn-removebg-preview.png'
import imdb from '../assets/images/imdb-removebg-preview.png'
import tomato from '../assets/images/rotten-tomatoes-removebg-preview.png'
import { useState, useEffect } from 'react'
import { APImovieDetails, APImovieDetailsSuggestions } from '../components/modules/Details/movieDetails'
import { useNavigate, useParams } from 'react-router'
// import { APISearchMoviesParams}

export const Details = () => {

    const [movie,setMovie] = useState({});
    const [suggestionMovies, setsuggestionMovies] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const loadMoviesDetails = async () => {
        const res = await APImovieDetails();
        setMovie(res.data.movie);
    }
    const loadMoviesSuggestions = async () => {
        const res = await APImovieDetailsSuggestions(id ?? "");
        const res2 = await APImovieDetailsSuggestions("avenger");
        setsuggestionMovies(res.data.movies);
    }
    useEffect(() => {
        loadMoviesDetails();
        loadMoviesSuggestions();
    }, [id]);
    return <>
        <section className="list-section">
            <div className="list-container">
                <div className='browse-movie-wrap'>
                    <div className='movie-image'>
                        <div className='image-box'>
                        <img src={movie.medium_cover_image} alt="img" />
                        </div>
                        <div className='download-btn'><span className="material-icons blur">download</span>Download</div>
                        <div className='watch-btn'>Watch Now</div>
                    </div>
                    <div className="movie-details">
                        <div className='movie-name'>{movie.title}</div>
                        <div className='blur'>{movie.year}</div>
                        <div className='blur'>Action / Adventure / Thriller</div>
                        <div className='txt'>
                            <div className='image-area flex align-center'>
                                {/* <div className='details-img'> */}
                                    <span className='material-icons heart'>favorite</span>
                                {/* </div> */}
                                <div className='text'>198</div>
                            </div>
                            <div className='image-area flex align-center'>
                                <div className='details-img'><img src={tomato} alt="tomato" /></div>
                                <div className='text'>100% TOMATOMETER</div>
                            </div>
                            <div className='image-area flex align-center'>
                                <div className='details-img'><img src={popcorn} alt="popcorn" /></div>
                                <div className='text'>88% AUDIENCE</div>
                            </div>
                            <div className='image-area flex align-center'>
                                <div className='details-img'><img src={imdb} alt="imdb" /></div>
                                <div className='text'>7.5/10 <span className="material-icons star">star</span> 4.4K</div>
                            </div>
                        </div>
                    </div>
                    <div className='third-part'>
                        <div className='title'>Similar Movies</div>
                        <div className='similar-movies'>
                            {suggestionMovies.map((v,key) => (
                                <div 
                                className='similar-movies-img'
                                key={key}
                                onClick={() => navigate("/movie/" + v.id)}
                                >
                                    <img src={v.medium_cover_image} alt="movie" />
                                </div>
                            ))}
                            {/* <div className='similar-movies-img'><img src="https://img.yts.mx/assets/images/movies/nowhere_2023/medium-cover.jpg" alt="movie" /></div>
                            <div className='similar-movies-img'><img src="https://img.yts.mx/assets/images/movies/nowhere_2023/medium-cover.jpg" alt="movie" /></div>
                            <div className='similar-movies-img'><img src="https://img.yts.mx/assets/images/movies/nowhere_2023/medium-cover.jpg" alt="movie" /></div>
                            <div className='similar-movies-img'><img src="https://img.yts.mx/assets/images/movies/nowhere_2023/medium-cover.jpg" alt="movie" /></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}