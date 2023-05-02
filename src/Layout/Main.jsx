import React, { Children } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/0. Shared/Header/Header';
import Footer from '../Pages/0. Shared/Footer/Footer';
import Navigation from './NavigationBar';
import { Container } from 'react-bootstrap';
import NavigationBar from './NavigationBar';

const Main = () => {
    return (
        <Container className='bg-secondary'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    );
};

export default Main;