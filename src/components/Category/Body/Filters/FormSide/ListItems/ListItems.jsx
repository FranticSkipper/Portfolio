import React from 'react'
import styled from 'styled-components'
import Item from './Item/Item'


const Div = styled.div`

`


const ListItems = (props) => {

    const typesList = props.list.map(el => <Item key={el.id} inputName={props.inputName} name={el.name} goodsAmount={el.id}/>)
    
    return(
        <Div>
            { typesList }
        </Div>
    )
}

export default ListItems