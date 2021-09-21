import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 114%;
    text-transform: uppercase;

    color: #333333;
`


const NoOrders = (props) => {

    return (
        <Div>
            Корзина пуста
        </Div>
    )
}

export default NoOrders