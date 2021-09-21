import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemSlider from './ItemSlider/ItemSlider';

const Div = styled.div`
padding: 10px 0;

  .slick-track {
    display: flex;
    align-items: center;

  }
  .slick-slide{
    display: flex;
    justify-content: center;
    user-select: auto;
  }
  
`

const BrandsSlider = (props) => {

  let settings = {
    arrows : false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 789,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

    const ItemsList = props.sponsors.map(el => {
      return <ItemSlider key={el.id} image = {el.image}/>
    })
    return(
        <Div>
             <Slider {...settings}>
              { ItemsList }
            </Slider>
        </Div>
    )
}

export default BrandsSlider
