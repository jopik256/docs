import React, {FC, useState, FormEvent, ChangeEvent} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Form } from 'react-bootstrap';

const Sidebar:FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value)
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
            <Nav className="col-md-2 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                Каталог
            </Nav.Item>
            </Nav>
    </Form>
  );
}

export default Sidebar;