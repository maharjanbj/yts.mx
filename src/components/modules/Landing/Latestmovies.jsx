import { useState } from 'react';
import '../../../assets/scss/Latestmovies.scss';
import { useNavigate } from 'react-router';
import { APILoadMovies } from '../../../api/movie';
// import { APIMoviesDetails } from '../Details/movieDetails';
import { useEffect } from 'react';

export const Latestmovies = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const latestMovies = async () => {
        const res = await APILoadMovies();
        setMovies(res.data.movies);
    }
    // const movieDetails = async () => {
    //     const res = await APIMoviesDetails();
    //     setMovies(res.data.movies);
    // }
    useEffect(() => {
        latestMovies();
        // movieDetails();
    }, []);

    return <>
    <section className='home-section'>
        <div className='home-content'>
            <div className="latest-movie flex align-center justify-between">
                <div className='latest-text'>Latest YIFY Movies Torrents</div>
                <div className='browse-btn'>Browse All</div>
            </div>
            <div className='row'>
            {movies.map((v,key) =>(
                <div className='browse-movie-wrap' 
                key={key}
                onClick={() => navigate("/movie/" + v.id)}
                >
                        <div className='movie-image'>
                            <img src={v.medium_cover_image} alt="" />
                            <div className='movie-name'>{v.title}</div>
                            <div className='blur'>{v.year}</div>
                        </div>
                </div>
                ))}
            </div>
        </div>
    </section>
    </>
}