import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Div = styled.div`
    background-image: url('${props => props.image}');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    grid-area: ${props => props.area};
    
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 50px;
    left: 45px;
    @media(max-width: 991px){
        bottom: 30px;
        left: 20px;
    }
    a{
        transition: .2s linear;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 170px;
        height: 40px;
        background: #FFCC01;

        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 100%;
        text-transform: uppercase;
        color: #333333;
        position: relative;
        ::after{
            content: '';
            position: absolute;
            display: block;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);

            width: 0;
            height: 0;
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-left: 10px solid #333333;
        }
    }
`
const Text = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    text-transform: uppercase;

    color: #fff;
    margin-bottom: 15px;
`


const ItemNet = (props) => {

    const linkHover = event => {
        const el = event.target
        const styleTransition = 'scale(1.1)'
        el.style.transform = styleTransition
    }
    const linkOut = event => {
        const el = event.target
        const styleTransition = 'scale(1)'
        el.style.transform = styleTransition
    }
    return (
        <Div {...props}>
            <Content>
                <Text> {props.text} </Text>
                <NavLink onMouseOut={ linkOut } onMouseOver={ linkHover }  to='/news'>читать статью</NavLink>
            </Content>
        </Div>
    )
}

export default ItemNet