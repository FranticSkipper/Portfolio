import React, { useState } from 'react'
import History from './History/History'
import LastNews from './LastNews/LastNews'
import styled from 'styled-components'
import BreadcrumbLine from '../../../global/Breadcrumb/Breadcrumb'
import Paggination from '../../../global/Paggination/Paggination'

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 94px;
    @media(max-width: 991px){
        flex-direction: column;
        margin-bottom: 54px
    }
    @media(max-width: 525px){
        margin-bottom: 24px
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
`

const Articles = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
        <div>
            <BreadcrumbLine/>
            <Title>Новости</Title>
            <Row>
                <LastNews/>
                <History itemsPageSize={props.itemsPageSize} currentPage={currentPage}/>
            </Row>
            <Paggination setCurrentPage={setCurrentPage} itemsAmount={props.itemsAmount} itemsPageSize={props.itemsPageSize}/>
        </div>
    )
}

export default Articles