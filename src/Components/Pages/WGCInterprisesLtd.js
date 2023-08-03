import React from 'react';
import Row1 from "../Rows/Row1"
import Row2 from '../Rows/Row2.js';


const WGCInterprisesLtd = () => {
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
            <h1>WGC Interprizes Ltd.</h1>
            <div className='Rows'> <Row1 /></div>
            <div className='Rows'> <Row2 /></div>

        </div>
    );
};

export default WGCInterprisesLtd;

// https://github.com/briancodex/react-navbar-v3/blob/main/src/components/Navbar/index.js