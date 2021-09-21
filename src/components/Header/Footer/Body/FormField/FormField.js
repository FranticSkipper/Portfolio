import React from 'react'
import { Form, Field } from 'react-final-form'
import styled from "styled-components";

const Div = styled.div`
    flex: 1 1 auto;
    background: #F8F8F8;
    padding: 7px 9px;
    margin-right: 30px;
    @media (max-width: 1198px){
        margin-right: 15px;
    }
    @media(max-width: 991px){
        margin-right: 0;  
        margin-bottom: 34px;
    }
`
const StyledForm = styled.form`
    display: flex;
    align-items: center;
`
const Input = styled.input`
    border: 1px solid #D0D0D0;
    padding: 0 20px;
    flex: 1 1 auto;
    height: 40px;
    @media(max-width: 991px
        ){
        padding: 0 12px;
    }
    ::placeholder{
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;

        color: #888888;
    }
`
const Button = styled.button`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #333333; 

    border: 0;

    width: 120px;
    height: 40px;
    background: #FFCC01;
    @media(max-width: 991px){
        width: 75px;
    }
`



const FormField = (props) => {
    const onSubmit = async (values) => {};
    const changeFormField = (e) => {
        const newText = e.target.value
        props.сhangeFormTextActionCreator(newText)
    }
    return (
        <Div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                <StyledForm onSubmit={handleSubmit}>
                    <Field name="searchSubject" {...props}>
                        {props => (
                            <Input onChange={changeFormField} type="text" value={props.formField} placeholder='Что вы хотите приобрести?' />
                        )}
                        </Field>
                    <Button type="submit">Найти</Button>
                </StyledForm>
                )}
            />
        </Div>
    )
}

export default FormField