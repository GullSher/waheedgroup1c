import React from 'react';
import { Row, Col, Card } from "react-bootstrap";
import '../Card3/Card3.css';


// import image1 from '../Assets/logo1/fauji foundation.png';

const Card3 = (props) => {

    return (

        // <div className="card3" style={{ width: '33%', height: '25%', backgroundColor: 'orange' }} >
        <div className="card3" style={{ width: '33%', height: '25%', backgroundColor: props.bgclr }} >
            {/* <div class="card" style={{ width: '32%', height: '30%' }}> */}
            {/* <div class="card"> */}
            {/* <h3 className="card-title">CARD TITLE </h3> */}
            <h3 className="card-title">{props.title}</h3>
            {/* <div className="card"> */}
            <div className="Card">
                {/* <img src={props.imgsrc} alt={props.alts} style={{ color: { props.clr }, width: "25%", height: "25%" }} /> */}
                {/* <img src={props.imgsrc} alt={props.alts} style={{ backgroundColor: "red", width: "25%", height: "25%" }} /> */}
                <img src={props.imgsrc} alt={props.alts} style={{ width: "225px", height: "225px" }} />
                <div class="container">
                    <h4><b>Fauji Foundation</b></h4>
                    <p>Best Quality Healthy Food</p>
                    <p className="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <button className="card-btn">READ MORE</button>

                </div>
            </div>

        </div >
    )
}
export default Card3
