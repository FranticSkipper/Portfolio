import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    a{
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;

        color: #0BB812;
        @media(max-width: 525px){
            display: none;
        }
    }
`
const Text = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 116%;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 10px;
    @media(max-width: 525px){
        font-size: 20px;
        }
`

const Title = () => {
    return (
        <Div>
            <Text>статьи о велосипедах</Text>
            <NavLink to='/news' >все сатьи</NavLink>
        </Div>
    )
}

export default Title