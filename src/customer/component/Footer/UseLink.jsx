import React from 'react';
import { Link } from 'react-router-dom';

const UseLink = () => {
    return (
        <>
            <div className="main grid grid-rows-6 pl-12">
                <Link to={''}>
                    Refund And Returns Policy
                </Link>
                <Link to={''}>
                    Terms & Conditions
                </Link>
                <Link to={''}>
                    Privacy Policy
                </Link>
                <Link to={''}>
                    Disclaimers
                </Link>
                <Link to={''}>
                    About us
                </Link>
                <Link to={''}>
                    Contact us
                </Link>
            </div>

        </>
    );
};

export default UseLink;