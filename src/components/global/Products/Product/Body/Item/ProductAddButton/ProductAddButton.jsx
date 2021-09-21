import React from 'react'
import styled from "styled-components";

const Button = styled.button`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    width: 160px;
    height: 50px;
    background: #FFCC01;
    text-transform: uppercase;
    border-radius: 5px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    color: #333333;
    margin-bottom: 29px;
    @media(max-width: 991px){
        margin-bottom: 15px;
        height: 40px;
        width: 100%;
    }
`
const ProductAddButton = (props) => {
    const addProductToCart = (e) => {
        const value = e.target.value
        for(let i = 0; i <= props.basket.length - 1; i++){
            if(Number(props.basket[i].id) === Number(props.id)){
                props.changeProductAmountActionCreator(props.id, value)
                return
            }
        }
        props.addNewProductActionCreator(props.id)


    }
    return(
        <Button onClick={addProductToCart}>купить</Button>
    )
}

export default ProductAddButton
