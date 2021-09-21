import React, { useEffect } from 'react'
import Body from './Body/Body'
import { withContainer } from '../../HOC/withContainer/withContainer'

const Home = () => {
    useEffect(() => {
        document.title = 'Velostandart - интернет магазин велосипедов'
    })
    return (
        <div>
            {withContainer(Body)}
        </div>
    )
}

export default Home