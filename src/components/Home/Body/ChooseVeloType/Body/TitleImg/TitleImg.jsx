import React from 'react'
import styled from "styled-components";

const Div = styled.div`
    max-width: 650px;
    margin-right: 40px;
    display: flex;
    align-items: center;
    @media(max-width: 1198px){
        margin-right: 20px;
    }
    @media(max-width: 991px){
        display: none;
    }
    img{
        display: block;
        width: 100%;
    }
`

const TitleImg = (props) => {

    return(
        <Div className='TitleImg'>
            <img src={props.titleImage} alt="Bike" />
        </Div>
    )
}

export default TitleImg
