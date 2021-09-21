import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { itemColorActive, itemColorUnactive } from '../../../../../../functions';


const Li = styled.li`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: #888888;
    a{
        color: inherit
    }
    padding: 0 5px;
    :not(:last-child){
        margin-right: 32px;
        position: relative;
        @media(max-width: 768px){
            margin-right: 24px;
            padding: 0 2px;
        }
        @media(max-width: 525px){
            margin-right: 0;
        }
        ::after{
            content: '';
            position: absolute;
            display: block;
            width: 1px;
            height: 18px;
            background: #E0E0E0;
            top: 50%;
            right: -16px;
            transform: translateY(-50%);
            @media(max-width: 768px){
                right: -12px;
            }
            @media(max-width: 525px){
                right: 0;
                top: 100%;
                width: 100%;
                height: 1px;
            }
        }
    }
`

const Item = (props) => {
    return (
        <Li>
            <NavLink onMouseOut={ itemColorUnactive } onMouseOver={ itemColorActive } to={props.link}>{props.name}</NavLink>
        </Li>
    )
}

export default Item