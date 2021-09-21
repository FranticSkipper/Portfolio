import React from 'react'
import styled from "styled-components";

const Div = styled.div`
    display: none;

    width: 20px;
    height: 20px;
    flex: 0 0 auto;
    position: relative;
    z-index: 20;
    ::after, ::before{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 1px;
        background: #000;
    }
    ::after{
        top: 0;
    }
    ::before{
        bottom: 0;
    }
    span{
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 1px;
        background: #000;

        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    @media (max-width: 991px){
        display: block;
    }
`

const Burger = (props) => {



    return (
        <Div onClick={props.showModal}>
            <span></span>
        </Div>
    )
}

export default Burger


// {props.isActive ? <MenuUnfoldOutlined style={ BtnIconStyle }/> : <MenuFoldOutlined style={ BtnIconStyle }/>}