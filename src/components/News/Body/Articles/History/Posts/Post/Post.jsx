import React from 'react'
import styled from 'styled-components'
import useWindowDimensions from '../../../../../../../hooks/useWindowDimensions'
import Image from './Image/Image'


const Div = styled.div`
  :not(:last-child){
        margin-bottom: 84px;
        position: relative;
        :after{
            content: '';
            position: absolute;
            display: block;
            width: 100%;
            height: 1px;
            background: #D0D0D0;
            bottom: -42px;
            @media(max-width: 991px){
                bottom: -22px;
        }
        }
        @media(max-width: 991px){
            margin-bottom: 44px;
        }
    }
`
const Date = styled.time`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    display: block;
    color: #888888;
    margin-bottom: 11px;

`
const Content = styled.time`
    display: flex;
    flex-direction: column;

`
const Title = styled.time`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;

    color: #333333; 
    margin-bottom: 16px;
`
const Text = styled.time`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 143%;

    color: #888888;
    margin-bottom: 16px;
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
const Row = styled.div`
    display: flex;
`




const Post = (props) => {
    const { width } = useWindowDimensions();
    return (
        <Div>
            <Date> {props.date} </Date>
            <Row>
                {(width > 1198) || (width <= 991 && width) > 525 ? <Image image={props.image}/> : null}
                <Content>
                    <Title> {props.title} </Title>
                    {(width <= 1198 && width > 991) ? <Image image={props.image}/> : null}
                    <Text> {props.text} </Text>
                    <Button>Подробнее </Button>
                </Content>
            </Row>
        </Div>
    )
}

export default Post