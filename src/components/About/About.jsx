import React, { useEffect } from 'react'
import Body from './Body/Body'
import { withContainer } from '../../HOC/withContainer/withContainer'

const About = (props) => {
    useEffect(() => {
        document.title = 'О магазине'
    })
    return (
        <div>
            {withContainer(Body)}
        </div>
    )
}

export default About