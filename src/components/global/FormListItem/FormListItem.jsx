import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    display: flex;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 200%;

    color: #333333;
    padding-left: 21px;
    position: relative;
    span{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        border: 1px solid #D0D0D0;
        display: block;
        width: 14px;
        height: 14px;
    }
`
const Input = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    clip: rect(0 0 0 0);
    :checked+span{
        border: 1px solid #FFCC01;
        :after{
            content: '';
            position: absolute;
            display: block;
            width: 8px;
            height: 8px;
            background: #FFCC01;
            top: 2px;
            left: 2px;
        }
    }
`
const Amount = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 200%;

    color: #888888;
    margin-left: 4px;
    position: relative;
    :before{
        content: '(+';
    }
    :after{
        content: ')';
    }
`


const FormListItem = (props) => {
    return(
        <Label>
            <Input type="checkbox" name={props.inputName}/>
            {props.text}
            <span></span>
            <Amount> {props.goodsAmount} </Amount>
        </Label>
        




    )
}

export default FormListItem