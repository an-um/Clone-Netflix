const Section3 = () => {
    return (
        <div className="Container section section3 Sec-card b-gray px-0">
            <div className="row sec-inner mx-3">
                {/* column1  */}
                <div className="col text-section">
                    <h2>Watch everywhere</h2>
                    <p>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV.

                    </p>
                </div>
                    {/* column2  */}
                <div className="col img-section">
                    <div className="image position-relative">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="Image" />
                        <div className="video-played" >
                            <video autoPlay playsinline loop >
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4/" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Section3;