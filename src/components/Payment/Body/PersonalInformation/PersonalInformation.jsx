import React from 'react'
import { Form, Field } from "react-final-form";
import styled from 'styled-components'


const Div = styled.div`
    padding: 25px;
    border: 1px solid #FFCC01;
    margin-right: 40px;
    flex: 0 1 580px;
    @media(max-width: 1198px){
        flex: 0 1 45%;
        margin-right: 10px;
    }
    @media(max-width: 991px){
        margin-right: 0;
        flex: 0 1 auto;
    }
    
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 116%;

    color: #333333;
    margin-bottom: 46px;
`
const FormField = styled.form`
    display: flex;
    flex-direction: column;
    padding-left: 46px;
    @media(max-width: 768px){
        padding-left: 0px;
    }
`
const Label = styled.label`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 143%;

    color: #888888;

    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 25px;
    @media(max-width: 525px){
        flex-direction: column;
        margin-bottom: 20px;
    }
    span{
        flex: 0 0 107px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 10px;
        @media(max-width: 525px){
            flex: 0 0 auto;
        }
    }

`
const Input = styled.input`
    width: 100%;
    height: 41px;
    border-radius: 3px;
    border: 1px solid #E5E5E5;
    background: #F2F2F2;
    padding: 14px;
`
const InputWrapper = styled.div`
    flex:  1 1 auto;
    
`
const InputWrapperMail = styled(InputWrapper)`
    position: relative;
        :after{
            content: 'Если вы хотети следить за статусом заказа!';
            position: absolute;
            display: block;
            top: 100%;
            left: 0;

            font-style: normal;
            font-weight: normal;
            font-size: 11px;
            line-height: 143%;
    }
`
const Button = styled.button`
    align-self: center;
    background: #FFCC01;
    padding: 12px 14px;
    border: 0;
    border-radius: 6px;
    color: #333333;
    margin-top: 10px;
    text-transform: uppercase;
`

const PersonalInformation = (props) => {
    const onSubmit = async (values) => {
 
      };
    
    const changeFullName = (e) => {
        const value = e.target.value
        props.changeFullNameActionCreator(value)
    }
    const changePhone = (e) => {
        const value = e.target.value
        props.changePhoneActionCreator(value)
    }
    const changeEmail = (e) => {
        console.log(123);
        const value = e.target.value
        props.changeEmailActionCreator(value)
    }


    return (
        <Div>
            <Title>
                Контактные данные
            </Title>


            <Form
                onSubmit={onSubmit}
              
                render={({ handleSubmit }) => (
                <FormField onSubmit={handleSubmit}>

                    <Field name="fullName" {...props}>
                        {props => (
                            <Label>
                                <span>Имя и фамилия:</span>
                                <InputWrapper>
                                    <Input  type={'text'} onChange={changeFullName}  placeholder={'ФИО'} />
                                </InputWrapper>
                            </Label>
                        )}
                    </Field>

                    <Field name="phoneNumber" {...props}>
                        {props => (
                            <Label>
                                <span>Телефон:</span>
                                <InputWrapper>
                                    <Input type="number" onChange={changePhone} value={props.phone} placeholder={'Номер телефона'} />
                                </InputWrapper>
                                
                            </Label>
                        )}
                    </Field>

                    <Field name="email" {...props}>
                        {props => (
                            <Label>
                                <span>Эл. почта:</span>
                                <InputWrapperMail>
                                    <Input type={'email'} onChange={changeEmail} value={props.email} placeholder={'Эл. почта'} />
                                </InputWrapperMail>
                                
                            </Label>
                        )}
                    </Field>
                    <Button type="submit">Продолжить</Button>
                </FormField>
                )}
            />
        </Div>
    )
}

export default PersonalInformation