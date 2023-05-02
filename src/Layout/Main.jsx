import React, { Children } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/0. Shared/Header/Header';
import Footer from '../Pages/0. Shared/Footer/Footer';
import Navigation from './Navigation';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;