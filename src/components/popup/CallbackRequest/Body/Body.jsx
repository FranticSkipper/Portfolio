import React from 'react'
import { Form, Field } from "react-final-form";
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    width: 225px;
    text-align: center;
    align-self: center;

    color: #333333;
    margin-bottom: 23px;
`
const FormField = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #333333;
    padding: 17px 16px;
    width: 100%;

    background: linear-gradient(180deg, #E5E5E5 0%, #F9F9F9 100%);
    border: 1px solid #D0D0D0;
    border-radius: 5px;
    margin-bottom: 15px;
`
const ButtonSubmit = styled.button`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;

    color: #333333;
    padding: 14px 25px;
    background: #FFCC01;
    border-radius: 5px;
    border: 0;
    height: 50px;
`


const Body = (props) => {  
    const onSubmit = async (values) => {
      }; 
    return(
        <Div>
            <Title>Оставить заявку на обратный звонок</Title>
            
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                <FormField onSubmit={handleSubmit}>
                    <Field name="name" value={props.userName}>
                        {props => (
                            <div>
                                <Input 
                                    type="text"
                                    placeholder="Имя"
                                />
                            </div>
                        )}
                    </Field>

                    <Field name="phone">
                        {props => (
                            <div>
                                <Input 
                                    type="number"
                                    placeholder="###"
                                />
                            </div>
                        )}
                    </Field>            

                    <ButtonSubmit type="submit">Отправить</ButtonSubmit>
                </FormField>
                )}
            />
        </Div>
    )
}

export default Body
