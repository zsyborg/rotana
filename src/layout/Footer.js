import { InstagramEmbed, EmbedToggler } from 'react-social-media-embed';
import Menu from './Menu';
import FooterMenu from './FooterMenu';


const Footer = ({ bg, extraClass }) => {
  return (
    <footer className="main-footer bg-islam pt-10" id="contact">
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
          <div className="col-lg-4 col-md-4">
            {/*=== Footer Widget ===*/}
            <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
              {/* <h4 className="widget-title">About</h4> */}
              <div className="footer-content">
                <p className='mobcontacts text-white'>
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
          <div className="col-lg-4 col-md-4">
            {/*=== Footer Widget ===*/}
            {/* <EmbedToggler defaultToggledOn>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
              </div>
            </EmbedToggler> */}
            <InstagramEmbed
              height={{}}
              url="https://www.instagram.com/rotana.tours/"
              width={444}
            />
          </div>
          <div className="col-lg-4 col-md-4">
            {/*=== Footer Widget ===*/}
            <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100 wow fadeInUp">
              
              <div className="footer-content">
                <FooterMenu/>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Footer Copyright ===*/}
      <div className="footer-copyright text-white">
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

