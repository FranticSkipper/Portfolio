import React from 'react'
import styled from "styled-components";
import Item from './Item/Item';

const Nav = styled.nav`
`
const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 -5px;
`
const Menu = (props) => {

    const menuList = props.menu.map ( el => <Item key={el.id} image={el.image} title={el.title} link={el.link}/>)

    return(
        <Nav>
            <Ul>
                { menuList } 
            </Ul>
        </Nav>
    )
}

export default Menu
