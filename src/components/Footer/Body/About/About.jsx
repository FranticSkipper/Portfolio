import React from 'react'
import styled from 'styled-components'
import logo from '../../../../assets/global/logo-light.svg'
import { NavLink } from 'react-router-dom';
import Social from './Social/Social';

const Div = styled.div`
    max-width: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 150px;
    @media(max-width: 1198px){
        margin-right: 30px;
    }
    @media(max-width: 512px){
        margin-bottom: 20px;
    }
    & > a{
        margin-bottom: 20px;
    }
`
const Socials = styled.div`
    display: flex;
    flex-direction: column;
`
const Row = styled.div`
    display: flex;
    gap: 15px;
`
const Text = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #fff;

    text-align: center;
    margin-bottom: 20px;
    ::first-letter{
        text-transform: uppercase;
    }
`
const Title = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    text-align: center;

    text-transform: uppercase;
    margin-bottom: 50px;
    position: relative;
    ::after{
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: -22px;
        background: #888888;
    }
`

const About = (props) => {

    const socialsList = props.socials.map(el => {
        return <Social key={el.id} image={el.image} link={el.link} alt={el.alt}/>
    })

    return (
       <Div>
           <NavLink to='/'>
               <img src={logo} alt="" />
           </NavLink>
           <Title>велосипеда, которые дарят счастье</Title>
           <Socials>
               <Text>мы в сети</Text>
                <Row>
                    { socialsList }
                </Row>
               
           </Socials>
       </Div>
    )
}

export default About