import React, { useEffect } from 'react'
import Body from './Body/Body'
import { withContainer } from '../../HOC/withContainer/withContainer'

const Contacts = (props) => {
    useEffect(() => {
        document.title = 'Контакты'
    })
    return (
        <div>
            {withContainer(Body)}
        </div>
    )
}

export default Contacts