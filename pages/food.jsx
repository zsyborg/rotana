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
                <div class="col-12 m-0 p-0">
                  
                    <section id="food">

                    <img src="assets/images/Deluxe Bronze_page-0001.jpg" />
                    <img src="assets/images/EXCLUSIVE SILVER_page-0001.jpg" />
                    <img src="assets/images/EXCOTIC GOLDEN_page-0001.jpg" />
                    <img src="assets/images/MARVELLOUS PLATINUM_page-0001.jpg" />

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
