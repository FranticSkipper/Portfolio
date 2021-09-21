import Title from './Title/Title';
import React from 'react'
import styled from "styled-components";
import Advantage from '../../../../../global/Advantage/Advantage';
import MenuContainer from '../../../../../global/Menu/MenuContainer';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 65%;
    @media(max-width: 991px){
        flex: 1 1 100%;
    }
`

const Content = (props) => {
    return(
        <Div>
            <Title/>
            <MenuContainer/>
            <Advantage colored extraText/>
        </Div>
    )
}

export default Content
