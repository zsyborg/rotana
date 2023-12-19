import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Slider from "react-slick";

import Footer from "@/src/layout/Footer";


const Food = () => {
return (
<Layout header={1}
  extraclassName={"pt-160"}>
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">

        <div className="container">
          <div className="sc-c5479164-1 sc-c5479164-2 kiVLXj">
            <div>
              <div className="sc-c5479164-3 daUcod">
                <h2 className="islamiccolor mt-20 mb-20">Umrah in a Nutshell</h2>
              </div>
              <div className="sc-c5479164-4 kfGxuZ">
                <div className="sc-53f348b9-0 kOQtyv">
                  <div className="sc-53f348b9-1 fgPYfX">
                    <div className="sc-53f348b9-2 jJuIle">
                      <article className="sc-53f348b9-5 bCwIwB dynamic-elearning-content--description">
                        <div className="sc-213d61b3-0 kexixH">
                          <div>
                            <h3 className="sc-2cb50690-7 isiQyk"><strong>What is the Umrah?</strong></h3>
                            <p className="sc-2cb50690-7 isiQyk">Umrah is an act of worshipping Allah by entering the state
                              of Ihram, circumambulating the House, running between Safa and Marwa, and having the head
                              shaved or trimmed.</p>
                            <h3 className="sc-2cb50690-7 isiQyk"><strong>How do I enter into the state of Ihram?</strong></h3>
                            <ul>
                              <li>A Muslim enters into the state of Ihram at the place specified by Sharia, and shall
                                abstain from the Ihram prohibitions</li>
                              <li>He shall recite Talbiyah, saying: "Labbayka Allaahumma Labbayk, Labbayka La Shareeka
                                Laka Labbayk. Innal Hamda Wan-ni'mata Laka Wal-Mulk, La Shareeka Lak" (Here I am at your
                                service, o Allah, at Your service! At Your service! You have no partner! I am at Your
                                service! Indeed, all praise and grace belong to You, and so does the supreme authority.
                                You have no partner)</li>
                            </ul>
                            <h3 className="sc-2cb50690-7 isiQyk"><strong>Circumambulation (Tawaf):</strong></h3>
                            <ul>
                              <li>He/she goes to the Haram</li>
                              <li>When the Kaaba is to the left, they circumambulate (counterclockwise)</li>
                              <li>He begins and ends at the Black Stone</li>
                              <li>After completion of the seven rounds, you pray two Rakaah in an appropriate place</li>
                            </ul>
                            <h3 className="sc-2cb50690-7 isiQyk"><strong>Sa’i (between Safa and Marwa):</strong></h3>
                            <p className="sc-2cb50690-7 isiQyk">He/she heads to Safa where he starts Sa’i towards Marwa.
                              Once reaching Marwa, you have completed one round. Crossing the distance back to Safa
                              fulfills the second round, and so on until the seventh round ends at Marwa.</p>
                            <h3 className="sc-2cb50690-7 isiQyk"><strong>Having hair of the head shaven or trimmed:</strong>
                            </h3>
                            <ul>
                              <li>After completing Sa’i, men go to the barber shops to have their hair shaven or trimmed
                              </li>
                              <li>Women gather their hair and cut from its ends about (1-2 cm)</li>
                              <li>With this act, the Umrah would be completed, marking the end of Ihram</li>
                            </ul>
                            <p className="sc-2cb50690-7 isiQyk">Umrah pilgrims should avoid any conduct that harms others in
                              the Haram, such as jostling, entering crowded places, and reversing the direction of
                              circumambulation. They shall carefully follow the instructions of observers and security
                              personnel.</p>
                          </div>
                        </div>
                      </article>
                    </div>
                    
                  </div>
                  <div className="text-center mt-20"><a id="umrahguide" href="assets/umrahguide.pdf" className="bg-success p-3 text-white">Umrah Guide</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="ziyarah d-flex justify-centent-centre">
          <h2 className="text-center mt-35 my-5 islamiccolor">Ziyarah Locations</h2>



<div class="row gy-5">
  
  <div class="col-4">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Jabal al-Nour</h3>
        <p class="card-txt">Jabal al-Nour (Arabic: جَبَل ٱلنُّوْر, romanized: Jabal an-Nūr, lit. 'Mountain of the Light' or 'Hill of the Illumination') is a mountain near Mecca in the Hejaz region of Saudi Arabia.[1] The mountain houses the grotto or cave of Hira' (Arabic: غَار حِرَاء, romanized: Ghar-i-Hira, lit. 'Cave of Hira'), which holds tremendous significance for Muslims throughout the world. </p>
        <img src="assets/images/ziyarah/jabal.jpg"/>
      </div>
    </div>
  </div>
  <div class="col-4">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Jabal Al Thawr</h3>
        <p class="card-txt">Jabal Thawr (Arabic: جَبَل ثَوْر) is a mountain in Saudi Arabia, located in the lower part of Mecca to the south of the district of Misfalah.[1] The height of the mountain is 750 m (2,460 ft). Prophet Muhammad took refuge from the Quraysh, during the migration to Medina. Mount Thawr is located 5 miles (8.0 kilometres) away from Mecca. In Sunni Islam, it is believed that Muhammad stayed here as a refugee with his companion Abu Bakr. </p>
        <img src="assets/images/ziyarah/thor.jpg"/>
      </div>
    </div>
  </div>
  <div class="col-4">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">The Clock Towers</h3>
        <p class="card-txt">The Clock Towers (Arabic: أبراج الساعة, romanized: Abrāj al-Sāʿa, lit. 'Towers of the Clock', formerly known as Abraj Al Bait), is a government-owned complex of seven skyscraper hotels in Mecca, Saudi Arabia. These towers are a part of the King Abdulaziz Endowment Project that aims to modernize the city in catering to its pilgrims. </p>
        <img src="assets/images/ziyarah/clock.jpg"/>
      </div>
    </div>
  </div>
  <div class="col-4">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Zamzam Well</h3>
        <p class="card-txt">The Zamzam Well (Arabic: بئر زمزم, romanized: Biʾru Zamzam Arabic pronunciation: [biʔru zam.zam]) is a well located within the Masjid al-Haram in Mecca, Saudi Arabia. It is located 20 m (66 ft) east of the Kaaba,[2] the holiest place in Islam. </p>
        <img src="assets/images/ziyarah/zamzamwell.jpg"/>
      </div>
    </div>
  </div>
  <div class="col-4">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">The Kiswa Factory</h3>
        <p class="card-txt">New black, pure-silk clothing for Kaaba, called kiswa, is made by the Kiswa Factory of the Holy Kaaba (King Abdulaziz Complex) every year. It is embroidered with silver wires painted with glittering gold, with which Quranic verses and supplications are written. The clothing is used to cover "The Ancient House" (another name for Kaaba) to which Muslims' hearts are attached. </p>
        <img src="assets/images/ziyarah/kiswa.webp"/>
      </div>
    </div>
  </div>


  <div class="col-4">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Taif</h3>
        <p class="card-txt">Taif is indirectly referred to in Quran 43:31.[3] The city was visited by the Islamic prophet Muhammad, sometime in the early 7th century, and was inhabited by the tribe of Banu Thaqif. It is still inhabited to this day by their descendants. As a part of the Hejaz, the city has seen many transfers-of-power throughout its history, with the last being during the Saudi conquest of Hejaz in 1925.  </p>
        <img src="assets/images/ziyarah/taif.jpg"/>
      </div>
    </div>
  </div>
  
  <div class="col-6">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Badr, Saudi Arabia</h3>
        <p class="card-txt">Badr (Arabic: بَـدْر, full name: Badr Hunayn, Arabic: بدر حنین) is a town in Al Madinah Province, Al-Hijaz, Saudi Arabia. It is located about 130 km (81 mi) from Madina. It was the location of the Battle of Badr, between the Quraishi-led polytheists, and the Muslims under the leadership of Muhammad,[1] in 624 CE. the Battle occurred when 313 men encountered outnumbering Meccan forces of the pagan Quraish army. The result was a victory for the Muslims under the command of Muhammad, the last prophet of Islam. </p>
        <img src="assets/images/ziyarah/badr.jpg"/>
      </div>
    </div>
  </div>
  


</div>
{/* 
          <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0001.jpg" />
          <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0002.jpg" />
          <img src="assets/images/heroMAKKAH ATTRACTIONS_page-0003.jpg" />
          <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0004.jpg" />
          <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0005.jpg" />
          <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0006.jpg" />
          <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0007.jpg" />
          <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0008.jpg" />
          <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0009.jpg" />
          <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0010.jpg" /> */}

        </section>

      </div>
    </div>
  </div>
  {/*====== End Testimonial Section ======*/}
  {/*====== Start Partners Section ======*/}

</Layout>
);
};
export default Food;