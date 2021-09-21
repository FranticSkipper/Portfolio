import React, { useEffect } from 'react'
import Body from './Body/Body'
import { withContainer } from '../../HOC/withContainer/withContainer'

const Category = (props) => {
    useEffect(() => {
        document.title = 'Каталог'
    })
    return (
        <div>
            {withContainer(Body)}
        </div>
    )
}

export default Category