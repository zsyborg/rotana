import { sliderActive5Item } from "../sliderProps";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";

const MadinaHotels = () => {
    const settings = {
        dots: true,
        arrows:true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      };

      
  return (
    <section className="activity-section">
    <div className="activity-wrapper-bgc text-white bg-islam">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInDown">
              {/* <span className="sub-title">Residency Allotments</span> */}
              <h2>Our Allotment Hotels in Madina</h2>
            </div>
          </div>
        </div>
        <Tab.Container defaultActiveKey={"tab1"}>
          <div className="row">
            <div className="col-lg-4">
              {/*=== Activity Nav Tab ===*/}
              <div className="activity-nav-tab mb-50 wow fadeInLeft">
                <Nav as="ul" className="nav nav-tabs">
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#tab1"
                      className="nav-link"
                      eventKey="tab1"
                    >
                      Anwar al Madinah Mövenpick
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#tab2"
                      className="nav-link"
                      eventKey="tab2"
                    >
                      Safwat Al Madina
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#tab3"
                      className="nav-link"
                      eventKey="tab3"
                    >
                      Dar Al Taqwa
                    </Nav.Link>
                  </Nav.Item>
                  
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#tab5"
                      className="nav-link"
                      eventKey="tab5"
                    >
                      Dallah Taibah
                    </Nav.Link>
                  </Nav.Item>


                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#tab6"
                      className="nav-link"
                      eventKey="tab6"
                    >
                      Bir Al Eiman
                    </Nav.Link>
                  </Nav.Item>



                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#tab7"
                      className="nav-link"
                      eventKey="tab7"
                    >
                      Loloat Madina
                    </Nav.Link>
                  </Nav.Item>
                  


                  
                </Nav>
              </div>
            </div>
            <div className="col-lg-8">
              {/*=== Tab Content ===*/}
              <Tab.Content className="tab-content mb-50 wow fadeInRight">
                {/*=== Tab Pane ===*/}
                <Tab.Pane className="tab-pane fade" eventKey="tab1">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      {/*=== Activity Content Box ===*/}
                      <div className="activity-content-box pl-lg-40">
                        {/* <div className="icon">
                          <i className="flaticon-camp" />
                        </div> */}
                        <h3 className="title">
                        Anwar al Madinah Mövenpick
                        </h3>
                        <p><strong>(5 Star - 0 Meters from Haram)</strong></p>
                        <p>
                        The Anwar al Madinah Mövenpick Hotel is Madinah’s largest hotel. This 5 star hotel offers extensive facilities for families, individual travellers and leisure groups.  As well as being the nearest hotel to the Prophet’s Mosque, it is also close to all the main attractions in Madinah. This luxury hotel is directly linked to the shopping mall with underground parking available for guests to use.
                        </p>
                        <ul className="check-list">
                          <li>
                            <i className="fas fa-badge-check" />
                            Rooms, Suites & Studio
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Unique Dining Experience
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Chocolate Hour
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Memorable Meetings & Sparkling Celebrations
                          </li>
                          
                    </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/*=== Activity Image Box ===*/}
                      <div className="activity-image-box">
                      <Slider {...settings}>
          <div>
          <img
              src="assets/images/hotels/moven1.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/moven2.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/moven3.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/moven4.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/moven5.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/moven6.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/moven7.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/moven8.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/moven9.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
                    
        </Slider>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                {/*=== Tab Pane ===*/}
                <Tab.Pane className="tab-pane fade" eventKey="tab2">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      {/*=== Activity Content Box ===*/}
                      <div className="activity-content-box pl-lg-40">
                       
                        <h3 className="title">
                        Safwat Al Madina
                        </h3>
                        <p><strong>(3 Star - 100 Meters from Haram)</strong></p>
                         <p>
                        Welcome to the Safwat Al Madina hotel chain, your second home in Medina
                        A leading company in the management and operation of hotels specialized in providing Hajj and Umrah services.

                        </p>
                        <ul className="check-list">
                          <li>
                            <i className="fas fa-badge-check" />
                            Located 70 meters from the Prophet’s Mosque
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Parking Available
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            24-hour Front Desk Service
                          </li> 
                          <li>
                            <i className="fas fa-badge-check" />
                            Free Wi-Fi
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      {/*=== Acctivity Image Box ===*/}
                      <div className="activity-image-box">
                      <Slider {...settings}>
          <div>
          <img
              src="assets/images/hotels/safwat.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/safwat1.jpeg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/safwat2.jpeg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/safwat3.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/safwat4.jpeg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          
        </Slider>
                      </div>
                    </div>


                   
                  </div>
                </Tab.Pane>
                {/*=== Tab Pane ===*/}
                <Tab.Pane className="tab-pane fade" eventKey="tab3">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      {/*=== Activity Content Box ===*/}
                      <div className="activity-content-box pl-lg-40">
                        {/* <div className="icon">
                          <i className="flaticon-camp" />
                        </div> */}
                        <h3 className="title">
                            Dar Al Taqwa
                        </h3>
                        <p><strong>(5 Star - 0 Meters from Haram)</strong></p>
                        <p>
                            Dar Al Taqwa Hotel one of the most fabulous location in the courtyard of the Prophet's Mosque, Just footsteps away only 3 meters from the main entrance to the Holy Mosque, facing King Fahad gate ladies entrance, close to shopping arcades and a commercial center. The hotel is just 25 minutes’ drive from Madinah International Airport.
                        </p>
                        <ul className="check-list">
                          <li>
                            <i className="fas fa-badge-check" />
                            Standard Rooms, Premium Triple Rooms & Standard Twin Bed Rooms available
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Lunch & Dinner Package Included
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Meeting and Events - For your Madinah events, conferences, meetings, Dar Al Taqwa Madinah offers you the most qualified staff to satisfy your every request
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/*=== Activity Image Box ===*/}
                      <div className="activity-image-box">
                      <Slider {...settings}>
          <div>
          <img
              src="assets/images/hotels/taqwaext.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/taqwa1.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/taqwa.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/taqwa2.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/taqwa3.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/taqwa4.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          
        </Slider>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                {/*=== Tab Pane ===*/}
                <Tab.Pane className="tab-pane fade" eventKey="tab5">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      {/*=== Activity Content Box ===*/}
                      <div className="activity-content-box pl-lg-40">
                        
                        <h3 className="title">
                        Dallah Taibah
                        </h3>
                        <p><strong>(5 Star - 0 Meters from Haram)</strong></p>
                        <p>
                        Dallah Taibah Hotel is a subsidiary of Dallah Al Barakah Group, which is operating by the name of Dallah Hotels And Resorts. This is one of the most famous and top-rated 5-star hotels in Madinah Al Munawarah. This huge property consisting of 473 rooms, suites and apartments, 5 restaurants and a coffee shop with a dining capacity of almost 1500 guests at any given time, offers the most comfortable and unique guest experience near the Holy Masjid.
                        </p>
                        <ul className="check-list">
                          <li>
                            <i className="fas fa-badge-check" />
                            Some of our rooms and suites are having a fabulous view of Haram Sharif
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Nice location with easy access for the ladies to enter Haram Sharif
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            We have special rooms for special guests who need assistance with disabilities
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            For your convenience, all hotel services are available around the clock 24 by 7
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/*=== Activity Image Box ===*/}
                      <div className="activity-image-box">
                      <Slider {...settings}>
          <div>
          <img
              src="assets/images/hotels/taibaext.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/taiba1.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/taiba2.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/taiba3.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          
        </Slider>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                {/*=== Tab Pane ===*/}
                <Tab.Pane className="tab-pane fade" eventKey="tab6">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      {/*=== Activity Content Box ===*/}
                      <div className="activity-content-box pl-lg-40">
                        
                        <h3 className="title">
                        Bir Al Eiman
                        </h3>
                        <p><strong>(3 Star - 250 Meters from Haram)</strong></p>
                        <p>
                        Bir Al Eiman Hotel is located just 150 meters from the Prophet's Mosque. Free parking is available near the hotel. Guests can dine in at the on-site restaurant
                        </p>
                        <ul className="check-list">
                          <li>
                            <i className="fas fa-badge-check" />
                            All air-conditioned rooms
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Flat-screen TV & a Safety Deposit Box 
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Guests can take advantage of laundry and dry cleaning services.
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Prince Mohammed Bin Abdul Aziz International Airport is a 15-minute drive from the hotel.
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            A 24 hour front desk is available.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/*=== Activity Image Box ===*/}
                      <div className="activity-image-box">
                      <Slider {...settings}>
          <div>
          <img
              src="assets/images/hotels/birext.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/bir.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/bir1.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/bir2.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/bir3.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          
        </Slider>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                {/*=== Tab Pane ===*/}
                <Tab.Pane className="tab-pane fade" eventKey="tab7">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      {/*=== Activity Cotent Box ===*/}
                      <div className="activity-content-box pl-lg-40">
                        {/* <div className="icon">
                          <i className="flaticon-camp" />
                        </div> */}
                        <h3 className="title">
                        Loloat Madinah
                        </h3>
                        <p><strong>(3 Star - 250 Meters from Haram)</strong></p>

                        <p>
                          
Loulat Al Madina Hotel is located in western central area of Prophet's mosque. Te hotel is 35 minutes drive from Madinah International Airport. The hotel offers comfortable stay to his guests with variety of amenities like free wifi in public areas, restaurant facility, free parking. Many historical cities are near 
                        </p>
                        <ul className="check-list">
                          <li>
                            <i className="fas fa-badge-check" />
                            Restaurant Availability
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Senior Citizen Friendly
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Shuttle Service
                          </li>
                          <li>
                            <i className="fas fa-badge-check" />
                            Fanadiq Rating
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/*=== Activity Image ===*/}
                      <div className="activity-image-box">
                      <Slider {...settings}>
          <div>
          <img
              src="assets/images/hotels/lala.jpeg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/lala1.jpeg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/lala2.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/lala3.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          
        </Slider>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  </section>
  );
};
export default MadinaHotels;
