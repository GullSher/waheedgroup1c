import React from 'react';
import Row1 from "../Rows/Row1"
import Row2 from '../Rows/Row2.js';
// import Footer from '../Footer/Footer.js';

const Transport = () => {
    return (

        <div
            style={{
                // display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // height: '20vh',
                height: '100%',
                backgroundColor: 'white'
            }}
        >
            <h1 style={{ fontSize: "70px" }} >Transport Page.</h1>
            <div className='Rows'> <Row1 /></div>
            <div className='Rows'> <Row2 /></div>


            {/* 
            <div className="Footer"><Footer /></div> */}

        </div>

    );
};

export default Transport;
