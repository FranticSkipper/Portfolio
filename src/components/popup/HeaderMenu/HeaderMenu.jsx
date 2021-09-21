import React, { useState } from 'react'
import styled from 'styled-components'
import Menus from './Menus/Menus'
import Сategory from './Сategory/Сategory'

const Div = styled.div`
    display: flex;
    height: 728px;
    transition: .3s ease-in-out;
    @media(max-width: 991px){
        height: auto;
    }
`

const HeaderMenu = (props) => {
    const [menuValue, setMenuValue] = useState('bicycles')
    const [isSideActive, setIsSideActive] = useState(false)
    return (
        <Div {...props}>
            <Сategory setIsSideActive={setIsSideActive} setMenuValue={setMenuValue} {...props}/>
            <Menus setIsSideActive={setIsSideActive} isSideActive={isSideActive} menuValue={menuValue} {...props}/>
        </Div>
    )
}

export default HeaderMenu