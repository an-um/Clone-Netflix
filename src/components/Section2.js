const Section2 = () => {
  return (
    <>
      <div className="container section section2 Sec-card b-gray px-0">
        <div className="row sec-inner mx-2">
          {/* col1  */}

          <div className="col video-sec d-flex column2 position-relative">
            <div className="vedio">
              <img
                src="https://netflix-react-uzair.netlify.app/static/media/section2img-1.063578d5b6d5ab4155ec.jpg"
                alt=""
                width="535"
              />
            </div>
            {/* Desktop & large screenSize  */}
            <div className="left-bottom d-flex ">
              <img
                src="https://netflix-react-uzair.netlify.app/static/media/section2img-2.347f4ee3bafbdfe71112.jpg"
                alt=""
                width="40px"
              />
              <div className="downloading">
                <h4>Stranger Things</h4>
                <span>Downloading...</span>
              </div>
              <div className="d-icon">
                <img
                  src="https://netflix-react-uzair.netlify.app/static/media/download-icon.1ce72c891b52e6f68f2f.gif"
                  alt="Icon"
                  width="50px"
                />
              </div>
            </div>
            {/* medium & small screenSize and less  */}

            {/* <div className="left-bottom-mob d-flex d-lg-none">
              <img
                src="https://netflix-react-uzair.netlify.app/static/media/section2img-2.347f4ee3bafbdfe71112.jpg"
                alt=""
                width="20px"
                height="64px"
              />
              <div className="downloading">
                <h4>Stranger Things</h4>
                <span>Downloading...</span>
              </div>
              <div className="d-icon">
                <img
                  src="https://netflix-react-uzair.netlify.app/static/media/download-icon.1ce72c891b52e6f68f2f.gif"
                  alt="Icon"
                  width="50px"
                />
              </div>
            </div> */}
          </div>
          {/* col-2  */}
          <div className="col pt-5 column1">
            <h1>Download your shows to watch offline.</h1>
            <h3>
              Save your favorites easily and always have something to watch.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section2;
