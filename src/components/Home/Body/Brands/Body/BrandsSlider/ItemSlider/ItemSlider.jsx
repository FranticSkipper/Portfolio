import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        display: block;
        width: 100%;
    }
`

const ItemSlider = (props) => {
    return (
        <Div>
            <img src={props.image} alt="" />
        </Div>
    )
}
export default ItemSlider