import React from 'react'
import styled from 'styled-components'
import { makeSpacesInNumber } from '../../../../../../../functions'
import Label from './Label/Label'

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    
`
const Img = styled.div`
    width: 100%;
    height: 200px;
    margin-bottom: 40px;
    position: relative;
    img{
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`
const Row = styled.span`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 143%;
    color: #333333;
    flex: 0 1 180px;
    text-align:justify;
    @media(max-width: 1365px){
        flex: 1 1 100%;
        margin-bottom: 10px;
    }
`
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    cursor: pointer;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #333333; 
    text-transform: uppercase;
    cursor: pointer;
    background: #FFCC01;
    border-radius: 5px;
    border: 0;
`
const Cost = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const OldCost = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: line-through;

    color: #888888;
`
const CurrentCost = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;

    color: #EF4155;

`
const Labels = styled.span`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
`

const ItemSlider = (props) => {

    const labelsList = props.labels.map( (el, index) => {
        return <Label key={index} text={el}/>
    })
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
    return (
        <Div>
            <Img>
                <img src={props.image} alt="Топ продаж" />
            </Img>
            <Row>
                <Title>{props.title}</Title>
                <Cost>
                    <OldCost> {props.oldCost ? makeSpacesInNumber(props.oldCost) : null}</OldCost>
                    <CurrentCost> {makeSpacesInNumber(props.currentCost)} </CurrentCost>
                </Cost>
                <Button onClick={addProductToCart}> купить </Button>
            </Row>
            <Labels>
                { labelsList }
            </Labels>
        </Div>
    )
}
export default ItemSlider