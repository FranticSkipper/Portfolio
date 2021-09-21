import React from 'react'
import styled from 'styled-components'
import ItemNet from './ItemNet/ItemNet';

const Div = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 215px);
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    grid-template-areas:  
                "grid1 grid2"
                "grid1 grid3";
    @media(max-width: 525px){
        grid-template-areas:  
                "grid1"
                "grid2"
                "grid3";
        grid-template-rows: repeat(3, 215px);
        grid-template-columns: 1fr;
    }
`


const Net = (props) => {

    const itemsList = props.articles.map(el => 
        <ItemNet 
            key={el.id}
            text={el.title}
            image={el.image}
            area = {'grid' + el.id}
        />)
    return (
        <Div>
            { itemsList }
        </Div>
    )
}

export default Net