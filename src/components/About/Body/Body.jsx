import React from 'react'
import styled from 'styled-components'
import BreadcrumbLine from '../../global/Breadcrumb/Breadcrumb'
import Advantage from './Advantage/Advantage'
import SubscribeContainer from './Subscribe/SubscribeContainer'


const Div = styled.div`
    
`
const Row = styled.div`
    display: flex;
    margin-bottom: 75px;
    @media(max-width: 991px){
        flex-direction: column;
        margin-bottom: 40px;
    }
`
const Content = styled.div`
    flex: 0 1 45%;
    margin-right: 160px;
    @media(max-width: 991px){
        flex: 1 1 auto;
        margin-bottom: 35px;
        margin-right: 0;
    }
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-transform: uppercase;

    color: #333333;
    margin-bottom: 38px;
    @media(max-width: 991px){
        margin-bottom: 28px;
    }
    @media(max-width: 525px){
        margin-bottom: 18px;
    }
`
const SubTitle = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 116%;

    color: #333333;
    margin-bottom: 12px;
`
const Text = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 143%;

    color: #888888;
`


const Body = (props) => {
    return(
        <Div>
            <BreadcrumbLine/>
            <Title>О магазине</Title>
            <Row>
                <Content>
                    <SubTitle>Репутация - это все что для нас важно</SubTitle>
                    <Text>Приветствуем на сайте украинского интернет-магазина велосипедов и сопутствующих 
                        товаров. Наши целевая аудитория — опытные спортсмены и поклонники активного способа жизни, 
                        новички, которые лишь начинают осваивать навыки катания. Velostandart предложит лучшие байки 
                        каждому покупателю с учетом любых требований.</Text>
                </Content>
                <SubscribeContainer/>
            </Row>
            <Advantage/>
        </Div>
    )
}

export default Body
