import React from "react";
import Slider from "react-slick";
import img1 from '../../images/balcony/balcony_standard_aa7.jpg'
import img2 from '../../images/balcony/balcony_standard_aa5.jpg'
import img3 from  '../../images/balcony/balcony_standard_aa6.jpg'
import img4 from '../../images/balcony/balcony_standard_aa4.jpg'
import img5 from '../../images/balcony/balcony_standard_aa3.jpg'
import img6 from  '../../images/balcony/balcony_standard_aa2.jpg'
import Container from "@material-ui/core/Container";
import './slider.css'

export default function Banner() {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnDotsHover: true,
        fade: true,
        className: 'slides'

    }
    
    return (
        <Container>
        <Slider {...settings}>
          <div>
            <img src={img1} alt="images here" width="100%" height="auto" />
          </div>
          <div>
          <img src={img2} alt="images here" width="100%"height="auto" />
          </div>
          <div>
          <img src={img3} alt="images here" width="100%" height="auto" />
          </div>
          <div>
          <img src={img4} alt="images here" width="100%" height="auto" />
          </div>
          <div>
          <img src={img5} alt="images here" width="100%" height="auto" />
          </div>
          <div>
          <img src={img6} alt="images here" width="100%" height="auto" />
          </div>
        </Slider>
      </Container>
    )
}
