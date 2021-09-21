import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { makeSpacesInNumber } from '../../../../functions';
import BasketItems from './BasketItems/BasketItems';
import NoOrders from './NoOrders/NoOrders'

const Div = styled.div`
    padding: 30px;
    border: 1px dashed #888888;
    flex: 1 1 650px;
    align-self: start;
    
    @media(max-width: 1198px){
        flex: 0 1 55%;
        padding: 10px;
    }
    @media(max-width: 991px){
        flex: 1 1 auto;
        margin-bottom: 20px;
    }

`
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 114%;
    text-transform: uppercase;

    color: #333333;
`
const Text = styled.div`
    
`
const TotalCost = styled.div`
    position: relative;
    :after{
        content: ' грн';
    }
`


const Basket = (props) => {
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

    return (
        <Div>
            <BasketItems {...props}/>
            { Object.keys(props.basket).length === 0 ? 
            <NoOrders/> :
            <Row>
                <Text>Итого:</Text>
                <TotalCost>{makeSpacesInNumber(totalCost)}</TotalCost>
            </Row>
            }
            
            
        </Div>
    )
}

export default Basket