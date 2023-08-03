import React from 'react';
import { Row, Col, Card } from "react-bootstrap";
import '../Card1/Card1.css';
import ReactDOM from 'react-dom/client';

const Card1 = (props) => {
    //  const Card2() = (props) => {
    return (

        <div className="card1 Card">
            {/* <div className={"card"}> */}
            {/* <div className="card-navbar"><Navbar1 /></div> */}
            <h3 className="card-title">CARD1 TITLE 1</h3>
            <p className="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            <button className="card-btn">READ MORE</button>
        </div>

    )
}
export default Card1