import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container className='text-center border m-auto bg-secondary p-5'>
            <div className='text-center d-flex m-auto justify-content-center'>
                <p className='mx-3'>Facebook</p>
                <p className='mx-3'>Twitter</p>
                <p className='mx-3'>Instagram</p>
                <p className='mx-3'>Discord</p>
            </div>
            <h4>COPYRIGHT © 2021 ZEN - COOK FINDER - ALL RIGHTS RESERVED</h4>
            <div>
                <Link className='text-decoration-none mx-3 text-black' to="/terms">Terms & Conditions</Link>
                <Link className='text-decoration-none mx-3 text-black'>Privacy Policy</Link>
                <Link className='text-decoration-none mx-3 text-black'>Blog</Link>
            </div>
        </Container>
    );
};

export default Footer;