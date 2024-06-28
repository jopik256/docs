import React, {FC, useState, FormEvent, ChangeEvent} from 'react';
import {Button, Form, Modal, Col, Row, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const DocAdd:FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const [show, setShow] = useState(true);

  const handleClose = (props: any) => setShow(false);


  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('');
  };

  return (
    <Form onSubmit={onSubmit}>
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавление документа
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>

           <Form.Group className='mb-3'>
            <Form.Label contolid="docName">Название документа</Form.Label>
            <Form.Control
             type="text"
             placeholder="Введите название документа"
             name="docName" id="docName"
            />
           </Form.Group>

           <Form.Group className='mb-3'>
            <Form.Label contolid="docFile">Приложите файл документа</Form.Label>
            <Form.Control
             type="file"
             name="docFile" id="docFile"
            />
           </Form.Group>

            <Form.Group className='mb-3'>
            <Form.Label contolid="approvalDate">Дата согласования</Form.Label>
            <Form.Control
             type="text"
             placeholder="Введите дату согласования"
             name="approvalDate" id="approvalDate"
            />
            </Form.Group>

            <Form.Group className='mb-3'>
            <Form.Label contolid="signingDate">Дата подписания</Form.Label>
            <Form.Control
             type="text"
             placeholder="Введите дату подписания"
             name="signingDate" id="signingDate"
            />
            </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label contolid="docFile">Приложите электронную подпись</Form.Label>
            <Form.Control
             type="file"
             name="docFile" id="docFile"
            />
           </Form.Group>


            <Form.Group className='mb-3'>
            <Form.Label contolid="description">Описание</Form.Label>
            <Form.Control
             as="textarea"
             placeholder="Введите описание документа"
             name="description" id="description"
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

export default DocAdd;

