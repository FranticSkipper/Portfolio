import React, { useEffect } from 'react'
import Body from './Body/Body'
import { withContainer } from '../../HOC/withContainer/withContainer'
const BasketOrder = (props) => {
    useEffect(() => {
        document.title = 'Оформление заказа'
    })
    return (
        <div>
            {withContainer(Body)}
        </div>
    )
}

export default BasketOrder