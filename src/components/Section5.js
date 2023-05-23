const Section5 = () => {
  return (
    <>
      <div className="container section section5 Sec-card b-gray px-0">
        <div className="row sec-inner mx-2">
          {/* col1  */}
          <div className="col pt-5 column1">
            <h1>Frequently Asked Question</h1>
          </div>
          {/* col-2  */}
          <div className="col video-sec column2 p-4">
            <div class="accordion" id="accordionExample">
              {/* Accordion Item #1  */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What Is Netflix ?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices.You can
                    watch as much as you want, whenever you want without a
                    single commercial all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </div>
                </div>
              </div>
              {/* Accordion Item #2 */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How Much Does Netflix Cost ?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from Rs250 to Rs1,100 a month. No extra costs, no
                    contracts.
                  </div>
                </div>
              </div>
              {/* Accordion Item #3  */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Where Can I Watch ?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Watch anywhere, anytime. Sign in with your Netflix account
                    to watch instantly on the web at netflix.com from your
                    personal computer or on any internet-connected device that
                    offers the Netflix app, including smart TVs, smartphones,
                    tablets, streaming media players and game consoles. You can
                    also download your favorite shows with the iOS, Android, or
                    Windows 10 app. Use downloads to watch while you're on the
                    go and without an internet connection. Take Netflix with you
                    anywhere.
                  </div>
                </div>
                </div>
                {/* Accordion Item #4  */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How Do I Cancel ?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Netflix is flexible. There are no pesky contracts and no
                      commitments. You can easily cancel your account online in
                      two clicks. There are no cancellation fees – start or stop
                      your account anytime.
                    </div>
                  </div>
                </div>
                {/* Accordion Item #5  */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What Can I Watch On Netflix ?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Netflix has an extensive library of feature films,
                      documentaries, TV shows, anime, award-winning Netflix
                      originals, and more. Watch as much as you want, anytime
                      you want.
                    </div>
                  </div>
                </div>
                {/* Accordion Item #6  */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Where Can I Watch ?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Watch anywhere, anytime. Sign in with your Netflix account
                      to watch instantly on the web at netflix.com from your
                      personal computer or on any internet-connected device that
                      offers the Netflix app, including smart TVs, smartphones,
                      tablets, streaming media players and game consoles. You
                      can also download your favorite shows with the iOS,
                      Android, or Windows 10 app. Use downloads to watch while
                      you're on the go and without an internet connection. Take
                      Netflix with you anywhere.
                    </div>
                  </div>
                </div>
              
            </div>
            <h5 className="p-3">Ready to watch? Enter your email to create or restart your membership.
</h5>
<div className="get-started d-flex">
                        <input type="email" placeholder='Email Address' class='input'/>
                        <button type='submit' className='submit btn'>Get Started 
                        <i class="fa-regular fa-greater-than"></i>
                        </button>
                      </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section5;
