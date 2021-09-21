import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    :not(:last-child){
        margin-bottom: 20px;
    }
`

const Phone = styled.a`
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;

    color: #888888;
`



const Item = (props) => {   
    const telNumber = 'tel:' + props.number.replace(/\s/g, '').replace(/[{()}]/g, '');
    const onMouseOver = event => {
        const el = event.target;
        let color = "#FFCC01";
        el.style.color = color;
    };
    const onMouseOut = event => {
        const el = event.target;
        let color = "#888888";
        el.style.color = color;
    };
    return(
        <Div>
            <Phone onMouseOut={onMouseOut} onMouseOver={onMouseOver} href={telNumber}> {props.number} </Phone>
        </Div>
    )
}

export default Item
