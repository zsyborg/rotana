import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import GallerySection from "@/src/components/GallerySection";
import Layout from "@/src/layout/Layout";
import {
  home1Slider,
  sliderActive3Item,
  sliderActive4Item,
  testimonialSliderOne,
} from "@/src/sliderProps";
import MadinaHotels from "@/src/components/MadinaHotels";
import { Player } from 'video-react';
// import "@slick-carousel/slick/slick.css"; 
// import "@slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";



const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

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


const Index = () => {
  return (
    <Layout header={1} noFooter>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper black-bg">
          {/*=== Hero Slider ===*/}
          <Slider {...home1Slider} className="hero-slider-one">
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <h2 data-animation="fadeInDown" data-delay=".4s">
                        Welcome to Rotana your official partner & guide to Umrah
                      </h2>

                      <div className="text-button d-flex align-items-center">
                        <p data-animation="fadeInLeft" data-delay=".5s">
                        
                        </p>
                        <div
                          className="hero-button"
                          data-animation="fadeInRight"
                          data-delay=".6s"
                        >
                          <Link legacyBehavior href="#umrah">
                            <a className="main-btn primary-btn">
                              Explore More
                              <i className="fas fa-paper-plane" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    {/*=== Hero Image ===*/}
                    <div className="hero-image" data-animation="fadeInRight">
                      <img
                        src="assets/images/hero/desktop-wallpaper-madina-sharif-madina-shareef.jpg"
                        alt="Hero Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Umrah Packages
                      </h1>
                      <div className="text-button d-flex align-items-center">
                        <p data-animation="fadeInLeft" data-delay=".5s">
                        We offer affordable packages for Umrah pilgrims with outstanding customer service & price.
                        </p>
                        <div
                          className="hero-button"
                          data-animation="fadeInRight"
                          data-delay=".6s"
                        >
                          <Link legacyBehavior href="#umrah">
                            <a className="main-btn primary-btn">
                              Explore More
                              <i className="fas fa-paper-plane" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    {/*=== Hero Image ===*/}
                    <div className="hero-image" data-animation="fadeInRight">
                      <img
                        src="assets/images/hero/small-spos14530-poster-madina-allah-photo-sl-14543-wall-poster-original-imagkb9akcskd4w5.webp"
                        alt="Hero Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section pt-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-8">
              {/*=== About Content Box ===*/}
              <div className="about-content-box text-center mb-55 wow fadeInDown">
                <div className="section-title mb-30">
                  <span className="sub-title">About Rotana</span>
                  <h2>Rotana is one of the leading Travel &amp; Tours Agency</h2>
                </div>
                <p className="justify h2"> 
                Welcome to Rotana, Your Trusted Partner for Sacred Journeys

              Embark on a transformative pilgrimage with Rotana, your gateway to spiritual enlightenment and seamless travel experiences for Hajj and Umrah. We specialize in crafting unforgettable journeys that cater to the spiritual needs and preferences of our Muslim brothers and sisters.<br/>
            </p>
              <p>
                &nbsp;
              </p>
            <p className="justify h2">
            Your journey of self-purification begins here. Our legacy of helping Muslims in performing their
            obligatory religious duty Hajj, and non-obligatory religious duty Umrah, goes back to over two decades,
            Since our inception, every year we have enabled thousands of pilgrims to successfully fulfill their
            promise to Allah. Our expert team of experienced professionals in India and Saudi Arabia are
            committed towards ensuring that every aspect of this holy pilgrimage is executed flawlessly, and the
            pilgrim is in a relaxed state of mind during the sacred journey
                            </p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </section>
      {/*====== End Hero Section ======*/}

      {/*====== Start Activity Section ======*/}
      <section className="activity-section">
        <div className="activity-wrapper-bgc text-white black-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="section-title text-center mb-50 wow fadeInDown">
                  {/* <span className="sub-title">Residency Allotments</span> */}
                  <h2>Our Allotment Hotels in Makkah</h2>
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
                          Makkah Tower 
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          href="#tab2"
                          className="nav-link"
                          eventKey="tab2"
                        >
                          Swissôtel Al Maqam Makkah 
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          href="#tab3"
                          className="nav-link"
                          eventKey="tab3"
                        >
                          Al Massa Hotel
                        </Nav.Link>
                      </Nav.Item>
                      
                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          href="#tab5"
                          className="nav-link"
                          eventKey="tab5"
                        >
                          Azka Al Safah
                        </Nav.Link>
                      </Nav.Item>


                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          href="#tab6"
                          className="nav-link"
                          eventKey="tab6"
                        >
                          Mira Ajyad
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          href="#tab7"
                          className="nav-link"
                          eventKey="tab7"
                        >
                          Mira Sudd
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          href="#tab8"
                          className="nav-link"
                          eventKey="tab8"
                        >
                          Ajwad Ajyad
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
                            Makkah Tower <br/>
                            </h3>
                            <p><strong>(5 Star - 0 Meters from Haram)</strong></p>
                            <p>
                            Set in the heart of the Holy City under the umbrella of Makkah Construction and Development Company (MCDC), Makkah Hotel & Towers offers  1437 contemporary rooms and suites and a prime location overlooking the Holy Haram. Enjoy a host of premium amenities, including excellent dining and majestic views from the panoramic glass lifts.
                            </p>
                            <ul className="check-list">
                              <li>
                                <i className="fas fa-badge-check" />
                                Early Check-in and Late Check-out
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                High Speed WiFi
                              </li>
                              
                        </ul>
                          </div>
                        </div>
                        <div className="col-md-6">
                          {/*=== Activity Image Box ===*/}
                          {/* <div className="activity-image-box">
                            <img
                              src="assets/images/hotels/makkahtower.webp"
                              className="radius-12"
                              alt="Image"
                              width={444}
                            />
                          </div> */}

                          <Slider {...settings}>
          <div>
          <img
              src="assets/images/hotels/makkahtower1.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/makkahtower.webp"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/makkahtower2.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/makkahtower3.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/makkahtower4.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
        </Slider>

                        </div>
                      </div>
                    </Tab.Pane>
                    {/*=== Tab Pane ===*/}
                    <Tab.Pane className="tab-pane fade" eventKey="tab2">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          {/*=== Activity Content Box ===*/}
                          <div className="activity-content-box pl-lg-40">
                           
                            <h3 className="title">
                            Swissôtel Al Maqam Makkah
                            </h3>
                            <p><strong>(5 Star - 0 Meters from Haram)</strong></p>
                             <p>
                             The 1,624 rooms and suites carry an embracing atmosphere, many of them have a graceful view of the holy Kaaba. Our refined restaurant and tea lounge vow to please refined palates. You’ll discover that our service combines the best of Alpine grace with the welcoming values of Arab culture

                            </p>
                            <ul className="check-list">
                              <li>
                                <i className="fas fa-badge-check" />
                                Direct access to the shopping mall within Abraj Al Bait complex
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Welcome to a room that offers more than just a place to sleep, shower and take advantage of the Wi-Fi
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Swissôtel Bed. Built for superior comfort, unmatched support, and durability over time, this mattress helps you wake up rejuvenated and ready for the day
                              </li> 
                              <li>
                                <i className="fas fa-badge-check" />
                                Our recipe for success? Vibrantly central locations, combined with modern technology, reliable service, and great cuisine. Together, these elements create a place where meetings become synonymous with inspiration
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          {/*=== Acctivity Image Box ===*/}
                          {/* <div className="activity-image-box">
                            <img
                              src="assets/images/hotels/SwissotelAlMaqamMakkah.jpg"
                              className="radius-12"
                              alt="Image"
                              width={444}
                            />
                          </div> */}
                          <Slider {...settings}>
          {/* <div>
          <img
              src="assets/images/hotels/swiss1.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div> */}
          <div>
          <img
              src="assets/images/hotels/swiss2.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          {/* <div>
          <img
              src="assets/images/hotels/swiss3.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div> */}
          {/* <div>
          <img
              src="assets/images/hotels/swiss4.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div> */}
          <div>
          <img
              src="assets/images/hotels/swiss5.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/swiss6.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/swiss7.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
        </Slider>
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
                              Al Massa Hotel
                            </h3>
                            <p><strong>(4 Star - 50 Meters from Haram)</strong></p>
                            <p>
                            Situated in the center of Al Ain, Al Massa Plus Hotel is less than one mile from the Jimi Mall
                            </p>
                            <ul className="check-list">
                              <li>
                                <i className="fas fa-badge-check" />
                                Includes modern wooden furnishings and a private bathroom with a hairdryer
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Hotel 1’s restaurant serves regional cuisine and is open for breakfast, lunch and dinner
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                24-hour front desk service. Free public parking is available on site
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          {/*=== Activity Image Box ===*/}
                          {/* <div className="activity-image-box">
                            <img
                              src="assets/images/hotels/almassa.webp"
                              className="radius-12"
                              alt="Image"
                              width={444}
                            />
                          </div> */}
                          <Slider {...settings}>
          <div>
          <img
              src="assets/images/hotels/massa1.webp"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/massa2.webp"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/massa3.webp"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/massa4.webp"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/massa5.webp"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          
        </Slider>
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
                            Azka Al Safa Hotel 
                            </h3>
                            <p><strong>(4 Star - 200 Meters from Haram)</strong></p>
                            <p>
                            Offer Modern Restaurant with Delicious Food for all Nation. Our restaurant has a variety of casual and fine-dining restaurants with elaborate menu options prepared by some of the top chefs from within and outside the country.
                            </p>
                            <ul className="check-list">
                              <li>
                                <i className="fas fa-badge-check" />
                                Located approximately 150 m to the Holy Haram
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Hotel Dining
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Extras include free toiletries and a hair dryer
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Free WiFi throughout the property
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
              src="assets/images/hotels/azka5.avif"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/azka1.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/azka2.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/azka3.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/azka4.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/azka.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/azka6.jpg"
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
                        <div className="col-md-12">
                          {/*=== Activity Content Box ===*/}
                          <div className="activity-content-box pl-lg-40">
                            
                            <h3 className="title">
                              Mira Ajyad
                            </h3>
                            
                            <p>
                            Located close to Abraj Al Bait Mall Towers, this 3-star Mira Ajyad Hotel Mecca has a shared lounge. Providing access to the massive Masjid al-Haram Mosque, the hotel is within 2.4 km from Jannat Al Muallaa Cemetery and offers an a la carte restaurant.

All 70 rooms are allergy-free and equipped with high-speed internet and a flat-screen TV with satellite channels. A bidet, a tub and a roll in shower along with comforts like hairdryers and bath sheets are also at guests' disposal.
                            </p>
                            <ul className="check-list">
                              <li>
                                <i className="fas fa-badge-check" />
                                The Hotel is merely a 5-minute walk to Kaaba.
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Safe deposit box, Free Wi-Fi
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                24-hour reception / Express check-in/out
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Wheelchair access / Rooms/ Facilities for disabled / Luggage storage
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Lift Access / Currency exchange / Barber Shop / Toilet for disabled
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Housekeeping / Room Service / Grocery shopping service / Meeting/ Banquet facilities
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          {/*=== Activity Image ===*/}
                          <div className="activity-image-box">
                          <Slider {...settings}>
          <div>
          <img
              src="assets/images/hotels/ajyad1.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/ajyad2.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/ajyad3.jpg"
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





                    <Tab.Pane className="tab-pane fade" eventKey="tab7">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          {/*=== Activity Content Box ===*/}
                          <div className="activity-content-box pl-lg-40">
                            
                            <h3 className="title">
                              Mira Sudd
                            </h3>
                        <p><strong>(3 Star - 700 Meters from Haram)</strong></p>
                            
                            <p>
                            Mira Sudd Hotel is located about 700 meters from Al-Masjid Al-Haram in Makkah. The hotel has a 24-hour front desk, Wi-Fi, Restaurant, 10 Residential Floors, 2 Elevators and 66 Rooms, All Rooms are elegantly decorated and furnished with quality furniture. Hotel is designed with a combination of both Arab culture and modern touches which take you up to the highest level of services, luxury and comfort.
                            </p>
                            <ul className="check-list">
                              <li>
                                <i className="fas fa-badge-check" />
                                Free Wi-Fi in hotel premises
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Safe deposit box
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Flat-screen TV, AM/FM alarm clock
                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Parquet floor
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
              src="assets/images/hotels/sudd1.png"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/sudd2.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/sudd3.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/sudd4.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/sudd5.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/sudd6.jpg"
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




                    <Tab.Pane className="tab-pane fade" eventKey="tab8">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          {/*=== Activity Content Box ===*/}
                          <div className="activity-content-box pl-lg-40">
                            
                            <h3 className="title">
                            Ajwad Ajyad
                            </h3>
                        <p><strong>(3 Star - 500 Meters from Haram)</strong></p>
                            
                            <p>
                            Our hotel is the perfect choice for an economical trip to perform religious duties and to enjoy the spirituality of the Holy Mosque

                            </p>
                            <ul className="check-list">
                              <li>
                                <i className="fas fa-badge-check" />
                                The hotel is located at the heart of the Holy city of Makkah. It is only 500m from the holy mosque (Al Haram)

                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                The hotel has 74 separate rooms with single beds, AC and flat screen TV

                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                A separate dinning area contains 100 chair

                              </li>
                              <li>
                                <i className="fas fa-badge-check" />
                                Free wi-fi in hotel premises

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
              src="assets/images/hotels/ajwad1.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/ajwad2.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/ajwad3.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/ajwad4.jpg"
              className="radius-12"
              alt="Image"
              width={444}
            />
          </div>
          <div>
          <img
              src="assets/images/hotels/ajwad5.jpg"
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
      {/*====== End Activity Section ======*/}

      
      <MadinaHotels/>



      {/*====== Start Services Section ======*/}

      
      <section className="services-seciton pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Popular Packages</span>
                <h2 id="umrah">Umrah Packages</h2>
                <img src="assets/images/hotels/Rotana 2 page_page-0002.jpg" />
                <img src="assets/images/hotels/Rotana 2 page_page-0001.jpg" />
              </div>
            </div>
          </div>
         
        </div>
      </section>
      {/*====== End Services Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-rabbit" />
                </div>
                <div className="text">
                  <h4 className="title">Personal Guidance & Attention</h4>
                  <p>
                  Throughout your tour our trained and experienced staff is at your service to guide you. We are there to make you feel at home, and make your pilgrimage more comfortable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-wifi-router" />
                </div>
                <div className="text">
                  <h4 className="title">Unlimited Free Laundry Services</h4>
                  <p>
                  No coupons or count on your
                  laundry, we get your clothes washed, ironed and delivered back as
                  many as you want and that too absolutely free.

                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-solar-energy" />
                </div>
                <div className="text">
                  <h4 className="title">Luxurious transfers in Umrah</h4>
                  <p>
                  Travel during Umrah in new luxurious
                  buses having 49 wide seats with good leg room, making your travel
                  utmost comfortable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-cycling" />
                </div>
                <div className="text">
                  <h4 className="title">The Most Selective Cuisine</h4>
                  <p>
                  To make you feel at home, we provide
                  you delicious cuisine by cooks accompanying specially from India.
                  Food is served in buffet system with hot and fresh chapatis.
                  We cater all taste of varieties in our food services. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-fishing" />
                </div>
                <div className="text">
                  <h4 className="title">Get In Touch With Our Ofce Near You </h4>
                  <p>
                  We Have Various Ofces Located Across India Where You Can Get In Touch To Inquire About
                  Any Of Our Services. Find One That's Near You.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-gym" />
                </div>
                <div className="text">
                  <h4 className="title">We Commit, We Accomplish</h4>
                  <p>
                  The goal and key to the success of
                  our company are due to the fulfilment of promises given at the time
                  of booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start CTA Section ======*/}

<section id="food">

  <img src="assets/images/Deluxe Bronze_page-0001.jpg" />
  <img src="assets/images/EXCLUSIVE SILVER_page-0001.jpg" />
  <img src="assets/images/EXCOTIC GOLDEN_page-0001.jpg" />
  <img src="assets/images/MARVELLOUS PLATINUM_page-0001.jpg" />

</section>




      <section
        className="cta-bg overlay bg_cover pt-140 pb-150 d-none"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== CTA Content Box ===*/}
              <div className="cta-content-box text-center text-white wow fadeInDown">
                <h2 className="mb-35">
                  Ready to Travel With Real Adventure and Enjoy Natural
                </h2>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">
                    Check Availability
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Fact Section ======*/}
      <section className="fact-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-journey" />
                </div>
                <h2 className="number">
                  <Counter end={8453} />+
                </h2>
                <p>Happy Traveler</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-tent-1" />
                </div>
                <h2 className="number">
                  <Counter end={3568} />+
                </h2>
                <p>Tent Sites</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-reviews" />
                </div>
                <h2 className="number">
                  <Counter end={99.3} decimals={1} />%
                </h2>
                <p>Positive Reviews</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-award" />
                </div>
                <h2 className="number">
                  <Counter end={63} />K
                </h2>
                <p>Awards Winning</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-section pt-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Testimonials</span>
                <h2>What Our Traveler Say About Our Tour Services</h2>
              </div>
            </div>
          </div>


          <div className="row align-items-xl-center d-none">
            <div className="col-xl-5 col-lg-12 order-2 order-xl-1">
              {/*=== Testimonial Image ===*/}
              <div className="testimonial-one_image-box mb-40 wow fadeInLeft">
                <img
                  src="assets/images/testimonial/testimonial-1.jpg"
                  alt="Testimonial Image"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 order-1 order-xl-2">
              {/*=== Testimonial Slider ===*/}
              <Slider
                {...testimonialSliderOne}
                className="testimonial-slider-one pl-lg-55 mb-40 wow fadeInRight d-none"
              >
                {/*=== Testimonial Item ===*/}
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Quality Services</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      To take a trivial example which of usev undertakes
                      laborious physical exercise excepto obtain advantage from
                      has any right to find fault with man who chooses to enjoy
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*=== Testimonial Item ===*/}
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Quality Services</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      To take a trivial example which of usev undertakes
                      laborious physical exercise excepto obtain advantage from
                      has any right to find fault with man who chooses to enjoy
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*=== Testimonial Item ===*/}
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Quality Services</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      To take a trivial example which of usev undertakes
                      laborious physical exercise excepto obtain advantage from
                      has any right to find fault with man who chooses to enjoy
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>



          {/* <video src="" controls="controls" autoplay="true" /> */}
          <Player className="p-0">
            <source src="https://rotanatours.in/assets/images/testimonial/1.mp4" />
          </Player>
          <Player className="p-0">
            <source src="https://rotanatours.in/assets/images/testimonial/2.mp4" />
          </Player>
          <Player className="p-0">
            <source src="https://rotanatours.in/assets/images/testimonial/3.mp4" />
          </Player>
          <Player className="p-0">
            <source src="https://rotanatours.in/assets/images/testimonial/4.mp4" />
          </Player>
          <Player className="p-0">
            <source src="https://rotanatours.in/assets/images/testimonial/5.mp4" />
          </Player>
          <Player className="p-0">
            <source src="https://rotanatours.in/assets/images/testimonial/6.mp4" />
          </Player>
          <Player className="p-0">
            <source src="https://rotanatours.in/assets/images/testimonial/7.mp4" />
          </Player>
          <Player className="p-0">
            <source src="https://rotanatours.in/assets/images/testimonial/8.mp4" />
          </Player>
          <Player className="p-0">
            <source src="https://rotanatours.in/assets/images/testimonial/9.mp4" />
          </Player>
          <Player className="p-0">
            <source src="https://rotanatours.in/assets/images/testimonial/10.mp4" />
          </Player>
          <Player className="p-0">
            <source src="https://rotanatours.in/assets/images/testimonial/11.mp4" />
          </Player>


        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-section pt-60 pb-60 d-none hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-45 wow fadeInDown">
                <span className="sub-title">News &amp; Blog</span>
                <h2>Amazing News &amp; Blog For Every Single Update</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Blog Post ===*/}
              <div className="single-blog-post mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/blog-1.jpg" alt="Post Image" />
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    Adventure
                  </a>
                  <div className="post-meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      <a href="#">November 15, 2022</a>
                    </span>
                  </div>
                  <h3 className="title">
                    <Link legacyBehavior href="/blog-details">
                      Meet Skeleton Svelte Taile Was Sind For Reactive UIs
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/blog-details">
                    <a className="main-btn filled-btn">
                      Read More
                      <i className="far fa-paper-plane" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Blog Post ===*/}
              <div className="single-blog-post mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/blog-2.jpg" alt="Post Image" />
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    Adventure
                  </a>
                  <div className="post-meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      <a href="#">November 15, 2022</a>
                    </span>
                  </div>
                  <h3 className="title">
                    <Link legacyBehavior href="/blog-details">
                      Web Vitals Tools Boost Your to Sen Performance Scores
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/blog-details">
                    <a className="main-btn filled-btn">
                      Read More
                      <i className="far fa-paper-plane" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Blog Post ===*/}
              <div className="single-blog-post mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/blog-3.jpg" alt="Post Image" />
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    Adventure
                  </a>
                  <div className="post-meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      <a href="#">November 15, 2022</a>
                    </span>
                  </div>
                  <h3 className="title">
                    <Link legacyBehavior href="/blog-details">
                      Smashing Podcast Episode See With Paul Billion-Dollar Idea
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/blog-details">
                    <a className="main-btn filled-btn">
                      Read More
                      <i className="far fa-paper-plane" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
      {/*====== Start Gallery Section ======*/}
      {/* <GallerySection /> */}
      {/*====== End Gallery Section ======*/}
      <footer className="main-footer black-bg pt-230" id="contact">
        <img src="assets/images/footer.jpg" />
        <div className="container">
          {/*=== Footer Top ===*/}
          <div className="footer-top pt-40 wow fadeInUp">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <p>Mumbai, India</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  {/* <div className="icon">
                    <i className="far fa-envelope-open" />
                  </div> */}
                  {/* <div className="info">
                    <span className="title">Email</span>
                    <p>
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <span className="title">Hotline</span>
                    <p>
                      <a href="tel:+91 98201 94778">+91 98201 94778</a>
                    </p>
                  </div>
                </div>
              </div>
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
          <div className="footer-widget-area pt-75 pb-30">
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
    </Layout>
  );
};
export default Index;
