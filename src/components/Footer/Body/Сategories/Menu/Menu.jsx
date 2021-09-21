import React from 'react'
import styled from 'styled-components'
import Item from './Item/Item'

const Div = styled.div`

`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    margin-bottom: 15px;
    ::first-letter{
        text-transform: uppercase;
    }
`

const Menu  = (props) => {

    const itemsList = props.name.list.map(el => 
        <Item key={el.id} text={el.name} link={el.link}/>)
        
    return (
        <Div>
            <Title> {props.name.title} </Title>
            <nav>
                <ul>
                    { itemsList }
                </ul>
            </nav>
        </Div>
    )
}

export default Menu 