import React from 'react'
import styled from "styled-components";
import { Breadcrumb } from 'antd';

const Div = styled.nav`
    margin-bottom: 20px;
    .ant-breadcrumb-link{
        :hover{
            color: #FFCC01;
        }
    }
`

const BreadcrumbLine = (props) => {
    const linkNames = {
        payment: 'Оформление заказа',
        about: 'О магазине',
        news: 'Новости',
        home: 'Главная',
        contacts: 'Контакты'
    }
    const currentUrl = document.location.href;
    const currentUrlList = currentUrl.split("/");
    const listArr = []

    for (let i = 3; i <= currentUrlList.length - 1 ; i++){
        listArr.push(currentUrlList[i])
    }
    
    const crumbsList = listArr.map((el, index) => { 
        return <Breadcrumb.Item key={index} href={el}>{linkNames[el] ? linkNames[el] : 'null'}</Breadcrumb.Item>} )
    
    return(
        <Div {...props}>
            <Breadcrumb separator="/">
            <Breadcrumb.Item href={'/'}> Главная </Breadcrumb.Item>
                { crumbsList }
            </Breadcrumb>
        </Div>
    )
}

export default BreadcrumbLine
