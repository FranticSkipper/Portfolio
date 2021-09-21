import React, { useState } from 'react'
import styled from 'styled-components'
import MenuContainer from '../../../global/Menu/MenuContainer'
import Paggination from '../../../global/Paggination/Paggination'
import Products from '../../../global/Products/Products'
import FilterButton from './FilterButton/FilterButton'
import Row from './Row/Row'
import Sort from './Sort/Sort'
const Div = styled.div`
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-transform: uppercase;

    color: #333333;
    margin-bottom: 25px;
`

const Content = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    return(
        <Div>
            <Title>Велосипеды</Title>
            <MenuContainer/>
            <Row/>  
            <Sort/>
            <FilterButton showModal={props.showModal}/>
            <Products currentPage={currentPage} goods={props.goods} itemsPageSize={props.goodsPerPage}/>
            <Paggination setCurrentPage={setCurrentPage} itemsAmount={props.goodsAmount} itemsPageSize={props.goodsPerPage}/>
        </Div>
    )
}

export default Content
