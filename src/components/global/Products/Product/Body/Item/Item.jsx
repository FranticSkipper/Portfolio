import React from 'react'
import styled from "styled-components";
import { makeSpacesInNumber } from '../../../../../../functions';
import Parameters from './Parameters/Parameters';
import ProductAddButtonContainer from './ProductAddButton/ProductAddButtonContainer';
import Rating from './Rating/Rating';


const Div = styled.div`
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 32px 31px 0;

    border: 3px solid transparent;
    
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
    transition: .2s linear;
    
    position: relative;
    @media(max-width: 991px){
        padding: 15px 16px 0;
        margin-bottom: 15px;
    }
    :hover{
        transition: .2s linear;
        border: 3px solid #FFCC01;
        border-bottom: 3px solid transparent;
        span{
            opacity: 1;
            visibility: visible;
            border-top: 0;   
            border: 3px solid #FFCC01;
            border-top: 3px solid transparent;
        }
    }
`
const Img = styled.div`
    width: 100%;    
    min-height: 167px;
    margin-bottom: 31px;
    position: relative; 
    img{
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        object-fit: contain;
    }
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: #333333;
    margin-bottom: 5px;
    flex: 1 1 auto;

`
const Status = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #333333;
    margin-bottom: 14px;
    @media(max-width: 991px){
       margin-bottom: 5px;
    } 
`
const Cost = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    @media(max-width: 991px){
       margin-bottom: 5px;
    } 
`
const CurrentCost = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: ${props => props.oldCost ? '#FF2D47' : '#0BB812'};

    position: relative;
    :after{
        content: 'грн';
    }
`
const OldCost = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-decoration-line: line-through;

    color: #888888;
    position: relative;
    :after{
        content: ${props => props.oldCost ? 'грн' : null};
    }
`
const Hover = styled.span`
    padding: 2px 32px 180px;

    opacity: 0;
    visibility: hidden;

    position: absolute;
    z-index: 50;
    width: calc(100% + 6px);
    height: 100px;
    top: 90%;
    left: -3px;
    border: 3px solid transparent;
    background: #fff;
    transition: .2s linear;

    background-clip: padding-box;
    
    @media(max-width: 991px){
        padding: 2px 16px 150px;
    }
`

const Item = (props) => {
    
    return(
        
        <Div>
           <Img>
               <img src={props.image} alt="Продукт" />
           </Img>
           <Title> {props.title} </Title>
           <Rating currentRating={props.rating} comments = {props.comments.length}/>
           <Status> {props.isStock ? 'В наличии' : 'Нет в наличии'} </Status>
           <Cost>
               <CurrentCost {...props}> {makeSpacesInNumber(props.currentCost)} </CurrentCost>
               <OldCost {...props}> {makeSpacesInNumber(props.oldCost)} </OldCost>
           </Cost>
           <Hover>
                <ProductAddButtonContainer id={props.id}/>
                <Parameters parameters={props.parameters}/>
           </Hover>
        </Div>
    )
}

export default Item
