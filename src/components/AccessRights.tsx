import React, {FC, useState, FormEvent, ChangeEvent} from 'react';
import {Button, Form, Modal, Col, Row, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const AccessRights:FC = () => {
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
          Права доступа к документам
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
            <Form className="list-documnets">
            <div className='item d-flex flex-row align-items-center jusify-content-between'>
                <div className=''>Устав СибГИУ</div>
                <Form.Check
                inline
                name="group1"
                />
            </div>

            <div className='item d-flex flex-row align-items-center jusify-content-between'>
                <div className=''>Правила внутреннего распорядка СибГИУ</div>
                <Form.Check
                inline
                name="group1"
                />
            </div>

            <div className='item d-flex flex-row align-items-center jusify-content-between'>
                <div className=''>Правила внутреннего трудового распорядка</div>
                <Form.Check
                inline
                name="group1"
                />
            </div>

            <div className='item d-flex flex-row align-items-center jusify-content-between'>
                <div className=''>Положение о корпоративной символике СибГИУ</div>
                <Form.Check
                inline
                name="group1"
                />
            </div>
           </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Далее</Button>
      </Modal.Footer>
    </Modal>
    </Form>
  );
}

export default AccessRights;

