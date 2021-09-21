import React from 'react'
import { Pagination } from 'antd';
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 102px;
    @media(max-width: 991px){
        margin-bottom: 62px;
    }
    @media(max-width: 525px){
        margin-bottom: 32px;
    }
    .ant-pagination-item:hover{
        border-color: #333333;
        a{
            color: #333333;
        }
        
    }
    .ant-pagination-item-active{
        border-color: #FFCC01;
        a{
            color: #FFCC01;
        }
    }
`

const Paggination = (props) => {
    return (
        <Div>
            <Pagination onChange={props.setCurrentPage} setCurrentPage={props.setCurrentPage} defaultCurrent={1} pageSize={props.itemsPageSize} total={props.itemsAmount} />
        </Div>
    )
}

export default Paggination