import React, { useEffect } from 'react'
import { withContainer } from '../../HOC/withContainer/withContainer'
import Body from './Body/Body'



const News = () => {
    useEffect(() => {
        document.title = 'Новости'
    })
    return (
        <div>
            {withContainer(Body)}
        </div>
    )
}

export default News