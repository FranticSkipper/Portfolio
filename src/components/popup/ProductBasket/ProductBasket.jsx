import React from 'react'
import styled from 'styled-components'
import Body from './Body/Body'

const Div = styled.div`
    padding: 43px 46px 37px 42px;
    position: relative;
    
`

const ProductBasket = (props) => {   
    return(
        <Div>
            <Body {...props}/>
        </Div>    
    )
}

export default ProductBasket
