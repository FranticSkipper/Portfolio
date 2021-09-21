import React from 'react'
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 10px;
    margin-bottom: 10px;
    background-color: inherit;
`

const Title = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background: #fff;   

color: #888888;
`
const Values = styled.div`
    background: #fff;
    display: flex;  
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
`
const Value = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    color: #888888;
    :not(:last-child){
        margin-right: 4px;
    }
`
const DottedLine  = styled.div`
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    border-bottom: 2px dotted #888888;
    z-index: 1;
`

const Row = (props) => {   
    const valuesList = props.parametr.values.map((el, index) => {return <Value key={index}> {el} </Value>}) 
    
    return(
        <Div>
            <Title> {props.parametr.title} </Title>
            <Values> {valuesList} </Values>
            <DottedLine></DottedLine>
        </Div>
    )
}

export default Row
