import React from 'react'
import styled from "styled-components";
import { paginate } from '../../../functions';
import Product from './Product/Product';


const Div = styled.div`
    margin: 0 -15px;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    @media(max-width: 991px){
        margin: 0 -5px;
    }
`

const Products = (props) => {
    
    const currentGoodsList = paginate(props.goods, props.currentPage, props.itemsPageSize)
    const productsGoods = currentGoodsList.map(el => 
        <Product 
                key={el.id}
                id={el.id}
                image={el.image}           
                labels={el.labels}           
                title={el.title}           
                rating={el.rating}           
                colors={el.colors}           
                isStock={el.isStock}           
                oldCost={el.oldCost}           
                currentCost={el.currentCost}           
                parameters={el.parameters}           
                comments={el.comments}           
        />
        )
    return(
        <Div>
           { productsGoods }
        </Div>
    )
}

export default Products
