import React from "react";
import styled from "styled-components";
import "./Homeslider.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideOne from "../Assets/Images/slide1.jpg";
import slideTwo from "../Assets/Images/slide2.jpg";
import slideThree from "../Assets/Images/slide3.jpg";
import slideFour from "../Assets/Images/slide4.jpg";
import slideFive from "../Assets/Images/slide5.jpg";
import slideSix from "../Assets/Images/slide6.jpg";
// // React-Slick
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Data
// import { homeSliderImages } from "../Components/Data/homeslider";
const carouselImages = [
  slideOne,
  slideTwo,
  slideThree,
  slideFour,
  slideFive,
  slideSix,
];
function Homeslider() {
  return (
    <Carousel
      className="home__carousel"
      showArrows={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      interval={5000}
      transitionTime={200}
    >
      {carouselImages.map((carouselImage) => (
        <div>
          <img src={carouselImage} alt="carousel" />
        </div>
      ))}
    </Carousel>
  );
}
export default Homeslider;
