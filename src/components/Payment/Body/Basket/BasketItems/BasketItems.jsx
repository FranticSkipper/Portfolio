import React from 'react'
import styled from 'styled-components'
import BasketItemContainer from './BasketItem/BasketItemContainer'

const Div = styled.div`
    display: flex;
    flex-direction: column;
`

const BasketItems = (props) => {

    const basketList = props.basket.map(el => 
        <BasketItemContainer amout={el.amount} item={props.goods[el.id]} key={el.id} amount={el.amount}/>
        )
    return (
        <Div>
            { basketList }
        </Div>
    )
}

export default BasketItems