import React from 'react'
import styled from 'styled-components'
import Item from './Item/Item'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Items = styled.div`
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
`
const CallBack = styled.button`
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    border: 0;
    background: none;

    color: #0BB812;
`


const Body = (props) => {   

    const numbersList = props.phoneNumbers.map((el, index) => 
            <Item key={index} number={el}/>
    )
    
    return(
        <Div>
            <Items>
                { numbersList }
            </Items>
            <CallBack>Заказать обратный звонок</CallBack>
        </Div>
    )
}

export default Body
