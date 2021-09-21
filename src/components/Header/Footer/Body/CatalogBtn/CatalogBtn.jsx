import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import React from 'react'
import styled from "styled-components";

const Div = styled.div`
    margin-right: 7px;
    @media (max-width: 991px){
        display: none;
    }
`

const Button = styled.button`
    width: 200px;
    height: 54px;
    background: #FFCC01;
    @media (max-width: 1198px){
        width: 54px;
    }
`
const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Text = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
    margin-left: 24px;
    @media (max-width: 1198px){
        display: none;
    }
    
`
const BtnIconStyle = {fontSize: '22px'}

const CatalogBtn = (props) => {
    

    return (
        <Div>
            <Button onClick={ props.buttonClick }>
                <ButtonDiv>
                    {props.isActive ? <MenuUnfoldOutlined style={ BtnIconStyle }/> : <MenuFoldOutlined style={ BtnIconStyle }/>}
                    <Text> Каталог </Text>
                </ButtonDiv>
                
            </Button>
        </Div>
        
    )
}

export default CatalogBtn