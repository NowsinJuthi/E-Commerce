import React from 'react';
import { Link } from 'react-router-dom';

const Media = () => {
    return (
        <>
        <div className="main grid grid-rows-6 ">
            <Link to={''}>
                WhatsApp
            </Link>
            <Link to={''}>
                Facebook
            </Link>
            <Link to={''}>
                Instagram
            </Link>
            <Link to={''}>
                Telegram
            </Link>
            <Link to={''}>
                Youtube
            </Link>
            <Link to={''}>
                Discord
            </Link>
        </div>
        </>
    );
};

export default Media;