import React, { useState } from 'react'
import styled from 'styled-components'
import Menus from './Menus/Menus'
import Сategory from './Сategory/Сategory'

const Div = styled.div`
    position: absolute;
    z-index: 100;
    top: 100%;
    left: 0;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    align-items: stretch;
    height: 700px;

    transition: .3s ease-in-out;
  
    opacity: ${props => props.isActive ? 1 : 0};
    visibility: ${props => props.isActive ? 'visible' : 'hidden'};

    @media (max-width: 991px) {
        height: auto;
    }
    @media(max-width: 525px){
        position: fixed;
        width: 100%;
        height: calc(100% - 93px);
        top: 93px;
        left: ${props => props.isActive ? '0px' : '-100%'};;
    }
`

const Catalog = (props) => {
    const [menuValue, setMenuValue] = useState('bicycles')
    const [isSideActive, setIsSideActive] = useState(false)

    return (
        <Div {...props}>
            <Сategory setIsSideActive={setIsSideActive} setMenuValue={setMenuValue} {...props}/>
            <Menus setIsSideActive={setIsSideActive} isSideActive={isSideActive} menuValue={menuValue} {...props}/>
        </Div>
    )
}

export default Catalog