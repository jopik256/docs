import React, {FC, useState, FormEvent, ChangeEvent} from 'react';
import {Form, Button, Container} from 'react-bootstrap'
import Header from '../Header';
import Sidebar from '../Sidebar';

const MainPage: FC = () => {

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return(
     <>
      <Form onSubmit={onSubmit}>
      <Form.Group className='mb-3'>
        <Header></Header>
      </Form.Group>
        <Sidebar></Sidebar>
      </Form>
     </>  
    )
};

export default MainPage;