import React, {FC, useState, FormEvent, ChangeEvent} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Form, Modal, Col, Row, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const UserAdd:FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const [show, setShow] = useState(true);

  const handleClose = (props: any) => setShow(false);


  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // navigate('/auth');
  };

  return (
    <Form onSubmit={onSubmit}>
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавление польозователя
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>

           <Form.Group className='mb-3'>
            <Form.Label contolid="userName">Имя пользователя</Form.Label>
            <Form.Control
             type="text"
            //  onChange={onLoginChange}
            //  value={login}
             placeholder="Введите имя пользователя"
             name="userName" id="userName"
            />
           </Form.Group>

           <Form.Group className='mb-3'>
            <Form.Label contolid="password">Пароль</Form.Label>
            <Form.Control
             type="text"
            //  onChange={onLoginChange}
            //  value={login}
             placeholder="Введите пароль"
             name="password" id="password"
            />
           </Form.Group>

        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Далее</Button>
      </Modal.Footer>
    </Modal>
    </Form>
  );
}

export default UserAdd;