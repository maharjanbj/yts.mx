import '../../../assets/scss/Upcomingmovies.scss'
import { useNavigate } from 'react-router';
import { APIUpcomingMovies } from '../../../api/latestMovies';
import { useEffect, useState } from 'react';

export const Upcomingmovies = () => {
    const [upcomingmovies, setUpcomingmovies] = useState([]);
    const navigate = useNavigate();
    const upcomingMovies = async () => {
        const res = await APIUpcomingMovies();
        setUpcomingmovies(res.data.movies);
    }
    useEffect(() => {
        upcomingMovies();
    }, []);

    return <>
    <section className='upcoming-section'>
        <div className='upcoming-content'>
            <div className="upcoming-movie flex align-center justify-between">
                <div className='upcoming-text'>Upcoming YIFY Movies</div>
                <div className='request-btn'>Request a Movie</div>
            </div>
            <div className='row'>
            {upcomingmovies.map((v,key) =>(
                <div className='browse-movie-wrap' 
                key={key}
                onClick={() => navigate("/upcomingmovie/" + v.id)}
                >
                        <div className='movie-image'
                        >
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