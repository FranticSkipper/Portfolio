import React from 'react'
import styled from "styled-components";

const Div = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-transform: uppercase;

    color: #333333;

    margin-bottom: 45px;
    @media(max-width: 991px){
        margin-bottom: 35px;
    }
    @media(max-width: 525){
        margin-bottom: 20px;
    }
`

const Title = (props) => {
    return (
        <Div>
             выберите тип велосипеда
        </Div>
    )
}

export default Title
