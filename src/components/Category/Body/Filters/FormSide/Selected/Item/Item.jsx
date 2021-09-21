import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    padding: 6px 31px 4px 6px;
    background: #E5E5E5;
    display: inline-block;
    position: relative;
    :after,
    :before{
        content: '';
        position: absolute;
        display: block;
        width: 10px;
        height: 1px;
        background: #333333;
        top: 16px;
        right: 12px;
    }
    :after{
        transform: rotate(45deg);
    }
    :before{
        transform: rotate(-45deg);
    }
`



const Item = (props) => {
    return(
        <Div>
            {props.category}
        </Div>
    )
}

export default Item
