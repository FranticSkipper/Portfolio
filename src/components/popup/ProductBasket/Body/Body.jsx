import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { makeSpacesInNumber } from '../../../../functions'
import BasketContainer from './Basket/BasketContainer'
import Info from './Info/Info'
import NoProducts from './NoProducts/NoProducts'

const Div = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #333333;
    margin-bottom: 23px;
`
const TotalCost = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: #0BB812;
    border-bottom: 1px solid #000;
    text-align: end;
    
    position: relative;
    margin-bottom: 28px;
    :after{
        content: ' грн';
    }
    :before{
        content: 'Итого: ';
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;

        color: #333333;
    }
`



const ButtonCard = styled.button`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;

    color: #333333;
    margin-bottom: 12px;
    background: #FFCC01;
    border-radius: 5px;
    border: 0;
    height: 50px;
`
const ButtonBack = styled.button`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;

    color: #FFFFFF;
    background: linear-gradient(180deg, #246895 0%, #3394D6 100%);
    border-radius: 5px;
    border: 0;
    height: 35px;
`

const Body = (props) => {   
    const [totalCost, setTotalCost] = useState(0)
    useEffect(() => {
       
    })
    useEffect(() => {
        let total = 0
       props.basket.forEach(el => {
           const itemCost = props.goods[el.id].currentCost
           const itemAmount = el.amount
           const itemTotal = itemCost * itemAmount
           total += itemTotal
           
       });
        setTotalCost(total)
    }, [props.basket, props.goods])
    return(
        <Div>
            <Title>Корзина</Title>
            <BasketContainer/>
            {totalCost === 0 ? <NoProducts/> : <TotalCost>{makeSpacesInNumber(totalCost)}</TotalCost>}
            
            <Info/>


            <ButtonCard>Перейти в корзину</ButtonCard>
            <ButtonBack>Вернуться к покупкам</ButtonBack>
        </Div>
    )
}

export default Body
