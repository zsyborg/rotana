import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Slider from "react-slick";

const Contact = () => {
  return (
    // <Layout header={1} noFooter>

    <Layout header={1} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Contact Us"} />
      {/*====== Start Info Section ======*/}
      <section className="contact-info-section pt-100 pb-60">
        <div className="container-fluid m-0 p-0">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-45 wow fadeInDown">
                <span className="sub-title">Contact Us</span>
                <h2>
                  Ready to Get Our Best Services! Feel Free to Contact With Us
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Contact Info Item ===*/}
              <div className="contact-info-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-1.png" alt="icon" />
                </div>
                <div className="info">
                  <span className="title">Office Location</span>
                  <p>Mumbai / Jalgaon / Amalner / Paldi / Varangaon / Wrandol / Yawal / Malkapur / Pachora / Raver / Sillod</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Contact Info Item ===*/}
              {/* <div className="contact-info-item text-center mb-40 wow fadeInDown">
                <div className="icon">
                  <img src="assets/images/icon/icon-2.png" alt="icon" />
                </div>
                <div className="info">
                  <span className="title">Email Address</span>
                  <p>
                    <a href="mailto:supportinfo@gmail.com">
                      supportinfo@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:traveladventure.net">traveladventure.net</a>
                  </p>
                </div>
              </div> */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Contact Info Item ===*/}
              <div className="contact-info-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-3.png" alt="icon" />
                </div>
                  <span className="title">Hotline</span>
                    <h3><a href="tel:+919820194778">Nadeem Shaikh (CEO)<br/> +91 98201 94778</a><br/><br/></h3>
                <div className="info d-lg-none d-md-grid d-sm-grid d-xl-none">
                  <p>
                    <a href="tel:+919561501515">Bhusawal - +91 9561501515 / 7620953312 (Qari Zaheeruddin)</a> <br/><br/>
                    <a href="tel:+919820194778">Jalgaon - +91 6446877313 (Maulana Umar)</a> <br/><br/>
                    <a href="tel:+919028126314">Amalner +91 9028126314 (Maulana Azhar)</a><br/><br/>
                    <a href="tel:+917843076638">Paldi +91 7843076638</a>(Maulana Asfaq)<br/><br/>
                    <a href="tel:+919975461699">Varangaon +91 9975461699</a><br/><br/>
                    <a href="tel:+917058202266">Erandol +91 7058202266 (Hafiz Irfan )</a><br/><br/>
                    <a href="tel:+99595777775">Yawal +91 9595777775 (Haji Nadeem) </a><br/><br/>
                    <a href="tel:+919623542660">Malkapur +91 9623542660 (Mufti Shahbuddin)</a><br/><br/>
                    <a href="tel:+91797249161">Pachora +91 797249161 (Mufti Asrar) </a><br/><br/>
                    <a href="tel:+919891432102">Raver +91 9891432102 (Rizwan Shaikh</a><br/><br/>
                    <a href="tel:+919860604641">Sillod +91 9975461699</a><br/><br/>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 d-lg-grid d-xl-grid d-xxl-grid d-sm-none d-xs-none gridcontact">
                    <div class="card-columns row gx-2 gy-2 text-center d-flex justify-content-center text-uppercase d-sm-inline-grid d-lg-inline-flex d-md-none d-sm-none">
                      <div class="col-2">
                        
                      <div class="card text-white bg-success">
                        <div class="card-body">
                          <h4 class="card-title">Bhusawal</h4>
                          <p class="card-text"> <a href="tel:+919561501515">+91 9561501515 / +91 7620953312<br/> (Qari Zaheeruddin)</a> <br/><br/></p>
                        </div>
                      </div>
                      </div>

                      <div class="col-2">
                      <div class="card text-white bg-success">
                        <div class="card-body">
                          <h4 class="card-title">Jalgaon</h4>
                          <p class="card-text">+91 6446877313 (Maulana Umar)</p>
                        </div>
                      </div>
                      </div>

                      <div class="col-2">

                      <div class="card text-white bg-success">
                        <div class="card-body">
                          <h4 class="card-title">Amalner`</h4>
                          <p class="card-text">+91 9028126314 (Maulana Azhar)</p>
                        </div>
                      </div>
                      </div>
                      <div class="col-2">
                
                      <div class="card text-white bg-success">
                        <div class="card-body">
                          <h4 class="card-title">Paldi</h4>
                          <p class="card-text"> <a href="tel:+917843076638">+91 7843076638</a> (Maulana Asfaq)<br/><br/>
</p>
                        </div>
                      </div>
                      </div>
                      <div class="col-2">
                
                      <div class="card text-white bg-success">
                        <div class="card-body">
                          <h4 class="card-title">Varangaon</h4>
                          <p class="card-text">
                    <a href="tel:+919975461699"> +91 9975461699 (Maulana Salman)</a><br/><br/>
                            
                          </p>
                        </div>
                      </div>
                      </div>
                      <div class="col-2">
                
                      <div class="card text-white bg-success">
                        <div class="card-body">
                          <h4 class="card-title">Erandol </h4>
                          <p class="card-text">                    
                            <a href="tel:+917058202266">+91 7058202266 (Hafiz Irfan )</a><br/><br/>
                          </p>
                        </div>
                      </div>
                      </div>
                

                      <div class="col-2">

                      <div class="card text-white bg-success">
                        <div class="card-body">
                          <h4 class="card-title">Yawal</h4>
                          <p class="card-text"><a href="tel:+99595777775">+91 9595777775 (Haji Nadeem) </a><br/><br/>
                          </p>
                        </div>
                      </div>
                      </div>

                      <div class="col-2">

                      <div class="card text-white bg-success">
                        <div class="card-body">
                          <h4 class="card-title">Malkapur</h4>
                          <p class="card-text"><a href="tel:+919623542660"> +91 9623542660 (Mufti Shahbuddin)</a><br/><br/>
                          </p>
                        </div>
                      </div>
                      </div>


                      <div class="col-2">

                      <div class="card text-white bg-success">
                        <div class="card-body">
                          <h4 class="card-title">Pachora</h4>
                          <p class="card-text"><a href="tel:+91797249161"> +91 797249161 (Mufti Asrar) </a><br/><br/>
                          </p>
                        </div>
                      </div>
                      </div>

                      <div class="col-2">

                      <div class="card text-white bg-success">
                        <div class="card-body">
                          <h4 class="card-title">Raver</h4>
                          <p class="card-text"> <a href="tel:+919891432102"> +91 9891432102 (Rizwan Shaikh)</a>
                            <br/><br/>
                          </p>
                        </div>
                      </div>
                      </div>


                      <div class="col-2">

                      <div class="card text-white bg-success">
                        <div class="card-body">
                          <h4 class="card-title">Sillod</h4>
                          <p class="card-text"> <a href="tel:+919860604641">+91 9975461699</a><br/><br/>
                          </p>
                        </div>
                      </div>                
                      </div>                
                
                </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Info Section ======*/}
      {/*====== Start Contact Map Section ======*/}
      {/* <section className="contact-page-map pb-100 wow fadeInUp">
        {/*=== Map Box ===
        <div className="map-box">
          <iframe src="https:maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </div>
      </section> */}
      {/*====== End Contact Map Section ======*/}
      {/*====== Start Contact Section ======*/}
       <section className="contact-section pb-100 d-none">
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-xl-6">
               <div className="section-title text-center mb-50 wow fadeInDown">
                 <span className="sub-title">Get In Touch</span>
                 <h2>Send Us Message</h2>
               </div>
             </div>
           </div>
           <div className="row justify-content-center">
             <div className="col-lg-10">
               <div className="contact-area wow fadeInUp">
                 <form className="contact-form">
                   <div className="row">
                     <div className="col-lg-6">
                       <div className="form_group">
                         <input
                           type="text"
                           placeholder="Name"
                           className="form_control"
                           name="name"
                           required
                         />
                       </div>
                     </div>
                     <div className="col-lg-6">
                       <div className="form_group">
                         <input
                           type="text"
                           placeholder="Phone Number"
                           className="form_control"
                           name="number"
                           required
                         />
                       </div>
                     </div>
                     <div className="col-lg-6">
                       <div className="form_group">
                         <input
                           type="email"
                           placeholder="Email Address"
                           className="form_control"
                           name="email"
                           required
                         />
                       </div>
                     </div>
                     <div className="col-lg-6">
                       <div className="form_group">
                         <input
                           type="url"
                           placeholder="Website"
                           className="form_control"
                           name="website"
                           required
                         />
                       </div>
                     </div>
                     <div className="col-lg-12">
                       <div className="form_group">
                         <textarea
                           name="message"
                           placeholder="Write Message"
                           className="form_control"
                           rows={6}
                           defaultValue={""}
                         />
                       </div>
                     </div>
                     <div className="col-lg-12">
                       <div className="form_group text-center">
                         <button className="main-btn primary-btn">
                           Send Us Message
                           <i className="fas fa-paper-plane" />
                         </button>
                       </div>
                     </div>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </section>
      
      {/*====== End Contact Section ======*/}
      {/*====== Start Gallery Section ======*/}
      {/* <GallerySection /> */}
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Contact;
