import {useState} from "react";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Slider from "react-slick";
import React, { Component } from 'react';
// import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import PhotoAlbum from "react-photo-album";
// const images = require.context('../public/assets/images/gallery-images', true);
// const imageList = images.keys().map(image => images(image));
// import Gallery from 'react-photo-gallery';
// import Lightbox from 'react-images';
import LightboxExample from "@/src/components/images";

const RotanaGallery = () => {


// console.log(imageList)
  return (
    <Layout header={1}>
      <PageBanner pageTitle={"Gallery"} />
      {/*====== Start Gallery Section ======*/}
      <section className="gallery-area pt-100 pb-70">
       
    

        {/* <div className="container">
          <div className="row">
      {imageList.map((image, index) => (
            <div className="col-3 d-flex justify-content-center">
            </div>
            ))}
            </div>
          </div> */}
    {/* {imageList.map((image, index) => ( */}
      
          {/* <a href="#" >
            <img onClick={openLightbox} className="img-fluid" key={index} src='../public/assets/images/gallery-images/'{...image.default} alt={`image-${index}`} />
          </a> 
      
        
      ))}
          */}
      {/* <Gallery photos={imageList} onClick={openLightbox} /> */}


    <div>
      <LightboxExample/>
    </div>


      </section>
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default RotanaGallery;
