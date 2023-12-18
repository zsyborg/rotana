const Footer = ({ bg, extraClass }) => {
  return (
    <footer className="main-footer black-bg pt-10" id="contact">
    {/* <img src="assets/images/footer.jpg" /> */}
    <div className="container">
      {/*=== Footer Top ===*/}
      <div className="footer-top pt-40 wow fadeInUp">
        <div className="row">
          
         
          <div className="col-lg-3 col-sm-6">
            {/*=== Social Box ===*/}
            <div className="social-box mb-40 float-lg-end d-none">
              <ul className="social-link">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*=== Footer Widget ===*/}
      <div className="footer-widget-area pt-25 pb-30">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/*=== Footer Widget ===*/}
            <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">About</h4>
              <div className="footer-content">
                <p>
                At ROTANA Tours & Travels, we pride ourselves in providing excellent service and focusing only on 
one goal: your absolute comfort. We are recognized by the Government of India and the Government 
of Saudi Arabia for our commitment of delivering an exceptional experience for pilgrims who perform 
Hajj as well as Umrah with us
                </p>
                <a href="#" className="footer-logo">
                  <img
                    src="assets/images/logo/RotanaLogoWhite.png"
                    alt="Rotana Logo"
                    width="400"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            {/*=== Footer Widget ===*/}
            <div className="footer-widget service-nav-widget mb-40 pl-lg-70 wow fadeInDown d-none">
              <h4 className="widget-title">Services</h4>
              <div className="footer-content">
                <ul className="footer-widget-nav">
                  <li>
                    <a href="#">Caravan Soler Tent</a>
                  </li>
                  <li>
                    <a href="#">Family Tent Camping</a>
                  </li>
                  <li>
                    <a href="#">Classic Tent Camping</a>
                  </li>
                  <li>
                    <a href="#">Wild Tent Camping</a>
                  </li>
                  <li>
                    <a href="#">Small Cabin Wood</a>
                  </li>
                </ul>
                <ul className="footer-widget-nav">
                  <li>
                    <a href="#">Need a Career ?</a>
                  </li>
                  <li>
                    <a href="#">Latest News &amp; Blog</a>
                  </li>
                  <li>
                    <a href="#">Core Features</a>
                  </li>
                  <li>
                    <a href="#">Meet Our teams</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-none">
            {/*=== Footer Widget ===*/}
            <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100 wow fadeInUp">
              <h4 className="widget-title">Newsletter</h4>
              <div className="footer-content">
                <p>
                  Which of us ever undertake laborious physical exercise
                  except obtain
                </p>
                <form>
                  <div className="form_group">
                    <label>
                      <i className="far fa-paper-plane" />
                    </label>
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Email Address"
                      name="email"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Footer Copyright ===*/}
      <div className="footer-copyright">
        <div className="row">
          <div className="col-lg-6">
            {/*=== Footer Text ===*/}
            <div className="footer-text">
              <p>
                Copyright@ 2023 <span style={{ color: "#F7921E" }}>Rotana Tours & Travels</span>
                , All Right Reserved
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            {/*=== Footer Nav ===*/}
            <div className="footer-nav float-lg-end d-none">
              <ul>
                <li>
                  <a href="#">Setting &amp; privacy</a>
                </li>
                <li>
                  <a href="#">Faqs</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};
export default Footer;
