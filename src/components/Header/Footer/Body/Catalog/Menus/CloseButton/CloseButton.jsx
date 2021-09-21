import { LeftOutlined } from '@ant-design/icons';
import React from 'react'
import styled from 'styled-components';


const Button = styled.div`
    background: #F9F9F9;
    width: 100%;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    color: #333333;
    padding: 10px 25px;
    margin-bottom: 31px;
    svg{
        margin-right: 25px;
    }
`   

const imgStyle = { color: 'inherit', fontSize: '12px'}

const CloseButton = (props) => {

    return (
        <Button onClick={ () => {props.setIsSideActive(false)}}>
            <LeftOutlined  style={imgStyle} />
            Назад
        </Button>
    )
}

export default CloseButton


