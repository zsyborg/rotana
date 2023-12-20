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
// import LightboxExample from "@/src/components/images";
import FsLightbox from "fslightbox-react";
const RotanaGallery = () => {

    const [toggler, setToggler] = useState(false);
// console.log(imageList)
  return (
    <Layout header={1}>
      <PageBanner pageTitle={"Gallery"} />
      
      <section className="gallery-area pt-100 pb-70 container">
        <div className="row flex-row">
            <div className="col-12 d-flex text-center flex-column justify-content-center">
                <h2 className="islamiccolor">View our traveller's Umrah Experiences!</h2>
                <br/>
            <button onClick={() => setToggler(!toggler)} className="bg-success p-3 h-75 text-white">
                        Click To View Gallery
                    </button>
                    <FsLightbox
                        toggler={toggler}
                        sources={[
                            
                
                            'https://rotanatours.in/assets/images/gallery-images/1.jpeg',
                    
                
                            'https://rotanatours.in/assets/images/gallery-images/10.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/11.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/12.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/13.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/14.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/15.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/16.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/17.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/18.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/19.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/2.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/20.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/21.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/22.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/23.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/24.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/25.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/26.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/27.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/28.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/29.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/3.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/30.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/31.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/32.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/33.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/34.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/35.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/36.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/37.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/38.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/39.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/4.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/40.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/41.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/42.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/43.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/44.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/45.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/46.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/47.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/48.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/49.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/5.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/50.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/51.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/52.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/53.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/54.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/55.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/56.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/57.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/58.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/59.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/6.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/60.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/61.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/62.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/63.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/64.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/65.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/66.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/67.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/68.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/69.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/7.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/70.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/71.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/72.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/73.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/74.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/75.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/76.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/77.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/78.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/79.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/8.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/80.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/81.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/82.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/83.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/84.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/85.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/86.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/87.jpeg',
                            
                        
                            'https://rotanatours.in/assets/images/gallery-images/9.jpeg',
                            
                        ]}
                    />

            </div>
        </div>
    

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

{/* 
    <div>
      <LightboxExample/>
    </div> */}


      </section>
      
    </Layout>
  );
};
export default RotanaGallery;
