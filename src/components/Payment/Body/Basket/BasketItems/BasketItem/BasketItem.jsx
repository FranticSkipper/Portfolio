import { CloseOutlined } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'
import { InputNumber } from 'antd';
import { makeSpacesInNumber } from '../../../../../../functions'

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 50px;
    @media(max-width: 991px){
        flex-wrap: wrap
    }
    :after{
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        background: #000;
        bottom: -25px;
    }
`
const Img = styled.div`
    max-width: 130px;
    margin-right: 5px;
    @media(max-width: 991px){
        display: flex;
        justify-content: center;
        margin: 0 auto 25px;
        max-width: 60%;
    }
    @media(max-width: 525px){
        margin-bottom: 10px;
    }
    img{
        display: block;
        width: 100%;
    }
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 166%;

    max-width: 150px;
    margin-right: 5px;
    @media(max-width: 1198px){
        max-width: 100px;
    }
    @media(max-width: 991px){
        max-width: 170px;
        margin-right: 15px;
    }
    @media(max-width: 525px){
        flex: 1 1 100%;
        max-width: none;
        margin-bottom: 10px;
    }
`
const Label = styled.label`
    align-self: center;
    margin-right: 8px;
    @media(max-width: 991px){
        margin-right: 15px;
    }
`

const Cost = styled.div`
    align-self: center;
    display: flex;
    align-content: center;
    line-height: 31px;
    margin-right: 5px;
    flex: 1 1 auto;

    color: #333333;
    @media(max-width: 991px){
        margin-right: 15px;
    }

`
const Button = styled.button`
    background: none;
    border: 0;
`
const Action = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 0 0 70%;
    flex-wrap: wrap;
    @media(max-width: 991px){
        flex: 1 1 100%;
        justify-content: flex-end;
    }
    @media(max-width: 525px){
        justify-content: space-between;
    }
`


const BasketItem = (props) => {
    const changeAmount = (el) => {
        const value = el
        props.changeProductAmountActionCreator(props.item.id, value)
    }
    const getTotalCost = (cost, amount) => {
        const totalCost = cost * amount
        return makeSpacesInNumber(totalCost)
    }
    
    const deleteProduct = () => {
        props.deleteProductActionCreator(props.item.id)
    }
    return (
        <Div>
            <Img>
                <img src={props.item.image} alt="#" />
            </Img>
            
            <Action>
                <Title>{props.item.title}</Title>
                <Label>
                    <InputNumber onChange={changeAmount} min={1} defaultValue={1} value={props.amout}  />
                    шт.
                </Label>
                <Cost>{getTotalCost(props.item.currentCost, props.amout)} грн.</Cost>
                <Button onClick={deleteProduct}>
                    <CloseOutlined />
                </Button>
            </Action>
            
        </Div>
    )
}

export default BasketItem