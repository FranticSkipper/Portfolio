import React from 'react'
import logo from '../../../../../assets/global/logo.svg'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Div = styled.div`
    margin-right: 50px;
    a{
        display: block;
        max-width: 1177px;
    }
    img{
        display: block;
        width: 100%;
    }
    @media (max-width: 1198px){
        margin-right: 20px;
    }
`

const Logo = () => {
    return (
        <Div>
            <NavLink to="/">
                <img src={logo} alt='Logo' />
            </NavLink>
        </Div>
    )
}

export default Logo