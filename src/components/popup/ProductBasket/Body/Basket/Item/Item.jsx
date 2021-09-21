import React from 'react'
import styled from 'styled-components'
import { InputNumber } from 'antd';
import { makeSpacesInNumber } from '../../../../../../functions';

const Div = styled.div`
    display: flex;
    align-content: center;
    padding: 12px 12px 17px;
    border: 1px solid #D0D0D0;
    :not(:first-child){
        border-top: 0;
    }
    .ant-input-number{
        width: 61px;
        margin-right: 23px;
    }
`
const Img = styled.div`
    flex: 0 0 115px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 15px;
    img{
        display: block;
        width: 100%;
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`
const Title = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #888888;
    margin-bottom: 8px;
`
const Row = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`
const Cost = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #333333;

    position: relative;
    :after{
        content: ' грн';
    }
`
const Item = (props) => {   
    const changeProductAmount = (el) => {
        const value = el
        props.changeProductAmountActionCreator(props.id, value)
    }

    return(
        
        <Div>
            <Img>
                <img src={props.item.image} alt={props.item.id} />
            </Img>
            <Content>
                <Title> {props.item.title} </Title>
                <Row>
                <InputNumber onChange={changeProductAmount} min={1} defaultValue={props.amount}/>
                    <Cost> {makeSpacesInNumber(props.item.currentCost * props.amount)} </Cost>
                </Row>
            </Content>
        </Div>
    )
}

export default Item
