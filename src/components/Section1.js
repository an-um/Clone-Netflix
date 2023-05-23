const Section1 = () =>{
    return(
        <div className="container section Sec-card b-gray">
            <div className="row sec-inner">
                {/* col1  */}
                <div className="col pt-5 column1">
                    <h1>Enjoy on Your TV.</h1>
                    <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>

                </div>
                {/* col-2  */}
                <div className="col video-sec d-flex column2">
                    <img src="https://netflix-react-uzair.netlify.app/static/media/tv.0049bc70babc1f94cf88.png" alt="" width="450" />
                    <video width="357" autoPlay playsinline loop>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
                    </video>


                </div>
            </div>
        </div>
    );
}
export default Section1;