import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { itemColorActive, itemColorUnactive } from '../../../../../../../../functions'
const Text = styled.div`   
    margin-bottom: 10px;
    a{
        font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 116%;

    color: #888888;
    }
    
    :last-child{
        margin-bottom: 30px;
    }
`

const Item = (props) => {

    return (
        <Text onMouseOut={itemColorUnactive} onMouseOver={itemColorActive}>
            <NavLink to={props.link}>
                { props.name }
             </NavLink>
        </Text>
    )
}

export default Item


