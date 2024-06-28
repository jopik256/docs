import React, {FC, useState, FormEvent, ChangeEvent} from 'react';
import {Button, Form, Modal, Col, Row, Container } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";

const Categories:FC = () => {
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
          Редактирование каталогов
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
            <Form className="list-documnets">

            <div className='item d-flex flex-row align-items-center jusify-content-between'>
                <Link to="">
                 <Button variant="link">Устав образовательной организации</Button>
                </Link>
            </div>


            <div className='item d-flex flex-row align-items-center jusify-content-between'>
                <Link to="">
                 <Button variant="link">Свидетельство о государственной аккредитации</Button>
                </Link>
            </div>

            <div className='item d-flex flex-row align-items-center jusify-content-between'>
                <Link to="">
                 <Button variant="link">Правила внутреннего распорядка обучающихся</Button>
                </Link>
            </div>
           </Form>
           <Form.Group className='mb-3'>
            <Form.Control
             type="text"
             placeholder="Введите название нового каталога"
             name="signingDate" id="signingDate"
            />
            <Button>Добавить новый каталог</Button>
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

export default Categories;

