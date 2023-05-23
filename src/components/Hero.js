import logo from '../images/logo.png';
// import arrow from '../images/icon-arrow.png';

const Hero = () => {
    return(
        <div className="hero b-gray">
            <div className="main">
                {/* navbar  */}
                <div className="navbar mx-lg-5 mx-3">
                    <div className="nav-item">
                        <a href="#" className="navbar-brand">
                        <img src={logo} width="120px" alt="Netflix" />
                        </a>
                        <a href="" id="signIn">See Movies</a>
                    </div>
                </div>
                {/* banner area  */}
                <div className="banner d-flex pt-5 m-5">
                    <h1>Unlimited movies, TV</h1>
                    <h1>Shows, and more.</h1>
                    <h3>Watch Anywhere, Cencel Anytime.</h3>
                    <h5>Ready to watch? Enter your Email to create and restart your membership. </h5>
                      {/* get started  */}
                      <div className="get-started d-flex">
                        <input type="email" placeholder='Email Address' class='input'/>
                        <button type='submit' className='submit btn'>Get Started 
                        <i class="fa-regular fa-greater-than"></i>
                        </button>
                      </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;