import '../../../assets/scss/Hero.scss';
import { Latestmovies } from './Latestmovies';
import { Upcomingmovies } from './Upcomingmovies';

export const Hero = () => {
    return <>
    <section className="hero-section">
        <div className="hero-container">
            <div className='hero-text flex-centered'>
                <h1>Download YTS YIFY movies: HD smallest size</h1>
                <p>Welcome to the official <b>YTS.MX</b> website. Here you can browse and download YIFY movies in excellent 720p, 1080p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
                <div className='important'>IMPORTANT - YTS.MX is the only new offical domain for YIFY Movies</div> </p>
            </div>
            <div className='flex align-center'>
                <div className='twitter'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png" alt="telegram" /></div>
                <div className='link'>YTSMX_UPDATES</div>
                <div className='twitter'><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="twitter" /></div>
                <div className='link'>Upcoming: THE EQUALIZER 3 on 3 October 2023.</div>
            </div>
            <div className='popular-downloads'>
                <div id='popular-downloads'>
                    <div className='flex star align-center'><span className='material-icons star-icon'>star</span>Popular Downloads</div>
                    <div className='flex wifi align-center'><span className='material-icons wifi-icon'>wifi</span>more featured...</div>
                </div>

                {/* movie list start */}
                <div className='row'>
                    <div className='browse-movie-wrap'>
                        <div className='movie-image'>
                            <img src="https://img.yts.mx/assets/images/movies/nowhere_2023/medium-cover.jpg" alt="img" />
                            <div className='movie-name'>[ES] Nowhere
                            <div className='blur'>2023</div></div>
                        </div>
                    </div>
                    <div className='browse-movie-wrap'>
                        <div className='movie-image'>
                            <img src="https://img.yts.mx/assets/images/movies/flora_and_son_2023/medium-cover.jpg" alt="img" />
                            <div className='movie-name'>Flora and Son
                            <div className='blur'>2023</div></div>
                        </div>
                    </div>
                    <div className='browse-movie-wrap'>
                        <div className='movie-image'>
                            <img src="https://img.yts.mx/assets/images/movies/the_wonderful_story_of_henry_sugar_2023/medium-cover.jpg" alt="img" />
                            <div className='movie-name'>The Wonderful Story of Henry Sugar
                            <div className='blur'>2023</div></div>
                        </div>
                    </div>
                    <div className='browse-movie-wrap'>
                        <div className='movie-image'>
                            <img src="https://img.yts.mx/assets/images/movies/reptile_2023/medium-cover.jpg" alt="img" />
                            <div className='movie-name'>Reptile
                            <div className='blur'>2023</div></div>
                        </div>
                    </div>
                </div>
                {/* movie list end */}

            </div>
            <div className='warning-download'>
                <div id='warning-download'>
                    <div className='title'>
                        <h1>Warning! Download only with VPN...</h1>
                    </div>
                    <div className='text'>
                        <p>Downloading torrents is risky for you: your IP and leaked private data being actively tracked by your <b>ISP</b> and <b>Government Agencies</b> Protect yourself from expensive lawsuits and fines NOW! You must use a VPN like <b>Private</b>. It is the only way to download torrents fully anonymous by encrypting all traffic with zero logs.</p>
                        <p className='second-text'>Personal data disclosing your identity: your IP address, 113.199.228.103 is exposed, which points directly to your location in Nepal. You are browsing with Chrome 117.0.0.0 (Android), resolution 1203x900px, 4-cores CPU.
                        </p>
                        <p className='third-text'>"Do not risk it! Protect yourself right now by downloading Private VPN" -William</p>
                    </div>
                    <div className='btn'>Download Private VPN</div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <Latestmovies />
    </section>
    <section>
        <Upcomingmovies />
    </section>
    </>
}
