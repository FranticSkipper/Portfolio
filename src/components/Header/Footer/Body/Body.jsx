import React, { useState } from 'react'
import Logo from './Logo/Logo'
import styled from 'styled-components'
import CatalogBtn from './CatalogBtn/CatalogBtn'
import PhoneCall from './PhoneCall/PhoneCall'
import CartContainer from './Cart/CartContainer'
import Burger from './Burger/Burger'
import FormFieldContainer from './FormField/FormFieldContainer'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'
import CatalogContainer from './Catalog/CatalogContainer'
import { bodyLock, bodyUnlock } from '../../../../functions'

const Div = styled.div`
    max-width: 1470px;
    margin: 0 auto;
    padding: 14px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: #fff;
`

const Body = (props) => {
    
    const [isActive, setIsActive] = useState(false)
    if(isActive)
        bodyLock()
    else
        bodyUnlock()
    
    const {width } = useWindowDimensions();
    const  buttonClick = () => {
        let icon = isActive ? false : true;
        setIsActive(icon)
    };
    return (
        <Div>
            <Logo/>   
            <CatalogBtn isActive={isActive} buttonClick={buttonClick}/>
            {width > 991 ? <FormFieldContainer/> : null}
            <PhoneCall/>
            <CartContainer/>
            <Burger isActive={isActive} buttonClick={buttonClick}/>
            <CatalogContainer isActive={isActive}/>
            
        </Div>
    )
}

export default Body