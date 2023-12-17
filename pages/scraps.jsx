      {/*====== Start Booking Section ======*/}
      <section className="booking-section pt-60 pb-50 d-none hidden">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              {/*=== Booking Content Box ===*/}
              <div className="booking-content-box mb-50 wow fadeInLeft">
                <div className="section-title mb-50">
                  <span className="sub-title">Availability</span>
                  <h2>Booking Your Best Tour Camping Availability</h2>
                </div>
                <form className="booking-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>
                          <i className="far fa-calendar-alt" />
                        </label>
                        <input
                          type="text"
                          className="form_control datepicker"
                          placeholder="Check In"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>
                          <i className="far fa-calendar-alt" />
                        </label>
                        <input
                          type="text"
                          className="form_control datepicker"
                          placeholder="Check Out"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>
                          <i className="far fa-user-alt" />
                        </label>
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Guest"
                          name="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <select className="wide">
                          <option data-display="Accommodations">
                            Accommodations
                          </option>
                          <option value={1}>Classic Tent</option>
                          <option value={1}>Forest Camping</option>
                          <option value={1}>Small Trailer</option>
                          <option value={1}>Tree House Tent</option>
                          <option value={1}>Tent Camping</option>
                          <option value={1}>Couple Tent</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <textarea
                        name="comments"
                        placeholder="Comments"
                        className="form_control"
                        cols={8}
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="form_group">
                        <button className="main-btn primary-btn">
                          Check availability
                          <i className="fas fa-paper-plane" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Booking Image Box ===*/}
              <div className="booking-image-box mb-50 ml-lg-45 wow fadeInRight">
                <img
                  src="assets/images/contact/contact-1.jpg"
                  className="radius-60"
                  alt="Contact Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}

      



























      <Slider
            {...sliderActive4Item}
            className="slider-active-4-item wow fadeInUp"
          >
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-1.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Tent Camping Services</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-2.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Trailers and RV Spots</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-3.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Adventure and Climbing</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-4.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Couple Camping or Cabin</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-1.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Tent Camping Services</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-2.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Trailers and RV Spots</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-3.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Adventure and Climbing</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-4.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Couple Camping or Cabin</h4>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <p>Set unde omnis estenatus voluptatem aperiae.</p>
                </div>
              </div>
            </div>
          </Slider>