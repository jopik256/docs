import React, {FC, useState, FormEvent, ChangeEvent} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Header:FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value)
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // navigate('/auth');
  };

  return (
    <Form>
    <Navbar className="bg-body-tertiary">
      <Container>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
          <Nav fill variant='underline' className="me-auto">
            <Form.Control
             type="text"
             onChange={onSearchChange}
             value={searchValue}
             placeholder="Поиск"
             name="search" id="search"
             style ={{width: '300px'}}
            />
            <Button type="submit" >Добавить документ</Button>
            <Button type="submit" >Выход</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Form>
  );
}

export default Header;