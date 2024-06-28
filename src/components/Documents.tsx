import React, {FC, useState, FormEvent, ChangeEvent} from 'react';
import {Form, Button, Container} from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom";

const Documents: FC = () => {

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return(
     <>
        <Container>
        <Form className="list-documnets">

            <div className='item d-flex flex-row align-items-center jusify-content-between'>
            <div className=''>Правила внутреннего трудового распорядка</div>
                <Link to="">
                <Button variant="link">Загрузить</Button>
                </Link>
            </div>


            <div className='item d-flex flex-row align-items-center jusify-content-between'>
            <div className=''>Устав СибГИУ</div>
                <Link to="">
                <Button variant="link">Загрузить</Button>
                </Link>
            </div>

            <div className='item d-flex flex-row align-items-center jusify-content-between'>
            <div className=''>Положение о корпоративной символике СибГИУ</div>
                <Link to="">
                <Button variant="link">Загрузить</Button>
                </Link>
            </div>
            </Form>
        </Container>
     </>  
    )
};

export default Documents;

