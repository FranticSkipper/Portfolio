import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
    border-bottom: 1px solid #000;
    text-align: end;
    margin-bottom: 28px;
`

const NoProducts = (props) => {   
    return(
        <Div>
            Корзина пуста
        </Div>    
    )
}

export default NoProducts
