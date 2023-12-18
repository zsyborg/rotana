import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Slider from "react-slick";

import Footer from "@/src/layout/Footer";


const Food = () => {
  return (
    <Layout header={1} extraClass={"pt-160"}>
          <section className="services-seciton pt-100">
        <div className="container-fluid m-0 p-0">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 m-0 p-0">
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
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Partners Section ======*/}
      
    </Layout>
  );
};
export default Food;
