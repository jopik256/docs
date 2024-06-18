import React, {FC, useState, FormEvent, ChangeEvent} from 'react';
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Auth: FC = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        navigate('');
    };

    const onLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setLogin(e.target.value)
    };

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassword(e.target.value)
    };

    return(
     <>
      <h1 className="text-center">Авторизация</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3'>
            <Form.Label contolid="login">Логин</Form.Label>
            <Form.Control
             type="text"
             onChange={onLoginChange}
             value={login}
             placeholder="Введите логин"
             name="login" id="login"
            />
        </Form.Group>

        <Form.Group className='mb-3'>
            <Form.Label contolid="password">Пароль</Form.Label>
            <Form.Control
             
             type="text"
             onChange={onPasswordChange}
             value={password}
             placeholder="Введите пароль"
             name="password" id="password"
            />
        </Form.Group>
        <Button variant="primary" type="submit">
            Войти
        </Button>
      </Form>
     </>    
    )
}

export default Auth;