import React from 'react'
import Footer from './Footer/Footer'
import Top from './Top/Top'
import styled from 'styled-components'

const Div = styled.div`
    margin-bottom: 20px;
    position: relative;
    z-index: 100;
    @media(max-width: 991px){
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        box-shadow: 0px 12px 10px -7px rgba(0, 0, 0, 0.2);
    }
`

const Header = () => {
    return (
        <Div>
            <Top/>
            <Footer/>
        </Div>
    )
}

export default Header