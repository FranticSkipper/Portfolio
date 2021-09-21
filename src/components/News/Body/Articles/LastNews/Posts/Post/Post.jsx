import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    :not(:last-child){
        margin-bottom: 35px;
    }
`
const Date = styled.time`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #888888;
    margin-bottom: 11px;
`
const Img = styled.time`
    position: relative;
    max-width: 541px;
    img{
        display: block;
        width: 100%;
    }
`
const Content = styled.time`
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 40px;
    left: 40px;
    @media(max-width: 1198px){
        bottom: 30px;
        left: 30px;
    }
    @media(max-width: 525px){
        bottom: 10px;
        left: 10px;
        right: 10px;
    }
`
const Title = styled.time`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;
    margin-bottom: 28px;
    @media(max-width: 991px){
        margin-bottom: 18px;
    }
    @media(max-width: 525px){
        margin-bottom: 10px;
    }
`
const Button = styled.button`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;

    color: #333333;
    align-self: start;
    padding: 7px 47px 7px 14px;
    background: #FFCC01;
    border: 0;
`





const Post = (props) => {
    return (
        <Div>
            <Date> {props.date} </Date>
            <div>
                <Img>
                    <img src={props.image} alt={props.image} />
                </Img>
                <Content>
                    <Title> {props.title} </Title>
                    <Button> Подробнее </Button>
                </Content>
            </div>

        </Div>
    )
}

export default Post