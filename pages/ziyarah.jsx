import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Slider from "react-slick";

import Footer from "@/src/layout/Footer";


const Food = () => {
  return (
    <Layout header={1} extraClass={"pt-160"}>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                  
                    <section id="ziyarah d-flex justify-centent-centre">
                      <h2 className="text-center m-3">Esteemed Locations</h2>

                    <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0001.jpg" />
                    <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0002.jpg" />
                    <img src="assets/images/heroMAKKAH ATTRACTIONS_page-0003.jpg" />
                    <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0004.jpg" />
                    <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0005.jpg" />
                    <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0006.jpg" />
                    <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0007.jpg" />
                    <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0008.jpg" />
                    <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0009.jpg" />
                    <img src="assets/images/hero/MAKKAH ATTRACTIONS_page-0010.jpg" />

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
