import React from 'react'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'

const Div = styled.div`
    padding: 31px 42px 30px;
    background: #FBD864;
    @media(max-width: 1198px){
        margin-bottom: 40px;
    }
    @media(max-width: 525px){
        padding: 21px 32px 20px;
        margin-bottom: 20px;
    }
`
const FormField = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    align-self: start;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 116%;

    color: #333333;
    margin-bottom: 32px;
    @media(max-width: 991px){
         margin-bottom: 22px;
    }
    @media(max-width: 525px){
         margin-bottom: 12px;
    }
`
const Row = styled.div`
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    @media(max-width: 768px){
        flex-wrap: wrap;
        gap: none;
    }
`
const Input = styled.input`
    border: 0;
    border-radius: 5px;
    padding: 12px 14px;
    flex: 1 1 auto;
    @media(max-width: 768px){
        flex: 1 1 100%;
    }
`
const Textarea= styled.textarea`
    border: 0;
    border-radius: 5px;
    margin-bottom: 25px;
    padding: 12px 14px;
    resize: none;
    width: 100%;
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



const Feedback = (props) => {
    const onSubmit = async (values) => {
    
      };
    const changeUsername = (e) => {
        const value = e.target.value
        props.getUsernameActionCreator(value)
    }
    const changeEmail = (e) => {
        const value = e.target.value
        props.getEmailActionCreator(value)
    }
    const changePhoneNumber = (e) => {
        const value = e.target.value
        props.getPhoneNumberActionCreator(value)
    }
    const changeComment = (e) => {
        const value = e.target.value
        props.getCommentActionCreator(value)
    }
    return (
        <Div>
            <Form onSubmit={onSubmit}>
            {props => (
                <FormField onSubmit={props.handleSubmit}>
                    <Title>Есть вопросы или предложения? Напишите нам!</Title>
                        <Row>
                            <Field
                            name="name"
                            render={() => (
                                <Input onChange={changeUsername} value={props.username} component="input" placeholder="Выше имя:" />
                            )}
                            />
                            <Field
                            name="email"
                            render={() => (
                                <Input onChange={changeEmail} value={props.email} component="input" placeholder="Ваше email:" />
                            )}
                            />
                            <Field
                            name="phone"
                            render={() => (
                                <Input onChange={changePhoneNumber} value={props.phoneNumber}  component="input" placeholder="Номер телефона:" />
                            )}
                            />
                        </Row>
                        <Field
                        name="comment"
                            render={() => (
                                <Textarea onChange={changeComment} rows='5' component="textarea" value={props.comment} placeholder="Ваш комментарий" />
                            )}
                            />
                        <Button type="submit">отправить</Button>
                </FormField>
            )}
            </Form>
        </Div>
    )
}

export default Feedback