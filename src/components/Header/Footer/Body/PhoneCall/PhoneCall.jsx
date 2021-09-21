import React from 'react'
import styled from "styled-components";
import Callback from './Callback/Callback';
import PhoneNumberContainer from './PhoneNumber/PhoneNumberContainer';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 62px;
    position: relative;
    @media (max-width: 1198px){
        margin-right: 30px;
    }
    @media (max-width: 991px){
        margin-left: auto;
    }
    ::after{
        content: '';
        position: absolute;
        right: -32px;
        top: 50%;
        transform: translateY(-50%);

        display: block;
        width: 1px;
        height: 40px;
        background: #D0D0D0;
        @media (max-width: 1198px){
            margin-right: 15px;
        }
    }
`

const PhoneCall = () => {
    return (
        <Div>
            <PhoneNumberContainer/>
            <Callback/>
        </Div>
    )
}

export default PhoneCall