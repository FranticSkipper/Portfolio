import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Li = styled.li`
    flex: 0 1 20%;
    margin-bottom: 30px;
    padding: 0 5px;
    :last-child{
        margin-right: auto;
    }
    @media(max-width: 1198px){
        flex: 0 1 25%;
    }
    @media(max-width: 991px){
        flex: 0 1 25%;
        padding: 0;
    }
    @media(max-width: 792px){
        flex: 0 1 33.33%;
    }
    @media(max-width: 525px){
        flex: 0 1 50%;
    }
    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
`

const Img = styled.div`
    width: 110px;
    flex: 1 1 100%;
    margin-bottom: 5px;
    img{
        display: block;
        width: 100%;
    }
`
const Text = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #888888;
`


const Item = (props) => {
    return(
        <Li>
            <NavLink  to={props.link}>
                <Img>
                    <img src={props.image} alt="Bike" />
                </Img>
                <Text>{props.title}</Text>
            </NavLink>
        </Li>
    )
}

export default Item
