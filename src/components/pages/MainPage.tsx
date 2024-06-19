import React, {FC, useState, FormEvent, ChangeEvent} from 'react';
import {Form, Button, Container} from 'react-bootstrap'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Auth from './Auth';
import DocAdd from '../DocAdd';
import UserAdd from '../UserAdd';

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
        <UserAdd></UserAdd>
      </Form>
     </>  
    )
};

export default MainPage;