import React from 'react'
import Item from './Item/Item';
import styled from 'styled-components'

const Div = styled.div`
    width: 180px;
    
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;

    color: #333333;
    margin-bottom: 12px;
`


const SubMenus = (props) => {
    const subMenuList = props.values.map(el => 
        <Item key={el.id} name={el.name} link={el.value}/>
        )
    return (
        <Div>
            <Title> {props.title} </Title>
            { subMenuList }
        </Div>
    )
}

export default SubMenus


