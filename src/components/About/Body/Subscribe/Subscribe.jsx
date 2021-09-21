import React from 'react'
import { Form } from "react-final-form";
import styled from 'styled-components'

const Div = styled.div`
    flex: 1 1 auto;
`
const FormField = styled.div`
    padding: 36px 31px 40px;
    background: #FFCC01;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #333333;
    max-width: 470px;
    margin-bottom: 25px;
    @media(max-width: 991px){
        max-width: none;
    }
`
const Row = styled.div`
    display: flex;
    @media(max-width: 525px){
        flex-direction: column;
    }
`
const Input = styled.input`
    padding: 15px;
    flex: 1 1 auto;
    margin-right: 17px;
    border: 0;
    border-radius: 5px;
    @media(max-width: 525px){
        margin-right: 0;
        margin-bottom: 20px;
    }
`
const Button = styled.button`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;

    color: #fff;
    background: #666;
    padding: 15px 32px;
    border: 0;
    border-radius:5px;
`



const Subscribe = (props) => {
    const changeEmailInput = (e) => {
        const value = e.target.value
        props.getEmailActionCreator(value)
    }
    const onSubmit = async (values) => {
        
      };
    
    return(
        <Div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                <FormField onSubmit={handleSubmit}>
                    <Title>Интересуетесь жизнью компании? Подпишитесь на рассылку!</Title>
                    <Row>
                        <Input onChange={changeEmailInput} type="mail" placeholder='Введите свой e-mail' value={props.email}/>
                        <Button type='submit'>отправить</Button>
                    </Row>
                   
                </FormField>
                )}
            />
        </Div>
    )
}

export default Subscribe
