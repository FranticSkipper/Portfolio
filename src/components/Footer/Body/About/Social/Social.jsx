import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    
`
const Link = styled.a`
    display: block;
    cursor: pointer; 
`
const Img = styled.div`
transition: .2s linear;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #999;
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 17px 17px;
`
const Social = (props) => {
    const linkHover = event => {
        const el = event.target
        const styleTransform = 'scale(1.2)'
        el.style.transform = styleTransform

    }
    const linkOut = event => {
        const el = event.target
        const styleTransform = 'scale(1)'
        el.style.transform = styleTransform
    }
    return (
       <Div>
           <Link onMouseOverCapture={linkHover} onMouseOutCapture={linkOut}  href={props.link}>
               <Img onMouseOverCapture={linkHover} onMouseOutCapture={linkOut}   {...props}></Img>
           </Link>
       </Div>
    )
}

export default Social