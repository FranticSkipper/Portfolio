import React from 'react'
import styled from "styled-components";
import Item from './Item/Item';

const Ul = styled.ul`
    display: flex; 
    flex-wrap: wrap;
    margin-bottom: 0;
    @media(max-width: 525px){
        flex-direction: column;
    }
`

const Menu = (props) => {
    const menuList = props.menu.map(el =>
        <Item key={el.id} name={el.name} link={el.link}/>
        )
    return (
        <nav>
            <Ul>
               { menuList }
            </Ul>
        </nav>
    )
}

export default Menu