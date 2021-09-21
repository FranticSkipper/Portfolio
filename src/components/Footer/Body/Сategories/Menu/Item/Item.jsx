import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { itemColorActive, itemColorUnactive } from '../../../../../../functions';

const Li = styled.li`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #999;
    margin-bottom: 15px;
   
    a{
        transition: .2s linear;
        color: inherit
    }
    ::first-letter{
        text-transform: uppercase;
    }
`

const Item  = (props) => {

    return (
        <Li>
            <NavLink to={props.link} onMouseOver={itemColorActive} onMouseOut={itemColorUnactive}> { props.text } </NavLink>
        </Li>
    )
}

export default Item 