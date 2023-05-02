import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms & Conditions</h2>
            <p>Go back to <Link to='/register'>Registration</Link></p>
            <p></p>
        </div>
    );
};

export default Terms;