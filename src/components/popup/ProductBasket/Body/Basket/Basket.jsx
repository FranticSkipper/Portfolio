import Item from './Item/Item'
import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    margin-bottom: 18px;
`
const Items = styled.div`

`

const Basket = (props) => {  
    const basketList = props.basket.map(el => 
        <Item 
            id={el.id}
            key={el.id}
            changeProductAmountActionCreator={props.changeProductAmountActionCreator} 
            item={props.goods[el.id]} 
            amount={el.amount}/>
    )
    return(
        <Div>
            <Items>
                { basketList }
            </Items>
        </Div>
    )
}

export default Basket
