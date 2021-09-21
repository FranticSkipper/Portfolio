import Breadcrumb from '../../global/Breadcrumb/Breadcrumb';
import React from 'react'
import styled from 'styled-components'
import BasketContainer from './Basket/BasketContainer';
import PersonalInformationContainer from './PersonalInformation/PersonalInformationContainer';

const Div = styled.div`
    margin-bottom: 162px;
    @media(max-width: 1198px){
        margin-bottom: 100px;
    }
    @media(max-width: 991px){
        margin-bottom: 50px;
    }
    @media(max-width: 525px){
        margin-bottom: 20px;
    }
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-transform: uppercase;

    color: #333333;
    margin-bottom: 50px;
    @media(max-width: 991px){
        margin-bottom: 20px;
    }
`
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 991px){
        flex-direction: column-reverse;
    }
`

const Body = (props) => {
    return(
        <Div>
            <Breadcrumb/>
            <Title>Оформление заказа</Title>
           
            <Row>
                <PersonalInformationContainer/>
                <BasketContainer/>
            </Row>
        </Div>
    )
}

export default Body
