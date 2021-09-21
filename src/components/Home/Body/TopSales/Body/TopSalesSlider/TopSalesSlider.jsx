import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemSlider from './ItemSlider.jsx/ItemSlider';
import styled from 'styled-components'

const Div = styled.div`
    .slick-slide:not(.slick-current){
      transform: scale(.5);
      span {
        display: none;
      }
    }
    .slick-slide{
      transition: .5s linear;
      user-select: auto;
    }
`

const TopSalesSlider = (props) => {

      let settings = {
      speed: 300,
      infinite: true,
      autoplay: true,
      slidesToShow: 3,
      centerMode: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          }
        },
        {
          breakpoint: 789,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          }
        }
      ]
      };
      const amountItems = 5
      const itemsToSlider = []
      for(let i = 0; i < amountItems;i++){
          itemsToSlider.push(props.goods[i])
      }
      
      const ItemsList = itemsToSlider.map(el => 
       <ItemSlider
          key={el.id}
          id={el.id}
          image = {el.image}
          title = {el.title}
          oldCost = {el.oldCost}
          currentCost = {el.currentCost}
          labels = {el.labels} 
          basket = {props.basket}
          addNewProductActionCreator={props.addNewProductActionCreator}
          changeProductAmountActionCreator={props.changeProductAmountActionCreator}
        />
    )
    return(
        <Div>
            <Slider {...settings}>
              { ItemsList }
            </Slider>

        </Div>
    )
}
export default TopSalesSlider
