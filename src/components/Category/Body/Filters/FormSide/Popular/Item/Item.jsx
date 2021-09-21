import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const Div = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 157%;
    text-decoration-line: underline;

    color: #333333;
    a{
        color: inherit;
    }

`
const Item = (props) => {
    return(
        <Div>
           <NavLink to={props.link}> {props.name} </NavLink>
        </Div>
    )
}

export default Item
