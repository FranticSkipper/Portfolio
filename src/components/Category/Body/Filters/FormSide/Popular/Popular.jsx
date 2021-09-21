import React from 'react'
import styled from 'styled-components'
import Item from './Item/Item'


const Div = styled.div`

`


const Popular = (props) => {
    const popularList = props.popular.map(el => <Item key={el.id} name={el.name} link={el.link}/>)
    return(
        <Div>
            {popularList}
        </Div>




    )
}

export default Popular