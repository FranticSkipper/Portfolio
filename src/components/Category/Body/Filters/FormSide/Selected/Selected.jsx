import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    padding: 0 23px 27px;
    border-bottom: 1px solid #E5E5E5;
`
const Title = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #333333;
    margin-bottom: 14px;
`
const Сategories = styled.div`
    margin-bottom: 15px;
`
const Button = styled.button`
    display: inline-block;
    padding-left: 18px;
    border: 0;
    background-color: transparent;
    border-bottom: 1px dashed #333333;

    position: relative;
    :after,:before{
        content: '';
        position: absolute;
        display: block;
        width: 15px;
        height: 1px;
        background: #333333;
        top: 8px;
        left: 2px;
    }
    :after{
        transform: rotate(45deg);
    }
    :before{
        transform: rotate(-45deg);
    }

`


const Selected = (props) => {
    return(
        <Div>
            <Title>Выбраные фильтры:</Title>
            <Сategories>
             
            </Сategories>
            <Button type='reset'>очистить фильтры</Button>
        </Div>
    )
}

export default Selected
